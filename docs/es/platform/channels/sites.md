---
search: true
sidebarDepth: 3
---

# Sitios

<img src="/assets/img/channels/sites/sites-index.jpg" style="border: 1px solid #EEE;" />

Un sitio es donde se despliega el contenido creado en [Content](/es/platform/content/) y [Widgets](/platform/channels/widgets) para crear tu canal digital personalizado. Incluyen la operación de todo el desarrollo, diseño, y flujo de navegación.

Existen tres estados para cada sitio:

- **Habilitado**: Estado por defecto en el que quedan los sitios recién creados y los que están habilitados para su uso.
- **Cambios pendientes**: Aparece cuando hay algo dentro del sitio con cambios pendientes. Un administrador del sitio puede hacer click en **Publicar** te llevará a **Revisar y Publicar** en donde puedes verificar todos los cambios y publicar el sitio.
- **Deshabilitado**: Sitios a los que no se puede acceder.

## Crear un Sitio

Para crear un nuevo sitio, sigue estos pasos:

1. Desde el menú lateral, haz click en **Channels**.
1. Haz click en **+ Nuevo Sitio**.
1. Escribe el nombre y el host (ruta principal del sitio).
1. De ser necesario, selecciona a que reino pertenece este sitio.
1. Haz click en **Crear**.

Al terminar de crear tu sitio, automáticamente será habilitado y serás llevado a la página **Resumen**.

:::warning Atención
En el índice de sitios, solo verás los sitios en los cuales eres parte del equipo de trabajo con algún rol.
:::

## Configuración de un Sitio

La configuración del sitio te permite abrir las opciones de la plataforma, para que sea vista de distinta manera por los visitantes, clientes, desarrolladores, y administradores del sitio. Además, puedes modificar opciones que permitan mejorar el SEO y la visión de algunos de los datos a los que tiene acceso el público al llegar a las páginas.

<img src="/assets/img/channels/sites/config-site.jpg" width="250" />

### General

Dentro de esta sección puedes configurar los siguientes datos:

- **Nombre del sitio**: El nombre de tu sitio, este campo se usa como título por defecto para el SEO de tu sitio.
- **Descripción**: Una breve descripción de tu sitio que será usada como valor por defecto para el SEO del sitio.
- **Logo del sitio**: Imagen que se usara en la parte superior izquierda como logo del sitio.
- **Idioma**: El idioma en el que estará tu sitio. Existen tres valores para el idioma: Español, Inglés, y Portugués.
- **[Revisión en Equipo](/es/platform/core/key-concepts.html)**
- **Zona Horaria**: La zona horaria en que se mostrarán los campos fecha y hora dentro del sitio. Esta es el horario que determina la hora en lo que engloba un sitio (Pages, Navigation, Plantillas), incluyendo llamadas de Liquid a datos del sitio. Para el horario en Content, es manejado en la Configuración de la Cuenta.
- **ID de Google Tag Manager**: Te permite añadir un identificador de Google Tag Manager para insertar fácilmente los scripts para poder hacer uso de la herramienta de registro de eventos de google.
- **Favicon**: Imagen que aparece al costado de la barra de dirección.
- **Icono de Apple**: Imagen que aparece en dispositivos móviles al usar el sitio como aplicación.
- **Borrar**: Esta opción te permite eliminar definitivamente un sitio y todo sus elementos.

:::danger Peligro
Borrar es irreversible, por lo que debes estar completamente seguro al ejecutar esta acción. Al presionar el botón de eliminado, el sistema te preguntará por el nombre del sitio. Deberás ingresar el nombre textual del sitio que estés eliminando para poder ejecutar la acción. Una vez confirmada la acción, no podrás volver a acceder al sitio ni a sus elementos.
:::

#### Google Tag Manager

Por defecto, los nuevos temas de Modyo incluyen los snippets necesarios para inyectar de manera automática los scripts de Google Tag Manager tanto en el _head_ como en el _body_ de los sitios. Estos snippets se encuentran en la sección _snippets>general_ del [Template builder](/es/platform/channels/templates.html) y se incrustan tanto en el snippet _head_ como en las vistas _home_ y _base_.


