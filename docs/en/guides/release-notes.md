---
search: true
---

# Notas del release

## 9.0.2  (04 de Febrero del 2020)
* MODYO-10594 — Actualizar Gemfile Lock
* MODYO-10496 — Cambiar dropdown de sitos por select2 con buscador
* MODYO-10512 — Añadir configuración de API key de google a las settings de la cuenta
* MODYO-10524 — Añadir filtros de ordenamiento a sdk de liquid de content
* MODYO-10614 — Añadir widgets HTML y texto a comparable
* MODYO-10523 — Actualizar cached targets list al actualizar usuario
* MODYO-10540 — Mejora modal de programación de publicación
* MODYO-10541 — Error al limitar el tipo de contenido en field de listado de entries
* MODYO-10579 — Error con Team review y entries archivadas
* MODYO-10581 — Añadir hint descriptivo de Team Review
* MODYO-10583 — Hacer consistente búsqueda de pages
* MODYO-10585 — Mover before_action antes del load_content_type
* MODYO-10589 — Cambiar selector de espacios en widgets de contenidos por select2
* MODYO-10593 — Añadir valor de variable de entorno a migración de API key de google
* MODYO-10595 — Link de correos de admin llevan a login de usuarios
* MODYO-10598 — Añadir fondo cuadriculado a preview de imágenes del index de asset manager
* MODYO-10600 — Compatibilidad con JS SDK
* MODYO-10602 — Eliminar APIs de perishable token
* MODYO-10603 — Corregir UISelect con opciones fijas y valor inicial
* MODYO-10605 — Añadir tooltip de reindexación en curso en content type builder
* MODYO-10615 — Error al parsear atributos no-string en content
* MODYO-10596 — Hacer consistente tabs vacíos de usuarios
 
## 9.0.1  (17 de Enero del 2020)
* MODYO-10497 — Implementar preview de contenido en sitios con vistas custom
* MODYO-10517 — Manejo de error en asset manager
* MODYO-10544 — Error en preview en sitios con custom domain
* MODYO-10553 — Error al cargar diferencias de builders de channels
* MODYO-10556 — Arreglar consulta de entradas en vistas custom
* MODYO-10561 — Error al crear nuevo espacio
* MODYO-10415 — Evaluar solución para tener contexto en los builder inmersivos
* MODYO-10502 — Se pierde el lock en pages cuando falla la publicación
* MODYO-10522 — Consistencia entre url de sitios y espacios
* MODYO-10529 — Error al duplicar una entrada
* MODYO-10530 — Mejorar comportamiento de creación de entradas y atributo slug
* MODYO-10564 — Arreglar breadcrumb en entry builder
* MODYO-10513 — Indicar relaciones de widgets hacia pages
* MODYO-10536 — custom_fields en user drop no entrega los valores adecuados
* MODYO-10537 — No se actualiza los caches asociados al modificar un user custom field
* MODYO-10545 — Asset manager se pierde al no existir un asset
* MODYO-10552 — Cambiar valor de placeholder de tags en index de widget
* MODYO-10559 — Vista de diferencias carga siempre comparando versiones editables
* MODYO-10572 — Añadir name y slug como elementos diferenciables e las entries
* MODYO-10576 — Error con flash en login required

## 9.0.0 G.A (19 de Diciembre del 2019)
* MODYO-10307 — Corregir y comprimir migración de contenido
* MODYO-10369 — Error al añadir custom widgets en pages
* MODYO-10424 — Overlay de Custom Widgets con error
* MODYO-10371 — React-Rails no está desmontando componentes
* MODYO-10374 — Error en index de roles
* MODYO-10376 — Error al hacer cambios en rich text component
* MODYO-10432 — Revisor o Admin sin permiso "full_admin" no puede revisar
* MODYO-10437 — Error 500 al entrar a un widget sin owner
* MODYO-10504 — Error al publicar o despublicar pages con muchos backups
* MODYO-10507 — Error con link de template builder
* MODYO-10521 — Error de liquid con sdk de content en preview de widgets personalizados
* MODYO-10375 — Error de JS al hacer drag and drop de user custom fields
* MODYO-10377 — Error de sincronización de froalas en page builder
* MODYO-10380 — Error parseando URI en force_ssl
* MODYO-10385 — Buscar y eliminar JS y CSS legado de la pelota de sesión que ya no existe
* MODYO-10421 — Error con traducciones de select2
* MODYO-10422 — Error en endpoints de tags de usuarios
* MODYO-10430 — Error de diagramación de selects en team members
* MODYO-10431 — Error de diagramación con selectores de versiones en modal de diferencias
* MODYO-10434 — Error en index de widgets por owner nulo
* MODYO-10439 — Error en site settings con locks
* MODYO-10486 — Error en correo de recuperación de contraseña de adminUser
* MODYO-10491 — Error con SDK de liquid y contenido privado/targetizado
* MODYO-10499 — Error de permisos en modal de asset manager
* MODYO-10503 — Error al entrar a vista edit de usuarios creados con LDAP
* MODYO-10519 — Error con filtro de widgets de contenido
* MODYO-10525 — Custom robots.txt no se puede modificar
* MODYO-10240 — Crear tema minimal 2020
* MODYO-10284 — Botones de integraciones desaparecen cuando se deshabilitan los registros
* MODYO-10331 — Estandarizar componente Select
* MODYO-10347 — Añadir hints a vista de nueva plantilla de correo
* MODYO-10364 — Error al crear snippets con nombre de template vista
* MODYO-10365 — Restaurar available_locales en api de content
* MODYO-10367 — Plantillas de correos electrónicos
* MODYO-10378 — Bulk disable en admins no está funcionando
* MODYO-10379 — Eliminar la pelota de sesión en el frontend
* MODYO-10381 — Recuperar header HSTS que se implementó en 8.2
* MODYO-10382 — Mejorar diagramación etiqueta "Published" en los Layout Pages
* MODYO-10383 — Cambiar tabs por filtro en vista de actividad reciente
* MODYO-10384 — Mejorar diagramación de componente de tabla/logs
* MODYO-10386 — Reducir número de partials involucrados en el proceso de login/signup
* MODYO-10387 — z-index en page builder con widget html en pantalla completa
* MODYO-10401 — Selector de color no permite personalizar colores
* MODYO-10402 — Ajustar padding de selector en vista "Home"
* MODYO-10403 — Widget builder con opción en el menú descuadrada
* MODYO-10405 — Estilo de redes sociales como botones en login de usuarios
* MODYO-10406 — Borde que no corresponde en vista de webhooks
* MODYO-10407 — Formulario de agregar nuevo usuarios administrador viola el ancho máximo
* MODYO-10410 — Eliminar check de habilitación de webhooks (no sirve)
* MODYO-10411 — Sacar el full screen por defecto del Navigation Builder y del Template Builder
* MODYO-10412 — Remover icono sandwich en los Builder "inmersivos"
* MODYO-10416 — Error 500 al ingresar al edit de un user custom field que no existe
* MODYO-10418 — Páginas de error por defecto (Rails)
* MODYO-10425 — Agregar información de usuario autenticado por Liquid al template Minimal
* MODYO-10426 — Ampliar (en responsive) la caja de login/signup a toda la pantalla
* MODYO-10428 — Evaluar eliminar el me page
* MODYO-10429 — Breadcrumb no funciona
* MODYO-10433 — CSS Liquid filter
* MODYO-10435 — Errores sin formato al crear sitio
* MODYO-10436 — 404 en /login de usuarios cuando se deshabilitan las credenciales de Modyo
* MODYO-10441 — UISelect no se deshabilita cuando corresponde
* MODYO-10442 — Eliminar interpolación de i18n muerta de "site.translate"
* MODYO-10443 — Arreglar el paginador del /panel
* MODYO-10444 — Redirección al sitio después del logout
* MODYO-10445 — Mejorar formato correos a nivel de cuenta
* MODYO-10449 — Error con icono para añadir imagen de froala en modo responsive
* MODYO-10450 — Remover código muerto de métodos "translate"
* MODYO-10451 — Headers de licencia en el código
* MODYO-10454 — Eliminar vista legacy del me
* MODYO-10455 — Eliminar configuración de visibilidad de pelota de sesión
* MODYO-10458 — Agregar background green a la etiqueta INS
* MODYO-10459 — Actualización de Puma a 4.3.0
* MODYO-10460 — Error al crear slug por primera vez en idioma secundario
* MODYO-10461 — Available locales no está en serializers de entries
* MODYO-10462 — Mostrar siempre botón para mostrar actividad
* MODYO-10464 — Empaquetado RPM
* MODYO-10465 — Filtro de entradas traducidas no funciona correctamente
* MODYO-10466 — Crear liquid para usar paginación
* MODYO-10467 — Error 500 al usar un correo existente en profile
* MODYO-10468 — [CVE-2019-18848] Actualizar json-jwt a version 1.11.0
* MODYO-10470 — Esconder menú de commerce por opción del plan
* MODYO-10473 — JRuby 9.2.9.0 runtime
* MODYO-10474 — Borrar el search desde el profile
* MODYO-10475 — Error con opciones acopladas en form builder
* MODYO-10476 — Error con file uploader al guardar cambios en profile
* MODYO-10480 — Error con redirect timeout en forms
* MODYO-10481 — Error en redirección cuando las credenciales son inválidas
* MODYO-10482 — Froala no está limpiando scripts de campos rich text
* MODYO-10483 — Error de permisos al crear un comentario
* MODYO-10484 — Error con método set as default de planes del panel
* MODYO-10485 — Upgrade de gema de Redis
* MODYO-10488 — Estilos de tabs cuando existe un "overflow" en el editor de templates
* MODYO-10489 — Error en formato de correos
* MODYO-10493 — Añadir logs de spaces y team review a webhooks
* MODYO-10500 — Añadir documentación de API de users y admin_users a Swagger
* MODYO-10509 — Titulo repetido en PWA
* MODYO-10511 — Flash message invisible en user login
* MODYO-10322 — Error en rutas de doorkeeper
* MODYO-10323 — Mejorar uso de logo de cuenta personalizado en admin
* MODYO-10326 — Añadir espacio a nombre en componente de notas de usuario
* MODYO-10330 — Eliminar country_id de users y admin users
* MODYO-10355 — Error al modificar ubicación de locations no guardadas
* MODYO-10408 — Etiqueta "API Access" debería decir Admin API Access en su title
* MODYO-10427 — Acción para "editar" el theme que actualmente está instalado
* MODYO-10471 — Filtro de tipos en Activity logs muestra claves de traducción
* MODYO-10487 — Mejorar interacción de búsqueda en asset manager

