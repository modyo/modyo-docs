---
search: true
---

# Tipos de contenido

Los tipos dentro de Modyo, son un objeto fundamental a la hora de crear contenido, ya que en palabras simples, son plantillas que nos permitirán elaborar contenidos para insertar dentro del servicio que estemos otorgando.

Con los Tipos, podrás evitar tener que estar muchas veces escrbiendo contenido de igual formato, sino que podrás dar un estilo predeterminado que permitirá optimizar tiempos y calidad a la hora de crearlo.

## Sobre la Interfaz

A primera vista, podrás encontrar en la parte superior un botón verde que, al hacer click ahí, te permitirá crear un Tipo. 

Más abajo, podrás encontrar la barra de búsqueda de Tipos, que te permitirá encontrar cualquier palabra que busques que se encuentre dentro del campo Nombre.

Después, podrás ver la tabla con los Tipos ya creados, que estarán ordenados de manera predeterminada de acuerdo a la fecha y hora actualizada, partiendo desde el elemento más reciente hacia atrás.

Para reordenarla, solo debes hacer click en los símbolos que se encuentran a un costado de cada categoría.

Las categorías por las cuales puedes reordenar son cuatro:

- Nombre
- UID
- Fecha de Creación
- Fecha de Actualización

Si quieres entrar a cualquier Tipo, debes hacer clic en el Nombre de éste para que se abra el editor correspondiente.

## Crear un Tipo

Para crear un Tipo, es necesario hacer click en el botón verde superior de la pantalla y poner el nombre y el Identificador de Usuario (UID) correspondiente.

::: tip 
Es una buena práctica poner dentro del UID, el formato de qué se publicará como lo son, por ejemplo, videos, posts, etc. Así, cualquier usuario de la plataforma sabrá de qué tipo de contenido se trata y podrá usarlo como plantilla sin tener que generar una nueva.
:::

En la interfaz de creación, podrás ver al centro de tu pantalla una plantilla vacía, mientras que al costado derecho, puedes ver una tabla con tres pestañas. 

- Añadir campos
- Configuración del campo
- Configuración

Esta interfaz nos servirá para crear cada uno de nuestros tipos, dándoles el formato que nos sea requerido.

## Campos

Los campos son el corazón de los Tipos, ya que cada uno de estos elementos son los que forman el recurso que quieres obtener. Para ello, la plataforma te entrega múltiples variables que puedes usar de la forma que necesites.

Para ello, todos los campos tienen tres configuraciones en común que permiten orientar a quien va a ocupar el formato para crear un recurso.

- Nombre: A cualquier campo debes darle un nombre que aparecerá en la parte superior del campo. 

::: danger
El Nombre del campo es de suma importancia porque con ello mediante lo que se podrá acceder a su valor en los SDK de liquid y JS.
:::

- Indicación: Sirve para agregar información al usuario sobre cómo rellenar el campo.

- Validación: Configura si el campo es obligatorio para rellenar o puede ser dejado en blanco.

- Expresión Regular: Si quieres asegurarte de que el campo sea rellenado correctamente, en algunas de las configuraciones puedes agregar que este se escriba en un formato en específico. Por lo mismo, puedes hacer clic en el símbolo derecho donde podrás seleccionar la expresión que necesites.
A su vez, puedes probar la expresión en la siguiente opción. Si está correcta, después de escribirla aparecerá en verde. En caso contrario, aparecerá en rojo.

- Largo mínimo/máximo: Puedes restringir la cantidad de caracteres que se deben agregar al completar un campo, incluyendo espacios.

Los campos que puedes agregar son:

- Texto de una línea: Agrega un campo de texto de una sola línea.
En este caso, para asegurarte que el campo sea rellenado correctamente, puedes configurar que se adapte a un formato prederminado, que debe ser validado a través de un sistema.

- Texto de múltiples líneas: Se agrega campo de texto de múltiples líneas. 

- Texto enriquecido: Se agrega un Editor WYSIWYG simple de texto de múltiples líneas.

- Dropdown: Agregas una lista desplegable para seleccionar sólo una opción.
::: danger
Missing description
Requerido
:::

- Radio: Agregas una lista fija para seleccionar sólo una opción.
::: danger
Missing description
Requerido
:::

- Checkbox: Agregas una lista que te permite seleccionar más de una opción o dejar en blanco.
::: danger
Missing description
Requerido
:::

- Opciones Múltiples: Agregas un campo que permite escribir una opción que puede ser predeterminada o propuesta.
::: danger
Missing description
Requerido
:::

- Booleano: Agregas una pregunta o afirmación en que obligatoriamente debe ser seleccionada. (True or False)
::: danger
Missing description
Requerido
:::

- Entero: Puedes agregar un número entero que debe ser de manera predeterminada entre los números -65325 y +65325. Sin embargo, se puede acotar este lapso de cifras.
::: danger
Missing description
Requerido
Restricción min/max
:::

- Decimal: Puedes agregar un número decimal que debe estar de manera predeterminada entre los números -65325 y +65325. Sin embargo, se puede acotar este lapso de cifras.
::: danger
Missing description
Requerido
Restriccion min/max
:::

- Fecha: Agregas una fecha.
::: danger
Missing description
Restricción fecha desde/hasta
:::

- Ubicación: Agregas un capo que permite agregar una dirección geográfica, según los campos de Google Maps.
::: danger
Missing description
Requerido
:::

- Archivo: Puedes adjuntar un sólo archivo. Para ello, este debe estar en el directorio interno y visualizarse en el Gestor de Archivos.
::: danger
Missing description
Requerido
:::

- Listado de Archivos: Puedes adjuntar más de un archivo. Para ello, estos deben estar en el directorio interno y visualizarse en el Gestor de Archivos.
::: danger
Missing description
requerido
:::

- Contenido (link a una): Puedes vincular a una Entrada que ya se encuentre creada dentro del Espacio.
::: danger
Missing description
Restringir tipo
:::

- Listado de Contenido (link a muchas): Puedes vincular a más de un Contenido o Entrada que ya se encuentren creadas dentro del Espacio.
::: danger
Missing description
Restringir tipo
:::

## Propiedades

::: danger
Missing description
Si tienes algún problema con la API pública de tu contenido, puedes reindexar ese type en la sección de propiedades del type
:::