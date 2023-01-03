---
search: true
---

# Filtros

El marcado Output puede aceptar filtros, que modifican el resultado de la sentencia Output. Puede invocar filtros siguiendo la expresión principal de la sentencia Output con:

* Un caracter de barra vertical (`|`)
* El nombre del filtro
* Opcionalmente, dos puntos (`:`) y una lista separada por comas de parámetros adicionales al filtro. Cada parámetro adicional debe ser una expresión válida, y cada filtro predefine los parámetros que acepta y el orden en que deben ser pasados.

Los filtros también se pueden unir entre sí añadiendo sentencias de filtro adicionales (comenzando con otro carácter de barra vertical). El Output del filtro anterior será el Input para el siguiente.

```liquid
Hello {{ 'tobi' | upcase }}
Hello tobi has {{ 'tobi' | size }} letters!
Hello {{ '*tobi*' | textilize | upcase }}
Hello {{ 'now' | date: "%Y %h" }}
```

Un filtro es un método Ruby que toma uno o más parámetros y devuelve un valor. Los parámetros se pasan a los filtros por posición: el primer parámetro es la expresión que precede al carácter de barra vertical, y se pueden pasar parámetros adicionales usando la sintaxis `name: arg1, arg2`.

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

### Escape once

Devuelve una versión escape de html sin afectar a las entidades escape existentes.

### Escape

Escape HTML a un string.

### First 

Obtener el primer elemento del array pasado.

### Floor

Redondea un número decimal hacia abajo al entero más cercano, *e.g.* 
<span v-pre>`{{ 4.6 | floor }} #=> 4`</span>

### Format Date

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

### Remove First
Elimina la primera incidencia *e.g.* <span v-pre>`{{ 'barbar' | remove_first:'bar' }} #=> 'bar'`</span>

### Remove
Elimina todas las incidencias *e.g.* <span v-pre>`{{ 'foobarfoobar' | remove:'foo' }} #=> 'barbar'`</span>

### Replace First
Reemplaza la primera incidencia *e.g.* <span v-pre>`{{ 'barbar' | replace_first:'bar','foo' }} #=> 'foobar'`</span>

### Replace
Reemplaza todas las incidencias *e.g.* <span v-pre>`{{ 'foofoo' | replace:'foo','bar' }} #=> 'barbar'`</span>

### Reverse
Invierte el array dado.

### Round
Redondea al número entero más cercano o al número especificado de decimales *e.g.* <span v-pre>`{{ 4.5612 | round: 2 }} #=> 4.56`</span>

### Rstrip 
Elimina todos los espacios en blanco del final de un string

### Script Tag
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

### URL Encode
Codifica un string a URL

## Commerce

Estos son los filtros liquid que alteran valores relacionados con Comercio.

### Format Currency

Agrega formato de divisa a un valor. *e.g.* 
<span v-pre>`{{ 4 | format_currency }} => $4`</span>

## Content

Estos son los filtros liquid que alteran valores relacionados al módulo de Content en Modyo Platform.

### Asset Image

Retorna los tags de una imagen usando su uuid del Gestor de Archivos. *e.g.*
<span v-pre>`{{ uuid | asset_image }}`</span>

### Asset Link

Retorna el URL de una imagen usando su uuid del Gestor de Archivos. *e.g.*
<span v-pre>`{{ uuid | asset_link: 'Este es una liga para el asset' }}`</span>

### Asset URL by UUID

Retorna el URL de una imagen usando su uuid del Gestor de Archivos. *e.g.*
<span v-pre>`{{ uuid | asset_url_by_uuid }}`</span>

### Asset Video

Retorna los tags de un video usando su uuid del Gestor de Archivos. *e.g.*
<span v-pre>`{{ uuid | asset_video: 350, 300 }}`</span>

**Parametros:**
- uuid (String) — asset uuid
- width (Integer) (default: 300) — ancho
- height (Integer) (default: 200) — largo

### By Category

Retorna una lista de Entradas que pertenecen a la Categoría seleccionada. *e.g.*
<span v-pre>`{% assign filtered_entries = entries | by_category: 'category2,category1,category3' %}`</span>

**Parametros:**
- entries (ArrayEntry) — array con entradas
- list (String) (default: '') — String con categorías separadas por coma.

### By Lang

Retorna una lista de Entradas que pertenecen a un lenguaje seleccionado. *e.g.*
<span v-pre>`{% assign entries = widget.entries | locale: 'es,en,pt' %} => entries`</span>

