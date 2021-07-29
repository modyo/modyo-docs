---
search: true
---

# Integration
DXP systems play a key role in any digital transformation strategy. Its ability to take control of the main channels of communication with customers and collaborators require a robust integration strategy towards the rest of the ecosystem of business applications that are part of each strategy.

The Modyo Platform, through a decentralized integration scheme based on APIs and microservices, allows to adapt to different challenges. Unlike monolithic platforms that sought to have an internal response to each issue, the [Next Generation DXPs](https://www.modyo.com/platform) privilege integration with specialized platforms rather than offering full functionality. This translates into lighter platforms and adaptable to every need, allowing organizations to choose within the ecosystem the best solutions that adapt to their specific realities, thereby lowering total operating and infrastructure costs, by scaling only the resources that require it.

## Platform Integrations
Platform integrations correspond to all those integrations that are established by Modyo directly and without requiring large developments. These integrations respond to different purposes depending on the context in which they are used, but mostly relate to the user's profile and communication with users.

The most relevant platform integrations are reviewed below.

### Integration with CRMs and CDPs
Customer Relationship Management (CRM) and Customer Data Platform (CDP) systems manage customer data interconnected to different business applications to provide a unified view of customer behavior. 

Modyo Customers is the application within Modyo where the actions and business events of authenticated users converge, carried out on the different digital channels managed by the platform. Modyo Customers allows you to segment audiences, using both user behavior information and data in their profiles. It is precisely the latter that can be enriched by integrating systems such as CRMs and CDPs. To perform this type of integration, we make use of the Modyo Customers administrative API, which allows you to obtain the information of users in Modyo as well as update the attributes of these users if required. In addition, this API allows the execution of administrative tasks such as creating new users or disabling them on the platform.

The Modyo Administrative API requires a validly issued authentication token on behalf of an administrator user, who must have sufficient permissions to perform the tasks you want to automate.

The Modyo Customers API can also be used to keep records up to date with other business solutions, such as SalesForce Flows or Microsoft Dynamic Power, triggering flows in both directions.


### Integration with SSO
Single Sign On (SSO) systems are a key part of Modyo's DXP integration strategy into business systems.

Currently, the platform supports integration into SSO systems in two ways:
- Integration of administrators user accounts
- Integration of end-user accounts

For integration with management accounts, Modyo has native support for LDAP, SAML, OAuth 2.0, OIDC, and Google Workspace.

For integration with user accounts, Modyo has native support for OAuth 2.0, OIDC and Google Workspace.


### Integration with messaging
Integration with messaging systems allows the sending of notification messages and marketing campaigns to end users who are enabled within a Realm in Modyo Customers.

We currently support email messaging channels, SMS, Whatsapp for Business, Web Push, Push, and notifications in the Web application.

Integration microservices can also send notifications to users and track users using the Modyo Customers messaging API.


### Integration using WebHooks
WebHooks integration enables the platform, in reaction to certain events, to send a message to a user-defined endpoint in a JSON format using the HTTP protocol and a simple POST containing information relevant to the event that has just occurred.

This type of integration is only available for events occurring within the Modyo Admin Console. Business events are excluded.


### Integration with payment methods
Integration with payment methods is activated in Modyo as a mechanism that allows users to collect amounts of money integrated into a previously defined flow, using the Modyo Commerce API. Modyo has native features of integration into different means of payment commonly used in Latin America, among which we can mention:
- WebPay
- Bancard
- Khipu
- PayU
- PayMe
- TigoMoney

For all these payment methods, Modyo provides an interface in which you can review the status of transactions associated with the profile of a user authenticated to the platform. In addition, payment and purchase information persists on the platform to be used as a segmentation criterion.

Modyo is in a continuous process of including new means of payment to incorporate into the platform.

### What integrations do we plan for the future?
The following integrations are today part of our roadmap in the product and will improve the posture of the product against integration with the most popular platforms in use by our customers.

#### Enterprise Chat Platforms
The platform's integration with chat for notifications (Slack and Microsoft Teams) will be implemented over the course of 2021 as part of the improvements to the management experience using the web console. The integration will be done through a Modyo bot that will be available for both platforms and that will allow to notify, in specific channels, the different events that occur within Modyo and require the attention of a particular user (comments, review requirements, content publication, etc).

#### SalesForce AppExchange
While the Modyo Customers administrative API allows you to perform integrations with different CRMs and CDPs today, we believe that for SalesForce we need to do something else. That's why we have plans to be able to make a deeper integration that makes it easier to keep Modyo and Salesforce records synchronized.

#### Content Indexers
We currently have in mind to generate a direct integration with Algolia (https://www.algolia.com), which is presented as a business content search solution that allows marketers to boost results or A/B testing in searches. Algolia has indexing solutions not only to content present on regular pages, but also content that comes from an API.

#### Auto Provisioning of Administrators Users
Through the support of the SCIM protocol we seek to adopt a standard protocol that allows to perform the activities of automatic provision of administrators users in conjunction with SAML. In this way, when you register or unsubscribe a contributor in the central registries of our customers, they will be automatically incorporated or removed in Modyo.




## Web Sites and Applications

Web sites and applications built on Modyo can be natively integrated into a large number of systems using mainly HTML and Javascript standards, using the Modyo Channels template editor, which provides complete access and control of the source code of the sites managed on it.

The following integrations correspond to the most commonly requested integrations.

### Analytics Tools
Web analytics tools integrated into each of the pages of a site by including scripts within the decorators or layouts. In this category we can mention tools such as:
- Google Analytics
- Google Tag Manager
- SalesForce Evergage
- Heap
- Segment
- Snowplow

By using Liquid specific tags, Modyo Channels is able to interpolate context information to tracking events, such as user name, email, unique identifiers, segments to which the user belongs, among many others.

### Marketing Tools
Digital marketing tools that allow to alter the user experience according to previously established rules, type A/B testing or similar. In this category we can mention tools such as:
- Google Optimize
- SalesForce Marketing Cloud

By accessing the source code of the pages and widgets that make up the Web site or application, Modyo Channels allows the inclusion of special brands in each HTML component that make the use of this type of digital marketing tools more efficient.

### Chat Tools
Chat tools are commonly used in support or conversational marketing actions. The integration of these components is done using a Javascript code which installs the communication agent on the website, typically in an area of the screen that does not interrupt the display of content. In this category we can mention tools such as:
- Intercom
- Drift
- Zendesk Chat 
- SalesForce Service Cloud

### Product Management Tools
Product management tools are implemented using Javascript codes that are installed in different locations on the page depending on the purpose. This allows you to integrate features such as product tours, NPS capture, feedback, and capture metrics oriented to authenticated users. In this category we can mention tools such as:
- Pendo
- Qualtrics
- Hotjar

### Safety and Performance Tools
Security and performance tools are implemented in a very similar way to analytics and product management, but unlike these, the focus is focused on capturing experience in terms of performance, detection of Javascript errors in the browser, and compliance with service levels. In this category we can mention tools such as:
- NewRelic Browser
- Dynatrace RUM
- Elastic Observability

### Integration with public APIs
Integrations with external public APIs are done directly from the Modyo Channels frontend, using Widgets developed in Javascript that have the functionality of invoking content and executing actions using the HTTP protocol.

Integrating APIs from Widgets requires endpoints that are publicly exposed to the Internet (or on Intranet in case of private deployments). Depending on the security policies configured on the endpoint, a domain validation by CORS may be required.

### Integration with private APIs
Private APIs behave similarly to public APIs, with the difference that they require authentication. This authentication can be initiated directly by the frontend from a Modyo Channels Widget or can be based on a security token previously negotiated by Modyo Customers and some SSO integration.

Modyo does not recommend direct integration from the frontend as it makes it difficult to manage authentication tokens securely. Instead, the flow initiated by Modyo Customers ensures proper management of credentials and establishes query mechanisms so that the widget that requires it can obtain a valid token whenever it requires it.

## Modyo Connect
Modyo Connect is a managed API Gateway and microservices management service offered by Modyo that provides access to all the tools required for the lifecycle management of advanced integration components development.

Integration components and proper management of an API Gateway are fundamental elements within the Modyo reference architecture and are those that enable the extension of the platform's functionality in a decentralized way by privileging a Widgets and microservices architecture over a monolithic one in which integrations converge into a single point of failure.

The development and operation of the integration components can be carried out on multiple technologies, different from those expressed in this section. The use of Modyo Connect is only recommended in cases where the customer implementing Modyo does not have the technologies required to securely expose their business services as APIs available from the Internet.

Integration components are developed as microservices in the Spring Boot framework, which has a wide variety of integration mechanisms and libraries, among which we can mention:
- SOAP and REST Web Services
- Databases
- Messaging
- JMS/MQ
- AWS S3
- FTP

In addition, the Spring Boot framework allows you to work with specialized libraries such as Spring Integration or Apache Camel, which implement advanced transformations and integration patterns.

The Modyo Professional Services Area has experts with extensive experience in developing integrations to different types of systems, which can be hired for full implementation or accompaniment in complex integration projects related to Modyo Connect.

Integration components developed following this reference architecture, will be able to establish integrations to a large number of system types, such as those mentioned below.

### Business Systems Integration
Integration to business systems owned by the client that implements the platform, usually present within their own infrastructure accessed via VPN or similar. In this category we can mention systems such as:
- Core banking or insurance systems (for example: Mambu)
- Legacy or proprietary systems
- Databases with information or procedures
- Integrated Service Bus
- SOAP or REST Web Services
- ERPs
- CRMs or CDPs

### Integration to Validation Systems
Integration to background validation (KyC) or identity systems, typically used in digital onboarding scenarios, including:
- Equifax
- AU10tix
- Trulioo
- Truora
- Mati
- Sinacofi

### Integration to Electronic Signature
Integration to simple or advanced electronic signature systems, among which we can mention:
- Docusign
- Accept

### Integration to Document Management
Integration into enterprise document management systems and process automation within which we can mention:
- Docuware
- Laserfiche

### Advanced Messaging Integration
Integration with distributed messaging platforms for asynchronous process execution:
- ActiveMQ
- JMS
- RabbitMQ
- AWS SNS
- AWS SQS

### Integration with eCommerce
Integration with eCommerce platforms in headless format, but requiring connection to local payment means and user authentication provided by the platform, which we can mention:
- CommerceTools
- Magento Headless
- Shopify Plus
