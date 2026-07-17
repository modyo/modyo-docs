---
search: true
---

# Componentes de Dynamic Framework

Dynamic Framework ofrece más de 46 componentes React especializados para la industria financiera, diseñados para cubrir las necesidades más comunes en aplicaciones bancarias y financieras.

## Catálogo de Componentes

Explora todos los componentes de forma interactiva en nuestro [Storybook](https://react.dynamicframework.dev).

### Componentes de Layout
- **DBox**: Contenedor con opciones de estilo flexibles
- **DCard**: Contenedor de tarjeta con sub-componentes Header, Body y Footer
- **DLayout**: Sistema de layout de página con LayoutPane para diseños responsivos
- **DCollapse**: Secciones de contenido colapsables (soporta modos controlado y no controlado)

### Componentes de Navegación
- **DTabs**: Navegación por pestañas con DTabContent para cambio de paneles
- **DStepper**: Navegación multi-paso (con variantes DStepperDesktop y DStepperMobile)
- **DPaginator**: Control de paginación para listados

### Componentes de Formulario
- **DInput**: Input de texto con estados de validación
- **DInputSearch**: Input de búsqueda con debounce integrado (reintroducido en v2.6)
- **DInputCheck**: Input de checkbox
- **DInputSwitch**: Input de toggle switch
- **DInputCounter**: Contador numérico con incremento/decremento
- **DInputCurrency**: Input formateado para moneda
- **DInputMask**: Input con máscara para datos formateados
- **DInputPassword**: Input de contraseña con toggle de visibilidad
- **DInputPhone**: Input de número telefónico internacional
- **DInputPin**: Input de PIN/código con cajas de dígitos individuales
- **DInputRange**: Input de rango deslizante
- **DInputSelect**: Input de selección desplegable
- **DSelect**: Select avanzado con búsqueda (usa react-select)
- **DDatePicker**: Selector de fecha con calendario
- **DPasswordStrengthMeter**: Indicador de fortaleza de contraseña con validación
- **DBoxFile**: Carga de archivos con drag-and-drop

### Componentes de Visualización de Datos
- **DListGroup**: Contenedor de lista con DListGroupItem
- **DTimeline**: Línea de tiempo para historial de eventos
- **DCarousel**: Carrusel/slider con DCarouselSlide
- **DCurrencyText**: Visualización de moneda formateada
- **DProgress**: Indicador de barra de progreso

### Componentes de Retroalimentación
- **DAlert**: Mensajes de notificación al usuario
- **DModal**: Diálogo modal con Header, Body, Footer
- **DOffcanvas**: Panel deslizante con Header, Body, Footer
- **DToast**: Notificaciones toast temporales (con DToastContainer)
- **DPopover**: Popover contextual
- **DTooltip**: Tooltips al pasar el mouse
- **DDropdown**: Menú desplegable

### Componentes Visuales
- **DAvatar**: Visualización de avatar de usuario
- **DBadge**: Badges de estado/conteo
- **DChip**: Elemento compacto para etiquetas/filtros
- **DButton**: Botón de acción con estado de carga
- **DButtonIcon**: Botón solo con icono
- **DIcon**: Componente de icono (usa Lucide Icons)

### Componentes Financieros Especializados
- **DCreditCard**: Visualización de tarjeta de crédito/débito con animación flip
- **DVoucher**: Componente de visualización de voucher/recibo
- **DOtp**: Input de contraseña de un solo uso

### Componentes de Estado y Utilidad
- **DDataStateWrapper**: Manejo declarativo de estados loading/error/empty al renderizar listas (exporta también `EmptyState`, `ErrorState`, `LoadingState`)
- **DErrorBoundary**: Límite de error con fallback configurable (basado en `react-error-boundary`)

## Uso de Componentes

Todos los componentes se importan desde `@dynamic-framework/ui-react`:

```tsx
import {
  DButton,
  DCard,
  DInput,
  DAlert
} from '@dynamic-framework/ui-react';

function MyComponent() {
  return (
    <DCard>
      <DCard.Header>
        <h5>Detalles de la Cuenta</h5>
      </DCard.Header>
      <DCard.Body>
        <DInput
          id="account-name"
          label="Nombre de la Cuenta"
          placeholder="Ingresa el nombre de la cuenta"
        />
        <DButton color="primary">
          Guardar Cambios
        </DButton>
      </DCard.Body>
    </DCard>
  );
}
```

## Props de Componentes

### Props Comunes

La mayoría de los componentes comparten estas props comunes:

| Prop | Tipo | Descripción |
|------|------|-------------|
| `className` | `string` | Clases CSS adicionales |
| `style` | `CSSProperties` | Estilos en línea |
| `id` | `string` | ID del elemento |

### Variantes de Color

Los componentes que soportan colores usan la prop `color`:

```tsx
<DButton color="primary">Primario</DButton>
<DButton color="secondary">Secundario</DButton>
<DButton color="success">Éxito</DButton>
<DButton color="danger">Peligro</DButton>
<DButton color="warning">Advertencia</DButton>
<DButton color="info">Info</DButton>
```

### Variantes de Tamaño

Los componentes que soportan tamaños usan la prop `size`:

```tsx
<DButton size="sm">Pequeño</DButton>
<DButton>Por defecto</DButton>
<DButton size="lg">Grande</DButton>
```

#### Tamaños Responsive (v2.3)

`DButton` y `DBadge` aceptan un objeto responsive en `size` con valores por breakpoint (`xs`, `sm`, `md`, `lg`, `xl`, `xxl`), igual que `DIcon`:

```tsx
<DButton size={{ xs: 'sm', md: 'lg' }} text="Continuar" />
<DBadge size={{ xs: 'sm', lg: 'md' }} color="success">Activo</DBadge>
```

### Variante Soft (v2.5)

`DButton` soporta `variant="soft"`, que genera la clase `.btn-soft-{color}` para un estilo de fondo tenue. Combina con `color` y `size`:

```tsx
<DButton variant="soft" color="primary" text="Acción suave" />
<DButton variant="soft" color="danger" text="Eliminar" />
```

## Componentes de Estado (2.1-2.7)

### DInputSearch

Input de búsqueda con debounce integrado. Extiende `DInput` (omite `onChange`/`defaultValue`/`type`). A diferencia de `DInput`, su `onChange` entrega directamente el **string**, no el evento.

**Props propias:**

| Prop | Tipo | Descripción |
|------|------|-------------|
| `debounceMs` | `number` | Retardo del debounce (default `300`) |
| `onChange` | `(value: string) => void` | Se dispara tras el debounce, recibe el string |
| `onImmediateChange` | `(value: string) => void` | Se dispara en cada tecla, sin debounce |
| `value` | `string` | Modo controlado |
| `defaultValue` | `string` | Modo no controlado |
| `placeholder` | `string` | Texto placeholder (default `'Search...'`) |

```tsx
import { DInputSearch } from '@dynamic-framework/ui-react';

// No controlado, con debounce por defecto (300ms)
<DInputSearch
  label="Buscar"
  placeholder="Buscar cuentas..."
  onChange={(value) => fetchResults(value)}       // string, tras debounce
  onImmediateChange={(value) => setQuery(value)}  // string, inmediato
/>

// Controlado + debounce personalizado
<DInputSearch
  value={query}
  debounceMs={500}
  onChange={(value) => search(value)}
/>
```

### DDataStateWrapper

Envuelve el renderizado de una lista y muestra automáticamente los estados de loading, error y empty. Exporta también los sub-componentes `EmptyState`, `ErrorState` y `LoadingState` para usarlos por separado.

**Props (`DDataStateWrapperProps<T>`):**

| Prop | Tipo | Descripción |
|------|------|-------------|
| `isLoading` | `boolean` | Estado de carga |
| `isError` | `boolean` | Estado de error |
| `data` | `T[] \| undefined` | Datos a renderizar |
| `onRetry` | `() => void` | Callback de reintento |
| `messages` | `DDataStateMessages` | `{ loading?, empty?, error?, retry? }` personalizables |
| `renderLoading` / `renderEmpty` / `renderError` | `ReactNode \| (() => ReactNode)` | Override total de cada estado |
| `children` | `(data: T[]) => ReactNode` | Render de la lista con datos garantizados |

```tsx
import { DDataStateWrapper } from '@dynamic-framework/ui-react';

<DDataStateWrapper
  isLoading={query.isLoading}
  isError={query.isError}
  data={query.data}
  onRetry={query.refetch}
  messages={{
    loading: 'Cargando movimientos...',
    empty: 'No hay movimientos',
    error: 'No pudimos cargar los movimientos',
    retry: 'Reintentar',
  }}
>
  {(movimientos) => (
    <DListGroup>
      {movimientos.map((m) => <DListGroupItem key={m.id}>{m.title}</DListGroupItem>)}
    </DListGroup>
  )}
</DDataStateWrapper>
```

> Encaja con el patrón TanStack Query. Ver [Integración con APIs](api-integration.html#manejo-de-estados-con-ddatastatewrapper).

### DErrorBoundary

Límite de error con fallback configurable, basado en `react-error-boundary`. La librería también exporta el hook `useErrorBoundary`.

**Props (`DErrorBoundaryProps`):**

| Prop | Tipo | Descripción |
|------|------|-------------|
| `name` | `string` | Nombre identificador del boundary |
| `fallback` | `(props: FallbackProps) => ReactNode` | Override del fallback por defecto |
| `onError` | `(error: unknown, info: ErrorInfo) => void` | Callback al capturar un error |
| `children` | `ReactNode` | Contenido protegido |

```tsx
import { DErrorBoundary } from '@dynamic-framework/ui-react';

<DErrorBoundary
  name="dashboard"
  onError={(error, info) => logError(error, info)}
>
  <Dashboard />
</DErrorBoundary>
```

## Cambios de API en Componentes Existentes (2.1-2.7)

### DVoucher — icono y href (v2.2)

- `icon` acepta `false | null | string | Partial<DIconProps>`: un nombre de Lucide, un objeto de props de `DIcon`, o `false`/`null` para ocultarlo.
- `amount`, `amountDetails` (`ReactNode`) y `title` (requerido).
- Los botones del voucher soportan `href` además de `onClick`.

```tsx
<DVoucher
  icon={{ icon: 'CircleCheckBig', color: 'success' }}
  title="Pago Exitoso"
  amount="$125.00"
/>
```

### DOffcanvas — responsive (v2.7)

- `openFrom`: además de `'start' | 'end' | 'top' | 'bottom'`, acepta un objeto responsive `{ xs?, sm?, md?, lg?, xl?, xxl? }`.
- `width` / `height`: aceptan cualquier CSS length (`'320px'`, `'50vw'`, `'100%'`) o un `ResponsiveProp`.

```tsx
<DOffcanvas
  openFrom={{ xs: 'bottom', md: 'end' }}
  width={{ xs: '100%', md: '480px' }}
/>
```

### DCarousel — flechas personalizadas (v2.7)

`iconArrowLeft` / `iconArrowRight` aceptan las props de `DIcon`:

```tsx
<DCarousel
  iconArrowLeft={{ icon: 'ArrowLeft', color: 'primary' }}
  iconArrowRight={{ icon: 'ArrowRight', color: 'primary' }}
>
  {/* slides */}
</DCarousel>
```

## Hooks Exportados por la Librería

Estos hooks son **realmente exportados** desde `@dynamic-framework/ui-react`:

```tsx
import {
  // Hooks de contexto
  useDContext,           // Acceso a valores de DContextProvider
  useDPortalContext,     // Acceso al contexto de portal para modales

  // Hooks específicos de componentes
  useDToast,             // Notificaciones toast programáticas
  useConfirmModal,       // Confirmación programática (requiere DConfirmModalContainer)
  useTabContext,         // Acceso al estado de tabs dentro de DTabs
  useErrorBoundary,      // Control de error boundary (de react-error-boundary)

  // Hooks de moneda
  useFormatCurrency,     // Utilidades de formateo de moneda
  useInputCurrency,      // Manejo de input de moneda

  // Hooks responsivos
  useMediaQuery,         // Detección de media query personalizado
  useMediaBreakpointUpSm,  // Detección de breakpoint (sm y superior)
  useMediaBreakpointUpMd,  // Detección de breakpoint (md y superior)
  useMediaBreakpointUpLg,  // Detección de breakpoint (lg y superior)
  useMediaBreakpointUpXl,  // Detección de breakpoint (xl y superior)
  useMediaBreakpointUpXxl, // Detección de breakpoint (xxl y superior)

  // Hooks utilitarios
  useStackState,         // Gestión de estado basada en stack
  usePortal,             // Gestión de portales
  useItemSelection,      // Gestión de selección de items en listas
} from '@dynamic-framework/ui-react';
```

### Utilidades Adicionales

```tsx
import {
  getErrorMessage,       // Extraer mensaje de error de errores desconocidos
} from '@dynamic-framework/ui-react';
```

:::warning Patrones de Implementación vs Exports de la Librería
Hooks como `useApi`, `useAccounts`, o `useFormValidation` mostrados en la documentación son **patrones de implementación** que creas en tu proyecto, NO exports de la librería. Ver [Integración con APIs](api-integration.html) para ejemplos de patrones.
:::

### useConfirmModal — confirmación programática

Hook para abrir un modal de confirmación desde código. Requiere montar `DConfirmModalContainer` una vez cerca de la raíz (junto al `DContextProvider`) y estar dentro de `DContextProvider`.

**Config (`UseConfirmModalConfig`):**

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `title` / `message` | `string` | Título y mensaje del modal |
| `confirmLabel` / `cancelLabel` | `string` | Textos de los botones |
| `confirmColor` | `'primary' \| 'danger' \| 'warning'` | Color del botón de confirmación |
| `onConfirm` | `() => void \| Promise<void>` | Callback de confirmación (requerido) |
| `onClose` | `() => void` | Callback al cerrar |
| `critical` | `{ code: string; codeLabel?: string; inputPlaceholder?: string }` | Confirmación crítica que exige teclear un código exacto |

El hook retorna `{ open: () => void }`.

```tsx
import { useConfirmModal, DConfirmModalContainer } from '@dynamic-framework/ui-react';

// 1. Montar el contenedor una vez (junto a DContextProvider)
<DConfirmModalContainer />

// 2. Usar el hook
function DeleteAccountButton() {
  const confirm = useConfirmModal({
    title: 'Eliminar cuenta',
    message: 'Esta acción no se puede deshacer.',
    confirmColor: 'danger',
    confirmLabel: 'Eliminar',
    critical: { code: 'ELIMINAR CUENTA' }, // el usuario debe teclear esto
    onConfirm: async () => { await deleteAccount(); },
  });

  return <DButton color="danger" text="Eliminar" onClick={confirm.open} />;
}
```

## Context Provider

Envuelve tu aplicación con `DContextProvider` para configuración global:

```tsx
import { DContextProvider } from '@dynamic-framework/ui-react';

function App() {
  return (
    <DContextProvider>
      <TuApp />
    </DContextProvider>
  );
}
```

## Sistema de Iconos

Dynamic UI 2.0 usa [Lucide Icons](https://lucide.dev), una librería de iconos moderna y consistente con más de 1000 iconos. Usa el componente `DIcon` para renderizar iconos.

:::danger Crítico: Formato PascalCase Requerido
Los iconos **deben** usar formato PascalCase. Usar kebab-case mostrará un "?" como placeholder.
:::

### Uso Básico

```tsx
import { DIcon } from '@dynamic-framework/ui-react';

// ✅ Correcto - PascalCase
<DIcon icon="Check" />
<DIcon icon="AlertCircle" />
<DIcon icon="ArrowRight" />
<DIcon icon="CreditCard" />

// ❌ Incorrecto - kebab-case (mostrará "?")
<DIcon icon="check" />
<DIcon icon="alert-circle" />
```

### Tamaño de Iconos

Usa la prop `size` con valores CSS exactos:

```tsx
<DIcon icon="Home" size="1rem" />    {/* 16px */}
<DIcon icon="Home" size="1.5rem" />  {/* 24px - por defecto */}
<DIcon icon="Home" size="2rem" />    {/* 32px */}
<DIcon icon="Home" size="48px" />    {/* 48px */}
```

#### Tamaños Responsivos

Los iconos soportan tamaños responsivos con valores específicos por breakpoint:

```tsx
<DIcon
  icon="Home"
  size={{
    xs: "1rem",      // Móvil
    md: "1.5rem",    // Tablet
    lg: "2rem"       // Desktop
  }}
/>
```

Breakpoints disponibles: `xs`, `sm`, `md`, `lg`, `xl`, `xxl`

### Colores de Iconos

Los iconos heredan su color de la propiedad CSS `color` del padre por defecto. Usa la prop `color` para colores del tema:

```tsx
<DIcon icon="Check" color="success" />
<DIcon icon="X" color="danger" />
<DIcon icon="AlertCircle" color="warning" />
<DIcon icon="Info" color="info" />
<DIcon icon="Star" color="primary" />
```

Para colores personalizados, usa CSS:

```tsx
<DIcon icon="Heart" style={{ color: '#e91e63' }} />
```

### Iconos Personalizados (v2.7)

Además de los iconos de Lucide, `DIcon` acepta iconos propios de dos formas:

**1. Pasar un componente React directamente.** La prop `icon` acepta `string | IconComponent`:

```tsx
import { MiIconoSvg } from './icons';

<DIcon icon={MiIconoSvg} />
```

**2. Registrar iconos por nombre** en `DContextProvider` con la prop `iconRegistry`:

```tsx
const iconRegistry = { NMChevron: MiIconoSvg };

<DContextProvider iconRegistry={iconRegistry}>
  <DIcon icon="NMChevron" />   {/* resuelve desde el registry */}
  <DIcon icon="Home" />        {/* fallback a Lucide */}
</DContextProvider>
```

El `iconRegistry` **tiene prioridad sobre Lucide** cuando el nombre coincide en ambos. Si el nombre no está en el registry, cae a Lucide.

### Encontrar Iconos

Explora todos los iconos disponibles en [lucide.dev/icons](https://lucide.dev/icons). Cuando encuentres un icono:

1. Nota el nombre del icono (ej. `arrow-right`)
2. Convierte a PascalCase (ej. `ArrowRight`)
3. Usa en DIcon: `<DIcon icon="ArrowRight" />`

### Iconos por Categoría

#### Navegación
`Home`, `Menu`, `X`, `ChevronLeft`, `ChevronRight`, `ChevronUp`, `ChevronDown`, `ArrowLeft`, `ArrowRight`, `ExternalLink`, `MoreHorizontal`, `MoreVertical`

#### Acciones
`Plus`, `Minus`, `Check`, `X`, `Edit`, `Pencil`, `Trash2`, `Copy`, `Download`, `Upload`, `Share`, `Send`, `Save`, `RefreshCw`

#### Usuario y Cuenta
`User`, `Users`, `UserPlus`, `UserMinus`, `UserCheck`, `LogIn`, `LogOut`, `Key`, `Lock`, `Unlock`, `Shield`, `Settings`

#### Comunicación
`Mail`, `MessageSquare`, `MessageCircle`, `Phone`, `Bell`, `BellOff`, `AtSign`

#### Media
`Image`, `Camera`, `Video`, `Play`, `Pause`, `Volume2`, `VolumeX`, `Mic`, `MicOff`

#### Archivos y Datos
`File`, `FileText`, `Folder`, `FolderOpen`, `Archive`, `Clipboard`, `Database`

#### Financieros (Apps Bancarias)
`CreditCard`, `Wallet`, `DollarSign`, `Banknote`, `PiggyBank`, `TrendingUp`, `TrendingDown`, `BarChart`, `PieChart`, `Receipt`, `Calculator`

#### Estado y Feedback
`AlertCircle`, `AlertTriangle`, `Info`, `HelpCircle`, `CheckCircle`, `XCircle`, `Clock`, `Loader`

#### Varios
`Search`, `Filter`, `Calendar`, `MapPin`, `Globe`, `Link`, `Eye`, `EyeOff`, `Star`, `Heart`, `ThumbsUp`, `ThumbsDown`

### Iconos en Botones

Usa `DButtonIcon` para botones solo con icono con accesibilidad apropiada:

```tsx
import { DButtonIcon } from '@dynamic-framework/ui-react';

<DButtonIcon icon="Pencil" ariaLabel="Editar elemento" />
<DButtonIcon icon="Trash2" ariaLabel="Eliminar elemento" color="danger" />
<DButtonIcon icon="Plus" ariaLabel="Agregar nuevo" variant="outline" />
```

Para botones con icono y texto, usa `DButton` con `iconStart` o `iconEnd`:

```tsx
import { DButton } from '@dynamic-framework/ui-react';

<DButton iconStart="Plus">Agregar Cuenta</DButton>
<DButton iconEnd="ArrowRight">Continuar</DButton>
<DButton iconStart="Download" iconEnd="ChevronDown">Exportar</DButton>
```

## Patrón Crítico de Uso de DSelect

:::danger Error Común
DSelect usa `react-select` internamente y requiere un patrón específico de value/onChange. Usar `e.target.value` NO funcionará.
:::

### Patrón Correcto

```tsx
import { DSelect } from '@dynamic-framework/ui-react';

// Las opciones deben ser objetos con value y label
const options = [
  { value: 'usd', label: 'Dólar Estadounidense' },
  { value: 'eur', label: 'Euro' },
  { value: 'gbp', label: 'Libra Esterlina' },
];

function CurrencySelect() {
  // El estado guarda el objeto completo de la opción, no solo el value
  const [selected, setSelected] = useState<{ value: string; label: string } | null>(null);

  return (
    <DSelect
      id="currency"
      label="Seleccionar Moneda"
      options={options}
      value={selected}  // Objeto de opción completo o null
      onChange={(option) => setSelected(option)}  // Recibe objeto de opción completo
    />
  );
}
```

### Qué NO Hacer

```tsx
// ❌ Incorrecto - Usando e.target.value (no funciona con DSelect)
onChange={(e) => setValue(e.target.value)}

// ❌ Incorrecto - Pasando solo el string del value
value={selectedValue}  // Debe ser el objeto de opción completo

// ❌ Incorrecto - Opciones como strings simples
options={['USD', 'EUR', 'GBP']}  // Deben ser objetos { value, label }
```

### DSelect vs DInputSelect

| Componente | Caso de Uso | Formato del Value |
|------------|-------------|-------------------|
| `DSelect` | Select avanzado con búsqueda | Objeto `{ value, label }` |
| `DInputSelect` | Dropdown simple | String value con `e.target.value` |

## Patrones de Uso de DCollapse

DCollapse es un **componente controlado** que usa las props `collapsed` y `onChange`. Debes manejar el estado abierto/cerrado externamente.

### Uso Básico

```tsx
import { useState } from 'react';
import { DCollapse, DButton } from '@dynamic-framework/ui-react';

function CollapseExample() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <DButton
        text={collapsed ? 'Mostrar Detalles' : 'Ocultar Detalles'}
        onClick={() => setCollapsed(!collapsed)}
      />

      <DCollapse collapsed={collapsed} onChange={setCollapsed}>
        <div className="p-3 border mt-2">
          <h6>Información Adicional</h6>
          <p>Este contenido puede colapsarse para ahorrar espacio.</p>
        </div>
      </DCollapse>
    </div>
  );
}
```

### Patrón Acordeón

```tsx
function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <button onClick={() => setOpenIndex(openIndex === index ? null : index)}>
            {item.question}
          </button>
          <DCollapse
            collapsed={openIndex !== index}
            onChange={(c) => {
              if (!c) setOpenIndex(index);
              else setOpenIndex(null);
            }}
          >
            <div className="p-3">{item.answer}</div>
          </DCollapse>
        </div>
      ))}
    </div>
  );
}
```

:::warning Componente Controlado
DCollapse requiere manejo de estado. Usar `<DCollapse>Contenido</DCollapse>` sin las props `collapsed` y `onChange` no funcionará.
:::

## Accesibilidad

Los componentes de Dynamic Framework están diseñados con accesibilidad en mente y siguen los estándares [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/). Sin embargo, la librería no puede hacer tu aplicación completamente accesible por sí sola—debes tomar acción para asegurar la accesibilidad.

### Lo que Proveen los Componentes

| Componente | Accesibilidad Incluida |
|------------|------------------------|
| DInput | Conecta label con input automáticamente vía `id` |
| DButton | Keyboard focus, `aria-busy` para estados de carga |
| DModal | Focus trap, `aria-modal`, Escape para cerrar |
| DSelect | `aria-expanded`, navegación con flechas |
| DAlert | `role="alert"` para anuncios a screen readers |

### Tu Responsabilidad

Debes proveer los props necesarios para accesibilidad completa:

- **Inputs**: Siempre provee `label` o `aria-label`
- **Botones**: Provee `text` o `aria-label` para botones de solo icono
- **Imágenes**: Siempre incluye texto `alt` descriptivo

```tsx
// ✅ Input accesible
<DInput id="search" label="Buscar cuentas" />

// ✅ Botón de solo icono accesible
<DButtonIcon icon="Trash2" ariaLabel="Eliminar elemento" />
```

## Documentación y Soporte

Cada componente incluye documentación interactiva en nuestro Storybook:

- Documentación detallada de props y métodos
- Ejemplos de código interactivos
- Guías de mejores prácticas

Accede a la documentación completa en [react.dynamicframework.dev](https://react.dynamicframework.dev)
