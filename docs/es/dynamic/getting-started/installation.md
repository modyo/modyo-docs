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
npx @modyo/cli@latest get dynamic-react-base-template mi-banco-digital

# Navegar al directorio del proyecto
cd mi-banco-digital

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run start
```

Tu aplicación estará disponible en `http://localhost:8080`

### Opción 2: Integración en Modyo Platform

Si estás creando una nueva aplicación web en Modyo:

1. Ve a **Channels > Sites** en tu cuenta Modyo
2. Crea un nuevo sitio
3. Selecciona **"Tema Mínimo Dinámico"** como plantilla
4. Dynamic Framework se instalará automáticamente

### Opción 3: Instalación vía CDN

Para proyectos simples o prototipos rápidos:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <!-- CSS de Dynamic Framework -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@dynamic-framework/ui-react@latest/dist/css/dynamic-ui.css">
</head>
<body>
  <!-- Tu contenido aquí -->
  
  <!-- JavaScript de Dynamic Framework (opcional) -->
  <script src="https://cdn.jsdelivr.net/npm/@dynamic-framework/ui-react@latest/dist/js/bootstrap.min.js"></script>
</body>
</html>
```

### Opción 4: Instalación vía NPM

Para proyectos React existentes:

```bash
# Instalar el paquete principal
npm install @dynamic-framework/ui-react

# Instalar dependencias peer
npm install react react-dom bootstrap
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
├── .modyo/                # Configuración de Modyo
├── package.json           # Dependencias y scripts
└── README.md             # Documentación del proyecto
```

## Tu Primera Aplicación

### 1. Componente Básico

Crea tu primer componente usando Dynamic Framework:

```jsx
// src/components/WelcomeBanner.jsx
import React from 'react';
import { Card, Button, Typography } from '@dynamic-framework/ui-react';

const WelcomeBanner = ({ userName }) => {
  return (
    <Card className="welcome-banner">
      <Card.Body>
        <Typography variant="h2">
          Bienvenido, {userName}
        </Typography>
        <Typography variant="body1">
          Gestiona tus finanzas de manera simple y segura
        </Typography>
        <Button variant="primary" size="large">
          Ver mis cuentas
        </Button>
      </Card.Body>
    </Card>
  );
};

export default WelcomeBanner;
```

### 2. Vista de Dashboard

Crea una vista completa utilizando múltiples componentes:

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
    // Cargar datos desde tu API
    fetchAccounts();
    fetchTransactions();
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <WelcomeBanner userName="Juan Pérez" />
        </Col>
      </Row>
      
      <Row className="mt-4">
        <Col md={8}>
          <h3>Mis Cuentas</h3>
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
              { label: 'Transferir', icon: 'transfer', onClick: handleTransfer },
              { label: 'Pagar', icon: 'payment', onClick: handlePayment },
              { label: 'Recargar', icon: 'topup', onClick: handleTopUp }
            ]}
          />
        </Col>
      </Row>
      
      <Row className="mt-4">
        <Col xs={12}>
          <h3>Últimas Transacciones</h3>
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

### 3. Configuración de Tema

Personaliza el tema de tu aplicación:

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

## Conectar con APIs

### Configurar Servicios

```javascript
// src/services/api.js
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.mibancodigital.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor para agregar token de autenticación
api.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Servicios específicos
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

### Usar Hooks Personalizados

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

## Scripts de Desarrollo

En tu `package.json`, tendrás estos scripts útiles:

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

## Despliegue en Modyo

### 1. Configurar Modyo CLI

```bash
# Inicializar configuración de Modyo
npx @modyo/cli@latest init

# Seguir los prompts para configurar:
# - URL de tu cuenta Modyo
# - Token de API
# - Sitio destino
```

### 2. Construir y Desplegar

```bash
# Construir la aplicación para producción
npm run build

# Desplegar a Modyo
npm run modyo:push

# O hacer preview antes de desplegar
npm run modyo:preview
```

## Mejores Prácticas

### 1. Organización de Código
- Mantén componentes pequeños y enfocados
- Usa carpetas para agrupar funcionalidades relacionadas
- Separa lógica de negocio de componentes UI

### 2. Performance
- Implementa lazy loading para rutas
- Usa React.memo para componentes pesados
- Optimiza imágenes y assets

### 3. Seguridad
- Nunca hardcodees credenciales
- Valida todos los inputs del usuario
- Usa HTTPS para todas las comunicaciones

### 4. Testing
- Escribe tests unitarios para lógica crítica
- Implementa tests de integración para flujos principales
- Usa herramientas como Jest y React Testing Library

## Recursos Adicionales

- **Documentación Completa**: [dynamic.modyo.com/docs](https://dynamic.modyo.com/docs)
- **Storybook**: [react.dynamicframework.dev](https://react.dynamicframework.dev)
- **Soporte**: [support.modyo.com](https://support.modyo.com)

## Próximos Pasos

Ahora que tienes tu aplicación funcionando:

1. Explora el [catálogo de componentes](../development/components.html)
2. Aprende sobre [personalización de temas](../customization/theming.html)
3. Revisa las [plantillas de experiencias](../development/experiences.html)
4. Implementa [integraciones con APIs](../development/api-integration.html)

¡Felicitaciones! Ya estás listo para construir experiencias financieras extraordinarias con Dynamic Framework.