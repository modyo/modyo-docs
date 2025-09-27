---
search: true
---

# Infrastructure

The infrastructure components provide a secure and scalable execution environment for APIs and [microservices](/en/architecture/patterns/microservice.html) developed on Modyo Connect in the [Amazon AWS](https://aws.amazon.com) cloud.

The infrastructure components are completely managed by the Modyo Connect service; users only need to worry about the code deployed on them. A team of Modyo cloud experts is responsible for parameterizing, automating, monitoring, and ensuring service continuity according to agreed-upon levels.

## Network and Load Balancing Components

#### [Load Balancing](load-balancing.html)
Request distribution using AWS Application Load Balancer (ALB) with advanced security features.

#### [API Gateway](api-gateway.html)
Entry point for all APIs with integrated authorization management, monitoring, and caching.

#### [Content Delivery Network](content-delivery-network.html)
Global content distribution using AWS CloudFront to reduce latencies.

## Computing and Storage Components

#### [Containers](containers.html)
Serverless execution environment with AWS ECS Fargate for Java Spring Boot microservices.

#### [Databases](databases.html)
High-availability relational storage with AWS RDS Aurora compatible with MySQL.

#### [Cache and NoSQL](cache-nosql.html)
Caching solutions with Redis and search with OpenSearch for fast data access.

#### [Object Storage](object-storage.html)
Secure and scalable file storage in AWS S3.

## Security Components

#### [Secrets Management](secrets-management.html)
Centralized management of credentials and tokens with AWS Secrets Manager.

#### [Encryption](encryption.html)
AES 256 encryption managed with AWS KMS for all stored data.

#### [SSL/TLS Certificates](ssl-tls-certificates.html)
Automated certificate management with AWS Certificate Manager and Cloudflare.

#### [Single Sign On (SSO)](single-sign-on.html)
Unified authentication implemented with KeyCloak in high availability.

#### [Web Application Firewall (WAF)](web-application-firewall.html)
Protection against common web attacks with AWS WAF.

## Messaging and Communication Components

#### [Message Queues](message-queues.html)
Asynchronous communication between services with AWS SQS.

#### [Email/SMS Sending](email-sms.html)
Outgoing messaging services integrated with the Modyo Customers API.

## Network and DNS Components

#### [Virtual Private Network (VPC)](virtual-private-network.html)
Secure site-to-site links to connect with external infrastructure.

#### [Domain Name Service (DNS)](domain-name-service.html)
DNS zone management in AWS Route53.

#### [Domain Registration](domain-registration.html)
TLD domain registration and management.

## Quick Start

To activate infrastructure components:

- Identify the components needed for your architecture
- Create a ticket in the [Modyo Support Center](https://support.modyo.com)
- Provide the required information for each component
- Coordinate with the Modyo team for implementation

## Important Considerations

- All components include encryption by default
- Multi-zone redundancy is available for production environments
- Monitoring and logs are automatically active
- Components are fully managed by Modyo