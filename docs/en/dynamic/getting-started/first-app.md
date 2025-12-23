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
import { 
  Container, 
  Row, 
  Col, 
  Card,
  Typography 
} from '@dynamic-framework/ui-react';

const Dashboard = ({ user }) => {
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <Typography variant="h1">
            Welcome, {user.name}
          </Typography>
        </Col>
      </Row>
      
      <Row>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Typography variant="h3">Checking Account</Typography>
            </Card.Header>
            <Card.Body>
              <Typography variant="h2" className="text-primary">
                $125,430.00
              </Typography>
              <Typography variant="body2" className="text-muted">
                Available
              </Typography>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6}>
          <Card>
            <Card.Header>
              <Typography variant="h3">Savings Account</Typography>
            </Card.Header>
            <Card.Body>
              <Typography variant="h2" className="text-success">
                $45,200.00
              </Typography>
              <Typography variant="body2" className="text-muted">
                Available
              </Typography>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
```

## Step 4: Transaction List

### TransactionList Component

```jsx
// src/components/TransactionList.jsx
import React from 'react';
import { 
  Table,
  Badge,
  Typography 
} from '@dynamic-framework/ui-react';

const TransactionList = ({ transactions }) => {
  const getStatusBadge = (status) => {
    const variants = {
      completed: 'success',
      pending: 'warning',
      failed: 'danger'
    };
    return variants[status] || 'secondary';
  };

  return (
    <div className="transaction-list">
      <Typography variant="h2" className="mb-3">
        Recent Transactions
      </Typography>
      
      <Table responsive hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td className={transaction.amount > 0 ? 'text-success' : 'text-danger'}>
                ${Math.abs(transaction.amount).toFixed(2)}
              </td>
              <td>
                <Badge variant={getStatusBadge(transaction.status)}>
                  {transaction.status}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TransactionList;
```

## Step 5: Transfer Form

### TransferForm Component

```jsx
// src/components/TransferForm.jsx
import React, { useState } from 'react';
import { 
  Form,
  Input,
  Select,
  Button,
  Alert 
} from '@dynamic-framework/ui-react';

const TransferForm = ({ accounts, onTransfer }) => {
  const [formData, setFormData] = useState({
    fromAccount: '',
    toAccount: '',
    amount: '',
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
      setFormData({
        fromAccount: '',
        toAccount: '',
        amount: '',
        description: ''
      });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">Successful transfer</Alert>}
      
      <Form.Group>
        <Form.Label>Source Account</Form.Label>
        <Select
          name="fromAccount"
          value={formData.fromAccount}
          onChange={handleChange}
          required
        >
          <option value="">Select account</option>
          {accounts.map(account => (
            <option key={account.id} value={account.id}>
              {account.name} - ${account.balance}
            </option>
          ))}
        </Select>
      </Form.Group>

      <Form.Group>
        <Form.Label>Destination Account</Form.Label>
        <Input
          type="text"
          name="toAccount"
          value={formData.toAccount}
          onChange={handleChange}
          placeholder="Account number"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Amount</Form.Label>
        <Input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="0.00"
          min="0.01"
          step="0.01"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Transfer description"
        />
      </Form.Group>

      <Button type="submit" variant="primary" block>
        Make Transfer
      </Button>
    </Form>
  );
};

export default TransferForm;
```

## Step 6: Integrate Everything in App

### Main App Component

```jsx
// src/App.jsx
import React, { useState, useEffect } from 'react';
import { ThemeProvider, Tabs, Tab } from '@dynamic-framework/ui-react';
import Dashboard from './components/Dashboard';
import TransactionList from './components/TransactionList';
import TransferForm from './components/TransferForm';
import { fetchUser, fetchAccounts, fetchTransactions, createTransfer } from './services/api';

function App() {
  const [user, setUser] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    // Load initial data
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const userData = await fetchUser();
      const accountsData = await fetchAccounts();
      const transactionsData = await fetchTransactions();
      
      setUser(userData);
      setAccounts(accountsData);
      setTransactions(transactionsData);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const handleTransfer = async (transferData) => {
    await createTransfer(transferData);
    // Reload data after transfer
    await loadData();
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider>
      <div className="app">
        <Tabs activeKey={activeTab} onSelect={setActiveTab}>
          <Tab eventKey="dashboard" title="Dashboard">
            <Dashboard user={user} />
          </Tab>
          <Tab eventKey="transactions" title="Transactions">
            <TransactionList transactions={transactions} />
          </Tab>
          <Tab eventKey="transfer" title="Transfer">
            <TransferForm accounts={accounts} onTransfer={handleTransfer} />
          </Tab>
        </Tabs>
      </div>
    </ThemeProvider>
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