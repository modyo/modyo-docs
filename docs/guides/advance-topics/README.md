---
search: true
---

# Configuración

Modyo permite una libre configuración y personalización de la plataforma, con la posibilidad de hacer cambios generales a los sitios desde un solo lugar centralizado.

## General

Esta sección nos muestra los aspectos más básicos de la plataforma que debemos tener claros, como es el caso del nombre de la cuenta y el sitio principal, que es al que estará vinculado el dominio.

También permite subir los logos y el favicon para usar dentro de los sitios y plataforma de manera uniforme.

Otro de los temas más importantes a configurar son el Idioma y la Zona Horaria. Recuerda que estos son aspectos esenciales a configurar si quieres que un determinado grupo de clientes geolocalizados ingrese a la página a través de buscadores.

## Integraciones

Una de las funciones más importantes para facilitar el ingreso de clientes a Modyo es su integración con distintos servicios de protocolos de autenticación.

Actualmente la plataforma es compatible con:

- Facebook
- Google
- LDAP
- SAML
- Oauth2
- OpenID Connect

Recuerda tener a mano todos los datos y certificados que se te exigen, antes de cambiarlos o integrar algún servicio, para que no se produzcan problemas con el ingreso general de los usuarios.

### Usando Keycloak

Keycloak es un identity provider certificado de OpenID Connect que implementa la mayoría de las funcionalidades de la integración OpenID connect de Modyo.

#### Registrar una nueva aplicación cliente

