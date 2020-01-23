---
search: true
sidebarDepth: 1
---

# API & SDKs

Modyo Content has a complete API to access the spaces that contain the content entries quickly and efficiently. To access it there are two types of Software Development Kits (SDKs), one for internal use that connects [Modyo Content](/guides/content/) with [Modyo Channels](/guides/channels/) from the side of the server through Liquid and another external one that uses the public API in REST for consumption from Javascript.

::: tip SDKs for other languages
At the moment there is only, officially, an SDK for Javascript. In the future, it is planned to incorporate versions to facilitate work with other languages.
:::

## Liquid SDK

The Liquid SDK allows you to consume content natively from [Modyo Channels](/guides/channels/) in any of the sections that use the [Liquid] markup language (/guides/channels/liquid-markup.html), like [Widgets](/guides/channels/widgets.html) and [Templates](/guides/channels/templates.html) of the site.

### Access entries in a space

To access the list of entries of a type of uid `type_uid` of a space of uid` space_uid` we use:

``` liquid
{% assign entries=spaces ['space_uid']. types ['type_uid']. entries%}
{% for entry in entries%}
  entry: {{entry.uuid}} - {{entry.title}} <br/>
{% endfor%}
```

### Filter entries

If we want to filter the entries, we can do so by the following attributes: by_uuid, by_category, by_type, by_tag, by_lang. Everyone receives an array of values, so it is possible to filter by one value or several, and the way to use it is as follows:

``` liquid
{% assign entries=spaces ['space_uid']. types ['type_uid']. entries
  | by_category='news'
  | by_tag='tag1, tag2, tag3'%}
{% for entry in entries%}
  entry: {{entry.uuid}} - {{entry.title}} <br/>
{% endfor%}
```

The selection of entries always returns an arrangement, so it is necessary to iterate over the result or access the first element, in case of filtering by a single uuid:

``` liquid
{% assign entries=spaces ['space_uid']. types ['type_uid']. entries | by_uuid='entry_uuid'%}
{% assign entry=entries.first%}
```

You can paginate the entries using the `paginated` filter and display the pagination links with the `pagination_links` filter, for example:

``` liquid
{% assign entries=spaces ['space_uid']. types ['type_uid']. entries | paginated: 10%}
<ul>
  {% for entry in entries%}
  <li> {{entry.slug}} </li>
  {% endfor%}
</ul>
{{entries | pagination_links}}
```

In the previous case, the list of entries with 10 elements per page will be paginated and at the end of the list the links of the page will appear. You can navigate through each page using the GET parameter `page` in the URL, for example` my-page.com/landing? Page=2`.

::: warning Warning
Note that if you have more than one widget that uses content pagination, when using the _GET_ `per_page` and` page` parameters in the URL, all widgets with page paging will be affected by those parameters.
:::

::: warning Warning
To use pagination in a custom widget, you must change the filter associated with pagination to <span v-pre> `{{entries | pagination_links_remote}} `</span>. This is necessary since custom widgets are loaded asynchronously. Along with the previous change, you should ensure that _JQuery_ is available on your site and remember that when you use the pagination links, only the widget HTML will be changed and the widget's _JavaScript_ will not be executed again.
:::

### Entries with location

For entries with Location fields you can easily generate maps with the `static_map` and` dynamic_map` filters, these use Google Maps Static API and Google Maps Javascript API respectively. The following example generates maps for the `Locations` field with a size of 600x300 px, a level 5 zoom, with a map type 'roadmap' and with a custom icon.

```
{{entry ['Locations'] | static_map: '600x300', 5, 'roadmap', 'https://goo.gl/5y3S82'}}
```

The `dynamic_map` filter accepts an additional attribute to control the visibility of the zoom, drag and full screen controls.

```
{{entry ['Locations'] | dynamic_map: '600x300', 5, 'roadmap', 'https://goo.gl/5y3S82',true}}
```

## Javascript SDK

The Javascript SDK allows access to spaces and content entries in a simple way from any environment that supports Javascript (dynamic and static Web sites, SPA pages, hybrid mobile applications, etc).

