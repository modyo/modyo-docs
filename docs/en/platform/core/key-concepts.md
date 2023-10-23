---
search: true
---

# Key concepts

## Team Review

Team Review is a tool that allows you to control the process of publishing content in Modyo. When enabled, each item must go through review stages before enabling the publishing process.

Team Review adds a level of oversight and collaboration between the content editor and a team of reviewers. This tool is configured individually for each Site and Space.


### Feature

When an editor or developer considers that the item they are working on is ready, they can send it for review.

This task can be performed by users enabled by default or by a team selected by the editor.

These reviewers are responsible for approving or rejecting the item, and determining if it is ready for publication.

Each step of this process takes the item through different states, which are recorded in a history for subsequent auditing.

### Configuration

To activate the team review, follow these steps:

1. From the side menu in Modyo Platform, select a Space or Site.
2. Expand **Space/Site Settings** and select **Team Review**.
3. Click **Enable team review**.

The available options are:

- **Enable Team Review**: Enables or disables Team Review in that context (site or space).
- **Number of Approvals**: Determines the number of users required to approve the item before it is ready for publication. Once the required number of approvals is reached, the item's status will change from “Awaiting Review” to “Approved”.
- **Restrict the selection of reviewers**: By default, any user with the necessary permissions can approve items awaiting review. However, by enabling this option, only the reviewers selected by the editor will be able to carry out the approval.

:::tip Tip
While approval is limited, any user with permissions can comment on the item.
:::

- **Force review**: This option allows you to select a list of users, from which at least one approval is required for the item to transition to the "Approved" state. This is independent of the number of approvals configured earlier. Even if an item has the required number of approvals, it will remain in the “Awaiting Approval” state if no user on the list has approved it.

- **Require all**: This option extends the previous restrictions to all selected users. In this case, approval will be required from all users on the list before the item can change to “Approved” status.

:::warning Warning
When you make changes to the team review settings, items that were already waiting for revision will still be governed by the rules before the changes.

For those items to adjust to the new configuration, they need to be rejected and sent again for review.
:::

### Roles and permissions

There are three levels of roles that allow users to perform different actions in the review process:

- High: Administrator (site or space)
- Medium: Reviewer (site) or Editor (space)
- Under: Developer (site) or Writer (space)

Users with the lowest role can submit for review and comment on items that are in that state.

Users with the intermediate role, in addition to the above, can approve the items under review and, once they are approved, publish them through the team review flow.

Users with the highest level, in addition to performing all of the above actions, can bypass the review flow and use the “Force Approval” action to publish an item, without complying with the restrictions of team review.

:::warning Warning
Site or space administrators always have the ability to skip the team review flow.

For them, the “Submit for Review” and “Review” buttons have an option in the drop-down menu called “Force Approval”, that allows them to see the item in publication view.

This option exists because there are times when you need to publish quickly, so you should be cautious when assigning roles for your spaces or sites.
:::
### My Tasks

The My Tasks section in Modyo gives you an overview of all the items that need your attention. It allows you to access information about the type of item, its author and when it was last updated.
Once an item has been marked for review, the assigned user can review and approve it in the My Tasks section.

To view and review all the tasks assigned to you, follow these steps:
1. Go to Home.
2. Click on My Tasks.
3. Select the item you want to review.

### About the interface

When the team review option is activated and the changes are saved, the main green button **Submit for Review** is displayed.

When submitting for review, the bar changes status to indicate if conditions are missing or if you don't have sufficient permissions.

When you click on it, the right side section will indicate the requirements for publishing the item.

If a reviewer's review is required, `(required)` will appear next to their name in the list of reviewers.

To the right of each reviewer is the status of their revision. A yellow circle is shown if they have not finished their review, and a green check if they have approved the item.

All users who have access to the item's editing view will see an **Approve button** below the list of reviewers.

Users with the necessary permissions can click the **Approve button** to approve the item. Those who don't have the permissions will see the button disabled.

When the item is approved, the user's approval is recorded and a green check is displayed next to their name in the list of reviewers.

By enabling team review, in the item's action bar, to the left of the main green button and to the right of the differences button, you can find the option to open the item's activity tab.

When you open this tab, a chronological list of the actions performed on the item is displayed, with the option to view the details of each action. At the bottom of the tab, there is the option to leave a comment.

When a team member has left a comment or an action is performed on the item, a notification is sent to both the person who sent the item for revision, and the users who are on the list of reviewers.

## Joint Review and Publication

On the review and joint publication screen, you can see all the pending changes to be published on your site. You have the option to see what changed by clicking on the **View** button.

