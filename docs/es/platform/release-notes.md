---
search: true
---

# Notas de Versión

## 10.1

### 10.1.2

:::tip Fecha del release
2 de septiembre de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Channels** | • Mejora en clonado de sitios<br>• Agrega la posibilidad de cambiar la originación de una página<br>• Agrega auto refresco en tareas del tipo pending review<br>• Permite especificar el dominio en las urls de destino de las redirecciones<br>• Corrige problemas en la sincronización de páginas de originación<br>• Corrige error de cruce de originaciones entre stages<br>• Corrige problemas de acceso a las originaciones en distintos estados<br>• Corrige feedback del último editor de las tasks al ver una submission en el backoffice |
| **Customers** | • Nuevos tipos de fields para la creación de originaciones: currency y date range<br>• Agrega impersonación de usuarios, ahora se puede ir a contestar una originación como el usuario. Toda acción queda registrada.<br>• Agrega a la actividad de las submissions cuando se abre un correo de invitación<br>• Corrige detección incorrecta de content type de archivos OpenXML<br>• Corrige problema que evitaba que administradores pertenecientes a grupos aparezcan como agentes en las originaciones |
| **Content** | • Corrige problema de renombrado de archivo cuando se sube un nuevo asset<br>• Corrige problema de invalidación de cache de cloudflare al actualizar imágenes<br>• Corrige problema que evitaba que las imágenes de las entries se refresquen correctamente |


### 10.1.1

:::tip Fecha del release
23 de julio de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Customers** | • Mejora visual de la edición de flujos condicionales<br>• Corrige problema de scroll en el builder de las originaciones |
| **Channels** | • Agrega edición de vistas de inicio, resumen y de completado en la página de una originación<br>• Mejora en la evaluación de condiciones durante el completado de una submission<br>• Corrige valor entregado por field de tipo checkbox que ahora entrega un arreglo con los valores seleccionados |


### 10.1.0

:::tip Fecha del release
3 de julio de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Agrega opción de creación de roles personalizables<br>• Mejoras en seguridad, performance y dependencias |
| **Channels** | • Check de draft/publicado de páginas en el preview ahora es persistente en la navegación |
| **Customers** | • Agrega nuevo módulo de originación activable mediante el plan con las siguientes características:<br>&nbsp;&nbsp;- Flujos condicionales<br>&nbsp;&nbsp;- Versionamiento<br>&nbsp;&nbsp;- Formularios<br>&nbsp;&nbsp;- Snippets de código<br>&nbsp;&nbsp;- Validaciones<br>&nbsp;&nbsp;- Vista de agentes<br>&nbsp;&nbsp;- Invitaciones a flujos<br>&nbsp;&nbsp;- Personalización de los flujos<br>&nbsp;&nbsp;- Api de originación<br>&nbsp;&nbsp;- Drops liquid para acceso desde vistas de los sitios<br>• Webhooks para eventos de usuarios (Breaking change, este cambio requiere revisión previa a la subida de versión)<br>• Agrega session expiration policy a nivel de reino<br>• Agrega la opción de poder customizar el input de username para el login<br>• Agrega nuevos tipos de campos para los formularios<br>• Agrega datasets a nivel de reino que se pueden usar en formularios y originaciones<br>• Transforma los eventos de usuarios (Breaking change, este cambio requiere revisión previa a la subida de versión)<br>• Unifica los identity providers con las integraciones en un solo módulo llamado integraciones |


## 10.0

### 10.0.27

:::tip Fecha del release
25 de junio de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Content** | • Se elimina el error controlado cuando se excede el máximo de elementos permitido por la API |
### 10.0.26

:::tip Fecha del release
06 de junio de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Channels** | • Mejora la inyección del csp-nonce en las páginas, ahora se inyecta en cada request que llegue a la aplicación indistintamente si existe o no caché de aplicación |
### 10.0.25

:::tip Fecha del release
14 de mayo de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Channels** | • Mejora de performance en el filtro json para una entrada de contenido |
### 10.0.24

:::tip Fecha del release
13 de mayo de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejoras de performance |
| **Channels** | • Mejora de performance en la carga de contenido desde el SDK de liquid y páginas de contenido<br>• Mejora de performance en la carga de menús |
### 10.0.23

