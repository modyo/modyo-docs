---
search: true
---

# Notas del release

## 9.2

### 9.2.37 - 30 de junio de 2023
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad.
* Mejoras en la configuración de politicas de expiración e inactividad.

<Badge text="Channels" type="channels" vertical="middle"/>

* Agrega configuración de nuevos headers de seguridad, Cross-Origin-Embedder-Policy, Cross-Origin-Opener-Policy, Cross-Origin-Resource-Policy.

<Badge text="Customers" type="customers" vertical="middle"/>

* Corrige problema al leer una notificacion en el profile, ahora se marca correctamente como leido.
* Agrega nuevo parametro (redirect_to) en la url de login de un sitio para rederigir a una vista en particular o a algún sitio dentro de la organización.
* Se modifica las campañas de correo, se reemplaza los multiples envios por el clonado de campaña para nuevos envios para mayor simplicidad en su gestión.


### 9.2.36 - 19 de junio de 2023
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad.
* Agrega valdiacióon de permisoos administradores a los endpoints de la doocumentación swagger del API.

<Badge text="Channels" type="channels" vertical="middle"/>

* Corrige problema de diferencias vacias despues de sincronizar stages.

<Badge text="Content" type="content" vertical="middle"/>

* Corrige problema de listado de spaces repetidos para usuarios en un grupo de permisos.
* Corrige problema de publicacion de páginas cuando provienen de la sincronización de stages.

<Badge text="Customers" type="customers" vertical="middle"/>

* Se valida correctamente el campo defaul email sender en las configuraciones del reino, ahora tampoco puede estar vacío. 

<Badge text="Insights" type="insights" vertical="middle"/>

* Corrige valor inicial del filtro de fecha, ahora muestra corresctamente el rango seleccionado.

  

### 9.2.35 - 30 de mayo de 2023
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad
* Corrije en sistema de permisos de los grupos de usuarios.

<Badge text="Channels" type="channels" vertical="middle"/>

* Mejora la referencia de widgets entre stages, ahora no es necesario crear el widget en otros stages mediante la sincronización.
* Corrije problemas en la búsqueda en los sitios con palabras con tilde.
* Corrije diferencias en páginas, ahora se muestra la opción de rutas delegadas.
* Agrega botón de inicio de sesión al previsualizar un widget.
* Se limita la diferencias de widgets grandes o provenientes desde el CLI. Ahora muestran un mensaje informativo si existen diferencias.

<Badge text="Content" type="content" vertical="middle"/>

* Agrega opción para habilitar/deshabilitar el uso de imágenes SVG

<Badge text="Customers" type="customers" vertical="middle"/>

* Mejora la búsqueda en el listado de ordenes.
* Mejora en la edición de los medios de pago.



### 9.2.34 - 16 de mayo de 2023

<Badge text="Core" type="core" vertical="middle"/>

* Mejoras en la visualización de tags en el selector cuando los valores son muy largos

<Badge text="Channels" type="channels" vertical="middle"/>

* Mejoras en la búsqueda de sitios, ahora se contemplan las categorías en los links generados a páginas de contenido
* Corrige error que evitaba despublicar paginas pase a no tener dependencias en un contexto con stages

<Badge text="Content" type="content" vertical="middle"/>

* Agrega fecha de despublicación a la metadata de un contenido

<Badge text="Customers" type="customers" vertical="middle"/>

* Corrige problemas de permisos en el acceso a la edición de formularios

<Badge text="Insights" type="insights" vertical="middle"/>

* Corrige problemas visuales y de métricas en los gráficos
* Corrige problemas de acceso a la visualización de gráficos


### 9.2.33 - 05 de mayo de 2023

<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad
* Mejora visibilidad en listado de tags cuando son muy largos
* Nuevo Getstared

<Badge text="Content" type="content" vertical="middle"/>

* Ahora los editores de contenido pueden publicar en bulk desde el listado de entradas

<Badge text="Channels" type="channels" vertical="middle"/>

* Corrige buscador en listado de páginas en modo lista

<Badge text="Customers" type="customers" vertical="middle"/>

* Corrige error al crear un nuevo identity provider del tipo openid especificando claims


### 9.2.32 - 21 de abril de 2023

<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad

<Badge text="Content" type="content" vertical="middle"/>

* Cambia los tamaños de assets permitidos quedando 6MB para imagenes y 10MB para otro tipo de archivos
* Corrige problemas al reemplazar imagenes con extensión SVG
* Corrige problemas al mostrar un logo en SVG


### 9.2.31 - 06 de abril de 2023

<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad
* Se agrega politicas de contraseña al crear nuevas cuentas

<Badge text="Content" type="content" vertical="middle"/>

* corrige error permanente en el asset manager


### 9.2.30 - 24 de marzo de 2023

<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad

<Badge text="Channels" type="channels" vertical="middle"/>

* Corrige actualización de widgets provenientes desde el CLI


### 9.2.29 - 22 de marzo de 2023

<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad
* Corrige lentitud al cargar ordenes en el index, que se provocaba cuando existe un gran número de estas.


### 9.2.28 - 21 de marzo de 2023

<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad

<Badge text="Channels" type="channels" vertical="middle"/>

* Corrige eleminado de widgets provenientes del CLI
* Agrega modal para nombrar un nuevo widget clonado
* Corrige problema al modificar variables en los widgets

<Badge text="Customers" type="customers" vertical="middle"/>

* Corrige permisos de administradores en realms


