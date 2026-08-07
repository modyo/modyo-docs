---
search: true
---

# API

Modyo Content has an API to quickly and efficiently access content entries within the spaces in your account. To access it, there are two types of Software Development Kits (SDKs): one for internal use that connects [Modyo Content](/en/platform/content/) with [Modyo Channels](/en/platform/channels/) server-side through Liquid, and another external SDK that uses the public RESTful API for consumption through Javascript.

:::tip SDKs for other languages
Currently, there is only an official SDK for Javascript. In the future, we plan to incorporate versions to facilitate working with other languages.
:::

## API reference

### API routing structure

To perform any action, it is necessary to know the path structure of the contents in the API, which is done as follows:

```bash
https://www.example.com/api/content/spaces/:space_uid/types/:type_uid/schema

https://www.example.com/api/content/spaces/:space_uid/types/:type_uid/entries?[filters]

https://www.example.com/api/content/spaces/:space_uid/types/:type_uid/entries/:entry_uuid
```

Here, `space_uid` and `type_uid` correspond to the slugified name of the Space and the name of the Content Type, respectively.

### JSON entries structure

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
}
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

### Display entries

To access the list of entries of a type with the uid `type_uid` and of a space with the uid `space_uid`, use:

```shell
curl -X GET "https://test.modyo.com/api/content/spaces/{my_space}/types/{type}/entries"
```

### Display total number of Entries

Every entry listing includes a `meta` object at the root of the response with the total number of entries that match the query, in the `total_entries` field. That total refers to the whole query, not to the page you are viewing.

If you only need the count, request a single-item page with `per_page=1` and read `meta.total_entries`:

```shell
curl -X GET "https://my_account.modyo.com/api/content/spaces/my_space/types/my_type/entries?meta.category=my_category&per_page=1"
```

The returned object will look something like this:

```json
"meta": {
    "total_entries": 4,
    "per_page": 1,
    "current_page": 1,
    "total_pages": 4
  },
```

:::warning Attention
Entries are always queried under a content type: the only available route is `/spaces/:space_uid/types/:type_uid/entries` and there is no `/spaces/:space_uid/entries`. To filter by category, use `meta.category` with the category's full path, since `category_id` is not a valid parameter and the request responds `400` with <code v-pre>{"error":{"query":{"category_id":["Unknown parameter"]}}}</code>.
:::

### Filter

In the search for contentTypes with filters, a distinction will be made at the app level depending on the filters requested:

Metadata (e.g., Tags, Category, Dates): SQL searches will be queried by `meta.param_name` parameters. This is while only the Metadata is being queried.

- Tags: searchable in two ways
  - `meta.tags=tag_name`
  - `meta.tags[in][]=tag1_name&meta.tags[in][]=tag2_name`
- Categories, searchable only one way: `meta.category=category_full_path` will consider child categories of the one being searched for
- Creation/update/publication/unpublication dates: searchable using ISO-8601 specification and with range search capability (lt, gt):
  - `.../entries?meta.created_at=1987-11-19T13:13:13`
  - `.../entries?meta.updated_at[lt]=1987-11-19`
  - `.../entries?meta.published_at[gt]=1987-11-19`
- Fields: Searches using ElasticSearch, for example:
  - Location: The search will be by queryString (and will be searched in the street_name, country, admin_area_levels fields) or by geohash. In both cases, you should change <span v-pre> `{{field_name}}` </span> to the name of the content type's location field
    - <span v-pre>`.../?fields.{{field_name}}[search]=chile`</span>. With the field called `location`, it would be: `.../?fields.location[search]=chile` This search is case-insensitive, but it does take into account spaces, tildes, and special characters.
    - <span v-pre>`.../?fields.{{field_name}}[geohash]=66j`</span>. With the field called `location`, it would be: `.../?fields.location[geohash]=66j`
  - `.../entries?fields.color=black`

##### Language filter

The content API delivers entries in the Space's default language. To request another language, use the `locale` query string parameter, which is the only way available: the content API does not read the `Accept-Language` header.

For example, to get entries in the Spanish language (es):

