---
search: true
---

# Basics

This section covers the fundamental concepts of Liquid that you need to understand before working with templates in Modyo.

## What Is Liquid?

Liquid is a template language that processes text and generates dynamic output. It works in two stages:

1. **Parse**: Liquid reads your template and finds the Liquid code
2. **Render**: Liquid executes the code and generates the final output

### Design principles

Liquid was designed with specific requirements:

- **Clean markup**: Produces readable and maintainable HTML
- **Safe**: Users can edit templates without executing unsafe code
- **Stateless**: Compilation and rendering are separated for better performance
- **Flexible**: Works with HTML, JSON, XML, emails and more

## Basic Syntax

Liquid uses two types of delimiters to distinguish between static content and dynamic code:

### Output

Double curly braces `{{ }}` display the value of an expression:

```liquid
{{ product.name }}
{{ 'Hello world' }}
{{ 100 | plus: 50 }}
```

Everything inside `{{ }}` is evaluated and displayed on the page.

### Tags

Curly braces with percent `{% %}` execute logic but don't produce visible output:

```liquid
{% if user %}
  Welcome!
{% endif %}

{% assign price = 100 %}
```

### Comments

Comments don't appear in the final output:

```liquid
{%- comment -%}
  This is a comment that won't be seen
{%- endcomment -%}
```

## Basic Data Types

Liquid recognizes these data types:

- **String**: Text in quotes (`"text"` or `'text'`)
- **Number**: Integers or decimals (`42`, `3.14`)
- **Boolean**: True or false (`true`, `false`)
- **Nil**: Absence of value (`nil`)
- **Array**: List of values
- **Hash**: Key-value pairs

For complete details on data types and operations, see [Variables and Data Types](/en/platform/channels/liquid-markup/variables).

## Truthy and Falsy Values

In Liquid, these values are considered **falsy** (false):
- `false`
- `nil`

Everything else is considered **truthy** (true), including:
- `true`
- Any number (even `0`)
- Any string (even `""` empty)
- Empty arrays `[]`
- Empty hashes `{}`

```liquid
{% if 0 %}
  This WILL display (0 is truthy)
{% endif %}

{% if "" %}
  This WILL display (empty string is truthy)
{% endif %}

{% if nil %}
  This WON'T display (nil is falsy)
{% endif %}
```

## Whitespace Control

Liquid generates spaces and line breaks around code. You can control this with hyphens:

### Without whitespace control

```liquid
{% assign name = "John" %}
Hello {{ name }}!
```

Output:
```

Hello John!
```
(Note the extra line break)

### With whitespace control

```liquid
{%- assign name = "John" -%}
Hello {{ name }}!
```

Output:
```
Hello John!
```

Hyphens remove whitespace:
- `{{-` or `{%-` removes whitespace to the left
- `-}}` or `-%}` removes whitespace to the right

## Operators

### Comparison operators

| Operator | Description | Example |
|----------|-------------|---------|
| `==` | Equal to | `{% if price == 100 %}` |
| `!=` | Not equal to | `{% if status != 'active' %}` |
| `>` | Greater than | `{% if age > 18 %}` |
| `<` | Less than | `{% if stock < 10 %}` |
| `>=` | Greater or equal | `{% if points >= 1000 %}` |
| `<=` | Less or equal | `{% if discount <= 50 %}` |

### Logical operators

| Operator | Description | Example |
|----------|-------------|---------|
| `and` | Logical AND | `{% if price < 100 and stock > 0 %}` |
| `or` | Logical OR | `{% if vip or premium %}` |

### Contains operator

Checks if a string contains another or if an array contains an element:

```liquid
{% if product.name contains "sale" %}
  On sale!
{% endif %}

{% assign fruits = "apple,pear,grape" | split: "," %}
{% if fruits contains "pear" %}
  Pears available
{% endif %}
```

## Order of Operations

Liquid doesn't follow traditional mathematical order. Operations are executed from right to left:

```liquid
{{ 10 | plus: 5 | times: 2 }}
```

