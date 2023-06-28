---
search: true
---

# Mensajería

Mensajería es una herramienta de Modyo que te permite hacer campañas en el sitio y enviar información a los usuarios finales de manera masiva, dirigida a segmentos específicos.

<img src="/assets/img/platform/newcampaign.png" style="border: 1px solid #EEE; margin-top: 40px">

En Modyo, puedes enviar mensajes a los usuarios a través de dos canales:

- **Correos**: Envía campañas a las casillas de emails registradas en los perfiles de los usuarios. No es necesario ingresar a la plataforma para  ver los mensajes.
- **Notificaciones**: Envía notificaciones a través del sistema de mensajería interno. Para verlas, el usuario tiene que ingresar a la plataforma.

<img src="/assets/img/platform/messagedeliveries.png" width="400" style="border: 1px solid #EEE; margin-top: 40px">

## Campañas

En la sección de campañas puedes ver, a través de un administrador, todos los mensajes e información que has enviado a los usuarios finales.

Da click en el botón Todos en la parte superior de la pantalla para filtrar los mensajes según el canal a través del cual fueron enviados.

Los mensajes de las campañas se ordenan en las siguientes columnas:

- **Nombre**: Nombre que se le dio a la campaña. Puede contener el Segmento específico al que se le envió.
- **Tipo**: Tipo de mensaje en que se envió la campaña.
- **Enviados**: Cantidad total de envíos realizados para la campaña.
- **Último envío**: Fecha y hora en que se envió la campaña.
- **Creado el**: Fecha de creación de la campaña.

En la fila de cada campaña, hay un botón que permite realizar dos acciones: 

- **Editar la campaña**
- **Borrar la campaña**

:::danger Peligro
Si borras la campaña, no se puede recuperar y la campaña no quedará registrada en el sistema.
:::

### Crear una campaña

Da click en el botón **+ Nueva Campaña**, en la parte superior de la vista del Administrador para crear una campaña nueva.

Rellena los datos solicitados en el formulario:

- **Nombre**:  Nombre de la campaña.
- **Tipo**: Elige si se enviará por correo o notificación.
- **Asunto**: Texto que aparecerá en la línea de asunto del mensaje que se enviará a los usuarios.
- **Responder a**: Dirección de correo electrónico a la cual las personas pueden responder
 **(solo para campañas de correo)**.
