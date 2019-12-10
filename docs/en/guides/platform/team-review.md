---
search: true
---

# Team review

## Introduction

The team review (or Team Review) is a tool that allows you to collaboratively control the elements that are published in Modyo. This tool can be activated both at the site level, and at the space level, allowing you to use different configurations and restriction levels, depending on how strict you want to be in each case.

To activate the tool, you must go to the configuration of the site or space, and click on the "Team review" option, select the first option "Enable team review" and then save the changes.

Once the team review is activated, you will notice that when you save changes to an item, instead of the **Publish** button, it will change to the **Submit to review** button. By submitting an item for review, it will remain in a state where you can continue to modify it, but you can also assign reviewers, who can approve, reject and comment on the item.

Under the "Under review" status, every action taken on the item will trigger a notification to everyone involved in the review process (who sent it for review and all assigned reviewers), in order to keep your team aware of the changes and comments of the element.

Once the requirements for the item to be published are met, it automatically changes to the "Approved" state, and those who have the necessary permissions can publish the item.

### Configuration

<img src="/assets/img/platform/teamreviewsettings.jpg" width="500px" style="margin-top: 40px; border: 1px solid #EEE;"/>

Within the configuration of the team review, you will find different options:

- **Enable team review**: It is the option that completely enables or disables team review in that context (site or space)
- **Number of approvals**: Determines how many approvals (checks) are necessary for an item to automatically go from "Waiting for revision" to "Approved". Thus, if you select 3, 3 people with permits will be required to give their approval so that this item can be published.
::: tip Tip
 By default, any user who has the necessary permissions can approve and comment on the items that are awaiting review. When a user who is not assigned as a reviewer approves an item, he automatically becomes a reviewer of the item.
:::
- **Restrict the selection of reviewers**: This option prevents any user with permissions from approving the item, limiting the selection and addition of reviewers to whom the item is submitted for review.
::: tip Tip
Although the selection of reviewers is limited to those who submit for review, all users with permissions may continue to comment on the item under review, but may not approve the item.
:::
- **Force review**: This option enables a user selector that allows you to force the addition of certain reviewers to the elements of the context, so that in each review, all users associated with the force will be notified of the comments and item changes.
::: tip Tip
Although the first restriction with the number of approvals is met, if none of the users forced to review has given their approval, then the item will not go to the "Approved" state, so it cannot be published.
:::
- **Require all**: This option requires that, at a minimum, all users who are added as forced reviewers have to give their approval for the item to go to "Approved" status and then be published.

::: warning Warning
Remember to click on the **Save** button at the top right every time you make changes to the team review settings, otherwise the changes will not take effect.
:::

::: warning Warning
When you make changes to the team's review settings, the items that were already waiting for review will continue to be governed by the rules prior to the changes. In order for these elements to take into account the new configuration of the team review, it is necessary that they be rejected and sent back for review.
:::

### Roles and permissions

There are three levels of permissions in the contexts in which team review can be enabled:

- High (Site and space administrator)
- Medium (Site Reviewer and Space Editor)
- Low (Developer on sites and Writer on spaces)

Users with the lowest role, apart from the permissions associated with the context, can submit for review and comment on the elements that are in this state.

Users with the intermediate role, in addition to the above, can approve the elements under review and once they are approved, they can publish them through the team review flow.

Users with the high permission level, in addition to being able to do the rest of the actions, can skip the review flow and make use of the "Force post" action to immediately publish an item.

::: warning Warning
Site or space administrators always have the ability to skip the review flow as a team. For them, the "Submit for review" and "Review" buttons have an option within the dropdown for "Force post." This option exists because there are times when you need to publish quickly, so you must be cautious when assigning roles for your spaces or sites.
:::

### About the interface

When the team review option is activated, and after saving the changes, you will see the green button **Send to review** as the main action.

<img src="/assets/img/platform/send-to-review-bar.jpg" width="350px" style="border: 1px solid #EEE;"/>

At the time of sending for review the bar will change status:

<img src="/assets/img/platform/missing-conditions-team-review.jpg" width="350px" style="border: 1px solid #EEE;"/>

When you click, you will see that a new section will appear on the right side section of the builder, indicating the necessary requirements to publish the element. If you have a required reviewer, `(required)` will appear next to your name in the list of reviewers.

<img src="/assets/img/platform/box-reviewers.jpg" width="500px" style="border: 1px solid #EEE;"/>

To the right of each reviewer, the status of your review will appear, showing a yellow circle if you have not done your review, and a green check if you have approved the item.

Everyone who can access the item edit view will see an **Approve** button under the list of reviewers, and those who have permission to do so will see it active and can click to approve the item. In addition, users who do not have such permission will see the button disabled.

