---
search: true
sidebarDepth: 3
---

# Usuarios

## Usuarios

En esta sección puedes ver y modificar los usuarios externos del sistema. Estos usuarios son aquellos que se registran en la plataforma, acceden a los sitios de Modyo, responden a formularios y pueden recibir campañas de correo.

### Sobre la interfaz

La vista principal muestra una tabla con todos los usuarios registrados en la plataforma, paginada en caso de tener más de 30 registros.

Usa los filtros en la parte superior de la tabla para encontrar grupos de usuarios rápidamente. Los filtros disponibles son:

- **Estado:** Usuarios activos e inactivos.
- **Verificación:** Usuarios que han confirmado sus datos en la plataforma.
- **Segmentos**: Usuarios que pertenecen a un [segmento](/es/platform/customers/segments.html) específico.
- **Etiquetas:** Usuarios asignados etiquetas específica en la plataforma.
- **Búsqueda:** Filtra usuarios por nombre, apellido, email o nombre de usuario.

Puedes ordenar los usuarios, en la tabla, por nombre, fecha de inscripción, fecha de último ingreso a la plataforma o por cantidad de sesiones que han iniciado, haciendo click en las cabeceras de las columnas.

Para acciones masivas, marca la casilla junto al nombre de uno o más usuarios y haz click en el botón **Bulk Actions** debajo del listado de usuarios, para:

- **Desactivar:** Desactivar usuarios.
- **Activar:** Activar usuarios.
- **Exportar:** Exportar la lista de usuarios en formato Excel o CSV.
- **Agregar o eliminar tags:** Crea nuevas etiquetas y asigna o elimina etiquetas existentes de los usuarios seleccionados.

### Añadir un usuario

Para agregar un nuevo usuario, haz click en el botón **+ Nuevo Usuario** en la parte superior derecha de la pantalla y completa los siguientes campos:

- **Nombre:** **[Requerido]** Nombre legal del usuario.
- **Apellido**
- **Apellido materno**
- **Nombre del usuario:** **[Requerido]** Nombre dentro de la plataforma.
- **Email** **[Requerido]**
- **Contraseña:** **[Requerido]** Debe contener al menos 8 caracteres.
- **Confirmación de la contraseña:** **[Requerido]**
- **Tags:** Etiquetas para identificar al usuario.

:::tip Tip
Para enviar la contraseña al correo del usuario, marca la casilla debajo del campo de correo electrónico. El usuario puede cambiar la contraseña una vez que acceda a la plataforma.
:::

