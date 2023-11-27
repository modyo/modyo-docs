---
search: true
sidebarDepth: 3
---

# Widgets

Widgets allow you to create _micro frontends_ for your sites and applications. Using Widgets extends the capabilities of your sites and allows you to have more control since you can add more functionality by keeping each widget as a separate entity from your site.

When you enter the Widgets section of the site, you can see a list of all the widgets that have been created. In the top bar you can filter the list of widgets by status, author, tags, or do a text search by the name of the widget.


In the widget editing view, you can see three areas: the top action bar, the main work area and the properties column on the right.

Along the **top bar**, on the left, you can see the widget name and current status:

- **Draft:** This status appears when a widget has just been created or when it has been unpublished.
- **Published:** This status appears after you have made a publication and when the editable and published versions are the same.
- **Pending changes:** This status appears if there is already a published version, but there are changes pending publication in an editable version.
- **In review:** This status appears when [team review] (/en/platform/core/key-concepts.html) is enabled and the editable version has been submitted for review.
- **Approved:** This status appears when [team review] (/en/platform/core/key-concepts.html) is enabled and the review conditions for the item are met. When in this state, templates are ready to be published.

On the right, you'll find the following actions:
**Preview:** Opens the preview of the editable version of the widget in a new tab.

:::warning Attention
You can preview the widgets as a user without a session or a user with a Modyo session. For this, it is recommended to open or close the Modyo session on the site before entering preview mode. This is because logging in or out of preview mode can result in security errors such as _x-frame-options_ or _mixed-content_, depending on the site's custom domain and SSL settings.
:::

**Differences:** Takes you to the [difference view] (/en/platform/core/key-concepts.html), where you can compare the changes between multiple versions of the widget.

By default, you start by comparing the published version with the editable version. Use the version selectors to compare with backup versions. If the icon does not appear, it means that there is no published version of this widget.

**Activity:** Allows you to display a side tab that shows the widget's activity and comments.

**Other options:** Allows you to archive and create a copy of the current widget.

**Main button:**

