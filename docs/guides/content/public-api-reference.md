---
search: true
sidebarDepth: 1
---

# API & SDKs

Modyo Content cuenta con una completa API para poder acceder a los espacios que contienen las entradas de contenido de forma rápida y eficiente. Para poder acceder a ella existen dos tipos de Software Development Kits (SDKs), uno de uso interno que conecta a [Modyo Content](/guides/content/) con [Modyo Channels](/guides/channels/) desde el lado del servidor por medio de Liquid y otro externo que hace uso del API pública en REST para su consumo desde Javascript.

::: tip SDKs para otros lenguajes
Por el momento sólo existe, de forma oficial, un SDK para Javascript. A futuro se planean incorporar versiones para facilitar el trabajo con otros lenguajes.
:::

## SDK de Liquid

El SDK de Liquid permite consumir contenido de forma nativa desde [Modyo Channels](/guides/channels/) en cualquiera de las secciones que utilicen el lenguaje de marcado de [Liquid](/guides/channels/liquid-markup.html), como [Widgets](/guides/channels/widgets.html) y [Plantillas](/guides/channels/templates.html) del sitio.

### Acceder a entradas de un espacio

Para acceder al listado de entradas de un tipo de uid `type_uid` del un espacio de uid `space_uid` usamos:

```html
{% assign entries = spaces['space_uid'].types['type_uid'].entries %} {% for
entry in entries %} entry: {{ entry.uuid }} -- {{ entry.title }}<br />
{% endfor %}
```

### Filtrar entradas

Si queremos filtrar las entradas, podemos hacerlo por los siguientes atributos: by_uuid, by_category, by_type, by_tag, by_lang. Todos reciben un arreglo de valores, por lo que es posible filtrar por un valor o varios, y la forma de usarlo es como sigue:

```html
{% assign entries = spaces['space_uid'].types['type_uid'].entries | by_category
= 'news' | by_tag = 'tag1, tag2, tag3' %} {% for entry in entries %} entry: {{
entry.uuid }} -- {{ entry.title }}<br />
{% endfor %}
```

La selección de entradas siempre retorna un arreglo, por lo que es necesario iterar sobre el resultado o acceder al primer elemento, en caso de filtrar por un único uuid:

```html
{% assign entries = spaces['space_uid'].types['type_uid'].entries | by_uuid =
'entry_uuid' %} {% assign entry = entries.first %}
```

Puedes paginar las entradas haciendo uso del filtro `paginated` y mostrar los links de paginación con el filtro `pagination_links`, por ejemplo:

```html
{% assign entries = spaces['space_uid'].types['type_uid'].entries | paginated: 10 %}
<ul>
{% for entry in entries %}
  <li> {{ entry.slug }} </li>
{% endfor %}
</ul>
{{ entries | pagination_links }}
```

En el caso anterior, se paginará el listado de entradas con 10 elementos por página y al final del listado aparecerán los links de la paginación. Puedes navegar por cada página usando el parámetro GET `page` en la URL, por ejemplo `mi-pagina.com/landing?page=2`.

:::warning
Ten en cuenta que si tienes mas de un widget que use la paginación de contenido, al usar los parámetros _GET_ `per_page` y `page` en la URL, todos los widgets con paginación de la página se verán afectados por esos parámetros.
:::

:::warning
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

El SDK de Javascript permite el acceso a los espacios y entradas de contenidos de forma simple desde cualquier ambiente que soporte Javascript (sitios Web dinámicos y estáticos, páginas SPA, aplicaciones móviles híbridas, etc).

### Instalación

::: tip Uso desde Modyo Channels
En el caso de Modyo Channels, la plantilla base con la cual se crean los sitios ya incluye instalada una versión reciente de este SDK, por lo que se puede utilizar de forma directa.
:::

La instalación del SDK de Javascript se puede realizar con `npm` o `yarn`.

```shell
# Para npm:
npm install @modyo/sdk

# Para yarn:
yarn add @modyo/sdk
```

### Uso: haciendo un `request`

Una vez instalado el SDK en tu proyecto podrás empezar a usarlo para pedir contenido a Modyo.

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
  .getEntries("menu-item") // Obtenemos todas las entradas del tipo `menu-item`
  .then(entries => console.log(entries)) // Imprimimos en un log las entradas recibidas
  .catch(err => console.log(err)); // o retornamos un error si algo falla
```

Además del método `getEntries(typeUID)` que ocupamos en el ejemplo, si conocemos el `id` de nuestra entrada, podemos requerirla inmediatamente usando el método `getEntry(typeUID, entryUID)`:

```js
getClient("static-data")
  .getEntry("menu-item", "a1eef093-1e2f-4c6f-a4c3-73a869d6e7c8")
  .then(entry => console.log(entry))
  .catch(err => console.log(err));
```

## Referencia del API

### Estructura derRutas del API

Para realizar cualquier acción, es necesario conocer la estructura de rutas de los contenidos en la API, la cual se hace de la siguiente manera:

```javascript
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
- Estado de Revisión
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
- [geohash] = permite busquedas usando un lat-long geohash en base 32, par más información consultar https://www.movable-type.co.uk/scripts/geohash.html .

Ejemplo:

- `../entries?meta.created_at[in][]=1987-11-19T13:13:13&meta.created_at[in][]=1987-11-19T14:14:14` buscará entries creadas el 11 de noviembre, tanto a las 13:13 como 14:14

##### Campos Retornados

Mediante el parámetro fields se puede escoger qué parámetros se devuelven en el documento:

Los campos de metadata se referencian como: meta.attr_name (ej meta.tag)
Los campos de las entries como: field.attr_name
Se usa una expresiónJsonPath por ejemplo:

`.../entries?fields=$.entries[*].meta.uuid` para obtener sólo los uuid de la meta-data de los entries.
`.../entries?fields=$..description` para obtener todos los campos description en los entries.

##### Igualdades/Desigualdades en arreglos

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
