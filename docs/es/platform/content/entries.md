---
search: true
---

# Entradas

Las Entradas son la manera de desplegar contenido creado en Espacios para todos tus sitios. Estas Entradas se pueden ver desde Sitios creado en Modyo Platform, en el módulo de Channels, o en sitios externos, utilizando nuestra API.

Entradas es una parte de Modyo Content, el módulo encargado de la creación de repositorios de contenidos dinámicos que llamamos Espacios. En un Espacio, las entradas son separadas por Tipos de Contenido. El Tipo define la estructura básica con sus requerimientos y validaciones para que una Entrada pueda ser publicada.

Además, si se utilizan los módulos de Channels y Customers, se pueden crear sitios con la habilidad de segmentar entradas para solo mostrar estas si pertenecen a un segmento de tus usuarios en el sitio.

## Sobre la interfaz

A primera vista, puedes ver una lista que contendrá todos los contenidos que están dentro de la plataforma, generados por todos los usuarios.

La lista está ordenada por fecha de actualización del contenido. En este caso, hace referencia a la fecha de creación o de la última vez que fue guardada la entrada respectiva.

Las columnas por las cuales se puede ordenar la lista de entradas son:

- **Estado**: Estado en que se encuentra en el proceso de publicación del contenido. En este caso, los estados son cuatro: Borrador, Publicado, Programado y Archivado.
- **Nombre**: Nombre del contenido.
- **Tipo**: Tipo del Contenido (Ver [Tipos](/es/platform/content/types.html)).
- **Actualizado**: Fecha de la última actualización guardada del contenido.
- **Autor**: Nombre del autor del contenido.

En el administrador también puedes filtrar la vista según varios filtros predeterminados que puedes ir ajustando según tu necesidad, independiente de cómo ordenes la lista de tus contenidos.

En este caso, los filtros son seis:

- **Tipo**: Tipo del Contenido que se ha creado (Ver [Tipos](/es/platform/content/types.html))
- **Estado**: Estado en que se encuentra en el proceso de publicación del contenido. En este caso, los estados son cuatro: Borrador, Publicado, Programado y Archivado.
- **Categoría**: Categoría a la que se encuentra asignadas las entradas.
- **Idioma**: Idioma en que se encuentra escrito el contenido.
- **Traducción**: Este filtro está asociado al idioma seleccionado y filtra por el estado de traducción de las entradas para dicho idioma. Ej: Esto quiere decir que si una entrada no tiene una versión en el idioma seleccionado, está caerá en "No traducida".
- **Tags**: Tags disponibles en la cuenta. Puedes ocupar la barra de búsqueda interior del filtro para los tags de una manera más simple.
- **Barra de búsqueda**: Filtra por el contenido del titulo de las entradas.

## Acciones masivas

Al seleccionar entradas con el _checkbox_ a la izquierda de cada entrada, podrás usar las acciones masivas que aparecen al final de la lista.

- **Editar masivamente**: Entrarás en el la interfaz que te permite modificar múltiples entradas a la vez.
- **Publicar**: Se publicarán las entradas seleccionadas que tengan cambios pendientes o estén en estado Borrador.
- **Forzar publicación**: Si está la revisión en equipo habilitada, los administradores del espacio podrán usar esta acción para forzar la publicación de las entradas que tengan cambios pendientes o estén en estado Borrador sin necesidad de pasar por el proceso de revisión.
- **Despublicar**: Se despublicarán las entradas seleccionadas que estén publicadas.
- **Archivar**: Se archivarán las entradas seleccionadas que estén despublicadas.

:::warning Atención
- La publicación en masa solo será efectiva en las entradas seleccionadas que tengan cambios pendientes.
- Despublicar en masa solo tendrá efecto en las entradas seleccionadas que tengan una versión publicada.
- Archivar en masa solo tendrá efecto en las entradas seleccionadas que no estén publicadas.

De tal forma que si intentas archivar una entrada que esté publicada, esta acción será omitida y no tendrá efecto.
:::

:::tip Tip
Las acciones masivas se ejecutan en segundo plano y es posible que no veas los cambios inmediatamente, por lo que recomendamos esperar un momento y refrescar la vista luego de ejecutar una acción masiva.
:::

## Editar masivamente

