---
search: true
---

# WebHooks

La plataforma también permite el uso de Webhooks para ciertos eventos específicos dentro de tu cuenta. Para ello, se deben habilitar y configurar desde la sección Webhooks en la configuración de la cuenta.

Un webhook es una acción _POST_ automática a una URL determinada con información determinada.

Para habilitarlos, debes checkear la parte superior de la página y después proceder a crear todos los webhooks que quieras.

Los webhooks se pueden crear a partir de acciones de aplicaciones, espacios o reinos. El **Tipo de contexto** que elijas define qué disparadores te ofrece el selector **Tipo de log**: cada contexto tiene su propio catálogo y ningún disparador está en todos.

Al crear un webhook, debes tener la URL a la que quieres enviar la información, elegir el **Tipo de contexto**, acotar el **Contexto** a una aplicación, un espacio o un reino en particular, o dejar **Todos** para escuchar a todos los de ese tipo, seleccionar en **Tipo de log** uno o más disparadores, porque el selector es múltiple, y luego guardar los cambios.

Luego de esto, podrás ver en la lista todos los webhooks que estén activos.

:::warning Attention
En la versión 10.1.0 se agregan los Webhooks de reinos para los eventos de usuarios finales. Esos Webhooks tienen que volver a ser creados en el reino en caso de ser usados desde versiones anteriores.
:::


### Crear un Webhook Administrativo

Llama a tus canales de gestión a través de un webhook.

Para crear un webhook, sigue estos pasos:

1. Desde la página de administración, haz click en **Configuración**, luego selecciona **Webhooks**.
2. Haz click en **+ Nuevo Webhook**
3. Escribe el nombre y la URL a la cual quieres llamar
4. En **Tipo de contexto**, elige **Aplicación**, **Espacio** o **Reino**
5. En **Contexto**, elige la aplicación, el espacio o el reino que activará el webhook, o deja **Todos**
6. En **Tipo de log**, selecciona uno o más disparadores del catálogo del contexto que elegiste
7. Agrega los headers necesarios para la llamada
8. Haz click en **Guardar**


:::tip Tip
El valor de la columna `trigger_uid` es el que viaja en el campo `trigger_uid` del payload, así que es el dato con el que tu endpoint distingue un disparador de otro.
:::

Los disparadores del tipo de contexto **Aplicación** son:

| Disparador | `trigger_uid` |
| --- | --- |
| Página creada | `layout_page_created_log` |
| Página eliminada | `layout_page_deleted_log` |
| Página publicada | `layout_page_published_log` |
| Page despublicada | `layout_page_unpublished_log` |
| Página actualizada | `layout_page_updated_log` |
| Menú aprobado | `menu_approved_log` |
| Navegación publicada | `menu_published_log` |
| Navigation enviado a revisión | `menu_sent_to_review_log` |
| Menú de navegación actualizado | `menu_updated_log` |
| Aplicación creada | `site_created_log` |
| Aplicación borrada | `site_deleted_log` |
| Aplicación deshabilitada | `site_disabled_log` |
| Aplicación habilitada | `site_enabled_log` |
| Aplicación en estado editable | `site_draft_log` |
| Aplicación actualizada | `site_updated_log` |
| Plantilla aprobada | `site_template_approved_log` |
| Plantilla enviada a revisión | `site_template_sent_to_review_log` |
| Plantilla actualizada | `site_template_updated_log` |
| Plantilla publicada | `site_template_published_log` |
| Widget aprobado | `widget_definition_approved_log` |
| Widget clonado | `widget_definition_cloned_log` |
| Widget creado | `widget_definition_created_log` |
| Widget publicado | `widget_definition_published_log` |
| Widget restaurado | `widget_definition_restored_log` |
| Widget enviado a revisión | `widget_definition_sent_to_review_log` |
| Widget despublicado | `widget_definition_unpublished_log` |
| Widget actualizado | `widget_definition_updated_log` |

El inicio de sesión, el cierre de sesión y la actualización de perfil quedan registrados en la actividad, pero no son disparadores de este contexto. Si necesitas los eventos de sesión de tus usuarios finales, crea el webhook desde el reino.

