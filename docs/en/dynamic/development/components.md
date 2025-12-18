---
search: true
---

# Dynamic Framework Components

Dynamic Framework offers more than 45 specialized React components for financial applications, built on Bootstrap 5 and designed to cover the most common needs in banking applications.

## Component Catalog

### Layout Components

| Component | Description |
|-----------|-------------|
| `DBox` | Semantic container with visual variants |
| `DCard` | Card with header, body, and footer |
| `DLayout` | CSS Grid-based grid system |
| `DCollapse` | Collapsible panel with animation |

```jsx
import { DCard, DBox } from '@dynamic-framework/ui-react';

// Basic card
<DCard>
  <DCard.Header>
    <h5 className="mb-0">Title</h5>
  </DCard.Header>
  <DCard.Body>
    Card content
  </DCard.Body>
  <DCard.Footer>
    <DButton text="Action" color="primary" />
  </DCard.Footer>
</DCard>

// Box with variant
<DBox className="p-3">
  Box content
</DBox>
```

### Navigation Components

| Component | Description |
|-----------|-------------|
| `DTabs` | Tab navigation with content |
| `DStepper` | Step indicator for wizards |
| `DPaginator` | Pagination control |
| `DDropdown` | Dropdown menu |

```jsx
import { DTabs, DTabOption } from '@dynamic-framework/ui-react';
import { useState, useMemo } from 'react';

function TabsExample() {
  const tabs: DTabOption[] = useMemo(() => [
    { label: 'Summary', tab: 'summary' },
    { label: 'Transactions', tab: 'transactions' },
    { label: 'Details', tab: 'details' },
  ], []);

  const [selectedTab, setSelectedTab] = useState<DTabOption>(tabs[0]);

  return (
    <DTabs
      options={tabs}
      defaultSelected={selectedTab.tab}
      onChange={setSelectedTab}
    >
      <DTabs.Tab tab="summary">
        <p>Summary content</p>
      </DTabs.Tab>
      <DTabs.Tab tab="transactions">
        <p>Transaction list</p>
      </DTabs.Tab>
      <DTabs.Tab tab="details">
        <p>Account details</p>
      </DTabs.Tab>
    </DTabs>
  );
}
```

### Form Components

| Component | Description |
|-----------|-------------|
| `DInput` | Text field with label and validation |
| `DInputCurrency` | Amount input with formatting |
| `DInputPassword` | Password field with toggle |
| `DInputPhone` | Phone field with country code |
| `DInputPin` | Numeric PIN input |
| `DInputMask` | Input with format mask |
| `DInputCheck` | Checkbox with label |
| `DInputSwitch` | Toggle switch |
| `DInputRange` | Range slider |
| `DInputCounter` | Numeric counter with +/- |
| `DSelect` | Dropdown list |
| `DInputSelect` | Select with search |
| `DDatePicker` | Date selector |
| `DOtp` | OTP code input |
| `DBoxFile` | File upload |

```jsx
import { DInput, DInputCurrency, DButton } from '@dynamic-framework/ui-react';
import { useState } from 'react';

function TransferForm() {
  const [amount, setAmount] = useState<number | undefined>();
  const [description, setDescription] = useState('');

  return (
    <form>
      <div className="mb-3">
        <DInputCurrency
          label="Amount to transfer"
          value={amount}
          onChange={setAmount}
          currencyCode="USD"
          placeholder="0.00"
        />
      </div>

      <div className="mb-3">
        <DInput
          label="Description"
          value={description}
          onChange={setDescription}
          placeholder="Transfer concept"
        />
      </div>

      <DButton
        text="Transfer"
        color="primary"
        iconEnd="Send"
        type="submit"
      />
    </form>
  );
}
```

### Button Components

| Component | Description |
|-----------|-------------|
| `DButton` | Button with variants and states |
| `DButtonIcon` | Icon-only button |

```jsx
import { DButton, DButtonIcon } from '@dynamic-framework/ui-react';

// Buttons with different colors
<DButton text="Primary" color="primary" />
<DButton text="Secondary" color="secondary" />
<DButton text="Success" color="success" />
<DButton text="Danger" color="danger" />

// Style variants
<DButton text="Solid" color="primary" />
<DButton text="Outline" color="primary" variant="outline" />
<DButton text="Link" color="primary" variant="link" />

// With icons (Lucide, PascalCase)
<DButton text="Save" iconStart="Save" color="primary" />
<DButton text="Next" iconEnd="ArrowRight" color="primary" />

// Icon only
<DButtonIcon icon="Settings" color="secondary" />
<DButtonIcon icon="Trash" color="danger" />
```

### Feedback Components

| Component | Description |
|-----------|-------------|
| `DAlert` | Alert messages |
| `DToast` | Temporary notifications |
| `DToastContainer` | Toast container |
| `DProgress` | Progress bar |
| `DModal` | Modal window |
| `DOffcanvas` | Sliding side panel |
| `DPopover` | Popover with content |
| `DTooltip` | Informative tooltip |

