---
search: true
---

# Navigation

Navigation is the fastest way to put together a list of elements to give your users easy access to the key points of your site.

![Navigation builder](/assets/img/platform/navigation-builder.png)

In this section you will find a nested list of elements, which correspond to the elements that will appear on the site when using the <span v-pre> `{% menu%}` </span> tag in the [template builder section](/guides/channels/templates.html).

The builder menu only allows two levels of depth, so you can have a main list, and sub elements in each of the main items. You will not be able to nest other elements within the nested elements.

At the top of the view, you will find the publication status of the menu:

- **Published**: You will see this status after you have made a publication and when the editable and published versions are the same.
- **Pending changes**: You will see this status if there is already a published version, but there are pending changes to be published in your editable version.
- **In review**: You will see this status when [team review](guides/platform/team-review.html) is enabled and the editable version has been submitted for review.
- **Approved**: You will see this status when [team review](guides/platform/team-review.html) is enabled and if the item review conditions were met. If you are in this state, your templates are ready to be published.

In the upper right, you will find the latest publication date and the available actions:

**Preview** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Clicking on this icon will open a new tab with the menu preview mode, in which you can see as if they were published, all the changes you have in your menu.

**Differences** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 3h-5v2h5v13l-5-6v9h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 15H5l5-6m0-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h5v2h2V1h-2v2z" fill="#626262"/></svg>: By clicking on this icon, you will open the mode of differences, in which you can compare the changes between multiple versions of your menu. By default you will start comparing the published version with the editable version, but by using the version selectors, you can also compare with the backup versions.

::: tip Tip
Every time you publish a version, the version that was published becomes a backup version. By default, up to 20 backups are saved, so that the most recent twenty backups can be compared, restored and rollback. For more information on versioning, check out the [versioning] section (/guides/platform/team-review.html # versioning).
:::

**Activity/Comments** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 23a1 1 0 01-1-1v-3H7a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-4.1l-3.7 3.71a1 1 0 01-.7.29H12zm1-6v3.08L16.08 17H21V7H7v10h6zM3 15H1V3a2 2 0 012-2h16v2H3v12zm6-6h10v2H9V9zm0 4h8v2H9v-2z" fill="#626262"/></svg>: Yes is that you have the [team review](/guides/platform/team-review.html) enabled, you will see this option that when clicked, will display a sidebar with activity history and menu comments. At the end of the sidebar, you will see a text box where you can write a comment. Next to each activity, you can click on "see detail" to show the complete information of that activity log.

**Main action**

- **Save**: Will save all menu changes.
- **Send for review**: Change the menu status to "waiting for revision". In this state you can continue making changes, but each change will be notified via mail to the assigned reviewers.
- **Reject**: Returns to the "in edition" state, notifying the reviewers that the item was rejected.
- **Publish**: Once the menu has been approved, the version may be published.

In the right side section you will see a bar that changes according to the item selected in the main area. In this section you will see the options:

- **Name**: Name of the item that will appear on the site.
- **Associated Page**: It can be associated directly to a page or to a custom URL.
- **URL**: If you chose a custom URL in the previous item, here you can write the URL you want this menu item to point to.
- **Open in new tab**: Add the `target='blank' 'attribute to the HTML element of the menu item, so that when clicked, it opens in a new tab.
- **Private**: Makes the selected item appear visible only when there is an active user session on the site.
- **Targets**: If the previous option is enabled, you can also target this element, so that in addition to having a session, users who are within the selected targets can see this menu item.
