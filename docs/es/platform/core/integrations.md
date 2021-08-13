---
search: true
---

# Integraciones

Una de las funcionalidades de Modyo para facilitar la interacción de otros sistemas de usuarios con Modyo son las integraciones con distintos servicios de autenticación.

Actualmente la plataforma es compatible con:

- [Facebook](/es/platform/core/integrations/facebook.html)
- [Google](/es/platform/core/integrations/google.html)
- [LDAP](/es/platform/core/integrations/ldap.html)
- [SAML](/es/platform/core/integrations/saml.html)
- [OAuth2](/es/platform/core/integrations/oauth2.html)
- [OpenID Connect](/es/platform/core/integrations/oidc.html)

Recuerda tener a mano todos los datos y certificados que se te exigen antes de cambiarlos o integrar algún servicio, para que no se produzcan problemas con el ingreso general de los usuarios.

:::tip Tip
Desde Modyo 9 en adelante, los usuarios (Customers>Usuarios) y administradores (Settings>Equipo) están separados lógicamente. Ambos cuentan con soporte para todas las integraciones compatibles con la plataforma, pero con inicios de sesión distintos, por lo que puedes configurar, por ejemplo, Facebook para tus usuarios y Oauth2 para tus administradores.
:::

## Webhooks

La plataforma también permite el uso de Webhooks para ciertos eventos específicos dentro de tu cuenta. Para ello, se deben habilitar y configurar desde la sección webhooks en la configuración de la cuenta.

Un webhook es una acción _POST_ automática a una URL determinada con información determinada.

Para habilitarlos, debes checkear la parte superior de la página y después proceder a crear todos los webhooks que quieras.

Los webhooks se pueden crear a partir de acciones de sitios o espacios.

### Crear un webhook

Llama a tus canales de gestión a través de un webhook.

Para crear un webhook, sigue estos pasos:

1. Desde la página de administración, haz click en Configuración, luego selecciona Webhooks.
2. Haz click en crear Webhook.
3. Escribe el nombre y la URL a la cual quieres llamar.
4. Selecciona los sitios o espacios que quieras que activen el webhook.
5. Selecciona el tipo de log que activará el webhook.
6. Agrega los headers necesarios para la llamada. 
7. Haz click en guardar.

Nota: El webhook es llamado a través de un POST cuando se genera un log del tipo seleccionado. Una vez creado el webhook, podrás enviar una notificación de prueba con información falsa para probar que tu URL está recibiendo correctamente los POSTs desde Modyo.

### Ejemplo de Carga Útil

``` javascript
{
    "id": 29928694,
    "account_id": 13,
    "site_id": 1025,
    "user_id": 13,
    "type": null,
    "value_1": null,
    "value_2": null,
    "value_3": null,
    "request_ip": "127.0.0.1",
    "request_user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
    "loggeable_id": 1025,
    "loggeable_type": "Site",
    "options":
    {
        "title": "Site 2019"
    },
    "created_at": "2021-05-18T21:14:33.000Z",
    "user_type": "AdminUser",
    "space_id": null,
    "log_type_id": 750,
    "realm_id": null,
    "trigger_uid": "site_disabled_log",
    "trigger_name": "Site disabled log",
    "trigger_entity": "Site",
    "trigger_entity_id": 1025,
    "trigger_entry_uuid": null,
    "trigger_content_uuid": null,
    "trigger_entry_space_uid": null
}
```

Los webhooks de sitio son:

* Respuesta del formulario creado
* Respuesta de formulario actualizada
* Página creada
* Página eliminada
* Página publicada
* Página despublicada
* Página actualizada
* Inicio de sesión
* Cierre de sesión
* Navegación aprobada
* Navegación publicada
* Navegación enviada a revisión
* Navegación actualizada
* Perfil actualizado
* Sitio creado
* Sitio eliminado
* Sitio desactivado
* Sitio habilitado
* Sitio oculto
* Sitio puesto en desarrollo
* Sitio visible
* Sitio actualizado
* Templates aprobados
* Templates enviados para su revisión
* Templates actualizados
* Tema instalado
* Tema restablecido
* Tema actualizado
* Widget aprobado
* Widget clonado
* Widget creado
* Widget publicado
* Widget restaurado
* Widget enviado a revisión
* Widget despublicado
* Widget actualizado

