---
search: true
---

# Webhooks

La plataforma también permite el uso de Webhooks para ciertos eventos específicos dentro de tu cuenta. Para ello, se deben habilitar y configurar desde la sección webhooks en la configuración de la cuenta.

Un webhook es una acción _POST_ automática a una URL determinada con información determinada.

Para habilitarlos, debes checkear la parte superior de la página y después proceder a crear todos los webhooks que quieras.

Los webhooks se pueden crear a partir de acciones de sitios o espacios.

Al crear un webhook, debes tener la URL a la que quieres enviar la información, seleccionar el tipo de log y sitio (en caso de ser necesario) que gatillará el webhook y luego guardar los cambios.

Luego de esto, podrás ver en la lista todos los webhooks que estén activos.


### Crear un webhook administrativo

Llama a tus canales de gestión a través de un webhook.

Para crear un webhook, sigue estos pasos:

1. Desde la página de administración, haz click en **Configuración**, luego selecciona **Webhooks**.
2. Haz click en **+ Nuevo Webhook**.
3. Escribe el nombre y la URL a la cual quieres llamar.
4. Selecciona los sitios o espacios que quieras que activen el webhook.
5. Selecciona el tipo de log que activará el webhook.
6. Agrega los headers necesarios para la llamada. 
7. Haz click en **Guardar**.


Los webhooks de sitio son:

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


### Ejemplo de Payload

``` javascript
{
   "id":1552,
   "account_id":2,
   "site_id":null,
   "user_id":2,
   "type":null,
   "value_1":"6111a767-71dc-485c-bea3-80229edf7450",
   "value_2":"the-new-type",
   "value_3":"space-test",
   "request_ip":"127.0.0.1",
   "request_user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
   "loggeable_id":5,
   "loggeable_type":"Content::Entry",
   "options":{
      "title":"test entries (6111a767-71dc-485c-bea3-80229edf7450)}"
   },
   "created_at":"2021-08-13T17:08:46.000Z",
   "user_type":"AdminUser",
   "space_id":1,
   "log_type_id":262,
   "realm_id":null,
   "trigger_uid":"entry_created_log",
   "trigger_name":"Entry created log",
   "trigger_entity":"Content::Entry",
   "trigger_entity_id":5,
   "trigger_entry_uuid":"6111a767-71dc-485c-bea3-80229edf7450",
   "trigger_content_uuid":"the-new-type",
   "trigger_entry_space_uid":"space-test"
}
```
### Crear un webhook de reino

Llama a tus canales de gestión a través de un webhook.

Para crear un webhook, sigue estos pasos:

1. Desde un reino, haz click en **Configuración del reino**, luego selecciona **Webhooks**.
2. Haz click en **+ Nuevo Webhook**.
3. Escribe el nombre y la URL a la cual quieres llamar.
4. Selecciona el tipo de log que activará el webhook.
5. Agrega los headers necesarios para la llamada. 
6. Haz click en **Guardar**.

Los webhooks de reino con sus payloads repectuvos:

* Respuesta de formulario creada
``` javascript
```
* Respuesta de formulario actualizada
``` javascript
```
* Respuesta de originación creada
``` javascript
```
* Respuesta de originación iniciada
``` javascript
```
* Tarea de respuesta de originación enviada
``` javascript
```
* Respuesta de originación completada
``` javascript
```
* Respuesta de originación cancelada
``` javascript
```
* Inicio de sesión
``` javascript
```
* Iniciar sesión con código
``` javascript
```
* Cerrar sesión
``` javascript
```
* Error al intentar iniciar sesión
``` javascript
```
* Error al intentar iniciar sesión con código
``` javascript
```
* Usuario creado
``` javascript
```
* Usuario actualizado
``` javascript
```
* Usuario habilitado
``` javascript
```
* Registro de usuario
``` javascript
```
* Restaurar contraseña
``` javascript
```
* Usuario borrado
``` javascript
```

Nota: El webhook es llamado a través de un POST cuando se genera un log del tipo seleccionado. Una vez creado el webhook, podrás enviar una notificación de prueba con información falsa para probar que tu URL está recibiendo correctamente los POSTs desde Modyo.



