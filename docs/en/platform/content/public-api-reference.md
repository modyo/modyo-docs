---
search: true
sidebarDepth: 1
---

# APIs & SDKs

Modyo Content has an API to be able to access spaces containing content entries quickly and efficiently. In order to access it there are two types of Software Development Kits (SDKs), one for internal use that connects [Modyo Content](/en/platform/content/) with [Modyo Channels](/en/platform/channels/) from the server side via Liquid and another external one that uses the public API in REST for consumption from Javascript.

:::tip SDKs for other languages
At the moment there is only, officially, an SDK for Javascript. In the future, versions are planned to make it easier to work with other languages.
:::

## Liquid SDK

The Liquid SDK allows you to natively consume content from [Modyo Channels](/en/platform/channels) in any of the sections that use the [Liquid] markup language (/es/platform/channels/liquid-markup.html), such as [Widgets](/es/platform/channels/widgets.html) and [Templates](/es/platform/channels/templates.html) of the site.

:::warning Attention
From version 9.0.8 onwards, the attributes of the entries will be called according to their meta information or their custom fields, such that:

* The fields belonging to the meta-information of the input that were previously used as <span v-pre>`{{ entry.slug }}`</span> should now be used as <span v-pre>`{{ entry.meta.slug }}`</span> 0, or <span v-pre>`{{ entry.meta['slug'] }}`</span>.
* Custom fields that were previously used as <span v-pre>`{{ entry.title }}`</span> must now be used as <span v-pre>`{{ entry.fields.title }}`</span> or <span v-pre>`{{ entry.fields['title'] }}`</span>.

Both forms will be available until Modyo version 9.2.
:::

### Accessing entries from a space

To access the list of entries for a type of uid `type_uid` in a uid space `space_uid` use:

``` liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries %}
{% for entry in entries %}
  entry: {{ entry.meta.uuid }} - {{ entry.meta.title }} <br/>
{% endfor %}
```

To access the total number of entries that a content filter returns, you can use the liquid filter `total_entries`, for example:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries %}
Total entries: {{ entries | total_entries }}
```

### Filter entries

If you want to filter entries, you can do so using the following attributes: by_uuid, by_slug, by_category, by_type, by_tag, by_lang, filter_by. They all receive an array of values, so it is possible to filter by a value or several, and the way to use it is as follows:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | by_category: 'news' | by_tag: 'tag1, tag2, tag3' %}
{% for entry in entries %}
  entry: {{ entry.meta.uuid }} -- {{ entry.meta.title }}<br />
{% endfor %}
```

In the case of the `filter_by` filter, you can make use of either meta attributes or custom fields of the content type, for example:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | filter_by: field: 'field_name', eq: 'value_to_filter' | sort_by: 'fields.date' , 'desc' | limit 8 %}
{% for entry in entries %}
  entry: {{ entry.meta.uuid }} -- {{ entry.meta.title }}<br />
{% endfor %}
```

If you want to deny a value within the field filter, you can use `note `inside the filter:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | filter_by: field: 'field_name', not: nil %}
{% for entry in entries %}
  entry: {{ entry.meta.uuid }} -- {{ entry.meta.title }}<br />
{% endfor %}
```

The selection of inputs always returns an array, so it is necessary to iterate over the result or access the first element, in case of filtering by a single uuid:

```liquid
{% assign entries = spaces ['space_uid'] .types ['type_uid'] .entries | by_uuid: 'entry_uuid'%}
{% assign entry = entries.first%}
```

You can page the entries using the `paginated` filter and display the pagination links with the `pagination_links` filter, for example:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | paginated: 10 %}
<ul>
  {% for entry in entries %}
  <li>{{ entry.meta.slug }}</li>
  {% endfor %}
