---
search: true
---

# Integración con APIs

Aprende cómo conectar tu aplicación Dynamic Framework con servicios backend usando patrones modernos y mejores prácticas.

## Stack Recomendado

| Librería | Propósito | Versión |
|----------|-----------|---------|
| **Axios** | Cliente HTTP para llamadas API | ^1.x |
| **TanStack Query** | Gestión de estado del servidor (caché, sync, updates) | ^5.x |

:::tip ¿Por qué TanStack Query?
TanStack Query maneja caché, actualizaciones en background, datos obsoletos, y estados de loading/error automáticamente. Combinado con Axios para la capa HTTP, proporciona una solución robusta de data fetching sin patrones manuales de `useState` + `useEffect`.
:::

## Configuración Inicial

### Cliente HTTP (Axios)

Configura Axios como tu cliente HTTP:

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

// Response interceptor para manejo de errores
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Manejar no autorizado - redirigir a login o refrescar token
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
```

### Configuración de TanStack Query

Configura el QueryClient provider en tu aplicación:

```tsx
// src/providers/QueryProvider.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutos
      gcTime: 10 * 60 * 1000, // 10 minutos (anteriormente cacheTime)
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

## Patrón de Configuración con Liquid (Despliegue en Modyo)

Al desplegar micro frontends React en Modyo, frecuentemente necesitas pasar configuración en tiempo de ejecución desde la plataforma a tu aplicación. Esto se logra a través del motor de plantillas Liquid de Modyo.

### ¿Por qué usar Liquid para Configuración?

- **Configuración en runtime**: Los valores se inyectan al renderizar la página, no al compilar
- **Específico por ambiente**: Diferentes valores por sitio/ambiente Modyo sin recompilar
- **Integración con la plataforma**: Acceso a datos de usuario, configuración del sitio y variables personalizadas
- **Seguridad**: Los valores sensibles permanecen en el servidor y se inyectan solo cuando es necesario

### Patrón Básico

En tu página Modyo, envuelve tu widget con un script de configuración:

::: v-pre
```html
<script>
  window.widgetConfig = {
    // Configuración de API
    apiBaseUrl: '{{site.variables.api_base_url}}',
    apiKey: '{{site.variables.api_key}}',

    // Ambiente
    environment: '{{site.variables.environment | default: "production"}}',

    // Feature flags
    features: {
      enableTransfers: {{site.variables.enable_transfers | default: true}},
      enableInvestments: {{site.variables.enable_investments | default: false}},
    },

    // Contexto de usuario (cuando está autenticado)
    {% if user %}
    user: {
      id: '{{user.id}}',
      email: '{{user.email}}',
      name: '{{user.name}}',
    },
    {% endif %}

    // Idioma
    locale: '{{site.language}}',
  };
</script>

<!-- Contenedor de tu widget -->
<div id="dynamic-widget"></div>
```
:::

### Accediendo a la Configuración en React

Crea un servicio de configuración para acceder a estos valores de forma segura:

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

// Configuración por defecto para desarrollo local
const defaultConfig: WidgetConfig = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  apiKey: 'dev-key',
  environment: 'development',
  features: {
    enableTransfers: true,
    enableInvestments: true,
  },
  locale: 'es',
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

### Usando la Configuración en Componentes

```tsx
import { widgetConfig } from '@/config/widgetConfig';
import { DButton } from '@dynamic-framework/ui-react';

function TransferButton() {
  if (!widgetConfig.features.enableTransfers) {
    return null;
  }

  return <DButton text="Realizar Transferencia" />;
}
```

### Variables Liquid Disponibles

::: v-pre
| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `{{site.variables.X}}` | Variables personalizadas del sitio | `{{site.variables.api_url}}` |
| `{{site.language}}` | Idioma actual del sitio | `en`, `es` |
| `{{site.name}}` | Nombre del sitio | `Mi Banco` |
| `{{user.id}}` | ID del usuario autenticado | `12345` |
| `{{user.email}}` | Email del usuario | `usuario@ejemplo.com` |
| `{{user.name}}` | Nombre del usuario | `Juan Pérez` |
| `{{user.access_token}}` | Token de acceso OAuth | (cadena JWT) |
:::

:::warning Consideraciones de Seguridad
- Nunca expongas API keys sensibles en JavaScript del cliente
- Usa <code v-pre>{{user.access_token}}</code> solo sobre HTTPS
- Valida todos los valores inyectados por Liquid en tu aplicación
- Considera usar el proxy backend de Modyo para operaciones sensibles
:::

