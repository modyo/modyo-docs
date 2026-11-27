---
search: true
---

# Perfil de Usuario

El **perfil de usuario** es el espacio donde cada usuario puede:

- Gestionar sus notificaciones.
- Editar su información personal, como nombre, correo, campos personalizados y suscripciones a campañas de correo.

Este perfil está disponible para los usuarios al autenticarse o acceder a la sección de edición de su información.

## Actividad

En esta sección, el usuario ve sus 20 acciones más recientes en la plataforma, sin las que hizo un administrador mientras lo [impersonaba](/es/platform/customers/users.html#impersonado). Para recorrer el historial completo, usa [Eventos del usuario](/es/platform/customers/api.html#eventos-del-usuario) de la API de Customers.

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

Todas las vistas de sesión y de perfil de un reino cuelgan del mismo prefijo, formado por la URL de tu cuenta y el identificador del reino: `https://my_account.modyo.com/realms/my_realm/`. Si el reino tiene un [dominio personalizado](/es/platform/customers/settings.html#dominios), el prefijo es `https://<tu-dominio>/realms/`, sin el identificador.

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
No existe un drop de Liquid que entregue la URL de registro: ármala con el identificador del reino, que tienes en **site.realm_slug**, como se muestra en [Registrarse y volver a una página](/es/platform/customers/profile.html#registrarse-y-volver-a-una-pagina). Para el inicio y el cierre de sesión y para el perfil sí tienes **site.login_url**, **site.logout_url** y **site.profile_url**, que puedes revisar en [Objetos](/es/platform/channels/liquid-markup/objects.html#site).
:::

### Parámetros de redirección

- `site`: Identificador del sitio desde el que llegó el usuario. La plataforma lo agrega automáticamente cuando el usuario entra desde un sitio y lo usa para devolverlo ahí al terminar.
- `redirect_uri`: URL a la que se envía al usuario después de iniciar sesión. Las rutas del reino que lo aceptan son `/login`, `/signup`, `/otp_login`, `/activate/:activation_code` y `/session/access/:token`.
- `redirect_to`: URL a la que se envía al usuario después de cerrar sesión en `/logout`. Es también el parámetro que usa la ruta `/login` de un sitio, como se explica en [Redireccionar Login](/es/platform/customers/settings.html#redireccionar-login).

La URL de destino tiene que ser una ruta relativa, apuntar a un sitio de tu misma cuenta o a uno de los dominios personalizados del reino. Si no lo es, la plataforma la descarta y aplica la redirección definida en **Después de iniciar sesión, redirigir a** de la [Configuración de reino](/es/platform/customers/settings.html#general).

### Registrarse y volver a una página

En `/signup`, el momento en que el usuario llega a la URL de `redirect_uri` depende de la opción **Activación de la cuenta** de la [Configuración de reino](/es/platform/customers/settings.html#general):

- **Directa**: al crear la cuenta, porque queda con la sesión iniciada.
- **Activación por OTP**: al ingresar el código de un solo uso que recibe.
- **E-mail de activación**: al activar la cuenta desde el enlace del correo, siempre que lo abra en el mismo navegador en que se registró. Mientras tanto, ve la pantalla que confirma el registro.
- **Moderada**: no vuelve al terminar el registro, porque no puede iniciar sesión hasta que un administrador active su cuenta. Para llevarlo a la página en ese momento, usa `redirect_uri` en el enlace de inicio de sesión.

Si el usuario ya tiene la sesión iniciada, `/signup` lo envía directamente a la URL de `redirect_uri`.

Por ejemplo, para invitar a un visitante sin sesión a registrarse desde una página de originación y devolverlo a ella:

```liquid
{% unless user %}
  <a href="{{ account.url }}/realms/{{ site.realm_slug }}/signup?redirect_uri={{ origination.url | url_encode }}">Regístrate para continuar</a>
{% endunless %}
```

`origination.url` entrega la URL absoluta de la página de originación, y el filtro `url_encode` la codifica para que viaje completa como valor del parámetro. Si el reino tiene un dominio personalizado, usa el prefijo de ese dominio, como se indica en [Rutas del reino](/es/platform/customers/profile.html#rutas-del-reino).

Si no necesitas armar el enlace, elige **Página de registro** en **Cuando se requiere iniciar sesión, redirigir a** de la [Configuración de reino](/es/platform/customers/settings.html#general). Así, el visitante sin sesión que intenta acceder a contenido que requiere autenticación llega al registro y, tras autenticarse, vuelve a la URL a la que intentaba acceder.
