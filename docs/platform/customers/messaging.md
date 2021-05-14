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

- Name: Name given to the campaign. It can also contain the specific Target to which it was sent.
- Type: Type of message in which the campaign was sent.
- Sent: Total number of times you have launched this campaign.
- Last sent: Date and time the campaign was last sent.
- Created on: Campaign creation date.

Next to each campaign, there is a button where we can perform two actions.

- Edit the campaign
- Delete the campaign

::: danger Danger
If you delete a campaign, there is no way to recover it.
:::

### Create a Campaign

To create a campaign, we must click the green **+ New** button, located at the top of the Administrator view.

This opens a form that you must fill out with the following information:

- Name: Name that the campaign will have.
- Type: Format that the campaign will have (Mailing or Notification).
- Subject: Text that appears in the subject line that users receive.
- From: The name that appears in the "From field".
- Reply to email: Email address to which people can reply **(Only for mailing campaigns)**
- Template: List of [templates](/platform/customers/messaging.html#templates) available for a mailing campaign. If none is selected, you are sent to an empty Message Editor to create your email template. **(Only for mailing campaigns)**
- Enable targeting: Checkbox to select a target to send the campaign. If this is left blank, you are choosing to send this campaign to all users.

After filling in this information, you must click on the **Save and continue** button, located at the top of the screen.

Now, a WYSIWYG editor will appear with the template you selected, which you can edit according to your requirements. To save, you just have to click on the button at the top of the screen.

When you do this, your campaign is saved and you will get to the Campaign Status view, where you can send it.

### Campaign Status

<img src="/assets/img/customers/messaging/campaign-show.jpg" style="border: 1px solid #EEE; margin-top: 40px">

The Campaign Status view allows you to not only send a campaign, but also review the campaign metrics that will allow you to see the performance of the content you sent.

You can use the **Preview** button at the top of the screen, to review the email messaging and layout of your campaign.

In addition, you will find a drop-down menu that will take you to four sections:

<img width="300" src="/assets/img/customers/messaging/options-campaign.jpg" style="border: 1px solid #EEE; margin-top: 40px">

- Message Editor: Allows you to edit the message before sending it.
- Send Test: Send a test email with the campaign to a specific address.
- Edit: Allows you to edit the campaign properties.
- Delete: Delete the entire campaign.

In the Campaign Status view, you can find campaign statistics.

::: warning Warning
If you haven't sent the campaign yet, the values will appear at zero.
:::

If you sent the campaign by mail, you can find the following metrics:

- Reach: People who receive the campaign.
- Deliveries: Number of times the campaign has been sent.
- Sent: Total number of emails sent.
- Open: Total number of open mails.
- Unique openings: Total number of unique users who opened the campaign.
- Clicks: Number of times in which a link in the campaign has been clicked.
- Unique clicks: Number of unique users who have clicked on a link in the campaign.
- Spam: Number of users whose mail reached the Spam box.

If you sent the campaign as a Notification, these are your metrics:

- Reach: People who receive the campaign.
- Deliveries: Number of times the campaign has been sent.
- Sent: Number of notifications sent.
- Open: Number of open notifications.


Below you can see the [Targets](/platform/customers/targets.html) to which the campaign was sent. If this section does not appear, it means that the campaign was sent to all users.

At the bottom you can find a table with all the campaign deliveries, which you can sort in ascending or descending order according to the following columns:

- Date: Day and time the delivery was made.
- Targets: Targets to which the specific delivery was made.
- Scope: Number of people who received the delivery.
- Sent: Number of emails/notifications sent.
- Status: There are four delivery statuses: Completed, Pending, Failed or Canceled.

The last option is the Actions column where you can delete delete a delivery.

::: danger Danger
Remember that if you delete the delivery, it is unrecoverable.
In addition, if you delete a delivery when the campaign is in the process of sending, this does not mean that email messaging will not reach your users, only that the process will stop at the point where it is.
:::

If you click on the campaign dates, this takes you to the Message Deliveries section.

## Message Deliveries

In the Message Deliveries section, you can find the list of users who have received messages from the platform.

At first glance, you can find a list of all the users who have received a single email or notification, which is called "No Campaign".

"No Campaign" refers to an email or notification that has been sent specifically to a user, on a specific date. They do not fall under the concept of Campaigns since these messages are personalized and contain information that is not sent to others. To learn more about how these messages work, go to the [Administration API section](/platform/core/api.html).

The message deliveries list displays the following information:

- User: Name of the user to whom the message is sent. The user's email is included, regardless of whether the message was via email or notification.
- Campaign: Campaign under which the message was sent.
- Type: Route through which the message was sent. Mail or notification.
- Delivery: Date on which the campaign started.
- Sent: Date the message was sent.
- Read: Alert if the user read or saw the message.

In addition, you can filter the data under the following filters:

- Campaign Name: Name given to the campaign in general.
- Shipment: Date on which the campaign was sent.

You also have access to a search bar that to find campaigns or users by name and email.

## Templates

<img src="/assets/img/customers/messaging/messaging-templates-index.jpg" style="border: 1px solid #EEE; margin-top: 40px">

To create your campaign as an email, you will need a template for your content.

From the Templates section, you can make templates for your emails to send to users.

At first glance, you can find all the email templates available.

Each of the templates is ordered according to their name, in addition to being able to see the last time they were modified.

::: tip Tip
If you are going to reuse a template, remember to review its content in detail, to avoid temporary errors that may confuse the message you want to send to your users.
:::

Under each name, there is a button that allows you to edit. If you click on it, this opens the messaging template editor.

On one side, there is a button that displays a menu with the following options:

- Preview: Shows a preview of the email template.
- Copy: Makes a copy of the template.
- Delete: Deletes the template

::: tip Tip
If you want to temporarily change the template when sending a new campaign, it is better to make a copy of the template and work on it, leaving the original unchanged.
:::

### Edit templates

<img src="/assets/img/customers/messaging/messaging-template-show.jpg" style="border: 1px solid #EEE; margin-top: 40px">

To make a template, you must first click on the **+ New** button, located at the top of the page.

This opens the edit view where you must give your template a name.

::: tip Tip
Remember that this name is the one that you will have to look for in order to send a Campaign. Give it a name that helps you identify what it's for.
:::

Under the name is the Template content section, a WYSIWYG editor where you can visually assemble what your email will look like and add the corresponding parameters that allow you to automatically personalize the message.

::: warning Warning
If you are campaigning, remember to add all legal infomration required by your country's regulations regarding mass mailing in the footer.

To automate the insertion of the Footer, read [Customers Settings](/platform/customers/realms.html#customers-settings)
:::

To save the template, you must click on the **Save** button, located at the top of the page.

If you want to use the template in an email, you only have to select the name of the template, when you are preparing the campaign.

## Unsubscriptions

In this section, you will find a list of all users who have unsubscribed from email campaigns or notifications through their web profile.

To find a user, at the top of the screen there is a search bar where you can enter their name or email.

If you click on the name of the user, you can find the [user profile](/platform/customers/realms.html#user-tab) with all their platform activities.

Finally, at the end of each username, you will find a button that allows you to resubscribe them to recieve your campaign messages.

::: danger Danger
Resubscription without the express authorization of the user can cause legal problems.
Check the regulation on mass mailings in each country.
:::
