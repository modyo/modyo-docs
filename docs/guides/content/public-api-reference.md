---
search: true
sidebarDepth: 1
---

# API & SDKs

Modyo Content cuenta con una API para poder acceder a los espacios que contienen las entradas de contenido de forma rápida y eficiente. Para poder acceder a ella existen dos tipos de Software Development Kits (SDKs), uno de uso interno que conecta a [Modyo Content](/guides/content/) con [Modyo Channels](/guides/channels/) desde el lado del servidor por medio de Liquid y otro externo que hace uso del API pública en REST para su consumo desde Javascript.

::: tip SDKs para otros lenguajes
Por el momento sólo existe, de forma oficial, un SDK para Javascript. A futuro se planean incorporar versiones para facilitar el trabajo con otros lenguajes.
:::

## SDK de Liquid

El SDK de Liquid permite consumir contenido de forma nativa desde [Modyo Channels](/guides/channels/) en cualquiera de las secciones que utilicen el lenguaje de marcado de [Liquid](/guides/channels/liquid-markup.html), como [Widgets](/guides/channels/widgets.html) y [Plantillas](/guides/channels/templates.html) del sitio.

### Acceder a entradas de un espacio

Para acceder al listado de entradas de un tipo de uid `type_uid` del un espacio de uid `space_uid` usa:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries %}
{% for entry in entries %}
  entry: {{ entry.uuid }} -- {{ entry.title }}<br />
{% endfor %}
```

### Filtrar entradas

Si quieres filtrar las entradas, puedes hacerlo por los siguientes atributos: by_uuid, by_category, by_type, by_tag, by_lang. Todos reciben un array de valores, por lo que es posible filtrar por un valor o varios, y la forma de usarlo es como sigue:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries
  | by_category: 'news'
  | by_tag : 'tag1, tag2, tag3' %}
{% for entry in entries %}
  entry: {{ entry.uuid }} -- {{ entry.title }}<br />
{% endfor %}
```

La selección de entradas siempre retorna un array, por lo que es necesario iterar sobre el resultado o acceder al primer elemento, en caso de filtrar por un único uuid:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | by_uuid: 'entry_uuid' %}
{% assign entry = entries.first %}
```

Puedes paginar las entradas haciendo uso del filtro `paginated` y mostrar los links de paginación con el filtro `pagination_links`, por ejemplo:

```liquid
{% assign entries = spaces['space_uid'].types['type_uid'].entries | paginated: 10 %}
<ul>
  {% for entry in entries %}
  <li>{{ entry.slug }}</li>
  {% endfor %}
