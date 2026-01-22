---
search: true
---

# First Application

This guide will take you step by step through creating your first banking application with Dynamic Framework.

## Objective

By the end of this guide, you will have created a functional banking application with:
- Account dashboard
- Transaction view
- Basic transfers
- API integration with TanStack Query

## Prerequisites

Make sure you have completed the [installation](installation.html) of Dynamic Framework.

## Step 1: Create the Project

```bash
# Create project with Dynamic template
npx @modyo/cli@latest get dynamic-react-vite-base-template my-first-app

# Enter the directory
cd my-first-app

# Install dependencies
npm install
```

## Step 2: Initial Structure

Your project will have this structure:

```
my-first-app/
├── src/
│   ├── App.tsx              # Main component
│   ├── main.tsx             # Entry point
│   ├── components/          # UI components
│   ├── services/
│   │   ├── api/             # API client
│   │   ├── repositories/    # Data repositories
│   │   └── hooks/           # TanStack Query hooks
│   └── styles/              # Custom styles
├── public/
│   └── index.html           # HTML template
├── .env                     # Environment variables
└── package.json             # Configuration
```

## Step 3: Configure API Client

### API Client with Axios

```typescript
// src/services/api/client.ts
import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});
```

## Step 4: Create Repositories

### User Repository

```typescript
// src/services/repositories/userRepository.ts
import { api } from '../api/client';
import type { User } from '../../types';

export async function getUser(signal?: AbortSignal): Promise<User> {
  const response = await api.get('/user', { signal });
  return response.data;
}
```

### Account Repository

```typescript
// src/services/repositories/accountRepository.ts
import { api } from '../api/client';
import type { Account } from '../../types';

export async function getAccounts(signal?: AbortSignal): Promise<Account[]> {
  const response = await api.get('/accounts', { signal });
  return response.data;
}
```

### Transaction Repository

```typescript
// src/services/repositories/transactionRepository.ts
import { api } from '../api/client';
import type { Transaction } from '../../types';

export async function getTransactions(signal?: AbortSignal): Promise<Transaction[]> {
  const response = await api.get('/transactions', { signal });
  return response.data;
}
```

### Transfer Repository

```typescript
// src/services/repositories/transferRepository.ts
import { api } from '../api/client';
import type { TransferData, TransferResult } from '../../types';

export async function createTransfer(data: TransferData): Promise<TransferResult> {
  const response = await api.post('/transfers', data);
  return response.data;
}
```

## Step 5: Create TanStack Query Hooks

### User Hook

```typescript
// src/services/hooks/useUser.ts
import { useQuery } from '@tanstack/react-query';
import { getUser } from '../repositories/userRepository';

export function useUser() {
  return useQuery({
    queryKey: ['user'],
    queryFn: ({ signal }) => getUser(signal),
  });
}
```

### Accounts Hook

```typescript
// src/services/hooks/useAccounts.ts
import { useQuery } from '@tanstack/react-query';
import { getAccounts } from '../repositories/accountRepository';

export function useAccounts() {
  return useQuery({
    queryKey: ['accounts'],
    queryFn: ({ signal }) => getAccounts(signal),
  });
}
```

### Transactions Hook

```typescript
// src/services/hooks/useTransactions.ts
import { useQuery } from '@tanstack/react-query';
import { getTransactions } from '../repositories/transactionRepository';

export function useTransactions() {
  return useQuery({
    queryKey: ['transactions'],
    queryFn: ({ signal }) => getTransactions(signal),
  });
}
```

### Transfer Mutation Hook

```typescript
// src/services/hooks/useCreateTransfer.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTransfer } from '../repositories/transferRepository';

export function useCreateTransfer() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTransfer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['accounts'] });
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
    },
  });
}
```

## Step 6: Create the Dashboard

### Dashboard Component

```tsx
// src/components/Dashboard.tsx
import { DCard, DCurrencyText, DSkeleton, DAlert } from '@dynamic-framework/ui-react';
import { useUser, useAccounts } from '../services/hooks';

export default function Dashboard() {
  const { data: user, isLoading: userLoading, error: userError } = useUser();
  const { data: accounts, isLoading: accountsLoading, error: accountsError } = useAccounts();

  if (userLoading || accountsLoading) {
    return <DSkeleton />;
  }

  if (userError || accountsError) {
    return <DAlert color="danger">Error loading data</DAlert>;
  }

  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col">
          <h1>Welcome, {user?.name}</h1>
        </div>
      </div>

      <div className="row">
        {accounts?.map((account) => (
          <div key={account.id} className="col-md-6 mb-3">
            <DCard>
              <DCard.Header>
                <h5 className="mb-0">{account.name}</h5>
              </DCard.Header>
              <DCard.Body>
                <DCurrencyText value={account.balance} className="fs-2 text-primary" />
                <p className="text-muted mb-0">Available</p>
              </DCard.Body>
            </DCard>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## Step 7: Transaction List

### TransactionList Component

```tsx
// src/components/TransactionList.tsx
import { DListGroup, DBadge, DCurrencyText, DSkeleton, DAlert } from '@dynamic-framework/ui-react';
import { useTransactions } from '../services/hooks';

