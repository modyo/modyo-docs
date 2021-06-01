---
search: true
---

# Templates

One of the most important aspects of site creation is the base architecture and appearance. In the Template Builder, you can modify the base templates and the global JavaScript and CSS used in your pages. You can also change the structure of these documents according to your requirements.

Once you have selected a theme for a new site, you can access each template in the Template Builder and make any change you need.

Inside the Template Builder, you will find that the main menu is hidden to optimize the available workspace. In the top bar, you can also find the section name and a badge indicating its current status:

- **Published**: There is a published version of the templates and that the editable version you are working on now matches the state of the published version. This status changes whenever you save any changes to your templates.
- **Pending changes**: When there is a previously published version, this status indicates that your editable version has "pending changes" that have not been published.
- **In review**: This status appears when [Team review](/en/platform/core/key-concepts.html) is enabled and the editable version of your templates has changes that have been submitted for review.
- **Approved**: This status appears when [Team review](/en/platform/core/key-concepts.html) is enabled and if the review conditions were met. The templates are ready to be published if they have this status.

![Template Builder](/assets/img/channels/template_builder/template-builder.jpg)

On the right side of the upper bar, you will find the latest publication date and the available actions:

**Preview** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: Clicking on this icon will open a new tab with the templates in preview mode. This allows you to review your site or digital channel as if all current changes in your templates were currently live.

:::warning Warning
It is possible to enter the preview mode with or without a logged in user session in Modyo. For this reason, it is recommended to log in or log out before opening the preview mode. Logging in or out of Modyo from within the preview could cause security errors of type _x-fame-options_ or _mixed-content_, according to the site's custom domain configuration and SSL policy.
:::

<img src="/assets/img/channels/template_builder/differences.jpg" style="border: 1px solid #EEEEEE" width="700">

**Differences** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M19 3h-5v2h5v13l-5-6v9h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 15H5l5-6m0-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h5v2h2V1h-2v2z" fill="#626262"/> </svg>: Clicking this icon takes you to the [differences view](/en/platform/channels/sites.html#review-and-joint-publication) in which you can compare the differences between multiple versions of your templates.

By default, you see the differences between the published version and the editable version you are currently working on, but you can use the selectors to compare older backed up versions as well.