## 9.0.0.rc3
* MODYO-10289 — Añadir renderizado de entries en sitios
* MODYO-10340 — Error al entrar a template y widget builder
* MODYO-10267 — Error visual con calendarios en modal de publicación
* MODYO-10270 — Filtro de categoría en widgets de contenido no está funcionando correctamente
* MODYO-10275 — Añadir scope current_and_visible a widget content show
* MODYO-10290 — Añadir locale a whitelist de parámetros de caché actions
* MODYO-10291 — Error en ruta de creación de forms
* MODYO-10292 — Error de sincronización de cursor en widgets HTML en pantalla completa
* MODYO-10298 — Error al ver diferencias en pages con widgets de texto enriquecido
* MODYO-10299 — No se ve contenido de widgets de texto enriquecido en pages
* MODYO-10304 — Errores de RegExp en edit de entry gatillan 500 en modyo
* MODYO-10305 — Error en show de una campaña de correos
* MODYO-10306 — Envío de prueba de campañas de correo no envía correo
* MODYO-10311 — Error con altos de codemirror en template builder
* MODYO-10312 — Template builder se quedó con altura fija
* MODYO-10353 — Añadir slug a serializador json de entries
* MODYO-10218 — Implementar edit en modal desde dataTable
* MODYO-10245 — Error 500 en usuarios admin creados con LDAP y OAuth2
* MODYO-10248 — Error de JS al entrar a configuración de correos de customers
* MODYO-10250 — Error al reindexar types con fields con "." en su nombre
* MODYO-10254 — Eliminar sincronización de claims en OpenIDConnect de AdminUsers
* MODYO-10255 — Cambiar editores css y html de froala a codemirror
* MODYO-10257 — ArgmentError handling
* MODYO-10271 — Filtro de tags en entry index no muestra tags de página 2
* MODYO-10277 — Error en edit de una entry
* MODYO-10278 — Restaurar filtros de liquid para uso de mapas
* MODYO-10288 — Error en lógica de registro de usuarios desde el sitio
* MODYO-10295 — Error con URL de edición de campañas en index de messagign
* MODYO-10296 — Navigation builder perdió lista de pages publicados
* MODYO-10300 — Errores react-rails
* MODYO-10303 — [ReactRails] Error en index de widgets con filtro de tags
* MODYO-10309 — Habilitar editor de texto por defecto de froala (no code mirror)
* MODYO-10310 — Poner un max height al editor codemirror y a froala
* MODYO-10314 — Nombres de sitios se evalúan como JS
* MODYO-10315 — Mejorar listado de usuarios disponibles en site/space team members
* MODYO-10316 — Error al habilitar/deshabilitar correos de customers
* MODYO-10317 — Modal de assets oculta elementos seleccionados en entries
* MODYO-10318 — Correos de activación de admins ligados a configuración de customers
* MODYO-10325 — Error en contador de target matches en index de targets
* MODYO-10327 — [ReactRails] Error al abrir selector de snippets en template builder
* MODYO-10328 — [ReactRails] Error de JS al hacer preview en builders
* MODYO-10333 — Error con selector de parent layout en page builder
* MODYO-10337 — Error al entrar al show de algunos submissions
* MODYO-10339 — Error al filtrar pages archivadas
* MODYO-10342 — Error de JS en show de user de customers
* MODYO-10343 — Error con links de usuarios en index
* MODYO-9835 — Implementar funcionalidad para copiar pages
* MODYO-9993 — Integrar gema React-Rails
* MODYO-10075 — Desactivar campos de locations si no hay key de google maps
* MODYO-10135 — Definición Estructura SDK
* MODYO-10140 — Obtener Entries públicas
* MODYO-10143 — Crear Condiciones para filtrar entries en SDK
* MODYO-10146 — Ordenar resultados de entries en sdk
* MODYO-10148 — Filtrar respuesta del servidor en sdk
* MODYO-10168 — Crear endpoint de API pública de content que liste el árbol de categorías del space
* MODYO-10222 — Soporte para modal en data table
* MODYO-10226 — Textos de componente de team review no cambian de idioma
* MODYO-10242 — Mejoras a menú de navegación del admin
* MODYO-10243 — Eliminar columna site_id en tabla de tags
* MODYO-10260 — Corregir error al enviar correo de signup
* MODYO-10266 — Link de acción para editar admin users no tiene el contexto de settings
* MODYO-10269 — Error al publicar entries con field values tipo assets
* MODYO-10272 — E500 en errores de campo fields
* MODYO-10273 — Widget no filtra correctamente por tag y categoría
* MODYO-10274 — Error en field tipo archivo cuando se guarda sin un archivo
* MODYO-10281 — Mejoras a filtro de categorías
* MODYO-10282 — Eliminar gema WYSIWYG-rails y traspasar a componente todos sus usos
* MODYO-10283 — Mejoras a Editor WYSIWYG Froala
* MODYO-10319 — Asset manager se carga detrás de froala en pantalla completa
* MODYO-10321 — Restaurar funcionalidad para slugificar títulos
* MODYO-10324 — Arreglar detalles de traducciones
* MODYO-10329 — Error en namespaces con rutas de documentación
* MODYO-10336 — Dar margen en snippets en Template Builder
* MODYO-10338 — Error con footer de modal de selector de entries
* MODYO-10345 — Error en traducción index de mensajes
* MODYO-10346 — Error de ruta con link de show de campañas
* MODYO-10349 — Error con subversiones (papertrail) en templates
* MODYO-10350 — Error con link edit desde index de campañas
* MODYO-10351 — Envío de formulario en discovery de integración OIDC
* MODYO-10357 — [CVE-2019-16676] Issue de seguridad con simple forms
* MODYO-10359 — Error al ocultar sitios
* MODYO-10360 — Error visual en vista de lock de types
* MODYO-10020 — Revisar configuración de nginx de referencia

