---
search: true
---

# Project Structure

Understand how a Dynamic Framework project is organized and best practices to keep it scalable and maintainable.

## Base Structure

A typical Dynamic Framework widget follows this structure:

```
my-widget/
├── src/                      # Source code
│   ├── components/          # Reusable components
│   ├── config/              # Configuration files
│   ├── locales/             # Translation files (i18n)
│   ├── providers/           # React context providers
│   ├── services/            # API services
│   ├── store/               # Zustand stores (UI state)
│   ├── styles/              # SCSS styles
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions
│   ├── App.tsx              # Root component
│   └── main.tsx             # Entry point
├── tests/                   # Test files
│   └── setup.ts            # Test configuration
├── public/                  # Static files
│   └── index.html          # HTML template
├── .env.example            # Environment variables template
├── .eslintrc.js            # ESLint configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

## Main Directories

### `/src/components/`

Reusable widget components with barrel exports:

```
components/
├── index.ts                # Barrel export
├── ErrorBoundary.tsx       # Error boundary wrapper
├── DataStateWrapper.tsx    # Loading/error/empty states handler
├── LoadingState.tsx        # Loading skeleton variants
├── ErrorState.tsx          # Error UI with retry
├── EmptyState.tsx          # Empty data UI
└── AccountCard/
    ├── AccountCard.tsx
    ├── AccountCard.test.tsx
    └── index.ts
```

### `/src/config/`

Application configuration:

```
config/
├── widgetConfig.ts        # Widget configuration from Liquid
├── i18nConfig.ts          # i18next setup
└── liquidConfig.ts        # LiquidJS parser initialization
```

### `/src/services/`

API communication layer following the repository pattern:

```
services/
├── api/
│   └── client.ts          # Axios HTTP client with interceptors
├── repositories/          # Data access layer
│   ├── accountRepository.ts
│   └── transactionRepository.ts
└── hooks/                 # TanStack Query hooks
    ├── useAccounts.ts
    └── useTransactions.ts
```

### `/src/store/`

UI state management with Zustand:

```
store/
└── useUIStore.ts          # UI state (filters, modals, selections)
```

:::warning Zustand for UI State Only
Use Zustand exclusively for UI state (filters, modals, active tabs). Server data should be managed with TanStack Query, not Zustand.
:::

### `/src/providers/`

React context providers:

```
providers/
└── QueryProvider.tsx      # TanStack Query configuration
```

### `/src/types/`

Centralized TypeScript definitions:

```
types/
└── index.ts               # All type definitions
```

**Type naming conventions:**
- `Entity` - Domain types
- `ApiEntity` - API response mapping
- `CreateEntityData` / `UpdateEntityData` - Payload types
- `EntityFilters` - Filter parameters

### `/src/locales/`

Internationalization files:

```
locales/
├── en.json               # English translations
└── es.json               # Spanish translations
```

### `/src/styles/`

Widget styles:

```
styles/
└── base.scss             # Widget-specific styles
```

## Configuration Files

### `package.json`

```json
{
  "name": "my-widget",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "vite",
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage",
    "lint": "eslint .",
    "push": "npm run build && npx @modyo/cli@latest push"
  },
  "dependencies": {
    "@dynamic-framework/ui-react": "^2.0.0",
    "@tanstack/react-query": "^5.60.0",
    "axios": "^1.13.0",
    "i18next": "^24.0.0",
    "liquidjs": "^10.24.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-i18next": "^16.0.0",
    "zustand": "^5.0.0"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.5.0",
    "eslint": "^9.0.0",
    "sass-embedded": "^1.93.0",
    "typescript": "^5.9.0",
    "vite": "^7.0.0",
    "vitest": "^3.0.0"
  },
  "engines": {
    "node": ">=22.0.0"
  }
}
```

### `vite.config.ts`

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
  build: {
    outDir: 'build',
    assetsDir: '',
    rollupOptions: {
      output: {
        entryFileNames: 'main.js',
        chunkFileNames: '[name].[hash].chunk.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'main.css';
          }
          return '[name].[hash][extname]';
        },
      },
    },
    chunkSizeWarningLimit: 2000,
    minify: 'esbuild',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
  },
});
```

### `.env.example`

