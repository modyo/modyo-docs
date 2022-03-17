---
search: true
---

# SCIM provisioning with Microsoft Azure AD

Integrate your groups and users between Modyo and Microsoft Azure Active Directory using the SCIM-compatible API that Modyo provides.

#### To create your application in Azure Active Directory, follow these steps:

1. From the Azure Active Directory admin panel, click **Enterprise Applications**.
2. Click **Create your own application** and choose the following configuration:

<img src="/assets/img/platform/scim-1-createapp.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;"/>

3. Enter a name for your app and choose **Integrate any other application you don't find in the gallery**. Click **Create**.

4. In the side menu, select **Provisioning** and then click **Get Started**.

<img src="/assets/img/platform/scim-2-provision.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;"/>

5. In the admin credentials, add the following:
    - Provisioning mode: Automatic
    - Tenant URL: _URL for your SCIM compatible web server_ (e.g. https://myServidor.com/scim)
    - Secret Token: _Client Secret_ (The secret that was generated for your authentication credential)

<img src="/assets/img/platform/scim-3-testprovision.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;"/>

6. In the **Attribute Mapping** section, add a new group. The Group object will be able to perform all the actions: **Create, Update, Delete** and will have the following mapping:


| Azure Active Directory Attribute | customApp Attribute |
| ------------------------------- | ------------------ |
| displayName | displayName |
| objectId | externalId |
| members| members |

<img src="/assets/img/platform/scim-4-attributemapping.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;"/>

7. Adds a new users object. The User object will be able to perform the actions: **Create** and **Update** and will have the following mapping:

| Azure Active Directory Attribute | customApp Attribute |
| ------------------------------- | ------------------ |
| userPrincipalName | userName |
| Switch([IsSoftDeleted],, "False", "True", "True", "False") | active |
| mail| emails[type eq "work".value] |
| givenName| name.givenName|
| surname  |name.familyName|
| Join(" ",[givenName],[surname]| name.formatted|

<img src="/assets/img/platform/scim-5-attributemapping.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;"/>

8. In **Settings**, enable Scope **Sync all Users and Groups**.

<img src="/assets/img/platform/scim-6-provisioning.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;"/>

9. From the Active Directory main menu, select Users. 
10. Click **New User**. It is important to create an email for the user as this is required by Modyo.

<img src="/assets/img/platform/scim-7-allusers.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;"/>

12. From the Active Directory main menu, select Groups. 
13. Click **New Group**.

<img src="/assets/img/platform/scim-8-allgroups.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;"/>

14. On the main screen of your new application, click **Provisioning**.

> The path can be something like All services > Default Directory > Enterprise Applications > The new app

:::tip Tip
To verify that provisioning works, click **Provision on demand** and select a user.

For groups, there is no “on demand” provisioning, you have to create a user, add it to a group and select “start provisioning”, this task runs every 45 minutes, please wait until the process is done and refresh the page to see the change is reflected.
:::

<img src="/assets/img/platform/scim-9-ondemand.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;"/>



### References
- To build an Azure AD-compatible SCMI API, follow this guide from Microsoft. [Use SCIM to Provision Users and Groups](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/use-scim-to-provision-users-and-groups)
- For more information on the APIs that Modyo offers, see [Administration API](https://docs.modyo.com/en/platform/core/api.html).