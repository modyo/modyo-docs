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
- API integration

## Prerequisites

Make sure you have completed the [installation](installation.html) of Dynamic Framework.

## Step 1: Create the Project

```bash
# Create project with Dynamic template
npx @modyo/cli@latest get dynamic-react-base-template my-first-app

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
│   ├── App.jsx         # Main component
│   ├── index.js        # Entry point
│   └── styles/         # Custom styles
├── public/
│   └── index.html      # HTML template
└── package.json        # Configuration
```

## Step 3: Create the Dashboard

### Dashboard Component

```jsx
// src/components/Dashboard.jsx
import React from 'react';
import { DCard, DCurrencyText } from '@dynamic-framework/ui-react';

const Dashboard = ({ user }) => {
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col">
          <h1>Welcome, {user.name}</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <DCard>
            <DCard.Header>
              <h5>Checking Account</h5>
            </DCard.Header>
            <DCard.Body>
              <DCurrencyText value={125430} className="fs-2 text-primary" />
              <p className="text-muted mb-0">Available</p>
            </DCard.Body>
          </DCard>
        </div>

        <div className="col-md-6 mb-3">
          <DCard>
            <DCard.Header>
              <h5>Savings Account</h5>
            </DCard.Header>
            <DCard.Body>
              <DCurrencyText value={45200} className="fs-2 text-success" />
              <p className="text-muted mb-0">Available</p>
            </DCard.Body>
          </DCard>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
```

## Step 4: Transaction List

### TransactionList Component

```tsx
// src/components/TransactionList.tsx
import React from 'react';
import { DListGroup, DListGroupItem, DBadge, DCurrencyText } from '@dynamic-framework/ui-react';

const TransactionList = ({ transactions }) => {
  const getStatusColor = (status) => {
    const colors = {
      completed: 'success',
      pending: 'warning',
      failed: 'danger'
    };
    return colors[status] || 'secondary';
  };

  return (
    <div className="transaction-list">
      <h2 className="mb-3">Recent Transactions</h2>

      <DListGroup>
        {transactions.map((transaction) => (
          <DListGroupItem key={transaction.id} className="d-flex justify-content-between align-items-center">
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
          </DListGroupItem>
        ))}
      </DListGroup>
    </div>
  );
};

export default TransactionList;
```

## Step 5: Transfer Form

### TransferForm Component

```tsx
// src/components/TransferForm.tsx
import React, { useState } from 'react';
import {
  DCard,
  DInput,
  DInputSelect,
  DInputCurrency,
  DButton,
  DAlert
} from '@dynamic-framework/ui-react';

const TransferForm = ({ accounts, onTransfer }) => {
  const [formData, setFormData] = useState({
    fromAccount: '',
    toAccount: '',
    amount: 0,
    description: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      await onTransfer(formData);
      setSuccess(true);
      setFormData({ fromAccount: '', toAccount: '', amount: 0, description: '' });
    } catch (err) {
      setError(err.message);
    }
  };

  const accountOptions = accounts.map(account => ({
    value: account.id,
    label: `${account.name} - $${account.balance}`
  }));

  return (
    <DCard>
      <DCard.Body>
        <form onSubmit={handleSubmit}>
          {error && <DAlert color="danger">{error}</DAlert>}
          {success && <DAlert color="success">Successful transfer</DAlert>}

          <DInputSelect
            id="fromAccount"
            label="Source Account"
            options={accountOptions}
            value={formData.fromAccount}
            onChange={(value) => setFormData({ ...formData, fromAccount: value })}
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
            onChange={(value) => setFormData({ ...formData, amount: value })}
            currencyCode="USD"
          />

          <DInput
            id="description"
            label="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Transfer description"
          />

          <DButton type="submit" color="primary" className="w-100 mt-3">
            Make Transfer
          </DButton>
        </form>
      </DCard.Body>
    </DCard>
  );
};

export default TransferForm;
```

## Step 6: Integrate Everything in App

### Main App Component

```tsx
// src/App.tsx
import React, { useState, useEffect } from 'react';
import { DContextProvider, DTabs, DProgress } from '@dynamic-framework/ui-react';
import Dashboard from './components/Dashboard';
import TransactionList from './components/TransactionList';
import TransferForm from './components/TransferForm';
import { fetchUser, fetchAccounts, fetchTransactions, createTransfer } from './services/api';

const tabs = [
  { label: 'Dashboard', tab: 'dashboard' },
  { label: 'Transactions', tab: 'transactions' },
  { label: 'Transfer', tab: 'transfer' },
];

function App() {
  const [user, setUser] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [userData, accountsData, transactionsData] = await Promise.all([
        fetchUser(),
        fetchAccounts(),
        fetchTransactions()
      ]);
      setUser(userData);
      setAccounts(accountsData);
      setTransactions(transactionsData);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const handleTransfer = async (transferData) => {
    await createTransfer(transferData);
    await loadData();
  };

  if (!user) {
    return <DProgress />;
  }

  return (
    <DContextProvider>
      <div className="app">
        <DTabs
          options={tabs}
          defaultSelected={activeTab}
          onChange={(tab) => setActiveTab(tab)}
        />
        <div className="tab-content mt-3">
          {activeTab === 'dashboard' && <Dashboard user={user} />}
          {activeTab === 'transactions' && <TransactionList transactions={transactions} />}
          {activeTab === 'transfer' && <TransferForm accounts={accounts} onTransfer={handleTransfer} />}
        </div>
      </div>
    </DContextProvider>
  );
}

export default App;
```

## Step 7: API Services

### API Service

```javascript
// src/services/api.js
const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const fetchUser = async () => {
  const response = await fetch(`${API_BASE}/user`);
  return response.json();
};

export const fetchAccounts = async () => {
  const response = await fetch(`${API_BASE}/accounts`);
  return response.json();
};

export const fetchTransactions = async () => {
  const response = await fetch(`${API_BASE}/transactions`);
  return response.json();
};

export const createTransfer = async (data) => {
  const response = await fetch(`${API_BASE}/transfers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Transfer error');
  }
  
  return response.json();
};
```

## Step 8: Run the Application

```bash
# Start the development server
npm start

# The application will be available at http://localhost:8080
```

## Step 9: Customization

### Add Custom Styles

```scss
// src/styles/custom.scss
.app {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.card {
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
  }
}

.transaction-list {
  background: white;
  padding: 20px;
  border-radius: 12px;
}
```

## Step 10: Deploy to Modyo

```bash
# Build for production
npm run build

# Configure Modyo CLI
npx @modyo/cli init

# Deploy to Modyo
npx @modyo/cli push
```

## Final Result

Congratulations! You've created your first banking application with Dynamic Framework that includes:

- Dashboard with account summary
- Recent transaction list
- Transfer form
- API integration
- Responsive and modern design
- Ready to deploy to Modyo

## Next Steps

- Explore more [components](../development/components.html)
- Implement [authentication](../development/api-integration.html#authentication)
- Add [advanced validations](../development/components.html#validation)
- Customize the [theme](../customization/theming.html)

## Need Help?

If you encounter problems:
1. Review the [component documentation](../development/components.html)
2. Check the [Storybook](https://react.dynamicframework.dev) for interactive examples
3. Contact [Support](https://support.modyo.com)