### Installation

::: tip Use from Modyo Channels
In the case of Modyo Channels, the base template with which the sites are created already includes a recent version of this SDK installed, so it can be used directly.
:::

The installation of the Javascript SDK can be done with `npm` or` yarn`.

``` shell
# For npm:
npm install @ modyo/sdk

# For yarn:
yarn add @ modyo/sdk
```

### Use: making a `request`

Once the SDK is installed in your project you can start using it to request content from Modyo.

The following example shows the most basic way you can get content using the SDK:

``` javascript
import {Client} from "@ modyo/sdk";

//We create a generic function that we can instantiate every time we want to make a request
export default function getClient (spaceUID) {
  //The `Client` class of the SDK requires two arguments:
  //The first argument is the `url` of the API,
  //the second argument is the `UID` of the space you want to access.
  //In this example, the `UID` of the space will be passed as an argument of this generic function
  const client=new Client ("https://dynamicbank.modyo.build/api", {
    spaceUID
  });
  return client;
}

//Once the `Client` class is instantiated, we have different methods at our disposal, such as
//`getEntries ()`
getClient ("static-data")//we access the space
  .getEntries ("menu-item")//We get all the entries of the `menu-item` type
  .then (entries => console.log (entries))//We print in a log the entries received
  .catch (err => console.log (err));//or we return an error if something fails
```

In addition to the `getEntries (typeUID)` method that we use in the example, if we know the `id` of our entry, we can immediately request it using the` getEntry (typeUID, entryUID) `method:

``` js
getClient ("static-data")
  .getEntry ("menu-item", "a1eef093-1e2f-4c6f-a4c3-73a869d6e7c8")
  .then (entry => console.log (entry))
  .catch (err => console.log (err));
```

## API Reference

### API Route Structure

To perform any action, it is necessary to know the route structure of the contents in the API, which is done as follows:

```
https://www.example.com/api/content/spaces/:space_uid/types/:type_uid/schema

https://www.example.com/api/content/spaces/:space_uid/types/:type_uid/entries?[filters]

https://www.example.com/api/content/spaces/:space_uid/types/:type_uid/entries/:entry_uuid
```

Here, `space_uid` and` type_uid` correspond to the slugified name of the Space and the name of the Content Type, respectively.

### JSON Entries structure

For any JSON element, in Modyo the structure is made in this way:

JSON Entries:

``` javascript
{
  "goal": {
    "total_entries": 2,
    "per_page": 15,
    "current_page": 1,
    "total_pages": 1
  },
  "entries": [
    {
      "goal": {
        "uuid": "9b0a24a6-d84f-4851-8750-a86244947510",
        "space": "myspace",
        "name": "Lorem Ipsum pain",
        "type_name": "Post",
        "category": null,
        "updated_at": "2019-03-18T14: 06: 59.000-03: 00",
        "created_at": "2019-03-18T14: 06: 59.000-03: 00",
        "tags": [],
        "locale": "en",
        "available_locales": [
          "in"
        ]
      },
      "fields": {
        "excerpt": "Lorem Ipsum pain",
        "body": "Lorem ipsum pain sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, que nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
      }
    },
    {
      "goal": {
        "uuid": "1c9b24a6-d84f-4851-8750-a86244963589",
        "space": "myspace",
        "name": "Lorem Ipsum pain",
        "type_name": "Post",
        "category": null,
        "updated_at": "2019-03-18T14: 06: 59.000-03: 00",
        "created_at": "2019-03-18T14: 06: 59.000-03: 00",
        "tags": [],
        "locale": "en",
        "available_locales": [
          "in"
        ]
      },
      "fields": {
        "excerpt": "Lorem Ipsum pain",
        "body": "Lorem ipsum pain sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, que nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
      }
    }
  ]
```

Entries JSON Schema:

``` javascript
{
  "definitions": {
    "entry": {
      "type": "object",
      "properties": {
        "goal": {
          "type": "object",
          "required": [
            "uuid"
            "space",
            "yam",
            "type_name",
            "category",
            "updated_at",
            "created_at",
            "tags"
            "locale"
            "available_locales"
          ],
          "properties": {
            "uuid": {
              "type": "string",
              "default": "",
              "examples": [
                "9b0a24a6-d84f-4851-8750-a86244947510"
              ],
              "pattern": "^ (. *) $"
            },
            "space": {
              "type": "string",
              "default": "",
              "examples": [
                "myspace"
              ],
              "pattern": "^ (. *) $"
            },
            "name": {
              "type": "string",
              "default": "",
              "examples": [
                "Lorem Ipsum pain"
              ],
              "pattern": "^ (. *) $"
            },
            "type_name": {
              "type": "string",
              "default": "",
              "examples": [
                "Post"
              ],
              "pattern": "^ (. *) $"
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
                "2019-03-18T14: 06: 59.000-03: 00"
              ],
              "pattern": "^ (. *) $"
            },
            "tags": {
              "type": "array"
            },
            "locale": {
              "type": "string",
              "default": "",
              "examples": [
                "in"
              ],
              "pattern": "^ (. *) $"
            },
            "available_locales": {
              "type": "array",
              "items": {
                "type": "string",
                "default": "",
                "examples": [
                  "in"
                ],
                "pattern": "^ (. *) $"
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
  "$ schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": [
    "goal",
    "entries"
  ],
  "properties": {
    "goal": {
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
        "$ ref": "#/definitions/entry"
      }
    }
  }
}
```

JSON Entry:

``` javascript
{
   "goal":{
      "uuid": "9b0a24a6-d84f-4851-8750-a86244947510",
      "space": "myspace",
      "name": "Lorem Ipsum pain",
      "type_name": "Post",
      "category": null,
      "updated_at": "2019-03-18T14: 06: 59.000-03: 00",
      "created_at": "2019-03-18T14: 06: 59.000-03: 00",
      "tags": [

      ],
      "locale": "en",
      "available_locales": [
         "in"
      ]
   },
   "fields": {
      "excerpt": "Lorem Ipsum pain",
      "body": "Lorem ipsum pain sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, que nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
   }
```

Entry JSON Schema:

``` javascript
{
  "definitions": {},
  "$ schema": "http://json-schema.org/draft-07/schema#",
  "$ id": "http://example.com/root.json",
  "type": "object",
  "required": [
    "goal",
    "fields"
  ],
  "properties": {
    "goal": {
      "$ id": "#/properties/meta",
      "type": "object",
      "required": [
        "uuid"
        "space",
        "yam",
        "type_name",
        "category",
        "updated_at",
        "created_at",
        "tags"
        "locale"
        "available_locales"
      ],
      "properties": {
        "uuid": {
          "$ id": "#/properties/meta/properties/uuid",
          "type": "string",
          "default": "",
          "examples": [
            "9b0a24a6-d84f-4851-8750-a86244947510"
          ],
          "pattern": "^ (. *) $"
        },
        "space": {
          "$ id": "#/properties/meta/properties/space",
          "type": "string",
          "default": "",
          "examples": [
            "myspace"
          ],
          "pattern": "^ (. *) $"
        },
        "name": {
          "$ id": "#/properties/meta/properties/name",
          "type": "string",
          "default": "",
          "examples": [
            "Lorem Ipsum pain"
          ],
          "pattern": "^ (. *) $"
        },
        "type_name": {
          "$ id": "#/properties/meta/properties/type_name",
          "type": "string",
          "default": "",
          "examples": [
            "Post"
          ],
          "pattern": "^ (. *) $"
        },
        "category": {
          "$ id": "#/properties/meta/properties/category",
          "type": "null",
          "default": null,
          "examples": [
            null
          ]
        },
        "updated_at": {
          "$ id": "#/properties/meta/properties/updated_at",
          "type": "string",
          "default": "",
          "examples": [
            "2019-03-18T14: 06: 59.000-03: 00"
          ],
          "pattern": "^ (. *) $"
        },
        "tags": {
          "$ id": "#/properties/meta/properties/tags",
          "type": "array"
        },
        "locale": {
          "$ id": "#/properties/meta/properties/locale",
          "type": "string",
          "default": "",
          "examples": [
            "in"
          ],
          "pattern": "^ (. *) $"
        },
        "available_locales": {
          "$ id": "#/properties/meta/properties/available_locales",
          "type": "array",
          "items": {
            "$ id": "#/properties/meta/properties/available_locales/items",
            "type": "string",
            "default": "",
            "examples": [
              "in"
            ],
            "pattern": "^ (. *) $"
          }
        }
      }
    },
    "fields": {
      "$ id": "#/properties/fields",
      "type": "object"
    }
  }
}
```