Si tienes el último tema disponible y aún así no cuentas con estos snippets, puedes dirigirte a la sección "Temas" en la parte superior derecha y hacer click en la opción "Cargar templates" de las opciones adicionales arriba a la derecha. Esta opción cargará todos los templates que han sido añadidos al tema, pero no están presentes en la versión que tienes instalada.

En caso de tener instalado un tema antiguo y no contar con estos snippets, acá podrás acceder al código para poder crearlos como snippets personalizados y poder incrustar fácilmente Google Tag Manager a tu sitio.

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

Con esto listo, cuando haya un valor asociado al campo **Identificador de Google Tag Manager** de la configuración General del sitio, los scripts se inyectarán de forma automática y podrás comenzar a crear eventos en Google Tag Manager para registrar acciones de tus usuarios.

#### Privacidad

<img src="/assets/img/channels/sites/restrictions-site.jpg" width="250" style="margin-top: 40px; border: 1px solid #EEE;" >

Restricciones permite configurar la privacidad del sitio.

- Si el sitio es público, entonces todos pueden ver el sitio.
- Si el sitio es privado, solo usuarios con una sesión de Modyo podrán ver el sitio.
- Si el sitio es privado, pero el home es público, el home se muestra a todos quienes lleguen al Home, pero al navegar a cualquier otra página del sitio, se les solicita que se registren o que inicien sesión.
- Si se llegas a una URL que no exista dentro del sitio, por defecto te encontrarás con una respuesta 404, pero si marcas esta opción, en vez de recibir un 404, serás redirigido al Home del sitio.


### SEO

<img src="/assets/img/channels/sites/seo-site.jpg" width="400" style="margin-top: 40px; border: 1px solid #EEE;" >

El SEO (Search Engine Optimization) es la llave para aparecer en los distintos motores de búsqueda. Los usuarios dependen de una buena configuración de SEO para llegar al sitio.

Las opciones a configurar son:

- **Tagline**: Descripción que aparece en los motores de búsqueda, bajo el nombre del sitio
- **Palabras claves**: Palabras que buscan los usuarios y que quieres que el sitio aparezca. Este campo acepta un máximo de 255 caracteres.
- **Actualizar automáticamente el archivo sitemap.xml para mí**: Permite a Modyo crear y actualizar el archivo sitemap.xml. Deshabilita esta opción para mantener un mapa de sitio personalizado.
- **Sitemap**: Este archivo XML permite a los motores de búsqueda indexar el contenido del sitio.
- **Actualizar automáticamente el archivo robots.xml para mí**: Permite a Modyo crear y actualizar el archivo robots.txt. Deshabilita esta opción para proporcionar instrucciones personalizadas a los rastreadores de sitios.
- **Robots.txt**: Este archivo forma parte del Protocolo de Exclusión de Robots (REP), un grupo de normas web que regulan la forma en que los robots rastrean la web, acceden, e indexan el contenido y lo sirven a los usuarios. En la práctica, este archivo determina si ciertos agentes de usuario (software de rastreo web) pueden o no rastrear partes de un sitio web. Estas instrucciones de rastreo se especifican "permitiendo" o "prohibiendo" el comportamiento de ciertos (o todos) agentes de usuario.

:::tip Tip
Los archivos robots.txt y sitemap.xml solo son visibles en el sitio si se utilizan dominios personalizados. De lo contrario, robots.txt y sitemap.xml se encuentran solo a nivel de plataforma, tienen sus valores por defecto, y no se pueden personalizar.
:::

- **Meta tags personalizados**: Te permite configurar meta tags para todas las páginas y sus valores por defecto.
- **Replicar meta tag en páginas:** Propaga este meta tag y su valor en todas las páginas del sitio. Al guardar este cambio, es necesario publicar todas las páginas modificadas para que los nuevos meta tags tengan efecto.

:::warning Atención
En configuración del sitio, sólo usuarios con rol de administrador del sitio podrán añadir meta tags. Dentro de un sitio, el rol developers podrá añadir y eliminar meta tags página por página.
:::

