---
search: true
title: Modyo Platform
meta:
  - name: description
    content: Modyo Platform is the technological foundation on which Modyo applications such as Channels, Content, and Customers operate. Here you will find everything necessary to perform the most relevant configurations. 
version: 9.2
---

# {{ $frontmatter.title }}

{{ $frontmatter.meta[0].content }}

Below, we will explore the most relevant sections and cross-cutting topics of the platform.


## Get Started! 🚀

For users new to Modyo Platform, we suggest following this initial workflow:

1. **Initial setup**: Review the [general configurations](/en/platform/core/configuration) of the account
2. **User management**: Configure [roles and permissions](/en/platform/core/roles) for your team
3. **Security**: Implement the recommended [security policies](/en/platform/core/security)
4. **Integrations**: Connect your [external systems](/en/platform/core/integrations) if necessary

Modyo provides all its administrator users with a learning section containing specialized links and content from our community to accelerate platform adoption. This section includes topics such as:

- **Quick start guides**: Step-by-step tutorials to set up your first application
- **Common use cases**: Practical examples of successful implementations
- **Best practices**: Recommendations from the Modyo team to optimize your experience
- **Community resources**: Direct links to documentation, videos, and specialized forums
- **Platform updates**: Information about new features and improvements


:::tip Optional activation
The Get Started! section can be disabled from the account's general options according to your organization's needs.
:::


## Team Review

Team Review is a tool that allows you to control the content publishing process in Modyo. When activated, each element must go through review stages before publication, adding a level of supervision and collaboration between the content editor and a team of reviewers. This tool is configured individually for each Site and Space.

When an editor or developer considers that the element they are working on is ready, they can submit it for review. This task can be performed by users enabled by default or by a team selected by the editor. These reviewers are responsible for approving or rejecting the element, determining if it is ready for publication. Each step of this process takes the element through different states, which are recorded in a history for later auditing.

### Configuration

To activate team review, follow these steps:

1. From the side menu in Modyo Platform, select a space or site.
2. Expand **Space/Site Settings** and select **Team Review**.
3. Click **Enable team review**.

The available options are:

- **Enable team review**: Activates or completely deactivates team review in this context (site or space).
- **Number of approvals**: Determines the number of users who must approve the element for it to be ready for publication. When the required number of approvals is reached, the element's status will change from "Awaiting review" to "Approved".
- **Restrict reviewer selection**: By default, any user with the necessary permissions can approve elements awaiting review. However, when this option is enabled, only reviewers selected by the editor can perform the approval.

- **Force review**: This option allows you to select a list of users, from which at least one approval is required for the element to change to "Approved" status. This is independent of the number of approvals configured previously. Even if an element has the necessary number of approvals, it will remain in "Awaiting approval" status if no user from the list has approved it.
- **Require all**: This option extends the previous restriction to all selected users. In this case, approval from all users on the list will be required for the element to change to "Approved" status.

:::tip Attention
- While approval may be limited, any user with permissions can comment on the element.
- When you make changes to the team review configuration, elements that were already awaiting review will continue to be governed by the rules prior to the changes.
- For those elements to adjust to the new configuration, they need to be rejected and submitted for review again.
:::

## About the Interface

The Modyo administration interface provides a unified management environment that centralizes all platform functionality through a modular and cohesive architecture. The interface design follows enterprise usability principles, implementing consistent navigation patterns, clear visual hierarchies, and standardized UI elements that facilitate adoption by multidisciplinary teams. The responsive architecture ensures complete accessibility from different devices, while the modular organization allows users to efficiently access Content Management, Site Builder, Widgets, Customer Insights, and system configuration functionalities from a central console.

The access and permission management system implements a role-based security model (RBAC) that allows granular control over resources and functionalities. Administrators can configure permissions at the organization, workspace, site, and specific content levels, establishing customizable approval workflows and centralized governance policies. This integrated security architecture eliminates the need to manage multiple authentication and authorization systems, providing complete traceability of accesses and actions performed on the platform.

The user experience is optimized for operational productivity, incorporating features such as configurable dashboards with real-time metrics, contextual search tools with advanced filters, batch operations for mass content management, and adaptive navigation that presents relevant options according to the user's context and permissions. The interface abstracts the underlying technical complexity while exposing advanced configuration capabilities, allowing both business users and developers to fully leverage the digital platform's capabilities.


