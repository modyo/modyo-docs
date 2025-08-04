---
search: true
---

# Server-Side Rendering (SSR)

Server-Side Rendering (SSR) is a web development technique that generates and sends the client a pre-rendered version of a web page from the server, instead of the client rendering it in the browser from JavaScript code.

In SSR, the server processes the client's request and generates a complete response (HTML, CSS, and, in some cases, JavaScript). This implies that the server executes the application code and produces the final HTML that is sent to the browser.

Advantages of SSR:

- **Search engine optimization**: Pre-rendered content is more accessible to search engines, facilitating its indexing and positioning.
- **Better initial performance**: The user visualizes the content quickly, without waiting for the JavaScript to load and execute in the browser.
- **Compatibility with limited resource devices**: Reduces the processing load on the client, which is beneficial for mobile devices or old browsers.
- **Better SEO and social media sharing**: More friendly with social networks and search crawlers, by providing complete and enriched content for sharing and tracking.

Disadvantages of SSR:

- **Greater server load**: The server must generate and send the complete HTML content in each request, which can increase its load, especially in applications with high demand.
- **Less interactivity**: Subsequent interactions and updates may require additional requests to the server, resulting in less interactivity compared to Single-Page Applications (SPA).
- **Greater implementation complexity**: The implementation of SSR may require more complex configuration and management on the server.

SSR is a useful technique in scenarios where SEO and initial performance are critical. However, its implementation requires care in the architecture and execution due to its impact on the server load and the interactivity of the application.

### SSR implementation in Modyo

In Modyo, SSR is achieved using Liquid as a template language. Liquid, created by Shopify, is a widely used template language for generating dynamic content in web applications and online stores. In Modyo, Liquid is the basis for code processing on the platform.

:::tip Liquid Performance
Templates processed with Liquid in Modyo are stored in several cache layers, which guarantees reduced response times and an exceptional user experience, maintaining the dynamic nature of these templates.
:::
