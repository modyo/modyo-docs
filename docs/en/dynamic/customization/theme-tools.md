---
search: true
---

# Generating and validating a theme

Generating a theme with Dynamic's tools is an optional workflow: the result is the same variable stylesheet that [Theming](theming.html) describes, written from a short JSON file instead of by hand. Since version 2.12.0, `@dynamic-framework/ui-react` includes two commands: `dynamic-theme-expand`, which turns the JSON into CSS, and `dynamic-theme-validate`, which checks a theme CSS file.

## When it pays off

- A rebrand of several roles, where writing 12 variables per role by hand is slow and error-prone.
- A theme with zones, which adds per-component blocks inside each one.
- A theme that is maintained over time and regenerated with every Dynamic version.

For a one-off adjustment, such as a radius or a link color, editing the variable stylesheet is enough.

## What it assumes

- Node.js 22 or later on the machine of whoever builds the theme. The site doesn't need Node.
- A source JSON under version control: that is what gets edited.
- A generated CSS file that is uploaded to the site like any other stylesheet, loaded after the Dynamic CSS. That CSS isn't edited by hand: it is regenerated from the JSON.

## Installation and usage

```bash
npm i -D @dynamic-framework/ui-react@2.12.1
npx dynamic-theme-expand theme.json -o theme.css
npx dynamic-theme-validate theme.css --strict
```

Without `-o`, `dynamic-theme-expand` writes the CSS next to the JSON, with the same name and a `.css` extension. If the JSON has errors, the command lists them all, exits with code 1 and doesn't write the CSS. `dynamic-theme-validate` exits with code 1 when it finds errors, so it can run in CI.

The CSS starts with a header that states which `@dynamic-framework/ui-react` version it was generated for.

## The input JSON

```json
{
  "name": "Example theme",
  "version": "1.0.0",
  "roles": { "primary": "#166e62" },
  "body": { "bg": "245, 246, 250", "color": "21, 21, 26" },
  "typography": {
    "fontFamily": "\"Inter\", sans-serif",
    "scale": { "1": "2.75rem", "2": "2.25rem" }
  },
  "radius": "0.5rem"
}
```

Colors accept hex, an `"R, G, B"` triplet or any CSS color.

| Key | Required | What it is |
|---|---|---|
| `name`, `version` | no | Header of the generated CSS |
| `roles.<role>` | at least one role, or `gray` | Base color of `primary`, `secondary`, `success`, `info`, `warning`, `danger`, `light` or `dark`. Generates the base, the ramp (if the role has one) and, except for `secondary`, the text of `.text-bg-<role>` |
| `gray` | no | Derives the gray ramp from one color. It changes the character of the neutral, not just its hue |
| `body.bg`, `body.color` | in a full theme | Document background and text |
| `body.borderColor` | no | Border color. Defaults to Dynamic's |
| `typography.fontFamily` | in a full theme | The font family. Emitted as `--bs-font-sans-serif` |
| `typography.scale.<1-6>` | no | Heading size per step, in `rem`. Fluid steps come out with their cap in `@media (min-width: 1200px)` |
| `radius` | in a full theme | Base radius in `rem`. `sm`, `lg`, `xl` and `xxl` are derived from it (×0.5, ×2, ×3, ×4) |
| `root` | no | Map of `--bs-*` → value, emitted as is in the root block |
| `components` | no | List of `{ selector, vars, declarations }`: one block per selector. `declarations` only accepts `padding`, `border-radius`, `border-color`, `font-family` and `font-variant-numeric` |
| `zones` | no | Map of `<name>` → `{ vars, nav, components }`: a `[data-bs-theme="<name>"]` block, one block for `.nav` and another for `.nav-pills`, and one block per component inside the zone. In `vars` the triplets are enough: the generator emits the wrapper of each triplet the zone redefines right after it, and emits `color` and `background-color` when the zone redefines the body background or text triplet (one of the two is enough) |

Without `body`, `typography` and `radius`, the theme is partial: see [A single role](#a-single-role).

Every `var(--bs-…)` reference in `root`, `components` and `zones` is checked against the variables that exist in the CSS of the installed version. A reference to a variable that doesn't exist is an error.

## A single role

A JSON without `body`, `typography` and `radius` generates only the ramps of the listed roles, in a block to add to an existing theme stylesheet. It accepts `roles`, `gray`, `name` and `version`.

```json
{ "roles": { "primary": "#166e62" } }
```

```css
/*
 * Para @dynamic-framework/ui-react 2.12.1.
 * Bloque parcial para incorporar a una hoja de theme existente.
 * Se carga después del CSS de Dynamic UI.
 */

:root,
[data-bs-theme="dynamic"] {
  /* Role primary */
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

The leaves come from mixing the base in sRGB with white (95, 90, 80, 60, 40 and 20 % for steps 25 to 400) and with black (20, 40, 60 and 80 % for steps 600 to 900), the same recipe Dynamic uses for its palette.

## What it validates

`dynamic-theme-validate` checks any theme CSS, generated or written by hand. Each contrast is measured in its context: the root block, each component block and each zone. The threshold is 4.5:1 and is changed with `--min-contrast`.

| Severity | Rules |
|---|---|
| Error | `vacio`, `triplete`, `ciclo`, `wrapper`, `rampa-incompleta`, `paso-500`, `superficie-faltante`, `border-color`, `where`, `tipografia`, `tipografia-breakpoint`, `monotonia`, `contraste-boton`, `contraste-nav-pills`, `contraste-zona`, `contraste-horneado`, `contraste-enlace-zona` below 3:1 |
| Warning | `wrapper-faltante-zona`, `rampa-inexistente`, `rampa-irresoluble`, `tipografia-familia`, `contraste-irresoluble`, `contraste-superficie`, `zona-pegada`, `contraste-preexistente`, `contraste-horneado` on `.text-bg-secondary`, `contraste-enlace-zona` between 3:1 and 4.5:1 |
| Note | `superficie-heredada`, `literal` |

With errors, the command exits with code 1. With `--strict`, it also exits with code 1 when there are warnings; notes don't change the exit code.

## The token-overrides.json descriptor

`token-overrides.json` describes which Dynamic variables can be overridden and how they behave. It is published per version, next to the CSS of that same version: `https://cdn.dynamicframework.dev/assets/2.12.1/ui-react/tokens/token-overrides.json`. It is meant for the tools and agents that generate themes. `dynamic-theme-expand` and `dynamic-theme-validate` don't download it: they check variable names against `known-tokens.json`, the inventory that ships in the installed package. A hand-written theme doesn't need the descriptor.

Each variable carries a class:

| Class | What it means |
|---|---|
| `override-base` | The `-rgb` base of a role. It drags the wrapper and step 500 along, but not the rest of the ramp |
| `override-leaf` | A literal value. Overridden one by one; it doesn't follow the base |
| `follows` | An alias or wrapper that recomputes itself. Not overridden |
| `not-overridable` | A value inside a data-URI. Replace the whole variable |

## Resources

- [Theming](theming.html): the contract the generated CSS follows.
- [`token-overrides.json` 2.12.1](https://cdn.dynamicframework.dev/assets/2.12.1/ui-react/tokens/token-overrides.json)
- [Dynamic UI 2.12.1 Storybook](https://react.dynamicframework.dev/v2.12.1/)
