---
search: true
sidebarDepth: 3
---

# APIs & SDKs

Modyo Content has a complete API to quickly and efficiently access content entries within the spaces in your account. To access them, there are two types of Software Development Kits (SDKs), one for internal use that connects [Modyo Content](/en/platform/content/) with [Modyo Channels](/en/platform/channels/) server-side through Liquid, and another external SDK that uses the public RESTful API for consumption through Javascript.

:::tip SDKs for other languages
At the moment there is only an SDK for Javascript. In the future, we plan to incorporate versions in other languages.
:::

## Liquid SDK

The Liquid SDK allows you to natively consume content from [Modyo Channels](/en/platform/channels/) in any of the sections of the platform that use the [Liquid](/en/platform/channels/liquid-markup.html) markup language, like [Widgets](/en/platform/channels/widgets.html) and [Templates](/en/platform/channels/templates.html) in your sites.

:::warning Warning
From version 9.0.8 onwards, the attributes of the entries will be called according to their meta information or their custom fields, so:

* Fields belonging to the meta-information of the entry that were previously used as <span v-pre>`{{ entry.slug }}`</span> must now be used as <span v-pre>`{{ entry.meta.slug }}`</span> or <span v-pre>`{{ entry.meta['slug'] }}`</span>
* Custom fields that were previously used as <span v-pre>`{{ entry.title }}`</span> must now be used as <span v-pre>`{{ entry.fields.title }}`</span> or <span v-pre>`{{ entry.fields['title'] }}`</span>.

Both forms will be available until Modyo version 9.2.
:::

## Javascript SDK

The **Modyo SDK** is a library that facilitates the interaction of JavaScript-based applications with the Modyo public API.

Using the SDK, you can get, filter, and sort your created content so you can take full advantage of the Headless API's capabilities.

In addition, the Modyo SDK allows you to obtain information from the end user who is already logged in to the platform, to further customize their interaction with your site.

### Installation

#### 1. Get a Modyo token

The `@modyo /sdk` package is available in Github, under the Modyo organization. That's why to consume the package in a project, besides adding it to `package.json`, **you need to get a token with the scope `read:packages`** ([reference on Github](https://help.github.com/packages/publishing-and-managing-packages/about-github-packages#about-tokens))

#### 2. Authenticating to Github packages

Once we get that token, we need to use it to authenticate to Github packages. For that we create a `.npmrc` file in `home`, this means that the file path would be `~/.npmrc`
The contents of that file (replacing `TOKEN` with our token)

```bash
//npm.pkg.github.com/:_authToken=TOKEN
```

