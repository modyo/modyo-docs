---
search: true
---

# Estructura del Proyecto

Comprende cómo está organizado un proyecto Dynamic Framework y las mejores prácticas para mantenerlo escalable y mantenible.

## Estructura Base

Un proyecto típico de Dynamic Framework sigue esta estructura:

```
mi-proyecto-dynamic/
├── src/                      # Código fuente
│   ├── components/          # Componentes reutilizables
│   ├── views/              # Vistas/páginas completas
│   ├── services/           # Lógica de negocio y APIs
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utilidades y helpers
│   ├── styles/             # Estilos globales y temas
│   ├── assets/             # Imágenes, fonts, etc.
│   ├── locales/            # Archivos de traducción
│   ├── config/             # Configuración de la app
│   ├── App.jsx             # Componente raíz
│   └── index.js            # Punto de entrada
├── public/                  # Archivos públicos estáticos
│   ├── index.html          # Template HTML
│   ├── favicon.ico         # Favicon
│   └── manifest.json       # PWA manifest
├── tests/                   # Tests
│   ├── unit/              # Tests unitarios
│   ├── integration/       # Tests de integración
│   └── e2e/               # Tests end-to-end
├── .modyo/                  # Configuración de Modyo
│   └── config.json        # Config de despliegue
├── .github/                 # GitHub Actions
│   └── workflows/         # CI/CD workflows
├── docs/                    # Documentación del proyecto
├── .env.example            # Variables de entorno ejemplo
├── .eslintrc.js            # Configuración ESLint
├── .prettierrc             # Configuración Prettier
├── jest.config.js          # Configuración Jest
├── webpack.config.js       # Configuración Webpack
├── package.json            # Dependencias y scripts
└── README.md               # Documentación principal
```

## Directorios Principales

### `/src/components/`

Componentes reutilizables de la aplicación:

```
components/
├── common/                 # Componentes genéricos
│   ├── Button/
│   │   ├── Button.jsx
│   │   ├── Button.styles.js
│   │   ├── Button.test.js
│   │   └── index.js
│   ├── Card/
│   └── Modal/
├── forms/                  # Componentes de formulario
│   ├── Input/
│   ├── Select/
│   └── DatePicker/
├── layout/                 # Componentes de layout
│   ├── Header/
│   ├── Footer/
│   └── Sidebar/
└── business/              # Componentes de negocio
    ├── AccountCard/
    ├── TransactionItem/
    └── TransferForm/
```

### `/src/views/`

Páginas y vistas completas:

```
views/
├── Dashboard/
│   ├── Dashboard.jsx
│   ├── Dashboard.styles.js
│   ├── Dashboard.test.js
│   └── components/        # Componentes específicos de esta vista
├── Accounts/
├── Transfers/
├── Investments/
└── Settings/
```

### `/src/services/`

Lógica de negocio y comunicación con APIs:

```
services/
├── api/
│   ├── client.js          # Cliente HTTP configurado
│   ├── endpoints.js       # Definición de endpoints
│   └── interceptors.js    # Interceptores de request/response
├── auth/
│   ├── authService.js     # Autenticación
│   └── tokenManager.js    # Gestión de tokens
├── accounts/
│   └── accountService.js  # Servicios de cuentas
└── transactions/
    └── transactionService.js
```

### `/src/hooks/`

Custom React hooks:

```
hooks/
├── useAuth.js             # Hook de autenticación
├── useApi.js              # Hook para llamadas API
├── useAccounts.js         # Hook para cuentas
├── useTransactions.js     # Hook para transacciones
└── useTheme.js            # Hook para tema
```

### `/src/utils/`

Funciones de utilidad:

```
utils/
├── formatters/
│   ├── currency.js        # Formateo de moneda
│   ├── date.js           # Formateo de fechas
│   └── number.js         # Formateo de números
├── validators/
│   ├── account.js        # Validación de cuentas
│   └── transfer.js       # Validación de transferencias
├── constants/
│   ├── routes.js         # Constantes de rutas
│   └── messages.js       # Mensajes de la app
└── helpers/
    ├── storage.js        # LocalStorage helpers
    └── analytics.js      # Analytics helpers
```

### `/src/styles/`

Estilos y temas:

```
styles/
├── base/
│   ├── _reset.scss       # Reset CSS
│   ├── _typography.scss  # Tipografía
│   └── _variables.scss   # Variables globales
├── components/
│   └── _buttons.scss     # Estilos de componentes
├── themes/
│   ├── default.js        # Tema por defecto
│   ├── dark.js          # Tema oscuro
│   └── custom.js        # Tema personalizado
└── main.scss             # Archivo principal de estilos
```

### `/src/config/`

Configuración de la aplicación:

```
config/
├── app.config.js         # Configuración general
├── api.config.js         # Configuración de API
├── theme.config.js       # Configuración de tema
└── routes.config.js      # Configuración de rutas
```

## Archivos de Configuración

### `package.json`

