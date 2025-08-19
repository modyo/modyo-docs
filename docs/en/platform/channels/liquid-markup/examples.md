---
search: true
---

# Examples

In any part of Channels (Sites, Widgets and Templates), you can use Liquid to create dynamic content. Below are several examples for different use cases.

## Display Entry List of a Type

In [Content Pages](/en/platform/channels/pages#content-page), you can generate a listing of all Entries of a Type. In this example, all Entries of the `product` Type in the `My Bank` Space are obtained. The `entries` variable on line 1 gets an array of the [Entry](/en/platform/channels/liquid-markup/objects#entry) object. This array is iterated to show the `meta.uuid` and `meta.title` of each Entry per row.

```liquid
{% assign entries = spaces['my-bank'].types['product'].entries %}
<p>Products:</p>
<ul>
{% for entry in entries %}
  <li>{{ entry.meta.uuid }} -- {{ entry.meta.title }}</li>
{% endfor %}
</ul>
```

To use these examples on your site, you must replace the Space and Type ID with your information. These IDs are found as the Identifier of your Space and the Identifier of your Content Type.
 
In the case of a single cardinality entry (e.g. a privacy notice), you can use `entry` to display the URL as follows:

```liquid
Visit our <a href="{{ spaces['my-bank'].types['privacy'].entry.url }}">Privacy Policy</a>.
```

## Display Total Number of Entries

To access the total number of entries returned by a content filter, you can use the Liquid filter `entries.size`, for example:

```liquid
{% assign entries = spaces['my-bank'].types['products'].entries %}
<p>You have a total of {{ entries.size }} products!</p>
```

## Filter Entries

To filter entries, you can use the following attributes:
  - **by_uuid**
  - **by_slug**
  - **by_category**
  - **by_type**
  - **by_tag**
  - **by_lang**
  - **filter_by**

All filters must receive an array of Entries and it's possible to concatenate multiple filters.

### Filter

In the following example, we filter Entries of type `post` with category `news`. Then, we show all Entries of type `news`:

```liquid
{% assign entries = spaces['my-bank'].types['post'].entries | by_category: 'news' %}
<p>News:</p>
<ul>
{% for entry in entries %}
<li><a href="entry.url">{{ entry.meta.title }}</a></li>
{% endfor %}    
```

### Concatenated filter

In the following example, we filter Entries of type `post` with category `news` and that also have the tag `campaign`. Then, we show the news that meet all criteria:

```liquid
{% assign entries = spaces['my-bank'].types['post'].entries | by_category: 'news' | by_tag: 'campaign' %}
<p>News for you!</p>
<ul>
{% for entry in entries %}
<li><a href="entry.url">{{ entry.meta.title }}</a></li>
{% endfor %}    
```

### Filter_by

The `filter_by` filter is used for meta attributes or custom fields of the Content Type, for example:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | filter_by: field: 'field_name' | sort_by: 'fields.date' , 'desc' | limit 8 %}
{% for entry in entries %}
  entry: {{ entry.meta.uuid }} -- {{ entry.meta.title }}<br />
{% endfor %}
```

If you want to negate a value within the field filter, you can use `not` within the filter:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | filter_by: field: 'field_name', not: nil %}
{% for entry in entries %}
  entry: {{ entry.meta.uuid }} -- {{ entry.meta.title }}<br />
{% endfor %}
```

Entry selection always returns an array, so it's necessary to iterate over the result or access the first element, in case of filtering by a single UUID:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | by_uuid: 'entry_uuid' %}
{% assign entry = entries.first %}
```

You can paginate entries using the `paginated` filter and show pagination links with the `pagination_links` filter, for example:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | paginated: 10 %}
<ul>
  {% for entry in entries %}
  <li>{{ entry.meta.slug }}</li>
  {% endfor %}
</ul>
{{ entries | pagination_links }}
```

In the above case, the entry listing will be paginated with 10 elements per page and pagination links will appear at the end of the listing. You can navigate through each page using the GET parameter `page` in the URL (e.g. `my-page.com/landing?page=2`).

:::warning Warning
Note that if you have more than one widget that uses content pagination, when using the _GET_ parameters `per_page` and `page` in the URL, all widgets with pagination on the page will be affected by those parameters.
:::

:::warning Warning
To use pagination in a custom widget, you must change the filter associated with pagination to <span v-pre>`{{ entries | pagination_links_remote }}`</span>. This is necessary since custom widgets are loaded asynchronously. Along with the above change, you must ensure that _JQuery_ is available on the site and remember that when using pagination links, only the widget's HTML will change and the widget's _JavaScript_ will not be executed again.
:::

## Entry Sorting

In the same way that you can filter by category (`by_category`), tags (`by_tags`) and by UUID (`by_uuid`), you can create a filter to sort the results by the "meta" attributes (`name`, `slug`, `created_at`, `updated_at`, `published_at`) of the entries using the `sort_by` filters, as follows:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | sort_by: 'published_at','asc' %}
```

The possible values for the order are `asc` and `desc`. By default, if the parameter is not specified, `desc` is used.
The possible values for `sort_by` are: `name`, `published_at`, `created_at`, `updated_at`, `slug` and `field`.

To sort by a custom field, you must use the field's `fields.uid` as parameter:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | filter_by: field: 'field_name', eq: 'value_to_filter' | sort_by: 'fields.date' , 'desc' | limit 8 %}
{% for entry in entries %}
  entry: {{ entry.meta.uuid }} -- {{ entry.meta.title }}<br />
{% endfor %}
```

## Entry Geolocation

For entries with location fields, maps can be easily generated with the `static_map` and `dynamic_map` filters, which use Google Maps Static API and Google Maps Javascript API, respectively. The following example generates maps for the `Locations` field with a size of 600x300 px, zoom level 5, 'roadmap' map type and a custom icon.

```liquid
{{ entry.fields.['Locations'] | static_map: '600x300',5,'roadmap','https://goo.gl/5y3S82'}}
```

The `dynamic_map` filter accepts an additional attribute to control the visibility of zoom, drag and full screen controls.

```liquid
{{ entry.fields['Locations'] | dynamic_map: '600x300',5,'roadmap','https://goo.gl/5y3S82',true}}
```

:::tip Tip
To use entry attributes, you can use dot notation or bracket notation. Thus, <span v-pre>`{{ entry.meta.slug }}`</span> returns the same value as <span v-pre>`{{ entry.meta['slug'] }}`</span>. If you have a field called `location`, you can use it both as <span v-pre>`{{ entry.fields.location }}`</span> or <span v-pre>`{{ entry.fields['location'] }}`</span>.
:::