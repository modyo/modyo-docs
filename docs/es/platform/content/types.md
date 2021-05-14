---
search: true
---

# Tipos de contenido

![Types](/assets/img/content/types/types.jpg)

Los Tipos dentro de Modyo, son herramientas que nos permitirán estructurar plantillas de contenido para insertar dentro del servicio que estés otorgando, con más de 15 tipos de campos.

Con los Tipos, podrás evitar tener que estar muchas veces elaborando contenido de igual formato, estableciendo un estilo predeterminado que permitirá optimizar tiempos y calidad a la hora de crearlo.

## Sobre la Interfaz

A primera vista, podrás encontrar en la parte superior un botón verde que, al hacer _click_ ahí, te permitirá crear un Tipo.

Más abajo, podrás ver la barra de búsqueda de Tipos, que te permitirá filtrar por cualquier palabra que se encuentre dentro del campo Nombre.

Después, encontrarás la tabla con los Tipos ya creados, que estarán ordenados de manera predeterminada de acuerdo a la fecha y hora actualizada, partiendo desde el elemento más reciente hacia atrás.

Para reordenarla, solo debes hacer _click_ en los símbolos que se encuentran a un costado de cada categoría.

Las categorías por las cuales puedes reordenar son cuatro:

- **Nombre**
- **UID**
- **Fecha de Creación**
- **Fecha de Actualización**

Si quieres entrar a cualquier Tipo, debes hacer clic en el Nombre de éste para que se abra el editor correspondiente.

## Crear un Tipo

<img src="/assets/img/content/types/new-type.jpg" style="border: 1px solid #EEE; margin-top: 40px" width="450">

Para crear un Tipo, es necesario hacer _click_ en el botón verde superior de la pantalla y poner el nombre y el Identificador de Usuario (UID) correspondiente.

::: tip Tip
Es una buena práctica poner dentro del UID, el formato de qué se publicará como lo son, por ejemplo, videos, posts, etc. 

Así, cualquier usuario de la plataforma sabrá de qué tipo de contenido se trata y podrá usarlo como plantilla sin tener que generar una nueva.
:::

En la interfaz de creación, podrás ver al centro de tu pantalla una plantilla vacía, mientras que al costado derecho, puedes ver una tabla con tres pestañas. 

- **Añadir campos**
- **Configuración del campo**
- **Configuración**

Esta interfaz sirve para crear cada uno de los tipos, dándoles el formato que sea requerido.

## Campos

::: tip Tip
El nombre del campo es de suma importancia porque será mediante lo que se podrá acceder a su valor en los SDK de Liquid y JS. Para acceder al valor de un campo de una entrada puedes usar por ejemplo <span v-pre>`{{entry["nombre del campo"]}}`</span>. 

Para más información ve a la [referencia de la API](/es/platform/content/public-api-reference.html)
:::

Todos los campos que se pueden añadir en un tipo, tienen un nombre, y la posibilidad de ser requeridos.

Cuando un campo es requerido, al momento de crear o modificar una entrada, debe haber un valor asociado para ese campo, de lo contrario, no se podrán guardar los cambios.

### Texto de una línea

Este campo te permite ingresar textos de una sola linea. y cuenta con las siguientes restricciones:

- **Largo mínimo**: Permite exigir un largo mínimo al texto ingresado.
- **Largo máximo**: Permite limitar el largo máximo al texto ingresado.
- **Validación por expresión regular**: Te permite añadir una expresión regular para validar que el texto que se ingresa al momento de crear/modificar una entrada coincida con un formato determinado. 


### Texto enriquecido

Este campo se traduce en un editor WYSIWYG de texto de múltiples líneas que también te permite modificar el código HTML del mismo. Este campo cuenta con las siguientes restricciones:

- **Largo mínimo**: Permite exigir un largo mínimo al texto ingresado.
- **Largo máximo**: Permite limitar el largo máximo al texto ingresado.

### Dropdown

Este campo te permite agregar una lista desplegable para seleccionar sólo una opción.

### Radio

