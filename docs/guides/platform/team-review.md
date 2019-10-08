---
search: true
---

# Team review

## Introducción

La revisión en equipo (o Team Review) es una herramienta que te permite controlar de forma colaborativa los elementos que son publicados en Modyo. Esta herramienta se puede activar tanto a nivel de sitio, como a nivel de espacio, permitiéndote usar distintas configuraciones y niveles de restricción, dependiendo de lo estricto que quieras ser en cada caso. 

Para activar la herramienta, debes dirigirte a la configuración del sitio o espacio, y hacer click en la opción "Revisión en equipo", seleccionar la primera opción "Habilitar revisión en equipo" y luego guardar los cambios. 

Una vez activada la revisión en equipo, notarás que cuando guardas los cambios en los elementos que se pueden publicar en ese contexto, en vez de aparecer el botón "Publicar" aparecerá un botón "Enviar a revisión". Al enviar a revisión un elemento, quedará en un estado en el que se puede seguir modificando, pero además, podrás asignar revisores, quienes podrán rechazar, aprobar y hacer comentarios en el elemento. 

Bajo el estado "En revisión", cada acción que se haga sobre el elemento, gatillará una notificación a todos los involucrados en el proceso de revisión (quién lo envió a revisión y todos los revisores asignados), de tal forma de mantener al tanto sobre los cambios y comentarios del elemento. 

Una vez que se cumplen los requisitos para que el elemento sea publicado, automáticamente cambia al estado "aprobado", estado en el cual quienes tengan los permisos necesarios, podrán publicar el elemento.

### Configuración

Dentro de la configuración de la revisión en equipo, encontrarás distintas opciones:

- **Habilitar revisión en equipo**: Es la opción que habilita o deshabilita por completo la revisión en equipo en ese contexto (sitio o espacio)
- **Número de aprobaciones**: Determina cuántos son las aprobaciones (checks) necesarias para que un elemento pase automáticamente de "Esperando revisión" a "Aprobado", de tal manera que seleccionando 3, se requerirá que 3 personas con permisos den su aprobación para que ese elemento pueda ser publicado.
:::tip
 Por defecto, cualquier usuario que tenga los permisos necesarios, podrá aprobar y comentar en los elementos que están esperando revisión. Cuando un usuario que no está asignado como revisor aprueba un elemento, automáticamente se convierte en revisor del elemento. 
:::
- **Restringir la selección de revisores**: Esta opción evita que cualquier usuario con permisos pueda aprobar el elemento, limitando la selección y adición de revisores a quien envía el elemento a revisión.
:::tip
Aunque la selección de revisores esté limitada a quien envía a revisión, todos los usuarios con permisos podrán seguir haciendo comentarios en el elemento que está en revisión, pero no podrán aprobar el elemento.
:::
- **Forzar revisión**: Esta opción habilita un selector de usuarios que permite forzar la adición de ciertos revisores a los elementos del contexto, de tal forma que en cada revisión, todos los usuarios asociados a la fuerza serán notificados de los comentarios y cambios del elemento.
:::tip
Aunque se cumpla la primera restricción con la cantidad de aprobaciones, si ninguno de los usuarios forzados a revisar ha dado su aprobación, entonces el elemento no pasará a estado "aprobado", por lo que no podrá ser publicado.
:::
- **Requerir todos**: Esta opción obliga a que como mínimo, todos los usuarios que estén añadidos como revisores forzados tengan que dar su aprobación para que el elemento pase a estado "aprobado" para luego ser publicado.

:::warning
Recuerda hacer click en el botón "Guardar" arriba a la derecha cada vez que hagas cambios en la configuración de la revisión en equipo, de lo contrario, los cambios no surtirán efecto.
:::

:::warning
Cuando haces cambios en la configuración de la revisión en equipo, los elementos que ya estaban esperando revisión seguirán rigiéndose por las reglas anteriores a los cambios. Para que esos elementos tomen en cuenta la nueva configuración de la revisión en equipo, es necesario que sean rechazados y se vuelvan a enviar a revisión.
:::

### Roles y permisos

Existen tres niveles de permisos en los contextos en que se puede habilitar la revisión en equipo:

- Alto (Administrador de sitio y espacio)
- Medio (Revisor en sitios y Editor en espacio)
- Bajo (Developer en sitios y Escritor en espacios)

Los usuarios con el rol más bajo, aparte de los permisos asociados al contexto, pueden enviar a revisión, rechazar y comentas los elementos en revisión.

Los usuarios con el rol intermedio, además de lo anterior, pueden aprobar los elementos en revisión y una vez que estos estén aprobados, pueden publicarlos mediante el flujo de revisión en equipo.

Los usuarios con el nivel de permisos alto, además de poder hacer el resto de las acciones, pueden saltarse el flujo de revisión y hacer uso de la acción "Forzar publicación" para publicar inmediatamente un elemento.

:::warning
Los administradores de sitio o espacio siempre tienen la posibilidad de saltarse el flujo de revisión en equipo. Para ellos, los botones "Enviar a revisión" y "Revisar" tienen una opción dentro del dropdown para "Forzar publicación". Esta opción existe porque hay ocasiones en las que es necesario publicar rápidamente, por lo que debes ser cauteloso cuando asignas los roles para tus espacios o sitios.
:::

### Sobre la interfaz