**Parametros:**
- entries (ArrayEntry) — array con entradas
- locale (String) (default: '') — String con lenguajes separadas por coma.

### By Slug

Retorna una lista de Entradas que pertenecen a un slug seleccionado. *e.g.*
<span v-pre>`{% assign filtered_entries = entries | by_slug: 'slug2,slug1,slug' %}`</span>

**Parametros:**
- entries (ArrayEntry) — array con entradas
- slug (String) (default: '') — Slug separadas por coma.

### By Tag

Retorna una lista de Entradas que pertenecen a un tag seleccionado. *e.g.*
<span v-pre>`{% assign entries = widget.entries | by_tag: 'tag2,tag1,tag3' %} => entries`</span>

**Parametros:**
- entries (ArrayEntry) — array con entradas
- locale (String) (default: '') — String con tags separadas por coma.

### By Type

Retorna una lista de Entradas que pertenecen a un Tipo de Contenido seleccionado. *e.g.*
<span v-pre>`{% assign filtered_entries = entries | by_type: 'type2,type1,type3' %}`</span>

**Parametros:**
- entries (ArrayEntry) — array con entradas
- locale (String) (default: '') — String con tipos de contenido separados por coma.

### Filter By

Retorna una lista de Entradas que cumplen con un filtro. *e.g.*
<span v-pre>`{% assign entries = widget.entries | filter_by: field: 'name', eq: 'entry3Cat3' %}`</span>

**Parametros:**
- entries (ArrayEntry) — array con entradas
- opts (Hash) (default: {}) — hash con el campo y eq como el valor

### Filter By Query String

Retorna una lista de Entradas que cumplen con un query. Se pueden usar operadores lógicos, varios campos meta, URLs, o tags de Liquid. 

**Operators**:

- gt, lt, in, all, nin

**Fields:**
- meta.category meta.category_slug meta.category_name meta.uuid meta.name meta.created_at
 meta.updated_at meta.published_at meta.unpublished_at meta.slug meta.tag

**Url examples:**

- https://company.site.com/testsite?meta.category_slug=category3
- https://company.site.com/testsite?meta.tag=tag_name
- https://company.site.com/testsite?meta.tag[in][]=tag1_name&meta.tag[in][]=tag2_name
- https://company.site.com/testsite?meta.created_at=1987-11-19T13:13:13

*e.g.*
<span v-pre>`{% assign entries = widget.entries | filter_by_query_string %}`</span>

**Parametros:**
- entries (ArrayEntry) — array con entradas

### From Published Date

Retorna una lista de Entradas que tengan una fecha de publicación más reciente que el límite. *e.g.*
<span v-pre>`{% assign entries = widgets.entries | from_published_date: date %}
`</span>

**Parametros:**
- entries (ArrayEntry) — array con entradas
- date (Datetime)(default: Time.zone.now) — fecha límite

### Limit

Límita el número de resultados. *e.g.*
<span v-pre>`{{ entries | limit: 1 }}`</span>

**Parametros:**
- objeto(Array) — array
- limit (Integer)(default: 1) — límite de resultados

### Paginated

Separa los resultados en páginas. *e.g.*
<span v-pre>`{{ objects | paginated: 10, 2 }}`</span>

**Parametros:**
- objeto(Array) — array
- per_page (Integer) (default: 10) — objectos por página
- page (Integer) (default: 1) — número de página a mostrar

### Sort By

Separa los resultados en páginas. *e.g.*
<span v-pre>`{{ objects | paginated: 10, 2 }}`</span>

**Parametros:**
- objeto(Array) — array
- per_page (Integer) (default: 10) — objectos por página
- page (Integer) (default: 1) — número de página a mostrar

### To Published Date

Retorna una lista de Entradas que tengan una fecha de publicación más vieja que el límite. *e.g.*
<span v-pre>`{% assign entries = widgets.entries | to_published_date: date %}
`</span>

**Parametros:**
- entries (ArrayEntry) — array con entradas
- date (Datetime)(default: Time.zone.now) — fecha límite


## Crypto

Estos son los filtros liquid que alteran valores relacionados a la Cryptología.

### Base64 Decode

Retorna el valor Base64-decoded de un string *e.g.* 
<span v-pre> `{% 'Hello world' | base64_encode %} # => 'SGVsbG8gd29ybGQ='`</span>.

### Base64 Encode

Retorna el valor Base64-encoded de un string *e.g.* 
<span v-pre>`{% 'SGVsbG8gd29ybGQ=' | base64_decode %} # => 'Hello world'`</span>.

### HMAC SHA1

