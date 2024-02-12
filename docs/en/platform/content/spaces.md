---
search: true
sidebarDepth: 3
---

# Spaces

A space is a repository where team members can define [types of content](https://docs.modyo.com/es/platform/content/types.html) and entries.

Spaces allow you to organize content in the areas where you work, for better distribution and order.

You can use this content inside and outside the Modyo platform, through the public API or when creating a site in the Channels module. Configure access from various sources, to allow the service that consumes the API to interpret it. See the [API](https://docs.modyo.com/es/platform/content/public-api-reference.html#api) section of our documentation for more information.

## About the interface

In the spaces interface, you can see a list of all your spaces, the number of content types and entries in each space, and the date it was created.

You can sort the columns alphabetically, by space name or identifier, or by creation date; and filter using the search engine.

:::warning Attention
You can only see those spaces in which you are part of the team, with a role.
:::

## Create a space

To create a space, follow these steps:

1. In the side menu, select Content
1. Click on **+ New Space**
1. Fill out the fields in the form.
1. Click **Create**


:::tip Tip
Selecting the default language in which you will write the content improves the character configuration.

Later, in the space configuration, you can define secondary languages for the entries.

:::

## Space Settings

In this section, you can customize and adjust the options available for your space, according to your specific needs. To access the configuration of your space follow these steps:
1. In the side menu, select Content
1. Select your space
1. Click on Space Settings to display the sections that you can modify.
1. Click on a section to customize your space. The available sections are:


### General

In this section, you can:
- **Change the name of the space**
- **Show the author of the posts:** Enabling this option allows the author of the content to be visible in the public API and in the Liquid SDK. If disabled, the author will be blank.

:::warning Attention
Saving this option reindexes all entries in the space. The changes will be reflected once the process is completed.
:::

- **Modify the realm's space:** When you change the user realm, you lose all privacy settings.
- **Modify the space identifier:** The identifier or UID of the space is the attribute with which you access from the public content API, the Javascript SDK and the Liquid SDK. Make sure it's unique and without accents or special characters, as it will be used in URLs to access the content.
- **Delete space:** Permanently deletes the space and all of its elements.
:::danger Danger
When selecting **Delete**, you must enter the textual name of the space to confirm the action. Once confirmed, you will not be able to access the space or its elements again.
:::


### Localization

The default language of a space is defined when creating the space and you cannot modify it, but in this section you can add as many secondary languages as you need, this is useful for working with personalized content and users with different languages.

To add a language:
1. Select a language from the drop-down menu
1. Click on **Add language**

Once you've added a secondary language, when you modify an entry, you'll see a language selector next to the title of the entry.

For more information on how to translate an entry into a secondary language, review the [Translate an entry](https://docs.modyo.com/es/platform/content/entries.html#traducir-una-entrada) section.

:::tip Tip
To select one of the available languages from an entry in its corresponding sections, review the documentation of [Public API](/en/platform/content/public-api-reference.html#filter), [Javascript SDK] (en/platform/content/public-api-reference.html#sdk-de-javascript) and in [Liquid SDK] (/en/platform/content/public-api-reference.html#filtrar-entradas)
:::


### Security

Modyo allows you to enable CORS so that the API can be accessed from any microservice in an external domain; ensuring secure data transmission.

To enable CORS, you must specify the domain from which the information will be accessed. You can also allow all sources; however, we don't recommend doing so.

When you enable CORS:
- The URLs allowed to access content are configured at the space level, automatically allowing custom site domains.
- When a request is made to the API, the Access-Control-Allow-Origin header with a value request.origin is added to the response and Access-Control-Allow-Credentials' = true, if the origin belongs to the mentioned domains.
- Allowed URLs are cached at the application level.
- If using intermediate cache, consider the origin in the cache key to handle it separately in each origin:

```javascript
Varnish: sub vcl_hash {  if (req.http.Origin) { hash_data(req.http.Origin);  } }
Nginx: set $cache_key "$http_x_forwarded_proto://$host$request_uri-$http_accept-$http_x_requested_with";
```
:::tip Tip
When deciding to use SSL, consider:
-  **SSL:** Wildcard certificates are not allowed.
- **NO SSL:** Wildcards are allowed in these environments, but you must enable them manually by sending a ticket to [Modyo support](https://support.modyo.com/hc/en-us). By default, Modyo uses SSL.

For more information, review the [Security](https://docs.modyo.com/es/platform/channels/sites.html#security-headers) section of the Modyo documentation.
:::


### Team Review

Team review is a tool that allows multiple users to confirm and correct content before sending it through the API.
The configuration options for team review are as follows:
- **Enable team review:** Activates or deactivates team review. If enabled, all items submitted through the API will require approval from one or more reviewers.
- **Number of Approvals:** Specifies the number of approvals required for an item to be published.
- **Restrict the selection of reviewers: ** Allows you to specify which users can review the content. Only those who submit for review can select reviewers.
- **Force review:** Requires at least one specific user to review the content.
- **Require all: ** Require all selected users to approve the item before it is published.

For more information on how to configure this option, review the
 [Team Review] (/es/platform/core/key-concepts.html)

### Team members

Team members are the users who have access to a space to write, review and publish content. The space administrator can add, modify, or remove team members and assign the default roles.

#### Add User ####
To add a user to the space:
1. Click **+ Add Member**.
1. In the modal, select a user and assign them a role.
1. Click **Add**.


#### Modify Role ####
To modify a user's role:
1. Click on the user's name.
1. In the modal, select the new role.
1. Press **Update**.


:: :warning Attention
Every space must have at least one administrator. If there is only one administrator in a space, the platform will not allow you to modify their role.
:::

#### Remove team members ####
To remove a team member from a space:
1. Check the box next to the user's name.
1. Click **Delete** at the bottom of the list of users.
1. Click **OK**.


:: :warning Attention
Every space must have at least one administrator. If there's only one administrator in a space, the platform won't allow you to delete that user.
:::