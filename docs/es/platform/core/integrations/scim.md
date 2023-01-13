---
search: true
---

# Provisionamiento SCIM con Microsoft Azure AD

Logra integrar tus grupos y usuarios entre Modyo y Microsoft Azure Active Directory usando la API compatible con SCIM que Modyo provee.

#### Para crear tu aplicación en Azure Active Directory, sigue estos pasos:

1. Desde el panel de administración de Azure Active Directory, haz click en **Enterprise Applications**.
2. Haz click en **Create your own application** y elegir la siguiente configuración:

<img src="/assets/img/platform/scim-1-createapp.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;" alt="Image showing the Browsw Azure AD Gallery window."/>

3. Escribe un nombre para tu aplicación y elige **Integrate any other application you don't find in the gallery**. Haz click en **Create**.

4. En el menú lateral, selecciona **Provisioning** y después haz click en **Get Started**.

<img src="/assets/img/platform/scim-2-provision.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;" alt="Image showing the Provisioning window in Azure AD."/>

5. En las credenciales de administración, agrega lo siguiente:
	- Provisioning mode: Automatic
	- Tenant URL: _URL de tu web server compatible con SCIM_ (e.g. https://miServidor.com/scim)
	- Secret Token: _Client Secret_ (El secreto que fue generado para la credencial de autenticación)

<img src="/assets/img/platform/scim-3-testprovision.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;" alt="Image showing the Provisioning window with the Admin Credentials."/>

6. En el apartado de **Attribute Mapping**, agrega un nuevo grupo. El objecto Grupo podrá realizar todas las acciones: **Create, Update, Delete** y tendrá el siguiente mapeo:


| Azure Active Directory Attribute | customApp Attribute |
| ------------------------------- | ------------------ |
| displayName | displayName |
| objectId | externalId |
| members| members |

<img src="/assets/img/platform/scim-4-attributemapping.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;" alt="Image showing the Attribute Mapping window filled out with the required Attributes."/>

7. Agrega un nuevo objeto de usuarios. El objecto Usuario podrá realizar las acciones: **Create** y **Update** y tendrá el siguiente mapeo:

| Azure Active Directory Attribute | customApp Attribute |
| ------------------------------- | ------------------ |
| userPrincipalName | userName |
| Switch([IsSoftDeleted],, "False", "True", "True", "False") | active |
| mail| emails[type eq "work".value] |
| givenName| name.givenName|
| surname  |name.familyName|
| Join(" ",[givenName],[surname]| name.formatted|

<img src="/assets/img/platform/scim-5-attributemapping.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;" alt="Image showing the Attribute Mapping window with the User object filled."/>

8. En **Settings**, activa el Scope **Sync all Users and Groups**.

<img src="/assets/img/platform/scim-6-provisioning.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;" alt="Image showing the Attribute Mapping with the Sync Settings added."/>

9. En el menú principal de Active Directory, selecciona Usuarios. 
10. Haz click en **Nuevo usuario**. Es importante crear un correo electrónico para el usuario ya que esto es requerido por Modyo.

<img src="/assets/img/platform/scim-7-allusers.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;" alt="Image showing the All Users window."/>

12. En el menú principal de Active Directory, selecciona Grupos. 
13. Haz click en **Nuevo grupo**.

<img src="/assets/img/platform/scim-8-allgroups.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;" alt="Image showing the All Groups window."/>

14. En la pantalla principal de tu aplicación nueva, haz click en **Provisioning**.

> La ruta puede ser algo como All services > Default Directory > Enterprise Applications > La nueva app

:::tip Tip
Para verificar que el aprovisionamiento funciona, haz click en **Provision on demand** y selecciona un usuario.

Para grupos, no existe provisionamiento "on demand", así que hay que crear un usuario agregarlo a un grupo y poner "start provisioning", esta tarea se ejecuta cada 45 minutos, por lo que se debería esperar este tiempo y ver reflejado los cambios en la plataforma.
:::

<img src="/assets/img/platform/scim-9-ondemand.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;" alt="Image showing the Provision On Demand."/>



### Referencias
- Para construir un API de SCIM compatible con Azure AD, sigue esta guía de Microsoft. [Use SCIM to Provision Users and Groups](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/use-scim-to-provision-users-and-groups)
- Para más información de las APIs que Modyo ofrece, ve [API de administración](https://docs.modyo.com/es/platform/core/api.html).