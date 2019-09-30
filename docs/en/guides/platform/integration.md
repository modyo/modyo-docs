---
search: true
---

# Integrations

Una de las funciones más importantes para facilitar el ingreso de clientes a Modyo es su integración con distintos servicios de protocolos de autenticación.

Actualmente la plataforma es compatible con:

- Facebook
- Google
- LDAP
- SAML
- Oauth2
- OpenID Connect

Recuerda tener a mano todos los datos y certificados que se te exigen, antes de cambiarlos o integrar algún servicio, para que no se produzcan problemas con el ingreso general de los usuarios.

### Using keycloak

Keycloak es un identity provider certificado de OpenID Connect que implementa la mayoría de las funcionalidades de la integración OpenID connect de Modyo.

#### Register a new client aplication

1. Accede a la consola administrativa, p.e. [https://keycloak.modyo.me:8443/auth/](https://keycloak.modyo.me:8443/auth/) y agrega un nuevo realm.
2. Agrega una aplicación cliente usando `openid-connect` como **Client Protocol** para la integración con Modyo.
3. Configura **Acces Type** `confidential` y deja habilitado solo el **Standard Flow**.
4. Configura las **Valid Redirect URIs** con las URLs de callback y logout de la cuenta Modyo, usando las URLs relativas a la cuenta `/auth/openidc/callback` y `/logout*`.

#### Integration settings

La siguiente configuración es válida tanto para las integraciones de usuarios de Team como de Customer.

1. Accede a **Configuración/Configuración de customers > Integraciones > OpenID Connect** y completa **Client ID** y **Secret** con el nombre del cliente y las credenciales que aparecen en la tab **Credentials** del cliente en Keycloak.
2. En Issuer, rellena con la URL del realm, por ejemplo, para el realm my-realm la URL es `https://keycloak.modyo.me:8443/auth/realms/my-realm`.
3. Haz click en **Lanzar servicio de descubrimiento**, esto completará la mayoría de las configuraciones.
4. Configura los **Scopes** con los scopes requeridos para la aplicación. Usa `openid,email,profile` en caso de que no cuentes con scopes personalizados.
   |                                        |                                                                                                                                                                                                                        |
   |----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | **Habilitar refresh token**                   | Habilita el refresco de tokens administrado por Modyo. Los access tokens serán renovados automáticamente por la plataforma si el usuario mantiene actividad en el sitio y cuenta con un refresh token válido.          |
   | **Habilitar cierre de sesión**                   | Habilita el cierre de sesión en el provider al cerrar la sesión en Modyo. Esto permite cerrar efectivamente la sesión, obligando al usuario a identificarse nuevamente en Keycloak, deshabilitando la experiencia SSO. |
   | **Habilitar revocación de token**                | No soportado por Keycloak                                                                                                                                                                                              |
   | **Habilitar sincronización de claims al momento de iniciar sesión** | Habilita la sincronización de claims OpenID Connect con custom fields en Modyo. Más información en  [Sincronización de claims](#sincronizacion-de-claims).                                                                                         |

### Using Azure active directory

Azure Active Directory es un servicio de identidad cloud de Microsoft Azure que permite implementar un esquema híbrido de identidad basado en directorios on-premise con SSO en la nube.

#### Register a new client aplication

1. Inicia sesión en [Azure Portal](https://portal.azure.com/).
2. En la barra de búsqueda, busca por **Azure Active Directory**, y luego selecciona **App registrations > New registration**.
3. Completa la siguiente información
   * **Name**: Usa un nombre significativo, por ejemplo, `modyo-production`.
   * **Supported account types**: Usa **"Accounts in any organizational directory and personal Microsoft accounts"** para incluir cuentas personales de Microsoft. Puedes encontrar más información al respecto [aquí](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps).
   * **Redirect URI**: Usa la URL relativa a la cuenta `/auth/openidc/callback`.
4. Una vez creada la aplicación, ve a **App registrations > modyo-production** y obtene el **Application ID** y **Directory ID**.
5. Ve a **App registrations > Certificates & secrets** y crea un nuevo secreto con el botón **New client secret**.

#### Integration settings

La siguiente configuración es válida tanto para las integraciones de usuarios de Team como de Customer.

1. Accede a **Configuración/Configuración de customers > Integrations > OpenID Connect**, y completa **Client ID** y **Secret** con las credenciales obtenidas del portal de Azure.
2. En la consola de Azure ir a **App registrations > Endpoints** y obtener URLs para **Authorization endpoint** y **Token endpoint**. Visitar el OpenID Connect metadata document y conseguir **Userinfo endpoint** y **End session endpoint**.
3. Configura **Scopes** con los scopes requeridos para la aplicación. Usa `openid,email,profile` en caso de que no contar con scopes personalizados.
4. Habilita características opcionales de la integración.
   |                                        |                                                                                                                                                                                                                        |
   |----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | **Habilitar refresh token**                   | Habilita el refresco de tokens administrado por Modyo. Los access tokens serán renovados automáticamente por la plataforma si el usuario mantiene actividad en el sitio y cuenta con un refresh token válido.          |
   | **Habilitar cierre de sesión**                   | Habilita el cierre de sesión en el provider al cerrar la sesión en Modyo. Esto permite cerrar efectivamente la sesión, obligando al usuario a identificarse nuevamente en Azure AD, deshabilitando la experiencia SSO. |
   | **Habilitar revocación de token**                | No soportado por Azure AD|
   | **Habilitar sincronización de claims al momento de iniciar sesión** | Habilita la sincronización de claims OpenID Connect con custom fields en Modyo.                                                                                         |

### Claims syncronization

Modyo permite sincronizar atributos y otras propiedades de los usuarios de Customers a través de claims estándar y adicionales de OpenID Connect.

1. En **Clients > Mappers** crea un nuevo **Protocol Mapper** con el atributo o propiedad del usuario. Asegúrate de que **Add to userinfo** esté habilitado.
2. En **Customers >  Configuración de customers > Custom fields** agrega un nuevo **Custom Field** con un tipo de datos equivalente al claim.
3. En **Customers > Configuración de customers > Integrations > OpenID Connect** habilita **Enable claims synchronization on login** y agrega claims mappings para cada uno de tus claims.

## Webhooks

La plataforma también permite la instalación de Webhooks en sitios específicos. Para ello, se deben habilitar y configurar desde aquí.

Para habilitarlos, hay que hacer check en la parte superior de la página y después proceder a crearlo.

Al crearlo, se debe tener la URL del Webhook, seleccionar un tipo de log para aplicarlo y después el sitio en que se insertará.

Tras esto, se podrá ver en la lista de todos los webhooks que estén activos y su registro de movimientos.
