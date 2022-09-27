---
search: true
---

# Key concepts

## Team Review

Team Review is a tool that allows you to control the process of publishing content in Modyo. When enabled, each item must go through review stages before enabling the publishing process.

This adds a level of oversight and collaboration between the content editor and a team of reviewers. This tool is configured individually for each Site and Space.

### Feature

When an editor or developer feels that the item he is working on is ready, he can submit it for review.

This task can be performed by users enabled by default or by a team chosen by the editor.

They will be responsible for approving or rejecting the item, and will ultimately determine whether it is ready to be published.

Each step of this process takes the item through different states, which are recorded in a history for later audit.

<img src="/assets/img/platform/core/team-review.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

### Configuration

To activate the team review, follow these steps:

1. From the side menu in Modyo Platform, select a space or site.
2. Expand **Space/Site Settings** and select **Computer Review**.
3. Click on **Enable team review**.

<img src="/assets/img/platform/teamreviewsettings.jpg" width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

The available options are:

- **Enable Team Review**: Enables or disables Team Review within the current site or space.
- **Number of approvals**: Determines how many team members must approve the item before publishing (this changes the status from "In review" to "Approved").
- **Restrict the selection of reviewers**: By default, any user with the necessary permissions will be able to approve the items that are waiting for revision. By enabling this option, only those chosen by the editor will be able to do so.

:::tip Tip
While approval is limited, any user with permissions can comment on the item.
:::

- **Force review**: This option allows you to select a list of users, from which at least one approval is required for the item to be moved to the "Approved" status. This is independent of the number of approvals previously configured, i.e. even if an item has the required number of approvals, it will still be in "Waiting for approval" status if no user in the list has approved it.

- **Require all**: This option extends the previous restriction to all selected users.

:::warning Warning
When you make changes to the team review settings, items that were already waiting for revision will still be governed by the rules before the changes.

In order for these items to be taken into account in the new configuration, they need to be rejected and sent again for review.
:::

### Roles and permissions

There are three levels of roles that allow users to perform different actions in the review process:

- High: Administrator (site or space)
- Medium: Reviewer (site) or Editor (space)
- Under: Developer (site) or Writer (space)

Users with the lowest role, can submit items for review and comment on items that are in that state.

Users with the intermediate role, in addition to the above, can approve the items under review and, once they are approved, publish them through the team review flow.

Users with the highest level, in addition to performing all of the above, can skip the review flow and make use of the "Force approve" to publish an item without the restrictions of team review.

:::warning Warning
Site or space administrators always have the ability to skip the team review flow.

For them, the "Submit for review" and "Review" buttons have an option within the dropdown to "Force approve" which allows you to see the element in the published view.

This option exists because there are times when you need to publish quickly, so you should be cautious when assigning roles for your spaces or sites.
:::

### About the interface

When the team review option is enabled, and after saving the changes, you will see the green **Send to review** button as the main action.

<img src="/assets/img/platform/send-to-review-bar.jpg" width="350px" style=" border: 1px solid #EEE;" />

When you submit for review, the bar will change status to show that conditions are missing or you do not have sufficient permission.

When you click on it, you will be able to see the requirements to publish the item in the right side section.

If there is a required reviewer, `(required)` will appear next to his name in the list of reviewers.

<img src="/assets/img/platform/box-reviewers.jpg" width="500px" style="border: 1px solid #EEE;" />

To the right of each reviewer you can find the status of their revision, showing a yellow circle if they have not finished their review, and a green check if they have approved the item.

Anyone who can access the edit view of the item will see an **Approve** button under the list of reviewers.

Those who have the necessary permission will see it active and can click it to approve the item. Those who do not have permission, will see the button disabled.

When an item is approved, the approval of that user will be registered, showing a green check to the right of his name in the list of reviewers.

When team review is enabled, you will be able to see an icon ( <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29H12m1-6v3.08L16.08 17H21V7H7v10h6M3 15H1V3a2 2 0 0 1 2-2h16v2H3v12m6-6h10v2H9V9m0 4h8v2H9v-2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg> ) in the item's action bar, to the left of the main green button and to the right of the differences button, which allows you to open the item's activity tab.

When this tab is opened, a chronological list of all the actions that have been carried out on the item will be displayed, with the option to see the detail of each action. You can leave comments at the bottom of the tab.

When a team member has left a comment or an action is performed on the item, a notification is sent to both the person who sent the item for revision and the users who are on the list of reviewers.

## Joint Review and Publication

<img src="/assets/img/platform/core/review-joint-publication.png" width="800px" style="border: 1px solid #EEE;" alt="Modal de diferencias"/>

