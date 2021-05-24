---
search: true
---

# Key concepts of Modyo

Below you will find a brief explanation of some of the key concepts related to the Modyo Platform.


### Multi-Site Architecture

Modyo implements an easy-to-manage Multi-Site architecture. From a single account, you can create multiple public or private sites.

Go further, and use Modyo to gain a more complete knowledge about your digital customers.

### Customers interact on sites depending on context

Modyo provides you with different authentication mechanisms, from OpenID Connect to OAuth2 and Google, so you can easily authenticate your customers.

Customers can interact across different sites and in different contexts, maintaining the same central profile that will make it easier for you to manage.

### Both CMS and Headless CMS

Modyo Content allows you to create and publish content. You can add fields to define custom content structures easily. Modyo Channels allows you to work with HTML templates and reusable Front End components called Widgets.

All structured content that is published generates an equivalent JSON file that can feed to any other site or application. These are served through the API.

### An integration platform

Modyo is designed to facilitate the creation of digital solutions integrated with the central systems of companies. With this in mind, we keep the focus on facilitating widget development and connecting to APIs.

The widget builder helps Back and Front End developers work together to create digital experiences connected to APIs. The governance model allows digital teams to easily preview and publish their work to customers in record time.

### Widgets vs Portlets

Most companies that are on the market chose the old _porlets_ model (server-side development model). This is slower and requires publishing to production every time a change is made, making digital work more complex.

Modyo is widget-based and a widget generator that tracks every change in a version control system. Digital work is easy to audit, move to the next stage, and publish to make it available quickly to your customers.

### Our widget generator

With the widget generator you can develop any type of widget you require, where you can include HTML, CSS, and Javascript components that connect to APIs, and become part of your widget library to reuse them whenever you need them.

The widget generator enhances the digital experience by making Front End development easy to operate, fast to send to production and easy to audit, providing greater security and fulfilment of your goals.

### Prefabricated Widgets for Financial Services

Modyo Banking provides prefabricated financial widgets to accelerate the development of your _retail_ and _wealth management_ banking experiences.

A separate license model applies to Modyo Banking.

### Liquid Markup and APIs

Modyo uses Liquid Markup within the platform to give Front and Back End developers a rich language that allows you to add more functionality when building digital experiences. Liquid Markup is used by leading companies to easily add more logic to Front End code.

APIs empower the platform and make it easier to build solutions.


### Future Ready: PWAs
Progressive Web Applications will be the future of the Web, as they improve the way they are distributed to end users and give more prominence to the web browser as an execution platform. With Modyo you can control the definitions of _manifest.json_ and _Service Workers_ on each site, which are key technical enablers when implementing PWAs.


### Security, Governance and Agility

Modyo has an architecture where all published code generates versions. Before you publish a version of a widget or layout, you can easily review code changes between versions.

Agility occurs when you have a greater predictability of your team's capacity, following a model that balances governance and agility. When Team Review is activated on the platform within Channels, two people (Reviewer and Approver) can change the status of digital resources to “Published” through an easy-to-handle formal process. Your team's capacity is later measured within Insights.

### Glossary
The following definitions correspond to commonly used terms between the different Modyo applications.

#### General

