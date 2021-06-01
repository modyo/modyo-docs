---
search: true
---

# Liquid Markup

Liquid is a template engine which was written with very specific requirements:

* It has to have beautiful and simple markup. Template engines which don't produce good looking markup are no fun to use.
* It has to be unassessable and safe. Liquid templates are made for users to edit them. You don't want to run code on your server that your users wrote.
* It must not have a state. The build and render steps have to be separate so that the parsing and its compilation can be done only once, and later rendered by hashing with local objects and variables.

### Why do we use Liquid?

* You want to allow your users to edit the appearance of your application but you don't want them to execute **insecure code on your server**.
* You want to render your templates directly from the database.
* You like smart style template engines (PHP).
* You need a template engine that works well in both HTML and emails.
* You don't like the markup of your current template engine.

### What does Liquid look like?

```html
<ul id="products">
  {% for product in products %}
    <li>
      <h2>{{ product.name }}</h2>
      Only {{ product.price | price }}

      {{ product.description | prettyprint | paragraph }}
    </li>
  {% endfor %}
</ul>
```

### How to use Liquid?

There are two types of markup in Liquid: Output and Tag.

* The Output markup (which can be translated into text) is inserted between

```liquid
{{ matched pairs of curly brackets (ie, braces) }}
```

* Tag markup (which cannot be translated into text) is inserted between

```liquid
{% matched pairs of curly brackets and percent signs %}
```

### Output

An Output statement is a set of double braces that contain an expression; when the template is rendered, it is replaced by the value of that expression.

Here is a simple example of output:

```liquid
Hello {{name}}
Hello {{user.name}}
Hello {{ 'tobi' }}
```

## Expressions and variables

Expressions are statements that have values. Liquid templates can use expressions in many places; very often in output statements, but also as arguments for tags or filters.

Liquid accepts the following types of expressions:

* **Variables** The most basic type of expression is only the name of a variable. Liquid variables are named as Ruby variables: they must contain alphanumeric characters and low bars, always start with a letter, and contain no symbol type (that is, they should look like `var_name`, and not `$var_name`).
* **Access to array/hashes.** If you have an expression (usually a variable) whose value is an array or hash, you can use a single value of that array/hash as follows:
    * `my_variable [<KEY EXPRESSION>] `— The name of the variable, followed immediately by brackets containing a key expression.
        * For arrays, the key must be a literal integer or an expression that resolves to an integer.
        * For hashes, the key must be a literal quote string or an expression that resolves to a string.
    * `my_hash.key` — Hashes also allow a shorter "dot" notation, where the variable name is followed by a dot and the name of a key. This only works with keys that do not contain spaces, and (unlike bracketed notation) does not allow the use of a key name stored in a variable.
    * Note: If the value of an access expression is also an array or hash, you can access the values from it in the same way, and you can even combine the two methods. (For example, `site.posts [34] .title`.)
* **First and last array.** If you have an expression whose value is an array, you can follow it with `.first` or `.last` to resolve its first or last element.
* **Array size or hash** If you have an expression whose value is an array or hash, you can follow it with `.size` to resolve the number of elements of the original expression, such as an integer.
* **Strings.** Literal strings must be surrounded by double or single quotes (``""My String"`` or `'My String'`). There is no difference; no style allows variable interpolation.
* **Enters.** Integers cannot be quoted.
* **Boolean and nil** The literal values `true`, `false`, and `nil`.

Note that there is no way to write a literal array or hash as an expression; arrays and hashes must be passed to the template, or constructed obliquely with a tag or output statement.

## Filters

The Output markup can accept filters, which modify the result of the Output statement. You can invoke filters by following the main expression of the Output statement with:

* A vertical bar character (`|`)
* The name of the filter
* Optionally, a colon (`:`) and a comma-separated list of additional parameters to the filter. Each additional parameter must be a valid expression, and each filter predefines the parameters it accepts and the order in which they must be passed.

Filters can also be joined together by adding additional filter statements (starting with another vertical bar character). The Output of the previous filter will be the Input for the next one.

```liquid
Hello {{ 'tobi' | upcase }}
Hello tobi has {{ 'tobi' | size }} letters!
Hello {{ '*tobi*' | textilize | upcase }}
Hello {{ 'now' | date: "%Y %h" }}
```

A filter is a Ruby method that takes one or more parameters and returns a value. Parameters are passed to filters by position: the first parameter is the expression that precedes the vertical bar character, and additional parameters can be passed using the syntax `name: arg1, arg2`.

### Standard Filters

* `append` - Add a string *e.g.* <span v-pre> `{{'foo' | append: 'bar'}} #=> 'foobar'` </span> 
* `asset_url` - Generates the URL of an Asset object with a certain size, *e.g.* <span v-pre> `{{asset_obj | asset_url: '640x480'}}` </span>. You can also generate the URL of a CSS or JavaScript template, *e.g.* <span v-pre> `{{'my-css' | asset_url: 'css'}}` </span> or <span v-pre> `{{'my-js' | asset_url: 'js'}}` </span>.
* `base64_decode` - Returns the base64-decoded value of a string *e.g.* <span v-pre> `{% 'Hello world' | base64_encode%} # => 'SGVSBG8GD29YBGQ='` </span>.
* `base64_encode` - Returns the base64-encoded value of a string *e.g.* <span v-pre> `{% 'sgvsBG8gd29yBGQ=' | base64_decode%} # => 'Hello world` </span> string.
* `capitalize` - Put capital word in the input phrase
* `ceil` - Round up a decimal number to the next integer, *e.g.* <span v-pre> `{{4.6 | ceil}} #=> 5` </span> 
* `date` - Format a date ([syntax reference](http://docs.shopify.com/themes/liquid-documentation/filters/additional-filters#date))
* `default` - Returns the given variable unless it is null or empty string, then returns the given value, *e.g.* <span v-pre> `{{undefined_variable | default: "Default value"}} #=> "Default value"` </span> 
* `divided_by` - Division of integers *e.g.* <span v-pre> `{{10 | divided_by:3}} #=> 3` </span> 
* `downcase` - Converts an input string to lowercase
* `escape_once` - Returns an escape version of html without affecting existing escape features
* `escape` - Escape html to a string
* `first` - Get the first element of the last array
* `floor` - Round a decimal number down to the nearest integer, *e.g.* <span v-pre> `{{4.6 | floor}} #=> 4` </span> 
* `hmac_sha1` - Return the SHA-1 hash using a message authentication code (HMAC) from a string, *e.g.* <span v-pre> `{% 'Hello world' | hmac_sha1: 'key'%} # => '2a73959742baf046e6e2e27e5ee94bcfffffff 0af31b1'`</span>.
* `hmac_sha256` - Return the SHA-256 hash using a Message Authentication Code (HMAC) from a string, *e.g.* <span v-pre> `{% 'Hello world' | hmac_sha256: 'key'%} # => 'a82b2e160edaf92a6589dc11160d2a10c04c04d 449840a58717db308c1e3512b039'`</span>.
* `join` - Join elements of the array with a certain character between them.
* `last` - Get the last element of the last array
* `lstrip` - Removes all blanks from the beginning of a string
* `map` - Map/Collect an array into a given property.
* `md5` - Return the MD5 hash of a string, *e.g.* <span v-pre> `{% 'Hello world' | md5%} # => '3e25960a79dbc69b674cd4ec67a72c62'` </span>.
* `minus` - Subtraction *e.g.* <span v-pre> `{{4 | minus:2}} #=> 2` </span> 
* `modulo` - Rest *e.g.* <span v-pre> `{{3 | module:2}} #=> 1` </span> 
* `newline_to_br` - Replaces each new line (\ n) with html space
* `plus` - Sum *e.g.* <span v-pre> `{{'1' | plus: '1'}} #=> 2` </span>, <span v-pre>` {{1 | plus:1}} #=> 2` </span> 
* `prepend` - Precede a string *e.g.* <span v-pre> `{{'bar' | prepend: 'foo'}} #=> 'foobar'` </span> 
* `remove_first` - Removes first occurrence *e.g.* <span v-pre> `{{'barbar' | remove_first: 'bar'}} #=> 'bar'` </span> 
* `remove` - Delete all issues *e.g.* <span v-pre> `{{'foobarfoobar' | remove: 'foo'}} #=> 'barbar'` </span> 
* `replace_first` - Replaces the first occurrence *e.g.* <span v-pre> `{{'barbar' | replace_first: 'bar', 'foo'}} #=> 'foobar'` </span> 
* `replace` - Replaces all issues *e.g.* <span v-pre> `{{'foofoo' | replace: 'foo', 'bar'}} #=> 'barbar'` </span> 
* `reverse` - Reverses the given array.
* `round` - Rounds to the nearest integer or specified number of decimal places *e.g.* <span v-pre> `{{4.5612 | round: 2}} #=> 4.56` </span> 
* `rstrip` - Removes all blanks from the end of a string
* `script_tag` - Generate the HTML tag `<script>` for a JavaScript template, taking as parameters the URL and attributes of the form `attr: 'value'`, *e.g.* <span v-pre> `{{'my-js-url' | script_tag: async: 'async', defer: 'defer'}}` </span> => `<script src='my-js-url' type='text/javascript' async='async' defer='defer'> </script>`
* `sha1` - Return the SHA-1 hash of a string *e.g.* <span v-pre> `{% 'Hello world' | sha1%} # => '7b502c3a1f48c8609ae212cdfb639dee39673f5e'` </span>.
* `sha256` - Return the SHA-256 hash of a string *e.g.* <span v-pre> `{% 'Hello world' | sha256%} # => '64ec88ca00b268e5ba1a35678a1b5316d212f4f366b2477232534a8aeca37f3ccc0756f3cc0756b2477232534a8aeca37f3cc'`</span>.
* `size` - Return the size of an array or string
* `slice` - Divide a string. Take an offset and a length, *e.g.* <span v-pre> `{{"hello" | slice ፦3, 3}} #=> llo` </span> 
* `sort` - Sorts array elements
* `split` - Split a string into a matching pattern *e.g.* <span v-pre> `{{"a~b" | split: "~"}} #=> ['a', 'b']` </span> 
* `strip_html` - Removes html from the string
* `strip_newlines` - Removes all new lines (\ n) from the string
* `strip` - Removes all blanks from both ends of the string.
* `stylesheet_tag` - Generate the HTML tag `<link>` for a CSS template, taking as parameters the URL and attributes of the form `attr: 'value'`, *e.g.* <span v-pre> `{{'my-css-url' | stylesheet_tag: media: 'screen', title: 'color style'}}` </span> => `<link href='my-css-url' rel='stylesheet' type='text/css' media='screen' title='color style' />`
* `times` - Multiply *e.g* <span v-pre> `{{5 | times:4}} #=> 20` </span> 
* `truncate` - Restrict a string to x characters. It also accepts a second parameter to be added to the string *e.g.* <span v-pre> `{{'foobarfoobar' | truncate: 5, '.'}} #=> 'foob'`. </span> 
* `truncatewords` - Restrict a string to x words
* `uniq` - Removes duplicate elements from an array, optionally using a given property to check their uniqueness.
* `upcase` - Converts an input string to uppercase
* `url_encode` - Encode a string to URL

## Tags

Tags are used for template logic. Here is a list of the currently supported tags:

* **assign** - Assigns a value to a variable
* **capture** - A tag block that captures text to a variable.
* **case** - Tag block, case standard statement.
* **comment** - Tag block, comment the text in the block.
* **cycle** - Cycle is usually used within a loop to toggle between values, such as colors or DOM classes.
* **for** - for loop
* **break** - Exits from a loop
* **continue** Skip the remaining code in the current loop and continue with the next loop.
* **if** - Standard if/else block.
* **include** - Includes another template; useful for partials
* **raw** - Temporarily disable tag processing to avoid syntax conflicts.
* **unless** - Copy of the if statement.

### Comments

Any content that is written between the tags `{% comment%}` and `{% endcomment%}` will be converted to a comment.

```liquid
We made 1 million dollars {% comment %} in losses {% endcomment %} this year
```

### Raw

Raw is used to temporarily disable the tag process.
This is useful for generating content (eg, Mustache, Handlebars) that can use a conflicting syntax with other elements.

```liquid
{% raw %}
  In Handlebars, {{ this }} will be HTML-escaped, but {{{ that }}} will not.
{% endraw %}
```

### Else

`if/else` statements should be known from other programming languages. Liquid implements them with the following tags:

* `{% if <CONDITION>%}... {% endif%}` — Attach a section of the template that will only be executed if the condition is true.
* `{% elsif <CONDITION>%}` — Can optionally be used within an `if... endif` block. Specifies another condition; if the initial "if" fails, Liquid tests the "elsif", and executes the next section of the template if it succeeds. Any elsif number can be used in a block `if` * `{% else%}` - Optionally it can be used within a block `if... endif`, _after_ of any "elsif" tag. If all of the above conditions fail, Liquid will execute the template section following the tag "else".
* `{% unless <CONDITION>%}... {% endunless%}` — The reverse side of an "if" statement. Do not use "elsif" or "else" with an unless statement.

The condition of a tag `if`, `elsif` or `unless` must be a normal Liquid expression or a _comparation_ using Liquid expressions. Note that comparison operators are implemented using tags similar to "if"; they don't work anywhere else in Liquid.

The available relational operators are:

* `==,! =, `and` <> `— equal and unequal (the latter two are synonyms)
    * There is a special secret value "empty" (without quotes) to which arrays can be compared; the comparison is true if the array does not have members.
* `<, <=, >, >=` — less/greater than
* `contains` — a wrapper around the `include method? `of Ruby, which is implemented in strings, arrays, and hashes. If the left argument is a string and the right is not, it converts to string the right.

Available Boolean operators are:

* `and`
* `or`

Note that there is NO operator, and also that YOU CAN NOT use parentheses to control the order of operations, as operator precedence appears not to be specified. So when you have doubts, use nested "if" statements.

Liquid expressions are tested to determine their "truthfulness" in what appears to be a Ruby form:

* `true` is true
* `false` is false.
* Any string is true, including an empty string.
* Any array is true.
* Any hash is true.
* Any nonexistent/null value (such as a missing part of a hash) is false.

```liquid
{% if user %}
  Hello {{ user.name }}
{% endif %}
```

```liquid
# Same as above
{% if user != null %}
  Hello {{ user.name }}
{% endif %}
```

```liquid
{% if user.name == 'tobi' %}
  Hello tobi
{% elsif user.name == 'bob' %}
  Hello bob
{% endif %}
```

```liquid
{% if user.name == 'tobi' or user.name == 'bob' %}
  Hello tobi or bob
{% endif %}
```

```liquid
{% if user.name == 'bob' and user.age > 45 %}
  Hello old bob
{% endif %}
```

```liquid
{% if user.name != 'tobi' %}
  Hello non-tobi
{% endif %}
```

```liquid
# Same as above
{% unless user.name == 'tobi' %}
  Hello non-tobi
{% endunless %}
```

```liquid
# Check for the size of an array
{% if user.payments == empty %}
   you never paid !
{% endif %}

{% if user.payments.size > 0  %}
   you paid !
{% endif %}
```

```liquid
{% if user.age > 18 %}
   Login here
{% else %}
   Sorry, you are too young
{% endif %}
```

```liquid
# array = 1,2,3
{% if array contains 2 %}
   array includes 2
{% endif %}
```

```liquid
# string = 'hello world'
{% if string contains 'hello' %}
   string includes 'hello'
{% endif %}
```

### Case Statement

If you need more conditions, you can use the "case" statement:

```liquid
{% case condition %}
{% when 1 %}
hit 1
{% when 2 or 3 %}
hit 2 or 3
{% else %}
... else ...
{% endcase %}
```

*Example: *

```liquid
{% case template %}

{% when 'label' %}
     // {{ label.title }}
{% when 'product' %}
     // {{ product.vendor | link_to_vendor }} / {{ product.title }}
{% else %}
     // {{page_title}}
{% endcase %}
```

### Cycle

Often you have to alternate between different colors or similar tasks. Liquid has built-in support for such operations, using the `cycle` tag.

```liquid
{% cycle 'one', 'two', 'three' %}
{% cycle 'one', 'two', 'three' %}
{% cycle 'one', 'two', 'three' %}
{% cycle 'one', 'two', 'three' %}
```

will result in

```plain
one
two
three
one
```

If no name is provided for the cycle group, then it is assumed that multiple
calls with the same parameters are a group.

If you want to have full control over cycle groups, you can optionally specify
the name of the group. This may even be a variable.

```liquid
{% cycle 'group 1': 'one', 'two', 'three' %}
{% cycle 'group 1': 'one', 'two', 'three' %}
{% cycle 'group 2': 'one', 'two', 'three' %}
{% cycle 'group 2': 'one', 'two', 'three' %}
```

will result in

```text
one
two
one
two
```

### For Loop

Liquid allows `for` loops on collections:

```liquid
{% for item in array %}
  {{ item }}
{% endfor %}
```

#### Types of collections allowed

For loops can iterate over **arrays, hashes, and integer ranges. **

When iterating a hash, `element [0] `contains the key, and `element [1]` contains the value:

```liquid
{% for item in hash %}
  {{ item[0] }}: {{ item[1] }}
{% endfor %}
```

Instead of looping over an existing collection, you can also loop through a range of numbers. Ranges resemble `(1.. 10)` - parentheses containing an initial value, two points and an end value. The start and end values must be integers or expressions that resolve to integers.

```liquid
# if item.quantity is 4...
{% for i in (1..item.quantity) %}
  {{ i }}
{% endfor %}
# results in 1,2,3,4
```

#### Break and continue

You can exit a loop early with the following tags:

* `{% continue%}` - immediately ends the current iteration, and continues the "for" loop with the next value.
* `{% break%}` - immediately ends the current iteration, then completely ends the "for" loop.

Both are only useful when combined with something like an "if" statement.

``` liquid
{% for page in pages %}
# Skip anything in the hidden_pages array, but keep looping over the rest of the values
{% if hidden_pages contains page.url %}
    {% continue %}
{% endif %}
# If it's not hidden, print it.
* [page.title](page.url)
{% endfor %}
```

``` liquid
{% for page in pages %}
* [page.title](page.url)
# After we reach the "cutoff" page, stop the list and get on with whatever's after the "for" loop:
{% if cutoff_page == page.url %}
    {% break %}
{% endif %}
{% endfor %}
```

#### Help Variables

During each `for` loop, the following help variables are available for additional styling needs:

```liquid
forloop.length      # => length of the entire for loop
forloop.index       # => index of the current iteration
forloop.index0      # => index of the current iteration (zero based)
forloop.rindex      # => how many items are still left?
forloop.rindex0     # => how many items are still left? (zero based)
forloop.first       # => is this the first iteration?
forloop.last        # => is this the last iteration?
```

#### Optional arguments

There are several optional arguments in the `for` tag that can influence the items you receive in your loop and the order in which they appear:

* `limit: <INTEGER> `allows you to restrict the number of objects to be obtained.
* `offset: <INTEGER> `allows you to start the collection with the nth item.
* `reversed` iterates about the collection from the last to the first.

Constraint Elements:

```liquid
# array = [1,2,3,4,5,6]
{% for item in array limit:2 offset:2 %}
  {{ item }}
{% endfor %}
# results in 3,4
```

Reversing the loop:

```liquid
{% for item in collection reversed %} {{item}} {% endfor %}
```

A for loop can take an optional `else` clause to display a text block when there are no items in the collection:

```liquid
# items => []
{% for item in items %}
   {{ item.title }}
{% else %}
   There are no items!
{% endfor %}
```

### Variable assignment

You can store data in your own variables, for use in output tags or other tags as desired. The easiest way to create a variable is with the tag `assign`, which has a very easy syntax:

```liquid
{% assign name = 'freestyle' %}

{% for t in collections.tags %}{% if t == name %}
  <p>Freestyle!</p>
{% endif %}{% endfor %}
```

Another way to do this would be to assign `true/false` values to the variable:

```liquid
{% assign freestyle = false %}

{% for t in collections.tags %}{% if t == 'freestyle' %}
  {% assign freestyle = true %}
{% endif %}{% endfor %}

{% if freestyle %}
  <p>Freestyle!</p>
{% endif %}
```

If you want to combine multiple strings into one and save it in a variable, you can do so with the `capture` tag, which "captures" whatever is displayed inside, and then assign the captured value to the given variable instead of showing it on the screen.

```liquid
  {% capture attribute_name %}{{ item.title | handleize }}-{{ i }}-color{% endcapture %}

  <label for="{{ attribute_name }}">Color:</label>
  <select name="attributes[{{ attribute_name }}]" id="{{ attribute_name }}">
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
  </select>
```

## Drops

Modyo has drops available for different contexts within which you can find drops for account, content, channels and customers.

### Account Drops
The drops available globally are:

```
account account:
 - url
 - host
 - disable_modyo_credentials
 - google_key
 - oauth2_callback_url
 - oidc_callback_url
```

### Drops of content
The drops available for content are:

```
space:
 - Enries
 - types
 - name
type:
 - Enries
 - fields
 - name
entry:
 - space
 - category
 - type
 - type_uid
 - tags
 - account_url
 - url
 - author
 - goal
 - fields
field:
 - name
 - type
location:
 - location_street
 - latitude
 - length
category:
 - id
 - slug
 - name
 - url
 - parent
 - children
 - siblings
 - products_url
 - support_url
 - networks_url
 - profiles_url
 - posts_url
 - promotions_url
 - albums_url
 - videos_url
 - files_url
 - audio_url
 - places_url
asset:
 - url
 - thumbnail_url
 - uuid
 - data_file_name
 - name
 - content_type
 - title
 - alt
 - size
 - description
audio_asset:
 - url
file_asset:
 - url
 - thumbnail_url
 - image_thumbnail_url
 - pdf_thumbnail_url
 - is_image
 - is_video
 - is_audio
 - is_pdf
 - is_another
 - temp_url
video_asset:
 - url
 - thumbnail_url
```

### Drops from channels
The drops available for channels are:

```
site:
 - breadcrumb
 - categories
 - csrf_meta_tag
 - url
 - menu_items
 - account_url
 - current_year
 - manifest_url
 - sw_enabled
 - sw_url
 - sw_scope
 - add_parent_breadcrumb
site_search:
 - have_results
 - results
 - have_less_relevant_results
request:
 - user_agent
 - host
 - domain
 - protocol
 - url
 - path
 - interact_url
 - refresh_url
 - comments_url
 - is_app_shell
user_agent:
 - initialize
 - browser
 - browser_version
 - platform
 - platform_version
 - agent
 - is_modyo_shell
page:
 - grid
 - name
 - content
 - title
 - excerpt
 - name
 - url
 - parent
 - description
menu:
 - items
menu_item:
 - label
 - child_items
 - url
 - parameterized_label
 - category
 - position
 - target
widget:
 - id
 - cache_key
 - type
 - created_at
 - css_class
 - width
 - name
 - use_default_title
 - title
 - resolve_type
 - uuid
 - wid
 - permanent_cache
rich_text_widget:
 - html
custom_widget:
 - manager_uid
 - version
text_widget:
 - html
content_list_widget:
 - show_caption
 - Enries
 - context_params
 - space_id
 - type_uid
grid:
 - id
 - cache_key
 - resolve_type
full_three_cols_grid:
 - main_widgets
 - col1_widgets
 - col2_widgets
 - col3_widgets
side_right_three_cols_grid:
 - main_widgets
 - side_right_widgets
 - col1_widgets
 - col2_widgets
 - col3_widgets
side_left_grid:
 - main_widgets
 - side_left_widgets
side_left_one_col_grid:
 - main_widgets
 - side_left_widgets
 - full_widgets
side_right_one_col_grid:
 - main_widgets
 - side_right_widgets
 - full_widgets
full_grid:
 - main_widgets
full_two_cols_grid:
 - main_widgets
 - col1_widgets
 - col2_widgets
side_right_grid:
 - main_widgets
 - side_right_widgets
side_left_three_cols_grid:
 - main_widgets
 - side_left_widgets
 - col1_widgets
 - col2_widgets
 - col3_widgets
```

### Drops by customers
The drops available for customers are:

```
- user:
 - access_token
 - age
 - avatar
 - birth_at
 - change_password_url
 - custom_fields
 - email
 - external_access_token
 - external_user_id
 - female_sex_value
 - first_name
 - genders
 - generated_password
 - id
 - initials
 - last_name
 - male_sex_value
 - member_since
 - name
 - notifications
 - profile_url
 - sex
 - target_names
 - targets
 - undefined_sex_value
 - unread_notifications
 - unread_notifications_count
 - username
 - uuid
notification:
 - subject
 - body
 - sent_at
 - url
 - opened
- user_agent:
 - agent
 - browser
 - browser_version
 - initialize
 - is_modyo_shell
 - platform
 - platform_version
- user_session:
 - email
 - password
- target:
 - id
 - name
- form:
 - slug
- form_response:
 - description
 - name
 - parse_answer
 - parse_answers
 - questions
- question:
 - allow_alternatives
 - alternatives
 - form
 - id
 - label
- alternative:
 - id
 - question
- answer:
 - alternative
 - dynamic_target_url
 - edit_url
 - id
 - question
 - response
 - text_field
 - type
```
