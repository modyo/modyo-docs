---
search: true
---

# Templates

One of the most important aspects when creating our site is its base architecture and appearance. In Template Builder, you can modify the base templates, along with the global JavaScript and CSS to use on your pages and change their structure as required.

Once the theme to be used within the site has been selected, the different pages can be accessed from the Template Builder to change the codes as you need them.

Once inside the Template Builder, you will see that the main menu is hidden to optimize the work area. In the top bar, on the left, you will find the section name and the current status:

- **Published**: You will see this status after you have made a publication and when the editable and published versions are the same.
- **Pending changes**: You will see this status if there is already a published version, but there are pending changes to be published in your editable version.
- **In review**: You will see this status when [team review](guides/platform/team-review.html) is enabled and the editable version has been submitted for review.
- **Approved**: You will see this status when [team review](guides/platform/team-review.html) is enabled and if the item review conditions were met. If you are in this state, your templates are ready to be published.

![Template builder](/assets/img/channels/template_builder/template-builder.jpg)

In the upper right, you will find the latest publication date and the available actions:

**Preview** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Clicking on this icon will open a new tab with the preview mode of the templates, in which you can see as if they were published, all the changes you have in your templates.

<img src="/assets/img/channels/template_builder/differences.jpg" style="border: 1px solid #EEEEEE" width="700">

**Differences** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 3h-5v2h5v13l-5-6v9h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 15H5l5-6m0-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h5v2h2V1h-2v2z" fill="#626262"/></svg>: By clicking on this icon, you will open the mode of differences, in which you can compare the changes between multiple versions of your templates. By default you will start comparing the published version with the editable version, but by using the version selectors, you can also compare with the backup versions.

