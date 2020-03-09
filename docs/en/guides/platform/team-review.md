---
search: true
---

# Team Review

## Introduction

Team Review is a tool that allows you to control the process of publishing elements in Modyo, such as entries, widgets, pages, templates, and more. When activated, each element must go through review stages with selected team members before publishing. This allows a level of supervision and collaboration between the content editor and a team of reviewers.

When an editor or a developer considers that an element is ready, she can send it for review, which is a task performed by certain team members in a space or channel. These team members are responsible for approving (or rejecting) the element, which ultimately determines if the item can be published.

Each step of this process takes the element through different states (image), which are recorded for subsequent auditing.

[Image review stages]
 
This tool is available for sites (pages, navigation, widgets and templates) as well as spaces (entries). Configuration of the review rules is done independently for each site or space.

### Configuration

To configure Team Review, you must go to `Site/Space configuration > Team review`.

<img src="/assets/img/platform/teamreviewsettings.jpg" width="500px" style="margin-top: 40px; border: 1px solid #EEE;"/>

The available options are:

- **Enable Team Review**: Enable or disable Team Review within the current site or space.
- **Number of approvals**: Determines how many team members must approve the element before publishing (this changes the status from "In review" to "Approved").
- **Restrict the selection of reviewers**: By default, any user with the necessary permissions may approve the items that are awaiting review. By enabling this option, only those chosen by the editor may do so.
::: tip Tip
While approval is limited, any user with permissions can comment on the item.
:::
- **Force review**: This option allows you to select a list of users, of which at least one approval is required so that the item can go to the "Approved" state. This is independent of the number of approvals configured above, that is, even if an item has the necessary number of approvals, it will remain in the "Waiting for approval" status if no user on the list has approved it.
- **Require all**: This option extends the previous restriction to all selected users.

::: warning Warning
When you make changes to the team review settings, the items that were already waiting for review will continue to be governed by the rules prior to the changes. For these elements to take into account the new configuration, it is necessary that they be rejected and sent for review again.
:::

### Use (example)

### Roles and permissions

There are three levels of roles that allow users to perform different actions in the review process:

- High: Administrator (site or space)
- Medium: Reviewer (site) or Editor (space)
- Under: Developer (site) or Writer (space)

Users with the lowest role, can submit for review and comment on the elements that are in that state.

Users with the intermediate role, in addition to the above, can approve the elements under review and once they are approved, they can publish them through the team review flow.

Users with the highest level, in addition to performing all of the above, can skip the review flow and make use of the "Force post" action to immediately publish an item.

::: warning Warning
Site or space administrators always have the ability to skip the review flow as a team. For them, the "Submit for review" and "Review" buttons have an option within the dropdown for "Force post." This option exists because there are times when you need to publish quickly, so you must be cautious when assigning roles for your spaces or sites.
:::

### About the interface

When the team review option is activated, and after saving the changes, you will see the green button **Send to review** as the main action.

<img src="/assets/img/platform/send-to-review-bar.jpg" width="350px" style="border: 1px solid #EEE;"/>

At the time of sending for review the bar will change status:

<img src="/assets/img/platform/missing-conditions-team-review.jpg" width="350px" style="border: 1px solid #EEE;"/>

By clicking, you will see that the requirements to publish the element will be indicated in the right side section. If there is a required reviewer, `(required)` will appear next to your name in the list of reviewers.

<img src="/assets/img/platform/box-reviewers.jpg" width="500px" style="border: 1px solid #EEE;"/>

To the right of each reviewer, the status of your review will appear, showing a yellow circle if you have not done your review, and a green check if you have approved the item.

Everyone who can access the item edit view will see an "Approve" button under the list of reviewers. Those who have the necessary permission will see it active and can click to approve the item, those who do not have permission will see the button disabled.

Upon approval of the item, the approval of that user will be registered, showing a green check to the right of his name in the list of reviewers.

When team review is enabled, in the item's action bar, to the left of the green main button and to the right of the difference button, an icon will appear (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 23a1 1 0 01-1-1v-3H7a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-4.1l-3.7 3.71a1 1 0 01-.7.29H12zm1-6v3.08L16.08 17H21V7H7v10h6zM3 15H1V3a2 2 0 012-2h16v2H3v12zm6-6h10v2H9V9zm0 4h8v2H9v-2z" fill="#626262"/></svg>) to open the element's activity tab. When opened, a chronological list of the actions that have been performed on the element will be displayed, with the option to see the detail of the action, and at the bottom of the tab, there will be the option to leave a comment.

