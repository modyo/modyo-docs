---
search: true
---

# Release Notes

## 10.1


### 10.1.1

:::tip Release date
July 23, 2025
:::

| Module | Improvements |
|--------|---------|
| **Customers** | • Visual improvement for conditional flow editing<br>• Fixes scroll issue in origination builder |
| **Channels** | • Adds editing of start, summary, and completion views on origination pages<br>• Improvement in condition evaluation during submission completion<br>• Fixes value returned by checkbox field that now returns an array with selected values |


### 10.1.0

:::tip Release date
July 3, 2025
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Adds customizable role creation option<br>• Security, performance, and dependency improvements |
| **Channels** | • Draft/published page check in preview is now persistent across navigation |
| **Customers** | • Adds new origination module activatable via plan with the following features:<br>&nbsp;&nbsp;- Conditional flows<br>&nbsp;&nbsp;- Versioning<br>&nbsp;&nbsp;- Forms<br>&nbsp;&nbsp;- Code snippets<br>&nbsp;&nbsp;- Validations<br>&nbsp;&nbsp;- Agent view<br>&nbsp;&nbsp;- Flow invitations<br>&nbsp;&nbsp;- Flow customization<br>&nbsp;&nbsp;- Origination API<br>&nbsp;&nbsp;- Liquid drops for access from site views<br>• Webhooks for user events (Breaking change: this change requires review prior to version upload)<br>• Adds session expiration policy at realm level<br>• Adds option to customize username input for login<br>• Adds new field types for forms<br>• Adds datasets at realm level that can be used in forms and originations<br>• Transforms user events (Breaking change: this change requires review prior to version upload)<br>• Unifies identity providers with integrations into a single module called "integrations." |

## 10.0

### 10.0.0

