---
search: true
---

# Sitios

<img src="/assets/img/channels/sites/sites-index.jpg" style="border: 1px solid #EEE;" />

Es aquí donde debes operar para crear canales digitales dentro de la plataforma. En este caso, la operación de sitios implica todo el desarrollo, diseño y flujo de navegación. Si quieres añadir contenido a cada una de ellas, debe ser agregada en la sección Content.

Al entrar, puedes ver que existen 4 estados:

<img src="/assets/img/channels/sites/filters-sites.jpg" width="300" />

- **Habilitado**: Estado por defecto en el que quedan los sitios recién creados y los que están online.
- **Oculto**: sitios creados que solo puede ver el usuario en linea.
- **Desarrollo**: sitios traspasados a otros usuarios que se encuentren trabajando en ellos.
- **Deshabilitado**: sitios que han sido desechados.

Para crear un sitio, solo debes hacer clic en la pestaña **Nuevo**, el cual te permitirá designar el nombre y el host, y posteriormente un template para su apariencia y estructura.

Después de ello, puedes verlo en modo "Habilitado", lo que significa que está online para trabajar.

## Configuración de un Sitio

La configuración del sitio te permite abrir las opciones de la plataforma, para que sea vista de distinta manera por los visitantes, clientes, desarrolladores y administradores del sitio. Además, puedes modificar opciones que permitan mejorar la aparición en motores de búsqueda y la visión de algunos de los datos a los que tiene acceso el público al llegar a las páginas.

<img src="/assets/img/channels/sites/config-site.jpg" width="250" />

### General

Dentro de esta sección, puedes configurar los siguientes datos:

- **Nombre del sitio**: El nombre de tu sitio, este campo se usa como título por defecto para el SEO de tu sitio. 
- **Descripción**: Una breve descripción de tu sitio que será usada como valor por defecto para el SEO del sitio.
- **Logo del sitio**: Imagen que se usara en la parte superior izquierda como logo del sitio.
- **Idioma**: El idioma en el que estará tu sitio. Este valor es importante al momento de usar [contenido en un sitio](/guides/channels/templates.html#vistas-para-contenido).
- **[Revisión en Equipo](/guides/platform/team-review.html)**
- **Zona Horaria**: La zona horaria en que se mostrarán los campos fecha y hora dentro del sitio.
- **Favicon**: Imagen que aparece al costado de la barra de dirección.
- **Icono de Apple**: Imagen que aparece en dispositivos móviles al usar el sitio como aplicación.
- **Espacios asociados**: Espacios relacionados que podrán mostrar sus entradas en este sitio.

### PWA

Modyo permite la implementación de Progressive Web Apps (PWA) dentro de los canales digitales que se estén armando. Para ello, otorga dos opciones para implementarlos fácilmente.

<img src="/assets/img/channels/sites/pwa-site.jpg" width="600" style="margin-top: 40px; border: 1px solid #EEE;" >

#### **Manifiesto**

El manifiesto sirve para indicar cómo quieres que un navegador muestre tu canal digital. En la plataforma, es posible activarlo a través de este checkbox. Con ello, se creará la siguiente ruta:

```
https://[domain]/[site-name]/manifest.json
```

El manifiesto se debe implementar en cada una de las páginas en que se desarrolle el PWA, a través del [Template Builder](/guides/channels/templates.html), en el snippet ```head```.

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
- **Sitemap**: Archivo que permite a los motores de búsqueda indexar mejor el contenido del sitio. Puedes dejar que Modyo maneje automáticamente esta opción o modificar manualmente para que se enfoque sólo en un contenido en especial.
- **Robots.txt**: En este archivo das las instrucciones al motor de búsqueda para que categorice el Sitio. También puedes configurar este archivo para que la página no sea indexada directamente.

:::tip Tip
Los archivos robots.txt y el sitemap.xml solo son visibles en el sitio, si es que se tiene el custom domain habilitado (dominio personalizado).

 De lo contrario, robots.txt y sitemap.xml se encuentran solo a nivel de cuenta, tienen sus valores por defecto y no se pueden personalizar.
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

Existe una variación de este rol con el nombre "CLI" que además de los permisos de desarrollador, les permite hacer push de widgets desde aplicaciones externas, como el [modyo-cli](/guides/channels/widgets.html#modyo-cli).

#### Reviewer

Corrigen el trabajo hecho por Developers, aprobando o desechando lo que ya está hecho, para después publicar.

No puede editar la configuración del sitio.

#### Admin

El Administrador del sitio, tiene acceso a los dos roles anteriores, además de poder configurar todo el sitio.

Este usuario es distinto al Default Admin. El Site Admin solo puede configurar el sitio externo, pero no puede cambiar nada de la plataforma.

En caso de ser necesario, se pueden borrar a los usuarios del sitio que ya tengan roles anteriores. Para ello, solo se debe hacer clic en el usuario y la acción de Borrar.