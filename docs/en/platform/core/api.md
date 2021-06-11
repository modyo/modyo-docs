---
search: true
---

# Administration API

Además de la funcionalidad que provee el Back End de Modyo, la plataforma cuenta con un API administrativa. Esta te permite, de forma autenticada, acceder de forma externa a distintas acciones como listar, crear y eliminar elementos como formularios, layouts, contenido, crear campos personalizados, menús de navegación, enviar campañas de correo, entre otros.

In this way, it is possible to perform administrative tasks consuming the API without having to depend on the Modyo interface, which gives you greater freedom to control the way you work with Modyo.

## Exploring the API

To start benefiting from the Modyo API, it is important to first know which services are available to you, the operations that can be invoked and how to use them.

Modyo facilitates this task, making the description of your _headless_ API available through the use of Swagger (which in turn implements the OpenAPI specification) in lists of services grouped according to their functionality: administrative functions, public content and user profile.

Each list of services is automatically displayed in your Modyo account by visiting the corresponding URL with your browser.

For example, you can find the details of the public content API in the following route:

```http
https://[account_host]/api/content/docs
```
De esta forma, la documentación Swagger pública de la API de contenido de la cuenta https://un.modyo.be se encuentra en https://un.modyo.be/api/content/docs. Así mismo, la documentación de las funciones administrativas y el perfil de usuario la encontrarás respectivamente en:

```http
https://[account_host]/api/admin/docs
https://[account_host]/api/profile/docs
```

In each documentation view you will find the details of the different resources that Modyo provides and the different operations you can perform on them.

Por ejemplo, en la API Administrativa (/api/admin/docs) se muestran distintas secciones, como "Locks", "Layout pages", "Email templates" o "Targets". Si te centras en esta última, ves que cuenta con un listado de operaciones que realiza sobre los targets de la aplicación:

```http
Targets

GET      /targets                Targets List
POST     /targets                Create a target
PUT      /targets/{id}           Update a target
DELETE   /targets/{id}           Delete a Target
POST     /targets/apply_filters  Create a temporary target
POST     /targets/count_matches  Create a temporary target, and return the total number of matching users
```
The list shows us the HTTP method for each operation, the route and the description of what it does.

If we click on any of these methods, like "Targets List", it shows us a description of the parameters that can be used when invoking it (in this case `query`,`sort_by` and `order`), its data types and a field to enter a test value for each parameter.

Adicionalmente podrás consultar la API directamente desde la vista en Swagger completando los parámetros antes descritos y luego clickeando en "Execute", el que invocará al API y te entrega el resultado en la misma vista.

In our example, the view will invoke the URL `https://[account_host]/api/admin/targets` with GET and will show us the JSON response to this _request_:

```json
{
  "targets": [
    {
      "id": 4,
      "uuid": "46a80345-6e27-4262-9ea3-7e2f4e9af26a",
      "name": "Hombres",
      "filters_summary": "Gender Male",
      "matches_count": 1234,
      "created_at": "2018-08-09T16:11:25.000-03:00",
      "updated_at": "2018-08-09T16:11:25.000-03:00"
    },
    {
      "id": 3,
      "uuid": "35fe710e-6f01-4f06-bba2-b44fa13d3ee3",
      "name": "Mujeres",
      "filters_summary": "Gender Female",
      "matches_count": 4532,
      "created_at": "2018-06-04T17:20:39.000-03:00",
      "updated_at": "2018-06-04T17:20:39.000-03:00"
    },
    {
      "id": 2,
      "uuid": "cd72f535-6df0-4ebf-b4e3-9649ac02a144",
      "name": "Target mobile users",
      "filters_summary": "Login Device Mobile",
      "matches_count": 4413,
      "created_at": "2018-06-04T17:20:21.000-03:00",
      "updated_at": "2018-06-04T17:20:21.000-03:00"
    },
    {
      "id": 1,
      "uuid": "6c30c2a6-8db4-4580-8ede-2a913c8a1b6b",
      "name": "Target 01",
      "filters_summary": "Age between 18 and 65",
      "matches_count": 1023,
      "created_at": "2018-06-04T17:20:05.000-03:00",
      "updated_at": "2018-06-04T17:20:05.000-03:00"
    }
  ],
  "meta": {
    "total_entries": 4,
    "per_page": 10,
    "current_page": 1,
    "total_pages": 1
  }
}
```