:::tip Release date
April 03, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Controlled error when exceeding the maximum number of elements allowed by the API is removed.<br>• Performance improvements.<br>• Adds new supported characters for a user's username.<br>• Adds Authorization code + PKCE flow option in integration with an OpenID identity provider.<br>• Adds option to send authentication parameters via URL params.<br>• Security improvements.<br>• Explicitly adds the `samesite=Lax` attribute to the session cookie.<br>• Fixes error when publishing when backup limit is reached.<br>• Fixes author when cloning a content element, page, menu, widget, template; now the author of the new element is the one executing the action.<br>• Fixes issue with the list of sites, spaces, and realms in the webhooks list.<br>• Fixes issue with link preloading when hovering.<br>• Fixes SEO configuration error.<br>• Webhooks improvements, now stages respond to hooks associated with a site, adds hooks when creating or updating an asset.<br>• Performance enhancements.<br>• SEO configuration improvements added, it is now possible to edit the sitemap and robots from the organization's settings and automatically include sites that depend on the base URL.<br>• Active sessions list added to the administrator's profile, it is also possible to close them from this view.<br>• Dependency update.<br>• New administrative interface design.<br>• Adds cache invalidation support when Cloudflare is used for this purpose, allowing more aggressive caching that is invalidated when pages, content, and media library asset modifications occur.<br>• Adds new login alert for platform administrators; now, when logging in from a new device, an email notification is sent.<br>• All administrator sessions are invalidated when their password is changed.<br>• Fixes session expiration based on inactivity time. |
| **Channels** | • Improves csp-nonce injection in pages, now injected into every request that reaches the application regardless of whether application cache exists or not.<br>• Performance improvement in JSON filter for a content entry.<br>• Performance improvement in content loading from Liquid SDK and content pages.<br>• Performance improvement in menu loading.<br>• Fixes preview display persistence when administrator logs out for sites with custom domains.<br>• Improves menu synchronization, now correctly identifies initial segments if both stages share the same realm.<br>• Performance improvement when getting templates.<br>• Adds support for web assembly files as chunks in zip packages coming from Modyo CLI.<br>• Adds new `Service-Worker-Allowed` header in site security headers.<br>• Fixes an error in the assets modal.<br>• Fixes CSP nonce difference problem between header and view.<br>• Adds Liquid filters to manipulate form responses for a user in site building.<br>• Fixes permissions issue when uploading assets on sites.<br>• Fixes issues with using the `search` parameter in searches using the `filter_by_query_string` filter.<br>• Fixes issues when previewing global snippets.<br>• Fixes redirection issue to a site's custom domain.<br>• Improvements in page indexing scheduling.<br>• Fixes search results that contained private content.<br>• Fixes issues with loss of site preview.<br>• Improvements in page indexing for search.<br>• Increases search results on sites, now defaulting to 15 results.<br>• Fixes issues when rendering pages with segmented content.<br>• Fixes issues when rendering very large content pages.<br>• Fixes the author of a synchronization in the activity shown on pages, widgets, templates, and menus.<br>• Option to enable webpush in application settings has been added.<br>• Fixes the search pager on sites to show the number of pages based on the maximum number of results.<br>• Fixes Liquid SDK issue when displaying JSON of a repeatable group.<br>• Fixes issue when publishing a page when variables are configured and backups are deleted.<br>• Fixes a performance issue when using the `by_tag` filter in Liquid templates.<br>• Improves template loading experience when returning to the template builder.<br>• Improvements in site variable access, now accessible for viewing by any role.<br>• Adds the ability to use global and site variables in menu item URLs.<br>• Adds page ordering by path in table view.<br>• Adds the option to include the search bar as an item in menu construction.<br>• Improved template for new sites, simpler and with framework reference from the start.<br>• Adds global snippets, now it's possible to define a code snippet and use it across different account sites, also includes a draft or published selector in the preview.<br>• Improves widget preview, now you can select the site layout to preview the widget with.<br>• Adds the ability to preview widgets locally. When working with the Modyo CLI, you can now run a preview of the developing widget and view it directly in the browser with the ability to mount it in the different layouts contained in the destination site.<br>• Includes chunk support in CLI widgets, now the platform accepts a zip with widget data plus associated chunks.<br>• Improvements in the widget interface when they come from the CLI.<br>• Adds image processing when Cloudflare is used, through the assets filter you can specify image size and quality to display or a set of sizes as srcset, which benefits the performance of built sites.<br>• Moves global variable configuration to the channels context.<br>• BREAKING CHANGE: Content widgets: Content List and Content Featured are removed; they can be replaced by an HTML widget and the use of the Liquid SDK. |
| **Content** | • Controlled error when exceeding the maximum number of elements allowed by the API is removed.<br>• Adds bulk segment editing.<br>• Restores borders of tables inserted in Froala.<br>• Fixes permission to get related entries when editing content.<br>• Fixes content indexing issues; now content is indexed for searches on content pages, content is indexed when published and the index is removed when unpublished; only widget pages are re-indexed in the re-indexing job, in case they include content via the SDK.<br>• Performance improvement in content indexing.<br>• Adds ordering within a content field of type content list.<br>• Fixes rich text issues where they become blank when moving elements within a repeatable group.<br>• Fixes error when copying content from another language when a repeatable group is present.<br>• Fixes error when editing content in bulk.<br>• Fixes errors in image selector and search in Rich Texts.<br>• Performance improvement in bulk content publishing.<br>• Fixes error when showing differences in very extensive content.<br>• Fixes issue when publishing entries with asset lists, now the defined order in the list is respected.<br>• Fixes issue when publishing entries containing rich text in code mode.<br>• Fixes parameter duplication issue when using the administrative content API.<br>• Adds exact filter by `full_path` and `uuid` to the content API categories endpoint.<br>• Adds `search` query param to perform text search using the content API.<br>• Fixes issue when cloning content entries with multiple languages.<br>• Adds the ability to clone spaces and content types.<br>• Adds the ability to specify a description for spaces, which is displayed in the overview.<br>• Adds the ability to add a description to content types.<br>• Adds repeatable groups in content; now in the definition of content types there is the option for a repeatable group which can define multiple fields as a group that can be instantiated many times when creating an entry.<br>• Adds Media Library; now the asset manager becomes a media library that exists within a space and not globally, allowing better permission management and organization of assets uploaded to the platform. It can also be used in channels through the media library modal, leaving the specific context of assets to the application in use. |
| **Customers** | • Fixes domain validation for the `redirect_to` logout parameter.<br>• Adds search bar to campaign listing.<br>• Fixes queuing of multiple segment calculation jobs for a user.<br>• Fixes user view to show all users when requested from the segment list.<br>• Performance improvement in user segment calculation at login.<br>• Improves custom field segment filter, now allows a list of values.<br>• Fixes multiple calls to the `count_matches` endpoint.<br>• Fixes segment recalculation.<br>• Fixes `from` field of email campaign, now defaults back to sender name.<br>• Fixes duplication of user segments.<br>• Fixes editing of newly added custom fields when editing a user.<br>• Adds the ability to map an object-type claim attribute to a specific custom field.<br>• Adds webpush sending capability in notification campaigns when enabled on the site related to the realm.<br>• Fixes synchronous segment calculation at login when enabled.<br>• Phone format improved, country now automatically selected via Cloudflare.<br>• Soft login, now possible to log in via an OTP code sent to email.<br>• Improvements to registration and profile forms.<br>• Adds Salesforce integration, now Salesforce contacts and realm users can be synchronized, configurable to receive and/or send user information changes.<br>• Visual improvements in registration and login forms.<br>• Improvements in email campaign creation, now campaigns can be cloned for new sends and the main view is simplified.<br>• Removes the "none" role, now all users will be account users by default. |


