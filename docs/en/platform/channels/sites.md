---
search: true
---

# Web Applications

A web application or web app displays the content created in Content and Channels to create your personalized digital channel. All the development, design, and navigation flow is carried out in the web application.

A web app can be in one of these three states:

- **Enabled**: Default status of newly created web applications and those that are enabled for use.
- **Pending changes**: There are pending changes in the web application. An administrator can verify the changes and publish the web application.
- **Disabled**: The web application cannot be accessed.

## Create a Web Application

To create a new web app, follow these steps:

1. In the side menu, click on **channels**.
1. Click on **+ new application**.
1. Type the name and host (main path of the web application).
1. If necessary, select which realm it belongs to.
1. Click **create**.

Once created, the web application is automatically enabled and the system takes you to the summary screen.

:::warning Attention
In the web apps index, you will only see those apps in which you have a role and are part of the team.
:::

## Review and Joint Publication

On the review and joint publication screen, you can see all the pending changes to be published in your web app. To view the changes, click on the **view** button.

### Publish jointly

To make a joint publication in your web application, follow these steps:

1. In the side menu, click **channels**.
1. Click on your web application.
1. In the summary screen you can see the pending changes to be published. Click on the **publish** button to preview and select the changes.
1. Select the changes you want to publish.
1. Click on the **publish** button.


:::tip Tip
If you click **publish** on a particular article (e.g., publish a page), the Review and Publish window will open with this article selected to see the pending changes.
:::

## Search

When you create a web application with Modyo, your users can search your web apps and all their content using the search function. This can be done using the `/search` URL or by accessing the dedicated search page.

### Enable or disable search

To enable or disable the search functionality, follow these steps:

1. In the side menu, click **channels**.
1. Click on your web application.
1. Click on **general**.
1. In the privacy section, enable or disable the **enable search** box, as required.
1. Click **save**.


### Search template

