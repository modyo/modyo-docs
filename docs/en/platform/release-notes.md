---
search: true
---

# Release Notes

## 9.2

### 9.2.39 - July 11, 2023
<Badge text="Customers" type="customers" vertical="middle"/>

* You are asked to enter a password before deleting a user account

 <Badge text="Core" type="core" vertical="middle"/>

* Error fixed in the OAuth2 flow

### 9.2.38 - July 07, 2023
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements.
* Improves the information shown in the activity logs

 <Badge text="Channels" type="channels" vertical="middle"/>

* Fixes problems accessing the security headers edition
* Adds the viewer role to team members. This role can even see items to be synchronized or in a release.

 <Badge text="Content" type="content" vertical="middle"/>

* Add the viewer role to team members.

 <Badge text="Customers" type="customers" vertical="middle"/>

* Add configuration for a post-login home page. After a successful login to the kingdom, you will be redirected to this page.


### 9.2.37 - June 30, 2023
 <Badge text="Core" type="core" vertical="middle"/>

* Security improvements.
* Improvements in the configuration of expiration and inactivity policies.

 <Badge text="Channels" type="channels" vertical="middle"/>

* Add configuration for new security headers, Cross-Origin-Embedder-Policy, Cross-Origin-Opener-Policy, Cross-Origin-Resource-Policy.

<Badge text="Customers" type="customers" vertical="middle"/>

* Corrects problem when reading a notification in the profile, now it is correctly marked as read.
* Adds a new parameter (redirect_to) to the login URL of a site to redirect to a particular view or to a site within the organization.
* Email campaigns are modified, multiple mailings are replaced by campaign cloning for new mailings for greater simplicity in their management.


### 9.2.36 - June 19, 2023
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements.
* Add administrator permission validation to the endpoints of the API's swagger documentation.

 <Badge text="Channels" type="channels" vertical="middle"/>

* Fixes the problem of empty differences after synchronizing stages.

<Badge text="Content" type="content" vertical="middle"/>

* Fixes the problem of listing repeated spaces for users in a permission group.
* Fixes problem of publishing pages when they come from the synchronization of stages.

<Badge text="Customers" type="customers" vertical="middle"/>

* The default email sender field in the realm settings is successfully validated, now it can't be empty either. 

 <Badge text="Insights" type="insights" vertical="middle"/>

* Corrects the initial value of the date filter, now it shows the selected range correctly.



### 9.2.35 - May 30, 2023
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* Correct the permission system for user groups.

<Badge text="Channels" type="channels" vertical="middle"/>

* Improves the widget reference between stages, now it is not necessary to create the widget in other stages through synchronization.
* Fixes problems when searching on sites with tilded words.
* Correct differences in pages, the delegated paths option is now displayed.
* Add login button when previewing a widget.
* The differences between large widgets or widgets coming from the CLI are limited. They now show an informational message if there are differences.

 <Badge text="Content" type="content" vertical="middle"/>

* Adds option to enable/disable the use of SVG images

<Badge text="Customers" type="customers" vertical="middle"/>

* Improves search in the list of orders.
* Improvement in the edition of payment methods.



### 9.2.34 - May 16, 2023

<Badge text="Core" type="core" vertical="middle"/>

* Improvements in the display of tags in the selector when the values are too long

 <Badge text="Channels" type="channels" vertical="middle"/>

* Improvements in site search, categories are now considered in the links generated to content pages
* Fix bug that prevented unpublishing pages without having dependencies in a context with stages

 <Badge text="Content" type="content" vertical="middle"/>

* Add unpublication date to the metadata of a content

 <Badge text="Customers" type="customers" vertical="middle"/>

* Fix permission problems when accessing and editing forms

 <Badge text="Insights" type="insights" vertical="middle"/>

* Fixes visual and metric issues in the graphs
* Fix problems accessing the display of graphics


### 9.2.33 - May 05, 2023

 <Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* Improves visibility in the list of tags when they are very long
* New Getstared

 <Badge text="Content" type="content" vertical="middle"/>

* Content publishers can now publish in bulk from the list of entries

 <Badge text="Channels" type="channels" vertical="middle"/>

* Corrects search engine in list of pages in list mode

