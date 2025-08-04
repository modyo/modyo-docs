---
search: true
---

# Liquid Markup

Liquid es un lenguaje utilizado en Modyo Platform para desplegar contenido del módulo Content en tus Sitios. Permite generar plantillas que muestran información de entradas dinámicamente y controlan la visualización mediante flujo o iteración.

En Liquid, como en otros lenguajes de programación, se utilizan palabras reservadas para desplegar contenido dinámico. Estas llamadas se ejecutan “just-in-time” (justo a tiempo), lo que permite la “carga diferida” (lazy loading) solo cuando es necesario.

Liquid está diseñado con requisitos muy específicos:

* Debe tener un marcado limpio y sencillo. Los motores de plantillas que no producen un marcado atractivo no son agradables de usar.
* Debe ser no evaluable y seguro. Las plantillas Liquid están diseñadas para que los usuarios puedan editarlas, evitando la ejecución de código inseguro en el servidor.
* No debe tener estado. Los pasos de compilación y renderizado deben estar separados para que el análisis sintáctico y la compilación se realicen una sola vez, y luego se pueda renderizar pasando un hash con objetos locales y variables.

### ¿Por qué usar Liquid?

* Deseas permitir que los usuarios editen la apariencia de tu aplicación sin ejecutar **código inseguro en tu servidor**.
* Quieres renderizar tus plantillas directamente desde la base de datos.
* Prefieres motores de plantillas inteligentes (estilo PHP).
* Necesitas un motor de plantillas que funcione bien tanto en HTML como en correos electrónicos.
* No te agrada el marcado (markup) de tu motor de plantillas actual.

### ¿Cómo se ve Liquid?

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

### ¿Cómo usar Liquid?

A continuación, veremos varios ejemplos de los usos más comunes al escribir con Liquid.

#### Objetos

Se denomina objeto a lo que contiene el contenido que Liquid despliega en pantalla. Se pueden desplegar objetos o variables usando doble corchete ``{{ }}``, por ejemplo:

Para desplegar el nombre de la entrada en tu página, usa:

```liquid
{{ entry.meta.name }}
```

#### Tags

Con Tags se puede agregar control de flujo e iteración a tus páginas. Se necesita encapsular el lenguaje con corchete y porcentaje `{% %}` para usar Tags, por ejemplo:

```liquid
{% if product.name == "Banca Electrónica" %}
 ¡Descarga nuestra banca electrónica en tu teléfono celular!
{% endif %}
```

### Drops
Modyo extiende la funcionalidad de Liquid a través de variables creadas para Modyo Platform, llamadas Drops. Actualmente, ofrecemos drops de más de 20 categorías diferentes para todos los módulos de la plataforma. 

Para ver más información sobre cómo usar Drops, ve a [Drops](/es/platform/channels/drops).


## Expresiones y variables

Las expresiones son sentencias que tienen valores. Las plantillas de Liquid pueden usar expresiones en muchos lugares; frecuentemente en sentencias output, pero también como argumentos para tags o filtros.

Liquid acepta los siguientes tipos de expresiones:

* **Variables**: El tipo más básico de expresión es el nombre de una variable. Las variables de Liquid se nombran como las variables de Ruby: deben contener caracteres alfanuméricos y guiones bajos, siempre deben comenzar con una letra y no contener ningún tipo de símbolo (es decir, deben verse como `var_name`, y no `$var_name`).
* **Acceso de array/hashes**: Si tienes una expresión (normalmente una variable) cuyo valor es un array o hash, puedes usar un único valor de ese array/hash de la siguiente manera:
    * `my_variable[<KEY EXPRESSION>]` — El nombre de la variable, seguido inmediatamente de corchetes que contienen una expresión clave.
        * Para arrays, la clave debe ser un entero literal o una expresión que se resuelva a un entero.
        * Para hashes, la clave debe ser un string literal entre comillas o una expresión que se resuelva a un string.
    * `my_hash.key`: Los hashes también permiten una notación de "punto" más corta, donde el nombre de la variable es seguido por un punto y el nombre de una clave. Esto solo funciona con claves que no contienen espacios y (a diferencia de la notación entre corchetes) no permite el uso de un nombre de clave almacenado en una variable.
    * Nota: Si el valor de una expresión de acceso es también un array o hash, puedes acceder a los valores de la misma manera, e incluso combinar los dos métodos (ej. `site.posts[34].title`).
