---
search: true
translated: true
---

# Templates

One of the most important aspects of creating your site is its base architecture and appearance. In Template Builder, you can modify the base templates, along with the global JavaScript and CSS used in your pages. You can also update how they are structured as required.

When creating a site, once you select a theme, the different templates can be accessed from the Template Builder where you can updated their code as needed.

Once inside the Template Builder, in the top bar on the left, can see the section name and a badge indicating its current status:

- **Published**: This status means that there is an active, published version of the templates, and that the editable version you are working on now matches the state of the published version. The moment you save any changes to your templates, this status will also change.
- **Pending changes**: This status indicates that if there is an active published version, then there are "pending changes" to be published from your editable version here in the Template Builder.
- **In review**: This status appears when [Team review](/en/platform/platform/team-review.html) is enabled and the editable version of your templates has changes that have been submitted for review.
- **Approved**: This status appears when [Team review](/en/platform/platform/team-review.html) is enabled and if the review conditions were met. If the templates have this status, they are ready to be published.

![Template builder](/assets/img/channels/template_builder/template-builder.jpg)

In the upper right, you will find the latest publication date and the available actions:

**Preview** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Clicking on this icon will open a new tab with the Templates preview mode. This mode allows you to review your site or digital channel as if all current changes in your templates were currently live.

<img src="/assets/img/channels/template_builder/differences.jpg" style="border: 1px solid #EEEEEE" width="700">

**Differences** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 3h-5v2h5v13l-5-6v9h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 15H5l5-6m0-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h5v2h2V1h-2v2z" fill="#626262"/></svg>: Clicking this icon opens a modal to compare the differences between the active published version of your templates, and the editable version you are currently working on. You can use the version selectors to compare either the editable or active published versions to older back up versions as well.

