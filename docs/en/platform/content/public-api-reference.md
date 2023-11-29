---
search: true
sidebarDepth: 3
---

# API

Modyo Content has a complete API to quickly and efficiently access content entries within the spaces in your account. To access them, there are two types of Software Development Kits (SDKs), one for internal use that connects [Modyo Content](/en/platform/content/) with [Modyo Channels](/en/platform/channels/) server-side through Liquid, and another external SDK that uses the public RESTful API for consumption through Javascript.

:::tip SDKs for other languages
At the moment there is only an SDK for Javascript. In the future, we plan to incorporate versions in other languages.
:::

## API reference

### API Routing Structure

To perform any action, it is necessary to know the path structure of the contents in the API, which is done as follows:

```bash
https://www.example.com/api/content/spaces/:space_uid/types/:type_uid/schema

https://www.example.com/api/content/spaces/:space_uid/types/:type_uid/entries? [filters]

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

```shell
curl -X GET "https://test.modyo.com/api/content/spaces/{my_space}/types/{type}/entries"
```

### Display total number of Entries

To access the total amount of entries returned by a content filter, you can use the liquid `total_entries` filter, for example:


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

### Filter

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

### Order

In the same way that you can filter by category `by_category`, tags `by_tags` and by uuid `by_uuid`, you can create a filter to order the results by meta attributes `name`, `slug`, `created_at`, `updated_at`, and `published_at` of the entries using the filter `sort_by`, in the following way:

The order of the results must be specified with the `sort_by` and `order` parameters:

- `sort_by`: indicating the name of the attribute (e.g. meta.tags, or fields.name)
- `order`: ['asc','desc'] (opcional, asc by default)

```shell
curl -X GET "https://test.modyo.com/api/content/spaces/{my_space}/types/{type}/entries?sort_by=id&order=desc"
```

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