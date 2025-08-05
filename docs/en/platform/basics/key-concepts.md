---
search: true
---

# Key Concepts of Modyo

In this section, you will find a brief explanation of the key concepts related to the Modyo Platform.

### Multi-Site Architecture

Modyo implements an easy-to-manage Multi-Site architecture. From a single account, you can create multiple public or private sites.

### Contextual Customer Interaction

Modyo offers various authentication mechanisms, such as OpenID Connect, OAuth2, and Google, to easily authenticate your customers. Customers can interact across different sites and contexts, maintaining a central profile for efficient administration.

### CMS and Headless CMS

Modyo Content allows you to create and publish content, with the flexibility to add fields for custom structures.

Modyo Channels works with HTML templates and reusable frontend components called widgets.

All structured content that is published generates a JSON file that you can use to feed another site or application through the API.

### Integration Platform

Modyo is designed to facilitate the creation of digital solutions integrated with companies' core systems. We focus on making it easy to develop widgets and connect with APIs.

The widget generator helps backend and frontend developers work together to create digital experiences connected to APIs, and the governance model allows them to quickly preview and publish their work.

### Widgets

Most companies in the market work with an older portlets model where development is server-side, making the process slower and more complex.

Modyo is widget-based and tracks every change in a version control system, streamlining digital work, facilitating auditing, and accelerating availability for your customers.

### Widget Generator

The Modyo widget generator is a robust tool that simplifies frontend development, publishing, and auditing. With this tool, you can create personalized, high-quality digital experiences quickly and easily.

With the widget generator, you can create any type of widget, including HTML, CSS, and JavaScript components connected to APIs, and you can save the widgets in your library for reuse on other sites.

### Prefabricated Widgets for Financial Services

Modyo Banking provides pre-made financial widgets to accelerate the development of your retail and wealth management banking experiences. These widgets are designed to meet the specific requirements of financial institutions.

Modyo Banking requires a dedicated license.

### Liquid Markup

Modyo uses Liquid Markup to enrich the frontend and backend development language, adding more functionality to digital experiences.

### APIs

Modyo provides an open API that allows you to integrate Modyo with other systems and tools.

### Progressive Web Apps or Progressive Web Applications

Progressive Web Applications (PWAs) are the future of the Web. They improve user interaction with a site and give more prominence to the web browser as an execution platform.

With Modyo, you can control the definitions of manifest.json and the Service Workers on each site, which are essential for implementing PWAs.

### Security, Governance, and Agility

In Modyo, all published code generates versions, allowing you to easily review changes. Agility is achieved with the activation of Team Review, maintaining a balance between governance and agility.

## Glossary
Here are some key terms in Modyo and their definitions:

#### General

* [**CORS**:](/en/platform/core/security.html#access-control-cross-origin-resource-sharing-cors) Cross-Origin Resource Sharing - Allows you to share resources across different domains.
* **Account**: Access point to all Modyo features.
* [**Team**:](/en/platform/core/roles.html#team) All users with access to the Modyo admin. They can be assigned roles and permissions.
* [**Integrations**:](/en/platform/core/integrations) A way to delegate or federate the process of initiating authentication for users or team members.
* [**Password Policy**:](/en/platform/core/security.html#password-policy) Allows you to define rules for creating or modifying passwords.
* [**Team review**:](en/platform/core/key-concepts.html#team-review) Review flow for versioned items. Approval can be requested from multiple team members.
* [**Site**:](/en/platform/channels/sites.html) A tool for creating digital channels within Modyo. Site operation encompasses the development, design, and flow of navigation.
* [**Editable version**:](/en/platform/core/key-concepts.html#editable) The version that you can modify and preview of the versioned elements.
* [**Global variables**:](en/platform/core/key-concepts.html#global-variables) Elements that you can define globally and reuse in different places.
* [**Scheduled version**:](en/platform/core/key-concepts.html#scheduled) A version that will be published at a certain date and time.
* [**Published version**:](en/platform/core/key-concepts.html#published) The visible or productive version of the versioned elements. This version cannot be modified.
* [**Backup version**:](en/platform/core/key-concepts.html#backups) Previously released versions.
* [**Webhook**:](/en/platform/core/webhooks.html) Automatically sends information to an external system when a certain event occurs.


#### Modyo Content

* [**Assets**:](/en/platform/content/asset-manager.html#about-the-interface) Files uploaded to the platform for use in content and sites.
* [**Field**:](/en/platform/content/types.html#fields) Basic unit for forming content types.
* [**Categories**:](en/platform/content/entries.html#categories) Hierarchical structure to organize the content of your spaces.
* [**Entry**:](/en/platform/content/entries.html) A set of values associated with fields defined in the content type.
* [**Space**:](/en/platform/content/spaces.html) A resource repository where team members define types of content, create, and publish entries.
* **Tags**: Labels for sorting and filtering posts.
* [**Content type**:](/en/platform/content/types.html) A structure with fields that allows you to define different contents.


#### Modyo Channels

* [**Domains**:](/en/platform/channels/sites.html#domains) You can modify the URL of your site, as well as its security certificates.
* [**Meta tags**:](/en/platform/channels/pages.html#meta-tags) Customize your meta tags to improve search engine indexing.
* [**Navigation**:](/en/platform/channels/navigation.html) Allows you to modify the main menu of your site through a simple interface.
* [**Page**:](/en/platform/channels/pages.html) They allow you to create a structure for your site. You can add unstructured content and customize the routes where the content is displayed.
* [**PWA**:](/en/platform/channels/sites.html#pwa) Configure your site's _serviceworker_ and manifest for offline use.
* [**SEO**:](/en/platform/channels/sites.html#seo) Configure how your site appears to indexing robots.
* [**Templates**:](/en/platform/channels/templates.html) They are the foundation of your site and define the basic structure of the pages.
* [**Widget**:](/en/platform/channels/widgets.html) A reusable functionality package with HTML, JavaScript, and CSS that you can use on different pages.

#### Modyo Customers

* [**Campaigns**:](/en/platform/customers/messaging.html#campaigns) They define the communication channel with the user. They allow you to reach your users through emails and notifications.
* [**Custom field**:](/en/platform/customers/settings.html#custom-fields) Allows you to add custom attributes to the user profile.
* [**Filters**:](/en/platform/customers/segments.html#filters) A unit that allows you to build segments.
* [**Form**:](/en/platform/customers/forms.html) To capture data from your users on your sites.
* [**Messaging**:](/en/platform/customers/messaging.html) Control the channels of direct communication with your users.
* [**Segment**:](/en/platform/customers/segments.html) Allows you to add and group users using filter groups with different conditions.
* [**User**:](/en/platform/customers/users.html) Who accesses and registers on Modyo sites.