<Badge text="Customers" type="customers" vertical="middle"/>

* Fixes error when creating a new identity provider of the openid type specifying claims


### 9.2.32 - April 21, 2023

 <Badge text="Core" type="core" vertical="middle"/>

* Security improvements

 <Badge text="Content" type="content" vertical="middle"/>

* Changes the allowed asset sizes, leaving 6MB for images and 10MB for other types of files
* Fixes problems when replacing images with SVG extension
* Fixes problems when displaying a logo in SVG


### 9.2.31 - April 6, 2023

<Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* Password policies are added when creating new accounts

<Badge text="Content" type="content" vertical="middle"/>

* Fixes permanent error in the asset manager


### 9.2.30 - March 24, 2023

<Badge text="Core" type="core" vertical="middle"/>

* Security enhancements

<Badge text="Channels" type="channels" vertical="middle"/>

* Fixes updating widgets coming from the CLI


### 9.2.29 - March 22, 2023

<Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* Corrects slow loading of orders into the index, which was caused when there are a large number of orders.


### 9.2.28 - March 21, 2023

<Badge text="Core" type="core" vertical="middle"/>

* Security improvements

 <Badge text="Channels" type="channels" vertical="middle"/>

* Fix the delete of widgets coming from the CLI
* Add modal to name a new cloned widget
* Fixes problem when modifying variables in widgets

<Badge text="Customers" type="customers" vertical="middle"/>

* Fixes administrator permissions in Realms


### 9.2.27 - March 10, 2023

 <Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* The trial period is increased to 30 days
* validation of a user's downtime is added to the backoffice, configurable in the security section.
* Fixed problem with validating administrator passwords
* New filter added for disabled users

<Badge text="Channels" type="channels" vertical="middle"/>

* new minimal with Boostrap 5 for new sites

 <Badge text="Content" type="content" vertical="middle"/>

* New overview view of a space is added


### 9.2.26 - February 20, 2023

<Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* Add application access selector to user groups
* Password change is forced for new administrator users

<Badge text="Channels" type="channels" vertical="middle"/>

* Allows you to delete archived widgets
* Fixes problems when archiving a widget
* Page SEO improvements
* Fixes problems with the category selector

<Badge text="Content" type="content" vertical="middle"/>

* Add the new excerpt field to the meta of an entry
* Fixes problems when editing a richtext field

 <Badge text="Customers" type="customers" vertical="middle"/>

* Sending welcome emails is optional on public forms
* Fixes problems when editing a segment


### 9.2.25 - January 25, 2023

<Badge text="Channels" type="channels" vertical="middle"/>

* Fixes unpublishing a content page when it doesn't have an associated space or type

 <Badge text="Customers" type="customers" vertical="middle"/>

* Parameter accepted <span v-pre> {{order.uuid}} </span> in the redirect_url field when creating a Payments order


### 9.2.24 - January 20, 2023


 <Badge text="Channels" type="channels" vertical="middle"/>

* Performance improvements when loading widget index
* Allows you to create a new stage with the same name as one that is in the process of being deleted


### 9.2.23 - January 19, 2023

 <Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* Log Separation
* Fix “Review” button in Team Review emails
* The archived item will be visually separated from the others in the state filters
* Password and signup paths stop responding to extensions that don't match 
* Management accounts that are not accessed within a certain amount of time will be disabled
* Adds format validation for MODYO_PAPERCLIP_FOG_CREDENTIALS
* The URLs of table views from the Modyo backend can be shared while maintaining the chosen filters 

 <Badge text="Content" type="content" vertical="middle"/>

* Fixes error that prevented approving users with the default user and admin roles in a space 

<Badge text="Channels" type="channels" vertical="middle"/>

* Adds site timezone to site drop
* Add liquid drops for answered forms
* Liquid drop is added for forms answered by users in a kingdom
* Fixes stages duplication in the selector in the site list 


 <Badge text="Customers" type="customers" vertical="middle"/>

* Adds Zendesk Integration
* Implement password security policy for kingdoms 
* Payments are migrated at the Kingdom level


### 9.2.22 - December 09, 2022

<Badge text="Core" type="core" vertical="middle"/>

