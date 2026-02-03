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
│   ├── components/     # 43 UI components
│   ├── hooks/         # Custom React hooks
│   └── utils/         # Utilities
├── styles/            # Design system (Bootstrap 5.3)
│   ├── theme/         # Variables and themes
│   └── components/    # Per-component styles
└── contexts/          # React contexts
```

### Technology Stack

- **React 19.x**: With Hooks, Suspense and Concurrent Features (requires ~19.2.1)
- **TypeScript**: Full static typing
- **Bootstrap 5.3.8**: Design system foundation
- **Vite**: Fast builds and HMR for development
- **CSS Modules**: Encapsulated styles
- **PostCSS**: Advanced CSS processing

## Core Components

### Component Categories

1. **Layout Components**
   - DBox, DCard, DLayout, DCollapse
   - Flexbox utilities
   - Spacing system

2. **Navigation Components**
   - DTabs for tab navigation
   - DStepper for multi-step flows
   - DPaginator for pagination

3. **Form Components**
   - DInput, DInputPassword, DInputCurrency
   - DSelect, DInputSelect, DDatePicker
   - DInputCheck, DInputSwitch, DPasswordStrengthMeter

4. **Data Display Components**
   - DListGroup, DTimeline, DCarousel
   - DCurrencyText, DProgress

5. **Feedback Components**
   - DAlert, DToast, DModal, DOffcanvas
   - DPopover, DTooltip, DDropdown

6. **Visual Components**
   - DAvatar, DBadge, DChip
   - DButton, DButtonIcon, DIcon

7. **Financial Components**
   - DCreditCard, DVoucher
   - DOtp

## Implementation Patterns

### Component API Pattern

```jsx
// Flexible composition
<DCard>
  <DCard.Header>
    <h5 className="card-title mb-0">Title</h5>
  </DCard.Header>
  <DCard.Body>
    Content
  </DCard.Body>
  <DCard.Footer>
    <DButton text="Action" />
  </DCard.Footer>
</DCard>
```

## Design System

### Design Tokens

Dynamic Framework uses Bootstrap 5's CSS custom properties (variables) with the `--bs-` prefix:

```css
:root {
  /* Theme colors */
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-danger: #dc3545;
  --bs-warning: #ffc107;
  --bs-info: #0dcaf0;

  /* Typography */
  --bs-body-font-family: var(--bs-font-sans-serif);
  --bs-body-font-size: 1rem;
  --bs-body-font-weight: 400;
  --bs-body-line-height: 1.5;

  /* Borders */
  --bs-border-radius: 0.375rem;
  --bs-border-radius-sm: 0.25rem;
  --bs-border-radius-lg: 0.5rem;
  --bs-border-width: 1px;
  --bs-border-color: #dee2e6;
}
```

To customize these values, override them in your CSS or SCSS. See [Theming](customization/theming.html) for detailed customization guides and the [Storybook](https://react.dynamicframework.dev) for a complete list of available variables.

### Responsive Breakpoints

Dynamic Framework uses Bootstrap 5's standard breakpoints:

| Breakpoint | Class infix | Dimensions |
|------------|-------------|------------|
| Extra small | None | <576px |
| Small | `sm` | ≥576px |
| Medium | `md` | ≥768px |
| Large | `lg` | ≥992px |
| Extra large | `xl` | ≥1200px |
| Extra extra large | `xxl` | ≥1400px |

#### Using Breakpoints in CSS

```scss
// SCSS with Bootstrap mixins
@import "bootstrap/scss/mixins/breakpoints";

.my-component {
  padding: 1rem;

  @include media-breakpoint-up(md) {
    padding: 2rem;
  }

  @include media-breakpoint-up(lg) {
    padding: 3rem;
  }
}
```

#### Using Breakpoints in React

Dynamic exports the `useScreenDimensions` hook for responsive logic in components:

```tsx
import { useScreenDimensions } from '@dynamic-framework/ui-react';

