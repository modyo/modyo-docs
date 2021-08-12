---
search: true
---

# Usuarios y roles

## Equipo

Todos los usuarios internos de la plataforma conforman el equipo, y cada miembro de este puede tener un rol específico que cumplir para aprovechar todo el potencial del sistema.

Para crear un usuario interno, debes hacer click en el botón superior y completar los campos. Una vez creado se le envía la invitación de registro por email, puedes escoger si enviarle su contraseña de ingreso en el mismo mensaje.

Para chequear a todos los usuarios, puedes filtrar por su estado y por los roles que tienen asignados para ocupar en la plataforma.

Si quieres desactivar un usuario interno, debes hacer click en el botón de acciones que se encuentra a la derecha del mismo. En caso de que quieras editar sus datos, puedes usar el mismo botón, o hacer click sobre el nombre del mismo.

### Editar usuario

Al entrar a la vista de edición de un usuario interno, podrás ver en la pestaña principal un listado de todas sus acciones desde que se registró e ingresó por primera vez a la plataforma.

El resto de las pestañas pueden incluír información visible o modificable de un usuario, entre ellas están:

- Sitios (a los que tiene acceso)
- Rol
- Credenciales
- Accesos personalizados a la API
- Datos generales

## Grupos

Los grupos te permiten agilizar el control de acceso a los distintos contextos de Modyo, de tal manera que puedes asignar un rol predeterminado a un contexto (cuenta, espacios, realms o sitios) a múltiples usuarios a la vez y luego añadir ese grupo de usuario a distintos contextos, permitiendo que todos los usuarios obtengan el rol del grupo en el contexto asociado.

Para crear un grupo, dirígete a la sección "Grupos" de la configuración de la cuenta, asígnale un nombre, rol y comienza a añadir usuarios al grupo. Puedes modificar el nombre, rol y usuarios que pertenecen al grupo una vez que guardes los cambios.

Además, desde la sección de "Grupos" del perfil de cada miembro del equipo, puedes añadir o remover al usuario de los grupos existentes.

:::tip Tip
Debes tener en consideración que si un usuario ya tiene un rol asociado en un contexto (cuenta, espacio, realm o sitio) y lo añades a un grupo con un rol de mayor nivel de privilegios, el usuario obtendra el rol de mayor privilegios entre el rol propio y el del grupo.
:::

## Roles

Los roles son una característica esencial de cada uno de los usuarios internos de la plataforma, ya que te permiten optimizar el flujo de trabajo que tiene cada uno de ellos.

Modyo tiene 11 roles predeterminados con distintas funciones por contexto que te permitirán distribuir y controlar quien tiene acceso a que secciones de cada contexto de la plataforma.

### Roles predeterminados

Modyo asigna por defecto roles predeterminados, ordenados según el contexto o sección en la que se ocupan.

Los roles predeterminados que existen son, según contexto:

#### Roles por cuenta:

- **Default user**: Tiene todos los permisos existentes. menos la edición de la configuración de cada contexto. Debe se invitado a cada contexto para poder acceder a sus funcionalidades.
- **Default admin**: Tiene todos los permisos existentes, pero debe ser invitado a cada contexto para poder acceder a sus funciones.
- **Owner**: Tiene todos los perimsos existentes y puede acceder a todos los contextos sin necesidad de ser invitado a ellos.

#### Roles por sitio:

- **Site developer**: Sólo puede editar recursos (no puede publicar, eliminar, hacer rollback ni editar la configuración).
- **Site reviewer**: Es un site admin pero sin edición de la configuración del sitio.
- **Site admin**: Tiene todos los permisos a nivel de un sitio, pero no puede crear nuevos sitios.

#### Roles por espacio:

- **Space writer**: Sólo puede editar contenido (no puede publicar, eliminar, hacer rollback ni editar la configuración).
- **Space editor**: Es un space admin pero sin edición de la configuración del space, no tiene permisos sobre los assets ni puede crear tipos.
- **Space admin**: Tiene todos los permisos a nivel de un space, pero no puede crear nuevos spaces, puede crear y eliminar assets.

El usuario más importante tendrá el rol de Default Admin o Administrador, quien tendrá todas las funciones habilitadas para manejar la plataforma y los sitios.

### Acceso a las aplicaciones:
Dado que contamos con roles que permiten acceder a todas las aplicaciones sin restricción alguna, Modyo permite restringir acceso a ciertas aplicaciones mediante la configuración del miembro del equipo, de esta forma, puedes darle a un usuario acceso total (Owner) pero solamente en la aplicación de channels.

### Asignar un rol por cuenta

Para asignar un rol en el contexto de cuenta, debes ir a la sección de Equipo y hacer clic en el perfil del usuario que se quiere cambiar. Después ingresar a la pestaña Rol y seleccionar el rol que se desee asignar al usuario.
