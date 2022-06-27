---
search: true
---

# Integrations
DXP systems play a key role in any digital transformation strategy. Its ability to take control of the main channels of communication with customers and collaborators require a robust integration strategy towards the rest of the ecosystem of business applications that are part of each strategy.

The Modyo Platform, through a decentralized integration scheme based on APIs and microservices, allows you to adapt to different challenges. Unlike monolithic platforms that sought to have an in-house answer for every problem, the [next-generation DXP](https://www.modyo.com/platform) provides integration with specialized platforms rather than offering full functionality. This translates into lighter and more adaptable platforms to suit every need, allowing organizations to choose within the ecosystem the best solutions that adapt to their specific realities. All of this results in lowering total operating and infrastructure costs by scaling only the resources that require it.

## Platform Integrations
Platform integrations correspond to all those integrations that are established by Modyo directly and without requiring major developments. These integrations serve different purposes depending on the context in which they are used, but most of them relate to the profile of users and the communication with them.

The most relevant platform integrations are reviewed below.

### Integration with CRMs and CDPs
Customer Relationship Management (CRM) and Customer Data Platform (CDP) systems manage customer data interconnected to different business applications to provide a unified view of customer behavior. 

[Modyo Customers](https://docs.modyo.com/en/platform/customers/) is the application within Modyo where the actions and business events of authenticated users, carried out on the different digital channels managed by the platform, converge. Modyo Customers allows you to segment audiences, using both information about user behavior and the data in their profiles. It is precisely the latter that can be enriched by integrating systems such as CRMs and CDPs. To carry out this type of integration, the Modyo Customers administrative API is used, which allows users to obtain information in Modyo as well as update their attributes if required. In addition, this API allows the execution of administrative tasks such as creating new users or deactivating them on the platform.

The Modyo Administrative API requires a valid authentication token on behalf of an administrator user, who must have sufficient permissions to perform the tasks you want to automate.

The Modyo Customers API can also be used to keep records up to date with other business solutions, such as SalesForce Flows or Microsoft Dynamic Power, triggering flows in both directions.


### Integration with SSO
Single Sign-On (SSO) systems are a key part of Modyo's DXP integration strategy into business systems.

Currently, the platform supports integration into SSO systems in two ways:
- Integration of administrators user accounts
- Integration of end-user accounts

In the case of integration with management accounts, Modyo has native support for:
* LDAP
* SAML
* OAuth 2.0
* OIDC
* Google Workspace.

In the case of user account integration, Modyo has native support for:
* OAuth 2.0
* OIDC
* Google Workspace.


### Integration with messaging
Integration with messaging systems allows the sending of notification messages and marketing campaigns to end users who are enabled within a Realm in Modyo Customers.

We currently support the following messaging channels:
* Email
* SMS 
* Whatsapp for Business
* Web Push
* Push
* Web application notifications.

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
Digital marketing tools that allow to alter the user experience according to previously established rules, type A/B testing, or similar. In this category we can mention tools such as:
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
Security and performance tools are implemented much like analytics and product management tools, but unlike these, the focus is on capturing experience in terms of performance, detecting Javascript errors in the browser, and service level compliance. In this category we can mention tools such as:
- NewRelic Browser
- Dynatrace RUM
- Elastic Observability

### Integration with public APIs
Integrations with external public APIs are done directly from the Modyo Channels frontend, using Widgets developed in Javascript that have the functionality of invoking content and executing actions using the HTTP protocol.

Integrating APIs from Widgets requires endpoints that are publicly exposed to the Internet (or on Intranet in case of private deployments). Depending on the security policies configured on the endpoint, a domain validation by CORS may be required.

### Integration with private APIs
Private APIs behave similarly to public APIs, with the difference that they require authentication. This authentication can be initiated directly by the frontend from a Modyo Channels Widget or can be based on a security token previously negotiated by Modyo Customers and some SSO integration.

Modyo does not recommend direct integration from the frontend as it makes it difficult to manage authentication tokens securely. Instead, the flow initiated by Modyo Customers ensures proper management of credentials and establishes query mechanisms so that the widget that requires it can obtain a valid token whenever it requires it.