1. Accede a la consola administrativa, p.e. [https://keycloak.modyo.me:8443/auth/](https://keycloak.modyo.me:8443/auth/) y agrega un nuevo realm.
2. Agrega una aplicación cliente usando `openid-connect` como **Client Protocol** para la integración con Modyo.
3. Configura **Acces Type** `confidential` y deja habilitado solo el **Standard Flow**.
4. Configura las **Valid Redirect URIs** con las urls de callback y logout de la cuenta Modyo, usando las urls relativas a la cuenta `/auth/openidc/callback` y `/logout*`.

#### Configuración de la integración

La siguiente configuración es válida tanto para las integraciones de usuarios de Team como de Customer.

1. Accede a **Configuración/Configuración de customers > Integraciones > OpenID Connect** y completa **Client ID** y **Secret** con el nombre del cliente y las credenciales que aparecen en la tab **Credentials** del cliente en Keycloak.
2. En Issuer, completar con la url del realm, por ejemplo, para el realm my-realm la url es `https://keycloak.modyo.me:8443/auth/realms/my-realm`.
3. Haz click en **Lanzar servicio de descubrimiento**, esto completará la mayoría de las configuraciones.
4. Configura los **Scopes** con los scopes requeridos para la aplicación. Usa `openid,email,profile` en caso de que no cuentes con scopes personalizados.
   |                                        |                                                                                                                                                                                                                        |
   |----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | **Habilitar refresh token**                   | Habilita el refresco de tokens administrado por Modyo. Los access tokens serán renovados automáticamente por la plataforma si el usuario mantiene actividad en el sitio y cuenta con un refresh token válido.          |
   | **Habilitar cierre de sesión**                   | Habilita el cierre de sesión en el provider al cerrar la sesión en Modyo. Esto permite cerrar efectivamente la sesión, obligando al usuario a identificarse nuevamente en Keycloak, deshabilitando la experiencia SSO. |
   | **Habilitar revocación de token**                | No soportado por Keycloak                                                                                                                                                                                              |
   | **Habilitar sincronización de claims al momento de iniciar sesión** | Habilita la sincronización de claims OpenID Connect con custom fields en Modyo. Más información en  [Sincronización de claims](#sincronizacion-de-claims).                                                                                         |

### Usando Azure Active Directory

Azure Active directory es un servicio de identidad cloud de Microsoft Azure que permite implementar un esquema híbrido de identidad basado en directorios on-premise con SSO en la nube.

#### Registrar nueva aplicación cliente

1. Inicia sesión en [Azure portal](https://portal.azure.com/).
2. En la barra de búsqueda, busca por **Azure Active Directory**, y luego selecciona **App registrations > New registration**.
3. Completa la siguiente información
   * **Name**: Usa un nombre significativo, por ejemplo, `modyo-production`.
   * **Supported account types**: Usa **"Accounts in any organizational directory and personal Microsoft accounts"** para incluir cuentas personales de Microsoft. Puedes encontrar más información al respecto [aquí](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps).
   * **Redirect URI**: Usa la url relativa a la cuenta `/auth/openidc/callback`.
4. Una vez creada la aplicación, ve a **App registrations > modyo-production** y obtene el **Application ID** y **Directory ID**.
5. Ve a **App registrations > Certificates & secrets** y crea un nuevo secreto con el botón **New client secret**.

#### Configuración de la integración

La siguiente configuración es válida tanto para las integraciones de usuarios de Team como de Customer.

1. Accede a **Configuración/Configuración de customers > Integrations > OpenID Connect**, y completa **Client ID** y **Secret** con las credenciales obtenidas del portal de Azure.
2. En la consola de Azure ir a **App registrations > Endpoints** y obtener urls para **Authorization endpoint** y **Token endpoint**. Visitar el OpenID Connect metadata document y conseguir **Userinfo endpoint** y **End session endpoint**.
3. Configura **Scopes** con los scopes requeridos para la aplicación. Usa `openid,email,profile` en caso de que no contar con scopes personalizados.
4. Habilitar características opcionales de la integración.
   |                                        |                                                                                                                                                                                                                        |
   |----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | **Habilitar refresh token**                   | Habilita el refresco de tokens administrado por Modyo. Los access tokens serán renovados automáticamente por la plataforma si el usuario mantiene actividad en el sitio y cuenta con un refresh token válido.          |
   | **Habilitar cierre de sesión**                   | Habilita el cierre de sesión en el provider al cerrar la sesión en Modyo. Esto permite cerrar efectivamente la sesión, obligando al usuario a identificarse nuevamente en Azure AD, deshabilitando la experiencia SSO. |
   | **Habilitar revocación de token**                | No soportado por Azure AD|
   | **Habilitar sincronización de claims al momento de iniciar sesión** | Habilita la sincronización de claims OpenID Connect con custom fields en Modyo.                                                                                         |

### Sincronización de claims

Modyo permite sincronizar atributos y otras propiedades de los usuarios de Customers a través de claims estándar y adicionales de OpenID Connect.

1. En **Clients > Mappers** crea un nuevo **Protocol Mapper** con el atributo o propiedad del usuario. Asegúrate de que **Add to userinfo** esté habilitado.
2. En **Customers >  Configuración de customers > Custom fields** agrega un nuevo **Custom Field** con un tipo de datos equivalente al claim.
3. En **Customers > Configuración de customers > Integrations > OpenID Connect** habilita **Enable claims synchronization on login** y agrega claims mappings para cada uno de tus claims.

## Webhooks

La plataforma también permite la instalación de Webhooks en sitios específicos. Para ello, se deben habilitar y configurar desde aquí.

Para habilitarlos, hay que hacer check en la parte superior de la página y después proceder a crearlo.

Al crearlo, se debe tener la URL del Webhook, seleccionar un tipo de log para aplicarlo y después el sitio en que se insertará.

Tras esto, se podrá ver en la lista de todos los webhooks que estén activos y su registro de movimientos.

## Acceso a la API

Modyo te permite crear APIs de los sitios para usarlas en elementos externos de manera segura.

Para ello, deberás darle un nombre y una descripción, además de tener una URL de redirección y otra de cierre de sesión.

Al guardar los datos, obtendrás la Application Id y Secret, que servirán para conectarte.

## Registros de actividad

La plataforma te permite ver todos los movimientos que se han hecho durante todo el tiempo que la tengas activa.

En esta sección, podrás filtrar por fecha, tipo de movimiento o usuario que te permitirán hacer un seguimiento correcto.

Además, tendrás la posibilidad de ver el detalle de lo que se hizo y desde qué sección se hizo.

Esto te puede servir en el caso de tener muchos usuarios internos de la plataforma o para detectar errores y cambios en la cadena de producción y desarrollo.

## Equipo

Desde aquí podrás hacer un control de todos los usuarios internos de la plataforma.

Para crear un usuario, debes hacer clic en el botón superior y completar los campos, para poder enviar la invitación de ingreso por email.

Para chequear a todos los usuarios, puedes filtrar por su estado y por los roles que tienen asignados para ocupar en la plataforma.

Si quieres editar o desactivar un usuario interno, debes hacer clic en el boton de acciones.

### Editar usuario

Al editar el usuario, podrás ver el perfil de todo lo que ha hecho durante el tiempo que está ingresado en la plataforma.

Dentro de las funciones editables que puedes manejar de un usuario están:

- Sitios (a los que tiene acceso)
- Rol
- Credenciales
- Accesos personalizados a la API
- Datos generales

## Roles

Esta es una característica esencial para cada uno de los usuarios internos de la plataforma, ya que te permite optimizar el flujo de trabajo que tiene cada uno de ellos.

Modyo tiene 7 roles predeterminados con distintas funciones por secciones. Además permite crear más roles personalizados, dependiendo de la función o sitio que se necesite trabajar.

### Roles predeterminados

Modyo asigna por defecto roles predeterminados, ordenados según el contexto o sección en la que se ocupan.

Los roles predeterminados que existen son, según contexto:

#### Roles por cuenta:

- Default admin: Tiene todos los permisos existentes.
- Default user: Tiene todos los permisos existentes. menos la edición de la configuración de la cuenta.

#### Roles por sitio:

- Site admin: Tiene todos los permisos a nivel de un sitio, pero no puede crear nuevos sitios.
- Site reviewer: Es un site admin pero sin edición de la configuración del sitio.
- Site developer: Sólo puede editar recursos (no puede publicar, eliminar, hacer rollback ni editar la configuración).

#### Roles por espacio:

- Space admin: Tiene todos los permisos a nivel de un space, pero no puede crear nuevos spaces, puede crear y eliminar assets.
- Space editor: Es un space admin pero sin edición de la configuración del space, no tiene permisos sobre los assets ni puede crear tipos.
- Space writer: Sólo puede editar contenido (no puede publicar, eliminar, hacer rollback ni editar la configuración).

El usuario más importante tendrá el rol de Default Admin o Administrador, quien tendrá todas las funciones habilitadas para manejar la plataforma, los sitios y las cuentas.

### Roles personalizados

Para crear un rol en específico, solo debes hacer clic en el botón superior.

Ahí podrás darle un nombre y seleccionar qué tipo de contenidos internos podrá ver y manejar.

Las funciones que se pueden modificar son:

- Gestión de la cuenta
- Registros de actividad de la cuenta
- Equipo
- Aplicaciones de API de la cuenta
- Gestor de archivos
- Campañas
- Configuración de commerce
- Formularios
- Insights
- Credenciales
- Bloqueos
- Plantillas de correo
- API de correo
- Dar de baja suscripciones
- Notificaciones
- Órdenes de compra
- Medios de pago
- Roles y permisos
- Seguridad
- Registros de la cuenta
- Sitios
- Espacios
- Targets
- Custom fields de usuarios
- Usuarios de la cuenta
- Webhooks
- Revisión en equipo

### Asignar un rol por cuenta

Para asignar un rol en el contexto de cuenta, debes ir a la sección de Equipo y hacer clic en el perfil del usuario que se quiere cambiar. Después ingresar a la pestaña Rol y asignar la categoría que se desee.

## Seguridad

En esta sección podremos activar el Cross Origin Resourse Sharing (CORS), para obtener datos provenientes de otras web que no necesariamente sean seguras.

Al habilitarlo, deberás especificar los dominios que quieres que se habiliten para que estén compartiendo recursos con tu sitio.

Tras esto, la plataforma te dará un token de tiempo limitado vía JSON, para que puedas enlazar los sitios.

Recuerda siempre que esto también puede significar una falla de seguridad, por lo que debes asegurarte que los datos que se compartan, estén libres de malware u otros archivos peligrosos para nuestra plataforma y clientes.