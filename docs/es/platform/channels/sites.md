---
search: true
---

# Sitios

<img src="/assets/img/channels/sites/sites-index.jpg" style="border: 1px solid #EEE;" />

Es aquí donde debes operar para crear canales digitales dentro de la plataforma. En este caso, la operación de sitios implica todo el desarrollo, diseño y flujo de navegación. Si quieres añadir contenido a cada una de ellas, debe ser agregada en la sección Content.

Al entrar, puedes ver que existen 4 estados:

<img src="/assets/img/channels/sites/filters-sites.jpg" width="300" />

- **Habilitado**: Estado por defecto en el que quedan los sitios recién creados y los que están habilitados para su uso.
- **Oculto**: Sitios creados y habilitados que no aparecen en el listado de sitios del perfil de los usuarios. Sólo se pueden acceder si se cuenta con la URL del sitio.
- **Desarrollo**: Sitios disponibles sólo para administradores de Modyo. Los usuarios que no tengan permisos de administrador no podrán ver estos sitios.
- **Deshabilitado**: Sitios a los que no se puede acceder.

Para crear un sitio, solo debes hacer clic en la pestaña **Nuevo**, el cual te permitirá designar el nombre y el host, y posteriormente un template para su apariencia y estructura.

Después de ello, puedes verlo en modo "Habilitado", lo que significa que está online para trabajar.

:::warning Atención
En el índice de sitios, solo verás los sitios en los cuales eres parte del equipo de trabajo con algún rol.
:::

## Configuración de un Sitio

La configuración del sitio te permite abrir las opciones de la plataforma, para que sea vista de distinta manera por los visitantes, clientes, desarrolladores y administradores del sitio. Además, puedes modificar opciones que permitan mejorar la aparición en motores de búsqueda y la visión de algunos de los datos a los que tiene acceso el público al llegar a las páginas.

<img src="/assets/img/channels/sites/config-site.jpg" width="250" />

### General

Dentro de esta sección, puedes configurar los siguientes datos:

- **Nombre del sitio**: El nombre de tu sitio, este campo se usa como título por defecto para el SEO de tu sitio. 
- **Descripción**: Una breve descripción de tu sitio que será usada como valor por defecto para el SEO del sitio.
- **Logo del sitio**: Imagen que se usara en la parte superior izquierda como logo del sitio.
- **Idioma**: El idioma en el que estará tu sitio. Este valor es importante al momento de usar [contenido en un sitio](/es/platform/channels/templates.html#vistas-para-contenido).
- **[Revisión en Equipo](/es/platform/core/key-concepts.html)**
- **Zona Horaria**: La zona horaria en que se mostrarán los campos fecha y hora dentro del sitio.
- **ID de Google Tag Manager**: Te permite añadir un identificador de Google Tag Manager para insertar fácilmente los scripts para poder hacer uso de la herramienta de registro de eventos de google. 
- **Favicon**: Imagen que aparece al costado de la barra de dirección.
- **Icono de Apple**: Imagen que aparece en dispositivos móviles al usar el sitio como aplicación.
- **Borrar**: Esta opción te permite eliminar definitivamente un sitio y todo sus elementos.

:::danger Peligro
Esta opción es irreversible, por lo que debes estar completamente seguro al ejecutar esta acción. Al presionar el botón de eliminado, el sistema te preguntará por el nombre del sitio. Deberás ingresar el nombre textual del sitio que estés eliminando para poder ejecutar la acción. Una vez confirmada la acción, no podrás volver a acceder al sitio ni a sus elementos.
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

### PWA

Modyo permite la implementación de Progressive Web Apps (PWA) dentro de los canales digitales que se estén armando. Para ello, otorga dos opciones para implementarlos fácilmente.

<img src="/assets/img/channels/sites/pwa-site.jpg" width="600" style="margin-top: 40px; border: 1px solid #EEE;" >

#### **Manifiesto**

El manifiesto sirve para indicar cómo quieres que un navegador muestre tu canal digital. En la plataforma, es posible activarlo a través de este checkbox. Con ello, se creará la siguiente ruta:

```
https://[domain]/[site-name]/manifest.json
```

El manifiesto se debe implementar en cada una de las páginas en que se desarrolle el PWA, a través del [Template Builder](/es/platform/channels/templates.html), en el snippet ```head```.

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

### SEO

<img src="/assets/img/channels/sites/seo-site.jpg" width="400" style="margin-top: 40px; border: 1px solid #EEE;" >

El SEO (Search Engine Optimization) es la llave para aparecer en los distintos motores de búsqueda. De una buena configuración depende si los usuarios llegan al sitio a través de ellos.

Las opciones a configurar son:

- **Tagline**: Descripción que aparece en los motores de búsqueda, bajo el nombre del sitio
- **Palabras claves**: Palabras que buscan los usuarios y que quieres que el sitio aparezca.
- **Sitemap**: Este archivo permite a los motores de búsqueda indexar mejor el contenido de su sitio. Modyo actualiza automáticamente su archivo de mapa de sitio por defecto, pero también puede modificarlo manualmente para que se centre sólo en una página y un contenido determinados.
- **Robots.txt**: Este archivo forma parte del Protocolo de Exclusión de Robots (REP), un grupo de normas web que regulan la forma en que los robots rastrean la web, acceden e indexan el contenido y lo sirven a los usuarios. En la práctica, este archivo determina si ciertos agentes de usuario (software de rastreo web) pueden o no rastrear partes de un sitio web. Estas instrucciones de rastreo se especifican "permitiendo" o "prohibiendo" el comportamiento de ciertos (o todos) agentes de usuario. Puede modificar este archivo para proporcionar instrucciones personalizadas a los rastreadores de sitios.

:::tip Tip
Los archivos robots.txt y el sitemap.xml solo son visibles en el sitio, si es que se tiene el custom domain habilitado (dominio personalizado). De lo contrario, robots.txt y sitemap.xml se encuentran solo a nivel de cuenta, tienen sus valores por defecto y no se pueden personalizar.
:::

- **Meta tags**: Te permite configurar los meta tags disponibles para luego usar en los pages. Además, te permite añadirlos a todos los pages, o simplemente disponiblizarlos para luego añadirlos a los pages que los requieran.

:::tip Tip
Al añadir un meta tag a todos los pages a través de la configuración de SEO del sitio, se añadirá a la versión editable de todas las páginas, de tal forma que tendrás que publicar cada página para que los nuevos meta tags tengan efecto en el sitio.
:::

:::warning Atención
Ya que el listado de meta tags es parte de la configuración del sitio, sólo los administradores del sitio podrán habilitar los meta tags disponibles para usar en las páginas, sin embargo, los developers del sitio podrán añadir y eliminar los meta tags disponibles en las página y modificar sus valores.
:::

### Restricciones

<img src="/assets/img/channels/sites/restrictions-site.jpg" width="250" style="margin-top: 40px; border: 1px solid #EEE;" >

Restricciones permite configurar la privacidad del sitio.

- Si el sitio es público, entonces todos pueden ver el sitio.
- Si el sitio es privado, solo usuarios con una sesión de Modyo podrán ver el sitio.
- Si el sitio es privado, pero el home es público, el home se muestra a todos quienes lleguen al Home, pero al navegar a cualquier otra página del sitio, se les solicita que se registren o que inicien sesión.
- Si se llegas a una URL que no exista dentro del sitio, por defecto te encontrarás con una respuesta 404, pero si marcas esta opción, en vez de recibir un 404, serás redirigido al Home del sitio.

### Dominios

<img src="/assets/img/channels/sites/domains-site.jpg" width="500" style="margin-top: 40px; border: 1px solid #EEE;" >

La sección Dominios te permite saber dónde está públicamente ubicado el sitio, por lo que es esencial que cada uno de los miembros de la plataforma sean informados de los cambios que se realicen aquí.

Las variables que puedes cambiar aquí son:

- **Host**: Donde se encuentra el sitio dentro del servidor.
- **Activar dominios personalizados**: Si es que quieres que dentro del dominio, existan sitios con una URL personalizada o "custom host.
- **Habilitar SSL en el sitio**: Es necesario tener un certificado dentro del servidor para habilitarlo.
- **Dominio primario**: Dirección del sitio.
- **Dominio alternativo**: Dirección secundaria para redireccionar en caso de que falle la primera.

### Variables del sitio

Modyo cuenta con [variables globales](/es/platform/core/key-concepts.html#variables-globales) que puedes utilizar en múltiples sitios. Sin embargo, puedes crear variables específicas para un sitio o sobreescribir el valor de una variable global ya creada, con un valor específico para el sitio en particular.

### Miembros del Equipo

<img src="/assets/img/channels/sites/members-site.jpg" width="500" style="margin-top: 40px; border: 1px solid #EEE;" >

Para ordenar el trabajo, Modyo permite seleccionar los miembros del equipo que trabajarán en cada sitio y así tendrán acceso a la escritura, revisión y/o publicación.

Para ello, el administrador que creó el sitio puede asignar manualmente a los usuarios y los roles predeterminados que habilitan cada una de las funciones.

Para añadir un usuario al sitio, selecciona el botón primario **+ Nuevo** en la parte superior derecha de la vista, en el modal selecciona a un administrador y asígnale un rol, luego presiona **Añadir** para que ese administrador sea parte del equipo de trabajo del sitio.

Puedes modificar el rol de alguno de los administradores asociados haciendo _click_ en su nombre. Se levantará un modal, donde puedes seleccionar el nuevo rol. Presiona **Guardar** para confirmar el cambio.

Si quieres eliminar a un administrador de un sitio, selecciona usando los checks a la izquierda de su nombre, y luego haciendo _click_ en el botón al final de la lista **Borrar**.

Los roles disponibles son:

- **Developer**: Puede crear, modificar y enviar a revisión páginas, widgets, el menú y los templates.
- **Developer CLI**: Puede crear, modificar y enviar a revisión páginas, widgets, el menú y los templates. Además puede empujar widgets desde aplicaciones externas.
- **Reviewer**: Puede crear, modificar, enviar a revisión y aprobar páginas, widgets, el menú y los templates, además de publicarlos cuando se cumplen las condiciones de revisión.
- **Admin**: Puede crear, modificar, enviar a revisión y aprobar páginas, widget, el menú, y los templates. Puede publicar sin pasar por las validaciones de la revisión en equipo. Además puede modificar la configuración del sitio.

#### Developer

Es el usuario a cargo del desarrollo estructural de los recursos, la creación y edición de contenido. Todo lo que haga, tiene que pasar a revisión.

Este usuario no puede publicar, eliminar, volver a versiones anteriores de recursos (Rollback) ni cambiar la configuración.

Existe una variación de este rol con el nombre "CLI" que además de los permisos de desarrollador, les permite hacer push de widgets desde aplicaciones externas, como el [modyo-cli](/es/platform/channels/widgets.html#modyo-cli).

#### Reviewer

Corrigen el trabajo hecho por Developers, aprobando o desechando lo que ya está hecho, para después publicar.

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
La tabla de redirecciónes es la penúltima en precedencia, de tal forma que si existe una URL en el sitio que apunta a una [página](/es/platform/channels/pages.html), a una vista por defecto o a una [vista personalizada de contenido](/es/platform/channels/templates.html#vistas-para-contenido), verás esas vistas en vez de ser redirigido mediante la tabla de redirecciones personalizadas.
:::

La precedencia de ubicaciones en los sitios de Modyo es la siguiente:

1. [Vistas por defecto (Home, search)](/es/platform/channels/templates.html)
1. [Páginas](/es/platform/channels/pages.html)
1. [Vistas personalizadas de contenido](/es/platform/channels/templates.html#vistas-para-contenido)
1. Redirecciones personalizadas
1. [Configuración de error 404 del sitio](/es/platform/channels/sites.html#restricciones)