### Joint Publication

To make a joint publication on your site, follow these steps:

1. In the Modyo Platform main menu, expand **Channels**, and click on **Sites**.
1. Click on your site.
1. On the Summary screen, click **Publish**.
1. Here you can see all the pending changes. Select everything you want to publish and click **Publish**.

:::tip Tip
If you click Publish on a specific article (for example, publish a page), the Review and Publish window will open with the selected item to review the pending changes.
:::


## Versions

As a backup mechanism, Modyo automatically generates and stores different versions of an item each time it is published, these versions can be recovered if needed.

This system is available for Widgets, Pages, Navigation, Templates, and Spaces.

### Resource Versions

#### Editable

The Editable version retains the changes made to the item since its last publication or since its creation, if it has never been published.
This version is the one that goes through the team review process when it is enabled. At the time of publication, the “Editable” and “Published” versions contain the same content.

#### Published

This version stores the visible content on the site and is available to all users.
In this state, internal resources such as Widgets and Templates can now be used when creating any site or page.
The published version does not necessarily have the same content as the editable version, except at the exact time of publication, as it may contain changes that are still under testing or review.

#### Backups

Backups are previously published versions of the items. Every time an item is published, Modyo saves the previously published version as a backup.


If you want to review a specific version of an item, you can access the “Differences between versions” to see the changes that have been made, and revert them if necessary.

:::warning Attention
By default, Modyo saves the last 20 published versions `(MAX_BACKUPS)` of each item. When you make the twenty-first publication, the backup of the first publication of the item will be deleted.

This value can be modified using environment variables and is applicable to all accounts in this environment.
:::

#### Scheduled

When you schedule a publication, the editable version goes into a scheduled state. When the time comes for publication, that scheduled version replaces the currently published version. This way, you can schedule a change in the future for the items and continue working on the editable version.

:::warning Attention
Modyo only allows for one scheduled version of each item. If you schedule a second modification to the item, you will overwrite the previous scheduling.
:::

In addition to scheduling the publication, you can also schedule unpublishing. When the time comes, the currently published version will become a backup, leaving the item in question without a published version.

:::warning Attention
When the scheduled actions are executed, Modyo may take a few minutes to complete them. Modyo will send you an email notification when the action is complete.
:::

There are elements (home, navigation, and templates) that cannot be unpublished. If you schedule an unpublish in conjunction with other elements, it will have no effect on these specific items.

#### Approved

This state appears when team review is enabled, it signifies  that an item in this state is ready to be published. Any changes made to an item in this state will bring the item to an editable state. It must go through the review process again in order to be published.

## Reversing a Change

Within versioning, there are two actions that allow you to interact with the backups: reset and rollback. By default, the difference modal shows the published version on the left, and the editable version on the right.

You can change which versions to compare by changing the values in the versions selector at the top of the modal.

Follow these steps to revert to a version published in a Post:

1. From Modyo Platform, expand Content and select Spaces.
1. Select your Space and then click on the Entry you want to version.
1. Click on **Differences**.
1. In the modal that appears, select the version you want to rollback to, and then click on **Rollback to this version**.

When you apply any of the actions, the version selected on the left is always used, so that if you reset it, the version on the left will be brought to the editable version. If you perform a rollback, the version on the left will be used and applied to the published version.

:::tip Tip
Versioning can be done in the following modules:
- In Content: **Entries**.
- In Channels: **Pages**, **Navigation**, **Templates**, and **Widgets**.
:::

#### Reset

In this case, the backup takes the place of the editable version; therefore, all existing changes will be lost, and you can continue working on potential changes to that version to republish it.

#### Rollback

In this case, the backup is returned directly to the **published** version of the element, without affecting the editable version.

This is useful when something was published by mistake, and it is necessary to revert to one of the stable versions. Allowing the resolution of problems that the version with errors may have had.

:::danger Danger
Because this is a potentially dangerous action, only site or space administrators have permission to perform this action.
:::

## Locks

Locks is a Modyo feature that allows you to modify a resource securely, avoiding concurrency problems that may occur when another user is working on it simultaneously. This way, Modyo prevents loss of work, or overwrite of documents.

### What elements do Locks use?

Locks is mainly used in [Content] (/en/platform/content/) and [Channels] (/en/platform/channels/), but it can also be used in other sections where elements such as Configurations and [Customers] (/en/platform/customers/) are edited.

### How to use Locks?

