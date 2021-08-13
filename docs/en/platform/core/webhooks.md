---
search: true
---

# Webhooks

The platform also makes it possible to trigger Webhooks with specific events within your account. To do this, they must be enabled and configured from the webhooks section in the account settings.

A webhook is an automatic _POST_ action at a given URL with certain information.

To enable them, you must check the box at the top of the page and then proceed to create all the webhooks you want.

Webhooks can be created from actions of sites or spaces.

### Create a webhook

Call your management channels through a  webhook.

To create a webhook, follow these steps:

1. From the administration page, click Settings, then select Webhooks.
2. Click create Webhook.
3. Type the name and URL you want to call.
4. Select the sites or spaces you want to activate the webhook.
5. Select the type of log that will activate the webhook.
6. Add the required headers for the call.
7. Click Save.

Note: Once the webhook is created, you can send a test notification with false information to prove that your URL is correctly receiving the POSTs from Modyo.

Site webhooks are:

* Response of the form created
* Updated form response
* Page created
* Page deleted
* Page published
* Page unpublished
* Page updated
* Login
* Logout
* Navigation approved
* Navigation published
* Navigation sent for review
* Navigation updated
* Profile updated
* Site created
* Site deleted
* Site disabled
* Site Enabled
* Site hidden
* Site staged
* Visible Site
* Site updated
* Templates approved
* Templates sent for review
* Templates updated
* Theme Installed
* Theme restored
* Theme updated
* Widget approved
* Widget cloned
* Widget created
* Widget published
* Widget restored
* Widget sent for review
* Widget unpublished
* Widget updated

Spaces webhooks are:

* Category created
* Category deleted
* Category updated
* Entry approved
* Entry created
* Entry published
* Entry sent for review
* Entry unpublished
* Entry updated
* Space created
* Space updated
* Type created
* Type deleted
* Type updated

### Payload Example

``` javascript
{
    "id": 29928694,
    "account_id": 13,
    "site_id": 1025,
    "user_id": 13,
    "type": null,
    "value_1": null,
    "value_2": null,
    "value_3": null,
    "request_ip": "127.0.0.1",
    "request_user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
    "loggeable_id": 1025,
    "loggeable_type": "Site",
    "options":
    {
        "title": "Site 2019"
    },
    "created_at": "2021-05-18T21:14:33.000Z",
    "user_type": "AdminUser",
    "space_id": null,
    "log_type_id": 750,
    "realm_id": null,
    "trigger_uid": "site_disabled_log",
    "trigger_name": "Site disabled log",
    "trigger_entity": "Site",
    "trigger_entity_id": 1025,
    "trigger_entry_uuid": null,
    "trigger_content_uuid": null,
    "trigger_entry_space_uid": null
}
```