### API Pagination

For any content resource through the API, it is necessary to make a pagination for its correct operation.

For this, an offset type pagination with the page and per_page parameters is used in the query string of the entries URL.

For example, with `page=3`,` per_page=20` is requesting that the next 20 items be returned by skipping the first 40.

Along with the answer, a paging goal is delivered, such as:

``` javascript
 "goal": {
    "total_entries": 2,
    "per_page": 15,
    "current_page": 1,
    "total_pages": 1
    }
```

#### Tickets

The entries that you can see in section correspond to all the content sent through the API. In that sense, they can be filtered according to:

- Type
- Review Status
- Category
- Tags
- Author

#### Filters

In the search for contentTypes with filters, a distinction will be made at the app level depending on the filters requested:

Metadata (ex: Tags, Category, Dates): Searches by SQL, will be searchable using parameters `meta.param_name`. This while only the Metadata is what is being consulted.

- Tags: available in two ways
  - `meta.tag=tag_name`
  - `meta.tag [in] []=tag1_name & meta.tag [in] []=tag2_name`
- Categories, which can only be consulted: `category=category_full_path` will consider daughter categories of the respondent
- Dates of creation/update/publication/unpublishment: available using ISO-8601 specification and with the possibility of searching by ranges (lt, gt):
  - `.../entries? meta.created_at=1987-11-19T13: 13: 13`
  - `.../entries? meta.updated_at [lt]=1987-11-19`
  - `.../entries? meta.published_at [gt]=1987-11-19`
- Fields: Searches through ElasticSearch, for example:
  - Locations: the search will be by queryString (match a street_name, country, admin_area_levels), ex: `fields.location_name=Chile`
  - `.../entries? fields.color=black`

###### Language filter

The Modyo API delivers entries in the default language of the Space, unless another language is explicitly requested through the query string locale parameter or the Accept-Language header.

For example, to get entries in the Spanish-Chile language (es_CL):

``` plain
Query string: GET .../posts/entries? Locale=es_CL
Header: Set Accept-Language en_CL
```

##### Operators

The main operations on fields are:

- [gt], [lt]=greater/less than, applicable in integers and dates
- [in]=allows you to include several values that enter an OR type query
- [all]=allows you to include several values, which enter an AND type query, only works in multiple fields and text.
- [nin]=allows you to include several values, which enter a NOT IN query
- [geohash]=allows searches using a lat-long geohash in base 32, for more information consult https://www.movable-type.co.uk/scripts/geohash.html.

Example:

- `../entries? meta.created_at [in] []=1987-11-19T13: 13: 13 & meta.created_at [in] []=1987-11-19T14: 14: 14` will search entries created on November 11 , both at 13:13 and 14:14

##### Returned Fields

Using the fields parameter you can choose which parameters are returned in the document:

The metadata fields are referenced as: meta.attr_name (ex meta.tag)
The fields of the entries as: field.attr_name
A JsonPath expression is used for example:

`.../entries? fields=$. entries [*]. meta.uuid` to obtain only the uuid from the meta-data of the entries.
`.../entries? fields=$ .. description` to get all the description fields in the entries.

##### Equalities/Inequalities in arrangements

Fields that search in multiple elements (checkboxes, multiple) can use the following syntax:

- ALL: equivalent to a sql AND
  `.../entries? fields.color [all] []=red & fields.color [has] []=black`
- IN: equivalent to an sql OR
  `.../entries? fields.color [in] []=red & fields.color [in] []=blue`
