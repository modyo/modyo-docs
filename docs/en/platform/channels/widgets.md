---
search: true
sidebarDepth: 3
---

# Widgets

Widgets allow you to create _micro frontends_ for your sites and applications. Using Widgets extends the capabilities of your sites and allows you to have more control since you can add more functionality by keeping each widget as a separate entity from your site.

When you enter the Widgets section of the site, you can see a list of all the widgets that have been created. In the top bar you can filter the list of widgets by status, author, tags, or do a text search by the name of the widget.


In the widget editing view, you can see three areas: the top action bar, the main work area and the properties column on the right.

<img src="/assets/img/platform/widget-builder.png" alt="The widget builder module"> 

Along the **top bar**, on the left, you can see the widget name and current status:

- **Draft**: This status means a widget is new or is unpublished.
- **Published**: This status means a widget is published and the version in the editor contains no unpublished changes.
- **Pending changes**: This status means there is a published version of a widget, and the editor contains unpublished, pending changes.
- **In review**: This status means [team review](/en/platform/core/key-concepts.html) is enabled and this widget is in review.
- **Approved**: This status means [team review](/en/platform/core/key-concepts.html) is enabled and a widget passed the review process. You can now publish this widget.

On the right, these are the different actions:
**Preview** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: This allows you to open the preview of the widget's editable version in a new tab.

:::warning Warning
You can preview widgets as a user without a session or with a Modyo session. For this, it's recommended to log in or out of Modyo from your site before entering preview mode, because if you log out in preview mode you might encounter security errors like _x-frame-options_ or _mixed-content_, depending on your site's SSL and custom domain settings.
:::

**Differences** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M19 3h-5v2h5v13l-5-6v9h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 15H5l5-6m0-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h5v2h2V1h-2v2z" fill="#626262"/> </svg>: By clicking on this icon, you will go to the [difference view](/en/platform/core/key-concepts.html), where you can compare the changes between multiple versions of the widget.

By default, you see the differences between the published version and the editable version you are currently working on, but you can use the selectors to compare older backed up versions as well.

**Activity** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29H12m1-6v3.08L16.08 17H21V7H7v10h6M3 15H1V3a2 2 0 0 1 2-2h16v2H3v12m6-6h10v2H9V9m0 4h8v2H9v-2z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: This displays a sidebar with the widget's activity history and comments. At the bottom of the sidebar, you can submit comments. Next to each activity, click on "see detail" to show the complete information of an activity log.

**Other options** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: Archive and create a copy of the current widget.

**Main button:**

- **Save**: Saves current changes.
- **Send to review**: Changes the widget status to "In review". You can continue making changes, but each change sends a notification to all assigned reviewers via email.
- **Publish**: Takes you to the [joint publication](/en/platform/core/key-concepts.html) view where you can publish your widgets.

**Other main actions**<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>

- **Unpublish**: If the widget is published, you can take it out of production using this option.
- **Force Publish**: Admin team members have the option to forcibly publish widgets, circumventing the established reviewal process.

:::tip Tip
Only unpublished widgets can be archived.
:::

:::tip Tip
Archived widgets do not appear in the main widget list or in the Custom widget selection in Page Builder. You can restore an archived widget by editing it and using the **restore** option in the upper right corner of the editing view.
:::

Once a widget is published, it is available as a custom widget in the [page builder](/en/platform/channels/pages.html).