## 9.0.0.rc2
* MODYO-10184 — Revisar alertas de seguridad de Github
* MODYO-10189 — Revisores y Editores no pueden publicar
* MODYO-10227 — Error de JS al hacer rollback impide hacer la acción
* MODYO-10228 — Elementos archivados/despublicados siguen apareciendo en widgets de contenido
* MODYO-10244 — Error con botones deshabilitados
* MODYO-10246 — Error 500 al entrar a widgets del widget builder luego de script de borrado
* MODYO-10259 — Listado de widgets da un error 500
* MODYO-9928 — Rutas finales y permisos
* MODYO-10187 — Botón enviar a revisión no aparece en widgets pusheados por la CLI
* MODYO-10190 — Mejorar el performance del renderizado de templates
* MODYO-10192 — Cambiar componente team members de sitio y spaces por dataTable
* MODYO-10197 — Mejorar seguridad en uso de autenticaciones
* MODYO-10220 — Deuda técnica y errores en integraciones
* MODYO-10234 — Error en modal de diferencias
* MODYO-10235 — Resolver alerta de seguridad en GitHub por gema nokogiri
* MODYO-10247 — Ruta de edición de roles no tiene el contexto de settings
* MODYO-5207 — Restituir funcionalidad para reordenar archivos en field tipo asset list
* MODYO-10156 — Mejorar plantillas de campañas de correo por defecto
* MODYO-10186 — Mantener caja de aprobaciones al pasar a estado "aprobado"
* MODYO-10188 — Widgets de contenido no filtran por categoría
* MODYO-10191 — Texto de condiciones de team review en navigation builder está roto
* MODYO-10193 — Template builder y entry builder no muestran el listado de revisores
* MODYO-10208 — Listado de tags en widgets de contenido tiene contexto de sitio
* MODYO-10212 — Implementar show de una entry en el sdk de liquid
* MODYO-10213 — Error en validación de mínimo en fields tipo decimal
* MODYO-10214 — Validar expresión regular en fields de texto simple
* MODYO-10215 — Añadir hints en configuración de spaces y sitios
* MODYO-10216 — Reducir valores disponibles en space caché
* MODYO-10217 — Crear rol developer-cli
* MODYO-10219 — Componente de assets no se refresca al crear un nuevo idioma en una entry
* MODYO-10230 — Error de JS al usar galería de temas
* MODYO-10231 — Error visual en input de fecha de inicio en export de respuestas a formularios
* MODYO-10232 — Error visual en vista edit de targets
* MODYO-10238 — Error en submenu de configuraciones de usuarios
* MODYO-10256 — Manifiesto PWA se ve como checkbox
* MODYO-10258 — Rutas .json en pages
* MODYO-10262 — Error en link para editar widgets desde page builder
* MODYO-10263 — Error en link de tabla de miembros del equipo
* MODYO-10264 — Error con validación de botón editar widgets en el page builder
* MODYO-10200 — Esconder tooltip de revisión en en estado aprobado
* MODYO-10201 — Implementar búsqueda de sitios y spaces
* MODYO-10209 — Vista PWA tiene títulos al revés
* MODYO-10221 — Error con renderizado de checkboxes
* MODYO-10223 — Restaurar comando para guardar cambios en template/widget builder
* MODYO-10229 — Arreglar detalles vista team members de space y sitio
* MODYO-10233 — Error en formulario de creación de webhooks
* MODYO-10237 — Error en avatar de usuarios en form responses
 
