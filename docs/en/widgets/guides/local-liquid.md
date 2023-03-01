---
search: true
---

# Liquid in Local Widgets

Use the liquidParser library to be able to make use of Liquid within the development of your Widget in your local environment. When you push your Widget to the Modyo Platform, the platform will replace your local liquid variables with the platform variables.

Maintain a high pace of development using the same variables that are used in Modyo Platform within your local environment in order to verify that the Liquid code is correct without the need to test it directly in Modyo Platform. 

### Widget templates

In our widget catalog, we offer templates that contain the bare minimum for uploading a widget to Modyo Platform. The templates can be found in the following frameworks:

- [Vue](https://github.com/modyo/modyo-widgets-template-vue)
- [Angular](https://github.com/modyo/modyo-widgets-template-angular)
- [React](https://github.com/modyo/modyo-widgets-template-react)

>All the steps in this guide use our Vue template as a base.

Follow these steps to add new liquid variables to your local widget:

## Add new variables

In the `local-liquid-variables.js` file you can find some test variables. 

1. To locate this file open the following URL https://github.com/modyo/modyo-widgets-template-vue/blob/master/src/liquid/local-liquid-variables.js
2. The file contains some variables, for this example we are going to use the site variables.

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

## Import and use liquidParser

In case you use our widget templates, these steps are not necessary since the template already has everything ready for you to start developing.

1. In the App.vue view, we import the liquidParser library to be able to make use of the liquid language in the Widget using: 

```js
import liquidParser from './liquid/liquidParser';
```

We must also ensure that we are importing `liquidjs`, the Shopify package for the Liquid language in Javascript, as a dependency.

2. Open `package.json` and add the following dependency.

`"liquidjs":"^10.4.0"`

3. When exporting your App (in our case in `App.vue`), you can add your liquid variables using liquidParser.parse(). Inside the parse() method, you can make use of any liquid expression.

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

4. In your HTML code, you can start making use of your variables using Liquid. In the vue template, we display a `<h1>` as follows:

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