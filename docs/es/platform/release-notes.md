---
search: true
---

# Notas de Versión

## 10.2

### 10.2.0

:::info Fecha del release
11 de agosto de 2026
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Agrega branding a nivel de cuenta, ahora es posible reemplazar los logos de la interfaz administrativa y ajustar la paleta de colores de las acciones básicas para que el panel se sienta propio de cada organización<br>• Agrega bookmarks en el admin para crear accesos directos a páginas, espacios y paneles de respuestas<br>• Agrega soporte de usuario de sistema en los logs administrativos, las acciones automáticas se registran como "Sistema" en lugar de asociarse a una persona<br>• Agrega la opción de visualizar el mapping de los índices de OpenSearch desde el menú contextual de cada índice en el Panel<br>• Corrige la restauración de los grupos de permisos de admin_teams y admin_groups<br>• Corrige la recuperación de contraseña de los usuarios administradores<br>• Corrige las URLs generadas por el CSP automático del admin<br>• Corrige el token de usuario al impersonar sobre una sesión ya impersonada<br>• Corrige la visibilidad de Web Applications para administradores sin el check de Channels<br>• Corrige el linter de Liquid de los editores del admin, ahora acepta control de espacios en blanco y tags escritos en múltiples líneas<br>• Corrige la validación de tipo de archivo que impedía subir archivos con extensiones como xlsx<br>• Corrige el error 404 en la vista Mis tareas<br>• Corrige la migración desde 10.1 y actualiza el job de limpieza de datos inconsistentes |
| **Channels** | • Agrega endpoints individuales de widgets y variables de las layout pages en la API administrativa, permitiendo modificar un widget o una variable sin reemplazar el resto de la página<br>• Agrega soporte para el estándar llms.txt, disponible junto a sitemap y robots en la sección de SEO del sitio<br>• Agrega nuevas plantillas Minimal alineadas al framework, para sitio público, sitio privado y landing de originación<br>• Mejora la gestión de redirecciones:<br>&nbsp;&nbsp;- Agrega la opción de activar y desactivar una redirección, también de forma masiva<br>&nbsp;&nbsp;- Las redirecciones ahora se resuelven antes que cualquier otra ruta del dispatcher<br>&nbsp;&nbsp;- Permite elegir el tipo de redirección de los dominios alternativos, agregando 301 además de 302<br>• Mejora el buscador de sitios, ahora entrega resultados cuando el término buscado forma parte de una palabra compuesta<br>• Corrige la actualización parcial de una página, que resetaba los campos no enviados en el body<br>• Corrige la creación de páginas, que aceptaba silenciosamente valores desconocidos de page_type<br>• Corrige el estilo del dropdown de preview de widgets<br>• Corrige la publicación pendiente al alterar un layout usado por la página de una originación<br>• Corrige el borrado de caché al copiar un sitio y al crear un stage<br>• Restringe a 1-1 la asociación entre una originación y su página, y corrige el clonado y la sincronización entre stages |
| **Content** | • Agrega preview de la API de contenido, ahora el check de contenido en edición o publicado también aplica a la API cuando existe una sesión administrativa, sin cachear esas respuestas<br>• Agrega la acción bulk create en el endpoint de entradas, permitiendo crear múltiples entradas en una sola llamada<br>• Agrega el slug del espacio en el drop de la entrada<br>• Mejora la gestión de alternativas en los types de contenido, ahora se distingue entre renombrar, eliminar y agregar una alternativa, y los cambios pueden propagarse a las entradas publicadas y programadas<br>• Corrige el uso de los filtros de assets sobre un asset proveniente de una entrada |
| **Customers** | • Agrega originación multiusuario, ahora quien inicia el flujo puede invitar a otros usuarios en roles definidos previamente:<br>&nbsp;&nbsp;- Roles asignables a una o más tareas del flujo<br>&nbsp;&nbsp;- Roles compuestos por uno o más usuarios, con límite máximo configurable<br>&nbsp;&nbsp;- El usuario principal puede asumir un rol o delegarlo completamente en los invitados<br>&nbsp;&nbsp;- El flujo se completa una vez que todos los participantes responden lo que les corresponde<br>• Agrega asignación de tareas a agentes en las originaciones:<br>&nbsp;&nbsp;- Tareas resueltas exclusivamente por el agente, con mensaje de espera configurable para el usuario final<br>&nbsp;&nbsp;- Nueva vista de tareas dentro de la respuesta, que renderiza las vistas del sitio con sandbox por iframe<br>&nbsp;&nbsp;- Asignación a un usuario, a un grupo o a un usuario dentro de un grupo, con balanceo por grupo o segmento<br>&nbsp;&nbsp;- Nuevo endpoint para reasignar una tarea específica a otro agente<br>&nbsp;&nbsp;- Feedback visual al completar las tareas del agente<br>• Agrega la tarea de Confirmación, que muestra al usuario un resumen de lo entregado en tareas Input anteriores para revisarlo y corregirlo antes de continuar<br>• Agrega control del ciclo de vida de las respuestas:<br>&nbsp;&nbsp;- Cancelación por vencimiento y cancelación manual con comentario<br>&nbsp;&nbsp;- Log de sistema con tipo propio para las cancelaciones por vencimiento<br>&nbsp;&nbsp;- Fecha de vencimiento con disparador por una pregunta de tipo Fecha<br>&nbsp;&nbsp;- Flujo de reintentos para volver a gatillar una tarea ya completada desde la API administrativa<br>• Agrega OTP multicanal y mejoras al soft login:<br>&nbsp;&nbsp;- Envío del mismo código por más de un canal a la vez entre correo, WhatsApp y SMS<br>&nbsp;&nbsp;- Uso del teléfono móvil como identificador del OTP cuando el reino tiene WhatsApp o SMS habilitados<br>&nbsp;&nbsp;- Solicitud de OTP al momento del registro<br>&nbsp;&nbsp;- Tiempo configurable de reenvío del correo y de duración del token<br>&nbsp;&nbsp;- Nueva opción "Invitation only" en la activación de cuentas<br>&nbsp;&nbsp;- Acción por defecto del reino configurable entre login y signup<br>• Agrega nuevas integraciones a nivel de reino:<br>&nbsp;&nbsp;- Auronix como proveedor de WhatsApp para OTP y campañas masivas<br>&nbsp;&nbsp;- Envío de SMS mediante un endpoint genérico configurable<br>&nbsp;&nbsp;- Biometría con AWS Rekognition usando Face & Liveness detection<br>&nbsp;&nbsp;- Mejoras a la integración Naat en móvil<br>• Agrega segmentos a los grupos y administradores de un reino, ahora un grupo con rol en un reino puede quedar acotado a los usuarios de uno o más segmentos<br>• Agrega el estado de las respuestas de una originación y el avance de sus tareas como filtros para construir segmentos<br>• Mejora el buscador de respuestas, ahora se indexan en OpenSearch permitiendo buscar sobre los datos entregados por los usuarios, y agrega filtro por fecha de modificación<br>• Agrega permisos granulares para las respuestas, desacoplando creación y asignación, listado y detalle<br>• Expone en la API administrativa quién creó una respuesta, tanto en el listado como en el detalle<br>• Mejora la documentación swagger de la API de originación y mantiene el soporte de la API 10.1 para clientes con originaciones en producción<br>• Agrega la opción de ocultar el link de cancelar en la página de originación y muestra el siguiente paso en el stepper móvil<br>• Permite editar las integraciones sin necesidad de deshabilitarlas<br>• Corrige la lógica condicional de los formularios en campos requeridos, preguntas anidadas, opciones de tipo choice y condiciones entre pasos<br>• Corrige la repetición de alternativas en preguntas de tipo dropdown y similares<br>• Corrige la validación de expresiones regulares en las tareas Input cuando contienen backslashes<br>• Corrige el campo de teléfono internacional cuando existe más de un campo de este tipo en el formulario<br>• Corrige los mensajes de error en los campos de fecha con valores mínimo y máximo<br>• Corrige el error 422 al subir archivos grandes a una respuesta mediante la API administrativa<br>• Impide seleccionar preguntas de tipo archivo en los formularios públicos<br>• Corrige las tareas de Validación, deshabilita los botones de aprobar y rechazar mientras se procesa, permite aprobar sin asignado configurado y evita que una tarea condicional oculta bloquee la validación<br>• Corrige las tareas de Snippet de código respondidas por agentes, el error 500 al responder, los tokens que no cumplían el RFC 6750 y los llamados Liquid a snippets propios en stages distintos de Main<br>• Corrige las invitaciones de originación, ahora considera el valor por defecto de los custom fields requeridos, incorpora los datos de registro requeridos, y corrige la plantilla de reanudar invitación, la duplicación de la descripción y la recarga completa del sitio al actualizar el avance<br>• Corrige la vista de documentos de una respuesta con archivos grandes y con assets de tipo incorrecto<br>• Corrige la URL entregada por el drop de assets cuando proviene de una pregunta de tipo archivo<br>• Corrige la visualización de los resultados de una tarea de Verificación de Identidad de un usuario invitado<br>• Corrige la redirección posterior al registro cuando el signup incluye redirect_uri<br>• Corrige el mensaje de error del OTP en soft login, que revelaba la existencia de cuentas y no distinguía entre código incorrecto y vencido<br>• Corrige la UX de ingreso del OTP en móvil, ahora el borrado no obliga a eliminar dígito por dígito<br>• Corrige el error 500 al guardar una originación que combina una tarea de Firma con otras tareas<br>• Corrige la creación de preguntas sin tipo desde MCP, que provocaba un error 500 al entrar al backend de la originación<br>• Corrige los pasos ocultos que se mostraban en la tarea de Confirmación<br>• Corrige la redirección entre stages de una originación<br>• Corrige el idioma de los mensajes de error mostrados al usuario |


