---
search: true
sidebarDepth: 3
---

# Sites

A site is where the content created in [Content] (/es/platform/content/) and [Channels] (/platform/channels/) are displayed to create your custom digital channel. They include the operation of the entire development, design, and navigation flow.

<img src="/assets/img/channels/sites/sites-index.jpg" alt="The main page for the Sites module" style="border: 1px solid #EEE;" />



There are three states for each site:

- **Enabled**: Default state of functioning online digital channels and newly created Sites.
- **Pending Changes**: Appears when there is something in the site with pending changes. Site administrators can click **Publish** which will take you to **Review and Publish** where you can verify all changes and publish the site.
- **Disabled**: Sites that have been disabled.

## Create a Site

To create a new site, follow these steps:

1. From the side menu, click **Channels**.
1. Click **+ New Site**.
1. Enter the name and host (the site's path).
1. If necessary, select which realm this site belongs to.
1. Click **Create**.

When you finish creating your site, it will automatically be enabled and you will be taken to the **Summary** screen.

:::warning Warning
In the site index, you will only be able to see sites where you are part of the team with a designated role.
:::

## Site settings

Site settings allow you to configure different site options, for example showing different views depending if the user is a visitor, customer, developer, or site administrators. In addition, you can modify options that allow you to improve SEO and the visibility of some of the data that the public has access to when they reach a page.

<img src="/assets/img/channels/sites/config-site.jpg" alt="The settings for your sites" width="250" />

## Joint Review and Publication

<img src="/assets/img/platform/core/review-joint-publication.png" width="800px" style="border: 1px solid #EEE;" alt="Modal de diferencias"/>

On the joint review and publication screen, you can see all the pending changes to be published on your site. You have the option to see what exactly changed by clicking on the **View** button. 

### Publish together

To make a joint publication on your site, follow these steps:

1. In the Modyo Platform main menu, expand **Channels**, and click **Sites**.
1. Click on your site. 
1. On the Summary screen, click **Publish**.
1. Here you can see all the pending changes, select everything you want to publish and click **Publish**.

:: :tip Tip
If you click on Publish on a particular article (e.g. publish a page), the Review and Publish window will open with this article selected to see the pending changes.
:::  

### General

Within this section you can configure the following data:

- **Site Name**: The name of your site, this field is used as the default title for SEO purposes (this can be modified).
- **Description**: A brief description of your site that is used as the default description for the SEO of the site (this can be modified).
- **Site Logo**: An image that displays in the upper left as your site logo in the Navigation bar.
- **Language**: The language your site will be in. There are three values for the language: Spanish, English, and Portuguese.
- **[Team Review](/en/platform/core/key-concepts.html)**
- **Time Zone**: The time zone in which the date and time fields will be displayed within the site. This time will determine the time zone inside a site (Pages, Navigation, Templates), including Liquid calls to site data. Time zones in Content can be handled in the Account Settings.
- **Google Tag Manager ID**: Allows you to add a Google Tag Manager ID to easily install the scripts you need to use Google's event logging tool.
- **Favicon**: Image that appears in the address bar.
- **Apple icon**: Image that appears on mobile devices when using the site as an application.
- **Delete**: This option allows you to permanently delete a site and all its elements.

:::danger Danger
Deleting is irreversible, be careful when executing this action. When you press the delete button, the system will ask you for the name of the site. You'll need to enter the text name of the site you're deleting before you can execute the action. Once the action is confirmed, you will not be able to access the site or its items again.
:::

#### Google Tag Manager

By default, the new Modyo themes include the snippets needed to automatically inject Google Tag Manager scripts into both the _head_ and _body_ of sites. These snippets are found in the _snippets>general_ section of [Templates] (/es/platform/channels/templates.html) and are embedded in both the _head_ snippet and the _home_ and _base_ views.


If you have the latest theme available and still don't have these snippets, you can go to the "Themes" section in the upper right and click on the "Load templates" option in the "additional options". This option will load all the templates that have been added to the theme, but are not present in the version you have installed.

In case you have an old theme installed and do not have these snippets, you can access the code here to add them as custom snippets and easily embed Google Tag Manager to your site.

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

With this ready, when there's a value associated with the **Google Tag Manager Identifier** field in the General site settings, the scripts will be automatically injected and you'll be able to start creating events in Google Tag Manager to record your users' actions.

#### Privacy

<img src="/assets/img/channels/sites/restrictions-site.jpg" alt="Public or private privacy settings and their explanations" width="250" style="margin-top: 40px; border: 1px solid #EEE;" >

Restrictions allow you to configure the privacy of your site.

- If the privacy level is set to public, then it is visible to everyone.
- If the privacy level is set to private, then this site is only visible to users with an active session.
- If the privacy level is set to private, but the option "Show home page to public visitors" is checked, then the home page is visible to everyone, while the rest of the site requires users with an active session.
- If you reach a URL that does not exist within the site, you will receive a 404 response by default, but if you check this option, instead of receiving a 404, you will be redirected to the home page.

#### Danger Zone

These options involve some risk to the site experience and your users, please proceed with caution.

<img src="/assets/img/channels/sites/danger-zone.jpg" alt="The options in the danger zone." width="400" style="margin-top: 40px; border: 1px solid #EEE;" >

- Change Realm: This field displays the realm for this site. When you change your realm, all privacy settings on your sites, pages, and navigation will be lost.
- Site Status: Change the site status between three different options. 
    * Enabled allows the site to be editable and visible to the public, this is the default state of a site. 
    * Editable allows a site to be modified but is not visible to the public. Users need to log in to Modyo Platform to access the site. Robots.txt, PWAs, and the manifest are disabled in this state.
    * Disabled prohibits both editing and visibility of a site.
- Delete Site: This action asynchronously calls for the deletion of the site. You will not be able to access this site when you start deleting the site. All the elements contained in a site, such as pages and widgets, will also be removed. 


### SEO

<img src="/assets/img/channels/sites/seo-site.jpg" alt="The options for configuring SEO within a site." width="400" style="margin-top: 40px; border: 1px solid #EEE;" >

SEO (Search Engine Optimization) is the key to appearing in different search engines. Users rely on a good SEO setup to get to the site.

The options listed in this section help improve your SEO across a particular channel:

- **Tagline**: General description that appears in search results, listed under the name or "title" of your site.
- **Keywords**: Words that users search for and that you want the site to use. This field accepts a maximum of 255 characters.
- **Automatically update the sitemap.xml file for me**: Allows Modyo to create and update the sitemap.xml file. Disable this option to maintain a custom sitemap.
- **Sitemap**: This XML file allows search engines to index the content of the site.
- **Automatically update the robots.xml file for me**: Allows Modyo to create and update the robots.txt file. Disable this option to provide personalized instructions to site crawlers.
- **Robots.txt**: This file is part of the Robot Exclusion Protocol (REP), a group of web standards that regulate how robots crawl the web, access, and index content and serve it to users. In practice, this file determines whether or not certain user agents (web tracking software) can track parts of a website. These tracking instructions are specified by “allowing” or “prohibiting” the behavior of certain (or all) user agents.

:::tip Tip
The robots.txt and sitemap.xml files are only visible on the site if custom domains are used. Otherwise, robots.txt and sitemap.xml are only at the platform level, have their default values, and cannot be customized.
:::

- **Custom meta tags**: Allows you to set meta tags and their default values for all pages.
- **Replicate meta tag on pages:** Propagate this meta tag and its value across all pages of the site. When saving this change, it is necessary to publish all modified pages for the new meta tags to take effect.

:::warning Warning
In site settings, only users with the site administrator role will be able to add meta tags. Within a site, the developers role will be able to add and remove meta tags page by page.
:::

#### On-page SEO vs. Off-page

Also known as On-Site and Off-Site SEO, they refer to actions that can be taken on or off a page to increase your site's visibility to search engines. For the best results, we recommend using both strategies to get better search engine rankings.

##### On-page SEO

Here is a short list of actions you can take to improve on-page SEO:

- Make use of keywords in the SEO section of the platform and on your pages
- Include keywords as part of the URL
- Add links to relevant information or other parts of your site

##### Off-page SEO

Here is a short list of actions you can take to improve off-page SEO:

- Promote content through social media and distribution channels
- Foster alliances and cooperation with authoritative mediums on the subject

### PWA

Modyo provides the ability to implement Progressive Web Applications (PWA) within your digital channels. To do so, you can find two main options to facilitate implementation.

<img src="/assets/img/channels/sites/pwa-site.jpg" alt="The PWA options you can configure withing a site." width="600" style="margin-top: 40px; border: 1px solid #EEE;" >

#### Manifest

The purpose of the manifest is to indicate how you want a browser to display your digital channel. On the platform, it is possible to activate it with the checkbox seen above. This will create the following route:

```
https://[domain]/[site-name]/manifest.json
```

The manifest must be implemented on each of the pages where the PWA is developed, through [Templates] (/es/platform/channels/templates.html), in the ``head`` snippet.

The manifest can be created and modified in the following field, allowing you to add changes without having to leave the view.

:::warning Warning
If you change the manifest, remember to save it with the **Save** button at the top of the screen so you don't lose the changes.
:::

:: :warning Attention
If you don't customize the manifest but add the path in Templates, it will be blank and will take no action.
:::

#### Service Worker

The Service Worker allows the digital channel to perform different actions or keep certain data connected within the cache to show some structure in case of a bad connection. The platform gives you the possibility to enable this through the second checkbox above. Thus, the following route will be created:


```
https://[domain]/[site-name]/serviceworker.js
```

You can modify and program the Service Worker in the next field, adapting it to your routes and with the available variables as shown above.

:::warning Warning
If the Service Worker is disabled, the page will continue to run only with its basic functions and not with the benefits that this option provides.
:::

:::warning Warning
If the code is not customized or saved, the site will not have the features you are designing.
:::

### Domains

<img src="/assets/img/channels/sites/domains-site.jpg" alt="The domain options you can configure within a site." width="500" style="margin-top: 40px; border: 1px solid #EEE;" >

The Domains section is where you configure where and how your site is publicly located. It is essential that each member of the platform be aware of any changes made here.

The options you configure here are:

- **Host**: This name designates where your site is located within the server, e.g. the host name 'my-site' would be located at https://example.modyo.cloud/my-site. This option only accepts alphanumeric characters, and a few other valid non-space characters, such as dashes "-" and underscores "_".
- **Enable custom domains**: Select this option if you have a registered custom domain, and want to configure it here. Make sure to follow the instructions in the description.
- **Enable SSL on this site**: You are required to have a valid SSL certificate installed in order to enable this setting.
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
<li>es.modyo.com</li>
<li>pt.modyo.com</li>
<li>global.modyo.com</li>
</ul></td>
</tr></table>
:::

:::warning Warning
Modyo has reserved hosts for the sites, so you can't use them as hosts for your sites:
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

Adding stages to your site allows you to continuously integrate and deploy (CI/CD) new features for your site without interrupting what is already published.

The main advantages of having different stages on your sites is that it allows you to develop only for the current stage, without modifying what already exists on the site. These stages can create and use local variables, widgets, and templates to customize the experience or visualize changes. At the end of the changes within a stage, they can be integrated into any stage.

:::warning Attention
When using stages, custom PWAs, and redirects will be disabled. You can only use these in the `main` stage.
:::

#### Add a new stage

<img src="/assets/img/channels/sites/create-stage.jpg" alt="The create a new stage window." width="300" />

To add a new stage to your site, follow these steps:

1. From the side menu, click **Channels**, then select your **Site**.
1. Expand **Site Settings**, click on **Stages**.
1. Click **+ New Stage**.
1. Select what will be the base of the stage and type the name.
1. Click **Create**.


:::tip Tip
When you have more than one stage on your site, the **Overview** page will now display the details of the current stage and a button to synchronize changes between stages.

In the sidebar you can see what stage you are currently in and when you click on the dropdown, it will display a list of all the stages on your site.
:::

#### Synchronize a stage

Once you've finished your tests on your stage, make sure you sync them to `main`. On the synchronizations screen, you will be able to see all the changes that were made between the two selected stages by clicking on _View_.

<img src="/assets/img/channels/sites/sync-stage.jpg" alt="The sync two stages in a site window."/>

To synchronize a stage, follow these steps:

1. From the side menu, click **Channels**, then select your **Site**.
1. In **Overview**, in the**Synchronization** section, select the stage you want to synchronize.
1. In the window that appears, you will see all the items with differences between the selected stages. Click _View_ to see the details of what changed.
1. Select the items you want to sync.
1. Click **Synchronize**.

:::tip Tip
When you click on sync, you will be able to select which changes to take from another stage. That is, if you want to sync changes to `main`, you must be in `main` when you click sync.
:::

:::warning Warning
You will receive an alert if you try to sync changes that haven't been published yet.
:::


### Team Review

You can review and publish multiple elements of a site in a single view. To review the differences of an element, select it from the left list and the differences between the editable and published version will appear in the right section of the view.

If you want to publish multiple items in one step, you must press the “Publish” button from the pages, navigation, widgets, or templates and you must mark all the items you want to publish in the list and then press the button to publish again.

:::warning Warning
All items that have pending changes to be published will appear in the list, if any item does not appear in the list, it's because it has no changes yet to publish.

If you have team review enabled, only the items that are already approved will appear in the list.

In case you need to publish an element quickly, administrator users can skip the approval process by using the "Force publish" option, allowing the element to go directly to the published view.
:::

### Team Members

<img src="/assets/img/channels/sites/members-site.jpg" alt="The members and their roles in a site." width="500" style="margin-top: 40px; border: 1px solid #EEE;" >

The Team members section of your Site settings allows you to select eligible users from your main Team (set at the account level), and assign them roles to work under within your site. The basic role just includes editing privileges, and you can additionally include reviewing, publishing, and configuring site settings privileges.

To do this, the administrator who created the site must manually assign team members and their roles. Once the site creator adds other admins, these too can add more team members.

#### Add a new member
To add a new member to your site, follow these steps:

1. From the Modyo Platform main menu, expand Channels, and click your site.
1. Expand **Site Settings** and click **Team Members**.
1. Click the **+ Add Member** button.
1. Find the user you want to add to your site and select a role.
1. Click **Add**.

You can modify the role of any of the associated administrators by clicking on their name. A modal will pop up, where you can select the new role. Tap **Save** to confirm the change.

To remove a team member, click the checkbox next to their name, and then the **Delete** button that appears at the bottom of the page.

The available roles are:

- **Developer**: Can create, modify and submit pages, widgets, menu and templates for review.
- **Developer CLI**: Can create, modify and submit pages, widgets, menu and templates for review. Can also push widgets to the platform from external applications.
- **Reviewer**: Can create, modify, and submit pages, widgets, menu and templates for review and approval, as well as publish them when the correct review conditions are met.
- **Admin**: Can create, modify, and submit pages, widgets, menu and templates for review and approval, as well as publish them without going through the validations of the team review if necessarty. Admins can also modify site configurations.

#### Developer

Developers are in charge of the structural development of resources, design and the creation of or integration with content. Everything developers do has to go to review, or be directly published by a higher role.

This user cannot publish, delete, revert to previous versions of resources (Rollback), or change settings.

There is a variation of the Developer role with the name "CLI". In addition to developer permissions, this "Developer CLI" role has the ability to push widgets from external applications, such as the [modyo-cli](/en/platform/channels/widgets.html#modyo-cli).

#### Reviewer

They review the work done by Developers, approving or discarding what is already done and then publish the changes.

Reviewers cannot edit the Site settings.

#### Admin

The Admins role has access to all the permissions of the two previous roles, and also has access to the Site settings.

This team member is different from the account-level Default Admin. A site Admin can only configure a site, and cannot make any changes to the platform itself.

If necessary, users from the site who already have existing roles can be deleted. To do this, just click the user and the Delete action.

### Custom redirects

Modyo has a custom redirect system that will allow you to take a URL from your site and automatically redirect it via a 301 or 302 code to another section of the site.

In this view you will find a table with all the redirects that currently exist on the site, where you can search by path or description.

To create a new redirect, click on the **New** button in the upper right hand corner of the view. By completing the fields **_URL_ Source** and **_URL_ Destination** and redirection code and then saving the changes, you will create a new redirection entry.

:::warning Warning
The redirect table is the second to last in precedence, if there is a URL on a site that points to a [page](/en/platform/channels/pages.html) or a default view, you'll see that view instead of being redirected through the custom redirect table.
:::

In addition to creating redirects one by one, you can import a [CSV file](/assets/examples/custom-redirections.csv) with up to 1000 redirects.

:::warning Warning
The required columns to import redirects are origin y destination.

You can select a 301 or 302 response code for all elements without having to add an additional column.

Also, you should keep in mind that if you are importing a redirect with an origin that has already been registered, you will not be able to start the import process. You will have to modify your CSV file and delete the row whose origin already exists, or delete the custom redirect record of the site whose origin you are trying to import.
:::

The precedence of locations on Modyo sites is as follows:

1. [Default views (Home, search)](/en/platform/channels/templates.html)
1. [Pages](/en/platform/channels/pages.html)
1. Custom redirects
1. [Site 404 error settings](/en/platform/channels/sites.html#privacy)

### Security headers

Configure HTTP security headers by enabling this module for your site.
This action cannot be undone. When enabled, you'll have full control over the headers you want to use.

#### HTTP Strict Transport Security (HSTS)

Instructs the browser that your site should be accessed using HTTPS only.
* **Duration**: Sets how long the browser should remember that your site is only accessed by using HTTPS.
* **Preload**: Include the preload directive. See [HSTS Preload List Submission](https://hstspreload.org/) for more details.
* **Include subdomains**: Use this HSTS rule for all the site subdomains as well.

#### Referrer-Policy

The `Referer` _header_ contains information about the previous web page that is linked to the resource being requested. You can control how much information should be included in the `Referer` _header_ with the `Referrer-Policy` _header_.

* **no-referrer**: No _referrer_ information is sent.
* **no-referrer-when-downgrade**: Don't send _referrer_ information to a less secure destination.
* **origin**: Send the origin domain only and strip out the paths and _query string_.
* **origin-when-cross-origin**: Send _referrer_ information for same origin _requests_ and strip out the paths and _query string_ to other destinations.
* **same-origin**: Send _referrer_ information for same origin _requests_ only.
* **strict-origin**: Send the origin domain only for same security level _requests_, and don't send _referrer_ information to less secure destinations.
* **strict-origin-when-cross-origin**: Send _referrer_ information to same-origin _requests_. Send the origin only to same protocol security level and don't send _referrer_ information to less secure destinations.
* **unsafe-url**: Always send _referrer_ information.

#### X-Frame-Options

Indicate whether your site can be included in a `frame`, `iframe`, `embed`, or `object`.
* **DENY**: The site cannot be displayed in a _frame_.
* **SAMEORIGIN**: The site can be displayed in _frames_ with the same domain.

#### X-Content-Type-Options

It indicates that _MIME types_ announced in the _header_ `Content-Type` must be followed to avoid _MIME type sniffing_.

#### Content-Security-Policy

Controls what resources the browser can load on the site to mitigate data injection attacks and _cross site scripting_. The default value of *allows you to load resources from anywhere*, so it's important to design a content security policy that's right for your site.

Freely specify your content security policy in the text area; for a complete guide on how to write your policy, see [MDN Content Security Policy (CSP)](https://developer.mozilla.org/en/docs/Web/HTTP/CSP)

:::warning Warning
A very strict value can interfere with features such as [Google tag manager](/en/platform/channels/sites.html#google-tag-manager), [PWA](/en/platform/channels/sites.html#pwa), [Widgets](/en/platform/channels/widgets.html), and [Asset Manager](/en/platform/content/asset-manager.html).
:::

A production-friendly policy must ensure that all assets, such as images and style sheets, are loaded from trusted sources and requires that all scripts be safe and reliable for the application. For example, a strict policy for the _minimal template_ would look like this:

```
default-src 'self'; img-src 'self' https://cloud.modyocdn.com; font-src 'self' https://cloud.modyocdn.com http://cdn.materialdesignicons.com; style-src 'self' http://cdn.materialdesignicons.com; script-src 'self'
```

Your policy should include a `default-src 'self'` directive, which is a _fallback_ for any other resource type. It also needs to include `script-src` and `style-src` directives to prevent evaluation of the `script` and `style` _inline_ tags.

* **Nonce**: A CSP nonce will be added automatically by the server to the `script-src` and `style-src` directives if present.

If you have the nonce present in your policy then you can add the `script` and `style` _tags_ to the allowed list in your _templates_ using the `csp_nonce` variable.

```liquid
<script nonce="{{csp_nonce}}">
  alert("everything will be ok");
</script>
```

There are several tools to help you design a strong security policy:
* [Google CSP evaluator](https://csp-evaluator.withgoogle.com)
* [ReportURI](https://report-uri.com/home/analyse)
* [CSP validator](https://cspvalidator.org)

#### Permissions-Policy

It allows or denies the use of browser features and APIs for the site. For example, you can restrict privacy sensitive APIs, like the camera or microphone, and video autoplay. For a complete list of the features supported by browsers see [Feature Policy from MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy).

#### X-XSS-Protection

It prevents pages from loading when the browser detects a _cross-site scripting_ attack. This protection is not necessary with modern browsers when you implement a strict [Content-Security-Policy](/en/platform/channels/sites.html#content-security-policy), but some security inspectors will expect this _header_ to be present.

* **0**: Disable XSS _filtering_.
* **1**: Enable XSS _filtering_, removing the unsafe parts.
* **1; mode=block**: Enable XSS _filtering_, preventing the _page rendering_.

### Site variables

Modyo has [global variables](/en/platform/core/key-concepts.html#global-variables) that you can use across multiple sites. However, you can create site-specific variables or override the value of an already created global variable with a specific value for the particular site.

Using variables allows you to reuse HTML, JS, CSS, or text across different sites, widgets, or templates. If you have code that you use repeatedly in different parts of your account, you can assign this value to a variable and thus simplify your processes. When you edit the value of the variable, this will be reflected everywhere the variable is currently used.

:::tip Tip
You can use plain text, HTML, JavaScript, and CSS within global variables, however you can't use Liquid code inside them. Please note that content has a maximum of 65,535 characters.

To get the value of the variable anywhere that accepts Liquid markup, use: <span v-pre> `{{vars.Name}}` </span> 
:::

#### Create a variable in sites

To create a variable in sites, follow these steps:

1. From the main side menu, click on **Channels**, then select your **Site**.
1. Under **Site settings**, click **Site variables**.
1. Here you can see the list of all global variables and site variables, their general information, and a button to copy their code in Liquid markup. Click **+ New Variable**.
1. Fill in the **Name** and **Value** of the variable.
1. Click **Save**.

:::warning Warning
When using variables, variables defined at the lowest level will always be preferred, with variables defined in the widget first, then those defined in the site, and finally variables defined at the account level, so be careful when defining variables in widgets or the site with the same name as account variables.
:::