function ResponsiveComponent() {
  const { isMobile, isTablet, isDesktop } = useScreenDimensions();

  return (
    <div>
      {isMobile && <MobileLayout />}
      {isTablet && <TabletLayout />}
      {isDesktop && <DesktopLayout />}
    </div>
  );
}
```

## Micro Frontends

Dynamic Framework widgets are self-contained micro frontends that deploy as independent bundles to the Modyo platform.

### Widget Architecture

Each widget is a standalone React application with its own entry point:

```
my-widget/
├── src/
│   ├── main.tsx         # Entry point
│   ├── App.tsx          # Root component
│   ├── components/      # Widget components
│   ├── providers/       # React providers
│   ├── services/        # API services
│   └── store/           # Zustand stores
├── public/
│   └── index.html       # Development template
└── vite.config.ts       # Build configuration
```

### Entry Point Pattern

Widgets use a provider-based architecture with `main.tsx` as the entry point:

```tsx
// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DContextProvider } from '@dynamic-framework/ui-react';

import App from './App';
import './config/i18nConfig';
import './styles/base.scss';

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(
    <StrictMode>
      <DContextProvider>
        <App />
      </DContextProvider>
    </StrictMode>
  );
}
```

```tsx
// src/App.tsx
import { QueryProvider } from './providers/QueryProvider';
import { ErrorBoundary } from './components';

function App() {
  return (
    <QueryProvider>
      <ErrorBoundary>
        {/* Widget content */}
      </ErrorBoundary>
    </QueryProvider>
  );
}

export default App;
```

This pattern ensures:
- Proper provider composition (Dynamic Context, React Query, Error Boundary)
- Configuration initialization on import
- Strict mode for development checks

### Modyo Integration

Widgets are deployed to Modyo using the Modyo CLI. The platform handles bundle hosting, versioning, and injection into pages automatically.

Configuration can be passed to widgets via Liquid variables (see [Liquid Environment Pattern](development/widgets.html#liquid-environment-pattern)).

### When to Use Internal Code Splitting

For larger widgets with multiple views, use React.lazy for internal routes:

```tsx
// Only for widgets with multiple internal routes
import { lazy, Suspense } from 'react';
import { DProgress } from '@dynamic-framework/ui-react';

const AccountDetails = lazy(() => import('./views/AccountDetails'));
const TransferForm = lazy(() => import('./views/TransferForm'));

function App() {
  return (
    <Suspense fallback={<DProgress />}>
      <Routes>
        <Route path="/" element={<AccountDetails />} />
        <Route path="/transfer" element={<TransferForm />} />
      </Routes>
    </Suspense>
  );
}
```

:::tip When to Split
Use internal code splitting only when your widget has multiple distinct views. For simple, single-view widgets, the overhead isn't worth it.
:::

## Testing

### Testing Stack

```json
{
  "jest": "^29.7.0",
  "@testing-library/react": "^16.3.0",
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
describe('DInput', () => {
  it('validates input correctly', async () => {
    const onChange = jest.fn();
    render(<DInput id="test" onChange={onChange} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });

    await waitFor(() => {
      expect(onChange).toHaveBeenCalled();
    });
  });
});
```

## Build Tools

### Development Server

```bash
# Vite dev server with HMR
npm run start
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
# Push widget to Modyo
npx @modyo/cli push
```

See the [Modyo CLI documentation](/en/platform/tools/cli.html) for all available commands and options.

## Versioning

### Semantic Versioning

```
@dynamic-framework/ui-react@2.1.1
│                           │ │ │
│                           │ │ └─ Patch: Bug fixes
│                           │ └─── Minor: New features
│                           └───── Major: Breaking changes
```

## Technical Resources

- [Storybook](https://react.dynamicframework.dev)
- [NPM Package](https://www.npmjs.com/package/@dynamic-framework/ui-react)