:::warning Atención
Esta opción sólo está disponible si tienes el index de entradas filtradas por un tipo particular y además tienes entradas seleccionadas para las acciones masivas.

Si seleccionas múltiples entradas, pero no estás usando el filtro por tipo de la tabla, no verás esta opción.
:::

Al seleccionar entradas de un mismo tipo, verás esta opción en las acciones masivas abajo a la izquierda de la tabla. Al hacer click en ella, entrarás en una nueva vista que te permitirá seleccionar los campos que quieres sobreescribir de las entradas seleccionadas. Una vez checkeado el selector de la izquierda de cada campo, podrás ingresar el valor asociado al campo.

Puedes hacer cambios en todos los campos del tipo. Una vez que hayas terminado de añadir valores en los campos que necesites, presiona "Siguiente" en la parte superior de la pantalla para ver el resumen de tus cambios. Si estás de acuerdo con los cambios, presiona "confirmar" para que Modyo comience a aplicar los cambios en todas las entradas seleccionadas

:::warning Atención
Al usar la edición masiva de entradas estás sobreescribiendo los valores para los campos seleccionados en todas las entradas seleccionadas, por lo que los valores que existían antes de la edición conjunta ya no estarán disponibles en la versión editable.

Si necesitas recuperar un valor específico de una entrada, puedes hacer uso de la opción "Diferencias" en la vista de edición de entradas para revisar los valores previos que tenía una entrada en particular.
:::

Una vez que Modyo haya terminado de modificar los campos para las entradas seleccionadas, notarás que todas las entradas ahora están con cambios pendientes y debes publicarlas. Para esto, puedes hacer uso de la acción masiva "Publicar".

## Crear y Publicar una Entrada

Para crear una entrada, sigue estos pasos:

1. En el menú lateral de la Plataforma Modyo, selecciona **Content** y haz click en **Espacios**.
2. Selecciona tu **Espacio**.
3. Haz click en **+ Nueva Entrada**.
4. Selecciona el **Tipo de contenido**, **Nombre**, e **Identificador**. Haz click en **Crear**.
Al hacer click en **Crear**, la entrada se creará y serás redirigido a la edición de la misma donde puedes rellenar con el contenido que quieras, está contendrá la estructura definida en el tipo de contenido que seleccionaste.
5. Haz click en **Guardar** y después haz click en **Publicar**.

En primera instancia, **Modyo** pide el nombre, el slug, y tipo de entrada que deseas crear, para organizar el formato a presentar, el cuál se puede crear en [Tipos](/es/platform/content/types.html).

:::warning Atención
Si el campo de nombre queda vacío, la plataforma pondrá por defecto el UUID de la entrada como slug.
:::

## Traducir una Entrada

Modyo Platform te permite agregar diferentes idiomas en tus Espacios y crear Entradas para ellos. Para traducir una entrada existente a un idioma distinto, debes asegurarte que el idioma haya sido agregado a la sección de Localización en la configuración del Espacio. 

Para traducir una entrada, sigue estos pasos:

1. Desde Modyo Platform, en el menú lateral, expande **Content**, y haz click en **Espacios**.
1. Haz click en tu **Espacio**.
1. Expande **Configuración del Espacio** y haz click en **Localización**.
1. Selecciona el idioma que quieres agregar y haz click en **Añadir Idioma**.
1. Haz click en **Guardar**.
1. En el menú lateral, haz click en **Entradas**.
1. Selecciona la entrada que quieres traducir y selecciona el idioma.
1. Haz click en el botón de más acciones (...) y selecciona **Copiar desde idioma**.

