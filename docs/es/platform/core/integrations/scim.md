---
search: true
---

# Aprovisionamiento de grupos y usuarios de SCIM con Microsoft Entra ID

El sistema de gestión de identidades multidominio (SCIM) establece una comunicación estandarizada entre Modyo y Microsoft Azure para sincronizar automáticamente datos de usuarios y grupos. Esto te permite:
- Crear usuarios en Microsoft Azure y aprovisionarlos automáticamente en Modyo.
- Actualizar datos de usuario en Microsoft Azure y reflejar los cambios en Modyo.
- Eliminar usuarios en Microsoft Azure y desaprovisionarlos en Modyo.

Esta integración de grupos y usuarios entre Modyo y Microsoft Azure Entra ID con la API SCIM de Modyo, simplifica la gestión de usuarios en diferentes sistemas y reduce errores, favoreciendo una administración eficiente.

:::warning Atención
La sincronización es unidireccional, lo que significa que los datos modificados en Modyo no afectarán los datos del usuario en Azure. Además, cualquier cambio realizado en Azure puede sobrescribir las modificaciones realizadas en Modyo.
:::


### Paso 1 Crea tu aplicación en Azure Entra ID
1. Accede al panel de administración de **Azure Entra ID**
1. En el menú lateral selecciona **Enterprise Application**
1. Selecciona la opción **Crea tu propia aplicación** en la parte superior de la galería de Azure
1. Nombra tu aplicación y selecciona la opción **Integrar cualquier otra aplicación que no se encuentre en la página** como objetivo de la aplicación
1. Haz click en **Crear**

### Paso 2 Aprovisionamiento
1. Accede a tu aplicación en Azure
2. En el menú lateral selecciona **Aprovisamiento**
3. Da click en **Introducción**
4. Selecciona aprovisionamiento **Automático**
5. En las credenciales de administración, agrega lo siguiente:
	- URL de inquilino: El URL de tu servidor de web compatible con SCIM, por ejemplo: https://tudominio.modyo.cloud/api/admin/scim
	- Secret Token: El token de acceso del usuario administrativo de Modyo generado para la credencial de autenticación. Puedes encontrar información detallada de tokens en la sección de [API de administración](https://docs.modyo.com/es/platform/core/api#bearer-token)
6. En la sección de Configuración puedes personalizar el envío de notificaciones y seleccionar el umbral de eliminación accidental. Para más información acerca de estas configuraciones, revisa la documentación de [Azure](https://learn.microsoft.com/es-es/azure/active-directory/app-provisioning/user-provisioning)
7. Da click en **Probar configuración** para verificar la conexión
8. Una vez confirmada la configuración da click en **Guardar**
8. Si la configuración y guardado es correcto, debajo del botón de probar conexión podrás configurar la sección de **Asignaciones**
9. Selecciona una asignación para proceder al paso de asignación de atributos

### Paso 3 Asignación de atributos
#### Grupos
1. Selecciona la asignación **Provision Azure Entra ID Groups** para configurar sus atributos.
2. Selecciona las acciones del objeto de destino: Crear, actualizar y/ eliminar. Confirma que el mapeo sea:

| Azure Entra ID Attribute | customApp Attribute |
| ------------------------------- | ------------------ |
| displayName | displayName |
| objectId | externalId |
| members| members |
3. Da click en **Guardar**

#### Usuarios
1. Selecciona la asignación **Provision Azure Entra ID Users** para configurar los atributos de tus grupos.
2. Selecciona únicamente las acciones: Crear y actualizar. Asegúrate que el mapeo sea:

| Azure Entra ID Attribute | customApp Attribute |
| ------------------------------- | ------------------ |
| userPrincipalName | userName |
| Switch([IsSoftDeleted],, "False", "True", "True", "False") | active |
| mail| emails[type eq "work".value] |
| givenName| name.givenName|
| surname  |name.familyName|
| Join(" ",[givenName],[surname]| name.formatted|
3. Da click en **Guardar**
4. Una vez hecho lo anterior, en la sección de Aprovisionamiento, en las opciones de configuración tendrás ya la opción de **Ámbito**, selecciona **Sincronizar todos los usuarios del grupo**
5. Da click en **Guardar**

Puedes confirmar que la configuración de tu mapeo es correcta siguiendo estos pasos:
1. En Azure ve a aprovisionamiento
2. Selecciona **Aprovisionamiento a petición**
3. Confirma que el proceso corre sin mostrar errores

:::tip Tip
En el caso de grupos, no existe aprovisionamiento a petición por lo que, para probar la configuración de grupos, debes crear un usuario, agregarlo a un grupo y seleccionar **comenzar aprovisionamiento**.

Esta tarea se ejecuta cada 40 minutos, por lo que debes esperar este tiempo para ver los cambios reflejados en la plataforma.
:::

Una vez configurado correctamente, puedes agregar usuarios en Active Directory. A la vez, tus grupos existentes también serán aprovisionados.

:::warning Atención
Nombre del usuario y correo electrónico son campos requeridos para generar usuarios. Sin ellos, fallará el aprovisionamiento del usuario.
:::


### Contrato del servidor SCIM

Además de Entra ID, puedes conectar cualquier cliente SCIM 2.0 contra el servidor de Modyo. La URL base es `https://[account_host]/api/admin/scim` y las llamadas se autentican con el token del usuario administrativo, igual que en el resto de la [API de administración](/es/platform/core/api.html#bearer-token). Los usuarios que administra este servidor son los de **Equipo**, no los de Customers.

| Recurso | Métodos | Descripción |
|:--|:--|:--|
| `/Users` | `GET`, `POST` | Lista y crea usuarios. El listado admite paginación con `startIndex` y `count`, y los filtros `userName eq` y `externalId eq`. |
| `/Users/:id` | `GET`, `PATCH` | Consulta y actualiza un usuario. El `PATCH` acepta operaciones sobre `userName`, `name`, `emails` y `active`. |
| `/Groups` | `GET`, `POST` | Lista y crea grupos. |
| `/Groups/:id` | `GET`, `PATCH`, `DELETE` | Consulta, actualiza y elimina un grupo. |
| `/Schemas` | `GET` | Devuelve la definición de los esquemas `urn:ietf:params:scim:schemas:core:2.0:User` y `urn:ietf:params:scim:schemas:core:2.0:Group` con todos sus atributos. Úsalo si tu cliente descubre el esquema antes de aprovisionar. Este endpoint no aparece en el portal Swagger, así que esta tabla es su referencia. |

Todas las respuestas, incluidas las de error, usan el content type `application/scim+json` y no el `application/json` que declara el resto de la API de administración. Asegúrate de que tu cliente lo acepte.

:::warning Atención
La baja de usuarios no se hace con `DELETE`. La ruta `DELETE /api/admin/scim/Users/:id` existe, pero no tiene implementación: la solicitud termina en un error genérico, sin respuesta SCIM, y el usuario no cambia. Para desaprovisionar, envía un `PATCH` a `/Users/:id` con la propiedad `active` en `false`. En grupos, `DELETE` sí está implementado.
:::

### Referencias
- Para construir un API de SCIM compatible con Entra ID, sigue esta guía de Microsoft. [Use SCIM to Provision Users and Groups](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/use-scim-to-provision-users-and-groups)
- Para más información de las APIs que Modyo ofrece, ve [API de administración](https://docs.modyo.com/es/platform/core/api).