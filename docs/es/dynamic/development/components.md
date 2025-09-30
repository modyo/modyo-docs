---
search: true
---

# Componentes de Dynamic Framework

Dynamic Framework ofrece más de 30 componentes especializados para la industria financiera, diseñados para cubrir las necesidades más comunes en aplicaciones bancarias y financieras.

## Tipos de Componentes

### Componentes HTML
Los componentes HTML son elementos de interfaz estáticos o con mínima interactividad, ideales para:

- **Sitios públicos** con alto tráfico
- **Páginas de marketing** que requieren SEO
- **Contenido informativo** que no cambia frecuentemente
- **Interfaces simples** sin lógica compleja

#### Características:
- Optimizados para rendimiento
- Compatibles con SEO
- Accesibles por defecto
- Carga rápida y eficiente
- No requieren JavaScript para funcionar

#### Ejemplos de Uso:
```html
<!-- Card de producto bancario -->
<div class="df-card">
  <div class="df-card-body">
    <h3 class="df-card-title">Cuenta de Ahorros</h3>
    <p class="df-card-text">Ahorra con las mejores tasas del mercado</p>
    <a href="#" class="df-btn df-btn-primary">Abrir Cuenta</a>
  </div>
</div>

<!-- Tabla de tasas de interés -->
<table class="df-table">
  <thead>
    <tr>
      <th>Plazo</th>
      <th>Tasa Anual</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>30 días</td>
      <td>3.5%</td>
    </tr>
    <tr>
      <td>90 días</td>
      <td>4.2%</td>
    </tr>
  </tbody>
</table>
```

### Componentes React
Los componentes React proporcionan interactividad avanzada y gestión de estado, perfectos para:

- **Aplicaciones transaccionales** que requieren actualizaciones en tiempo real
- **Formularios complejos** con validación dinámica
- **Dashboards interactivos** con visualización de datos
- **Flujos de usuario** con múltiples pasos

#### Características:
- Gestión de estado compleja
- Actualizaciones en tiempo real
- Integración con APIs
- Componentes reutilizables
- Renderizado condicional

#### Ejemplos de Uso:
```jsx
// Componente de transferencia bancaria
import { TransferForm, AccountSelector, AmountInput } from '@dynamic-framework/ui-react';

function BankTransfer() {
  return (
    <TransferForm onSubmit={handleTransfer}>
      <AccountSelector 
        label="Cuenta Origen"
        accounts={userAccounts}
      />
      <AccountSelector 
        label="Cuenta Destino"
        allowExternal={true}
      />
      <AmountInput 
        currency="USD"
        max={availableBalance}
      />
    </TransferForm>
  );
}

// Componente de estado de cuenta
import { AccountStatement, TransactionList } from '@dynamic-framework/ui-react';

function AccountDashboard() {
  return (
    <AccountStatement accountId={selectedAccount}>
      <TransactionList 
        filterable={true}
        sortable={true}
        paginated={true}
        itemsPerPage={20}
      />
    </AccountStatement>
  );
}
```

## Catálogo de Componentes

### Componentes de Navegación
- **Navbar**: Barra de navegación principal con menús desplegables
- **Sidebar**: Panel lateral para navegación secundaria
- **Breadcrumb**: Indicador de ubicación en la jerarquía
- **Tabs**: Navegación entre secciones relacionadas
- **Pagination**: Control de paginación para listados

### Componentes de Formularios
- **Input**: Campos de texto con validación integrada
- **Select**: Listas desplegables con búsqueda
- **DatePicker**: Selector de fechas con calendario
- **FileUpload**: Carga de documentos con preview
- **Checkbox/Radio**: Controles de selección múltiple y única

### Componentes de Datos
- **Table**: Tablas con ordenamiento y filtros
- **Chart**: Gráficos para visualización de datos
- **Card**: Tarjetas para presentación de información
- **List**: Listas con diferentes estilos de presentación
- **Timeline**: Línea de tiempo para historial de eventos