## 10.1

### 10.1.18

:::info Fecha del release
24 de agosto de 2026
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Restablece el borrado automático de los session grants revocados, que no se había traído a la versión 10.1<br>• Mejora el job de limpieza de datos huérfanos para que borre por lotes y deje de bloquear tablas por períodos prolongados |
| **Channels** | • Corrige el timeout al publicar widgets, páginas y plantillas de sitio en instalaciones con un alto volumen de versiones acumuladas<br>• Mejora el rendimiento del render de páginas con índices adicionales y evitando consultas repetidas de snippets dentro de un mismo render |
| **Content** | • Corrige la pérdida de tags inline vacíos usados como íconos, por ejemplo `<i>` y `<span>`, al cambiar entre la vista WYSIWYG y la vista de código |
| **Customers** | • Corrige error al ingresar al backend de una originación que tiene preguntas creadas sin tipo mediante MCP |


### 10.1.17

:::info Fecha del release
17 de julio de 2026
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Habilita jemalloc en los contenedores para mitigar el riesgo de falta de memoria (OOM) bajo alta concurrencia<br>• Corrige problema de performance al validar permisos<br>• Actualiza nokogiri para corregir bugs de memoria de baja severidad<br>• Corrige error al consultar el endpoint `me` del admin user con sesión vía SAML<br>• Corrige activación de CORS en los reinos<br>• Corrige visualización del ícono de channel en el menú lateral para usuarios con permisos heredados de grupos |
| **Content** | • Corrige tags autorizados en rich text para que funcionen con wildcard |
| **Customers** | • Corrige reindexación en OpenSearch al actualizar solo los custom fields de un usuario<br>• Corrige indexaciones múltiples de un mismo usuario<br>• Corrige error al indexar eventos de usuario de tipo error de inicio de sesión<br>• Agrega opción para ocultar el link de cancelar en la página de originación mediante configuración |