You can control the appearance and search functionalities in your web app using the _search_ [template](/en/platform/channels/sites#search-template/).

This template is available by default in the templates section and contains all the Liquid code needed to carry out queries in your web app. By default, when making a query, the records are displayed in list form, with their title, description, and a link to their address. You can modify the template to adapt it to your needs.

To access this template:

1. In the side menu, click **channels**.
1. Select your web application.
1. Click on **templates** in the side menu.
1. In the views section, in the right column, and under the search category, click **show**.

To access the search template, append _search_ or _search.json_ to your web app's URL.

For example:
 - `test.modyo.com/mySite/search`
 - `test.modyo.com/mySite/search.json`


### Search.json

You can also use "search.json" to integrate the search engine in a more personalized way.

To access this API, add "search.json" to your web app's URL along with your query. For example: test.modyo.com/mySite/search.json?query=MyQuery

Customize your queries as follows:


|  Parameter       |       Description    |
|------------------|----------------------|
| **query** | Performs queries to the search API. This search engine queries all published pages of your web app and all public entries in the spaces linked to the web app. |
| **per_page** | Divides the total number of records by the number of selected pages. |
| **page** | Selects the specific page you want to query, in case there are multiple pages of records to query. |
| **multi=true** | Allows you to search in all web applications in the account that have the search function enabled. |


## Web Application Settings

In the application configuration section, you can customize your web app so that your visitors, customers, developers, and administrators view your web app differently. As well as to optimize the SEO of your application.


### General

In this section you can configure:

- **Application name**: This field is used as the default title for your web app's SEO.
- **Description**

:::warning Attention

Changes to the name and description are immediately reflected in Modyo. The update in search results will be seen once search engines complete their reindexing process.

:::
- **Application logo**: Image displayed in the upper left.
- **Application language**: The language in which your web app is available. Options are: Spanish, English, and Portuguese.
- **Time zone**: The time zone in which date and time fields are displayed in the app. This setting affects all sections, including pages, navigation, and templates, as well as Liquid calls to web application data.


:::warning Attention
Time in content is managed in the [general](https://https://docs.modyo.com/en/platform/core/configuration#configuration) section of the account settings.
:::

- **Google Tag Manager ID**: Adds a Google Tag Manager identifier to insert scripts for tracking and measuring events.

By default, new Modyo themes include snippets to automatically inject Google Tag Manager scripts into the `<head>` and `<body>` tags of web applications.

To access these snippets:

1. In the side menu, click on channels.
1. Select your web application.
1. Click on templates in the side menu
1. In the right column, click on snippets and go to the general section. You can embed them in the _head_ snippet and in the _home_ and _base_ views.

**To create custom snippets**:

**For the _head_**:

1. Use this code:

```liquid
{% if site.tag_manager_id != '' %}

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','{{site.tag_manager_id}}');</script>
<!-- End Google Tag Manager -->

{% endif %}
```
2. Embed the snippet in the _head_ of the web app using {% snippet "gtm-head" %}, replacing "gtm-head" with the name you gave the snippet.

**For the _body_**

1. Use this code:

```liquid
{% if site.tag_manager_id != '' %}

<!-- Google Tag Manager (noscript) -->
<noscript>
<iframe src="https://www.googletagmanager.com/ns.html?id={{ site.tag_manager_id }}" height="0" width="0"
style="display:none;visibility:hidden">
</iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->

{% endif %}
```

2. Embed the snippet inside the body tags of the _home_ and _base_ views using {% snippet "gtm-body" %}, replacing "gtm-body" with the name you gave the snippet.

With this configuration complete, when there is a value associated with the **Google Tag Manager ID** field, the scripts will be automatically injected. This will allow you to create events in Google Tag Manager to record your users' actions.



- **Favicon**: Image that appears next to the address bar.
- **Apple icon**: Image displayed on iOS mobile devices when marking the application as a favorite.
- **Delete**: Permanently delete a site and all its elements.

:::danger Danger
Deletion is irreversible, so you must be completely sure when executing this action.

When you press the delete button, the system will ask you to enter the textual name of the site you want to delete to confirm the action. Once confirmed, you will not be able to access the site or its elements again.
:::



**Visualization**
- **Favicon**: Image displayed next to the address bar.
- **Apple icon**: An image that is displayed on iOS mobile devices when you mark the application as a favorite.

**Privacy**
- **Public**: All visitors can view the web app and its content without logging in.
- **Private**: Only users with an active Modyo session can view the web app.
- **Show home to public visitors**: The web app's home page is shown to all visitors, even those who are not logged in. When navigating to any other page, registration or login is required.
- **Redirect to home when a URL is not found**: By default, the web application shows a 404 error when the user accesses a non-existent URL. If you check this option, the user will be redirected to the web app's home page instead of the 404.
- **Enable search**: Activates the search function in the web app.
- **Enable multi-application search**

:::tip Tip
If you enable search in your web app and use the `multi=true` parameter from another web app, you can also search in your current app.
:::


**Danger Zone**

::: danger Danger
Proceed with caution when modifying these options, as they can affect access to your web application and your users' experience.
:::

- **Change host**: This action modifies the visibility and accessibility of the application. Changing the host can impact the visibility and availability of the web application.
- **Change realm**: Displays the application's realm. When you change the realm, you lose all privacy settings in your web apps, pages, and navigation.
- **Change status**: Changes the application's status. Options are:
	* Enabled: Editable and visible to the public. This is the default state of a web app.
	* Editable: Modifiable but not visible to the public. Requires login to access. Robots.txt, PWAs, and the manifest are disabled in this state.
	* Disabled: Not editable or visible. In this state, it is not accessible or visible to users.
- **Delete application**: Initiates the asynchronous deletion of the application and all its elements, such as pages and widgets.

::: danger Danger
Deleting a web application is irreversible.

When you press the delete button, the system asks you to enter the textual name of the application to confirm the action. Once confirmed, you cannot access the application or its elements.
:::

### SEO

SEO (Search Engine Optimization) is fundamental for search engine positioning. Users rely on good SEO settings to find your application.

You can configure:

- **Tagline**: Description in search engines, below the web application name.
- **Automatically update the sitemap.xml file for me**: Allows Modyo to automatically create and maintain the sitemap.xml. Disable this option to use a custom sitemap.
- **Sitemap**: This XML file allows search engines to index the site's content.
- **Custom sitemap.xml file**: File that allows search engines to index the web app's content.
- **Automatically update the robots.txt file for me**: Allows Modyo to automatically create and maintain robots.txt. Disable this option to provide custom instructions to web app crawlers.
- **Custom robots.txt file**: File that tells web crawlers which parts of the application they may or may not index.

:::tip Tip
Robots.txt and sitemap.xml files are only visible with custom domains. Otherwise, they are only found at the platform level, have default values, and cannot be customized.
:::

- **Custom meta tags**: Allows you to configure meta tags for all pages and their default values. Click **+ new meta tag** to create a new one.
- **Replicate meta tag on pages**: When creating a new meta tag, select this option to propagate the meta tag and its value across all pages of the web app. You must save changes to meta tags and publish all modified pages for the new meta tags to take effect.

:::warning Attention
Only application administrators can add meta tags. Developers can add and remove meta tags page by page.
:::

#### On-Page vs. Off-Page SEO

Also known as on-site and off-site SEO, these terms refer to actions you can take on and off a web page to improve visibility in search engines. For better positioning, we recommend using both strategies together.

##### On-Page SEO

To improve on-page SEO:

- Use keywords in the platform's SEO section and on your pages.
- Include keywords in the URL.
- Add relevant links to other sections of your application.



##### Off-Page SEO

To improve off-page SEO:

- Promote content on social networks and other distribution channels.
- Encourage alliances and collaborations with authoritative media on the subject.



### PWA

Modyo allows you to implement Progressive Web Apps (PWA) in your digital channels, offering an enhanced experience to your users. To use PWA functionalities, you must enable the options you require in your project.

#### Main Service Worker

Activate the Service Worker so that your digital channel can cache data, work offline, and provide an improved experience to your users, even with an unstable connection.

To enable the service worker, follow these steps:

1. In the side menu, click channels.
1. Select your web application.
1. Click on application settings.
1. Check the enable primary service worker box.
1. Click **save**.

Once activated and saved, the following route is created:


```bash
https://[domain]/[site-name]/serviceworker.js
```

To modify the service worker, follow these steps:

1.  In the side menu, click channels.
1. Select your web application.
1. Click on templates in the side menu.
1. Click on the snippets tab in the right column.
1. In the service worker section, select the file you want to modify.
1. Click **save**.
1. Click **publish**.


:::warning Attention
It is necessary to customize and save the service worker code to integrate these functions into your web app.
:::

:::warning Attention
If you disable the service worker, your web application will continue to function, with basic functions and without the benefits of the service worker.
:::


#### WebPush Notifications

Allow your users to receive WebPush notifications along with notification campaigns. To send messages to your users, you must ensure that your application is linked to a realm and the application status is set to **Enabled**. Notification management is done through the [messaging tool](/en/platform/customers/messaging).

#### PWA Manifest

 The manifest indicates how you want a browser to display your digital channel. To activate the manifest:

1. In the side menu, click channels.
1. Select your web application.
1. Click on application settings.
1. Click on PWA.
1. Check the enable PWA manifest box.
1. In the modal, fill in the fields.
1. Click **generate**.
1. Click **save** in the modal.
1. Click **save**.


When the manifest is activated, this route is created:


```bash
https://[domain]/[site-name]/manifest.json
```

It is necessary to implement the manifest on each page of the PWA through [Templates](/en/platform/channels/templates), in the ``head`` snippet.


:::warning Attention
If you do not customize the content of the PWA manifest and add the route in templates, the manifest will be created blank and will have no effect.
:::



### Domains

In the domains section, you can view and modify the public location of your web application.

:::warning Attention
It is essential to inform all platform members about any changes you make in this section.
:::

Activate the checkbox to make changes. The variables you can modify are:
- **Host**: Location of the web application on the server.
- **Primary domain**: Main address of the web application.
- **Alternative domain**: Secondary address to redirect in case of failure in the primary.


:::warning Attention
These domains are reserved by Modyo. They are not available as custom domains:
<table style="border: none;"><tr style="border: none;">
<td style="border: none;"><ul>
<li>education.modyo.com</li>
<li>elearning.modyo.com</li>
<li>training.modyo.com</li>
<li>capacitacion.modyo.com</li>
</ul></td>
<td style="border: none;"><ul>
<li>support.modyo.com</li>
<li>soporte.modyo.com</li>
<li>developers.modyo.com</li>
<li>desarrolladores.modyo.com</li>
</ul></td>
<td style="border: none;"><ul>
<li>www.modyo.com</li>
<li>es.modyo.com</li>
<li>pt.modyo.com</li>
<li>global.modyo.com</li>
</ul></td>
</tr></table>
:::

:::warning Attention
These hosts are reserved by Modyo. They are not available as hosts for your web apps:
<table style="border: none;"><tr style="border: none;">
<td style="border: none;"><ul>
<li>404</li>
<li>422</li>
<li>500</li>
<li>activate</li>
<li>admin</li>
<li>api</li>
</ul></td>
<td style="border: none;"><ul>
<li>auth</li>
<li>callback</li>
<li>code_generators</li>
<li>crossdomain</li>
<li>dist</li>
<li>login</li>
</ul></td>
<td style="border: none;"><ul>
<li>logout</li>
<li>mailing</li>
<li>panel</li>
<li>password</li>
<li>profile</li>
<li>rails</li>
</ul></td>
<td style="border: none;"><ul>
<li>realms</li>
<li>robots</li>
<li>session</li>
<li>signup</li>
<li>sitemap</li>
<li>status</li>
</ul></td>
<td style="border: none;  vertical-align: top;"><ul>
<li>uploads</li>
<li>users</li>
<li>welcome</li>
<li>widgets</li>
</ul></td>
</tr></table>
:::

### Stages

Using stages in your web application allows you to implement a continuous integration and deployment (CI/CD) approach to add new functionality without affecting what is already published.

The main advantages of having different stages in your web apps are:

- Focused development: Develop in the current stage without modifying the published web app.
- Flexible customization: Create and use local variables, widgets, and templates to customize the experience or visualize changes.
- Easy integration: When you finish the changes in one stage, you can integrate them into another.

:::warning Warning
- A web app can have a maximum of four stages.
- Changes you make to a stage are only reflected in that stage.
- Stages are only available for web applications.
- Custom PWAs and redirections are disabled in stages. They can only be used in the `main` stage.
- The team members section is separate in each `main` stage. Add members to enable team review.
- You can have the same members with different roles and permissions for each stage.
:::

#### Add a New Stage

To add a new stage to your web app, follow these steps:

1. In the side menu, click channels.
1. Select your web application.
1. Click on application settings.
1. Click on stages.
1. Click on **+ new stage**.
1. Select the source stage and name your new stage.
1. Click **create**.


:::tip Tip
In the summary section of your web application, you can see the details of the current stage. You can also click on the name of your web app to display a list of its stages and navigate between them.
:::

#### Synchronize a Stage

:::warning Attention
The platform does not allow you to synchronize changes that have not yet been published. Make sure you don't have any pending changes to publish before starting the synchronization.
:::

To synchronize a stage, follow these steps:

1. In the side menu, click channels.
1. Click on the name of your web application and select the stage you want to synchronize from.
1. In the summary view, click **synchronize**.
1. In the synchronizations view, select the stage you want to synchronize to. In this view, you can see all the elements with differences between the selected stages. Click on view for more details on the changes.
1. Check the boxes for the elements you want to synchronize.
1. Click on **synchronize**


:::warning Attention
Elements of a stage associated with a segment are not synchronized. You must repeat the process manually in the new stage, once the synchronization is complete.
:::

#### Delete a Stage

To delete a stage, follow these steps:
1. In the side menu, click channels.
1. Click on the name of your web application and select the stage you want to delete.
1. Click on application settings.
1. Click on General.
1. In the danger zone section, click **delete stage**.
1. Enter the name of your stage.
1. Click **delete**.


:::warning Warning
Once you confirm the deletion, Modyo starts an asynchronous process, and you will not be able to access the stage again.

Deleting a stage deletes all elements associated with that stage in the web application, including pages and widgets. In addition, the configuration of equipment, roles, and other relevant aspects related to the stage are eliminated.
:::

### Team Review

Team Review is a tool that allows you to control the content publication process in Modyo.

By activating Team Review using the **Enable team review** checkbox, you establish that each item must go through different review stages before it can be published.

Once you have enabled team review, you can perform the following actions:

- Define the **number of approvals** required for an item to be published.
- **Restrict reviewer selection** - Only the person submitting for review can select who should review the content, and only those reviewers can approve the content.
- **Force review** - By activating this option, at least one of the users designated as reviewers must approve the item before publication.
- **Require all** - With this option active, you require that all users designated as reviewers approve the item before it can be published.


### Team Members

To efficiently organize and manage work in Modyo, you can select the team members who will participate in the development of each site, granting them access to writing, reviewing, and/or publishing tasks.

When creating a site, the administrator can manually assign users and the default roles that enable each of the functions.


#### Add a New Member
To add a new member to your site, follow these steps:

1. From the Modyo Platform main menu, expand the **Channels** section.
1. Select your site.
1. Expand **Site Settings**.
1. Click on **Team Members**.
1. Press the **+ Add Member** button.
1. Search for and select the user you want to add to the site and choose a role for them.
1. Click **Add**.

#### Modify a Role
To modify an administrator's role, follow these steps:
1. Click on the administrator's name.
1. In the modal that opens, select the new role.
1. Press **Update** to confirm the change.

Available roles are:

- **Viewer**: This user can view entries, view differences between versions, and leave comments. They can also access the synchronization view and view pending changes to synchronize. This role is not authorized to perform any action that implies a change in the platform.
- **Developer**: This user is in charge of the structural resource development. They can create, modify, and submit pages, widgets, menus, and templates for review. All actions performed by a Developer must go through a review process before publication. This role does not have permissions to publish, delete, or _rollback_ to previous versions of the resources, nor to modify the site's configuration. There is a variant of this role called Developer CLI, which in addition to the permissions of a Developer, allows updating widgets from external applications, such as the [modyo-cli](/en/platform/channels/widgets#modyo-cli).
- **Developer CLI**: Can create, modify, and submit pages, widgets, the menu, and templates for review. In addition, they can push widgets from external applications.
- **Reviewer**: This role allows for the correction, approval, or discarding of the work done by Developers. They can create, modify, submit for review, and approve pages, widgets, menus, and templates. They can also publish when review conditions are met. They cannot edit the site settings.
- **Admin**: The Site Administrator has the same privileges as the previous roles and has the ability to configure the entire site. This includes the creation, modification, submission for review, and approval of pages, widgets, menus, and templates. In addition, they can publish without requiring team review validation.

#### Delete an Administrator
To remove an administrator from the site, follow these steps:
1. Check the box next to the administrator's name.
2. Click on the **Delete** button at the end of the list, at the bottom left of the screen.

### Custom Redirects

Modyo has a custom redirect system that will allow you to take a URL from your site and automatically redirect it via a 301 or 302 code to another section of the site.

In this view, you will find a table with all the redirects that currently exist on the site. You can search by path or description.

To create a new redirect, click on the **New** button in the upper right corner of the view. Fill in the **_Source URL_** and **_Destination URL_** fields and the redirection code, then save the changes.

:::warning Attention
The redirects table is the second to last in precedence, so if there is a URL on the site that points to a [page](/en/platform/channels/pages) or a default view, you will see that view instead of being redirected through the custom redirects table.
:::

In addition to creating redirects one by one, you can import a [CSV file](/assets/examples/custom-redirections.csv) with up to 1000 redirects.

:::warning Warning
The required columns to import redirects are origin and destination.

You can select a 301 or 302 response code for all elements without having to add an additional column.

If you are importing a redirect with an already registered origin, you will not be able to start the import process. Adjust your CSV file by deleting the row with the existing origin, or delete the custom redirect record from the site where you are trying to import the origin.
:::

The hierarchy of locations on Modyo sites follows this order:

1. [Default views (Home, search)](/en/platform/channels/templates)
1. [Pages](/en/platform/channels/pages)
1. Custom Redirects
1. [Site 404 error settings](/en/platform/channels/sites#privacy)

:::warning Conditions for a redirect
For a redirect to be successful, the source path cannot exist or must be unpublished. If the source is a published page with subpages, you must unpublish the subpages before unpublishing the main page.
:::

### Security Headers

Enable this module for your site to configure HTTP security headers. Please note that this action cannot be undone. Once enabled, you will have full control over the headers you want to use.

#### HTTP Strict Transport Security (HSTS)

Indicates to the browser that it can only access the site via HTTPS.
- **Duration**: Sets the time the browser accesses the site only via HTTPS.
- **Preload**: Includes the preload directive. For more information, see [HSTS Preload List Submission](https://hstspreload.org/).
- **Include subdomains**: Applies the HSTS rule to all subdomains on the site.

#### Referrer-Policy

The _header_ `Referer` contains information from the previous web page from which it is linking. With the _header_ `Referrer-Policy`, you can control how much information should be included in the _header_ `Referer`.

- **no-referrer**: Does not send _referrer_ information.
- **no-referrer-when-downgrade**: Does not send _referrer_ information to a less secure destination.
- **origin**: Sends only the origin domain, removes paths and _query string_.
- **origin-when-cross-origin**: Sends _referrer_ information for _requests_ from the same origin. Removes paths and _query string_ for other destinations.
- **same-origin**: Sends _referrer_ information only for _requests_ from the same origin.
- **strict-origin**: Sends the origin domain only for _requests_ of the same security level and does not send _referrer_ information to less secure destinations.
- **strict-origin-when-cross-origin**: Sends _referrer_ information for _requests_ from the same origin. Sends the origin only if the security level is the same, and does not send _referrer_ information to less secure destinations.
- **unsafe-url**: Always sends _referrer_ information.

#### X-Frame-Options

Indicates whether your site can be included in a `frame`, `iframe`, `embed`, or `object`.
- **DENY**: The site cannot be displayed in a _frame_.
- **SAMEORIGIN**: The site can be displayed in _frames_ from the same domain.

#### X-Content-Type-Options

Indicates that the _MIME types_ announced in the _header_ `Content-Type` must be followed to avoid _MIME type sniffing_.

#### Content-Security-Policy (CSP)

Controls which resources the browser can load on the site to mitigate data injection attacks and _cross-site scripting_. The default value *allows loading resources from anywhere*, so it is important to design a content security policy appropriate for your site.

Freely specify your content security policy in the text area. For a complete guide on how to write your policy, see [Content Security Policy (CSP) from Mozilla Developer Network.](https://developer.mozilla.org/es/docs/Web/HTTP/CSP)

:::warning Attention
A very strict value can interfere with some features like [Google Tag Manager](/en/platform/channels/sites#google-tag-manager), [PWA](/en/platform/channels/sites#pwa), [Widgets](/en/platform/channels/widgets), and [Asset Manager](/en/platform/content/asset-manager).
:::

A production-ready policy must ensure that all resources, such as images and stylesheets, are loaded from trusted sources and requires that all scripts are secure and reliable for the application. For example, a strict policy for the _minimal template_ would look like this:

```bash
default-src 'self'; img-src 'self' https://cloud.modyocdn.com; font-src 'self' https://cloud.modyocdn.com http://cdn.materialdesignicons.com; style-src 'self' http://cdn.materialdesignicons.com; script-src 'self'
```

The policy must include a `default-src 'self'` directive, which serves as a _fallback_ for any other type of resource. It must also include `script-src` and `style-src` directives to avoid evaluating _inline_ `style` and `script` tags.

- **Nonce**: A CSP nonce will be automatically added by the server to the `script-src` and `style-src` directives if present.

If you have the nonce present in your policy, you can add the `script` and `style` _tags_ to the allowed list in your _templates_ using the `csp_nonce` variable.

```liquid
<script nonce="{{csp_nonce}}">
  alert("everything will be ok");
</script>
```

These tools can help you design a strong security policy:
- [Google CSP evaluator](https://csp-evaluator.withgoogle.com)
- [ReportURI](https://report-uri.com/home/analyse)
- [CSP validator](https://cspvalidator.org)

#### Permissions-Policy

Allows or denies the use of browser features and APIs for the site; for example, you can restrict privacy-sensitive APIs such as the camera or microphone and automatic video playback.

For a complete list of browser-compatible features, see the [MDN Feature Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy).

#### Cross Origin Embedder Policy (COEP)

Configures the embedding of cross-origin resources into the document. For example, if your document has a COEP header with a value of require-corp or credentialless, you can only access certain functions, such as SharedArrayBuffer or Performance.now(), with unrestricted timers.

For more information, see the [MDN Cross-Origin-Embedder-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy).

#### Cross Origin Opener Policy (COOP)

Allows you to ensure that a top-level document does not share a browsing context group with cross-origin documents.

COOP isolates the processing of your document, so potential attackers will not be able to access your global object if they open it in a popup, preventing a set of cross-origin attacks.

For more information, review the [MDN Cross-Origin-Opener-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy).

#### Cross Origin Resource Policy

Conveys the desire to block cross-origin/cross-site requests without CORS to the specified resource by the browser.

For more information, see the [MDN Cross-Origin-Resource-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy).


### Site Variables

Modyo has [global variables](/en/platform/core/key-concepts#global-variables) that you can use on multiple sites. However, you can also create specific variables for a particular site or overwrite the value of an existing global variable with a value specific to that particular site.

Using variables allows you to reuse HTML, JS, CSS, or text code across different sites, widgets, or templates. If you have code that is repeated in several parts of your account, you can assign that value to a variable to simplify your processes, and if you edit the variable's value, the change will be reflected wherever the variable is in use.

:::tip Tip
In global variables, you can use plain text, HTML, JavaScript, and CSS. However, it is important to note that you cannot use Liquid code within these variables. It is also important to remember that the content of global variables has a maximum limit of 65,535 characters.

To get the variable's value anywhere that accepts Liquid markup, use:<span v-pre>`{{vars.Name}}`</span>
:::

#### Create a Variable in Sites

To create a variable in sites, follow these steps:

1. From the main side menu, click **Channels**.
1. Select your **Site**.
1. Under **Site Settings**, click **Site Variables**. Here you can see the list of all global variables and site variables, their general information, and a button to copy their code into Liquid markup.
1. Click on **+ New Variable**.
1. Complete the **Name** and **Value** fields of the variable.
1. Click **Save**.

:::warning Attention
When using variables, Modyo follows a hierarchy of preference, where variables defined at the lowest level have priority. Variables defined in the widget will take precedence over variables defined on the site, and in turn, variables defined on the site will take precedence over variables defined at the account level.

Therefore, it is important to be cautious when defining variables in widgets or on the site, especially if you use the same name as the variables defined at the account level.

:::