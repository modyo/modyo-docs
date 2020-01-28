---
search: true
---

# Users

Through the Users section, you can see and modify the external users of the system. These users are those registered within the platform who log in to Modyo sites, respond to forms or can receive email campaigns.

## About the interface

In the main view, we can see a table with all registered users within the platform, paginated in case of having more than 30 records.

At the top of the table, you will find filters that will allow you to find a group of users in a better way. The available filters are as follows:
- Status: See active and inactive users.
- Verification: See the users who have confirmed their data on the platform.
- Targets: Users that are within a certain [Target](/guides/customers/targets.html)
- Advanced filters: Users who have a specific data or action within the platform.
- Search: Filter users by name, surname, email, username and uuid.

The Advanced Filters option will open a modal which will allow you to filter users by more specific attributes, such as their age, or Custom Fields. When adding a new advanced filter, the number of matches will appear automatically in the lower left of the modal, next to the button to clean the filters. If you want to see the list of these filtered users, you just have to click on the Apply button.

::: tip Tip
Next to the Apply button, there is the **Save as Target** button. This will save the filters you applied in a new Target, which you must give a title and description. Later you can find it in the [Targets] section (/guides/customers/targets.html)
:::

In the table itself, it is possible to sort the users by their respective values by clicking on the headers of each of the following columns:
- Name: User Name
- Registration date: Date of registration in the user database
- Last entry: Date of last entry to the platform
- Sessions: Number of logins made within the platform


### Add a user

To add a new user, you must click on the **+ New** button at the top right of the screen.

A selector will open that shows the two possible ways to create users in the system: manually or by importing them from a \ *. CSV file. The second option allows us to import multiple users simultaneously.

When you select add a user, the platform will ask you to complete the following fields:

- Name: Legal name of the user. **Required**
- Surname: Surname of the user.
- Mother's last name: user's mother's last name.
- User Name: Name within the platform **Required**
- Email: User email **Required**
- Password: Password for the user to enter the platform. The password cannot be less than 8 characters. **Required**
- Password confirmation: Repeat the password given by the administrator.
- Tags: Tags that serve to identify the user.

::: tip Tip
To send the password to the user's email, it is only necessary to check the checkbox under the email field. When saving, an email will be sent to the user created with your password, which you can change when entering the platform.
:::

