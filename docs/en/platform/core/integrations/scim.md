---
search: true
---

# Provisioning SCIM groups and users with Microsoft Azure AD

The Multi-Domain Identity Management System (SCIM) establishes standardized communication between Modyo and Microsoft Azure to automatically synchronize user and group data. This allows you to:
- Create users in Microsoft Azure and automatically provision them in Modyo.
- Update user data in Microsoft Azure and reflect changes in Modyo.
- Delete users in Microsoft Azure and deprovision them in Modyo

This integration of groups and users between Modyo and Microsoft Azure Active Directory with the Modyo SCIM API simplifies the management of users in different systems and reduces errors, promoting efficient administration.

:::warning Attention
The synchronization is unidirectional, meaning that data changed in Modyo will not affect user data in Azure. In addition, any changes made in Azure can overwrite the changes made in Modyo.
:::


### Step 1: Create your application in Azure Active Directory
1. Access the **Azure Active Directory admin panel**
1. In the side menu select **Enterprise Application**
1. Select the **Create your own app** option at the top of the Azure gallery
1. Name your application and select the option **Integrate any other application that is not on the page** as the purpose of the application
1. Click **Create**

### Step 2: Provisioning
1. Access your application in Azure
2. In the side menu, select **Provision**
3. Click on **Introduction**
4. Select **Automatic Provisioning**
5. In the admin credentials, add the following:
    - Tenant URL: The URL of your SCIM-compatible web server, for example: https://yourdomain.modyo.cloud/api/admin/scim
    - Secret Token: The Modyo administrative user's access token generated for the authentication credential. Detailed token information can be found in the [Management API] section (https://docs.modyo.com/en/platform/core/api.html#bearer-token)
6. In the Settings section, you can customize notification delivery and select the accidental deletion threshold. For more information about these configurations, review the [Azure] documentation (https://learn.microsoft.com/en-us/azure/active-directory/app-provisioning/user-provisioning)
7. Click **Test Settings** to verify the connection
8. Once the configuration is confirmed, click on **Save**
8. If the configuration and saving are correct, under the test connection button you can configure the **Assignments** section
9. Select an assignment to proceed to the attribute assignment step

### Step 3: Assigning Attributes
#### Groups
1. Select the **Provision Azure Active Directory Groups** assignment to configure its attributes.
2. Select the actions of the target object: Create, update, and/or delete. Confirm that the mapping is:

| Azure Active Directory Attribute | customApp Attribute |
| ------------------------------- | ------------------ |
| displayName | displayName |
| objectId | externalId |
| members| members |
3. Click **Save**

#### Users
1. Select the **Provision Azure Active Directory Users** assignment to configure the attributes of your groups.
2. Select only the actions: Create and update. Make sure the mapping is:

| Azure Active Directory Attribute | customApp Attribute |
| ------------------------------- | ------------------ |
| userPrincipalName | userName |
| Switch([IsSoftDeleted],, "False", "True", "True", "False") | active |
| mail| emails[type eq "work".value] |
| givenName| name.givenName|
| surname  |name.familyName|
| Join(" ",[givenName],[surname]| name.formatted|
3. Click **Save**
4. Once this is done, in the Provisioning section, in the configuration options you will now have the option of **Scope**, select **Synchronize all users in the group**
5. Click **Save**

You can confirm that your mapping configuration is correct by following these steps:
1. In Azure, go to provisioning
2. Select **On-Demand Provisioning**
3. Confirm that the process is running without showing errors

:::tip Tip
For groups, there is no on-demand provisioning, in order to test the group configuration, you must create a user, add it to a group and select **begin provisioning**.

This task is executed every 40 minutes, so you must wait this time to see the changes reflected in the platform.
:::

Once properly configured, you can add users to Active Directory. At the same time, your existing groups will also be provisioned.

:: :warning Attention
Username and email are required fields to generate users. Without them, user provisioning will fail.
:::


### References
- To build a SCIM API compatible with Azure AD, follow this guide from Microsoft. [Use SCIM to Provision Users and Groups](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/use-scim-to-provision-users-and-groups)
- For more information on the APIs that Modyo offers, see [Administration API](https://docs.modyo.com/en/platform/core/api.html).