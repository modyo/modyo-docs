---
search: true
sidebarDepth: 3
---

# Realms

In Modyo, realms group together users with similar characteristics and are subject to the same configuration. Realms are useful for managing multiple groups of unrelated sites or when you need a test environment without affecting active users.

Each realm has its own settings for login, registration, integrations, forms, segments, and messaging.

:::tip Tip
Any change you make to one realm will only affect users in that realm, not those from others.
:::

## Summary

This section shows a summary of the main elements of the realm, including the number of:

- Users
- Segments
- Forms
- Campaigns

It also provides a chronological record of all activities carried out in the realm.

On the right side of the screen you can find some of the most important settings in the realm, such as the sites where the realm is used, identity providers and identifiers.

## Users

In this section, you can view and modify the system's external users. These are the users who register on the platform, access Modyo sites, respond to forms and can receive email campaigns.

### About the interface

The main view displays a table containing all the registered users on the platform. If there are more than 30 records, the table is paginated.

Use the filters at the top of the table to quickly find user groups. The available filters are:

- **Status:** Active and inactive users.
- **Verification:** Users who have confirmed their details on the platform.
- **Segments:** Users who belong to a specific [segment](/en/platform/customers/segments.html).
- **Tags: ** Users assigned platform-specific tags.
- **Search:** Filter users by name, last name, email or username.

You can click on the column headers to sort the users in the table by name, date of registration, date of last login to the platform, or by the number of sessions they have started.

For mass actions, check the box next to the name of one or more users and click the **Bulk Actions** button below the list of users, to:

- **Disable: ** Deactivate users.
- **Activate: ** Activate users.
- **Export: ** Export the list of users in Excel or CSV format.
- **Add or remove tags: ** Create new tags and assign or remove existing tags from the selected users.

### Add a user

To add a new user, click the **+ New User** button at the top right of the screen and complete the following fields:

- **Name: ** ** [Required] ** Legal name of the user.
- **Surname**
- **Maternal surname**
- **Username: ** ** [Required] ** Name within the platform.
- **Email** ** [Required] **
- **Password: ** ** [Required] ** Must contain at least 8 characters.
- **Password confirmation: ** ** [Required] **
- **Tags: ** Labels to identify the user.

:: :tip Tip
To send the password to the user's email, check the box below the email field. The user can change the password once they access the platform.
:::

