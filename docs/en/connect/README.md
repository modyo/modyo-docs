---
search: true
---
# What is Modyo Connect?

Modyo Connect is an infrastructure management and DevOps service on the Amazon AWS cloud exclusive to Modyo Enterprise Cloud customers. Modyo Connect is designed for organizations that need to implement a secure and scalable layer of integration APIs to feed data to [micro frontends] (/en/architecture/patterns/micro-frontend) deployed as widgets in Modyo.

Modyo Connect allows the implementation of services to meet the common requirements of a complex integration initiative. Among them:

 - Single Sign-On (SSO)
 - API Gateway
- Container infrastructure for [microservices] (/en/architecture/patterns/microservice)
- Databases
- Messaging queues
- Object repositories


Modyo Connect was born in response to the need of some customers for a managed layer of API management services that are securely integrated with their business systems. This service is completely optional and, in many cases, is not necessary, since the client can count on their own API architecture and Single Sign-On, to which the [micro frontends] (/en/architecture/patterns/micro-frontend) developed in Modyo can be integrated.

This diagram shows the Modyo implementation reference architecture. The Modyo Connect managed services are on the right in the diagram and are completely decoupled from the platform, so they can be replaced by APIs that the customer already has or developed by third parties.

<img src="/assets/img/infrastructure/reference_architecture.png" alt="Partner Badge" />

The APIs developed in Modyo Connect are consumed directly by the end user from their web browser. The Modyo platform does not participate in communication with APIs, which prevents sensitive information from passing through it. This architecture achieves a complete separation between presentation and business logic, establishing responsibilities delimited in separate systems and increasing the modularity and efficiency of developments.


## Capabilities

The Modyo Connect managed service includes the following capabilities:

- Secure source code repositories
- Automation pipelines for [micro frontends](/en/architecture/patterns/micro-frontend) and [microservices](/en/architecture/patterns/microservice)
- Container deployment platform
- Productive and pre-productive environments
- Centralized log log management
- Managing APIs using an API Gateway
- Application Firewall Management (WAF)
- TLS certificates for all defined endpoints
- Single Sign On (SSO) with OpenID Connect
- “Blue green” deployments to minimize disruptions
- Ongoing monitoring and infrastructure support
- Real-time alerts

Modyo Connect is implemented in high availability mode and is operated by a team of Modyo Site Reliability Engineers (SRes) on the [Amazon AWS] cloud (architecture.md). The service meets the same quality, security and operation standards offered in Modyo Enterprise Cloud.

## Components

Modyo Connect has a variety of services or components that are grouped into three categories:

- [Development](components/development.md)
- [Infrastructure](components/infrastructure.md)
- [Monitoring](components/monitoring.md)

To activate a component, a requisition ticket will be required. We recommend having an active account at the [Modyo Support Center] (https://support.modyo.com) before using the service. For questions about how to activate accounts in the Support Center, please contact the assigned account executive.

:: :tip Activation costs
Activating the components could have associated recurring costs. Each request must be approved by users authorized by the customer.
:::

## Environments

Modyo Connect considers productive and pre-productive environments, deployed in virtual private networks totally separated from each other. Customers can request up to two pre-production environments per deployment. It is important to note that each environment generates additional recurring costs, measured in [Modyo Resource Units (MRUs)] (resources/mrus.md) used.