---
search: true
---

# Pages

Pages (or pages) are what allow you to create a structure for your site, where you can add unstructured content and customize the routes where that content is displayed.

You can create two types of pages, widgets or content. Widget pages are based on a modular scheme so you can create your custom site using HTML, JS, and CSS. You can drag and place different widgets that we offer or custom widgets created by your team.

Content pages are our solution for connecting Content modules with Channels. Here you can create the index containing the entries and the structure for all the entries using HTML, JS, CSS, and Liquid.

<img src="/assets/img/platform/page-index.png" alt="The index page for all the pages in your site">

To edit a page, click on the edit icon or on the name of the page to go to the editing view.

In the edit view, you will see a bar across the top, a central grid in the middle, and a sidebar with tabs.

In the top bar, you can find different actions and information:

**Title**: It is located in the upper left side and indicates the name of the page you are modifying. On the right side of the name, you can see the current state of the page. The state will either be "Draft", "Under review", "Approved", "Pending changes", or "Published". To learn more about these states, review the [versioning and team review](/en/platform/core/key-concepts.html) section.

**Date of publication:** If the page has been published, it will indicate the date of the last publication.

**Preview:** This icon allows you to open a new tab with Preview mode to view the changes that have been made to the page without having to publish it.

:::warning Attention
You can preview the pages as a user without a session or a user with a Modyo session. For this, it is recommended to open or close the Modyo session on the site before entering preview mode. This is because logging in or out of preview mode can result in security errors such as _x-frame-options_ or _mixed-content_, depending on the site's custom domain and SSL settings.
:::

