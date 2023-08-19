---
search: true
---

# Single Sign On

Single Sign-On (SSO), which translates to “single sign-on”, is a method of authentication and access that allows users to log in to multiple systems and applications using a single authentication credential. Instead of having to remember and provide separate credentials for each application, SSO allows users to authenticate once and then access multiple resources without having to re-enter their credentials.

SSO is based on a system of trust between service providers and a centralized identity provider. When a user logs in to the identity provider with their credentials, a session token is generated that is used to authenticate the user in the different services and applications that are part of the SSO environment. In this way, the user can navigate between services without needing to authenticate again.

Benefits of using an SSO:
- **Improves the user experience:** By having to remember just one username and password, the login process is simplified and streamlined. This is especially useful in corporate environments, where users may need to access many different applications.
- **Reduce technical support:** By having fewer passwords to remember, users are less likely to forget their credentials, which can reduce the number of password reset requests and other related issues that the technical support team needs to handle.
- **Improves security: ** Although it may seem contradictory, SSO can improve security. Users only need to remember one password, so they can focus on making it very secure. In addition, SSO solutions often have robust security features, such as two-factor authentication. By centralizing authentication, it's also easier to monitor and manage access to multiple applications.
- **Save time and increase productivity: ** Users can quickly access all the apps they need without having to sign in to each one individually.
- **Simplified administration: ** For IT administrators, implementing SSO means that they only need to manage one set of credentials per user, instead of having to manage access to each application individually.

SSO simplifies the login process for users, improves usability, and reduces the burden of remembering multiple sets of credentials. It also helps improve security, as service providers can rely on the authentication performed by the centralized identity provider, which usually has stronger security controls.

:: :danger Security
It's important to note that while SSO has many benefits, it can also present risks if it's not implemented correctly. For example, if a user's SSO credentials are compromised, the attacker would potentially have access to all the applications that the user has access to. Therefore, it is critical to implement robust security measures, such as two-factor authentication and strong password policies.
:::

### How do you implement SSO with Modyo?

SSO in Modyo can be implemented in two ways: by using the [SSO component] (/es/connect/components/infrastructure.html #single -sign-on-sto) of [Modyo Connect] (/es/connect), or by integrating into a customer SSO system. Both forms benefit from the platform's native integration capabilities, which provide compatibility with OpenID Connect (OIDC), SAML, Azure AD, Google, OAuth2, among others.

By activating SSO within Modyo, user authentication is completely delegated to the chosen system, allowing specific security policies to be applied centrally to the SSO system. Once the user is unsubscribed from the central system, Modyo will no longer be able to authenticate them, so the change is immediately reflected in the next authentication attempt.

The Modyo platform supports delegation to SSO systems in two main ways. The first of these is for administrator users with access to the web console. The second of these is towards end users through the configurations present in the [user realms] (/es/platform/customers/realms). Both forms of integration are independent of each other, so specific topologies can be defined for each customer with considerable flexibility, for example: Azure AD (SAML) for administrators, KeyCloak (OIDC) for the realm of users with access to the transactional application, Azure AD (OIDC) for the realm of agents with access to the internal sales application.

:: :warning Session Times
Once users are unsubscribed from the SSO or source system, the changes in Modyo will be reflected in the next internal authentication, which can happen over a longer time in which the deleted user will continue to have access to the system. To avoid this, it is recommended to use session expiration times in accordance with business security requirements, or to implement more sophisticated session term flows (Single Logout).
:::



