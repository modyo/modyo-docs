---
search: true
---

# Pages

Pages are what allow you to create structure for your sites, where you can add unstructured content and customize the routes from which that content is displayed.

![Index of pages](/assets/img/platform/page-index.png)

You can add new Pages by clicking on the **+ New** button in the upper right corner of the interface. You must choose a name, path and if the new page will have a parent.

To edit a page, you must click on the edit icon (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M14.06 9l.94.94L5.92 19H5v-.92L14.06 9m3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>) or the page name to go to the edit view.

In the edit view, you will see a bar across the top, a central grid in the middle, and a sidebar with tabs.

In the top bar, you can find different actions and information:

**Title**: Located in the upper left, and indicates the name of the page you are modifying. On the right side of the name, you can see the current state of the page. The state will either be "Draft", "Under review", "Approved", "Pending changes", or "Published". To learn more about these states, review the [versioning and team review](/en/platform/core/key-concepts.html) section.

**Publication date**: On the right side of the top bar, if the page has been published, the date of the last publication will be indicated.

**Preview** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: This icon allows you to open a new tab in the Page Preview mode to be able to view the changes that have been made on the page without having to publish it.

:::warning Attention
You can preview pages as a user without a session or with a Modyo session. For this, it is advised to log in or out of Modyo from your site before entering preview mode, because if you log out while in preview mode you might encounter security errors like _x-frame-options_ or _mixed-content_, depending on your site's SSL and custom domain settings.
:::

