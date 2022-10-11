---
search: true
---

# Liquid Variables

Create a javascript object in Snippets so you can make use of Liquid in your Widgets.

Widgets have the disadvantage of not being able to use Liquid directly since they are decoupled from the platform and don't have access to Liquid drops. In order to work with them we'll have to make them available through Javascript from the platform. [**Liquid Markup**](/en/platform/channels/liquid-markup.html) is an important part of the platform, it's how we build views, and access the content on it. It also gives us access to Liquid [**drops**](/en/platform/channels/drops), or context variables that allow us to interact with our views more dynamically. For example, you can determine what content to show the user according to the segment to which they belong, hide a menu depending on the page being visited, and so on.


Follow these steps to create a snippet with Liquid variables:
1. In the side menu on the platform, expand **Channels** and click on **Sites**.
2. Click on your site.
3. In your site menu, click on **Templates** and select **Snippets**.
4. Add a new **Custom Snippet**. For this example use `liquid2js_js`, but it can be any name.

<img src="/assets/img/widgets/template_snippets.png" alt="Image displaying where to find template snippets.">   

5. Open the javascript section and paste the code:
```js
   window.liquid = {
     lang: '{{@site.language}}' === 'en' ? 'en-US' : 'es-CL',
     request: {
       path: "{{request.path}}",
     },
   };
```
In this snippet we created an object called _liquid_ with scope `window` that contains the language and the request path of the site. From our Widget we can now access this data using the object created in the previous step. For example, if you want to get the site's languages from the Widget, you can do so with: 

   ```js
   const languages = window.liquid.lang;
   ```

:::warning Warning
In development mode we won't have access to this object since we're working locally, so the recommendation is to assign default values when defining these variables locally.
:::

In the following example, const lang takes the value of window.liquid.lang, if the object doesn't exist, it assigns the default value “es-CL”:

```js
const lang = window.liquid !== "undefined" ? window.liquid.lang : "es-CL";
```