---
search: true
---

# Spaces

A space is a repository where team members can define [content types](https://docs.modyo.com/es/platform/content/types) and entries.

Spaces allow you to organize content in the areas where you work, for better distribution and order.

You can use this content inside and outside the Modyo platform, through the public API or when creating a site in the Channels module. Configure access from various sources to allow the service that consumes the API to interpret it. See the [API](https://docs.modyo.com/es/platform/content/public-api-reference#api) section of our documentation for more information.

## About the interface

In the spaces interface, you can see a list of all your spaces, the number of content types and entries in each space, and the date it was created.

You can sort the columns alphabetically, by space name or identifier, or by creation date; and filter by name or identifier using the search engine.

:::warning Attention
You see the spaces where you're a team member, either directly or through a group. The account owner and users with the **Manage Content** permission see all spaces.
:::

## Create a space

To create a space, follow these steps:

1. In the side menu, select Content
1. Click on **New Space**
1. Fill out the fields in the form:
   - **Name**: the name of the space.
   - **Identifier**: it's filled in from the name and you can edit it. It lets you access the space content from the API and the SDKs.
   - **Default locale**: the account language is selected by default. You can't change it after creating the space.
   - **Space realm**: the user realm used for private and segmented content. It's optional: if you don't need it, leave **None**.
1. Click **Create**

Whoever creates the space becomes a member of its team with the **Space Admin** role.

If your account has already reached the maximum number of spaces for its plan, the space isn't created and you'll see the message "You've reached the maximum number of spaces for your current plan".


:::tip Tip
Selecting the default language in which you will write the content improves the character configuration.

Later, in the space configuration, you can define secondary languages for the entries.

:::

## Clone a space

Cloning a space creates a full copy within the same account: its categories, its content types, its entries, the files in its media library, and the team members with their roles are all copied. To clone a space:

1. In the side menu, select **Content**.
1. In the **Actions** column of the space's row, click **Clone**.
1. In the **Clone space** window, confirm by clicking **Clone space**.

The clone takes the name of the original prefixed with "Copy of" and the identifier prefixed with "copy-of-". If a space with that name or identifier already exists, a number is appended so it isn't repeated.

:::tip Tip
Cloning runs in the background and may take a while: while it completes, the window shows "This will take some time, the space is being cloned.". When it finishes you'll see "Space cloned successfully" and the list is refreshed with the new space.
:::

:::warning Attention
The number of spaces you can have is set by your account plan. If you've already reached that quota, cloning doesn't start and you'll see the message "You've reached the maximum number of spaces for your current plan". If you need a larger quota, talk to your Modyo account manager.
:::

## Space Settings

In this section, you can customize and adjust the options available for your space, according to your specific needs. To access the configuration of your space, follow these steps:
1. In the side menu, select Content
1. Select your space
1. Click on Space Settings to display the sections that you can modify.
1. Click on a section to customize your space. The available sections are:


### General

In this section, you can:
- **Change the name of the space**
- **Description**: Free text of up to 4095 characters to describe the space.
- **Show entries author**: Enabling this option allows the author of the content to be visible in the public API and in the Liquid SDK. If disabled, the author will be blank.

:::warning Attention
Saving this option reindexes all entries in the space. The changes will be reflected once the process is completed.
:::

- **Modify the realm's space**: When you change the user realm, you lose all privacy settings. You can choose a realm or one of its [stages](/en/platform/customers/realms.html#stages). While the space has a realm or one of its stages selected, that realm can't be deleted.
- **Modify the space identifier**: The identifier or UID of the space is the attribute with which you access from the public content API, the Javascript SDK, and the Liquid SDK. Make sure it's unique and without accents or special characters, as it will be used in URLs to access the content.
- **Delete space**: Permanently deletes the space and all its elements.
:::danger Danger
When selecting **Delete**, you must enter the textual name of the space to confirm the action. Once confirmed, you will not be able to access the space or its elements.
:::


### Localization

The default language of a space is defined when creating the space and you cannot modify it, but in this section you can add as many secondary languages as you need. This is useful for working with personalized content and users with different languages.

To add a language:
1. Select a language from the drop-down menu
1. Click on **Add locale**

To remove a secondary language:
1. Click the delete icon next to the language.
1. Confirm in the message "Removing locale. Are you sure?".

You can't remove the default language, which shows as **Default**, or a language that entries in the space already use. In that case, instead of the icon you'll see **Locale in use (can't be deleted)**.

Once you have added a secondary language, when you modify an entry, you will see a language selector next to the title of the entry.

For more information on how to translate an entry into a secondary language, review the [Translate an entry](https://docs.modyo.com/es/platform/content/entries#traducir-una-entrada) section.

:::tip Tip
To select one of the available languages from an entry in its corresponding sections, review the documentation of [Public API](/en/platform/content/public-api-reference#filter), [Javascript SDK](/en/platform/content/public-api-reference#sdk-de-javascript) and in [Liquid SDK](/en/platform/content/public-api-reference#filtrar-entradas)
:::


### Security

Modyo allows you to enable CORS so that the space's content API can be consumed from the browser on external domains, ensuring secure data transmission.

To enable CORS, check **Enable CORS for this space's entries** and enter the origins from which the information will be accessed in **Alternative origins**. You can also check **Allow all origins**; however, we do not recommend doing so.

When entering the origins, keep the following in mind:
- Enter each origin in full, with its scheme, its domain, and, if it isn't the standard one, its port (for example, `https://app.mydomain.com`). Separate the origins with commas.
- Wildcards aren't allowed: if any origin includes `*`, the settings aren't saved.
- When you save, the path and query parameters of each URL are removed.
- Your sites' domains aren't included automatically. If a site consumes the content API from the browser, add its domain to the list.

When you enable CORS:
- When a request is made to the API from an origin that exactly matches one in the list, the `Access-Control-Allow-Origin` header with that origin and `Access-Control-Allow-Credentials: true` are added to the response.
- If you checked **Allow all origins**, an origin that isn't in the list gets `Access-Control-Allow-Origin: *` in the response. Browsers don't accept that value on requests with credentials, so if your integration sends them, add its origin to the list.
- If using intermediate cache, consider the origin in the cache key to handle it separately in each origin:

```javascript
Varnish: sub vcl_hash {  if (req.http.Origin) { hash_data(req.http.Origin);  } }
Nginx: set $cache_key "$http_x_forwarded_proto://$host$request_uri-$http_accept-$http_x_requested_with";
```


### Team Review

Team review is a tool that allows multiple users to confirm and correct content before sending it through the API.
The configuration options for team review are as follows:
- **Enable team review**: Activates or deactivates team review. If enabled, all items submitted through the API will require approval from one or more reviewers.
- **Number of Approvals**: Specifies the number of approvals required for an item to be published.
- **Restrict reviewer selection**: Only users who request a review can select the reviewers, and only selected reviewers can approve the element.
- **Force review**: Requires at least one specific user to review the content.
- **Require all**: Requires all selected users to approve the item before it is published.

:::warning Attention
When you turn **Enable team review** on or off and save, every entry in the space that was in review or approved goes back to draft. Already published versions don't change. If team review stays on, you need to send them to review again to publish them.
:::

For more information on how to configure this option, go to [Team Review](/en/platform/core/#team-review).

### Team members

Team members are users who have access to a space to write, review, and publish content. The space administrator can add, modify, or remove team members and assign the default roles.

#### Add User ####
To add a user to the space:
1. Click **Add member**.
1. In **User**, select a user or a group from the account and, in **Role**, assign them a role. The list shows the active users and the groups that don't have a role in the space yet. If you choose a group, all its members access the space with that role.
1. Click **Add**.


#### Modify Role ####
To modify a user's role:
1. Click on the user's name.
1. In the modal, select the new role.
1. Press **Update**.


:::warning Attention
Every space must have at least one administrator. If there is only one administrator in a space, the platform will not allow you to modify their role.
:::

#### Remove team members ####
To remove a team member from a space:
1. Check the box next to the user's name.
1. Click **Delete** at the end of the user list.
1. Click **OK**.


:::warning Attention
Every space must have at least one administrator. If there is only one administrator in a space, the platform will not allow you to delete that user.
:::
