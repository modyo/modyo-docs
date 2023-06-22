---
search: true
---

# Conceptos clave

## Revisión en Equipo

La Revisión en Equipo (o Team Review) es una herramienta que permite controlar el proceso de publicación de contenidos en Modyo. Al activarla, cada elemento debe pasar por etapas de revisión antes de habilitar su publicación.

La Revisión en Equipo añade un nivel de supervisión y colaboración entre el editor de contenidos y un equipo de revisores. Esta herramienta se configura de forma individual para cada Sitio y Espacio.


### Función

Cuando un editor o un desarrollador considera que el elemento en el que está trabajando está listo, puede enviarlo a revisión.

Esta tarea puede ser realizada por usuarios habilitados por defecto o por un equipo seleccionado por el editor.

Estos revisores son los responsables de aprobar o rechazar el elemento, y determinan si está listo para su publicación.

Cada paso de este proceso lleva al elemento a través de distintos estados, que quedan registrados en un historial para su posterior auditoría.

<img src="/assets/img/platform/core/team-review.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

### Configuración

Para activar la revisión de equipo, sigue estos pasos:

1. Desde el menú lateral en Modyo Platform, selecciona un espacio o sitio.
2. Expande **Configuración del espacio/sitio** y selecciona **Revisión en Equipo**.
3. Haz click en **Habilita la revisión en equipo**.

<img src="/assets/img/platform/teamreviewsettings.jpg" width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

Las opciones disponibles son:

- **Habilitar revisión en equipo**: Activa o desactiva por completo la revisión en equipo en este contexto (sitio o espacio).
- **Número de aprobaciones**: Determina la cantidad de usuarios que deben aprobar el elemento para que esté listo para su publicación. Cuando se alcanza el número requerido de aprobaciones, el estado del elemento cambiará de "Esperando revisión" a "Aprobado".
- **Restringir la selección de revisores**:  Por defecto, cualquier usuario con los permisos necesarios puede aprobar elementos en espera de revisión. Sin embargo, al habilitar esta opción, solo los revisores seleccionados por el editor podrán llevar a cabo la aprobación.

:::tip Tip
Si bien la aprobación se encuentra limitada, cualquier usuario con permisos puede hacer comentarios sobre el elemento.
:::

- **Forzar revisión**: Esta opción te permite seleccionar una lista de usuarios, de los cuales se requiere al menos una aprobación para que el elemento pueda cambiar a estado "Aprobado". Esto es independiente del número de aprobaciones configurado anteriormente. Incluso si un elemento tiene la cantidad de aprobaciones necesarias, permanecerá en estado "Esperando aprobación" si ningún usuario de la lista lo ha aprobado.

- **Requerir todos**: Esta opción extiende la restricción anterior a todos los usuarios seleccionados. En este caso, se requerirá la aprobación de todos los usuarios de la lista para que el elemento pueda cambiar a estado "Aprobado".

:::warning Atención
Cuando haces cambios en la configuración de revisión en equipo, los elementos que ya estaban esperando revisión seguirán rigiéndose por las reglas anteriores a los cambios.

Para que esos elementos se ajusten a la nueva configuración, es necesario que sean rechazados y enviados a revisión nuevamente.
:::

### Roles y permisos

Existen tres niveles de roles que permiten a los usuarios realizar distintas acciones en el proceso de revisión:

- Alto: Administrador (sitio o espacio)
- Medio: Revisor (sitio) o Editor (espacio)
- Bajo: Desarrollador (sitio) o Escritor (espacio)

Los usuarios con el rol más bajo pueden enviar a revisión y comentar los elementos que se encuentran en ese estado.

Los usuarios con el rol intermedio, además de lo anterior, pueden aprobar los elementos en revisión y una vez que estos estén aprobados, pueden publicarlos mediante el flujo de revisión en equipo.

Los usuarios con el nivel más alto, además de realizar todas las acciones anteriores, pueden omitir el flujo de revisión y utilizar la acción "Forzar aprobación" para publicar un elemento sin cumplir con las restricciones de la revisión en equipo.

:::warning Atención
Los administradores de sitio o espacio siempre tienen la posibilidad de saltarse el flujo de revisión en equipo.

