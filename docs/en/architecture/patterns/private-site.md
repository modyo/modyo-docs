---
search: true
---

# Private Site
By private site we mean sites that require user authentication and that, unlike [public sites](/en/architecture/patterns/public-site), act like a true Web application. A private site must offer relevant functionality to the user and keep track of what the user does on it, so that logging in through credentials or a possible installation on the device with [PWA](/en/architecture/patterns/pwa) makes sense to him.

Some common examples of private sites could be:
- Digital banking application
- Financial platforms
- Digital wallet
- Digital onboarding
- E-commerce
- Online Health Platforms
- Reservation and appointment systems
- Corporate intranets

:::tip Hybrid sites
Private sites are traditionally separated from public sites, in different systems that often don't even share anything in common. However, there are cases in which it is more appropriate to implement a combination of the two, with so-called [hybrid sites](/en/architecture/patterns/hybrid-site).
:::

<!-- Hack to avoid this title to be displayed in the TOC element -->
 <h3> <a href="#how-to-implement-private-sites-with-modyo" class="header-anchor">#</a> How to implement private sites with Modyo?</h3>

The implementation of private sites on Modyo is one of the most complete use cases that can be worked on the platform, which includes the toolbox for solving common tasks such as authenticating users using internal credentials or delegated to external identity systems, consuming APIs with user information from external systems, advanced Javascript components, [micro frontends](/en/architecture/patterns/micro-frontend), [microservices](/en/architecture/patterns/microservice), messaging, notifications, segmentation of pages and content according to the profile, among many others.

Below are the different features of Modyo that are important to understand when implementing private site initiatives.

[[toc]]

:::tip Similarities with Public Sites
In working with private sites, we can find similarities that are shared with [public sites](/en/architecture/patterns/public-site). The purpose of this guide is not to repeat them all, but rather to complement them in cases where the implementation is different.
:::


This document contains explanations that will be copied to the official Modyo documentation, at https://docs.modyo.com. The purpose of this document is to collaborate in the drafting of the most important sections.


### User Management
User management is essential within a private site and is the main differentiator compared to a private site. To manage users, Modyo has a feature called [user realms](/en/platform/customers/realms). User realms are completely independent of each other, and can have their own settings, such as how users are authenticated within it.

#### User events
User kingdoms store user events and allow the definition of segments based on information from the user's profile, or their behavior within the system.

#### Forms
Within a user realm, you can define forms that can be completed by users within it. The answers to the forms 

#### Messaging and notifications
Within a realm, it is also possible to define communication channels with the user, which may be through email messaging.

:::tip Messaging channels
In the next version of Modyo, more messaging channels will be available to send notifications to users.
:::

#### Using page and content segmentation
Content spaces and sites within Modyo can specify a user realm that will govern them, allowing content and information to be segmented dynamically, in addition to offering private features that will only be available to users in session.


### Structure and Modularity

#### Micro frontends and Microservices
[micro frontends](/en/architecture/patterns/micro-frontend) and [microservices](/en/architecture/patterns/microservice) are architectural strategies that divide an application into smaller, independent components. Microfrontends focus on fragmenting the user interface into separate and autonomous parts, allowing greater flexibility and collaboration in UI development. Microservices, on the other hand, divide business logic and functionality into separate services, allowing the independent development, implementation and scaling of each function. Both approaches improve the modularity, maintainability, and scalability of an application.

The number of functionalities to be implemented within an application, as well as the optimal strategy for structuring them, varies depending on the business and the resources that support it. This makes it especially relevant in the case of private sites to apply techniques such as [Domain Driven Design (DDD)] (/es/architecture/patterns/ddd). Using DDD, it is possible to precisely identify and define high-level domains and subdomains, thus determining the most effective way to group the functionalities and establish the appropriate level of coupling between them.

For the specific case of micro frontends, Modyo has all the relevant tools that will be required to manage their life cycle, including support for the Modyo CLI, which will allow development to be integrated into custom flows from the client's repositories. In this context, micro frontends will vary depending on the amount of functionality being considered to be implemented, and can be very simple or very complex. In the case of complex micro frontends, which encompass functionality that should not be decoupled, the final size of the module could affect the user experience.

:: :tip Code splitting
In the next version of Modyo, a functionality called “code splitting” has been incorporated, which will allow the decomposition of highly complex micro frontends into modules that are downloaded dynamically, improving load times and preventing the user from downloading code that will not be used. This technique will be especially useful for large micro frontends whose functionality should not be kept separately.
:::

