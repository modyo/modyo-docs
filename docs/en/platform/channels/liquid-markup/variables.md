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

For a complete and detailed list of all available objects, see the [Objects](/en/platform/channels/liquid-markup/objects.html) section.

## Context Variables

Beyond those objects, on every render the platform injects a set of variables that describe the page being resolved. They aren't content: they are the context the template works with, and they determine what you can write in each view.

Not all of them exist everywhere. Outside the context where it's injected, a variable simply doesn't exist and Liquid prints it empty, with no warning at all, so a misspelled name and a variable used outside its context look exactly the same on the page. See [Render Error Behavior](/en/platform/channels/liquid-markup/basics.html#render-error-behavior).

### Always available

These four collections are injected on every render, no matter the page type and no matter whether you are in a layout, a view, a snippet or a widget template:

| Variable | What it holds |
|----------|---------------|
| `assets` | The account's asset manager. Indexed by the file UUID, as in <code v-pre>assets['uuid']</code>. |
| `spaces` | The account's content spaces. Indexed by the space identifier, as in <code v-pre>spaces['blog']</code>. |
| `menus` | The site's menus. Indexed by the menu slug, as in <code v-pre>menus['main']</code>. See [Navigation](/en/platform/channels/navigation.html). |
| `vars` | The site's global variables or, in a widget template, that widget's variables. See [Global Variables](/en/platform/channels/global-variables.html). |

### From the page context

| Variable | What it holds | Where it exists |
|----------|---------------|-----------------|
| `content_for_layout` | The already rendered HTML of the view. Marks the spot in the layout where the page is inserted. | Layouts only |
| `page` | The current page. See [page](/en/platform/channels/liquid-markup/objects.html#page). | All but the search results page |
| `page_context` | The page type that was resolved, for example `context-home`, `context-custom` or `context-content`. See the full list in [The body block](/en/platform/channels/liquid-markup/tags.html#the-body-block). | All |
| `page_name` | The context identifier with a suffix that indicates the view, almost always `-show`, for example `context-content-show`. | All |
| `page_title` | The page name. On the home page and on search it is the platform's translated text. | All |
| `page_id` | `page_name` followed by the page path, for example `context-custom-show-contact`. On the home page it is just `context-home-show`. | All but the search results page |
| `url` | The URL being resolved, including the category path or the entry slug when applicable. | All but the search results page |
| `current_layout_page` | The page the layout in use comes from. | All but the home page and the search results page |
| `page_grid` | The page's grid, the one passed to <code v-pre>{% snippet page_grid %}</code>. See [grid](/en/platform/channels/liquid-markup/objects.html#grid). | Home page and custom pages |

:::tip Tip
The <code v-pre>{% body %}</code> tag writes `page_context`, `page_name` and `page_id` into the `class` attribute of the `body` element. Looking at a published page's source tells you which context it resolved in, without printing anything in the template.
:::

### From content pages

| Variable | What it holds |
|----------|---------------|
| `page_scope` | `index` when the listing was resolved and `show` when a single entry was resolved. |
| `entries` | The listing's entries. Only when `page_scope` is `index`. |
| `entry` | The entry matching the slug in the URL. Only when `page_scope` is `show`. |
| `category_path` | The category path taken from the URL, without the entry slug. Empty when the URL carries no category. |
| `category` | The category matching `category_path`. |

### From the search results page

| Variable | What it holds |
|----------|---------------|
| `site_search` | The resolved search, with its results. See [sitesearch](/en/platform/channels/liquid-markup/objects.html#sitesearch). |
| `params_query` | The search term, sanitized and escaped, ready to print. Only exists if the URL carries the parameter. |
| `params_more` | The search's extra filter, sanitized and escaped. Only exists if the URL carries it. |

### From Origination pages

Origination pages also inject `origination`, the page's flow; `pending_submissions`, the user's pending responses in that flow; `submission`, the response being resolved; and, while that response is in progress, `current_step` and `current_task`.
