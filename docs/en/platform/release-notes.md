---
search: true
---

# Release Notes

### 9.1.24 - 6 June 2021
<Badge text="Core" type="core" vertical="middle"/>
* Se arreglan otros problemas

### 9.1.23 - 5 June 2021
<Badge text="Core" type="core" vertical="middle"/>
* More security problem solved

### 9.1.22 - 4 June 2021
<Badge text="Core" type="core" vertical="middle"/>
* Security issues solved

<Badge text="Channels" type="channels" vertical="middle"/>
* Performance problem solved

### 9.1.21 - 28 May 2021

<Badge text="Core" type="core" vertical="middle"/>
* Security issues solved

### 9.1.20 - 27 May 2021

<Badge text="Core" type="core" vertical="middle"/>
* Multiple bugs solved.
* User Experience Improvements

### 9.1.19 - 19 May 2021

<Badge text="Core" type="core" vertical="middle"/>
* Multiple bugs solved.

### 9.1.18 - 18 May 2021

<Badge text="Core" type="core" vertical="middle"/>
* Multiple security improvements.

<Badge text="Channels" type="channels" vertical="middle"/>
* Page tree is redeployed

### 9.1.17 - May 5, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Performance improvements

### 9.1.16 - April 23, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Multiple bugs solved
* Multiple security improvements.

<Badge text="Channels" type="channels" vertical="middle"/>
* Fixed a bug that caused the "Save" button in the page builder to not work correctly.
* Fixed a bug when creating new sites where the "About Us" page was left without a layout selected.

### 9.1.15.1 - 6 June 2021
<Badge text="Core" type="core" vertical="middle"/>
* Se arreglan otros problemas urgentes

### 9.1.15 - April 14, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Multiple bugs solved.
* Added to the panel a tool to resolve inconsistencies in secondary structure to maintain the order of the pages of the site.
* Fixed a bug when uploading very large images to the file manager.
* Fixed a bug that caused the code editor to freeze on specific liquid syntaxes.

