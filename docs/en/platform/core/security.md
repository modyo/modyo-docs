---
search: true
tags:
    - 2fa
---

# Security

At Modyo, everything related to security is very important to us. That's why we created this page that will guide you through everything you need to secure a Modyo installation. While our cloud solutions, Modyo Cloud and Enterprise Cloud, provide an excellent level of security by default, platform administrators can take additional protective measures to increase the security of their organizations. This guide presents the most important recommendations for achieving this.

## Password Policy

These are the options available for setting a password policy for Modyo Platform:

- Minimum password length value: This number dictates the minimum number of characters a password must have. A password must be between 12 and 128 characters long.
- Require at least one lowercase letter (a - z)
- Require at least one capital letter (A - Z)
- Require at least one non-alphanumeric character (! @ # $% ^ & * () _ + - = [] {} |)

## Session expiration policy

Select a value in this option so that the platform automatically expires a session when it is inactive. You can select from these values:

- 5 minutes
- 10 minutes
- 15 minutes
- 20 minutes
- 25 minutes
- 30 minutes
- 45 minutes
- 1 hour
- 1 hour 30 minutes
- 2 hours
- 4 hours
- 8 hours
- 16 hours
- 1 days
- 2 days
- 3 days
- 4 days
- 5 days
- 6 days
- 1 weeks
- 2 weeks

## User inactivity period policy

With this option, the platform automatically changes the status of a user to inactive. After a certain period of time without interaction with the platform, the user will no longer be able to log in. You can choose between these values:

- 30 days
- 60 days
- 180 days
- 360 days

There is an additional checkbox that sends an activation email when the user is deactivated due to inactivity.

:::tip Note
Administrators can change the status of a user between inactive and active with the "Login disabled for inactivity" checkbox. This can be found when modifying a user in the **Edit** tab inside **Teams**. With the checkbox enabled, the user will be inactive, and vice-versa with the checkbox disabled, the user will be active.
:::

## HTTP access control (Cross-Origin Resource Sharing CORS)

Activate Cross-Origin Resource Sharing (CORS) to be able to access Modyo resources from other websites.

By default, custom domains for your sites are included once CORS is enabled. To give you access to external domains, type them separated by commas, for example `http://api.mydomain.com, http://mysubdomain.mydomain.com`. Wildcards are not allowed in this section.

## Content Delivery Token (JWT - JSON Web Token)

This key or _secret_ is used by Modyo to sign users' JWTs in order to access [private content through the API](/en/platform/content/public-api-reference.html#private-content-2).

:::warning Attention
Generating a new key will force all requests for private content to go through Modyo, since JWTs signed by Modyo with the old key will no longer be valid.
:::

The key or _secret_ has a specific duration in seconds that can be configured in the box below. By default, the duration is 1 hour (3600 seconds). It is not recommended to use a very short duration, as it could affect the performance of the platform.

## Two-Factor Authentication (2FA)

Two-step authentication adds an extra layer of security to your account. Every time team members sign in, they'll need to enter both their password and a dynamic key provided by the Google Authenticator app from their phones.

Each team member will be able to enable two-step authentication from their profile, but as an administrator, you can also enforce two-step authentication for all team members.

By enforcing two-step authentication for team members, the next time a team member logs in, they will be required to set up their two-step authentication device. Once set up, they will need to sign in using their password and the code provided by _Google Authenticator_.

:::warning Warning
On your mobile device, the **Set time zone automatically** option must remain enabled when using two-factor authentication.
:::

### Enable two-factor authentication for a user 

Neutralize the risk of compromised passwords using two-factor authentication.

1. In Modyo Platform, in the user menu, click **Profile**.
2. In profile settings, in the top menu, click the 3 dots and click **Configure Authenticator**.
3. On the screen that appears, scan the code using your mobile device to link your authenticator to Modyo Platform.
- A new field will be added with the domain name, your user level, and your username. 
4. Use the number combination that appears on your mobile phone in the password field and click **Save**.

> If you already have two-factor authentication, the button will say **Delete authenticator**.


### Delete Authenticator for a User

If the authenticator is lost or stolen, it will not be possible to access the account. In this case, a Modyo Platform administrator can help by removing the authenticator linked to the user by following these steps:

1. In the side menu, expand **Settings** and click **Teams**.
1. Click on the member's name.
1. In the top bar, click on the more options button **... ** and select **Remove authenticator**.

:::warning Warning
If the option to force authentication is enabled, the next time the user attempts to log in, the user will need to initialize the authenticator first. When you have an active authenticator, the user must log in again.
:::

## Best Practices

### Important Concepts
* **Limit access:** Reduce the chances of a malicious actor gaining access to the system.

* **Containment:** The system must be configured in such a way as to minimize the amount of damage a bad actor may cause.

* **Preparation and knowledge:** Maintain backups and procedures to be prepared in the event of a catastrophe.

* **Trusted Sources:** Avoid deploying Widgets or code from unreliable sources. Ensure that all dependencies that are loaded into a site come from a trusted source.

### Local Vulnerabilities
Ensure that the computer equipment of all platform administrator users is free of spyware, malware, or virus infections.

Ensure access always comes from an up-to-date computer using reliable and up-to-date Internet browsers.

### Update Modyo Regularly
We recommend updating Modyo periodically to ensure you are always on the last patch available. This will ensure that your installation has all security patches up to date. Security patches are performed in such a way that they can be applied without mostly affecting work computers (example: moving from 9.1.10 to 9.1.12).

We recommend performing _upgrades_ of _releases_ older at least twice a year (example: moving from 9.1.14 to 9.2.2). By doing this you will be able to ensure that you are not only in the latest version with support, but also that you have the latest features.

### Set up a Strong Password in the Admin Panel
The Admin Panel is Modyo's most powerful management tool. It is possible to take control of many of the most relevant configurations and actions in Modyo's operation, as well as providing an administrative gateway to all organizations defined within the platform. We recommend setting a strong password and rotating it regularly (example: after each important platform update).

### Enable Transport Layer Security (TLS)
Forcing connections to be TLS only in your installation ensures that all inbound and outbound traffic is encrypted. In addition, we recommend using only modern versions of the protocol, in particular versions 1.2 or 1.3.

### Differentiate Subdomains
Subdomain differentiation is very important, as there are multiple places where Modyo supports HTML development. If this is not active, the HTML of sites developed on Modyo can become an attack vector that could impact other Modyo components via cross-site _scripting_.

### Review the Backup Processors
Running backup processes on a regular basis is very important in a secure Modyo deployment. For Cloud and Enterprise Cloud, this is done automatically. In the case of Enterprise On Premise, it is the customer's operation team that is responsible for this activity.

Modyo backups cover both the database and file shared directories, where static content is stored.

### Using an Exit Proxy Server
Modyo may make communications to the Internet, with regard to the capabilities of identity providers or integration Webhooks. In order to control outbound communication, you must establish an outbound proxy or network NAT scheme where the source IPs of the communication are not exposed.

### Restrict Public Ports of Entry
Modyo users will have to access through port 443 exclusively, behind a load balancer that distributes traffic to different instances of the platform. Between the load balancer and the platform instances, traffic can go through port 443 or 80 depending on the internal security of your network (example: ∑ networks that are isolated and protected such as Amazon AWS VPCs may not require internal encryption).

### Activity logs

The platform keeps a record of all actions taken by admin users within it, which can be reviewed within the “Activity Logs” section. We recommend reviewing these logs periodically to verify the correct behavior of users within the system. These activity logs are also available through the Modyo administrative API.

### Review Administration Permissions

Administrators of an organization or site have a high level of access to content and settings that must be private. Impersonating one of these administrators can pose a major security risk. That's why we recommend keeping a small and tightly controlled number of users with a general management role and ensuring that these users maintain additional levels of protection active as the second factor of authentication.

Administrators can also create tokens for access to platform management APIs. These tokens are often used to automate common management tasks, it is important to ensure that they are only used within secure systems that ensure their protection.

### Enable the Second Factor of Authentication

Consider enabling the second authentication factor whenever your identity server allows it. If you use Modyo's credentials system, we recommend that you enable this protection. We strongly recommend enabling this functionality for better security posture.

### Password policy

This section will allow you to set the password security policy for team members. Within the options you can choose the following:

* **Enforce minimum password length**: By default the minimum length required by Modyo is 8 characters, but if you require it, you can force the minimum length of team members' passwords to be longer.
* **Require at least one lowercase letter (a - z)**: This option ensures that at least one lowercase letter exists within the team members' password.
* **Require at least one capital letter (A - Z)**: This option ensures that at least one capital letter exists within the team members' password.
* **Require at least one non-alphanumeric character (! @ # $ % ^ & * () _ + - = [] {} |)**: With this option you force your team members to use at least one of the special characters indicated in the list in their passwords.

When saving this configuration, existing users will have to comply with these conditions whenever they change their passwords.

## Report a vulnerability

If you think you found a security vulnerability in Modyo, please help us by reporting the problem. Modyo has secure and confidential security incident reporting channels through our [support center](https://support.modyo.com/hc/en-us) or email <a href="mailto:security@modyo.com">security@modyo.com</a>.
