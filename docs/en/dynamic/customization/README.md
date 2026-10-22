---
search: true
---

# Customization

Customizing Dynamic Framework covers two things: adjusting the look of Dynamic UI with a theme, and building your own components on top of the library's. Neither one modifies the package: a theme is a stylesheet loaded after the Dynamic CSS, and a custom component builds on Dynamic's components.

## Section contents

### [Theming](theming.html)

How to override the Dynamic UI `--bs-*` tokens:

- The color contract: `R, G, B` triplets, ramps and a full role rebrand
- Text on background, typography, radius and spacing
- Zones with their own palette
- The `token-overrides.json` descriptor and the `dynamic-theme-expand` and `dynamic-theme-validate` tools

### [Extending Components](extending.html)

How to build your own components from Dynamic's:

- Composition patterns
- Wrapper components
- Custom hooks

## Requirements

- `@dynamic-framework/ui-react` 2.12.0 or later for the theme tools; the token contract is the one of the version you load.
- The Dynamic UI CSS loaded on the page (`dist/css/dynamic-ui.css` from the package or `css/dynamic-ui.min.css` from the versioned CDN) before the theme CSS.
- React 18 or 19 and Node.js 22 or later, per the package's `package.json`.

## Resources

- [Dynamic UI 2.12.0 Storybook](https://react.dynamicframework.dev/v2.12.0/)
