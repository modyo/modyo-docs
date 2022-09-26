---
search: true
---

# Infrastructure
Infrastructure components enable a secure and scalable execution environment for [microservices](.. /resources/microservices.md) developed on Modyo Connect. 

## API Gateway
The API Gateway is the entry point for all the APIs deployed within Modyo Connect and is mainly responsible for authorizing incoming requests and channeling them to the correct microservice. In addition, the API Gateway is capable of performing monitoring, rate limit and caching functions, to improve the performance of the APIs that operate under it. Modyo Connect uses the [AWS API Gateway](https://aws.amazon.com/api-gateway), which is an abstract service operated by Amazon.

The addition of endpoints to the API Gateway is done using special Java annotations within the source code of the microservice, which at the time of deployment allow obtaining a [Swagger](https://swagger.io) definition of the API that are dynamically incorporated into the service, as exemplified in the following example:

``` Java
package com.example.adapters.web;

import com.example.dto.UsersDto;
import com.example.service.UsersService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Authorization;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = {"Users"})
@RestController
@RequiredArgsConstructor
public class GetUsersController {
  @ApiOperation(
      value = "Get Users",
      nickname = "getUsers",
      tags = {
          "Users"
      },
      authorizations = {@Authorization(value = "ApiGWLambdaAuthorizer")},
      response = UsersDto.class)
  @GetMapping(value = "/users",
      produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<UsersDto> getUsers(
      @RequestHeader("Authorization") String accessToken
  ) {
    return ResponseEntity.ok(service.getUsers());
  }
}
```

The previous example shows the different annotations that the service must contain. The extraction of the Swagger generated for the API Gateway is performed within the deployment pipeline, which is configured and executed by activating [continuous integration](development .md#continuous-integration).


## Containers
Containers correspond to the execution environment on which microservices are deployed. Unlike virtual machines, containers only run one process at a time, from an image generated using a definition file in Dockerfile format.

Modyo Connect uses the AWS Elastic Container Service (ECS) container service in Fargate mode to run containers in the cloud. With AWS ECS Fargate, there is no need to control the orchestrating servers, since they run on a runtime managed by AWS.

### Container image
The container images are generated in a continuous integration process, following the definitions provided by the developer. Once generated, they are securely stored in the AWS Elastic Container Repository (ECR), which is directly integrated with the AWS ECS service.

Example of _Dockerfile_ that allocates 75% of the available RAM to the Java JVM used by the microservice.

``` Dockerfile
FROM adoptopenjdk/openjdk11-openj9:jdk-11.0.10_9_openj9-0.24.0
WORKDIR /usr/app
COPY build/libs/<microservice-name>.jar .
CMD java -XX:MaxRAMPercentage=75.0 -XX:MinRAMPercentage=75.0 -XX:InitialRAMPercentage=75.0 -jar -Dhttps.protocols=TLSv1.2 <microservice-name>.jar
```

### Size of instances
AWS ECS Fargate offers a wide variety of configurations, ranging from fractions of vCPUs to 16 vCPUs dedicated to a single container. Depending on the number of vCPUs chosen, dedicated RAM ranges ranging from 1 GB to 32 GB are activated. Depending on the chosen node size, more or less MRUs will be consumed in the service.

It is important to consider that in production, the MRU used by the component are multiplied by the redundancy factor required by the customer, the minimum being 2 (multi-zone). Pre-production environments are configured without redundancy.

:: warning Fractions of vCPUs
AWS allows the definition of containers with fractions of vCPUs allocated (example: 0.25 vCPU or 0.75vCPU). Since the Java JVM is a multithreaded execution environment, Modyo does not recommend productive or pre-productive deployment using fractions of vCPUs, because this causes I/O blockages and known performance problems. That's why the minimum will be 1 vCPU and the maximum will be 4 vCPU (AWS ECS Fargate limitation).
:::


## Secret Management
Modyo Connect allows the secure management of secret parameters for the configuration of [microservices](.. /resources/microservices.md) using AWS Secret Manager. AWS Secret Manager generates a central and secure store of parameters that should not be stored in the source code or be publicly known to Connect developers, for example: database credentials, API access tokens, external service credentials, etc.

In addition, there is additional secret management in the GitHub Enterprise repository, which is used internally to share details of access to tokens with the GitHub Actions continuous integration scripts. If you need to incorporate a process within GitHub Actions that requires a secret parameter, this can be requested.

### Steps to apply
To request the configuration of a new secret, a requirement ticket must be created in the Modyo Support Center.

:: danger Secrets Confidentiality
Modyo does not recommend attaching the secret values of these parameters to the ticket. A secure communication channel with the client must be established, which ensures the confidentiality of the settings to be configured.
:::


## Encryption
Modyo uses the managed encryption of AWS KMS for the secure encryption of all information at rest stored in object repositories and volumes of data managed for the customer.

The keys managed by AWS KMS are generated using the AES 256 standard and have an automatic annual regeneration cycle, meaning that no manual action is required to renew and update resources with the newly generated keys.

Modyo configures separate AWS KMS keys for each resource. By default, the complete generation and management of the encryption keys is delegated to AWS. If a customer wishes, externally managed keys can be added to the service, using the AWS CloudHSM module.

### Steps to apply
The at-rest encryption provided by the AWS KMS managed keys is active by default in all AWS S3 object repositories and data volumes in AWS RDS and OpenSearch, so it does not require any activation. 

If you require the addition of an externally managed key, you must use the AWS CloudHSM service, you must notify the Modyo Support Center with a request ticket, stating the reason and how you plan to manage the external key (implementation, renewals, etc.).


## TLS certificates
TLS certificates ensure secure encryption for all operations in transit from service endpoints. TLS certificates are activated at the load balancer, content delivery network, and API gateways level.

To generate and keep TLS certificates up to date, Modyo Connect uses AWS Certificate Manager (ACM). Certificates generated by AWS ACM will require domain verification, which must be carried out by the customer, incorporating the CNAME type records that are indicated as part of the generation process. Once the certificate is issued, the customer has three days to perform the validation, otherwise the certificate must be issued again.

Modyo does not have access to the private keys of certificates issued by AWS ACM, nor can they be used in services offered by Amazon within the account configured for the customer.

### Steps to apply
To request the issuance of a TLS certificate, you must indicate the subdomains to include. The applicant must first ensure that they have access to the DNS management panel for the domain or that they have the time of the person who has the access.

When you request, Modyo will issue a certificate “pending validation” which requires validation through DNS records.

:: warning Domain validation by DNS
The DNS records used for certificate validation should not be deleted, as they will be used by AWS ACM for renewal. It will be the customer's responsibility to ensure the existence of these records in their DNS system.
:::

Modyo does not recommend the use of wildcard certificates (*.domain.com) within the services.

Modyo uses the encryption policy recommended by AWS, which guarantees security, while maintaining a certain degree of compatibility with older devices. If the customer wants to activate more secure ciphers (reducing compatibility), they must request it by means of a request ticket at the Modyo Support Center.


## Single Sign On (SSO)
The Single Sign On (SSO) service allows you to integrate the Modyo platform session with the authenticated calls made over the API Gateway to access protected resources that cannot be directly exposed to the Internet.

Modyo Connect implements the SSO service using the [KeyCloak](https://www.keycloak.org) application, which is open source software sponsored by Red Hat (base of Red Hat SSO). The KeyCloak application is deployed on containers in a high-availability cluster mode. In addition, access is granted to the repository that originates the KeyCloak image, allowing you to have control over user experience customizations and authentication flows.

### Steps to apply
Requests to deploy SSO on Modyo Connect are made through a ticket in the [Modyo Support Center](https://support.modyo.com). Within the ticket, you can specify whether access to the full administration of the application, or the creation of user realms with specific configurations, will be required.

:: :warning KeyCloak customizations
User experience customizations and authentication flows within KeyCloak are the responsibility of the customer and are not included as part of the service. If professional services support is required in the implementation of an SSO initiative, the assigned account executive should be contacted.
:::

:: :danger Shared Responsibility
Modyo is not responsible for customizations or vulnerabilities introduced that come from customer-generated code. Some customizations may require modifications when updating the KeyCloak base software. It will be the customer's responsibility to carry them out in a timely manner in order to reduce the risks associated with maintaining unpatched versions of the component.
:::

## Object Repository
AWS S3. Amazon AWS object storage. It stores all the platform's static files, which, depending on the configured permissions, are available directly on the Web or Content Delivery Networks (CDNs).

## Content Delivery Network
The content distribution network allows for a global service 

Modyo uses the [AWS CloudFront](https://aws.amazon.com/cloudfront) service as a content delivery network.

## Database
AWS RDS Aurora. Amazon AWS database service, available in several versions (Postgres, Oracle, SQL Server, MySQL). RDS Aurora is compatible with MySQL 5.6, and unlike a traditional MySQL deployment, Aurora implements a high-availability cluster in which the data stored in it is persisted in 3 availability zones. 

## Cache and NoSQL
AWS Elasticache. Amazon AWS cache service, offered in two major variations: Memcache and Redis. In the case of Modyo, only the version of Redis is used, mainly because of its ability to be configured in a high-availability cluster mode.

AWS Elasticsearch. Amazon AWS content indexing service, implemented using Elasticsearch and with the ability to be configured as a high-availability cluster. 


## Messaging Queue
AWS SQS. High-performance and long-lasting messaging queue service that allows applications to communicate asynchronously.

## Sending Emails
Modyo Connect offers the possibility to use the outbound email service. Microservices that need to make use of this functionality must use the API that the Modyo platform has within the Customers application.

Outgoing emails sent by the Modyo platform API are encrypted and validated according to modern security standards. Sending domains require prior validation that is done at the DNS level.

In cases where the Modyo Customers API cannot be used, Modyo can authorize the delivery of direct SMTP credentials, after reviewing the case.


## Firewall Application
WAS WAF. Amazon AWS application firewall service. The Amazon WAF can be deployed on the Amazon CDN (CloudFront) or directly on the ELBs of the “application ELB” or ALB type. Amazon WAF has filters for the most common Web attacks (OWASP Top 10), such as SQL injections or scripts, in addition to offering the ability to define your own rules. 


## Virtual Private Network

AWS VPC. Amazon AWS virtual private network service. Modyo configures a VPC per client/environment, ensuring that all the elements configured for its customers are separated from each other.


## Domain Name Service
Modyo Connect can act as a DNS service for customers who require it. DNS records are configured within the AWS Route53 service.


## Domain Registration
Modyo Connect allows the customer to request the registration of TLD domains available on the AWS Route 53 service. Modyo cannot guarantee the availability of the domain chosen by the customer and will not be able to import domains with TLD extensions that are not compatible with those of AWS.


## Costs and activation times
| Component        | Cost in MRUs        | Enablement times (approx)  |
| ------------- |:-------------:|:-----:|
|Developer Access|1 MRU|1 day|p
|Code Repository|1 MRU|1 day|
|Continuing Integration|1 MRU|1-2 days|
|Artifact Repository|1 MRU|1 day|


