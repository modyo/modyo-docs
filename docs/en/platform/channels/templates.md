---
search: true
---

# Templates

One of the most important aspects when creating the site is the base architecture and appearance of the site. In Templates, you can modify the base templates, along with the JavaScript, and global CSS to use on your pages and change their structure as needed.

When creating a Site, it will be filled with different templates to generate the Minimal theme and you can start creating your digital channel. If necessary, you can also create Snippets of HTML, JS, and CSS code to extend the functionality of your site.

Once inside Templates, you can see that the main menu is hidden to optimize the work area. In the top bar, on the left, you can find the name of the section and the current publication status.

- **Published:** When a published version already exists and its editable version is the same.
- **Pending changes:** When there is a published version, but there are pending changes to be published in your editable version.
- **In review:** When [team review] (/en/platform/core/key-concepts.html) is enabled and the editable version has been submitted for review.
- **Approved:** When [team review] (/en/platform/core/key-concepts.html) is enabled and if the item's review conditions have been met. If you're in this state, your templates are ready to be published.

At the top right, you can see the last publication date and the available actions:

**Preview:** Click on this icon to open a new tab with the template preview mode. In this view, you can see all the changes to your templates, as if they were published.

:::warning Attention
You can preview the changes as a user without a session or a user with a Modyo session. For this, it is recommended to open or close the Modyo session on the site before entering the preview mode, since if you start or close the session within the preview mode. This is because logging in or out of preview mode can result in security errors such as _x-frame-options_ or _mixed-content_, depending on the site's custom domain and SSL settings.
:::

**Differences: ** It takes you to the difference view, where you can compare the changes between multiple versions of your templates.

By default, you start by comparing the published version with the editable version. Use the version selectors to compare with backup versions.

:::tip Tip
Every time you publish a version, the version that was published becomes a backup version. By default, up to 20 backups are saved, so that the twenty most recent backups can be compared, restored, and rolled back.

