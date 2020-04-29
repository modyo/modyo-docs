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
- **Tipo**: Tipo del Contenido (Ver [Tipos](/platform/content/types.html)).
- **Actualizado**: Fecha de la última actualización guardada del contenido.
- **Autor**: Nombre del autor del contenido.

En el administrador también puedes filtrar la vista según varios filtros predeterminados que puedes ir ajustando según tu necesidad, independiente de cómo ordenes la lista de tus contenidos.

En este caso, los filtros son cinco:

- **Tipo**: Tipo del Contenido que se ha creado (Ver [Tipos](/platform/content/types.html))
- **Estado**: Estado en que se encuentra en el proceso de publicación del contenido. En este caso, los estados son cuatro: Borrador, Publicado, Programado y Archivado.
- **Categoría**: Categoría a la que se encuentra asignadas las entradas.
- **Idioma**: Idioma en que se encuentra escrito el contenido.
- **Traducción**: Este filtro está asociado al idioma seleccionado y filtra por el estado de traducción de las entradas para dicho idioma. Ej: Esto quiere decir que si una entrada no tiene una versión en el idioma seleccionado, está caerá en "No traducida".
- **Tags**: Tags disponibles en la cuenta. Puedes ocupar la barra de búsqueda interior del filtro para los tags de una manera más simple.
- **Barra de búsqueda**: Filtra por el contenido del titulo de las entradas.

## Crear una Entrada

Para crear una entrada, se debe hacer _click_ en el botón de la parte superior derecha de la pantalla. 

En primera instancia, **Modyo** pide el nombre, el slug y tipo de entrada que deseas crear, para organizar el formato a presentar, el cuál se puede crear en la [sección Tipos](/platform/content/types.html).

:::warning Atención
Si el campo de nombre queda vacío, la plataforma pondrá por defecto el UUID de la entrada como slug.
:::

Al hacer _click_ en **Crear**, la entrada se creará y serás redirigido a la edición de la misma donde puedes rellenar con el contenido que quieras, está contendrá la estructura definida en el tipo de contenido que seleccionaste.

::: tip Tip
Para traducir una entrada ya escrita a un idioma distinto, deberás tener en cuenta que tu espacio debe estar configurado para los idiomas en los que quieres escribir. (Revisa [Configurar un Espacio](/platform/content/spaces.html#configurar-un-espacio))

Después, solo deberás hacer _click_ en el idioma actual y seleccionar el idioma en el que quieres escribirlo. 

Así, llegarás a una versión de la entrada en blanco, donde puedes pulsar el botón **Copiar desde idioma** para traer el contenido de otra versión de la entrada y poder traducirla de manera más fácil.

:::

### Publicar una Entrada

Para publicar una entrada, Modyo te asegura un proceso de chequeo paulatino con tal de certificar que el contenido que vayas a ofrecer se encuentre correcto.

Al terminar el desarrollo de tu entrada, en la parte superior de la pantalla encontrarás el botón **Guardar**, que grabará todo tu contenido. 

Si haces _click_ en este, el botón experimentará dos cambios. Si es que tienes permisos de Administrador del Espacio, puedes publicar automáticamente. Si es que no tienes esos permisos, no puedes publicar el recurso, sino que otro usuario con un rol superior a ti, puede hacerlo.

Sin embargo, si se encuentra la opción de Revisión en Equipo, pasará al proceso de chequeo por parte de otros usuarios, donde puedes asignar a revisores en específico quienes pueden publicar. 

Para saber más, puedes ver [Revisión en Equipo.](/platform/core/team-review.html)


### Despublicar una entrada

Para despublicar una entrada, debes acceder al ella y hacer _click_ en el botón **Despublicar** que se encuentra en la parte superior de la pantalla. Con esto, el recurso volverá al estado de Borrador y no se encontrará en estado Publicado.

Si quieres republicar la entrada, esta volverá a pasar por el proceso de Revisión en Equipo, por lo que si haces un cambio, se volverá a guardar y el usuario con un rol superior deberá aprobarla para ser publicada correctamente.

::: tip Tip
La plataforma no permite eliminar Entradas. Solo puedes publicar y despublicar. Todas las copias y sus cambios se verán dentro del Administrador de Entradas.
:::

#### Vista Previa

Como plataforma headless, Modyo permite hacer una vista previa de un entrada en múltiples sitios a la vez.

Si ya se encuentra asociado a un sitio asociado, puedes ver el botón **Vista Previa en Sitio**, en el que seleccionas dónde quieres ver cómo se está desarrollando tu recurso.

Para asociar un Espacio a un Sitio, debes ir a [Configuración de Sitios](/platform/channels/sites.html#configuracion-de-un-sitio).

::: danger Atención

Si el Espacio no se encuentra asociado a un sitio, sólo puedes ver el código JSON de la entrada que estás desarrollando.
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

Dependiendo de como estés consumiendo el contenido, necesitas realizar unos pasos extras para acceder a este. Si estás usando la API pública, dirígete a la sección sobre [contenido privado en la API](/platform/content/public-api-reference.html#contenido-privado). Si estás consumiendo el contenido a través de Liquid, basta con que los usuarios inicien sesión en el sitio para poder visualizar el contenido privado.

### Targets

El contenido targetizado es fundamental para cualquier entidad o empresa que quiera hacer llegar una información en específico a un grupo de usuario.

Para ello, es posible habilitar en la Entrada que el contenido sea visible para un grupo determinado que elijas. Para ello, solo basta con hacer check en la opción de que el Contenido sea privado y luego en que se desea habilitar targetización y después seleccionar a qué target de usuarios al que se dirige la entrada.

Para crear un target en específico, revisa la [sección Targets](/platform/customers/targets.html).





