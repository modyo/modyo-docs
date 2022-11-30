---
search: true
---

# Micro Frontends
The development of user experiences using modern Frontend technologies is a challenge. The heterogeneity of existing tools and techniques, which often advance faster than the ability to adopt them, must coexist with the constant evolution of browsers and standards. In addition, the modern Frontend developer has to deal with concepts such as omnichannel, referring to the different devices that customers use to access the Web.  All in all, Frontend development is difficult, and it is even more difficult to scale teams so that they can grow in number and complexity, working simultaneously on common code bases. 

In this scenario, micro frontends emerge as a technique that allows to decompose the Frontend coupling in several smaller and more manageable parts, in order to increase the effectiveness and efficiency of the work teams. 

Micro frontends allow the complete user experience to be disaggregated into a series of smaller independent components, with more limited responsibilities that force the generation of architectures based on a clear delimitation of contexts, defining interoperability contracts and giving teams the ability to work more independently of each other, promoting code to productive environments with more autonomy.

### What is a micro frontend?
According to the [official definition](https://micro-frontends.org), a micro frontend is the extension of the Microservices concept to the Frontend. Against the current trend of creating powerful and feature-rich applications in a Single Page Application (SPA) model, micro frontends seek to solve the monolith in the Frontend by decomposing the application into independent modules.

## Features
### Being technology agnostic
Eventually each team could work on different technologies.

### Isolate the equipment code
Independent and autonomous applications that do not share anything with each other.

### Set equipment prefixes
Agree on the namespaces to be used by each team to avoid conflicts with browser resources (cookies, style sheets, events, etc).

### Favor native browser features over custom APIs
For example, using native geolocation controls instead of custom development.

### Building a resilient site
In such a way that the components do not create dependencies between each other and are loaded asynchronously and efficiently.

## Benefits
Micro-frontend based architectures can be implemented in a variety of ways. The following benefits may vary depending on the implementation path chosen in your implementation.

### Incremental upgrades
For many organizations, this is the main reason for adopting micro frontends. The existing Frontend SPA monolith is starting to give problems and a complete rewrite could be very costly. In this scenario it is preferable to break the old application into separate parts, while still delivering new functionality using a more agile and efficient path.

While some teams will be experts in the old world, there will be newer teams that are not and will require new technologies and tools. The micro frontends technique allows the old code to continue with active maintenance, but the new teams will have more implementation alternatives.

The goal here will be to offer more freedom and choice, choosing the best tools on a case-by-case basis, so that decisions are made on the individual parts of the product, allowing for an architecture that allows for incremental upgrades of each user experience. Furthermore, by following this architecture, when there is a major version change of our main framework, each micro frontend can be updated at the most opportune moment, instead of having to make a massive and risky change all at once. 

### Decoupled code, simpler
The code of each independent micro frontend will, by definition, be smaller than the complete code of the overall application. These smaller code repositories are generally easier for developers to work with. Unnecessary coupling of components that should not be aware of each other's existence should be avoided by applying bounded contexts within the application.

Following these principles, an architecture based on micro frontends will make the bad ones harder and the good ones easier. For example, avoid sharing domain models across all components, whether they require it or not, or making unnecessary invocations or event handoffs between components.

### Independent deployments
As with microservices, independent deployments are a key component of the micro frontend architecture. This immediately reduces the scope of each deployment, thereby reducing the risk associated with each deployment. Each micro frontend should have its own build, test and deployment line to production.

### Independent teams
One of the benefits of decoupling code and deployment processes is more independent teams. Independent teams gain more ownership and control of the products they maintain, allowing them to work faster and more efficiently. For this to work, teams will need to be configured vertically in terms of business functionality, working in conjunction with backend teams, rather than just according to their technical capabilities.



## Development
Modyo Platform can be extended in functionality through the development of Widgets and Microservices. Widgets can be developed using Modyo's internal tools, such as the Widget Builder, or externally using the Modyo CLI. 
Widgets developed with the CLI will require a code repository and automation pipelines, which generate code that is directly deployed in Modyo Platform. 

::: tip Code Repository
The initial code and structure of the project in the developer's local environment must be backed up in a [code repository](../components/development.md#code-repository) provided by the service.
:::

- Scope recommendation
- Framework recommendations
- Recommendations on libraries that could be problematic
- Recommendations on how to isolate the Widget inside the page (namespace or shadow root)
- Recommendations for responsive development
- Recommendations for reuse of components, design system
- Recommendations for API calls
- Recommendations for PWA
- Performance and accessibility recommendations


### Best Practices
- Best practice recommendations for project structure
- Code style recommendations

### Performance
- Lighthouse
- JS non-blocking
- Widget async vs sync

### Deployment with Modyo CLI
- Recommendations for the use of Modyo CLI
- Security recommendations for Modyo tokens (example: GH Secrets)



