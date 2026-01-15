---
search: true
---

# Release Notes

## 10.1

### 10.1.10

:::info Release date
December 29, 2025
:::

| Module | Improvements |
|--------|---------|
| **Customers** | • Adds the redirect_uri parameter to specify the post-login redirect URL. The URL is validated against the account's registered domains<br>• Performance improvement when retrieving form responses via the forms API |
| **Content** | • Fixes issue with scheduled publications, now when publishing an entry directly, the previous scheduled publication is removed |


### 10.1.9

:::info Release date
December 3, 2025
:::

| Module | Improvements |
|--------|---------|
| **Customers** | • Aligns CORS configured in the account with the new Customers CORS to maintain behavior prior to adding these CORS |
| **Insights** | • Adds selection of all realms to the Customers dashboard, now you can view all active users across all realms |


### 10.1.8

:::info Release date
December 1, 2025
:::

| Module | Improvements |
|--------|---------|
| **Channels** | • Fixes error in content liquid filters when applying multiple filters<br>• Increases URL length in redirects<br>• Adds flag to load widgets as modules on pages |
| **Content** | • Adds reviewer permission to the default Space Editor role |


### 10.1.7

:::info Release date
November 25, 2025
:::

| Module | Improvements |
|--------|---------|
| **Channels** | • Fixes permissions for synchronization actions<br>• Fixes content filters for related content<br>• Fixes template searcher |
| **Customers** | • Increases storage size for URLs in webhooks<br>• Adds CORS for customers API<br>• Improves reCAPTCHA in forms<br>• Improves date selection experience |
| **Content** | • Fixes content type detection in files uploaded via file modal |
| **Core** | • Improves role construction through more granular permissions for site and content settings |


### 10.1.6

:::info Release date
October 29, 2025
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Swagger improvements |
| **Channels** | • Adds fit and format to supported options for image optimization via Cloudflare<br>• Adds new liquid filter handle or handleize<br>• Removes content_view templates, obsolete functionality since 9.2.0 |
| **Customers** | • Improves date picker displayed in originations<br>• Restores optional kid support in openid integrations<br>• Adds administrative API for obtaining perishable token |
| **Content** | • Fixes clone link permission |


### 10.1.5

:::info Release date
October 10, 2025
:::

| Module | Improvements |
|--------|---------|
| **Channels** | • Fixes asset_url filter now correctly delivers the URL with Cloudflare optimizations when available<br>• Fixes encoding issues when processing widgets from the CLI when sent compressed in a zip file |
| **Customers** | • Fixes error when indexing some BusinessEvents |


### 10.1.4

:::info Release date
October 2, 2025
:::

| Module | Improvements |
|--------|---------|
| **Customers** | • Fixes dataset listing in origination and forms builder options, now all available datasets are displayed<br>• Fixes form views to display correctly when a content security policy header exists<br>• Adds Google Tag Manager configuration for profile and login pages in realms |
| **Channels** | • Fixes multi-site search with stages, now search is limited to main sites and not their stages<br>• Fixes "resend code" translation in soft login |
| **Content** | • Fixes error where hint was not shown in multiple choice fields |


### 10.1.3

:::info Release date
September 4, 2025
:::

| Module | Improvements |
|--------|---------|
| **Channels** | • Fixes stepper in mobile mode, now correctly indicates the step number in relation to total steps |


### 10.1.2

:::info Release date
September 2, 2025
:::

| Module | Improvements |
|--------|---------|
| **Channels** | • Improvement in site cloning<br>• Adds the ability to change the origination of a page<br>• Adds auto refresh in pending review tasks<br>• Allows specifying the domain in destination URLs of redirections<br>• Fixes issues in origination page synchronization<br>• Fixes error of origination crossing between stages<br>• Fixes access issues to originations in different states<br>• Fixes feedback from the last editor of tasks when viewing a submission in the backoffice |
| **Customers** | • New field types for origination creation: currency and date range<br>• Adds user impersonation, now you can answer an origination as the user. All actions are recorded.<br>• Adds to submission activity when an invitation email is opened<br>• Fixes incorrect content type detection of OpenXML files<br>• Fixes issue that prevented administrators belonging to groups from appearing as agents in originations |
| **Content** | • Fixes file rename issue when uploading a new asset<br>• Fixes cloudflare cache invalidation issue when updating images<br>• Fixes issue that prevented entry images from refreshing correctly |


