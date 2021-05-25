---
search: true
---

# Pages

Pages (or pages) are what allows you to create a structure for your site, where you can add unstructured content and customize the paths where that content is displayed.

![Page index](/assets/img/platform/page-index.png)

You can add new pages by clicking the **+ New** button at the top right of the view. You must choose a name, path and if the new page will have a parent.

To edit a page, you must click on the edit icon (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M14.06 9l.94.94L5.92 19H5v-.92L14.06 9m3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>) or the page name to go to the edit view.

In the Edit view, you find a top bar with actions, a center grid, and a tabbed sidebar.

In the top bar, you can find different actions and information:

**Title**: It is located at the top left, and indicate the name of the page you are modifying. On the right the name, you will find the current status of the page. Those can be “Draft”, “Under Review”, “Approved”, “Pending Changes”, “Published”. To learn more about these states, you can check out the [Versioning and Team Review] section (/es/platform/core/key-concepts.html).

**Publication date**: If the page has been published, the date of the last publication will be indicated.

**Preview** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: This icon allows you to open a new tab with Preview mode so you can view the changes that have been made to the page without having to publish it.

:::warning Attention
You can preview pages as a user without session or user with Modyo session. For this, it is advisable to log out or log out of Modyo from your site before entering preview mode, because if you log out in preview mode you might encounter security errors like _x-fame-options_ or _mixed-content_, depending on your site's SSL and custom domain settings, depending on your site's SSL and custom domain settings
:::

