---
search: true
---

# WebHooks

The platform also allows the use of Webhooks for certain specific events within your account. To do this, they must be enabled and configured from the Webhooks section in the account settings.

A webhook is an automatic _POST_ action to a given URL with certain information.

To enable them, you must check the top of the page and then proceed to create all the webhooks you want.

Webhooks can be created from actions of sites or spaces.

When creating a webhook, you must have the URL to which you want to send the information, select the type of log and site (if necessary) that will trigger the webhook, and then save the changes.

After this, you will be able to see all active webhooks in the list.


### Create an administrative webhook

Call your management channels through a webhook.

To create a webhook, follow these steps:

1. From the administration page, click **Settings**, then select **Webhooks**.
2. Click **+ New Webhook**.
3. Type the name and the URL you want to call.
4. Select the sites or spaces you want to activate the webhook.
5. Select the log type that will activate the webhook.
6. Add the necessary headers for the call.
7. Click **Save**.


Site webhooks are:

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
* Site visible
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

Space webhooks are:

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
      "title":"test entries (6111a767-71dc-485c-bea3-80229edf7450)"
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
### Create a realm webhook

Call your management channels through a webhook.

To create a webhook, follow these steps:

1. From a realm, click **Realm Settings**, then select **Webhooks**.
2. Click **+ New Webhook**.
3. Type the name and the URL you want to call.
4. Select the type of log that will activate the webhook.
5. Add the necessary headers for the call.
6. Click **Save**.

Realm webhooks with their respective payloads:

* Form response created
* Form response updated
* Origination response created
``` javascript
{
   "ip":"172.71.194.146",
   "ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
   "e_a":"created_log",
   "e_c":"origination_submission",
   "uid":2300345,
   "idsite":4521,
   "realm_id":681,
   "realm_uid":"jordana",
   "account_id":381,
   "origination_uid":"ori",
   "submission_uuid":"4c23599f-2aa6-4a8c-b2ae-66be46b7b938"
}
```
* Origination response started
``` javascript
{
   "ip":"172.71.194.146",
   "ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
   "e_a":"started_log",
   "e_c":"origination_submission",
   "uid":2300345,
   "idsite":4521,
   "realm_id":681,
   "realm_uid":"jordana",
   "account_id":381,
   "origination_uid":"ori",
   "submission_uuid":"4c23599f-2aa6-4a8c-b2ae-66be46b7b938"
}
```
* Origination response task submitted
``` javascript
{
   "ip":"172.71.195.36",
   "ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
   "e_a":"task_submitted_log",
   "e_c":"origination_submission",
   "uid":2300345,
   "idsite":4521,
   "task_id":157,
   "realm_id":681,
   "realm_uid":"jordana",
   "account_id":381,
   "origination_uid":"ori",
   "submission_uuid":"4c23599f-2aa6-4a8c-b2ae-66be46b7b938"
}
```
* Origination response completed
``` javascript
{
   "id":35914440,
   "account_id":381,
   "site_id":null,
   "user_id":1177351,
   "value_1":null,
   "value_2":null,
   "value_3":null,
   "request_ip":"172.71.195.87",
   "request_user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
   "loggeable_id":419,
   "loggeable_type":"Origination::Submission",
   "options":{"title":null},
   "created_at":"2025-06-16T10:50:22.000-04:00",
   "space_id":null,
   "log_type_id":415405,
   "realm_id":681,
   "trigger_uid":"origination_submission_completed_log",
   "trigger_name":"Origination submission completed log",
   "trigger_entity":"Origination::Submission",
   "trigger_entity_id":419,
   "trigger_entry_uuid":null,
   "trigger_content_uuid":null,
   "trigger_entry_space_uid":null
}
```
* Origination response canceled
``` javascript
{
   "ip":"172.71.195.41",
   "ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
   "e_a":"canceled_log",
   "e_c":"origination_submission",
   "uid":2300345,
   "idsite":4521,
   "realm_id":681,
   "realm_uid":"jordana",
   "account_id":381,
   "origination_uid":"ori",
   "submission_uuid":"04bf572a-9e00-4474-ae8a-6a0bc17d4c1a"
}
```
* Login
* Login with code
* Logout
* Error trying to log in
* Error trying to log in with code
* User created
* User updated
* User enabled
* User registration
* Restore password
* User deleted

Note: The webhook is called via a POST when the selected log type is generated. Once the webhook is created, you can send a test notification with false information to test that your URL is correctly receiving POSTs from Modyo.