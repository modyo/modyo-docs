---
search: true
---

# Revisión en Equipo

## Introducción

La Revisión en Equipo (o Team Review) es una herramienta que permite controlar el proceso de publicación de elementos en Modyo. Al activarla, cada elemento debe pasar por etapas de revisión antes de habilitar su publicación. 

De esta manera, se agrega un nivel de supervisión y colaboración entre el editor de contenidos y un equipo de revisores.

### Función

Cuando un editor o un desarrollador considera que el elemento en el que está trabajando se encuentra listo, puede enviarlo a revisión.

Esta tarea puede ser realizada por usuarios habilitados por defecto o por un equipo escogido por el editor.

Ellos serán los responsables de aprobar o rechazar el elemento, y determinará finalmente si ya está en condiciones de ser publicado.

Cada paso de este proceso lleva al elemento por distintos estados, que quedan registrados en un historial para su posterior auditoría.

[Imagen de etapas de revisión]
 
Esta herramienta está disponible tanto para Channels (sitios) como para Content (espacios). 

La configuración de reglas de revisión se realiza de manera independiente para cada sitio o espacio.

### Configuración

Para configurar la herramienta, debes dirigirte a `Configuración del sitio/espacio > Revisión en equipo`.

<img src="/assets/img/platform/teamreviewsettings.jpg" width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

Las opciones disponibles son:

- **Habilitar revisión en equipo**: Activa o desactiva por completo la revisión en equipo en este contexto (sitio o espacio).
- **Número de aprobaciones**: Determina cuántos usuarios deben aprobar el elemento para que esté en condiciones de ser publicado (cambiará su estado de "Esperando revisión" a "Aprobado").
- **Restringir la selección de revisores**: Por defecto, cualquier usuario con los permisos necesarios podrá aprobar los elementos que están esperando revisión. 

Habilitando esta opción, sólo aquellos escogidos por el editor podrán hacerlo.
:::tip Tip
Si bien la aprobación se encuentra limitada, cualquier usuario con permisos puede hacer comentarios sobre el elemento.
:::
- **Forzar revisión**: Esta opción permite seleccionar una lista de usuarios, de los cuales se requiere al menos una aprobación para que el elemento pueda pasar al estado "Aprobado". 

Esto es independiente del número de aprobaciones configurado anteriormente, es decir, aunque un elemento tenga la cantidad de aprobaciones necesarias, seguirá en estado "Esperando aprobación" si ningún usuario de la lista lo ha aprobado.

- **Requerir todos**: Esta opción extiende la restricción anterior a todos los usuarios seleccionados.

:::warning Atención
Cuando haces cambios en la configuración de revisión en equipo, los elementos que ya estaban esperando revisión seguirán rigiéndose por las reglas anteriores a los cambios. 

Para que esos elementos tomen en cuenta la nueva configuración, es necesario que sean rechazados y enviados a revisión nuevamente.
:::

### Roles y permisos

Existen tres niveles de roles que permiten a los usuarios realizar distintas acciones en el proceso de revisión:

- Alto: Administrador (sitio o espacio)
- Medio: Revisor (sitio) o Editor (espacio)
- Bajo: Desarrollador (sitio) o Escritor (espacio)

Los usuarios con el rol más bajo, pueden enviar a revisión y comentar los elementos que se encuentran en ese estado.

Los usuarios con el rol intermedio, además de lo anterior, pueden aprobar los elementos en revisión y una vez que estos estén aprobados, pueden publicarlos mediante el flujo de revisión en equipo.

Los usuarios con el nivel más alto, además de realizar todo lo anterior, pueden saltarse el flujo de revisión y hacer uso de la acción "Forzar publicación" para publicar inmediatamente un elemento.

::: warning Atención
Los administradores de sitio o espacio siempre tienen la posibilidad de saltarse el flujo de revisión en equipo. 

Para ellos, los botones "Enviar a revisión" y "Revisar" tienen una opción dentro del dropdown para "Forzar publicación". 

Esta opción existe porque hay ocasiones en las que es necesario publicar rápidamente, por lo que debes ser cauteloso cuando asignas los roles para tus espacios o sitios.
:::

### Sobre la interfaz

Cuando está activada la opción de revisión en equipo, y luego de guardar los cambios, verás como acción principal el botón verde **Enviar a revisión**.

<img src="/assets/img/platform/send-to-review-bar.jpg" width="350px" style=" border: 1px solid #EEE;" />

Al momento de enviar a revisión la barra cambiará de estado:

<img src="/assets/img/platform/missing-conditions-team-review.jpg" width="350px" style="border: 1px solid #EEE;" />

Al hacer _click_, verás que en la sección lateral derecha se indicarán los requerimientos para publicar el elemento. 

En caso de existir algún revisor requerido, aparecerá `(requerido)` junto a su nombre en el listado de revisores.

<img src="/assets/img/platform/box-reviewers.jpg" width="500px" style="border: 1px solid #EEE;" />

A la derecha de cada revisor, aparecerá el estado de su revisión, mostrando un círculo amarillo si no ha hecho su revisión, y un check verde en caso de haber aprobado el elemento.

Todos quienes puedan acceder a la vista de edición del elemento, verán un botón **Aprobar** bajo el listado de revisores. 

Quienes tengan el permiso necesario, lo verán activo y podrán hacerle _click_ para aprobar el elemento. Los que no tengan permiso, verán el botón deshabilitado.

Al aprobar el elemento, quedará registrada la aprobación de ese usuario, mostrando un check verde a la derecha de su nombre en el listado de revisores.

Cuando se habilita la revisión en equipo, en la barra de acciones del elemento, a la izquierda del botón principal de color verde y a la derecha del botón de diferencias, aparecerá un ícono ( <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29H12m1-6v3.08L16.08 17H21V7H7v10h6M3 15H1V3a2 2 0 0 1 2-2h16v2H3v12m6-6h10v2H9V9m0 4h8v2H9v-2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg> ) para abrir la pestaña de actividad del elemento. 

Al abrirla, se desplegará un listado cronológico de las acciones que se han efectuado sobre el elemento, con la opción para ver el detalle de la acción, y al fondo de la pestaña, estará la opción para dejar un comentario.

Cuando se deja un comentario o se ejecuta alguna acción sobre el elemento, se envía una notificación tanto a quien envió a revisión como a los usuarios que están en la lista de revisores.

## Versionado

Como mecanismo de respaldo, al momento de publicar un elemento, **Modyo** genera y mantiene automáticamente un número de versiones que posteriormente pueden ser recuperadas en caso de ser necesario.

Esto es útil cuando por alguna razón se realiza un cambio indebido, existe la posibilidad de revertirlo a través de la plataforma.

Este sistema está disponible para Widgets, Pages, Navegación, Templates y Contenido.

### Versiones de los recursos

#### Editable

La versión Editable mantiene los cambios hechos en el elemento desde su última publicación o su creación si nunca ha sido publicado. 

Esta versión es la que pasa por el proceso de revisión en equipo cuando está activada, y justo en el momento de la publicación, las versiones "Editable" y "Publicada" poseen el mismo contenido.

#### Publicado

Esta versión guarda el contenido visible en el sitio y es de libre disponibilidad para cualquier usuario. 

En este caso, recursos internos como Widgets y Templates ya se pueden usar en la creación de cualquier sitio o página.

La versión publicada no necesariamente tiene el mismo contenido que la editable (excepto en el momento justo de la publicación), ya que puede contener cambios que estén en proceso de prueba o revisión.

### Respaldos

Los respaldos son versiones previamente publicadas de los elementos. Es decir, cada vez que publicamos un elemento, Modyo guarda la versión publicada anteriormente como un respaldo.

Si deseas revisar alguna versión en particular de un elemento, puedes ir a las "Diferencias entre versiones", y así poder ver los cambios que se han realizado y revertirlos cuando sea necesario.

