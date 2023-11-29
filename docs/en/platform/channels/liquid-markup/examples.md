---
search: true
---

# Examples

In any part of Channels (Sites, Widgets, and Templates) you can use Liquid to create dynamic content. Below, we will show several examples that you can use for your use cases.

## Display list of Entries of a Type

In [Content Pages](/en/platform/channels/pages.html#content-page) you can generate a list of all Entries of a Type. In this case, we take all the Entries of the `product` Type in the `My Bank` Space. The variable `entries` on line 1 gets an array of the drop [Entry](/en/platform/channels/drops.html#entry). This array is traversed to display the `meta.uuid` and `meta.title` of each Entry by line. 

```liquid
{% assign entries = spaces['my-bank'].types['product'].entries %}
<p>Products:</p>
<ul>
{% for entry in entries %}
  <li>{{ entry.meta.uuid }} -- {{ entry.meta.title }}</li>
{% endfor %}
</ul>
```

In order to use these examples on your site, you must replace the Space and Type ID with your information. These IDs can be found as your Space ID, and your Content Type ID.

In the case of a single cardinality entry (in this example it is a privacy notice), you can use `entry` to display the URL as follows:

```liquid
Visit our <a href="{{ spaces['my-bank'].types['privacy'].entry.url }}">Privacy Policy</a>.
```

## Display total number of Entries

To access the total number of entries returned by a content filter, you can use Liquid's `entries.size` filter, for example:

```liquid
{% assign entries = spaces['my-bank'].types['products'].entries %}
<p>You have a total of {{ entries.size }} products!</p>
```

## Filters

If you want to filter the entries, you can do it through the following attributes: 
  - **by_uuid**
  - **by_slug**
  - **by_category**
  - **by_type**
  - **by_tag**
  - **by_lang**
  - **filter_by**

All filters must receive an array of Entries and it is possible to concatenate multiple filters. 

### Filter

In the following example, we filter the Entries of type `post`, with category `news`. Then we take the result and display all the Entries of type `news`:

```liquid
{% assign entries = spaces['my-bank'].types['post'].entries | by_category: 'news' %}
<p>News:</p>
<ul>
{% for entry in entries %}
<li><a href="entry.url">{{ entry.meta.title }}</a></li>
{% endfor %}    
```

### Concatenated filter

In the following example, we filter posts of type `post`, with category `news`, which also have the tag `campaign`. Then we take the result and display the news that meets all the criteria:

```liquid
{% assign entries = spaces['my-bank'].types['post'].entries | by_category: 'news' | by_tag: 'campaign' %}
<p>News for you!</p>
<ul>
{% for entry in entries %}
<li><a href="entry.url">{{ entry.meta.title }}</a></li>
{% endfor %}    
```

### Filter_by

In the case of the `filter_by` filter, it must be used for meta attributes or custom fields of the Content Type, for example:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | filter_by: field: 'field_name' | sort_by: 'fields.date' , 'desc' | limit 8 %}
{% for entry in entries %}
  entry: {{ entry.meta.uuid }} -- {{ entry.meta.title }}<br />
{% endfor %}
```

If you want to negate the value of a filter, you can use `not` inside the filter:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | filter_by: field: 'field_name', not: nil %}
{% for entry in entries %}
  entry: {{ entry.meta.uuid }} -- {{ entry.meta.title }}<br />
{% endfor %}
```

Selecting entries will always return an array, it is necessary to iterate over the result or accessing the first element, in the case of filtering by a unique uuid:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | by_uuid: 'entry_uuid' %}
{% assign entry = entries.first %}
```

You can paginate the entries using the filter `paginated` and display the pagination links with the filter `pagination_links`, for example:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | paginated: 10 %}
<ul>
  {% for entry in entries %}
  <li>{{ entry.meta.slug }}</li>
  {% endfor %}
</ul>
{{ entries | pagination_links }}
```

In the previous case, the entries will be paginated with 10 elements per page and the pagination links will appear at the end. You can navigate each page using the parameter GET `page` in the URL, for example: `my-page.com/landing?page=2`.

:::warning Warning
Keep in mind that if you have more than one widget that uses pagination in the content, using the parameters _GET_ `per_page` and `page` in the URL, every widget with pagination will be affected.
:::

:::warning Warning
To use pagination in a custom widget, you must change the filter associate to the pagination to <span v-pre>`{{ entries | pagination_links_remote }}`</span>.  This is required because custom widgets are loaded asynchronously. With this and the previous change, you must ensure that _JQuery_ is available in the site and while using pagination links, only the HTML will be modified in the widget, the _JavaScript_ code won't be executed again. 
:::

## Order

In the same way that you can filter by category `by_category`, tags `by_tags` and by uuid `by_uuid`, you can create a filter to order the results by meta attributes `name`, `slug`, `created_at`, `updated_at`, and `published_at` of the entries using the filter `sort_by`, in the following way:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | sort_by: 'published_at','asc' %}
```

The possible values for the order are `asc` and `desc`, by default, `desc` is used.
Possible values for `sort_by` are: `name`, `published_at`, `created_at`, `updated_at`, `slug`, and `field`.

To sort by a custom field, you must use the field's `fields.uid` as a parameter:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | filter_by: field: 'field_name', eq: 'value_to_filter' | sort_by: 'fields.date' , 'desc' | limit 8 %}
{% for entry in entries %}
  entry: {{ entry.meta.uuid }} -- {{ entry.meta.title }}<br />
{% endfor %}
```

## Geolocalization

For entries with location fields you can easily generate maps with the `static_map` and `dynamic_map` filters, these use Google Maps Static API and Google Maps Javascript API respectively. The following example generates maps for the `Locations` field with a size of 600x300 px, a level 5 zoom, with a map type 'roadmap' and with a custom icon.

```liquid
{{ entry.fields.['Locations'] | static_map: '600x300',5,'roadmap','https://goo.gl/5y3S82'}}
```

The `dynamic_map` filter accepts an additional attribute to control the visibility of the zoom, drag and full screen controls.

```liquid
{{ entry.fields['Locations'] | dynamic_map: '600x300',5,'roadmap','https://goo.gl/5y3S82',true}}
```

:::tip Tip
To use input attributes, you can use dot or square bracket notation, so <span v-pre> `{{ entry.meta.slug }}` </span>, returns the same value as <span v-pre> `{{ entry.meta['slug'] }}` </span>, and if you have a field called `location`, you can use it as <span v-pre> `{{ entry.fields.location }} `</span>, or <span v-pre>`{{ entry.fields['location'] }}`</span> 
:::

