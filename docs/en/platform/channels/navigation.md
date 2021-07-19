---
search: true
---

# Navigation

Navigation is the fastest way to put together a list of elements to give your users easy access to the key points of your site.

![Navigation builder](/assets/img/platform/navigation-builder.png)

In this section you will find a nested list of elements, which correspond to the elements that will appear on the site when using the <span v-pre> `{% menu%}` </span> tag in the [template builder section](/platform/channels/templates.html).

The builder menu only allows two levels of depth, so you can have a main list, and sub elements in each of the main items. You will not be able to nest other elements within the nested elements.

At the top of the view, you will find the publication status of the menu:

- **Published**: You will see this status after you have made a publication and when the editable and published versions are the same.
- **Pending changes**: You will see this status if there is already a published version, but there are pending changes to be published in your editable version.
- **In review**: You will see this status when [team review](/platform/core/key-concepts.html) is enabled and the editable version has been submitted for review.
- **Approved**: You will see this status when [team review](/platform/core/key-concepts.html) is enabled and if the item review conditions were met. If you are in this state, your changes are ready to be published.

In the upper right, you will find the latest publication date and the available actions:

**Preview** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: Clicking on this icon will open a new tab with the "Navigation" preview mode, where you can preview all changes to the menu as if they were published.

:::warning Attention
You can preview the changes as a user without a session, or with Modyo a session. For this, it's recommended to log in or log out of Modyo from your site before entering preview mode, because if you log out while in preview mode you might encounter security errors like _x-frame-options_ or _mixed-content_, depending on your site's SSL and custom domain settings.
:::

**Differences** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M19 3h-5v2h5v13l-5-6v9h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 15H5l5-6m0-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h5v2h2V1h-2v2z" fill="#626262"/> </svg>: By clicking on this icon, you will open the [differences view](/platform/channels/sites.html#review-and-joint-publication), in which you can compare the changes between multiple versions of your menu.

By default you will start comparing the published version with the editable version, but by using the version selectors, you can also compare previous versions as well.

::: tip Tip
Every time you publish and replace the current version, the replaced version becomes a "backup" or previous version.

By default, up to 20 backups are saved, and can be compared and restored through the "rollback" feature.

For more information on versioning, check out the [versioning](/en/platform/core/key-concepts.html#versioning) section.
:::

**Activity/Comments** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29H12m1-6v3.08L16.08 17H21V7H7v10h6M3 15H1V3a2 2 0 0 1 2-2h16v2H3v12m6-6h10v2H9V9m0 4h8v2H9v-2z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: If you have [team review](/en/platform/core/key-concepts.html) enabled, this option displays a sidebar with activity history and menu comments when clicked.

You can add comments by submitting them at the bottom of the sidebar. Next to each activity, you can click on "Show details" to show the complete information of that particular activity log.

**Main Actions**

- **Save**: Save all menu changes.
- **Send to review**: Changes the menu status to "In review". In this state you can continue making changes, but each change alerts assigned reviewers via email.
- **Reject**: Returns to the "Pending changes" state, and notifies reviewers that the item was rejected.
- **Publish**: Once the changes are approved, you can go to the [publish view](/en/platform/channels/sites.html#review-and-joint-publication) to review and publish changes across the site.

In the right side section, you will see a bar that changes according to the item selected in the main area. In this section are the following options:

- **Name**: Name of the item as it appears on the site.
- **Associated Layout Page**: Directly associate a page to this menu item with a custom URL.
- **URL**: If you chose a custom URL in the "Associated Layout Page", you can specify the URL of this menu item.
- **Open in new tab**: Enable this option to open a the menu item link in a new tab. Adds the `target='blank'` attribute to the menu item's HTML.
- **Private**: Makes the selected item appear visible only when the user has an active session on the site.
- **Segments**: If the previous option is enabled, you can also segment this element, so that only those users in the specified segments will see this menu item.
