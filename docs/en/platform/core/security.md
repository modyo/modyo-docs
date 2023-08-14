---
search: true
tags:
    - 2fa
---

# Security

For Modyo, safety is a key priority. For this reason, we have developed this page that will serve as a comprehensive guide to ensure the secure installation of Modyo.

Both Modyo Cloud and Enterprise Cloud, our cloud solutions, offer an excellent level of security by default. In addition, platform administrators have the ability to implement additional measures to strengthen the protection of their organizations.

This guide presents the most relevant recommendations for achieving this goal.

## Password Policy

In this section, you can set the password security policy for team members. The available options are:

- **Minimum password length value**: This value determines the minimum length that a password must have, it must be between 12 and 128 characters.
- **Require at least one lowercase letter (a - z) **: This option ensures that the password contains at least one lowercase letter.
- **Require at least one capital letter (A - Z) **: This option ensures that the password contains at least one capital letter.
- **Require at least one non-alphanumeric character (! @ # $% ^ & * () _ + - = [] {} |) **: This option requires that team members' passwords contain at least one of the specified special characters.

When saving this configuration, existing users will have to comply with these conditions whenever they change their passwords.

## Session expiration policy

In this section you can configure how long a session will remain active.

**Session Expiration**: At the end of the selected time, Modyo automatically closes the user's session.

**User inactivity period**: When a user is inactive, the session is automatically closed after the selected time has elapsed. Navigation, keyboard, and mouse actions are considered user activities. This option protects the user if they leave their workstation unattended.

## User inactivity period policy

When this option is activated, and once the selected time has elapsed without user interaction on the platform, Modyo will automatically make a change in the user's status to _inactive_.

Once the user is marked as inactive, they cannot log in. The default inactivity period is 90 days and you can change it to:

- 30 days
- 90 days
- 180 days
- 360 days

If you check the box to send an email to a user when they are considered inactive, the user will receive an email notification. From this email, they will be able to reactivate their account.

:: :tip Tip
Account owners can change a user's status between inactive and active using the “Login disabled due to inactivity” checkbox.

You can locate this option when editing a user in the **Team** section, in the **Edit** tab. If you select the box, the user is marked as inactive and when it is deactivated, the user will be active.
::

## HTTP access control (Cross-Origin Resource Sharing CORS)

Enables the Cross-Origin Resource Sharing (CORS) functionality to allow access to Modyo resources from other websites.

By default, your sites' custom domains are already included once CORS is activated. To give you access to external domains, type them separated by commas, for example `http://api.mydomain.com, http://mysubdomain.mydomain.com`. Wildcards or _wildcards_ are not allowed in this section.

## Content Delivery Token (JWT - JSON Web Token)

This key or _secret_ is used by Modyo to sign user JWTs so that they can access [private content through the API] (/es/platform/content/public-api-reference.html #contenido -private).

:: :warning Attention
If you generate a new key, all requests for private content must go through Modyo. This is because JWTs signed by Modyo with the old key will no longer be valid.
:::

The key or _secret_ has a specified duration in seconds. You can set this time in the field provided; by default, the duration is one hour (3600 seconds). It is recommended to avoid a very short period of duration, as it may affect the performance of the platform.

## Two-Factor Authentication (2FA)

Two-step authentication adds a layer of security to your account and reduces the risk of unauthorized access. When activated, each time team members log in, they will have to enter their password and a dynamic key provided by the Google Authenticator application from their phones.

Each team member can activate two-step authentication from their profile. In addition, the administrator can force two-step authentication for all team members.

By enabling mandatory two-step authentication for team members, the next time a member logs in, they will be required to set up their two-step authentication device. Once set up, you must log in using your password and the code provided by Google Authenticator.

:: :warning Attention
The **Set Time Zone Automatically Option** must be active when using two-factor authentication on your mobile device.
:::

### Enable two-factor authentication for a user

To enable two-factor authentication for a user and neutralize the risk of compromised passwords, follow these steps:

1. In Modyo Platform, in the user menu, click **Profile**.
2. In profile settings, in the top menu, click the 3 dots and click **Configure Authenticator**.
3. Scan the code that appears on the screen with your mobile device to link your authenticator to Modyo Platform.
This adds a new field with the domain name, your user level, and your username.
4. Enter the numbers that appear on your mobile phone in the password field and click **Save**.

Once you have two-factor authentication enabled, the button will say **Remove authenticator**.


### Delete Authenticator for a User

If the authenticator is lost or stolen, it will not be possible to access the account. In this case, a Modyo Platform administrator can help by removing the authenticator linked to the user by following these steps:

1. In the side menu, expand **Settings** and click **Teams**.
1. Click on the member's name.
1. In the top bar, click on the more options button, represented by three dots, and select **Remove authenticator**.

:: :warning Attention
If you have activated the option to force authentication, the next time the user tries to log in, they will need to initialize the authenticator first. Once the authenticator is active, the user can proceed with the login process.
:::

## Best Practices

### Important Concepts
* **Limit access:** Reduce the chances of a malicious actor gaining access to the system.
* **Containment: ** Configure the system in a way that minimizes possible damage if it is breached by a malicious actor.
* **Preparation and knowledge: ** Maintain backups and procedures to be prepared in the event of potential disasters.
* **Trusted sources: ** Avoid implementing widgets or code from untrustworthy sources. Ensure that all dependencies loaded on the site come from reliable sources.

### Local Vulnerabilities
* Make sure that the computers of all administrator users are free of spyware, malware, or viruses.
* Make sure that access always comes from updated computers and through reliable and updated web browsers.

### Update Modyo Regularly
We recommend that you update Modyo regularly to ensure that your installation has the latest security fixes and that all security patches are up to date. These patches are designed to be applied without causing significant interruptions to the workflow, for example: moving from version 9.1.10 to 9.1.12.

In addition, we recommend that you update major versions at least twice a year, moving, for example, from version 9.1.14 to 9.2.2. This will not only keep you in the latest supported version, but it will also provide you with the latest features and functionality.

### Set up a Strong Password in the Admin Panel
The Administration Panel is Modyo's most powerful management tool. Through it, you can have control over various configurations and actions that are fundamental to the operation of Modyo. In addition, it provides you with administrative access to all the organizations defined on the platform.

We recommend that you set a secure password and change it regularly, for example, after every major platform update.

### Enable Transport Layer Security (TLS)
Forcing connections to be TLS only in your installation ensures that all incoming and outgoing traffic is encrypted. In addition, we recommend using only modern versions of the protocol, in particular versions 1.2 or 1.3.

### Differentiate Subdomains
Differentiating subdomains is essential, since there are multiple places where Modyo supports HTML development. If not activated, the HTML of sites developed on Modyo can become an entry point for attacks that could affect other Modyo components through the cross-site scripting (XSS) technique.

### Review the Backup Processors
Running backup processes on a regular basis is very important in a secure Modyo implementation.

In the case of Cloud and Enterprise Cloud, this is done automatically. For Enterprise On Premise, each customer's operations team is responsible for carrying out this activity.

Modyo backups cover both the database and file shared directories, where static content is stored.

### Using an Exit Proxy Server
Modyo can establish communications with the Internet, especially with regard to identity providers or integration Webhooks. To manage and control these outbound communications, it is essential to implement an outbound proxy server or to set up a Network Address Translation (NAT) scheme in which the source IP addresses are not exposed.

### Restrict Public Ports of Entry
Modyo users must access exclusively through port 443, behind a load balancer that distributes traffic to the different instances of the platform.

Traffic between the load balancer and the platform instances can use ports 443 or 80, depending on the internal security of the network. For example, in isolated, protected networks such as Amazon AWS VPCs, internal traffic may not need to be encrypted.

### Activity logs

The platform keeps a record of all actions performed by administrator users within it. You can review these logs in the “Activity Logs” section.

We recommend that you review these logs periodically to verify the correct behavior of users within the system. Activity logs are also available through Modyo's administrative API.

### Review Administration Permissions

The administrators of an organization or site have a high level of access to content and settings that must be private. Impersonating one of these administrators can pose a major security risk. For this reason, we recommend keeping a small and very controlled number of users with a general administration role and ensuring that these users keep additional levels of protection active, such as the second factor of authentication.

In addition, administrators can generate tokens to access the platform's management APIs. These tokens are often used to automate common administrative tasks, so it is important to ensure that they are only used within secure systems that guarantee their protection.

## Report a vulnerability

If you think you have identified a security vulnerability in Modyo, please help us by reporting the problem.

Modyo provides secure and confidential channels for reporting security incidents through our [support center] (https://support.modyo.com/hc/es) or by sending an email to <a href="mailto:security@modyo.com"> security@modyo.com </a> .

Your collaboration is critical to maintaining the integrity and security of the platform.
