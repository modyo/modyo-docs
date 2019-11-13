---
search: true
---

# Mensajería

Mensajería es una herramienta de Modyo para quienes quieran hacer campañas en el sitio, que nos permite enviar la información hacia nuestros clientes de una manera masiva, dirigida a targets determinados.

Modyo permite enviar mensajes a los usuarios de la plataforma a través de dos canales:

- **Correos**: Envía campañas a las casillas de emails registradas en los perfiles de los usuarios. No es necesario ingresar a la plataforma para verlo.
- **Notificaciones**: Envía notificaciones a través del sistema de mensajería interno. Para verlas, el usuario tiene que ingresar a la plataforma.

## Campañas

A primera vista, estaremos en la sección Campañas, donde podremos ver a través de un administrador todos los mensajes e informaciones que hemos enviado a nuestros clientes.

En la parte superior de la pantalla, existe un botón que nos indica que vemos todos los mensajes que se han enviado en el sistema. Si queremos filtrar por el tipo de mensaje (Correo o Notificación), podemos hacer click para cambiar la vista.

En la tabla, se encuentran ordenadas las campañas por las siguientes columnas.

- Nombre: Nombre que se le dio a la campaña. También puede contener el Target específico al que se le envió.
- Tipo: Tipo de mensaje en que se envió la campaña.
- Enviados: Cantidad de envíos en total que se hizo de la campaña. Si la campaña se envió más de una vez, se suma.
- Último envío: Fecha y hora en que se envió por última vez la campaña.
- Creado el: Fecha de creación de la campaña.

A un costado de cada campaña, se encuentra un botón en el que podremos efectuar dos acciones. 

- Editar la campaña
- Borrar la campaña

:::danger
Si borras la campaña, no hay forma de recuperarla. No quedará grabada en el sistema
:::

### Hacer una campaña

Para hacer una campaña, debemos hacer click en el botón +Nuevo, ubicado en la parte superior de la vista del Administrador.

Posteriormente, mostrará un formulario que deberás rellenar con los siguientes datos:

- Nombre: Nombre que tendrá la campaña.
- Tipo: Formato que tendrá la campaña (Correo o Notificación).
- Asunto: Texto que aparecerá en la línea de asunto que se enviará a los usuarios.
- Responder a: Dirección de correo a la cual las personas pueden responder **(Solo para campañas de correo)**
- Plantilla: Lista de [plantillas](/guides/customers/messaging.html#plantillas) que se usarán para enviar un correo. Si no se selecciona alguna, enviará a una plantilla en blanco. **(Solo para campañas de correo)**
- Habilitar targetización: Checkbox para seleccionar un target para enviar la campaña. Si este se deja en blanco, la campaña se enviará a todos los usuarios.

Después de rellenar estos datos, deberás hacer click en el botón "Guardar y Continuar", ubicado en la parte superior de la pantalla.

Ahora, aparecerá un editor WYSIWYG con la plantilla que seleccionaste, la cual podrás editar según tus requerimientos. Para guardar, solo tendrás que hacer click en el botón en la parte superior de la pantalla.

Al hacer esto, tu campaña estará guardada y llegarás a la vista de Estado de Envío, donde podrás enviarla.

### Estado de envío

El vista de Estado de Envío, permite no sólo enviar por primera vez una campaña que hayas creado. En esta, también podrás encontrar las estadisticas de la campaña que te permitirán ver el rendimiento del contenido que enviaste.

A primera vista, encontrarás en la parte superior de la pantalla el botón de Vista Previa, que te permite ver el correo que enviarás.

Además, encontrarás un menú desplegable que te conducirá a cuatro secciones:

- Editor de Mensajes: Te permite editar el mensaje antes de enviarlo.
- Enviar prueba: Envía un correo de prueba con la campaña a una dirección determinada.
- Editor: Te permite editar las propiedades de la campaña, incluyendo aspectos técnicos como la dirección de envío y los targets a recibir.
- Borrar: Borra toda la campaña.

En la vista superior, podrás encontrar las estadísticas de la campaña. 

::: warning
Si no has envíado aún la campaña, los valores aparecerán en cero.
:::

Si envíaste la campaña por correo, podrás encontrar las siguientes cifras:

- Alcance: Personas a las que les llega la campaña.
- Envíos: Nº de veces que se ha enviado la campaña
- Envíados: Nº total de correos enviados.
- Abiertos: Nº total de correos abiertos. 
- Abiertos únicos: Nº total de usuarios los cuales abrieron alguna vez la campaña.
- Clicks: Nº de veces en los cuales se ha hecho click en algún vínculo de la campaña.
- Clicks únicos: Nº de usuarios que han hecho click alguna vez en la campaña.
- Spam: Nº de usuarios a los que su corrreo llegó a la casilla de Spam.

En cambio, si enviaste la campaña por Notificiación, podrás encontrar estas cifras:

- Alcance: Personas a las que les llegó la campaña.
- Envíos: Nº de veces que se envió la campaña.
- Enviados: Nº de notificaciones enviadas.
- Abiertos: Nº de notificaciones abiertas.


Más abajo podrás ver los [Targets](/guides/customers/targets.html) a los cuales se les llegó la campaña. Si esta sección no aparece, quiere decir que la campaña fue enviada a todos los contactos.

Finalmente podrás encontrar una tabla con todos los envíos de la campaña, la cual podrás ordenar de manera ascendente o descendente según las siguientes columnas:


- Fecha: Día y hora en que se hizo el envío.
- Targets: Targets a los cuales se hizo el envío en específico.
- Alcance: Nº de personas que recibieron el envío.
- Enviados: Nº de correos/notificaciones enviadas.
- Estado: Estado en el que se encuentra el envío. Pueden ser cuatro: Completado, Pendiente, Fallido o Cancelado.

Después, podrás encontrar un botón que te permitirá borras el envío del registro.

::: danger
Recuerda que si borras el envío, no podrás recuperar el registro si hiciste algún cambio en este. 
Además, si borras cuando la campaña se encuentre en proceso de envío, no quiere decir que no llegarán los correos a los usuarios, sino que se detendrá el proceso en el punto en que se encuentra.
:::

Si haces clic en los nombres de las campañas, pasarás a la sección Entregas de Mensajes.

### Entregas de Mensajes

En la sección Entregas de Mensajes, podrás encontrar la lista de usuarios a los cuales les ha llegado un mensaje desde la plataforma. 

A primera vista, podrás encontrar una lista de todos los usuarios a los cuales les ha llegado un correo o notificación única, a los cuales se les denomina "Sin Campaña".

"Sin Campaña" refiere a un correo o notificación que ha 
sido envíado en específico a un usuario, en una fecha determinada. No caen en el concepto de Campañas ya que estos mensajes están personalizados y contienen información que no es enviada a otros. Para saber más del funcionamiento de estos mensajes, acude a la sección [API de Administración](/guides/platform/api.html). 

En la primera vista, el administrador se ordena bajo las siguientes categorías.

- Nombre: Nombre del usuario al que se le envía el mensaje. Se incluye el mail del usuario, independientemente si el mensaje fue a través de correo o notificación.
- Campaña: Campaña bajo la cual se envío el mensaje.
- Tipo: Vía por la cual se envío el mensaje. Correo o notificación.
- Envío: Fecha en la cual se inició la campaña.
- Enviado: Fecha en la que se envió el mensaje.
- Leído: Alerta si el usuario leyó o vio el mensaje.

Además, podrás filtrar los datos bajo los siguientes filtros:

- Tipo de Campaña: Todos, correo o notificación.
- Nombre de la Campaña: Nombre que se le dio a la campaña en general.
- Envío: Fecha en la cual se envió la campaña.

Por último, puedes ver una barra de búsqueda que te permitirá encontrar por algún término en específico.

### Plantillas

Para hacer tu mensaje en forma de correo, necesitarás una plantilla para poder añadir los contenidos que desees.

Desde esta sección, podrás hacer maquetas de correos de manera fácil para después enviarlas a los usuarios.

A primera vista, puedes encontrar todas las plantillas de correos que se han hecho.

Cada una de las plantillas estarán ordenadas según su nombre, además de poder ver la última vez que se les hizo alguna modificación.

::: tip
Si vas a reutilizar alguna plantilla, recuerda revisar detalladamente su contenido, para evitar errores temporales que puedan confundir el mensaje que le quieres enviar a tus usuarios.
:::

#### Hacer plantillas

Para hacer una plantilla, primero debes hacer click en el botón "+ Nuevo", que se encuentra en la parte superior de la página.

::: warning
Si haces una campaña, recuerda agregar en el footer toda la información legal que exige la regulación de tu país en cuanto a correos masivos.

Para automatizar la inserción de Footer, lee [Configuración de Customers]
:::







--------

Por lo mismo, dentro de la plataforma es muy importante  que quienes hagan monitoreos o estén atentos a las preguntas de los usuarios, tengan presente esta herramienta.

Por esto mismo, podemos filtrar las campañas en dos modos:

- Correo
- Notificaciones

Haciendo clic en cada una de ellas, podemos ver una estadística que muestra su estado, alcance y envíos.

Para crear una campaña, se hace clic en el botón "Nuevo", donde uno debe seleccionar la forma de envío de esta. En base a ello, los datos serán requerídos.

Posterior a esto, se procede a diseñar la campaña. En el caso de ser un correo, uno puede acceder a una plantilla predeterminada o crear una nueva.

En el caso de hacerse a través de una notificación, por ser mucho más breve, se puede asignar el código preciso y Guardar.

Cuando nuestra campaña esté lista y designada al target que queremos, podemos proceder a enviarla o hacer una prueba hacia la dirección que queramos. Para ello, se debe hacer clic nuevamente en el archivo y asignar la acción en el botón superior.

## Mensajes

En la sección Mensajes o "Entregas de Mensajes", podemos hacer un rastreo del estado de la información que hemos envíado por Correo o Notificación.

En este caso, se puede ver el nombre del usuario al que se le envió la información, la campaña a la que está asignada, la hora despachada y su estado de lectura.

## Plantillas

Las plantillas son una de las mejores formas de ahorrarnos tiempo para hacer una campaña uniforme. Es por esto que en esta sección, se pueden crear formatos especiales para correos, haciendo campos customizables.

Para crear una plantilla, solo hay que entrar a esta sección y hacer clic en "Nuevo", que te llevará a un editor visual que puede ser traspasado a código sin problemas.

Al guardar, podremos ver una lista de las plantillas ya usadas dentro de nuestros mensajes. Si queremos corregir el formato de estas, solo hay que hacer clic en ellas, en el boton "Editar".

## Desuscripciones

Modyo también provee una lista de quienes se han desuscrito de nuestras campañas, ya sea por considerarlas spam o no ser de su interés.

Es una mala práctica volver a suscribir a estos usuarios a una lista de correos o notificaciones sin su autorización personal. Sin embargo, es importante tener en cuenta su nombre y su correo para impedir futuros envíos no deseados y provocar más rechazos.
