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
            Bienvenido, {user.name}
          </Typography>
        </Col>
      </Row>
      
      <Row>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Typography variant="h3">Cuenta Corriente</Typography>
            </Card.Header>
            <Card.Body>
              <Typography variant="h2" className="text-primary">
                $125,430.00
              </Typography>
              <Typography variant="body2" className="text-muted">
                Disponible
              </Typography>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6}>
          <Card>
            <Card.Header>
              <Typography variant="h3">Cuenta de Ahorros</Typography>
            </Card.Header>
            <Card.Body>
              <Typography variant="h2" className="text-success">
                $45,200.00
              </Typography>
              <Typography variant="body2" className="text-muted">
                Disponible
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

## Paso 4: Lista de Transacciones

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
        Últimas Transacciones
      </Typography>
      
      <Table responsive hover>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Descripción</th>
            <th>Monto</th>
            <th>Estado</th>
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

## Paso 5: Formulario de Transferencia

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
      {success && <Alert variant="success">Transferencia exitosa</Alert>}
      
      <Form.Group>
        <Form.Label>Cuenta Origen</Form.Label>
        <Select
          name="fromAccount"
          value={formData.fromAccount}
          onChange={handleChange}
          required
        >
          <option value="">Seleccionar cuenta</option>
          {accounts.map(account => (
            <option key={account.id} value={account.id}>
              {account.name} - ${account.balance}
            </option>
          ))}
        </Select>
      </Form.Group>

      <Form.Group>
        <Form.Label>Cuenta Destino</Form.Label>
        <Input
          type="text"
          name="toAccount"
          value={formData.toAccount}
          onChange={handleChange}
          placeholder="Número de cuenta"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Monto</Form.Label>
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
        <Form.Label>Descripción</Form.Label>
        <Input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Concepto de la transferencia"
        />
      </Form.Group>

      <Button type="submit" variant="primary" block>
        Realizar Transferencia
      </Button>
    </Form>
  );
};

export default TransferForm;
```

## Paso 6: Integrar Todo en App

### App Component Principal

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
    // Cargar datos iniciales
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
    // Recargar datos después de la transferencia
    await loadData();
  };

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <ThemeProvider>
      <div className="app">
        <Tabs activeKey={activeTab} onSelect={setActiveTab}>
          <Tab eventKey="dashboard" title="Dashboard">
            <Dashboard user={user} />
          </Tab>
          <Tab eventKey="transactions" title="Transacciones">
            <TransactionList transactions={transactions} />
          </Tab>
          <Tab eventKey="transfer" title="Transferir">
            <TransferForm accounts={accounts} onTransfer={handleTransfer} />
          </Tab>
        </Tabs>
      </div>
    </ThemeProvider>
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

## Recursos

- [Código completo en GitHub](https://github.com/modyo/dynamic-first-app)
- [Demo en vivo](https://demo.dynamic.modyo.com/first-app)
- [Video tutorial](https://youtube.com/watch?v=...)

## ¿Necesitas Ayuda?

Si encuentras problemas:
1. Revisa la [documentación de componentes](../development/components.html)
2. Busca en los [FAQs](https://support.modyo.com/hc/es)
3. Pregunta en la [comunidad](https://community.modyo.com)
4. Contacta [soporte](https://support.modyo.com)