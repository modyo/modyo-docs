---
search: true
---

# Modyo key concepts

Below you will find a brief explanation of some of the key concepts related to the Modyo Platform.


### Multi-Site Architecture

Modyo implements an easy-to-manage Multi-Site architecture. From a single account, you can create multiple public or private sites.

You can even go further and use Modyo to develop a deeper understanding about your digital customers throughout your different sites.

### Customers interact on sites depending on context

Modyo provides you with different authentication mechanisms, from OpenID Connect to OAuth2 and Google, so you can easily authenticate your customers.

Clients can interact in different sites and in different contexts, maintaining the same central profile that facilitates administration tasks.

### Both CMS and Headless CMS

Modyo Content allows you to create and publish content. You can add fields to define custom content structures easily. Modyo Channels allows you to work with HTML templates and reusable Front End components called widgets.

All structured content that you publish generates an equivalent JSON file that can feed any other site or application. These are served through the Content API.

### An integration platform

Modyo is designed to facilitate the creation of digital solutions integrated with the central systems of enterprises. With this in mind, we keep our focus on facilitating the development of widgets and their integration with APIs.

The widget generator helps Back and Front End developers work together to create digital experiences connected to APIs. Our governance model allows digital teams to easily preview and publish their work to their digital channels in record time.

### Widgets vs Portlets

Most of our competitors chose the old _portlets_ model (server-side development model). This is slower and requires publishing to production every time a change is made, making digital work more complex.

Modyo bases its development model on widgets and a widget generator that tracks every change in a version control system. Digital work is easy to audit, move on to the next stage and publish so that it is quickly available to your customers.

### Our widget generator

With the widget generator you can develop any type of widget you require and include all necessary HTML, CSS and Javascript. You can connect widgets to your APIs, and publish them to your widget library to reuse them when needed.

The widget generator enhances the digital experience by making Front End development easy to handle, quick to send to production and easy to audit, providing greater security and fulfillment of your key objectives.

### Prefabricated Widgets for Financial Services

Modyo Banking provides prefabricated financial widgets to accelerate the development of your _retail_ and _wealth management_ banking experiences.

A separate license model applies to Modyo Banking.

### Liquid Markup and APIs

Modyo uses Liquid Markup within the platform to give Front and Back End developers a rich language that allows them to add more functionality when building digital experiences. Liquid Markup is used by leading companies to easily add more logic to the Front End code.

APIs enhance our platform and make it easier to build solutions.


### Prepared for the future: PWAs
Progressive Web Applications will be the future of the Web, as they improve the way applications are distributed to end users and give the Web browser more prominence as an execution platform. Within each channel in Modyo, you can control the definitions of _manifest.json_ and the _Service Workers_, fundamental technical enablers when implementing PWAs.


### Security, Governance and Agility

Modyo has an architecture with integrated version control of all the published code. This allows you to easily review the code changes between one version and another of your digital products before publishing.

Agility occurs when you have a greater predictability of your team's capacity, following a model that balances governance and agility. When Team Review is activated in the platform within Channels, two people (a Reviewer and an Approver) can change the status of digital resources to "Published" through a formal, easy-to-handle process. You can monitor your team's capacity within Insights.

### Glossary
The following definitions correspond to commonly used terms between the different Modyo applications.

#### General

