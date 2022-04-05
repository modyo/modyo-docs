---
search: true
---

# Webhooks

The platform also makes it possible to trigger Webhooks with specific events within your account. To do this, they must be enabled and configured from the webhooks section in the account settings.

A webhook is an automatic _POST_ action at a given URL with certain information.

To enable them, you must check the box at the top of the page and then proceed to create all the webhooks you want.

Webhooks can be created from actions of sites or spaces.

### Create a webhook

Call your management channels through webhooks.

To create a webhook, follow these steps:

1. From the admin page, click **Settings**, then select **Webhooks**.
2. Click **+ New Webhook**.
3. Write the name and URL you want to call.
4. Select the sites or spaces you want to activate the webhook.
5. Select the log type that will activate the call.
6. Add the required headers for your call.
7. Click **Save**.

Note: The webhook is called through a POST call when the selected log type is generated. Once a webhook is created, you can send a test notification with fake information to test that your URL is receiving POST calls from Modyo.

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
* Site enabled
* Site hidden
* Site staged
* Visible site
* Site updated
* Templates approved
* Templates sent for review
* Templates updated
* Theme installed
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

When creating a webhook, you must have the URL to which you want to send the information, select the type of log and site (if necessary) that will trigger the webhook and then save the changes.

After this, you will see in the list all the webhooks that are active.

Once the webhook is created, you can send a test notification with false information to prove that your URL is correctly receiving the POSTs from Modyo.

### Payload example

``` javascript
{
   "id":1552,
   "account_id":2,
   "site_id":null,
   "user_id":2,
   "type":null,
   "value_1":"6111a767-71dc-485c-bea3-80229edf7450",
   "value_2":"the-new-type",
   "value_3":"space-test",
   "request_ip":"127.0.0.1",
   "request_user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
   "loggeable_id":5,
   "loggeable_type":"Content::Entry",
   "options":{
      "title":"test entries (6111a767-71dc-485c-bea3-80229edf7450)}"
   },
   "created_at":"2021-08-13T17:08:46.000Z",
   "user_type":"AdminUser",
   "space_id":1,
   "log_type_id":262,
   "realm_id":null,
   "trigger_uid":"entry_created_log",
   "trigger_name":"Entry created log",
   "trigger_entity":"Content::Entry",
   "trigger_entity_id":5,
   "trigger_entry_uuid":"6111a767-71dc-485c-bea3-80229edf7450",
   "trigger_content_uuid":"the-new-type",
   "trigger_entry_space_uid":"space-test"
}
```

Once the webhook is created, you can send a test notification with false information to prove that your URL is correctly receiving the POSTs from Modyo.
