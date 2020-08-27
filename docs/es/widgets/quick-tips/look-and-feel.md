---
search: true
---

# Look and Feel

Todos los widgets de este catalogo tienen como base un diseño plano, basado en Bootstrap, esperando ser intervenido y modificado para adaptarse a los diseños y lineamientos del cliente. Recuerden que estos widgets están pensados para ser usados como base para el producto final y no como un producto en si mismo.

Tanto para la base de estilos, asi como la grilla utilizada en los widgets, se hace uso de [Bootstrap](https://getbootstrap.com/) en su version `4.5.x`, utilizando al máximo los helpers y clases que éste incluye. De esta manera la cantidad de estilos personalizados en nuestros widgets es muy baja lo que hace que su modificación sea simple y fácil.

::: tip
Para aprovechar al máximo el potencial de bootstrap usamos **SCSS** como pre-procesador de **css** lo que nos permite modificar los valores por defecto de las variables utilizadas en la compilación de bootstrap.
:::

```html{1-2}
<div class="bg-white px-3 pt-3 pb-2 rounded mt-3">
  <div class="d-flex justify-content-between mb-2">
    <!-- content -->
  </div>
</div>
```

## Estructura de archivos y carga de los estilos

En la carpeta `src` del proyecto encontraremos una carpeta llamada `scss` que tiene la siguiente estructura:

``` treeview{4-6}
├── src/
│   ├── ...
│   ├── scss/
│   │   ├── _theme.scss
│   │   ├── _variables.scss
│   │   └── custom.scss
│   ├── ...
```

### Theme

El archivo `_theme.scss` es usado para:

* Estilos globales del widget
* Extender bootstrap usando sus mixins

```scss{2,3,8,11}
// Ejemplo: usamos el mixin bg-variant para crear mas colores de fondo
@include bg-variant(".bg-tertiary", $tertiary, true);
@include bg-variant(".bg-tertiary-10", $tertiary-10, true);

// En estos siguientes ejemplos usamos el mixin button-variant que nos permite crear nuevos botones con todos sus estados
.btn-tertiary {
  @include button-variant($tertiary, $tertiary);
}
.btn-outline-tertiary {
  @include button-outline-variant($tertiary, $white, $primary-80, $primary-80 );
  color: $secondary-100;
}
```

Puedes encontrar un listado con los mixins disponibles [aqui](https://gist.github.com/jCrip/4d76a90a4a5c569d9300e633ea8b52c7) y una explicación detallada [aqui](https://luisramirez.dev/como-usar-los-mixins-de-bootstrap-4-con-scss/)

### Variables

El archivo `_variables.scss` contiene todas las variables por defecto de bootstrap (colores, tamaños, botones, etc). Aquí podemos cambiar los valores que necesitemos para ajustar los estilos base de bootstrap a nuestro diseño, evitando asi tener que sobre escribir o añadir mas clases a nuestro proyecto (puedes leer mas sobre como modificar bootstrap [aqui](https://getbootstrap.com/docs/4.5/getting-started/theming/)).

#### Ejemplo

Antes

```scss
// ...
$light: $secondary-10;
// ...
$border-width : 1px;
$border-color : $primary-10;
$border-radius: .35rem;
//...
```

<img src="/assets/img/widgets/before.png" width="400">

Después

```scss{2,4-6}
// ...
$light: lightblue;
// ...
$border-width : 2px;
$border-color : $secondary;
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

::: tip
El orden es importante, las **variables** siempre van antes de importar bootstrap.
:::

Éste archivo **scss** se importa en el archivo `main.js` del proyecto.

```js{4}
import Vue from 'vue';
//...
import 'bootstrap'; // solo importa el javascript, no los estilos
import './scss/custom.scss';
//...
new Vue({
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#my-widget');

```

::: warning Importante
El `@import 'bootstrap'` de este archivo **sólo** importa bootstrap.js y no los estilos!
:::
