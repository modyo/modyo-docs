---
search: true
---

# Componentes de Dynamic Framework

Dynamic Framework ofrece una librería de componentes React especializados para la industria financiera, diseñados para cubrir las necesidades más comunes en aplicaciones bancarias y financieras.

## Catálogo de Componentes

Explora todos los componentes de forma interactiva en nuestro [Storybook](https://react.dynamicframework.dev/v2.12.1/).

### Componentes de Layout
- **DBox**: Contenedor con opciones de estilo flexibles
- **DCard**: Contenedor de tarjeta con sub-componentes Header, Body y Footer
- **DLayout**: Grilla de página con `DLayout.Pane` para diseños responsivos
- **DCollapse**: Sección colapsable con un encabezado que actúa como botón

### Componentes de Navegación
- **DTabs**: Navegación por pestañas con variantes `tabs`, `pills`, `underline` y `toggle-button-group`, paneles `DTabs.Tab` y `DTabs.Provider`
- **DStepper**: Navegación multi-paso (con variantes DStepperDesktop y DStepperMobile)
- **DPaginator**: Control de paginación para listados

### Componentes de Formulario
- **DInput**: Input de texto con estados de validación
- **DInputSearch**: Input de búsqueda con debounce integrado
- **DInputCheck**: Input de checkbox o radio
- **DInputSwitch**: Input de toggle switch
- **DInputCounter**: Contador numérico con incremento/decremento
- **DInputCurrency**: Input formateado para moneda
- **DInputMask**: Input con máscara para datos formateados
- **DInputPassword**: Input de contraseña con toggle de visibilidad
- **DInputPhone**: Input de número telefónico internacional
- **DInputPin**: Input de PIN/código con cajas de dígitos individuales
- **DInputRange**: Input de rango deslizante
- **DInputSelect**: Select nativo con opciones como objetos
- **DSelect**: Select avanzado con búsqueda (usa react-select)
- **DDatePicker**: Selector de fecha con calendario
- **DPasswordStrengthMeter**: Input de contraseña con indicador de fortaleza
- **DBoxFile**: Carga de archivos con drag-and-drop

### Componentes de Visualización de Datos
- **DListGroup**: Lista con `DListGroupItem`, que puede ser texto, enlace o botón
- **DTimeline**: Línea de tiempo para historial de eventos
- **DCarousel**: Carrusel/slider con DCarouselSlide
- **DCurrencyText**: Visualización de moneda formateada
- **DProgress**: Indicador de barra de progreso
- **DSkeleton**: Marcador de carga con `DSkeleton.Text`, `DSkeleton.Block` y `DSkeleton.Circle`

### Componentes de Retroalimentación
- **DAlert**: Mensajes de notificación al usuario
- **DModal**: Diálogo modal con Header, Body y Footer, abierto como portal
- **DOffcanvas**: Panel deslizante con Header, Body y Footer, abierto como portal
- **DToast**: Notificaciones toast temporales (con DToastContainer)
- **DPopover**: Popover contextual
- **DTooltip**: Tooltips al pasar el mouse
- **DDropdown**: Menú desplegable de acciones

### Componentes Visuales
- **DAvatar**: Visualización de avatar de usuario
- **DBadge**: Badges de estado/conteo
- **DChip**: Elemento compacto para etiquetas/filtros
- **DButton**: Botón de acción con estado de carga
- **DButtonIcon**: Botón solo con icono
- **DIcon**: Componente de icono (usa Lucide Icons)

### Componentes Financieros Especializados
- **DCreditCard**: Visualización de tarjeta de crédito/débito
- **DVoucher**: Comprobante de transacción con descarga y compartir
- **DOtp**: Formulario de código de un solo uso con cuenta regresiva

### Componentes de Estado y Utilidad
- **DDataStateWrapper**: Manejo declarativo de los estados loading, error y empty de una lista o de un recurso único (exporta también `EmptyState`, `ErrorState` y `LoadingState`)
- **DErrorBoundary**: Límite de error con fallback configurable (basado en `react-error-boundary`)
- **DConfirmModalContainer**: Contenedor de los modales de confirmación de `useConfirmModal`

## Uso de Componentes

Todos los componentes se importan desde `@dynamic-framework/ui-react`:

```tsx
import {
  DButton,
  DCard,
  DInput,
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

La mayoría de los componentes comparten estas props:

| Prop | Tipo | Descripción |
|------|------|-------------|
| `className` | `string` | Clases CSS adicionales |
| `style` | `CSSProperties` | Estilos en línea |
| `dataAttributes` | `DataAttributes` | Objeto con claves `data-*` que se agregan como atributos al elemento raíz |

Los componentes de formulario aceptan además `id`, que conecta el label con el control.

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

`DAlert` solo acepta los colores de estado: `success`, `danger`, `warning` e `info`.

### Variantes de Tamaño

Los componentes que soportan tamaños usan la prop `size`, con los valores `sm` y `lg`:

```tsx
<DButton size="sm">Pequeño</DButton>
<DButton>Por defecto</DButton>
<DButton size="lg">Grande</DButton>
```

#### Tamaños Responsivos

`DButton` y `DBadge` aceptan en `size` un objeto con un valor por breakpoint (`xs`, `sm`, `md`, `lg`, `xl`, `xxl`). Cada valor sigue siendo `sm` o `lg`; un breakpoint sin valor usa el tamaño por defecto:

```tsx
<DButton size={{ xs: 'sm', md: 'lg' }} text="Continuar" />
<DBadge size={{ xs: 'sm', lg: 'lg' }} color="success" text="Activo" />
```

Las props responsivas leen los breakpoints de las variables `--bs-breakpoint-*` de `dynamic-ui.css`. No necesitan `DContextProvider`, pero sí que el CSS esté cargado antes de renderizar: sin él, el objeto cae al valor por defecto y en desarrollo se muestra un aviso en consola.

### Variantes de Botón

`DButton` y `DButtonIcon` aceptan `variant` con los valores `solid` (por defecto), `outline`, `link` y `soft`. La variante `soft` genera la clase `.btn-soft-{color}`, con un fondo tenue:

```tsx
<DButton variant="outline" color="primary" text="Cancelar" />
<DButton variant="soft" color="primary" text="Acción suave" />
<DButton variant="soft" color="danger" text="Eliminar" />
```

## Context Provider

`DContextProvider` configura idioma, moneda, iconos y portales para todos los componentes que envuelve. Sin provider, los componentes usan los valores por defecto de la librería, pero `useDPortalContext` y `useConfirmModal` sí lo necesitan.

| Prop | Tipo | Descripción |
|------|------|-------------|
| `language` | `string` | Idioma de los textos por defecto (default `'en'`) |
| `currency` | `{ symbol: string; precision: number; separator: string; decimal: string }` | Formato de moneda que usan `DCurrencyText`, `DInputCurrency` y `useFormatCurrency` |
| `icon` | `{ familyClass: string; familyPrefix: string; materialStyle: boolean }` | Familia de iconos de fuente para los nombres que no resuelven ni el registro ni Lucide |
| `iconMap` | `IconMapProps` | Iconos que usan los componentes internamente (cerrar, chevrons, estados de alerta, adornos de input) |
| `iconRegistry` | `Record<string, IconComponent>` | Iconos propios por nombre (ver [Iconos Personalizados](#iconos-personalizados)) |
| `portalName` | `string` | Id del nodo donde se montan los portales (default `'d-portal'`) |
| `availablePortals` | `Record<string, FC<PortalProps>>` | Componentes que se pueden abrir con `openPortal` (ver [Portales](#portales)) |
| `breakpoints` | `BreakpointProps` | **Deprecada y sin efecto**: los breakpoints se leen de las variables `--bs-breakpoint-*` del CSS |

```tsx
import { DContextProvider } from '@dynamic-framework/ui-react';

function App() {
  return (
    <DContextProvider
      language="es"
      currency={{ symbol: '$', precision: 0, separator: '.', decimal: ',' }}
    >
      <TuApp />
    </DContextProvider>
  );
}
```

Ver la referencia en [Storybook](https://react.dynamicframework.dev/v2.12.1/?path=/docs/design-system-context-contextprovider--docs).

## Portales

`DModal` y `DOffcanvas` no se muestran ni se ocultan con una prop: se renderizan como **portales**. Cada uno se registra con un nombre en `availablePortals` de `DContextProvider` y se abre con `openPortal`, del hook `useDPortalContext`:

1. Define un tipo que asocie cada nombre de portal con los datos (`payload`) que recibe.
2. Crea el componente del portal. Recibe `name` y `payload` (`PortalProps`) y renderiza un `DModal` o un `DOffcanvas` con la prop `name`, que es obligatoria.
3. Registra el componente en `availablePortals`.
4. Llama a `openPortal(nombre, payload)` para abrirlo y a `closePortal()` para cerrar el portal que está encima.

```tsx
import {
  DButton,
  DContextProvider,
  DModal,
  DOffcanvas,
  useDPortalContext,
  type PortalProps,
} from '@dynamic-framework/ui-react';

type Portals = {
  transferConfirm: { amount: string };
  accountFilters: { accountId: string };
};

function TransferConfirmModal({ name, payload }: PortalProps<Portals['transferConfirm']>) {
  const { closePortal } = useDPortalContext<Portals>();

  return (
    <DModal name={name} centered>
      <DModal.Header showCloseButton onClose={closePortal}>
        <h5 className="mb-0">Confirmar transferencia</h5>
      </DModal.Header>
      <DModal.Body>
        <p>Se transferirán {payload.amount}.</p>
      </DModal.Body>
      <DModal.Footer>
        <DButton text="Cancelar" variant="outline" onClick={closePortal} />
        <DButton text="Confirmar" onClick={closePortal} />
      </DModal.Footer>
    </DModal>
  );
}

function AccountFiltersPanel({ name, payload }: PortalProps<Portals['accountFilters']>) {
  const { closePortal } = useDPortalContext<Portals>();

  return (
    <DOffcanvas
      name={name}
      openFrom={{ xs: 'bottom', md: 'end' }}
      width={{ xs: '100%', md: '480px' }}
    >
      <DOffcanvas.Header showCloseButton onClose={closePortal}>
        <h5 className="mb-0">Filtros de la cuenta {payload.accountId}</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Contenido de los filtros</p>
      </DOffcanvas.Body>
    </DOffcanvas>
  );
}

const availablePortals = {
  transferConfirm: TransferConfirmModal,
  accountFilters: AccountFiltersPanel,
};

function AccountActions() {
  const { openPortal } = useDPortalContext<Portals>();

  return (
    <>
      <DButton
        text="Transferir"
        onClick={() => openPortal('transferConfirm', { amount: '$100.000' })}
      />
      <DButton
        text="Filtros"
        variant="outline"
        onClick={() => openPortal('accountFilters', { accountId: '001' })}
      />
    </>
  );
}

export function App() {
  return (
    <DContextProvider<Portals> availablePortals={availablePortals}>
      <AccountActions />
    </DContextProvider>
  );
}
```

Comportamiento de los portales:

- `DContextProvider` crea el nodo `#d-portal` (o el de `portalName`) en `document.body`.
- Los portales se apilan: `openPortal` agrega uno encima y `closePortal` cierra el último. `stack` expone los portales abiertos.
- Escape y el clic en el fondo cierran el portal superior, salvo que tenga `staticBackdrop`.
- `openPortal` lanza un error si el nombre no está registrado en `availablePortals`.
- `DOffcanvas` acepta en `openFrom` (`start`, `end`, `top`, `bottom`) un objeto por breakpoint. En `width` y `height` acepta cualquier longitud CSS (`'320px'`, `'50vw'`, `'100%'`) o un objeto por breakpoint.

Ver la referencia en Storybook: [DModal](https://react.dynamicframework.dev/v2.12.1/?path=/docs/design-system-components-modal-usage--docs), [DOffcanvas](https://react.dynamicframework.dev/v2.12.1/?path=/docs/design-system-components-offcanvas-usage--docs) y [useDPortalContext](https://react.dynamicframework.dev/v2.12.1/?path=/docs/design-system-hooks-usedportalcontext--docs).

## Layout

### DBox y DLayout

`DBox` es un contenedor con el estilo de superficie de Dynamic. `DLayout` es una grilla CSS: `columns` define el número de columnas, `gap` (de `0` a `30`) el espacio, y `gapSm` a `gapXxl` lo ajustan por breakpoint. Cada `DLayout.Pane` ocupa `cols` columnas, con `colsXs` a `colsXxl` por breakpoint:

```tsx
import { DBox, DLayout } from '@dynamic-framework/ui-react';

function AccountLayout() {
  return (
    <DLayout columns={12} gap={4}>
      <DLayout.Pane cols={12} colsLg={4}>
        <DBox className="p-4">Resumen</DBox>
      </DLayout.Pane>
      <DLayout.Pane cols={12} colsLg={8}>
        <DBox className="p-4">Movimientos</DBox>
      </DLayout.Pane>
    </DLayout>
  );
}
```

### DCollapse

`DCollapse` renderiza un encabezado clicable (`Component`, obligatoria) y un cuerpo (`children`) que se expande o se colapsa. Maneja su propio estado:

| Prop | Tipo | Descripción |
|------|------|-------------|
| `Component` | `ReactNode` | Contenido del encabezado, dentro del botón que alterna el estado |
| `defaultCollapsed` | `boolean` | Estado inicial (default `true`). Es reactiva: si cambia, el componente adopta el nuevo valor |
| `onChange` | `(collapsed: boolean) => void` | Se dispara con el nuevo estado en cada clic |
| `iconOpen` / `iconClose` | `string` | Iconos del encabezado colapsado y expandido |

```tsx
import { DCollapse } from '@dynamic-framework/ui-react';

function AccountDetails() {
  return (
    <DCollapse Component={<span>Información adicional</span>}>
      <p className="p-3">Este contenido puede colapsarse para ahorrar espacio.</p>
    </DCollapse>
  );
}
```

Para un acordeón donde solo una sección queda abierta, controla `defaultCollapsed` desde el padre y sincroniza con `onChange`:

```tsx
import { useState } from 'react';
import { DCollapse } from '@dynamic-framework/ui-react';

function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, index) => (
        <DCollapse
          key={item.question}
          Component={<span>{item.question}</span>}
          defaultCollapsed={openIndex !== index}
          onChange={(collapsed) => setOpenIndex(collapsed ? null : index)}
        >
          <div className="p-3">{item.answer}</div>
        </DCollapse>
      ))}
    </div>
  );
}
```

## Navegación con DTabs

`DTabs` recibe las pestañas en `options` (`{ label, tab, disabled? }`) y los paneles como hijos `DTabs.Tab`, cada uno con el `tab` al que corresponde:

| Prop | Tipo | Descripción |
|------|------|-------------|
| `options` | `DTabOption[]` | Pestañas a mostrar |
| `variant` | `'tabs' \| 'pills' \| 'underline' \| 'toggle-button-group'` | Estilo de la barra (default `'underline'`) |
| `defaultSelected` | `string` | Pestaña inicial; sin ella se selecciona la primera habilitada |
| `onChange` | `(option: DTabOption) => void` | Se dispara al cambiar de pestaña |
| `vertical` | `boolean` | Barra vertical |
| `ariaLabel` / `ariaLabelledBy` | `string` | Nombre accesible de la lista de pestañas |

```tsx
import { DTabs } from '@dynamic-framework/ui-react';

const options = [
  { label: 'Movimientos', tab: 'movements' },
  { label: 'Estados de cuenta', tab: 'statements' },
];

function AccountTabs() {
  return (
    <DTabs options={options} variant="pills" ariaLabel="Secciones de la cuenta">
      <DTabs.Tab tab="movements">Lista de movimientos</DTabs.Tab>
      <DTabs.Tab tab="statements">Estados de cuenta</DTabs.Tab>
    </DTabs>
  );
}
```

Cuando la barra y los paneles viven en lugares distintos del árbol, envuélvelos en `DTabs.Provider`, que guarda la pestaña seleccionada. Dentro del provider, `defaultSelected` de `DTabs` se ignora:

```tsx
import { DTabs } from '@dynamic-framework/ui-react';

const options = [
  { label: 'Resumen', tab: 'summary' },
  { label: 'Detalle', tab: 'detail' },
];

function SplitTabs() {
  return (
    <DTabs.Provider defaultSelected="summary">
      <header>
        <DTabs options={options} ariaLabel="Vista" />
      </header>
      <main>
        <DTabs.Tab tab="summary">Resumen</DTabs.Tab>
        <DTabs.Tab tab="detail">Detalle</DTabs.Tab>
      </main>
    </DTabs.Provider>
  );
}
```

## Formularios

### DInputSearch

Input de búsqueda con debounce integrado. Extiende `DInput` (omite `onChange`/`defaultValue`/`type`). Igual que `DInput`, su `onChange` entrega el **string**, no el evento.

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
import { useState } from 'react';
import { DInputSearch } from '@dynamic-framework/ui-react';

function AccountSearch({ onSearch }: { onSearch: (value: string) => void }) {
  const [query, setQuery] = useState('');

  return (
    <>
      {/* No controlado, con debounce por defecto (300ms) */}
      <DInputSearch
        id="account-search"
        label="Buscar"
        placeholder="Buscar cuentas..."
        onChange={(value) => onSearch(value)}
        onImmediateChange={(value) => setQuery(value)}
      />

      {/* Controlado, con debounce personalizado */}
      <DInputSearch
        id="account-search-controlled"
        label="Buscar"
        value={query}
        debounceMs={500}
        onImmediateChange={setQuery}
        onChange={onSearch}
      />
    </>
  );
}
```

### DSelect

:::danger Error Común
`DSelect` usa `react-select` internamente: su `value` es el objeto de opción completo y su `onChange` recibe ese objeto. Usar `e.target.value` NO funcionará.
:::

```tsx
import { useState } from 'react';
import { DSelect } from '@dynamic-framework/ui-react';

type CurrencyOption = { value: string; label: string };

// Las opciones deben ser objetos con value y label
const options: CurrencyOption[] = [
  { value: 'usd', label: 'Dólar Estadounidense' },
  { value: 'eur', label: 'Euro' },
  { value: 'gbp', label: 'Libra Esterlina' },
];

function CurrencySelect() {
  // El estado guarda el objeto completo de la opción, no solo el value
  const [selected, setSelected] = useState<CurrencyOption | null>(null);

  return (
    <DSelect<CurrencyOption>
      id="currency"
      label="Seleccionar Moneda"
      options={options}
      value={selected}
      onChange={(option) => setSelected(option)}
    />
  );
}
```

#### Qué NO Hacer

```tsx
// ❌ Incorrecto - Usando e.target.value (no funciona con DSelect)
onChange={(e) => setValue(e.target.value)}

// ❌ Incorrecto - Pasando solo el string del value
value={selectedValue}  // Debe ser el objeto de opción completo

// ❌ Incorrecto - Opciones como strings simples
options={['USD', 'EUR', 'GBP']}  // Deben ser objetos { value, label }
```

### DSelect vs DInputSelect

| Componente | Caso de Uso | `value` | `onChange` recibe |
|------------|-------------|---------|-------------------|
| `DSelect` | Select avanzado con búsqueda, multi-selección | Objeto de opción | El objeto de opción |
| `DInputSelect` | Select nativo simple | `string \| number` (el `value` de la opción) | El objeto de opción |

```tsx
import { useState } from 'react';
import { DInputSelect } from '@dynamic-framework/ui-react';

const accountTypes = [
  { value: 'checking', label: 'Cuenta corriente' },
  { value: 'savings', label: 'Cuenta de ahorro' },
];

function AccountTypeSelect() {
  const [type, setType] = useState<string | number>('checking');

  return (
    <DInputSelect
      id="account-type"
      label="Tipo de cuenta"
      options={accountTypes}
      value={type}
      onChange={(option) => setType(option.value)}
    />
  );
}
```

Con opciones de otra forma, `valueExtractor` y `labelExtractor` indican qué campo usar como valor y como texto.

### DPasswordStrengthMeter

Input de contraseña con indicador de fortaleza. `onChange` entrega el string y `enabledChecks` elige las reglas (`'uppercase'`, `'lowercase'`, `'number'`, `'specialChar'`):

```tsx
import { useState } from 'react';
import { DPasswordStrengthMeter } from '@dynamic-framework/ui-react';

function NewPassword() {
  const [password, setPassword] = useState('');

  return (
    <DPasswordStrengthMeter
      id="new-password"
      label="Nueva contraseña"
      value={password}
      onChange={setPassword}
    />
  );
}
```

## Estados de Carga y Error

### DDataStateWrapper

Muestra el estado de loading, error, empty o los datos, en ese orden de precedencia. `data` puede ser una **lista** (vacía cuando no tiene elementos) o un **recurso único** (vacío cuando es `null` o `undefined`); `children` recibe los datos con la misma forma. Exporta también los sub-componentes `EmptyState`, `ErrorState` y `LoadingState` para usarlos por separado.

**Props:**

| Prop | Tipo | Descripción |
|------|------|-------------|
| `isLoading` | `boolean` | Estado de carga |
| `isError` | `boolean` | Estado de error |
| `data` | `T[] \| undefined` o `T \| null \| undefined` | Lista o recurso único |
| `children` | `(data: T[]) => ReactNode` o `(data: T) => ReactNode` | Render con datos garantizados |
| `onRetry` | `() => void` | Callback del botón de reintento |
| `messages` | `{ loading?, empty?, error?, retry? }` | Textos de los estados por defecto |
| `renderLoading` / `renderEmpty` / `renderError` | `ReactNode \| (() => ReactNode)` | Reemplazo completo de cada estado |

```tsx
import {
  DDataStateWrapper,
  DListGroup,
  DListGroupItem,
} from '@dynamic-framework/ui-react';

type Movement = { id: string; title: string };

type MovementsQuery = {
  data: Movement[] | undefined;
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
};

function Movements({ query }: { query: MovementsQuery }) {
  return (
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
      {(movements) => (
        <DListGroup ariaLabel="Movimientos">
          {movements.map((m) => <DListGroupItem key={m.id}>{m.title}</DListGroupItem>)}
        </DListGroup>
      )}
    </DDataStateWrapper>
  );
}
```

Con un recurso único, `children` recibe el objeto:

```tsx
import { DDataStateWrapper, DCurrencyText } from '@dynamic-framework/ui-react';

type Account = { id: string; name: string; balance: number };

function AccountSummary({ account, isLoading, isError }: {
  account: Account | null | undefined;
  isLoading: boolean;
  isError: boolean;
}) {
  return (
    <DDataStateWrapper isLoading={isLoading} isError={isError} data={account}>
      {(acc) => (
        <p>{acc.name}: <DCurrencyText value={acc.balance} /></p>
      )}
    </DDataStateWrapper>
  );
}
```

> Encaja con el patrón TanStack Query. Ver [Integración con APIs](api-integration.html#manejo-de-estados-con-ddatastatewrapper).

### DSkeleton

Marcador de carga con formas que imitan el contenido. `DSkeleton` agrupa las formas `DSkeleton.Text`, `DSkeleton.Block` y `DSkeleton.Circle`, y con `items` repite la plantilla:

| Prop | Tipo | Descripción |
|------|------|-------------|
| `animation` | `'glow' \| 'wave' \| 'none'` | Animación de las formas; los skeletons anidados la heredan |
| `ariaLabel` | `string` | Texto que anuncian los lectores de pantalla (default `'Loading...'`) |
| `color` | `string` | Color del tema para las formas |
| `gap` | `string \| number` | Espacio entre elementos (los números son píxeles) |
| `direction` | `'vertical' \| 'horizontal'` | Eje de los elementos (default `'vertical'`) |
| `items` | `number` | Repeticiones de la plantilla (máximo 100) |
| `itemClassName` | `string` | Clase del contenedor de cada repetición |
| `children` | `ReactNode \| ((index: number) => ReactNode)` | Plantilla de cada elemento |

Las formas aceptan: `DSkeleton.Text` → `lines`, `size` (`'xs' \| 'sm' \| 'lg'`), `widths`, `lastLineWidth` y `rounded`; `DSkeleton.Block` → `width`, `height` y `rounded`; `DSkeleton.Circle` → `size`.

```tsx
import { DSkeleton } from '@dynamic-framework/ui-react';

function MovementsSkeleton() {
  return (
    <DSkeleton items={3} gap={16} animation="wave" ariaLabel="Cargando movimientos">
      <DSkeleton direction="horizontal" gap={12}>
        <DSkeleton.Circle size={40} />
        <DSkeleton.Text lines={2} lastLineWidth="60%" />
      </DSkeleton>
    </DSkeleton>
  );
}
```

Ver la referencia en [Storybook](https://react.dynamicframework.dev/v2.12.1/?path=/docs/design-system-components-skeleton--docs).

### DErrorBoundary

Límite de error con fallback configurable, basado en `react-error-boundary`. La librería también exporta el hook `useErrorBoundary`, el tipo `FallbackProps` y la utilidad `getErrorMessage`.

**Props (`DErrorBoundaryProps`):**

| Prop | Tipo | Descripción |
|------|------|-------------|
| `name` | `string` | Nombre identificador del boundary |
| `fallback` | `(props: FallbackProps) => ReactNode` | Reemplaza el fallback por defecto |
| `messages` | `{ error?: string; retry?: string }` | Textos del fallback por defecto; se ignoran si pasas `fallback` |
| `onError` | `(error: unknown, info: ErrorInfo) => void` | Callback al capturar un error |
| `onReset` | `() => void` | Callback al reiniciar el boundary |
| `resetKeys` | `unknown[]` | Reinicia el boundary cuando cambia alguno de estos valores |
| `children` | `ReactNode` | Contenido protegido |

```tsx
import type { ReactNode } from 'react';
import { DErrorBoundary } from '@dynamic-framework/ui-react';

function DashboardBoundary({ children }: { children: ReactNode }) {
  return (
    <DErrorBoundary
      name="dashboard"
      messages={{ error: 'No pudimos cargar el panel', retry: 'Reintentar' }}
      onError={(error, info) => console.error(error, info.componentStack)}
    >
      {children}
    </DErrorBoundary>
  );
}
```

## Componentes Financieros

### DCreditCard

```tsx
import { DCreditCard } from '@dynamic-framework/ui-react';

function CardPreview() {
  return (
    <DCreditCard
      brand="visa"
      name="Juana Pérez"
      number="**** **** **** 1234"
    />
  );
}
```

`brand` acepta `'visa'` o `'mastercard'`. `isVertical`, `isChipVisible`, `holderText` y `logoImage` ajustan la presentación.

### DVoucher

Comprobante de transacción con botones para descargarlo y compartirlo como imagen. `title` y `message` son obligatorias:

| Prop | Tipo | Descripción |
|------|------|-------------|
| `title` | `string` | Título del comprobante |
| `message` | `string` | Mensaje bajo el título |
| `icon` | `false \| null \| string \| Partial<DIconProps>` | Nombre de Lucide, objeto de props de `DIcon`, o `false`/`null` para ocultarlo |
| `amount` / `amountDetails` | `string` / `ReactNode` | Monto y su detalle |
| `downloadText` / `shareText` / `fileName` | `string` | Textos de los botones y nombre del archivo |
| `hideActions` | `boolean` | Oculta los botones |
| `onError` | `(err: Error) => void \| Promise<void>` | Error al generar la imagen |

```tsx
import { DVoucher } from '@dynamic-framework/ui-react';

function PaymentReceipt() {
  return (
    <DVoucher
      icon={{ icon: 'CircleCheckBig', color: 'success' }}
      title="Pago exitoso"
      message="Tu pago se procesó correctamente"
      amount="$125.00"
    >
      <p>Número de operación: 000123</p>
    </DVoucher>
  );
}
```

Los hooks `useScreenshot`, `useScreenshotDownload` y `useScreenshotWebShare` exponen la misma captura para componentes propios.

### DOtp

Formulario de código de un solo uso con cuenta regresiva para reenviar:

```tsx
import { DOtp } from '@dynamic-framework/ui-react';

function VerifyCode({ onSubmit }: { onSubmit: () => Promise<void> }) {
  return (
    <DOtp
      otpSize={6}
      seconds={60}
      action={onSubmit}
      texts={{ title: 'Ingresa el código', submit: 'Verificar', resend: 'Reenviar' }}
    />
  );
}
```

`action` se invoca al enviar y no recibe el código ingresado. Si necesitas leerlo, arma el formulario con el hook `useOtp`, que expone `otp`, `setOtp`, `submit`, `isLoading`, `invalid` y la cuenta regresiva.

## Menús y Líneas de Tiempo

### DDropdown

Menú de acciones. Cada acción lleva `label` (obligatoria), y opcionalmente `icon`, `color`, `onClick`, `href` o `disabled`. Una acción con `isDivider` se muestra como separador:

```tsx
import { DDropdown } from '@dynamic-framework/ui-react';

function AccountMenu({ onEdit }: { onEdit: () => void }) {
  return (
    <DDropdown
      actions={[
        { label: 'Editar', icon: 'Pencil', onClick: onEdit },
        { label: 'Eliminar', icon: 'Trash2', color: 'danger' },
        { label: 'separador', isDivider: true },
        { label: 'Ayuda', href: '/help' },
      ]}
    />
  );
}
```

### DTimeline

```tsx
import { DTimeline } from '@dynamic-framework/ui-react';

function PaymentHistory() {
  return (
    <DTimeline
      items={[
        { title: 'Pago exitoso', time: '10:00', status: 'success' },
        { title: 'En proceso', time: '09:55', status: 'warning' },
        { title: 'Iniciado', time: '09:50' },
      ]}
    />
  );
}
```

### DCarousel

`iconArrowLeft` e `iconArrowRight` aceptan las props de `DIcon` para personalizar las flechas:

```tsx
import { DCarousel } from '@dynamic-framework/ui-react';

function Promotions() {
  return (
    <DCarousel
      iconArrowLeft={{ icon: 'ArrowLeft', color: 'primary' }}
      iconArrowRight={{ icon: 'ArrowRight', color: 'primary' }}
    >
      <DCarousel.Slide>Promoción 1</DCarousel.Slide>
      <DCarousel.Slide>Promoción 2</DCarousel.Slide>
    </DCarousel>
  );
}
```

## Hooks Exportados por la Librería

Estos hooks se exportan desde `@dynamic-framework/ui-react`:

| Propósito | Hook | Retorna |
|-----------|------|---------|
| Contexto | `useDContext` | La configuración de `DContextProvider` y `setContext` |
| Portales | `useDPortalContext` | `{ openPortal, closePortal, stack }` |
| Confirmación | `useConfirmModal` | `{ open }` (requiere `DConfirmModalContainer`) |
| Notificaciones | `useDToast` | `{ toast }` (requiere `DToastContainer`) |
| Pestañas | `useTabContext` | `{ isSelected(tab) }` dentro de `DTabs` |
| Errores | `useErrorBoundary` | `{ error, showBoundary, resetBoundary }` dentro de `DErrorBoundary` |
| Moneda | `useFormatCurrency` | `{ format, values }` |
| Moneda | `useInputCurrency` | Estado y handlers de un input de moneda |
| OTP | `useOtp` | `{ otp, setOtp, submit, invalid, error, isLoading, secondsLeft, restartCountdown }` |
| OTP | `useCountdown` | `{ secondsLeft, restartCountdown }` |
| Comprobantes | `useScreenshot` | `{ clipRef, takeBlob }` |
| Comprobantes | `useScreenshotDownload` | `{ downloadRef, download }` |
| Comprobantes | `useScreenshotWebShare` | `{ shareRef, share }` |
| Responsivo | `useMediaQuery` | `boolean` para una media query |
| Responsivo | `useMediaBreakpointUpXs`, `useMediaBreakpointUpSm`, `useMediaBreakpointUpMd`, `useMediaBreakpointUpLg`, `useMediaBreakpointUpXl`, `useMediaBreakpointUpXxl` | `boolean`: el viewport está en ese breakpoint o uno mayor |
| Listas y estado | `useItemSelection` | Selección de elementos de una lista |
| Listas y estado | `useStackState` | `[items, { push, pop, peek, clear, isEmpty, length }]` |
| Utilidades de DOM | `useDisableBodyScrollEffect` | Bloquea el scroll del `body` mientras su argumento es `true` |
| Utilidades de DOM | `useDisableInputWheel` | `{ handleOnWheel }` para que la rueda no cambie un input numérico |
| Utilidades de DOM | `useProvidedRefOrCreate` | La ref recibida o una nueva |

### Utilidades Adicionales

```tsx
import {
  getErrorMessage,       // Extraer mensaje de error de errores desconocidos
  formatCurrency,        // Formatear un número como moneda fuera de un componente
} from '@dynamic-framework/ui-react';
```

:::warning Patrones de Implementación vs Exports de la Librería
Hooks como `useApi`, `useAccounts`, o `useFormValidation` mostrados en la documentación son **patrones de implementación** que creas en tu proyecto, NO exports de la librería. Ver [Integración con APIs](api-integration.html) para ejemplos de patrones.
:::

### useConfirmModal

Hook para abrir un modal de confirmación desde código. Requiere estar dentro de `DContextProvider` y montar una vez `DConfirmModalContainer` con `nodeId` igual al `portalName` del provider (`'d-portal'` por defecto).

**Config (`UseConfirmModalConfig`):**

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `title` / `message` | `string` | Título y mensaje del modal |
| `confirmLabel` / `cancelLabel` | `string` | Textos de los botones |
| `confirmColor` | `'primary' \| 'danger' \| 'warning'` | Color del botón de confirmación |
| `onConfirm` | `() => void \| Promise<void>` | Callback de confirmación (requerido) |
| `onClose` | `() => void` | Callback al cerrar |
| `critical` | `{ code: string; codeLabel?: string; inputPlaceholder?: string }` | Confirmación crítica que exige teclear un código exacto |

```tsx
import {
  DButton,
  DConfirmModalContainer,
  DContextProvider,
  useConfirmModal,
} from '@dynamic-framework/ui-react';

function DeleteAccountButton({ onDelete }: { onDelete: () => Promise<void> }) {
  const confirm = useConfirmModal({
    title: 'Eliminar cuenta',
    message: 'Esta acción no se puede deshacer.',
    confirmColor: 'danger',
    confirmLabel: 'Eliminar',
    critical: { code: 'ELIMINAR CUENTA' }, // el usuario debe teclear esto
    onConfirm: onDelete,
  });

  return <DButton color="danger" text="Eliminar" onClick={confirm.open} />;
}

export function App() {
  return (
    <DContextProvider>
      <DeleteAccountButton onDelete={async () => {}} />
      <DConfirmModalContainer nodeId="d-portal" />
    </DContextProvider>
  );
}
```

## Sistema de Iconos

Dynamic UI usa [Lucide Icons](https://lucide.dev), una librería de iconos moderna y consistente con más de 1000 iconos. Usa el componente `DIcon` para renderizar iconos.

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

#### Tamaños Responsivos de Iconos

`size` también acepta un valor por breakpoint (`xs`, `sm`, `md`, `lg`, `xl`, `xxl`):

```tsx
<DIcon
  icon="Home"
  size={{
    xs: '1rem',      // Móvil
    md: '1.5rem',    // Tablet
    lg: '2rem',      // Desktop
  }}
/>
```

Como el resto de props responsivas, requiere `dynamic-ui.css` cargado, no `DContextProvider`. Por defecto el tamaño se resuelve al montar el icono; con `useListenerSize` el icono escucha los cambios de breakpoint y se actualiza al redimensionar, con un costo de rendimiento si hay muchos iconos.

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

### Iconos Personalizados

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

`DIcon` resuelve el nombre en este orden: primero el `iconRegistry`, luego Lucide y por último la familia de iconos de fuente configurada en `icon`. El `iconRegistry` **tiene prioridad sobre Lucide** cuando el nombre coincide en ambos.

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

Usa `DButtonIcon` para botones solo con icono. Su nombre accesible va en `aria-label`:

```tsx
import { DButtonIcon } from '@dynamic-framework/ui-react';

<DButtonIcon icon="Pencil" aria-label="Editar elemento" />
<DButtonIcon icon="Trash2" aria-label="Eliminar elemento" color="danger" />
<DButtonIcon icon="Plus" aria-label="Agregar nuevo" variant="outline" />
```

Para botones con icono y texto, usa `DButton` con `iconStart` o `iconEnd`:

```tsx
import { DButton } from '@dynamic-framework/ui-react';

<DButton iconStart="Plus">Agregar Cuenta</DButton>
<DButton iconEnd="ArrowRight">Continuar</DButton>
<DButton iconStart="Download" iconEnd="ChevronDown">Exportar</DButton>
```

## Accesibilidad

Los componentes de Dynamic Framework incorporan roles y atributos ARIA siguiendo los patrones de [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/). La librería no puede hacer tu aplicación accesible por sí sola: parte del trabajo depende de las props que pases y de cómo compongas los componentes.

### Lo que Proveen los Componentes

| Componente | Accesibilidad Incluida |
|------------|------------------------|
| DInput | Conecta el label con el input vía `id`; `aria-invalid` cuando es `invalid` |
| DButton | `aria-busy` durante la carga, `loadingAriaLabel` como nombre mientras carga, `aria-disabled` |
| DButtonIcon | Toma su nombre de `aria-label`; en desarrollo avisa si el botón queda sin nombre |
| DIcon | Oculto a los lectores de pantalla por defecto (`aria-hidden`). Con `ariaLabel` se expone como `role="img"` con ese nombre |
| DModal / DOffcanvas | `role="dialog"` y `aria-modal="true"`. El nombre sale del título del Header (`aria-labelledby`) o de `ariaLabel`. El foco pasa al diálogo al abrir, Tab no sale del portal superior y Escape lo cierra salvo con `staticBackdrop` |
| DTabs | `role="tablist"`, `role="tab"` con `aria-selected` y `aria-controls`; nombre con `ariaLabel` o `ariaLabelledBy` |
| DListGroup | `<ul>` por defecto. Los items enlace o botón se envuelven en un `<li>`. `ariaLabel`/`ariaLabelledBy` nombran la lista y `ariaCurrent` marca el item activo. En desarrollo avisa si un item `<li>` queda dentro de `as="div"` |
| DAlert | `role="alert"` por defecto. Con `role="status"` se anuncia sin interrumpir y con `role="none"` no es región viva |
| DSkeleton | Una región `role="status"` anuncia `ariaLabel`; las formas quedan ocultas a los lectores de pantalla |
| DSelect | Sin `label` ni `aria-labelledby`, usa un nombre genérico; `ariaLabel` lo reemplaza |

### Tu Responsabilidad

Debes proveer los props necesarios para accesibilidad completa:

- **Inputs**: provee `label` con texto. Si el label no es solo texto (lleva un enlace o un icono), agrega `aria-label` (`ariaLabel` en `DSelect` y `DInputSelect`)
- **Botones de solo icono**: provee `aria-label` en `DButtonIcon`
- **Iconos con significado propio**: pasa `ariaLabel` a `DIcon`; los decorativos no necesitan nada
- **Modales y paneles**: incluye un título en el Header o pasa `ariaLabel`. Al cerrar un portal el foco no vuelve al elemento que lo abrió: devuélvelo tú si el flujo lo necesita
- **Alertas**: usa `role="status"` para mensajes que no son críticos
- **Imágenes**: siempre incluye texto `alt` descriptivo

```tsx
// ✅ Input accesible
<DInput id="search" label="Buscar cuentas" />

// ✅ Botón de solo icono accesible
<DButtonIcon icon="Trash2" aria-label="Eliminar elemento" />

// ✅ Icono con significado propio
<DIcon icon="AlertTriangle" ariaLabel="Saldo insuficiente" />
```

## Documentación y Soporte

Cada componente incluye documentación interactiva en nuestro Storybook:

- Documentación detallada de props y métodos
- Ejemplos de código interactivos
- Guías de mejores prácticas

Accede a la documentación completa en [react.dynamicframework.dev](https://react.dynamicframework.dev/v2.12.1/)
