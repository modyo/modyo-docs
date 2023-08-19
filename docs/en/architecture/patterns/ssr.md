---
search: true
---

# Server Side Rendering

Server-Side Rendering (SSR), also known as server-side rendering, is a technique used in web development to generate and send to the client a pre-rendered version of a web page from the server, instead of sending only the JavaScript code and letting the client render it in the browser.

In the SSR, the server is responsible for processing the client's request and generating a complete response, including HTML, CSS and, in some cases, JavaScript content. This means that the server executes the application code and generates the final HTML that is sent to the browser.

Advantages of the SSR:

- **Search engine optimization:** By generating and sending a pre-rendered version of the page to the client, the content is more accessible to search engines, making it easier to index and rank in search results.
- **Better initial performance:** When receiving a pre-rendered version of the page from the server, the user quickly views the visual content without waiting for the JavaScript code to load and execute in the browser.
- **Compatibility with devices with limited resources:** The SSR can be beneficial for devices with limited resources, such as mobile devices or older browsers, as they reduce the processing load on the client.
- **Better SEO and social sharing:** By having pre-rendered content on the server, SSR pages behave more friendly to social networks and search crawlers by providing comprehensive, enriched content to share and crawl.

Disadvantages of the SSR:

- **Increased load on the server:** SSR means that the server must generate and send the full HTML content on every request, which can increase the load on the server, especially in applications with high request loads.
- **Lower interactivity:** Because content is pre-rendered on the server, subsequent interactions and updates to the page may require additional requests to the server, which may result in lower interactivity compared to single-page applications (SPAs).
- **Increased implementation complexity:** Implementing the SSR may require more complex configuration and management on the server to generate and maintain pre-rendered page views.

Server-Side Rendering is a technique that can be especially useful in scenarios where SEO and initial performance are critical considerations. However, it also requires a careful approach to architecture and implementation, as it involves a greater load on the server and can affect the interactivity of the application.

### How do you implement SSR in Modyo?

In Modyo, SSR is implemented using Liquid as a template language. Liquid is a template language created by Shopify that is commonly used to generate dynamic content in web applications and online stores. Within Modyo, Liquid is used as the base template language for all code processing within the platform.

:: :tip Liquid Performance
The templates processed with Liquid within Modyo are stored in different cache layers, making it possible to always deliver reduced response times, maintaining an excellent user experience and preserving the dynamic nature of the use of this type of template.
:::