### 10.0.27

:::tip Release date
June 25, 2025
:::

| Module | Improvements |
|--------|---------|
| **Content** | • Controlled error when exceeding the maximum number of elements allowed by the API is removed |

### 10.0.26

:::tip Release date
June 06, 2025
:::

| Module | Improvements |
|--------|---------|
| **Channels** | • Improves csp-nonce injection in pages, now injected into every request that reaches the application regardless of whether application cache exists or not |

### 10.0.25

:::tip Release date
May 14, 2025
:::

| Module | Improvements |
|--------|---------|
| **Channels** | • Performance improvement in JSON filter for a content entry |

### 10.0.24

:::tip Release date
May 13, 2025
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Performance improvements |
| **Channels** | • Performance improvement in content loading from Liquid SDK and content pages<br>• Performance improvement in menu loading |

### 10.0.23

:::tip Release date
May 05, 2025
:::

| Module | Improvements |
|--------|---------|
| **Customers** | • Fixes domain validation for the `redirect_to` logout parameter |
| **Channels** | • Fixes preview display persistence when administrator logs out for sites with custom domains |

### 10.0.22

:::tip Release date
April 25, 2025
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Adds new supported characters for a user's username |
| **Channels** | • Improves menu synchronization, now correctly identifies initial segments if both stages share the same realm |

### 10.0.21

:::tip Release date
March 16, 2025
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Adds Authorization code + PKCE flow option in integration with an OpenID identity provider<br>• Adds option to send authentication parameters via URL params |
| **Channels** | • Performance improvement when getting templates |

### 10.0.20

:::tip Release date
March 10, 2025
:::

| Module | Improvements |
|--------|---------|
| **Channels** | • Adds support for web assembly files as chunks in zip packages coming from Modyo CLI<br>• Adds new `Service-Worker-Allowed` header in site security headers<br>• Fixes an error in the assets modal<br>• Fixes CSP nonce difference problem between header and view<br>• Adds Liquid filters to manipulate form responses for a user in site building |

### 10.0.19

:::tip Release date
February 07, 2025
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Security improvements<br>• Explicitly adds the `samesite=Lax` attribute to the session cookie |
| **Channels** | • Fixes permissions issue when uploading assets on sites |

### 10.0.18

:::tip Release date
February 03, 2025
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Security improvements<br>• Fixes error when publishing when backup limit is reached |
| **Content** | • Adds bulk segment editing<br>• Restores borders of tables inserted in Froala |
| **Customers** | • Adds search bar to campaign listing |

### 10.0.17

:::tip Release date
January 14, 2025
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Fixes author when cloning a content element, page, menu, widget, template; now the author of the new element is the one executing the action<br>• Fixes issue with the list of sites, spaces, and realms in the webhooks list |
| **Content** | • Fixes permission to get related entries when editing content<br>• Fixes content indexing issues; now content is indexed for searches on content pages, content is indexed when published and the index is removed when unpublished; only widget pages are re-indexed in the re-indexing job, in case they include content via the SDK<br>• Performance improvement in content indexing |
| **Customers** | • Fixes queuing of multiple segment calculation jobs for a user<br>• Fixes user view to show all users when requested from the segment list |
| **Channels** | • Fixes issues with using the `search` parameter in searches using the `filter_by_query_string` filter |

### 10.0.16

:::tip Release date
December 23, 2024
:::

| Module | Improvements |
|--------|---------|
| **Content** | • Adds ordering within a content field of type content list<br>• Fixes rich text issues where they become blank when moving elements within a repeatable group<br>• Fixes error when copying content from another language when a repeatable group is present |
| **Customers** | • Performance improvement in user segment calculation at login |
| **Channels** | • Fixes issues when previewing global snippets |

### 10.0.15

:::tip Release date
December 12, 2024
:::

| Module | Improvements |
|--------|---------|
| **Customers** | • Improves custom field segment filter, now allows a list of values |