export default function TransactionList() {
  const { data: transactions, isLoading, error } = useTransactions();

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      completed: 'success',
      pending: 'warning',
      failed: 'danger'
    };
    return colors[status] || 'secondary';
  };

  if (isLoading) return <DSkeleton />;
  if (error) return <DAlert color="danger">Error loading transactions</DAlert>;
  if (!transactions?.length) return <DAlert color="info">No transactions found</DAlert>;

  return (
    <div className="transaction-list">
      <h2 className="mb-3">Recent Transactions</h2>

      <DListGroup>
        {transactions.map((transaction) => (
          <DListGroup.Item key={transaction.id} className="d-flex justify-content-between align-items-center">
            <div>
              <strong>{transaction.description}</strong>
              <small className="d-block text-muted">{transaction.date}</small>
            </div>
            <div className="text-end">
              <DCurrencyText
                value={Math.abs(transaction.amount)}
                className={transaction.amount > 0 ? 'text-success' : 'text-danger'}
              />
              <DBadge color={getStatusColor(transaction.status)} className="ms-2">
                {transaction.status}
              </DBadge>
            </div>
          </DListGroup.Item>
        ))}
      </DListGroup>
    </div>
  );
}
```

## Step 8: Transfer Form

### TransferForm Component

```tsx
// src/components/TransferForm.tsx
import { useState } from 'react';
import {
  DCard,
  DInput,
  DInputSelect,
  DInputCurrency,
  DButton,
  DAlert
} from '@dynamic-framework/ui-react';
import { useAccounts, useCreateTransfer } from '../services/hooks';

export default function TransferForm() {
  const { data: accounts } = useAccounts();
  const { mutate: createTransfer, isPending, isSuccess, isError, error, reset } = useCreateTransfer();

  const [formData, setFormData] = useState({
    fromAccount: '',
    toAccount: '',
    amount: 0,
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    reset();
    createTransfer(formData, {
      onSuccess: () => {
        setFormData({ fromAccount: '', toAccount: '', amount: 0, description: '' });
      }
    });
  };

  const accountOptions = accounts?.map(account => ({
    value: account.id,
    label: `${account.name} - $${account.balance}`
  })) || [];

  return (
    <DCard>
      <DCard.Body>
        <h2 className="mb-3">New Transfer</h2>
        <form onSubmit={handleSubmit}>
          {isError && <DAlert color="danger">{error?.message || 'Transfer failed'}</DAlert>}
          {isSuccess && <DAlert color="success">Transfer completed successfully</DAlert>}

          <DInputSelect
            id="fromAccount"
            label="Source Account"
            options={accountOptions}
            value={formData.fromAccount}
            onChange={(option) => setFormData({ ...formData, fromAccount: String(option.value) })}
          />

          <DInput
            id="toAccount"
            label="Destination Account"
            value={formData.toAccount}
            onChange={(e) => setFormData({ ...formData, toAccount: e.target.value })}
            placeholder="Account number"
          />

          <DInputCurrency
            id="amount"
            label="Amount"
            value={formData.amount}
            onChange={(value) => setFormData({ ...formData, amount: value || 0 })}
          />

          <DInput
            id="description"
            label="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Transfer description"
          />

          <DButton
            type="submit"
            text={isPending ? 'Processing...' : 'Make Transfer'}
            color="primary"
            className="w-100 mt-3"
            loading={isPending}
          />
        </form>
      </DCard.Body>
    </DCard>
  );
}
```

## Step 9: Integrate Everything in App

### Main App Component

```tsx
// src/App.tsx
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DContextProvider, DTabs } from '@dynamic-framework/ui-react';
import Dashboard from './components/Dashboard';
import TransactionList from './components/TransactionList';
import TransferForm from './components/TransferForm';

import '@dynamic-framework/ui-react/dist/css/dynamic-ui.css';

const queryClient = new QueryClient();

const tabs = [
  { label: 'Dashboard', tab: 'dashboard' },
  { label: 'Transactions', tab: 'transactions' },
  { label: 'Transfer', tab: 'transfer' },
];

function AppContent() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="app">
      <DTabs
        options={tabs}
        defaultSelected={activeTab}
        onChange={(option) => setActiveTab(option.tab)}
      />
      <div className="tab-content mt-3">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'transactions' && <TransactionList />}
        {activeTab === 'transfer' && <TransferForm />}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DContextProvider>
        <AppContent />
      </DContextProvider>
    </QueryClientProvider>
  );
}
```

## Step 10: Run the Application

```bash
# Start the development server
npm run start

# The application will be available at http://localhost:8080
```

## Step 11: Customization

### Add Custom Styles

```css
/* src/styles/custom.css */
.app {
  min-height: 100vh;
  padding: 20px;
}

.transaction-list {
  background: white;
  padding: 20px;
  border-radius: 12px;
}
```

## Step 12: Deploy to Modyo

### 1. Configure Environment

Create a `.env` file with your Modyo credentials:

```bash
# .env
MODYO_ACCOUNT_URL=https://your-account.modyo.cloud
MODYO_TOKEN=your-api-token
# Use either MODYO_SITE_HOST or MODYO_SITE_ID (not both)
MODYO_SITE_HOST=your-site-host
# MODYO_SITE_ID=123  # Preferred: works with site stages
```

### 2. Build and Deploy

```bash
# Build and push to Modyo
npm run build && npx @modyo/cli@latest push
```

## Final Result

Congratulations! You've created your first banking application with Dynamic Framework that includes:

- Dashboard with account summary
- Recent transaction list with loading and error states
- Transfer form with TanStack Query mutations
- Proper API integration with repositories and hooks
- Ready to deploy to Modyo

## Next Steps

- Explore more [components](../development/components.html)
- Learn about [API integration patterns](../development/api-integration.html)
- Customize the [theme](../customization/theming.html)

## Need Help?

If you encounter problems:
1. Review the [component documentation](../development/components.html)
2. Check the [Storybook](https://react.dynamicframework.dev) for interactive examples
3. Contact [Support](https://support.modyo.com)
