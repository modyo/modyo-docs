---
search: true
---

# Messaging

Messaging is a Modyo tool that allows you to create campaigns in the site and send information to end users in bulk, aimed at specific segments.

 <img src="/assets/img/platform/newcampaign.png" style="border: 1px solid #EEE; margin-top: 40px">

In Modyo, you can send messages to users through two channels:

- **Emails**: Send campaigns to the email addresses registered in user profiles. It is not necessary to be logged into the platform to view the messages.
- **Notifications**: Send notifications through Modyo's internal messaging system. To see a notification, users must enter the platform.

 <img src="/assets/img/platform/messagedeliveries.png" width="400" style="border: 1px solid #EEE; margin-top: 40px">

## Campaigns

In the campaigns section, you can see, through an administrator, all the messages and information you have sent to end users.

Click the**All** button at the top of the screen to filter messages based on the channel through which they were sent.

Campaign messages are ordered in the following columns:

- **Name**: Name given to the campaign. It can contain the specific segment it was sent to.
- **Type**: Type of message in which the campaign was sent.
- **Sent**: Total number of emails sent for the campaign.
- **Last sent**: Date and time the campaign was sent.
- **Created on**: Campaign creation date.

In each row of the campaign, there is a button that allows you to perform two actions: 

- **Edit the Campaign**
- **Delete the Campaign**

:: :danger Danger
If you delete the campaign, it cannot be recovered and the campaign will not be registered in the system.
:::

### Create a campaign

Click the**+ New Campaign** button at the top of the Manager view to create a new campaign.

Fill in the information requested in the form:

- **Name**: Campaign name.
- **Type**: Choose if it will be sent by mail or notification.
- **Subject**: Text that will appear in the subject line of the message that will be sent to users.
- **Reply to**: Email address that people can reply to
 ** (for email campaigns only) **.
- **Template**: List of [templates] (/en/platform/customers/messaging.html #plantillas) that will be used to send an email. If one is not selected, Modyo will send a blank template** (only for email campaigns) **.
- **Enable Targeting**: Check box to select a segment to send the campaign to. If you leave the box blank, the campaign will be sent to all users.

Once you have completed the form, click on the**Save and Continue** button at the top of the screen.

This opens the WYSIWYG editor with the template you selected. Edit the template and click the**Save** button to confirm the changes and open the Shipping Status view to send the campaign. 


### Campaign Status

 <img src="/assets/img/platform/send.png" style="border: 1px solid #EEE; margin-top: 40px">

At the top of the screen, the**preview** icon allows you to view your campaign before sending it. Click the **Send** button to send the campaign.

The contextual button allows you to perform these actions:

- **Message Editor**: Edit your message before sending it.
- **Send test**: Send a test email with the campaign to a specific address.
- **Edit**: Edits the campaign properties, technical aspects such as the shipping address and the segments to receive.
- **Clone the campaign**: Copies all the content of a campaign.
- **Delete campaign**: Deletes a campaign.

 <img width="300" src="/assets/img/platform/menu.png" style="border: 1px solid #EEE; margin-top: 40px">

Once you've sent a campaign, you can't send it again. If you want to send the same campaign again, select the clone option. This creates a new campaign with the same name data, segments and content, while the statistical information starts from scratch.

You can cancel a campaign when it is in queue or while it is being sent.

:::warning Attention
A campaign can be resent only if you previously canceled sending the campaign when it was in queue or being sent. 

You must indicate whether you want to send messages again to all users or only to those who did not receive them before. In this case, the number of message deliveries may be greater than the total reach of users of the campaign.
:::

In campaigns sent by email, you can view:

 <img src="/assets/img/platform/campaign.png" style="border: 1px solid #EEE; margin-top: 40px">

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

If you send a campaign through [segments] (/en/platform/customers/segments.html), you can see which group of users the campaign reached. If you do not see this section, it's because the campaign was sent to all contacts.

:: :warning Attention
If you haven't yet sent the campaign, the values for that campaign will appear be zero.
:::

:: :danger Danger
When you delete a delivery, you can not recover the record if you made any changes to it. 

Deleting a campaign when it is in the process of being sent does not mean that it will not reach users, but that the process is stopped at the point where it currently is.
:::

Clicking on the name of a campaign takes you to the Message Deliveries section.

## Message deliveries

In the Message Deliveries section, you will find the list of users who have received a message from the platform. Here, you can see a list of all users who have received a unique email or notification, referred to as “No Campaign”.

“No Campaign” refers to an email or notification sent specifically to a user on a certain date. These messages are not considered Campaigns, because they are personalized and contain information that is not sent to other users. For more information on how these messages work, see the [Management API] (/en/platform/core/api.html). 

In the initial view, the messages are ordered in these categories:

- **Name**: Name of the user to whom the message is sent. The user's email is included, regardless of whether it was sent by email or notification.
- **Campaign**: Campaign under which the message was sent.
- **Type**: The route through which the message was sent, either email or notification.
- **Delivery**: Date on which the campaign started.
- **Sent**: Date the message was sent.
- **Read**: Alert if the user read or saw the message.

In addition, you can filter the data using the following filters:

- **Campaign Type**: All, mail or notification.
- **Campaign Name**: Name given to the campaign in general.
- **Shipment**: Date on which the campaign was sent.

The search bar allows you to search for a specific term.

## Templates

<img src="/assets/img/customers/messaging/messaging-templates-index.jpg" style="border: 1px solid #EEE; margin-top: 40px">

To create your message in the form of an email, you need a template in which to add your content.

In the templates section, you can make email mockups and then send them to users.

When you enter this section, you will find all the email templates created. The templates are ordered by name, and you can see the last time a template was modified.

:: :tip Tip
If you reuse a template, be sure to carefully review its content to avoid possible temporary errors that could cause confusion in the message you want to send to your users.
:::

Each template has an edit button underneath. Click on it to access the editor where you created the template. Click the drop-down menu button next to the edit button to access these options:

- **Preview**: Shows the saved email template model.
- **Copy**: Allows you to copy the template.
- **Delete**: Deletes the template

:: :tip Tip
To modify a template temporarily and then return to a new one, make a copy of the template and work on the copy, leaving the original one unchanged.
:::

### Edit Templates

<img src="/assets/img/customers/messaging/messaging-template-show.jpg" style="border: 1px solid #EEE; margin-top: 40px">

To create a template, click the**+ New Template** button at the top of the page.

In the editing view, designate a name for the template.

:: :tip Tip
When creating a Campaign, the name of your template will be used later for deliveries. Choose text that helps you clearly identify which template you want to use.
:::

The WYSIWYG editor allows you to visually create what your email will look like and add the corresponding parameters that allow you to automatically customize the message.

:: :warning Attention
When you create a campaign, remember to add in the footer all the legal information required by your country's regulation, regarding mass mailings.

To automate Footer insertion, read [Realms Configuration](/en/platform/customers/realms.html#emails)
:::

To save the template, click the**Save** button at the top of the page.

To use the template in an email, select the name of that template when designing the campaign.

## Unsubscriptions

In this section, you will find a list of users who have unsubscribed from email campaigns or notifications through their web profile.

Use the search bar to find a specific user. You can enter their name or email.

When you click on the user's name, you can see the [user's profile] (/en/platform/customers/realms.html #ficha -users) and all the activities they have performed on the platform.

At the end of each username, there is a button that allows you to re-enroll the user to any campaign on the site.

:::danger Danger
Resubscribing a user without the user's authorization may cause legal problems.
Check the regulations on mass mailings for each country.
:::
