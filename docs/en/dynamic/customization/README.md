---
search: true
---

# Customization

Customizing Dynamic Framework doesn't modify the package. A theme is a stylesheet loaded after the Dynamic UI CSS, and a custom component uses Dynamic's as its base. This section covers three paths.

## Overriding variables

[Theming](theming.html) describes the contract of the Dynamic UI 2.12.0 `--bs-*` tokens for whoever maintains the variable stylesheet by hand:

- Where the theme is loaded and why it wins, with and without `@layer`
- The color contract: `R, G, B` triplets, ramps and a full rebrand of a role
- Text on background, typography, radius, spacing and component variables
- Zones with their own palette

## Generating a theme

[Generating and validating a theme](theme-tools.html) is an optional workflow: `dynamic-theme-expand` writes the variable stylesheet from a short JSON file, and `dynamic-theme-validate` checks any theme stylesheet, generated or written by hand.

## Extending components

[Extending components](extending.html) explains how to build your own components from Dynamic's:

- Composition patterns
- Wrapper components
- Custom hooks

## Resources

- [Dynamic UI 2.12.0 Storybook](https://react.dynamicframework.dev/v2.12.0/)
- [Dynamic UI 2.12.0 CSS](https://cdn.dynamicframework.dev/assets/2.12.0/ui-react/css/dynamic-ui.min.css)