### Review Process

When the team review option is activated and changes are saved, the main green button **Submit for review** is displayed. When submitting for review, the bar changes status to indicate if conditions are missing or if you don't have sufficient permission. When clicking, the right side section will indicate the requirements to publish the element.

If review from any reviewer is required, `(required)` will appear next to their name in the list of reviewers. To the right of each reviewer is their review status: a yellow circle is shown if they haven't reviewed, and a green check if they have approved the element. All users who have access to the element's editing view will see an **Approve** button below the list of reviewers, although only those with the necessary permissions can click to approve the element.

When approving the element, the user's approval is recorded and a green check is shown next to their name in the list of reviewers. In the element's action bar, to the left of the main green button and to the right of the differences button, you can find the option to open the element's activity tab, where a chronological list of actions performed is shown with the option to view details of each action and leave comments. When a comment is left or an action is executed on the element, a notification is sent both to the person who submitted for review and to users on the list of reviewers.



## Versioning

As a backup mechanism, when publishing an element, Modyo automatically generates and maintains a number of versions that can later be recovered if necessary. This system is available for Widgets, Pages, Navigation, Templates, and Spaces.

### Version Types

| Version | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Editable** | The Editable version preserves changes made to the element since its last publication or since its creation if it has never been published. This version goes through the team review process when activated. At the time of publication, the "Editable" and "Published" versions contain the same content.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Published** | This version saves the content visible on the site and is available to all users. In this state, internal resources like Widgets and Templates can already be used in creating any site or page. The published version doesn't necessarily have the same content as the editable version, except at the exact moment of publication, as it may contain changes that are still in the testing or review process.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Backups** | Backups are previously published versions of elements. Each time an element is published, Modyo saves the previously published version as a backup.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Scheduled** | When you schedule a publication, the editable version goes into a scheduled state. When the time comes for publication, that scheduled version takes the place of the version that is published at that time. This way, you can schedule a future change to elements and continue working on the editable version.<br/><br/>Modyo only allows one scheduled version of each element. If you schedule a second modification to the element, you overwrite the previous schedule.<br/><br/>In addition to scheduling publication, you can also schedule unpublishing. When the time comes, the published version will become a backup, leaving the element in question without a published version.<br/><br/>When scheduled actions are executed, Modyo may take a few minutes to complete them. Modyo will send you an email notification when the action has been completed.<br/><br/>There are elements (home, navigation, and templates) that **cannot be unpublished**. If unpublishing is scheduled together with other elements, it will have no effect on these specific elements. |
| **Approved** | This state appears when team review is enabled and means that an element in this state is ready to be published. Any change made to an element in this state will take the element to an editable state and must go through the review process again to be published.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

If you want to review a specific version of an element, you can access "Version Differences" to see the changes made and revert them if necessary.

:::warning Versions
By default, Modyo saves the last 20 published versions of each element, so when making the twenty-first publication, you will be deleting the backup of the element's first publication.

This value can be modified through environment variables and is applicable to all accounts on it.
:::

### Revert a Change

Within versioning, there are two actions that allow you to interact with backups: reset and rollback. By default, the differences modal shows the published version on the left and the editable version on the right. You can change which versions to compare by changing the values in the version selectors at the top of the modal.

Follow these steps to revert to a published version in an Entry:

1. From Modyo Platform, expand Content and select Spaces.
1. Select your Space and then click on the Entry you want to version.
1. Click **Differences**.
1. In the modal that appears, select the version you want to rollback to and then click **Rollback to this version**.

When any of the actions is applied, the version selected on the left is always taken, so that if reset, the version on the left will be taken to the editable version, and if rollback is done, the version on the left will be taken to the published version.

:::tip Supported Modules
Versioning can be performed in the following modules:
- In Content: **Entries**.
- In Channels: **Pages**, **Navigation**, **Templates**, and **Widgets**.
:::

### Reset

In this case, the backup takes the place of the editable version, so all existing changes will be lost, and you can continue working on potential changes to that version to republish it.

### Rollback

In this case, the backup returns directly to the **published** version of the element, without touching the editable version.

This is useful when something was published by mistake and it's necessary to return to one of the stable versions. Allowing you to resolve the problems that the version with errors may have had.

