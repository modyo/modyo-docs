---
search: true
---

# API Integration

Learn how to connect your Dynamic Framework application with backend services using modern patterns and best practices.

## Recommended Stack

| Library | Purpose | Version |
|---------|---------|---------|
| **Axios** | HTTP client for API calls | ^1.x |
| **TanStack Query** | Server state management (caching, sync, updates) | ^5.x |

:::tip Why TanStack Query?
TanStack Query handles caching, background updates, stale data, and loading/error states automatically. Combined with Axios for the HTTP layer, this provides a robust data fetching solution without manual `useState` + `useEffect` patterns.
:::

## Initial Setup

### HTTP Client (Axios)

Configure Axios as your HTTP client:

```typescript
// src/services/api/client.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized - redirect to login or refresh token
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
```

### TanStack Query Setup

Configure the QueryClient provider in your app:

```tsx
// src/providers/QueryProvider.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});

interface QueryProviderProps {
  children: ReactNode;
}

export function QueryProvider({ children }: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
```

## Liquid Environment Pattern (Modyo Deployment)

When deploying React micro frontends to Modyo, you often need to pass runtime configuration from the platform to your application. This is achieved through Modyo's Liquid templating engine.

### Why Use Liquid for Configuration?

- **Runtime configuration**: Values are injected at page render time, not build time
- **Environment-specific**: Different values per Modyo site/environment without rebuilding
- **Platform integration**: Access to Modyo user data, site settings, and custom variables
- **Security**: Sensitive values stay server-side and are injected only when needed

### Basic Pattern

In your Modyo page, wrap your widget with a configuration script:

::: v-pre
```html
<script>
  window.widgetConfig = {
    // API Configuration
    apiBaseUrl: '{{site.variables.api_base_url}}',
    apiKey: '{{site.variables.api_key}}',

    // Environment
    environment: '{{site.variables.environment | default: "production"}}',

    // Feature flags
    features: {
      enableTransfers: {{site.variables.enable_transfers | default: true}},
      enableInvestments: {{site.variables.enable_investments | default: false}},
    },

    // User context (when authenticated)
    {% if user %}
    user: {
      id: '{{user.id}}',
      email: '{{user.email}}',
      name: '{{user.name}}',
    },
    {% endif %}

    // Locale
    locale: '{{site.language}}',
  };
</script>

<!-- Your widget container -->
<div id="dynamic-widget"></div>
```
:::

### Accessing Configuration in React

Create a configuration service to access these values safely:

```typescript
// src/config/widgetConfig.ts

interface WidgetConfig {
  apiBaseUrl: string;
  apiKey: string;
  environment: 'development' | 'staging' | 'production';
  features: {
    enableTransfers: boolean;
    enableInvestments: boolean;
  };
  user?: {
    id: string;
    email: string;
    name: string;
  };
  locale: string;
}

// Default configuration for local development
const defaultConfig: WidgetConfig = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  apiKey: 'dev-key',
  environment: 'development',
  features: {
    enableTransfers: true,
    enableInvestments: true,
  },
  locale: 'en',
};

export function getWidgetConfig(): WidgetConfig {
  const windowConfig = (window as Window & { widgetConfig?: Partial<WidgetConfig> }).widgetConfig;

  if (windowConfig) {
    return {
      ...defaultConfig,
      ...windowConfig,
      features: {
        ...defaultConfig.features,
        ...windowConfig.features,
      },
    };
  }

  return defaultConfig;
}

export const widgetConfig = getWidgetConfig();
```

### Using Configuration in Components

```tsx
import { widgetConfig } from '@/config/widgetConfig';
import { DButton } from '@dynamic-framework/ui-react';

function TransferButton() {
  if (!widgetConfig.features.enableTransfers) {
    return null;
  }

  return <DButton text="Make Transfer" />;
}
```

### Available Liquid Variables

::: v-pre
| Variable | Description | Example |
|----------|-------------|---------|
| `{{site.variables.X}}` | Custom site variables | `{{site.variables.api_url}}` |
| `{{site.language}}` | Current site language | `en`, `es` |
| `{{site.name}}` | Site name | `My Bank` |
| `{{user.id}}` | Authenticated user ID | `12345` |
| `{{user.email}}` | User email | `user@example.com` |
| `{{user.name}}` | User display name | `John Doe` |
| `{{user.access_token}}` | OAuth access token | (JWT string) |
:::

:::warning Security Considerations
- Never expose sensitive API keys in client-side JavaScript
- Use <code v-pre>{{user.access_token}}</code> only over HTTPS
- Validate all Liquid-injected values in your application
- Consider using Modyo's backend proxy for sensitive operations
:::

### TypeScript Integration

For full type safety, declare the global window config:

```typescript
// src/types/global.d.ts
declare global {
  interface Window {
    widgetConfig?: {
      apiBaseUrl: string;
      apiKey: string;
      environment: string;
      features: Record<string, boolean>;
      user?: {
        id: string;
        email: string;
        name: string;
      };
      locale: string;
    };
  }
}

export {};
```

