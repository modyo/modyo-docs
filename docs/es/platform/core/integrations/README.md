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

### Webhooks

La plataforma también permite el uso de Webhooks para ciertos eventos específicos dentro de tu cuenta. Para ello, se deben habilitar y configurar desde la sección webhooks en la configuración de la cuenta.

Un webhook es una acción _POST_ automática a una URL determinada con información determinada.

Para habilitarlos, debes checkear la parte superior de la página y después proceder a crear todos los webhooks que quieras.

Los webhooks se pueden crear a partir de acciones de sitios o espacios.

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

Al crear un webhook, debes tener la URL a la que quieres enviar la información, seleccionar el tipo de log y sitio (en caso de ser necesario) que gatillará el webhook y luego guardar los cambios.

Luego de esto, podrás ver en la lista todos los webhooks que estén activos.

Una vez creado el webhook, podrás enviar una notificación de prueba con información falsa para probar que tu URL está recibiendo correctamente los POSTs desde Modyo.