---
search: true
---

# Activity Logs

This section shows a detailed chronological record of the activities carried out in the account and is useful for auditing and monitoring tasks, as it provides you with a detailed history of those actions. Most of them correspond to administrators, but since version 10.2 the actions the platform runs on its own, with no person behind them, are also recorded.

To enter this section you need the **View Activity Logs** grouped permission. What you can see inside it also depends on your roles, following the same scope rules described in [What logs you see](/en/platform/core/api.html#what-logs-you-see).

The auditability offered by Modyo in this space guarantees the possibility of examining all actions carried out by any administrator. This is essential to accurately determine the responsibilities that correspond to each operation.


## About the Interface

In the activity logs interface, you can see who performed each action, what type it was, on which object, and in what context it happened.

You can filter events by:

- **Date**: Filter by a specific period or select a start and end date.
- **Type**: Filter by type of events, such as creating, updating or deleting a campaign, creating or updating a post, updating or deleting a site, user enablement, and others. The dropdown does not list the full catalog: it only offers the types that already have at least one record in your account, up to a maximum of 100.
- **Admin**: Select a specific administrator to see only their activities, choose **System** to isolate the platform's automated actions, or leave the filter unselected to see every activity. This filter only appears if your role includes the **Admin Team** grouped permission.

:::tip Tip
Records are added to the list and to the **Type** filter dropdown a few seconds after the action happens. If you just did something and still don't see it, reload the screen.
:::

### List columns

| Column | What it shows |
| --- | --- |
| **User** | The administrator who performed the action, with their avatar and email. If the action was automated, it shows **System** with a gear icon and no email. If the record has neither an administrator nor an automated mark, it shows **Unregistered User**. |
| **Type** | The visible name of the event type, for example *Entry published* or *App created*. |
| **Description** | The sentence summarizing the event, with links to the author, the affected object, and the context. |
| **Origin** | The type of object that was acted upon: *Entry*, *Form*, *Widget*, *Category*, *Team member*, *Origination submission*, and so on. It shows a dash when the event does not point to any object. |
| **Context** | Where the action happened: **Space**, **Realm**, or **App** followed by the corresponding name, or **Account** when the action belongs to none of the three. |
| **Created at** | Date and time of the event. |

### Event detail

Click a record's row to open the **Log details** window, which shows the complete information stored for the event, including what the list cannot display:

- The record identifier and its type identifier, which is the same value used by the API and by webhooks.
- The affected object (`loggeable_type` and `loggeable_id`) and the context (`site_id`, `space_id`, `realm_id`, and their names).
- The IP address and the user agent the action was performed from.
- The `automated` mark, which indicates whether the action was automated.
- The `options` block with the event's own data. When the action modified an object, `options` carries the changes field by field, with the previous value (`before`) and the new one (`after`).

## Automated platform actions

A record has either an administrator or an automated mark, never both at the same time: either a person performed the action, or the platform did. When the platform did, the **User** column shows **System** with a gear icon, and to review only those actions you can choose **System** in the **Admin** filter.

Among the actions the platform records on its own are:

- Disabling administrators for inactivity, with one record per disabled administrator and a summary record with the total.
- The scheduled generation of the account activity reports.
- Disabling expired trial accounts.
- Cancelling Origination submissions that went past their deadline.

## What gets audited

The catalog of event types is closed: the platform defines 291 types, and you cannot create new types or edit the existing ones. Each type has a visible name, the one shown in the **Type** filter and in the **Type** column, and a stable identifier, which is the value of the `type` field in the [Logs API](/en/platform/core/api.html#logs) and the one that arrives as `trigger_uid` in [Webhooks](/en/platform/core/webhooks.html). To find the identifier of a specific event, open its detail.

These are the domains that get audited:

| Domain | What is recorded |
| --- | --- |
| Account and settings | Creation, update, and deletion of the account; global snippets; global variables; language; plan changes; payment settings; restoration of the default roles and log types. |
| Team, roles, and access | Roles and their assignments; groups; team members, with their creation, update, enabling, disabling, and impersonation; sign-ins and sign-outs, failed attempts, temporary password login, and password reset; updates to your own profile; identity providers; API OAuth applications. |
| Apps | Creation, cloning, update, enabling, disabling, and deletion of apps; switching to draft state; synchronization of the app and of its elements; templates; reviewers and approvers; review stages; releases and scheduled publications; version rollbacks. |
| Pages, layouts, and navigation | Layouts and layout pages, with their creation, editing, cloning, forking, publication, unpublication, rollback, submission for review, and approval; remote layouts and their deployments; navigations. |
| Widgets | Creation, editing, cloning, publication, unpublication, restoration, and deletion; associated assets; users with access. |
| Content | Spaces, with their languages, security, review team, and cache; content types and their reindexing; entries, with their publication, cloning, approval, submission for review, and bulk actions; categories and their synchronizations; library assets. |
| Customers and end users | Realms; end users, with their creation through a form, invitation, identity provider, SCIM, signup, or purchase, and with their verification, enabling, disabling, tags, impersonation, and bulk updates; member notes; user custom fields and their options; segments. |
| Messaging | Campaigns and their locks; deliveries started and stopped; mail templates; mail delivery events, with sent, delivered, opened, click, bounce, spam report, and unsubscribe; opened notifications. |
| Forms | Creation, editing, enabling, disabling, and deletion of forms; their locks; responses created, updated, deleted, and bulk deleted. |
| Origination | Originations, with their creation, update, publication, and deletion; invitations sent, resent, and cancelled; submissions, with their start, assignment, update, cancellation, completion, impersonation, and deletion; task responses, with their start, completion, review, reopening, and validation. |
| Payments | Orders, with their creation, confirmation, payment, rejection, and tracking, plus the errors of each of those steps; tokenized cards, with their enrollment, activation, removal, and failures. |
| Integrations and automation | Integrations and their synchronizations, both successful and failed; webhooks; process tasks; app uninstallation. |

## Events that do not appear in this list

Review workflow events are deliberately left out of this screen: creation, editing, comments, submission for review, approval, rejection, back to editing, completion, archiving, restoration, and adding or removing reviewers. To review them, use the **Activity** panel in the **Overview** of the app, space, or realm where they happened, which does not apply that exclusion.

## Export the list

Check the box next to one or more records and click on the **Export** button, located below the list, to choose the format (Excel or CSV) and generate the file. If instead of checking individual records you select all results, the export uses the filters you have applied.

The file carries one row per record with five columns: **Type**, **Origin**, **App**, **Created at**, and **User**. Records of automated actions come out with **System** in the **User** column.

:::tip Tip
In the file, **Type** and **Origin** carry the record's internal values, for example `Entry published log` and `Content::Entry`, and not the translated labels you see in the list.
:::

## End user activity

This screen records administration activity. The activity of a realm's end users is reviewed in [Events](/en/platform/customers/events.html), which uses the same list, the same detail, and the same export, but with a **User** filter instead of the **Admin** filter.