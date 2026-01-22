---
search: true
---

# Customization

Learn how to customize Dynamic Framework to fit your institution's visual identity.

## Section Contents

### [Theme System](theming.html)
Customize the visual appearance:
- Bootstrap CSS variables
- Color customization
- Typography
- Component-level styling

### [Extend Components](extending.html)
Create custom components:
- Composition patterns
- Wrapper components
- Custom hooks

## Customization Approaches

Dynamic Framework is built on Bootstrap 5, which means customization follows Bootstrap's established patterns.

### 1. CSS Variables (Runtime)

Override Bootstrap CSS variables for runtime customization:

```css
/* src/styles/custom.css */
:root {
  /* Colors */
  --bs-primary: #004B8D;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-danger: #dc3545;

  /* Typography */
  --bs-body-font-family: 'Inter', sans-serif;
  --bs-body-font-size: 1rem;
  --bs-body-line-height: 1.5;

  /* Border radius */
  --bs-border-radius: 0.375rem;
  --bs-border-radius-lg: 0.5rem;

  /* Spacing (used by utilities) */
  --bs-spacer: 1rem;
}
```

### 2. SCSS Variables (Build Time)

For deeper customization, override Bootstrap SCSS variables before importing:

```scss
// src/styles/custom.scss

// Override Bootstrap variables BEFORE importing
$primary: #004B8D;
$secondary: #00A0DF;
$font-family-base: 'Inter', sans-serif;
$border-radius: 0.5rem;
$btn-border-radius: 2rem; // Pill buttons

// Import Dynamic/Bootstrap styles
@import '@dynamic-framework/ui-react/dist/css/dynamic-ui.css';

// Your additional styles AFTER importing
.my-custom-class {
  // ...
}
```

### 3. Component-Level Styling

Style specific components using their CSS classes:

```css
/* Target Dynamic components */
.btn {
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.card {
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.form-control:focus {
  border-color: var(--bs-primary);
  box-shadow: 0 0 0 0.25rem rgba(0, 75, 141, 0.25);
}
```

## DContextProvider Configuration

Dynamic Framework uses `DContextProvider` to configure component behavior:

```tsx
// src/main.tsx
import { DContextProvider } from '@dynamic-framework/ui-react';

const config = {
  language: 'en',
  currency: {
    symbol: '$',
    precision: 2,
    separator: ',',
    decimal: '.',
  },
};

function App() {
  return (
    <DContextProvider {...config}>
      {/* Your app */}
    </DContextProvider>
  );
}
```

## Common Customizations

### Brand Colors

```css
:root {
  --bs-primary: #your-brand-color;
  --bs-primary-rgb: r, g, b; /* RGB values for opacity utilities */

  /* Generate color variants */
  --bs-link-color: var(--bs-primary);
  --bs-link-hover-color: #darker-shade;
}
```

### Custom Fonts

```css
/* Import your font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --bs-body-font-family: 'Inter', system-ui, sans-serif;
  --bs-headings-font-family: 'Inter', system-ui, sans-serif;
}
```

### Button Styles

```css
/* Rounded pill buttons */
.btn {
  --bs-btn-border-radius: 2rem;
}

/* Specific button variants */
.btn-primary {
  --bs-btn-bg: var(--bs-primary);
  --bs-btn-border-color: var(--bs-primary);
  --bs-btn-hover-bg: #003d73;
  --bs-btn-hover-border-color: #003d73;
}
```

### Card Styles

```css
.card {
  --bs-card-border-radius: 1rem;
  --bs-card-border-color: transparent;
  --bs-card-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
```

## Best Practices

### Do's

- **Use CSS variables** for runtime theming (dark mode, brand switching)
- **Use SCSS variables** for build-time customization
- **Follow Bootstrap patterns** to ensure compatibility
- **Test accessibility** - verify color contrast ratios
- **Check Storybook** for component-specific CSS properties

### Don'ts

- **Don't use `!important`** - use proper specificity instead
- **Don't modify node_modules** - override via CSS/SCSS
- **Don't hardcode colors** - use CSS variables for consistency
- **Don't skip testing** - verify changes across browsers

## Resources

- [Bootstrap CSS Variables](https://getbootstrap.com/docs/5.3/customize/css-variables/) - Complete variable reference
- [Bootstrap SCSS Variables](https://getbootstrap.com/docs/5.3/customize/sass/) - Sass customization guide
- [Dynamic Storybook](https://react.dynamicframework.dev) - Component CSS properties
- [Contrast Checker](https://webaim.org/resources/contrastchecker/) - Accessibility validation

## Next Steps

- Learn about [CSS variables and theming](theming.html)
- Discover how to [extend components](extending.html)
