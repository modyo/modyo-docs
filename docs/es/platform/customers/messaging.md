---
search: true
---

# Mensajería

Mensajería es una herramienta de Modyo para quienes quieran hacer campañas en el sitio, que permite enviar la información hacia los usuarios finales de una manera masiva, dirigida a segmentos determinados.

<img src="/assets/img/customers/messaging/messaging-index.jpg" style="border: 1px solid #EEE; margin-top: 40px">

Modyo permite enviar mensajes a los usuarios de la plataforma a través de dos canales:

- **Correos**: Envía campañas a las casillas de emails registradas en los perfiles de los usuarios. No es necesario ingresar a la plataforma para verlo.
- **Notificaciones**: Envía notificaciones a través del sistema de mensajería interno. Para verlas, el usuario tiene que ingresar a la plataforma.

<img src="/assets/img/customers/messaging/messaging-index-options.jpg" width="400" style="border: 1px solid #EEE; margin-top: 40px">

## Campañas

A primera vista, estaremos en la sección Campañas, donde podremos ver a través de un administrador todos los mensajes e informaciones que hemos enviado a los usuarios finales.

En la parte superior de la pantalla, existe un botón que indica que vemos todos los mensajes que se han enviado en el sistema. Si queremos filtrar por el tipo de mensaje (Correo o Notificación), podemos hacer click para cambiar la vista.

En la tabla, se encuentran ordenadas las campañas por las siguientes columnas.

- **Nombre**: Nombre que se le dio a la campaña. También puede contener el Segmento específico al que se le envió.
- **Tipo**: Tipo de mensaje en que se envió la campaña.
- **Enviados**: Cantidad de envíos en total que se hizo de la campaña. Si la campaña se envió más de una vez, se suma.
- **Último envío**: Fecha y hora en que se envió por última vez la campaña.
- **Creado el**: Fecha de creación de la campaña.

A un costado de cada campaña, se encuentra un botón en el que podremos efectuar dos acciones. 

- **Editar la campaña**
- **Borrar la campaña**

::: danger Peligro
Si borras la campaña, no hay forma de recuperarla. No quedará grabada en el sistema
:::

### Crear una campaña

Para hacer una campaña, debemos hacer click en el botón **+ Nuevo**, ubicado en la parte superior de la vista del Administrador.

Posteriormente, mostrará un formulario que deberás rellenar con los siguientes datos:

- **Nombre**: Nombre que tendrá la campaña.
- **Tipo**: Formato que tendrá la campaña (Correo o Notificación).
- **Asunto**: Texto que aparecerá en la línea de asunto que se enviará a los usuarios.
- **Responder a**: Dirección de correo a la cual las personas pueden responder **(Solo para campañas de correo)**
- **Plantilla**: Lista de [plantillas](/es/platform/customers/messaging.html#plantillas) que se usarán para enviar un correo. Si no se selecciona alguna, enviará a una plantilla en blanco. **(Solo para campañas de correo)**
- **Habilitar segmentación**: Checkbox para seleccionar un segmento para enviar la campaña. Si este se deja en blanco, la campaña se enviará a todos los usuarios.

Después de rellenar estos datos, deberás hacer click en el botón **Guardar y Continuar**, ubicado en la parte superior de la pantalla.

Ahora, aparecerá un editor WYSIWYG con la plantilla que seleccionaste, la cual podrás editar según tus requerimientos. Para guardar, solo tendrás que hacer click en el botón en la parte superior de la pantalla.

Al hacer esto, tu campaña estará guardada y llegarás a la vista de Estado de Envío, donde podrás enviarla.

### Estado de envío

<img src="/assets/img/customers/messaging/campaign-show.jpg" style="border: 1px solid #EEE; margin-top: 40px">

El vista de Estado de Envío, permite no sólo enviar por primera vez una campaña que hayas creado. En esta, también podrás encontrar las estadísticas de la campaña que te permitirán ver el rendimiento del contenido que enviaste.

A primera vista, encontrarás en la parte superior de la pantalla el botón de **Vista Previa**, que te permite ver el correo que enviarás.

Además, encontrarás un menú desplegable que te conducirá a cuatro secciones:

<img width="300" src="/assets/img/customers/messaging/options-campaign.jpg" style="border: 1px solid #EEE; margin-top: 40px">

- **Editor de Mensajes**: Te permite editar el mensaje antes de enviarlo.
- **Enviar prueba**: Envía un correo de prueba con la campaña a una dirección determinada.
- **Editor**: Te permite editar las propiedades de la campaña, incluyendo aspectos técnicos como la dirección de envío y los segmentos a recibir.
- **Borrar**: Borra toda la campaña.

En la vista superior, podrás encontrar las estadísticas de la campaña.

:::warning Atención
Si no has enviado aún la campaña, los valores aparecerán en cero.
:::

Si enviaste la campaña por correo, podrás encontrar las siguientes cifras:

- **Alcance**: Personas a las que les llega la campaña.
- **Envíos**: Nº de veces que se ha enviado la campaña
- **Enviados**: Nº total de correos enviados.
- **Abiertos**: Nº total de correos abiertos. 
- **Abiertos únicos**: Nº total de usuarios los cuales abrieron alguna vez la campaña.
- **Clicks**: Nº de veces en los cuales se ha hecho click en algún vínculo de la campaña.
- **Clicks únicos**: Nº de usuarios que han hecho click alguna vez en la campaña.
- **Spam**: Nº de usuarios a los que su correo llegó a la casilla de Spam.

En cambio, si enviaste la campaña por Notificación, podrás encontrar estas cifras:

- **Alcance**: Personas a las que les llegó la campaña.
- **Envíos**: Nº de veces que se envió la campaña.
- **Enviados**: Nº de notificaciones enviadas.
- **Abiertos**: Nº de notificaciones abiertas.


Más abajo podrás ver los [Segmentos](/es/platform/customers/segments.html) a los cuales se les llegó la campaña. Si esta sección no aparece, quiere decir que la campaña fue enviada a todos los contactos.

Finalmente podrás encontrar una tabla con todos los envíos de la campaña, la cual podrás ordenar de manera ascendente o descendente según las siguientes columnas:


- **Fecha**: Día y hora en que se hizo el envío.
- **Segmentos**: Segmentos a los cuales se hizo el envío en específico.
- **Alcance**: Nº de personas que recibieron el envío.
- **Enviados**: Nº de correos/notificaciones enviadas.
- **Estado**: Estado en el que se encuentra el envío. Pueden ser cuatro: Completado, Pendiente, Fallido o Cancelado.

Después, podrás encontrar un botón que te permitirá borras el envío del registro.

::: danger Peligro
Recuerda que si borras el envío, no podrás recuperar el registro si hiciste algún cambio en este. 
Además, si borras cuando la campaña se encuentre en proceso de envío, no quiere decir que no llegarán los correos a los usuarios, sino que se detendrá el proceso en el punto en que se encuentra.
:::

Si haces clic en los nombres de las campañas, pasarás a la sección Entregas de Mensajes.

## Entregas de Mensajes

En la sección Entregas de Mensajes, podrás encontrar la lista de usuarios a los cuales les ha llegado un mensaje desde la plataforma. 

A primera vista, podrás encontrar una lista de todos los usuarios a los cuales les ha llegado un correo o notificación única, a los cuales se les denomina "Sin Campaña".

"Sin Campaña" refiere a un correo o notificación que ha 
sido enviado en específico a un usuario, en una fecha determinada. No caen en el concepto de Campañas ya que estos mensajes están personalizados y contienen información que no es enviada a otros. Para saber más del funcionamiento de estos mensajes, acude a la [sección API de Administración](/es/platform/core/api.html). 

En la primera vista, el administrador se ordena bajo las siguientes categorías.

- **Nombre**: Nombre del usuario al que se le envía el mensaje. Se incluye el mail del usuario, independientemente si el mensaje fue a través de correo o notificación.
- **Campaña**: Campaña bajo la cual se envío el mensaje.
- **Tipo**: Vía por la cual se envío el mensaje. Correo o notificación.
- **Envío**: Fecha en la cual se inició la campaña.
- **Enviado**: Fecha en la que se envió el mensaje.
- **Leído**: Alerta si el usuario leyó o vio el mensaje.

Además, podrás filtrar los datos bajo los siguientes filtros:

- **Tipo de Campaña**: Todos, correo o notificación.
- **Nombre de la Campaña**: Nombre que se le dio a la campaña en general.
- **Envío**: Fecha en la cual se envió la campaña.

Por último, puedes ver una barra de búsqueda que te permitirá encontrar por algún término en específico.

## Plantillas

<img src="/assets/img/customers/messaging/messaging-templates-index.jpg" style="border: 1px solid #EEE; margin-top: 40px">

Para hacer tu mensaje en forma de correo, necesitarás una plantilla para poder añadir los contenidos que desees.

Desde esta sección, podrás hacer maquetas de correos de manera fácil para después enviarlas a los usuarios.

A primera vista, puedes encontrar todas las plantillas de correos que se han hecho.

Cada una de las plantillas estarán ordenadas según su nombre, además de poder ver la última vez que se les hizo alguna modificación.

:::tip Tip
Si vas a reutilizar alguna plantilla, recuerda revisar detalladamente su contenido, para evitar errores temporales que puedan confundir el mensaje que le quieres enviar a tus usuarios.
:::

Bajo cada nombre, encontrarás un botón que te permitirá editar. Si haces click en él, llegarás al editor donde hiciste tu plantilla.

A un costado, se encuentra un botón que despliega un menú con las siguientes opciones:

- **Vista previa**: Muestra el modelo de plantilla de correo que se encuentra guardada.
- **Copiar**: Puedes hacer una copia de la plantilla.
- **Borrar**: Se borra la plantilla

:::tip Tip
Si quieres intervenir la plantilla temporalmente y después volver a una nueva, es mejor que hagas una copia y trabajes sobre esta, dejando la original sin cambios.
:::

### Editar plantillas

<img src="/assets/img/customers/messaging/messaging-template-show.jpg" style="border: 1px solid #EEE; margin-top: 40px">

Para hacer una plantilla, primero debes hacer click en el botón **+ Nuevo**, que se encuentra en la parte superior de la página.

Al hacer click, se abrirá la vista de edición donde debes poner escribir el nombre que le darás a la plantilla.

:::tip Tip
Recuerda que este nombre es el que después deberás buscar para hacer el envío al Hacer la Campaña. Por esto, debes poner un texto que te ayude a identificar bien cuál es la plantilla que quieres usar y no poner algo que te pueda confundir.
:::

Más abajo, encontrarás un editor WYSIWYG, que te permitirá armar visualmente cómo será tu correo y agregar los parámetros correspondientes que permiten automáticamente personalizar el mensaje.

:::warning Atención
Si haces una campaña, recuerda agregar en el footer toda la información legal que exige la regulación de tu país en cuanto a correos masivos.

Para automatizar la inserción del Footer, lee [Configuración de Customers](/es/platform/customers/realms.html#configuracion-de-customers)
:::

Para grabar la plantilla, debes hacer click en el botón **Guardar**, que se encuentra en la parte superior de la página.

Si quieres usar la plantilla en un correo, solo tienes que seleccionar el nombre de la plantilla, cuando estés elaborando la campaña.

## Desinscripciones

En esta sección, encontrarás una lista con todos los usuarios que se han dado de baja de las campañas de correos o notificaciones a través de su perfil web.

Para encontrar un usuario, en la parte superior de la pantalla existe una barra de búsqueda donde puedes ingresar su nombre o correo electrónico.

Si se hace click en el nombre del usuario, puedes encontrar el [perfil del usuario](/es/platform/customers/realms.html#ficha-de-usuarios) con todas las actividades que ha hecho en la plataforma.

Por último, al final de cada nombre de usuario, encontrarás un botón que te permite reinscribirlo a cualquier campaña del sitio.

::: danger Peligro
Hacer una reinscripción sin una autorización expresa del usuario, puede causar problemas legales.
Revisa la regulación sobre correos masivos en cada país.
:::