* Security improvements

 <Badge text="Channels" type="channels" vertical="middle"/>

* Dynamic content filtering is added in Liquid through URL parmas
* The way you delete a stage changes, now it's done directly from the stage settings.

 <Badge text="Customers" type="customers" vertical="middle"/>

* The automatic forms and the form view are removed, now only the form snippet is available


### 9.2.21 - November 07, 2022

<Badge text="Core" type="core" vertical="middle"/>

* Security improvements

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

* Security improvements
* Updating dependencies

<Badge text="Channels" type="channels" vertical="middle"/>

* Page list view and the possibility to switch between table and list view are added.

<Badge text="Content" type="content" vertical="middle"/>

* A link is added to the liquid reference of an asset for editing.

<Badge text="Customers" type="customers" vertical="middle"/>

* Improvements to the OAuth2 flow
* OAuth2 client configuration view added
* Overview view is added with action information and information from a realm
* Mass importing of users is eliminated

 <Badge text="Insights" type="insights" vertical="middle"/>

* The 'Data Studio' view is deleted


### 9.2.17 - September 20, 2022

<Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* The visual consistency of permissions and roles is fixed

 <Badge text="Content" type="content" vertical="middle"/>

* The identifier is added to the search in the list of spaces

 <Badge text="Customers" type="customers" vertical="middle"/>

* User export is fixed


### 9.2.16 - August 23, 2022

 <Badge text="Core" type="core" vertical="middle"/> 

* Framework updated to the latest version (7.0.2)
* Ruby is updated to the latest version (3.1)
* Dependencies are updated
* Product improvements
* Security improvements
* Option to disable paths to sitemap.xml and robots.txt added

<Badge text="Channels" type="channels" vertical="middle"/>

* The jquery.min.js fault when loading the widget manager is fixed
* Publishing inconsistency is fixed when team review is enabled

 <Badge text="Content" type="content" vertical="middle"/>

* A problem when uploading some svgs to the asset manager is fixed

 <Badge text="Customers" type="customers" vertical="middle"/>

* Extends to the Notifications Management API to mark messages as read


### 9.2.15 - July 27, 2022

<Badge text="Core" type="core" vertical="middle"/>

* Alternative_id is included in Index, Export, and Commerce Order Search


### 9.2.14 - July 04, 2022

 <Badge text="Customers" type="customers" vertical="middle"/>

* Access token authorizations are fixed in multi-site kingdoms


### 9.2.13 - June 28, 2022

<Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* 404 is prevented in setup otp

 <Badge text="Channels" type="channels" vertical="middle"/>

* Bug fixed in the initial editing of duplicate widgets on a Widget Page
* Flag added for enabling categories in path for content pages 
* Fixed deployment of Targets option in Pages
* Corrects problem when deleting favicon and apple icons from a site, which affected their copies

 <Badge text="Content" type="content" vertical="middle"/>

* Sort filter that failed when sorting entries by text fields is fixed
* Fixed problem with multiline field, which was left with one character when all text was deleted
* Error corrected when selecting entries in the content list, where only those selected were added to the current page


### 9.2.12 - June 06, 2022

<Badge text="Core" type="core" vertical="middle"/>

* Security improvements

 <Badge text="Channels" type="channels" vertical="middle"/>

* The link between the breadcrumbs with the scope of the stage is corrected
* The overflow of the name column in the list of sites is corrected
* The base template of the service worker is improved
* The experience is improved when generating a manifest for the PWA 
* The list of unchanged differences after the creation of a stage is corrected


### 9.2.11 - May 27, 2022

 <Badge text="Core" type="core" vertical="middle"/>

* Security improvements


### 9.2.10 - May 23, 2022

<Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* reCAPTCHA is added for administrator users
* Fixed error when updating the avatar of imported users with missing information
* Administrator session expiration added

 <Badge text="Channels" type="channels" vertical="middle"/>

* Error fixed when synchronizing migrated content pages on sites with stages
* The google tag manager ID is excluded when creating a new stage

 <Badge text="Customers" type="customers" vertical="middle"/>

* Links to documentation in segments are corrected

 <Badge text="Content" type="content" vertical="middle"/> 

* Liquid support is added in text fields when creating content


