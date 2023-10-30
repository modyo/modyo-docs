---
search: true
---

# Notas del release

## 9.2
### 9.2.52 - 13 de octubre de 2023
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad

<Badge text="Customers" type="customers" vertical="middle"/>

* Corrige problema de logout y carga del sitio en simultáneo
* Corrige visibilidad de información en la lista de actividad de una orden


### 9.2.51 - 28 de septiembre de 2023
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad

<Badge text="Customers" type="customers" vertical="middle"/>

* Corrige redrección post logout


### 9.2.50 - 27 de septiembre de 2023
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad
* Corrige problema al guardar configuraciones en despliegues single account

<Badge text="Customers" type="customers" vertical="middle"/>

* Mejoras al mostrar información en medios de pago
* Corrige problemas en la recepción de datos de campañas

<Badge text="Channels" type="channels" vertical="middle"/>

* Excluye de la sincronización de stages los segmentos asociados a páginas y menús


### 9.2.49 - 13 de septiembre de 2023
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad

<Badge text="Channels" type="channels" vertical="middle"/>

* Corrige redirección post login cuando existe un custom domain
* Mejoras al buscador de sitios
  * Ahora los resultados son mas precisos
  * La búsqueda puede ser deshabilitada
  * Se puede establecer una búsqueda multi sitio para una misma organización

<Badge text="Core" type="core" vertical="middle"/>

* Corrige problemas al publicar contenidos y páginas que fueron restauradas desde un backup


### 9.2.48 - 04 de septiembre de 2023
<Badge text="Customers" type="customers" vertical="middle"/>

* Corrige modal para cambiar imágenes en el editor de templates de correos de campañas

### 9.2.47 - 01 de septiembre de 2023
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad

### 9.2.46 - 29 de agosto de 2023
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad

<Badge text="Channels" type="channels" vertical="middle"/>

* Corrige problema con el linter al agregar el tag raw de liquid en los templates

<Badge text="Content" type="content" vertical="middle"/>

* Agrega sanitizador para imagenes de tipo SVGs

<Badge text="Customers" type="customers" vertical="middle"/>

* Corrige problema en la visualización de respuestas de pago con Bancard
* Corrige problema de cruce de redirecciones en inicios de sesión concurrentes en distintos reinos de usuarios

### 9.2.45 - 17 de agosto de 2023
<Badge text="Customers" type="customers" vertical="middle"/>

* Corrige problemas en el guardado de templates de correo, ahora templates antiguos se pueden volver a guardar, además los tags html ya no pierden sus atributos

### 9.2.44 - 10 de agosto de 2023
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad

<Badge text="Customers" type="customers" vertical="middle"/>

* Corrige loop de redirecciones en logout entre reino e identity provider bajo ciertas circunstancias
* Agrega rol de solo lectura en los reinos

### 9.2.43 - 03 de agosto de 2023
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad

<Badge text="Channels" type="channels" vertical="middle"/>

* Corrige problema al guardar variables en widgets provenientes de Modyo CLI

<Badge text="Content" type="content" vertical="middle"/>

* Mejoras en el listado de entradas de contenido, ahora las acciones en bulk se muestran según los elementos seleccionados
* Mejoras en la validación de tipo de assets subidos a la plataforma

### 9.2.42 - 28 de julio de 2023
<Badge text="Customers" type="customers" vertical="middle"/>

* Corrige error en flujo de autenticación con identity providers 

### 9.2.41 - 26 de julio de 2023
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad

<Badge text="Channels" type="channels" vertical="middle"/>

* Corrige problemas al mostrar el preview de un sitio público sin reino y con un custom domain configurado

<Badge text="Customers" type="customers" vertical="middle"/>

* Mejoras en las campañas de correo
* Mejora comportamiento de la URL post login de los reinos, ahora la URL queda como redirección por defecto y por una opción se puede forzar a llegar siempre a esa URL
* Agrega FPay como medio de pago soportado
* Mejoras en segmentos
  

### 9.2.40 - 14 de julio de 2023
<Badge text="Customers" type="customers" vertical="middle"/>

* Mejoras en la validación de formulario anónimo

<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad
* Actualización de dependencias
* Corregir migraciones para permitir que cliente migre a version actual

<Badge text="Content" type="content" vertical="middle"/>

* Permitir publicar y despublicar entradas a pesar de que existan referencias nulas en versiones anteriores


### 9.2.39 - 11 de julio de 2023
<Badge text="Customers" type="customers" vertical="middle"/>

* Se solicita ingresar password antes de eliminar una cuenta de usuario

<Badge text="Core" type="core" vertical="middle"/>

* Se corrige error en el flujo OAuth2

### 9.2.38 - 07 de julio de 2023
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad
* Mejora la información mostrada en los logs de actividades

<Badge text="Channels" type="channels" vertical="middle"/>

* Corrige problemas de acceso a la edición de headers de seguridad
* Agrega el rol viewer a los miembros del equipo. Este rol incluso puede ver elementos a sicronizar o en un release

<Badge text="Content" type="content" vertical="middle"/>

* Agrega el rol viewer a los miembros del equipo.

<Badge text="Customers" type="customers" vertical="middle"/>

* Agrega configuración de una página inicial post-login. Luego de un inicio de sesión exitoso en el reino se redirigirá a esta página


### 9.2.37 - 30 de junio de 2023
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad
* Mejoras en la configuración de políticas de expiración e inactividad

<Badge text="Channels" type="channels" vertical="middle"/>

* Agrega configuración de nuevos headers de seguridad, Cross-Origin-Embedder-Policy, Cross-Origin-Opener-Policy, Cross-Origin-Resource-Policy

<Badge text="Customers" type="customers" vertical="middle"/>

* Corrige problema al leer una notificacion en el profile, ahora se marca correctamente como leido
* Agrega nuevo parametro (redirect_to) en la url de login de un sitio para rederigir a una vista en particular o a algún sitio dentro de la organización
* Se modifica las campañas de correo, se reemplaza los multiples envios por el clonado de campaña para nuevos envios para mayor simplicidad en su gestión


### 9.2.36 - 19 de junio de 2023
<Badge text="Core" type="core" vertical="middle"/>

* Mejoras de seguridad
* Agrega validación de permisos administradores a los endpoints de la documentación swagger del API

<Badge text="Channels" type="channels" vertical="middle"/>

* Corrige problema de diferencias vacías después de sincronizar stages

<Badge text="Content" type="content" vertical="middle"/>

* Corrige problema de listado de spaces repetidos para usuarios en un grupo de permisos
* Corrige problema de publicacion de páginas cuando provienen de la sincronización de stages

<Badge text="Customers" type="customers" vertical="middle"/>

* Se valida correctamente el campo default email sender en las configuraciones del reino, ahora tampoco puede estar vacío.

<Badge text="Insights" type="insights" vertical="middle"/>

* Corrige valor inicial del filtro de fecha, ahora muestra correctamente el rango seleccionado.



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
* Rutas password y signup dejan de responder a extensiones que no correspondan
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
