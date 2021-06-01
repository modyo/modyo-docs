---
search: true
---

# Realms

Kingdoms are a grouping of users with similar features that are governed by the same configuration. Realms are especially useful when you have different groupings for sites within the same account that are not directly related, or also, to have a test site with test users without affecting productive user grouping.

Each realm has its own login, registration, integrations, forms, targets, and messaging settings, so keep in mind that when creating any of these items in a realm, it will only affect users of that realm and will have no effect on users in another realm.

## Users

Through the Users section, you will be able to view and modify external users of the system. Those users are registered within the platform who log in to Modyo's sites, respond to forms or may receive email campaigns.

### About the interface

In the main view, we can see a list of all registered users within the platform, paginated with 30 users per page.

Along the top of the list are filters that allow you to refine the list of users by the following attributes:

- Status: Filter by active and inactive users.
- Verification: Filter by users who have (or have not) confirmed their data within the platform.
- Targets: Filter by users that match certain [Targets](/en/platform/customers/targets.html).
- Advanced filters: Filter by users who match specific filters based on data in their user profiles, e.g. birth date, or custom field value.
- Search: Filter by user name, last name, email, or username.

The Advanced Filters option opens a window which allows you to filter users by specific attributes, such as their age, or by data in a custom field. When adding a new advanced filter, the number of users that match the filter criteria appears automatically in the lower left of the window, next to the button to clear the filters. If you want to see the list of these filtered users, click on the **Apply** button.

::: tip Tip
Next to the **Apply** button, there is the **Save as Target** button. This saves the filters you applied in a new Target. Give your new target a title and description. Later you can find it in the [Targets](/en/platform/customers/targets.html) section.
:::

You can sort users by ascending or descending order by the following values:
- Name: User Name
- Sign Up Date: Date and time of registration in the platform.
- Last Login: Most recent date and time a user logged into the platform.
- Logins Count: Number of times a user has logged into the platform.


### Add a user

To add a new user, you must click on the **+ New** button at the top right of the screen.

A selector will open that shows the two possible ways to create users in the system: manually or by importing them from a \*.CSV file. The second option allows us to import multiple users simultaneously.

When you select "Add User", the platform will ask you to complete the following fields:

- First Name: Legal name of the user. **Required**
- Last Name: Last name of the user.
- Second Last Name: user's second last name (optional).
- User Name: Name within the platform **Required**.
- Email: User email **Required**.
- Password: Password for the user to enter the platform. The password must be at least 8 characters. **Required**.
- Password confirmation: Input the same password to confirm.
- Tags: Tags that serve to identify the user.

::: tip Tip
To send the password to the user's email, check the box under the password field. When saving, an email with the password will be sent to the user. They can change this password later.
:::

