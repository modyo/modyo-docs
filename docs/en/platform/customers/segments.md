---
search: true
---

# Segments

Segments is the ideal Modyo feature to manage users in bulk if you need them to receive specific information.

These allow us to group end users into different Segments and thus facilitate the sending of emails or notifications. This is achieved through nested filters to achieve the desired grouping. Segments can be applied to the Content and Channels modules to show certain content to your users.

### About the interface

In the interface, you can see a list of all segments in your account, with the following details:

The list is sorted as follows.

- Name: Particular name of the list. (Below are the filters that it contains).
- Created on: Segment creation date.
- Number of users that within the segment.

In addition, on the far right you will find an "Action" button with a drop-down menu that allows you to execute the following options:

- Edit: Edit the name and filters of the segment.
- Delete: Delete the segment.

:::warning Warning
If you delete the segment, you will have to create it again, users will not be deleted.
:::

If you need to search for a specific segment by name, you can do so through the search bar at the top of the screen.

## Create a Segment
To create a segment, follow these steps:

1. From the admin page, click on **Customers**, then select **Realms**.
1. Click on your **Realm**.
1. Select **Segments**, and click on **+ New Segment**.
1. Add the required filters for your segment.
1. Click **Next**.
1. Enter a **Name** and **Description**.
1. Click **Save**.

:::tip Tip
If you want to see the users who are part of a segment, in the Segments menu, click on the number of users. This will bring you to the [Users](/en/platform/customers/realms.html) view that will show you a list of all the contacts that fit your segment.
:::

:::tip Tip
It is necessary that each customer's file is complete, as each of the data that appears on it, can be taken into account for segmenting. If the tab is not complete or there is no customer data to filter, it will not be added to the segment.
:::

### Filters

Filters allow you to create segments based on the information that appears in the customer's profile and their activity within the site. You can create segments including users that match certain criteria or users that do not match certain criteria.

The filters found by default in the platform are:

- Activation status
- Age
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
- Form responses
- Order Completed
- Order failed
- Order confirming
- Order paid
- Order paying
- Order rejected

To create an advanced filter that fits your needs, see [Custom Fields](/en/platform/customers/realms.html#custom-fields).

:::warning Warning
User segments are updated constantly in the background:
* Every 5 minutes.
* Each time a user's profile is modified.
* Every time a user answers a form.

The update runs in a background process, meaning that the update is not immediate and depends on the system load. Some users may not see segmented content for a few minutes after they've run an action that includes or excludes them from a segment.
:::