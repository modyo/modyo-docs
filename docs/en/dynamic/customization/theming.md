---
search: true
---

# Theming

A Dynamic Framework theme is a stylesheet loaded after the Dynamic UI CSS that overrides its `--bs-*` custom properties. This page describes the Dynamic UI 2.12.0 contract for whoever writes that stylesheet: which variables are overridden, in what format and on which selector, and which parts of the system don't follow a rebrand on their own.

## Where the theme is loaded

Dynamic UI declares its tokens on the `:root, [data-bs-theme="dynamic"]` selector and doesn't use `@layer`. The theme stylesheet is loaded after it:

```html
<link rel="stylesheet" href="https://cdn.dynamicframework.dev/assets/2.12.0/ui-react/css/dynamic-ui.min.css" />
<link rel="stylesheet" href="/css/theme.css" />
```

### Without @layer

A theme wins if its rule has at least the specificity of Dynamic's and comes later in the cascade. Use the same selector: an element with `data-bs-theme="dynamic"` gets the library values again, and a rule that only targets `:root` doesn't reach it.

```css
/* ✅ */
:root,
[data-bs-theme="dynamic"] {
  --bs-border-radius: 0.75rem;
}

/* ❌ :where() has zero specificity and Dynamic's rule wins over it */
:where(:root) {
  --bs-border-radius: 0.75rem;
}
```

### With @layer

Styles outside any layer win over styles in any layer. If the theme lives in a layer and Dynamic doesn't, the theme always loses, even when it loads later:

```css
/* ❌ Dynamic was loaded without a layer: this block never wins */
@layer theme {
  :root,
  [data-bs-theme="dynamic"] {
    --bs-border-radius: 0.75rem;
  }
}
```

If you use layers, import Dynamic into a layer and declare the theme's layer after it. Among layers, the last one declared wins:

```css
/* ✅ */
@layer framework, theme;

@import url("https://cdn.dynamicframework.dev/assets/2.12.0/ui-react/css/dynamic-ui.min.css") layer(framework);

@layer theme {
  :root,
  [data-bs-theme="dynamic"] {
    --bs-border-radius: 0.75rem;
  }
}
```

## The color contract

Every Dynamic color is stored as an `R, G, B` triplet in an `-rgb` variable. The variable without the suffix is a wrapper computed from it: `--bs-primary: rgb(var(--bs-primary-rgb))`. Utilities (`.bg-primary`, `.text-primary`) and anything with opacity read the triplet through `rgba(var(--bs-primary-rgb), …)`, and buttons read the ramp, which also hangs off the triplet. A hex value on the wrapper only reaches what reads the wrapper, and the brand shows up halfway.

```css
/* ❌ */
:root {
  --bs-primary: #166e62;
}

/* ✅ */
:root,
[data-bs-theme="dynamic"] {
  --bs-primary-rgb: 22, 110, 98;
}
```

The ✅ has the right format, but it isn't a full rebrand yet: the ramp is missing.

### Roles and ramps

Dynamic has eight color roles. Six have a ramp from 25 to 900: `primary`, `secondary`, `success`, `info`, `warning` and `danger`. `light` and `dark` only have their base (`--bs-light-rgb`, `--bs-dark-rgb`).

The ramp leaves are literals; they aren't computed from the base. If you change only the base, the button hover and active states (`--bs-btn-primary-hover-bg: var(--bs-primary-600)`), subtle backgrounds (`--bs-primary-bg-subtle: var(--bs-primary-100)`) and emphasis text keep the previous hue. Rebranding a role with a ramp takes 12 variables: the base, the 10 leaves and the text color of `.text-bg-<role>`. Step 500 isn't declared with a value of its own: it follows the base.

