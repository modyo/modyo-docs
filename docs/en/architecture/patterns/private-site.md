---
search: true
---

# Private Site
A private site requires user authentication. Unlike [public sites](/en/architecture/patterns/public-site), private sites function as web applications, offering relevant functionalities and recording user actions. This ensures that the use of credentials or the installation as a Progressive Web Application [PWA](/en/architecture/patterns/pwa) has a clear purpose for the user.

Some examples of private sites are:
- Digital banking application
- Financial platforms
- Digital wallets
- Digital onboarding
- E-commerce platforms
- Online health platforms
- Reservation and appointment scheduling systems
- Corporate intranets

:::tip Hybrid sites
Traditionally, private and public sites have been kept separate. However, in certain cases, it is more appropriate to combine both approaches, giving rise to [hybrid sites](/en/architecture/patterns/hybrid-site).
:::

<!-- Hack to avoid this title to be displayed in the TOC element -->
<h3><a href="#implementacion-de-sitios-privados-en-modyo">#</a> Implementation of private sites in Modyo</h3>

The implementation of private sites in Modyo is one of the most complete use cases of the platform. It includes tools for common tasks such as user authentication (internal credentials or external identity systems), consumption of user information from external APIs, use of advanced Javascript components, [micro frontends](/en/architecture/patterns/micro-frontend), [microservices](/en/architecture/patterns/microservice), messaging, notifications, and content and page segmentation based on profiles.

The different features of Modyo that are important to understand when implementing private site projects are:

[[toc]]

:::tip Similarities with Public Sites
Although private sites have their particularities, they also share similarities with [public sites](/en/architecture/patterns/public-site). This guide is not intended to repeat them all, but to complement them, in cases where the implementation is different.
:::


### User Management
In a private site, user management is essential. Modyo offers the functionality of [user realms](/en/platform/customers/overview), which are completely independent and can have their own configurations, such as the authentication method.

#### User events
User realms store events and allow the definition of segments based on the user's profile or behavior within the system.

#### Forms
Within a realm, forms can be defined for users to complete. Modyo processes these responses, complementing the available information to generate user segments based on their profile.

#### Messaging and notifications
In a realm, communication channels with the user can also be defined through email.

:::tip Messaging channels
(Note: In future versions of Modyo, more messaging channels for notifications will be offered.)
:::

#### Use of page and content segmentation
Content spaces and sites in Modyo can specify a user realm. This allows for dynamic segmentation of content and information, and for offering private features only available to authenticated users.


### Structure and Modularity

#### Micro frontends and Microservices
[Micro frontends](/en/architecture/patterns/micro-frontend) and [microservices](/en/architecture/patterns/microservice) are architectural strategies that divide an application into small, independent components. Micro frontends focus on dividing the user interface into autonomous parts for greater flexibility and collaboration in UI development. Microservices, on the other hand, subdivide business logic and functionalities into independent services, allowing for their autonomous development, implementation, and scaling. Both approaches improve the modularity, maintainability, and scalability of the application.

The number of functionalities to be implemented and the structuring strategy vary according to the business and resources. For private sites, it is especially relevant to apply techniques such as [Domain-Driven Design (DDD)](/en/architecture/patterns/ddd). DDD allows for the precise identification and definition of high-level domains and subdomains, determining the most effective way to group functionalities and establish the appropriate coupling.

In the context of micro frontends, Modyo offers tools to manage their life cycle, including support for Modyo CLI, which allows for the integration of development into custom flows from the client's repositories. Micro frontends vary in complexity; in cases of complex modules with functionality that should not be decoupled, the final size could affect the user experience.

:::tip Code splitting
(Note: In future versions of Modyo, the "code splitting" functionality will allow for the decomposition of complex micro frontends into dynamically downloaded modules, improving loading times and avoiding the download of unused code. This technique will be useful for large micro frontends whose functionality is not convenient to separate.)
:::