As you can see, the `body` of this`response` is a JSON object containing an element called "targets", which corresponds to a list (`array`) of elements of this type.

Además, contiene metadata referente a la `response`, donde se incluyen datos como el total de entradas que satisfacen esta consulta (`total_entries`), la cantidad máxima de entradas o elementos devueltos por cada `request` (`per_page`), la "ventana" actual de datos o página actual (`current_page`) y el total de páginas (`total_pages`).

 Each of the sections also has a list of possible _responses_ that you will get when you invoke the corresponding method, so that you can properly prepare your application to handle the data.


Also each of the sections has a list of possible _responses_ that you get by invoking these methods, so that you can properly prepare your application to handle the data.

For the previous example, we can check the _response_ with the list of targets we get when the answer is 200:

```json
{
  "targets": [
    {
      "id": 0,
      "uuid": "string",
      "name": "string",
      "filters_summary": "string",
      "matches_count": 0,
      "created_at": "2019-11-19T20:19:17.152Z",
      "updated_at": "2019-11-19T20:19:17.152Z"
    }
  ]
}
```

Each of the sections also has a list of possible `responses` that you will get when you invoke the corresponding method, so that you can properly prepare your application to handle the data `model`.

 This will return JSON structure of the answer, the different fields, their data types, example values, set of possible values (where appropriate) and format of the texts (`date-time`,`ipv4`, `email`, etc).

Additionally, possible cases of failure that may occur are shown, in order to control them properly.

For example, if we try to find a resource that does not exist:

```http
404            Not found
```

Finally, in each of the three catalogs (admin, content and profile), you will find a section called "Models", which contains the models involved in the services, and will allow you to better understand the available resources and their attributes.


## Using the API


### Authentication

To use the Modyo API, it is first necessary to authenticate the user who will be invoking the different services.

Modyo provides 2 possible authentication methods to invoke the API:

* Bearer Token
* Admin session cookie

We will explain how to use each of these methods below.

#### Bearer Token

Lo primero que debes realizar, es registrar la aplicación para consumir la API. Para esto, en el menú administrativo accederás a la opción _Settings_/_API access_ y clickearás el botón **+ Nuevo**.

En la vista siguiente, puedes dar a la aplicación un nombre (en el ejemplo "My application") y una descripción que la distingan, y además debes ingresar una URL de redirección y otra de cierre de sesión, la que será invocada al finalizar la sesión de un usuario.

![New API Access](/assets/img/platform/new-API-access.png)

When saving the information of your application, Modyo will show you a view where you will see the _callback URL_ (which corresponds to the Redirect URI field entered in the previous step) and the _Application ID_ and _Secret_ fields that you can use later.

![New API Access](/assets/img/platform/save-API-access.png)

:::warning
Atención Ten en consideración que cuando se cierra sesión en alguno de tus sitios, se hará un _GET_ a todas las URL de cierre de sesión de tus aplicaciones de acceso a la API, lo que podría generar algunas redirecciones no deseadas si es que se usa una URL sin cuidado en ese campo.
:::

Con la aplicación ya registrada, sólo basta asignar dicha aplicación al usuario o usuarios que harán uso de la API. Para esto, debes acceder en el menú a la opción _Settings_/_Team_ y seleccionar un usuario ya existente o bien crear uno nuevo, el que debe contar con un rol administrativo dentro de la aplicación (para más detalles referirse a [sección Usuarios y Roles](/es/platform/core/roles.html)  ).

In the edit view of the administrator user, you can click on the _API Access_ tab and select the `+ New Access Token` option.

![Team Member API Access 1](/assets/img/platform/team-member-API-access-1.png)

In the _popup_ shown below, select the name of the application we just created, in our example "My application", and then `Create Token`.

![Team Member API Access 2](/assets/img/platform/team-member-API-access-2.png)

:::warning
Atención Debes tener en cuenta que los usuarios administrativos solo podrán ejecutar acciones a través de la API administrativa de Modyo si es que cuentan con los permisos necesarios para realizar cada acción. Por ejemplo, un administrador con el rol de "Developer" en un sitio, no podrá ejecutar la acción "Publicar" en ese sitio.
:::

Finally, you will now see your application ("My application") in the "Manage Access Tokens", along with a highlighted value in red which corresponds to the _access token_ that you will need to use to perform authenticated _requests_ with the Modyo API.

