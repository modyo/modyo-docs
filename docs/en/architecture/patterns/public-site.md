---
search: true
---

# Public Site
By public site we mean all of them that are available on the Internet to anyone. They are sites designed and created with the intention of sharing information, providing services or interacting with the general public, offering a relatively similar experience for all their visitors.

Public sites can serve a variety of purposes. Some common examples could be:
- Corporate or informational sites
- Lead capture sites
- Customer Origination Sites
- Marketing and promotion sites
- News sites and blogs

<!-- Hack to avoid this title to be displayed in the TOC element -->
 <h3> <a href="#how-to-implement-public-sites-with-modyo" class="header-anchor">#</a> How to implement public sites with Modyo?</h3> 

Modyo offers all the tools necessary to create and maintain public sites in an agile, safe and efficient way. Through the combination of their content applications and channels, you will be able to access all the functionality required at each stage of the site's life cycle.

At the level of architectural pattern, the public site is one of the most common and easiest to implement on Modyo, but not without multiple details that we must consider to ensure its success, among which we can mention:

[[toc]]

Depending on the desired result, these requirements may impact implementation decisions in different ways. In this guide, we will explain the most relevant concepts of each of them.

### Structure and modularity
The first decisions when implementing a site on Modyo should refer to structure and modularity, since the rest of the requirements depend on them. A site with a good structure will always be easier to maintain and to evolve. Next, the most important structure and modularity criteria are explored.

#### Multiple Sites and Organizations
Modyo has a multi-site and multi-organization architecture, which can be used to segregate administration into different teams of site administrators that are or are not related to each other.

They are usually separated by independent subsidiary or subsidiary organizations that do not share any kind of administration between their sites, creating implementation silos that are not related in any logical way, but that do share the physical infrastructure of the platform.

:::warning Organizations and licensing
When considering the use of organizations, the limits allowed by the subscribed license must be taken into account. The maximum limit of organizations can always be extended, after commercial validation.
:::


