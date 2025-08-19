---
search: true
---

# Liquid Markup

Liquid is a language used on Modyo Platform to display content from the Content module on your Sites. It allows you to generate templates that dynamically display entry information and control visualization using flow or iteration.

In Liquid, as in other programming languages, reserved words are used to display dynamic content. These calls are executed "just-in-time," which allows for "lazy loading" only when necessary.

Liquid is designed with very specific requirements:

- It must have clean and simple markup. Template engines that do not produce attractive markup are not pleasant to use.
- It must be non-evaluable and secure. Liquid templates are designed for users to edit them, preventing the execution of insecure code on the server.
- It must be stateless. Compilation and rendering steps must be separated so that parsing and compilation are done once, and then it can be rendered by passing a hash with local objects and variables.

### Why use Liquid?

- You want to allow users to edit the appearance of your application without executing **insecure code on your server**.
- You want to render your templates directly from the database.
- You prefer smart template engines (PHP style).
- You need a template engine that works well in both HTML and emails.
- You don't like the markup of your current template engine.

### How does Liquid look?

```liquid
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

Below, we will see several examples of the most common uses when writing with Liquid.

#### Objects

An object is what contains the content that Liquid displays on the screen. Objects or variables can be displayed using double brackets `{{ }}`, for example:

To display the entry name on your page, use:

```liquid
{{ entry.meta.name }}
```

#### Tags

With Tags, you can add flow and iteration control to your pages. You need to encapsulate the language with square brackets and percentage `{% %}` to use Tags, for example:

```liquid
{% if product.name == "Banca Electrónica" %}
 ¡Download our electronic banking to your cell phone!
{% endif %}
```

### Objects
Modyo extends Liquid's functionality through variables created for Modyo Platform, called Objects. Currently, we offer objects from more than 20 different categories for all modules on the platform.

For more information on how to use Objects, go to [Objects](/en/platform/channels/liquid-markup/objects).


## Expressions and Variables

Expressions are statements that have values. Liquid templates can use expressions in many places; frequently in output statements, but also as arguments for tags or filters.

Liquid accepts the following types of expressions:

- **Variables**: The most basic type of expression is the name of a variable. Liquid variables are named like Ruby variables: they must contain alphanumeric characters and underscores, always start with a letter, and not contain any type of symbol (i.e., they must look like `var_name`, not `$var_name`).
- **Array/hash access**: If you have an expression (usually a variable) whose value is an array or hash, you can use a single value from that array/hash as follows:
    * `my_variable[<KEY EXPRESSION>]` — The name of the variable, immediately followed by square brackets containing a key expression.
        * For arrays, the key must be a literal integer or an expression that resolves to an integer.
        * For hashes, the key must be a literal string in quotes or an expression that resolves to a string.
    * `my_hash.key`: Hashes also allow a shorter "dot" notation, where the variable name is followed by a period and a key name. This only works with keys that do not contain spaces and (unlike bracket notation) does not allow the use of a key name stored in a variable.
    * Note: If the value of an access expression is also an array or hash, you can access values in the same way, and even combine the two methods (e.g., `site.posts[34].title`).
- **First and last array element**: If you have an expression whose value is an array, you can use `.first` or `.last` to get its first or last element.
- **Array or hash size**: If you have an expression whose value is an array or hash, you can use `.size` to get the number of elements of the original expression as an integer.
- **Strings**: Literal strings must be enclosed in double or single quotes (e.g., `"my string"` or `'my string'`). There is no difference; neither style allows variable interpolation.
- **Integers**: Integers cannot be quoted.
- **Booleans and nil**: The literal values `true`, `false`, and `nil`.

Note that there is no way to write a literal array or hash as an expression; arrays and hashes must be passed to the template or built obliquely with a tag or an output statement.

## Filters

Output markup can accept filters that modify the result of the output statement. You can invoke filters by following the main expression of the output statement with:

- A vertical bar character (`|`).
- The filter name.
- Optionally, a colon (`:`) and a comma-separated list of additional parameters. Each additional parameter must be a valid expression, and each filter predefines the parameters it accepts and their order.

Filters can also be chained by adding additional filter statements (starting with another vertical bar character). The output of the previous filter will be the input for the next one.

```liquid
Hello {{ 'tobi' | upcase }}
Hello tobi has {{ 'tobi' | size }} letters!
Hello {{ '*tobi*' | textilize | upcase }}
Hello {{ 'now' | date: "%Y %h" }}
```

A filter is a Ruby method that takes one or more parameters and returns a value. Parameters are passed to filters by position: the first parameter is the expression preceding the vertical bar character, and additional parameters can be passed using the `name: arg1, arg2` syntax.

### Standard filters

- `append`: Adds a string (e.g., <span v-pre>`{{ 'foo' | append:'bar' }}`</span>).
- `asset_url`: Generates the URL of an Asset object with a specific size (e.g., <span v-pre>`{{ asset_obj | asset_url: '640x480' }}`</span>). It can also generate the URL of a CSS or JavaScript template (e.g., <span v-pre>`{{ 'my-css' | asset_url: 'css' }}`</span> or <span v-pre>`{{ 'my-js' | asset_url: 'js' }}`</span>).
- `base64_decode`: Returns the Base64-decoded value of a string (e.g., <span v-pre> `{% 'Hello world' | base64_encode %} # => 'SGVsbG8gd29ybGQ='`</span>).
- `base64_encode`: Returns the Base64-encoded value of a string (e.g., <span v-pre>`{% 'SGVsbG8gd29ybGQ=' | base64_decode %} # => 'Hello world'`</span>).
- `capitalize`: Capitalizes the first letter of each word in the input sentence.
- `ceil`: Rounds a decimal number up to the nearest integer (e.g., <span v-pre>`{{ 4.6 | ceil }} #=> 5`</span>).
- `date`: Formats a date ([syntax reference](https://shopify.dev/api/liquid/filters#date)).
- `default`: Returns the given variable, unless it is null or an empty string; in that case, it returns the specified value (e.g., <span v-pre>`{{ undefined_variable | default: "Default value" }} #=> "Default value"`</span>).
- `divided_by`: Performs an integer division (e.g., <span v-pre>`{{ 10 | divided_by:3 }} #=> 3`</span>).
- `downcase`: Converts an input string to lowercase.
- `escape_once`: Returns an HTML escaped version without affecting existing escape entities.
- `escape`: Escapes HTML to a string.
- `first`: Gets the first element of the array.
- `floor`: Rounds a decimal number down to the nearest integer (e.g., <span v-pre>`{{ 4.6 | floor }} #=> 4`</span>).
- `format_date`: Formats a date with the site's localization, using the same syntax as `date`.
- `hmac_sha1`: Returns the SHA-1 hash using a message authentication code (HMAC) of a string (e.g., <span v-pre>`{% 'Hello world' | hmac_sha1: 'key' %} # => '2a73959742baf046e6e2e27e5ee94bcff0af31b1'`</span>).
- `hmac_sha256`: Returns the SHA-256 hash using a message authentication code (HMAC) of a string (e.g., <span v-pre>`{% 'Hello world' | hmac_sha256: 'key' %} # => 'a82b2e160edaf92a6589dc11160d2a10c04449840a58717db308c1ee3512b039'`</span>).
- `join`: Joins array elements with a specific character between them.
- `last`: Gets the last element of the array.
- `lstrip`: Removes all white spaces from the beginning of a string.
- `map`: Maps/collects an array on a given property.
- `md5`: Returns the MD5 hash of a string (e.g., <span v-pre>`{% 'Hello world' | md5 %} # => '3e25960a79dbc69b674cd4ec67a72c62'`</span>).
- `minus`: Subtracts (e.g., <span v-pre>`{{ 4 | minus:2 }} #=> 2`</span>).
- `modulo`: Returns the remainder (e.g., <span v-pre>`{{ 3 | modulo:2 }} #=> 1`</span>).
- `newline_to_br`: Replaces each new line (`\n`) with an HTML line break (`<br>`).
- `plus`: Adds (e.g., <span v-pre>`{{ '1' | plus:'1' }} #=> 2`</span>, <span v-pre>`{{ 1 | plus:1 }} #=> 2`</span>).
- `prepend`: Prepends a string (e.g., <span v-pre>`{{ 'bar' | prepend:'foo' }} #=> 'foobar'`</span>).
- `remove_first`: Removes the first occurrence (e.g., <span v-pre>`{{ 'barbar' | remove_first:'bar' }} #=> 'bar'`</span>).
- `remove`: Removes all occurrences (e.g., <span v-pre>`{{ 'foobarfoobar' | remove:'foo' }} #=> 'barbar'`</span>).
- `replace_first`: Replaces the first occurrence (e.g., <span v-pre>`{{ 'barbar' | replace_first:'bar','foo' }} #=> 'foobar'`</span>).
- `replace`: Replaces all occurrences (e.g., <span v-pre>`{{ 'foofoo' | replace:'foo','bar' }} #=> 'barbar'`</span>).
- `reverse`: Reverses the array.
- `round`: Rounds to the nearest integer or to the specified number of decimals (e.g., <span v-pre>`{{ 4.5612 | round: 2 }} #=> 4.56`</span>).
- `rstrip`: Removes all white spaces from the end of a string.
- `script_tag`: Generates the HTML `<script>` tag for a JavaScript template, taking the URL and attributes as parameters (e.g., `attr: 'value'`, <span v-pre>`{{ 'my-js-url' | script_tag: async: 'async', defer: 'defer' }}`</span> => `<script src='my-js-url' type='text/javascript' async='async' defer='defer'></script>`).
- `sha1`: Returns the SHA-1 hash of a string (e.g., <span v-pre>`{% 'Hello world' | sha1 %} # => '7b502c3a1f48c8609ae212cdfb639dee39673f5e'`</span>).
- `sha256`: Returns the SHA-256 hash of a string (e.g., <span v-pre>`{% 'Hello world' | sha256 %} # => '64ec88ca00b268e5ba1a35678a1b5316d212f4f366b2477232534a8aeca37f3c'`</span>).
- `size`: Returns the size of an array or string.
- `slice`: Divides a string. Takes an offset and a length (e.g., <span v-pre>`{{ "hello" | slice: -3, 3 }} #=> llo`</span>).
- `sort`: Sorts array elements.
- `split`: Splits a string by a matching pattern (e.g., <span v-pre>`{{ "a~b" | split:"~" }} #=> ['a','b']`</span>).
- `strip_html`: Removes HTML from the string.
- `strip_newlines`: Removes all new lines (`\n`) from the string.
- `strip`: Removes all white spaces from both ends of the string.
- `stylesheet_tag`: Generates the HTML `<link>` tag for a CSS template, taking the URL and attributes as parameters (e.g., `attr: 'value'`, <span v-pre>`{{ 'my-css-url' | stylesheet_tag: media: 'screen', title: 'color style' }}`</span> => `<link href='my-css-url' rel='stylesheet' type='text/css' media='screen' title='color style' />`).
- `times`: Multiplies (e.g., <span v-pre>`{{ 5 | times:4 }} #=> 20`</span>).
- `truncate`: Restricts a string to `x` characters. It also accepts a second parameter that will be added to the string (e.g., <span v-pre>`{{ 'foobarfoobar' | truncate: 5, '.' }} #=> 'foob.'`</span>).
- `truncatewords`: Restricts a string to `x` words.
- `uniq`: Removes duplicate elements from an array, optionally using a property to check for uniqueness.
- `upcase`: Converts an input string to uppercase.
- `url_encode`: Encodes a string to URL.

## Tags

Tags are used for template logic. Here is a list of currently supported tags:

- **assign**: Assigns a value to a variable.
- **capture**: Block tag that captures text to a variable.
- **case**: Block tag, standard `case` statement.
- **comment**: Block tag, comments out text in the block.
- **cycle**: Generally used within a loop to alternate between values, such as colors or DOM classes.
- **for**: `for` loop.
- **break**: Exits a loop.
- **continue**: Skips the remaining code in the current iteration and continues with the next iteration of the loop.
- **if**: Standard `if/else` block.
- **include**: Includes another template; useful for partials.
- **raw**: Temporarily disables tag processing to avoid syntax conflicts.
- **unless**: Copy of the `if` statement.

### Comments

Any content written between the `{% comment %}` and `{% endcomment %}` tags will be converted to a comment.

```liquid
We made 1 million dollars {% comment %} in losses {% endcomment %} this year
```

### Raw

Raw is used to temporarily disable the tag process.
This is useful for generating content (e.g., Mustache, Handlebars) that may use conflicting syntax with other elements.

```liquid
{% raw %}
  In Handlebars, {{ this }} will be HTML-escaped, but {{{ that }}} will not.
{% endraw %}
```

### If / Else

The `if / else` statements are common in other programming languages. Liquid implements them with the following tags:

- `{% if <CONDITION> %} ... {% endif %}`: Attaches a section of the template that will only be executed if the condition is `true`.
- `{% elsif <CONDITION> %}`: Can optionally be used within an `if ... endif` block. Specifies another condition; if the initial `if` fails, Liquid tests the `elsif` and executes the next section of the template if successful. Any number of `elsif` can be used in an `if` block.
- `{% else %}`: Optionally, can be used within an `if... endif` block, after any `elsif` tag. If all previous conditions fail, Liquid will execute the template section following the `else` tag.
- `{% unless <CONDITION> %} ... {% endunless %}`: The reverse of an `if` statement. Do not use `elsif` or `else` with an `unless` statement.

The condition of an `if`, `elsif`, or `unless` tag must be a normal Liquid expression or a _comparison_ using Liquid expressions. Note that relational operators are implemented using tags similar to `if`; they do not work anywhere else in Liquid.

The available relational operators are:

- `==, !=,` and `<>`: Equal and unequal (the latter two are synonyms).
    * There is a special "empty" value (without quotes) that arrays can be compared with; the comparison is true if the array has no members.
- `<, <=, >, >=`: Less/greater than.
- `contains`: A wrapper around Ruby's `include?` method, implemented in strings, arrays, and hashes. If the left argument is a string and the right is not, it converts the right to a string.

The available Boolean operators are:

- `and`.
- `or`.

Note that there is NO "not" operator, and you CANNOT use parentheses to control the order of operations, as the precedence of operators appears unspecified. When in doubt, use nested `if` statements.

Liquid expressions are tested to determine their "truthiness" similarly to Ruby:

- `true` is true.
- `false` is false.
- Any string is `true`, including an empty string.
- Any array is `true`.
- Any hash is `true`.
- Any non-existent/null value (as a missing part of a hash) is `false`.

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

If you need more conditions, you can use the `case` statement:

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

*Example:*

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

It is often necessary to alternate between different colors or similar tasks. Liquid has built-in support for such operations, using the `cycle` tag.

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

If no name is provided for the `cycle` group, it is assumed that multiple
calls with the same parameters form a group.

If you want to have full control over the `cycle` groups, you can optionally specify
the group name. This can even be a variable.

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

Liquid allows `for` loops over collections:

```liquid
{% for item in array %}
  {{ item }}
{% endfor %}
```

#### Types of collections allowed

`for` loops can iterate over **arrays, hashes, and integer ranges.**

When iterating a hash, `the_element[0]` contains the key, and `the_element[1]` contains the value:

```liquid
{% for item in hash %}
  {{ item[0] }}: {{ item[1] }}
{% endfor %}
```

Instead of iterating over an existing collection, you can also iterate through a range of numbers. Ranges are defined as `(1..10)` (parentheses containing an initial value, two dots, and a final value). The initial and final values must be integers or expressions that resolve to integers.

```liquid
# if item.quantity is 4...
{% for i in (1..item.quantity) %}
  {{ i }}
{% endfor %}
# results in 1,2,3,4
```

#### Break and continue

You can exit a loop early with the following tags:

- `{% continue %}`: Immediately ends the current iteration and continues the `for` loop with the next value.
- `{% break %}`: Immediately ends the current iteration and then completely ends the `for` loop.

Both are useful only when combined with an `if` statement.

``` liquid
{% for page in pages %}
# Skip anything in the hidden_pages array, but keep looping over the rest of the values
{% if hidden_pages contains page.url %}
    {% continue %}
{% endif %}
# If it's not hidden, print it.
- [page.title](page.url)
{% endfor %}
```

```liquid
{% for page in pages %}
- [page.title](page.url)
# After we reach the "cutoff" page, stop the list and get on with whatever's after the "for" loop:
{% if cutoff_page == page.url %}
    {% break %}
{% endif %}
{% endfor %}
```

#### Helper variables

During each `for` loop, the following helper variables are available for additional styling needs:

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

There are several optional arguments in the `for` tag that can influence the elements you receive in your loop and their order:

- `limit:<INTEGER>` allows you to restrict the number of objects to obtain.
- `offset:<INTEGER>` allows you to start the collection with the nth item.
- `reversed` iterates over the collection from last to first.

Restriction elements:

```liquid
# array = [1,2,3,4,5,6]
{% for item in array limit:2 offset:2 %}
  {{ item }}
{% endfor %}
# results in 3,4
```

Loop inversion:

```liquid
{% for item in collection reversed %} {{item}} {% endfor %}
```

A for loop can take an optional `else` clause to display a block of text when there are no items in the collection:

```liquid
# items => []
{% for item in items %}
   {{ item.title }}
{% else %}
   There are no items!
{% endfor %}
```

### Variable assignment

You can store data in your own variables to use them in output tags or other tags. The simplest way to create a variable is with the `assign` tag, which has a very easy syntax:

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

If you want to combine several strings into one and save it in a variable, you can do it with the `capture` tag, which "captures" what is displayed inside and then assigns the captured value to the given variable instead of displaying it on the screen.

```liquid
  {% capture attribute_name %}{{ item.title | handleize }}-{{ i }}-color{% endcapture %}

  <label for="{{ attribute_name }}">Color:</label>
  <select name="attributes[{{ attribute_name }}]" id="{{ attribute_name }}">
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
  </select>
```