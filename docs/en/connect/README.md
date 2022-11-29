---
search: true
---
# What is Modyo Connect?
Modyo Connect is a managed infrastructure and devops service on the Amazon AWS cloud exclusively for Modyo Enterprise Cloud customers. Modyo Connect is designed for organizations that need to implement a secure and scalable layer of integration APIs, which allow data to be fed to the [micro frontends](resources/microfrontends.md) deployed as Widgets on Modyo.

Modyo Connect allows the implementation of services such as: Single Sign On, API Gateway, container infrastructure for [microservices](resources/microservices.md), databases, messaging queues, object repositories, among other components designed to cover all the common requirements present in an initiative complex integration.

Modyo Connect was born in response to the need of some customers to have a managed layer of API management services that would securely integrate with their business systems. The service is completely optional and, in many cases, is not required, since the client itself can have its own API and Single Sign On architecture to which the [microfrontends](resources/microfrontends.md) developed on top of Modyo can be integrated.

The following diagram corresponds to the Modyo implementation reference architecture. The managed Modyo Connect services are on the right in the diagram and are completely decoupled from the platform, so they can be replaced by APIs that the customer already has or that are developed by a third party.

<img src="/assets/img/infrastructure/reference_architecture.png" alt="Partner Badge" style="margin-top: 40px;" />

The APIs developed in Modyo Connect are consumed directly by the end user from their web browser. The Modyo platform does not take part in the communication with the APIs, thus preventing sensitive information from passing through it. With this architecture it is possible to completely decouple the presentation from the business logic, establishing delimited responsibilities in separate systems, thus increasing the modularity and efficiency of the developments.


## Capabilities
The Modyo Connect managed service includes the following capabilities:
- Secure source code repositories
- Automation pipelines for [micro frontends](resources/microfrontends.md) and [microservices](resources/microservices.md)
- Container deployment platform
- Productive and pre-productive environments
- Centralized log log management
- Managing APIs using an API Gateway
- Application Firewall Management (WAF)
- TLS certificates for all defined endpoints
- Single Sign On (SSO) with OpenID Connect
- “Blue green” deployments that minimize the possibility of disruption
- Ongoing monitoring and infrastructure support
- Real-time alerts

Modyo Connect is implemented in high availability mode and is operated by a team of Modyo Site Reliability Engineers (SREs) on the [Amazon AWS](#architecture) cloud. The service has the same quality, security and operational standards as those offered in Modyo Enterprise Cloud.

## Components
Modyo Connect has different services or components, which are grouped into three categories: 
- [Development](components/development.md)
- [Infrastructure](components/infrastructure.md)
- [Monitoring](components/monitoring.md)

To activate a component, a requirement ticket will be required, so we recommend that before starting to use the service you have active access to the [Modyo Support Center](https://support.modyo.com). For questions about how to activate accounts in the Support Center, please contact the assigned account executive.

::: tip Activation costs 
Activation of components may have recurring costs associated with them. Each request must have the approval of the customer's authorized users.
:::

## Environments
Modyo Connect considers productive and pre-production environments, which are deployed in virtual private networks totally separate from each other. Customers can request up to two pre-production environments per deployment, but should note that each environment generates additional recurring costs, measured in [Modyo Resource Units or MRUs](resources/mrus.md) used.