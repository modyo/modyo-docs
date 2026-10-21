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
| Tarea de respuesta de originación enviada | `origination_submission_task_submitted_log` | El usuario final envía una tarea de la respuesta con el botón **Siguiente**. En un code snippet con **Bloquear las respuestas al completar**, también se registra cuando el code snippet completa la tarea con su POST, y en ese caso **Siguiente** no lo vuelve a registrar. |
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

:::tip Tip
Para saber cuándo un code snippet queda completado, usa **Respuesta a tarea de originación completada**: se registra tanto si la tarea se completa con el POST del code snippet como con el botón **Siguiente**. **Tarea de respuesta de originación enviada** se registra cuando el usuario presiona **Siguiente**, y un code snippet puede completar su tarea sin pasar por ese botón. La excepción son los code snippets con **Bloquear las respuestas al completar**: si el code snippet completa la tarea con su POST, el evento se registra en ese momento y **Siguiente** no lo vuelve a registrar. Revisa [Completar la tarea desde el code snippet](/es/platform/customers/origination.html#completar-la-tarea-desde-el-code-snippet).
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

### Habilitar o deshabilitar un webhook

Cada webhook tiene el switch **Habilitado** en su formulario. Un webhook deshabilitado deja de enviar notificaciones:

- Sus entregas en estado **Pendiente** o **Programada** pasan a **Cancelada**, con el motivo **El webhook fue deshabilitado**.
- Los eventos que ocurren mientras está deshabilitado no generan entregas, así que después no se pueden re-disparar.
- Sus entregas no se pueden re-disparar hasta que lo vuelvas a habilitar.

Al volver a habilitarlo, las entregas canceladas no se reenvían solas: si las necesitas, [re-dispáralas](#re-disparar-entregas).

En la columna **Estado** del listado de webhooks ves si cada uno está **Activo**, **Deshabilitado** o [**Degradado**](#webhooks-degradados).

### Probar un webhook

En las acciones del webhook, en el listado, haz click en **Enviar notificación de prueba**. La plataforma envía un único POST a la URL del webhook con datos ficticios del primer disparador configurado y con los mismos headers que una entrega real, y te muestra el resultado:

- Si tu endpoint responde con un código 2xx, ves **Notificación de prueba enviada**.
- Si responde con otro código, ves **El endpoint respondió con el estado HTTP** seguido del código, y si la comunicación falla, el motivo, por ejemplo **El endpoint no respondió a tiempo**.

La notificación de prueba no queda en el [registro de entregas](#registro-de-entregas), lleva un `webhook-id` distinto en cada prueba y se envía aunque el webhook esté deshabilitado.

### Entrega de las notificaciones

Modyo envía cada notificación al menos una vez: si tu endpoint no la recibe, la reintenta, así que una misma notificación puede llegarte más de una vez. Cada entrega lleva un identificador estable para que tu endpoint la procese una sola vez.

#### Headers de cada entrega

Además de los headers que configuraste en el webhook, cada POST lleva estos headers:

| Header | Valor |
| --- | --- |
| `webhook-id` | Identificador único de la entrega. Es el mismo en todos sus reintentos y al re-dispararla, y es distinto para cada webhook suscrito a un mismo evento. |
| `webhook-timestamp` | Momento del intento, en segundos Unix. No es la fecha del evento. |
| `modyo-event-type` | El `trigger_uid` del disparador, por ejemplo `entry_published_log`. |
| `modyo-attempt` | Número del intento. No vuelve a 1 al re-disparar una entrega: sigue contando desde los intentos ya hechos. |
| `content-type` | Siempre `application/json`. |
| `user-agent` | `Modyo-Webhooks/1.0`, salvo que configures tu propio `User-Agent` en el webhook. |

```
webhook-id: 4f9c2b1e-7d3a-4b8e-9a61-2c5e8f0d1a7b
webhook-timestamp: 1760620800
modyo-event-type: entry_published_log
modyo-attempt: 1
content-type: application/json
user-agent: Modyo-Webhooks/1.0
```

Los prefijos `webhook-` y `modyo-` están reservados para estos headers, así que no puedes usarlos en los nombres de los headers que agregas al webhook. Si la URL del webhook incluye usuario y contraseña, por ejemplo `https://usuario:clave@mi-dominio.com/webhooks`, Modyo los envía en el header `Authorization` con autenticación básica.

Las notificaciones no van firmadas. Para que tu endpoint rechace las llamadas que no vienen de Modyo, agrega al webhook un header con un valor secreto y valídalo en cada llamada.

#### Respuesta de tu endpoint y reintentos

Tu endpoint tiene unos 5 segundos para responder. La entrega se da por exitosa con cualquier código 2xx, y el resultado de cada intento define qué pasa después:

- **Se reintenta**: si el endpoint responde con un código 5xx, `408` o `429`, si no responde a tiempo o si falla la conexión, la resolución del host o la conexión segura.
- **No se reintenta**: si el endpoint responde con un código 3xx, porque las redirecciones no se siguen, o con cualquier otro código 4xx. Tampoco si la URL o un header del webhook no son válidos. La entrega queda **Fallida**.

Por defecto, Modyo hace hasta 7 intentos: el primero apenas ocurre el evento y los reintentos después de esperas de unos 5 segundos, 5 minutos, 30 minutos, 2 horas, 5 horas y 10 horas, con una pequeña variación aleatoria. Si tu endpoint responde `408` o `429` con el header `Retry-After`, Modyo espera lo que indica, hasta un máximo de 10 horas. Si se agotan los intentos, la entrega queda **Agotada** y puedes [re-dispararla](#re-disparar-entregas).

Cada intento usa la URL y los headers vigentes del webhook, así que si los corriges, los reintentos pendientes ya salen con la configuración nueva. El cuerpo de la notificación se arma de nuevo en cada intento a partir del evento y mantiene la misma forma de los [ejemplos de payload](#ejemplo-de-payload).

#### Procesar cada entrega una sola vez

Para no procesar dos veces la misma notificación:

- Guarda el `webhook-id` de cada notificación que procesas con un índice único y descarta las que ya tienes.
- No uses `modyo-attempt` ni `webhook-timestamp` como parte de esa clave, porque cambian en cada intento.
- No compares el cuerpo completo: una misma entrega puede llegar con bytes distintos entre intentos si cambió la forma en que se serializa el evento.
- Responde con un código 2xx en cuanto recibas la notificación y procésala después, para no exceder el tiempo de espera y provocar reintentos innecesarios.

#### Orden de los eventos

Modyo no garantiza el orden de las notificaciones: un reintento puede llegar después de una notificación de un evento más reciente. Si el orden importa, usa la fecha del evento que viaja en el payload, como `created_at`.

### Registro de entregas

Cada vez que un evento dispara un webhook habilitado, se registra una entrega. En el listado de webhooks, haz click en **Ver entregas** en las acciones del webhook para abrir la página **Entregas**, con las columnas **Estado**, **Evento**, **Intentos**, **Último resultado**, **Creada** y **Próximo intento**. Puedes filtrar por **Estado** y por la fecha de creación, que por defecto muestra la última semana.

Con **Detalle de la entrega** ves el `webhook-id`, con un botón para copiarlo, el evento, los intentos, el último estado HTTP, el último error, la duración del intento, el cuerpo de la respuesta de tu endpoint y el payload enviado.

Las entregas terminadas se conservan por defecto 30 días desde su último cambio, y el cuerpo de la respuesta de tu endpoint, 7 días.

Para ver las entregas necesitas permiso para ver los webhooks, y para re-dispararlas, el permiso agrupado **Administrar Webhooks**. Las entregas también están disponibles en la [API de administración](/es/platform/core/api.html), bajo `/api/admin/webhooks/{webhook_id}/deliveries` para los webhooks de la cuenta y `/api/admin/customers/{realm_uid}/webhooks/{webhook_id}/deliveries` para los de un reino.

#### Estados de una entrega

- **Pendiente**: La entrega espera su envío.
- **En curso**: Modyo está enviando la notificación.
- **Programada**: Un intento falló y la entrega espera su siguiente reintento. La columna **Próximo intento** indica cuándo.
- **Entregada**: Tu endpoint respondió con un código 2xx.
- **Fallida**: Tu endpoint respondió con un error que no se reintenta, o la URL o un header del webhook no son válidos.
- **Agotada**: Se hicieron todos los intentos sin éxito.
- **Irrecuperable**: El evento o su payload ya no existen, así que la entrega no se puede re-disparar.
- **Cancelada**: El webhook se deshabilitó o se eliminó antes de completar la entrega.

#### Re-disparar entregas

Re-disparar una entrega la envía de nuevo a la URL actual del webhook, con el mismo `webhook-id`, y le da otra vez el calendario completo de reintentos. El webhook tiene que estar habilitado.

- **Una entrega**: Haz click en **Re-disparar** en una entrega **Entregada**, **Fallida**, **Agotada** o **Cancelada** y confirma.
- **Varias entregas**: Selecciónalas, o selecciona todas las que coinciden con los filtros, y usa **Re-disparo masivo**. Solo se re-disparan las entregas **Fallida**, **Agotada** o **Cancelada**, por defecto hasta 1000 por vez y a un ritmo de 60 por minuto.

Cada re-disparo queda registrado en la actividad como **Webhook re-disparado**, y el detalle de la entrega muestra cuándo y quién la re-disparó.

### Webhooks degradados

Si un webhook acumula 5 entregas **Agotada** sin ninguna entrega exitosa entre medio, queda **Degradado**. El listado de webhooks lo muestra con esa etiqueta y la fecha desde la que está degradado, y la página **Entregas** muestra un aviso.

Un webhook degradado sigue enviando el primer intento de cada evento, pero reintenta una sola vez, unas 10 horas después. Vuelve a la normalidad apenas una entrega llega con éxito o cuando haces un re-disparo masivo. Modyo nunca deshabilita un webhook por sus fallos: corrige el endpoint y re-dispara las entregas fallidas.
