---
search: true
---

# Componentes de Dynamic Framework

Dynamic Framework ofrece 43 componentes React especializados para la industria financiera, diseñados para cubrir las necesidades más comunes en aplicaciones bancarias y financieras.

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

## Hooks Exportados por la Librería

Estos hooks son **realmente exportados** desde `@dynamic-framework/ui-react`:

```tsx
import {
  // Hooks de contexto
  useDContext,           // Acceso a valores de DContextProvider
  useDPortalContext,     // Acceso al contexto de portal para modales

  // Hooks específicos de componentes
  useDToast,             // Notificaciones toast programáticas
  useTabContext,         // Acceso al estado de tabs dentro de DTabs
  useErrorBoundary,      // Control de error boundary (reset, show)

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

DCollapse soporta modos **controlado** y **no controlado** (actualizado en v2.1.1).

### Modo No Controlado (Por Defecto)

El componente maneja su propio estado abierto/cerrado internamente:

```tsx
<DCollapse>
  <DCollapse.Toggle>Clic para expandir</DCollapse.Toggle>
  <DCollapse.Content>
    Contenido oculto aquí
  </DCollapse.Content>
</DCollapse>
```

### Modo Controlado

Tú manejas el estado externamente vía `isOpen` y `onToggle`:

```tsx
const [isOpen, setIsOpen] = useState(false);

<DCollapse isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)}>
  <DCollapse.Toggle>Clic para expandir</DCollapse.Toggle>
  <DCollapse.Content>
    Contenido oculto aquí
  </DCollapse.Content>
</DCollapse>
```

:::tip Cuándo Usar Cada Modo
- **No controlado**: Acordeones simples, secciones FAQ
- **Controlado**: Cuando necesitas sincronizar con estado externo, abrir/cerrar programáticamente, o coordinar múltiples paneles
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
