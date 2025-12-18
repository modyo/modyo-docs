---
search: true
---

# Project Structure

Understand how a Dynamic Framework project is organized and best practices to keep it scalable and maintainable.

## Base Structure

A typical Dynamic Framework project follows this structure:

```
my-dynamic-project/
├── src/                      # Source code
│   ├── components/          # Reusable components
│   ├── views/              # Complete views/pages
│   ├── services/           # Business logic and APIs
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utilities and helpers
│   ├── styles/             # Global styles and themes
│   ├── assets/             # Images, fonts, etc.
│   ├── locales/            # Translation files
│   ├── config/             # App configuration
│   ├── App.jsx             # Root component
│   └── index.js            # Entry point
├── public/                  # Static public files
│   ├── index.html          # HTML template
│   ├── favicon.ico         # Favicon
│   └── manifest.json       # PWA manifest
├── tests/                   # Tests
│   ├── unit/              # Unit tests
│   ├── integration/       # Integration tests
│   └── e2e/               # End-to-end tests
├── .modyo/                  # Modyo configuration
│   └── config.json        # Deploy config
├── .github/                 # GitHub Actions
│   └── workflows/         # CI/CD workflows
├── docs/                    # Project documentation
├── .env.example            # Environment variables example
├── .eslintrc.js            # ESLint configuration
├── .prettierrc             # Prettier configuration
├── jest.config.js          # Jest configuration
├── webpack.config.js       # Webpack configuration
├── package.json            # Dependencies and scripts
└── README.md               # Main documentation
```

## Main Directories

### `/src/components/`

Reusable application components:

```
components/
├── common/                 # Generic components
│   ├── Button/
│   │   ├── Button.jsx
│   │   ├── Button.styles.js
│   │   ├── Button.test.js
│   │   └── index.js
│   ├── Card/
│   └── Modal/
├── forms/                  # Form components
│   ├── Input/
│   ├── Select/
│   └── DatePicker/
├── layout/                 # Layout components
│   ├── Header/
│   ├── Footer/
│   └── Sidebar/
└── business/              # Business components
    ├── AccountCard/
    ├── TransactionItem/
    └── TransferForm/
```

### `/src/views/`

Complete pages and views:

```
views/
├── Dashboard/
│   ├── Dashboard.jsx
│   ├── Dashboard.styles.js
│   ├── Dashboard.test.js
│   └── components/        # View-specific components
├── Accounts/
├── Transfers/
├── Investments/
└── Settings/
```

### `/src/services/`

Business logic and API communication:

```
services/
├── api/
│   ├── client.js          # Configured HTTP client
│   ├── endpoints.js       # Endpoint definitions
│   └── interceptors.js    # Request/response interceptors
├── auth/
│   ├── authService.js     # Authentication
│   └── tokenManager.js    # Token management
├── accounts/
│   └── accountService.js  # Account services
└── transactions/
    └── transactionService.js
```

### `/src/hooks/`

Custom React hooks:

```
hooks/
├── useAuth.js             # Authentication hook
├── useApi.js              # API calls hook
├── useAccounts.js         # Accounts hook
├── useTransactions.js     # Transactions hook
└── useTheme.js            # Theme hook
```

### `/src/utils/`

Utility functions:

```
utils/
├── formatters/
│   ├── currency.js        # Currency formatting
│   ├── date.js           # Date formatting
│   └── number.js         # Number formatting
├── validators/
│   ├── account.js        # Account validation
│   └── transfer.js       # Transfer validation
├── constants/
│   ├── routes.js         # Route constants
│   └── messages.js       # App messages
└── helpers/
    ├── storage.js        # LocalStorage helpers
    └── analytics.js      # Analytics helpers
```

### `/src/styles/`

Styles and themes:

```
styles/
├── base/
│   ├── _reset.scss       # CSS Reset
│   ├── _typography.scss  # Typography
│   └── _variables.scss   # Global variables
├── components/
│   └── _buttons.scss     # Component styles
├── themes/
│   ├── default.js        # Default theme
│   ├── dark.js          # Dark theme
│   └── custom.js        # Custom theme
└── main.scss             # Main styles file
```

### `/src/config/`

Application configuration:

```
config/
├── app.config.js         # General configuration
├── api.config.js         # API configuration
├── theme.config.js       # Theme configuration
└── routes.config.js      # Routes configuration
```

## Configuration Files

### `package.json`

```json
{
  "name": "my-dynamic-project",
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
    "@dynamic-framework/ui-react": "^2.0.0",
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
  "account": "my-bank",
  "site": "web-banking",
  "widget": {
    "name": "dynamic-app",
    "description": "Banking application with Dynamic Framework",
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

## Best Practices

### 1. Component Organization

**Component Structure**:
```
Button/
├── Button.jsx           # Main component
├── Button.styles.js     # Styles (styled-components or CSS modules)
├── Button.test.js       # Tests
├── Button.stories.js    # Storybook stories
└── index.js            # Public export
```

**index.js**:
```javascript
export { default } from './Button';
export * from './Button';
```

### 2. Naming Conventions

- **Components**: PascalCase (`AccountCard.jsx`)
- **Functions/Hooks**: camelCase (`useAuth.js`)
- **Constants**: UPPER_SNAKE_CASE (`API_ENDPOINTS.js`)
- **CSS Files**: kebab-case (`button-styles.scss`)

### 3. Organized Imports

```javascript
// 1. External dependencies
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// 2. Dynamic Framework components
import { Button, Card, Input } from '@dynamic-framework/ui-react';

// 3. Internal components
import Header from '@/components/layout/Header';
import AccountCard from '@/components/business/AccountCard';

// 4. Services and utilities
import { accountService } from '@/services/accounts';
import { formatCurrency } from '@/utils/formatters';

// 5. Styles
import styles from './Dashboard.module.scss';
```

### 4. Path Aliases

Configure aliases in webpack for cleaner imports:

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

### 5. Separation of Concerns

- **Components**: Only presentation and UI state
- **Services**: Business logic and APIs
- **Hooks**: Reusable logic and shared state
- **Utils**: Pure utility functions

## Scalability

### For Small Projects

Simplified structure:
```
src/
├── components/
├── pages/
├── services/
├── App.jsx
└── index.js
```

### For Large Projects

Structure by features:
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

### For Monorepos

Structure with workspaces:
```
packages/
├── web-app/
├── mobile-app/
├── shared-components/
├── business-logic/
└── design-system/
```

## Testing

### Test Structure

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

### Naming Conventions

- Unit tests: `Component.test.js`
- Integration tests: `feature.integration.test.js`
- E2E tests: `scenario.e2e.test.js`

## Documentation

### Documentation Structure

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

## Resources

- [Code style guide](https://github.com/modyo/style-guide)
- [Project template](https://github.com/modyo/dynamic-template)
- [Structure examples](https://github.com/modyo/project-structures)