This user creation view may contain more fields depending on the configuration on the platform, available in the [Customers Settings] section (/es/platform/customers/realms.html #configuracion -de-customers). Some special fields, such as second surname, avatar, or date of birth, can be activated in the [Registration Form] section (/es/platform/customers/realms.html #formulario -registration). On the other hand, there are also **Custom Fields**, which can be created and modified in the [Custom Fields] section (/es/platform/customers/realms.html #campos -custom).


### Import users

The second option in the selector to add new users is to import from a CSV file. Clicking will open a view that lists a historical record of previous imports, if any. This list can be sorted by file name\ *.CSV or by import status, and through the search bar above the table you can filter by the file name.

To make a new import, click on the upper right **+ Import** button. This opens a window where we can select and upload a local \*.CSV file that has a list of users and their attributes. It is important to check the box that indicates whether the file contains column headers or names, otherwise the headers themselves will be registered as a new user. Click **Accept** when ready.

Below you will see the main import view. On the left, a table with three main columns appears, the first contains the name of the imported column header (if it exists), the second some examples of the data contained in that column, and the third a selector. This selector performs the respective assignment of the imported value to the user's attribute on the platform.

In this view, you will proceed to assign each column in the\ *.CSV file to a respective attribute available on the platform.

::: tip Tip
The minimum attributes required to import a user are their first name (not to be confused with username) and their email address.
:::

On the right, in a sidebar, you will see main import settings. Here you can define if the file does not follow one of the common standards of the\ *.CSV files, you can set the encoding in which the file is located, and also define attribute separation (which by default is a comma). A little below is a box indicating whether you have already selected the main attributes required for import (name and email). The button for **Start importation** will only be enabled once you have included those fields to be imported. Finally, four main import options:

- Activate user account
- Activate account and send email (customizable in [Correos](/es/platform/customers/realms.html #correos)
- Add users to sites
- Update existing users (in case they are already registered on the platform)

Clicking the **Start import** button at the top returns you to the main import view, and the first record in the table will be your import in process. There you can check the progress in the **Status** column.

In addition, you can add any required custom fields. These can be configured in [Custom Fields](/en/platform/customers/users.html#custom-fields), which are found in the [Customer Configuration section](/en/platform/customers/users.html#customer-configuration).


### Users tab

Clicking any user from the main list opens their profile. In each profile is the following information:

- User avatar (if one has been uploaded)
- Status within the platform: active or inactive.
- Signup Date
- Last Login
- Logins Count (number of sessions)
- User verification status
- Targets in which it is included (if available)

In the main section to the right are the following tabs:

- Activity (within the site)
- Responses to forms (which have been submitted by the user)
- Notes (to provide notes about this user in their profile, visible only to administrators)

#### Activity

In this section you will see a record of all the actions that the user has performed within the platform.

It should be noted that it is not a follow-up to the navigation of a user within the platform, but rather of the main interactions that it carries out within it. These records cannot be deleted or edited by administrators.

#### Form responses

This section shows you all the forms that the user has filled out within the platform. When you click on any of them, it takes you to see the answers of the user in said form. If you want to know more about the forms, go to the [Forms](/en/platform/customers/forms.html) section.

#### Notes

In this section you can add personalized notes about users, only administrators can add, view and delete them.

#### Additional options

In the upper right section you will find additional options with which you can disable and delete users:

* **Edit**: Opens the user edit modal. If you want to add more fileds to a user go to [Custom Fields](/en/platform/customers/users.html#custom-fields).
* **Disable**: You can disable users and prevent them from logging in.
* **Delete**: Once a user is deactivated, you can delete that user. This action can be executed by team members who are administrators of the account and also each user can delete their account from the additional options in their profile.

::: tip Tip
When modifying a user, you may change the list of Targets to which they belong.
:::


----

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

:::danger danger
By disabling the realm Modyo credentials, you must make sure you have an identity provider set up for this realm, otherwise users will not be able to sign in.
:::

### Appearance

This section will allow you to modify some visuals of the registration, login, and profile views of the realm users.

#### Primary Color

The primary color is the one shown in the main buttons of the session management, such as entry, registration, password modifications or other attributes. To modify it, enter the HEX Code of the color you want and click on the **Save** button at the top of the screen.

#### Show the logo

This option allows you to display the logo configured for the account in the session views, which will be displayed on the respective forms of those views. To change the logo, you must access the [Modyo Interface](/en/platform/core/the-modyo-interface.html).

#### Customize with CSS

If you want to have custom CSS in the session views, add it to the editor and click on the **Save** button.

It is common to have linked files in the Custom CSS. To link a file, click the button above the editor. This opens the [Asset Manager](/en/platform/content/asset-manager.html), where you can search for and copy the links of any files you need (by clicking the copy icon) to paste into the editor.

However, the editor will not automatically upload the link, but when you upload it, you have to click on the paste button, which is located on the side of each file and which will give the link to it within the page. With this address, you can paste it into the CSS code so you can use it.

::: tip Tip
If you have problems with keyboard codes when you are editing the CSS, you can click on the keyboard icon above the editor. This will display a series of button shortcuts that will allow you to easily handle editing.
:::

### Emails

Modyo allows you to configure the sender and appearance of the emails that will be sent to users.

To adjust the address that will appear as the sender that will send your mail, you just have to enter it in the "Default mail" field and click on the **Save** button.

What this section allows is to enable, disable and customize the sending of automatic emails after specific interactions made by users, the emails are as follows:

- Activation email: Sent once a user registration is completed, so that it confirms your data.
- Imported user: Sent once the user was imported
- Welcome email: Sent after completing a user registration at a specific site.
- Added by administrator: Sent once the administrator created the user manually.
- Password recovery: Sent when the user requested to recover their password.
- Confirmation: Sent once the user was confirmed and activated.
- Waiting for approval: Sent once the user has been confirmed, but you must wait for manual activation from an administrator.
- Custom footer: Custom footer for all the emails described above.

To enable or disable the sending of these emails, we just have to click on the **Enabled/Disabled** button next to each function and click on the **Save** button.

#### Custom emails

The styles of the platform emails that we send can also be customized. To do this, we must have the HTML code that we want to include in them.

When you click to enable each of the emails, it will show a default editor in which we can paste our code.

::: danger Danger
It is essential that each email includes the customizable codes that allow the platform to include the random data of the user requesting the mail.

To do this, we must insert attributes in the code under the editor, and we can easily copy and paste to locate them in the part we need.
:::

Each time a code change is made, click on the **Save** button at the top of the screen.

### Identity Providers

To simplify logging into the platform, it is possible to configure your login through the APIs of certain services that allow universal logins.

The services compatible with logging into Modyo are:

- Facebook
- Google
- LDAP
- SAML
- Oauth2
- OpenID Connect

It is necessary to have the API logged in and configured in the services to allow its use. Make sure all required fields are complete. For more information on integrations, go to the [Platform Integrations section](/en/platform/core/integrations)

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
- Dropdown (drop-down list)
- Paragraph
- Number
- Choice
- Simple Text Line

You can drag the **Custom Fields** to order them. Note that this is the order in which the fields will appear in the editing views and in the users profile.

All **Custom Fields** have certain standard properties:

- **Must be a unique response**: It implies that the value must be unique for each user, preventing another equal value from being saved.
- **Required**: It implies that this value must be filled in when a user is modified or created, so that a user cannot be modified if this field does not have an associated value. In case the field is also visible and editable by users, this fields will appear in the registration form and will be required to create new users.
- **Visible to users**: It implies it'll be visible in profile view.
- **User Editable**: It implies that if it is visible, in addition, the user can modify its value.
- **Searchable by administrators**: It implies that this value will be indexed and users can be found when searched from the user index of the Modyo administrator, by the value of that field.

In addition to the above, **Custom Fields** may be enabled or disabled. If enabled, then it can be used by administrators and depending on its configuration, it will be available to users. If a**Custom Field** is disabled, then it will not appear in any form, but its values will be kept saved.

:::danger danger
When a**Custom Field** is disabled, it can be deleted. By deleting a**Custom Field**, you will be forever deleting all the values that users had for that **Custom Field**.
:::

:::tip Tip
Apart from being able to save specific values to users, you can create [Targets](/es/platform/customers/targets.html) filters using the **Custom Fields** values, allowing users to segment by customizable values.
:::