* [**CORS**] (/es/platform/core/security.html #compartir -resources-in-distinct-domains): Cross Origin Resource Sharing - Allows resource sharing across different domains.
* **Account**: This is the access point to all Modyo features.
* [**Computer**] (/es/platform/core/roles.html #equipo): All users who have access to the Modyo admin and can be assigned roles and permissions.
* [**Integrations**] (/en/platform/core/integrations): This is the way to delegate or federate the authentication process for users or team members.
* [**Password Policy**] (/es/platform/core/security.html #politica -password): Allows you to define rules that team members must comply with when creating or modifying their passwords.
* [**Team Review**] (/es/platform/core/key-concepts.html #revision -in-team): Review flow of versioned items in which approval can be requested from multiple team members.
* [**Site**] (/es/platform/channels/sites.html): It is the tool to create digital channels within the platform. Site operation encompasses the entire development, design and navigation flow.
* [**Editable Version**] (/es/platform/core/key-concepts.html #editable): This is the version you can modify and preview the versioned elements.
* [**Global Variables**] (/es/platform/core/key-concepts.html #variables -global): These are elements that you can define globally and reuse them in different places.
* [**Scheduled Version**] (/es/platform/core/key-concepts.html #programado): This is the version that is ready to be published at a given date and time.
* [**Published version**] (/es/platform/core/key-concepts.html #publicado): This is the visible or productive version of versioned elements. This version could not be modified.
* [**Backup version**] (/es/platform/core/key-concepts.html #respaldos): These are the versions that have been previously released.
* [**Webhook**] (/en/platform/core/integrations #webhooks): Automatically sends information to an external system when a particular event occurs.


#### Modyo Content

* [**Assets**] (/es/platform/content/asset-manager.html #acerca -la-interface): These are the different files that are uploaded to the platform for use in content and sites.
* [**Field**] (/es/platform/content/types.html #campos): It is the atomic unit with which the different types of content are formed.
* [**Categories**] (/es/platform/content/entries.html #categorias): They are a tree structure that allows you to sort the content of your spaces.
* [**Input**] (/es/platform/content/entries.html): This is a set of values associated with the various fields defined in the content type.
* [**Space**] (/es/platform/content/spaces.html): Resource repository where team members can define different content structures (types), create, and publish entries.
* **Tags**: Allow you to sort and filter entries freely and without restrictions.
* [**Content type**] (/es/platform/content/types.html): It is a structure with fields that allows you to define the different content of your business.


#### Modyo Channels

* [**Domains**] (/es/platform/channels/sites.html #dominios): Allows you to change the URL and security certificates of your site.
* [**Meta tags**] (/es/platform/channels/pages.html #meta -tags): Allows you to customize meta tags for your pages and improve the way search engines index your pages.
* [**Navigation**] (/es/platform/channels/navigation.html): Allows you to modify your site's main menu with a user-friendly interface.
* [**Page**] (/es/platform/channels/pages.html): Pages (or pages) are what allows you to create a structure for your site, where you can add unstructured content and customize the paths where that content is displayed.
* [**PWA**] (/es/platform/channels/sites.html #pwa): Allows you to configure your site's _serviceworker_ and manifest so you can use it offline.
* [**SEO**] (/es/platform/channels/sites.html #seo): Allows you to configure how your site looks before indexing robots.
* [**Templates**] (/es/platform/channels/templates.html): They are the basis of your site and define the base structure of your site's pages.
* [**Content views**] (/es/platform/channels/templates.html #vistas -for-content): They are the meeting point between your site and content entries, which allow you to define a base page and that all entries of the same type are seen under the same display.
* [**Widget**] (/es/platform/channels/widgets.html): It is a reusable functionality package that contains HTML, JavaScript, and CSS that can be used across different pages.

#### Modyo Customers

* [**Campaigns**] (/es/platform/customers/messaging.html #campanas): It is the definition of a communication channel with the user, which allows you to reach them through emails and notifications.
* [**Custom field**] (/es/platform/customers/realms.html #custom -fields): Allows you to add custom attributes to the user's profile.
* [**Filters**] (/es/platform/customers/targets.html #filtros): These are the drive that allows you to build targets.
* [**Form**] (/es/platform/customers/forms.html): Allows you to capture data about your users on your sites.
* [**Messagery**] (/es/platform/customers/messaging.html): Allows you to control the channels of direct communication with your users-
* [**Target**] (/es/platform/customers/targets.html): Allows you to add and group your users using filter groups with different conditions.
* [**User**] (/es/platform/customers/realms.html): It is the person who accesses and registers on Modyo's sites.
