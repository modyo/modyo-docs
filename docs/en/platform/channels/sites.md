---
search: true
sidebarDepth: 2
---

# Web applications

A web application or web app displays the content created in content and channels to create your personalized digital channel. All the development, design, and navigation flow is carried out in the web application.

A web app can be in one of these three states:

- **Enabled:** Default status of newly created web applications and those that are enabled for use.
- **Pending changes:** There are pending changes in the web application. An administrator can verify the changes and publish the web application.
- **Disabled:** The web application cannot be accessed.

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

## Review and joint publication

On the review and joint publication screen, you can see all the pending changes to be published in your web app. To view the changes, click on the **view** button.

### Joint Publication

To make a joint publication in your web application, follow these steps:

1. In the side menu, click **channels**.
1. Click on your web application.
1. In the summary screen you can see the pending changes to be published. Click on the **publish** button to preview and select the changes.
1. Select the changes you want to publish.
1. Click on the **publish** button.


:::tip Tip
If you click **publish** on a particular article (e.g. publish a page), the Review and Publish window will open with this article selected to see the pending changes.
:::

## Search

When you create a web application with Modyo, your users can search your web apps and all their content using the search function. This can be done using the `/search` URL or by accessing the dedicated search page.

### Enable or Disable Search

To enable or disable the search functionality, follow these steps:

1. In the side menu, click **channels**.
1. Click on your web application.
1. Click on **general**.
1. In the privacy section, enable or disable the **enable search** box, as required.
1. Click **save**.


### Search template

