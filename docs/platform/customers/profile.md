---
search: true
---

## User profile

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

In this section, each user can modify his own profile data, depending on the [customers configuration](/platform/customers/realms.html#customer-settings), each user will be able to modify:

* Name
* Last name
* Second last name
* Email
* Birthdate
* Gender
* [Custom fields](/platform/customers/realms.html#custom-fields)
* Password

In addition, each user can permanently delete their account. 

:::danger Danger
Deleting the user account is an irreversible action, and users who perform this action must register again to be able to access.
:::

## Profile API

You can access the user profile API through the URL `account_url/api/profile`, where you can make use of the endpoints: 

* Technical documentation of the API: `account_url/api/profile/docs`
* Notifications: `account_url/api/profile/notificaciones`
* User info: `account_url/api/profile/me`