* [**CORS**](/en/platform/core/security.html#share-resources-across-different-domains): Cross Origin Resource Sharing - Allows sharing of resources across different domains.
* **Account**: This is where you can access all the features that Modyo has to offer.
* [**Computer**](/en/platform/core/roles.html #equipo): All users who have access to the Modyo admin and can be assigned roles and permissions.
* [**Integrations**](/en/platform/core/integrations): This is the way to delegate or federate the authentication process for users or team members.
* [**Password Policy**](/en/platform/core/security.html #politica -password): Allows you to define rules that team members must comply with when creating or modifying their passwords.
* [**Team Review**](/en/platform/core/key-concepts.html #revision -in-team): Review flow of versioned items in which approval can be requested from multiple team members.
* [**Site**](/en/platform/channels/sites.html): It is the tool to create digital channels within the platform. Site operation encompasses the entire development, design and navigation flow.
* [**Editable Version**](/en/platform/core/key-concepts.html #editable): This is the version you can modify and preview the versioned elements.
* [**Global Variables**](/en/platform/core/key-concepts.html #variables -global): These are elements that you can define globally and reuse them in different places.
* [**Scheduled Version**](/en/platform/core/key-concepts.html #programado): This is the version that is ready to be published at a given date and time.
* [**Published version**](/en/platform/core/key-concepts.html #publicado): This is the visible or productive version of versioned elements. This version could not be modified.
* [**Backup version**](/en/platform/core/key-concepts.html #respaldos): These are the versions that have been previously released.
* [**Webhook**](/en/platform/core/integrations #webhooks): Automatically sends information to an external system when a particular event occurs.


#### Modyo Content

* [**Assets**](/en/platform/content/asset-manager.html #acerca -la-interface): These are the different files that are uploaded to the platform for use in content and sites.
* [**Field**](/en/platform/content/types.html #campos): It is the atomic unit with which the different types of content are formed.
* [**Categories**](/en/platform/content/entries.html #categorias): They are a tree structure that allows you to sort the content of your spaces.
* [**Input**](/en/platform/content/entries.html): This is a set of values associated with the various fields defined in the content type.
* [**Space**](/en/platform/content/spaces.html): Resource repository where team members can define different content structures (types), create, and publish entries.
* **Tags**: Allow you to sort and filter entries freely and without restrictions.
* [**Content type**](/en/platform/content/types.html): It is a structure with fields that allows you to define the different content of your business.


#### Modyo Channels

* [**Domains**](/en/platform/channels/sites.html #dominios): Allows you to change the URL and security certificates of your site.
* [**Meta tags**](/en/platform/channels/pages.html #meta -tags): Allows you to customize meta tags for your pages and improve the way search engines index your pages.
* [**Navigation**](/en/platform/channels/navigation.html): Allows you to modify your site's main menu with a user-friendly interface.
* [**Page**](/en/platform/channels/pages.html): Pages (or pages) are what allows you to create a structure for your site, where you can add unstructured content and customize the paths where that content is displayed.
* [**PWA**](/en/platform/channels/sites.html #pwa): Allows you to configure your site's _serviceworker_ and manifest so you can use it offline.
* [**SEO**](/en/platform/channels/sites.html #seo): Allows you to configure how your site looks before indexing robots.
* [**Templates**](/en/platform/channels/templates.html): They are the basis of your site and define the base structure of your site's pages.
* [**Content views**](/en/platform/channels/templates.html #vistas -for-content): They are the meeting point between your site and content entries, which allow you to define a base page and that all entries of the same type are seen under the same display.
* [**Widget**](/en/platform/channels/widgets.html): It is a reusable functionality package that contains HTML, JavaScript, and CSS that can be used across different pages.

#### Modyo Customers

* [**Campaigns**](/en/platform/customers/messaging.html #campanas): It is the definition of a communication channel with the user, which allows you to reach them through emails and notifications.
* [**Custom field**](/en/platform/customers/realms.html #custom -fields): Allows you to add custom attributes to the user's profile.
* [**Filters**](/en/platform/customers/targets.html #filtros): These are the drive that allows you to build targets.
* [**Form**](/en/platform/customers/forms.html): Allows you to capture data about your users on your sites.
* [**Messagery**](/en/platform/customers/messaging.html): Allows you to control the channels of direct communication with your users-
* [**Target**](/en/platform/customers/targets.html): Allows you to add and group your users using filter groups with different conditions.
* [**User**](/en/platform/customers/realms.html): It is the person who accesses and registers on Modyo's sites.
