---
search: true
---

# Public Site
A public site is any site that is available on the Internet to anyone. These sites are intended to share information, provide services and interact with the general public, offering a consistent experience for all visitors.

Public sites can serve a variety of purposes, such as:
- Corporate or informational sites
- Lead capture sites
- Customer Generation Sites
- Marketing and promotion sites
- News sites and blogs

<!-- Hack to avoid this title to be displayed in the TOC element --> 
<h3> <a href="#¿como-implementar-sitios-publicos-con-modyo" class="header-anchor"> # </a> How to implement public sites with Modyo? </h3>

Modyo provides you with all the essential tools to create and maintain public sites in an agile, safe and efficient way. By combining the content applications and channels, you have access to all the functionality needed at every stage of the site's lifecycle.

In terms of site architecture, implementing a public site is one of the most common and simple processes in Modyo. But this does not ensure that it is exempt from multiple details that you must consider in order to ensure its success, including:

[[toc]]

Depending on the outcome you're looking for, these requirements can impact implementation decisions in a variety of ways. In this guide, we explain the most relevant concepts of each of them.

### Structure and modularity
The first decisions when implementing a site in Modyo must focus on structure and modularity, since the rest of the requirements depend on them. A well-structured site is easier to maintain and develop. Next, the key criteria of structure and modularity are explored.

#### Multiple Sites and Organizations
Modyo uses a multi-site, multi-organization architecture that can be used to separate administration into different teams of site administrators, related or not related to each other.

Generally, they are separated by independent subsidiary or subsidiary organizations, creating implementation silos that do not share administration, but do share the physical infrastructure of the platform.

:::warning Organizations and licensing
When using organizations, consider the limits of your license. The maximum limit of organizations can be extended after commercial validation.
:::

