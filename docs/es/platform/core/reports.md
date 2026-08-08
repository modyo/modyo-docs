---
search: true
---

# Reportes y Exportaciones

Varias pantallas del panel de administración te permiten sacar sus datos a un archivo para analizarlos fuera de Modyo o cargarlos en tus propios sistemas. Todas usan el mismo mecanismo: eliges las filas, eliges el formato y la plataforma genera el archivo en segundo plano para que lo descargues cuando esté listo.

## Qué puedes exportar

| Reporte | Dónde se pide |
| --- | --- |
| [Logs de actividad](/es/platform/core/activity-logs.html) | **Configuración** > **Logs de actividad** |
| Miembros del equipo | **Configuración** > [**Equipo**](/es/platform/core/roles.html) |
| [Usuarios](/es/platform/customers/users.html) de un reino | **Usuarios**, dentro del reino |
| Respuestas de un [formulario](/es/platform/customers/forms.html) | **Formularios**, en la pantalla de respuestas del formulario |
| Órdenes de un reino | [**Payments**](/es/platform/customers/payments.html), dentro del reino |

La exportación de miembros del equipo está disponible desde Modyo 10.2.

## Generar un reporte

1. Abre el listado que quieres exportar y aplica los filtros que necesites. El reporte respeta los filtros que tengas puestos en pantalla.
2. Marca la casilla de las filas que quieres incluir. Si marcas la casilla de la cabecera se seleccionan las filas de la página; para incluir todos los resultados del filtro, usa el enlace que aparece sobre la tabla para extender la selección al total.
3. Haz click en **Exportar**, debajo del listado. En las pantallas con más de una acción masiva, la opción está dentro de **Acciones masivas**.
4. En la ventana **Exportar datos**, elige el formato: **Excel** (archivo XLSX, preseleccionado) o **CSV**.
5. Haz click en **Exportar**.

En la exportación de respuestas de un formulario, la ventana incluye además el campo **Fecha de Inicio**, con formato yyyy-mm-dd. Si lo completas, el archivo solo trae las respuestas posteriores a esa fecha.

:::tip Tip
Si tu acceso al reino está restringido por segmentos, el reporte de usuarios solo incluye los usuarios que están dentro de tu alcance. Conoce más en [Restringir el alcance con segmentos](/es/platform/customers/settings.html#restringir-el-alcance-con-segmentos).
:::

## Mientras el reporte se genera

La generación es asíncrona: la plataforma encola el trabajo y la ventana se queda consultando el estado cada dos segundos hasta que el archivo está disponible. Mientras eso ocurre, la ventana solo ofrece el botón **Cancelar reportes en progreso** y no se puede cerrar.

Cuando el archivo queda listo verás el aviso "Tu archivo está listo para ser descargado." y en la ventana aparece el botón **Descargar**.

Un reporte pasa por estos estados:

| Estado | Qué significa |
| --- | --- |
| Pendiente | El trabajo está encolado o escribiendo filas. |
| Listo | El archivo se generó y se puede descargar. |
| Con error | La generación falló y la ventana muestra el detalle del problema. |
| Cancelado | Pediste la cancelación y la plataforma está deteniendo el trabajo. |
| Archivado | La cancelación terminó. El reporte queda cerrado y sin archivo. |

Solo puede haber un reporte del mismo tipo a la vez. Si pides uno nuevo mientras hay otro pendiente, o mientras hay uno cancelado que la plataforma todavía no da por cerrado, la solicitud se rechaza con el mensaje "Ya hay un reporte en progreso". El botón de cancelación, por su parte, muestra el aviso "Hay un reporte en progreso. Por favor, espera a que termine".

:::warning Atención
Si no ves resultado inmediato, no vuelvas a lanzar la exportación. El archivo se está generando en segundo plano y un segundo intento del mismo tipo será rechazado hasta que el primero termine o se cancele.
:::

## Cancelar un reporte en progreso

Desde Modyo 10.2 puedes detener una exportación que ya está corriendo:

1. Con el reporte en curso, haz click en **Cancelar reportes en progreso**.
2. Verás el mensaje "Se solicitó la cancelación de los reportes" y el botón pasa a **Cancelando reportes**, deshabilitado, con el aviso "Actualmente hay un reporte en proceso de cancelación. Por favor, espera a que se cancele".
3. El trabajo se detiene en el siguiente bloque de filas que iba a escribir, así que la interrupción no es instantánea: depende del tamaño del listado.
4. Cuando la cancelación se confirma, el reporte queda archivado y se libera el bloqueo, de modo que puedes pedir uno nuevo del mismo tipo.

Si la cancelación no alcanza a confirmarse dentro de los 15 minutos siguientes, la plataforma archiva el reporte de todas formas y libera el bloqueo. Si no hay ninguna exportación corriendo cuando pides la cancelación, la respuesta es "No hay reportes para cancelar".

:::warning Atención
Un reporte cancelado no deja archivo descargable. Si igual necesitas los datos, vuelve a lanzar la exportación desde el listado.
:::

## Descargar el archivo

El botón **Descargar** abre un enlace firmado y temporal, que caduca cinco minutos después de aparecer. Si dejas pasar ese tiempo el enlace deja de funcionar y tienes que generar el reporte otra vez.

:::tip Tip
Descarga el archivo apenas veas el botón **Descargar**. No sirve guardar el enlace para más tarde ni compartirlo con otra persona.
:::

## Columnas del reporte de miembros del equipo

El reporte de **Equipo** trae una fila por cada miembro incluido en la selección y las siguientes columnas:

| Columna | Contenido |
| --- | --- |
| **ID** | Identificador del miembro dentro de la plataforma. |
| **UUID** | Identificador único del miembro. |
| **ID Externo** | Identificador del miembro en el sistema desde el que se aprovisionó, si lo tiene. |
| **Correo electrónico** | Correo con el que el miembro ingresa a la plataforma. |
| **Nombre de usuario** | Nombre de usuario del miembro. |
| **Nombre** | Nombre de pila. |
| **Nombre** | Nombre completo, tal como lo muestra la plataforma. |
| **Apellido** | Apellido del miembro. |
| **Activo** | Indica si el miembro está habilitado para ingresar. |
| **Creado el** | Fecha en que se creó el miembro. |
| **Última Actualización** | Fecha del último cambio en sus datos. |
| **Último Ingreso** | Fecha del ingreso anterior. |
| **Inicios de sesión** | Cantidad de ingresos acumulados. |
| **Inicio de sesión actual** | Fecha del ingreso vigente. |
| **Dueño de la cuenta** | Indica si el miembro es el dueño de la cuenta. |
| **Acceso a aplicaciones** | Aplicaciones a las que el miembro tiene acceso. Para el dueño de la cuenta dice **Todos**. |
| **Roles** | Roles asignados al miembro. Para el dueño de la cuenta dice **Dueño de la cuenta**. |
| **Grupos** | Grupos a los que pertenece el miembro. |

Las fechas y horas salen en la zona horaria de la cuenta, con el formato AAAA-MM-DD HH:MM:SS.
