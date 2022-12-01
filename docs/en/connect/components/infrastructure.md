---
search: true
---

# Infrastructure
The infrastructure components make available a secure and scalable execution environment for APIs and [microservices](../resources/microservices.md) developed on top of Modyo Connect, in the [Amazon AWS](https://aws.amazon.com) cloud. 

The infrastructure components are fully managed by the Modyo Connect service and users are only concerned with the code that is deployed on them. A team of Modyo cloud experts is responsible for parameterizing, automating, monitoring and ensuring service continuity according to agreed levels.

This guide details the most relevant infrastructure components within the Modyo Connect service.

## Load Balancing
Load balancing is the way in which Internet requests are distributed over a group of servers. 

Modyo Connect implements load balancing using [AWS Application Load Balancer(ALB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html). The AWS ALB integrates natively with the other AWS cloud services, in addition to offering unique security features such as route and protocol redirection, [SSL/TLS certificates](#certificates-ssl-tls) and the incorporation of [applicative firewalls](#firewall-application-waf).

### Steps to activate
To request the creation of an ALB balancer in the AWS cloud, a request ticket must be created in the [Modyo Support Center](https://support.modyo.com). The ticket should include:
- Domain to be pointed to the ALB
- Description of the use case, stating to which service it will be applied.
- DNS administrator technical contact for SSL/TLS certificate validation and redirects

Once created, the balancer can be used by a service within a cluster of [containers](#containers).

:::warning External Applications
The AWS ALB load balancer cannot direct traffic to AWS resources deployed outside of the virtual private network (VPC) where it is deployed, so it should only be considered for use with internal resources. 
:::


## API Gateway
The API Gateway corresponds to the entry point for all APIs deployed within Modyo Connect and is primarily responsible for managing and authorizing incoming requests, in order to channel them to the correct microservice. The API Gateway is able to perform monitoring, quota management and caching functions to improve the performance of the APIs defined within it. Modyo Connect uses the [AWS API Gateway](https://aws.amazon.com/api-gateway), which is an abstract service offered by AWS.

The incorporation of endpoints in the API Gateway is done using special annotations within the microservice source code (Java Spring Boot), which at the time of deployment allow obtaining a definition [Swagger](https://swagger.io) of the API which is dynamically incorporated into the service, as shown in the following example:

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

The generation of the API Gateway definitions is performed within an automated [continuous integration](#development.md#continuous-integration) pipeline, which must be previously defined.

### Container connectivity
The API Gateway, being an AWS abstract service, operates outside the [Virtual Private Network (VPC)](https://aws.amazon.com/vpc) of the customer. A private network interface coupled to a [Network Load Balancer (NLB)](https://aws.amazon.com/elasticloadbalancing/network-load-balancer) located inside the VPC is used for integration with the containers, in which the different [containers](#containers) are automatically registered from the [AWS Elastic Container Service (ECS)](https://aws.amazon.com/ecs) container management platform. The NLB takes care of the balancing and health check of the containers registered with it.

### Activation steps
To request the creation of an API Gateway in the AWS cloud, a request ticket must be created in the [Modyo Support Center](https://support.modyo.com).

As a general rule, each environment has only one shared API Gateway for all the microservices deployed on it. In case authentication is required for API calls using JWT tokens, the API Gateway must be deployed in conjunction with the [Single Sign On (SSO)](#single-sign-on-sso) component. 

:::tip Authorization of invocations
To perform authorization of invocations to private APIs, the AWS API Gateway establishes communication with the SSO via an [AWS Lambda](https://aws.amazon.com/lambda) routine called [Lambda Authorizer](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html), which is deployed internally, transparently as part of the service.
:::

## Containers
Containers correspond to the execution environment on which microservices are run. Unlike virtual machines, it is recommended that containers only run one process at a time, which is launched from an image generated by means of a [Dockerfile](https://docs.docker.com/engine/reference/builder) file.

Modyo Connect uses the [serverless](https://aws.amazon.com/serverless) container service from [AWS ECS Fargate](https://aws.amazon.com/fargate) to run the containers in the cloud. With ECS Fargate there is no need for any configuration on platform servers, as they are managed by AWS.

### Programming language and framework
In Modyo Connect microservices are developed using [Spring Boot](https://spring.io/projects/spring-boot) with Java. This is due to the simplicity of this framework when performing integration projects oriented to microservices deployments. Spring Boot does not require traditional application servers, since it defines its own execution runtime. In addition, applications developed on Spring Boot have the ability to scale horizontally, making it possible to dynamically increase the number of containers as required.

Within the container, it works with the [OpenJDK 11 (J9)](https://www.eclipse.org/openj9) runtime, which offers unique features of efficiency and compatibility.

### Container image
Container images are generated in a continuous integration process, following user-provided definitions. Once generated, they are securely stored in the [AWS Elastic Container Registry (ECR)](https://aws.amazon.com/ecr), which integrates directly with the AWS ECS service.

Below is an example of a container definition that allocates 75% of the available RAM to the Java JVM used by the microservice.

``` Dockerfile
FROM adoptopenjdk/openjdk11-openj9:jdk-11.0.10_9_openj9-0.24.0
WORKDIR /usr/app
COPY build/libs/<microservice-name>.jar .
CMD java -XX:MaxRAMPercentage=75.0 -XX:MinRAMPercentage=75.0 -XX:InitialRAMPercentage=75.0 -jar -Dhttps.protocols=TLSv1.2 <microservice-name>.jar
```

### Size of instances
AWS ECS Fargate offers a [wide variety of configurations](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html), ranging from fractions of vCPUs up to 16 dedicated vCPUs for a single container. Depending on the chosen number of vCPUs, dedicated RAM ranges from 1 GB to 32 GB are activated. Depending on the chosen node size, more or less [MRUs](../resources/mrus.md) will be consumed in the service.

| CPU        |   Memory      |
| ------------- |:-----:|
|1 vCPU|2 GB ~ 8 GB (1 GB increments)|
|2 vCPU|4 GB ~ 16 GB (1 GB increments)|
|4 vCPU|8 GB ~ 30 GB (1 GB increments)|
|8 vCPU|16 GB ~ 60 GB (4 GB increments)|
|16 vCPU|32 GB ~ 120 GB (8 GB increments)|

It is important to consider that in production, the MRUs used by the component are multiplied by the redundancy factor required by the customer, the minimum being 2 (multi-zone). Pre-production environments are configured without redundancy and may have fewer associated resources.

:::warning Fractions of vCPUs
AWS allows the definition of containers with fractions of vCPUs assigned (example: 0.25 vCPU or 0.75 vCPU). In the case of applications running with a Java Virtual Machine (JVM), being a multithreaded execution environment, it does not benefit from a deployment using vCPU fractions. This is due to the fact that it generates I/O blockages in the processes, affecting their performance considerably. That is why the minimum accepted for Modyo Connect will be 1 vCPU and the maximum 16 vCPU.
:::

### Connection pool
There are many cases in which a [database](#database) connected to the microservices is required. In these cases it must be ensured that the size of the chosen database is sufficient for the number of container instances considered (including the auto-scalability range). The concurrent connections to the database will be determined by the [connection pool](https://www.baeldung.com/java-connection-pooling) size defined in each microservice.

### Activation steps
To request the creation of a container in the AWS cloud, a request ticket must be created in the [Modyo Support Center](https://support.modyo.com). The ticket should state:
- Name and location of the code repository
- Branch from which the automatic deployment of each environment should be performed.
- Environment variables to be injected for each environment

Each container must be associated to a [single code repository](development.md#code-repository). The same branch cannot point to more than one environment (productive or pre-productive).

:::tip Learn more
For more information, please refer to the [microservices development](../resources/microservices.md) guide.
:::

## Secret Management
Modyo Connect enables secure secret management for handling sensitive information in [microservices](../resources/microservices.md) through the use of [AWS Secret Manager](https://aws.amazon.com/secrets-manager). AWS Secret Manager generates a centralized and secure store of parameters so that they are not stored in code or as environment variables in the environment, e.g. database credentials, API access tokens, external service credentials, etc.

Additionally, there is a secret management within Modyo's [GitHub Enterprise](https://github.com/enterprise) repository itself, which is used internally to share access token details with [GitHub Actions](https://github.com/features/actions) continuous integration scripts. If a secret is required to be incorporated within the GitHub Action process, this can be requested via an activation ticket.

### Activation steps
To request the configuration of a new secret, a request ticket must be created in the [Modyo Support Center](https://support.modyo.com). The ticket should state:
- Name of the secret
- Store where you want to be created (GitHub or AWS)
- Secure method chosen for the delivery of the value of the secret 

:::danger Secrets confidentiality
Modyo does not recommend attaching the values of the secrets in the activation ticket. A secure channel of communication with the customer must be established to ensure the confidentiality of the values to be configured (e.g. encrypted email).
:::

## Encryption
Modyo uses [AWS Key Management System (KMS)](https://aws.amazon.com/kms) managed encryption for secure encryption of all data at rest stored in object repositories and managed data volumes for the customer.

The keys managed by AWS KMS are generated using the AES 256 standard and have an automatic annual regeneration cycle, meaning that no manual action is required to renew and update resources with the newly generated keys.

Modyo configures separate AWS KMS keys for each resource. By default, AWS is delegated the complete generation and management of encryption keys. If a customer wishes, externally managed keys can be incorporated into the service via the [AWS CloudHSM](https://aws.amazon.com/cloudhsm) module.

### Activation steps
The at-rest encryption provided by the AWS KMS managed keys is active by default in all AWS S3 object repositories and data volumes in AWS RDS and OpenSearch, so it does not require any activation. 

In the case of requiring the addition of an externally managed key, the AWS CloudHSM service must be used, you must notify with a requirement ticket in the Modyo Support Center, stating the reason and how you plan to manage the external key (implementation, renewals, etc.).

:::warning Key Rotation
Customer managed keys do not have the ability to rotate automatically once a year as AWS KMS generated keys do, so it will be the customer's responsibility to plan and request key rotation when required.
:::

## SSL/TLS Certificates
SSL/TLS certificates ensure secure encryption for all operations in transit from the service's HTTPS endpoints. SSL/TLS certificates can be enabled at the load balancer, CDN and API Gateway levels.

To generate and keep SSL/TLS certificates up to date, Modyo Connect uses AWS Certificate Manager (ACM). Certificates generated by AWS ACM will require domain verification, which must be performed by the customer, incorporating the CNAME DNS records indicated as part of the generation process. Once the certificate is issued, the customer has three days to make the configuration in their DNS, otherwise the certificate must be reissued.

:::warning Private key security
Modyo does not have access to the private keys of certificates issued by AWS ACM, nor can they be used outside of the services supported in the AWS account configured for the customer.
:::

### Activation steps
To request the issuance of a TLS certificate, the domain(s) or subdomain(s) to be included must be indicated. The applicant must first ensure that he/she has access to the DNS management panel for the domain or that he/she has the time of the person who has the access. Additionally, the client will be able to select a [security policy](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies) for the certificate.

When you request, Modyo will issue a certificate “pending validation” which requires validation through DNS records.

:::warning Domain validation by DNS
DNS records used for certificate validation should not be deleted, as they will be used by AWS ACM for periodic renewal. It will be the customer's responsibility to ensure the existence of these records in their DNS system.
:::

Additional considerations:
- Modyo does not recommend the use of wildcard certificates (*.domain.com) within the services.
- Modyo uses the encryption policy recommended by AWS, which guarantees security while maintaining a certain degree of backward compatibility with older devices. If the customer wishes to enable more secure [encryption policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies) (at the risk of decreasing compatibility), this should be specified in the ticket.


## Single Sign On (SSO)
The Single Sign On (SSO) service enables user authentication to be incorporated into development initiatives with Modyo Connect. Authenticated users will be able to share their session between the Modyo platform and API Gateway calls, making it possible to access protected resources not publicly available to the Internet.

The Modyo Connect SSO service is implemented using [KeyCloak](https://www.keycloak.org), an open source application sponsored by [Red Hat](https://www.redhat.com), who offer additional paid support on top of it. The KeyCloak application is deployed on containers in high-availability cluster mode with the ability to scale if required. In addition, Modyo Connect provides access to the repository that originates the container image configured for KeyCloak, allowing control over customizations to both user experience and non-standard authentication flows.

### Activation steps
Requests to deploy SSO on Modyo Connect are made through a ticket in the [Modyo Support Center](https://support.modyo.com). Within the ticket, you can specify whether access to the full administration of the application, or the creation of user realms with specific configurations, will be required.

The activation of SSO over Modyo Connect requires the prior existence of a [database](#database) duly configured for the service.

:::warning KeyCloak customizations
Customizations to user experience and authentication flows within KeyCloak are the responsibility of the customer and are not included as part of the service. Should professional services support be required in the implementation of an SSO initiative, the assigned account executive should be contacted.
:::

:::warning Shared Responsibility Model
Modyo is not responsible for customizations or vulnerabilities in custom code coming from the customer. Some customizations may require modifications when updating the base KeyCloak software. It will be the customer's responsibility to make the adjustments in a timely manner in order to reduce the risks associated with the upgrade process.
:::

## Object Repository
The object repository provides secure, scalable file storage in the cloud accessible via Web protocols. Modyo Connect implements the object repository using [AWS S3](https://aws.amazon.com/s3).

Access permissions, associated with each file or general permissions for the repository, are specified using the AWS S3 service API. The customer is responsible for assigning these permissions.

:::tip AWS S3 API Access
The repository is accessed via the AWS S3 service API. There are multiple libraries that can be implemented from the client side to access the API, as well as file transfer applications compatible with the protocol. In case the repository is used within microservices deployed within Modyo Connect, the AWS S3 API keys will be managed as internal use secrets.
:::

### Activation steps
To request the creation of an object repository in Modyo Connect, a ticket must be submitted to the [Modyo Support Center](https://support.modyo.com) specifying the following information:
- Repository name
- Storage type (simple or versioned)
- Access policy (private or public)
- Lifecycle policies (automatic deletion after a period of time, permanent, etc.)

:::tip Access acceleration
Access to files stored in the AWS S3 object repository can be regionally accelerated by using Modyo Connect's [content-distribution-network](#content-distribution-network).
:::

## Content Delivery Network
The content distribution network allows for globally distributed content delivery points in data centers strategically located around the world, thereby reducing latencies and download speeds and improving the overall user experience.

Modyo uses the [AWS CloudFront](https://aws.amazon.com/cloudfront) service as a global content delivery network. AWS CloudFront configurations allow object-level caching rules to be defined, as well as processing functions to overwrite headers in service calls and responses.

### Activation steps
To request the creation of a global content distribution in Modyo Connect, a ticket must be submitted to the [Modyo Support Center](https://support.modyo.com) specifying the following information:
- Average size of objects in the repository
- Projected monthly TB to be consumed
- Main locations from which most of the traffic is expected to come from
- Rules or criteria for object caching
- Indicate whether pre- or post-processing functions for invocations are required.


## Databases
Relational databases provide a secure and scalable relational database storage system (RDBMS) for microservices deployed in Modyo Connect.

Modyo Connect uses the [AWS RDS Aurora](https://aws.amazon.com/rds/aurora) service to deploy the databases. AWS RDS Aurora supports MySQL and unlike a traditional deployment of this engine, Aurora is configured as a high availability cluster in which stored data is replicated simultaneously across multiple locations. 

:::tip Multiple schemas
Within a single database configured within Modyo Connect, multiple schemas can be defined that are logically independent of each other and have different access permissions. This configuration allows reusing the same instance for different purposes in different microservices and/or SSO. It is important to consider that in this type of configuration, the client will be responsible for selecting an appropriate engine size to effectively control access concurrency (combined pools of connections).
:::

### Types of instances
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
Disk size and IOPS, in the case of RDS Aurora, are dynamically provisioned according to how the data is accessed. The disk size starts at 10 GB and is increased in similar blocks when required transparently to the user.

### Backups and encryption
The backups in the service are managed [automatically](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html) by means of snapshots of the storage system, which are generated daily and replicated to the contingency region.

:::tip Global database
Depending on the subscription level, some customers may have an active database replica enabled in the contingency AWS region, in order to lower the RTO and RPO in case of a disaster.
:::

### Access to data
In the case of customers who require direct access to the database, the connection must be made exclusively through the use of a secure link of the type [VPN](#virtual-private-network-vpc). Under no circumstances will Modyo expose databases directly to the Internet.

### Activation steps
To request the creation of an Aurora RDS database in Modyo Connect, a ticket must be submitted to the [Modyo Support Center](https://support.modyo.com) specifying the following information:
- Instance type (db.r6.large recommended for production)
- Scheme name


## Cache and NoSQL
NoSQL databases provide additional benefits when implementing caching or indexing systems to efficiently access and query large volumes of information. Unlike relational databases, NoSQL technologies provide specific solutions according to each use case.

Modyo Connect offers two NoSQL solutions. The first is [AWS ElastiCache](https://aws.amazon.com/elasticache) in its Redis version, which is primarily intended for storing and quickly accessing data or results of complex operations (cache). The second is [AWS OpenSearch Service](https://aws.amazon.com/opensearch-service), which is designed for storing high volumes of data, providing search indexes on structured and semi-structured data such as logs or user activity records.

Both services are implemented following a high availability scheme over multiple zones within an AWS region. In both cases it is assumed that the stored information is volatile, so it will be the customer's responsibility to ensure that the records also exist within a persistent storage (object repository or relational database).

### Activation steps
To request the creation of one of these components in the AWS cloud, a request ticket must be created in the [Modyo Support Center](https://support.modyo.com). The ticket should state:
- Type of solution required (cache, indexing)
- Brief description of the use case to be implemented
- Instance size of [AWS ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html) or [AWS OpenSearch](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/supported-instance-types.html)

## Messaging Queues
Message queues are a form of asynchronous service-to-service communication used in microservice architectures. Messages are stored in the queue until they are processed and deleted. Each message is processed only once, by a single consumer. Message queues allow decoupling of processes by pushing complex operations to the background.

Modyo Connect implements messaging queues using [AWS Simple Queue Service (SQS)](https://aws.amazon.com/sqs), which is a fully managed messaging queue that enables microservices and distributed applications. AWS SQS supports two types of message queues: traditional and FIFO (First in First out).

### Activation steps
To request the creation of a container in the AWS cloud, a request ticket must be created in the [Modyo Support Center](https://support.modyo.com). The ticket should state:
- Queue name
- Type: traditional or FIFO

## Mailing/SMS
Modyo Connect offers the possibility of using the email or outgoing SMS messaging service. Microservices that need to make use of this functionality can use the API that the Modyo platform provides within the Modyo Customers application.

Outgoing emails sent by the Modyo platform API are encrypted and validated according to modern security standards. Sending domains require prior validation that is done at the DNS level.

In cases where the Modyo Customers API cannot be used, Modyo may authorize the delivery of direct SMTP credentials or SMS APIs, subject to review and approval on a case-by-case basis.

### Activation steps
To use the Modyo Customers messaging API, a valid Modyo platform API access token must be requested from the internal account administrator.

To request direct access to the direct mailing services, a request ticket must be created in the [Modyo Support Center](https://support.modyo.com). The ticket should state:
- Brief description of the use case 
- Technical and commercial contacts with whom the final approval will be defined

## Application Firewall (WAF)
A Web Application Firewall (WAF) protects the web application server in the backend from multiple attacks. The function of the WAF is to ensure the security of the web server by analyzing HTTP / HTTPS request packets and traffic patterns.

Modyo Connect allows configuration of the [AWS WAF](https://aws.amazon.com/waf) service, which has filters for the most common Web attacks (OWASP Top 10), such as SQL injections or scripts, as well as the ability to define custom rules to allow or deny access to routes by IP and rate limits. 

### Log records
AWS WAF log records are managed by AWS CloudWatch Logs and can be exported to external systems using AWS S3 repositories.

### Activation steps
The AWS application firewall is enabled by default. The customer can request the inclusion of specific rules, such as blocking routes to certain IP ranges or adjusting the rate limit for incoming connections, by submitting a ticket to the [Modyo Support Center](https://support.modyo.com).

## Virtual Private Network (VPC)
A VPN (site-to-site) is mainly used in organizations that need to connect infrastructure in different geographical locations through a secure link over which all kinds of information can be transmitted.

Modyo Connect enables the configuration of site-to-site VPN links using [AWS VPN connections](https://docs.aws.amazon.com/es_es/vpc/latest/userguide/vpn-connections.html) within the [AWS VPC](https://aws.amazon.com/vpc/) network configured for the customer. Once the link is established, microservices will be able to establish direct connections to infrastructure and services deployed from the client side.

### Activation steps
To request a VPC link from the AWS cloud to an external infrastructure, a request ticket must be created in the [Modyo Support Center](https://support.modyo.com). The ticket should state:
- IP address to which the link is to be created 
- Technical contact of the person responsible for establishing the link

:::warning Link redundancy
Customers with multi-region redundancy may require the configuration of several simultaneous links. It will be the customer's responsibility to ensure the availability of all these links in the scenario that a failover is required.
:::

:::tip Support for manufacturers
Amazon AWS provides support and configuration examples for many network device manufacturers. In case you have problems setting up the link Modyo will support you by raising a support ticket to AWS.
:::

:::tip AWS VPC Peering
In the case of links to customer infrastructures deployed within AWS, VPC Peering can be used, which provides a secure and convenient link between two different VPCs, without requiring the configuration of VPN links.
:::

## Domain Name Service (DNS)
The domain name system (DNS) is the Internet's telephone directory. People access online information through domain names such as google.com or twitter.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so that browsers can load Internet resources.

Modyo Connect enables the use of its cloud DNS service for customers requiring primary or secondary domain management. DNS records are configured within [AWS Route53](https://aws.amazon.com/route53).

### Activation steps
To request the management of a DNS zone for a domain from the AWS cloud, a request ticket must be created in the [Modyo Support Center](https://support.modyo.com). The ticket should state:
- Root domain to be managed
- Records to incorporate (can be a TXT exported from another DNS)

:::warning Propagation times
Once the DNS zone and records have been configured, the AWS Route53 addresses must be configured at the domain registrar. Once this configuration is done, propagation begins, which could take several hours or even days before the domain is available to the Internet.
:::

## Domain Registration
Domain registration is the process by which a person or organization acquires a domain name from a registrar who controls it. If granted, the applicant will have control of the name and will be responsible for its proper use on the Internet. These registrations have a period of validity that can be renewed indefinitely by the registrar. If it is not renewed, the registration is released for any registrar to initiate the registration process.

Modyo Connect allows the customer to request the registration of TLD domains available on the [AWS Route53](https://aws.amazon.com/route53) service. Modyo cannot guarantee the availability of the domain selected by the customer and will not be able to import domains with TLD extensions that are not compatible with those of AWS.

### Activation steps
To request the registration of a domain, you must create a request ticket in the [Modyo Support Center](https://support.modyo.com). In the ticket you should indicate:
- Name of the domain you wish to register
- Alternate names in case the main name is not available
- Primary and secondary DNS addresses to which the domain should point (in case the domain is not [managed by Modyo](#domain-name-service-dns)).

:::tip Domain Transfer
Domains registered by Modyo can be transferred to another registrar if requested by the customer (as long as the registrar is compatible with the TLDs managed by AWS).
:::
