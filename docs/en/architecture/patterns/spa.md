---
search: true
---

# Single Page Application

Single-Page Applications (SPAs) are web applications that are loaded once in the browser and then dynamically updated and modified without the need to load additional pages. Instead of loading completely new pages, SPAs use DOM manipulation and asynchronous communication techniques to update content on the same page, providing a smooth and fast user experience.

Advantages of SPAs:

- **Smooth user experience:** By preventing full page reloads, SPAs provide a faster and smoother experience for users, as content updates are performed dynamically and without interruption.
- **Interactivity and fast navigation:** SPAs allow for faster and smoother navigation within the application, as only the necessary components are updated without the need to load additional pages.
- **Performance improvement:** By reducing the amount of data and resources that must be transmitted and processed in each interaction, SPAs can improve overall application performance and reduce load times.
- **More efficient development:** SPAs allow for more efficient development by using modern frameworks and libraries, such as React, Angular or Vue.js, which offer a component-based approach and facilitate code reuse.

Disadvantages of SPAs:

- **Increased initial complexity:** SPAs development may have a steeper learning curve due to the need to understand and work with additional frameworks and tools.
- **Higher memory consumption:** SPAs may require more memory in the browser due to the need to keep the entire state of the application in memory while browsing.
- **SEO and social sharing:** SPAs can often present challenges related to SEO (search engine optimization) and link sharing on social networks, as search crawlers and link previews may not correctly interpret dynamic content.
- **JavaScript dependency:** SPAs require users to have JavaScript enabled in their browser for them to work properly. If JavaScript is disabled or not supported, the application may not be usable.

It's important to carefully evaluate project needs and specific requirements before choosing to develop a SPA. While SPAs can offer many advantages, they also present additional challenges that must be considered.

### How do you implement an SPA with Modyo?

To implement an SPA with Modyo today, you must make use of the capabilities of [Modyo Connect](/en/connect), within which you can configure object repositories and content distribution networks (CDNs) that will allow the deployment and subsequent maintenance of the SPA. The changes, in this case, are managed directly by the service's code repository, and through the use of automations, cache deployments and validations can be carried out when incorporating or mixing changes into it.

:::tip Modyo 10
In Modyo 10, the future version of the platform, there will be direct support from the Web administration console for the deployment of static modules in the CDN. This will provide a static hosting system to work with SPA and other types of libraries, leaving the platform in control of cache deployments and invalidations.
:::