### Modyo 10.1.1

:::info Release date
July 23, 2025
:::

| Module | Improvements |
|--------|---------|
| **Customers** | • Visual improvement for conditional flow editing<br>• Fixes scroll issue in origination builder |
| **Channels** | • Adds editing of start, summary, and completion views on origination pages<br>• Improvement in condition evaluation during submission completion<br>• Fixes value returned by checkbox field that now returns an array with selected values |


### Modyo 10.1.0

:::info Release date
July 3, 2025
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Adds customizable role creation option<br>• Security, performance, and dependency improvements |
| **Channels** | • Draft/published page check in preview is now persistent across navigation |
| **Customers** | • Adds new origination module activatable via plan with the following features:<br>&nbsp;&nbsp;- Conditional flows<br>&nbsp;&nbsp;- Versioning<br>&nbsp;&nbsp;- Forms (Breaking change: this change requires review prior to version upload)<br>&nbsp;&nbsp;- Code snippets<br>&nbsp;&nbsp;- Validations<br>&nbsp;&nbsp;- Agent view<br>&nbsp;&nbsp;- Flow invitations<br>&nbsp;&nbsp;- Flow customization<br>&nbsp;&nbsp;- Origination API<br>&nbsp;&nbsp;- Liquid drops for access from site views<br>• Webhooks for user events (Breaking change: this change requires review prior to version upload)<br>• Adds session expiration policy at realm level<br>• Adds option to customize username input for login<br>• Adds new field types for forms<br>• Adds datasets at realm level that can be used in forms and originations<br>• Transforms user events (Breaking change: this change requires review prior to version upload)<br>• Unifies identity providers with integrations into a single module called "integrations" |

## 10.0

### Modyo 10.0.27

:::info Release date
June 25, 2025
:::

| Module | Improvements |
|--------|---------|
| **Content** | • Controlled error when exceeding the maximum number of elements allowed by the API is removed |
### Modyo 10.0.26

:::info Release date
June 06, 2025
:::

| Module | Improvements |
|--------|---------|
| **Channels** | • Improves csp-nonce injection in pages, now injected into every request that reaches the application regardless of whether application cache exists or not |
### Modyo 10.0.25

:::info Release date
May 14, 2025
:::

| Module | Improvements |
|--------|---------|
| **Channels** | • Performance improvement in JSON filter for a content entry |
### Modyo 10.0.24

:::info Release date
May 13, 2025
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Performance improvements |
| **Channels** | • Performance improvement in content loading from Liquid SDK and content pages<br>• Performance improvement in menu loading |
### Modyo 10.0.23

:::info Release date
May 05, 2025
:::

| Module | Improvements |
|--------|---------|
| **Customers** | • Fixes domain validation for the `redirect_to` logout parameter |
| **Channels** | • Fixes preview display persistence when administrator logs out for sites with custom domains |
### Modyo 10.0.22

:::info Release date
April 25, 2025
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Adds new supported characters for a user's username |
| **Channels** | • Improves menu synchronization, now correctly identifies initial segments if both stages share the same realm |
### Modyo 10.0.21

:::info Release date
March 16, 2025
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Adds Authorization code + PKCE flow option in integration with an OpenID identity provider<br>• Adds option to send authentication parameters via URL params |
| **Channels** | • Performance improvement when getting templates |
### Modyo 10.0.20

:::info Release date
March 10, 2025
:::

| Module | Improvements |
|--------|---------|
| **Channels** | • Adds support for web assembly files as chunks in zip packages from Modyo CLI<br>• Adds new `Service-Worker-Allowed` header in site security headers<br>• Fixes an error in the assets modal<br>• Fixes CSP nonce difference problem between header and view<br>• Adds Liquid filters to manipulate form responses for a user in site building |
### Modyo 10.0.19

