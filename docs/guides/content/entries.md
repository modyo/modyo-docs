---
search: true
---

# Entradas

## Sobre la interfaz

A primera vista, podrás ver una lista que contendrá todos los contenidos que están dentro de la plataforma, generados por todos los usuarios.

La lista está ordenada por fecha de actualización del contenido. En este caso, hace referencia a la fecha de creación o de la última vez que fue guardada la entrada respectiva.

Las columnas por las cuales se puede ordenar la lista de entradas son:

- **Estado**: Estado en que se encuentra en el proceso de publicación del contenido. En este caso, los estados son cuatro: Borrador, Publicado, Programado y Archivado.
- **Nombre**: Nombre del contenido.
- **Tipo**: Tipo del Contenido (Ver [Tipos](/guides/content/types.html)).
- **Actualizado**: Fecha de la última actualización guardada del contenido.
- **Autor**: Nombre del autor del contenido.

En el administrador también podrás filtrar la vista según varios filtros predeterminados que podrás ir ajustando según tu necesidad, independiente de cómo ordenes la lista de tus contenidos.

En este caso, los filtros son cinco:

- **Tipo**: Tipo del Contenido que se ha creado (Ver [Tipos](/guides/content/types.html))
- **Estado**: Estado en que se encuentra en el proceso de publicación del contenido. En este caso, los estados son cuatro: Borrador, Publicado, Programado y Archivado.
- **Categoría**: Categoría a la que se encuentra asignadas las entradas.
- **Idioma**: Idioma en que se encuentra escrito el contenido.
- **Traducción**: Este filtro está asociado al idioma seleccionado y filtra por el estado de traducción de las entradas para dicho idioma. Ej: Esto quiere decir que si una entrada no tiene una versión en el idioma seleccionado, está caerá en "No traducida".
- **Tags**: Tags disponibles en la cuenta. Puedes ocupar la barra de búsqueda interior del filtro para los tags de una manera más simple.
- **Barra de búsqueda**: Filtra por el contenido del titulo de las entradas.

## Crear una Entrada

Para crear una entrada, se debe hacer click en el botón de la parte superior derecha de la pantalla. Así, antes de crearla, Modyo pedirá el tipo de entrada que deseas crear, para organizar el formato a presentar, el cuál se puede crear en la sección [Tipos](/guides/content/types.html).

Al hacer click en Crear, la entrada se creara y serás redirigido a la edición de la misma donde podrás rellenar con el contenido que quieras, está contendrá la estructura definida en el tipo de contenido que seleccionaste.

::: tip Tip
Para traducir una entrada ya escrita a un idioma distinto, solo deberás hacer click en el idioma actual y seleccionar el idioma en el que quieres escribirlo. Así, llegarás a una versión de la entrada en blanco, donde podrás pulsar el botón **Copiar desde idioma** para traer el contenido de otra versión de la entrada y poder traducirla de manera más fácil.
:::

### Publicar una Entrada

Para publicar una entrada, Modyo te asegura un proceso de chequeo paulatino con tal de certificar que el contenido que vayas a ofrecer se encuentre correcto.

Al terminar el desarrollo de tu entrada, en la parte superior de la pantalla encontrarás el botón **Guardar**, que grabará todo tu contenido. 

Si haces click en este, el botón experimentará dos cambios. Si es que tienes permisos de Administrador del Espacio, podrás publicar automáticamente. Si es que no tienes esos permisos, no puedes publicar el recurso, sino que otro usuario con un rol superior a ti, puede hacerlo.

Sin embargo, si se encuentra la opción de Revisión en Equipo, pasará al proceso de chequeo por parte de otros usuarios, donde podrás asignar a revisores en específico quienes podrán publicar. 

Para saber más, puedes ver [Revisión en Equipo.](/guides/platform/team-review.html)


### Despublicar una entrada

Para despublicar una entrada, debes acceder al ella y hacer click en el botón Despublicar que se encuentra en la parte superior de la pantalla. Con esto, el recurso volverá a la categoría de Borrador y no se encontrará en la categoría de Publicados.

Si quieres republicar la entrada, esta volverá a pasar por el proceso de Revisión en Equipo, por lo que si haces un cambio, se volverá a guardar y el usuario con un rol superior deberá aprobarla para ser publicada correctamente.

### Categorías

Las Categorías son una de las formas más útiles de Modyo para ordenar tus Entradas. En este caso, cada vez que se use una Categoría, se genera una ruta en la web que nos permite acceder al recurso sin tener que pasar por otras webs, en el caso de que este se encuentre de manera pública.

Para ver las Categorías, es necesario que hagamos click en la sección Categorías, que se encuentra a un costado izquierdo de la interfaz de entrada. Ahí, podremos ver todas las categorías que se encuentran ya hechas. 

#### Crear una Categoría

Si queremos crear una, solo debemos hacer click en el botón verde que se encuentra en la parte superior de la pantalla. Después, podremos ver una ventana que nos pedirá ingresar el nombre de la Categoría, la Ruta y si esta poseé a una Categoría Padre.

::: tip Tip
Cuando se ingrese el nombre de la categoría, la ruta se establecerá predeterminádamente como un slug. Si queremos cambiarla, solo basta con hacer click en ella.

Si cambiamos la ruta, recuerda cambiar todos los vínculos a ella, si es que se encuentran en un sitio web.
:::

::: warning Atención
Si se quiere eliminar una categoría, simplemente basta con hacer click en el ícono que se encuentra al final del nombre de esta. Sin embargo, si hay Entradas asignadas a esa categoría, no se borrarán sino que no estarán a asignadas a ninguna categoría. Para volver a asignarles alguna categoría, es necesario realizar la asignación nuevamente.
:::

::: danger Peligro
Si se borra la Categoría Padre, se borrarán también todas las subcategorías asignadas a esta. Y las entradas asociadas a dichas categorías quedaran sin categoría asignada.
:::

### Slug

Si quieres hacer un link mucho más amigable a cualquier microservicio que quieras conectar, puedes escribir un slug simple que te permita hacer más fácil el trabajo en la URL.

Cuando crees una entrada, la plataforma te asignará un slug de manera aleatoria. Sin embargo, para cambiarla solo tienes que cambiar el campo en la ventana de propiedades.

Este valor debe ser único para las entradas del mismo tipo. En caso de que se guarden dos entradas con el mismo slug, este será modificado al momento de publicar la entrada.

## Contenido Privado

Si deseas que el contenido sea exclusivo para usuarios que tengan una sesión en la plataforma se debe habilitar está opción.

Dependiendo de como estés consumiendo el contenido, necesitarás realizar unos pasos extras para acceder a este. Si estás usando la API pública, dirígete a la sección sobre [contenido privado en la API](/guides/content/public-api-reference.html#contenido-privado). Si estás consumiendo el contenido a través de Liquid, basta con que los usuarios inicien sesión en el sitio para poder visualizar el contenido privado.

### Targets

El contenido targetizado es fundamental para cualquier entidad o empresa que quiera hacer llegar una información en específico a un grupo de usuario.

Para ello, es posible habilitar en la Entrada que el contenido sea visible para un grupo determinado que nosotros elijamos. Para ello, solo basta con hacer check en la opción de que el Contenido sea privado y luego en que se desea habilitar targetización y después seleccionar a qué target de usuarios al que se dirigirá la entrada.

Para crear un target en específico, revisa la sección [Targets](/guides/customers/targets.html).