Para ellos, los botones "Enviar a revisión" y "Revisar" tienen una opción en el menú desplegable llamada "Forzar aprobación", que les permite ver el elemento en la vista de publicación.

Esta opción existe porque hay ocasiones en las que es necesario publicar rápidamente, por lo que debes ser cauteloso cuando asignas los roles para tus espacios o sitios.
:::
### Mis Tareas

La sección Mis tareas en Modyo te da una visión general de todos los elementos que requieren tu atención. Te permite acceder a información sobre el tipo de elemento, su autor y cuándo fue actualizado por última vez.
Una vez que un elemento ha sido marcado para revisión, el usuario asignado puede revisarlo y aprobarlo en la sección My Tasks. 

Para ver y revisar todas las tareas asignadas a ti, sigue estos pasos:
1. Ve a Inicio.
2. Haz click en Mis tareas.
3. Selecciona el elemento que deseas revisar.

### Sobre la interfaz

Cuando se activa la opción de revisión en equipo y se guardan los cambios, se muestra el botón verde principal **Enviar a revisión**.

<img src="/assets/img/platform/send-to-review-bar.jpg" width="350px" style=" border: 1px solid #EEE;" />

Al enviar a revisión, la barra cambia de estado para indicar si faltan condiciones o si no se tiene permiso suficiente.

Al hacer click, en la sección lateral derecha se indicarán los requerimientos para publicar el elemento.

Si se requiere la revisión de algún revisor, aparecerá `(requerido)` junto a su nombre en el listado de revisores.

<img src="/assets/img/platform/box-reviewers.jpg" width="500px" style="border: 1px solid #EEE;" />

A la derecha de cada revisor, está el estado de su revisión. Se muestra un círculo amarillo si no ha hecho su revisión, y un check verde en caso de haber aprobado el elemento.

Todos los usuarios que tienen acceso a la vista de edición del elemento verán un botón **Aprobar** debajo del listado de revisores.

Los usuarios con los permisos necesarios pueden hacer click en el botón **Aprobar** para aprobar el elemento. Aquellos que no tienen los permisos ven el botón deshabilitado.

Al aprobar el elemento, la aprobación de ese usuario queda registrada y se muestra un check verde junto a su nombre en el listado de revisores.

l habilitar la revisión en equipo, en la barra de acciones del elemento, a la izquierda del botón principal de color verde y a la derecha del botón de diferencias, aparece un ícono ( <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29H12m1-6v3.08L16.08 17H21V7H7v10h6M3 15H1V3a2 2 0 0 1 2-2h16v2H3v12m6-6h10v2H9V9m0 4h8v2H9v-2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg> ) para abrir la pestaña de actividad del elemento.

Al abrir esta pestaña, se muestra una lista cronológica de las acciones realizadas en el elemento, con la opción de ver los detalles de cada acción. Al final de la pestaña, está la opción de dejar un comentario.

Cuando se deja un comentario o se ejecuta alguna acción sobre el elemento, se envía una notificación tanto a quien envió a revisión como a los usuarios que están en la lista de revisores.

## Revisión y Publicación Conjunta

<img src="/assets/img/platform/core/review-joint-publication.png" width="800px" style="border: 1px solid #EEE;" alt="Modal de diferencias"/>

En la pantalla de revisión y publicación conjunta puedes ver todos los cambios pendientes por publicar en tu sitio. Tienes la opción de ver qué cambio al hacer click en el botón **Ver**. 

### Publicar en conjunto

Para hacer una publicación en conjunto en tu sitio, sigue estos pasos:

1. En el menú principal de Modyo Platform, expande **Channels**, y haz click en **Sitios**.
1. Haz click en tu sitio. 
1. En la pantalla de Resumen, haz click en **Publicar**.
1. Aquí podrás ver todos los cambios pendientes. Selecciona todo lo que quieres publicar y haz click en **Publicar**.

:::tip Tip
Si haces clic en Publicar en un artículo en particular (por ejemplo, publicar una página), se abrirá la ventana de Revisar y Publicar con ese artículo seleccionado para ver los cambios pendientes.
:::


## Versionado