### 9.2.27 - 10 de marzo de 2023

<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad
* Se aumenta el periodo de pruebas a 30 días
* se agrega validación del tiempo de inactividad de un usuario en el backoffice, configurable en la seccion seguridad.
* se corrige problema con la validacion de contraseñas de administradores
* Se agrega nuevo filtro para usuarios deshabilitados

<Badge text="Channels" type="channels" vertical="middle"/>

* nuevo minimal con boostrap 5 para nuevos sitios

<Badge text="Content" type="content" vertical="middle"/>

* Se agrega nueva vista de overview de un space


### 9.2.26 - 20 de febrero de 2023

<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad
* Agrega selector de acceso a aplicaciones en los grupos de usuarios
* Se fuerza el cambio de contraseña para nuevos usuarios administradores

<Badge text="Channels" type="channels" vertical="middle"/>

* Permite eliminar widgets archivados
* Corrige problemas ocacionados al archivar un widget
* Mejoras en SEO de páginas
* Corrige problemas con el selector de categorias

<Badge text="Content" type="content" vertical="middle"/>

* Agrega el nuevo campo excerpt a los meta de una entry
* Corrige problemas al editar un field de tipo richtext

<Badge text="Customers" type="customers" vertical="middle"/>

* Envio de email de bienvenida queda opcional en formularios públicos
* Corrige problemas al editar un segmento


### 9.2.25 - 25 de enero de 2023

<Badge text="Channels" type="channels" vertical="middle"/>

* Corrige despublicación de página de contenido cuando no tiene un espacio o tipo asociado

<Badge text="Customers" type="customers" vertical="middle"/>

* Se acepta parámetro <span v-pre>{{order.uuid}}</span> en el campo redirect_url al momento de crear una  orden de Payments
 

### 9.2.24 - 20 de enero de 2023


<Badge text="Channels" type="channels" vertical="middle"/>

* Mejoras de performance al cargar índice de widgets
* Permite crear un nuevo stage con el mismo nombre de uno que esté en proceso de eliminación


### 9.2.23 - 19 de enero de 2023

<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad
* Separación de Logs
* Corrige botón "Revisar" en correos de Team Review
* Se separaran visualmente el item archivado de los demás en los filtros de estados
* Rutas password y signup dejan de responder a  extensiones que no correspondan 
* Las cuentas de administración que no se accedan en un tiempo determinado se deshabilitarán
* Agrega validación de formato para MODYO_PAPERCLIP_FOG_CREDENTIALS
* Las URLs de vistas de tablas del backend de Modyo se pueden compartir manteniendo los filtros elegidos 

<Badge text="Content" type="content" vertical="middle"/>

* Corrige error que impedia aprobar a usuario con rol default user y admin de un space 

<Badge text="Channels" type="channels" vertical="middle"/>

* Agrega timezone del sitio a site drop
* Agrega drops de liquid para formularios contestados
* Se agrega drop de liquid para los formularios contestados por los usuarios de un reino
* Corrige duplicación stages en el selector en lista de sitios 


<Badge text="Customers" type="customers" vertical="middle"/>

* Agrega Integración con Zendesk
* Implementa politica de seguridad de contraseñas para reinos 
* Se migran los Payments a nivel de Reinos


### 9.2.22 - 09 de diciembre de 2022

<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad

<Badge text="Channels" type="channels" vertical="middle"/>

* Se agrega filtro dinámico de contenido en liquid a través de url parmas
* Cambia la forma de eliminar un stage, ahora se hace directamente desde las configuraciones del stage.

<Badge text="Customers" type="customers" vertical="middle"/>

* Se elimina los formularios automáticos y la vista de formularios, ahora solo se disponibiliza el snippet del formulario


### 9.2.21 - 07 de noviembre de 2022

<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad

<Badge text="Channels" type="channels" vertical="middle"/>

* Se elimina soporte de sitios con dominios sin ssl.


### 9.2.20 - 27 de octubre de 2022

<Badge text="Core" type="core" vertical="middle"/>

* Mantención para entornos pre-productivos

### 9.2.19 - 12 de octubre de 2022

<Badge text="Core" type="core" vertical="middle"/>

* Actualziación licencia froala

<Badge text="Customers" type="customers" vertical="middle"/>

* Se revierte flujo OAuth con refresh token.


### 9.2.18 - 07 de octubre de 2022

<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad
* Actualización de dependencias

<Badge text="Channels" type="channels" vertical="middle"/>

* Se agrega vista de listado de pages y la posibilidad de alternar entre la vista tabla y listado.

<Badge text="Content" type="content" vertical="middle"/>

* Se agrega a la referencia liquid de un asset un link para su edición.

<Badge text="Customers" type="customers" vertical="middle"/>

* Mejoras en el flujo OAuth2
* Se agrega vista de configuración de clientes OAuth2
* Se agrega vista de overview con información de acciones e información de un realm
* Se elimina la importación maiva de usuarios

<Badge text="Insights" type="insights" vertical="middle"/>

* Se elimina la vista "Data studio"


### 9.2.17 - 20 de septiembre de 2022

<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad
* Se arregla la consistencia visual de permisos y roles

<Badge text="Content" type="content" vertical="middle"/>

* Se agrega el identifiador a la búsqueda en el listado de espacios

<Badge text="Customers" type="customers" vertical="middle"/>

* Se corrige la exportación de usuarios


### 9.2.16 - 23 de agosto de 2022

<Badge text="Core" type="core" vertical="middle"/>