Retorna el hash SHA-1 usando un código de autenticación de mensajes (HMAC) de un string. *e.g.* 
<span v-pre>`{% 'Hello world' | hmac_sha1: 'key'  %} # => '2a73959742baf046e6e2e27e5ee94bcff0af31b1'`</span>

### HMAC SHA256
Retorna el hash SHA-256 usando un código de autenticación de mensajes (HMAC) de un string. *e.g.* 
<span v-pre>`{% 'Hello world' | hmac_sha256: 'key'  %} # => 'a82b2e160edaf92a6589dc11160d2a10c04449840a58717db308c1ee3512b039'`</span>

### MD5

Retorna el hash MD5 de un string. *e.g.* 
<span v-pre>`{% 'Hello world' | md5  %} # => '3e25960a79dbc69b674cd4ec67a72c62'`</span>

### SHA1 
Retorna el hash SHA-1 de un string. *e.g.* <span v-pre>`{% 'Hello world' | sha1  %} # => '7b502c3a1f48c8609ae212cdfb639dee39673f5e'`</span>

### SHA 256
Retorna el hash SHA-256 de un string. *e.g.* <span v-pre>`{% 'Hello world' | sha256  %} # => '64ec88ca00b268e5ba1a35678a1b5316d212f4f366b2477232534a8aeca37f3c'`</span>

## CSS

Estos son los filtros liquid que alteran valores relacionados a CSS en Modyo Platform.

### Brighten

Agrega brillo a un color. *e.g.* 
<span v-pre>`{{ '#00ff00' | brighten: 15 }} #=> '#26ff26'`</span>

### Darken

Reduce brillo a un color. *e.g.* 
<span v-pre>`{{ '#00ff00' | darken: 15 }} #=> '#00b300'`</span>

### Desaturate

Desatura un color. *e.g.* 
<span v-pre>`{{ '#00ff00' | desaturate: 15 }} #=> '#13ec13'`</span>

### Grayscale

Convierte un color a escala de gris. *e.g.* 
<span v-pre>`{{ '#00ff00' | grayscale }} #=> '#808080'`</span>

### Lighten

Aligerar un color. *e.g.* 
<span v-pre>`{{ '#00ff00' | lighten: 15 }} #=> '#4dff4d'`</span>

### Opacity

Modifica la opacidad de un color. *e.g.* 
<span v-pre>`{{ '#00ff00' | opacity: 0.5 }} #=> 'rgba(0, 255, 0, 0.5)'`</span>

### RGB

Transforma un color a su equivalente RGB. *e.g.* 
<span v-pre>`{{ '#00ff00' | rgb }} #=> 'rgb(0, 255, 0)'`</span>

### Saturate

Satura un color. *e.g.* 
<span v-pre>`{{ '#00ff00' | saturate: 15 }} #=> '#00ff00'`</span>

### Spin

Gira en grados a favor de las manecillas del reloj un color.
<span v-pre>`{{ '#00ff00' | spin: 15 }} #=> 'rgba(0, 255, 0, 0.5)'`</span>

## Location

Estos son los filtros liquid que alteran valores relacionados a la Geolocalización en Modyo Platform.

### Dynamic Map

Retorna un mapa dínamico de Google Maps. *e.g.*
<span v-pre>`{{  locations | dynamic_map: '600x300', 'true', 'roadmap', true}}`</span>

**Parametros**

- locations (ArrayHash) — Array de hashes con los puntos de latitud y longitud.
- size (String) (default: '600x300') — Tamaño en pixeles del mapa
- zoom (String) (default: 10) — Nivel de zoom para el mapa
- type (String) (default: 'roadmap') — Tipo de mapa
- icon (String) (default: '') — Ícono para el mapa
- controls (String) (default: true) — Controles de navegación para el mapa

### Static Map

Retorna un mapa estático de Google Maps. *e.g.*
<span v-pre>`{{  locations | static_map: '600x300', 'true', 'roadmap'}}`</span>

**Parametros**

- locations (ArrayHash) — Array de hashes con los puntos de latitud y longitud.
- size (String) (default: '600x300') — Tamaño en pixeles del mapa
- zoom (String) (default: 10) — Nivel de zoom para el mapa
- type (String) (default: 'roadmap') — Tipo de mapa
- icon (String) (default: '') — Ícono para el mapa


## Menu Items

Estos son los filtros liquid que alteran valores relacionados a los ítems de menús en Modyo Platform.

### Active Page

