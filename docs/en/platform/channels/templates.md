---
search: true
---

# Templates

One of the most important aspects when creating the site is the base architecture and appearance of the site. In Templates, you can modify the base templates, along with the global JavaScript, and CSS to use in your pages and change their structure as required.

When creating a Site, it will be filled with different templates to generate the Minimal theme and you can start creating your digital channel. If necessary, you can also create Snippets of HTML, JS, and CSS code to extend the functionality of your site.

<img src="/assets/img/channels/template_builder/template-builder.png" alt="The templates main menu">

Once inside Templates, you can see that the main menu is hidden to optimize the work area. In the top bar, on the left, you can find the name of the section and the current publication status.


- **Published**: When a published version already exists and its editable version is the same.
- **Pending Changes**: When there is a published version, but your editable version has changes that are not published yet.
- **In review**: This status appears when [Team review](/en/platform/core/key-concepts.html) is enabled and the editable version of your templates has changes that have been submitted for review.
- **Approved**: When [Team Review](/en/platform/core/key-concepts.html) is enabled and if the item's review conditions were met. If you're in this state, your templates are ready to be published.

On the bar in the upper-right, you will find the latest publication date and the available actions:

**Preview** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Clicking this icon opens a new tab with the template preview mode, in which you will see how it looks as if they were published, with all the changes you have in your templates.

:::warning Attention
You can preview the changes as a user without a session, or with Modyo a session. For this, it's recommended to log in or log out of Modyo from your site before entering preview mode, because if you log out while in preview mode you might encounter security errors like _x-frame-options_ or _mixed-content_, depending on your site's SSL and custom domain settings.
:::

<img src="/assets/img/channels/template_builder/differences.jpg" style="border: 1px solid #EEEEEE" width="700" alt="The version differences window">

**Differences** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M19 3h-5v2h5v13l-5-6v9h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 15H5l5-6m0-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h5v2h2V1h-2v2z" fill="#626262"/> </svg>: Clicking this icon will take you to the [difference view](/en/platform/channels/sites.html#review-and-joint-publication), in which you can compare changes between multiple versions of your templates. 

By default, you start by comparing the published version to the editable version. Using the version selectors, you can also compare with backup versions.