Como mecanismo de respaldo, al momento de publicar un elemento, Modyo genera y mantiene automáticamente un número de versiones que posteriormente pueden ser recuperadas en caso de ser necesario.

Este sistema está disponible para Widgets, Pages, Navigation, Plantillas y Espacios.

### Versiones de los recursos

#### Editable

La versión Editable conserva los cambios realizados en el elemento desde su última publicación o desde su creación si nunca ha sido publicado.
Esta versión es la que pasa por el proceso de revisión en equipo cuando está activado. En el momento de la publicación, las versiones "Editable" y "Publicada" contienen el mismo contenido.

#### Publicado

Esta versión guarda el contenido visible en el sitio y está disponible para todos los usuarios.
En este estado, los recursos internos como Widgets y Plantillas ya pueden utilizarse en la creación de cualquier sitio o página.
La versión publicada no necesariamente tiene el mismo contenido que la versión editable, excepto en el momento exacto de la publicación, ya que puede contener cambios que aún estén en proceso de prueba o revisión.

#### Respaldos

Los respaldos son versiones previamente publicadas de los elementos. Cada vez que se publica un elemento, Modyo guarda la versión previamente publicada como un respaldo.


Si deseas revisar una versión específica de un elemento, puedes acceder a las "Diferencias entre versiones" para ver los cambios realizados y revertirlos si es necesario.

:::warning Atención
Por defecto, Modyo guarda las últimas 20 versiones `(MAX_BACKUPS)` publicadas de cada elemento, por lo que al hacer la vigesimoprimera publicación, estarás borrando el respaldo de la primera publicación del elemento.

Este valor se puede modificar mediante variables de entorno y es aplicable para todas las cuentas de este.
:::

#### Programado

Cuando programas una publicación, la versión editable pasa a un estado programado. Cuando llega el momento de la publicación, esa versión programada toma el lugar de la versión que está publicada en ese momento. De esta forma, puedes programar un cambio en el futuro en los elementos, y seguir trabajando en la versión editable.

:::warning Atención
Modyo solo permite tener una versión programada de cada elemento. Si programas una segunda modificación al elemento, sobreescribes la programación anterior.
:::

Además de la programación de la publicación, también puedes programar la despublicación. Llegado el momento, la versión que está publicada pasará a ser un respaldo, dejando el elemento en cuestión sin una versión publicada.

:::warning Atención
Cuando se ejecutan las acciones programadas, Modyo puede tardar unos minutos en completarlas. Modyo te enviará una notificación por correo electrónico cuando la acción se haya completado.
:::

Hay elementos (home, navegación, y plantillas) que no pueden ser despublicados. Si se programa una despublicación en conjunto con otros elementos, no tendrá efecto sobre estos elementos en específico.

#### Aprobado

Este estado aparece cuando se habilita la revisión en equipo y significa que un elemento en este estado está listo para ser publicado. Cualquier cambio que se le haga a un elemento en este estado, llevará al elemento a un estado editable y deberá pasar nuevamente por el proceso de revisión para poder ser publicado.

## Revertir un Cambio

Dentro del versionado hay dos acciones que te permiten interactuar con los respaldos: resetear y rollback. Por defecto, el modal de diferencias muestra la versión publicada a la izquierda, y la versión editable a la derecha.

Puedes cambiar qué versiones comparar, cambiando los valores en los selectores de versiones en la parte superior del modal.

<img src="/assets/img/platform/differences.jpg" width="800px" style="border: 1px solid #EEE;" alt="Modal de diferencias"/>

Sigue estos pasos para revertir a una versión publicada en una Entrada:

1. Desde Modyo Platform, expande Content y selecciona Espacios.
1. Selecciona tu Espacio y después haz click en la Entrada que quieres versionar.
1. Haz click en **Diferencias**.
1. En el modal que aparece, selecciona la versión que quieras hacer rollback y después haz click en **Rollback a esta versión**.

Cuando se aplica alguna de las acciones, siempre se toma la versión seleccionada a la izquierda, de tal forma que si se resetea, se llevará la versión de la izquierda a la versión editable, y si se hace rollback, se llevará la versión de la izquierda a la versión publicada.

