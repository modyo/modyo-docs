---
search: true
---

# Release Notes

## 10.0
### 10.0.20 - March 10, 2025
<Badge text="Channels" type="channels" vertical="middle"/>

* Adds support for web assembly files as chunks in zip packages coming from the Modyo CLI
* Adds new Service-Worker-Allowed header in the site's security headers
* Fixes asset modal error
* Fixes csp nonce differences problem between the header and the view
* Adds liquid filters to handle form responses for a user in the construction of a site

  
### 10.0.19 - February 07, 2025
<Badge text="Core" type="core" vertical="middle"/>

* Security enhancements
* Explicitly adds samesite=Lax attribute to session cookie

<Badge text="Channels" type="channels" vertical="middle"/>

* Fixes permissions issue when uploading assets on sites


### 10.0. 18 - February 03, 2025
<Badge text="Core" type="core" vertical="middle"/>

* Security enhancements
* Fixes error when publishing at backup limit

<Badge text="Content" type="content" vertical="middle"/>

* Adds bulk editing of segments
* Restores borders of tables inserted in froala

<Badge text="Customers" type="customers" vertical="middle"/>

* Adds search engine in campaign listing.

### 10.0.17 - Janurary 14, 2025
<Badge text="Core" type="core" vertical="middle"/>
* Corrects author when cloning a content element, page, menu, widget, template, now the author of the new element is the one who executes the action.
* Corrects problem with the listing of sites, spaces and realms in the webhooks listing.

<Badge text="Content" type="content" vertical="middle"/>
* Corrects permission to obtain related entries when editing a content
* Fixes content indexing issues, content is now indexed for searches on content pages, content is indexed on publication and removed on unpublication, only widget pages are reindexed in the reindex job, in case they include content through the sdk
* Improved content indexing performance

<Badge text="Customers" type="customers" vertical="middle"/>
* Corrects queuing of multiple segment calculation jobs for one user
* Corrects user view to show all users when requested from segment listing

<Badge text="Channels" type="channels" vertical="middle"/>
* Fixes problems with the use of the search parameter using the filter_by_query_string filter

### 10.0.16 - December 23, 2024
<Badge text="Content" type="content" vertical="middle"/>
* Adds sorting inside a content field of type content list
* Fixes richtexts going blank when moving items within a repeating group
* Fixes error in copying content from another language when having a repeatable group

<Badge text="Customers" type="customers" vertical="middle"/>
* Improved performance in the calculation of user segments at login

<Badge text="Channels" type="channels" vertical="middle"/>
* Fixes problems when previewing global snippets

### 10.0.15 - December 12, 2024
<Badge text="Customers" type="customers" vertical="middle"/>
* Improved custom field type segment filter, now allows a list of values.

### 10.0.14 - December 10, 2024
<Badge text="Content" type="content" vertical="middle"/>
* Fixes error when editing content in bulk

<Badge text="Customers" type="customers" vertical="middle"/>
* Fixes multiple calls to count_matches endpoint

### 10.0.13 - December 05, 2024
<Badge text="Channels" type="channels" vertical="middle"/>

* Fixes issue with redirect to a site's custom domain

<Badge text="Customers" type="customers" vertical="middle"/>

* Fixes segment recalculation
* Fixed "from" field of email campaign, change back to sender's name

### 10.0.12 - December 03, 2024
<Badge text="Core" type="core" vertical="middle"/>
* Security enhancements

<Badge text="Channels" type="channels" vertical="middle"/>

* Page indexing improvements
* Corrects search results that contained private content

<Badge text="Content" type="content" vertical="middle"/>

* Fixes bugs in image selector and search engine in rich text format
* Improved performance in mass content publishing
* Fixes error when displaying differences in very long contents

<Badge text="Customers" type="customers" vertical="middle"/>

* Corrects duplication of user segments
* Corrects editing of newly added custom fields when editing a user

### 10.0.11 - November 14, 2024
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements

<Badge text="Channels" type="channels" vertical="middle"/>

* Fixes problems with the loss of the site preview
* Improvements in page indexing for search
* Increases search results on sites, now by default there are 15 results

### 10.0.10 - November 04, 2024
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* Added invalidation of all administrator sessions when the administrator changes his password

<Badge text="Channels" type="channels" vertical="middle"/>

* Fixes issues when rendering pages with segmented content
* Fixes issues when rendering pages with large content
* Fixes the author of a synchronization in the activity displayed in pages, widgets, templates and menus
* Added a new option to enable webpush in the application's settings

<Badge text="Customers" type="customers" vertical="middle"/>

* Added the ability to map an attribute of an object type claim to a specific custom field.
* Added the ability to send webpush in notification campaigns when it is enabled in a site linked to the realm.


### 10.0.9 - October 14, 2024
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* Corrects session expiration depending on inactivity time

<Badge text="Content" type="content" vertical="middle"/>

* Fixes problem when publishing entries with asset lists, now the order defined in the list is respected
* Fixes problem when publishing entries containing richtext in code mode
* Fixes parameter duplication issue when using the content management api


