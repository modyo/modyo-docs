---
search: true
---

# Perfil de usuario

El perfil de usuario es el lugar central donde los usuarios pueden encontrar los distintos sitios de la cuenta, las notificaciones, y la vista para modificar su perfil como su nombre, correo, campos personalizados, y su suscripción a las campañas de correo.

### Sitios

Muestra el listado de sitios habilitados de la cuenta, de tal forma que el usuario pueda encontrar fácilmente todos los canales digitales asociados a la cuenta.

:::tip Tip
Puedes esconder esa sección del profile haciendo uso de CSS en la configuración de customers, sección apariencia.
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

## API de perfil

Puedes acceder a la API de perfil de usuarios a través de la URL `account_url/api/profile`, donde podrás hacer uso de los endpoints: 

* Documentación técnica de la API: `account_url/api/profile/docs`
* Notificaciones: `account_url/api/profile/notifications`
* Info del usuario: `account_url/api/profile/me`