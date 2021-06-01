---
search: true
---

# Targets

Targets are the ideal Modyo function to handle users in bulk if we need them to receive certain information.

These allow you to group your customers into different segments and facilitate communication through emails or notifications.

## Interface

In the interface, you can see a list of all targets in your account, with the following details:

The list is sorted as follows.

- Name: The particular name that has the list. (under this are the filters that compose it).
- Created on: Target creation date.
- People: Number of users that within the target.

In addition, on the far right you will find an "Action" button with a drop-down menu that allows you to execute the following options:

- Edit: Edit the target name and filters.
- Delete: Delete the target.

::: warning Warning
If you delete the target, the target is lost, and must be recreated. However, this does not mean that you delete the users that once belonged to the target.
:::

If you need to search for a target by specific name, you can do so through the search bar at the top of the screen.

## Create a Target

To create a target, you need to click on the**New Target** button at the top of the screen.

Immediately a view will open in which you can select the filters you want for each Target.

If you want to delete a filter from the target you're putting together, just click on the icon on the right side of the screen.

If you want to clear all filters, you can click the**Clean** button at the bottom of the screen.

To record your target, simply click the**Save as Target** button at the bottom of the screen.

Finally, if you want to see the users that make up that target, you just have to click the**Apply** button. With this, you'll get to the [Users] view (/es/platform/customers/realms.html) that will show you a list of all the contacts that fit your filters.

:::tip Tip
 It is necessary that each customer's file is complete, since each of the data that appears on it, can be taken into account to better segment. If the tab is not complete or the customer data to filter is not available, it will not be added to the target.
:::

### Filters

Filters allow you to create targets that are based on the information that appears on the customer's tab and their activity within the site. You can create targets including users that match certain criteria or users who do not match a certain criterion.

The filters found by default on the platform are:

- Activation status
- Age
- Date of birth
- Custom field value
- Device
- Mail delivered
- Email reported as spam
- Count of responses to forms
- Gender
- Last login date
- Log count
- Login Date
- Mail not opened
- Open mail count
- Notification read
- Open notification count
- Date of registration
- User Tags
- User Field Values
- Form responses
- Order Completed
- Order failed
- Confirming order
- Paid order
- Order paying
- Order rejected

To create an advanced filter that fits your needs, go to the Custom Fields section, located in [Customers Settings](/es/platform/customers/realms.html #configuracion -de-customers).

:::warning Attention
The targets to which each user belongs is updated in a background process:
* Every five minutes.
* Each time a user's profile is modified.
* Every time a user answers a form.

Because the update runs in a background process, the update is not immediate and depends on the system load, so some users may not see targeted content for a few minutes after they have executed an action that includes or excludes them from a target.
:::