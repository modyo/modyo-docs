---
search: true
---

# Templates

One of the most important aspects when creating the site is the base architecture and appearance of the site. In Template Builder, you'll be able to modify the base templates, along with the global JavaScript and CSS to use on your pages and change their structure as required.

Once you have selected a theme for a new site, you can access each template in the Template Builder and make any change you need.

Once inside the Template Builder, the main menu is hidden to optimize the workspace. In the top bar, on the left, you can find the section name and the current publication status.

![Template Builder](/assets/img/channels/template_builder/template-builder.jpg)

- **Published**: When a published version already exists and its editable version is the same.
- **Pending Changes**: When there is a published version, but your editable version has changes that are not published yet.
- **In review**: This status appears when [Team review](/en/platform/core/key-concepts.html) is enabled and the editable version of your templates has changes that have been submitted for review.
- **Approved**: When [Team Review](/en/platform/core/key-concepts.html) is enabled and if the item's review conditions were met. If you're in this state, your templates are ready to be published.

On the bar in the upper-right, you will find the latest publication date and the available actions:

**Preview** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Clicking this icon opens a new tab with the template preview mode, in which you will see how it looks as if they were published, with all the changes you have in your templates.

:::warning Attention
You can preview the changes as a user without a session, or with Modyo a session. For this, it's recommended to log in or log out of Modyo from your site before entering preview mode, because if you log out while in preview mode you might encounter security errors like _x-frame-options_ or _mixed-content_, depending on your site's SSL and custom domain settings.
:::

<img src="/assets/img/channels/template_builder/differences.jpg" style="border: 1px solid #EEEEEE" width="700">

**Differences** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M19 3h-5v2h5v13l-5-6v9h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 15H5l5-6m0-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h5v2h2V1h-2v2z" fill="#626262"/> </svg>: Clicking this icon will take you to the [difference view](/en/platform/channels/sites.html#review-and-joint-publication), in which you can compare changes between multiple versions of your templates. 

By default, you start by comparing the published version to the editable version. Using the version selectors, you can also compare with backup versions.

