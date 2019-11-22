---
search: true
---

# Content types

Los formatos que publicaremos en nuestro sitio web siempre deben ser segmentados, para que cualquier programa o microservicio que quiera filtrar la información a través de la API, pueda interpretar más rápido el contenido para su uso final.

## Create a type

Para crear un Tipo, es necesario hacer clic en el botón superior de la pantalla y poner el nombre y el UID correspondiente. Es una buena práctica poner el nombre del formato de qué se publicará, con tal de que cualquier usuario de la plataforma sepa de qué contenido se trata.

## Fields

::: danger Peligro
Missing description
El nombre del campo es de suma importancia porque será mediante lo que se podrá acceder a su valor en los SDK de liquid y JS
:::

- Texto de una línea: Solo para agregar textos de una sola linea.
::: danger Peligro
Missing description
Restricciones (largo min/max)
Validación mediante expresión regular
Requerido
:::

- Texto de múltiples líneas: Se agrega texto de una línea.
::: danger Peligro
Missing description
Restricciones largo min/max
Validación por expresión regular
Requerido
:::

- Texto enriquecido: Editor WYSIWYG de texto de múltiples líneas.
::: danger Peligro
Missing description
Restricción largo min/max
:::

- Dropdown: Agregas una lista desplegable para seleccionar sólo una opción.
::: danger Peligro
Missing description
Requerido
:::

- Radio: Agregas una lista fija para seleccionar sólo una opción.
::: danger Peligro
Missing description
Requerido
:::

- Checkbox: Agregas una lista que te permite seleccionar más de una opción o dejar en blanco.
::: danger Peligro
Missing description
Requerido
:::

- Opciones Múltiples: Agregas un campo que permite escribir una opción que puede ser predeterminada o propuesta.
::: danger Peligro
Missing description
Requerido
:::

- Booleano: Agregas una pregunta o afirmación en que obligatoriamente debe ser seleccionada. (True or False)
::: danger Peligro
Missing description
Requerido
:::

- Entero: Puedes agregar un número entero que debe ser de manera predeterminada entre los números -65325 y +65325. Sin embargo, se puede acotar este lapso de cifras.
::: danger Peligro
Missing description
Requerido
Restricción min/max
:::

- Decimal: Puedes agregar un número decimal que debe estar de manera predeterminada entre los números -65325 y +65325. Sin embargo, se puede acotar este lapso de cifras.
::: danger Peligro
Missing description
Requerido
Restriccion min/max
:::

- Fecha: Agregas una fecha.
::: danger Peligro
Missing description
Restricción fecha desde/hasta
:::

- Ubicación: Agregas un capo que permite agregar una dirección geográfica, según los campos de Google Maps.
::: danger Peligro
Missing description
Requerido
:::

- Archivo: Puedes adjuntar un sólo archivo. Para ello, este debe estar en el directorio interno y visualizarse en el Gestor de Archivos.
::: danger Peligro
Missing description
Requerido
:::

- Listado de Archivos: Puedes adjuntar más de un archivo. Para ello, estos deben estar en el directorio interno y visualizarse en el Gestor de Archivos.
::: danger Peligro
Missing description
requerido
:::

- Contenido (link a una): Puedes vincular a una Entrada que ya se encuentre creada dentro del Espacio.
::: danger Peligro
Missing description
Restringir tipo
:::

- Listado de Contenido (link a muchas): Puedes vincular a más de un Contenido o Entrada que ya se encuentren creadas dentro del Espacio.
::: danger Peligro
Missing description
Restringir tipo
:::

## Properties

::: danger Peligro
Missing description
Si tienes algún problema con la API pública de tu contenido, puedes reindexar ese type en la sección de propiedades del type
:::
