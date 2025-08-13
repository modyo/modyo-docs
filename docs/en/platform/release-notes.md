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
* Webhooks for user events (Breaking change: this change requires review prior to version upload)
* Adds session expiration policy at realm level
* Adds option to customize username input for login
* Adds new field types for forms
* Adds datasets at realm level that can be used in forms and originations
* Transforms user events (Breaking change: this change requires review prior to version upload)
* Unifies identity providers with integrations into a single module called "integrations."

## 10.0

### <Badge text="Core" type="core" vertical="middle"/>
* Controlled error when exceeding the maximum number of elements allowed by the API is removed.
* Performance improvements.
* Adds new supported characters for a user's username.
* Adds Authorization code + PKCE flow option in integration with an OpenID identity provider.
* Adds option to send authentication parameters via URL params.
* Security improvements.
* Explicitly adds the `samesite=Lax` attribute to the session cookie.
* Fixes error when publishing when backup limit is reached.
* Fixes author when cloning a content element, page, menu, widget, template; now the author of the new element is the one executing the action.
* Fixes issue with the list of sites, spaces, and realms in the webhooks list.
* Fixes issue with link preloading when hovering.
* Fixes SEO configuration error.
* Webhooks improvements, now stages respond to hooks associated with a site, adds hooks when creating or updating an asset.
* Performance enhancements.
* SEO configuration improvements added, it is now possible to edit the sitemap and robots from the organization's settings and automatically include sites that depend on the base URL.
* Active sessions list added to the administrator's profile, it is also possible to close them from this view.
* Dependency update.
* New administrative interface design.
* Adds cache invalidation support when Cloudflare is used for this purpose, allowing more aggressive caching that is invalidated when pages, content, and media library asset modifications occur.
* Adds new login alert for platform administrators; now, when logging in from a new device, an email notification is sent.
* All administrator sessions are invalidated when their password is changed.
* Fixes session expiration based on inactivity time.

### <Badge text="Channels" type="channels" vertical="middle"/>
* Improves csp-nonce injection in pages, now injected into every request that reaches the application regardless of whether application cache exists or not.
* Performance improvement in JSON filter for a content entry.
* Performance improvement in content loading from Liquid SDK and content pages.
* Performance improvement in menu loading.
* Fixes preview display persistence when administrator logs out for sites with custom domains.
* Improves menu synchronization, now correctly identifies initial segments if both stages share the same realm.
* Performance improvement when getting templates.
* Adds support for web assembly files as chunks in zip packages coming from Modyo CLI.
* Adds new `Service-Worker-Allowed` header in site security headers.
* Fixes an error in the assets modal.
* Fixes CSP nonce difference problem between header and view.
* Adds Liquid filters to manipulate form responses for a user in site building.
* Fixes permissions issue when uploading assets on sites.
* Fixes issues with using the `search` parameter in searches using the `filter_by_query_string` filter.
* Fixes issues when previewing global snippets.
* Fixes redirection issue to a site's custom domain.
* Improvements in page indexing scheduling.
* Fixes search results that contained private content.
* Fixes issues with loss of site preview.
* Improvements in page indexing for search.
* Increases search results on sites, now defaulting to 15 results.
* Fixes issues when rendering pages with segmented content.
* Fixes issues when rendering very large content pages.
* Fixes the author of a synchronization in the activity shown on pages, widgets, templates, and menus.
* Option to enable webpush in application settings has been added.
* Fixes the search pager on sites to show the number of pages based on the maximum number of results.
* Fixes Liquid SDK issue when displaying JSON of a repeatable group.
* Fixes issue when publishing a page when variables are configured and backups are deleted.
* Fixes a performance issue when using the `by_tag` filter in Liquid templates.
* Improves template loading experience when returning to the template builder.
* Improvements in site variable access, now accessible for viewing by any role.
* Adds the ability to use global and site variables in menu item URLs.
* Adds page ordering by path in table view.
* Adds the option to include the search bar as an item in menu construction.
* Improved template for new sites, simpler and with framework reference from the start.
* Adds global snippets, now it's possible to define a code snippet and use it across different account sites, also includes a draft or published selector in the preview.
* Improves widget preview, now you can select the site layout to preview the widget with.
* Adds the ability to preview widgets locally. When working with the Modyo CLI, you can now run a preview of the developing widget and view it directly in the browser with the ability to mount it in the different layouts contained in the destination site.
* Includes chunk support in CLI widgets, now the platform accepts a zip with widget data plus associated chunks.
* Improvements in the widget interface when they come from the CLI.
* Adds image processing when Cloudflare is used, through the assets filter you can specify image size and quality to display or a set of sizes as srcset, which benefits the performance of built sites.
* Moves global variable configuration to the channels context.
* BREAKING CHANGE: Content widgets: Content List and Content Featured are removed; they can be replaced by an HTML widget and the use of the Liquid SDK.

