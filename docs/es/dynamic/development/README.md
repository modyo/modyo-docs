---
search: true
---

# Desarrollo con Dynamic Framework

Esta sección cubre todos los aspectos técnicos del desarrollo con Dynamic Framework, desde componentes hasta integraciones avanzadas.

## Contenido de la Sección

### [Componentes](components.html)
Catálogo completo de 43 componentes React especializados:
- Componentes de layout y navegación
- Componentes de formularios e inputs
- Componentes de feedback y visuales
- Componentes financieros especializados

### [Integración con APIs](api-integration.html)
Conecta tu aplicación con servicios backend:
- Configuración del cliente API
- Patrón repository
- Hooks con TanStack Query
- Manejo de errores

## Principios de Desarrollo

1. **Basado en componentes**: Componentes reutilizables y aislados
2. **TypeScript**: Tipado estático completo para seguridad
3. **Accesibilidad**: Componentes compatibles con WCAG 2.1
4. **Mobile First**: Diseño responsive desde el inicio

## Patrones de Desarrollo

### Composición de Componentes

```tsx
import { DCard, DCurrencyText, DButton } from '@dynamic-framework/ui-react';

function AccountBalance({ account }: { account: Account }) {
  return (
    <DCard>
      <DCard.Header>
        <h5 className="card-title mb-0">{account.name}</h5>
      </DCard.Header>
      <DCard.Body>
        <DCurrencyText value={account.balance} />
      </DCard.Body>
    </DCard>
  );
}
```

### Gestión de Estado

```tsx
// Estado del servidor con TanStack Query
const { data: accounts, isLoading, error } = useAccounts();

// Estado de UI con Zustand
const { selectedAccountId, setSelectedAccountId } = useUIStore();
```

### Manejo de Errores

```tsx
// Error boundaries para componentes
<ErrorBoundary fallback={<ErrorState onRetry={refetch} />}>
  <AccountList />
</ErrorBoundary>

// Estados de datos en queries
if (isLoading) return <LoadingState />;
if (error) return <ErrorState message={error.message} onRetry={refetch} />;
if (!data?.length) return <EmptyState />;
```

## Testing

- **Unit Testing**: Vitest + React Testing Library
- **Visual Testing**: Storybook
- **Integration Testing**: Cypress (opcional)

```bash
# Ejecutar tests
npm run test

# Modo watch
npm run test:watch
```

## Recursos

- [Storybook](https://react.dynamicframework.dev) - Catálogo interactivo de componentes
- [NPM Package](https://www.npmjs.com/package/@dynamic-framework/ui-react) - Registro de paquetes
- [Soporte](https://support.modyo.com) - Soporte técnico

## Próximos Pasos

- Explora el [catálogo de componentes](components.html)
- Aprende sobre [personalización](../customization/)
- Implementa tu primera [integración con API](api-integration.html)
