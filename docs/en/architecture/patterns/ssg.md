---
search: true
---

# Static Site Generation (SSG)

Static Site Generation (SSG) is a web development approach where pages are created during compilation and stored as static HTML files on the server. Unlike traditional web applications that generate content in real time, SSG sites are served directly without additional processing.

The SSG process involves the following steps:

- **Compilation**: Generation of static HTML pages from data and templates (e.g., with Gatsby, Hugo, Jekyll, Next.js).
- **Content generation**: Static generation tools create the static HTML pages for each path or section of the site, including dynamic content such as blogs or product listings.
- **Deployment**: The static HTML pages are uploaded to a web server for distribution (e.g., static file server, Netlify, Amplify, Vercel, GitHub Pages).

Advantages of SSG:

- **Fast performance**: Reduced loading time by not requiring real-time processing on the server.
- **Improved security**: Reduces the attack surface by not allowing server-side code execution.
- **Scalability and resilience**: Easily served from a CDN, allowing for efficient global scalability and distribution. By not depending on dynamic resources, they handle large volumes of traffic without degrading performance.
- **Ease of maintenance**: Simplifies development and maintenance, as changes in content or structure do not require server or database operations.

However, SSGs may not be suitable for all use cases. If highly dynamic content or real-time interactions are required, approaches such as Server-Side Rendering (SSR) or Single-Page Applications (SPA) may be more appropriate to achieve the necessary interactivity.

Disadvantages of SSG:

- **Limitations in dynamic interactivity**: Difficulty in achieving functionalities that require real-time updates or complex interactions.
- **Greater complexity in large-scale projects**: In large and complex projects, maintaining and updating multiple static pages can be more difficult than with a dynamic system. It requires careful planning and management to maintain consistency and efficiency in the face of numerous internal links or frequent changes in the site structure.
- **Need for prior compilation**: Any change in the content or structure of the site requires a new compilation and deployment to be visible. If the changes must be reflected immediately, other approaches such as Server-Side Rendering (SSR) or Single-Page Applications (SPA) should be considered.
- **Difficulty with dynamic and personalized content**: It can make it difficult to include dynamic or personalized content based on user interactions or real-time external data.
- **Longer compilation time in large projects**: As the project grows, the compilation time can increase considerably, slowing down the development workflow. Proper planning is recommended to manage these times.


### Implementation of SSG in Modyo

In Modyo, you can implement sites that, although static to the visitor, maintain dynamic characteristics when modifying the content. This is achieved through cache layers and content distribution systems that take advantage of the benefits of SSG, without losing the ability to publish changes quickly and easily, invalidating the cached copies in real time.
