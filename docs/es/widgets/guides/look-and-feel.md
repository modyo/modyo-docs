---
search: true
---

# Personalización de estilos

Todos los Widgets de este catalogo tienen como base un diseño plano, basado en Bootstrap, esperando ser intervenido y modificado para adaptarse a los diseños y lineamientos del cliente. Recuerden que estos Widgets están pensados para ser usados como base para el producto final y no como un producto en si mismo.

Tanto para la base de estilos, asi como la grilla utilizada en los Widgets, se hace uso de [Bootstrap](https://getbootstrap.com/) en su version `4.5.x`, utilizando al máximo los helpers y clases que éste incluye. De esta manera la cantidad de estilos personalizados en nuestros Widgets es muy baja lo que hace que su modificación sea simple y fácil.

:::tip
Para aprovechar al máximo el potencial de bootstrap usamos **SCSS** como pre-procesador de **css** lo que nos permite modificar los valores por defecto de las variables utilizadas en la compilación de bootstrap.
:::

```html{1-2}
<div class="bg-white px-3 pt-3 pb-2 rounded mt-3">
  <div class="d-flex justify-content-between mb-2">
    <!-- content -->
  </div>
</div>
```

### Estructura de archivos y carga de estilos

En la carpeta `src` del proyecto encontraremos una carpeta llamada `scss` que tiene la siguiente estructura:

```treeview{4-6}
├── src/
│   ├── ...
│   ├── scss/
│   │   ├── _theme.scss
│   │   ├── _variables.scss
│   │   └── custom.scss
│   ├── ...
```

### Tema

El archivo `_theme.scss` es usado para:

- Estilos globales del Widget
- Extender bootstrap usando sus mixins

```scss{2,3,8,11}
// Ejemplo: usamos el mixin bg-variant para crear mas colores de fondo
@include bg-variant(".bg-tertiary", $tertiary, true);
@include bg-variant(".bg-tertiary-10", $tertiary-10, true);

// En estos siguientes ejemplos usamos el mixin button-variant que nos permite crear nuevos botones con todos sus estados
.btn-tertiary {
  @include button-variant($tertiary, $tertiary);
}
.btn-outline-tertiary {
  @include button-outline-variant($tertiary, $white, $primary-80, $primary-80);
  color: $secondary-100;
}
```

Puedes encontrar un listado con los mixins disponibles [aqui](https://gist.github.com/jCrip/4d76a90a4a5c569d9300e633ea8b52c7) y una explicación detallada [aqui](https://luisramirez.dev/como-usar-los-mixins-de-bootstrap-4-con-scss/)

#### Variables

El archivo `_variables.scss` contiene todas las variables por defecto de bootstrap (colores, tamaños, botones, etc). Aquí podemos cambiar los valores que necesitemos para ajustar los estilos base de bootstrap a nuestro diseño, evitando asi tener que sobre escribir o añadir mas clases a nuestro proyecto (puedes leer mas sobre como modificar bootstrap [aqui](https://getbootstrap.com/docs/4.5/getting-started/theming/)).

##### Ejemplo

Antes

```scss
// ...
$light: $secondary-10;
// ...
$border-width: 1px;
$border-color: $primary-10;
$border-radius: 0.35rem;
//...
```

<img src="/assets/img/widgets/before.png" width="400">

Después

```scss{2,4-6}
// ...
$light: lightblue;
// ...
$border-width: 2px;
$border-color: $secondary;
$border-radius: 1.35rem;
//...
```

<img src="/assets/img/widgets/after.png" width="400">

### Custom

En el archivo `custom.scss` importamos y le damos orden a todas las otras hojas de estilos que tenemos en la carpeta **scss** junto con la base de bootstrap.

```scss{1}
@import "./variables"; // siempre antes de bootstrap
@import "~bootstrap";
@import "./theme.scss";
```

:::tip
El orden es importante, las **variables** siempre van antes de importar bootstrap.
:::

Éste archivo **scss** se importa en el archivo `main.js` del proyecto.

```js{4}
import Vue from "vue";
//...
import "bootstrap"; // solo importa el javascript, no los estilos
import "./scss/custom.scss";
//...
new Vue({
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#my-Widget");
```

:::warning Importante
El `@import 'bootstrap'` de este archivo **sólo** importa bootstrap.js y no los estilos!
:::

### Estilos de componentes

Algunos de los componentes de los Widgets tienen estilos propios y estos se escriben en el mismo componente (`.vue`). De esta manera podemos definir el alcance de estos estilos a nivel del componente sin afectar otras partes del Widget utilizando el atributo `scoped`.

```html{5}
<template>...</template>

<script>
  ...
</script>

<style lang="scss" scoped>
  .consumer-loan-months-selector {
    .card {
      border: 1px solid $primary-10;
    }
    .card-header {
      padding: 0.75rem 1.25rem;
    }
  }
</style>
```

### PurgeCSS

Cuando estás construyendo un Widget con Bootstrap (u otro framework de estilos) sólo usarás un pequeño conjunto de éste, y se incluirán muchos estilos CSS no utilizados. Aquí es donde entra en juego **PurgeCSS**. PurgeCSS analiza tu contenido y tus archivos CSS. Luego hace coincidir los selectores utilizados en tus archivos con los de tus archivos de contenido y elimina los selectores no utilizados de tu CSS, lo que da como resultado archivos CSS más pequeños.

Los Widgets utilizan [PurgeCSS](https://purgecss.com/) en conjunto con [PostCSS](https://postcss.org/) como parte del flujo de desarrollo. De esta manera logramos quitar esos **bytes** extra que no necesitamos y optimizamos nuestros Widgets. ¡Excelente!

::: danger PROBLEMA!
¿Qué pasa con los estilos **NO** declarados en el contenido, pero qué **SÍ** son usados en el Widget?
:::

A veces nos podemos encontrar con algunos problemas de estilos, por ejemplo cuando usamos el componente modal de Bootstrap y no se carga el estilo del `modal-backdrop` ya que este elemento se crea de manera dinámica al abrir el modal; ó cuando usamos librerías de componentes externos en nuestros Widgets donde los estilos de ese componente no se han cargado y no están en el sitio. Esto pasa porque **PurgeCSS** no sabe donde leer el contenido de el componente externo.

Para incluir los estilos que **PurgeCSS** ha eliminado pero que necesitamos en el sitio tenemos que declararlos en un archivo de configuración de **PostCSS**. Este archivo se encuentra en la raíz del Widget y se llama **postcss.config.js**

```js
const PURGE_CSS = require("@fullhuman/postcss-purgecss");

const IN_PRODUCTION = process.env.NODE_ENV === "production";
const plugins = {};

if (IN_PRODUCTION) {
  plugins.purgecss = PURGE_CSS({
    content: ["./public/**/*.html", "./src/**/*.vue"],
    defaultExtractor(content) {
      const contentWithoutStyleBlocks = content.replace(
        /<style[^]+?<\/style>/gi,
        ""
      );
      return (
        contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) ||
        []
      );
    },
    whitelist: [],
    whitelistPatterns: [
      /-(leave|enter|appear)(|-(to|from|active))$/,
      /^(?!(|.*?:)cursor-move).+-move$/,
      /^router-link(|-exact)-active$/,
      /data-v-.*/,
      /svg.*/,
      /fa.*/,
      /^d-*/,
    ],
  });
}
// ...
```

En este archivo podemos obligar a **PurgeCSS** a incluir los estilos de 3 maneras distintas:

- Agregar el archivo de contenido a la propiedad `content`, de esta manera PurgeCSS es capaz de leer el contenido y determinar que estilos debe incluir.

  ```js{6}
  // ...
  plugins.purgecss = PURGE_CSS({
    content: [
      './public/**/*.html',
      './src/**/*.vue',
      'node_modules/@modyo/financial-commons/src/components/MStepper/**/*.vue'
    ]
    defaultExtractor(content) { // block code }
  // ...
  ```

- Agregar palabras claves a la propiedad `whitelist`

  ```js{2}
  ...
    defaultExtractor(content) { // block code }
    whitelist: ['modal-backdrop', 'fade', 'show'],
  ...
  ```

- Agregar patrones regex a la propiedad `whitelistPatterns`

  ```js{6}
  // ...
    defaultExtractor(content) { // block code }
    whitelist: ['fade', 'show'],
    whitelistPatterns: [
    // ...
      /modal-.*/
    ]
  // ...
  ```
