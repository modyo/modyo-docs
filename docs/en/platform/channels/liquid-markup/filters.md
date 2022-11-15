---
search: true
---

# Filters

Output markup can take filters, which modify the result of the output statement. You can invoke filters by following the output statement's main expression with:

* A pipe character (`|`)
* The name of the filter
* Optionally, a colon (`:`) and a comma-separated list of additional parameters to the filter. Each additional parameter must be a valid expression, and each filter pre-defines the parameters it accepts and the order in which they must be passed.

Filters can also be chained together by adding additional filter statements (starting with another pipe character). The output of the previous filter will be the input for the next one.

```liquid
Hello {{ 'tobi' | upcase }}
Hello tobi has {{ 'tobi' | size }} letters!
Hello {{ '*tobi*' | textilize | upcase }}
Hello {{ 'now' | date: "%Y %h" }}
```

A filter is a Ruby method that takes one or more parameters and returns a value. Parameters are passed to filters by position: the first parameter is the expression preceding the pipe character, and additional parameters can be passed using the `name: arg1, arg2` syntax described above.

### Standard Filters

* `append` - Add a string *e.g.* <span v-pre>` {{'foo' | append: 'bar'}} # => 'foobar'` </span>
* `asset_url` - Generates the URL for an Asset object with a determined size, *e.g.* <span v-pre>`{{ asset_obj | asset_url: '640x480' }}`</span>. Also, can generate the URL of a CSS or JavaScript template, *e.g.* <span v-pre>`{{ 'my-css' | asset_url: 'css' }}`</span> or <span v-pre>`{{ 'my-js' | asset_url: 'js' }}`</span>.
* `base64_decode` - Returns the Base64-decoded value for a string *e.g.* <span v-pre> `{% 'Hello world' | base64_encode %} # => 'SGVsbG8gd29ybGQ='`</span>.
* `base64_encode` - Returns the Base64-encoded value for a string *e.g.* <span v-pre>`{% 'SGVsbG8gd29ybGQ=' | base64_decode %} # => 'Hello world'`</span>.
* `capitalize` - Capitalize the entry sentence
* `ceil` - Rounds up a decimal number to the next integer, *e.g.* <span v-pre>`{{ 4.6 | ceil }} #=> 5`</span>
* `date` - Format a date ([syntax reference] (https://shopify.dev/api/liquid/filters#date))
* `default` - Returns the given variable unless it is null or empty string, then returns the given value, *e.g.* <span v-pre>`{{ undefined_variable | default: "Default value" }} #=> "Default value"`</span>
* `divided_by` - Division of integers *e.g.* <span v-pre>`{{ 10 | divided_by:3 }} #=> 3`</span>
* `downcase` - Convert an input string to lowercase
* `escape_once` - Returns an escape version of html without affecting existing escape entities
* `escape` - Escape html to a string
* `first` - Get the first element of the last array
* `floor` - Rounds a decimal number down to the nearest integer, *e.g.* <span v-pre>`{{ 4.6 | floor }} #=> 4`</span>
* `format_date` - Format a date with the localization of the site, uses the same syntax as `date`
* `hmac_sha1` - Returns the SHA-1 hash using a message authentication code (HMAC) value for a string *e.g.* <span v-pre>`{% 'Hello world' | hmac_sha1: 'key' %} # => '2a73959742baf046e6e2e27e5ee94bcff0af31b1'`</span>.
* `hmac_sha256` - Returns the SHA-256 hash using a message authentication code (HMAC) value for a string, *e.g.* <span v-pre>`{% 'Hello world' | hmac_sha256: 'key'  %} # => 'a82b2e160edaf92a6589dc11160d2a10c04449840a58717db308c1ee3512b039'`</span>.
* `join` - Join elements of the array with a certain character between them.
* `last` - Get the last element of the last array
* `lstrip` - Remove all blank spaces from the beginning of a string
* `map` - Map/collect an array on a given property.
* `md5` - Returns the MD5 hash for a string, *e.g.* <span v-pre>`{% 'Hello world' | md5  %} # => '3e25960a79dbc69b674cd4ec67a72c62'`</span>.
* `minus` - Subtract *e.g.*  <span v-pre>`{{ 4 | minus:2 }} #=> 2`</span>
* `modulo` - Rest *e.g.* <span v-pre>`{{ 3 | modulo:2 }} #=> 1`</span>
* `newline_to_br` - Replaces each new line (\ n) with html space
* `plus` - Sum *e.g.*  <span v-pre>`{{ '1' | plus:'1' }} #=> 2`</span>, <span v-pre>`{{ 1 | plus:1 }} #=> 2`</span>
* `prepend` - Precede a string *e.g.* <span v-pre>`{{ 'bar' | prepend:'foo' }} #=> 'foobar'`</span>
* `remove_first` - Eliminates the first incident *e.g.* <span v-pre>`{{ 'barbar' | remove_first:'bar' }} #=> 'bar'`</span>
* `remove` - Eliminates all incidents *e.g.* <span v-pre>`{{ 'foobarfoobar' | remove:'foo' }} #=> 'barbar'`</span>
* `replace_first` - Replaces the first incident *e.g.* <span v-pre>`{{ 'barbar' | replace_first:'bar','foo' }} #=> 'foobar'`</span>
* `replace` - Replace all incidents *e.g.* <span v-pre>`{{ 'foofoo' | replace:'foo','bar' }} #=> 'barbar'`</span>
* `reverse` - Reverses the given array.
* `round` - Round to the nearest whole number or to the specified number of decimals *e.g.* <span v-pre>`{{ 4.5612 | round: 2 }} #=> 4.56`</span>
* `rstrip` - Remove all blank spaces from the end of a string
* `script_tag` - Generates a `<script>` HTML tag for a JavaScript template, taking a URL and `attr: 'value'` attributes as parameters, *e.g.* <span v-pre>`{{ 'my-js-url' | script_tag: async: 'async', defer: 'defer' }}`</span> => `<script src='my-js-url' type='text/javascript' async='async' defer='defer'></script>`
* `sha1` - Returns the SHA-1 hash for a string *e.g.* <span v-pre>`{% 'Hello world' | sha1  %} # => '7b502c3a1f48c8609ae212cdfb639dee39673f5e'`</span>.
* `sha256` - Returns the SHA-256 hash for a string *e.g.* <span v-pre> `{% 'Hello world' | sha256%} # => '64ec88ca00b268e5ba1a35678a1b5316d212f4f366b2477232534a8aeca37f3ccc0756f3cc0756b2477232534a8aeca37f3cc'`</span>.
* `size` - Return the size of an array or string
* `slice` - Divide a string. Take a offset and a length, *e.g.* <span v-pre>`{{ "hello" | slice: -3, 3 }} #=> llo`</span>
* `sort` - Sort array items
* `split` - Split a string into a matching pattern *e.g.* <span v-pre>`{{ "a~b" | split:"~" }} #=> ['a','b']`</span>
* `strip_html` - Remove html from the string
* `strip_newlines` - Remove all new lines (\n) from the string
* `strip` - Removes all blank spaces at both ends of the string.
* `stylesheet_tag` - Generates a `<link>` HTML tag for a CSS template, taking a URL and `attr: 'value'` attributes as parameters, *e.g.* <span v-pre>`{{ 'my-css-url' | stylesheet_tag: media: 'screen', title: 'color style' }}`</span> => `<link href='my-css-url' rel='stylesheet' type='text/css' media='screen' title='color style' />`
* `times` - Multiply  *e.g* <span v-pre>`{{ 5 | times:4 }} #=> 20`</span>
* `truncate` - Restrict a string to x characters. It also accepts a second parameter that will be added to the string *e.g.* <span v-pre>`{{ 'foobarfoobar' | truncate: 5, '.' }} #=> 'foob.'`</span>
* `truncatewords` - Restrict a string to x words
* `uniq` - Removes duplicate elements from an array, optionally using a specific property to check its uniqueness.
* `upcase` - Convert an input string to uppercase
* `url_encode` - Encode a string to URL
