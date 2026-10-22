---
search: true
---

# Theming

A Dynamic Framework theme is a stylesheet loaded after the Dynamic UI CSS that overrides its `--bs-*` custom properties. This page describes the Dynamic UI 2.12.0 contract: which variables you override, in which format and on which selector, and which parts of the system don't follow a rebrand on their own.

## How a theme is applied

Dynamic UI declares its tokens on the `:root, [data-bs-theme="dynamic"]` selector and doesn't use `@layer`. A theme wins when its rule has at least that specificity and comes later in the cascade:

```html
<link rel="stylesheet" href="https://cdn.dynamicframework.dev/assets/2.12.0/ui-react/css/dynamic-ui.min.css" />
<link rel="stylesheet" href="/css/theme.css" />
```

```css
/* theme.css */
:root,
[data-bs-theme="dynamic"] {
  --bs-border-radius: 0.75rem;
}
```

Use the same selector as Dynamic: an element with `data-bs-theme="dynamic"` gets the library values again, and a rule that targets only `:root` doesn't reach it. Don't use `:where()`: its specificity is zero, so Dynamic's rule beats it.

### With @layer

Styles outside any layer beat styles in any layer. If your theme lives in a layer and Dynamic doesn't, the theme always loses:

```css
/* ❌ Dynamic was loaded without a layer: this block never wins */
@layer theme {
  :root,
  [data-bs-theme="dynamic"] {
    --bs-border-radius: 0.75rem;
  }
}
```

If you use layers, import Dynamic into a layer and declare the theme layer after it. Among layers, the last one declared wins:

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

Each color travels as an `R, G, B` triplet, without `rgb()`, in the `--bs-<name>-rgb` variable. The variable without the suffix is a wrapper the library computes from the triplet. By default, `--bs-primary-rgb` points to `--bs-blue-rgb` (`32, 104, 213`), and `--bs-primary` is `rgb(var(--bs-primary-rgb))`.

Buttons, utilities such as `.bg-primary` and anything that applies opacity read the triplet with `rgba(var(--bs-primary-rgb), <alpha>)`. That's why you override the triplet and never the wrapper: a hex value on `--bs-primary` changes only what reads the wrapper, and a hex or `rgb()` value on the triplet breaks opacity.

### Roles with a ramp

Six roles have a ramp from 25 to 900: `primary`, `secondary`, `success`, `info`, `warning` and `danger`. `light` and `dark` expose only their base: `--bs-light-rgb` points to `--bs-gray-25-rgb`, and `--bs-dark-rgb` to `--bs-gray-900-rgb`.

The ramp steps are literals computed at build time. Step 500 is the exception: `--bs-primary-500-rgb: var(--bs-primary-rgb)` follows the base. If you change only the base, the steps that states and subtle surfaces read stay on the old hue:

| What changes with the base | What doesn't change |
|---|---|
| `--bs-primary`, `--bs-primary-500`, `.bg-primary`, the background of `.text-bg-primary` and `.btn-primary` | Hover and active of `.btn-primary` (`--bs-primary-600`), `--bs-primary-bg-subtle` and `--bs-primary-border-subtle` (`--bs-primary-100`), `--bs-primary-text-emphasis` (`--bs-primary-600`), link hover (`--bs-primary-700`) |

A full role rebrand is 11 variables: the base and the 10 leaves (25, 50, 100, 200, 300, 400, 600, 700, 800 and 900). Step 500 keeps its alias. This block, generated with `dynamic-theme-expand` from `#166e62`, is a full `primary` rebrand:

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

Links follow the role: `--bs-link-color-rgb` points to `--bs-primary-rgb`, and `--bs-link-hover-color-rgb` to `--bs-primary-700-rgb`. They only need an override if they must use a different color.

### Roles that share a hue

By default, `primary` and `info` are the same blue (both point to `--bs-blue-rgb`), and `success`, `warning` and `danger` share their hue with `green`, `yellow` and `red`. A `primary` rebrand doesn't move `info`. If the informational state should follow the new brand too, declare the full `info` block; if it should stay a state color, leave it as it is.

### The secondary ramp

`--bs-secondary-rgb` points to `--bs-gray-800-rgb` and, since step 500 follows that base, the ramp isn't monotonic: step 500 is darker than 600 and 700. Overriding the base doesn't fix the shape of the ramp. If you change `secondary`, declare the 10 leaves with a coherent ramp (`dynamic-theme-expand` generates them as it does for the other roles) or leave the role untouched.

## Text on background

