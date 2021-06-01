---
search: true
---

## User Profile

The user profile is the central place where users can find the various sites in the account, notifications and view or modify their profile such as their name, email, custom fields and their subscription to mail campaigns.

### Sites

Displays the list of enabled sites in the account, so that the user can easily find all the digital channels associated with the account

:::tip Tip
You can hide that section of the profile by using CSS in the appearance section of the customers configuration.
:::

### Notifications

Each user can access their notifications directly from the profile, listing at the top the unread notifications, and then the read notifications. Both lists are ordered from the most recent to the oldest.

When you click on a notification, its full content will be displayed and it will be marked as read. 

### Profile edit

In this section, each user can modify their profile data, depending on the [customer configuration](/es/platform/customers/realms.html #configuracion -de-customers), each user can modify:

* Name
* Last name
* Second surname
* E-mail
* Date of birth
* Gender
* [Custom Fields](/en/platform/customers/realms.html #custom -fields)
* Password

In addition, each user can definitely delete their account. 

:::danger danger
Deleting the user account is an irreversible action, and users who execute this action will need to register again in order to access.
:::

## Profile API

You can access the User Profile API through the URL `account_url/api/profile`, where you can make use of endpoints: 

* API Technical Documentation: `account_url/api/profile/docs`
* Notifications: `account_url/api/profile/notifications`
* User info: `account_url/api/profile/me`