On the other hand, support for the development of microservices is offered from [Modyo Connect] (/es/connect). Modyo Connect is a managed cloud infrastructure service, which allows you to have all the resources necessary to set up an integration structure to business systems, from lightweight integration microservices.

The integration between micro frontends and microservices is done through well-defined APIs which are directly exposed to the Internet, adding layers of authentication and authorization through the use of [Single Sign On (SSO)] (/es/architecture/patterns/esso) and using an architectural pattern called [Backend for Frontend (BFF)] (/es/architecture/patterns/bff).


#### Using Javascript Frameworks
Unlike public sites, the use of Javascript frameworks on private sites can be highly recommended in cases where advanced functionality is required, such as consuming external APIs, components with complex interaction flows, reusing code or using Web Components. In these cases, the recommended way to do this will be through the use of [micro frontends] (/es/architecture/patterns/miro-frontend).

#### Using Web Components
By making use of micro frontends, private sites can benefit from the use of [Web Components] (/es/architecture/patterns/web-components) in a cleaner and more direct way than in the case of public sites, as long as they reach only the micro frontends themselves and not the rest of the site.



### Content and source code governance
Within a private site, the concept of governance is somewhat different than in public sites, mainly due to the complexity of the developments, the use of micro frontends and the dependence on external systems.

In the same way, within a private site, content management is expected to be simpler than a public site, except for specific cases such as segmented content or promotional campaigns. This is why recommendations regarding working with previous environments may vary.

#### Using previous environments
Working with preenvironments can be approached in different ways when working on a private site, especially if it makes intensive use of micro frontends. This is because micro frontends are stored and versioned uncoupled from the platform, allowing them to be deployed in different infrastructures without the need for them to talk to each other.

Private sites where it is necessary, by some policy, to be developed in separate previous physical environments, can benefit from this decoupling, since differentiated deployments can be incorporated into continuous integration flows for each required environment. In this case, the number of platform dependencies to be kept synchronized between environments must be minimal, since there will be no automated mechanisms for their synchronization.

On the other hand, if what is required is to keep the base dependencies of the platform continuously synchronized between the different micro frontends, it will be more recommended to work on previous virtualized environments using stages, as explained in the next section.

#### Using Stages
The use of [stages] (/en/platform/channels/sites.md #stages) within Modyo is recommended when micro frontends or [widgets] (/en/platform/channels/widgets) require sharing dependencies that are resolved from the base of the platform (Javascript or [snippets] (/en/platform/channels/templates.md #snippets) managed from it). In these cases, you can count on a complete virtualized pre-productive environment, which synchronizes changes with each other and allows you to define more direct publishing workflows. 




#### Using Design Systems
The use of [design systems] (/es/architecture/patterns/design-system) in the architecture of an application improves its governance by providing a coherent structure and guidelines for development. This translates into greater consistency in the user interface, improved collaboration between teams, faster development, more efficient maintenance and scalability, guaranteed accessibility and usability, and strengthening testing and quality. Together, these factors contribute to more efficient control and management of the application, which is reflected in greater effectiveness in its design and operation.

In the development of private sites on Modyo, design systems can be implemented programmatically within the micro frontend, through the use of a versioned library from which the artifacts are published. Once deployed in Modyo, the micro frontend could receive CSS or Liquid parameters that allow it to alter any of its design or behavior definitions if required.


### Progressive Web Application (PWA)
[Progressive Web Applications (PWA)] (/es/architecture/patterns/pwa) are web applications that offer an experience similar to a native application on mobile and desktop devices. They use modern web technologies to offer features such as offline work, push notifications, and fast access, even on slow networks. The value of PWAs lies in their ability to provide a more attractive and fluid user experience without the need to install an application from a store, making them accessible and efficient for both developers and users. In addition, they facilitate updating and maintenance, allowing greater consistency and availability across different platforms and devices.

Modyo offers the ability to activate sites as PWAs, providing access to the main settings that enable this technology. These enablers allow you to interact with native components of the device, incorporate shortcuts from the application menu, and access advanced features such as the camera or biometrics of the device. A simple, but relevant example of these enablers, is the activation of basic cache on the device to control the experience on unstable connections (offline mode)

:: :tip Uses of PWA
To learn more about the capabilities of the PWA and tutorials on how these enablers are activated within the Modyo platform, visit our [learning paths] (https://help.modyo.com).
:::