#### SEO En-página vs. Fuera-de-página (On-page vs. Off-page)

También conocido por SEO En-sitio y Fuera-de-sitio, se refieren a las acciones que se pueden tomar dentro o fuera de una página para aumentar la visibilidad de tu sitio para los motores de búsqueda. Para los mejores resultados, recomendamos hacer uso de ambas estrategias para obtener un mejor posicionamiento en los buscadores.

##### SEO en-página

Esta es una pequeña lista de las acciones que puedes tomar para mejorar el SEO en-página:

- Hacer uso de palabras clave en la sección de SEO de la plataforma y en tus páginas
- Incluir palabras clave como parte de la URL
- Agregar vínculos a información relevante o a otras partes de tu sitio

##### SEO fuera-de-página

Esta es una pequeña lista de las acciones que puedes tomar para mejorar el SEO fuera-de-página:

- Promocionar el contenido por redes sociales y canales de distribución
- Fomentar alianzas y cooperación con medios de autoridad en el tema

### PWA

Modyo permite la implementación de Progressive Web Apps (PWA) dentro de los canales digitales que se estén armando. Para ello, otorga dos opciones para implementarlos fácilmente.

<img src="/assets/img/channels/sites/pwa-site.jpg" width="600" style="margin-top: 40px; border: 1px solid #EEE;" >

#### **Manifiesto**

El manifiesto sirve para indicar cómo quieres que un navegador muestre tu canal digital. En la plataforma, es posible activarlo a través de este checkbox. Con ello, se creará la siguiente ruta:

```
https://[domain]/[site-name]/manifest.json
```

El manifiesto se debe implementar en cada una de las páginas en que se desarrolle el PWA, a través del [Template Builder](/es/platform/channels/templates.html), en el snippet ``head``.

Se puede crear y modificar el manifiesto en el siguiente campo, lo que te permite agregar cada uno de los cambios sin tener que salir de la vista.

:::warning Atención
Si cambias el manifiesto, recuerda guardarlo con el botón **Guardar** que se encuentra en la parte superior de la pantalla para no perder los cambios.
:::

:::warning Atención
Si no personalizas el manifiesto pero agregas la ruta en el Template Builder, este quedará en blanco y no hará ninguna acción.
:::

#### **Service Worker**

El Service Worker permite que el canal digital pueda realizar distintas acciones o mantenga ciertos datos conectados dentro del caché para ver una estructura en caso de tener una mala conexión. La plataforma otorga la posibilidad de que este se pueda habilitar a través del siguiente checkbox. Así, se creará la siguiente ruta:


```
https://[domain]/[site-name]/serviceworker.js
```

Se puede modificar y programar el Service Worker en el siguiente campo, adaptándolo a tus rutas y con las variables disponibles de la siguiente manera.

:::warning Atención
Si se desactiva el Service Worker, la página seguirá andando sólo en sus funciones básicas y no con los beneficios que tiene esta opción.
:::

:::warning Atención
Si el código no se personaliza o no se guarda, el sitio no contará con las funciones que estás diseñando.
:::

### Dominios

<img src="/assets/img/channels/sites/domains-site.jpg" width="500" style="margin-top: 40px; border: 1px solid #EEE;" >

La sección Dominios te permite saber dónde está públicamente ubicado el sitio, por lo que es esencial que cada uno de los miembros de la plataforma sean informados de los cambios que se realicen aquí.

Las variables que puedes cambiar aquí son:

- **Host**: Donde se encuentra el sitio dentro del servidor.
- **Activar dominios personalizados**: Si es que quieres que dentro del dominio, existan sitios con una URL personalizada o "custom host.
- **Habilitar SSL en el sitio**: Es necesario tener un certificado dentro del servidor para habilitarlo.
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
Modyo cuenta con hosts reservados para los sitios, de tal forma que no podrás usarlos como host de tus sitios:
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

Agregar stages en tu sitio te permite trabajar en nuevas funcionalidades para tu sitio sin modificar lo que ya está publicado.

