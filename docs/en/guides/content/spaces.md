---
search: true
---

# Spaces

A Space is a limited place where team members can define different structures (types) of content, create and publish entries to use both inside or outside Modyo through their public API or in the creation of a site through Channels .

From Modyo you can configure access from different sources so that the service that consumes the API can easily interpret it.

Spaces also allows us to organize the content in the areas in which it is working, to have a better distribution and order.

When accessing the spaces section, all the existing ones will be listed indicating their name and the accounting of how many types of content and entries are created. This list can be sorted alphabetically by the name of the space or by the date it was created and filtered through a search engine that will match the names of the existing spaces.

## Create a Space

To create a Space, you must click on the green button in the upper right of the Index view of Spaces, and assign the name and the UID that we will use.

In addition, we must select the default language on which the content we will publish will be written, for a better configuration of the characters.

::: tip Tip
Later, in the configuration you can define other secondary languages for the Space entries.
:::

## Configure a Space

In this case, the Spaces configuration helps us to change the general characteristics, language, security, members of the work team and the rules of revision and publication.

<img src="/assets/img/content/space-settings.jpg" style="margin-top: 40px" width="300">

### General

To change the name of the Space or its UID, it is possible to do it from here.

The UID of the Space is very important since it is the attribute with which you access from the [public API](/guides/content/public-api-reference.html # reference-del-api) of content, the [Javascript SDK ](/guides/content/public-api-reference.html # sdk-de-javascript) and the [Liquid SDK](/guides/content/public-api-reference.html # sdk-de-liquid). Keep in mind that this attribute, apart from being unique, cannot contain tildes, dots or special characters, since it will be used in the URLs to access the content.

### Location

Modyo allows the change of languages and vocabulary according to the country in which it is needed. The change is useful if you need to work with personalized content and users with different languages.

<img src="/assets/img/content/locale-index.jpg" style="border: 1px solid #EEE;" width="600">

The default language of a Space is defined at the time of creating the Space and cannot be modified, but in this section you can add as many secondary languages as you need. You just have to select one from the list, add it and save the changes. After adding a secondary language, when you modify an entry, you will notice that a language selector will appear next to the page title.

<img src="/assets/img/content/selector-language.jpg" style="border: 1px solid #EEE; margin-top: 40px" width="350">

::: tip Tip
You can learn how to select one of the available languages of an entry in its corresponding sections: [Public API](/guides/content/public-api-reference.html # filters), [Javascript SDK](/guides/content/public -api-reference.html # sdk-de-javascript) and in [Liquid SDK](/guides/content/public-api-reference.html # filter-entries)
:::

### Cache

The cache is a tool that allows us to reduce the number of requests that reach the application servers, improving performance and reducing response times. In this section, you can enable the cache for the Public Content API of the Space, allowing the content to be cached for up to 5 minutes (300 seconds).

<img src="/assets/img/content/cache.jpg" style="margin: 40px 0; border: 1px solid #EEE" width="600">

::: warning Warning
You should take into account that when you enable this option, the changes in your content will be visible at intervals of the time you choose in this option, for example, if you use 5 minutes, when publishing the content with title "A", and then publish the same content with title "A + 1", for 5 minutes you will see the content with title "A" until the initial cache is invalidated.
:::

::: tip Tip
To work in development mode, it is highly recommended to have this option disabled, and only enable it when you have to face a scenario of high demand or concurrence.
:::

### Security

Modyo, as a form of secure data transmission, allows CORS to be enabled so that the API can be accessed by any microservice in an external domain.

For this, it is also necessary to specify the domain from where the information will be accessed. There is the possibility of allowing all origins but it is not the most recommended option.

<img src="/assets/img/content/cors-spaces.jpg" width="600" style="border: 1px solid #EEE; margin: 20px 0">

When CORS is enabled, the following changes occur within the API:

- The configuration of URLs allowed to access the content at the Spaces level, automatically allowing custom domains of sites.
- When a request is made to the API, the header ``` Access-Control-Allow-Origin``` with value request.origin is added to the response and ``` Access-Control-Allow-Credentials'=true``` `, only if the origin belongs to the urls/domains previously mentioned. Otherwise, they are not configured.
- Allowed URLs are cached at the application level.
- In case of using intermediate cache, the origin in the cache key must be considered so that the cache is handled separately in each source:

``` javascript
Varnish: sub vcl_hash {if (req.http.Origin) {hash_data (req.http.Origin); }}
Nginx: set $ cache_key "$ http_x_forwarded_proto://$ host $ request_uri- $ http_accept- $ http_x_requested_with";
```

#### CORS and SSL

When deciding whether to use SSL within the platform, the following should also be considered:

- SSL: Wildcards are not allowed.
- NO SSL: Wildcards are allowed, but Modyo must now be secure by default.

### Team Review

The content published on each of the platforms must be of good quality and as a way to certify this, Modyo uses the Team Review to confirm and correct the contents that are sent through the API.

<img src="/assets/img/content/enforced.jpg" style="border: 1px solid #EEE; margin: 40px 0" width="600">


For more information on how to configure this option, go to [Team Review](/guides/platform/team-review.html)

### Team members

<img src="/assets/img/content/teammembers.jpg" style="border: 1px solid #EEE; margin: 40px 0" width="600">

To form the working group, Modyo allows to select the team members who will work in this Space and thus have access to writing, review and/or publication.

To do this, the Administrator who created the Space can manually assign the users and the default roles that enable each of the functions.

#### Add user ####
To add a user to the Space, select the primary button **+ New** in the upper right of the view, in the modal select a user and assign a role, then press "Add" to make it part of the team of space work.

#### Modify Role ####
You can modify the role of any of the associated users by clicking on its name. A modal will be raised, where you can select the new role. Press **Save** to confirm the change.

::: warning Warning
It must be taken into account that the system will validate that there is always an administrator within the Space, so if there is only one administrator, the role cannot be modified.
:::

#### Remove Team Members ####
To remove a member of the Team from a Space, you can select them using the checks to the left of their name, and then clicking on the button at the bottom of the list **Delete**.

::: warning Warning
It must be taken into account that the system will validate that there is always an administrator within the Space, so if there is only one administrator, it cannot be deleted.
:::