Cuando está activada la opción de revisión en equipo, luego de guardar los cambios, verás como acción principal, el botón verde "Enviar a revisión". Al hacerle click, verás que sobre la sección lateral derecha del builder, aparecerá una sección nueva, indicando los requerimientos necesarios para poder publicar el elemento. En caso de tener algún revisor requerido, aparecerá `(requerido)` junto a su nombre en el listado de revisores.

A la derecha de cada revisor, aparecerá el estado de su revisión, mostrando un círculo amarillo si no ha hecho su revisión, y un check verde en caso de haber aprobado el elemento.

Todos quienes puedan acceder a la vista de edición del elemento, verán un botón "Aprobar" bajo el listado de revisores, quienes tengan permiso para hacerlo, lo verán activo y podrán hacerle click para aprobar el elemento, quienes no tengan permiso, verán el botón deshabilitado.

Al aprobar el elemento, quedará registrada la aprobación por ese usuario, mostrando un check verde a la derecha de su nombre en el listado de revisores.

Cuando se habilita la revisión en equipo, en la barra de acciones del elemento, a la izquierda del botón principal de color verde y a la derecha del botón de diferencias, aparecerá un ícono ( <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 23a1 1 0 01-1-1v-3H7a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-4.1l-3.7 3.71a1 1 0 01-.7.29H12zm1-6v3.08L16.08 17H21V7H7v10h6zM3 15H1V3a2 2 0 012-2h16v2H3v12zm6-6h10v2H9V9zm0 4h8v2H9v-2z" fill="#626262"/></svg> ) para abrir la pestaña de actividad del elemento. Al abrirla, se desplegará un listado cronológico de las acciones que se han efectuado sobre el elemento, con la opción para ver el detalle de la acción, y al fondo de la pestaña, estará la opción para dejar un mensaje.

Cuando se deja un mensaje o comentario en un elemento, quien envió a revisión y todos los usuarios que están en el listado de revisores serán notificados sobre el comentario y/o modificación del elemento.


## Versionado

El Versionado es una manera automática de Modyo de asegurarse el respaldo de los recursos ante cualquier cambio hecho desde la misma web.

En palabras simples, si por error se llega a hacer un cambio indebido, es posible revertirlo a través de la plataforma.

Este sistema está disponible para ser usado en Widgets, Sitios, Pages, Templates y Contenido.

### Versiones de los recursos

#### Editable

Cuando un recurso está en proceso de creación, queda en estado de "Editable", con tal de poder hacer modificaciones y confirmar que aún no se encuentra listo para su revisión y publicación.

Además, se le pueden hacer aún cambios que permitan hacer vistas previas antes de ser liberados a otros usuarios.

#### Publicado

El recurso publicado es aquel que ya se encuentra en uso y es de libre disponibilidad para cualquier usuario. En este caso, recursos internos como Widgets y Templates ya se pueden usar dentro de la creación de cualquier sitio o página.

Los recursos publicados no necesariamente tienen el mismo código que los editables, ya que estos últimos pueden contener cambios que estén en proceso de prueba o de vista previa.

### Respaldos

Los respaldos son los archivos en los que se ha trabajado anteriormente. Cada vez que guardamos un archivo que hemos modificado, Modyo guarda esta versión modificada del archivo sin borrar la anterior.

Si deseas revisar alguna versión en particular de algún recurso, puedes ir a las "Diferencias entre versiones" de cada archivo, y así poder ver los cambios que se han realizado y revertirlos cuando sea necesario.

### Acciones para el versionado

Para hacer el versionado, uno consta de dos posibilidades que nos permiten determinar si queremos hacer cambios posteriores a un recurso o subirlas inmediatamente.

#### Reestablecer

En este caso, el recurso volverá a la versión editable, por lo que perderemos todos los cambios que se hicieron posteriormente.

Además, esto implica que podremos volver a hacer cambios, ya que el código estará liberado para cualquier edición.

#### Rollback

El Rollback es muy útil para hacer un cambio rápidamente a recursos que ya se encuentran publicados.

Por lo mismo, solo debemos ir a las "Diferencias entre versiones" y volver a la versión que teníamos seleccionada.

Así se evita tener que pasar por una versión editable y sin publicar aún. Esto implica que no se podrán hacer cambios breves y pasará directamente a estar disponible por otros usuarios.

## Locks

Locks es una función de Modyo que permite la funcionalidad de revisar un recurso de manera segura, sin tener fallas de que otro usuario esté trabajando en él simultánteamente, evitando la pérdida de trabajo o la sobreescritura de documentos.

### ¿Qué usa Locks?

Locks se usa mayoritariamente en Contenidos y en Channels. También puede ser usado en la edición de código de Sitios y Widgets.

### ¿Cómo usar Locks?

Locks es una función reservada solo para quienes tienen permiso de Administración. Otro tipo de usuario no podrá tomar control del recurso hasta que el usuario creador grabe y lo desocupe.

Al intentar entrar al recurso en uso, cualquier usuario que no sea Administrador, recibirá un mensaje que le impedirá acceder al contenido.

### Tomar el control de un recurso

Si un Administrador quiere tomar el control del contenido, deberá hacer clic en el archivo en uso y en la pantalla siguiente, hacer clic en el botón de Tomar Control.

Cuando el Administrador tome el control, el usuario que esté usando el recurso recibirá un mensaje en el que se le impedirá seguir haciendo más cambios, por lo que cualquier cambio que se esté realizando, deberá ser guardado y respaldado offline.

El Administrador solo tendrá dos horas para hacer cambios sin guardar, tras tomar el control. Pasado ese tiempo, el recurso volverá a liberarse y podrá ser tomado por cualquier otro usuario.