::: warning Atención
Por defecto, Modyo guarda las últimas 20 versiones (`MAX_BACKUPS`) publicadas de cada elemento, por lo que al hacer la vigésimoprimera publicación, estarás borrando el respaldo de la primera publicación del elemento. 

Este valor se puede modificar mediante variables de entorno y es común para todas las cuentas de este.
:::

### Acciones para el versionado

Dentro del versionado tienes dos acciones que te permiten interactuar con los respaldos. Ambas acciones están disponibles en el modal de diferencias.

![Modal de diferencias](/assets/img/platform/differences.png)

Por defecto el modal de diferencias muestra la versión publicada a la izquierda, y la versión editable a la derecha. 

Puedes cambiar qué versiones comparar, cambiando los valores en los selectores de versiones en la parte superior del modal. 

Cuando se aplica alguna de las acciones, siempre se toma la versión seleccionada a la izquierda, de tal forma que si se reestablece, se llevará la versión de la izquierda a la versión editable, y si se hace rollback, se llevará la versión de la izquierda a la versión publicada.

#### Reestablecer

En este caso, el respaldo se copiará a la versión editable, por lo que perderemos todos los cambios que se hicieron posteriormente, y así podremos seguir trabajando en potenciales cambios a esa versión para volverla a publicar.

#### Rollback

En este caso, el respaldo se copiará directamente a la versión publicada del elemento, sin tocar la versión editable.

 Esto es útil cuando se publicó algo por error, y es necesario volver a alguna de las versiones estables rápidamente, mientras se sigue trabajando en resolver los problemas que la versión con errores pudo haber tenido.

::: danger Peligro
Dado que esta es una acción potencialmente peligrosa, sólo los administradores de sitios o espacios tienen el permiso para poder ejecutar esta acción.
:::

## Locks

Locks es una funcionalidad de Modyo que permite modificar un recurso de manera segura, sin tener problemas de concurrencia que puedan ocurrir cuando otro usuario esté trabajando en él simultáneamente, evitando de esta forma la pérdida de trabajo o la sobreescritura de documentos.

<img src="/assets/img/platform/locks.jpg" style="border: 1px solid #EEE;" />

### ¿Qué elementos usan Locks?

Locks se usa mayoritariamente en [Contenidos](/guides/content/) y en [Channels](/guides/channels/), pero también puede ser usado en otras secciones donde se editan elementos como Configuraciones y [Customers](/guides/customers/).

### ¿Cómo usar Locks?

Locks se implementa de distintas maneras dentro de la plataforma. En [Contenidos](/guides/content/) y [Channels](/guides/channels/), múltiples usuarios pueden entrar a un recurso, siendo sólo uno el que podrá editar y guardar esos cambios, mientras que los demás sólo verán la última versión guardada en la plataforma. 

Si una segunda persona intenta hacer un cambio, le aparecerá un mensaje indicando que el elemento ya tiene cambios y que lo que está intentando modificar está obsoleto.

En otras secciones como [Customers](/guides/customers/) y Configuración, Locks no permitirá la visión simultánea del recurso, por lo que si éste se encuentra en edición, otro usuario no podrá ingresar a la vista de trabajo.

En este caso, sólo un Administrador podrá tomar el control, activando para sí mismo la edición y descartándose los avances no guardados del usuario que se encuentra trabajando en él.


::: warning Tomar el control

Si un Administrador quiere tomar el control de una vista, deberá hacer _click_ en el elemento en uso y en la pantalla siguiente, hacer _click_ en el botón **Tomar Control**.

<img src="/assets/img/platform/lock-forms.jpg" style="border: 1px solid #EEE;" />

Cuando el Administrador tome el control, el usuario que esté usando el recurso recibirá un mensaje en el que se le impedirá seguir haciendo cambios, por lo que cualquier cambio que se esté realizando, deberá ser guardado y respaldado offline.

Tras tomar el control, el Administrador sólo tendrá dos horas para hacer cambios sin guardar. Pasado ese tiempo, el recurso volverá a liberarse y podrá ser tomado por cualquier otro usuario.
:::