### 10.1.16

:::info Fecha del release
2 de junio de 2026
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Actualizaciones de seguridad de dependencias |
| **Content** | • Corrige problema de alternación de formato al ingresar manualmente una fecha en los datepickers |
| **Customers** | • Corrige exportación de eventos de usuarios |


### 10.1.15

:::info Fecha del release
30 de abril de 2026
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Soporte de credenciales vía form al actualizar el refresh_token<br>• Corrige carga de tags y atributos custom con wildcards en froala |
| **Customers** | • Corrige problema de permisos al cambiar el estado de una submission mediante el API |


### 10.1.14

:::info Fecha del release
16 de abril de 2026
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejora obtención de la IP del usuario final |
| **Customers** | • Corrige problema de rendimiento en vista de edición de segmentos cuando existen muchos elementos |
| **Content** | • Corrige problema que dejaba versiones programadas de los contenidos después de publicados<br>• Corrige problema visual al mostrar el datepicker en un richtext |


### 10.1.13

:::info Fecha del release
25 de febrero de 2026
:::

| Módulo | Mejoras |
|--------|---------|
| **Customers** | • Corrige error al publicar originaciones tras un error en una publicación anterior. Ahora la actualización de las submissions pendientes se controla correctamente<br>• Mejora el control de errores en los formularios<br>• Corrige business events que generaban errores al indexarse<br>• Corrige descarga de formularios que contemplan datasets |
| **Channels** | • Agrega soporte para un parámetro type al preview local de widgets desde el CLI, de esta forma podemos cargar el JavaScript del widget con type=module para el caso de uso de módulos en los widgets |
| **Content** | • Corrige un error visual de superposición de elementos al tener un campo de tipo fecha y un campo de párrafo en la edición de entradas<br>• Corrige problema que provocaba que la programación de despublicaciones de entries se perdiera<br>• Corrige problema de click en label en campos de tipo checkbox |


