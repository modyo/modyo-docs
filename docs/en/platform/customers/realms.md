---
search: true
sidebarDepth: 3
---

# Realms

Realms are a grouping of users with similar features that are governed by the same configuration. Realms are especially useful when you have different groupings for sites within the same account that are not directly related, or to have a test site with test users without affecting productive user grouping.

Each realm has its own login, registration, integrations, forms, segments, and messaging settings. You should be aware that when creating any of these elements in a realm, it will only affect users of that realm and will have no effect on users of another realm.

## Users

Through the Users section, you will be able to view and modify the system's external users. Those who log in to Modyo's sites or respond to forms are registered within the platform.

### About the interface

In the main view, we can see a list of all registered users within the platform, paginated with 30 users per page.

Along the top of the list are filters that allow you to refine the list of users by the following attributes:

- Status: Filter by active and inactive users.
- Verification: Filter by users who have (or have not) confirmed their data within the platform.
- Segments: Filter by users that match certain [Segment](/en/platform/customers/segments.html).
- Advanced filters: Filter by users who match specific filters based on data in their user profiles, e.g. birth date, or custom field value.
- Search: Filter by user name, last name, email, or username.

The Advanced Filters option opens a window which allows you to filter users by specific attributes, such as their age, or by data in a custom field. When adding a new advanced filter, the number of users that match the filter criteria appears automatically in the lower left of the window, next to the button to clear the filters. If you want to see the list of these filtered users, click on the **Apply** button.

:::tip Tip
Next to the **Apply** button, there is the **Save as Segment** button. This saves the filters you applied in a new Segment. Give your new segment a title and description. Afterwards you can find it in the [Segments](/en/platform/customers/segments.html) section.
:::

You can sort users by ascending or descending order by the following values:
- Name: User Name
- Sign Up Date: Date and time of registration in the platform.
- Last Login: Most recent date and time a user logged into the platform.
- Logins Count: Number of times a user has logged into the platform.


### Add a user

To add a new user, click the **+ New User** button at the top right of the screen.

When you select "Add User", the platform will ask you to complete the following fields:

- Name: **[Required]** Legal name of the user.
- Last Name: Last name of the user.
- Second Last Name: user's second last name (optional).
- Username: **[Required]** Name within the platform
- Email: **[Required]** User's Email
- Password: **[Required]** Password for the user to enter the platform. The password cannot be less than 8 characters long.
- Password confirmation: **[Required]** A copy of the password given by the administrator.
- Tags: Tags that serve to identify the user.

:::tip Tip
To send the password to the user's email, check the box under the password field. When saving, an email with the password will be sent to the user. They can change this password later.
:::

