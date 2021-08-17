---
search: true
---

# Security
At Modyo, everything about security is very important to us. That is why we created this guide that will serve as a reference in everything you need to secure a Modyo installation. While Modyo Cloud and Enterprise Cloud, our hosted solutions, provide an excellent level of security by default, platform administrators can take additional protection measures to increase the security of their organizations. This guide presents the most important recommendations to achieve this.

### Important Concepts
* **Limit access:** Reduce the chances of a malicious actor gaining access to the system.

* **Containment:** The system must be configured in such a way as to minimize the amount of damage a bad actor may cause.

* **Preparation and knowledge:** Maintain backups and procedures to be prepared in the event of a catastrophe.

* **Trusted Sources:** Avoid deploying Widgets or codes from unreliable sources. Ensure that all dependencies that are loaded into a site come from a reliable source.

### Local Vulnerabilities
Ensure that the hardware of all administrators of the platform is free of spyware, malware, and virus infections. Even a secure installation of Modyo could be broken into by malicious actors who exploit a user's valid session from a local computer.

Ensure that access always comes from an up-to-date computer, using reliable and up-to-date Internet browsers.

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
Administrators of an organization or site have a high level of access to content and settings that must be private. Any vulnerability to one of these administrators can pose a great security risk. That is why we recommend keeping a small and highly controlled number of users with a general management role and ensuring that these users maintain active additional levels of protection such as a second authentication factor.

Administrators can also create tokens for access to platform management APIs. These tokens are often used to automate common management tasks, it is important to ensure that they are only used within secure systems that ensure their protection.

### Enable the Second Factor of Authentication
Consider enabling the second authentication factor whenever your identity server allows it. If you use Modyo's credentials system, we recommend that you enable this protection. We strongly recommend enabling this functionality for better security posture.

### Password policy

This section will allow you to set the password security policy for team members. Within the options you can choose the following:

* **Enforce minimum password length**: By default the minimum length required by Modyo is 8 characters, but if you require it, you can force the minimum length of team members' passwords to be longer.
* **Require at least one lowercase letter from the Latin alphabet (a to z)**: With this option you can ensure that at least one lower case letter exists within team members' passwords.
* **Require at least one uppercase letter from the Latin alphabet (A to Z)**: With this option you ensure that at least one capital letter exists within team members' passwords.
* **Require at least one non-alphanumeric character (! @ # $ % ^ & * () _ + - = [] {} |)**: With this option you force your team members to use at least one of the special characters indicated in the list in their passwords.

When saving this configuration, existing users will have to comply with these conditions whenever they change their passwords.

### Share resources across different domains

In this section we can activate Cross Origin Resource Sharing (CORS), so that Modyo resources can be accessed from other websites that are not necessarily secure.

When you enable this option, you will need to specify the domains (separated by comma and no slash at the end) that you want to allow access from to share resources with your site. For example:
`http://api.mydomain.com, http://mysubdomain.mydomain.com, http://mydomain.com`

### Content Delivery Token (JWT)

After configuring CORS, the platform will give you a key or _secret_ to be able to decode users' JWTs in order to access [private content via the API](/en/platform/content/public-api-reference.html#private-content).

:::warning Warning
The key or _secret_ is used by Modyo to sign users' JWTs. Generating a new key will force all requests for private content to go through Modyo, since JWTs signed by Modyo with the old key will no longer be valid.
:::

The key or _secret_ has a specific time duration in seconds that can be configured in the box labeled _Content delivery token TTL_. By default, the duration is 1 hour (3600 seconds). It is not recommended to use a very small duration, as this could affect the performance of the platform.

### Two-Step Authentication

Two-step authentication adds an extra layer of security to your account. Each time team members sign in, they'll need to enter both their password and a dynamic key provided by the _Google Authenticator_ app on their phones.

You can download the app for your phone with the following links:

* Android: [Google Authenticator on Google Play](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
* iOS: [Google Authenticator on the Apple App Store](https://apps.apple.com/us/app/google-authenticator/id388497605)

Each team member will be able to enable two-step authentication from their profile, but as an administrator, you can also enforce two-step authentication for all team members.

By enforcing two-step authentication for team members, the next time a team member logs in, they will be required to set up their two-step authentication device. Once set up, they will need to sign in using their password and the code provided by _Google Authenticator_.


### Vulnerability Report
If you think you found a security vulnerability in Modyo, please help us by reporting the problem. Modyo has secure and confidential security incident reporting channels through our [support center](https://support.modyo.com/hc/es) or email <a href="mailto:security@modyo.com">security@modyo.com</a>.