# Introduction

**Dynamic Framework** is a versatile solution that adapts to your project's needs, offering various installation options to cover any scenario.

## Modyo Integration

When creating a new application in Modyo using the Dynamic Minimal Theme, Dynamic Framework is automatically installed in your web application. To customize your user interface, refer to [Learn how to customize your user interface](https://dynamicbanking.co/docs/theming).

## CDN Inclusion

To integrate Dynamic Framework HTML widgets into your website, you can use a Content Delivery Network (CDN). This method facilitates access to the framework's CSS and JavaScript files without needing to host them locally.

**CSS Styles:**

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@dynamic-framework/ui-react@1.27.0/dist/css/dynamic-ui.css">
```

**JavaScript (optional):**

```html
<script src="https://cdn.jsdelivr.net/npm/@dynamic-framework/ui-react@1.27.0/dist/js/bootstrap.min.js"></script>
```

Once Dynamic Framework is linked in your HTML document, you can start using its functionalities. For more details on customizing widgets and components, refer to our documentation on [how to customize widgets and components](https://dynamicbanking.co/docs/styling-components).

## Package Manager Installation

For developing CLI widgets or React-based projects, you can install Dynamic Framework styles and JavaScript files via NPM.

```shell
npx @modyo/cli@latest get dynamic-react-base-template
```

**Requirements:**

*   Node v20+
*   NPM 10.x+

```shell
cd dynamic-react-base-template;
npm i;
npm run start
```

Explore the code with your preferred editor to understand the implementation of the design system components.

For detailed information on how to integrate React components into your project, refer to our documentation on [how to add React components to your project.](https://dynamicbanking.co/docs/dynamic-for-react)