::: tip Tip
Every time you publish a new version, the version that gets replaced now becomes a backup version. By default, up to 20 backups are saved so that the most recent twenty backups can be compared, restored or used for a rollback. For more information on versioning, check out the [versioning](/en/platform/core/key-concepts.html#versioning) section .
:::

**Search in templates** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M9 13a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3a3 3 0 0 0-3 3m11 6.59V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.76.83-2.76.83a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5c0 1-.31 1.96-.83 2.75L20 19.59z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: Displays a sidebar with a search box. You can search any text inside the editable version of the templates.

<img src="/assets/img/channels/template_builder/conversation.jpg" style="border: 1px solid #EEEEEE" width="700">

**Show activity** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29H12m1-6v3.08L16.08 17H21V7H7v10h6M3 15H1V3a2 2 0 0 1 2-2h16v2H3v12m6-6h10v2H9V9m0 4h8v2H9v-2z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: Displays a sidebar with the activity history and template comments.

You can add new comments at the bottom of the sidebar. Next to each activity, you can also click on **see detail** to show the complete information of an activity log.

**More actions** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>:

- **Themes**: This takes you to the Themes Gallery, where you can copy the current theme and use it in the other sites or channels in your account. To learn more, check [Themes](/en/platform/channels/templates.html#themes).
- **Reset all**: Resets all templates to the original state of the corresponding theme.

**Primary Actions**

- **Save**: Saves current changes in all templates.
- **Send to review**: Changes the template status to "In review". You can continue making changes, but each change sends a notification to all assigned reviewers via email.
- **Reject**: Returns the status to "Pending changes" and notifies reviewers that the item was rejected.
- **Publish**: Once they have been approved you can go to the [publish view](/en/platform/channels/sites.html#review-and-joint-publication) to review and publish changes across the site.

In the main work area, there are two sections:

- The central work area.
- The template selection area.

Each template that you click on in the selection area opens in the central area, very similar to an IDE. If you open multiple templates, they will remain open as tabs in the central work area.

The templates selection bar on the right has two tabs: Views and Snippets.

Views are base elements and required by Modyo and are commonly used to define direct structure of your site's URLs.

### Snippets

Snippets are pieces of code that can be created, modified, and reused. Next to each custom snippet, you'll find an icon (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>) that you can use to copy the snippet's reference path. The copied code looks like this: <span v-pre> `{% snippet "snippet-name"%}` </span>.

You can add custom snippets at the bottom of the snippets tab, by clicking on the **+ Add a snippet** button.

<img src="/assets/img/channels/template_builder/custom-snippet.jpg" style="border: 1px solid #EEEEEE" width="300">

::: tip Tip
In order for the system to recognize the programming language type of the snippet, place an underscore followed by the language type at the end of the snippet name (i.e. **"front_css"** or **"library_js"**). Without this naming syntax, the Template Builder assumes the snippet is HTML by default.
:::

::: tip Tip
All elements of the Template Builder use Liquid as a templating engine.

For more information on what Liquid is and how to get the most out of it, check out the [Liquid Markup](/en/platform/channels/liquid-markup.html) page.
:::

In the work area, under the tabs, you will find a bar with useful elements:

<img src="/assets/img/channels/template_builder/bar-templates.jpg" style="border: 1px solid #EEEEEE" width="700">

**Asset manager**: Opens a modal that lists all account files and provides filtering and search capabilities. Clicking on the image preview or file name opens an editor where you can resize/crop the image and change its attributes, such as the title or alternate text. Selecting the copy icon provides you with a URL you can paste and you can click on the "Upload files" tab to upload files.

::: tip Tip
For more information on the functionality of the Asset Manager, go to the [Asset Manager](/docs/content/asset-manager.html).
:::

**Shortcuts helper**: Opens a small pop-up that displays useful keyboard shortcuts for the Template Builder.

<img src="/assets/img/channels/template_builder/keywords.jpg" width="400">

**Snippets**: Displays a list of custom snippets along with the option to copy the reference code of each snippet to insert them in a template.

<img src="/assets/img/channels/template_builder/snippets.jpg" width="300">

**Changes**: A list of every "Saved" state of a template since it was last published. Click on any of these saved states to change the content of the template you are working on to that particular saved state. If you decide to do so, all your current changes will be lost.

<img src="/assets/img/channels/template_builder/changes.jpg" style="border: 1px solid #EEE" width="300">

::: tip Tip
If you publish a new version of your templates, this list of changes resets and erases all saved states. This is because the new editable version now matches the version you just published. Saving new changes adds new saved states until the next time you publish.
:::

::: tip Tip
Saved states exist for every template. This means that while some templates may have changes, others may not. Selecting a previous saved state of any individual template only affects that template and not any of the other templates.
:::

::: tip Tip
If an earlier version of your templates is restored, you can access the saved states of each template of that restored version. You can learn more about [versioning here](/en/platform/core/key-concepts.html#versioning)
:::

You can reset all templates to their original version by clicking on the secondary action of the top bar "<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12.5 8c-2.65 0-5.05 1-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg> Reset All". If you want these reset changes to show up in the front end, you must publish them.

### Themes

In this view you can see what theme you have installed and a list of all the installed themes on the site.

By clicking on the **Use** button of an installed theme, you replace the content in all your editable themes with the content of the new theme you are using. You can preview these changes using the Template Builder preview mode and then publish them to use the new theme in the published site.

At the top of this view, you can find a few useful actions:

- **Theme Gallery**: This opens a modal with all the themes available to install on the site. You can choose to install the default Modyo themes or the account themes (those you converted to themes from other sites). When you install a theme from the theme gallery, you will change the editable version of your templates to the templates of the theme you just installed.
- **Customize** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M14.6 16.6l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6l-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6l6 6l1.4-1.4z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: Takes you to the Template Builder of the currently installed theme.
- **Convert to theme** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: Creates a copy of the currently installed theme as a global theme in your account. you can select a new name for this copy and use it for other sites in your account.
- **Reset ** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12.5 8c-2.65 0-5.05 1-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: Like the reset action of the template builder, this action restores all editable templates to their original versions.
- **Load templates** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m.12 13.5l3.74 3.74l1.42-1.41l-2.33-2.33l2.33-2.33l-1.42-1.41l-3.74 3.74m11.16 0l-3.74-3.74l-1.42 1.41l2.33 2.33l-2.33 2.33l1.42 1.41l3.74-3.74z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: In some cases, after complex migrations, there may be some unmodified templates that could be lost and you may not see them in the template list of the Template Builder. This action retrieves those templates from the original theme and allows you to recover them.

::: tip Tip
The "Load templates" action does not modify the editable templates that are already in the Template Builder. It only restores those in the Themes Gallery.
:::

::: tip Tip
When you create a theme from a site or channel, that theme becomes available to all other sites in your account. This means you can create a base theme and then use that theme to rapidly build new sites.
:::

## Error views

In the views section, you will find 4 error types available for customization:

* **Disabled**: You will see this error view if the site you are trying to access has been [disabled](/en/platform/channels/sites.html).
* **404**: You will see this view if you enter a site URL that is not defined and if you decide to show 404 errors in the [site restrictions](/en/platform/channels/sites.html#restrictions) instead of redirecting to the home page.
* **Privacy**: You will see this error view if you don't have permission to access the [site](/en/platform/channels/sites.html#restrictions) or one of its [pages](/en/platform/channels/pages.html#privacy).
* **Template**: You will see this error view when the site page you are loading has a liquid syntax error. It is unlikely that you will see this view, since from Modyo 8.1 onwards we have a feature that checks the liquid syntax before you can save and publish changes in the template builder.

## Content views

In order to automatically display [content](/en/platform/content/) on a site, you need to meet certain conditions:

1. Have a space with at least one language that matches the site where you want to automate content and have at least one created Type within that space. Go to [Spaces](/en/platform/content/spaces.html) and [Types](/en/platform/content/types.html) to learn how.
1. Have entries published in the language of the site. Go to [Entries](/en/platform/content/entries.html) and [Location](/en/platform/content/spaces.html#location) to learn more.
1. Create a custom view in the Template Builder.

To create a custom view in the Template Builder, go to the "Views" tab. At bottom of the list, there is a section called **Custom** and a button **+ Add a custom view**. Click this to create a new custom view. You must type a name, select a space and choose a content type for this view to link to.

:::warning Warning
The name of the view is the route (URL) relative to the site with the content you want to show. For this reason, you have to be careful when naming your views.
:::

:::tip Tip
You can freely choose the name of each view, regardless of the space and content type you choose. You have to keep in mind that it is required to have an entry published in this site language in order to see content in these views.
:::

When modifying a custom view, you can use Liquid and the `entry` object. For example: <span v-pre>`{{ entry.published_at | format_date }}`</span>

A basic example of Liquid + HTML code that you can use to get started in these views is:

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

::: tip Tip
To learn more about how to use Liquid, go to [Liquid markup](/platform/channels/liquid-markup.html).
:::

If you want to display the view with the values of the entry you're working on, the following requirements must be met:

1. The view must be created and published. 
1. The URL that is being accessed is of type `site_url/custom_view_name/entry_slug`.
1. The `custom_view_name` is the name of the content view you created.
1. The URL matches the name of the view you just created. 
1. An entry already exists in the language of the site. 
1. The slug of the input is `entry_slug`.

:::tip Tip

To find the form of the URL, in case a custom domain is enabled, you must go to ``Site Configuration > Domains``.

In case it is not enabled, the URL will be in the form `account_url/site_host`.
:::

## Custom Layouts
Modyo has three default layouts:
* **Home**: Used exclusively on the home page of the site.
* **Base**: All pages except the home page use this default layout.
* **Error**: The error views use this clean layout (404, 401)

You can create new Layouts from the template builder, by clicking on "Add Layout" in the "Views" tab, which will allow you to define a new base structure to use on the pages.

You can use as a base, this code that contains everything you need to make your pages use all the necessary elements of the site, such as the head, header, footer, service worker and the Google Tag Manager configuration, but keep in mind that you can modify it as much as you want:

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

After you have created your new layout, you can go to the edit view of the pages and change from the properties tab the layout you are using.

## CSS and JavaScript

It is possible to create custom CSS and JavaScript templates by clicking the **+ Add Style Sheet** and **+ Add JavaScript** buttons, respectively, at the end of the Views tab.

To include any of these templates, there are different Liquid filters available: `asset_url` to generate the template URL, and `stylesheet_tag` and `script_tag` to generate the corresponding tags, e.g. 

```html
<head>
  {{ 'my-css' | asset_url: 'css' }}
  {{ 'my-css' | asset_url: 'css' | stylesheet_tag }}
  {{ 'my-js' | asset_url: 'js' | script_tag }}
</head>
```

For details and parameters supported by these filters, go to [Liquid Filters](/es/platform/channels/liquid-markup.html #filtros).

## SEO

SEO [(Search Engine Optimization)](/es/platform/channels/sites.html #seo) is one of the most important topics of the site and content. 

In Modyo there is a way to control how search engines read your site and content, adding meta tags dynamically depending on the attributes you add to your pages and content.

You can add this code snippet to the Template Builder, and then call this snippet from the head of your site:

```html
<!-- Site SEO -->
<meta name="keywords" content="{{ site.keywords }}" />
<meta name="author" content="{{ site.name }}" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
{% if page %}
<!--Layouts SEO -->
{{ page.meta_tags }}
<meta name="description" content="{{ page.excerpt }}" />
<meta property="og:title" content="{{ page.title }}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="{{ page.url }}" />
<meta property="og:image" content="{{ site.logo | asset_url : 'original' }}" />
<meta property="og:site_name" content="{{ site.name }}" />
<meta property="og:description" content="{{ page.excerpt }}" />
{% endif %} 
{% if entry %}
<!-- Content SEO -->
<meta name="description" content="{{ entry.excerpt }}" />
<meta property="og:title" content="{{ entry.title }}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="{{site.url}}/{{entry.type_uid}}/{{entry.slug}}" />
<meta property="og:image" content="{{ entry.covers.first | asset_url : 'original' }} "/>
<meta property="og:site_name" content="{{ site.name }}" />
<meta property="og:description" content="{{ entry.excerpt }}" />
{% endif %} 
{% unless page or entry %}
<!-- Default SEO -->
<meta name="description" content="{{ site.description }}" />
<meta property="og:title" content="{{ site.name }}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="{{ request.url }}" />
<meta property="og:image" content="{{ site.logo | asset_url : 'original' }}" />
<meta property="og:site_name" content="{{ site.name }}" />
<meta property="og:description" content="{{ site.description }}" />
{% endunless %}
<!-- END SEO <-->
```

This snippet differs when you are using a custom page, some of the default Modyo pages, or content views, so by making use of the attributes of each element, you can define a good SEO base for all the URLs of your site.

If you require it, you can further customize this snippet, defining which goals you want to appear for specific URLs or types. 

For example, in the content section, you can use:

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

In this case, the types `posts` and `place` share the attributes _title_, _excerpt_, and _covers_, and differ in the _locations_ object. In addition, it defines a different document type for each.

## Integrations

### Handling private session using OpenID Connect (OIDC)

The recommended method for interacting with a private API using the Modyo session with an OIDC integration consists basically of two steps:**make the private site** and **enable account-level integration**.

#### Make the site private

1. Log in to the account where you want to create the private site.
1. Click on create a new site.
1. Assign a name to the new site and select the base theme.
1. In the `Settings > Site` section, under the**Restrictions** tab, select **Private**. Also activate**Show home to public visits** to be able to redirect users without session.

#### Enable account-level integration (for all sites)

1. Go to the account, **Customers** and from there to the **Settings** section and then the**Integration** tab
1. Select OpenID Connect integration and select the**Enable OpenID Connect** check box
1. Fill in the**Service Name, Client ID, Secret, and Issuer** data and click on**Launch Discovery Service**
1. Check the fields you need (Enable refresh token, Enable remote logout, Enable token revocation, Enable claims synchronization)
1. Associate vendor fields with custom fields you have in Modyo [OpenID Connect 1.0 specification for Standard Claims](http://openid.net/specs/openid-connect-core-1_0.html#StandardClaims)

### Using Axios to do integration

If you want to use a library like `axios` to perform an integration from Modyo, a pattern that is convenient is to create 3 snippets that take care of the most basic aspects of an integration.

The tasks you need to cover with snippets are:

1. An interceptor of requests to include a token.
1. A session handler.
1. A modal window that will inform the user that their session will expire.

### Intercept requests to include a token

```js
//global variable that will represent an instance of axios that will be responsible for making requests for services
var axios_api = axios.create ();
 axios_api.defaults.baseURL = 'API URL';
}
//global variable that will represent an axios instance that will be responsible for making modyo api requests
var axios_modyo=axios.create ({
 BaseUrl: Window.baseUrl + '/api/admin',
});
//global variable that will represent an axios instance that will be responsible for making requests for site content json
var axios_modyo_json=axios.create ({
 BaseUrl: {{site.url}},
});
//global variable that will represent an axios instance that will be responsible for making requests related to authentication
var axios_auth = axios.create ();
axios_auth.defaults.baseURL = window.baseUrl + '/auth/openidc';
//function that generates activity on the site with each authentication request
var resetIdleTime = function (request) {
 SessionManager.resetidleTime ();
 return request;
}
//function that adds the token to each request
var appendTokentoRequest=Function (request) {
 return axios_auth.get ('/access_token') .then (function (response) {
 request.headers.authorization='bearer '+ response.data.access_token;
 return request;
 }
}
//function that handles errors for each of the requests and sends them to a higher instance
var errorRequest=Function (error) {
 throw error;
}
axios_auth.interceptors.request.use (ReseTidleTime);
axios_api.interceptors.request.use (AppendTokentoRequest, ErrorRequest);
```

### A session handler

```js
// is in charge of raising the warning modal that will warn of the upcoming session closure, this variable will return a promise that will be effective if the Keep Session button is clicked and that will launch a reject promise in the case of selecting the button with the refusal to continue.
var modalConfirm = function() {
return new Promise(function(resolve, reject) {
$("#session-modal").modal({
backdrop: "static",
keyboard: false,
show: true
});
$("#session-modal-yes").on("click", function() {
resolve("keep session");
$("#session-modal").modal("hide");
});
$("#session-modal-no").on("click", function() {
reject("destroy session");
$("#session-modal").modal("hide");
});
});
};
// will be the one in charge of starting the time tracking to raise this modal and manage the session on the Front side. The following explains each of the properties and methods of this object that manages the session
var sessionManager = {
// property that defines the time from the last activity to the end of the session in seconds (not the refresh time of the token but the end of the session, it is recommended that this is one minute less than that declared by the Open ID Connect provider to have a little slack with the session and the closing of the same is 100% valid)
timeToEndSessionInSeconds: 900,
// property where is defined the time to raise the inactivity modal since the last action or request on the page.
timeToRaiseWarningModalInSeconds: 720,
// property that stores the timestamp of the last activity time of the sessionManager.
lastActionTimeInThisWindow: new Date().getTime(),
// function that converts seconds to milliseconds
secondsToMillisecs: function(minutes) {
return minutes * 1000;
},
// property to store the session event review interval id.
intevalId:null,
// function that determines whether the application is being accessed from the modyoShell or not
isModyoAppShell: function() {
return /; Modyo_App_Shell/.test(navigator.userAgent);
},
// method that must be executed on each page load to start the process of session events to track recommended to make this invocation sessionManager.init() in the head of the layout to start tracking the session (in some cases it is defined that developers do not launch this invocation in that case the test API to connect must also have this if and so you get axios_api to serve for the develop and development environment one with session and the other without session manager)
init: function() {
this.resetIdleTime();
this.intevalId=this.interval();
},
// resets the timeout or creates a new activity on the site
resetIdleTime: function() {
this.lastActionTimeInThisWindow = new Date().getTime();
var sessionEndTime =
this.lastActionTimeInThisWindow +
this.secondsToMillisecs(this.timeToEndSessionInSeconds);
localStorage.setItem("timeToEndSession", sessionEndTime);
var raiseWarningModalTime =
this.lastActionTimeInThisWindow +
this.secondsToMilisecs(this.timeToRaiseWarningModalInSeconds);
localStorage.setItem("timeToRaiseWarningModal", raiseWarningModalTime);
},
// method that starts activity every second js that handles session events.
interval: function() {
var self = this;
return setInterval(this.checkSessionEvents, 1000, self);
},
// method that raises the warning time modal.
raiseModal: function() {
return modalConfirm();
},
// method that logs out and clears storage
logout: function() {
localStorage.clear();
sessionStorage.clear();
clearInterval(this.intevalId);
var withRedirect =
arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
if (withRedirect) {
window.location.href =
"{{site.account_url}}/logout?multi=true&redirect_to=https://chile.larrainvial.com";
} else {
window.location.href = "{{site.account_url}}/logout?site={{site.uuid}}";
}
},
// method that checks the session events to determine if it is time to close the session or keep it after displaying the modal.

Translated with www.DeepL.com/Translator (free version)
  checkSessionEvents: function(self) {
    var sessionEndTime = localStorage.getItem("timeToEndSession");
    var raiseWarningModalTime = localStorage.getItem("timeToRaiseWarningModal");
    var diffInSecsToShow =
      Math.round((sessionEndTime - new Date().getTime()) / 1000) > 0
        ? Math.round((sessionEndTime - new Date().getTime()) / 1000)
        : 0;
    var expirationTimeHtml = document.querySelector("#expiration-time");
    var timeNow = new Date().getTime();
    expirationTimeHtml.innerText = diffInSecsToShow;
    if (sessionEndTime - timeNow < 0) {
      self.logout();
    } else if (raiseWarningModalTime - timeNow < 0) {
      self
        .raiseModal()
        .then(function(response) {
          axios_auth.get("/access_token");
        })
        .catch(function(err) {
          self.logout();
        });
    } else {
      if (($("#session-modal").data("bs.modal") || {})._isShown) {
        $("#session-modal").modal("hide");
      }
    }
  }
};
```

### A modal window that inform the user that their session will expire

This is the modal to activate in the previous step with bootstrap for the handling of the warning modal.

```html
<div
 id="session-modal"
 class="modal fade"
 tabindex=" -1"
 role="dialog"
 aria-labelledby="session-modal-label"
>
 <div class="modal-dialog" role="document"> 
 <div class="modal-content"> 
 <div class="modal-header"> 
 <h5 class="modal-title" id="session-modal-label"> 
 Your session will expire
 </h5> 
 </div> 
 <div class="modal-body text-center"> 
 <p> 
 Your session will expire in <span id="expiration-time"> </span> seconds.
 </p> 
 <p> Want to keep your session? </p> 
 </div> 
 <div class="modal-footer"> 
 <button id="session-modal-yes" type="button" class="btn btn-primary"> 
 If
 </button> 
 <button
 id="session-modal-no"
 type="button"
 class="btn btn-second"
 data-dismiss="modal"
 >
 Not
 </button> 
 </div> 
 </div> 
 </div> 
 </div> 
```
