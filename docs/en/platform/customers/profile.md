---
search: true
sidebarDepth: 3
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

In this section, each user can modify the details of their profile, depending on the [Realm Configuration](/en/platform/customers/realms.html#realm-configuration), each user can modify:

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

## Customer APIs

You can access the customers API where you can get and edit information about realms and users through the URL `account_url/api/customers/docs`. Some of the things you can modify are: 

- Notifications: `/realms/{realm_uid}/notifications`
- User Information: `/realms/{realm_uid}/me`
- Events: `/realms/{realm_uid}/events`

### Delegated tokens

To add a JSON with delegated token information. Enable the [**Show delegation information**](/en/platform/core/identity-providers.html) option on your identity providers. When using the `/realms/{realm_uid}/me` API, you will get something similar to this:

``curl -X GET test.miModyo.com/api/realms/miRealm/me``

```json
{
  "avatar": {
    "id": 100,
    "file_name": "user_avatar.png",
    "url_original": "/user_avatar_original.png",
    "url_small": "/user_avatar_small.png",
    "url_medium": "/user_avatar_medium.png"
  },
  "id": 2332,
  "external_id": "11111111-1",
  "name": "Clifton Feil",
  "first_name": "Clifton",
  "last_name": "Feil",
  "second_last_name": "Smith",
  "email": "test.user@modyo.com",
  "username": "test.user",
  ...
  ...
   "delegated_token":{
      "uuid":"af57d947-69dc-4ed7-b5af-418c957d827f",
      "access_token":"TOKEN",
      "access_token_expires_in":300,
      "access_token_expires_in_datetime":"2021-04-15T21:42:55.995+00:00"
   }
```

:::tip Tip
If you do not have the **Show delegation information** option enabled, null (void) will be displayed.
:::