![Team Member API Access 3](/assets/img/platform/team-member-API-access-3.png)

¡Listo! Con el token ya creado, puedes comenzar a sacar provecho a todas las opciones que da la API Administrativa de Modyo. Por ejemplo, si deseas ver una lista de los roles para usuarios administradores disponibles, puedes realizar un _request_ al _endpoint_ `/api/admin/roles`, incluyendo en el _header_ HTTP _"Authorization: Bearer"_ el valor del _access token_ obtenido previamente:

```shell
curl -X GET https://example.modyo.com/api/admin/roles -H 'Authorization: Bearer
 8c280dcc1fcff361aa1120836841b4b82faab23e912148c91766bbf5e452ab56'
```

The response obtained from the service is an `HTTP 200 OK` and contains the information of the roles in its _response_ in JSON format:

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

¿Y que ocurre si alguien intenta realizar un _request_ al API sin contar con un token válido? Si intentas realizar una llamada sin autenticar o con un token inválido, el sistema responderá con un error `HTTP 401 Unauthorized`:

```shell
curl  GET https://modyodev.modyo.me:3000/api/admin/roles -v

> GET /api/admin/roles HTTP/1.1
> Host: modyodev.modyo.me:3000
> User-Agent: curl/7.54.0
> Accept: */*
>
< HTTP/1.1 401 Unauthorized
....
```

#### Admin session cookie

If you are using Modyo through a web browser and you are logged in as an administrator, then you can access API URLs from the same browser, and make _requests_ simply by having a session cookie from the administrative part of the platform.

Remember that you can only access the sections of the API that you are allowed to access in the Modyo interface.

### Invoking services

