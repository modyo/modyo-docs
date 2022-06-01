---
search: true
---

# API de administración

Además de la funcionalidad que provee la plataforma Modyo, esta cuenta con una API administrativa. Te permite, de forma autenticada, acceder de forma externa a distintas acciones como listar, crear, y eliminar elementos como formularios, layouts, contenido, campos personalizados, menús de navegación, campañas de correo, entre otros.

De esta forma, es posible realizar labores administrativas consumiendo la API y sin depender de la interfaz de Modyo, lo que te otorga mayor libertad para controlar tu trabajo.

:::danger Peligro
Es importante asegurarse que el portal de APIs no sea expuesto de manera pública a Internet. Las llamadas hacia las APIs deben realizarse desde un ambiente seguro usando los protocolos de seguridad adecuados (HTTPS) y evita compartir los tokens de autenticación.
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

Por ejemplo, en la API Administrativa (/api/admin/docs) se muestran distintas secciones, como "Locks", "Layout pages", "Email templates" o "Content". Si te centras en esta última, ves que cuenta con un listado de operaciones que realiza sobre el módulo Content de Modyo, nos vamos a enfocar en solo en algunas llamadas hacia los Espacios:

```http
Content

...
GET    /content/spaces   Spaces List
POST   /content/spaces   Create a space
...
```

El listado muestra para cada operación el método HTTP, la ruta, y la descripción de lo que realiza.

### Partes de una llamada

Por ejemplo, al hacer una llamada hacia `/content/spaces`, conseguirás una respuesta del servidor. El `body` de este `response` es un objeto JSON que contiene un elemento llamado "spaces", el que corresponde a una lista (`array`) de elementos de este tipo.

Además, contiene metadata referente a la `response`, donde se incluyen datos como el total de entradas que satisfacen esta consulta (`total_entries`), la cantidad máxima de entradas o elementos devueltos por cada `request` (`per_page`), la "ventana" actual de datos o página actual (`current_page`) y el total de páginas (`total_pages`).

Con estos datos puedes recorrer fácilmente los datos de un servicio determinado pasando los parámetros requeridos.

También cada API cuenta con un listado de posibles _responses_ que obtienes al invocar estos métodos, de forma que puedas preparar adecuadamente tu aplicación para manejar los datos.

### Example Value

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
      "cache_max_age": 300,
      "cache_enabled": false
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

### Listado de Modelos

Al final de la documentación, encontrarás una sección llamada "Models" que contiene todos los modelos involucrados en la documentación. Estos te permiten comprender los recursos disponibles y sus atributos utilizados en las APIs.

El siguiente código es una parte del modelo para objeto **User**:

```
User{
schemas	    [...]
id	        string example: 2441309d85324e7793ae
externalId	string example: 2441309d85324e7793ae
meta	      string example: OrderedMap { "resourceType": "User", "created": "2018-03-27T19:59:26.000Z", "lastModified": "2018-03-27T19:59:26.000Z" }
userName	  string example: Test_User_dfeef4c5-5681-4387-b016-bdf221e82081
name	      string example: OrderedMap { "familyName": "familyName", "givenName": "givenName" }
active	    string
example:    true
emails	    [...]
}
```

## Llamar a la API

Una vez que conoces el servicio que consultarás de acuerdo a [Explorando la API](/es/platform/core/api.html#explorando-el-api) y un método de [Autenticación](/es/platform/core/api.html#autenticacion)), ya se puede realizar un _request_ a la URL del recurso requerido.

Para este ejemplo, obtendremos la lista de todas las campañas de correo que se crearon en la plataforma. De acuerdo a la documentación en Swagger _(test.modyo.com/api/admin/docs)_, se necesita llamar a la siguiente URL:

```http request
GET https://[account_host]/api/admin/messaging/campaigns
```
Este servicio acepta parámetros vía URL para filtrar por tipos (`mailing` y `notification`) mediante el parámetro `type`. Te permite incluir solo campañas que cuentan con _deliveries_ (parámetro `filtered`) o bien requerir sólo una lista reducida de atributos para ser incluídos en la _response_ (parámetro `only`).

#### Llama usando cURL

Para el ejemplo solo se desea incluir las campañas de tipo `mailing` (`type=mailing`), de forma que la _request_, después de sumar los headers de autenticación necesarios, quedaría de la siguiente forma:

```shell script
curl -X GET https://test.modyo.com/api/admin/messaging/campaigns?type=mailing -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
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
		"last_sent": "2019-07-15T17:05:12.000-03:00",
		"segments_enabled": false,
		"segment_list": "--",
		"created_at": "2019-07-15T16:58:43.000-03:00"
	}, {
		"id": 11,
		"name": "Test campaing 02 Mar8 1546",
		"uuid": "2c210b2c-af4e-4f9c-b2c5-b768dde622a2",
		"type": "mailing",
		"sent_count": 6,
		"last_sent": "2019-03-11T15:17:20.000-03:00",
		"segments_enabled": true,
		"segment_list": "Test Mailing Mar08",
		"created_at": "2019-03-08T15:46:52.000-03:00"
	}, {
		"id": 6,
		"name": "campaign jan7 1210",
		"uuid": "7dc46be9-ec5e-4468-b74e-a5ba4b88ecb4",
		"type": "mailing",
		"sent_count": 327,
		"last_sent": "2019-01-07T16:53:33.000-03:00",
		"segments_enabled": true,
		"segment_list": "--",
		"created_at": "2019-01-07T12:10:22.000-03:00"
	}, {
		"id": 5,
		"name": "Spanish Campaign",
		"uuid": "4b13358e-f2b7-48ef-a720-26b55e4f2502",
		"type": "mailing",
		"sent_count": 0,
		"last_sent": null,
		"segments_enabled": false,
		"segment_list": "--",
		"created_at": "2019-01-02T15:59:06.000-03:00"
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
3. Aquí podrás refinar la búsqueda utilizando los parámetros de la llamada. Haz click en **Execute**.
4. En el apartado de **Response**, podrás ver lo siguiente:
- Como ejecutar el mismo comando usando cURL
- El Request URL
- La respuesta de la plataforma Modyo.

La respuesta JSON corresponde a una lista (o colección) de campañas de correo (`campaigns`) y los atributos de cada objeto de la colección contienen información relevante para el recurso consultado. En el ejemplo, el nombre de la campaña (`name`), la última fecha en que se envío (`last_sent`), o si esta campaña fue segmentada o no (`segments_enabled`).

Aparte de la colección, se puede ver un objeto llamado `meta` que contiene información acerca de la paginación de este recurso.

Siguiendo con el ejercicio, es posible utilizar los datos obtenidos en la consulta anterior para obtener más información. Por ejemplo, podemos estar interesados en saber el número de veces que se ejecutó una campaña en particular (Campaign Deliveries) con el ID de esa campaña. Para esto, puedes volver a revisar el catálogo de servicios, y encontrarás el siguiente _endpoint_:

```http request
GET /messaging/campaigns/{campaign_id}/deliveries   Campaign deliveries list
```

De esta forma, se puede realizar un _request_ para ver la información específica de los _campaign deliveries_ de la campaña llamada "Test campaign 01", pasando en el parámetro `campaign_id` el ID de la campaña correspondiente (en este caso es el `15`):

```shell script
curl -X GET https://test.modyo.com/api/admin/messaging/campaigns/15/deliveries  -H 'Authorization: Bearer 8c280cc01fc13361aabb1183bb41b4b82faab23e990148c91406bbf5e452ab56'
```

Similar al ejemplo anterior, la _response_ se verá de la siguiente forma

```json
{
	"deliveries": [{
		"id": 29,
		"uuid": "b728b957-78e5-4e2d-b28d-8e699a665a2c",
		"campaign_id": 15,
		"starts_at": "2019-07-15T17:05:12.000-03:00",
		"ends_at": "2019-07-15T17:05:20.000-03:00",
		"sent_count": 1078,
		"reach": -1,
		"status": "completed",
		"segment_list": "--"
	}],
	"meta": {
		"total_entries": 1,
		"per_page": 10,
		"current_page": 1,
		"total_pages": 1
	}
}
```

Como puedes observar, la _response_ no es más que un objeto JSON que contiene una lista de _deliveries_ de campañas de correo (`deliveries`). En el ejemplo, se verifica que la campaña con ID `15` se ejecutó solo en una oportunidad, esta ya terminó con éxito (su `status` es `completed`) y fue recibida por 1078 personas (atributo `sent_count`).

Siguiendo este ejemplo, puedes utilizar el amplio catálogo de servicios de Modyo y construir tu aplicación de la forma que más se acomode a tus necesidades.

## Autenticación

Para utilizar la API de Modyo, es necesario primero poder autenticar a un usuario determinado que será quien realice la invocación a los distintos servicios.

Modyo provee 2 posibles métodos de autenticación para invocar la API:

* Bearer Token
* Cookie de sesión del admin

A continuación, se explica como utilizar cada uno de estos métodos

### Bearer Token

Lo primero que debes realizar, es registrar la aplicación para consumir la API. Sigue estos pasos para crear un nuevo Bearer Token:

1. Desde la plataforma Modyo, en el menú lateral, expande **Configuración** y haz click en **Acceso al API**.
2. Haz click en el botón **+ Nuevo Acceso al API**.
3. Llena el nombre, descripción, y URI de redirección del acceso.

<img src="/assets/img/platform/new-API-access.png" alt="Image showing New Admin API Acess window in Modyo Platform.">

Al guardar la información de la aplicación, Modyo mostrará una vista donde verás el _callback URL_ (el que corresponde al campo Redirect URI ingresado en el paso anterior) y además los campos _Application ID_ y _Secret_ que puedes utilizar posteriormente.

<img src="/assets/img/platform/save-API-access.png" alt="Image showing the details for the API Access in the My Application window.">

:::warning Atención
Ten en consideración que cuando se cierra sesión en alguno de tus sitios, se hará un _GET_ a todas las URL de cierre de sesión de tus aplicaciones de acceso a la API, lo que podría generar algunas redirecciones no deseadas si es que se usa una URL sin cuidado en ese campo.
:::

4. Una vez registrada la aplicación, asigna la aplicación los usuarios que harán uso de la API. Para esto, en el menú lateral, expande **Configuración** y haz click en **Equipo**.
5. Selecciona un usuario con un rol administrativo dentro de la aplicación deseada. 

Para más detalles, ve a [Usuarios y Roles](/es/platform/core/roles.html)

6. En la vista de edición del usuario administrador, haz click en _API Access_ y selecciona la opción **+ Nuevo Acceso al API**.

<img src="/assets/img/platform/team-member-API-access-1.png" alt="Image showing the Manage Access Tokens window.">

7. En el _popup_ que se muestra a continuación, selecciona el nombre de la aplicación que acabas de crear y luego haz click en **+ Nuevo Token de Acceso**.

<img src="/assets/img/platform/team-member-API-access-2.png" alt="Image showing the Generate Access Token modal window.">


:::warning Atención
Debes tener en cuenta que los usuarios administrativos solo podrán ejecutar acciones a través de la API administrativa de Modyo si es que cuentan con los permisos necesarios para realizar cada acción. Por ejemplo, un administrador con el rol de "Developer" en un sitio, no podrá ejecutar la acción "Publicar" en ese sitio.
:::

Finalmente, ahora verás que en la sección "Administrar Tokens de Acceso" aparecerá la aplicación ("My application"), junto con un valor destacado en color rojo el que corresponde precisamente al _access token_, y que utilizarás a continuación para realizar _requests_ autenticados sobre la API de Modyo.

<img src="/assets/img/platform/team-member-API-access-3.png" alt="Image showing the generated access token.">

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

### Cookie session de admin

Si estás usando Modyo desde un navegador web y tienes una sesión iniciada como administrador, entonces podrás acceder desde el mismo navegador a las URLs de la API. Podrás hacer _requests_ simplemente por contar con la cookie de sesión en la parte administrativa de la plataforma.

Recuerda que solo podrás acceder a las mismas secciones de la API a las que tengas permitido acceder desde la interfaz de Modyo.

## Paginación

Cuando se trata de APIs, en ocasiones la cantidad de resultados de una consulta es demasiado alto para ser eficiente y ordenado. Para mejorar la comprensión de estos datos por una persona se puede hacer uso de la **paginación**.

Si quieres revisar la lista completa de las entregas de correos a clientes (`message deliveries`) de una campaña de correo determinada (`campaign`) y una ejecución de envío de campaña determinada (`campaign delivery`). Con los datos obtenidos en los _requests_ de las secciones anteriores, puedes utilizar el _endpoint_ que lista los _message deliveries_, pasándo como parámetros el `campaign_id` y `delivery_id` correspondientes:

```shell script
curl -X GET https://test.modyo.com/api/admin/messaging/message_deliveries?campaign_id=15&delivery_id=29  -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
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
		"delivery_id": 29,
		"campaign_name": "Test campaign 01",
		"delivery_start_date": "2019-07-15T17:05:12.000-03:00"
	}, {
		"id": 1505,
		"user_name": "John Travolta",
		"user_email": "john.travolta@modyo.com",
		"type": "admin.messaging.mail",
		"sent_at": "2019-07-15T17:05:20.000-03:00",
		"opened": false,
		"delivery_id": 29,
		"campaign_name": "Test campaign 01",
		"delivery_start_date": "2019-07-15T17:05:12.000-03:00"
	}, {
		"id": 1504,
		"user_name": "Al Pacino",
		"user_email": "mr.pacino@globalmovies.com",
		"type": "admin.messaging.mail",
		"sent_at": "2019-07-15T17:05:20.000-03:00",
		"opened": false,
		"delivery_id": 29,
		"campaign_name": "Test campaign 01",
		"delivery_start_date": "2019-07-15T17:05:12.000-03:00"
	}, {
		"id": 1503,
		"user_name": "Silvester Stallone",
		"user_email": "stallone.54@gmail.com",
		"type": "admin.messaging.mail",
		"sent_at": "2019-07-15T17:05:20.000-03:00",
		"opened": false,
		"delivery_id": 29,
		"campaign_name": "Test campaign 01",
		"delivery_start_date": "2019-07-15T17:05:12.000-03:00"
	}, {
		"id": 1502,
		"user_name": "Linda Hamilton",
		"user_email": "hamilton@hamilton.co",
		"type": "admin.messaging.mail",
		"sent_at": "2019-07-15T17:05:20.000-03:00",
		"opened": false,
		"delivery_id": 29,
		"campaign_name": "Test campaign 01",
		"delivery_start_date": "2019-07-15T17:05:12.000-03:00"
	}, {
		"id": 1501,
		"user_name": "Sigourney Weaver",
		"user_email": "contact@weaverproductions.com",
		"type": "admin.messaging.mail",
		"sent_at": "2019-07-15T17:05:20.000-03:00",
		"opened": false,
		"delivery_id": 29,
		"campaign_name": "Test campaign 01",
		"delivery_start_date": "2019-07-15T17:05:12.000-03:00"
	}, {
		"id": 1500,
		"user_name": "Mark Hamill",
		"user_email": "hamillhimself@modyo.com",
		"type": "admin.messaging.mail",
		"sent_at": "2019-07-15T17:05:20.000-03:00",
		"opened": false,
		"delivery_id": 29,
		"campaign_name": "Test campaign 01",
		"delivery_start_date": "2019-07-15T17:05:12.000-03:00"
	}, {
		"id": 1499,
		"user_name": "Anthony Daniels",
		"user_email": "bep.bep@daniels.com",
		"type": "admin.messaging.mail",
		"sent_at": "2019-07-15T17:05:20.000-03:00",
		"opened": false,
		"delivery_id": 29,
		"campaign_name": "Test campaign 01",
		"delivery_start_date": "2019-07-15T17:05:12.000-03:00"
	}, {
		"id": 1498,
		"user_name": "Harrison Ford",
		"user_email": "ford@harrisonford.com",
		"type": "admin.messaging.mail",
		"sent_at": "2019-07-15T17:05:20.000-03:00",
		"opened": false,
		"delivery_id": 29,
		"campaign_name": "Test campaign 01",
		"delivery_start_date": "2019-07-15T17:05:12.000-03:00"
	}, {
		"id": 1497,
		"user_name": "Meryl Streep",
		"user_email": "meryl@representationms.com",
		"type": "admin.messaging.mail",
		"sent_at": "2019-07-15T17:05:20.000-03:00",
		"opened": false,
		"delivery_id": 29,
		"campaign_name": "Test campaign 01",
		"delivery_start_date": "2019-07-15T17:05:12.000-03:00"
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

* `total_entries`: El número total de items del recurso consultado
* `per_page`: La cantidad de items que se entregarán por cada página
* `current_page`: La ventana actual de datos
* `total_pages`: El total de páginas, o grupos de elementos que puedes consultar.

En el ejemplo anterior, aparte de contar con los primeros 10 registros, existen un total de 1078 entradas, agrupadas en 108 páginas. Si quieres obtener la segunda página de estos datos, se necesita agregar el parámetro `page` con valor igual a 2, invocando nuevamente la URL. Para modificar la cantidad de registros por página, agrega el parámetro `per_page` con el valor deseado.

Por ejemplo, si quieres obtener la página 30, pero esta vez con los _message deliveries_ agrupados en páginas de 5 elementos:

```shell script
curl -X GET https://test.modyo.com/api/admin/messaging/message_deliveries?campaign_id=15&delivery_id=29&page=30&per_page=5  -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
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
		"current_pag": 30,
		"total_pages": 216
	}
}
```

Finalmente, la API siempre retornará la primera página (`current_page: 1`) de recursos agrupados por páginas de 10 elementos (`per_page: 10`) de manera predeterminada.

Para conocer más acerca de las diferentes maneras de hacer uso de APIs, ve [API & SDKs](es/platform/content/public-api-reference).