### 10.1.12

:::info Fecha del release
26 de enero de 2026
:::

| Módulo | Mejoras |
|--------|---------|
| **Channels** | • Agrega soporte para la directiva report-to en el header CSP y el header Reporting-Endpoints requerido para esta directiva |
| **Customers** | • Corrige problema de evaluación de completitud de las pending review tasks |
| **Content** | • Corrige el orden en que se entregan los valores de los elementos de selección múltiple en los contenidos, ahora se muestran según el orden definido en el type |


### 10.1.11

:::info Fecha del release
15 de enero de 2026
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Agrega TTL a los objetos Redis cuando se configura en "Session" la cookie de sesión |
| **Channels** | • Mejora el rendimiento de carga de custom fields de usuario en las llamadas al endpoint /me<br>• Corrige el caché de páginas 404, ahora se genera por usuario en sesión<br>• Corrige problema de nonce en formularios, ahora por defecto se incluye el hash del asset involucrado |
| **Customers** | • Corrige problema de selección en los selectores del conditional logic<br>• Corrige problema de permiso al despublicar una originación por un Realm admin |


### 10.1.10

:::info Fecha del release
29 de diciembre de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Customers** | • Agrega el parámetro redirect_uri para especificar la URL de redirección post login. La URL se valida contra los dominios registrados de la cuenta<br>• Mejora de rendimiento al obtener las respuestas de formularios mediante la API de formularios |
| **Content** | • Corrige problema con las publicaciones programadas, ahora al publicar directamente una entrada, la publicación programada previa se elimina |


### 10.1.9

:::info Fecha del release
3 de diciembre de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Customers** | • Homologa CORS configurados en la cuenta en los nuevos CORS de Customers para mantener comportamiento previo a la adición de estos CORS |
| **Insights** | • Agrega selección de todos los reinos al dashboard de Customers, ahora se puede ver todos los usuarios activos en la totalidad de los reinos |


### 10.1.8

:::info Fecha del release
1 de diciembre de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Channels** | • Corrige error en filtros liquid de contenido al aplicar múltiples filtros<br>• Aumenta el largo de las urls en las redirecciones<br>• Agrega flag para cargar como módulo los widgets en las páginas |
| **Content** | • Agrega el permiso de revisor al rol por defecto de Space Editor |


### 10.1.7

:::info Fecha del release
25 de noviembre de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Channels** | • Corrige permisos para las acciones de sincronización<br>• Corrige filtros de contenidos para contenidos relacionados<br>• Corrige buscador de templates |
| **Customers** | • Aumenta el tamaño de almacenamiento para urls en los webhooks<br>• Agrega CORS para la API de customers<br>• Mejora reCAPTCHA en formularios<br>• Mejora de experiencia en selección de fechas |
| **Content** | • Corrige detección de content types en archivos subidos mediante el modal de archivos |
| **Core** | • Mejora construcción de roles mediante permisos más granulares de las settings de sitios y contenidos |


### 10.1.6

:::info Fecha del release
29 de octubre de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejoras al swagger |
| **Channels** | • Agrega fit y format a las opciones soportadas por la optimización de imágenes mediante cloudflare<br>• Agrega nuevo filtro liquid handle o handleize<br>• Elimina templates content_view funcionalidad obsoleta desde 9.2.0 |
| **Customers** | • Mejora date picker mostrado en las originaciones<br>• Restaura soporte opcional de kid en integraciones de openid<br>• Agrega API administrativa para la obtención del perishable token |
| **Content** | • Corrige permiso de link de clonado |


### 10.1.5

:::info Fecha del release
10 de octubre de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Channels** | • Corrige filtro asset_url ahora entrega correctamente la url con optimizaciones de cloudflare cuando está disponible<br>• Corrige problemas de encoding al procesar widgets desde el cli cuando se envían comprimidos en un archivo zip |
| **Customers** | • Corrige error al indexar algunos BusinessEvents |


### 10.1.4