## 9.0.0.rc1
* MODYO-9810 — Diseño de las mejoras
* MODYO-9902 — Discutir y resolver dudas de concepto de archivado y soft delete
* MODYO-9947 — Framework de publicación: Elementos aparecen despublicados pero se ven en el sitio público
* MODYO-9949 — Error 500 al eliminar un admin del space team members
* MODYO-9966 — Error de JS al guardar un entry con un dropdown requerido sin valor
* MODYO-9994 — Error al reindexar entries
* MODYO-10062 — Problemas de infraestructura y paralelismo con ElasticSearch
* MODYO-10165 — Filtro de categoría no está funcionando en API de content
* MODYO-9728 — Implementar indices y triggers de indexación en elasticsearch para content
* MODYO-9783 — Añadir restricciones a team review
* MODYO-9851 — Error 500 al eliminar reviewer
* MODYO-9874 — Dirty de pagebuilder no se está marcando al modificar contenido del widget HTML
* MODYO-9884 — Error al publicar pages
* MODYO-9913 — Actualizar migraciones de contenido que reflejen el estado de los modelos
* MODYO-9935 — Error al entrar al form builder
* MODYO-9952 — Crear workflow al crear la primera version de un elemento
* MODYO-9957 — Error al despublicar una entry
* MODYO-9965 — Error al entrar a un idioma de una entry que no ha sido creada aún
* MODYO-9970 — Error con estado dirty al modificar widgets de un page
* MODYO-10006 — Error al enviar templates a revisión
* MODYO-10021 — Compactar y optimizar migraciones
* MODYO-10065 — Librerías de modyo se cargan al cerrar el body
* MODYO-10070 — Error de JS al intentar guardar un widget del widget builder
* MODYO-10074 — Error en validación de publicación de pages anidados
* MODYO-10079 — Controlar excepciones al reindexar content types
* MODYO-10163 — Error en api de content con ordenamiento
* MODYO-9587 — Cambiar etiquetas y analizar usabilidad de vocabulario
* MODYO-9599 — Arreglar insights para que cuenten los logs correspondientes - post migración content y team review
* MODYO-9715 — Liberar restricciones de owner de la cuenta
* MODYO-9731 — Implementar búsqueda de content en indices de elasticsearch
* MODYO-9836 — Filtros de targets no están usando traducciones
* MODYO-9837 — Revisar performance de assets en entry builder
* MODYO-9843 — Informar cuanto espacio hay consumido del total de GB permitido
* MODYO-9844 — Mejoras asset manager
* MODYO-9845 — Error en tag picker
* MODYO-9855 — Tab de "team activity" usa logs de usuario y no de admin users
* MODYO-9863 — Error 401 en permiso en entry builder
* MODYO-9869 — Error al crear dos campos en un type con el mismo nombre
* MODYO-9875 — Error en url de relaciones de entries de API de content
* MODYO-9880 — Cambiar ruta de API de content_types a types
* MODYO-9881 — Refrescar estados de modal luego de publicar
* MODYO-9890 — Template builder perdió la barra de hints y cambios por permisos
* MODYO-9895 — Falta estado "pending changes" en el API list widget builder
* MODYO-9922 — Añadir funcionalidad de crop on demand de assets tipo imagen
* MODYO-9924 — Archivar elemento no valida que el elemento esté despublicado
* MODYO-9925 — Error al entrar a la vista SEO de las settings del sitio
* MODYO-9953 — Añadir atributos de assets en serializador de content
* MODYO-9954 — Error al añadir/eliminar reviewers con un usuario no full admin
* MODYO-9991 — Error al guardar JSON de entry/Eliminar JSON de entries en BD
* MODYO-10054 — Añadir querys de spaces al whitelist de permisos de admins de sitios
* MODYO-10080 — Redirect relativo en account signin redirect url
* MODYO-10125 — Validar que haya por lo menos un administrador en sitios y spaces
* MODYO-10127 — Error al eliminar revisores de team review
* MODYO-10128 — Error de JS al habilitar restricción de selección de revisores
* MODYO-10139 — Tomar lock de elementos editables sólo cuando se guardan cambios
* MODYO-10182 — Error de caché al publicar pages con team review habilitado
* MODYO-9554 — Mejorar logs en Contenido
* MODYO-9560 — Añadir mensajes de errores en entry builder
* MODYO-9669 — Limpiar dependencias de signups en admin profile
* MODYO-9688 — Eliminar internal layout page
* MODYO-10005 — Resolver el cache del "origin" para CORS y Nginx
* MODYO-9759 — Implementar mejoras para poder usar admin de modyo como PWA
* MODYO-9806 — Test de Exploración I
* MODYO-9807 — Quitar CodeMirror de la vista /admin/payments/commerce_settings
* MODYO-9808 — Al crear medio de pago el tipo debe estar dentro del formulario, no puede ser opción de tercer nivel
* MODYO-9809 — Refactor de Permisos y Lógica de Roles
* MODYO-9812 — Error de redirección al crear target
* MODYO-9828 — Separar las space settings
* MODYO-9842 — Spaces en español debe quedar traducido como "Espacios"
* MODYO-9846 — Etiquetado de unpublish changes en template, widget y navigation builder
* MODYO-9847 — Vista my tasks no tiene título
* MODYO-9849 — Texto harcodeado en filtro de vista my tasks
* MODYO-9852 — Cambiar traducción space settings
* MODYO-9853 — Añadir permiso para ver "My tasks"
* MODYO-9857 — Eliminar posibilidad de crear roles del tipo space y site
* MODYO-9858 — Crear roles por defecto de cuenta
* MODYO-9859 — Crear roles por defecto de space
* MODYO-9860 — Crear roles por defecto de site
* MODYO-9861 — Cambiar traducción de campo username en formularios de inicio de sesión
* MODYO-9862 — Cambiar traducciones de setings de elementos por porperties
* MODYO-9864 — Quitar restricción de permisos para admin/home
* MODYO-9865 — Error en vista de creación/edición de roles refresca la vista y pierde todos los checks seleccionados
* MODYO-9866 — Refrescar actividad cuando se hacen cambios en un entry
* MODYO-9867 — Añadir funcionalidad para añadir usuarios a spaces
* MODYO-9868 — Añadir funcionalidad par añadir usuarios a sitios
* MODYO-9872 — Eliminar label de privacidad en modal de creación de widgets
* MODYO-9873 — Permitir uso de liquid drops en el HTML de los custom widgets
* MODYO-9876 — No hay favicon por default de Modyo en el backend
* MODYO-9879 — Error 500 al filtrar por estado en index de entries
* MODYO-9883 — Texto de aprobación debe ser arreglado en "My tasks"
* MODYO-9885 — Error de sincronización de froala en page builder
* MODYO-9886 — Implementación restricciones del Team Review
* MODYO-9887 — Componente ReviewerSelector
* MODYO-9888 — Acción "Archive" repetida en el widget builder
* MODYO-9889 — Error al cambiar de widget HTML en page builder
* MODYO-9892 — Ocultar elementos archivados en index
* MODYO-9893 — Columna "Name" del asset manager se sale de sus bordes
* MODYO-9896 — Edit de widget builder no queda activo en menú
* MODYO-9897 — Dejar dropdown con mensaje de vacío en snippets
* MODYO-9899 — Corregir tamaño de columna en assets modal
* MODYO-9900 — Copy button refactor, agregar tooltip
* MODYO-9901 — Estandarizar acción de archive en los dots verticales
* MODYO-9903 — Agregar módulo de publicación/ archivado a Widgets
* MODYO-9904 — Archivos de imagen no estándar fallan al subirse al asset manager
* MODYO-9905 — Agregar tooltip a la columna de author en las entries
* MODYO-9907 — Homologar texto de información de espacio en el Asset Manager
* MODYO-9908 — Mejorar zona de "drop files" en el file uploader
* MODYO-9911 — Cambiar columna "sitio" por "contexto" en activity logs
* MODYO-9912 — Dropdown tags, agregar mensaje de empty
* MODYO-9914 — Ordenar index de entries desde la mas recientemente modificada
* MODYO-9915 — Botón save queda tomado cuando falla al guardar
* MODYO-9916 — Eliminar elemento no marca como dirty el navigation builder
* MODYO-9917 — Entry builder con múltiples opciones se marea cuando hay opciones con el mismo texto
* MODYO-9918 — Agregar/mapear permisos faltantes
* MODYO-9919 — Las settings de space no manejan el lock
* MODYO-9920 — Entry builder no maneja el lock
* MODYO-9923 — Error drag on UIElementTree draggable en menu builder y layoutbuilder
* MODYO-9926 — Error 500 al entrar a template builder
* MODYO-9927 — Archivos de imagen especiales no deben mostrar opciones de crop y resize
* MODYO-9929 — Revisión de migraciones con BD clonada de producción (Modyo Cloud)
* MODYO-9930 — Test de Exploración III
* MODYO-9931 — Agregar tags con el "bulk add" en el Asset Manager no funcionó
* MODYO-9936 — Error al entrar a configuración general de usuarios
* MODYO-9937 — Traducción de última publicación de modal de diferencias dejó de funcionar
* MODYO-9938 — error con tamaño de thumb de assets en modal
* MODYO-9940 — nav session avatar margin error
* MODYO-9941 — dejar que funcione el data parent de los acordiones en form settings
* MODYO-9942 — Eliminar antiguos roles y migrar full admins
* MODYO-9944 — Index sin data deben mostrar la barra de filtros
* MODYO-9945 — Navigation builder muestra "0" en vez de selector de pages
* MODYO-9946 — Eliminar botón "eliminar" page
* MODYO-9951 — Error en submenú de entries multi-idioma
* MODYO-9955 — Error al cambiar de idioma y barra de url
* MODYO-9958 — Mejoras al listado de revisores de team review
* MODYO-9959 — Ordenar revisores seleccionados y disponibles en selector
* MODYO-9960 — Texto "Requerido" debe estar pegado al nombre (alinear izquierda)
* MODYO-9961 — Listado de revisores muestra usuarios que no pertenecen al space
* MODYO-9964 — Botón publish no muestra tooltip del por que está deshabilitado
* MODYO-9968 — Añadir validaciones por formato de archivo al asset manager
* MODYO-9969 — Añadir creación de roles por defecto al momento de crear una nueva cuenta
* MODYO-9971 — Agregar scope de /admin a los controladores de Doorkepeer
* MODYO-9972 — Error al intentar ejecutar consulta a la API pública desde la documentación
* MODYO-9976 — Control de cache entre Space y Sites cuando se usa el SDK Liquid
* MODYO-9977 — Al crear una Entry el botón del popup debería decir "Create"
* MODYO-9978 — Corregir migración de contenido por cambios en modelo
* MODYO-9980 — Error en space admin al entrar a settings de idioma de space
* MODYO-9981 — Remover del popup de asset la opción de seleccionar el tamaño
* MODYO-9982 — Error de JS al limpiar campo de búsqueda en modal de asset manager
* MODYO-9983 — Actualizar webpacker y dependencias
* MODYO-9984 — Integrar modal asset manager con icono de froala
* MODYO-9985 — Forzar SSL en API de content y admin
* MODYO-9988 — PWA en admin vuelve al menu de cuenta cuando se está en un contexto y no hay conexión
* MODYO-9990 — Mejorar visibilidad de errores al reindexar content types
* MODYO-9995 — Exploración V
* MODYO-9996 — Añadir funcionalidad de "more info" en logs de actividad de team review
* MODYO-9998 — Widgets de contenido no tienen tooltip o descripción
* MODYO-9999 — Restaurar funcionalidad de duplicar contenido
* MODYO-10001 — Liquid tag de assets debe imprimir el img tag con titulo, descripción y alt-text
* MODYO-10002 — Sistema permite guardar space settings al eliminar los reviewers forzados
* MODYO-10003 — Arreglar diseño caja de widgets
* MODYO-10004 — Problema con modal de asset
* MODYO-10008 — Refactorizar método "published" por visible
* MODYO-10009 — Validar revisores de team review via API
* MODYO-10011 — Agregar validación al crear un widget
* MODYO-10012 — Error de redirección al edit de una entry en un idioma desde "My tasks"
* MODYO-10013 — Error en validación field no requeridos pero con restricciones
* MODYO-10014 — Hacer que cajas de insights digital factory usen todo el espacio horizontal
* MODYO-10015 — Cambiar botón de save por crear en el index de spaces
* MODYO-10017 — Mejoras en tag de liquid de assets
* MODYO-10018 — Añadir selector de idioma a los widgets de contenido
* MODYO-10022 — Test de expresiones regulares en type builder no está funcionando
* MODYO-10025 — Error de permisos al abrir modal de edición de assets
* MODYO-10026 — Error de permisos al eliminar un asset
* MODYO-10027 — Error de permisos habilitar workflows en channels y content
* MODYO-10028 — Evitar carga múltiple de librería de google maps en entry builder
* MODYO-10029 — Especificar error en flash de error al guardar usuarios
* MODYO-10030 — Validaciones de entry se ejecutan solo en los update y no en los create
* MODYO-10032 — Eliminar target locale de etiqueta de estado de entry
* MODYO-10033 — Validar idiomas de entry idiomas de space para crear entries
* MODYO-10034 — API de content perdió URL de entries
* MODYO-10035 — Actualizar traducciones faltantes
* MODYO-10036 — Configuración de spaces muestra admins de todos los spaces
* MODYO-10037 — Widgets de contenido si/no muestran selector de idioma
* MODYO-10038 — Error al indexar custom layout pages
* MODYO-10039 — Error al guardar content type
* MODYO-10040 — Optimización del PWA Manifest
* MODYO-10041 — Forzar actualización de serviceworker cuando cambia la versión de modyo
* MODYO-10042 — Error con validaciones de campos en entry builder
* MODYO-10043 — Error de validación de permisos de publicación en usuario writer
* MODYO-10044 — Estandarizar estilo caja de revisores
* MODYO-10045 — Error al listar pages archivados en page index
* MODYO-10046 — Exploración VII
* MODYO-10051 — Refactorizar log list serializer para que se muestre correctamente en view details
* MODYO-10052 — Mejoras en formulario de cambio de contraseña
* MODYO-10053 — Mejora a comportamiento al guardar una entry
* MODYO-10055 — 401 al restaurar roles por defecto con default admin
* MODYO-10056 — Quitar validación de imágenes en modal de asset manager
* MODYO-10057 — Error al importar usuarios
* MODYO-10059 — Seleccionar revisores no muestra usuarios de la página 2
* MODYO-10061 — Usuario site admin no ve configuración de sitios
* MODYO-10064 — Añadir validación para unicidad de full_path de pages
* MODYO-10066 — Error con tag picker para dominios permitidos en integración con google
* MODYO-10067 — Error con tag picker en notificaciones en form builder
* MODYO-10068 — Error de diagramación en formulario de nuevo form
* MODYO-10069 — Mejoras a permisos de account, space y sites
* MODYO-10071 — Error 500 al guardar integración de google con dominio restringidos
* MODYO-10072 — Manejar error de validación HTML de widgets HTML
* MODYO-10077 — Error en ordenamiento en widgets de contenido en pages
* MODYO-10078 — Traducciones faltantes en page builder
* MODYO-10081 — Botón de atajos fuera de lugar
* MODYO-10084 — Validación de scope en valores de field tipo content type
* MODYO-10085 — Eliminar entry.url
* MODYO-10086 — Exploración VIII
* MODYO-10087 — Archivar widgets no refresca instancia de widget builder
* MODYO-10088 — Error con usuarios disponibles para ser asignados como revisores de channels
* MODYO-10090 — Mejora visual a etiquetas de estados en pages index
* MODYO-10091 — Calendarios de date/range picker no se ven como corresponde
* MODYO-10092 — Actualizar "require history" del módulo history
* MODYO-10093 — Eliminar traducciones obsoletas y agregar faltantes
* MODYO-10095 — Establecer orden de los roles de sitio y space
* MODYO-10096 — Añadir tooltip con descripción básica de cada rol
* MODYO-10100 — Estado de botón primario en entry builder al volver de una entry no creada
* MODYO-10102 — Error al crear nuevas entries sin validaciones
* MODYO-10103 — Error al cambiar de idioma no guardado en entries
* MODYO-10109 — Resolver deuda técnica de validación de grant de OpenID Connect
* MODYO-10110 — Value too long en path y nombre de pages
* MODYO-10111 — Site admin no puede aprobar templates en team review
* MODYO-10112 — Hacer que pages y types sean consistentes en migración de content
* MODYO-10113 — Error en URL de templates en vista "My tasks"
* MODYO-10114 — Añadir traducciones faltantes
* MODYO-10115 — Estandarizar botón de acciones en user custom fields
* MODYO-10116 — Deshabilitar botón de guardado en webhooks
* MODYO-10117 — Eliminar "Edit" de vista edit de targets, formularios y campañas
* MODYO-10118 — Alinear icono para borrar api access de team members
* MODYO-10119 — Error en validación de guardado de pages publicadas cuando se les cambia el padre
* MODYO-10121 — Error con texto en botón de modal de edición de assets
* MODYO-10123 — Error de JS al cargar revisores en entry builder
* MODYO-10124 — Reviewer no tiene permisos para hacer reject
* MODYO-10129 — Arreglar scroll de sidebar en entry builder y modo responsive
* MODYO-10131 — Evitar que revisor y editor puedan publicar saltándose el team review
* MODYO-10132 — Error de JS al entrar a activity logs
* MODYO-10136 — Filtro de admins en activity logs no usa parámetro user type
* MODYO-10137 — Error en vista previa de templates de correo
* MODYO-10138 — Evitar que migración de sub-versiones de papertrail se caiga con nombres
* MODYO-10149 — Error 500 al entrar a la galería de temas
* MODYO-10150 — Arreglar url de botones "view more" en widgets de contenido
* MODYO-10151 — Error de JS al buscar pages en el index
* MODYO-10157 — Mejorar correos que se envían como notificación de team review
* MODYO-10158 — Error con función para slugificar nombres/títulos
* MODYO-10159 — Eliminar migración que añade UID
* MODYO-10160 — Usar full path en vez de slug en asociación de categoría y entries
* MODYO-10161 — Filtro de tags no está funcionando en index de entries
* MODYO-10166 — Restaurar scroll en vista de creación de roles
* MODYO-10167 — Tooltip de descripción de roles se muestra en idiomas que no corresponden
* MODYO-10170 — Error 401 al duplicar una entry
* MODYO-10172 — Options endpoint para entries/entry_uuid
* MODYO-10173 — Deshabilitar botón publicar cuando no hay permisos y no está habilitado team review
* MODYO-10176 — Mejorar diseño de vista de locks.
* MODYO-10177 — Usuario site admin no tiene permisos de Team Members
* MODYO-10178 — Widgets no actualizan su estado "pending changes" después de publicar
* MODYO-10183 — Eliminar cookie de preview del sitio al hacer click en "go to site" del menú
* MODYO-9258 — Mejorar comportamiento de tag picker
* MODYO-9477 — Limpiar y agregar traducciones
* MODYO-9559 — Agregar test faltantes en content
* MODYO-9729 — Controlar el cache de la API de content
* MODYO-9779 — Documentación Content Public API
* MODYO-9814 — Añadir contexto en etiquetas de interpolación de correos
* MODYO-9827 — Añadir filtro por el autor en index de entries
* MODYO-9877 — Mensaje de eliminar roles es confuso
* MODYO-9979 — Añadir funcionalidad de administración de indices de content
* MODYO-10060 — Alineación de textos en modal asset manager
* MODYO-10063 — Añadir traducciones finales
* MODYO-10164 — Envío de prueba de campaña de pruebas debe enviar a adminUser
* MODYO-10179 — Arreglar problemas del populate
* MODYO-10185 — Cambiar texto de botón publicar de admin a "forzar publicación"
 
