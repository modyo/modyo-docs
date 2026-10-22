---
search: true
---

# Teams and Groups

## Team

All internal users of the platform make up the team, and each member can have a specific role to make the most of the system.

In this section, you can create, edit, and deactivate users of the platform.

### Create user

To create an internal user, follow these steps:

1. From the main menu, click on **Settings**.
1. Select **Team**.
1. Click on **New Team Member**.
1. Fill in the first name, last name, username, email, and password fields.
1. Click **Save**.

The username can only contain letters A to Z (uppercase or lowercase), numbers, and the symbols `| # @ % . _ - ' + /`. Spaces and other characters are not allowed.

:::tip Tip
If you want the new member to receive an email with their account details on the platform, check the box “Send password to the user's email”.
:::

### Edit user

Within the user edit screen, platform administrators have access to the following windows:

- Activity: Shows the history of all actions performed by the user.
- Access: Shows the permissions granted to the user in the different Modyo modules. Here you can also select the user's role.
- API access: Generate new access tokens to use your APIs. You must generate a token for each site.
- Edit: Modify user data such as name, email, and password.
- Groups: Shows a list of all the groups to which the user belongs.
- Devices: Shows a list of all devices where the user has an active session. It displays data such as browser, operating system, last login, and IP address. Here, in addition, you can remotely log out for each device. When a team member signs in from a device they had not used before, Modyo sends them a notice by email; see [Sign-in notice from a new device](/en/platform/core/security.html#sign-in-notice-from-a-new-device).

:::warning Attention
When you set or change another team member's password from **Edit**, the platform marks that password as pending change and immediately revokes all their active sessions: the member is logged out on every device and, on their next login, must set a new password before they can browse the panel. The same happens when you create a team member with a password. Let them know beforehand.
:::

:::warning Usernames created in earlier versions
Users created before the character validation existed may have usernames that are no longer allowed (for example, containing spaces). While the username does not meet the validation, any update to that user will fail — including administrative actions such as removing their authenticator (2FA), which may show a success message without actually taking effect. Before performing actions on one of these users, correct their username first.
:::

## Groups

Groups allow you to streamline access control to the different Modyo contexts. You can assign a default role to a context (account, space, realm, or site) for multiple users at the same time and then that group of users to different contexts. This allows all users to obtain the group role in the corresponding context.

In addition, from the “Groups” section in each team member's profile, you can add or remove the user from an existing group.

:::tip Tip
All users who belong to a group will have the roles of the group. In case a particular role is individually assigned to a team member, the role with the most privileges takes precedence.
:::

### Create a group

To create a group, follow these steps:

1. Click on **Settings**.
1. Click on **Groups**.
1. Click **New Group**.
1. Type the name of the group and select the**Group Role**.
1. Select from the drop-down menu under **Add Users**, the users that will be part of this group.
1. Click **Create**.

Once a group is created, you can view it in the Groups panel. In addition, when editing a user, you can add them or, if they are already part of that group, delete them.


## Roles

You can apply roles in the different modules to customize the experience of your work team. Each role applies in a specific way to a particular module. For example, you can select the administrators of a space or the members who can interact with the CLI somewhere.

Modyo has 15 default roles with different functions for each context, allowing you to distribute and control access to the different sections of each context of the platform.

Each role has the name you see in the panel and a technical name, the _key_, shown in parentheses in the lists below. The _key_ is the value returned by the roles API and the one you use when assigning roles through the API.

### Default Roles

Modyo assigns default roles depending on the context or section in which they are used.

The default roles that exist, depending on the context, are:

#### Account-level roles

- **Default user** (`account_user`): Has all existing permissions, except for editing the configuration of each context. Must be invited to each context to access its functionalities.
- **Default admin** (`account_admin`): Has all existing permissions, but must be invited to each context to access its functions. At the Modyo Platform account level, this role can only view global variables and activity.
- **Full admin** (`account_owner`): Has all existing permissions and can access all contexts without needing to be invited to them.

#### Site-level roles

- **Site Viewer** (`site_viewer`): You can view entries, see differences between versions, and leave comments. You can also access the synchronization view and see pending changes to synchronize. However, this role is not authorized to perform any action that implies a change in the platform.
- **Site Developer** (`site_developer`): Can only edit resources. Cannot publish, delete, rollback, or edit the configuration.
- **Site Developer CLI** (`site_developer_cli`): Has the same permissions as Site Developer; in addition, can interact with modyo-cli.
- **Site Reviewer** (`site_reviewer`): Has all the permissions of the Site Admin role, except for permissions to edit the site settings.
- **Site Admin** (`site_admin`): Has all the permissions at the level of a site, but cannot create new sites.

#### Space-level roles

- **Space Viewer** (`space_viewer`): This role allows you to view the contents of a space, see differences between versions, and leave comments. Access is limited to viewing and participating through comments; you cannot make modifications to the content or take actions that affect the configuration.
- **Space Writer** (`space_writer`): This role can only edit content in a space. You do not have permissions to publish, delete, perform rollback, or edit the configuration.
- **Space Editor** (`space_editor`): Has all the permissions of a Space Admin, except for permissions to edit the space configuration. Has no permissions over assets and cannot create types.
- **Space Admin** (`space_admin`): This role has all the permissions at the space level, but it cannot create new spaces. Can create and delete assets.

The most important user will have the Default Admin or Administrator role. This role has all the features enabled to manage the platform and sites.

#### Roles by realm

- **Realm User** (`realm_user`): This role can add users, create, modify, and submit campaigns, forms, and segments for review.
- **Realm Admin** (`realm_admin`): Can access all the configurations and sections of the realm. In addition, can add and remove users and team members, as well as delete the realm.
- **Realm Viewer** (`realm_viewer`): A read-only role over Customers. It carries the **View User**, **View Segments**, **View Events**, **View Payment Orders**, **View Campaign Templates**, **View Forms**, and **View Campaign Deliveries** permissions. It cannot create or modify anything inside the realm.

#### Edit and delete the default roles

**Full admin** is the only default role the platform marks as non-editable: you cannot rename it, change its permissions, or delete it. This does not limit its permissions, which are still all of them. The other 14 default roles behave like any custom role and you manage them from **Settings** > **Roles**:

- To change its name or its permissions, click on the role name in the list.
- To delete it, in the **Actions** column of its row choose **Delete** and confirm.

:::warning Attention
A role can only be deleted if it is not assigned to anyone. If any team member or group has it assigned in any context, the platform blocks the deletion and shows an error. Reassign those members and groups first, and only then delete the role.
:::

### Custom roles
Custom roles allow you to create profiles with unique access and permissions, combining existing roles or configuring them according to the specific needs of your organization.

:::tip Tip
Custom roles are available from version 10.1 onwards.
:::

#### Create custom roles

To create a custom role, select the **New Role** button and define its **scope**. This will assign permissions depending on your selection:

- **Organization**: the role will have access to all Modyo modules and its scope will be global.
- **Channels**: the role will have access only to the [Channels](/en/platform/channels/) module.
- **Customer**: the role will have access only to the [Customers](/en/platform/customers/) module.
- **Content**: the role will have access only to the [Content](/en/platform/content/) module.

When you create a new role or select an existing one, you will be able to view and modify all its associated permissions and accesses. If you select the **All** option, you will automatically assign all permissions to the role.

Some permissions include others: when you check one, the platform also checks the ones that permission needs to work. The most granular case is origination submissions, with three tiers of detail visibility; review [submission visibility permissions](/en/platform/customers/origination.html#submission-visibility-permissions).

To keep the changes, press the **Save** button.

### Access to applications

Beyond the role, each team member has a switch per application that decides which modules they see in the panel. There are four applications you can enable or disable: **Content**, **Channels**, **Customers**, and **Insights**.

The **Applications access** block appears in two places:

- In the **Access** tab of a team member, above the role selector.
- When creating or editing a group, above the **Group Role** field.

Access is additive between the member's own settings and their groups: if any of the groups they belong to has an application enabled, the member sees it, even if that checkbox is off in their individual settings. To take an application away from them you have to turn it off in their settings and also in every group that grants it.

Disabling an application does not remove the member's role: the role stays assigned, but the platform subtracts that application's permissions, so they stop seeing that section of the panel even if their role would grant it.

:::tip Tip
Some checkboxes are ticked automatically and left disabled depending on the selected account role. In the **Access** tab of a member, the account owner has all four applications fixed and the **Default admin** role fixes **Content**, **Channels**, and **Customers**. In the group form, **Default admin** fixes all four.
:::

### Assign one role per account

To assign a role in the account context, follow these steps:

1. Go to the “Team” section on the Modyo platform.
2. Click on the profile of the user whose role you want to change.
3. Go to the “Access” tab.
4. Select the role you want to assign to the user and in what space.
5. Click the **Save** button to confirm the changes.
