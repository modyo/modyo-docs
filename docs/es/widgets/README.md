---
search: true
---

# Catálogo de Widgets

Bienvenido al **Catálogo de Widgets Financieros de Modyo**. Acá encontrarás una completa referencia de todas las experiencias financieras que Modyo entrega como parte de este producto, desde la instalación y desarrollo en tu ambiente local, hasta la descripción de interfaces, parámetros disponibles y referencia de las principales funcionalidades de cada widget.

<img src="/assets/img/widgets/widgets.png" style="margin-top: 40px;" />

### ¿Qué es un widget?

Un **widget** es un componente aislado que empaqueta su propio marcado (`html`), estilo (`css`) y javascript de manera que pueda ser desplegado como parte de cualquier página web sin tener errores de runtime o conflictos con los estilos o el javascript de la página que lo aloja.

En otras palabras, un **widget** es un [micro frontend](https://martinfowler.com/articles/micro-frontends.html): un estilo arquitectónico que permite componer y desplegar múltiples aplicaciones javascript en una página.

Modyo provee la plataforma ideal para desplegar este tipo de aplicaciones y crear tu galería de widgets a través del [widget builder](https://develop.docs.modyo.com/platform/channels/widgets.html) y las herramientas necesarias para poder desarrollarlas usando el [modyo-cli](https://www.npmjs.com/package/@modyo/cli) o el [SDK de javascript](https://www.npmjs.com/package/@modyo/sdk).

Modyo es una plataforma agnóstica en cuanto al uso de frameworks javascript, puedes desplegar aplicaciones hechas en **Vue**, **Angular** o **React**. En el caso de los **widgets financieros**, nosotros decidimos usar **Vue** (porque opinamos que la curva de aprendizaje es pequeña, tiene un ecosistema vibrante que gana tracción, entre otras cosas), pero tú y tu equipo pueden ocupar Angular o React.

### ¿Por qué usar un widget de este catálogo?

El catálogo de widgets financieros están diseñados para acelerar el desarrollo de tus experiencias digitales porque te ofrecen componentes interactivos para que los personalices y los ensambles en flujos que se adapten a tu negocio.

Los widgets financieros entregan de la caja:

- **UX** pensado para facilitar la interacción de usuarios
- **Accesibilidad básica** (como contraste de colores adecuados, uso de tamaños tipográficos legibles, estructura semántica, etc)
- **Internacionalización y localización de textos y monedas**. Por defecto cada widget viene en inglés y español, pero tiene toda la infraestructura necesaria para personalizar los idiomas que trae o agregar más idiomas para que se adapte a la necesidad de tu negocio. Si son desplegados en Modyo, los widgets detectan el idioma configurado para el sitio
- **Validaciones para formularios, fechas**
- **Estilos planos para una fácil personalización** con nuestro sistema de diseño descargabla en PDF [desde aquí](/assets/pdf/Widget_Modyo.pdf) que usa **Sass** y librerías populares como [bootstrap](https://getbootstrap.com/) o font awesome

## Comenzando

Para poder comenzar a usar los widgets de este catálogo, lo primero que necesitas es tener instalado la herramienta de línea de comandos de Modyo: el `CLI`:

```
# si usas `npm`
$ npm i -g @modyo/cli
# si usas `yarn`
$ yarn global add @modyo/cli #via yarn
```

Eso debería instalar la última versión estable de la herramienta a nivel global. Puedes consultar la versión del `CLI` que quedó instalada:

```
$ modyo-cli --version
```

Con el `modyo-cli` instalado ya puedes crear widgets y desplegarlos en un sitio Modyo.

Sin embargo, para poder usar los widgets de este catálogo, necesitas tú, y tu organización, un paso extra que es obtener un token que te permitirá tener acceso a todos los widgets.

:::tip Acceso a las Plantillas
Para acceder a las plantillas de los Widgets Financieros se debe contar con un acceso válido al repositorio que se entrega como parte del acuerdo de licencia.
:::

Ahora ya podemos descargarnos un widget del catálogo usando el `cli` de Modyo:

```
# - El primer argumento (nombre del widget) es obligatorio
# - El segundo argumento,
# 	si necesitamos descargar el widget a una carpeta con otro nombre,
# 	es opcional
$ modyo-cli get <nombre-del-widget-del-catalogo> <nombre-de-la-carpeta>
```

Para tu conveniencia, cada widget de esta documentación incluye la línea de comando necesaria para instalarlo.

Cada widget provee varios `scripts` que te serán útiles en el desarrollo:

- `(yarn|npm) serve`: levanta el widget en el ambiente local usando `vue-cli-service`
- `(yarn|npm) build`: compila y transpila el widget aplicando una serie de optimizaciones para ser desplegado en producción. _Siempre debe ejecutarse **antes**_ de enviar el widget a Modyo.
- `(yarn|npm) lint`: ejecuta un linter para detectar errores en el javascript
- `(yarn|npm) test:unit`: ejecuta los test unitarios del widget
- `(yarn|npm) i18n:report`: genera un reporte con las llaves aún no traducidas
- `(yarn|npm) lint:style`: ejecuta un linter de estilos
- `(yarn|npm) modyo-push`: envía el widget compilado al sitio de Modyo que tengamos configurado
- `(yarn|npm) modyo-serve`: levanta el widget en ambiente local pero agrega los estilos y librerías javascript que encontrará el widget cuando se despliegue en el sitio.