Upon approval of the item, the approval by that user will be registered, showing a green check to the right of his name in the list of reviewers.

When team review is enabled, in the item's action bar, to the left of the green main button and to the right of the difference button, an icon will appear (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 23a1 1 0 01-1-1v-3H7a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-4.1l-3.7 3.71a1 1 0 01-.7.29H12zm1-6v3.08L16.08 17H21V7H7v10h6zM3 15H1V3a2 2 0 012-2h16v2H3v12zm6-6h10v2H9V9zm0 4h8v2H9v-2z" fill="#626262"/></svg>) to open the element's activity tab. When you open it, a chronological list of the actions that have been performed on the element will be displayed, with the option to see the detail of the action, and at the bottom of the tab, there will be the option to leave a message.

When a message or comment is left on an item, who sent for review and all users that are on the list of reviewers will be notified about the comment and/or modification of the item.

## Versioned

Versioning is an automatic way for Modyo to ensure the endorsement of resources against any changes made from the same website.

In simple words, if an improper change is made by mistake, it is possible to reverse it through the platform.

This system is available for use in Widgets, Pages, Navigation, Templates and Content.

### Resource Versions

#### Editable

When a resource is in the process of being created, it is in the "Editable" state, and modifications can be made until it is confirmed that it is ready for review and publication.

In addition, it is possible to review previews of the changes made before being published.

#### Published

The published resource is one that is already visible on the site and is freely available to any user. In this case, internal resources such as Widgets and Templates can already be used within the creation of any site or page.

The published resources do not necessarily have the same code as the editable ones, since the latter can contain changes that are in the process of being tested or previewed.

### Backups

Backups are the versions of the items that have been previously saved. That is, every time we publish an item, Modyo saves the previously published version as a backup.

If you want to review a particular version of a resource, you can go to the "Differences between versions" of each element, and thus be able to see the changes that have been made and revert them when necessary.

::: warning Warning
By default, Modyo saves the last 20 versions (`MAX_BACKUPS`) published of each item, so by making the twenty-first publication, you will be deleting the backup of the first publication of the item. This value can be modified using environment variables and is common for all accounts in that environment.
:::

### Actions for versioning

Within versioning, you have two actions that allow you to interact with backups. Both actions are available in the modality of differences.

![Difference mode](/assets/img/platform/differences.png)

By default the difference modal shows the version published on the left, and the editable version on the right. You can change which versions to compare by changing the selected values in the version selectors at the top of the modal.

When any of the actions are applied, the selected version is always taken to the left, so that if it is restored, the selected version will be taken to the left to the editable version, and if rollback is made, the selected version will be taken to the left of the published version.

#### Reset

In this case, the backup will be copied to the editable version, so we will lose all the changes that were made later, and so we can continue working on potential changes to that version to publish it again.

#### Rollback

In this case, the backup will be copied directly to the published version of the item, without touching the editable version. This is especially useful when something was published by mistake, and it is necessary to return to some of the stable versions quickly, while continuing to work on solving the problems that the version with errors may have had.

::: danger Danger
Since this is a potentially dangerous action, only Site or Space administrators have permission to execute this action.
:::

## Locks

Locks is a Modyo functionality that allows you to modify a resource safely, without having concurrence problems that may occur when another user is working on it simultaneously, thus avoiding job loss or overwriting of documents.

<img src="/assets/img/platform/locks.jpg" style="border: 1px solid #EEE;"/>

### What does Locks use?

Locks are mostly used in [Contents](/guides/content/) and [Channels](/guides/channels/), but can also be used in other sections where items such as Settings and [Customers](/guides/customers/).

### How to use Locks?

Locks are implemented in different ways within the platform. In [Contents](/guides/content/) and [Channels](/guides/channels/), multiple users can enter a resource, being only one who can edit and save those changes, while others will only see the latest version saved on the platform. If a second person tries to make a change, a message will appear indicating that the item already has changes and that what you are trying to modify is obsolete.

In other sections such as [Customers](/guides/customers/) and Settings, Locks will not allow simultaneous viewing of the resource, so if it is in edition, another user will not be able to enter the work view.

In this case, only an Administrator can take control, activating for himself the edition and discarding the unsaved advances of the user who is working on it.


::: warning Take control

If an Administrator wants to take control of a view, he must click on the item in use and on the next screen, click on the **Take Control** button.

<img src="/assets/img/platform/lock-forms.jpg" style="border: 1px solid #EEE;"/>

When the Administrator takes control, the user who is using the resource will receive a message that will prevent him from continuing to make further changes, so any changes that are being made must be saved and backed up offline.

After taking control, the Administrator will only have two hours to make changes without saving. After that time, the resource will be released again and can be taken by any other user.
:::