</ul>
{{ entries | pagination_links }}
```

En el caso anterior, se paginará el listado de entradas con 10 elementos por página y al final del listado aparecerán los links de la paginación. Puedes navegar por cada página usando el parámetro GET `page` en la URL, por ejemplo `mi-pagina.com/landing?page=2`.

::: warning Atención
Ten en cuenta que si tienes más de un widget que use la paginación de contenido, al usar los parámetros _GET_ `per_page` y `page` en la URL, todos los widgets con paginación de la página se verán afectados por esos parámetros.
:::

::: warning Atención
Para hacer uso de la paginación en un widget personalizado, deberás cambiar el filtro asociado a la paginación por <span v-pre>`{{ entries | pagination_links_remote }}`</span>. Esto es necesario dado que los widget personalizados se cargan de forma asíncrona. Junto con el cambio anterior, debes asegurare de que _JQuery_ está disponible en tu sitio y recordar que al hacer uso de los links de paginación, solo se cambiará el HTML del widget y no se ejecutará nuevamente el _JavaScript_ del widget.
:::

### Entradas con ubicación

Para los entries con campos de Ubicación se pueden generar fácilmente mapas con los filtros `static_map` y `dynamic_map`, estos usan Google Maps Static API y Google Maps Javascript API respectivamente. El siguiente ejemplo genera mapas para el field `Locations` con un tamaño de 600x300 px, un zoom de nivel 5, con tipo de mapa 'roadmap' y con un ícono personalizado.

```
{{ entry['Locations'] | static_map: '600x300',5,'roadmap','https://goo.gl/5y3S82'}}
```

El filtro `dynamic_map` acepta un atributo adicional para controlar la visibilidad de los controles de zoom, arrastre y pantalla completa.

```
{{ entry['Locations'] | dynamic_map: '600x300',5,'roadmap','https://goo.gl/5y3S82',true}}
```

## SDK de Javascript

El SDK de Modyo es una librería que facilita la interacción de aplicaciones basadas en JavaScript con la API pública de Modyo.

Mediante el SDK podrás obtener, filtrar y ordenar tu contenido creado para así poder aprovechar al 100% las capacidades nuesta API Headless.

Asimismo, el SDK de Modyo permite obtener información del usuario final que ya haya iniciado sesión en la plataforma, para personalizar aún más la interacción de este con tu sitio.

Para comenzar a utilizar el SDK, sólo debes incluír su módulo en tu package.json `@modyo/sdk` y luego referenciarlo en tu código JavaScript:
`import Client from '@modyo/sdk';`. 

Una vez listo, puedes inicializar el cliente llamando a `const client = new Client('account_url')` siendo `account_url` la dirección web de la cuenta de Modyo.

### Contenido
El SDK permite acceder tanto a contenido público como privado/targetizado, facilitando la interacción con nuestra API Headless.

#### Contenido público
Para obtener contenido público, es necesario instanciar el Tipo de Contenido, por lo que se debe llamar a la siguiente función: `ctype = client.getContentType('spaceUID', 'typeUID');` siendo `spaceUID` y `typeUID` los identificadores únicos del Content Space y Content Type requeridos.

Una vez instanciado, se puede realizar consultas por todo el contenido (`ctype.getEntries().then(data => console.log(data))`), el contenido mediante filtros (ver sección a continuación), o el JSONSchema del Content Type. `ctype.getSchema().then(schema => console.log(schema));`.
Una vez obtenido el JSONSchema del Tipo de contenido, es posible ver un objeto de sus atributos llamando a `ctype.getAttrs()` este listado puede ser útil para armar filtros en la consulta luego.

#### Contenido privado
Para obtener contenido privado, es necesario instanciar también el Tipo de Contenido, esta vez con una flag indicando que no se tratará de contenido público: `ctype = client.getContentType('spaceUID', 'typeUID', false);`

:::warning Atención
Es importante que trates esta información potencialmente sensible con cuidado. Para obtener contenido privado se requiere de cookies y de un usuario final que haya iniciado sesión en Modyo.
:::

#### Filtros de contenido.
En ciertas ocasiones, no queremos obtener todo el contenido de un Tipo. Para dichas ocasiones, ModyoSDK provee de filtros aplicables a la consulta.

Para crear un filtro, hay que inicializarlo con `ctype.Filter()`, y luego al mismo objeto se le pueden ir concatenando diferentes filtros:
`const filters = ctype.Filter().Before('meta.created_at','2020-05-01').In('meta.tag',['tag1','tag2'])`

:::tip Tip
Filtros soportados:
Before, After, LessThan, GreaterThan: reciben como parámetro el nombre del campo a comparar y el valor con el que se comparará.

In, NotIn, Has: reciben como parámetro el nombre del campo a comparar y un arreglo de valores con los que se comparará. In es equivalente a un `AND` en SQL, Has es equivalente a un `OR`
SortBy: recibe como parámetros el campo a ordenar y orden (`asc` o `desc`)
:::

:::warning Atención [warn]
Si se pretende filtrar por fecha, es importante que el valor del filtro utilize el estándar ISO-8601.
:::

Una vez creados los filtros, se puede llamar a la consulta `getEntries` dando los filtros respectivos como parámtro:
`ctype.getEntries(filters).then(data => console.log(data))`

### Información de Usuario Final
:::warning Atención
Es importante que trates esta información sensible con cuidado. Al igual que con Contenido privado, esta información sólo es obtenible si se trabaja desde un navegador que soporte cookies, y el usuario final haya iniciado sesión en la plataforma.

Para obtener información del usuario final, es necesario llamar a la función: `client.getUserInfo()` dicha función retornará un objeto con la información básica
de dicho usuario.
:::

## Referencia del API

### Estructura de Rutas del API

Para realizar cualquier acción, es necesario conocer la estructura de rutas de los contenidos en la API, la cual se hace de la siguiente manera:

```
https://www.example.com/api/content/spaces/:space_uid/types/:type_uid/schema

https://www.example.com/api/content/spaces/:space_uid/types/:type_uid/entries?[filters]