Las ventajas principales de tener distintos stages en tus sitios es que te permite desarrollar unicamente para el stage actual, sin modificar lo que ya existe en el sitio. Estos stages pueden crear y usar variables, widgets, y plantillas locales para personalizar la experiencia o visualizar los cambios. Al finalizar los cambios dentro de un stage, podrán sincronizarse desde el stage `main`.

:::warning Atención
Al utilizar stages, los PWAs y redirecciones personalizadas serán deshabilitadas. Solo pueden hacer uso de estas en el stage `main`.
:::

#### Agregar un nuevo stage

<img src="/assets/img/channels/sites/create-stage.jpg" width="300" />

Para agregar un nuevo stage a tu sitio, sigue estos pasos:

1. Desde el menú lateral, haz click en **Channels**, luego haz click en tu **Sitio**.
1. Expande **Configuración del sitio**, haz click en **Stages**.
1. Haz click en **+ Nuevo Stage**
1. Selecciona cual será la base del stage y escribe el nombre.
1. Haz click en **Crear**.


:::tip Tip
Al tener más de un stage en tu sitio, la página de **Overview** mostrará los detalles del stage actual y un botón para sincronizar cambios entre stages.

En la barra lateral podrás ver en que stage estas actualmente y al hacer click en el dropdown, desplegara un listado de todos los stages de tu sitio.
:::

#### Sincronizar un stage

Una vez que hayas terminado tus pruebas en tu stage, asegúrate de sincronizarlos a `main`. En la pantalla de sincronizaciones, podrás ver todos los cambios que se realizaran entre los dos stages seleccionados. Al hacer click en _Ver_

<img src="/assets/img/channels/sites/sync-stage.jpg"/>

Para sincronizar un stage, sigue estos pasos:

1. Desde el menú lateral, haz click en **Channels**, luego haz click en tu **Sitio**.
1. En **Overview**, en el apartado de **Sincronización**, selecciona el stage que quieres sincronizar.
1. En la ventana que aparece, verás todos los elementos con diferencias entre los stages seleccionados. Haz click en _Ver_ para ver más detalle en que cambió.
1. Selecciona los elementos que quieres sincronizar.
1. Haz click en **Sincronizar**.

:::tip Tip
Al hacer click en sincronizar, podrás seleccionar que cambios tomar de un stage. Es decir, si quieres sincronizar cambios a `main`, debes estar en `main` al hacer click en sincronizar.
:::

:::warning Atención
Recibirás una alerta si intentas sincronizar cambios que todavía no están publicados.
:::


### Revisión en equipo

Puedes revisar y publicar múltiples elementos de un sitio en una sola vista. Para revisar las diferencias de un elemento, selecciónalo del listado izquierdo y las diferencias entre la versión editable y publicada aparecerán en la sección derecha de la vista.

Si quieres publicar múltiples elementos en un solo paso, debes presionar el botón "Publicar" desde las páginas, navegación, widgets, o templates y debes marcar en el listado todos los elementos que quieras publicar y luego presionar el botón para publicar nuevamente.

:::warning Atención
En el listado aparecerán todos los elementos que tienen cambios pendientes por publicar, por lo que si algún elemento no aparece en el listado, es porque aún no tenga cambios por publicar.

Si tienes la revisión en equipo habilitada, en el listado solo aparecerán los elementos que ya están aprobados.

En el caso que necesites publicar rápidamente un elemento, los usuarios administradores pueden saltarse el proceso de aprobación mediante la opción "Forzar publicación" permitiendo que el elemento pase directamente a la vista de publicación.
:::

### Miembros del Equipo

<img src="/assets/img/channels/sites/members-site.jpg" width="500" style="margin-top: 40px; border: 1px solid #EEE;" >

Para ordenar el trabajo, Modyo permite seleccionar los miembros del equipo que trabajarán en cada sitio y así tendrán acceso a la escritura, revisión y/o publicación.

Para ello, el administrador que creó el sitio puede asignar manualmente a los usuarios y los roles predeterminados que habilitan cada una de las funciones.

