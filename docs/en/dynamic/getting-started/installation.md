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
npx @modyo/cli@latest get dynamic-react-vite-base-template my-digital-bank

# Navigate to the project directory
cd my-digital-bank

# Install dependencies
npm install

# Start the development server
npm run start
```

Your application will be available at `http://localhost:8080`

### Option 2: Adding to an Existing React Project

For existing React projects, install the package via NPM:

```bash
# Install the main package
npm install @dynamic-framework/ui-react
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
├── .env                   # Modyo CLI configuration (account URL, site, token)
├── package.json           # Dependencies and scripts
└── README.md             # Project documentation
```

## Your First Application

### 1. Basic Component

Create your first component using Dynamic Framework:

```tsx
// src/components/WelcomeBanner.tsx
import { DCard, DButton } from '@dynamic-framework/ui-react';

type Props = {
  userName: string;
};

export default function WelcomeBanner({ userName }: Props) {
  return (
    <DCard className="welcome-banner">
      <DCard.Body>
        <h2>Welcome, {userName}</h2>
        <p>Manage your finances simply and securely</p>
        <DButton
          color="primary"
          size="lg"
          text="View my accounts"
        />
      </DCard.Body>
    </DCard>
  );
}
```

### 2. Dashboard View

Create a complete view using multiple components:

```tsx
// src/views/Dashboard.tsx
import React, { useState, useEffect } from 'react';
import {
  DCard,
  DListGroup,
  DListGroupItem,
  DButton,
  DCurrencyText
} from '@dynamic-framework/ui-react';

const Dashboard = () => {
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Load data from your API
    fetchAccounts();
    fetchTransactions();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="mb-4">Welcome, John Doe</h1>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-8">
          <h3>My Accounts</h3>
          {accounts.map(account => (
            <DCard key={account.id} className="mb-3">
              <DCard.Body className="d-flex justify-content-between align-items-center">
                <div>
                  <h5>{account.name}</h5>
                  <small className="text-muted">{account.number}</small>
                </div>
                <DCurrencyText value={account.balance} className="fs-4" />
              </DCard.Body>
            </DCard>
          ))}
        </div>

        <div className="col-md-4">
          <DCard>
            <DCard.Header>Quick Actions</DCard.Header>
            <DCard.Body>
              <div className="d-grid gap-2">
                <DButton
                  color="primary"
                  text="Transfer"
                  iconStart="ArrowRightLeft"
                />
                <DButton
                  color="secondary"
                  text="Pay"
                  iconStart="CreditCard"
                />
              </div>
            </DCard.Body>
          </DCard>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <h3>Recent Transactions</h3>
          <DListGroup>
            {transactions.map(tx => (
              <DListGroupItem key={tx.id}>
                {tx.description} - <DCurrencyText value={tx.amount} />
              </DListGroupItem>
            ))}
          </DListGroup>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
```

### 3. Theme Configuration

Customize your application using CSS variables and DContextProvider:

```tsx
// src/App.tsx
import React from 'react';
import { DContextProvider } from '@dynamic-framework/ui-react';
import Dashboard from './views/Dashboard';

// Import Dynamic UI styles
import '@dynamic-framework/ui-react/dist/css/dynamic-ui.css';

// Your custom styles can override CSS variables
import './styles/custom.css';

function App() {
  return (
    <DContextProvider>
      <Dashboard />
    </DContextProvider>
  );
}

export default App;
```

```css
/* src/styles/custom.css */
:root {
  --bs-primary: #1E3A5F;
  --bs-secondary: #4A90E2;
  --bs-success: #52C41A;
  --bs-danger: #F5222D;
  --bs-warning: #FAAD14;
  --bs-info: #1890FF;
  --bs-body-font-family: "Roboto", "Helvetica", "Arial", sans-serif;
}
```

## Connect with APIs

Dynamic widgets use **TanStack Query** for server state management and **axios** for HTTP requests.

### 1. API Client

