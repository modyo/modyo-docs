---
search: true
---

# Realm Settings

In the realm's Settings section, you can customize the interaction between users and the Modyo platform.

Here you can modify both the user's visual experience and the settings related to registration, access control, and personalization. It is important to exercise caution when making modifications to this section, as this may affect the proper functioning of the platform.


## General

In this section, you can configure general aspects of the realm, such as:

- **Title**
- **Identifier**: The URL of the realm's profile, login, registration, and password recovery views.
- **Disable credentials**: By checking this box, you deactivate Modyo credentials in the realm and only allow access via SSO.

:::danger Danger
Before enabling the option to disable Modyo credentials in the realm, make sure that you have configured an SSO identity provider for the realm. Otherwise, users won't be able to sign in.
:::

- **After logging in, redirect to**: Allows you to choose a specific URL to direct the user to, once they have entered the realm. If you don't activate the “Force Redirect” option, the user will be redirected to the URL entered only if it is not possible to return to the URL from which they logged in.
- **Force redirection to**: By activating this option, the user will always be redirected to the URL specified in the login redirect field, regardless of where they started the session.
- **Account Activation**:
  - Direct: Users who register can log in directly.
  - Activation email: Users who register must activate their account by clicking on a link sent to their email before being able to log in.
  - Moderate: Users who register must wait for a realm administrator to activate their account before they can log in.
  - Disabled: New users cannot be registered in the realm. Already registered and activated users can still log in.
- **Default Avatar Image**: Image shown on the avatar of users who do not have a custom image.
- **Enable Soft Login**: By activating this option you can access your account without entering your credentials each time. You will receive a security code in your email for easy login without the need for passwords.
- **Registration form**: Here you can enable or disable different attributes in the registration form, such as the second surname, email confirmation, user avatar, date of birth, gender, and phone number.
- **Delete realm**: Deletes the realm. This process is performed in the background, so you may not see the realm disappear immediately after executing the action. To confirm the deletion, you must enter the full name of the realm.


## Redirect Login ##

In Modyo, you can customize the login page that your users access once they enter your site.

To redirect the login follow these steps:
1. Click on Channels in the side menu.
2. Select Sites.
3. Choose the site you want to work on.
4. In the side menu, click Templates.
5. In the header template, look for the line that contains the login information.
6. Redirect to the desired page using this code:
`login?redirect_to=/your-page` where “/your-page” is the URL of the page you want to redirect the login to.
7. Click **Save**.
8. Click **Publish**.

:::tip Tip
Modyo is programmed so that the login information is in the header of the site. If your site is programmed differently, use the magnifying glass icon to find the term login in your templates.
:::

:::warning Attention
The login address must be a page within your account. You cannot redirect the login to an external URL.
:::





### Appearance

In this section, you can customize the appearance of the realm.

#### Primary Color

The primary color is the one shown on the main buttons related to the session, such as login, registration, password modifications and other attributes. To modify it, enter the HEX code of the desired color and click on the **Save** button located at the top of the screen.

#### Show the account logo

Click the**Upload** button to upload a custom logo. The logo will be displayed on the respective forms of these views.

#### Custom CSS

To use a custom CSS style sheet in session views, follow these steps:
1. Copy the CSS code you want to use.
2. Opens the editor in the window.
3. Paste the CSS code into the editor.
4. Click the **Save** button to save the changes.

Click the [File Manager](/en/platform/content/asset-manager.html) icon to upload linked files in the CSS code.

It's important to note that the editor doesn't automatically generate the link to the file after uploading it. After uploading the file, click the paste button on the side of each file to generate its link. Then, copy this link and paste it into the CSS code.

:::tip Tip
If you have problems with keyboard codes when editing the CSS, click on the keyboard icon above the editor to display keyboard shortcuts that will make editing easier.
:::


### Mails

Modyo allows you to configure the sending address and the appearance of the emails you send to users in the realm.

To modify the address of the sender who sends your email, enter the address in the **"Default Email"** field and click the **Save** button.

Here you can also enable, disable and customize the sending of automated emails in response to specific actions taken by users. To enable or disable sending an email, click the Enabled/Disabled button next to each function and click the Save button.

 If you activate them, an email is sent when:


- **Activation Email**: A user has completed their registration, to confirm their details.
- **Welcome Email**: A user has registered on a specific site.
- **Added by the Admin**: An administrator creates a user manually.
- **Password Recovery**: A user requests to recover their password.
- **Awaiting Confirmation**: The user has been confirmed, but requires manual activation by an administrator.
- **Confirmation**: The user has been confirmed and activated.
- **Verification of email update**: A change has been made to the email address.

**Custom footer**: Allows you to customize the footer of all the emails mentioned above.