:::info Fecha del release
2 de octubre de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Customers** | • Corrige listado de datasets en opciones del builder de originación y formularios, ahora se muestran todos los datasets disponibles<br>• Corrige vista de formularios para que se muestren correctamente cuando existe un header de content security policy<br>• Agrega configuración de google tag manager para las páginas de profile y login en reinos |
| **Channels** | • Corrige búsqueda multi-sitio con stages, ahora la búsqueda se limita a los sitios principales y no a sus stages<br>• Corrige traducción de resend code en el soft login |
| **Content** | • Corrige error donde no se mostraba el hint en los campos de múltiples opciones |


### 10.1.3

:::info Fecha del release
4 de septiembre de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Channels** | • Corrige stepper en modo mobile, ahora indica correctamente el número de paso en relación a los pasos totales |


### 10.1.2

:::info Fecha del release
2 de septiembre de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Channels** | • Mejora en clonado de sitios<br>• Agrega la posibilidad de cambiar la originación de una página<br>• Agrega auto refresco en tareas del tipo pending review<br>• Permite especificar el dominio en las urls de destino de las redirecciones<br>• Corrige problemas en la sincronización de páginas de originación<br>• Corrige error de cruce de originaciones entre stages<br>• Corrige problemas de acceso a las originaciones en distintos estados<br>• Corrige feedback del último editor de las tasks al ver una submission en el backoffice |
| **Customers** | • Nuevos tipos de fields para la creación de originaciones: currency y date range<br>• Agrega impersonación de usuarios, ahora se puede ir a contestar una originación como el usuario. Toda acción queda registrada.<br>• Agrega a la actividad de las submissions cuando se abre un correo de invitación<br>• Corrige detección incorrecta de content type de archivos OpenXML<br>• Corrige problema que evitaba que administradores pertenecientes a grupos aparezcan como agentes en las originaciones |
| **Content** | • Corrige problema de renombrado de archivo cuando se sube un nuevo asset<br>• Corrige problema de invalidación de cache de cloudflare al actualizar imágenes<br>• Corrige problema que evitaba que las imágenes de las entries se refresquen correctamente |


### Modyo 10.1.1

:::info Fecha del release
23 de julio de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Customers** | • Mejora visual de la edición de flujos condicionales<br>• Corrige problema de scroll en el builder de las originaciones |
| **Channels** | • Agrega edición de vistas de inicio, resumen y de completado en la página de una originación<br>• Mejora en la evaluación de condiciones durante el completado de una submission<br>• Corrige valor entregado por field de tipo checkbox que ahora entrega un arreglo con los valores seleccionados |


### Modyo 10.1.0

:::info Fecha del release
3 de julio de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Agrega opción de creación de roles personalizables<br>• Mejoras en seguridad, performance y dependencias |
| **Channels** | • Check de draft/publicado de páginas en el preview ahora es persistente en la navegación |
| **Customers** | • Agrega nuevo módulo de originación activable mediante el plan con las siguientes características:<br>&nbsp;&nbsp;- Flujos condicionales<br>&nbsp;&nbsp;- Versionamiento<br>&nbsp;&nbsp;- Formularios (Breaking change, este cambio requiere revisión previa a la subida de versión)<br>&nbsp;&nbsp;- Snippets de código<br>&nbsp;&nbsp;- Validaciones<br>&nbsp;&nbsp;- Vista de agentes<br>&nbsp;&nbsp;- Invitaciones a flujos<br>&nbsp;&nbsp;- Personalización de los flujos<br>&nbsp;&nbsp;- Api de originación<br>&nbsp;&nbsp;- Drops liquid para acceso desde vistas de los sitios<br>• Webhooks para eventos de usuarios (Breaking change, este cambio requiere revisión previa a la subida de versión)<br>• Agrega session expiration policy a nivel de reino<br>• Agrega la opción de poder customizar el input de username para el login<br>• Agrega nuevos tipos de campos para los formularios<br>• Agrega datasets a nivel de reino que se pueden usar en formularios y originaciones<br>• Transforma los eventos de usuarios (Breaking change, este cambio requiere revisión previa a la subida de versión)<br>• Unifica los identity providers con las integraciones en un solo módulo llamado integraciones |


## 10.0

### Modyo 10.0.27

:::info Fecha del release
25 de junio de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Content** | • Se elimina el error controlado cuando se excede el máximo de elementos permitido por la API |
### Modyo 10.0.26