**Differences: ** By clicking on the differences icon, you access the differences view of the page, where you can select two versions to compare, allowing you to execute the actions [reset and rollback] (/es/platform/core/key-concepts.html #revertir -un-change)

:: :tip Tip
If your page is in a _draft_ state, the difference icon will not appear, since there is nothing to compare the current editable version with. To learn more about the differences and supports, check out the [versioning] section (/es/platform/core/key-concepts.html #versionado)
:::

**Activity: ** Displays a sidebar that shows the activity associated with the page, such as modifications, posts and comments. At the bottom of this bar, you can type associated comments. If the page is under review, all assigned reviewers will receive a notification with the comment.

**Other actions: **

- Archive: If a page isn't published, this action allows you to archive it. When a page is archived, by default, it doesn't appear in the page index, keeping the site structure clean.
- Duplicate: This action allows you to copy the editable version of the page you're on. The copied version is in a _draft_ state.

:: :warning Attention
Once you complete the copy action, you'll be redirected to the new page, so it's important to save all changes before using this action to avoid losing important information.
:::

## Create a page
To create a new page, follow these steps:

1. From the Modyo Platform main menu, select **Channels**, and click **Sites**.
1. Select the site you want to add a new page.
1. Click **Pages**.
1. Click **+ New Page**.
1. Select the type of page **(Widget or Content)** you want to create.
1. Fill in the Layout Name, Path, if necessary select the parent layout, and press **Create**.
1. Customize the page depending on the type: adding or editing widgets for Widget Page or editing the Index and Show for Content Page.
1. Once finished, click **Publish**.

To learn about the types of widgets you can add, see [Widgets](/en/platform/channels/pages.html#widget-page)

To learn more about content pages, see [Content Page](/en/platform/channels/pages.html#content-page)

**Main action: ** This is the green button at the top right. This button can take different forms:

- Save: Allows you to save all changes made to the page.
- Send to review: If Team Review is enabled, and all changes have been saved, this action will allow you to submit the page for review and assign reviewers.
- Publish: If the page is approved, you can go to the [joint publication view](/en/platform/core/key-concepts) using this action.

:::tip Tip
* If a page has a parent page, you can only publish it if the parent page is published.
* If a page has children, you can only unpublish it if all of its child pages are unpublished.
* If a page has children, you can only archive it if all of its child pages are archived.
:::

**Secondary Actions: **
- Force publish: If you are a site administrator, then you have the option to publish pages at any time, including skipping the team review process.
- Unpublish: If the page is published, then you will see this action and can unpublish the page.

<img src="/assets/img/platform/page-builder.png" alt="The page builder screen">

The central grid is where you can position your widgets. You can move widgets back and forth using the _drag-and-drop_ functionality.

In the right side section there are three tabs:

- Add Widgets: allows you to select widgets from a list and add them to the grid.
- Edit Widget: allows you to change different properties and filters for each widget.
- Properties: allows you to modify the name, excerpt, path, parent, privacy, grid layout, and meta tags of the page.

## Widget Page

Here you can customize your page using preset widgets from the following list:


- **HTML: ** Allows you to enter HTML and CSS code without validations. It will not allow you to enter Javascript code.
- **Rich Text: ** It will allow you to make use of a rich text editor, in which you can format the text and switch between the code view and rich text.
:::warning Warning
The rich text widget has an automatic formatter, so the code you write in the code view may be affected.
:::
- **Content listing: ** Show content listings using filters by space, type, language, tags, and category. To modify how these widgets look, you must do so in the Widgets section in [Templates] (/es/platform/channels/templates.html).
- **Featured Content: ** Shows a list of entries as “hero” images in a carousel.
- **Custom: ** You'll find a list of all the widgets you've created and published in the widget builder.

Once you have selected a widget in the central section, the focus will go to the side tab, where you can find different configuration options for the widget and if you select a custom widget, you will find a link to go directly to its editing view in [widget builder] (/es/platform/channels/widgets.html) and the list of variables that the widget is using. If you want to overwrite the value of a particular variable for that instance of the widget on that page, you must select the checkbox to the left of the variable and change the value it takes.

### Settings

In this tab you will find options of common properties between all pages:

* Name
* Parent
* Path
* Excerpt
* Grid
* Privacy
* Custom meta tags

:::warning Warning
Modyo has reserved paths for the pages, so you cannot use these as paths for your custom pages:
<table style="border: none;"><tr style="border: none;">
<td style="border: none;"><ul>
<li>404</li>
<li>422</li>
<li>500</li>
<li>admin</li>
<li>auth</li>
</ul></td>
<td style="border: none;"><ul>
<li>crossdomain</li>
<li>dist</li>
<li>forms</li>
<li>javascript</li>
<li>login</li>
</ul></td>
<td style="border: none;"><ul>
<li>logout</li>
<li>manifest</li>
<li>ping</li>
<li>preview</li>
<li>profile</li>
</ul></td>
<td style="border: none;"><ul>
<li>robots</li>
<li>search</li>
<li>serviceworker</li>
<li>session</li>
<li>site_logout</li>
</ul></td>
<td style="border: none; vertical-align: top;"><ul>
<li>sitemap</li>
<li>stylesheets</li>
<li>uploads</li>
<li>widget_manager</li>
</ul></td>
</tr></table>
:::

## Content Page

Display the [entries] (/en/platform/content/entries) of your [content types] (/en/platform/content/types) from a single page using content pages.

### Prerequisites

In order to display content on a site, you must meet certain conditions:

* Have a space with at least one language (the same language as the site) and at least one Content Type. For more information, see [Create a Space](/en/platform/content/spaces.html#create-a-space) and [Create a Type](/en/platform/content/types.html#create-a-type)
* Have entries published in the language of the site. For more information, see [Entries](/en/platform/content/entries.html) and [Locales](/en/platform/content/spaces.html#locales)

:::tip Tip
You can freely choose the name of each view, regardless of the space and content type you choose. You have to keep in mind that it is required to have an entry published in this site language in order to see content in these views.
:::

These pages are comprised of two sections **Index** and **Show**.

### Index

The index page will display the list of all entries in the content type. Here you can select the following options:

#### Edit

- **Enable Entry Index: ** Disabled by default. The path it takes is the name given to the page when it was created. If this option is disabled, only the **Show** pages will be accessible and if you try to access it, you will see a 404 error.
- **Layout: ** The Layout template you are going to load for the Index.
- **Custom Meta Tag: ** Add custom meta tags to optimize the SEO of the index. This meta tag will only be loaded for the Index, not for the Show. You can also use Liquid to load dynamic meta tags.

### Show

The tab where you define what dynamic entries will look like. Here you can select the following options:

#### Edit:

- **Layout: ** The Layout template you are going to upload for the Show.
- **Custom Meta Tag: ** Add custom meta tags to optimize the show's SEO. This meta tag will only be loaded for the Show, not for the Index. You can also use Liquid to load dynamic meta tags.

A basic example of Liquid+HTML code that you can use in **Show** is:

```html
<div>
  <h1 class="title">{{ entry.name }}</h1>
  <time>{{ entry.published_at | format_date }}</time>
  <span class="url">
    <a href="{{request.url}}">{{request.url}}</a>
    </span>
</div>

<div>
  <div class="description">
    {{ entry.description }}
  </div>
</div>
```

This snippet takes `entry.name`, `entry.published_at`, `request.url`, and `entry.description` to generate a dynamic page depending on the entry you select.

:::tip Tip
To learn more about how to use Liquid, see [Liquid markup](/en/platform/channels/liquid-markup.html)

To learn what fields you can use with the `entry` drop, go to [Content Drops](/en/platform/channels/drops/entry).
:::

#### Settings

Displays the type of content and the space to which this page belongs. You'll also have options to change the name, parent page, path, and an excerpt.

:::tip Tip
If a custom domain is enabled, the URL is the same as the one in ``Site Settings > Domains``.

In case it is not enabled, the URL will be in the form `account_url/site_host`.
:::

The excerpt is added as part of the meta tags to improve SEO. This is possible for both page types and [Templates](/en/platform/channels/templates.html). Inside the `<head>` a tag is added:

```html
<meta name="description" content="{{ page.excerpt }}"/>
```

#### Child routes delegation

Enable the child routes delegation to allow the full control of the page routes from the Javascript router.

## Privacy

If you enable the "Private" option on a page, then a user must be logged in with a session to view this page. Along with privacy, you can also associate [Segments](/en/platform/customers/segments.html), so that only users belonging to specific user segments can access this page. Those who are not part of the group of selected targets will be redirected to the previous page or to the home page.

## Meta tags

Meta tags define the content of a page and search engines rely on them to provide the user with a search list. In this section you can add meta tags to pages and modify the value of existing meta tags, to enrich the SEO of the page. With the tags added to the pages, you can decide whether to use the default value, overwrite the value available for the tag, or remove the tag from the page.

To access the list of meta tags on the page, you must use the <span v-pre>`{{ page.meta_tags }}`</span> Liquid drop. We recommend that you go through the example in the SEO section of the [Template builder](/en/platform/channels/templates.html#seo).

### Add a new meta tag

To add a new meta tag to your site, follow these steps:

1. In Modyo Platform, from the main menu, expand **Channels**, and click **Sites**.
1. Click your Site.
1. Expand **Site settings** and click **SEO**.
1. In the Custom Meta Tags section, click **+ New meta tag**.

On the screen that appears, you have the option to choose between different meta tags and assign them a value. This value can be dynamic if Liquid is used. If you activate the **Replicate meta tag on pages** option, a meta tag will be created in the Properties section of all your pages.

As part of the `base` Template, we include the `seo` Snippet which contains the information needed to print the values of the meta tags depending on whether it is a Site, a Page, or a Entry.

:::tip Tip
Please note that for the meta tags to take effect on your page, you must publish the changes.
:::

For more information about how we use dynamic meta tags on sites, visit [site settings, SEO section](/en/platform/channels/sites.html#seo).

