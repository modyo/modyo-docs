---
search: true
---

# Teams and Groups

## Team

All the internal users of the platform make up the team and each member can have a specific role to make the most of the system. 

In this section you can create, edit and deactivate users of the platform.

### Create user

To create an internal user, follow these steps:

1. From the main menu, click on **Settings**.
1. Select **Team**.
1. Click on **+ New Team Member**.
1. Fill in the first name, last name, username, email, and password fields.
1. Click **Save**.

:: :tip Tip
If you want the new member to receive an email with their account details on the platform, check the box “Send password to the user's email”.
:::

### Edit user

Within the user edit screen, platform administrators have access to the following windows:

- Activity: Shows the history of all actions performed by the user.
- Access: Shows the permissions granted to the user in the different Modyo modules. Here you can also select the user's role.
- API access: Generate new access tokens to use your APIs. You must generate a token for each site.
- Edit: Modify user data such as name, email, and password.
- Groups: Shows a list of all the groups to which the user belongs.
- Devices: Shows a list of all devices where the user has an active session. It displays data such as browser, operating system, last login and IP address. Here, in addition, you can remotely log out for each device.

## Groups

Groups allow you to streamline access control to the different Modyo contexts. You can assign a default role to a context (account, space, kingdom, or site) for multiple users at the same time and then that group of users to different contexts. This allows all users to obtain the group role in the corresponding context.

In addition, from the “Groups” section in each team member's profile, you can add or remove the user from an existing group.

:: :tip Tip
All users who belong to a group will have the group role. In the case of individually assigning a particular role to a team member, the role with the most privileges takes precedence.
::

### Create a group

To create a group, follow these steps:

1. From Modyo Platform click on **Configuration** 
1. Click on **Groups**. 
1. Click **+ New Group**.
1. Type the name of the group and select the**Group Role**.
1. Select from the drop-down menu under **Add Users**, the users that will be part of this group.
1. Click **Create**.

Once a group is created, you can view it in the Groups panel. In addition, when editing a user, you can add them or, if they are already part of that group, delete them. 


## Roles

You can apply roles in the different modules to customize the experience of your work team. Each role applies in a specific way to a particular module. For example, you can select the administrators of a space or the members who can interact with the CLI somewhere.

Modyo has 10 default roles with different functions for each context, allowing you to distribute and control access to the different sections of each context of the platform.

### Default Roles

Modyo assigns default roles depending on the context or section in which they are used.

The default roles that exist, depending on the context, are:

#### Account-level roles:

- **Default user**: Has all existing permissions, except for editing the configuration of each context. Must be invited to each context in order to access its functionalities.
- **Default admin**: Has all the existing permissions, but must be invited to each context in order to access its functions. At the Modyo Platform account level, this role can only view global variables and activity.
- **Owner**: Has all existing permissions and can access all contexts without needing to be invited to them.

#### Site-level roles:

- **Site viewer**: Can view entries, see differences between versions, and you can leave comments. Can also access the sync view and see the changes pending syncing. However, this role is not authorized to take any action that involves a change to the platform. 
- **Site developer**: Can only edit resources. Cannot publish, delete, rollback, or edit the configuration.
- **Site developer CLI**: Has the same permissions as Site developer; in addition, can interact with modyo-cli.
- **Site reviewer**: Has all the permissions of the site admin role, except the permissions to edit the site settings.
- **Site admin**: Has all the permissions at the level of a site, but cannot create new sites.

#### Space-level roles:

- **Space viewer**: This role allows you to view the contents of a space, see differences between versions, and leave comments. Access is limited to viewing and participating through comments, you cannot make changes to the content or take actions that affect the configuration.
- **Space writer**: This role can only edit content in a space. You don't have permission to publish, delete, rollback, or edit the configuration.
- **Space editor**: You have all the permissions of a space admin, except for permissions to edit space settings. You don't have permissions to assets and you can't create types.
- **Space admin**: This role has all the permissions at the space level, but it cannot create new spaces. You can create and delete assets.

The most important user will have the Default Admin or Administrator role. This role has all the features enabled to manage the platform and sites.

#### Roles by realm:

- **Realm User**: This role can add users, create, modify, and submit campaigns, forms, and segments for review.
- **Realm Admin**: You can access all the settings and sections of the kingdom. In addition, you can add and remove users and team members, as well as delete the kingdom.

### Access to applications:
Modyo has roles that allow access to all applications without any restrictions; therefore, Modyo allows you to restrict access to certain applications by configuring the roles of team members. In this way, it is possible to grant a user full access (Owner) only to the Channels application, while restricting their access to other applications.

### Assign one role per account

To assign a role in the account context, follow these steps: 

1. Go to the “Team” section on the Modyo platform.
2. Click on the profile of the user you want to change the role to.
3. Go to the “Access” tab.
4. Select the role you want to assign to the user and in what space.
5. Click the**Save** button to confirm the changes.  
