---
search: true
---

# Teams and Groups

## Team

All internal platform users make up a team, and each team member can have a specific role to play in realizing the full potential of Modyo. This is where you'll be able to create, edit, and deactivate platform users.

### Create user

To create an internal user, follow these steps:

1. From the main menu, click Settings, then select Team.
1. Click on **+ New Team Member**.
1. Fill in the first name, last name, username, email, and password.
1. Click **Save**.

:::tip Tip
If you want the new member to receive an email with their account details on the platform, click on the “Send password to user email” checkbox.
:::

### Edit user

Within the user editing screen, platform administrators will have access to the following windows:

- Activity: The history of all actions performed by this user.
- Access: The permissions granted for this user to the various modules in Modyo. Here you can also select the user's role.
- API Access: Generate new access tokens to use our APIs. You must generate a token for each site.
- Edit: Modify user data such as name, email, and password.
- Groups: List of all groups to which this user belongs.
- Devices: List of all devices where the user has an active session. Data such as: browser, operating system, last login, and IP address are displayed. Here you can remotely log out for each device.

## Groups

Groups allow you to streamline access control across Modyo, so you can assign a default role to a context (account, spaces, realms, or sites) to multiple users at once and then add that user group to different contexts, allowing all users to get the group's role in the associated context.

Additionally, you can add or remove a user from existing groups by selecting the "Groups" section in each team member's profile.

:::tip Tip
Note that if a user already has an associated role in a context (account, space, realm, or site) and you add it to a group with a higher privilege role, the user gets the highest privileged role between the own role and the group's role.
:::

### Create a group

To create a group, follow these steps:

1. From Modyo Platform, in the side menu, expand **Settings** and click on **Groups**. 
1. Click **+ New Group**.
1. Type the name, select the Group Role, and add the users who are part of this Group.

The group now appears when you try to add a user as a member of the team. All users who belong to the group will be added with the group role, if a role is also selected for the individual member, the role with the most privileges takes precedence.

## Roles

The roles can be applied in the different modules to customize the experience of your work team. Applying a role is specific to that module. For example, you can select who are the administrators of a space, who can interact with the CLI somewhere, and so on. 

Modyo has 10 default roles with different functions per context that will allow you to distribute and control who has access to which sections of each context of the platform.

### Default Roles

Modyo by default assigns predetermined roles, sorted according to the area of the platform and the context.

The default roles that exist, depending on the given area of the platform:

#### Account-level roles:

- **Default user**: You have all existing permissions, except editing the configuration of each context. You must be invited to each context in order to access its functionalities.
- **Default admin**: You have all the existing permissions, but you must be invited to each context in order to access its functions. At the Modyo Platform account level, you can only view global variables and activity.
- **Owner**: You have all existing permissions and can access all contexts without needing to be invited to them.

#### Site-level roles:

- **Site developer**: You can only edit resources (you cannot publish, delete, roll back, or edit the configuration).
- **Site developer CLI**: Same permissions as Site developer and can also interact with modyo-cli 
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
