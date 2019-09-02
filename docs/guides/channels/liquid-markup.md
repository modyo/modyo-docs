---
search: true
---

# Liquid markup

## Introduction

Liquid is a template engine which was written with very specific requirements:

* It has to have beautiful and simple markup. Template engines which don't produce good looking markup are no fun to use.
* It needs to be non evaling and secure. Liquid templates are made so that users can edit them. You don't want to run code on your server which your users wrote.
* It has to be stateless. Compile and render steps have to be separate so that the expensive parsing and compiling can be done once and later on you can just render it passing in a hash with local variables and objects.

## Why you should use Liquid

* You want to allow your users to edit the appearance of your application but don't want them to run **insecure code on your server**.
* You want to render templates directly from the database.
* You like smarty (PHP) style template engines.
* You need a template engine which does HTML just as well as emails.
* You don't like the markup of your current templating engine.

## What does it look like?

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

## How to use Liquid

Install Liquid by adding `gem 'liquid'` to your gemfile.

Liquid supports a very simple API based around the Liquid::Template class.
For standard use you can just pass it the content of a file and call render with a parameters hash.

```ruby
@template = Liquid::Template.parse("hi {{name}}") # Parses and compiles the template
@template.render('name' => 'tobi')                # => "hi tobi"
```

### Error Modes

Setting the error mode of Liquid lets you specify how strictly you want your templates to be interpreted.
Normally the parser is very lax and will accept almost anything without error. Unfortunately this can make
it very hard to debug and can lead to unexpected behaviour.

Liquid also comes with a stricter parser that can be used when editing templates to give better error messages
when templates are invalid. You can enable this new parser like this:

```ruby
Liquid::Template.error_mode = :strict # Raises a SyntaxError when invalid syntax is used
Liquid::Template.error_mode = :warn # Adds errors to template.errors but continues as normal
Liquid::Template.error_mode = :lax # The default mode, accepts almost anything.
```

If you want to set the error mode only on specific templates you can pass `:error_mode` as an option to `parse`:

```ruby
Liquid::Template.parse(source, :error_mode => :strict)
```

This is useful for doing things like enabling strict mode only in the theme editor.

It is recommended that you enable `:strict` or `:warn` mode on new apps to stop invalid templates from being created.
It is also recommended that you use it in the template editors of existing apps to give editors better error messages.

### Undefined variables and filters

By default, the renderer doesn't raise or in any other way notify you if some variables or filters are missing, i.e. not passed to the `render` method.
You can improve this situation by passing `strict_variables: true` and/or `strict_filters: true` options to the `render` method.
When one of these options is set to true, all errors about undefined variables and undefined filters will be stored in `errors` array of a `Liquid::Template` instance.
Here are some examples:

```ruby
template = Liquid::Template.parse("{{x}} {{y}} {{z.a}} {{z.b}}")
template.render({ 'x' => 1, 'z' => { 'a' => 2 } }, { strict_variables: true })
#=> '1  2 ' # when a variable is undefined, it's rendered as nil
template.errors
#=> [#<Liquid::UndefinedVariable: Liquid error: undefined variable y>, #<Liquid::UndefinedVariable: Liquid error: undefined variable b>]
```

```ruby
template = Liquid::Template.parse("{{x | filter1 | upcase}}")
template.render({ 'x' => 'foo' }, { strict_filters: true })
#=> '' # when at least one filter in the filter chain is undefined, a whole expression is rendered as nil
template.errors
#=> [#<Liquid::UndefinedFilter: Liquid error: undefined filter filter1>]
```

If you want to raise on a first exception instead of pushing all of them in `errors`, you can use `render!` method:

```ruby
template = Liquid::Template.parse("{{x}} {{y}}")
template.render!({ 'x' => 1}, { strict_variables: true })
#=> Liquid::UndefinedVariable: Liquid error: undefined variable y
```

There are two types of markup in Liquid: Output and Tag.

* Output markup (which may resolve to text) is surrounded by

```liquid
{{ matched pairs of curly brackets (ie, braces) }}
```

* Tag markup (which cannot resolve to text) is surrounded by

```liquid
{% matched pairs of curly brackets and percent signs %}
```

## Output

An output statement is a set of double curly braces containing an expression; when the template is rendered, it gets replaced with the value of that expression.

Here is a simple example of output:

```liquid
Hello {{name}}
Hello {{user.name}}
Hello {{ 'tobi' }}
```

### Expressions and Variables

Expressions are statements that have values. Liquid templates can use expressions in several places; most often in output statements, but also as arguments to some tags or filters.

Liquid accepts the following kinds of expressions:

* **Variables.** The most basic kind of expression is just the name of a variable. Liquid variables are named like Ruby variables: they should consist of alphanumeric characters and underscores, should always start with a letter, and do not have any kind of leading sigil (that is, they look like `var_name`, not `$var_name`).
* **Array or hash access.** If you have an expression (usually a variable) whose value is an array or hash, you can use a single value from that array/hash as follows:
    * `my_variable[<KEY EXPRESSION>]` — The name of the variable, followed immediately by square brackets containing a key expression. 
        * For arrays, the key must be a literal integer or an expression that resolves to an integer. 
        * For hashes, the key must be a literal quoted string or an expression that resolves to a string. 
    * `my_hash.key` — Hashes also allow a shorter "dot" notation, where the name of the variable is followed by a period and the name of a key. This only works with keys that don't contain spaces, and (unlike the square bracket notation) does not allow the use of a key name stored in a variable.
    * Note: if the value of an access expression is also an array or hash, you can access values from it in the same way, and can even combine the two methods. (For example, `site.posts[34].title`.)
* **Array first and last.** If you have an expression whose value is an array, you can follow it with `.first` or `.last` to resolve to its first or last element.
* **Array or hash size.** If you have an expression whose value is an array or hash, you can follow it with `.size` to resolve to the number of elements in the original expression, as an integer.
    * If you know of any other special "methods" like this in Liquid, please update this section.
* **Strings.** Literal strings must be surrounded by double quotes or single quotes (`"my string"` or `'my string'`). There is no difference; neither style allows variable interpolation.
* **Integers.** Integers must not be quoted.
* **Booleans and nil.** The literal values `true`, `false`, and `nil`.

Note that there is no way to write a literal array or hash as an expression; arrays and hashes must be passed into the template, or constructed obliquely with a tag or output statement.

### Advanced output: Filters

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

Under the hood, a filter is a Ruby method that takes one or more parameters and returns a value. Parameters are passed to filters by position: the first parameter is the expression preceding the pipe character, and additional parameters can be passed using the `name: arg1, arg2` syntax described above. For more on implementing filters, see [Liquid for Programmers.](./Liquid-for-Programmers)

### Standard Filters

