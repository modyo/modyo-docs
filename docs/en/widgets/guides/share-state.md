---
search: true
---

# Share status between Widgets

All Widgets in the catalog use [Vuex](https://vuex.vuejs.org/) to manage the status of a Widget. It also serves as a centralized storage for all widget components, with rules that ensure that the status can be changed predictably. In other words **Vuex** helps us share data between different components of the same Widget.

### The structure of Vuex

![vuex](/assets/img/widgets/vuex.png)

- **Status** (in the state code):

  - It is an object that can contain any type of information: strings, arrays, or other objects.
  - This is the information that we store centrally throughout the app.

- **Mutations** (in the mutations code):

  - They're functions.
  - They are the only functions that can modify the status.
  - They're called by actions.
  - They can be called on the component to use through a commit or through an action.
  - They're synchronous.

- **Actions** (in the actions code):

  - They're functions.
  - They have business logic.
  - To change the status they must call mutations via commit.
  - They can call other actions through dispatch.
  - The way to use them in the component is through dispatch or by using modules.
  - They're asynchronous.

- **Getters** (in getters code).
  - They're functions.
  - They don't change the state, but they do format it so that we can use the information in the way we need.
  - It would be the closest thing to a computed property in the component.
  - An example would be a function that filtered the state. It doesn't modify it, but instead gives you a new different object with the filtered data you need.

:::tip Note
To learn more about implementing and using Vuex, we recommend reading the [documentation](https://vuex.vuejs.org/guide/) and watching this free course: [Vuex for Everyone](https://vueschool.io/courses/vuex-for-everyone) from [VueSchool](https://vueschool.io/)
:::

### Persisting status between Widgets and page reloads

The Widgets in the catalog, unlike a SPA (Frontend Monolith), are built under the concept of **Micro Frontends**.

The idea behind our Widgets is to separate a set of features or functionalities into different parts that are owned by independent teams. Each team has a different business or mission area and develops its features from start to finish, has its own git repository, its own package.json file, etc. As a result, each Widget has a separate build process and an independent deployment (**CI**). This usually means that each Widget has fast and limited development times.

This approach does not give you the ability to communicate directly between Widgets, but this is widely seen as a feature, not an error. Broadcasting events and receiving data is a scalable Widget design paradigm. Widgets, where possible, should be a reflection of the state.

When it is necessary to persist data (status) between Widgets we can make use of the **query params** passed by the URL (e.g. <http://mi-sitio.com/formulario?step=2&username=Jorge>) and use a function that allows us to obtain the values easily, such as:

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

Another alternative to persist data (status) when reloading the page or changing Widget is to use **Vuex** in conjunction with **LocalStorage**. When to use this alternative? For example, we have a user who is completing an onboarding process that consists of several steps and questions and mistakenly reloads the page. All the progress that the user was carrying up to that moment is lost and has to start over, which can mean losing that potential customer.

For example

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

That's all for **Vuex** and **LocalStorage**. One caveat I should mention is that localStorage is NOT infinite. Many browsers limit it to a few megabytes.