#### Agregar un nuevo miembro
Para agregar un nuevo miembro para tu sitio, sigue estos pasos:

1. Dentro del menú principal de Modyo Platform, expande Channels y haz click en tu sitio.
1. Expande **Configuración de Sitio** y haz click en **Miembros del Equipo**.
1. Haz click en el botón **+ Agregar Miembro**.
1. Busca el usuario que quieres agregar a tu sitio y selecciona un rol.
1. Haz click en **Añadir**.

Puedes modificar el rol de alguno de los administradores asociados haciendo click en su nombre. Se levantará un modal, donde puedes seleccionar el nuevo rol. Presiona **Guardar** para confirmar el cambio.

Si quieres eliminar a un administrador de un sitio, selecciona usando los checks a la izquierda de su nombre, y luego haciendo click en el botón al final de la lista **Borrar**.

Los roles disponibles son:

- **Developer**: Puede crear, modificar y enviar a revisión páginas, widgets, el menú y los templates.
- **Developer CLI**: Puede crear, modificar y enviar a revisión páginas, widgets, el menú y los templates. Además puede empujar widgets desde aplicaciones externas.
- **Reviewer**: Puede crear, modificar, enviar a revisión y aprobar páginas, widgets, el menú y los templates, además de publicarlos cuando se cumplen las condiciones de revisión.
- **Admin**: Puede crear, modificar, enviar a revisión y aprobar páginas, widget, el menú, y los templates. Puede publicar sin pasar por las validaciones de la revisión en equipo. Además puede modificar la configuración del sitio.

#### Developer

Es el usuario a cargo del desarrollo estructural de los recursos, la creación y edición de contenido. Todo lo que haga, tiene que pasar a revisión.

Este usuario no puede publicar, eliminar, volver a versiones anteriores de recursos (Rollback), ni cambiar la configuración.

