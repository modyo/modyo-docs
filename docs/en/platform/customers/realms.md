---
search: true
---

# Realms

Kingdoms are a grouping of users with similar features that are governed by the same configuration. Realms are especially useful when you have different groupings for sites within the same account that are not directly related, or also, to have a test site with test users without affecting productive user grouping.

Each realm has its own login, registration, integrations, forms, targets, and messaging settings, so keep in mind that when creating any of these items in a realm, it will only affect users of that realm and will have no effect on users in another realm.

## Users

Through the Users section, you will be able to view and modify external users of the system. Those users are registered within the platform who log in to Modyo's sites, respond to forms or may receive email campaigns.

### About the interface

In the main view, you will see a table with all registered users within the platform, paginated in case you have more than 30 records.

At the top of the table, you will find filters that will allow you to find a group of users in a better way. The available filters are as follows:

- Status: View active and inactive users.
- Verification: View the users who have confirmed their data on the platform.
- Targets: Users found within a given [Target] (/es/platform/customers/targets.html)
- Advanced filters: Users who have a specific data or action within the platform.
- Search: Filter users by name, last name, email and username.

The Advanced Filters option will open a modal which allows you to filter users by more specific attributes, such as age, or Custom Fields. When you add a new advanced filter, the number of matches will automatically appear at the bottom left of the modal, next to the button to clean the filters. If you want to view the list of these filtered users, you just have to click on the**Applicar** button.

።: tip Tip
Next to the **Apply** button, there is the **Save as Target** button. It will save the filters you applied to a new Target, which you need to give a title and description. You can then find it in the [Targets] section (/es/platform/customers/targets.html)
።:

In the table itself, it is possible to sort users by their respective values by clicking on the headers of each of the following columns:
- Name: Username
- Registration Date: Date of enrollment in the user database
- Last entry: Date of last entry to the platform
- Sessions: Number of logins made within the platform


### Add a user

To add a new user, click the **+ New** button at the top right of the screen.

A selector opens showing the two possible ways to create users on the system: manually or by importing them from a\ *.CSV file. The second option allows you to import multiple users simultaneously.

When you select add a user, the platform prompts you to complete the following fields:

- Name: Legal name of the user. **Required
- Last name: Last name of the user.
- Maternal surname: Maternal surname of the user.
- User name: Name within the platform **Required
- Email: User's email **Required**
- Password: Password for the user to enter the platform. The password cannot be less than 8 characters. **Required
- Password Confirmation: Repeating the password given by the administrator.
- Tags: Tags that are used to identify the user.

።: tip Tip
To send the password to the user's email, you only need to check the checkbox under the email field. When saving, an email will be sent to the created user with his password, which will be able to change when entering the platform.
።:

This user creation view may contain more fields depending on the configuration on the platform, available in the [Customers Settings] section (/es/platform/customers/realms.html #configuracion -de-customers). Some special fields, such as second surname, avatar, or date of birth, can be activated in the [Registration Form] section (/es/platform/customers/realms.html #formulario -registration). On the other hand, there are also **Custom Fields**, which can be created and modified in the [Custom Fields] section (/es/platform/customers/realms.html #campos -custom).


### Import users

The second option in the selector to add new users is to import from a CSV file. Clicking will open a view that lists a historical record of previous imports, if any. This list can be sorted by file name\ *.CSV or by import status, and through the search bar above the table you can filter by the file name.

To make a new import, you must click on the top right button **Import**. This will open a modal which allows you to select and upload the\ *.CSV file that has the user list and its attribute. It is important to leave the box selected that the file contains headers or column names if so, or the headers will attempt to be included as a new user. Then you proceed to click on the**Accept** button.

Below you will see the main import view. On the left, a table with three main columns appears, the first contains the name of the imported column header (if it exists), the second some examples of the data contained in that column, and the third a selector. This selector performs the respective assignment of the imported value to the user's attribute on the platform.

In this view, you will proceed to assign each column in the\ *.CSV file to a respective attribute available on the platform.

።: tip Tip
The minimum attributes required for import are the real name of the user (not to be confused with user name) and his/her email.
።:

On the right, in a sidebar, you will see main import settings. Here you can define if the file does not follow one of the common standards of the\ *.CSV files, you can set the encoding in which the file is located, and also define attribute separation (which by default is a comma). A little below is a box indicating whether you have already selected the main attributes required for import (name and email). The button for **Start importation** will only be enabled once you have included those fields to be imported. Finally, four main import options:

- Activate user account
- Activate account and send email (customizable in [Correos] (/es/platform/customers/realms.html #correos)
- Add users to sites
- Update users (if they are already registered on the platform)

Finally, once the import is configured, by clicking the **Start import** button at the top, you will return to the main import view, and the first record in the table will be your import in process. There you can see the progress of the same, indicated in the column of **Status**.

In addition, you will be able to complete a number of custom fields that might be required. These can be configured in [Custom Fields] (/es/platform/customers/realms.html #campos -custom), which are located in the [Customers Settings section] (/es/platform/customers/realms.html #configuracion -de-customers).


### Users tab

Clicking, from the main list, on each of the users, the tab of the selected user will open. In it you will see a sidebar that includes the following information:

- User Avatar (If uploaded)
- Status within the platform: Whether it is active or inactive.
- Date of registration on the platform
- Last entry to the platform
- Number of sessions done on the platform
- User Verification Status
- Targets in which it is included (if available)

In the main section, you can see the following horizontal separators, which are described below:

- Activity (within the site)
- Responses to forms (which have been submitted by the user)
- Notes (in case you want to take into account something special about the user)

#### Activity

In this section you will see a record of all the actions that the user has performed within the platform.

It should be noted that it is not a follow-up to a user's navigation within the platform, but rather the main interactions that the user performs within the platform. These records cannot be deleted or edited by administrators.

#### Responses to forms

This section shows you all the forms that the user has filled out within the platform. By clicking on one of them, it takes you to see the user's answers in that form. If you want to know more about forms, go to the [Forms] section (/es/platform/customers/forms.html).

#### Notes

In this section you can add custom notes about users, only administrators can add, view, and delete them.

#### Additional options

In the upper right section you will find additional options with which you can disable and delete users:

* **Edit**: Open the user editing modal. To add more fields to the form you can go to [Custom Fields] (/es/platform/customers/realms.html #campos -custom).
* **Disable**: You can deactivate users and prevent them from logging in.
* **Dele**: Once a user is disabled, you can delete that user. This action can be performed by team members who are account administrators, and each user can delete their account from the additional options in their profile.

።: tip Tip
When you modify a user, you may change the Targets list to which it belongs.
።:


—

## Configuring realm

In this section you can largely configure interaction between users and the Modyo platform. Some settings are focused on the visual experience for the user, such as selection colors or post templates, while others are focused on registration, access control, and customization of the same. In particular this second part is essential for the proper functioning of the platform, so it is important to be cautious when modifying configurations in this section.

### General

Here you can set up general aspects of realm, such as:

- **Name**.
- **Identifier**: Allows you to modify the url of profile views, login, registration and password recovery of the realm.
- **Enable/Disable Credencials**: Allows you to disable Modyo credentials in this realm.
- **Modify user account activation type**:
  - Direct: Registering users will be able to log in directly
  - Activation email: Registering users must activate their account using a link sent to the email in order to sign in.
  - Moderate: Registering users will need to wait for a Modyo administrator to activate their account in order to sign in.
  - Disabled: Unable to register new users in the kingdom. Users already registered and activated will be able to log in without problems.
- **Extra attributes of the registration form**:
  - Enable second last name
  - Make the second surname required
  - Enable Email Confirmation: Enables an extra email field that the user must fill in and must match the primary email field for the user to register.
  - Enable user avatar
  - Enable date of birth
  - Enable gender
- **Remove**: Allows complete removal of realm. This is a background process, so you may not see realm disappear immediately after executing the action. To be able to delete the kingdom, you must enter the full name of the kingdom to confirm the action.

። :danger danger
By disabling the realm Modyo credentials, you must make sure you have an identity provider set up for this realm, otherwise users will not be able to sign in.
።:

### Appearance

This section will allow you to modify some visuals of the registration, login, and profile views of the realm users.

#### Primary Color

The primary color is shown in the main session handling buttons, such as login, registration, password modifications, or other attributes. To modify it you just have to enter the HEX Code of the color you want and click on the**Save** button at the top of the screen.

#### Show the logo

This option allows you to display the logo configured for the account in the session views, which will be displayed over the respective forms of those views. To change the logo, you must access the [Modyo Interface] (/es/platform/core/the-modyo-interface.html).

#### Customize with CSS

If you want to have a custom CSS that fits your needs in session views, you just have to paste the code into the editor that is in the window and click on the**Save** button.

It is common to have linked files in CSS code. If you want to add one, you just have the button that is above the editor, and that will lead to the [File Manager] (/es/platform/content/asset-manager.html), which will allow you to upload any file you need without problems.

However, the editor will not automatically upload the link, but when you upload it, you have to click on the paste button, which is located on the side of each file and which will give the link to it within the page. With this address, you can paste it into the CSS code so you can use it.

።: tip Tip
If you're having problems with keyboard codes when you're editing CSS, you can click on the keyboard icon above the editor. This will display a series of button shortcuts that will allow you to easily handle editing.
።:

### Post Office

Modyo allows you to configure the sending address and appearance of emails that will be sent to realm users.

To adjust the address that will appear as the sender that will send your email, just enter it in the “Default Mail” field and click on the**Save** button.

This section allows is to enable, disable, and customize the sending of automatic mails after specific user interactions, the emails are as follows:

- Activation email: Sent after a user registration has been completed, for the user to confirm your data.
- Imported User: Sent once the user was imported
- Welcome Email: Sent after a user registration is completed on a specific site.
- Added by administrator: Sent once the administrator created the user manually.
- Password Recovery: Sent when the user requested to recover their password.
- Confirmation: Sent once the user was confirmed and activated.
- Waiting for approval: Sent once the user has been confirmed, but you must expect manual activation from an administrator.
- Custom Footer: Custom Footer for all emails described above.

To enable or disable the sending of these emails, simply click the **Enabled/Disabled** button on the side of each feature and click on the**Save** button.

#### Customize emails

The email styles of the platform you send can also be customized. To do this, you must have the HTML code that you want to include in them.

When you click to enable each email, it will display a default editor into which you can paste the code.

። :danger danger
It is critical that each email includes customizable codes that allow the platform to include random data of the user requesting the shipment.

To do this, you must insert into the code the attributes that are under the editor, and which you can easily copy and paste to place them in the part you need.
።:

Each time you make a change to the code, click the **Save** button at the top of the screen.

### Identity Providers

To simplify the entry to the platform, it is possible to configure your entry and registration through certain standard services.

The services compatible with admission to Modyo are:

- Facebook
- Google
- LDAP
- SAML
- Oauth2
- OpenID Connect

It is necessary to have the correct configuration of the associated service that Modyo can connect to them. Make sure all required fields are complete. For more information about integrations, go to the [Platform Integrations section] (/en/platform/core/integrations)

### Team Members

To sort the work, Modyo allows you to select the team members who will work on each realm to control access to the different aspects of the realm.

To add a user to the kingdom, select the primary button **+ New** at the top right of the view, in the modal select an administrator and assign it a role, then press**Add** to make that administrator part of the kingdom's work team.

You can modify the role of any of the associated administrators by clicking on their name. A modal will be raised, where you can select the new role. Tap **Save** to confirm the change.

If you want to remove a realm administrator, select using the checks to the left of their name, and then clicking the button at the bottom of the**Dele** list.

The roles available are:

- **User**: You can add users, create, modify and submit to review campaigns, forms and targets.
- **Admin**: You can access all settings and sections of the kingdom, add and remove users and team members, as well as delete the kingdom.

### Custom Fields

From here you can create custom fields that help identify the user's profile. Therefore, it is essential that these are correctly identified for their best use.

The types of **Custom Fields** you can add are:

- Checkbox
- Date
- Dropdown (Drop-down List)
- Paragraph
- Number
- Choice
- Simple text

You can drag the**Custom Fields** to sort them. Note that this is the order in which fields appear in the edit views and in the user profile.

All **Custom Fields** have certain standard properties:

- **Unique answer**: It implies that the value must be unique to each user, preventing another equal value from being saved.
- **Required**: It implies that this value must be filled in when a user is modified or created, so that a user cannot be modified if this field does not have an associated value. In case the field is also visible and editable by users, this fields will appear in the registration form and will be required to create new users.
- **Visible to users**: It implies it'll be visible in profile view.
- **User Editable**: It implies that if it is visible, in addition, the user can modify its value.
- **Searchable by administrators**: It implies that this value will be indexed and users can be found when searched from the user index of the Modyo administrator, by the value of that field.

In addition to the above, **Custom Fields** may be enabled or disabled. If enabled, then it can be used by administrators and depending on its configuration, it will be available to users. If a**Custom Field** is disabled, then it will not appear in any form, but its values will be kept saved.

።: danger danger
When a**Custom Field** is disabled, it can be deleted. By deleting a**Custom Field**, you will be forever deleting all the values that users had for that **Custom Field**.
።:

።: tip Tip
Apart from being able to save specific values to users, you can create [Targets] filters (/es/platform/customers/targets.html) using the **Custom Fields** values, allowing users to segment by customizable values.
።:
