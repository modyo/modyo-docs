---
search: true
---

# Liquid Markup

Liquid is a language we use in Modyo Platform to display the content of the [Content](/en/platform/content/) module in [Channels](/en/platform/channels/). Using Liquid you will be able to generate a template on your site that dynamically displays the information of your Entries as well as control what to display using flow control or iteration.

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

:::warning Warning
From version 9.0.8 onwards, the attributes of the entries will be called according to their meta information or their custom fields, so:

* Fields belonging to the meta-information of the entry that were previously used as <span v-pre>`{{ entry.slug }}`</span> must now be used as <span v-pre>`{{ entry.meta.slug }}`</span> or <span v-pre>`{{ entry.meta['slug'] }}`</span>
* Custom fields that were previously used as <span v-pre>`{{ entry.title }}`</span> must now be used as <span v-pre>`{{ entry.fields.title }}`</span> or <span v-pre>`{{ entry.fields['title'] }}`</span>.

Both forms will be available until Modyo version 9.2.
:::

### How to use Liquid?

Below we'll look at several examples of the most common uses when writing with Liquid.

#### Objects

An object is what contains the content that Liquid displays on the screen. You can display objects or variables using a double bracket ``{{ }}``, for example:

To display the name of the post on your page use:

```liquid
{{ entry.meta.name }}
```

#### Tags

With Tags you can add flow and iteration control to your pages. You need to encapsulate the language with square brackets and percentage {% %} to use Tags, for example:

```liquid
{% if product.name == "Online Banking" %}
Download our Online Banking App now!
{% endif %}
```