To add additional fields to the new user form or select a default avatar for those users without an avatar, go to the **Register** section in [Realm Settings] (/en/platform/customers/realms.html #realm-settings).

To create and modify custom fields, go to the [Custom Fields] section (/es/platform/customers/realms.html #custom -fields).


### Users tab

Click on the side menu below the action column to view the details of a specific user or to deactivate the user. Select **View** to open that user's file. In the file you can see:

#### Profile
General user data:

- **User avatar: ** Only if it has been previously loaded.
- **In-platform status: ** Active or inactive.
- **Date of registration on the platform**
- **Last login to the platform**
- **Number of logins on the platform**
- **User Verification Status**
- **Segments in which it is included** (if available)

#### Activity

In this section you can see a record of all the actions that the user has performed within the platform.

:: :warning Attention
These records cannot be deleted or edited.
:::

#### Answers to forms

This section shows you all the forms that the user has filled out on the platform. Click on a form to see the user's responses in that form. To learn more about forms, go to the [Forms] section (/es/platform/customers/forms.html).

#### Notes

Here you can add personalized notes about users. Only administrators can add, view, and delete notes.

#### Devices

In this section you can see all the user's devices that have an active session. An administrator can log out the user remotely.

#### Additional options

Click on the menu in the upper right section to:

* **Edit: ** Open the user editing mode.

:::tip Tip
Modifying a user may result in the list of segments that user belongs to being modified.
:::

* **Disable: ** Deactivates a user and prevents them from being able to log in.
* **Delete: ** Allows you to delete a user. Only administrators can delete users.

:: :tip Tip
A user can delete their account from the additional options of their profile.
:::

## Redirect Login ##

In Modyo, you can customize the login page that your users access once they enter your site.

To redirect the login follow these steps:
1. Click on Channels in the side menu.
2. Select Sites.
3. Choose the site where you want to work.
4. In the side menu, click Templates.
5. In the header template, look for the line that contains the login information.
6. Redirect to the desired page using this code:
`login? redirect_to=/your-page` where “/your-page” is the URL of the page you want to redirect the login to.
7. Click **Save**.
8. Click **Publish**.

:: :tip Tip
Modyo is programmed so that the login information is in the header of the site. If your site is programmed differently, use the magnifying glass icon to find the term login in your templates.
:::

:::warning Attention
The login address must be a page within your account. You cannot redirect the login to an external URL.
:::

## Realm settings

In the Realm Settings section, you can customize the interaction between users and the Modyo platform.

Here you can modify both the user's visual experience and the settings related to registration, access control and personalization. It is important to exercise caution when making modifications to this section, as this may affect the proper functioning of the platform.


### General

In this section, you can configure general aspects of the realm, such as:

- **Title**
- **Identifier: ** The URL of the realm's profile, login, registration, and password recovery views.
- **Disable credentials: ** By checking this box, you deactivate Modyo credentials in the realm and only allow access via SSO.

:: :danger Danger
Before enabling the option to disable Modyo credentials in the realm, make sure that you have configured an SSO identity provider for the kingdom. Otherwise, users won't be able to sign in.
:::

- **After logging in, redirect to: ** Allows you to choose a specific URL to direct the user to, once they have entered the realm. If you don't activate the “Force Redirect” option, the user will be redirected to the URL entered only if it is not possible to return to the URL from which they logged in.
- **Force redirection to: ** By activating this option, the user will always be redirected to the URL specified in the login redirection field, regardless of where they started the session.
- **Account activation: **
  - Direct: Users who register can log in directly.
  - Activation email: Users who register must activate their account by clicking on a link sent to their email before being able to log in.
  - Moderate: Users who register must wait for a kingdom administrator to activate their account before they can log in.
  - Disabled: New users cannot be registered in the realm. Already registered and activated users can still log in.
- **Default Avatar Image: ** Image shown in the avatar of users who do not have a personalized image.
- **Registration form: ** Here you can enable or disable different attributes in the registration form, such as the second surname, email confirmation, user avatar, date of birth, gender and phone number.
- **Delete realm: ** Deletes the realm. This process is done in the background and you may not see the realm disappear immediately after executing the action. To confirm the deletion, you must enter the full name of the kingdom.



### Appearance

In this section, you can customize the appearance of the realm.

#### Primary Color

The primary color is the one shown on the main buttons related to the session, such as login, registration, password modifications and other attributes. To modify it, enter the HEX code of the desired color and click on the **Save** button located at the top of the screen.

#### Show the account logo

Click the**Upload** button to upload a custom logo. The logo will be displayed on the respective forms of these views.

#### Custom CSS

To use a custom CSS style sheet in session views, follow these steps:
1. Copy the CSS code you want to use.
2. Open the editor found in the window.
3. Paste the CSS code into the editor.
4. Click the **Save** button to save the changes.

Click the [File Manager](/en/platform/content/asset-manager.html) icon to upload linked files in the CSS code.

It's important to note that the editor doesn't automatically generate the link to the file after uploading it. After uploading the file, click the paste button on the side of each file to generate its link. Then, copy this link and paste it into the CSS code.

:: :tip Tip
If you have problems with keyboard codes when editing the CSS, click on the keyboard icon above the editor to display keyboard shortcuts that will make editing easier.
:::


### Mails

Modyo allows you to configure the shipping address and the appearance of the emails you send to users in the realm.

To adjust the address of the sender who sends your email, enter the address in the **"Default Email"** field and click the **Save** button.

Here you can also enable, disable and customize the sending of automated emails in response to specific actions taken by users. To enable or disable sending an email, click the Enabled/Disabled button next to each function and click the Save button.

 If you activate them, an email is sent when:


- **Activation Email: ** A user has completed their registration, to confirm their details.
- **Welcome Email: ** A user has registered on a specific site.
- **Added by the Admin: ** An administrator creates a user manually.
- **Password Recovery: ** A user requests to recover their password.
- **Awaiting Confirmation: ** The user has been confirmed and activated.
- **Confirmation: ** The user has been confirmed, but requires manual activation by an administrator.
- **Verification of email updates: ** A change has been made to the email address.

**Custom footer: ** Allows you to customize the footer of all the emails mentioned above.

To enable or disable sending an email, click the Enabled/Disabled button next to each function and click the **Save** button.

#### Personalize emails

You can also enter customizable codes in each email, these codes allow the platform to include user information in the designated field, at the time of sending.

:::danger Danger
It is essential that each email includes the customizable codes that allow the platform to include the random data of the user requesting the shipment.

To do this, insert the attributes below the editor into the code and paste them into the corresponding part of the code.
:::

Every time you make a change to the code, you must click on the **Save** button located at the top of the screen.

### Identity Providers

To facilitate access to the platform, you can set up login and registration through standard services.

The services compatible with Modyo login are:

- Google
- SAML
- Oauth2
- OpenID Connect
- Keycloak
- Azure Active Directory

You must have the correct configuration of the associated service so that Modyo can connect to it. Be sure to complete all required fields.

For more information on integrations, see the [Identity Providers] section (/es/platform/core/integrations/identity-providers.html)

### Integrations

Modyo allows you to integrate with other services and applications.

#### Zendesk

To integrate with Zendesk you need:

- Integration name
- Zendesk Shared Secret
- Integration URL: e.g. mysubdomain.zendesk.com

### OAuth client

Use an authentication client to send your integration access tokens to your resources; you need the following values:

- Name
- Redirect URI: The URI to which the authentication server will redirect the user after successful authentication.
- Logout URI: URI to which the authentication server will redirect the user after closing the session.
- Description
- Confidential: There are two types of OAuth clients, confidential or public. Select the confidential option if your application can securely authenticate with the authentication server. Public clients are usually applications that run on mobile devices or browsers.
- Scopes: If your OAuth2 authentication service uses multiple spaces or environments to separate users, and you want to use a specific one in this integration, define it in this field.

### Team members

Modyo allows you to select the team members that work in each realm, and thus control access to the different aspects of the realms.

To add a member to a realm, follow these steps:
1. Click the **+ Add Member** button at the top right.
2. In the modal, select a user and assign a role.
3. Click on **Add**.

To modify the role of a team member:

1. Click on the user's name in the modal.
2. Assign the desired role to the user.
3. Click**Update**.

You can choose between two roles:

- **Realm User**: Can add users, create, modify, and review campaigns, forms, and segments.
- **Realm Admin**: Has access to all the settings and sections of the realms, can add and remove users and team members. Can also delete the realm.

To remove an administrator from the realm, check the box to the left of their name and click the **Delete** button at the bottom.

### Custom fields

In this section, you can create custom fields to distinguish the user's profile. For best use, it is important that these fields are correctly identified.

The types of custom fields you can add are:

- Checkbox
- Date
- Drop-down list
- Paragraph
- Number
- Choice
- Simple Text Line

You can rearrange the custom fields by dragging them.  Remember that the order in which you arrange them will be the same order in which they appear in the editing views and in the user profiles.

:::tip Tip
You can create a maximum of 20 custom fields in each realms.
:::

Custom fields have standard properties that you should consider:

- **It must be a unique answer: ** The value must be unique for each user, avoiding duplicates.
- **This is a required field: ** Must be completed when modifying or creating a user. If the field is visible and editable to users, it will be displayed on the registration form and will be required to create new users.
- **Visible to site users: ** It will be visible in the user's profile.
    - **Editable by site users: ** Users can view and modify the value.
- **Searchable by administrators: ** The value will be indexed and administrators can search for users in the Modyo administrator's user index, by the value of this field.
- **Suggestion text: ** Provide an example or guide for the field.
- **Default Value**.

Customizable fields can be enabled or disabled. If they are enabled, an administrator can use them and, depending on their configuration, they can also be available to users.

When a customizable field is disabled, it doesn't appear on any form, however, its values are still saved.

:: :danger Danger
When a customizable field is disabled, it can be deleted.

Deleting a customizable field permanently deletes all user values associated with that field.
:::

:: :tip Tip
In addition to saving user-specific values, you can use customizable field values to create [segment] filters (/es/platform/customers/segments.html), allowing you to separate users based on their custom values.
:::

### Security

#### Password Policy

The options available to set a password policy on the Modyo platform are:

- Minimum password length value: Sets the minimum number of characters a password must have, between 12 and 128 characters.
- Require at least one lowercase letter (a - z)
- Require at least one capital letter (A - Z)
- Require at least one non-alphanumeric character (! @ # $% ^ & * () _ + - = [] {} |)

#### reCAPTCHA

You can enable reCAPTCHA in the realm or not, once enabled, enter:

- **Site Key**
- **Secret**
- **Threshold**

### Payment Setup

By enabling the payment feature in your realm, you have access to the following options:

- **Currency format**: Modify the type of score used.
- **Enable email**: When this option is selected, the user receives an email when paying for an order.
- **Email subject**: Header of the email sent to users.
- **Body of the mail**: Content of the message sent to users.