For more information on versioning, see [versioning] (/en/platform/core/key-concepts.html#versions).
:::

**Search in templates:** Displays a sidebar with a text search engine that searches all the editable templates.

**Activity/Comments: ** Displays a sidebar that shows the history of activity and comments of the templates.

At the bottom of the sidebar, there's a text box where you can type a comment. Next to each activity, you can click **view detail** to show the full information for that activity log.

**More actions:**

- **Restore everything:** You restore templates to their original value.

**Main Action**

- **Save:** Save all changes to all templates.
- **Submit for review:** Change the status of the templates to “Awaiting review”. In this state, you can continue to make changes, but each change will be notified via email to the assigned reviewers.
- **Reject:** Returns to the “In Editing” status, notifying reviewers that the item was rejected.
- **Publish:** Once the templates have been approved, you can go to the [joint publication] view (/en/platform/core/key-concepts.html#joint-review-and-publication) and publish your templates.

In the main workspace, you can see two sections:

- The work area.
- The template selection area.

Each template that you click on in the right sidebar opens in the central area with a text editor. If you open multiple templates, they are open as tabs in the workspace.

The template bar on the right has two tabs: views and snippets.

## Layouts

Modyo has three default layouts:
* **Home:** Used exclusively on the home page of the site.
* **Base:** All pages except the home page use this layout by default.
* **Error:** Error views use this clean layout (404, 401)

You can create new Layouts from Templates, by clicking on “Add Layout” in the “Views” tab, which will allow you to define a new base structure to use on the pages.

You can use this code as a base, which contains everything necessary for your pages to use all the necessary elements of the site, such as the head, header, footer, service worker, and the Google Tag Manager configuration, but keep in mind that you can modify it as much as you want:

```liquid
{% HTML5 %}
<head>
{% snippet 'shared/general/head' %}
</head>

{% body %}
{% snippet 'shared/general/body_tag_manager' %}
{% snippet 'shared/general/header' %}

{{ site.breadcrumb }}
<div id="main-layout">
{{ content_for_layout }}
</div>

<script>{% snippet “shared/serviceworker/register_js” %}</script>
{% snippet 'shared/general/footer' %}

{% endbody %}
{% endHTML5 %}
```

Once you have created your new layout, you can start using it by going to the page editing view and changing it from the properties tab.


## Errors in Views

In the views section, you'll find 4 types of errors available to customize:

* **Disabled:** You'll see this error view if the site you're trying to access has been [disabled] (/en/platform/channels/sites.html).
* **404:** You will see this view if you enter a site URL that is not defined and if in the configuration of [site restrictions] (/en/platform/channels/sites.html#privacy) you decide to show the 404 and not redirect to the home page.
* **Privacy:** You'll see this error view if you don't have permissions to access the [site] (/en/platform/channels/sites.html#privacy) or one of its [pages] (/en/platform/channels/pages.html#privacy).
* **Template:** You'll see this error view when the site page you're loading has a liquid syntax error. It's unlikely that you'll ever see this view, since from modyo 8.1 onwards we have a feature that checks the syntax of liquid before we can save and publish changes to Templates.

## CSS and JavaScript

It is possible to create custom CSS and JavaScript code templates by clicking on the**+** buttons, in the CSS and JavaScript sections respectively, at the bottom of the Views tab.

### Add CSS or Javascript

Custom CSS and Javascript views are the way in which you can import your libraries to Modyo Platform. Follow these steps to create a CSS or Javascript view:

1. On Modyo Platform, expand **Channels**, and click **Sites**.
1. Click on your site.
1. In the side menu, click **Templates**.
1. In the Views section, click the **Add Style Sheet** (or Javascript) button.
1. Add the Route and click **Add**.
1. Once you've finished editing the Style Sheet or Javascript, it should be included in your Layout as follows.


To include any of these views, there are different Liquid filters available: `asset_url` to define the file type, `stylesheet_tag`, and `script_tag` to generate the corresponding tags, the following example adds:

- A custom view of CSS with media: screen
- A custom Javascript view with asynchronous loading

```html
<head>
 {{ 'my-css' | asset_url: 'css' | stylesheet_tag: media: 'screen', title: 'color style' }}
 {{ 'my-js'  | asset_url: 'js' | script_tag: async: 'async', defer: 'defer' }}
</head>
```

Once it has been saved and published, it is translated to the following HTML code:

```html
<link href='my-css' rel='stylesheet' type='text/css' media='screen' title='color style' />
 <script src='my-js' type='text/javascript' async='async' defer='defer'></script>
```

To learn more about the parameters supported by these filters, go to [Liquid filters] (/en/platform/channels/liquid-markup.html #filtros -standard).


## Snippets

Snippets are snippets of HTML, JS, or CSS code that you can reuse on your sites. You can copy the reference path for each custom snippet. The Liquid code will look like: <span v-pre>`{% snippet “snippet-name”%}`</span>. Paste this code wherever you want to call this Snippet.

You can add custom snippets to the bottom of the platform's snippet list, by clicking on the **+ Add a Snippet** button.

:: :warning Important
For the system to recognize the type of programming language to which the snippet belongs, the ending with underscore + termination must be added, that is to say **"front_css"** or **"library_js"** by default will recognize the snippet as an HTML language.
:::

:::tip Tip
All elements of the Template Builder use Liquid as a template engine.

For more information on what Liquid is and how to get best take advantage of it, check out the [Liquid Markup] page (/en/platform/channels/liquid-markup.html)
:::

In the work area, under the tabs, you'll find a bar with these items:

**File manager:** A modal is created where you can access all the files in the account and copy their URL. If you access the second tab, you can upload new files.

:::tip Tip
For more information on the benefits and features of File Manager, go to [File Manager] (/es/platform/content/asset-manager.html)
:::

**Keyboard Shortcuts:** A small pop-up appears with some of the useful keyboard shortcuts for use in Templates.

**Snippets:** A list of all the snippets is displayed, along with the option to copy their reference code.

**Changes:** A list of all the times and states in which you have done the “Save” action in this version. When you click on one of the sub-versions, you change the content of the template you are working on to that sub-version.

:::tip Tip
If you publish a version, you will see that the list of changes disappears, this is because the new editable version has not had any changes.
:::

:::tip Tip
The sub-versions are for each template, so for some you may notice that there are changes and for others you won't see the change selector. In the same way, if you go back to a previous sub-version of a template, it doesn't affect the rest of the templates.
:::

:::tip Tip
If a version older than the editable version is restored, you will be able to access the sub-versions of each template in that version.
You can learn more about [versioning here] (/platform/core/key-concepts.html #versionado).
:::

Like every template, you can restore all the templates to their original version by clicking on the secondary action in the top bar “Restore All”. For the changes to take effect, you must publish the templates.

## SEO

SEO [(Search Engine Optimization)] (/en/platform/channels/sites.html #seo) is one of the most important topics of the site and content.

In Modyo, there is a way to control the way search engines read your site and content, dynamically adding meta tags depending on the attributes you add to your pages and content.

You can add this code snippet in Templates and then call this snippet from the head of your site:

```html
<!-- Site SEO -->
<meta name="keywords" content="{{ site.keywords }}"/>
<meta name="author" content="{{ site.name }}"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

{{ site.meta_tags }}

{% if page %}
<!-- Page SEO -->
{{ page.meta_tags }}
<meta name="description" content="{{ page.excerpt }}"/>
<meta property="og:title" content="{{ page.title }}"/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="{{ page.url }}"/>
<meta property="og:image" content="{{ site.logo | asset_url : 'original' }}"/>
<meta property="og:site_name" content="{{ site.name }}"/>
<meta property="og:description" content="{{ page.excerpt }}"/>
{% endif %}
<!-- END SEO -->
```

This snippet uses Liquid to add meta tags at the Site level. It also adds specific meta tags when the user navigates to a Widget or Content Page.

If you require it, you can customize this snippet, defining what meta tags you want to appear for specific URLs or types.

## Examples of SEO

Below we provide a series of examples to improve SEO for different cases.

### Specific Meta Tags for an Entry

For example, if you want to use specific meta tags when a user visits an Entry, you can use:

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

In this case, the Content Type `posts` and `place` share the attributes _title_, _excerpt_ and _covers_, and differ in the _locations_ object. In addition, the meta data defines a different type of document for each one.

### Specific Meta Tags for a Category in Content Pages

If you have specific meta tags when you show Entries that belong to a Category, you can copy the following code:

```html
{% assign category_name = category_path | split: '/' | last | capitalize %}

{% case category_name %}
  {% when 'Category 1' %}
     {% assign category_description = 'This is the meta description for Category 1' %}
  {% when 'Categoría 2' %}
     {% assign category_description = 'This is the meta description for Category 2' %}
{% endcase %}

{% if category_path.size > 0 %}
<!-- Content Page: Index con categoría -->
<title> {{ category_name }} - {{ site.name }} </title>
<meta name="description" content="{{ category_description }}"/>
<meta property="og:title" content="{{ category_name }} - {{ site.name }}"/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="{{ page.url }}/{{ category_path }}">
<meta property="og:image" content="https://d1dzq2r60kxox4.cloudfront.net/uploads/c82bdfea-3622-4c11-9a20-bea227cbdc60/original/og_image.jpg"/>
<meta property="og:site_name" content="{{ site.name }}"/>
<meta property="og:description" content="{{ category_description }}"/>
```

In this code, a `category_name` variable is created containing the name of the category taken from the URL, then a `{% if category_path.size > 0%}` is used to append relevant meta data to the category.

Liquid is the way to create dynamic content everywhere in your Site. For more information about Liquid and how to use Liquid Drops, visit [Liquid Markup](/en/platform/channels/liquid-markup).