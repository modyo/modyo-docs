---
search: true
sidebarDepth: 1
---

# APIs & SDKs

Modyo Content has a complete API to quickly and efficiently access content entries within the spaces in your account. To access them, there are two types of Software Development Kits (SDKs), one for internal use that connects [Modyo Content](/en/platform/content/) with [Modyo Channels](/en/platform/channels/) server-side through Liquid, and another external SDK that uses the public RESTful API for consumption through Javascript.

::: tip SDKs for other languages At the moment there is only an SDK for Javascript. In the future, we plan to incorporate versions in other languages.
:::

## Liquid SDK

The Liquid SDK allows you to natively consume content from [Modyo Channels](/en/platform/channels/) in any of the sections of the platform that use the [Liquid](/en/platform/channels/liquid-markup.html) markup language, like [Widgets](/en/platform/channels/widgets.html) and [Templates](/en/platform/channels/templates.html) in your sites.

:::warning
Warning From version 9.0.8 onwards, the attributes of the entries will be called according to their meta information or their custom fields, so:

* Fields belonging to the meta-information of the entry that were previously used as <span v-pre>`{{ entry.slug }}`</span> must now be used as <span v-pre>`{{ entry.meta.slug }}`</span> or <span v-pre>`{{ entry.meta['slug'] }}`</span>
* Custom fields that were previously used as <span v-pre>`{{ entry.title }}`</span> must now be used as <span v-pre>`{{ entry.fields.title }}`</span> or <span v-pre>`{{ entry.fields['title'] }}`</span>.

Both forms will be available until Modyo version 9.2.
:::

### Access entries in a space

To access the list of entries of a type with the uid `type_uid` and of a space with the uid `space_uid` we use:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries %}
{% for entry in entries %}
  entry: {{ entry.meta.uuid }} - {{ entry.meta.title }} <br/>
{% endfor %}
```

To access the total amount of entries returned by a content filter, you can use the liquid `total_entries` filter, for example:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries %}
Total entries: {{ entries | total_entries }}
```

### Filter entries

If we want to filter the entries, we can do so by the following attributes: by_uuid, by_slug, by_category, by_type, by_tag, by_lang, filter_by. Every response contains an array of values, so it is possible to filter by one value or several, as follows:

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

If you want to deny a value within the field filter, you can use `no` inside the filter:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | filter_by: field: 'field_name', not: nil %}
{% for entry in entries %}
  entry: {{ entry.meta.uuid }} -- {{ entry.meta.title }}<br />
{% endfor %}
```

The entries selection always returns an array. To access a particular entry in the array, you need to use the `first` attribute to access the first element, or filter by a single uuid:

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

In the previous case, the list of entries with 10 elements per page will be paginated and at the end of the list the pagination links will appear. You can navigate through each page using the _GET_ parameter `page` in the URL, for example `my-page.com/landing?page=2`.

::: warning
Warning Note that if you have more than one widget that uses content pagination, the _GET_ `per_page` and `page` parameters in the URL affect all widgets within a page.
:::

::: warning
Warning To use pagination in a custom widget, you must change the filter associated with pagination to <span v-pre> `{{entries | pagination_links_remote}} `</span>. This is necessary since custom widgets are loaded asynchronously. You also need to ensure that _JQuery_ is available on your site and remember that when you use the pagination links, only the widget HTML will be changed and the widget's _JavaScript_ will not be executed again.
:::

### Order entries

In the same way that you can filter by category `by_category`, tags `by_tags` and by uuid `by_uuid`, you can create a filter to sort the results by the "meta" `name`, `slug`, `created_at`, `updated_at`, `published_at` attributes of the entries using the `sort_by` filters, in the following way:

```liquid
{% assign entries = spaces ['space_uid'] .types ['type_uid'] .entries | sort_by: 'published_at', 'asc'%}
```

The available ordering options are `asc` and `desc`, and by default if this parameter is not specified, the values will be set to `desc`. The possible values for `sort_by` are: `name`, `published_at`, `created_at`, `updated_at`, `slug` and `field`.

To sort by a custom field, you must use the field's `fields.uid` as a parameter:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | filter_by: field: 'field_name', eq: 'value_to_filter' | sort_by: 'fields.date' , 'desc' | limit 8 %}
{% for entry in entries %}
  entry: {{ entry.meta.uuid }} -- {{ entry.meta.title }}<br />
{% endfor %}
```