### 9.2.9 - May 03, 2022

 <Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* Error 500 is controlled at the application level when using invalid HTTP verbs
* The parameter for tolerance in seconds for access token (OIDC access token clock skew)

<Badge text="Channels" type="channels" vertical="middle"/>

* Fixed problem when publishing page tree with 3 levels
* Fixed problem with full URL of entries by default
* Fixes escaped meta tags, breaks interpolation with Liquid

<Badge text="Customers" type="customers" vertical="middle"/>

* The use of reCAPTCHA for Realms is incorporated 


### 9.2.8 - April 8, 2022
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements

 <Badge text="Channels" type="channels" vertical="middle"/>

* Service Worker experience improvements

 <Badge text="Content" type="content" vertical="middle"/>

* Collections can be referenced using brackets in the Liquid SDK

<Badge text="Customers" type="customers" vertical="middle"/>

* Problem with sending campaigns is fixed

### 9.2.7 - March 10, 2022
 <Badge text="Core" type="core" vertical="middle"/>

* Update LiquidJS version
* Updating category names is not reflected in entries
* Attributes of the request drop do not consider the slug of the entry in content pages
* IntegrationsToIDPS migration fails due to new openidc_userinfo_enabled attribute
* Duplicate accounts in onboarding
* Direct authentication in Realm with Google leads to 404 error
* Implement Cybersource payment method 
* Add tags in New Asset modal


### 9.2.6 - February 22, 2022

<Badge text="Core" type="core" vertical="middle"/>

* New transactional emails from the platform
* Optional User Info in OIDC integration

<Badge text="Content" type="content" vertical="middle"/>

* Drop entry.meta.url is fixed
* Deleting linked entries is fixed
* Improvements are made to the multiline editor

<Badge text="Customers" type="customers" vertical="middle"/>

* Problem when changing a site's realm is fixed
* Problem fixed with campaign editor
* Problem fixed with accounts with default site without realm

<Badge text="Channels" type="channels" vertical="middle"/>

* Paths ending in Slash are redirected to improve SEO
* Reflected XSS is prevented in drop of request
* Contamination is prevented with invalid routes

### 9.2.5 - January 27, 2022
<Badge text="Channels" type="channels" vertical="middle"/>
* Content Pages are incorporated
* Problems with the preview bar are fixed

<Badge text="Content" type="content" vertical="middle"/>
* Improvements and fixes in the Entries editor

<Badge text="Core" type="core" vertical="middle"/>
* SCIM support for administrator users added

### 9.2.4 - December 30, 2021
<Badge text="Core" type="core" vertical="middle"/>
* Fixed an issue that contaminated the cache when previewing

### 9.2.2 - December 1, 2021
<Badge text="Core" type="core" vertical="middle"/>
Problem with allowing tag style with MODYO_HTML_ALLOWED_ATTRS environment variable is fixed

<Badge text="Content" type="content" vertical="middle"/>Bug fixed with filter with 100 or more tags in the admin

### 9.2.1 - November 25, 2021
<Badge text="Content" type="content" vertical="middle"/>
* Asset Manager bug with file limit fixed
* Improvements when copying entries from another locale
* Category name and slug are added in the Entry drop and in the content API

<Badge text="Channels" type="channels" vertical="middle"/>
* Widget preview repaired
* Logging in with access token is allowed on the site

<Badge text="Core" type="core" vertical="middle"/>
* Security improvements

 <Badge text="Customers" type="customers" vertical="middle"/> 
* Improvements to the campaign editor

### 9.2.0 - November 15, 2021

<Badge text="Channels" type="channels" vertical="middle"/>
* Security Headers Management
* New minimal theme
* Navigation Builders
* Site stages

 <Badge text="Customers" type="customers" vertical="middle"/> 
* User kingdoms

 <Badge text="Core" type="core" vertical="middle"/> 
* Team Member Groups
* Multiple full admins
* “Get started” landing page
* Publisher: Froala

## 9.1

### 9.1.43 - March 3, 2023

 <Badge text="Core" type="core" vertical="middle"/> 
* Correction to content migrations in 9.1, to facilitate the transition from 8.2 to newer versions

### 9.1.42 - February 13, 2023

 <Badge text="Core" type="core" vertical="middle"/> 
