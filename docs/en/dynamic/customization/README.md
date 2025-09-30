---
search: true
---

# Customization

Learn how to customize Dynamic Framework to perfectly fit your institution's identity and needs.

## Section Contents

### [Theme System](theming.html)
Complete look & feel customization:
- Theme variables
- Color palettes
- Typography
- Spacing and sizes

### [Styles and CSS](styling.html)
Advanced styling techniques:
- CSS Modules
- Styled Components
- CSS utilities
- Responsive design

### [Extend Components](extending.html)
Create your own components or extend existing ones:
- Component inheritance
- Advanced composition
- Custom props
- Wrapper components

## Customization Levels

### Level 1: Basic Configuration
Simple changes through configuration variables:

```javascript
// theme.config.js
export default {
  colors: {
    primary: '#004B8D',
    secondary: '#00A0DF'
  },
  typography: {
    fontFamily: 'Inter, sans-serif'
  }
};
```

### Level 2: CSS Styles
Override specific styles:

```scss
// custom.scss
.df-button {
  border-radius: 12px;
  text-transform: uppercase;
  
  &--primary {
    background: linear-gradient(135deg, $primary, $secondary);
  }
}
```

### Level 3: Extended Components
Extend base component functionality:

```jsx
// CustomButton.jsx
import { Button } from '@dynamic-framework/ui-react';

const CustomButton = ({ children, ...props }) => (
  <Button 
    {...props}
    className="custom-button"
    onClick={(e) => {
      analytics.track('button_click');
      props.onClick?.(e);
    }}
  >
    {children}
  </Button>
);
```

### Level 4: Custom Components
Create completely new components:

```jsx
// BiometricAuth.jsx
const BiometricAuth = ({ onSuccess, onError }) => {
  // Custom implementation
  return (
    <div className="biometric-auth">
      {/* Your unique component */}
    </div>
  );
};
```

## Customization Strategies

### Complete White Labeling

For institutions that need a unique visual identity:

1. **Define your design system**
   - Corporate colors
   - Custom typography
   - Personalized iconography
   - Visual patterns

2. **Implement the theme**
   - Create variables file
   - Override base components
   - Add unique elements

3. **Maintain consistency**
   - Document decisions
   - Create style guide
   - Automate validations

### Progressive Customization

Recommended approach for quick implementations:

```
Phase 1: Use Dynamic defaults
↓
Phase 2: Adjust colors and logos
↓
Phase 3: Customize key components
↓
Phase 4: Add custom components
↓
Phase 5: Continuous refinement
```

### Multi-tenancy

For institutions with multiple brands:

```javascript
// multi-theme.js
const themes = {
  'brand-a': {
    primary: '#FF0000',
    logo: '/logos/brand-a.svg'
  },
  'brand-b': {
    primary: '#00FF00',
    logo: '/logos/brand-b.svg'
  }
};

// Apply theme dynamically
<ThemeProvider theme={themes[currentBrand]}>
  <App />
</ThemeProvider>
```

## Customization Tools

### Theme Builder
Visual tool for creating themes:
- Real-time preview
- Variable export
- Accessibility validation
- Documentation generation

### Design Tokens
Token system to maintain consistency:

```json
{
  "color": {
    "primary": {
      "value": "#004B8D",
      "type": "color"
    }
  },
  "spacing": {
    "small": {
      "value": "8px",
      "type": "spacing"
    }
  }
}
```

### Storybook
Document and test customizations:
- Component catalog
- Visual variants
- Interactive states
- Living documentation

## Common Use Cases

### Dark Mode
```scss
[data-theme="dark"] {
  --df-bg-primary: #1a1a1a;
  --df-text-primary: #ffffff;
  --df-border-color: #333333;
}
```

### High Contrast Mode
```scss
[data-contrast="high"] {
  --df-text-primary: #000000;
  --df-bg-primary: #ffffff;
  --df-border-width: 2px;
}
```

### Seasonal Themes
```javascript
const seasonalThemes = {
  christmas: {
    primary: '#c41e3a',
    secondary: '#165b33'
  },
  summer: {
    primary: '#ffd700',
    secondary: '#00bfff'
  }
};
```

## Best Practices

### Recommendations

1. **Maintain accessibility**
   - Verify color contrast
   - Test with screen readers
   - Validate keyboard navigation

2. **Document changes**
   - Create customization changelog
   - Keep style guide updated
   - Comment custom code

3. **Version themes**
   - Use version control
   - Tag important releases
   - Maintain backups

4. **Optimize performance**
   - Minimize custom CSS
   - Use CSS variables for dynamic themes
   - Lazy load alternative themes

### Precautions

1. **Don't modify core**
   - Never edit Dynamic files directly
   - Use extension, not modification
   - Maintain upgradeability

2. **Avoid !important**
   - Use correct specificity
   - Leverage CSS cascade
   - Keep code clean

3. **Test cross-browser**
   - Test on all target browsers
   - Validate on different devices
   - Consider progressive enhancement

## Real Examples

### Bank with Strong Identity
```scss
// Complete customization maintaining Dynamic
.df-component {
  // Respect base structure
  @extend %df-component-base;
  
  // Add customization
  border-radius: var(--bank-radius);
  box-shadow: var(--bank-shadow);
  
  &::before {
    content: '';
    background: url('/bank-pattern.svg');
  }
}
```

### Minimalist Fintech
```javascript
// Minimalist theme
const minimalTheme = {
  colors: {
    primary: '#000000',
    secondary: '#ffffff',
    accent: '#0066ff'
  },
  typography: {
    fontFamily: 'Helvetica Neue, sans-serif',
    scale: 1.25
  },
  spacing: {
    unit: 16
  },
  borders: {
    radius: 0,
    width: 1
  }
};
```

## Resources

- **Figma UI Kit**: Design with Dynamic components
- **Theme Gallery**: Customization examples
- **Color Tools**: Accessible palette generators
- **Icon Library**: Financial icon library

## Support

Need help with customization?

- **Design consultation**: Sessions with UX experts
- **Accessibility review**: Customization audit
- **Optimization**: Performance analysis
- **Training**: Customization workshops

## Next Steps

- Explore the [theme system](theming.html)
- Learn about [styles and CSS](styling.html)
- Discover how to [extend components](extending.html)