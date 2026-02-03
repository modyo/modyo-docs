---
search: true
---

# Dynamic Framework Components

Dynamic Framework offers 43 specialized React components for the financial industry, designed to cover the most common needs in banking and financial applications.

## Component Catalog

Explore all components interactively in our [Storybook](https://react.dynamicframework.dev).

### Layout Components
- **DBox**: Container with flexible styling options
- **DCard**: Card container with Header, Body, and Footer sub-components
- **DLayout**: Page layout system with LayoutPane for responsive designs
- **DCollapse**: Collapsible content sections (supports controlled and uncontrolled modes)

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
- **DPasswordStrengthMeter**: Password strength indicator with validation
- **DBoxFile**: File upload with drag-and-drop

### Data Display Components
- **DListGroup**: List container with DListGroupItem
- **DTimeline**: Timeline for event history
- **DCarousel**: Carousel/slider with DCarouselSlide
- **DCurrencyText**: Formatted currency display
- **DProgress**: Progress bar indicator

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

### Specialized Financial Components
- **DCreditCard**: Credit/debit card display with flip animation
- **DVoucher**: Voucher/receipt display component
- **DOtp**: One-time password input

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

## Hooks Exported by the Library

These hooks are **actually exported** from `@dynamic-framework/ui-react`:

```tsx
import {
  // Context hooks
  useDContext,           // Access DContextProvider values
  useDPortalContext,     // Access portal context for modals

  // Component-specific hooks
  useDToast,             // Programmatic toast notifications
  useTabContext,         // Access tab state within DTabs
  useErrorBoundary,      // Error boundary control (reset, show)

  // Currency hooks
  useFormatCurrency,     // Currency formatting utilities
  useInputCurrency,      // Currency input handling

  // Responsive hooks
  useMediaQuery,         // Custom media query detection
  useMediaBreakpointUpSm,  // Breakpoint detection (sm and up)
  useMediaBreakpointUpMd,  // Breakpoint detection (md and up)
  useMediaBreakpointUpLg,  // Breakpoint detection (lg and up)
  useMediaBreakpointUpXl,  // Breakpoint detection (xl and up)
  useMediaBreakpointUpXxl, // Breakpoint detection (xxl and up)

  // Utility hooks
  useStackState,         // Stack-based state management
  usePortal,             // Portal management
  useItemSelection,      // List item selection management
} from '@dynamic-framework/ui-react';
```

### Additional Utilities

```tsx
import {
  getErrorMessage,       // Extract error message from unknown errors
} from '@dynamic-framework/ui-react';
```

:::warning Implementation Patterns vs Library Exports
Hooks like `useApi`, `useAccounts`, or `useFormValidation` shown in documentation are **implementation patterns** you create in your project, NOT exports from the library. See [API Integration](api-integration.html) for pattern examples.
:::

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

Dynamic UI 2.0 uses [Lucide Icons](https://lucide.dev), a modern, consistent icon library with 1000+ icons. Use the `DIcon` component to render icons.

:::danger Critical: PascalCase Format Required
Icons **must** use PascalCase format. Using kebab-case will show a "?" placeholder.
:::

### Basic Usage

```tsx
import { DIcon } from '@dynamic-framework/ui-react';

// ✅ Correct - PascalCase
<DIcon icon="Check" />
<DIcon icon="AlertCircle" />
<DIcon icon="ArrowRight" />
<DIcon icon="CreditCard" />

// ❌ Wrong - kebab-case (will show "?")
<DIcon icon="check" />
<DIcon icon="alert-circle" />
```

### Icon Sizing

Use the `size` prop with exact CSS values:

```tsx
<DIcon icon="Home" size="1rem" />    {/* 16px */}
<DIcon icon="Home" size="1.5rem" />  {/* 24px - default */}
<DIcon icon="Home" size="2rem" />    {/* 32px */}
<DIcon icon="Home" size="48px" />    {/* 48px */}
```

#### Responsive Sizes

Icons support responsive sizing with breakpoint-specific values:

```tsx
<DIcon
  icon="Home"
  size={{
    xs: "1rem",      // Mobile
    md: "1.5rem",    // Tablet
    lg: "2rem"       // Desktop
  }}
/>
```

Available breakpoints: `xs`, `sm`, `md`, `lg`, `xl`, `xxl`

### Icon Colors

Icons inherit their color from the parent's `color` CSS property by default. Use the `color` prop for theme colors:

```tsx
<DIcon icon="Check" color="success" />
<DIcon icon="X" color="danger" />
<DIcon icon="AlertCircle" color="warning" />
<DIcon icon="Info" color="info" />
<DIcon icon="Star" color="primary" />
```

For custom colors, use CSS:

```tsx
<DIcon icon="Heart" style={{ color: '#e91e63' }} />
```

### Finding Icons

Browse all available icons at [lucide.dev/icons](https://lucide.dev/icons). When you find an icon:

1. Note the icon name (e.g., `arrow-right`)
2. Convert to PascalCase (e.g., `ArrowRight`)
3. Use in DIcon: `<DIcon icon="ArrowRight" />`

### Icons by Category

#### Navigation
`Home`, `Menu`, `X`, `ChevronLeft`, `ChevronRight`, `ChevronUp`, `ChevronDown`, `ArrowLeft`, `ArrowRight`, `ExternalLink`, `MoreHorizontal`, `MoreVertical`

#### Actions
`Plus`, `Minus`, `Check`, `X`, `Edit`, `Pencil`, `Trash2`, `Copy`, `Download`, `Upload`, `Share`, `Send`, `Save`, `RefreshCw`

#### User & Account
`User`, `Users`, `UserPlus`, `UserMinus`, `UserCheck`, `LogIn`, `LogOut`, `Key`, `Lock`, `Unlock`, `Shield`, `Settings`

#### Communication
`Mail`, `MessageSquare`, `MessageCircle`, `Phone`, `Bell`, `BellOff`, `AtSign`

#### Media
`Image`, `Camera`, `Video`, `Play`, `Pause`, `Volume2`, `VolumeX`, `Mic`, `MicOff`

#### Files & Data
`File`, `FileText`, `Folder`, `FolderOpen`, `Archive`, `Clipboard`, `Database`

#### Financial (Banking Apps)
`CreditCard`, `Wallet`, `DollarSign`, `Banknote`, `PiggyBank`, `TrendingUp`, `TrendingDown`, `BarChart`, `PieChart`, `Receipt`, `Calculator`

#### Status & Feedback
`AlertCircle`, `AlertTriangle`, `Info`, `HelpCircle`, `CheckCircle`, `XCircle`, `Clock`, `Loader`

#### Misc
`Search`, `Filter`, `Calendar`, `MapPin`, `Globe`, `Link`, `Eye`, `EyeOff`, `Star`, `Heart`, `ThumbsUp`, `ThumbsDown`

### Icons in Buttons

Use `DButtonIcon` for icon-only buttons with proper accessibility:

```tsx
import { DButtonIcon } from '@dynamic-framework/ui-react';

<DButtonIcon icon="Pencil" ariaLabel="Edit item" />
<DButtonIcon icon="Trash2" ariaLabel="Delete item" color="danger" />
<DButtonIcon icon="Plus" ariaLabel="Add new" variant="outline" />
```

For buttons with both icon and text, use `DButton` with `iconStart` or `iconEnd`:

```tsx
import { DButton } from '@dynamic-framework/ui-react';

<DButton iconStart="Plus">Add Account</DButton>
<DButton iconEnd="ArrowRight">Continue</DButton>
<DButton iconStart="Download" iconEnd="ChevronDown">Export</DButton>
```

## DSelect Critical Usage Pattern

:::danger Common Mistake
DSelect uses `react-select` internally and requires a specific value/onChange pattern. Using `e.target.value` will NOT work.
:::

### Correct Pattern

```tsx
import { DSelect } from '@dynamic-framework/ui-react';

// Options must be objects with value and label
const options = [
  { value: 'usd', label: 'US Dollar' },
  { value: 'eur', label: 'Euro' },
  { value: 'gbp', label: 'British Pound' },
];

function CurrencySelect() {
  // State holds the full option object, not just the value
  const [selected, setSelected] = useState<{ value: string; label: string } | null>(null);

  return (
    <DSelect
      id="currency"
      label="Select Currency"
      options={options}
      value={selected}  // Full option object or null
      onChange={(option) => setSelected(option)}  // Receives full option object
    />
  );
}
```

### What NOT to Do

```tsx
// ❌ Wrong - Using e.target.value (doesn't work with DSelect)
onChange={(e) => setValue(e.target.value)}

// ❌ Wrong - Passing just the value string
value={selectedValue}  // Should be the full option object

// ❌ Wrong - Options as simple strings
options={['USD', 'EUR', 'GBP']}  // Must be { value, label } objects
```

### DSelect vs DInputSelect

| Component | Use Case | Value Format |
|-----------|----------|--------------|
| `DSelect` | Advanced select with search | `{ value, label }` object |
| `DInputSelect` | Simple dropdown | String value with `e.target.value` |

## DCollapse Usage Patterns

DCollapse supports both **controlled** and **uncontrolled** modes (updated in v2.1.1).

### Uncontrolled Mode (Default)

The component manages its own open/closed state internally:

```tsx
<DCollapse>
  <DCollapse.Toggle>Click to expand</DCollapse.Toggle>
  <DCollapse.Content>
    Hidden content here
  </DCollapse.Content>
</DCollapse>
```

### Controlled Mode

You manage the state externally via `isOpen` and `onToggle`:

```tsx
const [isOpen, setIsOpen] = useState(false);

<DCollapse isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)}>
  <DCollapse.Toggle>Click to expand</DCollapse.Toggle>
  <DCollapse.Content>
    Hidden content here
  </DCollapse.Content>
</DCollapse>
```

:::tip When to Use Each Mode
- **Uncontrolled**: Simple accordions, FAQ sections
- **Controlled**: When you need to sync with external state, programmatic open/close, or multiple panels coordination
:::

## Accessibility

Dynamic Framework components are designed with accessibility in mind and follow [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/) standards. However, the library cannot make your application fully accessible on its own—you must take action to ensure accessibility.

### What the Components Provide

| Component | Built-in Accessibility |
|-----------|------------------------|
| DInput | Connects label with input automatically via `id` |
| DButton | Keyboard focus, `aria-busy` for loading states |
| DModal | Focus trap, `aria-modal`, Escape to close |
| DSelect | `aria-expanded`, arrow key navigation |
| DAlert | `role="alert"` for screen reader announcements |

### Your Responsibility

You must provide the necessary props for full accessibility:

- **Inputs**: Always provide `label` or `aria-label`
- **Buttons**: Provide `text` or `aria-label` for icon-only buttons
- **Images**: Always include descriptive `alt` text

```tsx
// ✅ Accessible input
<DInput id="search" label="Search accounts" />

// ✅ Accessible icon-only button
<DButtonIcon icon="Trash2" ariaLabel="Delete item" />
```

## Documentation and Support

Each component includes interactive documentation in our Storybook:

- Detailed documentation of props and methods
- Interactive code examples
- Best practice guides

Access complete documentation at [react.dynamicframework.dev](https://react.dynamicframework.dev)
