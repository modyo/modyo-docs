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

A selector will open that shows the two possible ways to create users in the system: manually or by importing them from a \*.CSV file. The second option allows us to import multiple users simultaneously.

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


### Import users

The second option in the selector to add new users is to import from a CSV file. Clicking will open a view that lists a historical record of previous imports, if any. This list can be sorted by file name \*.CSV or by import status, and can also be filtered by file name using the search bar above the table.

To perform a new import, you must click on the top right button **+ Import**. This will open a modal that allows you to select and upload the \*.CSV file that has the list of users and their attributes. It is important to leave the box that indicates that the file contains headers or column names selected if so, or the headers will attempt to be included as a new user. Then you proceed to click on the **Accept** button.

Below you will see the main import view. On the left, there is a table with three main columns: the first contains the name of the imported column header (if it exists), the second contains some examples of the data in that column, and the third has a selector. This selector performs the imported value's respective assignment to the user's attribute on the platform.

In this view, you will proceed to assign each column in the \*.CSV file to a respective attribute available on the platform.

:::tip Tip
The minimum attributes required to import a user are their first name (not to be confused with username) and their email address.
:::

On the right sidebar, you can see main import settings. Here you can define if the file does not follow one of the common standards for \*.CSV files, you can set the encoding in which the file is located, and also define attribute separation (which defaults to a comma). A little further down is a box indicating whether you have already selected the primary attributes required for the import (name and email). The **Start import** button will only be enabled once you have included those fields to be imported. Finally, you'll have to choose four main import options:

- Activate user account
- Activate account and send email (customizable in [Emails](/en/platform/customers/realms.html#emails))
- Add users to sites
- Update existing users (in case they are already registered on the platform)

Clicking the **Start import** button at the top returns you to the main import view, and the first record in the table will be your import in process. There you can check the progress in the **Status** column.

In addition, you will be able to complete a series of custom fields that may be required. These can be configured in [Custom Fields](/en/platform/customers/realms.html#custom-fields), which are located in the [Realm Configuration](/en/platform/customers/realms.html#realm-configuration).


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
- **Identifier**: Allows you to modify the url of the profile views, login, registration, and password recovery of the realm.
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
- **Delete Realm**: Allows complete deletion of realm. This is a background process, so you may not see the realm disappear immediately after executing the action. In order to remove the realm, you'll need to enter the full realm name to confirm the action.

:::danger Danger
By disabling Modyo's credentials in the realm, you must make sure you have an identity provider set up for this realm, otherwise users will not be able to sign in.
:::

### Appearance

This section will allow you to modify some visual aspects of the registration, login, and profile views of users in the realm.

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

Modyo allows you to configure the sender and appearance of the emails that will be sent to users.

To adjust the address that will appear as the sender that will send your mail, you just have to enter it in the "Default mail" field and click on the **Save** button.

What this section allows is to enable, disable and customize the sending of automatic emails after specific interactions made by users, the emails are as follows:

- Activation email: Sent once a user registration is completed, so that it confirms your data.
- Imported User: Sent once the user was imported.
- Welcome Email: Sent after completing a user registration on a specific site.
- Added by Admin: Submitted once the administrator created the user manually.
- Password Recovery: Sent when the user requested to recover their password.
- Awaiting Confirmation: Sent once the user was confirmed and activated.
- Confirmation: Sent once the user is confirmed, but you must wait for manual activation from an administrator.
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

- Facebook
- Google
- LDAP
- SAML
- Oauth2
- OpenID Connect

It is necessary to have the correct configuration of the associated service that Modyo can connect to them. Make sure all required fields are complete. For more information about integrations, see [Platform Integrations](/en/platform/core/integrations)

### Team members

To sort the work, Modyo allows you to select the team members who will work on each realm, which controls access to the realm's different aspects.

To add a user to the realm, click the **+ Add Member** primary button at the top right of the view, in the modal select an admin, and assign them a role, then press **Add** to make that admin part of the realm team.

You can modify the role of any of the associated administrators by clicking on their name. A modal will pop up, where you can select the new role. Tap **Save** to confirm the change.

If you want to remove a realm administrator, select the checks to the left of their name, and then click the button at the bottom of the **Delete** list.

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

- **Must be a unique response**: It implies that the value must be unique for each user, preventing another equal value from being saved.
- **This is a required field**: It implies that this value must be filled in when a user is modified or created, so that a user cannot be modified if this field does not have an associated value. In the event that the field is also visible and editable by users, this fields will appear on the registration form and will be required to create new users.
- **Visible to front end users**: This means that it will be visible in the profile view.
    - **Editable by front end users**: This means that it will be visible and can also be modified by the user.
- **Searchable by admins**: This value will be indexed and users can be found when searched from the user index of the Modyo administrator, by the value of that field.

In addition to the above, **Custom fields** can be enabled or disabled. If enabled, then it can be used by administrators and depending on their configuration, it will be available to users. If a **Custom field** is disabled, then it will not appear on any form, but its values will remain saved.

:::danger Danger
When a **Custom field** is disabled, it can be removed. By deleting a **Custom field**, you will be forever deleting all the values that users had for that **Custom field**.
:::

:::tip Tip
In addition to being able to save specific values to users, [Segments](/en/platform/customers/segments.html) filters can be created using the values of the **Custom fields**, allowing users to be segmented by customizable values.
:::