When a comment is left or any action is taken on the item, a notification is sent to both the person who sent it for review and the users who are on the list of reviewers.

## Versioned

As a backup mechanism, when publishing an item, Modyo automatically generates and maintains a number of versions that can later be retrieved if necessary.

This is useful when for some reason an undue change is made, there is the possibility of reversing it through the platform.

This system is available for Widgets, Pages, Navigation, Templates and Content.

### Resource Versions

#### Editable

This version keeps the changes made to the item since its last publication or since its creation if it has never been published. This is the version that goes through the team review process when activated, and just at the time of publication, the "Editable" and "Published" versions have the same content.

#### Published

This version saves the content visible on the site and is freely available to any user. In this case, internal resources such as Widgets and Templates can already be used in the creation of any site or page.

The published version does not necessarily have the same content as the editable one (except at the right time of publication), since the latter may contain changes that are in the process of being tested or reviewed.

### Backups

Backups are previously published versions of the elements. That is, every time we publish an item, Modyo saves the previously published version as a backup.

If you want to review a particular version of an item, you can go to the "Differences between versions", so you can see the changes that have been made and reverse them when necessary.

::: warning Warning
By default, Modyo saves the last 20 versions (`MAX_BACKUPS`) published of each item, so by making the twenty-first publication, you will be deleting the backup of the first publication of the item. This value can be modified using environment variables and is common for all accounts in that environment.
:::

### Actions for versioning

Within versioning, you have two actions that allow you to interact with backups. Both actions are available in the modality of differences.

![Difference mode](/assets/img/platform/differences.png)

By default the difference modal shows the version published on the left, and the editable version on the right. You can change which versions to compare by changing the values in the version selectors at the top of the modal.

When any of the actions are applied, the selected version is always taken to the left, so that if it is restored, the left version will be taken to the editable version, and if rollback is done, the version of the left to the published version.

#### Reset

In this case, the backup will be copied to the editable version, so we will lose all the changes that were made later, and so we can continue working on potential changes to that version to publish it again.

#### Rollback

In this case, the backup will be copied directly to the published version of the item, without touching the editable version. This is especially useful when something was published by mistake, and it is necessary to return to some of the stable versions quickly, while continuing to work on solving the problems that the version with errors may have had.

::: danger Danger
Since this is a potentially dangerous action, only site or space administrators have permission to execute this action.
:::

## Locks

Locks is a Modyo functionality that allows you to modify a resource safely, without having concurrence problems that may occur when another user is working on it simultaneously, thus avoiding job loss or overwriting of documents.

<img src="/assets/img/platform/locks.jpg" style="border: 1px solid #EEE;"/>

### What elements do Locks use?

Locks are mostly used in [Contents](/guides/content/) and [Channels](/guides/channels/), but can also be used in other sections where items such as Settings and [Customers](/guides/customers/).

### How to use Locks?

Locks are implemented in different ways within the platform. In [Contents](/guides/content/) and [Channels](/guides/channels/), multiple users can enter a resource, being only one who can edit and save those changes, while others will only see the latest version saved on the platform. If a second person tries to make a change, a message will appear indicating that the item already has changes and that what you are trying to modify is obsolete.

In other sections such as [Customers](/guides/customers/) and Settings, Locks will not allow simultaneous viewing of the resource, so if it is in edition, another user will not be able to enter the work view.

In this case, only an Administrator can take control, activating for himself the edition and discarding the unsaved advances of the user who is working on it.


::: warning Take control

If an Administrator wants to take control of a view, he must click on the item in use and on the next screen, click on the **Take Control** button.

<img src="/assets/img/platform/lock-forms.jpg" style="border: 1px solid #EEE;"/>

When the Administrator takes control, the user who is using the resource will receive a message that will prevent him from continuing to make changes, so any changes that are being made must be saved and backed up offline.

After taking control, the Administrator will only have two hours to make changes without saving. After that time, the resource will be released again and can be taken by any other user.
:::
