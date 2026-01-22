---
search: true
---

# Dynamic Framework

Framework de componentes React especializado para aplicaciones financieras, construido sobre Bootstrap 5 y optimizado para micro frontends con la plataforma Modyo.

:::tip Versión 2.0 disponible
Dynamic UI 2.0 trae un nuevo lenguaje visual, iconos Lucide, y 8 nuevos componentes.
- [Ver novedades en v2.0](whats-new-v2.html)
- [Guía de migración](getting-started/migration-v2.html)
:::

## Documentación Técnica

### Arquitectura
- **[Visión General Técnica](overview.html)** - Arquitectura, tecnologías y patrones de diseño

### [Guías](getting-started/)
Todo lo necesario para comenzar a desarrollar con Dynamic.

- **[Instalación](getting-started/installation.html)** - Métodos de instalación y configuración
- **[Primera Aplicación](getting-started/first-app.html)** - Tutorial completo paso a paso
- **[Estructura del Proyecto](getting-started/project-structure.html)** - Organización y mejores prácticas

### [Desarrollo](development/)
Guías técnicas para construir aplicaciones con Dynamic.

- **[Componentes](development/components.html)** - Catálogo de 43 componentes especializados
- **[Experiencias y Plantillas](development/experiences.html)** - Soluciones prediseñadas por industria
- **[Integración con React](development/react-integration.html)** - Desarrollo avanzado con React
- **[Widgets](development/widgets.html)** - Creación de widgets modulares
- **[Integración con APIs](development/api-integration.html)** - Conexión con servicios backend

### [Personalización](customization/)
Adapta Dynamic a tu identidad y necesidades específicas.

- **[Sistema de Temas](customization/theming.html)** - Personalización visual completa
- **[Estilos y CSS](customization/styling.html)** - Técnicas avanzadas de estilizado
- **[Extender Componentes](customization/extending.html)** - Crea y modifica componentes

## Instalación Rápida

```bash
# Crear proyecto con Dynamic Framework
npx @modyo/cli@latest get dynamic-react-base-template my-app

# Instalar dependencias
cd my-app && npm install

# Iniciar servidor de desarrollo
npm start
```

Aplicación disponible en `http://localhost:8080`

## Características Técnicas

### Componentes
- **43 componentes React** especializados para banca
- **Sistema de diseño** basado en Bootstrap 5
- **TypeScript** support completo
- **Accesibilidad WCAG 2.1** integrada

### Arquitectura
- **Micro Frontends** con Module Federation
- **API-first** design
- **Lazy loading** y code splitting
- **State management**: Zustand (UI) + TanStack Query (server)

## Stack Tecnológico

- **React**: 19.x (requiere ~19.2.1 como peer dependency)
- **TypeScript**: Tipado estático completo
- **Bootstrap**: 5.3.8 customizable
- **Build Tools**: Webpack 5, Vite support
- **Testing**: Jest, React Testing Library
- **Linting**: ESLint, Prettier

## Guías de Desarrollo

### Guías
1. [Instalación](getting-started/installation.html) - Setup del entorno
2. [Primera App](getting-started/first-app.html) - Tutorial paso a paso
3. [Estructura](getting-started/project-structure.html) - Organización del proyecto

### Desarrollo Avanzado
1. [Componentes](development/components.html) - Catálogo y APIs
2. [React Patterns](development/react-integration.html) - Hooks y patterns
3. [API Integration](development/api-integration.html) - Backend connectivity
4. [Widgets](development/widgets.html) - Componentes modulares

### Personalización
1. [Theming](customization/theming.html) - Variables y temas
2. [Styling](customization/styling.html) - CSS y SCSS
3. [Extending](customization/extending.html) - Componentes custom

## Recursos Técnicos

### Documentación
- [Storybook Components](https://react.dynamicframework.dev) - Catálogo interactivo
- [API Reference](https://dynamic.modyo.com/docs) - Documentación de APIs
- [NPM Package](https://www.npmjs.com/package/@dynamic-framework/ui-react) - Registro de paquetes

### Herramientas de Desarrollo
- [Modyo CLI](https://www.npmjs.com/package/@modyo/cli) - Herramienta de línea de comandos

### Soporte Técnico
- [Soporte](https://support.modyo.com) - Soporte técnico