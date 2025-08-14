---
search: true
---

# Public Site
A public site is any website accessible to anyone on the Internet. Its purpose is to share information, offer services, and interact with the general public, providing a uniform experience for all visitors.

Public sites can serve various purposes, such as:
- Corporate or informational
- Lead capture
- Customer generation
- Marketing and promotions
- News and blogs

<!-- Hack to avoid this title to be displayed in the TOC element -->
### How to Implement Public Sites with Modyo?

Modyo provides all the essential tools to create and maintain public sites in an agile, secure, and efficient manner. The combination of its content and channel applications offers access to all the necessary functionalities at each stage of the site's lifecycle.

Architecturally, implementing a public site in Modyo is a common and relatively simple process. However, its success depends on considering multiple details, including:

[[toc]]

Depending on the desired outcome, these requirements can impact implementation decisions in various ways. In this guide, we explain the most relevant concepts for each of them.

### Structure and Modularity
The initial decisions when implementing a site in Modyo should focus on structure and modularity, as other requirements depend on them. A well-structured site is easier to maintain and develop. Below, the key criteria are explored.

#### Multiple Sites and Organizations
Modyo uses a multi-site and multi-organization architecture that allows for the separation of administration into different teams, whether related or not.

Generally, separation is done by independent subsidiary or affiliate organizations, creating implementation silos that do not share administration but do share the physical infrastructure of the platform.

:::warning Organizations and licensing
When using organizations, consider the limits of your license. The maximum limit of organizations can be extended after commercial validation.
:::

