---
search: true
---

# Spaces

A Space is a resource format where team members can define different structures (types) of content, create, and publish entries. 

All items can be used inside or outside of **Modyo** through its public API or in creating a site on Channels.

From Modyo you can configure access from different sources so that the service that consumes the API can easily interpret it.

Spaces also allows you to organize content in the areas where you are working, for better distribution and order.

Accessing the Spaces section will display a list indicating the name of the space and its number of content types and entries. 

:::warning Attention
In the Spaces Index, you will only see the spaces in which you are part of the work team with a role.
።:

This list can be sorted alphabetically by the name of the space or by the date it was created, and filtered through a search engine that will search for matches with the names of existing spaces.

## Create a Space

To create a space, click the green button at the top right of the space index view, and assign the name and UID you will use.

In addition, you will need to select the default language about which the content you want to publish will be written, for a better configuration of the characters.

:::tip Tip
Later, in the settings you will be able to define other secondary languages for space entries.
:::

## Configure a Space

In this case, Spaces settings are used to change general characteristics, language, security, team members, and review and publishing rules.

 <img src="/assets/img/content/space-settings.jpg" style="margin-top: 40px" width="300"> 

### General

In this section, you can change the name of the space or its UID.

The Space UID is very important since it is the attribute with which you access from the [public API] (/es/platform/content/public-api-reference.html #referencia -del-api) content, the [Javascript SDK] (/es/platform/content/public-api-reference.html #sdk -de-javascript) and the [Liquid SDK] (/es/platform/content/public-api-reference.html #sdk -de-liquid) ). 

Keep in mind that this attribute, apart from being unique, cannot contain tildes, dots or special characters, as it will be used in URLs to access the content.

The next option is to configure whether the content author will be visible in both the public API and the liquid SDK. If the option is enabled, then you will see the data of the administrator who created the content, and if the option is disabled, you will see the author blank. 

:::warning Attention
Keep in mind that saving this option will reindex all the entries in the space, so there may be a time window where changes are not reflected until the space entries are finished reindexing.
።:

The last option is to erase the space. This option allows you to definitely delete a space and all its elements.

:::danger danger
This option is irreversible, so you need to be completely sure when you run this action. By pressing the delete button, the system will prompt you for the name of the space. You must enter the textual name of the space you are deleting in order to execute the action. Once the action is confirmed, you will not be able to access the space or its elements again.
።:

### Localization

Modyo allows the change of languages and lexics according to the country in which it is needed. The change is useful if you need to work with custom content and users with different languages.

 <img src="/assets/img/content/locale-index.jpg" style="border: 1px solid #EEE;" width="600"> 

The default language of a space is defined at the time of creating the space and cannot be modified, but in this section you can add as many secondary languages you need. Just select one from the list, add it, and save your changes. After adding a secondary language, when you modify an entry, you'll notice that a language selector will appear next to the page title.

 <img src="/assets/img/content/selector-language.jpg" style="border: 1px solid #EEE; margin-top: 40px" width="350"> 

:::tip Tip
You can learn how to select one of the available languages from an entry in its corresponding sections: [Public API] (/es/platform/content/public-api-reference.html #filtros), [Javascript SDK] (/es/platform/content/public-api-reference.html #sdk -javascript) and in [Liquid SDK] (/es/platform/content/public-api-reference.html #filtrar - tickets)
:::

### Cache

Cache is a tool that allows you to reduce the number of applications that reach application servers, improving performance and reducing response times. In this section, you can enable cache for the public space content API, allowing content to be cached for up to 5 minutes (300 seconds).

 <img src="/assets/img/content/cache.jpg" style="margin: 40px 0; border: 1px solid #EEE" width="600"> 

:::warning Attention
Keep in mind that when you enable this option, changes to your content will be visible at intervals of the time you choose in this option, for example, if you use 5 minutes, when publishing content titled “A”, and then post the same content with the title “A+1", for 5 minutes you will see the content with the title “A” until the cache initial is invalidated.
።:

:::tip Tip
To work in development mode, it is highly recommended to have this option disabled, and only enable it when you have to face some high-demand or concurrency scenario.
:::

### Security

Modyo, as a form of secure data transmission, allows CORS to enable the API to be accessed by any microservice in an external domain.

To do this, it is also necessary to specify the domain from which the information will be accessed. There is the possibility to allow all sources but this is not the most recommended option.

 <img src="/assets/img/content/cors-spaces.jpg" width="600" style="border: 1px solid #EEE; margin: 20px 0"> 

When CORS is enabled, the following changes occur within the API:

- The configuration of URLs allowed to access content at the space level, automatically allowing custom domains of sites.
- When a request is made to the API, the header ```Access-Control-Allow-Origin``` with a request.origin value is added to the response and ```Access-Control-Allow-Credentials' = true```, only if the source belongs to the above-mentioned urls/domains. Otherwise they are not configured.
- Allowed URLs are cached at the application level.
- In case of using intermediate cache, the source in the cache key should be considered for the cache to be handled separately on each source:

javascript
Varnish: sub vcl_hash {if (req.http.Origin) {hash_data (req.http.Origin);}}
Nginx: set $cache_key “$http_x_forwarded_proto: //$host$request_uri-$http_accept-$http_x_requested_with”;
```

#### CORS and SSL

When deciding whether to use SSL within the platform, you should also consider the following:

- **SSL**: Wildcards are not allowed.
- **NO SSL**: Wildcards are allowed, but Modyo must now be secure by default.

### Team Review

The content published on each platform must be of good quality and for this, Modyo uses the Team Review to confirm and correct the content that is sent through the API.

 <img src="/assets/img/content/enforced.jpg" style="border: 1px solid #EEE; margin: 40px 0" width="600"> 


For more information on how to configure this option, see the [Team Review] section (/es/platform/core/key-concepts.html)

### Team Members

 <img src="/assets/img/content/teammembers.jpg" style="border: 1px solid #EEE; margin: 40px 0" width="600"> 

To form the working group, on the platform you can select the members who will work in this space and who will have access to writing, review and/or publication.

To do this, the Administrator who created the space can manually assign users and default roles that enable each of the roles.

#### Add User ####
To add a user to the Space, select the primary button **+ New** at the top right of the view, in the modal select a user and assign a role, then press**Add** to make it part of the workforce in the space.

#### Modify Role ####
You can modify the role of any of the associated users by clicking on their name. A modal will be raised, where you can select the new role. Tap **Save** to confirm the change.

:::warning Attention
It should be noted that the system will validate that an administrator always exists within the space, so if there is only one administrator the administrator will not be able to modify its Role.
።:

#### Remove Team Members ####
To remove a team member from a space, you can select them using the checks to the left of their name, and then clicking the button at the bottom of the**Dele** list.

:::warning Attention
It should be noted that the system will validate that an administrator always exists within the Space, so if there is only one administrator, the administrator cannot be deleted.
።: