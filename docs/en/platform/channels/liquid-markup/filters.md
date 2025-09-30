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

If you don't specify currency parameters with the currency filter, Modyo uses the realm's [payment](/en/platform/customers/settings#payment-configuration) configuration.

If the site doesn't have an associated realm and you don't specify parameters, the predefined format of the site's language will be applied.
:::

**Parameters**:

- unit - currency symbol.
- separator - decimal separator.
- delimiter - thousands separator.
- precision - number of decimal digits.


## Content

These are the liquid filters that alter values related to the Content module in Modyo Platform.

### Asset image

Returns the tags of an image using its uuid from the File Manager. *e.g.*
<span v-pre>`{{ uuid | asset_image }}`</span>

### Asset link

Returns the URL of an image using its uuid from the File Manager. *e.g.*
<span v-pre>`{{ uuid | asset_link: 'This is a link for the asset' }}`</span>

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

Returns a list of Entries that belong to a selected language. *e.g.*
<span v-pre>`{% assign entries = widget.entries | locale: 'es,en,pt' %} => entries`</span>

**Parameters**:
- entries (ArrayEntry) — array with entries
- locale (String) (default: '') — String with comma-separated languages.

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
- locale (String) (default: '') — String with comma-separated tags.

### By type

Returns a list of Entries that belong to a selected Content Type. *e.g.*
<span v-pre>`{% assign filtered_entries = entries | by_type: 'type2,type1,type3' %}`</span>

**Parameters**:
- entries (ArrayEntry) — array with entries
- locale (String) (default: '') — String with comma-separated content types.

### Filter By

Returns a list of Entries that match a filter. *e.g.*
<span v-pre>`{% assign entries = widget.entries | filter_by: field: 'name', eq: 'entry3Cat3' %}`</span>

**Parameters**:
- entries (ArrayEntry) — array with entries
- opts (Hash) (default: {}) — hash with field and eq as value

### Filter By Query String

Returns a list of Entries that match a query. You can use logical operators, various meta fields, URLs, or Liquid tags.

**Operators**:

- gt, lt, in, all, nin

**Fields**:
- meta.category meta.category_slug meta.category_name meta.uuid meta.name meta.created_at
 meta.updated_at meta.published_at meta.unpublished_at meta.slug meta.tag

**Url examples**:

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
<span v-pre>`{% assign entries = widgets.entries | from_published_date: date %}
`</span>

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
- object(Array) — array
- per_page (Integer) (default: 10) — objects per page
- page (Integer) (default: 1) — page number to display

### Sort By

Returns an array with entries sorted by a field *e.g.*
<span v-pre>`{% assign entries = widgets.entries | sort_by: 'name', 'asc' %}`</span>

**Parameters**:
- entries (ArrayEntry) — array with entries
- attribute (String) — field by which you want to sort
- order (String) - asc (ascending) or desc (descending)


### To Published Date

Returns a list of Entries that have a publication date older than the limit. *e.g.*
<span v-pre>`{% assign entries = widgets.entries | to_published_date: date %}
`</span>

**Parameters**:
- entries (ArrayEntry) — array with entries
- date (Datetime)(default: Time.zone.now) — limit date


## Crypto

These Liquid filters alter values related to Cryptography.

### Base64 Decode

Returns the Base64-decoded value of a string (e.g. <span v-pre> `{% 'Hello world' | base64_encode %} # => 'SGVsbG8gd29ybGQ='`</span>).

### Base64 Encode

Returns the Base64-encoded value of a string (e.g. <span v-pre>`{% 'SGVsbG8gd29ybGQ=' | base64_decode %} # => 'Hello world'`</span>).

### HMAC SHA1

Returns the SHA-1 hash using a message authentication code (HMAC) of a string (e.g. <span v-pre>`{% 'Hello world' | hmac_sha1: 'key' %} # => '2a73959742baf046e6e2e27e5ee94bcff0af31b1'`</span>).

### HMAC SHA256
Returns the SHA-256 hash using a message authentication code (HMAC) of a string (e.g. <span v-pre>`{% 'Hello world' | hmac_sha256: 'key' %} # => 'a82b2e160edaf92a6589dc11160d2a10c04449840a58717db308c1ee3512b039'`</span>).

### MD5

Returns the MD5 hash of a string (e.g. <span v-pre>`{% 'Hello world' | md5 %} # => '3e25960a79dbc69b674cd4ec67a72c62'`</span>).

### SHA1
Returns the SHA-1 hash of a string (e.g. <span v-pre>`{% 'Hello world' | sha1 %} # => '7b502c3a1f48c8609ae212cdfb639dee39673f5e'`</span>).

### SHA 256
Returns the SHA-256 hash of a string (e.g. <span v-pre>`{% 'Hello world' | sha256 %} # => '64ec88ca00b268e5ba1a35678a1b5316d212f4f366b2477232534a8aeca37f3c'`</span>).

## CSS

These Liquid filters alter CSS-related values in Modyo Platform.

### Brighten

Adds brightness to a color (e.g. <span v-pre>`{{ '#00ff00' | brighten: 15 }} #=> '#26ff26'`</span>).

### Darken

Reduces the brightness of a color (e.g. <span v-pre>`{{ '#00ff00' | darken: 15 }} #=> '#00b300'`</span>).

### Desaturate

Desaturates a color (e.g. <span v-pre>`{{ '#00ff00' | desaturate: 15 }} #=> '#13ec13'`</span>).

### Grayscale

Converts a color to grayscale (e.g. <span v-pre>`{{ '#00ff00' | grayscale }} #=> '#808080'`</span>).

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

Returns a dynamic Google Maps map (e.g. <span v-pre>`{{ locations | dynamic_map: '600x300', 'true', 'roadmap', true}}`</span>).

**Parameters**

- `locations` (ArrayHash) — Array of hashes with latitude and longitude points.
- `size` (String) (default: '600x300') — Map size in pixels.
- `zoom` (String) (default: 10) — Zoom level for the map.
- `type` (String) (default: 'roadmap') — Map type.
- `icon` (String) (default: '') — Map icon.
- `controls` (String) (default: true) — Navigation controls for the map.

### Static Map

Returns a static Google Maps map (e.g. <span v-pre>`{{ locations | static_map: '600x300', 'true', 'roadmap'}}`</span>).

**Parameters**

- `locations` (ArrayHash) — Array of hashes with latitude and longitude points.
- `size` (String) (default: '600x300') — Map size in pixels.
- `zoom` (String) (default: 10) — Zoom level for the map.
- `type` (String) (default: 'roadmap') — Map type.
- `icon` (String) (default: '') — Map icon.


## Menu Items

These Liquid filters alter values related to menu items in Modyo Platform.

### Active Page

Determines if a URL item is active. Returns 'active' when active (e.g. <span v-pre>`{{ 'company.modyo.com/jobs' | active_page: 'company.modyo.com/jobs' }} #=> 'active'`</span>).

### Item Rel

Returns 'noopener noreferrer' if a link is "\_blank" (e.g. <span v-pre>`{{ '_blank' | item_rel }} #=> 'noopener noreferrer'`</span>).

### Resolve URL

Resolves the URL from a path and base URL (e.g. <span v-pre>`{{ 'dynamic_bank' | resolve_url: 'company.modyo.com' }} #=> 'company.modyo.com/dynamic_bank'`</span>).

### Visible Items

Returns a list of visible items in a list of items (e.g. <span v-pre>`{{ items | visible_items }}`</span>).

## Origination

These are the liquid filters that alter values related to originations in Modyo Platform.

### By UID

Returns the Origination with the selected UID. *e.g.*
<span v-pre>`{% assign my_origination = site.originations | by_uid: 'my-origination' %}`</span>

**Parameters:**
- originations (ArrayOrigination) - array with originations
- uid (String) - Origination UID

## Site

These Liquid filters alter values related to Sites in Modyo Platform.

### Asset image Tag

Generates the HTML tag of an image (e.g. <span v-pre>`{{ asset | asset_image_tag: 'original' }}`</span>).

### Asset Thumbnail Link Tag

Generates the HTML thumbnail tag of an image (e.g. <span v-pre>`{{ asset | asset_thumbnail_link_tag: 'class', 'target' }}`</span>).

**Parameters**

- `asset` (Asset) — Asset-type object.
- `classes` (String) (default: '') — Additional HTML classes (optional).
- `target` (String) (default: '') — Additional HTML targets (optional).

### Asset URL

Generates the URL of an Asset-type object (e.g. <span v-pre>`{{ asset | asset_url: 'original' }}`</span>).

### Audio Player

Generates the URL of an Audio-type object (e.g. <span v-pre>`{{ audio1 | audio_player }}`</span>).

### Bar Code

Generates the URL of a barcode (e.g. <span v-pre>`{{ value | bar_code: 320, 320 }}`</span>).

**Parameters**

- `value` (String) — Barcode value.
- `width` (Integer) (default: 100) — Width.
- `height` (Integer) (default: 100) — Height.

### Button To

Generates a button (e.g. <span v-pre>`{{ 'Hello World' | button_to: 'http://www.google.com' }}`</span>).

### Cookie Value

Returns the value of a cookie (e.g. <span v-pre>`{{ 32 | cookie_value }}`</span>).

### Embedded Video

Returns the URL of an embedded video (e.g. <span v-pre>`{{ movie2 | embedded_video }}`</span>).

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

### QR Code

Generates a QR code (e.g. <span v-pre>`{{ value | qr_code: 4, 320, 320 }}`</span>).

**Parameters**

- `value` (String) (default: '') — QR value.
- `qr_size` (Integer) (default: 4) — QR size.
- `width` (Integer) (default: 100) — QR width.
- `height` (Integer) (default: 100) — QR height.

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

### Truncate HTML

Returns a String after truncating it (e.g. <span v-pre>`{{ html | truncate_html: 10 }}`</span>).

### Video Player

Adds a video player in HTML code using a File Manager asset (e.g. <span v-pre>`{{ movie1 | video_player: 320, 320 }}`</span>).

**Parameters**

- `video` (Asset) — Video-type object from the File Manager.
- `width` (Integer) — Video width.
- `height` (Integer) — Video height.

## Step

These are the liquid filters that alter values related to steps in Modyo Platform.

### By UID

Returns the Step with the selected UID. *e.g.*
<span v-pre>`{% assign my_step = origination.steps | by_uid: 'step-01' %}`</span>

**Parameters:**
- steps (ArrayStep) - array with steps
- uid (String) - Step UID

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
- status (String) - Originations status. Supported values are 'pending', 'completed' and 'all'

## Task

These are the liquid filters that alter values related to tasks in Modyo Platform.

### By UID

Returns the Task with the selected UID. *e.g.*
<span v-pre>`{% assign my_task = step.tasks | by_uid: 'task-01' %}`</span>

**Parameters:**
- tasks (ArrayTask) - array with tasks
- uid (String) - Task UID

## User

These Liquid filters alter values related to Users.

### Default Avatar Image

Shows the default avatar image (e.g. <span v-pre>`{{ user | avatar_for: 'C50x50' }}`</span>).

**Parameters**

- `user` (User) — User object.
- `size` (Integer) (default: 'C50x50') — Image size.

### Image For

Shows the HTML code for a user's image (e.g. <span v-pre>`{{ user | avatar_for: 'C50x50', true }}`</span>).

**Parameters**

- `user` (User) — User object.
- `size` (Integer) (default: 'C50x50') — Image size.
- `link` (Boolean) (default: true) — `true` adds a link to the user's profile.

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