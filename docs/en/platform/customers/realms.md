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

If the realm has [stages](#stages) and you have the **View Synchronizations** permission, the side column also shows the **Stage** block, with the name of the stage you're in and the button to [sync it](#sync-a-stage).

This overview allows you to efficiently manage each realm and understand how it connects with users and other key elements of the platform.

## Stages

Stages let you try out changes to a realm's configuration without affecting its users. For example, you can adjust a form or change an origination in a stage and, once the change is ready, take it to the main realm. You can also try out an identity provider in a stage without touching the main realm's, but that change isn't taken to another stage: identity providers aren't synced, so each stage sets up its own.

They work like [web app stages](/en/platform/channels/sites.html#stages): you create a stage from another one, work on it in isolation and, whenever you want, sync the changes by choosing which elements to take.

Each stage behaves like one more realm, with its own name and identifier:

- It shows up in the **Realms** list and you can choose it as the realm of a web app or a space.
- It has its own login, signup, and profile [routes](/en/platform/customers/profile.html#realm-routes), and the public API and the admin API identify it just like a realm.
- It has its own users. A user who signs up in a stage doesn't exist in the others.

The original realm is the `main` stage, and no other stage can use that name.

:::warning Attention
- A realm can have up to four stages in total, counting `main`. Stages whose cloning failed or that are being deleted don't count toward the limit.
- The changes you make in a stage are only reflected in that stage until you sync them. Syncing is never automatic.
- Users and everything they generate (form and origination submissions, events, campaign deliveries, orders, and custom field values) belong to each stage and are never copied or synced.
- Since the stage's identifier is different from the realm's, the callback URLs of its [identity providers](/en/platform/customers/settings.html#identity-providers) change too. Register them in the provider before testing login in the stage.
:::

### Create a stage

To create a stage, follow these steps:

1. In the side menu, click **Customers** and select the realm.
2. Click **Realm settings** > **Stages**.
3. Click **New Stage**.
4. In **From stage**, choose the stage the configuration is copied from. By default it's the stage you're in.
5. Type the stage **Name**.
6. Click **Create**.

The stage is created in the background and you can keep working in the meantime. While the configuration is being copied, the list shows it with the **Cloning** label, and you can't enter it yet or choose it as the realm of a web app or a space. When it finishes, the label goes away and the stage becomes available.

The stage's name and identifier are built from the name you typed and from the main realm's. For example, a `qa` stage of the **Customers** realm, whose identifier is `customers`, is named **qa Customers** and its identifier is `qa-customers`. If another realm of the account already uses that name or identifier, the platform adds a number at the end.

The **Stages** list shows each stage's **Name**, its **Original stage**, which is the stage it was created from, and the date it was created (**Created at**).

:::warning Attention
The platform doesn't let you create the stage when the source stage has:

- Originations with unpublished changes, that were never published, or that are unpublished. Publish or archive them before creating the stage.
- Forms with group questions, which stages don't support yet.

The modal points this out before you try to create it, with the notice **Before creating a stage, resolve the following in the source stage**, and disables the **Create** button.
:::

If the cloning fails, the stage stays in the list with the **Failed** label and two actions:

- **Retry**: discards the failed stage and creates it again with the same name, from the same source stage.
- **Delete**: deletes it.

A cloning that stops making progress is also marked as **Failed** after a while. A stage never becomes available with a partially copied configuration.

::: tip Tip
The creation modal reminds you that the new stage has no identity providers, integrations, OAuth clients, or webhooks. Set them up in the stage before testing login, deliveries that depend on an integration, or events to external systems.
:::

### What is copied to a stage

Creating a stage copies the configuration the source stage has at that moment:

- The realm configuration: the [General](/en/platform/customers/settings.html#general) section, the emails, the [password policy](/en/platform/customers/settings.html#password-policy), the security headers, CORS, and the appearance (logo, favicon, and default avatar image).
- The [custom fields](/en/platform/customers/settings.html#custom-fields) and their options.
- The [data sets](/en/platform/customers/settings.html#data-sets) and their alternatives.
- The [forms](/en/platform/customers/forms.html), without their assigned web app. Assign it in the stage: until it has one, the forms list shows an icon next to the name with the notice **This form has no web app assigned**.
- The mail [templates](/en/platform/customers/messaging.html#templates).
- The [campaigns](/en/platform/customers/messaging.html#campaigns), only with their content and segmentation. They arrive with the **Inactive** status, with no schedule or delivery statistics.
- The [originations](/en/platform/customers/origination.html), only in their published version.
- The [segments](/en/platform/customers/segments.html), with their associations to forms, originations, and campaigns.
- The [team members](/en/platform/customers/settings.html#team-members), with their roles and their segment restrictions. From then on, each stage's team is independent: adding or removing a member in one stage doesn't change the others.

The following are not copied:

- Identity providers, integrations, OAuth clients, and webhooks, because they store credentials or point to external systems.
- The realm's file library. Only the logo, the favicon, and the default avatar image are copied. Campaigns and templates that use images from the library keep pointing to the source stage's files.
- Custom [domains](/en/platform/customers/settings.html#domains).
- Users and their data.

Since the stage starts without identity providers or integrations, the platform also leaves these options turned off:

- Direct login with an identity provider.
- OTP delivery by phone: the **OTP delivery channel** is left with **Email** only.
- Login redirects: **After logging in, redirect to** is left empty, **Force redirection to** is turned off, and **On session required redirect to** points to the **Login page**.
- The captcha.
- **Disable platform credentials**.

### Switch stages

When the realm has stages, the realm selector in the side menu shows the stage you're in under the realm's name. When you open it, the top part lists that realm's stages so you can switch between them, and in the list of realms, the ones with stages expand so you can pick one.

You only see the stages where you're a team member, unless you're the account owner or have the **Manage Customers** permission. Stages that are being cloned or whose cloning failed don't show up in the selector, or in the realm selectors of web apps, spaces, and Insights.

### Sync a stage

Syncing takes changes from another stage of the same realm into the stage you're in, so you always start it from the stage you want to update:

1. In the realm selector, enter the target stage.
2. In the **Overview**, in the **Stage** block, click **Synchronize**.
3. In **Select stage**, choose the source stage.
4. Review the elements with differences. Click an element to see its differences field by field.
5. Check the boxes of the elements you want to sync.
6. Click **Synchronize**.

The view groups the elements into **Configuration**, **Data sets**, **Custom fields**, **Forms**, **Mail templates**, **Segments**, **Campaigns**, and **Originations**. It only lists the source elements that don't exist in the target, marked with the **New** label, or that changed compared to the target.

Syncing runs in the background. While it lasts, the button shows **Syncing…**, and when it finishes a message tells you how many elements were synced and, for each element that failed, the reason. The elements that were synced aren't reverted even if others fail.

Keep these rules in mind:

- Each element is updated in place in the target and keeps its identity, so the references other elements have to it keep working.
- An element you deleted in the source doesn't show up in the view and isn't deleted in the target. On the other hand, if you removed a part inside an element, such as a question of a form or an option of a custom field, syncing removes it in the target too, unless it's in use, for example in a segment.
- **Configuration**: includes the same as what is copied when creating the stage. The options turned off when creating it (direct login, OTP channel, login redirects, captcha, and platform credentials) aren't synced: each stage keeps its own.
- **Originations**: the source's published version is synced, and it arrives in the target as changes pending publication, just like pages in web apps. Publish it in the target for it to take effect. If the origination had unpublished changes in the target, syncing replaces them.
- **Forms**: they keep the web app assigned to them in the target, and a new form arrives without a web app. If you changed the form's identifier in the source, syncing it also changes its public URL in the target. Forms with group questions can't be synced.
- **Campaigns**: their content and segmentation are synced. A new campaign arrives with the **Inactive** status. A campaign that already existed in the target keeps its status, dates, and statistics, and isn't synced if in the target it's **Pending**, **Sending**, or **Completed**.
- **Segments**: when you sync a form, an origination, or a campaign, its associations point to the equivalent segments of the target.
- If an element depends on another one that doesn't exist in the target, for example a segment that filters by a custom field the target doesn't have, that element isn't synced and the message says what's missing. The other selected elements are synced anyway. If you include the dependency in the same sync, the platform syncs it first.
- Identity providers, integrations, OAuth clients, webhooks, captcha credentials, and team members are never synced.
- Only one sync at a time can run into the same stage.

If the target stage has originations with unpublished changes, the **Stage** block shows a warning icon with the notice "Before sync you have to publish all your changes" and, when you click **Synchronize**, the platform asks you to confirm.

::: tip Tip
When it finishes, the platform recalculates in the background the synced segments and the ones that filter by the synced forms or custom fields, so their users may take a few minutes to update.
:::

### Delete a stage

To delete a stage, follow these steps:

1. In the realm selector, enter the stage you want to delete.
2. Click **Realm settings** > **General**.
3. Click **Delete stage**.
4. In **Stage name**, type the stage's name, for example `qa`, not the full name the realms list shows.
5. Click **Delete**.

A stage whose cloning failed can also be deleted from the **Stages** list, with the **Delete** action.

Deletion runs in the background and doesn't affect the realm's other stages. It erases the stage's users and all its content, including its identity providers, integrations, OAuth clients, and webhooks. The stage's name and identifier are freed right away so you can use them in a new stage.

:::warning Attention
You can't delete a stage while a web app or space has it selected as its realm: the platform points this out with the name of each one. Nor while a stage created from it is being cloned.
:::

### Stage permissions

- **Admin Stages**: shows the **Stages** section and lets you create stages and retry the ones that failed. To create a stage you need this permission in the source stage. **Admin Settings Realm** includes it.
- **View Synchronizations**: shows the **Stage** block of the **Overview** and the sync view, where you can review the differences. That block's button shows as **Synchronize (read only)**. The view only lists as source the stages where you also have this permission.
- **Admin Synchronizations**: lets you sync and includes **View Synchronizations**.
- To delete a stage you need the **Admin General** permission in that stage, the same one used to delete a realm.

In accounts created starting with version 10.2.2, the **Realm Admin** default role includes **Admin Stages** and **Admin Synchronizations**, and **Realm Viewer** includes only **View Synchronizations**, so it can review the differences but can't create, sync, or delete stages. In earlier accounts, the roles that have **Admin Settings Realm** get **Admin Stages**, but **View Synchronizations** and **Admin Synchronizations** must be added manually in **Settings** > [Roles](/en/platform/core/roles.html).

## Delete a Realm

To delete a realm, go to its [Realm Settings](/en/platform/customers/settings.html#general) and use the **Delete realm** button in the **General** section. To confirm, you must type the realm's full name exactly as it appears in the list: if the text doesn't match, the platform doesn't run the action.

The button only shows up if you have the **Admin General** permission in the realm.

Deletion runs in the background, so the realm may still show up in the list for a while after you confirm it.

You can't delete the realm while a web app or space has it, or any of its [stages](#stages), selected: the platform points this out with the name of each one. Change the realm of those apps and spaces first. Nor can you delete it while any of its stages is being cloned or deleted.

:::danger Danger
Deleting a realm erases all its information: users, forms, message campaigns, and segments. If the realm has stages, it deletes all of them too, and the confirmation modal tells you which ones. This action is irreversible.
:::