```typescript
// src/services/api/client.ts
import axios from 'axios';
import { API_BASE_URL } from '../../config/widgetConfig';

export const api = axios.create({
  baseURL: API_BASE_URL || import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Logging interceptor for development
api.interceptors.response.use(
  (response) => {
    if (import.meta.env.DEV) {
      console.log(`[API] ${response.config.method?.toUpperCase()} ${response.config.url}`, response.data);
    }
    return response;
  },
  (error) => {
    if (import.meta.env.DEV) {
      console.error('[API Error]', error.response?.data || error.message);
    }
    return Promise.reject(error);
  },
);
```

### 2. Repository Pattern

```typescript
// src/services/repositories/accountRepository.ts
import { api } from '../api/client';
import type { Account } from '../../types';

export async function getAccounts(signal?: AbortSignal): Promise<Account[]> {
  const response = await api.get('/accounts', { signal });
  return response.data;
}

export async function getAccountById(id: string, signal?: AbortSignal): Promise<Account> {
  const response = await api.get(`/accounts/${id}`, { signal });
  return response.data;
}
```

### 3. TanStack Query Hooks

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

**Usage in components:**

```tsx
function AccountList() {
  const { data: accounts, isLoading, error } = useAccounts();

  if (isLoading) {
    return (
      <div className="placeholder-glow">
        <span className="placeholder col-12 mb-2"></span>
        <span className="placeholder col-12 mb-2"></span>
        <span className="placeholder col-8"></span>
      </div>
    );
  }
  if (error) return <DAlert color="danger">{error.message}</DAlert>;

  return (
    <DListGroup>
      {accounts?.map(account => (
        <DListGroup.Item key={account.id}>
          {account.name}
        </DListGroup.Item>
      ))}
    </DListGroup>
  );
}
```

### 4. Mutations

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
    },
  });
}
```

For detailed patterns, see [API Integration](../development/api-integration.html).

## Development Scripts

In your `package.json`, you'll have these useful scripts:

```json
{
  "scripts": {
    "start": "vite",
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest",
    "lint": "eslint .",
    "push": "npm run build && npx @modyo/cli@latest push"
  }
}
```

## Deploy to Modyo

### 1. Configure Environment

Create a `.env` file with your Modyo credentials:

```bash
# .env (required variables)
MODYO_ACCOUNT_URL=https://your-account.modyo.cloud
MODYO_TOKEN=your-api-token
# Use either MODYO_SITE_HOST or MODYO_SITE_ID (not both)
MODYO_SITE_HOST=your-site-host
# MODYO_SITE_ID=123  # Preferred: works with site stages
```

To get your API token, go to **Modyo Admin > Settings > API Access > Access Tokens**.

See the [Modyo CLI documentation](/en/platform/tools/cli.html) for all available environment variables.

:::warning
Never commit the `.env` file with real tokens. Add it to `.gitignore`.
:::

### 2. Build and Deploy

```bash
# Build and push to Modyo
npm run push

# Or with auto-publish
npm run build && npx @modyo/cli@latest push --publish
```

For all CLI options, see the [Modyo CLI documentation](/en/platform/tools/cli.html).

## Best Practices

### 1. State Management
- Use **TanStack Query** for server state (API data)
- Use **Zustand** for UI state (selections, filters, modals)
- Never use `useState` + `useEffect` for data fetching

### 2. Data States
- Always handle **loading**, **error**, and **empty** states
- Use `ErrorBoundary` to prevent white screens on errors
- Provide retry actions for failed requests

### 3. Code Organization
- Keep components small and focused
- Use repositories for API calls with `AbortSignal` support
- Separate business logic from UI components

### 4. Testing
- Write tests for custom hooks in `services/hooks/`
- Use **Vitest** and React Testing Library
- Test loading, error, and success scenarios

## Additional Resources

- **Storybook**: [react.dynamicframework.dev](https://react.dynamicframework.dev)
- **Support**: [support.modyo.com](https://support.modyo.com)

## Next Steps

Now that you have your application running:

1. Explore the [component catalog](../development/components.html)
2. Learn about [theme customization](../customization/theming.html)
3. Implement [API integrations](../development/api-integration.html)

Congratulations! You're now ready to build extraordinary financial experiences with Dynamic Framework.