https://www.example.com/api/content/spaces/:space_uid/types/:type_uid/entries/:entry_uuid
```

Aquí, `space_uid` y `type_uid` corresponden al nombre slugificado del Espacio y al nombre del Tipo de contenidos, respectivamente.

### Estructura JSON Entries

Para cualquier elemento JSON, en Modyo la estructura se hace de esta manera:

Entries JSON:

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

Entries JSON Schema:

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

Entry JSON:

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

Entry JSON Schema:

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

### Paginación API

Para cualquier recurso de contenido a través de la API, es necesaria hacer una paginación para su correcto funcionamiento.

Para ello, se usa una paginación tipo offset con los parámetros page y per_page en la query string de la URL de entries.

Por ejemplo, con `page = 3`, `per_page = 20` se está solicitando que se retorna los próximos 20 items saltándose los primeros 40.

Junto con la respuesta se entrega un meta de paginación como por ejemplo:

```javascript
 "meta": {
    "total_entries": 2,
    "per_page": 15,
    "current_page": 1,
    "total_pages": 1
    }
```

#### Entradas

Las entradas que podrás ver en sección, corresponden a todo el contenido enviado a través de la API. En ese sentido, se podrán filtrar según:

- Tipo
- Categoría
- Tags
- Autor

#### Filtros

En la búsqueda de contentTypes con filtros, se hará una distinción a nivel de app dependiendo de los filtros solicitados:

Metadata(ej: Tags, Category, Fechas): Búsquedas por SQL, serán consultables mediante parámetros `meta.param_name`. Esto mientras sólo sea la Metadata lo que se esté consultando.

- Tags: consultables de dos maneras
  - `meta.tag=tag_name`
  - `meta.tag[in][]=tag1_name&meta.tag[in][]=tag2_name`
- Categories, consultable de una sola manera: `category=category_full_path` considerará categorías hijas de la consultada
- Fechas de creación/actualización/publicación/despublicación: consultables usando especificación ISO-8601 y con posibilidad de búsqueda por rangos (lt, gt):
  - `.../entries?meta.created_at=1987-11-19T13:13:13`
  - `.../entries?meta.updated_at[lt]=1987-11-19`
  - `.../entries?meta.published_at[gt]=1987-11-19`
- Fields: Búsquedas por medio de ElasticSearch, por ejemplo:
  - Locations: la búsqueda será por queryString (match a street_name, country, admin_area_levels), ej: `fields.location_name=Chile`
  - `.../entries?fields.color=black`

###### Filtro de idiomas

La API de Modyo entrega entries en el idioma por defecto del Espacio, a menos que se pida explícitamente otro idioma a través del parámetro de query string locale o el Accept-Language header.

Por ejemplo, para obtener entries en el idioma Español-Chile (es_CL):

```plain
Query string: GET .../posts/entries?locale=es_CL
Header: Setear Accept-Language es_CL
```

##### Operadores

Las principales operaciones sobre campos son:

- [gt],[lt] = greater/less than, aplicable en enteros y fechas
- [in] = permite incluir varios valores que entran en una consulta tipo OR
- [all] = permite incluir varios valores, que entran en una consulta tipo AND, sólo funciona en campos múltiples y de texto.
- [nin] = permite incluir varios valores, que entran en una consulta NOT IN
- [geohash] = permite búsquedas usando un lat-long geohash en base 32, par más información consultar https://www.movable-type.co.uk/scripts/geohash.html .

Ejemplo:

- `../entries?meta.created_at[in][]=1987-11-19T13:13:13&meta.created_at[in][]=1987-11-19T14:14:14` buscará entries creadas el 11 de noviembre, tanto a las 13:13 como 14:14

##### Campos Retornados

Mediante el parámetro fields se puede escoger qué parámetros se devuelven en el documento:

Los campos de metadata se referencian como: meta.attr_name (ej meta.tag)
Los campos de las entries como: field.attr_name
Se usa una expresiónJsonPath por ejemplo:

`.../entries?fields=$.entries[*].meta.uuid` para obtener sólo los uuid de la meta-data de los entries.
`.../entries?fields=$..description` para obtener todos los campos description en los entries.

##### Igualdades/Desigualdades en arrays

Los campos que buscan en elementos múltiples (checkboxes, multiple) pueden usar la siguiente sintaxis:

- ALL: equivalente a un sql AND
  `.../entries?fields.color[all][]=red&fields.color[has][]=black`
- IN: equivalente a un sql OR
  `.../entries?fields.color[in][]=red&fields.color[in][]=blue`
- NIN: equivalente a un slq NOT IN
  `.../entries?fields.color[nin][]=red&fields.color[nin][]=blue`

##### Orden

El orden de los resultados se debe especificar con los parámetros `sort_by` y `order`:

- `sort_by`: indicando el nombre del atributo (ej: meta.tag, o fields.name)
- `order`: ['asc','desc'] (opcional, asc por default)

#### jQuery

La biblioteca JavaScript de jQuery hacen fácil poder implementarlas dentro de Modyo, en torno a las APIs.

Una poderosa característica de JQuery es su funcionalidad AJAX fácil de entender. Te permite traer fácilmente datos de contenido dentro de tu sitio, y también desde otros sitios y servicios.

En esta solicitud AJAX, se está especificando un punto de salida (utilizando el objeto Liquid <span v-pre>{{ site.url }}</span>) e incluyendo opciones para especificar que es un "GET" del tipo 'json'. Finalmente enlaza el "data.promotions" a "vm.promos" para usarlo en la aplicación.

#### API Fetch con JavaScript nativo

La API Fetch provee una interfaz JavaScript simple, para acceder y manipular parte del protocolo HTTP, como solicitudes y repuestas. El método global fetch() es una manera fácil y lógica de traer recursos asincrónicamente a través de una red.

Una solicitud fetch básica es muy simple de realizar. Observa el siguiente código:
Se está trayendo un archivo JSON desde dentro del sitio utilizando el objeto Liquid <span v-pre> {{ site.url }}</span>. El uso más simple de fetch() requiere un argumento —la ruta del recurso que quieres traer— y devuelve un "promise" que contiene la respuesta (Response object).

Esta es una respuesta HTTP, no el verdadero JSON. Para extraer el cuerpo del JSON de la respuesta, utiliza el método json() al final de esta, para luego enlazar los datos a las promociones (este fetch() es para esta aplicación).

Para información más detallada, visita los webdocs de MDN.

#### Axios

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

La API de Modyo provee una interfaz RESTful con respuestas formateadas en un JSON ligero que puede ser utilizado en muchas funcionalidades de tu cuenta.

## Contenido privado

Siempre que uses la API de contenido, puedes acceder al contenido publicado que esté disponible para todos los usuarios (no privado), sin embargo, si quieres acceder al contenido privado, debes añadir un header o bien, un parámetro GET a la URL de request de la API de contenido. 

:::tip Tip
Si usas Liquid para acceder al contenido, los usuarios que inicien sesión y cumplan con los targets automáticamente verán el contenido cuando corresponda y no se require ninguna acción extra por parte del desarrollador Front End.
:::

La API de contenido puede recibir el parámetro delivery token de dos formas: 

- Como header: `Delivery-Token`
- Como parámetro GET: `delivery_token`

El token de acceso al contenido es un token público en formato [JWT](https://tools.ietf.org/html/rfc7519) que comparten todos los usuarios que pertenecen al mismo grupo de targets. Se puede obtener haciendo un request GET a la URL `account.url/api/profile/delivery_token`. 

El token de acceso a contenido (content delivery token) contiene los siguientes atributos:

- **iss**: URL base de la API de profile
- **aud**: URL base de la API de contenido
- **sub**: Nombre del space
- **exp**: Tiempo de expiración del token
- **access_type**: delivery,
- **targets**: Array de targets


Por ejemplo: 

```javascript
{
  "iss": "http://my-account.modyo.me/api/profile",
  "aud": "http://my-account.modyo.me/api/content",
  "sub": "account_uuid",
  "exp": 1516242622,
  "access_type": "delivery",
  "targets": ["target1", "target2"]
}
```

:::warning Atención
Para poder acceder a la URL de obtención del token, debes asegurarte de tener una sesión iniciada con un usuario en la cuenta o al menos en un sitio de la misma, de lo contrario recibirás un error `404 - Not found`.
:::

:::warning Atención
Es necesario que la obtención del token de acceso al contenido se haga de forma dinámica, ya que ese token cambiará de acuerdo a los targets a los que pertenezca el usuario, y dado que los targets pueden llegar a ser altamente volátiles, no es recomendable almacenar este valor. 
:::

La respuesta de la consulta a la API de contenido con el delivery token, es igual a la respuesta que recibirías sin el delivery token, pero esta contendrá como parte de la respuesta, tanto el contenido privado (sin targets) como el contenido targetizado que esté restringido a los targets a los que pertenece el usuario que solicitó su delivery token.