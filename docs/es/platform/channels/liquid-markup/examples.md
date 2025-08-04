---
search: true
---

# Ejemplos

En cualquier parte de Channels (Sitios, Widgets y Plantillas), puedes usar Liquid para crear contenido dinámico. A continuación, se muestran varios ejemplos para diferentes casos de uso.

## Desplegar listado de Entradas de un Tipo

En [Páginas de Contenido](/es/platform/channels/pages.html#pagina-de-contenido), puedes generar un listado de todas las Entradas de un Tipo. En este ejemplo, se obtienen todas las Entradas del Tipo `product` en el Espacio `My Bank`. La variable `entries` de la línea 1 obtiene un array del drop [Entry](/es/platform/channels/drops.html#entrada). Este array se itera para mostrar el `meta.uuid` y `meta.title` de cada Entrada por fila. 

```liquid
{% assign entries = spaces['my-bank'].types['product'].entries %}
<p>Products:</p>
<ul>
{% for entry in entries %}
  <li>{{ entry.meta.uuid }} -- {{ entry.meta.title }}</li>
{% endfor %}
</ul>
```

Para usar estos ejemplos en tu sitio, debes reemplazar el ID de Espacio y Tipo con tu información. Estos IDs se encuentran como el Identificador de tu Espacio y el Identificador de tu Tipo de Contenido.
 
En el caso de una entrada de cardinalidad única (ej. un aviso de privacidad), puedes usar `entry` para desplegar la URL de la siguiente manera:

```liquid
Visit our <a href="{{ spaces['my-bank'].types['privacy'].entry.url }}">Privacy Policy</a>.
```

## Desplegar cantidad total de Entradas

Para acceder a la cantidad total de entradas que retorna un filtro de contenido, puedes usar el filtro de Liquid `entries.size`, por ejemplo:

```liquid
{% assign entries = spaces['my-bank'].types['products'].entries %}
<p>You have a total of {{ entries.size }} products!</p>
```

## Filtros

Para filtrar las entradas, puedes usar los siguientes atributos:
  - **by_uuid**
  - **by_slug**
  - **by_category**
  - **by_type**
  - **by_tag**
  - **by_lang**
  - **filter_by**

Todos los filtros deben recibir un array de Entries y es posible concatenar múltiples filtros. 

### Filtro

En el siguiente ejemplo, filtramos las Entradas de tipo `post` con categoría `news`. Luego, mostramos todas las Entradas de tipo `news`:

```liquid
{% assign entries = spaces['my-bank'].types['post'].entries | by_category: 'news' %}
<p>News:</p>
<ul>
{% for entry in entries %}
<li><a href="entry.url">{{ entry.meta.title }}</a></li>
{% endfor %}    
```

### Filtro concatenado

En el siguiente ejemplo, filtramos las Entradas de tipo `post` con categoría `news` y que además tengan el tag `campaign`. Luego, mostramos las noticias que cumplen todos los criterios:

```liquid
{% assign entries = spaces['my-bank'].types['post'].entries | by_category: 'news' | by_tag: 'campaign' %}
<p>News for you!</p>
<ul>
{% for entry in entries %}
<li><a href="entry.url">{{ entry.meta.title }}</a></li>
{% endfor %}    
```

### Filter_by

El filtro `filter_by` se utiliza para atributos meta o campos personalizados del Tipo de Contenido, por ejemplo:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | filter_by: field: 'field_name' | sort_by: 'fields.date' , 'desc' | limit 8 %}
{% for entry in entries %}
  entry: {{ entry.meta.uuid }} -- {{ entry.meta.title }}<br />
{% endfor %}
```

Si quieres negar un valor dentro del filtro de campos, puedes usar `not` dentro del filtro:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | filter_by: field: 'field_name', not: nil %}
{% for entry in entries %}
  entry: {{ entry.meta.uuid }} -- {{ entry.meta.title }}<br />
{% endfor %}
```

