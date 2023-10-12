---
search: true
---

# Private Site
By private site, we are referring to sites that require user authentication. Unlike [public sites](/en/architecture/patterns/public-site), private sites act as genuine Web applications. A private site must provide functionality relevant to the user and keep a record of their actions on the site. This ensures that the use of access credentials or even a possible installation as a Progressive Web Application [PWA](/en/architecture/patterns/pwa) have a clear purpose for the user.

Some examples of private sites are:
- Digital banking applications
- Financial platforms
- Digital wallets
- Digital onboarding
- E-commerce platforms
- Online Health Platforms
- Booking and appointment scheduling systems
- Corporate intranets

:::tip Hybrid sites
Private sites have traditionally been kept separate from public sites, in different systems that often lack common ground. However, there are cases where it is more appropriate to combine both approaches, giving rise to [hybrid sites](/en/architecture/patterns/hybrid-site).
:::

<!-- Hack to avoid this title to be displayed in the TOC element -->
<h3><a href="#implementacion-de-sitios-privados-en-modyo">#</a> Implementing private sites in Modyo</h3>

The implementation of private sites in Modyo is one of the most comprehensive use cases that can be worked on the platform. This implementation includes tools to solve common tasks, such as user authentication using internal credentials or through external identity systems, consuming user information from APIs in external systems, using advanced Javascript components, [micro frontends](/en/architecture/patterns/micro-frontend), [microservices](/en/architecture/patterns/microservice), messaging, notifications, content segmentation, and profile-based pages, among other functions.

The Modyo's unique features that are important to understand when implementing private site projects are:

[[toc]]

:::tip Similarities with Public Sites
Although private sites have their specificities, they also share similarities with [public sites] (/en/architecture/patterns/public-site). This guide is not intended to repeat them all, but to complement them, in cases where the implementation is different.
:::


### User Management
In a private site, user management is essential and is the main difference compared to a private site. To manage users, Modyo has a feature called [user realms](/en/platform/customers/realms). User realms are completely independent of each other and can have their own settings, such as the method of authenticating users in each one.

#### User events
User kingdoms store user events and allow the definition of segments based on information in the user's profile or on their behavior within the system.

#### Forms
Within a realm, you can define forms that users can complete. Modyo processes the answers in these forms, complementing the available information, to generate user segments based on their profile.

#### Messaging and notifications
In a realm, you can also define communication channels with the user through email.

:::tip Messaging channels
In the next version of Modyo, more messaging channels for sending notifications to users will be offered.
:::

#### Using page and content segmentation
Content spaces and sites within Modyo can specify a user realm that will govern them. This allows you to dynamically segment content and information, in addition to offering private features that will only be available to users in session.


### Structure and Modularity

#### Micro frontends and Microservices
[Micro frontends](/en/architecture/patterns/micro-frontend) and [microservices](/en/architecture/patterns/microservice) are architectural strategies that divide an application into smaller, independent components. Micro frontends focus on dividing the user interface into autonomous and separate parts, allowing greater flexibility and collaboration in UI development. For their part, microservices subdivide business logic and functionality into separate services, allowing for the independent development, implementation and scaling of each function. Both approaches improve the modularity, maintainability, and scalability of an application.

The number of functionalities to be implemented in an application and the optimal strategy for structuring them vary depending on the business and the resources available. This makes it especially relevant for private sites to apply techniques such as [Domain Driven Design (DDD)](/en/architecture/patterns/ddd). Using DDD, it is possible to precisely identify and define high-level domains and subdomains, thus determining the most effective way to group functionalities and establish the appropriate level of coupling between them.

In the specific context of micro frontends, Modyo offers all the tools necessary to manage their lifecycle, including support for Modyo CLI, which allows development to be integrated into custom flows from customer repositories. Micro frontends can vary depending on the amount of functionality you intend to implement, ranging from simple to complex. In the case of complex micro frontends that include functionality that should not be decoupled, the final size of the module could affect the user experience.

:::tip Code splitting
In the next version of Modyo, we have incorporated a feature called “code splitting”, which will allow you to break down highly complex micro frontends into modules that will be downloaded dynamically. This will improve load times and prevent the user from downloading code that will not be used. This technique will be especially useful for large micro frontends whose functionality is not convenient to maintain separately.
:::

