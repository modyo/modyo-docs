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
- [Azure Entra ID](#azure-active-directory)

Remember to have all the required data and certificates at hand before changing them or integrating a service, to avoid any potential issues with user access.

:::tip Realms with a custom domain
The callback URLs on this page use the form `https://my_account.modyo.com/realms/my_realm/auth/...`. If the realm has a [custom domain](/en/platform/customers/settings.html#domains), they become `https://<your-domain>/realms/auth/...`, without the realm identifier, and you must update them on your provider. You find them in **Realm settings** > **Domains**.
:::

## Add an Identity Provider

To add a new identity provider, follow these steps:

1. From the main menu, expand **Settings** and click **Identity Providers**.
1. Click **Add**.
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

### Requirements

To achieve a successful connection between SAML and Modyo, configure the following attributes in the Identity Provider:

- **givenName** or (from version 9.2.22 onwards can also be `givenname`). Corresponds to the user name.
- **sn** (from version 9.2.22 onwards can also be `surname`). Corresponds to the last name of the user.

To integrate SAML login with Modyo, you need the following data from your identity provider:

- **Service Name**: The name that will be displayed on the login button.
- **Issuer**: Identifier of the IDP application. Some services require adding the `spn` prefix:
(For example: `spn:13e4ff44-b0c9-4618-b305-2171a24b07f5`).
- **SSO IDP of the destination URL**: The URL to which the authentication request is sent. You can find this in the identity provider.
- **SSO IDP runtime parameters of the destination URL**: Optional parameters to complete the flow.
- **IDP Cert**: The identity provider certificate in PEM format. This takes precedence over the fingerprint option.
- **IDP certificate fingerprint**: The SHA1 fingerprint of the identity provider's public certificate.
- **Name identifier format**: Used during service provider-initiated SSO (SP-Initiated SSO). Describes the username format required by the application. See section 8.3 of http://docs.oasis-open.org/security/saml/v2.0/saml-core-2.0-os.pdf for other options. The identity provider may not allow all options; if not specified, the provider can choose the name identifier format used in the response; commonly email, such as: `urn:oasis:names:tc.saml:1.1:nameid-format:emailAddress`
- **Entity ID URL**: URL provided by Modyo where the application identifier is located:
   * Admin: `test.modyo.com/admin/auth/saml/metadata`.
   * Realms: for settings with realms use: `test.modyo.com/realms/<tu_uid_del_realm>/auth/saml/metadata`.
- **URL of the consumer service assertion**: The URL provided by Modyo to which the identity provider redirects the flow.
   * Admin: `test.modyo.com/admin/auth/saml/callback`.
   * Realms: for configurations with realms use: `test.modyo.com/realms/<tu_uid_del_realm>/auth/saml/callback `
- ** (Optional) IDP single sign-on destination URL**: The login URL of the identity provider.

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

To create an OAuth client, go to [OAuth Client] (/en/platform/customers/settings #oauth-client).


## OpenID Connect

OpenID Connect (OIDC) is an authentication layer and framework that works on top of OAuth 2.0. Its standard is controlled by the [OpenID Foundation](https://openid.net/connect/).

### Requirements

The following attributes must be configured from the Identity Provider to ensure a successful connection between OpenID Connect and Modyo Platform:


- **given_name**: Corresponds to the user's name.
- **family_name**: Corresponds to the user's last name.
- **email**: Corresponds to the user's e-mail address.

:::warning Warning
For a correct OpenID Connect integration, it is necessary that the OIDC Provider has an up-to-date SSL certificate, Modyo client uses TLS 1.3, and OpenSSL Security Level 2 [(ref)](https://www.openssl.org/docs/man1.1.1/man3/SSL_CTX_get_security_level.html).
:::

:::warning Warning
The API for obtaining delegated access tokens via `/auth/openidc/access_token` was removed. To get the access token issued by the provider, use `/api/customers/realms/{realm_uid}/me` and read the `delegated_token` field, as explained in [Delegated tokens](/en/platform/customers/api.html#delegated-tokens).
:::

### Integration settings

1. Add the **OpenID Connect** integration, type a **Name**, and fill in **Client ID** and **Secret** with the client's name and credentials:
   * For team users, follow the steps in [Add an Identity Provider](#add-an-identity-provider).
   * For realm users, in **Customers > Realms** click the realm and then **Realm settings > Integrations**. In the **Identity Providers** category, click **Install** on **OpenID Connect**. Once installed, you find it in **Installed**, where you can edit it with **Configure**.
2. In **Issuer**, enter your provider's issuer URL: the `issuer` value the provider publishes in its configuration document. Modyo gets that document by appending `/.well-known/openid-configuration` to the URL you enter. Depending on the provider, it has the form `https://<provider-domain>` or `https://<provider-domain>/<tenant-path>`; see the examples for [Keycloak](#keycloak) and [Azure Entra ID](#azure-entra-id). Copy the exact value, because Modyo compares it with the issuer of the tokens the provider returns.
3. Click **Run discovery service**. Modyo fills in **JWKS URI**, **Scopes**, **Authorization endpoint**, **Token endpoint**, **Userinfo endpoint**, and **End session endpoint** with the data the provider publishes. **Token revocation endpoint** is not filled in: if you are going to turn on **Enable token revocation**, enter it manually. If the provider publishes it, you find it as `revocation_endpoint` in its configuration document.
4. Check **Scopes**. The discovery service fills it in with every scope the provider supports, so keep only the ones the application needs, separated by commas. Use `openid,email,profile` if you don't have custom scopes.

To save the integration, **Name**, **Client ID**, **Issuer**, **JWKS URI**, **Scopes**, **Authorization endpoint**, **Token endpoint**, and **Authentication Method** must have a value. **Secret** is also required, unless you choose **Disabled, client secret is not sent** in **Authentication Method**. In addition, while they are on, **Enable User Info** (on by default) requires **Userinfo endpoint**, **Enable token revocation** requires **Token revocation endpoint**, and **Enable proof key for code exchange (PKCE)** requires **Proof key for code exchange method**.

<img src="/assets/img/platform/keycloak-new-idp.png" alt="Modyo's new identity provider page." width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

#### URLs to register on the provider

The OpenID Connect form does not show Modyo's URLs. Register them on your provider, replacing `<account>` with your account's domain, for example `test.modyo.com`, and `<realm-uid>` with the realm's **Identifier**:

| Integration | Callback URL | Return URL after logout |
|:--|:--|:--|
| Team | `https://<account>/admin/auth/openidc/callback` | `https://<account>/admin/logout` |
| Realm | `https://<account>/realms/<realm-uid>/auth/openidc/callback` | `https://<account>/realms/<realm-uid>/logout` |

- Register the callback URL as the client's redirect URI. The provider sends the user there after they log in.
- The return URL after logout is only used if you turn on **Enable remote logout**: Modyo passes it to the provider so the user comes back to Modyo after logging out. Register it as the post-logout redirect URI.
- In a realm, after you enable the provider, you also see the callback URL in **Realm settings** > **Domains**. If the realm has a custom domain, both URLs change; check them in [Identity provider URLs](/en/platform/customers/settings.html#identity-provider-urls).

### Authentication Method and PKCE

**Authentication Method** is a required field that defines how Modyo delivers the client credentials to your provider. It has three possible values:

| Option | Description |
|:--|:--|
| **Client secret sent as basic authentication header** | The **Secret** travels in the `Authorization` header, using basic authentication. This is the default value. |
| **Client secret sent as form parameter** | The **Secret** travels in the request body, as one more parameter. |
| **Disabled, client secret is not sent** | Modyo does not send the **Secret** to the provider and the field is no longer required. Use it when the provider registered the application as a public client. |

The method you choose applies to every call Modyo makes to the provider with the client credentials: the authorization code exchange, the refresh token renewal, and the token revocation.

If your provider requires proof key for code exchange, turn on **Enable proof key for code exchange (PKCE)**. When you do, **Proof key for code exchange method** becomes required and accepts two values:

- **S256**: Modyo sends the challenge as the SHA-256 hash of the verifier. This is the default value.
- **plain**: Modyo sends the verifier without transforming it. Use it only if your provider does not support S256.

:::tip Tip
If the provider registered the application as a public client, combine **Disabled, client secret is not sent** with PKCE enabled on **S256**.
:::

### Optional integration settings

When performing a specific integration, Modyo allows you to enable certain settings to control the following session features:

| Option                                                              | Description                                                                                                                                                                                                                                                                                                                     |
|:--------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Enable remote logout**                               | Enable logging out of the provider when logging out of Modyo. This allows the session to be effectively closed, forcing the user to identify themselves again with the Identity Provider and disabling the SSO experience.                                                                                                         |
| **Enable refresh token**                                         | Enable token refreshment managed by Modyo. The access tokens will be automatically renewed by the platform if the user maintains activity on the site and has a valid refresh token. If you turn it off or the provider does not return a refresh token, the Modyo session ends when the provider's access token expires. It also ends if the renewal fails.                                                                                                                   |
| **Time in seconds for the anticipation of the preventive refresh token** | Number in seconds that will be used as a margin of tolerance to obtain an access token using the refresh token. It accepts values between 0 and 100. |
| **Enable token revocation**                                   | When the user logs out of Modyo, the platform revokes the session's refresh token on the provider or, if there is no refresh token, the access token. When you turn it on, **Token revocation endpoint** becomes required. |
| **Display delegation info**                                   | Enable more information in the [User Profile API](/en/platform/customers/api) regarding delegated tokens. This is useful when the access token issued by the identity provider is needed to gain access to another service (e.g., an external API).                           |
| **Enable claims synchronization on login** | In a realm, enables synchronization of OpenID Connect claims with the user's data and custom fields. More information in [Claims synchronization](#claims-synchronization). In the team, it only updates the member's first name, last name, and email with `given_name`, `family_name`, and `email`. |
| **Enable User Info** | Lets Modyo query the provider's User Info endpoint to complete the user's data. It comes enabled by default and, while it is active, **Userinfo endpoint** is required; the discovery service fills it in for you. If you turn it off, Modyo only uses the claims that come in the id_token. |
| **Include id_token_hint on logout** | Adds the `id_token_hint` parameter, with the session's id_token, to the remote logout URL. Many providers use it to identify the session being closed and skip the confirmation screen. It only takes effect if remote logout is enabled. |



### _Claims_ synchronization

Modyo allows you to synchronize attributes and other properties of Customer users through standard and additional _claims_ through OpenID Connect.

:::tip Team integration
The team's OpenID Connect integration has no **Claims mapping**. With synchronization on, Modyo only updates the team member's first name, last name, and email, with `given_name`, `family_name`, and `email`.
:::

1. In **Clients > Mappers** create a new **Protocol Mapper** with the attribute or property of the user. Make sure **Add to userinfo** is enabled.
2. In **Customers > Realms > Realm settings > Custom Fields** add a new **Custom Field** with a data type equivalent to the claim.
3. In **Customers > Realms > Realm settings > Integrations**, open **Installed** and click **Configure** on **OpenID Connect**. Turn on **Enable claims synchronization on login** and, in **Claims mapping**, click **New** to add a mapping for each _claim_: type the _claim_ name in **Claim name** and choose in **Custom Field** the field that receives it.

With synchronization on, each time the user logs in, Modyo updates their data with the _claims_ the provider returns:

- First name, last name, and email, with `given_name`, `family_name`, and `email`.
- Gender, with `gender`, if the _claim_ comes. Modyo recognizes the values `male`, `female`, `nonbinary`, and `other`.
- Date of birth, with `birthdate`. If the _claim_ does not come, the date of birth is left empty.
- The custom fields you mapped.

When you create the mappings, keep in mind the following:

- For a nested _claim_, use dot notation, for example `address.country`. This does not apply to custom fields with options.
- If the custom field has options, type in **Claim value** the _claim_ value that matches each option.
- Date _claims_ must come in ISO 8601 `YYYY-MM-DD` format.
- Each custom field accepts only one mapping.

## Keycloak

Keycloak is a certified OpenID Connect identity provider that implements most of the features of Modyo OpenID Connect integration.

### Register a new client application

1. From the administrative console, for example `https://keycloak.example.com/auth/` click on add a new realm.

<img src="/assets/img/platform/keycloak-add-realm.png" alt="Keycloak add a new realm button." width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

2. Click add a client application. Use `openid-connect` as **Client Protocol** for integrating with Modyo.

<img src="/assets/img/platform/keycloak-add-client.png" alt="Keycloak add a client page." width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

3. Set **Access Type** to `confidential` and leave only the **Standard Flow** enabled.
4. Configure the **Valid Redirect URIs** with the callback URL and the return URL after logout from [URLs to register on the provider](#urls-to-register-on-the-provider), adding a `*` at the end of the logout one. For example:
   * For the team: `https://test.modyo.com/admin/auth/openidc/callback` and `https://test.modyo.com/admin/logout*`.
   * For a realm: `https://test.modyo.com/realms/<realm-uid>/auth/openidc/callback` and `https://test.modyo.com/realms/<realm-uid>/logout*`, where `<realm-uid>` is the realm's **Identifier** in Modyo.

### Configuring Keycloak in Modyo Platform

After configuring Keycloak, you now have to complete the integration into Modyo Platform.

1. Add the **OpenID Connect** integration as described in [Integration settings](#integration-settings) and fill in **Client ID** and **Secret** with the client's name and credentials that appear on the client's **Credentials** tab in Keycloak.
2. In Issuer, fill in the URL of the realm, for example, for realm my-realm the URL is `https://keycloak.example.com/auth/realms/my-realm`.
3. Click **Run discovery service**. This will complete most of the settings.
4. Configure the **Scopes** with the scopes required for the application. Use `openid, email, profile` if you don't have custom scopes.


## Azure Entra ID

Azure Entra ID is a Microsoft Azure cloud identity service that allows you to implement a hybrid identity scheme based on on-premise directories with SSO in the cloud.

### Register new client application

1. Log in to the [Azure Portal](https://portal.azure.com/).
2. In the search bar, search for **Azure Entra ID**, and then select **App registrations > New registration**.

<img src="/assets/img/platform/aad-registration.png" alt="Microsoft Azure's Register an Application page." width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

3. Complete the following information
   * **Name**: Use a meaningful name, for example, `modyo-production`.
   * **Supported account types**: Use **"Accounts in any organizational directory and personal Microsoft accounts"** to include personal Microsoft accounts. You can find more information about it [here](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps).
   * **Redirect URI**: For admin accounts use: `test.modyo.com/admin/auth/openidc/callback`.
      * For realms use: `test.modyo.com/realms/<realm-uid>/auth/openidc/callback`, where `<realm-uid>` is the realm's **Identifier**.
      * If you are going to turn on **Enable remote logout**, also add the return URL after logout from [URLs to register on the provider](#urls-to-register-on-the-provider).
      * Substitute `test.modyo.com` for the URL of your account.
4. Once the application is created, go to **App registrations > modyo-production** and get the **Application ID (client) ** and **Directory ID (tenant) **.

<img src="/assets/img/platform/aad-client.png" alt="Azure's overview page with Application and Directory IDs." width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

5. Go to **App registrations > Certificates & secrets** and create a new secret with the **New client secret** button. It's important to copy the secret and its value to a safe place before continuing. Once you leave this window, you won't be able to access the value.

<img src="/assets/img/platform/aad-secret.png" alt="New client secret button." width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

### Integration settings

The following configuration applies to both Team and Customer user integrations.

1. From the Modyo platform, add the **OpenID Connect** integration as described in [Integration settings](#integration-settings).
1. Complete **Client ID**, also called Application ID, and **Secret** with the credentials obtained from the Azure portal.
1. On the Azure portal, under General Information, click on Connection Points, and copy the URL of **OpenID Connect Metadata Document**.
1. Open the URL in your browser, search for **Issuer**, and copy its value.
1. In Modyo Platform, paste the value into Issuer and click on **Run discovery service**. At the end of the process, all the required URLs will be filled in automatically.
1. Configure **Scopes** with the scopes required for the application. Use `openid, profile, email` if you don't have custom scopes.
1. Enable optional integration features.
   |  Option                                      |       Description                                                                                                                                                                                                                 |
   |----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | **Enable refresh token** | Enable token refreshment managed by Modyo. The access tokens will be automatically renewed by the platform if the user maintains activity on the site and has a valid refresh token. If you turn it off or the provider does not return a refresh token, the Modyo session ends when the provider's access token expires. It also ends if the renewal fails. |
   | **Enable remote logout** | Enable logging out of the provider when logging out of Modyo. This allows the session to be effectively closed, forcing the user to identify again in Entra ID, and disabling the SSO experience. |
   | **Enable token revocation** | Not supported by Entra ID |
   | **Display delegation info** | Enables more information in the [User Profile API](/en/platform/customers/api) regarding delegated tokens. This is useful when the access token issued by the identity provider is needed to gain access to another service (e.g., an external API). |
   | **Enable claims synchronization on login** | In a realm, enables OpenID Connect claims synchronization with the user's data and custom fields. More information in [Claims synchronization](#claims-synchronization). In the team, it only updates the member's first name, last name, and email. |
