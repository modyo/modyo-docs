---
search: true
---

# Static Site Generation

Static Site Generation (SSG), also known as static site generation, is an approach to building websites in which pages are generated in advance during the compilation process and are stored as static HTML files on the server. Unlike traditional dynamic web applications, in which content is generated in real time on the server in response to every request, static sites generated in advance are served directly from the server without requiring any additional processing.

The Static Site Generation process involves the following steps:

- **Compilation:** During the compilation phase, static HTML pages are generated based on the data and templates defined in the project. This can be done using static tools and generators such as Gatsby, Hugo, Jekyll, Next.js, and others.
- **Content Generation:** During compilation, static generation tools take the defined data and templates and generate the corresponding static HTML pages for each path or section of the website. This can include generating dynamic content such as blogs, product listings, or category pages.
- **Deployment: ** Once static HTML pages have been generated, they can be uploaded to a web server for distribution. The web server can be as simple as a static file server or use hosting services such as Netlify, Amplify, Vercel or GitHub Pages.

Advantages of the SSG:

- **Fast performance:** By serving pre-generated static HTML pages, pre-generated static sites have fast performance and reduced load time, as they do not require real-time processing on the server.
- **Improved security:** By eliminating the need for a run-time application server, static sites reduce the attack surface and improve security by not allowing server-side code execution.
- **Scalability and resiliency:** Static sites can be easily served from a CDN (content delivery network), allowing for efficient global scalability and distribution. In addition, by not relying on dynamic resources, static sites can handle large volumes of traffic without degrading their performance.
- **Ease of maintenance: ** By generating content in advance, the development and maintenance process is simplified, as changes to the content or structure of the site can be made without requiring server or database operations.

However, it's important to note that static sites generated in advance may not be suitable for all use cases. If highly dynamic content or real-time interactions are required, it may be more appropriate to use approaches such as Server-Side Rendering (SSR) or single-page applications (SPA) to achieve the necessary interactivity.

Disadvantages of the SSG:

- **Limitations on dynamic interactivity: ** Because pages are generated in advance during compilation, the SSG has limitations in terms of dynamic interactivity compared to dynamic web applications. Functionality that requires real-time updates or complex interactions can be more difficult to achieve with an SSG approach.
- **Increased complexity in large-scale projects: ** In large, complex projects, maintaining and updating multiple static pages can become more difficult compared to a dynamic system. If there are a lot of internal links or frequent changes in the structure of the site, it may require careful planning and management to maintain consistency and efficiency in development.
- **Requires pre-compilation: ** With the SSG, pages must be pre-compiled before being served. This means that any changes to the content or structure of the site require a new compilation and a new deployment for the changes to be visible. If the changes must be reflected immediately without a previous compilation, it may be necessary to consider other approaches, such as Server-Side Rendering (SSR) or single-page applications (SPA).
- **Difficulty with dynamic and personalized content: ** If the site requires displaying dynamic or personalized content based on user interactions or external data in real time, the SSG may have limitations compared to more dynamic approaches. Pregenerating pages can make it difficult to include content that changes frequently or is customized based on specific conditions.
- **Increased compilation time in large projects: ** As the project grows in size and complexity, the time needed to compile pages can increase considerably. This can slow down the development workflow and require proper planning to manage build times in larger projects.

### How do you implement SSG in Modyo?

Within Modyo, you can implement sites that look static to the visitor, but that maintain their dynamic characteristics when it comes to modifying the content. This is achieved through the use of cache layers and content distribution systems that make it possible to match the advantages of the SSG, without losing the ability to publish changes easily and quickly, invalidating cached copies of information in real time.
