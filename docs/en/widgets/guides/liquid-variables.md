---
search: true
---

# Liquid Variables

[**Liquid Markup**](/en/platform/channels/liquid-markup.html) It is an important part of the platform and is also how we build views and access content, as well as [**drops**](/en/platform/channels/liquid-markup.html#drops) context variables that allow us to interact with our views more dynamically. For example, you can determine which content to display to the user according to the target they belong to, or hide a menu depending on the page you are visiting, etc.

When decoupled from the platform, Widgets have the disadvantage of not being able to directly use liquid. We do not have access to those drops (although we are working on a solution), and we will have to use javascript from the platform to make them available.

1. First we create a new snippet: **Templates (1) —> Snippets (2) —> Add a Snippet (3)**. For this snippet example we use the name `liquid2js_js`, but it can have any name.
   ![template views](/assets/img/widgets/template_snippets.png)

2. In this snippet we create an object in the `window` scope containing all the drops we want to have available in our Widget. In this example the object is called liquid, but you can give it any name.

   ```js
   window.liquid = {
     lang: "{{@site.language}}" === "en" ? "en-US" : "es-CL",
     request: {
       path: "{{request.path}}",
     },
   };
   ```

3. From our Widget you can access these values using the object created in the previous step.

   ```js
   const LANG = window.liquid.lang;
   ```

   :::warning Important
   In development mode we will not have access to this object as we are working locally, which is why the recommendation is to assign defaults when defining these variables locally.
   :::

  ```js
   // si no existe el objeto liquid y la llave lang no esta definida, asignamos 'es-CL' por defecto
   const LANG = window.liquid ? window.liquid.lang : "es-CL";
   ```