## 9.0.0.pre7
* MODYO-9707 — Implementar filtros y drops de liquid para acceder a spaces, content types y entries 
* MODYO-9722 — Implementar filtros y drops de liquid para asset manager 
* MODYO-9732 — Implementar API de profile 
* MODYO-9778 — Ordenamiento de entries en Content Public API 
* MODYO-9772 — Añadir idioma por defecto cuando se crea un space 
* MODYO-9803 — Filtros de lenguaje y lógica de traducción 
* MODYO-9826 — Problema de seguridad al cambiar contraseña de usuarios en admin 
* MODYO-9830 — Bug con las categorías en nuevos Spaces 
* MODYO-9552 — Implementar papelera de entries 
* MODYO-9553 — Implementar buscador en index de entries 
* MODYO-9769 — Arreglar links de usuarios en index de widgetbuilder y Pages 
* MODYO-9775 — Mejoras a asset manager 
* MODYO-9781 — Mejoras a diferencias de assets y entries 
* MODYO-9786 — Mejorar manejo de estado dirty en entry builder y multi idioma 
* MODYO-9787 — Implementar programación de publicación de pages 
* MODYO-9794 — Error al cargar diferencias de Targets en entry builder 
* MODYO-9796 — Refactorizar estado deleted a archived 
* MODYO-9797 — Eliminar public y colaboradores de widget builder 
* MODYO-9798 — Actualización de etiquetas y textos 
* MODYO-9799 — Refactorizar APIs de elementos publicables con nuevos estados 
* MODYO-9801 — Especificar el Locale (Idioma) en la creación del Space 
* MODYO-9802 — Utilizar moments.js para indicar fechas tipo "Creado hace xx días..." 
* MODYO-9813 — Mejora del selector de Tags 
* MODYO-9815 — Implementar cambios archivar 
* MODYO-9817 — Eliminar el soporte de fallback de idioma 
* MODYO-9818 — Link de "to translate" deben crear el entry para el locale activado 
* MODYO-9819 — Error en el mensaje "Empty" de Entries 
* MODYO-9820 — Eliminar el * rojo cuando el documento está Dirty 
* MODYO-9821 — Implementar etiqueta de status en el edit del documento 
* MODYO-9822 — Espacio irregular entre íconos 
* MODYO-9829 — Simplificar la vista de My Tasks 
* MODYO-9833 — Agregar estado de publicación en los index de Pages y Widgets 
* MODYO-9838 — Error con traducción en modal de publicación 
* MODYO-9839 — Mejoras en modal de edición de assets 
* MODYO-9840 — Último elemento de las tablas no abre sus acciones 
* MODYO-9841 — En My Tasks mostrar sólo las cosas que están en estado On Review 
* MODYO-9805 — En la tabla Entries hacer que el status y el tipo sean clickeables y me envíen a la edición de lo que toqué 
 
