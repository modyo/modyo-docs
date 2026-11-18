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
- [Azure Entra ID](#azure-entra-id)

Remember to have all the required data and certificates at hand before changing them or integrating a service, to avoid any potential issues with user access.

:::tip Realms with a custom domain
The callback URLs on this page use the form `https://my_account.modyo.com/realms/my_realm/auth/...`. If the realm has a [custom domain](/en/platform/customers/settings.html#domains), they become `https://<your-domain>/realms/auth/...`, without the realm identifier, and you must update them on your provider. You find them in **Realm settings** > **Domains**.
:::

## Add an Identity Provider

Where you set up a provider and which types you can use depends on who signs in with it:

| Users | Where to set it up | Available providers |
|:--|:--|:--|
| Team | **Settings** > **Identity providers** | OpenID Connect and SAML |
| Realm | **Realm settings** > **Integrations**, **Identity Providers** category | Google, OAuth2, OpenID Connect, and SAML |

Google is available in every realm; the other types depend on your account's plan. You can have only one provider of each type: for the team, the selector only offers the types you haven't added yet, and in a realm each integration is installed once. Keycloak and Azure Entra ID are set up as OpenID Connect providers.

In a realm, click **Install** on the provider and fill in its details. Once installed, you find it in **Installed**, where you can edit it with **Configure**.

To add an identity provider for team users, follow these steps:

1. From the main menu, expand **Settings** and click **Identity providers**.
1. Click **Add**.
1. On the dropdown, select the integration you want to add.
1. Add the information needed for the integration (Name, ID, Secret, etc.).
1. Click **Add**.

<img src="/assets/img/platform/nuevo-idp.png" alt="Add a new Identity Provider page." width="500px" style="margin-top: 40px; border: 1px solid #EEE;"/>

### Direct login

With direct login, Modyo redirects users to the identity provider as soon as they go to sign in, without showing the Modyo sign-in screen. Where you turn it on depends on the users:

- **Team**: turn on **Direct authentication** in **Settings** > **Identity providers**, below the list of providers. The switch is only enabled when there is a single enabled provider.
- **Realm**: in **Realm settings** > **Integrations**, turn on **Direct login** on the card of the installed provider. The switch is disabled while the provider is disabled.

Keep the following in mind:

- You can only turn it on when there is a single enabled identity provider. In a realm, if there is more than one, you see the error "You can only activate direct authentication when there is a single enabled identity provider".
- If you later enable another provider, or disable or delete the only enabled one, direct login turns off automatically.
- It only redirects with Google and OpenID Connect. With SAML or OAuth2 you can turn the option on, but users still sign in through the Modyo sign-in screen.
- On the team sign-in, if authentication with the provider fails, Modyo shows an error page instead of going back to the sign-in screen.

## Google

In order to integrate Google login with Modyo, you must have:

- **Client ID**: It must have the format `CLIENT_ID.apps.googleusercontent.com`.
- **Client Secret**: It only accepts unaccented letters, numbers, `.`, `-`, and `_`.

These values can be obtained after creating a Google app with login permissions. You can learn more about how to create and configure a Google app in their [official documentation](https://developers.google.com/identity/sign-in/web/sign-in).

You should keep in mind that the **Callback URI** is available at the end of the form. You need to use that URI in the application or project that you create in Google to be able to complete the login flow correctly.

In addition to the necessary values, you can control which Google accounts can sign in:

- **Restrict domains** and **Example domain to show in google login**: If you turn on **Restrict domains**, Modyo sends the example domain, which is a single one, to Google so it suggests it when signing in.
- **Allowed domain list**: If the email domain the user signs in with on Google is not in this list, the login is not valid and the user is redirected to the Modyo login view without an active session. The list applies whenever it has domains, even if **Restrict domains** is turned off. The domain must match exactly: `modyo.com` doesn't accept emails from `mail.modyo.com`.

## SAML

### Requirements

To achieve a successful connection between SAML and Modyo, configure the following attributes in the Identity Provider:

- **givenName** or (from version 9.2.22 onwards can also be `givenname`). Corresponds to the user name.
- **sn** (from version 9.2.22 onwards can also be `surname`). Corresponds to the last name of the user.
- **email** or **mail**. Corresponds to the user's email address.

:::warning Warning
The attribute names must match the ones on this list exactly. If the assertion doesn't include the first name or the email, Modyo can't create the user on their first sign-in and the sign-in fails.
:::

To integrate SAML login with Modyo, fill in the following fields. All of them are required, except **IDP SSO Target URL Runtime Params**:

- **Service name**: The name that will be displayed on the login button.
- **Issuer**: Identifier of the IDP application. Some services require adding the `spn` prefix:
(For example: `spn:13e4ff44-b0c9-4618-b305-2171a24b07f5`).
- **IDP SSO Target URL**: The URL to which the authentication request is sent. You can find this in the identity provider.
- **IDP SSO Target URL Runtime Params**: If you fill it in, write one `key=value` pair per line, using only letters, numbers, or underscores.
- **IDP Cert**: The identity provider certificate in PEM format. You must fill in this field and the fingerprint as well.
- **IDP certificate fingerprint**: The SHA1 fingerprint of the identity provider's public certificate, in hexadecimal without colons, up to 40 characters.
- **Name identifier format**: The NameID format Modyo requests from the provider during service provider-initiated SSO (SP-initiated SSO). For email, use `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`. See section 8.3 of http://docs.oasis-open.org/security/saml/v2.0/saml-core-2.0-os.pdf for other options; the identity provider may not support all of them.

Also, set up the following Modyo URLs in your identity provider:

- **Entity ID URL**: URL provided by Modyo where the application identifier is located:
   * Admin: `test.modyo.com/admin/auth/saml/metadata`.
   * Realms: for settings with realms use: `test.modyo.com/realms/<tu_uid_del_realm>/auth/saml/metadata`.
- **Assertion consumer service URL**: The URL provided by Modyo to which the identity provider redirects the flow. It appears at the end of the form and can't be edited.
   * Admin: `test.modyo.com/admin/auth/saml/callback`.
   * Realms: for configurations with realms use: `test.modyo.com/realms/<tu_uid_del_realm>/auth/saml/callback`.

## OAuth2

OAuth2 is only available for realm users. Users type their identifier and password on the Modyo sign-in screen, and Modyo validates them against your provider with the Resource Owner Password Credentials flow: it sends a `POST` to **Authorization Token URL**, as an `application/x-www-form-urlencoded` form, with `grant_type=password`, `client_id`, `client_secret`, `scope`, `username`, and `password`. The login is only valid if the provider responds `200`.

In order to integrate a login with OAuth2 in Modyo, you will need the following information from your identity provider. All of it is required, except **Service Description**, **Login Field Placeholder**, and **Use SSL**:

- **Name**
- **Service Description**
- **Authorization Token URL**: Your provider's token endpoint. It must accept `grant_type=password`.
- **Client ID**
- **Secret**
- **Scope**: If your OAuth2 authentication service uses multiple spaces or environments to separate users and you want to use a specific one in this integration, you must define it in this field.
- **Login Field**: The type of identifier your users sign in with:
   * **Email**: The identifier is an email address, and Modyo uses it as the user's email.
   * **Secondary user ID**: The identifier is not an email address. When it creates the user, Modyo assigns them an automatically generated email that doesn't belong to a real mailbox, and stores the identifier as their secondary user ID.
- **Login Field Placeholder**: Text to be displayed in the identification field as placeholder if the user has not filled in the field.
- **Use SSL**: Turn it on if **Authorization Token URL** uses HTTPS.

To create an OAuth client, go to [OAuth Client](/en/platform/customers/settings#oauth-client).


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

1. Add the **OpenID Connect** integration and fill in **Client ID** and **Secret** with the client's name and credentials:
   * For team users, follow the steps in [Add an Identity Provider](#add-an-identity-provider).
   * For realm users, in **Customers > Realms** click the realm and then **Realm settings > Integrations**. In the **Identity Providers** category, click **Install** on **OpenID Connect**. Once installed, you find it in **Installed**, where you can edit it with **Configure**.
2. In Issuer, fill in the URL of the realm, for example, for the realm `my-realm` the URL it is `https://test.example.com/auth/realms/my-realm`.
3. Click **Run discovery service**. This will complete most of the settings.
4. Configure the **Scopes** with the scopes required for the application. Use `openid, email, profile` if you don't have custom scopes.

<img src="/assets/img/platform/keycloak-new-idp.png" alt="Modyo's new identity provider page." width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

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
| **Enable claims synchronization on login** | Enable synchronization of OpenID Connect claims with custom fields in Modyo. More information in [Claims Synchronization](#claims-synchronization).                                                                                                                                                                      |
| **Enable User Info** | Lets Modyo query the provider's User Info endpoint to complete the user's data. It comes enabled by default and, while it is active, **Userinfo endpoint** is required; the discovery service fills it in for you. If you turn it off, Modyo only uses the claims that come in the id_token. |
| **Include id_token_hint on logout** | Adds the `id_token_hint` parameter, with the session's id_token, to the remote logout URL. Many providers use it to identify the session being closed and skip the confirmation screen. It only takes effect if remote logout is enabled. |



### _Claims_ synchronization

Modyo allows you to synchronize attributes and other properties of Customer users through standard and additional _claims_ through OpenID Connect.

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
4. Configure the **Valid Redirect URIs** with the Modyo account callback and logout URLs, using the URLs to the account, adding `/realms/my-realm` if you are using a realm. For example: `test.modyo.com/realms/my-realm/auth/openidc/callback` and `test.modyo.com/realms/my-realm/logout*`.

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
      * For realms use: `test.modyo.com/realms/<nombre-realm>/auth/openidc/callback`.
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
   | **Enable claims synchronization on login** | Enables OpenID Connect claim synchronization with custom fields in Modyo. More information in [Claim Synchronization](#claims-synchronization). |
