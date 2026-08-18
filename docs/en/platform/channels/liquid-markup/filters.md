---
search: true
---

# Filters

A filter is a Ruby method that takes one or more parameters and returns a value. Parameters are passed to filters by position: the first parameter is the expression that precedes the pipe character, and additional parameters can be passed using the `name: arg1, arg2` syntax.

Output markup can take filters, which modify the result of the output statement. You can invoke filters by following the output statement's main expression with:

- A pipe character (`|`)
- The name of the filter
- Optionally, a colon (`:`) and a comma-separated list of additional parameters to the filter. Each additional parameter must be a valid expression, and each filter predefines the parameters it accepts and the order in which they must be passed.

Filters can also be chained together by adding additional filter statements (starting with another pipe character). The output of the previous filter will be the input for the next one.

```liquid
Hello {{ 'tobi' | upcase }}
Hello tobi has {{ 'tobi' | size }} letters!
Hello {{ '*tobi*' | textilize | upcase }}
Hello {{ 'now' | date: "%Y %h" }}
```

## Basics

### Append

Adds a string *e.g.*
<span v-pre>`{{ 'foo' | append:'bar' }} #=> 'foobar'`</span>

### Base64 decode

Decodes a Base64-encoded string *e.g.*
<span v-pre>`{{ 'SGVsbG8gd29ybGQ=' | base64_decode }} #=> 'Hello world'`</span>

### Base64 encode

Encodes a string to Base64 *e.g.*
<span v-pre>`{{ 'Hello world' | base64_encode }} #=> 'SGVsbG8gd29ybGQ='`</span>

### Capitalize

Capitalizes the first letter of each word in the input string.

### Ceiling

Rounds up a decimal number to the next integer, *e.g.*
<span v-pre>`{{ 4.6 | ceil }} #=> 5`</span>

### Date