## 9.0.0.pre6
* MODYO-9730 — Implementar configuración de cross domain para el uso de la API de content 
* MODYO-9752 — Error de turbolinks en menu 
* MODYO-9765 — Añadir validaciones de nombre de space 
* MODYO-9756 — Error 500 al enviar test de campaña de notificación 
* MODYO-9770 — Error con componente date range picker 
* MODYO-9782 — Filtro por categoría no está funcionando 
* MODYO-9747 — Añadir drops de liquid para el user agent 
* MODYO-9757 — Edit de entry cambia de idioma al publicar un idioma 
* MODYO-9767 — Añadir permisos faltantes 
* MODYO-9773 — Error con locations e idiomas 
* MODYO-9774 — Valores por defecto de publicación 
* MODYO-9776 — Error con diferencias cuando cantidad fields entre versión current y editable no coinciden 
* MODYO-9780 — Error al filtrar entries por fechas mayor o menor que 
* MODYO-9784 — Error en API de content con filtros de tags 
* MODYO-9789 — Añadir "uuid" y "page" al cache whitelist de custom layout pages 
* MODYO-9792 — Cambios en meta data de los pages no están marcando como dirty 
* MODYO-9655 — Limpieza general de traducciones 
* MODYO-9706 — Implementar "copy from locale" en entry builder 
* MODYO-9740 — Implementar show-details en activity logs de la cuenta 
* MODYO-9743 — Mejoras de hint en template builder 
* MODYO-9748 — Documentation API i6 
* MODYO-9749 — Implementar interfaz para space settings 
* MODYO-9755 — Detalles post bootstrap 4 
* MODYO-9758 — Implementar los filtros por meta-data para entries 
* MODYO-9760 — Error checkbox y radios post bootstrap 4 
* MODYO-9762 — Arreglos panel bootstrap 4 
* MODYO-9766 — Mas cambios relacionados con bootstrap 4 
* MODYO-9771 — Ruta de fuentes no funciona con el precompile 
* MODYO-9777 — Error de JS en activity logs impide levantar el modal de info 
* MODYO-9785 — Detalles team review 
* MODYO-9788 — Error visual con paginación en modal de asset manager 
* MODYO-9791 — Añadir traducciones faltantes 
* MODYO-9236 — Mejoras al comportamiento con los timezones 
 