Para agregar campos adicionales al formulario de nuevos usuarios o seleccionar un avatar por defecto para aquellos usuarios sin avatar, ve a la sección **Regístrate** en la [Configuración de Reino](/es/platform/customers/realms.html#configuracion-de-reino).

Para crear y modificar campos personalizados, dirígete a la sección [Custom Fields](/es/platform/customers/realms.html#custom-fields).


### Ficha de Usuarios

Da click en el menú lateral debajo de la columna de acciones para ver los detalles de un usuario específico o para desactivar al usuario. Selecciona **Ver** para abrir la ficha de ese usuario. En la ficha puedes ver:

#### Perfil
Datos generales del usuario:

- **Avatar del usuario:** Solamente si se ha cargado previamente.
- **Estado dentro de la plataforma:** Activo o inactivo.
- **Fecha de registro en la plataforma**
- **Último ingreso a la plataforma**
- **Número de inicio de sesiones en la plataforma**
- **Estado de verificación de usuario**
- **Segmentos en los que se encuentra incluido** (si están disponibles)

#### Actividad

En esta sección puedes ver un registro de todas las acciones que el usuario ha realizado dentro de la plataforma.

:::warning Atención
Estos registros no se pueden borrar ni editar.
:::

#### Respuestas a formularios

Esta sección te muestra todos los formularios que el usuario ha rellenado en la plataforma. Haz click sobre un formulario para ver las respuestas del usuario en ese formulario. Para conocer más de los formularios, ve a la sección [Formularios](/es/platform/customers/forms.html).

#### Notas

Aquí puedes agregar notas personalizadas acerca de los usuarios. Solo los administradores pueden agregar, ver y eliminar notas.

#### Dispositivos

En esta sección puedes ver todos los dispositivos del usuario que tienen una sesión activa. Un administrador puede cerrar la sesión del usuario remotamente.

#### Opciones adicionales

Da click en el menú de la sección superior derecha para:

* **Editar:** Abre el modal de edición de usuario.

:::tip Tip
Modificar un usuario puede resultar en que se modifique el listado de segmentos a los que pertenece ese usuario.
:::

* **Desactivar:** Desactiva un usuario e impide que pueda iniciar sesión.
* **Eliminar:** Permite eliminar a un usuario. Solamente los administradores pueden eliminar usuarios.

:::tip Tip
Un usuario puede eliminar su cuenta desde las opciones adicionales de su perfil.
:::



===================




## Perfil de usuario

El perfil de usuario es el lugar central donde los usuarios pueden encontrar los distintos sitios de la cuenta, las notificaciones, y la vista para modificar su perfil como su nombre, correo, campos personalizados, y su suscripción a las campañas de correo.

### Sitios

Muestra el listado de sitios habilitados de la cuenta, de tal forma que el usuario pueda encontrar fácilmente todos los canales digitales asociados a la cuenta.

:::tip Tip
Puedes esconder esa sección del perfil haciendo uso de CSS en la configuración de customers, sección apariencia.
:::

### Notificaciones

Cada usuario puede acceder a sus notificaciones directamente desde el perfil, listando en la parte superior las notificaciones no leídas, y a continuación las notificaciones leídas. Ambos listados están ordenados desde la mas reciente a la más antigua.

Al hacer click en una notificación, se mostrará el contenido completo de esta y se marcará como leída.

### Editar perfil

En esta sección, cada usuario puede modificar los datos de su perfil, dependiendo de la [configuración de customers](/es/platform/customers/realms.html#configuracion-de-reino), cada usuario podrá modificar:

* Nombre
* Apellido
* Segundo apellido
* Correo electrónico
* Fecha de nacimiento
* Género
* [Custom fields](/es/platform/customers/realms.html#custom-fields)
* Contraseña

Además, cada usuario puede eliminar definitivamente su cuenta.

:::danger Peligro
La eliminación de la cuenta de usuario es una acción irreversible y los usuarios que ejecuten esta acción deberán registrarse nuevamente para poder acceder.
:::

## API de customers

Puedes acceder a la API de customers en donde podrás obtener y editar la información de reinos y usuarios a través de la URL `account_url/api/customers/docs`. Algunas de las cosas que puedes modificar son:

- Notificaciones: `account_url/api/customers/realms/{realm_uid}/notifications`
- Información de usuarios: `account_url/api/customers/realms/{realm_uid}/me`
- Eventos: `account_url/api/customers/realms/{realm_uid}/events`

### Tokens delegados

Al habilitar la opción de [**Mostrar información de delegación**](/es/platform/core/integrations/identity-providers.html) en tus proveedores de identidad, al hacer uso de la API `account_url/api/customers/realms/{realm_uid}/me`, obtendrás un JSON adicionado con información de tokens delegados parecido a este:

``curl -X GET test.miModyo.com/api/customers/realms/miRealm/me``

```json
{
  "avatar": {
    "id": 100,
    "file_name": "user_avatar.png",
    "url_original": "/user_avatar_original.png",
    "url_small": "/user_avatar_small.png",
    "url_medium": "/user_avatar_medium.png"
  },
  "id": 2332,
  "external_id": "11111111-1",
  "name": "Clifton Feil",
  "first_name": "Clifton",
  "last_name": "Feil",
  "second_last_name": "Smith",
  "email": "test.user@modyo.com",
  "username": "test.user",
  ...
  ...
   "delegated_token":{
      "uuid":"af57d947-69dc-4ed7-b5af-418c957d827f",
      "access_token":"TOKEN",
      "access_token_expires_in":300,
      "access_token_expires_in_datetime":"2021-04-15T21:42:55.995+00:00"
   }
```

:::tip Tip
En caso de no tener habilitada la opción **Mostrar información de delegación**, se mostrará null (vacío).
:::