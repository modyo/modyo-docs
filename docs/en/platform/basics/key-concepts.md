---
search: true
---

# Key concepts

In this section, you will find a brief explanation of the key concepts related to the Modyo Platform.


### Multi-Site Architecture

Modyo implements an easy-to-manage Multi-Site architecture. From a single account, you can create multiple public or private sites.

### Contextual customer interaction

Modyo offers several authentication mechanisms, such as OpenID Connect, OAuth2 and Google, to easily authenticate your customers. Customers can interact in different sites and contexts, maintaining a central profile for efficient administration.

### CMS and Headless CMS

Modyo Content allows you to create and publish content, with the flexibility to add fields for custom structures.

Modyo Channels works with HTML templates and reusable frontend components called widgets.

All the structured content that is published generates a JSON file that you can feed to another site or application through the API.


### Integration platform

Modyo is designed to facilitate the creation of digital solutions integrated with companies' core systems. With this in mind, we remain focused on facilitating the development of widgets and the connection with APIs.

The widget generator helps back and frontend developers to work together to create digital experiences connected to APIs, and the governance model allows them to quickly preview and publish work.

### Widgets

Most companies in the market work with an old _portlets_ model where the development is server-side and the process is slower and more complex.

Modyo is widget-based and tracks every change in a version control system, streamlining digital work, facilitating auditing and accelerating availability for your customers.

### Widget generator

The Modyo widget generator is a robust tool that simplifies frontend development, publishing, and auditing. With this tool, you can create personalized, high-quality digital experiences, quickly and easily.

With the widget generator, you can create any type of widget, including HTML, CSS and JavaScript components connected to APIs, and you can save the widgets in your library for reuse on other sites.

### Prefabricated Widgets for Financial Services

Modyo Banking provides pre-made financial widgets to accelerate the development of your _retail_ and _wealth management_ banking experiences. These widgets are designed to meet the specific requirements of financial institutions.

Modyo Banking requires a dedicated license.

### Liquid Markup

Modyo uses Liquid Markup to enrich the front and backend development language, to add more functionality to digital experiences.

### APIs

Modyo provides an open API that allows you to integrate Modyo with other systems and tools.

### Progressive Web Apps or Progressive Web Applications
Progressive Web Applications (PWAs) are the future of the Web, they improve user interaction with a site and give more prominence to the web browser as an execution platform.

With Modyo you can control the definitions of _manifest.json_ and the _Service Workers_ on each site, essential for implementing PWAs.

### Security, Governance, and Agility

In Modyo, all published code generates versions, allowing you to easily review changes. Agility is achieved with the activation of the Team Review, maintaining a balance between governance and agility.

## Glossary
Here are some key terms in Modyo and their definitions:

#### General

* [**CORS:**](/en/platform/core/security.html #access-control-cross-origin-resource-sharing-cors) Cross Origin Resource Sharing - Allows you to share resources in different domains.
* **Account:** Access point to all Modyo features.
* [**Team:**](/en/platform/core/roles.html#team) All users with access to the Modyo admin. They can be assigned roles and permissions.
* [**Integrations:**](/en/platform/core/integrations) Way to delegate or federate the process of initiating authentication of users or team members.
* [**Password Policy:**](/en/platform/core/security.html#password-policy) Allows you to define rules for creating or modifying passwords.
* [**Team review:**](en/platform/core/key-concepts.html#team-review) Review flow for versioned items. Approval can be requested from multiple team members.
* [**Site:**](/en/platform/channels/sites.html) Tool for creating digital channels within Modyo. Site operation encompasses the development, design and flow of navigation.
* [**Editable version:**](/en/platform/core/key-concepts.html#editable) The version that you can modify and preview of the versioned elements.
* [**Global variables:**](en/platform/core/key-concepts.html#global-variables) Elements that you can define globally and reuse in different places.
* [**Scheduled version:**](en/platform/core/key-concepts.html#scheduled) Version that will be published at a certain date and time.
* [**Published version:**](en/platform/core/key-concepts.html#published) Visible or productive version of the versioned elements. This version cannot be modified.
* [**Backup version:**](en/platform/core/key-concepts.html#backups) Previously released versions.
* [**Webhook:**](/en/platform/core/webhooks.html) Automatically sends information to an external system when a certain event occurs.


#### Modyo Content

* [**Assets:**](/en/platform/content/asset-manager.html#about-the-interface) Files uploaded to the platform for use in content and sites.
* [**Field:**](/en/platform/content/types.html#fields) Basic unit for forming content types.
* [**Categories:**](en/platform/content/entries.html#categories) Hierarchical structure to organize the content of your spaces.
* [**Entry:**](/en/platform/content/entries.html) Set of values associated with fields defined in the content type.
* [**Space:**](/en/platform/content/spaces.html) Resource repository where team members define types of content, create and publish entries.
* **Tags:** Labels for sorting and filtering posts.
* [**Content type:**](/en/platform/content/types.html) Structure with fields that allows you to define different contents.


#### Modyo Channels

* [**Domains:**](/en/platform/channels/sites.html#domains) You can modify the URL of your site, as can the security certificates of your site.
* [**Meta tags: **] (/es/platform/channels/pages.html #meta -tags) Customize your meta tags to improve search engine indexing.
* [**Navigation: **] (/es/platform/channels/navigation.html) Allows you to modify the main menu of your site through a simple interface.
* [**Page: **] (/es/platform/channels/pages.html) They allow you to create a structure for your site. You can add unstructured content and customize the routes where the content is displayed.
* [**PWA: **] (/es/platform/channels/sites.html #pwa) Configure your site's _serviceworker_ and manifest for offline use.
* [**SEO: **] (/es/platform/channels/sites.html #seo) Configure how your site looks before indexing robots.
* [**Templates: **] (/es/platform/channels/templates.html) They are the foundation of your site and define the basic structure of the pages.
* [**Widget: **] (/es/platform/channels/widgets.html) Reusable functionality package with HTML, JavaScript and CSS that you can use on different pages.

#### Modyo Customers

* [**Campaigns: **] (/es/platform/customers/messaging.html #campanas) They define the communication channel with the user. They allow you to reach your users through emails and notifications.
* [**Custom field:**](/en/platform/customers/realms.html#custom-fields) Allows you to add custom attributes to the user profile.
* [**Filters: **] (/es/platform/customers/segments.html #filtros) Unit that allows you to build segments.
* [**Form: **] (/es/platform/customers/forms.html) To capture data from your users on your sites.
* [**Messaging: **] (/es/platform/customers/messaging.html) Control the channels of direct communication with your users.
* [**Segment: **] (/es/platform/customers/segments.html) Allows you to add and group users using filter groups with different conditions.
* [**User: **] (/es/platform/customers/realms.html) Who accesses and registers on Modyo sites.
