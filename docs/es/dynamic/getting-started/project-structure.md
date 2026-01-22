---
search: true
---

# Estructura del Proyecto

Comprende cómo se organiza un proyecto de Dynamic Framework y las mejores prácticas para mantenerlo escalable y mantenible.

## Estructura Base

Un widget típico de Dynamic Framework sigue esta estructura:

```
my-widget/
├── src/                      # Código fuente
│   ├── components/          # Componentes reutilizables
│   ├── config/              # Archivos de configuración
│   ├── locales/             # Archivos de traducción (i18n)
│   ├── providers/           # Proveedores de contexto React
│   ├── services/            # Servicios de API
│   ├── store/               # Stores de Zustand (estado UI)
│   ├── styles/              # Estilos SCSS
│   ├── types/               # Definiciones de tipos TypeScript
│   ├── utils/               # Funciones utilitarias
│   ├── App.tsx              # Componente raíz
│   └── main.tsx             # Punto de entrada
├── tests/                   # Archivos de tests
│   └── setup.ts            # Configuración de tests
├── public/                  # Archivos estáticos
│   └── index.html          # Template HTML
├── .env.example            # Template de variables de entorno
├── .eslintrc.js            # Configuración de ESLint
├── tsconfig.json           # Configuración de TypeScript
├── vite.config.ts          # Configuración de Vite
├── package.json            # Dependencias y scripts
└── README.md               # Documentación del proyecto
```

## Directorios Principales

### `/src/components/`

Componentes reutilizables del widget con barrel exports:

```
components/
├── index.ts                # Barrel export
├── ErrorBoundary.tsx       # Wrapper de error boundary
├── DataStateWrapper.tsx    # Manejador de estados loading/error/empty
├── LoadingState.tsx        # Variantes de skeleton de carga
├── ErrorState.tsx          # UI de error con retry
├── EmptyState.tsx          # UI de datos vacíos
└── AccountCard/
    ├── AccountCard.tsx
    ├── AccountCard.test.tsx
    └── index.ts
```

### `/src/config/`

Configuración de la aplicación:

```
config/
├── widgetConfig.ts        # Configuración del widget desde Liquid
├── i18nConfig.ts          # Configuración de i18next
└── liquidConfig.ts        # Inicialización del parser LiquidJS
```

### `/src/services/`

Capa de comunicación con APIs siguiendo el patrón repository:

```
services/
├── api/
│   └── client.ts          # Cliente HTTP Axios con interceptores
├── repositories/          # Capa de acceso a datos
│   ├── accountRepository.ts
│   └── transactionRepository.ts
└── hooks/                 # Hooks de TanStack Query
    ├── useAccounts.ts
    └── useTransactions.ts
```

### `/src/store/`

Gestión de estado UI con Zustand:

```
store/
└── useUIStore.ts          # Estado UI (filtros, modales, selecciones)
```

:::warning Zustand Solo para Estado UI
Usa Zustand exclusivamente para estado de UI (filtros, modales, tabs activos). Los datos del servidor deben manejarse con TanStack Query, no con Zustand.
:::

### `/src/providers/`

Proveedores de contexto React:

```
providers/
└── QueryProvider.tsx      # Configuración de TanStack Query
```

### `/src/types/`

Definiciones centralizadas de TypeScript:

```
types/
└── index.ts               # Todas las definiciones de tipos
```

**Convenciones de nombrado de tipos:**
- `Entity` - Tipos de dominio
- `ApiEntity` - Mapeo de respuesta de API
- `CreateEntityData` / `UpdateEntityData` - Tipos de payload
- `EntityFilters` - Parámetros de filtro

### `/src/locales/`

Archivos de internacionalización:

```
locales/
├── en.json               # Traducciones en inglés
└── es.json               # Traducciones en español
```

### `/src/styles/`

Estilos del widget:

```
styles/
└── base.scss             # Estilos específicos del widget
```

## Archivos de Configuración

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
# Configuración de API
VITE_API_BASE_URL=https://api.example.com

# Feature Flags
VITE_ENABLE_DEVTOOLS=true
```

:::tip Variables de Entorno en Vite
Vite usa el prefijo `VITE_` para variables de entorno. Accede a ellas mediante `import.meta.env.VITE_*`.
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

## Mejores Prácticas

### 1. Organización de Componentes

**Componente simple:**
```
AccountCard.tsx      # Componente con estilos/tests colocados si es pequeño
```

**Componente complejo:**
```
AccountCard/
├── AccountCard.tsx     # Componente principal
├── AccountCard.test.tsx # Tests
└── index.ts            # Export público
```

### 2. Convenciones de Nombrado

- **Componentes**: PascalCase (`AccountCard.tsx`)
- **Hooks**: camelCase con prefijo `use` (`useAccounts.ts`)
- **Stores**: camelCase con prefijo `use` (`useUIStore.ts`)
- **Utils**: camelCase (`formatCurrency.ts`)
- **Tipos**: PascalCase (`Account`, `ApiAccount`)

### 3. Imports Organizados

```typescript
// 1. React y librerías externas
import { useState } from 'react';

// 2. Componentes de Dynamic Framework
import { DButton, DCard, DIcon } from '@dynamic-framework/ui-react';

// 3. Módulos internos (hooks, stores, tipos)
import { useAccounts } from '../services/hooks/useAccounts';
import { useUIStore } from '../store/useUIStore';
import type { Account } from '../types';

// 4. Estilos
import '../styles/base.scss';
```

### 4. Estrategia de Gestión de Estado

**Estado UI (Zustand):**
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

**Estado del Servidor (TanStack Query + Repository):**
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

### 5. Separación de Responsabilidades

- **Components**: Solo presentación e interacciones UI
- **Providers**: Configuración de contexto (Query, i18n)
- **Services**: Comunicación con APIs
- **Store**: Solo estado UI (no datos del servidor)
- **Utils**: Funciones utilitarias puras
- **Types**: Definiciones de TypeScript

## Patrón de Punto de Entrada

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
        {/* Contenido del widget */}
      </ErrorBoundary>
    </QueryProvider>
  );
}

export default App;
```

## Testing

### Estructura de Tests

```
tests/
├── setup.ts              # Setup de Vitest (jsdom, mocks)
src/
├── components/
│   └── AccountCard.test.tsx  # Tests colocados con componentes
├── utils/
│   └── formatters.test.ts    # Tests colocados con utils
```

### Ejemplo de Test

```typescript
// src/components/AccountCard.test.tsx
import { render, screen } from '@testing-library/react';
import { AccountCard } from './AccountCard';

describe('AccountCard', () => {
  it('muestra el nombre de la cuenta', () => {
    render(<AccountCard name="Ahorros" balance={1000} />);
    expect(screen.getByText('Ahorros')).toBeInTheDocument();
  });
});
```

## Recursos

- [Storybook](https://react.dynamicframework.dev) - Catálogo interactivo de componentes
- [NPM Package](https://www.npmjs.com/package/@dynamic-framework/ui-react) - Detalles del paquete
- [Documentación de Vite](https://vite.dev) - Documentación de la herramienta de build