This user creation view may contain more fields depending on the configuration in the platform, available in the [Realm Settings](/en/platform/customers/realms.html#realm-configuration). Some special fields, such as the second surname, avatar, or date of birth, can be activated in the [Registration Form](/en/platform/customers/realms.html#registration-form). On the other hand, there are also **Custom Fields**, which can be created and modified in [Custom Fields](/en/platform/customers/realms.html#custom-fields).


### Users tab

Clicking any user from the main list opens their profile. In each profile is the following information:

- Profile (general user data)
- Activity (within the site)
- Responses to forms (which have been submitted by the user)
- Notes (to provide notes about this user in their profile, visible only to administrators)

#### Profile
In this section you will find the general user data:

- User avatar (if one has been uploaded)
- Status within the platform: active or inactive.
- Signup Date
- Last Login
- Logins Count (number of sessions)
- User verification status
- Segments that it's included in (if available)

#### Activity

In this section you will see a record of all the actions that the user has performed within the platform.

:::tip Tip
Note that this section deals with the main interactions that this user performs within the platform. These records cannot be deleted or edited.
:::

#### Form responses

This section shows you all the forms that the user has filled out within the platform. When you click on any of them, it takes you to see the answers of the user in said form. If you want to know more about the forms, go to the [Forms](/en/platform/customers/forms.html) section.

#### Notes

In this section you can add personalized notes about users, only administrators can add, view and delete them.

#### Devices

In this section you will be able to see all devices that have an active session. Here an administrator can log the user off remotely. 

#### Additional options

In the upper right section you will find additional options with which you can disable and delete users:

* **Edit**: Opens the user edit modal. To add more fields to the form you can go to [Custom Fields](/en/platform/customers/realms.html#custom-fields).
* **Disable**: You can disable users and prevent them from logging in.
* **Delete**: Once a user is deactivated, you can delete that user. This action can be executed by team members who are administrators of the account and also each user can delete their account from the additional options in their profile.

:::tip Tip
When modifying a user, you may change the list of Segments to which they belong.
:::

## Realm Configuration

In this section you can largely configure interaction between users and the Modyo platform. Some settings are focused on the visual experience for the user, such as the selection of colors or post templates, while others are focused on registration, access control, and personalization. In particular, this second part is essential for the platform to function properly, so it is important to be cautious when modifying this section's settings.

### General

Here you can set up general aspects of realm, such as:

- **Name**.
- **Identifier**: Allows you to modify the URL of the realm's profile, login, registration, and password recovery views.
- **Enable/disable credentials**: Allows you to deactivate Modyo credentials in this realm to only log in through SSO. Consider having SSO enabled first before enabling this option.
- **Account Activation**:
  - Direct: Users who register will be able to log in directly.
  - Activation e-mail: Users who register must activate their account using a link that is sent to the email in order to log in.
  - Moderate: Users who register must wait for a Kingdom administrator to activate their account before they can log in.
  - Disabled: New users cannot be registered in the Realm. Users already registered and activated will be able to log in without problems.
- **Default Avatar Image**: This is the image that appears in the avatar of all users who do not have an image.
- **Extra attributes of the registration form**:
  - Enable second last name
  - Make the second last name required
  - Enable Email Confirmation: Enables an extra email field that the user must fill in, which must match the primary email field in order for the user to register.
  - Enable user avatar
  - Enable date of birth
  - Enable gender
  - Enable phone number
- **Delete realm**: Allows the complete removal of the realm. This is a background process, so you might not see the realm disappear immediately after you execute the action. In order to delete the realm, you must enter the full name of the realm to confirm the action.

:::danger Danger
By disabling Modyo's credentials in the realm, you must make sure you have an identity provider set up for this realm, otherwise users will not be able to sign in.
:::

### Appearance

This section will allow you to modify the primary color, logo, and add custom CSS for the registration, login, and profile views of users in the realm.

#### Primary Color

The primary color is the one shown in the main buttons of the session management, such as entry, registration, password modifications or other attributes. To modify it, enter the HEX Code of the color you want and click on the **Save** button at the top of the screen.

#### Show the logo of the account

This option allows you to display the logo configured for the account in session views, which will be displayed over the respective forms of those views. To change the logo, you need to access the [Modyo Interface](/en/platform/core/the-modyo-interface.html).

#### Custom CSS

If you want to have a custom CSS that fits your needs in session views, just paste the code into the editor in the window and click **Save**.

It is common to have linked files in CSS code. If you want to add one, click on the [File Manager](/en/platform/content/asset-manager.html) icon, which will allow you to upload the files you need.

Note that the editor will not automatically paste the link, but after uploading the file, you have to click on the paste button, which is located on the side of each file and which will give the link to it within the page. With this address, you can paste it into your CSS code so you can use it.

:::tip Tip
If you have problems with keyboard codes when you are editing the CSS, you can click on the keyboard icon above the editor. This will display a series of button shortcuts that will allow you to easily handle editing.
:::

### Emails

Modyo allows you to configure the address and appearance of the emails that will be sent to users in the realm.

To adjust the address that will appear as the sender that will send your mail, you just have to enter it in the "Default mail" field and click on the **Save** button.

What this section allows is to enable, disable and customize the sending of automatic emails after specific interactions made by users, the emails are as follows:

- Activation email: Sent once a user registration is completed, so that it confirms your data.
- Welcome Email: Sent after completing a user registration on a specific site.
- Added by Admin: Submitted once the administrator created the user manually.
- Password Recovery: Sent when the user requested to recover their password.
- Awaiting Confirmation: Sent once the user was confirmed and activated.
- Confirmation: Sent once the user is confirmed, but you must wait for manual activation from an administrator.
- Verification of email updates: Sent at the time of making any change of email address. 
- Custom footer: Custom footer for all the emails described above.


To enable or disable the sending of these emails, we just have to click on the **Enabled/Disabled** button next to each function and click on the **Save** button.

#### Custom emails

The styles of the platform emails that we send can also be customized. To do this, we must have the HTML code that we want to include in them.

When you click to enable each of the emails, it will show a default editor in which we can paste our code.

:::danger Danger
It is essential that each email includes the customizable codes that allow the platform to include the random data of the user requesting the mail.

To do this, we must insert attributes in the code under the editor, and we can easily copy and paste to locate them in the part we need.
:::

Each time a code change is made, click on the **Save** button at the top of the screen.

### Identity Providers

To simplify logging into the platform, it is possible to configure your login through the APIs of certain services that allow universal logins.

The services compatible with logging into Modyo are:

- Google
- SAML
- Oauth2
- OpenID Connect
- Keycloak
- Azure Active Directory

It is necessary to have the correct configuration of the associated service so that Modyo can connect to them. Make sure that all required fields are complete. For more information on integrations, go to [Identity Providers] (es/platform/core/integrations/identity-providers)

### Integrations

#### Zendesk

Manage To achieve an integration with Zendesk, the following data is required:

- Integration name
- Zendesk Shared Secret
- Integration URL: e.g. mysubdomain.zendesk.com

### OAuth client

Use an authentication client to send the access tokens from your integration to your resources. The following values are required:

- Name
- Redirection URI: This is the URI where the user will be redirected by the authentication server after successfully authenticating. 
- Logout URI: This is the URI where the user will be redirected by the authentication server after closing their session.
- Description
- Confidential: There are two types of Oauth clients, confidential or public. The confidential option is needed when your application is able to securely authenticate with the authentication server. Public clients are commonly applications that run on a mobile device or in a browser. 
- Scopes: If your OAuth2 authentication service uses multiple spaces or environments to separate users and you want to use a specific one in this integration, you must define it in this field.


### Team members

To organize the work, Modyo allows you to select the members of the team that will work in each realm and thus control access to the different aspects of the realm.

To add a user to the kingdom, select the primary button **+ Add Member** in the upper right part of the view, in the modal select an administrator, and assign a role, then press **Add** to make that administrator part of the kingdom's work team.

You can modify the role of any of the associated administrators by clicking on their name. A modal will pop up, where you can select the new role. Tap **Save** to confirm the change.

If you want to remove an administrator from the kingdom, select using the checkboxes to the left of their name, and then clicking on the button at the bottom of the **Delete** list.

The available roles are:

- **User**: You can add users, create, modify, and send for review campaigns, forms, and segments.
- **Admin**: You can access all settings and sections of the realm, add and remove users and team members, as well as delete the realm.

### Custom fields

From here you can create custom fields that help identify the user's profile. Therefore, it is essential that these are correctly identified for their best use.

The types of **Custom fields** you can add are:

- Checkbox
- Date
- Dropdown
- Paragraph
- Number
- Choice
- Simple Text Line

You can drag the **Custom Fields** to sort them. Note that this is the order in which fields will appear in edit views and in the user profile.

:::tip Tip
You can only create up to 20 custom fields for each Realm.
:::

All **Custom Fields** have certain standard properties:

- **The answer must be unique**: It implies that the value must be unique for each user, preventing another equal value from being saved.
- **This is a required field**: It implies that this value must be filled in when a user is modified or created, so that a user cannot be modified if this field does not have an associated value. If the field is also visible and editable by users, these fields will appear in the registration form and will be required to create new users.
- **Visible to site users**: It implies that it will be visible in the profile view.
    - **Editable by users of the sites**: It implies that it will be visible and can also be modified by the user.
- **Searchable by admins**: This value will be indexed and users can be found when searched from the user index of the Modyo administrator, by the value of that field.
- **Suggested Text**: This is the text that appears to provide an example.
- **Default Value**

In addition to the above, **Custom fields** can be enabled or disabled. If enabled, then it can be used by administrators and depending on their configuration, it will be available to users. If a **Custom field** is disabled, then it will not appear on any form, but its values will remain saved.

:::danger Danger
When a **Custom field** is disabled, it can now be deleted. By deleting a **Custom field**, you will be deleting all the values that users had for that **Custom field** forever.
:::

:::tip Tip
In addition to being able to save specific values to users, [Segments](/en/platform/customers/segments.html) filters can be created using the values of the **Custom fields**, allowing users to be segmented by customizable values.
:::

### Security

#### Password Policy

These are the options available for setting a password policy for Modyo Platform:

- Minimum password length value: This number dictates the minimum number of characters a password must have. A password must be between 12 and 128 characters long.
- Require at least one lowercase letter (a - z)
- Require at least one capital letter (A - Z)
- Require at least one non-alphanumeric character (! @ # $% ^ & * () _ + - = [] {} |)

#### reCAPTCHA

These are the options available when you enable reCAPTCHA in the kingdom.

- **reCAPTCHA enable**: Enables reCAPTCHA protection for user registration, form submission, login and password recovery.
- **Site Key**
- **Secret**
- **Threshold**

### Payment settings

These are the options available when you have Payment enabled in your kingdom. 

- **Currency format**: Modify the type of score displayed. 
- **Enable email sending**: If selected, the user will receive an email after paying for an order.
- **Email Subject**: Subject sent to all users.
- **Email body**: Body sent to all users.

