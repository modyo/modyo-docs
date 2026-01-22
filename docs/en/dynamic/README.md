# Dynamic Framework

React component framework specialized for financial applications, built on Bootstrap 5 and optimized for micro frontends with Modyo platform.

:::tip Version 2.0 Available
Dynamic UI 2.0 brings a new visual language, Lucide icons, and 8 new components.
- [See what's new in v2.0](whats-new-v2.html)
- [Migration guide](getting-started/migration-v2.html)
:::

## Technical Features

### Components
- **43 React components** specialized for banking
- **Design system** based on Bootstrap 5
- **Full TypeScript** support
- **WCAG 2.1 accessibility** integrated

### Architecture
- **Micro Frontends** with Module Federation
- **API-first** design
- **Lazy loading** and code splitting
- **State management**: Zustand (UI) + TanStack Query (server)

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
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@dynamic-framework/ui-react@2/dist/css/dynamic-ui.css">

<!-- JavaScript (optional) -->
<script src="https://cdn.jsdelivr.net/npm/@dynamic-framework/ui-react@2/dist/js/bootstrap.min.js"></script>
```

:::tip
For production, pin to a specific version like `@2.1.1` instead of `@2`.
:::

### NPM Package

```bash
npm install @dynamic-framework/ui-react
```

**Requirements:**
- Node.js v22+
- NPM 10.x+
- React 19.x

For React component integration, see [React guide](development/react-integration.html).

## Technical Resources

### Documentation
- [Storybook Components](https://react.dynamicframework.dev) - Interactive catalog
- [API Reference](https://dynamic.modyo.com/docs) - API documentation
- [NPM Package](https://www.npmjs.com/package/@dynamic-framework/ui-react) - Package registry

### Development Tools
- [Modyo CLI](https://www.npmjs.com/package/@modyo/cli) - Command line tool

### Technical Support
- [Support](https://support.modyo.com) - Technical support

## Technology Stack

- **React**: 19.x (requires ~19.2.1 as peer dependency)
- **TypeScript**: Full static typing
- **Bootstrap**: 5.3.8 customizable
- **Build Tools**: Webpack 5, Vite support
- **Testing**: Jest, React Testing Library
- **Linting**: ESLint, Prettier