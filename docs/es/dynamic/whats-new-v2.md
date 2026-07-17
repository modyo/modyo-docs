---
search: true
---

# Novedades en Dynamic UI 2.0

La versión 2.0 de Dynamic UI representa una evolución significativa del Design System, con un nuevo lenguaje visual, modernización tecnológica y nuevos componentes de alto nivel.

## Resumen de Cambios

- **Nuevo lenguaje visual**: Tipografía Jost, iconos Lucide, paleta de colores renovada
- **Modernización tecnológica**: Compatibilidad con React 19, Storybook 9, animaciones con Framer Motion
- **8 nuevos componentes**: DBox, DLayout, DCreditCard, DDropdown, DTimeline, DOtp, DPasswordStrengthMeter, DVoucher
- **API simplificada**: Componentes obsoletos eliminados, props estandarizadas

## Nuevo Lenguaje Visual

### Tipografía: Jost

Se ha establecido **Jost** como la fuente principal del Design System, aportando una estética moderna y distintiva.

**Cómo cargar Jost:**

```html
<!-- Opción 1: Google Fonts (recomendado) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

```css
/* Opción 2: CSS @import */
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap');

/* La fuente se aplica vía variable CSS */
font-family: "Jost", sans-serif;
```

:::tip
El template base ya incluye Jost. Solo agrega estos imports si construyes desde cero.
:::

### Iconografía: Lucide Icons

Dynamic UI 2.0 migra de Bootstrap Icons a [Lucide Icons](https://lucide.dev), una biblioteca de iconos moderna con mejor integración React.

**Características:**
- Iconos SVG optimizados
- Tree-shaking automático (solo se incluyen los iconos usados)
- Soporte completo de TypeScript
- Nombres en PascalCase

```jsx
// Uso básico
<DIcon icon="Home" />
<DIcon icon="Settings" />
<DIcon icon="CheckCircle" />

// Con tamaño responsivo
<DContextProvider>
  <DIcon
    icon="Settings"
    useListenerSize={true}
    size={{
      xs: '16px',
      md: '32px',
      xl: '64px'
    }}
  />
</DContextProvider>
```

### Nueva Paleta de Colores

La paleta de colores ha sido completamente rediseñada para un aspecto más fresco y profesional, afectando todos los componentes.

## Nuevos Componentes

### DBox

Contenedor semántico pre-estilizado para enmarcar secciones de contenido.

```jsx
<DBox className="p-4">
  <h4>Título de la sección</h4>
  <p>Contenido dentro del DBox.</p>
</DBox>
```

### DLayout

Componente de layout basado en CSS Grid para estructuras responsivas complejas.

```jsx
<DLayout gap={4} columns={12}>
  <DLayout.Pane cols={4}>
    {/* Sidebar */}
  </DLayout.Pane>
  <DLayout.Pane cols={8}>
    {/* Contenido principal */}
  </DLayout.Pane>
</DLayout>
```

### DCreditCard

Componente visual para mostrar tarjetas de crédito o débito.

```jsx
<DCreditCard
  name="John Doe"
  number="**** **** **** 1234"
  brand="Visa"
/>
```

### DDropdown

Menú desplegable configurable con posicionamiento automático.

```jsx
<DDropdown
  actions={[
    { label: 'Editar', icon: 'Pencil', onClick: handleEdit },
    { label: 'Eliminar', icon: 'Trash2', color: 'danger' },
    { isDivider: true },
    { label: 'Ayuda', href: '/help' },
  ]}
/>
```

### DTimeline

Componente para mostrar eventos en orden cronológico.

```jsx
<DTimeline
  items={[
    { title: 'Pago exitoso', time: '10:00 AM', status: 'success' },
    { title: 'En proceso', time: '09:55 AM', status: 'warning' },
    { title: 'Iniciado', time: '09:50 AM' },
  ]}
/>
```

### DOtp

Componente completo para flujos de autenticación OTP.

:::warning Nota de Versión
DOtp requiere versión **2.1.1 o superior**. Se corrigió un bug de exportación en v2.1.1.
:::

```jsx
<DOtp
  otpSize={6}
  seconds={60}
  action={async (otp) => verifyOtp(otp)}
/>
```

### DPasswordStrengthMeter

Input de contraseña con indicador visual de fortaleza.

```jsx
<DPasswordStrengthMeter
  label="Nueva Contraseña"
  value={password}
  onChange={setPassword}
/>
```

### DVoucher

Componente para mostrar recibos y comprobantes, con capacidad de descarga.

```jsx
<DVoucher
  icon="CircleCheckBig"
  color="success"
  title="Pago Exitoso"
  amount="$125.00"