* `append` - append a string *e.g.* <span v-pre>`{{ 'foo' | append:'bar' }} #=> 'foobar'`</span>
* `capitalize` - capitalize words in the input sentence
* `ceil` - rounds a number up to the nearest integer, *e.g.* <span v-pre>`{{ 4.6 | ceil }} #=> 5`</span>
* `date` - reformat a date ([syntax reference](http://docs.shopify.com/themes/liquid-documentation/filters/additional-filters#date))
* `default` - returns the given variable unless it is null or the empty string, when it will return the given value, *e.g.* <span v-pre>`{{ undefined_variable | default: "Default value" }} #=> "Default value"`</span>
* `divided_by` - integer division *e.g.* <span v-pre>`{{ 10 | divided_by:3 }} #=> 3`</span>
* `downcase` - convert an input string to lowercase
* `escape_once` - returns an escaped version of html without affecting existing escaped entities
* `escape` - html escape a string
* `first` - get the first element of the passed in array
* `floor` - rounds a number down to the nearest integer, *e.g.* <span v-pre>`{{ 4.6 | floor }} #=> 4`</span>
* `join` - join elements of the array with certain character between them
* `last` - get the last element of the passed in array
* `lstrip` - strips all whitespace from the beginning of a string
* `map` - map/collect an array on a given property
* `minus` - subtraction *e.g.*  <span v-pre>`{{ 4 | minus:2 }} #=> 2`</span>
* `modulo` - remainder, *e.g.* <span v-pre>`{{ 3 | modulo:2 }} #=> 1`</span>
* `newline_to_br` - replace each newline (\n) with html break
* `plus` - addition *e.g.*  <span v-pre>`{{ '1' | plus:'1' }} #=> 2`</span>, <span v-pre>`{{ 1 | plus:1 }} #=> 2`</span>
* `prepend` - prepend a string *e.g.* <span v-pre>`{{ 'bar' | prepend:'foo' }} #=> 'foobar'`</span>
* `remove_first` - remove the first occurrence *e.g.* <span v-pre>`{{ 'barbar' | remove_first:'bar' }} #=> 'bar'`</span>
* `remove` - remove each occurrence *e.g.* <span v-pre>`{{ 'foobarfoobar' | remove:'foo' }} #=> 'barbar'`</span>
* `replace_first` - replace the first occurrence *e.g.* <span v-pre>`{{ 'barbar' | replace_first:'bar','foo' }} #=> 'foobar'`</span>
* `replace` - replace each occurrence *e.g.* <span v-pre>`{{ 'foofoo' | replace:'foo','bar' }} #=> 'barbar'`</span>
* `reverse` - reverses the passed in array
* `round` - rounds input to the nearest integer or specified number of decimals *e.g.* <span v-pre>`{{ 4.5612 | round: 2 }} #=> 4.56`</span>
* `rstrip` - strips all whitespace from the end of a string
* `size` - return the size of an array or string
* `slice` - slice a string. Takes an offset and length, *e.g.* <span v-pre>`{{ "hello" | slice: -3, 3 }} #=> llo`</span>
* `sort` - sort elements of the array
* `split` - split a string on a matching pattern *e.g.* <span v-pre>`{{ "a~b" | split:"~" }} #=> ['a','b']`</span>
* `strip_html` - strip html from string
* `strip_newlines` - strip all newlines (\n) from string
* `strip` - strips all whitespace from both ends of the string
* `times` - multiplication  *e.g* <span v-pre>`{{ 5 | times:4 }} #=> 20`</span>
* `truncate` - truncate a string down to x characters. It also accepts a second parameter that will append to the string *e.g.* <span v-pre>`{{ 'foobarfoobar' | truncate: 5, '.' }} #=> 'foob.'`</span>
* `truncatewords` - truncate a string down to x words
* `uniq` - removed duplicate elements from an array, optionally using a given property to test for uniqueness
* `upcase` - convert an input string to uppercase
* `url_encode` - url encode a string

## Tags

Tags are used for the logic in your template. New tags are very easy to code,
so I hope to get many contributions to the standard tag library after releasing
this code.

Here is a list of currently supported tags:

* **assign** - Assigns some value to a variable
* **capture** - Block tag that captures text into a variable
* **case** - Block tag, its the standard case...when block
* **comment** - Block tag, comments out the text in the block
* **cycle** - Cycle is usually used within a loop to alternate between values, like colors or DOM classes.
* **for** - For loop
* **break** - Exits a for loop
* **continue** Skips the remaining code in the current for loop and continues with the next loop
* **if** - Standard if/else block
* **include** - Includes another template; useful for partials
* **raw** - temporarily disable tag processing to avoid syntax conflicts.
* **unless** - Mirror of if statement

### Comments

Any content that you put between `{% comment %}` and `{% endcomment %}` tags is turned into a comment. 

```liquid
We made 1 million dollars {% comment %} in losses {% endcomment %} this year
```

### Raw

Raw temporarily disables tag processing.
This is useful for generating content (eg, Mustache, Handlebars) which uses conflicting syntax.

```liquid
{% raw %}
  In Handlebars, {{ this }} will be HTML-escaped, but {{{ that }}} will not.
{% endraw %}
```

### If / Else

`if / else` statements should be familiar from other programming languages. Liquid implements them with the following tags:

* `{% if <CONDITION> %} ... {% endif %}` — Encloses a section of template which will only be run if the condition is true.
* `{% elsif <CONDITION> %}` — Can optionally be used within an `if ... endif` block. Specifies another condition; if the initial "if" fails, Liquid tries the "elsif", and runs the following section of template if it succeeds. You can use any number of elsifs in an `if` block.
* `{% else %}` — Can optionally be used within an `if ... endif` block, _after_ any "elsif" tags. If all preceding conditions fail, Liquid will run the section of template following the "else" tag.
* `{% unless <CONDITION> %} ... {% endunless %}` — The reverse of an "if" statement. Don't use "elsif" or "else" with an unless statement.

The condition of an `if`, `elsif` or `unless` tag should be either a normal Liquid expression or a _comparison_ using Liquid expressions. Note that the comparison operators are implemented by the "if"-like tags; they don't work anywhere else in Liquid.

The available comparison operators are:

* `==, !=,` and `<>` — equality and inequality (the latter two are synonyms)
    * There's a secret special value `empty` (unquoted) that you can compare arrays to; the comparison is true if the array has no members.
* `<, <=, >, >=` — less/greater-than
* `contains` — a wrapper around Ruby's `include?` method, which is implemented on strings, arrays, and hashes. If the left argument is a string and the right isn't, it stringifies the right.

The available Boolean operators are:

* `and`
* `or`

Note that there is NO "not" operator. Also note that you CANNOT use parentheses to control order of operations, and the precedence of the operators appears to be unspecified. So when in doubt, use nested "if" statements instead of risking it.

Liquid expressions are tested for "truthiness" in what looks like a Ruby-like way:

* `true` is true.
* `false` is false.
* Any string is true, including the empty string.
* Any array is true.
* Any hash is true.
* Any nonexistent/nil value (like a missing member of a hash) is false.

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

Often you have to alternate between different colors or similar tasks.  Liquid
has built-in support for such operations, using the `cycle` tag.

```liquid
{% cycle 'one', 'two', 'three' %}
{% cycle 'one', 'two', 'three' %}
{% cycle 'one', 'two', 'three' %}
{% cycle 'one', 'two', 'three' %}
```

will result in

```text
one
two
three
one
```

If no name is supplied for the cycle group, then it's assumed that multiple
calls with the same parameters are one group.

If you want to have total control over cycle groups, you can optionally specify
the name of the group.  This can even be a variable.

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

### For loops

Liquid allows `for` loops over collections:

```liquid
{% for item in array %}
  {{ item }}
{% endfor %}
```

#### Allowed collection types

For loops can iterate over **arrays, hashes, and ranges of integers.**

When iterating a hash, `item[0]` contains the key, and `item[1]` contains the value:

```liquid
{% for item in hash %}
  {{ item[0] }}: {{ item[1] }}
{% endfor %}
```

Instead of looping over an existing collection, you can also loop through a range of numbers. Ranges look like `(1..10)` — parentheses containing a start value, two periods, and an end value. The start and end values must be integers or expressions that resolve to integers.

```liquid
# if item.quantity is 4...
{% for i in (1..item.quantity) %}
  {{ i }}
{% endfor %}
# results in 1,2,3,4
```

#### Breaking and continuing

You can exit a loop early with the following tags:

* `{% continue %}` — immediately end the current iteration, and continue the "for" loop with the next value.
* `{% break %}` — immediately end the current iteration, then completely end the "for" loop.

Both of these are only useful when combined with something like an "if" statement.

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

#### Helper variables

During every `for` loop, the following helper variables are available for extra
styling needs:

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

There are several optional arguments to the `for` tag that can influence which items you receive in
your loop and what order they appear in:

* `limit:<INTEGER>` lets you restrict how many items you get.
* `offset:<INTEGER>` lets you start the collection with the nth item.
* `reversed` iterates over the collection from last to first.

Restricting elements:

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

A for loop can take an optional `else` clause to display a block of text when there are no items in the collection:

```liquid
# items => []
{% for item in items %}
   {{ item.title }}
{% else %}
   There are no items!
{% endfor %}
```

### Variable Assignment

You can store data in your own variables, to be used in output or other tags as
desired.  The simplest way to create a variable is with the `assign` tag, which
has a pretty straightforward syntax:

```liquid
{% assign name = 'freestyle' %}

{% for t in collections.tags %}{% if t == name %}
  <p>Freestyle!</p>
{% endif %}{% endfor %}
```

Another way of doing this would be to assign `true / false` values to the
variable:

```liquid
{% assign freestyle = false %}

{% for t in collections.tags %}{% if t == 'freestyle' %}
  {% assign freestyle = true %}
{% endif %}{% endfor %}

{% if freestyle %}
  <p>Freestyle!</p>
{% endif %}
```

If you want to combine a number of strings into a single string and save it to
a variable, you can do that with the `capture` tag. This tag is a block which
"captures" whatever is rendered inside it, then assigns the captured value to
the given variable instead of rendering it to the screen.

```liquid
  {% capture attribute_name %}{{ item.title | handleize }}-{{ i }}-color{% endcapture %}

  <label for="{{ attribute_name }}">Color:</label>
  <select name="attributes[{{ attribute_name }}]" id="{{ attribute_name }}">
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
  </select>
```