Bootstrap picks the text color of filled components with `color-contrast()`, a Sass function that runs at build time. Changing a triplet at runtime doesn't recompute it: if your `primary` becomes a light tone, the white text stays.

| Component | Where the text comes from | How to fix it |
|---|---|---|
| `.text-bg-<role>`, all but `secondary` | `--bs-<role>-text-bg-color` (`var(--bs-white)` or `var(--bs-gray-700)` by default) | Declare the variable next to the role |
| `.text-bg-secondary` | `--bs-secondary-700` on `--bs-secondary-50` | Change the `secondary` ramp until the pair contrasts |
| `.btn-<role>` | `--bs-btn-color` and its states, resolved for each role's default value | A `.btn-<role>` block in the theme |

For a light `primary`, the `.text-bg-primary` text is set at the root and the button text in its own block:

```css
:root,
[data-bs-theme="dynamic"] {
  --bs-primary-text-bg-color: var(--bs-gray-900);
}

.btn-primary {
  --bs-btn-color: var(--bs-gray-900);
  --bs-btn-hover-color: var(--bs-gray-900);
  --bs-btn-active-color: var(--bs-gray-900);
  --bs-btn-disabled-color: var(--bs-gray-900);
}
```

`.btn-primary` exposes `--bs-btn-color`, `--bs-btn-bg`, `--bs-btn-border-color` and their `-hover-`, `-focus-`, `-active-` and `-disabled-` variants. In `.btn-outline-<role>`, the resting text sits on the surrounding surface and the hover and active text on the role color; check those states separately.

## Typography, radius and spacing

### Font family

The default font is `--bs-font-sans-serif: "Jost", sans-serif`, and `--bs-body-font-family` reads it. The Dynamic CSS doesn't include `@font-face`: your application loads the font you declare.

```css
:root,
[data-bs-theme="dynamic"] {
  --bs-font-sans-serif: "Inter", system-ui, sans-serif;
}
```

### Font sizes

Components and the `.h1`–`.h6`, `.fs-*` and `.display-*` classes read `--bs-fs-N` and `--bs-fs-display-N`, which are aliases: `--bs-fs-1: var(--bs-rfs-fs-1)`. The value lives in `--bs-rfs-fs-N` and `--bs-rfs-display-N`, which are the variables you override.

Steps `fs-1` to `fs-4` and `display-1` to `display-6` are fluid: below 1200px they're a `calc()` that grows with the viewport, and Dynamic redefines them with a fixed size in `@media (min-width: 1200px)`. A theme loaded after Dynamic wins at every width, because the media query doesn't add specificity. If the value you declare is fixed, one declaration is enough. If it's fluid (with `vw`), it needs its cap at that breakpoint; without it, it keeps growing on desktop. This example keeps the fluid behavior and sets `h1` to the size `h2` has by default:

```css
:root,
[data-bs-theme="dynamic"] {
  --bs-rfs-fs-1: calc(1.375rem + 1.5vw);
}

@media (min-width: 1200px) {
  :root,
  [data-bs-theme="dynamic"] {
    --bs-rfs-fs-1: 2.5rem;
  }
}
```

`fs-5` (`1.25rem`), `fs-6` (`1rem`) and `--bs-rfs-fs-small` (`0.875em`) aren't fluid and take a single value. `--bs-heading-line-height` has no alias and is overridden directly.

### Radius

Each radius is an independent variable, not a derived scale:

| Variable | Default value |
|---|---|
| `--bs-border-radius-sm` | `0.25rem` |
| `--bs-border-radius` | `0.5rem` |
| `--bs-border-radius-lg` | `1rem` |
| `--bs-border-radius-xl` | `1.5rem` |
| `--bs-border-radius-xxl` | `2rem` |
| `--bs-border-radius-2xl` | `var(--bs-border-radius-xxl)` |
| `--bs-border-radius-pill` | `50rem` |

If you change the base radius, change the others too: they aren't recomputed.

### Spacing

Component spacing lives in 31 literal variables, from `--bs-ref-spacer-0` (`0`) to `--bs-ref-spacer-30` (`7.5rem`), in `0.25rem` steps. Bootstrap utilities such as `.p-3` or `.gap-3` use fixed values and don't read these variables.

```css
:root,
[data-bs-theme="dynamic"] {
  --bs-ref-spacer-4: 1.125rem;
  --bs-ref-spacer-6: 1.75rem;
}
```

## Theme zones

