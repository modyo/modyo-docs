---
search: true
---

# Customer APIs

Modyo Customers contains a variety of APIs with which you can obtain information about Realms, notifications, and users.


## Customer APIs

Access the Customers API to manage realms and users through the URL `ACCOUNT_URL/api/customers/docs`. Examples of endpoints:

- **Notifications**: `ACCOUNT_URL/api/customers/realms/{realm_uid}/notifications`
- **User Information**: `ACCOUNT_URL/api/customers/realms/{realm_uid}/me`
- **Events**: `ACCOUNT_URL/api/customers/realms/{realm_uid}/events`


### Delegated tokens

By enabling the [**Show delegation information**](/es/platform/core/integrations/identity-providers.html) option in your identity providers, using the API `account_url/api/customers/realms/{realm_uid}/me `, you'll get a JSON with added information about delegated tokens similar to this:

If you enable the [**Show delegation information**](/en/platform/core/integrations/identity-providers.html) option in identity providers, the `account_url/api/customers/realms/{realm_uid}/me` endpoint will include a JSON with information about delegated tokens:


``curl -X GET test.miModyo.com/api/customers/realms/miRealm/me``

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

## Zendesk API

With these endpoints you will be able to obtain the tokens needed for an integration with Modyo and Zendesk.

The only requisite is to have an integration with Zendesk ready before using these APIs.

### Zendesk Token

`test.modyo.com/api/customers/realms/<realm_uid>/integrations/zendesk_token`.

### Zendesk SSO URL

`test.modyo.com/api/customers/realms/<realm_uid>/integrations/zendesk_sso_url`

Make sure to replace the URL with that of your site and `<realm_uid>`by the Identifier of your realm, located in the realms list.

