---
search: true
---

# Novedades en Dynamic UI 2.0

La version 2.0 de Dynamic UI representa una evolucion significativa del Design System, con un nuevo lenguaje visual, modernizacion tecnologica y nuevos componentes de alto nivel.

## Resumen de Cambios

- **Nuevo lenguaje visual**: Tipografia Jost, iconos Lucide, paleta de colores renovada
- **Modernizacion tecnologica**: Compatibilidad con React 19, Storybook 9, animaciones con Framer Motion
- **8 nuevos componentes**: DBox, DLayout, DCreditCard, DDropdown, DTimeline, DOtp, DPasswordStrengthMeter, DVoucher
- **API simplificada**: Componentes obsoletos eliminados, props estandarizadas

## Nuevo Lenguaje Visual

### Tipografia: Jost

Se ha establecido **Jost** como la fuente principal del Design System, aportando una estetica moderna y distintiva.

```css
font-family: "Jost", sans-serif;
```

### Iconografia: Lucide Icons

Dynamic UI 2.0 migra de Bootstrap Icons a [Lucide Icons](https://lucide.dev), una biblioteca de iconos moderna con mejor integracion React.

**Caracteristicas:**
- Iconos SVG optimizados
- Tree-shaking automatico (solo se incluyen los iconos usados)
- Soporte completo de TypeScript
- Nombres en PascalCase

```jsx
// Uso basico
<DIcon icon="Home" />
<DIcon icon="Settings" />
<DIcon icon="CheckCircle" />

// Con tamano responsivo
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

La paleta de colores ha sido completamente rediseñada para un aspecto mas fresco y profesional, afectando todos los componentes.

## Nuevos Componentes

### DBox

Contenedor semantico pre-estilizado para enmarcar secciones de contenido.

```jsx
<DBox className="p-4">
  <h4>Titulo de la seccion</h4>
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

Componente visual para mostrar tarjetas de credito o debito.

```jsx
<DCreditCard
  name="John Doe"
  number="**** **** **** 1234"
  brand="Visa"
/>
```

### DDropdown

Menu desplegable configurable con posicionamiento automatico.

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

Componente para mostrar eventos en orden cronologico.

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

Componente completo para flujos de autenticacion OTP.

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
  label="Nueva Contrasena"
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
  {/* Detalles de la transaccion */}
</DVoucher>
```

## Mejoras Tecnicas

### Compatibilidad con React 19

Dynamic UI 2.0 es compatible tanto con React 18 como con React 19, permitiendo adoptar las ultimas caracteristicas de React.

### Storybook 9

La documentacion interactiva ha sido actualizada a Storybook 9, con mejor rendimiento y nueva interfaz.

### Animaciones con Framer Motion

Los componentes `DModal` y `DOffcanvas` ahora incluyen animaciones suaves gracias a Framer Motion.

### Nuevos Requisitos de Sistema

| Requisito | Version |
|-----------|---------|
| Node.js | >=22.0.0 |
| React | >=18 <20 |
| framer-motion | >=12 <13 |
| i18next | >=25 <26 |
| react-i18next | >=16 <17 |

## Breaking Changes

Para una guia detallada de migracion, consulta la [Guia de Migracion a v2.0](getting-started/migration-v2.html).

### Resumen de cambios incompatibles

1. **Iconos**: Bootstrap Icons reemplazados por Lucide Icons
2. **Props**: `theme` renombrado a `color`
3. **DButton**: Prop `pill` eliminada (usar `className="rounded-pill"`)
4. **Componentes eliminados**: DSkeleton, DInputSearch, DList, DQuickAction*, DTableHead

## Recursos

- [Guia de Migracion](getting-started/migration-v2.html)
- [Catalogo de Iconos Lucide](https://lucide.dev/icons/)
- [Storybook Interactivo](https://react.dynamicframework.dev)
- [Repositorio en GitHub](https://github.com/dynamic-framework/dynamic-ui)
