---
search: true
---

# Identity Providers

One of the features Modyo has to facilitate the interaction between other user systems and Modyo is the integration with different authentication services.

The platform is currently compatible with:

- [Facebook](#facebook)
- [Google](#google)
- [LDAP](#ldap)
- [SAML](#saml)
- [OAuth2](#oauth2)
- [OpenID Connect](#oidc)
- [Keycloak](#keycloak)
- [Azure Active Directory](#azure-active-directory)

Remember to have all the required data and certificates at hand before changing them or integrating a service, to avoid any potential issues with user access.



## Add an identity provider

To add a new identity provider, follow these steps:

1. From the main menu, expand **Settings** and click **Identity Providers**.
1. Click **+ Add**.
1. On the dropdown, select the integration you want to add.
1. Add the information needed for the integration (Name, ID, Secret, etc.).
1. Click **Add**.

<img src="/assets/img/platform/nuevo-idp.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

## Facebook

To be able to integrate with Facebook, you must have:

- API Key
- Secret application code
- Callback URL `/realms(/:realm_uid)/auth/facebook/callback`


You can obtain these values by creating a Facebook application with permissions to log in. To learn more about creating and configuring a Facebook app, see its [official documentation](https://developers.facebook.com/docs/facebook-login/).

<img src="/assets/img/platform/facebook-login-settings.png" width="500px" style="margin-top: 40px;" />

## Google

In order to integrate Google login with Modyo, you must have:

- Application ID
- Key

These values can be obtained after creating a Google app with login permissions. You can learn more about how to create and configure a Google app in their [official documentation](https://developers.google.com/identity/sign-in/web/sign-in).

You should keep in mind that the callback URL (_Callback URI_) is available at the end of the form. You need to use that URL in the application or project that you create in Google to be able to complete the login flow correctly.

In addition to the necessary values, you can configure additional data to control the Google login experience. If you enable the _Restrict domains_ option, you can use two extra fields:

- **Domain example**: These will be the domains that are shown as a suggestion when you are signing in to Google.
- **Supported domains**: If the email domain that the user uses when signing in with Google is not in this list, then the login will not be valid and the user will be redirected to the Modyo login view without an active session.

## LDAP

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

## SAML

In order to integrate a login with SAML in Modyo, you will need the following information from your identity provider:

- Service name
- Issuer
- URL of the identity provider service
- Parameters of the identity service provider URL
- Identity provider certificate
- Signature of the identity provider certificate
- Name ID format
- Service callback URL: By default this URL is `account_url/admin/auth/saml/callback`
- Logo: As in LDAP, this image will be displayed as a service logo next to the service name in the login form.

## OAuth2

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


## OpenID Connect

OpenID Connect (OIDC) is an authentication layer and framework that works on top of OAuth 2.0. Its standard is controlled by the [OpenID Foundation](https://openid.net/connect/).

:::warning Warning
For a correct OpenID Connect integration, it is necessary that the OIDC Provider has an up-to-date SSL certificate, Modyo client uses TLS 1.3, and OpenSSL Security Level 2 [(ref)](https://www.openssl.org/docs/man1.1.1/man3/SSL_CTX_get_security_level.html).
:::

:::warning Warning
The API for obtaining delegated access tokens via `/auth/openidc/access_token` is deprecated and replaced by `/api/profile/me`.
:::

### Synchronization of _claims_

Modyo allows you to synchronize attributes and other properties of Customer users through standard and additional _claims_ through OpenID Connect.

1. In **Clients > Mappers** create a new **Protocol Mapper** with the attribute or property of the user. Make sure **Add to userinfo** is enabled.
2. In **Customers > Customer settings > Custom fields** add a new **Custom Field** with a data type equivalent to the claim.
3. In **Customers > Customer settings > Integrations > OpenID Connect** enable **Enable _claims_ synchronization on login** and add _claims_ mappings for each of your _claims_.

## Keycloak

Keycloak is a certified OpenID Connect identity provider that implements most of the features of Modyo OpenID Connect integration.

### Register a new client application

1. From the administrative console, for example [https://keycloak.example.com/auth/](https://keycloak.example.com/auth/) click add a new realm.

<img src="/assets/img/platform/keycloak-add-realm.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

2. Click add a client application. Use `openid-connect` as **Client Protocol** for integrating with Modyo.

<img src="/assets/img/platform/keycloak-add-client.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

3. Set **Access Type** to `confidential` and leave only the **Standard Flow** enabled.
4. Configure the **Valid Redirect URIs** with the callback and logout URLs of the Modyo account, using the URLs related to the `/auth/openidc/callback` and`/logout * `account.

### Integration Settings

The following configuration is valid for both Team and Customer user integrations.

1. Access **Settings/Customer settings> Integrations> OpenID Connect** and complete **Client ID** and **Secret** with the name of the client and the credentials that appear in the tab **Credentials** of the client in Keycloak.
2. In Issuer, fill in the URL of the realm, for example, for realm my-realm the URL is `https://keycloak.example.com/auth/realms/my-realm`.
3. Click **Launch discovery service**. This will complete most of the settings.
4. Configure the **Scopes** with the scopes required for the application. Use `openid, email, profile` in case you don't have custom scopes.

<img src="/assets/img/platform/keycloak-new-idp.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

### Optional integration settings

When performing a specific integration, Modyo allows you to enable certain settings to control the following session features:

|Option  | Description  |
|:---    |:---          |
| **Enable logout**                                      | Enable logging out of the provider when logging out of Modyo. This allows the session to be effectively closed, forcing the user to identify themselves again in Keycloak and disabling the SSO experience. |
| **Enable refresh token**                                         | Enable token refreshment managed by Modyo. The access tokens will be automatically renewed by the platform if the user maintains activity on the site and has a valid refresh token.          |
| **Enable token revocation**                                   | Not supported by Keycloak|
| **Activate refresh token (Refresh Token) **                                  | Enables the use of OAuth 2.0 refresh tokens. To refresh your access token, you can use the post endpoint of keycloak <tt>/auth/realms/<b>myrealm</b>/protocol/openid-connect/token</tt> sending as headers <tt> grant_type: refresh_token, refresh_token: **my-refresh-token**, client_id: **my-client-id** </tt>                                        |
| **Show delegation information**                               | Enables more information in the [User Profile API](/en/platform/customers/profile.html#profile-api) regarding delegated tokens. This is useful when the access token issued by the identity provider is needed to gain access to some other service (e.g. an external API). |
| **Enable claims synchronization at login** | Enable synchronization of OpenID Connect claims with custom fields in Modyo. More information in [Claims Synchronization](#claims-synchronization).                                                             |


## Azure Active Directory

Azure Active Directory is a Microsoft Azure cloud identity service that allows you to implement a hybrid identity scheme based on on-premise directories with SSO in the cloud.

### Register new client application

1. Log in to the [Azure Portal](https://portal.azure.com/).
2. In the search bar, search for **Azure Active Directory**, and then select **App registrations > New registration**.

<img src="/assets/img/platform/aad-registration.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

3. Complete the following information
   * **Name**: Use a meaningful name, for example, `modyo-production`.
   * **Supported account types**: Use **"Accounts in any organizational directory and personal Microsoft accounts"** to include personal Microsoft accounts. You can find more information about it [here](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps).
   * **Redirect URI**: Use the URL related to the `/auth/openidc/callback` account.
4. Once the application is created, go to **App registrations > modyo-production** and get the **Application ID** and **Directory ID**.

<img src="/assets/img/platform/aad-client.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

5. Go to **App registrations > Certificates & secrets** and create a new secret with the **New client secret** button.

<img src="/assets/img/platform/aad-secret.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

### Integration Settings

The following configuration applies to both Team and Customer user integrations.

1. From Modyo platform, select **Settings/Customer Settings** and click **Integrations**
1. Select **OpenID Connect** and fill out **Client ID** and **Secret** with the credentials obtained from the Azure portal.
1. In the Azure console, select **App registrations** and click **Endpoints** to get the **Authorization endpoint** and **Token endpoint** URLs. 
1. Visit the OpenID Connect metadata document and get **Userinfo endpoint** and **End session endpoint**.
1. Configure **Scopes** with the scopes required for the application. Use `openid, email, profile` in case you don't have custom scopes.
1. Enable optional integration features.
   |  Option                                      |       Description                                                                                                                                                                                                                 |
   |----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | **Enable refresh token** | Enable token refreshment managed by Modyo. The access tokens will be automatically renewed by the platform if the user maintains activity on the site and has a valid refresh token. |
   | **Enable logout** | Enable logging out of the provider when logging out of Modyo. This allows the session to be effectively closed, forcing the user to identify again in Azure AD, and disabling the SSO experience. |
   | **Enable token revocation** | Not supported by Azure AD|
   | **Show delegation information** | Enable more information in the [User Profile API](/en/platform/customers/profile.html#profile-api) regarding delegated tokens. This is useful when you need the access token issued by the identity provider to gain access to some other service (e.g. an external API). | | **Enable synchronization of claims at login** | Enables synchronization of OpenID Connect claims with custom fields in Modyo. For more information, see [Synchronization of claims](#sincronization-of-claims). |
