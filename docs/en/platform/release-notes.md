---
search: true
---

# Release Notes

## 9.2

### 9.2.22 - December 9, 2022

<Badge text="Core" type="core" vertical="middle"/>

* Security enhancements

<Badge text="Channels" type="channels" vertical="middle"/>

* Added dynamic filtering of content in liquid through url params
* The way to delete a stage has changed, now it is done directly from the stage settings.

<Badge text="Customers" type="customers" vertical="middle"/>

* Automatic forms and form view are removed, now only the form snippet is available.


### 9.2.21 - November 07, 2022

<Badge text="Core" type="core" vertical="middle"/>

* Security enhancements

<Badge text="Channels" type="channels" vertical="middle"/>

* Support for sites with domains without SSL is removed.


### 9.2.20 - October 27, 2022

<Badge text="Core" type="core" vertical="middle"/>

* Maintenance for pre-production environments

### 9.2.19 - October 12, 2022

<Badge text="Core" type="core" vertical="middle"/>

* Froala license update

<Badge text="Customers" type="customers" vertical="middle"/>

* OAuth flow is reversed with refresh token.


### 9.2.18 - October 07, 2022

<Badge text="Core" type="core" vertical="middle"/>

* Security enhancements
* Dependency update

<Badge text="Channels" type="channels" vertical="middle"/>

* Page list view and the ability to switch between table and list view are added.

<Badge text="Content" type="content" vertical="middle"/>

* A link is added to the liquid reference of an asset for editing.

<Badge text="Customers" type="customers" vertical="middle"/>

* Improvements to the OAuth2 flow
* OAuth2 client configuration view added
* Overview view is added with information about actions and information about a realm
* Bulk user import is eliminated

<Badge text="Insights" type="insights" vertical="middle"/>

* The “Data Studio” view is deleted


### 9.2.17 - September 20, 2022

<Badge text="Core" type="core" vertical="middle"/>

* Security enhancements
* Visual consistency of permissions and roles fixed

<Badge text="Content" type="content" vertical="middle"/>

* The identifier is added to the search in the space list

<Badge text="Customers" type="customers" vertical="middle"/>

* User export is fixed


### 9.2.16 - August 23, 2022

<Badge text="Core" type="core" vertical="middle"/>

* The framework is updated to the latest version (7.0.2)
* Ruby is updated to the latest version (3.1)
* It updates dependencies
* Product Improvements
* Security enhancements
* Added option to disable routes to sitemap.xml and robots.txt

<Badge text="Channels" type="channels" vertical="middle"/>

* The missing jquery.min.js is fixed when loading the widget manager
* Publication inconsistency is fixed when team review is enabled

<Badge text="Content" type="content" vertical="middle"/>

* Fixed a problem when uploading some svgs to the asset manager

<Badge text="Customers" type="customers" vertical="middle"/>

* Extends to the Notifications Administrative API to mark messages as read


### 9.2.15 - July 27, 2022

<Badge text="Core" type="core" vertical="middle"/>

* Alternative_id included in Commerce index, export, and order search


### 9.2.14 - July 04, 2022

<Badge text="Customers" type="customers" vertical="middle"/>

* Fix access token authorizations in multi-site realms


### 9.2.13 - June 28, 2022

<Badge text="Core" type="core" vertical="middle"/>

* Security enhancements
* 404 is prevented in setup otp

<Badge text="Channels" type="channels" vertical="middle"/>

* Fixed bug in the initial edition of duplicate widgets on a Widget Page
* Added flag for enabling categories in path for content pages 
* Fixed deployment of Targets option in Pages
* Fixed problem when removing favicon and apple icon from a site, which affected their copies

<Badge text="Content" type="content" vertical="middle"/>

* Fix sort filter that failed when sorting entries by text fields
* Fixed problem with multiline field, which was left with one character when deleting all text
* Corrected error when selecting entries in the content list, where only those selected on the current page were added


