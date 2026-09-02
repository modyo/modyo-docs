---
search: true
---

# Messaging

The **Messaging** functionality in Modyo allows you to create mass campaigns to send segmented and personalized information to end users.

In Modyo, you can send messages to users through two channels:

- **Emails**: Send campaigns to the email addresses registered in user profiles. It is not necessary to be logged into the platform to view the messages.
- **Notifications**: Send notifications through the internal messaging system. Users must log in to the platform to view them.

## Campaigns

In the **Campaigns** section, you can manage all messages sent to end users. Use the **Type** button to filter campaigns by the delivery channel.

Campaigns are organized into the following columns:

- **Name**: The name assigned to the campaign. It may include the specific segment it was sent to.
- **Type**: Type of message in which the campaign was sent.
- **Sent**: Total number of messages sent.
- **Last sent**: Date and time the campaign was sent.
- **Created on**: Campaign creation date.

Each campaign row includes a menu with the following actions:

- **Edit campaign**
- **Delete**

:::danger Danger
If you delete a campaign, you will not be able to recover it, and its record will be deleted from the system.
:::

:::tip Segment scope
If your access to the realm is [restricted by segments](/en/platform/customers/settings.html#restrict-scope-with-segments), you can only target campaigns to segments within your scope. Campaigns targeting segments outside your scope are displayed in **Read only** mode: you can see their metadata, but not their metrics or recipients, and you cannot edit, send, duplicate, or delete them.
:::

## Create a campaign
Campaigns allow you to contact your users directly via email or direct notifications, including support for WebPush notifications. To create a new campaign, click the **New Campaign** button.

### Mailing Campaigns

Email campaigns allow you to contact users via email. To set up an email campaign, fill in the fields requested in the form:

- **Name**: The identifier for the campaign.
- **Type**: Select **Email** to enable this option.
- **Subject**: The text that will appear in the message's subject line. If this field is left blank, the realm's default email will be used.
- **Reply To**: The email address for user responses.
- **Template**: Select a [template](/en/platform/customers/messaging.html#templates). If no template is selected, a blank one will be used.
- **Enable Segmentation**: Select a specific segment or leave this option unchecked to send the message to all users.

Click **Save and Continue** to open the WYSIWYG editor, where you can customize the selected template's content and use [personalization variables](/en/platform/customers/messaging.html#personalization-variables). Once edited, select **Save** to confirm the changes and access the **Send Status** view.


### Notification Campaigns
Notification campaigns allow you to send direct messages to users. To set up a notification campaign, fill in the following fields in the form:

- **Name**: The identifier for the campaign.
- **Type**: Select **Notification** to activate this option.
- **Subject**: The text that will appear in the sent message.

#### Enable WebPush support

Notification campaigns have the ability to send WebPush notifications. This functionality allows users to receive messages directly in their browser. To enable this function, make sure you meet the following requirements:

- The web application that sends the notifications must be linked to the **Realm** where the campaigns are created.
- The web application must be in **Enabled** state.
- In the **PWA** section of the web application, activate the options **Enable top level service worker** and **Enable WebPush notifications**.

In addition, for users to receive WebPush notifications, they must comply with the following:

- Must be authenticated.
- Notifications must be enabled in your browser.

:::warning Attention
If you are using a Modyo version older than 10.0, update your template with the [WebPush support code](https://github.com/modyo-community/web-push-support).
:::

## Campaign Status

Before sending a campaign, use the **Preview** button to verify the content. Once confirmed, click **Send**. 
The contextual button allows you to perform these actions:

- **Message Editor**: Modify the content before sending.
- **Send test**: Sends a test message to a specific address (It can only be sent to users with access to the Modyo backend).
- **Edit**: Change campaign properties, such as the target segment or reply address.
- **Clone Campaign**: Create a copy with all the campaign's content.
- **Delete campaign**: Deletes a campaign.

Once you have sent a campaign, you cannot send it again. If you want to send the same campaign again, select the clone option. This creates a new campaign with the same name data, segments, and content, while the statistical information starts from scratch.

You can cancel a campaign when it is in queue or while it is being sent.

:::warning Attention
A campaign can be sent again as long as it is not **Completed**: the **Send** button comes back both when the delivery was canceled and when it failed.

When you send it, the **Do not send this campaign to people who have previously received it.** checkbox leaves out anyone who already received a message from this campaign. If you leave it unchecked, the delivery goes through every user in scope again and the number of message deliveries may be greater than the total reach of users of the campaign.
:::

### Campaign statuses

This view shows the campaign's current status next to its metrics. The possible statuses are:

- **Inactive**: The campaign is created and has not been sent yet.
- **Pending**: The delivery was already requested and is queued, but has not started processing.
- **Sending**: The delivery is in progress and deliveries are generated in groups of users.
- **Completed**: The delivery finished going through every recipient.
- **Canceled**: Someone stopped the delivery while it was **Pending** or **Sending**. The deliveries generated up to that point are not reverted.
- **Failed**: The delivery was interrupted by an error before finishing. The campaign keeps the deliveries it managed to generate.

The view's main button changes with the status: **Inactive**, **Canceled**, and **Failed** show **Send**; **Pending** and **Sending** show **Cancel**. **Completed** shows neither, and the **Message Editor** and **Edit** actions also disappear from the contextual menu: a completed campaign can no longer be modified or resent, only cloned.

### Delivery results

In campaigns sent by email, you can view:

- **Reach**: People who received the campaign.
- **Sent**: Total number of emails sent.
- **Opened**: Total number of emails opened.
- **Unique opens**: Total number of users who opened the campaign at least once.
- **Clicks**: Number of times a link in the campaign has been clicked.
- **Unique Clicks**: Number of users who have clicked on the campaign.
- **Spam**: Number of users whose email reached the spam folder.

If you sent the campaign by notification, you can view:

- **Reach**: People who received the campaign.
- **Sent**: Number of notifications sent.
- **Opened**: Number of notifications opened.

If you send a campaign through [segments](/en/platform/customers/segments), you can see which group of users the campaign reached. If this section does not appear, it is because the campaign was sent to all contacts.

:::warning Attention
If you have not yet sent the campaign, the values for that campaign will appear as zero.
:::

:::danger Danger
When deleting a campaign, you cannot recover the record if changes were made.

Deleting a campaign when it is in the process of being sent does not mean that it will not reach users, but that the process is stopped at the point where it currently is.
:::

Clicking on the name of a campaign takes you to the Message Deliveries section.

## Message deliveries

In the Message Deliveries section, you will find the list of users who have received a message from the platform. Here, you can see a list of all users who have received a unique email or notification, referred to as “No Campaign”.

"No Campaign" refers to an email or notification sent specifically to a user on a certain date. These messages are not considered campaigns, as they are personalized and contain information not sent to other users.

These messages are not created from the admin, but from the management API:

- `POST /api/admin/customers/{realm_uid}/messaging/mailer` sends an email to a realm user.
- `POST /api/admin/customers/{realm_uid}/messaging/notifications` sends a notification to a realm user.

In both cases the recipient is identified by username, not by email, and must be within your [segment scope](/en/platform/customers/settings.html#restrict-scope-with-segments): if it is not, the email call answers `409` and the notification call `404`. The field-by-field detail of each call is in the service catalog, under the **Mailer** and **Notifications** resources; to open it, follow [Call using the Swagger Portal](/en/platform/core/api.html#call-using-the-swagger-portal).

The email is queued, so a successful response confirms that the call was accepted, not that the message was already delivered. Its body accepts `%{name}`, `%{first_name}`, `%{last_name}`, `%{email}`, and `%{unsubscribe_link}`, a subset of the campaign [personalization variables](/en/platform/customers/messaging.html#personalization-variables): `%{show_link}` and `%{show_url}` are not available.

:::warning Attention
There is also a legacy route, `POST /api/admin/mailer`, which reaches the same action but does not appear in the service catalog and does not carry the realm in the URL: you have to pass `realm_uid` as a parameter or the call answers `404`. It is kept for compatibility; use the realm route in new integrations.
:::

In the initial view, the messages are ordered in these categories:

- **Name**: Name of the user to whom the message was sent. The user's email is included, regardless of whether it was sent by email or notification.
- **Campaign**: Campaign under which the message was sent.
- **Type**: The route through which the message was sent, either email or notification.
- **Delivery**: Date on which the campaign started.
- **Sent**: Date the message was sent.
- **Read**: Alert if the user read or saw the message.

In addition, you can filter the data using the following filters:

- **Campaign Type**: All, mail, or notification.
- **Campaign Name**: Name given to the campaign in general.
- **Shipment**: Date on which the campaign was sent.

The search bar allows you to search for a specific term.

## Templates


In the **Templates** section, you can create and manage email designs for your campaigns. To create an email message, you need a template where you can add your content.

### Create a template

- Click **New Template**.
- Give the template a descriptive name.
- Use the WYSIWYG editor to customize the design.

### Edit Templates

Each template has an edit button with the following actions:

- **Preview**: Shows the saved email template model.
- **Copy**: Allows you to copy the template.
- **Delete**: Deletes the template


:::warning Attention
When you create a campaign, remember to add in the footer all the legal information required by your country's regulation, regarding mass mailings.

To automate footer insertion, read [Realm Configuration](/en/platform/customers/settings#emails)
:::

## Personalization variables

The campaign message editor and the template editor accept variables that the platform replaces with each recipient's data at delivery time. Both editors list them under the label **Allowed attributes (will be dynamically replaced with data)**.

The syntax is `%{variable}` and the list is closed: you cannot invent variables or use Liquid drops. The realm's [automated emails](/en/platform/customers/settings.html#personalize-emails) do use Liquid, but messaging campaigns and templates do not.

Templates and email campaigns give you seven variables:

| Variable | Replaced with |
| --- | --- |
| `%{name}` | The recipient's full name. |
| `%{first_name}` | The recipient's first name. |
| `%{last_name}` | The recipient's last name. |
| `%{email}` | The recipient's email address. |
| `%{show_link}` | A ready-to-paste HTML link, with the text "Email not displaying correctly? View it in your browser.", that opens the web version of the message. |
| `%{show_url}` | The address of that web version, unformatted, so you can build your own link. |
| `%{unsubscribe_link}` | The address the recipient uses to unsubscribe from the realm's deliveries. |

Notification campaigns only have `%{name}`, `%{first_name}`, and `%{last_name}`.

Including `%{unsubscribe_link}` in the message footer is what lets the recipient unsubscribe, and those opt-outs are the ones that show up in [Unsubscriptions](/en/platform/customers/messaging.html#unsubscriptions).

:::warning Attention
If you write a variable that is not on the channel's list, the platform does not save the message and shows the error **The attributes specified are not valid**.

The template editor does not run that check: a template can be saved with an invalid variable, and the error only shows up when you save the message of the campaign that uses it.
:::

:::tip Incomplete data
The platform only replaces variables the recipient has data for. If a user has no last name on file, for example, the message reaches them with the text `%{last_name}` in plain sight. Before using variables from optional fields, check that they are filled in for the segment you are targeting.
:::

A campaign's **Preview** resolves these variables with your own administrator account data and with a sample unsubscribe link, so it is useful to review the design, not to check what data each recipient will see.

## Unsubscriptions

In this section, you will find a list of users who have unsubscribed from email campaigns or notifications through their web profile.

Use the search bar to find a specific user. You can enter their name or email.

Clicking on a user's name allows you to view their [user profile](/en/platform/customers/users#user-profile) with all their platform activities.

At the end of each username, there is a button that allows you to re-enroll the user to any campaign on the site.

:::danger Danger
Re-enrolling a user without their consent can lead to legal issues. Be sure to review the mass email regulations in your country.
:::
