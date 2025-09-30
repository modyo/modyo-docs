---
search: true
---

# Quick Start with Dynamic Framework

This guide will help you get started quickly with Dynamic Framework, from installation to your first functional application.

## Prerequisites

Before starting, make sure you have installed:

- **Node.js** v20 or higher
- **NPM** 10.x or higher
- **Git** for version control
- **Modyo Account** with access to Dynamic Framework
- **Code editor** (we recommend VS Code)

## Installation

### Option 1: Using Modyo CLI (Recommended)

The fastest way to start is using Modyo CLI with a Dynamic Framework template:

```bash
# Create a new project with the React base template
npx @modyo/cli@latest get dynamic-react-base-template my-digital-bank

# Navigate to the project directory
cd my-digital-bank

# Install dependencies
npm install

# Start the development server
npm run start
```

Your application will be available at `http://localhost:8080`

### Option 2: Integration in Modyo Platform

If you're creating a new web application in Modyo:

1. Go to **Channels > Sites** in your Modyo account
2. Create a new site
3. Select **"Dynamic Minimal Theme"** as template
4. Dynamic Framework will be installed automatically

### Option 3: Installation via CDN

For simple projects or quick prototypes:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Dynamic Framework CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@dynamic-framework/ui-react@latest/dist/css/dynamic-ui.css">
</head>
<body>
  <!-- Your content here -->
  
  <!-- Dynamic Framework JavaScript (optional) -->
  <script src="https://cdn.jsdelivr.net/npm/@dynamic-framework/ui-react@latest/dist/js/bootstrap.min.js"></script>
</body>
</html>
```

### Option 4: Installation via NPM

For existing React projects:

```bash
# Install the main package
npm install @dynamic-framework/ui-react

# Install peer dependencies
npm install react react-dom bootstrap
```

## Project Structure

A typical project with Dynamic Framework has the following structure:

```
my-digital-bank/
├── src/
│   ├── components/        # Custom components
│   ├── views/             # Application views/pages
│   ├── services/          # Services and API calls
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utilities and helpers
│   ├── styles/            # Custom styles
│   ├── App.jsx            # Main component
│   └── index.js           # Entry point
├── public/
│   └── index.html         # HTML template
├── .modyo/                # Modyo configuration
├── package.json           # Dependencies and scripts
└── README.md             # Project documentation
```

## Your First Application

### 1. Basic Component

Create your first component using Dynamic Framework:

```jsx
// src/components/WelcomeBanner.jsx
import React from 'react';
import { Card, Button, Typography } from '@dynamic-framework/ui-react';

const WelcomeBanner = ({ userName }) => {
  return (
    <Card className="welcome-banner">
      <Card.Body>
        <Typography variant="h2">
          Welcome, {userName}
        </Typography>
        <Typography variant="body1">
          Manage your finances simply and securely
        </Typography>
        <Button variant="primary" size="large">
          View my accounts
        </Button>
      </Card.Body>
    </Card>
  );
};

export default WelcomeBanner;
```

### 2. Dashboard View

Create a complete view using multiple components:

```jsx
// src/views/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  AccountCard,
  TransactionList,
  QuickActions 
} from '@dynamic-framework/ui-react';
import WelcomeBanner from '../components/WelcomeBanner';