### 9.2.12 - June 06, 2022

<Badge text="Core" type="core" vertical="middle"/>

* Security enhancements

<Badge text="Channels" type="channels" vertical="middle"/>

* Fixed the link of the breadcrumbs with the scope of the stage
* Fix the overflow of the name column in the list of sites
* The service worker base template has been improved
* Improved experience by generating a manifest for the PWA 
* Fixed list of unchanged differences after stage creation


### 9.2.11 - May 27, 2022

<Badge text="Core" type="core" vertical="middle"/>

* Security enhancements


### 9.2.10 - May 23, 2022

<Badge text="Core" type="core" vertical="middle"/>

* Security enhancements
* ReCAPTCHA is added for admin users
* Fixed bug when updating the avatar of imported users with missing information
* Admin session expiration is added

<Badge text="Channels" type="channels" vertical="middle"/>

* Fixed error when synchronizing migrated content pages on sites with stages
* Google tag manager ID is excluded when creating a new stage

<Badge text="Customers" type="customers" vertical="middle"/>

* Correct links to documentation in segments

<Badge text="Content" type="content" vertical="middle"/>

* Liquid support is added in text fields when creating content


### 9.2.9 - May 03, 2022

<Badge text="Core" type="core" vertical="middle"/>

* Security enhancements
* Application level error 500 is handled when using invalid HTTP verbs
* Parameter for tolerance in seconds for access token (OIDC access token clock skew)

<Badge text="Channels" type="channels" vertical="middle"/>

* Fix issue when publishing page tree with 3 levels
* Fix problem with full url of entries by default
* Fix escaping meta tags breaks interpolation with Liquid

<Badge text="Customers" type="customers" vertical="middle"/>

* Added reCAPTCHA for Realms


### 9.2.8 - April 8, 2022
<Badge text="Core" type="core" vertical="middle"/>

* Security enhancements

<Badge text="Channels" type="channels" vertical="middle"/>

* Enhancements in Service Worker experience

<Badge text="Content" type="content" vertical="middle"/>

* Collections can be referenced using brackets in Liquid SDK

<Badge text="Customers" type="customers" vertical="middle"/>

* Fixed problem with sending campaigns

### 9.2.7 - March 10, 2022
<Badge text="Core" type="core" vertical="middle"/>

* Update liquidjs version
* Update category names are not reflected in entries
* Attributes of the request drop does not consider the entry slug in content pages
* IntegrationsToIDPS migration fails due to new openidc_userinfo_enabled attribute
* Duplicate accounts in onboarding
* Direct authentication in Realm with Google leads to error 404
* Implement Cybersource payment method 
* Added tags in New Asset modal


### 9.2.6 - February 22, 2022

<Badge text="Core" type="core" vertical="middle"/>

* New transactional emails from the platform
* Optional User Info for OIDC integration

<Badge text="Content" type="content" vertical="middle"/>

* Fix drop entry.meta.url
* Fix deletion of referenced entries
* Improvements to the multiline editor

<Badge text="Customers" type="customers" vertical="middle"/>

* Fix problem when changing realm of a site
* Fixed issue with campaign editor
* Fixed problem with accounts with default site and without realm

<Badge text="Channels" type="channels" vertical="middle"/>

* Routes finished in slash are redirected to improve SEO
* Reflected XSS is prevented in request drop
* Contamination with invalid routes is prevented

### 9.2.5 - January 27, 2022
<Badge text="Channels" type="channels" vertical="middle"/>
* Content Pages are incorporated
* Fix problems with preview bar

<Badge text="Content" type="content" vertical="middle"/>
* Improvements and fixes in Entries editor

<Badge text="Core" type="core" vertical="middle"/>
* SCIM support is added for admin users

### 9.2.4 - December 30, 2021
<Badge text="Core" type="core" vertical="middle"/>
* Fixed problem that contaminated the cache when performing previews