* Se actualiza el framework a la última versión (7.0.2)
* Se actualiza ruby a la última versión (3.1)
* Se actualiza dependencias
* Mejoras del producto
* Mejoras de seguridad
* Se agrega opción para deshabilitar las rutas a sitemap.xml y robots.txt

<Badge text="Channels" type="channels" vertical="middle"/>

* Se arregla la falta jquery.min.js al cargar el widget manager
* Se arregla inconsistencia de la publicación cuando está habilitado la revisión en equipo

<Badge text="Content" type="content" vertical="middle"/>

* Se corrige un problema al subir un algunos svgs al asset manager

<Badge text="Customers" type="customers" vertical="middle"/>

* Se extiende al API administrativa de notificaciones para marcar mensajes como leidos


### 9.2.15 - 27 de julio de 2022

<Badge text="Core" type="core" vertical="middle"/>

* Se incluye alternative_id en index, export y búsqueda de órdenes de Commerce


### 9.2.14 - 04 de julio de 2022

<Badge text="Customers" type="customers" vertical="middle"/>

* Se corrige autorizaciones de access tokens en reinos con multiples sitios


### 9.2.13 - 28 de junio de 2022

<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad
* Se previene 404 en setup otp

<Badge text="Channels" type="channels" vertical="middle"/>

* Se corrige error en la edición inicial de widgets duplicados en una Widget Page
* Se  Agrega flag para la habilitacion de categorias en path para content pages 
* Se corrige despliegue de opcion de Targets en Pages
* Se corrige problema al eliminar de favicon y apple icon de un sitio, el cual afectaba a sus copias

<Badge text="Content" type="content" vertical="middle"/>

* Se corrige filtro sort que fallaba al ordenar entradas por campos de texto
* Se corrige problema con campo multiline, que quedaba con un caracter al eliminar todo el texto
* Se corrige error al seleccionar entries en content list, donde solo se agregaban las seleccionadas en la pagina actual


### 9.2.12 - 06 de junio de 2022

<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad

<Badge text="Channels" type="channels" vertical="middle"/>

* Se corrige enlace de los breadcrumbs conel scope del stage
* Se corrige el overflow de la columna nombre en el listado de sitios
* Se mejora la plantilla base del service worker
* Se mejora la experiencia al generar un manifest para el PWA 
* Se corrige listado de diferencias sin cambios despues de la creación de un stage


### 9.2.11 - 27 de mayo de 2022

<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad


### 9.2.10 - 23 de mayo de 2022

<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad
* Se agrega reCAPTCHA para usuarios administradores
* Se corrige error al actualizar el avatar de usuarios importados con información faltante
* Se agrega expiración de sesión de administradores

<Badge text="Channels" type="channels" vertical="middle"/>

* Se corrige error al sincronizar content pages migradas en sitios con stages
* Se excluye el ID de google tag manager al crear un nuevo stage
 
<Badge text="Customers" type="customers" vertical="middle"/>

* Se corrigen links a documentación en segmentos

<Badge text="Content" type="content" vertical="middle"/>

* Se agrega soporte liquid en campos de texto al crear contenido


### 9.2.9 - 03 de mayo de 2022

<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad
* Se controla error 500 a nivel de aplicación al usar verbos HTTP inválidos
* Se parámetro para tolerancia en segundos para access token (OIDC access token clock skew)

<Badge text="Channels" type="channels" vertical="middle"/>

* Se corrige problema al publicar árbol de páginas con 3 niveles
* Se corrige problema con url full de entradas por defecto
* Se corrige escapado de meta tags rompe interpolación con Liquid

<Badge text="Customers" type="customers" vertical="middle"/>

* Se incorpora el uso de reCAPTCHA para Realms 


### 9.2.8 - 8 de abril 2022
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad

<Badge text="Channels" type="channels" vertical="middle"/>

* Mejoras en experiencia con Service Worker

<Badge text="Content" type="content" vertical="middle"/>

* Colecciones se pueden referenciar usando brackets en Liquid SDK

<Badge text="Customers" type="customers" vertical="middle"/>

* Se arregla problema con el envío de campañas

### 9.2.7 - 10 de marzo de 2022
<Badge text="Core" type="core" vertical="middle"/>

* Actualizar version liquidJS
* Actualizar nombre de categorias no se refleja en entries
* Atributos del request drop no considera el slug de la entry en content pages
* Migración IntegrationsToIdps falla por nuevo atributo openidc_userinfo_enabled
* Cuentas duplicadas en onboarding
* Direct authentication en Realm con Google lleva a error 404
* Implementar medio de pago Cybersource 
* Agregar tags en New Asset modal


### 9.2.6 - 22 de febrero de 2022

<Badge text="Core" type="core" vertical="middle"/>

* Nuevos correos transaccionales de la plataforma
* User Info opcional en integración OIDC

<Badge text="Content" type="content" vertical="middle"/>

* Se arregla a drop entry.meta.url
* Se arregla eliminación de entradas enlazadas
* Se realizan mejoras en editor multilínea

<Badge text="Customers" type="customers" vertical="middle"/>

* Se arregla problema al cambiar realm de un site
* Se arregla problema con editor de campañas
* Se arregla problema con cuentas con sitio por defecto sin realm

<Badge text="Channels" type="channels" vertical="middle"/>

* Se redirigen rutas terminadas en slash para mejorar SEO
* Se previene reflected XSS en drop de request
* Se previene contaminación con rutas inválidas