:::tip Fecha del release
05 de mayo de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Customers** | • Corrige la validación de dominios para el parámetro redirect_to del logout |
| **Channels** | • Corrige persistencia de visualización del preview al cerrar sesión de administrador para sitios con custom domains |
### 10.0.22

:::tip Fecha del release
25 de abril de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Agrega nuevos caracteres soportados para el username de un usuario |
| **Channels** | • Mejora en la sincronización de menus, ahora identifica correctamente los segmentos iniciales si ambos stages comparten un mismo reino |
### 10.0.21

:::tip Fecha del release
16 de marzo de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Agrega opción de flujo Auhtorization code + PKCE en la integración con un open id identity provider<br>• Agrega opción de envío de parámetros de autenticación via url params |
| **Channels** | • Mejora de performance al obtener los templates |
### 10.0.20

:::tip Fecha del release
10 de marzo de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Channels** | • Agrega soporte de archivos web assembly como chunks en paquetes zip porvenientes desde Modyo CLI<br>• Agrega nuevo header Service-Worker-Allowed en los security headers de un sitio<br>• Corrige un error en el modal de assets<br>• Corrige problema de diferencias de csp nonce entre header y vista<br>• Agrega filtros liquid para manipular respuestas de formularios para un usuario en la construcción de un sitio |
### 10.0.19

:::tip Fecha del release
07 de febrero de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejoras de seguridad<br>• Agrega de forma explícita el atributo samesite=Lax a la cookie de sesión |
| **Channels** | • Corrige problema con permisos al subir assets en los sitios |
### 10.0.18

:::tip Fecha del release
03 de febrero de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejoras de seguridad<br>• Corrige error al publicar cuando se alcanza el límite de backups |
| **Content** | • Agrega edición en bulk de segmentos<br>• Restaura bordes de las tablas insertadas en froala |
| **Customers** | • Agrega buscador en el lisado de campañas |
### 10.0.17

:::tip Fecha del release
14 de enero de 2025
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Corrige autor al momento de clonar un elemento de contenido, página, menú, widget, template, ahora el autor del nuevo elemento es el que ejecuta la acción<br>• Corrige problema del listado de sitios, spaces y reinos del listado de webhooks |
| **Content** | • Corrige permiso para obtener entries relacionadas en la edición de un contenido<br>• Corrige problemas en la indexación de contenido, ahora se indexa el contenido para las búsquedas en páginas de contenido, se indexa el contenido al publicar y se quita el índice al despublicar, solo las páginas de widgets se reindexan en el job de reindexado, esto por si incluyen contenido mediante el sdk<br>• Mejora en performance de la indexación de contenido |
| **Customers** | • Corrige el encolado de multiples jobs de cálculo de segmentos para un usuario<br>• Corrige vista usuario para que muestre todos los usuarios cuando se solicita desde el listado de segmentos |
| **Channels** | • Corrige problemas con el uso del parametro search en las búsquedas usando el filtro filter_by_query_string |
### 10.0.16

:::tip Fecha del release
23 de diciembre de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Content** | • Agrega ordenamiento dentro de un campo de contenido de tipo lista de contenidos<br>• Corrige problema de richtexts quedan en blanco al mover elementos dentro de un grupo repetible<br>• Corrige error en copia de contenido desde otro idioma cuando se tiene un grupo repetible |
| **Customers** | • Mejora de performance en el calculo de segmentos de usuarios al iniciar sesión |
| **Channels** | • Corrige problemas al previsualizar snippets globales |
### 10.0.15

:::tip Fecha del release
12 de diciembre de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Customers** | • Mejora en filtro de segmentos de tipo custom field, ahora permite una lista de valores |
### 10.0.14

:::tip Fecha del release
10 de diciembre de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Content** | • Corrige error al editar contenido en bulk |
| **Customers** | • Corrige llamados multiples al endpoint de count_matches |
### 10.0.13

:::tip Fecha del release
05 de diciembre de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Channels** | • Corrige problema de redirección al custom domain de un sitio |
| **Customers** | • Corrige recalculo de segmentos<br>• Corrige campo from de la campaña de correo, vuelve a ser el nombre del sender |
### 10.0.12

