---
search: true
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

- Sites (to which you have access)
- Role
- Credentials
- API access
- General data

## Groups

Groups allow you to streamline access control across Modyo contexts, so you can assign a default role to a context (account, spaces, realms, or sites) to multiple users at once and then add that user group to different contexts, allowing all users to get the group's role in the associated context.

To create a group, go to the "Groups" section of your account settings, give it a name, role, and start adding users to the group. You can modify the name, role, and users that belong to the group once you save the changes.

In addition, from the "Groups" section of each team member's profile, you can add or remove the user from existing groups.

::: tip Tip
Keep in mind that if a user already has an associated role in a context (account, space, realm, or site) and you add it to a group with a higher privileged role, the user will gain the most privileged role between the own role and that of the group.
:::

## Roles

Roles are an essential characteristic of each internal user of the platform, since roles allow you to optimize the workflow that each internal user has.

Modyo has 11 default roles with different functions by area or application. The platform also allows you to create more custom roles, depending on the area of the platform.

### Default Roles

Modyo defaults to default roles, sorted according to the context or section in which they are engaged.

The default roles that exist are, depending on context:

#### Account-level roles:

- **Default user**: You have all existing permissions. minus editing the settings for each context. You must be invited to each context in order to access its functionalities.
- **Default admin**: You have all existing permissions, but you must be invited to each context in order to access its roles.
- **Owner**: You have all existing perimsos and you can access all contexts without having to be invited to them.

#### Site-level roles:

- **Site developer**: Can only edit resources (cannot publish, delete, rollback or edit the configuration).
- **Site reviewer**: A site admin, but without the ability to edit the site configuration.
- **Site admin**: You have all the permissions at the level of a site, but you cannot create new sites.

#### Space-level roles:

- **Space writer**: Can only edit content (cannot publish, delete, rollback or edit the configuration).
- **Space editor**: A space admin, but without the ability to edit the space configuration. This role does not have asset permissions, nor can it create types.
- **Space admin**: You have all the permissions at the level of a space, but you cannot create new spaces. Space admins can create and delete assets.

The most important user will have the role of Default Admin or Administrator, who will have all the functions enabled to manage the platform and sites.

### Access to applications:
Since we have roles that allow access to all applications without any restriction, Modyo allows you to restrict access to certain applications by setting the team member, so you can give a user full access (Owner) but only in the channels app.

### Assign a role per account

To assign a role in the account context, you must go to the Team section and click the profile of the user you want to change. Then enter the Role tab and select the role you want to assign to the user.
