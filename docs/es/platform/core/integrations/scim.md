---
search: true
---

# Aprovisionamiento de grupos y usuarios de SCIM con Microsoft Azure AD

El sistema de gestión de identidades multidominio (SCIM) establece una comunicación estandarizada entre Modyo y Microsoft Azure para intercambiar datos de usuarios y grupos de forma automática, permitiéndote:
- Crear usuarios en un sistema y aprovisionarlos en otro.
- Actualizar datos de usuario en un sistema y reflejar los cambios en todos.
- Eliminar usuarios en un sistema y desaprovisionarlos en todos.

Esta integración de grupos y usuarios entre Modyo y Microsoft Azure Active Directory con la API SCIM de Modyo, simplifica la gestión de usuarios en diferentes sistemas y reduce errores, favoreciendo una administración eficiente.

### Paso 1: Crea tu aplicación en Azure Active Directory
1. Accede al panel de administración de **Azure Active Directory**
1. En el menú lateral selecciona **Enterprise Application**
1. Selecciona la opción **Crea tu propia aplicación** en la parte superior de la galería de Azure
1. Nombra tu aplicación y selecciona la opción **Integrar cualquier otra aplicación que no se encuentre en la página** como objetivo de la aplicación
1. Haz click en **Crear**

### Paso 2: Aprovisionamiento
1. Accede a tu aplicación en Azure
2. En el menú lateral selecciona **Aprovisamiento**
3. Da click en **Introducción**
4. Selecciona aprovisionamiento **Automático**
5. En las credenciales de administración, agrega lo siguiente:
	- URL de inquilino: El URL de tu servidor de web compatible con SCIM, por ejemplo: https://tudominio.modyo.cloud/api/admin/scim
	- Secret Token: El token de acceso del usuario administrativo de Modyo generado para la credencial de autenticación. Puedes encontrar información detallada de tokens en la sección de [API de administración](https://docs.modyo.com/es/platform/core/api.html#bearer-token)
6. En la sección de Configuración puedes personalizar el envío de notificaciones y seleccionar el umbral de eliminación accidental. Para más información acerca de estas configuraciones, revisa la documentación de [Azure](https://learn.microsoft.com/es-es/azure/active-directory/app-provisioning/user-provisioning)
7. Da click en **Probar configuración** para verificar la conexión
8. Una vez confirmada la configuración da click en **Guardar**
8. Si la configuración y guardado es correcto, debajo del botón de probar conexión podrás configurar la sección de **Asignaciones**
9. Selecciona una asignación para proceder al paso de asignación de atributos

### Paso 3: Asignación de atributos
#### Grupos
1. Selecciona la asignación **Provision Azure Active Directory Groups** para configurar sus atributos.
2. Selecciona las acciones del objeto de destino: Crear, actualizar y/ eliminar. Confirma que el mapeo sea:

| Azure Active Directory Attribute | customApp Attribute |
| ------------------------------- | ------------------ |
| displayName | displayName |
| objectId | externalId |
| members| members |
3. Da click en **Guardar**

#### Usuarios
1. Selecciona la asignación **Provision Azure Active Directory Users** para configurar los atributos de tus grupos.
2. Selecciona únicamente las acciones: Crear y actualizar. Asegúrate que el mapeo sea:

| Azure Active Directory Attribute | customApp Attribute |
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

Esta tarea se ejecuta cada 45 minutos, por lo que debes esperar este tiempo para ver los cambios reflejados en la plataforma.
:::

Una vez configurado correctamente, puedes agregar usuarios en Active Directory. A la vez, tus grupos existentes también serán aprovisionados.

:::warning Atención
Nombre del usuario y correo electrónico son campos requeridos para generar usuarios. Sin ellos, fallará el aprovisionamiento del usuario.
:::


### Referencias
- Para construir un API de SCIM compatible con Azure AD, sigue esta guía de Microsoft. [Use SCIM to Provision Users and Groups](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/use-scim-to-provision-users-and-groups)
- Para más información de las APIs que Modyo ofrece, ve [API de administración](https://docs.modyo.com/es/platform/core/api.html).