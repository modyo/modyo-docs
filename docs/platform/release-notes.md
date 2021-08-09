---
search: true
---

# Release notes

### 9.2.X - First release planned for the first quarter of 2021.
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Administrator groups: Easily add users corresponding to different sites or spaces.

<Badge text="Channels" type="channels" vertical="middle"/>
* Site stages: Work in a safe pre-productive environment of a site without compromising the integrity of what has already been published.

<Badge text="Customers" type="customers" vertical="middle"/>
* Business Events: Track any event that is relevant to your business in Modyo, and leverage events for customer segmentation.
* User Realms: Set up different user realms to access different sites or even different stages of the same site.

### 9.1.24 - 9 August, 2021
&nbsp;
<Badge text="Channels" type="channels" vertical="middle"/>
* Fixed issue with widgets and content views cache on preview.
* Fixed issue with status code of imported redirections.

### 9.1.24 - 14 July, 2021
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Platform jQuery version updated.

<Badge text="Channels" type="channels" vertical="middle"/>
* Fixed problem that prevented saving items with the max number of backup versions.
* Fixed bug with copied pages with widgets and variables.

<Badge text="Customers" type="customers" vertical="middle"/>
* Raw mailing allowed for messaging API.
* Fixed bugs with form responses export.

### 9.1.23 - 22 June, 2021
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Multiple security improvements.
* What's new newsletter.

<Badge text="Content" type="content" vertical="middle"/>
* Fix issue with timezone of Date fields.

<Badge text="Customers" type="customers" vertical="middle"/>
* Remove restrictions for email editor.

<Badge text="Channels" type="channels" vertical="middle"/>
* Pages can be deleted.

### 9.1.22 - 10 June, 2021
&nbsp;
<Badge text="Channels" type="channels" vertical="middle"/>
* Remove route restrictions for site redirects

### 9.1.21 - May 28, 2021
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Fix to security issues

### 9.1.20 - May 27, 2021
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Multiple bug fixes.
* User experience improvements.

### 9.1.19 - May 19, 2021
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Multiple bug fixes.

### 9.1.18 - May 18, 2021
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Multiple security improvements.

<Badge text="Channels" type="channels" vertical="middle"/>
* Page tree is reimplemented

### 9.1.17 - May 5, 2021
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Performance improvements

### 9.1.16 - April 23, 2021
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Multiple bugs resolved.
* Multiple security enhancements.

<Badge text="Channels" type="channels" vertical="middle"/>
* Fixed a bug that caused the "Save" button in the page builder to not work correctly.
* Fixed a bug when creating new sites where the "About Us" page was left without a layout selected.

### 9.1.15 - April 14, 2021
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Multiple bugs resolved.
* Added to the panel a tool to resolve inconsistencies in secondary structure to maintain the order of the pages of the site.
* Fixed a bug when uploading very large images to the file manager.
* Fixed a bug that caused the code editor to freeze on specific liquid syntaxes.

<Badge text="Channels" type="channels" vertical="middle"/>
* Added [new Liquid filters](/platform/channels/liquid-markup.html#filters) that allow using algorithms such as md5, sha1, sha256, hmac_sha1, hmac_sha256 and base64_encod.
* Page indexing is improved so that you can now find results that contain text from the content referenced in the pages.

### 9.1.14 - Abril 1, 2021
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Multiple bugs resolved.

<Badge text="Channels" type="channels" vertical="middle"/>
* A bug where you could loose the control over the templates was resolved.

### 9.1.13 - March 25, 2021
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Multiple bugs resolved.
* Multiple navigation and usability improvements.
* Multiple security improvements.
* Multiple JS libraries with vulnerabilities updated.

<Badge text="Content" type="content" vertical="middle"/>
* Added dynamic filters by field values in the entries index.

<Badge text="Channels" type="channels" vertical="middle"/>
* Fixed a bug where copying a site did not consider templates.

<Badge text="Customers" type="customers" vertical="middle"/>
* Fixed a bug where the integration with OIDC redirected to the user's profile and not to the site from where the flow was started.

### 9.1.12 - March 19, 2021
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Multiple bugs were fixed.
* Multiple improvements to navigation and usability.
* Multiple security improvements.

<Badge text="Content" type="content" vertical="middle"/>
* New filters were added to the Liquid SDK for content that enables to [search](/platform/content/public-api-reference.html#filter-entries), filter and [sort](/platform/content/public-api-reference.html#order-entries) by custom fields of the content type

<Badge text="Customers" type="customers" vertical="middle"/>
* Form language is now tied to the site associated instead of the account language.

### 9.1.11 - March 2, 2021
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Multiple bugs were fixed.
* Multiple improvements to navigation and usability.
* Multiple security improvements.
* Errors caused by standard attributes with specific formats in OIDC integration were fixed.
* Bugs that caused the publish/unpublish schedule to run 10 minutes later were fixed.
* A particular case where the HTML view of the rich text editor did not save changes was fixed.

### 9.1.10 - February 23, 2021
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Multiple bugs were fixed.
* Multiple performance improvements.

<Badge text="Channels" type="channels" vertical="middle"/>
* The option to [filter by slug](/platform/content/public-api-reference.html#filter-entries) in the Liquid SDK using the filter `by_slug` was added.
* The option to [unpublish all widgets](/platform/channels/widgets.html) and archive all non published widgets, even if they are being used in pages, was added.

### 9.1.9 - February 10, 2021
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Multiple bugs were fixed.
* Multiple performance improvements.

### 9.1.8 - February 2, 2021
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Multiple bugs were fixed.
* Multiple improvements to navigation and usability.

### 9.1.7 - January 25, 2021
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Multiple bugs were fixed.
* Multiple improvements to navigation and usability.
* Multiple security improvements.

<Badge text="Content" type="content" vertical="middle"/>
* The option to [edit entries in bulk](/platform/content/entries.html#bulk-edit) was added.
* The option to filters by author and targets in the index of entries was added.

<Badge text="Channels" type="channels" vertical="middle"/>
* The option to decide whether you want your widgets in the widget builder to [load synchronously or asynchronously](/platform/channels/widgets.html#synchronous-and-asynchronous-loading) was added.

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