This user creation view may contain more fields depending on the configuration on the platform, available in the section [Customers Configuration](/guides/customers/users.html # customers-configuration). Some special fields, such as the second last name, avatar or the date of birth, can be activated in the [Registration form] section (/guides/customers/users.html # registration-form). On the other hand, there are also **Custom Fields**, which can be created and modified in the [Custom Fields] section (/guides/customers/users.html # custom-fields).


### Import users

The second option of the selector to add new users is the import from a CSV file. Clicking will open a view that lists a historical record of previous imports, if any. This list can be sorted by file name \ *. CSV or by import status, also through the search bar on the table you can filter by file name.

To make a new import, we must click on the upper right button **Import**. This will open a modal which will allow us to select and upload the file \ *. CSV that has our list of users and their attributes. It is important to leave the box that indicates that the file contains column headings or names in case it is, or the headers will try to be included as a new user. Then we proceed to click on the **Accept** button.

Next we will see the main import view. On the left, a table with three main columns will appear, the first one contains the name of the header of the imported column (if any), the second some examples of the data that column contains, and the third one a selector. This selector performs the respective assignment of the imported value to the user attribute on the platform.

In this view we will proceed to assign each column of the \ *. CSV file to a respective attribute available on the platform.

::: tip Tip
The minimum attributes required for importation are the user's real name (not to be confused with username) and their email address.
:::

On the right, in a sidebar, you will see main import settings. Here you can define if the file does not follow one of the common standards of the \ *. CSV files, you can set the encoding in which the file is located, and also define separation of attributes (which by default is a comma). A little further down there is a box indicating if you have already selected the main attributes required for the import (name and email). The button for **Begin import** will only be enabled once you have included these fields to be imported. Finally, four main import options:

- Activate user account
- Activate account and send email (customizable in [Post office](/guides/customers/users.html # emails))
- Add users to sites
- Update users (in case they are already registered on the platform)

Finally, once the import is configured, by clicking the **Start import** button at the top, you will return to the main import view, and the first record in the table will be your import in process. There you can see the progress of it, indicated in the column of **Status**.

In addition, you can complete a series of custom fields that may be required. These can be configured in [Custom Fields](/guides/customers/users.html # custom-fields), which are found in the [Customer Configuration section](/guides/customers/users.html # customer-configuration ).


### Users Tab

By clicking, from the main list, in each of the users, the selected user file will open. In it you will see a sidebar that includes the following data:

- User avatar (If it has been uploaded)
- Status within the platform: If it is active or inactive.
- Registration date on the platform
- Last entry to the platform
- Number of sessions done on the platform
- User verification status
- Targets in which it is included (if available)

In the main section, you will see the following horizontal dividers, which are described below:

- Activity (on site)
- Forms (which have been sent by the user)
- Orders (purchases)
- Credentials
- Notes (in case you want to take into account something special about him)
- Edit (to change customer personal data)

#### Activity

In this section you will see a record of all the actions that the user has performed within the platform.

It should be noted that it is not a follow-up to the navigation of a user within the platform, but rather of the main interactions that it carries out within it. These records cannot be deleted or edited by administrators.

#### Forms

This section shows you all the forms that the user has filled out within the platform. When you click on any of them, it takes you to see the answers of the user in said form. If you want to know more about the forms, go to the [Forms] section (/guides/customers/forms.html).

### Orders

In this section you can see all the purchase orders and transactions that the user has made through the platform, if an eCommerce store is enabled.

If you want to know more about how the store works, go to the [Orders section](/guides/commerce/orders.html).

### Credentials

Here you will see all the credentials for which the user is enabled to enter the platform.

If the user enters only through his username and default password of the platform, this section will be empty. Otherwise, if the user uses some integration such as LDAP, or Google, that information will be displayed in this panel.

If you want to enable revenue through integrations, check the [Integrations section](/guides/platform/integration.html).

### Notes

In this section you can add personalized notes about users, only administrators can add, view and delete them.

### Edit

If it is necessary to add or change user data, it is possible to do so from here. The form is equivalent to that shown in the creation of a new user.

::: tip Tip
When modifying a user, you may change the list of Targets to which he belongs.
::

For more information, go to [Custom Fields](/guides/customers/users.html # custom-fields).


----

## Customer Settings

In this section we can largely configure the interaction between users and the Modyo platform. Some configurations are focused on the visual experience for the user, such as color selection or email templates, while others are focused on registration, access control, and personalization. In particular, this second part is essential for the proper functioning of the platform, so it is important to be cautious when modifying configurations in this section.

### General

Here we can customize the aesthetic part of the platform with which the user interacts, in particular the logon views, new user registration and profile, in general everything that has to do with the same session on the platform.

#### Primary Color

The primary color is the one shown in the main buttons of the session management, such as entry, registration, password modifications or other attributes. To Modify it, we just have to enter the HEX Code of the color we want and click on the **Save** button at the top of the screen.

#### Show logo

This option allows you to display the logo configured for the account in the session views, which will be displayed on the respective forms of those views. To change the logo, you must access the [Modyo Interface](/guides/platform/the-modyo-interface.html).

#### Customize with CSS

If we want to have a custom CSS that fits our needs in the session views, we just have to paste the code in the editor that is in the window and click on the **Save** button.

It is common to have linked files in the CSS code. If we want to add one, we only have the button above the editor, which will take us to the [File Manager](/guides/content/asset-manager.html), which will allow us to upload any files we need without problems.

However, the editor will not automatically upload the link, but when we upload it, we will have to click on the paste button, which is located on the side of each file and that will give us the link to it within the page. With this address, we can paste it into our CSS code to use it.

::: tip Tip
If you have problems with keyboard codes when you are editing the CSS, you can click on the keyboard icon above the editor. This will display a series of button shortcuts that will allow you to easily handle editing.
:::

### Post

Modyo allows you to configure the shipping address and appearance of the emails that will be sent to users.

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

The client registry within the platform must also be configured from this place. To do this, we must take into account credentials and enable redirection at the login.

The first thing we can configure is if we want to enable or disable platform credentials.

::: warning Warning
If we disable credentials, users can only enter through an SSO mechanism. Make sure you have it activated through [Integrations](/guides/platform/integration.html)
:::

We can also enable or disable a redirect for login. Remember that if login redirection is enabled, the login modality will be replaced by the URL that you must enter later.

Searches on the profile page can also be enabled or disabled. If enabled, a search box will appear in the profile section, this search finds results in all the sites that the user can access.

#### Account Activation

In this section you can configure the form of control in the customer registry. The alternatives are as follows:

- Direct (without moderation or confirmation by email)
- Activation email
- Moderate (an administrator decides whether to approve the registration)
- Disabled (Only the administrator sends the record)

::: danger Danger
Remember that direct user registration could allow malicious robots to register with personal emails that do not belong to them on the platform. We recommend that you register by email verification to protect accounts against this potential risk.
:::

#### Avatar

If we want our users to have an Avatar, we can upload one that is shown by default. In this option, we can upload a light image that will be displayed by default in the system when the user enters, so that he can change it later.

#### Registration Form

From here, we can also configure the registration form that each of our users enter. Here we can configure the different fields that are essential and that we want to appear on our form, such as:

- Enable second last name
- Second surname is required
- Enable email confirmation
- Enable avatar
- Enable birth date
- Enable gender

To enable or disable any, just click on the checkbox next to each one and click on the **Save** button.

### Custom Fields

From here you can create custom fields that help identify the user's profile. Therefore, it is essential that these are correctly identified for their best use.

The types of **Custom Fields** that you can add are:

- Check box
- Date
- Dropdown (drop-down list)
- Paragraph
- Number
- Choice
- Simple text

You can drag the **Custom Fields** to order them. Note that this is the order in which the fields will appear in the editing views and in the users profile.

All **Custom Fields** have certain standard properties:

- **Unique answer**: It implies that the value must be unique for each user, preventing another equal value from being saved.
- **Required**: It implies that this value must be filled in when a user is modified or created, so that a user cannot be modified if this field does not have an associated value. In the event that the field is also visible and editable by users, this fields will appear on the registration form and will be required to create new users.
- **Visible to users**: It implies that it will be visible in the profile view.
- **Editable by users**: It implies that if it is visible, in addition, the user can modify its value.
- **Searchable by administrators**: It implies that this value will be indexed and users can be found when searched for the value of that field.

In addition to the above, the **Custom Fields** may be enabled or disabled. If enabled, then it can be used by administrators and depending on its configuration, it will be available to users. If a **Custom Field** is disabled, then it will not appear on any form, but its values will remain saved.

::: danger Danger
When a **Custom Field** is disabled, it can be deleted. By removing a **Custom Field**, you will be forever removing all the values that users had for that **Custom Field**.
:::

::: tip Tip
Apart from being able to save specific values in users, [Targets] filters (/guides/customers/targets.html) can be created using the values of the **Custom Fields**, allowing users to be segmented by customizable values !.
:::