* Performance improvements for migrations, to facilitate the transition from 8.2 to newer versions

### 9.1.41 - December 15, 2022

 <Badge text="Core" type="core" vertical="middle"/> 
* Migrations are fixed in 9.1 to prepare migrations from 8.2

### 9.1.35 - December 29, 2021

 <Badge text="Channels" type="channels" vertical="middle"/> 
* Bug fixed with cache in snippet preview
* Site language validation is fixed

### 9.1.34 - November 19, 2021

 <Badge text="Content" type="content" vertical="middle"/> 
* Asset Manager bug with file limit fixed
* Improvements when copying entries from another locale
* Category name and slug are added in the Entry drop and in the content API

 <Badge text="Channels" type="channels" vertical="middle"/> 
* Logging in with access token is allowed on the site

### 9.1.33 - November 5, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Discovery service call is prevented in OIDC callback

 <Badge text="Content" type="content" vertical="middle"/> 
* Bug that prevented filtering entries by more than 100 tags in the admin has been fixed

### 9.1.32 - October 28, 2021

 <Badge text="Core" type="core" vertical="middle"/> 
* AppShell OAuth 2.0 provider

 <Badge text="Channels" type="channels" vertical="middle"/> 
* Bug affecting template resetting is fixed
* More granular cache now considered by the UserAgent

### 9.1.31 - October 7, 2021

 <Badge text="Core" type="core" vertical="middle"/> 
* SAML response validation for Azure AD is repaired

### 9.1.30 - September 24, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Improvements to Transverse Security Headers

 <Badge text="Customers" type="customers" vertical="middle"/> 
* Email validation is fixed.

### 9.1.29 - September 9, 2021

 <Badge text="Core" type="core" vertical="middle"/> 
* Error with invalid user access token is fixed.

### 9.1.28 - September 1, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Multiple enhancements to Security Headers.

<Badge text="Channels" type="channels" vertical="middle"/>
* Additional Liquid tags are allowed.

### 9.1.27 - August 27, 2021

 <Badge text="Core" type="core" vertical="middle"/> 
* Double sending is fixed when creating access tokens.

 <Badge text="Channels" type="channels" vertical="middle"/> 
* Error with page reset is fixed.
* The generation of cookies for public sites is prevented.

 <Badge text="Content" type="content" vertical="middle"/> 
* Problems are fixed with mass actions of unpublishing, archiving, and deleting entries.

### 9.1.26 - August 11, 2021

 <Badge text="Channels" type="channels" vertical="middle"/> 
* Redirect expired sessions are fixed.
* Bug that prevented reversing parent-child page order has been fixed.


### 9.1.25 - August 9, 2021

 <Badge text="Channels" type="channels" vertical="middle"/> 
* Performance issues fixed
* Problem with widget preview caching and content views is fixed.
* Error with status code when importing redirects is fixed.

### 9.1.24 - July 14, 2021

 <Badge text="Core" type="core" vertical="middle"/> 
* jQuery versions of the platform are updated.

 <Badge text="Channels" type="channels" vertical="middle"/> 
* An issue preventing items from being saved with the limited number of backup versions is fixed.
* An error is fixed when copying pages that use widgets with variables.

 <Badge text="Customers" type="customers" vertical="middle"/> 
* Sending raw emails through the messaging API is allowed.
* Problems when exporting form responses are fixed.

### 9.1.23 - June 22, 2021
 <Badge text="Core" type="core" vertical="middle"/> 
* Multiple security improvements.
* Newsletter with news.

 <Badge text="Content" type="content" vertical="middle"/> 
* The problem with the time zone of fields of type Date is fixed.

 <Badge text="Customers" type="customers" vertical="middle"/> 
* Restrictions in the email editor are removed.

 <Badge text="Channels" type="channels" vertical="middle"/> 
* Pages can now be deleted.

### 9.1.22 - June 10, 2021
 <Badge text="Channels" type="channels" vertical="middle"/> 
* Route restrictions for site redirects are removed

### 9.1.21 - May 28, 2021

 <Badge text="Core" type="core" vertical="middle"/> 
* Security issues fixed

