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

### Filtros estándar

* `append` - Añadir un string *e.g.* <span v-pre>`{{ 'foo' | append:'bar' }} #=> 'foobar'`</span>
* `asset_url` - Genera la URL de un objeto tipo Asset con un determinado tamaño, *e.g.* <span v-pre>`{{ asset_obj | asset_url: '640x480' }}`</span>. También puede generar la URL de un template CSS o JavaScript, *e.g.* <span v-pre>`{{ 'my-css' | asset_url: 'css' }}`</span> o <span v-pre>`{{ 'my-js' | asset_url: 'js' }}`</span>.
* `base64_decode` - Retorna el valor Base64-decoded de un string *e.g.* <span v-pre> `{% 'Hello world' | base64_encode %} # => 'SGVsbG8gd29ybGQ='`</span>.
* `base64_encode` - Retorna el valor Base64-encoded de un string *e.g.* <span v-pre>`{% 'SGVsbG8gd29ybGQ=' | base64_decode %} # => 'Hello world'`</span>.
* `capitalize` - Poner palabra en mayúscula en la frase de entrada
* `ceil` - Redondea hacia arriba un número decimal al próximo entero, *e.g.* <span v-pre>`{{ 4.6 | ceil }} #=> 5`</span>
* `date` - Da formato a una fecha ([syntax reference](https://shopify.dev/api/liquid/filters#date))
* `default` - Devuelve la variable dada a menos que sea nula o string vacío, entonces devuelve el valor dado, *e.g.* <span v-pre>`{{ undefined_variable | default: "Default value" }} #=> "Default value"`</span>
* `divided_by` - División de enteros *e.g.* <span v-pre>`{{ 10 | divided_by:3 }} #=> 3`</span>
* `downcase` - Convierte un string de entrada en minúsculas
* `escape_once` - Devuelve una versión escape de html sin afectar a las entidades escape existentes
* `escape` - Escape html a un string
* `first` - Obtener el primer elemento del array pasado
* `floor` - Redondea un número decimal hacia abajo al entero más cercano, *e.g.* <span v-pre>`{{ 4.6 | floor }} #=> 4`</span>
* `format_date` - Da formato a una fecha con la localización del sitio, usa la misma sintaxis que `date`
* `hmac_sha1` - Retorna el hash SHA-1 usando un código de autenticación de mensajes (HMAC) de un string , *e.g.* <span v-pre>`{% 'Hello world' | hmac_sha1: 'key'  %} # => '2a73959742baf046e6e2e27e5ee94bcff0af31b1'`</span>.
* `hmac_sha256` - Retorna el hash SHA-256 usando un código de autenticación de mensajes (HMAC) de un string , *e.g.* <span v-pre>`{% 'Hello world' | hmac_sha256: 'key'  %} # => 'a82b2e160edaf92a6589dc11160d2a10c04449840a58717db308c1ee3512b039'`</span>.
* `join` - Une elementos del array con cierto caracter entre ellos.
* `last` - Obtener el último elemento del array pasado
* `lstrip` - Elimina todos los espacios en blanco desde el principio de un string
* `map` - Mapear/coleccionar un array en una propiedad dada.
* `md5` - Retorna el hash MD5 de un string , *e.g.* <span v-pre>`{% 'Hello world' | md5  %} # => '3e25960a79dbc69b674cd4ec67a72c62'`</span>.
* `minus` - Resta *e.g.*  <span v-pre>`{{ 4 | minus:2 }} #=> 2`</span>
* `modulo` - Resto *e.g.* <span v-pre>`{{ 3 | modulo:2 }} #=> 1`</span>
* `newline_to_br` - Reemplaza cada linea nueva (\n) con espacio html
* `plus` - Suma *e.g.*  <span v-pre>`{{ '1' | plus:'1' }} #=> 2`</span>, <span v-pre>`{{ 1 | plus:1 }} #=> 2`</span>
* `prepend` - Precede un string *e.g.* <span v-pre>`{{ 'bar' | prepend:'foo' }} #=> 'foobar'`</span>
* `remove_first` - Elimina la primera incidencia *e.g.* <span v-pre>`{{ 'barbar' | remove_first:'bar' }} #=> 'bar'`</span>
* `remove` - Elimina todas las incidencias *e.g.* <span v-pre>`{{ 'foobarfoobar' | remove:'foo' }} #=> 'barbar'`</span>
* `replace_first` - Reemplaza la primera incidencia *e.g.* <span v-pre>`{{ 'barbar' | replace_first:'bar','foo' }} #=> 'foobar'`</span>
* `replace` - Reemplaza todas las incidencias *e.g.* <span v-pre>`{{ 'foofoo' | replace:'foo','bar' }} #=> 'barbar'`</span>
* `reverse` - Invierte el array dado.
* `round` - Redondea al número entero más cercano o al número especificado de decimales *e.g.* <span v-pre>`{{ 4.5612 | round: 2 }} #=> 4.56`</span>
* `rstrip` - Elimina todos los espacios en blanco del final de un string
* `script_tag` - Genera el tag HTML `<script>` para un template JavaScript, tomando como parámetros la URL y atributos de la forma `attr: 'value'`, *e.g.* <span v-pre>`{{ 'my-js-url' | script_tag: async: 'async', defer: 'defer' }}`</span> => `<script src='my-js-url' type='text/javascript' async='async' defer='defer'></script>`
* `sha1` - Retorna el hash SHA-1 de un string *e.g.* <span v-pre>`{% 'Hello world' | sha1  %} # => '7b502c3a1f48c8609ae212cdfb639dee39673f5e'`</span>.
* `sha256` - Retorna el hash SHA-256 de un string *e.g.* <span v-pre>`{% 'Hello world' | sha256  %} # => '64ec88ca00b268e5ba1a35678a1b5316d212f4f366b2477232534a8aeca37f3c'`</span>.
* `size` - Devolver el tamaño de un array o string
* `slice` - Divide un string. Toma un desplazamiento y una longitud, *e.g.* <span v-pre>`{{ "hello" | slice: -3, 3 }} #=> llo`</span>
* `sort` - Ordena elementos del array
* `split` - Dividir un string en un patrón coincidente *e.g.* <span v-pre>`{{ "a~b" | split:"~" }} #=> ['a','b']`</span>
* `strip_html` - Elimina html del string
* `strip_newlines` - Elimina todas las líneas nuevas (\n) del string
* `strip` - Elimina todos los espacios en blanco de ambos extremos del string.
* `stylesheet_tag` - Genera el tag HTML `<link>` para un template CSS, tomando como parámetros la URL y atributos de la forma `attr: 'value'`, *e.g.* <span v-pre>`{{ 'my-css-url' | stylesheet_tag: media: 'screen', title: 'color style' }}`</span> => `<link href='my-css-url' rel='stylesheet' type='text/css' media='screen' title='color style' />`
* `times` - Multiplica  *e.g* <span v-pre>`{{ 5 | times:4 }} #=> 20`</span>
* `truncate` - Restringe un string a x caracteres. También acepta un segundo parámetro que se añadirá al string *e.g.* <span v-pre>`{{ 'foobarfoobar' | truncate: 5, '.' }} #=> 'foob.'`</span>
* `truncatewords` - Restringe una string a x palabras
* `uniq` - Elimina elementos duplicados de un array, utilizando opcionalmente una propiedad determinada para comprobar su unicidad.
* `upcase` - Convierte un string de entrada a mayúsculas
* `url_encode` - Codifica un string a URL