```jsx
import { DAlert, DModal, DButton } from '@dynamic-framework/ui-react';
import { useState } from 'react';

function FeedbackExample() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Alerts */}
      <DAlert color="success">
        Operation completed successfully
      </DAlert>

      <DAlert color="danger" dismissible onClose={() => {}}>
        An error has occurred
      </DAlert>

      {/* Modal */}
      <DButton
        text="Open Modal"
        color="primary"
        onClick={() => setShowModal(true)}
      />

      <DModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Confirm action"
      >
        <p>Are you sure you want to perform this action?</p>
        <div className="d-flex gap-2 justify-content-end">
          <DButton
            text="Cancel"
            color="secondary"
            variant="outline"
            onClick={() => setShowModal(false)}
          />
          <DButton
            text="Confirm"
            color="primary"
            onClick={() => setShowModal(false)}
          />
        </div>
      </DModal>
    </>
  );
}
```

### Data Components

| Component | Description |
|-----------|-------------|
| `DBadge` | Labels and counters |
| `DChip` | Removable tags |
| `DAvatar` | User avatar |
| `DListGroup` | Grouped list |
| `DTimeline` | Timeline |
| `DCarousel` | Content carousel |

```jsx
import { DBadge, DChip, DListGroup } from '@dynamic-framework/ui-react';

// Badges
<DBadge text="New" color="primary" />
<DBadge text="Pending" color="warning" soft />
<DBadge text="5" color="danger" pill />

// Removable chips
<DChip
  label="Tag"
  onClose={() => handleRemove()}
  color="primary"
/>

// Grouped list
<DListGroup>
  <DListGroup.Item>Item 1</DListGroup.Item>
  <DListGroup.Item>Item 2</DListGroup.Item>
  <DListGroup.Item>Item 3</DListGroup.Item>
</DListGroup>
```

### Financial Components

| Component | Description |
|-----------|-------------|
| `DCreditCard` | Credit/debit card display |
| `DCurrencyText` | Text with currency format |
| `DVoucher` | Transaction receipt/voucher |
| `DPasswordStrengthMeter` | Password strength indicator |

```jsx
import { DCreditCard, DCurrencyText, DVoucher } from '@dynamic-framework/ui-react';

// Credit card
<DCreditCard
  lastFourDigits="4532"
  cardHolder="JOHN DOE"
  expirationDate="12/28"
  franchise="visa"
/>

// Text with currency format
<DCurrencyText
  value={1250.50}
  currencyCode="USD"
/>

// Transaction voucher
<DVoucher
  title="Transfer successful"
  items={[
    { label: 'Amount', value: '$500.00' },
    { label: 'Destination', value: 'Account ***1234' },
    { label: 'Date', value: '12/18/2025' },
  ]}
/>
```

### Icons

Dynamic UI 2.0 uses [Lucide Icons](https://lucide.dev/icons/). Names must be in **PascalCase**:

```jsx
import { DIcon } from '@dynamic-framework/ui-react';

// Basic icons
<DIcon icon="Home" />
<DIcon icon="Settings" />
<DIcon icon="User" />

// With size and color
<DIcon icon="CheckCircle" size="32px" color="success" />
<DIcon icon="AlertTriangle" size="24px" color="warning" />

// In buttons
<DButton text="Edit" iconStart="Pencil" color="primary" />
<DButton text="Delete" iconStart="Trash" color="danger" />
```

## Common Props

### The `color` Prop

Most components use `color` (not `variant` or `theme`):

```jsx
// CORRECT
<DButton text="Action" color="primary" />
<DAlert color="success">Message</DAlert>
<DBadge text="Status" color="warning" />

// INCORRECT - these props DO NOT exist
<DButton text="Action" theme="primary" />
<DButton text="Action" variant="primary" />
```

Available values: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`

### Input Handlers

Input components receive the value directly, **not** an event:

```jsx
// CORRECT
<DInput
  value={value}
  onChange={(newValue) => setValue(newValue)}
/>

// INCORRECT
<DInput
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

## Global Configuration

Use `DContextProvider` for global application configuration:

```jsx
import { DContextProvider } from '@dynamic-framework/ui-react';

function App() {
  return (
    <DContextProvider>
      <MyApplication />
    </DContextProvider>
  );
}
```

## Accessibility

All Dynamic Framework components comply with WCAG 2.1 level AA:

- Complete keyboard navigation
- Screen reader compatibility
- Adequate color contrast
- Appropriate ARIA labels

## Resources

- [Storybook - Interactive Catalog](https://react.dynamicframework.dev/)
- [Lucide Icons](https://lucide.dev/icons/)
- [Bootstrap 5 - CSS Utilities](https://getbootstrap.com/docs/5.3/utilities/api/)
