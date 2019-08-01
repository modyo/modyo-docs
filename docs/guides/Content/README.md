# Content

Content es la sección especial de Modyo donde quienes trabajan a través de APIs, pueden enviar información y gestionar archivos de contenido para exportar a cualquier sitio o microservicio.

Esta sección está especialmente diseñada para trabajar con contenido de la mano del desarrollo, ya que todo lo que se creará, será enviado a través de la API a otro servicio fácilmente adaptable. 

Primero que todo, se necesita un lector JSON que nos pueda mostrar el código de manera ordenada. Lo más recomendable es usar alguna extensión de navegador, que permita ver los contenidos adecuados e interpretados para nuestra pantalla.

## Estructura de Rutas de la API

Para realizar cualquier acción, es necesario conocer la estructura de rutas de los contenidos en la API, la cual se hace de la siguiente manera:

```javascript
[Dominio de la plataforma]/api/content/spaces/:space_uid/types/:type_uid/schema

[Dominio de la plataforma]/api/content/spaces/:space_uid/types/:type_uid/entries?[filters]

[Dominio de la plataforma]/api/content/spaces/:space_uid/types/:type_uid/entries/:entry_uuid
```

Aquí, ```space_uid``` y ```type_uid``` corresponden al nombre slugificado del Espacio y al nombre del Tipo de contenidos, respectivamente.

## Estructura JSON Entries

Para cualquier elemento JSON, en Modyo la estructura se hace de esta manera:

- Entries JSON:

```javascript
{
  "meta": {
    "total_entries": 2,
    "per_page": 15,
    "current_page": 1,
    "total_pages": 1
  },
  "entries": [
    {
      "meta": {
        "uuid": "9b0a24a6-d84f-4851-8750-a86244947510",
        "space": "myspace",
        "name": "Lorem Ipsum dolor",
        "type_name": "Post",
        "category": null,
        "updated_at": "2019-03-18T14:06:59.000-03:00",
        "created_at": "2019-03-18T14:06:59.000-03:00",
        "tags": [],
        "locale": "en",
        "available_locales": [
          "en"
        ]
      },
      "fields": {
        "excerpt": "Lorem Ipsum dolor",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    },
    {
      "meta": {
        "uuid": "1c9b24a6-d84f-4851-8750-a86244963589",
        "space": "myspace",
        "name": "Lorem Ipsum dolor",
        "type_name": "Post",
        "category": null,
        "updated_at": "2019-03-18T14:06:59.000-03:00",
        "created_at": "2019-03-18T14:06:59.000-03:00",
        "tags": [],
        "locale": "en",
        "available_locales": [
          "en"
        ]
      },
      "fields": {
        "excerpt": "Lorem Ipsum dolor",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    }
  ]
```

- Entries JSON Schema:

```javascript
{
  "definitions": {
    "entry": {
      "type": "object",
      "properties": {
        "meta": {
          "type": "object",
          "required": [
            "uuid",
            "space",
            "name",
            "type_name",
            "category",
            "updated_at",
            "created_at",
            "tags",
            "locale",
            "available_locales"
          ],
          "properties": {
            "uuid": {
              "type": "string",
              "default": "",
              "examples": [
                "9b0a24a6-d84f-4851-8750-a86244947510"
              ],
              "pattern": "^(.*)$"
            },
            "space": {
              "type": "string",
              "default": "",
              "examples": [
                "myspace"
              ],
              "pattern": "^(.*)$"
            },
            "name": {
              "type": "string",
              "default": "",
              "examples": [
                "Lorem Ipsum dolor"
              ],
              "pattern": "^(.*)$"
            },
            "type_name": {
              "type": "string",
              "default": "",
              "examples": [
                "Post"
              ],
              "pattern": "^(.*)$"
            },
            "category": {
              "type": "null",
              "default": null,
              "examples": [
                null
              ]
            },
            "updated_at": {
              "type": "string",
              "default": "",
              "examples": [
                "2019-03-18T14:06:59.000-03:00"
              ],
              "pattern": "^(.*)$"
            },
            "tags": {
              "type": "array"
            },
            "locale": {
              "type": "string",
              "default": "",
              "examples": [
                "en"
              ],
              "pattern": "^(.*)$"
            },
            "available_locales": {
              "type": "array",
              "items": {
                "type": "string",
                "default": "",
                "examples": [
                  "en"
                ],
                "pattern": "^(.*)$"
              }
            }
          }
        },
        "fields": {
          "type": "object"
        }
      }
    }
  },
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": [
    "meta",
    "entries"
  ],
  "properties": {
    "meta": {
      "type": "object",
      "required": [
        "total_entries",
        "per_page",
        "current_page",
        "total_pages"
      ],
      "properties": {
        "total_entries": {
          "type": "integer"
        },
        "per_page": {
          "type": "integer"
        },
        "current_page": {
          "type": "integer"
        },
        "total_pages": {
          "type": "integer"
        }
      }
    },
    "entries": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/entry"
      }
    }
  }
}
```