```bash
# API Configuration
VITE_API_BASE_URL=https://api.example.com

# Feature Flags
VITE_ENABLE_DEVTOOLS=true
```

:::tip Vite Environment Variables
Vite uses the `VITE_` prefix for environment variables. Access them via `import.meta.env.VITE_*`.
:::

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

## Best Practices

### 1. Component Organization

**Simple component:**
```
AccountCard.tsx      # Component with collocated styles/tests if small
```

**Complex component:**
```
AccountCard/
├── AccountCard.tsx     # Main component
├── AccountCard.test.tsx # Tests
└── index.ts            # Public export
```

### 2. Naming Conventions

- **Components**: PascalCase (`AccountCard.tsx`)
- **Hooks**: camelCase with `use` prefix (`useAccounts.ts`)
- **Stores**: camelCase with `use` prefix (`useUIStore.ts`)
- **Utils**: camelCase (`formatCurrency.ts`)
- **Types**: PascalCase (`Account`, `ApiAccount`)

### 3. Organized Imports

```typescript
// 1. React and external libraries
import { useState } from 'react';

// 2. Dynamic Framework components
import { DButton, DCard, DIcon } from '@dynamic-framework/ui-react';

// 3. Internal modules (hooks, stores, types)
import { useAccounts } from '../services/hooks/useAccounts';
import { useUIStore } from '../store/useUIStore';
import type { Account } from '../types';

// 4. Styles
import '../styles/base.scss';
```

### 4. State Management Strategy

**UI State (Zustand):**
```typescript
// store/useUIStore.ts
import { create } from 'zustand';

interface UIState {
  selectedAccountId: string | null;
  isModalOpen: boolean;
  setSelectedAccount: (id: string | null) => void;
  toggleModal: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  selectedAccountId: null,
  isModalOpen: false,
  setSelectedAccount: (id) => set({ selectedAccountId: id }),
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
}));
```

**Server State (TanStack Query + Repository):**
```typescript
// services/repositories/accountRepository.ts
import { api } from '../api/client';
import type { Account } from '../../types';

export async function getAccounts(signal?: AbortSignal): Promise<Account[]> {
  const response = await api.get('/accounts', { signal });
  return response.data;
}

// services/hooks/useAccounts.ts
import { useQuery } from '@tanstack/react-query';
import { getAccounts } from '../repositories/accountRepository';

export function useAccounts() {
  return useQuery({
    queryKey: ['accounts'],
    queryFn: ({ signal }) => getAccounts(signal),
  });
}
```

### 5. Separation of Concerns

- **Components**: Presentation and UI interactions only
- **Providers**: Context configuration (Query, i18n)
- **Services**: API communication
- **Store**: UI state only (not server data)
- **Utils**: Pure utility functions
- **Types**: TypeScript definitions

## Entry Point Pattern

### `main.tsx`

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DContextProvider } from '@dynamic-framework/ui-react';

import App from './App';
import './config/i18nConfig';
import './styles/base.scss';

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(
    <StrictMode>
      <DContextProvider>
        <App />
      </DContextProvider>
    </StrictMode>
  );
}
```

### `App.tsx`

```tsx
import { QueryProvider } from './providers/QueryProvider';
import { ErrorBoundary } from './components';

function App() {
  return (
    <QueryProvider>
      <ErrorBoundary>
        {/* Widget content */}
      </ErrorBoundary>
    </QueryProvider>
  );
}

export default App;
```

## Testing

### Test Structure

```
tests/
├── setup.ts              # Vitest setup (jsdom, mocks)
src/
├── components/
│   └── AccountCard.test.tsx  # Collocated component tests
├── utils/
│   └── formatters.test.ts    # Collocated util tests
```

### Test Example

```typescript
// src/components/AccountCard.test.tsx
import { render, screen } from '@testing-library/react';
import { AccountCard } from './AccountCard';

describe('AccountCard', () => {
  it('displays account name', () => {
    render(<AccountCard name="Savings" balance={1000} />);
    expect(screen.getByText('Savings')).toBeInTheDocument();
  });
});
```

## Resources

- [Storybook](https://react.dynamicframework.dev) - Interactive component catalog
- [NPM Package](https://www.npmjs.com/package/@dynamic-framework/ui-react) - Package details
- [Vite Documentation](https://vite.dev) - Build tool documentation
