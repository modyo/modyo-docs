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
If you delete a campaign, you won't be able to recover it, and its record will be deleted from the system.
:::

## Create a campaign
Campaigns allow you to contact your users directly via email or direct notifications, including support for WebPush notifications. To create a new campaign, click the **+ New Campaign** button.

### Mailing Campaigns

Email campaigns allow you to contact users via email. To set up an email campaign, fill in the fields requested in the form:

- **Name**: The identifier for the campaign.
- **Type**: Select **Email** to enable this option.
- **Subject**: The text that will appear in the message's subject line.
- **Reply To**: The email address for user responses.
- **Template**: Select a [template](/en/platform/customers/messaging.html#templates). If no template is selected, a blank one will be used.
- **Enable Segmentation**: Select a specific segment or leave this option unchecked to send the message to all users.

Click **Save and Continue** to open the WYSIWYG editor, where you can customize the selected template's content. Once edited, select **Save** to confirm the changes and access the **Send Status** view.


### Notification Campaigns
Notification campaigns allow you to send direct messages to users. To set up a notification campaign, fill in the following fields in the form:

- **Name**: The identifier for the campaign.
- **Type**: Select **Notification** to activate this option.
- **Subject**: The text that will appear in the sent message.

#### Enable WebPush support

Notification campaigns can send WebPush notifications. This functionality allows users to receive messages directly in their browser. To enable this feature, make sure you meet the following requirements:

- The web application that sends the notifications must be linked to the **Realm** where the campaigns are created.
- The web application must be in **Enabled** state.
- In the **PWA** section of the web application, select the **Enable top level service worker** and **Enable WebPush notifications** options.

In order for users to receive WebPush notifications, they must comply with the following:

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

Once you've sent a campaign, you can't resend it. If you want to send the same campaign again, select the clone option. This creates a new campaign with the same name data, segments and content, while the statistical information starts from scratch.

You can cancel a campaign when it is in queue or while it is being sent.

:::warning Attention
A campaign can only be resent if its sending was previously canceled while queued or in progress.

You must indicate whether you want to send messages again to all users or only to those who did not receive them before. In this case, the number of message deliveries may be greater than the total reach of users of the campaign.
:::

In campaigns sent by email, you can view:

- **Reach**: People who receive the campaign.
- **Send**: Total number of emails sent.
- **Open**: Total number of emails opened.
- **Unique opens**: Total number of users who opened the campaign.
- **Clicks**: Number of times a link in the campaign has been clicked.
- **Unique Clicks**: Number of users who have clicked on the campaign.
- **Spam**: Number of users whose email reached the spam folder.

If you sent the campaign by notification, you can view:

- **Reach**: People who receive the campaign.
- **Sent**: Number of notifications sent.
- **Opens**: Number of notifications opened.

If you send a campaign through [segments](/en/platform/customers/segments.html), you can see which group of users the campaign reached. If you do not see this section, it's because the campaign was sent to all contacts.

:::warning Attention
If you haven't yet sent the campaign, the values for that campaign will appear be zero.
:::

:::danger Warning
When deleting a campaign, you cannot recover the record if changes were made.

Deleting a campaign when it is in the process of being sent does not mean that it will not reach users, but that the process is stopped at the point where it currently is.
:::

Clicking on the name of a campaign takes you to the Message Deliveries section.

## Message deliveries

In the Message Deliveries section, you will find the list of users who have received a message from the platform. Here, you can see a list of all users who have received a unique email or notification, referred to as “No Campaign”.

"No Campaign" refers to an email or notification sent specifically to a user on a certain date. These messages are not considered campaigns, as they are personalized and contain information not sent to other users. For more information on how these messages work, see the [Management API](/en/platform/core/api.html).

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

- Click **+ New Template**.
- Give the template a descriptive name.
- Use the WYSIWYG editor to customize the design.

### Edit Templates

Each template has an edit button with the following actions:

- **Preview**: Shows the saved email template model.
- **Copy**: Allows you to copy the template.
- **Delete**: Deletes the template


:::warning Attention
When you create a campaign, remember to add in the footer all the legal information required by your country's regulation, regarding mass mailings.

To automate footer insertion, read [Realm Configuration](/en/platform/customers/settings.html#emails).
:::

## Unsubscriptions

In this section, you will find a list of users who have unsubscribed from email campaigns or notifications through their web profile.

Use the search bar to find a specific user. You can enter their name or email.

Clicking on a user's name allows you to view their [user profile](/en/platform/customers/users.html#user-profile) with all their platform activities.

At the end of each username, there is a button that allows you to re-enroll the user to any campaign on the site.

:::danger Warning
Re-enrolling a user without their consent can lead to legal issues. Be sure to review the mass email regulations in your country.
:::