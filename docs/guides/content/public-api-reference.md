---
search: true
sidebarDepth: 1
---

# API & SDKs

## Referencia del API de Modyo Content

### Estructura de Rutas de la API

Para realizar cualquier acción, es necesario conocer la estructura de rutas de los contenidos en la API, la cual se hace de la siguiente manera:

```javascript
[Dominio de la plataforma]/api/content/spaces/:space_uid/types/:type_uid/schema

[Dominio de la plataforma]/api/content/spaces/:space_uid/types/:type_uid/entries?[filters]

[Dominio de la plataforma]/api/content/spaces/:space_uid/types/:type_uid/entries/:entry_uuid
```

Aquí, ```space_uid``` y ```type_uid``` corresponden al nombre slugificado del Espacio y al nombre del Tipo de contenidos, respectivamente.

### Estructura JSON Entries

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

### Paginación

Para cualquier recurso de contenido a través de la API, es necesaria hacer una paginación para su correcto funcionamiento.

Para ello, se usa una paginación tipo offset con los parámetros page y per_page en la query string de la URL de entries.

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

#### Entradas

Las entradas que podrás ver en sección, corresponden a todo el contenido enviado a través de la API. En ese sentido, se podrán filtrar según:

- Tipo
- Estado de Revisión
- Categoría
- Tags
- Autor

#### jQuery

La biblioteca JavaScript de jQuery nos hacen fácil poder implementarlas dentro de Modyo, en torno a las APIs.

Una poderosa característica de JQuery es su funcionalidad AJAX fácil de entender. Te permite traer fácilmente datos de no solo contenido dentro de tu sitio, pero de también otros sitios y servicios.

En esta solicitud AJAX, estamos especificando un punto de salida (utilizando el objeto Liquid <span v-pre>{{ site.url }}</span>) e incluyendo opciones para especificar que es un "GET" del tipo 'json'. Finalmente enlazamos el "data.promotions" a nuestro "vm.promos" para usarlo en la aplicación.

#### API Fetch con JavaScript nativo

La API Fetch provee una interfaz JavaScript simple, para acceder y manipular parte del protocolo HTTP, como solicitudes y repuestas. El método global fetch() es una manera fácil y lógica de traer recursos asincrónicamente a través de una red.

Una solicitud fetch básica es muy simple de realizar. Observa el siguiente código:
Estamos trayendo un archivo JSON desde dentro de nuestro sitio utilizando el objeto Liquid <span v-pre> {{ site.url }}</span>. El uso más simple de fetch() requiere un argumento —la ruta del recurso que quieres traer— y devuelve un "promise" que contiene la respuesta (Response object).

Esta es una respuesta HTTP, no el verdadero JSON. Para extraer el cuerpo del JSON de la respuesta, utilizamos el método json() al final de esta, para luego enlazar los datos a nuestras promociones (este fetch() es para esta aplicación).

Para información más detallada, te recomendamos visitar los webdocs de MDN.

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

La API de Modyo provee una interfaz RESTful con respuestas formateadas en un JSON ligero que puede ser utilizado en muchas funcionalidades de tu cuenta, incluyendo herramientas administrativas.

Para crear un nueva aplicación de acceso a la API, dirígete a Cuenta > Configuración > Acceso a la API. y haz click en + Nuevo en la esquina superior derecha.

Aquí debes darle un nombre, una descripción, un URI de redirección (Utiliza urn:ietf:wg:oauth:2.0:oob para pruebas locales) y una URL para cerrar sesión como por ejemplo [http://ejemplo.com/logout](http://ejemplo.com/logout)

### Content Delivery API

La API de Content Delivery de Modyo, es muy fácil de operar con distintos comandos, que permiten traer información de manera segura para cualquier microservicio.

## SDK de Javascript

## SDK de Liquid

Para acceder al listado de entradas de un tipo de uid `type_uid` del un space de uid `space_uid` usamos:

```html
{% assign entries = spaces['space_uid'].types['type_uid'].entries %}
{% for entry in entries %}
    entry: {{ entry.uuid }} -- {{ entry.title }}<br>
{% endfor %}
```

Si queremos filtrar las entradas, podemos hacerlo por los siguientes atributos: by_uuid, by_category, by_type, by_tag, by_lang. Todos reciben un arreglo de valores, por lo que es posible filtrar por un valor o varios,  y la forma de usarlo es como sigue:

```html
{% assign entries = spaces['space_uid'].types['type_uid'].entries | by_category = 'news' | by_tag = 'tag1, tag2, tag3' %}
{% for entry in entries %}
    entry: {{ entry.uuid }} -- {{ entry.title }}<br>
{% endfor %}
```

La selección de entradas siempre retorna un arreglo, por lo que es necesario iterar sobre el resultado o acceder al primer elemento, en caso de filtrar por un único uuid:

```html
{% assign entries = spaces['space_uid'].types['type_uid'].entries | by_uuid = 'entry_uuid' %}
{% assign entry = entries.first %}
```
