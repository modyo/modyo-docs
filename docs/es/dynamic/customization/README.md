---
search: true
---

# Personalización

Personalizar Dynamic Framework no modifica el paquete. Un theme es una hoja de estilos que se carga después del CSS de Dynamic UI, y un componente propio usa los de Dynamic como base. Esta sección cubre tres caminos.

## Sobrescribir variables

[Sistema de temas](theming.html) describe el contrato de los tokens `--bs-*` de Dynamic UI 2.12.0 para quien mantiene la hoja de variables a mano:

- Dónde se carga el theme y por qué gana, con y sin `@layer`
- El contrato de color: tripletes `R, G, B`, rampas y cambio de marca completo de un role
- Texto sobre fondo, tipografía, radios, espaciado y variables de componente
- Zonas con su propia paleta

## Generar un theme

[Generar y validar un theme](theme-tools.html) es un flujo opcional: `dynamic-theme-expand` escribe la hoja de variables a partir de un JSON corto, y `dynamic-theme-validate` revisa cualquier hoja de theme, generada o escrita a mano.

## Extender componentes

[Extender componentes](extending.html) explica cómo crear componentes propios a partir de los de Dynamic:

- Patrones de composición
- Componentes wrapper
- Hooks personalizados

## Recursos

- [Storybook de Dynamic UI 2.12.0](https://react.dynamicframework.dev/v2.12.0/)
- [CSS de Dynamic UI 2.12.0](https://cdn.dynamicframework.dev/assets/2.12.0/ui-react/css/dynamic-ui.min.css)