Determina si un item URL está activo. Retorna 'active' cuando es activo. *e.g.*
<span v-pre>`{{ 'company.modyo.com/jobs' | active_page: 'company.modyo.com/jobs' }} #=> 'active'`</span>

### Item Rel

Retorna 'noopener noreferrer' si un link es "\_blank". *e.g.*
<span v-pre>`{{ '_blank' | item_rel }} #=> 'noopener noreferrer'`</span>

### Resolve URL

Resuelve el URL de un path y URL base. *e.g.*
<span v-pre>`{{ 'dynamic_bank' | resolve_url: 'company.modyo.com' }} #=> 'company.modyo.com/dynamic_bank'`</span>

### Visible Items

Retorna una lista de ítems visibles en una lista de ítems. *e.g.*
<span v-pre>`{{ items | visible_items }}
`</span>

## Site

Estos son los filtros liquid que alteran valores relacionados a los Sitios en Modyo Platform.

### Asset Image Tag

Genera el HTML tag de una imagen. *e.g.* 
<span v-pre>`{{ asset | asset_image_tag: 'original' }}`</span>

### Asset Thumbnail Link Tag

Genera el HTML tag del thumbnail de una imagen. *e.g.* 
<span v-pre>`{{ asset | asset_thumbnail_link_tag: 'class', 'target' }}`</span>

**Parametros**

- asset (Asset) — Objecto de tipo Asset 
- classes (String) (default: '') — Clases HTML adicionales (opcional)
- target (String) (default: '') — targets HTML adicionales (opcional)

### Asset URL 

Genera la URL de un objeto tipo Asset. *e.g.* 
<span v-pre>`{{ {{ asset | asset_url: 'original' }}`</span>

### Audio Player

Genera la URL de un objeto tipo Audio. *e.g.* 
<span v-pre>`{{ {{ audio1 | audio_player }}`</span> 

### Bar Code

Genera la URL de un código de barras. *e.g.* 
<span v-pre>`{{  value | bar_code: 320, 320 }}`</span>

**Parametros**

- value (String) — Valor del código de barra
- width (Integer) (default: 100) — Ancho
- height (Integer) (default: 100) — Alto

### Button To

Genera un botón. *e.g.* 
<span v-pre>`{{ 'Hello World' | button_to: 'http://www.google.com' }}`</span> 

### Cookie Value

Retorna el valor de una cookie. *e.g.* 
<span v-pre>`{{ 32 | cookie_value }}`</span>

### Embedded Video

Retorna el URL de un video integrado. *e.g.* 
<span v-pre>`{{ movie2 | embedded_video }}`</span>

### Escape JS

Evita interpretar código JavaScript. *e.g.* 
<span v-pre>`{{ '<script>alert("hello world");</script>' | escape_js }}`</span>

### Format Date

Traduce una fecha a otro formato. *e.g.* 
<span v-pre>`{{ time | format_date: '%e %b, %Y' }}`</span>

**Parametros**

- time (DateTime) — Fecha
- format_date (String) (default: '') — El nuevo formato para la fecha

### Format DateTime

Traduce una fecha a formato DateTime. *e.g.* 
<span v-pre>`{{ time | format_datetime }}`</span>

### Format Short Date

Traduce una fecha a un formato reducido. dd-mm-yyyy *e.g.* 
<span v-pre>`{{ time | format_short_date }}`</span>

### Get Session ID

Retorna el ID de la sesión. *e.g.* 
<span v-pre>`{{ get_session_id }}`</span>

### Asset Image Tag

Retorna el tag de una imagen. *e.g.* 
<span v-pre>`{{ url | asset_image_tag }}`</span>

### Link To

Agrega un tag de anchor link. *e.g.* 
<span v-pre>`{{ 'Hello World' | link_to: 'http://www.google.com', 'this is my alt', 'small', '_blank' }}`</span>

**Parametros**

- text (String) (default: '') — texto para el link
- link (String) (default: '/') — url para el link
- alt (String) (default: '') — alt para el link
- class (String) (default: '') — class para el link
- target (String) (default: '') — target para el link

### Notifications

Despliega la variable de mensaje flash. *e.g.* 
<span v-pre>`{{ 'alert-error' | notifications }}`</span>

### Primary button to

Genera un botón de tipo primario. *e.g.* 
<span v-pre>`{{ 'Hello World' | primary_button_to: 'http://www.google.com', 'large' }}`</span>

**Parametros**

- text (String) (default: '') — texto para el link
- link (String) (default: '/') — url para el link
- size (String) (default: 'large') — tamaño para el link

### QR Code

