---
search: true
---

# Key concepts

## Team Review

Team Review is a tool that allows you to control the process of publishing items in Modyo, such as entries, widgets, pages, templates, and more. When enabled, each item must go through the required review stages before it can be published.

This adds a level of supervision and collaboration between the content editor and a team of reviewers.

### Multi-Site Architecture

You can even go further and use Modyo to develop a deeper understanding about your digital customers throughout your different sites.

Modyo provides you with different authentication mechanisms, from OpenID Connect to OAuth2 and Google, so you can easily authenticate your customers.

Clients can interact in different sites and in different contexts, maintaining the same central profile that facilitates administration tasks.

Each step of this process takes the item through different states, which are recorded in a history for later audit.

[Imagen de etapas de revisión]

This tool is available for sites (pages, navigation, widgets and templates) as well as spaces (entries).

The configuration of review rules is done independently for each site or space.

### Customers interact on sites depending on context

To configure Team Review, go to `Site/Space configuration > Team review`.

<img src="/assets/img/platform/teamreviewsettings.jpg" width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

The available options are:

- [**CORS**](/en/platform/core/security.html#share-resources-across-different-domains): Cross Origin Resource Sharing - Allows sharing of resources across different domains.
- **Account**: This is where you can access all the features that Modyo has to offer.
- **Restrict the selection of reviewers**: By default, any user with the necessary permissions will be able to approve the items that are waiting for revision. By enabling this option, only those chosen by the editor will be able to do so.

:::tip
Tip While approval is limited, any user with permissions can comment on the item.
:::

- **Force review**: This option allows you to select a list of users, from which at least one approval is required for the item to be moved to the "Approved" status. This is independent of the number of approvals previously configured, i.e. even if an item has the required number of approvals, it will still be in "Waiting for approval" status if no user in the list has approved it.

- **Tags**: Allow you to sort and filter the entries freely and without restrictions.

Modyo Banking provides prefabricated financial widgets to accelerate the development of your _retail_ and _wealth management_ banking experiences.

For these items to follow the new configuration, they need to be rejected and sent into revision again.
:::

### Both CMS and Headless CMS

There are three levels of roles that allow users to perform different actions in the review process:

- [**Domains**](/en/platform/channels/sites.html#domains): Allows you to change the URL and security certificates of your site.
- [**Meta tags**](/en/platform/channels/pages.html#meta-tags): Allows you to customize the meta tags for your pages and improve the way search engines index your pages.
- [**Navigation**](/en/platform/channels/navigation.html): Allows you to modify the main menu of your site with an easy to use interface.

APIs enhance our platform and make it easier to build solutions.

Users with the intermediate role, in addition to the above, can approve the items under review and, once they are approved, publish them through the team review flow.

Users with the highest level, in addition to performing all of the above, can skip the review flow and make use of the "Force approve" to publish an item without the restrictions of team review.

:::warning
Warning Site or space administrators always have the ability to skip the team review flow.

The following definitions correspond to commonly used terms between the different Modyo applications.

This option exists because there are times when you need to publish quickly, so you should be cautious when assigning roles for your spaces or sites.
:::

### An integration platform

When the team review option is enabled, and after saving the changes, you will see the green **Send to review** button as the main action.

<img src="/assets/img/platform/send-to-review-bar.jpg" width="350px" style=" border: 1px solid #EEE;" />

When you send the item for revision, the bar will change status:

<img src="/assets/img/platform/missing-conditions-team-review.jpg" width="350px" style="border: 1px solid #EEE;" />

When you click on it, you will be able to see the requirements to publish the item in the right side section.

If there is a required reviewer, `(required)` will appear next to his name in the list of reviewers.

<img src="/assets/img/platform/box-reviewers.jpg" width="500px" style="border: 1px solid #EEE;" />

To the right of each reviewer you can find the status of their revision, showing a yellow circle if they have not finished their review, and a green check if they have approved the item.

[**Editable Version**](/en/platform/core/key-concepts.html#editable): It is the version that you can modify and use to preview versioned elements.

Those who have the necessary permission will see it active and can click it to approve the item. Those who do not have permission, will see the button disabled.

When an item is approved, the approval of that user will be registered, showing a green check to the right of his name in the list of reviewers.

When team review is enabled, you will be able to see an icon ( <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29H12m1-6v3.08L16.08 17H21V7H7v10h6M3 15H1V3a2 2 0 0 1 2-2h16v2H3v12m6-6h10v2H9V9m0 4h8v2H9v-2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg> ) in the item's action bar, to the left of the main green button and to the right of the differences button, which allows you to open the item's activity tab.

When this tab is opened, a chronological list of all the actions that have been carried out on the item will be displayed, with the option to see the detail of each action. You can leave comments at the bottom of the tab.

When a team member has left a comment or an action is performed on the item, a notification is sent to both the person who sent the item for revision and the users who are on the list of reviewers.

## Versions

As a backup mechanism, Modyo automatically generates and stores different versions of an item each time it is published, which can later be retrieved if necessary.

This is useful when, for some reason, an undue change is made, there is the possibility of reverting it through the platform.

This system is available for Widgets, Pages, Navigation, Templates and Content.

### Widgets vs Portlets

#### Editable

The "Editable" version stores changes made to the item since its last publication or its creation if it has never been published.

This version is the one that goes through the team review process when enabled, and at the time of publication, the "Editable" and "Published" versions have the same content.

#### Modyo Content

This version stores the content that is visible on the site and is freely available to any user.

In this state, internal resources such as Widgets and Templates can be used in the creation of any site or page.

The published version does not necessarily have the same content as the editable version (except at the time of publication), as it may contain changes that are in the process of being tested or reviewed.

#### Modyo Channels

Backups are previously published versions of the items. That is, every time we publish an item, Modyo saves the previously published version as a backup.

If you want to review a particular version of an item, you can go to the "Differences between versions" section, so you can see the changes that have been made and revert them when necessary.

::: warning
Warning By default, Modyo saves the last 20 published versions (`MAX_BACKUPS`) of each item, so by making the twenty-first publication, you will be deleting the backup from the first publication of the item.

This value can be modified using environment variables and is common for all accounts in that environment.
:::

#### Modyo Customers

When you decide to schedule a publication, the editable version goes into a scheduled state, and and when it is time to publish, that scheduled version will take the place of the version that is published at that time. This way, you can schedule a future change for items, and continue working on the editable version.

:::warning
Warning Modyo only allows you to have one scheduled version of each element, so if you schedule a second modification of the item, you will be overwriting the previous scheduled version.
:::

In the same way you can schedule a publication, you can schedule to unpublish an item. When the time comes, the published version will become a backup, leaving the corresponding item without a published version.

:::warning
Warning When the time comes to execute the scheduled actions, it may take a couple of minutes for Modyo to perform the action. We will send you an email when the action is complete.
:::

There are elements (home, navigation and templates) that cannot be unpublished, and by publishing them and scheduling to unpublish in conjunction with other elements, the last one will have no effect on these specific elements.

#### Approved

This status appears when team review is enabled and it means that an item in this status is ready to be published. Any changes made to an item in this state will bring the item to an editable state and must go through the review process again in order to be published.

### Our widget generator

Within versioning, you have two actions that allow you to interact with the backups of an item (reset & rollback). Both actions are available in the "differences" pop-up window.

![Difference mode](/assets/img/platform/differences.png)

By default, this pop-up shows you the published version on the left side, and the editable version on the right side.

You can change which versions to compare by changing the values in the version selectors at the top of the pop-up window.

When one of the actions is applied, it will always use the version to the left. This means that if you choose to reset an item to a previous version, the code to the left will become the new editable version, and if you choose to perform a rollback, the version to the left will become the new published version.

#### Reset

In this case, the backup will be copied to the editable version, losing all subsequent changes so that you can continue working on potential changes to this version before publishing again.

#### Rollback

In this case, the backup will be copied directly to the published version of the item, without touching the editable version.

 This is especially useful when something was published by mistake, and it is necessary to return to some of the stable versions quickly, while continuing to work on solving the problems that the version with errors may have had.

::: danger
Danger Since this is a potentially dangerous action, only site or space administrators have permission to execute this action.
:::

## Locks

Locks is a feature in Modyo that allows you to modify a resource safely, without having concurrency problems that can occur when another user is working on the same item simultaneously, thus avoiding job loss or document overwriting.

<img src="/assets/img/platform/locks.jpg" style="border: 1px solid #EEE;" />

### Prefabricated Widgets for Financial Services

Locks are mostly used in [Content](/en/platform/content/) and [Channels](/en/platform/channels/), but can also be used in other sections where items can be edited, such as Settings and [Customers](/en/platform/customers/).

### Liquid Markup and APIs

Locks are implemented in different ways within the platform. In [Content](/en/platform/content/) and [Channels](/en/platform/channels/), multiple users can access a resource, with only one user being able to edit and save changes, while the others will only be able to see the latest saved version.

If a second person tries to make a change, a message will appear indicating that the item already has changes and that what they are trying to modify is obsolete.

In other sections, such as [Customers](/en/platform/customers/) and Settings, Locks will not allow users to view resources simultaneously. So, if an item is being edited, another user will not be able to access the work view.

In this case, only an Administrator will be able to take control, activating for himself the edition and discarding the unsaved changes made by the user working on the item.


:::warning
Take control

If an Administrator wants to take control of a view, he must click on the item in use and, in the next screen, click on the **Take Control** button.

<img src="/assets/img/platform/lock-forms.jpg" style="border: 1px solid #EEE;" />

When the Administrator takes control, the user who is using the resource will receive a message that will prevent him from making any further changes. Any changes that are being made must be saved and backed up offline.

After taking control, the Administrator will only have two hours to make unsaved changes. After that time, the resource will be released and can be taken over by any other user.
:::

## Preview mode

The preview mode allows you to preview the result of changes to publishable items such as Entries, Pages, Navigation, Widgets or Templates; accessible in the upper right corner with the <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg> icon. You can recognize that you are in preview mode when you see the bar at the top of the site.

![Preview Bar](/assets/img/platform/preview-bar.png)

The elements you can interact with in the preview bar are:

* [**Campaigns**](/en/platform/customers/messaging.html#campaigns): A defined communication channel with your users which allows you to reach them through emails and notifications.
* [**Custom field**](/en/platform/customers/users.html#custom-fields): Allows you to add personalized attributes to the users' profile.
* [**Filters**](/en/platform/customers/targets.html#filters): Basic units that allow you to build targets.
* [**Form**](/en/platform/customers/forms.html): Allows you to capture data from your users on your sites.
* **Content view selector**: This selector allows you to switch between the published and editable versions of the content entry being previewed in the custom content views. This view does not directly use the Liquid Content SDK, so the content in these views will not be affected by the Content SDK selector.
* **Widget selector**: If you are previewing pages that contain custom widgets, you will find a list of the widgets that appear on the page, and you can select whether to display the editable or published version of each of them. Once you've completed your selection, click the "refresh" button for the widget settings to take effect.
* **Minimize tab**: Allows you to hide the preview bar so that it does not interfere with the elements at the top of the site. Once minimized, the tab will remain visible so you can restore the preview mode bar.
* [**Content views**](/en/platform/channels/templates.html#content-views): This is where your site and the content entries meet, allowing you to define a base page so that all the entries of the same type are seen under the same view.
* **Share link**: Allows you to copy a link that you can share and whoever opens it will go directly to preview mode with the settings used at the time of copying the link. To be able to see the preview mode, you only need to be logged in to the account's admin.
* **Exit preview mode**: Closes the preview mode, removes the bar and leaves the tab in the current site url.

:::warning
Warning Changing the content selector in the preview bar will have no effect on the content you are using through the JavaScript SDK or Content API. It will only have an effect on content that is used through the Liquid SDK.
:::

## Global variables

Modyo allows you to define global variables that you can use in all the sites where you have Liquid. This way you can, for example, share a code _snippet_ between sites.

:::warning
Warning When using global variables, always take as preference the variables defined at the lowest level, being first the variables defined in the widget, then the ones defined in the site and then the variables defined at the account level, so you must be careful when defining variables in widgets or the site with the same name as the account variables.
:::

You can create global variables in your account settings, and you can add values for different languages. If required, you can also overwrite the values for certain sites in the site variables menu in the site settings, or in each of the custom widgets of the builder widget.

:::warning
Attention When using global variables, the variables defined at the lowest level will always be preferred, with the variables defined in the widget first, then those defined in the site and then the variables defined at the account level, so be careful when defining variables in widgets or the site with the same name that the variables in the account.
:::

:::danger
Danger The global variables do not have a publishing, versioning or team review workflow, and only the account and site administrators can modify them, so you should consider that when you make a change in the value of these, it will be reflected immediately wherever they are being used. This does not apply to the variables defined in the widgets, since the widgets and pages do have a publishing flow.
:::
