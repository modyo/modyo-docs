---
title: Temas Avanzados
lang: es
in: advance-topics
---

# Configuración 

Modyo permite una libre configuración y personalización de la plataforma, con la posibilidad de hacer cambios generales a los sitios desde un solo lugar centralizado.

## General

Esta sección nos muestra los aspectos más básicos de la plataforma que debemos tener claros, como es el caso del nombre de la cuenta y el sitio principal, que es al que estará vinculado el dominio.

También permite subir los logos y el favicon para usar dentro de los sitios y plataforma de manera uniforme.

Otro de los temas más importantes a configurar son el Idioma y la Zona Horaria. Recuerda que estos son aspectos escenciales a configurar si quieres que un determinado grupo de clientes geolocalizados ingrese a la página a través de buscadores.

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

Además, tendrás de ver el detalle de lo que se hizo y desde qué sección se hizo.

Esto te puede servir en el caso de tener muchos usuarios internos de la plataforma o para detectar errores y cambios en la cadena de producción y desarrollo.

## Equipo

Desde aquí podrás hacer un control de todos los usuarios internos de la plataforma.

Para crear un usuario, debes hacer clic en el botón superior y completar los campos, con tal de enviar la invitación de ingreso por email.

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

Modyo permite asignar a los usuarios un rol dentro de la plataforma, con tal de que puedan hacer ciertas acciones predeterminadas y de otras queden excluídos.

El usuario más importante tendrá el rol de Administrador, quien asignará otros roles a los usuarios que se vayan sumando a esta.

Para crear un Rol en específico, solo debes hacer clic en el botón superior. 

Ahí podrás darle un nombre y seleccionar qué tipo de contenidos internos podrá ver y manejar:

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
- Desuscripciones
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

Posteriormente de crear el rol, podrás asignarlo a algun usuario en la sección Equipo.

## Seguridad

En esta sección podremos activar el Cross Origin Resourse Sharing (CORS), para obtener datos provenientes de otras web que no necesariamente sean seguras.

Al habilitarlo, deberás especificar los dominios que quieres que se habiliten para que estén compartiendo recursos con tu sitio.

Tras esto, la plataforma te dará un token de tiempo limitado vía JSON, para que puedas enlazar los sitios. 

Recuerda siempre que esto también puede significar una falla de seguridad, por lo que debes asegurarte que los datos que se compartan, estén libres de malware u otros archivos peligrosos para nuestra plataforma y clientes.


