---
search: true
---

# Entradas

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

## Crear una Entrada

Para crear una entrada, se debe hacer _click_ en el botón de la parte superior derecha de la pantalla.

En primera instancia, **Modyo** pide el nombre, el slug y tipo de entrada que deseas crear, para organizar el formato a presentar, el cuál se puede crear en la [sección Tipos](/es/platform/content/types.html).

:::warning Atención
Si el campo de nombre queda vacío, la plataforma pondrá por defecto el UUID de la entrada como slug.
:::

Al hacer _click_ en **Crear**, la entrada se creará y serás redirigido a la edición de la misma donde puedes rellenar con el contenido que quieras, está contendrá la estructura definida en el tipo de contenido que seleccionaste.

::: tip Tip
Para traducir una entrada ya escrita a un idioma distinto, deberás tener en cuenta que tu espacio debe estar configurado para los idiomas en los que quieres escribir. (Revisa [Configurar un Espacio](/es/platform/content/spaces.html#configurar-un-espacio))

Después, solo deberás hacer _click_ en el idioma actual y seleccionar el idioma en el que quieres escribirlo.

Así, llegarás a una versión de la entrada en blanco, donde puedes pulsar el botón **Copiar desde idioma** para traer el contenido de otra versión de la entrada y poder traducirla de manera más fácil.
:::

### Publicar una Entrada

Para publicar una entrada, Modyo te asegura un proceso de chequeo paulatino con tal de certificar que el contenido que vayas a ofrecer se encuentre correcto.

Al terminar el desarrollo de tu entrada, en la parte superior de la pantalla encontrarás el botón **Guardar**, que grabará todo tu contenido.

Si haces _click_ en este, el botón experimentará dos cambios. Si es que tienes permisos de Administrador del Espacio, puedes publicar automáticamente. Si es que no tienes esos permisos, no puedes publicar el recurso, sino que otro usuario con un rol superior a ti, puede hacerlo.

Sin embargo, si se encuentra la opción de Revisión en Equipo, pasará al proceso de chequeo por parte de otros usuarios, donde puedes asignar a revisores en específico quienes pueden publicar.

Para saber más, puedes ver [Revisión en Equipo.](/es/platform/core/key-concepts.html)


### Despublicar una entrada

Para despublicar una entrada, debes acceder al ella y hacer _click_ en el botón **Despublicar** que se encuentra en la parte superior de la pantalla. Con esto, el recurso volverá al estado de Borrador y no se encontrará en estado Publicado.

Si quieres republicar la entrada, esta volverá a pasar por el proceso de Revisión en Equipo, por lo que si haces un cambio, se volverá a guardar y el usuario con un rol superior deberá aprobarla para ser publicada correctamente.

### Eliminar entradas

Modyo solo permite eliminar entradas que están archivadas. Para realizar esta acción entra a la vista de edición de la entrada y en las opciones adicionales usa la opción "Borrar" del selector a la izquierda del botón principal de la vista.

#### Vista Previa

Como plataforma headless, Modyo permite hacer una vista previa de un entrada en múltiples sitios.

Si ya cuentas con [vistas de contenido en tus sitios](/es/platform/channels/templates.html#vistas-para-contenido), puedes ver el botón **Vista Previa en Sitio**, en el que seleccionas dónde quieres ver cómo se está desarrollando tu recurso.

::: danger Atención
Si el Espacio no se encuentra asociado a un sitio, sólo puedes ver el código JSON de la entrada que estás desarrollando.
:::

:::warning Atención
Solo podrás previsualizar en el sitio los contenidos que son de un idioma igual al idioma del sitio. Si la entrada está en otro idioma, al llegar a la vista previa te encontrarás con un error 404.
:::

:::warning Atención
Puedes previsualizar el contenido como usuario sin sesión o usuario con sesión de Modyo. Para esto, es recomendable iniciar o cerrar la sesión de Modyo en el sitio antes de entrar al modo vista previa, dado que si se inicia o cierra sesión dentro del modo vista previa, podrías encontrarte con errores de seguridad del tipo _x-fame-options_ o _mixed-content_, dependiendo de la configuración de dominios personalizados y SSL del sitio
:::

#### Editar una entrada

Si deseas editar una entrada, solo debes hacer _click_ en el nombre dentro del administrador.

Después de esto, entras a la vista de edición en la que puedes cambiar el contenido y las propiedades de esta, como el nombre, el slug y los tags.

En el caso de que la entrada se encuentre publicada, los cambios se harán automáticamente. Si esta se encuentra en proceso de Revisión en Equipo, los revisores deberán actualizar su vista para poder notar los cambios.

### Categorías

Las Categorías son una de las formas más útiles de Modyo para ordenar tus Entradas. En este caso, cada vez que se use una Categoría, se genera una ruta en la web que permite acceder al recurso sin tener que pasar por otras webs, en el caso de que este se encuentre de manera pública.

Para ver las Categorías, es necesario que hagas _click_ en la sección **Categorías**, que se encuentra a un costado izquierdo de la interfaz de entrada. Ahí, puedes ver todas las categorías que se encuentran ya hechas.

#### Crear una Categoría

Si quieres crear una categoría, solo debes hacer _click_ en el botón verde que se encuentra en la parte superior de la pantalla. Después, puedes ver una ventana que pedirá ingresar el nombre de ella, la Ruta y si esta posee a una Categoría Padre.

::: tip Tip
Cuando se ingrese el nombre de la categoría, la ruta se establece predeterminadamente como un slug. Si quieres cambiarla, solo basta con hacer _click_ en ella.

Si cambias la ruta, recuerda también cambiar todos los vínculos a ella, si es que se encuentran en un sitio web.
:::

::: warning Atención
Si se quiere eliminar una categoría, simplemente basta con hacer _click_ en el ícono que se encuentra al final del nombre de esta. Sin embargo, si hay Entradas asignadas a esa categoría, no se borran sino que no están a asignadas a ninguna categoría. Para volver a asignarles alguna categoría, es necesario realizar la asignación nuevamente.
:::

::: danger Peligro
Si se borra la Categoría Padre, se borran también todas las subcategorías asignadas a esta. Y las entradas asociadas a dichas categorías quedan sin categoría asignada.
:::

### Slug

Si quieres hacer un link mucho más amigable a cualquier microservicio que quieras conectar, puedes escribir un slug simple que te permita hacer más fácil el trabajo en la URL.

Cuando crees una entrada, la plataforma te asigna un slug de manera aleatoria. Sin embargo, para cambiarla solo tienes que cambiar el campo en la ventana de propiedades.

Este valor debe ser único para las entradas del mismo tipo. En caso de que se guarden dos entradas con el mismo slug, este será modificado al momento de publicar la entrada.

## Contenido Privado

Si deseas que el contenido sea exclusivo para usuarios que tengan una sesión en la plataforma se debe habilitar está opción.

Dependiendo de como estés consumiendo el contenido, necesitas realizar unos pasos extras para acceder a este. Si estás usando la API pública, dirígete a la sección sobre [contenido privado en la API](/es/platform/content/public-api-reference.html#contenido-privado). Si estás consumiendo el contenido a través de Liquid, basta con que los usuarios inicien sesión en el sitio para poder visualizar el contenido privado.

### Targets

El contenido targetizado es fundamental para cualquier entidad o empresa que quiera hacer llegar una información en específico a un grupo de usuario.

Para ello, es posible habilitar en la Entrada que el contenido sea visible para un grupo determinado que elijas. Para ello, solo basta con hacer check en la opción de que el Contenido sea privado y luego en que se desea habilitar targetización y después seleccionar a qué target de usuarios al que se dirige la entrada.

Para crear un target en específico, revisa la [sección Targets](/es/platform/customers/targets.html).
