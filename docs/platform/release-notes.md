---
search: true
---

# Notas del release

### 9.1.X - Primer release planificado para el segundo trimestre del 2020.
¿Qué esperar en esta versión?

&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Scheduler: Programar un cambio en el futuro sin la necesidad de despublicar lo que ya está publicado.
* Grupos de administradores: Para añadir fácilmente usuarios en conjunto a distintos sitios o espacios.
* Modyo Lite: Accede a una versión de Modyo que incluye el Core y las aplicaciones de Content y Channels.

<Badge text="Channels" type="channels" vertical="middle"/>
* Release manager: Agrupa y acumula publicaciones de Channels.
* Site stages: Trabaja en un ambiente seguro pre-productivo de un sitio, sin comprometer la integridad de lo que ya está publicado en él.
* Variables globales: Reutiliza snippets entre sitios.
* Mejoras a SEO: Personaliza los meta-tags para tus páginas desde una interfaz fácil de usar.

<Badge text="Customers" type="customers" vertical="middle"/>
* Eventos de negocio: Añade a Modyo cualquier evento que que sea relevante para tu negocio, permitiendo luego segmentar a los clientes.
* Reinos de usuarios: Configura distintos reinos de usuarios para que accedan a distintos sitios o incluso a distintos stages de un mismo sitio.

### 9.0.8 - June 15, 2020
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Se añaden mejoras de seguridad a endpoints de subida de archivos.
* Multiple bugs solved.
* Multiple navigation and usability improvements.

