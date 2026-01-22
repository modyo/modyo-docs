---
search: true
---

# Personalización

Aprende cómo personalizar Dynamic Framework para ajustarlo a la identidad visual de tu institución.

## Contenido de la Sección

### [Sistema de Temas](theming.html)
Personaliza la apariencia visual:
- Variables CSS de Bootstrap
- Personalización de colores
- Tipografía
- Estilos a nivel de componente

### [Extender Componentes](extending.html)
Crea componentes personalizados:
- Patrones de composición
- Componentes wrapper
- Hooks personalizados

## Enfoques de Personalización

Dynamic Framework está construido sobre Bootstrap 5, lo que significa que la personalización sigue los patrones establecidos de Bootstrap.

### 1. Variables CSS (Runtime)

Sobrescribe variables CSS de Bootstrap para personalización en tiempo de ejecución:

```css
/* src/styles/custom.css */
:root {
  /* Colores */
  --bs-primary: #004B8D;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-danger: #dc3545;

  /* Tipografía */
  --bs-body-font-family: 'Inter', sans-serif;
  --bs-body-font-size: 1rem;
  --bs-body-line-height: 1.5;

  /* Border radius */
  --bs-border-radius: 0.375rem;
  --bs-border-radius-lg: 0.5rem;

  /* Espaciado (usado por utilidades) */
  --bs-spacer: 1rem;
}
```

### 2. Variables SCSS (Build Time)

Para personalización más profunda, sobrescribe variables SCSS de Bootstrap antes de importar:

```scss
// src/styles/custom.scss

// Sobrescribir variables de Bootstrap ANTES de importar
$primary: #004B8D;
$secondary: #00A0DF;
$font-family-base: 'Inter', sans-serif;
$border-radius: 0.5rem;
$btn-border-radius: 2rem; // Botones pill

// Importar estilos de Dynamic/Bootstrap
@import '@dynamic-framework/ui-react/dist/css/dynamic-ui.css';

// Tus estilos adicionales DESPUÉS de importar
.my-custom-class {
  // ...
}
```

### 3. Estilos a Nivel de Componente

Estiliza componentes específicos usando sus clases CSS:

```css
/* Apuntar a componentes Dynamic */
.btn {
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.card {
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.form-control:focus {
  border-color: var(--bs-primary);
  box-shadow: 0 0 0 0.25rem rgba(0, 75, 141, 0.25);
}
```

## Configuración de DContextProvider

Dynamic Framework usa `DContextProvider` para configurar el comportamiento de los componentes:

```tsx
// src/main.tsx
import { DContextProvider } from '@dynamic-framework/ui-react';

const config = {
  language: 'es',
  currency: {
    symbol: '$',
    precision: 2,
    separator: '.',
    decimal: ',',
  },
};

function App() {
  return (
    <DContextProvider {...config}>
      {/* Tu app */}
    </DContextProvider>
  );
}
```

## Personalizaciones Comunes

### Colores de Marca

```css
:root {
  --bs-primary: #tu-color-de-marca;
  --bs-primary-rgb: r, g, b; /* Valores RGB para utilidades de opacidad */

  /* Generar variantes de color */
  --bs-link-color: var(--bs-primary);
  --bs-link-hover-color: #tono-más-oscuro;
}
```

### Fuentes Personalizadas

```css
/* Importar tu fuente */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --bs-body-font-family: 'Inter', system-ui, sans-serif;
  --bs-headings-font-family: 'Inter', system-ui, sans-serif;
}
```

### Estilos de Botones

```css
/* Botones redondeados tipo pill */
.btn {
  --bs-btn-border-radius: 2rem;
}

/* Variantes específicas de botones */
.btn-primary {
  --bs-btn-bg: var(--bs-primary);
  --bs-btn-border-color: var(--bs-primary);
  --bs-btn-hover-bg: #003d73;
  --bs-btn-hover-border-color: #003d73;
}
```

### Estilos de Cards

```css
.card {
  --bs-card-border-radius: 1rem;
  --bs-card-border-color: transparent;
  --bs-card-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
```

## Mejores Prácticas

### Hacer

- **Usar variables CSS** para temas dinámicos (modo oscuro, cambio de marca)
- **Usar variables SCSS** para personalización en tiempo de compilación
- **Seguir patrones de Bootstrap** para asegurar compatibilidad
- **Probar accesibilidad** - verificar ratios de contraste de color
- **Revisar Storybook** para propiedades CSS específicas de componentes

### No Hacer

- **No usar `!important`** - usa especificidad adecuada en su lugar
- **No modificar node_modules** - sobrescribe via CSS/SCSS
- **No hardcodear colores** - usa variables CSS para consistencia
- **No saltarse las pruebas** - verifica cambios en todos los navegadores

## Recursos

- [Variables CSS de Bootstrap](https://getbootstrap.com/docs/5.3/customize/css-variables/) - Referencia completa de variables
- [Variables SCSS de Bootstrap](https://getbootstrap.com/docs/5.3/customize/sass/) - Guía de personalización Sass
- [Dynamic Storybook](https://react.dynamicframework.dev) - Propiedades CSS de componentes
- [Contrast Checker](https://webaim.org/resources/contrastchecker/) - Validación de accesibilidad

## Próximos Pasos

- Aprende sobre [variables CSS y temas](theming.html)
- Descubre cómo [extender componentes](extending.html)