Genera un código qr. *e.g* 
<span v-pre>`{{  value | qr_code: 4, 320, 320 }}`</span>

**Parametros**

- value (String) (default: '') — valor para el qr
- qr_size (Integer) (default: 4) — tamaño del qr
- width (Integer) (default: 100) — ancho del qr
- height (Integer) (default: 100) — largo del qr

### Sanitize HTML

Sanitiza los tags HTML de un String. *e.g.* 
<span v-pre>`{{ '<script>Hello World</script>' | sanitize }} #=> 'Hello World'`</span>

### Script Tag

Agrega un script tag. *e.g.* 
<span v-pre>`{{ 'test-script' | script_tag }}`</span>

### Search Box

Agrega un campo del buscador. *e.g.* 
<span v-pre>`{{ 'testsite' | search_box }}`</span>

### Strftime

Convierte un datetime a formato String. *e.g.* 
<span v-pre>`{{ time | strftime: '%m/%d/%y' }}
`</span>

### Strip tag

Elimina todos los tags HTML y su contenido de un String. *e.g.* 
<span v-pre>`{{ '<script>Hello World</script>' | strip_tags }} #=> ""`</span>

### Stylesheet Tag
Genera el tag HTML `<link>` para un template CSS, tomando como parámetros la URL y atributos de la forma `attr: 'value'`, *e.g.* <span v-pre>`{{ 'my-css-url' | stylesheet_tag: media: 'screen', title: 'color style' }}`</span> => `<link href='my-css-url' rel='stylesheet' type='text/css' media='screen' title='color style' />`

### Theme Javascript

Agrega un tag de theme en Javascript. *e.g.* 
<span v-pre>`{{ 'home-page-javascript' | theme_javascript }}`</span>

### Theme Stylesheet

Agrega un tag de theme en CSS. *e.g.* 
<span v-pre>`{{ 'home-page-stylesheet' | theme_stylesheet }}`</span>

### Time Ago in Words

Convierte una fecha en String a en palabras. *e.g.* 
<span v-pre>`{{ '01-02-2019' | time_ago_in_words }} #=> 'over 3 years'`</span>

### Translate

Resuelve el texto de traducción para llaves de Sitios. Valores personalizados serán retornados si existen. *e.g.* 
<span v-pre>`{{ 'admin.logs.errors.no_logs_yet' | translate }}`</span>

### Truncate HTML

Retorna un String después de truncarlo. *e.g.* 
<span v-pre>`{{ html | truncate_html: 10 }}`</span>

### Video Player

Agrega un reproductor de video en código HTML usando un asset del Gestor de Archivos. *e.g.* 
<span v-pre>`{{ movie1 | video_player: 320, 320 }}`</span>

**Parámetros**

- video (Asset) — Objeto de tipo Video del Gestor de Archivos
- width (Integer) — ancho para el video
- height (Integer) — largo para el video

## User

Estos son los filtros liquid que alteran valores relacionados con los Usuarios.

### Image For

Despliega el código HTML para la imágen de un usuario. *e.g.* 
<span v-pre>`{{  user | avatar_for: 'C50x50', true }}`</span>

**Parámetros**

- user (User) — Objeto User
- size (Integer) (default: 'C50x50') — Tamaño para la imágen
- link (Boolean) (default: true) — True agrega una liga hacia el perfil del usuario.

### Default Avatar Image

Despliega la imágen por defecto del avatar. *e.g.* 
<span v-pre>`{{  user | avatar_for: 'C50x50' }}`</span>

**Parámetros**

- user (User) — Objeto User
- size (Integer) (default: 'C50x50') — Tamaño para la imágen

## Widget

Estos son los filtros liquid que alteran valores relacionados con los Widgets.

### Entry Limit

Determina el límite de entradas para un widget. *e.g.* 
<span v-pre>`{{  widget1 | entry_limit }}`</span>

### Resolve Home Widget List

Retorna una lista de todos los widgets que pertenecen a un Sitio. *e.g.* 
<span v-pre>`{{  site | resolve_home_widget_list }}`</span>

### Resolve Me Widget List

Retorna una lista de todos los widgets que pertenecen a una página "me". *e.g.* 
<span v-pre>`{{  site | resolve_me_widget_list }}`</span>

### Resolve Widget List

Retorna una lista de todos los widgets que pertenecen a una página. *e.g.* 
<span v-pre>`{{  site | resolve_widget_list: page }}`</span>

**Parámetros**

- site (Site) — Objeto de tipo Sitio
- page (Page) — Objeto de tipo Página