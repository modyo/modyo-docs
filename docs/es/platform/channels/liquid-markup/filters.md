---
search: true
---

# Filtros

Un filtro es un método Ruby que toma uno o más parámetros y devuelve un valor. Los parámetros se pasan a los filtros por posición: el primer parámetro es la expresión que precede al carácter de barra vertical, y se pueden pasar parámetros adicionales usando la sintaxis `name: arg1, arg2`.

El marcado Output puede aceptar filtros, que modifican el resultado de la sentencia Output. Puede invocar filtros siguiendo la expresión principal de la sentencia Output con:

- Un caracter de barra vertical (`|`)
- El nombre del filtro
- Opcionalmente, dos puntos (`:`) y una lista separada por comas de parámetros adicionales al filtro. Cada parámetro adicional debe ser una expresión válida, y cada filtro predefine los parámetros que acepta y el orden en que deben ser pasados.

Los filtros también se pueden unir entre sí añadiendo sentencias de filtro adicionales (comenzando con otro carácter de barra vertical). El Output del filtro anterior será el Input para el siguiente.

```liquid
Hello {{ 'tobi' | upcase }}
Hello tobi has {{ 'tobi' | size }} letters!
Hello {{ '*tobi*' | textilize | upcase }}
Hello {{ 'now' | date: "%Y %h" }}
```

## Básicos

### Append

Añade un string *e.g.*
<span v-pre>`{{ 'foo' | append:'bar' }} #=> 'foobar'`</span>

### Capitalize

Poner palabra en mayúscula en la frase de entrada.

### Ceiling

Redondea hacia arriba un número decimal al próximo entero, *e.g.*
<span v-pre>`{{ 4.6 | ceil }} #=> 5`</span>

### Date

