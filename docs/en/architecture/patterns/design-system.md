---
search: true
---

# Design System

A design system is a methodology and set of resources that allows the visual appearance and user experience of a brand, product or service to be created and maintained in a coherent and efficient way. The design system provides a series of reusable elements, such as components, patterns, guidelines, and design principles, that are used to build interfaces and maintain a consistent visual identity across applications and platforms.

The primary objective of a design system is to improve efficiency and consistency in the design and development process, while ensuring a unified, high-quality user experience. By using predefined components and patterns, designers and developers can accelerate the process of creating interfaces, avoiding the need to design and develop from scratch every time.

In addition, a design system promotes collaboration and alignment between design, development, and product teams, by providing a common base of elements and guidelines that everyone can follow. This helps maintain visual and interaction consistency across applications and helps build a strong and recognizable brand identity.

### Advantages and Disadvantages of Using Design Systems

A design system can offer multiple benefits, but it also has its own challenges. Here are some of the pros and cons:

Advantages:

- **Consistency**: A design system helps maintain consistency across multiple products and platforms by providing a standard set of components and styles.
- **Efficiency**: Teams can work faster by reusing existing components, instead of designing and coding elements from scratch for each new project.
- **Collaboration**: Encourages better collaboration between designers and developers, by providing a common visual language and clear guidelines for implementation.
- **Usability and User Experience**: The consistency provided by a design system can lead to a better user experience, as users don't have to learn new interfaces for each product.
- **Maintainability**: Updates and bug fixes are easier to implement through the code base when using standardized components.

Disadvantages:

- **Time and Resources**: Creating and maintaining a design system can require a significant investment of time and resources, especially in the early stages.
- **Limited Flexibility**: Design systems can be restrictive and limit creativity by requiring the use of standard components.
- **Adoption and Resistance to Change**: It can be a challenge to get all team members to consistently adopt and follow the design system.
- **Maintenance**: As products and user needs evolve, the design system must also evolve. This requires an ongoing commitment to maintaining and updating the system.
- **Over-standardization**: If not handled properly, there could be over-standardization, which could lead to products that look and feel too similar, and lack individuality.

A well-implemented and maintained design system can offer more advantages than disadvantages. However, it requires continuous investment and team commitment to ensure its long-term success.

### Design System Types

Design systems can include style sheets, typefaces, icons, JavaScript libraries, or even web components. Depending on the artifacts that inform this design system, we can distinguish two possible implementations:

#### Bookcase-like design system

In the case of a public site, this is the most recommended type of design system, as we recommend in the “Using widgets on public sites” section of this document. To implement this type of design system, the ideal is to load dependencies into Modyo, using templates to save style sheets, JavaScript libraries and binaries as assets. In the case of JavaScript libraries and style sheets, to make them available on the site, they must be added to a view so that they can be consumed, ideally the layout of the site. It is important to remember that you must update the references of images or fonts that are made in these files. The best way to do this is to use a Liquid helper that will keep the URL up to date if the image or typography is edited or changed.

#### Design system that includes components

If the design system includes components, the best option is to outsource the development and use the Modyo CLI to push the widgets to the platform. Outsourcing development allows us to consume the design system as a package from a public or private registry.

Snippets, with CSS, HTML, parameterizable. Widgets with liquid and HTML

### Implementing a Design System

Implementing a web design system involves creating and maintaining a coherent set of design standards and reusable user interface (UI) components. Here are some general steps you could take:

- **Define Design Standards**: This can include colors, typographies, spacing, iconography, and any other visual element that will be common throughout your website or application. These standards must be documented in a style guide or brand manual.
- **Create Reusable UI Components**: Design systems often include a library of UI components that can be reused throughout the website or application. This can include buttons, forms, cards, navigation bars, and other common elements. These components must be created in a way that they are easily reusable and changeable.
- **Documenting the Use of Components**: Along with creating components, you must document how these components should be used. This can include implementation guides, best practices, and examples of use.
- **Maintaining the Design System**: A design system is not a one-time project. It should be maintained and updated as the needs of your website or application change. This may require regular reviews and updates of system components and standards.
- **Implementation Tools**: There are tools such as Storybook, Figma, Sketch, and Adobe XD that make it easy to create, maintain and share design systems.
- **Collaboration and Adoption**: You must ensure that the development team is aligned with the design system and adopts it in their workflow. In addition, it can be useful to have a dedicated owner or team that oversees and maintains the design system.

Remember, a design system is more than just a set of UI components and style guides. It's an integral part of the design and development process that helps maintain consistency, improves efficiency, and encourages better collaboration between designers and developers.

### How do you implement a design system with Modyo?

In Modyo, there are different ways to implement design systems, depending on the use case you need to work with. Although, a good design system begins its existence away from development, on platforms such as Figma or Sketch, in this guide we will refer only to their technical implementations.

The first of these, and the simplest, is in the [public sites] scenario (/es/architecture/patterns/public-site). In this scenario, the design system can be implemented within the platform using the [Bootstrap] libraries (https://getbootstrap.com/) with which each new project is initialized, plus the variable support that is present in it. In this way, the design system can be implemented with a series of variables that take control of the most important aspects of the site, which are immediately spread to all the CSS components, achieving a high level of consistency between the components.

A variant of this first scenario could be the outsourcing of the design system to an external library, which is not directly governed on site. This is known as dynamic injection or in the “runtime” of styles, and to achieve this, the design system must be incorporated into sites as an external library, hosted on a server to which the developers of the design system have access and can publish their changes. Due to the nature of how the Web operates, in this case it will be necessary to have good version control through well-defined URLs, since the browser's own cache or CDN systems could cause problems when it comes to invalidating and propagating changes.

A second design system use case applies when working with [private sites] (/en/architecture/patterns/private-site). Although the technique explained above applies in the same way here, in the case of more sophisticated private sites within Modyo, [micro frontends] (/es/architecture/patterns/micro-frontend) will probably be used. In the case of micro frontends, the implementation of the design system can be implemented directly within the component, injecting the definitions statically or at “build time”, through versioned libraries of the design system that must live within an intermediate repository. These libraries are imported as a dependency within the micro frontend and are packaged together with it, allowing each micro frontend to have different versions of the library, adapting changes to it progressively.

:: :tip Hybrid technique
A good design system could be packaged in different ways, considering a dynamic and a static injection library, reusing code at a higher level and generating ubiquitous artifacts according to the needs of the development teams.
:::
