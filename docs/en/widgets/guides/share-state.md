---
search: true
---

# Share status between Widgets

**Vuex** helps share data between different components of the same Widget. All Widgets in the catalog use [Vuex](https://vuex.vuejs.org/) to manage the status of a Widget. It also functions as a centralized store for all components, with rules that ensure that the state can be changed predictably.

## The structure of Vuex

<img src="/assets/img/widgets/vuex.png" alt="Diagram showing the VueX architecture.">

- **State**:

  - It is an object that can contain any kind of information: strings, arrays, or other objects.
  - This is the information that we store centrally throughout the app.

- **Mutations**:

  - They're functions.
  - They are the only functions that can modify the status.
  - They're called by actions.
  - They can be called on the component to be used through a `commit` or through an action.
  - They're synchronous.

- **Actions**:

  - They're functions.
  - They have business logic.
  - To change the state you must call mutations through a `commit`.
  - They can call other actions through a `dispatch`.
  - The way to use them in the component is through a `dispatch` or by using modules.
  - They're asynchronous.

- **Getters**:
  - They're functions.
  - They don't change the state but they do change the format so we can use that information the way you need it.
  - It would be very similar to a `computed` property in the component.
  - An example would be a function that filters the state. It doesn't modify it but it returns you a new different object with the filtered data you need.

:::tip Tip
To learn more about implementing and using Vuex, see the [documentation](https://vuex.vuejs.org/guide/) and this free course: [Vuex for Everyone](https://vueschool.io/courses/vuex-for-everyone) by [VueSchool](https://vueschool.io/)
:::

## Persisting status between Widgets and page reloads

Catalog Widgets, unlike a SPA (Single-page application), are built under the concept of **Micro Frontends**.

The idea behind our Widgets is to separate a set of features or functionalities into different parts that are owned by independent teams. Each team has a different business or mission area and develops its features from start to finish, has its own git repository, package.json file, etc. As a result, each Widget has a separate construction process and an independent deployment (**CI**). This usually means that each Widget has fast development times.

This approach does not give you the ability to communicate directly between Widgets, but this is widely seen as a feature, not an bug. Broadcasting events and receiving data is a scalable Widget design paradigm. Widgets, where possible, should be a reflection of the state.

When it is necessary to persist data (state) between Widgets we can make use of the **query params** passed by the URL (e.g. <http://my-site.com/forms?step=2&username=George>) and use a function that allows us to obtain the values easily, such as:

```js
/**
Get the params from an url
Usage:
If url is: http://my-site.com/forms?step=2&username=George
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

Another alternative to persist data (status) when reloading the page or changing the Widget to use **Vuex** in conjunction with **LocalStorage**. For example, a user is completing an onboarding process that consists of several steps and mistakenly reloads the page. All the progress that the user was making up to that point is lost and has to start over, which can mean losing that potential client.

For example, you can persist the steps in the form as follows:

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

:::warning Warning
In a browser, LocalStorage *isn't* infinite and any user can empty it. Many browsers limit it to less than 10 megabytes by default.
:::
