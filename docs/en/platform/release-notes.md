---
search: true
---

# Notas del release

### 9.1.X - First release planned for the second quarter of 2020.
What to expect in this release?

&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Scheduler: Schedule a change in the future without the need to unpublish what is already published.
* Administrator groups: To easily add users together to different sites or spaces.
* Modyo Lite: Access a version of Modyo that includes the Core, Content and Channels applications.

<Badge text="Channels" type="channels" vertical="middle"/>
* Release manager: Groups and accumulates Channels publications.
* Site stages: Works in a safe pre-productive environment of a site, without compromising the integrity of what is already published in it.
* Global variables: Reuse snippets between sites.
* Improvements to SEO: Customize meta-tags for your pages from an easy to use interface.

<Badge text="Customers" type="customers" vertical="middle"/>
* Business Events: Add any event that is relevant to your business to Modyo, then allow for customer segmentation.
* User Realms: Set up different user realms to access different sites or even different stages of the same site.

### 9.0.8 - June 15, 2020
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Security enhancements added to file upload endpoints.
* Multiple bugs solved.
* Multiple navigation and usability improvements.

<Badge text="Content" type="content" vertical="middle"/>
* Different drops of liquid are added depending on the type of file in the [asset manager](/en/platform/content/asset-manager.html#file-properties).

<Badge text="Channels" type="channels" vertical="middle"/>
* Example code added when creating new [content views](/en/platform/channels/templates.html#automated-content-views)
* An input attribute selector is added to the content views.

<Badge text="Customers" type="customers" vertical="middle"/>
* File type questions on [forms](/en/platform/customers/forms.html#add-field) are removed

### 9.0.7 - June 01, 2020
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Improvements to management and plan fees
* Added empty view of [my tasks](/en/platform/core/the-modyo-interface.html).
* Multiple bugs solved.
* Multiple navigation and usability improvements.

<Badge text="Content" type="content" vertical="middle"/>
* The [preview mode](/en/platform/content/entries.html#preview) is changed so that by default it always uses the editable templates.
* New views are added when there are no elements created in [entries](/en/platform/content/entries.html), [types](/en/platform/content/types.html), [categories](/en/platform/content/entries.html#categories) and [spaces](/en/platform/content/spaces.html).
* The [search operator](/en/platform/content/public-api-reference.html#filters-2) is added to search the location fields of the entries.

<Badge text="Channels" type="channels" vertical="middle"/>
* An example is added when creating [content views](/en/platform/channels/templates.html#content-views).
* The files [manifest.json and serviceworker.js](/en/platform/channels/sites.html#pwa) are left public, while privacy is forced on files [robots.txt and sitemap.xml](/en/platform/channels/sites.html#seo).

<Badge text="Customers" type="customers" vertical="middle"/>
* New views are added when there are no items created in [users](/en/platform/customers/users.html), [targets](/en/platform/customers/targets.html), [forms](/en/platform/customers/forms.html) and [campaigns](/en/platform/customers/messaging.html).

### 9.0.6 - April 30, 2020
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* FOG support is added with Azure and Google Cloud as a base for Modyo installation.
* Added integration with [Google Authenticator](/en/platform/core/security.html) for second team member authentication factor.
* Added [password policies](/en/platform/core/security.html#password-policy) for team members.
* Multiple bugs solved.
* Multiple navigation and usability improvements.

<Badge text="Content" type="content" vertical="middle"/>
* You will only see the spaces where you are allowed to be a member of the team.
* The possibility of [remove spaces](/en/platform/content/spaces.html#general) is added.

<Badge text="Channels" type="channels" vertical="middle"/>
* Adding [redirect table](/en/platform/channels/sites.html#custom-redirects) will allow you to reuse old urls with a good SEO and redirect them to new site URLs.
* The content where you search in the pages is improved.
* Snippets are added to [enable PWA](/en/platform/channels/sites.html#pwa) in the site's base JavaScript when the property is enabled.
* Added possibility to integrate google tag manager to sites.
* Only sites where you have permissions as a team member will be displayed.
* Added ability to [remove sites](/en/platform/channels/sites.html#general).

<Badge text="Insights" type="insights" vertical="middle"/>
* Added view of [reports in insights](/en/platform/insights/data-studio.html).

### 9.0.5 - March 19, 2020
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Multiple bugs solved.
* Multiple navigation and usability improvements.

<Badge text="Channels" type="channels" vertical="middle"/>
* Content is added to search results on sites from the front end

### 9.0.4 - March 12, 2020
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Multiple bugs solved.
* Multiple navigation and usability improvements.

<Badge text="Channels" type="channels" vertical="middle"/>
* Text search in [template builder](/en/platform/channels/templates.html), to facilitate changes.
* Added feature to force publishing widgets via [Modyo CLI](/en/platform/channels/widgets.html).

### 9.0.3 - March 02, 2020
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Multiple bugs solved.
* Multiple navigation and usability improvements.

<Badge text="Content" type="content" vertical="middle"/>
* Obtaining the content delivery token through the [JavaScript SDK](/en/platform/content/public-api-reference.html#private-content).

<Badge text="Channels" type="channels" vertical="middle"/>
* Customize the reaction of a site when a url does not exist, [showing a 404 error or redirecting to home](/en/platform/channels/sites.html#restrictions).

### 9.0.2 - February 04, 2020
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Multiple bugs solved.
* Multiple navigation and usability improvements.

<Badge text="Content" type="content" vertical="middle"/>
* Use locations in content with maps or with a form, configuring a google api key in the account settings.
* Improvements to the [liquid SDK](/en/platform/content/public-api-reference.html#liquid-sdk) content.
* Usability improvements to the [asset manager](/en/platform/content/asset-manager.html).
 
### 9.0.1 - January 17, 2020
&nbsp;
<Badge text="Core" type="core"/>
* Multiple bugs solved.
* Multiple navigation and usability improvements.

<Badge text="Content" type="content" vertical="middle"/>
* Added functionality to [preview content](/en/platform/content/entries.html#preview) on sites, despite being headless, when using content on a Modyo site you can use the tool to preview that content.

<Badge text="Channels" type="channels" vertical="middle"/>
* Functionality is added to create [custom content views](/en/platform/channels/templates.html#content-views) on sites.
* A list of pages using each widget is added, so you can see the effects of a change wherever it is used.

### 9.0.0 - December 19, 2019
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Separation of users and [team members](/en/platform/core/roles.html#team), those who have access to the platform are separated from the users of the page itself
* New [roles and permissions](/en/platform/core/roles.html).
* [Team review](/en/platform/core/team-review.html), replacing the workflow application, allows the team to collaborate for the approval of the publication and the transition to production.
* Multiple bugs solved.
* Multiple navigation and usability improvements.

<Badge text="Content" type="content" vertical="middle"/>
* New [content application](/en/platform/content/), with all headless content.
* New [asset manager](/en/platform/content/asset-manager.html) that allows to have all the files of an account in one place.

<Badge text="Channels" type="channels" vertical="middle"/>
* New minimal theme 2020 cleaner and easier to adapt