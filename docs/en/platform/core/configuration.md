---
search: true
---

# Configuration

Customize your account and the rest of the platform according to your needs.

## General

These are the general options for an account on Modyo Platform:

* **Account Name**: This is the name by which you identify this account on the Modyo platform.
* **Account URL**: Choose the sub-domain that represents the account. If you change it, make sure all users know the new URL. After saving you will be redirected to the account login.
* **Default site**: If there is one or more sites, with this option you can redirect traffic from the base domain to this site.
* **Permanent Redirection**: Uses a 301 status redirect.
* **Default language**: Choose the language of the platform by default. Existing users can modify the language from the user settings.
* **Timezone**: Define the time zone for the entire platform. For example, this will be the default time zone for new sites or email campaigns.
* **Modyo Platform Version**: The current version of the platform can be found within the source of the page, under the meta data `<meta name="modyo-version" content="stable (build 2ee6170, 20220309120810)">`. To view the source, right-click on any element on the page and select **View Source Page**. 

### Visualization

* **Do not show the first steps page**: Turning on this option will hide the first steps button for all users.
* **Account logo and favicon**: Customize your platform by uploading a logo and favicon for all users. This will also be used by default in new pages and sites.
* **Google API key**: The API key used to connect the Google Maps API to the location-type fields in the Content module.

## User settings

To customize your username, change your password, and enable two-factor authentication, follow these steps: 

1. In the Modyo Platform side menu, select the 3 dots and click **Profile**.
1. Select between the following fields:
  - Name
  - Last name
  - Username
  - Email
  - Avatar
  - Language: This changes the language of Modyo Platform (e.g. the name of the fields and buttons within the platform). The sites will not be modified.
1. Click **Save**.

## Enable two-factor authentication

Neutralize the risk of compromised passwords using two-factor authentication.

1. Within the user settings, in the top menu, select the 3 dots and click on **Configure Authenticator**.
1. On the screen that appears, scan the code using your mobile device to link your authenticator to Modyo Platform.
- A new field will be added with the domain name, your user level, and your username. 
1. Use the number combination that appears on your mobile phone in the password field and click **Save**.

> If you already have two-factor authentication, the button will say **Delete authenticator**.

:::warning Attention
In the event of theft or loss of an authenticator, a user will not be able to log in again on their own. Contact your Modyo Platform administrator to manually unlink the authenticator from your user. For more information, see [Delete authenticator for a user](/en/platform/core/security.html#delete-authenticator-for-a-user) 
:::