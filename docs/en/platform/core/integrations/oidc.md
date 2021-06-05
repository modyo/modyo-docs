---
search: true
---

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
4. Enables optional integration features.
   | | |
   |—|—|
   | **Enable refresh token** | Enable token refresh managed by Modyo. Access tokens will be automatically renewed by the platform if the user is active on the site and has a valid refresh token. |
   | **Enable logout** | Enables logoff in provider when logging off from Modyo. This allows you to effectively log out, forcing the user to sign in again in Azure AD, and disabling the SSO experience. |
   | **Enable token revocation** | Not supported by Azure AD|
   | **Enable _claims_ synchronization at login** | Enables synchronization of _claims_ OpenID Connect with custom fields in Modyo. |

## Synchronization of _claims_

Modyo allows you to synchronize attributes and other properties of Customers users through standard and additional OpenID Connect _claims_.

1. In **Clients > Mappers** create a new **Protocol Mapper** with the user's attribute or property. Make sure **Add to userinfo** is enabled.
2. In **Customers > Customer Settings > Custom Fields** add a new **Custom Field** with a data type equivalent to the claim.
3. In **Customers > Customers Settings > Integrations > OpenID Connect** enable **Enable _claims_ synchronization on login** and add _claims_ mappings for each of your _claims_.
