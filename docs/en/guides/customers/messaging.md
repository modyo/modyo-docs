---
search: true
---

# Messenger service

Messaging is a Modyo tool for those who want to campaign on the site, which allows us to send information to our customers in a massive way, aimed at specific targets.

<img src="/assets/img/customers/messaging/messaging-index.jpg" style="border: 1px solid #EEE; margin-top: 40px">

Modyo allows messages to be sent to platform users through two channels:

- **Emails**: Send campaigns to the email boxes registered in the user profiles. It is not necessary to enter the platform to see it.
- **Notifications**: Send notifications through the internal messaging system. To see them, the user has to enter the platform.

<img src="/assets/img/customers/messaging/messaging-index-options.jpg" width="400" style="border: 1px solid #EEE; margin-top: 40px">

## Campaigns

At first glance, we will be in the Campaigns section, where we can see through an administrator all the messages and information that we have sent to our clients.

At the top of the screen, there is a button that tells us that we see all the messages that have been sent in the system. If we want to filter by the type of message (Mail or Notification), we can click to change the view.

In the table, campaigns are sorted by the following columns.

- Name: Name given to the campaign. It can also contain the specific Target to which it was sent.
- Type: Type of message in which the campaign was sent.
- Sent: Total number of shipments made of the campaign. If the campaign was sent more than once, it is added.
- Last shipment: Date and time the campaign was last sent.
- Created on: Campaign creation date.

Next to each campaign, there is a button where we can perform two actions.

- Edit the campaign
- Delete the campaign

::: danger Danger
If you delete the campaign, there is no way to recover it. It will not be recorded in the system
:::

### Campaign

To make a campaign, we must click on the **+ New** button, located at the top of the Administrator view.

Subsequently, it will show a form that you must fill out with the following information:

