---
search: true
---

# Design System

A design system is a set of resources and methodologies with the primary objective of making it easier to create and consistently maintain the visual design and user experience of a brand, product, or service.

A design system offers reusable elements, such as components, patterns, and guides, that ensure a consistent visual identity across applications and platforms.

Its main purpose is to improve efficiency and consistency in the design and development process. To achieve this, it promotes collaboration between teams and avoids the need to create everything from scratch in every project. It also strengthens alignment between design, development, and product teams.

### Advantages and Disadvantages of Using Design Systems

Advantages:

- **Consistency:** A design system maintains consistency across multiple products and platforms by providing a standard set of components and styles.
- **Efficiency:** Teams can work faster by reusing existing components, instead of designing and coding elements from scratch for each new project.
- **Collaboration:** Encourages better collaboration between designers and developers, by providing a common visual language and clear guidelines for implementation.
- **Usability and user experience:** The consistency provided by a design system improves the user experience, avoiding the need to learn new interfaces for each product.
- **Maintainability:** Updates and bug fixes are easier to implement using standardized components.

Disadvantages:

- **Time and resources:** Creating and maintaining a design system requires a significant investment of time and resources, especially in the early stages.
- **Limited flexibility:** Design systems can be restrictive and limit creativity by requiring the use of standard components.
- **Adoption and resistance to change: ** It can be a challenge to get all team members to consistently adopt and follow the design system.
- **Maintainability: ** The design system must evolve with changes in products and user needs, requiring a continuous commitment to its maintenance and updating.
- **Over-standardization: ** Taken to the extreme, it can lead to products that look and feel too similar, without individuality.

A well-implemented and maintained design system can offer more advantages than disadvantages. However, it requires continuous investment and team commitment to ensure its long-term success.

### Design System Types

Design systems can include style sheets, typefaces, icons, JavaScript libraries, and web components. Depending on the artifacts that inform the design system, there are two possible implementations:

#### Bookcase-like design system

This library-style design system approach is recommended for public sites, as it centralizes dependencies and makes them easier to manage.

To implement this type of design system, the ideal is to load dependencies into Modyo, using templates to save style sheets, JavaScript libraries and binary files as assets.

  For JavaScript libraries and style sheets, it is necessary to add them to a view, ideally in the design of the site, to make them available on the site and that they can be consumed. It's important to keep the references to images or fonts you make in those files up to date. The most effective way to achieve this is by using a Liquid helper, which will ensure that the URL is kept up to date in case of edits or changes to images or typographies.

#### Design system that includes components

If the design system includes components, the best option is to outsource the development and use the Modyo CLI to upload the widgets to the platform; this allows the design system to be consumed as a package from a public or private registry.

This includes snippets with CSS, HTML and configurable parameters, as well as widgets with Liquid and HTML.

### Implementing a Design System

Implementing a web design system involves creating and maintaining a coherent set of design standards and reusable user interface (UI) components. To do this, follow these steps:

- **Define Design Standards: ** Include colors, typographies, spacing, iconography, and other common visual elements throughout your website or application. Document these standards in a style guide or brand manual.
- **Create Reusable UI Components: ** Develop a library of UI components that you can reuse throughout the web or application, such as buttons, forms, cards, and navigation bars. These components must be created in a way that they are easily reusable and changeable.
- **Documenting the Use of Components: ** Accompany the creation of components with implementation guides, best practices, and examples of use.
- **Maintain the Design System: ** Maintain and update the design system as the needs of your website or application change. It regularly reviews and updates system components and standards.
- **Implementation Tools: ** Use tools such as Storybook, Figma, Sketch, and Adobe XD to create, maintain, and share design systems.
- **Collaboration and Adoption: ** Make sure that the development team is aligned with the design system and incorporates it into their workflow. Consider assigning a dedicated owner or team to oversee and maintain the design system.

:: :tip Tip
A design system is more than a collection of UI components and style guides; it's an integral part of the design and development process that promotes consistency and improves collaboration between designers and developers.

:::

### Implementing a Design System with Modyo

There are different ways to implement design systems in Modyo, depending on the use case. Two approaches are described below:

1. **Public Sites**

For [public sites] (/en/architecture/patterns/public-site) you can integrate the design system into the platform by taking advantage of the [Bootstrap] libraries (https://getbootstrap.com/) that are included in each new project. In addition, you can use the variables that are present in these libraries, which are automatically applied to all CSS components. This allows you to have effective control over key aspects of the site and to ensure high consistency between components.

A variant of this first scenario involves the outsourcing of the design system to an external library, not managed directly on site. This approach is known as _dynamic injection_ or _at run-time _ of styles. To achieve this, you must incorporate the design system into sites as an external library, hosted on a server to which the developers of the design system have access and can publish changes.

In this case, it is necessary to have good version control through well-defined URLs, since the browser cache or CDN systems can cause problems by invalidating and propagating changes.

2. **Private Sites**

For more sophisticated [private sites] (/es/architecture/patterns/private-site) you can use [micro frontends] (/es/architecture/patterns/micro-frontend). In this scenario, you can implement the design system directly inside the component, injecting the definitions statically or during the construction process or _build time_ using versioned libraries within an intermediate repository. These libraries are imported as dependencies and are packaged together with the micro frontend, allowing changes to be progressively adapted.

:: :tip Hybrid technique
A hybrid approach considers the combination of dynamic and static injection libraries, reusing code at a higher level and generating ubiquitous artifacts as needed by development teams.
:::