### 9.1.20 - May 27, 2021

 <Badge text="Core" type="core" vertical="middle"/> 
* Multiple bugs resolved.
* User experience improvements

### 9.1.19 - May 19, 2021

 <Badge text="Core" type="core" vertical="middle"/> 
* Multiple bugs resolved.

### 9.1.18 - May 18, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Multiple security improvements.

 <Badge text="Channels" type="channels" vertical="middle"/> 
* Page tree is reimplemented

### 9.1.17 - May 5, 2021

 <Badge text="Core" type="core" vertical="middle"/> 
* Performance improvements

### 9.1.16 - April 23, 2021

 <Badge text="Core" type="core" vertical="middle"/> 
* Multiple bugs resolved.
* Multiple security improvements.

 <Badge text="Channels" type="channels" vertical="middle"/> 
* An error that caused the page builder's “Save” button to not work properly has been resolved.
* An error was resolved when creating new sites where the “About Us” page was left without a selected layout.

### 9.1.15 - April 14, 2021

 <Badge text="Core" type="core" vertical="middle"/> 
* Multiple bugs resolved.
* A tool for resolving inconsistencies in secondary structure is added to the panel to maintain the order of the pages of the site.
* An error when uploading very large images to the file manager is resolved.
* A bug that caused the code editor to freeze due to liquid-specific syntaxes has been resolved.

 <Badge text="Channels" type="channels" vertical="middle"/> 
