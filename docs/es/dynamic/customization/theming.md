---
search: true
---

# Sistema de Temas

Personaliza la apariencia visual de los componentes de Dynamic Framework usando variables CSS y el sistema de temas de Bootstrap.

## Cómo Funciona el Theming

Dynamic Framework está construido sobre Bootstrap 5, que usa propiedades personalizadas CSS (variables) extensivamente. Puedes personalizar la apariencia mediante:

1. **Sobrescribir variables CSS** - Cambiar valores en tiempo de ejecución
2. **Sobrescribir variables SCSS** - Cambiar valores en tiempo de compilación
3. **Agregar CSS personalizado** - Estilizar componentes específicos

## Referencia de Variables CSS

### Colores Base

Bootstrap define estas variables de color que afectan todos los componentes:

```css
:root {
  /* Colores del tema */
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;

  /* Versiones RGB (para uso con rgba()) */
  --bs-primary-rgb: 13, 110, 253;
  --bs-secondary-rgb: 108, 117, 125;
  /* ... */

  /* Body */
  --bs-body-color: #212529;
  --bs-body-bg: #fff;
}
```

### Tipografía

```css
:root {
  --bs-body-font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --bs-body-font-size: 1rem;
  --bs-body-font-weight: 400;
  --bs-body-line-height: 1.5;
}
```

### Espaciado y Dimensiones

```css
:root {
  --bs-border-width: 1px;
  --bs-border-radius: 0.375rem;
  --bs-border-radius-sm: 0.25rem;
  --bs-border-radius-lg: 0.5rem;
  --bs-border-radius-xl: 1rem;
  --bs-border-radius-pill: 50rem;
}
```

## Personalizando tu Tema

### Método 1: Sobrescritura con Archivo CSS

Crea un archivo CSS que sobrescriba las variables por defecto:

```css
/* src/styles/theme.css */
:root {
  /* Colores de tu marca */
  --bs-primary: #004B8D;
  --bs-primary-rgb: 0, 75, 141;
  --bs-secondary: #00A0DF;
  --bs-secondary-rgb: 0, 160, 223;

  /* Tipografía */
  --bs-body-font-family: 'Inter', system-ui, sans-serif;

  /* Bordes redondeados */
  --bs-border-radius: 0.5rem;
  --bs-border-radius-lg: 0.75rem;
}
```

Importa este archivo **después** del CSS de Dynamic Framework:

```tsx
// src/main.tsx
import '@dynamic-framework/ui-react/dist/css/dynamic-ui.css';
import './styles/theme.css'; // Tus sobrescrituras
```

### Método 2: Personalización SCSS

Para personalización en tiempo de compilación con más control:

```scss
// src/styles/theme.scss

// 1. Sobrescribir variables de Bootstrap
$primary: #004B8D;
$secondary: #00A0DF;
$font-family-base: 'Inter', system-ui, sans-serif;
$border-radius: 0.5rem;
$border-radius-lg: 0.75rem;

// Específico para botones
$btn-border-radius: 2rem;
$btn-padding-y: 0.625rem;
$btn-padding-x: 1.5rem;

// Específico para cards
$card-border-radius: 1rem;
$card-border-width: 0;
$card-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

// 2. Importar Bootstrap (esto usa tus variables)
@import 'bootstrap/scss/bootstrap';

// 3. Tus estilos adicionales
.custom-class {
  // ...
}
```

## Theming por Componente

### Botones

```css
/* Todos los botones */
.btn {
  --bs-btn-padding-x: 1.5rem;
  --bs-btn-padding-y: 0.625rem;
  --bs-btn-font-size: 0.875rem;
  --bs-btn-font-weight: 600;
  --bs-btn-border-radius: 2rem;
}

/* Botón primario */
.btn-primary {
  --bs-btn-bg: #004B8D;
  --bs-btn-border-color: #004B8D;
  --bs-btn-hover-bg: #003d73;
  --bs-btn-hover-border-color: #003d73;
  --bs-btn-active-bg: #00315c;
  --bs-btn-disabled-bg: #6c9dc4;
}
```