:::tip Tip
El versionado se puede realizar en los siguientes módulos:
- En Content: las **Entradas**.
- En Channels: las **Páginas**, **Navigation**, **Plantillas**, y **Widgets**.
:::

#### Resetear

En este caso, el respaldo toma el lugar de la versión editable, por lo que se perderán todos los cambios existentes, y así podrás seguir trabajando en cambios potenciales a esa versión para volverla a publicar.

#### Rollback

En este caso, el respaldo se regresa directamente a la versión **publicada** del elemento, sin tocar la versión editable.

Esto es útil cuando se publicó algo por error y es necesario volver a alguna de las versiones estables.  Permitiendo el resolver los problemas que la versión con errores pudo haber tenido.

:::danger Peligro
Dado que esta es una acción potencialmente peligrosa, solo los administradores de sitios o espacios tienen el permiso para ejecutar esta acción.
:::

## Locks

Locks es una funcionalidad de Modyo que permite modificar un recurso de manera segura, evitando problemas de concurrencia que puedan ocurrir cuando otro usuario esté trabajando en él simultáneamente. De esta forma Modyo evita la pérdida de trabajo o la sobreescritura de documentos.

<img src="/assets/img/platform/locks.jpg" style="border: 1px solid #EEE;" />

### ¿Qué elementos usan Locks?

Locks se usa principalmente en [Content](/es/platform/content/) y en [Channels](/es/platform/channels/), pero también puede ser usado en otras secciones donde se editan elementos como Configuraciones y [Customers](/es/platform/customers/).

### ¿Cómo usar Locks?

Locks se implementa de distintas maneras dentro de la plataforma. En [Content](/es/platform/content/) y [Channels](/es/platform/channels/), múltiples usuarios pueden entrar a un recurso, siendo sólo uno el que podrá editar y guardar esos cambios, mientras que los demás sólo verán la última versión guardada en la plataforma.

Si una segunda persona intenta hacer un cambio, le aparecerá un mensaje indicando que el elemento ya tiene cambios y que lo que está intentando modificar está obsoleto.

En otras secciones como [Customers](/es/platform/customers/) y Configuración, Locks no permitirá la visión simultánea del recurso, por lo que si éste se encuentra en edición, otro usuario no podrá ingresar a la vista de trabajo.

En este caso, sólo un Administrador podrá tomar el control, activando para sí mismo la edición y descartándose los avances no guardados del usuario que se encuentra trabajando en él.


:::warning Tomar el control

Si un Administrador quiere tomar el control de una vista, deberá hacer click en el elemento en uso y en la pantalla siguiente, hacer click en el botón  **Tomar Control**.

<img src="/assets/img/platform/lock-forms.jpg" style="border: 1px solid #EEE;" />

Cuando el Administrador toma el control, el usuario que esté usando el recurso recibe un mensaje en el que se le impide seguir haciendo cambios, por lo que cualquier cambio que el usuario esté realizando, debe ser guardado y respaldado offline.

Tras tomar el control, el Administrador solo tiene dos horas para hacer cambios sin guardar. Pasado ese tiempo, el recurso vuelve a liberarse y puede ser tomado por cualquier otro usuario.
:::

## Modo vista previa

El modo vista previa te permite previsualizar los cambios relaizados a elementos publicables como las Entradas, Pages, Navigation, Widgets o Plantillas. El acceso a este modo está en la parte superior derecha del sitio con el ícono <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>. Puedes reconocer que estás en modo vista previa, cuando veas la barra en la parte superior del sitio.

![Barra de vista previa](/assets/img/platform/preview-bar.png)

La barra de vista previa contiene los siguientes elementos interactivos:

* **Selector de plantillas**: Permite cambiar entre la versión publicada y editable de los elementos pertenecientes al template builder.
* **Selector de contenido**: Permite alternar entre la versión publicada y editable de los elementos pertenecientes a la aplicación de contenidos y que se estén usando en el sitio mediante el SDK de Liquid de contenido.
* **Selector de navegación**: Permite cambiar entre la versión publicada y editable de los elementos pertenecientes al navigation builder.
* **Selector de páginas**: Permite alternar entre la versión publicada y editable de los elementos pertenecientes al page builder.
* **Selector de vista de contenido**: Permite cambiar entre la versión publicada y editable de la entrada de contenido que se está previsualizando en las vistas personalizadas de contenido. Esta vista no usa directamente el SDK de Liquid de contenido, por lo que el contenido en estas vistas no se verá afectado por el selector del SDK de contenido.
* **Selector de widgets**: Si se están previsualizando páginas que contienen widgets personalizados, se mostrará una lista de los widgets presentes en la página, permitiendo seleccionar si se desea visualizar la versión editable o publicada de cada uno de ellos. Una vez realizada la selección, debes hacer click en el botón "refrescar" para que la configuración de los widgets surta efecto.
* **Pestaña para minimizar**: Permite ocultar la barra de previsualización para evitar interferencias con los elementos ubicados en la parte superior del sitio. Una vez minimizada, la pestaña seguirá visible para restaurar la barra en el modo vista previa.
* **Editar elemento**: Al hacer click, se accedes a la vista de edición del elemento que se está visualizando, ya sea una entrada, una página, un widget o una plantilla predeterminada del sitio.
* **Compartir link**: Permite copiar un enlace que se puede compartir con otros usuarios. Al abrir el enlace, se accede directamente al modo vista previa con la configuración que se tenía al momento de copiar el enlace. Para acceder al modo vista previa, es necesario tener una sesión iniciada en la cuenta de administradora.
* **Salir del modo vista previa**:  Cierra el modo vista previa, eliminando la barra y manteniendo la pestaña en la URL actual del sitio.

:::warning Atención
Cambiar el selector de contenido de la barra de previsualización no tendrá efecto sobre el contenido que estés usando a través del SDK de JavaScript o la API de contenido. Solo tendrá efecto en el contenido que se usa a través del SDK de Liquid.
:::

## Variables globales

Modyo ofrece la funcionalidad de definir variables globales, las cuales pueden ser utilizadas en todos los sitios donde se utilice Liquid. Esto permite compartir, por ejemplo, un _snippet_ de código entre diferentes sitios.

:::tip Tip
Puedes usar texto plano, HTML, JavaScript, y CSS dentro de las variables globales; sin embargo no puedes usar código Liquid dentro de ellas. Debes tener en consideración que el contenido tiene un máximo de 65.535 caracteres.

Para obtener el valor de la variable en cualquier lugar que acepte Liquid markup (entradas, widgets, plantillas), usa:<span v-pre>`{{vars.Nombre}}`</span>
:::

### Crear una variable global

Para crear una variable global, sigue esto pasos:

1. Desde el menú lateral principal, haz click en **Configuración**, luego selecciona **Variables Globales**.
1. Aquí podrás ver el listado de todas las variables globales de la cuenta, su información general, y un botón para copiar su nombre en Liquid. Haz click en **+ Nueva Variable**.
1. Llena el **Nombre** y **Valor** de la variable.
1. Haz click en **Guardar**.

Las variables globales se pueden utilizar para añadir valores para distintos idiomas. Si lo requieres, también tienes la opción de sobrescribir los valores de variables globales en sitios y widgets, utilizando los apartados de [configuración del sitio](/es/platform/channels/sites.html#variables-del-sitio) y [widgets personalizados](/es/platform/channels/widgets.html#variables-del-widget), respectivamente.

:::warning Atención
Cuando uses las variables globales, siempre se tomará como preferencia las variables definidas en el nivel más bajo, quedando primero las variables definidas en el widget, luego las definidas en el sitio, y por último las variables definidas a nivel de cuenta, por lo que debes ser cuidadoso al momento de definir variables en widgets o el sitio con el mismo nombre que las variables de la cuenta.
:::

:::danger Peligro
Las variables globales no cuentan con un flujo de trabajo de publicación, versionado, ni revisión en equipo. Solo los administradores de la cuenta y el sitio pueden modificarlas, por lo que debes considerar que al hacer cambios en estos valores, se verán reflejados inmediatamente en todo lugar donde se estén usando. 
Esto no aplica para las variables definidas en los widgets dado que los widgets y páginas si cuentan con flujo de publicación.
:::
