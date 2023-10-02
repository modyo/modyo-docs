---
search: true
---

# Server Side Rendering

Server-Side Rendering (SSR) or server-side rendering, is a web development technique for generating and sending a pre-rendered version of a web page to the client from the server, instead of sending only the JavaScript code and letting the client render it in the browser.

In SSR, the server is responsible for processing the client's request and generating a complete response, including HTML, CSS and, in some cases, JavaScript content. This means that the server executes the application code and generates the final HTML that is sent to the browser.

Advantages of SSR:

- **Search engine optimization:** Pre-rendered content is more accessible to search engines, making it easier to index and rank in search results.
- **Better initial performance:** The user quickly views visual content without waiting for the JavaScript code to load and execute in the browser.
- **Compatibility with devices with limited resources:** Reduces the processing load on the client, which is beneficial on mobile devices or older browsers.
- **Better SEO and social media sharing: ** It's more friendly to social networks and search crawlers, providing rich, comprehensive content to share and track.

Disadvantages of SSR:

- **Increased load on the server:** SSR means that the server must generate and send the full HTML content on every request, which can increase the load on the server, especially in applications with high request loads.
- **Lower interactivity: ** Subsequent interactions and updates to the page may require additional requests to the server, which may result in less interactivity compared to single-page applications (SPA).
- **Increased implementation complexity: ** Implementing the SSR may require more complex configuration and management on the server.

Server Side Rendering is a useful technique in scenarios where SEO and initial performance are critical. However, its implementation requires careful architecture and execution due to its impact on the server load and the interactivity of the application.

### SSR implementation in Modyo

In Modyo, SSR is achieved using Liquid as a template language. Liquid, created by Shopify, is a template language widely used to generate dynamic content in web applications and online stores. Within Modyo, Liquid is the basis for code processing on the platform.

:: :tip Liquid Performance
Templates processed with Liquid in Modyo are stored in several cache layers, ensuring reduced response times and an exceptional user experience, while maintaining the dynamic nature of these templates.
:::