- Entry JSON:

```javascript
{
   "meta":{
      "uuid":"9b0a24a6-d84f-4851-8750-a86244947510",
      "space":"myspace",
      "name":"Lorem Ipsum dolor",
      "type_name":"Post",
      "category":null,
      "updated_at":"2019-03-18T14:06:59.000-03:00",
      "created_at": "2019-03-18T14:06:59.000-03:00",
      "tags":[

      ],
      "locale":"en",
      "available_locales":[
         "en"
      ]
   },
   "fields":{
      "excerpt":"Lorem Ipsum dolor",
      "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
   }
```

- Entry JSON Schema:

```javascript
{
  "definitions": {},
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://example.com/root.json",
  "type": "object",
  "required": [
    "meta",
    "fields"
  ],
  "properties": {
    "meta": {
      "$id": "#/properties/meta",
      "type": "object",
      "required": [
        "uuid",
        "space",
        "name",
        "type_name",
        "category",
        "updated_at",
        "created_at",
        "tags",
        "locale",
        "available_locales"
      ],
      "properties": {
        "uuid": {
          "$id": "#/properties/meta/properties/uuid",
          "type": "string",
          "default": "",
          "examples": [
            "9b0a24a6-d84f-4851-8750-a86244947510"
          ],
          "pattern": "^(.*)$"
        },
        "space": {
          "$id": "#/properties/meta/properties/space",
          "type": "string",
          "default": "",
          "examples": [
            "myspace"
          ],
          "pattern": "^(.*)$"
        },
        "name": {
          "$id": "#/properties/meta/properties/name",
          "type": "string",
          "default": "",
          "examples": [
            "Lorem Ipsum dolor"
          ],
          "pattern": "^(.*)$"
        },
        "type_name": {
          "$id": "#/properties/meta/properties/type_name",
          "type": "string",
          "default": "",
          "examples": [
            "Post"
          ],
          "pattern": "^(.*)$"
        },
        "category": {
          "$id": "#/properties/meta/properties/category",
          "type": "null",
          "default": null,
          "examples": [
            null
          ]
        },
        "updated_at": {
          "$id": "#/properties/meta/properties/updated_at",
          "type": "string",
          "default": "",
          "examples": [
            "2019-03-18T14:06:59.000-03:00"
          ],
          "pattern": "^(.*)$"
        },
        "tags": {
          "$id": "#/properties/meta/properties/tags",
          "type": "array"
        },
        "locale": {
          "$id": "#/properties/meta/properties/locale",
          "type": "string",
          "default": "",
          "examples": [
            "en"
          ],
          "pattern": "^(.*)$"
        },
        "available_locales": {
          "$id": "#/properties/meta/properties/available_locales",
          "type": "array",
          "items": {
            "$id": "#/properties/meta/properties/available_locales/items",
            "type": "string",
            "default": "",
            "examples": [
              "en"
            ],
            "pattern": "^(.*)$"
          }
        }
      }
    },
    "fields": {
      "$id": "#/properties/fields",
      "type": "object"
    }
  }
}
```
## Paginación

Para cualquier recurso de contenido a través de la API, es necesaria hacer una paginación para su correcto funcionamiento.

Para ello, se usa una paginación tipo offset con los parámetros ```page``` y ```per_page``` en la query string de la URL de entries. 

Por ejemplo, ```con page = 3```, ```per_page = 20``` se está solicitando que se retorna los próximos 20 items saltándose los primeros 40.

Junto con la respuesta se entrega un meta de paginación como por ejemplo:

```javascript
 "meta": {
    "total_entries": 2,
    "per_page": 15,
    "current_page": 1,
    "total_pages": 1
    }
```


## Espacios

En el caso de Espacios, desde Modyo se puede configurar el envío de información desde distintos formatos para que el servicio que reciba la API, pueda interpretarla fácilmente.

