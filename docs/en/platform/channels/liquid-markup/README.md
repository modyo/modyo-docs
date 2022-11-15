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

An object is what contains the content that Liquid displays on the screen. You can display objects or variables using a double bracket ``{{ }}``, for example:

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