:::info Release date
February 07, 2025
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Security improvements<br>• Explicitly adds the `samesite=Lax` attribute to the session cookie |
| **Channels** | • Fixes permissions issue when uploading assets on sites |
### Modyo 10.0.18

:::info Release date
February 03, 2025
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Security improvements<br>• Fixes error when publishing when backup limit is reached |
| **Content** | • Adds bulk segment editing<br>• Restores borders of tables inserted in Froala |
| **Customers** | • Adds search bar to campaign listing |
### Modyo 10.0.17

:::info Release date
January 14, 2025
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Fixes author when cloning a content element, page, menu, widget, template; now the author of the new element is the one executing the action<br>• Fixes issue with the list of sites, spaces, and realms in the webhooks list |
| **Content** | • Fixes permission to get related entries when editing content<br>• Fixes content indexing issues; now content is indexed for searches on content pages, content is indexed when published and the index is removed when unpublished; only widget pages are re-indexed in the re-indexing job, in case they include content via the SDK<br>• Performance improvement in content indexing |
| **Customers** | • Fixes queuing of multiple segment calculation jobs for a user<br>• Fixes user view to show all users when requested from the segment list |
| **Channels** | • Fixes issues with using the `search` parameter in searches using the `filter_by_query_string` filter |
### Modyo 10.0.16

:::info Release date
December 23, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Fixes issue with link preloading when hovering<br>• Fixes SEO configuration error |
| **Content** | • Adds ordering within a content field of type content list<br>• Fixes rich text issues where they become blank when moving elements within a repeatable group<br>• Fixes error when copying content from another language when a repeatable group is present<br>• Fixes error when editing content in bulk<br>• Fixes errors in image selector and search in Rich Texts |
| **Channels** | • Fixes issues when previewing global snippets<br>• Fixes redirection issue to a site's custom domain |
| **Customers** | • Performance improvement in user segment calculation at login |
### Modyo 10.0.15

:::info Release date
December 12, 2024
:::

| Module | Improvements |
|--------|---------|
| **Customers** | • Improves custom field segment filter, now allows a list of values |
### Modyo 10.0.14

:::info Release date
December 10, 2024
:::

| Module | Improvements |
|--------|---------|
| **Content** | • Fixes error when editing content in bulk |
| **Customers** | • Fixes multiple calls to the `count_matches` endpoint |
### Modyo 10.0.13

:::info Release date
December 05, 2024
:::

| Module | Improvements |
|--------|---------|
| **Channels** | • Fixes redirection issue to a site's custom domain |
| **Customers** | • Fixes segment recalculation<br>• Fixes `from` field of email campaign, now defaults back to sender name |
### Modyo 10.0.12

:::info Release date
December 03, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Security improvements |
| **Channels** | • Improvements in page indexing scheduling<br>• Fixes search results that contained private content |
| **Content** | • Fixes errors in image selector and search in Rich Texts<br>• Performance improvement in bulk content publishing<br>• Fixes error when showing differences in very extensive content |
| **Customers** | • Fixes duplication of user segments<br>• Fixes editing of newly added custom fields when editing a user |
### Modyo 10.0.11

:::info Release date
November 14, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Security improvements |
| **Channels** | • Fixes issues with loss of site preview<br>• Improvements in page indexing for search<br>• Increases search results on sites, now defaulting to 15 results |
### Modyo 10.0.10

:::info Release date
November 04, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Security improvements<br>• All administrator sessions are invalidated when their password is changed |
| **Channels** | • Fixes issues when rendering pages with segmented content<br>• Fixes issues when rendering very large content pages<br>• Fixes the author of a synchronization in the activity shown on pages, widgets, templates, and menus<br>• Option to enable webpush in application settings has been added |
| **Customers** | • Adds the ability to map an object-type claim attribute to a specific custom field<br>• Adds webpush sending capability in notification campaigns when enabled on the site related to the realm |
### Modyo 10.0.9