:::tip Tip
Every time you publish a version, the version that was published becomes a backup version. By default, up to 20 backups are saved, so that the twenty most recent backups can be compared, restored, and rolled back. 
For more information on versioning, see [versioning](/en/platform/core/key-concepts.html#versions).
:::

**Search in templates** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M9 13a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3a3 3 0 0 0-3 3m11 6.59V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.76.83-2.76.83a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5c0 1-.31 1.96-.83 2.75L20 19.59z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Deploys a sidebar with a text finder that searches all editable templates. 

<img src="/assets/img/channels/template_builder/conversation.jpg" style="border: 1px solid #EEEEEE" width="700" alt="The activity window">

**Activity/Comments** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29H12m1-6v3.08L16.08 17H21V7H7v10h6M3 15H1V3a2 2 0 0 1 2-2h16v2H3v12m6-6h10v2H9V9m0 4h8v2H9v-2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Deploys a sidebar with the activity history and comments of the templates. 

You can add new comments at the bottom of the sidebar. Next to each activity, you can also click on **see detail** to show the complete information of an activity log.

**More actions** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>:

- **Restore all**: Restore templates to their original values.

**Main Actions**

- **Save**: Saves all changes to all templates.
- **Send for Review**: Change the status of templates to “Waiting for Review”. In this state you can continue to make changes, but each change will be notified via email to the assigned reviewers.
- **Reject**: Returns the status to "Pending changes" and notifies reviewers that the item was rejected.
- **Publish**: Once the templates are approved, you can go to the [co-publish](/en/platform/channels/sites.html#review-and-joint-publication) view and publish your templates.

In the main work area, there are two sections:

- The central work area.
- The template selection area.

Each template you click on the right sidebar, opens a text editor in the middle area. If you open multiple templates, they are opened as tabs in the workspace.

The template bar on the right has two tabs: views and snippets.

## Custom Layouts

Modyo has three default layouts:
* **Home**: Used exclusively on the home page of the site.
* **Base**: All pages except the home page use this default layout.
* **Error**: The error views use this clean layout (404, 401)

You can create new Layouts from Templates, by clicking on “Add Layout” in the “Views” tab, which will allow you to define a new base structure to use in the pages.

You can use this code as a base, this contains everything you need to make your pages use all the necessary elements of the site, such as the head, header, footer, service worker, and Google Tag Manager settings, but keep in mind that you can modify it as much as you want:

```liquid
{% html5 %}
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

<script>{% snippet "shared/serviceworker/register_js" %}</script>
{% snippet 'shared/general/footer' %}

{% endbody %}
{% endhtml5 %}
```

After you have created your new layout, you can start using it by going to the page editing view and changing it from the properties tab.


## Errors in Views

In the views section, you will find 4 error types available for customization:

* **Disabled**: You'll see this error if the site you're trying to access has been [disabled](/en/platform/channels/sites.html).
* **404**: You'll see this view if you enter a site URL that isn't defined and if in the [site restrictions](/en/platform/channels/sites.html#privacy) settings you decide to display the 404 and not redirect to the home page.
* **Privacy**: You'll see this error view if you don't have permission to access the [site](/en/platform/channels/sites.html#privacy) or one of its [pages](/en/platform/channels/pages.html#privacy).
* **Template**: You'll see this error view when the page of the site you're loading has a liquid syntax error. It's unlikely that you'll ever see this view, given that from modyo 8.1 onwards we have a feature that checks the syntax of liquid before we can save and publish changes to Templates.

## CSS and JavaScript

You can create custom CSS and JavaScript templates by clicking the **+** buttons in the CSS and JavaScript sections respectively at the bottom of the Views tab.

### Add CSS or Javascript

Custom CSS and Javascript views are the way in which you can import your libraries to Modyo Platform. Follow these steps to create a CSS or Javascript view:

1. In Modyo Platform, expand **Channels**, and click **Sites**.
1. Click on your site.
1. In the side menu, click **Templates**.
1. In the Views section, click the **Add Style Sheet** (or Javascript) button.
1. Add the Path and click **Add**.
1. Once you have finished editing the Style Sheet or Javascript, it should be included in your Layout as follows.


To include any of these views, there are different Liquid filters available: `asset_url` to define the file type, `stylesheet_tag`, and `script_tag` to generate the corresponding tags, the following example adds: 

- A custom CSS view with media: screen
- A custom Javascript view with asynchronous loading

```html
<head>
  {{ 'my-css' | asset_url: 'css' | stylesheet_tag: media: 'screen', title: 'color style' }}
  {{ 'my-js'  | asset_url: 'js'  | script_tag: async: 'async', defer: 'defer' }} 
</head>
```

Once saved and published, it is translated into the following HTML code:

```html
<link href='my-css' rel='stylesheet' type='text/css' media='screen' title='color style' />
<script src='my-js' type='text/javascript' async='async' defer='defer'></script>
```

To learn more about the parameters supported by these filters, see [Liquid filters](/en/platform/channels/liquid-markup.html#standard-filters).


## Snippets

Snippets are pieces of HTML, JS, or CSS code that can be reused on your sites. Next to each custom snippet, you'll find an icon (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>) to copy its reference path. The code will look similar to this: <span v-pre> `{% snippet “snippet name”%}` </span>. This Liquid code must be pasted where you want to call this Snippet.

You can add custom snippets to the bottom of the platform's snippet list by clicking on the **+** button.

<img src="/assets/img/channels/template_builder/custom-snippet.jpg" style="border: 1px solid #EEEEEE" width="300" alt="The custom snippet window">

:::tip Tip
In order for the system to recognize the programming language type of the snippet, place an underscore followed by the language type at the end of the snippet name i.e. **"front_css"** or **"library_js"**. Without this naming syntax, the Template Builder assumes the snippet is HTML by default.
:::

:::tip Tip
All elements of the Template Builder use Liquid as a templating engine.

For more information on what Liquid is and how to get the most out of it, check out the [Liquid Markup](/en/platform/channels/liquid-markup.html) page
:::

In the work area, under the tabs, you will find a bar with useful elements:

<img src="/assets/img/channels/template_builder/bar-templates.jpg" style="border: 1px solid #EEEEEE" width="700" alt="Action bar inside templates">

**Asset manager**: Opens a modal that lists all account files and provides filtering and search capabilities. Clicking on the image preview or file name opens an editor where you can resize/crop the image and change its attributes, such as the title or alternate text. Selecting the copy icon provides you with a URL you can paste and you can click on the "Upload files" tab to upload files.

:::tip Tip
For more information on the benefits and features of the Asset Manager, go to [Asset Manager](/en/platform/content/asset-manager.html)
:::

**Keyboard shortcuts**: A small pop-up appears with some of the useful keyboard shortcuts to use in Templates.

<img src="/assets/img/channels/template_builder/keywords.jpg" width="400" alt="Keyboard shortcuts inside the templates module">

**Snippets**: Displays a list of custom snippets along with the option to copy the reference code of each snippet to insert them in a template.

<img src="/assets/img/channels/template_builder/snippets.jpg" width="300" alt="The list with all your custom snippets">

**Changes**: A list of every "Saved" state of a template since it was last published. Click on any of these saved states to change the content of the template you are working on to that particular saved state. If you decide to do so, all your current changes will be lost.

<img src="/assets/img/channels/template_builder/changes.jpg" style="border: 1px solid #EEE" width="300" alt="The latest changes in your template">

:::tip Tip
If you publish a version, you can see that the changelog disappears, that is because the new editable version does not have any changes.
:::

:::tip Tip
Sub-versions are for each template, so for some you may notice that there are changes and for others you won't see the change selector. Likewise, if you go back to a previous sub-version of a template, you won't affect the rest of the templates.
:::

:::tip Tip
If a previous version is restored to the editable version, you will be able to access the sub-versions of each template of that version. 
You can learn more about [versioning here](/en/platform/core/key-concepts.html#versioning).
:::

You can reset all templates to their original version by clicking on the secondary action of the top bar "<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12.5 8c-2.65 0-5.05 1-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg> Reset All". If you want these reset changes to show up in the front end, you must publish them.

## SEO

SEO [(Search Engine Optimization)](/en/platform/channels/sites.html#seo) is one of the most important topics of your site and content.

In Modyo, we have a way to control the way search engines read your site and content, dynamically adding meta tags depending on the attributes you add to your pages and content.

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

If you need it, you can customize this snippet, defining which meta tags you want to add for specific URLs or types. 

## Examples of SEO

Below we provide a series of examples to improve SEO for different cases.

### Specific Meta Tags for an Entry

For example, if you want to use specific meta tags when a user visits an Entry, you can use:

```html
...
{% if entry %}
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
{% endif %} 
{% endif %} 
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