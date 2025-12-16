---
search: true
---

# Migrate to Dynamic UI 2.0

This guide will help you migrate your project from Dynamic UI v1.36.x to version 2.0.

## Prerequisites

Before starting the migration, ensure you meet the new requirements:

| Requirement | v1.36.x | v2.0 |
|-------------|---------|------|
| Node.js | >=20.13.1 | **>=22.0.0** |
| React | 18.x | 18.x or 19.x |

## Step 1: Update Dependencies

### Install new peer dependencies

Version 2.0 requires new dependencies that you must install in your project:

```bash
npm install framer-motion@">=12 <13"
npm install i18next@">=25 <26"
npm install react-i18next@">=16 <17"
```

### Update Dynamic UI

```bash
npm install @dynamic-framework/ui-react@^2.0.0
```

### Resulting package.json

Your `package.json` should include:

```json
{
  "dependencies": {
    "@dynamic-framework/ui-react": "^2.0.0",
    "framer-motion": "^12.0.0",
    "i18next": "^25.0.0",
    "react": "^18.0.0 || ^19.0.0",
    "react-dom": "^18.0.0 || ^19.0.0",
    "react-i18next": "^16.0.0",
    "react-hot-toast": "^2.0.0"
  }
}
```

## Step 2: Migrate Icons (Bootstrap Icons to Lucide)

