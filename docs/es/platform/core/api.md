---
search: true
---

# API de Administración

Además de la funcionalidad que provee la plataforma Modyo, esta cuenta con una API administrativa. Te permite, de forma autenticada, acceder externamente a distintas acciones como listar, crear y eliminar elementos como formularios, layouts, contenido, campos personalizados, menús de navegación, campañas de correo, entre otros.

De esta forma, es posible realizar labores administrativas consumiendo la API y sin depender de la interfaz de Modyo, lo que te otorga mayor libertad para controlar tu trabajo.

:::warning Permisos 
La API Key generada para un usuario, heredará los mismos permisos que tenga él por sobre la consola de administración.
:::  

## Información General

Para comenzar a sacar provecho de la API de Modyo, primero es importante conocer los servicios de los que dispone, las operaciones que es posible invocar y la manera de utilizarlas.

Modyo facilita esta tarea, disponiendo la descripción de su API _headless_ mediante el uso de Swagger (también conocido como especificación de OpenAPI) en listas de servicios agrupadas según su función: administrativa, contenido público, y perfil de usuario.

Puedes acceder a la documentación OpenAPI a través de los siguientes URLs:

```http
https://[account_host]/api/admin/docs
https://[account_host]/api/content/docs
https://[account_host]/api/customers/docs
```

Por ejemplo, el detalle de la API pública de Content la encontrarás en la siguiente ruta:

```http
https://[account_host]/api/content/docs
```
De esta forma, la documentación Swagger pública de la API de contenido de la cuenta https://un.modyo.test se encuentra en https://un.modyo.test/api/content/docs.

En cada vista de documentación encuentras el detalle de los distintos recursos que Modyo te provee y las operaciones que puedes realizar sobre ellos.

Por ejemplo, en la API Administrativa (/api/admin/docs) se muestran distintas secciones, como "Locks", "Layout Pages", "Email templates" o "Content Spaces". Si te centras en esta última, ves que cuenta con un listado de operaciones que realiza sobre los espacios del módulo Content de Modyo. Nos vamos a enfocar solo en algunas de ellas:

```http
Content Spaces

...
GET    /content/spaces   List spaces
POST   /content/spaces   Create a space
...
```

El listado muestra para cada operación el método HTTP, la ruta, y la descripción de lo que realiza.

### Partes de una llamada

Por ejemplo, al hacer una llamada hacia `/content/spaces`, conseguirás una respuesta del servidor. El `body` de este `response` es un objeto JSON que contiene un elemento llamado "spaces", el que corresponde a una lista (`array`) de elementos de este tipo.

Además, contiene metadata referente a la `response`, donde se incluyen datos como el total de entradas que satisfacen esta consulta (`total_entries`), la cantidad máxima de entradas o elementos devueltos por cada `request` (`per_page`), la "ventana" actual de datos o página actual (`current_page`) y el total de páginas (`total_pages`).

Con estos datos puedes recorrer fácilmente los datos de un servicio determinado pasando los parámetros requeridos.

También cada API cuenta con un listado de posibles _responses_ que obtienes al invocar estos métodos, de forma que puedas preparar adecuadamente tu aplicación para manejar los datos.

### Example value

Dentro de la sección __Response__, en **Example Value** obtienes un ejemplo de listado de espacios cuando la respuesta es 200:     

```json
{
  "spaces": [
    {
      "id": 10,
      "name": "My new space",
      "uid": "my-new-space",
      "uuid": "3c808ef3-4390-416f-a042-a4829d88fbfd",
      "default_locale": "en",
      "locales": [
        "en",
        "es-cl",
        "es-mx"
      ],
      "team_review": false,
      "created_at": "2019-08-22T10:57:36.000-03:00",
      "content_types_count": 8,
      "entries_count": 245,
      "cors_enabled": false,
      "cors_allow_all": false,
      "cors_allowed_origins": "",
      "approvals_quantity": 1,
      "locked_review": false,
      "enforced_review": false,
      "enforce_all_review": false,
      "enforced_reviewers_attributes": [],
      "description": "Space for product content",
      "show_author": true,
      "realm_id": 3
    }
  ],
  "meta": {
    "total_entries": 2,
    "per_page": 10,
    "current_page": 1,
    "total_pages": 1
  }
}
```

### Model

Al hacer click en **Model**, verás la estructura JSON que compone la respuesta, los distintos campos, sus tipos de datos, valores de ejemplo, conjunto de posibles valores cuando corresponda, y formato de los parámetros (`string`, `integer`, `boolean`, etc ).

Adicionalmente se muestran posibles casos de fallo que pueden ocurrir para poder controlarlos adecuadamente.

### Listado de modelos

Al final de la documentación, encontrarás una sección llamada "Models" que contiene todos los modelos involucrados en la documentación. Estos te permiten comprender los recursos disponibles y sus atributos utilizados en las APIs.

El siguiente código es una parte del modelo para objeto **User**:

```shell
User{
avatar        Avatar{...}
id            integer example: 2332
uuid          string example: 5379068f-4bc2-4858-8c37-6f59858e0a5b
external_id   string example: 11111111-1
name          string example: Clifton Feil
first_name    string example: Clifton
last_name     string example: Feil
second_last_name string example: Smith
email         string example: test.user@modyo.com
username      string example: test.user
...
}
```

## Llamar a la API