Dynamic UI doesn't ship a dark token scheme: it's built with `$enable-dark-mode: false`. What it does ship are `dark:` utility variants (for example, the `dark:fs-1` class), which apply with the system dark scheme or under an ancestor with the `.dark` class. Those variants don't change any `--bs-*` variable. To give part of the page its own palette, such as a dark header in a light application, use a zone: a subtree with `data-bs-theme="<name>"`.

```html
<header data-bs-theme="highlight">…</header>
```

A zone inherits from the root, and three things don't follow it on their own:

1. **The triplet and the wrapper.** Wrappers are computed where they're declared: `--bs-body-color: rgb(var(--bs-body-color-rgb))` is resolved at the root and inherited already computed. A zone that only changes `--bs-body-color-rgb` doesn't move what reads `var(--bs-body-color)`. The zone declares both for `body-color`, `body-bg`, `secondary-color`, `tertiary-color` and `emphasis-color`.
2. **The zone's own color.** Dynamic applies `--bs-body-color` and `--bs-body-bg` on `body`. A subtree halfway down the page never goes through that rule, so the zone declares `color` and `background-color`.
3. **Components with their own surface.** Once the inherited color changes, a `.form-control` inside a dark zone ends up with white text on a white background. `.nav` and `.nav-pills`, `.btn-<role>`, `.list-group`, `.form-control`, `.form-select` and `.modal` get their own block inside the zone. The `.nav-pills` variables can't be reached from `.nav`, so they go in a separate block.

This CSS, generated with `dynamic-theme-expand`, is a full zone on top of the `primary` rebrand above:

```css
[data-bs-theme="highlight"] {
  --bs-body-bg-rgb: var(--bs-primary-700-rgb);
  --bs-body-bg: rgb(var(--bs-primary-700-rgb));
  --bs-body-color-rgb: var(--bs-white-rgb);
  --bs-body-color: rgb(var(--bs-white-rgb));
  --bs-secondary-color-rgb: var(--bs-white-rgb);
  --bs-secondary-color: rgba(var(--bs-white-rgb), .75);
  --bs-tertiary-color-rgb: var(--bs-white-rgb);
  --bs-tertiary-color: rgba(var(--bs-white-rgb), .5);
  --bs-emphasis-color-rgb: var(--bs-white-rgb);
  --bs-emphasis-color: rgb(var(--bs-white-rgb));
  --bs-heading-color: rgb(var(--bs-white-rgb));
  --bs-link-color-rgb: var(--bs-primary-100-rgb);
  --bs-link-hover-color-rgb: var(--bs-primary-50-rgb);
  --bs-border-color: rgba(var(--bs-white-rgb), .15);
  color: var(--bs-body-color);
  background-color: var(--bs-body-bg);
}

[data-bs-theme="highlight"] .nav {
  --bs-nav-link-color: rgb(var(--bs-white-rgb));
  --bs-nav-link-hover-color: rgb(var(--bs-primary-100-rgb));
}

[data-bs-theme="highlight"] .nav-pills {
  --bs-nav-pills-link-active-bg: rgb(var(--bs-white-rgb));
  --bs-nav-pills-link-active-color: rgb(var(--bs-primary-700-rgb));
}

[data-bs-theme="highlight"] .btn-primary {
  --bs-btn-color: rgb(var(--bs-primary-700-rgb));
  --bs-btn-bg: rgb(var(--bs-white-rgb));
  --bs-btn-border-color: rgb(var(--bs-white-rgb));
  --bs-btn-hover-color: rgb(var(--bs-primary-700-rgb));
  --bs-btn-hover-bg: rgb(var(--bs-primary-50-rgb));
  --bs-btn-hover-border-color: rgb(var(--bs-primary-50-rgb));
  --bs-btn-active-color: rgb(var(--bs-primary-700-rgb));
  --bs-btn-active-bg: rgb(var(--bs-primary-100-rgb));
  --bs-btn-active-border-color: rgb(var(--bs-primary-100-rgb));
}

[data-bs-theme="highlight"] .list-group {
  --bs-list-group-color: rgb(var(--bs-body-color-rgb));
  --bs-list-group-bg: transparent;
  --bs-list-group-action-color: rgb(var(--bs-body-color-rgb));
  --bs-list-group-border-color: var(--bs-border-color);
}

[data-bs-theme="highlight"] .form-control,
[data-bs-theme="highlight"] .form-select {
  --bs-body-color: rgb(var(--bs-dark-rgb));
}

[data-bs-theme="highlight"] .modal {
  --bs-modal-color: rgb(var(--bs-dark-rgb));
  --bs-heading-color: rgb(var(--bs-dark-rgb));
}
```

