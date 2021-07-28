---
search: true
---

# Security
At Modyo, everything about safety is very important to us. That is why we created this guide that will serve as a reference in everything you need to secure a Modyo installation. While Modyo Cloud and Enterprise Cloud, our hosted solutions, provide an excellent level of security by default, platform administrators can take additional protection measures to increase the security of their organizations. This guide presents the most important recommendations to achieve this.

### Important Concepts
* **Limit access:** Reduce the chances of a malicious actor gaining access to the system.

* **Containment:** The system must be configured in such a way as to minimize the amount of damage a bad actor may cause if it is violated.

* **Preparation and knowledge:** Maintain backups and procedures to be prepared in the event of a catastrophe.

* **Trusted Sources:** Avoid deploying Widgets or codes from unreliable sources. Ensure that all dependencies that are loaded into a site come from a reliable source.

### Local Vulnerabilities
Ensure that the hardware of all administrators of the platform is free of spyware, malware, and virus infections. Even a secure installation of Modyo could be broken into by malicious actors who exploit a user's valid session from a local computer.

Ensure that access always comes from an up-to-date computer, using reliable and up-to-date Internet browsers.


### Set up a Strong Password in the Admin Panel
The Admin Panel is Modyo's most powerful management tool. It is possible to take control of many of the most relevant configurations and actions in Modyo's operation, as well as providing an administrative gateway to all organizations defined within the platform. We recommend setting a strong password and rotating it regularly (example: after each important platform update).

### Review Administration Permissions
Administrators of an organization or site have a high level of access to content and settings that must be private. Any vulnerability to one of these administrators can pose a great security risk. That is why we recommend keeping a small and highly controlled number of users with a general management role and ensuring that these users maintain active additional levels of protection such as a second authentication factor.

Administrators can also create tokens for access to platform management APIs. These tokens are often used to automate common management tasks, it is important to ensure that they are only used within secure systems that ensure their protection.

### Update Modyo Regularly
We recommend updating Modyo periodically to ensure you are always on the last patch available. This will ensure that your installation has all security patches up to date. Security patches are performed in such a way that they can be applied without mostly affecting work computers (example: moving from 9.1.10 to 9.1.12).

We recommend performing _upgrades_ of _releases_ older at least twice a year (example: moving from 9.1.14 to 9.2.2). By doing this you will be able to ensure that you are not only in the latest version with support, but also that you have the latest features.

### Enable the Second Factor of Authentication
Consider enabling the second authentication factor whenever your identity server allows it. If you use Modyo's credentials system, we recommend that you enable this protection. We strongly recommend enabling this functionality for better security posture.

### Enable Transport Layer Security (TLS)
Forcing connections to be TLS only in your installation ensures that all inbound and outbound traffic is encrypted. In addition, we recommend using only modern versions of the protocol, in particular versions 1.2 or 1.3.

### Differentiate Subdomains
Subdomain differentiation is very important, as there are multiple places where Modyo supports HTML development. If this is not active, the HTML of sites developed on Modyo can become an attack vector that could impact other Modyo components via cross-site _scripting_.

### Review the Backup Processors
Running backup processes on a regular basis is very important in a secure Modyo deployment. For Cloud and Enterprise Cloud, this is done automatically. In the case of Enterprise On Premise, it is the operation team of each customer responsible for this activity.

Modyo backups cover both the database and file shared directories, where static content is stored.

### Using an Exit Proxy Server
Modyo may make communications to the Internet, with regard to the capabilities of identity providers or integration Webhooks. In order to control outbound communication, you must establish an outbound proxy or network NAT scheme where the source IPs of the communication are not exposed.

### Restrict Public Ports of Entry
Modyo users will have to access exclusively through port 443, behind a load balancer that distributes traffic to different instances of the platform. Between the load balancer and the platform instances traffic can go through port 443 or 80 depending on the internal security of your network (example: isolated and protected networks such as Amazon AWS VPCs may not require internal encryption).

### Vulnerability Report
If you think you found a security vulnerability in Modyo, please help us by reporting the problem. Modyo has secure and confidential security incident reporting channels through our [support center](https://support.modyo.com/hc/es) or email <a href="mailto:security@modyo.com">security@modyo.com</a>.



