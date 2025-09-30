---
search: true
---
# What is Modyo Connect?

Modyo Connect is an infrastructure and DevOps management service in the Amazon AWS cloud, exclusively for Modyo Enterprise Cloud customers. It is designed for organizations that need to implement a secure and scalable layer of integration APIs to feed data to the [micro frontends](/en/architecture/patterns/micro-frontend) deployed as widgets in Modyo.

Modyo Connect enables the implementation of services to cover the common requirements of complex integration initiatives, including:

 - Single Sign-On (SSO)
 - API Gateway
- Container infrastructure for [microservices](/en/architecture/patterns/microservice)
- Databases
- Messaging queues
- Object repositories

Modyo Connect was developed to address the need of some customers for a managed layer of API management services that securely integrates with their business systems. This service is optional and, in many cases, not necessary, as clients may have their own API and Single Sign-On architecture, to which Modyo-developed [micro frontends](/en/architecture/patterns/micro-frontend) can be integrated.

This diagram illustrates Modyo's reference implementation architecture. The managed services of Modyo Connect are depicted on the right side of the diagram and are completely decoupled from the platform, allowing them to be replaced by existing client APIs or those developed by third parties.

<img src="/assets/img/infrastructure/reference_architecture.png" alt="Partner Badge" />

APIs developed in Modyo Connect are consumed directly by the end user from their web browser. The Modyo platform does not participate in API communication, which prevents sensitive information from passing through it. This architecture achieves a complete separation between presentation and business logic, establishing delimited responsibilities in separate systems and increasing the modularity and efficiency of developments.


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

Modyo Connect features a variety of services or components categorized into three groups:

- [Development](development/README.md)
- [Infrastructure](infrastructure/README.md)
- [Monitoring](monitoring/README.md)

To activate a component, a requirement ticket is necessary. It is recommended to have an active account in the [Modyo Support Center](https://support.modyo.com) before using the service. For questions on how to activate accounts in the Support Center, contact the assigned account executive.

:::tip Activation costs
The activation of components may incur recurring costs. Each request must be approved by the client's authorized users.
:::

## Environments

Modyo Connect supports productive and pre-productive environments, deployed in completely separate virtual private networks. Customers can request up to two pre-productive environments per deployment. Each environment generates additional recurring costs, measured in [Modyo Resource Units (MRUs)](resources/mrus.md).