---
search: true
---

# Equipos y Grupos

## Equipo

Todos los usuarios internos de la plataforma conforman el equipo y cada miembro puede tener un rol específico para aprovechar al máximo el sistema. 

En esta sección puedes crear, editar y desactivar a los usuarios de la plataforma.

### Crear usuario

Para crear un usuario interno, sigue estos pasos:

1. Desde el menú principal, haz click en **Configuración**.
1. Selecciona **Equipo**.
1. Haz click en **+ Nuevo Miembro del Equipo**.
1. Completa los campos de nombre, apellido, nombre de usuario, correo electrónico y contraseña.
1. Haz click en **Guardar**.

:::tip Tip
Si deseas que el nuevo miembro reciba un correo electrónico con los datos de su cuenta en la plataforma, marca la casilla "Enviar contraseña al correo electrónico del usuario".
:::

### Editar usuario

Dentro de la pantalla de edición de usuario, los administradores de la plataforma tienen acceso a las siguientes ventanas:

- Actividad: Muestra el historial de todas las acciones realizadas por el usuario.
- Acceso: Muestra los permisos otorgados al usuario en los distintos módulos en Modyo. Aquí también puedes seleccionar el rol del usuario.
- Acceso a la API: Genera nuevo tokens de acceso para usar tus APIs. Debes generar un token para cada sitio.
- Editar: Modifica los datos del usuario como nombre, correo electrónico y contraseña.
- Grupos: Muestra una lista de todos los grupos a los que pertenece el usuario.
- Dispositivos: Muestra un listado de todos los dispositivos en los que el usuario tiene una sesión activa.  Despliega datos como navegador, sistema operativo, último inicio de sesión y dirección IP. Aquí, además, puedes cerrar la sesión de forma remota para cada dispositivo.

## Grupos

Los grupos te permiten agilizar el control de acceso a los distintos contextos de Modyo. Puedes asignar un rol predeterminado a un contexto (cuenta, espacio, reino o sitio) para múltiples usuarios al mismo tiempo y luego ese grupo de usuarios a diferentes contextos. Esto permite que todos los usuarios obtengan el rol del grupo en el contexto correspondiente.

Además, desde la sección "Grupos" en el perfil de cada miembro del equipo, puedes agregar o eliminar al usuario de un grupo existente.

:::tip Tip
Todos los usuarios que pertenecen a un grupo tendrán el rol del grupo. En caso de asignarle individualmente un rol particular a un miembro del equipo, el rol con más privilegios toma precedencia.
:::

### Crear un grupo

Para crear un grupo, sigue estos pasos:

1. Desde Modyo Platform haz click en **Configuración** 
1. Daz click en **Grupos**. 
1. Haz click en **+ Nuevo Grupo**.
1. Escribe el nombre del grupo y selecciona el **Rol del Grupo**.
1. Selecciona del menú desplegable debajo de **Agregar Usuarios**, los usuarios que formarán parte de este grupo.
1. Da click en **Crear**.

Una vez creado un grupo, lo puedes ver en el panel de Grupos. Además, al editar un usuario podrás agregarlo o, si ya es parte de ese grupo, eliminarlo. 


## Roles

Puedes aplicar roles en los distintos módulos para personalizar la experiencia de tu equipo de trabajo. Cada rol se aplica de manera específica a un módulo en particular. Por ejemplo, puedes seleccionar a los administradores de un espacio o a los miembros que pueden interactuar con el CLI en algún sitio.

Modyo tiene 10 roles predeterminados con diferentes funciones para cada contexto, lo que te permite distribuir y controlar el acceso a las distintas secciones de cada contexto de la plataforma.

### Roles predeterminados

Modyo asigna roles predeterminados según el contexto o sección en la que se utilizan.

Los roles predeterminados que existen, según contexto, son:

#### Roles por cuenta:

- **Default user**: Tiene todos los permisos existentes,  excepto la edición de la configuración de cada contexto. Debe ser invitado a cada contexto para poder acceder a sus funcionalidades.
- **Default admin**: Tiene todos los permisos existentes, pero debe ser invitado a cada contexto para poder acceder a sus funciones. A nivel de cuenta de Modyo Platform, solo puede ver variables globales y actividad.
- **Owner**: Tiene todos los permisos existentes y puede acceder a todos los contextos sin necesidad de ser invitado a ellos.

#### Roles por sitio:

- **Site viewer**: Puede ver entradas, ver diferencias entre versiones y puede dejar comentarios. También puede acceder a la vista de sincronización y ver los cambios pendientes de sincronizar. Sin embargo, este rol no tiene autorización para realizar ninguna acción que implique un cambio en la plataforma. 
- **Site developer**: Solamente puede editar recursos. No puede publicar, eliminar, hacer rollback o editar la configuración.
- **Site developer CLI**: Tiene los mismos permisos que Site developer; en adición, puede interactuar con modyo-cli.
- **Site reviewer**:  Tiene todos los permisos del rol de site admin, excepto los permisos para editar la configuración del sitio.
- **Site admin**: Tiene todos los permisos a nivel de un sitio, pero no puede crear nuevos sitios.

#### Roles por espacio:

- **Space viewer**: Este rol permite ver el contenido de un espacio, ver diferencias entre versiones y dejar comentarios. Su acceso está limitado a la visualización y participación mediante comentarios, no puede realizar modificaciones en el contenido o realizar acciones que afecten la configuración.
- **Space writer**: Este rol solo puede editar el contenido en un espacio. No tiene permisos para publicar, eliminar, realizar rollback o editar la configuración.
- **Space editor**: Tiene todos los permisos de un space admin, excepto permisos para editar la configuración del espacio. No tiene permisos sobre los assets y no puede crear tipos.
- **Space admin**: Este rol tiene todos los permisos a nivel de un espacio, pero no puede crear nuevos espacios. Puede crear y eliminar assets.

El usuario más importante tendrá el rol de Default Admin o Administrador. Este rol tiene todas las funciones habilitadas para gestionar la plataforma y los sitios.

#### Roles por reino:

- **Realm User**: Este rol puede añadir usuarios, crear, modificar y enviar a revisión campañas, formularios y segmentos.
- **Realm Admin**: Puede acceder a todas las configuraciones y secciones del reino. Además, puede añadir y eliminar usuarios y miembros del equipo, así como eliminar el reino.

### Acceso a las aplicaciones:
Modyo tiene roles que permiten acceder a todas las aplicaciones sin restricción alguna; por ello, Modyo permite restringir el acceso a ciertas aplicaciones configurando los roles de los miembros del equipo. De esta manera, es posible otorgar a un usuario un acceso total (Owner) solo en la aplicación de Channels, mientras restringe su acceso a otras aplicaciones.

### Asignar un rol por cuenta

Para asignar un rol en el contexto de cuenta, sigue estos pasos: 

1. Ve a la sección "Equipo" en la plataforma Modyo.
2. Haz click en el perfil del usuario al que deseas cambiar el rol.
3. Ingresa a la pestaña "Acceso".
4. Selecciona el rol que deseas asignar al usuario y en qué espacio.
5. Da click en el botón **Guardar** para confirmar los cambios.  
