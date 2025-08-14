---
search: false
---

# Web Performance

Web performance refers to the speed and efficiency with which a web page loads and responds to user actions. Good performance is essential for an optimal user experience, as rapid loading and responsiveness contribute to a fluid and satisfying interaction.

To achieve optimal web performance, various techniques and practices can be applied, including:

- **Image optimization**: Compressing and optimizing images (JPEG, PNG, SVG) reduces their size and improves loading times.
- **Caching**: Storing static resources (CSS, JavaScript, images) in the browser through appropriate cache headers, preventing repeated downloads and accelerating loading.
- **File minification and compression**: Eliminating whitespace and comments (minification) and using GZIP compression to reduce the size of CSS and JavaScript files, thereby improving transfer times.
- **Efficient rendering**: Prioritizing visible content and avoiding blockages in the main thread. This includes using progressive loading, asynchronous loading, or deferred loading for heavy scripts.
- **Server optimization**: Configuring and optimizing the server with caching, response compression, and appropriate HTTP headers to improve efficiency and response speed.
- **Network optimization**: Reducing network requests and minimizing latency by combining and reducing CSS and JavaScript files, using on-demand loading, and resource grouping.
- **Bottleneck detection and resolution**: Performing performance tests and monitoring to identify bottlenecks. Tools like Lighthouse, PageSpeed Insights, and WebPageTest can help evaluate performance and offer recommendations.

These are some techniques and practices to improve web performance. However, each site and application has specific requirements, so it is important to evaluate and adjust these practices to the needs of the project.

### Web performance measurement

Web performance measurement relies on various metrics and tools. Key aspects to consider:

- **Load Time**: The total time it takes for a page to load completely (measurable with Google PageSpeed Insights, GTmetrix, etc.).
- **Time to First Byte (TTFB)**: Measures the time from the initial request to the receipt of the first byte from the server. A shorter TTFB indicates better performance.
- **User Interaction Time (TBT)**: Indicates the time required for a page to become interactive for the user.
- **Largest Contentful Paint (LCP)**: A Google metric that measures the time it takes to load the largest visible component (e.g., an image, a text block).
- **Cumulative Layout Shift (CLS)**: Another Google metric that measures the unexpected movement of page elements during loading.
- **Speed Index**: Indicates the time it takes for a page to be visually displayed to the user.
- **Performance score**: A general metric provided by tools like Google Lighthouse, based on multiple performance metrics.

In addition to these metrics, the ease of use and responsiveness of the design on different devices and screen sizes also influence the user's overall perception of performance. Tools like Google Lighthouse, PageSpeed Insights, WebPageTest.org, and GTmetrix offer detailed information and improvement recommendations.