---
search: false
---

# Web performance

On the web, performance refers to the speed and efficiency with which a web page loads and responds to user actions. Good web performance is essential to provide an optimal user experience, as fast loading and response contribute to a smooth and satisfying experience.

To achieve optimal web performance, you can apply a variety of techniques and practices, including:

- **Image optimization:** Images are often the heaviest elements on a web page. Compressing and optimizing images reduces their size and improves loading times. Use efficient compression tools and formats, such as JPEG, PNG, and SVG, as needed.
- **Cache: ** Caching is a technique that allows static resources of a web page to be stored in the browser, such as CSS files, JavaScript and images. Use appropriate cache headers to instruct the browser to cache these resources. This prevents repeated downloads and speeds up page load times.
- **File minification and compression: ** Minification is the process of eliminating whitespace and comments, reducing the size of CSS and JavaScript files. In addition, GZIP compression further reduces the size of files transferred between the server and the client, improving load times.
- **Efficient rendering: ** Renders efficiently, prioritizing visible content and avoiding blocks in the main thread. Use techniques such as progressive loading to load visible content first, asynchronous loading, or deferred loading of JavaScript files for heavy scripts.
- **Server Optimization: ** Configure and optimize the server that hosts the site. Use server-side caching, response compression, and appropriate HTTP headers to improve efficiency and speed of server response.
- **Network optimization: ** To reduce network requests and minimize latency times, combine and reduce CSS and JavaScript files, use on-demand content loading, and take advantage of resource clustering techniques.
- **Detecting and resolving bottlenecks: ** Performs performance tests and monitoring to identify potential bottlenecks and areas for improvement. Tools like Lighthouse, PageSpeed Insights, and WebPageTest can help you evaluate the performance of a web page and provide specific recommendations.

Here are some techniques and practices for improving web performance. However, each site and web application has specific requirements and considerations, so it's important to evaluate and adjust these practices to the needs of the project.

### Web performance measurement

Web performance measurement is based on a variety of metrics and tools. Here are key things to consider:

- **Load Time: ** This is the time it takes for a page to fully load. You can measure it with Google PageSpeed Insights, GTmetrix or others.
- **Time to First Byte (TTFB) :** Measures the time from the initial request to the receipt of the first byte from the server. The shorter the TTFB, the better.
- **User Interaction Time (TBT) :** Indicates how much time is required for a page to load enough for the user to interact with it.
- **Largest Content Paint Time (LCP) :** Google metric that measures how long it takes to load the largest visible component, such as an image or block of text.
- **Cumulative Design Displacement (CLS):** Another Google metric, it measures how much elements on a page move during loading.
- **Speed Index :** Indicates how long it takes for a page to be displayed visually to the user.
- **Performance Score: ** Metrics from tools like Google's Lighthouse that provide an overall score based on multiple performance metrics.

In addition to these metrics, the ease of use and responsiveness of the design across different devices and screen sizes also influence the user's overall perception of performance. You can use tools such as Google Lighthouse, PageSpeed Insights, Webpagetest.org, and GTmetrix for more information and recommendations for improvement.