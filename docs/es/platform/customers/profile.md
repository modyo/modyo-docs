---
search: true
---

# Perfil de Usuario

El **perfil de usuario** es el espacio donde cada usuario puede:

- Gestionar sus notificaciones.
- Editar su información personal, como nombre, correo, campos personalizados y suscripciones a campañas de correo.

Este perfil está disponible para los usuarios al autenticarse o acceder a la sección de edición de su información.

## Actividad

En esta sección, puedes ver un registro de todas las acciones realizadas por el usuario en la plataforma.

:::warning Atención
Estos registros no se pueden borrar ni editar.
:::

## Notificaciones

Cada usuario puede acceder a sus notificaciones directamente desde el perfil, listando en la parte superior las notificaciones no leídas, y a continuación las notificaciones leídas. Ambos listados están ordenados desde la mas reciente a la más antigua.

Al hacer click en una notificación, se mostrará el contenido completo de esta y se marcará como leída.

## Editar Información

En esta sección, cada usuario puede modificar los datos de su perfil, dependiendo de la [configuración de reino](/es/platform/customers/settings), cada usuario podrá modificar:

- Nombre
- Apellido
- Segundo apellido
- Correo electrónico
- Móvil
- Imagen de Usuario
- Fecha de Nacimiento
- Género: **Masculino**, **Femenino**, **No binario**, **Otro (no listado)** o **Prefiero no decir**
- Idioma
- [Custom fields](/es/platform/customers/settings#custom-fields)
- Contraseña
- Gestión de campañas de correo

Además, los usuarios tienen la opción de eliminar su cuenta de manera definitiva.

:::danger Peligro
La eliminación de la cuenta es irreversible. Si un usuario realiza esta acción, deberá registrarse nuevamente para acceder a la plataforma.
:::

## Rutas del reino

Todas las vistas de sesión y de perfil de un reino cuelgan del mismo prefijo, formado por la URL de tu cuenta y el identificador del reino: `https://my_account.modyo.com/realms/my_realm/`.

| Ruta | Para qué sirve |
| --- | --- |
| `/login` | Vista de inicio de sesión del reino. |
| `/logout` | Cierre de sesión. |
| `/signup` | Formulario de registro. |
| `/activate/:activation_code` | Activa y verifica la cuenta desde el enlace del correo de activación, y deja al usuario con la sesión iniciada. El enlace caduca a la semana. |
| `/password` | Formulario para pedir la recuperación de la contraseña. |
| `/password/reset/:token` | Define una contraseña nueva desde el enlace que llega por correo. El enlace caduca a los 3 días. |
| `/password/confirm_info/:token` | Confirmación de datos que puede aparecer durante la recuperación; al guardarla, el usuario queda verificado. |
| `/password/change` | Cambio de contraseña de un usuario con sesión iniciada, pidiéndole su contraseña actual. |
| `/reset_password` | Cambio de contraseña obligatorio. Solo es accesible para los usuarios que tienen el cambio pendiente; al resto los devuelve al sitio. |
| `/profile` | Perfil del usuario, con sus notificaciones. |
| `/profile/edit` | Edición de la información del perfil. |
| `/profile/change_email` | Solicitud de cambio de correo. El usuario confirma su contraseña actual y la dirección nueva queda pendiente hasta que la verifica. |
| `/confirm_email/:activation_code` | Confirma la dirección nueva desde el enlace de verificación. El enlace caduca a los 5 minutos. |
| `/profile/delete_user` | Baja definitiva de la cuenta del usuario. |
| `/otp_login` | Vista de ingreso con código de un solo uso, disponible cuando el reino tiene el Soft login habilitado: pide el identificador del usuario en lugar de la contraseña. |
| `/otp_signup` | Envía el código de un solo uso de un registro con Soft login y lleva al usuario a la pantalla del código. |
| `/otp_code` | Pantalla donde el usuario escribe el código de 6 dígitos que recibió. |
| `/session/access/:token` | Inicia la sesión a partir de un token de acceso de un solo uso, que queda invalidado apenas se usa. |

Puedes conocer el detalle del ingreso con código en [Soft login](/es/platform/customers/settings.html#soft-login).

Las rutas de recuperación de contraseña y de cambio de correo tienen además límites antiabuso que pueden hacer que un correo no se envíe o que la sesión del usuario se cierre, sin que la pantalla muestre ningún error. Revisa [Límites de solicitudes y bloqueos](/es/platform/customers/settings.html#limites-de-solicitudes-y-bloqueos).

:::tip Tip
No existe un drop de Liquid que entregue la URL de registro: ármala con el identificador del reino. Para el inicio y el cierre de sesión y para el perfil sí tienes **site.login_url**, **site.logout_url** y **site.profile_url**, que puedes revisar en [Objetos](/es/platform/channels/liquid-markup/objects.html#site).
:::

### Parámetros de redirección

- `site`: Identificador del sitio desde el que llegó el usuario. La plataforma lo agrega automáticamente cuando el usuario entra desde un sitio y lo usa para devolverlo ahí al terminar.
- `redirect_uri`: URL a la que se envía al usuario después de iniciar sesión. Las rutas del reino que lo aceptan son `/login`, `/otp_login`, `/activate/:activation_code` y `/session/access/:token`.
- `redirect_to`: URL a la que se envía al usuario después de cerrar sesión en `/logout`. Es también el parámetro que usa la ruta `/login` de un sitio, como se explica en [Redireccionar Login](/es/platform/customers/settings.html#redireccionar-login).

La URL de destino tiene que ser una ruta relativa o apuntar a un sitio de tu misma cuenta. Si no lo es, la plataforma la descarta y aplica la redirección definida en **Después de iniciar sesión, redirigir a** de la [Configuración de reino](/es/platform/customers/settings.html#general).