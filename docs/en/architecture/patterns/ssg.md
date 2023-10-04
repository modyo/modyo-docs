---
search: true
---

# Static Site Generation

Static Site Generation (SSG) is an approach to web development in which pages are created in advance during the compilation process and are stored as static HTML files on the server. Unlike traditional web applications, where content is generated in real-time in response to each request, pre-generated static sites are served directly from the server without the need for additional processing.

The SSG process involves the following steps:

- **Compilation:** Static HTML pages are generated based on the data and templates defined in the project. This can be achieved using static tools and generators such as Gatsby, Hugo, Jekyll, Next.js, and others.
- **Content Generation:** During compilation, static generation tools take the defined data and templates and generate the corresponding static HTML pages for each path or section of the website. This can include generating dynamic content such as blogs, product listings, or category pages.
- **Deployment:** Once the static HTML pages are generated, they are uploaded to a web server for distribution. The web server can be as simple as a static file server or use hosting services such as Netlify, Amplify, Vercel or GitHub Pages.

Advantages of SSG:

- **Fast performance:** Faster performance and reduced load time, as it does not require real-time processing on the server.
- **Improved security:** Reduces the attack surface and improves security by not allowing server-side code execution.
- **Scalability and resiliency:** It can be easily served from a content delivery network (CDN), allowing for efficient global scalability and distribution. In addition, by not relying on dynamic resources, static sites can handle large volumes of traffic without degrading their performance.
- **Ease of maintenance: ** The development and maintenance process is simplified, as changes to the content or structure of the site can be made without requiring server or database operations.

However, it's important to note that SSGs may not be suitable for all use cases. If highly dynamic content or real-time interactions are required, it may be more appropriate to use approaches such as Server-Side Rendering (SSR) or single-page applications (SPA) to achieve the necessary interactivity.

Disadvantages of SSG:

- **Limitations on dynamic interactivity: ** Functionality that requires real-time updates or complex interactions can be more difficult to achieve.
- **Increased complexity in large-scale projects: ** In large, complex projects, maintaining and updating multiple static pages can be more difficult compared to a dynamic system. In cases where there are numerous internal links or frequent changes in the structure of the site, careful planning and management is required to maintain consistency and efficiency in development.
- **Prior compilation required: ** Pages must be pre-compiled before being served, which means that any changes to the content or structure of the site require recompilation and deployment for the changes to be visible. If the changes must be reflected immediately without a previous compilation, it may be necessary to consider other approaches, such as Server Side Rendering (SSR) or single-page applications (SPA).
- **Difficulty with dynamic and personalized content: ** It can make it difficult to include dynamic or personalized content based on user interactions or external data in real time.
- **Increased compilation time in large projects: ** As the project grows in size and complexity, the time needed to compile pages can increase considerably, slowing down the development workflow, so we recommend proper planning to manage compilation times in larger projects.


### SSG implementation in Modyo

Within Modyo, you can implement sites that look static to the visitor, but that maintain their dynamic characteristics when it comes to modifying the content. This is achieved through the use of cache layers and content distribution systems that take advantage of the SSG, without losing the ability to publish changes easily and quickly, invalidating cached copies of information in real time.