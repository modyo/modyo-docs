---
search: true
---

# Compartir estado entre Widgets

Todos los Widgets del catalogo usan [Vuex](https://vuex.vuejs.org/) para la gestión del estado de un Widget y como un almacén centralizado para todos los componentes de éste, con reglas que garantizan que el estado se puede cambiar de manera predecible. En otras palabras **Vuex** nos ayuda a compartir datos entre distintos componentes de un mismo Widget.

### La estructura de Vuex

![vuex](/assets/img/widgets/vuex.png)

- **Estado** (en el código state):

  - Es un objeto que puede contener cualquier tipo de información: strings, arrays u otros objetos.
  - Es la información que almacenamos de forma centralizada en toda la app.

- **Mutaciones** (en el código mutations):

  - Son funciones.
  - Son las únicas funciones que pueden modificar el estado.
  - Son llamadas por las acciones.
  - Se pueden llamar en el componente a utilizar a través de un commit o a través de una acción.
  - Son síncronas.

- **Acciones** (en el código actions):

  - Son funciones.
  - Poseen la lógica de negocio.
  - Para cambiar el estado deben de llamar a mutaciones a través de commit.
  - Pueden llamar otras acciones a través de dispatch.
  - La forma de usarlas en el componente es a través de dispatch o utilizando módulos.
  - Son asíncronas.

- **Getters** (en el código getters).
  - Son funciones.
  - No cambian el estado pero sí que lo formatean para que podemos utilizar esa información de la manera que la necesitemos.
  - Sería lo más parecido a una propiedad computed en el componente.
  - Un ejemplo sería una función que filtrara el estado. No lo modifica pero te devuelve un nuevo objeto diferente con los datos filtrados que necesitas.

:::tip Nota Para saber más acerca de la implementación y uso de Vuex, recomiendo leer la [documentación](https://vuex.vuejs.org/guide/) y ver este curso gratuito: [Vuex for Everyone](https://vueschool.io/courses/vuex-for-everyone) de [VueSchool](https://vueschool.io/) :::

### Persistir estado entre Widgets y recargas de página

Los Widgets del catalogo, a diferencia de una SPA (Frontend Monolith), están construidos bajo el concepto de **Micro Frontends**.

La idea detrás de nuestros Widgets es separar un conjunto de características o funcionalidades en piezas diferentes que son propiedad de equipos independientes. Cada equipo tiene un área de negocio o misión distinta y desarrolla sus características de principio a fin, tiene su propio repositorio git, su propio archivo package.json, etc. Como resultado, cada Widget tiene un proceso de construcción independiente y un despliegue independiente (**CI**). Esto generalmente significa que cada Widget tiene tiempos de desarrollo rápidos y acotados.

Este enfoque no te da la capacidad de comunicarte directamente entre los Widgets, pero esto es ampliamente visto como una característica, no un error. Emitir eventos y recibir datos es un paradigma de diseño de Widgets escalables. Los Widgets, cuando sea posible, deben ser un reflejo del estado.

Cuando sea necesario persistir datos (estado) entre Widgets podemos hacer uso de los **query params** pasados por la URL (Ej. <http://mi-sitio.com/formulario?step=2&username=Jorge>) y usar una función que nos permita obtener los valores fácilmente, como por ejemplo:

```js
/**
Get the params from an url
Usage:
If url is: http://mi-sitio.com/formulario?step=2&username=Jorge
to get the step value:
getURLParams("step")
*/
export default function(sParam) {
  const sPageURL = window.location.search.substring(1);
  const sURLVariables = sPageURL.split("&");
  for (let i = 0; i < sURLVariables.length; i += 1) {
    const sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] === sParam) {
      return sParameterName[1];
    }
  }
  return false;
}
```

Otra alternativa para persistir datos (estado) al recargar la página o al cambiar de Widget es utilizar **Vuex** en conjunto con **localStorage**. Cuando usar esta alternativa? Por ejemplo, tenemos a un usuario que esta completando un proceso de onboarding que consta de varios pasos y preguntas y por error recarga la pagina. Todo el avance que el usuario llevaba hasta ese momento se pierde y tiene que volver a empezar, lo que puede significar perder ese posible cliente.

Por ejemplo

```js
//in our store.js file
export default new Vuex.Store({
  state: {
    ...
    step: 1,
    userData: {},
    ...
  },
  mutations: {
    ...
    set_step(state, currentStep) {
      localStorage.setItem('currentStep', currentStep);
      state.step = currentStep;
    },
    set_user_data(state, payload) {
      let currentData = {...state.userData, ...payload};
      localStorage.setItem('currentData', JSON.stringify(currentData));
      state.userData = currentData;
    },
    ...
    initialiseStore(state) {
      ...
      if (localStorage.getItem('currentStep') && localStorage.getItem('currentData')) {
        state.step = localStorage.getItem('currentStep');
        state.userData = JSON.parse(localStorage.getItem('currentData'));
      }
    },
  }
});
```

```js
//in your main.js app
...
new Vue({
  store,
  i18n,
  beforeCreate() { this.$store.commit('initialiseStore');},
  render: (h) => h(App),
}).$mount('#brokers-dashboard');
```

Eso es todo para **Vuex** y **localStorage**. Una advertencia que debo mencionar es que localStorage NO ES infinito. Muchos navegadores lo limitan a unos pocos megabytes.
