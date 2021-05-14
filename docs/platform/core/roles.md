---
search: true
translated: true
---

# Users and Roles

## Team

All internal users of the platform make up the team, and each member of the platform can be assigned a specific role to unlock the full potential of the system.

To create and add a new team member to the platform, you must click on the "New" button at the top of your interface and complete the fields. Once the registration is completed an invitation will be sent to the user by email, you can choose whether to send the login password in the same message.

To check all users, you can filter by their status and by their roles within the platform.

If you want to deactivate an internal user, you must click on the action button to the right. If you want to edit their data, you can use the same button, or click on their name.

### User Editing

When you enter the edit view of an internal user, you will see in the main tab a list of all his actions since he registered and logged in for the first time to the platform.

The rest of the tabs include visible or modifiable user information:

- Sites (to which they have access)
- Role
- Credentials
- API access
- General data

## Groups

Groups allow you to streamline access control to different Modyo contexts, so you can assign a default role for a context (account, spaces, realms or sites) to multiple users at once and then add that user group to different contexts, allowing all the selected users to get the role of the group in the associated context.

To create a group, go to the "Groups" section of the account settings, assign a name and role, and then start adding users to the group. You can modify the name, role and users belonging to the group after it is saved.

Also, from the "Groups" section of each team member's profile, you can add or remove the user from existing groups.

:::tip Tip
Keep in mind that if a user already has an associated role in a context (account, space, realm or site) and you add him/her to a group with a higher privilege level role, the user will get the higher privilege level role between his/her own role and the group's role.
:::

## Roles

Roles are an essential characteristic of each internal user of the platform, since roles allow you to optimize the workflow that each internal user has.

Modyo has 11 default roles with different features per context that will allow you to distribute and control who has access to which sections of each context of the platform.

### Default Roles

Modyo uses default roles that vary according to each section of the platform and the context:

#### Account-level roles:

- **Default user**: Has all the existing permissions, except for editing the configuration of each context. Must be invited to each context to be able to access its features.
- **Default admin**: Has all existing permissions, but must be invited to each context in order to access its features.
- **Owner**: Has all existing permissions and can access all contexts without having to be invited to them.

#### Site-level roles:

- **Site developer**: Can only edit resources (cannot publish, delete, rollback or edit configuration).
- **Site reviewer**: Is a site admin but cannot edit the site configuration.
- **Site admin**: Has all site-level permissions, but cannot create new sites.

#### Space-level roles:

- Space admin: You have all the permissions at the level of a space, but you cannot create new spaces. Space admins can create and delete assets.
- Space editor: A space admin, but without the ability to edit the space configuration. This role does not have asset permissions, nor can it create types.
- Space writer: Can only edit content (cannot publish, delete, rollback or edit the configuration).

- **Space writer**: Can only edit content (cannot publish, delete, rollback or edit the configuration).
- **Space editor**: This is a space admin but without editing rights of the space configuration, does not have creation/deletion permissions for the assets and cannot create types.
- **Space admin**: Has all the permissions at space level, but cannot create new spaces. This role can create and delete assets.

The most important user will have the role of Default Admin or Administrator with all permissions and functions enabled to manage the platform and sites.

### Access to applications:
Since we have roles that allow access to all applications without restriction, Modyo allows you to restrict access to certain applications through team member settings. This way, you can for example give a user full access (Owner) but only to the channels application.

### Assign one role per account

To assign a role at the account level, you must go to the Team section and click on the profile of the user, then switch to the Role tab and select the role you want to assign to the user.