You can control the appearance and search functionality in your web app using the [template](/en/platform/channels/sites.html#search-template/) _search_.

This template is available by default in the templates section and contains all the Liquid code needed to carry out queries in your web app. By default, when making a query, the records are displayed in list form, with their title, description and a link to their address. You can modify the template to suit your needs.

To access this template:

1. In the side menu, click **channels**.
1. Select your web application.
1. Click **templates** in the side menu.
1. In the views section, in the right column, and under the search category, click **show**.

To access the search template, append _search_ or _search.json_ to the URL of your web app.

For example:
 - `test.modyo.com/mySite/search`
 - `test.modyo.com/mySite/search.json`


### Search.json

You can also use “search.json” to integrate the search engine in a more personalized way.

To access this API, add “search.json” to the URL of your web app along with your query. For example: test.modyo.com/mysite/search. json?query=MyQuery

Customize your queries as follows:


|  Parameter       |       Description    |
|------------------|----------------------|
| **query** | Make queries to the search API. This search engine performs queries on all published pages of your web app and on all public entries in the spaces linked to the web app. |
| **per_page** | Divide the total number of records by the number of pages selected. |
| **page** | Select the specific page you want to consult, in case there are multiple pages of records to query. |
| **multi=true** | Allows you to search in all the web applications in the account that have the search function enabled. |


## Web Application Settings

In the application configuration section, you can customize your web app so that your visitors, customers, developers, and administrators view your web app differently. As well as to optimize the SEO of your application.


### General

In this section you can configure:

- **Name of the application:** This field is used as the default title for the SEO of your web app.
- **Description**

:::warning Warning

Changes to the name and description are immediately reflected in Modyo. The update in the search results will be seen once the search engines complete their reindexing process.

:::
- **Application logo:** Image shown at the top left.
- **Application language:** The language in which your web app is available. The options are: Spanish, English, and Portuguese.
- **Time zone:** The timezone in which the date and time fields are displayed in the app. This setting affects all sections, including pages, navigation and templates, as well as Liquid's calls to the web application data.


:::warning Attention
The time in content is managed in the [general](https://https://docs.modyo.com/en/platform/core/configuration.html#configuration) section of the account settings.
:::

- **Google Tag Manager ID**: Add a Google Tag Manager identifier to insert scripts for tracking and measuring events.

By default, new Modyo themes include snippets to automatically inject Google Tag Manager scripts into tags `<head>`and`<body>`of web applications.

To access these snippets:

1. In the side menu, click on channels.
1. Select your web application.
1. Click on templates in the side menu
1. In the column on the right side, click on snippets and go to the general section. You can embed them in the _head_ snippet and in the _home_ and _base_ views.

**To create custom snippets:**

**For the _head_:**

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
2. Embed the snippet in the _head_ of the web app using {% snippet "gtm-head" %}, replacing “gtm-head” with the name you gave the snippet.

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

2. Embed the snippet inside the body tags of the _home_ and _base_ views using {% snippet "gtm-body" %}, replacing “gtm-body” with the name you gave the snippet.

With this configuration complete, when there is a value associated with the **ID field of Google Tag Manager**, the scripts will be automatically injected. This will allow you to create events in Google Tag Manager to record the actions of your users.



- **Favicon**: Image that appears in the address bar.
- **Apple icon**: Image viewed on mobile devices when using the site as an application.
- **Delete**: Permanently delete a site and all of its elements.

:::danger Danger
Erasing is irreversible, you must be completely sure when executing this action.

When you press the delete button, the system will ask you to enter the textual name of the site you want to delete to confirm the action. Once confirmed, you won't be able to access the site or its elements again.
:::



**Visualization**
- **Favicon:** Image displayed next to the address bar.
- **Apple icon:** An image that is displayed on iOS mobile devices when you mark the application as a favorite.

**Privacy**
- **Audience:** All visitors can view the web app and its content without having to log in.
- **Private:** Only users who are logged in to Modyo can view the web app.
- **Show home to public visitors:** The home page of the web app is shown to all visitors, even those who are not logged in. When navigating to any other page, registration or login is required.
- **Redirect to home when a URL is not found:** By default, the web application shows a 404 error when the user accesses a non-existent URL. If you check this option, the user will be redirected to the home page of the web app instead of to the 404.
- **Enable search:** Activates search function in the web app.
- **Enable search across multiple applications**

:::tip Tip
If you enable search in your web app and use the `multi=true` parameter from another web app, you can also search in your current app.
:::


**Danger Zone**

::: danger Danger
Use caution when modifying these options, as they can affect access to your web application and your users' experience.
:::

- **Change host:** This action modifies the visibility and accessibility of the application. Making a host change can impact the visibility and availability of the web application.
- **Change realm:** Shows the application's realm. When you change the realm, you lose all the privacy settings in your web apps, pages, and browsing.
- **Change status:** Changes the status of the application, the options are:
    * Enabled: Editable and visible to the public. This is the default state of a web app.
    * Editable: Modifiable but not visible to the public. Requires login to access. Robots.txt, PWAs, and the manifest are disabled in this state.
    * Disabled: Not editable or visible. In this state, it's not accessible or visible to users.
- **Delete app:** Initiates the asynchronous removal of the application and all of its elements, such as pages and widgets.

::: danger Danger
Deleting a web application is irreversible.

When you press the delete button, the system asks you to enter the textual name of the application to confirm the action. Once confirmed, you can't access the application or its elements.
:::

### SEO

SEO (Search Engine Optimization) is essential for search engine positioning. Users rely on good SEO settings to find your application.

You can configure:

- **Tagline:** Description for search engines, below the name of the web application.
- **Automatically update the sitemap.xml file for me:** Allows Modyo to create and maintain the sitemap.xml automatically. Disable this option to use a custom site map.
- **Sitemap:** This XML file allows search engines to index site content.
- **Custom sitemap.xml file:** File that allows search engines to index the content of the web app.
- **Automatically update the robots.xml file for me:** Allows Modyo to automatically create and maintain robots.txt. Disable this option to provide personalized instructions to web app crawlers.
- **Custom robots.txt file:** File that tells web crawlers what parts of the application they may or may not index.

:::tip Tip
The robots.txt and sitemap.xml files are only visible with custom domains. Otherwise, they are found only at the platform level, have default values and cannot be customized.
:::

- **Custom meta tags:** Allows you to configure meta tags for all pages and their default values. Click **+ new meta tag** to create a new one.
- **Replicate metatag on pages:** When creating a new meta tag, select this option to spread the meta tag and its value across all pages of the web app. You must save the changes to meta tags and publish all the modified pages for the new meta tags to take effect.

:::warning Attention
Only administrators of the application can add meta tags. Developers can add and remove meta tags page by page.
:::

#### On-page vs. off-page SEO

Also known as on-site and off-site SEO, these terms refer to actions you can do on and off a web page to improve visibility in search engines. For better positioning, we recommend using both strategies together.

##### On-Page SEO

To improve on-page SEO:

- Use keywords in the SEO section of the platform and on your pages.
- Include keywords in the URL.
- Add relevant links to other sections of your application.



##### Off-Page SEO

To improve off-page SEO:

- Promote content on social networks and other distribution channels.
- Encourage alliances and collaborations with authoritative media on the subject.



### PWA

Modyo allows the implementation of Progressive Web Apps (PWA) within the digital channels that are being developed. For this, it offers two options to implement them.

#### Manifest

The manifest is used to indicate how you want a browser to display your digital channel. You can activate it in Modyo by checking the box. Activating it creates this path:

```bash
https://[domain]/[site-name]/manifest.json
```

The manifest must be implemented on each of the pages where the PWA is developed, through [Templates](/en/platform/channels/templates.html), in the ``head`` snippet.

You can create and modify the manifest in the next field, allowing you to add changes without having to leave the view.

:::warning Attention
If you make changes to the manifest, be sure to save them using the **save** button at the top of the screen to avoid losing the changes.
:::

:::warning Attention
If you don't customize the manifest, but add the path in Templates, it will be blank and no action will be taken.
:::

#### Service Worker

The Service Worker allows the digital channel to perform different actions or keep certain data connected within the cache to provide a structure in case of a bad connection. You can enable the Service Worker through the corresponding box. Activating it creates the following path:

```bash
https://[domain]/[site-name]/serviceworker.js
```

You can modify and program the Service Worker in the following field, adapting it to your routes and using the available variables.

:::warning Attention
If you deactivate the Service Worker, the page will continue to work only in its basic functions and without the benefits offered by this option.
:::

:::warning Attention
If you don't customize or save the code, the site won't have the features you're designing.
:::

### Domains

The Domains section allows you to know the public location of your site, therefore it's essential that each member of the platform is informed of changes that are made here.

The variables you can change in this section are:

- **Host**: Where your site is located within the server.
- **Activate custom domains**: By activating this option, you can have sites with custom URLs or _custom hosts_ within the domain.
- **Primary domain**: This is the main address of your site. Alternative domains redirect to this domain through HTTP 302.
- **Alternative domain 1 & 2**: These secondary addresses redirect if the primary one fails.

:::warning Warning
Modyo has reserved domains that cannot be used as custom site domains:
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
<li>en.modyo.com</li>
<li>pt.modyo.com</li>
<li>global.modyo.com</li>
</ul></td>
</tr></table>
:::

:::warning Attention
Modyo has reserved hosts for sites, therefore, you can't use them as hosts for your sites:
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

Using stages in your web application allows you to implement a continuous integration and deployment (CI/CD) approach to add new functionality without affecting what's already published.

The main advantages of having different stages in your web apps are:

- Focused development: Develop at the current stage without modifying the published web app.
- Flexible customization: Create and use local variables, widgets, and templates to customize the experience or visualize changes.
- Easy integration: When you finish the changes in one stage, you can integrate them into another.

:::warning Warning
- A web app can have a maximum of four stages.
- The changes you make to a stage are only reflected in that stage.
- Stages are only available for web applications.
- Custom PWAs and redirections are disabled in stages. They can only be used in the `main` stage.
- The team members section is separate on each stage `main`. Add members to enable team review.
- You can have the same members with different roles and permissions for each stage.
:::

#### Add a new stage

To add a new stage to your web app, follow these steps:

1. In the side menu, click on channels.
1. Select your web application.
1. Click on application settings.
1. Click on stages.
1. Click on **+ new stage**.
1. Select the source stage and name your new stage.
1. Click **create**.


:::tip Tip
In the summary section of your web application you can see the details of the current stage. You can also click on the name of your web app to display a list of its stages and navigate between them.
:::

#### Synchronize a stage

:::warning Attention
The platform does not allow you to synchronize changes that have not yet been published. Make sure you don't have any pending changes to publish before starting the synchronization.
:::

To synchronize a stage follow these steps:

1. In the side menu, click on channels.
1. Click on the name of your web application and select the stage you want to synchronize.
1. In the summary view, click **synchronize**.
1. In the synchronizations view, select the stage you want to synchronize to. In this view you can see all the elements with differences between the selected stages. Click on view for more details on the changes.
1. Check the boxes for the items you want to synchronize.
1. Click on **synchronize**


:::warning Attention
The elements of a stage associated with a segment are not synchronized. You must repeat the process manually in the new stage, once the synchronization is complete.
:::

#### Delete a stage

To delete a stage, follow these steps:
1. In the side menu, click on channels.
1. Click on the name of your web application and select the stage you want to delete.
1. Click on application settings.
1. Click on General.
1. In the dangerous zone section, click **delete stage**.
1. Enter the name of your stage.
1. Click **delete**.


:: :warning Warning
Once you confirm the deletion, Modyo starts an asynchronous process and you won't be able to access the stage again.

Deleting a stage deletes all the elements associated with that stage in the web application, including pages and widgets. In addition, the configuration of equipment, roles and other relevant aspects related to the stage are eliminated.
:::

### Team Review

Team Review is a tool that allows you to control the process of publishing content in Modyo.

By activating Team Review using the **Enable Team Review** box, you establish that each item must go through different stages of review before it can be published.

Once you've enabled team review, you can take the following actions:

- Define the **number of approvals** necessary for an item to be published.
- **Restrict the selection of reviewers** - Only the submitter for review can select who should review the content and only those reviewers can approve the content.
- **Force review** - By activating this option, at least one of the users designated as reviewers must approve the item before publication.
- **Require all** - With this option active, you require that all users designated as reviewers approve the item before it can be published.


### Team Members

To efficiently organize and manage the work in Modyo, you can select the team members who will participate in the development of each site, giving them access to writing, reviewing and/or publishing tasks.

When creating a site, the administrator can manually assign users and the default roles that enable each of the functions.


#### Add a new member
To add a new member to your site, follow these steps:

1. From the Modyo Platform main menu, open the **Channels** section.
1. Select your site.
1. Expand **Site Settings**.
1. Click on **Team Members**.
1. Press the **+ Add Member** button.
1. Search for and select the user you want to add to the site and choose a role for that user.
1. Click **Add**.

#### Modify a role
To modify an administrator's role, follow these steps:
1. Click on the administrator's name.
1. In the modal that opens, select the new role.
1. Press **Update** to confirm the change.

The available roles are:

- **Viewer**: This user can view entries, view differences between versions, and leave comments. They can also access the synchronization view and view the changes that are pending synchronization. This role is not authorized to take any action that constitutes a change to the platform.
- **Developer**: This user is in charge of structural resource development. They can create, modify, and submit pages, widgets, menus, and templates for review. All actions taken by a Developer must go through a review process before publication. This role does not have permissions to publish, delete, or _rollback_ to previous versions of the resources, nor to modify the configuration of the site. There is a variant of this role called Developer CLI, which in addition to the permissions of a Developer, allows updating widgets from external applications, such as the [modyo-cli](/en/platform/channels/widgets.html#modyo -cli).
- **Developer CLI**: Can create, modify and submit pages, widgets, the menu and templates for review. In addition, they can push widgets from external applications.
- **Reviewer**: This role allows for the correction, approval or discarding of the work done by the Developers. It can create, modify, submit for review, and approve pages, widgets, menus, and templates. It can also publish when the review conditions are met. It cannot edit the site settings.
- **Admin**: The Site Administrator has the same privileges as the previous roles and has the ability to configure the entire site. This includes the creation, modification, submission for review and approval of pages, widgets, menus and templates. In addition, they can publish without requiring team review validation.

#### Delete an administrator
To remove an administrator from the site, follow these steps:
1. Check the box next to the administrator's name.
2. Click on the **Delete** button at the bottom of the list, at the bottom left of the screen.

### Custom Redirects

Modyo has a custom redirect system that will allow you to take a URL from your site and automatically redirect it via a 301 or 302 code to another section of the site.

In this view you will find a table with all the redirects that currently exist on the site. You can search by path or description.

To create a new redirect, click on the**New** button in the upper right corner of the view. Fill in the fields **_URL_ of Source** and **_URL_ of destination** and redirection code and then save the changes.

:::warning Attention
The redirect table is the second to last in precedence, so if there is a URL on the site that points to a [page](/en/platform/channels/pages.html) or a default view, you'll see that view instead of being redirected through the custom redirection table.
:::

In addition to creating redirects one by one, you can import a [CSV file](/assets/examples/custom-redirections.csv) with up to 1000 redirects.

:::warning Warning
The required columns to import redirects are origin y destination.

You can select a 301 or 302 response code for all elements without having to add an additional column.

If you're importing a redirect with a source that's already registered, you won't be able to start the import process. Adjust your CSV file by deleting the row with the existing source, or delete the record of custom redirects from the site where you're trying to import the source.
:::

The hierarchy of locations on Modyo sites follows this order:

1. [Default views (Home, search)](/en/platform/channels/templates.html)
1. [Pages](/en/platform/channels/pages.html)
1. Custom Redirects
1. [Site 404 error settings](/en/platform/channels/sites.html#privacy)

:::warning Conditions for a redirect
For a redirect to be successful, the source path cannot exist or must be unpublished. If the source is a published page with subpages, you must unpublish the subpages before you unpublish the main page.
:::

### Security Headers

Enable this module for your site to configure HTTP security headers. Please note that this action cannot be undone. Once enabled, you'll have full control over the headers you want to use.

#### HTTP Strict Transport Security (HSTS)

Tells the browser that it can only access the site using HTTPS.
* **Duration**: Sets the time that the browser accesses the site via HTTPS only.
* **Preload**: Includes the preload policy. For more information, see [HSTS Preload List Submission](https://hstspreload.org/).
* **Include subdomains**: Applies the HSTS rule to all subdomains on the site.

#### Referrer-Policy

The _header_ `Referer` contains information from the previous web page from which it is linking, with the _header_ `Referer-Policy` you can control how much information should be included in the _header_ `Referer`.

* **no-referrer**: Does not send _referrer_ information.
* **no-referrer-when-downgrade**: Does not send _referrer_ information to a less secure destination.
* **origin**: Sends only the source domain, removes the paths and _query string_.
* **origin-when-cross-origin**: Sends _referrer_ information for _requests_ from the same source. Deletes the routes and _query string_ for other destinations.
* **same-origin**: Sends _referrer_ information for same origin _requests_ only.
* **strict-origin**: Sends the origin domain only for same security level _requests_, and doesn't send _referrer_ information to less secure destinations.
* **strict-origin-when-cross-origin**: Sends _referrer_ a _requests_  information from the same source. Sends the source only if the security level is the same, and does not send _referrer_ information to less secure destinations.
* **unsafe-url**: Always sends _referrer_ information.

#### X-Frame-Options

Indicates whether your site can be included in a `frame`, `iframe`, `embed`, or `object`.
* **DENY**: The site cannot be displayed in a _frame_.
* **SAMEORIGIN**: The site can be displayed in _frames_ with the same domain.

#### X-Content-Type-Options

Indicates that _MIME types_ announced in the _header_ `Content-Type` must be followed to avoid _MIME type sniffing_.

#### Content-Security-Policy (CSP)

Controls what resources the browser can load on the site to mitigate data injection attacks and _cross site scripting_. The default value *allows you to load resources from anywhere*, so it's important to design a content security policy that's right for your site.

Freely specifies your content security policy in the text area. For a complete guide on how to write your policy, see [Content Security Policy (CSP) from Mozilla Developer Network.](https://developer.mozilla.org/en/docs/Web/HTTP/CSP)

:::warning Warning
A very strict value can interfere with some features like [Google tag manager](/en/platform/channels/sites.html#google-tag-manager), [PWA](/en/platform/channels/sites.html#pwa), [Widgets](/en/platform/channels/widgets.html) and [Asset Manager](/en/platform/content/asset-manager.html).
:::

A production-ready policy must ensure that all resources, such as images and style sheets, are loaded from reliable sources and requires that all scripts be secure and reliable for the application. For example, a strict policy for the _minimal template_ would look like this:

```bash
default-src 'self'; img-src 'self' https://cloud.modyocdn.com; font-src 'self' https://cloud.modyocdn.com http://cdn.materialdesignicons.com; style-src 'self' http://cdn.materialdesignicons.com; script-src 'self'
```

The policy must include a `default-src 'self'` directive, which serves as a _fallback_ for any other type of resource. You should also include `script-src` and `style-src` directives to avoid evaluating _inline_ `style` and `script` tags.

* **Nonce**: A CSP nonce will be added automatically by the server to the `script-src` and `style-src` directives if present.

If you have the nonce present in your policy, you can add the `script` and `style` _tags_ to the allowed list in your _templates_ using the `csp_nonce` variable.

```liquid
<script nonce="{{csp_nonce}}">
  alert("everything will be ok");
</script>
```

These tools can help you design a strong security policy:
* [Google CSP evaluator](https://csp-evaluator.withgoogle.com)
* [ReportURI](https://report-uri.com/home/analyse)
* [CSP validator](https://cspvalidator.org)

#### Permissions-Policy

Allows or denies the use of browser features and APIs for the site; for example, you can restrict privacy-sensitive APIs such as the camera or microphone and the automatic playback of videos.

For a full list of browser-compatible features, see the [MDN Feature Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy).

#### Cross Origin Embedder Policy (COEP)

Configures the insertion of cross-source resources into the document. For example, if your document has a COEP header with a value of Require-Corp or Credentialless, you can only access certain functions, such as SharedArrayBuffer or Performance.now () objects, with unrestricted timers.

For more information, see the [MDN Cross-Origin-Embedder-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy).

#### Cross Origin Opener Policy (COOP)

Allows you to ensure that a top-level document doesn't share a browsing context group with cross-source documents.

COOP isolates the processing of your document, so potential attackers won't be able to access your global object if they open it in a popup, preventing a set of cross-origin attacks.

For more information, review the [MDN Cross-Origin-Opener-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy).

#### Cross Origin Resource Policy

Conveys the desire to block cross-origin/cross-site requests without cors to the specified resource by the browser.

For more information, see the [MDN Cross-Origin-Resource-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy).


### Site Variables

Modyo has [global variables](/en/platform/core/key-concepts.html#global-variables) that you can use on multiple sites. However, you can also create specific variables for a particular site or overwrite the value of an existing global variable, with a value specific to the particular site.

Using variables allows you to reuse HTML, JS, CSS, or text code across different sites, widgets, or templates. If you have code that is repeated in several parts of your account, you can assign that value to a variable to simplify your processes and if you edit the value of the variable, the change will be reflected everywhere the variable is in use.

:::tip Tip 
In global variables, you can use plain text, HTML, JavaScript, and CSS. However, it's important to note that you can't use Liquid code inside these variables. It is also important to remember that the content of global variables has a maximum limit of 65,535 characters.

To get the value of the variable anywhere that accepts Liquid markup, use:<span v-pre>`{{vars.Name}}`</span>
:::

#### Create a variable in sites

To create a variable in sites, follow these steps:

1. From the main side menu, click **Channels**.
1. Select your **Site**.
1. Under **Site Settings**, click **Site Variables**. Here you can see the list of all global variables and site variables, their general information and a button to copy their code into Liquid markup.
1. Click on **+ New Variable**.
1. Complete the **Name** and **Value** fields of the variable.
1. Click **save**.

:::warning Attention 
When using variables, Modyo follows a hierarchy of preference, where variables defined at the lowest level have priority. The variables defined in the widget will take precedence over the variables defined on the site, and in turn, the variables defined on the site will take precedence over the variables defined at the account level.

Therefore, it's important to use caution when defining variables in widgets or on the site, especially if you use the same name as the variables defined at the account level.

:::
