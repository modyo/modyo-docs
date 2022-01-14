---
search: true
---

# Style Customization

All the Widgets in this catalog are based on a simple design, based on Bootstrap, waiting to be modified to suit the client's designs and guidelines. Remember that these Widgets are intended to be used as a base for the final product and not as a product by itself.

For both the style base, as well as the grid used in the Widgets, [Bootstrap](https://getbootstrap.com/) is used in its `4.5.x` version, using the helpers and classes it includes as much as possible. This way the number of custom styles in our Widgets is very low, which makes modifying them simple and easy.

:::tip
To take full advantage of Bootstrap's potential, we use **SCSS** as a pre-processor for **css**, which allows us to modify the default values of the variables used in the Bootstrap build.
:::

```html{1-2}
<div class="bg-white px-3 pt-3 pb-2 rounded mt-3">
  <div class="d-flex justify-content-between mb-2">
    <!-- content -->
  </div>
</div>
```

### File structure and style loading

In the “src” folder of the project we will find a folder called “scss” that has the following structure:

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

- Global Widget Styles
- Extend bootstrap using your mixins

```scss{2,3,8,11}
//Example: we use the bg-variant mixin to create more background colors
@include bg-variant (“.bg-tertiary”, $tertiary, true);
@include bg-variant (“.bg-tertiary-10", $tertiary-10, true);

//In the following examples we use the button-variant mixin that allows us to create new buttons with all their states
.btn-tertiary {
 @include button-variant ($tertiary, $tertiary);
}
.btn-outline-tertiary {
 @include button-outline-variant ($tertiary, $white, $primary-80, $primary-80);
 color: $secondary-100;
}
```

:::tip Tip
You can find a list of available mixins [here](https://gist.github.com/jCrip/4d76a90a4a5c569d9300e633ea8b52c7) and a detailed explanation [here](https://gist.github.com/anschaef/d7552885c0e1f127cf8830d3bbf6e4b1)
:::

#### Variables

The `_variables.scss` file contains all the Bootstrap default variables (colors, sizes, buttons, etc). Here you can change the values we need to fit the Bootstrap base styles to our design, thus avoiding having to overwrite or add more classes to the project (you can read more about how to modify Bootstrap [here](https://getbootstrap.com/docs/4.5/getting-started/theming/)).

##### Example

Before

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

```scss{2,4-6}
// ...
$light: lightblue;
// ...
$border-width: 2px;
$border-color: $secondary;
$border-radius: 1.35rem;
//...
```

<img src="/assets/img/widgets/after.png" width="400">

### Custom

In the `custom.scss` file import and sort all the other stylesheets you have in the **scss** folder along with the Bootstrap base:

```scss{1}
@import "./variables"; // always before Bootstrap
@import "~bootstrap";
@import "./theme.scss";
```

:::tip
The order is important, **variables** always go before you import Bootstrap.
:::

The `custom.scss` file is imported into the project's `main.js`.

```js{4}
import Vue from "vue";
//...
import "bootstrap"; // only imports javascript, not the styles
import "./scss/custom.scss";
//...
new Vue({
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#my-Widget");
```

:::warning Warning
The `@import 'bootstrap'` of this file **only** imports bootstrap.js and not the styles!
:::

### Component styles

Some of the Widgets components have their own styles, and these are written in the same component (`.vue`). This way we can define the scope of these styles at the component level without affecting other parts of the Widget using the `scoped` attribute.

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

When you're building a Widget with Bootstrap (or another styling framework) you'll only use a small set of it, and many unused CSS styles will be included. This is where **PurgeCSS** comes into play. PurgeCSS analyzes your content and CSS files. It then matches the selectors used in your files with those in your content files and removes unused selectors from your CSS, resulting in smaller CSS files.

Widgets use [PurgeCSS](https://purgecss.com/) in conjunction with [PostCSS](https://postcss.org/) as part of the development flow. This way we managed to optimize the size of our Widgets.

### PostCSS 

What about styles **NOT** declared in the content, but that **ARE** used in the Widget? Sometimes styling problems occur, for example when the Bootstrap modal component is used and the `modal-backdrop` style does not load because this element is created dynamically when we open the modal; or when we use external component libraries in our Widgets where the styles of that component have not been loaded and they're not loaded on the site. This happens because **PurgeCSS** does not know where to read the contents of the external component.

To include the styles that **PurgeCSS** has removed but that we need on the site we need to declare them in a **PostCSS config file**. This file is located at the root of the Widget and is called **postcss.config.js**

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

In this file you can force **PurgeCSS** to include styles in 3 different ways:

1. Add the content file to the `content` property, so PurgeCSS is able to read the content and determine what styles it should include.

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

2. Add keywords to the `whitelist` property

  ```js{2}
  ...
    defaultExtractor(content) { // block code }
    whitelist: ['modal-backdrop', 'fade', 'show'],
  ...
  ```

3. Add regex patterns to `whitelistPatterns`

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
