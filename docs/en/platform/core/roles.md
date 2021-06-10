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

Groups allow you to streamline control access across different areas of Modyo, so that you can assign a default role to an area (account, spaces, realms, or sites) to multiple users at once. You can then add that user group in different contexts, allowing all users to acquire a group's role in the associated context.

To create a group, go to the "Groups" section of your account settings, give it a name, role, and start adding users to the group. Once it's saved, you can also go back and make changes.

In addition, you can add or remove a user from existing groups by selecting the "Groups" section in each team member's profile.

::: tip Tip
Keep in mind that if a user already has an associated role in a context (account, space, realm, or site) and you add them to a group with a higher privileged role, the user will gain the role with the highest authority.
:::

## Roles

Roles are an essential characteristic of each internal user of the platform, since roles allow you to optimize the workflow that each internal user has.

Modyo has 11 default roles with different functions by area or application. The platform also allows you to create more custom roles, depending on the area of the platform.

### Default Roles

Modyo by default assigns default roles, sorted according to the area of the platform and the context.

The default roles that exist, depending on the given area of the platform:

#### Account-level roles:

- **Default user**: You have all existing permissions. except for the ability to edit the settings within the given context. You must be invited to an area of the platform in order to access its functionalities.
- **Default admin**: You have all existing permissions, but you must be invited to an area of the platform in order to access its functionalities.
- **Owner**: You have all existing permissions and you can access all areas of the platform without needing to be invited to them.

#### Site-level roles:

- **Site developer**: Can only edit resources (cannot publish, delete, rollback or edit the configuration).
- **Site reviewer**: A site admin, but without the ability to edit the site configuration.
- **Site admin**: You have all the permissions at the level of a site, but you cannot create new sites.

#### Space-level roles:

- **Space writer**: Can only edit content (cannot publish, delete, rollback or edit the configuration).
- **Space editor**: A space admin, but without the ability to edit the space configuration. This role does not have asset permissions, nor can it create types.
- **Space admin**: You have all the permissions at the level of a space, but you cannot create new spaces. Space admins can create and delete assets.

The most important user will have the role of Default Admin or Administrator with all permissions and functions enabled to manage the platform and sites.

### Access to applications:
Since we have roles that allow access to all applications without any restriction, Modyo allows you to restrict access to certain applications by setting the team member, so you can give a user full access (Owner) but only in the channels app.

### Assign a role per account

To assign a role at the account level, you must go to the Team section and click on the profile of the user, then switch to the Role tab and select the role you want to assign to the user.