On the joint review and publication screen, you can see all the pending changes to be published on your site. You have the option to see what exactly changed by clicking on the **View** button. 

### Publish together

To make a joint publication on your site, follow these steps:

1. In the Modyo Platform main menu, expand **Channels**, and click **Sites**.
1. Click on your site. 
1. On the Summary screen, click **Publish**.
1. Here you can see all the pending changes, select everything you want to publish and click **Publish**.

:::tip Tip
If you click on Publish on a particular article (e.g. publish a page), the Review and Publish window will open with this article selected to see the pending changes.
:::


## Versions

As a backup mechanism, Modyo automatically generates and stores different versions of an item each time it is published, which can later be retrieved if necessary.

This system is available for Widgets, Pages, Navigation, Templates, and Spaces.

### Resource Versions

#### Editable

The "Editable" version stores changes made to the item since its last publication or its creation if it has never been published.

This version is the one that goes through the team review process when enabled, and at the time of publication, the "Editable" and "Published" versions have the same content.

#### Published

This version stores the content that is visible on the site and is freely available to any user.

In this case, internal resources such as Widgets and Templates can already be used in the creation of any site or page.

The published version does not necessarily have the same content as the editable version (except at the time of publication), as it may contain changes that are in the process of being tested or reviewed.

#### Backups

Backups are previously published versions of the items. That is, every time we publish an item, Modyo saves the previously published version as a backup.

If you want to review a particular version of an item, you can go to the "Differences between versions" section, so you can see the changes that have been made and revert them when necessary.

:::warning Warning
By default, Modyo saves the last 20 published versions (`MAX_BACKUPS`) of each item, so by making the twenty-first publication, you will be deleting the backup from the first publication of the item.

This value can be modified using environment variables and is common for all accounts in that environment.
:::

#### Scheduled

When you decide to schedule a publication, the editable version goes into a scheduled state, and and when it is time to publish, that scheduled version will take the place of the version that is published at that time. This way, you can schedule a future change for items, and continue working on the editable version.

:::warning Warning
Modyo only allows you to have one scheduled version of each element, so if you schedule a second modification of the item, you will be overwriting the previous scheduled version.
:::

In the same way you can schedule a publication, you can schedule to unpublish an item. When the time comes, the published version will become a backup, leaving the corresponding item without a published version.

:::warning Warning
When the time comes to execute the scheduled actions, it may take a couple of minutes for Modyo to perform the action. We will send you an email when the action is complete.
:::

There are elements (home, navigation, and templates) that cannot be unpublished. If you schedule an unpublish in conjunction with other elements, it will have no effect on these specific items.

#### Approved

This status appears when team review is enabled and it means that an item in this status is ready to be published. Any changes made to an item in this state will bring the item to an editable state and must go through the review process again in order to be published.

## Reversing a Change

Within versioning, you have two actions that allow you to interact with backups, reset and rollback. By default, the difference mode shows the published version on the left, and the editable version on the right.

You can change which versions to compare by changing the values in the version selectors at the top of the pop-up window.

<img src="/assets/img/platform/differences.jpg" width="800px" style="border: 1px solid #EEE;" alt="Modal de diferencias"/>

Follow these steps to revert to a version published in a Post:

1. From Modyo Platform, expand Content and select Spaces.
1. Select your Space and then click on the Entry you want to version.
1. Click on **Differences**.
1. In the mode that appears, select the version you want to roll back and then click **Rollback to this version**.

When you apply any of the actions, the version selected on the left is always taken, so that if you reset it, the version on the left will be brought to the editable version, and if you roll back, the version on the left will be brought to the published version.

:: :tip Tip
Versioning can be done in the following modules:
- In Content: **Entries**.
- In Channels: **Pages**, **Navigation**, **Templates**, and **Widgets**.
:::

#### Reset

In this case, the backup takes the place of the editable version, so all existing changes will be lost, so you can continue working on potential changes to that version to republish it.

#### Rollback

In this case, the backup is returned directly to the **published** version of the element, without touching the editable version.

This is useful when something was published by mistake and it is necessary to return to one of the stable versions, so that you can work on resolving the problems that the version with errors may have had.

:::danger Danger
Since this is a potentially dangerous action, only site or space administrators have permission to execute this action.
:::

## Locks

Locks is a feature in Modyo that allows you to modify a resource safely, without having concurrency problems that can occur when another user is working on the same item simultaneously, thus avoiding job loss or document overwriting.

<img src="/assets/img/platform/locks.jpg" style="border: 1px solid #EEE;" />

### What elements do Locks use?

Locks is mostly used in [Content](/en/platform/content/) and [Channels](/en/platform/channels/), but it can also be used in other sections where elements are edited such as Settings and [Customers](/en/platform/customers/).

