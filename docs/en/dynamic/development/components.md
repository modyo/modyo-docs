---
search: true
---

# Dynamic Framework Components

Dynamic Framework offers more than 46 specialized React components for the financial industry, designed to cover the most common needs in banking and financial applications.

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
- **DInputSearch**: Search input with built-in debounce (reintroduced in v2.6)
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

### State & Utility Components
- **DDataStateWrapper**: Declarative handling of loading/error/empty states when rendering lists (also exports `EmptyState`, `ErrorState`, `LoadingState`)
- **DErrorBoundary**: Error boundary with a configurable fallback (based on `react-error-boundary`)

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

#### Responsive Sizes (v2.3)

`DButton` and `DBadge` accept a responsive object in `size` with per-breakpoint values (`xs`, `sm`, `md`, `lg`, `xl`, `xxl`), just like `DIcon`:

```tsx
<DButton size={{ xs: 'sm', md: 'lg' }} text="Continue" />
<DBadge size={{ xs: 'sm', lg: 'md' }} color="success">Active</DBadge>
```

### Soft Variant (v2.5)

`DButton` supports `variant="soft"`, which generates the `.btn-soft-{color}` class for a subtle-background style. It combines with `color` and `size`:

```tsx
<DButton variant="soft" color="primary" text="Soft action" />
<DButton variant="soft" color="danger" text="Delete" />
```

## State Components (2.1-2.7)

### DInputSearch

Search input with built-in debounce. Extends `DInput` (omits `onChange`/`defaultValue`/`type`). Unlike `DInput`, its `onChange` returns the **string** directly, not the event.

**Own props:**

| Prop | Type | Description |
|------|------|-------------|
| `debounceMs` | `number` | Debounce delay (default `300`) |
| `onChange` | `(value: string) => void` | Fires after the debounce, receives the string |
| `onImmediateChange` | `(value: string) => void` | Fires on every keystroke, no debounce |
| `value` | `string` | Controlled mode |
| `defaultValue` | `string` | Uncontrolled mode |
| `placeholder` | `string` | Placeholder text (default `'Search...'`) |

```tsx
import { DInputSearch } from '@dynamic-framework/ui-react';

// Uncontrolled, with default debounce (300ms)
<DInputSearch
  label="Search"
  placeholder="Search accounts..."
  onChange={(value) => fetchResults(value)}       // string, after debounce
  onImmediateChange={(value) => setQuery(value)}  // string, immediate
/>

// Controlled + custom debounce
<DInputSearch
  value={query}
  debounceMs={500}
  onChange={(value) => search(value)}
/>
```

### DDataStateWrapper

Wraps the rendering of a list and automatically shows loading, error, and empty states. It also exports the `EmptyState`, `ErrorState`, and `LoadingState` sub-components for standalone use.

**Props (`DDataStateWrapperProps<T>`):**

| Prop | Type | Description |
|------|------|-------------|
| `isLoading` | `boolean` | Loading state |
| `isError` | `boolean` | Error state |
| `data` | `T[] \| undefined` | Data to render |
| `onRetry` | `() => void` | Retry callback |
| `messages` | `DDataStateMessages` | Customizable `{ loading?, empty?, error?, retry? }` |
| `renderLoading` / `renderEmpty` / `renderError` | `ReactNode \| (() => ReactNode)` | Full override of each state |
| `children` | `(data: T[]) => ReactNode` | Renders the list with guaranteed data |

```tsx
import { DDataStateWrapper } from '@dynamic-framework/ui-react';

<DDataStateWrapper
  isLoading={query.isLoading}
  isError={query.isError}
  data={query.data}
  onRetry={query.refetch}
  messages={{
    loading: 'Loading transactions...',
    empty: 'No transactions',
    error: 'We could not load the transactions',
    retry: 'Retry',
  }}
>
  {(transactions) => (
    <DListGroup>
      {transactions.map((t) => <DListGroupItem key={t.id}>{t.title}</DListGroupItem>)}
    </DListGroup>
  )}
</DDataStateWrapper>
```

