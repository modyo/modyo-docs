---
search: true
sidebarDepth: 2
---

# Sitios

Un sitio es donde se despliega el contenido creado en [Content](/es/platform/content/) y [Channels](/platform/channels/) para crear tu canal digital personalizado. En un sitio se lleva a cabo todo el desarrollo, diseño y flujo de navegación.

Un sitio puede estar en uno de estos tres estados:

- **Habilitado**: Estado por defecto de los sitios recién creados y aquellos que están habilitados para uso.
- **Cambios pendientes**: Este estado aparece cuando hay modificaciones pendientes en el sitio. Un administrador puede hacer click en **Publicar** para acceder a la sección de **Revisar y Publicar**, para verificar los cambios y publicar el sitio.
- **Deshabilitado**: Cuando un sitio está en estado no es posible acceder a él.

## Crear un Sitio

Para crear un nuevo sitio, sigue estos pasos:

1. En el menú lateral, haz click en **Channels**.
1. Haz click en **+ Nuevo Sitio**.
1. Escribe el nombre y el host (ruta principal del sitio).
1. Si es necesario, selecciona a qué reino pertenece el sitio.
1. Haz click en **Crear**.

Una vez creado el sitio, este se habilitará automáticamente y el sistema te llevará a la página **Resumen**.

:::warning Atención
En el índice de sitios, solo verás los sitios en los cuales tienes algún rol y eres parte del equipo de trabajo.
:::

## Revisión y Publicación Conjunta

En la pantalla de revisión y publicación conjunta puedes ver todos los cambios pendientes por publicar en tu sitio. Para visualizar los cambios, haz click en el botón **Ver**.

### Publicar en conjunto

Para hacer una publicación en conjunto en tu sitio, sigue estos pasos:

1. En el menú principal de Modyo Platform, expande **Channels** y haz click en **Sitios**.
1. Haz click en tu sitio.
1. En la pantalla de Resumen, haz click en **Publicar**.
1. Aquí podrás ver todos los cambios pendientes. Selecciona lo que quieres publicar y haz click en **Publicar**.

:::tip Tip
Si haces click en **Publicar** en un artículo en particular (e.g. publicar una página), se abrirá la ventana de Revisar y Publicar con este artículo seleccionado para ver los cambios pendientes.
:::

## Buscador

Al crear un sitio con Modyo, tus usuarios pueden realizar búsquedas en tus sitios y en todo su contenido mediante la función de búsqueda. Esto puede hacerse utilizando la URL `/search` o accediendo a la página de búsqueda dedicada.

### Habilitar Búsqueda

Para habilitar o deshabilitar la funcionalidad de búsqueda en un sitio sigue estos pasos:

1. En el menú lateral, haz click en **Configuración del sitio**.
1. Haz click en **General**.
1. En la sección **Privacidad** deshabilita la casilla **Habilitar búsqueda**.
1. Haz click en **Guardar**.


### Plantilla de búsqueda

