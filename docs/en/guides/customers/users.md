---
search: true
---

# Users

Modyo allows you to make a detailed follow-up of what is happening inside the platform, through the Users section. Here you can see the list of internal and external users that are currently within the platform's database.

In this case, we see not only the members of our work group. We can also see the activity carried out by our external users that interact within the platform, such as customers.

## About the interface

At first glance, we can see a table with internal and external users that are registered within the platform. In this case, we can only see the first 30 records and then go to the next pages.

The administrator allows you to sort users by four columns:
- Name: User Name
- Registration date: Date of registration in the user database
- Last entry: Date of last entry to the platform
- Sessions: Number of logins made within the platform

At the top of the table, you will find filters that will allow you to find a group of users in a better way.

- Status: See active and inactive users.
- Verification: See the users who have confirmed their data on the platform.
- Targets: Users that are within a certain [Target](/guides/customers/targets.html)
- Advanced filters: Users who have a specific data or action within the platform.

::: tip Tip
If you need to make a Target with certain characteristics of some custom field, you can do it through Advanced Filters. When you select the filters, the number of matches will automatically appear.
At the bottom, this combined filter can be separated for a Target by clicking on the **Save as Target** button. You must give it a title and a description and then you can find it in the [Targets section](/guides/customers/targets.html)
:::

### Add a user

To add a new user contact, click on the **+ New** button at the top of the screen.

This function allows you to add in two ways: doing it individually or through a \ *. CSV file, which allows us to import a database in its entirety.

To add a user, the platform will ask you to complete the following fields:

- Name: Legal name of the user. **Required**
- Surname: Surname of the user.
- Mother's last name: user's mother's last name.
- User Name: Name within the platform **Required**
- Email: User email **Required**
- Password: Password for the user to enter the platform. The password cannot be less than 8 characters. **Required**
- Password confirmation: Repeat the password given by the administrator.
- Tags: Tags that serve to identify the user.

::: tip Tip
To send the password to the user's email, it is only necessary to assign the checkbox under the email field. When saving, an email will be sent to the box with the password to the user, which can be changed upon entering the platform.
:::

