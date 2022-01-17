---
search: true
---

# SCIM Provisioning with Microsoft Azure AD

Logra integrar tus grupos y usuarios entre Modyo y Microsoft Azure Active Directory elaborando una API compatible con SCIM.

#### Para crear tu aplicación en Azure Active Directory, sigue estos pasos:

1. Desde el panel de administración de Azure Active Directory, haz click en **Enterprise Applications**.
2. Haz click en **Create your own application** y elegir la siguiente configuración:

<img src="/assets/img/platform/scim-1-createapp.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;"/>

3. Escribe un nombre para tu aplicación y elije **Integrate any other application you don't find in the gallery**. Haz click en **Create**.

4. En el menú lateral, selecciona **Provisioning** y después haz click en **Get Started**.

<img src="/assets/img/platform/scim-2-provision.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;"/>

5. En las credenciales de administración, agrega lo siguiente:
	- Provisioning mode: Automatic
	- Tenant URL: _URL de tu web server compatible con SCIM_ (e.g. https://miServidor.com/scim)
	- Secret Token: _Client Secret_ (El secreto que fue generado para la credencial de autenticación)

<img src="/assets/img/platform/scim-3-testprovision.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;"/>

6. En el apartado de **Attribute Mapping**, agrega un nuevo grupo. El objecto Grupo podrá realizar todas las acciones: **Create, Update, Delete** y tendrá el siguiente mapeo:


| Azure Active Directory Attribute | customApp Attribute |
| ------------------------------- | ------------------ |
| displayName | displayName |
| objectId | externalId |
| members| members |

<img src="/assets/img/platform/scim-4-attributemapping.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;"/>

7. Agrega un nuevo objeto de usuarios. El objecto Usuario podrá realizar las acciones: **Create** y **Update** y tendrá el siguiente mapeo:

| Azure Active Directory Attribute | customApp Attribute |
| ------------------------------- | ------------------ |
| userPrincipalName | userName |
| Switch([IsSoftDeleted],, "False", "True", "True", "False") | active |
| mail| emails[type eq "work".value] |
| givenName| name.givenName|
| surname  |name.familyName|
| Join(" ",[givenName],[surname]| name.formatted|

<img src="/assets/img/platform/scim-5-attributemapping.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;"/>

8. En **Settings**, activa el Scope **Sync all Users and Groups**.

<img src="/assets/img/platform/scim-6-provisioning.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;"/>

9. En el menú principal de Active Directory, selecciona Usuarios. 
10. Haz click en **Nuevo usuario**. Es importante crear un correo electrónico para el usuario ya que esto es requerido por Modyo.

<img src="/assets/img/platform/scim-7-allusers.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;"/>

12. En el menú principal de Active Directory, selecciona Grupos. 
13. Haz click en **Nuevo group**.

<img src="/assets/img/platform/scim-8-allgroups.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;"/>

14. En la pantalla principal de tu aplicación nueva, haz click en **Provisioning**.

> La ruta puede ser algo como All services > Default Directory > Enterprise Applications > La nueva app

:::tip Tip
Para verificar que el aprovisionamiento funciona, haz click en **Provision on demand** y selecciona un usuario.

Para los grupos no existe provisionamiento "on demand", asi que hay que crear un usuario agregarlo a un grupo y poner "start provisioning", esta tarea se ejecuta cada 45 minutos, por lo que se deberia esperar este tiempo y ver reflejado los cambios en la plataforma.
:::

<img src="/assets/img/platform/scim-9-ondemand.png" width="500px" style="margin-top: 40px; border: 1px solid #EEE;"/>


### Referencias
Para la construir un API de SCMI compatible con Azure AD, sigue esta guía de Microsoft. [Use SCIM to Provision Users and Groups](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/use-scim-to-provision-users-and-groups)
