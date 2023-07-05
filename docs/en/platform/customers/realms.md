---
search: true
sidebarDepth: 3
---

# Realms

Realms are a group of users with similar characteristics that are subject to the same configuration. Realms are especially useful when you have several groupings of sites in an account that aren't directly related to each other, or to have a test site with test users without affecting productive users.

Each realm has its own settings for login, registration, integrations, forms, segments, and messaging. Keep in mind that creating any of these items in a realm will only affect users in that realm and will not affect users in other realms.

## Users

In the Users section, you can view and modify the system's external users. These are users who register on the platform and access Modyo sites, answer forms, or can receive email campaigns.

### About the interface

In the main view, you will find a table with all the registered users on the platform, paginated if you have more than 30 records.

At the top of the table, you have filters to quickly find groups of users. The available filters are:

- **Status**: Active and inactive users.
- **Verification**: Users who have confirmed their data on the platform.
- **Segments**: Users who belong to a specific [segment] (/es/platform/customers/segments.html).
- **Tags**: Users assigned specific tags on the platform.
- **Search**: Filter users by first name, last name, email, and username.



:::tip Tip
Next to the **Apply** button, there is the **Save as Segment** button. This saves the filters you applied in a new Segment. Give your new segment a title and description. Afterwards you can find it in the [Segments](/en/platform/customers/segments.html) section.
:::

In the table you can also sort users by their respective values; to do so click on the headers of the following columns:
- **Name**: User's name
- **Registration Date**: Date of registration in the user database
- **Last login**: Most recent date when the user accessed the platform.
- **Sessions**: Number of logins made to the platform

To execute mass actions, check the box next to the name of one or more users and click the **Bulk Actions** button below the list of users. Then, select one of the following options:
- **Deactivate**: Deactivate users
- **Activate**: Activate users
- **Export**: Exports the list of users in Excel or CSV format
- **Add or remove tags**: Create new tags and assign or remove existing tags from selected users.

### Add a user

To add a new user, click the**+ New User** button at the top right of the screen and fill in the following fields:

When you select "Add User", the platform will ask you to complete the following fields:

- **Name**: ** [Required] ** Legal name of the user.
- **Last Name**: Last name of the user.
- **Maternal Surname**: User's mother's last name.
- **Username**: ** [Required] ** Name within the platform.
- **Email**: ** [Required] ** User email.
- **Password**: ** [Required] ** Password that the user will use to access the platform, must contain at least 8 characters.
- **Password Confirmation**: ** [Required] ** Repeat the password entered in the previous field.
- **Tag**s: Tags to identify the user.

:: :tip Tip
To send the password to the user's email, check the box below the email field. When saving, the platform sends an email to the new user with their password. The user can change the password once they access the platform.
::

