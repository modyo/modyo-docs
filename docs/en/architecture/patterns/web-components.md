---
search: true
---

# Web Components

A Web Component is a web technology that allows you to create custom, reusable elements in web applications, based on standards such as HTML, CSS, and JavaScript. Its purpose is to encapsulate and extend the behavior of existing HTML elements.

They are composed of three main technologies:

- **Custom Elements**: They allow you to create custom HTML elements with functionality and behavior defined in JavaScript.
- **Shadow DOM**: It provides an encapsulation scope for the styles and structure of a component, preventing the internal styles and elements from affecting or being affected by the rest of the page.
- **HTML Templates**: They define cloneable and reusable HTML code fragments, used for the initial structure of a component.

By combining these technologies, Web Components allow the creation of custom components with their own behavior and appearance. These components can be used in various parts of a web application or in different projects.

In addition, they promote code reuse and facilitate maintenance and modularity in web development, by allowing the creation of independent and autonomous components that can be used in multiple contexts without conflicts.

### Implementation of Web Components

The implementation of Web Components is supported by web standards and is compatible with most modern browsers. However, for older browsers, polyfills or specific tools may be required to ensure compatibility.

There are different tools for developing Web Components, such as Polymer and Stencil. Below are some key differences:

- **Focus and maturity**: Polymer (Google) simplifies the creation of Web Components with extensive features. Stencil is a web component compiler focused on efficiency and performance.
- **Size and dependencies**: The Polymer library is larger; Stencil is lighter and generates optimized code without additional dependencies.
- **Browser support**: Both are compatible with most modern browsers. Polymer uses polyfills for compatibility with older browsers.
- **Programming language**: Polymer uses modern JavaScript and class-based programming. Stencil uses TypeScript, a superset of JavaScript with static typing and other functionalities.
- **Performance**: Stencil is optimized for performance, while Polymer offers good performance without specific optimization.

Both tools are powerful and adapt to different use cases. If a complete and consolidated library with numerous features is required, Polymer is an excellent choice. If performance and the creation of highly optimized and native Web Components are prioritized, Stencil may be the most appropriate option.

### Implementation of Web Components with Modyo
:::warning Important
Web Components do not yet have consistent support in all browsers.
:::

In Modyo, Web Components can be implemented in the development of [micro frontends](/en/architecture/patterns/micro-frontend). Since micro frontends use traditional JavaScript tools, it is easy to incorporate libraries such as [StencilJS](https://stenciljs.com) or [Lit](https://lit.dev). These libraries provide component definitions that can be packaged with the micro frontend for deployment on the platform.

For simpler sites or web applications, managed entirely in Modyo, the use of Web Components may be more restricted. This is because Web Components act on static HTML definitions [from the server side (SSR)](/en/architecture/patterns/ssr), requiring the injection of libraries into the HTML code, which can be complex and result in difficult-to-maintain sites.

An alternative for simpler websites or web applications is to use the platform's SSR capabilities to create reusable elements using Liquid Snippets and variables. This allows for solving common problems efficiently and maintainably.