- **Save:** Saves current changes.
- **Submit for review:**If team review is enabled, you can submit the widget for review and notify reviewers that the widget is ready to be reviewed.
- **Publish:** Takes you to the [co-post] view (/en/platform/core/key-concepts.html#joint-review-and-publication) where you can publish your widgets.

**Other main actions:**

- **Unpublish:** If the widget is published, you can take it out of production using this option.
- **Force publishing:** If you're a site administrator, you can use this option to immediately publish a widget, even if Team Review is enabled.

:::tip Tip
Only unpublished widgets can be archived.
:::

:::tip Tip
Archived widgets do not appear in the main widget list or in the Custom widget selection in Page Builder. You can restore an archived widget by editing it and using the **restore** option in the upper right corner of the editing view.
:::

Once a widget is published, it is available as a custom widget in the [page builder](/en/platform/channels/pages.html).

:::tip Tip
To learn more about publication lifecycles in Modyo, review the [Versioning](/en/platform/core/key-concepts.html#versioning) section.
:::

In the main work area you can see the following:

- **Code Tabs:** A JavaScript, CSS, and HTML tab is available for building widgets.
- **File Manager:** When clicked, the file management mode is lifted, where you can filter and search for the files you have uploaded to the [File Manager] (/en/platform/content/asset-manager.html) and copy their URL to use them in the widget. You can also upload new files from this modal.
- **Keyboard Shortcuts:** Shows a small informational window with some useful keyboard shortcuts.
- **Snippets:** Shows a list of the snippets available from the [Template Builder] (/en/platform/channels/templates.html #snippets) and their code is copied to reference them in the widget.
- **Changes:** If changes have been saved and have not been published, it will display this list of all the times saved each of the files (JS, CSS, and HTML). Clicking on a sub-version changes the content of the tab to the content of the sub-version that was clicked.

:::tip Tip
To avoid losing any changes you currently have, be sure to save before jumping between save states. This way, you can always return to the most recently saved version in the **Changes** list.
:::

:::tip Tip
If you publish a new version of your widget, the **Changes** list resets and erases all save states. This is because the new editable version now matches the version you just published. Saving new changes adds new save states until the next time you publish.
:::

You can make use of Liquid in the Javascript, CSS, and HTML tabs in the widget builder. For more information check [the associated Liquid documentation](/en/platform/channels/liquid-markup.html).

In the properties column you can see:

- **Name:** Allows you to change the name of the widget
- **Tags:** Allows you to add tags to a widget. Tags are for administrative use and are used to search and filter widgets so that they can be found quickly.
- **Pages using this widget:** You'll see a list of pages that are using this widget. While viewing pages in this list, you won't be able to unpublish or archive the widget.

:::warning Attention
If you delete a widget from a page and publish, you'll continue to see that page in this list because the widget is still referenced in the backrests of that page. From version 9.1.10 onward, you can unpublish any published widget, even if it's in use. Active references on pages will be inactive, so you won't see the widget on the site if you unpublished it. In addition, you can archive any widget that is not published, so that if there are still references on some pages of the widget that you want to archive, they will be deleted when the widget is archived.
:::

## Create a Widget
To create a new Widget and have a _micro frontend_ for your sites and posts, follow these steps:
1. From the Modyo Platform main menu, expand Channels, and click your Site.
1. Click Widgets.
1. Click the **+ New Widget** button.
1. Enter the name of your widget and click **Create**.
1. Customize your widget using HTML, CSS, JavaScript, or Liquid.
1. Once finished, click **Publish**.

## Widget variables

In the variables tab you can see the list of variables created in the widget, and their respective actions for:

* **Copy** the liquid code to use that variable.
* **Edit** the variable
* **Delete** the variable.

Next to the name of each variable you will see an "overwritten" indicator if the variable also exists at the account or site level in the [global variables](/en/platform/core/key-concepts.html#global-variables).

By modifying a variable, you can decide the name and default value that that variable will take in the widget. In addition, you can decide if you want to provide a list of values so that when you instantiate the widget on a page, you can choose between these different values.

When you use the list of possible values, you must leave each value on a new line, and leave a `*` in front of the value you want to be taken as the default.

When you instantiate the widget on a page, you will see that now all variables being used (whether account, site, or widget) will be listed as "disabled" with their default value. If you want to overwrite the value of a particular variable for that instance of the widget on that page, you must select the checkbox to the left of the variable and change the value it takes.

:::warning Warning
Adding the widget on a page will list all the variables that that widget is using, so if you don't see any of the variables that are defined in the widget, chances are that the variable in the widget code is not being used.
:::

## Synchronous and asynchronous loading

:::warning Warning
This is an experimental feature and it may be subject to changes.
:::

You can decide whether you want to load your widgets synchronously, that is, have your widget's HTML, CSS, and JavaScript code loaded along with the rest of the page from the server, or load asynchronously, so all static content on the page will load and once the main document is loaded, the content of your widget will be loaded using JavaScript. By default, all widgets are loaded asynchronously.

To change the way each widget loads, go to the edit view of the page containing the widget, select the widget and check or uncheck the "Sync loading" option.

:::warning Warning
Keep in mind that using very heavy widgets synchronously can be the cause of bad performance in your pages, you should carefully decide which widgets will load synchronously and which ones will load asynchronously.
:::

## Use Internationalization (i18n)

With i18n you can configure and add new languages to your widgets.

To handle internationalization in the Widgets in our [widget catalog](/en/widgets/) we use the [**Vue i18n**](https://kazupon.github.io/vue-i18n/) package installed using the  [vue-cli-plugin-i18n](https://github.com/kazupon/vue-cli-plugin-i18n) plugin, you can review its documentation [here](https://kazupon.github.io/vue-i18n/introduction.html). When you install the plugin, a folder for languages called `locales` and a configuration file called `i18n.js` are created.

``` treeview{3,5-7}
├── src/
│   ├── App.vue
│   ├── i18n.js
│   ├── main.js
│   ├── locales/
│   │   ├── en-US.json
│   │   └── es-CL.json
```

:::tip Tip
To learn more about internationalization and vue-i18n, see [Internationalization with vue-i18n](https://vueschool.io/courses/internationalization-with-vue-i18n) by [VueSchool](https://vueschool.io/)
:::

### Configuration

In the configuration file we will get the language of the site that we have on the platform. First, the LANG constant is initialized in the `i18n.js` file.

```js{4,11}
import Vue from 'vue';
import VueI18n from 'vue-i18n';

const LANG = window.liquid ? window.liquid.lang : 'es-CL';

Vue.use(VueI18n);

//... more code

export default new VueI18n({
  locale: LANG,
  fallbackLocale: 'es-CL',
  messages: loadLocaleMessages(),
});
```

We have to create the variable `liquid.lang` in Modyo Platform. To create this variable, follow these steps:

1. In your browser, log in to Modyo Platform.
1. Expand **Channels**, and click **Sites**.
1. Click **Templates**.
1. Open the `theme` View in the Views -> Javascript -> theme section.
1. Paste the following code:

``` js
window.liquid = {
 lang: '{{@site.language}}' === 'en' ? 'en-US' : 'es-CL'
};
```

This code assigns the language to the `liquid.lang` variable, depending on the value of `@site.language` using Liquid.

### Add a language

To add a new language to the site, we simply create a **JSON** file in the `locales` folder where its name is the code of the language to be added. For example, if we want to add Brazilian Portuguese, add `pt-BR.JSON`:

``` treeview{4}
├── src/
│   ├── locales/
│   │   ├── en-US.json
│   │   ├── pt-BR.json <-- nuevo idioma
│   │   └── es-CL.json
```
:::warning Attention
The structure of the language file must be a **json:** object
:::

### Form validation

In order to locate the error messages that the validator shows, we need to make a small modification to the **i18n.js** configuration file.

1. We import error messages into the languages we need.
2. In the **LoadLocaleMessages** function, we add the validator messages in the corresponding language.
3. Return the modified **messages** object.

```js
// 1
import esCL from 'vee-validate/dist/locale/es-CL.json';
import enUS from 'vee-validate/dist/locale/en-US.json';
import ptBR from 'vee-validate/dist/locale/pt-BR.json';
```

```js
function loadLocaleMessages() {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages = {};
  locales.keys().forEach((key) => {...});
  // 2
  messages['es-CL'] = {
    ...messages['es-CL'],
    validations: esCL.messages,
  };
  // 2
  messages['en-US'] = {
    ...messages['en-US'],
    validations: enUS.messages,
  };
  // 3
  messages['pt-BR'] = {
    ...messages['pt-BR'],
    validations: ptBR.messages,
  };
  // 4
  return messages;
}
```

## Using Liquid in Widgets

Create a javascript object in Snippets so you can make use of Liquid in your Widgets.

Widgets, since they are decoupled from the platform, have the disadvantage of not being able to use Liquid directly and we don't have access to [liquid drops](/en/platform/channels/drops), in order to work with them we'll have to make them available via javascript from the platform. [**Liquid Markup**](/en/platform/channels/liquid-markup.html) is an important part of the platform, of how we build views, and access the content on it. It also gives us access to [**drops**](/en/platform/channels/drops), context variables that allow us to interact with our views more dynamically. For example, you can determine what content to show the user according to the segment to which they belong, hide a menu depending on the page being visited, and so on.


Follow these steps to create a snippet with Liquid variables:
1. In the platform's side menu, expand **Channels**, and click **Sites**.
2. Click on your site.
3. In your site menu, click **Templates** and select **Snippets**.
4. Add a new **Custom Snippet**. For this example use `liquid2js_js`, but it can be any other name.

5. Open the javascript section and paste the code:
```js
   window.liquid = {
     lang: '{{@site.language}}' === 'en' ? 'en-US' : 'es-CL',
     request: {
       path: "{{request.path}}",
     },
   };
```
In this snippet, we created an object called _liquid_ with the scope of `window` that contains the language and the request path of the site. From our Widget we can now access this data using the object created in the previous step. For example, if you want to get the site's languages from the Widget, you can do it with:

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