**Differences** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M19 3h-5v2h5v13l-5-6v9h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 15H5l5-6m0-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h5v2h2V1h-2v2z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: Clicking on the differences icon you will go to the [difference view](/es/platform/channels/sites.html #revision -y-and-joint) on the page that allows you to select two versions to compare, allowing you to execute the [reset and rollback](/es/platform/core/key-concepts.html #acciones -for-the-versioned)

:::tip Tip
If your page is in “Draft” status, the differences icon does not appear, as there is nothing to compare with the current editable version. To learn more about differences and backups, check out the [versioned] section (/es/platform/core/key-concepts.html #versionado)
:::

**Activiti** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29H12m1-6v3.08L16.08 17H21V7H7v10h6M3 15H1V3a2 2 0 0 1 2-2h16v2H3v12m6-6h10v2H9V9m0 4h8v2H9v-2z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: Clicking on this icon displays a sidebar showing you the activity associated with the page, such as modifications, posts, and comments. At the bottom of this bar, you can type associated comments. In case the page is under review, everyone who is assigned as reviewers will receive a notification with the comment.

**Other actions** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>:

- Archive <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M5.12 5l.81-1h12l.94 1M12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5m8.54-12.27l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6 3 6.5V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.5c0-.5-.17-.93-.46-1.27z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: If a page is not published, this action allows you to archive it. When a page is archived, by default it does not appear in the page index and allows you to keep the site structure clean.
- Duplicate <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M20 16V4H8v12h12m2 0a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2h12a2 2 0 0 1 2 2v12m-6 4v2H4a2 2 0 0 1-2-2V7h2v13h12z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: This action allows you to copy the editable version of the page you are on. The copied version is in the “Draft” state.

:::warning Attention
Once the copy action is finished, it directs you to the new page, so remember to save all your changes before using this action, otherwise you might lose important information.
:::

**Main Action**: This is the green button at the top right. This button can take different forms:

- Save: Allows you to save the changes you have made to the page.
- Send to Review: If team review is enabled, then if there are no changes to save, this action will allow you to review the page and assign reviewers.
- Publish: If the page is approved, you can go to the [joint publishing view](/es/platform/channels/sites.html #revision -y-y-joint publication) using this action.

:::tip Tip
* If a page has a parent, you can only publish it if the page is published.
* If a page has children, you can only unpublish it if all of them are unpublished.
* If a page has children, you can only archive it if all of them are archived.
:::

**Secondary Actions**:
- Force Publishing: If you are an administrator of the site, then you can view and use this option that allows you to publish the page at any time, even skipping the team review.
- Unpublish: If the page is published, then you see this action that allows you to unpublish the page.

! [Page builder](/assets/img/platform/page-builder.png)

The central grid is the place where you can position your widgets. You can move widgets from side to side by using the _drag-and-drop_ functionality by dragging them from the icon <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M7 19v-2h2v2H7m4 0v-2h2v2h-2m4 0v-2h2v2h-2m-8-4v-2h2v2H7m4 0v-2h2v2h-2m4 0v-2h2v2h-2m-8-4V9h2v2H7m4 0V9h2v2h-2m4 0V9h2v2h-2M7 7V5h2v2H7m4 0V5h2v2h-2m4 0V5h2v2h-2z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>.

In the right side section you will find three tabs:

- Add widgets: Allows you to select within a list of widgets to add them to the grid.
- Edit widget: Allows you to change different properties and filters for each widget.
- Properties: Allows you to modify the name, excerpt, path, parent, privacy, page grid and meta tags.

### Widgets

You can add them from the first tab of the Page builder. Available widgets are:

- **HTML**: Allows you to enter HTML and CSS code without validations. It will not allow you to enter Javascript code.
- **Rich text**: Allows you to use a rich text editor, where you can format text and switch between code view and rich text.
:::warning Attention
The rich text widget has an automatic formatter, so the code you type in the code view may be affected.
:::
- **Content**: These are default widgets that allows you to display content listings using filters by space, type, language, tags and category. To modify how these widgets look, you must do so in the [Template Builder](/es/platform/channels/templates.html), in the Widgets section.
- **Customized**: You will find a list of all the widgets you created and published in the widget builder.

Once you have selected a widget in the middle section, the focus will go to the central tab, where you can find different widget configuration options and if you select a custom widget, you will find a link to go directly to its editing view in the [widget builder](/es/platform/channels/widgets.html) and the variables that the widget is using. If you want to overwrite the value of a particular variable for that instance of the widget on that page, you must select the checkbox to the left of the variable and change the value it takes. 

### Properties

In this tab you will find options common properties for all pages:

* Name
* Father
* Path
* Extract
* Grid
* Privacy
* Meta tags

:::warning Attention
Modyo has reserved paths for the pages, so you won't be able to use them as paths for your custom pages:
 <table style="border: none;"> <tr style="border: none;"> 
 <td style="border: none;"> <ul> 
 <li> 404 </li> 
 <li> 422 </li> 
 <li> 500 </li> 
 <li> admin </li> 
 <li> auth </li> 
 </ul> </td> 
 <td style="border: none;"> <ul> 
 <li> crossdomain </li> 
 <li> dist </li> 
 <li> forms </li> 
 <li> javascript </li> 
 <li> login </li> 
 </ul> </td> 
 <td style="border: none;"> <ul> 
 <li> logout </li> 
 <li> manifest </li> 
 <li> ping </li> 
 <li> preview </li> 
 <li> profile </li> 
 </ul> </td> 
 <td style="border: none;"> <ul> 
 <li> robots </li> 
 <li> search </li> 
 <li> serviceworker </li> 
 <li> session </li> 
 <li> site_logout </li> 
 </ul> </td> 
 <td style="border: none; vertical-align: top;"> <ul> 
 <li> sitemap </li> 
 <li> stylesheets </li> 
 <li> uploads </li> 
 <li> widget_manager </li> 
 </ul> </td> 
 </tr> </table> 
:::

#### Route Delegation

Enables route delegation to allow absolute control of page sub-paths through the JavaScript router.

#### Privacy

If you enable privacy on a page, then a session will be required to view this page. Next to privacy, you can also associate [Targets](/es/platform/customers/targets.html), so that only users belonging to those targets will be able to access this page. Those who are not part of the selected target group will be redirected to the previous page or to the home of the site.

#### Meta tags

In this section you can add meta tags to the pages and modify the value of existing meta tags, to enrich the SEO of the page. With the tags added to the pages, you can decide whether to use the default value, overwrite the available value for the tag, or remove the tag from the page.

:::tip Tip
Keep in mind that for meta tags to take effect on your page, you must publish the changes.
:::

To access the meta tag list on the page, you must use the Liquid drop <span v-pre> `{{page.meta_tags}}` </span>. We recommend that you see the example in the SEO section of the [Template builder](/es/platform/channels/templates.html #seo).

:::tip Tip
If you want to add a common meta tag for all pages in a single action, go to the [site settings, SEO section](/es/platform/channels/sites.html #seo).
:::
