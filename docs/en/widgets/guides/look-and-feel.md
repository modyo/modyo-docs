---
search: true
---

# Style Customization

All Widgets in this catalog are based on a flat design, based on Bootstrap, waiting to be intervened and modified to adapt to the client's designs and guidelines. Remember that these Widgets are intended to be used as a base for the final product and not as a product itself.

For both the style base, as well as the grid used in Widgets, [Bootstrap](https://getbootstrap.com/) is used in its version `4.5.x`, using to the maximum the helpers and classes that it includes. This way the number of custom styles in our Widgets is very low which makes your modification simple and easy.

:::tip
To make the most of the potential of bootstrap we use **SCSS** as the **css** pre-processor which allows us to modify the default values of the variables used in bootstrap build.
:::

```html{1-2}
<div class="bg-white px-3 pt-3 pb-2 rounded mt-3">
<div class="d-flex justify-content-between mb-2">
<!-- content -->
</div>
</div>
```

### File structure and style loading

In the `src` folder of the project we will find a folder called `scss` that has the following structure:

```treeview{4-6}
├── src/
│   ├── ...
│   ├── scss/
│   │   ├── _theme.scss
│   │   ├── _variables.scss
│   │   └── custom.scss
│   ├── ...
```

### Topic

The `_theme.scss` file is used for:

- Widget Global Styles
- Extend bootstrap using your mixins

```scss {2,3,8,11}
//Example: We use the mixin bg-variant to create more background colors
@include bg-variant (".bg-tertiary", $tertiary, true);
@include bg-variant (".bg-tertiary-10", $tertiary-10, true);

//In these following examples we use the mixin button-variant that allows us to create new buttons with all their states
.btn-tertiary {
 @include button-variant ($tertiary, $tertiary);
}
.btn-outline-tertiary {
 @include button-outline-variant ($tertiary, $white, $primary-80, $primary-80);
 color: $secondary-100;
}
```

You can find a list with the available mixins [here](https://gist.github.com/jCrip/4d76a90a4a5c569d9300e633ea8b52c7) and a detailed explanation [here](https://luisramirez.dev/como-usar-los-mixins-de-bootstrap-4-con-scss/)

#### Variables

The `_variables.scss` file contains all the default bootstrap variables (colors, sizes, buttons, etc). Here we can change the values we need to adjust the base bootstrap styles to our design, avoiding having to write or add more classes to our project (you can read more about how to modify bootstrap [here](https://getbootstrap.com/docs/4.5/getting-started/theming/)).

##### Example

Formerly

```scss
// ...
$light: $secondary-10;
// ...
$border-width: 1px;
$border-color: $primary-10;
$border-radius: 0.35rem;
//...
```

 <img src="/assets/img/widgets/before.png" width="400"> 

After

```scss {2,4-6}
//...
$light: lightblue;
//...
$border-width: 2px;
$border-color: $second;
$border-radius: 1.35rem;
//...
```

 <img src="/assets/img/widgets/after.png" width="400"> 

### Custom

In the `custom.scss` file we import and give order to all the other stylesheets that we have in the**scss** folder along with the bootstrap base.

```scss {1}
@import". /variables ";//always before bootstrap
@import "~bootstrap";
@import". /theme.scss ";
```

:::tip
Order is important, **variables** always go before importing bootstrap.
:::

This**scss** file is imported into the `main.js` file of the project.

```js{4}
import Vue from "vue";
//...
import "bootstrap"; // solo importa el javascript, no los estilos
import "./scss/custom.scss";
//...
new Vue({
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#my-Widget");
```

:::warning Important
The `@import 'bootstrap'` of this file **only** imports bootstrap.js and not styles!
:::

### Component Styles

Some of the widget components have their own styles and these are written to the same component (`.vue`). This way we can define the scope of these styles at the component level without affecting other parts of the Widget using the `scoped` attribute.

```html{5}
<template>...</template>

<script>
  ...
</script>

<style lang="scss" scoped>
  .consumer-loan-months-selector {
    .card {
      border: 1px solid $primary-10;
    }
    .card-header {
      padding: 0.75rem 1.25rem;
    }
  }
</style>
```

### PurgeCSS

When you're building a Widget with Bootstrap (or another style framework) you'll only use a small set of it, and many unused CSS styles will be included. This is where **PurgeCSS** comes into play. PurgeCSS analyzes your content and CSS files. It then matches the selectors used in your files with those of your content files and removes the unused selectors from your CSS, resulting in smaller CSS files.

Widgets use [PurgeCSS](https://purgecss.com/) in conjunction with [PostCSS](https://postcss.org/) as part of the development flow. This way we managed to remove those extra **bytes** that we don't need and optimize our Widgets. Excellent!

::: danger PROBLEM!
What about the **NO** styles declared in the content, but what **YES** are used in the Widget?
:::

Sometimes we may encounter some style problems, for example when we use the Bootstrap modal component and the `modal-backdrop` style does not load since this element is created dynamically when you open the modal; or when we use external component libraries in our Widgets where the styles of that component have not been loaded and are not on site. This happens because **PurgeCSS** does not know where to read the contents of the external component.

To include the styles that **PurgeCSS** has removed but we need on the site we need to declare them in a **PostCSS** configuration file. This file is located at the root of the Widget and is called **postcss.config.js**

```js
const PURGE_CSS = require("@fullhuman/postcss-purgecss");

const IN_PRODUCTION = process.env.NODE_ENV === "production";
const plugins = {};

if (IN_PRODUCTION) {
  plugins.purgecss = PURGE_CSS({
    content: ["./public/**/*.html", "./src/**/*.vue"],
    defaultExtractor(content) {
      const contentWithoutStyleBlocks = content.replace(
        /<style[^]+?<\/style>/gi,
        ""
      );
      return (
        contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) ||
        []
      );
    },
    whitelist: [],
    whitelistPatterns: [
      /-(leave|enter|appear)(|-(to|from|active))$/,
      /^(?!(|.*?:)cursor-move).+-move$/,
      /^router-link(|-exact)-active$/,
      /data-v-.*/,
      /svg.*/,
      /fa.*/,
      /^d-*/,
    ],
  });
}
// ...
```

In this file we can force **PurgeCSS** to include styles in 3 different ways:

- Add the content file to the `content` property, in this way PurgeCss is layers to read the content and determine which styles should include.

  ```js{6}
  // ...
  plugins.purgecss = PURGE_CSS({
    content: [
      './public/**/*.html',
      './src/**/*.vue',
      'node_modules/@modyo/financial-commons/src/components/MStepper/**/*.vue'
    ]
    defaultExtractor(content) { // block code }
  // ...
  ```

- Add keywords to the `whitelist` property

  ```js{2}
  ...
    defaultExtractor(content) { // block code }
    whitelist: ['modal-backdrop', 'fade', 'show'],
  ...
  ```

- Add regex patterns to the `WhiteListPatterns` property

  ```js{6}
  // ...
    defaultExtractor(content) { // block code }
    whitelist: ['fade', 'show'],
    whitelistPatterns: [
    // ...
      /modal-.*/
    ]
  // ...
  ```