```shell
curl -X GET "https://my_account.modyo.com/api/content/spaces/my_space/types/my_type/entries?locale=es"
```

:::warning Attention
The language you request must be enabled in the Space. If it isn't, the request does not fall back to the default language: it responds `400` with <code v-pre>{"error":"Locale not available for this space"}</code>.
:::

##### Operators

The main operations on fields are:

- [gt], [lt] = greater/less than, applicable in integers and dates
- [in] = allows you to include multiple values that enter an OR query
- [has] = allows you to include multiple values, which fall into an AND query, only works on multiple and text fields.
- [nin] = allows multiple values to be included in a NOT IN query
- [search] = allows text searches within all attributes of an entry's locations.
- [geohash] = allows searches using a lat-long geohash in base 32. For more information, see https://www.movable-type.co.uk/scripts/geohash.html.

Example:

- `../entries?meta.created_at[in][]=1987-11-19T13:13:13&meta.created_at[in][]=1987-11-19T14:14:14` will search for entries created on November 11, both at 13:13 and 14:14

##### Returned Fields

Using the fields parameter, you can choose which parameters are returned in the document:

Metadata fields are referenced as: meta.attr_name (e.g., meta.tags)
Entry fields as: field.attr_name
A JsonPath expression is used, for example:

`.../entries?fields=$.entries[*].meta.uuid` to get only the uuids of the entry's metadata.
`.../entries?fields=$..description` to get all _description_ fields in entries.

##### Equalities/Inequalities in arrays

Fields that search multiple items (checkboxes, multiple) can use the following syntax:

- HAS: equivalent to an SQL AND
  `.../entries?fields.color[has][]=red&fields.color[has][]=black`
- IN: equivalent to an SQL OR
  `.../entries?fields.color[in][]=red&fields.color[in][]=blue`
- NIN: equivalent to an SQL NOT IN
  `.../entries?fields.color[nin][]=red&fields.color[nin][]=blue`

### Order

The order of the results is specified with the `sort_by` and `order` parameters:

- `sort_by`: name of the attribute you want to sort by, always with the `meta.` or `fields.` prefix. A name without a prefix, or an attribute that is not sortable, responds `400` with <code v-pre>{"error":{"query":{"sort_by":["Key not sortable"]}}}</code>.
- `order`: `asc` or `desc`. It is optional and defaults to `asc`. If you send `sort_by` with a different `order`, the request responds `400` with <code v-pre>{"error":{"query":{"order":["Supported values: asc, desc. asc is selected when no order is specified"]}}}</code>.

The metadata attributes you can use in `sort_by` are:

- `meta.uuid`
- `meta.name`
- `meta.slug`
- `meta.created_at`
- `meta.updated_at`
- `meta.published_at`
- `meta.unpublished_at`

```shell
curl -X GET "https://my_account.modyo.com/api/content/spaces/my_space/types/my_type/entries?sort_by=meta.published_at&order=desc"
```

You can also sort by a field of the content type using the `fields.` prefix, as long as the field is of type Boolean, Checkbox, Date, Decimal, Dropdown, Integer, Radio, or Single-line text. The remaining [field types](/en/platform/content/types.html), such as Rich text, Multiple choice, Location, File, or Group, are not sortable.

For example, to sort by a field called `priority` of type Integer:

```shell
curl -X GET "https://my_account.modyo.com/api/content/spaces/my_space/types/my_type/entries?sort_by=fields.priority&order=asc"
```

:::warning Attention
`meta.tags` is not sortable, it only works as a filter. Don't use `meta.category`, `meta.category_slug`, or `meta.category_name` as sorting criteria either: the API accepts them as a parameter, but it cannot resolve the order and the request fails.
:::

### Preview

