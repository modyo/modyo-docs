---
search: true
---

# Tags

Tags are used for template logic. Here is a list of currently supported tags:

- **assign**: Assigns a value to a variable.
- **capture**: Block tag that captures text into a variable.
- **case**: Block tag, standard `case` statement.
- **comment**: Block tag, comments out text in the block.
- **cycle**: Usually used within a loop to alternate between values, like colors or DOM classes.
- **for**: `for` loop.
- **break**: Exits a loop.
- **continue**: Skips the remaining code in the current iteration and continues with the next loop iteration.
- **if**: Standard `if/else` block.
- **include**: Includes another template; useful for partials.
- **raw**: Temporarily disables tag processing to avoid syntax conflicts.
- **unless**: Mirror of the `if` statement.

### Comments

Any content written between `{% comment %}` and `{% endcomment %}` tags will become a comment.

```liquid
We made 1 million dollars {% comment %} in losses {% endcomment %} this year
```

### Raw

Raw is used to temporarily disable tag processing.
This is useful for generating content (e.g. Mustache, Handlebars) that may use conflicting syntax with other elements.

```liquid
{% raw %}
  In Handlebars, {{ this }} will be HTML-escaped, but {{{ that }}} will not.
{% endraw %}
```

### If / else

`if / else` statements are common in other programming languages. Liquid implements them with the following tags:

- `{% if <CONDITION> %}`: Attaches a section of the template that will only execute if the condition is `true`.
- `{% elsif <CONDITION> %}`: Can optionally be used within an `if ... endif` block. Specifies another condition; if the initial `if` fails, Liquid tests the `elsif` and executes the following section of the template if it succeeds. Any number of `elsif` can be used in an `if` block.
- `{% else %}`: Can optionally be used within an `if... endif` block, after any `elsif` tags. If all previous conditions fail, Liquid executes the template section following the `else` tag.

The condition of an `if`, `elsif` or `unless` tag must be a normal Liquid expression or a _comparison_ using Liquid expressions. Note that comparison operators are implemented through tags similar to `if`; they don't work anywhere else in Liquid.

The available relational operators are:

- `==, !=,` and `<>`: Equal and not equal (the last two are synonyms).
    * There is a special "empty" value (without quotes) that arrays can be compared to; the comparison is true if the array has no members.
- `<, <=, >, >=`: Less than/greater than.
- `contains`: A _wrapper_ around Ruby's `include?` method, implemented in strings, arrays and hashes. If the left argument is a string and the right one isn't, it converts the right one to string.

The available boolean operators are:

- `and`.
- `or`.

Note that there is NO "not" operator, and you CANNOT use parentheses to control the order of operations, as operator precedence seems to be unspecified. When in doubt, use nested `if` statements.

Liquid expressions are tested to determine their "truthfulness" in what appears to be a Ruby-like way:

- `true` is true
- `false` is false.
- Any string is true, including an empty string.
- Any array is true.
- Any hash is true.
- Any non-existent/null value (like a missing part of a hash) is false.

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

### Case statement

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

Often you need to alternate between different colors or similar tasks. Liquid has built-in support for such operations, using the `cycle` tag.

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
calls with the same parameters are one group.

If you want to have full control over cycle groups, you can optionally specify
the group name. This can even be a variable.

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

### For loop

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

Instead of looping over an existing collection, you can also loop through a range of numbers. Ranges look like `(1..10)` - parentheses containing a start value, two periods, and an end value. The start and end values must be integers or expressions that resolve to integers.

```liquid
# if item.quantity is 4...
{% for i in (1..item.quantity) %}
  {{ i }}
{% endfor %}
# results in 1,2,3,4
```

#### Break and continue

You can exit early from a loop with the following tags:

- `{% continue %}` - immediately ends the current iteration, and continues the "for" loop with the next value.
- `{% break %}` - immediately ends the current iteration, then completely ends the "for" loop.

Both are only useful when combined with something like an "if" statement.

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

``` liquid
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

There are several optional arguments to the `for` tag that can influence which items you receive in your loop and the order in which they appear:

- `limit:<INTEGER>` allows you to restrict the number of items you get.
- `offset:<INTEGER>` allows you to start the collection with the nth item.
- `reversed` iterates over the collection from last to first.

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

### Variable assignment

You can store data in your own variables, for use in output tags or other tags as desired. The simplest way to create a variable is with the `assign` tag, which has a very straightforward syntax:

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

If you want to combine several strings into one and save it in a variable, you can do so with the `capture` tag, which "captures" whatever is displayed inside it, and then assigns the captured value to the given variable instead of displaying it on the screen.

```liquid
  {% capture attribute_name %}{{ item.title | handleize }}-{{ i }}-color{% endcapture %}

  <label for="{{ attribute_name }}">Color:</label>
  <select name="attributes[{{ attribute_name }}]" id="{{ attribute_name }}">
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
  </select>
```