The user creation view can contain more fields depending on their configuration in the platform. In the [Realm Configuration] section (/es/platform/customers/realms.html #configuracion -of-kingdom) you can modify the fields of the new user form.

Some special fields, such as second surname, avatar or date of birth, can be activated in the [Registration Form] section (/es/platform/customers/realms.html #formulario -de-registration). You can also create and modify custom fields in the [Custom Fields] section (/es/platform/customers/realms.html #custom -fields).


### Users tab

Click on the side menu below the action column to view the details of a specific user or to deactivate the user. Select the view option to open that user's file. In the file, you can see:

- **Profile**: General user information.
- **Activity**: Log of user activity on the site.
- **Responses to forms**: Information collected from forms sent to the user.
- **Notes**: Space to record additional user information, if required.
- **Devices**: Devices and dates that the user has accessed the site.


#### Profile
In this section you can see general user data:

- User avatar: Only if it's been previously loaded.
- Status within the platform: Active or inactive.
- Date of registration on the platform.
- Last login to the platform.
- Number of logins on the platform.
- User verification status.
- Segments in which it is included (if available).

#### Activity

In this section you can see a record of all the actions that the user has performed within the platform.

:: :tip Tip
This section shows the main interactions that the user has had on the platform. These records cannot be deleted or edited.
::

#### Form responses

This section shows you all the forms that the user has filled out on the platform. Clicking on a form takes you to the user's answers in that form. To learn more about forms, go to the [Forms] section (/es/platform/customers/forms.html).

#### Notes

In this section, you can add personalized notes about users. Only administrators can add, view, and delete notes.

#### Devices

In this section you can see all the user's devices that have an active session. An administrator can remotely close the user's session. 

#### Additional options

In the menu in the upper right section, you can also execute these actions:

* **Edit**: Opens the user editing modal. To add more fields to the form, go to [Custom Fields] (/es/platform/customers/realms.html #custom -fields).
* **Deactivate**: Deactivates a user and prevents them from logging in.
* **Delete**: Once a user is deactivated, you can delete the user. You must be an administrator to delete a user. Also, the user can delete their account from the additional options in their profile.

:: :tip Tip
Modifying a user may result in the list of segments that user belongs to being modified.
::

## Realm Configuration

In the Realm Settings section, you can customize the interaction between users and the Modyo platform.

Here you will find options for both the visual user experience, such as the selection of colors and email templates, as well as settings related to registration, access control and personalization. It is important to exercise caution when making changes to this section, as they may affect the proper functioning of the platform.

### General

Here you can set up general aspects of the kingdom, such as:

- **Name**
- **Identifier**: Allows you to modify the URL of the kingdom's profile, login, registration, and password recovery views.
- **Enable/Disable Credentials**: Allows you to deactivate Modyo credentials in this realm and only allow access through SSO. Before you enable this option, make sure that you have an SSO identity provider configured.
- **Account Activation**:
  - Direct: Users who register can log in directly.
  - Activation email: Users who register must activate their account by clicking on a link sent to their email before being able to log in.
  - Moderated: Users who register must wait for a realm administrator to activate their account before they can log in.
  - Disabled: New users cannot be registered in the kingdom. Already registered and activated users can still log in.
- **Default Avatar Image**: Image shown on the avatar of users who do not have a custom image.
- **Additional attributes for the registration form**:
  - Enable second surname
  - Require second surname
  - Enable email confirmation: Enables an additional email field that the user must fill in and that must match the primary email field.
  - Enable user avatar
  - Enable date of birth
  - Enable gender
  - Enable phone number
- **Delete realm**: Deletes the realm. This process is performed in the background, so you may not see the realm disappear immediately after executing the action. To confirm the deletion, you must enter the full name of the realm.

:: :danger Danger
When deactivating Modyo credentials in the realm, make sure that you have set up an identity provider for this realm. Otherwise, users won't be able to log in.
::

### Appearance

In this section you can modify the primary color and the logo, in addition to adding custom CSS for the registration, login and profile views of users of the realm.

#### Primary Color

The primary color is the one shown on the main session management buttons, such as login, registration, password modifications, and other attributes. To modify it, enter the HEX code of the desired color and click the **Save** button located at the top of the screen.

#### Show account logo

This option allows you to display the logo configured for the account, in the session views. The logo will be displayed on the respective forms of these views. To change the logo, go to the [Modyo Interface] (/es/platform/core/the-modyo-interface.html).

#### Custom CSS

If you want to have a custom CSS style sheet that fits your needs in session views, follow these steps:
1. Copy the CSS code you want to use.
2. Open the editor found in the window.
3. Paste the CSS code into the editor.
4. Click the**Save** button to save the changes.

Click the [File Manager] icon (/es/platform/content/asset-manager.html) to upload linked files in the CSS code.

It's important to note that the editor doesn't automatically generate the link to the file after uploading it. After uploading the file, click the paste button on the side of each file to generate its link. Then, copy this link and paste it into the CSS code.

:: :tip Tip
If you have problems with the keyboard codes when editing the CSS, click the keyboard icon above the editor. This displays a series of button shortcuts that make editing easier.
::

## Redirect Login ##

In Modyo, you can customize the login page that your users access once they enter your site.

To redirect the login follow these steps:
1. Click on Channels in the side menu.
2. Select Sites.
3. Choose the site where you want to work.
4. In the side menu, click Templates.
5. In the header template, look for the line that contains the login information.
6. Redirects to the desired page using this code: 
`login? redirect_to=/your-page` where “/your-page” is the URL of the page you want to redirect the login to.
7. Click **Save**.
8. Click **Publish**.

:: :tip Tip
Modyo is programmed so that the login information is in the header of the site. If your site is programmed differently, use the magnifying glass icon to find the term login in your templates. 
::

:: :warning Attention
The login address must be a page within your account. You cannot redirect the login to an external URL.
::

### Emails

Modyo allows you to configure the sender address and the appearance of the emails you send to users within the realm.

To adjust the sender's address of your email, enter the address in the **"Default Email"** field and click the **Save** button.

Here you can also enable, disable and customize the sending of automatic emails in response to specific actions carried out by users. The options are: 

- **Activation Email**: It is sent once a user has completed their registration, so that they can confirm their data.
- **Welcome Email**: Sent when a user has registered on a specific site.
- **Added by the Admin**: Sent when an administrator creates a user manually.
- **Password Recovery**: Sent when a user requests to recover their password.
- **Awaiting Confirmation**: Sent when the user has been confirmed and activated.
- **Confirmation**: Sent when the user has been confirmed, but requires manual activation by an administrator.
- **Checking for email updates**: Sent when making a change to the email address.
- **Custom footer**: Allows you to customize the footer of all the emails mentioned above.

To enable or disable sending an email, click the Enabled/Disabled button next to each function and click the **Save** button.

#### Custom emails

You can enter customizable codes in each email, these codes allow the platform to include the user's information in the designated field, at the time of sending.

:::danger Danger
It is essential that each email includes the customizable codes that allow the platform to include the random data of the user requesting the sending.

To do this, insert the attributes that are below the editor into the code and paste it in the corresponding part of the code.
::

Every time you make a change to the code, you must click on the**Save** button located at the top of the screen.

### Identity Providers

To facilitate access to the platform, you can set up login and registration through standard services.

The services compatible with Modyo login are:

- Google
- SAML
- Oauth2
- OpenID Connect
- Keycloak
- Azure Active Directory

You must have the correct configuration of the associated service so that Modyo can connect to it. Make sure you complete all the required fields. For more information on integrations, see the [Identity Providers] section (es/platform/core/integrations/identity-providers)

### Integrations

#### Zendesk

To integrate with Zendesk, you need this information:

- Integration name
- Zendesk Shared Secret
- Integration URL: e.g. mysubdomain.zendesk.com

### OAuth client

Use an authentication client to send your integration's access tokens to your resources. You need the following values:

- Name
- Redirection URI: The URI to which the authentication server will redirect the user after successful authentication. 
- Logout URI: URI to which the authentication server will redirect the user after closing the session.
- Description
- Confidential: There are two types of Oauth clients, confidential or public. Select the confidential option if your application can securely authenticate with the authentication server. Public clients are usually applications that run on mobile devices or browsers. 
- Scopes: If your OAuth2 authentication service uses multiple spaces or environments to separate users, and you want to use a specific one in this integration, define it in this field.

### Team members

Modyo allows you to select the team members that work in each realm, and thus control access to the different aspects of the realms.

To add a member to a realm, follow these steps:
1. Click the**+ Add Member** button at the top right.
2. In the modal, select a user and assign a role.
3. Click on *Add**.

To modify the role of a team member, click on their name in the modal, assign the user the desired role and click **Update**.

You can choose between two roles:

- **Realm User**: Can add users, create, modify, and review campaigns, forms, and segments.
- **Realm Admin**: Has access to all the settings and sections of the realms, can add and remove users and team members. Can also delete the kingdom.

To remove an administrator from the realm, check the box to the left of their name and click the **Delete** button at the bottom. 

### Custom fields

In this section, you can create custom fields to distinguish the user's profile. It is important that these fields are correctly identified for best use.

The types of custom fields you can add are:

- Checkbox
- Date
- Drop-down list
- Paragraph
- Number
- Choice
- Simple Text Line

You can rearrange the custom fields by dragging them.  Remember that the order in which you arrange them will be the same order in which they appear in the editing views and in the user profiles.

:: :tip Tip
You can create a maximum of 20 custom fields in each realms.
::

Custom fields have standard properties that you should consider:

- **Must be a unique answer**: The value must be unique for each user, avoiding duplicates.
- **This is a required field**: Must be completed when modifying or creating a user. If the field is visible and editable to users, it will be shown in the registration form and will be mandatory when creating new users.
- **Visible to users of the sites**: It will be visible in the user's profile.
    - **Editable by site users**: Users will be able to view and modify the value.
- **Searchable by administrators**: The value will be indexed and administrators will be able to search for users in the Modyo administrator user index, by the value of this field.
- **Suggestion Text**: Provides an example or guide for the field.
- **Default Value**.

Customizable fields can be enabled or disabled. If they are enabled, an administrator can use them and, depending on their configuration, they may also be available to users. 

When a customizable field is disabled, it doesn't appear on any form, however, its values are still saved.

:: :danger Danger
When a customizable field is disabled, it can be deleted. 

Deleting a customizable field permanently deletes all user values associated with that field.
::

:: :tip Tip
In addition to saving specific values to users, you can use the values of the customizable fields to create filters of [segments] (/es/platform/customers/segments.html) segments, allowing you to segment users based on their custom values.
::

### Security

#### Password Policy

The available options for setting a password policy in the Modyo platform are:

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

The options available when you have payment enabled in your realms are: 

- **Currency format**: Modify the type of score displayed. 
- **Activate email sending**: When this option is selected, the user receives an email when paying for an order.
- **Email Subject**: Subject sent to all users.
- **Email body**: Content of the message sent to all users.