### <Badge text="Content" type="content" vertical="middle"/>
* Controlled error when exceeding the maximum number of elements allowed by the API is removed.
* Adds bulk segment editing.
* Restores borders of tables inserted in Froala.
* Fixes permission to get related entries when editing content.
* Fixes content indexing issues; now content is indexed for searches on content pages, content is indexed when published and the index is removed when unpublished; only widget pages are re-indexed in the re-indexing job, in case they include content via the SDK.
* Performance improvement in content indexing.
* Adds ordering within a content field of type content list.
* Fixes rich text issues where they become blank when moving elements within a repeatable group.
* Fixes error when copying content from another language when a repeatable group is present.
* Fixes error when editing content in bulk.
* Fixes errors in image selector and search in Rich Texts.
* Performance improvement in bulk content publishing.
* Fixes error when showing differences in very extensive content.
* Fixes issue when publishing entries with asset lists, now the defined order in the list is respected.
* Fixes issue when publishing entries containing rich text in code mode.
* Fixes parameter duplication issue when using the administrative content API.
* Adds exact filter by `full_path` and `uuid` to the content API categories endpoint.
* Adds `search` query param to perform text search using the content API.
* Fixes issue when cloning content entries with multiple languages.
* Adds the ability to clone spaces and content types.
* Adds the ability to specify a description for spaces, which is displayed in the overview.
* Adds the ability to add a description to content types.
* Adds repeatable groups in content; now in the definition of content types there is the option for a repeatable group which can define multiple fields as a group that can be instantiated many times when creating an entry.
* Adds Media Library; now the asset manager becomes a media library that exists within a space and not globally, allowing better permission management and organization of assets uploaded to the platform. It can also be used in channels through the media library modal, leaving the specific context of assets to the application in use.

### <Badge text="Customers" type="customers" vertical="middle"/>
* Fixes domain validation for the `redirect_to` logout parameter.
* Adds search bar to campaign listing.
* Fixes queuing of multiple segment calculation jobs for a user.
* Fixes user view to show all users when requested from the segment list.
* Performance improvement in user segment calculation at login.
* Improves custom field segment filter, now allows a list of values.
* Fixes multiple calls to the `count_matches` endpoint.
* Fixes segment recalculation.
* Fixes `from` field of email campaign, now defaults back to sender name.
* Fixes duplication of user segments.
* Fixes editing of newly added custom fields when editing a user.
* Adds the ability to map an object-type claim attribute to a specific custom field.
* Adds webpush sending capability in notification campaigns when enabled on the site related to the realm.
* Fixes synchronous segment calculation at login when enabled.
* Phone format improved, country now automatically selected via Cloudflare.
* Soft login, now possible to log in via an OTP code sent to email.
* Improvements to registration and profile forms.
* Adds Salesforce integration, now Salesforce contacts and realm users can be synchronized, configurable to receive and/or send user information changes.
* Visual improvements in registration and login forms.
* Improvements in email campaign creation, now campaigns can be cloned for new sends and the main view is simplified.
* Removes the "none" role, now all users will be account users by default.
