---
search: true
---

# Web Components

A web component is a web technology that allows the creation of customized and reusable elements in web applications. It is based on web standards such as HTML, CSS and JavaScript, and is used to encapsulate and extend the behavior of existing HTML elements.

Web components consist of three main technologies:

- **Custom Elements:** Allows the creation of custom HTML elements. These elements can have their own functionality and behavior defined in JavaScript.
- **Shadow DOM:** Provides an encapsulation scope for the styles and structure of a component. The Shadow DOM allows the styles and internal elements of a component to not affect or be affected by the rest of the page.
- **HTML Templates:** They allow you to define fragments of HTML code that can be cloned and used multiple times. Templates are used to define the initial structure of a component.

By combining these technologies, web components offer the ability to create custom components with their own behavior and appearance, which can be used in different parts of a web application or even in different projects.

Web components promote code reuse, easier maintenance and modularity in web development, as they allow the creation of independent and autonomous components that can be used in multiple contexts without conflict.

### How are Web Components implemented?

The technologies behind the Web Components are supported by web standards and are compatible with most modern browsers. However, you should be aware that some older browsers may not support all the functionality of the Web Components natively. In these cases, polyfills or specialized tools can be used to ensure compatibility with older versions of browsers.

Polymer and Stencil are two popular tools for developing Web Components, but they have different approaches and characteristics. Here are some of the key differences between Polymer and Stencil:

- **Focus and maturity:** Polymer is a library developed by Google that has been available for the longest time and has been used in production in numerous projects. It is designed to simplify the creation of Web Components and offers a wide range of features and functionality. Stencil, on the other hand, is a web component compiler that focuses on efficiency and performance. It is designed to generate native, performance-optimized web components.
- **Size and dependencies:** Polymer includes a comprehensive library that provides a wide range of features and abstractions for Web Components development. This means that the library size can be larger, especially if all the optional features and modules are included. Stencil, on the other hand, is lighter and focuses on generating optimized code without additional dependencies.
- **Browser support:** Polymer is designed to work on a wide range of modern browsers and uses polyfills to ensure compatibility in older browsers. Stencil focuses on generating native web components and takes advantage of the features of modern browsers, which may limit compatibility with older versions of browsers.
- **Programming language:** Polymer uses modern JavaScript and the class-based programming pattern to define components. Stencil, on the other hand, uses TypeScript, a superset of JavaScript that adds static typing features and other additional functionality.
- **Performance:** Stencil stands out for its focus on performance. It uses compilation and optimization techniques to generate highly efficient web components and take advantage of native browser features to achieve better performance. Polymer also performs well, but Stencil has been specifically optimized to deliver exceptional performance.

Both of these tools are powerful and suitable for different use cases. If you're looking for a complete, mature library with lots of features, Polymer can be a good choice. If you're concerned about performance and want to generate optimized, native web components, Stencil may be the right choice.

### How do you implement Web Components with Modyo?
Web Components are a technology that still lacks consistent support within the different browsers used by users, which is why their adoption must be aware of this.

Within Modyo, the most natural way to adopt Web Components occurs in the development of [micro frontends] (/es/architecture/patterns/micro-frontend), since having a building environment native to traditional Javascript tools, libraries such as [StencilJS] (https://stenciljs.com) or [Lit] (https://lit.dev) can be incorporated. This type of library will provide component definitions that can be packaged together with the micro frontend for deployment within the platform.

With respect to simpler Web sites or applications that are managed entirely within Modyo, the use of Web Components could be more restricted, since by acting on static HTML definitions processed [from the server side (SSR)] (/es/architecture/patterns/ssr), injecting the libraries mentioned above will not be as effective and will require some tricks to make them work, with the risk of generating sites that are difficult to maintain or with a more complex architecture than the problem they seek to solve. However, using the platform's SSR capabilities, you can create reusable elements using Liquid Snippets and variables, allowing you to solve common problems, in a more efficient and cleaner way to maintain.

:::tip Dynamic Framework
Modyo uses Web Components in its [Dynamic] development framework (/es/dynamic), using Stencil for the definition of components and React for their implementation, together with other libraries that accelerate and facilitate their adoption.
:::

