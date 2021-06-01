---
search: true
---

# Navigation

Navigation is the fastest way to put together a list of elements to give your users easy access to the key points of your site.

![Navigation builder](/assets/img/platform/navigation-builder.png)

In this section you will find a nested list of elements, which correspond to the elements that will appear on the site when using the <span v-pre> `{% menu%}` </span> tag in the [template builder section](/platform/channels/templates.html).

The builder menu only allows two levels of depth, so you can have a main list, and sub elements in each of the main items. You will not be able to nest other elements within the nested elements.

At the top of the view, you will find the publication status of the menu:

- **Published**: This status appears after you have made a publication and when the editable and published versions are the same.
- **Pending changes**: This status appears if there is already a published version, but there are changes to be published in your editable version.
- **In Review**: This status appears when [Computer Patch] is enabled (/es/platform/core/key-concepts.html) and the editable version has been sent for revision.
- **Approved**: This status appears when [Computer Patch] is enabled (/es/platform/core/key-concepts.html) and if the item review conditions were met. If you are in this state, your templates can already be published.

In the upper right, you can find the latest release date and available actions:

**Preview** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: Clicking this icon opens a new tab with menu preview mode, in which you can see as if they were published, all the changes you have in your menu.

:::warning Attention
You can preview the changes as a user without session or user with Modyo session. For this, it is advisable to log out or log out of Modyo from your site before entering preview mode, because if you log out in preview mode you might encounter security errors like _x-fame-options_ or _mixed-content_, depending on your site's SSL and custom domain settings, depending on your site's SSL and custom domain settings
:::

**Differences** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M19 3h-5v2h5v13l-5-6v9h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 15H5l5-6m0-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h5v2h2V1h-2v2z" fill="#626262"/> </svg>: By clicking on this icon, you will go to the [difference view](/es/platform/channels/sites.html #revision -y-publication-joint), in which you can compare changes between multiple versions of your menu.

By default, you start by comparing the published version to the editable version, but by using the version selectors, you compare with the backup versions.

:::tip Tip
Each time you publish a version, the version that was released becomes a backup version. 

By default, up to 20 backups are saved, so that the most recent 20 backups can be compared, restored, and rolled back. 

For more information on versioning, see the [Versioning] section (/es/platform/core/key-concepts.html #versionado).
:::

**Activity/Comments** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29H12m1-6v3.08L16.08 17H21V7H7v10h6M3 15H1V3a2 2 0 0 1 2-2h16v2H3v12m6-6h10v2H9V9m0 4h8v2H9v-2z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: If you have [team review](/es/platform/core/key-concepts.html) enabled, you see this option that clicking it, displays a sidebar with the activity history and comments from the menu. 

At the end of the sidebar, you see a text box where you can write a comment. Next to each activity, you can click on "view detail" to display the complete information of that activity log.

**Main Action**

- **Save**: Save all menu changes.
- **Send to Review**: Change the menu status to "Waiting for Review". In this state you continue to make changes, but each change will be notified via mail to the assigned reviewers.
- **Reject**: Returns to "In Edit" status, notifying reviewers that the item was rejected.
- **Publish**: Once the menu has been approved, you can go to the [joint publication] view (/es/platform/channels/sites.html #revision -y-y-joint) to publish your navigation.

In the right side section you can see a bar that changes according to the item selected in the main area. In this section you can see the options:

- **Name**: The name of the item that will appear on the site.
- **Associated Page**: Can be directly associated with a page or a custom URL.
- **URL**: If you chose a custom URL in the previous item, here you can type the URL you want this menu item to point to.
- **Open in new tab**: Add the attribute `target='blank '` to the HTML element of the menu item, so that when you click it, it opens in a new tab.
- **Private**: Makes the selected item visible only when there is an active user session on the site.
- **Targets**: If the above option is enabled, you can also target this item, so that in addition to having a session, users who are within the selected targets can already see this menu item.
