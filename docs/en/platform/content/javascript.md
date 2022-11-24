---
search: true
---

# SDK de Javascript

The **Modyo SDK** is a library that facilitates the interaction of JavaScript-based applications with the Modyo public API.

Using the SDK, you can get, filter, and sort your created content so you can take full advantage of the Headless API's capabilities.

In addition, the Modyo SDK allows you to obtain information from the end user who is already logged in to the platform to further customize their interaction with your site.

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

## Examples

## Display Entries

To access the list of entries of a type with the uid `type_uid` and of a space with the uid `space_uid` we use:

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

## Display total number of Entries

To access the total amount of entries returned by a content filter, you can use the liquid `total_entries` filter, for example:

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

## Filter By

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

## Sort By

In the same way that you can filter by category `by_category`, tags `by_tags` and by uuid `by_uuid`, you can create a filter to order the results by meta attributes `name`, `slug`, `created_at`, `updated_at`, and `published_at` of the entries using the filter `sort_by`, in the following way:

The results of our search can also be sorted using the `sortBy()` method

```js
// JSONPath and Sorting are also supported as filters
const filters = ctype
  .Filter()
  .SortBy("meta.created_at", "desc")
  .JSONPath("$..uuid");
```

**Note**: As you can see in the example, it is possible to use expressions in our queries `JSONPath` [JSONPath - XPath for JSON](https://goessner.net/articles/JsonPath/)

## Get Private content

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

