---
search: true
---

# Templates

The base architecture and appearance are essential aspects of a site. In the Templates section, you can adjust the base templates as well as the global JavaScript and CSS and modify the structure as needed.

When you create a site, it comes complete with different templates to generate the Minimal theme, and you can start creating your digital channel on it. You can also create HTML, JS and CSS code snippets to extend the functionality of your site.

In the templates section, the main menu is hidden to optimize the work area. At the top left, you'll find the name of the section and the current status of the post:

- **Published:** There is a published version and the editable version is identical.
- **Pending changes:** There is a published version, but there are changes pending publication in your editable version.
- **Under review:** [team review](/en/platform/core/key-concepts.html) is active, and the editable version has been submitted for review.
- **Approved:** [team review](/en/platform/core/key-concepts.html) is enabled and the item's review conditions have been met. In this state, the template is ready to be published.

At the top right, you can see the last date of publication and icons with the available actions:

**Preview:** Click on this icon to open a new tab with a preview of the templates. Here you can view all the changes to your templates, as if they were published.

:::warning Attention
You can preview the changes as a non-session user or a user with an active Modyo session. For this reason, we recommend starting or closing the Modyo session on the site before entering preview mode, given that if you start or close the session in preview mode. This is because logging in or logging out in preview mode can generate security errors such as _x-frame-options_ or _mixed-content_, depending on the site's custom domain and SSL configuration.
:::

**Differences:** Compare changes between multiple versions of your templates. By default, Modyo compares the published version with the editable version. Use the version selectors to compare with backup versions.

:::tip Tip
Every time you publish a version, the version that was published becomes a backup version. By default, up to 20 backups are saved, allowing you to compare, restore and roll back to the last 20 versions

