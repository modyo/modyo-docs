---
search: true
---

# What's New in Dynamic UI 2.0

Version 2.0 of Dynamic UI represents a significant evolution of the Design System, featuring a new visual language, technology modernization, and new high-level components.

## Summary of Changes

- **New visual language**: Jost typography, Lucide icons, refreshed color palette
- **Technology modernization**: React 19 compatibility, Storybook 9, Framer Motion animations
- **8 new components**: DBox, DLayout, DCreditCard, DDropdown, DTimeline, DOtp, DPasswordStrengthMeter, DVoucher
- **Simplified API**: Obsolete components removed, standardized props

## New Visual Language

### Typography: Jost

**Jost** has been established as the Design System's primary font, bringing a modern and distinctive aesthetic.

**How to load Jost:**

```html
<!-- Option 1: Google Fonts (recommended) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

```css
/* Option 2: CSS @import */
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap');

/* The font is then applied via CSS variable */
font-family: "Jost", sans-serif;
```

:::tip
The base template already includes Jost. Only add these imports if building from scratch.
:::

### Iconography: Lucide Icons

Dynamic UI 2.0 migrates from Bootstrap Icons to [Lucide Icons](https://lucide.dev), a modern icon library with better React integration.

**Features:**
- Optimized SVG icons
- Automatic tree-shaking (only used icons are included)
- Full TypeScript support
- PascalCase naming

```jsx
// Basic usage
<DIcon icon="Home" />
<DIcon icon="Settings" />
<DIcon icon="CheckCircle" />

// With responsive sizing
<DContextProvider>
  <DIcon
    icon="Settings"
    useListenerSize={true}
    size={{
      xs: '16px',
      md: '32px',
      xl: '64px'
    }}
  />
</DContextProvider>
```

### New Color Palette

The color palette has been completely redesigned for a fresher, more professional look, affecting all components.

## New Components

### DBox

Pre-styled semantic container for framing content sections.

```jsx
<DBox className="p-4">
  <h4>Section Title</h4>
  <p>Content inside the DBox.</p>
</DBox>
```

### DLayout

CSS Grid-based layout component for complex responsive structures.

```jsx
<DLayout gap={4} columns={12}>
  <DLayout.Pane cols={4}>
    {/* Sidebar */}
  </DLayout.Pane>
  <DLayout.Pane cols={8}>
    {/* Main content */}
  </DLayout.Pane>
</DLayout>
```

### DCreditCard

Visual component for displaying credit or debit cards.

```jsx
<DCreditCard
  name="John Doe"
  number="**** **** **** 1234"
  brand="Visa"
/>
```

### DDropdown

Configurable dropdown menu with automatic positioning.

```jsx
<DDropdown
  actions={[
    { label: 'Edit', icon: 'Pencil', onClick: handleEdit },
    { label: 'Delete', icon: 'Trash2', color: 'danger' },
    { isDivider: true },
    { label: 'Help', href: '/help' },
  ]}
/>
```

### DTimeline

Component for displaying events in chronological order.

```jsx
<DTimeline
  items={[
    { title: 'Payment successful', time: '10:00 AM', status: 'success' },
    { title: 'Processing', time: '09:55 AM', status: 'warning' },
    { title: 'Started', time: '09:50 AM' },
  ]}
/>
```

### DOtp

Complete component for OTP authentication flows.

:::warning Version Note
DOtp requires version **2.1.1 or higher**. An export bug was fixed in v2.1.1.
:::

```jsx
<DOtp
  otpSize={6}
  seconds={60}
  action={async (otp) => verifyOtp(otp)}
/>
```

### DPasswordStrengthMeter

Password input with visual strength indicator.

```jsx
<DPasswordStrengthMeter
  label="New Password"
  value={password}
  onChange={setPassword}
/>
```

### DVoucher

Component for displaying receipts and vouchers, with download capability.

```jsx
<DVoucher
  icon="CircleCheckBig"
  color="success"
  title="Payment Successful"
  amount="$125.00"
>
  {/* Transaction details */}