- NIN: equivalent to a slq NOT IN
  `.../entries? fields.color [nin] []=red & fields.color [nin] []=blue`

##### Order

The order of the results must be specified with the parameters `sort_by` and` order`:

- `sort_by`: indicating the name of the attribute (ex: meta.tag, or fields.name)
- `order`: ['asc', 'desc'](optional, asc by default)

#### jQuery

The jQuery JavaScript library makes it easy for us to implement them within Modyo, around the APIs.

A powerful feature of JQuery is its easy to understand AJAX functionality. It allows you to easily bring content data within your site, and also from other sites and services.

In this AJAX request, we are specifying an exit point (using the Liquid <span v-pre> {{site.url}} </span> object) and including options to specify what is a "GET" of type 'json' . Finally we link the "data.promotions" to our "vm.promos" to use it in the application.

#### API Fetch with native JavaScript

The Fetch API provides a simple JavaScript interface, to access and manipulate part of the HTTP protocol, such as requests and responses. The global fetch () method is an easy and logical way to bring resources asynchronously across a network.

A basic fetch request is very simple to make. Look at the following code:
We are bringing a JSON file from within our site using the Liquid <span v-pre> {{site.url}} </span> object. The simplest use of fetch () requires an argument - the path of the resource you want to bring - and returns a "promise" that contains the response (Response object).

This is an HTTP response, not the real JSON. To extract the JSON body from the answer, we use the json () method at the end of it, and then link the data to our promotions (this fetch () is for this application).

For more detailed information, we recommend you visit the MDN webdocs.

#### Axios

Axios is a very popular JavaScript library that developers use to make HTTP requests that work in all modern browsers, including IE8 onwards.

It is based on the Promise object and allows you to asynchronously write code to make XHR requests easily.

Using Axios has some advantages over the native Fetch API:

- Supports older browsers (Fetch needs a polyfill)
- You have a way to cancel an application
- You have a way to set a timeout for an answer
- Comes with CSRF protection included
- Supports load progress
- Performs JSON data transformation automatically

In order to use Axios in Modyo, you need to add the axios.js base code as a custom snippet and include it somewhere where your widgets can access it, such as your theme in JavaScript (located in Templates, under the Files tab).

The Modyo API provides a RESTful interface with responses formatted in a lightweight JSON that can be used in many features of your account.

## Private content

Whenever you use the content API, you can access the published content that is available to all users (not private), however, if you want to access private content, you must add a header or a GET parameter to the request URL of the content API.

::: tip Tip
If you use Liquid to access the content, users who log in and meet the targets will automatically see the content when appropriate and no extra action is required by the Front End developer.
:::

The content API can receive the delivery token parameter in two ways:

- As header: `Delivery-Token`
- As a GET parameter: `delivery_token`

The content access token is a public token in [JWT] format (https://tools.ietf.org/html/rfc7519) shared by all users belonging to the same group of targets. It can be obtained by making a GET request to the URL `account.url/api/profile/delivery_token`.

The content delivery token contains the following attributes:

- **iss**: base URL of the profile API
- **aud**: Content URL base URL
- **sub**: Name of space
- **exp**: Token expiration time
- **access_type**: delivery,
- **targets**: Array of targets


For example:

``` javascript
{
  "iss": "http://my-account.modyo.me/api/profile",
  "aud": "http://my-account.modyo.me/api/content",
  "sub": "account_uuid",
  "exp": 1516242622,
  "access_type": "delivery",
  "targets": ["target1", "target2"]
}
```

::: warning Warning
To be able to access the URL to obtain the token, you must make sure you have a session initiated with a user in the account or at least in a site of the same, otherwise you will receive an error `404 - Not found`.
:::

::: warning Warning
It is necessary that obtaining the access token to the content is done dynamically, since that token will change according to the targets to which the user belongs, and since the targets can become highly volatile, it is not recommended to store this value.
:::

The response of the query to the content API with the delivery token, is equal to the response you would receive without the delivery token, but this will contain as part of the response, both the private content (without targets) and the targeted content that is restricted to the targets to which the user who requested his delivery token belongs.