:::tip Fecha del release
03 de diciembre de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejoras de seguridad |
| **Channels** | • Mejoras en la programación de la indexación de páginas<br>• Corrige resultados de búsqueda que contenian contenido privado |
| **Content** | • Corrige errores en selector de imagenes y buscador en los Richtexts<br>• Mejora de performance en la publicación masiva de contenidos<br>• Corrige error al mostrar diferencias en contenidos muy extensos |
| **Customers** | • Corrige duplicación de segmentos de usuarios<br>• Corrige edición de custom fields recien agregados al editar un usuario |
### 10.0.11

:::tip Fecha del release
14 de noviembre de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejoras de seguridad |
| **Channels** | • Corrige problemas de pérdida del preview de sitios<br>• Mejoras en la indexación de páginas para la búsqueda<br>• Aumenta los resultados de búsquedas en sitios, ahora por defecto son 15 resultados |
### 10.0.10

:::tip Fecha del release
04 de noviembre de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejoras de seguridad<br>• Se agrega la invalidación de todas las sesiones de un administrador cuando este cambia su contraseña |
| **Channels** | • Corrige problemas al renderizar páginas con contenido segmentado<br>• Corrige problemas al renderizar páginas con contenidos muy grandes<br>• Corrige el author de una sincronización en la actividad mostrada en paginas, widgets, templates y menus<br>• Se agrega la opción de habilitar el webpush en las configuraciones de una aplicación |
| **Customers** | • Se agrega la posibilidad de mapear un atributo de un claim de tipo objeto a un custom field especifico<br>• Se agrega la capacidad de envio de webpush en las campañas de notificaciones cuando este es activado en el sitio relacionado al reino |
### 10.0.9

:::tip Fecha del release
14 de octubre de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejoras de seguridad<br>• Corrige expiración de la sesión según tiempo de inactividad |
| **Content** | • Corrige problema al publicar entries con listas de assets, ahora se respeta el orden definido en el listado<br>• Corrige problema al publicar entries que contienen richtext en modo código<br>• Corrige problema de duplicación de parametros al usar el api administrativa de contenido |
### 10.0.8

:::tip Fecha del release
16 de septiembre de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Corrige problema con precarga de links al pasar el cursor |
### 10.0.7

:::tip Fecha del release
06 de septiembre de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejoras de seguridad |
| **Channels** | • Corrige el paginador de la búsqueda en sitios para mostrar la cantidad de páginas según la cantidad máxima de resultados |
| **Content** | • Agrega filtro exacto por full_path y uuid al endpoint de categorias del api de contenido |
| **Customers** | • Corrige cálculo sincrónico de segmentos al iniciar sesión cuando está habilitado |
### 10.0.6

:::tip Fecha del release
14 de agosto de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejoras de seguridad |
| **Channels** | • Corrige problema del SDK de liquid al mostrar json de un grupo repetible |
| **Content** | • Agrega query param `search` para realizar búsqueda de texto mediante el uso del api de contenido |
### 10.0.5

:::tip Fecha del release
02 de agosto de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Corrige error de configuración del SEO |
### 10.0.4

:::tip Fecha del release
30 de julio de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejoras de seguridad<br>• Mejoras en los webhooks, ahora los stages responden a los hooks asociados a un sitio, agrega hooks al crear o actualizar un asset |
| **Channels** | • Corrige problema al publicar una page cuando se tienen una configuración de variables y borrado de backups |
### 10.0.3

:::tip Fecha del release
12 de julio de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejoras de seguridad<br>• Mejoras de rendimiento<br>• Se agregan mejoras en la configuración de SEO, ahora es posible editar el sitemap y robots desde la configuración de la organización e incluir automáticamente sitios que dependan de la url base<br>• Se agrega listado de sesiones activas en el profile del administrador, también es posible cerrarlas desde esa vista |
| **Content** | • Corrige problema al clonar entradas de contenido con multiples idiomas |
### 10.0.2

:::tip Fecha del release
08 de julio de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejoras de seguridad<br>• Mejoras de rendimiento<br>• Actualización de dependencias |
| **Customers** | • Mejora en el formato de teléfono, ahora se selecciona automáticamente el país mediante cloudflare |
| **Channels** | • Corrige un problema de performance al usar el filtro by_tag en los templates liquid<br>• Mejora la experiencia de carga de templates al volver al template builder |
| **Content** | • Agrega la posibilidad de clonar espacios y tipos de contenidos |
### 10.0.1