The support for the development of microservices is offered through [Modyo Connect](/en/connect), a managed cloud infrastructure service that provides the necessary resources to establish an integration structure with business systems through lightweight microservices.

The integration between micro frontends and microservices is done through well-defined APIs, exposed directly on the Internet. These APIs incorporate authentication and authorization layers through [Single Sign On (SSO)](/en/architecture/patterns/sso), using the [Backend for Frontend (BFF)](/en/architecture/patterns/bff) pattern.


#### Use of Javascript Frameworks
Unlike public sites, in private sites the use of Javascript frameworks is highly recommended for advanced functionalities, such as the consumption of external APIs, components with complex interaction flows, code reuse, or the use of Web Components. In these cases, the recommended route is through [micro frontends](/en/architecture/patterns/micro-frontend).

#### Use of Web Components
By using micro frontends, private sites can benefit from the use of [Web Components](/en/architecture/patterns/web-components) more effectively and directly than public sites, as long as their scope is limited to the micro frontends and not to the entire site.


### Governance of content and source codes
In a private site, the concept of governance differs from that of public sites due to the complexity of the developments, the use of micro frontends, and the dependence on external systems.

Likewise, in a private site, content management is usually simpler than in a public site, except in specific cases such as segmented content or promotional campaigns. Therefore, the recommendations for previous environments may vary.

#### Use of previous environments
Work with previous environments in a private site can be approached in various ways, especially if the site uses micro frontends intensively. Since micro frontends are stored and versioned independently of the platform, they can be deployed in different infrastructures without the need for interaction.

In private sites that, due to internal policies, require development in separate previous physical environments, the decoupling of micro frontends offers benefits. It allows for the incorporation of differentiated deployments in the continuous integration flows for each environment. In this case, the number of platform dependencies to be synchronized between environments must be minimized, since there will be no automated mechanisms for it.

To keep the base dependencies of the platform synchronized between the micro frontends, it is recommended to work with virtualized previous environments through the use of stages, as explained in the next section.

#### Use of Stages
It is recommended to use [stages](/en/platform/channels/sites.md#stages) in Modyo when micro frontends or [widgets](/en/platform/channels/widgets) require sharing dependencies resolved from the base of the platform (Javascript or [snippets](/en/platform/channels/templates.md#snippets)). In these cases, a virtualized pre-production environment can be implemented that synchronizes changes and allows for more direct publication workflows.

#### Use of Design Systems
The use of [design systems](/en/architecture/patterns/design-system) in the architecture of an application improves its governance by providing a coherent structure and guidelines for development. This results in greater consistency of the user interface, better collaboration between teams, faster development, more efficient maintenance and scalability, and ensures accessibility and usability. Together, these factors contribute to a more efficient control and management of the application, which is reflected in a greater effectiveness in its design and operation.

In the development of private sites in Modyo, design systems can be implemented programmatically within the micro frontend, using a versioned library for the publication of components. Once deployed in Modyo, the micro frontend can receive CSS or Liquid parameters to alter its design or behavior definitions, if necessary.


### Progressive Web Application (PWA)
[Progressive Web Applications (PWA)](/en/architecture/patterns/pwa) are web applications that offer an experience similar to native applications on mobile and desktop devices.

They use modern web technologies to offer functionalities such as offline work, push notifications, and fast access, even on slow networks.

The value of PWAs lies in their ability to offer a more attractive and fluid user experience without the need for installation from an application store, which makes them accessible and efficient for developers and users. In addition, they facilitate updating and maintenance, allowing for greater consistency and availability on different platforms and devices.

Modyo allows sites to be activated as PWAs, providing access to key settings that enable this technology. These settings allow for interaction with native device components, incorporation of shortcuts from the application menu, and access to advanced functionalities such as the camera or biometrics. A relevant example is the activation of a basic cache on the device to manage the experience in unstable connections (offline mode).

:::tip Uses of PWA
For more information on the capabilities of PWAs and how to activate them on the Modyo platform, see our [learning paths](https://help.modyo.com).
:::