### Cards

```css
.card {
  --bs-card-spacer-y: 1.5rem;
  --bs-card-spacer-x: 1.5rem;
  --bs-card-border-radius: 1rem;
  --bs-card-border-color: transparent;
  --bs-card-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
```

### Controles de Formulario

```css
.form-control {
  --bs-border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  border-color: #dee2e6;
}

.form-control:focus {
  border-color: var(--bs-primary);
  box-shadow: 0 0 0 0.2rem rgba(0, 75, 141, 0.15);
}
```

### Alertas

```css
.alert-primary {
  --bs-alert-bg: #e7f1f9;
  --bs-alert-border-color: #b8d4ea;
  --bs-alert-color: #003d73;
}
```

## Estilizando Componentes Dynamic

Los componentes de Dynamic Framework usan clases de Bootstrap. Consulta el [Storybook](https://react.dynamicframework.dev) para propiedades CSS específicas de cada componente.

### DButton

```tsx
import { DButton } from '@dynamic-framework/ui-react';

// El componente renderiza clases de botón de Bootstrap
<DButton text="Clic aquí" variant="primary" />
// Renderiza: <button class="btn btn-primary">Clic aquí</button>
```

Estiliza con CSS estándar de botones Bootstrap:

```css
.btn-primary {
  /* Tus estilos */
}
```

### DCard

```tsx
import { DCard } from '@dynamic-framework/ui-react';

<DCard>
  <DCard.Header>Título</DCard.Header>
  <DCard.Body>Contenido</DCard.Body>
</DCard>
// Renderiza estructura de card de Bootstrap
```

Estiliza con CSS estándar de cards Bootstrap:

```css
.card {
  /* Tus estilos */
}

.card-header {
  /* Estilos del header */
}

.card-body {
  /* Estilos del body */
}
```

### DInput

```tsx
import { DInput } from '@dynamic-framework/ui-react';

<DInput label="Email" type="email" />
// Renderiza form-control de Bootstrap
```

Estiliza con clases de formulario:

```css
.form-control {
  /* Tus estilos */
}

.form-label {
  /* Estilos del label */
}
```

## Modo Oscuro

Implementa modo oscuro definiendo valores de variables alternativos:

```css
/* Modo claro (por defecto) */
:root {
  --bs-body-bg: #ffffff;
  --bs-body-color: #212529;
  --bs-card-bg: #ffffff;
}

/* Modo oscuro */
[data-bs-theme="dark"] {
  --bs-body-bg: #121212;
  --bs-body-color: #e0e0e0;
  --bs-card-bg: #1e1e1e;
  --bs-border-color: #2d2d2d;
}
```

Alternar con JavaScript:

```tsx
function toggleDarkMode() {
  const html = document.documentElement;
  const current = html.getAttribute('data-bs-theme');
  html.setAttribute('data-bs-theme', current === 'dark' ? 'light' : 'dark');
}
```

## Mejores Prácticas

1. **Usa variables CSS para valores dinámicos** - Colores que pueden cambiar en runtime
2. **Usa SCSS para cambios estructurales** - Espaciado, dimensiones, estructura de componentes
3. **No sobrescribas con `!important`** - Usa especificidad CSS adecuada
4. **Prueba ratios de contraste** - Asegura accesibilidad con [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
5. **Revisa Storybook** - Ve propiedades CSS de componentes en [react.dynamicframework.dev](https://react.dynamicframework.dev)

## Recursos

- [Variables CSS de Bootstrap](https://getbootstrap.com/docs/5.3/customize/css-variables/)
- [Variables Sass de Bootstrap](https://getbootstrap.com/docs/5.3/customize/sass/)
- [Dynamic Storybook](https://react.dynamicframework.dev)
