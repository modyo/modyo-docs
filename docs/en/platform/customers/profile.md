---
search: true
---

# User Profile

The user profile is the central place where users can find the various account sites, notifications, and the view to modify their profile such as their name, email, custom fields, and their subscription to email campaigns.

### Sites

Displays the list of enabled sites in the account, so that the user can easily find all the digital channels associated with the account.

:::tip Tip
You can hide that section of the profile by using CSS in the customers settings, appearance section.
:::

### Notifications

Each user can access their notifications directly from the profile, listing at the top the unread notifications, and then the read notifications. Both lists are ordered from the most recent to the oldest.

When you click on a notification, its full content will be displayed and it will be marked as read. 

### Profile edit

In this section, each user can modify his own profile data, depending on the [customers configuration](/en/platform/customers/users.html#customer-settings), each user will be able to modify:

* Name
* Last name
* Second last name
* Email
* Birth date
* Gender
* [Custom fields](/en/platform/customers/realms.html#custom-fields)
* Password

In addition, each user can permanently delete their account. 

:::danger Danger
Deleting the user account is an irreversible action and users who perform this action will need to register again in order to access it.
:::

## Profile API

You can access the user profile API through the URL `account_url/api/profile`, where you can make use of the endpoints: 

* Technical documentation of the API: `account_url/api/profile/docs`
* Notifications: `account_url/api/profile/notificaciones`
* User info: `account_url/api/profile/me`