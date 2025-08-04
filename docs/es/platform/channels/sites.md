---
search: true
sidebarDepth: 2
---

# Aplicaciones web

Una aplicación web (web app) despliega el contenido creado en Content y Channels para crear tu canal digital personalizado. En la aplicación web se lleva a cabo todo el desarrollo, diseño y flujo de navegación.

Una web app puede estar en uno de estos tres estados:

- **Habilitado**: Estado por defecto de las aplicaciones web recién creadas y aquellas que están habilitadas para uso.
- **Cambios pendientes**: Existen modificaciones pendientes en la aplicación web. Un administrador puede verificar los cambios y publicar la aplicación web.
- **Deshabilitado**: No es posible acceder a la aplicación web.

## Crear una aplicación web

Para crear una nueva web app, sigue estos pasos:

1. En el menú lateral, haz click en **channels**.
1. Haz click en **+ nueva aplicación**.
1. Escribe el nombre y el host (ruta principal de la aplicación web).
1. Si es necesario, selecciona a qué reino pertenece.
1. Haz click en **crear**.

Una vez creada, la aplicación web se habilita automáticamente y el sistema te lleva a la pantalla de resumen.

:::warning Atención
En el índice de web apps, solo verás aquellas apps en las cuales tienes algún rol y eres parte del equipo de trabajo.
:::

## Revisión y publicación conjunta

En la pantalla de revisión y publicación conjunta puedes ver todos los cambios pendientes por publicar en tu web app. Para visualizar los cambios, haz click en el botón **ver**.

### Publicar en conjunto

Para hacer una publicación en conjunto en tu aplicación web, sigue estos pasos:

1. En el menú lateral, haz click en **channels**.
1. Haz click en tu aplicación web.
1. En la pantalla de resumen puedes ver los cambios pendientes por publicar.  Haz click en el botón **publicar** para previsualizar y seleccionar los cambios.
1. Selecciona los cambios que quieres publicar.
1. Haz click en el botón **publicar**.


:::tip Tip
Si haces click en **publicar** en un artículo en particular (e.g. publicar una página), se abrirá la ventana de Revisar y Publicar con este artículo seleccionado para ver los cambios pendientes.
:::

## Buscador

Cuando creas una aplicación web con Modyo, tus usuarios pueden realizar búsquedas en tus web apps y en todo su contenido mediante la función de búsqueda. Esto puede hacerse utilizando la URL `/search` o accediendo a la página de búsqueda dedicada.

### Habilitar o deshabilitar búsqueda

Para habilitar o deshabilitar la funcionalidad de búsqueda, sigue estos pasos:

1. En el menú lateral, haz click en **channels**.
1. Haz click en tu aplicación web.
1. Haz click en **general**.
1. En la sección privacidad, habilita o deshabilita la casilla de **habilitar búsqueda**, según requieras.
1. Haz click en **guardar**.


### Plantilla de búsqueda

