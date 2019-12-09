---
search: true
---

# Pages

Pages are what allows you to create a structure for your site, where you can add unstructured content and customize the routes from which that content is displayed.

![Index of pages](/assets/img/platform/page-index.png)

You can add new Pages by clicking on the **+ New** button at the top right of the view. You must choose a name, path and if the new page will have a parent.

To edit a page, you must click on the edit icon (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M14.06 9l.94.94L5.92 19H5v-.92L14.06 9m3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>) or in the name of the page to go to the edit view.

In the edit view, you will find a top bar with actions, a central grid and a sidebar with tabs.

In the top bar, you will find different actions and information:

**Title**: It is located in the upper left, and indicates the name of the page you are modifying. On the right the name, you will find the current state of the page. Those can be "Draft", "Under review", "Approved", "Pending changes", "Published". To learn more about these states, you can review the [versioning and team review](/guides/platform/team-review.html) section.

**Publication date**: If the page has been published, the date of the last publication will be indicated.

**Preview** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: This icon will allow you to open a new tab with the Preview mode to be able to view the changes that have been made on the page without having to publish it.

**Differences** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 3h-5v2h5v13l-5-6v9h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 15H5l5-6m0-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h5v2h2V1h-2v2z" fill="#626262"/></svg>: Clicking on the difference icon will raise a modal that will allow you to select two versions to compare and will indicate the changes between them.

::: tip Tip
If your page is in "draft" status, the differences icon will not appear, since there is nothing to compare the current editable version. To learn more about the differences and support, review the [versioning] section (/guides/platform/team-review.html # versioning)
:::

**Activity** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 23a1 1 0 01-1-1v-3H7a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-4.1l-3.7 3.71a1 1 0 01-.7.29H12zm1-6v3.08L16.08 17H21V7H7v10h6zM3 15H1V3a2 2 0 012-2h16v2H3v12zm6-6h10v2H9V9zm0 4h8v2H9v-2z" fill="#626262"/></svg>: Al Clicking on this icon, a sidebar will be displayed that will show you the activity associated with the page, such as modifications, publications and comments. At the bottom of this bar, you can write associated comments. In case the page is under review, all those who are assigned as reviewers will receive a notification with the comment.

**Other actions** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>:

- Archive <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M5.12 5l.81-1h12l.94 1M12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5m8.54-12.27l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6 3 6.5V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.5c0-.5-.17-.93-.46-1.27z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: If a page is not published, this action allows you to archive it. When a page is archived, by default it does not appear in the page index and allows you to keep the site structure clean.
- Duplicate <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M20 16V4H8v12h12m2 0a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2h12a2 2 0 0 1 2 2v12m-6 4v2H4a2 2 0 0 1-2-2V7h2v13h12z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: This action allows you to copy the editable version of the page you are on. The copied version will remain in draft state.

::: warning Warning
Once the copying action is finished, you will be directed to the new page, so remember to save all changes before using this action, otherwise you could lose valuable information.
:::

**Main action**: It is the green button in the upper right. This button can take different forms:

- Save: Allows you to save the changes you have made on the page.
- Send for review: If team review is enabled, then if there are no changes to save, this action will allow you to submit the page for review and assign reviewers.
- Publish: If the page is approved, you can publish the changes using this action.

::: tip Tip
If a page has a father, you can only publish it if your father is published.
:::

::: tip Tip
If a page has children, you can only unpublish it if all your children are unpublished.
:::

::: tip Tip
If a page has children, you can only archive it if all of its children are archived.
:::

**Secondary actions**:
- Force publication: If you are a site administrator, then you will be able to see and use this option that will allow you to publish the page at any time, even skipping the team review.
- Unpublish: If the page is published, then you will see this action that will allow you to unpublish the page.

![Page builder](/assets/img/platform/page-builder.png)

The central grid is the place where you can position your widgets. You can move widgets back and forth using the _drag-and-drop_ functionality by dragging them from the icon <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M7 19v-2h2v2H7m4 0v-2h2v2h-2m4 0v-2h2v2h-2m-8-4v-2h2v2H7m4 0v-2h2v2h-2m4 0v-2h2v2h-2m-8-4V9h2v2H7m4 0V9h2v2h-2m4 0V9h2v2h-2M7 7V5h2v2H7m4 0V5h2v2h-2m4 0V5h2v2h-2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>.

In the right sidebar, in the third tab (Edit layout) you can select different grids that fit the structure of the page you need.

In the right side section you will find three tabs:

- Add widgets: It will allow you to select within a list of widgets to add them to the grid.
- Edit widget: It will allow you to change different properties and filters for each of the widgets.
- Edit layout: It will allow you to modify the name, excerpt, path, parent, privacy and grid of the page.

### Privacy

If you enable privacy on a page, then a session will be required to view this page. Along with privacy, you can also associate [Targets](/guides/customers/targets.html), so that only users belonging to those targets can access this page. Those who are not part of the group of selected targets will be redirected to the previous page or home of the site.

### Widgets

- **HTML**: Allows you to enter HTML and CSS code without validations. It will not allow you to enter Javascript code.
- **Rich text**: It will allow you to make use of a rich text editor, in which you can format the text and switch between the code view and rich text.
::: warning Warning
The rich text widget has an automatic formatter, so the code you write in the code view may be affected.
:::
- **Content**: These are default widgets that will allow you to display content listings using filters by space, type, language, tags and category. To modify what these widgets look like, you must do so in the [template builder](/guides/channels/templates.html), in the widgets section.
- **Custom**: You will find a list of all the widgets that you have created and published in the builder widget.
