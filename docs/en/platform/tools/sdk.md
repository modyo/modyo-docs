---
search: true
---

# Modyo SDK

The **Modyo SDK** is a library that facilitates the interaction of JavaScript-based applications with Modyo's public API.

Through the SDK, you can obtain, filter and sort your created content to fully leverage the capabilities of the Headless API.

Likewise, the Modyo SDK allows you to obtain information from the end user who has already logged into the platform to further personalize their interaction with your site.

### Usage

To be able to use it in your project, a client must first be created. For this we create an instance of a new client with the web address of the Modyo account as an argument along with the language to request.

```js
import { Client } from "@modyo/sdk";

const modyoAccount = new Client("https://my-account.modyo.com","en");
```

:::tip Tip
When having a client instance, the second _locale_ parameter is optional, so that entries are requested only in the requested language, otherwise, the Space's default language will be used.
:::

## Deploy Entries

To access the list of entries of a type with uid `type_uid` from a space with uid `space_uid` use:

```js
import { Client } from "@modyo/sdk";

const modyoAccount = new Client("https://my-account.modyo.com","en");

const typePost = modyoAccount.getContentType("space_uid", "type_uid");

typePost.getSchema().then(sch => console.log("Content Type JSON Schema:", sch));
```

:::tip Tip
`typePost` will return an object with various information about the type, including the schema of that type

If we want to see that schema in detail, we can use the `getSchema()` method

This will print something like this:

`Content Type JSON Schema: {$schema: "http://json-schema.org/draft-07/schema#", definitions: {…}, type: "object", required: Array(2), properties: {…}}`
:::

## Deploy total number of Entries

To access the total number of entries returned by a content filter, you can use the liquid filter `total_entries`, for example:

```js
import { Client } from "@modyo/sdk";
const modyoAccount = new Client("https://my-account.modyo.com","en");
const typePost = modyoAccount.getContentType("space_uid", "type_uid");

typePost.getSchema().then(sch => console.log("Content Type JSON Schema:", sch));


const entries = typePost.getEntries();

```

The object returned by getEntries() includes a meta field that will help you navigate it. The shape of the returned object will be something like this:

```json
"meta": {
    "total_entries": 4,
    "per_page": 10,
    "current_page": 1,
    "total_pages": 1
  },
```

## Filter by

The `getEntries()` method we used above can also receive a filters object to query the entries.
The supported filters: `Before`, `After`, `LessThan`, `GreaterThan`, `In`, `NotIn`, `Has`, `Geohash`, being able to query the `meta` fields of each entry (such as creation date or assigned tags)

**Supported filters**:

- **Before, After, LessThan, GreaterThan**: receive as parameter the name of the field to compare and the value with which it will be compared.
- **In, NotIn, Has**: receive as parameter the name of the field to compare and an array of values with which it will be compared. In is equivalent to an `OR` in SQL, Has is equivalent to an `AND`.
- **SortBy**: receives as parameters the field to sort by and order (`asc` or `desc`).
- **JSONPath**: receives the JSONPath [ref](https://goessner.net/articles/JsonPath/) that models a response structure.
- **Pagination**: receives as parameters the page number and the total number of entries per page.
- **Geohash**: receives as parameters a location field and a geohash [ref](https://www.movable-type.co.uk/scripts/geohash.html) to select content within a location.

:::warning Attention
If you intend to filter by date, it's important that the filter value uses the ISO-8601 standard.
:::

If you want to get a list of the attributes you can query:

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

In the same way that you can filter by category `by_category`, tags `by_tags` and by uuid `by_uuid`, you can create a filter to sort the results by the "meta" attributes `name`, `slug`, `created_at`, `updated_at`, `published_at` of the entries using the `sort_by` filters, as follows:

The results of our search can also be sorted with the `SortBy()` method:

```js

const filters = ctype
  .Filter()
  .SortBy("meta.created_at", "desc")
  .JSONPath("$..uuid");
```


:::tip Tip
JSONPath and SortBy can also be used as filters

As you can see in the example, it's possible to use `JSONPath` expressions in our queries [JSONPath - XPath for JSON](https://goessner.net/articles/JsonPath/)
:::

## Get private Content

To get private content, it's enough for the user to be logged in, passing to the `getContentType()` method a third argument as `false` (which indicates it's not public)

```js
const privateTypePost = modyoAccount.getContentType("blog", "post", false);
```

:::warning Attention
It's important to treat this potentially sensitive information with care. To get private content, cookies and an end user who has logged into Modyo are required.
:::

### End User Information

:::warning Attention
It's important that you treat this sensitive information with care. As with private Content, this information is only obtainable if working from a browser that supports cookies, and the end user has logged into the platform.

To get end user information, you need to call the function: `client.getUserInfo()` this function will return an object with the basic information
of that user.
:::