```css
:root,
[data-bs-theme="dynamic"] {
  --bs-primary-rgb: 22, 110, 98;
  --bs-primary-text-bg-color: var(--bs-white);
  --bs-primary-25-rgb: 243, 248, 247;
  --bs-primary-50-rgb: 232, 241, 239;
  --bs-primary-100-rgb: 208, 226, 224;
  --bs-primary-200-rgb: 162, 197, 192;
  --bs-primary-300-rgb: 115, 168, 161;
  --bs-primary-400-rgb: 69, 139, 129;
  --bs-primary-500-rgb: var(--bs-primary-rgb);
  --bs-primary-600-rgb: 18, 88, 78;
  --bs-primary-700-rgb: 13, 66, 59;
  --bs-primary-800-rgb: 9, 44, 39;
  --bs-primary-900-rgb: 4, 22, 20;
}
```

Links follow the role: `--bs-link-color-rgb` points to `--bs-primary-rgb` and `--bs-link-hover-color-rgb` to `--bs-primary-700-rgb`. They only need an override if links use a different color.

The leaves of a new color can be computed by hand, with any palette tool, or with the generator that ships with Dynamic. Dynamic gets its own by mixing the base with white toward the light steps and with black toward the dark ones, in sRGB. To reproduce that computation exactly, see [Generating and validating a theme](theme-tools.html).

### Roles that share a hue

Some roles come from the same palette hue: `primary` and `info` are the same blue (`--bs-blue-rgb`), and `danger`, `success` and `warning` come from `red`, `green` and `yellow`. By default, a rebrand only touches the role being rebranded, and `info` stays blue. Whether `info` also moves to the brand color or stays a state color is up to whoever does the rebrand; in the first case its ramp is rewritten too.

### The secondary ramp

The `secondary` ramp isn't monotonic: its base points to `--bs-gray-800-rgb`, and since step 500 follows the base, `--bs-secondary-500-rgb` (43, 43, 52) is darker than 600 (87, 87, 104) and 700 (65, 65, 78). Changing the base doesn't fix that shape. To rebrand `secondary`, write the 10 leaves by hand as a coherent ramp, or leave the role as it is.

### Document surfaces

The document background, base text and border have their own variables:

```css
:root,
[data-bs-theme="dynamic"] {
  --bs-body-bg-rgb: 245, 246, 250;
  --bs-body-color-rgb: 21, 21, 26;
  --bs-border-color: rgb(var(--bs-gray-100-rgb));
}
```

`--bs-body-bg-rgb` and `--bs-body-color-rgb` are triplets, like the role ones. `--bs-border-color` has no `-rgb` pair: it takes a color value directly. The values in the example are Dynamic's.

## Text on background

Dynamic picks the text color of each text/background pair in Sass, with `color-contrast()`, when the library is compiled. The result is written into the CSS and isn't recomputed when a theme changes the background color.

- **`.text-bg-<role>`** reads its text from `--bs-<role>-text-bg-color`, which is `var(--bs-white)` or `var(--bs-gray-700)` depending on the role. If you change the base to a light tone, declare a dark value along with the ramp, as in the example above. `secondary` has no such variable: `.text-bg-secondary` paints `--bs-secondary-700` on `--bs-secondary-50` and follows its ramp.
- **`.btn-<role>`** doesn't read `--bs-<role>-text-bg-color`. Its text is also resolved at compile time: in `primary` it is `var(--bs-white)` in every state. If the new base doesn't contrast with that text, change it in the component block:

```css
.btn-primary {
  --bs-btn-color: var(--bs-gray-900);
  --bs-btn-hover-color: var(--bs-gray-900);
  --bs-btn-active-color: var(--bs-gray-900);
  --bs-btn-disabled-color: var(--bs-gray-900);
}
```

## Typography, radius and spacing

### Font family

The text font family is overridden on `--bs-font-sans-serif`. The document body (`--bs-body-font-family`), tooltips and popovers read it. The Dynamic CSS includes no `@font-face`, so the font must be loaded separately, before the theme:

```css
:root,
[data-bs-theme="dynamic"] {
  --bs-font-sans-serif: "Inter", sans-serif;
}
```

There is no `--bs-headings-font-family`: headings inherit the document font family.

### Font sizes

Headings and the `.fs-N` classes read `--bs-fs-N`, which is only an alias of `--bs-rfs-fs-N`. The value is overridden on `--bs-rfs-fs-N` (and on `--bs-rfs-display-N` for `.display-N`). Overriding the alias breaks the link to RFS.

