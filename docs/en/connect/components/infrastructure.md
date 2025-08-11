---
search: true
---

# Infrastructure

The infrastructure components provide a secure and scalable execution environment for APIs and [microservices](/en/architecture/patterns/microservice) developed on Modyo Connect in the [Amazon AWS](https://aws.amazon.com) cloud.

The infrastructure components are completely managed by the Modyo Connect service; users only need to worry about the code deployed on them. A team of Modyo cloud experts is responsible for parameterizing, automating, monitoring, and ensuring service continuity according to agreed-upon levels.

This guide details the most relevant infrastructure components within the Modyo Connect service.

## Load Balancing

Load balancing distributes Internet requests among a group of servers.

Modyo Connect implements load balancing using [AWS Application Load Balancer (ALB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html). The ALB integrates natively with other AWS services, offering unique security features such as route and protocol redirection, [SSL/TLS certificates](#ssl-tls-certificates), and the incorporation of [web application firewalls (WAF)](#application-firewall-waf).

### Steps to Activate

To request the creation of an ALB balancer in AWS, a requirement ticket must be created in the [Modyo Support Center](https://support.modyo.com) that includes:

- Domain to point to the ALB.
- Description of the use case and service to which it will be applied.
- Technical contact of the DNS administrator for SSL/TLS certificate validation and redirects.

Once created, the balancer can be used by a service within a cluster of [containers](#containers).

:::warning External Applications
The AWS ALB load balancer cannot direct traffic to AWS resources deployed outside the virtual private network (VPC) where it is deployed, so it should only be considered for use with internal resources.
:::


## API Gateway

The API Gateway is the entry point for all APIs deployed in Modyo Connect. It is responsible for managing and authorizing incoming requests, channeling them to the correct microservice. It can perform monitoring, quota management, and caching functions to improve API performance. Modyo Connect uses [AWS API Gateway](https://aws.amazon.com/api-gateway), an abstract service offered by AWS.

The incorporation of endpoints in the API Gateway is done through special annotations in the microservice source code (Java Spring Boot). At the time of deployment, these annotations allow obtaining a [Swagger](https://swagger.io) definition of the API, which is dynamically incorporated into the service, as shown in the following example:

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

The generation of the definitions for the API Gateway is done within an automated [continuous integration](development.html#continuous-integration) pipeline, which must be previously defined.

### Connectivity with containers

The API Gateway, being an abstract AWS service, operates outside the [Virtual Private Cloud (VPC)](https://aws.amazon.com/vpc) of the client. For integration with containers, a private network interface coupled to a [Network Load Balancer (NLB)](https://aws.amazon.com/elasticloadbalancing/network-load-balancer) located within the VPC is used. The different [containers](#containers) are automatically registered from the [AWS Elastic Container Service (ECS)](https://aws.amazon.com/ecs) container management platform. The NLB is responsible for balancing and health checking the registered containers.

### Activation steps

To request the creation of an API Gateway in AWS, a requirement ticket must be created in the [Modyo Support Center](https://support.modyo.com).

As a general rule, each environment has a single shared API Gateway for all deployed microservices. If authentication is required in API calls using JWT tokens, the API Gateway must be deployed in conjunction with the [Single Sign-On (SSO)](#single-sign-on-sso) component.

:::tip Authorization of invocations
To authorize invocations to private APIs, the AWS API Gateway establishes communication with the SSO through an [AWS Lambda](https://aws.amazon.com/lambda) routine called [Lambda Authorizer](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html), which is deployed internally and transparently as part of the service.
:::

## Containers

Containers are the execution environment for microservices. Unlike virtual machines, it is recommended that containers run only one process at a time, launched from an image generated by a [Dockerfile](https://docs.docker.com/engine/reference/builder) file.

Modyo Connect uses the [serverless](https://aws.amazon.com/serverless) container service of [AWS ECS Fargate](https://aws.amazon.com/fargate) to run containers in the cloud. With ECS Fargate, there is no need to configure platform servers, as they are managed by AWS.

### Programming language and framework

In Modyo Connect, microservices are developed using [Spring Boot](https://spring.io/projects/spring-boot) with Java, due to the simplicity of this framework for integration projects oriented to microservice deployments. Spring Boot does not require traditional application servers, as it defines its own execution runtime. In addition, applications developed with Spring Boot scale horizontally, allowing for a dynamic increase in the number of containers as required.

Within the container, the [OpenJDK 11 (J9)](https://www.eclipse.org/openj9) runtime is used, which offers unique features of efficiency and compatibility.

### Container image

Container images are generated in a continuous integration process, following user-provided definitions. Once generated, they are securely stored in the [AWS Elastic Container Registry (ECR)](https://aws.amazon.com/ecr), which integrates directly with the AWS ECS service.

Below is an example of a container definition that allocates 75% of the available RAM to the Java JVM used by the microservice.

``` Dockerfile
FROM adoptopenjdk/openjdk11-openj9:jdk-11.0.10_9_openj9-0.24.0
WORKDIR /usr/app
COPY build/libs/<microservice-name>.jar .
CMD java -XX:MaxRAMPercentage=75.0 -XX:MinRAMPercentage=75.0 -XX:InitialRAMPercentage=75.0 -jar -Dhttps.protocols=TLSv1.2 <microservice-name>.jar
```

### Instance size

AWS ECS Fargate offers a [ wide variety of configurations](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html), from fractions of vCPUs up to 16 dedicated vCPUs per container. Depending on the number of vCPUs chosen, dedicated RAM ranges (1 GB to 32 GB) are activated. The consumption of [MRUs](../resources/mrus.md) varies depending on the node size.

| CPU        |   Memory      |
| ------------- |:-----:|
|1 vCPU|2 GB ~ 8 GB (1 GB increments)|
|2 vCPU|4 GB ~ 16 GB (1 GB increments)|
|4 vCPU|8 GB ~ 30 GB (1 GB increments)|
|8 vCPU|16 GB ~ 60 GB (4 GB increments)|
|16 vCPU|32 GB ~ 120 GB (8 GB increments)|

It is important to consider that in production, the MRUs used by the component are multiplied by the redundancy factor required by the client (minimum 2 for multi-zone). Pre-production environments are configured without redundancy and may have fewer associated resources.

:::warning Fractions of vCPUs
AWS allows defining containers with fractions of vCPUs (e.g., 0.25 vCPU or 0.75 vCPU). However, applications running with a Java Virtual Machine (JVM), being a multi-threaded execution environment, do not benefit from deployments with vCPU fractions, as this generates I/O blockages that considerably affect their performance. Therefore, the minimum accepted for Modyo Connect is 1 vCPU and the maximum is 16 vCPU.
:::

### Connection pool

In many cases, a [database](#databases) connected to the microservices is required. It must be ensured that the database size is sufficient for the number of container instances considered (including the auto-scaling range). Concurrent connections to the database will be determined by the [connection pool](https://www.baeldung.com/java-connection-pooling) size defined in each microservice.

### Activation steps

To request the creation of a container in AWS, a requirement ticket must be created in the [Modyo Support Center](https://support.modyo.com) stating:
- Name and location of the code repository.
- Branch from which the automatic deployment of each environment should be performed.
- Environment variables to be injected per environment.

Each container must be associated with a [single code repository](development.html#code-repository). The same branch cannot point to more than one environment (productive or pre-productive).

:::tip Learn more
For more information, please refer to the [microservices](/en/architecture/patterns/microservice) development guide.
:::

## Secret Management

Modyo Connect allows for the secure management of secrets for sensitive information in [microservices](/en/architecture/patterns/microservice) using [AWS Secrets Manager](https://aws.amazon.com/secrets-manager). This service generates a centralized and secure store of parameters, preventing them from being stored in the code or as environment variables (e.g., database credentials, API access tokens, external service credentials).

Additionally, there is secret management in Modyo's [GitHub Enterprise](https://github.com/enterprise) repository itself, used internally to share access token details with [GitHub Actions](https://github.com/features/actions) continuous integration scripts. If a secret needs to be incorporated into the GitHub Action process, it can be requested via an activation ticket.

### Activation steps

To request the configuration of a new secret, a requirement ticket must be created in the [Modyo Support Center](https://support.modyo.com) stating:

- Name of the secret.
- Store where it should be created (GitHub or AWS).
- Secure method for delivering the secret's value.

:::danger Confidentiality of secrets
Modyo does not recommend attaching the values of the secrets in the activation ticket. A secure communication channel with the client must be established to ensure the confidentiality of the values to be configured (e.g., encrypted email).
:::

## Encryption

Modyo uses [AWS Key Management Service (KMS)](https://aws.amazon.com/kms) managed encryption for the secure encryption of all information in object repositories and data volumes managed for the client.

Keys managed by AWS KMS are generated using the AES 256 standard and have an automatic annual regeneration cycle, eliminating the need for manual actions to renew and update resources with the new keys.

Modyo configures independent AWS KMS keys for each resource. By default, AWS is delegated the complete generation and management of encryption keys. If a client wishes, externally managed keys can be incorporated into the service through the [AWS CloudHSM](https://aws.amazon.com/cloudhsm) module.

### Activation steps

The encryption provided by AWS KMS managed keys is active by default in all AWS S3 object repositories and data volumes in AWS RDS and OpenSearch, so it does not require activation.

If the incorporation of an externally managed key through AWS CloudHSM is required, it must be notified via a requirement ticket in the Modyo Support Center, indicating the reason and the key management plan (implementation, renewals, etc.).

:::warning Key Rotation
Customer-managed keys do not automatically rotate once a year like those generated by AWS KMS. Therefore, it is the client's responsibility to plan and request key rotation when required.
:::

## SSL/TLS Certificates

SSL/TLS certificates ensure secure encryption for all in-transit operations from the service's HTTPS endpoints. They can be activated at the load balancer, CDN, and API Gateway levels.

To generate and keep SSL/TLS certificates updated, Modyo Connect uses AWS Certificate Manager (ACM). Certificates generated by ACM require domain verification, which must be performed by the client by incorporating the CNAME DNS records indicated in the generation process. Once the certificate is issued, the client has three days to configure their DNS; otherwise, the certificate must be reissued.

:::warning Private key security
Modyo does not have access to the private keys of certificates issued by AWS ACM, nor can they be used outside of the services supported in the AWS account configured for the client.
:::

### Activation steps

To request the issuance of a TLS certificate, the domains or subdomains to be included must be indicated. The applicant must first ensure they have access to the DNS management panel for the domain or have the availability of the person who has access. Additionally, the client can select a [security policy](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies) for the certificate.

At the time of the request, Modyo will issue a "pending validation" certificate that requires validation via DNS records.

:::warning Domain validation by DNS
DNS records used for certificate validation should not be deleted, as AWS ACM will use them for periodic renewal. It is the client's responsibility to ensure the existence of these records in their DNS system.
:::

Additional considerations:

- Modyo does not recommend the use of wildcard certificates (*.domain.com) within the services.
- Modyo uses the encryption policy recommended by AWS, which guarantees security and maintains some compatibility with older devices. If the client wishes to activate more secure [encryption policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies) (at the risk of decreasing compatibility), this must be specified in the ticket.


## Single Sign On (SSO)

The Single Sign-On (SSO) service allows user authentication to be incorporated into development initiatives with Modyo Connect. Authenticated users can share their session between the Modyo platform and API Gateway calls, allowing access to protected resources not publicly available on the Internet.

The Modyo Connect SSO service is implemented using [KeyCloak](https://www.keycloak.org), an open-source application sponsored by [Red Hat](https://www.redhat.com) that offers additional paid support. KeyCloak is deployed on containers in high-availability cluster mode, with the ability to scale. Modyo Connect provides access to the repository of the container image configured for KeyCloak, allowing control over user experience customizations and non-standard authentication flows.

### Activation steps

Requests for SSO deployment on Modyo Connect are made through a ticket in the [Modyo Support Center](https://support.modyo.com). In the ticket, you can specify whether full application administration access or the creation of user realms with specific configurations will be required.

The activation of SSO on Modyo Connect requires the prior existence of a [database](#databases) duly configured for the service.

:::warning KeyCloak customizations
User experience and authentication flow customizations in KeyCloak are the client's responsibility and are not included as part of the service. If professional services support is required in the implementation of an SSO initiative, the assigned account executive should be contacted.
:::

:::warning Shared Responsibility Model
Modyo is not responsible for customizations or vulnerabilities in the client's custom code. Some customizations may require modifications when updating the base KeyCloak software. It is the client's responsibility to make the adjustments in a timely manner to reduce the risks associated with the update process.
:::

## Object Repository

The object repository provides secure and scalable file storage in the cloud, accessible via web protocols. Modyo Connect implements the object repository using [AWS S3](https://aws.amazon.com/s3).

Access permissions, associated with each file or general permissions for the repository, are specified using the AWS S3 service API. The client is responsible for assigning these permissions.

:::tip AWS S3 API Access
Access to the repository is done through the AWS S3 service API. There are multiple client libraries and file transfer applications compatible with the protocol. If the repository is used within microservices deployed in Modyo Connect, the AWS S3 API keys will be managed as internal use secrets.
:::

### Activation steps

To request the creation of an object repository in Modyo Connect, a ticket must be submitted to the [Modyo Support Center](https://support.modyo.com) specifying the following information:
- Repository name.
- Storage type (simple or versioned).
- Access policy (private or public).
- Lifecycle policies (automatic deletion after a period of time, permanent, etc.).

:::tip Access acceleration
Access to files stored in the AWS S3 object repository can be regionally accelerated through the [content-distribution-network](#content-distribution-network) of Modyo Connect.
:::

## Content Delivery Network

The content delivery network (CDN) provides globally distributed content access points in strategically located data centers. This reduces latencies and download speeds, improving the overall user experience.

Modyo uses [AWS CloudFront](https://aws.amazon.com/cloudfront) as a global content delivery network. CloudFront configurations allow defining caching rules at the object level and processing functions to overwrite headers in service calls and responses.

### Activation steps

To request the creation of a global content distribution in Modyo Connect, a ticket must be submitted to the [Modyo Support Center](https://support.modyo.com) specifying the following information:
- Average size of objects in the repository.
- Projected monthly TB to consume.
- Main locations from which most of the traffic is expected.
- Rules or criteria for object caching.
- Indicate whether pre- or post-processing functions for invocations are required.


## Databases

Relational databases provide a secure and scalable relational database storage system (RDBMS) for microservices deployed in Modyo Connect.

Modyo Connect uses [AWS RDS Aurora](https://aws.amazon.com/rds/aurora) to implement databases. Compatible with MySQL, Aurora is configured as a high-availability cluster where data is replicated simultaneously in multiple locations, unlike a traditional deployment.

:::tip Multiple schemas
Within a single database configured in Modyo Connect, multiple logically independent schemas with different access permissions can be defined. This configuration allows reusing the same instance for different purposes in microservices and/or SSO. It is important to consider that, in this type of configuration, the client will be responsible for selecting an appropriate engine size to effectively control access concurrency (combined connection pools).
:::

### Instance types

There are different [instance types](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Performance.html) to deploy an Aurora RDS database. Depending on the type chosen, better concurrency in the number of simultaneous connections can be achieved, as shown in the following table:

| Type        |   Maximum Connections      |
| ------------- |:-----:|
|db.t3.small|45|
|db.t3.medium|90|
|db.r6.large|1000|
|db.r6.xlarge|2000|
|db.r6.2xlarge|3000|
|db.r6.4xlarge|4000|
|db.r6.8xlarge|5000|
|db.r6.12xlarge|6000|
|db.r6.16xlarge|6000|

:::warning Pre-production
For pre-production environments, the use of "t3" type instances is recommended.
:::

### Disk size and IOPS

Disk size and IOPS in RDS Aurora are dynamically provisioned according to how data is accessed. The initial disk size is 10 GB and is increased in similar blocks transparently to the user when required.

### Backups and encryption

Backups in the service are managed [automatically](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html) through snapshots of the storage system, generated daily and replicated to the contingency region.

:::tip Global database
Depending on the subscription level, some clients may have an active database replica enabled in the contingency AWS region, in order to reduce RTO and RPO in case of disaster.
:::

### Data access
If clients require direct access to the database, the connection must be made exclusively through a secure [VPN](#virtual-private-network-vpc) link. Modyo will not expose databases directly to the Internet.

### Activation steps
To request the creation of an Aurora RDS database in Modyo Connect, a ticket must be created in the [Modyo Support Center](https://support.modyo.com) specifying the following information:
- Instance type (db.r6.large recommended for production).
- Schema name.


## Cache and NoSQL
NoSQL databases provide additional benefits for implementing caching or indexing systems, allowing efficient access and querying of large volumes of information. Unlike relational databases, NoSQL technologies offer specific solutions for each use case.

Modyo Connect offers two NoSQL solutions: [AWS ElastiCache](https://aws.amazon.com/elasticache) in its Redis version, designed for storing and quickly accessing data or results of complex operations (cache); and [AWS OpenSearch Service](https://aws.amazon.com/opensearch-service), designed for storing high volumes of data, providing search indexes on structured and semi-structured data (e.g., logs, user activity records).

Both services are implemented following a high-availability scheme over multiple zones within an AWS region. In both cases, it is assumed that the stored information is volatile, so it is the client's responsibility to ensure that the records also exist in persistent storage (object repository or relational database).

### Activation steps
To request the creation of one of these components in AWS, a requirement ticket must be created in the [Modyo Support Center](https://support.modyo.com) stating:
- Type of solution required (cache, indexing).
- Brief description of the use case to be implemented.
- Instance size of [AWS ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html) or [AWS OpenSearch](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/supported-instance-types.html).

## Messaging Queues
Message queues are a form of asynchronous service-to-service communication used in microservice architectures. Messages are stored in the queue until they are processed and deleted. Each message is processed only once by a single consumer. Message queues allow decoupling processes, pushing complex operations to the background.

Modyo Connect implements messaging queues using [AWS Simple Queue Service (SQS)](https://aws.amazon.com/sqs), a fully managed messaging queue that supports microservices and distributed applications. AWS SQS allows working with two types of queues: traditional and FIFO (First In, First Out).

### Activation steps
To request the creation of a messaging queue in AWS, a requirement ticket must be created in the [Modyo Support Center](https://support.modyo.com) stating:
- Queue name.
- Type: traditional or FIFO.

## Mailing/SMS
Modyo Connect offers the email or outgoing SMS messaging service. Microservices that require this functionality can use the Modyo Customers API.

Outgoing emails sent by the Modyo platform API are encrypted and validated following modern security standards. Sending domains require prior validation at the DNS level.

In cases where the Modyo Customers API cannot be used, Modyo may authorize the delivery of direct SMTP credentials or SMS sending APIs, subject to review and approval.

### Activation steps
To use the Modyo Customers messaging API, a valid Modyo platform API access token must be requested from the internal account administrator.

To request direct access to email sending services, a requirement ticket must be created in the [Modyo Support Center](https://support.modyo.com) stating:
- Brief description of the use case.
- Technical and commercial contacts with whom the final approval will be defined.

## Application Firewall (WAF)
A Web Application Firewall (WAF) protects the web application server from multiple attacks. Its function is to ensure server security by analyzing HTTP/HTTPS request packets and traffic patterns.

Modyo Connect allows configuring the [AWS WAF](https://aws.amazon.com/waf) service, which has filters for the most common web attacks (OWASP Top 10), such as SQL injections or scripts. In addition, it offers the ability to define custom rules to allow or deny access to routes by IP and rate limits.

### Log records
AWS WAF log records are managed by AWS CloudWatch Logs and can be exported to external systems using AWS S3 repositories.

### Activation steps
The AWS application firewall is enabled by default. The client can request the inclusion of specific rules (e.g., blocking routes to certain IP ranges or adjusting the rate limit for incoming connections) by submitting a ticket to the [Modyo Support Center](https://support.modyo.com).

## Virtual Private Network (VPC)
A VPN (site-to-site) is mainly used in organizations that need to connect infrastructure in different geographical locations through a secure link to transmit information.

Modyo Connect allows configuring site-to-site VPN links using [AWS VPN connections](https://docs.aws.amazon.com/es_es/vpc/latest/userguide/vpn-connections.html) within the [AWS VPC](https://aws.amazon.com/vpc/) network configured for the client. Once the link is established, microservices can establish direct connections to infrastructure and services deployed from the client side.

### Activation steps
To request a VPC link from AWS to an external infrastructure, a requirement ticket must be created in the [Modyo Support Center](https://support.modyo.com) stating:
- IP address to which the link should be created.
- Technical contact of the person responsible for establishing the link.

:::warning Link redundancy
Clients with multi-region redundancy may require the configuration of several simultaneous links. It is the client's responsibility to ensure the availability of all these links in case a failover is required.
:::

:::tip Support for manufacturers
Amazon AWS provides support and configuration examples for many network device manufacturers. In case of problems establishing the link, Modyo will support by raising a support ticket to AWS.
:::

:::tip AWS VPC Peering
For links to client infrastructures deployed within AWS, VPC Peering can be used, which provides a secure and convenient link between two different VPCs, without requiring the configuration of VPN links.
:::

## Domain Name Service (DNS)
The domain name system (DNS) is the "phone book" of the Internet. It allows people to access online information through domain names (e.g., google.com, twitter.com). Web browsers interact through IP addresses; DNS translates domain names to IPs so that browsers can load Internet resources.

Modyo Connect allows the use of its cloud DNS service for clients who require primary or secondary domain management. DNS records are configured in [AWS Route53](https://aws.amazon.com/route53).

### Activation steps
To request the management of a DNS zone for a domain from AWS, a requirement ticket must be created in the [Modyo Support Center](https://support.modyo.com) stating:
- Root domain to manage.
- Records to incorporate (can be a TXT exported from another DNS).

:::warning Propagation times
Once the DNS zone and records have been configured, the AWS Route53 addresses must be configured in the domain registrar. After this configuration, propagation begins, which could take several hours or even days before the domain is available on the Internet.
:::

## Domain Registration
Domain registration is the process by which a person or organization acquires a domain name from a registrar. If granted, the applicant gains control of that name and is responsible for its proper use on the Internet. These registrations have a period of validity that can be renewed indefinitely by the registrar. If not renewed, the registration is released for any registrar to initiate the registration process.

Modyo Connect allows the client to request the registration of TLD domains available in the [AWS Route53](https://aws.amazon.com/route53) service. Modyo cannot guarantee the availability of the domain selected by the client and will not be able to import domains with TLD extensions that are not compatible with AWS.

### Activation steps
To request the registration of a domain, a requirement ticket must be created in the [Modyo Support Center](https://support.modyo.com) stating:
- Name of the domain to be registered.
- Alternative names in case the main name is not available.
- Primary and secondary DNS addresses to which the domain should point (if not [managed by Modyo](#domain-name-service-dns)).

:::tip Domain Transfer
Domains registered by Modyo can be transferred to another registrar if the client requests it (provided the registrar is compatible with the TLDs managed by AWS).
:::