[Reference on Github docs](https://help.github.com/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages)

#### 3. Add the organization to your project

Now you have to inform the project that will use `@modyo/sdk` that it must look for that package in the Github registry and not in NPM. To do this, we create a `.npmrc` in the same folder where `package.json` of the project is, containing the following:

```bash
registry=https://npm.pkg.github.com/OWNER
```

Where `OWNER` is the name of the organization that owns the package, in this case `modyo`

[Github docs reference](https://help.github.com/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#installing-a-package)

### Use

Once installed in our project we can create a client from which we will obtain the contents.
For that we instantiate a new client with the web address of the Modyo account as an argument along with the language to be requested.

```js
import { Client } from "@modyo/sdk";
// Para obtener la cuenta correcta, debemos usar la url de la cuenta
const modyoAccount = new Client("https://my-account.modyo.com","es");
```

:::tip Tip
When instantiating a new client, the second parameter _locale_ is optional, the inputs are requested only in the requested language, otherwise the default language of the space will be used.
:::

## API reference

### API Routing Structure

To perform any action, it is necessary to know the path structure of the contents in the API, which is done as follows:

```
https://www.example.com/api/content/spaces/:space_uid/types/:type_uid/schema

https://www.example.com/api/content/spaces/:space_uid/types/:type_uid/entries?[filters]

https://www.example.com/api/content/spaces/:space_uid/types/:type_uid/entries/:entry_uuid
```

Here, `space_uid` and `type_uid` correspond to the slugified name of the Space and the name of the Content Type, respectively.

### JSON Entries Structure

For any JSON element, in Modyo the structure looks like this:

Entries JSON:

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
        "slug": "lorem-ipsum-dolor"
        "type": "Post",
        "private": false,
        "targets": [],
        "category": "lorem/ipsum",
        "updated_at": "2019-03-18T14:06:59.000-03:00",
        "created_at": "2019-03-18T14:06:59.000-03:00",
        "published_at": "2021-02-26T13:37:42.000Z",
        "version_type": "current",
        "category_name": "Ipsum",
        "category_slug": "ipsum",
        "unpublished_at": null,
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
        "name": "Lorem Ipsum",
        "slug": "lorem-ipsum"
        "type": "Post",
        "private": false,
        "targets": [],
        "category": "lorem",
        "updated_at": "2019-03-18T14:06:59.000-03:00",
        "created_at": "2019-03-18T14:06:59.000-03:00",
        "published_at": "2021-02-26T13:37:42.000Z",
        "version_type": "current",
        "category_name": "Lorem",
        "category_slug": "lorem",
        "unpublished_at": null,
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

Entries JSON Schema:

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
            "type",
            "category",
            "category_name",
            "category_slug",
            "created_at",
            "updated_at",
            "published_at",
            "unpublished_at",
            "tags",
            "locale",
            "available_locales",
            "targets",
            "private",
            "version_type",
            "slug"
          ],
          "properties": {
            "uuid": {
              "type": "string",
              "examples": [
                "9b0a24a6-d84f-4851-8750-a86244947510"
              ]
            },
            "space": {
              "type": "string",
              "examples": [
                "mySpace"
              ]
            },
            "name": {
              "type": "string",
              "examples": [
                "Lorem Ipsum dolor"
              ]
            },
            "type": {
              "type": "string",
              "examples": [
                "Lorem Ipsum dolor"
              ]
            },
            "category": {
              "type": "string",
              "examples": [
                "parent-category/my-category"
              ]
            },
            "category_name": {
              "type": "string",
              "examples": [
                "My Category"
              ]
            },
            "category_slug": {
              "type": "string",
              "examples": [
                "my-category"
              ]
            },
            "created_at": {
              "type": "string",
              "default": "",
              "examples": [
                "2019-03-18T14:06:59.000-03:00"
              ]
            },
            "updated_at": {
              "type": "string",
              "default": "",
              "examples": [
                "2019-03-18T14:06:59.000-03:00"
              ]
            },
            "published_at": {
              "type": "string",
              "default": "",
              "examples": [
                "2019-03-18T14:06:59.000-03:00"
              ]
            },
            "unpublished_at": {
              "type": "string",
              "default": "",
              "examples": [
                "2019-03-18T14:06:59.000-03:00"
              ]
            },
            "tags": {
              "type": "array",
              "items": {
                "type": "string",
                "examples": [
                  "tag1",
                  "tag2"
                ]
              }
            },
            "locale": {
              "type": "string",
              "examples": [
                "en"
              ]
            },
            "available_locales": {
              "type": "array",
              "items": {
                "type": "string",
                "examples": [
                  "es"
                ]
              }
            },
            "targets": {
              "type": "array",
              "items": {
                "type": "string",
                "examples": [
                  "target1"
                ]
              }
            },
            "private": {
              "type": "boolean",
              "examples": [
                false
              ]
            },
            "version_type": {
              "type": "string",
              "examples": [
                "current"
              ]
            },
            "slug": {
              "type": "string",
              "examples": [
                "en-labore"
              ]
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
      "space": "myspace",
      "name": "Lorem Ipsum dolor",
      "slug": "lorem-ipsum-dolor"
      "type": "Post",
      "private": false,
      "targets": [],
      "category": "lorem/ipsum",
      "updated_at": "2019-03-18T14:06:59.000-03:00",
      "created_at": "2019-03-18T14:06:59.000-03:00",
      "published_at": "2021-02-26T13:37:42.000Z",
      "version_type": "current",
      "category_name": "Ipsum",
      "category_slug": "ipsum",
      "unpublished_at": null,
      "tags": [],
      "locale": "en",
      "available_locales": [
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
        "type",
        "category",
        "category_name",
        "category_slug",
        "created_at",
        "updated_at",
        "published_at",
        "unpublished_at",
        "tags",
        "locale",
        "available_locales",
        "targets",
        "private",
        "version_type",
        "slug"
      ],
      "properties": {
        "uuid": {
          "type": "string",
          "examples": [
            "9b0a24a6-d84f-4851-8750-a86244947510"
          ]
        },
        "space": {
          "type": "string",
          "examples": [
            "mySpace"
          ]
        },
        "name": {
          "type": "string",
          "examples": [
            "Lorem Ipsum dolor"
          ]
        },
        "type": {
          "type": "string",
          "examples": [
            "Lorem Ipsum dolor"
          ]
        },
        "category": {
          "type": "string",
          "examples": [
            "parent-category/my-category"
          ]
        },
        "category_name": {
          "type": "string",
          "examples": [
            "My Category"
          ]
        },
        "category_slug": {
          "type": "string",
          "examples": [
            "my-category"
          ]
        },
        "created_at": {
          "type": "string",
          "default": "",
          "examples": [
            "2019-03-18T14:06:59.000-03:00"
          ]
        },
        "updated_at": {
          "type": "string",
          "default": "",
          "examples": [
            "2019-03-18T14:06:59.000-03:00"
          ]
        },
        "published_at": {
          "type": "string",
          "default": "",
          "examples": [
            "2019-03-18T14:06:59.000-03:00"
          ]
        },
        "unpublished_at": {
          "type": "string",
          "default": "",
          "examples": [
            "2019-03-18T14:06:59.000-03:00"
          ]
        },
        "tags": {
          "type": "array",
          "items": {
            "type": "string",
            "examples": [
              "tag1",
              "tag2"
            ]
          }
        },
        "locale": {
          "type": "string",
          "examples": [
            "en"
          ]
        },
        "available_locales": {
          "type": "array",
          "items": {
            "type": "string",
            "examples": [
              "es"
            ]
          }
        },
        "targets": {
          "type": "array",
          "items": {
            "type": "string",
            "examples": [
              "target1"
            ]
          }
        },
        "private": {
          "type": "boolean",
          "examples": [
            false
          ]
        },
        "version_type": {
          "type": "string",
          "examples": [
            "current"
          ]
        },
        "slug": {
          "type": "string",
          "examples": [
            "en-labore"
          ]
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

## Examples

### Display Entries

To access the list of entries of a type with the uid `type_uid` and of a space with the uid `space_uid` we use:

<CodeSwitcher>
<template v-slot:lq>

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries %}
{% for entry in entries %}
  entry: {{ entry.meta.uuid }} -- {{ entry.meta.title }}<br />
{% endfor %}
```

In the case of a single cardinality entry, you can use the entry method, for example:

```liquid
{{ spaces['space_uid'].types['type_uid'].entry }}
```

</template>
<template v-slot:js>

```js
import { Client } from "@modyo/sdk";
// To obtain the correct account, you have to use the url of the account
const modyoAccount = new Client("https://my-account.modyo.com","en");

const typePost = modyoAccount.getContentType("space_uid", "type_uid");
// `typePost` will return an object with information about the type, like the schema for example

// If we want to see more details about the schema, you can use the `getSchema()` method
typePost.getSchema().then(sch => console.log("Content Type JSON Schema:", sch));
/*
This will print something like:
> Content Type JSON Schema: {$schema: "http://json-schema.org/draft-07/schema#", definitions: {...}, type: "object", required: Array(2), properties: {...}}
*/
```
</template>
<template v-slot:curl>

```shell
curl -X GET "https://test.modyo.com/api/content/spaces/{my_space}/types/{type}/entries"
```

</template>
</CodeSwitcher>

### Display total number of Entries

To access the total amount of entries returned by a content filter, you can use the liquid `total_entries` filter, for example:

<CodeSwitcher isolated:true>
<template v-slot:lq>

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries %}
Total entries: {{ entries | total_entries }}
```

</template>
<template v-slot:js>


```js
import { Client } from "@modyo/sdk";
const modyoAccount = new Client("https://my-account.modyo.com","es");
const typePost = modyoAccount.getContentType("space_uid", "type_uid");

typePost.getSchema().then(sch => console.log("Content Type JSON Schema:", sch));

// To obtain the entries of that type
const entries = typePost.getEntries();

```

The object returned by getEntries() includes a meta field that will help you navigate it. The shape of the returned object will look something like this:

```json
"meta": {
    "total_entries": 4,
    "per_page": 10,
    "current_page": 1,
    "total_pages": 1
  },
```


</template>
<template v-slot:curl>

```shell
curl -X GET "https://test.modyo.com/api/content/spaces/{my_space}/entries?category_id=25"
```

The response contains the `meta` object that includes a field that will help you navigate it. The returned object will look something like this:

```json
"meta": {
    "total_entries": 4,
    "per_page": 10,
    "current_page": 1,
    "total_pages": 1
  },
```

</template>
</CodeSwitcher>

### Filter

<CodeSwitcher isolated:true>
<template v-slot:lq>

If you want to filter entries, you can do se by the following attributes: y_uuid, by_slug, by_category, by_type, by_tag, by_lang, filter_by. These are all arrays, which is why it is possible to filter by one or more values, for example:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | by_category: 'news' | by_tag: 'tag1, tag2, tag3' %}
{% for entry in entries %}
  entry: {{ entry.meta.uuid }} -- {{ entry.meta.title }}<br />
{% endfor %}    
```

In the case of the `filter_by` filter, it should be used for meta attributes or custom fields of the content type, for example:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | filter_by: field: 'field_name', eq: 'value_to_filter' | sort_by: 'fields.date' , 'desc' | limit 8 %}
{% for entry in entries %}
  entry: {{ entry.meta.uuid }} -- {{ entry.meta.title }}<br />
{% endfor %}
```

If you want to negate the value of a filter, you can use `not` inside the filter:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | filter_by: field: 'field_name', not: nil %}
{% for entry in entries %}
  entry: {{ entry.meta.uuid }} -- {{ entry.meta.title }}<br />
{% endfor %}
```

Selecting entries will always return an array, it is necessary to iterate over the result or accessing the first element, in the case of filtering by a unique uuid:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | by_uuid: 'entry_uuid' %}
{% assign entry = entries.first %}
```

You can paginate the entries using the filter `paginated` and display the pagination links with the filter `pagination_links`, for example:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | paginated: 10 %}
<ul>
  {% for entry in entries %}
  <li>{{ entry.meta.slug }}</li>
  {% endfor %}
</ul>
{{ entries | pagination_links }}
```

In the previous case, the entries will be paginated with 10 elements per page and the pagination links will appear at the end. You can navigate each page using the parameter GET `page` in the URL, for example: `my-page.com/landing?page=2`.

:::warning Warning
Keep in mind that if you have more than one widget that uses pagination in the content, using the parameters _GET_ `per_page` and `page` in the URL, every widget with pagination will be affected.
:::

:::warning Warning
To use pagination in a custom widget, you must change the filter associate to the pagination to <span v-pre>`{{ entries | pagination_links_remote }}`</span>.  This is required because custom widgets are loaded asynchronously. With this and the previous change, you must ensure that _JQuery_ is available in the site and while using pagination links, only the HTML will be modified in the widget, the _JavaScript_ code won't be executed again. 
:::

</template>
<template v-slot:js>

The `getEntries()` method above can also receive a filter object to query the entries.
Supported filters: `Before`, `After`, `LessThan`, `GreaterThan`, `In`, `NotIn`, `Has`, `Geohash`, and you can view the `meta` fields of each entry (such as creation date or assigned tags)

**Supported Filters**:

- **Before, After, LessThan, GreaterThan**: they receive as a parameter the name of the field to be compared and the value to which it will be compared.

- **In, NoTin, Has**: receive as a parameter the name of the field to be compared and an array of values with which it will be compared to. In is equivalent to an `OR` in SQL, Has is equivalent to an `AND`.

- **SortBy**: receives as parameters the field to sort and order (`asc` or `desc`).

- **JSONPath**: Receives the JSONPath [ref](https://goessner.net/articles/JsonPath/) that models a response structure.

- **Pagination**: receives the page number and total entries per page as parameters.

- **Geohash**: receives as parameters a location field and a geohash [ref](https://www.movable-type.co.uk/scripts/geohash.html) to select content within a location.

:::warning Warning
It is important that you filter by date using the ISO-8601 standard.
:::

```js
// If you want to obtain a list of attributes you can use
typePost
  .getSchema()
  .then(() => console.log("List of attributes:", typePost.getAttrs()));
```

To create a filter, we use the `Filter()` method

```js
const filters = typePost
  .Filter()
  .Before("meta.created_at", "2020-05-01")
  .In("meta.tags", ["tag1", "tag2"])
  .Pagination(15,1);
// We now use this to obtain entries with these filters
const filteredEntries = typePost.getEntries(filters);
// We can now use the filtered entries
filteredEntries.then(res => console.log("Filtered entries response: ", res));
```

</template>
<template v-slot:curl>

In the search for contentTypes with filters, a distinction will be made at the app level depending on the filters requested:

Metadata (e.g. Tags, Category, Dates): SQL searches will be queried by `meta.param_name` parameters. As long as only the metadata is being consulted.

- Tags: searchable in two ways
  - `meta.tags=tag_name`
  - `meta.tags[in][]=tag1_name&meta.tags[in][]=tag2_name`
- Categories, searchable only one way: `meta.category=category_full_path` will consider child categories of the one being searched for
- Dates of creation/update/publish/unpublish: searchable using ISO-8601 specification and with range search capability (lt, gt):
  - `.../entries?meta.created_at=1987-11-19T13:13:13`
  - `.../entries?meta.updated_at[lt]=1987-11-19`
  - `.../entries?meta.published_at[gt]=1987-11-19`
- Fields: Searches using ElasticSearch, for example:
  - Location: The search will be by queryString (and will be searched in the street_name, country, admin_area_levels fields) or by geohash. In both cases you should change <span v-pre> `{{field_name}}` </span> to the name of the location field of the content type
    - <span v-pre>`.../? fields extension. {{field_name}}[search]=chile`</span>. With the field called `location` it would be: `.../?fields.location[search]=chile` This search is case-insensitive, but does take space, tildes, and special characters into account.
    - <span v-pre>`.../? fields extension.{{field_name}}[geohash]=66j`</span>. With the field called `location` it would be: `.../?fields.location[geohash]=66j`
  - `.../entries?fields.color=black`

###### Language filter

Modyo API delivers entries in the default language of the Space, unless another language is explicitly requested via the query string locale parameter or the Accept-Language header.

For example, to get entries in the Spanish-Chile language (en-cl):

```plain
Query string: GET .../posts/entries?locale=es-cl
Header: Setear Accept-Language es-cl
```

##### Operators

The main operations on fields are:

- [gt], [lt] = greater/less than, applicable in integers and dates
- [in] = allows you to include multiple values that enter an OR query
- [has] = allows you to include multiple values, which fall into an AND query, only works on multiple and text fields.
- [nin] = allows multiple values to be included in a NOT IN query
- [search] = allows text searches within all attributes of an entry's locations.
- [geohash] = allows searches using a lat-long geohash in base 32, for more information see https://www.movable-type.co.uk/scripts/geohash.html.

Example:

- `../entries?meta.created_at[in][]=1987-11-19T13:13:13&meta.created_at[in][]=1987-11-19T14:14:14` will search for entries created on November 11, both 13:13 and 14:14

##### Returned Fields

Using the fields parameter you can choose which parameters are returned in the document:

Metadata fields are referenced as: meta.attr_name (e.g. meta.tags)
The entry fields such as: field.attr_name
A JsonPath expression is used for example:

`.../entries?fields=$.entries[*].meta.uuid` to get only the uuids of the meta-data of the entry.
`.../entries?fields=$..description` to get all _description_ fields in entries.

##### Equalities/Inequalities in arrays

Fields that search multiple items (checkboxes, multiple) can use the following syntax:

- HAS: equivalent to a sql AND
  `.../entries?fields.color[has][]=red&fields.color[has][]=black`
- IN: equivalent to a sql OR
  `.../entries?fields.color[in][]=red&fields.color[in][]=blue`
- NIN: equivalent to an sql NOT IN
  `.../entries?fields.color[nin][]=red&fields.color[nin][]=blue`

</template>
</CodeSwitcher>

### Order

In the same way that you can filter by category `by_category`, tags `by_tags` and by uuid `by_uuid`, you can create a filter to order the results by meta attributes `name`, `slug`, `created_at`, `updated_at`, and `published_at` of the entries using the filter `sort_by`, in the following way:

<CodeSwitcher isolated:true>
<template v-slot:lq>

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | sort_by: 'published_at','asc' %}
```

The possible values for the order are `asc` and `desc`, by default, `desc` is used.
Possible values for `sort_by` are: `name`, `published_at`, `created_at`, `updated_at`, `slug`, and `field`.

To sort by a custom field, you must use the field's `fields.uid` as a parameter:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | filter_by: field: 'field_name', eq: 'value_to_filter' | sort_by: 'fields.date' , 'desc' | limit 8 %}
{% for entry in entries %}
  entry: {{ entry.meta.uuid }} -- {{ entry.meta.title }}<br />
{% endfor %}
```

</template>
<template v-slot:js>

The results of our search can also be sorted using the `sortBy()` method

```js
// JSONPath and Sorting are also supported as filters
const filters = ctype
  .Filter()
  .SortBy("meta.created_at", "desc")
  .JSONPath("$..uuid");
```

**Note**: As you can see in the example, it is possible to use expressions in our queries `JSONPath` [JSONPath - XPath for JSON](https://goessner.net/articles/JsonPath/)

#### Private content

To get private content, it is enough that the user has an active session, passing a third argument `false` to the method `getContentType()` (this indicates that it is not public)

```js
// To access private content (user must be logged in on account)
const privateTypePost = modyoAccount.getContentType("blog", "post", false);
```

:::warning Warning
It is important that this potentially sensitive information be treated with care. Obtaining private content requires cookies and an end user who is logged into Modyo.
:::

### End User Information

:::warning Warning
It is important that you treat this sensitive information with care. As with Private Content, this information is only available if working from a browser that supports cookies, and the end user is logged in to the platform.

To get information from the end user, you need to call the function: `client.getUserInfo()`, this will return an object with the basic information
of that user.
:::

</template>
<template v-slot:curl>

The order of the results must be specified with the `sort_by` and `order` parameters:

- `sort_by`: indicating the name of the attribute (e.g. meta.tags, or fields.name)
- `order`: ['asc','desc'] (opcional, asc by default)

```shell
curl -X GET "https://test.modyo.com/api/content/spaces/{my_space}/types/{type}/entries?sort_by=id&order=desc"
```

</template>
</CodeSwitcher>

### Geolocalization

<CodeSwitcher isolated:true>
<template v-slot:lq>

For entries with location fields you can easily generate maps with the `static_map` and `dynamic_map` filters, these use Google Maps Static API and Google Maps Javascript API respectively. The following example generates maps for the `Locations` field with a size of 600x300 px, a level 5 zoom, with a map type 'roadmap' and with a custom icon.

```
{{ entry.fields.['Locations'] | static_map: '600x300',5,'roadmap','https://goo.gl/5y3S82'}}
```

The `dynamic_map` filter accepts an additional attribute to control the visibility of the zoom, drag and full screen controls.

```
{{ entry.fields['Locations'] | dynamic_map: '600x300',5,'roadmap','https://goo.gl/5y3S82',true}}
```

:::tip Tip
To use input attributes, you can use dot or square bracket notation, so <span v-pre> `{{ entry.meta.slug }}` </span>, returns the same value as <span v-pre> `{{ entry.meta['slug'] }}` </span>, and if you have a field called `location`, you can use it as <span v-pre> `{{ entry.fields.location }} `</span>, or <span v-pre>`{{ entry.fields['location'] }}`</span> 
:::

</template>
</CodeSwitcher>


### Private content

Whenever you use the Content API, you can access published content that is available to all users (not private), however, if you want to access private content, you must add a header or a GET parameter to the Content API request URL.

:::tip Tip
If you use Liquid to access content, users who sign in and fit with the segment criteria will automatically see the content where appropriate and no extra action is required from the Front End developer.
:::

The Content API can receive the delivery token parameter in two ways:

- As a header: `Delivery-Token`
- As a GET parameter: `delivery_token`

The content access token is a public token in [JWT](https://tools.ietf.org/html/rfc7519) format shared by all users who belong to the same segment group. It can be obtained by making a GET request to the URL `test.modyo.com/api/customers/realms/{realm_uid}/delivery_token`.

The content delivery token contains the following attributes:

- **iss**: Base URL of the customers API
- **aud**: Base URL of the Content API
- **sub**: Name of the space
- **exp**: Token expiration time
- **access_type**: delivery,
- **segments**: Array of segments

For example:

```javascript
{
  "iss": "http://my-account.modyo.me/api/customers",
  "aud": "http://my-account.modyo.me/api/content",
  "sub": "account_uuid",
  "exp": 1516242622,
  "access_type": "delivery",
  "segments": ["segment1", "segment2"]
}
```

:::warning Warning
In order to access the fetch token URL, you must ensure that you are logged in with a user in the account or at least one site in the account, otherwise you will receive a `404 - Not found` error.
:::

:::warning Warning
Obtaining the content access token needs to be done dynamically, as that token will change according to the segments to which the user belongs, and since segments can become highly volatile, it is not recommended to store this value.
:::

The response of the Content API query with the delivery token is the same as the response you would receive without the delivery token, but this will contain both private content (without segments) and segmented content that is restricted to the segments to which the user requesting your delivery token belongs as part of the response.