Once you know which service you need to access, according to what we saw in the [Exploring the API](/platform/core/api.html#exploring-the-api) section and when you have a valid authentication method (refer to [Authentication section](/platform/core/api.html#authentication)), you can make a _request_ to the URL of the required resource.

Por ejemplo, si necesitas obtener una lista de todas las campañas de correo que se crearon. De acuerdo a la documentación en Swagger disponible, sabrás que se necesita llamar a la siguiente URL:

```http request
GET https://[account_host]/api/admin/messaging/campaigns
```
Este servicio acepta parámetros vía URL para filtrar por tipos (`mailing` y `notification`) mediante el parámetro `type`. Te permite incluir solo campañas que cuentan con _deliveries_ (parámetro `filtered`) o bien requerir sólo una lista reducida de atributos para ser incluídos en la _response_ (parámetro `only`).

For the following example, we only include campaigns with the type set to `mailing` (`type=mailing`), so that our _request_, after including the necessary authentication headers, is as follows:

```shell script
curl -X GET https://modyodev.modyo.me:3000/api/admin/messaging/campaigns?type=mailing -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
```

When calling the service, we will get an `HTTP 200 OK` and the _response_ will contain a JSON object that looks as follows:

```json
{
    "campaigns": [{
        "id": 15,
        "name": "Test campaign 01",
        "uuid": "52dc64c2-8c31-4de1-b10c-0313ae6486f6",
        "type": "mailing",
        "sent_count": 1078,
        "last_sent": "2019-07-15T17:05:12.000-03:00",
        "targets_enabled": false,
        "target_list": "--",
        "created_at": "2019-07-15T16:58:43.000-03:00"
    }, {
        "id": 11,
        "name": "Test campaing 02 Mar8 1546",
        "uuid": "2c210b2c-af4e-4f9c-b2c5-b768dde622a2",
        "type": "mailing",
        "sent_count": 6,
        "last_sent": "2019-03-11T15:17:20.000-03:00",
        "targets_enabled": true,
        "target_list": "Test Mailing Mar08",
        "created_at": "2019-03-08T15:46:52.000-03:00"
    }, {
        "id": 6,
        "name": "campaign jan7 1210",
        "uuid": "7dc46be9-ec5e-4468-b74e-a5ba4b88ecb4",
        "type": "mailing",
        "sent_count": 327,
        "last_sent": "2019-01-07T16:53:33.000-03:00",
        "targets_enabled": true,
        "target_list": "--",
        "created_at": "2019-01-07T12:10:22.000-03:00"
    }, {
        "id": 5,
        "name": "Spanish Campaign",
        "uuid": "4b13358e-f2b7-48ef-a720-26b55e4f2502",
        "type": "mailing",
        "sent_count": 0,
        "last_sent": null,
        "targets_enabled": false,
        "target_list": "--",
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

Esta respuesta JSON corresponde a una lista (o colección) de campañas de correo (`campaigns`) y los atributos de cada objeto de la colección contienen información relevante para el recurso consultado. En el ejemplo, el nombre de la campaña (`name`), la última fecha en que se envío (`last_sent`) o si esta campaña fue targetizada o no (`targets_enabled`).

Apart from the list, you can also see an object called `meta` which contains information about the pagination of this resource.

Siguiendo con el ejercicio, es posible utilizar los datos obtenidos en la consulta anterior para obtener más información. Por ejemplo, podemos estar interesados en saber el número de veces que se ejecutó una campaña en particular (Campaign Deliveries) con el ID de esa campaña. Para esto, puedes volver a revisar el catálogo de servicios, y encontrarás el siguiente _endpoint_:

```http request
GET /messaging/campaigns/{campaign_id}/deliveries Campaign deliveries list
```

This way, you could perform a _request_ to see the _campaign deliveries_ information of a campaign called "Test campaign 01" by passing in the `campaign_id` parameter corresponding to the campaign ID (which in this case is `15`):

```shell script
curl -X GET https://modyodev.modyo.me:3000/api/admin/messaging/campaigns/15/deliveries  -H 'Authorization: Bearer 8c280cc01fc13361aabb1183bb41b4b82faab23e990148c91406bbf5e452ab56'
```

Similar to the previous example, the _response_ will look like this

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
        "target_list": "--"
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

Following this example, you can use Modyo's extensive catalog of services and build your application in the way that best suits your needs.

### Trabajando con colecciones de datos: Paginación

En los ejemplos de la sección previa, se mostró que en muchas ocasiones la cantidad de resultados que se obtienen para una consulta es tan alta que se entregan de forma parcelada para poder ser utilizados de forma eficiente y ordenada. Esta entrega organizada y acotada de resultados se llama **paginación**.

Si quieres revisar la lista completa de las entregas de correos a clientes (`message deliveries`) de una campaña de correo determinada (`campaign`) y una ejecución de envío de campaña determinada (`campaign delivery`). Con los datos obtenidos en los _requests_ de las secciones anteriores, puedes utilizar el _endpoint_ que lista los _message deliveries_, pasándo como parámetros el `campaign_id` y `delivery_id` correspondientes:

```shell script
curl -X GET https://modyodev.modyo.me:3000/api/admin/messaging/message_deliveries?campaign_id=15&delivery_id=29  -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
```
Let's analyze the corresponding _response_ of this call below:

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
Como bien podrás observar, el objeto `message_deliveries` dentro del JSON contiene una lista de 10 elementos, donde cada uno representa un _message delivery_ o entrega concreta de un correo de campaña a un usuario determinado, y cada objeto tiene atributos relevantes a este concepto, como el nombre y correo del cliente o la fecha en donde se envió. Pero, ¿donde están los demás registros? Acá es donde juega un papel muy importante la paginación de los recursos, y para esto debes prestar atención al objeto `meta` dentro del JSON.

The `meta` object contains the information you need to be able to traverse a large number of records, through small groups of records or pages.

The 4 attributes we have are the following:

* `total_entries`: The total number of items of the requested resource
* `per_page`: The number of items that will be delivered per page
* `current_page`: The current data window
* `total_pages`: The total number of pages or groups of elements that we can request.

En el ejemplo anterior, aparte de contar con los primeros 10 registros, ya se sabe para los _requests_ siguientes que existen un total de 1078 entradas, agrupadas en 108 páginas. Si quieres obtener, por ejemplo, la segunda página de estos datos, sólo necesitas agregar el parámetro `page` con valor igual a 2, invocando nuevamente a la URL ya conocida. Para modificar la cantidad de registros por página, basta con agregar el parámetro `per_page` con el valor deseado.

For example, let's get page 30, but this time with the _message deliveries_ grouped into pages of 5 elements:

```shell script
curl -X GET https://modyodev.modyo.me:3000/api/admin/messaging/message_deliveries?campaign_id=15&delivery_id=29&page=30&per_page=5  -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
```

What gives us the following response:

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

To finish, remember that the API will always return the first page (`current_page: 1`) with resources grouped into pages of 10 elements (`per_page: 10`) by default.