### 9.2.5 - 27 de enero de 2022
<Badge text="Channels" type="channels" vertical="middle"/>
* Se incorporan Content Pages
* Se arreglan problemas con barra de preview

<Badge text="Content" type="content" vertical="middle"/>
* Mejoras y correcciones en editor de Entries

<Badge text="Core" type="core" vertical="middle"/>
* Se agrega soporte de SCIM para usuarios administradores

### 9.2.4 - 30 de diciembre de 2021
<Badge text="Core" type="core" vertical="middle"/>
* Se arregla problema que contaminaba el caché al realizar previsualizaciones

### 9.2.2 - 1 de diciembre de 2021
<Badge text="Core" type="core" vertical="middle"/>
Se arregla problema al permitir tag style con variable de entorno MODYO_HTML_ALLOWED_ATTRS

<Badge text="Content" type="content" vertical="middle"/>
Se arregla bug con filtro con 100 o más tags en el admin

### 9.2.1 - 25 de noviembre de 2021
<Badge text="Content" type="content" vertical="middle"/>
* Se arregla bug con límite de archivos en asset manager
* Mejoras al copiar entries de otro locale
* Se agrega nombre y slug de categorias en drop de Entry y en API de content

<Badge text="Channels" type="channels" vertical="middle"/>
* Se repara preview de widgets
* Se permite iniciar sesión con access token en el sitio

<Badge text="Core" type="core" vertical="middle"/>
* Mejoras de seguridad

<Badge text="Customers" type="customers" vertical="middle"/>
* Mejoras al editor de campañas

### 9.2.0 - 15 de noviembre de 2021

<Badge text="Channels" type="channels" vertical="middle"/>
* Gestión de Security Headers
* Nuevo tema minimal
* Navigation builders
* Site stages

<Badge text="Customers" type="customers" vertical="middle"/>
* Reinos de usuarios

<Badge text="Core" type="core" vertical="middle"/>
* Grupos de miembros del equipo
* Multiple full admins
* Landing page "Get started"
* Editor Froala

## 9.1

### 9.1.43 - 3 de marzo del 2023

<Badge text="Core" type="core" vertical="middle"/>
* Corrección a migraciones de contenido en 9.1 , para facilitar paso desde 8.2 a versiones más recientres

### 9.1.42 - 13 de febrero del 2023

<Badge text="Core" type="core" vertical="middle"/>
* Mejoras de performance para migraciones, para facilitar paso desde 8.2 a versiones más recientres

### 9.1.41 - 15 de diciembre del 2022

<Badge text="Core" type="core" vertical="middle"/>
* Se corrigen migraciones en 9.1 para preparar migraciones desde 8.2

### 9.1.35 - 29 de diciembre del 2021

<Badge text="Channels" type="channels" vertical="middle"/>
* Se arregla error con cache en previsualización de snippets
* Se arregla validación de lenguaje de sitios

### 9.1.34 - 19 de noviembre del 2021

<Badge text="Content" type="content" vertical="middle"/>
* Se arregla bug con límite de archivos en asset manager
* Mejoras al copiar entries de otro locale
* Se agrega nombre y slug de categorias en drop de Entry y en API de content

<Badge text="Channels" type="channels" vertical="middle"/>
* Se permite iniciar sesión con access token en el sitio

### 9.1.33 - 5 de noviembre del 2021

<Badge text="Core" type="core" vertical="middle"/>
* Se evita llamada a discovery service en callback OIDC

<Badge text="Content" type="content" vertical="middle"/>
* Se arregla bug que impedía filtrar entradas por más de 100 tags en el admin

### 9.1.32 - 28 de octubre del 2021

<Badge text="Core" type="core" vertical="middle"/>
* AppShell OAuth 2.0 provider

<Badge text="Channels" type="channels" vertical="middle"/>
* Se repara error que afecta el reseteo de templates
* Cache más granular que ahora considera el UserAgent

### 9.1.31 - 7 de octubre del 2021

<Badge text="Core" type="core" vertical="middle"/>
* Se repara validación de respuesta SAML para Azure AD

### 9.1.30 - 24 de septiembre del 2021

<Badge text="Core" type="core" vertical="middle"/>
* Mejoras a Security Headers transversales

<Badge text="Customers" type="customers" vertical="middle"/>
* Se arregla validación de emails.

### 9.1.29 - 9 de septiembre del 2021

<Badge text="Core" type="core" vertical="middle"/>
* Se arregla error con user access token inválido.

### 9.1.28 - 1 de septiembre del 2021

<Badge text="Core" type="core" vertical="middle"/>
* Múltiples mejoras a Security Headers.

<Badge text="Channels" type="channels" vertical="middle"/>
* Se permiten Liquid tags adicionales.

### 9.1.27 - 27 de agosto del 2021

<Badge text="Core" type="core" vertical="middle"/>
* Se arregla doble envío al crear access tokens.

<Badge text="Channels" type="channels" vertical="middle"/>
* Se arregla error con reset de páginas.
* Se previene la generación de cookies para sitios públicos.

<Badge text="Content" type="content" vertical="middle"/>
* Se arreglan problemas con acciones masivas de despublicación, archivado y eliminación de entries.

### 9.1.26 - 11 de agosto del 2021

<Badge text="Channels" type="channels" vertical="middle"/>
* Se arregla redirect de sesiones expiradas.
* Se arregla bug que impedía invertir orden de páginas padre-hijo.


### 9.1.25 - 9 de agosto del 2021

