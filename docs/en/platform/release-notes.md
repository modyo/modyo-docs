---
search: true
---

# Release Notes

## 10.1

### 10.1.0 - July 3, 2025

<Badge text="Core" type="core" vertical="middle"/>

* Adds customizable role creation option
* Security, performance, and dependency improvements

<Badge text="Channels" type="channels" vertical="middle"/>

* Draft/published page check in preview is now persistent across navigation

<Badge text="Customers" type="customers" vertical="middle"/>

* Adds new origination module activatable via plan with the following features:
  * Conditional flows
  * Versioning
  * Forms
  * Code snippets
  * Validations
  * Agent view
  * Flow invitations
  * Flow customization
  * Origination API
  * Liquid drops for access from site views
* Webhooks for user events (Breaking change, this change requires review prior to version upload)
* Adds session expiration policy at realm level
* Adds option to customize username input for login
* Adds new field types for forms
* Adds datasets at realm level that can be used in forms and originations
* Transforms user events (Breaking change, this change requires review prior to version upload)
* Unifies identity providers with integrations into a single module called integrations



## 10.0

### 10.0.11 - November 14, 2024
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements

<Badge text="Channels" type="channels" vertical="middle"/>

* Fixes problems with site preview loss
* Improvements in page indexing for search
* Increases search results on sites, now by default there are 15 results

### 10.0.10 - November 04, 2024
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* Adds invalidation of all administrator sessions when the administrator changes their password.

<Badge text="Channels" type="channels" vertical="middle"/>

* Fixes issues when rendering pages with segmented content
* Fixes issues when rendering pages with large content
* Fixes the author of a synchronization in the activity displayed in pages, widgets, templates, and menus
* Adds new option to enable webpush in the application's settings

<Badge text="Customers" type="customers" vertical="middle"/>

* Adds the ability to map an attribute of an object type claim to a specific custom field.
* Adds the ability to send webpush in notification campaigns when it is enabled on a site linked to the realm.


### 10.0.9 - October 14, 2024
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* Fixes session expiration based on inactivity time

<Badge text="Content" type="content" vertical="middle"/>

* Fixes problem when publishing entries with asset lists, now the order defined in the list is respected
* Fixes problem when publishing entries containing richtext in code mode
* Fixes parameter duplication issue when using the content management API


### 10.0.8 - September 16, 2024
<Badge text="Core" type="core" vertical="middle"/>

* Fixes problem with preloading links on hover


### 10.0.7 - September 06, 2024
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements

<Badge text="Channels" type="channels" vertical="middle"/>

* Corrects the site search paginator to show the number of pages based on the maximum number of results

<Badge text="Content" type="content" vertical="middle"/>

* Adds exact filter for full_path and uuid to the categories endpoint of the content API

<Badge text="Customers" type="customers" vertical="middle"/>

* Corrects synchronous calculation of segments on login when enabled


### 10.0.6 - August 14, 2024
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements

<Badge text="Channels" type="channels" vertical="middle"/>

* Fixes Liquid SDK problem when displaying json from a repeatable group

<Badge text="Content" type="content" vertical="middle"/>

* Adds query param `search` to search for text using the content API


### 10.0.5 - August 2, 2024
<Badge text="Core" type="core" vertical="middle"/>

* Fixes SEO configuration error


### 10.0.4 - July 30, 2024
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* Improvements in webhooks, now stages respond to hooks associated with a site, and adds hooks when creating or updating an asset

<Badge text="Channels" type="channels" vertical="middle"/>

* Fixes problem when publishing a page when having a variable configuration and deleting backups

### 10.0.3 - July 12, 2024
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* Performance improvements
* Improvements have been added to the SEO configuration, it is now possible to edit the sitemap and robots from the organization settings and automatically include sites that depend on the base URL
* A list of active sessions is added to the administrator's profile, and it is also possible to close them from that view.

<Badge text="Content" type="content" vertical="middle"/>

* Fixes problem when cloning content entries with multiple languages


### 10.0.2 - July 08, 2024
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* Performance improvements
* Dependency update

<Badge text="Customers" type="customers" vertical="middle"/>

* Improved phone format, now the country is automatically selected using Cloudflare

<Badge text="Channels" type="channels" vertical="middle"/>

* Improves access to site variables, now accessible to be viewed by any role
* Adds the ability to use global and site variables in the URLs of menu items
* Adds sorting by page path in table view

<Badge text="Content" type="content" vertical="middle"/>

* Adds the ability to clone spaces and content types


### 10.0.1 - May 31, 2024
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* Performance improvements
* Dependency update

<Badge text="Customers" type="customers" vertical="middle"/>

* Soft login, now it is possible to log in using an OTP code sent by email
* Improvements in registration and profile forms

<Badge text="Channels" type="channels" vertical="middle"/>

* Improved access to site variables, now accessible to be viewed by any role
* Adds the ability to use global and site variables in the URLs of menu items
* Adds sorting by page path in table view

<Badge text="Content" type="content" vertical="middle"/>

* Adds the possibility of specifying a description to spaces, which is shown in the overview.
* Adds the ability to specify a description to content types


### 10.0.0 - April 03, 2024
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* Performance improvements
* Dependency update
* New administrative interface design
* Adds support for cache invalidation when using Cloudflare for this purpose, this allows more aggressive caches to be used and to be invalidated when modifying pages, content, and media library assets
* Adds new login alert for platform administrator users, now when a new device is logged in an email notification is sent

<Badge text="Customers" type="customers" vertical="middle"/>

* Adds Salesforce integration, now contacts in Salesforce and users in a realm can be kept in sync, can be configured to receive and/or send changes to user information
* Visual enhancements to registration and login forms
* Improved creation of email campaigns, now they can be cloned for new mailings and the main view has been simplified
* Removal of the "none" role, now all users will be account users by default

<Badge text="Channels" type="channels" vertical="middle"/>

* Adds the option to add the search engine as an item to the menu construction
* Improved template for new sites, simpler and with reference to the framework from the beginning
* Adds global snippets, now it is possible to define a code snippet and use it in the different sites of the account, it also includes a draft or published selector in the preview
* Improved widget preview, now you can select the site layout in which to preview the widget
* Adds the ability to preview widgets locally. When working with the Modyo CLI you can now run a preview of the widget under development and view it directly in the browser with the possibility to mount it in the different layouts contained in the target web app
* Includes support for chunks in CLI widgets, now the platform accepts a zip file with the widget data plus the associated chunks
* Improved widget interface when widgets are created through the CLI
* Adds image processing when using Cloudflare, through the assets filter you can specify the size and quality of the image to display or a set of sizes as srcset, this benefits the performance of the web apps you build
* Moves global variable settings to the channel context
* BREAKING CHANGE: Content List and Content Featured are removed, they can be replaced with an html block and using the liquid sdk

<Badge text="Content" type="content" vertical="middle"/>

* Adds repeatable groups in content, now in the definition of the content types there is a repeatable group option which can define multiple fields as a group that can be instantiated many times in an entry
* Adds Media Library, now the asset manager becomes media library within a space and not globally, this allows a better management of permissions and organization of the assets uploaded to the platform, it can also be used in channels through the media library modal and give the specific context of the assets to the current application