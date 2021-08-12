---
search: true
---

# Identity Providers

One of the features Modyo has to facilitate the interaction between other user systems and Modyo is the integration with different authentication services.

The platform is currently compatible with:

- [Facebook](#facebook)
- [Google](#google)
- [LDAP](#ldap)
- [SAML](/en/platform/core/integrations/saml.html)
- [OAuth2](/en/platform/core/integrations/oauth2.html)
- [OpenID Connect](/en/platform/core/integrations/oidc.html)

Remember to have all the required data and certificates at hand before changing them or integrating a service, to avoid any potential issues with user access.

### Facebook

To be able to integrate with Facebook, you must have:

- API Key
- Secret application code

You can obtain these by creating a Facebook application with login permissions. You can learn more about how to create and configure a Facebook application in the [Official Documentation](https://developers.facebook.com/docs/facebook-login/).

### Google

In order to integrate Google login with Modyo, you must have:

- Application ID
- Key

These values can be obtained after creating an application in the Google Platform with login permissions. You can learn more about how to create and configure a Google application in your [Official Documentation](https://developers.google.com/identity/sign-in/web/sign-in).

You should keep in mind that the callback URL (_Callback URI_) is available at the end of the form. You need to use that URL in the application or project that you create in Google to be able to complete the login flow correctly.

In addition to the necessary values, you can configure additional data to control the Google login experience. If you enable the _Restrict domains_ option, you can use two extra fields:

- **Domain example**: These will be the domains that are shown as a suggestion when you are signing in to Google.
- **Supported domains**: If the email domain that the user uses when signing in with Google is not in this list, then the login will not be valid and the user will be redirected to the Modyo login view without an active session.

### LDAP

In order to integrate a login with LDAP in Modyo, you will need the following information from your identity provider:

- **Service name**: It will be displayed under the service login icon or logo.
- **Host**: Address in which the LDAP login service is available
- **Port**: Port with which Modyo and your LDAP identification service should communicate.
- **Base**: Search base, consisting of multiple objects separated by commas.
- **UID**: Name of the field used by the LDAP service to identify users as a unique attribute.
- **Bind DN**: Default credentials.
- **Password**
- **Method**: Authentication method with the LDAP identity service.
- **Logo**: It is not required, but if you want it to appear next to the name of the service (for example, the logo of your company), you can upload an image in this field.

### SAML

In order to integrate a login with SAML in Modyo, you will need the following information from your identity provider:

- Service name
- Issuer
- URL of the identity provider service
- Parameters of the identity service provider URL
- Identity provider certificate
- Signature of the identity provider certificate
- Name identification format
- Service callback URL: By default this URL is `account_url/admin/auth/saml/callback`
- Logo: As in LDAP, this image will be displayed as a service logo next to the service name in the login form.

### OAuth2

In order to integrate a login with OAuth2 in Modyo, you will need the following information from your identity provider:

- Service name
- Service description
- Authentication URL: OAuth2 authentication service URL
- Customer ID
- Key (secret)
- Scope: If your OAuth2 authentication service uses multiple spaces or environments to separate users and you want to use a specific one in this integration, you must define it in this field.
- Field for login: You can choose between using the user's email or username. This option is useful if your OAuth2 authentication provider uses, for example, a numeric field and not an email as an identifier.
- Placeholder for login: Text that will be displayed in the identification field as a placeholder if the user has not filled in the field
- Use SSL: Enable this option if your OAuth2 authentication service uses a secure sockets layer (SSL: _Secure Sockets Layer_)


### OpenID Connect

OpenID Connect (OIDC) is an authentication layer and framework that works on top of OAuth 2.0. Its standard is controlled by the [OpenID Foundation](https://openid.net/connect/).

:::warning Warning
For a successful OpenID Connect integration, the OIDC Provider must have an up-to-date SSL certificate, the Modyo client uses TLS 1.3 and OpenSSL Security Level 2 [(ref)](https://www.openssl.org/docs/man1.1.1/man3/SSL_CTX_get_security_level.html).
:::
:::warning Warning
The delegated token API via `/auth/openidc/access_token` has been deprecated in favor of `/api/profile/me`.
:::

## Using Keycloak

Keycloak is a certified OpenID Connect identity provider that implements most of the features of Modyo OpenID Connect integration.

### Register a new client application

1. Access the administrative console, for example [https://keycloak.example.com/auth/](https://keycloak.example.com/auth/) and add a new realm.
2. Add a client application using `openid-connect` as the **Client Protocol** for integration with Modyo.
3. Set **Access Type** to `confidential` and leave only the **Standard Flow** enabled.
4. Configure the **Valid Redirect URIs** with the callback and logout URLs of the Modyo account, using the URLs related to the `/auth/openidc/callback` and`/logout * `account.

### Integration Settings

The following configuration is valid for both Team and Customer user integrations.

1. Access **Settings/Customer settings> Integrations> OpenID Connect** and complete **Client ID** and **Secret** with the name of the client and the credentials that appear in the tab **Credentials** of the client in Keycloak.
2. In Issuer, fill in the URL of the realm, for example, for realm my-realm the URL is `https://keycloak.example.com/auth/realms/my-realm`.
3. Click **Launch discovery service**. This will complete most of the settings.
4. Configure the **Scopes** with the scopes required for the application. Use `openid, email, profile` in case you don't have custom scopes.

### Optional integration settings

When performing a specific integration, Modyo allows you to enable certain settings to control the following session features:

|                                                                     |                                                                                                                                                                                                                        |
|---------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Enable refresh token**                                         | Enable token refreshment managed by Modyo. The access tokens will be automatically renewed by the platform if the user maintains activity on the site and has a valid refresh token.          |
| **Enable logout**                                      | Enable logging out of the provider when logging out of Modyo. This allows the session to be effectively closed, forcing the user to identify themselves again in Keycloak and disabling the SSO experience. |
| **Enable token revocation**                                   | Not supported by Keycloak                                                                                                                                                                                              |
| **Enable claims synchronization at login** | Enable synchronization of OpenID Connect claims with custom fields in Modyo. More information in [Claims Synchronization](#claims-synchronization).                                                             |
|                                                                     |                                                                                                                                                                                                                        |

## Using Azure Active Directory

Azure Active Directory is a Microsoft Azure cloud identity service that allows you to implement a hybrid identity scheme based on on-premise directories with SSO in the cloud.

### Register new client application

1. Log in to the [Azure Portal](https://portal.azure.com/).
2. In the search bar, search for **Azure Active Directory**, and then select **App registrations> New registration**.
3. Complete the following information
   * **Name**: Use a meaningful name, for example, `modyo-production`.
   * **Supported account types**: Use **"Accounts in any organizational directory and personal Microsoft accounts"** to include personal Microsoft accounts. You can find more information about it [here](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps).
   * **Redirect URI**: Use the URL related to the `/auth/openidc/callback` account.
4. Once the application is created, go to **App registrations> modyo-production** and get the **Application ID** and **Directory ID**.
5. Go to **App registrations> Certificates & secrets** and create a new secret with the **New client secret** button.

### Integration Settings

The following configuration is valid for both Team and Customer user integrations.

1. Access **Configuration/Configuration of customers> Integrations> OpenID Connect**, and complete **Client ID** and **Secret** with the credentials obtained from the Azure portal.
2. In the Azure console go to **App registrations> Endpoints** and get URLs for **Authorization endpoint** and **Token endpoint**. Visit the OpenID Connect metadata document and get **Userinfo endpoint** and **End session endpoint**.
3. Configure **Scopes** with the scopes required for the application. Use `openid, email, profile` in case you don't have custom scopes.
4. Enable optional integration features.
   |                                        |                                                                                                                                                                                                                        |
   |----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | **Enable refresh token** | Enable token refreshment managed by Modyo. The access tokens will be automatically renewed by the platform if the user maintains activity on the site and has a valid refresh token. |
   | **Enable logout** | Enable logging out of the provider when logging out of Modyo. This allows the session to be effectively closed, forcing the user to identify again in Azure AD, and disabling the SSO experience. |
   | **Enable token revocation** | Not supported by Azure AD|
   | **Enable sync of _claims_ at login** | Enable sync of _claims_ OpenID Connect with custom fields in Modyo.|

## Synchronization of _claims_

Modyo allows you to synchronize attributes and other properties of Customer users through standard and additional _claims_ through OpenID Connect.

1. In **Clients> Mappers** create a new **Protocol Mapper** with the attribute or property of the user. Make sure **Add to userinfo** is enabled.
2. In **Customers> Customer settings> Custom fields** add a new **Custom Field** with a data type equivalent to the claim.
3. In **Customers> Customer settings> Integrations> OpenID Connect** enable **Enable _claims_ synchronization on login** and add _claims_ mappings for each of your _claims_.



