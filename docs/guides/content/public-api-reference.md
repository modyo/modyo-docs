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

Aquí, `space_uid` y `type_uid` corresponden al nombre slugificado del Espacio y al nombre del Tipo de contenidos, respectivamente.

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

### Instalación

Con `npm`:

```shell
npm install @modyo/sdk
```

Si eres usuario de `yarn`:

```shell
yarn add @modyo/sdk
```

### Uso: haciendo un `request`

Una vez instalado el SDK en tu proyecto podrás empezar a ocuparlo para pedir contenido a Modyo.

El siguiente ejemplo muestra la forma más básica en que puedes obtener contenido usando el SDK:

```javascript
import { Client } from "@modyo/sdk";

// Creamos una función genérica que podamos instanciar cada vez que queramos hacer un request
export default function getClient(spaceUID) {
  // La clase `Client` del SDK requiere dos argumentos:
  // El primer argumento es la `url` de la API,
  // el segundo argumento es el `UID` del espacio que quieres acceder.
  // En este ejemplo, el `UID` del espacio lo pasaremos como argumento de esta función genérica
  const client = new Client("https://dynamicbank.modyo.build/api", {
    spaceUID
  });
  return client;
}

// Una vez instanciada la clase `Client`, tenemos distintos métodos a nuestra disposición, como
// `getEntries()`
getClient("static-data") // accedemos al espacio
  .getEntries("menu-item") // Obtenemos todas las enbtradas del tipo `menu-item`
  .then(entries => console.log(entries)) // Imprimimos en un log las entradas recibidas
  .catch(err => console.log(err)); // o retornamos un error si algo falla
```

Además del método `getEntries(typeUID)` que ocupamos en el ejemplo, si conocemos el `id` de nuestra entrada, podemos requerirla inmediatamanete usando el método `getEntry(typeUID, entryUID)`:

```js
getClient("static-data")
  .getEntry("menu-item", "a1eef093-1e2f-4c6f-a4c3-73a869d6e7c8")
  .then(entry => console.log(entry))
  .catch(err => console.log(err));
```

## SDK de Liquid

Para acceder al listado de entradas de un tipo de uid `type_uid` del un space de uid `space_uid` usamos:

```html
{% assign entries = spaces['space_uid'].types['type_uid'].entries %}
{% for entry in entries %}
  <div>entry: {{ entry.uuid }} -- {{ entry.title }}</div>
{% endfor %}
```

### Filtros

Si queremos filtrar las entradas, podemos hacerlo por los siguientes atributos: `by_uuid`, `by_category`, `by_type`, `by_tag` y `by_lang`:
Todos reciben un arreglo de valores, por lo que es posible filtrar por un valor o varios, y la forma de usarlo es como sigue:

```html
{% assign entries = spaces['space_uid'].types['type_uid'].entries | by_category: 'news' | by_tag: 'tag1, tag2, tag3' %}
{% for entry in entries %}
  <div>entry: {{entry.uuid }} -- {{ entry.title }}</div>
{% endfor %}
```

La selección de entradas siempre retorna un arreglo, por lo que es necesario iterar sobre el resultado o acceder al primer elemento, en caso de filtrar por un único uuid:

```html
{% assign entries = spaces['space_uid'].types['type_uid'].entries | by_uuid: 'entry_uuid' %}
{% assign entry = entries.first %}
<div>{{ entry.title}}</div>
```

También puedes limitar la cantidad de elementos que se retornan en el arreglo, usando el parámetro `limit` en los filtros:

```html
{% assign entries = spaces['space_uid'].types['type_uid'].entries | by_tag: 'tag1' | limit: 3 %}
{% for entry in entries %}
  <div>entry: {{entry.uuid }} -- {{ entry.title }}</div>
{% endfor %}
```

También puedes obtener las entradas publicadas en un rango de fechas específico, usando los parámetros `from_published_date`y `to_published_date`:

```html
{% assign entries = spaces['space_uid'].types['type_uid'].entries | from_published_date: '2019-3-25' | to_published_date: '2019-12-30'%}
{% for entry in entries %}
  <div>entry: {{ entry.uuid }} -- {{ entry.title }}</div>
{% endfor %}
```

En el ejemplo, se toman las entradas publicadas desde el comienzo del día 25 de Marzo del 2019, hasta las entradas publicadas hasta el final del día 30 de Diciemte del 2019.

#### Ordenamiento

Puedes ordenar el contenido por la fecha de publicación de manera ascendiente o descendiente usando el parámetro `published_sorted_by` como filtro, que puede tomar los valores `ASC` o `DESC`:

```html
{% assign entries = spaces['space_uid'].types['type_uid'].entries |published_sorted_by: 'ASC' %}
{% for entry in entries %}
  <div>entry: {{ entry.uuid }} -- {{ entry.title }}</div>
{% endfor %}
```

#### Paginación Liquid

Para hacer uso de la paginación de los elementos que estás filtrando, puedes usar el filtro `{{ entries | pagination_links }}`, que arrojará un HTML con los links cada página, dependiendo de los parámetros GET (`per_page=3&page=2`)presentes en la URL

```html
<div class="pagination">
    <a class="previous_page" rel="prev" href="https://account.url/site_slug/page_slug?page=1">«</a>
    <a rel="prev" href="https://account.url/site_slug/page_slug?page=1">1</a>
    <em class="current">2</em> <a rel="next" href="https://account.url/site_slug/page_slug?page=3">3</a>
    <a href="https://account.url/site_slug/page_slug?page=4">4</a>
    <a class="next_page" rel="next" href="https://account.url/site_slug/page_slug?page=3">»</a>
</div>
```

En el caso anterior, la paginación retornó 4 páginas y actualmente se encuentra activa la página 2 (`<em class="current">`). Puedes cambiar fácilmente de página modificando el parámetro GET `page`.

#### Mapas

Para los entries con campos de Ubicación se pueden generar fácilmente mapas con los filtros `static_map` y `dynamic_map`, estos usan Google Maps Static API y Google Maps Javascript API respectivamente. El siguiente ejemplo genera mapas para el field `Locations` con un tamaño de 600x300 px, un zoom de nivel 5, con tipo de mapa 'roadmap' y con un ícono personalizado.

```html
{{ entry['Locations'] | static_map: '600x300',5,'roadmap','https://goo.gl/5y3S82'}}
```

El filtro `dynamic_map` acepta un atributo adicional para controlar la visibilidad de los controles de zoom, arrastre y pantalla completa.

```html
{{ entry['Locations'] | dynamic_map: '600x300',5,'roadmap','https://goo.gl/5y3S82',true}}
```
