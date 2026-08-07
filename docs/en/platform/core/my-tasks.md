---
search: true
---

# My tasks

**My tasks** is each administrator's personal work inbox. It is a top-level item in the Modyo Platform side menu that gathers on a single screen everything waiting for your action, so you don't have to go space by space and realm by realm looking for your pending work.

The inbox is personal: each administrator only sees the tasks assigned to them or to one of the groups they belong to.

## Task types

The inbox brings together two different sources of work:

- **Workflow review**: Content and Channels elements waiting for your approval within [Team Review](/en/platform/core/#team-review), such as entries, pages, navigation, templates, and widgets.
- **Validation review**: validation and pending review tasks from the [originations](/en/platform/customers/origination.html) assigned to you or to a group you belong to.

## About the Interface

To open the inbox, click the **My tasks** icon in the Modyo Platform side menu.

The list has these filters:

- **Task type**: shows only **Workflow review** tasks or only **Validation review** tasks.
- **Status**: **Pending**, which is the default value, **Completed**, or **All**.
- **Search**: filters by the task title and by the context name.

Each row in the list shows:

- **Status**: **Pending** or **Completed**.
- **Title**: the name of the element under review or, for validations, the name of the origination and the name of the task.
- **Type**: **Workflow review** or **Validation review**.
- **Context**: where the element lives, with its type and its name, for example `Space: my_space`, `App: my_site`, or `Origination: my_origination`.
- **Details**: for workflow reviews, the author who sent the element to review; for validation reviews, the number of items left to validate.
- **Assigned at**: when the task arrived in your inbox. You can sort the list by this column.

Click the **Title** of a row to go straight to the point of work: the entry or page under review, or the specific task inside the origination submission, with no intermediate steps.

:::tip Tip
Filters only appear if you have ever received a task. When you have nothing pending, the screen shows the message **All your elements and assignments are reviewed.**
:::

## How tasks reach your inbox

You don't have to do anything to feed the inbox: tasks are created on their own.

- When the flow of an origination submission reaches an agent task and its assignee is resolved, a **Validation review** task is created for each administrator that must be notified. If the assignee is a group, the task reaches all of its members. The notification email is sent in parallel, so the inbox and the email always show the same thing.
- When a Content or Channels element enters review and you are among its reviewers, a **Workflow review** task is created. If you are added as a reviewer of an element that was already under review, the task also appears; if you are removed from the reviewer list, it disappears from your inbox.

:::tip Tip
**Pending review** tasks that have the **Disable manual completion** option enabled do not create an entry in the inbox, because they are not completed from the admin. Check [Tasks answered by agents](/en/platform/customers/origination.html#tasks-answered-by-agents).
:::

## How a task is closed

Tasks are not marked by hand: they move to **Completed** when the work they represent finishes.

- A **Validation review** task is completed when the response to the associated task is completed or when you approve or reject the validation.
- A **Workflow review** task is completed when the element is approved, when it is archived, or when it goes back to the editable state after a rejection.

If the work is reopened, for example when a rejected validation is assigned again, the task is reactivated and appears as **Pending** again with its new assignment date.

To review what you already closed, change the **Status** filter to **Completed** or to **All**.

## Who sees the inbox

The **My tasks** item only appears in the side menu if you can receive one of the two task types: if you have permissions to edit or review elements in some space or site, or to access the origination submissions of some realm, with **List Assigned Submissions** or **List All Submissions**. Check [Roles](/en/platform/core/roles.html#roles) for the detail of the grouped permissions.