Steps 1 to 4 and the `display` sizes are fluid below 1200px (`calc(1.425rem + 2.1vw)` for step 1) and fixed from 1200px on (`3rem`). If you declare a fluid value, also declare its cap in the same media query, or it keeps growing on wide screens:

```css
/* ❌ the alias, not the value */
:root,
[data-bs-theme="dynamic"] {
  --bs-fs-1: 2.75rem;
}

/* ✅ */
:root,
[data-bs-theme="dynamic"] {
  --bs-rfs-fs-1: calc(1.4rem + 1.8vw);
  --bs-rfs-fs-2: calc(1.35rem + 1.2vw);
}

@media (min-width: 1200px) {
  :root,
  [data-bs-theme="dynamic"] {
    --bs-rfs-fs-1: 2.75rem;
    --bs-rfs-fs-2: 2.25rem;
  }
}
```

Steps 5 and 6 are fixed (`1.25rem` and `1rem`) and are overridden with a single value.

### Radius

The radii are independent variants, not a scale derived from the base: changing `--bs-border-radius` doesn't move the others.

```css
:root,
[data-bs-theme="dynamic"] {
  --bs-border-radius: 0.5rem;
  --bs-border-radius-sm: 0.25rem;
  --bs-border-radius-lg: 1rem;
  --bs-border-radius-xl: 1.5rem;
  --bs-border-radius-xxl: 2rem;
  --bs-border-radius-pill: 50rem;
}
```

The values are Dynamic's. `--bs-border-radius-2xl` is an alias of `--bs-border-radius-xxl` and isn't declared.

### Spacing

Spacing lives in 31 literal levels, `--bs-ref-spacer-0` to `--bs-ref-spacer-30`, in `0.25rem` steps (`--bs-ref-spacer-4` is `1rem`). There is no `--bs-spacer`. Components read these levels (for example `--bs-modal-padding: var(--bs-ref-spacer-4)`). Utilities such as `.p-3` or `.gap-3` carry their value written in and don't change with them.

```css
:root,
[data-bs-theme="dynamic"] {
  --bs-ref-spacer-4: 1.125rem;
}
```

## Component variables

Each component exposes its own `--bs-<component>-*` variables and declares them on its selector, so they are overridden there, not on `:root`:

```css
.card {
  --bs-card-border-color: var(--bs-gray-100);
  --bs-card-border-radius: var(--bs-border-radius-lg);
}
```

The form validation and accordion icons carry their color inside a data-URI: they don't change with the role, and to change them you replace the whole variable (`--bs-form-feedback-icon-valid`, `--bs-default-accordion-btn-icon`).

## Zones instead of dark mode

Dynamic UI ships no dark scheme: Bootstrap's dark mode is turned off when the library is compiled. To give part of the page another palette, such as a dark header on a light site, use a zone: a subtree with `data-bs-theme="<name>"` that redefines the colors.

```html
<header data-bs-theme="dark-zone">…</header>
```

A zone inherits from the document, and three things don't happen on their own:

1. **Triplet and wrapper.** Wrappers such as `--bs-body-color` are computed on `:root` and inherited already resolved. If the zone changes only `--bs-body-color-rgb`, whatever reads `var(--bs-body-color)` keeps the document color. The zone declares both.
2. **`color` and `background-color`.** Dynamic applies the background and text color on `body`, and a subtree never goes through that rule. The zone declares them on its own element.
3. **Components with their own surface.** The zone's white text reaches the whole subtree, including components that keep a white background: `.form-control`, `.form-select` and `.modal` need a block that gives them dark text back. `.nav`, `.list-group` and the `.btn-outline-*` buttons need colors that read on the zone background. The `.nav-pills` variables can't be reached from `.nav` and go in a block of their own.

