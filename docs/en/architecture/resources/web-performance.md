---
search: false
---

# Web Performance

Web performance refers to the speed and efficiency with which a web page loads and responds to user actions. Good performance is essential for an optimal user experience, as speed in loading and responses contribute to a fluid and satisfactory interaction.

To achieve optimal web performance, various techniques and practices can be applied, including:

- **Image optimization**: Compressing and optimizing images (JPEG, PNG, SVG) reduces their size and improves loading times.
- **Cache**: Storing static resources (CSS, JavaScript, images) in the browser through appropriate cache headers, avoiding repeated downloads and accelerating loading.
- **File minification and compression**: Eliminating white spaces and comments (minification) and using GZIP compression to reduce the size of CSS and JavaScript files, improving transfer times.
- **Efficient rendering**: Prioritizing visible content and avoiding blockages in the main thread. Using progressive loading, asynchronous loading, or deferred loading for heavy scripts.
- **Server optimization**: Configuring and optimizing the server with cache, response compression, and appropriate HTTP headers to improve efficiency and response speed.
- **Network optimization**: Reducing network requests and minimizing latency by combining and reducing CSS and JavaScript files, using on-demand loading and resource grouping.
- **Detection and resolution of bottlenecks**: Performing performance tests and monitoring to identify bottlenecks. Tools like Lighthouse, PageSpeed Insights, and WebPageTest can help evaluate performance and offer recommendations.

These are some techniques and practices to improve web performance. However, each site and application has specific requirements, so it is important to evaluate and adjust these practices to the needs of the project.

### Web performance measurement

Web performance measurement is based on various metrics and tools. Key aspects to consider:

- **Load Time**: Total time it takes for a page to load completely (measurable with Google PageSpeed Insights, GTmetrix, etc.).
- **Time to First Byte (TTFB)**: Measures the time from the initial request to the receipt of the first byte from the server. A shorter TTFB indicates better performance.
- **User interaction time (TBT)**: Indicates the time required for a page to be interactive for the user.
- **Largest Contentful Paint (LCP)**: Google metric that measures the time it takes to load the largest visible component (e.g., image, text block).
- **Cumulative Layout Shift (CLS)**: Another Google metric that measures the unexpected movement of the elements of a page during loading.
- **Speed Index**: Indicates the time it takes for a page to be visually displayed to the user.
- **Performance score**: General metric provided by tools like Google Lighthouse, based on multiple performance metrics.

In addition to these metrics, the ease of use and responsiveness of the design on different devices and screen sizes also influence the perception of performance. Tools like Google Lighthouse, PageSpeed Insights, WebPageTest.org, and GTmetrix offer detailed information and improvement recommendations.
