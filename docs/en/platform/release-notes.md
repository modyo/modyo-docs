---
search: true
---

# Release Notes

## 10.0
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
* A list of active sessions is added to the administrator's profile, and it is also possible to close them from that view.

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

* Adds the possibility of specifying a description to spaces, which is shown in the overview.
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


