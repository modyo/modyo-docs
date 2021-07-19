---
search: true
---

# Key concepts

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
* [**Team**](/en/platform/core/roles.html#team): All users who have access to the Modyo admin and can be assigned roles and permissions.
* [**Integrations**](/en/platform/core/integrations/): This is where you can delegate or federate the authentication process of users or team members.
* [**Password Policy**](/en/platform/core/security.html#password-policy): Allows you to define rules that team members must follow when creating or modifying their passwords.
* [**Team Review**](/en/platform/core/key-concepts.html#team-review): Revision flow of versioned items in which you can request approval from multiple team members.
* [**Site**](/en/platform/channels/sites.html): This is the tool you can use to create digital channels within the platform. Site management includes development, design and navigation flow.
* [**Editable Version**](/en/platform/core/key-concepts.html#editable): It is the version that you can modify and use to preview versioned elements.
* [**Global Variables**](/en/platform/core/key-concepts.html#global-variables): These are elements that you can define globally and reuse in different sites.
* [**Scheduled Version**](/en/platform/core/key-concepts.html#scheduled): It is the version that is ready to be published at a predetermined date and time.
* [**Published version**](/en/platform/core/key-concepts.html#published): It is the visible or productive version of the elements. This version can not be modified.
* [**Backup version**](/en/platform/core/key-concepts.html#backups): It is a version that was previously published.
* [**Webhook**](/en/platform/core/integrations/#webhooks): Sends information automatically to an external system when a certain event occurs.


#### Modyo Content

* [**Assets**](/en/platform/content/asset-manager.html#about-the-interface): These are the various files that are uploaded to the platform to be used in content and sites.
* [**Fields**](/en/platform/content/types.html#fields): These are the atomic units with which the different types of content are formed.
* [**Categories**](/en/platform/content/entries.html#categories): They are a tree structure that allows you to order the content of your spaces.
* [**Entry**](/en/platform/content/entries.html): It is a set of values associated with the different fields defined in the content type.
* [**Space**](/en/platform/content/spaces.html): Resource repository where team members can define different content structures (types), create and publish entries.
* **Tags**: Allow you to sort and filter the entries freely and without restrictions.
* [**Content type**](/en/platform/content/types.html): It is a structure with fields that allows you to define the different types of content of your business.


#### Modyo Channels

* [**Domains**](/en/platform/channels/sites.html#domains): Allows you to change the URL and security certificates of your site.
* [**Meta tags**](/en/platform/channels/pages.html#meta-tags): Allows you to customize the meta tags for your pages and improve the way search engines index your pages.
* [**Navigation**](/en/platform/channels/navigation.html): Allows you to modify the main menu of your site with an easy to use interface.
* [**Page**](/en/platform/channels/pages.html): Pages are what allow you to create a structure for your site, where you can add unstructured content and customize the paths where that content is displayed.
* [**PWA**](/en/platform/channels/sites.html#pwa): Allows you to configure the _serviceworker_ and manifest of your site to be able to use it offline.
* [**SEO**](/en/platform/channels/sites.html#seo): Allows you to configure the way indexing robots see your site.
* [**Templates**](/en/platform/channels/templates.html): They are the base of your site and define the basic structure of your site's pages.
* [**Content views**](/en/platform/channels/templates.html#content-views): This is where your site and the content entries meet, allowing you to define a base page so that all the entries of the same type are seen under the same view.
* [**Widget**](/en/platform/channels/widgets.html): A reusable feature package that contains HTML, JavaScript and CSS that can be used in different pages.

#### Modyo Customers

* [**Campaigns**](/en/platform/customers/messaging.html#campaigns): A defined communication channel with your users which allows you to reach them through emails and notifications.
* [**Custom field**](/en/platform/customers/users.html#custom-fields): Allows you to add personalized attributes to the users' profile.
* [**Filters**](/en/platform/customers/targets.html#filters): Basic units that allow you to build segments.
* [**Form**](/en/platform/customers/forms.html): Allows you to capture data from your users on your sites.
* [**Messaging**](/en/platform/customers/messaging.html): Allows you to control the direct communication channels with your users.
* [**Segment**](/en/platform/customers/segments.html): Allows you to add and group your users through filter groups with different conditions.
* [**User**](/en/platform/customers/realms.html): This is any person who accesses and registers on sites built with Modyo.
