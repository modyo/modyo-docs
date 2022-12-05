---
search: true
---

# Identity Providers

One of the features Modyo has to facilitate the interaction between other user systems and Modyo is the integration with different authentication services.

The platform is currently compatible with:

- [Google](#google)
- [SAML](#saml)
- [OAuth2](#oauth2)
- [OpenID Connect](#openid-connect)
- [Keycloak](#keycloak)
- [Azure Active Directory](#azure-active-directory)

Remember to have all the required data and certificates at hand before changing them or integrating a service, to avoid any potential issues with user access.

## Requirements

The following attributes must be configured from the Identity Provider to ensure a successful connection to Modyo Platform:

- **givenName** or (from version 9.2.22 onwards can also be `givenname`). Corresponds to the user name.
- **sn** (from version 9.2.22 onwards can also be `surname`). Corresponds to the last name of the user.

## Add an identity provider

To add a new identity provider, follow these steps:

1. From the main menu, expand **Settings** and click **Identity Providers**.
1. Click **+ Add**.
1. On the dropdown, select the integration you want to add.
1. Add the information needed for the integration (Name, ID, Secret, etc.).
1. Click **Add**.

<img src="/assets/img/platform/nuevo-idp.png" alt="Add a new Identity Provider page." width="500px" style="margin-top: 40px; border: 1px solid #EEE;"/>

## Google

In order to integrate Google login with Modyo, you must have:

- Application ID
- Key

These values can be obtained after creating a Google app with login permissions. You can learn more about how to create and configure a Google app in their [official documentation](https://developers.google.com/identity/sign-in/web/sign-in).

You should keep in mind that the callback URL (_Callback URI_) is available at the end of the form. You need to use that URL in the application or project that you create in Google to be able to complete the login flow correctly.

In addition to the necessary values, you can configure additional data to control the Google login experience. If you enable the _Restrict domains_ option, you can use two extra fields:

- **Domain example**: These will be the domains that are shown as a suggestion when you are signing in to Google.
- **Supported domains**: If the email domain that the user uses when signing in with Google is not in this list, then the login will not be valid and the user will be redirected to the Modyo login view without an active session.

## SAML

In order to integrate a login with SAML in Modyo, you will need the following information from your identity provider:

- **Service name**: Name of the button to be displayed in the login view.
- **Sender**: Identifier of the IDP application. Some services are required to add the `spn` prefix:  
(For example: `spn:13e4ff44-b0c9-4618-b305-2171a24b07f5`).
- **Identity provider URL**: Identity provider login URL.
- **Identity Service Provider URL Parameters**: Optional parameters to complete the flow.
- **Identity provider certificate**: Base64 certificate provided by the identity provider.
- **Identity provider certificate signature**: Fingerprint provided by the identity provider.
- **Name identifier format**: Format in which the identifier is expected (commonly email, such as: `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`).
- **Service callback URL**: URL provided by Modyo where the identity provider redirects the flow.
   * Admin: `account_url/admin/auth/saml/callback`
   * Realms: for settings with realms use: `account_url/realms/:uid_del_realm/auth/saml/callback`.


## OAuth2

In order to integrate a login with OAuth2 in Modyo, you will need the following information from your identity provider:

- **Name of the service**
- **Service description**
- **Authentication URL**: URL of OAuth2 authentication service
- **Client ID**
- **Secret**
- **Scope**: If your OAuth2 authentication service uses multiple spaces or environments to separate users and you want to use a specific one in this integration, you must define it in this field.
- **Login field**: You can choose to use either the Modyo users' email address or their username. This option is useful if your OAuth2 authentication provider uses, for example, a numeric field and not an email as identifier.
- **Placeholder for login**: Text to be displayed in the identification field as placeholder if the user has not filled in the field.
- **Use SSL**: Enable this option if your OAuth2 authentication service uses a secure socket layer (SSL: _Secure Sockets Layer_).


## OpenID Connect

OpenID Connect (OIDC) is an authentication layer and framework that works on top of OAuth 2.0. Its standard is controlled by the [OpenID Foundation](https://openid.net/connect/).

The fields required by Modyo for the integration are:

- **first_name**
- **username**
- **email**

:::warning Warning
For a correct OpenID Connect integration, it is necessary that the OIDC Provider has an up-to-date SSL certificate, Modyo client uses TLS 1.3, and OpenSSL Security Level 2 [(ref)](https://www.openssl.org/docs/man1.1.1/man3/SSL_CTX_get_security_level.html).
:::

:::warning Warning
The API for obtaining delegated access tokens via `/auth/openidc/access_token` is deprecated and replaced by `/api/profile/me`.
:::

### Integration Settings

1. Go to **Configuration/Realm Configuration > Realm > Identity Providers > + Add > OpenID Connect** and fill in **Client ID** and **Secret** with the client's name and credentials.
2. In Issuer, fill in the URL of the realm, for example, for the realm `my-realm` the URL is `https://test.example.com/auth/realms/my-realm`.
3. Click **Launch discovery service**. This will complete most of the settings.
4. Configure the **Scopes** with the scopes required for the application. Use `openid, email, profile` in case you don't have custom scopes.

<img src="/assets/img/platform/keycloak-new-idp.png" alt="Modyo's new identity provider page." width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

### Optional integration settings

When performing a specific integration, Modyo allows you to enable certain settings to control the following session features:

| Option                                                              | Description                                                                                                                                                                                                                                                                                                                     |
|:--------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Enable logout**                                      | Enable log the user out of a session when logging out of Modyo. This effectively closes the session, forcing the user to identify themselves again with the Identity Provider and disabling the SSO experience.                                                                                                         |
| **Enable refresh token**                                         | Enable token refreshment managed by Modyo. The access tokens will be automatically renewed by the platform if the user maintains activity on the site and has a valid refresh token.                                                                                                                   |
| **Tolerance in seconds for access token**                        | Number in seconds that will be used as a margin of tolerance to obtain an access token using the refresh token.                                                                                                                                                                                                           |
| **Enable token revocation**                                   | Enables revocation of access tokens via API. For revocation, you can use the provider's endpoint to revoke tokens.                              |
| **Activate refresh token (Refresh Token) **                  | Enables the use of OAuth 2.0 refresh tokens. To refresh your access token, you can use the provider's POST endpoint by sending <tt> grant_type: refresh_token, refresh_token: **my-refresh-token**, client_id: **my-client-id** </tt>  |
| **Show delegation information**                               | Enables more information in the [User Profile API](/en/platform/customers/profile.html#profile-api) regarding delegated tokens. This is useful when the access token issued by the identity provider is needed to gain access to some other service (e.g. an external API).                           |
| **Enable claims synchronization at login** | Enable synchronization of OpenID Connect claims with custom fields in Modyo. More information in [Claims Synchronization](#claims-synchronization).                                                                                                                                                                      |



### Synchronization of _claims_

Modyo allows you to synchronize attributes and other properties of Customer users through standard and additional _claims_ through OpenID Connect.

1. In **Clients > Mappers** create a new **Protocol Mapper** with the attribute or property of the user. Make sure **Add to userinfo** is enabled.
2. In **Customers > Realms > Realm configuration > Custom Fields** add a new **Custom Field** with a data type equivalent to the claim.
3. In **Customers > Realms > Realm Settings > Identity Providers > OpenID Connect** enable **Enable _claims_ synchronization on login** and add _claims_ mappings for each of your _claims_.

## Keycloak

Keycloak is a certified OpenID Connect identity provider that implements most of the features of Modyo OpenID Connect integration.

### Register a new client application

1. From the administrative console, for example [https://keycloak.example.com/auth/](https://keycloak.example.com/auth/) click add a new realm.

<img src="/assets/img/platform/keycloak-add-realm.png" alt="Keycloak add a new realm button." width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

2. Click add a client application. Use `openid-connect` as **Client Protocol** for integrating with Modyo.

<img src="/assets/img/platform/keycloak-add-client.png" alt="Keycloak add a client page." width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

3. Set **Access Type** to `confidential` and leave only the **Standard Flow** enabled.
4. Configure the **Valid Redirect URIs** with the Modyo account callback and logout URLs, using the URLs to the account, adding `/realms/my-realm` if you are using a realm. For example: `test.modyo.com/realms/my-realm/auth/openidc/callback` and `test.modyo.com/realms/my-realm/logout*`.

### Configuring Keycloak in Modyo Platform

After configuring Keycloak, you now have to complete the integration in Modyo Platform. 

1. Go to **Configuration/Realm Configuration > Identity Providers > OpenID Connect** and fill in **Client ID** and **Secret** with the client's name and credentials that appear on the client's **Credentials** tab in Keycloak.
2. In Issuer, fill in the URL of the realm, for example, for realm my-realm the URL is `https://keycloak.example.com/auth/realms/my-realm`.
3. Click **Launch discovery service**. This will complete most of the settings.
4. Configure the **Scopes** with the scopes required for the application. Use `openid, email, profile` in case you don't have custom scopes.


## Azure Active Directory

Azure Active Directory is a Microsoft Azure cloud identity service that allows you to implement a hybrid identity scheme based on on-premise directories with SSO in the cloud.

### Register new client application

1. Log in to the [Azure Portal](https://portal.azure.com/).
2. In the search bar, search for **Azure Active Directory**, and then select **App registrations > New registration**.

<img src="/assets/img/platform/aad-registration.png" alt="Microsoft Azure's Register an Application page." width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

3. Complete the following information
   * **Name**: Use a meaningful name, for example, `modyo-production`.
   * **Supported account types**: Use **"Accounts in any organizational directory and personal Microsoft accounts"** to include personal Microsoft accounts. You can find more information about it [here](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps).
   * **Redirect URI**: Use the URL related to the `/auth/openidc/callback` account.
4. Once the application is created, go to **App registrations > modyo-production** and get the **Application ID** and **Directory ID**.

<img src="/assets/img/platform/aad-client.png" alt="Azure's overview page with Application and Directory IDs." width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

5. Go to **App registrations > Certificates & secrets** and create a new secret with the **New client secret** button.

<img src="/assets/img/platform/aad-secret.png" alt="New client secret button." width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

### Integration Settings

The following configuration applies to both Team and Customer user integrations.

1. From the Modyo platform, select **Settings/Realm Settings** and click **Identity Providers**.
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
