---
search: true
---

# Proveedores de Identidad

Una de las funcionalidades de Modyo para facilitar la interacción de otros sistemas de usuarios con Modyo son las integraciones con distintos servicios de autenticación.

Actualmente la plataforma es compatible con:

- [Google](#google)
- [SAML](#saml)
- [OAuth2](#oauth2)
- [OpenID Connect](#openid-connect)
- [Keycloak](#keycloak)
- [Azure Entra ID](#azure-entra-id)

Recuerda tener a mano todos los datos y certificados que se te exigen antes de cambiarlos o integrar algún servicio, para que no se produzcan problemas con el ingreso general de los usuarios.

:::tip Reinos con dominio personalizado
Las URLs de callback de esta página usan la forma `https://my_account.modyo.com/realms/my_realm/auth/...`. Si el reino tiene un [dominio personalizado](/es/platform/customers/settings.html#dominios), pasan a `https://<tu-dominio>/realms/auth/...`, sin el identificador del reino, y debes actualizarlas en tu proveedor. Las encuentras en **Configuración de reino** > **Dominios**.
:::

## Agregar un Proveedor de Identidad

Dónde configuras un proveedor y qué tipos puedes usar depende de quién inicia sesión con él:

| Usuarios | Dónde se configura | Proveedores disponibles |
|:--|:--|:--|
| Equipo | **Configuración** > **Proveedores de identidad** | OpenID Connect y SAML |
| Reino | **Configuración de reino** > **Integraciones**, categoría **Proveedores de identidad** | Google, OAuth2, OpenID Connect y SAML |

Google está disponible en todos los reinos; los demás tipos dependen del plan de tu cuenta. Puedes tener un solo proveedor de cada tipo: en el equipo, el selector solo ofrece los tipos que aún no agregaste, y en el reino cada integración se instala una vez. Keycloak y Azure Entra ID se configuran como proveedores OpenID Connect.

En un reino, haz click en **Instalar** en el proveedor y completa sus datos. Una vez instalado, lo encuentras en **Instalado**, donde puedes editarlo con **Configurar**.

Para agregar un proveedor de identidad para los usuarios de equipo, sigue estos pasos:

1. Desde el menú principal, expande **Configuración** y haz click en **Proveedores de identidad**.
1. Haz click en **Añadir**.
1. En el dropdown, selecciona la integración que quieres añadir.
1. Agrega la información necesaria para la integración (Nombre, ID, Secreto, etc).
1. Haz click en **Añadir**.

<img src="/assets/img/platform/nuevo-idp.png" alt="Add a new Identity Provider page." width="500px" style="margin-top: 40px; border: 1px solid #EEE;"/>

### Inicio de sesión directo

Con el inicio de sesión directo, Modyo redirige al usuario al proveedor de identidad en cuanto entra a iniciar sesión, sin mostrar la pantalla de inicio de sesión de Modyo. Se activa en un lugar distinto según los usuarios:

- **Equipo**: activa **Autenticación directa** en **Configuración** > **Proveedores de identidad**, debajo de la lista de proveedores. El switch solo se habilita cuando hay un único proveedor habilitado.
- **Reino**: en **Configuración de reino** > **Integraciones**, activa **Inicio de sesión directo** en la tarjeta del proveedor instalado. El switch está deshabilitado mientras el proveedor esté deshabilitado.

Ten en cuenta lo siguiente:

- Solo puedes activarlo cuando hay un único proveedor de identidad habilitado. En el reino, si hay más de uno, verás el error «Solo puede activar la autenticación directa cuando hay un único proveedor de identidades habilitado».
- Si después habilitas otro proveedor, o deshabilitas o eliminas el único habilitado, el inicio de sesión directo se desactiva solo.
- Solo redirige con Google y OpenID Connect. Con SAML u OAuth2 la opción se puede activar, pero los usuarios siguen entrando por la pantalla de inicio de sesión de Modyo.
- En el inicio de sesión de equipo, si la autenticación con el proveedor falla, Modyo muestra una página de error en lugar de volver a la pantalla de inicio de sesión.

## Google

Para poder integrar el inicio de sesión de Google con Modyo, deberás contar con:

- **Client ID**: Debe tener el formato `CLIENT_ID.apps.googleusercontent.com`.
- **Client secret**: Solo admite letras sin tildes, números, `.`, `-` y `_`.

Estos valores los podrás obtener luego de crear una aplicación en Google con permisos para inicio de sesión. Puedes aprender más sobre como crear y configurar una aplicación de Google en su [documentación oficial](https://developers.google.com/identity/sign-in/web/sign-in).

Debes tener en cuenta que al final del formulario se encuentra disponible la **URI de devolución de llamada**. Es necesario usar esa URI en la aplicación o proyecto que crees en Google para poder completar el flujo de inicio de sesión correctamente.

Además de los valores necesarios, puedes controlar qué cuentas de Google pueden iniciar sesión:

- **Restringir dominios** y **Ejemplo de dominio para mostrar en el inicio de sesión de Google**: Si activas **Restringir dominios**, Modyo envía a Google el dominio de ejemplo, que es uno solo, para que lo sugiera al iniciar sesión.
- **Lista de dominios permitidos**: Si el dominio del correo con el que el usuario inicia sesión en Google no está en la lista, el inicio de sesión no es válido y el usuario vuelve a la vista de inicio de sesión de Modyo sin una sesión activa. La lista se aplica siempre que tenga dominios, aunque **Restringir dominios** esté desactivado. El dominio debe coincidir exactamente: `modyo.com` no admite correos de `mail.modyo.com`.

## SAML

### Requisitos

Para lograr una conexión exitosa entre SAML y Modyo, configura los siguientes atributos en el Proveedor de Identidad:

- **givenName** o (En la versión 9.2.22 en adelante también puede ser `givenname`). Corresponde al nombre del usuario.
- **sn** (En la versión 9.2.22 en adelante también puede ser `surname`). Corresponde al apellido del usuario.
- **email** o **mail**. Corresponde al correo del usuario.

:::warning Atención
Los nombres de los atributos deben coincidir exactamente con los de esta lista. Si la aserción no trae el nombre o el correo, Modyo no puede crear al usuario en su primer inicio de sesión y el inicio de sesión falla.
:::

Para integrar el inicio de sesión con SAML en Modyo, completa los siguientes campos. Todos son obligatorios, salvo **Parámetros de tiempo de ejecución del IDP SSO del URL destino**:

- **Nombre del servicio**: El nombre que se mostrará en el botón de inicio de sesión.
- **Issuer**: Identificador de la aplicación del IDP. En algunos servicios es requerido agregar el prefijo `spn`:
(Por ejemplo: `spn:13e4ff44-b0c9-4618-b305-2171a24b07f5`).
- **URL de destino de inicio de sesión único de IDP**: La URL a la cual se envía la solicitud de autenticación. Esto lo puedes encontrar en el proveedor de identidad.
- **Parámetros de tiempo de ejecución del IDP SSO del URL destino**: Si lo completas, escribe un par `clave=valor` por línea, solo con letras, números o guion bajo.
- **IDP Cert**: El certificado del proveedor de identidad en formato PEM. Debes completar este campo y también la huella digital.
- **Huella digital del certificado IDP**: La huella digital SHA1 del certificado público del proveedor de identidad, en hexadecimal y sin dos puntos, de hasta 40 caracteres.
- **Formato de identificador de nombre**: El formato de NameID que Modyo pide al proveedor durante el SSO iniciado por el proveedor de servicio (SP-initiated SSO). Para el correo electrónico, usa `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`. Consulta la sección 8.3 de http://docs.oasis-open.org/security/saml/v2.0/saml-core-2.0-os.pdf para otras opciones; es posible que el proveedor de identidad no las admita todas.

Además, configura en tu proveedor de identidad las siguientes URLs de Modyo:

- **URL de Entity ID**: URL provisto por Modyo donde se encuentra el identificador de la aplicación:
   * Admin: `test.modyo.com/admin/auth/saml/metadata`
   * Realms: para configuraciones con realms usa: `test.modyo.com/realms/<tu_uid_del_realm>/auth/saml/metadata`
- **URL de la aserción del servicio de consumidor**: La URL proporcionada por Modyo a la que el proveedor de identidad redirige el flujo. Aparece al final del formulario y no se puede editar.
   * Admin: `test.modyo.com/admin/auth/saml/callback`
   * Realms: para configuraciones con reinos utiliza: `test.modyo.com/realms/<tu_uid_del_realm>/auth/saml/callback`

## OAuth2

OAuth2 está disponible solo para los usuarios de un reino. El usuario escribe su identificador y su contraseña en la pantalla de inicio de sesión de Modyo, y Modyo los valida contra tu proveedor con el flujo de credenciales de contraseña del propietario del recurso (_Resource Owner Password Credentials_): envía un `POST` a **URL del token de autorización**, como formulario `application/x-www-form-urlencoded`, con `grant_type=password`, `client_id`, `client_secret`, `scope`, `username` y `password`. El inicio de sesión solo es válido si el proveedor responde `200`.

Para poder integrar un inicio de sesión con OAuth2 en Modyo, necesitarás los siguientes datos de tu proveedor de identidad. Todos son obligatorios, salvo **Descripción del servicio**, **Marcador de campo de login** y **Usar SSL**:

- **Nombre**
- **Descripción del servicio**
- **URL del token de autorización**: El endpoint de token de tu proveedor. Debe aceptar `grant_type=password`.
- **Client ID**
- **Secreto**
- **Scope**: Si tu servicio de autenticación OAuth2 usa múltiples espacios o ambientes para separar a los usuarios y quieres usar uno en específico en esta integración, deberás definirlo en este campo.
- **Campo Login**: El tipo de identificador con el que tus usuarios inician sesión:
   * **Email**: El identificador es un correo, y Modyo lo usa como correo del usuario.
   * **ID de usuario secundario**: El identificador no es un correo. Al crear el usuario, Modyo le asigna un correo generado automáticamente, que no corresponde a un buzón real, y guarda el identificador como su ID de usuario secundario.
- **Marcador de campo de login**: Texto que se mostrará en el campo de identificación como placeholder si el usuario no ha rellenado el campo.
- **Usar SSL**: Actívalo si **URL del token de autorización** usa HTTPS.

Para crear un cliente OAuth, ve [Cliente OAuth](/es/platform/customers/settings#cliente-oauth).


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
La API para obtener access tokens delegados vía `/auth/openidc/access_token` fue eliminada. Para obtener el access token que emite el proveedor, usa `/api/customers/realms/{realm_uid}/me` y lee el campo `delegated_token`, como se explica en [Tokens delegados](/es/platform/customers/api.html#tokens-delegados).
:::

### Configuración de la integración

1. Agrega la integración **OpenID Connect** y completa **ID de cliente** y **Secreto** con el nombre del cliente y sus credenciales:
   * Para usuarios de equipo, sigue los pasos de [Agregar un Proveedor de Identidad](#agregar-un-proveedor-de-identidad).
   * Para usuarios de un reino, en **Customers > Reinos** haz click en el reino y luego en **Configuración de reino > Integraciones**. En la categoría **Proveedores de identidad**, haz click en **Instalar** en **OpenID Connect**. Una vez instalada, la encuentras en **Instalado**, donde puedes editarla con **Configurar**.
2. En Issuer, rellena con la URL del realm, por ejemplo, para el realm `my-realm` la URL es `https://test.example.com/auth/realms/my-realm`.
3. Haz click en **Ejecutar servicio de detección**. Así se completará la mayoría de las configuraciones.
4. Configura los **Scopes** con los scopes requeridos para la aplicación. Usa `openid,email,profile` en caso de que no cuentes con scopes personalizados.

<img src="/assets/img/platform/keycloak-new-idp.png" alt="Modyo's new identity provider page." width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

### Método de autenticación y PKCE

**Método de autenticación** es un campo obligatorio que define cómo Modyo entrega las credenciales del cliente a tu proveedor. Tiene tres valores posibles:

| Opción | Descripción |
|:--|:--|
| **Client secret enviado como cabecera de autenticación básica** | El **Secreto** viaja en la cabecera `Authorization`, con autenticación básica. Es el valor por defecto. |
| **Client secret enviado como parámetro de formulario** | El **Secreto** viaja en el cuerpo de la solicitud, como un parámetro más. |
| **Deshabilitado, client secret no es enviado** | Modyo no envía el **Secreto** al proveedor y el campo deja de ser obligatorio. Úsalo cuando el proveedor registró la aplicación como cliente público. |

El método que elijas se aplica a todas las llamadas que Modyo hace al proveedor con las credenciales del cliente: el intercambio del código de autorización, la renovación con refresh token y la revocación de tokens.

Si tu proveedor exige proof key for code exchange, activa **Habilitar proof key for code exchange (PKCE)**. Al hacerlo, **Método de proof key for code exchange** pasa a ser obligatorio y admite dos valores:

- **S256**: Modyo envía el desafío como hash SHA-256 del verificador. Es el valor por defecto.
- **plain**: Modyo envía el verificador sin transformar. Úsalo solo si tu proveedor no soporta S256.

:::tip Tip
Si el proveedor registró la aplicación como cliente público, combina **Deshabilitado, client secret no es enviado** con PKCE habilitado en **S256**.
:::

### Configuraciones opcionales de la integración

Al momento de realizar una integración específica, Modyo te permite habilitar ciertas configuraciones para controlar las siguientes características de sesión:

| Opción                                                              | Descripción                                                                                                                                                                                                                                                                                                                     |
|:--------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Habilitar cierre de sesión remoto**                               | Habilita el cierre de sesión en el provider al cerrar la sesión en Modyo. Esto permite cerrar efectivamente la sesión, obligando al usuario a identificarse nuevamente en el Proveedor de Identidad y deshabilitando la experiencia SSO.                                                                                                         |
| **Activar refresh token**                                           | Habilita el refresco de tokens administrado por Modyo. Los access tokens serán renovados automáticamente por la plataforma si el usuario mantiene actividad en el sitio y cuenta con un refresh token válido. Si la desactivas o el proveedor no entrega un refresh token, la sesión en Modyo se cierra cuando expira el access token del proveedor. También se cierra si la renovación falla.                                                                                                                   |
| **Tiempo en segundos para la anticipación preventiva del refresh token** | Número en segundos que será usado como margen de tolerancia para obtener un access token utilizando el refresh token. Admite valores entre 0 y 100. |
| **Habilitar revocación de tokens**                                  | Al cerrar sesión en Modyo, la plataforma revoca en el proveedor el refresh token de la sesión o, si no hay refresh token, el access token. Al habilitarla, **Endpoint de revocación de tokens** pasa a ser obligatorio. |
| **Mostrar información de delegación**                               | Habilita más información en la [API de perfil de usuario](/es/platform/customers/api#api-de-customers) con respecto a tokens delegados. Esto es útil cuando se necesita el access token que emite el proveedor de identidad para conseguir acceso a algún otro servicio (e.g. una API externa).                           |
| **Habilitar la sincronización de claims al iniciar sesión**         | Habilita la sincronización de claims OpenID Connect con custom fields en Modyo. Más información en  [Sincronización de claims](#sincronizacion-de-claims).                                                                                                                                                                      |
| **Habilitar User Info** | Permite que Modyo consulte el endpoint de User Info del proveedor para completar los datos del usuario. Viene habilitada por defecto y, mientras esté activa, **Endpoint de User Info** es obligatorio; el servicio de descubrimiento lo completa por ti. Si la desactivas, Modyo usa solo los claims que vienen en el id_token. |
| **Incluir id_token_hint al cerrar sesión** | Agrega el parámetro `id_token_hint`, con el id_token de la sesión, a la URL de cierre de sesión remoto. Muchos proveedores lo usan para identificar la sesión que se cierra y omitir la pantalla de confirmación. Solo tiene efecto si el cierre de sesión remoto está habilitado. |



### Sincronización de _claims_

Modyo permite sincronizar atributos y otras propiedades de los usuarios de Customers a través de _claims_ estándar y adicionales de OpenID Connect.

1. En **Clients > Mappers** crea un nuevo **Protocol Mapper** con el atributo o propiedad del usuario. Asegúrate de que **Add to userinfo** esté habilitado.
2. En **Customers > Reinos >  Configuración de reino > Custom fields** agrega un nuevo **Custom Field** con un tipo de datos equivalente al claim.
3. En **Customers > Reinos > Configuración de reino > Integraciones**, abre **Instalado** y haz click en **Configurar** en **OpenID Connect**. Activa **Habilitar la sincronización de claims al iniciar sesión** y, en **Mapeo de claims**, haz click en **Nuevo** para agregar un mapeo por cada _claim_: escribe en **Nombre** el nombre del _claim_ y elige en **Custom Fields** el campo que lo recibe.

Con la sincronización activa, cada vez que el usuario inicia sesión, Modyo actualiza sus datos con los _claims_ que entrega el proveedor:

- Nombre, apellido y correo, con `given_name`, `family_name` y `email`.
- Género, con `gender`, si el _claim_ viene. Modyo reconoce los valores `male`, `female`, `nonbinary` y `other`.
- Fecha de nacimiento, con `birthdate`. Si el _claim_ no viene, la fecha de nacimiento queda vacía.
- Los custom fields que mapeaste.

Al crear los mapeos, ten en cuenta lo siguiente:

- Para un _claim_ anidado, usa notación con punto, por ejemplo `address.country`. No aplica a custom fields con opciones.
- Si el custom field tiene opciones, escribe en **Valor** el valor del _claim_ que corresponde a cada opción.
- Los _claims_ de tipo fecha deben venir en formato ISO 8601 `AAAA-MM-DD`.
- Cada custom field admite un solo mapeo.

## Keycloak

Keycloak es un identity provider certificado de OpenID Connect que implementa la mayoría de las funcionalidades de la integración OpenID Connect de Modyo.

### Registrar una nueva aplicación cliente

1. Desde la consola administrativa, por ejemplo `https://keycloak.example.com/auth/` haz click en agregar un nuevo realm.

<img src="/assets/img/platform/keycloak-add-realm.png" alt="Keycloak add a new realm button." width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

2. Haz click en agregar una aplicación cliente. Usa `openid-connect` como **Client Protocol** para la integración con Modyo.

<img src="/assets/img/platform/keycloak-add-client.png" alt="Keycloak add a client page." width="500px" style="margin-top: 40px; border: 1px solid #EEE;" />

3. Configura **Access Type** `confidential` y deja habilitado solo el **Standard Flow**.
4. Configura las **Valid Redirect URIs** con las URLs de callback y logout de la cuenta Modyo, usando las URLs a la cuenta, agregando `/realms/mi-realm` en caso de estar usando uno. Por ejemplo: `test.modyo.com/realms/mi-realm/auth/openidc/callback` y `test.modyo.com/realms/mi-realm/logout*`.

### Configurar Keycloak en Modyo Platform

Después de configurar Keycloak, ahora tienes que completar la integración en Modyo Platform.

1. Agrega la integración **OpenID Connect** como se indica en [Configuración de la integración](#configuracion-de-la-integracion) y completa **ID de cliente** y **Secreto** con el nombre del cliente y las credenciales que aparecen en la tab **Credentials** del cliente en Keycloak.
2. En Issuer, rellena con la URL del realm, por ejemplo, para el realm my-realm la URL es `https://keycloak.example.com/auth/realms/my-realm`.
3. Haz click en **Ejecutar servicio de detección**. Así se completará la mayoría de las configuraciones.
4. Configura los **Scopes** con los scopes requeridos para la aplicación. Usa `openid,email,profile` en caso de que no cuentes con scopes personalizados.


## Azure Entra ID

Azure Entra ID es un servicio de identidad cloud de Microsoft Azure que permite implementar un esquema híbrido de identidad basado en directorios on-premise con SSO en la nube.

### Registrar nueva aplicación cliente

1. Inicia sesión en [Azure Portal](https://portal.azure.com/).
2. En la barra de búsqueda, busca por **Azure Entra ID**, y luego selecciona **App registrations > New registration**.

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

1. Desde la plataforma de Modyo, agrega la integración **OpenID Connect** como se indica en [Configuración de la integración](#configuracion-de-la-integracion).
1. Completa **ID de cliente**, también llamado Id de aplicación, y **Secreto** con las credenciales obtenidas del portal de Azure.
1. En el portal de Azure, en Información General, haz click en Puntos de Conexión, y copia la URL de **Documento de Metadatos de OpenID Connect**.
1. Abre la URL en tu navegador, busca **Issuer**, y copia su valor.
1. En Modyo Platform, pega el valor en Issuer y haz click en **Ejecutar servicio de detección**. Al terminar el proceso, todos los URLs requeridos serán llenados automáticamente.
1. Configura **Scopes** con los scopes requeridos para la aplicación. Usa `openid,profile,email` en caso de que no contar con scopes personalizados.
1. Habilita características opcionales de la integración.
   |  Opción                                      |       Descripción                                                                                                                                                                                                                 |
   |----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | **Activar refresh token** | Habilita el refresco de tokens administrado por Modyo. Los access tokens serán renovados automáticamente por la plataforma si el usuario mantiene actividad en el sitio y cuenta con un refresh token válido. Si la desactivas o el proveedor no entrega un refresh token, la sesión en Modyo se cierra cuando expira el access token del proveedor. También se cierra si la renovación falla. |
   | **Habilitar cierre de sesión remoto** | Habilita el cierre de sesión en el provider al cerrar la sesión en Modyo. Esto permite cerrar efectivamente la sesión, obligando al usuario a identificarse nuevamente en Entra ID, y deshabilitando la experiencia SSO. |
   | **Habilitar revocación de tokens** | No soportado por Entra ID |
   | **Mostrar información de delegación** | Habilita más información en la [API de perfil de usuario](/es/platform/customers/api#api-de-customers) con respecto a tokens delegados. Esto es útil cuando se necesita el access token que emite el proveedor de identidad para conseguir acceso a algún otro servicio (e.g. una API externa). |
   | **Habilitar la sincronización de claims al iniciar sesión** | Habilita la sincronización de claims OpenID Connect con custom fields en Modyo. Más información en [Sincronización de claims](#sincronizacion-de-claims). |
