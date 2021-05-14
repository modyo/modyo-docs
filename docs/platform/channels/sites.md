---
search: true
translated: true
---

# Sites

<img src="/assets/img/channels/sites/sites-index.jpg" style="border: 1px solid #EEE;"/>

This is where you work to create sites and web-based applications within the platform. Building in Sites focuses on all the development, design and navigation flow and structure. If you want to add content to a site or web-based application, you must first create content in the [Content](/platform/content/) section.

Upon entering, you will see that there are 4 statuses:

<img src="/assets/img/channels/sites/filters-sites.jpg" width="300"/>

- Enabled (Default state of functioning online digital channels and newly created Sites)
- Hidden (Sites created that only users with access can see)
- Development (Sites only accessible by backend users who are working on them)
- Disabled (Sites that have been disabled)
- Copy: creates a copy of the site and all the published elements of it.

To create a site, you just have to click on the **New** tab, which will allow you to designate the name and host, and then select a base template for the site's appearance and structure.

After that, you can see it with the status "Enabled", which means that it is online to work.

:::warning Warning
In the site index, you will only be able to see sites where you are part of the team with a designated role.
:::

## Review and joint publication

You can review and publish multiple elements of a site in a single view. To review the differences of an element, select it from the left list and the differences between the editable and published version will appear in the right section of the view.

If you want to publish multiple elements in a single step, click the "Publish" button on pages, navigation, widgets or templates and just mark all items you want to publish in the list and then press the publish button.

:::warning Warning
All the elements with changes that have not been published will appear in the list. If an element does not appear in the list, it is very probable that it still does not have any pending changes to be published.

If you have team review enabled, only the items that are already approved will appear in the list.

In case you need to publish an element quickly, administrator users can skip the approval process by using the "Force publish" option, allowing the element to go directly to the published view.
:::

## Site settings

Site settings allow you to configure various options of your site, such as set up its visibility depending on whether the user is a visitor, customer with a session, a developer or an administrator. In addition, you can modify options that allow us to improve your site's appearance in search engines and the visibility of some of the content that the public has access to when they reach your pages.

<img src="/assets/img/channels/sites/config-site.jpg" width="250"/>

### General

Within this section, you can configure the following data:

- **Site Name**: The name of your site, this field is used as the default title for SEO purposes (this can be modified).
- **Description**: A brief description of your site that is used as the default description for the SEO of the site (this can be modified).
- **Site Logo**: An image that displays in the upper left as your site logo in the Navigation bar.
- **Language**: The language of your site. This value is important because it impacts [how content appears](/platform/channels/templates.html#views-for-content) in your site when consuming it through Modyo Content.
- **Team Review**: This is an important review system with [its own separate explanation](/platform/core/key-concepts.html).
- **Time Zone**: Selects the time zone that your date and time fields use within your site.
- **Google Tag Manager ID**: Allows you to add a Google Tag Manager ID to easily install the scripts you need to use Google's event logging tool.
- **Favicon**: Image that appears in the address bar.
- **Apple icon**: Image that appears on mobile devices when using the site as an application.
- **Delete**: This option allows you to permanently delete a site and all its elements.

:::danger Danger
This option is irreversible, so you must be completely sure when executing this action. When you press the delete button, the system will ask you for the name of the site. You will have to enter the textual name of the site you are deleting in order to execute the action. Once the action is confirmed, you will not be able to access the site or its elements again.
:::

#### Google Tag Manager

By default, the new Modyo themes include the snippets needed to automatically inject Google Tag Manager scripts into both the _head_ and _body_ of the sites. These snippets can be found in the _snippets>general_ section of the [Template builder](/platform/channels/templates.html) and are embedded into both the _head_ snippet and the _home_ and _base_ views.

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
```
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

### PWA

Modyo provides the ability to implement Progressive Web Applications (PWA) within your digital channels. To do so, you can find two main options to facilitate implementation.

<img src="/assets/img/channels/sites/pwa-site.jpg" width="600" style="margin-top: 40px; border: 1px solid #EEE;">

#### **Manifest**

The purpose of the manifest is to indicate how you want a browser to display your digital channel. On the platform, it is possible to activate it with the checkbox seen above. This will create the following route:

```
https://[domain]/[site-name]/manifest.json
```

he manifest should be implemented on every page where the PWA is developed, through the [Template Builder](/platform/channels/templates.html), in the ```head``` snippet.

The manifest can be created and modified in the next field, allowing you to add changes without having to leave the view.

:::warning Warning
If you change the manifest, remember to save it with the **Save** button at the top of the screen so you don't lose the changes.
:::

:::warning Warning
If you do not customize the manifest but add the route in the Template Builder, it will be blank and will not take any action.
:::

#### **Service Worker**

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

### SEO

<img src="/assets/img/channels/sites/seo-site.jpg" width="400" style="margin-top: 40px; border: 1px solid #EEE;" >

SEO (Search Engine Optimization) is key to high-ranking pages in your channels across various search engines. Good SEO depends on whether users reach your site through these search engines. SEO is a large topic, but at a general site/digital channel level, there are a few important configurations to consider.

The options listed in this section help improve your SEO across a particular channel:

- **Tagline**: General description that appears in search results, listed under the name or "title" of your site.
- **Keywords**: Associated words relevant to your site that users search for that appear in the *keywords* meta tag. Devalued by Google, this field is less relevant today, but may be used by other search engines.
- **Custom sitemap.xml file**: This file allows search engines to better index the content of your site. Modyo automatically updates your sitemap file by default, but you can also modify it manually so that it focuses only on particular pages and content.
- **Custom robots.txt file**: This file is part of the robots exclusion protocol (REP), a group of web standards that regulate how robots crawl the web, access and index content, and serve that content up to users. In practice, this file determines whether certain user agents (web-crawling software) can or cannot crawl parts of a website. These crawl instructions are specified by "disallowing" or "allowing" the behavior of certain (or all) user agents. You can modify this file to provide custom instructions to site crawlers.

:::tip Tip
The robots.txt and sitemap.xml files are only visible on the site if you have a custom domain enabled. Otherwise, robots.txt and sitemap.xml are only defined at the account level with their default values and cannot be customized.
:::

- **Meta tags**: Allows you to set up meta tags for all your pages and configure the default values.

:::tip Tip
By adding a meta tag to all pages through the site's SEO settings, it will be added to the editable version of all pages. This means that you will have to publish each page for the new meta tags to take effect on the site.
:::

:::warning Warning
Since the meta tags list is part of the site's configuration, only the site's administrators will be able to add meta tags for all pages. However, the site's developers will be able to add or remove meta tags and modify their values page by page.
:::

### Restrictions

<img src="/assets/img/channels/sites/restrictions-site.jpg" width="250" style="margin-top: 40px; border: 1px solid #EEE;" >

Restrictions allow you to configure the privacy of your site.

- If the privacy level is set to public, then it is visible to everyone.
- If the privacy level is set to private, then this site is only visible to users with an active session (authenticated login).
- If the privacy level is set to private, but the option "Show home page to public visitors" is checked, then the home page is visible to everyone, while the rest of the site requires users with an active session.

### Domains

<img src="/assets/img/channels/sites/domains-site.jpg" width="500" style="margin-top: 40px; border: 1px solid #EEE;" >

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

### Site variables

Modyo has [global variables](/platform/core/key-concepts.html#global-variables) that you can use on multiple sites. However, you can create site-specific variables or overwrite the value of a global variable already created with a site-specific value.

### Team members

<img src="/assets/img/channels/sites/members-site.jpg" width="500" style="margin-top: 40px; border: 1px solid #EEE;" >

The Team members section of your Site settings allows you to select eligible users from your main Team (set at the account level), and assign them roles to work under within your site. These roles start with editing privileges, and can expand to include reviewing, publishing, and configuring site settings.

To do this, the administrator who created the site must manually assign team members and their roles. Once the site creator adds other admins, these too can add more team members.

To add a user to the Site, select the primary button **+ New** in the upper right of the view. In the modal that appears, search for and select from among the list of eligible users. Once selected, assign them one of three roles (Developer, Reviewer, Admin), and then press "Create".

You can modify the role of any of team member by clicking their name. In the modal that apepars, select a new role from the drop down, then press "Update" to confirm the change.

To remove a team member, click the checkbox next to their name, and then the **Delete** button that appears at the bottom of the page.

The available roles are:

- **Developer**: Can create, modify and submit pages, widgets, menu and templates for review.
- **Developer CLI**: Can create, modify and submit pages, widgets, menu and templates for review. Can also push widgets to the platform from external applications.
- **Reviewer**: Can create, modify, and submit pages, widgets, menu and templates for review and approval, as well as publish them when the correct review conditions are met.
- **Admin**: Can create, modify, and submit pages, widgets, menu and templates for review and approval, as well as publish them without going through the validations of the team review if necessarty. Admins can also modify site configurations.

#### Developer

Developers are in charge of the structural development of resources, design and the creation of or integration with content. Everything developers do has to go to review, or be directly published by a higher role.

Developers cannot publish, delete, restore resources to previous versions (Rollback) or make changes to the site settings.

There is a variation of the Developer role with the name "CLI". In addition to developer permissions, this "Developer CLI" role has the ability to push widgets from external applications, such as the [modyo-cli](/platform/channels/widgets.html#modyo-cli).

#### Reviewer

Reviewers correct the work done by Developers, approving or rejecting their changes, and then publishing.

Reviewers cannot edit the Site settings.

#### Admin

The Admins role has access to all the permissions of the two previous roles, and also has access to the Site settings.

This team member is different from the account-level Default Admin. A site Admin can only configure a site, and cannot make any changes to the platform itself.

### Custom redirects

Modyo has a custom redirect system that will allow you to take a URL from your site and automatically redirect it via a 301 or 302 code to another section of the site.

In this view you will find a table with all the redirects that currently exist on the site, where you can search by path or description.

To create a new redirect, click on the **New** button in the upper right corner of the view. By completing the Source **_URL_ and Destination **_URL_ fields and redirection code and then saving the changes, you will create a new redirection entry.

:::warning Warning
The redirect table is the penultimate in precedence, so if there is a URL on the site that points to a [page](/platform/channels/pages.html), a default view, or a [custom content view](/platform/channels/templates.html#content-views), you will see those views instead of being redirected via the custom redirect table.
:::

In addition to creating redirects one by one, you can import a [CSV file](/assets/examples/custom-redirections.csv) with up to 1000 redirects.

:::warning Warning
The required columns to import redirects are origin y destination.

You can select a 301 or 302 response code for all elements without having to add an additional column.

Along with the above, you should keep in mind that if you are importing a redirect with an origin that has already been registered, you will not be able to start the import process. You will have to modify your CSV file and delete the row whose origin already exists, or delete the custom redirect record of the site whose origin you are trying to import.
:::

The precedence of locations on Modyo sites is as follows:

1. [Default views (Home, search)](/platform/channels/templates.html)
1. [Pages](/platform/channels/pages.html)
1. [Custom content views](/platform/channels/templates.html#content-views)
1. Custom redirects
1. [Site 404 error configuration](/platform/channels/sites.html#restrictions)
