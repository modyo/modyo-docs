---
search: true
---

# Release Notes

## 10.2

### 10.2.2

:::info Release date
November 16, 2026
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Adds reliable webhook delivery, now each notification is sent at least once:<br>&nbsp;&nbsp;- Delivery log with each delivery's status, attempts, and last result, available from the admin and the admin API<br>&nbsp;&nbsp;- Automatic retries with increasing wait times on communication errors and 5xx, 408, or 429 responses<br>&nbsp;&nbsp;- New `webhook-id`, `webhook-timestamp`, `modyo-event-type`, and `modyo-attempt` headers on every request, with a `webhook-id` that stays the same across retries so the receiver can process each delivery only once. The payload body does not change<br>&nbsp;&nbsp;- Manual redelivery, individual or bulk<br>&nbsp;&nbsp;- Degraded status for webhooks with sustained failures, which slows down retries without disabling them<br>&nbsp;&nbsp;- The test notification shows the endpoint's actual result<br>&nbsp;&nbsp;- A disabled webhook now stops sending notifications and cancels its pending deliveries |
| **Channels** | • Adds the public Channels API, with a read-only endpoint that returns a site's published menu as JSON, with its items' hierarchy and attributes. Private and segmented items are filtered according to the user's session on the site, with the same rule as the menu in Liquid, and the account's CORS origins also enable this API<br>• Fixes site cloning and stage creation, which kept purging the CDN cache when copying widgets with global variables and could exceed Cloudflare's rate limit. The CDN cache of newly created widgets is no longer purged<br>• Fixes deleting a web app stage, which did not validate the confirmation text on the server. Now the API requires the stage's application name, the same one the modal asks for, as with a main web app (Breaking change, a call to `DELETE /api/admin/sites/{id}` on a stage without `validation` or with a different name now responds 401 and does not delete the stage) |
| **Content** | • Improves the time of the migration that creates the alternatives of the types' selection fields when upgrading from 10.1, and prevents it from blocking entry editing while it runs |
| **Customers** | • Adds stages to realms, with the same experience as Channels stages:<br>&nbsp;&nbsp;- Up to 4 stages per realm including the main one, created in the background from another stage<br>&nbsp;&nbsp;- Manual and selective synchronization between stages of the same realm for the settings, custom fields, forms, published originations, segments, data sets, messaging, and transactional emails<br>&nbsp;&nbsp;- A site or a space can use any stage of the realm, and each stage has its own login, profile, and API URL<br>&nbsp;&nbsp;- A new stage does not include identity providers, integrations, OAuth clients, or webhooks<br>&nbsp;&nbsp;- New permissions to manage stages, view their differences, and synchronize them<br>• Adds a custom domain for the realm's public profile, with a canonical domain and two alternative ones, as in sites:<br>&nbsp;&nbsp;- Login, sign up, password recovery, OTP, logout, and identity provider callbacks respond on the custom domain, with `/realms/...` paths without the realm identifier<br>&nbsp;&nbsp;- Profile pages on the alternative domains and on the account domain redirect with a 301 to the canonical domain<br>&nbsp;&nbsp;- A realm can share its host with a site from the same account<br>&nbsp;&nbsp;- The Customers API also responds on the realm's canonical domain<br>&nbsp;&nbsp;- Enabling or changing the domain ends the sessions open on the previous domain, and the callback URLs must be updated in the identity providers<br>&nbsp;&nbsp;- New permission group for the realm's domain settings<br>• Adds Incode as an identity verification provider, with document validation and OCR, selfie with liveness detection, face match, and government database validation, in two modes chosen in each task:<br>&nbsp;&nbsp;- Hosted URL, where the user completes the verification on an Incode page and returns to the same step of the flow<br>&nbsp;&nbsp;- Drop-in, where the verification happens in the same step with the Incode Web SDK, and which requires adjusting the site's content security policy (CSP)<br>&nbsp;&nbsp;- The results are saved in the submission step and shown in the "Identity Verification" tab<br>• Adds the Assign action to origination conditional logic, which assigns an Input, Code snippet, Pending review, or Validation task to an agent or a group when the rule is met, and allows adding several actions to the same rule (Breaking change, the originations API now returns each rule's actions in `targets` instead of `target`)<br>• Adds the "Hidden field" question type to forms, which is not shown to the end user and saves as its answer a fixed value, a value calculated with Liquid, or the value of a URL parameter<br>• Adds the "Rich Text" content field to forms, the same one from Input tasks, to show instructions or notices without generating an answer<br>• Adds support for file questions in forms for users without a session, the file is uploaded when the form is submitted and is only saved if the submission is valid<br>• Adds the "Enable search" option to Dropdown and Nested questions, including their data set variants, which allows filtering the alternatives by typing, in forms and Input tasks<br>• Adds predictable identifiers to forms to customize them with custom JS and CSS, with `data-question` and `data-field` attributes based on each question's identifier and the `forms:rendered` event once the form is on the page. A saved question's identifier can only be edited after confirming it<br>• Adds the "List Group Submissions" permission, with which a supervisor also sees the submissions assigned to the agents of their groups. No existing role has it by default (Breaking change, the admin API now applies the list's visibility rules to a submission's detail, tasks, and invitations, so a token with only "List Assigned Submissions" receives a 404 when querying submissions not assigned to it)<br>• Adds the "Assign Tasks" permission, required to assign, reassign, or unassign a submission task from the admin and the admin API. "View Submission Tasks" no longer allows assigning tasks and, except for Realm Admin, existing roles that need it must add it manually (Breaking change, an integration that assigns tasks with the token of a user without the permission now receives an error)<br>• Adds to the origination submissions admin API the submission's completion and cancellation dates, and each task's completion and last modification dates<br>• Adds an admin log for each error returned by the naat services, including retries, visible in the submission's activity and in the activity logs<br>• Improves the expiration of origination submissions:<br>&nbsp;&nbsp;- The term can start from the beginning of the submission, from the completion of a specific task, or from the value of a Date field, configurable from the admin<br>&nbsp;&nbsp;- The duration combines months, days, and hours, and months are now counted as calendar months instead of 30 days, so the expiration of ongoing submissions may move by one or two days<br>&nbsp;&nbsp;- Automatic cancellation happens at most one hour after expiration<br>&nbsp;&nbsp;- Submissions whose term has not started yet show "No expiration"<br>&nbsp;&nbsp;- Date answers without time keep their calendar date regardless of where they were saved<br>&nbsp;&nbsp;- `due_value` and `due_unit` are replaced by `due_months`, `due_days`, and `due_hours` in the admin API and in Liquid (Breaking change)<br>• Improves the texts of the single photo mode of the Identity document field, which now refer to a document instead of a passport, so it can be used with the front of an ID card or another document<br>• Fixes saving data from the snippet of a Code snippet task, which completed the task even when `completed` was not sent and, in a rejected task, submitted the correction on the first save. Now the task is completed by pressing "Next" or by sending `completed: true` (Breaking change, a snippet that completed the task by saving data without `completed` must now send `completed: true`)<br>• Fixes the activity log of origination tasks:<br>&nbsp;&nbsp;- Code snippet tasks with locking now log their submission and trigger their webhook<br>&nbsp;&nbsp;- The Confirmation task logs its start and completion<br>&nbsp;&nbsp;- The invitation task logs its automatic completion when the last invitation closes<br>&nbsp;&nbsp;- Completing a task with `tasks[]` in the admin API now assigns the next task to the agent and sends them the email, the same as the status endpoint<br>• Fixes closing invitations in multi-user originations, which stayed open if the invited user completed their last task without pressing "Next", from a snippet, the admin, or the API, and prevented completing the invitation task and the submission<br>• Fixes the "Next" button of origination tasks in realms with Google reCAPTCHA v3 or reCAPTCHA Enterprise, which did not submit the task<br>• Fixes login with an identity provider when the browser had a previous session already closed by the provider, the user authenticated but the site logged them out on return or a few minutes later<br>• Fixes the required fields message on sites in Spanish, which mixed English texts such as "Answers", "text field", and "alternative"<br>• Fixes the message deliveries list in realms with many deliveries, which failed in the admin and the API because it did not apply the default order by send date<br>• Fixes removing the file of a file question, now the admin API removes it when sending a null or empty value, and removing a non-image file, such as a PDF, from the admin no longer leaves it attached to the submission<br>• Fixes images uploaded in base64 to a file question through the admin API, which could end up without a thumbnail in the submission's documents |

### 10.2.1

:::info Release date
September 17, 2026
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Adds a pending task counter next to "My tasks" in the side menu, updated in real time and respecting the account's theme colors<br>• Fixes the creation of admin users without a language, which left the profile view blank, now the account's language is assigned when none is specified |
| **Channels** | • Fixes redirect URLs, which were not stored encoded and therefore never matched when the path contained accents or other special characters<br>• Fixes saving a site with an invalid host configuration, now domain validation only applies when the change affects the host, the main domain, or the alternative domains<br>• Removes the template update endpoint from the admin API along with legacy content view support (Breaking change, a client calling it now receives a 404). A template's path becomes immutable, it is assigned on creation and cannot be renamed, and editing remains available through the endpoint used by the Template Builder |
| **Content** | • Improves the content API preview, now preview mode travels in a signed token in the URL, which allows draft content to be viewed also on sites with their own domain that consume the API cross-origin, without additional CDN configuration<br>• Fixes space copying, which lost asset metadata and the order of content list fields, and left entries inaccessible from global snippets until each type was manually reindexed<br>• Fixes updating an asset used in an entry, now the new title, alternative text, or file name is reflected in snippets without republishing the entry |
| **Customers** | • Adds field masking in forms and Input tasks, now single line text and number fields support a configurable mask that prevents typing characters outside the expected format and formats the value while typing, and URL and email fields come with a built-in mask<br>• Adds new specialized field types for file uploads:<br>&nbsp;&nbsp;- Identity document, with front and back capture or passport, and optional country to improve OCR<br>&nbsp;&nbsp;- Selfie, with centered camera capture<br>&nbsp;&nbsp;- General documents, with text extraction through OCR<br>&nbsp;&nbsp;- In Selfie and Identity document, camera capture is the default method, and allowing a file upload is an independent option per field<br>&nbsp;&nbsp;- The Identity document OCR result is shown in the backend Fields view<br>• Adds the "Rich text" content field in Input tasks, a display-only block that generates no answer, edited with Froala and supporting HTML and Liquid with access to the submission and user context<br>• Adds external ids to simple and nested datasets, now each alternative can carry an identifier owned by the integrator, distinct from the value shown to the user, and exposed in the API and in the submission's Liquid drops<br>• Adds configurable security headers at the realm level, with their own Content-Security-Policy, Content-Security-Policy-Report-Only, Reporting-Endpoints, and Referrer-Policy for the login, signup, OTP, password recovery, and profile pages:<br>&nbsp;&nbsp;- New permission to manage them<br>&nbsp;&nbsp;- Headers start disabled and enabling them is irreversible, from that moment the realm is no longer governed by the global platform configuration<br>• Adds the property to block modifications to a task after it is completed, available in the properties of any task type and unchecked by default<br>• Adds link support in form and origination labels and hints, now HTML anchors can be written, with target support<br>• Adds a due date filter to the submission list, with the due soon, overdue, and on track options<br>• Adds the cross-cutting identifiers of the origination, the submission, and the task to the admin logs and business events in the origination scope, making correlation with external integrations easier, the new fields appear in events generated from this version onward<br>• Adds the username and email of whoever created the submission to the "created by" block in the admin API detail<br>• Improves agent tasks, which now inherit the CSS of the base template of the site connected to the origination and display the description configured in the task, with HTML and Liquid support<br>• Fixes the agent task iframe sandbox, which prevented opening or downloading the files submitted in the submission<br>• Fixes Pending review tasks worked from the agent iframe, which did not create the task response and caused a 404 when an integration updated its status<br>• Fixes the agent task of a canceled submission, which showed a loading error instead of a message stating the submission is no longer available<br>• Fixes the Fields view of a submission, which did not display the data of repeatable groups<br>• Fixes the display of Identity Verification task files, which opened a blank tab when clicking the image<br>• Fixes the origination builder when there are two Identity Verification tasks, the SDK configuration displayed the one from the other task and could be saved over the wrong one<br>• Fixes the deep link to a submission step without an active session, which returned a 404 instead of redirecting to login and returning to that step after authenticating<br>• Fixes the assignee selector search, which did not find individual members of a group<br>• Fixes the "Assign the submission to" dropdown in the invitation modal, which was cut off when there was not enough space below<br>• Fixes the OTP resend counter in soft login, which intermittently showed 1 hour instead of the time configured in minutes<br>• Fixes the language of the maximum size exceeded error message in file upload fields |

### 10.2.0

:::info Release date
August 11, 2026
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Adds account-level branding, now the administrative interface logos can be replaced and the color palette for basic actions adjusted so the panel feels native to each organization<br>• Adds bookmarks in the admin to create direct links to pages, spaces, and submission panels<br>• Adds system user support in administrative logs, automated actions are recorded as "System" instead of being attributed to a person<br>• Adds the option to view OpenSearch index mappings from each index's context menu in the Panel<br>• Fixes restoration of the admin_teams and admin_groups permission groups<br>• Fixes password recovery for admin users<br>• Fixes the URLs generated by the admin's automatic CSP<br>• Fixes the user token when impersonating over an already impersonated session<br>• Fixes Web Applications visibility for admins without the Channels check<br>• Fixes the Liquid linter in the admin editors, which now accepts whitespace control and tags written across multiple lines<br>• Fixes the file type validation that prevented uploading files with extensions such as xlsx<br>• Fixes the 404 error in the My Tasks view<br>• Fixes migration from 10.1 and updates the inconsistent data cleanup job |
| **Channels** | • Adds individual endpoints for layout page widgets and variables in the admin API, allowing a single widget or variable to be modified without replacing the rest of the page<br>• Adds support for the llms.txt standard, available alongside sitemap and robots in the site's SEO section<br>• Adds new Minimal templates aligned with the framework, for public sites, private sites, and origination landings<br>• Improves redirect management:<br>&nbsp;&nbsp;- Adds the option to enable and disable a redirect, also in bulk<br>&nbsp;&nbsp;- Redirects are now resolved before any other dispatcher route<br>&nbsp;&nbsp;- Allows choosing the redirect type for alternate domains, adding 301 in addition to 302<br>• Improves site search, which now returns results when the search term is part of a compound word<br>• Fixes partial page updates, which reset fields not sent in the body<br>• Fixes page creation, which silently accepted unknown page_type values<br>• Fixes the styling of the widget preview dropdown<br>• Fixes pending publication when altering a layout used by an origination page<br>• Fixes cache clearing when copying a site and when creating a stage<br>• Restricts the association between an origination and its page to 1-1, and fixes cloning and synchronization across stages |
| **Content** | • Adds content API preview, now the draft or published content check also applies to the API when an administrative session exists, without caching those responses<br>• Adds the bulk create action to the entries endpoint, allowing multiple entries to be created in a single call<br>• Adds the space slug to the entry drop<br>• Improves alternative management in content types, now renaming, deleting, and adding an alternative are distinguished, and changes can be propagated to published and scheduled entries<br>• Fixes the use of asset filters on an asset coming from an entry |
| **Customers** | • Adds multi-user origination, now whoever starts the flow can invite other users in previously defined roles:<br>&nbsp;&nbsp;- Roles assignable to one or more tasks in the flow<br>&nbsp;&nbsp;- Roles made up of one or more users, with a configurable maximum limit<br>&nbsp;&nbsp;- The main user can take on a role or fully delegate it to the invited users<br>&nbsp;&nbsp;- The flow completes once all participants have answered their part<br>• Adds task assignment to agents in originations:<br>&nbsp;&nbsp;- Tasks resolved exclusively by the agent, with a configurable waiting message for the end user<br>&nbsp;&nbsp;- New task view within the submission, rendering the site's views with iframe sandboxing<br>&nbsp;&nbsp;- Assignment to a user, a group, or a user within a group, with balancing by group or segment<br>&nbsp;&nbsp;- New endpoint to reassign a specific task to another agent<br>&nbsp;&nbsp;- Visual feedback when completing the agent's tasks<br>• Adds the Confirmation task, which shows the user a summary of what was provided in previous Input tasks so it can be reviewed and corrected before continuing<br>• Adds submission lifecycle control:<br>&nbsp;&nbsp;- Cancellation on expiration and manual cancellation with a comment<br>&nbsp;&nbsp;- System log with its own type for expiration cancellations<br>&nbsp;&nbsp;- Due date triggered by a Date type question<br>&nbsp;&nbsp;- Retry flow to trigger an already completed task again from the admin API<br>• Adds multichannel OTP and soft login improvements:<br>&nbsp;&nbsp;- Delivery of the same code through more than one channel at a time among email, WhatsApp, and SMS<br>&nbsp;&nbsp;- Use of the mobile phone as the OTP identifier when the realm has WhatsApp or SMS enabled<br>&nbsp;&nbsp;- OTP request at sign-up time<br>&nbsp;&nbsp;- Configurable email resend time and token duration<br>&nbsp;&nbsp;- New "Invitation only" option in account activation<br>&nbsp;&nbsp;- Realm default action configurable between login and signup<br>• Adds new realm-level integrations:<br>&nbsp;&nbsp;- Auronix as a WhatsApp provider for OTP and bulk campaigns<br>&nbsp;&nbsp;- SMS delivery through a configurable generic endpoint<br>&nbsp;&nbsp;- Biometrics with AWS Rekognition using Face & Liveness detection<br>&nbsp;&nbsp;- Improvements to the Naat integration on mobile<br>• Adds segments to a realm's groups and administrators, now a group with a role in a realm can be scoped to the users of one or more segments<br>• Adds an origination's submission status and task progress as filters for building segments<br>• Improves the submission search, now submissions are indexed in OpenSearch allowing searches over the data provided by users, and adds a filter by modification date<br>• Adds granular permissions for submissions, decoupling creation and assignment, listing, and detail<br>• Exposes in the admin API who created a submission, both in the listing and in the detail<br>• Improves the swagger documentation of the origination API and keeps 10.1 API support for customers with originations in production<br>• Adds the option to hide the cancel link on the origination page and shows the next step in the mobile stepper<br>• Allows editing integrations without having to disable them<br>• Fixes form conditional logic in required fields, nested questions, choice type options, and conditions across steps<br>• Fixes duplicate alternatives in dropdown and similar question types<br>• Fixes regular expression validation in Input tasks when they contain backslashes<br>• Fixes the international phone field when more than one field of this type exists in the form<br>• Fixes error messages in date fields with minimum and maximum values<br>• Fixes the 422 error when uploading large files to a submission through the admin API<br>• Prevents selecting file type questions in public forms<br>• Fixes Validation tasks, disabling the approve and reject buttons while processing, allowing approval without a configured assignee, and preventing a hidden conditional task from blocking the validation<br>• Fixes Code snippet tasks answered by agents, the 500 error when answering, tokens that did not comply with RFC 6750, and Liquid calls to custom snippets in stages other than Main<br>• Fixes origination invitations, now considering the default value of required custom fields, including the required registration data, and fixing the resume invitation template, the duplicated description, and the full site reload when updating progress<br>• Fixes the submission documents view with large files and with assets of an incorrect type<br>• Fixes the URL returned by the asset drop when it comes from a file type question<br>• Fixes the display of Identity Verification task results for an invited user<br>• Fixes the post sign-up redirect when the signup includes redirect_uri<br>• Fixes the soft login OTP error message, which revealed the existence of accounts and did not distinguish between an incorrect and an expired code<br>• Fixes the OTP entry UX on mobile, now deleting no longer forces removing digit by digit<br>• Fixes the 500 error when saving an origination that combines a Signature task with other tasks<br>• Fixes the creation of questions without a type from MCP, which caused a 500 error when entering the origination backend<br>• Fixes hidden steps that were shown in the Confirmation task<br>• Fixes redirection across an origination's stages<br>• Fixes the language of the error messages shown to the user |


## 10.1

### 10.1.20

:::info Release date
October 14, 2026
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Dependency security updates |
| **Channels** | • Fixes site cloning and stage creation on large sites, which were interrupted when the background process ran out of memory, leaving the resulting site or stage incomplete<br>• Fixes site cloning and stage creation, which still purged the CDN cache when copying widgets with global variables and could again exceed the Cloudflare rate limit. The CDN cache is now also not purged for newly created widgets |


### 10.1.19

:::info Release date
October 6, 2026
:::

| Module | Improvements |
|--------|---------|
| **Channels** | • Improves stage creation, elements are now cloned in the background to avoid timeouts on large sites. If an element fails, the process continues, and the creation modal shows the elements that could not be cloned, with the details in the stage creation log<br>• Fixes site cloning and stage creation on large sites, which stopped halfway when exceeding the Cloudflare rate limit. The CDN cache is no longer purged for newly created elements |


### 10.1.18

:::info Release date
August 24, 2026
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Restores automatic deletion of revoked session grants, which had not been brought over to version 10.1<br>• Improves the orphaned-data cleanup job so it deletes in batches and no longer locks tables for long periods |
| **Channels** | • Fixes the timeout when publishing widgets, pages, and site templates on installations with a high volume of accumulated versions<br>• Improves page render performance with additional indexes and by avoiding repeated snippet queries within the same render |
| **Content** | • Fixes the loss of empty inline tags used as icons, such as `<i>` and `<span>`, when switching between the WYSIWYG view and the code view |
| **Customers** | • Fixes an error when entering the backend of an origination that has questions created without a type via MCP |


### 10.1.17

:::info Release date
July 17, 2026
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Enables jemalloc in containers to mitigate out-of-memory (OOM) risk under high concurrency<br>• Fixes performance issue when validating permissions<br>• Updates nokogiri to fix low-severity memory bugs<br>• Fixes error when querying the admin user's `me` endpoint with a SAML session<br>• Fixes CORS activation in realms<br>• Fixes visibility of the channel icon in the side menu for users with permissions inherited from groups |
| **Content** | • Fixes authorized rich text tags so they work with wildcards |
| **Customers** | • Fixes OpenSearch reindexing when only a user's custom fields are updated<br>• Fixes duplicate indexing of the same user<br>• Fixes error when indexing login-error type user events<br>• Adds option to hide the cancel link on the origination page via configuration |


### 10.1.16

:::info Release date
June 2, 2026
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Dependency security updates |
| **Content** | • Fixes format alternation issue when manually entering a date in the datepickers |
| **Customers** | • Fixes user events export |


### 10.1.15

:::info Release date
April 30, 2026
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Adds support for credentials via form when refreshing the refresh_token<br>• Fixes loading of custom tags and attributes with wildcards in Froala |
| **Customers** | • Fixes permissions issue when changing the status of a submission through the API |


### 10.1.14

:::info Release date
April 16, 2026
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Improves retrieval of the end user's IP address |
| **Customers** | • Fixes performance issue in the segment editing view when there are many elements |
| **Content** | • Fixes issue that left scheduled versions of content after being published<br>• Fixes visual issue when displaying the datepicker in a richtext field |


### 10.1.13

:::info Release date
February 25, 2026
:::

| Module | Improvements |
|--------|---------|
| **Customers** | • Fixes error when publishing originations after a failure in a previous publication. The update of pending submissions is now correctly controlled<br>• Improves error handling in forms<br>• Fixes business events that caused errors when being indexed<br>• Fixes download of forms that include datasets |
| **Channels** | • Adds support for a type parameter in the local widget preview from the CLI, allowing the widget JavaScript to be loaded with type=module for module use cases in widgets |
| **Content** | • Fixes a visual overlap issue when having a date field and a paragraph field in entry editing<br>• Fixes an issue that caused scheduled unpublications of entries to be lost<br>• Fixes click issue on labels in checkbox fields |


### 10.1.12

:::info Release date
January 26, 2026
:::

| Module | Improvements |
|--------|---------|
| **Channels** | • Adds support for the report-to directive in the CSP header and the required Reporting-Endpoints header for this directive |
| **Customers** | • Fixes completeness evaluation issue in pending review tasks |
| **Content** | • Fixes the order in which multiple selection element values are delivered in content, now displayed according to the order defined in the type |


### 10.1.11

:::info Release date
January 15, 2026
:::

| Module | Improvements |
|--------|---------|
| **Core** | • Adds TTL to Redis objects when the session cookie is configured as "Session" |
| **Channels** | • Improves performance of user custom fields loading in me API calls<br>• Fixes 404 page cache, now generated per session user<br>• Fixes nonce issue in forms, now by default includes the hash of the involved asset |
| **Customers** | • Fixes selection issue in conditional logic selectors<br>• Fixes permission issue when unpublishing an origination by a Realm admin |


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
