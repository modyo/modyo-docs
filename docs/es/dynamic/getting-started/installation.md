---
search: true
---

# Inicio Rápido

Esta guía te ayudará a comenzar rápidamente con Dynamic Framework, desde la instalación hasta tu primera aplicación funcional.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** v20 o superior
- **NPM** 10.x o superior
- **Git** para control de versiones
- **Cuenta Modyo** con acceso a Dynamic Framework
- **Editor de código** (recomendamos VS Code)

## Instalación

### Opción 1: Usando Modyo CLI (Recomendado)

La forma más rápida de comenzar es usando Modyo CLI con una plantilla de Dynamic Framework:

```bash
# Crear un nuevo proyecto con la plantilla base de React
npx @modyo/cli@latest get dynamic-react-vite-base-template mi-banco-digital

# Navegar al directorio del proyecto
cd mi-banco-digital

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run start
```

Tu aplicación estará disponible en `http://localhost:8080`

### Opción 2: Agregar a un Proyecto React Existente

Para proyectos React existentes, instala el paquete vía NPM:

```bash
# Instalar el paquete principal
npm install @dynamic-framework/ui-react
```

## Estructura del Proyecto

Un proyecto típico con Dynamic Framework tiene la siguiente estructura:

```
mi-banco-digital/
├── src/
│   ├── components/        # Componentes personalizados
│   ├── views/             # Vistas/páginas de la aplicación
│   ├── services/          # Servicios y llamadas API
│   ├── hooks/             # Custom hooks de React
│   ├── utils/             # Utilidades y helpers
│   ├── styles/            # Estilos personalizados
│   ├── App.jsx            # Componente principal
│   └── index.js           # Punto de entrada
├── public/
│   └── index.html         # Template HTML
├── .env                   # Configuración de Modyo CLI (URL cuenta, sitio, token)
├── package.json           # Dependencias y scripts
└── README.md             # Documentación del proyecto
```

## Tu Primera Aplicación

### 1. Componente Básico

Crea tu primer componente usando Dynamic Framework:

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
        <h2>Bienvenido, {userName}</h2>
        <p>Gestiona tus finanzas de manera simple y segura</p>
        <DButton
          color="primary"
          size="lg"
          text="Ver mis cuentas"
        />
      </DCard.Body>
    </DCard>
  );
}
```

### 2. Vista de Dashboard

Crea una vista completa utilizando múltiples componentes:

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
    // Cargar datos desde tu API
    fetchAccounts();
    fetchTransactions();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="mb-4">Bienvenido, Juan Pérez</h1>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-8">
          <h3>Mis Cuentas</h3>
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
            <DCard.Header>Acciones Rápidas</DCard.Header>
            <DCard.Body>
              <div className="d-grid gap-2">
                <DButton
                  color="primary"
                  text="Transferir"
                  iconStart="ArrowRightLeft"
                />
                <DButton
                  color="secondary"
                  text="Pagar"
                  iconStart="CreditCard"
                />
              </div>
            </DCard.Body>
          </DCard>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <h3>Últimas Transacciones</h3>
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

### 3. Configuración de Tema

Personaliza tu aplicación usando CSS variables y DContextProvider:

```tsx
// src/App.tsx
import React from 'react';
import { DContextProvider } from '@dynamic-framework/ui-react';
import Dashboard from './views/Dashboard';

// Importar estilos de Dynamic UI
import '@dynamic-framework/ui-react/dist/css/dynamic-ui.css';

// Tus estilos personalizados pueden sobrescribir las variables CSS
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

## Conectar con APIs

Los widgets de Dynamic usan **TanStack Query** para manejo de estado del servidor y **axios** para peticiones HTTP.

### 1. Cliente API

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

// Interceptor de logging para desarrollo
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

### 2. Patrón Repository

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

### 3. Hooks con TanStack Query

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

**Uso en componentes:**

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

Para patrones detallados, consulta [Integración con APIs](../development/api-integration.html).

## Scripts de Desarrollo

En tu `package.json`, tendrás estos scripts útiles:

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

## Despliegue en Modyo

### 1. Configurar Entorno

Crea un archivo `.env` con tus credenciales de Modyo:

```bash
# .env (variables requeridas)
MODYO_ACCOUNT_URL=https://tu-cuenta.modyo.cloud
MODYO_TOKEN=tu-api-token
# Usa MODYO_SITE_HOST o MODYO_SITE_ID (no ambos)
MODYO_SITE_HOST=tu-site-host
# MODYO_SITE_ID=123  # Preferido: funciona con stages del sitio
```

Para obtener tu token de API, ve a **Modyo Admin > Settings > API Access > Access Tokens**.

Consulta la [documentación del Modyo CLI](/es/platform/tools/cli.html) para todas las variables de entorno disponibles.

:::warning
Nunca hagas commit del archivo `.env` con tokens reales. Agrégalo a `.gitignore`.
:::

### 2. Construir y Desplegar

```bash
# Construir y push a Modyo
npm run push

# O con auto-publicación
npm run build && npx @modyo/cli@latest push --publish
```

Para todas las opciones del CLI, consulta la [documentación del Modyo CLI](/es/platform/tools/cli.html).

## Mejores Prácticas

### 1. Manejo de Estado
- Usa **TanStack Query** para estado del servidor (datos de API)
- Usa **Zustand** para estado de UI (selecciones, filtros, modals)
- Nunca uses `useState` + `useEffect` para data fetching

### 2. Estados de Datos
- Siempre maneja estados de **loading**, **error** y **empty**
- Usa `ErrorBoundary` para prevenir pantallas blancas ante errores
- Proporciona acciones de retry para peticiones fallidas

### 3. Organización de Código
- Mantén componentes pequeños y enfocados
- Usa repositories para llamadas API con soporte de `AbortSignal`
- Separa lógica de negocio de componentes UI

### 4. Testing
- Escribe tests para hooks custom en `services/hooks/`
- Usa **Vitest** y React Testing Library
- Testea escenarios de loading, error y success

## Recursos Adicionales

- **Storybook**: [react.dynamicframework.dev](https://react.dynamicframework.dev)
- **Soporte**: [support.modyo.com](https://support.modyo.com)

## Próximos Pasos

Ahora que tienes tu aplicación funcionando:

1. Explora el [catálogo de componentes](../development/components.html)
2. Aprende sobre [personalización de temas](../customization/theming.html)
3. Implementa [integraciones con APIs](../development/api-integration.html)

¡Felicitaciones! Ya estás listo para construir experiencias financieras extraordinarias con Dynamic Framework.