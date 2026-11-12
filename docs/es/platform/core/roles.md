---
search: true
---

# Equipos y Grupos

## Equipo

Todos los usuarios internos de la plataforma conforman el equipo, y cada miembro puede tener un rol específico para aprovechar al máximo el sistema.

En esta sección puedes crear, editar y deshabilitar a los usuarios de la plataforma.

### Crear usuario

Para crear un usuario interno, sigue estos pasos:

1. Desde el menú principal, haz click en **Configuración**.
1. Selecciona **Equipo**.
1. Haz click en **Nuevo Miembro del Equipo**.
1. Completa los campos de nombre, apellido, nombre de usuario, correo electrónico, contraseña y confirmación de la contraseña. Con **Generar una contraseña segura**, la plataforma completa ambos campos de contraseña por ti.
1. Haz click en **Guardar**.

El nombre de usuario solo puede contener letras de la A a la Z (mayúsculas o minúsculas), números y los símbolos `| # @ % . _ - ' + /`. No se permiten espacios ni otros caracteres.

:::tip Tip
El nuevo miembro siempre recibe un correo electrónico con su dirección de correo, su nombre de usuario y el enlace para acceder a la plataforma. La casilla **Incluir contraseña en correo electrónico enviado al usuario** viene marcada por defecto y agrega la contraseña a ese correo; desmárcala si se la entregarás por otro medio.
:::

### Editar usuario

Dentro de la pantalla de edición de usuario, los administradores de la plataforma tienen acceso a las siguientes ventanas:

