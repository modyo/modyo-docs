---
search: true
---
# What is Modyo Connect?
Modyo Connect is a managed infrastructure and devops service on the Amazon AWS cloud exclusively for Modyo Enterprise Cloud customers. Modyo Connect is designed for organizations that need to implement a secure and scalable layer of integration APIs, which allow data to be fed to the [micro frontends](resources/microfrontends.md) deployed as Widgets on Modyo.

Modyo Connect allows the implementation of services such as: Single Sign On, API Gateway, container infrastructure for [microservices](resources/microservices.md), databases, messaging queues, object repositories, among other components designed to cover all the common requirements present in an initiative complex integration.

Modyo Connect was born out of the need of some customers to have a managed layer of API management services that will be securely integrated into their business systems. The service is completely optional and, in many cases, is not required since the same client can have its own API architecture and Single Sign On to which the [micro frontends](resources/microfrontends.md) developed on Modyo can be integrated.

The following diagram corresponds to the Modyo implementation reference architecture. The managed Modyo Connect services are on the right in the diagram and are completely decoupled from the platform, so they can be replaced by APIs that the customer already has or that are developed by a third party.

<img src="/assets/img/infrastructure/reference_architecture.png" alt="Partner Badge" style="margin-top: 40px;" />

The APIs developed in Modyo Connect are consumed directly by the end user from their Web browser. The Modyo platform does not take part in communicating with the API, thus preventing sensitive information from passing through it. With this architecture, it is possible to completely decouple presentation from business logic, establishing responsibilities delimited to separate systems, thus increasing the modularity and efficiency of developments.


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

Modyo Connect is implemented in high availability mode and is operated by a team of Modyo Site Reliability Engineers (SRes) on the [Amazon AWS](#architecture) cloud. The service has the same quality, security and operational standards as those offered in Modyo Enterprise Cloud.

## Components
Modyo Connect has different services or components, which are grouped into three categories: 
- [Development](components/development.md)
- [Infrastructure](components/infra-structure.md)
- [Monitoring](components/monitoring.md)

To activate a component, a requirement ticket will be required, so we recommend that before starting to use the service you have active access to the [Modyo Support Center](https://support.modyo.com). For questions about how to activate accounts in the Support Center, please contact the assigned account executive.

::: tip Activation costs
Activating the components could have associated recurring costs. Each request must be approved by the users authorized by the customer.
:::

## Environments
Modyo Connect considers productive and pre-productive environments which are deployed in virtual private networks that are completely separated from each other. Customers can request up to two pre-production environments per deployment, but keep in mind that each environment generates additional recurring costs, measured in the [Modyo Resource Units or MRUs] (#costos) used.