## Repository Pattern

Use the repository pattern to encapsulate API calls with proper TypeScript types and AbortSignal support for cancellation.

### Account Repository

```typescript
// src/repositories/accountRepository.ts
import apiClient from '@/services/api/client';

export interface Account {
  id: string;
  name: string;
  balance: number;
  currency: string;
  type: 'checking' | 'savings';
}

export async function getAccounts(signal?: AbortSignal): Promise<Account[]> {
  const response = await apiClient.get<Account[]>('/accounts', { signal });
  return response.data;
}

export async function getAccountById(
  accountId: string,
  signal?: AbortSignal
): Promise<Account> {
  const response = await apiClient.get<Account>(`/accounts/${accountId}`, { signal });
  return response.data;
}

export async function getAccountBalance(
  accountId: string,
  signal?: AbortSignal
): Promise<{ balance: number; currency: string }> {
  const response = await apiClient.get(`/accounts/${accountId}/balance`, { signal });
  return response.data;
}
```

### Transfer Repository

```typescript
// src/repositories/transferRepository.ts
import apiClient from '@/services/api/client';

export interface Transfer {
  id: string;
  fromAccountId: string;
  toAccountId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed';
  createdAt: string;
}

export interface CreateTransferRequest {
  fromAccountId: string;
  toAccountId: string;
  amount: number;
  description?: string;
}

export async function createTransfer(
  data: CreateTransferRequest,
  signal?: AbortSignal
): Promise<Transfer> {
  const response = await apiClient.post<Transfer>('/transfers', data, { signal });
  return response.data;
}

export async function getTransferHistory(
  params?: { limit?: number; offset?: number },
  signal?: AbortSignal
): Promise<Transfer[]> {
  const response = await apiClient.get<Transfer[]>('/transfers', { params, signal });
  return response.data;
}
```

## TanStack Query Hooks

Create hooks that use TanStack Query v5 with the repository functions.

:::warning These are patterns, not library exports
The hooks below are **examples of how to implement** data fetching in your application. They are NOT exported from `@dynamic-framework/ui-react`. You need to create them in your project.
:::

### useAccounts Hook

```typescript
// src/hooks/useAccounts.ts
import { useQuery } from '@tanstack/react-query';
import { getAccounts, getAccountById } from '@/repositories/accountRepository';

export function useAccounts() {
  return useQuery({
    queryKey: ['accounts'],
    queryFn: ({ signal }) => getAccounts(signal),
  });
}

export function useAccount(accountId: string) {
  return useQuery({
    queryKey: ['accounts', accountId],
    queryFn: ({ signal }) => getAccountById(accountId, signal),
    enabled: Boolean(accountId),
  });
}
```

### useTransfers Hook

```typescript
// src/hooks/useTransfers.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getTransferHistory,
  createTransfer,
  type CreateTransferRequest,
} from '@/repositories/transferRepository';

export function useTransferHistory() {
  return useQuery({
    queryKey: ['transfers'],
    queryFn: ({ signal }) => getTransferHistory(undefined, signal),
  });
}

export function useCreateTransfer() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateTransferRequest) => createTransfer(data),
    onSuccess: () => {
      // Invalidate related queries to refetch fresh data
      queryClient.invalidateQueries({ queryKey: ['accounts'] });
      queryClient.invalidateQueries({ queryKey: ['transfers'] });
    },
  });
}
```

### Usage in Components

```tsx
// src/components/AccountList.tsx
import { useAccounts } from '@/hooks/useAccounts';
import { DCard, DCurrencyText, DAlert } from '@dynamic-framework/ui-react';

export function AccountList() {
  const { data: accounts, isLoading, error } = useAccounts();

  if (isLoading) {
    return <div>Loading accounts...</div>;
  }

  if (error) {
    return (
      <DAlert type="error">
        Failed to load accounts: {error.message}
      </DAlert>
    );
  }

  return (
    <div className="d-flex flex-column gap-3">
      {accounts?.map((account) => (
        <DCard key={account.id}>
          <DCard.Body>
            <h5>{account.name}</h5>
            <DCurrencyText value={account.balance} />
          </DCard.Body>
        </DCard>
      ))}
    </div>
  );
}
```

## Authentication

### OAuth 2.0 with oidc-client-ts

```typescript
// src/services/auth/authService.ts
import { UserManager, WebStorageStateStore, type User } from 'oidc-client-ts';

const userManager = new UserManager({
  authority: import.meta.env.VITE_AUTH_URL,
  client_id: import.meta.env.VITE_CLIENT_ID,
  redirect_uri: `${window.location.origin}/callback`,
  response_type: 'code',
  scope: 'openid profile email',
  post_logout_redirect_uri: window.location.origin,
  userStore: new WebStorageStateStore({ store: window.sessionStorage }),
  automaticSilentRenew: true,
});

export async function login(): Promise<void> {
  await userManager.signinRedirect();
}

export async function handleCallback(): Promise<User> {
  return userManager.signinRedirectCallback();
}

export async function logout(): Promise<void> {
  await userManager.signoutRedirect();
}

export async function getUser(): Promise<User | null> {
  return userManager.getUser();
}

export async function getAccessToken(): Promise<string | null> {
  const user = await getUser();
  return user?.access_token ?? null;
}
```

