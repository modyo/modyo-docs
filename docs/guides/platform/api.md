---
search: true
---

# API de Administración

Además de la funcionalidad que es proveída por el backend de Modyo, la plataforma cuenta con un API administrativa
que permite, de forma autenticada, acceder de forma externa a distintas acciones como listar, crear y eliminar
elementos como formularios, layouts, contenido, etc, crear campos personalizados, menus de navegación, enviar 
campañas de correo, entre otros. De esta forma, es posible realizar labores administrativas
consumiendo la API y sin depender de la interfaz de Modyo, lo que te otorga mayor libertad para controlar tu forma de
trabajar con en Modyo.  

## Explorando la API

Para comenzar a sacar provecho de la API de Modyo, primero es importante conocer los servicios de 
los que dispone, las operaciones que es posible invocar y la manera de utilizarlas. Modyo facilita
esta tarea, disponibilizando la descripción de su API headless mediante el uso de Swagger (la que a su vez
implementa la especificación de OpenAPI) en listas de servicios agrupadas según su funcionalidad: 
funciones administrativas, contenido público y perfil de usuario.

Cada lista de servicios es desplegada de forma automática en tu cuenta de Modyo, a la que puedes 
acceder en tu navegador visitando la URL correspondiente. Por ejemplo, el detalle de la API pública 
de contenido la encontrarás en la siguiente ruta:

```http
https://[account_host]/api/content/docs
```
De esta forma, la documentación Swagger pública de la API de contenido de la cuenta https://un.modyo.be se encuentra
 en https://un.modyo.be/api/content/docs. Asi mismo, la documentación de las funciones administrativas 
 y el perfil de usuario la encontrarás respectivamente en:
 
```http
https://[account_host]/api/admin/docs
https://[account_host]/api/profile/docs
``` 

En cada vista de documentación encontrarás el detalle de los distintos recursos que Modyo te provee y
las distintas operaciones que puedes realizar sobre ellos. Por ejemplo, en la API Administrativa (/api/admin/docs)
se muestran distintas secciones, como "Locks", "Layout pages", "Email templates" o "Targets". Si nos
centramos en esta última, podremos ver que esta sección cuenta con un listado de operaciones que podemos
realizar sobre los targets de la aplicación:

```http
Targets

GET      /targets                Targets List
POST     /targets                Create a target
PUT      /targets/{id}           Update a target
DELETE   /targets/{id}           Delete a Target
POST     /targets/apply_filters  Create a temporary target
POST     /targets/count_matches  Create a temporary target, and return the total number of matching users
```
El listado nos muestra para cada operación, el método HTTP, la ruta y la descripción de lo que 
realiza. Si hacemos click a alguno de estos métodos, por ejemplo a "Targets List", nos muestra
una sección con los parámetros que es posible utilizar al invocarlo, en este caso `query`, `sort_by` y
`order`, sus tipos de datos y un campo para ingresar un valor de prueba para cada parámetro. Adicionalmente
podremos consultar la API directamente desde la vista en Swagger completando los parámetros antes
descritos y luego clickeando en "Execute", el que invocará al API y nos entregará el resultado en la
misma vista. En el ejemplo, la vista invocará a la URL `https://[account_host]/api/admin/targets` con 
GET y nos mostrará la respuesta en JSON a este _request_:

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

Como podrás notar, el `body` de este `response` es un objeto JSON contiene un elemento llamado "targets", 
el que corresponde a una lista (`array`) de elementos de este tipo, y adicionalmente contiene metadata
referente a la `response`, donde se incluyen datos como el total de entradas que satisfacen esta
consulta (`total_entries`), la cantidad máxima de entradas o elementos devueltos por cada
`request` (`per_page`), la "ventana" actual de datos o página actual (`current_page`) y el total de páginas
 (`total_pages`). Con estos datos podrás recorrer fácilmente los datos de un servicio determinado
 solo con pasar los parámetros requeridos.