Para más información acerca de como agregar otro idioma, ve [Configurar un Espacio](/es/platform/content/spaces.html#localizacion).

### Publicar una Entrada

Para publicar una entrada, Modyo te asegura un proceso de chequeo paulatino con tal de certificar que el contenido que vayas a ofrecer se encuentre correcto.

Al terminar el desarrollo de tu entrada, en la parte superior de la pantalla encontrarás el botón **Guardar**, que grabará todo tu contenido.

Si haces click en este, el botón experimentará dos cambios. Si es que tienes permisos de Administrador del Espacio, puedes publicar automáticamente. Si es que no tienes esos permisos, no puedes publicar el recurso, sino que otro usuario con un rol superior a ti, puede hacerlo.

Sin embargo, si se encuentra la opción de Revisión en Equipo, pasará al proceso de chequeo por parte de otros usuarios, donde puedes asignar a revisores en específico quienes pueden publicar.

Para saber más acerca de Revisión en Equipo, puedes ver [Revisión en Equipo.](/es/platform/core/key-concepts.html)


### Despublicar una entrada

Despublicar una entrada o una parte de un sitio te permite pasar a estado de Borrador y será  oculto del público. En el caso que Revisión de Equipo esté activado, tendrá que pasar por el flujo de revisión de nuevo al ser publicado.

Para despublicar contenido, sigue estos pasos:

1. En Modyo Platform, en el menú lateral, haz click en Channels y selecciona Espacios.
1. Haz click en tu Espacio.
1. En el menú de Entradas, selecciona tu Entrada.
1. Expande el menú de Acciones Masivas y haz click en Despublicar.

<img src="/assets/img/content/despublicar.jpg" alt="Unpublish entries using bulk actions" style="margin: 40px auto; width: 500px; display: block;">


### Eliminar entradas

Modyo solo permite eliminar entradas que están archivadas. Para realizar esta acción entra a la vista de edición de la entrada y en las opciones adicionales usa la opción "Borrar" del selector a la izquierda del botón principal de la vista.

#### Vista Previa

Como plataforma headless, Modyo permite hacer una vista previa de un entrada en múltiples sitios.

Si ya cuentas con [vistas de contenido en tus sitios](/es/platform/channels/templates.html#vistas-para-contenido), puedes ver el botón **Vista Previa en Sitio**, en el que seleccionas dónde quieres ver cómo se está desarrollando tu recurso.

:::danger Atención
Si el Espacio no se encuentra asociado a un sitio, sólo puedes ver el código JSON de la entrada que estás desarrollando.
:::

:::warning Atención
Solo podrás previsualizar en el sitio los contenidos que son de un idioma igual al idioma del sitio. Si la entrada está en otro idioma, al llegar a la vista previa te encontrarás con un error 404.
:::

:::warning Atención
Puedes previsualizar el contenido como usuario sin sesión o usuario con sesión de Modyo. Para esto, es recomendable iniciar o cerrar la sesión de Modyo en el sitio antes de entrar al modo vista previa, dado que si se inicia o cierra sesión dentro del modo vista previa, podrías encontrarte con errores de seguridad del tipo _x-frame-options_ o _mixed-content_, dependiendo de la configuración de dominios personalizados y SSL del sitio
:::

#### Editar una entrada

Si deseas editar una entrada, solo debes hacer click en el nombre dentro del administrador.

Después de esto, entras a la vista de edición en la que puedes cambiar el contenido y las propiedades de esta, como el nombre, el slug y los tags.

En el caso de que la entrada se encuentre publicada, los cambios se harán automáticamente. Si esta se encuentra en proceso de Revisión en Equipo, los revisores deberán actualizar su vista para poder notar los cambios.

## Categorías

Las Categorías son una de las formas más útiles de Modyo para ordenar tus Entradas. En este caso, cada vez que se use una Categoría, se genera una ruta en la URL que permite acceder al recurso, en el caso de que este se encuentre publicado.

Para ver las Categorías, es necesario que hagas click en la sección **Categorías**, que se encuentra a un costado izquierdo de la interfaz de entrada. Ahí, puedes ver todas las categorías que se encuentran ya hechas.

#### Crear una Categoría

Si quieres crear una categoría, solo debes hacer click en el botón verde que se encuentra en la parte superior de la pantalla. Después, puedes ver una ventana que pedirá ingresar el nombre de ella, la Ruta y si esta posee a una Categoría Padre.

Para las entradas de estas categorías, se añade el identificador como un prefijo a la URL de la entrada. Por ejemplo:

Una entrada con URL: test.modyo.com/visita-chile y categoría ‘travel’, ahora sería test.modyo.com/travel/visita-chile.

:::tip Tip
Cuando se ingrese el nombre de la categoría, la ruta se establece predeterminadamente como un slug. Si quieres cambiarla, solo basta con hacer click en ella.

Si cambias la ruta, recuerda también cambiar todos los vínculos a ella, si es que se encuentran en un sitio web.
:::

:::warning Atención
Si se quiere eliminar una categoría, simplemente basta con hacer click en el ícono que se encuentra al final del nombre de esta. Sin embargo, si hay Entradas asignadas a esa categoría, no se borran sino que no están a asignadas a ninguna categoría. Para volver a asignarles alguna categoría, es necesario realizar la asignación nuevamente.
:::

:::danger Peligro
Si se borra la Categoría Padre, se borran también todas las subcategorías asignadas a esta. Y las entradas asociadas a dichas categorías quedan sin categoría asignada.
:::

### Tags

Los tags te permiten agregar más granularidad a tus Entradas al combinarlo con Liquid en tus páginas de contenido. Al crear Entradas, se puede agregar un tag que aparece tanto en el código fuente como en nuestra API de contenido para que puedas agregar funcionalidad específica a este tag.

<img src="/assets/img/tutorials/how-to-create-custom-view/preview_site.png" alt="The JSON information that appears when you click the preview site button."/>

Por ejemplo, si está entrada es una entrada destacada, se puede agregar un tag ‘featured’ y agregar funcionalidad a través del módulo Channels.

### Slug

Si quieres hacer un link mucho más amigable a cualquier microservicio que quieras conectar, puedes escribir un slug simple que te permita hacer más fácil el trabajo en la URL.

Cuando crees una entrada, la plataforma te asigna un slug de manera aleatoria. Sin embargo, para cambiarla solo tienes que cambiar el campo en la ventana de propiedades.

Este valor debe ser único para las entradas del mismo tipo. En caso de que se guarden dos entradas con el mismo slug, este será modificado al momento de publicar la entrada.

### Contenido Privado

Si deseas que el contenido sea exclusivo para usuarios que tengan una sesión en la plataforma se debe habilitar está opción.

Dependiendo de como estés consumiendo el contenido, necesitas realizar unos pasos extras para acceder a este. Si estás usando la API pública, dirígete a la sección sobre [contenido privado en la API](/es/platform/content/public-api-reference.html#contenido-privado). Si estás consumiendo el contenido a través de Liquid, basta con que los usuarios inicien sesión en el sitio para poder visualizar el contenido privado.

### Segmentos

El contenido segmentado es fundamental para cualquier entidad o empresa que quiera hacer llegar una información en específico a un grupo de usuario.

Para ello, es posible habilitar en la Entrada que el contenido sea visible para un grupo determinado que elijas. Para ello, solo basta con hacer check en la opción de que el Contenido sea privado y luego en que se desea habilitar segmentación y después seleccionar a qué segmento de usuarios al que se dirige la entrada.

Para crear un segmento en específico, revisa la [sección Segmentos](/es/platform/customers/segments.html).

## Consumir externamente

Accesa el contenido creado en el módulo de Content desde cualquier parte usando nuestra API. 

Sigue estos pasos para obtener el uuid de una entrada:

1. En la Plataforma Modyo, en el menú principal, selecciona **Content** y haz click en **Espacios**.
1. Selecciona tu **Espacio**.
1. Haz click en **Vista Previa**.
1. Haz click en **Link de la API**.

Te llevará a una nueva página en donde se usa la API para obtener el contenido de la entrada. El resultado será similar a esto:

URL: `https://test.modyo.com/api/content/spaces/test-space/types/nuevo/entries/45fa2ef7-bf12-47a3-8ff7-f7d1f5f36844`

```json
{
  "meta":
  {
    "name": "MiNuevaEntrada",
    "slug": "minuevaentrada",
    "tags": [],
    "type": "nuevoTipo",
    "uuid": "45fa2ef7-bf12-47a3-8ff7-f7d1f5f36844",
    "space": "test-space",
    "author":
    {},
    "locale": "es-cl",
    "private": false,
    "targets": [],
    "category": "mycategory",
    "created_at": "2022-02-24T12:44:24.000-03:00",
    "updated_at": "2022-02-25T10:06:46.000-03:00",
    "published_at": "2022-02-25T10:06:46.000-03:00",
    "version_type": "current",
    "category_name": "MyCategory",
    "category_slug": "mycategory",
    "unpublished_at": null,
    "available_locales": ["es-cl"]
  },
  "fields":
  {
    "My items": "..."
  }
}
```

Para saber más acerca de nuestra API y las diferentes acciones que puedes realizar, ve [API de administración](/es/platform/core/api).