Puedes controlar la apariencia y funcionalidades de búsqueda en tu sitio utilizando la [plantilla](/es/platform/channels/sites.html#plantilla-de-busqueda/) _search_.

Esta plantilla está disponible de forma predeterminada en la sección de Plantillas, en la categoría "Vistas/Search/Show". Contiene todo el código Liquid que necesitas para llevar a cabo consultas en tu sitio.

Puedes acceder a ella mediante la URL de tu sitio y anexando _search_ o _search.json_. Por ejemplo:
 - `test.modyo.com/miSitio/search`
 - `test.modyo.com/miSitio/search.json`

Por defecto, al realizar una consulta, los registros se muestran en forma de lista con su título, descripción y un enlace hacia su dirección. Puedes modificar la plantilla y ampliar sus funcionalidades para adaptarla a tus necesidades específicas.

### Search.json

Puedes también usar search.json para integrar el buscador. Esta API te permite integrar el buscador de manera más personalizada.

Para acceder a la API agrega "search.json" a la URL de tu sitio junto con tu consulta. Por ejemplo: test.modyo.com/miSitio/search.json?query=miConsulta

Puedes personalizar tus consultas de la siguiente manera:

|  Parámetro       |       Descripción    |
|------------------|----------------------|
| **query** | Con el string **query** puedes realizar consultas a la API de búsqueda. Este buscador lleva a cabo consultas en todas las páginas publicadas de tu sitio y en todas las entradas públicas de los espacios vinculados al sitio. |
| **per_page** | Este parámetro de paginación te permite dividir el número total de registros en el número de páginas que selecciones. |
| **page** | Este parámetro te permite seleccionar la página específica que deseas consultar en caso de que existan múltiples páginas de registros para la consulta. |
| **multi=true** | Este parámetro permite realizar búsquedas en todos los sitios de la cuenta que tienen habilitada la función de búsqueda. |


## Configuración de un Sitio

La configuración del sitio te permite abrir las opciones de la plataforma, de modo que los visitantes, clientes, desarrolladores y administradores del sitio puedan verla de manera diferente. Además, puedes modificar opciones para mejorar el SEO y la presentación de algunos datos a los que el público tiene acceso al visitar las páginas.

### General

En esta sección puedes configurar los siguientes datos de tu sitio:

- **Nombre del sitio**: El nombre de tu sitio, este campo se usa como título por defecto para el SEO de tu sitio.
- **Descripción**: Una breve descripción de tu sitio.
- **Logo del sitio**: Imagen que se muestra en la parte superior izquierda como logo del sitio.
- **Idioma**: El idioma en el que está disponible tu sitio. Las opciones son: español, inglés y portugués.
- **[Revisión en Equipo](/es/platform/core/key-concepts.html)**
- **Zona Horaria**: La zona horaria en que se muestran los campos de fecha y hora dentro del sitio. Esta configuración afecta a todas las secciones del sitio, incluyendo Pages, Navegación y Plantillas, así como las llamadas de Liquid a datos del sitio.

:::warning Atención
La hora en el contenido es manejada en la Configuración de la Cuenta.
:::

- **ID de Google Tag Manager**: Te permite añadir un identificador de Google Tag Manager para insertar fácilmente los scripts para poder hacer uso de la herramienta de registro de eventos de Google.
- **Favicon**: Imagen que aparece al costado de la barra de dirección.
- **Icono de Apple**: Imagen que se ve en los dispositivos móviles al usar el sitio como aplicación.
- **Borrar**: Eliminar definitivamente un sitio y todo sus elementos.

:::danger Peligro
Borrar es irreversible, por lo que debes estar completamente seguro al ejecutar esta acción.

Al presionar el botón de eliminado, el sistema te pedirá que ingreses el nombre textual del sitio que deseas eliminar para confirmar la acción. Una vez confirmada, no podrás volver a acceder al sitio ni a sus elementos.
:::

#### Google Tag Manager

Por defecto, los nuevos temas de Modyo incluyen los snippets necesarios para inyectar automáticamente los scripts de Google Tag Manager tanto en el tag `<head>` como en el tag `<body>` de los sitios. Puedes encontrar estos snippets en la sección [Plantillas](/es/platform/channels/templates.html), categoría _Snippets/General_ y se incrustan tanto en el snippet _head_ como en las vistas _home_ y _base_.

Si no cuentas con estos snippets, puedes crear un snippet personalizado para luego incrustar Google Tag Manager en tu sitio.

1. Crea un snippet personalizado con el siguiente código y luego incrusta el snippet en el head del sitio usando `{% snippet "gtm-head" %}`, reemplazando "gtm-head" por el nombre que le diste al snippet.

**Google Tag Manager para el _head_**
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

2. Crea un snippet personalizado con el siguiente código y luego insértalo dentro de los tags body de las vistas home y base usando `{% snippet "gtm-body" %}`, reemplazando "gtm-body" por el nombre que le diste al snippet.

**Google Tag Manager para el _body_**
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

Con esta configuración completada, cuando haya un valor asociado al campo **ID de Google Tag Manager** en la sección Configuración General del sitio, los scripts se inyectarán automáticamente y podrás comenzar a crear eventos en Google Tag Manager para registrar las acciones de tus usuarios.

#### Privacidad

Esta sección te permite configurar las restricciones de privacidad de tu sitio.

- **Público**: Todos los visitantes pueden ver el sitio sin necesidad de iniciar sesión. El contenido del sitio es accesible para cualquier usuario.
- **Privado**: Solo los usuarios con una sesión iniciada de Modyo pueden ver el sitio.
- **Mostrar home a visitas públicas**: La página de inicio del sitio se muestra a todos los visitantes, incluso aquellos que no hayan iniciado sesión. Sin embargo, al navegar a cualquier otra página del sitio, se les solicitará a los usuarios que se registren o inicien sesión.
- **Redireccionar a home cuando una URL no se encuentra**:  Por defecto, el sitio muestra una respuesta 404 (página no encontrada) cuando se accede a una URL que no existe. Sin embargo, si marcas esta opción, en lugar de recibir un 404, el usuario será redirigido a la página de inicio del sitio.
- **Habilitar búsqueda**: Si marcas esta opción, habilitas la función de búsqueda en el sitio.

:::tip Tip
Si habilitas la búsqueda en tu sitio y usas el parámetro`multi=true` desde otros sitios, podrás también buscar en tu sitio actual.
:::


#### Zona de Peligro

Estas opciones conllevan riesgo para la experiencia del sitio y sus usuarios. Procede con cuidado.

- Cambiar reino: Este campo despliega el reino del sitio. Al cambiar de reino se pierde toda la configuración de privacidad en tus sitios, páginas y navegación.
- Estado del Sitio: Cambia el estado del sitio entre tres diferentes opciones.
	* Habilitado: Permite que el sitio sea editable y visible al público. Este es el estado por defecto de un sitio.
	* Editable: Permite que un sitio sea modificado, pero no es visible al público. Los usuarios deben iniciar sesión en Modyo Platform para acceder al sitio. Robots.txt, PWAs y el manifiesto están deshabilitados en este estado.
	* Deshabilitado: Prohíbe tanto la edición como la visibilidad de un sitio. En este estado, el sitio no es accesible ni visible para los usuarios.
- Eliminar Sitio: Esta acción inicia el proceso de eliminación del sitio de manera asincrónica. Una vez que se inicia la eliminación, el sitio ya no es accesible. Todos los elementos que contiene el sitio, como páginas y widgets, también serán eliminados.


### SEO

El SEO (Search Engine Optimization) es fundamental para aparecer en los distintos motores de búsqueda. Los usuarios dependen de una buena configuración de SEO para llegar al sitio.

Las opciones a configurar son:

- **Tagline**: Descripción que aparece en los motores de búsqueda, debajo del nombre del sitio.
- **Actualizar automáticamente el archivo sitemap.xml para mí**: Esta opción permite a Modyo crear y mantener automáticamente el archivo sitemap.xml. Si deseas mantener un mapa de sitio personalizado, deshabilita esta opción.
- **Sitemap**: Este archivo XML permite a los motores de búsqueda indexar el contenido del sitio.
- **Actualizar automáticamente el archivo robots.xml para mí**: Al habilitar esta opción, Modyo se encargará de crear y mantener el archivo robots.txt automáticamente. Deshabilita esta opción para proporcionar instrucciones personalizadas a los rastreadores de sitios.
- **Robots.txt**: Este archivo forma parte del Protocolo de Exclusión de Robots (REP), un grupo de normas web que regulan la forma en que los robots rastrean la web, acceden e indexan el contenido y lo sirven a los usuarios. Este archivo determina si ciertos agentes de usuario (software de rastreo web) pueden o no rastrear partes de un sitio web. Especifica las instrucciones de rastreo "permitiendo" o "prohibiendo" el comportamiento de ciertos o todos los agentes de usuario.

:::tip Tip
Los archivos robots.txt y sitemap.xml solo son visibles en el sitio si se utilizan dominios personalizados. De lo contrario, robots.txt y sitemap.xml se encuentran solo a nivel de plataforma, tienen sus valores por defecto, y no se pueden personalizar.
:::

- **Meta tags personalizados**: Te permite configurar meta tags para todas las páginas y sus valores por defecto.
- **Replicar meta tag en páginas:** Propaga este meta tag y su valor en todas las páginas del sitio. Es necesario guardar los cambios y publicar todas las páginas modificadas para que los nuevos meta tags surtan efecto.

:::warning Atención
En la sección de configuración del sitio, solo los usuarios con rol de administrador del sitio pueden añadir meta tags. Dentro de un sitio, el rol developers podrá añadir y eliminar meta tags página por página.
:::

#### SEO en-página vs. fuera-de-página (On-Page vs. Off-Page)

También conocidos como SEO en-sitio y fuera-de-sitio, estos términos se refieren a las acciones que puedes llevar a cabo dentro y fuera de una página web para mejorar la visibilidad de tu sitio en los motores de búsqueda. Para lograr los mejores resultados, recomendamos utilizar ambas estrategias de manera conjunta, lo que contribuirá a un posicionamiento más sólido en los resultados de búsqueda.

##### SEO en-página

Aquí hay una lista de acciones que puedes tomar para mejorar el SEO en-página:

- Utilizar palabras clave en la sección de SEO de la plataforma y en tus páginas.
- Incluir palabras clave en la URL de la página.
- Agregar enlaces a información relevante o a otras partes de tu sitio.


##### SEO fuera-de-página

Para mejorar el SEO fuera-de-página, puedes:

- Promocionar el contenido en redes sociales y otros canales de distribución.
- Fomentar alianzas y colaboraciones con medios de autoridad en el tema.


### PWA

Modyo permite la implementación de Progressive Web Apps (PWA) dentro de los canales digitales que se estén desarrollando. Para ello, ofrece dos opciones para implementarlas.

#### Manifiesto

El manifiesto sirve para indicar cómo quieres que un navegador muestre tu canal digital. Lo puedes activar en Modyo marcando la casilla. Al activarlo, se crea esta ruta:

```
https://[domain]/[site-name]/manifest.json
```

El manifiesto se debe implementar en cada una de las páginas en que se desarrolle la PWA, a través de [Plantillas](/es/platform/channels/templates.html), en el snippet ``head``.

Puedes crear y modificar el manifiesto en el siguiente campo, lo que te permite agregar cambios sin tener que salir de la vista.

:::warning Atención
Si realizas cambios en el manifiesto, asegúrate de guardarlos utilizando el botón **Guardar** que se encuentra en la parte superior de la pantalla para evitar perder los cambios realizados.
:::

:::warning Atención
Si no personalizas el manifiesto, pero agregas la ruta en Plantillas, este quedará en blanco y no hará ninguna acción.
:::

#### Service Worker

El Service Worker permite que el canal digital realice distintas acciones o mantenga ciertos datos conectados dentro del caché para ofrecer una estructura en caso de tener una mala conexión. Puedes habilitar el Service Worker a través de la casilla correspondiente. Al activarlo, se crea la siguiente ruta:

```
https://[domain]/[site-name]/serviceworker.js
```

Puedes modificar y programar el Service Worker en el siguiente campo, adaptándolo a tus rutas y utilizando las variables disponibles.

:::warning Atención
Si desactivas el Service Worker, la página seguirá funcionando, solamente en sus funciones básicas y no con los beneficios que ofrece esta opción.
:::

:::warning Atención
Si no personalizas o no guardas el código, el sitio no contará con las funciones que estás diseñando.
:::

### Dominios

La sección Dominios te permite conocer la ubicación pública de tu sitio, por lo que es esencial que cada uno de los miembros de la plataforma estén informados de los cambios que se realicen aquí.

Las variables que puedes cambiar en esta sección son:

- **Host**: Donde se encuentra el sitio dentro del servidor.
- **Activar dominios personalizados**: Al activar esta opción, puedes tener sitios con URLs personalizadas o _custom hosts_ dentro del dominio.
- **Dominio primario**: Dirección del sitio.
- **Dominio alternativo**: Dirección secundaria para redireccionar en caso de que falle la primera.

:::warning Atención
Modyo cuenta con dominios reservados que no se pueden usar como dominios personalizados de los sitios:
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
Modyo tiene hosts reservados para los sitios, de tal forma que no puedes usarlos como host de tus sitios:
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

Agregar stages a tu sitio te permite implementar un enfoque de integración y despliegue continuo (CI/CD) para añadir nuevas funcionalidades sin afectar lo que ya está publicado.

Las ventajas principales de tener distintos stages en tus sitios son:

- Desarrollo focalizado: Puedes desarrollar exclusivamente para el stage actual sin modificar lo que ya existe en el sitio.
- Personalización flexible: Crea y utiliza variables, widgets y plantillas locales para personalizar la experiencia o visualizar los cambios.
- Integración sencilla: Al finalizar los cambios dentro de un stage, puedes integrarlos a otro stage.

:::warning Atención
- Cada sitio tiene un máximo de cuatro stages.
- Los cambios que realices en un stage solo se reflejan en ese stage.
- Esta funcionalidad solo se puede usar en sitios.
- Al utilizar stages, las PWAs y redirecciones personalizadas serán deshabilitadas. Solo puedes hacer uso de PWAs y redirecciones personalizadas en el stage `main`.
- Los stages tienen una sección de Miembros del Equipos independientemente del stage `main`. Por lo que tendrás que agregar a los miembros para habilitar la funcionalidad de Revisión de equipo. Así, puedes tener los mismos miembros con diferentes roles y permisos para cada stage.
:::

#### Agregar un nuevo stage

Para agregar un nuevo stage a tu sitio, sigue estos pasos:

1. Desde el menú lateral, haz click en **Channels**.
1. Haz click en **Sitios**.
1. Selecciona tu sitio.
1. Expande la sección **Configuración del sitio**.
1. Haz click en **Stages**.
1. Haz click en **+ Nuevo Stage**.
1. Selecciona la base del stage y escribe su nombre.
1. Haz click en **Crear**.

:::tip Tip
Cuando tienes más de un stage en tu sitio, la página de **Overview** muestra los detalles del stage actual y un botón para sincronizar cambios entre stages.

En la barra lateral, puedes ver en qué stage te encuentras actualmente. Al hacer click en el menú desplegable puedes ver una lista de todos los stages de tu sitio.
:::

#### Sincronizar un stage

Una vez que hayas terminado las pruebas en tu stage y quieras sincronizar, asegúrate de no tener cambios pendientes antes de proceder.

En la pantalla de sincronizaciones puedes ver todos los cambios que se realizarán entre los dos stages seleccionados.

Para sincronizar un stage, sigue estos pasos:

1. En el menú lateral, haz click en **Channels**.
1. Haz click en **Sitios**.
1. Selecciona tu sitio.
1. En la vista resumen haz click en **Sincronizar**.
1. En la vista de sincronizaciones puedes ver todos los elementos con diferencias entre los stages seleccionados. Haz click en _Ver_ para obtener más detalles sobre los cambios.
1. Selecciona los elementos que quieres sincronizar.
1. Haz click en **Sincronizar**.

:::tip Tip
Al hacer click en **Sincronizar** puedes seleccionar desde cuál stage vas a traer los cambios. Si quieres sincronizar cambios a `main`, debes estar en `main` al hacer click en **Sincronizar**.
:::

:::warning Atención
La plataforma no permite sincronizar cambios que todavía no están publicados. Asegúrate de publicar los cambios antes de realizar la sincronización.
:::

#### Eliminar un stage

Para eliminar un stage, sigue estos pasos:

1. En el menú lateral, haz click en **Channels**.
1. Haz click en **Sitios**.
1. Selecciona tu sitio.
1. Abre el menú desplegable junto al nombre de tu sitio y selecciona el stage que quieres eliminar.
1. Haz click en **Configuración de Sitio**.
1. Haz click en **General**.
1. En la sección zona peligrosa haz click en **Eliminar Stage**.

:::warning Advertencia
Al hacer click en Eliminar stage, recibirás una alerta de confirmación. Una vez que confirmes la eliminación, Modyo inicia un proceso asíncrono y no podrás acceder nuevamente al stage.

Ten en cuenta que al eliminar un stage, se borran todos los elementos asociados a ese stage en el sitio, como páginas y widgets. Además, se elimina la configuración de equipo, roles y otros aspectos relevantes relacionados con el stage.
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

```
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