::: tip Tip
Every time you publish a new version, the version that gets replaced now becomes a backup version. By default, up to 20 backups are saved so that the most recent twenty backups can be compared, restored or used for a rollback. For more information on versioning, check out the [versioning](/en/platform/core/key-concepts.html#versioning) section .
:::

**Search in templates** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M9 13a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3a3 3 0 0 0-3 3m11 6.59V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.76.83-2.76.83a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5c0 1-.31 1.96-.83 2.75L20 19.59z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Deploys a sidebar with a text finder that searches all editable templates. 

<img src="/assets/img/channels/template_builder/conversation.jpg" style="border: 1px solid #EEEEEE" width="700">

**Activity/Comments** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29H12m1-6v3.08L16.08 17H21V7H7v10h6M3 15H1V3a2 2 0 0 1 2-2h16v2H3v12m6-6h10v2H9V9m0 4h8v2H9v-2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Deploys a sidebar with the activity history and comments of the templates. 

You can add new comments at the bottom of the sidebar. Next to each activity, you can also click on **see detail** to show the complete information of an activity log.

**More actions** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>:

- **Themes**: This takes you to the Themes Gallery, where you can copy the current theme and use it in the other sites or channels in your account. To learn more, check [Themes](/en/platform/channels/templates.html#themes).
- **Restore All**: You restore all templates to the original value of the theme.

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

You can create new Layouts from the template builder, by clicking on "Add Layout" in the "Views" tab, which will allow you to define a new base structure to use on the pages.

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
* **404**: You will see this view if you enter a site URL that is not defined and if you decide to show 404 errors in the [site restrictions](/en/platform/channels/sites.html#restrictions) instead of redirecting to the home page.
* **Privacy**: You will see this error view if you don't have permission to access the [site](/en/platform/channels/sites.html#restrictions) or one of its [pages](/en/platform/channels/pages.html#privacy).
* **Template**: You'll see this error when the page of the site you're loading has a liquid syntax error. It is unlikely that you will see this view, since from modyo 8.1 onwards we have a functionality that checks the syntax of liquid before you can save and publish changes to the template builder.

## CSS and JavaScript

You can create custom CSS and JavaScript templates by clicking the **+** buttons in the CSS and JavaScript sections respectively at the bottom of the Views tab.

To include any of these templates, different Liquid filters are available: `asset_url` to generate the template URL, and `stylesheet_tag` and `script_tag` to generate the corresponding tags, e.g. 

```html
<head>
  {{ 'my-css' | asset_url: 'css' }}
  {{ 'my-css' | asset_url: 'css' | stylesheet_tag }}
  {{ 'my-js' | asset_url: 'js' | script_tag }}
</head>
```

For more details and the parameters supported by these filters, see [Liquid filters](/en/platform/channels/liquid-markup.html#filters).


## Snippets

Snippets are pieces of code that can be created, modified, and reused. Next to each custom snippet, you'll find an icon (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>) that you can use to copy the snippet's reference path. The copied code looks like this: <span v-pre>`{% snippet "snippet-name"%}`</span>.

You can add custom snippets to the bottom of the platform's snippet list by clicking on the **+** button.

<img src="/assets/img/channels/template_builder/custom-snippet.jpg" style="border: 1px solid #EEEEEE" width="300">

:::tip Tip
In order for the system to recognize the programming language type of the snippet, place an underscore followed by the language type at the end of the snippet name i.e. **"front_css"** or **"library_js"**. Without this naming syntax, the Template Builder assumes the snippet is HTML by default.
:::

:::tip Tip
All elements of the Template Builder use Liquid as a templating engine.

For more information on what Liquid is and how to get the most out of it, see [Liquid Markup](/en/platform/channels/liquid-markup.html) page.
:::

In the work area, under the tabs, you will find a bar with useful elements:

<img src="/assets/img/channels/template_builder/bar-templates.jpg" style="border: 1px solid #EEEEEE" width="700">

**Asset manager**: Opens a modal that lists all account files and provides filtering and search capabilities. Clicking on the image preview or file name opens an editor where you can resize/crop the image and change its attributes, such as the title or alternate text. Selecting the copy icon provides you with a URL you can paste and you can click on the "Upload files" tab to upload files.

:::tip Tip
For more information on the functionality of the Asset Manager, see [Asset Manager](/en/platform/content/asset-manager.html).
:::

**Shortcuts helper**: Opens a small pop-up that displays useful keyboard shortcuts for the Template Builder.

<img src="/assets/img/channels/template_builder/keywords.jpg" width="400">

**Snippets**: Displays a list of custom snippets along with the option to copy the reference code of each snippet to insert them in a template.

<img src="/assets/img/channels/template_builder/snippets.jpg" width="300">

**Changes**: A list of every "Saved" state of a template since it was last published. Click on any of these saved states to change the content of the template you are working on to that particular saved state. If you decide to do so, all your current changes will be lost.

<img src="/assets/img/channels/template_builder/changes.jpg" style="border: 1px solid #EEE" width="300">

:::tip Tip
If you publish a version, you can see that the changelog disappears, that is because the new editable version does not have any changes.
:::

:::tip Tip
Sub-versions are for each template, so for some you may notice that there are changes and for others you won't see the change selector. Likewise, if you go back to a previous sub-version of a template, you won't affect the rest of the templates.
:::

::: tip Tip
If an earlier version of your templates is restored, you can access the saved states of each template of that restored version. You can learn more about [versioning here](/en/platform/core/key-concepts.html#versioning)
:::

You can reset all templates to their original version by clicking on the secondary action of the top bar "<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12.5 8c-2.65 0-5.05 1-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg> Reset All". If you want these reset changes to show up in the front end, you must publish them.

## Themes

In this view you can see what theme you have installed and a list of all the installed themes on the site.

By clicking on the **Use** button of an installed theme, you replace the content in all your editable themes with the content of the new theme you are using. You can preview these changes using the Template Builder preview mode and then publish them to use the new theme in the published site.

At the top of this view, you can find a few useful actions:

- **Theme Gallery**: This opens a modal with all the themes available to install on the site. You can choose to install the default Modyo themes or the account themes (those you converted to themes from other sites). When you install a theme from the theme gallery, you will change the editable version of your templates to the templates of the theme you just installed.
- **Customize** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M14.6 16.6l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6l-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6l6 6l1.4-1.4z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: Takes you to the Template Builder of the currently installed theme.
- **Convert to theme** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: Creates a copy of the currently installed theme as a global theme in your account. you can select a new name for this copy and use it for other sites in your account.
- **Reset ** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12.5 8c-2.65 0-5.05 1-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Like the reset action of the template builder, this action restores all editable templates to their original versions.
- **Load templates** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m.12 13.5l3.74 3.74l1.42-1.41l-2.33-2.33l2.33-2.33l-1.42-1.41l-3.74 3.74m11.16 0l-3.74-3.74l-1.42 1.41l2.33 2.33l-2.33 2.33l1.42 1.41l3.74-3.74z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: In some cases, after complex migrations, there may be some unmodified templates that could be lost and you may not see them in the template list of the Template Builder. This action retrieves those templates from the original theme and allows you to recover them.

:::tip Tip
The "Load templates" action does not modify the editable templates that are already in the Template Builder. It only restores those in the Themes Gallery.
:::

:::tip Tip
When you create a theme from a site or channel, that theme becomes available to all other sites in your account. This means you can create a base theme and then use that theme to rapidly build new sites.
:::

## SEO

SEO [(Search Engine Optimization)](/en/platform/channels/sites.html#seo) is one of the most important topics of your site and content.

In Modyo, we have a way to control the way search engines read your site and content, dynamically adding meta tags depending on the attributes you add to your pages and content.

You can add this code snippet to the Template Builder and then call this snippet from the head of your site:

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

This snippet is different when you're using a custom page, one of Modyo's default pages, or content pages, so by using the attributes of each element, you can define a good SEO base for all your site's URLs.

If you require it, you can customize this snippet, defining what you want to appear for specific URLs or types. 

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

In this example, the `posts` and `place` types share the _title_, _excerpt_ and _covers_ attributes, but the place types contain _location_ attributes. In addition, we would need to define a different custom view in our site for each of these separate types.

## Integrations

### Private session management using OpenID Connect (OIDC)

The recommended method for interacting with a private API using the Modyo session with an OIDC integration consists of two steps: **make the site private** and **enable account-level integration**.

#### Make the site private

1. Log in to the account where you want to create a private site.
1. Click on create a new site.
1. Assign a name to the new site and select the base theme.
1. In the `Site > settings` section, under the **Restrictions** tab, we select **private** under the Privacy level. This also activates **Show home page to public visitors** in order to redirect users without a session.

#### Enable account-level integration (for all sites)

1. In your account, go to **Customers** and from there to the **Customer settings** section and a the top of the view, click the drop down and select the **Integration** tab.
1. Select the OpenID Connect integration and check the box for **Enable OpenID Connect**
1. Fill in the data for **Service Name, Client ID, Secret, and Issuer** and click **Launch Discovery Service**
1. Check the fields you need
    * Enable refresh token
    * Enable remote logoff
    * Enable token revocation
    * Enable claim synchronization
1. Associate the provider fields with the custom fields you have in Modyo [OpenID Connect 1.0 specification for Standard Claims](http://openid.net/specs/openid-connect-core-1_0.html#StandardClaims)

### Using Axios to do the integration

If you want to use a library such as `axios` to perform an integration from Modyo, a convenient pattern is to create 3 snippets that take care of the most basic aspects of an integration.

The tasks you must cover with these snippets are:

1. A request interceptor to include a token.
1. A session controller.
1. A modal window that informs the user that their session will expire.

### Intercept requests to include a token

```js
// global variable that represents an axios instance that will take care of the service's petitions
var axios_api = axios.create();
axios_api.defaults.baseURL = 'URL DE API';

// global variable that represents an axios instance that will take care of the petitions of Modyo's API
var axios_modyo=axios.create({
  baseURL: window.baseUrl + '/api/admin',
});
// global variable that represents an axios instance that will take care of the petitions of the site's content json
var axios_modyo_json=axios.create({
  baseURL: {{site.url}},
});
// global variable that represents an axios instance that will take care of the petitions regarding authentication
var axios_auth = axios.create();
axios_auth.defaults.baseURL = window.baseUrl + '/auth/openidc';
// function that generates activity in the site with each authentication petition
var resetIdleTime = function(request){
  sessionManager.resetIdleTime();
    return request;
}
// function that adds the token to each request
var appendTokenToRequest = function (request) {
    return axios_auth.get('/access_token').then(function(response){
        request.headers.authorization='Bearer '+ response.data.access_token;
        return request;
    }
}
// function that manages the errors from each petition and calls a higher-level instance
var errorRequest=function(error){
  throw error;
}
axios_auth.interceptors.request.use(resetIdleTime);
axios_api.interceptors.request.use(appendTokenToRequest ,errorRequest);
```

### A session controller

``` js
//will be in charge of raising the warning modal that will warn the session closing, this variable will return a promise that will be effective if you click the Keep Session button and will issue a reject promise in the case of selecting the button with the refusal to continue
var modalConfirm=function () {
  return new Promise (function (resolve, reject) {
    $ ("# session-modal"). modal ({
      backdrop: "static",
      keyboard: false,
      show: true
    });
    $ ("# session-modal-yes"). on ("click", function () {
      resolve ("keep session");
      $ ("# session-modal"). modal ("hide");
    });
    $ ("# session-modal-no"). on ("click", function () {
      reject ("destroy session");
      $ ("# session-modal"). modal ("hide");
    });
  });
};
//this will be the one in charge of starting the time tracking to lift this modal and handle the Front side of the session, then we will explain each of the properties and methods of this object that handles the session
var sessionManager={
  //property that defines the time from the last activity until the end of the session in seconds (note not the refresh time of the token but the end of the session, it is recommended that this be one minute shorter than the one declared by the provider of the OpenID Connect to have a little slack with the session and closing it is guaranteed)
  timeToEndSessionInSeconds: 900,
  //property where the lifting time of the inactivity modal is defined since the last action or request on the page
  timeToRaiseWarningModalInSeconds: 720,
  //property that saves the timestamp of the last moment of activity of the sessionManager
  lastActionTimeInThisWindow: new Date (). getTime (),
  //function that converts seconds to milliseconds
  secondsToMilisecs: function (minutes) {
    return minutes * 1000;
  },
  //property to store the session id interval of session review
  intevalId: null,
  //function that determines if the application is being accessed from modyoShell or not
  isModyoAppShell: function () {
    return/; Modyo_App_Shell/.test (navigator.userAgent);
  },
  //method that must be executed on each page load to begin the process of session events to follow up. It's recommended to do this invocation sessionManager.init() in the head of the layout to begin tracking the session (in the case that developers do not launch this invocation, the test api to connect us must also have this and so we will achieve that axios_api serves for the develop and development environment, one with session and the other without session manager)
  init: function () {
    this.resetIdleTime ();
    this.intevalId=this.interval ();
  },
  //restart the timeout or create a new activity on the site
  resetIdleTime: function () {
    this.lastActionTimeInThisWindow=new Date (). getTime ();
    var sessionEndTime =
      this.lastActionTimeInThisWindow +
      this.secondsToMilisecs (this.timeToEndSessionInSeconds);
    localStorage.setItem ("timeToEndSession", sessionEndTime);
    var raiseWarningModalTime =
      this.lastActionTimeInThisWindow +
      this.secondsToMilisecs (this.timeToRaiseWarningModalInSeconds);
    localStorage.setItem ("timeToRaiseWarningModal", raiseWarningModalTime);
  },
  //method that initiates the activity every second js that will handle the session events
  interval: function () {
    var self=this;
    return setInterval (this.checkSessionEvents, 1000, self);
  },
  //method that raises the warning time modal
  raiseModal: function () {
    return modalConfirm ();
  },
  //logout method and clean storage
  logout: function () {
    localStorage.clear ();
    sessionStorage.clear ();
    clearInterval (this.intevalId);
    var withRedirect =
      arguments.length> 0 && arguments [0]! == undefined? arguments [0]: false;
    if (withRedirect) {
      window.location.href =
        "{{site.account_url}}/logout?multi=true&redirect_to=https://chile.larrainvial.com";
    } else {
      window.location.href="{{site.account_url}}/logout? site={{site.uuid}}";
    }
  },
  //method that reviews session events to determine if it is time to close it or keep it after showing the modal
  checkSessionEvents: function (self) {
    var sessionEndTime=localStorage.getItem ("timeToEndSession");
    var raiseWarningModalTime=localStorage.getItem ("timeToRaiseWarningModal");
    var diffInSecsToShow =
      Math.round ((sessionEndTime - new Date (). GetTime ())/1000)> 0
        ? Math.round ((sessionEndTime - new Date (). GetTime ())/1000)
        : 0;
    var expirationTimeHtml=document.querySelector ("# expiration-time");
    var timeNow=new Date (). getTime ();
    expirationTimeHtml.innerText=diffInSecsToShow;
    if (sessionEndTime - timeNow <0) {
      self.logout ();
    } else if (raiseWarningModalTime - timeNow <0) {
      self
        .raiseModal ()
        .then (function (response) {
          axios_auth.get ("/access_token");
        })
        .catch (function (err) {
          self.logout ();
        });
    } else {
      if (($ ("# session-modal"). data ("bs.modal") || {}) ._ isShown) {
        $ ("# session-modal"). modal ("hide");
      }
    }
  }
};
```

### A modal window that informs the user that their session will expire

This should be the modal to activate in the previous step with bootstrap for handling the warning modal.

``` html
<div
  id="session-modal"
  class="modal fade"
  tabindex="- 1"
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
        <p> Do you want to keep your session? </p>
      </div>
      <div class="modal-footer">
        <button id="session-modal-yes" type="button" class="btn btn-primary">
          Yes
        </button>
        <button
          id="session-modal-no"
          type="button"
          class="btn btn-secondary"
          data-dismiss="modal"
        >
          No
        </button>
      </div>
    </div>
  </div>
</div>
```