:::tip Fecha del release
31 de mayo de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejoras de seguridad<br>• Mejoras de rendimiento<br>• Actualización de dependencias |
| **Customers** | • Soft login, ahora es posible el inicio de sesión mediante un código OTP que es enviado al correo electrónico<br>• Mejoras a los formularios de registro y profile |
| **Channels** | • Mejoras en el acceso a las variables de sitio, ahora son accesibles para ser vistas por cualquier rol<br>• Agrega la posibilidad de usar las variables globales y de sitios en las urls de los items de menú<br>• Agrega ordenamiento por ruta de las páginas en la vista de tabla |
| **Content** | • Se agrega la posibilidad de especificar una descripción a los spaces el cual es mostrado en el overview<br>• Se agrega la posibilidad de agregar una descripción a los tipos de contenido |
### 10.0.0

:::tip Fecha del release
03 de abril de 2024
:::

| Módulo | Mejoras |
|--------|---------|
| **Core** | • Mejoras de seguridad<br>• Mejoras de rendimiento<br>• Actualización de dependencias<br>• Nuevo diseño de la interfaz administrativa<br>• Agrega soporte para la invalidación de caché cuando se utiliza cloudflare para este fin, esto permite usar cachés más agresivos y que sean invalidados cuando modificamos las páginas, el contenido y las modificaciones a los assets del media library<br>• Agrega alerta de nuevo ingreso para usuarios administradores de la plataforma, ahora cuando se inicia sesión en un nuevo dispositivo se envía una notificación por correo electrónico |
| **Customers** | • Agrega integración con salesforce, ahora los contactos en salesforce y los usuarios de un reino pueden mantenerse sincronizados, pueden ser configurados para recibir y/o enviar cambios en la información de los usuarios<br>• Mejoras visuales en los formularios de registro e inicio de sesión<br>• Mejoras en la creación de campañas de correos, ahora se pueden clonar para realizar nuevos envíos y se simplifica la vista principal<br>• Elimina el rol none, ahora todos los usuarios por defecto serán account users |
| **Channels** | • Agrega a la construcción de menús la opción de agregar el buscador como item<br>• Plantilla mejorada para nuevos sitios, más simple y con referencia al framework desde el inicio<br>• Agrega snippets globales, ahora es posible definir un snippet de código y utilizarlo en los distintos sitios de la cuenta, también se incluye un selector de draft o publicado en el preview<br>• Mejora el preview de widgets, ahora se puede seleccionar el layout del sitio con el cual previsualizar el widget<br>• Agrega la posibilidad de previsualizar los widgets de forma local. Al trabajar con el CLI de Modyo ahora puedes ejecutar un preview del widget en desarrollo y verlo directamente en el navegador con la posibilidad de montarlo en los distintos layouts que contiene el sitio de destino<br>• Incluye soporte para chunks en los widgets del CLI, ahora la plataforma acepta un zip con los datos del widget más los chunks asociados<br>• Mejoras en la interfaz de widgets cuando estos provienen desde el CLI<br>• Agrega procesamiento de imágenes cuando se utiliza cloudflare, a través del filtro de assets se puede especificar tamaño y calidad de la imagen a mostrar o un conjunto de tamaños como srcset, esto beneficia el rendimiento de los sitios que se construyen<br>• Mueve las configuración de variables globales al contexto de channels<br>• BREAKING CHANGE: Se eliminan los widgets de contenido: Content List y Content Featured, pueden ser reemplazados mediante un widget html y el uso del sdk de liquid |
| **Content** | • Agrega grupos repetibles en contenido, ahora en la definición de types de contenido está la opción de grupo repetible el cual puede definir múltiples campos como un grupo que puede ser instanciado muchas veces en la creación de una entrada<br>• Agrega Media Library, ahora el asset manager pasa a ser media library el cual existe dentro de un space y no a nivel global, esto permite tener un mejor manejo de permisos y organización de los assets subidos a la plataforma, también puede ser usado en channels mediante el modal de media library y dejar el contexto específico de los assets a la aplicación en uso |