Locks are deployed in different ways within the platform. In [Content](/en/platform/content/) and [Channels](/en/platform/channels/), multiple users can access a resource, with only one user able to edit and save those changes, while others will only see the latest version saved on the platform.

If a second person tries to make a change, a message will appear indicating that the item already has changes and that what they are trying to modify is obsolete.

In other sections, such as [Customers](/en/platform/customers/) and Settings, Locks will not allow users to view resources simultaneously. Therefore, if an item is being edited, another user will not be able to access the work view.

In this case, only an Administrator will be able to take control, activating for himself the edition, and discarding the unsaved changes made by the user working on the item.


:::warning Take control

If an Administrator wants to take control of a view, they must click on the item in use and, in the next screen, click on the **Take Control** button.

When the Administrator takes control, the user who is using the resource receives a message preventing them from continuing to make changes. Therefore, any changes that the user is making must be saved and backed up offline.

After taking control, the Administrator has only two hours to make unsaved changes. After that time, the resource is once again released, and can be taken by any other user.
:::

## Preview mode

The preview mode allows you to preview changes made to publishable elements such as posts, pages, navigation, widgets or templates. Access to this mode is at the top right of the site. You can recognize that you are in preview mode, when you see the bar at the top of the site.

The preview bar contains the following interactive elements:

* **Template selector**: Allows you to switch between the published and editable versions of the elements belonging to the template builder.
* **Content selector**: Allows you to switch between the published and editable version of the elements belonging to the content application, and that are being used on the site through the Liquid Content SDK.
* **Navigation selector**: Allows you to change between published and editable versions of items in the navigation builder.
* **Page selector**: Allows you to switch between the published and editable version of the elements belonging to the page builder.
* **Content View Selector**: Allows you to switch between the published and editable version of the content entry being previewed in custom content views. This view doesn't directly use the Liquid Content SDK, therefore, the content in these views won't be affected by the Content SDK selector.
* **Widget selector**: If you are previewing pages that contain custom widgets, a list of the widgets present on the page will be displayed, allowing you to select whether you want to view the editable or published version of each of them. Once the selection is made, you must click on the “refresh” button for the widget settings to take effect.
* **Minimize Tab**: Allows you to hide the preview bar to avoid interference with the elements located at the top of the site. Once minimized, the tab will still be visible to restore the bar in preview mode.
* **Edit item**: When you click, you access the editing view of the element being viewed, whether it is a post, a page, a widget, or a default site template.
* **Share link**: Allows you to copy a link that can be shared with other users. When you open the link, you directly access the preview mode with the settings you had when copying the link. To access the preview mode, you must be logged in to the administrator account.
* **Exit preview mode**: Closes preview mode, removing the bar and keeping the tab at the current URL of the site.

:::warning Warning
Changing the content selector in the preview bar will have no effect on the content you're using via the JavaScript SDK or Content API. It will only have an effect on content that is used through Liquid SDK.
:::

## Global variables

Modyo offers the functionality to define global variables, which can be used everywhere Liquid is used. This allows you to share, for example, a _snippet_ of code between different sites.

:::tip Tip
You can use plain text, HTML, JavaScript, and CSS inside global variables; however, you can't use Liquid code inside them. You should keep in mind that the content has a maximum of 65,535 characters.

To get the value of the variable anywhere that accepts Liquid markup (inputs, widgets, templates), use: <span v-pre>`{{vars.Name}}`</span>
:::

### Create a global variable

To create a global variable, follow these steps:

1. From the main side menu, click on **Settings**, then select **Global variables**.
1. Here you can see the list of all global variables in the account, their general information, and a button to copy their code in Liquid. Click **+ New Variable**.
1. Fill in the **Name** and **Value** of the variable.
1. Click **Save**.

Global variables can be used to add values for different languages. If required, you also have the option of overwriting the values of global variables in sites and widgets, using the [site configuration] (/en/platform/channels/sites.html #variables -of-site) and [custom widgets] (/en/platform/channels/widgets.html #variables -del-widget) sections, respectively.

:::warning Warning
When using global variables, the variables defined at the lowest level will always take precedence.  First, the variables defined in the widget will be considered, followed by the ones defined at the site level, and finally, the variables defined at the account level. Therefore, you must be careful when defining variables in widgets or in the site with the same name as the account-level variables.
:::

:::danger Danger
Global variables don't have a publishing, versioning, or team review workflow. Only account and site administrators can modify them, so you should consider that when you make changes to these values, they will be immediately reflected everywhere they are being used.
This does not apply to variables defined in widgets because widgets and pages do have a publishing flow.
:::
