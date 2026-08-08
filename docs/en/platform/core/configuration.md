---
search: true
---

# Configurations

In this section, you can customize your account and the platform according to your needs.

## General Configuration

The general options for a Modyo Platform account are:

- **Account name**: Name with which you identify your Modyo account.
- **Account URL**: This is the subdomain that represents your account. If you decide to modify it, make sure that all users are informed of the new URL. Once the change is saved, Modyo will redirect you to the account login.
- **Default site**: If you have more than one site, this option allows you to redirect traffic from the base domain to a specific site.
- **Permanent Redirection**: Uses a 301 status redirect.
- **Default language**: Select the default language of the platform. Existing users can change their language preference in their profile settings.
- **Time Zone**: Defines the schedule for the entire platform. This will be the default time zone for new sites and email campaigns.

:::tip Time Zone
If the time zone you choose is subject to time changes, these will be automatically reflected when the time changes in the selected zone or country.
:::

- **Modyo Platform version**: Current version of the platform. You can find it in the source of the page, under the meta data `<meta name="modyo-version" content="stable (build 2ee6170, 20220309120810)">`. To view the source, right click on any element on the page and select **View Source Page**.

### Visualization

- **Don't show the first steps page**: Enabling this option hides the first steps button for all users.
- **Account logo**: Personalize the platform by uploading a logo for all users. The logo is also displayed on the platform login page, password recovery, and transactional emails.
- **Account favicon**: Favicon displayed on the account pages and used by default in the apps.
- **Google API key**: The API key used to connect the Google Maps API to the location-type fields in the Content module.

#### Theme colors

In this section, you can customize the color palette of the entire account administration interface, including the login page. Each color has a visual picker and a text field with the HEX value, and both do the same thing: you can pick the shade in the picker or type the code by hand. The text field doesn't validate the format, so always type a six-digit HEX, because a malformed value leaves that element with its base style.

The colors you can define, with their default value, are:

- **Primary color** (`#32ae70`) and **Primary hover color** (`#2a9c63`): Colors for the main buttons and elements.
- **Accent color** (`#2068d5`) and **Accent hover color** (`#1e60c4`): Colors for secondary elements and links.
- **Navigation selected text** (`#2068d5`) and **Navigation selected background** (`#f6f9fd`): Colors of the active element in the navigation.
- **Page background** (`#f6f9fd`): General background color of the interface.

To apply the palette, adjust the colors you need and click **Save**. The page reloads so the new theme is visible across the entire interface.

**Primary color**, **Primary hover color**, and **Page background** are also applied outside the admin: they are the background, link, and button colors of the transactional emails the platform sends, so a palette change is also visible in the emails your users receive. The other four colors only affect the administration interface.

To go back to the original Modyo palette, click **Reset to default** and confirm in the message that appears. You don't need to save afterwards: the change is applied immediately and the page reloads.

:::warning Attention
**Reset to default** doesn't distinguish between colors: it discards all seven custom values at once, not just the one you are editing. If you have a brand palette loaded, write down its codes before resetting, because you will have to enter them again one by one.
:::

## Profile Settings

Customize your user, change your password, and enable two-factor authentication within your Profile.

To access your profile, click on the `...` button in the lower left corner and select **Profile**.

In your Profile screen, you can modify the following fields:
  - Name
  - Last name
  - Avatar
  - Language: Changes the language of Modyo Platform (for example, the name of the fields and buttons within the platform), however, it does not modify the sites.
  - Username
  - Email

### Change password

To change your password, follow these steps:

- Within your Profile, in the upper right corner, click on `...` and select **Change my password**.
- Type your current password and your new password.
- Click **Save**.

### Authenticator configuration (2FA)

To set up your authenticator, follow these steps:

- Within your Profile, in the upper right corner, click on `...` and select **Configure authenticator**.
- On the Configure Authenticator screen, scan the QR code with your mobile device.
- Type the code given to you by the Google Authenticator app on the screen.
- Click **Save**.