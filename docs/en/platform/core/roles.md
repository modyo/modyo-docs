---
search: true
---

# Users and Roles

## Team

All internal platform users make up the team, and each team member can have a specific role to play in realizing the full potential of the system.

To create an internal user, you must click the **+ New Team Member** button and fill in the fields. Once the registration invitation is sent to him by email, you can choose whether to send him his login password in the same message.

To check all users, you can filter by their status and the roles assigned to them on the platform.

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

Groups allow you to streamline access control across Modyo, so you can assign a default role to a context (account, spaces, realms, or sites) to multiple users at once and then add that user group to different contexts, allowing all users to get the group's role in the associated context.

To create a group, go to the “Groups” section of the account settings, give it a name, role, and start adding users to the group. You can modify the name, role, and users that belong to the group once you save the changes.

In addition, you can add or remove a user from existing groups by selecting the "Groups" section in each team member's profile.

:::tip Tip
Keep in mind that if a user already has an associated role in a context (account, space, realm, or site) and you add them to a group with a higher privileged role, the user will gain the role with the highest authority.
:::

## Roles

Roles are an essential characteristic of each internal user of the platform, since roles allow you to optimize the workflow that each internal user has.

Modyo has 11 default roles with different functions by area or application. The platform also allows you to create more custom roles, depending on the area of the platform.

### Default Roles

Modyo by default assigns default roles, sorted according to the area of the platform and the context.

The default roles that exist, depending on the given area of the platform:

#### Account-level roles:

- **Default user**: You have all existing permissions, except editing the settings for each context. This user must be invited to each context to access its functionality.
- **Default admin**: You have all existing permissions, but you must be invited to an area of the platform in order to access its functionalities.
- **Owner**: You have all existing permissions and you can access all areas of the platform without needing to be invited to them.

#### Site-level roles:

- **Site developer**: You can only edit resources (you cannot publish, delete, roll back, or edit the configuration).
- **Site reviewer**: A site admin, but without the ability to edit the site configuration.
- **Site admin**: You have all the permissions at the level of a site, but you cannot create new sites.

#### Space-level roles:

- **Space writer**: You can only edit content (you cannot publish, delete, roll back, or edit settings).
- **Space editor**: A space admin, but without the ability to edit the space configuration. This role does not have asset permissions, nor can it create types.
- **Space admin**: You have all the permissions at the level of a space, you can create and delete assets, but you cannot create new spaces.

The most important user will have the role of Default Admin or Administrator with all permissions and functions enabled to manage the platform and sites.

### Access to applications:
Since we have roles that allow access to all applications without restriction, Modyo allows you to restrict access to certain applications through the team member settings, so you can give a user full access (Owner) but only in the Channels app.

### Assign one role per account

To assign a role at the account level, you must go to the Team section and click on the profile of the user, then switch to the Role tab and select the role you want to assign to the user.
