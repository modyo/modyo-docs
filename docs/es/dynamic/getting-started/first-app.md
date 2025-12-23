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
- Integración con APIs

## Prerequisitos

Asegúrate de haber completado la [instalación](installation.html) de Dynamic Framework.

## Paso 1: Crear el Proyecto

```bash
# Crear proyecto con plantilla Dynamic
npx @modyo/cli@latest get dynamic-react-base-template mi-primera-app

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
│   ├── App.jsx         # Componente principal
│   ├── index.js        # Punto de entrada
│   └── styles/         # Estilos personalizados
├── public/
│   └── index.html      # HTML template
└── package.json        # Configuración
```

## Paso 3: Crear el Dashboard

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
          <h1>Bienvenido, {user.name}</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <DCard>
            <DCard.Header>
              <h5>Cuenta Corriente</h5>
            </DCard.Header>
            <DCard.Body>
              <DCurrencyText value={125430} className="fs-2 text-primary" />
              <p className="text-muted mb-0">Disponible</p>
            </DCard.Body>
          </DCard>
        </div>

        <div className="col-md-6 mb-3">
          <DCard>
            <DCard.Header>
              <h5>Cuenta de Ahorros</h5>
            </DCard.Header>
            <DCard.Body>
              <DCurrencyText value={45200} className="fs-2 text-success" />
              <p className="text-muted mb-0">Disponible</p>
            </DCard.Body>
          </DCard>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
```

## Paso 4: Lista de Transacciones

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
      <h2 className="mb-3">Últimas Transacciones</h2>

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

## Paso 5: Formulario de Transferencia

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
          {success && <DAlert color="success">Transferencia exitosa</DAlert>}

          <DInputSelect
            id="fromAccount"
            label="Cuenta Origen"
            options={accountOptions}
            value={formData.fromAccount}
            onChange={(value) => setFormData({ ...formData, fromAccount: value })}
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
            onChange={(value) => setFormData({ ...formData, amount: value })}
            currencyCode="USD"
          />

          <DInput
            id="description"
            label="Descripción"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Concepto de la transferencia"
          />

          <DButton type="submit" color="primary" className="w-100 mt-3">
            Realizar Transferencia
          </DButton>
        </form>
      </DCard.Body>
    </DCard>
  );
};

export default TransferForm;
```

## Paso 6: Integrar Todo en App

### App Component Principal

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
  { label: 'Transacciones', tab: 'transactions' },
  { label: 'Transferir', tab: 'transfer' },
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

## Paso 7: Servicios API

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
    throw new Error('Error en la transferencia');
  }
  
  return response.json();
};
```

## Paso 8: Ejecutar la Aplicación

```bash
# Iniciar el servidor de desarrollo
npm start

# La aplicación estará disponible en http://localhost:8080
```

## Paso 9: Personalización

### Agregar Estilos Personalizados

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

## Paso 10: Desplegar a Modyo

```bash
# Construir para producción
npm run build

# Configurar Modyo CLI
npx @modyo/cli init

# Desplegar a Modyo
npx @modyo/cli push
```

## Resultado Final

¡Felicitaciones! Has creado tu primera aplicación bancaria con Dynamic Framework que incluye:

- Dashboard con resumen de cuentas
- Lista de transacciones recientes
- Formulario de transferencias
- Integración con APIs
- Diseño responsive y moderno
- Listo para desplegar en Modyo

## Próximos Pasos

- Explora más [componentes](../development/components.html)
- Implementa [autenticación](../development/api-integration.html#autenticacion)
- Agrega [validaciones avanzadas](../development/components.html#validacion)
- Personaliza el [tema](../customization/theming.html)

## ¿Necesitas Ayuda?

Si encuentras problemas:
1. Revisa la [documentación de componentes](../development/components.html)
2. Consulta el [Storybook](https://react.dynamicframework.dev) para ejemplos interactivos
3. Contacta [Soporte](https://support.modyo.com)