---
search: true
---

# Pages

Pages allow you to create a structure for your site, add unstructured content, and customize the routes where that content is displayed.

You can create two types of pages: widget or content. Widget pages are based on a modular scheme that allows you to create your custom site using HTML, JS, and CSS. You can drag and drop different predefined or custom widgets created by your team.

Content pages connect the Content modules with Channels. Here you can create the index that contains the entries and the structure for all of them using HTML, JS, CSS, and Liquid.

To edit a page, click on the edit icon or on the page name to go to the edit view.

In the edit view, you will find a top bar with actions, a central grid, and a sidebar with tabs.

In the top bar, you will find different actions and information:

**Title**: Located in the upper left, it indicates the name of the page you are modifying. To the right of the name, you will find the current status of the page: "Draft", "Under review", "Approved", "Pending changes", or "Published". To learn more about these statuses, you can review the [Versioning and Team Review](/en/platform/core/key-concepts.html) section.

**Publication date**: If the page has been published, it will indicate the date of the last publication.

**Preview**: This icon allows you to open a new tab with Preview mode to view the changes made to the page without having to publish it.

:::warning Attention
You can preview the pages as a user without a session or with a Modyo session. For this, it is recommended to start or close the Modyo session on the site before entering preview mode, as doing so within this mode can generate security errors such as _x-frame-options_ or _mixed-content_, depending on the custom domain and SSL configuration of the site.
:::

**Differences**: By clicking on the differences icon, you access the page's differences view, where you can select two versions to compare, allowing you to execute the actions [reset and rollback](/en/platform/core/key-concepts.html#revert-a-change).