Los disparadores del tipo de contexto **Espacio** son:

| Disparador | `trigger_uid` |
| --- | --- |
| Categoría creada | `category_created_log` |
| Categoría borrada | `category_deleted_log` |
| Categoría actualizada | `category_updated_log` |
| Entrada aprobada | `entry_approved_log` |
| Entrada creada | `entry_created_log` |
| Entrada publicada | `entry_published_log` |
| Entrada enviada a revisión | `entry_sent_to_review_log` |
| Entrada despublicada | `entry_unpublished_log` |
| Entrada actualizada | `entry_updated_log` |
| Espacio creado | `space_created_log` |
| Espacio modificado | `space_updated_log` |
| Tipo creado | `type_created_log` |
| Tipo eliminado | `type_deleted_log` |
| Tipo modificado | `type_updated_log` |
| Tipo enviado para reindexar | `type_reindex_log` |
| Se canceló la reindexación del tipo | `type_cancel_reindex_log` |
| Archivo creado | `asset_created_log` |
| Archivo actualizado | `asset_updated_log` |


Los disparadores del tipo de contexto **Reino** son:

| Disparador | `trigger_uid` |
| --- | --- |
| Usuario creado | `user_created_log` |
| Usuario actualizado | `user_updated_log` |
| Usuario habilitado | `user_enabled_log` |
| Usuario deshabilitado | `user_disabled_log` |
| Usuario borrado | `user_deleted_log` |

:::warning Atención
Estos cinco disparadores son los únicos que ofrece el tipo de contexto **Reino** desde **Configuración** > **Webhooks**, y cubren la gestión de usuarios que hace tu equipo. No son los mismos que ves en **Configuración del reino** > **Webhooks**, que escucha los eventos de los usuarios finales del reino y no incluye **Usuario deshabilitado**. Si necesitas los dos grupos de eventos, crea un webhook en cada lugar.
:::

### Ejemplo de Payload

``` javascript
{
   "id":1552,
   "account_id":2,
   "site_id":null,
   "user_id":2,
   "type":null,
   "value_1":"6111a767-71dc-485c-bea3-80229edf7450",
   "value_2":"the-new-type",
   "value_3":"space-test",
   "request_ip":"127.0.0.1",
   "request_user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
   "loggeable_id":5,
   "loggeable_type":"Content::Entry",
   "options":{
      "title":"test entries (6111a767-71dc-485c-bea3-80229edf7450)}"
   },
   "created_at":"2021-08-13T17:08:46.000Z",
   "user_type":"AdminUser",
   "space_id":1,
   "log_type_id":262,
   "realm_id":null,
   "trigger_uid":"entry_created_log",
   "trigger_name":"Entry created log",
   "trigger_entity":"Content::Entry",
   "trigger_entity_id":5,
   "trigger_entry_uuid":"6111a767-71dc-485c-bea3-80229edf7450",
   "trigger_content_uuid":"the-new-type",
   "trigger_entry_space_uid":"space-test"
}
```
### Crear un Webhook de Reino

Llama a tus canales de gestión a través de un webhook.

Para crear un webhook, sigue estos pasos:

1. Desde un reino, haz click en **Configuración del reino**, luego selecciona **Webhooks**
2. Haz click en **+ Nuevo Webhook**.
3. Escribe el nombre y la URL a la cual quieres llamar.
4. En **Tipo de log**, selecciona uno o más disparadores del catálogo de eventos de usuario final.
5. Agrega los headers necesarios para la llamada. 
6. Haz click en **Guardar**.

Los disparadores disponibles son los 24 eventos de usuario final del reino:

| Disparador | `trigger_uid` | Se dispara cuando |
| --- | --- | --- |
| Respuesta de formulario creada | `form_response_created_log` | Un usuario final envía una respuesta a un formulario. |
| Respuesta de formulario actualizada | `form_response_updated_log` | Se actualiza una respuesta de formulario ya enviada. |
| Respuesta de originación creada | `origination_submission_created_log` | Se crea la respuesta de una originación. |
| Respuesta de originación iniciada | `origination_submission_started_log` | El usuario final entra a la primera tarea y la respuesta queda iniciada. |
| Tarea de respuesta de originación enviada | `origination_submission_task_submitted_log` | El usuario final envía una tarea de la respuesta. |
| Respuesta de originación completada | `origination_submission_completed_log` | La respuesta queda completada. |
| Respuesta de originación cancelada | `origination_submission_canceled_log` | Alguien cancela la respuesta. |
| Respuesta de originación cancelada por vencimiento | `origination_submission_canceled_overdue_log` | La plataforma cancela sola una respuesta que pasó su fecha de vencimiento. Nuevo en 10.2. |
| Tarea de respuesta de originación actualizada | `origination_submission_task_updated_log` | Se actualizan los datos de una tarea de la respuesta. |
| Respuesta a tarea de originación iniciada | `origination_task_response_started_log` | Una tarea de la respuesta pasa a en curso. Nuevo en 10.2. |
| Respuesta a tarea de originación completada | `origination_task_response_completed_log` | Una tarea de la respuesta queda completada. Nuevo en 10.2. |
| Respuesta a tarea de originación reabierta | `origination_task_response_reopened_log` | Una tarea ya completada vuelve a quedar en curso. Nuevo en 10.2. |
| Respuesta a tarea de originación asignada | `origination_task_response_assigned_log` | Cambia el responsable asignado a una tarea de la respuesta. Nuevo en 10.2. |
| Inicio de sesión | `user_login_log` | Un usuario final ingresa. |
| Iniciar sesión con código | `user_otp_login_log` | Se verifica correctamente el código de un usuario final. |
| Cerrar sesión | `user_logout_log` | Un usuario final cierra su sesión. |
| Error al intentar iniciar sesión | `user_login_attempt_failed_log` | Falla un intento de inicio de sesión. |
| Error al intentar iniciar sesión con código | `user_otp_login_attempt_failed_log` | No se puede verificar el código introducido. |
| Usuario creado | `user_created_log` | Se crea un usuario final. |
| Usuario actualizado | `user_updated_log` | Se actualiza un usuario final. |
| Usuario habilitado | `user_enabled_log` | Se habilita un usuario final. |
| Registro de usuario | `user_signup_log` | Un usuario final se registra. |
| Restaurar contraseña | `user_password_reset_log` | Se solicita la restauración de la contraseña. |
| Usuario borrado | `user_deleted_log` | Se borra un usuario final. |

:::warning Atención
Este formulario no tiene selectores de **Tipo de contexto** ni de **Contexto**: el webhook queda siempre acotado al reino desde el que lo creas. **Usuario deshabilitado** no está en esta lista, porque solo existe en los webhooks de tipo de contexto **Reino** que creas desde **Configuración** > **Webhooks**.
:::

:::tip Tip
Un mismo disparador puede llegarte en dos formas. Si la acción la hace el usuario final desde el sitio, el payload es compacto y trae el evento en `e_c` y `e_a`. Si la hace un administrador desde el panel, o si la plataforma la hace sola, el payload trae el log completo, con `trigger_uid`, `trigger_entity` y el detalle del evento dentro de `options`. Deja tu endpoint preparado para las dos.
:::

Estos son los payloads de ejemplo de los disparadores de originación:

- Respuesta de originación creada
``` javascript
{
   "ip":"172.71.194.146",
   "ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
   "e_a":"created_log",
   "e_c":"origination_submission",
   "uid":2300345,
   "idsite":4521,
   "realm_id":681,
   "realm_uid":"jordana",
   "account_id":381,
   "origination_uid":"ori",
   "submission_uuid":"4c23599f-2aa6-4a8c-b2ae-66be46b7b938"
}
```
- Respuesta de originación iniciada
``` javascript
{
   "ip":"172.71.194.146",
   "ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
   "e_a":"started_log",
   "e_c":"origination_submission",
   "uid":2300345,
   "idsite":4521,
   "realm_id":681,
   "realm_uid":"jordana",
   "account_id":381,
   "origination_uid":"ori",
   "submission_uuid":"4c23599f-2aa6-4a8c-b2ae-66be46b7b938"
}
```
- Tarea de respuesta de originación enviada
``` javascript
{
   "ip":"172.71.195.36",
   "ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
   "e_a":"task_submitted_log",
   "e_c":"origination_submission",
   "uid":2300345,
   "idsite":4521,
   "task_id":157,
   "realm_id":681,
   "realm_uid":"jordana",
   "account_id":381,
   "origination_uid":"ori",
   "submission_uuid":"4c23599f-2aa6-4a8c-b2ae-66be46b7b938"
}
```
- Respuesta de originación completada
``` javascript
{
   "id":35914440,
   "account_id":381,
   "site_id":null,
   "user_id":1177351,
   "value_1":null,
   "value_2":null,
   "value_3":null,
   "request_ip":"172.71.195.87",
   "request_user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
   "loggeable_id":419,
   "loggeable_type":"Origination::Submission",
   "options":{"title":null},
   "created_at":"2025-06-16T10:50:22.000-04:00",
   "space_id":null,
   "log_type_id":415405,
   "realm_id":681,
   "trigger_uid":"origination_submission_completed_log",
   "trigger_name":"Origination submission completed log",
   "trigger_entity":"Origination::Submission",
   "trigger_entity_id":419,
   "trigger_entry_uuid":null,
   "trigger_content_uuid":null,
   "trigger_entry_space_uid":null
}
```
- Respuesta de originación cancelada
``` javascript
{
   "ip":"172.71.195.41",
   "ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
   "e_a":"canceled_log",
   "e_c":"origination_submission",
   "uid":2300345,
   "idsite":4521,
   "realm_id":681,
   "realm_uid":"jordana",
   "account_id":381,
   "origination_uid":"ori",
   "submission_uuid":"04bf572a-9e00-4474-ae8a-6a0bc17d4c1a"
}
```
- Respuesta de originación cancelada por vencimiento
``` javascript
{
   "id":35914462,
   "account_id":381,
   "automated":true,
   "site_id":null,
   "space_id":null,
   "user_id":null,
   "value_1":null,
   "value_2":null,
   "value_3":null,
   "request_ip":null,
   "request_user_agent":null,
   "loggeable_id":419,
   "loggeable_type":"Origination::Submission",
   "options":null,
   "created_at":"2026-07-02T09:15:04.000-04:00",
   "log_type_id":415412,
   "realm_id":681,
   "trigger_uid":"origination_submission_canceled_overdue_log",
   "trigger_name":"Origination submission canceled overdue log",
   "trigger_entity":"Origination::Submission",
   "trigger_entity_id":419,
   "trigger_entry_uuid":null,
   "trigger_content_uuid":null,
   "trigger_entry_space_uid":null
}
```
Este disparador es el único de la lista que nadie ejecuta: llega con `automated` en `true` y sin `user_id`, porque es la plataforma la que cancela la respuesta vencida.

- Respuesta a tarea de originación completada
``` javascript
{
   "e_c":"origination_task_response",
   "e_a":"completed_log",
   "account_id":381,
   "uid":2300345,
   "idsite":4521,
   "submission_uuid":"4c23599f-2aa6-4a8c-b2ae-66be46b7b938",
   "origination_uid":"ori",
   "realm_uid":"jordana",
   "realm_id":681,
   "task_uid":"datos-personales",
   "task_response_id":9871,
   "task_response_type":"Origination::UserInputTaskResponse",
   "ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
   "ip":"172.71.194.146"
}
```
Los disparadores de respuesta a tarea de originación iniciada, reabierta y asignada usan la misma estructura, con `e_a` en `started_log`, `reopened_log` o `assigned_log`, y `task_uid` te dice a qué tarea de la originación corresponde el evento.

:::tip Tip
El webhook es llamado a través de un POST cuando se genera un log del tipo seleccionado. Una vez creado el webhook, podrás enviar una notificación de prueba con información falsa para probar que tu URL está recibiendo correctamente los POSTs desde Modyo.
:::
