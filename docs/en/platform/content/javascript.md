---
search: true
---

# Javascript SDK

The **Modyo SDK** is a library that facilitates the interaction of JavaScript-based applications with the Modyo public API.

Using the SDK you can fetch, filter, and sort your created content to take full advantage of the capabilities of the Headless API.

In addition, the Modyo SDK allows you to obtain information from the end user who is already logged into the platform to further customize the user's interaction with your site.

### Use

To be able to use it in your project you first have to create a client. For that we create an instance of a new client with the web address of the Modyo account as argument together with the language to request.

```js
import { Client } from "@modyo/sdk";

const modyoAccount = new Client("https://my-account.modyo.com","en");
```

:::tip Tip
When having a client instance, the second parameter _locale_ is optional, so that entries are requested only in the requested language, otherwise the default language of the Space will be used.
:::

## Display Entries

To access the list of entries of a type with the uid `type_uid` and of a space with the uid `space_uid` we use:

```js
import { Client } from "@modyo/sdk";

const modyoAccount = new Client("https://my-account.modyo.com","en");

const typePost = modyoAccount.getContentType("space_uid", "type_uid");

typePost.getSchema().then(sch => console.log("Content Type JSON Schema:", sch));
```

:::tip Tip
`typePost` will return an object with various information about the type, including the schema of that type.

If we want to see that schema in detail, we can use the `getSchema()` method.

That will print something like this:

`Content Type JSON Schema: {$schema: "http://json-schema.org/draft-07/schema#", definitions: {...}, type: "object", required: Array(2), properties: {...}}`
:::

## Display total number of Entries

To access the total amount of entries returned by a content filter, you can use the liquid `total_entries` filter, for example:

```js
import { Client } from "@modyo/sdk";
const modyoAccount = new Client("https://my-account.modyo.com","en");
const typePost = modyoAccount.getContentType("space_uid", "type_uid");

typePost.getSchema().then(sch => console.log("Content Type JSON Schema:", sch));


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

## Filter by

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

If you want to obtain a list of the attributes you can consult:

```js
typePost
  .getSchema()
  .then(() => console.log("List of attributes:", typePost.getAttrs()));
```

To create a filter, we use the `Filter()` method:

```js
const filters = typePost
  .Filter()
  .Before("meta.created_at", "2020-05-01")
  .In("meta.tags", ["tag1", "tag2"])
  .Pagination(15,1);

const filteredEntries = typePost.getEntries(filters);

filteredEntries.then(res => console.log("Filtered entries response: ", res));
```

## Sort by

In the same way that you can filter by category `by_category`, tags `by_tags` and by uuid `by_uuid`, you can create a filter to order the results by meta attributes `name`, `slug`, `created_at`, `updated_at`, and `published_at` of the entries using the filter `sort_by`, in the following way:

The results of our search can also be sorted with the `SortBy()` method:

```js

const filters = ctype
  .filter()
  .SortBy("meta.created_at", "desc")
  .JSONPath("$..uuid");
```


:::tip Tip
JSONPath and SortBy can also be used as filters.

As you can see in the example, it is possible to use in our queries `JSONPath` expressions [JSONPath - XPath for JSON](https://goessner.net/articles/JsonPath/)
:::

## Get Private Content

To get private content, it is enough that the user has an active session, passing a third argument `false` to the method `getContentType()` (this indicates that it is not public)

```js
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