- **Plantilla**: Lista de [plantillas](/es/platform/customers/messaging.html#plantillas) que se usarán para enviar un correo. Si no se selecciona alguna, Modyo enviará a una plantilla en blanco **(solo para campañas de correo)**.
- **Habilitar segmentación**: Casilla de verificación para seleccionar un segmento  para enviar la campaña. Si dejas la casilla en blanco, la campaña se enviará a todos los usuarios.

Una vez completes el formulario, haz click en el botón **Guardar y continuar**, en la parte superior de la pantalla.

Esto abre el editor WYSIWYG con la plantilla que seleccionaste. Edita la plantilla y haz click en el botón **Guardar** para confirmar los cambios y abrir la vista Estado de envío para enviar la campaña. 


### Estado de envío

<img src="/assets/img/platform/send.png" style="border: 1px solid #EEE; margin-top: 40px">

En la parte superior de la pantalla, el ícono de **vista previa** te permite visualizar tu campaña antes de enviarla. Da click en el botón **Enviar** para mandar la campaña.

El botón contextual te permite realizar estas acciones:

- **Editor de Mensajes**: Edita tu mensaje antes de enviarlo.
- **Enviar prueba**: Envía un correo de prueba con la campaña a una dirección determinada.
- **Editar**: Edita las propiedades de la campaña, aspectos técnicos como la dirección de envío y los segmentos a recibir.
- **Clonar la campaña**: Copia todo el contenido de una campaña.
- **Borrar la campaña**: Elimina una campaña.

<img width="300" src="/assets/img/platform/menu.png" style="border: 1px solid #EEE; margin-top: 40px">

Una vez que hayas enviado una campaña, no puedes enviarla nuevamente. Si deseas enviar de nuevo la misma campaña, selecciona la opción de clonar. Esto  crea una una nueva campaña con los mismos datos de nombre, segmentos y contenido, mientras que la información estadística parte de cero.

Puedes cancelar el envío de una campaña cuando la campaña está en cola o en proceso de envío. 

:::warning Atención
Una campaña puede ser reenviada solamente si cancelaste previamente el envío de la campaña cuando estaba en cola o proceso de envío. 

Debes indicar si deseas enviar nuevamente los mensajes a todos los usuarios o solo a aquellos que no los recibieron anteriormente. En este caso, el número de entregas de mensajes puede ser mayor que el alcance total de usuarios de la campaña.
:::

En campañas enviadas por correo visualizar:

<img src="/assets/img/platform/campaign.png" style="border: 1px solid #EEE; margin-top: 40px">

- **Alcance**: Personas a las que les llegó la campaña.
- **Enviados**: Número total de correos enviados.
- **Abiertos**: Número total de correos abiertos.
- **Abiertos únicos**: Número total de usuarios los cuales abrieron alguna vez la campaña.
- **Clicks**: Número de veces que se ha hecho click en algún vínculo de la campaña.
- **Clicks únicos**: Número de usuarios que han hecho click en la campaña.
- **Spam**: Número de usuarios a los que el correo llegó a la bandeja de spam.

Si enviaste la campaña por notificación puedes visualizar:

- **Alcance**: Personas a las que les llegó la campaña.
- **Enviados**: Número de notificaciones enviadas.
- **Abiertos**: Número de notificaciones abiertas.

Si envías una campaña por [Segmentos](/es/platform/customers/segments.html) puedes ver también los segmentos a los que les llegó la campaña. Si esta sección no aparece, es porque la campaña fue enviada a todos los contactos.

:::warning Atención
Si no has enviado aún la campaña, los valores de esa campaña aparecerán en cero.
:::

:::danger Peligro
Cuando borras un envío no puedes recuperar el registro si hiciste algún cambio en él. 

Borrar una campaña cuando está en proceso de envío, no significa que no llegará a los usuarios, sino que se detiene el proceso en el punto en que se encuentra.
:::

Hacer click en el nombre de una campaña te lleva a la sección Entregas de Mensajes.

## Entregas de mensajes

En la sección Entregas de mensajes, encuentras la lista de usuarios a los cuales les ha llegado un mensaje desde la plataforma. Aquí puedes ver una lista de todos los usuarios que han recibido un correo o notificación única, denominados "Sin Campaña".

"Sin Campaña" se refiere a un correo o notificación enviado específicamente a un usuario en una fecha determinada. Estos mensajes no se consideran Campañas, ya que están personalizados y contienen información que no se envía a otros usuarios. Para obtener más información sobre cómo funcionan estos mensajes, consulta la [API de Administración](/es/platform/core/api.html). 

En la vista inicial los mensajes se ordenan en estas categorías:

- **Nombre**: Nombre del usuario al que se le envía el mensaje. Se incluye el mail del usuario, independientemente de si fue enviado por correo o notificación.
- **Campaña**:  Campaña bajo la cual el mensaje fue enviado.
- **Tipo**: Vía por la cual se envió el mensaje, ya sea correo o notificación.
- **Envío**: Fecha en la cual se inició la campaña.
- **Enviado**: Fecha en la que se envió el mensaje.
- **Leído**: Alerta si el usuario leyó o vio el mensaje.

Además, puedes filtrar los datos bajo los siguientes filtros:

- **Tipo de Campaña**: Todos, correo o notificación.
- **Nombre de la Campaña**: Nombre que se le dio a la campaña en general.
- **Envío**: Fecha en la cual se envió la campaña.

La  barra de búsqueda te permite buscar por algún término en específico.

## Plantillas

<img src="/assets/img/customers/messaging/messaging-templates-index.jpg" style="border: 1px solid #EEE; margin-top: 40px">

Para crear tu mensaje en forma de correo, necesitas una plantilla en la cual añadir tu contenido.

En la sección plantillas puedes hacer maquetas de correos para después enviarlas a los usuarios.

Al ingresar a esta sección encuentras todas las plantillas de correos creadas. Las plantillas están ordenada por nombre y puedes ver la última vez que se modificó una plantilla.

:::tip Tip
En caso de reutilizar una plantilla, asegúrate de revisar cuidadosamente su contenido para evitar posibles errores temporales que puedan causar confusión en el mensaje que deseas enviar a tus usuarios.
:::

Cada plantilla tiene un botón de edición debajo. Haz clic en él para acceder al editor donde creaste la plantilla. Haz clic en el botón de menú desplegable junto al botón de edición para acceder a estas opciones:

- **Vista previa**: Muestra el modelo de plantilla de correo guardada.
- **Copiar**: Permite copiar la plantilla.
- **Borrar**: Borra la plantilla

:::tip Tip
Para modificar una plantilla temporalmente y después volver a una nueva, haz una copia de la plantilla y trabaja sobre la copia, dejando la original sin cambios.
:::

### Editar plantillas

<img src="/assets/img/customers/messaging/messaging-template-show.jpg" style="border: 1px solid #EEE; margin-top: 40px">

Para crear una plantilla, haz click en el botón **+ Nueva Plantilla**,en la parte superior de la página. 

En la vista de edición designa un nombre a la plantilla.

:::tip Tip
Al crear una Campaña, el nombre de tu plantilla será utilizado posteriormente para realizar el envío. Elige un texto que te ayude a identificar claramente cuál es la plantilla que quieres usar.
:::

El editor WYSIWYG, te permite crear visualmente cómo será tu correo y agregar los parámetros correspondientes que permiten automáticamente personalizar el mensaje.

:::warning Atención
Cuando haces una campaña, recuerda agregar en el footer toda la información legal que exige la regulación de tu país en cuanto a correos masivos.

Para automatizar la inserción del Footer, lee [Configuración de Realms](/es/platform/customers/realms.html#emails)
:::

Para guardar la plantilla, haz clic en el botón **Guardar** en la parte superior de la página.

Para usar la plantilla en un correo, selecciona el nombre de esa plantilla al elaborando la campaña.

## Desinscripciones

En esta sección, encuentras una lista de los usuarios que se han dado de baja de las campañas de correos o notificaciones a través de su perfil web.

Usa la barra de búsqueda para encontrar un usuario específico. Puedes ingresar su nombre o correo electrónico.

Cuando haces click en el nombre del usuario, puedes ver el [perfil del usuario](/es/platform/customers/realms.html#ficha-de-usuarios) con todas las actividades que ha hecho en la plataforma.

Al final de cada nombre de usuario hay un botón que te permite reinscribir al usuario a cualquier campaña del sitio.

:::danger Peligro
Hacer una reinscripción sin autorización del usuario puede causar problemas legales.
Revisa la regulación sobre correos masivos en cada país.
:::