To enable or disable sending an email, click the Enabled/Disabled button next to each function and click the **Save** button.

#### Personalize emails

You can also enter customizable codes in each email, these codes allow the platform to include user information in the designated field, at the time of sending.

:::danger Danger
It is essential that each email includes the customizable codes that allow the platform to include the random data of the user requesting the sending.

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

For more information on integrations, see the [Identity Providers](/en/platform/core/integrations/identity-providers.html) section



## Integrations

Modyo allows you to integrate with other services and applications.

### Zendesk

To integrate with Zendesk you need:

- Integration name
- Zendesk Shared Secret
- Integration URL: e.g. mysubdomain.zendesk.com

### Salesforce

A Salesforce integration with Modyo allows you to link your Modyo users to your Salesforce contacts.

To carry out this integration you must:

1. Enable the use of the Salesforce API in Modyo. This allows you to create, update, or delete Salesforce contacts directly from Modyo.
1. Enable the Modyo API in Salesforce. This way, you can create, update, or delete Modyo users from Salesforce.

#### Enable the use of the Salesforce API in Modyo.
To enable the use of the Salesforce API in Modyo, you must first create a Connected App in Salesforce. Follow this guide for detailed information on how to create a Connected App and obtain the credentials needed to use the Salesforce API from an external application.

In Salesforce, you should get:
- **Consumer Key** Click the **Copy** button under the key in Salesforce to copy it.
- **Private Key** To find this text in Salseforce, click the **Select File** button on the document in .crt format and copy the text. The text should look like this:

```
-----BEGIN PRIVATE KEY-----

MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC9ZT/LC/DtmxCm
......
......
S/nw7vM0Lsv3Ri3BURATfMXx+Q==

-----END PRIVATE KEY-----
```
- **Email of a user with access to the Connected App** Confirm in Salesforce if a user has access to the Connected App in Setup > User > Profile.

Once you have obtained this information in Salesforce, go to **Modyo** and perform these steps:

1. Enter the realm you want to link.
1. Access the realm settings.
1. Click on **Integrations**.
1. Click **Add** and select the Salesforce integration.
1. Enter a name for the integration. It can be any text that is at least 3 characters long.
1. In the **Subject** field, use the email of a user who has access to the Connected App in Salesforce.
1. In **Issuer** enter your Consumer Key.
1. In the **Private Key** field, enter -in text format- the certificate used when creating the Connected App.

:::tip Tip
If the credentials you entered are not valid, the system will alert you and ask you to enter them again.
:::

Once you have successfully entered your credentials, you can select the fields you want to synchronize between users and contacts.

The integration with Modyo requires synchronizing three required fields with their corresponding Salesforce equivalents:

- Email
- First name
- Last name

You can also link other fields. Take into consideration that:
- Modyo fields are shown on the left and Salesforce fields on the right.
- The fields must match in type (text, date, number, etc.) in order to be linked. If there is a discrepancy in the data type between the Modyo and Salesforce fields, an alert appears in the interface to inform you of the incompatibility.
- You can't link a field more than once.
- If a field has not been linked, no synchronization will take place for that specific field.
- You can link custom or custom Modyo fields. To do this, you must first create the custom field in Modyo and the field must be enabled to be used in synchronization.

Once you've linked the fields, select the type of synchronization:
- **Always use Salesforce**: This option uses data from Salesforce to update (create, update, delete) Modyo users. In this case, no user information is sent from Modyo to Salesforce. The synchronization is unidirectional, and information flows only from Salesforce to Modyo.
- **Always use Modyo**: Selecting this option sends Modyo user data to Salesforce to update contacts in Salesforce. Modyo users are not updated with Salesforce information. The synchronization is unidirectional and information flows only from Modyo to Salesforce.
- **Bidirectional**: This option sends information from Modyo to Salesforce and information from Salesforce is used in Modyo, allowing contacts and users to be updated respectively. In this case, users and contacts are kept up to date with the most recent information available.
- **Don't sync**: By selecting this option, you turn off the integration, preventing users and contacts from being synchronized between Modyo and Salesforce. This option can be useful if you need to pause syncing for any reason.

:::warning Attention
If you select the **Always use Modyo** or **bidirectional** link mode, but don't complete the second step explained below, Modyo users will not be sent to Salesforce.
:::

