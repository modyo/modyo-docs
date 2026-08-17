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

### Base64 decode

Decodifica un string codificado en Base64 *e.g.*
<span v-pre>`{{ 'SGVsbG8gd29ybGQ=' | base64_decode }} #=> 'Hello world'`</span>

### Base64 encode

Codifica un string en Base64 *e.g.*
<span v-pre>`{{ 'Hello world' | base64_encode }} #=> 'SGVsbG8gd29ybGQ='`</span>

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


## Common

Estos filtros Liquid están disponibles en cualquier plantilla y no dependen de un módulo.

### Handle

Convierte un texto en un identificador apto para una URL, *e.g.*
<span v-pre>`{{ ' A s.?%$!' | handle }} #=> 'a-s'`</span>

**Parámetros**

- `string` (String) — texto a convertir (objeto antes de la barra).
- `separator` (String) (default: '-') — carácter con el que se reemplazan los espacios y los caracteres especiales.
- `preserve_case` (Boolean) (default: false) — con `true` conserva las mayúsculas y minúsculas del texto original.

Las reglas que aplica son:

- Pasa todo a minúsculas, salvo que `preserve_case` sea `true`.
- Reemplaza los espacios y los caracteres especiales por el separador.
- Colapsa una secuencia de espacios o caracteres especiales consecutivos en un solo separador.
- Elimina los separadores del comienzo y del final.
- Con un texto vacío devuelve un texto vacío.

*ej.*

<span v-pre>`{{ 'Hello   World!!!' | handle }} #=> 'hello-world'`</span>

<span v-pre>`{{ '---Hello---World---' | handle }} #=> 'hello-world'`</span>

<span v-pre>`{{ 'CamelCase Words' | handle: '-', true }} #=> 'CamelCase-Words'`</span>

<span v-pre>`{{ ' A s.?%$!' | handle: '.', true }} #=> 'A.s'`</span>

### Handleize

Alias de `handle`, con la misma firma y el mismo resultado (ej. <span v-pre>`{{ ' A s.?%$!' | handleize }} #=> 'a-s'`</span>). Existe para las plantillas que vienen de Shopify; en plantillas nuevas usa `handle`.

## Content

Estos son los filtros liquid que alteran valores relacionados al módulo de Content en Modyo Platform.

### Búsqueda de assets por UUID

Los filtros `asset_image`, `asset_link`, `asset_url_by_uuid` y `asset_video` buscan el archivo por su UUID en el ámbito de la cuenta, no del sitio.

:::warning Atención
Si el UUID no corresponde a ningún archivo de la cuenta, ninguno de los cuatro falla ni devuelve vacío: imprimen el mensaje `Error de liquid: No existe el archivo con UUID 'el-uuid-pedido'`, que queda publicado en la página. Revisa los UUID cuando muevas plantillas o contenido entre cuentas.
:::

### Asset image

Retorna los tags de una imagen usando su uuid del Gestor de Archivos. Al usar Cloudflare para la optimización de imágenes, puedes usar estos parámetros adicionales: width, height, blur, quality, format, fit, widths, sizes y style *e.g.*
<span v-pre>`{{ uuid | asset_image: width: 40, format: 'auto', fit: 'cover' }}`</span>

**Parámetros**:
- uuid (String) — asset uuid
- width (Integer) — ancho en píxeles
- height (Integer) — alto en píxeles
- quality (Integer) — porcentaje de calidad
- blur (Integer) — nivel de desenfoque
- fit (String) — modo de ajuste al recuadro
- format (String) — formato de salida
- widths (String) — lista de anchos separados por coma; emite un atributo `srcset` con un descriptor `Nw` por cada ancho
- sizes (String) — se emite tal cual como atributo `sizes`
- style (String) — se emite tal cual como atributo `style`

