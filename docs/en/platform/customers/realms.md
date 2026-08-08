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

## Delete a Realm

To delete a realm, go to its [Realm Settings](/en/platform/customers/settings.html#general) and use the **Delete realm** field in the **General** section. To confirm, you must type the realm's full name exactly as it appears in the list: if the text doesn't match, the platform doesn't run the action.

Deletion runs in the background, so the realm may still show up in the list for a while after you confirm it.

:::danger Danger
Deleting a realm erases all its information: users, forms, message campaigns, and segments. On top of that, the sites that use it become public, with no access control. This action is irreversible.
:::