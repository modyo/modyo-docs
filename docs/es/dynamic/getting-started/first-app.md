---
search: true
---

# Primera Aplicación

Esta guía te llevará paso a paso a través de la creación de tu primera aplicación bancaria con Dynamic Framework.

## Objetivo

Al finalizar esta guía, habrás creado una aplicación bancaria funcional con:
- Dashboard de cuentas
- Vista de transacciones
- Transferencias básicas
- Integración con APIs usando TanStack Query

## Prerequisitos

Asegúrate de haber completado la [instalación](installation.html) de Dynamic Framework.

## Paso 1: Crear el Proyecto

```bash
# Crear proyecto con plantilla Dynamic
npx @modyo/cli@latest get dynamic-react-vite-base-template mi-primera-app

# Entrar al directorio
cd mi-primera-app

# Instalar dependencias
npm install
```

## Paso 2: Estructura Inicial

Tu proyecto tendrá esta estructura:

```
mi-primera-app/
├── src/
│   ├── App.tsx              # Componente principal
│   ├── main.tsx             # Punto de entrada
│   ├── components/          # Componentes UI
│   ├── services/
│   │   ├── api/             # Cliente API
│   │   ├── repositories/    # Repositorios de datos
│   │   └── hooks/           # Hooks de TanStack Query
│   └── styles/              # Estilos personalizados
├── public/
│   └── index.html           # HTML template
├── .env                     # Variables de entorno
└── package.json             # Configuración
```

## Paso 3: Configurar Cliente API

### Cliente API con Axios

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

## Paso 4: Crear Repositorios

### Repositorio de Usuario

```typescript
// src/services/repositories/userRepository.ts
import { api } from '../api/client';
import type { User } from '../../types';

export async function getUser(signal?: AbortSignal): Promise<User> {
  const response = await api.get('/user', { signal });
  return response.data;
}
```

### Repositorio de Cuentas

```typescript
// src/services/repositories/accountRepository.ts
import { api } from '../api/client';
import type { Account } from '../../types';

export async function getAccounts(signal?: AbortSignal): Promise<Account[]> {
  const response = await api.get('/accounts', { signal });
  return response.data;
}
```

### Repositorio de Transacciones

```typescript
// src/services/repositories/transactionRepository.ts
import { api } from '../api/client';
import type { Transaction } from '../../types';

export async function getTransactions(signal?: AbortSignal): Promise<Transaction[]> {
  const response = await api.get('/transactions', { signal });
  return response.data;
}
```

### Repositorio de Transferencias

```typescript
// src/services/repositories/transferRepository.ts
import { api } from '../api/client';
import type { TransferData, TransferResult } from '../../types';

export async function createTransfer(data: TransferData): Promise<TransferResult> {
  const response = await api.post('/transfers', data);
  return response.data;
}
```

## Paso 5: Crear Hooks de TanStack Query

### Hook de Usuario

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

### Hook de Cuentas

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

### Hook de Transacciones

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

### Hook de Mutación para Transferencias

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

## Paso 6: Crear el Dashboard

### Componente Dashboard

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
    return <DAlert color="danger">Error al cargar los datos</DAlert>;
  }

  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col">
          <h1>Bienvenido, {user?.name}</h1>
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
                <p className="text-muted mb-0">Disponible</p>
              </DCard.Body>
            </DCard>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## Paso 7: Lista de Transacciones

### Componente TransactionList

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
  if (error) return <DAlert color="danger">Error al cargar transacciones</DAlert>;
  if (!transactions?.length) return <DAlert color="info">No hay transacciones</DAlert>;

  return (
    <div className="transaction-list">
      <h2 className="mb-3">Últimas Transacciones</h2>

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

## Paso 8: Formulario de Transferencia

### Componente TransferForm

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
        <h2 className="mb-3">Nueva Transferencia</h2>
        <form onSubmit={handleSubmit}>
          {isError && <DAlert color="danger">{error?.message || 'Error en la transferencia'}</DAlert>}
          {isSuccess && <DAlert color="success">Transferencia realizada con éxito</DAlert>}

          <DInputSelect
            id="fromAccount"
            label="Cuenta Origen"
            options={accountOptions}
            value={formData.fromAccount}
            onChange={(option) => setFormData({ ...formData, fromAccount: String(option.value) })}
          />

          <DInput
            id="toAccount"
            label="Cuenta Destino"
            value={formData.toAccount}
            onChange={(e) => setFormData({ ...formData, toAccount: e.target.value })}
            placeholder="Número de cuenta"
          />

          <DInputCurrency
            id="amount"
            label="Monto"
            value={formData.amount}
            onChange={(value) => setFormData({ ...formData, amount: value || 0 })}
          />

          <DInput
            id="description"
            label="Descripción"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Concepto de la transferencia"
          />

          <DButton
            type="submit"
            text={isPending ? 'Procesando...' : 'Realizar Transferencia'}
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

## Paso 9: Integrar Todo en App

### Componente App Principal

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
  { label: 'Transacciones', tab: 'transactions' },
  { label: 'Transferir', tab: 'transfer' },
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

## Paso 10: Ejecutar la Aplicación

```bash
# Iniciar el servidor de desarrollo
npm run start

# La aplicación estará disponible en http://localhost:8080
```

## Paso 11: Personalización

### Agregar Estilos Personalizados

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

## Paso 12: Desplegar a Modyo

### 1. Configurar Entorno

Crea un archivo `.env` con tus credenciales de Modyo:

```bash
# .env
MODYO_ACCOUNT_URL=https://tu-cuenta.modyo.cloud
MODYO_TOKEN=tu-api-token
# Usa MODYO_SITE_HOST o MODYO_SITE_ID (no ambos)
MODYO_SITE_HOST=tu-site-host
# MODYO_SITE_ID=123  # Preferido: funciona con stages del sitio
```

### 2. Construir y Desplegar

```bash
# Construir y push a Modyo
npm run build && npx @modyo/cli@latest push
```

## Resultado Final

¡Felicitaciones! Has creado tu primera aplicación bancaria con Dynamic Framework que incluye:

- Dashboard con resumen de cuentas
- Lista de transacciones con estados de carga y error
- Formulario de transferencias con mutaciones de TanStack Query
- Integración con APIs usando repositorios y hooks
- Listo para desplegar en Modyo

## Próximos Pasos

- Explora más [componentes](../development/components.html)
- Aprende sobre [patrones de integración con APIs](../development/api-integration.html)
- Personaliza el [tema](../customization/theming.html)

## ¿Necesitas Ayuda?

Si encuentras problemas:
1. Revisa la [documentación de componentes](../development/components.html)
2. Consulta el [Storybook](https://react.dynamicframework.dev) para ejemplos interactivos
3. Contacta [Soporte](https://support.modyo.com)