### How to use Locks?

Locks are deployed in different ways within the platform. In [Content](/en/platform/content/) and [Channels](/en/platform/channels/), multiple users can access a resource, with only one user able to edit and save those changes, while others will only see the latest version saved on the platform.

If a second person tries to make a change, a message will appear indicating that the item already has changes and that what they are trying to modify is obsolete.

In other sections, such as [Customers](/en/platform/customers/) and Settings, Locks will not allow users to view resources simultaneously. So, if an item is being edited, another user will not be able to access the work view.

In this case, only an Administrator will be able to take control, activating for himself the edition and discarding the unsaved changes made by the user working on the item.


:::warning Take control

If an Administrator wants to take control of a view, he must click on the item in use and, in the next screen, click on the **Take Control** button.

<img src="/assets/img/platform/lock-forms.jpg" style="border: 1px solid #EEE;" />

When the Administrator takes control, the user who is using the resource will receive a message that will prevent him from making any further changes. Any changes that are being made must be saved and backed up offline.

After taking control, the Administrator will only have two hours to make unsaved changes. After that time, the resource will be released and can be taken over by any other user.
:::

## Preview mode

Preview mode allows you to preview the result of changes to publishable items such as Posts, Pages, Navigation, Widgets or Templates; accessible from the top right with the icon <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>. You can know that you are in preview mode, when you see the bar at the top of the site.

![Preview Bar](/assets/img/platform/preview-bar.png)

The elements you can interact with in the preview bar are:

* **Template selector**: Allows you to switch between the published and editable versions of the elements belonging to the template builder.
* **Content selector**: Allows you to switch between published and editable versions of items in the content application that are being used on the site through the Liquid Content SDK.
* **Navigation selector**: Allows you to change between published and editable versions of items in the navigation builder.
* **Page selector**: Allows you to switch between published and editable versions of items in the page builder.
* **Content view selector**: This selector allows you to switch between the published and editable versions of the content entry being previewed in the custom content views. This view does not directly use the Liquid Content SDK, so the content in these views will not be affected by the Content SDK selector.
* **Widget Selector**: If you're previewing pages containing custom widgets, you'll find a list of widgets that appear on the page and you can select whether you want to view the editable or published version of each widget. Once you've completed the selection, click the “refresh” button to make the widget settings take effect.
* **Minimize tab**: Allows you to hide the preview bar so that it does not interfere with the elements at the top of the site. Once minimized, the tab will remain visible so you can restore the preview mode bar.
* **Edit Item**: Clicking this will take you to the edit view of the item you're viewing, whether it's a post, a page, a widget, or a default site template.
* **Share link**: Allows you to copy a link that you can share and whoever opens it will go directly to preview mode with the settings used at the time of copying the link. To be able to see the preview mode, you only need to be logged in as the account's admin.
* **Exit Preview Mode**: Close the preview mode, removing the bar and leaving the tab at the current URL of the site.

:::warning Warning
Changing the content selector of the preview bar will have no effect on the content you're using via the JavaScript SDK or Content API. It will only have an effect on content that is used through Liquid SDK.
:::

## Global variables

Modyo allows you to define global variables that you can use in all the sites where you have Liquid. This way you can, for example, share a code _snippet_ between sites.

:::tip Tip
You can use plain text, HTML, JavaScript, and CSS within global variables, however you can't use Liquid code inside them. Please note that content has a maximum of 65,535 characters.

To get the value of the variable anywhere that accepts Liquid markup (inputs, widgets, templates), use: <span v-pre> `{{vars.Name}}` </span> 
:::

### Create a global variable

To create a global variable, follow these steps:

1. From the main side menu, click on **Settings**, then select **Global variables**.
1. Here you can see the list of all global variables in the account, their general information, and a button to copy their code in Liquid. Click **+ New Variable**.
1. Fill in the **Name** and **Value** of the variable.
1. Click **Save**.

Global variables can be used to add values for different languages. If required, you also have the option to overwrite global variable values in sites and widgets, using the [site settings](/en/platform/channels/sites.html#site-variables) and [custom widgets](/en/platform/channels/widgets.html#widget-variables) sections, respectively.

:::warning Warning
When using global variables, the variables defined at the deepest level will always be taken if they exist, with variables defined in the widget first, then those defined in the site, and finally the variables defined at the account level, be careful when defining variables in widgets or in the site with the same name as the variables in the account.
:::

:::danger Danger
Global variables do not have a publishing, versioning, or team review workflow. Only account and site administrators can modify them, be careful when making changes to these settings, as they will be immediately reflected wherever they are being used.
This does not apply to variables defined in widgets because widgets and pages do have a publishing flow.
:::