### Entries with location

For entries with Location fields you can easily generate maps with the `static_map` and `dynamic_map` filters, these use Google Maps Static API and Google Maps Javascript API respectively. The following example generates maps for the `Locations` field with a size of 600x300px, a level 5 zoom, with a map type 'roadmap' and with a custom icon.

```
{{ entry.fields.['Locations'] | static_map: '600x300',5,'roadmap','https://goo.gl/5y3S82'}}
```

The `dynamic_map` filter accepts an additional attribute to control the visibility of the zoom, drag and full screen controls.

```
{{ entry.fields['Locations'] | dynamic_map: '600x300',5,'roadmap','https://goo.gl/5y3S82',true}}
```

:::tip
Tip To use the attributes of the entries, you can use either dotted or bracketed notation, so <span v-pre>`{{ entry.meta.slug }}`</span>, returns the same value as <span v-pre>`{{ entry.meta['slug'] }}`</span>, and if you have a field called `location`, you can use it as much as <span v-pre>`{{ entry.fields.location' }}`</span>, or <span v-pre>`{{ entry.fields['location'] }}`</span>
:::

## Javascript SDK

The **Modyo SDK** is a library that facilitates the interaction between JavaScript-based applications and Modyo's public API.

Through the SDK you can get, filter and sort your created content to fully leverage the capabilities of the Headless API.

In addition, the Modyo SDK allows you to obtain information about end users that have logged in to the platform to further customize their experience with your site.

### Installation

#### 1. Obtain a Modyo token

The `@modyo /sdk` package is available in the Github registry under the Modyo organization. That's why to consume the package in a project we need, in addition to adding it to the `package.json`, **you need to get a token with the scope `read:packages`** ([reference on Github](https://help.github.com/packages/publishing-and-managing-packages/about-github-packages#about-tokens))

#### 2. Authenticate to Github packages

Once we have obtained this token, we must use it to authenticate ourselves to Github packages. To do this, we create a `.npmrc` file in the `home` so that the file path is `~/.npmrc`. The content of that file (replacing `TOKEN` with your token) should be:

```bash
//npm.pkg.github.com/:_authToken=TOKEN
```

[Github docs reference](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages)

#### 3. Add the organization to your project

Now you have to inform the project that will use `@modyo/sdk` that it must look for that package in the Github registry and not in NPM. To do this, we create a `.npmrc` in the same folder where `package.json` of the project is, containing the following:

```bash
registry= https://npm.pkg.github.com/OWNER
```

Where `OWNER` is the name of the organization that owns the package, in this case `modyo`.

