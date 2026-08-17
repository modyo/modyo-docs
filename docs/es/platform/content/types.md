---
search: true
---

# Tipos de contenido


Los Tipos de contenido son la base para tus Entradas. Definen qué campos y validaciones son requeridas para las Entradas, contando con más de 15 tipos de campos.

A los Tipos de contenido se les puede asignar una cardinalidad. Esta variable indica cuantas Entradas pueden existir para este Tipo. Puedes agregar idiomas al repositorio y generar Entradas en varios idiomas, almacenadas en un solo lugar. Además, puedes crear Usuarios, con diferentes roles y permisos, logrando así una división de trabajo llamada Revisión de Equipo.

## Sobre la interfaz

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
2. Haz click en el botón **Nuevo Tipo**.
3. Escribe el nombre e identificador (UID).
4. Selecciona la cardinalidad del tipo.
5. Haz click en **Crear**.

:::tip Tip
Recomendamos escribir el formato de las entradas dentro del identificador, por ejemplo, videos, posts, etc. De esta manera, cualquier miembro del equipo sabrá de qué tipo de contenido se trata y podrá usarlo como plantilla para sus entradas sin necesidad de crear una nueva.

La cardinalidad se refiere al número de entradas que pueden existir para ese tipo de contenido. Si seleccionas "cardinalidad individual", solo se permite una entrada de ese tipo. Si eliges "cardinalidad múltiple", no hay límite en el número de entradas permitidas.
:::

:::warning Atención
El número de tipos de contenido que puedes crear por espacio lo define el plan de tu cuenta, y por defecto es 50. Al intentar crear uno más allá del cupo, la creación falla con el mensaje "Has alcanzado el número máximo de tipos de contenido para el plan actual". Si necesitas un cupo mayor, conversa con tu ejecutivo de cuenta en Modyo.
:::

En la interfaz de creación, encontrarás una plantilla vacía en el centro de la pantalla y al lado derecho, una tabla con tres pestañas: 

- **Añadir**
- **Campo**
- **Configuración**

Esta interfaz te permite crear cada uno de los tipos y darles el formato necesario, según tus requisitos.

## Campos

:::tip Tip
El nombre del campo es de suma importancia, ya que será utilizado para acceder a su valor en los SDK de Liquid y JS. Para acceder al valor de un campo de una entrada puedes utilizar la sintaxis <span v-pre>`{{entry["nombre del campo"]}}`</span>. 

Para más información ve a la [referencia de la API](/es/platform/content/public-api-reference)
:::

Todos los campos que puedes añadir a un tipo comparten tres propiedades, que se configuran en la pestaña **Campo** del panel derecho:

- **Nombre**: Identifica al campo y es la clave con la que accedes a su valor desde Liquid, los SDK y la API. Es obligatorio, admite hasta 255 caracteres, y no puede empezar con guion bajo (`_`), contener puntos, ni incluir los caracteres `<`, `>` y `;`. Si escribes un carácter no permitido, el panel descarta lo que escribiste y muestra "Los nombres de campos no pueden empezar con guión ni contener puntos".
- **Indicación**: Texto de ayuda opcional. Se muestra bajo el campo al crear o modificar una entrada, para orientar a quien la completa.
- **Requerido**: Al crear o modificar una entrada, se debe proporcionar un valor para ese campo. De lo contrario, no podrás guardar los cambios realizados.

Dentro de un mismo tipo, dos campos no pueden llamarse igual: si repites un nombre, el tipo no se guarda y verás el mensaje "No se puede guardar el tipo porque hay nombres repetidos en sus campos".

:::warning Atención
Renombrar un campo cambia la clave con la que lees su valor desde Liquid, los SDK y la API. Antes de renombrar un campo que ya está en uso, revisa las plantillas y las integraciones que lo consumen.
:::

:::danger Peligro
Eliminar un campo de un tipo borra el valor de ese campo en todas las entradas del tipo, y no se puede deshacer. Al quitarlo, el panel te pide confirmar con el mensaje "¿Estás seguro que quieres eliminar este campo? Una vez guardes, esta acción eliminará este campo de todas las entradas de este tipo y no se podrá deshacer." y vuelve a advertirte al guardar. Mientras no guardes, el campo y sus valores siguen intactos: si te equivocaste, sal de la pantalla sin guardar.
:::

