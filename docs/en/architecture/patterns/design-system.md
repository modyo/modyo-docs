---
search: true
---

# Design System

A design system is a set of resources and methodologies whose main objective is to facilitate the creation and coherent maintenance of the visual appearance and user experience in a brand, product, or service.

A design system offers reusable elements, such as components, patterns, and guides, that ensure a uniform visual identity across all applications and platforms.

Its purpose is to improve efficiency and consistency in the design and development process. It promotes collaboration between teams, avoids creation from scratch in each project, and strengthens alignment between design, development, and product teams.

### Advantages and Disadvantages of Using Design Systems

Advantages:

- **Consistency**: Maintains consistency across multiple products and platforms through a standard set of components and styles.
- **Efficiency**: Accelerates the work of teams by reusing existing components, avoiding designing and coding from scratch.
- **Collaboration**: Fosters collaboration between designers and developers by providing a common visual language and clear guidelines.
- **Usability and user experience**: Improves the user experience by avoiding the need to learn new interfaces for each product.
- **Maintainability**: Facilitates updates and bug fixes by using standardized components.

Disadvantages:

- **Time and resources**: Requires a significant investment of time and resources for its creation and maintenance, especially in the initial stages.
- **Limited flexibility**: Can be restrictive and limit creativity by requiring the use of standard components.
- **Adoption and resistance to change**: Consistent adoption by all team members can be a challenge.
- **Maintainability**: Requires an ongoing commitment to its maintenance and updating, as it must evolve with the products and user needs.
- **Over-standardization**: Extreme use can result in visually too similar products, lacking individuality.

A well-implemented and maintained design system can offer more advantages than disadvantages. However, it requires continuous investment and team commitment to ensure its long-term success.

### Types of Design Systems

Design systems can include style sheets, fonts, icons, JavaScript libraries, and web components. Depending on the artifacts that inform the design system, there are two possible implementations:

#### Library-type design system

This library-type design system approach is recommended for public sites, as it centralizes dependencies and facilitates their management.

To implement this type of design system, the ideal is to load the dependencies into Modyo, using the templates to save the style sheets, JavaScript libraries, and binary files as assets.

JavaScript libraries and style sheets must be added to a view (ideally in the site design) for consumption. To keep references to images or fonts updated, it is recommended to use a Liquid helper, which will ensure the correct URL in case of edits or changes.

#### Design system that includes components

If the design system includes components, the best option is to outsource the development and use the Modyo CLI to upload the widgets to the platform; this allows the design system to be consumed as a package from a public or private registry.

This includes snippets with CSS, HTML, and configurable parameters, as well as widgets with Liquid and HTML.

### Implementing a Design System

Implementing a design system on the web involves creating and maintaining a coherent set of design standards and reusable user interface (UI) components. To do this, follow these steps:

- **Define Design Standards**: Establish and document common visual elements (colors, fonts, spacing, iconography) in a style guide or brand manual.
- **Create Reusable UI Components**: Develop a library of UI components (buttons, forms, cards, navigation bars) that are easily reusable and modifiable.
- **Document the Use of Components**: Accompany the components with implementation guides, best practices, and usage examples.
- **Maintain the Design System**: Regularly update the design system to adapt to the changing needs of the web or application.
- **Implementation Tools**: Use tools like Storybook, Figma, Sketch, and Adobe XD to create, maintain, and share the design system.
- **Foster Collaboration and Adoption**: Ensure the development team is aligned with the design system and incorporates it into their workflow. Consider assigning a dedicated owner or team.

:::tip Tip
A design system is more than a collection of UI components and style guides; it is an integral part of the design and development process that fosters consistency and improves collaboration between designers and developers.

:::

### Implementing a design system with Modyo

There are different ways to implement design systems in Modyo, depending on the use case. Below, two approaches are described:

1. **Public sites**

For [public sites](/en/architecture/patterns/public-site), you can integrate the design system by leveraging the [Bootstrap](https://getbootstrap.com/) libraries included in each new project. The variables of these libraries are automatically applied to the CSS components, allowing for effective control over key aspects of the site and ensuring high consistency.

A variation of this first scenario involves outsourcing the design system to an external library, not managed directly on the site. This approach is known as _dynamic injection_ or _run-time_ injection of styles. To achieve this, you must incorporate the design system into the sites as an external library, hosted on a server to which the design system developers have access and can publish changes.

In this case, it is necessary to have good version control through well-defined URLs, since the browser cache or CDN systems can cause problems by invalidating and propagating the changes.

2. **Private sites**

For more sophisticated [private sites](/en/architecture/patterns/private-site), [micro frontends](/en/architecture/patterns/micro-frontend) can be used. In this scenario, the design system is implemented directly within the component, injecting the definitions statically or during _build time_ through versioned libraries in an intermediary repository. These libraries are imported as dependencies and are packaged with the micro frontend, allowing for progressive adaptation of changes.

:::tip Hybrid technique
A hybrid approach considers the combination of dynamic and static injection libraries, reusing code at a higher level and generating ubiquitous artifacts as needed by development teams.
:::