:::info Fecha del release
06 de junio de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Channels** | • Mejora la inyección del csp-nonce en las páginas, ahora se inyecta en cada request que llegue a la aplicación indistintamente si existe o no caché de aplicación |
### Modyo 10.0.25

:::info Fecha del release
14 de mayo de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Channels** | • Mejora de performance en el filtro json para una entrada de contenido |
### Modyo 10.0.24

:::info Fecha del release
13 de mayo de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejoras de performance |
| **Channels** | • Mejora de performance en la carga de contenido desde el SDK de liquid y páginas de contenido<br>• Mejora de performance en la carga de menús |
### Modyo 10.0.23

:::info Fecha del release
05 de mayo de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Customers** | • Corrige la validación de dominios para el parámetro redirect_to del logout |
| **Channels** | • Corrige persistencia de visualización del preview al cerrar sesión de administrador para sitios con custom domains |
### Modyo 10.0.22

:::info Fecha del release
25 de abril de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Agrega nuevos caracteres soportados para el username de un usuario |
| **Channels** | • Mejora en la sincronización de menus, ahora identifica correctamente los segmentos iniciales si ambos stages comparten un mismo reino |
### Modyo 10.0.21

:::info Fecha del release
16 de marzo de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Agrega opción de flujo Auhtorization code + PKCE en la integración con un open id identity provider<br>• Agrega opción de envío de parámetros de autenticación via url params |
| **Channels** | • Mejora de performance al obtener los templates |
### Modyo 10.0.20

:::info Fecha del release
10 de marzo de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Channels** | • Agrega soporte de archivos web assembly como chunks en paquetes zip porvenientes desde Modyo CLI<br>• Agrega nuevo header Service-Worker-Allowed en los security headers de un sitio<br>• Corrige un error en el modal de assets<br>• Corrige problema de diferencias de csp nonce entre header y vista<br>• Agrega filtros liquid para manipular respuestas de formularios para un usuario en la construcción de un sitio |
### Modyo 10.0.19

:::info Fecha del release
07 de febrero de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejoras de seguridad<br>• Agrega de forma explícita el atributo samesite=Lax a la cookie de sesión |
| **Channels** | • Corrige problema con permisos al subir assets en los sitios |
### Modyo 10.0.18

:::info Fecha del release
03 de febrero de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejoras de seguridad<br>• Corrige error al publicar cuando se alcanza el límite de backups |
| **Content** | • Agrega edición en bulk de segmentos<br>• Restaura bordes de las tablas insertadas en froala |
| **Customers** | • Agrega buscador en el lisado de campañas |
### Modyo 10.0.17

:::info Fecha del release
14 de enero de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Corrige autor al momento de clonar un elemento de contenido, página, menú, widget, template, ahora el autor del nuevo elemento es el que ejecuta la acción<br>• Corrige problema del listado de sitios, spaces y reinos del listado de webhooks |
| **Content** | • Corrige permiso para obtener entries relacionadas en la edición de un contenido<br>• Corrige problemas en la indexación de contenido, ahora se indexa el contenido para las búsquedas en páginas de contenido, se indexa el contenido al publicar y se quita el índice al despublicar, solo las páginas de widgets se reindexan en el job de reindexado, esto por si incluyen contenido mediante el sdk<br>• Mejora en performance de la indexación de contenido |
| **Customers** | • Corrige el encolado de multiples jobs de cálculo de segmentos para un usuario<br>• Corrige vista usuario para que muestre todos los usuarios cuando se solicita desde el listado de segmentos |
| **Channels** | • Corrige problemas con el uso del parametro search en las búsquedas usando el filtro filter_by_query_string |
### Modyo 10.0.16

:::info Fecha del release
23 de diciembre de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Content** | • Agrega ordenamiento dentro de un campo de contenido de tipo lista de contenidos<br>• Corrige problema de richtexts quedan en blanco al mover elementos dentro de un grupo repetible<br>• Corrige error en copia de contenido desde otro idioma cuando se tiene un grupo repetible |
| **Customers** | • Mejora de performance en el calculo de segmentos de usuarios al iniciar sesión |
| **Channels** | • Corrige problemas al previsualizar snippets globales |
### Modyo 10.0.15

:::info Fecha del release
12 de diciembre de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Customers** | • Mejora en filtro de segmentos de tipo custom field, ahora permite una lista de valores |
### Modyo 10.0.14

:::info Fecha del release
10 de diciembre de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Content** | • Corrige error al editar contenido en bulk |
| **Customers** | • Corrige llamados multiples al endpoint de count_matches |
### Modyo 10.0.13