<Badge text="Channels" type="channels" vertical="middle"/>
* Se arreglan problemas de rendimiento
* Se arregla problema con cache de previsualización de widgets y vistas de contenido.
* Se arregla error con status code al importar redirecciones.

### 9.1.24 - 14 de julio del 2021

<Badge text="Core" type="core" vertical="middle"/>
* Se actualizan versiones jQuery de la plataforma.

<Badge text="Channels" type="channels" vertical="middle"/>
* Se arregla problema que impide guardar elementos con el número límite de versiones de respaldo.
* Se corrige error al copiar páginas que usan widgets con variables.

<Badge text="Customers" type="customers" vertical="middle"/>
* Se permite el envío de correos raw a través de la messaging API.
* Se arreglan problemas al exportar respuestas de formularios.

### 9.1.23 - 22 de junio del 2021
<Badge text="Core" type="core" vertical="middle"/>
* Multiple mejoras de seguridad.
* Newsletter con novedades.

<Badge text="Content" type="content" vertical="middle"/>
* Se arregla problema con zona horaria de campos de tipo Fecha.

<Badge text="Customers" type="customers" vertical="middle"/>
* Se quitan restricciones en editor de correos.

<Badge text="Channels" type="channels" vertical="middle"/>
* Ahora se pueden eliminar las páginas.

### 9.1.22 - 10 de junio del 2021
<Badge text="Channels" type="channels" vertical="middle"/>
* Se eliminan restricciones de rutas para redirecciones de sitios

### 9.1.21 - 28 de mayo del 2021

<Badge text="Core" type="core" vertical="middle"/>
* Se arreglan problemas de seguridad

### 9.1.20 - 27 de mayo del 2021

<Badge text="Core" type="core" vertical="middle"/>
* Múltiples bugs resueltos.
* Mejoras de experiencia usuaria

### 9.1.19 - 19 de mayo del 2021

<Badge text="Core" type="core" vertical="middle"/>
* Múltiples bugs resueltos.

### 9.1.18 - 18 de mayo del 2021

<Badge text="Core" type="core" vertical="middle"/>
* Múltiples mejoras de seguridad.

<Badge text="Channels" type="channels" vertical="middle"/>
* Se reimplementa árbol de páginas

### 9.1.17 - 5 de mayo del 2021

<Badge text="Core" type="core" vertical="middle"/>
* Mejoras de rendimiento

### 9.1.16 - 23 de abril del 2021

<Badge text="Core" type="core" vertical="middle"/>
* Múltiples bugs resueltos.
* Múltiples mejoras de seguridad.

<Badge text="Channels" type="channels" vertical="middle"/>
* Se resuelve un error que producía que el botón "Guardar" del page builder no funcionara correctamente.
* Se resuelve un error al crear nuevos sitios en que la página "About Us" quedaba sin un layout seleccionado.

### 9.1.15 - 14 de abril del 2021

<Badge text="Core" type="core" vertical="middle"/>
* Múltiples bugs resueltos.
* Se añade al panel una herramienta para resolver inconsistencias en estructura secundaria para mantener el orden de las páginas del sitio.
* Se resuelve un error al subir imágenes muy grandes al gestor de archivos.
* Se resuelve un bug que provocaba que el editor de código se congelara ante sintaxis específicas de liquid.

