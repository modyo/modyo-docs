---
search: true
sidebarDepth: 2
---

# Users

In this section, you can view and modify the system's external users. These are the users who register on the platform, access Modyo sites, respond to forms and can receive email campaigns.

The main view shows a table with all registered users, which will be paginated if there are more than 30 records.

You can use the filters at the top of the table to quickly find user groups. The available filters are:

- **Status**: Active and inactive users.
- **Verification**: Users who have confirmed their data on the platform.
- **Segments:** Users who belong to a specific [segment](/en/platform/customers/segments.html).
- **Tags**: Users assigned to specific tags on the platform.
- **Search**: Filter users by name, last name, email or username.

You can sort the users in the table by name, registration date, last login, or number of sessions started by clicking on the column headers.

### Bulk actions

Check the box next to one or more users' names and click the **Bulk Actions** button below the list to perform the following actions:

- **Deactivate**: Deactivates the selected users.
- **Activate**: Activates the selected users.
- **Export**: Exports the user list in Excel or CSV format.
- **Add or remove tags**: Creates new tags and assigns or removes existing tags for the selected users.

## Add a user

To add a new user, click the **+ New User** button and complete the following fields:

- **First Name**: **[Required]**. The user's legal first name.
- **Surname**
- **Maternal surname**
- **Username**: **[Required]**. Unique identifier on the platform.
- **Email**: **[Required]**
- **Password**: **[Required]**. Must be at least 8 characters long.
- **Password Confirmation**: **[Required]**
- **Tags**: Labels to identify the user.

:::tip Tip
To send the password to the user's email, check the box below the email field. The user can change the password once they access the platform.
:::

If you need to add additional fields to the form or select a default avatar for users without one, go to the **Sign Up** section in the [Realm Settings](/en/platform/customers/settings.html).

To create or modify custom fields, refer to the [Custom Fields](/en/platform/customers/settings.html#custom-fields) section.

## User Profile

Click on the sidebar menu in the actions column to view a user's details or deactivate them. Select **View** to open the user's profile, where you'll find the following sections:

### Profile

General user information:

- **User Avatar**: Only if available.
- **Platform Status**: Active or inactive.
- **Registration Date**: User's platform sign-up date.
- **Last Login**: Last recorded login of the user on the platform.
- **Logins**: Number of sessions started by the user.
- **Verification Status** of the user.
- **Segments**: List of segments the user belongs to, if applicable.
- **Tags**: List of tags assigned to the user, if applicable.


### Activity

In this section, you can view a log of all actions performed by the user on the platform.

:::warning Attention
These records cannot be deleted or edited.
:::

### Answers to forms

This section contains a list of forms filled out by the user. Click on a form to view their responses. For more information, see the [Forms](/en/platform/customers/forms.html) section.

### Notes

Here, you can add custom notes about users. Only administrators can view, add, or delete notes.

#### Devices

Displays the user's devices with active sessions. An administrator can remotely end sessions.

### Additional options

In the contextual menu, you can perform the following actions:

- **Edit**: Opens the user editing modal.
- **Deactivate**: Deactivates a user, preventing them from logging in.
- **Delete**: Removes the user from the platform. Only administrators can perform this action.

:::tip Tip
- Modifying a user may result in changes to the list of segments they belong to.
- A user can delete their account from the additional options in their profile.
:::