### 10.0.14

:::tip Release date
December 10, 2024
:::

| Module | Improvements |
|--------|---------|
| **Content** | • Fixes error when editing content in bulk |
| **Customers** | • Fixes multiple calls to the `count_matches` endpoint |

### 10.0.13

:::tip Release date
December 05, 2024
:::

| Module | Improvements |
|--------|---------|
| **Channels** | • Fixes redirection issue to a site's custom domain |
| **Customers** | • Fixes segment recalculation<br>• Fixes `from` field of email campaign, now defaults back to sender name |

### 10.0.12

:::tip Release date
December 03, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Security improvements |
| **Channels** | • Improvements in page indexing scheduling<br>• Fixes search results that contained private content |
| **Content** | • Fixes errors in image selector and search in Rich Texts<br>• Performance improvement in bulk content publishing<br>• Fixes error when showing differences in very extensive content |
| **Customers** | • Fixes duplication of user segments<br>• Fixes editing of newly added custom fields when editing a user |

### 10.0.11

:::tip Release date
November 14, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Security improvements |
| **Channels** | • Fixes issues with loss of site preview<br>• Improvements in page indexing for search<br>• Increases search results on sites, now defaulting to 15 results |

### 10.0.10

:::tip Release date
November 04, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Security improvements<br>• All administrator sessions are invalidated when their password is changed |
| **Channels** | • Fixes issues when rendering pages with segmented content<br>• Fixes issues when rendering very large content pages<br>• Fixes the author of a synchronization in the activity shown on pages, widgets, templates, and menus<br>• Option to enable webpush in application settings has been added |
| **Customers** | • Adds the ability to map an object-type claim attribute to a specific custom field<br>• Adds webpush sending capability in notification campaigns when enabled on the site related to the realm |

### 10.0.9

:::tip Release date
October 14, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Security improvements<br>• Fixes session expiration based on inactivity time |
| **Content** | • Fixes issue when publishing entries with asset lists, now the defined order in the list is respected<br>• Fixes issue when publishing entries containing rich text in code mode<br>• Fixes parameter duplication issue when using the administrative content API |

### 10.0.8

:::tip Release date
September 16, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Fixes issue with link preloading when hovering |

### 10.0.7

:::tip Release date
September 06, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Security improvements |
| **Channels** | • Fixes the search pager on sites to show the number of pages based on the maximum number of results |
| **Content** | • Adds exact filter by `full_path` and `uuid` to the content API categories endpoint |
| **Customers** | • Fixes synchronous segment calculation at login when enabled |

### 10.0.6

:::tip Release date
August 14, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Security improvements |
| **Channels** | • Fixes Liquid SDK issue when displaying JSON of a repeatable group |
| **Content** | • Adds `search` query param to perform text search using the content API |

### 10.0.5

:::tip Release date
August 02, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Fixes SEO configuration error |

### 10.0.4

:::tip Release date
July 30, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Security improvements<br>• Webhooks improvements, now stages respond to hooks associated with a site, adds hooks when creating or updating an asset |
| **Channels** | • Fixes issue when publishing a page when variables are configured and backups are deleted |

### 10.0.3

:::tip Release date
July 12, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Security improvements<br>• Performance enhancements<br>• SEO configuration improvements added, it is now possible to edit the sitemap and robots from the organization's settings and automatically include sites that depend on the base URL<br>• Active sessions list added to the administrator's profile, it is also possible to close them from this view |
| **Content** | • Fixes issue when cloning content entries with multiple languages |

### 10.0.2

:::tip Release date
July 08, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Security improvements<br>• Performance enhancements<br>• Dependency update |
| **Customers** | • Phone format improved, country now automatically selected via Cloudflare |
| **Channels** | • Fixes a performance issue when using the `by_tag` filter in Liquid templates<br>• Improves template loading experience when returning to the template builder |
| **Content** | • Adds the ability to clone spaces and content types |

### 10.0.1

:::tip Release date
May 31, 2024
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Security improvements<br>• Performance enhancements<br>• Dependency update |
| **Customers** | • Soft login, now possible to log in via an OTP code sent to email<br>• Improvements to registration and profile forms |
| **Channels** | • Improvements in site variable access, now accessible for viewing by any role<br>• Adds the ability to use global and site variables in menu item URLs<br>• Adds page ordering by path in table view |
| **Content** | • Adds the ability to specify a description for spaces, which is displayed in the overview<br>• Adds the ability to add a description to content types |