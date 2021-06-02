---
search: true
---

# Spaces

A Space is a distinct area where team members can define different content structures (types), and create and publish content entries.

All items can be used both inside or outside of **Modyo** through its public API or by creating a site in Channels.

From Modyo you can configure access to different sources so that services consuming the API can easily interpret them.

Spaces also allow us to organize content, for better order and easier distribution.

When accessing the list of spaces in the Modyo Content section, each listed space indicates how many content types and total entries it contains.

::: warning Warning The system will check to verify that there is always an administrator within a space, so if there is only one administrator, this team member's role cannot be deleted. :::

This list can be sorted alphabetically by space name or by the date the space was created, and you can also search for spaces by name.

## Create a Space

To create a Space, you must click on the green button in the upper right of the Spaces index view, and assign the name and the UID that you will use.

In addition, you must select the default language of your content which will result in a better character configuration.

:::tip Tip Later, in the configuration, you can define other secondary languages for the space. :::

## Configure a Space

In this case, the space configuration helps us to change the general settings, language, security, team members with access, and rules for revision and publication.

<img src="/assets/img/content/space-settings.jpg" style="margin-top: 40px" width="300" />

### General

Here you can change the name of a space and its UID.

The UID of the space is very important. It determines how you access the space through the  [public API](/en/platform/content/public-api-reference.html#reference-del-api) content, the [Javascript SDK](/en/platform/content/public-api-reference.html#sdk-de-javascript) and the [Liquid SDK](platform/content/public-api-reference.html#sdk-de-liquid).

Keep in mind that this attribute, apart from being unique, cannot contain tildes, dots or special characters, since it will be used in URLs to access the content.

The next option is to configure whether the author of the content will be visible in both the public API and the Liquid SDK. If the option is enabled, then you'll see the details of the administrator who created the content, and if the option is disabled, you'll see a blank author.

:::warning Warning Note that saving this option will reindex all the entries in the space, so there may be a time window where changes are not reflected until the space entries have finished reindexing. :::

The last option is to eliminate the space. This option allows you to permanently delete a space and all its elements.

:::danger Danger This option is irreversible, so you must be completely sure when executing this action. When you press the delete button, the system will ask you for the name of the space. You must enter the textual name of the space you are deleting in order to execute the action. Once the action is confirmed, you will not be able to access the space or its elements again. :::

### Locales

Modyo allows language and vocabulary changes by country, which is useful when you need to publish content in different languages. El cambio es útil en el caso de que se necesite trabajar con contenido personalizado y usuarios con distintos lenguajes.

<img src="/assets/img/content/locale-index.jpg" style="border: 1px solid #EEE;" width="600" />

The default language of a space is defined when first creating a space and cannot be modified, but in this section you can add as many secondary languages as needed. You just have to select one from the list, add it and save the changes. Adding a secondary language places a language selector next to the page title of any entries you edit in order to switch between entry languages.

<img src="/assets/img/content/selector-language.jpg" style="border: 1px solid #EEE; margin-top: 40px" width="350" />

::: tip Tip You can learn how to select one of the available languages of an entry in the following sections: [Public API](/platform/content/public-api-reference.html#filters), [Javascript SDK](/platform/content/public-api-reference.html#sdk-de-javascript) and in [Liquid SDK](/platform/content/public-api-reference.html#filter-entries) :::

### Cache

The cache is a tool that allows you to reduce the number of requests that reach the application servers, improving performance and reducing response times. In this section, you can enable the cache for the Content API of the Space, allowing the content to be cached for up to 5 minutes (300 seconds).

<img src="/assets/img/content/cache.jpg" style="margin: 40px 0; border: 1px solid #EEE" width="600" />

::: tip Tip To work in development mode, it is highly recommended to have this option disabled, and only enable it when you have a scenario of high demand or concurrence, with frequent, high-volume requests being made to your content in this space. :::

::: warning Warning The system will check to verify that there is always an administrator within a space, so if there is only one administrator, this team member cannot be deleted. :::

### Security

Modyo allows CORS to be enabled as a form of secure data transmission so that the API can be accessed by any microservice in an external domain.

You need to specify the domain from which the information will be accessed. It's possible to allow access to all origins but it is not usually recommended.

<img src="/assets/img/content/cors-spaces.jpg" width="600" style="border: 1px solid #EEE; margin: 20px 0" />

When CORS is enabled, the following changes occur within the API:

- The configuration of permitted URLs to access the content at the level of your Spaces, automatically allowing specified custom site domains.
- When a request is made to the API, the header `Access-Control-Allow-Origin` with the value request.origin and `Access-Control-Allow-Credentials'=true` is added to the response, only if the origin belongs to the urls/domains previously mentioned. Otherwise, they are not configured.
- Permitted URLs are cached at the application level.
- When using an intermediate cache, the origin in the cache key must be considered so that the cache is handled separately in each source:

```javascript
Varnish: sub vcl_hash {  if (req.http.Origin) { hash_data(req.http.Origin);  } }
Nginx: set $cache_key "$http_x_forwarded_proto://$host$request_uri-$http_accept-$http_x_requested_with";
```

#### CORS and SSL

When deciding whether to use SSL within the platform, the following should also be considered:

- **SSL**: Wildcards are not allowed.
- **NO SSL**: Wildcards are allowed, but Modyo must be secure by default.

### Team Review

Modyo uses the Team Review to confirm and correct content sent through the API.

<img src="/assets/img/content/enforced.jpg" style="border: 1px solid #EEE; margin: 40px 0" width="600" />


For more information on how to configure this option, go to [Team Review](/en/platform/core/key-concepts.html).

### Team Members

<img src="/assets/img/content/teammembers.jpg" style="border: 1px solid #EEE; margin: 40px 0" width="600" />

To allow access to a space, you must select the team members who will work in this Space and have varying levels of access to writing, reviewing and/or publishing.

To do this, the Content Administrator who created the space must manually assign users and their roles for each function.

#### Add User
To add a user to the space, select the primary button **+ New** in the upper right of the view, in the modal that appears, select a user and assign a role, then press **Add** to add them to the space.

#### Modify Role
You can modify the role of any of the associated users by clicking on their name. In the modal that appears, select a new role. Press **Save** to confirm the change.

:::warning Atención Se debe tener en cuenta que el sistema validará que siempre exista un administrador dentro del espacio, por lo que si solo hay un administrador a este no se le podrá modificar su Rol. :::

#### Remove Team Members
To remove a member of the team from a space, you can select them using the checkbox to the left of their name, and then clicking on the **Delete** button at the bottom of the list.

:::warning Atención Se debe tener en cuenta que el sistema validará que siempre exista un administrador dentro del Espacio, por lo que si existe un solo administrador, este no podrá ser borrado. :::