<Badge text="Content" type="content" vertical="middle"/>
* Se añaden distintos drops de liquid dependiendo del tipo de archivo en el [asset manager](/platform/content/asset-manager.html#propiedades-de-los-archivos).

<Badge text="Channels" type="channels" vertical="middle"/>
* Se añade ejemplo de código al crear nuevas [vistas de contenido](/platform/channels/templates.html#vistas-para-contenido).
* Se añade un selector de atributos de la entrada a las vistas de contenido.

### 9.0.7 - 01 de Junio del 2020
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Mejoras a gestión y cuotas de planes.
* Se añade vista vacía de [mis tareas](/platform/core/the-modyo-interface.html).
* Múltiples bugs resueltos.
* Múltiples mejoras de navegación y usabilidad.

<Badge text="Content" type="content" vertical="middle"/>
* Se cambia modo [vista previa](/platform/content/entries.html#vista-previa) para que por defecto siempre use los templates editables.
* Se añaden nueva vistas cuando no hay elementos creados en [entradas](/platform/content/entries.html), [tipos](/platform/content/types.html), [categorías](/platform/content/entries.html#categorias) y [espacios](/platform/content/spaces.html).
* Se añade [operador "search"](/platform/content/public-api-reference.html#filtros-2) para búsqueda en los campos de ubicación de las entradas.

<Badge text="Channels" type="channels" vertical="middle"/>
* Se añade un ejemplo al crear [vistas de contenido](/platform/channels/templates.html#vistas-para-contenido).
* Se deja públicos los archivos [manifest.json y serviceworker.js](/platform/channels/sites.html#pwa), mientras que se fuerza privacidad de archivos [robots.txt y sitemap.xml](/platform/channels/sites.html#seo).

<Badge text="Customers" type="customers" vertical="middle"/>
* Se añaden nueva vistas cuando no hay elementos creados en [usuarios](/platform/customers/users.html), [targets](/platform/customers/targets.html), [formularios](/platform/customers/forms.html) y [campañas](/platform/customers/messaging.html).

### 9.0.6 - 30 de Abril del 2020
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Se añade soporte para FOG con Azure y Google Cloud como base de instalación de Modyo.
* Se añade integración con [Google Authenticator](/platform/core/security.html#autenticacion-en-dos-pasos) para segundo factor de autenticación de miembros del equipo.
* Se añaden [políticas de contraseña](/platform/core/security.html#politica-de-contrasena) para miembros del equipo.
* Múltiples bugs resueltos.
* Múltiples mejoras de navegación y usabilidad.

<Badge text="Content" type="content" vertical="middle"/>
* Solo se verán los espacios en los que tienes permisos como miembro del equipo.
* Se añade la posibilidad de [eliminar espacios](/platform/content/spaces.html#general).

<Badge text="Channels" type="channels" vertical="middle"/>
* Se añade [tabla de redirecciones](/platform/channels/sites.html#redirecciones-personalizadas) que te permitirá reutilizar antiguas url con un buen SEO y redireccionarlas a las nuevas URL del sitio.
* Se mejora el contenido donde se busca en los pages.
* Se añade snippets para [habilitar PWA](/platform/channels/sites.html#pwa) en JavaScript base del sitio cuando la propiedad está activada.
* Se añade la posibilidad de integrar google tag manager a sitios.
* Solo se verán los sitios en los que tienes permisos como miembro del equipo.
* Se añade la posibilidad de [eliminar sitios](/platform/channels/sites.html#general).

<Badge text="Insights" type="insights" vertical="middle"/>
* Se añade vista de [reportes en insights](/platform/insights/data-studio.html).

### 9.0.5 - 19 de Marzo del 2020
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Múltiples bugs resueltos.
* Múltiples mejoras de navegación y usabilidad.

<Badge text="Channels" type="channels" vertical="middle"/>
* Se añade el contenido a los resultados de búsqueda en sitios desde el front end.

### 9.0.4 - 12 de Marzo del 2020
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Múltiples bugs resueltos.
* Múltiples mejoras de navegación y usabilidad.

<Badge text="Channels" type="channels" vertical="middle"/>
* Buscador por texto en [template builder](/platform/channels/templates.html), para facilitar los cambios.
* Se añade función para forzar la publicación de widgets a través de [Modyo CLI](/platform/channels/widgets.html#comandos-disponibles).

### 9.0.3 - 02 de Marzo del 2020
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Múltiples bugs resueltos.
* Múltiples mejoras de navegación y usabilidad.

<Badge text="Content" type="content" vertical="middle"/>
* Obtención del content delivery token a través del [SDK de JavaScript](/platform/content/public-api-reference.html#contenido-privado).

<Badge text="Channels" type="channels" vertical="middle"/>
* Personalización de la reacción de un sitio cuando una url no existe, [mostrando un error 404 o redirigiendo al home](/platform/channels/sites.html#restricciones).

### 9.0.2 - 04 de Febrero del 2020
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Múltiples bugs resueltos.
* Múltiples mejoras de navegación y usabilidad.

<Badge text="Content" type="content" vertical="middle"/>
* Usa locations en content con mapas o con un formulario, configurando una api key propia de google en las settings de la cuenta.
* Mejoras al [SDK de liquid](/platform/content/public-api-reference.html#sdk-de-liquid) de contenido.
* Mejoras de usabilidad al [asset manager](/platform/content/asset-manager.html).
 
### 9.0.1 - 17 de Enero del 2020
&nbsp;
<Badge text="Core" type="core"/>
* Múltiples bugs resueltos.
* Múltiples mejoras de navegación y usabilidad.

<Badge text="Content" type="content" vertical="middle"/>
* Se añade la funcionalidad para [previsualizar contenido](/platform/content/entries.html#vista-previa) en los sitios, a pesar de ser headless, cuando se usan contenidos en un sitio de Modyo se puede usar la herramienta para previsualizar dicho contenido.

<Badge text="Channels" type="channels" vertical="middle"/>
* Se añade la funcionalidad para  crear [vistas personalizadas de contenido](/platform/channels/templates.html#vistas-para-contenido) en los sitios.
* Se añade un listado de páginas que usan cada widget, para poder ver los efectos de un cambio en donde sea que se use.

### 9.0.0 - 19 de Diciembre del 2019
&nbsp;
<Badge text="Core" type="core" vertical="middle"/>
* Separación de usuarios y [miembros del equipo](/platform/core/roles.html#equipo), los que tienen acceso a la plataforma se encuentran segregados de los usuarios de la página en sí.
* Nuevos [roles y permisos](/platform/core/roles.html).
* [Team review](/platform/core/team-review.html), reemplazando la aplicación de workflow, permite la colaboración del equipo para la aprobación de publicación y paso a producción.
* Múltiples bugs resueltos.
* Múltiples mejoras de navegación y usabilidad.

<Badge text="Content" type="content" vertical="middle"/>
* Nueva [aplicación de contenido](/platform/content/), con todo el contenido headless.
* Nuevo [asset manager](/platform/content/asset-manager.html) que permite tener todos los archivos de una cuenta en un solo lugar.

<Badge text="Channels" type="channels" vertical="middle"/>
* Nuevo tema minimal 2020 más limpio y fácil de adaptar.
