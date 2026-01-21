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
- **DOtp**: Input de contraseña de un solo uso
- **DBoxFile**: Carga de archivos con drag-and-drop

### Componentes de Visualización de Datos
- **DListGroup**: Contenedor de lista con DListGroupItem
- **DTimeline**: Línea de tiempo para historial de eventos
- **DCarousel**: Carrusel/slider con DCarouselSlide
- **DCurrencyText**: Visualización de moneda formateada
- **DProgress**: Indicador de barra de progreso
- **DVoucher**: Componente de visualización de voucher/recibo

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
- **DIconBase**: Icono base con soporte de tamaño responsivo

### Componentes Financieros Especializados
- **DCreditCard**: Visualización de tarjeta de crédito/débito con animación flip
- **DPasswordStrengthMeter**: Indicador de fortaleza de contraseña con validación

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

Dynamic UI 2.0 usa [Lucide Icons](https://lucide.dev). Usa el componente `DIcon`:

:::danger Crítico: Formato PascalCase Requerido
Los iconos **deben** usar formato PascalCase. Usar kebab-case mostrará un "?" como placeholder.
:::

```tsx
import { DIcon } from '@dynamic-framework/ui-react';

// ✅ Correcto - PascalCase
<DIcon icon="Check" />
<DIcon icon="AlertCircle" size="lg" />
<DIcon icon="ArrowRight" color="primary" />
<DIcon icon="CreditCard" />

// ❌ Incorrecto - kebab-case (mostrará "?")
<DIcon icon="check" />
<DIcon icon="alert-circle" />
<DIcon icon="arrow-right" />
```

Iconos comunes: `Home`, `Settings`, `User`, `Search`, `Plus`, `Minus`, `Check`, `X`, `ChevronDown`, `ChevronRight`, `CreditCard`, `Calendar`, `Eye`, `EyeOff`, `Trash2`, `Pencil`

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

Todos los componentes de Dynamic Framework cumplen con los estándares WCAG 2.1 nivel AA:

- **Navegación por teclado** completa
- Compatible con **lectores de pantalla**
- **Contraste de color** adecuado
- **Etiquetas ARIA** apropiadas
- **Mensajes de error** descriptivos

## Documentación y Soporte

Cada componente incluye documentación interactiva en nuestro Storybook:

- Documentación detallada de props y métodos
- Ejemplos de código interactivos
- Guías de mejores prácticas

Accede a la documentación completa en [react.dynamicframework.dev](https://react.dynamicframework.dev)
