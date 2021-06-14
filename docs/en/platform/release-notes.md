---
search: true
---

# Release Notes

<Badge text="Channels" type="channels" vertical="middle"/>
* Fix to security issues

### 9.1.21 - May 28, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Multiple bug fixes

### 9.1.20 - May 27, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Multiple bug fixes
* User experience improvements.

### 9.1.19 - May 19, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Multiple security enhancements..

### 9.1.18 - May 18, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Page tree is reimplemented

<Badge text="Channels" type="channels" vertical="middle"/>
* Performance improvements

### 9.1.17 - May 5, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Multiple bug fixes

### 9.1.16 - April 23, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Fixed a bug that caused the "Save" button in the page builder to not work correctly.
* Fixed a bug when creating new sites where the "About Us" page was left without a layout selected.

<Badge text="Channels" type="channels" vertical="middle"/>
* Multiple bug fixes
* Added to the panel a tool to resolve inconsistencies in secondary structure to maintain the order of the pages of the site.

### 9.1.15 - April 14, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Added [new Liquid filters](/en/platform/channels/liquid-markup.html#filters) that allow using algorithms such as md5, sha1, sha256, hmac_sha1, hmac_sha256 and base64_encod.
* Page indexing is improved so that you can now find results that contain text from the content referenced in the pages.
* Fixed a bug when uploading very large images to the file manager.
* Fixed a bug that caused the code editor to freeze on specific liquid syntaxes.

<Badge text="Channels" type="channels" vertical="middle"/>
* Multiple bug fixes
* Page indexing is improved so that you can now find results that contain text from the content referenced in the pages.

### 9.1.14 - April 1, 2021

<Badge text="Core" type="core" vertical="middle"/>
* A bug where you could loose the control over the templates was resolved.

<Badge text="Channels" type="channels" vertical="middle"/>
* Multiple bug fixes

### 9.1.13 - March 25, 2021

<Badge text="Core" type="core" vertical="middle"/>

- Added dynamic filters by field values in the entries index.
- Multiple navigation and usability improvements.
- Multiple security enhancements.
- Multiple JS libraries with vulnerabilities updated.

<Badge text="Content" type="content" vertical="middle"/>
* Fixed a bug where copying a site did not consider templates.

<Badge text="Channels" type="channels" vertical="middle"/>
* Fixed a bug where the integration with OIDC redirected to the user's profile and not to the site from where the flow was started.

<Badge text="Customers" type="customers" vertical="middle"/>
* Multiple bug fixes

### 9.1.12 - March 19, 2021

<Badge text="Core" type="core" vertical="middle"/>