</ul>
{{ entries | pagination_links }}
```

In the previous case, the list of entries will be paginated with 10 items per page and at the end of the list the pages will appear. You can navigate through each page using the GET `page` parameter in the URL, for example `my-pagina.com/ landing?page=2 `.

:::warning Attention
Note that if you have more than one widget that uses content pagination, using the _GET_ `per_page` and `page` parameters in the URL, all widgets with page pagination will be affected by those parameters.
:::

:::warning Attention
To make use of pagination in a custom widget, change the filter associated with pagination to <span v-pre> `{{ entries | pagination_links_remote }}` </span>. This is necessary because custom widgets are loaded asynchronously. Along with the above change, you need to ensure that _jQuery_ is available on the site and remember that by making use of the pagination links, only the HTML of the widget will change and the _JavaScript_ of the widget will not run again.
:::

### Sort tickets

In the same way that you can filter by category `by_category`, tags `by_tags` and by uuid `by_uuid`, you can create a filter to sort the results by the attributes "meta" `name`, `slug`, `created_at`, `updated_at`, `published_at` of the entries using the `sort_by` filters, as follows:

```liquid
{% assign entries = spaces ['space_uid'] .types ['type_uid'] .entries | sort_by: 'published_at', 'asc'%}
```

The possible values for the order are `asc` and `desc`, by default, if the parameter does not go, you can leave `desc`.
Possible values for `sort_by` are: `name`, `published_at`, `created_at`, `updated_at`, `slug` and `field`.

To sort by a custom field, you must use the field's `fields.uid` as a parameter:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | filter_by: field: 'field_name', eq: 'value_to_filter' | sort_by: 'fields.date' , 'desc' | limit 8 %}
{% for entry in entries %}
  entry: {{ entry.meta.uuid }} -- {{ entry.meta.title }}<br />
{% endfor %}
```

### Entrances with location

For entries with location fields you can easily generate maps using the `static_map` and `dynamic_map` filters, these use Google Maps Static API and Google Maps Javascript API respectively. The following example generates maps for the field `Locations` with a size of 600x300 px, a level 5 zoom, with map type 'roadmap', and with a custom icon.

```
{{ entry.fields.['Locations'] | static_map: '600x300',5,'roadmap','https://goo.gl/5y3S82'}}
```

The `dynamic_map` filter accepts an additional attribute to control the visibility of zoom, drag, and full screen controls.

```
{{ entry.fields['Locations'] | dynamic_map: '600x300',5,'roadmap','https://goo.gl/5y3S82',true}}
```

:::tip Tip
To use the attributes of the entries, you can use either dotted or bracketed notation, so <span v-pre>`{{ entry.meta.slug }}`</span>, returns the same value as <span v-pre>`{{ entry.meta['slug'] }}`</span>, and if you have a field called `location`, you can use it as much as <span v-pre>`{{ entry.fields.location }}`</span>, or <span v-pre>`{{ entry.fields['location'] }}`</span>
:::

## Javascript SDK

**The Modyo SDK** is a library that facilitates the interaction of Javascript based applications with Modyo's public API.

Using the SDK, you can obtain, filter and sort your created content so that you can fully take advantage of the capabilities of the Headless API.

In addition, the Modyo SDK allows you to obtain information from the end user who has already logged into the platform, to further customize the platform's interaction with your site.

### Installation

#### 1. Get a Modyo Token

The `@modyo /sdk` package is available in the Github registry under the Modyo organization. That's why to consume the package in a project we need, in addition to adding it to the `package.json`, **you need to get a token with the scope `read:packages`** ([reference on Github](https://help.github.com/packages/publishing-and-managing-packages/about-github-packages#about-tokens))

#### 2. Authenticate to Github packages

Once that token is obtained, we must occupy it to authenticate to Github packages. For that we create a `.npmrc` file in the `home`, that is, the file path would be `~/.npmrc`
The contents of that file (replacing `TOKEN` with our token)

```bash
//npm.pkg.github.com/:_authToken=TOKEN
```

