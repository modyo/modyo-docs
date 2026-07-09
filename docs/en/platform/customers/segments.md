---
search: true
---

# Segments

The **Segments** functionality in Modyo is ideal for managing users in bulk and ensuring they receive specific information. Segments group end users through nested filters, making it easy to send emails or notifications. You can also apply them in the **Content** and **Channels** modules to personalize the content you deliver to your users.

In this section, you'll find a list of all created segments, along with key information such as:

- **Name**: The identifier of the segment (under which the filters that define it are listed).
- **Created On**: The date the segment was created.
- **People**: The number of users included in the segment.

To search for a segment by name, use the search bar at the top of the screen.

## Create a Segment

To create a segment, follow these steps:

- From the administration page, click **Customers**, then select **Realms**.
- Click on your **Realm**.
- Select **Segments** and click **New Segment**.
- Add the required filters for your segment.
- Click **Next**.
- Enter a **Name** and a **Description**.
- Click **Save**.

:::tip Tip
Make sure each customer's profile is complete, as incomplete data will prevent a user from being included in a segment based on those criteria.
:::

## Filters

Filters allow you to create segments based on user profile information and their activity on the site. You can include users who meet certain criteria or exclude those who do not.

The default filters available on the platform include:

- Activation status
- Age
- Submission status (of an origination)
- Task status (of an origination)
- Form responses
- Birth date
- Custom field value
- Device
- Delivered mail
- Mail reported as spam
- Form response count
- Gender
- Last login date
- Log count
- Login Date
- Mail not opened
- Count of opened mails
- Seen notification
- Count of opened notifications
- Registration date
- User Tags
- User Field Values
- Order Completed
- Order failed
- Order confirming
- Order paid
- Order paying
- Order rejected

To create an advanced filter that fits your needs, refer to the [Custom Fields](/en/platform/customers/settings#custom-fields) section.

:::warning Attention
The update of segments to which a user belongs is performed as a background process and may not be immediate. This occurs:

- Every 5 minutes.
- Whenever a user's profile is modified.
- Every time a user answers a form.

The speed of the update depends on the system load, so some users might not see segmented content immediately after performing actions that include or exclude them from a segment.
:::

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