### Texto de una línea

Este campo te permite ingresar textos de una sola linea, con un tope de 255 caracteres. Si necesitas guardar un texto más largo, usa [Texto de múltiples líneas](#texto-de-multiples-lineas). Cuenta con las siguientes restricciones:

- **Largo mínimo**: Permite exigir un mínimo de caracteres para el texto ingresado.
- **Largo máximo**: Permite  limitar la cantidad máxima de caracteres para el texto ingresado.
- **Validación por expresión regular**: Te permite añadir una expresión regular para validar que el texto ingresado, al crear o modificar una entrada, cumpla con un formato determinado.
- **Único**: Exige que el valor no se repita en otras entradas del mismo tipo. Es la única validación de unicidad de la plataforma, y Texto de una línea es el único campo que la ofrece. Si el valor ya está en uso, la entrada no se guarda y el campo muestra "Debe ser único".

El alcance de **Único** es el tipo completo: la comparación recorre todas las entradas del tipo, incluidas las que están en borrador o programadas y las traducciones a otros idiomas. Quedan fuera las versiones de respaldo y la propia entrada que estás editando, así que volver a publicar una entrada no choca consigo misma. Un campo vacío no se considera repetido.

:::warning Atención
**Único** no tiene efecto sobre un campo que está dentro de un **Grupo**. La casilla se sigue mostrando al configurar el campo, pero la validación no se evalúa y los valores repetidos se guardan sin error. Si necesitas garantizar unicidad, deja el campo fuera del grupo.
:::

### Texto de múltiples líneas

Este campo te permite ingresar texto plano en varias líneas, sin opciones de formato. A diferencia de **Texto de una línea**, que admite hasta 255 caracteres, aquí puedes guardar textos largos. Cuenta con las siguientes restricciones:

- **Largo mínimo**: Permite exigir un mínimo de caracteres para el texto ingresado.
- **Largo máximo**: Permite limitar la cantidad máxima de caracteres para el texto ingresado.
- **Validación por expresión regular**: Te permite añadir una expresión regular para validar que el texto ingresado, al crear o modificar una entrada, cumpla con un formato determinado.

Este campo no ofrece la validación **Único**: la unicidad solo está disponible en [Texto de una línea](#texto-de-una-linea).

:::warning Atención
Desde la versión 10.2, el valor de este campo se entrega escapado como HTML al imprimirlo con Liquid: las etiquetas que hayas escrito aparecen como texto literal en lugar de interpretarse como marcado. Si necesitas publicar HTML desde una entrada, usa un campo [Texto enriquecido](#texto-enriquecido). Revisa las plantillas que venían usando este campo para inyectar HTML.
:::

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

### Opciones múltiples

Este campo te permite elegir uno o más valores desde un buscador que filtra a medida que escribes. El buscador solo ofrece los valores definidos en el tipo: al editar una entrada no puedes proponer un valor nuevo desde el campo. Los valores se administran en **Valores permitidos**, al configurar el campo.

:::warning Atención
Si cargas este campo por la API, envía las etiquetas exactas de los valores permitidos o los identificadores que devuelve la API. Un texto que no coincide con ninguna etiqueta se descarta en silencio: la entrada se guarda sin ese valor y sin mensaje de error. Un identificador numérico que no pertenece al campo, en cambio, impide guardar la entrada.
:::

### Valores permitidos

En los campos de elección (Dropdown, Radio, Checkbox y Opciones múltiples), las opciones se gestionan en la sección **Valores permitidos** del campo: usa **Agregar valor** y **Eliminar valor** para administrarlas, y el selector para marcar el **Valor predeterminado**. Antes de guardar, la interfaz marca las opciones como **Nueva** o **Modificada** para que revises tus cambios.

El **Valor predeterminado** se aplica automáticamente al crear una entrada nueva, y solo cuando el campo aún no trae un valor: no se aplica al editar una entrada que ya existe ni reemplaza lo que hayas cargado.

:::warning Atención
Esa aplicación automática solo alcanza a los campos de elección que están en el primer nivel del tipo. Si marcas un **Valor predeterminado** en un campo de elección que está dentro de un **Grupo**, el valor no se aplica a las entradas nuevas y la interfaz no te lo advierte. Deja el campo fuera del grupo si necesitas ese comportamiento.
:::

Cada valor es un elemento individual del tipo de contenido:

- Al **renombrar un valor**, las entradas que lo tenían seleccionado conservan su selección con el nuevo nombre, en todas sus versiones. El texto nuevo se propaga a las entradas en segundo plano, así que la API pública puede tardar un momento en devolverlo.
- Al **eliminar un valor en uso**, este se archiva: deja de ofrecerse para nuevas selecciones, pero las entradas que ya lo tenían seleccionado lo siguen mostrando, sin pérdida de datos históricos.

:::tip Tip
El nombre de un valor activo no admite saltos de línea ni comenzar con el carácter `*`.
:::

### Booleano

Este campo te permite agregar una pregunta o afirmación (Verdadero/True o Falso/False).

### Entero

Este campo te permite agregar un número entero entre `-2147483648` y `2147483647`. Puedes acotar ese rango con las siguientes restricciones:

- **Valor mínimo**: Rechaza los valores menores al número que indiques.
- **Valor máximo**: Rechaza los valores mayores al número que indiques.

Ambas restricciones acotan el valor del número, no la cantidad de dígitos. Déjalas vacías para no aplicar ese límite. Si el número queda fuera del rango, la entrada no se guarda y el campo muestra "Número inválido. Debe ser mayor o igual que 18" o "Número inválido. Debe ser menor o igual que 120", con los límites que hayas configurado.

### Decimal

Utiliza este campo para ingresar un número con decimales. Admite hasta dos decimales y valores entre `-9999999999999.99` y `9999999999999.99`. Si guardas más de dos decimales, el valor se redondea sin avisarte: `10.567` queda almacenado como `10.57`. Puedes acotar el rango con las siguientes restricciones:

- **Valor mínimo**: Rechaza los valores menores al número que indiques.
- **Valor máximo**: Rechaza los valores mayores al número que indiques.

Ambas restricciones acotan el valor del número, no la cantidad de dígitos, y solo aceptan números enteros: para exigir un monto positivo, por ejemplo, usa `0` como **Valor mínimo**. Si el número queda fuera del rango, la entrada no se guarda y el campo muestra "Número inválido. Debe ser menor o igual que", con el límite que hayas configurado.

### Fecha

Utiliza este campo para agregar un selector de fechas. Limita las fechas seleccionables aplicando las siguientes restricciones:

- **Desde**: Establece la fecha más temprana que se puede elegir.
- **Hasta**: Establece la fecha más tardía que se puede elegir.

### Ubicación

Utiliza este campo para seleccionar una o más direcciones geográficas, según los campos de Google Maps. Un mismo campo Ubicación guarda una lista ordenada de ubicaciones: agrega las que necesites y usa **Eliminar ubicación** para quitar una de la lista. El orden en que las dejes es el que se entrega en la API y en los SDK.

En caso de que no dispongas de una clave de API de Google, puedes ingresar manualmente la **Dirección**, la **Latitud**, la **Longitud** y las divisiones políticas de la ubicación. La **Latitud** acepta valores entre -90 y 90, y la **Longitud** entre -180 y 180; fuera de ese rango la entrada no se guarda. Estas divisiones administrativas no son estándar y varían según cada país. En el caso de Chile, las divisiones son: Región, Provincia, Comuna y Ciudad.

En la API pública y en los SDK, el valor del campo es un arreglo con un objeto por ubicación, y cada objeto trae siempre las mismas ocho claves:

- `location_street`: la dirección escrita en el campo **Dirección**.
- `location`: objeto con las coordenadas `lat` y `lon`.
- `country`: el país de la ubicación.
- `administrative_area_level_1` a `administrative_area_level_5`: los cinco niveles de división administrativa, del mayor al menor. Los niveles que el país no usa llegan sin dato.

:::warning Atención
Para garantizar el correcto funcionamiento de los mapas de ubicación con la clave de API de Google configurada en tu cuenta, la clave tiene que tener permisos para acceder a:

- API de mapas a través de JavaScript
- API de lugares
- API de geocodificación
:::

### Archivo

Este campo te permite adjuntar un solo archivo a la entrada, utilizando el gestor de archivos. Cuenta con la siguiente restricción:

- **Tipos permitidos**: Limita el tipo de archivo que se puede adjuntar. Puedes elegir uno o varios valores entre **Imágenes**, **Vídeo**, **Audio** y **Documentos**; si no eliges ninguno, se acepta cualquier archivo. Si el archivo adjunto es de otro tipo, la entrada no se guarda y el campo muestra "No coincide con los tipos permitidos", seguido de los tipos que configuraste.

La comprobación se hace sobre el tipo con el que el gestor de archivos clasificó el archivo al subirlo, no sobre su extensión.

### Listado de Archivos

Este campo te permite adjuntar múltiples archivos a la entrada, usando el gestor de archivos. Cuenta con la siguiente restricción:

- **Tipos permitidos**: Limita el tipo de los archivos que se pueden adjuntar, con las mismas opciones y el mismo comportamiento que en [Archivo](#archivo). Basta con que uno de los archivos adjuntos sea de otro tipo para que la entrada no se guarde.

### Contenido (enlace a una)

Utiliza este campo para vincular una Entrada a otra Entrada existente y publicada dentro del Espacio. Este campo tiene las siguientes restricciones:

- **Tipos de contenido permitidos**: Limita el enlace a las entradas de un tipo. Pese al plural del nombre, seleccionas un único tipo; el valor por defecto es **Todos**, que no restringe nada. Si la entrada enlazada no es del tipo elegido, la entrada no se guarda y el campo muestra "No calza con los valores permitidos", seguido del nombre del tipo exigido.

### Listado de Contenido (enlace a varias)

Este campo te permite vincular más de una Entrada existente dentro del Espacio a otra Entrada. Este campo tiene las siguientes restricciones:

- **Tipos de contenido permitidos**: Limita los enlaces a las entradas de un tipo. Pese al plural del nombre, seleccionas un único tipo, que aplica a todas las entradas que enlaces; el valor por defecto es **Todos**, que no restringe nada. Si cualquiera de las entradas enlazadas no es del tipo elegido, la entrada no se guarda y el campo muestra "No calza con los valores permitidos", seguido del nombre del tipo exigido.

:::tip Tip
Cada entrada puede enlazar hasta 10 entradas en un mismo campo Listado de Contenido. Si seleccionas más, el panel muestra "Se ha alcanzado el máximo de referencias (10), se excluirán los elementos adicionales" y conserva solo las 10 primeras. Ese tope se define por instalación: si necesitas más referencias, conversa con tu ejecutivo de cuenta en Modyo.
:::

### Grupo

Utiliza el campo Grupo para albergar otro campo dentro él. Puedes asignar un nombre al grupo según tus necesidades, así como nombrar los campos dentro del grupo y usar la **Indicación** de cada uno para orientar a quien completa la entrada. 

Una vez que tengas más de un tipo de campo dentro de un grupo, puedes arrastrarlos y ordenarlos según requieras. 

No hay límite en la cantidad de campos que puedes incluir dentro de un grupo. 

En una entrada, el grupo se comporta como una lista repetible: el mismo conjunto de campos hijos se puede completar varias veces. Para trabajar con las repeticiones:

1. Abre la entrada y ubica el grupo.
2. Haz click en **Añadir un nuevo elemento** para agregar una repetición con los mismos campos.
3. Completa los campos de esa repetición.
4. Arrastra las repeticiones para cambiar su orden.
5. Para borrar una repetición, haz click en su ícono de eliminar y confirma.

El orden en que dejes las repeticiones se conserva y es el que se entrega en la API y en los SDK.

Por eso el valor de un campo Grupo es siempre un arreglo de objetos, incluso cuando tiene una sola repetición: cada objeto trae los campos hijos con el nombre que les diste.

```json
{
  "fields": {
    "my_group": {
      "fields": [
        { "my_field": "Primer elemento" },
        { "my_field": "Segundo elemento" }
      ]
    }
  }
}
```

Desde Liquid, recorre las repeticiones con un ciclo y lee los campos hijos dentro de él. Cada repetición se expone como un objeto [repeatable_group_field](/es/platform/channels/liquid-markup/objects.html#field):

```liquid
{% for item in entry["my_group"] %}
  {{ item["my_field"] }}
{% endfor %}
```

Puedes validar el contenido de los campos de la siguiente forma: 

- **Requerido**: Marca la casilla **Requerido** para obligar a que se complete el grupo o campo.
  - Si marcas el grupo como requerido, al menos un elemento dentro del grupo deberá ser completado. 
  - Si marcas un elemento como requerido, ese elemento tiene que tener contenido.
- **Único**: No aplica dentro de un grupo. La casilla aparece al configurar un campo de [Texto de una línea](#texto-de-una-linea) que esté dentro del grupo, pero la validación no se evalúa y los valores repetidos se guardan sin error.

:::tip Tip
Un grupo puede albergar cualquier tipo de campo, menos otro grupo. 
:::


## Guardar los cambios de un tipo

Los cambios que haces en un tipo (añadir, renombrar, reordenar o eliminar campos) solo se aplican cuando haces click en **Guardar**.

:::warning Atención
Si el tipo ya tiene entradas, al guardar el panel te pide confirmar con el mensaje "Actualizar el tipo de contenido reindexará todas las entradas y afectará todo el contenido publicado de este tipo. Ten en cuenta que este proceso puede tomar un tiempo y mientras tanto, las entradas de este tipo no reflejarán los cambios hasta que el proceso de reindexación termine.". Mientras ese proceso está en curso, el botón muestra "Reindexando..." y no puedes volver a guardar el tipo: al pasar el cursor sobre él verás "Hay un proceso de reindexación activo para este tipo de contenido. Puedes guardar cuando termine.".
:::

## Propiedades

En la pestaña **Configuración** del panel derecho puedes revisar y editar los datos generales del tipo:

- **Nombre**: El nombre con el que aparece el tipo en el listado.
- **Identificador**: El UID del tipo. Es importante, ya que se utiliza para referirse al tipo desde los SDK de Liquid, JavaScript y la API.
- **Descripción**: Texto libre de hasta 4.095 caracteres. Úsalo para dejar documentado, para el resto del equipo, cuál es el propósito de este tipo.
- **Cardinalidad**: Cambia entre **Múltiple** e **Individual**. No puedes cambiarla a **Individual** si el tipo ya tiene más de una entrada.

En el menú de acciones del encabezado del editor del tipo encontrarás además una opción que puede estar en 2 estados:

- **Reindexar este contenido**: Te permite volver a indexar el modelo en caso de problemas con la API pública.
- **Cancelar reindexación**: Si hay una reindexación en curso, puedes cancelar el proceso haciendo click en este botón. 

:::warning Atención
Al reindexar uno de tus tipos, el modelo previamente indexado seguirá disponible hasta que se complete la nueva indexación. Una vez finalizada la reindexación, el antiguo índice se sobrescribirá con el nuevo índice.
:::

:::warning Atención
Ten en cuenta que, según la configuración de caché entre tu navegador y la plataforma, es posible que no veas los cambios inmediatamente después de haber terminado la reindexación.
:::

## Clonar un tipo

Clonar un tipo crea, dentro del mismo espacio, una copia con todos sus campos y sus validaciones. Es útil para partir de una estructura ya probada sin rehacerla campo por campo. Para clonar un tipo:

1. Desde el menú principal, haz click en **Contenido**.
2. Selecciona el espacio donde está el tipo.
3. Haz click en **Tipos**.
4. En la columna **Acciones** de la fila del tipo, haz click en **Clonar**.
5. En la ventana **Clonar tipo**, confirma haciendo click en **Clonar tipo**.

El clon toma el nombre del original precedido de "Copia de" y el identificador precedido de "copia-de-". Si ya existe un tipo con ese nombre o identificador, se le añade un número al final para no repetirlo. Solo se copia la estructura: las entradas del tipo original no se duplican.

:::tip Tip
El clonado se ejecuta en segundo plano y puede tardar: mientras se completa, la ventana muestra "Esto demorará un tiempo, el tipo está siendo clonado.". Al terminar verás "Tipo clonado correctamente" y el nuevo tipo aparecerá en el listado.
:::
