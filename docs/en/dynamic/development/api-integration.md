---
search: true
---

# API Integration

Learn how to connect your Dynamic Framework application with backend services, handle authentication, and optimize API calls.

## Recommended Stack

Dynamic Framework recommends:

| Library | Purpose | Version |
|---------|---------|---------|
| **Axios** | HTTP client for API calls | ^1.x |
| **TanStack Query** | Server state management (caching, sync, updates) | ^5.x |

:::tip Why TanStack Query?
TanStack Query (formerly React Query) handles caching, background updates, stale data, and loading/error states automatically. Combined with Axios for the HTTP layer, this provides a robust data fetching solution.
:::

## Initial Setup

### HTTP Client (Axios)

Configure Axios as your HTTP client:

```javascript
// src/services/api/client.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://api.mydigitalbank.com',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add authentication token
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Add custom headers
    config.headers['X-Request-ID'] = generateRequestId();
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    // Process successful response
    return response.data;
  },
  (error) => {
    // Centralized error handling
    if (error.response?.status === 401) {
      // Expired or invalid token
      handleUnauthorized();
    }
    
    if (error.response?.status === 429) {
      // Rate limiting
      handleRateLimiting(error.response);
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;
```

## Authentication

### OAuth 2.0 / OpenID Connect

```javascript
// src/services/auth/authService.js
import { UserManager, WebStorageStateStore } from 'oidc-client';

class AuthService {
  constructor() {
    this.userManager = new UserManager({
      authority: process.env.REACT_APP_AUTH_URL,
      client_id: process.env.REACT_APP_CLIENT_ID,
      redirect_uri: `${window.location.origin}/callback`,
      response_type: 'code',
      scope: 'openid profile email api',
      post_logout_redirect_uri: window.location.origin,
      userStore: new WebStorageStateStore({ store: window.localStorage }),
      automaticSilentRenew: true,
      silent_redirect_uri: `${window.location.origin}/silent-renew.html`,
    });
  }

  async login() {
    return this.userManager.signinRedirect();
  }

  async handleCallback() {
    return this.userManager.signinRedirectCallback();
  }

  async logout() {
    return this.userManager.signoutRedirect();
  }

  async getUser() {
    return this.userManager.getUser();
  }

  async getAccessToken() {
    const user = await this.getUser();
    return user?.access_token;
  }

  async refreshToken() {
    return this.userManager.signinSilent();
  }
}

export default new AuthService();
```

### JWT Token Management

```javascript
// src/services/auth/tokenManager.js
class TokenManager {
  constructor() {
    this.tokenKey = 'auth_token';
    this.refreshTokenKey = 'refresh_token';
    this.expiryKey = 'token_expiry';
  }

  setTokens(accessToken, refreshToken, expiresIn) {
    localStorage.setItem(this.tokenKey, accessToken);
    localStorage.setItem(this.refreshTokenKey, refreshToken);
    
    const expiry = new Date().getTime() + (expiresIn * 1000);
    localStorage.setItem(this.expiryKey, expiry);
  }

  getAccessToken() {
    return localStorage.getItem(this.tokenKey);
  }

  getRefreshToken() {
    return localStorage.getItem(this.refreshTokenKey);
  }

  isTokenExpired() {
    const expiry = localStorage.getItem(this.expiryKey);
    if (!expiry) return true;
    
    return new Date().getTime() > parseInt(expiry);
  }

  async refreshAccessToken() {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await fetch('/api/auth/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) {
      throw new Error('Failed to refresh token');
    }

    const data = await response.json();
    this.setTokens(data.accessToken, data.refreshToken, data.expiresIn);
    
    return data.accessToken;
  }

  clearTokens() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.refreshTokenKey);
    localStorage.removeItem(this.expiryKey);
  }
}

export default new TokenManager();
```

## Data Services

### Account Service

```javascript
// src/services/accounts/accountService.js
import apiClient from '../api/client';

class AccountService {
  async getAccounts() {
    return apiClient.get('/accounts');
  }

  async getAccountById(accountId) {
    return apiClient.get(`/accounts/${accountId}`);
  }

  async getAccountBalance(accountId) {
    return apiClient.get(`/accounts/${accountId}/balance`);
  }

  async getAccountTransactions(accountId, params = {}) {
    return apiClient.get(`/accounts/${accountId}/transactions`, { params });
  }

  async updateAccount(accountId, data) {
    return apiClient.put(`/accounts/${accountId}`, data);
  }

  async closeAccount(accountId, reason) {
    return apiClient.post(`/accounts/${accountId}/close`, { reason });
  }
}

export default new AccountService();
```

