---
search: true
---

# Single Page Application

Single-Page Applications (SPAs) are web applications that are loaded once in the browser and then dynamically updated and modified without the need to load additional pages.

Instead of loading completely new pages, SPAs use DOM manipulation and asynchronous communication techniques to update content on the same page, providing a smooth and fast user experience.

Advantages of SPAs:

- **Smooth user experience: ** They offer a faster and smoother experience for users, as content updates are performed dynamically and without interruption.
- **Interactivity and fast navigation: ** They allow faster and smoother navigation in the application, by only updating the necessary components and not loading additional pages.
- **Performance improvement: ** They improve the overall performance of the application and reduce load times by reducing the amount of data and resources that must be transmitted and processed in each interaction.
- **More efficient development: ** They allow for more efficient development by using modern frameworks and libraries, such as React, Angular or Vue.js, which offer a component-based approach and facilitate code reuse.

Disadvantages of SPAs:

- **Higher initial complexity: ** They may have a steeper learning curve due to the need to understand and work with additional frameworks and tools.
- **Higher memory consumption: ** They may require more memory in the browser due to the need to keep the entire state of the application in memory when browsing.
- **SEO and social sharing: ** Search crawlers and link previews may not correctly interpret the dynamic content of SPAs, which can present challenges related to SEO and social sharing.
- **JavaScript dependency: ** They require that users have Javascript enabled in their browser to work properly.

:: :tip Tip
It's important to carefully evaluate project needs and specific requirements before choosing to develop a SPA. While SPAs offer many advantages, they also present additional challenges that must be considered.
:::


### Implementing an SPA with Modyo

To implement a SPA with Modyo you must use the capabilities of [Modyo Connect] (/en/connect), within which you can configure object repositories and content distribution networks (CDNs) that will allow the deployment and subsequent maintenance of the SPA.

The changes are managed directly by the service's code repository and through the use of automations you can perform cache deployments and invalidations when incorporating or mixing changes.

:: :tip Modyo 10
In Modyo 10, the future version of the platform, there will be direct support from the web administration console for the deployment of static modules in the CDN. This will provide a static hosting system to work with SPAs and other types of libraries, leaving the platform in control of deployments and cache invalidations.
:::