:::info Fecha del release
05 de diciembre de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Channels** | • Corrige problema de redirección al custom domain de un sitio |
| **Customers** | • Corrige recalculo de segmentos<br>• Corrige campo from de la campaña de correo, vuelve a ser el nombre del sender |
### Modyo 10.0.12

:::info Fecha del release
03 de diciembre de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejoras de seguridad |
| **Channels** | • Mejoras en la programación de la indexación de páginas<br>• Corrige resultados de búsqueda que contenian contenido privado |
| **Content** | • Corrige errores en selector de imagenes y buscador en los Richtexts<br>• Mejora de performance en la publicación masiva de contenidos<br>• Corrige error al mostrar diferencias en contenidos muy extensos |
| **Customers** | • Corrige duplicación de segmentos de usuarios<br>• Corrige edición de custom fields recien agregados al editar un usuario |
### Modyo 10.0.11

:::info Fecha del release
14 de noviembre de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejoras de seguridad |
| **Channels** | • Corrige problemas de pérdida del preview de sitios<br>• Mejoras en la indexación de páginas para la búsqueda<br>• Aumenta los resultados de búsquedas en sitios, ahora por defecto son 15 resultados |
### Modyo 10.0.10

:::info Fecha del release
04 de noviembre de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejoras de seguridad<br>• Se agrega la invalidación de todas las sesiones de un administrador cuando este cambia su contraseña |
| **Channels** | • Corrige problemas al renderizar páginas con contenido segmentado<br>• Corrige problemas al renderizar páginas con contenidos muy grandes<br>• Corrige el author de una sincronización en la actividad mostrada en paginas, widgets, templates y menus<br>• Se agrega la opción de habilitar el webpush en las configuraciones de una aplicación |
| **Customers** | • Se agrega la posibilidad de mapear un atributo de un claim de tipo objeto a un custom field especifico<br>• Se agrega la capacidad de envio de webpush en las campañas de notificaciones cuando este es activado en el sitio relacionado al reino |
### Modyo 10.0.9

:::info Fecha del release
14 de octubre de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejoras de seguridad<br>• Corrige expiración de la sesión según tiempo de inactividad |
| **Content** | • Corrige problema al publicar entries con listas de assets, ahora se respeta el orden definido en el listado<br>• Corrige problema al publicar entries que contienen richtext en modo código<br>• Corrige problema de duplicación de parametros al usar el api administrativa de contenido |
### Modyo 10.0.8

:::info Fecha del release
16 de septiembre de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Corrige problema con precarga de links al pasar el cursor |
### Modyo 10.0.7

:::info Fecha del release
06 de septiembre de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejoras de seguridad |
| **Channels** | • Corrige el paginador de la búsqueda en sitios para mostrar la cantidad de páginas según la cantidad máxima de resultados |
| **Content** | • Agrega filtro exacto por full_path y uuid al endpoint de categorias del api de contenido |
| **Customers** | • Corrige cálculo sincrónico de segmentos al iniciar sesión cuando está habilitado |
### Modyo 10.0.6

:::info Fecha del release
14 de agosto de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejoras de seguridad |
| **Channels** | • Corrige problema del SDK de liquid al mostrar json de un grupo repetible |
| **Content** | • Agrega query param `search` para realizar búsqueda de texto mediante el uso del api de contenido |
### Modyo 10.0.5

:::info Fecha del release
02 de agosto de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Corrige error de configuración del SEO |
### Modyo 10.0.4

:::info Fecha del release
30 de julio de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejoras de seguridad<br>• Mejoras en los webhooks, ahora los stages responden a los hooks asociados a un sitio, agrega hooks al crear o actualizar un asset |
| **Channels** | • Corrige problema al publicar una page cuando se tienen una configuración de variables y borrado de backups |
### Modyo 10.0.3

:::info Fecha del release
12 de julio de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejoras de seguridad<br>• Mejoras de rendimiento<br>• Se agregan mejoras en la configuración de SEO, ahora es posible editar el sitemap y robots desde la configuración de la organización e incluir automáticamente sitios que dependan de la url base<br>• Se agrega listado de sesiones activas en el profile del administrador, también es posible cerrarlas desde esa vista |
| **Content** | • Corrige problema al clonar entradas de contenido con multiples idiomas |
### Modyo 10.0.2

