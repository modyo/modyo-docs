---
search: true
---

# Realms

Realms are a grouping of users with similar features that are governed by the same configuration. Realms are especially useful when you have different groupings for sites within the same account that are not directly related, or to have a test site with test users without affecting productive user grouping.

Each realm has its own login, registration, integrations, forms, segments, and messaging settings. Therefore, keep in mind that when creating any of these items in a realm, it will only affect users of that realm and will have no effect on users in another realm.

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

::: tip Tip
Next to the **Apply** button, there is the **Save as Segment** button. This saves the filters you applied in a new Segment. Give your new segment a title and description. Later you can find it in the [Segments](/en/platform/customers/segments.html) section.
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

This user creation view may contain more fields depending on the configuration on the platform, available in the [Customers Settings] section (/es/platform/customers/realms.html #configuracion -de-customers). Some special fields, such as second last name, avatar, or date of birth, can be activated in the [Registration Form] section (/es/platform/customers/realms.html #formulario -registration). On the other hand, there are also **Custom Fields**, which can be created and modified in the [Custom Fields] section (/es/platform/customers/realms.html #campos -custom).


### Import users

The second option in the selector to add new users is to import from a CSV file. Clicking will open a view that lists a historical record of previous imports, if any. This list can be sorted by file name\ *.CSV or by import status, and can also be filtered by file name using the search bar above the table.

To make a new import, click on the upper right **+ Import** button. This opens a window where we can select and upload a local \*.CSV file that has a list of users and their attributes. It is important to check the box that indicates whether the file contains column headers or names, otherwise the headers themselves will be registered as a new user. Click **Accept** when ready.

Below you will see the main import view. On the left, there is a table with three main columns: the first contains the name of the imported column header (if it exists), the second contains some examples of the data in that column, and the third has a selector. This selector performs the imported value's respective assignment to the user's attribute on the platform.

In this view, you will proceed to assign each column in the\ *.CSV file to a respective attribute available on the platform.

::: tip Tip
The minimum attributes required to import a user are their first name (not to be confused with username) and their email address.
:::

In a sidebar on the right, you will see the main import settings. Here you can define if the file does not follow one of the common standards of the \*.CSV files. You can also set the code in which the file is located, and define attribute separation (which by default is a comma). Below, there's a box that indicates if you have already selected the main attributes required for import (name and email). The button for **Start importation** will only be enabled once you have included those import fields. Finally, four main import options:

- Activate user account
- Activate account and send email (customizable in [Correos](/es/platform/customers/realms.html #correos))
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
- Segments that include it (if available)

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
When modifying a user, you may change the list of Segments to which they belong.
:::


----

## Realm configuration

In this section you can largely configure interaction between users and the Modyo platform. Some settings are focused on the visual experience for the user, such as the selection of colors or post templates, while others are focused on registration, access control, and personalization. In particular, this second part is essential for the platform to function properly, so it is important to be cautious when modifying this section's settings.

### General

Here you can set up general aspects of realm, such as:

- **Name**.
- **Identifier**: Allows you to modify the URL of profile views, login, registration and password recovery of the realm.
- **Enable/Disable Credencials**: Allows you to disable Modyo credentials in this realm.
- **Modify user account activation type**:
  - Direct: Users that register will be able to log in directly
  - Activation email: Users that register must activate their account using a link sent to the email in order to sign in.
  - Moderate: Users that register will need to wait for a Modyo administrator to activate their account in order to sign in.
  - Disabled: Unable to register new users in the realm. Users already registered and activated will be able to log in without problems.
- **Extra attributes of the registration form**:
  - Enable second last name
  - Make the second last name required
  - Enable Email Confirmation: Enables an extra email field that the user must fill in, which must match the primary email field in order for the user to register.
  - Enable user avatar
  - Enable date of birth
  - Enable gender
- **Remove**: Allows complete removal of realm. This is a background process, so you may not see the realm disappear immediately after completing the action. To be able to delete the realm, you must enter the realm's full name to confirm the action.

:::danger danger
By disabling Modyo's credentials in the realm, you must make sure you have an identity provider set up for this realm, otherwise users will not be able to sign in.
:::

### Appearance

This section will allow you to modify some visuals of the realm users' registration, login, and profile views.

#### Primary Color

The primary color is the one shown in the main buttons of the session management, such as entry, registration, password modifications or other attributes. To modify it, enter the HEX Code of the color you want and click on the **Save** button at the top of the screen.

#### Show the logo

This option allows you to display the logo configured for the account in the session views, which will be displayed on the respective forms of those views. To change the logo, you must access the [Modyo Interface](/en/platform/core/the-modyo-interface.html).

#### Customize with CSS

If you want to have custom CSS in the session views, add it to the editor and click on the **Save** button.

It is common to have linked files in the Custom CSS. To link a file, click the button above the editor. This opens the [Asset Manager](/en/platform/content/asset-manager.html), where you can search for and copy the links of any files you need (by clicking the copy icon) to paste into the editor.

However, the editor will not automatically update the link. Instead, when you upload it, you must click on the paste button located on the side of each file, which will then provide the link within the page. You can then paste this address into the CSS code.

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

To sort the work, Modyo allows you to select the team members who will work on each realm, which controls access to the realm's different aspects.

To add a user to the realm, select the primary button **+ New** at the top right of the view. Select an administrator and assign them a role, then press**Add** to make that administrator part of the realm's work team.

You can modify the role of any of the associated administrators by clicking on their name. A modal will pop up, where you can select the new role. Tap **Save** to confirm the change.

If you want to remove a realm administrator, select the checks to the left of their name, and then click the button at the bottom of the**Delete** list.

The available roles are:

- **User**: You can add users, create, modify, and submit to review campaigns, forms, and segments.
- **Admin**: You can access all settings and sections of the realm, add and remove users and team members, as well as delete the realm.

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
- **This is a required field**: It implies that this value must be filled in when a user is modified or created, so that a user cannot be modified if this field does not have an associated value. In the event that the field is also visible and editable by users, this fields will appear on the registration form and will be required to create new users.
- **Visible to front end users**: It implies that it will be visible in the profile view.
- **Editable by front end users**: It implies that if it is visible, in addition, the user can modify its value.
- **Searchable by admins**: It implies that this value will be indexed and users can be found when searched in the users index for the value of that field.

In addition to the above, **Custom Fields** may be enabled or disabled. If enabled, then they can be used by administrators and depending on their configuration, they will be available to users. If a **Custom Field** is disabled, then it will not appear on any form, but its values will remain saved.

::: danger Danger
When a **Custom Field** is disabled, it can be deleted. By deleting a **Custom Field**, you permanently delete all the values that users had for that **Custom Field**.
:::

::: tip Tip
Apart from being able to save specific data in user profiles, [Segments](/en/platform/customers/segments.html) can be created using **custom field** data, allowing users to be segmented by customizable values.
:::