::: tip Tip
Every time you publish a version, the version that was published becomes a backup version. By default, up to 20 backups are saved, so that the most recent twenty backups can be compared, restored and rollback. For more information on versioning, check out the [versioning] section (/guides/platform/team-review.html # versioning).
:::

<img src="/assets/img/channels/template_builder/conversation.jpg" style="border: 1px solid #EEEEEE" width="700">

**Activity/Comments** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 23a1 1 0 01-1-1v-3H7a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-4.1l-3.7 3.71a1 1 0 01-.7.29H12zm1-6v3.08L16.08 17H21V7H7v10h6zM3 15H1V3a2 2 0 012-2h16v2H3v12zm6-6h10v2H9V9zm0 4h8v2H9v-2z" fill="#626262"/></svg>: Displays a sidebar with activity history and template comments. At the end of the sidebar, you will see a text box where you can write a comment. Next to each activity, you can click on "see detail" to show the complete information of that activity log.

**More actions** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>:

- **Themes**: You will go directly to the subject index of the site, where you can create copies of the current theme to use in the other sites of your account. To learn more, check [Topics](/guides/channels/templates.html # topics)
- **Restore all**: You will restore all templates to the original value of the theme.

**Main action**

- **Save**: Will save all changes of all templates.
- **Send for review**: Change the status of the templates to "waiting for revision". In this state you can continue making changes, but each change will be notified via mail to the assigned reviewers.
- **Reject**: Returns to the "in edition" state, notifying the reviewers that the item was rejected.
- **Publish**: Once the templates were approved, they can be moved to the published version.

In the main work area, you will see two sections:

- The work area.
- The template selection area.

Each template that you click on the right sidebar will open in the central area, very similar to an IDE. If you open multiple templates, they will remain open as tabs in the work area.

The template bar on the right has two tabs: views and snippets.

Views are base elements and required by Modyo, and usually translate into the direct structure of one of your site's URLs.

### Snippets

Snippets are pieces of code that can be used one or more times. Next to each custom snippet, you'll find an icon (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>) to copy your reference path. The code will look similar to this: <span v-pre> `{% snippet" snippet-name "%}` </span>.

You can add custom snippets at the end of the list of platform snippets, by clicking on the **"+ Add a snippet"** button.

<img src="/assets/img/channels/template_builder/custom-snippet.jpg" style="border: 1px solid #EEEEEE" width="300">

::: tip Tip
In order for the system to recognize the type of programming language to which the snippet belongs, the underscore must be added under + termination, ie **"front_css"** or **"library_js"** by default it will recognize the snippet As HTML language.
:::

::: tip Tip
All elements of the Template Builder use Liquid as a template engine.

For more information on what Liquid is and how to get the most out of it, check out the [Liquid Markup] page (/docs/channels/liquid-markup.html)
:::

In the work area, under the tabs, you will find a bar with useful elements:

<img src="/assets/img/channels/template_builder/bar-templates.jpg" style="border: 1px solid #EEEEEE" width="700">

**File manager**: A modal will be raised where you can access all the files of the account and copy its URL, if you access the second tab, you can upload new files.

::: tip Tip
For more information on the benefits and benefits of File Manager, go to [Asset Manager](/docs/content/asset-manager.html)
:::

**Keyboard shortcuts**: A small pop-up will be displayed with some of the useful keyboard shortcuts to use in the template builder.

<img src="/assets/img/channels/template_builder/keywords.jpg" width="400">

**Snippets**: A list with all snippets will be displayed, along with the option to copy your reference code.

<img src="/assets/img/channels/template_builder/snippets.jpg" width="300">

**Changes**: A list of all the times and states in which you have done the "Save" action in this version. By clicking on one of the sub-versions, you will change the content of the template you are working on to that sub-version.

<img src="/assets/img/channels/template_builder/changes.jpg" style="border: 1px solid #EEE" width="300">

::: tip Tip
If you publish a version, you will see that the list of changes disappears, this is because the new editable version has not had any changes.
:::

::: tip Tip
The sub-versions are for each template, so for some you will see that there are changes and for others you will not see the change selector. In the same way, if you return to a previous sub-version of a template, you will not affect the rest of the templates.
:::

::: tip Tip
If a version before the editable version is restored, you can access the sub-versions of each template of that version. You can learn more about [versioning here](/guides/platform/team-review.html # versioning)
:::

Like each template, you can restore all templates to their original version by clicking on the secondary action of the top bar "<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12.5 8c-2.65 0-5.05 1-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>  Restore all ". For those changes to take effect, you must publish the templates.

### Themes

In this view you can see what theme you have installed, and then the list of all the themes available for the site. By clicking on the **Install** button of a theme, you will replace all the content of your editable themes with the content of the theme you are installing. You can preview the changes using the preview mode of the template builder and then publish them to take that new theme to the published site.

At the top you will find different actions:

- **Customize** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M14.6 16.6l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6l-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6l6 6l1.4-1.4z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: It takes you to the edition (template builder) of the currently installed theme.
- **Copy** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Create a copy of the installed theme. It will allow you to choose a new name for the copy of the installed theme.
- **Reset** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12.5 8c-2.65 0-5.05 1-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg> : Like the reset action of the template builder, this action restores all editable templates to the original version of the theme.
- **Load templates** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m.12 13.5l3.74 3.74l1.42-1.41l-2.33-2.33l2.33-2.33l-1.42-1.41l-3.74 3.74m11.16 0l-3.74-3.74l-1.42 1.41l2.33 2.33l-2.33 2.33l1.42 1.41l3.74-3.74z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: In some cases, after complex migrations, there are some unmodified templates that can be lost and you may not see them in the template list in the template builder. This action retrieves those templates from the original theme and allows you to reoccupy them.

::: tip Tip
The upload templates action does not modify or touch the editable templates that are already visible in the template builder, it only restores those that are not visible.
:::

::: tip Tip
When you create or copy a theme on one site, that theme is available to all other sites in the account, so you can create a base theme, and start from that base when you need to create new sites quickly.
:::

## Views for content

In order to display [content](/guides/content/) automatically on a site, you must meet certain conditions:

1. Have a space with at least one language (the same as the site) with at least one Type. Go to [Spaces](/guides/content/spaces.html) and [Types](/guides/content/types.html) to learn how.
1. Have tickets published in the language of the site. Go to [Entries](/guides/content/entries.html) and [Location](/guides/content/spaces.html # location) to learn more.
1. Associate the space with your site. Go to [general site settings](/guides/channels/sites.html # general) to learn more.
1. Create a custom view in the templates and name it the same as the UID of the Space you want to display. Go to [create a Space](/guides/content/spaces.html # create-a-space.html) to learn more.

To create a custom view, you must enter the Template Builder and make sure you are in the first "Views" tab. When you scroll to the bottom of the list, you will see that there is a section called "Custom" and a button **+ Add custom view**. When you create the custom view, make sure its name matches the UID of the space you want to display in that view.

By modifying this view, you can use Liquid, and the `entry` object, for example: <span v-pre>` {{entry.published_at | format_date}} `</span>

A basic example of Liquid + HTML code that you can use in these views is:

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

::: tip Tip
To learn more about how to use Liquid, go to [Liquid markup](/guides/channels/liquid-markup.html)
:::

With this view created and published, if the URL that is being accessed is of the type `site_url/space_uid/entry_slug`, where` space_uid` is the UID of the space you want to display and matches the name of the view you just accessed create, and there is an entry published in the language of the site and also, the entry slug is `entry_slug`, you will be showing the view with the values of that entry.

## SEO

SEO [(Search Engine Optimization)](/guides/channels/sites.html # seo) is one of the most important topics of the site and content. In Modyo we have a way to control the way search engines read your site and content, adding meta tags dynamically depending on the attributes you add to your pages and content.

We recommend adding this code snippet to the Template Builder, and then calling this snippet from the head of your site:

``` html
<! - Site SEO ->
<meta name="keywords" content="{{site.keywords}}"/>
<meta name="author" content="{{site.name}}"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
{% if current_layout_page%}
<! - SEO Layouts ->
<meta name="description" content="{{current_layout_page.excerpt}}"/>
<meta property="og: title" content="{{current_layout_page.title}}"/>
<meta property="og: type" content="website"/>
<meta property="og: url" content="{{current_layout_page.url}}"/>
<meta property="og: image" content="{{site.logo | asset_url: 'original'}}"/>
<meta property="og: site_name" content="{{site.name}}"/>
<meta property="og: description" content="{{current_layout_page.excerpt}}"/>
{% endif%} {% if entry%}
<! - Content SEO ->
<meta name="description" content="{{entry.excerpt}}"/>
<meta property="og: title" content="{{entry.title}}"/>
<meta property="og: type" content="article"/>
<goal
  property="og: url"
  content="{{site.url}}/{{entry.type_uid}}/{{entry.slug}}"
/>
<goal
  property="og: image"
  content="{{entry.covers.first | asset_url: 'original'}}"
/>
<meta property="og: site_name" content="{{site.name}}"/>
<meta property="og: description" content="{{entry.excerpt}}"/>
{% endif%} {% unless current_layout_page or entry%}
<! - Default SEO ->
<meta name="description" content="{{site.description}}"/>
<meta property="og: title" content="{{site.name}}"/>
<meta property="og: type" content="website"/>
<meta property="og: url" content="{{request.url}}"/>
<meta property="og: image" content="{{site.logo | asset_url: 'original'}}"/>
<meta property="og: site_name" content="{{site.name}}"/>
<meta property="og: description" content="{{site.description}}"/>
{% endunless%}
<! - END SEO <-->
```

This snippet differs when you are using a custom page, some of the Modyo default pages, or some of the content views, so using the attributes of each element, you can define a good SEO base to All the URLs of your site.

If you require it, you can further customize this snippet, defining what goals you want to appear for specific URLs or for specific types, for example, in the content section, you can use:

``` html
... {% if entry%}
<! - Content SEO ->
<meta name="description" content="{{entry.excerpt}}"/>
<meta property="og: title" content="{{entry.title}}"/>
<goal
  property="og: url"
  content="{{site.url}}/{{entry.type_uid}}/{{entry.slug}}"
/>
<goal
  property="og: image"
  content="{{entry.covers.first | asset_url: 'original'}}"
/>
<meta property="og: site_name" content="{{site.name}}"/>
<meta property="og: description" content="{{entry.excerpt}}"/>
{% if entry.type_uid='posts'%}
<meta property="og: type" content="article"/>
{endif} {% if entry.type_uid='place'%}
<meta property="og: type" content="place"/>
<meta property="place: latitude" content="{{entry.location.first.latitude}}"/>
<goal
  property="place: longitude"
  content="{{entry.location.first.longitude}}"
/>
{% endif%} {% endif%} ...
```

In this case, the `posts` and` place` types share the title, exerpt and covers attributes, and differ in the locations object. In addition, we define a different type of document for each one.

## Integrations

### Private session management using OpenID Connect (OIDC)

The recommended method to interact with a private API using the Modyo session with an OIDC integration, basically consists of two steps: **make the site private** and **enable integration at the account level**.

#### Make the site private

1. Log in to the account where you want to create the private site.
2. Click on create a new site.
3. Assign a name to the new site and select the base theme.
4. In the `configuration> site` section, under the **Restrictions** tab, we select **private**. It also activates **Show home to public visits** in order to redirect users without a session.

#### Enable account level integration (for all sites)

1. Go to the account, **Customers** and from there to the **Settings** section and then the **Integration** tab
2. Select the OpenID Connect integration and check the box for **Enable OpenID Connect**
3. Fill in the data for **Service name, Client ID, Secret and Issuer** and click **Launch discovery service**
4. Check the fields you need (Enable refresh token, Enable remote logout, Enable token revocation, Enable claims synchronization)
5. Associate the provider fields with the custom fields you have in Modyo [OpenID Connect 1.0 specification for Standard Claims](http://openid.net/specs/openid-connect-core-1_0.html#StandardClaims)

### Using Axios to do the integration

If you want to use a library as `axios` to perform an integration from Modyo, a convenient pattern is to create 3 snippets that take care of the most basic aspects of an integration.

The tasks you must cover with snippets are:

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

This would be the modal to activate in the previous step with bootstrap for handling the warning modal.

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