El `alt` de la imagen sale del **Texto alternativo** del archivo, el que se edita en [Media](/es/platform/content/asset-manager.html#editar-un-archivo).

El filtro tiene tres salidas posibles:

- **Sin opciones, o con el procesamiento de imágenes por CDN desactivado**: un `<img>` con la URL original del archivo. Las opciones se ignoran todas.
- **Con opciones y el procesamiento activo**: un `<img>` con la URL transformada.
- **Con `widths`**: además de la URL transformada en el `src`, un `srcset` con una variante por cada ancho de la lista, más los atributos `sizes` y `style` si los pasaste.

*ej.* <span v-pre>`{{ uuid | asset_image: width: 800, quality: 80, widths: '300, 600, 900', sizes: '(min-width: 400px) 298px, 78.75vw' }}`</span>

:::warning Atención
`sizes` y `style` solo se emiten cuando pasas también `widths`: sin él, el filtro devuelve un `<img>` con `src` y `alt` y nada más. Y de cada variante del `srcset` solo se propagan `width`, `quality`, `blur` y `height`, no `fit` ni `format`, así que si necesitas el mismo recorte o el mismo formato en todas las resoluciones arma el `srcset` a mano con varias llamadas al filtro.
:::

:::tip Tip
El procesamiento de imágenes por CDN es una configuración de la cuenta. Mientras no esté activo, las nueve opciones se ignoran sin error y la página publica la imagen en su tamaño original.
:::

### Asset link

Emite una etiqueta de enlace HTML que apunta al archivo del Gestor de Archivos identificado por su UUID. El argumento es el texto visible del enlace y, si lo omites, se usa el nombre de archivo del asset. *e.g.*
<span v-pre>`{{ uuid | asset_link: 'Descarga el instructivo' }}`</span> => `<a href='https://midominio.com/uploads/instructivo.pdf'>Descarga el instructivo</a>`

**Parámetros**:
- uuid (String) — asset uuid
- label (String) (default: nombre de archivo del asset) — texto visible del enlace

:::tip Tip
Si lo que necesitas es solo la dirección del archivo, para armar tu propio markup, usa `asset_url_by_uuid`.
:::

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

Retorna una lista de Entradas en el idioma indicado. El filtro se llama `by_lang`: `locale` es el nombre del parámetro, no el del filtro. *e.g.*
<span v-pre>`{% assign entries = widget.entries | by_lang: 'es' %} => entries`</span>

**Parametros**:
- entries (ArrayEntry) — array con entradas
- locale (String) (default: '') — un único código de idioma

`by_lang` reemplaza la condición de idioma que la colección ya tuviera, no la acumula: el último `by_lang` de la cadena es el que manda.

:::warning Atención
No acepta una lista separada por comas. Un valor como `'es,en,pt'` se compara tal cual contra el idioma de cada entrada, así que el resultado es una colección vacía en lugar de la unión de los tres idiomas. Si necesitas varios idiomas, resuelve una colección por idioma y recórrelas por separado.

Aplicado sobre algo que no sea una colección de entradas, el filtro aborta y en el HTML publicado queda el comentario `<!-- Liquid Error -->` en lugar del bloque.
:::

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
- list (String) (default: '') — String con tags separados por coma.

### By type

Retorna una lista de Entradas que pertenecen a un Tipo de Contenido seleccionado. *e.g.*
<span v-pre>`{% assign filtered_entries = entries | by_type: 'type2,type1,type3' %}`</span>

**Parametros**:
- entries (ArrayEntry) — array con entradas
- list (String) (default: '') — String con tipos de contenido separados por coma.

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
- locale: un único código de idioma (aplica `by_lang`; no acepta lista separada por comas)
- from_published_date: fecha límite inicial (>= `published_at`)
- to_published_date: fecha límite final (<= `published_at`)
- sort_by: nombre de campo (default: `created_at`). Admite `name`, `slug`, `created_at`, `updated_at` y `published_at`, o un campo con su prefijo (`fields.<nombre>` o `meta.<atributo>`); ver [Sort By](/es/platform/channels/liquid-markup/filters.html#sort-by)
- order: `asc` | `desc` (default: `desc`)
- per_page: cantidad de resultados por página (habilita paginación; default: 10)
- page: número de página (habilita paginación; default: 1)

*ej.* <span v-pre>`{% assign entries = spaces['testing'].entries | by: types: 'promo,basic', locale: 'es', categories: 'destacadas,favoritas', tags: 'test,test2', slugs: 'slug2,slug1', uuids: 'uuid2,uuid1', sort_by: 'name', order: 'asc', per_page: 10, page: 2 %}`</span>

`sort_by` y `order` son opcionales en la invocación, pero no en el efecto: `by` aplica siempre `sort_by`, con `created_at` y `desc` como valores por defecto. Una colección que ya venía ordenada por otro criterio, como la de un widget con su propio orden, sale reordenada por fecha de creación descendente aunque la plantilla no pida ningún ordenamiento, y no hay forma de pedirle a `by` que no ordene. Si necesitas conservar el orden de origen, encadena los filtros simples (`by_type`, `by_category`, `by_tag`, `by_slug`…) en lugar de usar `by`.

La paginación, en cambio, sí es opcional: solo se aplica si pasas `per_page` o `page`. Los valores por defecto de esas dos claves son los que toma el filtro cuando indicas una y omites la otra, y quedan sujetos a la precedencia de los parámetros de la URL descrita en [Paginated](/es/platform/channels/liquid-markup/filters.html#paginated).

:::warning Atención
Las claves que `by` no reconoce se ignoran en silencio, sin error ni aviso: un `type:` en singular o un `tag:` mal escrito no filtran nada y el listado sale completo. Revisa los nombres contra la lista de arriba antes de dar por perdido un filtro que no parece hacer nada.
:::

### Filter By (Operadores Extendidos)

Retorna una lista de Entradas que cumplen con un filtro.

**Parámetros**:
- entries (ArrayEntry) — array con entradas
- opts (Hash) (default: {}) — hash con campo y pares operador/valor

El valor de `field` se escribe siempre con su prefijo:

- `fields.<nombre>` para los campos del tipo de contenido.
- `meta.<atributo>` para los metadatos, con estos atributos disponibles: `meta.uuid`, `meta.name`, `meta.slug`, `meta.category`, `meta.category_slug`, `meta.category_name`, `meta.created_at`, `meta.updated_at`, `meta.published_at` y `meta.unpublished_at`. Para filtrar por tags usa `by_tag`.

:::warning Atención
Un nombre de campo sin prefijo se descarta en silencio: el filtro no lanza error y devuelve la colección completa, sin filtrar. Si un listado te muestra todas las entradas, revisa primero que el valor de `field` empiece por `fields.` o por `meta.`.
:::

**Operadores soportados** (usar como llaves dentro de `opts`):
- `eq` — igual a (implícito cuando solo se provee `field` y valor)
- `not` — distinto de. Con `nil` como valor devuelve las entradas que tienen algún valor en el campo
- `gt`, `lt` — mayor que / menor que
- `in` — el valor del campo debe estar dentro de los valores separados por comas
- `nin` — el valor del campo NO debe estar dentro de los valores separados por comas
- `has` — el campo (tipo array) debe contener todos los valores separados por comas
- `search` — busca el texto en los atributos de las ubicaciones de la entrada; necesita un campo de tipo ubicación
- `geohash` — busca por proximidad con un geohash en base 32; necesita un campo de tipo ubicación

Solo `in`, `nin` y `has` aceptan un string separado por comas; el resto toma un valor único. `search` y `geohash` se comportan igual que en la [API pública de Content](/es/platform/content/public-api-reference.html#operadores). El operador `all`, que aparece en la lista de Filter By Query String, no está disponible en `filter_by`.

**Ejemplos**:

Filtrar entradas donde el campo `status` sea 'published' o 'featured':
<span v-pre>`{% assign entries = entries | filter_by: field: 'fields.status', in: 'published,featured' %}`</span>

Filtrar entradas donde `author_id` no sea 1 ni 5:
<span v-pre>`{% assign entries = entries | filter_by: field: 'fields.author_id', nin: '1,5' %}`</span>

Filtrar entradas que tengan ambos 'tech' y 'news' en su campo array `categories`:
<span v-pre>`{% assign entries = entries | filter_by: field: 'fields.categories', has: 'tech,news' %}`</span>

Filtrar entradas cuyo campo `subtitle` tenga algún valor:
<span v-pre>`{% assign entries = entries | filter_by: field: 'fields.subtitle', not: nil %}`</span>

Filtrar entradas publicadas después de una fecha:
<span v-pre>`{% assign entries = entries | filter_by: field: 'meta.published_at', gt: '2026-01-01' %}`</span>

:::warning Atención
En dos casos `filter_by` aborta y en el HTML publicado queda el comentario `<!-- Liquid Error -->` en lugar del bloque: cuando lo llamas sin `field` y cuando lo aplicas sobre una colección de la que no se puede resolver el tipo de contenido, como <span v-pre>`spaces['blog'].entries`</span>. Parte siempre de una colección acotada a un tipo, como <span v-pre>`spaces['blog'].types['post'].entries`</span> o <span v-pre>`widget.entries`</span>.
:::

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
- objeto(Array) — colección de entradas (objeto antes de la barra)
- per_page (Integer) (default: 10) — objetos por página
- page (Integer) (default: 1) — número de página a mostrar

Los parámetros `page` y `per_page` de la URL tienen precedencia sobre los argumentos escritos en la plantilla. Con el ejemplo de arriba, una visita a `mi-pagina.com/landing?page=5` muestra la página 5 y no la 2: los argumentos actúan como valores iniciales, para la primera visita sin parámetros en la URL. Y como esos parámetros son globales para la página, alcanzan a la vez a todos los listados paginados que haya en ella.

El filtro acota los dos valores, vengan del argumento o de la URL: `per_page` se limita a un mínimo de 1 y a un máximo de 100, y `page` a un mínimo de 1. Un `per_page` de 500 entrega 100 resultados por página.

:::warning Atención
Aplicado sobre algo que no sea una colección de entradas, por ejemplo un array ya materializado por `sort`, por `map` o definido en la propia plantilla, el filtro devuelve la entrada intacta: no pagina y tampoco falla. El listado se ve completo, los enlaces de paginación no aparecen y no queda ninguna pista del motivo. Encadena `paginated` directamente sobre la colección de entradas.
:::

### Sort By

Retorna un array con las entradas ordenadas por un campo *e.g.*
<span v-pre>`{% assign entries = widgets.entries | sort_by: 'name', 'asc' %}`</span>

**Parametros**:
- coleccion (ArrayEntry | ArrayCategory) — colección a ordenar (objeto antes de la barra)
- field (String) — campo por el cual se quiere ordenar
- order (String) (default: 'desc') — `asc` o `desc`

El orden por defecto es descendente y cualquier valor que no sea exactamente `asc` se trata como `desc`: un `'ascending'` o un `'asc '` con un espacio de más ordenan al revés de lo pedido, sin ningún aviso.

Los campos admitidos dependen de la colección que recibe el filtro:

- **Colección de categorías**: solo `name`, `slug` y `uuid`.
- **Colección de entradas**: los cinco atributos meta `name`, `slug`, `created_at`, `updated_at` y `published_at` se ordenan de forma directa. Cualquier otro nombre lo resuelve la capa de búsqueda, que exige el prefijo del contenedor, igual que [Filter By](/es/platform/channels/liquid-markup/filters.html#filter-by-operadores-extendidos): `fields.<nombre>` para un campo del tipo de contenido y `meta.<atributo>` para el resto de los metadatos.

:::warning Atención
Sobre una colección de categorías, un campo fuera de `name`, `slug` y `uuid` devuelve una colección vacía sin ningún error: el listado se ve en blanco y parece que no hay datos.

Sobre una colección de entradas, un nombre sin prefijo, como `'precio'` en lugar de `'fields.precio'`, no ordena por el campo que esperas. Además, ordenar por `fields.<nombre>` necesita, igual que `filter_by`, una colección acotada a un tipo de contenido: sobre algo como <span v-pre>`spaces['blog'].entries`</span> el filtro aborta y en el HTML publicado queda el comentario `<!-- Liquid Error -->` en lugar del bloque. Parte de <span v-pre>`spaces['blog'].types['post'].entries`</span> o de <span v-pre>`widget.entries`</span>.

El filtro aborta también, con el mismo comentario en la salida, si el campo o el orden no llegan como cadena, por ejemplo <span v-pre>`| sort_by: 'name', 1`</span>.
:::


### To Published Date

Retorna una lista de Entradas que tengan una fecha de publicación más vieja que el límite. *e.g.*
<span v-pre>`{% assign entries = widgets.entries | to_published_date: date %}
`</span>

**Parametros**:
- entries (ArrayEntry) — array con entradas
- date (Datetime)(default: Time.zone.now) — fecha límite


## Crypto

Estos filtros Liquid alteran valores relacionados con la Criptografía.

:::warning Atención
Los únicos filtros de hash de Modyo Platform son `hmac_sha256` y `sha256`. `md5`, `sha1` y `hmac_sha1` no existen y, como un filtro desconocido no interrumpe el renderizado, Liquid devuelve el valor de entrada sin transformar: la página publica el dato en claro donde esperabas un hash. Revisa tus plantillas antes de firmar una integración con ellos.
:::

### HMAC SHA256

Devuelve el hash SHA-256 de un string usando un código de autenticación de mensajes (HMAC), con la clave como argumento (ej. <span v-pre>`{{ 'Hello world' | hmac_sha256: 'key' }} #=> 'a82b2e160edaf92a6589dc11160d2a10c04449840a58717db308c1ee3512b039'`</span>).

### SHA 256

Devuelve el hash SHA-256 de un string (ej. <span v-pre>`{{ 'Hello world' | sha256 }} #=> '64ec88ca00b268e5ba1a35678a1b5316d212f4f366b2477232534a8aeca37f3c'`</span>).

## CSS

Estos filtros Liquid alteran valores relacionados con CSS en Modyo Platform.

:::warning Atención
Todos los filtros de color abortan si el valor de entrada no es un color válido, por ejemplo una variable que no existe en el contexto. Cuando eso pasa, en el HTML publicado queda el comentario `<!-- Liquid Error -->` en lugar del color y la regla CSS que lo usaba se pierde.
:::

### Brighten

Agrega brillo a un color (ej. <span v-pre>`{{ '#00ff00' | brighten: 15 }} #=> '#26ff26'`</span>).

### Darken

Reduce el brillo de un color (ej. <span v-pre>`{{ '#00ff00' | darken: 15 }} #=> '#00b300'`</span>).

### Desaturate

Desatura un color (ej. <span v-pre>`{{ '#00ff00' | desaturate: 15 }} #=> '#13ec13'`</span>).

### Grayscale

Convierte un color a escala de grises (ej. <span v-pre>`{{ '#00ff00' | grayscale }} #=> '#808080'`</span>). Acepta un segundo argumento, pero no altera el resultado porque la conversión a escala de grises no lo usa.

### Greyscale

Convierte un color a escala de grises, con el mismo resultado que `grayscale`, pero recibe solo el color (ej. <span v-pre>`{{ '#00ff00' | greyscale }} #=> '#808080'`</span>).

:::warning Atención
`greyscale` y `grayscale` no son intercambiables: `greyscale` no admite un segundo argumento. Una plantilla que pase intensidad, como <span v-pre>`{{ color | greyscale: 15 }}`</span>, aborta por el número de argumentos y en el HTML publicado queda el comentario `<!-- Liquid Error -->`. La misma plantilla con `grayscale` funciona.
:::

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

Devuelve un mapa dinámico de Google Maps (ej. <span v-pre>`{{ locations | dynamic_map: '600x300', 10, 'roadmap', '', true }}`</span>).

**Parametros**

- `locations` (ArrayHash) — Array de hashes con los puntos de latitud y longitud.
- `size` (String) (default: '600x300') — Tamaño en píxeles del mapa.
- `zoom` (Integer) (default: 10) — Nivel de zoom para el mapa.
- `type` (String) (default: 'roadmap') — Tipo de mapa.
- `icon` (String) (default: '') — Icono para el mapa.
- `controls` (Boolean) (default: true) — Controles de navegación para el mapa.

### Static Map

Devuelve un mapa estático de Google Maps (ej. <span v-pre>`{{ locations | static_map: '600x300', 15, 'roadmap' }}`</span>).

**Parametros**

- `locations` (ArrayHash) — Array de hashes con los puntos de latitud y longitud.
- `size` (String) (default: '600x300') — Tamaño en píxeles del mapa.
- `zoom` (String) (default: '') — Nivel de zoom para el mapa. Sin valor, la URL de Google Maps se arma con `zoom=` vacío y el encuadre queda a criterio de Google; pásalo siempre que necesites un encuadre fijo.
- `type` (String) (default: 'roadmap') — Tipo de mapa.
- `icon` (String) (default: '') — Icono para el mapa.

:::warning Atención
En los dos filtros el argumento que sigue a `size` es `zoom`, no `controls`. Un ejemplo del tipo <span v-pre>`{{ locations | static_map: '600x300', 'true', 'roadmap' }}`</span> arma la URL de Google Maps con `zoom=true` y el mapa no se encuadra como esperas. En `dynamic_map` el orden es `size`, `zoom`, `type`, `icon`, `controls`, así que para llegar a `controls` hay que pasar los cuatro argumentos anteriores.
:::


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

Devuelve el objeto con el UID indicado dentro de una colección del módulo Origination. Es un único filtro, `by_uid`, que admite cuatro clases de colección:

- `site.originations` — los originations del sitio.
- `origination.steps` — los steps de un origination.
- `step.tasks` — las tareas de un step.
- `task.fields` — las preguntas de una tarea de entrada de usuario. Es la única forma de tomar una pregunta concreta por su UID; los objetos que devuelve son [question](/es/platform/channels/liquid-markup/objects.html#question).

**Parámetros:**
- coleccion (ArrayOrigination | ArrayStep | ArrayTask | ArrayQuestion) - colección sobre la que se busca
- uid (String) - UID del objeto buscado

El filtro devuelve un único objeto, no una colección: su resultado se usa directamente y no se recorre con un ciclo. Si ningún elemento de la colección tiene ese UID, no devuelve nada.

*ej.*

```liquid
{% assign my_origination = site.originations | by_uid: 'my-origination' %}
{% assign my_step = my_origination.steps | by_uid: 'step-01' %}
{% assign my_task = my_step.tasks | by_uid: 'task-01' %}
{% assign my_question = my_task.fields | by_uid: 'question-01' %}
```

:::warning Atención
En dos casos el filtro aborta y en el HTML publicado queda el comentario `<!-- Liquid Error -->` en lugar del bloque: cuando se aplica sobre algo que no es una colección y cuando se aplica sobre una colección de una clase no admitida. En el segundo caso el mensaje incluye el nombre de la clase recibida, lo que permite identificar qué se pasó por error.
:::

## Paginación

Estos filtros Liquid arman la navegación de un listado ya paginado con [Paginated](/es/platform/channels/liquid-markup/filters.html#paginated). Aplícalos sobre la colección paginada, no sobre la colección original.

Los parámetros `page` y `per_page` de la URL son globales de la página, así que alcanzan a la vez a todos los listados paginados que haya en ella.

### Pagination links

Devuelve la barra de navegación completa de un listado paginado. *ej.*
<span v-pre>`{{ paginated_entries | pagination_links }}`</span>

**Parámetros**

- `coleccion` (ArrayEntry) — colección ya paginada (objeto antes de la barra).

La salida es un `<nav aria-label="Pagination">` con un `<ul class="pagination">` dentro, con las clases de paginación de Bootstrap:

- La página actual sale como `<li class="page-item active" aria-current="page">`.
- Las demás páginas salen como `<li class="page-item">` con un `<a class="page-link">`.
- El salto entre bloques de páginas sale como `<li class="page-item disabled" aria-hidden="true">` con `&hellip;`.
- Las flechas de anterior y siguiente salen como `<li class="page-item">` con `aria-label="Previous"` y `aria-label="Next"`. Cuando no hay página a la que ir, el `<li>` lleva además la clase `disabled`.

Las etiquetas de las flechas son fijas, `&laquo;` y `&raquo;`. El filtro declara tres parámetros opcionales más, un ancla y las dos etiquetas, pero ninguno llega a la salida: para cambiar los símbolos, el idioma o la estructura de la barra tienes que armar tu propio markup con enlaces `?page=N`.

Cuando el listado cabe en una sola página, el filtro no imprime nada.

:::warning Atención
La flecha deshabilitada se emite igual como enlace, con `href="false"`. Los estilos de Bootstrap anulan el clic con la regla `.page-item.disabled .page-link`; si escribes tus propios estilos de paginación, replícala o el usuario podrá hacer clic en una flecha que no lleva a ninguna parte.
:::

:::warning Atención
Si la plantilla se renderiza fuera del ciclo de una página del sitio, el filtro no puede armar las direcciones de las páginas y publica en su lugar un párrafo de error en rojo que empieza con `(Will Paginate Liquidized) Error:`. Si te encuentras con ese texto en una página, revisa desde dónde se está renderizando la plantilla.
:::

### Pagination links remote

Hace lo mismo que `pagination_links` y además agrega `data-remote="true"` a cada enlace de la barra. *ej.*
<span v-pre>`{{ paginated_entries | pagination_links_remote }}`</span>

Es la versión que corresponde usar en los widgets personalizados, que se cargan de forma asíncrona. Las condiciones de ese caso están en [Ejemplos](/es/platform/channels/liquid-markup/examples.html#filtrar-entradas).

### Total entries

Devuelve la cantidad total de elementos de la colección, no los de la página actual. *ej.*
<span v-pre>`{{ paginated_entries | total_entries }}`</span>

**Parámetros**

- `coleccion` (ArrayEntry) — colección (objeto antes de la barra).

Es la contraparte de `paginated`: sobre una colección ya paginada, `size` devuelve los elementos de la página y `total_entries` el total del listado. Sobre una colección vacía o sobre un arreglo devuelve su tamaño, sin error.

```liquid
{% assign paginated_entries = entries | paginated: 10 %}
<ul>
  {% for entry in paginated_entries %}
  <li>{{ entry.meta.name }}</li>
  {% endfor %}
</ul>
<p>Mostrando {{ paginated_entries.size }} de {{ paginated_entries | total_entries }} resultados</p>
{{ paginated_entries | pagination_links }}
```

### Page entries info liquid

Devuelve una leyenda de texto con el rango de resultados de la página actual y el total de la colección. *ej.*
<span v-pre>`{{ paginated_entries | page_entries_info_liquid }}`</span>

**Parámetros**

- `coleccion` (ArrayEntry) — colección ya paginada (objeto antes de la barra).
- `model_name` (String) (default: nulo) — nombre de la entidad que se lista, para nombrarla dentro de la leyenda.

La leyenda se arma en inglés y no pasa por las traducciones del sitio. Si la necesitas en el idioma del sitio, o con otro formato, ármala con `total_entries` como en el ejemplo de arriba.

## Site

Estos filtros Liquid alteran valores relacionados con los Sitios en Modyo Platform.

### Filtros retirados

Desde la versión 10.2 los filtros `video_player`, `audio_player`, `embedded_video` y `asset_thumbnail_link_tag` ya no existen. Los filtros `bar_code` y `qr_code` nunca existieron en Modyo Platform.

:::warning Atención
Un filtro desconocido no interrumpe el renderizado: Liquid devuelve el valor de entrada sin transformar. Una plantilla que todavía invoque estos filtros sobre un asset ya no muestra el reproductor ni el enlace y publica en su lugar el nombre interno del objeto que recibió, por ejemplo `Liquid::Drops::Assets::VideoAssetDrop`. No hay mensaje de error ni pista visible de la causa en la página, así que revisa tus plantillas antes de actualizar.
:::

Para reemplazar `video_player` y `audio_player`, arma el markup con la dirección del archivo, disponible en `url`:

```liquid
{% assign video = assets['uuid-del-video'] %}
<video src="{{ video.url }}" width="320" height="320" controls="controls"></video>

{% assign audio = assets['uuid-del-audio'] %}
<audio src="{{ audio.url }}" controls="controls"></audio>
```

Para reemplazar `asset_thumbnail_link_tag`, envuelve la miniatura, disponible en `thumbnail_url`, en un enlace al archivo:

```liquid
{% assign image = assets['uuid-de-la-imagen'] %}
<a href="{{ image.url }}" class="thumbnail"><img src="{{ image.thumbnail_url }}" alt="{{ image.alt_text }}"></a>
```

`embedded_video`, `bar_code` y `qr_code` no tienen reemplazo: la plataforma no ofrece hoy un filtro equivalente.

### Asset image Tag

Genera la etiqueta HTML de una imagen (ej. <span v-pre>`{{ asset | asset_image_tag: 'original' }}`</span>).

### Asset URL

Genera la URL de un objeto **Asset** o una ruta de activo de plantilla. Para los objetos Asset que utilizan Cloudflare para la optimización de imágenes, puedes usar los siguientes parámetros adicionales: width, height, blur, quality, format y fit. (ej. <span v-pre>{{ assets['asset_uuid'] | asset_url: blur: 40, format: 'auto', fit: 'cover' }}</span>).
Para las rutas de assets de plantilla (template asset paths) desde el template builder, especifica el tipo de asset como el segundo argumento (ej. <span v-pre>{{ 'base' | asset_url: 'js' }}</span>). También puedes usar los filtros `script_tag` o `stylesheet_tag` para generar automáticamente la etiqueta HTML `<script>` o `<link>` completa (ej. <span v-pre>{{ 'base' | asset_url: 'css' | stylesheet_tag: media: 'screen' }}</span>).

### Button To

Genera un botón (ej. <span v-pre>`{{ 'Hello World' | button_to: 'http://www.google.com' }}`</span>).

### Cookie Value

Devuelve el valor de una cookie (ej. <span v-pre>`{{ 32 | cookie_value }}`</span>).

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

**Parámetros**

- `value` (String) — clave de la traducción (objeto antes de la barra).
- `count` (Integer) (default: nil) — cantidad con la que se pluraliza la clave.

`t` es el alias corto del filtro y hace exactamente lo mismo: <span v-pre>`{{ 'admin.logs.errors.no_logs_yet' | t }}`</span>.

El segundo parámetro pluraliza la clave y solo se aplica cuando llega como entero (ej. <span v-pre>`{{ 'site.results.count' | t: total }}`</span>). Si llega como cadena, por ejemplo `'3'`, el filtro lo descarta sin avisar y resuelve la clave sin pluralizar.

### Truncate HTML

Devuelve un String después de truncarlo (ej. <span v-pre>`{{ html | truncate_html: 10 }}`</span>).

## Step

Estos son los filtros liquid que alteran valores relacionados con steps en Modyo Platform.

### By UID

Devuelve el Step con el UID seleccionado. *ej.*
<span v-pre>`{% assign my_step = origination.steps | by_uid: 'step-01' %}`</span>

**Parámetros:**
- steps (ArrayStep) - array con steps
- uid (String) - UID del Step

Es el mismo filtro `by_uid` del módulo Origination. La referencia completa, con las cuatro clases de colección admitidas y los errores que aborta, está en [By UID](/es/platform/channels/liquid-markup/filters.html#by-uid).

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
- status (String) - Estado de la respuesta. Los valores soportados son 'pending', 'completed' y 'all'

En Modyo 10.2 una respuesta puede estar en cuatro estados: **No Iniciada**, **Pendiente**, **Completada** y **Cancelada**. El filtro reconoce solo tres valores y no hay correspondencia directa con esos estados:

- `'pending'` devuelve las respuestas **Pendiente**.
- `'completed'` devuelve las respuestas **Completada**.
- `'all'` no devuelve todas: entrega las **Pendiente** más las **Completada**, y deja fuera las **No Iniciada** y las **Cancelada**.
- `'not_started'` y `'canceled'` no están soportados. El filtro no falla ni deja rastro en la página: devuelve una colección vacía, así que el listado que los use se ve en blanco.

:::warning Atención
Una respuesta nace **No Iniciada** y pasa a **Pendiente** recién cuando se guarda la primera respuesta a una de sus tareas, así que las recién creadas no aparecen en los listados construidos con este filtro. Además, `user.submissions` ya viene acotado a las respuestas **Pendiente** y **Completada**, de modo que ninguna combinación de `by_status` alcanza a las **No Iniciada** ni a las **Cancelada** de esa colección.
:::

Para listar los estados que el filtro no cubre, recorre una colección sin acotar, como `user.invited_submissions`, sin pasar por `by_status`, y compara [`submission.status`](/es/platform/channels/liquid-markup/objects.html#submission) dentro del ciclo:

```liquid
{% assign invited = user.invited_submissions | by_origination: 'my-origination' %}
{% for invited_submission in invited %}
  {% if invited_submission.status == 'not_started' %}
    <a href="{{ invited_submission.resume_url }}">{{ invited_submission.origination.name }}</a>
  {% endif %}
{% endfor %}
```

### Completed

Verifica si un elemento (wrapper de step/task) está completado para un submission dado.

*ej.* <span v-pre>`{{ submission | completed: step }}`</span>

**Parámetros:**
- submission (Submission) — submission actual (objeto antes de la barra)
- element (Step|TaskResponse wrapper) — elemento a evaluar

Retorna: Boolean (true/false)

Desde Modyo 10.2 el filtro resuelve el estado contra el usuario presente en el contexto de render y no contra el titular de la respuesta: un step cuenta como completado solo si ese usuario tiene una respuesta completada en cada una de las tareas que ve. En un flujo con usuarios invitados, la misma plantilla entrega resultados distintos según quién la mire, y un step que en 10.1 aparecía completado puede aparecer incompleto.

:::warning Atención
El filtro necesita el objeto `user` en el contexto de la plantilla. Si no está, la evaluación aborta apenas la respuesta tiene al menos una tarea completada, y en el HTML publicado queda el comentario `<!-- Liquid Error -->` en lugar del bloque, sin ningún aviso para quien navega. Protege el bloque con <span v-pre>`{% if user %}`</span> y asegúrate de que la plantilla reciba el usuario.
:::

### URL (URL del Step para Submission)

Genera una URL navegable para un step dentro de un submission (primer task visible). Solo retorna valor si el submission está pendiente y el step está completado o el orden de steps permite navegación.

*ej.* <span v-pre>`{{ step | url: submission }}`</span>

Igual que `completed`, resuelve el step completado y la primera task visible contra el usuario del contexto de render, con las mismas consecuencias en flujos con usuarios invitados y el mismo comportamiento si falta `user` en el contexto.

:::warning Atención
Una respuesta recién creada está **No Iniciada**, no **Pendiente**, así que el filtro no devuelve valor justo en el caso más frecuente de una plantilla para retomar una respuesta. La respuesta pasa a **Pendiente** cuando se guarda la primera respuesta a una de sus tareas; hasta entonces, lleva al usuario al inicio del flujo con [`submission.resume_url`](/es/platform/channels/liquid-markup/objects.html#submission), que no depende del estado.
:::

### Resume Link

Retorna un tag HTML de enlace para retomar un step pendiente dentro de un submission, o el nombre del step si no hay URL disponible.

*ej.* <span v-pre>`{{ step | resume_link: submission }}`</span>

El enlace lo arma `url`, así que hereda todas sus condiciones: cuando `url` no devuelve valor, `resume_link` imprime el nombre del step como texto plano.

:::warning Atención
Sobre una respuesta **No Iniciada** el filtro imprime el nombre del step como texto plano y la página no muestra ningún error: la plantilla se ve completa, pero el usuario no tiene por dónde entrar. Lo mismo pasa cuando `url` no entrega enlace para ese step con el usuario del contexto. Revisa el estado de la respuesta antes de renderizar el listado y ofrece [`submission.resume_url`](/es/platform/channels/liquid-markup/objects.html#submission) mientras no esté **Pendiente**.
:::

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

Es el mismo filtro `by_uid` del módulo Origination, que también acepta la colección `fields` de una tarea de entrada de usuario para tomar una de sus preguntas por UID: <span v-pre>`{% assign my_question = my_task.fields | by_uid: 'question-01' %}`</span>. La referencia completa está en [By UID](/es/platform/channels/liquid-markup/filters.html#by-uid).

## User

Estos filtros Liquid alteran valores relacionados con los Usuarios.

### Avatar For

Muestra el código HTML de la imagen de un usuario. Si el usuario no tiene avatar propio, entrega el avatar por defecto (ej. <span v-pre>`{{ user | avatar_for: 'C50x50', true }}`</span>).

**Parámetros**

- `user` (User) — Objeto User.
- `size` (String) (default: 'C50x50') — Tamaño para la imagen.
- `link` (Boolean) (default: true) — `true` agrega un enlace hacia el perfil del usuario.

### Default Avatar Image

Muestra el código HTML del avatar por defecto. La firma es al revés de lo que sugiere el nombre: el valor que va antes de la barra es el **tamaño**, y el usuario es el primer argumento, opcional (ej. <span v-pre>`{{ 'C50x50' | default_avatar_image: user }}`</span>).

**Parámetros**

- `size` (String) — Tamaño para la imagen, con el formato de las versiones de avatar: `C25x25`, `C50x50`, `C75x75`, `C100x100`, `C125x125`, `C160x160`, `C200x200` o `C250x250`.
- `user` (User) (default: nulo) — Objeto User del contexto Liquid. Tiene que ser el objeto, no un id ni un correo.

Devuelve una de tres imágenes, según lo que reciba:

- Con un usuario cuyo reino tiene configurada la **Imagen de avatar por defecto** en [Configuración de reino](/es/platform/customers/settings.html#general), la imagen del reino en el tamaño pedido.
- Con un usuario cuyo reino no la tiene configurada, la imagen de marcador de posición en el tamaño pedido.
- Sin usuario, la imagen de marcador de posición en el tamaño pedido.

:::tip Tip
Para el caso habitual no necesitas llamarlo: `avatar_for` ya recurre a `default_avatar_image` cuando el usuario no tiene avatar propio. Llámalo directo solo cuando quieras el avatar por defecto sin consultar el del usuario.
:::

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
