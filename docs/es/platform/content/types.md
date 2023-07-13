---
search: true
---

# Tipos de contenido


Los Tipos de contenido son la base para tus Entradas. Los Tipos definen qué campos y validaciones son requeridas para las Entradas, contando con más de 15 tipos de campos.

A los Tipos de Contenido se les puede asignar una cardinalidad. Esta variable indica cuantas Entradas pueden existir para este Tipo. Puedes agregar idiomas al repositorio y generar Entradas en varios idiomas, almacenadas en un solo lugar. Además, puedes crear Usuarios, con diferentes roles y permisos, logrando así una división de trabajo llamada Revisión de Equipo.

<img src="/assets/img/content/types/types.jpg" alt="The UI for the Content Type module.">

## Sobre la Interfaz

Al ingresar por primera vez en la sección Tipos, haz click en el botón verde **+Nuevo Tipo** para crear un nuevo Tipo.

Una vez que has creado tu primer Tipo, podrás crear tipos adicionales, dando click en el botón **+Nuevo Tipo** en la parte superior derecha.

La barra de búsqueda te permite buscar y filtrar tus tipos por cualquier palabra que aparezca en el campo Nombre.

La tabla debajo de la barra de búsqueda muestra los Tipos ya creados, ordenados de manera predeterminada de acuerdo a la fecha y hora actualizada, comenzando desde el elemento más reciente y retrocediendo.

Para reordenar la tabla, haz click en los símbolos al costado de cada categoría. Las categorías por las cuales puedes reordenar son:

- **Nombre**
- **Identificador (UID)**
- **Fecha de Creación**
- **Fecha de Actualización**

Haz click en el nombre de un Tipo para abrir el editor correspondiente.

## Crear un Tipo

Para crear un nuevo tipo de contenido que servirá como base para tus entradas, sigue estos pasos:

1. Desde el menú principal, haz click en **Contenido**.
2. Selecciona el espacio donde quieres crear un nuevo Tipo.
3. Haz click en **Tipos**.
2. Haz click en el botón **+ Nuevo Tipo**.
3. Escribe el nombre e identificador (UID).
4. Selecciona la cardinalidad del tipo.
5. Haz click en **Crear**.

:::tip Tip
Recomendamos escribir el formato de las entradas dentro del identificador, por ejemplo, videos, posts, etc. De esta manera, cualquier miembro del equipo sabrá de qué tipo de contenido se trata y podrá usarlo como plantilla para sus entradas sin necesidad de crear una nueva.

La cardinalidad se refiere al número de entradas que pueden existir para ese tipo de contenido. Si seleccionas "cardinalidad single", solo se permite una entrada de ese tipo. Si eliges "cardinalidad múltiple", no hay límite en el número de entradas permitidas.
:::

:::warning Atención
Es importante tener en cuenta que existe un límite de 50 Tipos de Contenido por Espacio.
:::

En la interfaz de creación, encontrarás una plantilla vacía en el centro de la pantalla y al lado derecho, una tabla con tres pestañas: 

- **Añadir campos**
- **Configuración del campo**
- **Configuración**

Esta interfaz te permite crear cada uno de los tipos y darles el formato necesario, según tus requisitos.

## Campos

:::tip Tip
El nombre del campo es de suma importancia, ya que será utilizado para acceder a su valor en los SDK de Liquid y JS. Para acceder al valor de un campo de una entrada puedes utilizar la sintaxis <span v-pre>`{{entry["nombre del campo"]}}`</span>. 

Para más información ve a la [referencia de la API](/es/platform/content/public-api-reference.html)
:::

Todos los campos que se pueden añadir en un tipo, tienen un nombre, y la posibilidad de ser requeridos.

Cuando un campo es marcado como requerido, al crear o modificar una entrada, se debes proporcionar un valor para ese campo. De lo contrario, no podrás guardar los cambios realizados.

### Texto de una línea

Este campo te permite ingresar textos de una sola linea. Cuenta con las siguientes restricciones:

- **Largo mínimo**: Permite exigir un mínimo de caracteres para el texto ingresado.
- **Largo máximo**: Permite  limitar la cantidad máxima de caracteres para el texto ingresado.
- **Validación por expresión regular**: Te permite añadir una expresión regular para validar que el texto ingresado, al crear o modificar una entrada, cumpla con un formato determinado.

### Texto enriquecido

Este campo se traduce en un editor WYSIWYG de texto de múltiples líneas que también te permite modificar el código HTML del texto. Este campo cuenta con las siguientes restricciones:

- **Largo mínimo**: Establece el mínimo de caracteres para el texto ingresado.
- **Largo máximo**: Limita la cantidad máxima de caracteres para el texto ingresado.

### Dropdown

Este campo te permite agregar una lista desplegable donde solo se puede seleccionar una opción.

### Radio

Utiliza este campo para agregar una lista fija de elementos para seleccionar solo una opción.

### Checkbox