- Name: Name that the campaign will have.
- Type: Format that the campaign will have (Mail or Notification).
- Subject: Text that will appear in the subject line that will be sent to users.
- Reply to: Email address to which people can reply **(Only for email campaigns)**
- Template: List of [templates](/guides/customers/messaging.html # templates) that will be used to send an email. If none is selected, it will be sent to a blank template. **(Only for mail campaigns)**
- Enable targeting: Checkbox to select a target to send the campaign. If this is left blank, the campaign will be sent to all users.

After filling in this information, you must click on the **Save and Continue** button, located at the top of the screen.

Now, a WYSIWYG editor will appear with the template you selected, which you can edit according to your requirements. To save, you just have to click on the button at the top of the screen.

When you do this, your campaign will be saved and you will get to the Shipping Status view, where you can send it.

### Shipping Status

<img src="/assets/img/customers/messaging/campaign-show.jpg" style="border: 1px solid #EEE; margin-top: 40px">

The Shipping Status view allows you to not only send a campaign you created for the first time. In this one, you can also find the statistics of the campaign that will allow you to see the performance of the content you sent.

At first glance, you will find the **Preview** button at the top of the screen, which allows you to see the email you will send.

In addition, you will find a drop-down menu that will take you to four sections:

<img width="300" src="/assets/img/customers/messaging/options-campaign.jpg" style="border: 1px solid #EEE; margin-top: 40px">

- Message Editor: Allows you to edit the message before sending it.
- Send test: Send a test email with the campaign to a specific address.
- Editor: It allows you to edit the properties of the campaign, including technical aspects such as the shipping address and the targets to receive.
- Delete: Delete the entire campaign.

In the top view, you can find campaign statistics.

::: warning Warning
If you haven't sent the campaign yet, the values will appear at zero.
:::

If you sent the campaign by mail, you can find the following figures:

- Reach: People who get the campaign.
- Shipments: Number of times the campaign has been sent
- Sent: Total number of emails sent.
- Open: Total number of open mails.
- Unique openings: Total number of users who once opened the campaign.
- Clicks: Number of times in which a link in the campaign has been clicked.
- Unique clicks: Number of users who have ever clicked on the campaign.
- Spam: Number of users whose mail reached the Spam box.

However, if you sent the campaign by Notification, you can find these figures:

- Reach: People who got the campaign.
- Shipments: Number of times the campaign was sent.
- Sent: Number of notifications sent.
- Open: Number of open notifications.


Below you can see the [Targets](/guides/customers/targets.html) to which the campaign arrived. If this section does not appear, it means that the campaign was sent to all contacts.

Finally, you can find a table with all the campaign shipments, which you can sort in ascending or descending order according to the following columns:


- Date: Day and time the shipment was made.
- Targets: Targets to which the specific shipment was made.
- Scope: Number of people who received the shipment.
- Sent: Number of emails/notifications sent.
- Status: State in which the shipment is located. There can be four: Completed, Pending, Failed or Canceled.

Then, you can find a button that will allow you to delete the registration.

::: danger Danger
Remember that if you delete the shipment, you will not be able to recover the record if you made any changes to it.
In addition, if you delete when the campaign is in the process of sending, it does not mean that the emails will not reach the users, but that the process will stop at the point where it is.
:::

If you click on the campaign names, you will go to the Message Deliveries section.

## Message Deliveries

In the Message Deliveries section, you can find the list of users who have received a message from the platform.

At first glance, you can find a list of all the users who have received a single email or notification, which is called "No Campaign".

"No Campaign" refers to an email or notification that has
been sent specifically to a user, on a specific date. They do not fall under the concept of Campaigns since these messages are personalized and contain information that is not sent to others. To learn more about how these messages work, go to the [Administration API section](/guides/platform/api.html).

In the first view, the administrator is sorted under the following categories.

- Name: Name of the user to whom the message is sent. The user's email is included, regardless of whether the message was via email or notification.
- Campaign: Campaign under which the message was sent.
- Type: Route through which the message was sent. Mail or notification.
- Shipping: Date on which the campaign started.
- Sent: Date the message was sent.
- Read: Alert if the user read or saw the message.

In addition, you can filter the data under the following filters:

- Campaign Type: All, mail or notification.
- Campaign Name: Name given to the campaign in general.
- Shipment: Date on which the campaign was sent.

Finally, you can see a search bar that will allow you to find a specific term.

## Templates

<img src="/assets/img/customers/messaging/messaging-templates-index.jpg" style="border: 1px solid #EEE; margin-top: 40px">

To make your message in the form of mail, you will need a template to add the content you want.

From this section, you can make mock-ups easily and then send them to users.

At first glance, you can find all the email templates that have been made.

Each of the templates will be ordered according to their name, in addition to being able to see the last time they were modified.

::: tip Tip
If you are going to reuse a template, remember to review its content in detail, to avoid temporary errors that may confuse the message you want to send to your users.
:::

Under each name, you will find a button that will allow you to edit. If you click on it, you will reach the editor where you made your template.

On one side, there is a button that displays a menu with the following options:

- Preview: Shows the template of the email template that is saved.
- Copy: You can make a copy of the template.
- Delete: The template is deleted

::: tip Tip
If you want to intervene temporarily and then return to a new one, it is better to make a copy and work on it, leaving the original unchanged.
:::

### Edit templates

<img src="/assets/img/customers/messaging/messaging-template-show.jpg" style="border: 1px solid #EEE; margin-top: 40px">

To make a template, you must first click on the **+ New** button, located at the top of the page.

When you click, the edit view will open where you must write the name you will give to the template.

::: tip Tip
Remember that this name is the one that you will have to look for in order to send the Campaign. For this, you should put a text that helps you identify well what is the template you want to use and not put something that can confuse you.
:::

Below, you will find a WYSIWYG editor, which will allow you to visually assemble what your email will look like and add the corresponding parameters that allow you to automatically personalize the message.

::: warning Warning
If you are campaigning, remember to add in the footer all the legal information required by the regulation of your country regarding mass mailings.

To automate the insertion of the Footer, read [Customers Settings](/guides/customers/users.html # customers-settings)
:::

To save the template, you must click on the **Save** button, located at the top of the page.

If you want to use the template in an email, you only have to select the name of the template, when you are preparing the campaign.

## Unsubscriptions

In this section, you will find a list of all users who have unsubscribed from email campaigns or notifications through their web profile.

To find a user, at the top of the screen there is a search bar where you can enter your name or email.

If you click on the name of the user, you can find the [user profile](/guides/customers/users.html # user-tab) with all the activities he has done on the platform.

Finally, at the end of each username, you will find a button that allows you to re-enroll in any campaign on the site.

::: danger Danger
Re-registration without the express authorization of the user can cause legal problems.
Check the regulation on mass mailings in each country.
:::
