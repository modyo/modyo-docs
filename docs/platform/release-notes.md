---
search: true
---

# Release notes

### 9.2.X - First release planned for the fourth quarter of 2020.

<Badge text="Core" type="core" vertical="middle"/>
* Administrator groups: Easily add users corresponding to different sites or spaces.

<Badge text="Channels" type="channels" vertical="middle"/>
* Site stages: Work in a safe pre-productive environment of a site without compromising the integrity of what has already been published.

<Badge text="Customers" type="customers" vertical="middle"/>
* Business Events: Track any event that is relevant to your business in Modyo, and leverage events for customer segmentation.
* User Realms: Set up different user realms to access different sites or even different stages of the same site.

### 9.1.6 - December 23, 2020
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Multiple bugs were fixed.
* Multiple improvements to navigation and usability.
* Multiple security improvements.

<Badge text="Channels" type="channels" vertical="middle"/>
* The option to add [widget variables](/platform/channels/widgets.html#widget-variables) was added.
* The option to define multiple custom [JavaScripts and CSS](/platform/channels/templates.html#css-and-javascript) to the site was added.
* The option to create [custom layouts](/platform/channels/templates.html#custom-layouts) to the template builder to further use on pages was added.
* The option to get the results of the site search as Json object was added.

<Badge text="Customers" type="customers" vertical="middle"/>
* You can only delete forms that are disabled now.

### 9.1.5 - December 1, 2020
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Multiple bugs were fixed.
* Multiple improvements to navigation and usability.

<Badge text="Content" type="content" vertical="middle"/>
* The option to use [operators](/platform/content/public-api-reference.html#operators) [in], [has], and [nin] on fields slug, name, uuid and category was added.
* The option to use [bulk actions](/platform/content/entries.html#bulk-actions) on entries was added.

<Badge text="Channels" type="channels" vertical="middle"/>
* The option to get the [total entries](/platform/content/public-api-reference.html#access-entries-in-a-space) after using a liquid content filter was added.
* The option to use the same widget multiple times in the same page was added.

<Badge text="Customers" type="customers" vertical="middle"/>
* A new and fresh interface to build [Targets](/platform/customers/targets.html) including the option to use `AND` & `OR` operators.

### 9.1.4 - November 10, 2020
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Multiple bugs were fixed.
* Multiple improvements to navigation and usability.
* Multiple security improvements.

<Badge text="Channels" type="channels" vertical="middle"/>
* The option to [publish multiple items](/platform/channels/sites.html#review-and-joint-publication) in one action was added.
* The option to [delegate child routes](/platform/channels/pages.html#child-routes-delegation) in a page using JavaScript router was added.

### 9.1.3 - October 16, 2020
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Multiple bugs were fixed.
* Multiple improvements to navigation and usability.
* Multiple security improvements.

### 9.1.2 - October 8, 2020
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Multiple bugs were fixed.
* Multiple improvements to navigation and usability.
* Multiple security improvements.

<Badge text="Channels" type="channels" vertical="middle"/>
* The drop `page` that includes the home page and custom pages was added

<Badge text="Customers" type="customers" vertical="middle"/>
* The option to use messaging tempates in already created campaigns was added
* The option to [delete users](/platform/customers/users.html#additional-options) was added

### 9.1.1 - September 25, 2020
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Multiple bugs were fixed.
* Multiple improvements to navigation and usability.
* Multiple security improvements.

<Badge text="Content" type="content" vertical="middle"/>
* The option to delete archived entries was added

<Badge text="Channels" type="channels" vertical="middle"/>
* The option to [copy sites](/platform/channels/sites.html) and all its content was added

### 9.1.0 - September 4, 2020
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* [Scheduler](/platform/core/key-concepts.html#scheduled): Schedule a change in the future without the need to unpublish what is already published.
* Modyo Lite: Access a version of Modyo that includes the Core with the Content and Channels applications.
* [New preview mode](/platform/core/key-concepts.html#preview-mode): Allows you to preview content, pages, templates, widgets and navigation.
* ElasticSearch version update to 7.4
* MySQL version update to 5.7 (adds support for emojis)
* Multiple bugs were fixed.
* Multiple improvements to navigation and usability.
* Multiple security improvements.

<Badge text="Content" type="content" vertical="middle"/>
* Improvements in performance and scalability of the public content API.

<Badge text="Channels" type="channels" vertical="middle"/>
* [Global variables](/platform/core/key-concepts.html#global-variables): Reuse snippets between sites.
* [Improvements to SEO](/platform/channels/pages.html#meta-tags):  Customize meta-tags for your pages from an easy-to-use interface.
* The option to import [custom redirects](/platform/channels/sites.html#custom-redirects) for the site was added.

### 9.0.9 - August 12, 2020
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Improved support for session cookies for older browsers

### 9.0.8 - June 15, 2020
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Security enhancements to the file upload endpoints.
* Multiple bugs were fixed.
* Multiple improvements to navigation and usability.

<Badge text="Content" type="content" vertical="middle"/>
* Different Liquid Drops were added according to the file types in the [asset manager](/platform/content/asset-manager.html#file-properties).

<Badge text="Channels" type="channels" vertical="middle"/>
* Code samples were added when creating new [content views](/platform/channels/templates.html#automated-content-views)
* An input attribute selector was added to the content views.

<Badge text="Customers" type="customers" vertical="middle"/>
* File type questions on [forms](/platform/customers/forms.html#add-field) were removed.

### 9.0.7 - June 01, 2020
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Improvements to management and plan fees
* Added empty view of [my tasks](/platform/core/the-modyo-interface.html).
* Multiple bugs solved.
* Multiple navigation and usability improvements.

<Badge text="Content" type="content" vertical="middle"/>
* The [preview mode](/platform/content/entries.html#preview) is changed so that by default it always uses the editable templates.
* New views are added when there are no elements created in [entries](/platform/content/entries.html), [types](/platform/content/types.html), [categories](/platform/content/entries.html#categories) and [spaces](/platform/content/spaces.html).
* The [search operator](/platform/content/public-api-reference.html#filters-2) is added to search the location fields of the entries.

<Badge text="Channels" type="channels" vertical="middle"/>
* An example is added when creating [content views](/platform/channels/templates.html#content-views).
* The files [manifest.json and serviceworker.js](/platform/channels/sites.html#pwa) are left public, while privacy is forced on files [robots.txt and sitemap.xml](/platform/channels/sites.html#seo).

<Badge text="Customers" type="customers" vertical="middle"/>
* New views are added when there are no items created in [users](/platform/customers/users.html), [targets](/platform/customers/targets.html), [forms](/platform/customers/forms.html) and [campaigns](/platform/customers/messaging.html).

### 9.0.6 - April 30, 2020
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* FOG support is added with Azure and Google Cloud as a base for Modyo installation.
* Added integration with [Google Authenticator](/platform/core/security.html) for second team member authentication factor.
* Added [password policies](/platform/core/security.html#password-policy) for team members.
* Multiple bugs solved.
* Multiple navigation and usability improvements.

<Badge text="Content" type="content" vertical="middle"/>
* You will only see the spaces where you are allowed to be a member of the team.
* The possibility of [remove spaces](/platform/content/spaces.html#general) is added.

<Badge text="Channels" type="channels" vertical="middle"/>
* Adding [redirect table](/platform/channels/sites.html#custom-redirects) will allow you to reuse old urls with a good SEO and redirect them to new site URLs.
* The content where you search in the pages is improved.
* Snippets are added to [enable PWA](/platform/channels/sites.html#pwa) in the site's base JavaScript when the property is enabled.
* Added possibility to integrate google tag manager to sites.
* Only sites where you have permissions as a team member will be displayed.
* Added ability to [remove sites](/platform/channels/sites.html#general).

<Badge text="Insights" type="insights" vertical="middle"/>
* Added view of [reports in insights](/platform/insights/data-studio.html).

### 9.0.5 - March 19, 2020
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Multiple bugs solved.
* Multiple navigation and usability improvements.

<Badge text="Channels" type="channels" vertical="middle"/>
* Content is added to search results on sites from the front end

### 9.0.4 - March 12, 2020
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Multiple bugs solved.
* Multiple navigation and usability improvements.

<Badge text="Channels" type="channels" vertical="middle"/>
* Text search in [template builder](/platform/channels/templates.html), to facilitate changes.
* Added feature to force publishing widgets via [Modyo CLI](/platform/channels/widgets.html).

### 9.0.3 - March 02, 2020
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Multiple bugs solved.
* Multiple navigation and usability improvements.

<Badge text="Content" type="content" vertical="middle"/>
* Obtaining the content delivery token through the [JavaScript SDK](/platform/content/public-api-reference.html#private-content).

<Badge text="Channels" type="channels" vertical="middle"/>
* Customize the reaction of a site when a url does not exist, [showing a 404 error or redirecting to home](/platform/channels/sites.html#restrictions).

### 9.0.2 - February 04, 2020
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Multiple bugs solved.
* Multiple navigation and usability improvements.

<Badge text="Content" type="content" vertical="middle"/>
* Use locations in content with maps or with a form, configuring a google api key in the account settings.
* Improvements to the [liquid SDK](/platform/content/public-api-reference.html#liquid-sdk) content.
* Usability improvements to the [asset manager](/platform/content/asset-manager.html).

### 9.0.1 - January 17, 2020
&nbsp;
<Badge text="Core" type="core"/>
* Multiple bugs solved.
* Multiple navigation and usability improvements.

<Badge text="Content" type="content" vertical="middle"/>
* Added functionality to [preview content](/platform/content/entries.html#preview) on sites, despite being headless, when using content on a Modyo site you can use the tool to preview that content.

<Badge text="Channels" type="channels" vertical="middle"/>
* Functionality is added to create [custom content views](/platform/channels/templates.html#content-views) on sites.
* A list of pages using each widget is added, so you can see the effects of a change wherever it is used.

### 9.0.0 - December 19, 2019
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Separation of users and [team members](/platform/core/roles.html#team), those who have access to the platform are separated from the users of the page itself
* New [roles and permissions](/platform/core/roles.html).
* [Team review](/platform/core/key-concepts.html), replacing the workflow application, allows the team to collaborate for the approval of the publication and the transition to production.
* Multiple bugs solved.
* Multiple navigation and usability improvements.

<Badge text="Content" type="content" vertical="middle"/>
* New [content application](/platform/content/), with all headless content.
* New [asset manager](/platform/content/asset-manager.html) that allows to have all the files of an account in one place.

<Badge text="Channels" type="channels" vertical="middle"/>
* New minimal theme 2020 cleaner and easier to adapt