Este campo te permite agregar una lista de la cual puedes seleccionar más de una opción o dejar en blanco.

### Opciones Múltiples

Este campo te permite agregar un campo de texto en el cual puedes escribir para seleccionar una opción; puede ser predeterminada o propuesta.

### Booleano

Este campo te permite agregar una pregunta o afirmación (Verdadero/True o Falso/False).

### Entero

Este campo te permite agregar un número entero.  Por defecto, el valor debe estar en el rango de `-65325`a `+65325`. Sin embargo, puedes ajustar estos límites aplicando las siguientes restricciones:

- **Largo mínimo**: Establece el número mínimo de caracteres para el texto ingresado.
- **Largo máximo**: Establece el número máximo de caracteres para el texto ingresado.

### Decimal

Utiliza este campo para ingresar un número decimal. El número debe ser, obligatoriamente, entre `-65325` y `+65325`. Sin embargo, se puede acotar haciendo uso de las restricciones:

- **Largo mínimo**: Permite establecer un mínimo de caracteres para el texto ingresado.
- **Largo máximo**: Permite limitar la cantidad máxima de caracteres para el texto ingresado.

### Fecha

Utiliza este campo para agregar un selector de fechas. Limita las fechas seleccionables aplicando las siguientes restricciones:

- **Desde**: Establece la fecha más temprana que se puede elegir.
- **Hasta**: Establece la fecha más tardía que se puede elegir.

### Ubicación

Utiliza este campo para seleccionar una dirección geográfica, según los campos de Google Maps. En caso de que no dispongas de una clave de API de Google, puedes ingresar manualmente el nombre, la latitud, la longitud y las divisiones políticas de la ubicación. Estas divisiones administrativas no son estándar y varían según cada país. En el caso de Chile, las divisiones son: Región, Provincia, Comuna y Ciudad.

:::warning Atención
Para garantizar el correcto funcionamiento de los mapas de ubicación con la clave de API de Google configurada en tu cuenta, la clave tiene que tener permisos para acceder a:

* API de mapas a través de JavaScript
* API de lugares
* API de geocodificación
:::

### Archivo

Este campo te permite adjuntar un solo archivo a la entrada, utilizando el gestor de archivos.

### Listado de Archivos

Este campo te permite adjuntar múltiples archivos a la entrada, usando el gestor de archivos.

### Contenido (enlace a una)

Utiliza este campo para vincular una Entrada a otra Entrada existente y publicada dentro del Espacio. Este campo tiene las siguientes restricciones:

- **Restringir tipo**: Te permite seleccionar un tipo predeterminado para que solo se puedan seleccionar, como enlace, entradas del tipo especificado.

### Listado de Contenido (enlace a varias)

Este campo te permite vincular más de una Entrada existente dentro del Espacio a otra Entrada. Este campo tiene las siguientes restricciones:

- **Restringir tipo**: Te permite seleccionar un tipo predeterminado para solo se puedan seleccionar, como enlace, entradas del tipo seleccionado.

### Grupo `(coming soon)`

Utiliza el campo Grupo para albergar otro campo dentro él. Puedes asignar un nombre al grupo según tus necesidades, así como nombrar los campos dentro del grupo. En casilla pista, incluye el texto que deseas mostrar para ayudar a tus usuarios a completar correctamente el campo. 

Una vez que tengas más de un tipo de campo dentro de un grupo, puedes arrastrarlos y ordenarlos según requieras. 

No hay límite en la cantidad de campos que puedes incluir dentro de un grupo. 

Puedes validar el contenido de los campos de la siguiente forma: 

- **Requerido**: Marca la casilla **Requirido** para obligar a que se complete el grupo o campo.
  - Si marcas el grupo como requerido, al menos un elemento dentro del grupo deberá ser completado. 
  - Si marcas un elemento como requerido, ese elemento tiene que tener contenido.
- **Unique**: Cuando marcas una entrada como única, no puede repetirse su contenido dentro del mismo grupo. 

:::tip Tip
Un grupo puede albergar cualquier tipo de campo, menos otro grupo. 
:::


## Propiedades

En esta pestaña, puedes ver el nombre y UID del tipo. El UID es importante, ya que se utiliza para referirse al tipo desde los SDK de Liquid, JavaScript y la API. A continuación, verás un botón que puede estar en 2 estados:

- **Reindexar**: Te permite volver a indexar el modelo en caso de problemas con la API pública.
- **Cancelar reindexación**: Si hay una reindexación en curso, puedes cancelar el proceso haciendo click en este botón. 

:::warning Atención
Al reindexar uno de tus tipos, el modelo previamente indexado seguirá disponible hasta que se complete la nueva indexación. Una vez finalizada la reindexación, el antiguo índice se sobrescribirá con el nuevo índice.
:::

:::warning Atención
Ten en cuenta que dependiendo de la [configuración de caché que tengas en tu espacio](/es/platform/content/spaces.html#cache), es posible que no veas los cambios inmediatamente después de haber terminado la reindexación.
:::
