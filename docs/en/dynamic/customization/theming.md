---
search: true
---

# Theming

Customize the visual appearance of Dynamic Framework components using CSS variables and Bootstrap's theming system.

## How Theming Works

Dynamic Framework is built on Bootstrap 5, which uses CSS custom properties (variables) extensively. You can customize the appearance by:

1. **Overriding CSS variables** - Change values at runtime
2. **Overriding SCSS variables** - Change values at build time
3. **Adding custom CSS** - Style specific components

## CSS Variables Reference

### Core Colors

Bootstrap defines these color variables that affect all components:

```css
:root {
  /* Theme colors */
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;

  /* RGB versions (for rgba() usage) */
  --bs-primary-rgb: 13, 110, 253;
  --bs-secondary-rgb: 108, 117, 125;
  /* ... */

  /* Body */
  --bs-body-color: #212529;
  --bs-body-bg: #fff;
}
```

### Typography

```css
:root {
  --bs-body-font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --bs-body-font-size: 1rem;
  --bs-body-font-weight: 400;
  --bs-body-line-height: 1.5;
}
```

### Spacing and Sizing

```css
:root {
  --bs-border-width: 1px;
  --bs-border-radius: 0.375rem;
  --bs-border-radius-sm: 0.25rem;
  --bs-border-radius-lg: 0.5rem;
  --bs-border-radius-xl: 1rem;
  --bs-border-radius-pill: 50rem;
}
```

## Customizing Your Theme

### Method 1: CSS File Override

Create a CSS file that overrides the default variables:

```css
/* src/styles/theme.css */
:root {
  /* Your brand colors */
  --bs-primary: #004B8D;
  --bs-primary-rgb: 0, 75, 141;
  --bs-secondary: #00A0DF;
  --bs-secondary-rgb: 0, 160, 223;

  /* Typography */
  --bs-body-font-family: 'Inter', system-ui, sans-serif;

  /* Rounded corners */
  --bs-border-radius: 0.5rem;
  --bs-border-radius-lg: 0.75rem;
}
```

Import this file **after** the Dynamic Framework CSS:

```tsx
// src/main.tsx
import '@dynamic-framework/ui-react/dist/css/dynamic-ui.css';
import './styles/theme.css'; // Your overrides
```

### Method 2: SCSS Customization

For build-time customization with more control:

```scss
// src/styles/theme.scss

// 1. Override Bootstrap variables
$primary: #004B8D;
$secondary: #00A0DF;
$font-family-base: 'Inter', system-ui, sans-serif;
$border-radius: 0.5rem;
$border-radius-lg: 0.75rem;

// Button-specific
$btn-border-radius: 2rem;
$btn-padding-y: 0.625rem;
$btn-padding-x: 1.5rem;

// Card-specific
$card-border-radius: 1rem;
$card-border-width: 0;
$card-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

// 2. Import Bootstrap (this uses your variables)
@import 'bootstrap/scss/bootstrap';

// 3. Your additional styles
.custom-class {
  // ...
}
```

## Component-Specific Theming

### Buttons

```css
/* All buttons */
.btn {
  --bs-btn-padding-x: 1.5rem;
  --bs-btn-padding-y: 0.625rem;
  --bs-btn-font-size: 0.875rem;
  --bs-btn-font-weight: 600;
  --bs-btn-border-radius: 2rem;
}

/* Primary button */
.btn-primary {
  --bs-btn-bg: #004B8D;
  --bs-btn-border-color: #004B8D;
  --bs-btn-hover-bg: #003d73;
  --bs-btn-hover-border-color: #003d73;
  --bs-btn-active-bg: #00315c;
  --bs-btn-disabled-bg: #6c9dc4;
}
```

### Cards

```css
.card {
  --bs-card-spacer-y: 1.5rem;
  --bs-card-spacer-x: 1.5rem;
  --bs-card-border-radius: 1rem;
  --bs-card-border-color: transparent;
  --bs-card-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
```

### Form Controls

```css
.form-control {
  --bs-border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  border-color: #dee2e6;
}

.form-control:focus {
  border-color: var(--bs-primary);
  box-shadow: 0 0 0 0.2rem rgba(0, 75, 141, 0.15);
}
```

### Alerts

```css
.alert-primary {
  --bs-alert-bg: #e7f1f9;
  --bs-alert-border-color: #b8d4ea;
  --bs-alert-color: #003d73;
}
```

## Dynamic Component Styling

Dynamic Framework components use Bootstrap classes. Reference the [Storybook](https://react.dynamicframework.dev) for component-specific CSS properties.

### DButton

```tsx
import { DButton } from '@dynamic-framework/ui-react';

// The component renders Bootstrap button classes
<DButton text="Click me" variant="primary" />
// Renders: <button class="btn btn-primary">Click me</button>
```

Style with standard Bootstrap button CSS:

```css
.btn-primary {
  /* Your styles */
}
```

### DCard

```tsx
import { DCard } from '@dynamic-framework/ui-react';

<DCard>
  <DCard.Header>Title</DCard.Header>
  <DCard.Body>Content</DCard.Body>
</DCard>
// Renders Bootstrap card structure
```

Style with standard Bootstrap card CSS:

```css
.card {
  /* Your styles */
}

.card-header {
  /* Header styles */
}

.card-body {
  /* Body styles */
}
```

### DInput

```tsx
import { DInput } from '@dynamic-framework/ui-react';

<DInput label="Email" type="email" />
// Renders Bootstrap form-control
```

Style with form classes:

```css
.form-control {
  /* Your styles */
}

.form-label {
  /* Label styles */
}
```

## Dark Mode

Implement dark mode by defining alternate variable values:

```css
/* Light mode (default) */
:root {
  --bs-body-bg: #ffffff;
  --bs-body-color: #212529;
  --bs-card-bg: #ffffff;
}

/* Dark mode */
[data-bs-theme="dark"] {
  --bs-body-bg: #121212;
  --bs-body-color: #e0e0e0;
  --bs-card-bg: #1e1e1e;
  --bs-border-color: #2d2d2d;
}
```

Toggle with JavaScript:

```tsx
function toggleDarkMode() {
  const html = document.documentElement;
  const current = html.getAttribute('data-bs-theme');
  html.setAttribute('data-bs-theme', current === 'dark' ? 'light' : 'dark');
}
```

## Best Practices

1. **Use CSS variables for dynamic values** - Colors that might change at runtime
2. **Use SCSS for structural changes** - Spacing, sizing, component structure
3. **Don't override with `!important`** - Use proper CSS specificity
4. **Test contrast ratios** - Ensure accessibility with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
5. **Check Storybook** - View component CSS properties at [react.dynamicframework.dev](https://react.dynamicframework.dev)

## Resources

- [Bootstrap CSS Variables](https://getbootstrap.com/docs/5.3/customize/css-variables/)
- [Bootstrap Sass Variables](https://getbootstrap.com/docs/5.3/customize/sass/)
- [Dynamic Storybook](https://react.dynamicframework.dev)