```json
{
  "name": "mi-proyecto-dynamic",
  "version": "1.0.0",
  "scripts": {
    "start": "webpack serve --mode development",
    "build": "webpack --mode production",
    "test": "jest",
    "lint": "eslint src/",
    "format": "prettier --write src/",
    "analyze": "webpack-bundle-analyzer",
    "modyo:push": "modyo-cli push",
    "modyo:preview": "modyo-cli preview"
  },
  "dependencies": {
    "@dynamic-framework/ui-react": "^1.27.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.0.0",
    "axios": "^1.0.0"
  },
  "devDependencies": {
    "@modyo/cli": "^3.0.0",
    "webpack": "^5.0.0",
    "jest": "^29.0.0",
    "eslint": "^8.0.0",
    "prettier": "^2.0.0"
  }
}
```

### `.env.example`

```bash
# API Configuration
REACT_APP_API_URL=https://api.example.com
REACT_APP_API_KEY=your-api-key

# Modyo Configuration
REACT_APP_MODYO_ACCOUNT=your-account
REACT_APP_MODYO_SITE=your-site

# Feature Flags
REACT_APP_ENABLE_INVESTMENTS=true
REACT_APP_ENABLE_LOANS=false

# Analytics
REACT_APP_GA_ID=UA-XXXXXXXXX
```

### `.modyo/config.json`

```json
{
  "account": "mi-banco",
  "site": "web-banking",
  "widget": {
    "name": "dynamic-app",
    "description": "Aplicación bancaria con Dynamic Framework",
    "category": "banking",
    "tags": ["react", "dynamic", "banking"]
  },
  "deploy": {
    "environments": {
      "development": {
        "site": "web-banking-dev",
        "variables": {
          "API_URL": "https://api-dev.example.com"
        }
      },
      "production": {
        "site": "web-banking",
        "variables": {
          "API_URL": "https://api.example.com"
        }
      }
    }
  }
}
```

## Mejores Prácticas

### 1. Organización de Componentes

**Estructura de Componente**:
```
Button/
├── Button.jsx           # Componente principal
├── Button.styles.js     # Estilos (styled-components o CSS modules)
├── Button.test.js       # Tests
├── Button.stories.js    # Storybook stories
└── index.js            # Export público
```

**index.js**:
```javascript
export { default } from './Button';
export * from './Button';
```

### 2. Nomenclatura

- **Componentes**: PascalCase (`AccountCard.jsx`)
- **Funciones/Hooks**: camelCase (`useAuth.js`)
- **Constantes**: UPPER_SNAKE_CASE (`API_ENDPOINTS.js`)
- **Archivos CSS**: kebab-case (`button-styles.scss`)

### 3. Imports Organizados

```javascript
// 1. Dependencias externas
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// 2. Componentes de Dynamic Framework
import { Button, Card, Input } from '@dynamic-framework/ui-react';

// 3. Componentes internos
import Header from '@/components/layout/Header';
import AccountCard from '@/components/business/AccountCard';

// 4. Servicios y utilidades
import { accountService } from '@/services/accounts';
import { formatCurrency } from '@/utils/formatters';

// 5. Estilos
import styles from './Dashboard.module.scss';
```

### 4. Alias de Rutas

Configura alias en webpack para imports más limpios:

```javascript
// webpack.config.js
resolve: {
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@services': path.resolve(__dirname, 'src/services'),
    '@utils': path.resolve(__dirname, 'src/utils'),
  }
}
```

### 5. Separación de Responsabilidades

- **Componentes**: Solo presentación y estado UI
- **Services**: Lógica de negocio y APIs
- **Hooks**: Lógica reutilizable y estado compartido
- **Utils**: Funciones puras de utilidad

## Escalabilidad

### Para Proyectos Pequeños

Estructura simplificada:
```
src/
├── components/
├── pages/
├── services/
├── App.jsx
└── index.js
```

### Para Proyectos Grandes

Estructura por features:
```
src/
├── features/
│   ├── accounts/
│   │   ├── components/
│   │   ├── services/
│   │   ├── hooks/
│   │   └── index.js
│   ├── transfers/
│   └── investments/
├── shared/
│   ├── components/
│   └── utils/
└── core/
    ├── auth/
    └── api/
```

### Para Monorepos

Estructura con workspaces:
```
packages/
├── web-app/
├── mobile-app/
├── shared-components/
├── business-logic/
└── design-system/
```

## Testing

### Estructura de Tests

```
tests/
├── unit/
│   ├── components/
│   ├── services/
│   └── utils/
├── integration/
│   ├── flows/
│   └── api/
└── e2e/
    ├── scenarios/
    └── fixtures/
```

### Convención de Nombres

- Tests unitarios: `Component.test.js`
- Tests de integración: `feature.integration.test.js`
- Tests E2E: `scenario.e2e.test.js`

## Documentación

### Estructura de Docs

```
docs/
├── getting-started/
│   └── README.md
├── components/
│   └── catalog.md
├── api/
│   └── reference.md
└── architecture/
    └── decisions/
```

## Recursos

- [Storybook](https://react.dynamicframework.dev) - Catálogo interactivo de componentes
- [NPM Package](https://www.npmjs.com/package/@dynamic-framework/ui-react) - Detalles del paquete