<Badge text="Channels" type="channels" vertical="middle"/>
* Se añaden [nuevos filtros de Liquid](/es/platform/channels/liquid-markup.html#filtros-estandar) que permiten usar algoritmos como md5, sha1, sha256, hmac_sha1, hmac_sha256 y base64_encod.
* Se mejora el indexado de páginas de tal forma que ahora se puede encontrar resultados que contienen texto del contenido referenciado en las páginas.

### 9.1.14 - 1 de abril del 2021

<Badge text="Core" type="core" vertical="middle"/>
* Múltiples bugs resueltos.

<Badge text="Channels" type="channels" vertical="middle"/>
* Se resuelve un bug en que se perdía el control de los locks en el template builder.

### 9.1.13 - 25 de marzo del 2021

<Badge text="Core" type="core" vertical="middle"/>

- Múltiples bugs resueltos.
- Múltiples mejoras de navegación y usabilidad.
- Múltiples mejoras de seguridad.
- Se actualizan múltiples bibliotecas JS con vulnerabilidades

<Badge text="Content" type="content" vertical="middle"/>
* Se añaden filtros dinámicos por valores de campos en el indice de entradas.

<Badge text="Channels" type="channels" vertical="middle"/>
* Se resuelve un bug en que el copiado de sitios no consideraba los templates.

<Badge text="Customers" type="customers" vertical="middle"/>
* Se resuelve un bug en que el flujo de integración con OIDC redirigía al perfil del usuario y no al sitio desde donde se inició el flujo.

### 9.1.12 - 19 de marzo del 2021

<Badge text="Core" type="core" vertical="middle"/>

- Múltiples bugs resueltos.
- Múltiples mejoras de navegación y usabilidad.
- Múltiples mejoras de seguridad.

<Badge text="Content" type="content" vertical="middle"/>
* Se añaden [nuevos filtros al SDK de Liquid](/es/platform/content/public-api-reference.html#filtrar-entradas) de contenido que permiten selccionar, filtrar y [ordenar](/es/platform/content/public-api-reference.html#ordenar-entradas) por campos personalizados del tipo de contenido.

<Badge text="Customers" type="customers" vertical="middle"/>
* Se asocia el idioma en el que se despliegan los formularios de acuerdo al idioma del sitio asociado y no al idioma de la cuenta

### 9.1.11 - 02 de marzo del 2021

<Badge text="Core" type="core" vertical="middle"/>

- Múltiples bugs resueltos.
- Múltiples mejoras de navegación y usabilidad.
- Múltiples mejoras de seguridad.
- Se resuelven errores producidos por atributos estándar con formatos específicos en integración mediante OIDC
- Se resuelven errores que provocaban que la programación de publicación/despublicación se ejecutara 10 minutos tarde
- Se resuelve un caso particular en que la vista HTML del editor de texto enriquecido no guardaba los cambios

### 9.1.10 - 23 de febrero del 2021

<Badge text="Core" type="core" vertical="middle"/>

- Múltiples bugs resueltos.
- Múltiples mejoras de performance.

<Badge text="Channels" type="channels" vertical="middle"/>
* Se añade la posibilidad de [filtrar por slug](/es/platform/content/public-api-reference.html#filtrar-entradas) de entradas en el SDK de liquid usando el filtro `by_slug`
* Se añade la posibilidad de [despublicar widgets](/es/platform/channels/widgets.html) incluso si están siendo referenciados, y se pueden archivar todos los widgets no publicados (incluso si están referenciados en algunas páginas)

### 9.1.9 - 10 de febrero del 2021

<Badge text="Core" type="core" vertical="middle"/>

- Múltiples bugs resueltos.
- Múltiples mejoras de performance.

### 9.1.8 - 02 de febrero del 2021

<Badge text="Core" type="core" vertical="middle"/>

- Múltiples bugs resueltos.
- Múltiples mejoras de navegación y usabilidad.

### 9.1.7 - 25 de enero del 2021

<Badge text="Core" type="core" vertical="middle"/>

- Múltiples bugs resueltos.
- Múltiples mejoras de navegación y usabilidad.
- Múltiples mejoras de seguridad.

<Badge text="Content" type="content" vertical="middle"/>
* Se añade la opción de [editar entradas de forma masiva](/es/platform/content/entries.html#editar-masivamente).
* Se añaden filtros por autor y segmentos en el indice de entradas.

<Badge text="Channels" type="channels" vertical="middle"/>
* Se añade la posibilidad de decidir si quieres que tus widgets del widget builder se [carguen de forma síncrona o asíncrona](/es/platform/channels/widgets.html#carga-sincrona).

### 9.1.6 - 23 de diciembre del 2020

<Badge text="Core" type="core" vertical="middle"/>

- Múltiples bugs resueltos.
- Múltiples mejoras de navegación y usabilidad.
- Múltiples mejoras de seguridad.

<Badge text="Channels" type="channels" vertical="middle"/>
* Se añade la opción de definir [variables en los widgets personalizados](/es/platform/channels/widgets.html#variables-del-widget).
* Se añade la opción de definir múltiples [JavaScripts y CSS](/es/platform/channels/templates.html#css-y-javascript) como assets del sitio.
* Se añade la opción para crear [layouts personalizados](/es/platform/channels/templates.html#layouts-personalizados) y luego poder usarlos en las páginas.
* Se añade la posibilidad de consultar los resultados de la búsqueda del sitio en formato json

<Badge text="Customers" type="customers" vertical="middle"/>
* Ahora solo se puede eliminar los formularios que están deshabilitados.

### 9.1.5 - 1 de diciembre del 2020

<Badge text="Core" type="core" vertical="middle"/>

- Múltiples bugs resueltos.
- Múltiples mejoras de navegación y usabilidad.

<Badge text="Content" type="content" vertical="middle"/>
* Se añade la opción de usar [operadores](/es/platform/content/public-api-reference.html#operadores) [in], [has] y [nin] en campos slug, name, uuid y categorías.
* Se añade la opción de usar [acciones masivas](/es/platform/content/entries.html#acciones-masivas) en entradas.

<Badge text="Channels" type="channels" vertical="middle"/>
* Se añade filtro de [entries totales](/es/platform/content/public-api-reference.html#acceder-a-entradas-de-un-espacio) luego de usar un filtro de contenido.
* Se añade la funcionalidad de distinguir un mismo widget instanciado múltiples veces en una misma página.

<Badge text="Customers" type="customers" vertical="middle"/>
* Se añade una nueva y mejorada interfaz de creación de [Segmentos](/es/platform/customers/segments.html) incluyendo la opción de usar operadores `AND` y `OR`.

### 9.1.4 - 10 de noviembre del 2020

<Badge text="Core" type="core" vertical="middle"/>

- Múltiples bugs resueltos.
- Múltiples mejoras de navegación y usabilidad.
- Múltiples mejoras de seguridad.

<Badge text="Channels" type="channels" vertical="middle"/>
* Se añade la [publicación conjunta](/es/platform/channels/sites.html#revision-y-publicacion-conjunta) a los sitios.
* Se añade la posibilidad de [delegar sub-rutas](/es/platform/channels/pages.html#delegacion-de-rutas) de páginas mediante JavaScript.

### 9.1.3 - 16 de octubre del 2020

<Badge text="Core" type="core" vertical="middle"/>

- Múltiples bugs resueltos.
- Múltiples mejoras de navegación y usabilidad.
- Múltiples mejoras de seguridad.

### 9.1.2 - 8 de octubre del 2020

<Badge text="Core" type="core" vertical="middle"/>

- Múltiples bugs resueltos.
- Múltiples mejoras de navegación y usabilidad.
- Múltiples mejoras de seguridad.

<Badge text="Channels" type="channels" vertical="middle"/>
* Se añade el drop `page` que considera tanto al home page como los pages personalizados.

<Badge text="Customers" type="customers" vertical="middle"/>
* Se añade la posibilidad de utilizar plantillas en campañas de mensajería ya creadas .
* Se añade la posibilidad de [eliminar usuarios](/es/platform/customers/realms.html#opciones-adicionales).

### 9.1.1 - 25 de Septiembre del 2020

<Badge text="Core" type="core" vertical="middle"/>

- Múltiples bugs resueltos.
- Múltiples mejoras de navegación y usabilidad.
- Múltiples mejoras de seguridad.

<Badge text="Content" type="content" vertical="middle"/>
* Se añade la posibilidad de eliminar entradas archivadas.

<Badge text="Channels" type="channels" vertical="middle"/>
* Se añade la posibilidad de [copiar sitios](/es/platform/channels/sites.html) y todo su contenido publicado.

### 9.1.0 - 4 de Septiembre del 2020

<Badge text="Core" type="core" vertical="middle"/>

- [Scheduler](/es/platform/core/key-concepts.html#programado): Programar un cambio en el futuro sin la necesidad de despublicar lo que ya está publicado.
- Modyo Lite: Accede a una versión de Modyo que incluye el Core y las aplicaciones de Content y Channels.
- [Nuevo modo vista previa](/es/platform/core/key-concepts.html#modo-vista-previa): Un modo vista previa que te permite visualizar en conjunto contenido, páginas, templates, widgets y navegación.
- Actualización de la versión de ElasticSearch a 7.4.
- Actualización de la versión de MySQL a la versión 5.7 (añade soporte para emojis).
- Múltiples bugs resueltos.
- Múltiples mejoras de navegación y usabilidad.
- Múltiples mejoras de seguridad.

<Badge text="Content" type="content" vertical="middle"/>
* Mejoras de performance y escalabilidad en la API pública de contenidos.

<Badge text="Channels" type="channels" vertical="middle"/>
* [Variables globales](/es/platform/core/key-concepts.html#variables-globales): Reutiliza snippets entre sitios.
* [Mejoras a SEO](/es/platform/channels/pages.html#meta-tags): Personaliza los meta-tags para tus páginas desde una interfaz fácil de usar.
* Se añade la posibilidad de importar [redirecciones personalizadas](/es/platform/channels/sites.html#redirecciones-personalizadas) del sitio.

### 9.0.9 - 12 de Agosto del 2020

<Badge text="Core" type="core" vertical="middle"/>

- Se mejora la compatibilidad con cookies de sesión para navegadores antiguos.

### 9.0.8 - 15 de Junio del 2020

<Badge text="Core" type="core" vertical="middle"/>

- Se añaden mejoras de seguridad a endpoints de subida de archivos.
- Múltiples bugs resueltos.
- Múltiples mejoras de navegación y usabilidad.

<Badge text="Content" type="content" vertical="middle"/>
* Se añaden distintos drops de liquid dependiendo del tipo de archivo en el [asset manager](/es/platform/content/asset-manager.html#propiedades-de-los-archivos).

<Badge text="Channels" type="channels" vertical="middle"/>
* Se añade ejemplo de código al crear nuevas [vistas de contenido](/es/platform/channels/templates.html#vistas-para-contenido).
* Se añade un selector de atributos de la entrada a las vistas de contenido.

<Badge text="Customers" type="customers" vertical="middle"/>
* Se eliminan las preguntas de tipo archivo en los [formularios](/es/platform/customers/forms.html#anadir-campo).

### 9.0.7 - 01 de Junio del 2020

<Badge text="Core" type="core" vertical="middle"/>

- Mejoras a gestión y cuotas de planes.
- Se añade vista vacía de [mis tareas](/es/platform/core/the-modyo-interface.html).
- Múltiples bugs resueltos.
- Múltiples mejoras de navegación y usabilidad.

<Badge text="Content" type="content" vertical="middle"/>
* Se cambia modo [vista previa](/es/platform/content/entries.html#vista-previa) para que por defecto siempre use los templates editables.
* Se añaden nueva vistas cuando no hay elementos creados en [entradas](/es/platform/content/entries.html), [tipos](/es/platform/content/types.html), [categorías](/es/platform/content/entries.html#categorias) y [espacios](/es/platform/content/spaces.html).
* Se añade operador [search](/es/platform/content/public-api-reference.html#filtros) para búsqueda en los campos de ubicación de las entradas.

<Badge text="Channels" type="channels" vertical="middle"/>
* Se añade un ejemplo al crear [vistas de contenido](/es/platform/channels/templates.html#vistas-para-contenido).
* Se deja públicos los archivos [manifest.json y serviceworker.js](/es/platform/channels/sites.html#pwa), mientras que se fuerza privacidad de archivos [robots.txt y sitemap.xml](/es/platform/channels/sites.html#seo).
* Mejoras a la usabilidad y conceptos de [temas](/es/platform/channels/templates.html#temas) en el template builder

<Badge text="Customers" type="customers" vertical="middle"/>
* Se añaden nueva vistas cuando no hay elementos creados en [usuarios](/es/platform/customers/realms.html), [segmentos](/es/platform/customers/segments.html), [formularios](/es/platform/customers/forms.html) y [campañas](/es/platform/customers/messaging.html).

### 9.0.6 - 30 de Abril del 2020

<Badge text="Core" type="core" vertical="middle"/>

- Se añade soporte para FOG con Azure y Google Cloud como base de instalación de Modyo.
- Se añade integración con [Google Authenticator](/es/platform/core/security.html#autenticacion-en-dos-pasos) para segundo factor de autenticación de miembros del equipo.
- Se añaden [políticas de contraseña](/es/platform/core/security.html#politica-de-contrasena) para miembros del equipo.
- Múltiples bugs resueltos.
- Múltiples mejoras de navegación y usabilidad.

<Badge text="Content" type="content" vertical="middle"/>
* Solo se verán los espacios en los que tienes permisos como miembro del equipo.
* Se añade la posibilidad de [eliminar espacios](/es/platform/content/spaces.html#general).

<Badge text="Channels" type="channels" vertical="middle"/>
* Se añade [tabla de redirecciones](/es/platform/channels/sites.html#redirecciones-personalizadas) que te permitirá reutilizar antiguas url con un buen SEO y redireccionarlas a las nuevas URL del sitio.
* Se mejora el contenido donde se busca en los pages.
* Se añade snippets para [habilitar PWA](/es/platform/channels/sites.html#pwa) en JavaScript base del sitio cuando la propiedad está activada.
* Se añade la posibilidad de integrar google tag manager a sitios.
* Solo se verán los sitios en los que tienes permisos como miembro del equipo.
* Se añade la posibilidad de [eliminar sitios](/es/platform/channels/sites.html#general).

<Badge text="Insights" type="insights" vertical="middle"/>
* Se añade vista de [reportes en insights](/es/platform/insights/data-studio.html).

### 9.0.5 - 19 de Marzo del 2020

<Badge text="Core" type="core" vertical="middle"/>

- Múltiples bugs resueltos.
- Múltiples mejoras de navegación y usabilidad.

<Badge text="Channels" type="channels" vertical="middle"/>
* Se añade el contenido a los resultados de búsqueda en sitios desde el front end.

### 9.0.4 - 12 de Marzo del 2020

<Badge text="Core" type="core" vertical="middle"/>

- Múltiples bugs resueltos.
- Múltiples mejoras de navegación y usabilidad.

<Badge text="Channels" type="channels" vertical="middle"/>
* Buscador por texto en [template builder](/es/platform/channels/templates.html), para facilitar los cambios.
* Se añade función para forzar la publicación de widgets a través de [Modyo CLI](/es/platform/channels/widgets.html#comandos-disponibles).

### 9.0.3 - 02 de Marzo del 2020

<Badge text="Core" type="core" vertical="middle"/>

- Múltiples bugs resueltos.
- Múltiples mejoras de navegación y usabilidad.

<Badge text="Content" type="content" vertical="middle"/>
* Obtención del content delivery token a través del [SDK de JavaScript](/es/platform/content/public-api-reference.html#contenido-privado).

<Badge text="Channels" type="channels" vertical="middle"/>
* Personalización de la reacción de un sitio cuando una url no existe, [mostrando un error 404 o redirigiendo al home](/es/platform/channels/sites.html#restricciones).

### 9.0.2 - 04 de Febrero del 2020

<Badge text="Core" type="core" vertical="middle"/>

- Múltiples bugs resueltos.
- Múltiples mejoras de navegación y usabilidad.

<Badge text="Content" type="content" vertical="middle"/>
* Usa locations en content con mapas o con un formulario, configurando una api key propia de google en las settings de la cuenta.
* Mejoras al [SDK de liquid](/es/platform/content/public-api-reference.html#sdk-de-liquid) de contenido.
* Mejoras de usabilidad al [asset manager](/es/platform/content/asset-manager.html).

### 9.0.1 - 17 de Enero del 2020

<Badge text="Core" type="core"/>
* Múltiples bugs resueltos.
* Múltiples mejoras de navegación y usabilidad.

<Badge text="Content" type="content" vertical="middle"/>
* Se añade la funcionalidad para [previsualizar contenido](/es/platform/content/entries.html#vista-previa) en los sitios, a pesar de ser headless, cuando se usan contenidos en un sitio de Modyo se puede usar la herramienta para previsualizar dicho contenido.

<Badge text="Channels" type="channels" vertical="middle"/>
* Se añade la funcionalidad para  crear [vistas personalizadas de contenido](/es/platform/channels/templates.html#vistas-para-contenido) en los sitios.
* Se añade un listado de páginas que usan cada widget, para poder ver los efectos de un cambio en donde sea que se use.

### 9.0.0 - 19 de Diciembre del 2019

<Badge text="Core" type="core" vertical="middle"/>

- Separación de usuarios y [miembros del equipo](/es/platform/core/roles.html#equipo), los que tienen acceso a la plataforma se encuentran segregados de los usuarios de la página en sí.
- Nuevos [roles y permisos](/es/platform/core/roles.html).
- [Team review](/es/platform/core/key-concepts.html), reemplazando la aplicación de workflow, permite la colaboración del equipo para la aprobación de publicación y paso a producción.
- Múltiples bugs resueltos.
- Múltiples mejoras de navegación y usabilidad.

<Badge text="Content" type="content" vertical="middle"/>
* Nueva [aplicación de contenido](/es/platform/content/), con todo el contenido headless.
* Nuevo [asset manager](/es/platform/content/asset-manager.html) que permite tener todos los archivos de una cuenta en un solo lugar.

<Badge text="Channels" type="channels" vertical="middle"/>
* Nuevo tema minimal 2020 más limpio y fácil de adaptar.
