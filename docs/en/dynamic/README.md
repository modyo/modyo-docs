# Dynamic Framework

React component framework specialized for financial applications, built on Bootstrap 5 and optimized for micro frontends with Modyo platform.

:::tip Version 2.0 Available
Dynamic UI 2.0 brings a new visual language, Lucide icons, and 8 new components.
- [See what's new in v2.0](whats-new-v2.html)
- [Migration guide](getting-started/migration-v2.html)
:::

## Technical Features

### Components
- **45+ React components** specialized for banking
- **Design system** based on Bootstrap 5
- **Full TypeScript** support
- **WCAG 2.1 accessibility** integrated

### Architecture
- **Micro Frontends** with Module Federation
- **API-first** design
- **Lazy loading** and code splitting
- **State management** with Context API

## Technical Documentation

### Architecture
- **[Technical Overview](overview.html)** - Architecture, technologies and design patterns

### [Getting Started](getting-started/)
- **[Installation](getting-started/installation.html)** - Environment setup
- **[First App](getting-started/first-app.html)** - Step-by-step tutorial
- **[Project Structure](getting-started/project-structure.html)** - Project organization

### [Development](development/)
- **[Components](development/components.html)** - Catalog and APIs
- **[React Patterns](development/react-integration.html)** - Hooks and patterns
- **[API Integration](development/api-integration.html)** - Backend connectivity
- **[Widgets](development/widgets.html)** - Modular components
- **[Experiences](development/experiences.html)** - Pre-built templates

### [Customization](customization/)
- **[Theming](customization/theming.html)** - Variables and themes
- **[Styling](customization/styling.html)** - CSS and SCSS
- **[Extending](customization/extending.html)** - Custom components

## Modyo Integration

Dynamic Framework is automatically included when creating applications with Dynamic Minimal Theme in Modyo. See [customization guide](customization/theming.html) for UI customization.

## Installation

### Modyo CLI
```bash
npx @modyo/cli@latest get dynamic-react-base-template my-app
cd my-app
npm install
npm start
```

### CDN

```html
<!-- CSS (replace X.X.X with the latest version) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@dynamic-framework/ui-react@X.X.X/dist/css/dynamic-ui.css">
```

Check the latest version at [npmjs.com/@dynamic-framework/ui-react](https://www.npmjs.com/package/@dynamic-framework/ui-react).

### NPM Package

```bash
npm install @dynamic-framework/ui-react
```

**Requirements:**
- Node.js v22+
- NPM 10.x+

For React component integration, see [React guide](development/react-integration.html).

## Technical Resources

### Documentation
- [Storybook Components](https://react.dynamicframework.dev) - Interactive catalog
- [API Reference](https://dynamic.modyo.com/docs/api) - API documentation
- [GitHub](https://github.com/modyo/dynamic-framework) - Source code

### Development Tools
- [Modyo CLI](https://www.npmjs.com/package/@modyo/cli) - Command line tool
- [Figma UI Kit](https://figma.com/@modyo) - Design resources
- [CodeSandbox Templates](https://codesandbox.io/s/dynamic-framework) - Starter templates

### Technical Support
- [Issues](https://github.com/modyo/dynamic-framework/issues) - Report issues
- [Stack Overflow](https://stackoverflow.com/questions/tagged/dynamic-framework) - Technical questions
- [Community](https://community.modyo.com) - Developer forum

## Technology Stack

- **React**: 18+ with Hooks and Suspense
- **TypeScript**: Full static typing
- **Bootstrap**: 5.3+ customizable
- **Build Tools**: Webpack 5, Vite support
- **Testing**: Jest, React Testing Library
- **Linting**: ESLint, Prettier