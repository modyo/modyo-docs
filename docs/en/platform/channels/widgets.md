---
search: true
---

# Widgets

Widgets allow you to create _micro frontends_ for your sites and applications. Using Widgets extends the capabilities of your sites and allows you to have more control since you can add more functionality by keeping each widget as a separate entity from your site.

When you enter the Widgets section of the site, you can see a list of all the widgets that have been created. In the top bar you can filter the list of widgets by status, author, tags, or do a text search by the name of the widget.


In the widget editing view, you can see three areas: the top action bar, the main work area and the properties column on the right.

Along the **top bar**, on the left, you can see the widget name and current status:

- **Draft**: This status appears when a widget has just been created or when it has been unpublished.
- **Published**: This status appears after a publication and when the editable and published versions are the same.
- **Pending changes**: This status appears if there is already a published version of a widget, but there are pending changes to be published in the editable version.
- **In review**: This status appears when [team review](/en/platform/core/key-concepts) is enabled and this widget is in review.
- **Approved**: This status appears when [team review](/en/platform/core/key-concepts) is enabled and the review conditions for the item are met. When in this state, templates are ready to be published.

On the right, you'll find the following actions:
**Preview**: Opens the preview of the editable version of the widget in a new tab.

:::warning Attention
You can preview the widgets as a user without a session or a user with a Modyo session. For this, it is recommended to start or close the Modyo session on the site before entering preview mode. This is because starting or closing a session within preview mode can generate security errors such as _x-frame-options_ or _mixed-content_, depending on the site's custom domain and SSL settings.
:::

**Differences**: Takes you to the [differences view](/en/platform/core/key-concepts), where you can compare the changes between multiple versions of the widget.

By default, you start by comparing the published version with the editable version. Use the version selectors to compare with backup versions. If the icon does not appear, it means that there is no published version of this widget.

**Activity**: Allows you to display a side tab that shows the widget's activity and comments.

**Other options**: Allows you to archive and create a copy of the current widget.

**Main button**:

- **Save**: Saves current changes.
- **Submit for review**: If team review is enabled, you can submit the widget for review and notify reviewers that the widget is ready for review.
- **Publish**: Takes you to the [joint publication](/en/platform/core/key-concepts#review-and-joint-publication) view where you can publish your widgets.

**Other main actions**:

- **Unpublish**: If the widget is published, you can take it out of production using this option.
- **Force publishing**: If you are a site administrator, you can use this option to immediately publish a widget, even if Team Review is enabled.

:::tip Tip
Only widgets that have been unpublished can be archived.
:::

:::tip Tip
Archived widgets will not appear in the initial list or in the widget selection modal in the Page Builder. To restore an archived widget, you must go to the edit view, using the **Restore** option in the upper right corner of the view.
:::

Once a widget is published, it will be visible in the custom widget selection modal in the [Page Builder](/en/platform/channels/pages).

:::tip Tip
To learn more about the publication flow, review the [Versioning](/en/platform/core/key-concepts#versioning) section.
:::

In the work area you can see:

- **Code Tabs**: A JavaScript, CSS, and HTML tab is available to build widgets.
- **File manager**: By clicking on it, the file management modal will open, where you can filter and search for the files you have uploaded in the [File manager](/en/platform/content/asset-manager) and copy their URL to use them in the widget. You can also upload new files from this modal.
- **Keyboard shortcuts**: Displays a small informational window with some useful keyboard shortcuts.
- **Snippets**: Displays a list of available snippets from the [Template Builder](/en/platform/channels/templates#snippets) and copies their code to reference them in the widget.
- **Changes**: If changes have been saved and not published, this list will show all the times each file (JS, CSS, and HTML) has been saved. Clicking on a sub-version changes the content of the tab to the content of the sub-version that was clicked.

:::tip Tip
To avoid losing any changes you currently have, you must save before jumping between sub-versions, so that you can always return to the last saved version in the changes list.
:::

:::tip Tip
When the widget is published, no available changes will be observed. This is because each version starts without changes from the production version. If the widget is restored to an older version, the sub-versions will also be restored, so you can access all instances where changes were saved in that version.
:::

In the three widget tabs, Liquid can be used. For more information, review [the associated Liquid documentation](/en/platform/channels/liquid-markup).

In the properties column you can see:

- **Name**: Allows you to change the widget name.
- **Tags**: Allows you to add tags to a widget. Tags are for administrative use and serve to search and filter widgets to find them quickly.
- **Pages using this widget**: You will see a list of pages that are using this widget. While viewing pages in this list, you will not be able to unpublish or archive the widget.

:::warning Attention
If you delete a widget from a page and publish, you will still see that page in this list because the widget is still referenced in the backups of that page. From version 9.1.10 onwards, you can unpublish any published widget, even if it is in use. Active references on pages will become inactive, so you will not see the widget on the site if you unpublished it. In addition, you can archive any widget that is not published, so that if there are still references on some pages of the widget you want to archive, these will be deleted when the widget is archived.
:::

## Create a Widget
To create a new Widget and have a _micro frontend_ for your sites and publications, follow these steps:
1. From the Modyo Platform main menu, expand Channels, and click your Site.
1. Click Widgets.
1. Click the **New Widget** button.
1. Type the name of your widget and click **Create**.
1. Customize your widget using HTML, CSS, JavaScript, or Liquid.
1. Once finished, click **Publish**.

:::tip Tip

Modyo allows you to preview a widget locally and see it styled for your site before publishing it. To do this, check the related [documentation](https://docs.modyo.com/en/platform/channels/cli#quick-guide).
:::

## Widget Variables

In the variables tab, you can see the list of variables created in the widget, and their respective actions for:

- **Copy** the liquid code to use that variable.
- **Modify** the variable
- **Delete** the variable.

Next to the name of each variable, you will see an "overwritten" indicator if the variable also exists at the account or site level in the [global variables](/en/platform/core/key-concepts#global-variables).

When modifying a variable, you can decide the name and default value that this variable will take in the widget. In addition, you can decide if you want to make a list of values available so that when a widget is instantiated on a page, it is possible to choose between these different values.

When using the list of possible values, you must place each value on a new line, and place a `*` before the value you want to be taken as the default.

When instantiating the widget on a page, you will see that all variables being used (whether account, site, or widget) will be listed as "disabled" with their default value. If you want to overwrite the value of a particular variable for that instance of the widget on that page, you must select the checkbox to the left of the variable and change the value it takes.

:::warning Attention
When instantiating the widget on a page, all variables that widget is using will be listed. If you do not see any of the variables that are defined in the widget, it is very likely that the variable is not being used in the widget code.
:::

## Synchronous loading

:::warning Attention
This is an experimental feature and may be subject to changes.
:::

You can decide whether you want to load your widgets synchronously, meaning that the HTML, CSS, and JavaScript code of your widget is loaded along with the rest of the page from the server, or asynchronously, so that all the static content of the page will be loaded and once the main document is loaded, the content of your widget will be loaded via JavaScript. By default, all widgets are loaded asynchronously.

To change how each widget loads, go to the edit view of the page containing the widget, select the widget, and check or uncheck the "Synchronous loading" option.

:::warning Attention
You should consider that using very heavy widgets synchronously can decrease your page's performance, so you should carefully decide which widgets will load synchronously and which will load asynchronously.
:::

## Use Internationalization (i18n)

With i18n, you can configure and add new languages to your widgets.

To handle internationalization in the Widgets of our [experience catalog](https://dynamicframework.dev), we use the [**Vue I18n**](https://kazupon.github.io/vue-i18n/) package installed through the plugin [vue-cli-plugin-i18n](https://github.com/kazupon/vue-cli-plugin-i18n). You can check its documentation [here](https://kazupon.github.io/vue-i18n/introduction.html). When installing the plugin, it creates a folder for the languages called `locales` and a configuration file called `i18n.js`.

```shell{3,5-7}
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

In the configuration file, we will get the site's language from the platform. First, initialize the LANG constant in the `i18n.js` file.

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

The `liquid.lang` variable must be created in Modyo Platform. To create this variable, follow these steps:

1. In your browser, log in to Modyo Platform.
1. Expand **Channels**, and click **Sites**.
1. Click **Templates**.
1. Open the `theme` View in the Views -> Javascript -> theme section.
1. Add the following code:

```shell
window.liquid = {
 lang: '{{@site.language}}' === 'en' ? 'en-US' : 'es-CL'
};
```

This code assigns the language to the `liquid.lang` variable, depending on the value of `@site.language` using Liquid.

### Add a language

To add a new language to the site, simply create a **JSON** file in the `locales` folder where its name is the code of the language to be added. For example, if we want to add Brazilian Portuguese, add `pt-BR.json`:

```shell{4}
├── src/
│   ├── locales/
│   │   ├── en-US.json
│   │   ├── pt-BR.json <-- new language
│   │   └── es-CL.json
```
:::warning Attention
The structure of the language file must be a **json** object:
:::

### Form validation

To locate the error messages that the validator shows, you need to make a small modification to the **i18n.js** configuration file.

1. Import error messages in the languages you need.
2. In the **loadLocaleMessages** function, add the validator messages in the corresponding language.
3. Return the modified **messages** object.

```js
import esCL from 'vee-validate/dist/locale/es-CL.json';
import enUS from 'vee-validate/dist/locale/en-US.json';
import ptBR from 'vee-validate/dist/locale/pt-BR.json';
```

```js
function loadLocaleMessages() {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages = {};
  locales.keys().forEach((key) => {...});

  messages['es-CL'] = {
    ...messages['es-CL'],
    validations: esCL.messages,
  };

  messages['en-US'] = {
    ...messages['en-US'],
    validations: enUS.messages,
  };

  messages['pt-BR'] = {
    ...messages['pt-BR'],
    validations: ptBR.messages,
  };

  return messages;
}
```

## Use Liquid in Widgets

Create a javascript object in Snippets to be able to use Liquid in your Widgets.

Widgets, being decoupled from the platform, have the disadvantage of not being able to use Liquid directly, and we do not have access to [liquid objects](/en/platform/channels/liquid-markup/objects). To work with them, you will have to make them available via javascript from the platform. [**Liquid Markup**](/en/platform/channels/liquid-markup) is an important part of the platform, of how we build views, and how we access the content on it. It also gives you access to [**objects**](/en/platform/channels/liquid-markup/objects), context variables that allow you to interact with your views more dynamically. For example, you can determine what content to show the user according to the segment they belong to, hide a menu depending on the page being visited, etc.


Follow these steps to create a snippet with Liquid variables:
1. In the platform's side menu, expand **Channels**, and click **Sites**.
2. Click on your site.
3. In your site menu, click **Templates** and select **Snippets**.
4. Add a new **Custom Snippet**. For this example, we named the snippet `liquid2js_js`, but it can have any name.

5. Open the javascript section and paste the code:
```js
   window.liquid = {
     lang: '{{@site.language}}' === 'en' ? 'en-US' : 'es-CL',
     request: {
       path: "{{request.path}}",
     },
   };
```
In this snippet, we created an object called _liquid_ with the scope of `window` that contains the language and the request path of the site. From our Widget, we can now access this data using the object created in the previous step. For example, if you want to get the site's languages from the Widget, you can do it with:

   ```js
   const languages = window.liquid.lang;
   ```

:::warning Warning
In development mode, we will not have access to this object since we are working locally, so the recommendation is to assign default values when defining these variables locally.
:::

In the following example, const lang takes the value of window.liquid.lang; if the object does not exist, it assigns the default value "es-CL":

```js
const lang = window.liquid !== "undefined" ? window.liquid.lang : "es-CL";
```

### Inserting an image with Liquid

Modyo recommends using the Liquid tag and not the asset URL to insert images into your content. This allows you to resize or replace an image wherever it is in use and ensure that any changes are immediately reflected.

In addition, Modyo converts the image to webp format with lossless compression quality. This results in lighter images, with shorter loading times, and without loss of quality.


#### To get the Liquid code from an image:

1. Click on the media icon above your work area
1. Click on the image.
1. Click on the copy icon, next to the Liquid tag in the image.

#### To replace an image, follow these steps:

1. Click on content.
1. Select the space where the image you want to modify is located.
1. Click on media.
1. Select the image you want to replace.
1. Click on the upload image icon above the current image.
1. Select the new image.
1. Click on **update information**.

:::tip Tip
It is necessary that your account's CDN is in the cloud for changes to be reflected immediately, otherwise you will need to request cache invalidation via a ticket to [Modyo](https://support.modyo.com/hc/en-us).
:::