* [new Liquid filters] (/es/platform/channels/liquid-markup.html #filtros -standard) are added that allow algorithms such as md5, sha1, sha256, hmac_sha1, hmac_sha256 and base64_encod to be used.
* Page indexing has been improved so that you can now find results that contain text from the content referenced on the pages.

### 9.1.14 - April 1, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Multiple bug fixes.

 <Badge text="Channels" type="channels" vertical="middle"/> 
* A bug in which control of locks was lost in the template builder was resolved.

### 9.1.13 - March 25, 2021

 <Badge text="Core" type="core" vertical="middle"/> 

- Multiple bugs resolved.
- Multiple navigation and usability improvements.
- Multiple security improvements.
- Multiple JS libraries with vulnerabilities are updated

 <Badge text="Content" type="content" vertical="middle"/> 
* Dynamic filters are added for field values in the entry index.

 <Badge text="Channels" type="channels" vertical="middle"/> 
* A bug where copying sites did not consider templates has been resolved.

 <Badge text="Customers" type="customers" vertical="middle"/> 
* A bug was resolved in which the integration flow with OIDC redirected to the user's profile and not to the site from where the flow started.

### 9.1.12 - March 19, 2021

 <Badge text="Core" type="core" vertical="middle"/> 

- Multiple bugs resolved.
- Multiple navigation and usability improvements.
- Multiple security improvements.

 <Badge text="Content" type="content" vertical="middle"/> 
* [new filters to the Liquid SDK] (/es/platform/content/public-api-reference.html #filtrar -entries) are added for content that allow you to select, filter and [sort] (/es/platform/content/public-api-reference.html #ordenar -entries) by custom fields of the content type.

<Badge text="Customers" type="customers" vertical="middle"/>
* The language in which forms are displayed is associated according to the language of the partner site and not the language of the account

### 9.1.11 - March 02, 2021

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bug fixes.
- Multiple navigation and usability improvements
- Multiple security enhancements.
- Resolves errors caused by standard attributes with specific formats in integration via OIDC
- Resolves errors that caused the publish/unpublish schedule to run 10 minutes late
- Resolves a particular case where the HTML view of the rich text editor did not save changes

### 9.1.10 - February 23, 2021

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bug fixes.
- Multiple performance enhancements.

<Badge text="Channels" type="channels" vertical="middle"/>
* Adds the ability to [filter by slug](/en/platform/content/public-api-reference.html#filter-entries) of entries in the liquid SDK using the `by_slug` filter
* Adds the ability to [unpublish widgets](/en/platform/channels/widgets.html) even if they are being referenced, and all unpublished widgets can be archived (even if referenced on some pages)

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
* Adds the option to [bulk edit entries](/en/platform/content/entries.html#bulk-edit).
* Filters are added by author and segment in the entry index.

<Badge text="Channels" type="channels" vertical="middle"/>
* Adds the ability to decide whether you want your widget builder widgets to be [loaded synchronously or asynchronously](/en/platform/channels/widgets.html#synchronous-and-asynchronous-loading).

### 9.1.6 - December 23, 2020

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bug fixes.
- Multiple navigation and usability improvements
- Multiple security enhancements.

<Badge text="Channels" type="channels" vertical="middle"/>
* Adds the option to define [variables in custom widgets](/en/platform/channels/widgets.html#widget-variables).
* Adds the option to define multiple [JavaScripts and CSS](/en/platform/channels/templates.html#css-and-javascript) as site assets.
* Adds the option to create [custom layouts](/en/platform/channels/templates.html#custom-layouts) and then be able to use them on pages.
* Adds the ability to view site search results in json format

<Badge text="Customers" type="customers" vertical="middle"/>
* Now, you can only delete forms that are disabled.

### 9.1.5 - December 1, 2020

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bug fixes.
- Multiple navigation and usability improvements

<Badge text="Content" type="content" vertical="middle"/>
* The option to use [operators](/en/platform/content/public-api-reference.html#operators) [in], [has] and [nin] is added in slug, name, uuid, and categories fields.
* The option to use [bulk actions](/en/platform/content/entries.html#bulk-actions) in entries was added.

<Badge text="Channels" type="channels" vertical="middle"/>
* [Total entries filter](/en/platform/content/public-api-reference.html#access-entries-in-a-space) is added after using a content filter.
* Adds the functionality of distinguishing the same instantiated widget multiple times on the same page.

<Badge text="Customers" type="customers" vertical="middle"/>
* A new and improved [Segments](/en/platform/customers/segments.html) creation interface added, including the option to use `AND` and `OR` operators.

### 9.1.4 - November 10, 2020

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bug fixes.
- Multiple navigation and usability improvements
- Multiple security enhancements.

<Badge text="Channels" type="channels" vertical="middle"/>
* [Review and joint publication](/en/platform/channels/sites.html#review-and-joint-publication) added to Sites.
* Adds the ability to [delegate sub-paths](/en/platform/channels/pages.html#child-routes-delegation) of pages using JavaScript.

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
* Adds the drop `page` that considers both the home page and custom pages.

<Badge text="Customers" type="customers" vertical="middle"/>
* Adds the ability to use templates in already created messaging campaigns.
* Adds the possibility to [delete users](/en/platform/customers/realms.html#additional-options).

### 9.1.1 - September 25, 2020

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bug fixes.
- Multiple navigation and usability improvements
- Multiple security enhancements.

<Badge text="Content" type="content" vertical="middle"/>
* Added ability to delete archived entries.

<Badge text="Channels" type="channels" vertical="middle"/>
* Adds the ability to [copy sites](/en/platform/channels/sites.html) and all their published content.

### 9.1.0 - September 4, 2020

<Badge text="Core" type="core" vertical="middle"/>

- [Scheduler](en/platform/core/key-concepts.html#scheduled): Schedule a change in the future without the need to unpublish what is already published.
- Modyo Lite: Access a version of Modyo that includes Core and Content and Channels apps.
- [New Preview Mode](/en/platform/core/key-concepts.html#preview-mode): Preview mode that allows you to view content, pages, templates, widgets, and navigation together.
- Upgrade ElasticSearch version to 7.4.
- MySQL version upgraded to version 5.7 (adds support for emojis).
- Multiple bug fixes.
- Multiple navigation and usability improvements
- Multiple security enhancements.

<Badge text="Content" type="content" vertical="middle"/>
* Performance and scalability improvements in the public content API.

<Badge text="Channels" type="channels" vertical="middle"/>
* [Global variables](/en/platform/core/key-concepts.html#global-variables): Reuse cross-site snippets.
* [SEO Improvements](/en/platform/channels/pages.html#meta-tags): Customize the meta-tags for your pages from an easy-to-use interface.
* Added the ability to import [custom redirects](/en/platform/channels/sites.html#custom-redirects) from the site.

### 9.0.9 - August 12, 2020

<Badge text="Core" type="core" vertical="middle"/>

- Support for session cookies improved for older browsers.

### 9.0.8 - June 15, 2020

<Badge text="Core" type="core" vertical="middle"/>

- Security enhancements added to file upload endpoints.
- Multiple bug fixes.
- Multiple navigation and usability improvements

<Badge text="Content" type="content" vertical="middle"/>
* Different liquid drops are added depending on the file type in the [asset manager](/en/platform/content/asset-manager.html#file-properties).

<Badge text="Channels" type="channels" vertical="middle"/>
* Code sample is added when creating new [content views](/en/platform/channels/templates.html#content-views).
* Attribute selector of an entry added to content views.

<Badge text="Customers" type="customers" vertical="middle"/>
* File-type questions are deleted in [forms](/en/platform/customers/forms.html#add-field).

### 9.0.7 - June 01, 2020

<Badge text="Core" type="core" vertical="middle"/>

- Adds possibility to integrate google tag manager to sites.
- Empty view of [my tasks](/en/platform/core/the-modyo-interface.html) is added.
- Multiple bug fixes.
- Multiple navigation and usability improvements

<Badge text="Content" type="content" vertical="middle"/>
* [Preview](/en/platform/content/entries.html#preview) mode is changed so that by default it always uses editable templates.
* New views are added when there are no items created in [entries](/en/platform/content/entries.html), [types](/en/platform/content/types.html), [categories](/en/platform/content/entries.html#categories), and [spaces](/en/platform/content/spaces.html).
* [Search operator](/en/platform/content/public-api-reference.html#filters) is added to lookup by location fields.

<Badge text="Channels" type="channels" vertical="middle"/>
* An example is added when creating [content views](/en/platform/channels/templates.html#content-views).
* The files [manifest.json and serviceworker.js](/en/platform/channels/sites.html#pwa) are released, while privacy files [robots.txt and sitemap.xml](/en/platform/channels/sites.html#seo) are enforced.
* Improvements to the usability and concepts of [themes](/en/platform/channels/templates.html#themes) in the template builder

<Badge text="Customers" type="customers" vertical="middle"/>
* New views are added when there are no items created in [users](/en/platform/customers/realms.html), [segments](/en/platform/customers/segments.html), [forms](/en/platform/customers/forms.html), and [campaigns](/en/platform/customers/messaging.html).

### 9.0.6 - April 30, 2020

<Badge text="Core" type="core" vertical="middle"/>

- Support for FOG is added with Azure and Google Cloud as a Modyo installation base.
- Added integration with [Google Authenticator](/en/platform/core/security.html#two-step-authentication) for second factor authentication for team members.
- Added [password policies](/en/platform/core/security.html#password-policy) for team members.
- Multiple bug fixes.
- Multiple navigation and usability improvements

<Badge text="Content" type="content" vertical="middle"/>
* Only the spaces where you have permissions as a team member will be visible.
* The possibility to [delete spaces](/en/platform/content/spaces.html#general) is added.

<Badge text="Channels" type="channels" vertical="middle"/>
* [Redirect table](/en/platform/channels/sites.html#custom-redirects) added, allows you to reuse old urls with good SEO and redirect them to the new site URLs.
* Content where you search on pages is improved.
* Snippets are added for [enable PWA](/en/platform/channels/sites.html#pwa) in site default JavaScript when the property is enabled.
* Added option of integrating google tag manager to sites.
* Only sites where you have permissions as a team member will be seen.
* Added option to [delete sites](/en/platform/channels/sites.html#general).

<Badge text="Insights" type="insights" vertical="middle"/>
* [Reports in insights](/en/platform/insights/data-studio.html) view added.

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
* Obtaining content delivery token through the [JavaScript SDK](/en/platform/content/public-api-reference.html#private-content).

<Badge text="Channels" type="channels" vertical="middle"/>
* Customized site reaction when a url does not exist, [showing a 404 error or redirecting to home](/en/platform/channels/sites.html#restrictions).

### 9.0.2 - February 04, 2020

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
* New [asset manager](/en/platform/content/asset-manager.html) enables having all the files of an account in one place.

<Badge text="Channels" type="channels" vertical="middle"/>
* New minimal theme 2020 cleaner and easier to adapt.
