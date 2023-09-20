---
search: true
---

# Single Sign On

Single Sign-On (SSO), or Single Sign-On, is an authentication and access method that allows users to log in to multiple systems and applications with a single authentication credential, eliminating the need to remember and provide separate credentials for each application.

SSO is based on a system of trust between service providers and a centralized identity provider. When logging in to the identity provider, it generates a session token that authenticates the user to the applications and services that make up the SSO environment, allowing the user to move between services without performing additional authentications.

Benefits of using SSO:
- **Improves the user experience:** Simplifies the login process, streamlining access to applications, especially in corporate environments with numerous applications.
- **Reduces technical support:** Decreases the number of passwords that users must remember, reducing the need for password reset requests and related problems, which the technical support team must address.
- **Improves security:** Centralizes authentication, making it easier to monitor and manage access to multiple applications. Users can focus on creating a strong password; also, SSO solutions often include robust security features, such as two-factor authentication.
- **Save time and increase productivity: ** Users can quickly access all the apps they need without signing in to each one separately.
- **Simplifies administration: ** For IT administrators, implementing SSO allows you to manage a set of credentials per user instead of managing access to each application individually.

:: :danger Security
It's important to note that, if not implemented correctly, SSO can present security risks. For example, if a user's SSO credentials are compromised, an attacker could gain access to all the applications to which the user has access. Therefore, it's crucial to implement strong security measures, such as two-factor authentication and strong password policies.
:::

### Implementing SSO in Modyo

SSO in Modyo delegates authentication to a central system, making it easier to manage users and enforce centralized security policies. It can be implemented in two ways:

1. By using the [SSO component] (/es/connect/components/infrastructure.html #single -sign-on-esso) of [Modyo Connect] (/es/connect).
2. Through integration with a customer's SSO system.

Both options benefit from the platform's ability to integrate with standards such as OpenID Connect (OIDC), SAML, Azure AD, Google, OAuth2, among others.

By activating SSO within Modyo, delegating user authentication to the system you have selected. This means that Modyo relies on the SSO system to verify the identity of users and allow them to access applications and services. One of the key advantages of this delegation is that you can apply specific security policies centrally in the SSO system, providing an additional level of control and security over access to your resources.

The Modyo platform supports delegation to SSO systems in two main ways:

1. For administrator users with access to the Web console.
2. Towards end users through the configurations present in the [user realms] (/en/platform/customers/realms).

Both forms of integration are independent of each other, so you can define specific topologies for each customer, for example: Azure AD (SAML) for administrators, KeyCloak (OIDC) for the realm of users with access to the transactional application, Azure AD (OIDC) for the realm of agents with access to the internal sales application.

:: :warning Session Times
When a user is unsubscribed from SSO or from the source system, the changes in Modyo may not be immediately reflected in the next authentication attempt. This may take an additional time during which the deleted user still has access to the system. To avoid this, we recommend using session expiration times in accordance with company security requirements or implementing advanced session term flows, such as Single Logout.
:::



