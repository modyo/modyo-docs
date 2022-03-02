---
search: true
---

# Perfil de usuario

El perfil de usuario es el lugar central donde los usuarios pueden encontrar los distintos sitios de la cuenta, las notificaciones, y la vista para modificar su perfil como su nombre, correo, campos personalizados, y su suscripción a las campañas de correo.

### Sitios

Muestra el listado de sitios habilitados de la cuenta, de tal forma que el usuario pueda encontrar fácilmente todos los canales digitales asociados a la cuenta.

:::tip Tip
Puedes esconder esa sección del perfil haciendo uso de CSS en la configuración de customers, sección apariencia.
:::

### Notificaciones

Cada usuario puede acceder a sus notificaciones directamente desde el perfil, listando en la parte superior las notificaciones no leídas, y a continuación las notificaciones leídas. Ambos listados están ordenados desde la mas reciente a la más antigua. 

Al hacer click en una notificación, se mostrará el contenido completo de esta y se marcará como leída. 

### Editar de perfil

En esta sección, cada usuario puede modificar los datos de su perfil, dependiendo de la [configuración de customers](/es/platform/customers/realms.html#configuracion-de-customers), cada usuario podrá modificar:

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

- Notificaciones: `/realms/{realm_uid}/notifications`
- Información de usuarios: `/realms/{realm_uid}/me`
- Eventos: `/realms/{realm_uid}/events`

### Tokens delegados

Al habilitar la opción de [**Mostrar información de delegación**](/es/platform/core/identity-providers.html) en tus proveedores de identidad, al hacer uso de la API `/realms/{realm_uid}/me`, obtendrás un JSON adicionado con información de tokens delegados parecido a este:

``curl -X GET test.miModyo.com/api/realms/miRealm/me``

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