:::info Fecha del release
08 de julio de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejoras de seguridad<br>• Mejoras de rendimiento<br>• Actualización de dependencias |
| **Customers** | • Mejora en el formato de teléfono, ahora se selecciona automáticamente el país mediante cloudflare |
| **Channels** | • Corrige un problema de performance al usar el filtro by_tag en los templates liquid<br>• Mejora la experiencia de carga de templates al volver al template builder |
| **Content** | • Agrega la posibilidad de clonar espacios y tipos de contenidos |
### Modyo 10.0.1

:::info Fecha del release
31 de mayo de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejoras de seguridad<br>• Mejoras de rendimiento<br>• Actualización de dependencias |
| **Customers** | • Soft login, ahora es posible el inicio de sesión mediante un código OTP que es enviado al correo electrónico<br>• Mejoras a los formularios de registro y profile |
| **Channels** | • Mejoras en el acceso a las variables de sitio, ahora son accesibles para ser vistas por cualquier rol<br>• Agrega la posibilidad de usar las variables globales y de sitios en las urls de los items de menú<br>• Agrega ordenamiento por ruta de las páginas en la vista de tabla |
| **Content** | • Se agrega la posibilidad de especificar una descripción a los spaces el cual es mostrado en el overview<br>• Se agrega la posibilidad de agregar una descripción a los tipos de contenido |
### Modyo 10.0.0

:::info Fecha del release
03 de abril de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejoras de seguridad<br>• Mejoras de rendimiento<br>• Actualización de dependencias<br>• Nuevo diseño de la interfaz administrativa<br>• Agrega soporte para la invalidación de caché cuando se utiliza cloudflare para este fin, esto permite usar cachés más agresivos y que sean invalidados cuando modificamos las páginas, el contenido y las modificaciones a los assets del media library<br>• Agrega alerta de nuevo ingreso para usuarios administradores de la plataforma, ahora cuando se inicia sesión en un nuevo dispositivo se envía una notificación por correo electrónico |
| **Customers** | • Agrega integración con salesforce, ahora los contactos en salesforce y los usuarios de un reino pueden mantenerse sincronizados, pueden ser configurados para recibir y/o enviar cambios en la información de los usuarios<br>• Mejoras visuales en los formularios de registro e inicio de sesión<br>• Mejoras en la creación de campañas de correos, ahora se pueden clonar para realizar nuevos envíos y se simplifica la vista principal<br>• Elimina el rol none, ahora todos los usuarios por defecto serán account users |
| **Channels** | • Agrega a la construcción de menús la opción de agregar el buscador como item<br>• Plantilla mejorada para nuevos sitios, más simple y con referencia al framework desde el inicio<br>• Agrega snippets globales, ahora es posible definir un snippet de código y utilizarlo en los distintos sitios de la cuenta, también se incluye un selector de draft o publicado en el preview<br>• Mejora el preview de widgets, ahora se puede seleccionar el layout del sitio con el cual previsualizar el widget<br>• Agrega la posibilidad de previsualizar los widgets de forma local. Al trabajar con el CLI de Modyo ahora puedes ejecutar un preview del widget en desarrollo y verlo directamente en el navegador con la posibilidad de montarlo en los distintos layouts que contiene el sitio de destino<br>• Incluye soporte para chunks en los widgets del CLI, ahora la plataforma acepta un zip con los datos del widget más los chunks asociados<br>• Mejoras en la interfaz de widgets cuando estos provienen desde el CLI<br>• Agrega procesamiento de imágenes cuando se utiliza cloudflare, a través del filtro de assets se puede especificar tamaño y calidad de la imagen a mostrar o un conjunto de tamaños como srcset, esto beneficia el rendimiento de los sitios que se construyen<br>• Mueve las configuración de variables globales al contexto de channels<br>• BREAKING CHANGE: Se eliminan los widgets de contenido: Content List y Content Featured, pueden ser reemplazados mediante un widget html y el uso del sdk de liquid |
| **Content** | • Agrega grupos repetibles en contenido, ahora en la definición de types de contenido está la opción de grupo repetible el cual puede definir múltiples campos como un grupo que puede ser instanciado muchas veces en la creación de una entrada<br>• Agrega Media Library, ahora el asset manager pasa a ser media library el cual existe dentro de un space y no a nivel global, esto permite tener un mejor manejo de permisos y organización de los assets subidos a la plataforma, también puede ser usado en channels mediante el modal de media library y dejar el contexto específico de los assets a la aplicación en uso |