```css
[data-bs-theme="dark-zone"] {
  --bs-body-bg-rgb: var(--bs-gray-900-rgb);
  --bs-body-bg: rgb(var(--bs-gray-900-rgb));
  --bs-body-color-rgb: var(--bs-white-rgb);
  --bs-body-color: rgb(var(--bs-white-rgb));
  --bs-secondary-color-rgb: var(--bs-white-rgb);
  --bs-secondary-color: rgba(var(--bs-white-rgb), .75);
  --bs-tertiary-color-rgb: var(--bs-white-rgb);
  --bs-tertiary-color: rgba(var(--bs-white-rgb), .5);
  --bs-emphasis-color-rgb: var(--bs-white-rgb);
  --bs-emphasis-color: rgb(var(--bs-white-rgb));
  --bs-link-color-rgb: var(--bs-primary-200-rgb);
  --bs-link-color: rgb(var(--bs-primary-200-rgb));
  --bs-link-hover-color-rgb: var(--bs-primary-100-rgb);
  --bs-link-hover-color: rgb(var(--bs-primary-100-rgb));
  --bs-border-color: rgba(var(--bs-white-rgb), .25);
  color: var(--bs-body-color);
  background-color: var(--bs-body-bg);
}

[data-bs-theme="dark-zone"] .nav {
  --bs-nav-link-color: rgb(var(--bs-white-rgb));
  --bs-nav-link-hover-color: rgb(var(--bs-primary-200-rgb));
}

[data-bs-theme="dark-zone"] .nav-pills {
  --bs-nav-pills-link-active-color: rgb(var(--bs-gray-900-rgb));
  --bs-nav-pills-link-active-bg: rgb(var(--bs-white-rgb));
}

[data-bs-theme="dark-zone"] .btn-outline-primary {
  --bs-btn-color: rgb(var(--bs-primary-200-rgb));
  --bs-btn-border-color: rgb(var(--bs-primary-200-rgb));
  --bs-btn-hover-color: rgb(var(--bs-gray-900-rgb));
  --bs-btn-hover-bg: rgb(var(--bs-primary-200-rgb));
  --bs-btn-hover-border-color: rgb(var(--bs-primary-200-rgb));
}

[data-bs-theme="dark-zone"] .list-group {
  --bs-list-group-color: rgb(var(--bs-white-rgb));
  --bs-list-group-action-color: rgb(var(--bs-white-rgb));
  --bs-list-group-border-color: rgba(var(--bs-white-rgb), .25);
}

[data-bs-theme="dark-zone"] .form-control,
[data-bs-theme="dark-zone"] .form-select {
  --bs-body-color: rgb(var(--bs-gray-900-rgb));
}

[data-bs-theme="dark-zone"] .modal {
  --bs-modal-color: rgb(var(--bs-gray-900-rgb));
}
```

A `.modal` only gets the zone if it renders inside it. A dark palette in `@media (prefers-color-scheme: dark)` on `:root` isn't an alternative: it has the same three problems across the whole document and changes the brand for everyone whose system is in dark mode.

## Compiling from Sass

Sass variables only take effect if you compile Dynamic from its sources. The package includes the `src/style/dynamic-ui.scss` entry point, which compiles with `node_modules` and the project root as load paths. Importing the compiled CSS from SCSS ignores any `$variable` declared before it:

```scss
// ❌ dist/css is already compiled CSS: $border-radius has no effect
$border-radius: 0.75rem;
@import "@dynamic-framework/ui-react/dist/css/dynamic-ui.css";

// ✅
$border-radius: 0.75rem;
@import "@dynamic-framework/ui-react/src/style/dynamic-ui";
```

Compiling from Sass means also compiling Bootstrap in your build and maintaining that chain on every Dynamic upgrade. For a theme, overriding custom properties as this page describes is enough.

## Resources

- [Generating and validating a theme](theme-tools.html): the optional workflow with `dynamic-theme-expand` and `dynamic-theme-validate`.
- [Dynamic UI 2.12.0 Storybook](https://react.dynamicframework.dev/v2.12.0/)
- [Dynamic UI 2.12.0 CSS](https://cdn.dynamicframework.dev/assets/2.12.0/ui-react/css/dynamic-ui.min.css)
- [`token-overrides.json` 2.12.0](https://cdn.dynamicframework.dev/assets/2.12.0/ui-react/tokens/token-overrides.json): the descriptor of the overridable tokens.
