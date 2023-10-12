---
search: true
---

# Themes
In developing user experiences, the look and feel of an application plays a crucial role. However, designing and maintaining a coherent set of styles can be a complex and laborious task. That's why it's critical to have efficient ways to customize the aesthetics of an application in a consistent and efficient way.

Dynamic Framework offers two levels of customization:
- **Themes:** A list of variables that define the style of the components and that constitute what we understand as a _theme_.
- **Components:** Customizing Dynamic Framework components through parameters, properties, or custom markup.

In this section, we'll dive deeper into the first level. We will explain the concept of the theme and the variables that make it possible.

### What is a theme?
In the context of Dynamic Framework, a theme refers to customizing the visual appearance and style of elements, by modifying colors, typography, spacing, and components.

Dynamic Framework facilitates this process by providing a solid, predefined foundation that can be adapted to the needs and visual identity of an organization.

In the context of Dynamic Framework, a theme is based on its CSS variable system, which allows you to easily modify predefined styles to create a custom theme.

With a theme we can get:
- **Visual consistency:** By ensuring that all elements of the application follow a consistent style, thus improving the user experience.
- **Effective customization:** Adjusting specific variables and properties that allow an easy and quick adaptation of the application style, aligning it with brand identity and design requirements.
- **Development efficiency:** Through a strong foundation that saves time and effort in creating styles from scratch. In addition, with the right architecture, global changes can be implemented quickly.
- **Scalability:** Theme customization facilitates scalable and adaptable development for different projects and requirements.

### Structure of a Theme

- **Global variables:** In addition to the variables provided by the Bootstrap library, which is used as a base, Dynamic Framework adds an additional set of global CSS variables to the `_variables.css` file. These variables control different aspects such as colors, typography, spacing, font sizes and more, which will modify all components.
- **Overwriting variables:** To customize the framework, you can overwrite global variables. By modifying these variables, you change the styles throughout the library that are based on them.

The variables are organized into categories such as colors, typography, spacing and borders, allowing you to identify which variables are available and modify them according to your needs. For example, to change the main colors, modify the `$firstary` variable with the new color value.

:::tip Order of Precedence
It's important to note that, by design, CSS definitions have an order of precedence. Therefore, if a Micro frontend changes the value of a global variable, this new definition will take precedence over the one defined in the theme.
:::

### CSS variables

Bootstrap provides an extensive list of CSS variables that apply to the `:root` element of a document. These variables are (documented on their website) [https://getbootstrap.com/docs/5.3/customize/css-variables/].

Dynamic Framework introduces specific classes for each component, following the same naming convention as Bootstrap, which uses the `bs-` prefix. This approach avoids potential conflicts with third-party libraries. You can check the variables available for each component (documented in the Dynamic Framework Storybook) [https://react.dynamicframework.dev/].

This approach allows new variables to be added to the `:root` element to control more specific aspects. This is especially useful when it is necessary to incorporate these variables into the context of the topic.