También cada una de las secciones cuenta con un listado de posibles _responses_ que obtendrás al 
invocar estos métodos, de forma que puedas preparar adecuadamente tu aplicación para manejar los datos.
En el ejemplo anterior, podemos revisar el _response_ que se obtiene del listado de targets cuando
la respuesta es 200:     

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

Lo anterior corresponde a lo que llamamos `Example Value`, y muestra precisamente un ejemplo de lo 
que podemos esperar obtener, pero también podemos consultar el modelo correspondiente clickeando en
`model`, donde veremos la estructura JSON que compone la respuesta, los distintos campos, sus tipos de datos, 
valores de ejemplo, conjunto de posibles valores cuando corresponda y formato de los textos (`date-time`, `ipv4`, `email`, etc ). 

Adicionalmente se muestran posibles casos de fallo que pueden ocurrir, de forma de controlarlos adecuadamente.
Por ejemplo, si intentamos buscar un recurso que no existe:

```http
404	           Not found
``` 

Finalmente, en cada uno de los tres catálogos (admin, content y profile), encontrarás una sección
llamada "Models", la que contiene los modelos involucrados en los servicios, y te permitirá comprender de mejor
manera los recursos disponibles y sus atributos. 


## Utilizando la API


### Autenticación

Para utilizar la API de Modyo, es necesario primero poder autenticar a un usuario determinado
que será quien realize la invocación a los distintos servicios.

Modyo provee 2 posibles métodos de autenticación para invocar la API:

* Bearer Token
* Cookie de session del admin

A continuación, se explica como utilizar cada uno de estos métodos

#### Bearer Token

Lo primero que debemos realizar, es registrar nuestra aplicación para consumir la API. Para esto,
en el menú administrativo accederemos a la opción _Settings_/_API access_ y clickearemos el botón `+New`.
En la vista siguiente, daremos a nuestra aplicación un nombre (en nuestro ejemplo "My application") y una descripción
que la distingan, y además debemos ingresar una URL de redirección y otra de cierre de sesión, la que será invocada al finalizar
la sesión de un usuario.

![New API Access](/assets/img/platform/new-API-access.png)

Al guardar la información de nuestra aplicación, Modyo nos mostrará una vista donde veremos el
_callback URL_ (el que corresponde al campo Redirect URI ingresado en el paso anterior) y además
los campos _Application ID_ y _Secret_ que podremos utilizar posteriormente.

![New API Access](/assets/img/platform/save-API-access.png)

:::warning Atención
Ten en consideración que cuando se cierra sesión en alguno de tus sitios, se hará un _GET_ a todas las URL de cierre de sesión de tus aplicaciones de acceso a la API, lo que podría generar algunas redirecciones no deseadas si es que se usa una URL sin cuidado en ese campo.
:::

Con nuestra aplicación ya registrada, sólo basta asignar dicha aplicación al usuario o usuarios 
que harán uso de la API. Para esto, debemos acceder en el menú a la opción _Settings_/_Team_ y seleccionar
un usuario ya existente o bien crear uno nuevo, el que debe contar con un rol administrativo dentro de la aplicación
(para más detalles referirse a sección [Usuarios y Roles](/guides/platform/roles.html)  ). En la vista de edición del
usuario administrador, accederemos al tab _API Access_ y seleccionaremos la opción `+New Access Token`

![Team Member API Access 1](/assets/img/platform/team-member-API-access-1.png)

En el _popup_ que se muestra a continuación, seleccionar el nombre de la aplicación que acabamos de crear,
en nuestro ejemplo "My application", y luego `Create Token`

![Team Member API Access 2](/assets/img/platform/team-member-API-access-2.png)

:::warning Atención
Debes tener en cuenta los usuarios administrativos solo podrán ejecutar acciones a través de la API administrativa de Modyo si es que cuentan con los permisos necesarios para realizar cada acción. Por ejemplo, un administrador con el rol de "Developer" en un sitio, no podrá ejecutar la acción "Publicar" en ese sitio.
:::

Finalmente, ahora veremos que en la sección "Manage Access Tokens" aparecerá nuestra aplicación ("My application"),
junto con un valor destacado en color rojo el que corresponde precisamente al _access token_, y que
utilizaremos a continuación para realizar _requests_ autenticados sobre la API de Modyo. 

