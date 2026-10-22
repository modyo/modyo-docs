---
search: true
---

# Personalización

Personalizar Dynamic Framework consiste en dos cosas: ajustar la apariencia de Dynamic UI con un theme y construir componentes propios sobre los de la librería. Ninguna de las dos modifica el paquete: un theme es una hoja de estilos que se carga después del CSS de Dynamic, y un componente propio usa los de Dynamic como base.

## Contenido de la sección

### [Sistema de temas](theming.html)

Cómo se sobrescriben los tokens `--bs-*` de Dynamic UI:

- El contrato de color: tripletes `R, G, B`, rampas y rebrand completo de un role
- Texto sobre fondo, tipografía, radios y espaciado
- Zonas con su propia paleta
- El descriptor `token-overrides.json` y las herramientas `dynamic-theme-expand` y `dynamic-theme-validate`

### [Extender componentes](extending.html)

Cómo crear componentes propios a partir de los de Dynamic:

- Patrones de composición
- Componentes wrapper
- Hooks personalizados

## Requisitos

- `@dynamic-framework/ui-react` 2.12.0 o superior para las herramientas de theme; el contrato de tokens es el de la versión que cargues.
- El CSS de Dynamic UI cargado en la página (`dist/css/dynamic-ui.css` del paquete o `css/dynamic-ui.min.css` del CDN versionado) antes del CSS del theme.
- React 18 o 19 y Node.js 22 o superior, según el `package.json` del paquete.

## Recursos

- [Storybook de Dynamic UI 2.12.0](https://react.dynamicframework.dev/v2.12.0/)