<Badge text="Channels" type="channels" vertical="middle"/>
* Added [new Liquid filters](/en/platform/channels/liquid-markup.html#filters) that allow using algorithms such as md5, sha1, sha256, hmac_sha1, hmac_sha256 and base64_encod.
* Page indexing is improved so that you can now find results that contain text from the content referenced in the pages.

### 9.1.14 - April 1, 2021

<Badge text="Core" type="core" vertical="middle"/>
* Multiple bugs solved.

<Badge text="Channels" type="channels" vertical="middle"/>
* A bug where you could loose the control over the templates was resolved.

### 9.1.13 - March 25, 2021

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bugs solved.
- Multiple navigation and usability improvements.
- Multiple security improvements.
- Multiple JS libraries with vulnerabilities updated.

<Badge text="Content" type="content" vertical="middle"/>
* Added dynamic filters by field values in the entries index.

<Badge text="Channels" type="channels" vertical="middle"/>
* Fixed a bug where copying a site did not consider templates.

<Badge text="Customers" type="customers" vertical="middle"/>
* Fixed a bug where the integration with OIDC redirected to the user's profile and not to the site from where the flow was started.

### 9.1.12 - March 19, 2021

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bugs solved.
- Multiple navigation and usability improvements.
- Multiple security improvements.

<Badge text="Content" type="content" vertical="middle"/>
* New filters were added to the Liquid SDK for content that enables to [search](/en/platform/content/public-api-reference.html#filter-entries), filter and [sort](/en/platform/content/public-api-reference.html#order-entries) by custom fields of the content type.

<Badge text="Customers" type="customers" vertical="middle"/>
* Form language is now tied to the site associated instead of the account language.

### 9.1.11 - March 02, 2021

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bugs solved.
- Multiple navigation and usability improvements.
- Multiple security improvements.
- Errors caused by standard attributes with specific formats in OIDC integration were fixed.
- Bugs that caused the publish/unpublish schedule to run 10 minutes later were fixed.
- A particular case where the HTML view of the rich text editor did not save changes was fixed.

### 9.1.10 - February 23, 2021

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bugs solved.
- Multiple performance improvements.

<Badge text="Channels" type="channels" vertical="middle"/>
* The option to [filter by slug](/en/platform/content/public-api-reference.html#filter-entries) in the Liquid SDK using the filter `by_slug` was added.
* The option to [unpublish all widgets](/en/platform/channels/widgets.html) and archive all non published widgets, even if they are being used in pages, was added.

### 9.1.9 - February 10, 2021

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bugs solved.
- Multiple performance improvements.

### 9.1.8 - February 02, 2021

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bugs solved.
- Multiple navigation and usability improvements.

### 9.1.7 - January 25, 2021

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bugs solved.
- Multiple navigation and usability improvements.
- Multiple security improvements.

<Badge text="Content" type="content" vertical="middle"/>
* The option to [edit entries in bulk](/en/platform/content/entries.html#bulk-edit) was added.
* The option to filters by author and targets in the index of entries was added.

<Badge text="Channels" type="channels" vertical="middle"/>
* The option to decide whether you want your widgets in the widget builder to [load synchronously or asynchronously](/en/platform/channels/widgets.html#synchronous-and-asynchronous-loading) was added.

### 9.1.6 - December 23, 2020

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bugs solved.
- Multiple navigation and usability improvements.
- Multiple security improvements.

<Badge text="Channels" type="channels" vertical="middle"/>
* Add the option to define \[variables in custom widgets\](/es/platform/channels/widgets.html #variables -del-widget).
* Add the option to define multiple \[JavaScripts and CSS\](/es/platform/channels/templates.html #css -y-javascript) as assets of the site.
* Add the option to create \[custom layouts\](/es/platform/channels/templates.html #layouts -custom) and then be able to use them on pages.
* Add the possibility to query the search results of the site in json format

<Badge text="Customers" type="customers" vertical="middle"/>
* Now you can only delete the forms that are disabled.

### 9.1.5 - 1 December 2020

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bugs solved.
- Multiple navigation and usability improvements.

<Badge text="Content" type="content" vertical="middle"/>
* Add the option to use \[operators\](/es/platform/content/public-api-reference.html #operadores) [in], [has], and [nin] in slug, name, uuid, and categories fields.
* Add the option to use \[bulk actions\](/es/platform/content/entries.html #acciones -bulk) in entries.

<Badge text="Channels" type="channels" vertical="middle"/>
* Add [total entry] filter (/es/platform/content/public-api-reference.html #acceder -a-a-space-inputs-) after using a content filter.
* It adds the functionality of distinguishing the same widget instantiated multiple times on a single page.

<Badge text="Customers" type="customers" vertical="middle"/>
* A new and improved [Targets] creation interface (/es/platform/customers/targets.html) is added including the option to use `AND` and `OR` operators.

### 9.1.4 - 10 November 2020

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bugs solved.
- Multiple navigation and usability improvements.
- Multiple security improvements.

<Badge text="Channels" type="channels" vertical="middle"/>
* The \[joint publication\](/es/platform/channels/sites.html #revision -and-joint publication) is added to the sites.
* Add the ability to \[delegate sub-paths\](/es/platform/channels/pages.html #delegacion -de-paths) of pages using JavaScript.

### 9.1.3 - 16 October 2020

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bugs solved.
- Multiple navigation and usability improvements.
- Multiple security improvements.

### 9.1.2 - 8 October 2020

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bugs solved.
- Multiple navigation and usability improvements.
- Multiple security improvements.

<Badge text="Channels" type="channels" vertical="middle"/>
* Add the drop `page` that considers both the home page and custom pages.

<Badge text="Customers" type="customers" vertical="middle"/>
* Adds the ability to use templates in already created messaging campaigns.
* Added the ability to \[delete users\](/es/platform/customers/realms.html #opciones -additional).

### 9.1.1 - 25 September 2020

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bugs solved.
- Multiple navigation and usability improvements.
- Multiple security improvements.

<Badge text="Content" type="content" vertical="middle"/>
* Added the ability to delete archived entries.

<Badge text="Channels" type="channels" vertical="middle"/>
* It adds the ability to [copy sites](/es/platform/channels/sites.html) and all its published content.

### 9.1.0 - 4 September 2020

<Badge text="Core" type="core" vertical="middle"/>

- \[Scheduler\](es/platform/core/key-concepts.html #programado): Schedule a change in the future without the need to unpublish what is already published.
- Modyo Lite: Modyo Lite: Access a version of Modyo that includes Core and Content and Channels applications.
- \[New Preview Mode\](/es/platform/core/key-concepts.html #modo -preview): A preview mode that allows you to view content, pages, templates, widgets and navigation together.
- Upgrade the ElasticSearch version to 7.4.
- Upgrade MySQL version to version 5.7 (adds support for emojis).
- Multiple bugs solved.
- Multiple navigation and usability improvements.
- Multiple security improvements.

<Badge text="Content" type="content" vertical="middle"/>
* Performance improvements and scalability in the public content API

<Badge text="Channels" type="channels" vertical="middle"/>
* \[Global Variables\](/es/platform/core/key-concepts.html #variables -global): Reuse snippets between sites.
* \[SEO Improvements\](/es/platform/channels/pages.html #meta -tags): Customize meta-tags for your pages from an easy-to-use interface.
* Added the ability to import \[custom redirects\](/es/platform/channels/sites.html #redirecciones -custom) from the site.

### 9.0.9 - 12 August 2020

<Badge text="Core" type="core" vertical="middle"/>

- Support for session cookies for older browsers is improved.

### 9.0.8 - 15 June 2020

<Badge text="Core" type="core" vertical="middle"/>

- Security enhancements are added to file upload endpoints.
- Multiple bugs solved.
- Multiple navigation and usability improvements.

<Badge text="Content" type="content" vertical="middle"/>
* Different drops of liquid are added depending on the file type in the \[asset manager\](/es/platform/content/asset-manager.html #propiedades -of-the files).

<Badge text="Channels" type="channels" vertical="middle"/>
* Example code is added when creating new \[content views\](/es/platform/channels/templates.html #vistas -for-content).
* An entry attribute selector is added to content views.

<Badge text="Customers" type="customers" vertical="middle"/>
* File type questions are deleted in \[forms\](/es/platform/customers/forms.html #anadir -field).

### 9.0.7 - 01 June 2020

<Badge text="Core" type="core" vertical="middle"/>

- Improvements to management and plan quotas.
- Empty view of [my tasks](/es/platform/core/the-modyo-interface.html) is added.
- Multiple bugs solved.
- Multiple navigation and usability improvements.

<Badge text="Content" type="content" vertical="middle"/>
* Change [preview] mode (/es/platform/content/entries.html #vista -preview) so that by default always use editable templates.
* New views are added when there are no items created in [entries](/es/platform/content/entries.html), [types](/es/platform/content/types.html), \[categories\](/es/platform/content/entries.html #categorias), and [spaces](/es/platform/content/spaces.html).
* [search] operator (/es/platform/content/public-api-reference.html #filtros -2) is added to search the entry location fields.

<Badge text="Channels" type="channels" vertical="middle"/>
* An example is added when creating \[content views\](/es/platform/channels/templates.html #vistas -for-content).
* The \[manifest.json and serviceworker.js\](/es/platform/channels/sites.html #pwa) files are left public, while [robots.txt and sitemap.xml] file privacy (/es/platform/channels/sites.html #seo) is forced.
* Improvements to usability and concepts of \[themes\](/es/platform/channels/templates.html #temas) in the template builder

<Badge text="Customers" type="customers" vertical="middle"/>
* New views are added when there are no items created in [users](/es/platform/customers/realms.html), [targets](/es/platform/customers/targets.html), [forms](/es/platform/customers/forms.html), and [campaigns](/es/platform/customers/messaging.html).

### 9.0.6 - 30 April 2020

<Badge text="Core" type="core" vertical="middle"/>

- Support for FOG with Azure and Google Cloud is added as Modyo installation base.
- Added integration with \[Google Authenticator\](/es/platform/core/security.html #autenticacion -in-two-steps) for second factor of team member authentication.
- \[password policies\](/es/platform/core/security.html #politica -password) are added for team members.
- Multiple bugs solved.
- Multiple navigation and usability improvements.

<Badge text="Content" type="content" vertical="middle"/>
* Only spaces where you have permissions as a team member will be displayed.
* Added the ability to \[delete spaces\](/es/platform/content/spaces.html #general).

<Badge text="Channels" type="channels" vertical="middle"/>
* It adds \[redirects table\](/es/platform/channels/sites.html #redirecciones -custom) that will allow you to reuse old urls with good SEO and redirect them to the new site URLs.
* The content where the pages are searched is improved.
* Add snippets to \[enable PWA\](/es/platform/channels/sites.html #pwa) in the JavaScript site base when the property is enabled.
* Added the possibility to integrate google tag manager to sites.
* Only sites where you have permissions as a team member will be displayed.
* Added the ability to \[delete sites\](/es/platform/channels/sites.html #general).

<Badge text="Insights" type="insights" vertical="middle"/>
* Add view of [reports in insights](/es/platform/insights/data-studio.html).

### 9.0.5 - 19 March 2020

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bugs solved.
- Multiple navigation and usability improvements.

<Badge text="Channels" type="channels" vertical="middle"/>
* Content is added to site search results from the front end.

### 9.0.4 - 12 March 2020

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bugs solved.
- Multiple navigation and usability improvements.

<Badge text="Channels" type="channels" vertical="middle"/>
* Text search in [template builder](/es/platform/channels/templates.html), for easy changes.
* It adds feature to force widgets publishing via \[Modyo CLI\](/es/platform/channels/widgets.html #comandos -available).

### 9.0.3 - 02 March 2020

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bugs solved.
- Multiple navigation and usability improvements.

<Badge text="Content" type="content" vertical="middle"/>
* Obtaining the content delivery token through the \[JavaScript SDK\](/es/platform/content/public-api-reference.html #contenido -private).

<Badge text="Channels" type="channels" vertical="middle"/>
* Customizing the reaction of a site when a url does not exist, \[showing a 404 error or redirecting to home\](/es/platform/channels/sites.html #restricciones).

### 9.0.2 - 04 February 2020

<Badge text="Core" type="core" vertical="middle"/>

- Multiple bugs solved.
- Multiple navigation and usability improvements.

<Badge text="Content" type="content" vertical="middle"/>
* Use locations in content with maps or with a form, setting up a google api key in account settings.
* Improvements to the \[liquid SDK\](/es/platform/content/public-api-reference.html #sdk -liquid) content.
* Usability improvements to [asset manager](/es/platform/content/asset-manager.html).

### 9.0.1 - 17 January 2020

<Badge text="Core" type="core"/>
* Multiple bugs solved.
* Multiple navigation and usability improvements.

<Badge text="Content" type="content" vertical="middle"/>
* It adds the functionality to \[preview content\](/es/platform/content/entries.html #vista -previous) on sites, despite being headless, when using content on a Modyo site you can use the tool to preview that content.

<Badge text="Channels" type="channels" vertical="middle"/>
* Added functionality to create \[custom content views\](/es/platform/channels/templates.html #vistas -for-content) on sites.
* A list of pages that use each widget is added, so you can see the effects of a change wherever it is used.

### 9.0.0 - 19 December 2019

<Badge text="Core" type="core" vertical="middle"/>

- Separation of users and \[team members\](/es/platform/core/roles.html #equipo), those who have access to the platform are segregated from the users of the page itself.
- New [roles and permissions](/es/platform/core/roles.html).
- [Team review](/es/platform/core/key-concepts.html), replacing the workflow application, allows team collaboration for release approval and step to production.
- Multiple bugs solved.
- Multiple navigation and usability improvements.

<Badge text="Content" type="content" vertical="middle"/>
* New [content application](/en/platform/content/), with all headless content.
* New [asset manager](/es/platform/content/asset-manager.html) that allows you to have all the files in an account in one place.

<Badge text="Channels" type="channels" vertical="middle"/>
* New minimal theme 2020 cleaner and easier to adapt.
