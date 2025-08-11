---
search: true
---

# Expresiones y Variables

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