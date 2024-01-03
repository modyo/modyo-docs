---
search: true
---

# Liquid Markup

Liquid is a language that we use on Modyo Platform to display the content of the Content module on your Sites. Using Liquid you can generate a template on your site that displays the information of your entries dynamically as well as control what to display using flow or iteration control.

In Liquid, as in many other programming languages, you have to use reserved words to display dynamic content. These calls are executed “just-in-time”, allowing you to do “lazy loading” only when needed.

Liquid is written with very specific requirements:

* It has to have beautiful and simple markup. Template engines which don't produce good looking markup are no fun to use.
* It needs to be non-evaluable and safe. Liquid templates are made so that users can edit them. You don't want to run code on your server which your users wrote.
* It has to be stateless. Compile and render steps have to be separate so that the expensive parsing and compiling can be done once and later on you can just render it passing in a hash with local variables and objects.

### Why use Liquid?

* You want to allow your users to edit the appearance of your application but don't want them to run **insecure code on your server**.
* You want to render templates directly from a database.
* You like smart style template engines (PHP).
* You need a template engine which does HTML just as well as emails.
* You don't like the markup of your current templating engine.

### What does Liquid look like?

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

Below we'll look at several examples of the most common uses when writing with Liquid.

#### Objects

An object is that which contains the content that Liquid displays on the screen. You can display objects or variables using a double bracket ``{{ }}``, for example:

To display the name of the post on your page use:

```liquid
{{ entry.meta.name }}
```

#### Tags

With Tags you can add flow and iteration control to your pages. You need to encapsulate the language with square brackets and percentage {% %} to use Tags, for example:

```Liquid
{% if product.name == “Electronic Banking”%}
 Download our electronic banking to your cell phone!
{% endif%}
```

### Drops
Modyo extends Liquid's functionality through variables created for Modyo Platform called Drops. We currently offer drops from more than 20 different categories for all modules on the platform. 

For more information on how to use Drops, see [Drops](/en/platform/channels/drops).


## Expressions and Variables

Expressions are statements that have values. Liquid templates can use expressions in several places; most often in output statements, but also as arguments to some tags or filters.

Liquid accepts the following kinds of expressions:

* **Variables.** The most basic type of expression is just the name of a variable. Liquid variables are named like Ruby variables: they must contain alphanumeric characters and underscores, should always start with a letter, and not have any kind of leading symbol (that is, they must look like `var_name`, not `$var_name`).
* **Array or hash access.** If you have an expression (usually a variable) whose value is an array or hash, you can use a single value from that array/hash as follows:
    * `my_variable[<KEY EXPRESSION>]` — The name of the variable, followed immediately by square brackets containing a key expression.
        * For arrays, the key must be a literal integer or an expression that resolves to an integer.
        * For hashes, the key must be a literal quotation string or an expression that resolves to a string.
    * `my_hash.key` — Hashes also allow a shorter "dot" notation, where the name of the variable is followed by a period and the name of a key. This only works with keys that don't contain spaces, and (unlike the square bracket notation) does not allow the use of a key name stored in a variable.
    * Note: if the value of an access expression is also an array or hash, you can access values from it in the same way, and can even combine the two methods. (For example, `site.posts[34].title`.)
* **Array first and last.** If you have an expression whose value is an array, you can follow it with `.first` or `.last` to resolve to its first or last element.
* **Array or hash size.** If you have an expression whose value is an array or hash, you can follow it with `.size` to resolve to the number of elements in the original expression, as an integer.
* **Strings.** Literal strings must be surrounded by double or single quotes (``"my string"`` or `'my string'`). There is no difference; neither style allows variable interpolation.
* **Integers.** Integers must not be quoted.
* **Booleans and nil.** The literal values `true`, `false`, and `nil`.

To build an input array, you cannot do it in a control statement. You need to do it in a separate statement and then use that as a variable in a control statement.

## Filters

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

* `append` - Add a string *e.g.* <span v-pre>`{{ 'foo' | append:'bar' }} #=> 'foobar'`</span>
* `asset_url` - Generates the URL of an Asset object with a specific size, *e.g.* <span v-pre>`{{ asset_obj | asset_url: '640x480' }}`</span>. It can also generate the URL of a CSS or JavaScript template, *e.g.* <span v-pre>`{{ 'my-css' | asset_url: 'css' }}`</span> or <span v-pre>`{{ 'my-js' | asset_url: 'js' }}`</span>.
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

## Tags

Tags (tags) are used for template logic. Here is a list of currently supported tags:

* **assign** - Assigns a value to a variable
* **capture** - Tag block that captures text to a variable.
* **case** - Tag block, case standard statement.
* **comment** - Block tag, comment on the text in the block.
* **cycle** - Cycle is generally used within a loop to toggle between values, such as colors or DOM classes.
* **for** - Loop for
* **break** - Exits a loop
* **continue** Skip the remaining code in the current loop and continue with the next loop.
* **if** - Standard if/else block.
* **include** - Includes another template; useful for partials
* **raw** - Temporarily disable tag processing to avoid syntax conflicts.
* **unless** - Copy of the if statement.

### Comments

Any content that is written between the tags `{% comment %}` and `{% endcomment %}` will be converted to a comment.

```liquid
We made 1 million dollars {% comment %} in losses {% endcomment %} this year
```

### Raw

Raw is used to temporarily disable the tag process.
This is useful for generating content (eg, Mustache, Handlebars) that can use conflicting syntax with other elements.

```liquid
{% raw %}
  In Handlebars, {{ this }} will be HTML-escaped, but {{{ that }}} will not.
{% endraw %}
```

### If/Else

The `if/else` statements should be known from other programming languages. Liquid implements them with the following tags:

* `{% if <CONDITION> %} ... {% endif %}` — Attach a section of the template that will only be executed if the condition is true.
* `{% elsif <CONDITION> %}` — Can optionally be used within an `if .... endif` block. Specifies another condition; If the initial "if" fails, Liquid tests the "elsif",, and if it passes, executes the next section of the template. Any number of elsif statements can be used in an `if` * `{% else %}` - Can be used within an `if... endif` block, _after_ any "elsif" tag. If all the above conditions fail, Liquid will execute the template section following the "else" tag.
* `{% unless <CONDITION> %} ... {% endunless %}` — The reverse of an "if" statement. Do not use "elsif" or "else" with an unless statement.

The condition of an `if`,` elsif` or `unless` tag must be a normal Liquid expression or a _comparison_ using Liquid expressions. Note that relational operators are implemented using tags similar to "if"; they don't work anywhere else in Liquid.

The available relational operators are:

* `==,! =, `and` <> `— equal and unequal (the last two are synonyms)
    * There is a special secret value "empty" (without quotes) to compare arrays; The comparison is true if the array has no items.
* `<, <=, >, >=` — less/greater than
* `contains` - a wrapper around Ruby's `include?` method, which is implemented in strings, arrays and hashes. If the left argument is a string and the right is not, this will convert the right to a string.

The available Boolean operators are:

* `and`
* `or`

Note that there is NO "no" operator, and you CANNOT use parentheses to control the order of operations, as the precedence of each operator will appear unspecified. When in doubt, use nested "if" statements.

Liquid expressions are tested to determine their "truthiness" in similar to Ruby:

* `true` is true
* `false` is false.
* Any string is true, including an empty string.
* Any array is true.
* Any hash is true.
* Any non-existent/null value (as a missing part of a hash) is false.

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

If you need to evaluate multiple conditions, you can use the "case" statement:

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

You often have to alternate between different colors or similar tasks. Liquid has built-in support for such operations, using the `cycle` tag.

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
Calls with the same parameters are a group.

If you want to have full control over the cycle groups, you can optionally specify
The name of the group. This can even be a variable.

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

For loops can iterate over **arrays, hashes and integer ranges.**

When iterating over a hash, `element[0]` contains the key, and `element[1]` contains the value:

```liquid
{% for item in hash %}
  {{ item[0] }}: {{ item[1] }}
{% endfor %}
```

Instead of looping over an existing collection, you can also loop through a range of numbers. The ranges appear as `(1..10)`—parentheses that contain an initial value, two points and an end value. The initial and final values must be integers or expressions that are resolved to whole numbers.

```liquid
# if item.quantity is 4...
{% for i in (1..item.quantity) %}
  {{ i }}
{% endfor %}
# results in 1,2,3,4
```

#### Break and continue

You can exit a loop early with the following tags:

* `{% continue%}` - immediately ends the current iteration, and continues the "for" loop with the following value.
* `{% break%}` - immediately ends the current iteration, then exits the "for" loop.

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

#### Help variables

During each `for` loop, the following help variables are available for additional style needs:

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

There are several optional arguments in the `for` tag that can influence the elements you receive in your loop and in the order in which they appear:

* `limit: <INTEGER> ` allows you to restrict the amount of objects to obtain.
* `offset: <INTEGER> ` allows you to start the collection with the nth item.
* `reversed` iterates over the collection from the last to the first.

Restriction elements:

```liquid
# array = [1,2,3,4,5,6]
{% for item in array limit:2 offset:2 %}
  {{ item }}
{% endfor %}
# results in 3,4
```

Loop Inversion:

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

You can store data in your own variables and use them in output tags or any other tags you wish. The easiest way to create a variable is with the `assign` tag with simple syntax:

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

If you want to combine several strings into one and save it in one variable, you can do it with the `capture` tag, which "captures" whatever is displayed inside, and then assigns the captured value to the given variable.

```liquid
  {% capture attribute_name %}{{ item.title | handleize }}-{{ i }}-color{% endcapture %}

  <label for="{{ attribute_name }}">Color:</label>
  <select name="attributes[{{ attribute_name }}]" id="{{ attribute_name }}">
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
  </select>
```