---
search: true
---

# Web Components

A web component is a web technology that allows you to create customized and reusable elements in web applications, based on web standards such as HTML, CSS and JavaScript. It serves to encapsulate and extend the behavior of existing HTML elements.

They are made up of three main technologies:

- **Custom Elements:** They allow the creation of custom HTML elements with functionality and behavior defined in JavaScript.
- **Shadow DOM:** Provides an encapsulation scope for the styles and structure of a component. The Shadow DOM allows the styles and internal elements of a component to not affect or be affected by the rest of the page.
- **HTML Templates:** Define fragments of HTML code that can be cloned and used multiple times. They are used to define the initial structure of a component.

By combining these technologies, Web Components allow the creation of custom components with their own behavior and appearance. These components can be used in different parts of a web application or in different projects.

In addition, they promote code reuse and facilitate maintenance and modularity in web development, since they allow the creation of independent and autonomous components that can be used in multiple contexts without conflict.

### Web Components Implementation

Web Components implementation is supported by web standards and is compatible with most modern browsers. However, for older browsers, you may require polyfills or specific tools to ensure compatibility.

There are different tools for developing Web Components, such as Polymer and Stencil, these are some of the key differences between them:

- **Focus and maturity:** Polymer, developed by Google, simplifies the creation of Web Components and offers a wide range of features. Stencil is a web component compiler that focuses on efficiency and performance.
- **Size and dependencies:** The Polymer library is larger, while Stencil is lighter and focuses on generating optimized code without additional dependencies.
- **Browser support:** Both frameworks are compatible with most modern browsers. However, Polymer uses polyfills to ensure compatibility with older browsers.
- **Programming language:** Polymer uses modern JavaScript and the class-based programming pattern to define components, Stencil uses TypeScript, a superset of JavaScript that adds static typing features and other functionality.
- **Performance:** Stencil is optimized for performance, while Polymer offers good performance without being specifically optimized for it.

Both tools are powerful and adapt to different use cases. If you need a complete and consolidated library with numerous features, Polymer is an excellent choice. On the other hand, if you prioritize performance and want to create highly optimized and native Web Components, Stencil may be the right choice.

### Implementing Web Components with Modyo
:::warning Important
Web Components are not yet consistently supported in all browsers.
:::

In Modyo, you can implement Web Components in the development of [micro frontends] (/en/architecture/patterns/micro-frontend), because micro frontends use traditional JavaScript tools, making it easier to incorporate libraries such as [StencilJS] (https://stenciljs.com) or [Lit] (https://lit.dev). This type of library provides component definitions that can be packaged together with the micro frontend to be deployed within the platform.

For simpler websites or web applications, that are managed entirely within Modyo, the use of Web Components may be more restricted. This is because Web Components act on static HTML definitions [from the server side (SSR)] (/es/architecture/patterns/ssr). In this case, it is necessary to inject the libraries into the HTML code. However, this can be complex and result in sites that are difficult to maintain.

An alternative for simpler web sites or applications is to use the platform's SSR capabilities to create reusable elements using Liquid Snippets and variables. This makes it possible to solve common problems in an efficient and clean way to maintain.

:: :tip Dynamic Framework
Modyo uses Web Components in its Dynamic development framework: Stencil for the definition of components and React for their implementation. In addition, it uses other libraries that accelerate and facilitate its adoption.
:::

