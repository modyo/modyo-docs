---
search: true
---

# Dynamic Framework Components

Dynamic Framework offers 48+ specialized React components for the financial industry, designed to cover the most common needs in banking and financial applications.

## Component Catalog

Explore all components interactively in our [Storybook](https://react.dynamicframework.dev).

### Layout Components
- **DBox**: Container with flexible styling options
- **DCard**: Card container with Header, Body, and Footer sub-components
- **DLayout**: Page layout system with LayoutPane for responsive designs
- **DCollapse**: Collapsible content sections

### Navigation Components
- **DTabs**: Tab navigation with DTabContent for panel switching
- **DStepper**: Multi-step navigation (with DStepperDesktop and DStepperMobile variants)
- **DPaginator**: Pagination control for listings

### Form Components
- **DInput**: Text input with validation states
- **DInputCheck**: Checkbox input
- **DInputSwitch**: Toggle switch input
- **DInputCounter**: Numeric counter with increment/decrement
- **DInputCurrency**: Currency-formatted input
- **DInputMask**: Masked input for formatted data
- **DInputPassword**: Password input with visibility toggle
- **DInputPhone**: International phone number input
- **DInputPin**: PIN/code input with individual digit boxes
- **DInputRange**: Range slider input
- **DInputSelect**: Dropdown select input
- **DSelect**: Advanced select with search (uses react-select)
- **DDatePicker**: Date picker with calendar
- **DOtp**: One-time password input
- **DBoxFile**: File upload with drag-and-drop

### Data Display Components
- **DListGroup**: List container with DListGroupItem
- **DTimeline**: Timeline for event history
- **DCarousel**: Carousel/slider with DCarouselSlide
- **DCurrencyText**: Formatted currency display
- **DProgress**: Progress bar indicator
- **DVoucher**: Voucher/receipt display component

### Feedback Components
- **DAlert**: User notification messages
- **DModal**: Modal dialog with Header, Body, Footer
- **DOffcanvas**: Slide-out panel with Header, Body, Footer
- **DToast**: Temporary toast notifications (with DToastContainer)
- **DPopover**: Contextual popover
- **DTooltip**: Hover tooltips
- **DDropdown**: Dropdown menu

### Visual Components
- **DAvatar**: User avatar display
- **DBadge**: Status/count badges
- **DChip**: Compact element for tags/filters
- **DButton**: Action button with loading state
- **DButtonIcon**: Icon-only button
- **DIcon**: Icon component (uses Lucide Icons)
- **DIconBase**: Base icon with responsive size support

### Specialized Financial Components
- **DCreditCard**: Credit/debit card display with flip animation
- **DPasswordStrengthMeter**: Password strength indicator with validation

## Component Usage

All components are imported from `@dynamic-framework/ui-react`:

```tsx
import {
  DButton,
  DCard,
  DInput,
  DAlert
} from '@dynamic-framework/ui-react';

function MyComponent() {
  return (
    <DCard>
      <DCard.Header>
        <h5>Account Details</h5>
      </DCard.Header>
      <DCard.Body>
        <DInput
          id="account-name"
          label="Account Name"
          placeholder="Enter account name"
        />
        <DButton color="primary">
          Save Changes
        </DButton>
      </DCard.Body>
    </DCard>
  );
}
```

## Component Props

### Common Props

Most components share these common props:

| Prop | Type | Description |
|------|------|-------------|
| `className` | `string` | Additional CSS classes |
| `style` | `CSSProperties` | Inline styles |
| `id` | `string` | Element ID |

### Color Variants

Components that support colors use the `color` prop:

```tsx
<DButton color="primary">Primary</DButton>
<DButton color="secondary">Secondary</DButton>
<DButton color="success">Success</DButton>
<DButton color="danger">Danger</DButton>
<DButton color="warning">Warning</DButton>
<DButton color="info">Info</DButton>
```

### Size Variants

Components that support sizes use the `size` prop:

```tsx
<DButton size="sm">Small</DButton>
<DButton>Default</DButton>
<DButton size="lg">Large</DButton>
```

## Context Provider

Wrap your application with `DContextProvider` for global configuration:

```tsx
import { DContextProvider } from '@dynamic-framework/ui-react';

function App() {
  return (
    <DContextProvider>
      <YourApp />
    </DContextProvider>
  );
}
```

## Icon System

Dynamic UI 2.0 uses [Lucide Icons](https://lucide.dev). Use the `DIcon` component:

```tsx
import { DIcon } from '@dynamic-framework/ui-react';

<DIcon icon="check" />
<DIcon icon="alert-circle" size="lg" />
<DIcon icon="arrow-right" color="primary" />
```

## Accessibility

All Dynamic Framework components comply with WCAG 2.1 level AA standards:

- Complete **keyboard navigation**
- **Screen reader** compatible
- Adequate **color contrast**
- Appropriate **ARIA labels**
- Descriptive **error messages**

## Documentation and Support

Each component includes interactive documentation in our Storybook:

- Detailed documentation of props and methods
- Interactive code examples
- Best practice guides

Access complete documentation at [react.dynamicframework.dev](https://react.dynamicframework.dev)
