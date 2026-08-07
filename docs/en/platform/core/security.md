---
search: true
tags:
    - 2fa
---

# Security

For Modyo, security is a fundamental priority. For this reason, we have developed this page that will serve as a comprehensive guide to ensure the secure installation of Modyo.

Both Modyo Cloud and Enterprise Cloud, our cloud solutions, offer an excellent level of security by default. In addition, platform administrators have the ability to implement additional measures to strengthen the protection of their organizations.

This guide presents the most relevant recommendations for achieving this objective.

## Password policy

In this section, you can set the password security policy for team members. The available options are:

- **Minimum password length value**: This value determines the minimum length a password must have; it must be between 12 and 128 characters.
- **Require at least one lowercase letter from Latin alphabet (a to z)**: This option ensures that the password contains at least one lowercase letter.
- **Require at least one uppercase letter from Latin alphabet (A to Z)**: This option ensures that the password contains at least one uppercase letter.
- **Require at least one of these special characters**: This option requires that team members' passwords contain at least one of the symbols that the checkbox itself lists in parentheses. The default set is `! @ # $ % ^ & * ( ) _ + º - = [ ] { } | " . ' ¿ / ¡ : ;`, and the list you see on screen is always the one your installation validates.

When saving this configuration, existing users will have to comply with these conditions when changing their password.

:::warning Attention
When you enable **Require at least one of these special characters**, the password is also limited to that alphabet: only letters from `a` to `z`, uppercase or lowercase, digits, and the symbols on the list are accepted. Any other character causes the password to be rejected, even if it is long and meets all the other conditions. This includes accented vowels, `ñ`, and symbols such as `~`, `<`, or `>`.
:::

## Lockout after failed login attempts

In addition to the password policy, Modyo protects the login process against brute force attacks. After 10 consecutive failed attempts, the user is temporarily locked out for 15 minutes, and the error message tells them how long is left before the lockout is lifted:

_Consecutive failed logins limit exceeded. Your account has been temporarily disabled. Please wait 14 minutes for your account to be unlocked._

This protection applies both to team members signing in to the admin panel and to end users signing in to a realm. The lockout is released only by waiting: there is no manual unlock action in the panel, you have to wait for the time to elapse.

:::tip Tip
This temporary lockout is different from the _inactive_ status of the [User inactivity period policy](#user-inactivity-period-policy). If a team member reports being unable to sign in, check which of the two cases applies: the failed attempts lockout clears on its own after 15 minutes, whereas the inactive status remains until the user reactivates their account or an account owner activates it again.
:::

## Session expiration policy

In this section, you can configure how long a session will remain active. Both fields are fixed option lists: you choose one of the available values, you do not type a free-form time.

**Session expiration**: At the end of the selected time, Modyo automatically closes the user's session. The options are 15 minutes, 30 minutes, 1 hour, 2 hours, 12 hours, 1 day, 1 week, 2 weeks, 1 month, and 3 months. If the duration defined in your installation does not match any of them, it also appears as one more option on the list.

**User idle period**: When a user is inactive, the session is automatically closed after the selected time has elapsed. Navigation, keyboard, and mouse actions are considered user activities. This option protects the user if they leave their workstation unattended. To be able to choose a value, first check the **Enable user idle period** box; the options are 5 minutes, 15 minutes, 30 minutes, 1 hour, and 6 hours.

This session closing is measured in minutes and only ends the open session. Do not confuse it with the [User inactivity period policy](#user-inactivity-period-policy), which is measured in days and marks the user as inactive so that they cannot sign in again.

## User inactivity period policy

When this option is activated, and once the selected time has elapsed without user interaction on the platform, Modyo will automatically change the user's status to _inactive_.

Once the user is marked as inactive, they cannot log in. The default inactivity period is 90 days, and you can change it to:

- 30 days
- 90 days
- 180 days
- 360 days

If you check the box to resend an email to the user when they are considered inactive, the user will receive an email notification. From this email, they will be able to reactivate their account.

:::tip Tip
**Account owners** can change a user's status between inactive and active using the "Login disabled due to inactivity" checkbox.

You can locate this option when editing a user in the **Team** section, in the **Edit** tab. If you select the checkbox, the user is marked as inactive, and when deactivated, the user will be active.
:::

## HTTP access control (Cross-Origin Resource Sharing CORS)

The **Cross Origin Resource Sharing** section defines which domains can access Modyo resources. It has three controls:

- **Enable CORS**: turns the feature on. When you check it, the custom domains of your apps are included automatically, without you having to list them.
- **Allow all origins**: adds the `*` wildcard to the list of allowed origins, so that any domain can consume your public information in JSON format. When you check it, Modyo asks for confirmation with the notice "If enabled, all domains will have access to your public JSON information. Would you like to continue?".
- **Alternative origins**: text field to grant access to external domains. Write them separated by commas, for example, `http://api.mydomain.com, http://mysubdomain.mydomain.com`. Wildcards are not accepted in this field: if you include a `*`, the configuration is not saved. From each entry, Modyo keeps only the scheme, the domain, and the port, and discards paths.

