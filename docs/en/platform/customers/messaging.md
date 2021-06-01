---
search: true
---

# Messaging

Messaging is a Modyo tool for those who want to launch campaigns, which allows us to send information to our customers or customer segments, aimed at specific targets.

<img src="/assets/img/customers/messaging/messaging-index.jpg" style="border: 1px solid #EEE; margin-top: 40px">

Modyo sends messages to platform users through two channels:

- **Emails**: Send campaigns to the emails registered in the user profiles.
- **Notifications**: Send notifications through Modyo's internal messaging system. To see a notification, users must enter the platform.

<img src="/assets/img/customers/messaging/messaging-index-options.jpg" width="400" style="border: 1px solid #EEE; margin-top: 40px">

## Campaigns

In messaging campaigns, administrators can see and review all the messages that you have sent to your clients.

At the top of the screen, there is a button that lets us filter by message type (Mailing or Notification).

In the table, campaigns are sorted by the following columns.

- **Name**: Name given to the campaign. It can also contain the specific Target to which it was sent.
- **Type**: Type of message in which the campaign was sent.
- **Sent**: Total number of times you have launched this campaign.
- **Last sent**: Date and time the campaign was last sent.
- **Created on**: Campaign creation date.

Next to each campaign, there is a button where we can perform two actions.

- **Edit the Campaign**
- **Delete the Campaign**

::: danger Danger
If you delete a campaign, there is no way to recover it.
:::

### Create a campaign

To create a campaign, we must click the green **+ New** button, located at the top of the Administrator view.

This opens a form that you must fill out with the following information:

- **Name**: Name that the campaign will have.
- **Type**: Format that the campaign will have (Mailing or Notification).
- **Subject**: Text that appears in the subject line that users receive.
- **Reply to email**: Email address to which people can reply **(Only for mailing campaigns)**
- **Template**: List of [templates](/en/platform/customers/messaging.html#templates) available for a mailing campaign. If none is selected, you are sent to an empty Message Editor to create your email template. **(Only for mailing campaigns)**
- **Enable targeting**: Checkbox to select a target to send the campaign. If this is left blank, you are choosing to send this campaign to all users.

After filling in this data, you must click on the**Save and Continue** button, located at the top of the screen.

Now, a WYSIWYG editor will appear with the template you selected, which you can edit according to your requirements. To save, simply click on the button at the top of the screen.

By doing this, your campaign will be saved and you'll get to the Shipping Status view, where you can send it.

### Shipment Status

 <img src="/assets/img/customers/messaging/campaign-show.jpg" style="border: 1px solid #EEE; margin-top: 40px"> 

The Shipping Status view allows not only to send a campaign you created for the first time. In this, you can also find campaign statistics that will allow you to see the performance of the content you sent.

At first glance, you will find at the top of the screen the**Preview** button, which allows you to see the email you will send.

In addition, you'll find a drop-down menu that will take you to four sections:

 <img width="300" src="/assets/img/customers/messaging/options-campaign.jpg" style="border: 1px solid #EEE; margin-top: 40px"> 

- **Message Editor**: Allows you to edit the message before sending it.
- **Send test**: Send a test email with the campaign to a particular address.
- **Editor**: Allows you to edit campaign properties, including technical aspects such as shipping address and targets to receive.
- **Dele**: Delete the entire campaign.

In the top view, you can find campaign statistics.

:::warning Attention
If you haven't sent the campaign yet, the values will appear at zero.
:::

If you mailed the campaign, you can find the following numbers:

- **Scope**: People to whom the campaign reaches.
- **Shipments**: Number of times the campaign has been sent
- **Sended**: Total number of mails sent.
- **Open**: Total number of open mails. 
- **Open uniques**: Total number of users who ever opened the campaign.
- **Clicks**: Number of times when a link in the campaign has been clicked.
- **One Clicks**: Number of users who have ever clicked on the campaign.
- **Spam**: Number of users that your email reached the Spam box.

Instead, if you sent the campaign by Notification, you can find these numbers:

- **Scope**: People to whom the campaign reached.
- **Shipments**: Number of times the campaign was sent.
- **Sended**: Number of notifications sent.
- **Open**: Number of open notifications.


Below you will be able to see the [Targets](/es/platform/customers/targets.html) to which the campaign was reached. If this section does not appear, it means that the campaign was sent to all contacts.

Finally you can find a table with all the campaign submissions, which you can sort ascending or descending according to the following columns:


- **Date**: The day and time the shipment was made.
- **Targets**: Targets to which the specific shipment was made.
- **Scope**: Number of people who received the shipment.
- **Sended**: Number of mails/notifications sent.
- **Status**: The condition in which the shipment is located. There can be four: Completed, Pending, Failed, or Cancelled.

Then, you can find a button that will allow you to delete the registration submission.

:::danger danger
Remember that if you delete the shipment, you will not be able to recover the registration if you made any changes to the shipment. 
Also, if you delete when the campaign is in the process of sending, it does not mean that emails will not reach users, but rather stop the process at the point where it is located.
:::

If you click on the campaign names, you'll go to the Message Deliveries section.

## Message Deliveries

In the Message Delivery section, you can find the list of users who have received a message from the platform. 

At first glance, you can find a list of all users who have received a single email or notification, which are called "No Campaign".

"No Campaign" refers to an email or notification that has 
was sent specifically to a user, on a certain date. They do not fall within the concept of Campaigns as these messages are personalized and contain information that is not sent to others. To learn more about how these messages work, go to the [Administration API section](/es/platform/core/api.html). 

In the first view, the administrator is sorted under the following categories.

- **Name**: Name of the user to whom the message is sent. The user's mail is included, regardless of whether the message was via mail or notification.
- **Campaign**: Campaign under which the message is sent.
- **Type**: Way by which the message is sent. Mail or notification.
- **Shipment**: Date on which the campaign was started.
- **Sended**: Date the message was sent.
- **Read**: Alert if the user read or saw the message.

In addition, you can filter the data under the following filters:

- **Campaign Type**: All, mail or notification.
- **Campaign Name**: Name given to the campaign in general.
- **Shipment**: Date on which the campaign was sent.

Finally, you can see a search bar that will allow you to find for a specific term.

## Templates

 <img src="/assets/img/customers/messaging/messaging-templates-index.jpg" style="border: 1px solid #EEE; margin-top: 40px"> 

To make your message in the form of an email, you'll need a template to be able to add the content you want.

From this section, you will be able to make mailing models easily and then send them to users.

At first glance, you can find all the post templates that have been made.

Each of the templates will be sorted according to their name, in addition to being able to see the last time they were modified.

:::tip Tip
If you are reusing a template, remember to review its content in detail, to avoid temporary errors that may confuse the message you want to send to your users.
:::

Under each name, you will find a button that will allow you to edit. If you click on it, you'll get to the editor where you made your template.

On the side, there is a button that displays a menu with the following options:

- **Preview**: Displays the mail template model that is saved.
- **Copy**: You can make a copy of the template.
- **Dele**: The template is deleted

:::tip Tip
If you want to intervene the template temporarily and then return to a new one, you better make a copy and work on it, leaving the original unchanged.
:::

### Edit Templates

 <img src="/assets/img/customers/messaging/messaging-template-show.jpg" style="border: 1px solid #EEE; margin-top: 40px"> 

To make a template, you must first click on the **+ New** button at the top of the page.

When you click, the edit view will open where you need to enter the name you will give to the template.

:::tip Tip
Remember that this name is the one you will need to search for sending when you do the Campaign. Therefore, you should put a text that helps you identify well which template you want to use and not put something that can confuse you.
:::

Below, you will find a WYSIWYG editor, which will allow you to visually assemble what your email will be like and add the corresponding parameters that allow you to automatically customize the message.

:::warning Attention
If you're campaigning, remember to add in the footer all the legal information required by your country's mass mail regulation.

To automate footer insertion, read [Customers Configuration](/es/platform/customers/realms.html #configuracion -de-customers)
:::

To record the template, you must click the**Save** button at the top of the page.

If you want to use the template in an email, simply select the template name when you're creating the campaign.

## Disregistrations

In this section, you will find a list of all users who have unsubscribed from email campaigns or notifications through their web profile.

To find a user, at the top of the screen there is a search bar where you can enter their name or email.

If you click on the user's name, you can find the [user profile](/es/platform/customers/realms.html #ficha -users) with all the activities you have done on the platform.

Finally, at the end of each user name, you'll find a button that allows you to re-enroll them to any campaign on the site.

:::danger danger
Making a re-enrollment without express authorization from the user, can cause legal problems.
Review the regulation on mass mailing in each country.
:::
