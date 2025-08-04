---
search: true
---

# Single Page Application (SPA)

Single-Page Applications (SPAs) are web applications that load once in the browser and are dynamically updated without the need to reload pages.

Instead of loading complete pages, SPAs use DOM manipulation and asynchronous communication to update the content on the same page, providing a fluid and fast user experience.

Advantages of SPAs:

- **Fluid user experience**: They offer a faster and more fluid experience, as content updates are performed dynamically and without interruptions.
- **Interactivity and fast navigation**: They allow for agile navigation by updating only the necessary components, without loading additional pages.
- **Performance improvement**: They reduce loading times by decreasing the amount of data and resources to be transmitted and processed in each interaction.
- **More efficient development**: They facilitate more efficient development through the use of modern frameworks and libraries (e.g., React, Angular, Vue.js) that offer a component-based approach and promote code reuse.

Disadvantages of SPAs:

- **Greater initial complexity**: They can have a steeper learning curve due to the need to understand and work with additional frameworks and tools.
- **Greater memory consumption**: They may require more memory in the browser by keeping the entire state of the application in memory during navigation.
- **SEO and social sharing**: Search crawlers and link previews may not correctly interpret the dynamic content, which presents challenges for SEO and social media sharing.
- **JavaScript dependency**: They require JavaScript to be enabled in the browser to function correctly.

:::tip Tip
It is crucial to carefully evaluate the needs and requirements of the project before opting for a SPA. Although they offer many advantages, they also present additional challenges that must be considered.
:::


### Implementation of a SPA with Modyo

To implement a SPA with Modyo, you must use the capabilities of [Modyo Connect](/en/connect), which allow you to configure object repositories and content delivery networks (CDNs) for the deployment and maintenance of the SPA.

Changes are managed directly from the service's code repository. Through automations, you can perform deployments and cache invalidations when incorporating or merging changes.

:::tip Modyo 10
(Note: In Modyo 10, the future version of the platform, there will be direct support from the web administration console for the deployment of static modules in the CDN. This will provide a static hosting system to work with SPAs and other libraries, leaving the platform in control of deployments and cache invalidations.)
:::
