---
search: true
---
# Realms

In Modyo, **realms** group users with similar characteristics and share a common configuration. They are especially useful for managing multiple groups of independent sites or creating a testing environment without affecting active users.

Each realm has specific configurations for login, registration, integrations, forms, segments, and messaging.

:::tip Tip
Changes made to a realm will only affect the users of that realm and not those of other realms.
:::

## Create a Realm

To create a realm, follow these steps:

1. In the side menu, click **Customers**.
2. Click **Realms**.
3. Click the **New Realm** button.
4. Enter the realm's **Name**.
5. Review the **Identifier** the platform suggests from the name and adjust it if you need to.
6. Click **Create**.

The **Identifier** becomes part of the route where the realm's users authenticate: it is the value that appears in the URLs of the realm's profile, login, registration, and password recovery views. See the full list in [Realm routes](/en/platform/customers/profile.html#realm-routes).

When you create the realm you are registered as its **Realm Admin**, and the platform takes you to its **Overview**.

:::tip Tip
You need a role with the **Create Realms** permission to see the **New Realm** button.
:::

:::warning Attention
You can change the **Identifier** later from the [Realm Settings](/en/platform/customers/settings.html#general), but that changes every URL of the realm, including login and logout, and breaks the links you have already published on your sites.
:::

## Overview

The **Overview** section provides a general summary of the key elements of the realm, including:

- **Registered users**: Total number of users registered in the realm.
- **Segments**: Number of created segments.
- **Forms**: All active forms in the realm.
- **Active campaigns**: All ongoing communication campaigns.

You will also find a chronological log of all activities carried out within the realm, making it easier to monitor and analyze interactions.


This section also includes relevant information such as the main configurations of the realm, the sites where it is used, the integrated identity providers, and their corresponding identifiers.

This overview allows you to efficiently manage each realm and understand how it connects with users and other key elements of the platform.

## Security headers

The realm's own pages — sign in, sign up, verification code, password recovery, and profile — can have their own security policy, independent from the web app and from the platform's global configuration.

You configure them in **Realm settings** → **Security headers**, and you need the **Admin Security Headers** grouped permission to view and edit them.

### Enabling the realm headers

A realm's headers start disabled. While they are, the screen shows **Headers disabled** with the notice "Security headers are currently disabled for this realm. Enable this module to access the configuration", and an **Enable security headers for this realm** button.

:::danger This action cannot be undone
Enabling a realm's headers **cannot be reverted**: there is no way back to the disabled state from the admin. The platform warns you before applying it with the message "Customizing the realm security headers overrides the platform global configuration. This action cannot be undone, please check the documentation".
:::

When you enable them for the first time, the configuration is seeded with **the values the platform was already applying at that moment**. In other words, enabling does not change the realm's behavior on day one: you take control of a policy that until then was imposed, with the same content. Any change from there on is yours.

### The four configurable headers

| Header | What you can configure |
|---|---|
| **Content-Security-Policy** | Enabling it, its directive, and the nonce option. |
| **Content-Security-Policy-Report-Only** | The same as above, but it only reports: it does not block. It needs **Reporting-Endpoints** for the reports to reach anywhere. |
| **Reporting-Endpoints** | Enabling it and declaring the destinations the browser sends reports to. |
| **Referrer-Policy** | Enabling it and choosing the directive. |

The rest of the headers a web app offers are not configurable per realm, and keep coming from the platform.

:::warning The Referrer-Policy list is shorter than the web app one
The realm selector offers `no-referrer`, `origin`, `origin-when-cross-origin`, `same-origin`, `strict-origin`, and `strict-origin-when-cross-origin`. It deliberately leaves out `unsafe-url` and `no-referrer-when-downgrade`, which you can choose in a web app. The reason is concrete: the password recovery link carries its token in the URL, and those two policies would leak it to third parties through the `Referer` header.
:::

### The CSP nonce

If you turn on the nonce option in **Content-Security-Policy** or **Content-Security-Policy-Report-Only**, the platform adds each response's nonce to the `script-src` and `style-src` directives.

You can also write <code v-pre>{{csp_nonce}}</code> inside the directive: when the page is served, that placeholder is replaced with the nonce of that response. The same nonce is applied to the sign in markup, including the custom JavaScript and CSS you may have defined for that screen, so you can harden the CSP without your own code failing to run.

### Where they apply

The configuration covers **every HTML response of the realm**: sign in, sign up, verification code, password recovery, profile, the error pages of that scope, and the authorization screen.

It does not cover redirects, because the browser applies these policies to the document it renders and not to the intermediate hop, nor API responses, which do not carry these headers.

:::tip Showing sign in inside an iframe
This is the most common reason to configure a realm's CSP. By adding the portal's origin to the `frame-ancestors` directive of the realm CSP, its sign in screen can render inside an iframe hosted at that origin; any origin not on the list is still blocked by the browser.

For the whole flow to work inside the iframe — redirect to sign in, authentication, and return — the embedding portal has to be on the same domain as your account host. In practice that means having your own host configured. With the default platform domain the screen shows up but the session is not kept.
:::

## Delete a Realm

To delete a realm, go to its [Realm Settings](/en/platform/customers/settings.html#general) and use the **Delete realm** field in the **General** section. To confirm, you must type the realm's full name exactly as it appears in the list: if the text doesn't match, the platform doesn't run the action.

Deletion runs in the background, so the realm may still show up in the list for a while after you confirm it.

:::danger Danger
Deleting a realm erases all its information: users, forms, message campaigns, and segments. On top of that, the sites that use it become public, with no access control. This action is irreversible.
:::