:::tip Administration Permissions
Since this is a potentially risky action, only site or space administrators have permission to execute this action.
:::

### Locks

Locks is a Modyo functionality that allows you to modify a resource safely, avoiding concurrency issues that may occur when another user is working on it simultaneously. This way, Modyo prevents work loss or document overwriting.

Locks is mainly used in [Content](/en/platform/content/) and [Channels](/en/platform/channels/), but can also be used in other sections where elements are edited such as Settings and [Customers](/en/platform/customers/). The implementation varies by section: in Content and Channels, multiple users can enter a resource, with only one being able to edit and save those changes, while others will only see the last version saved on the platform. If a second person tries to make a change, a message will appear indicating that the element already has changes and that what they are trying to modify is obsolete.

In other sections like Customers and Settings, Locks will not allow simultaneous viewing of the resource, so if it is being edited, another user cannot access the work view. In this case, only an Administrator can take control, activating editing for themselves and discarding the unsaved progress of the user working on it.


:::tip Take Control

If an Administrator wants to take control of a view, they must click on the element in use and on the next screen, click the **Take Control** button.

When the Administrator takes control, the user using the resource receives a message preventing them from continuing to make changes, so any changes the user is making must be saved and backed up offline.

After taking control, the Administrator only **has two hours to make changes** without saving. After that time, the resource is released again and can be taken by any other user.
:::

### Preview Modes

Preview modes allow you to preview changes made to publishable elements such as entries, pages, navigation, widgets, or templates. Access to this mode is at the top right of the site. You can recognize that you are in preview mode when you see the bar at the top of the site.

The preview bar contains the following interactive elements:

- **Template selector**: Allows you to switch between the published and editable version of elements belonging to the template builder.
- **Content selector**: Allows you to toggle between the published and editable version of elements belonging to the content application that are being used on the site through the Liquid content SDK.
- **Navigation selector**: Allows you to switch between the published and editable version of elements belonging to the navigation builder.
- **Page selector**: Allows you to toggle between the published and editable version of elements belonging to the page builder.
- **Content view selector**: Allows you to switch between the published and editable version of the content entry being previewed in custom content views. This view doesn't directly use the Liquid content SDK, so content in these views won't be affected by the content SDK selector.
- **Widget selector**: If pages containing custom widgets are being previewed, a list of widgets present on the page will be displayed, allowing you to select whether to view the editable or published version of each. Once selected, you must click the "refresh" button for the widget configuration to take effect.
- **Minimize tab**: Allows you to hide the preview bar to avoid interference with elements located at the top of the site. Once minimized, the tab will remain visible to restore the bar in preview mode.
- **Edit element**: When clicked, you access the edit view of the element being viewed, whether it's an entry, a page, a widget, or a default site template.
- **Share link**: Allows you to copy a link that can be shared with other users. Opening the link provides direct access to preview mode with the configuration that was in place when the link was copied. To access preview mode, you must have an active session in the administrator account.
- **Exit preview mode**: Closes preview mode, removing the bar and keeping the tab at the site's current URL.

:::warning JavaScript SDK
Changing the content selector in the preview bar will not affect content you are using through the JavaScript SDK or the content API. It will only affect content used through the Liquid SDK.
:::
- **Widget selector**: If you are previewing pages that contain custom widgets, a list of widgets present on the page will be displayed, allowing you to select whether you want to view the editable or published version of each one. Once the selection is made, you must click the "refresh" button for the widget configuration to take effect.
- **Minimize tab**: Allows you to hide the preview bar to avoid interference with elements located at the top of the site. Once minimized, the tab will remain visible to restore the bar in preview mode.
- **Edit element**: When clicked, you access the editing view of the element being viewed, whether it's an entry, page, widget, or default site template.
- **Share link**: Allows you to copy a link that can be shared with other users. Opening the link provides direct access to preview mode with the configuration that was in place when the link was copied. To access preview mode, you need to have a session initiated in the administrator account.
- **Exit preview mode**: Closes preview mode, removing the bar and keeping the tab at the current site URL.

:::warning Attention
Changing the content selector in the preview bar will have no effect on content you are using through the JavaScript SDK or content API. It will only affect content used through the Liquid SDK.
:::