By default, the content API delivers only the published versions of entries. If the browser making the request has an administrator session with [preview mode](/en/platform/core/#preview-modes) open, and the **Content SDK** selector in the preview bar is set to **Draft**, the API delivers the draft versions of the entries instead of the published ones. In those responses, `meta.version_type` comes back with the value `editable`.

This applies both to the entry listing and to a single entry:

```bash
https://www.example.com/api/content/spaces/:space_uid/types/:type_uid/entries

https://www.example.com/api/content/spaces/:space_uid/types/:type_uid/entries/:entry_uuid
```

Only the entry endpoints switch versions. The content type schema, the categories, and the locations are not affected by the selector.

While the preview session is open, the response is no longer cacheable: the `cache-control` header goes from `public, no-cache` to `no-store, must-revalidate, private, max-age=0`, so that neither the browser nor the CDN stores a draft version. This happens even when the selector is set to **Published**.

The API goes back to delivering published content when any of these conditions is met:

- The request doesn't carry the admin panel session cookie, or there is no preview session open.
- The administrator session is impersonating a user.
- The session lost its authorization, for example because it was logged out or an administrator revoked the access.
- The account validates the browser fingerprint and the request doesn't match the browser that opened the session.

:::warning Attention
API preview depends on the session of the browser making the request, so it never exposes draft versions to an anonymous end user or to a server-side consumer. The risk is the opposite one: if you develop your consumer layer in the same browser where you have preview mode open, you will see draft versions where your production application will see published content. Check your responses in a window without the administrator session before taking them as final.
:::

### Private content

Whenever you use the Content API, you can access published content that is available to all users (not private). However, if you want to access private content, you must add a header or a GET parameter to the Content API request URL.

:::tip Tip
If you use Liquid to access content, users who log in and fit the segment criteria will automatically see the content when appropriate, and no extra action is required from the Front End developer.
:::

The Content API can receive the delivery token parameter in two ways:

- As a header: `Delivery-Token`
- As a GET parameter: `delivery_token`

The content access token is a public token in [JWT](https://tools.ietf.org/html/rfc7519) format shared by all users who belong to the same segment group. It can be obtained by making a GET request to the URL `test.modyo.com/api/customers/realms/{realm_uid}/delivery_token`.

The content delivery token contains the following attributes:

- **iss**: URL with which Modyo identifies the issuer of the token. It is informative and carries a `/profile/` segment that does not match any real route, so do not use it as the address to call.
- **aud**: Base URL of the Content API.
- **sub**: UUID of the account, not the name of the space. The Content API compares this value with the UUID of the account serving the request and only enables private content when they match.
- **exp**: Expiration moment of the token, calculated with the lifetime configured in the account. Check [Content Delivery Token (JWT - JSON Web Token)](/en/platform/core/security.html#content-delivery-token-jwt-json-web-token) to change it.
- **access_type**: Always `delivery`.
- **segments**: Array with the UUIDs of the segments the user belongs to.

For example:

```javascript
{
  "iss": "https://my_account.modyo.com/api/customers/realms/my_realm/profile/delivery_token",
  "aud": "https://my_account.modyo.com/api/content",
  "sub": "0f3d1b6c-5a2e-4c81-9b7f-2d84a6e05c19",
  "exp": 1516242622,
  "access_type": "delivery",
  "segments": ["7a41c9d2-3e58-4b60-8f13-95c2d7ae61b0", "c86b0f45-19da-4e27-b3a8-6f04d5217e9c"]
}
```

:::warning Attention
To request the token you need the credential of a user with an active session in the realm. Without it the endpoint responds `401` with <code v-pre>{"error":{"user_session":"user not found"}}</code>, not `404`. The `404` is a different matter: it shows up when the `realm_uid` in the URL does not match any active realm of the account. The interactive reference at `ACCOUNT_URL/api/customers/docs` only declares the `404` for this endpoint, so do not rely on it on this point. The credentials accepted by the Customers API are in [Authentication](/en/platform/customers/api.html#authentication).
:::

:::warning Attention
It is necessary that the content access token be obtained dynamically, as that token will change according to the segments to which the user belongs, and since segments can become highly volatile, it is not recommended to store this value.
:::

The response of the Content API query with the delivery token is the same as the response you would receive without the delivery token, but this will contain both private content (without segments) and segmented content that is restricted to the segments to which the user requesting your delivery token belongs as part of the response.