Executes as:
1. `5 | times: 2` = 10
2. `10 | plus: 10` = 20

To control order, use parentheses or intermediate variables:

```liquid
{% assign temp = 10 | plus: 5 %}
{{ temp | times: 2 }}
```
Result: 30

## Working with Variables

### Creating variables with assign

The `assign` tag creates new variables:

```liquid
{% assign name = "Mary" %}
{% assign age = 30 %}
{% assign active = true %}
```

### Capturing blocks with capture

The `capture` tag saves a block of content in a variable:

```liquid
{% capture welcome %}
  Hello {{ user.name }}!
  Today is {{ 'now' | date: '%A' }}
{% endcapture %}

{{ welcome }}
```

### Global scope

Unlike other languages, variables in Liquid have global scope from their creation:

```liquid
{% for item in items %}
  {% assign found = true %}
{% endfor %}

{{ found }} <!-- Available outside the loop -->
```

For more details on variables and data types, see [Variables and Data Types](/en/platform/channels/liquid-markup/variables). To learn about all available objects in Modyo, see [Objects](/en/platform/channels/liquid-markup/objects).

## Liquid vs. HTML

It's important to understand that Liquid is processed **before** HTML:

```liquid
<!-- This WON'T work -->
<div class="{% if active %}active{% endif %}">
  <script>
    var name = {{ user.name }}; // Error: missing quotes
  </script>
</div>

<!-- This WILL work -->
<div class="{% if active %}active{% endif %}">
  <script>
    var name = "{{ user.name }}"; // Correct: with quotes
  </script>
</div>
```

## Escaping Liquid

If you need to display Liquid code without executing it:

```liquid
{% raw %}
  {{ this won't be processed }}
  {% neither will this %}
{% endraw %}
```

Or use HTML entities:

```liquid
&#123;&#123; product.name &#125;&#125;
```

## Common Errors

### 1. Undefined variables

```liquid
<!-- Wrong: will cause error if user doesn't exist -->
{{ user.name.first }}

<!-- Right: validate first -->
{% if user %}
  {{ user.name.first }}
{% endif %}
```

### 2. Type comparison

```liquid
<!-- Wrong: comparing string with number -->
{% if age == "18" %}

<!-- Right: same type -->
{% if age == 18 %}
```

### 3. Spaces in names

```liquid
<!-- Wrong: spaces in the name -->
{% assign my variable = 10 %}

<!-- Right: no spaces or with underscores -->
{% assign my_variable = 10 %}
```

### 4. Filters without pipe

```liquid
<!-- Wrong: missing pipe -->
{{ text upcase }}

<!-- Right: with pipe -->
{{ text | upcase }}
```

## Conventions and Best Practices

1. **Variable names**: Use snake_case for variables
   ```liquid
   {% assign total_price = 100 %}
   {% assign user_name = "John" %}
   ```

2. **Indentation**: Indent content inside control tags
   ```liquid
   {% if user %}
     {% for order in user.orders %}
       {{ order.id }}
     {% endfor %}
   {% endif %}
   ```

3. **Validation**: Always validate before accessing nested properties
   ```liquid
   {% if product.variants and product.variants.size > 0 %}
     {{ product.variants.first.price }}
   {% endif %}
   ```

4. **Default values**: Use the `default` filter for optional values
   ```liquid
   {{ product.description | default: "No description" }}
   ```

5. **Performance**: Assign results of expensive operations to variables
   ```liquid
   {% assign filtered_products = products | where: 'available', true | sort: 'price' %}
   {% for product in filtered_products %}
     ...
   {% endfor %}
   ```

:::tip Security
Liquid is a language designed to be safe. You cannot:
- Access the file system directly
- Execute arbitrary code
- Modify data (only read and display)
- Create infinite loops (there are iteration limits)
:::

:::warning Server-Side Execution
Remember that all Liquid code is executed on the server before sending HTML to the browser. You cannot use Liquid to react to user events or modify the page after loading.
:::