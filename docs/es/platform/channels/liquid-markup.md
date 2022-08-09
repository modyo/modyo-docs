---
search: true
---

# Lenguaje Liquid

Liquid es un lenguaje que usamos en Modyo Platform para desplegar el contenido del módulo Content en tus Sitios. Utilizando Liquid podrás generar una plantilla en tu sitio que despliega la información de tus entradas dinámicamente así como también controlar que mostrar usando control de flujo o iteración.

En Liquid, como en muchos otros lenguajes de programación, se tienen que usar palabras reservadas para desplegar el contenido dinámico. Estas llamadas se ejecutan “justo-a-tiempo” (just-in-time) lo cual te permite hacer “carga diferida” (lazy loading) sólo cuando se necesite.

Liquid está escrito con requerimientos muy específicos:

* Debe tener un marcado bonito y sencillo. Los motores de plantillas que no producen un marcado atractivo no son divertidos de usar.
* Tiene que ser no evaluable y seguro. Las plantillas Liquid están hechas para que los usuarios puedan editarlas. No quieres ejecutar código en tu servidor que tus usuarios escribieron.
* No debe tener un estado. Los pasos de compilación y renderizado tienen que estar separados para que el análisis sintáctico y su compilación se pueda hacer solo una vez, y más tarde se pueda renderizar pasando un hash con objetos locales y variables.

### ¿Por qué usar Liquid?

* Deseas permitir que sus usuarios editen la apariencia de su aplicación pero no quieres que ejecuten **código inseguro en tu servidor**.
* Quieres renderizar tus plantillas directamente desde la base de datos.
* Te gustan los motores inteligentes de plantillas de estilo (PHP).
* Necesitas un motor de plantillas que funcione bien tanto en HTML como en emails.
* No te gusta el marcado (markup) de tu actual motor de plantillas.

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

A continuación veremos varios ejemplos de los usos más comúnes al escribir con Liquid.

#### Objetos

Se denomina objeto a lo que contiene el contenido que Liquid despliega en pantalla. Se puede desplegar objetos or variables usando doble corchete ``{{ }}``, por ejemplo:

Para desplegar el nombre de la entrada en tu página usa:

```liquid
{{ entry.meta.name }}
```

#### Tags

Con Tags se puede agregar control de flujo e iteración a tus páginas. Se necesita encapsular el lenguaje con corchete y porcentaje {% %} para hacer uso de Tags, por ejemplo:

```liquid
{% if product.name == "Banca Electrónica" %}
 ¡Descarga nuestra banca electrónica en tu teléfono celular!
{% endif %}
```

### Drops
Modyo extiende la funcionalidad de Liquid a través de variables creadas para Modyo Platform llamadas Drops. Actualmente ofrecemos drops de más de 20 categorías diferentes para todos los módulos de la plataforma. 

Para ver más información acerca de como usar Drops, ve [Drops](/es/platform/channels/drops).


## Expresiones y variables

Las expresiones son sentencias que tienen valores. Las plantillas de Liquid pueden usar expresiones en muchos lugares; muy frecuentemente en sentencias output, pero también como argumentos para tags o filtros.

Liquid acepta los siguientes tipos de expresiones:

* **Variables.** El tipo más básico de expresión es sólo el nombre de una variable. Las variables de Liquid son nombradas tal como las variables de Ruby: deben contener caracteres alfanuméricos y barras bajas, siempre deben comenzar con una letra, y no contener ningún tipo de símbolo (es decir, deben verse como `var_name`, y no `$var_name`).
* **Acceso de array/hashes.** Si tienes una expresión (normalmente una variable) cuyo valor es un array o hash, puede usar un único valor de ese array/hash de la siguiente manera:
    * `my_variable[<KEY EXPRESSION>]` — El nombre de la variable, seguido inmediatamente de corchetes que contienen una expresión clave.
        * Para arrays, la clave debe ser un entero literal o una expresión que se resuelva a un entero.
        * Para hashes, la clave debe ser un string de comillas literal o una expresión que se resuelva a un string.
    * `my_hash.key` — Los hashes también permiten una notación de "punto" más corta, donde el nombre de la variable es seguido por un punto y el nombre de una clave. Esto sólo funciona con claves que no contienen espacios, y (a diferencia de la notación entre corchetes) no permite el uso de un nombre de clave almacenado en una variable.
    * Nota: si el valor de una expresión de acceso es también un array o hash, puedes acceder a los valores desde ella de la misma manera, e incluso puedes combinar los dos métodos. (Por ejemplo, `site.posts[34].title`.)
