---
search: true
---

# Variables and Data Types

In Liquid, you work with variables to store and manipulate data. This section covers how to create variables and the different data types available.

## Variables

Variables store values that you can reuse in your template. You can create your own variables or use the ones Modyo provides automatically.

### Creating variables

Use `assign` to create new variables:

```liquid
{% assign name = "John" %}
{% assign price = 100 %}
{% assign active = true %}

{{ name }} → John
{{ price }} → 100
```

### Access syntax

```liquid
{{ variable }}                    → Displays the value
{{ object.property }}           → Accesses a property (dot notation)
{{ object['property'] }}        → Bracket access (necessary if there are spaces)
{{ object.nested.property }}    → Nested properties
```

**Differences between dot notation and brackets:**
- **Dot**: Simpler but doesn't allow spaces or dynamic variables
- **Brackets**: Allows spaces, hyphens, and using variables as keys

```liquid
{{ product.title }}              → Works
{{ product['title'] }}           → Also works
{{ product['special-price'] }}   → Necessary with hyphens
{{ product[variable_name] }}     → Dynamic access with variable
```

## Data Types

Liquid in Modyo supports the following data types:

### Strings

Strings must be in single or double quotes:

```liquid
{% assign message = "Hello world" %}
{% assign name = 'John' %}
{{ message }} → Hello world
```

### Numbers

```liquid
{% assign price = 100 %}         → Integer
{% assign discount = 0.15 %}     → Decimal
{{ price | minus: 10 }}          → 90
```

### Booleans

```liquid
{% assign active = true %}
{% assign published = false %}

{% if active %}
  This content is active
{% endif %}
```

### Nil

Represents the absence of value:

```liquid
{% if user == nil %}
  No user logged in
{% endif %}
```

### Arrays

Ordered collections of elements:

```liquid
{% assign products = spaces['store'].types['product'].entries %}

{{ products[0].fields.name }}     → First element (index 0)
{{ products[2] }}                  → Third element (index 2)
{{ products.first.fields.name }}  → First element (.first method)
{{ products.last.fields.name }}   → Last element (.last method)
{{ products.size }}                → Number of elements

{% for product in products %}
  {{ forloop.index }}: {{ product.fields.name }}
{% endfor %}
```

**Note about indices**: Arrays in Liquid start at 0, so the first element is `[0]`, the second is `[1]`, etc.

### Hashes (objects/dictionaries)

Collections of key-value pairs:

```liquid
{% assign config = site.metadata %}

{{ config.theme }}                  → Dot notation
{{ config['theme'] }}               → Bracket notation
{{ config['color-primary'] }}       → Necessary with hyphens

{% for item in config %}
  {{ item[0] }}: {{ item[1] }}     → Key: Value
{% endfor %}
```

## Operations with Data Types

### Type conversion

```liquid
{{ "100" | plus: 0 }}              → Converts string to number
{{ 100 | append: "" }}              → Converts number to string
```

### Type checking

```liquid
{% if products.size > 0 %}
  Products available
{% elsif products == empty %}
  No products
{% endif %}
```

### Default values

```liquid
{{ user.name | default: "Guest" }}
{{ product.fields.price | default: 0 }}
```

:::tip Best Practice
Always use `default` when you're not sure if a value exists to avoid displaying empty content.
:::

## Special Modyo Objects

Modyo provides predefined objects that contain system information:

- `user`: Current user
- `site`: Current site
- `page`: Current page
- `spaces`: Access to content spaces
- `account`: Account information

For a complete and detailed list of all available objects, see the [Objects](/en/platform/channels/liquid-markup/objects) section.