La selección de entradas siempre retorna un array, por lo que es necesario iterar sobre el resultado o acceder al primer elemento, en caso de filtrar por un único UUID:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | by_uuid: 'entry_uuid' %}
{% assign entry = entries.first %}
```

Puedes paginar las entradas usando el filtro `paginated` y mostrar los enlaces de paginación con el filtro `pagination_links`, por ejemplo:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | paginated: 10 %}
<ul>
  {% for entry in entries %}
  <li>{{ entry.meta.slug }}</li>
  {% endfor %}
</ul>
{{ entries | pagination_links }}
```

En el caso anterior, se paginará el listado de entradas con 10 elementos por página y al final del listado aparecerán los enlaces de la paginación. Puedes navegar por cada página usando el parámetro GET `page` en la URL (ej. `mi-pagina.com/landing?page=2`).

:::warning Atención
Ten en cuenta que si tienes más de un widget que use la paginación de contenido, al usar los parámetros _GET_ `per_page` y `page` en la URL, todos los widgets con paginación de la página se verán afectados por esos parámetros.
:::

:::warning Atención
Para usar la paginación en un widget personalizado, se debe cambiar el filtro asociado a la paginación por <span v-pre>`{{ entries | pagination_links_remote }}`</span>. Esto es necesario dado que los widgets personalizados se cargan de forma asíncrona. Junto con el cambio anterior, se debe asegurar que _JQuery_ esté disponible en el sitio y recordar que al usar los enlaces de paginación, solo cambiará el HTML del widget y no se ejecutará nuevamente el _JavaScript_ del widget.
:::

## Ordenar

De la misma forma en que se puede filtrar por categoría (`by_category`), tags (`by_tags`) y por UUID (`by_uuid`), se puede crear un filtro para ordenar los resultados por los atributos "meta" (`name`, `slug`, `created_at`, `updated_at`, `published_at`) de las entradas usando los filtros `sort_by`, de la siguiente forma:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | sort_by: 'published_at','asc' %}
```

Los valores posibles para el orden son `asc` y `desc`. Por defecto, si el parámetro no se especifica, se usa `desc`.
Los valores posibles para `sort_by` son: `name`, `published_at`, `created_at`, `updated_at`, `slug` y `field`.

Para ordenar por un campo personalizado, debes usar como parámetro el `fields.uid` del campo:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | filter_by: field: 'field_name', eq: 'value_to_filter' | sort_by: 'fields.date' , 'desc' | limit 8 %}
{% for entry in entries %}
  entry: {{ entry.meta.uuid }} -- {{ entry.meta.title }}<br />
{% endfor %}
```

## Geolocalización

Para las entradas con campos de ubicación, se pueden generar mapas fácilmente con los filtros `static_map` y `dynamic_map`, que usan Google Maps Static API y Google Maps Javascript API, respectivamente. El siguiente ejemplo genera mapas para el campo `Locations` con un tamaño de 600x300 px, un zoom de nivel 5, tipo de mapa 'roadmap' y un icono personalizado.

```liquid
{{ entry.fields.['Locations'] | static_map: '600x300',5,'roadmap','https://goo.gl/5y3S82'}}
```

El filtro `dynamic_map` acepta un atributo adicional para controlar la visibilidad de los controles de zoom, arrastre y pantalla completa.

```liquid
{{ entry.fields['Locations'] | dynamic_map: '600x300',5,'roadmap','https://goo.gl/5y3S82',true}}
```

:::tip Tip
Para usar los atributos de las entradas, puedes usar la notación con punto o con corchetes. Así, <span v-pre>`{{ entry.meta.slug }}`</span> retorna el mismo valor que <span v-pre>`{{ entry.meta['slug'] }}`</span>. Si cuentas con un campo llamado `location`, puedes usarlo tanto como <span v-pre>`{{ entry.fields.location }}`</span> o <span v-pre>`{{ entry.fields['location'] }}`</span>.
:::