### Integración con TypeScript

Para seguridad de tipos completa, declara la configuración global de window:

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

## Patrón Repository

Usa el patrón repository para encapsular llamadas API con tipos TypeScript apropiados y soporte para AbortSignal para cancelación.

### Repository de Cuentas

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

### Repository de Transferencias

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

## Hooks con TanStack Query

Crea hooks que usen TanStack Query v5 con las funciones del repository.

:::warning Estos son patrones, no exports de la librería
Los hooks a continuación son **ejemplos de cómo implementar** data fetching en tu aplicación. NO se exportan desde `@dynamic-framework/ui-react`. Necesitas crearlos en tu proyecto.
:::

### Hook useAccounts

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

### Hook useTransfers

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
      // Invalidar queries relacionadas para obtener datos frescos
      queryClient.invalidateQueries({ queryKey: ['accounts'] });
      queryClient.invalidateQueries({ queryKey: ['transfers'] });
    },
  });
}
```

### Uso en Componentes

```tsx
// src/components/AccountList.tsx
import { useAccounts } from '@/hooks/useAccounts';
import { DCard, DCurrencyText, DAlert } from '@dynamic-framework/ui-react';

export function AccountList() {
  const { data: accounts, isLoading, error } = useAccounts();

  if (isLoading) {
    return <div>Cargando cuentas...</div>;
  }

  if (error) {
    return (
      <DAlert type="error">
        Error al cargar cuentas: {error.message}
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

## Autenticación

### OAuth 2.0 con oidc-client-ts

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

### Hook de Autenticación

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

## Manejo de Errores

### Error Handler Centralizado

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
    return 'Error de red. Por favor verifica tu conexión.';
  }

  const { status, data } = error.response;

  switch (status) {
    case 400:
      return data?.message || 'Solicitud inválida. Por favor verifica tus datos.';
    case 401:
      return 'Sesión expirada. Por favor inicia sesión nuevamente.';
    case 403:
      return 'No tienes permiso para realizar esta acción.';
    case 404:
      return 'El recurso solicitado no fue encontrado.';
    case 429:
      return 'Demasiadas solicitudes. Por favor intenta más tarde.';
    case 500:
    default:
      return 'Ha ocurrido un error inesperado. Por favor intenta de nuevo.';
  }
}
```

### Error Boundary con TanStack Query

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
                text="Intentar de nuevo"
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

## Testing de APIs con MSW

Usa Mock Service Worker (MSW) v2 para mocking de APIs durante desarrollo y testing.

### Configurar Handlers

```typescript
// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw';
import type { Account } from '@/repositories/accountRepository';

const mockAccounts: Account[] = [
  {
    id: '1',
    name: 'Cuenta Corriente',
    balance: 125430.0,
    currency: 'USD',
    type: 'checking',
  },
  {
    id: '2',
    name: 'Cuenta de Ahorros',
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
        { message: 'El monto excede el límite máximo' },
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

### Configuración del Browser

```typescript
// src/mocks/browser.ts
import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);
```

### Inicializar en Desarrollo

```typescript
// src/main.tsx
async function enableMocking() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser');
    return worker.start({ onUnhandledRequest: 'bypass' });
  }
}

enableMocking().then(() => {
  // Renderiza tu app
});
```

## Mejores Prácticas

### 1. Gestión de Estado
- Usa **TanStack Query** para estado del servidor (datos de API)
- Usa **Zustand** para estado de UI (filtros, selecciones, modales)
- Nunca mezcles estado del servidor con estado de UI

### 2. Seguridad
- Almacena tokens en `sessionStorage` o cookies httpOnly, no en `localStorage`
- Siempre valida inputs tanto en cliente como en servidor
- Usa HTTPS en producción

### 3. Performance
- Usa query keys que reflejen la jerarquía de datos
- Implementa paginación para listas grandes
- Usa la opción `enabled` para prevenir requests innecesarios

### 4. TypeScript
- Define interfaces para todas las respuestas de API
- Usa generics con Axios para respuestas type-safe
- Exporta tipos desde los repositories para reutilización

## Recursos

- [Documentación de Axios](https://axios-http.com)
- [TanStack Query v5 Docs](https://tanstack.com/query/latest)
- [Documentación de Zustand](https://zustand-demo.pmnd.rs/)
- [MSW v2 Documentation](https://mswjs.io)
- [oidc-client-ts](https://github.com/authts/oidc-client-ts)
