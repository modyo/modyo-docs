---
search: true
sidebarDepth: 2
---

# Sites

A site is where the content created in [Content] (/en/platform/content/) and [Channels] (/platform/channels/) is displayed in order to create your personalized digital channel. All development, design and navigation flows take place on a site.

A site can be in one of three states:

- **Enabled**: Default status of newly created sites and those that are enabled for use.
- **Pending changes**: This status appears when there are changes pending on the site. An administrator can click **Publish** to access the **Review and Publish** section, in order to verify the changes and publish the site.
- **Disabled**: When a site is in this state, it is not possible to access it.

## Create a Site

To create a new site, follow these steps:

1. On the side menu, click **Channels**.
1. Click **+ New Site**.
1. Enter the name and host (the site's path).
1. If necessary, select which realm the site belongs to.
1. Click **Create**.

Once the site is created, it will be automatically enabled and the system will take you to the **Summary** page.

:::warning Attention
In the site index, you will only see the sites in which you have a role and are part of the team.
:::

## Joint Review and Publication

On the joint review and publication screen, you can see all the changes slated for publication on your site. To view the changes, click the **View** button.

### Joint Publication

To make a joint publication on your site, follow these steps:

1. In the Modyo Platform main menu, expand **Channels** and click **Sites**.
1. Click on your site.
1. On the Summary screen, click **Publish**.
1. Here you can see all pending changes. Select what you want to publish and click **Publish**.

:::tip Tip
If you click **Publish** on a particular article (e.g. publish a page), the Review and Publish window will open with this article selected to see the pending changes.
:::

## Search

By creating a site with Modyo, your users can search your sites and all their content using the search function. This can be done using the `/search` URL or by accessing the dedicated search page.

### Enable Search

To enable or disable search functionality on a site, follow these steps:

1. In the side menu, click **Site Settings**.
1. Click on **General**.
1. In the **Privacy** section, check the **Enable search** box.
1. Click **Save**.


### Search template

You can control the look and feel of your site using the [template] (/en/platform/channels/sites.html #plantilla -de-search/) _search_.

This template is available by default in the Templates section, in the “Views/Search/Show” category. It contains all the Liquid code you need to carry out queries on your site.

You can access it using the URL of your site and attaching _search_ or _search.json_. For example:
 - `test.modyo.com/mySite/search`
 - `test.modyo.com/mySite/search.json`

By default, when making a query, the records are displayed in the form of a list with their title, description and a link to their address. You can modify the template and expand its functionalities to adapt it to your specific needs.

### Search.json

You can also use search.json to integrate the search engine. This API allows you to integrate the search engine in a more personalized way.

To access the API, add “search.json” to the URL of your site along with your query. For example: test.modyo.com/mysite/search. json?query=myQuery

You can customize your queries as follows:

|  Parameter       |       Description    |
|------------------|----------------------|
| **query** | With the string **query** you can make queries to the search API. This search engine performs queries on all published pages on your site and on all public entries in the spaces linked to the site. |
| **per_page** | This pagination parameter allows you to divide the total number of records by the number of pages you select. |
| **page** | This parameter allows you to select the specific page you want to consult, if there are multiple pages of records for the query. |
| **multi=true** | This parameter allows you to search all the sites in the account that have the search function enabled. |


## Site settings

Configuring the site allows you to open the platform options, so that visitors, customers, developers and site administrators can view it differently. In addition, you can modify options to improve SEO and the presentation of some data that the public has access to when visiting the pages.

### General

In this section, you can configure the following data for your site:

- **Site Name**:  The name of your site, this field is used as the default title for your site's SEO.
- **Description**: A brief description of your site.
- **Site Logo**: Image shown at the top left as the site's logo.
- **Language**: The language in which your site is available. The options are: Spanish, English and Portuguese.
- **[Team Review](/en/platform/core/key-concepts.html)**
- **Time Zone**: The time zone in which the date and time fields are displayed within the site. This setting affects all sections of the site, including Pages, Navigation and Templates, as well as Liquid calls to site data.

:::warning Attention
The time in the content is managed in the Account Settings.
:::

- **Google Tag Manager ID**: Allows you to add a Google Tag Manager identifier to easily insert scripts to be able to make use of Google's event registration tool.
- **Favicon**: Image that appears in the address bar.
- **Apple icon**: Image viewed on mobile devices when using the site as an application.
- **Delete**: Permanently delete a site and all of its elements.

:::danger Danger
Erasing is irreversible, you must be completely sure when executing this action.

When you press the delete button, the system will ask you to enter the textual name of the site you want to delete to confirm the action. Once confirmed, you won't be able to access the site or its elements again.
:::

#### Google Tag Manager

By default, the new Modyo themes include the necessary snippets to automatically inject Google Tag Manager scripts into both the `tag <head> `and the tag` <body> `of the sites. You can find these snippets in the [Templates] section (/en/platform/channels/templates.html), category _Snippets/General_ and they are embedded both in the _head_ snippet and in the _home_ and _base_ views.

If you don't have these snippets, you can create a custom snippet and then embed Google Tag Manager on your site.

1. Create a custom snippet with the following code and then embed the snippet in the site's head using `{% snippet "gtm-head" %}`, replacing "gtm-head" with the name you gave the snippet.

**Google Tag Manager for the _head_**
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

2. Create a custom snippet with the following code and then insert it into the body tags of the home and base views using `{% snippet "gtm-body" %}`, replacing "gtm-body" with the name you gave the snippet.

**Google Tag Manager for the _body_**
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

With this configuration completed, when there is a value associated with the **Google Tag Manager ID** field in the General Settings section of the site, the scripts will be automatically injected and you can start creating events in Google Tag Manager to record the actions of your users.

#### Privacy

This section allows you to configure your site's privacy restrictions.

- **Public**: All visitors can view the site without logging in. The content of the site is accessible to any user.
- **Private**: Only users logged in to Modyo can view the site.
- **Show home to public visits**: The home page of the site is shown to all visitors, even those who are not logged in. However, when navigating to any other page of the site, users will be asked to register or log in.
- **Redirect to home when a URL is not found**: By default, the site shows a 404 response (page not found) when accessing a URL that doesn't exist. However, if you check this option, instead of receiving a 404, the user will be redirected to the home page of the site.
- **Enable search**: When checking this option, you enable the search function on the site.

:::tip Tip
If you enable search on your site and use the `multi=true` parameter from other sites, you can also search your current site.
:::


#### Danger Zone

These options pose a risk to the experience of the site and its users. Proceed carefully.

- Change realm: This field displays the site's realm. When changing your realm, you lose all the privacy settings on your sites, pages and navigation.
- Site Status: Change the status of the site between three different options.
    * Enabled: Allows the site to be editable and visible to the public. This is the default state of a site.
    * Editable: Allows a site to be modified, but not visible to the public. Users must log in to Modyo Platform to access the site. Robots.txt, PWAs, and the manifest are disabled in this state.
    * Disabled: Prohibits both editing and visibility of a site. In this state, the site is not accessible or visible to users.
- Delete Site: This action starts the process of asynchronously deleting the site. Once the deletion begins, the site is no longer accessible. All elements contained in the site, such as pages and widgets, will also be deleted.


### SEO

SEO (Search Engine Optimization) is essential for visibility across different search engines. Users depend on good SEO settings to get to the site.

The options listed in this section help improve your SEO across a particular channel:

- **Tagline**: Description that appears in search engines, below the name of the site.
- **Automatically update the sitemap.xml file for me**: This option allows Modyo to automatically create and maintain the sitemap.xml file. If you want to keep a custom sitemap, disable this option.
- **Sitemap**: This XML file allows search engines to index the content of the site.
- **Automatically update the robots.xml file for me**: By enabling this option, Modyo will automatically create and maintain the robots.txt file. Disable this option to provide personalized instructions to site crawlers.
- **Robots.txt**: This file is part of the Robot Exclusion Protocol (REP), a group of web standards that regulate how robots crawl the web, access and index content and serve it to users. This file determines whether or not certain user agents (web tracking software) can crawl parts of a website. Specifies tracking instructions by “allowing” or “prohibiting” the behavior of certain or all user agents.

:::tip Tip
The robots.txt and sitemap.xml files are only visible on the site if custom domains are used. Otherwise, robots.txt and sitemap.xml are only found at the platform level, have their default values, and cannot be customized.
:::

- **Custom meta tags**: Allows you to set meta tags and their default values for all pages.
- **Replicate meta tag on pages: ** Propagates the meta tag and its value on all pages of the site. It is necessary to save the changes and publish all the modified pages for the new meta tags to take effect.

:::warning Attention
In the site configuration section, only users with the site administrator role can add meta tags. Within a site, the developer's role is able to add and remove meta tags page by page.
:::

#### On-page vs. off-page SEO

Also known as on-site and off-site SEO, these terms refer to actions you can take on and off a web page to improve the visibility of your site in search engines. To achieve the best results, we recommend using both strategies together, which will contribute to a stronger position in search results.

##### On-Page SEO

Here's a list of actions you can take to improve on-page SEO:

- Use keywords in the SEO section of the platform and on your pages.
- Include keywords in the URL of the page.
- Add links to relevant information or to other parts of your site.


##### Off-Page SEO

To improve off-page SEO, you can:

- Promote content on social networks and other distribution channels
- Promote alliances and collaborations with media of authority on the subject.


### PWA

Modyo allows the implementation of Progressive Web Apps (PWA) within the digital channels that are being developed. To do this, it offers two options for implementing them.

#### Manifest

The manifest is used to indicate how you want a browser to display your digital channel. You can activate it in Modyo by checking the box. Activating it creates this path:

```bash
https://[domain]/[site-name]/manifest.json
```

The manifest must be implemented on each of the pages where the PWA is developed, through [Templates] (/en/platform/channels/templates.html), in the ``head`` snippet.

You can create and modify the manifest in the next field, allowing you to add changes without having to leave the view.

:::warning Attention
If you make changes to the manifest, be sure to save them using the **Save** button at the top of the screen to avoid losing the changes made.
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
Modyo has reserved hosts for sites, so you can't use them as a host for your sites:
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

Adding stages to your site allows you to implement a continuous integration and deployment (CI/CD) approach, in order to add new functionalities without affecting what is already published.

The main advantages of having different stages on your sites are:

- Focused development: You can develop exclusively for the current stage without modifying what already exists on the site.
- Flexible customization: Create and use local variables, widgets, and templates to customize the experience or view changes.
- Easy integration: When you finish the changes within one stage, you can integrate them into another stage.

:::warning Warning
- Each site has a maximum of four stages.
- The changes you make to a stage are only reflected in that stage.
- This functionality can only be used on sites.
- When using stages, PWAs and custom redirects will be disabled. You can only make use of PWAs and custom redirects on the `main` stage.
- The stages have a Team Members section regardless of the `main` stage. So you'll need to add members to enable the Team Review functionality. This way, you can have the same members with different roles and permissions for each stage.
:::

#### Adds a new stage

To add a new stage to your site, follow these steps:

1. From the side menu, click **Channels**.
1. Click on **Sites**.
1. Select your site.
1. Expand the **Site Settings** section.
1. Click on **Stages**.
1. Click **+ New Stage**.
1. Select the base of the stage and type its name.
1. Click **Create**.

:::tip Tip
When you have more than one stage on your site, the **Overview** page shows the details of the current stage and a button for synchronizing changes between stages.

In the sidebar, you can see what stage you're currently in. By clicking on the drop-down menu you can see a list of all the stages on your site.
:::

#### Synchronize a stage

Once you've finished testing on your stage and want to sync, make sure you don't have any pending changes before proceeding.

On the synchronizations screen you can see all the changes that will be made between the two selected stages.

To synchronize a stage, follow these steps:

1. On the side menu, click **Channels**.
1. Click on **Sites**.
1. Select your site.
1. In the summary view, click **Synchronize**.
1. In the synchronizations view, you can see all the elements with differences between the selected stages. Click _View_ for more details about the changes.
1. Select the items you want to sync.
1. Click **Synchronize**.

:::tip Tip
By clicking on **Synchronize** you can select from which stage you are going to bring the changes. If you want to sync changes to `main`, you must be in `main` by clicking **Synchronize**.
:::

:::warning Attention
The platform does not allow synchronizing changes that are not yet published. Make sure to publish your changes before synchronizing.
:::

#### Delete a stage

To delete a stage, follow these steps:

1. On the side menu, click **Channels**.
1. Click on **Sites**.
1. Select your site.
1. Open the drop-down menu next to the name of your site and select the stage you want to delete.
1. Click **Site Settings**.
1. Click on **General**.
1. In the dangerous zone section, click **Delete Stage**.

:::warning Warning
When you click Delete stage, you will receive a confirmation alert. Once you confirm the deletion, Modyo starts an asynchronous process, and you won't be able to access the stage again.

Keep in mind that deleting a stage erases all the elements associated with that stage on the site, such as pages and widgets. In addition, the configuration of equipment, roles and other relevant aspects related to the stage is eliminated.
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
1. Tap **Update** to confirm the change.

The available roles are:

- **Viewer**: This user can view entries, see differences between versions, and leave comments. They can also access the synchronization view and view the changes that are pending synchronization. This role is not authorized to take any action that constitutes a change to the platform.
- **Developer**: This user is in charge of structural resource development. They can create, modify, and submit pages, widgets, menus, and templates for review. All actions taken by a Developer must go through a review process before publication. This role does not have permissions to publish, delete, or _rollback_ to previous versions of the resources, nor to modify the configuration of the site. There is a variant of this role called Developer CLI, which in addition to the permissions of a Developer, allows you to update widgets from external applications, such as the [modyo-cli] (/en/platform/channels/widgets.html #modyo -cli).
- **Developer CLI**: Can create, modify and submit pages, widgets, the menu and templates for review. In addition, they can push widgets from external applications.
- **Reviewer**: This role permits the correction, approval or discarding of the work done by the Developers. It can create, modify, submit for review, and approve pages, widgets, menus, and templates. It can also publish when the review conditions are met. It cannot edit the site settings.
- **Admin**: The Site Administrator has the same privileges as the previous roles and has the ability to configure the entire site. This includes the creation, modification, submission for review and approval of pages, widgets, menus and templates. In addition, they can publish without requiring team review validation.

#### Delete an administrator
To remove an administrator from the site, follow these steps:
1. Check the box next to the administrator's name.
2. Click on the **Delete** button at the bottom of the list, at the bottom left of the screen.

### Custom redirects

Modyo has a custom redirect system that will allow you to take a URL from your site and automatically redirect it via a 301 or 302 code to another section of the site.

In this view you will find a table with all the redirects that currently exist on the site. You can search by path or description.

To create a new redirect, click on the**New** button in the upper right corner of the view. Fill in the fields **_URL_ of Source** and **_URL_ of destination** and redirection code and then save the changes.

:::warning Attention
The redirect table is the second to last in precedence, so if there is a URL on the site that points to a [page] (/en/platform/channels/pages.html) or a default view, you'll see that view instead of being redirected through the custom redirection table.
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
1. Custom redirects
1. [Site 404 error settings](/en/platform/channels/sites.html#privacy)

:::warning Conditions for a redirect
For a redirect to be successful, the source path cannot exist or must be unpublished. If the source is a published page with subpages, you must unpublish the subpages before you unpublish the main page.
:::

### Security headers

Enable this module for your site to configure HTTP security headers. Please note that this action cannot be undone. Once enabled, you'll have full control over the headers you want to use.

#### HTTP Strict Transport Security (HSTS)

Tells the browser that it can only access the site using HTTPS.
* **Duration**: Sets the time that the browser accesses the site via HTTPS only.
* **Preload**: Includes the preload policy. For more information, see [HSTS Preload List Submission] (https://hstspreload.org/).
* **Include subdomains**: Applies the HSTS rule to all subdomains on the site.

#### Referrer-Policy

The _header_ `Referer` contains information from the previous web page from which it is linking, with the _header_ `Referer-Policy` you can control how much information should be included in the _header_ `Referer`.

* **no-referrer**: Does not send _referrer_ information.
* **no-referrer-when-downgrade**: Does not send _referrer_ information to a less secure destination.
* **origin**: Sends only the source domain, remove the paths and _query string_.
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

Freely specify your content security policy in the text area. For a complete guide on how to write your policy, see [Content Security Policy (CSP) from Mozilla Developer Network.] (https://developer.mozilla.org/en/docs/Web/HTTP/CSP)

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

For a full list of browser-compatible features, see the [MDN Feature Policy] (https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy).

#### Cross Origin Embedder Policy (COEP)

Configure the insertion of cross-source resources into the document. For example, if your document has a COEP header with a value of Require-Corp or Credentialless, you can only access certain functions, such as SharedArrayBuffer or Performance.now () objects, with unrestricted timers.

For more information, see the [MDN Cross-Origin-Embedder-Policy] (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy).

#### Cross Origin Opener Policy (COOP)

Allows you to ensure that a top-level document doesn't share a browsing context group with cross-source documents.

COOP isolates the processing of your document, so potential attackers won't be able to access your global object if they open it in a popup, preventing a set of cross-origin attacks.

For more information, review the [MDN Cross-Origin-Opener-Policy] (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy).

#### Cross Origin Resource Policy

Conveys the desire to block cross-origin/cross-site requests without cors to the specified resource by the browser.

For more information, see the [MDN Cross-Origin-Resource-Policy] (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy).


### Site variables

Modyo has [global variables] (/en/platform/core/key-concepts.html #variables -global) that you can use on multiple sites. However, you can also create specific variables for a particular site or overwrite the value of an existing global variable, with a value specific to the particular site.

Using variables allows you to reuse HTML, JS, CSS, or text code across different sites, widgets, or templates. If you have code that is repeated in several parts of your account, you can assign that value to a variable to simplify your processes and if you edit the value of the variable, the change will be reflected everywhere the variable is in use.

:::tip Tip In global variables, you can use plain text, HTML, JavaScript, and CSS. However, it's important to note that you can't use Liquid code inside these variables. It is also important to remember that the content of global variables has a maximum limit of 65,535 characters.

To get the value of the variable anywhere that accepts Liquid markup, use:<span v-pre>`{{vars.Name}}`</span>
:::

#### Create a variable in sites

To create a variable in sites, follow these steps:

1. From the main side menu, click **Channels**.
1. Select your**Site**.
1. Under **Site Settings**, click **Site Variables**. Here you can see the list of all global variables and site variables, their general information and a button to copy their code into Liquid markup.
1. Click on**+ New Variable**.
1. Complete the **Name** and **Value** fields of the variable.
1. Click **Save**.

:::warning Attention When using variables, Modyo follows a hierarchy of preference, where variables defined at the lowest level have priority. The variables defined in the widget will take precedence over the variables defined on the site, and in turn, the variables defined on the site will take precedence over the variables defined at the account level.

Therefore, it's important to use caution when defining variables in widgets or on the site, especially if you use the same name as the variables defined at the account level.

:::