#### Use of Pages and Layouts
[Layouts](/en/platform/channels/templates#layouts) are an excellent way to differentiate contexts within a site. A layout can be shared by multiple [pages](/en/platform/channels/pages), and each page can have only one layout. Within the layout, reusable elements can be defined between the pages, such as headers, footers, and meta tags.

Layouts ensure visual consistency between pages, although specific cases (e.g., a promotion page) may require different layouts.

In addition, pages can be grouped into hierarchies, ensuring an organized structure for the site's elements.

#### Use of Templates and Snippets
[Templates](/en/platform/channels/templates) are Liquid documents that are dynamically rendered on the platform. They can represent HTML pages, layouts, CSS style sheets, or JavaScript files.

[Snippets](/en/platform/channels/templates#snippets) are useful for organizing source code and can be referenced from different Liquid templates on the same site. They allow for the modularization and reuse of functions, facilitating the decomposition of complex functionalities into simpler parts. Snippets are dynamically rendered when the page loads.

:::warning Recursion and performance
A common error when using snippets is the recursive call of circular references. In such a case, the platform stops the execution to avoid resource saturation.

The excess of snippets on a site can also slow down the page load due to additional processing.
:::

#### Use of Widgets
In Modyo, [widgets](/en/platform/channels/widgets) allow for the organization and modularization of business functionality.

Widgets contain HTML, CSS, and Javascript code that is modified and deployed together, without affecting the site. They differ from templates and snippets in their independent execution scope, encapsulating self-contained code that runs autonomously, without impacting the website environment.

The widget builder in the Modyo administration console, like the template editor, offers complete control of the widget's development cycle, including preview, versioning, and deployment.

Widgets, along with snippets and their builder, are an excellent option for low or medium complexity functionalities with limited use of Javascript. In more complex scenarios, the use of [micro frontends](/en/architecture/patterns/micro-frontend) is recommended.

#### Use of Micro Frontends
[Micro frontends](/en/architecture/patterns/micro-frontend) are a special type of widgets that allow for a more sophisticated workflow. The code is developed outside the platform and introduced through the Modyo command line.

Micro frontends are statically compiled before being loaded into Modyo. This allows for the use of advanced libraries and frameworks, and for the incorporation of static code review flows to ensure their quality and security.

:::warning Over-engineering
The implementation of micro frontends on a public site can add complexity (e.g., management of continuous integration flows and DevOps processes). This additional complexity usually requires support from the IT areas, so it must be evaluated whether it is justified.
:::

#### Use of Javascript Frameworks
On public sites, it is recommended to minimize the dependency on JavaScript and avoid the use of frameworks such as ReactJS or Vue.

This recommendation is based both on the inherent complexity of the code of each dependency, which can affect the essential characteristics of a website, and on the tendency to incur additional costs when implementing public sites with advanced Javascript frameworks.

Other reasons to avoid the use of JavaScript frameworks on public sites include:

- **Performance**: Excessive use of JavaScript can slow down the page load, especially on devices with slow connections or limited resources, as the browser must download and execute the code to display and manipulate the elements.
- **Accessibility**: Users with visual disabilities (screen readers), slow connections, old devices, or those who disable JavaScript may have difficulties accessing and using interactive content.
- **Maintenance and compatibility**: Reducing JavaScript dependencies simplifies site maintenance and improves compatibility with various browsers and devices.
- **Security**: Limiting the use of JavaScript decreases the potential attack surface and improves site security.

Instead of Javascript frameworks, it is suggested to opt for static HTML and, if necessary, take advantage of the Liquid language.

However, for specific complex components of a public site (e.g., simulators, branch locators, financial summaries), the use of a framework may be indicated, and the recommended implementation strategy is to use micro frontends.

The goal is to achieve an appropriate balance between static and dynamic elements to offer an optimal user experience.

:::warning Over-engineering
As with micro frontends, the use of Javascript frameworks on a public site can involve additional complexity. Therefore, it is not recommended to use them unless the benefits are clearly identified.
:::


#### Web Components
[Web components](/en/architecture/patterns/web-components) are a modularization technique based on HTML, CSS, and JS standards. Currently, their uniform support in browsers is limited, although it is gradually improving. For a secure implementation, a JavaScript library that addresses these incompatibilities is required. Therefore, on public sites, the use of Web Components can generate more problems than benefits, as mentioned in previous sections.

As an alternative to Web Components, public sites can benefit from lighter and more standard options, such as the [Bootstrap](https://getbootstrap.com) CSS framework, natively integrated into the Modyo platform. In addition, the snippets functionality facilitates code reuse in a manner analogous to Web Components.

### Governance of Content and Source Codes
In every public site project, the governance of content and source code is a central element. The implementation must align with the business expectations on the management of future updates, respecting the change approval flows and the appropriate level of separation between the content and its implementation logic.

The main functionalities of the platform, which allow for a correct governance of public sites, are:

#### Groups and Permissions
Modyo allows the creation of multiple content spaces and sites with specific roles and permission groups for each user. This makes it possible to assign a single user high permissions on one site and more limited ones on another.

In Modyo, roles and groups are defined at the organization level and are assigned individually to each space and site. It is recommended to ensure that users have the minimum necessary permissions for their functions, thus avoiding unwanted modifications (accidental or intentional).


#### Multiple Content Spaces
The platform offers a hybrid content management environment. The managed content can be accessed in a decentralized manner through the API, taking advantage of the maximum level of decoupling, or through _content pages_, a special type of page that is automatically integrated with the configured space and is available on each site.

:::tip Traditional CMS experience
The combination of content spaces and content pages offers a user experience similar to that of a conventional CMS, where each content is linked to a representation.

In Modyo, the same content can be displayed on multiple pages in various ways, allowing editors to preview it on the page of their choice.
:::

#### Use of Team Review
The [team review](/en/platform/core/key-concepts#team-review) is a Modyo functionality that allows for the simple and flexible configuration of the users responsible for reviewing elements before their publication. The reviewers can preview the change or content and make comments to correct necessary aspects. The team review menu is accessible from the configuration of the content spaces and sites.

The use of team review is highly recommended on public sites where maximum agility in publication is sought and, at the same time, approval controls for simple reviews are minimized.

#### Development Environments
Generally, on a public site, the most common changes are small and refer to adjustments in content (e.g., news, promotions, rates, branch locations, or ads on main pages).

The most complex changes, which affect the design, are made less frequently and in specific situations. Therefore, for most modifications, a well-configured change approval flow is sufficient for site control. Advanced techniques are reserved for structural changes.

To work in separate development environments before implementing changes in production, Modyo offers several alternatives. The most direct and appropriate option for testing risky or experimental changes is the use of pre-production physical environments, included by default in the enterprise versions of the platform. However, this type of environment is not recommended for daily operations on public sites, due to the difficulties of synchronizing content between infrastructures.

Another way to manage previous environments, through virtualization within the same platform, is through the use of stages, as explained below.

:::tip Testing new versions
Modyo recommends the use of physical environments for testing new versions of the platform, since the risk of incompatibility has a minor impact in this context.
:::

#### Use of Stages
On public sites, Modyo recommends managing previous environments using the [stages](/en/platform/channels/sites#stages) functionality, which allows for the creation of virtualized pre-production environments within the same production deployment. This technique avoids the need to move changes and files between environments, reducing the possibility of errors in publication.

The use of stages makes it possible to create separate and isolated environments to build, test, and verify the operation of the site before its deployment in production. This helps prevent failures that could affect end users. For public sites, the following stages can be defined, for example:

- **Develop**: to carry out the development and integration of changes.
- **Certification**: intended for pre-deployment testing in production.
- **Main**: productive version of the site.

Stages can have independent configurations (e.g., site variables), which allows for the adjustment of behaviors between different environments (e.g., changing the URL of an API that provides information to the site).

If, when using stages, in conjunction with content spaces, there is some degree of coupling between them, we recommend cloning the space and making modifications to the copy. Then, when promoting the site to production, the same changes will be applied to the original content space.

#### Use of Design Systems
Modyo offers different ways to implement [design systems](/en/architecture/patterns/design-system), whose complexity varies depending on the scenario in which they are to be applied.

For public sites, it is possible to implement design systems simply using CSS libraries or frameworks that establish consistent rules for all elements. The sites created in Modyo use [Bootstrap](https://getbootstrap.com) as the default CSS framework, which you can customize through the variables enabled for this purpose.

### Accessibility
Within a public site, [accessibility](/en/architecture/patterns/accessibility) is essential to provide the best possible experience to people who require special assistance.

To implement an accessible public site with Modyo, the first step is to take advantage of the [native accessibility capabilities](https://getbootstrap.com/docs/5.2/getting-started/accessibility) of the [Bootstrap](https://getbootstrap.com) toolkit, which defines controls and standards for many basic elements. A second step involves determining the desired level of accessibility and, based on that, implementing aids such as changes in color contrast, size adjustments, and simplified versions of the content, among other possibilities.

Another important aspect is the use of Liquid tags to insert elements from the Modyo Media Library. This ensures that every image embedded in the site has alternative texts and appropriate descriptions, in addition to centralizing its maintenance.

### Internationalization
[Internationalization](/en/architecture/patterns/internationalization) on a public site is a requirement for which the platform does not currently offer a specific solution. When configuring a site, the contents can be defined with a specific language, however, the site only supports one language. Therefore, to implement a second or third language, the only option currently is to clone the site and adjust it to the desired language.

It is important to note that when implementing languages by cloning sites, the contents of the spaces are not duplicated, as they do support several languages. At the same time, it is relevant to mention that any technique based on JavaScript or dynamics to change the language of a site without following our recommendations can affect various attributes mentioned in this guide, such as accessibility or indexing.

### Search
On a public site, content search is a fundamental element. For this, the platform has an internal search engine that indexes the site's content and provides a simple interface to display the results. This search engine uses internal criteria to evaluate the relevance of the results, based on common indexing practices such as prioritizing titles over descriptions, keyword frequency, among others.

If you require more advanced search functionalities, you can also implement external indexing solutions.

#### Implementation of External Search
There are several alternatives on the market to incorporate search capabilities into a site. One of the most popular is [Algolia](https://www.algolia.com), a complete indexing and search solution that allows for the activation of advanced functions such as relevance criteria, A/B testing, artificial intelligence, real-time search, among others.

You can perform the integration between Algolia and Modyo in various ways. For public sites, an indexing crawler similar to the one used by Google to index information from the visited sites is usually sufficient.

Another option to consider is [ElasticSerch](https://www.elastic.co/web-crawler), which offers a specific product for indexing and searching on public sites.

:::tip Use of external indexers
Modyo recommends the use of external indexers only in cases where their incorporation can be justified, since these tools generate additional costs that can be high depending on the volume of searches carried out in them.
:::


#### Search Engine Optimization (SEO)
Another important topic regarding the search and indexing of content are public search engines, such as [Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide). These engines are essential for public sites, as they generate organic traffic from user queries. By applying structured techniques, it is possible to appear on the first pages of results, as long as the engine considers the information provided by the site relevant for that specific query.

Modyo has several functionalities that allow you to incorporate structured elements to facilitate indexing by these engines. Some of the most used include:

- Use of dynamic meta tags on content pages
- Use of general meta tags for the site, with the option to modify them in specific cases
- Implementation of server-side rendering [SSR](/en/architecture/patterns/ssr) to ensure that search engines find the information quickly and directly in the HTML, without depending on external APIs or JavaScript to build the content
- Performance of public sites

:::tip Modyo Experts
Search engine optimization can be fundamental to achieving business objectives, but it can also be complex to address. Modyo offers professional services with SEO experts who can collaborate in the definition and implementation of strategies to maximize results. If you want to learn more, do not hesitate to contact a Modyo sales or customer service executive.
:::


### Analytics
Web analytics, from the perspective of marketing teams, is possibly the most important point to consider in the implementation of a public site. This is because it is the only way to measure the performance of the other attributes of the site and achieve business objectives.

:::tip Integration
For the purposes of analytics on a public site, Modyo does not offer any proprietary tools within its platform to take public traffic metrics. This is because there are already established players in the industry, who also offer excellent forms of integration, such as [Google Analytics](https://marketingplatform.google.com).
:::

#### Tagging
For Google Analytics, tagging refers to the implementation of code on a website or application to collect data and tracking metrics that are then analyzed on the Google Analytics platform. This process involves embedding the tracking code provided by Google on the web pages or in the application flow. Once the code is in place, Google Analytics begins to collect information about site traffic, user behavior, and other relevant data.

Tagging for Google Analytics is essential for monitoring and evaluating the performance of the site or application. It allows site owners and administrators to understand how users interact with their content, which pages are most popular, how much time they spend on the site, traffic sources, conversions, and other important details. This data is valuable for making informed decisions about marketing strategies, site design, and user experience optimization.

To implement tagging with Modyo, you must first define the business objectives you want to measure and then implement the code and tags within the site templates. In addition, you can use Google Tag Manager, from where you can manage tagging definitions externally to the site. Tagging allows you to capture the events that happen on the site, correlate them with other data, and obtain valuable information about the interaction of users with the site.



### Performance
[Performance](/en/architecture/resources/web-performance) is one of the most important requirements when implementing a public site, not only to ensure a positive user experience, but also to improve search engine rankings and conversion rates on the site.

The performance of a website is affected by multiple factors, some of them outside the control of the implementer, such as connectivity problems or problems with the visitor's device. Other factors are the responsibility of the implementer, such as the complexity of rendering the page, mainly influenced by the JavaScript that runs on the client side, the use of images that are not optimized in terms of weight and dimensions, the distance between the web servers and the users, among others.

Modyo Cloud and Enterprise Cloud have unique features that allow you to implement the best development practices and offer an exceptional user experience. Some of these key features are:
- Use of global content distribution networks
- Dynamic image optimization
- Application of modern image compression standards
- Use of HTTP3 in conjunction with TLS 1.3
- Use of optimized internet routes between end users and the origin server
- Server-side rendering [SSR](/en/architecture/patterns/ssr) with Liquid

:::tip Modyo Enterprise On Premise
In the case of Modyo Enterprise On Premise, you can implement similar features, by configuring providers comparable to those used in the Cloud.
:::

### Privacy
Finally, among the most important requirements that a public site must consider, are those related to the privacy of user data. Attention to privacy is important not only from a legal and regulatory point of view, but also as a manifestation of the organization's commitment to doing things correctly and transparently.

On a public site, a limited amount of user information is handled, but this does not exempt compliance with requirements such as:
- **Cookie Banners**: Corresponds to the banners that provide users with the option to disable the tracking of certain cookies on the site, completely or individually. The banner must explain the reason for each cookie that is intended to be installed in the user's browser.
- **Cookie Policy**: Corresponds to the policy maintained by the site on the type of cookies used and their purpose, in addition to what could eventually happen to the user's experience if they do not accept them. The cookie policy is generally accepted in the cookie banner.
- **Privacy Policy**: Encompasses the organization's policy regarding the privacy of user data in the context of the site. If the public site is an entry point to a private or transactional system, this policy can be extended to cover the entire system.
- **Consent management**: Consists of accurately recording the consents derived from any acceptance of conditions by the user. Consent records must be kept for a certain period of time, in accordance with the regulations in force in each country.

### Other Requirements
Finally, we reserve some specific requirements that should be taken into account when implementing a public site.

#### Use of PWA
In the case of public sites, we do not recommend using Progressive Web App (PWA) techniques as is done on private sites. Public sites are generally not associated with the concept of _application_ and, in general, do not provide a value or personalized experience to the user through their installation. Some exceptions to this are the use of offline mode and the optimization of SEO through application metadata. These measures improve the user experience and increase visibility in search engines, respectively.