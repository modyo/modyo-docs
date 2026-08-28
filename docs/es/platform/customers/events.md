---
search: true
---

# Eventos

La sección **Eventos** contiene un registro cronológico de las actividades y sucesos realizados por los usuarios en la plataforma. Este historial detallado es útil para tareas de seguimiento y monitoreo.

En la interfaz de eventos, puedes ver una lista de los usuarios que han llevado a cabo tareas, qué tipos de tareas y cuándo las llevaron a cabo.

## Filtros Disponibles

Para encontrar eventos específicos, utiliza los filtros disponibles:

- **Fecha**: Filtra por un período específico o selecciona una fecha de inicio y finalización.
- **Tipo**: Filtra por un tipo de evento, como **Inicio de sesión**, **Email entregado** o **Respuesta de formulario creada**. La lista es dinámica: sólo ofrece los tipos que ya ocurrieron al menos una vez en el reino, así que un reino recién creado la ve casi vacía. El catálogo completo está en [Tipos de evento](#tipos-de-evento).
- **Usuario**: Busca eventos relacionados con un usuario específico o selecciona todos los usuarios del reino.

## Columnas del listado

Cada fila del listado es un evento. Estas son sus columnas:

| Columna | Qué muestra |
|---------|-------------|
| **Usuario** | Nombre y correo del usuario del reino que generó el evento. Cuando el evento no quedó asociado a ningún usuario, muestra **Usuario no registrado**. |
| **Tipo** | Nombre del tipo de evento, ya traducido. Por ejemplo, **Inicio de sesión** u **Orden completada**. |
| **Descripción** | Reino al que pertenece el evento, con el formato `Reino: nombre del reino`. |
| **Origen** | No aplica a los eventos de un reino: siempre muestra `-`. |
| **Contexto** | Reino en el que ocurrió el evento. |
| **Creado el** | Fecha y hora en que se registró el evento. |

Para entrar a esta pantalla, el administrador necesita el permiso **Ver Eventos** sobre el reino.

## Detalle de un evento

Haz clic sobre el usuario de una fila para abrir **Detalles del log**, con todos los datos que se guardaron junto al evento. Siempre aparecen `event_category`, `event_action` y `event_type`, que son la categoría, la acción y el tipo, y `user_agent`, con el navegador, el sistema operativo y el tipo de dispositivo desde el que se generó. El resto de los campos depende del tipo de evento.

Dos de ellos son los que más se usan al auditar:

- `authentication_method`: método con que el usuario inició sesión, en los eventos de sesión. Toma el valor `direct` para el formulario del reino, `otp` para el inicio de sesión con código y `saml`, `openidc`, `oauth2` o `google_oauth2` para los proveedores de identidad.
- `impersonator_id` e `impersonator_name`: administrador que estaba [impersonando al usuario](/es/platform/customers/users.html#impersonado) cuando ocurrió el evento. Sólo aparecen cuando la acción se hizo durante una impersonación, así que su presencia es la marca de que el evento no lo generó el usuario por sí mismo.

## Tipos de evento

El tipo de un evento se arma con la categoría y la acción que lo generaron, unidas por un guion bajo: la categoría `user` con la acción `login_log` da el tipo `user_login_log`, que en el panel se muestra como **Inicio de sesión**.

Estos son los tipos que la plataforma registra por sí sola, agrupados por módulo. Recuerda que el filtro **Tipo** sólo ofrece los que ya ocurrieron en el reino.

### Sesión y cuenta

| Tipo | Etiqueta en el panel |
|------|----------------------|
| `user_login_log` | Inicio de sesión |
| `user_logout_log` | Cerrar sesión |
| `user_login_attempt_failed_log` | Error al intentar iniciar sesión |
| `user_otp_login_log` | Iniciar sesión con código |
| `user_otp_login_attempt_failed_log` | Error al intentar iniciar sesión con código |
| `user_created_log` | Usuario creado |
| `user_created_via_form_log` | Usuario creado |
| `user_created_via_order_log` | Usuario creado |
| `user_created_via_invitation_log` | Usuario creado |
| `user_signup_log` | Registro de usuario |
| `user_updated_log` | Usuario actualizado |
| `user_enabled_log` | Usuario habilitado |
| `user_deleted_log` | Usuario borrado |
| `user_password_reset_log` | Restaurar contraseña |
| `user_web_push_subscribed` | Suscripción a notificaciones WebPush |

Las cuatro variantes de alta comparten la etiqueta **Usuario creado** y solo se distinguen por su tipo: `user_created_log` es el tipo base, `user_created_via_form_log` corresponde al usuario creado al enviar un formulario, `user_created_via_order_log` al generarse una orden y `user_created_via_invitation_log` al invitarlo como participante de una originación. Como la etiqueta es la misma en las cuatro, el tipo es el único dato que te dice por dónde entró el usuario.

### Correo

Los genera el proveedor de correo al informar qué pasó con cada envío.

| Tipo | Etiqueta en el panel |
|------|----------------------|
| `email_delivered_log` | Email entregado |
| `email_opened_log` | Email abierto |
| `email_click_log` | Email cliqueado |
| `email_dropped_log` | Email no entregado |
| `email_bounce_log` | Email devuelto |
| `email_unsubscribed_log` | Suscripción de email terminada |
| `email_spam_report_log` | Email reportado como spam |

### Notificaciones

| Tipo | Etiqueta en el panel |
|------|----------------------|
| `notification_opened_log` | Notificación leída |

### Formularios

| Tipo | Etiqueta en el panel |
|------|----------------------|
| `form_response_created_log` | Respuesta de formulario creada |
| `form_response_updated_log` | Respuesta de formulario actualizada |

### Originación

| Tipo | Etiqueta en el panel |
|------|----------------------|
| `origination_submission_created_log` | Respuesta de originación creada |
| `origination_submission_started_log` | Respuesta de originación iniciada |
| `origination_submission_canceled_log` | Respuesta de originación cancelada |
| `origination_submission_completed_log` | Respuesta de originación completada |
| `origination_submission_task_submitted_log` | Tarea de respuesta de originación enviada |
| `origination_submission_task_updated_log` | Tarea de respuesta de originación actualizada |
| `origination_submission_task_validation_deleted_log` | Validación de tarea de respuesta de originación eliminada |
| `origination_task_response_started_log` | Respuesta a tarea de originación iniciada |
| `origination_task_response_completed_log` | Respuesta a tarea de originación completada |
| `origination_task_response_auto_completed_log` | Respuesta a tarea de originación completada automáticamente |
| `origination_task_response_reopened_log` | Respuesta a tarea de originación reabierta |
| `origination_invitation_invitation_sent_log` | Invitación a respuesta de originación enviada |
| `origination_invitation_invitation_resent_log` | Invitación a respuesta de originación reenviada |
| `origination_invitation_invitation_cancelled_log` | Invitación a respuesta de originación cancelada |

Los correos de una respuesta de originación tienen sus propios tipos, con las mismas siete situaciones que los del módulo de correo:

| Tipo | Etiqueta en el panel |
|------|----------------------|
| `origination_submission_email_delivered_log` | Correo electrónico de respuesta entregado |
| `origination_submission_email_opened_log` | Correo electrónico de respuesta abierto |
| `origination_submission_email_click_log` | Clic en el correo electrónico de respuesta |
| `origination_submission_email_dropped_log` | Correo electrónico de respuesta no entregado |
| `origination_submission_email_unsubscribed_log` | Correo electrónico de respuesta desuscrito |
| `origination_submission_email_spam_report_log` | Informe de spam por correo electrónico de respuesta |

### Identificadores de trazabilidad de originación

Los eventos del ámbito de originación traen, además de sus datos propios, los identificadores de las entidades que describen: `origination_uuid` y `origination_uid` para el flujo, `submission_uuid` para la respuesta y `task_uid` para la tarea. Cada uno aparece solo cuando aplica al hecho registrado, y el que no aplica no viaja en el payload.

En los eventos de negocio estos identificadores son campos de primer nivel del payload. En los registros de actividad viajan dentro de los metadatos del registro. Y en los [webhooks](/es/platform/core/webhooks.html) se entregan siempre en la raíz del payload, de modo que un consumidor los lee en el mismo lugar sin importar por qué canal llegó el aviso.

El detalle de cada identificador, el caso de una originación eliminada y el alcance temporal del cambio están en [Identificadores de trazabilidad de originación](/es/platform/core/activity-logs.html#identificadores-de-trazabilidad-de-originacion).

### Órdenes y pagos

| Tipo | Etiqueta en el panel |
|------|----------------------|
| `order_created_log` | Orden creada |
| `order_placed_log` | Orden realizada |
| `order_placed_error_log` | Error al hacer la orden |
| `order_rejected_log` | Orden rechazada |
| `order_rejected_error_log` | Error en orden rechazada |
| `order_confirming_log` | Confirmando orden |
| `order_completed_log` | Orden completada |
| `order_confirmation_failed_log` | Confirmación de orden fallida |
| `order_tracking_log` | Log de seguimiento de orden |
| `order_tracking_error_log` | Error al procesar orden |
| `tokenized_card_created_log` | Tarjeta tokenizada creada |
| `tokenized_card_activated_log` | Tarjeta tokenizada activada |
| `tokenized_card_removed_log` | Tarjeta tokenizada removida |
| `tokenized_card_inscription_failed_log` | Inscripción de tarjeta tokenizada fallida |
| `tokenized_card_unsubscription_failed_log` | Desuscripción de tarjeta tokenizada fallida |

### Proveedores de identidad

| Tipo | Etiqueta en el panel |
|------|----------------------|
| `identity_provider_sync_user_failed_log` | Falló la sincronización del usuario del proveedor de identidad |

## Exportar Eventos

Marca la casilla al lado de uno o varios eventos y haz clic en el botón **Exportar**, ubicado debajo del listado para descargar un archivo en formato **Excel** o **CSV** con los eventos seleccionados.

## Registrar eventos desde un sitio

`POST SITE_URL/events`

Cualquier página de un sitio de Modyo puede registrar sus propios eventos de negocio con esta llamada. Quedan en el mismo listado de **Eventos** del reino que los que registra la plataforma y alimentan los tableros de Insights, así que es la manera de instrumentar la analítica de negocio de tu propia aplicación.

La petición va contra la URL del sitio, no contra la de la cuenta, y necesita la sesión del usuario en el reino. Un evento enviado sin usuario autenticado se rechaza con `422` y este cuerpo:

```json
{
  "errors": ["No se permiten los eventos anónimos"]
}
```

### Parámetros aceptados

El endpoint acepta un conjunto cerrado de parámetros. Cualquier otro que envíes se descarta en silencio y el evento se guarda igual, sin errores.

| Parámetro | Para qué sirve |
|-----------|----------------|
| `e_c` | Categoría del evento. |
| `e_a` | Acción del evento. |
| `url` | URL de la página donde ocurrió el evento. |
| `urlref` | URL desde la que llegó el usuario. |
| `link` | URL del enlace externo que se siguió. |
| `download` | URL del archivo que se descargó. |
| `action_name` | Título de la página. |
| `pv_id` | Identificador de la vista de página. |
| `res` | Resolución de pantalla. |
| `idgoal` | Identificador del objetivo de conversión. |
| `revenue` | Monto asociado a la conversión. |
| `cp_id` | Identificador de la campaña. |
| `em_tp` | Tipo de correo. |
| `em_rec` | Correo del destinatario. |
| `fr_id` | Identificador de la respuesta de formulario. |
| `fr_fid` | Identificador del formulario. |
| `order_id` | Identificador de la orden. |
| `order_pm` | Medio de pago de la orden. |
| `card_id` | Identificador de la tarjeta tokenizada. |
| `origination_uid` | Identificador de la originación. |
| `submission_uuid` | Identificador de la respuesta de originación. |
| `task_id` y `task_uuid` | Identificadores de la tarea de la originación. |
| `au_mt` | Método de autenticación. |
| `au_err` | Detalle del error de autenticación. |
| `pf_net`, `pf_srv`, `pf_tfr`, `pf_dm1`, `pf_dm2` y `pf_onl` | Tiempos de red, de servidor, de transferencia, de procesamiento del DOM, de DOM completo y de carga de la página. |
| `idsite`, `uid`, `ua` y `_id` | Sitio, usuario, navegador y visitante. Modyo los completa con el contexto de la petición, así que no necesitas enviarlos. |

Además de lo que envíes, Modyo guarda el reino del usuario, la IP de la petición y, si un administrador está impersonando al usuario, quién es.

### El tipo del evento

El tipo no se envía: Modyo lo arma uniendo `e_c` y `e_a` con un guion bajo. Un evento con `e_c=simulator` y `e_a=quote_requested` queda con el tipo `simulator_quote_requested`, y ése es el valor por el que se filtra y se agrupa después.

:::warning Atención
Un evento sin `e_c` ni `e_a` se guarda, pero se queda fuera del listado de **Eventos** y de la API: ambos muestran sólo eventos que tengan tipo. Envía siempre al menos `e_c`.
:::

:::warning Atención
Los tipos propios no tienen etiqueta traducida en el panel, así que la columna **Tipo** del listado y el campo `title` de la API llegan vacíos para ellos. Para reconocerlos, usa el campo `event_type` del detalle del evento.
:::

### Respuesta

Con `201`, el cuerpo devuelve el evento tal como quedó guardado: su `id`, el `account_id`, el `created_at` y el objeto `info` con los parámetros aceptados más el contexto que completó Modyo.

:::tip Tip
El evento se guarda de inmediato, pero tarda unos segundos en aparecer en el listado de **Eventos** y en la API, porque el registro se procesa de forma diferida. Si estás probando la instrumentación, espera un momento antes de dar por perdido un evento.
:::

:::tip Tip
Las páginas de un sitio traen un objeto global `_paq` ya apuntando a este mismo endpoint. Es un detalle interno de la instrumentación de la plataforma y no un contrato estable, así que para tus propios eventos usa la llamada directa a `POST SITE_URL/events`.
:::

## Consultar los eventos de un usuario

Una aplicación puede leer los eventos del usuario que tiene la sesión iniciada con `GET ACCOUNT_URL/api/customers/realms/{realm_uid}/events`. El contrato completo está en [Eventos del usuario](/es/platform/customers/api.html#eventos-del-usuario).