### 9.2.2 - December 1, 2021
<Badge text="Core" type="core" vertical="middle"/>
Fixed issue when allowing tag style with MODYO_HTML_ALLOWED_ATTRS environment variable

<Badge text="Content" type="content" vertical="middle"/>
Fix bug with tag filter with 100 or more tags in admin

### 9.2.1 - November 25, 2021
<Badge text="Content" type="content" vertical="middle"/>
* Fixed bug with file limit in asset manager
* Improvements when copying entry from another locale
* Add category name and slug to Entry drop and content API

<Badge text="Channels" type="channels" vertical="middle"/>
* Fix issue with widget preview
* Login with access token on the site

<Badge text="Core" type="core" vertical="middle"/>
* Security enhancements

<Badge text="Customers" type="customers" vertical="middle"/>
* Improvements to the campaign editor

### 9.2.0 - November 15, 2021

<Badge text="Channels" type="channels" vertical="middle"/>
* Security Headers Management
* New minimal theme
* Navigation builders
* Seven stages

<Badge text="Customers" type="customers" vertical="middle"/>
* User Realms

<Badge text="Core" type="core" vertical="middle"/>
* Team member groups
* Multiple full admins
* Landing page “Get started”
* Froala editor

## 9.1
### 9.1.35 - December 29, 2021

<Badge text="Channels" type="channels" vertical="middle"/>
* Fix bug with cache in snippet preview
* Fix site language validation

### 9.1.34 - November 19, 2021

<Badge text="Content" type="content" vertical="middle"/>
* Fixed bug with file limit in asset manager
* Improvements when copying entry from another locale
* Add category name and slug to Entry drop and content API

<Badge text="Channels" type="channels" vertical="middle"/>
* Login with access token on the site

### 9.1.33 - November 5, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Call to discovery service is prevented in OIDC callback

<Badge text="Content" type="content" vertical="middle"/>
* Fixed bug that prevented filtering entries by more than 100 tags in admin

### 9.1.32 - October 28, 2021

<Badge text="Core" type="core" vertical="middle"/>
* AppShell OAuth 2.0 provider

<Badge text="Channels" type="channels" vertical="middle"/>
* Fixed bug that affects resetting templates
* Cache is more granular now that it takes UserAgent into consideration

### 9.1.31 - October 7, 2021

<Badge text="Core" type="core" vertical="middle"/>
* SAML response validation is fixed for Azure AD

### 9.1.30 - September 24, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Enhancements to Security Headers

<Badge text="Customers" type="customers" vertical="middle"/>
* Fixed email validation.

### 9.1.29 - September 9, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Fixed error with invalid user access token.

### 9.1.28 - September 1, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Multiple improvements to Security Headers.

<Badge text="Channels" type="channels" vertical="middle"/>
* Additional liquid tags are allowed.

### 9.1.27 - August 27, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Double creation of access tokens fixed.

<Badge text="Channels" type="channels" vertical="middle"/>
* Reset page error fixed.
* Prevention of cookies creation in public sites.

<Badge text="Content" type="content" vertical="middle"/>
* Bulk unpublishing, archiving, and deleting of entries issue fixed

### 9.1.26 - August 11, 2021

<Badge text="Channels" type="channels" vertical="middle"/>
* Redirect for expired sessions fixed.
* Parent-child page order bug fixed.


### 9.1.25 - August 9, 2021

<Badge text="Channels" type="channels" vertical="middle"/>
* Performance issues fix
* Fixed issue with widget preview cache and content views.
* Fixed an error with status code when importing redirects.

### 9.1.24 - July 14, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Platform jQuery versions are updated.

<Badge text="Channels" type="channels" vertical="middle"/>
* Fixed issue that prevents saving elements with the limit number of backup versions.
* Fixed bug when copying pages that use widgets with variables.

<Badge text="Customers" type="customers" vertical="middle"/>
* Raw emails are allowed to be sent through the messaging API.
* Se arreglan problemas al exportar respuestas de formularios.