Existe una variación de este rol con el nombre "CLI" que además de los permisos de desarrollador, les permite hacer push de widgets desde aplicaciones externas, como el [modyo-cli](/es/platform/channels/widgets.html#modyo-cli).

#### Reviewer

Corrigen el trabajo hecho por Developers, aprobando o desechando lo que ya está hecho para después publicar.

No puede editar la configuración del sitio.

#### Admin

El Administrador del sitio, tiene acceso a los dos roles anteriores, además de poder configurar todo el sitio.

Este usuario es distinto al Default Admin. El Site Admin solo puede configurar el sitio externo, pero no puede cambiar nada de la plataforma.

En caso de ser necesario, se pueden borrar a los usuarios del sitio que ya tengan roles anteriores. Para ello, solo se debe hacer clic en el usuario y la acción de Borrar.

### Redirecciones personalizadas

Modyo cuenta con un sistema de redirecciones personalizadas que te permitirá tomar una URL de tu sitio y automáticamente redirigir mediante un código 301 o 302 a otra sección del sitio.

En esta vista encontrarás una tabla con todas las redirecciones que existen actualmente en el sitio, donde podrás buscar por path o descripción.

Para crear una nueva redirección, haz click en el botón **Nuevo** en la esquina superior derecha de la vista. Completando los campos **_URL_ de Origen** y **_URL_ de destino** y código de redirección y luego guardando los cambios, crearás una nueva entrada de redirección.

:::warning Atención
La tabla de redirecciónes es la penúltima en precedencia, de tal forma que si existe una URL en el sitio que apunta a una [página](/es/platform/channels/pages.html) o una vista por defecto, verás esa vista en vez de ser redirigido mediante la tabla de redirecciones personalizadas.
:::

Además de crear redirecciones una por una, puedes importar un [archivo CSV](/assets/examples/custom-redirections.csv) con hasta 1000 redirecciones.

:::warning Atención
Las columnas requeridas para importar redirecciones son origen y destino.

Puedes seleccionar un código de respuesta 301 o 302 para todos los elementos sin necesidad de tener una columna para ellos.

Junto con lo anterior, debes tener en consideración que si estás importando una redirección con un origen que ya tienes registrado, no podrás comenzar el proceso de importación y deberás modificar tu archivo CSV y eliminar la fila cuyo origen ya existe, o bien, eliminar el registro de redirecciones personalizadas del sitio cuyo origen estás intentando importar.
:::

La precedencia de ubicaciones en los sitios de Modyo es la siguiente:

1. [Vistas por defecto (Home, search)](/es/platform/channels/templates.html)
1. [Páginas](/es/platform/channels/pages.html)
1. Redirecciones personalizadas
1. [Configuración de error 404 del sitio](/es/platform/channels/sites.html#privacidad)

### Security headers

Configura los encabezados de seguridad HTTP habilitando este módulo para tu sitio.
Esta acción no se puede deshacer. Al ser habilitada, tendrás el control total de los encabezados que desees usar.

#### HTTP Strict Transport Security (HSTS)

Indica al navegador que el sitio se debe acceder usando solo HTTPS.
* **Duración**: Establece cuánto tiempo debe recordar el navegador que solo se accede al sitio mediante HTTPS.
* **Precarga**: Incluye la directiva de precarga. Para más información consulta [HSTS Preload List Submission](https://hstspreload.org/).
* **Incluir subdominios**: Utiliza la regla HSTS también para todos los subdominios del sitio.

#### Referrer-Policy

El _header_ `Referer` contiene información de la página web anterior desde al cual está vinculando, con el _header_ `Referrer-Policy` puedes controlar cuánta información debe incluirse en el _header_ `Referer`.

* **no-referrer**: No se envía información de _referrer_.
* **no-referrer-when-downgrade**: No envía información de _referrer_ a un destino menos seguro.
* **origin**: Envía solo el dominio de origen y elimina las rutas y _query string_ .
* **origin-when-cross-origin**: Envía información de _referrer_ para _requests_ del mismo origen y elimina las rutas y _query string_ para otros destinos.
* **same-origin**: Envía información de _referrer_ solo para _requests_ del mismo origen.
* **strict-origin**: Envía el dominio de origen solo para _requests_ del mismo nivel de seguridad y no envía información de _referrer_ a destinos menos seguros.
* **strict-origin-when-cross-origin**: Envía información de _referrer_ a _requests_ del mismo origen. Envía el origen solo si el nivel de seguridad es el mismo y no envía información de _referrer_ a destinos menos seguros .
* **unsafe-url**: Envía siempre la información de _referrer_.

#### X-Frame-Options

Indica si tu sitio puede ser incluido en un `frame`, `iframe`, `embed`, or `object`.
* **DENY**: El sitio no se puede mostrar en un _frame_.
* **SAMEORIGIN**: El sitio se puede mostrar en _frames_ del mismo dominio.

#### X-Content-Type-Options

Indica que se deben seguir los _MIME types_ anunciados en el _header_ `Content-Type` para evitar _MIME type sniffing_.

#### Content-Security-Policy

Controla qué recursos puede cargar el navegador en el sitio para mitigar ataques de inyección de datos y _cross site scripting_. El valor predeterminado *permite cargar recursos desde cualquier lugar*, por lo que es importante diseñar una política de seguridad de contenido adecuada para tu sitio.

Especifica libremente tu política de seguridad de contenido en el área de texto; para obtener una guía completa sobre cómo escribir su política, consulta [Content Security Policy (CSP) de la MDN](https://developer.mozilla.org/es/docs/Web/HTTP/CSP)

:::warning Atención
Un valor muy estricto puede interferir con algunas características como [Google tag manager](/es/platform/channels/sites.html#google-tag-manager), [PWA](/es/platform/channels/sites.html#pwa), [Widgets](/es/platform/channels/widgets.html), y [Asset Manager](/es/platform/content/asset-manager.html).
:::

Una política apta para producción debe asegurar que todos los recursos, como imágenes y hojas de estilo, se cargan de fuentes confiables y requiera que todos los scripts sean seguros y confiables para la aplicación. Por ejemplo, una política estricta para el _template minimal_ se vería así:

```
default-src 'self'; img-src 'self' https://cloud.modyocdn.com; font-src 'self' https://cloud.modyocdn.com http://cdn.materialdesignicons.com; style-src 'self' http://cdn.materialdesignicons.com; script-src 'self'
```

La política debe incluir una directiva `default-src 'self'`, que es _fallback_ para cualquier otro tipo de recurso. También debe incluir directivas `script-src` y `style-src` para evitar la evaluación de tags _inline_ `style` y `script`.

* **Nonce**: El servidor agregará un CSP nonce a las directivas `script-src` y `style-src` si están presentes.

Si tienes el nonce presente en tu política, puedes agregar a la lista permitida los _tags_ `script` y `style` en tus _templates_ usando la variable `csp_nonce`.

```liquid
<script nonce="{{csp_nonce}}">
  alert("todo va a estar bien");
</script>
```

Hay varias herramientas para ayudarte a diseñar una política de seguridad sólida:
* [Google CSP evaluator](https://csp-evaluator.withgoogle.com)
* [ReportURI](https://report-uri.com/home/analyse)
* [CSP validator](https://cspvalidator.org)

#### Permissions-Policy

Permite o niega el uso de funciones y APIs del navegador para el sitio, por ejemplo, puedes restringir las APIs sensibles a la privacidad como la cámara o el micrófono y la reproducción automática de videos. Para obtener una lista completa de las funciones compatibles con los navegadores, consulte [Feature Policy from MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy).

#### X-XSS-Protection

Evita que las páginas se carguen cuando el navegador detecta un ataque de _cross-site scripting_. Esta protección no es necesaria con los navegadores modernos cuando se implementa una [Content-Security-Policy](/es/platform/channels/sites.html#content-security-policy) estricta, pero algunos inspectores de seguridad van a esperar la presencia de este _header_.

* **0**: Deshabilita XSS _filtering_.
* **1**: Habilita XSS _filtering_, quitando las partes inseguras.
* **1; mode=block**: Habilita XSS _filtering_, impidiendo el _rendering_ de la página.

### Variables del sitio

Modyo cuenta con [variables globales](/es/platform/core/key-concepts.html#variables-globales) que puedes utilizar en múltiples sitios. Sin embargo, puedes crear variables específicas para un sitio o sobreescribir el valor de una variable global ya creada con un valor específico para el sitio en particular.

Usando variables te permite reutilizar código HTML, JS, CSS, o texto a través de distintos sitios, widgets, o plantillas. Si tienes código que usas repetitivamente en diferentes partes de tu cuenta, puedes asignar este valor a una variable y de esta manera simplificar tus procesos. Al editar el valor de la variable, esto se verá reflejado en todos lados donde se use la variable actualmente.

:::tip Tip
Puedes usar texto plano, HTML, JavaScript, y CSS dentro de las variables globales, sin embargo no puedes usar código Liquid dentro de ellas. Debes tener en consideración que el contenido tiene un máximo de 65.535 caracteres.

Para obtener el valor de la variable en cualquier lugar que acepte Liquid markup, usa:<span v-pre>`{{vars.Nombre}}`</span>
:::

#### Crear una variable en sitios

Para crear una variable en sitios, sigue esto pasos:

1. Desde el menú lateral principal, haz click en **Channels**, luego selecciona tu **Sitio**.
1. Dentro de **Configuración del sitio**, haz click en **Variables del Sitio**.
1. Aquí podrás ver el listado de todas las variables globales y las variables del sitio, su información general, y un botón para copiar su código en Liquid markup. Haz click en **+ Nueva Variable**.
1. Llena el **Nombre** y **Valor** de la variable.
1. Haz click en **Guardar**.

:::warning Atención
Cuando usas variables, siempre se tomará como preferencia las variables definidas en el nivel más bajo, quedando primero las variables definidas en el widget, luego las definidas en el sitio, y por último las variables definidas a nivel de cuenta, por lo que debes ser cuidadoso al momento de definir variables en widgets o el sitio con el mismo nombre que las variables de la cuenta.
:::
