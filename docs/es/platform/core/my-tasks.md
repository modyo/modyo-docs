---
search: true
---

# Mis tareas

**Mis tareas** es la bandeja de trabajo personal de cada administrador. Es un ítem de primer nivel del menú lateral de Modyo Platform que reúne en una sola pantalla todo lo que espera tu acción, para que no tengas que recorrer espacio por espacio y reino por reino buscando tus pendientes.

La bandeja es personal: cada administrador ve únicamente las tareas asignadas a él o a alguno de los grupos a los que pertenece.

## Tipos de tarea

La bandeja reúne dos orígenes de trabajo distintos:

- **Revisión del flujo de trabajo**: elementos de Content y Channels que esperan tu aprobación dentro de [Revisión en Equipo](/es/platform/core/#revision-en-equipo), como entradas, páginas, navegación, plantillas y widgets.
- **Revisión de validación**: tareas de validación y de revisión pendiente de las [originaciones](/es/platform/customers/origination.html) asignadas a ti o a un grupo al que perteneces.

## Sobre la Interfaz

Para abrir la bandeja, haz clic en el ícono **Mis tareas** del menú lateral de Modyo Platform.

El listado tiene estos filtros:

- **Tipo de tarea**: muestra solo las tareas de **Revisión del flujo de trabajo** o solo las de **Revisión de validación**.
- **Estado**: **Pendiente**, que es el valor por defecto, **Completada** o **Todos**.
- **Buscar**: filtra por el título de la tarea y por el nombre del contexto.

Cada fila del listado muestra:

- **Estado**: **Pendiente** o **Completada**.
- **Título**: el nombre del elemento en revisión o, en las validaciones, el nombre de la originación y el de la tarea.
- **Tipo**: **Revisión del flujo de trabajo** o **Revisión de validación**.
- **Contexto**: dónde vive el elemento, con su tipo y su nombre, por ejemplo `Espacio: my_space`, `Aplicación: my_site` u `Originación: my_origination`.
- **Detalles**: en las revisiones del flujo de trabajo, el autor que envió el elemento a revisión; en las revisiones de validación, la cantidad de ítems que quedan por validar.
- **Asignado en**: cuándo llegó la tarea a tu bandeja. Puedes ordenar el listado por esta columna.

Haz clic en el **Título** de una fila para ir directo al punto de trabajo: la entrada o la página en revisión, o la tarea específica dentro de la respuesta de originación, sin pasos intermedios.

:::tip Tip
Los filtros aparecen solo si alguna vez recibiste una tarea. Cuando no tienes nada pendiente, la pantalla muestra el mensaje **Todos tus elementos y asignaciones están revisados.**
:::

## Cómo llegan las tareas a tu bandeja

No tienes que hacer nada para alimentar la bandeja: las tareas se crean solas.

- Cuando el flujo de una respuesta de originación llega a una tarea de agente y se resuelve su asignado, se crea una tarea de **Revisión de validación** para cada administrador al que corresponde notificar. Si el asignado es un grupo, la tarea llega a todos sus integrantes. En paralelo se envía el correo de aviso, así que la bandeja y el correo muestran siempre lo mismo.
- Cuando un elemento de Content o Channels entra en revisión y figuras entre sus revisores, se crea una tarea de **Revisión del flujo de trabajo**. Si te agregan como revisor de un elemento que ya estaba en revisión, la tarea también aparece; si te quitan de la lista de revisores, desaparece de tu bandeja.

:::tip Tip
Las tareas de **Revisión pendiente** que tienen activada la opción **Desactivar el completado manual** no generan una entrada en la bandeja, porque no se completan desde el panel. Revisa [Tareas respondidas por agentes](/es/platform/customers/origination.html#tareas-respondidas-por-agentes).
:::

## Cómo se cierra una tarea

Las tareas no se marcan a mano: pasan a **Completada** cuando termina el trabajo que representan.

- Una tarea de **Revisión de validación** se completa cuando se completa la respuesta a la tarea asociada o cuando apruebas o rechazas la validación.
- Una tarea de **Revisión del flujo de trabajo** se completa cuando el elemento queda aprobado, cuando se archiva o cuando vuelve al estado editable tras un rechazo.

Si el trabajo se reabre, por ejemplo cuando una validación rechazada se vuelve a asignar, la tarea se reactiva y aparece otra vez como **Pendiente** con su nueva fecha de asignación.

Para revisar lo que ya cerraste, cambia el filtro **Estado** a **Completada** o a **Todos**.

## Quién ve la bandeja

El ítem **Mis tareas** aparece en el menú lateral solo si puedes recibir alguno de los dos tipos de tarea: si tienes permisos para editar o revisar elementos en algún espacio o sitio, o para acceder a las respuestas de originación de algún reino, con **Listar Respuestas Asignadas** o **Listar Todas las Respuestas**. Revisa [Roles](/es/platform/core/roles.html#roles) para el detalle de los permisos agrupados.
