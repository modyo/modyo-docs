---
search: true
---

# Key concepts

Below you will find a brief explanation of some of the key concepts related to the Modyo Platform.


### Multi-Site Architecture

Modyo implements an easy-to-manage Multi-Site architecture. From a single account, you can create multiple public or private sites.

### Customers interact on sites depending on context

Modyo provides you with different authentication mechanisms, from OpenID Connect to OAuth2 and Google, so you can easily authenticate your customers.

Clients can interact in different sites and in different contexts, maintaining the same central profile that facilitates administration tasks.

### Both CMS and Headless CMS

Modyo Content allows you to create and publish content. You can add fields to define custom content structures easily. Modyo Channels allows you to work with HTML templates and reusable Front End components called widgets.

All structured content that you publish generates an equivalent JSON file that can feed any other site or application. These are served through the Content API.

### An integration platform

Modyo is designed to facilitate the creation of digital solutions integrated with the central systems of enterprises. With this in mind, we keep our focus on facilitating the development of widgets and their integration with APIs.

The widget builder helps Back and Front End developers to work together to create digital experiences connected to APIs. Our governance model allows digital teams to easily preview and publish their work to their digital channels in record time.

### Widgets vs Portlets

Most of our competitors chose the old _portlets_ model (server-side development model). This is slower and requires publishing to production every time a change is made, making digital work more complex.

Modyo is based on widgets and a widget builder that tracks every change in a version control system. Digital work is: easy to audit, moved to the next stage, and published to make it quickly available to your customers.

### Our widget generator

With Modyo's widget builder you can develop any type of widget you require, where you can include components in HTML, CSS, and Javascript that connect to APIs. These become part of your widget library where you'll be able to reuse them when you need them.

The widget builder enhances the digital experience by making Front End development easy to manage, quick to send to production, and easy to audit, providing better security and goal expectations.

### Prefabricated Widgets for Financial Services

Modyo Banking provides prefabricated financial widgets to accelerate the development of your _retail_ and _wealth management_ banking experiences.

A separate license model applies to Modyo Banking.

### Liquid Markup and APIs

Modyo uses Liquid Markup within the platform to give Front and Back End developers a rich language that allows them to add more functionality when building digital experiences. Liquid Markup is used by leading companies to easily add more logic to the Front End code.

APIs enhance our platform and make it easier to build solutions.


### Prepared for the future: PWAs
Progressive Web Applications will be the future of the Web, as they improve the way applications are distributed to end users and give the Web browser more prominence as an execution platform. Within each channel in Modyo, you can control the definitions of _manifest.json_ and _Service Workers_, fundamental technical enablers when implementing PWAs.


### Security, Governance, and Agility

Modyo has an architecture with integrated version control of all the published code. This allows you to easily review the code changes between one version and another of your digital products before publishing.

Agility occurs when you have a greater predictability of your team's capacity, following a model that balances governance and agility. When Team Review is activated in the platform within Channels, two people (a Reviewer and an Approver) can change the status of digital resources to "Published" through a formal, easy-to-handle process. You can also monitor your team's capacity within Insights.

### Glossary
The following definitions correspond to commonly used terms between the different Modyo applications.

#### General

* [**CORS: **](/en/platform/core/security.html #access-control-cross-origin-resource-sharing-cors) Cross Origin Resource Sharing - Allows you to share resources in different domains.
* **Account:** The access point to all of Modyo's features.
* [**Team:**](/en/platform/core/roles.html#equipo) All users have access to the Modyo admin and can be assigned roles and permissions.
* [**Integrations:**](/en/platform/core/integrations) This is the way to delegate or federate the initial authentication process for users or team members.
* [**Password Policy:**](/en/platform/core/security.html#password-policy) Allows you to define rules that team members must comply with when creating or modifying their passwords.
* [**Team review:**](/en/platform/core/key-concepts.html#team-review) Review flow for versioned elements in which approval can be requested from multiple team members.
* [**Site:**](/en/platform/channels/sites.html) It is the tool for creating digital channels within the platform. Site operation encompasses the entire development, design, and flow of navigation.
* [**Editable version:**](/en/platform/core/key-concepts.html #editable) This is the version that you can modify and where you can preview versioned elements.
* [**Global variables:**](/en/platform/core/key-concepts.html#global-variables) These are elements that you can define globally and reuse in different places.
* [**Scheduled version: **] (/es/platform/core/key-concepts.html #programado) It is the version that is ready to be published at a specific date and time.
* [**Published version: **] (/es/platform/core/key-concepts.html #publicado) It is the visible or productive version of the versioned elements. This version cannot be modified.
* [**Backup version: **] (/es/platform/core/key-concepts.html #respaldos) These are the versions that have been published before.
* [**Webhook: **] (/es/platform/core/webhooks.html) Automatically sends information to an external system when a certain event occurs.


#### Modyo Content

* [**Assets: **] (/es/platform/content/asset-manager.html #acerca -the-interface) These are the different files that are uploaded to the platform to be used in content and sites.
* [**Field: **] (/es/platform/content/types.html #campos) It is the atomic unit with which different types of content are formed.
* [**Categories: **] (/es/platform/content/entries.html #categorias) They are a tree structure that allows you to order the contents of your spaces.
* [**Entry: **] (/es/platform/content/entries.html) It is a set of values associated with the different fields defined in the content type.
* [**Space: **] (/es/platform/content/spaces.html) Resource repository where team members can define different structures (types) of content, create and publish entries.
* **Tags: ** They allow you to sort and filter entries freely and without restrictions.
* [**Content type: **] (/es/platform/content/types.html) It is a structure with fields that allows you to define the different contents of your business.


#### Modyo Channels

* [**Domains: **] (/es/platform/channels/sites.html #dominios) Allows you to change the URL and security certificates of your site.
* [**Meta tags: **] (/es/platform/channels/pages.html #meta -tags) Allows you to customize the meta tags for your pages and improve the way search engines index your pages.
* [**Navigation: **] (/es/platform/channels/navigation.html) Allows you to modify the main menu of your site with an easy-to-use interface.
* [**Page: **] (/es/platform/channels/pages.html) Pages (or pages) are what allow you to create a structure for your site, where you can add unstructured content and customize the paths where that content is displayed.
* [**PWA: **] (/es/platform/channels/sites.html #pwa) Allows you to configure the _serviceworker_ and manifest of your site so that you can use it offline.
* [**SEO: **] (/es/platform/channels/sites.html #seo) Allows you to configure the way your site looks before indexing robots.
* [**Templates: **] (/es/platform/channels/templates.html) They are the foundation of your site and define the basic structure of your site's pages.
* [**Widget: **] (/es/platform/channels/widgets.html) It's a reusable functionality package containing HTML, JavaScript, and CSS that can be used on different pages.

#### Modyo Customers

* [**Campaigns: **] (/es/platform/customers/messaging.html #campanas) It is the definition of a communication channel with the user, which allows you to reach them through emails and notifications.
* [**Custom field: **] (/es/platform/customers/realms.html #custom -fields) Allows you to add custom attributes to the user profile.
* [**Filters: **] (/es/platform/customers/segments.html #filtros) They are the unit that allows you to build segments.
* [**Form: **] (/es/platform/customers/forms.html) Allows you to capture data from your users on your sites.
* [**Messaging: **] (/es/platform/customers/messaging.html) Allows you to control direct communication channels with your users.
* [**Segment: **] (/es/platform/customers/segments.html) Allows you to add and group your users using filter groups with different conditions.
* [**User: **] (/es/platform/customers/realms.html) Is the one who accesses and registers on Modyo sites.