Espacios nos permite separar los sitios en los que se está trabajando, para tener una mejor distribución y orden del contenido que se añade.

### Crear un Espacio

Para crear un espacio, se debe hacer clic en el botón verde en la parte superior de la pantalla, y asignar el nombre y la UID que usaremos.

Además, deberemos asignar el idioma sobre el cual se escribirá el contenido que publicaremos, para una mejor configuración de los caracteres.

#### Entradas

Las entradas que podrás ver en sección, corresponden a todo el contenido enviado a través de la API. En ese sentido, se podrán filtrar según:

- Tipo
- Estado de Revisión
- Categoría
- Tags
- Autor

##### Crear una Entrada

Para crear una entrada, se debe hacer clic en el botón de la parte superior de la pantalla. Así,

Antes de crearla, Modyo pedirá el tipo de entrada que deberá crear, para organizar el formato a presentar, el cuál se puede crear en la sección Tipos.

Al hacer clic en ella, podremos ver el formulario que podremos rellenar con el contenido que queremos enviar, que estará personalizado según lo que armamos.

De ahí, podremos ver en nuestro botón de Vista Previa el código que se enviará a través de la API, el cual el microservicio deberá interpretar. 

#### Tipos

Los formatos que publicaremos en nuestro sitio web siempre deben ser segmentados, para que cualquier programa o microservicio que quiera filtrar la información a través de la API, pueda interpretar más rápido el contenido para su uso final.

##### Crear un Tipo

Para crear un Tipo, es necesario hacer clic en el botón superior de la pantalla y poner el nombre y el UID correspondiente. Es una buena práctica poner el nombre del formato de qué se publicará, con tal de que cualquier usuario de la plataforma sepa de qué contenido se trata.

#### Categorías

Las categorías te permiten ordenar las entradas que publicas según el contenido que se encuentre dentro, por lo que es útil si necesitamos hacer directorios de áreas de conocimiento determinadas.

##### Crear una Categoría

Para crear una categoría, se hace clic en el botón superior de la pantalla. Ahí se le debe asignar un Título y una Ruta a la categoría.

Este paso también sirve para crear subcategorías. Para hacerlas, se deben hacer los mismos pasos pero asignar la Categoría Padre correspondiente.

#### Configuración

En este caso, la Configuración de Espacios nos sirve para cambiar las características generales de la manera en qué se está enviando información a través de la API.

##### General

Para cambiar el nombre del Espacio o su UID, es posible hacerlo desde acá. 

##### Localización

Modyo permite el cambio de idiomas y léxicos según el país en que se necesite. El cambio es útil en el caso de que se necesite trabajar con contenido personalizado y usuarios con distintos lenguajes.

###### Buscando entries en otros idiomas

La API de Modyo entrega entries en el idioma por defecto del Espacio, a menos que se pida explícitamente otro idioma a través del parámetro de query string locale o el Accept-Language header.

Por ejemplo, para obtener entries en el idioma Español-Chile (es_CL):

```
Query string: GET .../posts/entries?locale=es_CL
Header: Setear Accept-Language es_CL
```

##### Caché

Si se quiere habilitar el caché y dejar tiempo a algunas acciones, es posible hacerlo desde esta sección. Además, regular el tiempo de vida del mismo, medido en segundos.

##### Seguridad

Modyo, como forma de transmisión segura de datos, permite habilitar CORS para que la API pueda ser interpretada mejor por cualquier microservicio.

Para ello, también es necesario especificar el dominio desde dónde será importada la información, para dar un mejor acceso.

###### CORS

Al habilitarse CORS, se producen los siguientes cambios dentro de la API:

- La configuración de URLs permitidas para acceder al contenido a nivel de Espacios, permitiendo automáticamente custom domains de sites.
- Cuando se realiza un request al API, se agrega el header ```Access-Control-Allow-Origin``` con valor request.origin a la respuesta y    ```Access-Control-Allow-Credentials' = true```, sólo si el origen pertenece a las urls/domains previamente mencionadas. En caso caso contrario no quedan configurados.
- URLS permitidas son cacheadas a nivel de aplicación.
- En caso de usar caché intermedio se debe considerar el origen en la clave de caché para que se maneje el caché por separado en cada origen:
```javascript
Varnish: sub vcl_hash {  if (req.http.Origin) { hash_data(req.http.Origin);  } }
Nginx: set $cache_key "$http_x_forwarded_proto://$host$request_uri-$http_accept-$http_x_requested_with";
```

