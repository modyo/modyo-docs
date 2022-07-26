---
search: true
title: Widgets
meta:
  - name: description
    content: Bienvenido al Catálogo de Widgets Financieros de Modyo. Acá encontrarás una completa referencia de todas las experiencias financieras que Modyo entrega como parte de este producto, desde la instalación y desarrollo en tu ambiente local, hasta la descripción de interfaces, parámetros disponibles, y referencia de las principales funcionalidades de cada Widget.
version: 9.2
---

# {{ $frontmatter.title }}

{{ $frontmatter.meta[0].content }}

### ¿Qué es un Widget?

Un **Widget** es un componente aislado que empaqueta su propio marcado (`html`), estilo (`css`), y javascript de manera que pueda ser desplegado como parte de cualquier página web sin tener errores de runtime o conflictos con los estilos o el javascript de la página que lo aloja.

En otras palabras, un **Widget** es un [micro frontend](https://martinfowler.com/articles/micro-frontends.html): un estilo arquitectónico que permite componer y desplegar múltiples aplicaciones javascript en una página.

Modyo provee la plataforma ideal para desplegar este tipo de aplicaciones y crear tu galería de [Widgets](https://docs.modyo.com/es/platform/channels/Widgets.html) y las herramientas necesarias para poder desarrollarlas usando [modyo-cli](https://www.npmjs.com/package/@modyo/cli) o [SDK de javascript](https://www.npmjs.com/package/@modyo/sdk).

Modyo es una plataforma agnóstica en cuanto al uso de frameworks javascript, puedes desplegar aplicaciones hechas en **Vue**, **Angular**, **React**, etc. En el caso de los **Widgets financieros**, nosotros principalmente usamos **Vue** (porque opinamos que la curva de aprendizaje es pequeña, tiene un ecosistema vibrante que gana tracción, entre otras cosas), pero eres libre de escoger otra opción.


### ¿Por qué usar un Widget de este catálogo?

El catálogo de Widgets financieros están diseñados para acelerar el desarrollo de tus experiencias digitales porque te ofrecen componentes interactivos para que los personalices y los ensambles en flujos que se adapten a tu negocio.

Los Widgets financieros entregan de la caja:

- **UX** pensado para facilitar la interacción de usuarios
- **Accesibilidad básica** (como contraste de colores adecuados, uso de tamaños tipográficos legibles, estructura semántica, etc)
- **Internacionalización y localización de textos y monedas**. Por defecto cada Widget viene en inglés y español, pero tiene toda la infraestructura necesaria para personalizar los idiomas que trae o agregar más idiomas para que se adapte a la necesidad de tu negocio. Si son desplegados en Modyo, los Widgets detectan el idioma configurado para el sitio
- **Validaciones para formularios, fechas**
- **Estilos planos para una fácil personalización** con nuestro sistema de diseño descargable en PDF [desde aquí](/assets/pdf/Widget_Modyo.pdf) que usa **Sass** y librerías populares como [Bootstrap](https://getbootstrap.com/) y [Font Awesome](https://github.com/FortAwesome/vue-fontawesome#using-brand-icons)