Formats a date ([syntax reference](https://shopify.dev/api/liquid/filters#date))

### Default

Returns the given variable unless it is null or empty string, then it returns the given value, *e.g.*
<span v-pre>`{{ undefined_variable | default: "Default value" }} #=> "Default value"`</span>

### Divided by

Integer division *e.g.*
<span v-pre>`{{ 10 | divided_by:3 }} #=> 3`</span>

### Downcase

Converts an input string to lowercase.

### Escape

HTML escapes a string.

### Escape once

Returns an escaped version of html without affecting existing escape entities.

### First

Gets the first element of the passed array.

### Floor

Rounds a decimal number down to the nearest integer, *e.g.*
<span v-pre>`{{ 4.6 | floor }} #=> 4`</span>

### Format date

Formats a date with the site's localization, uses the same syntax as `date`.

### Join

Joins array elements with a certain character between them.

### Last

Gets the last element of the passed array.

### Lstrip

Removes all whitespace from the beginning of a string.

### Map

Maps/collects an array into a given property.

### Minus

Subtraction *e.g.*
<span v-pre>`{{ 4 | minus:2 }} #=> 2`</span>

### Modulo

Modulo *e.g.*
<span v-pre>`{{ 3 | modulo:2 }} #=> 1`</span>

### Newline to br
Replaces each newline (\n) with HTML break tag.

### Plus
Performs addition *e.g.*
<span v-pre>`{{ '1' | plus:'1' }} #=> 2`</span>, <span v-pre>`{{ 1 | plus:1 }} #=> 2`</span>

### Prepend
Prepends a string *e.g.*
<span v-pre>`{{ 'bar' | prepend:'foo' }} #=> 'foobar'`</span>

### Remove
Removes all occurrences *e.g.* <span v-pre>`{{ 'foobarfoobar' | remove:'foo' }} #=> 'barbar'`</span>

### Remove first
Removes the first occurrence *e.g.* <span v-pre>`{{ 'barbar' | remove_first:'bar' }} #=> 'bar'`</span>

### Replace
Replaces all occurrences *e.g.* <span v-pre>`{{ 'foofoo' | replace:'foo','bar' }} #=> 'barbar'`</span>

### Replace first
Replaces the first occurrence *e.g.* <span v-pre>`{{ 'barbar' | replace_first:'bar','foo' }} #=> 'foobar'`</span>

### Reverse
Reverses the given array.

### Round
Rounds to the nearest integer or to the specified number of decimals *e.g.* <span v-pre>`{{ 4.5612 | round: 2 }} #=> 4.56`</span>

### Rstrip
Removes all whitespace from the end of a string

### Script tag
Generates the HTML `<script>` tag for JavaScript, taking as parameters the URL and attributes of the form `attr: 'value'`, *e.g.* <span v-pre>`{{ 'my-js-url' | script_tag: async: 'async', defer: 'defer' }}`</span> => `<script src='my-js-url' type='text/javascript' async='async' defer='defer'></script>`

### Size
Returns the size of an array or string

### Slice
Splits a string. Takes an offset and length, *e.g.* <span v-pre>`{{ "hello" | slice: -3, 3 }} #=> llo`</span>

### Sort
Sorts array elements

### Split
Splits a string on a matching pattern *e.g.* <span v-pre>`{{ "a~b" | split:"~" }} #=> ['a','b']`</span>

### Times
Multiplies *e.g.* <span v-pre>`{{ 5 | times:4 }} #=> 20`</span>

### Truncate
Restricts a string to x characters. Also accepts a second parameter that will be appended to the string *e.g.* <span v-pre>`{{ 'foobarfoobar' | truncate: 5, '.' }} #=> 'foob.'`</span>

### Truncatewords
Restricts a string to x words

### Uniq
Removes duplicate elements from an array, optionally using a given property to check for uniqueness.

### Upcase
Converts an input string to uppercase

### URL encode
URL-encodes a string

## Commerce

These are the liquid filters that alter values related to Commerce.

### Format currency

Adds currency format to a value. *e.g.*
<span v-pre>`{{ 4 | format_currency }} => $4`</span>

<span v-pre>`{{ 1890.5123 | format_currency: unit: '¥', separator: ',', delimiter: '.', precision: 3 }} = ¥1.890,512`</span>

:::warning Important
This filter determines the currency format and takes precedence over any other currency configuration.

If you don't specify currency parameters with the currency filter, Modyo uses the realm's [payment](/en/platform/customers/settings.html#payment-configuration) configuration.

If the site doesn't have an associated realm and you don't specify parameters, the predefined format of the site's language will be applied.
:::

**Parameters**:

- unit - currency symbol.
- separator - decimal separator.
- delimiter - thousands separator.
- precision - number of decimal digits.


## Common

These Liquid filters are available in any template and don't depend on a module.

### Handle

Turns a text into a URL-friendly identifier, *e.g.*
<span v-pre>`{{ ' A s.?%$!' | handle }} #=> 'a-s'`</span>

**Parameters**

- `string` (String) — text to convert (object before the pipe).
- `separator` (String) (default: '-') — character that replaces whitespace and special characters.
- `preserve_case` (Boolean) (default: false) — with `true` it keeps the original text's casing.

The rules it applies are:

- It lowercases everything, unless `preserve_case` is `true`.
- It replaces whitespace and special characters with the separator.
- It collapses a sequence of consecutive whitespace or special characters into a single separator.
- It removes the separators at the beginning and at the end.
- With an empty text it returns an empty text.

*e.g.*

<span v-pre>`{{ 'Hello   World!!!' | handle }} #=> 'hello-world'`</span>

<span v-pre>`{{ '---Hello---World---' | handle }} #=> 'hello-world'`</span>

<span v-pre>`{{ 'CamelCase Words' | handle: '-', true }} #=> 'CamelCase-Words'`</span>

<span v-pre>`{{ ' A s.?%$!' | handle: '.', true }} #=> 'A.s'`</span>

### Handleize

Alias of `handle`, with the same signature and the same result (e.g. <span v-pre>`{{ ' A s.?%$!' | handleize }} #=> 'a-s'`</span>). It exists for templates coming from Shopify; in new templates use `handle`.

## Content

These are the liquid filters that alter values related to the Content module in Modyo Platform.

### Asset lookup by UUID

The `asset_image`, `asset_link`, `asset_url_by_uuid` and `asset_video` filters look the file up by its UUID within the account, not within the site.

:::warning Attention
If the UUID doesn't match any file in the account, none of the four fails or returns empty: they print the message `Liquid error: Asset with uuid 'the-requested-uuid' does not exist`, which ends up published on the page. Check the UUIDs whenever you move templates or content across accounts.
:::

### Asset image

Returns the tags of an image using its uuid from the File Manager. With CDN image processing active, you can use these additional parameters: width, height, blur, quality, format, fit, widths, sizes and style. *e.g.*
<span v-pre>`{{ uuid | asset_image: width: 40, format: 'auto', fit: 'cover' }}`</span>

**Parameters**:
- uuid (String) — asset uuid
- width (Integer) — width in pixels
- height (Integer) — height in pixels
- quality (Integer) — quality percentage
- blur (Integer) — blur level
- fit (String) — how the image fits its box
- format (String) — output format
- widths (String) — comma-separated list of widths; emits a `srcset` attribute with an `Nw` descriptor for each width
- sizes (String) — emitted as is, as the `sizes` attribute
- style (String) — emitted as is, as the `style` attribute

The image's `alt` comes from the file's **Alt text**, edited in [Media](/en/platform/content/asset-manager.html#edit-a-file).

The filter has three possible outputs:

- **Without options, or with CDN image processing disabled**: an `<img>` with the file's original URL. All the options are ignored.
- **With options and processing enabled**: an `<img>` with the transformed URL.
- **With `widths`**: on top of the transformed URL in `src`, a `srcset` with one variant per width in the list, plus the `sizes` and `style` attributes if you passed them.

*e.g.* <span v-pre>`{{ uuid | asset_image: width: 800, quality: 80, widths: '300, 600, 900', sizes: '(min-width: 400px) 298px, 78.75vw' }}`</span>

:::warning Attention
`sizes` and `style` are only emitted when you also pass `widths`: without it, the filter returns an `<img>` with `src` and `alt` and nothing else. And only `width`, `quality`, `blur` and `height` are propagated to each `srcset` variant, not `fit` or `format`, so if you need the same crop or the same format at every resolution, build the `srcset` by hand with several calls to the filter.
:::

:::tip Tip
CDN image processing is an account setting. While it isn't enabled, all nine options are ignored without an error and the page publishes the image at its original size.
:::

### Asset link

Emits an HTML anchor tag pointing to the File Manager file identified by its UUID. The argument is the visible link text and, if you omit it, the asset's file name is used instead. *e.g.*
<span v-pre>`{{ uuid | asset_link: 'Download the guide' }}`</span> => `<a href='https://mydomain.com/uploads/guide.pdf'>Download the guide</a>`

**Parameters**:
- uuid (String) — asset uuid
- label (String) (default: the asset's file name) — visible link text

:::tip Tip
If all you need is the file's address, to build your own markup, use `asset_url_by_uuid`.
:::

### Asset URL by UUID

Returns the URL of an image using its uuid from the File Manager. *e.g.*
<span v-pre>`{{ uuid | asset_url_by_uuid }}`</span>

### Asset video

Returns the tags of a video using its uuid from the File Manager. *e.g.*
<span v-pre>`{{ uuid | asset_video: 350, 300 }}`</span>

**Parameters**:
- uuid (String) — asset uuid
- width (Integer) (default: 300) — width
- height (Integer) (default: 200) — height

### By category

Returns a list of Entries that belong to the selected Category. *e.g.*
<span v-pre>`{% assign filtered_entries = entries | by_category: 'category2,category1,category3' %}`</span>

**Parameters**:
- entries (ArrayEntry) — array with entries
- list (String) (default: '') — String with comma-separated categories.

### By lang

Returns a list of Entries in the given language. The filter is called `by_lang`: `locale` is the name of the parameter, not the name of the filter. *e.g.*
<span v-pre>`{% assign entries = widget.entries | by_lang: 'es' %} => entries`</span>

**Parameters**:
- entries (ArrayEntry) — array with entries
- locale (String) (default: '') — a single locale code

`by_lang` replaces any language condition the collection already had, it doesn't add to it: the last `by_lang` in the chain wins.

:::warning Attention
It doesn't take a comma-separated list. A value such as `'es,en,pt'` is compared as-is against each entry's language, so the result is an empty collection instead of the union of the three languages. If you need several languages, resolve one collection per language and iterate them separately.

Applied to anything that isn't a collection of entries, the filter aborts and the published HTML keeps the comment `<!-- Liquid Error -->` in place of the block.
:::

### By slug

Returns a list of Entries that belong to a selected slug. *e.g.*
<span v-pre>`{% assign filtered_entries = entries | by_slug: 'slug2,slug1,slug' %}`</span>

**Parameters**:
- entries (ArrayEntry) — array with entries
- slug (String) (default: '') — Comma-separated slugs.

### By tag

Returns a list of Entries that belong to a selected tag. *e.g.*
<span v-pre>`{% assign entries = widget.entries | by_tag: 'tag2,tag1,tag3' %} => entries`</span>

**Parameters**:
- entries (ArrayEntry) — array with entries
- list (String) (default: '') — String with comma-separated tags.

### By type

Returns a list of Entries that belong to a selected Content Type. *e.g.*
<span v-pre>`{% assign filtered_entries = entries | by_type: 'type2,type1,type3' %}`</span>

**Parameters**:
- entries (ArrayEntry) — array with entries
- list (String) (default: '') — String with comma-separated content types.

### By UUID

Filters an array of entries by one or more UUIDs.

**Parameters**:
- entries (ArrayEntry) — collection (object before the pipe)
- uuid_list (String) — comma-separated list of UUIDs

Defaults: If `uuid_list` is blank returns the original collection.

*e.g.* <span v-pre>`{% assign filtered = entries | by_uuid: 'uuid2,uuid1,uuid3' %}`</span>

### Composite Entry Filter (`by`)

Applies multiple entry filters in one call. Supported option keys (all optional):
- types: comma-separated type slugs (applies `by_type`)
- categories: comma-separated category slugs (applies `by_category`)
- tags: comma-separated tags (applies `by_tag`)
- slugs: comma-separated entry slugs (applies `by_slug`)
- uuids: comma-separated UUIDs (applies `by_uuid`)
- locale: a single locale code (applies `by_lang`; a comma-separated list is not supported)
- from_published_date: date string (>= `published_at`)
- to_published_date: date string (<= `published_at`)
- sort_by: field name (default: `created_at`). Accepts `name`, `slug`, `created_at`, `updated_at` and `published_at`, or a field with its prefix (`fields.<name>` or `meta.<attribute>`); see [Sort By](/en/platform/channels/liquid-markup/filters.html#sort-by)
- order: `asc` | `desc` (default: `desc`)
- per_page: integer results per page (enables pagination if provided; default: 10)
- page: integer page number (enables pagination if provided; default: 1)

*e.g.* <span v-pre>`{% assign entries = spaces['testing'].entries | by: types: 'promo,basic', locale: 'es', categories: 'starred,favorites', tags: 'test,test2', slugs: 'slug2,slug1', uuids: 'uuid2,uuid1', sort_by: 'name', order: 'asc', per_page: 10, page: 2 %}`</span>

`sort_by` and `order` are optional in the call, but not in effect: `by` always applies `sort_by`, using `created_at` and `desc` as defaults. A collection that already came sorted by another criterion, such as a widget with its own order, comes out re-sorted by creation date descending even if the template requests no ordering at all, and there is no way to tell `by` not to sort. If you need to preserve the original order, chain the simple filters (`by_type`, `by_category`, `by_tag`, `by_slug`…) instead of using `by`.

Pagination, on the other hand, is optional: it is applied only if you pass `per_page` or `page`. The defaults of those two keys are what the filter uses when you set one and omit the other, and they are subject to the URL parameter precedence described in [Paginated](/en/platform/channels/liquid-markup/filters.html#paginated).

:::warning Attention
Keys that `by` does not recognize are ignored silently, with no error or warning: a singular `type:` or a misspelled `tag:` filters nothing and the listing comes out complete. Check the key names against the list above before giving up on a filter that seems to do nothing.
:::

### Filter By

Returns a list of Entries that match a filter. *e.g.*
<span v-pre>`{% assign entries = widget.entries | filter_by: field: 'meta.name', eq: 'entry3Cat3' %}`</span>

**Parameters**:
- entries (ArrayEntry) — array with entries
- opts (Hash) (default: {}) — hash with field and operator/value pairs

The value of `field` is always written with its prefix:

- `fields.<name>` for the content type's fields.
- `meta.<attribute>` for metadata, with these attributes available: `meta.uuid`, `meta.name`, `meta.slug`, `meta.category`, `meta.category_slug`, `meta.category_name`, `meta.created_at`, `meta.updated_at`, `meta.published_at` and `meta.unpublished_at`. To filter by tags use `by_tag`.

:::warning Attention
A field name without a prefix is silently discarded: the filter raises no error and returns the whole collection, unfiltered. If a listing shows you every entry, check first that the value of `field` starts with `fields.` or with `meta.`.
:::

**Supported Operators** (use as keys in `opts`):
- `eq` — equals (implicit when only `field` and value provided)
- `not` — not equal to. With `nil` as the value it returns the entries that do have a value in the field
- `gt`, `lt` — greater than / less than
- `in` — field value must be one of the comma-separated values
- `nin` — field value must NOT be one of the comma-separated values
- `has` — array-type field must contain all of the comma-separated values
- `search` — searches the text in the attributes of the entry's locations; requires a location field
- `geohash` — searches by proximity with a base 32 geohash; requires a location field

Only `in`, `nin` and `has` take a comma-separated string; the rest take a single value. `search` and `geohash` behave just like in the [Content public API](/en/platform/content/public-api-reference.html#operators). The `all` operator, which appears in the Filter By Query String list, is not available in `filter_by`.

**Examples**:

Filter entries where the `status` field is either 'published' or 'featured':
<span v-pre>`{% assign entries = entries | filter_by: field: 'fields.status', in: 'published,featured' %}`</span>

Filter entries where the `author_id` is not 1 or 5:
<span v-pre>`{% assign entries = entries | filter_by: field: 'fields.author_id', nin: '1,5' %}`</span>

Filter entries that have both 'tech' and 'news' in their `categories` array field:
<span v-pre>`{% assign entries = entries | filter_by: field: 'fields.categories', has: 'tech,news' %}`</span>

Filter entries whose `subtitle` field has any value:
<span v-pre>`{% assign entries = entries | filter_by: field: 'fields.subtitle', not: nil %}`</span>

Filter entries published after a date:
<span v-pre>`{% assign entries = entries | filter_by: field: 'meta.published_at', gt: '2026-01-01' %}`</span>

:::warning Attention
There are two cases where `filter_by` aborts and the published HTML keeps the comment `<!-- Liquid Error -->` in place of the block: when you call it without `field`, and when you apply it to a collection whose content type can't be resolved, such as <span v-pre>`spaces['blog'].entries`</span>. Always start from a collection scoped to a single type, such as <span v-pre>`spaces['blog'].types['post'].entries`</span> or <span v-pre>`widget.entries`</span>.
:::

### Filter By Query String

Returns a list of Entries that match a query. You can use logical operators, various meta fields, URLs, or Liquid tags.

**Operators**:

- gt, lt, in, all, nin

**Fields**:
- meta.category meta.category_slug meta.category_name meta.uuid meta.name meta.created_at
 meta.updated_at meta.published_at meta.unpublished_at meta.slug meta.tag

**URL Examples**:

- https://company.site.com/testsite?meta.category_slug=category3
- https://company.site.com/testsite?meta.tag=tag_name
- https://company.site.com/testsite?meta.tag[in][]=tag1_name&meta.tag[in][]=tag2_name
- https://company.site.com/testsite?meta.created_at=1987-11-19T13:13:13

*e.g.*
<span v-pre>`{% assign entries = widget.entries | filter_by_query_string %}`</span>

**Parameters**:
- entries (ArrayEntry) — array with entries

### From Published Date

Returns a list of Entries that have a publication date more recent than the limit. *e.g.*
<span v-pre>`{% assign entries = widgets.entries | from_published_date: date %}`</span>

**Parameters**:
- entries (ArrayEntry) — array with entries
- date (Datetime)(default: Time.zone.now) — limit date

### Limit

Limits the number of results. *e.g.*
<span v-pre>`{{ entries | limit: 1 }}`</span>

**Parameters**:
- object(Array) — array
- limit (Integer)(default: 1) — result limit

### Paginated

Separates the results into pages. *e.g.*
<span v-pre>`{{ objects | paginated: 10, 2 }}`</span>

**Parameters**:
- object(Array) — entry collection (object before the pipe)
- per_page (Integer) (default: 10) — objects per page
- page (Integer) (default: 1) — page number to display

The `page` and `per_page` URL parameters take precedence over the arguments written in the template. With the example above, a visit to `my-page.com/landing?page=5` shows page 5 and not page 2: the arguments act as initial values, for the first visit without parameters in the URL. And because those parameters are global to the page, they reach every paginated listing on it at once.

The filter clamps both values, whether they come from the argument or from the URL: `per_page` is limited to a minimum of 1 and a maximum of 100, and `page` to a minimum of 1. A `per_page` of 500 returns 100 results per page.

:::warning Attention
Applied to something that is not an entry collection, for example an array already materialized by `sort`, by `map` or defined in the template itself, the filter returns the input untouched: it does not paginate and it does not fail either. The listing looks complete, the pagination links do not appear and no clue is left as to why. Chain `paginated` directly onto the entry collection.
:::

### Sort By

Returns an array with entries sorted by a field *e.g.*
<span v-pre>`{% assign entries = widgets.entries | sort_by: 'name', 'asc' %}`</span>

**Parameters**:
- collection (ArrayEntry | ArrayCategory) — collection to sort (object before the pipe)
- field (String) — field by which you want to sort
- order (String) (default: 'desc') — `asc` or `desc`

The default order is descending and any value that is not exactly `asc` is treated as `desc`: an `'ascending'` or an `'asc '` with an extra space sort the opposite way from what you asked, with no warning at all.

The accepted fields depend on the collection the filter receives:

- **Category collection**: only `name`, `slug` and `uuid`.
- **Entry collection**: the five meta attributes `name`, `slug`, `created_at`, `updated_at` and `published_at` are sorted directly. Any other name is resolved by the search layer, which requires the container prefix, just like [Filter By](/en/platform/channels/liquid-markup/filters.html#filter-by): `fields.<name>` for a content type field and `meta.<attribute>` for the remaining metadata.

:::warning Attention
On a category collection, a field outside `name`, `slug` and `uuid` returns an empty collection with no error at all: the listing looks blank and seems to have no data.

On an entry collection, a name without a prefix, such as `'price'` instead of `'fields.price'`, does not sort by the field you expect. Also, sorting by `fields.<name>` requires, just like `filter_by`, a collection scoped to a content type: on something like <span v-pre>`spaces['blog'].entries`</span> the filter aborts and the published HTML keeps the `<!-- Liquid Error -->` comment in place of the block. Start from <span v-pre>`spaces['blog'].types['post'].entries`</span> or from <span v-pre>`widget.entries`</span>.

The filter also aborts, with the same comment in the output, if the field or the order do not arrive as strings, for example <span v-pre>`| sort_by: 'name', 1`</span>.
:::

### To Published Date

Returns a list of Entries that have a publication date older than the limit. *e.g.*
<span v-pre>`{% assign entries = widgets.entries | to_published_date: date %}`</span>

**Parameters**:
- entries (ArrayEntry) — array with entries
- date (Datetime)(default: Time.zone.now) — limit date

## Crypto

These Liquid filters alter values related to Cryptography.

:::warning Attention
The only hash filters in Modyo Platform are `hmac_sha256` and `sha256`. `md5`, `sha1` and `hmac_sha1` do not exist and, because an unknown filter doesn't interrupt rendering, Liquid returns the input value untransformed: the page publishes the data in the clear where you expected a hash. Review your templates before signing an integration with them.
:::

### HMAC SHA256

Returns the SHA-256 hash of a string using a message authentication code (HMAC), with the key as the argument (e.g. <span v-pre>`{{ 'Hello world' | hmac_sha256: 'key' }} #=> 'a82b2e160edaf92a6589dc11160d2a10c04449840a58717db308c1ee3512b039'`</span>).

### SHA 256

Returns the SHA-256 hash of a string (e.g. <span v-pre>`{{ 'Hello world' | sha256 }} #=> '64ec88ca00b268e5ba1a35678a1b5316d212f4f366b2477232534a8aeca37f3c'`</span>).

## CSS

These Liquid filters alter CSS-related values in Modyo Platform.

:::warning Attention
Every color filter aborts if the input value isn't a valid color, for example a variable that doesn't exist in the context. When that happens, the published HTML keeps the comment `<!-- Liquid Error -->` in place of the color and the CSS rule that used it is lost.
:::

### Brighten

Adds brightness to a color (e.g. <span v-pre>`{{ '#00ff00' | brighten: 15 }} #=> '#26ff26'`</span>).

### Darken

Reduces the brightness of a color (e.g. <span v-pre>`{{ '#00ff00' | darken: 15 }} #=> '#00b300'`</span>).

### Desaturate

Desaturates a color (e.g. <span v-pre>`{{ '#00ff00' | desaturate: 15 }} #=> '#13ec13'`</span>).

### Grayscale

Converts a color to grayscale (e.g. <span v-pre>`{{ '#00ff00' | grayscale }} #=> '#808080'`</span>). It accepts a second argument, but that argument doesn't change the result because the grayscale conversion never uses it.

### Greyscale

Converts a color to grayscale, with the same output as `grayscale`, but it only takes the color (e.g. <span v-pre>`{{ '#00ff00' | greyscale }} #=> '#808080'`</span>).

:::warning Attention
`greyscale` and `grayscale` are not interchangeable: `greyscale` doesn't accept a second argument. A template that passes an amount, such as <span v-pre>`{{ color | greyscale: 15 }}`</span>, aborts because of the number of arguments and the published HTML keeps the comment `<!-- Liquid Error -->`. The same template with `grayscale` works.
:::

### Lighten

Lightens a color (e.g. <span v-pre>`{{ '#00ff00' | lighten: 15 }} #=> '#4dff4d'`</span>).

### Opacity

Modifies the opacity of a color (e.g. <span v-pre>`{{ '#00ff00' | opacity: 0.5 }} #=> 'rgba(0, 255, 0, 0.5)'`</span>).

### RGB

Transforms a color to its RGB equivalent (e.g. <span v-pre>`{{ '#00ff00' | rgb }} #=> 'rgb(0, 255, 0)'`</span>).

### Saturate

Saturates a color (e.g. <span v-pre>`{{ '#00ff00' | saturate: 15 }} #=> '#00ff00'`</span>).

### Spin

Rotates a color in degrees clockwise (e.g. <span v-pre>`{{ '#00ff00' | spin: 15 }} #=> 'rgba(0, 255, 0, 0.5)'`</span>).

## Location

These Liquid filters alter values related to Geolocation in Modyo Platform.

### Dynamic Map

Returns a dynamic Google Maps map (e.g. <span v-pre>`{{ locations | dynamic_map: '600x300', 10, 'roadmap', '', true }}`</span>).

**Parameters**

- `locations` (ArrayHash) — Array of hashes with latitude and longitude points.
- `size` (String) (default: '600x300') — Map size in pixels.
- `zoom` (Integer) (default: 10) — Zoom level for the map.
- `type` (String) (default: 'roadmap') — Map type.
- `icon` (String) (default: '') — Map icon.
- `controls` (Boolean) (default: true) — Navigation controls for the map.

### Static Map

Returns a static Google Maps map (e.g. <span v-pre>`{{ locations | static_map: '600x300', 15, 'roadmap' }}`</span>).

**Parameters**

- `locations` (ArrayHash) — Array of hashes with latitude and longitude points.
- `size` (String) (default: '600x300') — Map size in pixels.
- `zoom` (String) (default: '') — Zoom level for the map. With no value, the Google Maps URL is built with an empty `zoom=` and the framing is left to Google; always pass it when you need a fixed framing.
- `type` (String) (default: 'roadmap') — Map type.
- `icon` (String) (default: '') — Map icon.

:::warning Attention
In both filters the argument that follows `size` is `zoom`, not `controls`. An example such as <span v-pre>`{{ locations | static_map: '600x300', 'true', 'roadmap' }}`</span> builds the Google Maps URL with `zoom=true` and the map is not framed as you expect. In `dynamic_map` the order is `size`, `zoom`, `type`, `icon`, `controls`, so reaching `controls` means passing the four preceding arguments.
:::


## Menu Items

These Liquid filters alter values related to menu items in Modyo Platform.

### Active Page

Determines if a URL item is active. Returns 'active' when active (e.g. <span v-pre>`{{ 'company.modyo.com/jobs' | active_page: 'company.modyo.com/jobs' }} #=> 'active'`</span>).

### Item Rel

Returns 'noopener noreferrer' if a link is "_blank" (e.g. <span v-pre>`{{ '_blank' | item_rel }} #=> 'noopener noreferrer'`</span>).

### Resolve URL

Resolves the URL from a path and base URL (e.g. <span v-pre>`{{ 'dynamic_bank' | resolve_url: 'company.modyo.com' }} #=> 'company.modyo.com/dynamic_bank'`</span>).

### Visible Items

Returns a list of visible items in a list of items (e.g. <span v-pre>`{{ items | visible_items }}`</span>).

## Origination

These are the liquid filters that alter values related to originations in Modyo Platform.

### By UID

Returns the object with the given UID inside an Origination module collection. It is a single filter, `by_uid`, that accepts four collection classes:

- `site.originations` — the originations of the site.
- `origination.steps` — the steps of an origination.
- `step.tasks` — the tasks of a step.
- `task.fields` — the questions of a user input task. This is the only way to take a specific question by its UID; the objects it returns are [question](/en/platform/channels/liquid-markup/objects.html#question).

**Parameters:**
- collection (ArrayOrigination | ArrayStep | ArrayTask | ArrayQuestion) - collection to search in
- uid (String) - UID of the object to find

The filter returns a single object, not a collection: its result is used directly and is not traversed with a loop. If no element in the collection has that UID, it returns nothing.

*e.g.*

```liquid
{% assign my_origination = site.originations | by_uid: 'my-origination' %}
{% assign my_step = my_origination.steps | by_uid: 'step-01' %}
{% assign my_task = my_step.tasks | by_uid: 'task-01' %}
{% assign my_question = my_task.fields | by_uid: 'question-01' %}
```

:::warning Attention
In two cases the filter aborts and the published HTML keeps the `<!-- Liquid Error -->` comment in place of the block: when it is applied to something that is not a collection, and when it is applied to a collection of an unsupported class. In the second case the message includes the name of the class received, which makes it possible to identify what was passed by mistake.
:::

## Pagination

These Liquid filters build the navigation of a listing already paginated with [Paginated](/en/platform/channels/liquid-markup/filters.html#paginated). Apply them to the paginated collection, not to the original one.

The `page` and `per_page` URL parameters are global to the page, so they reach every paginated listing on it at once.

### Pagination links

Returns the complete navigation bar of a paginated listing. *e.g.*
<span v-pre>`{{ paginated_entries | pagination_links }}`</span>

**Parameters**

- `collection` (ArrayEntry) — collection already paginated (object before the pipe).

The output is a `<nav aria-label="Pagination">` with a `<ul class="pagination">` inside, using Bootstrap's pagination classes:

- The current page comes out as `<li class="page-item active" aria-current="page">`.
- The other pages come out as `<li class="page-item">` with an `<a class="page-link">`.
- The gap between blocks of pages comes out as `<li class="page-item disabled" aria-hidden="true">` with `&hellip;`.
- The previous and next arrows come out as `<li class="page-item">` with `aria-label="Previous"` and `aria-label="Next"`. When there is no page to go to, the `<li>` also carries the `disabled` class.

The arrow labels are fixed, `&laquo;` and `&raquo;`. The filter declares three more optional parameters, an anchor and the two labels, but none of them reaches the output: to change the symbols, the language or the structure of the bar you have to build your own markup with `?page=N` links.

When the listing fits in a single page, the filter prints nothing.

:::warning Attention
The disabled arrow is still emitted as a link, with `href="false"`. Bootstrap's styles cancel the click with the `.page-item.disabled .page-link` rule; if you write your own pagination styles, replicate it or the user will be able to click an arrow that leads nowhere.
:::

:::warning Attention
If the template is rendered outside the lifecycle of a site page, the filter can't build the page addresses and publishes a red error paragraph instead, starting with `(Will Paginate Liquidized) Error:`. If you find that text on a page, check where the template is being rendered from.
:::

### Pagination links remote

Does the same as `pagination_links` and additionally adds `data-remote="true"` to every link in the bar. *e.g.*
<span v-pre>`{{ paginated_entries | pagination_links_remote }}`</span>

This is the version to use in custom widgets, which are loaded asynchronously. The conditions of that case are in [Examples](/en/platform/channels/liquid-markup/examples.html#filter-entries).

### Total entries

Returns the total number of items in the collection, not the ones on the current page. *e.g.*
<span v-pre>`{{ paginated_entries | total_entries }}`</span>

**Parameters**

- `collection` (ArrayEntry) — collection (object before the pipe).

It is the counterpart of `paginated`: on a collection that is already paginated, `size` returns the items on the page and `total_entries` the total of the listing. On an empty collection or on an array it returns its size, without an error.

```liquid
{% assign paginated_entries = entries | paginated: 10 %}
<ul>
  {% for entry in paginated_entries %}
  <li>{{ entry.meta.name }}</li>
  {% endfor %}
</ul>
<p>Showing {{ paginated_entries.size }} of {{ paginated_entries | total_entries }} results</p>
{{ paginated_entries | pagination_links }}
```

### Page entries info liquid

Returns a text legend with the range of results on the current page and the total of the collection. *e.g.*
<span v-pre>`{{ paginated_entries | page_entries_info_liquid }}`</span>

**Parameters**

- `collection` (ArrayEntry) — collection already paginated (object before the pipe).
- `model_name` (String) (default: null) — name of the entity being listed, to name it inside the legend.

The legend is built in English and doesn't go through the site translations. If you need it in the site's language, or with another format, build it with `total_entries` as in the example above.

## Site

These Liquid filters alter values related to Sites in Modyo Platform.

### Removed filters

As of version 10.2 the `video_player`, `audio_player`, `embedded_video` and `asset_thumbnail_link_tag` filters no longer exist. The `bar_code` and `qr_code` filters never existed in Modyo Platform.

:::warning Attention
An unknown filter doesn't interrupt rendering: Liquid returns the input value untransformed. A template that still invokes these filters on an asset no longer shows the player or the link, and publishes the internal name of the object it received instead, for example `Liquid::Drops::Assets::VideoAssetDrop`. There is no error message or visible hint of the cause on the page, so review your templates before upgrading.
:::

To replace `video_player` and `audio_player`, build the markup with the file's address, available in `url`:

```liquid
{% assign video = assets['video-uuid'] %}
<video src="{{ video.url }}" width="320" height="320" controls="controls"></video>

{% assign audio = assets['audio-uuid'] %}
<audio src="{{ audio.url }}" controls="controls"></audio>
```

To replace `asset_thumbnail_link_tag`, wrap the thumbnail, available in `thumbnail_url`, in a link to the file:

```liquid
{% assign image = assets['image-uuid'] %}
<a href="{{ image.url }}" class="thumbnail"><img src="{{ image.thumbnail_url }}" alt="{{ image.alt_text }}"></a>
```

`embedded_video`, `bar_code` and `qr_code` have no replacement: the platform doesn't currently offer an equivalent filter.

### Asset image Tag

Generates the HTML tag of an image (e.g. <span v-pre>`{{ asset | asset_image_tag: 'original' }}`</span>).

### Asset URL

Generates the URL of an Asset object or a template asset path. For Asset objects using Cloudflare for image optimization, you can use the following additional parameters: width, height, blur, quality, format and fit. (e.g. <span v-pre>`{{ assets['asset_uuid'] | asset_url: blur: 40, format: 'auto', fit: 'cover'  }}`</span>).
For template asset paths from the template builder, specify the asset type as the second argument (e.g. <span v-pre>`{{ 'base' | asset_url: 'js'  }}`</span>). You can also use the script_tag or stylesheet_tag filters to automatically generate the complete HTML <script> or <link> tag (e.g. <span v-pre>`{{ 'base' | asset_url: 'css' | stylesheet_tag: media: 'screen' }}`</span>).

### Button To

Generates a button (e.g. <span v-pre>`{{ 'Hello World' | button_to: 'http://www.google.com' }}`</span>).

### Cookie Value

Returns the value of a cookie (e.g. <span v-pre>`{{ 32 | cookie_value }}`</span>).

### Escape JS

Prevents JavaScript code interpretation (e.g. <span v-pre>`{{ '<script>alert("hello world");</script>' | escape_js }}`</span>).

### Format Date

Translates a date to another format (e.g. <span v-pre>`{{ time | format_date: '%e %b, %Y' }}`</span>).

**Parameters**

- `time` (DateTime) — Date.
- `format_date` (String) (default: '') — The new format for the date.

### Format DateTime

Translates a date to DateTime format (e.g. <span v-pre>`{{ time | format_datetime }}`</span>).

### Format Short Date

Translates a date to a reduced format (dd-mm-yyyy) (e.g. <span v-pre>`{{ time | format_short_date }}`</span>).

### Get Session ID

Returns the current session identifier.

*e.g.* <span v-pre>`{{ '' | get_session_id }}`</span>

### Image Tag (Generic URL)

Generates a simple `<img>` tag for a raw image URL (not an Asset object).

*e.g.* <span v-pre>`{{ 'https://cdn.example.com/logo.png' | image_tag }}`</span>

### Link To

Adds an anchor link tag (e.g. <span v-pre>`{{ 'Hello World' | link_to: 'http://www.google.com', 'this is my alt', 'small', '_blank' }}`</span>).

**Parameters**

- `text` (String) (default: '') — Link text.
- `link` (String) (default: '/') — Link URL.
- `alt` (String) (default: '') — Alternative text for the link.
- `class` (String) (default: '') — CSS class for the link.
- `target` (String) (default: '') — Target for the link.

### Notifications

Shows the flash message variable (e.g. <span v-pre>`{{ 'alert-error' | notifications }}`</span>).

### Primary button to

Generates a primary type button (e.g. <span v-pre>`{{ 'Hello World' | primary_button_to: 'http://www.google.com', 'large' }}`</span>).

**Parameters**

- `text` (String) (default: '') — Link text.
- `link` (String) (default: '/') — Link URL.
- `size` (String) (default: 'large') — Size for the link.

### Sanitize HTML

Sanitizes HTML tags from a String (e.g. <span v-pre>`{{ '<script>Hello World</script>' | sanitize }} #=> 'Hello World'`</span>).

### Script tag

Adds a script tag (e.g. <span v-pre>`{{ 'test-script' | script_tag }}`</span>).

### Search Box

Adds a search field (e.g. <span v-pre>`{{ 'testsite' | search_box }}`</span>).

### Strftime

Converts a datetime to String format (e.g. <span v-pre>`{{ time | strftime: '%m/%d/%y' }}`</span>).

### Strip tag

Removes all HTML tags and their content from a String (e.g. <span v-pre>`{{ '<script>Hello World</script>' | strip_tags }} #=> ""`</span>).

### Stylesheet Tag
Generates the HTML `<link>` tag for a CSS template, taking as parameters the URL and attributes (e.g. `attr: 'value'`, <span v-pre>`{{ 'my-css-url' | stylesheet_tag: media: 'screen', title: 'color style' }}`</span> => `<link href='my-css-url' rel='stylesheet' type='text/css' media='screen' title='color style' />`).

### Theme Javascript

Adds a theme tag in Javascript (e.g. <span v-pre>`{{ 'home-page-javascript' | theme_javascript }}`</span>).

### Theme Stylesheet

Adds a theme tag in CSS (e.g. <span v-pre>`{{ 'home-page-stylesheet' | theme_stylesheet }}`</span>).

### Time Ago in Words

Converts a date in String to words (e.g. <span v-pre>`{{ '01-02-2019' | time_ago_in_words }} #=> 'over 3 years'`</span>).

### Translate

Resolves the translation text for Site keys. Custom values will be returned if they exist (e.g. <span v-pre>`{{ 'admin.logs.errors.no_logs_yet' | translate }}`</span>).

**Parameters**

- `value` (String) — translation key (object before the pipe).
- `count` (Integer) (default: nil) — count used to pluralize the key.

`t` is the short alias of the filter and does exactly the same: <span v-pre>`{{ 'admin.logs.errors.no_logs_yet' | t }}`</span>.

The second parameter pluralizes the key and is applied only when it arrives as an integer (e.g. <span v-pre>`{{ 'site.results.count' | t: total }}`</span>). If it arrives as a string, for example `'3'`, the filter discards it without warning and resolves the key without pluralizing.

### Truncate HTML

Returns a String after truncating it (e.g. <span v-pre>`{{ html | truncate_html: 10 }}`</span>).

## Step

These are the liquid filters that alter values related to steps in Modyo Platform.

### By UID

Returns the Step with the selected UID. *e.g.*
<span v-pre>`{% assign my_step = origination.steps | by_uid: 'step-01' %}`</span>

**Parameters:**
- steps (ArrayStep) - array with steps
- uid (String) - Step UID

This is the same `by_uid` filter from the Origination module. The full reference, with the four supported collection classes and the errors it aborts with, is in [By UID](/en/platform/channels/liquid-markup/filters.html#by-uid).

## Submission

These are the liquid filters that alter values related to submissions in Modyo Platform.

### By Origination

Returns the Submissions filtered by Origination UID. *e.g.*
<span v-pre>`{% assign filtered_submissions = user.submissions | by_origination: 'my-origination' %}`</span>

**Parameters:**
- submissions (ArraySubmission) - array with user submissions
- uid (String) - Origination UID

### By Status

Returns the Submissions with the selected status. *e.g.*
<span v-pre>`{% assign filtered_submissions = user.submissions | by_status: 'completed' %}`</span>

**Parameters:**
- submissions (ArraySubmission) - array with user submissions
- status (String) - Submission status. Supported values are 'pending', 'completed' and 'all'

In Modyo 10.2 a submission can be in one of four statuses: **Not started**, **Pending**, **Completed**, and **Canceled**. The filter recognizes only three values, and they don't map directly onto those statuses:

- `'pending'` returns the **Pending** submissions.
- `'completed'` returns the **Completed** ones.
- `'all'` doesn't return all of them: it delivers the **Pending** ones plus the **Completed** ones, and leaves out the **Not started** and the **Canceled** ones.
- `'not_started'` and `'canceled'` aren't supported. The filter doesn't fail and leaves no trace on the page: it returns an empty collection, so any listing that uses them shows up blank.

:::warning Attention
A submission is born **Not started** and only moves to **Pending** when the first response to one of its tasks is saved, so newly created ones don't show up in listings built with this filter. On top of that, `user.submissions` is already scoped to the **Pending** and **Completed** submissions, so no combination of `by_status` can reach the **Not started** or **Canceled** ones in that collection.
:::

To list the statuses the filter doesn't cover, loop over an unscoped collection, such as `user.invited_submissions`, without going through `by_status`, and compare [`submission.status`](/en/platform/channels/liquid-markup/objects.html#submission) inside the loop:

```liquid
{% assign invited = user.invited_submissions | by_origination: 'my-origination' %}
{% for invited_submission in invited %}
  {% if invited_submission.status == 'not_started' %}
    <a href="{{ invited_submission.resume_url }}">{{ invited_submission.origination.name }}</a>
  {% endif %}
{% endfor %}
```

### Completed

Checks whether an element (step/task wrapper) is completed for a given submission.

*e.g.* <span v-pre>`{{ submission | completed: step }}`</span>

**Parameters:**
- submission (Submission) — the current submission (object before pipe)
- element (Step|TaskResponse wrapper) — element to test

Returns: Boolean (true/false)

As of Modyo 10.2 the filter resolves the status against the user present in the render context, not against the submission owner: a step counts as completed only if that user has a completed response for every task they can see. In a flow with invited users, the same template delivers different results depending on who is looking, and a step that showed up as completed in 10.1 may now show up as incomplete.

:::warning Attention
The filter needs the `user` object in the template context. If it isn't there, evaluation aborts as soon as the submission has at least one completed task, and the published HTML shows the `<!-- Liquid Error -->` comment instead of the block, with no warning for whoever is browsing. Guard the block with <span v-pre>`{% if user %}`</span> and make sure the template receives the user.
:::

### URL (Step URL for Submission)

Generates a navigable URL for a step within a submission (first visible task). Only returns a value if submission is pending and either the step is completed or origination step ordering permits navigation.

*e.g.* <span v-pre>`{{ step | url: submission }}`</span>

Just like `completed`, it resolves the completed step and the first visible task against the user in the render context, with the same consequences in flows with invited users and the same behavior when `user` is missing from the context.

:::warning Attention
A newly created submission is **Not started**, not **Pending**, so the filter returns no value in the most common case of a template meant to resume a submission. The submission moves to **Pending** when the first response to one of its tasks is saved; until then, take the user to the start of the flow with [`submission.resume_url`](/en/platform/channels/liquid-markup/objects.html#submission), which doesn't depend on the status.
:::

### Resume Link

Returns an HTML anchor tag to resume a pending step for a submission, or the step name if no URL is available.

*e.g.* <span v-pre>`{{ step | resume_link: submission }}`</span>

The link is built by `url`, so it inherits all of its conditions: when `url` returns no value, `resume_link` prints the step name as plain text.

:::warning Attention
On a **Not started** submission the filter prints the step name as plain text and the page shows no error: the template looks complete, but the user has no way in. The same happens when `url` returns no link for that step with the context user. Check the submission status before rendering the listing and offer [`submission.resume_url`](/en/platform/channels/liquid-markup/objects.html#submission) while it isn't **Pending** yet.
:::

### Submissions Selector

Renders a dropdown HTML fragment to select among multiple pending submissions (excludes current submission). Returns nothing if fewer than 2 pending submissions.

*e.g.* <span v-pre>`{{ pending_submissions | submissions_selector }}`</span>

## Task

These are the liquid filters that alter values related to tasks in Modyo Platform.

### By UID

Returns the Task with the selected UID. *e.g.*
<span v-pre>`{% assign my_task = step.tasks | by_uid: 'task-01' %}`</span>

**Parameters:**
- tasks (ArrayTask) - array with tasks
- uid (String) - Task UID

This is the same `by_uid` filter from the Origination module, which also accepts the `fields` collection of a user input task to take one of its questions by UID: <span v-pre>`{% assign my_question = my_task.fields | by_uid: 'question-01' %}`</span>. The full reference is in [By UID](/en/platform/channels/liquid-markup/filters.html#by-uid).

### Navigation / Completion Helpers

The filters `completed`, `url`, and `resume_link` (documented under Submission) also apply when piping a Step or Task in the context of a submission navigation flow.

## User

These Liquid filters alter values related to Users.

### Avatar For

Shows the HTML code for a user's image. If the user has no avatar of their own, it returns the default avatar (e.g. <span v-pre>`{{ user | avatar_for: 'C50x50', true }}`</span>).

**Parameters**

- `user` (User) — User object.
- `size` (String) (default: 'C50x50') — Image size.
- `link` (Boolean) (default: true) — `true` adds a link to the user's profile.

### Default Avatar Image

Shows the HTML code of the default avatar. The signature is the reverse of what the name suggests: the value before the pipe is the **size**, and the user is the first, optional argument (e.g. <span v-pre>`{{ 'C50x50' | default_avatar_image: user }}`</span>).

**Parameters**

- `size` (String) — Image size, using the avatar version format: `C25x25`, `C50x50`, `C75x75`, `C100x100`, `C125x125`, `C160x160`, `C200x200` or `C250x250`.
- `user` (User) (default: nil) — User object from the Liquid context. It has to be the object, not an id or an email.

It returns one of three images, depending on what it receives:

- With a user whose realm has a **Default avatar image** configured in [Realm Settings](/en/platform/customers/settings.html#general), the realm's image in the requested size.
- With a user whose realm doesn't have it configured, the placeholder image in the requested size.
- With no user, the placeholder image in the requested size.

:::tip Tip
For the usual case you don't need to call it: `avatar_for` already falls back to `default_avatar_image` when the user has no avatar of their own. Call it directly only when you want the default avatar without looking at the user's own.
:::

### By Form Slug

Returns user form responses filtered by a specific form slug.

*e.g.* <span v-pre>`{% assign responses = user.responses | by_form_slug: 'onboarding-form' %}`</span>

**Parameters:**
- responses (Array&lt;FormResponse&gt;) — user.responses
- form_slug (String) — form slug to match

### By Response Date Range

Returns form responses created within a date range (inclusive).

*e.g.* <span v-pre>`{% assign responses = user.responses | by_response_date_range: '2025-03-10', '2025-03-20' %}`</span>

**Parameters:**
- responses (Array&lt;FormResponse&gt;) — user.responses
- date_from (String/Date) — start date (YYYY-MM-DD recommended)
- date_to (String/Date) — end date (YYYY-MM-DD recommended)

### By Answer Text

Returns form responses containing an answer whose `answers.text_field` matches exactly the provided text.

*e.g.* <span v-pre>`{% assign responses = user.responses | by_answer_text: 'Blue' %}`</span>

**Parameters:**
- responses (Array&lt;FormResponse&gt;) — user.responses
- answer_text (String) — exact text to match

## Widget

These Liquid filters alter values related to Widgets.

### Entry Limit

Determines the entry limit for a widget (e.g. <span v-pre>`{{ widget1 | entry_limit }}`</span>).

### Resolve Home Widget List

Returns a list of all widgets that belong to a Site (e.g. <span v-pre>`{{ site | resolve_home_widget_list }}`</span>).

### Resolve Me Widget List

Returns a list of all widgets that belong to a "me" page (e.g. <span v-pre>`{{ site | resolve_me_widget_list }}`</span>).

### Resolve Widget List

Returns a list of all widgets that belong to a page (e.g. <span v-pre>`{{ site | resolve_widget_list: page }}`</span>).

**Parameters**

- `site` (Site) — Site-type object.
- `page` (Page) — Page-type object.

---

NOTE: Composite and submission-related filters depend on internal preview/origination logic; behavior may vary in preview mode versus published mode.
