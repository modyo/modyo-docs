---
search: true
---

# Integración con APIs

Aprende cómo conectar tu aplicación Dynamic Framework con servicios backend, manejar autenticación, y optimizar las llamadas a APIs.

## Stack Recomendado

Dynamic Framework recomienda:

| Librería | Propósito | Versión |
|----------|-----------|---------|
| **Axios** | Cliente HTTP para llamadas API | ^1.x |
| **TanStack Query** | Gestión de estado del servidor (caché, sync, updates) | ^5.x |

:::tip ¿Por qué TanStack Query?
TanStack Query (anteriormente React Query) maneja caché, actualizaciones en background, datos obsoletos, y estados de loading/error automáticamente. Combinado con Axios para la capa HTTP, proporciona una solución robusta de data fetching.
:::

## Configuración Inicial

### Cliente HTTP (Axios)

Configura Axios como tu cliente HTTP:

```javascript
// src/services/api/client.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://api.mibancodigital.com',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Agregar token de autenticación
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Agregar headers personalizados
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
    // Procesar respuesta exitosa
    return response.data;
  },
  (error) => {
    // Manejo centralizado de errores
    if (error.response?.status === 401) {
      // Token expirado o inválido
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

## Autenticación

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

## Servicios de Datos

### Servicio de Cuentas

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

### Servicio de Transferencias

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

## Hooks Personalizados (Patrones de Implementación)

:::warning Estos son patrones, no exports de la librería
Los hooks a continuación son **ejemplos de cómo implementar** data fetching en tu aplicación. NO se exportan desde `@dynamic-framework/ui-react`. Necesitas crearlos en tu proyecto.
:::

### useApi Hook (Patrón Básico)

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

### useAccounts Hook (Patrón TanStack Query)

```javascript
// src/hooks/useAccounts.js
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import accountService from '../services/accounts/accountService';

export const useAccounts = () => {
  return useQuery(
    'accounts',
    () => accountService.getAccounts(),
    {
      staleTime: 5 * 60 * 1000, // 5 minutos
      cacheTime: 10 * 60 * 1000, // 10 minutos
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
      refetchInterval: 30000, // Actualizar cada 30 segundos
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

## Manejo de Errores

### Error Handler Global

```javascript
// src/services/api/errorHandler.js
class ErrorHandler {
  constructor() {
    this.errorHandlers = new Map();
    this.setupDefaultHandlers();
  }

  setupDefaultHandlers() {
    // Errores de red
    this.registerHandler('NetworkError', (error) => {
      console.error('Network error:', error);
      this.showNotification('Error de conexión. Por favor, verifica tu internet.');
    });

    // Errores de validación
    this.registerHandler('ValidationError', (error) => {
      const messages = error.response?.data?.errors || [];
      messages.forEach(msg => this.showNotification(msg, 'warning'));
    });

    // Errores de servidor
    this.registerHandler('ServerError', (error) => {
      console.error('Server error:', error);
      this.showNotification('Error del servidor. Por favor, intenta más tarde.');
    });

    // Rate limiting
    this.registerHandler('RateLimitError', (error) => {
      const retryAfter = error.response?.headers['retry-after'];
      this.showNotification(`Demasiadas solicitudes. Intenta en ${retryAfter} segundos.`);
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
    this.showNotification('Ha ocurrido un error inesperado.');
  }

  showNotification(message, type = 'error') {
    // Implementar según tu sistema de notificaciones
    console.log(`[${type}] ${message}`);
  }
}

export default new ErrorHandler();
```

## Optimización y Caché

### TanStack Query Setup

```javascript
// src/providers/QueryProvider.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutos
      cacheTime: 10 * 60 * 1000, // 10 minutos
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

### Caché con Service Worker

```javascript
// src/serviceWorker/apiCache.js
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Cachear solo llamadas GET a la API
  if (request.method === 'GET' && url.pathname.startsWith('/api/')) {
    event.respondWith(
      caches.open('api-cache-v1').then(async (cache) => {
        const cachedResponse = await cache.match(request);
        
        if (cachedResponse) {
          // Retornar del caché y actualizar en background
          const fetchPromise = fetch(request).then((networkResponse) => {
            cache.put(request, networkResponse.clone());
            return networkResponse;
          });
          
          return cachedResponse;
        }
        
        // Si no está en caché, hacer fetch
        const networkResponse = await fetch(request);
        cache.put(request, networkResponse.clone());
        return networkResponse;
      })
    );
  }
});
```

## WebSockets y Tiempo Real

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

## Testing de APIs

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
          name: 'Cuenta Corriente',
          balance: 125430.00,
          currency: 'USD',
        },
        {
          id: '2',
          name: 'Cuenta de Ahorros',
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

## Mejores Prácticas

### 1. Seguridad
- Nunca almacenes tokens en localStorage para aplicaciones sensibles
- Usa httpOnly cookies cuando sea posible
- Implementa CSRF protection
- Valida todos los inputs en el cliente y servidor

### 2. Performance
- Implementa paginación para listas grandes
- Usa debounce para búsquedas
- Cachea respuestas cuando sea apropiado
- Implementa lazy loading de datos

### 3. Manejo de Estado
- Usa **TanStack Query** para estado del servidor (datos de API)
- Usa **Zustand** para estado de UI (filtros, selecciones, modales)
- Mantén React Context para estado específico del framework (DContext)
- Nunca mezcles estado del servidor con estado de UI

### 4. Monitoreo
- Registra todas las llamadas API fallidas
- Implementa métricas de performance
- Usa correlation IDs para tracking

## Recursos

- [Documentación de Axios](https://axios-http.com)
- [TanStack Query Docs](https://tanstack.com/query/latest)
- [Documentación de Zustand](https://zustand-demo.pmnd.rs/)
- [Socket.io Guide](https://socket.io/docs)
- [MSW Documentation](https://mswjs.io)