### 10.0.8 - September 16, 2024
<Badge text="Core" type="core" vertical="middle"/>

* Fixes problem with preloading links when hovering


### 10.0.7 - September 06, 2024
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements

<Badge text="Channels" type="channels" vertical="middle"/>

* Corrects the site search paginator to show the number of pages based on the maximum number of results

<Badge text="Content" type="content" vertical="middle"/>

* Adds exact filter for full_path and uuid to the categories endpoint of the content api

<Badge text="Customers" type="customers" vertical="middle"/>

* Corrects synchronous calculation of segments at login when enabled


### 10.0.6 - August 14, 2024
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements

<Badge text="Channels" type="channels" vertical="middle"/>

* Fixes Liquid SDK problem when displaying json from a repeatable group

<Badge text="Content" type="content" vertical="middle"/>

* Adds query param `search` to search for text using the content api


### 10.0.5 - August 2, 2024
<Badge text="Core" type="core" vertical="middle"/>

* Fixes SEO configuration error


### 10.0.4 - July 30, 2024
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* Improvements to webhooks, stages now respond to hooks associated with a site, and adds hooks when creating or updating an asset

<Badge text="Channels" type="channels" vertical="middle"/>

* Fixes problem when publishing a page when having a variable configuration and deleting backups

### 10.0.3 - July 12, 2024
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* Performance improvements
* Improvements have been added to the SEO configuration, it is now possible to edit the sitemap and robots from the organization settings and automatically include sites that depend on the base URL
* A list of active sessions is added to the administrator's profile, and it is also possible to close them from that view

<Badge text="Content" type="content" vertical="middle"/>

* Fixes problem when cloning content entries with multiple languages


### 10.0.2 - July 08, 2024
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* Performance improvements
* Updating dependencies

<Badge text="Customers" type="customers" vertical="middle"/>

* Improved phone format, now the country is automatically selected using Cloudflare

<Badge text="Channels" type="channels" vertical="middle"/>

* Fixes a performance issue when using the by_tag filter in liquid templates
* Improves the template loading experience when returning to the template builder

<Badge text="Content" type="content" vertical="middle"/>

* Adds the ability to clone spaces and content types


### 10.0.1 - May 31, 2024
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* Performance improvements
* Updating dependencies

<Badge text="Customers" type="customers" vertical="middle"/>

* Soft login, it is now possible to log in using an OTP code that is sent to by email
* Improvements to registration and profile forms

<Badge text="Channels" type="channels" vertical="middle"/>

* Improved access to site variables, now accessible to be viewed by any role
* Adds the ability to use global and site variables in the URLs of the menu items
* Adds sorting by path of pages in table view

<Badge text="Content" type="content" vertical="middle"/>

* Adds the possibility of specifying a description to spaces, which is shown in the overview
* Adds the ability of specifying a description to content types


### 10.0.0 - April 03, 2024
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* Performance improvements
* Updating dependencies
* New administrative interface design
* Adds support for cache invalidation when using Cloudflare for this purpose, this allows more aggressive caches to be used and to be invalidated when modifying pages, content, and modifications to media library assets
* Adds new login alert for platform administrator users, now when a new device is logged in an email notification is sent

<Badge text="Customers" type="customers" vertical="middle"/>

* Adds Salesforce integration, now contacts in Salesforce and users in a realm can be kept in sync, can be configured to receive and/or send changes to user information
* Visual enhancements to registration and login forms
* Improved creation of mailing campaigns, they can now be cloned for new mailings and the main view has been simplified
* Removal of the none role, now all users will be account users by default

<Badge text="Channels" type="channels" vertical="middle"/>

* Adds the option to add the search engine as an item to the menu construction
* Improved template for new sites, simpler and with reference to the framework from the beginning
* Adds global snippets, it is now possible to define a code snippet and use it in the different sites of the account, it also includes a draft or published selector in the preview
* Improved widget preview, now you can select the layout of the site in which to preview the widget
* Adds the ability to preview widgets locally. When working with the Modyo CLI you can now run a preview of the widget under development and view it directly in the browser with the possibility to mount it in the different layouts contained in the target web app
* Includes support for chunks in CLI widgets, now the platform accepts a zip file with the widget data plus the associated chunks
* Improved widget interface when widgets are created through the CLI
* Adds image processing when using Cloudflare, through the assets filter you can specify the size and quality of the image to display or a set of sizes as srcset, this benefits the performance of the web apps you build
* Moves global variable settings to the channel context
* BREAKING CHANGE: Content List and Content Featured are removed, they can be replaced with an html block and using the liquid sdk

<Badge text="Content" type="content" vertical="middle"/>

* Adds repeatable groups in content, now in the definition of the content types there is a repeatable group option which can define multiple fields as a group that can be instantiated many times in an entry
* Adds Media Library, now the asset manager becomes media library within a space and not globally, this allows a better management of permissions and organization of the assets uploaded to the platform, it can also be used in channels through the media library modal and give the specific context of the assets to the current application


