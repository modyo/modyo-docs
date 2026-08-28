---
search: true
---

# Logs de Actividad

Esta sección muestra un registro cronológico detallado de las actividades realizadas en la cuenta, útil para tareas de seguimiento y monitoreo, ya que proporciona un historial detallado de esas acciones. La mayor parte corresponde a los administradores, pero desde la versión 10.2 también quedan registradas las acciones que la plataforma ejecuta por su cuenta, sin una persona detrás.

Para entrar a esta sección necesitas el permiso agrupado **Ver Logs de Actividad**. Lo que alcanzas a ver dentro de ella depende además de tus roles, con las mismas reglas de alcance que describe [Qué registros ves](/es/platform/core/api.html#que-registros-ves).

La auditabilidad que te ofrece Modyo en este espacio, garantiza la posibilidad de examinar todas las acciones realizadas por cualquier administrador. Esto es fundamental para determinar de manera precisa las responsabilidades que corresponden en cada operación.


## Sobre la Interfaz

En la interfaz de logs de actividad puedes ver quién realizó cada acción, de qué tipo fue, sobre qué objeto y en qué contexto ocurrió.

Puedes filtrar los eventos por:

- **Fecha**: Filtra por un período específico o selecciona una fecha de inicio y finalización.
- **Tipo**: Filtra por tipo de eventos, como creación, actualización o eliminación de una campaña, creación o actualización de una entrada, actualización o borrado de un sitio, habilitación de usuario, entre otros. El desplegable no lista el catálogo completo: solo ofrece los tipos de los que ya existe al menos un registro en tu cuenta, hasta un máximo de 100.
- **Administrador**: Selecciona un administrador en específico para ver solo sus actividades, elige **Sistema** para aislar las acciones automáticas de la plataforma, o deja el filtro sin selección para ver todas las actividades. Este filtro aparece solo si tu rol incluye el permiso agrupado **Administrar Equipo**.

:::tip Tip
Los registros se incorporan al listado y al desplegable del filtro **Tipo** unos segundos después de que ocurre la acción. Si acabas de ejecutar algo y todavía no lo ves, recarga la pantalla.
:::

### Columnas del listado

| Columna | Qué muestra |
| --- | --- |
| **Usuario** | El administrador que ejecutó la acción, con su avatar y su correo. Si la acción fue automática, muestra **Sistema** con un ícono de engranaje y sin correo. Si el registro no tiene administrador ni marca de acción automática, muestra **Usuario no registrado**. |
| **Tipo** | El nombre visible del tipo de evento, por ejemplo *Entrada publicada* o *Aplicación creada*. |
| **Descripción** | La frase que resume el evento, con enlaces al autor, al objeto afectado y al contexto. |
| **Origen** | El tipo de objeto sobre el que se actuó: *Entrada*, *Formulario*, *Widget*, *Categoría*, *Miembro del equipo*, *Respuesta de originación*, y así con el resto. Muestra un guion cuando el evento no apunta a ningún objeto. |
| **Contexto** | Dónde ocurrió la acción: **Espacio**, **Reino** o **Aplicación** seguido del nombre respectivo, o **Cuenta** cuando la acción no pertenece a ninguno de los tres. |
| **Creado el** | Fecha y hora del evento. |

### Detalle del evento

Haz click en la fila de un registro para abrir la ventana **Detalles del log**, que muestra la información completa del evento tal como quedó guardada, incluida la que el listado no alcanza a mostrar:

- El identificador del registro y el identificador de su tipo, que es el mismo valor que usan el API y los webhooks.
- El objeto afectado (`loggeable_type` y `loggeable_id`) y el contexto (`site_id`, `space_id`, `realm_id` y sus nombres).
- La dirección IP y el agente de usuario desde donde se ejecutó la acción.
- La marca `automated`, que indica si la acción fue automática.
- El bloque `options` con los datos propios del evento. Cuando la acción modificó un objeto, `options` trae los cambios campo por campo, con el valor anterior (`before`) y el nuevo (`after`).

## Acciones automáticas de la plataforma

Un registro tiene un administrador o una marca de acción automática, nunca las dos cosas a la vez: o la acción la hizo una persona, o la hizo la plataforma. Cuando la hizo la plataforma, la columna **Usuario** muestra **Sistema** con un ícono de engranaje, y para revisar solo esas acciones puedes elegir **Sistema** en el filtro **Administrador**.

Entre las acciones que la plataforma registra por su cuenta están:

- La deshabilitación de administradores por inactividad, con un registro por cada administrador deshabilitado y un registro resumen con el total.
- La generación programada de los reportes de actividad de la cuenta.
- La deshabilitación de las cuentas de prueba vencidas.
- La cancelación de las respuestas de Origination que superaron su plazo.

## Qué queda auditado

El catálogo de tipos de evento es cerrado: la plataforma define 291 tipos y no puedes crear tipos nuevos ni editar los existentes. Cada tipo tiene un nombre visible, que es el que aparece en el filtro **Tipo** y en la columna **Tipo**, y un identificador estable, que es el valor del campo `type` en el [API de Logs](/es/platform/core/api.html#registros-logs) y el que llega como `trigger_uid` en los [Webhooks](/es/platform/core/webhooks.html). Para conocer el identificador de un evento concreto, abre su detalle.

Estos son los dominios que quedan auditados:

| Dominio | Qué queda registrado |
| --- | --- |
| Cuenta y configuración | Creación, actualización y borrado de la cuenta; snippets globales; variables globales; idioma; cambios de plan; configuración de pagos; restauración de los roles y de los tipos de log por omisión. |
| Equipo, roles y accesos | Roles y sus asignaciones; grupos; miembros del equipo, con su creación, actualización, habilitación, deshabilitación y suplantación; inicios y cierres de sesión, intentos fallidos, ingreso con contraseña temporal y restablecimiento de contraseña; actualización del propio perfil; proveedores de identidad; aplicaciones OAuth del API. |
| Aplicaciones | Creación, clonado, actualización, habilitación, deshabilitación y borrado de aplicaciones; paso a estado editable; sincronizaciones de la aplicación y de sus elementos; plantillas; revisores y aprobadores; etapas de revisión; releases y publicaciones programadas; rollback de versiones. |
| Páginas, layouts y navegación | Layouts y layout pages, con su creación, edición, clonado, fork, publicación, despublicación, rollback, envío a revisión y aprobación; layouts remotos y sus despliegues; navegaciones. |
| Widgets | Creación, edición, clonado, publicación, despublicación, restauración y borrado; archivos asociados; usuarios con acceso. |
| Contenido | Espacios, con sus idiomas, seguridad, equipo de revisión y caché; tipos de contenido y sus reindexaciones; entradas, con su publicación, clonado, aprobación, envío a revisión y acciones masivas; categorías y sus sincronizaciones; archivos de la biblioteca. |
| Clientes y usuarios finales | Reinos; usuarios finales, con su alta por formulario, invitación, proveedor de identidad, SCIM, registro o compra, y con su verificación, habilitación, deshabilitación, etiquetas, suplantación y actualizaciones masivas; notas de miembro; campos personalizados de usuario y sus opciones; segmentos. |
| Mensajería | Campañas y sus bloqueos; envíos iniciados y detenidos; plantillas de correo; eventos de entrega de correo, con envío, entrega, apertura, click, rebote, reporte de spam y baja; notificaciones abiertas. |
| Formularios | Creación, edición, habilitación, deshabilitación y borrado de formularios; sus bloqueos; respuestas creadas, actualizadas, eliminadas y borradas en lote. |
| Origination | Originaciones, con su creación, actualización, publicación y borrado; invitaciones enviadas, reenviadas y canceladas; respuestas, con su inicio, asignación, actualización, cancelación, término, suplantación y borrado; respuestas a tareas, con su inicio, término, revisión, reapertura y validación. |
| Pagos | Órdenes, con su creación, confirmación, pago, rechazo y seguimiento, y los errores de cada uno de esos pasos; tarjetas tokenizadas, con su inscripción, activación, baja y fallos. |
| Integraciones y automatización | Integraciones y sus sincronizaciones, exitosas y fallidas; webhooks; tareas de proceso; desinstalación de aplicaciones. |

## Identificadores de trazabilidad de originación

Los registros del ámbito de originación incluyen los identificadores de las entidades que describen, para poder correlacionarlos con lo que ocurre en tus propios sistemas. Son cuatro y cada uno aparece solo cuando aplica al hecho registrado:

| Campo | Qué identifica |
|---|---|
| `origination_uuid` | El flujo de originación. Es un identificador durable: no cambia si le cambias el nombre. |
| `origination_uid` | El mismo flujo, por su identificador legible. Es el que usa la API de administración para resolver una originación, así que es el que necesitas para operar sobre ella. |
| `submission_uuid` | La respuesta. |
| `task_uid` | La tarea. |

Un campo que no aplica **no viaja vacío: no viaja**. Si el registro es de una originación pero no de una respuesta en particular, `submission_uuid` simplemente no está en el payload.

:::warning Atención
`origination_uid` es un identificador editable. Si alguien lo cambia, los registros anteriores conservan el valor que tenía en ese momento, así que no sirve para agrupar el historial completo de un flujo: para eso usa `origination_uuid`, que no cambia.
:::

Hay un caso borde que conviene conocer: si la originación fue eliminada y solo queda la respuesta, el registro **conserva `origination_uuid` y omite `origination_uid`**. Se puede seguir sabiendo a qué flujo pertenecía, aunque ya no se pueda resolver por su identificador legible.

:::tip Registros anteriores al cambio
Estos identificadores aparecen en los registros generados desde que la versión está disponible. Los anteriores quedan tal como estaban, sin estos campos, y no se completan de forma retroactiva. Un análisis que cruce ambos períodos va a encontrar esa discontinuidad.
:::

## Eventos que no aparecen en este listado

Los eventos del flujo de revisión quedan fuera de esta pantalla a propósito: creación, edición, comentarios, envío a revisión, aprobación, rechazo, vuelta a edición, término, archivado, restauración y alta o baja de revisores. Para revisarlos, usa el panel **Actividad** del **Resumen** de la aplicación, el espacio o el reino donde ocurrieron, que no aplica esa exclusión.

## Exportar el listado

Marca la casilla al lado de uno o varios registros y haz click en el botón **Exportar**, ubicado debajo del listado, para elegir el formato (Excel o CSV) y generar el archivo. Si en lugar de marcar registros sueltos seleccionas todos los resultados, la exportación toma los filtros que tengas aplicados.

El archivo trae una fila por registro con cinco columnas: **Tipo**, **Origen**, **Aplicación**, **Creado el** y **Usuario**. Los registros de acciones automáticas salen con **Sistema** en la columna **Usuario**.

:::tip Tip
En el archivo, **Tipo** y **Origen** traen los valores internos del registro, por ejemplo `Entry published log` y `Content::Entry`, y no las etiquetas traducidas que ves en el listado.
:::

## Actividad de los usuarios finales

Esta pantalla registra la actividad de la administración. La actividad de los usuarios finales de un reino se revisa en [Eventos](/es/platform/customers/events.html), que usa el mismo listado, el mismo detalle y la misma exportación, pero con un filtro por **Usuario** en lugar del filtro por **Administrador**.