* **Primer y último elemento de array**: Si tienes una expresión cuyo valor es un array, puedes usar `.first` o `.last` para obtener su primer o último elemento.
* **Tamaño de array o hash**: Si tienes una expresión cuyo valor es un array o hash, puedes usar `.size` para obtener el número de elementos de la expresión original como un entero.
* **Strings**: Los strings literales deben estar rodeados de comillas dobles o simples (ej. `"mi cuerda"` o `'mi cuerda'`). No hay diferencia; ningún estilo permite interpolación variable.
* **Enteros**: Los números enteros no pueden ser citados.
* **Booleanos y nil**: Los valores literales `true`, `false` y `nil`.

Ten en cuenta que no hay manera de escribir un array literal o hash como expresión; los arrays y hashes deben pasarse a la plantilla o construirse oblicuamente con un tag o una declaración output.

## Filtros

El marcado Output puede aceptar filtros que modifican el resultado de la sentencia Output. Puedes invocar filtros siguiendo la expresión principal de la sentencia Output con:

* Un carácter de barra vertical (`|`).
* El nombre del filtro.
* Opcionalmente, dos puntos (`:`) y una lista de parámetros adicionales separados por comas. Cada parámetro adicional debe ser una expresión válida, y cada filtro predefine los parámetros que acepta y su orden.

Los filtros también se pueden encadenar añadiendo sentencias de filtro adicionales (comenzando con otro carácter de barra vertical). El Output del filtro anterior será el Input para el siguiente.

```liquid
Hello {{ 'tobi' | upcase }}
Hello tobi has {{ 'tobi' | size }} letters!
Hello {{ '*tobi*' | textilize | upcase }}
Hello {{ 'now' | date: "%Y %h" }}
```

Un filtro es un método Ruby que toma uno o más parámetros y devuelve un valor. Los parámetros se pasan a los filtros por posición: el primer parámetro es la expresión que precede al carácter de barra vertical, y se pueden pasar parámetros adicionales usando la sintaxis `name: arg1, arg2`.

### Filtros estándar

