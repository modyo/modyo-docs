---
search: true
---

# Tags

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

```shell
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

```shell
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