* **Primer y último array.** Si tienes una expresión cuyo valor es un array, puedes seguirla con `.first` o `.last` para resolver su primer o último elemento.
* **Tamaño de array o hash** Si tienes una expresión cuyo valor es un array o hash, puedes seguirla con `.size` para resolver el número de elementos de la expresión original, como un entero.
* **Strings.** Los strings literales deben estar rodeados de comillas dobles o simples (``"mi cuerda"`` o `'mi cuerda'`). No hay diferencia; ningún estilo permite interpolación variable.
* **Enteros.** Los números enteros no pueden ser citados.
* **Booleanos y nil.** Los valores literales `true`, `false`, and `nil`.

Tenga en cuenta que no hay manera de escribir un array literal o hash como expresión; los arrays y hashes deben pasarse a la plantilla, o construirse oblicuamente con un tag o una declaración output.

## Filtros

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
* `date` - Da formato a una fecha ([syntax reference](http://docs.shopify.com/themes/liquid-documentation/filters/additional-filters#date))
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

## Tags

Los tags (etiquetas) se utilizan para la lógica de la plantilla. Aquí hay una lista de los tags actualmente soportadas:

* **assign** - Asigna un valor a una variable
* **capture** - Bloque tag que captura texto a una variable.
* **case** - Bloque tag, sentencia case standard.
* **comment** - Bloque tag, comenta el texto en el bloque.
* **cycle** - Cycle se utiliza generalmente dentro de un bucle para alternar entre valores, como colores o clases DOM.
* **for** - Bucle for
* **break** - Sale de un bucle
* **continue** Salta el código restante en el bucle actual y continúa con el siguiente bucle.
* **if** - Bloque if/else estándar.
* **include** - Incluye otra plantilla; útil para parciales
* **raw** - Desactiva temporalmente el procesamiento de tags para evitar conflictos de sintaxis.
* **unless** - Copia de la sentencia if.

### Comentarios

Cualquier contenido que se escriba entre los tags `{% comment %}` y `{% endcomment %}` será convertido en un comentario.

```liquid
We made 1 million dollars {% comment %} in losses {% endcomment %} this year
```

### Raw

Raw sirve para deshabilitar temporalmente el proceso de tags.
Esto es útil para generar contenido (eg, Mustache, Handlebars) que puede usar una sintaxis conflictiva con otros elementos.

```liquid
{% raw %}
  In Handlebars, {{ this }} will be HTML-escaped, but {{{ that }}} will not.
{% endraw %}
```

### If / Else

Las sentencias `if / else` deberían ser conocidas de otros lenguajes de programación. Liquid los implementa con los siguientes tags:

* `{% if <CONDITION> %} ... {% endif %}` — Adjunta una sección de la plantilla que sólo se ejecutará si la condición es true.
* `{% elsif <CONDITION> %}` — Puede utilizarse opcionalmente dentro de un bloque `if .... endif`. Especifica otra condición; si el "if" inicial falla, Liquid prueba el "elsif", y ejecuta la siguiente sección de la plantilla si tiene éxito. Se puede usar cualquier número de elsif en un bloque `if` * `{% else %}` - Opcionalmente se puede usar dentro de un bloque `if... endif`, _después_ de cualquier etiqueta "elsif". Si todas las condiciones anteriores fallan, Liquid ejecutará la sección de la plantilla siguiendo la etiqueta "else".
* `{% unless <CONDITION> %} ... {% endunless %}` — El reverso de una sentencia "if". No uses "elsif" o "else" con una sentencia unless.

La condición de un tag `if`, `elsif` o `unless` debe ser una expresión de Liquid normal o una _comparación_ usando expresiones de Liquid. Ten en cuenta que los operadores de comparación se implementan mediante etiquetas similares a "if"; no funcionan en ningún otro lugar en Liquid.

Los operadores relacionales disponibles son:

* `==, !=,` and `<>` — igual y desigual (los dos últimos son sinónimos)
    * Hay un valor especial secreto "empty" (sin comillas) con el que se pueden comparar los arrays; la comparación es verdadera si el array no tiene miembros.
* `<, <=, >, >=` — menor/mayor que
* `contains` — un wrapper alrededor del método `include?` de Ruby, que se implementa en strings, arrays y hashes. Si el argumento izquierdo es un string y el derecho no, convierte a string el derecho.

Los operadores booleanos disponibles son:

* `and`
* `or`

Ten en cuenta que NO hay ningún operador "no", y también que NO PUEDE utilizar paréntesis para controlar el orden de las operaciones, ya que la precedencia de los operadores parece no estar especificada. Así que cuando tengas dudas, usa sentencias "if" anidadas.

Las expresiones de Liquid son probadas para determinar su "veracidad" en lo que parece ser una forma de Ruby:

* `true` es verdadero
* `false` es falso.
* Cualquier string es true, incluyendo un string vacío.
* Cualquier array es true.
* Cualquier hash es true.
* Cualquier valor inexistente/nulo (como una parte faltante de un hash) es falso.

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

Si necesita más condiciones, puede usar la sentencia "case":

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

A menudo hay que alternar entre diferentes colores o tareas similares. Liquid tiene soporte incorporado para tales operaciones, usando el tag `cycle`.

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

Si no se proporciona ningún nombre para el grupo cycle, entonces se asume que múltiples
llamadas con los mismos parámetros son un grupo.

Si desea tener un control total sobre los grupos cycle, puede especificar opcionalmente
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

Los bucles for pueden iterar sobre **arrays, hashes y rangos de números enteros.**

Al iterar un hash, `el elemento[0]` contiene la clave, y `el elemento[1]` contiene el valor:

```liquid
{% for item in hash %}
  {{ item[0] }}: {{ item[1] }}
{% endfor %}
```

En lugar de hacer un bucle sobre una colección existente, también puede hacer un bucle a través de un rango de números. Los rangos se parecen a `(1..10)` - paréntesis que contienen un valor inicial, dos puntos y un valor final. Los valores inicial y final deben ser enteros o expresiones que se resuelven a números enteros.

```liquid
# if item.quantity is 4...
{% for i in (1..item.quantity) %}
  {{ i }}
{% endfor %}
# results in 1,2,3,4
```

#### Break y continue

Puede salir tempranamente de un bucle con los siguientes tags:

* `{% continue %}` - finaliza inmediatamente la iteración actual, y continúa el bucle "for" con el siguiente valor.
* `{% break %}` - finaliza inmediatamente la iteración actual, luego finaliza completamente el bucle "for".

Ambas sólo son útiles cuando se combinan con algo como una sentencia "if".

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

Puede almacenar datos en sus propias variables, para utilizarlos en los tags de salida u otros tags como desee. La forma más sencilla de crear una variable es con el tag `assign`, que tiene una sintaxis muy fácil:

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

Si quieres combinar varios strings en uno solo y guardarlo en una variable, puedes hacerlo con el tag `capture`, que "captura" lo que sea que se muestre en su interior, y luego asigna el valor capturado a la variable dada en lugar de mostrarlo en la pantalla.

```liquid
  {% capture attribute_name %}{{ item.title | handleize }}-{{ i }}-color{% endcapture %}

  <label for="{{ attribute_name }}">Color:</label>
  <select name="attributes[{{ attribute_name }}]" id="{{ attribute_name }}">
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
  </select>
```