In addition, you can complete a series of custom fields that may be required. These can be configured in [Custom Fields](/guides/customers/users.html # custom-fields), which are found in the [Customer Configuration section](/guides/customers/users.html # customer-configuration ).

### Users Tab

By clicking on each of the users, you will be able to see on the sidebar a minifile with data that includes:

- User avatar (If it has been uploaded)
- Status within the platform: If it is active or inactive.
- Registration date on the platform
- Last entry to the platform
- Number of sessions done on the platform
- User verification status
- Targets in which it is included

In addition, you can see in a series of buttons on the side that redirect you to:

- Activity (on site)
- Forms (which have been sent by the user)
- Orders (purchases)
- Credentials
- Notes (in case you want to take into account something special about him)
- Edit (to change customer personal data)

#### Activity

In this section you will see a record of all the actions of a specific user that have been done within the platform, since it was started.

This registration does not imply a follow-up to the navigation of a user within the platform but only to the actions that are done within it.

This record cannot be deleted or edited by administrators.

#### Forms

This section shows you all the forms that the user has filled out within the platform, throughout all the time he has been registered within it.

Each of these links takes you to see their specific answers. If you want to know more, go to the [Forms section](/guides/customers/forms.html).

### Orders

In this section you can see all the orders and transactions that the user has made through the platform, if an eCommerce store is enabled.

If you want to know more about how the store works, go to the [Orders section](/guides/commerce/orders.html).

### Credentials

Here you will see all the credentials for which the user is enabled to enter the platform.

If the user enters only through his username and default password of the platform, this section will be empty.

If you want to enable revenue through integrations, check the [Integrations section](/guides/platform/integration.html).

### Notes

In this section you can add personalized notes about users, which can be used to redefine a user and add data that is not within the custom fields.

### Edit

If it is necessary to add or change user data, it is possible to do it from here. In addition, this serves to redefine a user who is within a Target and add information to custom fields.

For more information, go to [Custom Fields](/guides/customers/users.html # custom-fields).


----

## Customer Settings

In this section we can configure everything that has to do with the appearance of the platform towards our clients, their functions and the actions in which they can interact within the web.

Therefore, it is essential that this is constantly verified, to avoid problems with the income or transactions made online.

### General

Here we can customize the aesthetic vision of the platform that the user has, starting with the default colors. In addition, you can include a CSS template that gives a unique style adapted to the company or campaign you are interacting with.

To personalize the session, we first have to define what our primary color will be that will govern our platform. For this we just have to enter the HEX Code of the color we want and click on the **Save** button located at the top of the screen.

#### Customize with CSS

If you want to have a custom CSS that fits our needs in the profile, login and registration, we just have to paste the code in the editor that is in the window and click on the **Save** button.

It is common to have linked files in the CSS code. If we want to add one, we only have the button above the editor, which will take us to the [File Manager](/guides/content/asset-manager.html), which will allow us to upload any files we need without problems.

However, the editor will not automatically upload the link, but when we upload it, we will have to click on the paste button, which is located on the side of each file and that will give us the link to it within the page. With this address, we can paste it into our CSS code to use it.

::: tip Tip
If you have problems with keyboard codes when you are editing the CSS, you can click on the keyboard icon above the editor. This will display a series of button shortcuts that will allow you to easily handle editing.
:::

### Post

Modyo allows you to configure the address and appearance of the emails that will be sent to users.

To adjust the address that will appear as the sender that will send your mail, you just have to enter it in the "Default mail" field and click on the **Save** button.

What we will need in our platform is to enable and disable the sending of emails for specific functions that users request, and that do not depend on mass emails, such as:

- Activation email
- Imported user
- Welcome email
- Added by admin
- Password recovery
- Confirmation
- Waiting for approval
- Custom footer

To enable or disable the sending of these emails, we just have to click on the **Enabled/Disabled** button next to each function and click on the **Save** button.

#### Customize emails

The styles of the platform emails that we send can also be customized. To do this, we must have the HTML code that we want to include in them.

When you click to enable each of the emails, it will show a default editor in which we can paste our code.

::: danger Danger
It is essential that each email includes the customizable codes that allow the platform to include the random data of the user requesting the shipment.

To do this, we must insert in the code the attributes that are under the editor, and that we can easily copy and paste to locate them in the part we need.
:::

Each time a code change is made, click on the **Save** button at the top of the screen.

### Integrations

To simplify the entrance to the platform, it is possible to configure your entry through the APIs of certain services that allow universal entries.

The services compatible with entering Modyo are:

- Facebook
- Google
- LDAP
- SAML
- Oauth2
- OpenID Connect

It is necessary to have the API logged in and configured in the services to allow the use. Make sure all required fields are complete. For more information on integrations, go to the [Platform Integrations section](/guides/platform/integration.html)

### Records

The client registry within the platform must also be configured from this place. To do this, we must take into account credentials and enable redirection, at the login.

The first thing we can regulate is if we want to enable or disable platform credentials.

::: warning Warning
If we disable credentials, users can only enter through an SSO mechanism. Make sure you have it activated through [Integrations](/guides/platform/integration.html)
:::

We can also enable or disable a redirect for login. Remember that if login redirection is enabled, the login modality will be replaced by the URL that you must enter later.

The searches on the profile page can also be enabled or disabled, if any user needs to search for any data. If enabled, a search box will appear in the profile section. This search finds results in all the sites we have.

#### Account Activation

In addition, the customer registration form can be regulated, either through these services:

- Direct (without moderation or confirmation by email)
- Activation email
- Moderate (an administrator decides whether to approve the registration)
- Disabled (Only the administrator sends the record)

::: danger Danger
Remember that direct user registration could allow malicious robots to register on your site. We recommend that you register by email verification to protect your account against this potential risk.
:::

#### Avatar

If we want our users to have an Avatar, we have to upload one that is shown by default. In this option, we can upload a light image that will be displayed by default in the system when the user enters, so that he can change it later.

#### Registration Form

From here, we can also configure the registration form that each of our users enter. Here we can configure the different fields that are essential and that we want to appear on our form, such as:

- Enable second last name
- Second surname is required
- Enable email confirmation
- Signup avatar enabled
- Enable birth date
- Enable gender

To enable or disable any, just click on the checkbox next to each one and click on the **Save** button.

### Custom Fields

From here you can create custom fields that help identify the user's profile. Therefore, it is essential that these are correctly identified for their best use.

The types of custom fields you can add are:

- Check box
- Date
- Dropdown (drop-down list)
- Paragraph
- Number
- Choice
- Simple text

You can drag custom fields to sort them. Note that this is the order in which the fields will appear in the editing views and in the users profile.

All custom fields have certain standard properties:

- **Unique answer**: It implies that the custom field value must be unique for each user, preventing another equal value from being saved.
- **Required**: It implies that this value must be filled in when a user is modified or created, so that a user cannot be modified if this field does not have an associated value. In the event that the field is also visible and editable by users, this fields will appear on the registration form and will be required to create new users.
- **Visible to users**: It implies that the custom field will be visible in the profile view.
- **Editable by users**: It implies that if it is visible, the user can also modify the value of the custom field.
- **Searchable by admins**: It implies that this value will be indexed and users can be found when searching for users by the value of that field.

In addition to the above, custom fields may be enabled or disabled. If a custom field is enabled, then it can be used by admins and depending on its configuration, it will be available to users. If a custom field is disabled, then it will not appear on any form.

::: tip Tip
When you disable a custom field, it will stop appearing from all user editing, registration and profile forms, however, the data that was saved for users that already had a value will be saved.
:::

::: danger Danger
When a custom field is disabled, it can be deleted. By deleting a custom field, you will be removing all the values that users had for that custom field.
:::

Apart from being able to save specific values in users, [Targets] filters (/guides/customers/targets.html) can be created using custom field values, allowing users to segment by non-standard Modyo values.
