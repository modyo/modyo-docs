---
search: true
---

# Users and Roles

## Team

All internal users of the platform make up the team, and each member of the platform can be assigned a specific role to unlock the full potential of the system.

To create an internal user, you must click on the top button and fill in the fields. Once created the registration invitation is sent to you by email, you can choose whether to send your login password in the same message.

To check all users, you can filter by their status and by the roles they have assigned to occupy on the platform.

If you want to disable an internal user, you must click on the actions button to the right of the user. In case you want to edit your data, you can use the same button, or click on the same name.

### Edit User

When you enter the edit view of an internal user, you will be able to see in the main tab a list of all their actions since they first registered and entered the platform.

The rest of the tabs can include visible or modifiable information about a user, including:

- Sites (to which you have access)
- Role
- Credentials
- Custom API Access
- General data

## Groups

Groups allow you to streamline access control across Modyo contexts, so you can assign a default role to a context (account, spaces, realms, or sites) to multiple users at once and then add that user group to different contexts, allowing all users to get the group's role in the associated context.

To create a group, go to the "Groups" section of your account settings, give it a name, role, and start adding users to the group. You can modify the name, role, and users that belong to the group once you save the changes.

In addition, from the "Groups" section of each team member's profile, you can add or remove the user from existing groups.

::: tip Tip
Keep in mind that if a user already has an associated role in a context (account, space, realm, or site) and you add it to a group with a higher privileged role, the user will gain the most privileged role between the own role and that of the group.
:::

## Roles

Roles are an essential feature of each of the internal users of the platform, as they allow you to optimize the workflow that each one has.

Modyo has 11 default roles with different functions per context that will allow you to distribute and control who has access to which sections of each context of the platform.

### Default Roles

Modyo defaults to default roles, sorted according to the context or section in which they are engaged.

The default roles that exist are, depending on context:

#### Roles per account:

- **Default user**: You have all existing permissions. minus editing the settings for each context. You must be invited to each context in order to access its functionalities.
- **Default admin**: You have all existing permissions, but you must be invited to each context in order to access its roles.
- **Owner**: You have all existing perimsos and you can access all contexts without having to be invited to them.

#### Roles per site:

- **Site developer**: You can only edit resources (you cannot publish, delete, rollback, or edit settings).
- **Site reviewer**: It is a site admin but without editing the site configuration.
- **Site admin**: You have all the permissions at a site level, but you cannot create new sites.

#### Roles by space:

- **Space writer**: You can only edit content (you cannot publish, delete, rollback, or edit settings).
- **Space editor**: It is a space admin but without editing the space configuration, it does not have permissions on assets or can create types.
- **Space admin**: You have all the permissions at the level of a space, but you cannot create new spaces, you can create and delete assets.

The most important user will have the role of Default Admin or Administrator, who will have all the functions enabled to manage the platform and sites.

### Access to applications:
Since we have roles that allow access to all applications without any restriction, Modyo allows you to restrict access to certain applications by setting the team member, so you can give a user full access (Owner) but only in the channels app.

### Assign a role per account

To assign a role in the account context, you must go to the Team section and click the profile of the user you want to change. Then enter the Role tab and select the role you want to assign to the user.
