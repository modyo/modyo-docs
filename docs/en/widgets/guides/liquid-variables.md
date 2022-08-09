---
search: true
---

# Liquid Variables

Create a javascript object in Snippets so you can make use of Liquid in your Widgets.

Widgets, as they are decoupled from the platform, have the disadvantage of not being able to use Liquid directly and do not have access to Liquid drops, in order to work with them we will have to make them available through javascript from the platform. [**Liquid Markup**](/en/platform/channels/liquid-markup.html) is an important part of the platform, of how we build views, and access content on it. It also gives us access to context [**drops**](/en/platform/channels/liquid-markup.html#drops) (variables) that allow us to interact with our views more dynamically. For example, you can determine what content to show to the user based on the segment they belong to, hide a menu based on the page being visited, and so on.


Follow these steps to create a snippet with Liquid variables:
1. In the side menu on the platform, expand **Channels** and click on **Sites**.
1. Click on your site.
1. In your site menu, click on **Templates** and select **Snippets**.
1. Add a new **Custom Snippet**. For this example use `liquid2js_js`, but it can be any name.

<img src="/assets/img/widgets/template_snippets.png" alt="Image displaying where to find template builder snippets.">   

1. Open the javascript section and paste the code:
```js
   window.liquid = {
     lang: '{{@site.language}}' === 'en' ? 'en-US' : 'es-CL',
     request: {
       path: "{{request.path}}",
     },
   };
```
In this snippet we create an object named _liquid_ with `window` scope that contains the language and request path of the site. From our Widget we can now access this data using the object created in the previous step. For example, if you want to get the site categories from the Widget, you can do so with: 

   ```js
   const categories = window.liquid.lang;
   ```

:::warning Warning
In development mode we won't have access to this object since we're working locally, so the recommendation is to assign default values when defining these variables locally.
:::

```js
// This line checks if the liquid object exists, if it does, const lang takes the value window.liquid.lang, if the object doesn't exist, it takes the value "es-CL" by default.

const lang = window.liquid !== "undefined" ? window.liquid.lang : "es-CL";
```