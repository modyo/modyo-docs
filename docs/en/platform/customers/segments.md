---
search: true
---

# Segments

Segments are the ideal Modyo function to handle users in bulk if we need them to receive certain information.

These allow you to group your customers into different segments and facilitate communication through emails or notifications.

## Interface

In the interface, you can see a list of all segments in your account, with the following details:


The list is sorted as follows.

- Name: Particular name of the list. (Below are the filters that it contains).
- Created on: Segment creation date.
- Number of users that within the segment.

In addition, on the far right you will find an "Action" button with a drop-down menu that allows you to execute the following options:

- Edit: Edit the name and filters of the segment.
- Delete: Delete the segment.

:::warning Warning
If you delete the segment, the segment is lost, and must be recreated. However, this does not mean that you delete the users that once belonged to the segment.
:::

If you need to search for a specific segment by name, you can do so through the search bar at the top of the screen.

## Create a Segment

To create a segment, click on the **New Segment** button at the top of the screen.

In the window that appears, you can select the filters for your segment.

To remove a filter, click on the "trash" icon on the right side of the window.

To erase all filters, click on the **Clear all** button at the bottom of the window.

To save a segment, click on the **Save as a Segment** button at the bottom of the window.

To see the users that match your segment filters, click on the **Apply** button. This opens a [Users](/en/platform/customers/realms.html) list that displays all users that fit your filters.

:::tip Tip
When using segments, it's important to make sure that each user profile is complete and up to date. All user data can be taken into account when creating segments of your customers. If a user profile is incomplete and has no data to match a given filter, they are not included in your segment results.
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

To create an advanced filter that fits your needs, go to the Custom Fields sectiond located in [Customers Settings](/en/platform/customers/users.html#customers-settings) for more information.

:::warning Warning
Updating targets occurs constantly in background in one of three ways:
* Every 5 minutes.
* Each time a user's profile is modified.
* Every time a user answers a form.

These updates are not immediate, and depend on the system load. It is possible that some users may not see segmented content right away after having executed an action that includes or excludes them from a particular segment. Please give the system a few minutes to reflect segment changes.