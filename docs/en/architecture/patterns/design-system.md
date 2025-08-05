---
search: true
---

# Design System

A design system is a comprehensive set of resources and methodologies aimed at streamlining the creation and consistent maintenance of a brand's, product's, or service's visual design and user experience.

It provides reusable elements such as components, patterns, and guidelines, ensuring a uniform visual identity across all applications and platforms.

The primary purpose of a design system is to enhance efficiency and consistency in the design and development process. It fosters collaboration among teams, eliminates the need to create elements from scratch for every project, and strengthens alignment between design, development, and product teams.

### Advantages and Disadvantages of Using Design Systems

Advantages:

- **Consistency**: A design system ensures consistency across multiple products and platforms by providing a standard set of components and styles.
- **Efficiency**: Teams can work faster by reusing existing components, eliminating the need to design and code elements from scratch for each new project.
- **Collaboration**: It promotes better collaboration between designers and and developers by establishing a common visual language and clear implementation guidelines.
- **Usability and user experience**: The consistency provided by a design system improves the user experience, as users do not need to learn new interfaces for each product.
- **Maintainability**: Updates and bug fixes are easier to implement due to the use of standardized components.

Disadvantages:

- **Time and resources**: Creating and maintaining a design system requires a significant investment of time and resources, especially in the initial stages.
- **Limited flexibility**: Design systems can be restrictive, potentially limiting creativity by requiring the use of standard components.
- **Adoption and resistance to change**: Achieving consistent adoption and adherence to the design system by all team members can be challenging.
- **Maintenance**: It demands continuous commitment for its maintenance and updates, as it must evolve with product and user needs.
- **Over-standardization**: Taken to an extreme, it can lead to products that appear too similar, lacking individuality.

A well-implemented and maintained design system generally offers more advantages than disadvantages. However, it requires continuous investment and team commitment to ensure its long-term success.

### Types of Design Systems

Design systems can encompass style sheets, fonts, icons, JavaScript libraries, and web components. Depending on the artifacts that inform the design system, there are two possible implementations:

#### Library-type design system

This library-style design system approach is recommended for public sites, as it centralizes dependencies and simplifies their management.

To implement this type of design system, the ideal approach is to load dependencies into Modyo, using the templates to store style sheets, JavaScript libraries, and binary files as assets.

JavaScript libraries and style sheets should be added to a view (ideally in the site design) for consumption. To keep references to images or fonts updated, it is recommended to use a Liquid helper, which will ensure the correct URL in case of edits or changes.

#### Component-inclusive design system

If the design system includes components, the best option is to outsource development and use the Modyo CLI to upload widgets to the platform. This allows the design system to be consumed as a package from a public or private registry.

This includes snippets with CSS, HTML, and configurable parameters, as well as widgets with Liquid and HTML.

### Implementing a Design System

Implementing a web design system involves creating and maintaining a coherent set of design standards and reusable user interface (UI) components. To do this, follow these steps:

- **Define Design Standards**: Establish and document common visual elements (colors, fonts, spacing, iconography) in a style guide or brand manual.
- **Create Reusable UI Components**: Develop a library of UI components (buttons, forms, cards, navigation bars) that are easily reusable and modifiable.
- **Document Component Usage**: Accompany the components with implementation guides, best practices, and usage examples.
- **Maintain the Design System**: Regularly update the design system to adapt to the changing needs of the web or application.
- **Implementation Tools**: Utilize tools like Storybook, Figma, Sketch, and Adobe XD to create, maintain, and share the design system.
- **Foster Collaboration and Adoption**: Ensure the development team is aligned with the design system and incorporates it into their workflow. Consider assigning a dedicated owner or team.

:::tip Tip
A design system is more than a collection of UI components and style guides; it is an integral part of the design and development process that fosters consistency and improves collaboration between designers and developers.

:::

### Implementing a design system with Modyo

There are different ways to implement design systems in Modyo, depending on the use case. Below, two approaches are described:

1. **Public sites**

For [public sites](/en/architecture/patterns/public-site), you can integrate the design system by leveraging the [Bootstrap](https://getbootstrap.com/) libraries included in each new project. The variables of these libraries are automatically applied to the CSS components, allowing for effective control over key aspects of the site and ensuring high consistency.

A variation of this first scenario involves outsourcing the design system to an external library, not managed directly on the site. This approach is known as _dynamic injection_ or _run-time_ injection of styles. To achieve this, you must incorporate the design system into the sites as an external library, hosted on a server to which the design system developers have access and can publish changes.

In this case, it is necessary to have good version control through well-defined URLs, as browser cache or CDN systems can cause problems by invalidating and propagating changes.

2. **Private sites**

For more sophisticated [private sites](/en/architecture/patterns/private-site), [micro frontends](/en/architecture/patterns/micro-frontend) can be used. In this scenario, the design system is implemented directly within the component, injecting the definitions statically or during _build time_ through versioned libraries in an intermediary repository. These libraries are imported as dependencies and are packaged with the micro frontend, allowing for progressive adaptation of changes.

:::tip Hybrid technique
A hybrid approach considers the combination of dynamic and static injection libraries, reusing code at a higher level and generating ubiquitous artifacts as needed by development teams.
:::
