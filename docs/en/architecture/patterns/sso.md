---
search: true
---

# Single Sign-On (SSO)

Single Sign-On (SSO) is an authentication method that allows users to access multiple systems and applications with a single set of credentials, eliminating the need to remember and provide separate credentials for each.

SSO is based on a trust system between service providers and a centralized identity provider. When a user logs into the identity provider, a session token is generated that authenticates the user to the applications and services within the SSO environment, enabling seamless navigation between services without additional authentications.

Advantages of SSO:
- **Improves the user experience**: Simplifies the login process, streamlining access to applications, especially in corporate environments with numerous applications.
- **Reduces technical support**: Decreases the number of passwords users need to remember, thereby reducing password reset requests and related issues for the technical support team.
- **Improves security**: Centralizes authentication, making it easier to monitor and manage access to multiple applications. It allows users to focus on creating strong passwords, and SSO solutions often include robust security features, such as two-factor authentication.
- **Saves time and increases productivity**: Users can quickly access all the applications they need without logging into each one separately.
- **Simplifies administration**: For IT administrators, implementing SSO allows them to manage a single set of credentials per user instead of managing access to each application individually.

:::danger Security
It is important to note that, if not implemented correctly, SSO can present security risks. For example, if a user's SSO credentials are compromised, an attacker could gain access to all applications to which the user has access. Therefore, it is crucial to implement strong security measures (e.g., two-factor authentication, strong password policies).
:::

### SSO Implementation in Modyo

SSO in Modyo delegates authentication to a central system, facilitating user management and the application of centralized security policies. It can be implemented in two ways:

1. Through the [SSO component](/en/connect/components/infrastructure#single-sign-on-sso) of [Modyo Connect](/en/connect).
2. Through integration with a client's existing SSO system.

Both options benefit from the platform's ability to integrate with standards such as OpenID Connect (OIDC), SAML, Azure AD, Google, and OAuth2, among others.

By activating SSO in Modyo, user authentication is delegated to the selected system. This means that Modyo relies on the SSO system to verify user identity and grant access to applications and services. A key advantage of this delegation is the ability to apply specific security policies centrally within the SSO system, providing an additional level of control and security over resource access.

The Modyo platform supports delegation to SSO systems in two main ways:

1. For administrator users with access to the web console.
2. For end users through the configurations in the [user realms](/en/platform/customers/overview).

Both forms of integration are independent, allowing for the definition of specific topologies for each client (e.g., Azure AD (SAML) for administrators, KeyCloak (OIDC) for users with access to the transactional application, Azure AD (OIDC) for agents with access to the internal sales application).

:::warning Session Times
When a user is unsubscribed from the SSO or the source system, changes in Modyo may not be immediately reflected in the next authentication attempt. This can result in an additional period during which the deleted user still has system access. To avoid this, it is recommended to use session expiration times in accordance with the company's security requirements or to implement advanced session termination flows, such as Single Logout.
:::
