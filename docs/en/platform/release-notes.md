---
search: true
---

# Release Notes

## 9.2
### 9.2.53 - November 15, 2023
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements

<Badge text="Customers" type="customers" vertical="middle"/>

* Fix post-logout redirection when a session is invalid
* Adds new integration with BCP QR Bolivia payment method
* Correct hash-type claim mapping in the OIDC integration

<Badge text="Channels" type="channels" vertical="middle"/>
* Fixes problem with unpublishing pages under cross-inheritance conditions
* Corrects the information returned for a location consumed through the liquid SDK; it now returns all its fields correctly, just like the content API

<Badge text="Content" type="content" vertical="middle"/>
* Corrects inconsistency when saving data entered in a richtext. Code cleaning is now activated before saving


### 9.2.52 - October 13, 2023
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements

<Badge text="Customers" type="customers" vertical="middle"/>

* Fixes problem with logging out and loading the site simultaneously
* Corrects visibility of information in an order's activity list


### 9.2.51 - September 28, 2023
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements

<Badge text="Customers" type="customers" vertical="middle"/>

* Corrects post-logout redirection


### 9.2.50 - September 27, 2023
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* Fixes problem when saving settings in single account deployments

<Badge text="Customers" type="customers" vertical="middle"/>

* Improvements when displaying information on payment methods
* Fixes problems receiving campaign data

<Badge text="Channels" type="channels" vertical="middle"/>

* Excludes segments associated with pages and menus from stage synchronization


### 9.2.49 - September 13, 2023
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements

<Badge text="Channels" type="channels" vertical="middle"/>

* Fixes post login redirection when a custom domain exists
* Improvements to the site search engine
  * Now results are more accurate
  * Search can be disabled
  * You can set up a multi-site search for the same organization

<Badge text="Core" type="core" vertical="middle"/>

* Fixes problems when publishing restored content and pages from a backup


### 9.2.48 - September 04, 2023
<Badge text="Customers" type="customers" vertical="middle"/>

* Fixes modal for changing images in the campaign email template editor

### 9.2.47 - September 01, 2023
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements

### 9.2.46 - August 29, 2023
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements

<Badge text="Channels" type="channels" vertical="middle"/>

* Fixes problem with the linter when adding the raw liquid tag in templates

<Badge text="Content" type="content" vertical="middle"/>

* Adds sanitizer for SVG type images

<Badge text="Customers" type="customers" vertical="middle"/>

* Fixes problem in viewing payment answers with Bancard
* Fixes the problem of crossing redirects in concurrent logins in different user realms

### 9.2.45 - August 17, 2023
<Badge text="Customers" type="customers" vertical="middle"/>

* Fixes problems in saving email templates, now old templates can be saved again, and HTML tags no longer lose their attributes

### 9.2.44 - August 10, 2023
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements

<Badge text="Customers" type="customers" vertical="middle"/>

* Corrects the logout redirection loop between realm and identity provider under certain circumstances
* Adds read-only role in realms

### 9.2.43 - August 03, 2023
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements

<Badge text="Channels" type="channels" vertical="middle"/>

* Fixes issue when saving variables in widgets from the Modyo CLI

<Badge text="Content" type="content" vertical="middle"/>

* Improvements in the list of content entries, now bulk actions are shown according to the selected items
* Improvements in the validation of the type of assets uploaded to the platform

### 9.2.42 - July 28, 2023
<Badge text="Customers" type="customers" vertical="middle"/>

* Fixes error in authentication flow with identity providers 

### 9.2.41 - July 26, 2023
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements

<Badge text="Channels" type="channels" vertical="middle"/>

* Fixes problems when showing the preview of a public site without a realm and with a configured custom domain

<Badge text="Customers" type="customers" vertical="middle"/>

* Improvements in email campaigns
* Improves the behavior of the post-login URL of the realms, now the URL is left as a default redirect and for one option you can force it to always reach that URL
* Adds FPay as a supported payment method
* Segment improvements


### 9.2.40 - July 14, 2023
<Badge text="Customers" type="customers" vertical="middle"/>

* Anonymous form validation improvements

<Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* Updating dependencies
* Corrects migrations to allow the customer to migrate to the current version

<Badge text="Content" type="content" vertical="middle"/>

* Allows posts to be published and unpublished even if there are null references in previous versions


### 9.2.39 - July 11, 2023
<Badge text="Customers" type="customers" vertical="middle"/>

* You are asked to enter a password before deleting a user account

<Badge text="Core" type="core" vertical="middle"/>

* Error fixed in the OAuth2 flow

### 9.2.38 - July 07, 2023
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* Improves the information shown in the activity logs

<Badge text="Channels" type="channels" vertical="middle"/>

* Fixes problems accessing the security headers edition
* Adds viewer role to team members. This role can even see items to be synchronized or in a release

<Badge text="Content" type="content" vertical="middle"/>

* Add the viewer role to team members.

<Badge text="Customers" type="customers" vertical="middle"/>

* Adds configuration of a post-login home page. After a successful login to the realm, you will be redirected to this page.


### 9.2.37 - June 30, 2023
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* Improvements in the configuration of expiration and inactivity policies

<Badge text="Channels" type="channels" vertical="middle"/>

* Adds configuration of new security headers, Cross-Origin-Embedder-Policy, Cross-Origin-Opener-Policy, Cross-Origin-Resource-Policy

<Badge text="Customers" type="customers" vertical="middle"/>

* Fixes problem when reading a notification in the profile, it is now correctly marked as read
* Adds a new parameter (redirect_to) to the login URL of a site to redirect to a particular view or to a site within the organization
* Email campaigns are modified, multiple shipments are replaced by campaign cloning for new shipments for greater simplicity in their management


### 9.2.36 - June 19, 2023
<Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* Adds administrator permission validation to the endpoints of the swagger API documentation

<Badge text="Channels" type="channels" vertical="middle"/>

* Fixes empty differences problem after synchronizing stages

<Badge text="Content" type="content" vertical="middle"/>

* Fixes problem with the list of repeated spaces for users in a permission group
* Fixes the problem of publishing pages when they come from the synchronization of stages

<Badge text="Customers" type="customers" vertical="middle"/>

* The default email sender field is successfully validated in the realm settings, now it can't be empty either.

<Badge text="Insights" type="insights" vertical="middle"/>

* Corrects the initial value of the date filter, it now correctly shows the selected range.



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


### 9.2.31 - April 06, 2023

<Badge text="Core" type="core" vertical="middle"/>

* Security improvements
* Password policies are added when creating new accounts

<Badge text="Content" type="content" vertical="middle"/>

* Fixes permanent error in the asset manager


### 9.2.30 - March 24, 2023

<Badge text="Core" type="core" vertical="middle"/>

* Security improvements

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
* Implements password security policy for realms
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
* Improved experience when generating a manifest for the PWA
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

* The use of reCAPTCHA for realms is incorporated


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
* User realms

<Badge text="Core" type="core" vertical="middle"/>
* Team Member Groups
* Multiple full admins
* “Get started” landing page
* Publisher: Froala
