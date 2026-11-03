---
search: true
---

# Dynamic Framework Components

Dynamic Framework offers a library of specialized React components for the financial industry, designed to cover the most common needs in banking and financial applications.

## Component Catalog

Explore all components interactively in our [Storybook](https://react.dynamicframework.dev/v2.12.1/).

### Layout Components
- **DBox**: Container with flexible styling options
- **DCard**: Card container with Header, Body, and Footer sub-components
- **DLayout**: Page grid with `DLayout.Pane` for responsive designs
- **DCollapse**: Collapsible section with a header that acts as a button

### Navigation Components
- **DTabs**: Tab navigation with `tabs`, `pills`, `underline`, and `toggle-button-group` variants, `DTabs.Tab` panels, and `DTabs.Provider`
- **DStepper**: Multi-step navigation (with DStepperDesktop and DStepperMobile variants)
- **DPaginator**: Pagination control for lists

### Form Components
- **DInput**: Text input with validation states
- **DInputSearch**: Search input with built-in debounce
- **DInputCheck**: Checkbox or radio input
- **DInputSwitch**: Toggle switch input
- **DInputCounter**: Numeric counter with increment/decrement
- **DInputCurrency**: Currency-formatted input
- **DInputMask**: Masked input for formatted data
- **DInputPassword**: Password input with visibility toggle
- **DInputPhone**: International phone number input
- **DInputPin**: PIN/code input with individual digit boxes
- **DInputRange**: Range slider input
- **DInputSelect**: Native select with options as objects
- **DSelect**: Advanced select with search (uses react-select)
- **DDatePicker**: Date picker with calendar
- **DPasswordStrengthMeter**: Password input with strength indicator
- **DBoxFile**: Drag-and-drop file upload

### Data Display Components
- **DListGroup**: List with `DListGroupItem`, which can be text, a link, or a button
- **DTimeline**: Timeline for event history
- **DCarousel**: Carousel/slider with DCarouselSlide
- **DCurrencyText**: Formatted currency display
- **DProgress**: Progress bar indicator
- **DSkeleton**: Loading placeholder with `DSkeleton.Text`, `DSkeleton.Block`, and `DSkeleton.Circle`

### Feedback Components
- **DAlert**: User notification messages
- **DModal**: Modal dialog with Header, Body, and Footer, opened as a portal
- **DOffcanvas**: Sliding panel with Header, Body, and Footer, opened as a portal
- **DToast**: Temporary toast notifications (with DToastContainer)
- **DPopover**: Contextual popover
- **DTooltip**: Hover tooltips
- **DDropdown**: Action dropdown menu

### Visual Components
- **DAvatar**: User avatar display
- **DBadge**: Status/count badges
- **DChip**: Compact element for tags/filters
- **DButton**: Action button with loading state
- **DButtonIcon**: Icon-only button
- **DIcon**: Icon component (uses Lucide Icons)

### Specialized Financial Components
- **DCreditCard**: Credit/debit card display
- **DVoucher**: Transaction receipt with download and share
- **DOtp**: One-time code form with countdown

### State & Utility Components
- **DDataStateWrapper**: Declarative handling of the loading, error, and empty states of a list or a single resource (also exports `EmptyState`, `ErrorState`, and `LoadingState`)
- **DErrorBoundary**: Error boundary with configurable fallback (based on `react-error-boundary`)
- **DConfirmModalContainer**: Container for the confirmation modals of `useConfirmModal`

## Component Usage

All components are imported from `@dynamic-framework/ui-react`:

```tsx
import {
  DButton,
  DCard,
  DInput,
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

Most components share these props:

| Prop | Type | Description |
|------|------|-------------|
| `className` | `string` | Additional CSS classes |
| `style` | `CSSProperties` | Inline styles |
| `dataAttributes` | `DataAttributes` | Object with `data-*` keys added as attributes to the root element |

Form components also accept `id`, which connects the label with the control.

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

`DAlert` only accepts the state colors: `success`, `danger`, `warning`, and `info`.

### Size Variants

Components that support sizes use the `size` prop, with the values `sm` and `lg`:

```tsx
<DButton size="sm">Small</DButton>
<DButton>Default</DButton>
<DButton size="lg">Large</DButton>
```

#### Responsive Sizes

`DButton` and `DBadge` accept in `size` an object with one value per breakpoint (`xs`, `sm`, `md`, `lg`, `xl`, `xxl`). Each value is still `sm` or `lg`; a breakpoint without a value uses the default size:

```tsx
<DButton size={{ xs: 'sm', md: 'lg' }} text="Continue" />
<DBadge size={{ xs: 'sm', lg: 'lg' }} color="success" text="Active" />
```

Responsive props read the breakpoints from the `--bs-breakpoint-*` variables in `dynamic-ui.css`. They don't need `DContextProvider`, but the CSS must be loaded before rendering: without it, the object falls back to the default value and a console warning is shown in development.

### Button Variants

`DButton` and `DButtonIcon` accept `variant` with the values `solid` (default), `outline`, `link`, and `soft`. The `soft` variant generates the `.btn-soft-{color}` class, with a subtle background:

```tsx
<DButton variant="outline" color="primary" text="Cancel" />
<DButton variant="soft" color="primary" text="Soft action" />
<DButton variant="soft" color="danger" text="Delete" />
```

## Context Provider

`DContextProvider` sets the language, currency, icons, and portals for every component it wraps. Without a provider, components use the library defaults, but `useDPortalContext` and `useConfirmModal` do need it.

| Prop | Type | Description |
|------|------|-------------|
| `language` | `string` | Language of the default texts (default `'en'`) |
| `currency` | `{ symbol: string; precision: number; separator: string; decimal: string }` | Currency format used by `DCurrencyText`, `DInputCurrency`, and `useFormatCurrency` |
| `icon` | `{ familyClass: string; familyPrefix: string; materialStyle: boolean }` | Icon font family for names that neither the registry nor Lucide resolve |
| `iconMap` | `IconMapProps` | Icons the components use internally (close, chevrons, alert states, input adornments) |
| `iconRegistry` | `Record<string, IconComponent>` | Custom icons by name (see [Custom Icons](#custom-icons)) |
| `portalName` | `string` | Id of the node where portals are mounted (default `'d-portal'`) |
| `availablePortals` | `Record<string, FC<PortalProps>>` | Components that can be opened with `openPortal` (see [Portals](#portals)) |
| `breakpoints` | `BreakpointProps` | **Deprecated and without effect**: breakpoints are read from the `--bs-breakpoint-*` CSS variables |

```tsx
import { DContextProvider } from '@dynamic-framework/ui-react';

function App() {
  return (
    <DContextProvider
      language="es"
      currency={{ symbol: '$', precision: 0, separator: '.', decimal: ',' }}
    >
      <YourApp />
    </DContextProvider>
  );
}
```

See the reference in [Storybook](https://react.dynamicframework.dev/v2.12.1/?path=/docs/design-system-context-contextprovider--docs).

## Portals

`DModal` and `DOffcanvas` aren't shown or hidden through a prop: they render as **portals**. Each one is registered under a name in the `availablePortals` of `DContextProvider` and opened with `openPortal`, from the `useDPortalContext` hook:

1. Define a type that maps each portal name to the data (`payload`) it receives.
2. Create the portal component. It receives `name` and `payload` (`PortalProps`) and renders a `DModal` or a `DOffcanvas` with the required `name` prop.
3. Register the component in `availablePortals`.
4. Call `openPortal(name, payload)` to open it and `closePortal()` to close the portal on top.

```tsx
import {
  DButton,
  DContextProvider,
  DModal,
  DOffcanvas,
  useDPortalContext,
  type PortalProps,
} from '@dynamic-framework/ui-react';

type Portals = {
  transferConfirm: { amount: string };
  accountFilters: { accountId: string };
};

function TransferConfirmModal({ name, payload }: PortalProps<Portals['transferConfirm']>) {
  const { closePortal } = useDPortalContext<Portals>();

  return (
    <DModal name={name} centered>
      <DModal.Header showCloseButton onClose={closePortal}>
        <h5 className="mb-0">Confirm transfer</h5>
      </DModal.Header>
      <DModal.Body>
        <p>{payload.amount} will be transferred.</p>
      </DModal.Body>
      <DModal.Footer>
        <DButton text="Cancel" variant="outline" onClick={closePortal} />
        <DButton text="Confirm" onClick={closePortal} />
      </DModal.Footer>
    </DModal>
  );
}

function AccountFiltersPanel({ name, payload }: PortalProps<Portals['accountFilters']>) {
  const { closePortal } = useDPortalContext<Portals>();

  return (
    <DOffcanvas
      name={name}
      openFrom={{ xs: 'bottom', md: 'end' }}
      width={{ xs: '100%', md: '480px' }}
    >
      <DOffcanvas.Header showCloseButton onClose={closePortal}>
        <h5 className="mb-0">Filters for account {payload.accountId}</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Filter content</p>
      </DOffcanvas.Body>
    </DOffcanvas>
  );
}

const availablePortals = {
  transferConfirm: TransferConfirmModal,
  accountFilters: AccountFiltersPanel,
};

function AccountActions() {
  const { openPortal } = useDPortalContext<Portals>();

  return (
    <>
      <DButton
        text="Transfer"
        onClick={() => openPortal('transferConfirm', { amount: '$100,000' })}
      />
      <DButton
        text="Filters"
        variant="outline"
        onClick={() => openPortal('accountFilters', { accountId: '001' })}
      />
    </>
  );
}

export function App() {
  return (
    <DContextProvider<Portals> availablePortals={availablePortals}>
      <AccountActions />
    </DContextProvider>
  );
}
```

Portal behavior:

- `DContextProvider` creates the `#d-portal` node (or the one in `portalName`) in `document.body`.
- Portals stack: `openPortal` adds one on top and `closePortal` closes the last one. `stack` exposes the open portals.
- Escape and a click on the backdrop close the top portal, unless it has `staticBackdrop`.
- `openPortal` throws an error if the name isn't registered in `availablePortals`.
- `DOffcanvas` accepts in `openFrom` (`start`, `end`, `top`, `bottom`) an object per breakpoint. In `width` and `height` it accepts any CSS length (`'320px'`, `'50vw'`, `'100%'`) or an object per breakpoint.

See the reference in Storybook: [DModal](https://react.dynamicframework.dev/v2.12.1/?path=/docs/design-system-components-modal-usage--docs), [DOffcanvas](https://react.dynamicframework.dev/v2.12.1/?path=/docs/design-system-components-offcanvas-usage--docs), and [useDPortalContext](https://react.dynamicframework.dev/v2.12.1/?path=/docs/design-system-hooks-usedportalcontext--docs).

## Layout

### DBox and DLayout

`DBox` is a container with the Dynamic surface style. `DLayout` is a CSS grid: `columns` sets the number of columns, `gap` (from `0` to `30`) the spacing, and `gapSm` through `gapXxl` adjust it per breakpoint. Each `DLayout.Pane` spans `cols` columns, with `colsXs` through `colsXxl` per breakpoint:

```tsx
import { DBox, DLayout } from '@dynamic-framework/ui-react';

function AccountLayout() {
  return (
    <DLayout columns={12} gap={4}>
      <DLayout.Pane cols={12} colsLg={4}>
        <DBox className="p-4">Summary</DBox>
      </DLayout.Pane>
      <DLayout.Pane cols={12} colsLg={8}>
        <DBox className="p-4">Transactions</DBox>
      </DLayout.Pane>
    </DLayout>
  );
}
```

### DCollapse

`DCollapse` renders a clickable header (`Component`, required) and a body (`children`) that expands or collapses. It manages its own state:

| Prop | Type | Description |
|------|------|-------------|
| `Component` | `ReactNode` | Header content, inside the button that toggles the state |
| `defaultCollapsed` | `boolean` | Initial state (default `true`). It is reactive: when it changes, the component adopts the new value |
| `onChange` | `(collapsed: boolean) => void` | Fires with the new state on each click |
| `iconOpen` / `iconClose` | `string` | Header icons for the collapsed and expanded states |

```tsx
import { DCollapse } from '@dynamic-framework/ui-react';

function AccountDetails() {
  return (
    <DCollapse Component={<span>Additional information</span>}>
      <p className="p-3">This content can be collapsed to save space.</p>
    </DCollapse>
  );
}
```

For an accordion where only one section stays open, control `defaultCollapsed` from the parent and sync it with `onChange`:

```tsx
import { useState } from 'react';
import { DCollapse } from '@dynamic-framework/ui-react';

function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, index) => (
        <DCollapse
          key={item.question}
          Component={<span>{item.question}</span>}
          defaultCollapsed={openIndex !== index}
          onChange={(collapsed) => setOpenIndex(collapsed ? null : index)}
        >
          <div className="p-3">{item.answer}</div>
        </DCollapse>
      ))}
    </div>
  );
}
```

## Navigation with DTabs

`DTabs` receives the tabs in `options` (`{ label, tab, disabled? }`) and the panels as `DTabs.Tab` children, each with the `tab` it belongs to:

| Prop | Type | Description |
|------|------|-------------|
| `options` | `DTabOption[]` | Tabs to display |
| `variant` | `'tabs' \| 'pills' \| 'underline' \| 'toggle-button-group'` | Bar style (default `'underline'`) |
| `defaultSelected` | `string` | Initial tab; without it, the first enabled tab is selected |
| `onChange` | `(option: DTabOption) => void` | Fires when the tab changes |
| `vertical` | `boolean` | Vertical bar |
| `ariaLabel` / `ariaLabelledBy` | `string` | Accessible name of the tab list |

```tsx
import { DTabs } from '@dynamic-framework/ui-react';

const options = [
  { label: 'Transactions', tab: 'movements' },
  { label: 'Statements', tab: 'statements' },
];

function AccountTabs() {
  return (
    <DTabs options={options} variant="pills" ariaLabel="Account sections">
      <DTabs.Tab tab="movements">Transaction list</DTabs.Tab>
      <DTabs.Tab tab="statements">Statements</DTabs.Tab>
    </DTabs>
  );
}
```

When the bar and the panels live in different places of the tree, wrap them in `DTabs.Provider`, which holds the selected tab. Inside the provider, the `defaultSelected` of `DTabs` is ignored:

```tsx
import { DTabs } from '@dynamic-framework/ui-react';

const options = [
  { label: 'Summary', tab: 'summary' },
  { label: 'Detail', tab: 'detail' },
];

function SplitTabs() {
  return (
    <DTabs.Provider defaultSelected="summary">
      <header>
        <DTabs options={options} ariaLabel="View" />
      </header>
      <main>
        <DTabs.Tab tab="summary">Summary</DTabs.Tab>
        <DTabs.Tab tab="detail">Detail</DTabs.Tab>
      </main>
    </DTabs.Provider>
  );
}
```

## Forms

### DInputSearch

Search input with built-in debounce. It extends `DInput` (omits `onChange`/`defaultValue`/`type`). Like `DInput`, its `onChange` delivers the **string**, not the event.

**Own props:**

| Prop | Type | Description |
|------|------|-------------|
| `debounceMs` | `number` | Debounce delay (default `300`) |
| `onChange` | `(value: string) => void` | Fires after the debounce, receives the string |
| `onImmediateChange` | `(value: string) => void` | Fires on every keystroke, without debounce |
| `value` | `string` | Controlled mode |
| `defaultValue` | `string` | Uncontrolled mode |
| `placeholder` | `string` | Placeholder text (default `'Search...'`) |

```tsx
import { useState } from 'react';
import { DInputSearch } from '@dynamic-framework/ui-react';

function AccountSearch({ onSearch }: { onSearch: (value: string) => void }) {
  const [query, setQuery] = useState('');

  return (
    <>
      {/* Uncontrolled, with the default debounce (300ms) */}
      <DInputSearch
        id="account-search"
        label="Search"
        placeholder="Search accounts..."
        onChange={(value) => onSearch(value)}
        onImmediateChange={(value) => setQuery(value)}
      />

      {/* Controlled, with a custom debounce */}
      <DInputSearch
        id="account-search-controlled"
        label="Search"
        value={query}
        debounceMs={500}
        onImmediateChange={setQuery}
        onChange={onSearch}
      />
    </>
  );
}
```

### DSelect

:::danger Common Mistake
`DSelect` uses `react-select` internally: its `value` is the full option object and its `onChange` receives that object. Using `e.target.value` will NOT work.
:::

```tsx
import { useState } from 'react';
import { DSelect } from '@dynamic-framework/ui-react';

type CurrencyOption = { value: string; label: string };

// Options must be objects with value and label
const options: CurrencyOption[] = [
  { value: 'usd', label: 'US Dollar' },
  { value: 'eur', label: 'Euro' },
  { value: 'gbp', label: 'British Pound' },
];

function CurrencySelect() {
  // State holds the full option object, not just the value
  const [selected, setSelected] = useState<CurrencyOption | null>(null);

  return (
    <DSelect<CurrencyOption>
      id="currency"
      label="Select Currency"
      options={options}
      value={selected}
      onChange={(option) => setSelected(option)}
    />
  );
}
```

#### What NOT to Do

```tsx
// ❌ Wrong - Using e.target.value (doesn't work with DSelect)
onChange={(e) => setValue(e.target.value)}

// ❌ Wrong - Passing just the value string
value={selectedValue}  // Must be the full option object

// ❌ Wrong - Options as plain strings
options={['USD', 'EUR', 'GBP']}  // Must be { value, label } objects
```

### DSelect vs DInputSelect

| Component | Use Case | `value` | `onChange` receives |
|-----------|----------|---------|---------------------|
| `DSelect` | Advanced select with search, multi-select | Option object | The option object |
| `DInputSelect` | Simple native select | `string \| number` (the option's `value`) | The option object |

```tsx
import { useState } from 'react';
import { DInputSelect } from '@dynamic-framework/ui-react';

const accountTypes = [
  { value: 'checking', label: 'Checking account' },
  { value: 'savings', label: 'Savings account' },
];

function AccountTypeSelect() {
  const [type, setType] = useState<string | number>('checking');

  return (
    <DInputSelect
      id="account-type"
      label="Account type"
      options={accountTypes}
      value={type}
      onChange={(option) => setType(option.value)}
    />
  );
}
```

With options of another shape, `valueExtractor` and `labelExtractor` set which field to use as the value and as the text.

### DPasswordStrengthMeter

Password input with a strength indicator. `onChange` delivers the string and `enabledChecks` picks the rules (`'uppercase'`, `'lowercase'`, `'number'`, `'specialChar'`):

```tsx
import { useState } from 'react';
import { DPasswordStrengthMeter } from '@dynamic-framework/ui-react';

function NewPassword() {
  const [password, setPassword] = useState('');

  return (
    <DPasswordStrengthMeter
      id="new-password"
      label="New password"
      value={password}
      onChange={setPassword}
    />
  );
}
```

## Loading and Error States

### DDataStateWrapper

Shows the loading, error, empty, or data state, in that order of precedence. `data` can be a **list** (empty when it has no items) or a **single resource** (empty when it is `null` or `undefined`); `children` receives the data with the same shape. It also exports the `EmptyState`, `ErrorState`, and `LoadingState` sub-components for standalone use.

**Props:**

| Prop | Type | Description |
|------|------|-------------|
| `isLoading` | `boolean` | Loading state |
| `isError` | `boolean` | Error state |
| `data` | `T[] \| undefined` or `T \| null \| undefined` | List or single resource |
| `children` | `(data: T[]) => ReactNode` or `(data: T) => ReactNode` | Render with guaranteed data |
| `onRetry` | `() => void` | Retry button callback |
| `messages` | `{ loading?, empty?, error?, retry? }` | Texts of the default states |
| `renderLoading` / `renderEmpty` / `renderError` | `ReactNode \| (() => ReactNode)` | Full replacement of each state |

```tsx
import {
  DDataStateWrapper,
  DListGroup,
  DListGroupItem,
} from '@dynamic-framework/ui-react';

type Movement = { id: string; title: string };

type MovementsQuery = {
  data: Movement[] | undefined;
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
};

function Movements({ query }: { query: MovementsQuery }) {
  return (
    <DDataStateWrapper
      isLoading={query.isLoading}
      isError={query.isError}
      data={query.data}
      onRetry={query.refetch}
      messages={{
        loading: 'Loading transactions...',
        empty: 'No transactions',
        error: "We couldn't load the transactions",
        retry: 'Retry',
      }}
    >
      {(movements) => (
        <DListGroup ariaLabel="Transactions">
          {movements.map((m) => <DListGroupItem key={m.id}>{m.title}</DListGroupItem>)}
        </DListGroup>
      )}
    </DDataStateWrapper>
  );
}
```

With a single resource, `children` receives the object:

```tsx
import { DDataStateWrapper, DCurrencyText } from '@dynamic-framework/ui-react';

type Account = { id: string; name: string; balance: number };

function AccountSummary({ account, isLoading, isError }: {
  account: Account | null | undefined;
  isLoading: boolean;
  isError: boolean;
}) {
  return (
    <DDataStateWrapper isLoading={isLoading} isError={isError} data={account}>
      {(acc) => (
        <p>{acc.name}: <DCurrencyText value={acc.balance} /></p>
      )}
    </DDataStateWrapper>
  );
}
```

> Fits the TanStack Query pattern. See [API Integration](api-integration.html#state-handling-with-ddatastatewrapper).

### DSkeleton

Loading placeholder with shapes that mimic the content. `DSkeleton` groups the `DSkeleton.Text`, `DSkeleton.Block`, and `DSkeleton.Circle` shapes, and repeats the template with `items`:

| Prop | Type | Description |
|------|------|-------------|
| `animation` | `'glow' \| 'wave' \| 'none'` | Shape animation; nested skeletons inherit it |
| `ariaLabel` | `string` | Text announced by screen readers (default `'Loading...'`) |
| `color` | `string` | Theme color for the shapes |
| `gap` | `string \| number` | Space between items (numbers are pixels) |
| `direction` | `'vertical' \| 'horizontal'` | Axis of the items (default `'vertical'`) |
| `items` | `number` | Template repetitions (up to 100) |
| `itemClassName` | `string` | Class of the wrapper of each repetition |
| `children` | `ReactNode \| ((index: number) => ReactNode)` | Template of each item |

The shapes accept: `DSkeleton.Text` → `lines`, `size` (`'xs' \| 'sm' \| 'lg'`), `widths`, `lastLineWidth`, and `rounded`; `DSkeleton.Block` → `width`, `height`, and `rounded`; `DSkeleton.Circle` → `size`.

```tsx
import { DSkeleton } from '@dynamic-framework/ui-react';

function MovementsSkeleton() {
  return (
    <DSkeleton items={3} gap={16} animation="wave" ariaLabel="Loading transactions">
      <DSkeleton direction="horizontal" gap={12}>
        <DSkeleton.Circle size={40} />
        <DSkeleton.Text lines={2} lastLineWidth="60%" />
      </DSkeleton>
    </DSkeleton>
  );
}
```

See the reference in [Storybook](https://react.dynamicframework.dev/v2.12.1/?path=/docs/design-system-components-skeleton--docs).

### DErrorBoundary

Error boundary with a configurable fallback, based on `react-error-boundary`. The library also exports the `useErrorBoundary` hook, the `FallbackProps` type, and the `getErrorMessage` utility.

**Props (`DErrorBoundaryProps`):**

| Prop | Type | Description |
|------|------|-------------|
| `name` | `string` | Boundary identifier |
| `fallback` | `(props: FallbackProps) => ReactNode` | Replaces the default fallback |
| `messages` | `{ error?: string; retry?: string }` | Texts of the default fallback; ignored when you pass `fallback` |
| `onError` | `(error: unknown, info: ErrorInfo) => void` | Callback when an error is caught |
| `onReset` | `() => void` | Callback when the boundary resets |
| `resetKeys` | `unknown[]` | Resets the boundary when any of these values changes |
| `children` | `ReactNode` | Protected content |

```tsx
import type { ReactNode } from 'react';
import { DErrorBoundary } from '@dynamic-framework/ui-react';

function DashboardBoundary({ children }: { children: ReactNode }) {
  return (
    <DErrorBoundary
      name="dashboard"
      messages={{ error: "We couldn't load the dashboard", retry: 'Retry' }}
      onError={(error, info) => console.error(error, info.componentStack)}
    >
      {children}
    </DErrorBoundary>
  );
}
```

## Financial Components

### DCreditCard

```tsx
import { DCreditCard } from '@dynamic-framework/ui-react';

function CardPreview() {
  return (
    <DCreditCard
      brand="visa"
      name="Jane Doe"
      number="**** **** **** 1234"
    />
  );
}
```

`brand` accepts `'visa'` or `'mastercard'`. `isVertical`, `isChipVisible`, `holderText`, and `logoImage` adjust the presentation.

### DVoucher

Transaction receipt with buttons to download and share it as an image. `title` and `message` are required:

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Receipt title |
| `message` | `string` | Message below the title |
| `icon` | `false \| null \| string \| Partial<DIconProps>` | Lucide name, `DIcon` props object, or `false`/`null` to hide it |
| `amount` / `amountDetails` | `string` / `ReactNode` | Amount and its detail |
| `downloadText` / `shareText` / `fileName` | `string` | Button texts and file name |
| `hideActions` | `boolean` | Hides the buttons |
| `onError` | `(err: Error) => void \| Promise<void>` | Error while generating the image |

```tsx
import { DVoucher } from '@dynamic-framework/ui-react';

function PaymentReceipt() {
  return (
    <DVoucher
      icon={{ icon: 'CircleCheckBig', color: 'success' }}
      title="Payment successful"
      message="Your payment was processed"
      amount="$125.00"
    >
      <p>Transaction number: 000123</p>
    </DVoucher>
  );
}
```

The `useScreenshot`, `useScreenshotDownload`, and `useScreenshotWebShare` hooks expose the same capture for your own components.

### DOtp

One-time code form with a countdown to resend:

```tsx
import { DOtp } from '@dynamic-framework/ui-react';

function VerifyCode({ onSubmit }: { onSubmit: () => Promise<void> }) {
  return (
    <DOtp
      otpSize={6}
      seconds={60}
      action={onSubmit}
      texts={{ title: 'Enter the code', submit: 'Verify', resend: 'Resend' }}
    />
  );
}
```

`action` is called on submit and doesn't receive the entered code. If you need to read it, build the form with the `useOtp` hook, which exposes `otp`, `setOtp`, `submit`, `isLoading`, `invalid`, and the countdown.

## Menus and Timelines

### DDropdown

Action menu. Each action has a `label` (required) and optionally `icon`, `color`, `onClick`, `href`, or `disabled`. An action with `isDivider` is shown as a separator:

```tsx
import { DDropdown } from '@dynamic-framework/ui-react';

function AccountMenu({ onEdit }: { onEdit: () => void }) {
  return (
    <DDropdown
      actions={[
        { label: 'Edit', icon: 'Pencil', onClick: onEdit },
        { label: 'Delete', icon: 'Trash2', color: 'danger' },
        { label: 'separator', isDivider: true },
        { label: 'Help', href: '/help' },
      ]}
    />
  );
}
```

### DTimeline

```tsx
import { DTimeline } from '@dynamic-framework/ui-react';

function PaymentHistory() {
  return (
    <DTimeline
      items={[
        { title: 'Payment successful', time: '10:00', status: 'success' },
        { title: 'Processing', time: '09:55', status: 'warning' },
        { title: 'Started', time: '09:50' },
      ]}
    />
  );
}
```

### DCarousel

`iconArrowLeft` and `iconArrowRight` accept `DIcon` props to customize the arrows:

```tsx
import { DCarousel } from '@dynamic-framework/ui-react';

function Promotions() {
  return (
    <DCarousel
      iconArrowLeft={{ icon: 'ArrowLeft', color: 'primary' }}
      iconArrowRight={{ icon: 'ArrowRight', color: 'primary' }}
    >
      <DCarousel.Slide>Promotion 1</DCarousel.Slide>
      <DCarousel.Slide>Promotion 2</DCarousel.Slide>
    </DCarousel>
  );
}
```

## Hooks Exported by the Library

These hooks are exported from `@dynamic-framework/ui-react`:

| Purpose | Hook | Returns |
|---------|------|---------|
| Context | `useDContext` | The `DContextProvider` configuration and `setContext` |
| Portals | `useDPortalContext` | `{ openPortal, closePortal, stack }` |
| Confirmation | `useConfirmModal` | `{ open }` (requires `DConfirmModalContainer`) |
| Notifications | `useDToast` | `{ toast }` (requires `DToastContainer`) |
| Tabs | `useTabContext` | `{ isSelected(tab) }` inside `DTabs` |
| Errors | `useErrorBoundary` | `{ error, showBoundary, resetBoundary }` inside `DErrorBoundary` |
| Currency | `useFormatCurrency` | `{ format, values }` |
| Currency | `useInputCurrency` | State and handlers for a currency input |
| OTP | `useOtp` | `{ otp, setOtp, submit, invalid, error, isLoading, secondsLeft, restartCountdown }` |
| OTP | `useCountdown` | `{ secondsLeft, restartCountdown }` |
| Receipts | `useScreenshot` | `{ clipRef, takeBlob }` |
| Receipts | `useScreenshotDownload` | `{ downloadRef, download }` |
| Receipts | `useScreenshotWebShare` | `{ shareRef, share }` |
| Responsive | `useMediaQuery` | `boolean` for a media query |
| Responsive | `useMediaBreakpointUpXs`, `useMediaBreakpointUpSm`, `useMediaBreakpointUpMd`, `useMediaBreakpointUpLg`, `useMediaBreakpointUpXl`, `useMediaBreakpointUpXxl` | `boolean`: the viewport is at that breakpoint or larger |
| Lists and state | `useItemSelection` | Selection of items in a list |
| Lists and state | `useStackState` | `[items, { push, pop, peek, clear, isEmpty, length }]` |
| DOM utilities | `useDisableBodyScrollEffect` | Locks `body` scrolling while its argument is `true` |
| DOM utilities | `useDisableInputWheel` | `{ handleOnWheel }` so the mouse wheel doesn't change a number input |
| DOM utilities | `useProvidedRefOrCreate` | The received ref or a new one |

### Additional Utilities

```tsx
import {
  getErrorMessage,       // Extract the error message from unknown errors
  formatCurrency,        // Format a number as currency outside a component
} from '@dynamic-framework/ui-react';
```

:::warning Implementation Patterns vs Library Exports
Hooks like `useApi`, `useAccounts`, or `useFormValidation` shown in the documentation are **implementation patterns** you create in your project, NOT library exports. See [API Integration](api-integration.html) for pattern examples.
:::

### useConfirmModal

Hook to open a confirmation modal from code. It must be inside `DContextProvider` and needs a single `DConfirmModalContainer` mounted with `nodeId` equal to the provider's `portalName` (`'d-portal'` by default).

**Config (`UseConfirmModalConfig`):**

| Field | Type | Description |
|-------|------|-------------|
| `title` / `message` | `string` | Modal title and message |
| `confirmLabel` / `cancelLabel` | `string` | Button texts |
| `confirmColor` | `'primary' \| 'danger' \| 'warning'` | Confirm button color |
| `onConfirm` | `() => void \| Promise<void>` | Confirmation callback (required) |
| `onClose` | `() => void` | Callback on close |
| `critical` | `{ code: string; codeLabel?: string; inputPlaceholder?: string }` | Critical confirmation that requires typing an exact code |

```tsx
import {
  DButton,
  DConfirmModalContainer,
  DContextProvider,
  useConfirmModal,
} from '@dynamic-framework/ui-react';

function DeleteAccountButton({ onDelete }: { onDelete: () => Promise<void> }) {
  const confirm = useConfirmModal({
    title: 'Delete account',
    message: 'This action cannot be undone.',
    confirmColor: 'danger',
    confirmLabel: 'Delete',
    critical: { code: 'DELETE ACCOUNT' }, // the user must type this
    onConfirm: onDelete,
  });

  return <DButton color="danger" text="Delete" onClick={confirm.open} />;
}

export function App() {
  return (
    <DContextProvider>
      <DeleteAccountButton onDelete={async () => {}} />
      <DConfirmModalContainer nodeId="d-portal" />
    </DContextProvider>
  );
}
```

## Icon System

Dynamic UI uses [Lucide Icons](https://lucide.dev), a modern and consistent icon library with more than 1000 icons. Use the `DIcon` component to render icons.

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

#### Responsive Icon Sizes

`size` also accepts one value per breakpoint (`xs`, `sm`, `md`, `lg`, `xl`, `xxl`):

```tsx
<DIcon
  icon="Home"
  size={{
    xs: '1rem',      // Mobile
    md: '1.5rem',    // Tablet
    lg: '2rem',      // Desktop
  }}
/>
```

Like the other responsive props, it requires `dynamic-ui.css` to be loaded, not `DContextProvider`. By default the size is resolved when the icon mounts; with `useListenerSize` the icon listens to breakpoint changes and updates on resize, at a performance cost when there are many icons.

### Icon Colors

Icons inherit their color from the parent's CSS `color` property by default. Use the `color` prop for theme colors:

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

### Custom Icons

Besides Lucide icons, `DIcon` accepts your own icons in two ways:

**1. Pass a React component directly.** The `icon` prop accepts `string | IconComponent`:

```tsx
import { MiIconoSvg } from './icons';

<DIcon icon={MiIconoSvg} />
```

**2. Register icons by name** in `DContextProvider` with the `iconRegistry` prop:

```tsx
const iconRegistry = { NMChevron: MiIconoSvg };

<DContextProvider iconRegistry={iconRegistry}>
  <DIcon icon="NMChevron" />   {/* resolved from the registry */}
  <DIcon icon="Home" />        {/* falls back to Lucide */}
</DContextProvider>
```

`DIcon` resolves the name in this order: first the `iconRegistry`, then Lucide, and finally the icon font family configured in `icon`. The `iconRegistry` **takes precedence over Lucide** when the name exists in both.

### Finding Icons

Browse all available icons at [lucide.dev/icons](https://lucide.dev/icons). When you find an icon:

1. Note the icon name (e.g. `arrow-right`)
2. Convert to PascalCase (e.g. `ArrowRight`)
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

Use `DButtonIcon` for icon-only buttons. Its accessible name goes in `aria-label`:

```tsx
import { DButtonIcon } from '@dynamic-framework/ui-react';

<DButtonIcon icon="Pencil" aria-label="Edit item" />
<DButtonIcon icon="Trash2" aria-label="Delete item" color="danger" />
<DButtonIcon icon="Plus" aria-label="Add new" variant="outline" />
```

For buttons with icon and text, use `DButton` with `iconStart` or `iconEnd`:

```tsx
import { DButton } from '@dynamic-framework/ui-react';

<DButton iconStart="Plus">Add Account</DButton>
<DButton iconEnd="ArrowRight">Continue</DButton>
<DButton iconStart="Download" iconEnd="ChevronDown">Export</DButton>
```

## Accessibility

Dynamic Framework components include ARIA roles and attributes following the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/) patterns. The library can't make your application accessible on its own: part of the work depends on the props you pass and on how you compose the components.

### What the Components Provide

| Component | Built-in Accessibility |
|-----------|------------------------|
| DInput | Connects the label with the input via `id`; `aria-invalid` when `invalid` |
| DButton | `aria-busy` while loading, `loadingAriaLabel` as the name while loading, `aria-disabled` |
| DButtonIcon | Takes its name from `aria-label`; warns in development when the button has no name |
| DIcon | Hidden from screen readers by default (`aria-hidden`). With `ariaLabel` it is exposed as `role="img"` with that name |
| DModal / DOffcanvas | `role="dialog"` and `aria-modal="true"`. The name comes from the Header title (`aria-labelledby`) or from `ariaLabel`. Focus moves to the dialog on open, Tab stays inside the top portal, and Escape closes it unless it has `staticBackdrop` |
| DTabs | `role="tablist"`, `role="tab"` with `aria-selected` and `aria-controls`; name with `ariaLabel` or `ariaLabelledBy` |
| DListGroup | `<ul>` by default. Link or button items are wrapped in an `<li>`. `ariaLabel`/`ariaLabelledBy` name the list and `ariaCurrent` marks the active item. Warns in development when an `<li>` item sits inside `as="div"` |
| DAlert | `role="alert"` by default. With `role="status"` it is announced without interrupting, and with `role="none"` it isn't a live region |
| DSkeleton | A `role="status"` region announces `ariaLabel`; the shapes are hidden from screen readers |
| DSelect | Without `label` or `aria-labelledby`, it uses a generic name; `ariaLabel` replaces it |

### Your Responsibility

You must provide the necessary props for full accessibility:

- **Inputs**: provide a text `label`. If the label isn't plain text (it has a link or an icon), add `aria-label` (`ariaLabel` in `DSelect` and `DInputSelect`)
- **Icon-only buttons**: provide `aria-label` on `DButtonIcon`
- **Icons with their own meaning**: pass `ariaLabel` to `DIcon`; decorative ones need nothing
- **Modals and panels**: include a title in the Header or pass `ariaLabel`. When a portal closes, focus doesn't return to the element that opened it: move it back yourself if the flow needs it
- **Alerts**: use `role="status"` for messages that aren't critical
- **Images**: always include descriptive `alt` text

```tsx
// ✅ Accessible input
<DInput id="search" label="Search accounts" />

// ✅ Accessible icon-only button
<DButtonIcon icon="Trash2" aria-label="Delete item" />

// ✅ Icon with its own meaning
<DIcon icon="AlertTriangle" ariaLabel="Insufficient balance" />
```

## Documentation and Support

Each component includes interactive documentation in our Storybook:

- Detailed props and methods documentation
- Interactive code examples
- Best practice guides

Access the full documentation at [react.dynamicframework.dev](https://react.dynamicframework.dev/v2.12.1/)