:::info Release date
October 14, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Security improvements<br>• Fixes session expiration based on inactivity time |
| **Content** | • Fixes issue when publishing entries with asset lists, now the defined order in the list is respected<br>• Fixes issue when publishing entries containing rich text in code mode<br>• Fixes parameter duplication issue when using the administrative content API |
### Modyo 10.0.8

:::info Release date
September 16, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Fixes issue with link preloading when hovering |
### Modyo 10.0.7

:::info Release date
September 06, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Security improvements |
| **Channels** | • Fixes the search pager on sites to show the number of pages based on the maximum number of results |
| **Content** | • Adds exact filter by `full_path` and `uuid` to the content API categories endpoint |
| **Customers** | • Fixes synchronous segment calculation at login when enabled |

:::info Release date
November 04, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Security improvements<br>• All administrator sessions are invalidated when they change their password |
| **Channels** | • Fixes issues when rendering pages with segmented content<br>• Fixes issues when rendering very large content pages<br>• Fixes the author of a synchronization in the activity shown on pages, widgets, templates, and menus<br>• Option to enable webpush in application settings has been added |
| **Customers** | • Adds the ability to map an object-type claim attribute to a specific custom field<br>• Adds webpush sending capability in notification campaigns when enabled on the site related to the realm |

### 10.0.9

:::info Release date
October 14, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Security improvements<br>• Fixes session expiration based on inactivity time |
| **Content** | • Fixes issue when publishing entries with asset lists, now the defined order in the list is respected<br>• Fixes issue when publishing entries containing rich text in code mode<br>• Fixes parameter duplication issue when using the administrative content API |

### 10.0.8

:::info Release date
September 16, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Fixes issue with link preloading when hovering |

### 10.0.7

:::info Release date
September 06, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Security improvements |
| **Channels** | • Fixes the search pager on sites to show the number of pages based on the maximum number of results |
| **Content** | • Adds exact filter by `full_path` and `uuid` to the content API categories endpoint |
| **Customers** | • Fixes synchronous segment calculation at login when enabled |

### 10.0.6

:::info Release date
August 14, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Security improvements |
| **Channels** | • Fixes Liquid SDK issue when displaying JSON of a repeatable group |
| **Content** | • Adds `search` query param to perform text search using the content API |

### 10.0.5

:::info Release date
August 02, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Fixes SEO configuration error |

### 10.0.4

:::info Release date
July 30, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Security improvements<br>• Webhooks improvements, now stages respond to hooks associated with a site, adds hooks when creating or updating an asset |
| **Channels** | • Fixes issue when publishing a page with variable configuration and backup deletion |

### 10.0.3

:::info Release date
July 12, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Security improvements<br>• Performance enhancements<br>• SEO configuration improvements added, it is now possible to edit the sitemap and robots from the organization's settings and automatically include sites that depend on the base URL<br>• Active sessions list added to the administrator's profile, it is also possible to close them from this view |
| **Content** | • Fixes issue when cloning content entries with multiple languages |

### 10.0.2

:::info Release date
July 08, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Security improvements<br>• Performance enhancements<br>• Dependency update |
| **Customers** | • Phone format improved, country is now automatically selected via Cloudflare |
| **Channels** | • Fixes a performance issue when using the `by_tag` filter in Liquid templates<br>• Improves template loading experience when returning to the template builder |
| **Content** | • Adds the ability to clone spaces and content types |

### 10.0.1

:::info Release date
May 31, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Security improvements<br>• Performance enhancements<br>• Dependency update |
| **Customers** | • Soft login, now possible to log in via an OTP code sent to email<br>• Improvements to registration and profile forms |
| **Channels** | • Improvements in site variable access, now accessible for viewing by any role<br>• Adds the ability to use global and site variables in menu item URLs<br>• Adds page ordering by path in table view |
| **Content** | • Adds the ability to specify a description for spaces, which is displayed in the overview<br>• Adds the ability to add a description to content types |