### 9.1.23 - June 22, 2021
<Badge text="Core" type="core" vertical="middle"/>
* Multiple security enhancements.
* Newsletter with the latest news.

<Badge text="Content" type="content" vertical="middle"/>
* Fixed issue with time zones in fields of type Date.

<Badge text="Customers" type="customers" vertical="middle"/>
* Restrictions are removed in email editor.

<Badge text="Channels" type="channels" vertical="middle"/>
* Pages can now be deleted.

### 9.1.22 - June 10, 2021
<Badge text="Channels" type="channels" vertical="middle"/>
* Route restrictions are removed for site redirects

### 9.1.21 - May 28, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Fixed security issues

### 9.1.20 - May 27, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Multiple bug fixes.
* User Experience Improvements

### 9.1.19 - May 19, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Multiple bug fixes.

### 9.1.18 - May 18, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Multiple security enhancements.

<Badge text="Channels" type="channels" vertical="middle"/>
* Page tree is reimplemented

### 9.1.17 - May 5, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Performance Improvements

### 9.1.16 - April 23, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Multiple bug fixes.
* Multiple security enhancements.

<Badge text="Channels" type="channels" vertical="middle"/>
* Resolved an issue that caused the “Save” button on the page builder to not work properly.
* Resolves an error when creating new sites where the “About Us” page was left without a selected layout.

### 9.1.15 - April 14, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Multiple bug fixes.
* A tool for resolving inconsistencies in secondary structure is added to the panel to maintain the order of pages in the site.
* Resolves an error when uploading very large images to the file manager.
* Resolved a bug that caused the code editor to freeze against liquid-specific syntaxes.