Una vez que conoces el servicio que consultarás de acuerdo a [Información General](/es/platform/core/api.html#informacion-general) y un método de [Autenticación](/es/platform/core/api.html#autenticacion), ya se puede realizar un _request_ a la URL del recurso requerido.

Para este ejemplo, obtendremos la lista de todas las campañas de correo que se crearon en un reino. De acuerdo a la documentación en Swagger _(test.modyo.com/api/admin/docs)_, se necesita llamar a la siguiente URL, donde `{realm_uid}` es el **Identificador** del reino:

```http request
GET https://[account_host]/api/admin/customers/{realm_uid}/messaging/campaigns
```
Este servicio acepta parámetros vía URL para filtrar por tipos (`mailing` y `notification`) mediante el parámetro `type`. Te permite buscar campañas por nombre (parámetro `query`) o bien requerir sólo una lista reducida de atributos para ser incluídos en la _response_ (parámetro `only`).

#### Llama usando cURL

Para el ejemplo solo se desea incluir las campañas de tipo `mailing` (`type=mailing`) del reino con identificador `my-realm`, de forma que la _request_, después de sumar los headers de autenticación necesarios, quedaría de la siguiente forma:

```shell script
curl -X GET https://test.modyo.com/api/admin/customers/my-realm/messaging/campaigns?type=mailing -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
```

Al invocar el servicio, se obtiene un `HTTP 200 OK` y el _response_ que contiene un objeto JSON que se ve de la siguiente forma:

```json
{
	"campaigns": [{
		"id": 15,
		"name": "Test campaign 01",
		"uuid": "52dc64c2-8c31-4de1-b10c-0313ae6486f6",
		"type": "mailing",
		"sent_count": 1078,
		"starts_at": "2019-07-15T17:05:12.000-03:00",
		"segments_enabled": false,
		"segments_list": "--",
		"created_at": "2019-07-15T16:58:43.000-03:00",
		"read_only_for_admin": false
	}, {
		"id": 11,
		"name": "Test campaing 02 Mar8 1546",
		"uuid": "2c210b2c-af4e-4f9c-b2c5-b768dde622a2",
		"type": "mailing",
		"sent_count": 6,
		"starts_at": "2019-03-11T15:17:20.000-03:00",
		"segments_enabled": true,
		"segments_list": "Test Mailing Mar08",
		"created_at": "2019-03-08T15:46:52.000-03:00",
		"read_only_for_admin": false
	}, {
		"id": 6,
		"name": "campaign jan7 1210",
		"uuid": "7dc46be9-ec5e-4468-b74e-a5ba4b88ecb4",
		"type": "mailing",
		"sent_count": 327,
		"starts_at": "2019-01-07T16:53:33.000-03:00",
		"segments_enabled": true,
		"segments_list": "--",
		"created_at": "2019-01-07T12:10:22.000-03:00",
		"read_only_for_admin": false
	}, {
		"id": 5,
		"name": "Spanish Campaign",
		"uuid": "4b13358e-f2b7-48ef-a720-26b55e4f2502",
		"type": "mailing",
		"sent_count": 0,
		"starts_at": null,
		"segments_enabled": false,
		"segments_list": "--",
		"created_at": "2019-01-02T15:59:06.000-03:00",
		"read_only_for_admin": false
	}],
	"meta": {
		"total_entries": 4,
		"per_page": 10,
		"current_page": 1,
		"total_pages": 1
	}
}
```

#### Llama usando el portal Swagger

1. Abre tu portal de la API en tu navegador. (e.g https://un.modyo.test/api/admin/docs)
2. En la sección Campaigns, expande la llamada **Campaign List**.
3. Ingresa el identificador del reino en `realm_uid` y, si quieres, refina la búsqueda utilizando los demás parámetros de la llamada. Haz click en **Execute**.
4. En el apartado de **Response**, podrás ver lo siguiente:
- Como ejecutar el mismo comando usando cURL
- El Request URL
- La respuesta de la plataforma Modyo.

La respuesta JSON corresponde a una lista (o colección) de campañas de correo (`campaigns`) y los atributos de cada objeto de la colección contienen información relevante para el recurso consultado. En el ejemplo, el nombre de la campaña (`name`), la fecha en que comenzó su envío (`starts_at`), o si esta campaña fue segmentada o no (`segments_enabled`).

Aparte de la colección, se puede ver un objeto llamado `meta` que contiene información acerca de la paginación de este recurso.

Siguiendo con el ejercicio, es posible utilizar los datos obtenidos en la consulta anterior para obtener más información. Por ejemplo, podemos estar interesados en saber a quiénes se les envió una campaña en particular. Para esto, puedes volver a revisar el catálogo de servicios, y en la sección Message Deliveries encontrarás el siguiente _endpoint_:

```http request
GET /customers/{realm_uid}/messaging/message_deliveries   List message deliveries
```

Este listado recibe el ID de la campaña en el parámetro `campaign_id` (en el caso de "Test campaign 01" es el `15`) y devuelve una entrega por cada mensaje enviado. En [Paginación](/es/platform/core/api.html#paginacion) verás esta llamada y cómo recorrer su respuesta.

Siguiendo este ejemplo, puedes utilizar el amplio catálogo de servicios de Modyo y construir tu aplicación de la forma que más se acomode a tus necesidades.

## Autenticación

Para utilizar la API de Modyo, es necesario primero poder autenticar a un usuario determinado que será quien realice la invocación a los distintos servicios.

Modyo provee 2 posibles métodos de autenticación para invocar la API:

- Bearer Token
- Cookie de sesión del admin

A continuación, se explica como utilizar cada uno de estos métodos

### Bearer token

Lo primero que debes realizar, es registrar la aplicación para consumir la API. Sigue estos pasos para crear un nuevo Bearer Token:

1. Desde la plataforma Modyo, en el menú lateral, expande **Configuración** y haz click en **Acceso a la API**.
2. Haz click en el botón **Nuevo Acceso al API**.
3. Llena el nombre, descripción, y URI de redirección del acceso.

Al hacer click en **Crear**, Modyo muestra el cuadro de diálogo **Se ha generado un nuevo token secreto** con el secreto de la aplicación. Cópialo en ese momento con el botón que está junto a él: es la única vez que se muestra y no podrás recuperarlo después de cerrar el cuadro. Luego, la aplicación aparece en el listado con su **Callback URL**, que es la URI de redirección que ingresaste, y su **Id de la aplicación**.

:::tip Tip
El secreto solo hace falta para el flujo descrito en [El cliente OAuth2 del Acceso a la API](/es/platform/core/api.html#el-cliente-oauth2-del-acceso-a-la-api) y para revocar un token desde tu integración, como se explica en [Ciclo de vida del token de acceso](/es/platform/core/api.html#ciclo-de-vida-del-token-de-acceso). Para generar tokens desde la consola, como en los pasos siguientes, no lo necesitas. Si lo perdiste y lo necesitas, crea otra aplicación.
:::

4. Una vez registrada la aplicación, asigna la aplicación los usuarios que harán uso de la API. Para esto, en el menú lateral, expande **Configuración** y haz click en **Equipo**.
5. Selecciona un usuario con un rol administrativo dentro de la aplicación deseada. 

Para más detalles, ve a [Usuarios y Roles](/es/platform/core/roles)

6. En la vista del usuario administrador, abre la pestaña **Acceso a la API** y haz click en **Nuevo Token de Acceso**.

7. En el _popup_ **Generar un Token de Acceso**, elige la aplicación que acabas de crear en **Selecciona una aplicación para generar el token de acceso** y haz click en **Crear token**.

:::warning Atención
Debes tener en cuenta que los usuarios administrativos solo podrán ejecutar acciones a través de la API administrativa de Modyo si es que cuentan con los permisos necesarios para realizar cada acción. Por ejemplo, un administrador con el rol de "Developer" en un sitio, no podrá ejecutar la acción "Publicar" en ese sitio.
:::

Finalmente, ahora verás que en la sección "Administrar Tokens de Acceso" aparecerá la aplicación ("My application"), junto con un valor destacado en color rojo el que corresponde precisamente al _access token_, y que utilizarás a continuación para realizar _requests_ autenticados sobre la API de Modyo.

¡Listo! Con el token ya creado, puedes comenzar a sacar provecho a todas las opciones que da la API Administrativa de Modyo. Por ejemplo, si deseas ver una lista de los roles para usuarios administradores disponibles, puedes realizar un _request_ al _endpoint_ `/api/admin/roles`, incluyendo en el _header_ HTTP _"Authorization: Bearer"_ el valor del _access token_ obtenido previamente:

```shell
curl -X GET https://example.modyo.com/api/admin/roles -H 'Authorization: Bearer
 8c280dcc1fcff361aa1120836841b4b82faab23e912148c91766bbf5e452ab56'
```

La respuesta obtenida desde el servicio es un `HTTP 200 OK`, y contiene la información de los roles en su _response_ en formato JSON:

```json
{
	"roles": [{
		"id": 65,
		"key": "space_writer",
		"name": "Writer",
		"context": "space",
		"read_only": true,
		"restorable": true,
		"users_count": 0,
		"created_at": "2019-07-09T17:15:14.000-03:00"
	}, {
		"id": 66,
		"key": "space_editor",
		"name": "Editor",
		"context": "space",
		"read_only": true,
		"restorable": true,
		"users_count": 1,
		"created_at": "2019-07-09T17:15:14.000-03:00"
	}],
	"meta": {
		"total_entries": 2,
		"per_page": 10,
		"current_page": 1,
		"total_pages": 1
	}
}
```

#### El cliente OAuth2 del Acceso a la API

Los datos de una aplicación de **Acceso a la API** no son propios de Modyo: son las credenciales de un cliente OAuth2. El **Id de la aplicación** es el `client_id`, el secreto que se muestra una sola vez al crearla es el `client_secret` y la URI de redirección es el `redirect_uri` al que la plataforma devuelve el código de autorización.

Modyo monta los extremos del flujo bajo `/admin/oauth`:

```http request
GET  https://[account_host]/admin/oauth/authorize
POST https://[account_host]/admin/oauth/token
POST https://[account_host]/admin/oauth/revoke
```

El último sirve para revocar un token, como se explica en [Ciclo de vida del token de acceso](/es/platform/core/api.html#ciclo-de-vida-del-token-de-acceso).

El único flujo habilitado es `authorization_code`, en dos pasos:

1. Lleva al administrador a `/admin/oauth/authorize` con `client_id`, `redirect_uri`, `response_type=code` y, si lo necesitas, `state`. El paso exige una sesión de administrador abierta en ese navegador: si no la hay, la plataforma redirige a la pantalla de inicio de sesión y vuelve a la autorización una vez dentro. No hay pantalla de consentimiento, así que con la sesión abierta la redirección al `redirect_uri` con el parámetro `code` es inmediata.
2. Canjea el `code` por un token en `/admin/oauth/token`:

```shell script
curl -X POST https://test.modyo.com/admin/oauth/token \
  -d grant_type=authorization_code \
  -d code=EL_CODIGO_RECIBIDO \
  -d redirect_uri=https://mi-integracion.example.com/callback \
  -d client_id=EL_APPLICATION_ID \
  -d client_secret=EL_SECRET
```

Las limitaciones del flujo importan al momento de diseñar la integración:

- `authorization_code` es el único `grant_type` habilitado. No existe `client_credentials`, así que no hay manera de obtener un token sin un administrador de por medio: todo token pertenece a una persona y hereda sus permisos.
- La plataforma no emite _refresh tokens_. La respuesta de `/admin/oauth/token` trae `access_token` pero no `refresh_token`, y no hay `grant_type=refresh_token` al que recurrir.
- El código de autorización caduca a los 10 minutos y sirve para un solo canje.
- La aplicación tiene que pertenecer a la cuenta del administrador que autoriza. Autorizar una aplicación de otra cuenta falla.
- El alcance predeterminado del token es `public`, con `admin` como alcance opcional, pero la API de administración no exige ninguno de los dos: lo que decide qué puede hacer el token son los permisos del usuario dueño.

:::tip Tip
No necesitas implementar este flujo para usar la API. El camino descrito más arriba, crear la aplicación y generar el token desde la consola, entrega el mismo `access_token` y basta para la mayoría de las integraciones. El flujo OAuth2 completo tiene sentido cuando una aplicación externa debe obtener tokens en nombre de distintos administradores.
:::

#### Ciclo de vida del token de acceso

El _access token_ que copias desde **Administrar Tokens de Acceso** no caduca. Modyo emite los tokens de la API de administración sin fecha de expiración, así que siguen siendo válidos indefinidamente mientras existan, sin importar cuánto tiempo pase desde que se generaron ni si el administrador cerró sus sesiones del navegador.

De ahí que un token deje de servir solo cuando alguien lo elimina o lo revoca. Tienes tres formas de hacerlo:

- **Eliminar el token**, desde la pestaña **Acceso a la API** del miembro del equipo, en la sección **Administrar Tokens de Acceso**. Afecta únicamente a ese token.
- **Eliminar la aplicación**, desde **Configuración** > **Acceso a la API**. Elimina de una vez todos los tokens emitidos con esa aplicación, de todos los administradores, así que cualquier integración que la use deja de autenticar.
- **Revocar el token** desde tu integración, sin pasar por la consola, con un `POST` a `/admin/oauth/revoke` que incluya el `token` junto con el `client_id` y el `client_secret` de la aplicación con la que se emitió. Afecta únicamente a ese token.

```shell script
curl -X POST https://test.modyo.com/admin/oauth/revoke \
  -d token=EL_ACCESS_TOKEN \
  -d client_id=EL_APPLICATION_ID \
  -d client_secret=EL_SECRET
```

Desactivar al administrador dueño del token también corta el acceso: la plataforma resuelve el token solo si el usuario sigue activo.

:::warning Atención
La plataforma no rota ni renueva los tokens por sí sola. No hay caducidad automática ni _refresh token_, de modo que cualquier política de rotación queda en manos de quien opera la integración: genera el token nuevo, cámbialo en el cliente y recién entonces elimina o revoca el anterior. Y trata el _access token_ como una credencial permanente, porque lo es: si se filtra, seguirá funcionando hasta que alguien lo elimine desde la consola o lo revoque.
:::

#### Requests no autenticados

¿Qué ocurre si alguien intenta realizar un _request_ al API sin contar con un token válido? Si intentas realizar una llamada sin autenticar o con un token inválido, el sistema responderá con un error `HTTP 401 Unauthorized`:

```shell
curl  GET https://test.modyo.com/api/admin/roles -v

> GET /api/admin/roles HTTP/1.1
> Host: test.modyo.com
> User-Agent: curl/7.54.0
> Accept: */*
>
< HTTP/1.1 401 Unauthorized
....
```

### Cookie de sesión de admin

Si estás usando Modyo desde un navegador web y tienes una sesión iniciada como administrador, entonces podrás acceder desde el mismo navegador a las URLs de la API. Podrás hacer _requests_ simplemente por contar con la cookie de sesión en la parte administrativa de la plataforma.

Recuerda que solo podrás acceder a las mismas secciones de la API a las que tengas permitido acceder desde la interfaz de Modyo.

Este método sirve para explorar la API de lectura desde el navegador, y tiene dos límites:

- **Con la cookie sola únicamente funcionan los `GET`.** Cuando la plataforma resuelve la credencial desde la cookie activa la protección contra falsificación de peticiones, de modo que un `POST`, `PUT`, `PATCH` o `DELETE` sin token CSRF recibe `HTTP 403 Forbidden` con el cuerpo vacío y sin ningún mensaje que explique el motivo. Para escribir con cookie hay que enviar además el token CSRF de la página en la cabecera `X-CSRF-Token`. Con Bearer token esa protección no se aplica.
- **La vigencia de la sesión sí se valida.** A diferencia del Bearer token, la cookie arrastra la sesión del navegador. Si esa sesión expiró o fue revocada, la respuesta es `HTTP 401 Unauthorized` con este cuerpo:

```json
{
  "error": {
    "grant_expired": "Sesión expirada"
  }
}
```

:::tip Tip
Para automatizar usa Bearer token: no depende de una sesión de navegador, no exige token CSRF y no expira. Deja la cookie de sesión para explorar la API mientras trabajas en la consola.
:::

## Manejo de errores

Toda la API de administración comparte la misma manera de informar los fallos. Conviene programar el manejo de errores contra este contrato transversal y no contra la lista de respuestas de una llamada puntual.

### El sobre de error

Cuando hay algo que explicar, la respuesta trae un objeto con una única clave `errors`, cuyo valor es una lista. La forma simple es una lista de textos, ya traducidos al idioma del usuario dueño de la credencial:

```json
{
  "errors": [
    "No es posible eliminar este elemento"
  ]
}
```

Los errores de validación de un recurso y los de publicación usan una forma estructurada, donde cada elemento identifica el campo que falló:

```json
{
  "errors": [
    {
      "field": "name",
      "messages": [
        "Nombre no puede estar en blanco"
      ],
      "details": [
        {
          "error": "blank"
        }
      ]
    }
  ]
}
```

- `field` es el atributo afectado. Los atributos anidados llegan con la ruta completa, en la forma `padre[hijo]`, y los elementos de una colección incluyen su posición, `padre[0][hijo]`.
- `messages` trae los textos que puedes mostrar a una persona.
- `details` trae el código del error, para que puedas ramificar sin depender del texto traducido.

Trata `errors` como una lista que puede venir en cualquiera de las dos formas: revisa si el elemento es un texto o un objeto antes de leer `field`.

### Códigos de estado

El estado por omisión de una operación que falla en la API de administración es `409 Conflict`. Cuando el controlador no indica otro, cualquier error de negocio o de validación de un recurso sale como `409` con el sobre `errors`, no como el `400` o el `422` que se esperaría en otras APIs. Si tu cliente trata el `409` como un conflicto de concurrencia y reintenta, va a reintentar en vano.

| Estado | Cuerpo | Cuándo lo recibes |
| --- | --- | --- |
| `401 Unauthorized` | <code v-pre>{}</code> | No hay credencial válida: falta la cabecera `Authorization`, el token no existe o el administrador dueño del token está desactivado. |
| `401 Unauthorized` | Vacío | La credencial es válida, pero el usuario no tiene el permiso que exige la operación. |
| `401 Unauthorized` | <code v-pre>{"error": {"grant_expired": "..."}}</code> | La sesión de la cookie de administrador expiró o fue revocada. |
| `403 Forbidden` | Vacío | Falló la verificación del token CSRF en una escritura autenticada con cookie de sesión. |
| `403 Forbidden` | <code v-pre>{"error": {"pending_password_reset": "..."}}</code> | El usuario dueño de la credencial tiene pendiente el cambio de contraseña: un administrador lo creó desde la consola o le asignó una contraseña, y todavía no la cambia. Toda llamada, con Bearer token o con cookie, responde así hasta que ese usuario inicia sesión en la consola con su nombre de usuario y contraseña y define una nueva. |
| `404 Not Found` | <code v-pre>{}</code> o <code v-pre>{"errors": [...]}</code> | El recurso o el sitio de la ruta no existen, o el usuario no alcanza a verlos. |
| `409 Conflict` | <code v-pre>{"errors": [...]}</code> | Estado por omisión de una operación fallida. |
| `422 Unprocessable Entity` | <code v-pre>{"errors": [...]}</code> o vacío | Los parámetros de la llamada no son válidos. |

:::warning Atención
Tres de estas respuestas llegan sin cuerpo y sin ningún mensaje que explique el motivo: el `403` de CSRF, el `401` por permisos insuficientes y parte de los `422`. Y como el `401` cubre tanto "no estás autenticado" como "no tienes permiso", la única señal para distinguirlos es el cuerpo: <code v-pre>{}</code> apunta a la credencial y el cuerpo vacío apunta a los permisos. Registra el estado y la ruta en tu integración, porque la respuesta no te va a dar más pistas.
:::

Ninguno de estos errores mejora al reintentarlo: un `401`, un `403` o un `409` vuelven a fallar igual mientras no cambies la credencial, el token CSRF o los datos de la llamada. El `403` por contraseña pendiente se resuelve solo cuando el usuario define su nueva contraseña.

## Paginación

Cuando se trata de APIs, en ocasiones la cantidad de resultados de una consulta es demasiado alto para ser eficiente y ordenado. Para mejorar la comprensión de estos datos por una persona se puede hacer uso de la **paginación**.

Por ejemplo, si quieres revisar la lista completa de las entregas de correos a clientes (`message deliveries`) de una campaña de correo determinada (`campaign`), puedes utilizar el _endpoint_ que lista los _message deliveries_ con el ID de la campaña que obtuviste en [Llamar a la API](/es/platform/core/api.html#llamar-a-la-api), pasándolo en el parámetro `campaign_id`:

```shell script
curl -X GET "https://test.modyo.com/api/admin/customers/my-realm/messaging/message_deliveries?campaign_id=15" -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
```
Por ejemplo, al ver el correspondiente _response_ de esta llamada:

```json
{
	"message_deliveries": [{
		"id": 1506,
		"user_name": "Samuel L. Jackson",
		"user_email": "contact@mrjackson.com",
		"type": "admin.messaging.mail",
		"sent_at": "2019-07-15T17:05:20.000-03:00",
		"opened": false,
		"campaign_name": "Test campaign 01"
	}, {
		"id": 1505,
		"user_name": "John Travolta",
		"user_email": "john.travolta@modyo.com",
		"type": "admin.messaging.mail",
		"sent_at": "2019-07-15T17:05:20.000-03:00",
		"opened": false,
		"campaign_name": "Test campaign 01"
	}, {
		"id": 1504,
		"user_name": "Al Pacino",
		"user_email": "mr.pacino@globalmovies.com",
		"type": "admin.messaging.mail",
		"sent_at": "2019-07-15T17:05:20.000-03:00",
		"opened": false,
		"campaign_name": "Test campaign 01"
	}, {
		"id": 1503,
		"user_name": "Silvester Stallone",
		"user_email": "stallone.54@gmail.com",
		"type": "admin.messaging.mail",
		"sent_at": "2019-07-15T17:05:20.000-03:00",
		"opened": false,
		"campaign_name": "Test campaign 01"
	}, {
		"id": 1502,
		"user_name": "Linda Hamilton",
		"user_email": "hamilton@hamilton.co",
		"type": "admin.messaging.mail",
		"sent_at": "2019-07-15T17:05:20.000-03:00",
		"opened": false,
		"campaign_name": "Test campaign 01"
	}, {
		"id": 1501,
		"user_name": "Sigourney Weaver",
		"user_email": "contact@weaverproductions.com",
		"type": "admin.messaging.mail",
		"sent_at": "2019-07-15T17:05:20.000-03:00",
		"opened": false,
		"campaign_name": "Test campaign 01"
	}, {
		"id": 1500,
		"user_name": "Mark Hamill",
		"user_email": "hamillhimself@modyo.com",
		"type": "admin.messaging.mail",
		"sent_at": "2019-07-15T17:05:20.000-03:00",
		"opened": false,
		"campaign_name": "Test campaign 01"
	}, {
		"id": 1499,
		"user_name": "Anthony Daniels",
		"user_email": "bep.bep@daniels.com",
		"type": "admin.messaging.mail",
		"sent_at": "2019-07-15T17:05:20.000-03:00",
		"opened": false,
		"campaign_name": "Test campaign 01"
	}, {
		"id": 1498,
		"user_name": "Harrison Ford",
		"user_email": "ford@harrisonford.com",
		"type": "admin.messaging.mail",
		"sent_at": "2019-07-15T17:05:20.000-03:00",
		"opened": false,
		"campaign_name": "Test campaign 01"
	}, {
		"id": 1497,
		"user_name": "Meryl Streep",
		"user_email": "meryl@representationms.com",
		"type": "admin.messaging.mail",
		"sent_at": "2019-07-15T17:05:20.000-03:00",
		"opened": false,
		"campaign_name": "Test campaign 01"
	}],
	"meta": {
		"total_entries": 1078,
		"per_page": 10,
		"current_page": 1,
		"total_pages": 108
	}
}
```
Como bien podrás observar, el objeto ``message_deliveries`` dentro del JSON contiene una lista de 10 elementos, donde cada uno representa un _message delivery_ o entrega concreta de un correo de campaña a un usuario determinado, y cada objeto tiene atributos relevantes a este concepto, como el nombre y correo del cliente o la fecha en donde se envió. ¿Dónde están los demás registros? La paginación de los recursos es una parte importante al momento de hacer uso de APIs.

El objeto `meta` contiene la información relevante para poder recorrer una gran cantidad de registros, mediante pequeños grupos de registros o páginas.

Los 4 atributos son:

- `total_entries`: El número total de items del recurso consultado
- `per_page`: La cantidad de items que se entregarán por cada página
- `current_page`: La ventana actual de datos
- `total_pages`: El total de páginas, o grupos de elementos que puedes consultar.

En el ejemplo anterior, aparte de contar con los primeros 10 registros, existen un total de 1078 entradas, agrupadas en 108 páginas. Si quieres obtener la segunda página de estos datos, se necesita agregar el parámetro `page` con valor igual a 2, invocando nuevamente la URL. Para modificar la cantidad de registros por página, agrega el parámetro `per_page` con el valor deseado.

Por ejemplo, si quieres obtener la página 30, pero esta vez con los _message deliveries_ agrupados en páginas de 5 elementos:

```shell script
curl -X GET "https://test.modyo.com/api/admin/customers/my-realm/messaging/message_deliveries?campaign_id=15&page=30&per_page=5" -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
```

Lo que entrega un response como el siguiente:

```json
{
	"message_deliveries": [{
		"id": 1341,
		"user_name": "Test user 868",
		...
	}, {
		"id": 1342,
		"user_name": "Test user 869",
		...
	}, {
		"id": 1343,
		"user_name": "Test user 870",
		...
	}, {
		"id": 1344,
		"user_name": "Test user 871",
		...
	}, {
		"id": 1345,
		"user_name": "Test user 872",
		...
	}],
	"meta": {
		"total_entries": 1078,
		"per_page": 5,
		"current_page": 30,
		"total_pages": 216
	}
}
```

Finalmente, la API siempre retornará la primera página (`current_page: 1`) de recursos agrupados por páginas de 10 elementos (`per_page: 10`) de manera predeterminada.

### Límite de registros por página

`per_page` tiene un tope de 100 registros. Si pides un valor mayor, la API lo recorta en silencio: responde `HTTP 200 OK` con 100 registros, sin error y sin ninguna advertencia en el cuerpo. El único lugar donde ves cuántos registros trae realmente cada página es `meta.per_page`, así que conviene leerlo en vez de dar por hecho el valor que enviaste.

Los valores fuera de rango tampoco fallan, sino que caen a un valor predeterminado sin avisar:

- `per_page=0`, un valor negativo o un valor que no es un número no traen "todo": la página queda en los 10 registros predeterminados.
- `page=0`, un valor negativo o un valor que no es un número devuelven la primera página.
- Existe un tercer parámetro, `paginate`, que tampoco desactiva la paginación. Con `paginate=false` o `paginate=0` la página pasa a 100 registros, exactamente lo mismo que `per_page=100`.

No hay ninguna combinación de parámetros que devuelva una colección completa en una sola llamada. Para llevarte todos los registros de un recurso, recorre las páginas hasta `meta.total_pages`.

:::warning Atención
`GET /api/admin/business_events` no sigue estas reglas. Su `per_page` no tiene tope de 100: acepta hasta 10000 eventos por página y un valor mayor hace fallar la llamada. Con `paginate=false` y sin `per_page`, la respuesta trae hasta 1000 eventos. En cambio, `meta.per_page` y `meta.total_pages` se calculan como si el tope fuera 100: con `per_page=500` recibes 500 eventos, pero `meta.per_page` vale 100 y `meta.total_pages` cuenta páginas de 100. `meta.total_entries` sí es exacto, así que calcula la cantidad de páginas dividiéndolo por el `per_page` que enviaste.

Tampoco aplica los valores predeterminados: con `per_page=0` recibes un solo evento, y `page=0` hace fallar la llamada. Además, este recurso solo alcanza los primeros 10000 eventos de la consulta: si `page` multiplicado por `per_page` supera ese número, la respuesta vuelve a traer la última página alcanzable, con `HTTP 200 OK`. Para llegar a los demás eventos, acota la consulta con `from_date` y `to_date`.
:::

## Parámetros comunes de las colecciones

Los listados de la API de administración comparten un grupo de parámetros de query que se comportan igual en todos los recursos, aunque el catálogo Swagger no los declare en todas las operaciones. Comparten también la misma forma de fallar: un valor que la plataforma no entiende no devuelve un error, se ignora y la consulta responde con su comportamiento predeterminado.

### Selección de atributos con only

`only` recorta los atributos que trae la respuesta y está disponible en la mayoría de los listados y detalles de la API de administración. Se envía como arreglo, repitiendo el parámetro una vez por atributo:

```shell script
curl -X GET "https://test.modyo.com/api/admin/customers/my-realm/messaging/campaigns?only[]=id&only[]=name" -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
```

Un atributo que no existe en el recurso simplemente no aparece en la respuesta y no genera error.

:::warning Atención
No uses `only` como lista separada por comas. La plataforma no divide el valor por comas: toma `id,name` como el nombre de un único atributo, no encuentra ninguno que se llame así y devuelve la colección con todos sus objetos vacíos, con `HTTP 200 OK`.
:::

:::tip Tip
En `GET /api/admin/versions`, `only` significa otra cosa: no recorta atributos, sino que filtra las versiones por tipo con una lista separada por comas de `editable`, `current`, `backup` y `scheduled`, por ejemplo `only=editable,current`. Es el único recurso donde `only` se interpreta de esta forma.
:::

### Orden con sort_by y order

`sort_by` elige el atributo por el que se ordena la colección y `order` el sentido, con los valores `ASC` y `DESC`. `order` no distingue mayúsculas de minúsculas, así que `asc` y `desc` también sirven.

Salvo que el recurso indique otra cosa, el orden predeterminado es `updated_at` en `DESC`, del registro modificado más recientemente al más antiguo.

Ambos parámetros caen a ese orden predeterminado en silencio cuando el valor no sirve:

- `order` con cualquier valor distinto de `ASC` o `DESC` se ignora por completo.
- `sort_by` solo se respeta si nombra un atributo real del recurso y, cuando el recurso publica en el catálogo Swagger una lista de atributos ordenables, si pertenece a esa lista. Un atributo mal escrito o fuera de la lista se ignora.

Un listado ordenado por un `sort_by` inválido se ve igual que uno ordenado correctamente, así que revisa el orden de los registros en la respuesta antes de dar la consulta por buena.

### Rangos de fecha

`date_range` acota una colección por la fecha de creación de sus registros y `updated_date_range` por la fecha de la última modificación. Los dos reciben las dos fechas como arreglo:

```shell script
curl -X GET "https://test.modyo.com/api/admin/logs?date_range[]=2026-07-01&date_range[]=2026-07-15" -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
```

La plataforma expande cada fecha al día completo: el primer valor pasa al inicio de ese día y el segundo al final. La hora que envíes no cambia nada, `date_range[]=2026-07-15T18:00:00` cubre igualmente el 15 de julio entero, y un rango con la misma fecha en los dos valores cubre ese día completo. Internamente el rango se traduce a los parámetros `from_date` y `to_date` (o `updated_from_date` y `updated_to_date`), y tiene prioridad sobre ellos cuando los envías en la misma llamada.

:::warning Atención
Si alguna de las dos fechas no se puede interpretar, o si envías el arreglo con un solo valor, la plataforma descarta el rango completo y responde la colección sin ningún filtro de fecha, con `HTTP 200 OK` y sin mensaje de error. En esa misma llamada también se descartan los `from_date` y `to_date` que hayas enviado por separado. En vez de un `4xx` recibes muchos más registros de los que pediste, así que valida las fechas antes de armar la llamada y compara `meta.total_entries` con lo que esperabas.
:::

Los recursos que aceptan `date_range` son:

- `GET /api/admin/logs`
- `GET /api/admin/business_events`
- `GET /api/admin/customers/{realm_uid}/payments/orders`
- `GET /api/admin/customers/{realm_uid}/originations/{id}/submissions`, el único que acepta también `updated_date_range`
- `GET /api/admin/customers/{realm_uid}/originations/{id}/assignees`

En las respuestas de una originación y en sus asignados, el filtro solo se aplica cuando el rango llega con las dos fechas; en cualquier otro caso la colección se devuelve sin filtrar.

## Registros (Logs)

Con la API de Logs obtienes los registros de actividad que suceden dentro de Modyo Platform. Cada registro guarda el tipo de acción (`type`), el administrador que la ejecutó (`user`, vacío cuando la acción es automática), el objeto afectado (`loggeable_type` y `loggeable_id`) y el contexto donde ocurrió (`site_id`, `space_id`). La actividad de los usuarios finales llega con tipos de registro propios, como `user_login_log` o `form_response_created_log`.

Para obtener el listado, llama al recurso sin parámetros:  

```shell script
curl -X GET https://test.modyo.com/api/admin/logs -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
```

La consulta devuelve los registros que alcanzas a ver, del más reciente al más antiguo, y los despliega en un JSON:

```json
{
  "logs": [
    {
      "id": 26826,
      "account_id": 4,
      "site_id": null,
      "space_id": 12,
      "site_host": null,
      "site_name": null,
      "space_name": "Mi espacio",
      "realm_id": null,
      "realm_name": null,
      "user": {
        "uuid": "930d2b95-e34e-49b0-b5e9-6c6b90d66447",
        "avatar": {
          "id": 100,
          "file_name": "user_avatar.png",
          "url_original": "https://test.modyo.com:3000/assets/avatar/user_avatar_original.png",
          "url_small": "https://test.modyo.com:3000/assets/avatar/user_avatar_small.png",
          "url_medium": "https://test.modyo.com:3000/assets/avatar/user_avatar_medium.png"
        },
        "name": "Sam Johnson",
        "first_name": "Sam",
        "last_name": "Johnson",
        "email": "sam.johnson@modyo.com",
        "url": "https://test.modyo.com/admin/settings/admin_users/930d2b95-e34e-49b0-b5e9-6c6b90d66447"
      },
      "type": "entry_unpublished_log",
      "value_1": "5f1c2d3e-8a4b-4c6d-9e0f-1a2b3c4d5e6f",
      "value_2": "post",
      "value_3": "mi-espacio",
      "request_ip": "127.0.0.1",
      "request_user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
      "title": "Entrada despublicada",
      "description": "<a href=\"https://test.modyo.com/admin/content/spaces/mi-espacio/entries/5f1c2d3e-8a4b-4c6d-9e0f-1a2b3c4d5e6f?target_locale=es\">Entrada</a> despublicada por <a href=\"https://test.modyo.com/admin/settings/admin_users/930d2b95-e34e-49b0-b5e9-6c6b90d66447\">Sam Johnson</a> en <a href=\"https://test.modyo.com/admin/content/spaces/mi-espacio\">Mi espacio</a>",
      "loggeable_id": 15,
      "loggeable_type": "Content::Entry",
      "log_origin": "admin.loggeable_types.content.entry",
      "created_at": "2026-07-15T12:20:29.000-03:00",
      "options": "{\"element_url\":\"https://test.modyo.com/admin/content/spaces/mi-espacio/entries/5f1c2d3e-8a4b-4c6d-9e0f-1a2b3c4d5e6f?target_locale=es\",\"title\":\"Mi entrada (5f1c2d3e-8a4b-4c6d-9e0f-1a2b3c4d5e6f)\"}",
      "automated": false,
      "log_key_user_action": "admin.logs.entry_unpublished_log.activity",
      "defaults": {
        "site_or_account": "<a href=\"https://test.modyo.com/admin/content/spaces/mi-espacio\">Mi espacio</a>",
        "user": "<a href=\"https://test.modyo.com/admin/settings/admin_users/930d2b95-e34e-49b0-b5e9-6c6b90d66447\">Sam Johnson</a>",
        "loggeable": "Mi entrada (5f1c2d3e-8a4b-4c6d-9e0f-1a2b3c4d5e6f)",
        "value_1": "5f1c2d3e-8a4b-4c6d-9e0f-1a2b3c4d5e6f",
        "value_2": "post",
        "value_3": "mi-espacio",
        "element_url": "<a href=\"https://test.modyo.com/admin/content/spaces/mi-espacio/entries/5f1c2d3e-8a4b-4c6d-9e0f-1a2b3c4d5e6f?target_locale=es\">Entrada</a>"
      }
    }
  ],
  "meta": {
    "total_entries": 2,
    "per_page": 10,
    "current_page": 1,
    "total_pages": 1
  }
}
```

`type` es el identificador del tipo de registro, el mismo valor que aceptan los filtros `type`, `types` y `not_in_type`. `title` y `description` llegan como texto, ya traducido al idioma del usuario dueño de la credencial, y `description` puede incluir enlaces HTML. `user` identifica al administrador por su `uuid`, y `automated` vale `true` cuando la acción no la ejecutó un administrador. Además de `site_id` y `space_id`, el contexto llega con `realm_id` y con los nombres `site_name`, `space_name` y `realm_name`.

### Qué registros ves

El alcance de la respuesta depende del usuario dueño del token:

- Si es el dueño de la cuenta, tiene el rol **Full admin** a nivel de cuenta o pertenece a un grupo con ese rol, recibe todos los registros de la cuenta.
- Cualquier otro administrador recibe solo sus propios registros cuando no acota la consulta, con `HTTP 200 OK` y sin ninguna advertencia en la respuesta.
- Para ver la actividad de un contexto completo, agrega `realm_id`, `site_id` o `space_id` con el identificador de un contexto donde el usuario tenga un rol asignado, o donde tenga alcance completo por los permisos agrupados **Gestionar Clientes**, **Gestionar Canales** o **Gestionar Contenido**. Si envías más de uno, la validación del alcance se hace sobre el primero que esté presente en este orden: `realm_id`, `site_id` y `space_id`.
- Si acotas la consulta a un contexto donde el usuario no tiene rol, vuelves a recibir solo sus propios registros de ese contexto, que suele ser una lista vacía.

:::warning Atención
Hasta 10.1, los usuarios con el rol **Default admin** a nivel de cuenta también recibían todos los registros. Desde 10.2 solo el dueño de la cuenta y el rol **Full admin** conservan ese alcance. Si tu integración consulta `/api/admin/logs` con un token que no tiene ese rol, agrega `realm_id`, `site_id` o `space_id` a la llamada: de lo contrario los registros que antes recibías dejan de aparecer, sin ningún error que lo advierta.
:::

### Filtros de la consulta

`GET /api/admin/logs` acepta estos parámetros:

- `type`: un tipo de registro, por ejemplo `entry_published_log`.
- `types`: varios tipos en un solo valor, separados por coma y espacio, con el espacio codificado como `%20`. Si envías `type` y `types` en la misma llamada, manda `types`.
- `not_in_type`: excluye tipos de registro, con el mismo formato de `types`.
- `from_date` y `to_date`: rango de creación en formato ISO 8601, por ejemplo `2026-07-01T00:00:00-03:00`. Si los omites, la consulta abarca todo el historial hasta el final del día en curso. Una fecha que no se puede interpretar devuelve `HTTP 409 Conflict`.
- `date_range`: atajo del rango anterior. Recibe dos fechas como arreglo (`date_range[]=2026-07-01&date_range[]=2026-07-15`) y las expande al inicio del primer día y al final del segundo. Tiene prioridad sobre `from_date` y `to_date`, y si alguna de las dos fechas no se puede interpretar la plataforma descarta el rango completo en silencio y responde con el historial sin filtrar por fecha.
- `realm_id`, `site_id` y `space_id`: acotan los registros al realm, sitio o espacio indicado, y definen el alcance de la consulta.
- `user_uuid`: registros de un administrador puntual, por su `uuid`. Con el valor literal `system` obtienes solo los registros automáticos, es decir, los que no tienen un administrador detrás.
- `loggeable_type` y `loggeable_id`: el objeto afectado por la acción, por ejemplo `loggeable_type=Content::Entry`.
- `application`: con el valor `core` acota a los objetos del núcleo de la plataforma, como sitios, entradas, roles, formularios y webhooks. No incluye los registros cuyo objeto afectado es un espacio (`loggeable_type=Content::Space`). `core` es el único valor admitido, así que no envíes otro.
- `query`: texto libre. Busca por prefijo en el título del registro y en el nombre y el correo de su autor.
- `admin_actions`: con `true` deja fuera la actividad de los usuarios finales.
- `sort_by` y `order`: orden del listado.
- `page` y `per_page`: paginación, tal como se describe en [Paginación](/es/platform/core/api.html#paginacion).

:::warning Atención
`user_type` y `user_id` no filtran nada. El listado los ignora: una llamada con `user_type=User` o con `user_type=AdminUser` devuelve el mismo resultado que la llamada sin parámetros. Si los usas para separar la actividad de los administradores de la de los usuarios finales, en realidad estás recibiendo el listado completo.
:::

### Separar la actividad de administración

`admin_actions=true` es el filtro que sí distingue ambas actividades: excluye los registros de tipo `email_delivered_log`, `email_opened_log`, `email_spam_report_log`, `form_response_created_log`, `notification_opened_log` y `user_login_log`.

```shell script
curl -X GET "https://test.modyo.com/api/admin/logs?admin_actions=true" -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
```

Si el usuario del token no es el dueño de la cuenta ni tiene un rol a nivel de cuenta, `admin_actions=true` limita además la respuesta a los sitios donde tenga un rol asignado, e ignora el `site_id` que hayas enviado.

No existe el filtro inverso. Para quedarte solo con la actividad de los usuarios finales, enumera los tipos que te interesan en `types`:

```shell script
curl -X GET "https://test.modyo.com/api/admin/logs?types=user_login_log,%20form_response_created_log" -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
```

### Orden de los resultados

`sort_by` acepta estos campos del registro: `created_at`, `type`, `loggeable_type`, `loggeable_id`, `site_id`, `space_id`, `realm_id`, `user_id`, `user_uuid` o `automated`, y `order` acepta `asc` y `desc`. De manera predeterminada el listado llega ordenado por `created_at` en `desc`, del registro más nuevo al más antiguo.

### Detalle y tipos de registro

- `GET /api/admin/logs/{id}` devuelve un registro puntual.
- `GET /api/admin/logs/types` devuelve los tipos de registro que existen en la cuenta y cuántos registros hay de cada uno. Es la forma de conocer los valores válidos de `type`, `types` y `not_in_type`.

Ambas llamadas se rigen por el permiso agrupado **Ver Logs de Actividad**. El listado `GET /api/admin/logs` no exige un permiso puntual: lo que cambia según el usuario es el alcance de la respuesta.

## Perfil del usuario autenticado

El recurso `/api/admin/profile` trabaja siempre sobre el usuario dueño del token, sin recibir identificadores, y no exige permisos: basta con estar autenticado. Es el recurso que reemplaza a `GET /api/admin/admin_users/me`, que ya no existe.

El catálogo Swagger de `/api/admin/docs` documenta este recurso en la sección "Admin Profile". Sus llamadas son las siguientes:

```http request
GET    /api/admin/profile                              Perfil del usuario autenticado
PUT    /api/admin/profile                              Actualiza nombre, apellido, idioma y avatar
PUT    /api/admin/profile/update_protected_attributes  Actualiza nombre de usuario y correo
DELETE /api/admin/profile/remove_otp                   Elimina el segundo factor
GET    /api/admin/profile/sessions                     Lista las sesiones activas
DELETE /api/admin/profile/revoke_session               Revoca sesiones activas
```

### Consultar y actualizar el perfil

`GET /api/admin/profile` devuelve los datos del usuario del token: `id`, `uuid`, `name`, `first_name`, `last_name`, `email`, `username`, `avatar`, `lang`, `time_zone`, `active`, `created_at`, `updated_at`, `last_login_at`, `last_login_ip`, los roles asignados (`roles`) y las aplicaciones a las que tiene acceso (`application_access`).

```shell script
curl -X GET https://test.modyo.com/api/admin/profile -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
```

`PUT /api/admin/profile` actualiza solo `first_name`, `last_name`, `lang` y `avatar_id`. `lang` acepta `en`, `es` y `pt`, y `avatar_id` es el identificador de un avatar creado con `/api/admin/profile_avatar`.

```shell script
curl -X PUT https://test.modyo.com/api/admin/profile -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56' -H 'Content-Type: application/json' -d '{"first_name":"Sam","last_name":"Johnson","lang":"es"}'
```

:::tip Tip
Si incluyes `username` o `email` en esta llamada, la plataforma los descarta y responde `HTTP 200 OK` con esos campos sin cambios. Para modificarlos usa la llamada de atributos protegidos.
:::

### Cambiar el nombre de usuario o el correo

`username` y `email` son atributos protegidos: se actualizan solo con `PUT /api/admin/profile/update_protected_attributes`, y la llamada debe incluir `current_password` con la contraseña actual del usuario.

```shell script
curl -X PUT https://test.modyo.com/api/admin/profile/update_protected_attributes -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56' -H 'Content-Type: application/json' -d '{"email":"sam.johnson@modyo.com","current_password":"tu-contrasena-actual"}'
```

Ten en cuenta que:

- El cambio de `username` se aplica de inmediato y responde `HTTP 200 OK`.
- El cambio de `email` no se aplica de inmediato: la plataforma envía un correo de confirmación a la nueva dirección y la mantiene pendiente hasta que el usuario la confirma.
- Si `current_password` es incorrecta o viene vacía, la respuesta es `HTTP 422 Unprocessable Entity` y nada se actualiza.

:::danger Peligro
Los intentos fallidos con contraseña incorrecta se acumulan mientras no pasen más de 15 minutos entre uno y otro. El límite no es un ajuste de tu cuenta: con la configuración predeterminada de la plataforma, los tres primeros intentos fallidos responden `HTTP 422` con un mensaje que pide revisar la contraseña actual. Desde el cuarto, la respuesta sigue siendo `HTTP 422`, pero con un mensaje que avisa que alcanzaste el límite de intentos, y la plataforma revoca todas las sesiones activas del usuario, así que quien esté trabajando en el panel de administración queda con la sesión cerrada. Esto se repite con cada intento fallido hasta que pasan 15 minutos desde el tercero, y ahí el conteo vuelve a empezar. Controla el `HTTP 422` en tu integración y no reintentes en bucle.
:::

### Segundo factor

`DELETE /api/admin/profile/remove_otp` elimina la configuración de segundo factor del usuario autenticado y responde `HTTP 200 OK`, incluso si el usuario no tenía segundo factor configurado.

:::warning Atención
Esta llamada no pide la contraseña actual, así que cualquier token válido del usuario alcanza para desactivar su segundo factor. Trata los tokens de la API de administración con el mismo cuidado que una contraseña.
:::

### Sesiones activas

`GET /api/admin/profile/sessions` lista las sesiones vigentes del usuario, de la más reciente a la más antigua. Cada sesión trae su `uuid`, la fecha en que se abrió (`created_at`), la IP desde donde se abrió (`request_ip`), el navegador (`device_name`), el sistema operativo (`device_os`), el tipo de dispositivo (`device_type`, con valor `Desktop` o `Mobile`) y, cuando corresponde, el nombre del administrador que la abrió por impersonación (`impersonator`).

`DELETE /api/admin/profile/revoke_session` revoca sesiones: con `grant_uuid` revocas una sesión puntual y con `all=true` revocas todas las sesiones activas. La respuesta es `HTTP 204 No Content`, y `HTTP 404 Not Found` si la sesión ya estaba revocada.

```shell script
curl -X DELETE "https://test.modyo.com/api/admin/profile/revoke_session?all=true" -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
```

:::tip Tip
La sesión asociada a la llamada queda fuera de la revocación, incluso si envías su propio `grant_uuid`: la respuesta es `HTTP 204 No Content` y la sesión sigue activa.
:::

Para conocer más acerca de cómo hacer consultas a la información de Content vía API, ve nuestra guía y ejemplos en [API](/es/platform/content/public-api-reference).