When you are done, click **Save**.

:::warning Attention
**Allow all origins** is enabled from this same screen, with no need to open a support ticket or make any other change to your installation. Because it puts your account's public information within reach of any domain, reserve it for development or testing environments and, in production, list the domains in **Alternative origins**.
:::

:::tip Tip
The automatic inclusion covers the primary domain of each app. If you publish an app on an alternative domain, or if the origin making the calls uses a different scheme or port, add it in **Alternative origins**, because the origin comparison is exact.
:::

## Content Delivery Token (JWT - JSON Web Token)

This key or _secret_ is used by Modyo to sign user JWTs to access [private content through the API](/en/platform/content/public-api-reference#private-content).

:::warning Attention
If you generate a new key, all requests for private content must go through Modyo. This is because JWTs signed by Modyo with the old key will no longer be valid.
:::

The key or _secret_ has a specified duration in seconds. You can set this time in the provided field; by default, the duration is one hour (3600 seconds). It is recommended to avoid a very short duration, as it may affect the platform's performance.

## Two-factor authentication (2FA)

Two-step authentication adds a layer of security to your account and reduces the risk of unauthorized access. When activated, each time team members log in, they will have to enter their password and a dynamic key provided by the Google Authenticator application from their phones.

Each team member can activate two-step authentication from their profile. In addition, the administrator can force two-step authentication for all team members.

By enabling mandatory two-step authentication for team members, the next time a member logs in, they will be required to set up their two-step authentication device. Once set up, you must log in using your password and the code provided by Google Authenticator.

:::warning Attention
The **Set Time Zone Automatically Option** must be active when using two-factor authentication on your mobile device.
:::

### Enable two-factor authentication for a user

To enable two-factor authentication for a user and neutralize the risk of compromised passwords, follow these steps:

1. In Modyo Platform, in the user menu, click **Profile**.
2. In profile settings, in the top menu, click the 3 dots and click **Configure Authenticator**.
3. Scan the code that appears on the screen with your mobile device to link your authenticator with Modyo Platform.
This adds a new field with the domain name, your user level, and your username.
4. Enter the numbers that appear on your mobile phone in the password field and click **Save**.

Once you have two-factor authentication enabled, the button will say **Remove authenticator**.


### Delete authenticator for a user

If the authenticator is lost or stolen, it will not be possible to access the account. In this case, a Modyo Platform administrator can help by removing the authenticator linked to the user by following these steps:

1. In the side menu, expand **Settings** and click **Teams**.
1. Click on the member's name.
1. In the top bar, click on the more options button, represented by three dots, and select **Remove authenticator**.

:::warning Attention
If you have activated the option to force authentication, the next time the user tries to log in, they will need to initialize the authenticator first. Once the authenticator is active, the user can proceed with the login process.
:::

## SVG images

The **Enable use of SVG images** section defines whether your account accepts SVG files. It is disabled by default, and only team members with the **Admin Security** permission can change it.

To allow SVG file uploads, follow these steps:

1. In the side menu, expand **Settings** and click **Security**.
2. Scroll down to the **Enable use of SVG images** section.
3. Check the **Allow use of SVG** box.
4. Click **Save**.

While the box is unchecked, any attempt to upload or update an SVG file in [Media](/en/platform/content/asset-manager.html) is rejected with the message _Can't upload or update SVG files due to configured security policies_. The rejection applies both in the panel and through the admin API, and it also reaches the SVG files that already exist in the account: while the box stays unchecked, you cannot save changes to their title, alternative text, description, or tags either.

:::warning Attention
The panel itself warns you that "The use of SVG images can leave you vulnerable to XSS attacks and may be insecure". An SVG is an XML document that can carry scripts and external references inside, and the browser interprets it with the same privileges as the page that displays it. Enable it only if your teams need this format and you control the origin of the files they upload.
:::

## Best practices

### Important concepts
- **Limit access**: Reduce the chances of a malicious actor gaining access to the system.
- **Containment**: Configure the system in a way that minimizes possible damage if it is breached by a malicious actor.
- **Preparation and knowledge**: Maintain backups and procedures to be prepared in the event of potential disasters.
- **Trusted sources**: Avoid implementing widgets or code from untrustworthy sources. Ensure that all dependencies loaded on the site come from reliable sources.

### Local vulnerabilities
- Make sure that the computers of all administrator users are free of spyware, malware, or viruses.
- Make sure that access always comes from updated computers and through reliable and updated web browsers.

### Update Modyo regularly
We recommend that you update Modyo periodically to ensure that your installation has the latest security fixes and that all security patches are up to date. These patches are designed to be applied without causing significant interruptions to the workflow.

In addition, we recommend that you perform major version upgrades at least twice a year. This will not only keep you on the latest supported version, but will also provide you with the latest features and functionalities.

### Set up a strong password in the admin panel
The Administration Panel is Modyo's most powerful management tool. Through it, you can have control over various configurations and actions that are fundamental to the operation of Modyo. In addition, it provides you with administrative access to all the organizations defined on the platform.

We recommend that you set a secure password and change it regularly, for example, after every major platform update.

### Enable transport layer security (TLS)
Forcing connections to be TLS only in your installation ensures that all incoming and outgoing traffic is encrypted. In addition, we recommend using only modern versions of the protocol, in particular versions 1.2 or 1.3.

### Differentiate subdomains
Differentiating subdomains is essential, as there are multiple places where Modyo supports HTML development. If not activated, the HTML of sites developed on Modyo can become an entry point for attacks that could affect other Modyo components through the cross-site scripting (XSS) technique.

### Review the backup processors
Running backup processes on a regular basis is very important in a secure Modyo implementation.

In the case of Cloud and Enterprise Cloud, this is done automatically. For Enterprise On Premise, each customer's operations team is responsible for carrying out this activity.

Modyo backups cover both the database and file shared directories, where static content is stored.

### Using an exit proxy server
Modyo can establish communications with the Internet, especially with regard to identity providers or integration Webhooks. To manage and control these outbound communications, it is essential to implement an outbound proxy server or to set up a Network Address Translation (NAT) scheme in which the source IP addresses are not exposed.

### Restrict public ports of entry
Modyo users must access exclusively through port 443, behind a load balancer that distributes traffic to the different instances of the platform.

Traffic between the load balancer and the platform instances can use ports 443 or 80, depending on the internal security of the network. For example, in isolated, protected networks such as Amazon AWS VPCs, internal traffic may not need to be encrypted.

### Activity logs

The platform keeps a record of all actions performed by administrator users within it. You can review these logs in the “Activity Logs” section.

We recommend that you review these logs periodically to verify the correct behavior of users within the system. Activity logs are also available through Modyo's administrative API.

### Review administration permissions

The administrators of an organization or site have a high level of access to content and settings that must be private. Impersonating one of these administrators can pose a major security risk. For this reason, we recommend keeping a small and very controlled number of users with a general administration role and ensuring that these users keep additional levels of protection active, such as the second factor of authentication.

In addition, administrators can generate tokens to access the platform's management APIs. These tokens are often used to automate common administrative tasks, so it is important to ensure that they are only used within secure systems that guarantee their protection.

## Report a vulnerability

If you think you have identified a security vulnerability in Modyo, please help us by reporting the problem.

Modyo offers secure and confidential channels for reporting security incidents through our [support center](https://support.modyo.com/hc/en-us) or by sending an email to <a href="mailto:security@modyo.com">security@modyo.com</a>.

Your collaboration is fundamental to maintaining the integrity and security of the platform.