## 9.0.0.pre5
* MODYO-9661 — Implementar nuevo flujo de team review 
* MODYO-9662 — Implementar nueva interfaz de Team Review 
* MODYO-9645 — Implementar modal de asset manager 
* MODYO-9694 — Hacer upgrade a rails 5.2.2.1 
* MODYO-9697 — Hacer upgrade Ruby 2.6.2 
* MODYO-9711 — Restaurar configuración de workflows del sitio 
* MODYO-9725 — Crear entries endpoint 
* MODYO-9726 — Crear entry endpoint 
* MODYO-9727 — Crear schema endpoint 
* MODYO-9546 — Añadir Asset y Assets fields a aplicación content 
* MODYO-9547 — Añadir content Type fields a la aplicación de content 
* MODYO-9631 — Desinscripción de campañas de correo está afectando a las notificaciones 
* MODYO-9690 — Implementar permisos para spaces y mejorar interfaz de asignación de permisos de admins 
* MODYO-9698 — Error al responder un formulario sin preguntas 
* MODYO-9710 — Error al guardar/publicar entries con locations 
* MODYO-9714 — Error de javascript al entrar al index de admins 
* MODYO-9723 — Revisar migración de permisos de aplicaciones en spaces 
* MODYO-9133 — Implementar endpoint con información del usuario 
* MODYO-9549 — Implementar preview en entry builder 
* MODYO-9551 — Crear título para el entry 
* MODYO-9591 — Rediseñar el streamming de logs 
* MODYO-9636 — Eliminar vistas de búsqueda del admin 
* MODYO-9667 — Mejoras a template builder y widget builder 
* MODYO-9684 — Documentación swagger controladores de API i5 
* MODYO-9705 — Mejoras visuales al modal de diferencias y versiones 
* MODYO-9712 — Page builder no usa el nombre de a página en el title 
* MODYO-9713 — Modales export y tag perdieron su diseño 
* MODYO-9717 — File uploader no respeta tamaños máximos en archivos 
* MODYO-9718 — Detalles gráficos en insights 
* MODYO-9719 — Diferencia de tamaño en avatar de usuario 
* MODYO-9720 — Error al entrar a vista de themes en panel 
* MODYO-9733 — Mejoras de diseño 
* MODYO-9736 — Template builder abre una pestaña vacía al crear snippets 
* MODYO-9737 — Implementar duplicado de entries 
* MODYO-9741 — Detalles modal preview entry builder 
* MODYO-9742 — JSONFields selector 
* MODYO-9744 — Unpublish changes en index de entries no se está limpiando al publicar 
* MODYO-9745 — Cambiar relación de entries y assets a uuid en vez de id 
* MODYO-9746 — Arreglar responsive 
* MODYO-9750 — Error al copiar entries 
* MODYO-9751 — Migrar admin de modyo a bootstrap 4 
* MODYO-9738 — Error visual en variables de correo de commerce 
 
## 9.0.0.pre4
* MODYO-9683 — Definir estructura API pública de content 
* MODYO-9649 — Refactor API Asset Manager 
* MODYO-9675 — Refactor al Modelo de Assets 
* MODYO-9679 — Error al guardar contenido en otro idioma 
* MODYO-9691 — Configuración del sitio no permite guardar 
* MODYO-9699 — Múltiples errores de javascript al navegar por el admin 
* MODYO-9700 — Arreglar migración entries post assetmanager 
* MODYO-9478 — Refactorizar permisos para que puedan funcionar con la granularidad de los sites en los spaces 
* MODYO-9564 — Generar la representación en JSON del entry al publicar 
* MODYO-9612 — Error al eliminar un atributo en content type 
* MODYO-9615 — Tags no aparecen en modal de diferencias 
* MODYO-9660 — No se puede cerrar sesión en el sitio desde el modo vista previa 
* MODYO-9664 — Error al reestablecer o hacer rollback en un layout page 
* MODYO-9665 — Error en redirección al cerrar sesión de admin 
* MODYO-9674 — Error al añadir tags a widgets del widgetbuilder 
* MODYO-9676 — Error al levantar modal de diferencias para Entries 
* MODYO-9677 — Error con fields tipo dropdown en entry builder 
* MODYO-9680 — Error en modal de diferencias en layout page builder 
* MODYO-9682 — Error al hacer reset/rollback en modal de diferencias de template builder 
* MODYO-9686 — Error 500 al obtener indice de custom widget en page builder 
* MODYO-9687 — Mejoras navegación 
* MODYO-9689 — Error 500 al entrar a la configuración de dominios de los sitios 
* MODYO-9231 — Mejoras al modal de versiones 
* MODYO-9541 — Implementar vista de settings de spaces 
* MODYO-9563 — Implementar Dirty en type builder 
* MODYO-9592 — Atomizar configuraciones y eliminar tercer nivel de navegación 
* MODYO-9607 — Preview sin UserSession 
* MODYO-9625 — Añadir comando para colapsar todo el código en codemirror 
* MODYO-9626 — Añadir columnas en site y spaces index 
* MODYO-9628 — Documentación swagger controladores de API i4 
* MODYO-9629 — Implementar dirty en index de entries 
* MODYO-9630 — Eliminar selector de layout pages en el layout builder 
* MODYO-9646 — Transformar eval de variables de usuario en campañas de messaging 
* MODYO-9647 — Eliminar tab de preview en widget builder 
* MODYO-9648 — Trasladar a React Template Builder 
* MODYO-9651 — Añadir logo svg de modyo en el panel 
* MODYO-9652 — Eliminar tab general en vista de roles y permisos 
* MODYO-9658 — Arreglar datos de usuario en admin en site y space 
* MODYO-9666 — Pestañeo de menú al entrar a Channels>sites 
* MODYO-9668 — Mejoras modal de revisión 
* MODYO-9692 — Títulos de páginas de settings nuevos 
* MODYO-9734 — Documentación swagger controladores de API 
* MODYO-9606 — Modal "save as a target" no se distingue en modal de filtros avanzados 

