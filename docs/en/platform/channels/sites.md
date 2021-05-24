---
search: true
---

# Sites

 <img src="/assets/img/channels/sites/sites-index.jpg" style="border: 1px solid #EEE;" /> 

This is where you need to operate to create digital channels within the platform. In this case, the operation of sites involves the entire development, design and flow of navigation. If you want to add content to each of them, it must be added in the Content section.

When you enter, you can see that there are 4 states:

 <img src="/assets/img/channels/sites/filters-sites.jpg" width="300" /> 

- **Enabled**: The default state in which newly created sites remain and those that are enabled for use.
- **Hidden: Sites created and enabled that do not appear in the list of sites in the user profile. They can only be accessed if you have the site URL.
- **Development**: Sites available only to Modyo administrators. Users who do not have administrator permissions will not be able to view these sites.
- **Disabled**: Sites that cannot be accessed.
- **Copy**: Creates a copy of the site and all published items of the site.

To create a site, simply click on the**New** tab, which will allow you to designate the name and host, and then a template for its appearance and structure.

After that, you can see it in “Enabled” mode, which means that it is online to work.

። :warning Attention
In the Site Index, you will only see the sites where you are part of the team working with a role.
።:

## Joint review and publication

You can review and publish multiple items of a site in a single view. To review the differences for an item, select the item from the left listing, and the differences between the editable and published version will appear in the right section of the view.

If you want to publish multiple items in one step, you must press the “Publish” button from the pages, navigation, widgets or templates and you must mark in the list all the items you want to publish and then press the button to publish again.

። :warning Attention
All items that have pending changes to be published will appear in the listing, so if any item does not appear in the listing, it is very likely that you do not have any changes to publish yet.

If you have team review enabled, only items that are already approved will appear in the list.

If you need to quickly publish an item, admin users can skip the approval process using the “Force Publish” option allowing the item to move directly to the publication view.
።:

## Setting up a Site

Site settings allow you to open platform options to be viewed differently by visitors, customers, developers, and site administrators. In addition, you can modify options to improve the appearance in search engines and the view of some of the data that the public has access to when they reach the pages.

 <img src="/assets/img/channels/sites/config-site.jpg" width="250" /> 

### General

Within this section, you can configure the following data:

- **Site Name**: The name of your site, this field is used as the default title for your site's SEO.
- **Description**: A brief description of your site that will be used as the default value for the site SEO.
- **Site logo**: Image to be used on the top left as the site logo.
- **Language**: The language in which your site will be. This value is important when using [content on a site] (/es/platform/channels/templates.html #vistas -for-content).
- ** [Team Review] (/es/platform/core/key-concepts.html) **
- **Time Zone**: The time zone in which the date and time fields will be displayed within the site.
- **Google Tag Manager ID**: Allows you to add a Google Tag Manager ID to easily insert scripts to make use of the google event logging tool.
- **Favicon**: Image that appears on the side of the address bar.
- **Apple Icon**: Image that appears on mobile devices when you use the site as an app.
- **Dele**: This option allows you to definitely delete a site and all its elements.

። :danger danger
This option is irreversible, so you need to be completely sure when you run this action. By pressing the delete button, the system will prompt you for the name of the site. You will need to enter the text name of the site you are deleting in order to execute the action. Once the action is confirmed, you will not be able to access the site or its items again.
።:

#### Google Tag Manager

By default, new Modyo themes include the necessary snippets to automatically inject Google Tag Manager scripts into both the _head_ and _body_ of the sites. These snippets are located in the _snippets>general_ section of the [Template builder] (/es/platform/channels/templates.html) and are embedded in both the snippet _head_ and the _home_ and _base_ views.


If you have the latest theme available and you still don't have these snippets, you can go to the “Themes” section at the top right and click on the “Upload templates” option in the additional options at the top right. This option will load all the templates that have been added to the theme, but are not present in the version you have installed.

If you have an old theme installed and do not have these snippets, here you can access the code to create them as custom snippets and be able to easily embed Google Tag Manager to your site.

1. Create a custom snippet with the following code and then embed the snippet into the site head using `{% snippet “gtm-head”%}`, replacing “gtm-head” with the name you gave the snippet.

**Google Tag Manager for _head_**
liquid
{% if site.tag_manager_id! = "%}

 <!-- Google Tag Manager --> 
 <script> (function (w, d, s, l, i) {w [l] =w [l] || []; w [l] .push ({'gtm.start':
new Date () .getTime (), event: 'gtm.js'}); var f=D.getElementsByTagName (s) [0],
j=d.createElement (s), dl=l! ='DataLayer'? ' &l='+l:”; j.async=true; j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
}) (window, document, 'script', 'DataLayer', '{{site.tag_manager_id}}'); </script> 
 <!-- End Google Tag Manager --> 

{% endif%}
```

2. Create a custom snippet with the following code and then insert it inside the body tags of the home and base views using `{% snippet “gtm-body”%}`, replacing “gtm-body” with the name you gave the snippet.

**Google Tag Manager for _body_**
liquid
{% if site.tag_manager_id! = "%}

 <!-- Google Tag Manager (noscript) --> 
 <noscript> 
<iframe src=” https://www.googletagmanager.com/ns.html?id = {{site.tag_manager_id}}” height="0" width="0"
style="display:none; visibility:hidden">
 </iframe> 
 </noscript> 
 <!-- End Google Tag Manager (noscript) --> 

{% endif%}
```

With this ready, when there is a value associated with the **Google Tag Manager Identifier** field in the Site's General settings, the scripts will be automatically injected and you can start creating events in Google Tag Manager to record your users' actions.

### PWA

Modyo allows the deployment of Progressive Web Apps (PWA) within the digital channels being put together. To do this, give two options to easily deploy them.

 <img src="/assets/img/channels/sites/pwa-site.jpg" width="600" style="margin-top: 40px; border: 1px solid #EEE;" > 

#### **Manifesto**

The manifest is used to indicate how you want a browser to display your digital channel. On the platform, it is possible to activate it through this checkbox. This will create the following route:

```
https://[domain]/[site-name]/manifest.json
```

The manifest must be implemented on each of the pages on which the PWA is developed, through the [Template Builder] (/es/platform/channels/templates.html), in the snippet ```head``.

You can create and modify the manifest in the following field, allowing you to add each of the changes without having to leave the view.

። :warning Attention
If you change the manifest, remember to save it with the**Save** button at the top of the screen to keep your changes.
።:

። :warning Attention
If you don't customize the manifest but add the path in the Template Builder, it will be blank and will not do any action.
።:

#### Service Worker**

Service Worker allows the digital channel to perform different actions or keep certain data connected within the cache to see a structure in case of a bad connection. The platform grants the possibility that this can be enabled through the following checkbox. Thus, the following path will be created:


```
https://[domain]/[site-name]/serviceworker.js
```

You can modify and program the Service Worker in the following field, adapting it to your routes and with the available variables as follows.

። :warning Attention
If the Service Worker is disabled, the page will continue to walk only in its basic functions and not with the benefits that this option has.
።:

። :warning Attention
If the code is not customized or saved, the site won't have the features you're designing.
።:

### SEO

 a005b718da3a9z0 

SEO (Search Engine Optimization) is the key to appearing in different search engines. It depends on a good configuration whether users reach the site through them.

The options to configure are:

- **Tagline**: Description that appears in search engines, under the site name
- **Keywords**: Words that users search and you want the site to appear.
- **Sitemap: This file allows search engines to better index the content of your site. Modyo automatically updates your default sitemap file, but you can also manually modify it to focus only on a particular page and content.
- **Robots.txt**: This file is part of the Robots Exclusion Protocol (REP), a group of web rules that regulate how robots track the web, access and index content and serve it to users. In practice, this file determines whether or not certain user agents (web tracking software) may or may not track parts of a website. These tracking instructions are specified “allowing” or “prohibiting” the behavior of certain (or all) user agents. You can modify this file to provide custom instructions to site crawlers.

:::tip Tip
The robots.txt and sitemap.xml files are only visible on the site, if you have the custom domain enabled (custom domain). Otherwise, robots.txt and sitemap.xml are only at the account level, have their default values and cannot be customized.
:::

- **Meta tags**: Allows you to set meta tags for all pages and their default values.

:::tip Tip
By adding a meta tag to all pages through the site's SEO settings, it will be added to the editable version of all pages, so you'll have to publish each page for the new meta tags to take effect on the site.
:::

። :warning Attention
Since the meta tag listing is part of the site configuration, only site administrators can add meta tags for all pages, however, site developers can add and remove meta tags on pages and modify their page by page values.
።:

### Restrictions

 <img src="/assets/img/channels/sites/restrictions-site.jpg" width="250" style="margin-top: 40px; border: 1px solid #EEE;" > 

Restrictions allows you to configure the privacy of the site.

- If the site is public, then everyone can see the site.
- If the site is private, only users with a Modyo session will be able to view the site.
- If the site is private, but the home is public, the home is shown to everyone who arrives at the Home, but when navigating to any other page on the site, they are prompted to register or sign in.
- If you reach a URL that does not exist within the site, by default you will find a 404 response, but if you check this option, instead of receiving a 404, you will be redirected to the Site Home.

### Domains

 <img src="/assets/img/channels/sites/domains-site.jpg" width="500" style="margin-top: 40px; border: 1px solid #EEE;" > 

The Domains section allows you to know where the site is publicly located, so it is essential that each member of the platform be informed of any changes made here.

The variables you can change here are:

- **Host**: Where the site is located inside the server.
- **Enable custom domains**: If you want within the domain, there are sites with a custom URL or “custom host.
- **Enable SSL on the site**: You need to have a certificate inside the server to enable it.
- **Primary domain**: Site address.
- **Alternative**: Secondary address to redirect in case the first fails.

። :warning Attention
Modyo has reserved domains that cannot be used as custom domains of sites:
 <table style="border: none;"> <tr style="border: none;"> 
 <td style="border: none;"> <ul> 
 <li> education.modyo.com </li> 
 <li> elearning.modyo.com </li> 
 <li> training.modyo.com </li> 
 <li> training.modyo.com </li> 
 </ul> </td> 
 <td style="border: none;"> <ul> 
 <li> support.modyo.com </li> 
 <li> support.modyo.com </li> 
 <li> developers.modyo.com </li> 
 <li> developers.modyo.com </li> 
 </ul> </td> 
 <td style="border: none;"> <ul> 
 <li> www.modyo.com </li> 
 <li> en.modyo.com </li> 
 <li> pt.modyo.com </li> 
 <li> global.modyo.com </li> 
 </ul> </td> 
 </tr> </table> 
።:

። :warning Attention
Modyo has hosts reserved for sites, so you won't be able to use them as a host for your sites:
 <table style="border: none;"> <tr style="border: none;"> 
 <td style="border: none;"> <ul> 
 <li> 404 </li> 
 <li> 422 </li> 
 <li> 500 </li> 
 <li> activate </li> 
 <li> admin </li> 
 <li> api </li> 
 </ul> </td> 
 <td style="border: none;"> <ul> 
 <li> auth </li> 
 <li> callback </li> 
 <li> code_generators </li> 
 <li> crossdomain </li> 
 <li> dist </li> 
 <li> login </li> 
 </ul> </td> 
 <td style="border: none;"> <ul> 
 <li> logout </li> 
 <li> mailing </li> 
 <li> panel </li> 
 <li> password </li> 
 <li> profile </li> 
 <li> rails </li> 
 </ul> </td> 
 <td style="border: none;"> <ul> 
 <li> realms </li> 
 <li> robots </li> 
 <li> session </li> 
 <li> signup </li> 
 <li> sitemap </li> 
 <li> status </li> 
 </ul> </td> 
 <td style="border: none;  vertical-align: top;"> <ul> 
 <li> uploads </li> 
 <li> users </li> 
 <li> welcome </li> 
 <li> widgets </li> 
 </ul> </td> 
 </tr> </table> 
።:

### Site Variables

Modyo has [global variables] (/es/platform/core/key-concepts.html #variables -globals) that you can use across multiple sites. However, you can create site-specific variables or overwrite the value of an already created global variable, with a specific value for the particular site.

### Team Members

 <img src="/assets/img/channels/sites/members-site.jpg" width="500" style="margin-top: 40px; border: 1px solid #EEE;" > 

To sort the work, Modyo allows you to select the team members who will work on each site and thus have access to writing, review and/or publication.

To do this, the administrator who created the site can manually assign users and default roles that enable each of the roles.

To add a user to the site, select the primary button **+ New** at the top right of the view, in the modal select an administrator and assign it a role, then press**Add** to make that administrator part of the site's work team.

You can modify the role of any of the associated administrators by clicking on their name. A modal will be raised, where you can select the new role. Tap **Save** to confirm the change.

If you want to remove an administrator from a site, select using the checks to the left of their name, and then clicking the button at the bottom of the**Dele** list.

The roles available are:

- **Developer**: You can create, modify and submit to review pages, widgets, menu and templates.
- **Developer CLI**: You can create, modify and submit to review pages, widgets, menu and templates. You can also push widgets from external applications.
- **Reviewer**: You can create, modify, submit to review, and approve pages, widgets, menu and templates, as well as publish them when the review conditions are met.
- **Admin**: You can create, modify, submit to review and approve pages, widget, menu, and templates. You can publish without going through team review validations. You can also modify the settings of the site.

#### Developer

He is the user in charge of the structural development of resources, the creation and editing of content. Anything you do, you have to go to review.

This user cannot publish, delete, return to previous versions of resources (Rollback), or change settings.

There is a variation of this role with the name “CLI” that in addition to developer permissions, allows them to push widgets from external applications, such as [modyo-cli] (/es/platform/channels/widgets.html #modyo -cli).

#### Reviewer

They correct the work done by Developers, approving or discarding what is already done, and then publish.

You cannot edit the site settings.

#### Admin

The Site Administrator, has access to the two previous roles, in addition to being able to configure the entire site.

This user is different from Default Admin. Site Admin can only configure the external site, but it cannot change anything about the platform.

If necessary, users from the site who already have previous roles can be deleted. To do this, just click the user and the Delete action.

### Custom Redirects

Modyo has a custom redirects system that will allow you to take a URL from your site and automatically redirect using a 301 or 302 code to another section of the site.

In this view you will find a table with all the redirects that currently exist on the site, where you can search by path or description.

To create a new redirect, click the**New** button in the upper right corner of the view. By filling in the Source **_URL_ and Destination **_URL_ fields and redirect code and then saving the changes, you will create a new redirect entry.

። :warning Attention
The redirection table is the penultimate in precedence, so if there is a URL on the site pointing to a [page] (/es/platform/channels/pages.html), a default view, or a [custom content view] (/es/platform/channels/templates.html #vistas -for-content), you'll see those views instead of being redirected using the custom redirects table.
።:

In addition to creating redirects one by one, you can import a [CSV file] (/assets/examples/custom-redirections.csv) with up to 1000 redirects.

። :warning Attention
The columns required to import redirects are source and destination.

You can select a 301 or 302 response code for all items without having a column for them.

Along with the above, keep in mind that if you are importing a redirect with an already registered source, you will not be able to start the import process and you will need to modify your CSV file and delete the row whose origin already exists, or delete the custom redirect record from the site whose origin you are trying to import.
።:

The precedence of locations on Modyo sites is as follows:

1. [Default views (Home, search)] (/es/platform/channels/templates.html)
1. [Pages] (/es/platform/channels/pages.html)
1. [Custom Content Views] (/es/platform/channels/templates.html #vistas -for-content)
1. Custom Redirects
1. [Site 404 Error Settings] (/es/platform/channels/sites.html #restricciones)

## Security headers

Configure HTTP security headers by enabling this module for your site.
This action cannot be undone, but when enabled, you have control
total headers you want to use.

### HTTP Strict Transport Security (HSTS)

Instructs the browser that the site should be accessed using HTTPS only.
* **Duration**: Set how long the browser should remember that only
  access the site using HTTPS.
* **Preload**: Includes preload policy. For more information, see
   [HSTS Preload List Submission] (https://hstspreload.org/).
* **Include subdomains**: Use the HSTS rule also for all subdomains on the site.

### Referrer-Policy

The _header_ `Referer` contains information from the previous web page from which
is linking, with the _header_ `Referrer-Policy `you can control how much
information should be included in the _header_ `Referer`.

* **no-referrer**: No _referrer_ information is sent.
* **no-referrer-when-downgrade**: Does not send _referrer_ information to a destination
  less safe.
* **origin**: Send only the source domain and delete the routes and _query string_.
* **origin-when-cross-origin**: Send _referrer_ information for _requests_
  from the same source and deletes routes and _query string_ for other destinations.
* **same-origin**: Send _referrer_ information only for _requests_ from
  same origin.
* **strict-origin**: Send the source domain only to _requests_ of the same
  security level and does not send _referrer_ information to less secure destinations.
* **strict-origin-when-cross-origin**: Send information from _referrer_ to
  _requests_ of the same source. Sends the source only if the security level is
  the same and does not send _referrer_ information to less secure destinations.
* **unsafe-url**: Always send _referrer_ information.

### X-Frame-Options

Indicate if your site can be included in a `frame`, `iframe`,
`embed` or `object`.
* **DENY**: Site cannot be displayed in a _frame_.
* **SAMEORIGIN**: The site can be displayed in _frames_ of the same domain.

### X-Content-Type-Options

Indicates that the _MIME types_ announced in the _header_ `Content-Type` must be followed
to avoid _MIME type sniffing_.

### Content-Security-Policy

Control which resources the browser can load on the site to mitigate attacks
data injection and _cross site scripting_. The default value *allows
load resources from anywhere*, so it's important to design a
Content security policy that is appropriate for your site.
Freely specify your content security policy in the text area;
for a complete guide on how to write your policy, see
[MDN Content Security Policy (CSP)] (https://developer.mozilla.org/es/docs/Web/HTTP/CSP)

። :warning Attention
A very strict value can interfere with some features such as
[Google tag manager] (/es/platform/channels/sites.html #google -tag-manager),
[PWA] (/es/platform/channels/sites.html #pwa),
[Widgets] (/es/platform/channels/widgets.html) and
[Asset Manager] (/es/platform/content/asset-manager.html).
።:

A production-friendly policy must ensure that all resources such as
images and stylesheets are loaded from reliable sources and require everyone
scripts are safe and reliable for the application. For example, a
strict policy for the _template minimal_ would look like this:

```
default-src 'self'; img-src 'self' https://cloud.modyocdn.com; font-src 'self' https://cloud.modyocdn.com http://cdn.materialdesignicons.com; style-src 'self' http://cdn.materialdesignicons.com; script-src 'self'
```

The policy must include a 'default-src' self' directive, which is _fallback_
for any other type of resource. You must also include policies
`script-src` and `style-src` to prevent the evaluation of tags _inline_ `style and
`script`.

* **Nonce**: The server will add a nonce CSP to the policies
  `script-src` and `style-src` if they are present.

If you have nonce present in your policy, you can add to the allowed list
the _tags_ `script` and `style in your _templates_ using the variable `csp_nonce`.

liquid
 <script nonce="{{csp_nonce}}"> 
 alert (“everything will be fine”);
 </script> 
```

There are several tools to help you design a robust security policy:
* [Google CSP evaluator] (https://csp-evaluator.withgoogle.com)
* [ReportURI] (https://report-uri.com/home/analyse)
* [Salvation CSP validator] (https://cspvalidator.org)

### Permissions-Policy

Allow or deny the use of browser functions and APIs for the site, by
example, you can restrict privacy-sensitive APIs such as camera or
microphone and auto-play videos. To get a list
complete features supported by browsers, see
[Feature Policy from MDN] (https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy).

### X-XSS-Protection

Prevents pages from loading when the browser detects an
_cross-site scripting_. This protection is not required with browsers
modern when implementing a [Content-Security-Policy] (/es/platform/channels/sites.html #content -security-policy)
strict, but some security inspectors will wait for the presence of
this _header_.

* **0**: Disable XSS _filtering_.
* **1**: Enable XSS _filtering_, removing unsafe parts.
* **1; mode=block**: Enables XSS _filtering_, preventing the _rendering_ of the
  page.