Puedes controlar la apariencia y funcionalidades de búsqueda en tu web app utilizando la [plantilla](/es/platform/channels/sites.html#plantilla-de-busqueda/) _search_.

Esta plantilla está disponible de forma predeterminada en la sección de plantillas y contiene todo el código Liquid necesario para realizar cabo consultas en tu web app. Por defecto, al realizar una consulta, los registros se muestran en forma de lista con su título, descripción y un enlace hacia su dirección. Puedes modificar la plantilla para adaptarla a tus necesidades.

Para acceder a esta plantilla:

1. En el menú lateral, haz click en **channels**.
1. Selecciona tu aplicación web.
1. Haz click en **plantillas** en el menú lateral.
1. En la sección vistas, en la columna derecha, y debajo de la categoría search, haz click en **show**.

Para acceder a la plantilla de búsqueda anexa _search_ o _search.json_ a la URL de tu web app.

Por ejemplo:
 - `test.modyo.com/miSitio/search`
 - `test.modyo.com/miSitio/search.json`


### Search.json

Puedes también usar "search.json" para integrar el buscador de manera más personalizada.

Para acceder a esta API, agrega "search.json" a la URL de tu web app junto con tu consulta. Por ejemplo: test.modyo.com/miSitio/search.json?query=miConsulta

Personaliza tus consultas de la siguiente manera:


|  Parámetro       |       Descripción    |
|------------------|----------------------|
| **query** | Realiza consultas a la API de búsqueda. Este buscador lleva a cabo consultas en todas las páginas publicadas de tu web app y en todas las entradas públicas de los espacios vinculados a la web app. |
| **per_page** | Divide el número total de registros en el número de páginas seleccionadas. |
| **page** | Selecciona la página específica que deseas consultar, en caso de que existan múltiples páginas de registros para la consulta. |
| **multi=true** | Permite realizar búsquedas en todos las aplicaciones web de la cuenta que tengan habilitada la función de búsqueda. |


## Configuración de aplicaciones web

En la sección de configuración de la aplicación puedes personalizar tu web app para que tus visitantes, clientes, desarrolladores y administradores visualicen tu web app de manera diferente. Así como para optimizar el SEO de tu aplicación.


### General

En esta sección puedes configurar:

- **Nombre de la aplicación**: Este campo se usa como título por defecto para el SEO de tu web app.
- **Descripción**

:::warning Atención

Los cambios en el nombre y la descripción se reflejan de inmediato Modyo. La actualización en los resultados de búsqueda se verá una vez que los motores de búsqueda completen su proceso de reindexación.

:::
- **Logo de la aplicación**: Imagen que se muestra en la parte superior izquierda.
- **Idioma de la aplicación**: El idioma en el que está disponible tu web app. Las opciones son: español, inglés y portugués.
- **Zona horaria**: La zona horaria en que se muestran los campos de fecha y hora en la app. Esta configuración afecta a todas las secciones, incluyendo pages, navegación y plantillas, así como las llamadas de Liquid a los datos de la aplicación web.


:::warning Atención
La hora en el contenido se gestiona en la sección [general](https://docs.modyo.com/es/platform/core/configuration.html#configuracion) de configuración de la cuenta.
:::

- **ID de Google Tag Manager**: Agrega un identificador de Google Tag Manager para insertar scripts para el seguimiento y medición de eventos.

Por defecto, los nuevos temas de Modyo incluyen snippets para inyectar automáticamente los scripts de Google Tag Manager en los tags `<head>` y `<body>` de las aplicaciones web.

Para acceder a estos snippets:

1. En el menú lateral, haz click en channels.
1. Selecciona tu aplicación web.
1. Haz click en plantillas en el menú lateral
1. En la columna del lado derecho, da click en snippets y ve a la sección general. Puedes incrustarlos en el snippet _head_ y en las vistas _home_ y _base_.

**Para crear snippets personalizados**:

**Para el _head_**:

1. Utiliza este código:

```liquid
{% if site.tag_manager_id != '' %}

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','{{site.tag_manager_id}}');</script>
<!-- End Google Tag Manager -->

{% endif %}
```
2. Incrusta el snippet en el _head_ de la web app usando {% snippet "gtm-head" %}, reemplazando "gtm-head" por el nombre que le diste al snippet.

**Para el _body_**

1. Utiliza este código:

```liquid
{% if site.tag_manager_id != '' %}

<!-- Google Tag Manager (noscript) -->
<noscript>
<iframe src="https://www.googletagmanager.com/ns.html?id={{ site.tag_manager_id }}" height="0" width="0"
style="display:none;visibility:hidden">
</iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->

{% endif %}
```

2. Incrusta el snippet dentro de los tags body de las vistas _home_ y _base_ usando {% snippet "gtm-body" %}, reemplazando "gtm-body" por el nombre que le diste al snippet.

Con esta configuración completada, cuando exista un valor asociado al campo **ID de Google Tag Manager**, los scripts se inyectarán automáticamente. Esto te permitirá crear eventos en Google Tag Manager para registrar las acciones de tus usuarios.



- **Favicon**: Imagen que aparece al costado de la barra de dirección.
- **Icono de Apple**: Imagen que se ve en los dispositivos móviles al usar el sitio como aplicación.
- **Borrar**: Eliminar definitivamente un sitio y todo sus elementos.

:::danger Peligro
Borrar es irreversible, por lo que debes estar completamente seguro al ejecutar esta acción.

Al presionar el botón de eliminado, el sistema te pedirá que ingreses el nombre textual del sitio que deseas eliminar para confirmar la acción. Una vez confirmada, no podrás volver a acceder al sitio ni a sus elementos.
:::



**Visualización**
- **Favicon**: Imagen que se muestra junto a la barra de dirección.
- **Icono de Apple**: Imagen que se visualiza en dispositivos móviles iOS al marcar la aplicación como favorita.

**Privacidad**
- **Público**: Todos los visitantes pueden ver la web app y su contenido sin necesidad de iniciar sesión.
- **Privado**: Solo los usuarios con una sesión iniciada de Modyo pueden ver la web app.
- **Mostrar home a visitas públicas**: La página de inicio de la web app se muestra a todos los visitantes, incluso aquellos que no hayan iniciado sesión. Al navegar a cualquier otra página, se solicita registro o inicio de sesión.
- **Redireccionar al home cuando una URL no se encuentra**: Por defecto, la aplicación web muestra un error 404 cuando el usuario accede a una URL inexistente. Si marcas esta opción, el usuario será redirigido a la página de inicio de la web app en lugar del 404.
- **Habilitar búsqueda**: Activa la función de búsqueda en la web app.
- **Habilitar la búsqueda en múltiples aplicaciones**

:::tip Tip
Si habilitas la búsqueda en tu web app y usas el parámetro `multi=true` desde otra web app, también puedes buscar en tu app actual.
:::


**Zona peligrosa**

::: danger Peligro
Procede con cautela al modificar estas opciones, ya que pueden afectar el acceso a tu aplicación web y la experiencia de tus sus usuarios.
:::

- **Cambiar host**: Esta acción modifica la visibilidad y accesibilidad de la aplicación. Realizar un cambio de host puede impactar la visibilidad y disponibilidad de la aplicación web.
- **Cambiar reino**: Despliega el reino de la aplicación. Al cambiar de reino pierdes toda la configuración de privacidad en tus web apps, páginas y navegación.
- **Cambiar estado**: Cambia el estado de la aplicación, las opciones son:
	* Habilitado: Editable y visible al público. Este es el estado por defecto de una web app.
	* Editable: Modificable pero no visible al público. Requiere inicio de sesión para acceder. Robots.txt, PWAs y el manifiesto están deshabilitados en este estado.
	* Deshabilitado: No editable ni visible. En este estado, no es accesible ni visible para los usuarios.
- **Eliminar aplicación**: Inicia la eliminación asíncrona de la aplicación y de todos sus elementos, como páginas y widgets.

::: danger Peligro
Es irreversible la eliminación de una aplicación web.

Al presionar el botón de eliminado, el sistema te pide que ingreses el nombre textual de la aplicación para confirmar la acción. Una vez confirmada, no puedes acceder a la aplicación ni a sus elementos.
:::

### SEO

El SEO (Search Engine Optimization) es fundamental para el posicionamiento en motores de búsqueda. Los usuarios dependen de una buena configuración de SEO para llegar a tu aplicación.

Puedes configurar:

- **Tagline**: Descripción en los motores de búsqueda, debajo del nombre de la aplicación web.
- **Actualizar automáticamente el archivo sitemap.xml para mí**: Permite a Modyo crear y mantener el sitemap.xml automáticamente. Desactiva esta opción para usar un mapa de sitio personalizado.
- **Sitemap**: Este archivo XML permite a los motores de búsqueda indexar el contenido del sitio.
- **Archivo sitemap.xml personalizado**: Archivo que permite a los motores de búsqueda indexar el contenido de la web app.
- **Actualizar automáticamente el archivo robots.xml para mí**: Permite a Modyo crear y mantener robots.txt automáticamente. Desactiva esta opción para proporcionar instrucciones personalizadas a los rastreadores de web apps.
- **Archivo robots.txt personalizado**: Archivo que indica a los robots rastreadores las partes de la aplicación pueden o no indexar.

:::tip Tip
Los archivos robots.txt y sitemap.xml solo son visibles con dominios personalizados. De lo contrario, se encuentran solo a nivel de plataforma, tienen sus valores por defecto y no se pueden personalizar.
:::

- **Meta tags personalizados**: Te permite configurar meta tags para todas las páginas y sus valores por defecto. Da click en **+ nuevo meta tag** para crear uno nuevo.
- **Replicar meta tag en páginas**: Al crear un nuevo meta tag, selecciona esta opción para propagar el meta tag y su valor en todas las páginas de la web app. Debes guardar los cambios en meta tags y publicar todas las páginas modificadas para que los nuevos meta tags surtan efecto.

:::warning Atención
Solo los administradores de la aplicación pueden añadir meta tags. Los developers pueden añadir y eliminar meta tags página por página.
:::

#### SEO en-página vs. fuera-de-página (On-Page vs. Off-Page)

También conocidos como SEO en-sitio y fuera-de-sitio, estos términos se refieren a las acciones que puedes hacer dentro y fuera de una página web para mejorar la visibilidad en buscadores. Para un mejor posicionamiento, recomendamos utilizar ambas estrategias de manera conjunta.

##### SEO en-página

Para mejorar el SEO en-página:

- Utiliza palabras clave en la sección de SEO de la plataforma y en tus páginas.
- Incluye palabras clave en la URL.
- Agrega enlaces relevantes a otras secciones de tu aplicación.



##### SEO fuera-de-página

Para mejorar el SEO fuera-de-página:

- Promociona el contenido en redes sociales y otros canales de distribución.
- Fomenta alianzas y colaboraciones con medios de autoridad en el tema.



### PWA

Modyo te permite implementar Progressive Web Apps (PWA) en tus canales digitales, ofreciendo una experiencia mejorada a tus usuarios. Para usar funcionalidades PWA debes habilitar las opciones que requieras en tu proyecto.

#### Service worker principal

Activa el Service Worker para que tu canal digital pueda almacenar datos en caché, funcionar sin conexión y brindar una experiencia mejorada a tus usuarios, aún con una conexión inestable.

Para habilitar el service worker, sigue estos pasos:

1. En el menú lateral, haz click en channels.
1. Selecciona tu aplicación web.
1. Haz click en configuración de la aplicación.
1. Activa la casilla habilitar service worker principal.
1. Da click en **guardar**.

Una vez activado y guardado, se crea la siguiente ruta:


```bash
https://[domain]/[site-name]/serviceworker.js
```

Para modificar el service worker, sigue estos pasos:

1.  En el menú lateral, haz click en channels.
1. Selecciona tu aplicación web.
1. Haz click en plantillas, en el menú lateral.
1. Da click en la pestaña snippets en la columna de la  derecha.
1. En la sección de service worker, selecciona el archivo que quieres modificar.
1. Haz click en **guardar**.
1. Haz click en **publicar**.


:::warning Atención
Es necesario personalizar y guardar el código del service worker para integrar estas funciones a tu web app.
:::

:::warning Atención
Si desactivas el service worker, tu aplicación web seguirá funcionando, con funciones básicas y sin los beneficios del service worker.
:::


#### Notificaciones WebPush

Permite que tus usuarios reciban notificaciones WebPush junto con las campañas de notificación. Para enviar mensajes a tus usuarios debes asegurarte que tu aplicación esté vinculada a un reino y el estado de la aplicación esté en **Habilitado**. La gestión de las notificaciones se realiza a través de la [herramienta de mensajería](/es/platform/customers/messaging.html).

#### Manifiesto PWA

El manifiesto indica cómo quieres que un navegador muestre tu canal digital. Para activar el manifiesto:

1. En el menú lateral, haz click en channels.
1. Selecciona tu aplicación web.
1. Haz click en configuración de la aplicación.
1. Da click en PWA.
1. Marca la casilla habilitar manifiesto PWA.
1. En el modal, llena los campos.
1. Haz click en **generar**.
1. Haz click en **guardar** en el modal.
1. Haz click en **guardar**.


Al activar el manifiesto, se crea esta ruta:


```bash
https://[domain]/[site-name]/manifest.json
```

Es necesario implementar el manifiesto en cada página de la PWA a través de [Plantillas](/es/platform/channels/templates.html), en el snippet ``head``.


:::warning Atención
Si no personalizas el contenido del manifiesto PWA y agregas la ruta en plantillas, el manifiesto se creará en blanco y no tendrá ningún efecto.
:::



### Dominios

En la sección de dominios puedes ver y modificar la ubicación pública de tu aplicación web.

:::warning Atención
Es esencial informar a todos los miembros de la plataforma sobre cualquier cambio que realices en esta sección.
:::

Activa la casilla para realizar modificaciones. Las variables que puedes modificar son:
- **Host**: Ubicación de la aplicación web en del servidor.
- **Dominio primario**: Dirección principal de la aplicación web.
- **Dominio alternativo**: Dirección secundaria para redireccionar en caso de fallo en el primario.


:::warning Atención
Estos dominios están reservados por Modyo. No están disponibles como dominios personalizados:
<table style="border: none;"><tr style="border: none;">
<td style="border: none;"><ul>
<li>education.modyo.com</li>
<li>elearning.modyo.com</li>
<li>training.modyo.com</li>
<li>capacitacion.modyo.com</li>
</ul></td>
<td style="border: none;"><ul>
<li>support.modyo.com</li>
<li>soporte.modyo.com</li>
<li>developers.modyo.com</li>
<li>desarrolladores.modyo.com</li>
</ul></td>
<td style="border: none;"><ul>
<li>www.modyo.com</li>
<li>es.modyo.com</li>
<li>pt.modyo.com</li>
<li>global.modyo.com</li>
</ul></td>
</tr></table>
:::

:::warning Atención
Estos hosts están reservados por Modyo. No están disponibles como hosts para tus web apps:
<table style="border: none;"><tr style="border: none;">
<td style="border: none;"><ul>
<li>404</li>
<li>422</li>
<li>500</li>
<li>activate</li>
<li>admin</li>
<li>api</li>
</ul></td>
<td style="border: none;"><ul>
<li>auth</li>
<li>callback</li>
<li>code_generators</li>
<li>crossdomain</li>
<li>dist</li>
<li>login</li>
</ul></td>
<td style="border: none;"><ul>
<li>logout</li>
<li>mailing</li>
<li>panel</li>
<li>password</li>
<li>profile</li>
<li>rails</li>
</ul></td>
<td style="border: none;"><ul>
<li>realms</li>
<li>robots</li>
<li>session</li>
<li>signup</li>
<li>sitemap</li>
<li>status</li>
</ul></td>
<td style="border: none;  vertical-align: top;"><ul>
<li>uploads</li>
<li>users</li>
<li>welcome</li>
<li>widgets</li>
</ul></td>
</tr></table>
:::

### Stages

Usar stages en tu aplicación web te permite implementar un enfoque de integración y despliegue continuo (CI/CD) para añadir nuevas funcionalidades sin afectar lo que ya está publicado.

Las principales ventajas de tener distintas etapas en tus web apps son:

- Desarrollo focalizado: Desarrolla en el stage actual sin modificar la web app publicada.
- Personalización flexible: Crea y usa variables, widgets y plantillas locales para personalizar la experiencia o visualizar cambios.
- Integración sencilla: Al finalizar los cambios en un stage, puedes integrarlos a otro.

:::warning Atención
- Un web app puede tener un máximo de cuatro stages.
- Los cambios que realices en un stage solo se reflejan en ese stage.
- Los stages solo están disponible para aplicaciones web.
- Las PWAs y redirecciones personalizadas se deshabilitan en los stages. Solo se pueden usar en el stage `main`.
- La sección de miembros del equipos es independiente en cada stage `main`. Agrega miembros para habilitar la revisión de equipo.
- Puedes tener los mismos miembros con diferentes roles y permisos para cada stage.
:::

#### Agregar un nuevo stage

Para agregar un nuevo stage a tu web app, sigue estos pasos:

1. En el menú lateral, haz click en channels.
1. Selecciona tu aplicación web.
1. Haz click en configuración de la aplicación.
1. Haz click en stages.
1. Da click en **+ nuevo stage**.
1. Selecciona el stage de origen y nombra tu nuevo stage.
1. Haz click en **crear**.


:::tip Tip
En la sección de resumen de tu aplicación web puedes ver los detalles del stage actual. Puedes además dar click en el nombre de tu web app para desplegar un listado de sus stages y navegar entre ellos.
:::

#### Sincronizar un stage

:::warning Atención
La plataforma no permite sincronizar cambios que todavía no están publicados. Asegúrate de no tener cambios pendientes por publicar antes de iniciar la sincronización.
:::

Para sincronizar un stage sigue estos pasos:

1. En el menú lateral, haz click en channels.
1. Da click en el nombre de tu aplicación web y selecciona el stage del que quieres sincronzar.
1. En la vista resumen haz click en **sincronizar**.
1. En la vista de sincronizaciones, selecciona el stage al que quieres sincronizar. En esta vista puedes ver todos los elementos con diferencias entre los stages seleccionados. Haz click en ver para obtener más detalles sobre los cambios.
1. Activa las casillas de los elementos que quieres sincronizar.
1. Haz click en **sincronizar**


:::warning Atención
Los elementos de un stage asociados a un segmento no se sincronizan. Deberás repetir el proceso manualmente en el nuevo stage, una vez concluida la sincronización.
:::

#### Eliminar un stage

Para eliminar un stage, sigue estos pasos:
1. En el menú lateral, haz click en channels.
1. Da click en el nombre de tu aplicación web y selecciona el stage que quieres eliminar.
1. Haz click en configuración de la aplicación.
1. Haz click en General.
1. En la sección zona peligrosa haz click en **eliminar stage**.
1. Ingresa el nombre de tu stage.
1. Haz click en **borrar**.


:::warning Advertencia
Una vez confirmes la eliminación, Modyo inicia un proceso asíncrono y no podrás acceder nuevamente al stage.

Al eliminar un stage se borran todos los elementos asociados a ese stage en la aplicación web, incluyendo páginas y widgets. Además, se elimina la configuración de equipo, roles y otros aspectos relevantes relacionados con el stage.
:::

### Revisión en equipo

La Revisión en Equipo es una herramienta que permite controlar el proceso de publicación de contenido en Modyo.

Al activar la Revisión en Equipo mediante la casilla de **Habilitar revisión en equipo**, estableces que cada elemento debe pasar por distintas etapas de revisión antes de que pueda ser publicado.

Una vez que hayas habilitado la revisión en equipo, puedes realizar las siguientes acciones:

- Definir el **número de aprobaciones** necesarias para que un elemento pueda ser publicado.
- **Restringir la selección de revisores** - Solo quien envía a revisión puede seleccionar quién debe revisar el contenido y únicamente esos revisores podrán aprobar el contenido.
- **Forzar revisión** - Al activar está opción, al menos uno de los usuarios designados como revisores tiene que aprobar el elemento antes de la publicación.
- **Requerir todos** - Con esta opción activa, exiges que todos los usuarios designados como revisores aprueben el elemento antes de que este pueda ser publicado.


### Miembros del Equipo

Para organizar y gestionar eficientemente el trabajo en Modyo, puedes seleccionar los miembros del equipo que participarán en la elaboración de cada sitio, dándoles acceso a las tareas de escritura, revisión y/o publicación.

Al crear un sitio, el administrador puede asignar manualmente a los usuarios y los roles predeterminados que habilitan cada una de las funciones.


#### Agregar un nuevo miembro
Para agregar un nuevo miembro para tu sitio, sigue estos pasos:

1. Desde el menú principal de Modyo Platform, despliega la sección **Channels**.
1. Selecciona tu sitio.
1. Expande **Configuración de Sitio**.
1. Haz click en **Miembros del equipo**.
1. Presiona el botón **+ Agregar miembro**.
1. Busca y selecciona al usuario que deseas agregar al sitio y elige un rol para él.
1. Haz click en **Añadir**.

#### Modificar un rol
Para modificar el rol de un administrador, sigue estos pasos:
1. Haz click en el nombre del administrador.
1. En el modal que se abre, selecciona el nuevo rol.
1. Presiona **Actualizar** para confirmar el cambio.

Los roles disponibles son:

- **Viewer**: Este usuario puede ver entradas, ver diferencias entre versiones y dejar comentarios. También puede acceder a la vista de sincronización y ver los cambios pendientes de sincronizar. Este rol no tiene autorización para realizar ninguna acción que implique un cambio en la plataforma.
- **Developer**: Este usuario está a cargo del desarrollo estructural de los recursos. Puede crear, modificar y enviar a revisión páginas, widgets, menús y plantillas. Todas las acciones realizadas por un Developer deben pasar por un proceso de revisión antes de su publicación. Este rol no tiene permisos para publicar, eliminar o realizar un _rollback_ a versiones anteriores de los recursos, ni tampoco para modificar la configuración del sitio. Existe una variante de este rol llamada Developer CLI, que además de los permisos de un Developer, permite actualizar widgets desde aplicaciones externas, como el [modyo-cli](/es/platform/channels/widgets.html#modyo-cli).
- **Developer CLI**: Puede crear, modificar y enviar a revisión páginas, widgets, el menú y los templates. Además, puede empujar widgets desde aplicaciones externas.
- **Reviewer**: Este rol permite corregir, aprobar o desechar el trabajo realizado por los Developers. Puede crear, modificar, enviar a revisión y aprobar páginas, widgets, menús y plantillas. También puede publicar cuando se cumplen las condiciones de revisión. No puede editar la configuración del sitio.
- **Admin**: El Administrador del sitio posee los mismos privilegios que los roles anteriores y tiene la capacidad de configurar todo el sitio. Esto incluye la creación, modificación, envío a revisión y aprobación de páginas, widgets, menús y plantillas. Además, puede publicar sin requerir la validación de revisión en equipo.

#### Eliminar a un administrador
Para eliminar a un administrador del sitio, sigue estos pasos:
1. Marca la casilla junto al nombre del administrador.
2. Haz click en el botón **Borrar** al final de la lista, en la parte inferior izquierda de la pantalla.

### Redirecciones personalizadas

Modyo cuenta con un sistema de redirecciones personalizadas que te permitirá tomar una URL de tu sitio y automáticamente redirigir mediante un código 301 o 302 a otra sección del sitio.

En esta vista encuentras una tabla con todas las redirecciones que existen actualmente en el sitio. Puedes buscar por path o descripción.

Para crear una nueva redirección, haz click en el botón **Nuevo** en la esquina superior derecha de la vista. Completa los campos **_URL_ de Origen** y **_URL_ de destino** y código de redirección y luego guarda los cambios.

:::warning Atención
La tabla de redirecciones es la penúltima en precedencia, de tal forma que si existe una URL en el sitio que apunta a una [página](/es/platform/channels/pages.html) o una vista por defecto, verás esa vista en vez de ser redirigido mediante la tabla de redirecciones personalizadas.
:::

Además de crear redirecciones una por una, puedes importar un [archivo CSV](/assets/examples/custom-redirections.csv) con hasta 1000 redirecciones.

:::warning Atención
Las columnas requeridas para importar redirecciones son origen y destino.

Puedes seleccionar un código de respuesta 301 o 302 para todos los elementos sin necesidad de tener una columna para ellos.

Si estás importando una redirección con un origen que ya está registrado, no podrás iniciar el proceso de importación. Ajusta tu archivo CSV eliminando la fila con el origen existente o elimina el registro de redirecciones personalizadas del sitio en el que intentas importar el origen.
:::

La jerarquía de ubicaciones en los sitios de Modyo sigue este orden:

1. [Vistas por defecto (Home, search)](/es/platform/channels/templates.html)
1. [Páginas](/es/platform/channels/pages.html)
1. Redirecciones personalizadas
1. [Configuración de error 404 del sitio](/es/platform/channels/sites.html#privacidad)

:::warning Condiciones para una redirección
Para que una redirección sea exitosa, la ruta de origen no puede existir o tiene que estar despublicada. Si el origen es una página publicada con subpáginas, tienes que despublicar las subpáginas antes de despublicar la página principal.
:::

### Security headers

Habilita este módulo para tu sitio para configurar los encabezados de seguridad HTTP. Ten en cuenta que esta acción no se puede deshacer. Una vez habilitado, tendrás control total sobre los encabezados que deseas utilizar.

#### HTTP Strict Transport Security (HSTS)

Indica al navegador que solo puede acceder al sitio mediante HTTPS.
* **Duración**: Establece el tiempo que el navegador accede al sitio solamente mediante HTTPS.
* **Precarga**: Incluye la directiva de precarga. Para más información, consulta [HSTS Preload List Submission](https://hstspreload.org/).
* **Incluir subdominios**: Aplica la regla HSTS a todos los subdominios del sitio.

#### Referrer-Policy

El _header_ `Referer` contiene información de la página web anterior desde la cual está vinculando, con el _header_ `Referrer-Policy` puedes controlar cuánta información debe incluirse en el _header_ `Referer`.

* **no-referrer**: No envía información de _referrer_.
* **no-referrer-when-downgrade**: No envía información de _referrer_ a un destino menos seguro.
* **origin**: Envía solo el dominio de origen, elimina las rutas y _query string_.
* **origin-when-cross-origin**: Envía información de _referrer_ para _requests_ del mismo origen. Elimina las rutas y _query string_ para otros destinos.
* **same-origin**: Envía información de _referrer_ solo para _requests_ del mismo origen.
* **strict-origin**: Envía el dominio de origen solo para _requests_ del mismo nivel de seguridad y no envía información de _referrer_ a destinos menos seguros.
* **strict-origin-when-cross-origin**: Envía información de _referrer_ a _requests_ del mismo origen. Envía el origen solo si el nivel de seguridad es el mismo y no envía información de _referrer_ a destinos menos seguros.
* **unsafe-url**: Envía siempre la información de _referrer_.

#### X-Frame-Options

Indica si tu sitio puede ser incluido en un `frame`, `iframe`, `embed`, or `object`.
* **DENY**: El sitio no se puede mostrar en un _frame_.
* **SAMEORIGIN**: El sitio se puede mostrar en _frames_ del mismo dominio.

#### X-Content-Type-Options

Indica que se deben seguir los _MIME types_ anunciados en el _header_ `Content-Type` para evitar _MIME type sniffing_.

#### Content-Security-Policy (CSP)

Controla qué recursos puede cargar el navegador en el sitio para mitigar ataques de inyección de datos y _cross site scripting_. El valor predeterminado *permite cargar recursos desde cualquier lugar*, por lo que es importante diseñar una política de seguridad de contenido adecuada para tu sitio.

Especifica libremente tu política de seguridad de contenido en el área de texto. Para obtener una guía completa sobre cómo escribir tu política, consulta [Content Security Policy (CSP) de Mozilla Developer Network.](https://developer.mozilla.org/es/docs/Web/HTTP/CSP)

:::warning Atención
Un valor muy estricto puede interferir con algunas características como [Google tag manager](/es/platform/channels/sites.html#google-tag-manager), [PWA](/es/platform/channels/sites.html#pwa), [Widgets](/es/platform/channels/widgets.html) y [Asset Manager](/es/platform/content/asset-manager.html).
:::

Una política apta para producción debe asegurar que todos los recursos, como imágenes y hojas de estilo, se carguen desde fuentes confiables y requiere que todos los scripts sean seguros y confiables para la aplicación. Por ejemplo, una política estricta para el _template minimal_ se vería así:

```bash
default-src 'self'; img-src 'self' https://cloud.modyocdn.com; font-src 'self' https://cloud.modyocdn.com http://cdn.materialdesignicons.com; style-src 'self' http://cdn.materialdesignicons.com; script-src 'self'
```

La política debe incluir una directiva `default-src 'self'`, que sirve de _fallback_ para cualquier otro tipo de recurso. También debe incluir directivas `script-src` y `style-src` para evitar la evaluación de tags _inline_ `style` y `script`.

* **Nonce**: El servidor agregará un CSP nonce a las directivas `script-src` y `style-src` si están presentes.

Si tienes el nonce presente en tu política, puedes agregar a la lista permitida los _tags_ `script` y `style` en tus _templates_ usando la variable `csp_nonce`.

```liquid
<script nonce="{{csp_nonce}}">
  alert("todo va a estar bien");
</script>
```

Estas herramientas te pueden ayudar a diseñar una política de seguridad sólida:
* [Google CSP evaluator](https://csp-evaluator.withgoogle.com)
* [ReportURI](https://report-uri.com/home/analyse)
* [CSP validator](https://cspvalidator.org)

#### Permissions-Policy

Permite o niega el uso de funciones y APIs del navegador para el sitio; por ejemplo, puedes restringir las APIs sensibles a la privacidad como la cámara o el micrófono y la reproducción automática de videos.

Para obtener una lista completa de las funciones compatibles con los navegadores, consulta la [Feature Policy de MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy).

#### Cross Origin Embedder Policy (COEP)

Configura la inserción de recursos de origen cruzado en el documento. Por ejemplo, si tu documento tiene un encabezado COEP con un valor de require-corp o credentialless, solo puedes acceder a ciertas funciones, como objetos SharedArrayBuffer o Performance.now(), con temporizadores sin restricciones.

Para mas información, consulta la [Cross-Origin-Embedder-Policy de MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy).

#### Cross Origin Opener Policy (COOP)

Te permite garantizar que un documento de nivel superior no comparta un grupo de contexto de navegación con documentos de origen cruzado.

COOP aisla el procesamiento de tu documento, por lo que atacantes potenciales no podrán acceder a tu objeto global si lo abren en un popup, lo que previene un conjunto de ataques de origen cruzado.

Para mas información, revisa la [Cross-Origin-Opener-Policy de MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy).

#### Cross Origin Resource Policy

Transmite el deseo de bloquear las solicitudes de origen cruzado/sitio cruzado sin-cors al recurso especificado por parte del navegador.

Para mas información, consulta la [Cross-Origin-Resource-Policy de MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy).


### Variables del sitio

Modyo cuenta con [variables globales](/es/platform/core/key-concepts.html#variables-globales) que puedes utilizar en múltiples sitios. Sin embargo, también puedes crear variables específicas para un sitio en particular o sobreescribir el valor de una variable global existente, con un valor específico para el sitio en particular.

Usar variables te permite reutilizar código HTML, JS, CSS o texto a través de distintos sitios, widgets o plantillas. Si tienes código que se repite en varias partes de tu cuenta, puedes asignar ese valor a una variable para simplificar tus procesos y en caso de que edites el valor de la variable, el cambio se verá reflejado en todos los lugares donde esté en uso la variable.

:::tip Tip
En las variables globales puedes utilizar texto plano, HTML, JavaScript y CSS. Sin embargo, es importante tener en cuenta que no puedes utilizar código Liquid dentro de estas variables. Asimismo, es importante recordar que el contenido de las variables globales tiene un límite máximo de 65.535 caracteres.

Para obtener el valor de la variable en cualquier lugar que acepte Liquid markup, usa:<span v-pre>`{{vars.Nombre}}`</span>
:::

#### Crear una variable en sitios

Para crear una variable en sitios, sigue estos pasos:

1. Desde el menú lateral principal, haz click en **Channels**.
1. Selecciona tu **Sitio**.
1. En **Configuración del sitio**, haz click en **Variables del Sitio**. Aquí puedes ver el listado de todas las variables globales y las variables del sitio, su información general y un botón para copiar su código en Liquid markup.
1. Haz click en **+ Nueva Variable**.
1. Completa los campos **Nombre** y **Valor** de la variable.
1. Haz click en **Guardar**.

:::warning Atención
Al utilizar variables, Modyo sigue una jerarquía de preferencia donde las variables definidas en el nivel más bajo tienen prioridad. Las variables definidas en el widget tendrán precedencia sobre las variables definidas en el sitio, y a su vez, las variables definidas en el sitio tendrán precedencia sobre las variables definidas a nivel de cuenta.

Por esto, es importante tener precaución al definir variables en widgets o en el sitio, especialmente si utilizas el mismo nombre que las variables definidas a nivel de cuenta.

:::