[Github docs reference](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#installing-a-package)

### Usage

Once the package has been installed in our project, we can create a client that we will use to fetch content. This can be done by creating a new client with the Modyo account's web address as the argument along with the language to be requested.

```js
import { Client } from "@modyo/sdk";
// We must use the account url to get the correct account
const modyoAccount = new Client("https://my-account.modyo.com", "en");
```

:::tip
Tip When a new client is instantiated, the second parameter _locale_ is optional and used to request entries only in the specified language, otherwise the default language of the space will be used.
:::

### Content

The SDK allows access to both public and private/targeted content, facilitating interaction with our Headless API.

#### How to get public content

We can ask for a particular type of content in order to get its schema.

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
> Content Type JSON Schema: {$schema: "http://json-schema.org/draft-07/schema#", definitions: {…}, type: "object", required: Array(2), properties: {…}} */
// To obtain the entries of that type
const entries = typePost.getEntries();
```

#### Pagination

In general, all results delivered by Modyo's Headless API are paginated. A `getEntries ()`query with no associated filters brings up to 20 entries per page. The maximum number of entries per page is 100, and is configurable using the `Pagination` filter described in the following section, for example: `GetEntries (f.pagination (15.1))`that will return the first page of the `f` filter where each page contains up to 15 entries.

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

The `getEntries()` method above can also receive a filter object to query the entries. The supported filters are `Before`, `After`, `LessThan`, `GreaterThan`, `In`, `NotIn`, `Has` and can be used to query the `meta` fields of each entry (such as the creation date or assigned tags)

**Supported filters**:

- **Before, After, LessThan, GreaterThan**: they receive the name of the desired field as a parameter and the value with which it will be compared.

- **In, NotIn, Has**: they receive the name of the desired field as a parameter and an array of values with which it will be compared. In is equivalent to an `OR` in SQL, Has is equivalent to an `AND`.

- **SortBy**: receives as parameters the field to be ordered and the order (`asc` or `desc`).

- **JSONPath**: receives the JSONPath [ref](https://goessner.net/articles/JsonPath/) that models a response structure.

- **Paginate**: receives as parameters the number of pages and the total number of entries per page.

:::warning
Warning If you intend to filter by date, it is important that the filter value uses the ISO-8601 standard.
:::

```js
// How to obtain a list of attributes that we can use in our queries
typePost
  .getSchema()
  .then(() => console.log("List of attributes:", typePost.getAttrs()));
```

To create a filter, we use the `Filter()`method

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

The results of our search can also be sorted with the `SortBy()` method

```js
// JSONPath and Sorting are also supported as filters
const filters = ctype
  .Filter()
  .SortBy("meta.created_at", "desc")
  .JSONPath("$..uuid");
```

**Note**: As you can see in the example, it is possible to use `JSONPath` expressions in our queries [JSONPath - XPath for JSON](https://goessner.net/articles/JsonPath/)

#### Private content

To obtain private content, the user only needs to be logged in and we can add a third argument with a `false` value to the `getContentType()` method (which indicates that it is not public)

```js
// To acces private content (user must have logged in to the account)
const privateTypePost = modyoAccount.getContentType("blog", "post", false);
```

:::warning
Warning It is important that this potentially sensitive information be treated with care. Private content requires cookies and an end user who is logged into Modyo.
:::

### End User Information

:::warning
Warning It is important that you treat this sensitive information with care. As with Private Content, this information is only obtainable if you work from a browser that supports cookies and the end user is logged into the platform.

To obtain information from the end user, it is necessary to call the `client.getUserInfo()` function that will return an object with the basic information of that user.
:::

## API Reference

### API Route Structure

To perform any action, it is necessary to know the route structure of the content in an API call, as follows:

```
https://www.example.com/api/content/spaces/:space_uid/types/:type_uid/schema

https://www.example.com/api/content/spaces/:space_uid/types/:type_uid/entries?[filters]

https://www.example.com/api/content/spaces/:space_uid/types/:type_uid/entries/:entry_uuid
```

Here, `space_uid` and `type_uid` correspond to the 'slugified' name of the Space and the name of the Content Type, respectively.

### JSON Entries Structure

The structure of every JSON element in Modyo looks like the following:

JSON Entires:

```javascript
{
  "meta": {
    "total_entries": 2,
    "per_page": 15,
    "current_page": 1,
    "total_pages": 1
  },
  "entries": [
    {
      "meta": {
        "uuid": "9b0a24a6-d84f-4851-8750-a86244947510",
        "space": "myspace",
        "name": "Lorem Ipsum dolor",
        "type_name": "Post",
        "category": null,
        "updated_at": "2019-03-18T14:06:59.000-03:00",
        "created_at": "2019-03-18T14:06:59.000-03:00",
        "tags": [],
        "locale": "en",
        "available_locales": [
          "en"
        ]
      },
      "fields": {
        "excerpt": "Lorem Ipsum dolor",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    },
    {
      "meta": {
        "uuid": "1c9b24a6-d84f-4851-8750-a86244963589",
        "space": "myspace",
        "name": "Lorem Ipsum dolor",
        "type_name": "Post",
        "category": null,
        "updated_at": "2019-03-18T14:06:59.000-03:00",
        "created_at": "2019-03-18T14:06:59.000-03:00",
        "tags": [],
        "locale": "en",
        "available_locales": [
          "en"
        ]
      },
      "fields": {
        "excerpt": "Lorem Ipsum dolor",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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

JSON Entry:

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

It's necessary to paginate content retrieved through the API to access it correctly.

You can create a pagination offset with the `page` and `per_page` parameters in the query string of the URL.

For example, with `page=3`, `per_page=20` as your parameters, you are requesting the third page with 20 entries in it, effectively retrieving entries starting with the 41st, up to the 60th.

The response comes with pagination metadata:

```javascript
 "meta": {
    "total_entries": 2,
    "per_page": 15,
    "current_page": 1,
    "total_pages": 1
    }
```

#### Entries

The entries that you can see in section correspond to all the content sent through the API. In that sense, they can be filtered according to:

- Type
- Category
- Tags
- Author

#### Filters

There is a distinction at the application level between the filter types used to query content:

Metadata (e. g. Tags, Category, Dates): Metadata (ex: Tags, Category, Dates): SQL searches using parameters with the format `meta.param_name` allow you to specify searches related to entry metadata. This is as long as it is only the Metadata that is being queried.

- Tags: available in two ways
  - `meta.tags=tag_name`
  - `meta.tags[in][]=tag1_name&meta.tags[in][]=tag2_name`
- Categories, which can only be specified with `meta.category=category_full_path` also consider child categories in the response.
- Dates of creation/update/publication/unpublishing: available using ISO-8601 specification and with the possibility of searching by ranges (lt, gt):
  - `... /entries?meta.created_at=1987-11-19T 13:13:13`
  - `... /entries?meta.updated_at [lt] =1987-11-19`
  - `... /entries?meta.published_at [gt] =1987-11-19`
- Fields: Searches through ElasticSearch, for example:
  - Location: the search will be by queryString (and will be searched in the fields street_name, country, admin_area_levels) or by geohash. In both cases you must change <span v-pre>`{{field_name}}`</span> to the name of the location field of the content type
    - <span v-pre>`.../?fields.{{field_name}}[geohash]=66j`</span>. With the field called `location` it would be: `.../?fields.location[geohash]=66j`
    - <span v-pre>`.../?fields.{{field_name}}[search]=chile`</span>. With the field called `location` it would be: `.../?fields.location[search]=chile`.
  - `... /entries? fields.color=black`

###### Language Filter

The Modyo API delivers entries in the default language of the Space, unless another language is explicitly requested through the query string locale parameter or the Accept-Language header.

For example, to get entries in the Spanish-Chile language (es_CL):

```plain
Query string: GET .../posts/entries?locale=es-cl
Header: Set Accept-Language es-cl
```

##### Operators

The main operations on fields are:

- [gt], [lt] = greater/less than, applicable to integers and dates.
- [in]=allows you to include several values that input an OR type query.
- [has] = allows you to include multiple values, which enter a query type AND, only works in multiple and text fields.
- [nin]=allows you to include several values, which input a NOT IN query.
- [search] = allows text searches within all attributes of the locations of an entry.
- [geohash]=allows searches using a lat-long geohash in base 32, for more information consult https://www.movable-type.co.uk/scripts/geohash.html.

Example:

- `.. /entries? meta.created_at [in] [] =1987-11-19T 13:13:13 &meta.created_at [in] [] =1987-11-19T 14:14:14`will search entries created on November 11 at both at 13:13 and 14:14

##### Returned Fields

Using the fields parameter you can choose which parameters are returned in the document:

The metadata fields are referenced as: meta.attr_name (ex meta.tags) The fields of the entries as: field.attr_name An example JsonPath expression:

`.../entries?fields=$.entries[*].meta.uuid` to obtain only the uuid from the meta-data of the entries. `.../entries?fields=$..description` to get all the _description_ fields in the entries.

##### Equalities/Inequalities in arrangements

Fields that search in multiple elements (checkboxes, multiple) can use the following syntax:

- HAS: equivalent to a sql AND `... /entries? fields.color [has] [] =red&fields.color [has] [] =black`
- IN: equivalent to a sql OR `... /entries? fields.color [in] [] =red&fields.color [in] [] =blue`
- NIN: equivalent to a sql NOT IN `... /entries? fields.color [nin] [] =red&fields.color [nin] [] =blue`

##### Order

The order of the results must be specified with the parameters `sort_by` and `order`:

- `sort_by`: indicating the name of the attribute (ex: meta.tags, or fields.name)
- `order`: \['asc', 'desc'\](optional, asc by default)

#### jQuery

The jQuery JavaScript library makes it easy to implement them within Modyo, around APIs.

A powerful feature of jQuery is that its AJAX functionality is easy to understand. It allows you to easily retrieve Modyo Content data into your sites, as well as from other external channels and services.

In this AJAX request, we are specifying an exit point (using the Liquid <span v-pre> {{site.url}} </span> object) and including options to specify what is a "GET" of type 'json'. Finally we link the "data.promotions" to our "vm.promos" to use it in the application.

#### Fetch API with native JavaScript

The Fetch API provides a simple JavaScript interface, to access and manipulate part of the HTTP protocol, such as requests and responses. The global fetch() method is an easy and logical way to bring resources asynchronously across a network.

A basic fetch request is very simple to make. Look at the following code: We are bringing a JSON file from within our site using the Liquid <span v-pre> {{site.url}} </span> object. The simplest use of fetch() requires an argument - the path of the resource you want to bring - and returns a "promise" that contains the response (Response object).

This is an HTTP response, not the real JSON. To extract the JSON body from the answer, we use the json() method at the end, and then link the data to our promotions (this fetch() is for this application).

For more detailed information, we recommend you visit the MDN webdocs.

#### Axios

Axios is a very popular JavaScript library that developers use to perform HTTP requests that work in all modern browsers, including support for IE8 and higher.

It's promise-based, and this lets you write async/await code to perform XHR requests easily.

Using Axios has quite a few advantages over the native Fetch API:

- Supports older browsers (Fetch needs a polyfill)
- Has a way to abort a request
- Has a way to set a response timeout
- Has built-in CSRF protection
- Supports upload progress
- Performs automatic JSON data transformation

In order to use Axios in Modyo, you need to add the axios.js source code as a custom snippet and include it somewhere that your widgets can access, such as the javascript theme (located in Templates, under the Assets tab).

The Modyo API provides a RESTful interface with responses formatted in a lightweight JSON that can be used in many features of your account.

## Private content

Whenever you use the Modyo Content API, you can access the published content that is available to all users (not private). However, if you want to access private content, you must add a header or a GET parameter to the request URL of the content API.

::: tip
Tip If you use Liquid to access content, users who log in and are part of a target will automatically see the content when appropriate and no extra action is required by the Front End developer.
:::

The content API can receive the delivery token parameter in two ways:

- In the header: `Delivery-Token`
- As a GET parameter: `delivery_token`

The content access token is a public token in [JWT](https://tools.ietf.org/html/rfc7519) format shared by all users belonging to the same group of targets. It can be obtained by making a GET request to the URL `account.url/api/profile/delivery_token`.

The content delivery token contains the following attributes:

- **iss**: base URL of the profile API
- **aud**: Content API base URL
- **sub**: Name of space
- **exp**: Token expiration time
- **access_type**: delivery
- **targets**: Array of targets

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

::: warning
Warning To be able to access the URL to obtain a token, you must make sure you have a session initiated with a user in the account, or at least in a site within that account, otherwise you will receive an error `404 - Not found`.
:::

:::warning
Warning It is necessary to obtain the content access token dynamically, since this token will change according to the targets to which the user belongs, and since the targets can be highly volatile, it is not advisable to store this value.
:::

The Content API query response with a delivery token is the same as the response you would receive without a delivery token, but will contain both the private content (without targets) and the restricted targeted content to which the requesting user belongs.
