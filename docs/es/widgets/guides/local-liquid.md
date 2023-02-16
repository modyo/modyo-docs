---
search: true
---

# Liquid en Widgets Locales

Utiliza la librería de liquidParser para poder hacer uso de Liquid dentro del desarrollo de tu Widget en tu ambiente local. Al momento de hacer push de tu Widget hacia Modyo Platform, la plataforma reemplazará tus variables liquid locales por las variables de la plataforma.

Mantén un alto ritmo de desarrollo usando las mismas variables que se utilizan en Modyo Platform dentro de tu ambiente local con el propósito de verificar que el código Liquid sea el correcto sin la necesidad de probarlo directamente en Modyo Platform. 

### Plantillas de widget

En nuestro catálogo de widgets, ofrecemos plantillas que contienen lo mínimo para subir un widget a Modyo Platform. Las plantillas las puedes encontrar en los siguientes frameworks:

- [Vue](https://github.com/modyo/modyo-widgets-template-vue)
- [Angular](https://github.com/modyo/modyo-widgets-template-angular)
- [React](https://github.com/modyo/modyo-widgets-template-react)

>Todas las instrucciones de esta guía usan como base la plantilla de vue.

Sigue estos pasos para agregar nuevas variables liquid a tu widget local:

## Agregar nuevas variables

En el archivo `local-liquid-variables.js` puedes encontrar algunas variables de prueba. 

1. Para localizar este archivo abre la siguiente URL https://github.com/modyo/modyo-widgets-template-vue/blob/master/src/liquid/local-liquid-variables.js
2. El archivo contiene algunas variables, para este ejemplo vamos a utilizar las variables de site.

```js
export default {
  ...
  site: {
    url: 'https://fed-team.modyo.cloud/test',
    name: 'my site',
    lang: 'en',
  },
  ...
}
```

## Importar y utilizar liquidParser

En caso de usar nuestras plantillas de widgets, no es necesario estos pasos ya que la plantilla ya tiene todo listo para que empieces a desarrollar.

1. En la vista App.vue, importamos la librería liquidParser para poder hacer uso del lenguaje liquid en el Widget usando: 

```js
import liquidParser from './liquid/liquidParser';
```

También debemos asegurar que estemos importando como dependencia `liquidjs`, el paquete de Shopify para el lenguaje Liquid en Javascript.

2. Abre `package.json` y agrega la siguiente dependencia.

`"liquidjs": "^10.4.0"`

3. Al momento de exportar tu App (en nuestro caso en `App.vue`), puedes agregar tus variables liquid usando liquidParser.parse(). Dentro del método parse(), puedes hacer uso de cualquier expresión liquid.

```js
export default {
  name: 'App',
  components: {
    ExampleComponent,
  },
  data() {
    return {
      siteName: liquidParser.parse('{{site.name | replace: "my", "your" | upcase }}')
    };
  }
}
```

4. En tu código HTML, puedes empezar a hacer uso de tus variables usando Liquid. En la plantilla vue, desplegamos un `<h1>` de la siguiente manera:

```html
<h1
  v-if="_i18n.asyncLoading"
  class="mb-3"
>
  {{ $t('salutation', [siteName, basePath]) }}
  {{ $t('Path') }}
  {{ $t('Pathnew') }}
</h1>
```