### Auth Hook

```typescript
// src/hooks/useAuth.ts
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getUser, login, logout } from '@/services/auth/authService';

export function useAuth() {
  const queryClient = useQueryClient();

  const { data: user, isLoading } = useQuery({
    queryKey: ['auth', 'user'],
    queryFn: getUser,
    staleTime: Infinity,
  });

  const handleLogin = async () => {
    await login();
  };

  const handleLogout = async () => {
    await logout();
    queryClient.clear();
  };

  return {
    user,
    isLoading,
    isAuthenticated: Boolean(user),
    login: handleLogin,
    logout: handleLogout,
  };
}
```

## Error Handling

### Centralized Error Handler

```typescript
// src/services/api/errorHandler.ts
import type { AxiosError } from 'axios';

interface ApiError {
  message: string;
  code?: string;
  details?: Record<string, string[]>;
}

export function handleApiError(error: AxiosError<ApiError>): string {
  if (!error.response) {
    return 'Network error. Please check your connection.';
  }

  const { status, data } = error.response;

  switch (status) {
    case 400:
      return data?.message || 'Invalid request. Please check your input.';
    case 401:
      return 'Session expired. Please log in again.';
    case 403:
      return 'You do not have permission to perform this action.';
    case 404:
      return 'The requested resource was not found.';
    case 429:
      return 'Too many requests. Please try again later.';
    case 500:
    default:
      return 'An unexpected error occurred. Please try again.';
  }
}
```

### Error Boundary with TanStack Query

```tsx
// src/components/QueryErrorBoundary.tsx
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { DButton, DAlert } from '@dynamic-framework/ui-react';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function QueryErrorBoundary({ children }: Props) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ error, resetErrorBoundary }) => (
            <DAlert type="error">
              <p>{error.message}</p>
              <DButton
                text="Try again"
                variant="outline"
                onClick={resetErrorBoundary}
              />
            </DAlert>
          )}
        >
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}
```

## API Testing with MSW

Use Mock Service Worker (MSW) v2 for API mocking during development and testing.

### Setup Handlers

```typescript
// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw';
import type { Account } from '@/repositories/accountRepository';

const mockAccounts: Account[] = [
  {
    id: '1',
    name: 'Checking Account',
    balance: 125430.0,
    currency: 'USD',
    type: 'checking',
  },
  {
    id: '2',
    name: 'Savings Account',
    balance: 45200.0,
    currency: 'USD',
    type: 'savings',
  },
];

export const handlers = [
  http.get('/api/accounts', () => {
    return HttpResponse.json(mockAccounts);
  }),

  http.get('/api/accounts/:id', ({ params }) => {
    const account = mockAccounts.find((a) => a.id === params.id);
    if (!account) {
      return new HttpResponse(null, { status: 404 });
    }
    return HttpResponse.json(account);
  }),

  http.post('/api/transfers', async ({ request }) => {
    const body = await request.json() as { amount: number };

    if (body.amount > 100000) {
      return HttpResponse.json(
        { message: 'Amount exceeds maximum limit' },
        { status: 400 }
      );
    }

    return HttpResponse.json(
      {
        id: 'transfer-123',
        status: 'completed',
        ...body,
      },
      { status: 201 }
    );
  }),
];
```

### Browser Setup

```typescript
// src/mocks/browser.ts
import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);
```

### Initialize in Development

```typescript
// src/main.tsx
async function enableMocking() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser');
    return worker.start({ onUnhandledRequest: 'bypass' });
  }
}

enableMocking().then(() => {
  // Render your app
});
```

## Best Practices

### 1. State Management
- Use **TanStack Query** for server state (API data)
- Use **Zustand** for UI state (filters, selections, modals)
- Never mix server state with UI state

### 2. Security
- Store tokens in `sessionStorage` or httpOnly cookies, not `localStorage`
- Always validate inputs on both client and server
- Use HTTPS in production

### 3. Performance
- Use query keys that reflect the data hierarchy
- Implement pagination for large lists
- Use `enabled` option to prevent unnecessary requests

### 4. TypeScript
- Define interfaces for all API responses
- Use generics with Axios for type-safe responses
- Export types from repositories for reuse

## Resources

- [Axios Documentation](https://axios-http.com)
- [TanStack Query v5 Docs](https://tanstack.com/query/latest)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [MSW v2 Documentation](https://mswjs.io)
- [oidc-client-ts](https://github.com/authts/oidc-client-ts)