The most significant change in v2.0 is the migration from Bootstrap Icons to [Lucide Icons](https://lucide.dev).

### Key changes

1. **Icon names now use PascalCase** instead of kebab-case
2. **No more `-fill` suffix** - Lucide uses the `strokeWidth` or `fill` prop instead
3. **New dependency**: `lucide-react` is automatically included

### Before vs After

```diff
// Before (v1.36.x)
- <DIcon icon="house-door" />
- <DIcon icon="check-circle-fill" />
- <DButton iconStart="gear" text="Settings" />

// After (v2.0)
+ <DIcon icon="Home" />
+ <DIcon icon="CircleCheck" />
+ <DButton iconStart="Settings" text="Settings" />
```

### Common icon name mappings

| Bootstrap Icons | Lucide Icons |
|-----------------|--------------|
| `house`, `house-door` | `Home` |
| `person` | `User` |
| `people` | `Users` |
| `gear` | `Settings` |
| `search` | `Search` |
| `envelope` | `Mail` |
| `bell` | `Bell` |
| `check` | `Check` |
| `check-circle` | `CheckCircle` |
| `check-circle-fill` | `CircleCheck` |
| `x` | `X` |
| `x-circle` | `XCircle` |
| `arrow-left` | `ArrowLeft` |
| `arrow-right` | `ArrowRight` |
| `chevron-left` | `ChevronLeft` |
| `chevron-right` | `ChevronRight` |
| `chevron-up` | `ChevronUp` |
| `chevron-down` | `ChevronDown` |
| `plus` | `Plus` |
| `trash` | `Trash` |
| `trash3` | `Trash2` |
| `pencil` | `Pencil` |
| `eye` | `Eye` |
| `eye-slash` | `EyeOff` |
| `three-dots` | `MoreHorizontal` |
| `three-dots-vertical` | `MoreVertical` |
| `info-circle` | `Info` |
| `exclamation-triangle` | `AlertTriangle` |
| `exclamation-circle` | `AlertCircle` |

For a complete list of available icons, visit [lucide.dev/icons](https://lucide.dev/icons/).

### Find and replace in your project

Use your IDE to search for all uses of `icon="` and update the names:

```bash
# Find all icons in your project
grep -r 'icon="' src/
grep -r 'iconStart="' src/
grep -r 'iconEnd="' src/
```

## Step 3: Rename `theme` Prop to `color`

The `theme` prop has been renamed to `color` across all components to standardize the API.

### Affected components

- `DAlert`
- `DBadge`
- `DButton`
- `DProgress`
- And other components with color variants

### Before vs After

```diff
// Before (v1.36.x)
- <DAlert theme="primary">Message</DAlert>
- <DBadge theme="success">Active</DBadge>
- <DButton theme="danger">Delete</DButton>

// After (v2.0)
+ <DAlert color="primary">Message</DAlert>
+ <DBadge color="success">Active</DBadge>
+ <DButton color="danger">Delete</DButton>
```

### Find and replace

```bash
# Find uses of theme prop
grep -r 'theme="' src/
```

## Step 4: Update Removed Components

Several components have been removed in v2.0. Here are the alternatives:

### DSkeleton

**Removed.** Use Bootstrap placeholder utilities:

```diff
// Before (v1.36.x)
- import { DSkeleton } from '@dynamic-framework/ui-react';
- <DSkeleton width={200} height={20} />

// After (v2.0)
+ <div className="placeholder-glow">
+   <span className="placeholder col-6"></span>
+ </div>
```

### DInputSearch

**Removed.** Use `DInput` with icons:

```diff
// Before (v1.36.x)
- import { DInputSearch } from '@dynamic-framework/ui-react';
- <DInputSearch placeholder="Search..." />

// After (v2.0)
+ import { DInput } from '@dynamic-framework/ui-react';
+ <DInput
+   placeholder="Search..."
+   iconStart="Search"
+ />
```

### DList and DListItem

**Removed.** Use the new and more powerful `DListGroup`:

```diff
// Before (v1.36.x)
- import { DList, DListItem } from '@dynamic-framework/ui-react';
- <DList>
-   <DListItem>Item 1</DListItem>
-   <DListItem>Item 2</DListItem>
- </DList>

// After (v2.0)
+ import { DListGroup } from '@dynamic-framework/ui-react';
+ <DListGroup>
+   <DListGroup.Item>Item 1</DListGroup.Item>
+   <DListGroup.Item>Item 2</DListGroup.Item>
+ </DListGroup>
```

### DQuickAction* (Button, Check, Select, Switch)

**Removed.** Build the UI with base components:

```diff
// Before (v1.36.x)
- import { DQuickActionButton } from '@dynamic-framework/ui-react';
- <DQuickActionButton
-   line1="Transfer"
-   line2="To another account"
-   icon="arrow-right"
- />

// After (v2.0)
+ import { DButton } from '@dynamic-framework/ui-react';
+ <DButton
+   iconEnd="ArrowRight"
+   text="Transfer"
+   variant="outline"
+ />
```

### DTableHead

**Removed.** This was an internal component for Storybook examples. No direct replacement.

## Step 5: Remove `pill` Prop from DButton

The `pill` prop has been removed from `DButton`. Use utility classes:

```diff
// Before (v1.36.x)
- <DButton color="primary" pill>Rounded</DButton>

// After (v2.0)
+ <DButton color="primary" className="rounded-pill">Rounded</DButton>
```

## Step 6: Update Animations (Optional)

The `DModal` and `DOffcanvas` components now use Framer Motion for smoother animations. This works automatically if you have `framer-motion` installed.

If you need to customize animations, see the [Framer Motion documentation](https://motion.dev/).

## Migration Checklist

- [ ] Node.js updated to v22+
- [ ] New peer dependencies installed (`framer-motion`, `i18next`, `react-i18next`)
- [ ] Dynamic UI updated to v2.0
- [ ] Icons migrated from Bootstrap Icons to Lucide Icons
- [ ] `theme` props renamed to `color`
- [ ] Removed components replaced with alternatives
- [ ] `pill` prop replaced with `className="rounded-pill"`
- [ ] Tests executed and passing
- [ ] Visual review of the application

## Additional Resources

- [Lucide Icons Catalog](https://lucide.dev/icons/)
- [What's New in v2.0](../whats-new-v2.html)
- [Dynamic UI Storybook](https://react.dynamicframework.dev)

## Need Help?

If you encounter problems during migration:

1. Review the [component documentation](../development/components.html)
2. Search the [community](https://community.modyo.com)
3. Report issues on [GitHub](https://github.com/dynamic-framework/dynamic-ui/issues)
