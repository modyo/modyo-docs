---
search: true
---

# Componentes

Los componentes web son unidades autónomas y reutilizables de una interfaz de usuario. Encapsulan no solo su estructura, como los elementos HTML, su disposición y cómo se presentarán los datos, sino también su estilo.  Definen la apariencia visual del componente, como colores, tipografía y márgenes, etc. Además, los componentes también incluyen su comportamiento o lógica, como el manejo de eventos, la gestión de estados y acciones específicas.

Los componentes permiten dividir una interfaz de usuario en piezas más pequeñas, manejables y reutilizables, lo que facilita el desarrollo, mantenimiento y escalabilidad de una aplicación.

### Stencil y React

Dynamic Framework ofrece una API homogénea para los desarrolladores. Sus componentes Web se implementaron usando [Stencil](https://stenciljs.com/) para las definiciones de más bajo nivel y [React](https://react.dev/) para las abstracciones con requerimientos más complejos, como el manejo de estados. Manteniendo asi un Micro frontend desarrollado en React sin requerimientos particulares adicionales.

A pesar de que la implementación de Dynamic Framework involucra el uso de dos bibliotecas individuales, esta dualidad es imperceptible para el desarrollador, lo que hace que su integración en el desarrollo de un Micro frontend creado en React no imponga requisitos especiales, más allá de importarla y usarla.