Este campo te permite agregar una lista fija de elementos para seleccionar sólo una opción.

### Checkbox

Este campo te permite agregar una lista de la cual puedes seleccionar más de una opción o dejar en blanco.

### Opciones Múltiples

Este campo te permite agregar un campo en el cual puedes escribir para seleccionar una opción que puede ser predeterminada o propuesta.

### Booleano

Este campo te permite agregar una pregunta o afirmación (Verdadero/True oo Falso/False).

### Entero

Este campo te permite agregar un número entero que debe ser de manera predeterminada entre los números `-65325` y `+65325`. Sin embargo, se puede acotar haciendo uso de las restricciones:

- **Largo mínimo**: Permite exigir un largo mínimo al texto ingresado.
- **Largo máximo**: Permite limitar el largo máximo al texto ingresado.

### Decimal

Este campo te permite agregar un número decimal que debe estar de manera predeterminada entre los números `-65325` y `+65325`. Sin embargo, se puede acotar haciendo uso de las restricciones:

- **Largo mínimo**: Permite exigir un largo mínimo al texto ingresado.
- **Largo máximo**: Permite limitar el largo máximo al texto ingresado.

### Fecha

Te permite agregar un selector de fechas. Puedes restringir los valores de fechas que se pueden elegir, haciendo uso de las restricciones:

- **Desde**: Permite limitar la menor seleccionable.
- **Hasta**: Permite limitar la mayor fecha seleccionable.

### Ubicación

Te permite agregar un campo que en el que puedes seleccionar una dirección geográfica, según los campos de Google Maps, o en el caso de que no cuentes con una _API key_ de google, te permitirá ingresar a mano el nombre, latitud, longitud y las cinco limitaciones políticas de la ubicación. Estas áreas de administración no son estándar y dependen de cada país. En el caso de Chile estas son: Región, Provincia, Comuna y Ciudad.

:::warning Atención
Para que los mapas de ubicación funcionen correctamente con la API key de Google configurada en la cuenta, la key debe tener permisos para acceder a:

* API de mapas a través de JavaScript
* API de lugares
* API de geocodificación
:::

### Archivo

Este campo te permite adjuntar un sólo archivo a la entrada haciendo uso del gestor de archivos.

### Listado de Archivos

Este campo te permite adjuntar múltiples archivos a la entrada haciendo uso del gestor de archivos.

### Contenido (link a una)

Este campo te permite vincular una Entrada a otra Entrada que ya se encuentre creada y publicada dentro del Espacio. Este campo cuenta con las siguientes restricciones:

- **Restringir tipo**: Te permite seleccionar un tipo predeterminado para que las entradas que se puedan seleccionar como enlace, solo sean del tipo seleccionado.

### Listado de Contenido (link a muchas)

Este campo te permite vincular muchas Entradas que ya se encuentren creadas dentro del Espacio a otra Entrada. Este campo cuenta con las siguientes restricciones:

- **Restringir tipo**: Te permite seleccionar un tipo predeterminado para que las entradas que se puedan seleccionar como enlace, solo sean del tipo seleccionado.

## Propiedades

En esta pestaña, puedes ver el nombre del tipo, junto con su UID. El UID es importante ya que será como se llame al tipo desde los SDK de Liquid, Javascript y API. A continuación verás un botón que puede estar en 2 estados:

- **Reindexar**: Te permite reindexar el modelo si es que te encontraste con algún problema con tu API pública.
- **Cancelar reindexación**: Si es que ya hay una reindexación en curso, podrás cancelar el proceso  haciendo _click_ en este botón. 

::: warning Atención
Cuando reindexas alguno de tus tipos, el modelo que estaba reindexado anteriormente quedará disponible hasta que el nuevo indice esté completo. Al finalizar la nueva reindexación, se sobreescribirá el indice antiguo con el nuevo indice.
:::

::: warning Atención
Ten en cuenta que dependiendo de la [configuración de caché que tengas en tu espacio](/es/platform/content/spaces.html#cache), es posible que no veas los cambios inmediatamente después de haber terminado la reindexación.
:::
