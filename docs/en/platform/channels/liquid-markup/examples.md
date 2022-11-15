---
search: true
---

# Ejemplos

En cualquier parte de Channels (Sitios, Widgets, y Plantillas) puedes usar Liquid para crear contenido dinámico. A continuación, mostraremos varios ejemplos que puedes utilizar para tus casos de uso.

### Desplegar listado de Entradas de un Tipo

En [Páginas de Contenido](/es/platform/channels/pages.html#pagina-de-contenido) puedes generar un listado de todas las Entradas de un Tipo. En este caso, tomamos todas las Entradas del Tipo `producto` en el Espacio `Mi Banco`. La variable `entries`  de la línea 1 es un arreglo del drop [Entrada](/es/platform/channels/drops.html#entrada). Se recorre este arreglo para desplegar por renglón el `meta.uuid` y `meta.title` de cada Entrada. 

```liquid
{% assign entries = spaces['mi-banco'].types['producto'].entries %}
<p>Los productos que ofrecemos son:</p>
<ul>
{% for entry in entries %}
  <li>{{ entry.meta.uuid }} -- {{ entry.meta.title }}</li>
{% endfor %}
</ul>
```

Para poder usar estos ejemplos en tu sitio, debes reemplazar el ID de Espacio y Tipo con tu información. Estos IDs los puedes encontrar como el Identificador de tu Espacio, y el Identificador de tu Tipo.
 
En el caso de una entrada de cardinalidad single (como por ejemplo un aviso de privacidad), puedes usar `entry.url` para desplegar el URL de la siguiente manera:

```liquid
Visita nuestro <a href="{{ spaces['mi-banco'].types['privacidad'].entry.url }}">Aviso de Privacidad</a>.
```

### Desplegar cantidad total de Entradas

Para acceder a la cantidad total de entradas que retorna un filtro de contenido, puedes usar el filtro de Liquid `entries.size`, por ejemplo:

```liquid
{% assign entries = spaces['mi-banco'].types['products'].entries %}
<p>Ofrecemos un total de {{ entries.size }} productos para ti!</p>
```

### Filtros

Si quieres filtrar las entradas, lo puedes hacer a través de los siguientes atributos: 
  - **by_uuid**
  - **by_slug**
  - **by_category**
  - **by_type**
  - **by_tag**
  - **by_lang**
  - **filter_by**

Todos los filtros deben recibir un arreglo de Entries y es posible concatenar multiples filtros. 

#### Filtro

En el siguiente ejemplo, filtramos las Entradas de tipo `post`, con categoría `news`. Después tomamos el resultado y desplegamos todas las Entradas de tipo `news`:

```liquid
{% assign entries = spaces['mi-banco'].types['post'].entries | by_category: 'news' %}
<p>Estas son todas nuestras noticias:</p>
<ul>
{% for entry in entries %}
<li><a href="entry.url">{{ entry.meta.title }}</a></li>
{% endfor %}    
```

#### Filtro concatenado

En el siguiente ejemplo, filtramos las Entradas de tipo `post`, con categoría `news`, que además tengan el tag `campaña`. Después tomamos el resultado y desplegamos las noticias que cumplen todos los criterios:

```liquid
{% assign entries = spaces['mi-banco'].types['post'].entries | by_category: 'news' | by_tag: 'campaña' %}
<p>Las siguientes noticias son relevantes para ti!</p>
<ul>
{% for entry in entries %}
<li><a href="entry.url">{{ entry.meta.title }}</a></li>
{% endfor %}    
```

#### Filter_by

En el caso del filtro `filter_by`, se debe utilizar para atributos meta o custom fields del Tipo de Contenido, por ejemplo:

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

La selección de entradas siempre retorna un array, por lo que es necesario iterar sobre el resultado o acceder al primer elemento, en caso de filtrar por un único uuid:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | by_uuid: 'entry_uuid' %}
{% assign entry = entries.first %}
```

Puedes paginar las entradas haciendo uso del filtro `paginated` y mostrar los links de paginación con el filtro `pagination_links`, por ejemplo:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | paginated: 10 %}
<ul>
  {% for entry in entries %}
  <li>{{ entry.meta.slug }}</li>
  {% endfor %}
</ul>
{{ entries | pagination_links }}
```

En el caso anterior, se paginará el listado de entradas con 10 elementos por página y al final del listado aparecerán los links de la paginación. Puedes navegar por cada página usando el parámetro GET `page` en la URL, por ejemplo `mi-pagina.com/landing?page=2`.

:::warning Atención
Ten en cuenta que si tienes más de un widget que use la paginación de contenido, al usar los parámetros _GET_ `per_page` y `page` en la URL, todos los widgets con paginación de la página se verán afectados por esos parámetros.
:::

:::warning Atención
Para hacer uso de la paginación en un widget personalizado, se debe cambiar el filtro asociado a la paginación por <span v-pre>`{{ entries | pagination_links_remote }}`</span>. Esto es necesario dado que los widget personalizados se cargan de forma asíncrona. Junto con el cambio anterior, se debe asegurar de que _JQuery_ está disponible en el sitio y recordar que al hacer uso de los links de paginación, solo cambiará el HTML del widget y no se ejecutará nuevamente el _JavaScript_ del widget.
:::