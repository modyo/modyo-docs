---
search: true
---
# What is Modyo Connect?

Modyo Connect is an infrastructure and DevOps management service in the Amazon AWS cloud, exclusive to Modyo Enterprise Cloud customers. It is designed for organizations that need to implement a secure and scalable layer of integration APIs to feed data to the [micro frontends](/en/architecture/patterns/micro-frontend) deployed as widgets in Modyo.

Modyo Connect allows the implementation of services to cover the common requirements of a complex integration initiative, including:

 - Single Sign-On (SSO)
 - API Gateway
- Container infrastructure for [microservices](/en/architecture/patterns/microservice)
- Databases
- Messaging queues
- Object repositories

Modyo Connect was created to meet the need of some customers for a managed layer of API management services that integrates securely with their business systems. This service is optional and, in many cases, not necessary, as the client may have their own API and Single Sign-On architecture, to which the [micro frontends](/en/architecture/patterns/micro-frontend) developed in Modyo can be integrated.

This diagram shows Modyo's reference implementation architecture. The managed services of Modyo Connect are on the right in the diagram and are completely decoupled from the platform, so they can be replaced by APIs that the client already owns or that are developed by third parties.

<img src="/assets/img/infrastructure/reference_architecture.png" alt="Partner Badge" />

The APIs developed in Modyo Connect are consumed directly by the end user from their web browser. The Modyo platform does not participate in the communication with the APIs, which prevents sensitive information from passing through it. This architecture achieves a complete separation between the presentation and the business logic, establishing delimited responsibilities in separate systems and increasing the modularity and efficiency of the developments.


## Capabilities

The managed service of Modyo Connect includes the following capabilities:

- Secure source code repositories.
- Automation pipelines for [micro frontends](/en/architecture/patterns/micro-frontend) and [microservices](/en/architecture/patterns/microservice).
- Container deployment platform.
- Productive and pre-productive environments.
- Centralized log management.
- API management through an API Gateway.
- Web Application Firewall (WAF) management.
- TLS certificates for all defined endpoints.
- Single Sign-On (SSO) with OpenID Connect.
- "Blue/green" deployments to minimize interruptions.
- Continuous monitoring and infrastructure support.
- Real-time alerts.

Modyo Connect is implemented in high availability mode and is operated by a team of Modyo Site Reliability Engineers (SREs) in the [Amazon AWS](architecture.md) cloud. The service meets the same quality, security, and operation standards offered in Modyo Enterprise Cloud.

## Components

Modyo Connect has a variety of services or components that are grouped into three categories:

- [Development](components/development.md)
- [Infrastructure](components/infrastructure.md)
- [Monitoring](components/monitoring.md)

To activate a component, a requirement ticket is required. It is recommended to have an active account in the [Modyo Support Center](https://support.modyo.com) before using the service. For questions on how to activate accounts in the Support Center, contact the assigned account executive.

:::tip Activation costs
The activation of the components could have associated recurring costs. Each request must be approved by the client's authorized users.
:::

## Environments

Modyo Connect considers productive and pre-productive environments, deployed in completely separate virtual private networks. Customers can request up to two pre-productive environments per deployment. Each environment generates additional recurring costs, measured in [Modyo Resource Units (MRUs)](resources/mrus.md).
