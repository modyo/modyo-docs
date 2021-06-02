---
search: true
---

# Architecture
DXP systems play a key role in any digital transformation strategy. Its ability to take control of the main channels of communication with customers and collaborators require a robust integration strategy towards the rest of the ecosystem of business applications that are part of each strategy.

The Modyo Platform, through a decentralized integration scheme based on APIs and microservices, allows to adapt to different challenges. Unlike monolithic platforms that sought to have an internal response to each issue, next-generation DXPs privilege integration with specialized platforms rather than offering full functionality. This translates into lighter platforms and adaptable to every need, allowing organizations to choose within the ecosystem the best solutions that adapt to their specific realities, thereby lowering total operating and infrastructure costs, by scaling only the resources that require it.


## Reference Architecture
The reference architecture on which the Modyo Platform is implemented varies from simple scenarios, where no further integration such as public sites or intranets is required, to more complex scenarios, in which additional functionality is required. In this second scenario, business system integrations are performed using a layer of APIs that are implemented independently of the platform, as shown in the following diagram.

<img src="/assets/img/infrastructure/reference_architecture.png" style="margin-top: 40px;" />


The left part of the diagram corresponds to the Modyo Platform, whose primary responsibility lies with the management of the digital channels Web, Web Mobile and Progressive Web Application (PWA). The platform provides the necessary tools to manage the lifecycle of all frontend developments, including both Web sites and Widgets, which can initiate connections to the integration layer.

On the right side of the diagram, you can see the integration layer where the Single Sign On (SSO) system acts as the central authentication pivot, and which, in conjunction with the API Gateway, represent the heart of any digital transformation initiative by granting: Unified access for all digital channels A multichannel bridge for access to business systems APIs that can be safely consumed from the Internet An environment on which to orchestrate and consolidate calls to business systems, granting unique access to different digital channels A mechanism to interoperate at the APIs level with multiple business partners Un acceso unificado para todos los canales digitales Un puente multicanal de acceso a los sistemas de negocio APIs que pueden ser consumidas de forma segura desde Internet Un ambiente sobre el cual orquestar y consolidar las llamadas a los sistemas de negocio, otorgando un acceso único a los diferentes canales digitales Un mecanismo para interoperar a nivel de APIs con múltiples socios de negocio

Modyo has services handled for both parts of the diagram. In the case of the Platform, a Software as a Service (SaaS) solution is offered in Cloud and Enterprise Cloud versions. For the integration layer, Modyo offers a managed Platform as a Service (PaaS) services called Modyo Connect, which takes over the management of the SSO, API Gateway and everything required to handle the development lifecycle of microservices and integration components. Modyo Connect integration is only available to customers on Enterprise Cloud.

## Versions

The Modyo Platform is currently distributed in two versions: Modyo Cloud and Modyo Enterprise. Modyo Cloud y Modyo Enterprise. Modyo Cloud is deployed to a _multi-tenant_ cloud on Amazon Web Services (AWS), where resources are shared between different customers. Modyo Enterprise can be deployed in _Cloud_ or _On Premise_ mode. A Modyo Enterprise Cloud customer can also choose a less stable version, receiving the latest improvements in return.

For Cloud and Enterprise Cloud versions, the subscription value includes 24x7 infrastructure support services.

### Modyo Cloud

The Cloud version of Modyo represents the most economical and simple alternative to subscribe to the platform. Deployed in a _multi-tenant_ environment, the infrastructure is shared between multiple clients so that the data and particular information of each are logically separated, but deployed in a common repository.

The Cloud version of Modyo receives updates on a regular basis and the platform is always deployed in its latest version. Customers don't have the option to choose which version of Modyo they want to be in.


### Modyo Enterprise Cloud

Modyo's Enterprise Cloud deployment is designed with compliance and compliance with the most demanding regulations across industries in mind, with unique features that differentiate it from the Cloud alternative, including:
- Controlled access by customers to the infrastructure deployed in the cloud.
- Access to audit AWS configurations.
- Dedicated infrastructure as code (IoC) template for each customer.
- Customizing the features of your deployment on AWS.
- Possibility to deploy to a fully isolated AWS account.
- Access to application and security logs.
- Integration with client application firewalls (Incapsula, Akamai, Cloudflare, among others).
- Advanced encryption.
- Custom monitoring panel of environment metrics in the Modyo Support Center.


### Modyo Enterprise On Premise

Modyo's Enterprise On Premise deployment enables you to deploy the platform in a fully customer-controlled environment, either in the cloud or in a traditional data center. Modyo provides for this case a complete infrastructure support service that allows to provide an accompaniment in all the configuration and operation processes of the platform, which covers both Modyo software and all the components of its technological _stack_.

