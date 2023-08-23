---
search: true
---

# Componentes

Los componentes Web son una una unidad autónoma y reutilizable de una interfaz de usuario que encapsula no sólo su estructura (los elementos HTML, su disposición y cómo se presentarán los datos, así como los estilos definen la apariencia visual del componente, como colores, tipografía, márgenes, etc.); si no que también su comportamiento o lógica (manejar eventos, administrar estados y acciones específicas). 

Los componentes permiten dividir una interfaz de usuario en piezas más pequeñas, manejables y reutilizables que facilitan el desarrollo, mantenimiento y escalabilidad de una aplicación. 

### Stencil y React

Aunque Dynamic Framework ofrece un API homogénea para el desarrollador, sus componentes Web se implementaron usando [Stencil](https://stenciljs.com/), para las definiciones de más bajo nivel; y [React](https://react.dev/) para las abstracciones con requerimientos más complejos como manejo de estados, manteniendo siempre en un Micro Frontend desarrollado en React no tenga requerimientos particulares.

A pesar de que la implementación de Dynamic Framework involucra el empleo de dos bibliotecas individuales, esta dualidad permanece imperceptible para el desarrollador, haciendo que su integración en un desarrollo de un Micro Frontend hecho en React, no imponga requisitos especiales más que importar y usarla.