Los webhooks de espacios son:

* Categoría creada
* Categoría eliminada
* Categoría actualizada
* Entrada aprobada
* Entrada creada
* Entrada publicada
* Entrada enviada a revisión
* Entrada despublicada
* Entrada actualizada
* Espacio creado
* Espacio actualizado
* Tipo creado
* Tipo eliminado
* Tipo actualizado

## Facebook

Para poder realizar una integración con Facebook, deberás contar con:

- API Key
- Código secreto de aplicación
- Callback URL `/realms(/:realm_uid)/auth/facebook/callback`

Estos valores los podrás obtener creando una aplicación de Facebook con permisos para iniciar sesión. Puedes aprender más sobre como crear y configurar una aplicación de Facebook en su [Documentación oficial](https://developers.facebook.com/docs/facebook-login/).

## Google

Para poder integrar el inicio de sesión de Google con Modyo, deberás contar con:

- ID de aplicación
- Clave

Estos valores los podrás obtener luego de crear una aplicación en Google con permisos para inicio de sesión. Puedes aprender más sobre como crear y configurar una aplicación de Google en su [Documentación oficial](https://developers.google.com/identity/sign-in/web/sign-in).

Debes tener en cuenta que al final del formulario se encuentra disponible la URL de callback (_Callback  URI_). Es necesario usar esa URL en la aplicación o proyecto que crees en Google para poder completar el flujo de inicio de sesión correctamente.

Además de los valores necesarios, puedes configurar algunos datos extra para controlar el comportamiento del inicio de sesión con Google. Si habilitas la opción _Restringir dominios_, podrás usar dos campos extra:

- **Ejemplo de dominio**: Serán los dominios que se muestren como sugerencia al momento de estar iniciando sesión en Google.
- **Dominios admitidos**: Si el dominio del correo que el usuario ingresó al momento de iniciar sesión en Google no está dentro de este listado, entonces el inicio de sesión no será válido y el usuario será redirigido a la vista de inicio de sesión de Modyo sin una sesión activa.

## LDAP

Para poder integrar un inicio de sesión con LDAP en Modyo, necesitarás los siguientes datos de tu proveedor de identidad:

- **Nombre del servicio**: Se mostrará bajo el ícono o logo de inicio de sesión del servicio.
- **Host**: Dirección en la cual se encuentra disponible el servicio de inicio de sesión LDAP
- **Puerto**: Puerto con que se debe comunicar Modyo y tu servicio de identificación LDAP.
- **Base**: Base de búsqueda, compuesta por múltiples objetos separados por comas.
- **UID**: Nombre del campo que usa el servicio LDAP para identificar a los usuarios como atributo único.
- **Bind DN**: Credenciales por defecto.
- **Password**
- **Método**: Método de autenticación con el servicio de identidad LDAP.
- **Logo**: No es requerido, pero si quieres que aparezca junto al nombre del servicio, por ejemplo, el logo de tu empresa, puedes subir una imagen en este campo.

## OAuth2

Para poder integrar un inicio de sesión con OAuth2 en Modyo, necesitarás los siguientes datos de tu proveedor de identidad:

- Nombre del servicio
- Descripción del servicio
- URL de autenticación: URL del servicio de autenticación OAuth2
- ID de cliente
- Clave (secret)
- Scope: Si tu servicio de autenticación OAuth2 usa múltiples espacios o ambientes para separar a los usuarios y quieres usar uno en específico en esta integración, deberás definirlo en este campo.
- Campo para inicio de sesión: Podrás elegir entre usar el correo de los usuarios de Modyo, o su nombre de usuario. Esta opción es útil si tu proveedor de autenticación OAuth2 utiliza, por ejemplo, un campo numérico y no un email como identificador.
- Placeholder para el inicio de sesión: Texto que se mostrará en el campo de identificación como placeholder si el usuario no ha rellenado el campo
- Usar SSL: Habilitar esta opción si tu servicio de autenticación OAuth2 usa una capa de sockets segura (SSL: _Secure Sockets Layer_)

### OpenID Connect

OpenID Connect (OIDC) es una capa de autenticación y framework que funiona sobre OAuth 2.0. Su estándar está controlado por la [OpenID Foundation](https://openid.net/connect/).

:::warning Atención
Para el correcto funcionamiento de una integración con OpenID Connect, es necesario que el Provider OIDC tenga un certificado SSL al día, el cliente de Modyo utiliza TLS 1.3 y OpenSSL Security Level 2 [(ref)](https://www.openssl.org/docs/man1.1.1/man3/SSL_CTX_get_security_level.html).
:::
:::warning Atención
La API para obtención de access tokens delegados vía  `/auth/openidc/access_token` está obsoleta y ha sido reemplazada por `/api/profile/me`.
:::

### Usando Keycloak

Keycloak es un identity provider certificado de OpenID Connect que implementa la mayoría de las funcionalidades de la integración OpenID Connect de Modyo.

### Registrar una nueva aplicación cliente

1. Accede a la consola administrativa, por ejemplo [https://keycloak.example.com/auth/](https://keycloak.example.com/auth/) y agrega un nuevo realm.
2. Agrega una aplicación cliente usando `openid-connect` como **Client Protocol** para la integración con Modyo.
3. Configura **Access Type** `confidential` y deja habilitado solo el **Standard Flow**.
4. Configura las **Valid Redirect URIs** con las URLs de callback y logout de la cuenta Modyo, usando las URLs relativas a la cuenta `/auth/openidc/callback` y `/logout*`.

### Configuración de la integración

La siguiente configuración es válida tanto para las integraciones de usuarios de Team como de Customer.

1. Accede a **Configuración/Configuración de customers > Integraciones > OpenID Connect** y completa **Client ID** y **Secret** con el nombre del cliente y las credenciales que aparecen en la tab **Credentials** del cliente en Keycloak.
2. En Issuer, rellena con la URL del realm, por ejemplo, para el realm my-realm la URL es `https://keycloak.example.com/auth/realms/my-realm`.
3. Haz click en **Lanzar servicio de descubrimiento**. Así se completará la mayoría de las configuraciones.
4. Configura los **Scopes** con los scopes requeridos para la aplicación. Usa `openid,email,profile` en caso de que no cuentes con scopes personalizados.

### Configuraciones opcionales de la integración

Al momento de realizar una integración específica, Modyo te permite habilitar ciertas configuraciones para controlar las siguientes características de sesión:

|                                                                     |                                                                                                                                                                                                                        |
|---------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Habilitar refresh token**                                         | Habilita el refresco de tokens administrado por Modyo. Los access tokens serán renovados automáticamente por la plataforma si el usuario mantiene actividad en el sitio y cuenta con un refresh token válido.          |
| **Habilitar cierre de sesión**                                      | Habilita el cierre de sesión en el provider al cerrar la sesión en Modyo. Esto permite cerrar efectivamente la sesión, obligando al usuario a identificarse nuevamente en Keycloak y deshabilitando la experiencia SSO. |
| **Habilitar revocación de token**                                   | No soportado por Keycloak                                                                                                                                                                                              |
| **Habilitar sincronización de claims al momento de iniciar sesión** | Habilita la sincronización de claims OpenID Connect con custom fields en Modyo. Más información en  [Sincronización de claims](#sincronizacion-de-claims).                                                             |
|                                                                     |                                                                                                                                                                                                                        |

### Usando Azure Active Directory

Azure Active Directory es un servicio de identidad cloud de Microsoft Azure que permite implementar un esquema híbrido de identidad basado en directorios on-premise con SSO en la nube.

### Registrar nueva aplicación cliente

1. Inicia sesión en [Azure Portal](https://portal.azure.com/).
2. En la barra de búsqueda, busca por **Azure Active Directory**, y luego selecciona **App registrations > New registration**.
3. Completa la siguiente información
   * **Name**: Usa un nombre significativo, por ejemplo, `modyo-production`.
   * **Supported account types**: Usa **"Accounts in any organizational directory and personal Microsoft accounts"** para incluir cuentas personales de Microsoft. Puedes encontrar más información al respecto [aquí](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps).
   * **Redirect URI**: Usa la URL relativa a la cuenta `/auth/openidc/callback`.
4. Una vez creada la aplicación, ve a **App registrations > modyo-production** y obtiene el **Application ID** y **Directory ID**.
5. Ve a **App registrations > Certificates & secrets** y crea un nuevo secreto con el botón **New client secret**.

### Configuración de la integración

La siguiente configuración es válida tanto para las integraciones de usuarios de Team como de Customer.

1. Accede a **Configuración/Configuración de customers > Integrations > OpenID Connect**, y completa **Client ID** y **Secret** con las credenciales obtenidas del portal de Azure.
2. En la consola de Azure ir a **App registrations > Endpoints** y obtener URLs para **Authorization endpoint** y **Token endpoint**. Visitar el OpenID Connect metadata document y conseguir **Userinfo endpoint** y **End session endpoint**.
3. Configura **Scopes** con los scopes requeridos para la aplicación. Usa `openid,email,profile` en caso de que no contar con scopes personalizados.
4. Habilita características opcionales de la integración.
   |                                        |                                                                                                                                                                                                                        |
   |----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | **Habilitar refresh token**                   | Habilita el refresco de tokens administrado por Modyo. Los access tokens serán renovados automáticamente por la plataforma si el usuario mantiene actividad en el sitio y cuenta con un refresh token válido.          |
   | **Habilitar cierre de sesión**                   | Habilita el cierre de sesión en el provider al cerrar la sesión en Modyo. Esto permite cerrar efectivamente la sesión, obligando al usuario a identificarse nuevamente en Azure AD, y deshabilitando la experiencia SSO. |
   | **Habilitar revocación de token**                | No soportado por Azure AD|
   | **Habilitar sincronización de _claims_ al momento de iniciar sesión** | Habilita la sincronización de _claims_ OpenID Connect con custom fields en Modyo.                                                                                         |

### Sincronización de _claims_

Modyo permite sincronizar atributos y otras propiedades de los usuarios de Customers a través de _claims_ estándar y adicionales de OpenID Connect.

1. En **Clients > Mappers** crea un nuevo **Protocol Mapper** con el atributo o propiedad del usuario. Asegúrate de que **Add to userinfo** esté habilitado.
2. En **Customers >  Configuración de customers > Custom fields** agrega un nuevo **Custom Field** con un tipo de datos equivalente al claim.
3. En **Customers > Configuración de customers > Integrations > OpenID Connect** habilita **Enable _claims_ synchronization on login** y agrega _claims_ mappings para cada uno de tus _claims_.

## SAML

Para poder integrar un inicio de sesión con SAML en Modyo, necesitarás los siguientes datos de tu proveedor de identidad:

- Nombre del servicio
- Emisor
- URL de del servicio proveedor de identidad
- Parámetros de la URL del proveedor de servicio de identidad
- Certificado del proveedor de identidad
- Firma del certificado del proveedor de identidad
- Formato del identificados de nombre
- URL de callback del servicio: Por defecto esta URL es `account_url/admin/auth/saml/callback`
- Logo: AL igual que en LDAP, esta imagen se mostrará como logo del servicio junto al nombre del servicio en el formulario de inicio de sesión.