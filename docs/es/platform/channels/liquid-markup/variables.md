---
search: true
---

# Expresiones y variables

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