>
  {/* Detalles de la transacción */}
</DVoucher>
```

## Novedades posteriores a 2.0 (2.1-2.7)

Entre enero y julio de 2026 se publicaron siete releases (v2.1 → v2.7) que agregan componentes, un hook nuevo, cambios de API en componentes existentes y utilidades CSS.

### Nuevos componentes

- **DInputSearch** (reintroducido en v2.6): input de búsqueda con debounce integrado. Su `onChange` entrega directamente el **string** (no el evento). Ver [Componentes](development/components.html#dinputsearch).
- **DDataStateWrapper** (+ `EmptyState` / `ErrorState` / `LoadingState`): manejo declarativo de estados de loading/error/empty al renderizar listas. Encaja con TanStack Query — ver [Integración con APIs](development/api-integration.html#manejo-de-estados-con-ddatastatewrapper).
- **DErrorBoundary**: límite de error con fallback configurable, basado en `react-error-boundary`.

### Nuevo hook

- **useConfirmModal** (+ `DConfirmModalContainer`): confirmación programática, con soporte para confirmación crítica que exige teclear un código exacto. Ver [Componentes](development/components.html#hooks-exportados-por-la-libreria).

### Cambios de API en componentes existentes

- **DButton**: nueva `variant="soft"` (v2.5) y tamaños responsive por breakpoint (v2.3).
- **DBadge**: tamaños responsive por breakpoint (v2.3).
- **DIcon**: iconos personalizados vía `iconRegistry` — acepta un componente React directo o un nombre registrado en `DContextProvider` (v2.7).
- **DOffcanvas**: `openFrom`, `width` y `height` responsive por breakpoint (v2.7).
- **DCarousel**: flechas personalizables con `iconArrowLeft` / `iconArrowRight` (v2.7).
- **DVoucher**: props `icon` (nombre Lucide, objeto de props de `DIcon`, o `false`/`null`) y soporte de `href` en sus botones (v2.2).

### Utilidades CSS

Nuevas utilidades para modo oscuro, variantes hover de texto/borde, responsive en `shadow`/`rounded`/`border`/`text-opacity`, `fade-in` y CSS grid. Ver [Sistema de Temas](customization/theming.html#utilidades-css-2-1-2-7).

## Mejoras Técnicas

### Compatibilidad con React 19

Dynamic UI 2.0 es compatible tanto con React 18 como con React 19, permitiendo adoptar las últimas características de React.

### Storybook 9

La documentación interactiva ha sido actualizada a Storybook 9, con mejor rendimiento y nueva interfaz.

### Animaciones con Framer Motion

Los componentes `DModal` y `DOffcanvas` ahora incluyen animaciones suaves gracias a Framer Motion.

### Nuevos Requisitos de Sistema

| Requisito | Versión | Notas |
|-----------|---------|-------|
| Node.js | >=22.0.0 | Requerido |
| React | ~19.2.1 | Peer dependency (React 19.x requerido) |
| react-dom | ~19.2.1 | Peer dependency |
| react-i18next | ~16.2.4 | Peer dependency |
| react-hot-toast | ~2.6.0 | Peer dependency |
| framer-motion | 12.x | Incluido como dependencia |

## Breaking Changes

Para una guía detallada de migración, consulta la [Guía de Migración a v2.0](getting-started/migration-v2.html).

### Resumen de cambios incompatibles

1. **Iconos**: Bootstrap Icons reemplazados por Lucide Icons (usar PascalCase: `"Search"` no `"search"`)
2. **Props**: `theme` renombrado a `color`
3. **DButton**: Prop `pill` eliminada (usar `className="rounded-pill"`)
4. **Componentes eliminados** (ver [Guía de Migración](getting-started/migration-v2.html) para reemplazos):
   - `DSkeleton` → Usar utilidades placeholder de Bootstrap
   - `DList/DListItem` → Usar `DListGroup/DListGroupItem`
   - `DQuickAction*` → Usar componentes base
   - `DTableHead` → Eliminado (sin reemplazo)

:::tip DInputSearch volvió en v2.6
`DInputSearch` no existía en v2.0 (se recomendaba `DInput` con `iconStart="Search"`), pero fue **reintroducido en v2.6** como componente nuevo con debounce integrado. Ver [Novedades posteriores a 2.0](#novedades-posteriores-a-2-0-2-1-2-7).
:::

## Recursos

- [Guía de Migración](getting-started/migration-v2.html)
- [Catálogo de Iconos Lucide](https://lucide.dev/icons/)
- [Storybook Interactivo](https://react.dynamicframework.dev)
- [Repositorio en GitHub](https://github.com/dynamic-framework/dynamic-ui)
