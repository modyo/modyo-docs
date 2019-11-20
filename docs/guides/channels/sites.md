---
search: true
---

# Sitios

Es aquí donde debes operar para crear Sitios y minisitios dentro de la plataforma. En este caso, la operación de Sitios implica todo el desarrollo, diseño y flujo de navegación. Si quieres añadir contenido a cada una de ellas, debe ser agregada en la sección Content.

Al entrar, podrás ver que existen 4 estados:

- Habilitado (Estado por defecto en el que quedan los Sitios recién creados y los que están online)
- Ocultos (Sitios creados que solo puede ver el usuario en linea)
- Desarrollo (Sitios traspasados a otros usuarios que se encuentren trabajando en ellos)
- Deshabilitado (Sitios que han sido desechados)

Para crear un Sitio, solo debes hacer clic en la pestaña "Nuevo", el cual te permitirá designar el nombre y el host, y posteriormente un template para su apariencia y estructura.

Después de ello, podrás verlo en modo "Habilitado", lo que significa que está online para trabajar.

## Configuración de un Sitio

La configuración del Sitio nos permitirá abrir las opciones de nuestra plataforma, para que sea vista de distinta manera por los visitantes, clientes, desarrolladores y administradores del Sitio. Además, podemos modificar opciones que permitan mejorar nuestra aparición en motores de búsqueda y la visión de algunos de los datos a los que tiene acceso el público al llegar a nuestras páginas.

### General

Dentro de esta sección, podemos configurar los siguientes datos:

- **Nombre del Sitio**: El nombre de tu Sitio, este campo se usa como título por defecto para el SEO de tu Sitio. 
- **Descripción**: Una breve descripción de tu Sitio que será usada como valor por defecto para el SEO del Sitio.
- **Logo del Sitio**: Imagen que se usara en la parte superior izquierda como logo del Sitio.
- **Idioma**: El idioma en el que estará tu Sitio. Este valor es importante al momento de usar [contenido en un Sitio](/guides/channels/templates.html#vistas-para-contenido).
- **[Team Review](/guides/platform/team-review.html)**
- **Zona Horaria**: La zona horaria en que se mostrarán los campos fecha y hora dentro del Sitio.
- **Favicon**: Imagen que aparece al costado de la barra de dirección
- **Icono de Apple**: Imagen que aparece en dispositivos móviles al usar el Sitio como aplicación
- **Espacios asociados**: Espacios relacionados que podrán mostrar sus entradas en este Sitio.

### PWA

::: danger
Missing description
Mannifers.json
Serviceworker.js
Variables disponibles
:::

### SEO

El SEO (Search Engine Optimization) es nuestra llave para aparecer en los distintos motores de búsqueda. De una buena configuración depende si los usuarios llegan a nuestro Sitio a través de ellos.

Las opciones a configurar son:

- **Tagline**: Descripción que aparecerá en los motores de búsqueda, bajo el nombre del Sitio
- **Palabras claves**: Palabras que buscarán los usuarios y que queremos que nuestro Sitio aparezca.
- **Sitemap**: Archivo que permite a los motores de búsqueda indexar mejor el contenido de nuestro Sitio. Podemos dejar que Modyo maneje automáticamente esta opción o la podemos modificar manualmente para que se enfoque sólo en un contenido en especial.
- **Robots.txt**: En este archivo le damos las instrucciones al motor de búsqueda para que categorice nuestro Sitio. También podemos configurar este archivo para que la página no sea indexada directamente.

### Restricciones

Restricciones nos permite configurar la privacidad del Sitio.

- Si el Sitio es público, entonces todos podrán ver el Sitio.
- Si el Sitio es privado, solo usuarios con una sesión de Modyo podrán ver el Sitio.
- Si el Sitio es privado, pero el home es público, el home se mostrará a todos quienes lleguen a nuestro home, pero al navegar a cualquier otra página del Sitio, se les solicitará que se registren o que inicien sesión.

Además, nos permite configurar la visualización del contenido targetizado de nuestros usuarios registrados, para que solo se vea en la página "Mi" (página personal de cada usuario) o en cualquier página que navegue en el Sitio.

### Dominios

La sección Dominios te permitirá saber dónde está públicamente ubicado nuestro Sitio, por lo que es esencial que cada uno de los miembros de la plataforma esté al tanto de los cambios que se realicen aquí.

Las variables que puedes cambiar aquí son:

- **Host**: Donde se encuentra nuestro Sitio dentro del servidor.
- **Activar dominios personalizados**: Si es que queremos que dentro de nuestro dominio, existan Sitios cn una URL personalizada o "custom host.
- **Habilitar SSL en nuestro Sitio**: Es necesario tener un certificado dentro de nuestro servidor para habilitarlo.
- **Dominio primario**: Dirección de nuestro Sitio.
- **Dominio alternativo**: Dirección secundaria para redireccionar en caso de que falle la primera.

### Miembros del Equipo

Para ordenar el trabajo, Modyo permite seleccionar los miembros del equipo que trabajarán en cada Sitio y así tendrán acceso a la escritura, revisión y/o publicación.

Para ello, el administrador que creó el Sitio puede asignar manualmente a los usuarios y los roles predeterminados que habilitan cada una de las funciones.

Para añadir un usuario al Sitio, selecciona el botón primario "+ Nuevo" en la parte superior derecha de la vista, en el modal selecciona a un administrador y asignale un rol, luego presiona "Añadir" para que ese administrador sea parte del equipo de trabajo del Sitio.

Puedes modificar el rol de alguno de los administradores asociados haciendo click en su nombre. Se levantará un modal, donde podrás seleccionar el nuevo rol. Presiona "guardar" para confirmar el cambio.

Para eliminar administradores de un Sitio, puedes seleccionarlos usando los checks a la izquierda de su nombre, y luego haciendo click en el botón al final de la lista "Borrar".

Los roles disponibles son:

- **Developer**: Puede crear, modificar y enviar a revisión páginas, widgets, el menú y los templates.
- **Developer CLI**: Puede crear, modificar y enviar a revisión páginas, widgets, el menú y los templates. Además puede empujar widgets desde aplicaciones externas.
- **Reviewer**: Puede crear, modificar, enviar a revisión y aprobar páginas, widgets, el menú y los templates, además de publicarlos cuando se cumplen las condiciones de revisión.
- **Admin**: Puede crear, modificar, enviar a revisión y aprobar páginas, widget, el menú, y los templates. Puede publicar sin pasar por las validaciones de la revisión en equipo. Además puede modificar la configuración del Sitio.

#### Developer

Es el usuario que está a cargo del desarrollo estructural de los recursos, la creación y edición de contenido. Todo lo que haga, tiene que pasar a revisión.

Este usuario no puede publicar, eliminar, volver a versiones anteriores de recursos (Rollback) ni cambiar la configuración.

Existe una variación de este rol con el nombre "CLI" que además de los permisos de desarrollador, les permite hacer push de widgets desde aplicaciones externas, como el [modyo-cli](/guides/channels/widgets.html#modyo-cli).

#### Reviewer

Corrigen el trabajo hecho por Developers, aprobando o desechando lo que ya está hecho, para después publicar.

No puede editar la configuración del Sitio.

#### Admin

Administrador del Sitio, tiene acceso a los dos roles anteriores, además de poder configurar todo el Sitio.

Este usuario es distinto al Default Admin. El Site Admin solo puede configurar el Sitio externo, pero no puede cambiar nada de la plataforma.

En caso de ser necesario, se pueden borrar a los usuarios del Sitio que ya tengan roles anteriores. Para ello, solo se debe hacer clic en el usuario y la acción de Borrar.