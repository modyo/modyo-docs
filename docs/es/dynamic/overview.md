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
│   ├── components/     # 48+ componentes UI
│   ├── hooks/         # Custom React hooks
│   └── utils/         # Utilidades
├── styles/            # Sistema de diseño
│   ├── theme/         # Variables y temas
│   └── components/    # Estilos por componente
└── widgets/           # Widgets standalone
```

### Stack Tecnológico

- **React 18+**: Con Hooks, Suspense y Concurrent Features
- **TypeScript**: Tipado estático completo
- **Bootstrap 5.3+**: Base del sistema de diseño
- **Webpack 5**: Module Federation para micro frontends
- **CSS Modules**: Estilos encapsulados
- **PostCSS**: Procesamiento avanzado de CSS

## Componentes Core

### Categorías de Componentes

1. **Layout Components**
   - Container, Grid, Row, Col
   - Flexbox utilities
   - Spacing system

2. **Data Display**
   - Tables con sorting y filtering
   - Cards con múltiples variantes
   - Lists y ListGroups

3. **Forms & Inputs**
   - Input con validación integrada
   - Select, Checkbox, Radio
   - DatePicker, TimePicker
   - Form validation hooks

4. **Navigation**
   - DTabs para navegación por pestañas
   - DStepper para flujos multi-paso
   - DPaginator para paginación

5. **Feedback**
   - DAlert y DToast
   - DModal y DOffcanvas
   - DProgress indicadores
   - DPopover y DTooltip

6. **Financial Components**
   - DCreditCard visualización
   - DCurrencyText formateo
   - DInputCurrency para montos
   - DPasswordStrengthMeter

## Patrones de Implementación

### Component API Pattern

```jsx
// Composición flexible
<Card>
  <Card.Header>
    <Card.Title>Título</Card.Title>
  </Card.Header>
  <Card.Body>
    Contenido
  </Card.Body>
  <Card.Footer>
    <Button>Acción</Button>
  </Card.Footer>
</Card>
```

### Hook Pattern

```jsx
// Custom hooks para lógica reutilizable
const { 
  data, 
  loading, 
  error, 
  refetch 
} = useApiData('/api/accounts');
```

### Context Provider Pattern

```jsx
// Configuración centralizada
import { DContextProvider } from '@dynamic-framework/ui-react';

<DContextProvider>
  <App />
</DContextProvider>
```

## Sistema de Diseño

### Design Tokens

```scss
// Variables CSS personalizables
:root {
  // Colores
  --df-primary: #0066ff;
  --df-secondary: #6c757d;
  
  // Espaciado
  --df-spacing-xs: 0.25rem;
  --df-spacing-sm: 0.5rem;
  --df-spacing-md: 1rem;
  
  // Tipografía
  --df-font-family: 'Inter', sans-serif;
  --df-font-size-base: 1rem;
  
  // Bordes
  --df-border-radius: 0.375rem;
  --df-border-width: 1px;
}
```

### Responsive Breakpoints

```scss
// Bootstrap 5 breakpoints
$breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
```

## Micro Frontends

### Module Federation Config

```javascript
// webpack.config.js
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'app',
      filename: 'remoteEntry.js',
      exposes: {
        './Component': './src/Component'
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        '@dynamic-framework/ui-react': { singleton: true }
      }
    })
  ]
};
```

### Lazy Loading

```jsx
// Code splitting automático
const Dashboard = lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Dashboard />
    </Suspense>
  );
}
```

## Performance

### Optimizaciones Incluidas

- **Tree Shaking**: Solo importa lo necesario
- **Code Splitting**: Carga por demanda
- **Memoization**: React.memo en componentes
- **Virtual Scrolling**: Para listas largas
- **Image Optimization**: Lazy loading de imágenes
- **CSS-in-JS**: Estilos críticos inline

### Bundle Size

```
@dynamic-framework/ui-react: ~150KB gzipped
├── react: 42KB
├── components: 85KB
└── styles: 23KB
```

## Testing

### Testing Stack

```json
{
  "jest": "^29.0.0",
  "@testing-library/react": "^14.0.0",
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
# Webpack Dev Server con HMR
npm start
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
# Inicializar proyecto
npx @modyo/cli init

# Push a Modyo
npx @modyo/cli push

# Pull from Modyo
npx @modyo/cli pull
```

### Widget Registration

```javascript
// Registro de widget en Modyo
window.registerWidget({
  name: 'MyWidget',
  component: MyWidget,
  props: {
    // Props del widget
  }
});
```

## Versionado

### Semantic Versioning

```
@dynamic-framework/ui-react@1.27.0
│                           │ │ │
│                           │ │ └─ Patch: Bug fixes
│                           │ └─── Minor: New features
│                           └───── Major: Breaking changes
```

### Release Cycle

- **Patch releases**: Semanalmente
- **Minor releases**: Mensualmente
- **Major releases**: Anualmente

## Recursos Técnicos

- [API Reference](https://dynamic.modyo.com/docs)
- [Storybook](https://react.dynamicframework.dev)
- [NPM Package](https://www.npmjs.com/package/@dynamic-framework/ui-react)