---
search: true
---

# Notas del release

## 9.2

### 9.2.7 - 10 de marzo de 2022
<Badge text="Core" type="core" vertical="middle"/>

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
### 9.1.37 - 5 de febrero del 2022
<Badge text="Core" type="core" vertical="middle"/>
* Se arregla inscripción de tarjetas con OneClick API

<Badge text="Channels" type="channels" vertical="middle"/>
* Se arreglan problemas con editor de texto multilínea
* Se arregla problema de contaminación de cache

### 9.1.36 - 18 de enero del 2022

<Badge text="Channels" type="channels" vertical="middle"/>
* Se agrega opción para especificar status code en redirección de default site

<Badge text="Customers" type="customers" vertical="middle"/>
* Se previene inyección HTML a través del atributo de nombde de cuenta en formulario de inicio de sesión

<Badge text="Content" type="content" vertical="middle"/>
* Se arregla problema al filtrar por campo múltiple sin opciones

<Badge text="Core" type="core" vertical="middle"/>
* Se actualiza bundle de certificados raíz

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

- [Scheduler](es/platform/core/key-concepts.html#programado): Programar un cambio en el futuro sin la necesidad de despublicar lo que ya está publicado.
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
