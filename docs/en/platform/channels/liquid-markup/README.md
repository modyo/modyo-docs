---
search: true
---

# Liquid Markup

Liquid is an open-source template language created by Shopify and implemented in Modyo Platform to connect the [Content](/en/platform/content/) module with [Channels](/en/platform/channels/). It enables creating dynamic content safely and efficiently.

## Liquid in Modyo

In Modyo, Liquid allows you to:
- Display dynamic content from your Spaces and Types
- Personalize the experience based on authenticated users
- Create reusable components with Widgets and Templates
- Generate responsive and adaptive layouts
- Securely integrate data from multiple sources

### Why use Liquid?

- You want to allow users to edit the appearance of your application without executing **unsafe code on your server**.
- You want to render your templates directly from the database.
- You prefer smart template engines (PHP style).
- You need a template engine that works well in both HTML and emails.
- You don't like the markup of your current template engine.

### What does Liquid look like?

```liquid
<ul id="posts">
  {% for entry in spaces['blog'].types['post'].entries %}
    <li>
      <h2>{{ entry.meta.name }}</h2>
      {{ entry.meta.published_at | format_date: '%d/%m/%Y' }}

      {{ entry.meta.excerpt | truncate: 120 }}
    </li>
  {% endfor %}
</ul>
```

:::warning Warning
From version 9.0.8 onwards, entry attributes will be called according to their meta information or their custom fields, such that:

- Entry meta-information fields that were previously used as <span v-pre>`{{ entry.slug }}`</span>, should now be used as <span v-pre>`{{ entry.meta.slug }}`</span>, or <span v-pre>`{{ entry.meta['slug'] }}`</span>.
- Custom fields that were previously used as <span v-pre>`{{ entry.description }}`</span>, should now be used as <span v-pre>`{{ entry.fields.description }}`</span>, or <span v-pre>`{{ entry.fields['description'] }}`</span>.

The direct form is still accepted for backward compatibility, but it's deprecated: use `entry.meta` and `entry.fields` in new templates. If a custom field has the same name as a meta attribute, such as `name`, `title`, or `slug`, the direct form returns the meta attribute: `entry.title` returns the entry name, not the `title` field. To read that field, use `entry.fields.title`.
:::

## Getting Started with Liquid

To learn the fundamental concepts of Liquid, see:

- **[Basics](/en/platform/channels/liquid-markup/basics)** - Syntax, operators and control structures
- **[Variables and Data Types](/en/platform/channels/liquid-markup/variables)** - How to work with data in Liquid
- **[Objects](/en/platform/channels/liquid-markup/objects)** - Modyo's special objects
- **[Filters](/en/platform/channels/liquid-markup/filters)** - Transform and format data
- **[Tags](/en/platform/channels/liquid-markup/tags)** - Flow control and logic
- **[Examples](/en/platform/channels/liquid-markup/examples)** - Practical use cases