![Team Member API Access 3](/assets/img/platform/team-member-API-access-3.png)

¡Listo! Con nuestro token ya creado, podemos comenzar a sacar provecho a todas las opciones que nos 
da la API Administrativa de Modyo. Por ejemplo, si deseamos ver una lista de los roles para usuarios
administradores disponibles, podemos realizar un _request_ al _endpoint_ `/api/admin/roles`, incluyendo en el
_header_ HTTP _"Authorization: Bearer"_ el valor del _access token_ obtenido previamente: 

```shell
curl -X GET https://example.modyo.com/api/admin/roles -H 'Authorization: Bearer
 8c280dcc1fcff361aa1120836841b4b82faab23e912148c91766bbf5e452ab56'
```

La respuesta obtenida desde el servicio es un `HTTP 200 OK`, y contiene la información de los roles
en su _response_ en formato JSON:

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

¿Y que ocurre si alguien intenta realizar un _request_ al API sin contar con un token válido?
Si intentaramos realizar una llamada sin autenticar o con un token inválido, el sistema responderá
con un error `HTTP 401 Unauthorized`:

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

#### Cookie session de admin

Si estás usando Modyo desde un navegador web, y tienes una sesión iniciada como administrador, entonces podrás acceder desde el mismo navegador a las URLs de la API, y hacer _requests_ simplemente por contar con la cookie de sesión en la parte administrativa de la plataforma. Recuerda que solo podrás acceder a las secciones de la API a las que tengas permitido acceder desde la interfaz de Modyo.

### Invocando servicios