const Dashboard = () => {
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Load data from your API
    fetchAccounts();
    fetchTransactions();
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <WelcomeBanner userName="John Doe" />
        </Col>
      </Row>
      
      <Row className="mt-4">
        <Col md={8}>
          <h3>My Accounts</h3>
          {accounts.map(account => (
            <AccountCard 
              key={account.id}
              account={account}
              onSelect={() => handleAccountSelect(account)}
            />
          ))}
        </Col>
        
        <Col md={4}>
          <QuickActions 
            actions={[
              { label: 'Transfer', icon: 'transfer', onClick: handleTransfer },
              { label: 'Pay', icon: 'payment', onClick: handlePayment },
              { label: 'Top Up', icon: 'topup', onClick: handleTopUp }
            ]}
          />
        </Col>
      </Row>
      
      <Row className="mt-4">
        <Col xs={12}>
          <h3>Recent Transactions</h3>
          <TransactionList 
            transactions={transactions}
            onTransactionClick={handleTransactionDetail}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
```

### 3. Theme Configuration

Customize your application theme:

```jsx
// src/App.jsx
import React from 'react';
import { ThemeProvider } from '@dynamic-framework/ui-react';
import Dashboard from './views/Dashboard';

const customTheme = {
  colors: {
    primary: '#1E3A5F',
    secondary: '#4A90E2',
    success: '#52C41A',
    danger: '#F5222D',
    warning: '#FAAD14',
    info: '#1890FF'
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: {
      base: '16px',
      small: '14px',
      large: '18px'
    }
  },
  spacing: {
    unit: 8,
    small: 4,
    medium: 16,
    large: 24
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px'
  }
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
```

## Connect with APIs

### Configure Services

```javascript
// src/services/api.js
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.mydigitalbank.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor to add authentication token
api.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Specific services
export const accountService = {
  getAccounts: () => api.get('/accounts'),
  getAccountById: (id) => api.get(`/accounts/${id}`),
  getTransactions: (accountId) => api.get(`/accounts/${accountId}/transactions`)
};

export const transferService = {
  createTransfer: (data) => api.post('/transfers', data),
  getTransferStatus: (id) => api.get(`/transfers/${id}/status`)
};
```

### Use Custom Hooks

```javascript
// src/hooks/useAccounts.js
import { useState, useEffect } from 'react';
import { accountService } from '../services/api';

export const useAccounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        setLoading(true);
        const response = await accountService.getAccounts();
        setAccounts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts();
  }, []);

  return { accounts, loading, error };
};
```

## Development Scripts

In your `package.json`, you'll have these useful scripts:

```json
{
  "scripts": {
    "start": "webpack serve --mode development",
    "build": "webpack --mode production",
    "test": "jest",
    "lint": "eslint src/",
    "format": "prettier --write 'src/**/*.{js,jsx,json,css}'",
    "modyo:push": "modyo-cli push",
    "modyo:preview": "modyo-cli preview"
  }
}
```

## Deploy to Modyo

### 1. Configure Modyo CLI

```bash
# Initialize Modyo configuration
npx @modyo/cli@latest init

# Follow the prompts to configure:
# - Your Modyo account URL
# - API token
# - Target site
```

### 2. Build and Deploy

```bash
# Build the application for production
npm run build

# Deploy to Modyo
npm run modyo:push

# Or preview before deploying
npm run modyo:preview
```

## Best Practices

### 1. Code Organization
- Keep components small and focused
- Use folders to group related functionality
- Separate business logic from UI components

### 2. Performance
- Implement lazy loading for routes
- Use React.memo for heavy components
- Optimize images and assets

### 3. Security
- Never hardcode credentials
- Validate all user inputs
- Use HTTPS for all communications

### 4. Testing
- Write unit tests for critical logic
- Implement integration tests for main flows
- Use tools like Jest and React Testing Library

## Additional Resources

- **Complete Documentation**: [dynamic.modyo.com/docs](https://dynamic.modyo.com/docs)
- **Code Examples**: [github.com/modyo/dynamic-examples](https://github.com/modyo/dynamic-examples)
- **Community**: [community.modyo.com](https://community.modyo.com)
- **Support**: [support.modyo.com](https://support.modyo.com)

## Next Steps

Now that you have your application running:

1. Explore the [component catalog](components.html)
2. Learn about [theme customization](theming.html)
3. Review [experience templates](experiences.html)
4. Implement [API integrations](api-integration.html)

Congratulations! You're now ready to build extraordinary financial experiences with Dynamic Framework.