- New filters were added to the Liquid SDK for content that enables to [search](/en/platform/content/public-api-reference.html#filter-entries), filter and [sort](/en/platform/content/public-api-reference.html#order-entries) by custom fields of the content type.
- Multiple navigation and usability improvements.
- Multiple security enhancements.

<Badge text="Content" type="content" vertical="middle"/>
* Form language is now tied to the site associated instead of the account language.

<Badge text="Customers" type="customers" vertical="middle"/>
* Multiple bug fixes

### 9.1.11 - March 02, 2021

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bug fixes
- Multiple performance improvements.
- Multiple security enhancements.
- Errors caused by standard attributes with specific formats in OIDC integration were fixed.
- Bugs that caused the publish/unpublish schedule to run 10 minutes later were fixed.
- A particular case where the HTML view of the rich text editor did not save changes was fixed.

### 9.1.10 - February 23, 2021

<Badge text="Core" type="core" vertical="middle"/>

- The option to [filter by slug](/en/platform/content/public-api-reference.html#filter-entries) in the Liquid SDK using the filter `by_slug` was added.
- The option to [unpublish all widgets](/en/platform/channels/widgets.html) and archive all non published widgets, even if they are being used in pages, was added.

<Badge text="Channels" type="channels" vertical="middle"/>
* Multiple bug fixes
* Multiple performance improvements.

### 9.1.9 - February 10, 2021

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bug fixes
- Multiple navigation and usability improvements.

### 9.1.8 - February 02, 2021

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bug fixes
- Multiple navigation and usability improvements.

### 9.1.7 - January 25, 2021

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bugs solved.
- The option to filters by author and targets in the index of entries was added.
- Multiple security enhancements.

<Badge text="Content" type="content" vertical="middle"/>
* The option to decide whether you want your widgets in the widget builder to [load synchronously or asynchronously](/en/platform/channels/widgets.html#synchronous-and-asynchronous-loading) was added.
* The option to filters by author and targets in the index of entries was added.

<Badge text="Channels" type="channels" vertical="middle"/>
* Multiple bug fixes

### 9.1.6 - December 23, 2020

<Badge text="Core" type="core" vertical="middle"/>

- The option to add [widget variables](/en/platform/channels/widgets.html#widget-variables) was added.
- The option to define multiple custom [JavaScripts and CSS](/en/platform/channels/templates.html#css-and-javascript) to the site was added.
- The option to create [custom layouts](/en/platform/channels/templates.html#custom-layouts) to the template builder to further use on pages was added.

<Badge text="Channels" type="channels" vertical="middle"/>
* You can only delete forms that are disabled now.
* The option to import [custom redirects](/en/platform/channels/sites.html#custom-redirects) for the site was added.
* [Improvements to SEO](/en/platform/channels/pages.html#meta-tags): Customize meta-tags for your pages from an easy-to-use interface.
* The option to get the results of the site search as Json object was added.

<Badge text="Customers" type="customers" vertical="middle"/>
* Multiple bug fixes

### 9.1.5 - December 1, 2020

<Badge text="Core" type="core" vertical="middle"/>

- The option to use [operators](/en/platform/content/public-api-reference.html#operators) [in], [has], and [nin] on fields slug, name, uuid and category was added.
- The option to use [bulk actions](/en/platform/content/entries.html#bulk-actions) on entries was added.

<Badge text="Content" type="content" vertical="middle"/>
* The option to get the [total entries](/en/platform/content/public-api-reference.html#access-entries-in-a-space) after using a liquid content filter was added.
* The option to use the same widget multiple times in the same page was added.

<Badge text="Channels" type="channels" vertical="middle"/>
* A new and fresh interface to build [Targets](/en/platform/customers/targets.html) including the option to use `AND` & `OR` operators.
* It adds the functionality of distinguishing the same widget instantiated multiple times on a single page.

<Badge text="Customers" type="customers" vertical="middle"/>
* Multiple bug fixes

### 9.1.4 - November 10, 2020

<Badge text="Core" type="core" vertical="middle"/>

- The option to [publish multiple items](/platform/channels/sites.html#review-and-joint-publication) in one action was added.
- The option to [delegate child routes](/platform/channels/pages.html#child-routes-delegation) in a page using JavaScript router was added.
- Multiple security enhancements.

<Badge text="Channels" type="channels" vertical="middle"/>
* Multiple bug fixes
* Multiple navigation and usability improvements.

### 9.1.3 - October 16, 2020

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bug fixes
- Multiple navigation and usability improvements.
- Multiple security enhancements.

### 9.1.2 - October 8, 2020

<Badge text="Core" type="core" vertical="middle"/>

- The drop `page` that includes the home page and custom pages was added.
- Multiple navigation and usability improvements.
- Multiple security enhancements.

<Badge text="Channels" type="channels" vertical="middle"/>
* The option to use messaging templates in already created campaigns was added.

<Badge text="Customers" type="customers" vertical="middle"/>
* Multiple bug fixes
* Multiple navigation and usability improvements.

### 9.1.1 - September 25, 2020

<Badge text="Core" type="core" vertical="middle"/>

- The option to delete archived entries was added.
- Multiple navigation and usability improvements.
- Multiple security enhancements.

<Badge text="Content" type="content" vertical="middle"/>
* The option to [copy sites](/en/platform/channels/sites.html) and all its content was added.

<Badge text="Channels" type="channels" vertical="middle"/>
* [Scheduler](/en/platform/core/key-concepts.html#scheduled): Schedule a change in the future without the need to unpublish what is already published.

### 9.1.0 - September 4, 2020

<Badge text="Core" type="core" vertical="middle"/>

- Improvements in performance and scalability of the public content API.
- Modyo Lite: Modyo Lite: Access a version of Modyo that includes the Core with the Content and Channels applications.
- [New preview mode](/en/platform/core/key-concepts.html#preview-mode): Allows you to preview content, pages, templates, widgets and navigation.
- ElasticSearch version update to 7.4.
- MySQL version update to 5.7 (adds support for emojis).
- Multiple bug fixes
- Multiple navigation and usability improvements.
- Multiple security enhancements.

<Badge text="Content" type="content" vertical="middle"/>
* [Global variables](/en/platform/core/key-concepts.html#global-variables): Reuse snippets between sites.

<Badge text="Channels" type="channels" vertical="middle"/>
* Improved support for session cookies for older browsers.
* \[SEO Improvements\](/es/platform/channels/pages.html #meta -tags): Customize meta-tags for your pages from an easy-to-use interface.
* Added ability to [remove sites](/en/platform/channels/sites.html#general).

### 9.0.9 - August 12, 2020

<Badge text="Core" type="core" vertical="middle"/>

- Security enhancements to the file upload endpoints.

### 9.0.8 - June 15, 2020

<Badge text="Core" type="core" vertical="middle"/>

- Different Liquid Drops were added according to the file types in the [asset manager](/en/platform/content/asset-manager.html#file-properties).
- Multiple bug fixes
- Multiple navigation and usability improvements.

<Badge text="Content" type="content" vertical="middle"/>
* Code samples were added when creating new [content views](/en/platform/channels/templates.html#automated-content-views).

<Badge text="Channels" type="channels" vertical="middle"/>
* File type questions on [forms](/en/platform/customers/forms.html#add-field) were removed.
* An input attribute selector was added to the content views.

<Badge text="Customers" type="customers" vertical="middle"/>
* Improvements to management and plan fees.

### 9.0.7 - June 01, 2020

<Badge text="Core" type="core" vertical="middle"/>

- The [preview mode](/en/platform/content/entries.html#preview) is changed so that by default it always uses the editable templates.
- New views are added when there are no elements created in [entries](/en/platform/content/entries.html), [types](/en/platform/content/types.html), [categories](/en/platform/content/entries.html#categories) and [spaces](/en/platform/content/spaces.html).
- The [search operator](/en/platform/content/public-api-reference.html#filters-2) is added to search the location fields of the entries.
- Multiple navigation and usability improvements.

<Badge text="Content" type="content" vertical="middle"/>
* An example is added when creating [content views](/en/platform/channels/templates.html#content-views).
* The files [manifest.json and serviceworker.js](/en/platform/channels/sites.html#pwa) are left public, while privacy is forced on files [robots.txt and sitemap.xml](/en/platform/channels/sites.html#seo).
* Improvements to usability and concepts of [themes](/en/platform/channels/templates.html#themes) in the template builder.

<Badge text="Channels" type="channels" vertical="middle"/>
* New views are added when there are no items created in [users](/en/platform/customers/users.html), [targets](/en/platform/customers/targets.html), [forms](/en/platform/customers/forms.html) and [campaigns](/en/platform/customers/messaging.html).
* The \[manifest.json and serviceworker.js\](/es/platform/channels/sites.html #pwa) files are left public, while [robots.txt and sitemap.xml] file privacy (/es/platform/channels/sites.html #seo) is forced.
* Usability improvements to the [asset manager](/en/platform/content/asset-manager.html).

<Badge text="Customers" type="customers" vertical="middle"/>
* FOG support is added with Azure and Google Cloud as a base for Modyo installation.

### 9.0.6 - April 30, 2020

<Badge text="Core" type="core" vertical="middle"/>

- You will only see the spaces where you are allowed to be a member of the team.
- The possibility of [remove spaces](/en/platform/content/spaces.html#general) is added.
- Added [password policies](/en/platform/core/security.html#password-policy) for team members.
- Multiple bug fixes
- Multiple navigation and usability improvements.

<Badge text="Content" type="content" vertical="middle"/>
* Adding [redirect table](/en/platform/channels/sites.html#custom-redirects) will allow you to reuse old urls with a good SEO and redirect them to new site URLs.
* The content where you search in the pages is improved.

<Badge text="Channels" type="channels" vertical="middle"/>
* Added view of [reports in insights](/en/platform/insights/data-studio.html).
* The content where the pages are searched is improved.
* Snippets are added to [enable PWA](/en/platform/channels/sites.html#pwa) in the site's base JavaScript when the property is enabled.
* Added possibility to integrate google tag manager to sites.
* Only sites where you have permissions as a team member will be displayed.
* The option to [delete users](/en/platform/customers/users.html#additional-options) was added.

<Badge text="Insights" type="insights" vertical="middle"/>
* Multiple bug fixes

### 9.0.5 - March 19, 2020

<Badge text="Core" type="core" vertical="middle"/>

- Content is added to search results on sites from the front end.
- Multiple navigation and usability improvements.

<Badge text="Channels" type="channels" vertical="middle"/>
* Multiple bug fixes

### 9.0.4 - March 12, 2020

<Badge text="Core" type="core" vertical="middle"/>

- Text search in [template builder](/en/platform/channels/templates.html), to facilitate changes.
- Added feature to force publishing widgets via [Modyo CLI](/en/platform/channels/widgets.html).

<Badge text="Channels" type="channels" vertical="middle"/>
* Multiple bug fixes
* Multiple navigation and usability improvements.

### 9.0.3 - March 02, 2020

<Badge text="Core" type="core" vertical="middle"/>

- Obtaining the content delivery token through the [JavaScript SDK](/en/platform/content/public-api-reference.html#private-content).
- Multiple navigation and usability improvements.

<Badge text="Content" type="content" vertical="middle"/>
* Customize the reaction of a site when a url does not exist, [showing a 404 error or redirecting to home](/en/platform/channels/sites.html#restrictions).

<Badge text="Channels" type="channels" vertical="middle"/>
* Multiple bug fixes

### 9.0.2 - February 04, 2020

<Badge text="Core" type="core" vertical="middle"/>

- Use locations in content with maps or with a form, configuring a google api key in the account settings.
- Improvements to the [liquid SDK](/en/platform/content/public-api-reference.html#liquid-sdk) content.

<Badge text="Content" type="content" vertical="middle"/>
* Multiple bug fixes
* Multiple navigation and usability improvements.
* Usability improvements to [asset manager](/es/platform/content/asset-manager.html).

### 9.0.1 - January 17, 2020

<Badge text="Core" type="core"/>
* Added functionality to [preview content](/en/platform/content/entries.html#preview) on sites, despite being headless, when using content on a Modyo site you can use the tool to preview that content.
* Multiple navigation and usability improvements.

<Badge text="Content" type="content" vertical="middle"/>
* Functionality is added to create [custom content views](/en/platform/channels/templates.html#content-views) on sites.

<Badge text="Channels" type="channels" vertical="middle"/>
* Separation of users and [team members](/en/platform/core/roles.html#team), those who have access to the platform are separated from the users of the page itself.
* New [roles and permissions](/en/platform/core/roles.html).

### 9.0.0 - December 19, 2019

<Badge text="Core" type="core" vertical="middle"/>

- New [content application](/en/platform/content/), with all headless content.
- New [asset manager](/en/platform/content/asset-manager.html) that allows to have all the files of an account in one place.
- [Team review](/en/platform/core/key-concepts.html), replacing the workflow application, allows the team to collaborate for the approval of the publication and the transition to production.
- Multiple bug fixes
- Multiple navigation and usability improvements.

<Badge text="Content" type="content" vertical="middle"/>
* New minimal theme 2020 cleaner and easier to adapt.
* New [asset manager](/es/platform/content/asset-manager.html) that allows you to have all the files in an account in one place.

<Badge text="Channels" type="channels" vertical="middle"/>
* New minimal theme 2020 cleaner and easier to adapt.