### Componentes de Feedback
- **Alert**: Mensajes de notificación al usuario
- **Modal**: Ventanas emergentes para acciones importantes
- **Toast**: Notificaciones temporales no intrusivas
- **Progress**: Indicadores de progreso de operaciones
- **Skeleton**: Placeholders durante la carga de contenido

### Componentes Financieros Especializados
- **AccountCard**: Tarjeta de resumen de cuenta
- **TransactionItem**: Elemento de transacción con detalles
- **BalanceDisplay**: Visualización de saldos con formato
- **CurrencyInput**: Campo de entrada para montos
- **CardSelector**: Selector visual de tarjetas de crédito/débito

## Personalización de Componentes

### Temas y Variables CSS
```css
/* Variables globales del tema */
:root {
  --df-primary-color: #004B8D;
  --df-secondary-color: #00A0DF;
  --df-success-color: #28A745;
  --df-danger-color: #DC3545;
  --df-font-family: 'Inter', sans-serif;
  --df-border-radius: 8px;
  --df-spacing-unit: 8px;
}

/* Personalización de componente específico */
.df-card {
  --df-card-bg: var(--df-white);
  --df-card-border: 1px solid var(--df-gray-200);
  --df-card-shadow: 0 2px 4px rgba(0,0,0,0.1);
  --df-card-padding: calc(var(--df-spacing-unit) * 3);
}
```

### Props y Configuración
```jsx
// Personalización mediante props
<Button 
  variant="primary"
  size="large"
  icon="arrow-right"
  loading={isLoading}
  disabled={!isValid}
  fullWidth
>
  Continuar
</Button>

// Configuración global de componentes
import { ConfigProvider } from '@dynamic-framework/ui-react';

<ConfigProvider 
  theme={{
    colors: {
      primary: '#004B8D',
      secondary: '#00A0DF'
    },
    typography: {
      fontFamily: 'Inter, sans-serif'
    }
  }}
>
  <App />
</ConfigProvider>
```

## Composición de Componentes

Los componentes de Dynamic Framework están diseñados para trabajar juntos de manera armoniosa:

```jsx
// Ejemplo de composición para un flujo de apertura de cuenta
import { 
  Stepper, 
  Form, 
  PersonalInfoFields,
  DocumentUpload,
  AccountTypeSelector,
  TermsAndConditions,
  ConfirmationScreen 
} from '@dynamic-framework/ui-react';

function AccountOpening() {
  const steps = [
    { label: 'Información Personal', component: PersonalInfoFields },
    { label: 'Documentación', component: DocumentUpload },
    { label: 'Tipo de Cuenta', component: AccountTypeSelector },
    { label: 'Términos', component: TermsAndConditions },
    { label: 'Confirmación', component: ConfirmationScreen }
  ];

  return (
    <Stepper steps={steps} onComplete={handleAccountCreation}>
      {({ CurrentStep, navigation }) => (
        <Form>
          <CurrentStep />
          <navigation.Controls />
        </Form>
      )}
    </Stepper>
  );
}
```

## Accesibilidad

Todos los componentes de Dynamic Framework cumplen con los estándares WCAG 2.1 nivel AA:

- **Navegación por teclado** completa
- **Lectores de pantalla** compatibles
- **Contraste de colores** adecuado
- **Etiquetas ARIA** apropiadas
- **Mensajes de error** descriptivos

## Rendimiento

Los componentes están optimizados para rendimiento:

- **Lazy loading** de componentes pesados
- **Code splitting** automático
- **Memorización** de cálculos costosos
- **Virtual scrolling** para listas largas
- **Optimización de re-renderizados**

## Documentación y Soporte

Cada componente incluye:

- Documentación detallada de props y métodos
- Ejemplos de código interactivos
- Guías de mejores prácticas
- Casos de uso comunes
- Playground para experimentación

Accede a la documentación completa en [dynamic.modyo.com/docs](https://dynamic.modyo.com/docs)