</DVoucher>
```

## Highlights After 2.0 (2.1-2.7)

Between January and July 2026, seven releases (v2.1 → v2.7) shipped new components, a new hook, API changes to existing components, and CSS utilities.

### New components

- **DInputSearch** (reintroduced in v2.6): search input with built-in debounce. Its `onChange` returns the **string** directly (not the event). See [Components](development/components.html#dinputsearch).
- **DDataStateWrapper** (+ `EmptyState` / `ErrorState` / `LoadingState`): declarative handling of loading/error/empty states when rendering lists. Pairs with TanStack Query — see [API Integration](development/api-integration.html#state-handling-with-ddatastatewrapper).
- **DErrorBoundary**: error boundary with a configurable fallback, based on `react-error-boundary`.

### New hook

- **useConfirmModal** (+ `DConfirmModalContainer`): programmatic confirmation, with support for critical confirmation that requires typing an exact code. See [Components](development/components.html#hooks-exported-by-the-library).

### API changes to existing components

- **DButton**: new `variant="soft"` (v2.5) and responsive per-breakpoint sizes (v2.3).
- **DBadge**: responsive per-breakpoint sizes (v2.3).
- **DIcon**: custom icons via `iconRegistry` — accepts a direct React component or a name registered in `DContextProvider` (v2.7).
- **DOffcanvas**: responsive `openFrom`, `width`, and `height` per breakpoint (v2.7).
- **DCarousel**: customizable arrows with `iconArrowLeft` / `iconArrowRight` (v2.7).
- **DVoucher**: `icon` prop (Lucide name, `DIcon` props object, or `false`/`null`) and `href` support on its buttons (v2.2).

### CSS utilities

New utilities for dark mode, hover variants for text/border, responsive `shadow`/`rounded`/`border`/`text-opacity`, `fade-in`, and CSS grid. See [Theming](customization/theming.html#css-utilities-2-1-2-7).

## Technical Improvements

### React 19 Compatibility

Dynamic UI 2.0 is compatible with both React 18 and React 19, allowing you to adopt the latest React features.

### Storybook 9

The interactive documentation has been updated to Storybook 9, with better performance and a new interface.

### Framer Motion Animations

The `DModal` and `DOffcanvas` components now include smooth animations thanks to Framer Motion.

### New System Requirements

| Requirement | Version | Notes |
|-------------|---------|-------|
| Node.js | >=22.0.0 | Required |
| React | ~19.2.1 | Peer dependency (React 19.x required) |
| react-dom | ~19.2.1 | Peer dependency |
| react-i18next | ~16.2.4 | Peer dependency |
| react-hot-toast | ~2.6.0 | Peer dependency |
| framer-motion | 12.x | Included as dependency |

## Breaking Changes

For a detailed migration guide, see the [Migration Guide to v2.0](getting-started/migration-v2.html).

### Summary of breaking changes

1. **Icons**: Bootstrap Icons replaced by Lucide Icons (use PascalCase: `"Search"` not `"search"`)
2. **Props**: `theme` renamed to `color`
3. **DButton**: `pill` prop removed (use `className="rounded-pill"`)
4. **Removed components** (see [Migration Guide](getting-started/migration-v2.html) for replacements):
   - `DSkeleton` → Use Bootstrap placeholder utilities
   - `DList/DListItem` → Use `DListGroup/DListGroupItem`
   - `DQuickAction*` → Use base components
   - `DTableHead` → Removed (no replacement)

:::tip DInputSearch is back in v2.6
`DInputSearch` did not exist in v2.0 (the recommendation was `DInput` with `iconStart="Search"`), but it was **reintroduced in v2.6** as a new component with built-in debounce. See [Highlights After 2.0](#highlights-after-2-0-2-1-2-7).
:::

## Resources

- [Migration Guide](getting-started/migration-v2.html)
- [Lucide Icons Catalog](https://lucide.dev/icons/)
- [Interactive Storybook](https://react.dynamicframework.dev)
- [GitHub Repository](https://github.com/dynamic-framework/dynamic-ui)
