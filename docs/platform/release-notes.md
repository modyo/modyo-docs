---
search: true
---

# Notas del release

### 9.1.0 - Primer release planificado para el segundo trimestre del 2020.
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

<Badge text="Customers" type="customers" vertical="middle"/>
* Eventos de negocio: Añade a Modyo cualquier evento que que sea relevante para tu negocio, permitiendo luego segmentar a los clientes.
* Reinos de usuarios: Configura distintos reinos de usuarios para que accedan a distintos sitios o incluso a distintos stages de un mismo sitio.

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
