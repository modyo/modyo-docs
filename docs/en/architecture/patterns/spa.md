---
search: true
---

# Single Page Application (SPA)

Single-Page Applications (SPAs) are web applications that load once in the browser and dynamically update content without requiring full page reloads.

Instead of loading entirely new pages, SPAs utilize DOM manipulation and asynchronous communication techniques to update content on the same page, providing a fluid and fast user experience.

Advantages of SPAs:

- **Fluid user experience**: They offer a faster and more seamless experience for users, as content updates are performed dynamically and without interruptions.
- **Interactivity and fast navigation**: They enable agile navigation by updating only the necessary components, eliminating the need to load additional pages.
- **Performance improvement**: They reduce loading times by minimizing the amount of data and resources that must be transmitted and processed in each interaction.
- **More efficient development**: They facilitate more efficient development through the use of modern frameworks and libraries (e.g., React, Angular, Vue.js) that offer a component-based approach and promote code reuse.

Disadvantages of SPAs:

- **Greater initial complexity**: They can have a steeper learning curve due to the need to understand and work with additional frameworks and tools.
- **Higher memory consumption**: They may require more browser memory by keeping the entire application state in memory during navigation.
- **SEO and social sharing**: Search crawlers and link previews may not correctly interpret dynamic content, which presents challenges for SEO and social media sharing.
- **JavaScript dependency**: They require JavaScript to be enabled in the browser to function correctly.

:::tip Tip
It is crucial to carefully evaluate project needs and requirements before opting for an SPA. While SPAs offer many advantages, they also present additional challenges that must be considered.
:::


### Implementation of a SPA with Modyo

To implement an SPA with Modyo, you must leverage the capabilities of [Modyo Connect](/en/connect), which allows you to configure object repositories and content delivery networks (CDNs) for the deployment and maintenance of the SPA.

Changes are managed directly from the service's code repository. Through automations, you can perform deployments and cache invalidations when incorporating or merging changes.

:::tip Modyo 10
(Note: In Modyo 10, the future version of the platform, there will be direct support from the web administration console for the deployment of static modules in the CDN. This will provide a static hosting system to work with SPAs and other libraries, leaving the platform in control of deployments and cache invalidations.)
:::