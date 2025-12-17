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

```css
font-family: "Jost", sans-serif;
```

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

## Technical Improvements

### React 19 Compatibility

Dynamic UI 2.0 is compatible with both React 18 and React 19, allowing you to adopt the latest React features.

### Storybook 9

The interactive documentation has been updated to Storybook 9, with better performance and a new interface.

### Framer Motion Animations

The `DModal` and `DOffcanvas` components now include smooth animations thanks to Framer Motion.

### New System Requirements

| Requirement | Version |
|-------------|---------|
| Node.js | >=22.0.0 |
| React | >=18 <20 |
| framer-motion | >=12 <13 |
| i18next | >=25 <26 |
| react-i18next | >=16 <17 |

## Breaking Changes

For a detailed migration guide, see the [Migration Guide to v2.0](getting-started/migration-v2.html).

### Summary of breaking changes

1. **Icons**: Bootstrap Icons replaced by Lucide Icons
2. **Props**: `theme` renamed to `color`
3. **DButton**: `pill` prop removed (use `className="rounded-pill"`)
4. **Removed components**: DSkeleton, DInputSearch, DList, DQuickAction*, DTableHead

## Resources

- [Migration Guide](getting-started/migration-v2.html)
- [Lucide Icons Catalog](https://lucide.dev/icons/)
- [Interactive Storybook](https://react.dynamicframework.dev)
- [GitHub Repository](https://github.com/dynamic-framework/dynamic-ui)