Una vez que conocemos el servicio que necesitamos consultar, de acuerdo a lo que vimos en la sección
[Explorando la API](/guides/platform/api.html#explorando-el-api), y que contamos con un método de autenticación
válido (referirse a sección [Autenticación](/guides/platform/api.html#autenticacion)), ya podemos
realizar un _request_ a la URL del recurso requerido. Por ejemplo, imaginemos que necesitamos obtener
una lista de todas las campañas de correo que hemos creado. De acuerdo a la documentación en Swagger
disponible, sabemos que necesitamos llamar a la siguiente URL:

```http request
GET https://[account_host]/api/admin/messaging/campaigns
``` 
Este servicio acepta parámetros vía URL para filtrar por tipos (`mailing` y `notification`) mediante el parámetro 
`type`, permite incluir solo campañas que cuentan con _deliveries_ (parámetro `filtered`) o bien requerir sólo una lista
reducida de atributos para ser incluídos en la _response_ (parámetro `only`). Para nuestro ejemplo
sólo deseamos incluir las campañas de tipo `mailing` (`type=mailing`), de forma que nuestra _request_, después de
incluir los headers de autenticación necesarios, quedaría de la siguiente forma:

```shell script
curl -X GET https://modyodev.modyo.me:3000/api/admin/messaging/campaigns?type=mailing -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
``` 

Al invocar el servicio, obtendremos un `HTTP 200 OK`, y el _response_ contendrá un objeto JSON que 
se ve de la siguiente forma:

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

Esta respuesta JSON corresponde a una lista (o colección) de campañas de correo (`campaigns`) y los atributos
de cada objeto de la colección contienen información relevante para el recurso consultado, en nuestro ejemplo el
nombre de la campaña (`name`), la última fecha en que se envío (`last_sent`) o si esta campaña fue
targetizada o no (`targets_enabled`). Aparte de la colección, vemos un objeto llamado `meta`, el que contiene
información acerca de la paginación de este recurso.

Siguiendo con el ejercicio, podemos utilizar los datos obtenidos en la consulta anterior para obtener más información,
por ejemplo, acerca de las veces que se ejecutó una campaña en particular (Campaign Deliveries),
en este caso con el ID de una campaña en particular. Par esto, volvemos a revisar nuestro "catálogo"
de servicios, y encontramos el siguiente _endpoint_:

```http request
GET /messaging/campaigns/{campaign_id}/deliveries Campaign deliveries list
```

De esta forma, podemos realizar una _request_ para ver la información específica de los _campaign deliveries_ de la
campaña llamada "Test campaign 01", pasando en el parámetro `campaign_id` el ID de la campaña
correspondiente, en este caso, el `15` :

```shell script
curl -X GET https://modyodev.modyo.me:3000/api/admin/messaging/campaigns/15/deliveries  -H 'Authorization: Bearer 8c280cc01fc13361aabb1183bb41b4b82faab23e990148c91406bbf5e452ab56'
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

Y como podremos observar, la _response_ no es más que un objeto JSON que contiene una lista de _deliveries_
de campañas de correo (`deliveries`). En el ejemplo, verificamos que la campaña con ID `15` se ha ejecutado
sólo en una oportunidad, esa ejecución ya terminó con éxito (su `status` es `completed`) y fue recibida
por 1078 personas (atributo `sent_count`).

Siguiente este ejemplo, puedes utilizar el amplio catálogo de servicios de Modyo y construir tu
aplicación de la forma que más se acomode a tus necesidades.

### Trabajando con colecciones de datos: Paginación

En los ejemplos de la sección previa, pudimos ver que en muchas ocasiones la cantidad de resultados
que se obtienen para una consulta es tal, que deben ser entregados de forma parcelada de manera de
poder ser utilizados de forma eficiente y ordenada. A esta entrega organizada y acotada de resultados
le llamamos **paginación**. 

Imaginemos que ahora queremos revisar la lista completa de las entregas de correos a clientes (`message deliveries`) de 
una campaña de correo determinada (`campaign`) y una ejecución de envío de campaña determinada (`campaign delivery`).
Con los datos obtenidos en los _requests_ de las secciones anteriores, podemos utilizar el _endpoint_ que
lista los _message deliveries_, pasándo como parámetros el `campaign_id` y `delivery_id` correspondientes:

```shell script
curl -X GET https://modyodev.modyo.me:3000/api/admin/messaging/message_deliveries?campaign_id=15&delivery_id=29  -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
``` 
Analicemos a continuación el correspondiente _response_ de esta llamada:

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
Como bien podrás observar, el objeto ``message_deliveries`` dentro del JSON contiene una lista de 10
elementos, donde cada uno representa un _message delivery_ o entrega concreta de un correo de campaña
a un usuario determinado, y cada objeto tiene atributos relevantes a este concepto, como el nombre y
correo del cliente o la fecha en donde se envió. Pero, ¿donde están los demás registros? Acá es donde juega un papel muy importante la paginación de los recursos, y para esto debemos prestar
atención al objeto `meta` dentro del JSON.

El objeto `meta` contiene la información relevante para poder recorrer una gran cantidad de registros,
mediante pequeños grupos de registros o páginas. Los 4 atributos con los que contamos son los siguientes:


* `total_entries`: El número total de items del recurso consultado
* `per_page`: La cantidad de items que se entregarán por cada página
* `current_page`: La ventana actual de datos
* `total_pages`: El total de páginas, o grupos de elementos que podemos consultar.

En el ejemplo anterior, aparte de contar con los primeros 10 registros, ya sabemos
para los _requests_ siguientes que existen un total de 1078 entradas, agrupadas en 108 páginas. Si quisiéramos
obtener, por ejemplo, la segunda página de estos datos, sólo necesitamos agregar el parámetro `page` con valor
igual a 2, invocando nuevamente a la URL ya conocida. Para modificar la cantidad de registros por 
página, basta con agregar el parámetro `per_page` con el valor deseado.

Por ejemplo, obtengamos la página 30, pero esta vez con los _message deliveries_ agrupados en páginas de 5 elementos:

```shell script
curl -X GET https://modyodev.modyo.me:3000/api/admin/messaging/message_deliveries?campaign_id=15&delivery_id=29&page=30&per_page=5  -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
```

Lo que nos entrega un response como el siguiente:

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
Finalmente, recuerda que la API de manera predeterminada, siempre retornará la primera página (`current_page: 1`) de
recursos agrupados en páginas de 10 elementos (`per_page: 10`). 