#### Using Pages and Layouts
[layouts](/en/platform/channels/templates.md#layouts) are an excellent way to differentiate contexts within a site. A layout can be shared by multiple [pages](/en/platform/channels/pages) and each page can have only one layout. Within the layouts, you can define reusable elements between the different pages, such as Headers, Footers, Meta Tags, etc. 

The layouts define the overall experience of the site and ensure that the different pages are viewed consistently, but there are cases in which it will be necessary to have a different layout for a page or group of pages, for example a landing page of a special promotion in which we don't want to distract the visitor with the navigation of the site.

The pages, on the other hand, can be grouped into hierarchies, which will ensure an organized structure for the different elements of the site.


#### Using Templates and Snippets
[templates](/en/platform/channels/templates) correspond to Liquid documents that are dynamically rendered within the platform. These templates can correspond to HTML pages, layouts, CSS style sheets, or Javascript files.
On the other hand, snippets are a very convenient way to organize source codes using [snippets](/es/platform/channels/templates.md #snippets), which can be referenced from different Liquid templates on the same site. 

Snippets make it possible to modularize and reuse functions, allowing complex functionalities to be broken down into simpler ones. Snippets are rendered dynamically when the page is rendered.

:::warning Recursion and performance
A common mistake when using snippets is to recursively invoke circular references, that is, to call themselves. In this case, the platform will cut off the execution of the fragment rendering to avoid saturating system resources. Another common problem could be the excess of snippets within a site, since use involves a bit of additional processing that, when added together, could slow down the page load.
:::

#### Using Widgets
[widgets] (/en/platform/channels/widgets) are one of the most organized ways within Modyo to modularize business functionality. Widgets allow you to package HTML, CSS and Javascript code, which are modified and deployed together, without affecting the rest of the site.

The widget builder is a tool within the Modyo administration console that, like the template editor, allows you to take control of the entire development cycle of the widget, including its preview, versioning and deployment.

Widgets, together with the use of snippet and its builder, are an excellent way to work with low or medium complexity functionality, in which the use of Javascript is not intensive. In the case of public places, they are the most recommended way to work. In more complex scenarios, the use of [micro frontends](/en/architecture/patterns/micro-frontend) is recommended.

#### Using Micro Frontends
[micro frontends](/en/architecture/patterns/micro-frontend) are a special type of widget that supports a more sophisticated workflow, in which code is developed from outside the platform and “pushed” to it by means of a command line agent called Modyo CLI. The micro frontends are built statically prior to their upload to Modo, which allows the use of advanced libraries and frameworks, in addition to allowing the incorporation of static code review flows for its quality and security.

:::warning about -Engineering
Using micro frontends within a public site could involve additional complexity, adding to the maintenance of continuous integration pipelines and devops processes. In general, this requires support from the IT areas within the organization, so this additional complexity must be considered justified.
:::

#### Using Javascript Frameworks
In general, using Javascript frameworks for implementing public sites is not recommended. This is due to the complexity inherent in the source code of each dependency, which can affect the following characteristics that every website is expected to have:
- Charging speed
- First-response rendering speed
- Ease of finding content “written” in HTML by different search engines
- Ease of caching content and structure in content distribution networks
- Accessibility tools access to understanding what's inside the page
- Easy to evolve the code in a simple way (without requiring the constant presence of developers with advanced knowledge)

Implementing public sites using advanced Javascript frameworks will generate additional costs when it comes to meeting these criteria.

On the other hand, when it comes to specific complex components within a public site, such as a simulator, a search engine for nearby branches, or a summary of financial indicators, the use of a framework could be very appropriate. In this case, the best implementation strategy will be using a micro frontend.

In general, for public sites, we recommend avoiding the intensive use of JavaScript and avoiding using frameworks such as ReactJS or Vue, and opting for static HTML, leveraging, if necessary, the use of Liquid.

Some reasons why we avoid using JavaScript frameworks on public sites are:
- **Performance:** every time a visitor loads a page, the browser must download and execute the JavaScript code in order to display and manipulate the elements of the page. Excessive use of JavaScript can slow down page loading, especially on devices with slow connections or limited resources.
- **Accessibility:** Some people may have difficulty accessing and using interactive JavaScript-based content. This can include people with visual disabilities who use screen readers, users with slow connections or older devices, or people who have JavaScript turned off for security reasons or personal preference.
- **Maintenance and compatibility:** Reducing JavaScript dependencies simplifies site maintenance. In addition, these solutions are often more compatible with different browsers and devices.
- **Security:** By limiting the use of JavaScript, the potential attack surface is reduced and the security of the site is improved.

The idea is to achieve a balanced combination of static and dynamic elements to provide an optimal experience for users. 

:::warning about -Engineering
As in the case of micro frontends, the use of Javascript frameworks within a public site could involve additional complexity, so we do not recommend using them in scenarios where the benefits are not fully justified.
:::


#### Web Components
[web components](/en/architecture/patterns/web-components) are a modularization technique based on HTML, CSS and JS standards. Currently, Web Components lack cross-browser support, but this is something that is improving year after year. In order to make a secure implementation of Web Components, it will be necessary to make use of a Javascript library that takes control of these incompatibilities. That is why in the case of public sites, the use of Web Components may not provide greater benefits than the problems it would potentially generate, also referring to the arguments of the previous sections.

As an alternative to using Web Components, public sites can benefit from lighter and more standard alternatives, such as the CSS [Bootstrap](https://getbootstrap.com) framework, which is natively incorporated into the Modyo platform.

### Content and source code governance
In every public site project, content governance and source code must be a central element to consider. The implementation must be in line with business expectations regarding how future site maintenance will be carried out, respecting change approval flows and the correct level of decoupling between the content and its implementation logic. Next, we will review the main functionalities of the platform that allow the correct governance of public sites.

#### Groups and permissions
Modyo allows the creation of multiple content spaces and sites with defined roles and permission groups specific to each user. This allows you to assign elevated permissions to the same user in a first site, with others reduced in a second.

Roles and groups are defined at the organization level, and can then be assigned in a particular way to each space and to each site. At Modyo, we recommend always ensuring that users have the minimum permissions required to perform their functions, thus preventing sites from being accidentally or intentionally modified unintended.

#### Multiple content spaces
The platform offers a hybrid content management environment, in which content managed within a space can be accessed headlessly through the API, benefiting from the maximum level of decoupling, or through the use of content pages, a special type of page that is automatically integrated with the configured space and is available within each site.

:::tip Traditional CMS experience 
By using content spaces in conjunction with content pages, a user experience very similar to that of a traditional CMS is achieved, in which each content is linked to a representation. In addition to this, in Modyo, the same content can be displayed on more than one page, in different ways, allowing it to be previewed on the page chosen by the editor user.
:::

#### Using Team Review
The [team review] (/en/platform/core/key-concepts.md #revision -in-team) or team review is a feature of the Modyo platform that allows you to configure in a simple and flexible way who will be the users who will have to review something prior to its publication. Users of the review team will be able to preview the change or content at any time and make comments to correct things that don't seem to them. From the configuration of the content spaces and the sites, you can access the team review menu.

The use of team review is highly recommended in scenarios of public sites where you want to maintain the maximum possible agility in publishing, but with minimal approval controls to make simple revisions.

#### Development environments
Normally, within a public site, the most common changes will be changes in content such as news, promotions, rate information, branch locations, or advertisements located on the main pages. These changes, by their nature, will be frequent and small in size, reserving the most complex changes when it is necessary to make design adjustments, which will be less frequent. That's why for most changes, a well-configured change approval flow will be more than enough to control the site, reserving the use of more complex techniques for those that are more structural. 

To work with previous environments separate from the normal flow of changes to production, Modyo offers several alternatives. The most direct, and very appropriate when it comes to testing more risky or experimental changes, is based on the use of physical environments of the pre-productive type, which are included by default in the business versions of the platform. This type of environment is not recommended for day-to-day work with public sites, due to the difficulties of keeping content synchronized between different infrastructures. 

Another way of working with previous, but virtualized environments within the same platform corresponds to the use of stages, as will be seen in the next section.

:::tip Testing new versions
Modyo recommends the use of physical environments for testing new versions of the platform, where the risk of generating compatibility will have a minor impact. 
:::

#### Using Stages
In the case of public sites, Modyo recommends managing the previous environments using the [stages](/en/platform/channels/sites.md#stages) functionality, which allows virtualizing a pre-productive environment, within the same production deployment. With this technique, you avoid having to move changes and files between environments, which results in a complex task that can generate errors when publishing.

The use of stages allows obtaining separate and isolated environments to build, test and verify the operation of the site before being deployed in a production environment, avoiding errors or failures that directly affect end users. In the case of public sites, the following stages can be defined, for example:
- **Develop:** where the development and integration of changes take place
- **Certification:** where the tests are carried out, prior to the production
- **Main:** where the production site resides

The stages will be able to define certain configurations independently, such as site variables, which will allow some behaviors to be altered between one environment and another, for example the URL of an API that displays information on the site. When stages are used in conjunction with content spaces, and there is some degree of coupling between the two, the recommendation is to clone the space and make changes to the copy. Then, when the site is promoted to production, apply the same changes to the original content space.

#### Using Design Systems
Modyo has different ways of implementing [design systems](/en/architecture/patterns/design-system), which vary in complexity depending on the scenario in which they are to be applied.

In the case of a public site, the design system can be implemented without any problem using its simplest forms, such as libraries or CSS frameworks that incorporate consistent rules for all the elements that compose it. Sites created within Modyo use [Bootstrap](https://getbootstrap.com) as the default CSS framework, on which customizations can be made to all the variables enabled for this purpose.


### Accessibility
Within a public site, [accessibility](/en/architecture/patterns/accessibility) is considered an important attribute to keep in mind in order to offer the best possible experience to people who require special help.

To implement an accessible public site with Modyo, the first step is to take advantage of the [native accessibility capabilities] (https://getbootstrap.com/docs/5.2/getting-started/accessibility) of the [Bootstrap] toolkit (https://getbootstrap.com), in which controls and standards are defined for many of the basic elements that must be kept in mind. A second step could be to identify the objective of accessibility, to what extent you want to include access facilities, and based on that, continue implementing aids that could be changing colors to greater contrast, sizes, simplified versions of the content, among others.

Another element to consider is the use of Liquid tags for embedding elements from the Modyo Media Library. With this, we ensure that each image embedded in the site has its alternative texts and descriptions correctly defined, in addition to ensuring that they can be maintained in a centralized way.


### Internationalization
[internationalization](/en/architecture/patterns/internationalization) within a public site is a requirement for which the platform today does not offer a particular solution. Although the contents can be defined by indicating a specific language, when configuring a site, they only support one language. That is why to implement a second or third language, the only option supported today is to clone the site and modify it to adapt to the desired language. 

It is important to mention that when implementing languages with site cloning, the contents of the spaces are not being duplicated, since they do have support for multiple languages. On the other hand, it is also important to mention that any Javascript or dynamic technique to alter the language of a site without following our recommendation could impact many of the attributes mentioned within this guide, such as accessibility or indexing.

:::tip Modyo 10
The next version of Modyo will contain improved internationalization support, which will allow working with multiple languages on the same site, leaving the option that it can change dynamically without the need to duplicate work.
:::


### Search
Within a public site, searching for content is an important element to consider. To this end, the platform has an internal search engine, which indexes the content present on the site and provides a simple interface to deliver the results. The platform's search engine uses internal criteria to determine the relevance of a result, based mainly on common indexing practices (titles over descriptions, frequency, keywords, etc.).

If more advanced search functionality is required, external indexing solutions can be implemented.

#### Implementing external search
Within the market, there are several alternatives for implementing search within a site. One of the most popular is [Algolia](https://www.algolia.com). Algolia is a complete indexing and search solution, which allows you to activate advanced features such as relevance criteria, A/B testing, AI functionalities, real-time search, among many others.

The integration between Algolia and Modyo can be done in different ways, but in the case of public sites, an indexing crawler is sufficient, similar to how Google indexes information from the sites you visit.

Another alternative to consider could be [ElasticSerch](https://www.elastic.co/web-crawler), which has a specific indexing and search product on public sites.

:::tip Using external indexers
Modyo recommends the use of external indexers only in cases where their incorporation can be justified, since these tools generate additional costs that can be high depending on the volume of searches carried out in them.
:::


#### Search Engine Optimization (SEO)
Another important topic when considering the search and indexing of content is public search engines, such as [Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide). These engines are key to the implementation of a public site because they allow obtaining organic traffic derived from the searches that users do on them. By applying structured techniques, it is possible to access the first pages of results, as long as the engine considers that the information present on the site for that search term is relevant.

Modyo has different enablers that allow the incorporation of structural elements that facilitate indexing by these engines. Among the most used, we can mention:
- Using dynamic meta tags on content pages
- Use of general meta tags for the site, with the option to modify them in specific cases
- Using [SSR](/en/architecture/patterns/ssr) to ensure that search engines find what they need quickly, directly in the HTML (without the need to build content based on external APIs and Javascript)
- Performance of public sites

:::tip Modyo Experts
Search engine optimization can be a very relevant topic for meeting business objectives, and at the same time quite complex to address. Modyo offers professional services with SEO experts who can help define and implement strategies to maximize results. If you want to receive more information, contact a Modyo sales or customer executive.
:::


### Analytics
Web analytics, from the point of view of marketing teams, is possibly the most important point to consider when implementing a public site, for the simple reason that it is the only way to measure that the rest of the site's attributes work and can be met with business objectives.

:::tip Integration
For the purpose of analytics on a public site, Modyo does not offer within its platform any type of own tool for taking public traffic metrics. This is because there are already established players in the industry, who also offer excellent forms of integration, such as [Google Analytics](https://marketingplatform.google.com).
:::

#### Marcaje
Markup for Google Analytics refers to the implementation of code on a website or application to collect data and tracking metrics that are then analyzed on the Google Analytics platform. This process involves embedding the tracking code provided by Google in web pages or in the application flow. Once the code is in place, Google Analytics starts collecting information about site traffic, user behavior, and other relevant data.

Markup for Google Analytics is essential for monitoring and evaluating the performance of the site or application. It allows site owners and administrators to understand how users interact with their content, which pages are most popular, how much time they spend on the site, traffic sources, conversions, and other important details. This data is valuable for making informed decisions about marketing strategies, site design, and user experience optimization.

To implement branding with Modyo, you must first define the business objectives you want to measure and then implement the code and tags within the templates of the sites. Tagging will capture the events that happen on the site, correlate them with other data and obtain valuable information about how users interact with it. 



### Performance
[performance](/en/architecture/resources/web-performance) is one of the most important requirements to consider when implementing a public site, not only for a good user experience, but also to improve search engine rankings and conversion rates within the site.

The performance of a website is affected by multiple factors, some of which are beyond the control of the implementing party, such as connectivity issues or problems with the visitor's device. Other factors will be the responsibility of the implementer, including those related to the complexity of rendering the page, which is mainly affected by Javascript running from the client side, the use of images that are not optimized in weight and dimensions, Web servers far from the user, among many others.

Modyo Cloud and Enterprise Cloud have unique features that allow implementing best development practices and promoting an excellent user experience. Among them we can mention the most relevant:
- Using global content distribution networks
- Dynamic image optimization
- Using modern image compression standards
- Using HTTP3 in conjunction with TLS 1.3
- Using optimized Internet routes between end users and the origin server
- [Server side rendering (SSR)](/en/architecture/patterns/ssr) with Liquid

:::tip Modyo Enterprise On Premise
In the case of Modyo Enterprise On Premise, similar features can be implemented with the configuration of providers similar to those used in the Cloud.
:::

### Privacy
Finally, among the most important requirements that every public site must consider, are those of privacy regarding user data. The care of privacy is not only important from a legal and regulatory point of view, but it also demonstrates the care taken by the organization to do things correctly and transparently.

Within a public site, a small amount of user information is managed, but that does not mean that requirements must be met such as:
- **Cookie Banners:** These are banners that present the user with the option to disable the tracking of certain cookies within the site, completely or individually. The banner must be able to detail the reason for each cookie that you want to install in the user's browser.
- **Cookie Policy:** Corresponds to the policy maintained by the site on the type of cookies used and their purpose, in addition to what could eventually happen to the user's experience if they do not accept them. The cookie policy is generally accepted in the cookie banner.
- **Privacy Policy:** Corresponds to the organization's policy regarding the privacy of user data within the context of the site. If the public site is the prelude to a private or transactional system, this policy can have a scope that fully covers the system.
- **Consent management:** This is a matter of diligently storing the consents derived from any acceptance of conditions by the user. Consent records must be stored for a period of time, depending on the regulations in force in each country.

### Other requirements
Finally, we reserved some specific requirements that should be taken into account when implementing a public site.

#### Using PWA
In the case of public sites, the use of PWA techniques is not recommended as it is done in private sites, since public sites are generally not associated with the concept of “application” and in general will not provide a value or a personalized experience to the user for installing it.
