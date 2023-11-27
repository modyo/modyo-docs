---
search: true
---

# Components

Web components are autonomous, reusable units of a user interface. They encapsulate not only their structure, such as the HTML elements, their arrangement, and how the data will be presented, but also their style. They define the visual appearance of the component, such as colors, typography and margins, etc. In addition, components also include their behavior or logic, such as the handling of events, the management of states and specific actions.

Components allow you to divide a user interface into smaller, more manageable and reusable pieces, making it easier to develop, maintain and scale an application.

### Stencil and React

Dynamic Framework offers a consistent API for developers. Their web components were implemented using [Stencil](https://stenciljs.com/) for lower-level definitions and [React](https://react.dev/) for abstractions with more complex requirements, such as state management. Thus maintaining a Micro frontend developed in React without additional special requirements.

Although the implementation of Dynamic Framework involves the use of two individual libraries, this duality is imperceptible to the developer, which means that its integration into the development of a Micro frontend created in React does not impose special requirements, beyond importing and using it.