### Transfer Service

```javascript
// src/services/transfers/transferService.js
import apiClient from '../api/client';

class TransferService {
  async validateTransfer(data) {
    return apiClient.post('/transfers/validate', data);
  }

  async createTransfer(data) {
    return apiClient.post('/transfers', data);
  }

  async getTransferStatus(transferId) {
    return apiClient.get(`/transfers/${transferId}/status`);
  }

  async getTransferHistory(params = {}) {
    return apiClient.get('/transfers/history', { params });
  }

  async cancelTransfer(transferId, reason) {
    return apiClient.post(`/transfers/${transferId}/cancel`, { reason });
  }

  async scheduleTransfer(data) {
    return apiClient.post('/transfers/schedule', data);
  }
}

export default new TransferService();
```

## Custom Hooks (Implementation Patterns)

:::warning These are patterns, not library exports
The hooks below are **examples of how to implement** data fetching in your application. They are NOT exported from `@dynamic-framework/ui-react`. You need to create them in your project.
:::

### useApi Hook (Basic Pattern)

```javascript
// src/hooks/useApi.js
import { useState, useEffect, useCallback } from 'react';

export const useApi = (apiFunction, immediate = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);

  const execute = useCallback(async (...params) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await apiFunction(...params);
      setData(result);
      return result;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [apiFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { data, loading, error, execute, refetch: execute };
};
```

### useAccounts Hook (TanStack Query Pattern)

```javascript
// src/hooks/useAccounts.js
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import accountService from '../services/accounts/accountService';

export const useAccounts = () => {
  return useQuery(
    'accounts',
    () => accountService.getAccounts(),
    {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      retry: 3,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
    }
  );
};

export const useAccountBalance = (accountId) => {
  return useQuery(
    ['account-balance', accountId],
    () => accountService.getAccountBalance(accountId),
    {
      enabled: !!accountId,
      refetchInterval: 30000, // Update every 30 seconds
    }
  );
};

export const useUpdateAccount = () => {
  const queryClient = useQueryClient();
  
  return useMutation(
    ({ accountId, data }) => accountService.updateAccount(accountId, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('accounts');
      },
    }
  );
};
```

## Error Handling

### Global Error Handler

```javascript
// src/services/api/errorHandler.js
class ErrorHandler {
  constructor() {
    this.errorHandlers = new Map();
    this.setupDefaultHandlers();
  }

  setupDefaultHandlers() {
    // Network errors
    this.registerHandler('NetworkError', (error) => {
      console.error('Network error:', error);
      this.showNotification('Connection error. Please check your internet.');
    });

    // Validation errors
    this.registerHandler('ValidationError', (error) => {
      const messages = error.response?.data?.errors || [];
      messages.forEach(msg => this.showNotification(msg, 'warning'));
    });

    // Server errors
    this.registerHandler('ServerError', (error) => {
      console.error('Server error:', error);
      this.showNotification('Server error. Please try again later.');
    });

    // Rate limiting
    this.registerHandler('RateLimitError', (error) => {
      const retryAfter = error.response?.headers['retry-after'];
      this.showNotification(`Too many requests. Try again in ${retryAfter} seconds.`);
    });
  }

  registerHandler(errorType, handler) {
    this.errorHandlers.set(errorType, handler);
  }

  handle(error) {
    const errorType = this.getErrorType(error);
    const handler = this.errorHandlers.get(errorType);
    
    if (handler) {
      handler(error);
    } else {
      this.handleUnknownError(error);
    }
  }

  getErrorType(error) {
    if (!error.response) return 'NetworkError';
    
    const status = error.response.status;
    if (status === 400) return 'ValidationError';
    if (status === 429) return 'RateLimitError';
    if (status >= 500) return 'ServerError';
    
    return 'UnknownError';
  }

  handleUnknownError(error) {
    console.error('Unknown error:', error);
    this.showNotification('An unexpected error has occurred.');
  }

  showNotification(message, type = 'error') {
    // Implement according to your notification system
    console.log(`[${type}] ${message}`);
  }
}

export default new ErrorHandler();
```