:::tip Tip
If your page is in _draft_ status, the differences icon will not appear, as there is nothing to compare the current editable version with. To learn more about differences and backups, see the [versioning](/en/platform/core/key-concepts.html#versioning) section.
:::

**Activity**: Displays a sidebar that shows the activity associated with the page, such as modifications, publications, and comments. At the bottom of this bar, you can type comments. If the page is under review, all assigned reviewers will receive a notification with the comment.

**Other actions**:

- Archive: If a page is not published, this action allows you to archive it. When a page is archived, by default, it does not appear in the page index, which helps keep the site structure clean.
- Duplicate: This action allows you to copy the editable version of the current page. The copied version remains in _draft_ status.

:::warning Attention
Once you complete the copy action, you will be redirected to the new page, so it is important to save all changes before using this action to avoid losing important information.
:::

## Create a page
To create a new page, follow these steps:

1. From the Modyo Platform main menu, expand Channels and click Sites.
2. Select the site you want to add a new page.
3. Click **Pages**.
4. Click **New Page**.
5. Select the type of page (**Widget** or **Content**) you want to create.
6. Enter the Layout Name, Path, and if necessary, select the parent layout, then press **Create**.
7. Customize the page according to the type: adding or editing widgets for Widget Page, or editing the Index and Show for Content Page.
8. Once finished, click **Publish**.

To learn about the types of widgets you can add, see [Widgets](/en/platform/channels/pages.html#widget-page).

To learn more about content pages, see [Content Page](/en/platform/channels/pages.html#content-page).

**Main action**: It is the green button in the upper right that can take different forms:

- Save: Allows you to save the changes made to the page.
- Send to review: If team review is enabled and there are no pending changes, this action allows you to submit the page for review and assign reviewers.
- Publish: If the page is approved, you can go to the [joint publication view](/en/platform/core/key-concepts) using this action.

:::tip Tip
* If a page has a parent, you can only publish it if it is published.
* If a page has children, you can only unpublish it if all of them are unpublished.
* If a page has children, you can only archive it if all of them are archived.
:::

**Secondary Actions**:
- Force publish: If you are a site administrator, you can use this option to publish the page at any time, even skipping team review.
- Unpublish: If the page is published, this action allows you to unpublish it.

The central grid is where you can position your widgets. You can move them using the _drag-and-drop_ functionality.

In the right sidebar, there are three tabs:

- Add widgets: Allows you to select widgets from a list to add them to the grid.
- Edit widget: Allows you to change properties and filters for each widget.
- Properties: Allows you to modify the name, excerpt, path, parent, privacy, page grid, and meta tags.


### Inserting an Image with Liquid

Modyo recommends using the Liquid tag and not the asset URL to insert images into your content. This allows you to resize or replace an image wherever it is in use and ensure that any changes are immediately reflected.

In addition, Modyo converts the image to webp format with lossless compression quality. This results in smaller images, with shorter loading times, and without loss of quality.


#### To get the Liquid code from an image:

1. Click on the media icon above your work area
1. Click on the image.
1. Click on the copy icon, next to the Liquid tag of the image.

#### To replace an image, follow these steps:

1. Click on content.
1. Select the space where the image you want to modify is located.
1. Click on media.
1. Select the image you want to replace.
1. Click on the upload image icon above the current image.
1. Select the new image.
1. Click on **update information**.

:::tip Tip
It is necessary that your account's CDN is in the cloud for changes to be reflected immediately, otherwise you will need to request cache invalidation, through a ticket to [Modyo](https://support.modyo.com/hc/en-us).
:::

## Widget Page

Here you can customize your page using preset widgets from the following list:


- **HTML**: Allows you to enter HTML and CSS code without validations. It will not allow you to enter Javascript code.
- **Rich text**: Allows you to use a rich text editor, in which you can format text and switch between code view and rich text.
:::warning Attention
The rich text widget has an automatic formatter, so the code you write in the code view may be affected.
:::
- **Content list**: Displays content lists using filters by space, type, language, tags, and category. To modify how these widgets look, you must do so in the Widgets section in [Templates](/en/platform/channels/templates.html).
- **Featured content**: Displays a list of entries as "hero" images in a carousel.
- **Custom**: You will find a list of all the widgets you have created and published in the widget builder.

Once a widget is selected in the central section, the focus will shift to the side tab, where you can find different configuration options for the widget. If you select a custom widget, you will find a link to go directly to its editing view in [widget builder](/en/platform/channels/widgets.html) and the list of variables the widget is using. If you want to overwrite the value of a particular variable for that instance of the widget on that page, you must select the checkbox to the left of the variable and change the value it takes.

### Properties

In this tab you will find common properties options for all pages:

* Name
* Parent
* Path
* Excerpt
* Grid
* Privacy
* Custom meta tags

:::warning Attention
Modyo has reserved paths for pages, so you cannot use them as paths for your custom pages:
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

Displays the [entries](/en/platform/content/entries) of your [content types](/en/platform/content/types) from a single page using content pages.

### Prerequisites

To display content on a site, you must meet certain conditions:

* Have a space with at least one language (the same as the site) and at least one Content Type. For more information, see [Create a Space](/en/platform/content/spaces.html#create-a-space) and [Create a Type](/en/platform/content/types.html#create-a-type)
* Have entries published in the site's language. For more information, see [Entries](/en/platform/content/entries.html) and [Localization](/en/platform/content/spaces.html#localization)

:::tip Tip
You can use any name you want for the views, regardless of the type or space you want to associate them with. Always keep in mind that entries will only be displayed if they have a published version in the language of the site where you are creating these views.
:::

These pages are composed of two sections: **Index** and **Show**.

### Index

The index page contains the list of all entries of the content type. Here you can select the following options:

#### Edit

- **Enable Entry Index**: Disabled by default. The path it takes is the name given to the page when it was created. If this option is disabled, only **Show** pages will be accessible, and if access is attempted, a 404 error will be displayed.
- **Layout**: The Layout template that will load for the Index.
- **Custom Meta Tag**: Adds custom meta tags to optimize the SEO of the index. This meta tag will only be loaded for the Index, not for the Show. You can also use Liquid to load dynamic meta tags.

### Show

The tab where you define how dynamic entries will look. Here you can select the following options:

#### Edit:

- **Layout**: The Layout template that will load for the Show.
- **Custom Meta Tag**: Adds custom meta tags to optimize the SEO of the show. This meta tag will only be loaded for the Show, not for the Index. You can also use Liquid to load dynamic meta tags.

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
To learn more about how to use Liquid, go to [Liquid markup](/en/platform/channels/liquid-markup.html).

To learn what fields you can use with the `entry` drop, see [Content Drops](/en/platform/channels/drops.html#entry).
It can be complemented with the use of [Content Filters](/en/platform/channels/liquid-markup/filters.html#content).
:::

#### Properties

Displays the content type and the space to which this page belongs. You will also have options to change the name, parent page, path, and an excerpt.

:::tip Tip
If the custom domain is enabled, to find the URL format, you must go to ``Site Settings > Domains``.

If it is not enabled, the URL will be in the form `account_url/site_host`.
:::

The excerpt is added as part of the meta tags to improve SEO. This is possible for all page types and [Templates](/en/platform/channels/templates.html). Inside the `<head>` a tag is added:

```html
<meta name="description" content="{{ page.excerpt }}"/>
```

#### Route delegation

Enables route delegation to allow absolute control over the page's sub-routes through the JavaScript router.

## Privacy

If you enable privacy on a page, a session will be required to view this page. Along with privacy, you can also associate [Segments](/en/platform/customers/segments.html), so that only users belonging to those segments will be able to access this page. Those who are not part of the selected segment group will be redirected to the previous page or the site's home page.

## Meta tags

Meta tags define the content of a page, and search engines rely on them to provide a search list to the user. In this section, you can add meta tags to pages and modify the value of existing meta tags to enhance the page's SEO. With the tags added to the pages, you can decide whether to use the default value, overwrite the available value for the tag, or remove the tag from the page.

To access the list of meta tags on the page, you must use the Liquid drop <span v-pre>`{{ page.meta_tags }}`</span>. We recommend you see the example in the SEO section of the [Template builder](/en/platform/channels/templates.html#seo).

### Add a new meta tag

To add a new meta tag to your site, follow these steps:

1. In Modyo Platform, from the main menu, expand **Channels**, and click on **Sites**.
1. Click on your Site.
1. Expand **Site settings** and click **SEO**.
1. In the Custom Meta Tags section, click **New meta tag**.

On the screen that appears, you have the option to choose between different meta tags and assign them a value. This value can be dynamic if Liquid is used. If you activate the **Replicate meta tag on pages** option, a meta tag will be created in the Properties section of all your pages.

As part of the `base` Template, we include the `seo` Snippet which contains the necessary information to print the values of the meta tags depending on whether it is a Site, a Page, or an Entry.

:::tip Tip
Please note that for the meta tags to take effect on your page, you must publish the changes.
:::

For more information on how we use dynamic meta tags on sites, visit [site settings, SEO section](/en/platform/channels/sites.html#seo).