:::tip Tip
To learn more about publication lifecycles in Modyo, review the [Versioning](/en/platform/core/key-concepts.html#versioning) section.
:::

In the main work area you can see the following:

- **Code Tabs**: A JavaScript, CSS, and HTML tab is available to build widgets.
- **Asset manager**: Opens a modal that lists all account files and provides filters and searching. Clicking the image preview or file name opens an editor where you can resize/crop the image, and change attributes such as the title or alternate text. Selecting the copy icon provides you with a URL you can paste, and you can select the "Upload files" tab to upload files. You can learn more about By clicking on it, you will raise the file management modal, where you can filter and search the files you have uploaded in the [File manager](/en/platform/content/asset-manager.html) and copy its URL to use them in your widget. You can also upload new files from this modal.
- **Shortcuts helper**: A small pop-up that displays useful keyboard shortcuts for the Widget Builder.
- **Snippets**: Displays a list of snippets available from the [Template Builder](/en/platform/channels/templates.html#snippets) and copies their code to reference them in the widget.
- **Changes**: If changes have been saved and not published, it will display this list of all the times saved each file (JS, CSS, and HTML). Clicking on a sub-version changes the contents of the tab to the content of the subversion that was clicked.

:::tip Tip
To avoid losing any changes you currently have, be sure to save before jumping between save states. This way, you can always return to the most recently saved version in the **Changes** list.
:::

:::tip Tip
If you publish a new version of your widget, the **Changes** list resets and erases all save states. This is because the new editable version now matches the version you just published. Saving new changes adds new save states until the next time you publish.
:::

You can make use of Liquid in the Javascript, CSS, and HTML tabs in the widget builder. For more information check [the associated Liquid documentation](/en/platform/channels/liquid-markup.html).

The Properties on the right contains the following fields:

- **Name**: Use this field to update the name of your widget.
- **Tags**: Use this field to add tags to your widget. Tagging a widget makes it easier to search and filter. As your digital channels scale in size and complexity, good tagging helps keep your channel management well organized.
- **Pages using this widget**: You will see a list of pages that are using this widget. While viewing pages in this listing, you will not be able to download or archive the widget.

:::warning Warning
If you delete a widget from a page and publish, you will still see that page in this listing since the widget is still referenced in the backups of that page. From version 9.1.10 onwards, you can unpublish any published widget, even if it is in use. Active references on pages will become inactive, so you will not see the widget on the site if you unpublished it. Also, you will be able to archive any unpublished widget, so if there are still references on some pages of the widget you want to archive, they will be removed when you archive the widget.
:::

## Create a Widget
To create a new Widget and have a _micro frontend_ for your sites and posts, follow these steps:
1. From the Modyo Platform main menu, expand Channels, and click your site.
1. Click Widgets.
1. Click the **+ New Widget** button.
1. Enter the name of your widget and click **Create**.
1. Customize your widget using HTML, CSS, JavaScript, or Liquid.
1. Once finished, click **Publish**.

## Widget variables

In the variables tab you can see the list of variables created in the widget, and their respective actions for:

* **Copy** the liquid code to use that variable.
* **Edit** the variable
* **Delete** the variable.

Next to the name of each variable you will see an "overwritten" indicator if the variable also exists at the account or site level in the [global variables](/en/platform/core/key-concepts.html#global-variables).

When modifying a variable, you can choose the name and default value that the variable will take in the widget. In addition, you can decide if you want to make a list of values available so that when you instantiate the widget on a page, you can choose from these different values.

When you use the list of possible values, you must leave each value on a new line, and leave a `*` in front of the value you want to be taken as the default.

When you instantiate the widget on a page, you will see that now all variables being used (whether account, site, or widget) will be listed as "disabled" with their default value. If you want to overwrite the value of a particular variable for that instance of the widget on that page, you must select the checkbox to the left of the variable and change the value it takes.

:::warning Warning
Adding the widget on a page will list all the variables that that widget is using, so if you don't see any of the variables that are defined in the widget, chances are that the variable in the widget code is not being used.
:::

## Synchronous and asynchronous loading

:::warning Warning
This is an experimental feature and it may be subject to changes.
:::

You can decide whether you want to load your widgets synchronously, that is, have your widget's HTML, CSS, and JavaScript code loaded along with the rest of the page from the server, or load asynchronously, so all static content on the page will load and once the main document is loaded, the content of your widget will be loaded using JavaScript. By default, all widgets are loaded asynchronously.

To change the way each widget loads, go to the edit view of the page containing the widget, select the widget and check or uncheck the "Sync loading" option.

:::warning Warning
Keep in mind that using very heavy widgets synchronously can be the cause of bad performance in your pages, you should carefully decide which widgets will load synchronously and which ones will load asynchronously.
:::