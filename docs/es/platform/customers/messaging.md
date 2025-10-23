---
search: true
---

# Mensajería

La funcionalidad de **Mensajería** en Modyo permite crear campañas masivas para enviar información a usuarios finales de forma segmentada y personalizada.

En Modyo, puedes enviar mensajes a los usuarios a través de dos canales:

- **Correos**: Envía campañas a las casillas de emails registradas en los perfiles de los usuarios. No es necesario ingresar a la plataforma para ver los mensajes.
- **Notificaciones**: Envía notificaciones a través del sistema de mensajería interno. Los usuarios deben ingresar a la plataforma para visualizarlos.

## Campañas

En la sección de **Campañas**, puedes administrar todos los mensajes enviados a los usuarios finales. Utiliza el botón **Tipo**, para filtrar las campañas por el canal de envío.

Las campañas se organizan en las siguientes columnas:

- **Nombre**: Nombre asignado a la campaña. Puede contener el segmento específico al que se le envió.
- **Tipo**: Tipo de mensaje en que se envió la campaña.
- **Enviados**: Total de envíos realizados.
- **Último envío**: Fecha y hora en que se envió la campaña.
- **Creado el**: Fecha de creación de la campaña.

En cada fila de campaña, encontrarás un menú con las siguientes acciones:

- **Editar campaña**
- **Borrar**

:::danger Peligro
Si borras una campaña, no podrás recuperarla, y su registro se eliminará del sistema.
:::

## Crear una campaña
Las campañas te permiten contactar directamente a tus usuarios mediante correo electrónico o notificaciones directas, incluyendo soporte para notificaciones WebPush. Para generar una nueva campaña haz click en el botón **Nueva Campaña**

### Campañas de Correo

Las campañas de correo te permiten contactar a los usuarios a través de email. Para configurar una campaña de correo, completa los campos solicitados en el formulario:

- **Nombre**: Identificador de la campaña.
- **Tipo**: Selecciona **Correo** para activar esta opción.
- **Asunto**: Texto que aparecerá en la línea de asunto del mensaje.
- **Responder a**: Dirección de correo electrónico para las respuestas de los usuarios. Si este campo se deja en blanco se usará el correo por defecto del reino.
- **Plantilla**: Selecciona una [plantilla](/es/platform/customers/messaging#plantillas). Si no seleccionas una, se enviará una plantilla en blanco.
- **Habilitar segmentación**: Selecciona un segmento específico o deja esta opción desmarcada para enviar el mensaje a todos los usuarios.

Haz clic en **Guardar y continuar** para abrir el editor WYSIWYG, donde puedes personalizar el contenido de la plantilla seleccionada. Una vez editado, selecciona **Guardar** para confirmar los cambios y acceder a la vista **Estado de envío**.


### Campañas de Notificaciones
Las campañas de notificaciones permiten enviar mensajes directos a los usuarios. Para configurar una campaña de notificaciones, completa los siguientes campos en el formulario:

- **Nombre**: Identificador de la campaña.
- **Tipo**: Selecciona **Notificación** para activar esta opción.
- **Asunto**: Texto que aparecerá en el mensaje enviado.

#### Habilitar soporte para WebPush

Las campañas de notificaciones tienen la capacidad de enviar notificaciones WebPush. Esta funcionalidad permite a los usuarios recibir mensajes directamente en su navegador. Para habilitar esta función, asegúrate de cumplir con los siguientes requisitos:

- La aplicación web que envía las notificaciones debe estar vinculada al **Realm** donde se crean las campañas.
- La aplicación web debe estar en estado **Enabled**.
- En la sección **PWA** de la aplicación web, activa las opciones **Habilitar service worker principal** y **Habilitar las notificaciones WebPush**.

Además, para que los usuarios puedan recibir notificaciones WebPush, deben cumplir con lo siguiente:

- Deben estar autenticados.
- Las notificaciones deben estar habilitadas en su navegador.

:::warning Atención
Si utilizas una versión de Modyo anterior a la 10.0, actualiza tu plantilla con el [código de soporte para WebPush](https://github.com/modyo-community/web-push-support).
:::

## Estado de Envío

Antes de enviar una campaña, utiliza el botón de **Vista previa** para verificar el contenido. Una vez confirmado, haz clic en **Enviar**.
El botón contextual te permite realizar estas acciones:

- **Editor de Mensajes**: Modifica el contenido antes de enviarlo.
- **Enviar prueba**: Envía un mensaje de prueba a una dirección específica (Únicamente puede a enviarse a usuarios con acceso al backend de Modyo).
- **Editar**: Cambia las propiedades de la campaña, como el segmento objetivo o la dirección de respuesta.
- **Clonar la campaña**: Crea una copia con todo el contenido de una campaña.
- **Borrar la campaña**: Elimina una campaña.

Una vez que hayas enviado una campaña, no puedes enviarla nuevamente. Si deseas enviar de nuevo la misma campaña, selecciona la opción de clonar. Esto  crea una una nueva campaña con los mismos datos de nombre, segmentos y contenido, mientras que la información estadística parte de cero.

Puedes cancelar el envío de una campaña cuando la campaña está en cola o en proceso de envío.

:::warning Atención
Una campaña puede reenviarse únicamente si fue cancelado previamente el envío de la campaña cuando estaba en cola o proceso de envío.

Debes indicar si deseas enviar nuevamente los mensajes a todos los usuarios o solo a aquellos que no los recibieron anteriormente. En este caso, el número de entregas de mensajes puede ser mayor que el alcance total de usuarios de la campaña.
:::

En campañas enviadas por correo puedes visualizar:

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

Si envías una campaña por [segmentos](/es/platform/customers/segments) puedes ver a cuál grupo de usuarios le llegó la campaña. Si esta sección no aparece, es debido a que la campaña fue enviada a todos los contactos.

:::warning Atención
Si no has enviado aún la campaña, los valores de esa campaña aparecerán en cero.
:::

:::danger Peligro
Cuando borras un envío no puedes recuperar el registro si hiciste algún cambio en él.

Borrar una campaña cuando está en proceso de envío, no significa que no llegará a los usuarios, sino que se detiene el proceso en el punto en que se encuentra.
:::

Hacer click en el nombre de una campaña te lleva a la sección Entregas de Mensajes.

## Entregas de Mensajes

En la sección Entregas de mensajes, encuentras la lista de usuarios a los cuales les ha llegado un mensaje desde la plataforma. Aquí puedes ver una lista de todos los usuarios que han recibido un correo o notificación única, denominados "Sin Campaña".

"Sin Campaña" se refiere a un correo o notificación enviado específicamente a un usuario en una fecha determinada. Estos mensajes no se consideran Campañas, ya que están personalizados y contienen información que no se envía a otros usuarios. Para obtener más información sobre cómo funcionan estos mensajes, consulta la [API de Administración](/es/platform/core/api).

En la vista inicial los mensajes se ordenan en estas categorías:

- **Nombre**: Nombre del usuario al que se le envía el mensaje. Se incluye el mail del usuario, independientemente de si fue enviado por correo o notificación.
- **Campaña**: Campaña bajo la cual el mensaje fue enviado.
- **Tipo**: Vía por la cual se envió el mensaje, ya sea correo o notificación.
- **Envío**: Fecha en la cual se inició la campaña.
- **Enviado**: Fecha en la que se envió el mensaje.
- **Leído**: Alerta si el usuario leyó o vio el mensaje.

Además, puedes filtrar los datos bajo los siguientes filtros:

- **Tipo de Campaña**: Todos, correo o notificación.
- **Nombre de la Campaña**: Nombre que se le dio a la campaña en general.
- **Envío**: Fecha en la cual se envió la campaña.

La barra de búsqueda te permite buscar por algún término en específico.

## Plantillas


En la sección **Plantillas**, puedes crear y administrar diseños de correo para tus campañas. Para crear tu mensaje en forma de correo, necesitas una plantilla en la cual añadir tu contenido.

### Crear una plantilla

- Haz clic en **Nueva Plantilla**.
- Asigna un nombre descriptivo a la plantilla.
- Utiliza el editor WYSIWYG para personalizar el diseño.

### Editar plantillas

Cada plantilla tiene un botón de edición con las siguientes acciones:

- **Vista previa**: Muestra el modelo de plantilla de correo guardada.
- **Copiar**: Permite copiar la plantilla.
- **Borrar**: Borra la plantilla


:::warning Atención
Cuando haces una campaña, recuerda agregar en el footer toda la información legal que exige la regulación de tu país en cuanto a correos masivos.

Para automatizar la inserción del Footer, lee [Configuración de Realms](/es/platform/customers/settings#correos)
:::

## Desinscripciones

En esta sección, encuentras una lista de los usuarios que se han dado de baja de las campañas de correos o notificaciones a través de su perfil web.

Usa la barra de búsqueda para encontrar un usuario específico. Puedes ingresar su nombre o correo electrónico.

Cuando haces click en el nombre del usuario, puedes ver la [ficha de usuario](/es/platform/customers/users#ficha-de-usuarios) con todas las actividades que ha hecho en la plataforma.

Al final de cada nombre de usuario hay un botón que te permite reinscribir al usuario a cualquier campaña del sitio.

:::danger Peligro
Hacer una reinscripción sin autorización del usuario puede causar problemas legales. Revisa la regulación sobre correos masivos en cada país.
:::
