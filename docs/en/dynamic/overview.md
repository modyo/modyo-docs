---
search: true
---

# Technical Overview

Dynamic Framework is a React component framework specialized for financial applications, built on Bootstrap 5 and optimized for micro frontend architectures.

## Architecture

### Component Structure

```
@dynamic-framework/
├── ui-react/           # React components
│   ├── components/     # ~47 UI components
│   ├── hooks/         # Custom React hooks
│   └── utils/         # Utilities
├── styles/            # Design system
│   ├── theme/         # Variables and themes
│   └── components/    # Per-component styles
└── widgets/           # Standalone widgets
```

### Technology Stack

- **React 18/19**: With Hooks, Suspense and Concurrent Features
- **TypeScript**: Full static typing
- **Bootstrap 5.3+**: Design system foundation
- **Webpack 5**: Module Federation for micro frontends
- **CSS Modules**: Encapsulated styles
- **PostCSS**: Advanced CSS processing

## Core Components

### Component Categories

1. **Layout Components**
   - Container, Grid, Row, Col
   - Flexbox utilities
   - Spacing system

2. **Data Display**
   - Tables with sorting and filtering
   - Cards with multiple variants
   - Lists and ListGroups

3. **Forms & Inputs**
   - Input with integrated validation
   - Select, Checkbox, Radio
   - DatePicker, TimePicker
   - Form validation hooks

4. **Navigation**
   - Responsive Navbar
   - Sidebar with sub-menus
   - Breadcrumbs
   - Pagination

5. **Feedback**
   - Alerts and Toasts
   - Modals and Dialogs
   - Progress indicators
   - Spinners

6. **Financial Components**
   - DCreditCard (card visualization)
   - DInputCurrency (currency input)
   - DVoucher (receipts/vouchers)
   - DCurrencyText (currency formatting)

## Implementation Patterns

### Component API Pattern

```jsx
// Flexible composition
<Card>
  <Card.Header>
    <Card.Title>Title</Card.Title>
  </Card.Header>
  <Card.Body>
    Content
  </Card.Body>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>
```

### Hook Pattern

```jsx
// Custom hooks for reusable logic
const { 
  data, 
  loading, 
  error, 
  refetch 
} = useApiData('/api/accounts');
```

### Theme Provider Pattern

```jsx
// Centralized theming
<ThemeProvider theme={customTheme}>
  <App />
</ThemeProvider>
```

## Design System

### Design Tokens

```scss
// Customizable CSS variables
:root {
  // Colors
  --df-primary: #0066ff;
  --df-secondary: #6c757d;
  
  // Spacing
  --df-spacing-xs: 0.25rem;
  --df-spacing-sm: 0.5rem;
  --df-spacing-md: 1rem;
  
  // Typography
  --df-font-family: 'Jost', sans-serif;
  --df-font-size-base: 1rem;
  
  // Borders
  --df-border-radius: 0.375rem;
  --df-border-width: 1px;
}
```

### Responsive Breakpoints

```scss
// Bootstrap 5 breakpoints
$breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
```

## Micro Frontends

### Module Federation Config

```javascript
// webpack.config.js
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'app',
      filename: 'remoteEntry.js',
      exposes: {
        './Component': './src/Component'
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        '@dynamic-framework/ui-react': { singleton: true }
      }
    })
  ]
};
```

### Lazy Loading

```jsx
// Automatic code splitting
const Dashboard = lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Dashboard />
    </Suspense>
  );
}
```

## Performance

### Built-in Optimizations

- **Tree Shaking**: Import only what's needed
- **Code Splitting**: On-demand loading
- **Memoization**: React.memo on components
- **Virtual Scrolling**: For long lists
- **Image Optimization**: Lazy loading images
- **CSS-in-JS**: Critical styles inline

### Bundle Size

```
@dynamic-framework/ui-react: ~150KB gzipped
├── react: 42KB
├── components: 85KB
└── styles: 23KB
```

## Testing

### Testing Stack

```json
{
  "jest": "^29.0.0",
  "@testing-library/react": "^14.0.0",
  "@testing-library/jest-dom": "^6.0.0",
  "cypress": "^13.0.0"
}
```

### Testing Patterns

```jsx
// Unit testing
describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});

// Integration testing
describe('TransferForm', () => {
  it('submits transfer data', async () => {
    const onSubmit = jest.fn();
    render(<TransferForm onSubmit={onSubmit} />);
    
    // Fill form...
    fireEvent.click(screen.getByText('Submit'));
    
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalled();
    });
  });
});
```

## Build Tools

### Development Server

```bash
# Webpack Dev Server with HMR
npm start
# Available at http://localhost:8080
```

### Production Build

```bash
# Optimized production build
npm run build
# Output in dist/
```

### Bundle Analysis

```bash
# Bundle analyzer
npm run analyze
```

## Modyo Integration

### Modyo CLI

```bash
# Initialize project
npx @modyo/cli init

# Push to Modyo
npx @modyo/cli push

# Pull from Modyo
npx @modyo/cli pull
```

### Widget Registration

```javascript
// Widget registration in Modyo
window.registerWidget({
  name: 'MyWidget',
  component: MyWidget,
  props: {
    // Widget props
  }
});
```

## Versioning

### Semantic Versioning

```
@dynamic-framework/ui-react@2.0.0
│                           │ │ │
│                           │ │ └─ Patch: Bug fixes
│                           │ └─── Minor: New features
│                           └───── Major: Breaking changes
```

### Release Cycle

- **Patch releases**: Weekly
- **Minor releases**: Monthly
- **Major releases**: Annually

## Technical Resources

- [API Reference](https://dynamic.modyo.com/docs/api)
- [Storybook](https://react.dynamicframework.dev)
- [GitHub](https://github.com/modyo/dynamic-framework)
- [NPM Package](https://www.npmjs.com/package/@dynamic-framework/ui-react)