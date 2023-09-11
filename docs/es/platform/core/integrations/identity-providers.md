---
search: true
---

# Proveedores de identidad

Una de las funcionalidades de Modyo para facilitar la interacción de otros sistemas de usuarios con Modyo son las integraciones con distintos servicios de autenticación.

Actualmente la plataforma es compatible con:

- [Google](#google)
- [SAML](#saml)
- [OAuth2](#oauth2)
- [OpenID Connect](#openid-connect)
- [Keycloak](#keycloak)
- [Azure Active Directory](#azure-active-directory)

Recuerda tener a mano todos los datos y certificados que se te exigen antes de cambiarlos o integrar algún servicio, para que no se produzcan problemas con el ingreso general de los usuarios.

## Agregar un proveedor de identidad

Para agregar un nuevo proveedor de identidad, sigue estos pasos:

1. Desde el menú principal, expande **Configuración** y haz click en **Proveedores de Identidad**.
1. Haz click en **+ Añadir**.
1. En el dropdown, selecciona la integración que quieres añadir.
1. Agrega la información necesaria para la integración (Nombre, ID, Secreto, etc).
1. Haz click en **Añadir**.

<img src="/assets/img/platform/nuevo-idp.png" alt="Add a new Identity Provider page." width="500px" style="margin-top: 40px; border: 1px solid #EEE;"/>

## Google

Para poder integrar el inicio de sesión de Google con Modyo, deberás contar con:

- ID de aplicación
- Clave

Estos valores los podrás obtener luego de crear una aplicación en Google con permisos para inicio de sesión. Puedes aprender más sobre como crear y configurar una aplicación de Google en su [documentación oficial](https://developers.google.com/identity/sign-in/web/sign-in).

Debes tener en cuenta que al final del formulario se encuentra disponible la URL de callback (_Callback  URI_). Es necesario usar esa URL en la aplicación o proyecto que crees en Google para poder completar el flujo de inicio de sesión correctamente.

Además de los valores necesarios, puedes configurar algunos datos extra para controlar el comportamiento del inicio de sesión con Google. Si habilitas la opción _Restringir dominios_, podrás usar dos campos extra:

- **Ejemplo de dominio**: Serán los dominios que se muestren como sugerencia al momento de estar iniciando sesión en Google.
- **Dominios admitidos**: Si el dominio del correo que el usuario ingresó al momento de iniciar sesión en Google no está dentro de este listado, entonces el inicio de sesión no será válido y el usuario será redirigido a la vista de inicio de sesión de Modyo sin una sesión activa.

## SAML

### Requisitos

Para lograr una conexión exitosa entre SAML y la Modyo, debes configurar los siguientes atributos en el Proveedor de Identidad:

- **givenName** o (En la versión 9.2.22 en adelante también puede ser `givenname`). Corresponde al nombre del usuario.
- **sn** (En la versión 9.2.22 en adelante también puede ser `surname`). Corresponde al apellido del usuario.

Para integrar el inicio de sesión con SAML en Modyo, necesitas los siguientes datos de tu proveedor de identidad:

- **Nombre del servicio**: El nombre que se mostrará en el botón de inicio de sesión.
- **Issuer**: Identificador de la aplicación del IDP. En algunos servicios es requerido agregar el prefijo `spn`:
(Por ejemplo: `spn:13e4ff44-b0c9-4618-b305-2171a24b07f5`).
- **IDP SSO del URL destino**: La URL a la cual se envía la solicitud de autenticación. Esto está en el proveedor de identidad.
- **Parámetros de tiempo de ejecución del IDP SSO del URL destino**: Parámetros opcionales para completar el flujo.
- **IDP Cert**: El certificado del proveedor de identidad en formato PEM. Esto tiene prioridad sobre la opción de huella digital.
- **Huella dactilar del certificado IDP**: La huella digital SHA1 del certificado público del proveedor de identidad.
- **Formato del identificador de nombre**: Se utiliza durante el SSO iniciado por el proveedor de servicio (SP-initiated SSO). Describe el formato del nombre de usuario requerido por la aplicación. Consulta la sección 8.3 de http://docs.oasis-open.org/security/saml/v2.0/saml-core-2.0-os.pdf para otras opciones. Es posible que el proveedor de identidades no permita todas las opciones; si no se especifica, el proveedor puede elegir el formato de identificador de nombre utilizado en la respuesta; comúnmente el correo electrónico, como por ejemplo: `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`
- **URL de Entity ID**: URL provisto por Modyo donde se encuentra el identificador de la aplicación:
   * Admin: `test.modyo.com/admin/auth/saml/metadata`
   * Realms: para configuraciones con realms usa: `test.modyo.com/realms/<tu_uid_del_realm>/auth/saml/metadata`
- **URL de la aserción de servicio de consumidor**: La URL proporcionada por Modyo a la que el proveedor de identidad redirige el flujo.
   * Admin: `test.modyo.com/admin/auth/saml/callback`
   * Realms: para configuraciones con reinos utiliza: `test.modyo.com/realms/<tu_uid_del_realm>/auth/saml/callback`
- **(Opcional) URL de destino de inicio de sesión único de IDP**: La URL de inicio de sesión del proveedor de identidad.

## OAuth2

Para poder integrar un inicio de sesión con OAuth2 en Modyo, necesitarás los siguientes datos de tu proveedor de identidad:

- **Nombre del servicio**
- **Descripción del servicio**
- **URL de autenticación**: URL del servicio de autenticación OAuth2
- **ID de cliente**
- **Clave (secret)**
- **Scope**: Si tu servicio de autenticación OAuth2 usa múltiples espacios o ambientes para separar a los usuarios y quieres usar uno en específico en esta integración, deberás definirlo en este campo.
- **Campo para inicio de sesión**: Podrás elegir entre usar el correo de los usuarios de Modyo, o su nombre de usuario. Esta opción es útil si tu proveedor de autenticación OAuth2 utiliza, por ejemplo, un campo numérico y no un email como identificador.
- **Placeholder para el inicio de sesión**: Texto que se mostrará en el campo de identificación como placeholder si el usuario no ha rellenado el campo
- **Usar SSL**: Habilitar esta opción si tu servicio de autenticación OAuth2 usa una capa de sockets segura (SSL: _Secure Sockets Layer_)

Para crear un cliente OAuth, ve [Cliente OAuth](/es/platform/customers/realms.html#cliente-oauth).


## OpenID Connect

OpenID Connect (OIDC) es una capa de autenticación y framework que funciona sobre OAuth 2.0. Su estándar está controlado por la [OpenID Foundation](https://openid.net/connect/).

### Requisitos

Los siguientes atributos deben ser configurados desde el Proveedor de Identidad para asegurar una conexión exitosa entre OpenID Connect y Modyo Platform:


- **given_name**: Corresponde al nombre del usuario.
- **family_name**: Corresponde al apellido del usuario.
- **email**: Corresponde al correo del usuario.

:::warning Atención
Para el correcto funcionamiento de una integración con OpenID Connect, es necesario que el Provider OIDC tenga un certificado SSL al día, el cliente de Modyo utiliza TLS 1.3, y OpenSSL Security Level 2 [(ref)](https://www.openssl.org/docs/man1.1.1/man3/SSL_CTX_get_security_level.html).
:::

:::warning Atención
La API para obtención de access tokens delegados vía  `/auth/openidc/access_token` está obsoleta y ha sido reemplazada por `/api/profile/me`.
:::

### Configuración de la integración

1. Accede a **Configuración/Configuración de reino > Reino > Proveedores de Identidad > + Añadir > OpenID Connect** y completa **Client ID** y **Secret** con el nombre del cliente y sus credenciales.
2. En Issuer, rellena con la URL del realm, por ejemplo, para el realm `my-realm` la URL es `https://test.example.com/auth/realms/my-realm`.
3. Haz click en **Lanzar servicio de descubrimiento**. Así se completará la mayoría de las configuraciones.
4. Configura los **Scopes** con los scopes requeridos para la aplicación. Usa `openid,email,profile` en caso de que no cuentes con scopes personalizados.

<img src="/assets/img/platform/keycloak-new-idp.png" alt="Modyo's new identity provider page." width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

### Configuraciones opcionales de la integración

Al momento de realizar una integración específica, Modyo te permite habilitar ciertas configuraciones para controlar las siguientes características de sesión:

| Opción                                                              | Descripción                                                                                                                                                                                                                                                                                                                     |
|:--------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Habilitar cierre de sesión**                                      | Habilita el cierre de sesión en el provider al cerrar la sesión en Modyo. Esto permite cerrar efectivamente la sesión, obligando al usuario a identificarse nuevamente en el Proveedor de Identidad y deshabilitando la experiencia SSO.                                                                                                         |
| **Habilitar refresh token**                                         | Habilita el refresco de tokens administrado por Modyo. Los access tokens serán renovados automáticamente por la plataforma si el usuario mantiene actividad en el sitio y cuenta con un refresh token válido.                                                                                                                   |
| **Tolerancia en segundos para access token**                        | Número en segundos que será usado como margen de tolerancia para obtener un access token utilizando el refresh token.                                                                                                                                                                                                           |
| **Habilitar revocación de token**                                   | Habilita la revocación de access tokens a través de API. Para la revocación, puedes usar el endpoint del proveedor para revokar tokens.                              |
| **Activar token de actualización (Refresh Token)**                  | Habilita el uso de tokens de actualización de OAuth 2.0. Para refrescar tu access token, puedes usar el POST endpoint del proveedor enviando como headers <tt>grant_type: refresh_token, refresh_token: **mi-refresh-token**, client_id: **mi-client-id**</tt> |
| **Mostrar información de delegación**                               | Habilita más información en la [API de perfil de usuario](/es/platform/customers/profile.html#api-de-perfil) con respecto a tokens delegados. Esto es útil cuando se necesita el access token que emite el proveedor de identidad para conseguir acceso a algún otro servicio (e.g. una API externa).                           |
| **Habilitar sincronización de claims al momento de iniciar sesión** | Habilita la sincronización de claims OpenID Connect con custom fields en Modyo. Más información en  [Sincronización de claims](#sincronizacion-de-claims).                                                                                                                                                                      |



### Sincronización de _claims_

Modyo permite sincronizar atributos y otras propiedades de los usuarios de Customers a través de _claims_ estándar y adicionales de OpenID Connect.

1. En **Clients > Mappers** crea un nuevo **Protocol Mapper** con el atributo o propiedad del usuario. Asegúrate de que **Add to userinfo** esté habilitado.
2. En **Customers > Reinos >  Configuración de reino > Custom fields** agrega un nuevo **Custom Field** con un tipo de datos equivalente al claim.
3. En **Customers > Reinos > Configuración de reino > Proveedores de identidad > OpenID Connect** habilita **Enable _claims_ synchronization on login** y agrega _claims_ mappings para cada uno de tus _claims_.

## Keycloak

Keycloak es un identity provider certificado de OpenID Connect que implementa la mayoría de las funcionalidades de la integración OpenID Connect de Modyo.

### Registrar una nueva aplicación cliente

1. Desde la consola administrativa, por ejemplo [https://keycloak.example.com/auth/](https://keycloak.example.com/auth/) haz click en agregar un nuevo realm.

<img src="/assets/img/platform/keycloak-add-realm.png" alt="Keycloak add a new realm button." width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

2. Haz click en agregar una aplicación cliente. Usa `openid-connect` como **Client Protocol** para la integración con Modyo.

<img src="/assets/img/platform/keycloak-add-client.png" alt="Keycloak add a client page." width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

3. Configura **Access Type** `confidential` y deja habilitado solo el **Standard Flow**.
4. Configura las **Valid Redirect URIs** con las URLs de callback y logout de la cuenta Modyo, usando las URLs a la cuenta, agregando `/realms/mi-realm` en caso de estar usando uno. Por ejemplo: `test.modyo.com/realms/mi-realm/auth/openidc/callback` y `test.modyo.com/realms/mi-realm/logout*`.

### Configurar Keycloak en Modyo Platform

Después de configurar Keycloak, ahora tienes que completar la integración en Modyo Platform.

1. Accede a **Configuración/Configuración de reino > Proveedores de Identidad > OpenID Connect** y completa **Client ID** y **Secret** con el nombre del cliente y las credenciales que aparecen en la tab **Credentials** del cliente en Keycloak.
2. En Issuer, rellena con la URL del realm, por ejemplo, para el realm my-realm la URL es `https://keycloak.example.com/auth/realms/my-realm`.
3. Haz click en **Lanzar servicio de descubrimiento**. Así se completará la mayoría de las configuraciones.
4. Configura los **Scopes** con los scopes requeridos para la aplicación. Usa `openid,email,profile` en caso de que no cuentes con scopes personalizados.


## Azure Active Directory

Azure Active Directory es un servicio de identidad cloud de Microsoft Azure que permite implementar un esquema híbrido de identidad basado en directorios on-premise con SSO en la nube.

### Registrar nueva aplicación cliente

1. Inicia sesión en [Azure Portal](https://portal.azure.com/).
2. En la barra de búsqueda, busca por **Azure Active Directory**, y luego selecciona **App registrations > New registration**.

<img src="/assets/img/platform/aad-registration.png" alt="Microsoft Azure's Register an Application page." width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

3. Completa la siguiente información
   * **Name**: Usa un nombre significativo, por ejemplo, `modyo-production`.
   * **Supported account types**: Usa **"Accounts in any organizational directory and personal Microsoft accounts"** para incluir cuentas personales de Microsoft. Puedes encontrar más información al respecto [aquí](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps).
   * **Redirect URI**: Para la cuenta admin usa: `test.modyo.com/admin/auth/openidc/callback`.
      * Para los realms usa: `test.modyo.com/realms/<nombre-realm>/auth/openidc/callback`.
      * Substituye `test.modyo.com` por la URL de tu cuenta.
4. Una vez creada la aplicación, ve a **App registrations > modyo-production** y obtiene el **Id de aplicación (cliente)** y **Id de directorio (inquilino)**.

<img src="/assets/img/platform/aad-client.png" alt="Azure's overview page with Application and Directory IDs." width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

5. Ve a **App registrations > Certificates & secrets** y crea un nuevo secreto con el botón **New client secret**. Es importante copiar el secreto y su valor en un lugar seguro antes de continuar, una vez que salgas de esta ventana, no podrás accesar el valor.

<img src="/assets/img/platform/aad-secret.png" alt="New client secret button." width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

### Configuración de la integración

La siguiente configuración es válida tanto para las integraciones de usuarios de Equipos como de Customer.

1. Desde la plataforma de Modyo, selecciona **Configuración/Configuración de reino** y haz click en **Proveedores de indentidad**.
1. Selecciona **OpenID Connect** y completa **Client ID**, también llamado Id de aplicación, y **Secret** con las credenciales obtenidas del portal de Azure.
1. En el portal de Azure, en Información General, haz click en Puntos de Conexión, y copia la URL de **Documento de Metadatos de OpenID Connect**.
1. Abre la URL en tu navegador, busca **Issuer**, y copia su valor.
1. En Modyo Platform, pega el valor en Issuer y haz click en **Run Discovery Service**. Al terminar el proceso, todos los URLs requeridos serán llenados automáticamente.
1. Configura **Scopes** con los scopes requeridos para la aplicación. Usa `openid,profile,email` en caso de que no contar con scopes personalizados.
1. Habilita características opcionales de la integración.
   |  Opción                                      |       Descripción                                                                                                                                                                                                                 |
   |----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | **Habilitar refresh token**                   | Habilita el refresco de tokens administrado por Modyo. Los access tokens serán renovados automáticamente por la plataforma si el usuario mantiene actividad en el sitio y cuenta con un refresh token válido.          |
   | **Habilitar cierre de sesión**                   | Habilita el cierre de sesión en el provider al cerrar la sesión en Modyo. Esto permite cerrar efectivamente la sesión, obligando al usuario a identificarse nuevamente en Azure AD, y deshabilitando la experiencia SSO. |
   | **Habilitar revocación de token**                | No soportado por Azure AD|
   | **Mostrar información de delegación**                               | Habilita más información en la [API de perfil de usuario](/es/platform/customers/profile.html#api-de-perfil) con respecto a tokens delegados. Esto es útil cuando se necesita el access token que emite el proveedor de identidad para conseguir acceso a algún otro servicio (e.g. una API externa). |                   | **Habilitar sincronización de claims al momento de iniciar sesión** | Habilita la sincronización de claims OpenID Connect con custom fields en Modyo. Más información en  [Sincronización de claims](#sincronizacion-de-claims).               |