## Optimization and Caching

### TanStack Query Setup

```javascript
// src/providers/QueryProvider.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      retry: 3,
      refetchOnWindowFocus: false,
      refetchOnReconnect: 'always',
    },
    mutations: {
      retry: 1,
    },
  },
});
```

### Cache with Service Worker

```javascript
// src/serviceWorker/apiCache.js
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Cache only GET calls to the API
  if (request.method === 'GET' && url.pathname.startsWith('/api/')) {
    event.respondWith(
      caches.open('api-cache-v1').then(async (cache) => {
        const cachedResponse = await cache.match(request);
        
        if (cachedResponse) {
          // Return from cache and update in background
          const fetchPromise = fetch(request).then((networkResponse) => {
            cache.put(request, networkResponse.clone());
            return networkResponse;
          });
          
          return cachedResponse;
        }
        
        // If not in cache, fetch
        const networkResponse = await fetch(request);
        cache.put(request, networkResponse.clone());
        return networkResponse;
      })
    );
  }
});
```

## WebSockets and Real Time

### Socket.io Integration

```javascript
// src/services/realtime/socketService.js
import io from 'socket.io-client';

class SocketService {
  constructor() {
    this.socket = null;
    this.listeners = new Map();
  }

  connect(token) {
    this.socket = io(process.env.REACT_APP_SOCKET_URL, {
      auth: { token },
      transports: ['websocket'],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    this.socket.on('connect', () => {
      console.log('Socket connected');
      this.emit('subscribe', { channels: ['accounts', 'transactions'] });
    });

    this.socket.on('disconnect', (reason) => {
      console.log('Socket disconnected:', reason);
    });

    this.setupEventListeners();
  }

  setupEventListeners() {
    // Balance updates
    this.on('balance:update', (data) => {
      this.notifyListeners('balanceUpdate', data);
    });

    // Transaction notifications
    this.on('transaction:new', (data) => {
      this.notifyListeners('newTransaction', data);
    });

    // System alerts
    this.on('alert:system', (data) => {
      this.notifyListeners('systemAlert', data);
    });
  }

  on(event, callback) {
    if (this.socket) {
      this.socket.on(event, callback);
    }
  }

  emit(event, data) {
    if (this.socket) {
      this.socket.emit(event, data);
    }
  }

  subscribe(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event).add(callback);
  }

  unsubscribe(event, callback) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).delete(callback);
    }
  }

  notifyListeners(event, data) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach(callback => callback(data));
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }
}

export default new SocketService();
```

## API Testing

### Mock Service Worker

```javascript
// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  rest.get('/api/accounts', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: '1',
          name: 'Checking Account',
          balance: 125430.00,
          currency: 'USD',
        },
        {
          id: '2',
          name: 'Savings Account',
          balance: 45200.00,
          currency: 'USD',
        },
      ])
    );
  }),

  rest.post('/api/transfers', (req, res, ctx) => {
    const { amount } = req.body;
    
    if (amount > 100000) {
      return res(
        ctx.status(400),
        ctx.json({
          error: 'Amount exceeds maximum limit',
        })
      );
    }
    
    return res(
      ctx.status(201),
      ctx.json({
        id: 'transfer-123',
        status: 'completed',
        amount,
      })
    );
  }),
];
```

## Best Practices

### 1. Security
- Never store tokens in localStorage for sensitive applications
- Use httpOnly cookies when possible
- Implement CSRF protection
- Validate all inputs on client and server

### 2. Performance
- Implement pagination for large lists
- Use debounce for searches
- Cache responses when appropriate
- Implement lazy loading of data

### 3. State Management
- Use **TanStack Query** for server state (API data)
- Use **Zustand** for UI state (filters, selections, modals)
- Keep React Context for framework-specific state (DContext)
- Never mix server state with UI state

### 4. Monitoring
- Log all failed API calls
- Implement performance metrics
- Use correlation IDs for tracking

## Resources

- [Axios Documentation](https://axios-http.com)
- [TanStack Query Docs](https://tanstack.com/query/latest)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [Socket.io Guide](https://socket.io/docs)
- [MSW Documentation](https://mswjs.io)