> Pairs with the TanStack Query pattern. See [API Integration](api-integration.html#state-handling-with-ddatastatewrapper).

### DErrorBoundary

Error boundary with a configurable fallback, based on `react-error-boundary`. The library also exports the `useErrorBoundary` hook.

**Props (`DErrorBoundaryProps`):**

| Prop | Type | Description |
|------|------|-------------|
| `name` | `string` | Boundary identifier name |
| `fallback` | `(props: FallbackProps) => ReactNode` | Override of the default fallback |
| `onError` | `(error: unknown, info: ErrorInfo) => void` | Callback when an error is caught |
| `children` | `ReactNode` | Protected content |

```tsx
import { DErrorBoundary } from '@dynamic-framework/ui-react';

<DErrorBoundary
  name="dashboard"
  onError={(error, info) => logError(error, info)}
>
  <Dashboard />
</DErrorBoundary>
```

## API Changes to Existing Components (2.1-2.7)

### DVoucher — icon and href (v2.2)

- `icon` accepts `false | null | string | Partial<DIconProps>`: a Lucide name, a `DIcon` props object, or `false`/`null` to hide it.
- `amount`, `amountDetails` (`ReactNode`), and `title` (required).
- The voucher buttons support `href` in addition to `onClick`.

```tsx
<DVoucher
  icon={{ icon: 'CircleCheckBig', color: 'success' }}
  title="Payment Successful"
  amount="$125.00"
/>
```

### DOffcanvas — responsive (v2.7)

- `openFrom`: in addition to `'start' | 'end' | 'top' | 'bottom'`, accepts a responsive object `{ xs?, sm?, md?, lg?, xl?, xxl? }`.
- `width` / `height`: accept any CSS length (`'320px'`, `'50vw'`, `'100%'`) or a `ResponsiveProp`.

```tsx
<DOffcanvas
  openFrom={{ xs: 'bottom', md: 'end' }}
  width={{ xs: '100%', md: '480px' }}
/>
```

### DCarousel — custom arrows (v2.7)

`iconArrowLeft` / `iconArrowRight` accept `DIcon` props:

```tsx
<DCarousel
  iconArrowLeft={{ icon: 'ArrowLeft', color: 'primary' }}
  iconArrowRight={{ icon: 'ArrowRight', color: 'primary' }}
>
  {/* slides */}
</DCarousel>
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
  useConfirmModal,       // Programmatic confirmation (requires DConfirmModalContainer)
  useTabContext,         // Access tab state within DTabs
  useErrorBoundary,      // Error boundary control (from react-error-boundary)

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

### useConfirmModal — programmatic confirmation

Hook to open a confirmation modal from code. It requires mounting `DConfirmModalContainer` once near the root (next to `DContextProvider`) and being inside `DContextProvider`.

**Config (`UseConfirmModalConfig`):**

| Field | Type | Description |
|-------|------|-------------|
| `title` / `message` | `string` | Modal title and message |
| `confirmLabel` / `cancelLabel` | `string` | Button labels |
| `confirmColor` | `'primary' \| 'danger' \| 'warning'` | Confirm button color |
| `onConfirm` | `() => void \| Promise<void>` | Confirmation callback (required) |
| `onClose` | `() => void` | Callback on close |
| `critical` | `{ code: string; codeLabel?: string; inputPlaceholder?: string }` | Critical confirmation that requires typing an exact code |

The hook returns `{ open: () => void }`.

```tsx
import { useConfirmModal, DConfirmModalContainer } from '@dynamic-framework/ui-react';

// 1. Mount the container once (next to DContextProvider)
<DConfirmModalContainer />

// 2. Use the hook
function DeleteAccountButton() {
  const confirm = useConfirmModal({
    title: 'Delete account',
    message: 'This action cannot be undone.',
    confirmColor: 'danger',
    confirmLabel: 'Delete',
    critical: { code: 'DELETE ACCOUNT' }, // the user must type this
    onConfirm: async () => { await deleteAccount(); },
  });

  return <DButton color="danger" text="Delete" onClick={confirm.open} />;
}
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

### Custom Icons (v2.7)

In addition to Lucide icons, `DIcon` accepts your own icons in two ways:

**1. Pass a React component directly.** The `icon` prop accepts `string | IconComponent`:

```tsx
import { MyIconSvg } from './icons';

<DIcon icon={MyIconSvg} />
```

**2. Register icons by name** in `DContextProvider` with the `iconRegistry` prop:

```tsx
const iconRegistry = { NMChevron: MyIconSvg };

<DContextProvider iconRegistry={iconRegistry}>
  <DIcon icon="NMChevron" />   {/* resolves from the registry */}
  <DIcon icon="Home" />        {/* falls back to Lucide */}
</DContextProvider>
```

The `iconRegistry` **takes precedence over Lucide** when the name matches in both. If the name is not in the registry, it falls back to Lucide.

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

DCollapse is a **controlled component** that uses `collapsed` and `onChange` props. You must manage the open/closed state externally.

### Basic Usage

```tsx
import { useState } from 'react';
import { DCollapse, DButton } from '@dynamic-framework/ui-react';

function CollapseExample() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <DButton
        text={collapsed ? 'Show Details' : 'Hide Details'}
        onClick={() => setCollapsed(!collapsed)}
      />

      <DCollapse collapsed={collapsed} onChange={setCollapsed}>
        <div className="p-3 border mt-2">
          <h6>Additional Information</h6>
          <p>This content can be collapsed to save space.</p>
        </div>
      </DCollapse>
    </div>
  );
}
```

### Accordion Pattern

```tsx
function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <button onClick={() => setOpenIndex(openIndex === index ? null : index)}>
            {item.question}
          </button>
          <DCollapse
            collapsed={openIndex !== index}
            onChange={(c) => {
              if (!c) setOpenIndex(index);
              else setOpenIndex(null);
            }}
          >
            <div className="p-3">{item.answer}</div>
          </DCollapse>
        </div>
      ))}
    </div>
  );
}
```

:::warning Controlled Component
DCollapse requires state management. Using `<DCollapse>Content</DCollapse>` without `collapsed` and `onChange` props will not work.
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