<Badge text="Channels" type="channels" vertical="middle"/>
* [New Liquid filters](/en/platform/channels/liquid-markup.html#standard-filters) are added that allow algorithms such as md5, sha1, sha256, hmac_sha1, hmac_sha256, and base64_encod.
* Page indexing is improved so that results that contain text of the referenced content can now be found on pages.

### 9.1.14 - April 1, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Multiple bug fixes.

<Badge text="Channels" type="channels" vertical="middle"/>
* Resolves a bug where control of locks was lost in the template builder.

### 9.1.13 - March 25, 2021

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bug fixes.
- Multiple navigation and usability improvements
- Multiple security enhancements.
- Multiple JS libraries with vulnerabilities are updated

<Badge text="Content" type="content" vertical="middle"/>
* Dynamic filters are added by field values in the input index.

<Badge text="Channels" type="channels" vertical="middle"/>
* Resolved a bug where site copying did not consider templates.

<Badge text="Customers" type="customers" vertical="middle"/>
* Resolved a bug where the OIDC integration flow redirected to the user's profile and not to the site from which the flow started.

### 9.1.12 - March 19, 2021

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bug fixes.
- Multiple navigation and usability improvements
- Multiple security enhancements.

<Badge text="Content" type="content" vertical="middle"/>
* [New filters are added to the Liquid SDK](/en/platform/content/public-api-reference.html#filter-entries) of content that allow you to select, filter and [sort](/en/platform/content/public-api-reference.html#order-entries) by custom fields of the content type.

<Badge text="Customers" type="customers" vertical="middle"/>
* The language in which forms are displayed is associated according to the language of the partner site and not the language of the account

### 9.1.11 - March 02, 2021

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bug fixes.
- Multiple navigation and usability improvements
- Multiple security enhancements.
- Resolve errors caused by standard attributes with specific formats in integration via OIDC
- Resolved errors that caused the publish/unpublish schedule to run 10 minutes late
- Resolved a particular case where the HTML view of the rich text editor did not save changes

### 9.1.10 - February 23, 2021

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bug fixes.
- Multiple performance enhancements.

<Badge text="Channels" type="channels" vertical="middle"/>
* Added the ability to [filter by slug](/en/platform/content/public-api-reference.html#filter-entries) of entries in the liquid SDK using the `by_slug` filter
* Added the ability to [unpublish widgets](/en/platform/channels/widgets.html) even if they are being referenced, and all unpublished widgets can be archived (even if referenced on some pages)

### 9.1.9 - February 10, 2021

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bug fixes.
- Multiple performance enhancements.

### 9.1.8 - February 02, 2021

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bug fixes.
- Multiple navigation and usability improvements

### 9.1.7 - January 25, 2021

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bug fixes.
- Multiple navigation and usability improvements
- Multiple security enhancements.

<Badge text="Content" type="content" vertical="middle"/>
* Add the option to [bulk edit entries](/en/platform/content/entries.html#bulk-edit).
* Filters are added by author and segment in the entry index.

<Badge text="Channels" type="channels" vertical="middle"/>
* Added the ability to decide whether you want your widget builder widgets to be [loaded synchronously or asynchronously](/en/platform/channels/widgets.html#synchronous-and-asynchronous-loading).

### 9.1.6 - December 23, 2020

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bug fixes.
- Multiple navigation and usability improvements
- Multiple security enhancements.

<Badge text="Channels" type="channels" vertical="middle"/>
* Add the option to define [variables in custom widgets](/en/platform/channels/widgets.html#widget-variables).
* Add the option to define multiple [JavaScripts and CSS](/en/platform/channels/templates.html#css-and-javascript) as site assets.
* Add the option to create [custom layouts](/en/platform/channels/templates.html#custom-layouts) and then be able to use them on pages.
* Added the ability to view site search results in json format

<Badge text="Customers" type="customers" vertical="middle"/>
* Now you can only delete the forms that are disabled.

### 9.1.5 - December 1, 2020

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bug fixes.
- Multiple navigation and usability improvements

<Badge text="Content" type="content" vertical="middle"/>
* The option to use [operators](/en/platform/content/public-api-reference.html#operators) [in], [has] and [nin] is added in slug, name, uuid, and categories fields.
* The option to use [bulk actions](/en/platform/content/entries.html#bulk-actions) in entries was added.

<Badge text="Channels" type="channels" vertical="middle"/>
* [Total entries filter](/en/platform/content/public-api-reference.html#access-entries-in-a-space) is added after using a content filter.
* Added the functionality of distinguishing the same instantiated widget multiple times on the same page.

<Badge text="Customers" type="customers" vertical="middle"/>
* A new and improved [Segments](/en/platform/customers/segments.html) creation interface is added including the option to use `AND` and `OR` operators.

### 9.1.4 - November 10, 2020

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bug fixes.
- Multiple navigation and usability improvements
- Multiple security enhancements.

<Badge text="Channels" type="channels" vertical="middle"/>
* [Review and joint publication](/en/platform/channels/sites.html#review-and-joint-publication) is added to Sites.
* Added the ability to [delegate sub-paths](/en/platform/channels/pages.html#child-routes-delegation) of pages using JavaScript.

### 9.1.3 - October 16, 2020

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bug fixes.
- Multiple navigation and usability improvements
- Multiple security enhancements.

### 9.1.2 - October 8, 2020

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bug fixes.
- Multiple navigation and usability improvements
- Multiple security enhancements.

<Badge text="Channels" type="channels" vertical="middle"/>
* Add the drop `page` that considers both the home page and custom pages.

<Badge text="Customers" type="customers" vertical="middle"/>
* Added the ability to use templates in already created messaging campaigns.
* Added the possibility to [delete users](/en/platform/customers/realms.html#additional-options).

### 9.1.1 - September 25, 2020

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bug fixes.
- Multiple navigation and usability improvements
- Multiple security enhancements.

<Badge text="Content" type="content" vertical="middle"/>
* The ability to delete archived entries is added.

<Badge text="Channels" type="channels" vertical="middle"/>
* Added the ability to [copy sites](/en/platform/channels/sites.html) and all their published content.

### 9.1.0 - September 4, 2020

<Badge text="Core" type="core" vertical="middle"/>

- [Scheduler](en/platform/core/key-concepts.html#scheduled): Schedule a change in the future without the need to unpublish what is already published.
- Modyo Lite: Access a version of Modyo that includes Core and Content and Channels apps.
- [New Preview Mode](/en/platform/core/key-concepts.html#preview-mode): A preview mode that allows you to view content, pages, templates, widgets and navigation together.
- Upgrade the ElasticSearch version to 7.4.
- Upgrading the MySQL version to version 5.7 (adds support for emojis).
- Multiple bug fixes.
- Multiple navigation and usability improvements
- Multiple security enhancements.

<Badge text="Content" type="content" vertical="middle"/>
* Performance and scalability improvements in the public content API.

<Badge text="Channels" type="channels" vertical="middle"/>
* [Global variables](/en/platform/core/key-concepts.html#global-variables): Reuse cross-site snippets.
* [Improvements to SEO](/en/platform/channels/pages.html#meta-tags): Customize the meta-tags for your pages from an easy-to-use interface.
* Added the ability to import [custom redirects](/en/platform/channels/sites.html#custom-redirects) from the site.

### 9.0.9 - August 12, 2020

<Badge text="Core" type="core" vertical="middle"/>

- Support for session cookies is improved for older browsers.

### 9.0.8 - 15 de Junio del 2020

<Badge text="Core" type="core" vertical="middle"/>

- Security enhancements are added to file upload endpoints.
- Multiple bug fixes.
- Multiple navigation and usability improvements

<Badge text="Content" type="content" vertical="middle"/>
* Different liquid drops are added depending on the file type in the [asset manager](/en/platform/content/asset-manager.html#file-properties).

<Badge text="Channels" type="channels" vertical="middle"/>
* Code sample is added when creating new [content views](/en/platform/channels/templates.html#content-views).
* An attribute selector of the entry is added to content views.

<Badge text="Customers" type="customers" vertical="middle"/>
* File-type questions are deleted in [forms](/en/platform/customers/forms.html#add-field).

### 9.0.7 - 1st June 2020

<Badge text="Core" type="core" vertical="middle"/>

- Added possibility to integrate google tag manager to sites.
- Empty view of [my tasks](/en/platform/core/the-modyo-interface.html) is added.
- Multiple bug fixes.
- Multiple navigation and usability improvements

<Badge text="Content" type="content" vertical="middle"/>
* [Preview](/en/platform/content/entries.html#preview) mode is changed so that by default it always uses editable templates.
* New views are added when there are no items created in [entries](/en/platform/content/entries.html), [types](/en/platform/content/types.html), [categories](/en/platform/content/entries.html#categories), and [spaces](/en/platform/content/spaces.html).
* [Search operator](/en/platform/content/public-api-reference.html#filters) is added to lookup by location fields.

<Badge text="Channels" type="channels" vertical="middle"/>
* An example is added when creating [content views](/en/platform/channels/templates.html#content-views).
* The files [manifest.json and serviceworker.js](/en/platform/channels/sites.html#pwa) are released, while privacy files [robots.txt and sitemap.xml](/en/platform/channels/sites.html#seo) is enforced.
* Improvements to the usability and concepts of [themes](/en/platform/channels/templates.html#themes) in the template builder

<Badge text="Customers" type="customers" vertical="middle"/>
* New views are added when there are no items created in [users](/en/platform/customers/realms.html), [segments](/en/platform/customers/segments.html), [forms](/en/platform/customers/forms.html), and [campaigns](/en/platform/customers/messaging.html).

### 9.0.6 - April 30, 2020

<Badge text="Core" type="core" vertical="middle"/>

- Support for FOG is added with Azure and Google Cloud as a Modyo installation base.
- Added integration with [Google Authenticator](/en/platform/core/security.html#two-step-authentication) for second factor of team member authentication.
- Added [password policies](/en/platform/core/security.html#password-policy) for team members.
- Multiple bug fixes.
- Multiple navigation and usability improvements

<Badge text="Content" type="content" vertical="middle"/>
* Only the spaces where you have permissions as a team member will be visible.
* The possibility to [delete spaces](/en/platform/content/spaces.html#general) is added.

<Badge text="Channels" type="channels" vertical="middle"/>
* [Redirect table](/en/platform/channels/sites.html#custom-redirects) is added that will allow you to reuse old urls with good SEO and redirect them to the new site URLs.
* The content where you search on pages is improved.
* Snippets are added for [enable PWA](/en/platform/channels/sites.html#pwa) in site default JavaScript when the property is enabled.
* The possibility of integrating google tag manager to sites is added.
* Only sites where you have permissions as a team member will be seen.
* The possibility of [delete sites](/en/platform/channels/sites.html#general) is added.

<Badge text="Insights" type="insights" vertical="middle"/>
* [Reports in insights](/en/platform/insights/data-studio.html) view is added .

### 9.0.5 - March 19, 2020

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bug fixes.
- Multiple navigation and usability improvements

<Badge text="Channels" type="channels" vertical="middle"/>
* Content is added to site search results from the front end.

### 9.0.4 - March 12, 2020

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bug fixes.
- Multiple navigation and usability improvements

<Badge text="Channels" type="channels" vertical="middle"/>
* Text search engine in [template builder](/en/platform/channels/templates.html), to make changes easier.
* Added feature to force widgets to be published through [Modyo CLI](/en/platform/channels/widgets.html #modyo-cli).

### 9.0.3 - March 02, 2020

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bug fixes.
- Multiple navigation and usability improvements

<Badge text="Content" type="content" vertical="middle"/>
* Obtaining the content delivery token through the [JavaScript SDK](/en/platform/content/public-api-reference.html#private-content).

<Badge text="Channels" type="channels" vertical="middle"/>
* Customizing the reaction of a site when a url does not exist, [showing a 404 error or redirecting to home](/en/platform/channels/sites.html#restrictions).

### 9.0.2 - February 4, 2020

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bug fixes.
- Multiple navigation and usability improvements

<Badge text="Content" type="content" vertical="middle"/>
* Use locations in content with maps or with a form, configuring a google api key in the account settings.
* Improvements to the [liquid SDK](/en/platform/content/public-api-reference.html#liquid-sdk) content.
* Usability improvements to the [asset manager](/en/platform/content/asset-manager.html).

### 9.0.1 - January 17, 2020

<Badge text="Core" type="core"/>
* Multiple bug fixes.
* Multiple navigation and usability improvements

<Badge text="Content" type="content" vertical="middle"/>
* Added functionality to [preview content](/en/platform/content/entries.html#preview) on sites, despite being headless, when using content on a Modyo site you can use the tool to preview that content.

<Badge text="Channels" type="channels" vertical="middle"/>
* Functionality is added to create [custom content views](/en/platform/channels/templates.html#content-views) on sites.
* A list of pages using each widget is added, so you can see the effects of a change wherever it is used.

### 9.0.0 - December 19, 2019

<Badge text="Core" type="core" vertical="middle"/>

- Separation of users and [team members](/en/platform/core/roles.html#team), those who have access to the platform are separated from the users of the page itself.
- New [roles and permissions](/en/platform/core/roles.html).
- [Team review](/en/platform/core/key-concepts.html), replacing the workflow application, allows the team to collaborate for the approval of the publication and the transition to production.
- Multiple bug fixes.
- Multiple navigation and usability improvements

<Badge text="Content" type="content" vertical="middle"/>
* New [content application](/en/platform/content/), with all headless content.
* New [asset manager](/en/platform/content/asset-manager.html) that allows to have all the files of an account in one place.

<Badge text="Channels" type="channels" vertical="middle"/>
* New minimal theme 2020 cleaner and easier to adapt.