::: tip Tip
Every time you publish a new version, the version that gets replaced now becomes a backup version. By default, up to 20 backups are saved, so that the most recent twenty backups can be compared, restored and rollback. For more information on versioning, check out the [versioning](/en/platform/platform/team-review.html#versioning) section .
:::

**Search in templates** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M9 13a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3a3 3 0 0 0-3 3m11 6.59V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.76.83-2.76.83a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5c0 1-.31 1.96-.83 2.75L20 19.59z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Displays a sidebar with a searchbox. You can search any text inside the editable version of the templates.

<img src="/assets/img/channels/template_builder/conversation.jpg" style="border: 1px solid #EEEEEE" width="700">

**Show activity** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 23a1 1 0 01-1-1v-3H7a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-4.1l-3.7 3.71a1 1 0 01-.7.29H12zm1-6v3.08L16.08 17H21V7H7v10h6zM3 15H1V3a2 2 0 012-2h16v2H3v12zm6-6h10v2H9V9zm0 4h8v2H9v-2z" fill="#626262"/></svg>: Displays a sidebar with activity history and template comments. At the bottom of the sidebar, you can submit comments. Next to each activity, click on "see detail" to show the complete information of an activity log.

**More actions** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>:

- **Themes**: Takes you to the Themes Gallery, where you can copy the current theme to use in the other sites or channels in your account. To learn more, check [Themes](/en/platform/channels/templates.html#themes).
- **Reset all**: Resets all templates to their original states in the theme.

**Primary actions**

- **Save**: Saves current changes to all templates.
- **Send to review**: Changes the template status to "In review". You can continue making changes, but each change sends a notification to all assigned reviewers via email.
- **Reject**: Returns the templates status to the "Pending changes", notifying reviewers that the item was rejected.
- **Publish**: Once the templates are approved, they may be published.
- **Force Publish**: Admin team members have the option to forcibly publish changes made in the templates, circumventing the established reviewal process.

In the main work area, there are two sections:

- The central work area.
- The template selection area.

Each template that you click on in the selection area opens in the central area, very similar to an IDE. If you open multiple templates, they will remain open as tabs in the central work area.

The template selection on the right has two tabs: Views and Snippets.

Views are base, full page templates and required for channels in Modyo to function. They help build the direct structure of your site's URLs.

### Snippets

Snippets are pieces of code that can be created, modified, and reused. Next to each custom snippet, you'll find an icon (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>) to copy the snippet's reference path. The copied code looks like this: <span v-pre> `{% snippet "snippet-name" %}` </span>.

You can add custom snippets at the bottom of the snippets tab, by clicking on the **"+ Add a snippet"** button.

<img src="/assets/img/channels/template_builder/custom-snippet.jpg" style="border: 1px solid #EEEEEE" width="300">

::: tip Tip
In order for the system to recognize the programming language type of the snippet, place an underscore "_" and language type at the end of the snippet name, ie **"front_css"** or **"library_js"**. Without this naming syntax, the Template Builder assumes the snippet is HTML by default.
:::

::: tip Tip
All elements of the Template Builder use Liquid as a templating engine.

For more information on what Liquid is and how to get the most out of it, check out the [Liquid Markup](/en/platform/channels/liquid-markup.html) page.
:::

In the work area, under the tabs, you will find a bar with useful elements:

<img src="/assets/img/channels/template_builder/bar-templates.jpg" style="border: 1px solid #EEEEEE" width="700">

**Asset manager**: Opens a modal that lists all account files and provides filters and searching. Clicking the image preview or file name opens an editor where you can resize/crop the image, and change attributes such as the title or alternate text. Selecting the copy icon provides you with a URL you can paste, and you can select the "Upload files" tab to upload files.

::: tip Tip
For more information on the functionality of the Asset Manager, go to the [Asset Manager](/en/docs/content/asset-manager.html).
:::

**Shortcuts helper**: A small pop-up that displays useful keyboard shortcuts for the Template Builder.

<img src="/assets/img/channels/template_builder/keywords.jpg" width="400">

**Snippets**: Displays a list of custom snippets, along with the option to copy reference code to insert them in a template.

<img src="/assets/img/channels/template_builder/snippets.jpg" width="300">

**Changes**: A list of every "Save" state of a template since it was last published. Click on any of these save states to change the content of the template you are working on to that particular save state. If doing so, all your current changes will be lost.

<img src="/assets/img/channels/template_builder/changes.jpg" style="border: 1px solid #EEE" width="300">

::: tip Tip
If you publish a new version of your templates, this list of changes resets and erases all save states. This is because the new editable version now matches the version you just published. Saving new changes adds new save states until the next time you publish.
:::

::: tip Tip
Save states exist for every template. This means that while some templates may have changes, others may not. So this means that selecting a previous save state of any individual template only affects that one, and does not affect any other template.
:::

::: tip Tip
If an earlier version of your templates is restored, you can access the save states of each template of that restored version. You can learn more about [versioning here](/en/platform/platform/team-review.html#versioning)
:::

You can reset all templates to their original version by clicking on the secondary action of the top bar "<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12.5 8c-2.65 0-5.05 1-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>  Reset all". If you want these reset changes to take effect in the front end, you must publish them.

### Themes

In this view you can see what theme you have installed, and then the list of all the themes available for the site. By clicking on the **Install** button of a theme, you replace all your editable themes with the new theme content you are installing. You can preview these changes using the Templates preview mode, and then publish them to take effect in the front end of your site.

At the top of this view are a few actions:

- **Customize** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M14.6 16.6l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6l-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6l6 6l1.4-1.4z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Takes you to the template builder of the currently installed theme.
- **Copy** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Creates a copy of the currently installed theme. You need to provide a name for this new copy.
- **Reset** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12.5 8c-2.65 0-5.05 1-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg> : Like the reset action of the template builder, this action restores all editable templates to their original versions.
- **Load templates** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m.12 13.5l3.74 3.74l1.42-1.41l-2.33-2.33l2.33-2.33l-1.42-1.41l-3.74 3.74m11.16 0l-3.74-3.74l-1.42 1.41l2.33 2.33l-2.33 2.33l1.42 1.41l3.74-3.74z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: In some cases, after complex migrations, there may be some unmodified templates that could be lost and you may not see them in the template list in the template builder. This action retrieves those templates from the original theme and allows you to recover them.

::: tip Tip
The "Load templates" action does not modify the editable templates that are already in the template builder. It only restores those in the Themes Gallery.
:::

::: tip Tip
When you create or copy a theme within a site or channel, that theme becomes available on all other sites in your account. This means you can create a base theme, and then use that theme to rapidly build new sites.
:::

## Automated Content Views

In order to automatically display [content](/en/platform/content/) on a site, you need to meet certain conditions:

1. Have a space with at least one language that matches the site where you want to automate content, and have at least one created Type within that space. Go to [Spaces](/en/platform/content/spaces.html) and [Types](/en/platform/content/types.html) to learn how.
1. Have entries published in the language of the site. Go to [Entries](/en/platform/content/entries.html) and [Location](/en/platform/content/spaces.html#location) to learn more.
1. Create a custom view in the Template Builder.

To create a custom view in the Template Builder, go to the "Views" tab. At bottom of the list, there is a section called "Custom" and a button **+ Add a custom view**. Click this to create a new custom view. You must type a name, select a space and choose a content type for this view to link to. 

:::warning Warning
The name of the view it is the site relative URL for the content type you chose.
:::

:::tip Tip
You can use whatever name for this views that suits your site, regardless of the space and content type you choose. You need to have in mind that it is required to have an entry published in this site language in order to see the content in this view.
:::

When modifying this custom view, you can use Liquid, and the `entry` object, for example: <span v-pre>` {{entry.published_at | format_date}} `</span>

A basic example of Liquid + HTML code that you can use to get started in these views is:

``` html
<div>
  <h1 class="title"> {{entry.title}} </h1>
  <time> {{entry.published_at | format_date}} </time>
  <span class="url"
    > <a href="{{site.url}}/{{entry.type_uid}}/{{entry.slug}}"
      > {{site.url}}/{{entry.type_uid}}/{{entry.slug}} </a
    > </span
  >
</div>

<div>
  <div class="description">
    {{entry.description}}
  </div>
</div>
```

The example above assumes that a couple of field names, such as "title" and "description", exist in the type you created. Modify these as necessary.

::: tip Tip
To learn more about how to use Liquid, go to [Liquid markup](/en/platform/channels/liquid-markup.html).
:::

With this view created and published, the URL endpoint exists at `site_url/type_uid/entry_slug`, where `type_uid` is the UID of the type you want to display and matches the name of the view you just created. The `entry_slug`, matches the character string in the "Slug" field of the displayed entry. An example relative URL path would be `my-site/posts/my-first-post-in-Modyo`.

## SEO

SEO [(Search Engine Optimization)](/en/platform/channels/sites.html#seo) is one of the most important topics of your site and content. In Modyo, we have a way to control the way search engines read your site and content, dynamically adding meta tags depending on the attributes you add to your pages and content.

We recommend adding this code snippet to the Template Builder, and then calling this snippet from the `<head>` of your site:

``` html
<! - Site SEO ->
<meta name="keywords" content="{{site.keywords}}"/>
<meta name="author" content="{{site.name}}"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
{% if current_layout_page%}
<! - SEO Layouts ->
<meta name="description" content="{{current_layout_page.excerpt}}"/>
<meta property="og:title" content="{{current_layout_page.title}}"/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="{{current_layout_page.url}}"/>
<meta property="og:image" content="{{site.logo | asset_url: 'original'}}"/>
<meta property="og:site_name" content="{{site.name}}"/>
<meta property="og:description" content="{{current_layout_page.excerpt}}"/>
{% endif%} {% if entry%}
<! - Content SEO ->
<meta name="description" content="{{entry.excerpt}}"/>
<meta property="og:title" content="{{entry.title}}"/>
<meta property="og:type" content="article"/>
<goal
  property="og:url"
  content="{{site.url}}/{{entry.type_uid}}/{{entry.slug}}"
/>
<goal
  property="og:image"
  content="{{entry.covers.first | asset_url: 'original'}}"
/>
<meta property="og:site_name" content="{{site.name}}"/>
<meta property="og:description" content="{{entry.excerpt}}"/>
{% endif%} {% unless current_layout_page or entry%}
<! - Default SEO ->
<meta name="description" content="{{site.description}}"/>
<meta property="og:title" content="{{site.name}}"/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="{{request.url}}"/>
<meta property="og:image" content="{{site.logo | asset_url: 'original'}}"/>
<meta property="og:site_name" content="{{site.name}}"/>
<meta property="og:description" content="{{site.description}}"/>
{% endunless%}
<! - END SEO <-->
```

This snippet renders differently depending on whether the endpoint is a custom page, one of the Modyo default pages, or a custom content view. By taking advantage of the fields and attributes of each element in context, and using Liquid's control flow, you can define a robust base set of SEO automation across every URL of your site.

If you require, you can further customize this snippet, defining each goal or outcome based on specific URLs or for specific types. For example, in the content section, you can use:

``` html
... {% if entry%}
<! - Content SEO ->
<meta name="description" content="{{entry.excerpt}}"/>
<meta property="og:title" content="{{entry.title}}"/>
<goal
  property="og:url"
  content="{{site.url}}/{{entry.type_uid}}/{{entry.slug}}"
/>
<goal
  property="og:image"
  content="{{entry.covers.first | asset_url: 'original'}}"
/>
<meta property="og:site_name" content="{{site.name}}"/>
<meta property="og:description" content="{{entry.excerpt}}"/>
{% if entry.type_uid='posts'%}
<meta property="og:type" content="article"/>
{endif} {% if entry.type_uid='place'%}
<meta property="og:type" content="place"/>
<meta property="place:latitude" content="{{entry.location.first.latitude}}"/>
<goal
  property="place:longitude"
  content="{{entry.location.first.longitude}}"
/>
{% endif%} {% endif%} ...
```

In this example, the `posts` and `place` types share the "title", "exerpt" and "covers" attributes, but `place` types contain locations attributes. In addition, we would need to define a different custom view in our site for each of these separate types.

## Integrations

### Private session management using OpenID Connect (OIDC)

The recommended method to interact with a private API using the Modyo session with an OIDC integration basically consists of two steps: **make the site private** and **enable integration at the account level**.

#### Make the site private

1. Log in to the account where you want to create a private site.
2. Click on create a new site.
3. Assign a name to the new site and select the base theme.
4. In the `Site settings` section, under the **Restrictions** tab, we select **private** under the Privacy level. This also activates **Show home page to public visitors** in order to redirect users without a session.
5. Click Save.

#### Enable account level integration (for all sites)

1. In your account, go to **Customers** and from there to the **Customer settings** section and a the top of the view, click the drop down and select the **Integration** tab.
2. Select the OpenID Connect integration and check the box for **Enable OpenID Connect**
3. Fill in the data for **Service name, Client ID, Issuer and Secret** and click **Run discovery service**
4. Check the fields you need (Enable refresh token, Enable remote logout, Enable token revocation, Enable claims synchronization on login)
5. Associate the provider fields with the custom fields you have in Modyo [OpenID Connect 1.0 specification for Standard Claims](http://openid.net/specs/openid-connect-core-1_0.html#StandardClaims)

### Using Axios to do the integration

If you want to use a library such as `axios` to perform an integration from Modyo, a convenient pattern is to create 3 snippets that take care of the most basic aspects of an integration.

The tasks you must cover with these snippets are:

1. A request interceptor to include a token.
2. A session controller.
3. A modal window that informs the user that their session will expire.

### Intercept requests to include a token

``` js
//global variable that represents an axios instance that will be in charge of making the service requests
var axios_api=axios.create ();
  axios_api.defaults.baseURL='API URL';
}
//global variable that will represent an instance of axios that will be responsible for making the requests of the modyo api
var axios_modyo=axios.create ({
  baseURL: window.baseUrl + '/api/admin',
});
//global variable that represents an instance of axios that will make the requests of the site content jsons
var axios_modyo_json=axios.create ({
  baseURL: {{site.url}},
});
//global variable that represents an axios instance that will be responsible for making authentication-related requests
var axios_auth=axios.create ();
axios_auth.defaults.baseURL=window.baseUrl + '/auth/openidc';
//function that generates activity on the site with each authentication request
var resetIdleTime=function (request) {
  sessionManager.resetIdleTime ();
return request;
}
//function that adds the token to each request
var appendTokenToRequest=function (request) {
return axios_auth.get ('/access_token'). then (function (response) {
request.headers.authorization='Bearer' + response.data.access_token;
return request;
}
}
//function that handles the errors of each of the requests and sends them to a higher instance
var errorRequest=function (error) {
  throw error;
}
axios_auth.interceptors.request.use (resetIdleTime);
axios_api.interceptors.request.use (appendTokenToRequest, errorRequest);
```

### A session controller

``` js
//will be in charge of raising the warning modality that will warn the close of the session, this variable will return a promise that will be effective if you click on the Hold Session button and will issue a reject promise in the case of selecting the button with the refusal to continue
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
//it will be the one that will be in charge of starting the time tracking to lift this modal and handle the Front side of the session, then we will explain each of the properties and methods of this object that handles the session
var sessionManager={
  //property that defines the time from the last activity until the end of the session in seconds (note not the refresh time of the token but the end of the session, it is recommended that this be one minute shorter than the one declared by the provider of the Open ID Connect to have a little slack with the session and closing it is 100% valid)
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
  //function that determines if the application is being accessed from the modyoShell or not
  isModyoAppShell: function () {
    return/; Modyo_App_Shell/.test (navigator.userAgent);
  },
  //method that must be executed on each page load to begin the process of session events to follow up recommended do this invocation sessionManager.init () in the head of the layout to begin tracking the session (in some cases it will be defined that developers do not launch this invocation in that case the test api to connect us must also have this if and so we will achieve that axios_api serves for the develop and development environment one with session and the other without session manager)
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