## 9.0.0.pre3
* MODYO-9595 — Widgets de contenido no guardan los valores de space y type 
* MODYO-9596 — Error 500 al filtrar por medio de pago en order index 
* MODYO-9602 — Targets en vista show de campañas 
* MODYO-9603 — Error al exportar de ordenes de compra 
* MODYO-9604 — Error en textos de liquid que se usan en email de payments 
* MODYO-9605 — UISelect no mantiene el valor seleccionado 
* MODYO-9613 — Validaciones numéricas en entry edit 
* MODYO-9617 — Replicar comportamiento de space-type-categoría en widgets list y featured 
* MODYO-9640 — Internal error de liquid en tag menu con items targetizados 
* MODYO-9641 — Selección de acordión de form desactiva forms del menú principal 
* MODYO-9642 — Faltan múltiples traducciones en roles/permisos 
* MODYO-9643 — Error con menú al entrar a vista administrados 
* MODYO-9644 — No se muestra la pelota de sesión en sitios públicos 
* MODYO-9654 — Eliminar logs de product orders 
* MODYO-7128 — Crear digital Asset Manager [View&Controllers] 
* MODYO-9392 — Crear contenidos "Custom Type" y migrar recursos 
* MODYO-9393 — Implementar internacionalización de Contenidos 
* MODYO-9399 — Crear modelo de validaciones y validaciones base. 
* MODYO-9432 — Encapsular payments en un módulo y moverlo a la cuenta 
* MODYO-9449 — Proponer diagramación tercer nivel sin cambio de contexto 
* MODYO-9468 — Proponer flujo e interfaz herramienta content 
* MODYO-9489 — Implementar index de scopes 
* MODYO-9490 — Implementar index de content types 
* MODYO-9491 — Implementar index de entries 
* MODYO-9492 — Implementar new space 
* MODYO-9493 — Implementar new content type 
* MODYO-9494 — Implementar new entry 
* MODYO-9495 — Implementar edit content type 
* MODYO-9496 — Implementar edit entries 
* MODYO-8505 — Implementar versionado de contenidos (Nivel Modelo) 
* MODYO-9396 — Pasar categorías del sitio a la cuenta 
* MODYO-9397 — Implementar workflows en herramienta de contenidos. (Nivel Modelo) 
* MODYO-9398 — Migrar tags de contenidos a la cuenta bajo el scope de space 
* MODYO-9410 — Migrar Workflows a la Account 
* MODYO-9450 — Proponer definición de menú a nivel de cuenta 
* MODYO-9455 — Implementar API Admin básica (lectura) de contenidos 
* MODYO-9456 — Cambiar url base de Admin API 
* MODYO-9460 — Modificar Controlador base de Admin API 
* MODYO-9461 — Upgrade Libs de Autenticación 
* MODYO-9469 — Migrar widgets de contenido y crear layout pages de tipo index y show 
* MODYO-9470 — Migrar logs de recursos 
* MODYO-9475 — Agregar deferencias y workflow a la interfaz de contenido 
* MODYO-9487 — Eliminar tablas y modelos no utilizados 
* MODYO-9488 — Separación de modelos de User y AdminUser 
* MODYO-9503 — Migrar categorías a los spaces 
* MODYO-9505 — Creación de Endpoints y Vistas de Login para User 
* MODYO-9506 — Menu de administración de Users 
* MODYO-9507 — Modificar controladores para apuntar a UserSession indicado 
* MODYO-9518 — Proponer diseño de Asset Manager 
* MODYO-9519 — Proponer diseño de gestión de spaces 
* MODYO-9527 — Completar encuesta feedback de usuarios 
* MODYO-9529 — Investigar y documentar proceso de publicación de otros productos 
* MODYO-9532 — Implementar nueva navegación de MODYO 
* MODYO-9542 — Implementar index y edit de categorías 
* MODYO-9548 — Locations Fields 
* MODYO-9556 — Refactor Nuevo Menu 
* MODYO-9561 — Borrado de Types 
* MODYO-9570 — Independizar configuración de interacciones 
* MODYO-9573 — Revisión y corrección preliminar de tests 
* MODYO-9575 — Pasar opciones del footer al menú superior en widget builder 
* MODYO-9577 — Resolver detalles post-migración de content 
* MODYO-9578 — Implementar tipos de campo faltantes 
* MODYO-9579 — Actualizar ruta de archivo css del file uploader 
* MODYO-9580 — Mejora de performance en workflows 
* MODYO-9583 — Content - Mix 
* MODYO-9584 — Requerir el Type cuando se crea un Entry 
* MODYO-9585 — Clean workflow title in my tasks 
* MODYO-9586 — Dar soporte básico al /panel 
* MODYO-9588 — Estandarizar los loaders 
* MODYO-9589 — New UI - Mix 
* MODYO-9597 — Error en tarea de reindexacion en Elasticsearch 
* MODYO-9609 — Eliminar templates de antiguas aplicaciones 
* MODYO-9610 — Eliminar vestigios de product orders canceladas 
* MODYO-9619 — Cambiar ojo que abre sitio por link 
* MODYO-9622 — Documentación swagger de controladores de API i2 
* MODYO-9624 — Mezclar cambios a develop 
* MODYO-9633 — Documentación swagger de controladores de API i3 
* MODYO-9634 — Reordenar vista de importacón de usuarios 
* MODYO-9635 — Usar acordión para ocultar settings de form builder 
* MODYO-9637 — Detalles en menú 
* MODYO-9638 — Arreglar responsive de vista de importación de usuarios 
* MODYO-9639 — Arreglar espaciado en vista de temas en template builder 
* MODYO-9656 — estandarizar vistas de inicio de sesión para administradores
 
## 9.0.0.pre2
* MODYO-9520 — Error al duplicar recursos 
* MODYO-9523 — Error de strong parameters en preguntas tipo fecha en form builder 
* MODYO-9535 — Error de workflows con recursos targetizados 
* MODYO-9594 — Ruta relativa en formulario de reset password 
* MODYO-9601 — Error visual al añadir medio de pago credomatic en firefox 
* MODYO-9525 — Error con objeto active record en layout pages 
* MODYO-9353 — Analizar y resolver posible vulnerabilidad de parámetro redirect_to 
* MODYO-9354 — Vulnerabilidad parámetro redirect_to en ordenes 
* MODYO-9483 — Generar tag 9.0.0 y eliminar migraciones pasadas 
 
## 9.0.0.pre 
* MODYO-9403 — Añadir custom fields en apps 
* MODYO-9404 — New Pickup Location 
* MODYO-9405 — Error de liquid en orders 
* MODYO-9406 — History-back pierde el menú del admin 
* MODYO-9409 — Error al entrar a settings de places 
* MODYO-9413 — Error al copiar snippets desde templates y widgets 
* MODYO-9415 — Actualización de roles 
* MODYO-9416 — Error añadir tabs a productos 
* MODYO-9417 — Error al añadir preguntas a formularios 
* MODYO-9440 — Error y performance en profile con turbolinks 
* MODYO-9444 — Error en vista previa de campañas de correo 
* MODYO-9474 — Error al entrar al indice de themes en el template builder 
* MODYO-9476 — Error de strong params en form builder 
* MODYO-9486 — Error 500 al buscar custom widgets en el layout builder 
* MODYO-9498 — Error en arrays de liquid 
* MODYO-9499 — Error 500 al hacer búsquedas 
* MODYO-9501 — Error de ruta en formularios en sitios con custom domain 
* MODYO-9508 — Error en endpoint para finalizar ordenes de costo 0 
* MODYO-9510 — Error con strong params en email de notificación de formularios 
* MODYO-8363 — Actualizar a Rails 5.2 
* MODYO-8842 — Modyo Migration Project 
* MODYO-7485 — Remover Google Maps como una dependencia global en el BackEnd 
* MODYO-8364 — Upgrade a Ruby 2.5 
* MODYO-9336 — Refactorizar Jquery File Uploader 
* MODYO-9337 — Refactorizar jquery UI 
* MODYO-9338 — Eliminar JS Color 
* MODYO-9339 — Refactorizar vistas que usan livequery 
* MODYO-9340 — Refactorizar vistas que llaman a Froala con livequery 
* MODYO-9342 — Refactorizar localización / traducciones 
* MODYO-9446 — Error al hacer bulk actions en users 
* MODYO-9502 — Error en site search con view more y paginación 
* MODYO-8840 — Cambios en dependencias de modyo 
* MODYO-8844 — Actualizar after/before filters a after/before actions 
* MODYO-8845 — Refactorizar argumentos de asociaciones class_name a strings 
* MODYO-8846 — Normalizar rutas javascript_preview y stylesheet_preview 