Da formato a una fecha ([syntax reference](https://shopify.dev/api/liquid/filters#date))

### Default

Devuelve la variable dada a menos que sea nula o string vacío, entonces devuelve el valor dado, *e.g.*
<span v-pre>`{{ undefined_variable | default: "Default value" }} #=> "Default value"`</span>

### Divided by

División de enteros *e.g.*
<span v-pre>`{{ 10 | divided_by:3 }} #=> 3`</span>

### Downcase

Convierte un string de entrada en minúsculas.

### Escape

Escape HTML a un string.

### Escape once

Devuelve una versión escape de html sin afectar a las entidades escape existentes.

### First

Obtener el primer elemento del array pasado.

### Floor

Redondea un número decimal hacia abajo al entero más cercano, *e.g.*
<span v-pre>`{{ 4.6 | floor }} #=> 4`</span>

### Format date

Da formato a una fecha con la localización del sitio, usa la misma sintaxis que `date`.

### Join

Une elementos del array con cierto caracter entre ellos.

### Last

Obtener el último elemento del array pasado.

### Lstrip

Elimina todos los espacios en blanco del principio de un string.

### Map

Mapear/coleccionar un array en una propiedad dada.

### Minus

Resta *e.g.*
<span v-pre>`{{ 4 | minus:2 }} #=> 2`</span>

### Modulo

Modulo *e.g.*
<span v-pre>`{{ 3 | modulo:2 }} #=> 1`</span>

### Newline to br
Reemplaza cada linea nueva (\n) con espacio HTML.

### Plus
Suma *e.g.*
<span v-pre>`{{ '1' | plus:'1' }} #=> 2`</span>, <span v-pre>`{{ 1 | plus:1 }} #=> 2`</span>

### Prepend
Precede un string *e.g.*
<span v-pre>`{{ 'bar' | prepend:'foo' }} #=> 'foobar'`</span>

### Remove
Elimina todas las incidencias *e.g.* <span v-pre>`{{ 'foobarfoobar' | remove:'foo' }} #=> 'barbar'`</span>

### Remove first
Elimina la primera incidencia *e.g.* <span v-pre>`{{ 'barbar' | remove_first:'bar' }} #=> 'bar'`</span>

### Replace
Reemplaza todas las incidencias *e.g.* <span v-pre>`{{ 'foofoo' | replace:'foo','bar' }} #=> 'barbar'`</span>

### Replace first
Reemplaza la primera incidencia *e.g.* <span v-pre>`{{ 'barbar' | replace_first:'bar','foo' }} #=> 'foobar'`</span>

### Reverse
Invierte el array dado.

### Round
Redondea al número entero más cercano o al número especificado de decimales *e.g.* <span v-pre>`{{ 4.5612 | round: 2 }} #=> 4.56`</span>

### Rstrip
Elimina todos los espacios en blanco del final de un string

### Script tag
Genera el tag HTML `<script>` para un template JavaScript, tomando como parámetros la URL y atributos de la forma `attr: 'value'`, *e.g.* <span v-pre>`{{ 'my-js-url' | script_tag: async: 'async', defer: 'defer' }}`</span> => `<script src='my-js-url' type='text/javascript' async='async' defer='defer'></script>`

### Size
Devolver el tamaño de un array o string

### Slice
Divide un string. Toma un desplazamiento y una longitud, *e.g.* <span v-pre>`{{ "hello" | slice: -3, 3 }} #=> llo`</span>

### Sort
Ordena elementos del array

### Split
Dividir un string en un patrón coincidente *e.g.* <span v-pre>`{{ "a~b" | split:"~" }} #=> ['a','b']`</span>

### Times
Multiplica  *e.g* <span v-pre>`{{ 5 | times:4 }} #=> 20`</span>

### Truncate
Restringe un string a x caracteres. También acepta un segundo parámetro que se añadirá al string *e.g.* <span v-pre>`{{ 'foobarfoobar' | truncate: 5, '.' }} #=> 'foob.'`</span>

### Truncatewords
Restringe una string a x palabras

### Uniq
Elimina elementos duplicados de un array, utilizando opcionalmente una propiedad determinada para comprobar su unicidad.

### Upcase
Convierte un string de entrada a mayúsculas

### URL encode
Codifica un string a URL

## Commerce

Estos son los filtros liquid que alteran valores relacionados con Comercio.

### Format currency

Agrega formato de divisa a un valor. *e.g.*
<span v-pre>`{{ 4 | format_currency }} => $4`</span>

<span v-pre>`{{ 1890.5123 | format_currency: unit: '¥', separator: ',', delimiter: '.', precision: 3 }} = ¥1.890,512`</span>

:::warning Importante
Este filtro determina el formato de la moneda y tiene prioridad sobre cualquier otra configuración de divisa.

Si no especificas parámetros de divisa con el filtro de currency, Modyo utiliza la configuración de [payment](/es/platform/customers/settings.html#configuracion-de-payment) del reino.

En caso de que el sitio no tenga un reino asociado y no especifiques parámetros, se aplicará el formato predefinido del idioma del sitio.
:::

**Parámetros**:

- unit - símbolo de la moneda.
- separator - separador de decimales.
- delimiter - separador de miles.
- precision - cantidad de dígitos decimales.


## Content

Estos son los filtros liquid que alteran valores relacionados al módulo de Content en Modyo Platform.

### Asset image

Retorna los tags de una imagen usando su uuid del Gestor de Archivos. Al usar Cloudflare para la optimización de imágenes, puedes usar estos parámetros adicionales: width, height, blur, quality, format y fit *e.g.*
<span v-pre>`{{ uuid | asset_image: width: 40, format: 'auto', fit: 'cover' }}`</span>

### Asset link

Retorna el URL de una imagen usando su uuid del Gestor de Archivos. *e.g.*
<span v-pre>`{{ uuid | asset_link: 'Este es una liga para el asset' }}`</span>

### Asset URL by UUID

Retorna el URL de una imagen usando su uuid del Gestor de Archivos. *e.g.*
<span v-pre>`{{ uuid | asset_url_by_uuid }}`</span>

### Asset video

Retorna los tags de un video usando su uuid del Gestor de Archivos. *e.g.*
<span v-pre>`{{ uuid | asset_video: 350, 300 }}`</span>

**Parametros**:
- uuid (String) — asset uuid
- width (Integer) (default: 300) — ancho
- height (Integer) (default: 200) — largo

### By category

Retorna una lista de Entradas que pertenecen a la Categoría seleccionada. *e.g.*
<span v-pre>`{% assign filtered_entries = entries | by_category: 'category2,category1,category3' %}`</span>

**Parametros**:
- entries (ArrayEntry) — array con entradas
- list (String) (default: '') — String con categorías separadas por coma.

### By lang

Retorna una lista de Entradas que pertenecen a un lenguaje seleccionado. *e.g.*
<span v-pre>`{% assign entries = widget.entries | locale: 'es,en,pt' %} => entries`</span>

**Parametros**:
- entries (ArrayEntry) — array con entradas
- locale (String) (default: '') — String con lenguajes separadas por coma.

### By slug

Retorna una lista de Entradas que pertenecen a un slug seleccionado. *e.g.*
<span v-pre>`{% assign filtered_entries = entries | by_slug: 'slug2,slug1,slug' %}`</span>

**Parametros**:
- entries (ArrayEntry) — array con entradas
- slug (String) (default: '') — Slug separadas por coma.

### By tag

Retorna una lista de Entradas que pertenecen a un tag seleccionado. *e.g.*
<span v-pre>`{% assign entries = widget.entries | by_tag: 'tag2,tag1,tag3' %} => entries`</span>

**Parametros**:
- entries (ArrayEntry) — array con entradas
- locale (String) (default: '') — String con tags separadas por coma.

### By type

Retorna una lista de Entradas que pertenecen a un Tipo de Contenido seleccionado. *e.g.*
<span v-pre>`{% assign filtered_entries = entries | by_type: 'type2,type1,type3' %}`</span>

**Parametros**:
- entries (ArrayEntry) — array con entradas
- locale (String) (default: '') — String con tipos de contenido separados por coma.

### By UUID

Filtra un arreglo de entradas por uno o más UUIDs.

**Parámetros**:
- entries (ArrayEntry) — colección (objeto antes de la barra)
- uuid_list (String) — lista de UUIDs separada por comas

Predeterminado: Si `uuid_list` está en blanco retorna la colección original.

*ej.* <span v-pre>`{% assign filtradas = entries | by_uuid: 'uuid2,uuid1,uuid3' %}`</span>

### Filtro de Entrada Compuesto (`by`)

Aplica múltiples filtros de entradas en una sola llamada. Claves soportadas (todas opcionales):
- types: slugs de tipos separados por comas (aplica `by_type`)
- categories: slugs de categorías separados por comas (aplica `by_category`)
- tags: tags separados por comas (aplica `by_tag`)
- slugs: slugs de entradas separados por comas (aplica `by_slug`)
- uuids: UUIDs separados por comas (aplica `by_uuid`)
- locale: código de idioma (aplica `by_lang`)
- from_published_date: fecha límite inicial (>= `published_at`)
- to_published_date: fecha límite final (<= `published_at`)
- sort_by: nombre de campo (`name`, `slug`, `created_at`, `updated_at`, `published_at` u otro path de campo)
- order: `asc` | `desc` (default: `desc`)
- per_page: cantidad de resultados por página (habilita paginación; default: 10)
- page: número de página (default: 1)

*ej.* <span v-pre>`{% assign entries = spaces['testing'].entries | by: types: 'promo,basic', locale: 'es', categories: 'destacadas,favoritas', tags: 'test,test2', slugs: 'slug2,slug1', uuids: 'uuid2,uuid1', sort_by: 'name', order: 'asc', per_page: 10, page: 2 %}`</span>

### Filter By (Operadores Extendidos)

Retorna una lista de Entradas que cumplen con un filtro.

**Parámetros**:
- entries (ArrayEntry) — array con entradas
- opts (Hash) (default: {}) — hash con campo y pares operador/valor

**Operadores soportados** (usar como llaves dentro de `opts`):
- `eq` — igual a (implícito cuando solo se provee `field` y valor)
- `gt`, `lt` — mayor que / menor que
- `in` — el valor del campo debe estar dentro de los valores separados por comas
- `nin` — el valor del campo NO debe estar dentro de los valores separados por comas
- `has` — el campo (tipo array) debe contener todos los valores separados por comas

Todos los operadores multi-valor aceptan un string separado por comas.

**Ejemplos**:

Filtrar entradas donde el campo `status` sea 'published' o 'featured':
<span v-pre>`{% assign entries = entries | filter_by: field: 'status', in: 'published,featured' %}`</span>

Filtrar entradas donde `author_id` no sea 1 ni 5:
<span v-pre>`{% assign entries = entries | filter_by: field: 'author_id', nin: '1,5' %}`</span>

Filtrar entradas que tengan ambos 'tech' y 'news' en su campo array `categories`:
<span v-pre>`{% assign entries = entries | filter_by: field: 'categories', has: 'tech,news' %}`</span>

### Filter By Query String

Retorna una lista de Entradas que cumplen con un query. Se pueden usar operadores lógicos, varios campos meta, URLs, o tags de Liquid.

**Operators**:

- gt, lt, in, all, nin

**Fields**:
- meta.category meta.category_slug meta.category_name meta.uuid meta.name meta.created_at
 meta.updated_at meta.published_at meta.unpublished_at meta.slug meta.tag

**Url examples**:

- https://company.site.com/testsite?meta.category_slug=category3
- https://company.site.com/testsite?meta.tag=tag_name
- https://company.site.com/testsite?meta.tag[in][]=tag1_name&meta.tag[in][]=tag2_name
- https://company.site.com/testsite?meta.created_at=1987-11-19T13:13:13

*e.g.*
<span v-pre>`{% assign entries = widget.entries | filter_by_query_string %}`</span>

**Parametros**:
- entries (ArrayEntry) — array con entradas

### From Published Date

Retorna una lista de Entradas que tengan una fecha de publicación más reciente que el límite. *e.g.*
<span v-pre>`{% assign entries = widgets.entries | from_published_date: date %}
`</span>

**Parametros**:
- entries (ArrayEntry) — array con entradas
- date (Datetime)(default: Time.zone.now) — fecha límite

### Limit

Límita el número de resultados. *e.g.*
<span v-pre>`{{ entries | limit: 1 }}`</span>

**Parametros**:
- objeto(Array) — array
- limit (Integer)(default: 1) — límite de resultados

### Paginated

Separa los resultados en páginas. *e.g.*
<span v-pre>`{{ objects | paginated: 10, 2 }}`</span>

**Parametros**:
- objeto(Array) — array
- per_page (Integer) (default: 10) — objetos por página
- page (Integer) (default: 1) — número de página a mostrar

### Sort By

Retorna un array con las entradas ordenadas por un campo *e.g.*
<span v-pre>`{% assign entries = widgets.entries | sort_by: 'name', 'asc' %}`</span>

**Parametros**:
- entries (ArrayEntry) — array con entradas
- atributo (String) — campo por el cual se quiere ordenar
- orden (String) - asc (asecendente) o desc (desciendiente)


### To Published Date

Retorna una lista de Entradas que tengan una fecha de publicación más vieja que el límite. *e.g.*
<span v-pre>`{% assign entries = widgets.entries | to_published_date: date %}
`</span>

**Parametros**:
- entries (ArrayEntry) — array con entradas
- date (Datetime)(default: Time.zone.now) — fecha límite


## Crypto

Estos filtros Liquid alteran valores relacionados con la Criptografía.

### Base64 Decode

Devuelve el valor Base64-decoded de un string (ej. <span v-pre> `{% 'Hello world' | base64_encode %} # => 'SGVsbG8gd29ybGQ='`</span>).

### Base64 Encode

Devuelve el valor Base64-encoded de un string (ej. <span v-pre>`{% 'SGVsbG8gd29ybGQ=' | base64_decode %} # => 'Hello world'`</span>).

### HMAC SHA1

Devuelve el hash SHA-1 usando un código de autenticación de mensajes (HMAC) de un string (ej. <span v-pre>`{% 'Hello world' | hmac_sha1: 'key' %} # => '2a73959742baf046e6e2e27e5ee94bcff0af31b1'`</span>).

### HMAC SHA256
Devuelve el hash SHA-256 usando un código de autenticación de mensajes (HMAC) de un string (ej. <span v-pre>`{% 'Hello world' | hmac_sha256: 'key' %} # => 'a82b2e160edaf92a6589dc11160d2a10c04449840a58717db308c1ee3512b039'`</span>).

### MD5

Devuelve el hash MD5 de un string (ej. <span v-pre>`{% 'Hello world' | md5 %} # => '3e25960a79dbc69b674cd4ec67a72c62'`</span>).

### SHA1
Devuelve el hash SHA-1 de un string (ej. <span v-pre>`{% 'Hello world' | sha1 %} # => '7b502c3a1f48c8609ae212cdfb639dee39673f5e'`</span>).

### SHA 256
Devuelve el hash SHA-256 de un string (ej. <span v-pre>`{% 'Hello world' | sha256 %} # => '64ec88ca00b268e5ba1a35678a1b5316d212f4f366b2477232534a8aeca37f3c'`</span>).

## CSS

Estos filtros Liquid alteran valores relacionados con CSS en Modyo Platform.

### Brighten

Agrega brillo a un color (ej. <span v-pre>`{{ '#00ff00' | brighten: 15 }} #=> '#26ff26'`</span>).

### Darken

Reduce el brillo de un color (ej. <span v-pre>`{{ '#00ff00' | darken: 15 }} #=> '#00b300'`</span>).

### Desaturate

Desatura un color (ej. <span v-pre>`{{ '#00ff00' | desaturate: 15 }} #=> '#13ec13'`</span>).

### Grayscale

Convierte un color a escala de grises (ej. <span v-pre>`{{ '#00ff00' | grayscale }} #=> '#808080'`</span>). Alias: `greyscale` (mismo resultado).

### Lighten

Aligera un color (ej. <span v-pre>`{{ '#00ff00' | lighten: 15 }} #=> '#4dff4d'`</span>).

### Opacity

Modifica la opacidad de un color (ej. <span v-pre>`{{ '#00ff00' | opacity: 0.5 }} #=> 'rgba(0, 255, 0, 0.5)'`</span>).

### RGB

Transforma un color a su equivalente RGB (ej. <span v-pre>`{{ '#00ff00' | rgb }} #=> 'rgb(0, 255, 0)'`</span>).

### Saturate

Satura un color (ej. <span v-pre>`{{ '#00ff00' | saturate: 15 }} #=> '#00ff00'`</span>).

### Spin

Gira un color en grados a favor de las manecillas del reloj (ej. <span v-pre>`{{ '#00ff00' | spin: 15 }} #=> 'rgba(0, 255, 0, 0.5)'`</span>).

## Location

Estos filtros Liquid alteran valores relacionados con la Geolocalización en Modyo Platform.

### Dynamic Map

Devuelve un mapa dinámico de Google Maps (ej. <span v-pre>`{{ locations | dynamic_map: '600x300', 'true', 'roadmap', true}}`</span>).

**Parametros**

- `locations` (ArrayHash) — Array de hashes con los puntos de latitud y longitud.
- `size` (String) (default: '600x300') — Tamaño en píxeles del mapa.
- `zoom` (String) (default: 10) — Nivel de zoom para el mapa.
- `type` (String) (default: 'roadmap') — Tipo de mapa.
- `icon` (String) (default: '') — Icono para el mapa.
- `controls` (String) (default: true) — Controles de navegación para el mapa.

### Static Map

Devuelve un mapa estático de Google Maps (ej. <span v-pre>`{{ locations | static_map: '600x300', 'true', 'roadmap'}}`</span>).

**Parametros**

- `locations` (ArrayHash) — Array de hashes con los puntos de latitud y longitud.
- `size` (String) (default: '600x300') — Tamaño en píxeles del mapa.
- `zoom` (String) (default: 10) — Nivel de zoom para el mapa.
- `type` (String) (default: 'roadmap') — Tipo de mapa.
- `icon` (String) (default: '') — Icono para el mapa.


## Menu Items

Estos filtros Liquid alteran valores relacionados con los ítems de menús en Modyo Platform.

### Active Page

Determina si un ítem URL está activo. Devuelve 'active' cuando está activo (ej. <span v-pre>`{{ 'company.modyo.com/jobs' | active_page: 'company.modyo.com/jobs' }} #=> 'active'`</span>).

### Item Rel

Devuelve 'noopener noreferrer' si un enlace es "\_blank" (ej. <span v-pre>`{{ '_blank' | item_rel }} #=> 'noopener noreferrer'`</span>).

### Resolve URL

Resuelve la URL de un path y URL base (ej. <span v-pre>`{{ 'dynamic_bank' | resolve_url: 'company.modyo.com' }} #=> 'company.modyo.com/dynamic_bank'`</span>).

### Visible Items

Devuelve una lista de ítems visibles en una lista de ítems (ej. <span v-pre>`{{ items | visible_items }}`</span>).

## Origination

Estos son los filtros liquid que alteran valores relacionados con originations en Modyo Platform.

### By UID

Devuelve el Origination con el UID seleccionado. *ej.*
<span v-pre>`{% assign my_origination = site.originations | by_uid: 'my-origination' %}`</span>

**Parámetros:**
- originations (ArrayOrigination) - array con originations
- uid (String) - UID del Origination

## Site

Estos filtros Liquid alteran valores relacionados con los Sitios en Modyo Platform.

### Asset image Tag

Genera la etiqueta HTML de una imagen (ej. <span v-pre>`{{ asset | asset_image_tag: 'original' }}`</span>).

### Asset Thumbnail Link Tag

Genera la etiqueta HTML del thumbnail de una imagen (ej. <span v-pre>`{{ asset | asset_thumbnail_link_tag: 'class', 'target' }}`</span>).

**Parametros**

- `asset` (Asset) — Objeto de tipo Asset.
- `classes` (String) (default: '') — Clases HTML adicionales (opcional).
- `target` (String) (default: '') — Targets HTML adicionales (opcional).

### Asset URL

Genera la URL de un objeto **Asset** o una ruta de activo de plantilla. Para los objetos Asset que utilizan Cloudflare para la optimización de imágenes, puedes usar los siguientes parámetros adicionales: width, height, blur, quality, format y fit. (ej. <span v-pre>{{ assets['asset_uuid'] | asset_url: blur: 40, format: 'auto', fit: 'cover' }}</span>).
Para las rutas de assets de plantilla (template asset paths) desde el template builder, especifica el tipo de asset como el segundo argumento (ej. <span v-pre>{{ 'base' | asset_url: 'js' }}</span>). También puedes usar los filtros `script_tag` o `stylesheet_tag` para generar automáticamente la etiqueta HTML `<script>` o `<link>` completa (ej. <span v-pre>{{ 'base' | asset_url: 'css' | stylesheet_tag: media: 'screen' }}</span>).

### Audio Player

Genera la URL de un objeto tipo Audio (ej. <span v-pre>`{{ audio1 | audio_player }}`</span>).

### Bar Code

Genera la URL de un código de barras (ej. <span v-pre>`{{ value | bar_code: 320, 320 }}`</span>).

**Parametros**

- `value` (String) — Valor del código de barras.
- `width` (Integer) (default: 100) — Ancho.
- `height` (Integer) (default: 100) — Alto.

### Button To

Genera un botón (ej. <span v-pre>`{{ 'Hello World' | button_to: 'http://www.google.com' }}`</span>).

### Cookie Value

Devuelve el valor de una cookie (ej. <span v-pre>`{{ 32 | cookie_value }}`</span>).

### Embedded Video

Devuelve la URL de un video integrado (ej. <span v-pre>`{{ movie2 | embedded_video }}`</span>).

### Escape JS

Evita interpretar código JavaScript (ej. <span v-pre>`{{ '<script>alert("hello world");</script>' | escape_js }}`</span>).

### Format Date

Traduce una fecha a otro formato (ej. <span v-pre>`{{ time | format_date: '%e %b, %Y' }}`</span>).

**Parametros**

- `time` (DateTime) — Fecha.
- `format_date` (String) (default: '') — El nuevo formato para la fecha.

### Format DateTime

Traduce una fecha a formato DateTime (ej. <span v-pre>`{{ time | format_datetime }}`</span>).

### Format Short Date

Traduce una fecha a un formato reducido (dd-mm-yyyy) (ej. <span v-pre>`{{ time | format_short_date }}`</span>).

### Get Session ID

Devuelve el identificador de la sesión actual.

*ej.* <span v-pre>`{{ '' | get_session_id }}`</span>

### Image Tag (URL Genérica)

Genera una etiqueta `<img>` simple para una URL cruda de imagen (no un objeto Asset).

*ej.* <span v-pre>`{{ 'https://cdn.example.com/logo.png' | image_tag }}`</span>

### Link To

Agrega una etiqueta de enlace (anchor link) (ej. <span v-pre>`{{ 'Hello World' | link_to: 'http://www.google.com', 'this is my alt', 'small', '_blank' }}`</span>).

**Parametros**

- `text` (String) (default: '') — Texto para el enlace.
- `link` (String) (default: '/') — URL para el enlace.
- `alt` (String) (default: '') — Texto alternativo para el enlace.
- `class` (String) (default: '') — Clase CSS para el enlace.
- `target` (String) (default: '') — Target para el enlace.

### Notifications

Muestra la variable de mensaje flash (ej. <span v-pre>`{{ 'alert-error' | notifications }}`</span>).

### Primary button to

Genera un botón de tipo primario (ej. <span v-pre>`{{ 'Hello World' | primary_button_to: 'http://www.google.com', 'large' }}`</span>).

**Parametros**

- `text` (String) (default: '') — Texto para el enlace.
- `link` (String) (default: '/') — URL para el enlace.
- `size` (String) (default: 'large') — Tamaño para el enlace.

### QR Code

Genera un código QR (ej. <span v-pre>`{{ value | qr_code: 4, 320, 320 }}`</span>).

**Parametros**

- `value` (String) (default: '') — Valor para el QR.
- `qr_size` (Integer) (default: 4) — Tamaño del QR.
- `width` (Integer) (default: 100) — Ancho del QR.
- `height` (Integer) (default: 100) — Alto del QR.

### Sanitize HTML

Sanitiza las etiquetas HTML de un String (ej. <span v-pre>`{{ '<script>Hello World</script>' | sanitize }} #=> 'Hello World'`</span>).

### Script tag

Agrega una etiqueta de script (ej. <span v-pre>`{{ 'test-script' | script_tag }}`</span>).

### Search Box

Agrega un campo de búsqueda (ej. <span v-pre>`{{ 'testsite' | search_box }}`</span>).

### Strftime

Convierte un datetime a formato String (ej. <span v-pre>`{{ time | strftime: '%m/%d/%y' }}`</span>).

### Strip tag

Elimina todas las etiquetas HTML y su contenido de un String (ej. <span v-pre>`{{ '<script>Hello World</script>' | strip_tags }} #=> ""`</span>).

### Stylesheet Tag
Genera la etiqueta HTML `<link>` para un template CSS, tomando como parámetros la URL y atributos (ej. `attr: 'value'`, <span v-pre>`{{ 'my-css-url' | stylesheet_tag: media: 'screen', title: 'color style' }}`</span> => `<link href='my-css-url' rel='stylesheet' type='text/css' media='screen' title='color style' />`).

### Theme Javascript

Agrega una etiqueta de tema en Javascript (ej. <span v-pre>`{{ 'home-page-javascript' | theme_javascript }}`</span>).

### Theme Stylesheet

Agrega una etiqueta de tema en CSS (ej. <span v-pre>`{{ 'home-page-stylesheet' | theme_stylesheet }}`</span>).

### Time Ago in Words

Convierte una fecha en String a palabras (ej. <span v-pre>`{{ '01-02-2019' | time_ago_in_words }} #=> 'over 3 years'`</span>).

### Translate

Resuelve el texto de traducción para claves de Sitios. Se devolverán valores personalizados si existen (ej. <span v-pre>`{{ 'admin.logs.errors.no_logs_yet' | translate }}`</span>).

### Truncate HTML

Devuelve un String después de truncarlo (ej. <span v-pre>`{{ html | truncate_html: 10 }}`</span>).

### Video Player

Agrega un reproductor de video en código HTML usando un asset del Gestor de Archivos (ej. <span v-pre>`{{ movie1 | video_player: 320, 320 }}`</span>).

**Parámetros**

- `video` (Asset) — Objeto de tipo Video del Gestor de Archivos.
- `width` (Integer) — Ancho para el video.
- `height` (Integer) — Alto para el video.

## Step

Estos son los filtros liquid que alteran valores relacionados con steps en Modyo Platform.

### By UID

Devuelve el Step con el UID seleccionado. *ej.*
<span v-pre>`{% assign my_step = origination.steps | by_uid: 'step-01' %}`</span>

**Parámetros:**
- steps (ArrayStep) - array con steps
- uid (String) - UID del Step

## Submission

Estos son los filtros liquid que alteran valores relacionados con submissions en Modyo Platform.

### By Origination

Devuelve los Submissions filtrados por UID de Origination. *ej.*
<span v-pre>`{% assign filtered_submissions = user.submissions | by_origination: 'my-origination' %}`</span>

**Parámetros:**
- submissions (ArraySubmission) - array con submissions del usuario
- uid (String) - UID del Origination

### By Status

Devuelve los Submissions con el estado seleccionado. *ej.*
<span v-pre>`{% assign filtered_submissions = user.submissions | by_status: 'completed' %}`</span>

**Parámetros:**
- submissions (ArraySubmission) - array con submissions del usuario
- status (String) - Estado de los Originations. Los valores soportados son 'pending', 'completed' y 'all'

### Completed

Verifica si un elemento (wrapper de step/task) está completado para un submission dado.

*ej.* <span v-pre>`{{ submission | completed: step }}`</span>

**Parámetros:**
- submission (Submission) — submission actual (objeto antes de la barra)
- element (Step|TaskResponse wrapper) — elemento a evaluar

Retorna: Boolean (true/false)

### URL (URL del Step para Submission)

Genera una URL navegable para un step dentro de un submission (primer task visible). Solo retorna valor si el submission está pendiente y el step está completado o el orden de steps permite navegación.

*ej.* <span v-pre>`{{ step | url: submission }}`</span>

### Resume Link

Retorna un tag HTML de enlace para retomar un step pendiente dentro de un submission, o el nombre del step si no hay URL disponible.

*ej.* <span v-pre>`{{ step | resume_link: submission }}`</span>

### Submissions Selector

Renderiza un fragmento HTML (dropdown) para seleccionar entre múltiples submissions pendientes (excluye el actual). No retorna nada si hay menos de 2 submissions pendientes.

*ej.* <span v-pre>`{{ pending_submissions | submissions_selector }}`</span>

## Task

Estos son los filtros liquid que alteran valores relacionados con tasks en Modyo Platform.

### By UID

Devuelve el Task con el UID seleccionado. *ej.*
<span v-pre>`{% assign my_task = step.tasks | by_uid: 'task-01' %}`</span>

**Parámetros:**
- tasks (ArrayTask) - array con tasks
- uid (String) - UID del Task

## User

Estos filtros Liquid alteran valores relacionados con los Usuarios.

### Default Avatar Image

Muestra la imagen por defecto del avatar (ej. <span v-pre>`{{ user | avatar_for: 'C50x50' }}`</span>).

**Parámetros**

- `user` (User) — Objeto User.
- `size` (Integer) (default: 'C50x50') — Tamaño para la imagen.

### Image For

Muestra el código HTML para la imagen de un usuario (ej. <span v-pre>`{{ user | avatar_for: 'C50x50', true }}`</span>).

**Parámetros**

- `user` (User) — Objeto User.
- `size` (Integer) (default: 'C50x50') — Tamaño para la imagen.
- `link` (Boolean) (default: true) — `true` agrega un enlace hacia el perfil del usuario.

### By Form Slug

Retorna respuestas de formulario del usuario filtradas por un slug específico.

*ej.* <span v-pre>`{% assign responses = user.responses | by_form_slug: 'onboarding-form' %}`</span>

**Parámetros:**
- responses (Array&lt;FormResponse&gt;) — user.responses
- form_slug (String) — slug del formulario a coincidir

### By Response Date Range

Retorna respuestas de formulario creadas dentro de un rango de fechas (inclusivo).

*ej.* <span v-pre>`{% assign responses = user.responses | by_response_date_range: '2025-03-10', '2025-03-20' %}`</span>

**Parámetros:**
- responses (Array&lt;FormResponse&gt;) — user.responses
- date_from (String/Date) — fecha inicial (recomendado YYYY-MM-DD)
- date_to (String/Date) — fecha final (recomendado YYYY-MM-DD)

### By Answer Text

Retorna respuestas de formulario que contienen una respuesta cuyo `answers.text_field` coincide exactamente con el texto provisto.

*ej.* <span v-pre>`{% assign responses = user.responses | by_answer_text: 'Blue' %}`</span>

**Parámetros:**
- responses (Array&lt;FormResponse&gt;) — user.responses
- answer_text (String) — texto exacto a coincidir

## Widget

Estos filtros Liquid alteran valores relacionados con los Widgets.

### Entry Limit

Determina el límite de entradas para un widget (ej. <span v-pre>`{{ widget1 | entry_limit }}`</span>).

### Resolve Home Widget List

Devuelve una lista de todos los widgets que pertenecen a un Sitio (ej. <span v-pre>`{{ site | resolve_home_widget_list }}`</span>).

### Resolve Me Widget List

Devuelve una lista de todos los widgets que pertenecen a una página "me" (ej. <span v-pre>`{{ site | resolve_me_widget_list }}`</span>).

### Resolve Widget List

Devuelve una lista de todos los widgets que pertenecen a una página (ej. <span v-pre>`{{ site | resolve_widget_list: page }}`</span>).

**Parámetros**

- `site` (Site) — Objeto de tipo Sitio.
- `page` (Page) — Objeto de tipo Página.