For more information on versioning, see the [versioning] section (/es/platform/core/key-concepts.html #versionado).
:::

**Search in templates: ** Display a sidebar with a text search engine that explores all the editable templates.

**View activity: ** Display a sidebar that shows the activity history and where you can read and write comments. Click on **view detail** to show the full information of any activity log.

**More actions: ** This icon allows you to **archive** or **delete** a template.

The last option in the top bar shows the main actions you can perform:

- **Save: ** Save all changes to all templates.
- **Submit for review: ** Change the status of the templates to “Awaiting review”. In this state, you can continue to make changes, but each change will be notified by email to the assigned reviewers.
- **Force publication: ** Only available to site administrators, allows you to immediately publish a template, even if it is waiting for review
- **Reject: ** Return to “In Edit” status and notify reviewers that the item was rejected.
- **Publish: ** Once the template has been approved, you can send it to publish.

In the main work area, there are two sections:

- **The editing area: ** Clicking on a template from the list in the selection area on the right side will open the template in the central area with a text editor. If you open multiple templates, they will open as tabs in the workspace.
- **The template selection area: ** Select the views or snippets tab, as required.

## Layouts

Modyo offers three predefined layouts:

* **Home: ** Exclusively for the main page of the site.
* **Base: ** All pages, except the home page, use this layout.
* **Error: ** Used in error views (404, 401), presenting a clean design.

To create a new layout:
1. In the **Templates** section, click on the **Views** tab
2. Click the **+** button next to **Layouts**.
3. Add the Route and click Add.

This allows you to define a new base structure for use on pages.

You can use as a base this code that contains everything necessary for your pages to use the elements of the site, such as the header, footer, service worker and Google Tag Manager configuration. You can also modify the code, as needed.


```liquid
{% html5%}
<head>
 {% snippet 'shared/general/head'%}
</head>

{% body%}
{% snippet 'shared/general/body_tag_manager'%}
{% snippet 'shared/general/header'%}

{{site.breadcrumb}}
<div id="main-layout">
{{content_for_layout}}
</div>

<script>{% snippet “shared/serviceworker/register_js”%}</script>
{% snippet 'shared/general/footer'%}

{% endbody%}
{% endHTML5%}
```

To apply a new layout to a page, follow these steps:
1. Go to the **Pages** section
2. Select the **Properties** tab.
3. Choose the layout you want to use on your page.
4. Submit for review or publish your layout, as appropriate.


## Errors in Views

In the views section, you can customize four types of errors:

* **Disabled: ** Displayed when the site you're trying to access is [disabled] (/es/platform/channels/sites.html).
* **404: ** If in the [site restrictions] configuration (/es/platform/channels/sites.html #privacidad) you decide to show 404 instead of redirecting to the home page, this error appears when entering an undefined URL.
* **Privacy: ** It appears when you don't have permissions to access the [site] (/es/platform/channels/sites.html #privacidad) or one of its [pages] (/es/platform/channels/pages.html #privacidad).
* **Template: ** Visible when the loaded page has a Liquid syntax error. It's unlikely that you'll see this view, because starting with Modyo 8.1, the platform performs a syntax check before saving and publishing changes to Templates.

## CSS and JavaScript

Create custom CSS and JavaScript views to import your libraries to Modyo Platform. To do this, follow these steps:

1. In the **Templates** section, click on the **Views** tab.
1. Go to the CSS or JavaScript section, under the **Layout** section.
1. Click on the corresponding **+** button.
1. Add the Route and click **Add**.
1. Once you have finished editing the Style Sheet or Javascript, you must include it in your layout. To do this, you can use the following Liquid filters:

- `asset_url`: To define the file type
- `stylesheet_tag`: Generate a tag <link> to include the CSS view.
- `script_tag`: Generate a tag <script> to include the Javascript view.

### Examples
- A custom CSS view with media: screen
- A custom Javascript view with asynchronous loading


```html
<head>
 {{'my-css' | asset_url: 'css' | stylesheet_tag: media: 'screen', title: 'color style'}}
 {{'my-js' | asset_url: 'js' | script_tag: async: 'async', defer: 'defer'}}
</head>
```

Once saved and published, it is translated into the following HTML code:

```html
<link href='my-css' rel='stylesheet' type='text/css' media='screen' title='color style' />
<script src='my-js' type='text/javascript' async='async' defer='defer'></script>
```

For detailed information and the parameters supported by these filters, see the [Liquid filters] section (/es/platform/channels/liquid-markup.html #filtros -standard).


## Snippets

Snippets are reusable snippets of HTML, JS, or CSS code for your sites. To use a snippet:

1. Copy the reference path of the custom snippet. The Liquid code will look like: <span v-pre>`{% snippet “snippet-name”%}`</span>.
1. Paste the code wherever you want to call this Snippet.

To add a custom snippet:
1. In the **Templates** section, click on the **Snippets** tab
1. Navigate to the Custom section, at the bottom of the list of snippets.
1. Click on the **+** button
1. Add the Route and click Add.


:: :warning Important
For the system to recognize the programming language to which the snippet belongs, you must add an underscore and then the ending, as follows: “front_css” or “library_js”. By default, the system will recognize the snippet as an HTML language.
:::

:: :tip Tip
All the elements of the Template Builder use Liquid as the template engine. For more information about Liquid and how to use it, see the [Liquid Markup] section (/es/platform/channels/liquid-markup.html)
:::

In the work area, under the tabs, you'll find a bar with these items:

**Toolbar items**
The toolbar under the Template Builder tabs contains the following elements:

- **File Manager: ** Open a modal that allows you to access all the files in your account and copy their URL. Select the **Upload Files** tab to upload new files. For more information about the benefits and features of File Manager, go to [File Manager] (/es/platform/content/asset-manager.html)
- **Keyboard Shortcuts: ** Show useful keyboard shortcuts for Templates.
- **Snippets: ** Display a list with all the snippets and the option to copy their reference code.
- **Changes: ** Display a list of all the times and states in which you have saved the current version. By clicking on one of the sub-versions, you change the content of the template to that sub-version.

:: :tip Tip
When you publish a version, the list of changes disappears, because the new editable version has not changed.
:::

:: :tip Tip
Subversions are specific to each template, so some may have changes and others may not, and those without changes will not show the change selector. In the same way, if you go back to a previous sub-version of a template, you don't affect the rest of the templates.
:::

:: :tip Tip
If you restore a previous version to the editable version, you can access the sub-versions of each template in that version. You can learn more about [versioned] (/platform/core/key-concepts.html #versionado) here.
:::

To restore all templates to their original version, click on the secondary action in the top bar **Restore All**. For the changes to take effect, you must publish the templates.

## SEO

SEO [(Search Engine Optimization)] (/es/platform/channels/sites.html #seo) is essential for the positioning of your site and content.

In Modyo, you can control the way in which search engines read your site and content, adding meta tags dynamically, depending on the attributes you add to your pages and content.

To add the meta tags in Modyo, use this code snippet in Templates and then call it from the head of your site:

```html
<!-- Site SEO -->
<meta name="keywords" content="{{ site.keywords }}"/>
<meta name="author" content="{{ site.name }}"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

{{site.meta_tags}}

{% if page%}
<!-- Page SEO -->
{{page.meta_tags}}
<meta name="description" content="{{ page.excerpt }}"/>
<meta property="og:title" content="{{ page.title }}"/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="{{ page.url }}"/>
<meta property="og:image" content="{{ site.logo | asset_url : 'original' }}"/>
<meta property="og:site_name" content="{{ site.name }}"/>
<meta property="og:description" content="{{ page.excerpt }}"/>
{% endif%}
<!-- END SEO -->
```

This snippet uses Liquid to add site-level meta tags. It also adds specific meta tags when the user navigates to a widget or content page.

You can customize this snippet and define what meta tags you want for specific URLs or types.


## Examples of SEO

Here are examples of how to use the SEO snippet to improve SEO in different cases:

### Specific meta tags for a Post

Use this code to use specific meta tags when a user visits a post:

```html
...
{% if entry%}
<!-- Content SEO -->
<meta name="description" content="{{ entry.meta.excerpt }}" />
<meta property="og:title" content="{{ entry.meta.title }}" />
<meta property="og:url" content="{{site.url}}/{{entry.meta.type_uid}}/{{entry.meta.slug}}" />
<meta property="og:image" content="{{ entry.fields.covers.first | asset_url : 'original' }}" />
<meta property="og:site_name" content="{{ site.name }}" />
<meta property="og:description" content="{{ entry.meta.excerpt }}" />
{% if entry.type_uid = 'posts'%}
<meta property="og:type" content="article" />
{endif}
{% if entry.type_uid = 'place'%}
<meta property="og:type" content="place" />
<meta property="place:latitude" content="{{ entry.location.first.latitude }}" />
<meta property="place:longitude" content="{{ entry.location.first.longitude }}" />
{% endif%}
{% endif%}
...
```

In this case, the `posts` and `place` entry types share the _title_, _excerpt_ and _covers_ attributes and differ in the _locations_ object. In addition, it defines a different type of document for each one.

### Category-specific meta tags on the Content Page

For specific meta tags when displaying posts from a category, copy the following code:

```html
{% assign category_name = category_path | split: '/' | last | capitalize%}

{% case category_name%}
 {% when 'Category 1'%}
 {% assign category_description = 'This is the meta description for Category 1'%}
 {% when 'Category 2'%}
 {% assign category_description = 'This is the meta description for Category 2'%}
{% endcase%}

{% if category_path.size > 0%}
<!-- Content Page: Index con categoría -->
<title> {{category_name}} - {{site.name}} </title>
<meta name="description" content="{{ category_description }}"/>
<meta property="og:title" content="{{ category_name }} - {{ site.name }}"/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="{{ page.url }}/{{ category_path }}">
<meta property="og:image" content="https://d1dzq2r60kxox4.cloudfront.net/uploads/c82bdfea-3622-4c11-9a20-bea227cbdc60/original/og_image.jpg"/>
<meta property="og:site_name" content="{{ site.name }}"/>
<meta property="og:description" content="{{ category_description }}"/>
```

In this code, a `category_name` variable is created that contains the name of the category taken from the URL, then a `{% if category_path.size > 0%}` is used to add relevant metadata to the category.

Liquid allows you to create dynamic content for your site. To learn more about Liquid and how to use Liquid Drops, visit [Liquid Markup] (/en/platform/channels/liquid-markup).