- Actividad: Muestra el historial de todas las acciones realizadas por el usuario.
- Acceso: Define a qué aplicaciones accede el usuario y cuál es su rol de cuenta. También muestra los grupos a los que pertenece: con **Agregar grupo** lo sumas a otro grupo y con **Eliminar grupo** lo quitas de uno.
- Acceso a la API: Genera tokens de acceso para usar la API administrativa de Modyo. Cada token se crea para una de las aplicaciones registradas en **Configuración** > **Acceso a la API**; si no hay ninguna, primero tienes que crearla. Revisa [Bearer token](/es/platform/core/api.html#bearer-token).
- Editar: Modifica los datos del usuario como nombre, correo electrónico y contraseña.
- Dispositivos: Muestra un listado de todos los dispositivos en los que el usuario tiene una sesión activa. Despliega datos como navegador, sistema operativo, último inicio de sesión y dirección IP. Aquí, además, puedes cerrar la sesión de forma remota para cada dispositivo. Cuando un miembro del equipo inicia sesión desde un dispositivo que no había usado antes, Modyo le envía un correo de aviso; revisa [Aviso de Inicio de Sesión desde un Dispositivo Nuevo](/es/platform/core/security.html#aviso-de-inicio-de-sesion-desde-un-dispositivo-nuevo).

:::warning Atención
Cuando defines o cambias la contraseña de otro miembro del equipo desde **Editar**, la plataforma marca esa contraseña como pendiente de cambio y revoca de inmediato todas sus sesiones activas: el miembro queda desconectado en todos sus dispositivos y, en su siguiente inicio de sesión, tiene que definir una contraseña nueva antes de poder navegar el panel. Lo mismo ocurre al crear un miembro del equipo con una contraseña. Avísale antes de hacerlo.
:::

:::warning Nombres de usuario creados en versiones anteriores
Los usuarios creados antes de que existiera la validación de caracteres pueden tener nombres de usuario hoy no permitidos (por ejemplo, con espacios). Mientras el nombre de usuario no cumpla la validación, cualquier actualización de ese usuario fallará — incluidas acciones administrativas como eliminar su autenticador (2FA), que puede mostrar un mensaje de éxito sin aplicarse realmente. Antes de realizar acciones sobre uno de estos usuarios, corrige primero su nombre de usuario.
:::

### Deshabilitar o habilitar usuario

Deshabilitar a un miembro del equipo le quita el acceso a la plataforma sin eliminarlo. Para hacerlo, sigue estos pasos:

1. Desde el menú principal, haz click en **Configuración**.
1. Selecciona **Equipo**.
1. En la fila del miembro, en la columna **Acciones**, haz click en **Deshabilitar** y confirma.

También puedes deshabilitarlo desde su perfil, en el menú de tres puntos que aparece junto a su nombre.

Al deshabilitarlo, la plataforma cierra de inmediato todas sus sesiones activas. Mientras esté deshabilitado, no puede iniciar sesión ni usar sus tokens de acceso a la API.

Para devolverle el acceso, usa **Habilitar** desde los mismos lugares. En el listado de **Equipo**, los miembros deshabilitados aparecen al elegir **Deshabilitado** en el filtro **Estado**.

Para deshabilitar o habilitar a un miembro necesitas el permiso **Administrar Equipo**. El dueño de la cuenta no se puede deshabilitar.

## Grupos

Los grupos te permiten agilizar el control de acceso a los distintos contextos de Modyo. Puedes asignar un rol predeterminado a un contexto (cuenta, espacio, reino o sitio) para múltiples usuarios al mismo tiempo y luego ese grupo de usuarios a diferentes contextos. Esto permite que todos los usuarios obtengan el rol del grupo en el contexto correspondiente.

Además, desde el bloque **Grupos** de la pestaña **Acceso** en el perfil de cada miembro del equipo, puedes agregar al usuario a un grupo existente o quitarlo de uno.

:::tip Tip
Todos los usuarios que pertenecen a un grupo tendrán el rol del grupo. Si además tienen un rol asignado individualmente, o pertenecen a varios grupos, en cada contexto reciben la suma de los permisos de todos esos roles, menos los de las [aplicaciones](#acceso-a-las-aplicaciones) que no tengan habilitadas.
:::

### Crear un grupo

Para crear un grupo, sigue estos pasos:

1. Haz click en **Configuración**.
1. Haz click en **Grupos**.
1. Haz click en **Nuevo Grupo**.
1. Escribe el nombre del grupo y selecciona el **Rol del Grupo**.
1. Selecciona del menú desplegable debajo de **Agregar Usuarios**, los usuarios que formarán parte de este grupo.
1. Da click en **Crear**.

Una vez creado un grupo, lo puedes ver en el panel de Grupos. Además, al editar un usuario podrás agregarlo o, si ya es parte de ese grupo, eliminarlo.


## Roles

Puedes aplicar roles en los distintos módulos para personalizar la experiencia de tu equipo de trabajo. Cada rol se aplica de manera específica a un módulo en particular. Por ejemplo, puedes seleccionar a los administradores de un espacio o a los miembros que pueden interactuar con el CLI en algún sitio.

Modyo tiene 15 roles predeterminados con diferentes funciones para cada contexto, lo que te permite distribuir y controlar el acceso a las distintas secciones de cada contexto de la plataforma.

Cada rol tiene el nombre que ves en el panel y un nombre técnico, la _key_, que aparece entre paréntesis en las listas de abajo. La _key_ es el valor que devuelve la API de roles y el que usas cuando asignas roles por API.

### Roles predeterminados

Modyo asigna roles predeterminados según el contexto o sección en la que se utilizan.

Los roles predeterminados que existen, según contexto, son:

#### Roles por cuenta

- **Default user** (`account_user`): Trae los permisos **Ver Variables Globales** y **Administrar Insights**. Para trabajar en un sitio, espacio o reino, el miembro tiene que ser invitado a ese contexto con uno de sus roles.
- **Default admin** (`account_admin`): Trae los permisos **Gestionar Canales**, **Gestionar Contenido** y **Gestionar Clientes**, con los que administra todos los sitios, espacios y reinos sin necesidad de ser invitado a ellos, y puede crear nuevos. Además trae **Administrar Variables Globales**, **Administrar Snippets Globales**, **Administrar Locks**, **Ver Logs de Actividad** y **Administrar Insights**. No tiene **Administrar Configuración**: en **Configuración** solo accede a **Logs de actividad**.
- **Full admin** (`account_owner`): Tiene todos los permisos existentes y puede acceder a todos los contextos sin necesidad de ser invitado a ellos.

#### Roles por sitio

- **Site Viewer** (`site_viewer`): Puede ver las páginas, menús, plantillas y widgets del sitio y las variables globales, ver diferencias entre versiones y puede dejar comentarios. También puede acceder a la vista de sincronización y ver los cambios pendientes de sincronizar. Sin embargo, este rol no tiene autorización para realizar ninguna acción que implique un cambio en la plataforma.
- **Site Developer** (`site_developer`): Crea y edita páginas, menús, widgets y plantillas, y puede restaurar una versión anterior de ellos (rollback). Las variables globales solo las puede ver. No puede publicar, eliminar ni editar la configuración.
- **Site Developer CLI** (`site_developer_cli`): Tiene los mismos permisos que Site Developer; en adición, puede interactuar con modyo-cli.
- **Site Reviewer** (`site_reviewer`): Tiene todos los permisos del rol de Site Admin, excepto **Administrar Configuración Aplicación Web** y **Administrar Sincronizaciones**: no puede editar la configuración del sitio ni acceder a sus sincronizaciones.
- **Site Admin** (`site_admin`): Tiene todos los permisos a nivel de un sitio, pero no puede crear nuevos sitios.

#### Roles por espacio

- **Space Viewer** (`space_viewer`): Este rol permite ver el contenido de un espacio, ver diferencias entre versiones y dejar comentarios. Su acceso está limitado a la visualización y participación mediante comentarios, no puede realizar modificaciones en el contenido o realizar acciones que afecten la configuración.
- **Space Writer** (`space_writer`): Crea y edita entradas, y administra los assets y las categorías del espacio, lo que incluye eliminarlos. No puede publicar ni eliminar entradas, no puede hacer rollback y no edita la configuración.
- **Space Editor** (`space_editor`): Crea, edita, publica y revisa entradas, puede hacer rollback y administra los tipos, las categorías y los assets del espacio. A diferencia de Space Admin, no puede eliminar, clonar ni editar entradas en lote, ni editar la configuración del espacio.
- **Space Admin** (`space_admin`): Este rol tiene todos los permisos a nivel de un espacio, pero no puede crear nuevos espacios. Puede crear y eliminar assets.

#### Roles por reino

- **Realm User** (`realm_user`): Trae los permisos **Ver Usuarios**, **Administrar Campañas**, **Administrar Plantillas de Campañas**, **Administrar Formularios**, **Administrar Segmentos** y **Ver Órdenes de Pago**. Ve los usuarios del reino, pero no puede crearlos, editarlos ni eliminarlos.
- **Realm Admin** (`realm_admin`): Puede acceder a todas las configuraciones y secciones del reino. Además, puede añadir y eliminar usuarios y miembros del equipo, eliminar el reino, y crear y sincronizar sus [stages](/es/platform/customers/realms.html#stages) con los permisos **Administrar Stages** y **Administrar Sincronizaciones**.
- **Realm Viewer** (`realm_viewer`): Es un rol de solo lectura sobre Customers. Trae los permisos **Ver Usuarios**, **Ver Segmentos**, **Ver Eventos**, **Ver Órdenes de Pago**, **Ver Plantillas de Campañas**, **Ver Formularios**, **Ver Entregas de Mensajes** y **Ver Sincronizaciones**. No puede crear ni modificar nada dentro del reino.

:::tip Tip
En las cuentas creadas antes de la versión 10.2.2, **Realm Admin** y **Realm Viewer** no reciben automáticamente **Administrar Sincronizaciones** ni **Ver Sincronizaciones**: agrégalos al rol si los necesitas. Revisa [Permisos de los stages](/es/platform/customers/realms.html#permisos-de-los-stages).
:::

#### Editar y eliminar los roles predeterminados

**Full admin** es el único rol predeterminado que la plataforma marca como no editable: no puedes cambiarle el nombre, ni sus permisos, ni eliminarlo. Esto no limita sus permisos, que siguen siendo todos los de la plataforma. Los otros 14 roles predeterminados se comportan como cualquier rol a medida y los administras desde **Configuración** > **Roles**:

- Para cambiar su nombre o sus permisos, haz click sobre el nombre del rol en el listado.
- Para eliminarlo, en la columna **Acciones** de su fila elige **Borrar** y confirma.

:::warning Atención
Un rol solo se puede eliminar si no está asignado a nadie. Si algún miembro del equipo o algún grupo lo tiene asignado en cualquier contexto, la plataforma bloquea el borrado y muestra un error. Reasigna primero a esos miembros y grupos, y recién entonces elimina el rol.
:::

### Roles a medida
Los roles a medida te permiten crear perfiles con accesos y permisos únicos, combinando roles existentes o configurándolos según las necesidades específicas de tu organización.

:::tip Tip
Los roles a medida están desde la versión 10.1 en adelante.
:::

#### Crear roles a medida

Para crear un rol a medida, selecciona el botón **Nuevo Rol** y define su **scope**. Esto asignará permisos según la selección que realices:

- **Organización**: el rol tendrá acceso a todos los módulos de Modyo y su alcance será global.
- **Channels**: el rol tendrá acceso únicamente al módulo de [Channels](/es/platform/channels/).
- **Customers**: el rol tendrá acceso únicamente al módulo de [Customers](/es/platform/customers/).
- **Content**: el rol tendrá acceso únicamente al módulo de [Content](/es/platform/content/).

Al crear un nuevo rol o seleccionar uno existente, podrás ver y modificar todos sus permisos y accesos asociados. Si seleccionas la opción **Todos**, asignarás automáticamente todos los permisos al rol.

Algunos permisos incluyen a otros: al marcar uno, la plataforma marca también los que ese permiso necesita para funcionar. El caso más granular son las respuestas de originación, con tres niveles de visibilidad del detalle; revisa [permisos de visibilidad de las respuestas](/es/platform/customers/origination.html#permisos-de-visibilidad-de-las-respuestas).

Para conservar los cambios, presiona el botón **Guardar**.

### Acceso a las aplicaciones

Además del rol, cada miembro del equipo tiene un interruptor por aplicación que decide qué módulos ve en el panel. Las aplicaciones que puedes habilitar o deshabilitar son cuatro: **Content**, **Channels**, **Customers** e **Insights**.

El bloque **Acceso a aplicaciones** aparece en dos lugares:

- En la pestaña **Acceso** de un miembro del equipo, sobre el selector de rol.
- Al crear o editar un grupo, sobre el campo **Rol de grupo**.

El acceso es aditivo entre la ficha del miembro y sus grupos: si cualquiera de los grupos a los que pertenece tiene una aplicación habilitada, el miembro la ve, aunque en su ficha individual esa casilla esté apagada. Para quitarle una aplicación tienes que apagarla en su ficha y también en todos los grupos que se la entregan.

Deshabilitar una aplicación no le quita el rol al miembro: el rol sigue asignado, pero la plataforma le descuenta los permisos de esa aplicación, así que deja de ver esa sección del panel aunque su rol se los diera.

:::tip Tip
Algunas casillas se marcan solas y quedan deshabilitadas según el rol de cuenta seleccionado. En la pestaña **Acceso** de un miembro, el dueño de la cuenta tiene fijas las cuatro aplicaciones y el rol **Default admin** deja fijas **Content**, **Channels** y **Customers**. En el formulario de un grupo, **Default admin** deja fijas las cuatro.
:::

### Asignar un rol por cuenta

Para asignar un rol en el contexto de cuenta, sigue estos pasos:

1. Ve a la sección "Equipo" en la plataforma Modyo.
2. Haz click en el perfil del usuario al que deseas cambiar el rol.
3. Ingresa a la pestaña "Acceso".
4. En **Rol**, selecciona el rol de cuenta que deseas asignar al usuario. Los roles de sitio, espacio y reino se asignan desde el equipo de cada uno.
5. Da click en el botón **Guardar** para confirmar los cambios.


