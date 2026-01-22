---
search: true
---

# Visión General Técnica

Dynamic Framework es un framework de componentes React especializado para aplicaciones financieras, construido sobre Bootstrap 5 y optimizado para arquitecturas de micro frontends.

## Arquitectura

### Estructura de Componentes

```
@dynamic-framework/
├── ui-react/           # Componentes React
│   ├── components/     # 43 componentes UI
│   ├── hooks/         # Custom React hooks
│   └── utils/         # Utilidades
├── styles/            # Sistema de diseño
│   ├── theme/         # Variables y temas
│   └── components/    # Estilos por componente
└── widgets/           # Widgets standalone
```

### Stack Tecnológico

- **React 19.x**: Con Hooks, Suspense y Concurrent Features (requiere ~19.2.1)
- **TypeScript**: Tipado estático completo
- **Bootstrap 5.3.8**: Base del sistema de diseño
- **Vite**: Builds rápidos y HMR para desarrollo
- **CSS Modules**: Estilos encapsulados
- **PostCSS**: Procesamiento avanzado de CSS

## Componentes Core

### Categorías de Componentes

1. **Componentes de Layout**
   - DBox, DCard, DLayout, DCollapse
   - Utilidades Flexbox
   - Sistema de espaciado

2. **Componentes de Navegación**
   - DTabs para navegación por pestañas
   - DStepper para flujos multi-paso
   - DPaginator para paginación

3. **Componentes de Formulario**
   - DInput, DInputPassword, DInputCurrency
   - DSelect, DInputSelect, DDatePicker
   - DInputCheck, DInputSwitch, DOtp

4. **Componentes de Visualización de Datos**
   - DListGroup, DTimeline, DCarousel
   - DCurrencyText, DProgress, DVoucher

5. **Componentes de Retroalimentación**
   - DAlert, DToast, DModal, DOffcanvas
   - DPopover, DTooltip, DDropdown

6. **Componentes Visuales**
   - DAvatar, DBadge, DChip
   - DButton, DButtonIcon, DIcon

7. **Componentes Financieros**
   - DCreditCard visualización
   - DPasswordStrengthMeter

## Patrones de Implementación

### Component API Pattern

```jsx
// Composición flexible
<DCard>
  <DCard.Header>
    <h5 className="card-title mb-0">Título</h5>
  </DCard.Header>
  <DCard.Body>
    Contenido
  </DCard.Body>
  <DCard.Footer>
    <DButton text="Acción" />
  </DCard.Footer>
</DCard>
```

## Sistema de Diseño

### Design Tokens

Dynamic Framework usa las propiedades CSS personalizadas (variables) de Bootstrap 5 con el prefijo `--bs-`:

```css
:root {
  /* Colores del tema */
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-danger: #dc3545;
  --bs-warning: #ffc107;
  --bs-info: #0dcaf0;

  /* Tipografía */
  --bs-body-font-family: var(--bs-font-sans-serif);
  --bs-body-font-size: 1rem;
  --bs-body-font-weight: 400;
  --bs-body-line-height: 1.5;

  /* Bordes */
  --bs-border-radius: 0.375rem;
  --bs-border-radius-sm: 0.25rem;
  --bs-border-radius-lg: 0.5rem;
  --bs-border-width: 1px;
  --bs-border-color: #dee2e6;
}
```