* `append`: Añade un string (ej. <span v-pre>`{{ 'foo' | append:'bar' }} #=> 'foobar'`</span>).
* `asset_url`: Genera la URL de un objeto tipo Asset con un tamaño determinado (ej. <span v-pre>`{{ asset_obj | asset_url: '640x480' }}`</span>). También puede generar la URL de un template CSS o JavaScript (ej. <span v-pre>`{{ 'my-css' | asset_url: 'css' }}`</span> o <span v-pre>`{{ 'my-js' | asset_url: 'js' }}`</span>).
* `base64_decode`: Devuelve el valor Base64-decoded de un string (ej. <span v-pre> `{% 'Hello world' | base64_encode %} # => 'SGVsbG8gd29ybGQ='`</span>).
* `base64_encode`: Devuelve el valor Base64-encoded de un string (ej. <span v-pre>`{% 'SGVsbG8gd29ybGQ=' | base64_decode %} # => 'Hello world'`</span>).
* `capitalize`: Convierte la primera letra de cada palabra en mayúscula en la frase de entrada.
* `ceil`: Redondea un número decimal hacia arriba al entero más próximo (ej. <span v-pre>`{{ 4.6 | ceil }} #=> 5`</span>).
* `date`: Formatea una fecha ([referencia de sintaxis](https://shopify.dev/api/liquid/filters#date)).
* `default`: Devuelve la variable dada, a menos que sea nula o un string vacío; en ese caso, devuelve el valor especificado (ej. <span v-pre>`{{ undefined_variable | default: "Default value" }} #=> "Default value"`</span>).
* `divided_by`: Realiza una división de enteros (ej. <span v-pre>`{{ 10 | divided_by:3 }} #=> 3`</span>).
* `downcase`: Convierte un string de entrada a minúsculas.
* `escape_once`: Devuelve una versión HTML escapada sin afectar a las entidades de escape existentes.
* `escape`: Escapa HTML a un string.
* `first`: Obtiene el primer elemento del array.
* `floor`: Redondea un número decimal hacia abajo al entero más cercano (ej. <span v-pre>`{{ 4.6 | floor }} #=> 4`</span>).
* `format_date`: Formatea una fecha con la localización del sitio, usando la misma sintaxis que `date`.
* `hmac_sha1`: Devuelve el hash SHA-1 usando un código de autenticación de mensajes (HMAC) de un string (ej. <span v-pre>`{% 'Hello world' | hmac_sha1: 'key' %} # => '2a73959742baf046e6e2e27e5ee94bcff0af31b1'`</span>).
* `hmac_sha256`: Devuelve el hash SHA-256 usando un código de autenticación de mensajes (HMAC) de un string (ej. <span v-pre>`{% 'Hello world' | hmac_sha256: 'key' %} # => 'a82b2e160edaf92a6589dc11160d2a10c04449840a58717db308c1ee3512b039'`</span>).
* `join`: Une elementos del array con un carácter específico entre ellos.
* `last`: Obtiene el último elemento del array.
* `lstrip`: Elimina todos los espacios en blanco al principio de un string.
* `map`: Mapea/colecciona un array en una propiedad dada.
* `md5`: Devuelve el hash MD5 de un string (ej. <span v-pre>`{% 'Hello world' | md5 %} # => '3e25960a79dbc69b674cd4ec67a72c62'`</span>).
* `minus`: Resta (ej. <span v-pre>`{{ 4 | minus:2 }} #=> 2`</span>).
* `modulo`: Devuelve el resto (ej. <span v-pre>`{{ 3 | modulo:2 }} #=> 1`</span>).
* `newline_to_br`: Reemplaza cada nueva línea (`\n`) con un salto de línea HTML (`<br>`).
* `plus`: Suma (ej. <span v-pre>`{{ '1' | plus:'1' }} #=> 2`</span>, <span v-pre>`{{ 1 | plus:1 }} #=> 2`</span>).
* `prepend`: Antepone un string (ej. <span v-pre>`{{ 'bar' | prepend:'foo' }} #=> 'foobar'`</span>).
* `remove_first`: Elimina la primera incidencia (ej. <span v-pre>`{{ 'barbar' | remove_first:'bar' }} #=> 'bar'`</span>).
* `remove`: Elimina todas las incidencias (ej. <span v-pre>`{{ 'foobarfoobar' | remove:'foo' }} #=> 'barbar'`</span>).
* `replace_first`: Reemplaza la primera incidencia (ej. <span v-pre>`{{ 'barbar' | replace_first:'bar','foo' }} #=> 'foobar'`</span>).
* `replace`: Reemplaza todas las incidencias (ej. <span v-pre>`{{ 'foofoo' | replace:'foo','bar' }} #=> 'barbar'`</span>).
* `reverse`: Invierte el array.
* `round`: Redondea al número entero más cercano o al número especificado de decimales (ej. <span v-pre>`{{ 4.5612 | round: 2 }} #=> 4.56`</span>).
* `rstrip`: Elimina todos los espacios en blanco al final de un string.
* `script_tag`: Genera la etiqueta HTML `<script>` para un template JavaScript, tomando como parámetros la URL y atributos (ej. `attr: 'value'`, <span v-pre>`{{ 'my-js-url' | script_tag: async: 'async', defer: 'defer' }}`</span> => `<script src='my-js-url' type='text/javascript' async='async' defer='defer'></script>`).
* `sha1`: Devuelve el hash SHA-1 de un string (ej. <span v-pre>`{% 'Hello world' | sha1 %} # => '7b502c3a1f48c8609ae212cdfb639dee39673f5e'`</span>).
* `sha256`: Devuelve el hash SHA-256 de un string (ej. <span v-pre>`{% 'Hello world' | sha256 %} # => '64ec88ca00b268e5ba1a35678a1b5316d212f4f366b2477232534a8aeca37f3c'`</span>).
* `size`: Devuelve el tamaño de un array o string.
* `slice`: Divide un string. Toma un desplazamiento y una longitud (ej. <span v-pre>`{{ "hello" | slice: -3, 3 }} #=> llo`</span>).
* `sort`: Ordena elementos del array.
* `split`: Divide un string en un patrón coincidente (ej. <span v-pre>`{{ "a~b" | split:"~" }} #=> ['a','b']`</span>).
* `strip_html`: Elimina HTML del string.
* `strip_newlines`: Elimina todas las nuevas líneas (`\n`) del string.
* `strip`: Elimina todos los espacios en blanco de ambos extremos del string.
* `stylesheet_tag`: Genera la etiqueta HTML `<link>` para un template CSS, tomando como parámetros la URL y atributos (ej. `attr: 'value'`, <span v-pre>`{{ 'my-css-url' | stylesheet_tag: media: 'screen', title: 'color style' }}`</span> => `<link href='my-css-url' rel='stylesheet' type='text/css' media='screen' title='color style' />`).
* `times`: Multiplica (ej. <span v-pre>`{{ 5 | times:4 }} #=> 20`</span>).
* `truncate`: Restringe un string a `x` caracteres. También acepta un segundo parámetro que se añadirá al string (ej. <span v-pre>`{{ 'foobarfoobar' | truncate: 5, '.' }} #=> 'foob.'`</span>).
* `truncatewords`: Restringe un string a `x` palabras.
* `uniq`: Elimina elementos duplicados de un array, utilizando opcionalmente una propiedad para comprobar su unicidad.
* `upcase`: Convierte un string de entrada a mayúsculas.
* `url_encode`: Codifica un string a URL.

## Tags

Los tags (etiquetas) se utilizan para la lógica de la plantilla. Aquí hay una lista de los tags actualmente soportados:

* **assign**: Asigna un valor a una variable.
* **capture**: Bloque tag que captura texto a una variable.
* **case**: Bloque tag, sentencia `case` estándar.
* **comment**: Bloque tag, comenta el texto en el bloque.
* **cycle**: Se utiliza generalmente dentro de un bucle para alternar entre valores, como colores o clases DOM.
* **for**: Bucle `for`.
* **break**: Sale de un bucle.
* **continue**: Salta el código restante en la iteración actual y continúa con la siguiente iteración del bucle.
* **if**: Bloque `if/else` estándar.
* **include**: Incluye otra plantilla; útil para parciales.
* **raw**: Desactiva temporalmente el procesamiento de tags para evitar conflictos de sintaxis.
* **unless**: Copia de la sentencia `if`.

### Comentarios

Cualquier contenido escrito entre los tags `{% comment %}` y `{% endcomment %}` se convertirá en un comentario.

```liquid
We made 1 million dollars {% comment %} in losses {% endcomment %} this year
```

### Raw

Raw sirve para deshabilitar temporalmente el procesamiento de tags.
Esto es útil para generar contenido (ej. Mustache, Handlebars) que puede usar una sintaxis conflictiva con otros elementos.

```liquid
{% raw %}
  In Handlebars, {{ this }} will be HTML-escaped, but {{{ that }}} will not.
{% endraw %}
```

### If / Else

Las sentencias `if / else` son comunes en otros lenguajes de programación. Liquid las implementa con los siguientes tags:

* `{% if <CONDITION> %} ... {% endif %}`: Adjunta una sección de la plantilla que solo se ejecutará si la condición es `true`.
* `{% elsif <CONDITION> %}`: Puede utilizarse opcionalmente dentro de un bloque `if ... endif`. Especifica otra condición; si el `if` inicial falla, Liquid prueba el `elsif` y ejecuta la siguiente sección de la plantilla si tiene éxito. Se puede usar cualquier número de `elsif` en un bloque `if`.
* `{% else %}`: Opcionalmente, se puede usar dentro de un bloque `if... endif`, después de cualquier etiqueta `elsif`. Si todas las condiciones anteriores fallan, Liquid ejecutará la sección de la plantilla siguiendo la etiqueta `else`.
* `{% unless <CONDITION> %} ... {% endunless %}`: El reverso de una sentencia `if`. No uses `elsif` o `else` con una sentencia `unless`.

La condición de un tag `if`, `elsif` o `unless` debe ser una expresión de Liquid normal o una _comparación_ usando expresiones de Liquid. Ten en cuenta que los operadores de comparación se implementan mediante etiquetas similares a `if`; no funcionan en ningún otro lugar en Liquid.

Los operadores relacionales disponibles son:

* `==, !=,` y `<>`: Igual y desigual (los dos últimos son sinónimos).
    * Hay un valor especial "empty" (sin comillas) con el que se pueden comparar los arrays; la comparación es verdadera si el array no tiene miembros.
* `<, <=, >, >=`: Menor/mayor que.
* `contains`: Un _wrapper_ alrededor del método `include?` de Ruby, implementado en strings, arrays y hashes. Si el argumento izquierdo es un string y el derecho no, convierte a string el derecho.

Los operadores booleanos disponibles son:

* `and`.
* `or`.

Ten en cuenta que NO hay ningún operador "no", y que NO PUEDES utilizar paréntesis para controlar el orden de las operaciones, ya que la precedencia de los operadores parece no estar especificada. Cuando tengas dudas, usa sentencias `if` anidadas.

Las expresiones de Liquid se prueban para determinar su "veracidad" de forma similar a Ruby:

* `true` es verdadero.
* `false` es falso.
* Cualquier string es `true`, incluyendo un string vacío.
* Cualquier array es `true`.
* Cualquier hash es `true`.
* Cualquier valor inexistente/nulo (como una parte faltante de un hash) es `false`.

```liquid
{% if user %}
  Hello {{ user.name }}
{% endif %}
```

```liquid
# Same as above
{% if user != null %}
  Hello {{ user.name }}
{% endif %}
```

```liquid
{% if user.name == 'tobi' %}
  Hello tobi
{% elsif user.name == 'bob' %}
  Hello bob
{% endif %}
```

```liquid
{% if user.name == 'tobi' or user.name == 'bob' %}
  Hello tobi or bob
{% endif %}
```

```liquid
{% if user.name == 'bob' and user.age > 45 %}
  Hello old bob
{% endif %}
```

```liquid
{% if user.name != 'tobi' %}
  Hello non-tobi
{% endif %}
```

```liquid
# Same as above
{% unless user.name == 'tobi' %}
  Hello non-tobi
{% endunless %}
```

```liquid
# Check for the size of an array
{% if user.payments == empty %}
   you never paid !
{% endif %}

{% if user.payments.size > 0  %}
   you paid !
{% endif %}
```

```liquid
{% if user.age > 18 %}
   Login here
{% else %}
   Sorry, you are too young
{% endif %}
```

```liquid
# array = 1,2,3
{% if array contains 2 %}
   array includes 2
{% endif %}
```

```liquid
# string = 'hello world'
{% if string contains 'hello' %}
   string includes 'hello'
{% endif %}
```

### Sentencia Case

Si necesitas más condiciones, puedes usar la sentencia `case`:

```liquid
{% case condition %}
{% when 1 %}
hit 1
{% when 2 or 3 %}
hit 2 or 3
{% else %}
... else ...
{% endcase %}
```

*Ejemplo:*

```liquid
{% case template %}

{% when 'label' %}
     // {{ label.title }}
{% when 'product' %}
     // {{ product.vendor | link_to_vendor }} / {{ product.title }}
{% else %}
     // {{page_title}}
{% endcase %}
```

### Cycle

A menudo es necesario alternar entre diferentes colores o tareas similares. Liquid tiene soporte incorporado para tales operaciones, usando el tag `cycle`.

```liquid
{% cycle 'one', 'two', 'three' %}
{% cycle 'one', 'two', 'three' %}
{% cycle 'one', 'two', 'three' %}
{% cycle 'one', 'two', 'three' %}
```

resultará en

```plain
one
two
three
one
```

Si no se proporciona ningún nombre para el grupo `cycle`, se asume que múltiples
llamadas con los mismos parámetros forman un grupo.

Si deseas tener un control total sobre los grupos `cycle`, puedes especificar opcionalmente
el nombre del grupo. Esto puede incluso ser una variable.

```liquid
{% cycle 'group 1': 'one', 'two', 'three' %}
{% cycle 'group 1': 'one', 'two', 'three' %}
{% cycle 'group 2': 'one', 'two', 'three' %}
{% cycle 'group 2': 'one', 'two', 'three' %}
```

resultará en

```text
one
two
one
two
```

### Bucle For

Liquid permite bucles `for` sobre colecciones:

```liquid
{% for item in array %}
  {{ item }}
{% endfor %}
```

#### Tipos de colecciones permitidas

Los bucles `for` pueden iterar sobre **arrays, hashes y rangos de números enteros.**

Al iterar un hash, `el_elemento[0]` contiene la clave, y `el_elemento[1]` contiene el valor:

```liquid
{% for item in hash %}
  {{ item[0] }}: {{ item[1] }}
{% endfor %}
```

En lugar de iterar sobre una colección existente, también puedes iterar a través de un rango de números. Los rangos se definen como `(1..10)` (paréntesis que contienen un valor inicial, dos puntos y un valor final). Los valores inicial y final deben ser enteros o expresiones que se resuelvan a números enteros.

```liquid
# if item.quantity is 4...
{% for i in (1..item.quantity) %}
  {{ i }}
{% endfor %}
# results in 1,2,3,4
```

#### Break y continue

Puedes salir anticipadamente de un bucle con los siguientes tags:

* `{% continue %}`: Finaliza inmediatamente la iteración actual y continúa el bucle `for` con el siguiente valor.
* `{% break %}`: Finaliza inmediatamente la iteración actual y luego finaliza completamente el bucle `for`.

Ambas son útiles solo cuando se combinan con una sentencia `if`.

``` liquid
{% for page in pages %}
# Skip anything in the hidden_pages array, but keep looping over the rest of the values
{% if hidden_pages contains page.url %}
    {% continue %}
{% endif %}
# If it's not hidden, print it.
* [page.title](page.url)
{% endfor %}
```

``` liquid
{% for page in pages %}
* [page.title](page.url)
# After we reach the "cutoff" page, stop the list and get on with whatever's after the "for" loop:
{% if cutoff_page == page.url %}
    {% break %}
{% endif %}
{% endfor %}
```

#### Variables de ayuda

Durante cada bucle `for`, las siguientes variables de ayuda están disponibles para necesidades adicionales de estilo:

```liquid
forloop.length      # => length of the entire for loop
forloop.index       # => index of the current iteration
forloop.index0      # => index of the current iteration (zero based)
forloop.rindex      # => how many items are still left?
forloop.rindex0     # => how many items are still left? (zero based)
forloop.first       # => is this the first iteration?
forloop.last        # => is this the last iteration?
```

#### Argumentos opcionales

Hay varios argumentos opcionales en la etiqueta `for` que pueden influir en los elementos que recibe en su bucle y en el orden en que aparecen:

* `limit:<INTEGER>` te permite restringir la cantidad de objetos a obtener.
* `offset:<INTEGER>` permite empezar la colección con el enésimo ítem.
* `reversed` itera sobre la colección desde el último hasta el primero.

Elementos de restricción:

```liquid
# array = [1,2,3,4,5,6]
{% for item in array limit:2 offset:2 %}
  {{ item }}
{% endfor %}
# results in 3,4
```

Inversión del bucle:

```liquid
{% for item in collection reversed %} {{item}} {% endfor %}
```

Un bucle for puede tomar una cláusula opcional `else` para mostrar un bloque de texto cuando no hay elementos en la colección:

```liquid
# items => []
{% for item in items %}
   {{ item.title }}
{% else %}
   There are no items!
{% endfor %}
```

### Asignación de variables

Puedes almacenar datos en tus propias variables para utilizarlos en los tags de salida u otros tags. La forma más sencilla de crear una variable es con el tag `assign`, que tiene una sintaxis muy fácil:

```liquid
{% assign name = 'freestyle' %}

{% for t in collections.tags %}{% if t == name %}
  <p>Freestyle!</p>
{% endif %}{% endfor %}
```

Otra forma de hacer esto sería asignar valores `true/false` a la variable:

```liquid
{% assign freestyle = false %}

{% for t in collections.tags %}{% if t == 'freestyle' %}
  {% assign freestyle = true %}
{% endif %}{% endfor %}

{% if freestyle %}
  <p>Freestyle!</p>
{% endif %}
```

Si quieres combinar varios strings en uno solo y guardarlo en una variable, puedes hacerlo con el tag `capture`, que "captura" lo que se muestre en su interior y luego asigna el valor capturado a la variable dada en lugar de mostrarlo en la pantalla.

```liquid
  {% capture attribute_name %}{{ item.title | handleize }}-{{ i }}-color{% endcapture %}

  <label for="{{ attribute_name }}">Color:</label>
  <select name="attributes[{{ attribute_name }}]" id="{{ attribute_name }}">
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
  </select>
```