**Differences** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M19 3h-5v2h5v13l-5-6v9h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 15H5l5-6m0-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h5v2h2V1h-2v2z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: Clicking on the Differences icon will take you to the [differences view](/en/platform/channels/sites.html#review-and-joint-publication) that allows you to select and compare two versions of the same page. This view also allows you to perform a [reset or rollback](/en/platform/core/key-concepts.html#actions-for-versioning) of your page.

::: tip Tip
If your page is in "draft" status, the differences icon will not appear, since there is nothing to compare with the current editable version. To learn more about differences and backups, review the [versioning](/en/platform/core/key-concepts.html # versioning) section.
:::

**Activity** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29H12m1-6v3.08L16.08 17H21V7H7v10h6M3 15H1V3a2 2 0 0 1 2-2h16v2H3v12m6-6h10v2H9V9m0 4h8v2H9v-2z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: Clicking on this icon displays a sidebar that shows page activity, such as modifications, publications and comments. At the bottom of this bar, you can write a comment. If the page is under review, all assigned reviewers will receive a notification of the comment.

**Other actions** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>:

- Archive <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M5.12 5l.81-1h12l.94 1M12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5m8.54-12.27l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6 3 6.5V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.5c0-.5-.17-.93-.46-1.27z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: If a page is not published, this action allows you to archive it. When a page is archived, it will not appear in the page index and allows you to keep the site structure clean.
- Duplicate <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M20 16V4H8v12h12m2 0a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2h12a2 2 0 0 1 2 2v12m-6 4v2H4a2 2 0 0 1-2-2V7h2v13h12z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: This action allows you to copy the editable version of the page you are currently working on. The copied version starts in a draft state as if it were a newly created page.

::: warning Warning
Once the copying action is complete, you will be directed to the new page. Remember to save all changes before using this action, otherwise you could lose valuable information.
:::

**Main action**: The green button in the upper right. This button can take different forms:

- Save: Allows you to save all changes made to the page.
- Send to review: If Team Review is enabled, and all changes have been saved, this action will allow you to submit the page for review and assign reviewers.
- Publish: If the page is approved, and if all the changes have been saved, you can got to the [publish view](/en/platform/channels/sites.html#review-and-joint-publication) to review and publish changes in across the site.

:::tip Tip
* If a page has a parent page, you can only publish it if the parent page is published.
* If a page has children, you can only unpublish it if all of its child pages are unpublished.
* If a page has children, you can only archive it if all of its child pages are archived.
:::

**Secondary Actions**:
- Force publish: If you are a site administrator, then you have the option to publish pages at any time, including skipping the team review process.
- Unpublish: If the page is published, then you will see this action and can unpublish the page.

![Page builder](/assets/img/platform/page-builder.png)

The central grid is the place where you can position your widgets. You can move widgets back and forth using the _drag-and-drop_ functionality by dragging them from the <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M7 19v-2h2v2H7m4 0v-2h2v2h-2m4 0v-2h2v2h-2m-8-4v-2h2v2H7m4 0v-2h2v2h-2m4 0v-2h2v2h-2m-8-4V9h2v2H7m4 0V9h2v2h-2m4 0V9h2v2h-2M7 7V5h2v2H7m4 0V5h2v2h-2m4 0V5h2v2h-2z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg> icon.

In the right side section you will find three tabs:

- Add Widgets: allows you to select widgets from a list and add them to the grid.
- Edit Widget: allows you to change different properties and filters for each widget.
- Properties: allows you to modify the name, excerpt, path, parent, privacy, grid layout, and meta tags of the page.

### Widgets

You can add them from the first tab of the Page builder. The available widgets are:

- **HTML**: Allows you to enter HTML and CSS code without validations. While markup, styling, and templating are allowed in HTML widgets, scripting is not. If you need to include Javascript, you should create a [custom widget](/en/platform/channels/widgets.html).
- **Rich text**: Allows you to make use of a rich text editor, in which you can write and edit text and swap to a code view to check or modify the HTML directly.
:::warning Warning
The rich text widget has an automatic formatter, so the code you write in the code view may be affected.
:::
- **Content**: These are default widgets that will allow you to display filtered content lists connected to your spaces. Use the filters to specify the space, type, language, tags and category of the content you want to display. To modify how these widgets look, you must do so in the [template builder](/en/platform/channels/templates.html), in the widgets section.
- **Custom**: Clicking this displays a list of all custom widgets that you have created and published in the Widget Builder.

Once a widget is selected in the central section, the focus will move to the central tab, where you can find different configuration options for the widgets and if you select a custom widget, you will find a link to go directly to its edit view in the [widget builder](/en/platform/channels/widgets.html) and the list of variables that the widget is using. If you want to overwrite the value of a particular variable for that instance of the widget on that page, you must select the checkbox to the left of the variable and change the value it takes.
In the right sidebar, you can select different grids based on the structure you need in the third tab.

### Properties

In this tab you will find common property options for all pages:

* Name
* Parent
* Path
* Excerpt
* Grid
* Privacy
* Meta tags

:::warning Warning
Modyo has reserved paths for the pages, so you cannot use these as paths for your custom pages:
<table style="border: none;"><tr style="border: none;">
<td style="border: none;"><ul>
<li>404</li>
<li>422</li>
<li>500</li>
<li>admin</li>
<li>auth</li>
</ul></td>
<td style="border: none;"><ul>
<li>crossdomain</li>
<li>dist</li>
<li>forms</li>
<li>javascript</li>
<li>login</li>
</ul></td>
<td style="border: none;"><ul>
<li>logout</li>
<li>manifest</li>
<li>ping</li>
<li>preview</li>
<li>profile</li>
</ul></td>
<td style="border: none;"><ul>
<li>robots</li>
<li>search</li>
<li>serviceworker</li>
<li>session</li>
<li>site_logout</li>
</ul></td>
<td style="border: none; vertical-align: top;"><ul>
<li>sitemap</li>
<li>stylesheets</li>
<li>uploads</li>
<li>widget_manager</li>
</ul></td>
</tr></table>
:::

#### Child routes delegation

Enable the child routes delegation to allow the full control of the page routes from the Javascript router.

#### Privacy

If you enable the "Private" option on a page, then a user must be logged in with a session to view this page. Along with privacy, you can also associate [Segments](/en/platform/customers/segments.html), so that only users belonging to specific user segments can access this page. Those who are not part of the group of selected targets will be redirected to the previous page or to the home page.

#### Meta tags

In this section you can add meta tags to your pages or modify the value of existing meta tags, in order to improve the SEO of the page. With the tags added to the page, you can decide whether to use the default value, change current tag values or remove the tag from the page.

:::tip Tip
Please note that for the meta tags to take effect on your page, you must publish the changes.
:::

To access the list of meta tags on the page, you must use the <span v-pre>`{{ page.meta_tags }}`</span> Liquid drop. We recommend that you go through the example in the SEO section of the [Template builder](/en/platform/channels/templates.html#seo).

:::tip Tip
If you want to add a meta tag to all your pages simultaneously, you can do this in the [SEO section of your site's configuration](/en/platform/channels/sites.html#seo).
:::