###### CORS y SSL

Al decidir si usar SSL dentro de la plataforma, también se debe considerar lo siguiente:

- SSL: Wildcards no son permitidos.
- NO SSL: Wildcards son permitidos, pero Modyo ahora debe ser secure by default


##### Revisión en Equipo

La calidad del contenido que se publica en cada una de las plataformas debe ser certificada y como forma de mantener la calidad y seguridad, Modyo usa la Revisión en Equipo para confirmar y corregir los contenidos que se envían a través de la API.

En este caso, se pueden determinar cuántos miembros del equipo deben aprobar un contenido antes de ser puestos a disposición del Administrador, quien deberá publicarlos. Predeterminadamente, deben ser al menos 3 revisores, pero la cantidad puede cambiar.

El equipo puede ser predeterminado por el administrador o elegido por quien envía a revisión. Así solo ellos pueden corregir y aprobar.

Además, se puede forzar la revisión por un usuario en específico, para que este sea aprobado y seleccionar a quienes se les asignará la tarea.

Por último, es posible diferenciar quiénes deben revisar cada contenido, según el espacio en que se esté trabajando. Para ello, se puede asignar un filtro desde este lugar y determinar los miembros del equipo que chequearán la información, harán comentarios y darán su aprobación.

##### Miembros del Equipo

Para ordenar el trabajo, Modyo permite filtrar los miembros del equipo que trabajarán en cada espacio y así tendrán acceso a la escritura, revisión o publicación.

Para ello, el SuperAdministrador puede asignar manualmente a los usuarios los roles predeterminados que habilitan cada una de las funciones.

## Gestor de Archivos

En esta sección, podremos ver todos los archivos que hemos subido en nuestra plataforma, los cuales pueden estar usándose o no en ella.

### Características del archivo

Los archivos pueden tener distintas extensiones, según su tipo. Al hacer clic en cada uno de ellos, se desplegará una ventana que 

### Subir un archivo

Hay dos formas de subir un archivo para usarse en Modyo. Una de ellas es a través del mismo formulario y otra es a través del Gestor de Archivos, que nos da la opción de tomar cualquier material de nuestro disco local para subirlo a la plataforma.

### Buscar un archivo

Modyo permite dos tipos de búsqueda que pueden ser muy útiles dependiendo del usuario que esté trabajando o usando la plataforma.

La primera de ellas se hace para buscar archivos y puede ser utilizada a través del Gestor de Archivos.

Sin embargo, en el caso de la API de Content, también se puede hacer una búsqueda de un contenido a través de la URL.

Para ello, existen distintos filtros que se pueden aplicar para buscar datos en este modo:

- Metadata (ej: tags, categorías, fechas): Las búsuqedas pueden ser consultables mediante parámetros ```meta.param_name```.
- Tags: consultables de dos maneras
```meta.tag=tag_name```
```meta.tag[in][]=tag1_name&meta.tag[in][]=tag2_name```
- Categorías: ```meta.category=category_full_path ``` considerará categorías hijas de la consultada.
- Fechas de creación/actualización/publicación/despublicación: son consultables si se usa la especificación ISO-8601 y con posibilidad de búsqueda por rangos (lt, gt):

```.../entries?meta.created_at=1987-11-19T13:13:13
.../entries?meta.updated_at[lt]=1987-11-19
.../entries?meta.published_at[gt]=1987-11-19
```
- Lugares: la búsqueda puede darse de la siguiente manera (match a ```street_name```, ```country```, ```admin_area_levels```), 
Ej: ```fields.location_name=Chile```

```[dominio de la plataforma]/entries?fields.color=black```




## Contenido Privado 

Para cualquier usuario de Modyo, es importante el contenido privado targetizado a cualquier cliente. Sin embargo, es muy facil de buscar a través de la API para cualquier usuario que tenga los permisos habilitados.

Quien quiera buscarlo, debe contar con un Content Delivery Token. Cada Espacio tiene su propio Content Delivery Token y es compartido por todos los usuarios que tienen sesión. El Content Delivery Token se obtiene a través de la API de Profile. 

El Content Delivery Token es un JWT con los siguientes claims:

- iss: URL base de la API de profile
- aud: URL base de la API de contenido
- sub: Nombre del Espacio
- exp: Tiempo de expiración del token
- access_type: delivery,
- targets: Array de targets

Si lo llevamos a código, se verá de la siguiente manera:

```javascript
{
  "iss": "[dominio de la plataforma]/api/profile",
  "aud": "[dominio de la plataforma]/api/content",
  "sub": "account_uuid",
  "exp": [tiempo de expiración en segundos],
  "access_type": "delivery",
  "targets": ["target1", "target2"]
}

```

Para establecer un token, es necesario hacerlo a través del parámetro de query string ```delivery_token``` o el header ```delivery_token```.














----

Una API es una herramienta que pone a disposición información a programas en un formato más conveniente. Por ejemplo, puedes ir al sitio de una empresa en tu navegador y ver la información en un formato ordenado y atractivo. 

Esa misma API, presenta su información de una manera que es conveniente para programas. Entrega la información directamente.

Más abajo hay tres ejemplos de como puedes utilizar APIs para traer información para un custom widget y así utilizarlo como quieras.

Todos los ejemplos deben ser incluidos en la pestaña de JavaScript de tu custom widget.

### jQuery

La biblioteca JavaScript de jQuery nos hacen fácil poder implementarlas dentro de Modyo, en torno a las APIs.

Una poderosa característica de JQuery es su funcionalidad AJAX fácil de entender. Te permite traer fácilmente datos de no solo contenido dentro de tu sitio, pero de también otros sitios y servicios.

En esta solicitud AJAX, estamos especificando un punto de salida (utilizando el objeto Liquid {{ site.url }}) e incluyendo opciones para especificar que es un "GET" del tipo 'json'. Finalmente enlazamos el "data.promotions" a nuestro "vm.promos" para usarlo en la aplicación.


### API Fetch con JavaScript nativo

La API Fetch provee una interfaz JavaScript simple, para acceder y manipular parte del protocolo HTTP, como solicitudes y repuestas. El método global fetch() es una manera fácil y lógica de traer recursos asincrónicamente a través de una red.

Una solicitud fetch básica es muy simple de realizar. Observa el siguiente código:

Estamos trayendo un archivo JSON desde dentro de nuestro sitio utilizando el objeto Liquid {{ site.url }}. El uso más simple de fetch() requiere un argumento —la ruta del recurso que quieres traer— y devuelve un "promise" que contiene la respuesta (Response object).

Esta es una respuesta HTTP, no el verdadero JSON. Para extraer el cuerpo del JSON de la respuesta, utilizamos el método json() al final de esta, para luego enlazar los datos a nuestras promociones (este fetch() es para esta aplicación).

Para información más detallada, te recomendamos visitar los webdocs de MDN.

### Axios

Axios es una biblioteca JavaScript muy popular que los desarrolladores utilizan para realizar solicitudes HTTP que funcionan en todos los navegadores modernos, incluyendo IE8 en adelante.

Está basada en el objeto Promise y te permite escribir asincrónicamente código para realizar solicitudes XHR fácilmente.

Utilizar Axios tiene algunas ventajas sobre la API Fetch nativa:

- Soporta navegadores más antiguos (Fetch necesita un polyfill)
- Tiene una manera de cancelar una solicitud
- Tiene una manera de establecer un timeout para una respuesta
- Viene con protección CSRF incluida
- Soporta progreso de carga
- Realiza transformación de datos JSON automáticamente

Para poder usar Axios en Modyo, necesitas agregar el código base del axios.js como un custom snippet e incluirlo en algún lugar donde tus widgets puedan accederlo, como tu theme en JavaScript (localizado en Templates, bajo la pestaña de Archivos).

La API de Modyo provee una interfaz RESTful con respuestas formateadas en un JSON ligero que puede ser utilizado en muchas funcionalidades de tu cuenta, incluyendo herramientas administrativas.

Para crear un nueva aplicación de acceso a la API, dirígete a Cuenta > Configuración > Acceso a la API. y haz click en + Nuevo en la esquina superior derecha.

Aquí debes darle un nombre, una descripción, un URI de redirección (Utiliza urn:ietf:wg:oauth:2.0:oob para pruebas locales) y una URL para cerrar sesión como por ejemplo http://ejemplo.com/logout.

## Content Delivery API

La API de Content Delivery de Modyo, es muy fácil de operar con distintos comandos, que permiten traer información de manera segura para cualquier microservicio.