Support for microservice development is offered from [Modyo Connect](/en/connect). Modyo Connect is a managed cloud infrastructure service that gives you all the resources you need to establish an integration structure with business systems, using lightweight integration microservices.

The integration between micro frontends and microservices is done through clearly defined APIs that are directly exposed on the Internet. These APIs incorporate layers of authentication and authorization through the use of [Single Sign On (SSO)](/en/architecture/patterns/asso), using an architecture pattern called [Backend for Frontend (BFF)](/en/architecture/patterns/bff).


#### Using Javascript Frameworks
Unlike public sites, the use of Javascript frameworks on private sites can be strongly recommended in cases where advanced functionality is required. For example, the consumption of external APIs, components with complex interaction flows, the reuse of code or the use of Web Components. In these instances, the recommended route is to use [micro frontends](/en/architecture/patterns/miro-frontend).

#### Using Web Components
By making use of micro frontends, private sites can benefit from using [Web Components](/en/architecture/patterns/web-components) in a more effective and direct way than in the case of public sites, as long as their reach is limited to micro frontends and not to the entire site.


### Content and source code governance
In a private site, the concept of governance differs from public sites due, in large part, to the complexity of the developments, the use of micro frontends and the dependence on external systems.

Likewise, on a private site, it is reasonable to expect that content management will be easier than on a public site, except for specific cases such as segmented content or promotional campaigns. Therefore, recommendations related to working in previous environments may vary.

#### Using previous environments
You can approach working with previous environments in different ways when working on a private site, especially if the private site makes heavy use of micro frontends. This is because micro frontends are stored and versioned regardless of the platform, making it easy for them to be deployed in different infrastructures without the need for interaction between them.

In private sites where it is necessary, due to internal policies, to develop in separate previous physical environments; the decoupling of micro frontends offers benefits, since differentiated deployments can be incorporated into continuous integration flows for each required environment. In this case, you must keep the number of platform dependencies to be synchronized between environments to a minimum, since there will be no automated mechanisms available for their synchronization.

On the other hand, if you are looking to continuously keep the basic dependencies of the platform synchronized between the different micro frontends, we recommend working on previous virtualized environments using stages, as explained in the next section.

#### Using Stages
We recommend using [stages](/en/platform/channels/sites#stages) in Modyo when micro frontends or [widgets](/en/platform/channels/widgets) require sharing dependencies that are resolved from the base of the platform (Javascript or [snippets](/en/platform/channels/templates#snippets) managed from it). In these cases, you can implement a complete virtualized pre-production environment, which synchronizes changes and allows you to define more direct publishing workflows.

#### Using Design Systems
The use of [design systems](/en/architecture/patterns/design-system) in the architecture of an application improves its governance by providing a coherent structure and guidelines for development. This leads to greater consistency in the user interface, improved collaboration between teams, faster development, more efficient maintenance and scalability, as well as ensuring accessibility and usability. It also strengthens testing and quality. Together, these factors contribute to more efficient control and management of the application, which is reflected in greater effectiveness in its design and operation.

In the development of private sites in Modyo, you can programmatically implement design systems within the micro frontend, using a versioned library from which the components are published. Once deployed in Modyo, the micro frontend can receive CSS or Liquid parameters that allow it to alter any of its design or behavior definitions, if required.


### Progressive Web Application (PWA)
[Progressive Web Applications (PWA)](/en/architecture/patterns/pwa) are web applications that offer an experience similar to a native application on mobile and desktop devices.

They use modern web technologies to offer features such as offline work, push notifications, and fast access, even on slow networks.

The value of PWAs lies in their ability to provide a more attractive and fluid user experience without the need to install an application from an application store, making them accessible and efficient for both developers and users. In addition, they facilitate updating and maintenance, allowing greater consistency and availability across different platforms and devices.

Modyo offers the ability to activate sites as PWAs, providing access to main settings that enable this technology. These enablers allow you to interact with native components of the device, incorporate shortcuts from the application menu and access advanced features such as the camera or the device's biometrics. A simple, but relevant example of these enablers, is the activation of a basic cache on the device to manage the experience in unstable connections (offline mode).

:::tip Uses of PWA
To learn more about the capabilities of PWAs and how to activate these enablers within the Modyo platform, check out our [learning paths](https://help.modyo.com).
:::


