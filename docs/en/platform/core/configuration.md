---
search: true
---

# Configurations

In this section, you can customize your account and the platform according to your needs.

## General Configuration

The general settings screen has three blocks: the general options, **Visualization**, and **Danger zone**.

The general options for a Modyo Platform account are:

- **Account name**: Name with which you identify your Modyo account.
- **Default App**: If you have more than one site, this option allows you to redirect traffic from the base domain to a specific site.
- **Moved permanently (redirect with 301 status code)**: Makes the redirect to the default site permanent. The checkbox stays disabled while **Default App** is set to **None**, so choose a site first.
- **Default language**: Select the default language of the platform. Existing users can change their language preference in their profile settings.
- **Time zone**: Defines the schedule for the entire platform. This will be the default time zone for new sites and email campaigns.

:::tip Time Zone
If the time zone you choose is subject to time changes, these will be automatically reflected when the time changes in the selected zone or country.
:::

To save these options, click **Save**.

:::tip Modyo Platform version
The platform version isn't an option on this screen. To find it, open the source code of any page of the admin panel (right-click the page and choose the option to view its source) and look for the `<meta name="modyo-version">` tag: its `content` attribute shows the version.
:::

### Visualization

- **Don't show the first steps page**: Enabling this option hides the first steps button for all users.
- **Account logo**: Personalize the platform by uploading a logo for all users. The logo is also displayed on the platform login page, password recovery, and transactional emails.
- **Account favicon**: Favicon displayed on the account pages and used by default in the apps.
- **Google API key**: The API key used to connect the Google Maps API to the location-type fields in the Content module.

#### Theme colors

In this section, you can customize the color palette of the entire account administration interface, including the login page. Each color has a visual picker and a text field with the HEX value, and both do the same thing: you can pick the shade in the picker or type the code by hand. The text field doesn't validate the format, so always type the full HEX code, with the leading `#` and six digits (`#RRGGBB`), because a malformed value leaves that element with its base style.

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

### Danger zone

In this block you change the account URL. It shows the current **Account host**, which is the subdomain that represents your account.

To change it, follow these steps:

1. Click **Change identifier**.
2. In the window that appears, type the new value in the **Account URL** field.
3. Click **Change identifier** to confirm.

If you decide to modify it, make sure that all users are informed of the new URL. Once the change is saved, Modyo will redirect you to the account login.

## Profile Settings

Customize your user, change your password, enable two-factor authentication, and review your active sessions within your Profile.

To access your profile, click your avatar at the bottom of the side menu and select **Profile**.

Your Profile screen has two columns. On the left are your details, split into two blocks that are saved separately. On the right is the security of your access: **Change my password**, **Setup authenticator**, and **Active sessions**.

In the first block, you can modify the following fields and save them with **Save**:

- **First name**
- **Last Name**
- **Avatar**
- **Profile Language**: Changes the language of Modyo Platform (for example, the name of the fields and buttons within the platform), however, it does not modify the sites.

### Username and email

The username and email are in the **Danger zone** block, which asks for your password to save any change. To modify them, follow these steps:

1. Type your password in the **Current password** field.
2. Modify the **Username**, the **Email**, or both.
3. Click **Save**.

The username changes as soon as you save. The email, however, isn't replaced right away: Modyo sends a verification link to the new address, and the change is applied when you click that link. Until then, your account keeps using the previous email. The link expires after 5 minutes; if you don't use it in time, save the change again to receive a new one.

:::warning Attention
If you mistype your current password more than three times, Modyo signs you out on all your devices for security. See the limits that apply in [Password, email, and username changes from the profile](/en/platform/core/security#password-email-and-username-changes-from-the-profile).
:::

### Change password

To change your password, follow these steps:

1. In the right column of your Profile, under **Change my password**, click **Change**.
2. Fill in the **Current Password**, **New Password**, and **Password confirmation** fields.
3. Click **Save**.

From your Profile, you can change your password only once every 24 hours.

### Authenticator configuration (2FA)

To set up your authenticator, follow these steps:

1. In the right column of your Profile, under **Setup authenticator**, click the **Setup authenticator** button.
2. On the screen that opens, scan the QR code with the Google Authenticator app on your mobile device. If you are on your phone and can't scan it, use the link that appears below the code.
3. Type the 6-digit code that the app gives you in the **Current code** field.
4. Click **Save**.

The setup screen expires 5 minutes after you open it. If the time runs out before you save, start again from your Profile.

With the authenticator active, the **Remove authenticator** button appears instead. When you click it, the authenticator is removed immediately, without asking for confirmation. For more details, see [Two-factor authentication (2FA)](/en/platform/core/security#two-factor-authentication-2fa).

### Active sessions

In **Active sessions**, you see the devices where you have an open session in the admin panel. For each one, it shows the browser and operating system, the **Last Login**, and the **IP Address**.

- To end the session on a device, click **Log out** next to it. The button is disabled for the session you are using.
- To end all other sessions at once, click **Log out all devices**. This option appears when you have more than one open session, and it doesn't end your current session.