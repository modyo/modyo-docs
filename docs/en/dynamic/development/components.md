---
search: true
---

# Dynamic Framework Components

Dynamic Framework offers more than 30 specialized components for the financial industry, designed to cover the most common needs in banking and financial applications.

## Component Types

### HTML Components
HTML components are static interface elements or with minimal interactivity, ideal for:

- **Public sites** with high traffic
- **Marketing pages** that require SEO
- **Informational content** that doesn't change frequently
- **Simple interfaces** without complex logic

#### Features:
- Performance optimized
- SEO compatible
- Accessible by default
- Fast and efficient loading
- Don't require JavaScript to function

#### Usage Examples:
```html
<!-- Banking product card -->
<div class="df-card">
  <div class="df-card-body">
    <h3 class="df-card-title">Savings Account</h3>
    <p class="df-card-text">Save with the best market rates</p>
    <a href="#" class="df-btn df-btn-primary">Open Account</a>
  </div>
</div>

<!-- Interest rates table -->
<table class="df-table">
  <thead>
    <tr>
      <th>Term</th>
      <th>Annual Rate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>30 days</td>
      <td>3.5%</td>
    </tr>
    <tr>
      <td>90 days</td>
      <td>4.2%</td>
    </tr>
  </tbody>
</table>
```

### React Components
React components provide advanced interactivity and state management, perfect for:

- **Transactional applications** that require real-time updates
- **Complex forms** with dynamic validation
- **Interactive dashboards** with data visualization
- **User flows** with multiple steps

#### Features:
- Complex state management
- Real-time updates
- API integration
- Reusable components
- Conditional rendering

#### Usage Examples:
```jsx
// Bank transfer component
import { TransferForm, AccountSelector, AmountInput } from '@dynamic-framework/ui-react';

function BankTransfer() {
  return (
    <TransferForm onSubmit={handleTransfer}>
      <AccountSelector 
        label="Source Account"
        accounts={userAccounts}
      />
      <AccountSelector 
        label="Destination Account"
        allowExternal={true}
      />
      <AmountInput 
        currency="USD"
        max={availableBalance}
      />
    </TransferForm>
  );
}

// Account statement component
import { AccountStatement, TransactionList } from '@dynamic-framework/ui-react';

function AccountDashboard() {
  return (
    <AccountStatement accountId={selectedAccount}>
      <TransactionList 
        filterable={true}
        sortable={true}
        paginated={true}
        itemsPerPage={20}
      />
    </AccountStatement>
  );
}
```

## Component Catalog

### Navigation Components
- **Navbar**: Main navigation bar with dropdown menus
- **Sidebar**: Side panel for secondary navigation
- **Breadcrumb**: Location indicator in hierarchy
- **Tabs**: Navigation between related sections
- **Pagination**: Pagination control for listings

### Form Components
- **Input**: Text fields with integrated validation
- **Select**: Dropdown lists with search
- **DatePicker**: Date selector with calendar
- **FileUpload**: Document upload with preview
- **Checkbox/Radio**: Multiple and single selection controls

### Data Components
- **Table**: Tables with sorting and filters
- **Chart**: Charts for data visualization
- **Card**: Cards for information presentation
- **List**: Lists with different presentation styles
- **Timeline**: Timeline for event history

### Feedback Components
- **Alert**: User notification messages
- **Modal**: Pop-up windows for important actions
- **Toast**: Non-intrusive temporary notifications
- **Progress**: Progress indicators for operations
- **Skeleton**: Placeholders during content loading

### Specialized Financial Components
- **AccountCard**: Account summary card
- **TransactionItem**: Transaction item with details
- **BalanceDisplay**: Balance display with formatting
- **CurrencyInput**: Input field for amounts
- **CardSelector**: Visual selector for credit/debit cards

## Component Customization

### Themes and CSS Variables
```css
/* Global theme variables */
:root {
  --df-primary-color: #004B8D;
  --df-secondary-color: #00A0DF;
  --df-success-color: #28A745;
  --df-danger-color: #DC3545;
  --df-font-family: 'Inter', sans-serif;
  --df-border-radius: 8px;
  --df-spacing-unit: 8px;
}

/* Specific component customization */
.df-card {
  --df-card-bg: var(--df-white);
  --df-card-border: 1px solid var(--df-gray-200);
  --df-card-shadow: 0 2px 4px rgba(0,0,0,0.1);
  --df-card-padding: calc(var(--df-spacing-unit) * 3);
}
```

### Props and Configuration
```jsx
// Customization through props
<Button 
  variant="primary"
  size="large"
  icon="arrow-right"
  loading={isLoading}
  disabled={!isValid}
  fullWidth
>
  Continue
</Button>

// Global component configuration
import { ConfigProvider } from '@dynamic-framework/ui-react';

<ConfigProvider 
  theme={{
    colors: {
      primary: '#004B8D',
      secondary: '#00A0DF'
    },
    typography: {
      fontFamily: 'Inter, sans-serif'
    }
  }}
>
  <App />
</ConfigProvider>
```

## Component Composition

Dynamic Framework components are designed to work together harmoniously:

```jsx
// Example composition for account opening flow
import { 
  Stepper, 
  Form, 
  PersonalInfoFields,
  DocumentUpload,
  AccountTypeSelector,
  TermsAndConditions,
  ConfirmationScreen 
} from '@dynamic-framework/ui-react';

function AccountOpening() {
  const steps = [
    { label: 'Personal Information', component: PersonalInfoFields },
    { label: 'Documentation', component: DocumentUpload },
    { label: 'Account Type', component: AccountTypeSelector },
    { label: 'Terms', component: TermsAndConditions },
    { label: 'Confirmation', component: ConfirmationScreen }
  ];

  return (
    <Stepper steps={steps} onComplete={handleAccountCreation}>
      {({ CurrentStep, navigation }) => (
        <Form>
          <CurrentStep />
          <navigation.Controls />
        </Form>
      )}
    </Stepper>
  );
}
```

## Accessibility

All Dynamic Framework components comply with WCAG 2.1 level AA standards:

- Complete **keyboard navigation**
- **Screen reader** compatible
- Adequate **color contrast**
- Appropriate **ARIA labels**
- Descriptive **error messages**

## Performance

Components are optimized for performance:

- **Lazy loading** of heavy components
- Automatic **code splitting**
- **Memoization** of expensive calculations
- **Virtual scrolling** for long lists
- **Re-render optimization**

## Documentation and Support

Each component includes:

- Detailed documentation of props and methods
- Interactive code examples
- Best practice guides
- Common use cases
- Playground for experimentation

Access complete documentation at [dynamic.modyo.com/docs](https://dynamic.modyo.com/docs)