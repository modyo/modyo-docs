---
search: true
---

# Segments

The **Segments** functionality in Modyo is ideal for managing users in bulk and ensuring they receive specific information. Segments group end users through nested filters, making it easy to send emails or notifications. You can also apply them in the **Content** and **Channels** modules to personalize the content you deliver to your users.

In this section, you'll find a list of all created segments, along with key information such as:

- **Name**: The identifier of the segment (under which the filters that define it are listed).
- **Created On**: The date the segment was created.
- **People**: The number of users included in the segment. If the segment has filters the platform can't process, a warning icon with the message **Segment could not be processed** appears instead of the number; edit the segment and fix its filters to get the count back.

To search for a segment by name, use the search bar at the top of the screen.

## Create a Segment

To create a segment, follow these steps:

1. From the administration page, click **Customers**, then select **Realms**.
2. Click on your **Realm**.
3. Select **Segments** and click **New Segment**.
4. In the first row of the builder, choose **Users who match** or **Users who don't match**.
5. Open the **Filter** selector and choose the data you want to evaluate.
6. Fill in the fields that appear to the right: **Filterable** (the form, campaign, tag, or origination the filter applies to), **Operator**, **Value**, and **Condition**. Not every filter asks for all four.
7. Add the rows and groups you need with the **OR** and **AND** buttons.
8. Click **Count matches** to review how many users the segment reaches.
9. Click **Next**.
10. Enter a **Name** and a **Description**.
11. Click **Save**.

The **Next** button stays disabled while any row is incomplete: every filter needs its value, the ones that offer **Condition** need you to pick one, and ranges need both ends.

:::tip Tip
Make sure each customer's profile is complete, as incomplete data will prevent a user from being included in a segment based on those criteria.
:::

:::warning Restricted scope
If your access to the realm is [restricted by segments](/en/platform/customers/settings.html#restrict-scope-with-segments), you cannot create new segments, since these start from the realm's entire universe of users. You can edit and delete the segments within your scope.
:::

### How filters are combined

Each row of the builder is one filter, and it starts with a selector that decides whether it adds or subtracts users:

- **Users who match**: includes the users who meet the row's condition.
- **Users who don't match**: includes the users who don't meet it. Any filter can be inverted, not just some of them.

Rows are organized into groups, and that is where the final result comes from:

- Inside a group, rows are combined with **OR**: it is enough for the user to meet one of them. Use the **OR** button to add another row to the group.
- Groups are combined with each other using **AND**: the user has to meet every group. Use the **AND** button to add a new group.

So a group with **Gender** and another group with **Age** leave only the users who meet both conditions, while those same two rows inside a single group leave the users who meet either one.

Some filters accept several values at once and also show a **Condition** selector:

- **All**: the user must meet every value you selected.
- **Any**: meeting one is enough.

For example, in **User tag** with the `my_tag` and `my_other_tag` tags, **All** leaves only the users who have both and **Any** leaves the users who have at least one.

:::tip Tip
**Condition** only appears on the filters that accept several values, such as **User tag**, **Answered**, or **Submission status**. When it appears, it is required.
:::

### Matches preview

Before saving, you can review the segment's reach. Click **Count matches**, at the bottom of the builder, and the screen shows you how many users meet the filters you have written so far. The number does not refresh on its own: every time you change a filter, ask for it again with the reload button next to the count.

:::warning Attention
The count is a preview calculated on the spot, and it neither creates nor saves the segment. If the count returns an error, review the filters before continuing.
:::

## Filters

Filters allow you to create segments based on user profile information and their activity on the site. You can include users who meet certain criteria or exclude those who do not.

The default filters available on the platform include:

- **Activation status**
- **Age**
- **Submission status** (of an origination)
- **Task status** (of an origination)
- **Answered**
- **Birth date**
- **Custom Field value**
- **Login Device**
- **Email delivered**
- **Spam Email reported**
- **Form responses count**
- **Gender**
- **Last login date**
- **Log count**
- **Login at date**
- **Emails not opened**
- **Emails opened count**
- **Emails opened**
- **Notifications opened**
- **Notifications opened count**
- **Registered date**
- **User tag**
- **User field values**
- **Completed orders**
- **Confirmation failed orders**
- **Confirming orders**
- **Paid orders**
- **Paying orders**
- **Rejected orders**

Three of them work on the same data and are easy to mix up: **Emails opened** looks for the users who opened a specific campaign within a date range, **Emails not opened** for the ones who did not open it, and **Emails opened count** compares how many emails the user opened in total.

Others work with a closed list of values: **Activation status** accepts **Activated** or **Deactivated**, and **Login Device** accepts **Desktop**, **Mobile**, or **Tablet**.

To create an advanced filter that fits your needs, refer to the [Custom Fields](/en/platform/customers/settings#custom-fields) section.

:::warning Attention
The update of segments to which a user belongs is performed as a background process and may not be immediate. This occurs:

- Every 5 minutes.
- Whenever a user's profile is modified.
- Every time a user answers a form.

The speed of the update depends on the system load, so some users might not see segmented content immediately after performing actions that include or exclude them from a segment.
:::

### Operators

The operator a filter offers depends on the type of value it compares:

- **Dates**, such as **Birth date**, **Registered date**, or **Login at date**: **Before**, **After**, **On**, and **Between**.
- **Numbers**, such as **Age** or a numeric custom field: **Less than**, **Greater than**, **Equals**, and **Between**.
- **Counts**, the filters that count events such as **Form responses count**, **Log count**, **Emails opened count**, and **Notifications opened count**: **Less than or equal to**, **Greater than or equal to**, **Equals**, and **Between**.

Filters that work with a closed list of options, such as **Gender** or **Login Device**, do not ask for an operator: you pick the value directly.

When you choose **Between**, the screen asks for two values and the second one has to be greater than the first. If it is not, the panel warns you with **Max value must be greater than min value** and the segment is not saved until you fix it.

### Origination filters

The **Submission status** and **Task status** filters allow you to segment users according to their progress in the realm's [originations](/en/platform/customers/origination.html):

- **Submission status**: Select an origination and the status of the submission: **Not started**, **Pending**, **Completed**, or **Canceled**. If the origination allows multiple submissions per user, you also define a condition: **All** (all of the user's submissions must meet the status) or **Any** (one is enough).
- **Task status**: Select an origination and then a specific task within its steps, along with the status of that task: **Not started**, **Pending**, or **Completed**.

Both filters include the **since [X] days or more** field, which narrows the segment down to users who have been in the selected status for at least that many days. For example, you can create a segment with the users who have had a pending task for at least 3 days and send them a reminder campaign.

To exclude users who meet the condition, use the filter's **Users who don't match** option.

## Delete a segment

You can delete a segment from the overview by selecting the delete option from the actions button.

:::warning Attention
If you delete a segment, you will need to recreate it. However, the users will not be removed.
:::