[Reference on Github docs](https://help.github.com/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages)

#### 3. Add the organization to your project

Now you have to inform the project that will occupy `@modyo /sdk` that it should look for that package in the Github log and not in NPM. For that, in the same folder where `package.json` is in the project, we create a `.npmrc` containing the following:

```bash
registry= https://npm.pkg.github.com/OWNER
```

Where `OWNER `is the name of the organization that owns the package, in this case `modyo`

[Github docs reference](https://help.github.com/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#installing-a-package)

### Use

Once installed in our project we can create a client from which we will obtain the contents.
For that we instantiated a new customer with the web address of Modyo's account as an argument along with the language to request.

```js
import { Client } from "@modyo/sdk";
// We must use the account url to get the correct account
const modyoAccount = new Client("https://my-account.modyo.com", "en");
```

:::tip Tip
When instantiating a new client, the second parameter _locale_ is optional, so that entries are requested only in the requested language, otherwise the default language of the space will be used.
:::

### Content

The SDK allows access to both public and private/targetized content, facilitating interaction with our Headless API.

#### How to get public content

We can consult for a particular content type and thus get your schema

```js
// To obtain the type `Post` from a space called `Blog`
const typePost = modyoAccount.getContentType("blog", "post");
// `typePost` will return an object with multiple information about the type, including the type schema.
```

Once we have the type we need, we can see its schema, its attributes or consult its entries:

```js
// If we want to see that schema in more detail, we can use the `getSchema()` method
typePost.getSchema().then(sch => console.log("Content Type JSON Schema:", sch));
/*
That will print something like this:
> Content Type JSON Schema: {$schema: "http://json-schema.org/draft-07/schema#", definitions: {…}, type: "object", required: Array(2), properties: {…}}
*/
// To obtain the entries of that type
const entries = typePost.getEntries();
```

#### Pagination

In general, all results delivered by Modyo's Headless API are paginated. A `getEntries () `query with no associated filters brings up to 20 entries per page. The maximum number of entries per page is 100, and is configurable using the `Pagination` filter described in the following section, for example: `GetEntries (f.pagination (15.1)) `that will return the first page of the `f` filter where each page contains up to 15 entries.

The object returned by `getEntries()` includes a `meta` field to help you navigate it. The the returned object will look something like this:

```json

{
  "meta": {
    "total_entries": 4,
    "per_page": 10,
    "current_page": 1,
    "total_pages": 1
  },
  "entries": [
    {
      "meta": {
        "uuid": "baf8f3e2-5f15-4406-985c-ae2db0922c5b",
        "tags": [],
        "slug": "baf8f3e2-5f15-4406-985c-ae2db0922c5b"
        "..."
      },
      "fields": {
        "title": "title",
        "slug": "slug",
        "excerpt": "Excerpt of the entry...",
        "..."
      }
    }
  ]
}
```

#### Filters

The `getEntries()` method above can also receive a filter object to query the entries.
The supported filters are `Before`, `After`, `LessThan`, `GreaterThan`, `In`, `NotIn`, `Has` and can be used to query the `meta` fields of each entry (such as the creation date or assigned tags)

**Supported filters**:

- **Before, After, LessThan, GreaterThan**: They receive as a parameter the name of the field to compare and the value to which it will be compared.

- **In, NoTin, Has**: they receive as a parameter the name of the field to compare and an array of values to be compared to. In is equivalent to an `OR` in SQL, Has is equivalent to an `AND`.

- **SortBy**: Receives as parameters the field to sort and order (`asc` or `desc`).

- **JSONPath**: Receives the JSONPath [ref](https://goessner.net/articles/JsonPath/) that models a response structure.

- **Pagination**: Receives page number and total entries per page as parameters.

:::warning Attention
If you intend to filter by date, it is important that the filter value use the ISO-8601 standard.
:::

```js
// How to obtain a list of attributes that we can use in our queries
typePost
  .getSchema()
  .then(() => console.log("List of attributes:", typePost.getAttrs()));
```

To create a filter, we use the `Filter() `method

```js
const filters = typePost
  .Filter()
  .Before("meta.created_at", "2020-05-01")
  .In("meta.tags", ["tag1", "tag2"]);
  .Pagination(15,1);
// Now we can use it to obtain entries with these criteria
const filteredEntries = typePost.getEntries(filters);
// Resolve the promise
filteredEntries.then(res => console.log("Filtered entries response: ", res));
```

### Order

The results of our search can also be sorted with the `sortBy () `method

```js
//JSONPath and Sorting are also supported by filters
const filters = ctype
 .Filter()
 .sortBy("meta.created_at", "desc")
 .jsonPath("$.. uuid");
```

**Note**: As you can see in the example, it is possible to use in our queries expressions `JsonPath` [JSONPath - XPath for JSON](https://goessner.net/articles/JsonPath/)

#### Private content

To get private content, it is enough for the user to be logged in, passing to the `getContentType()` method a third argument in `false` (which indicates that it is not public)

```js
//To access private content (user must be logged in on account)
const PrivateTypePost = modyoAccount.getContentType ("blog", "post", false);
```

:::warning Attention
It is important that this potentially sensitive information be treated with care. Private content requires cookies and an end user who is logged into Modyo.
:::

### End User Information

:::warning Attention
It is important that you treat this sensitive information carefully. As with Private Content, this information is only available if you work from a browser that supports cookies, and the end user is logged into the platform.

To get end-user information, you need to call the function: `Client.getUserInfo () `that function will return an object with the basic information
of that user.
:::

## API Reference

### API Routing Structure

To perform any action, it is necessary to know the path structure of the contents in the API, which is done as follows:

```
https://www.example.com/api/content/spaces/:space_uid/types/:type_uid/schema

https://www.example.com/api/content/spaces/:space_uid/types/:type_uid/entries? [filters]

https://www.example.com/api/content/spaces/:space_uid/types/:type_uid/entries/:entry_uuid
```

Here, `space_uid` and `type_uid` correspond to the slugified name of the Space and the name of the Content Type, respectively.

### JSON Entries Structure

For any JSON element, in Modyo the structure is done this way:

JSON Entires:

```javascript
{
 "goal": {
 "total_entries": 2,
 "per_page": 15,
 "current_page": 1,
 "total_pages": 1
 },
 "Entiries": [
 {
 "goal": {
 "uid": "9b0a24a6-d84f-4851-8750-a86244947510",
 "space": "myspace",
 "name": "Lorem Ipsum pain",
 "type_name": "Post",
 "category": null,
 "updated_at": "2019-03-18T 14:06:59 .000- 03:00 ",
 "created_at": "2019-03-18T 14:06:59 .000- 03:00 ",
 "tags": [],
 "locale": "in",
 "available_locales": [
 "in"
 ]
 },
 "fields": {
 "Excerpt": "Lorem Ipsum pain",
 "body": "Lorem ipsum pain sit amet, sectetur adipiscing elit, thirst of eiusmod tempor incidundt ut labor and pain magna aliqua. At the best of this, what is the excitement of llamco laboris nisi ut aliquip ex ea commodo consequence. Duis aute pain in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id is laboratory."
 }
 },
 {
 "goal": {
 "uid": "1c9b24a6-d84f-4851-8750-a86244963589",
 "space": "myspace",
 "name": "Lorem Ipsum pain",
 "type_name": "Post",
 "category": null,
 "updated_at": "2019-03-18T 14:06:59 .000- 03:00 ",
 "created_at": "2019-03-18T 14:06:59 .000- 03:00 ",
 "tags": [],
 "locale": "in",
 "available_locales": [
 "in"
 ]
 },
 "fields": {
 "Excerpt": "Lorem Ipsum pain",
 "body": "Lorem ipsum pain sit amet, sectetur adipiscing elit, thirst of eiusmod tempor incidundt ut labor and pain magna aliqua. At the best of this, what is the excitement of llamco laboris nisi ut aliquip ex ea commodo consequence. Duis aute pain in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id is laboratory."
 }
 }
 ]
```

Entires JSON Schema:

```javascript
{
  "definitions": {
    "entry": {
      "type": "object",
      "properties": {
        "meta": {
          "type": "object",
          "required": [
            "uuid",
            "space",
            "name",
            "type_name",
            "category",
            "updated_at",
            "created_at",
            "tags",
            "locale",
            "available_locales"
          ],
          "properties": {
            "uuid": {
              "type": "string",
              "default": "",
              "examples": [
                "9b0a24a6-d84f-4851-8750-a86244947510"
              ],
              "pattern": "^(.*)$"
            },
            "space": {
              "type": "string",
              "default": "",
              "examples": [
                "myspace"
              ],
              "pattern": "^(.*)$"
            },
            "name": {
              "type": "string",
              "default": "",
              "examples": [
                "Lorem Ipsum dolor"
              ],
              "pattern": "^(.*)$"
            },
            "type_name": {
              "type": "string",
              "default": "",
              "examples": [
                "Post"
              ],
              "pattern": "^(.*)$"
            },
            "category": {
              "type": "null",
              "default": null,
              "examples": [
                null
              ]
            },
            "updated_at": {
              "type": "string",
              "default": "",
              "examples": [
                "2019-03-18T14:06:59.000-03:00"
              ],
              "pattern": "^(.*)$"
            },
            "tags": {
              "type": "array"
            },
            "locale": {
              "type": "string",
              "default": "",
              "examples": [
                "en"
              ],
              "pattern": "^(.*)$"
            },
            "available_locales": {
              "type": "array",
              "items": {
                "type": "string",
                "default": "",
                "examples": [
                  "en"
                ],
                "pattern": "^(.*)$"
              }
            }
          }
        },
        "fields": {
          "type": "object"
        }
      }
    }
  },
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": [
    "meta",
    "entries"
  ],
  "properties": {
    "meta": {
      "type": "object",
      "required": [
        "total_entries",
        "per_page",
        "current_page",
        "total_pages"
      ],
      "properties": {
        "total_entries": {
          "type": "integer"
        },
        "per_page": {
          "type": "integer"
        },
        "current_page": {
          "type": "integer"
        },
        "total_pages": {
          "type": "integer"
        }
      }
    },
    "entries": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/entry"
      }
    }
  }
}
```

Entry JSON:

```javascript
{
   "meta":{
      "uuid":"9b0a24a6-d84f-4851-8750-a86244947510",
      "space":"myspace",
      "name":"Lorem Ipsum dolor",
      "type_name":"Post",
      "category":null,
      "updated_at":"2019-03-18T14:06:59.000-03:00",
      "created_at": "2019-03-18T14:06:59.000-03:00",
      "tags":[

      ],
      "locale":"en",
      "available_locales":[
         "en"
      ]
   },
   "fields":{
      "excerpt":"Lorem Ipsum dolor",
      "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
   }
```

Entry JSON Schema:

```javascript
{
  "definitions": {},
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://example.com/root.json",
  "type": "object",
  "required": [
    "meta",
    "fields"
  ],
  "properties": {
    "meta": {
      "$id": "#/properties/meta",
      "type": "object",
      "required": [
        "uuid",
        "space",
        "name",
        "type_name",
        "category",
        "updated_at",
        "created_at",
        "tags",
        "locale",
        "available_locales"
      ],
      "properties": {
        "uuid": {
          "$id": "#/properties/meta/properties/uuid",
          "type": "string",
          "default": "",
          "examples": [
            "9b0a24a6-d84f-4851-8750-a86244947510"
          ],
          "pattern": "^(.*)$"
        },
        "space": {
          "$id": "#/properties/meta/properties/space",
          "type": "string",
          "default": "",
          "examples": [
            "myspace"
          ],
          "pattern": "^(.*)$"
        },
        "name": {
          "$id": "#/properties/meta/properties/name",
          "type": "string",
          "default": "",
          "examples": [
            "Lorem Ipsum dolor"
          ],
          "pattern": "^(.*)$"
        },
        "type_name": {
          "$id": "#/properties/meta/properties/type_name",
          "type": "string",
          "default": "",
          "examples": [
            "Post"
          ],
          "pattern": "^(.*)$"
        },
        "category": {
          "$id": "#/properties/meta/properties/category",
          "type": "null",
          "default": null,
          "examples": [
            null
          ]
        },
        "updated_at": {
          "$id": "#/properties/meta/properties/updated_at",
          "type": "string",
          "default": "",
          "examples": [
            "2019-03-18T14:06:59.000-03:00"
          ],
          "pattern": "^(.*)$"
        },
        "tags": {
          "$id": "#/properties/meta/properties/tags",
          "type": "array"
        },
        "locale": {
          "$id": "#/properties/meta/properties/locale",
          "type": "string",
          "default": "",
          "examples": [
            "en"
          ],
          "pattern": "^(.*)$"
        },
        "available_locales": {
          "$id": "#/properties/meta/properties/available_locales",
          "type": "array",
          "items": {
            "$id": "#/properties/meta/properties/available_locales/items",
            "type": "string",
            "default": "",
            "examples": [
              "en"
            ],
            "pattern": "^(.*)$"
          }
        }
      }
    },
    "fields": {
      "$id": "#/properties/fields",
      "type": "object"
    }
  }
}
```

### API Pagination

For any content resource through the API, it is necessary to make a pagination for its proper functioning.

To do this, an offset pagination with the page and per_page parameters is used in the query string of the input URL.

For example, with `page = 3`, `per_page = 20` you are prompting to return the next 20 items by skipping the first 40.

A pagination goal is delivered along with the response, such as:

```javascript
 "meta": {
    "total_entries": 2,
    "per_page": 15,
    "current_page": 1,
    "total_pages": 1
    }
```

#### Tickets

The entries that you can see in section correspond to all content sent through the API. In this regard, they may be filtered according to:

- Kind
- Category
- Tags
- Author

#### Filters

In searching ContentTypes with filters, an app-level distinction will be made depending on the requested filters:

Metadata (e.g. Tags, Category, Dates): Searches by SQL, will be queried by `meta.param_name` parameters. This as long as it's only the Metadata that is being consulted.

- Tags: consultable in two ways
  - `meta.tags=tag_name`
  - `meta.tags [in] [] =tag1_name&meta.tags [in] [] =tag2_name`
- Categories, searchable in one way: `meta.category=category_full_path` will consider the child categories of the consulted
- Creation/update/publish/unopen dates: searchable using ISO-8601 specification and with possibility to search by ranges (lt, gt):
  - `... /entries?meta.created_at=1987-11-19T 13:13:13 `
  - `... /entries?meta.updated_at [lt] =1987-11-19`
  - `... /entries?meta.published_at [gt] =1987-11-19`
- Fields: Searches using ElasticSearch, for example:
  - Location: The search will be either by QueryString (and will be searched in street_name, country, admin_area_levels) or by geohash. In both cases you must change <span v-pre> `{{field_name}}` </span> to the name of the location field of the content type
    - <span v-pre>`.../?fields.{{field_name}}[search]=chile`</span>. With the field called `location` it would be: `.../?fields.location[search]=chile`. This search does not take into account capital letters or small letters, but it does take into account spaces, titles and special characters.
    - <span v-pre>`.../?fields.{{field_name}}[geohash]=66j`</span>. With the field called `location` it would be: `.../?fields.location[geohash]=66j`
  - `... /entries? fields.color=black`

###### Language Filter

The Modyo API delivers input in the default space language, unless another language is explicitly requested via the query string locale parameter or the Accept-Language header.

For example, to obtain entries in the Spanish-English language (en-cl):

```plain
Query string: GET... /posts/posts? locale=en-cl
Header: Set Accept-Language
```

##### Operators

The main operations on fields are:

- [gt], [lt] = greater/less than, applicable to integers and dates
- [in] = allows you to include multiple values that enter an OR query
- [has] = allows you to include multiple values, which enter a query type AND, only works in multiple and text fields.
- [nin] = allows you to include multiple values, which enter a NOT IN query
- [search] = allows text searches within all attributes of the locations of an entry.
- [geohash] = allows searches using a lat-long geohash in base 32, for more information see https://www.movable-type.co.uk/scripts/geohash.html.

Example:

- `.. /entries? meta.created_at [in] [] =1987-11-19T 13:13:13 &meta.created_at [in] [] =1987-11-19T 14:14:14 `will search entries created on November 11 at both 13:13 and 14:14

##### Returned Fields

Using the fields parameter you can choose which parameters are returned in the document:

Metadata fields are referenced as: meta.attr_name (e.g. meta.tags)
The fields of entries such as: field.attr_name
A JSONPath expression is used for example:

`... /entries?fields=$.entries[*] .meta.uuid` to get only the uuids of the meta-data of the entries.
`... /entries?fields=$..description` to get all _description_ fields in entries.

##### Equalities/Inequalities in arrays

Fields that search in multiple items (checkboxes, multiple) can use the following syntax:

- HAS: equivalent to a sql AND
  `... /entries? fields.color [has] [] =red&fields.color [has] [] =black`
- IN: equivalent to a sql OR
  `... /entries? fields.color [in] [] =red&fields.color [in] [] =blue`
- NIN: equivalent to a sql NOT IN
  `... /entries? fields.color [nin] [] =red&fields.color [nin] [] =blue`

##### Order

The order of the results must be specified with the parameters `sort_by` and `order`:

- `sort_by`: indicating the name of the attribute (e.g. meta.tags, or fields.name)
- `order`: ['asc', 'desc'](optional, asc by default)

#### jQuery

The jQuery JavaScript library makes it easy to implement them within Modyo, around APIs.

A powerful feature of jQuery is its easy-to-understand AJAX functionality. It allows you to easily bring content data within your site, and also from other sites and services.

In this AJAX request, you are specifying an exit point (using the Liquid object <span v-pre> {{site.url}} </span>) and including options to specify that it is a "GET" of type 'json'. Finally link the "data.promotions" to "vm.promos" for use in the app.

#### Fetch API with native JavaScript

The Fetch API provides a simple JavaScript interface, to access and manipulate some of the HTTP protocol, such as requests and responses. The global fetch () method is an easy and logical way to bring resources asynchronously across a network.

A basic fetch request is very simple to perform. Look at the following code:
A JSON file is being brought from within the site using the Liquid object <span v-pre>{{ site.url }}</span>. The simplest use of fetch () requires an argument —the path of the resource you want to bring — and returns a "promise" containing the response (Response object).

This is an HTTP response, not the real JSON. To extract the JSON body from the response, use the json () method at the end of the response, and then link the data to the promotions (this fetch () is for this application).

For more detailed information, visit MDN webdocs.

#### Axios

Axios is a very popular JavaScript library that developers use to make HTTP requests that work on all modern browsers, including IE8 onwards.

It is based on the Promise object and allows you to asynchronously write code to make XHR requests easily.

Using Axios has some advantages over the native Fetch API:

- Supports older browsers (Fetch needs a polyfill)
- You have a way to cancel a request
- You have a way to set a timeout for a response
- Comes with CSRF protection included
- Supports charging progress
- Performs JSON data transformation automatically

In order to use Axios in Modyo, you need to add the axios.js base code as a custom snippet and include it somewhere your widgets can access it, like your JavaScript theme (located in Templates, under the Files tab).

The Modyo API provides a RESTful interface with responses formatted in a lightweight JSON that can be used in many functionalities of your account.

## Private content

Whenever you use the Content API, you can access published content that is available to all users (not private), however, if you want to access private content, you must add a header or a GET parameter to the request URL of the Content API.

:::tip Tip
If you use Liquid to access content, users who sign in and meet targets will automatically see the content as appropriate and no extra action is required by the Front End developer.
:::

The Content API can receive the delivery token parameter in two ways:

- As header: `Delivery-Token`
- As a GET parameter: `delivery_token`

The content access token is a public token in [JWT] format (https://tools.ietf.org/html/rfc7519) shared by all users belonging to the same target group. It can be obtained by making a GET request to the URL `account.url/api/profile/delivery_token`.

The content delivery token contains the following attributes:

- **iss**: Profile API base URL
- **aud**: Content API base URL
- **sub**: Name of space
- **exp**: Token expiration time
- **access_type**: delivery,
- **targets**: Target Array

For example:

```javascript
{
  "iss": "http://my-account.modyo.me/api/profile ",
  "aud": "http://my-account.modyo.me/api/content ",
  "sub": "account_uuid",
  "exp": 1516242622,
  "access_type": "delivery",
  "targets": ["target1", "target2"]
}
```

:::warning Attention
In order to access the token's retrieval URL, you must make sure you have a login with a user in the account or at least one site on the account, otherwise you will receive an error `404 - Not found`.
:::

:::warning Attention
It is necessary that obtaining the content access token be done dynamically, because that token will change according to the targets to which the user belongs, and since targets can become highly volatile, it is not advisable to store this value.
:::

The response to the content API query with the delivery token is the same as the response you would receive without the delivery token, but it will contain as part of the response, both private content (without targets) and targetized content that is restricted to the targets to which the user who requested your delivery token belongs.
