---
search: true
---

# Tags

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

```shell
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

```shell
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