#### Using Pages and Layouts
[Layouts](/en/platform/channels/templates.md #layouts) are an excellent way to differentiate contexts within a site. A layout can be shared by multiple [pages] (/en/platform/channels/pages) and each page can have only one layout. Within the layout you can define reusable elements between the different pages, such as Headers, Footers, Meta Tags, etc.

The layouts ensure visual consistency between pages, although cases such as a special promotion page may require different layouts.

At the same time, you can group pages into hierarchies, ensuring an organized structure for the different elements of the site.

#### Using Templates and Snippets
[Templates](/en/platform/channels/templates) are documents in Liquid language that are dynamically rendered on the platform. They can represent HTML pages, layouts, CSS style sheets, or JavaScript files.

At the same time, [snippets](/en/platform/channels/templates.md #snippets) are useful for organizing source code and can be referenced from different Liquid templates on the same site. Snippets allow you to modularize and reuse functions, making it easier to break down complex functionality into simpler parts. Snippets are dynamically rendered when the page loads.

:::warning Recursion and performance
A common mistake when using snippets is to recursively call circular references, that is, to call themselves. If this happens, the platform stops executing the snippet to avoid saturating system resources.

Another common problem is excessive snippets within a site, which can slow page loading by requiring additional processing.
:::

#### Using Widgets
In Modyo, [widgets](/en/platform/channels/widgets) allow you to organize and modularize business functionality.

The widgets contain HTML, CSS and Javascript code that is modified and deployed together, without affecting the site. Widgets differ from templates and snippets in that they have a separate execution scope. This means that they encapsulate self-contained code that runs autonomously, without impacting the rest of the website environment.

The widget builder in the Modyo administration console, like the template editor, gives you control over the entire development cycle of the widget, with preview, versioning and deployment.

Widgets, together with the use of snippet and its builder, are an excellent way to work with low or medium complexity functionality, where the use of Javascript is not intensive. In more complex scenarios, we recommend using [micro frontends](/en/architecture/patterns/micro-frontend).

#### Using Micro Frontends
[Micro frontends](/en/architecture/patterns/micro-frontend) are a special type of widgets that allow for a more sophisticated workflow. With micro frontends, you develop the code outside the platform and enter it using the Modyo command line.

Micro frontends are statically compiled before being loaded into Modyo. This allows you to make use of advanced libraries and frameworks, in addition to allowing you to incorporate static code review flows to ensure its quality and security.

:::warning about -Engineering
Implementing micro frontends on a public site can add additional complexity, including managing continuous integration flows and DevOps processes. Generally, this additional complexity requires support from IT areas within the organization, so it must be considered whether this additional complexity is justified.
:::

#### Using Javascript Frameworks
In the context of public sites, we recommend minimizing dependency on JavaScript and avoiding using frameworks such as ReactJS or Vue.

This recommendation is both because of the inherent complexity in the code of each dependency that can affect the essential features that a website must have, and because of the tendency to incur additional costs when implementing public sites with advanced Javascript frameworks.

Other reasons to avoid using JavaScript frameworks on public sites are:

- **Performance:** Every time a visitor loads a page, the browser must download and execute the JavaScript code to display and manipulate the elements of the page. Excessive use of JavaScript can encourage page loading, especially on devices with slow connections or limited resources.
- **Accessibility:** Some users may have difficulty accessing and using interactive Javascript-based content. This includes people with visual disabilities who use screen readers, users with slow connections or older devices, and those who turn off Javascript for safety or personal preference.
- **Maintenance and compatibility:** Reducing Javascript dependencies simplifies site maintenance. In addition, these solutions tend to have greater compatibility with various browsers and devices.
- **Security:** Limiting the use of Javascript decreases the potential attack surface and improves site security.

Instead of using Javascript frameworks, we suggest opting for static HTML and, if required, taking advantage of the use of Liquid language.

However, in situations where specific complex components are required for a public site, such as simulators, search engines for nearby branches or summaries of financial indicators, the use of a framework may be indicated and the recommended implementation strategy is to use micro frontends.

The goal is to achieve an appropriate balance between static and dynamic elements to provide an optimal user experience.

:::warning about -Engineering
As with micro frontends, using Javascript frameworks on a public site can involve additional complexity, therefore, we don't recommend using them unless the benefits are clearly identified.
:::


#### Web Components
[web components](/en/architecture/patterns/web-components) are a modularization technique based on HTML, CSS and JS standards. Currently, web components lack consistent support in browsers, although this situation gradually improves over time. To implement web components safely, you need to use a JavaScript library that addresses these incompatibilities. That is why in the case of public sites, the use of Web Components can create more problems than the benefits it would bring, as mentioned in previous sections.

As an alternative to using Web Components, public sites can benefit from lighter and more standard alternatives, such as the CSS [Bootstrap](https://getbootstrap.com) framework, which is natively integrated into the Modyo platform. In addition, you can use the snippets functionality, which makes it easier to reuse code in a manner analogous to Web Components.

### Content and source code governance
In every public site project, content governance and source code must be a central element to consider. The implementation must align with business expectations regarding how future updates to the site will be managed, respecting change approval flows and the appropriate level of separation between content and its implementation logic.

The main functionalities of the platform, which allow the correct governance of public sites, are:

#### Groups and permissions
Modyo allows the creation of multiple content spaces and sites with defined roles and permission groups specific to each user. This allows you to assign elevated permissions to the same user in a first site, while in a second site their permissions may be more limited.

In Modyo, roles and groups are defined at the organization level and then you can assign them individually to each space and site. We recommend that you always ensure that users have the minimum permissions necessary to perform their functions, thus avoiding unwanted modifications to the sites, either accidentally or intentionally.


#### Multiple content spaces
The platform offers a hybrid content management environment. In this environment, you can access content managed within a space in a decentralized way through the API, taking advantage of the maximum level of decoupling, or through the use of _content pages_, a special type of page that automatically integrates with the configured space and is available within each site.

:::tip Traditional CMS experience
The combination of content spaces and content pages achieves a user experience similar to that of a conventional content management system (CMS), where each content is linked to a representation.

In addition, in Modyo, the same content can be displayed on multiple pages, in different ways. This allows publishers to preview content on the page of their choice.

:::

#### Using Team Review
[Team review](/en/platform/core/key-concepts.html#team-review) is a Modyo feature that allows you to configure, in a simple and flexible way, which users are responsible for reviewing items before publication. Users participating in the review can preview the change or content and make comments in order to correct aspects they deem necessary. You can access the team review menu from the content spaces and sites configuration,

The use of team review is highly recommended in public places where you want to maintain maximum agility in publishing, while minimizing approval controls to carry out simple reviews.

#### Development environments
Generally, on a public site, the most common changes are small and involve adjustments to content such as news, promotions, rate information, branch locations, or advertisements located on the main pages.

The most complex changes, affecting the design, are made less frequently and in specific situations. Therefore, for most modifications, a well-configured change approval flow is sufficient for site control. The most advanced techniques are reserved for structural changes.

To work in separate development environments before implementing changes in production, Modyo offers several alternatives. The most direct and appropriate option for testing riskier or experimental changes is the use of pre-productive physical environments. Pre-productive environments are included by default in the enterprise versions of the platform. However, we do not recommend using this type of environment for daily operations in public places, due to the difficulties of keeping content synchronized between different infrastructures.

Another way to manage previous environments, through virtualization within the same platform, is through the use of stages, as explained below.

:::tip Testing new versions
Modyo recommends the use of physical environments for testing new versions of the platform, since the risk of incompatibility has a minor impact in this context.
:::

#### Using Stages
In the context of public sites, Modyo recommends managing previous environments using the [stages](/en/platform/channels/sites#stages) functionality, which allows you to create virtualized pre-productive environments within the same production deployment. This technique allows you to avoid the need to move changes and files between environments, reducing the possibility of errors at the time of publication.

The use of stages makes it possible to create separate and isolated environments to build, test and verify the operation of the site before it is deployed in a production environment. This helps prevent failures that could affect end users. In the case of public sites, the following stages can be defined, for example:

- **Develop:** for carrying out the development and integration of changes.
- **Certification:** intended for pre-deployment testing in production.
- **Main:** productive version of the site.

Stages can have separate settings, such as site variables. This allows you to adjust behaviors between different environments, for example, changing the URL of an API that provides information to the site.

If, while using stages in conjunction with content spaces, there is some degree of coupling between the two, we recommend cloning the space and making changes to the copy. Then, when you promote the site to production, the same changes will be applied to the original content space.

#### Using Design Systems
Modyo offers different ways to implement [design systems](/en/architecture/patterns/design-system), their complexity varies depending on the scenario in which they are to be applied.

For public sites, it is possible to implement design systems easily, using CSS libraries or frameworks that establish consistent rules for all elements. Sites created in Modyo use [Bootstrap] (https://getbootstrap.com) as the default CSS framework, which you can customize through the variables enabled for this purpose.

### Accessibility
Within a public site, [accessibility] (/en/architecture/patterns/accessibility) is essential to provide the best possible experience for people who require special assistance.

To implement an accessible public site with Modyo, the first step is to take advantage of the [native accessibility capabilities] (https://getbootstrap.com/docs/5.2/getting-started/accessibility) of the [Bootstrap] toolkit (https://getbootstrap.com), which defines controls and standards for many basic elements. A second step involves determining the desired level of accessibility and, depending on that, implementing aids such as changes in color contrast, size adjustments and simplified versions of the content, among other possibilities.

Another important aspect is the use of Liquid tags to insert elements from the Modyo Media Library. This ensures that every image embedded in the site has alternative texts and appropriate descriptions, in addition to centralizing its maintenance.

### Internationalization
[internationalization] (/en/architecture/patterns/internationalization) on a public site is a requirement for which the platform does not currently offer a specific solution. When configuring a site, the contents can be defined with a specific language, however, the site only supports one language. Therefore, to implement a second or third language, the only option currently is to clone the site and adjust it to the desired language.

It is important to note that when implementing languages by cloning sites, the contents of the spaces are not duplicated, since they do support several languages. At the same time, it is important to mention that any technique based on JavaScript or dynamics to change the language of a site without following our recommendations can affect various attributes mentioned in this guide, such as accessibility or indexing.

:::tip Modyo 10
The next version of Modyo will include improved support for internationalization, allowing you to work with several languages on the same site and to change languages dynamically without the need to duplicate efforts.
:::


### Search
In a public place, the search for content is a fundamental element. To this end, the platform has an internal search engine that indexes the content of the site and provides a simple interface to display the results. This search engine uses internal criteria to evaluate the relevance of the results, based on common indexing practices such as prioritizing titles over descriptions, keyword frequency, among others.

If you require more advanced search functionality, you can also implement external indexing solutions.

#### Implementing external search
There are several alternatives in the market for incorporating search capabilities into a site. One of the most popular is [Algolia] (https://www.algolia.com), a complete indexing and search solution that allows you to activate advanced functions such as relevance criteria, A/B testing, artificial intelligence, real-time search, among others.

You can integrate Algolia and Modyo in a variety of ways. For public sites, an indexing crawler similar to the one used by Google to index information from the sites visited is usually sufficient.

Another option to consider is [ElasticSerch] (https://www.elastic.co/web-crawler), which offers a specific product for indexing and searching public sites.

:::tip Using external indexers
Modyo recommends the use of external indexers only in cases where their incorporation can be justified, since these tools generate additional costs that can be high depending on the volume of searches carried out in them.
:::


#### Search Engine Optimization (SEO)
Another important topic regarding the search and indexing of content is public search engines, such as [Google] (https://developers.google.com/search/docs/fundamentals/seo-starter-guide). These engines are essential for public sites, as they generate organic traffic from queries made by users. By applying structured techniques, it is possible to appear on the first pages of results, as long as the engine considers the information provided by the site relevant to that specific query.

Modyo has several features that allow you to incorporate structured elements to facilitate indexing by these engines. Some of the most commonly used include:

- Using dynamic meta tags on content pages
- Use of general meta tags for the site, with the option to modify them in specific cases
- Implementing server-side rendering [SSR] (/es/architecture/patterns/ssr) to ensure that search engines find information quickly and directly in the HTML, without relying on external APIs or JavaScript to build content
- Performance of public sites

:::tip Modyo Experts
Search engine optimization can be critical to achieving business goals, but it can also be complex to address. Modyo offers professional services with SEO experts who can collaborate in the definition and implementation of strategies to maximize results. If you want to learn more, don't hesitate to contact a Modyo sales or customer service executive.
:::


### Analytics
Web analytics, from the perspective of marketing teams, is possibly the most important point to consider when implementing a public site. This is because it is the only way to measure the performance of the other attributes of the site and achieve business objectives.

:::tip Integration
For the purpose of analytics on a public site, Modyo does not provide any proprietary tools within its platform to gather metrics for public traffic. This is because there are already established players in the industry, who also offer excellent forms of integration, such as [Google Analytics] (https://marketingplatform.google.com).
:::

#### Tagging
For Google Analytics, tagging refers to the implementation of code on a website or application to collect data and tracking metrics that are then analyzed on the Google Analytics platform. This process involves embedding the tracking code provided by Google in web pages or in the application flow. Once the code is in place, Google Analytics starts collecting information about site traffic, user behavior, and other relevant data.

Markup for Google Analytics is essential for monitoring and evaluating the performance of the site or application. It allows site owners and administrators to understand how users interact with their content, which pages are most popular, how much time they spend on the site, traffic sources, conversions, and other important details. This data is valuable for making informed decisions about marketing strategies, site design, and user experience optimization.

To implement tagging with Modyo, you must first define the business objectives you want to measure and then implement the code and tags within the templates of the sites. In addition, you can use Google Tag Manager, from where you can manage branding definitions outside the site. Tagging allows you to capture events that happen on the site, correlate them with other data, and gain valuable information about user interaction with the site.



### Performance
[performance] (/en/architecture/resources/web-performance) is one of the most important requirements when implementing a public site, not only to ensure a positive user experience, but also to improve search engine rankings and conversion rates on the site.

The performance of a website is affected by multiple factors, some of which are beyond the control of the implementer, such as connectivity problems or problems with the visitor's device. Other factors are the responsibility of the implementer, such as the complexity of rendering the page, mainly influenced by JavaScript running on the client side, the use of images that are not optimized in terms of weight and dimensions, the distance between web servers and users, among others.

Modyo Cloud and Enterprise Cloud have unique features that allow you to implement development best practices and provide an exceptional user experience. Some of these key features are:
- Use of global content distribution networks
- Dynamic image optimization
- Application of modern image compression standards
- Use of HTTP3 in conjunction with TLS 1.3
- Use of optimized internet routes between end users and the origin server
- Server-side rendering [(SSR)] (/en/architecture/patterns/ssr) with Liquid

:::tip Modyo Enterprise On Premise
In the case of Modyo Enterprise On Premise, you can implement similar features, by configuring providers comparable to those used in the Cloud.
:::

### Privacy
Finally, among the most important requirements that a public site must consider are those related to the privacy of user data. Attention to privacy is important not only from a legal and regulatory point of view, but also as a manifestation of the organization's commitment to doing things correctly and transparently.

In a public place, a limited amount of user information is handled, but this does not exempt compliance with requirements such as:
- **Cookie Banners: ** Corresponds to banners that provide users with the option to disable the tracking of certain cookies on the site, completely or individually. The banner must explain the reason for each cookie that is intended to be installed in the user's browser.
- **Cookie Policy: ** Corresponds to the policy maintained by the site on the type of cookies used and their purpose, in addition to what could eventually happen to the user's experience if they do not accept them. The cookie policy is generally accepted in the cookie banner.
- **Privacy Policy: ** Encompasses the organization's policy regarding the privacy of user data in the context of the site. If the public site is an entry point to a private or transactional system, this policy can be extended to cover the entire system.
- **Consent management: ** Consists in accurately recording the consents derived from any acceptance of conditions by the user. Consent records must be kept for a certain period of time, in accordance with the regulations in force in each country.

### Other requirements
Finally, we reserved some specific requirements that should be taken into account when implementing a public site.

#### Using PWA
For public sites, we don't recommend using Progressive Web App (PWA) techniques as you do on private sites. Public sites are generally not associated with the concept of _application_ and generally do not provide a value or personalized experience to the user through their installation. Some exceptions to this are the use of offline mode and the optimization of SEO through application metadata. These measures improve the user experience and increase visibility in search engines, respectively.