Para personalizar estos valores, sobrescríbelos en tu CSS o SCSS. Consulta [Sistema de Temas](customization/theming.html) para guías detalladas de personalización y el [Storybook](https://react.dynamicframework.dev) para una lista completa de variables disponibles.

### Breakpoints Responsivos

Dynamic Framework usa los breakpoints estándar de Bootstrap 5:

| Breakpoint | Infijo de clase | Dimensiones |
|------------|-----------------|-------------|
| Extra small | Ninguno | <576px |
| Small | `sm` | ≥576px |
| Medium | `md` | ≥768px |
| Large | `lg` | ≥992px |
| Extra large | `xl` | ≥1200px |
| Extra extra large | `xxl` | ≥1400px |

#### Usando Breakpoints en CSS

```scss
// SCSS con mixins de Bootstrap
@import "bootstrap/scss/mixins/breakpoints";

.my-component {
  padding: 1rem;

  @include media-breakpoint-up(md) {
    padding: 2rem;
  }

  @include media-breakpoint-up(lg) {
    padding: 3rem;
  }
}
```

#### Usando Breakpoints en React

Dynamic exporta el hook `useScreenDimensions` para lógica responsiva en componentes:

```tsx
import { useScreenDimensions } from '@dynamic-framework/ui-react';

function ResponsiveComponent() {
  const { isMobile, isTablet, isDesktop } = useScreenDimensions();

  return (
    <div>
      {isMobile && <MobileLayout />}
      {isTablet && <TabletLayout />}
      {isDesktop && <DesktopLayout />}
    </div>
  );
}
```

## Micro Frontends

Los widgets de Dynamic Framework son micro frontends autocontenidos que se despliegan como bundles independientes en la plataforma Modyo.

### Arquitectura de Widgets

Cada widget es una aplicación React independiente con su propio punto de entrada:

```
my-widget/
├── src/
│   ├── main.tsx         # Punto de entrada
│   ├── App.tsx          # Componente raíz
│   ├── components/      # Componentes del widget
│   ├── providers/       # Proveedores React
│   ├── services/        # Servicios de API
│   └── store/           # Stores de Zustand
├── public/
│   └── index.html       # Template de desarrollo
└── vite.config.ts       # Configuración de build
```

### Patrón de Punto de Entrada

Los widgets usan una arquitectura basada en proveedores con `main.tsx` como punto de entrada:

```tsx
// src/main.tsx
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

```tsx
// src/App.tsx
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

Este patrón asegura:
- Composición correcta de proveedores (Dynamic Context, React Query, Error Boundary)
- Inicialización de configuración al importar
- Modo estricto para verificaciones en desarrollo

### Integración con Modyo

Los widgets se despliegan en Modyo usando el Modyo CLI. La plataforma maneja el hosting de bundles, versionado e inyección en páginas automáticamente.

La configuración puede pasarse a los widgets mediante variables Liquid (ver [Patrón de Configuración con Liquid](development/widgets.html#patron-de-configuracion-con-liquid)).

### Cuándo Usar Code Splitting Interno

Para widgets más grandes con múltiples vistas, usa React.lazy para rutas internas:

```tsx
// Solo para widgets con múltiples rutas internas
import { lazy, Suspense } from 'react';
import { DProgress } from '@dynamic-framework/ui-react';

const AccountDetails = lazy(() => import('./views/AccountDetails'));
const TransferForm = lazy(() => import('./views/TransferForm'));

function App() {
  return (
    <Suspense fallback={<DProgress />}>
      <Routes>
        <Route path="/" element={<AccountDetails />} />
        <Route path="/transfer" element={<TransferForm />} />
      </Routes>
    </Suspense>
  );
}
```

:::tip Cuándo Dividir
Usa code splitting interno solo cuando tu widget tiene múltiples vistas distintas. Para widgets simples de una sola vista, el overhead no vale la pena.
:::

## Testing

### Testing Stack

```json
{
  "jest": "^29.7.0",
  "@testing-library/react": "^16.3.0",
  "@testing-library/jest-dom": "^6.0.0",
  "cypress": "^13.0.0"
}
```

### Testing Patterns

```jsx
// Unit testing
describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});

// Integration testing
describe('DInput', () => {
  it('validates input correctly', async () => {
    const onChange = jest.fn();
    render(<DInput id="test" onChange={onChange} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });

    await waitFor(() => {
      expect(onChange).toHaveBeenCalled();
    });
  });
});
```

## Build Tools

### Development Server

```bash
# Vite dev server con HMR
npm run start
# Disponible en http://localhost:8080
```

### Production Build

```bash
# Optimized production build
npm run build
# Output en dist/
```

### Análisis de Bundle

```bash
# Bundle analyzer
npm run analyze
```

## Integración con Modyo

### Modyo CLI

```bash
# Push widget a Modyo
npx @modyo/cli push
```

Consulta la [documentación del Modyo CLI](/es/platform/tools/cli.html) para todos los comandos y opciones disponibles.

## Versionado

### Semantic Versioning

```
@dynamic-framework/ui-react@2.1.1
│                           │ │ │
│                           │ │ └─ Patch: Bug fixes
│                           │ └─── Minor: New features
│                           └───── Major: Breaking changes
```

## Recursos Técnicos

- [Storybook](https://react.dynamicframework.dev)
- [NPM Package](https://www.npmjs.com/package/@dynamic-framework/ui-react)