## What token-overrides.json covers

Each Dynamic UI version publishes a theming descriptor on the CDN, next to the CSS of the same version:

```
https://cdn.dynamicframework.dev/assets/2.12.0/ui-react/tokens/token-overrides.json
```

Always use the descriptor for the CSS version you load. Each entry gives the variable (`cssVar`), its default value (`value`) and how it behaves (`class`):

| `class` | Meaning |
|---|---|
| `override-base` | Base of a ramp. Drags its wrapper and step 500 along, but not the rest of the ramp |
| `override-leaf` | Literal. Override it on its own; it doesn't follow the base |
| `follows` | Alias or wrapper. Don't override it: it recomputes itself |
| `not-overridable` | Value baked outside `var()`. Replace the whole variable |

The descriptor sections are `color` (ramps, each role's `minimalRebrandSet`, `hueGroups` and `rebrandScope`), `typography`, `spacing`, `radius`, `shadow`, `gaps`, `slots` and `componentTokens`.

### Coverage

The `:root, [data-bs-theme="dynamic"]` selector in Dynamic UI 2.12.0 declares 1,205 custom properties, and the descriptor describes 258. The rest fall into three groups:

- **Component tokens** (`--bs-btn-*`, `--bs-card-*`…): the descriptor counts them in `componentTokens` (703 in 2.12.0) but doesn't list them. Override them on the component selector, not at the root.
- **Wrappers and aliases**, which follow their triplet.
- **Document surfaces**, which the descriptor doesn't include and a theme usually changes:

| Variable | Default value | How to override it |
|---|---|---|
| `--bs-body-bg-rgb` | `245, 246, 250` | Triplet, like a role |
| `--bs-body-color-rgb` | `var(--bs-gray-900-rgb)` | Triplet, like a role |
| `--bs-border-color` | `var(--bs-gray-100)` | Direct color: it has no triplet |

### Known gaps

`gaps` lists what a token override doesn't solve in this version:

- `secondary`: the ramp isn't monotonic (see [The secondary ramp](#the-secondary-ramp)).
- Validation and accordion icons (`--bs-form-feedback-icon-valid`, `--bs-form-feedback-icon-invalid`, `--bs-default-accordion-btn-icon` and `--bs-default-accordion-btn-active-icon`): the color is inside a data-URI SVG. Replace the whole variable with a data-URI that carries the new color.
- Shadows: only `--bs-box-shadow-lg` is Dynamic's own; the rest are Bootstrap's.
- Letter spacing: there's no token.

## Generating and validating a theme

Since version 2.12.0, `@dynamic-framework/ui-react` ships two binaries: `dynamic-theme-expand` generates a theme's CSS from a reduced JSON file, and `dynamic-theme-validate` checks it.

```bash
npm i -D @dynamic-framework/ui-react@2.12.0
npx dynamic-theme-expand theme.json -o theme.css
npx dynamic-theme-validate theme.css --strict
```

The generated CSS is a deliverable. Don't edit it by hand: fix the JSON and generate it again.

### The input JSON

```json
{
  "name": "Example",
  "version": "1.0.0",
  "roles": { "primary": "#166e62" },
  "body": { "bg": "245, 246, 250", "color": "#1f2933" },
  "typography": { "fontFamily": "\"Jost\", sans-serif" },
  "radius": ".5rem"
}
```

Colors accept hex, an `"R, G, B"` triplet or any CSS color.

| Key | Required | What it generates |
|---|---|---|
| `name`, `version` | No | The CSS header |
| `roles.<role>` | At least one role, or `gray` | The base, the 10 leaves if the role has a ramp, and `--bs-<role>-text-bg-color` (except for `secondary`) |
| `gray` | No | A gray ramp derived by tint, which replaces the one Dynamic defines by hand |
| `body.bg`, `body.color` | Yes | `--bs-body-bg-rgb` and `--bs-body-color-rgb` |
| `body.borderColor` | No | `--bs-border-color`; defaults to `rgb(var(--bs-gray-100-rgb))` |
| `typography.fontFamily` | Yes | `--bs-body-font-family` |
| `typography.scale.N` | No | `--bs-rfs-fs-N` for steps 1 to 6, with their 1200px block |
| `radius` | Yes | `--bs-border-radius`, in `rem`, and the other radii derived from it |
| `root` | No | `--bs-*` variables emitted as is at the end of the root block |
| `components` | No | List of `{ selector, vars, declarations }`; `declarations` only accepts `padding`, `border-radius`, `border-color`, `font-family` and `font-variant-numeric` |
| `zones` | No | Map of `<name>` → `{ vars, nav, components }`; generates the [Theme zones](#theme-zones) blocks, including `color` and `background-color` |

Every `var(--bs-…)` in `root`, `components` and `zones` is checked against the token inventory of the installed version: a reference to a token that doesn't exist stops the generation.

### What it validates

`dynamic-theme-validate` checks the color format (`triplete`, `wrapper`), that ramps are complete (`rampa-incompleta`, `paso-500`), surfaces (`superficie-faltante`, `border-color`), the use of `:where()`, typography (`tipografia`, `tipografia-breakpoint`) and contrast against WCAG 2.x AA (4.5:1; change it with `--min-contrast N`). Contrast is measured in each block and in each zone against its own background, including the pairs Dynamic resolves without the theme declaring them.

It exits with code 1 when there are errors. The following are warnings and only fail with `--strict`:

- `.text-bg-secondary` below the threshold, because no theme can fix it without changing the ramp.
- A pair that already fails with the default palette and that the theme doesn't make worse (`contraste-preexistente`).
- A zone link with contrast between 3:1 and 4.5:1.
- Whatever couldn't be measured (`contraste-irresoluble`, `rampa-irresoluble`, `rampa-inexistente`).

The validator assumes that, inside a zone, the background is the zone's. It doesn't catch a component with its own surface, such as the white `.form-control` in a dark zone: check those blocks in the browser.

## Compiling from Sass

Sass variables only take effect if you compile Dynamic from its sources, and the package includes the `src/style/dynamic-ui.scss` entry point. Importing `dist/css/dynamic-ui.css` from an SCSS file treats it as already compiled CSS, and any `$variable` declared before it is ignored. Compiling from Sass means compiling Bootstrap 5.3 inside your build and maintaining that chain on every Dynamic upgrade. For a theme, overriding custom properties as this page describes is enough.

## Common mistakes

**Hex on the wrapper, or only the base.** A hex value on `--bs-primary` doesn't reach buttons, utilities or opacity. With only the base, hover, active, `bg-subtle` and `text-emphasis` stay on the old hue.

```css
/* ❌ */
:root {
  --bs-primary: #166e62;
}

/* ❌ */
:root,
[data-bs-theme="dynamic"] {
  --bs-primary-rgb: 22, 110, 98;
}
```

```css
/* ✅ */
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
  --bs-primary-600-rgb: 18, 88, 78;
  --bs-primary-700-rgb: 13, 66, 59;
  --bs-primary-800-rgb: 9, 44, 39;
  --bs-primary-900-rgb: 4, 22, 20;
}
```

**The typography alias.** `--bs-fs-1` is an alias of `--bs-rfs-fs-1`. A value of your own on the alias cuts that link and turns off RFS fluid scaling, and `dynamic-theme-validate` reports it as an error.

```css
/* ❌ */
:root {
  --bs-fs-1: 2.5rem;
}
```

```css
/* ✅ */
:root,
[data-bs-theme="dynamic"] {
  --bs-rfs-fs-1: calc(1.375rem + 1.5vw);
}

@media (min-width: 1200px) {
  :root,
  [data-bs-theme="dynamic"] {
    --bs-rfs-fs-1: 2.5rem;
  }
}
```

**A dark palette with a class on `body`.** The `.dark` class turns on the `dark:` utility variants, but doesn't change the tokens. A class that only redefines triplets leaves the wrappers as they were resolved at the root.

```css
/* ❌ */
body.dark {
  --bs-body-bg-rgb: 21, 21, 26;
}
```

```css
/* ✅ A zone; the component blocks are in "Theme zones" */
[data-bs-theme="night"] {
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
  color: var(--bs-body-color);
  background-color: var(--bs-body-bg);
}
```

**Sass variables before the compiled CSS.** The CSS is already compiled and doesn't read `$border-radius`.

```scss
// ❌
$border-radius: 0.75rem;
@import "@dynamic-framework/ui-react/dist/css/dynamic-ui.css";
```

```css
/* ✅ A theme stylesheet loaded after Dynamic's */
:root,
[data-bs-theme="dynamic"] {
  --bs-border-radius: 0.75rem;
}
```

## Resources

- [Dynamic UI 2.12.0 Storybook](https://react.dynamicframework.dev/v2.12.0/)
- [Theming descriptor 2.12.0](https://cdn.dynamicframework.dev/assets/2.12.0/ui-react/tokens/token-overrides.json)
- [Extending Components](extending.html)