To complete the second point and enable the use of the Modyo API from the Salesforce Apex classes, follow this [guide](https://sites.google.com/modyo.com/platform/recursos/salesforce-external-services).

Once you have completed both steps, when you make a change to a Modyo user, the modification is reflected in Salesforce and the same is reflected from Salesforce to Modyo, depending on the selected link configuration.

To ensure proper data synchronization between Modyo and Salesforce and maintain the integrity and consistency of information between both platforms, the following specifications exist:

* It is allowed to use a single “issuer” per account, which means that between realms they cannot be repeated.
* Update contacts in Salesforce:
  * If the linking settings allow it, when updating a contact in Salesforce, Modyo searches for the corresponding user using the “secondary_user_id” field.
  * If the Modyo user does not exist, a new one is created, and if it already exists, it is updated according to the synchronized fields.
  * If the Modyo user didn't exist previously, their “secondary_user_id” is defined as the ID of the Salesforce contact.
* Update a user in Modyo:
  * When updating a Modyo user, the corresponding contact is searched in Salesforce using their “contact ID”.
  * If the Modyo user is new or doesn't have “secondary_user_id”, a new contact is created in Salesforce and the “secondary_user_id” field is updated with the ID of the newly created contact.
* Contact creation in Salesforce:
  * A contact in Salesforce only requires the “Last Name” field to be created.
  * When a contact is created only with “Last Name”, in Modyo, the “username” and the “first name” will be completed with placeholders or placeholders that indicate that they were created as a result of the link.
* Create a user in Modyo:
  * A Modyo user can be created without “Last Name”, but this field, when required in Salesforce, is sent with a placeholder that indicates that it was created from the linking process.
* The primitive types of Salesforce fields available for linking are:
  * Boolean
  * Date
  * Datetime
  * Decimal
  * Double
  * ID
  * Integer
  * Long
  * Object
  * String
* Fields not included in the list, such as references or composite fields, are disabled in the field linking view. This indicates that they are not available for linking.

#### Enable the Modyo API in Salesforce.
To carry out this process, review the [Salesforce Connect REST API](https://developer.salesforce.com/docs/atlas.en-us.chatterapi.meta/chatterapi/intro_what_is_chatter_connect.htm) developer guide

:::warning Important
If you don't carry out this second step, the information and changes you make in Salesforce will not be reflected in Modyo.
:::

### OAuth client

Use an authentication client to send your integration access tokens to your resources. You need the following values:

- Name
- Redirect URI: The URI to which the authentication server will redirect the user after successful authentication.
- Logout URI: URI to which the authentication server will redirect the user after closing the session.
- Description
- Confidential: There are two types of OAuth clients, confidential or public. Select the confidential option if your application can securely authenticate with the authentication server. Public clients are usually applications that run on mobile devices or browsers.
- Scopes: If your OAuth2 authentication service uses multiple spaces or environments to separate users, and you want to use a specific one in this integration, define it in this field.

### Team Members

Modyo allows you to select the team members that work in each realm, and thus control access to the different aspects of the realms.

To add a member to a realm, follow these steps:
1. Click the **Add Member** button at the top right.
2. In the modal, select a user and assign a role.
3. Click on **Add**.

To modify the role of a team member:

1. Click on the user's name in the modal.
2. Assign the desired role to the user.
3. Click **Update**.

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

You can rearrange the custom fields by dragging them. Remember that the order in which you arrange them will be the same order in which they appear in the editing views and in the user profiles.

:::tip Tip
You can create a maximum of 20 custom fields in each realm.
:::

Custom fields have standard properties that you should consider:

- **Must be a unique answer**: The value must be unique for each user, avoiding duplicates.
- **This is a required field**: Must be completed when modifying or creating a user. If the field is visible and editable to users, it will be shown in the registration form and will be mandatory when creating new users.
- **Visible to users of the sites**: It will be visible in the user's profile.
    - **Editable by site users**: Users will be able to view and modify the value.
- **Searchable by administrators**: The value will be indexed and administrators will be able to search for users in the Modyo administrator user index, by the value of this field.
- **Suggestion Text**: Provides an example or guide for the field.
- **Default Value**.

Customizable fields can be enabled or disabled. If they are enabled, an administrator can use them and, depending on their configuration, they can also be available to users.

When a customizable field is disabled, it doesn't appear on any form, however, its values are still saved.

:::danger Danger
When a customizable field is disabled, it can be deleted.

Deleting a customizable field permanently deletes all user values associated with that field.
:::

:::tip Tip
In addition to saving user-specific values, you can use customizable field values to create [segments](/en/platform/customers/segments.html) filters, allowing you to separate users based on their custom values.
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

### Payment settings

By enabling the payment feature in your realm, you have access to the following options:

- **Currency format**: Modifies how the currency values are displayed.
- **Payment settings**: Select the currency unit you want to display. This unit is reflected in orders and reports. If you don't indicate a currency unit, Modyo uses the default currency according to the language configured for the site.
- **Activate email delivery**: When this option is selected, the user receives an email when paying for an order.
- **Email subject**: Header of the email sent to users.
- **Body of the mail**: Content of the message sent to users.

