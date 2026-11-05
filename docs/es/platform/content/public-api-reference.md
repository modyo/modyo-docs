---
search: true
---

# API

Modyo Content cuenta con una API para acceder a los espacios que contienen las entradas de contenido de forma rápida y eficiente. Para acceder a ella, existen dos tipos de Software Development Kits (SDKs): uno de uso interno que conecta a [Modyo Content](/es/platform/content/) con [Modyo Channels](/es/platform/channels/) desde el lado del servidor por medio de Liquid, y otro externo que hace uso de la API pública en REST para su consumo desde JavaScript.

:::tip SDKs para otros lenguajes
Por el momento sólo existe, de forma oficial, un SDK para Javascript. A futuro se planean incorporar versiones para facilitar el trabajo con otros lenguajes.
:::

## Referencia del API

### Estructura de Rutas del API

Para realizar cualquier acción, es necesario conocer la estructura de rutas de los contenidos en la API, la cual se hace de la siguiente manera:

```bash
https://www.example.com/api/content/spaces/:space_uid/types/:type_uid/schema

https://www.example.com/api/content/spaces/:space_uid/types/:type_uid/entries?[filters]

https://www.example.com/api/content/spaces/:space_uid/types/:type_uid/entries/:entry_uuid
```

Aquí, `space_uid` y `type_uid` corresponden al nombre slugificado del Espacio y al nombre del Tipo de contenidos, respectivamente.

### Estructura JSON entries

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
        "slug": "lorem-ipsum-dolor",
        "type": "Post",
        "private": false,
        "targets": [],
        "category": "lorem/ipsum",
        "updated_at": "2019-03-18T14:06:59.000-03:00",
        "created_at": "2019-03-18T14:06:59.000-03:00",
        "published_at": "2021-02-26T13:37:42.000Z",
        "version_type": "current",
        "category_name": "Ipsum",
        "category_slug": "ipsum",
        "unpublished_at": null,
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
        "name": "Lorem Ipsum",
        "slug": "lorem-ipsum",
        "type": "Post",
        "private": false,
        "targets": [],
        "category": "lorem",
        "updated_at": "2019-03-18T14:06:59.000-03:00",
        "created_at": "2019-03-18T14:06:59.000-03:00",
        "published_at": "2021-02-26T13:37:42.000Z",
        "version_type": "current",
        "category_name": "Lorem",
        "category_slug": "lorem",
        "unpublished_at": null,
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
}
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
            "type",
            "category",
            "category_name",
            "category_slug",
            "created_at",
            "updated_at",
            "published_at",
            "unpublished_at",
            "tags",
            "locale",
            "available_locales",
            "targets",
            "private",
            "version_type",
            "slug"
          ],
          "properties": {
            "uuid": {
              "type": "string",
              "examples": [
                "9b0a24a6-d84f-4851-8750-a86244947510"
              ]
            },
            "space": {
              "type": "string",
              "examples": [
                "mySpace"
              ]
            },
            "name": {
              "type": "string",
              "examples": [
                "Lorem Ipsum dolor"
              ]
            },
            "type": {
              "type": "string",
              "examples": [
                "Lorem Ipsum dolor"
              ]
            },
            "category": {
              "type": "string",
              "examples": [
                "parent-category/my-category"
              ]
            },
            "category_name": {
              "type": "string",
              "examples": [
                "My Category"
              ]
            },
            "category_slug": {
              "type": "string",
              "examples": [
                "my-category"
              ]
            },
            "created_at": {
              "type": "string",
              "default": "",
              "examples": [
                "2019-03-18T14:06:59.000-03:00"
              ]
            },
            "updated_at": {
              "type": "string",
              "default": "",
              "examples": [
                "2019-03-18T14:06:59.000-03:00"
              ]
            },
            "published_at": {
              "type": "string",
              "default": "",
              "examples": [
                "2019-03-18T14:06:59.000-03:00"
              ]
            },
            "unpublished_at": {
              "type": "string",
              "default": "",
              "examples": [
                "2019-03-18T14:06:59.000-03:00"
              ]
            },
            "tags": {
              "type": "array",
              "items": {
                "type": "string",
                "examples": [
                  "tag1",
                  "tag2"
                ]
              }
            },
            "locale": {
              "type": "string",
              "examples": [
                "en"
              ]
            },
            "available_locales": {
              "type": "array",
              "items": {
                "type": "string",
                "examples": [
                  "es"
                ]
              }
            },
            "targets": {
              "type": "array",
              "items": {
                "type": "string",
                "examples": [
                  "target1"
                ]
              }
            },
            "private": {
              "type": "boolean",
              "examples": [
                false
              ]
            },
            "version_type": {
              "type": "string",
              "examples": [
                "current"
              ]
            },
            "slug": {
              "type": "string",
              "examples": [
                "en-labore"
              ]
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
      "space": "myspace",
      "name": "Lorem Ipsum dolor",
      "slug": "lorem-ipsum-dolor",
      "type": "Post",
      "private": false,
      "targets": [],
      "category": "lorem/ipsum",
      "updated_at": "2019-03-18T14:06:59.000-03:00",
      "created_at": "2019-03-18T14:06:59.000-03:00",
      "published_at": "2021-02-26T13:37:42.000Z",
      "version_type": "current",
      "category_name": "Ipsum",
      "category_slug": "ipsum",
      "unpublished_at": null,
      "tags": [],
      "locale": "en",
      "available_locales": [
        "en"
      ]
   },
   "fields":{
      "excerpt":"Lorem Ipsum dolor",
      "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
   }
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
        "type",
        "category",
        "category_name",
        "category_slug",
        "created_at",
        "updated_at",
        "published_at",
        "unpublished_at",
        "tags",
        "locale",
        "available_locales",
        "targets",
        "private",
        "version_type",
        "slug"
      ],
      "properties": {
        "uuid": {
          "type": "string",
          "examples": [
            "9b0a24a6-d84f-4851-8750-a86244947510"
          ]
        },
        "space": {
          "type": "string",
          "examples": [
            "mySpace"
          ]
        },
        "name": {
          "type": "string",
          "examples": [
            "Lorem Ipsum dolor"
          ]
        },
        "type": {
          "type": "string",
          "examples": [
            "Lorem Ipsum dolor"
          ]
        },
        "category": {
          "type": "string",
          "examples": [
            "parent-category/my-category"
          ]
        },
        "category_name": {
          "type": "string",
          "examples": [
            "My Category"
          ]
        },
        "category_slug": {
          "type": "string",
          "examples": [
            "my-category"
          ]
        },
        "created_at": {
          "type": "string",
          "default": "",
          "examples": [
            "2019-03-18T14:06:59.000-03:00"
          ]
        },
        "updated_at": {
          "type": "string",
          "default": "",
          "examples": [
            "2019-03-18T14:06:59.000-03:00"
          ]
        },
        "published_at": {
          "type": "string",
          "default": "",
          "examples": [
            "2019-03-18T14:06:59.000-03:00"
          ]
        },
        "unpublished_at": {
          "type": "string",
          "default": "",
          "examples": [
            "2019-03-18T14:06:59.000-03:00"
          ]
        },
        "tags": {
          "type": "array",
          "items": {
            "type": "string",
            "examples": [
              "tag1",
              "tag2"
            ]
          }
        },
        "locale": {
          "type": "string",
          "examples": [
            "en"
          ]
        },
        "available_locales": {
          "type": "array",
          "items": {
            "type": "string",
            "examples": [
              "es"
            ]
          }
        },
        "targets": {
          "type": "array",
          "items": {
            "type": "string",
            "examples": [
              "target1"
            ]
          }
        },
        "private": {
          "type": "boolean",
          "examples": [
            false
          ]
        },
        "version_type": {
          "type": "string",
          "examples": [
            "current"
          ]
        },
        "slug": {
          "type": "string",
          "examples": [
            "en-labore"
          ]
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

## Ejemplos

### Desplegar entradas

Para acceder al listado de entradas de un tipo de uid `type_uid` de un espacio de uid `space_uid` usa:

```shell
curl -X GET "https://test.modyo.com/api/content/spaces/{my_space}/types/{type}/entries"
```

### Desplegar cantidad total de Entradas

Todo listado de entradas incluye en la raíz de la respuesta un objeto `meta` con el total de entradas que coinciden con la consulta, en el campo `total_entries`. Ese total corresponde a la consulta completa, no a la página que estás viendo.

Si sólo necesitas el conteo, pide una página de un elemento con `per_page=1` y lee `meta.total_entries`:

```shell
curl -X GET "https://my_account.modyo.com/api/content/spaces/my_space/types/my_type/entries?meta.category=my_category&per_page=1"
```

La forma del objeto retornado será algo como esto:

```json
"meta": {
    "total_entries": 4,
    "per_page": 1,
    "current_page": 1,
    "total_pages": 4
  },
```

:::warning Atención
Las entradas siempre se consultan bajo un tipo de contenido: la única ruta disponible es `/spaces/:space_uid/types/:type_uid/entries` y no existe `/spaces/:space_uid/entries`. Para filtrar por categoría usa `meta.category` con la ruta completa de la categoría, ya que `category_id` no es un parámetro válido y la petición responde `400` con <code v-pre>{"error":{"query":{"category_id":["Unknown parameter"]}}}</code>.
:::

### Filtrar

Puedes filtrar las entradas por sus atributos de metadata, con parámetros `meta.nombre_atributo`, y por los campos del tipo de contenido, con parámetros `fields.nombre_campo`. Puedes combinar ambos tipos de filtro en la misma petición.

- Tags: consultables de dos maneras
  - `meta.tags=tag_name`
  - `meta.tags[in][]=tag1_name&meta.tags[in][]=tag2_name`
- Categorías: se consultan con la ruta completa de la categoría y siempre consideran sus categorías hijas. Puedes usarlas de tres maneras:
  - `meta.category=category_full_path` entrega las entradas de esa categoría y de sus hijas.
  - `meta.category[in][]=category1_full_path&meta.category[in][]=category2_full_path` entrega las entradas de cualquiera de esas categorías o de sus hijas.
  - `meta.category[nin][]=category_full_path` excluye las entradas de esa categoría y de sus hijas.

  `meta.category` no admite otros operadores.
- Fechas de creación/actualización/publicación: consultables usando especificación ISO-8601 y con posibilidad de búsqueda por rangos (lt, gt):
  - `.../entries?meta.created_at=1987-11-19T13:13:13`
  - `.../entries?meta.updated_at[lt]=1987-11-19`
  - `.../entries?meta.published_at[gt]=1987-11-19`
- Campos del tipo de contenido, por ejemplo:
  - Ubicación: la búsqueda será por queryString (y se buscará en la dirección, el país y las áreas administrativas) o por geohash. En ambos casos debes cambiar <span v-pre>`{{field_name}}`</span> por el nombre de un campo de ubicación del tipo de contenido. Ese nombre sólo habilita el operador: la búsqueda considera todos los campos de ubicación del tipo de contenido, así que si el tipo tiene más de uno, el resultado incluye las entradas que coinciden en cualquiera de ellos.
    - <span v-pre>`.../?fields.{{field_name}}[search]=chile`</span>. Con el campo llamado `location` quedaría: `.../?fields.location[search]=chile` En la dirección, esta búsqueda no toma en cuenta mayúsculas ni minúsculas, pero sí los espacios, tildes y caracteres especiales. En el país y las áreas administrativas la coincidencia es exacta, así que escribe el valor tal como está guardado, incluidas las mayúsculas.
    - <span v-pre>`.../?fields.{{field_name}}[geohash]=66j`</span>. Con el campo llamado `location` quedaría: `.../?fields.location[geohash]=66j`
  - `.../entries?fields.color=black`

##### Filtro de idiomas

La API de contenido entrega las entradas en el idioma por defecto del Espacio. Para pedir otro idioma usa el parámetro de query string `locale`, que es la única vía disponible: la API de contenido no lee la cabecera `Accept-Language`.

Por ejemplo, para obtener entradas en el idioma Español (es):

```shell
curl -X GET "https://my_account.modyo.com/api/content/spaces/my_space/types/my_type/entries?locale=es"
```

:::warning Atención
El idioma que pidas tiene que estar habilitado en el Espacio. Si no lo está, la petición no cae al idioma por defecto: responde `400` con <code v-pre>{"error":"Locale not available for this space"}</code>.
:::

##### Operadores

Las principales operaciones sobre campos son:

- [gt],[lt] = greater/less than, aplicable en campos Booleano, Decimal, Entero y Fecha, y en `meta.created_at`, `meta.updated_at` y `meta.published_at`. Si combinas [gt] y [lt] sobre un mismo campo numérico o de fecha, el valor de [lt] tiene que ser mayor que el de [gt]; si no, la petición responde `400`.
- [in] = permite incluir varios valores que entran en una consulta tipo OR
- [has] = permite incluir varios valores, que entran en una consulta tipo AND, sólo funciona en campos múltiples y de texto.
- [nin] = permite incluir varios valores, que entran en una consulta NOT IN
- [search] = permite búsquedas de texto dentro de todos los atributos de las ubicaciones de una entrada.
- [geohash] = permite búsquedas usando un lat-long geohash en base 32, par más información consultar https://www.movable-type.co.uk/scripts/geohash.html .

Ejemplo:

- `../entries?meta.created_at[in][]=1987-11-19T13:13:13&meta.created_at[in][]=1987-11-19T14:14:14` buscará entries creadas el 19 de noviembre de 1987, exactamente a las 13:13:13 o a las 14:14:14

##### Campos retornados

Mediante el parámetro `fields` puedes escoger qué valores se devuelven, con una expresión JSONPath que se aplica sobre la respuesta completa. En el listado, los atributos de metadata se referencian como `$.entries[*].meta.attr_name` (ej: `$.entries[*].meta.tags`) y los campos de las entradas como `$.entries[*].fields.attr_name`. En una entrada puntual, las rutas son `$.meta.attr_name` y `$.fields.attr_name`. Por ejemplo:

`.../entries?fields=$.entries[*].meta.uuid` para obtener sólo los uuid de la meta-data de los entries.
`.../entries?fields=$..description` para obtener todos los campos _description_ en los entries.

:::warning Atención
Cuando usas `fields`, la respuesta deja de ser el objeto original (en el listado, el que tiene `entries` y `meta`) y pasa a ser un arreglo con los valores que coinciden con la expresión, sin `meta.total_entries` ni los datos de paginación. Si la expresión no es válida, la petición responde `400`.
:::

##### Igualdades/Desigualdades en arrays

Los campos que buscan en elementos múltiples (checkboxes, multiple) pueden usar la siguiente sintaxis:

- HAS: equivalente a un sql AND
  `.../entries?fields.color[has][]=red&fields.color[has][]=black`
- IN: equivalente a un sql OR
  `.../entries?fields.color[in][]=red&fields.color[in][]=blue`
- NIN: equivalente a un sql NOT IN
  `.../entries?fields.color[nin][]=red&fields.color[nin][]=blue`

### Ordenar

El orden de los resultados se especifica con los parámetros `sort_by` y `order`:

- `sort_by`: nombre del atributo por el que quieres ordenar, siempre con el prefijo `meta.` o `fields.`. Un nombre sin prefijo, o un atributo que no sea ordenable, responde `400` con <code v-pre>{"error":{"query":{"sort_by":["Key not sortable"]}}}</code>.
- `order`: `asc` o `desc`. Es opcional y su valor por defecto es `asc`. Si envías `sort_by` con un `order` distinto, la petición responde `400` con <code v-pre>{"error":{"query":{"order":["Supported values: asc, desc. asc is selected when no order is specified"]}}}</code>.

Los atributos de metadata que puedes usar en `sort_by` son:

- `meta.uuid`
- `meta.name`
- `meta.slug`
- `meta.created_at`
- `meta.updated_at`
- `meta.published_at`
- `meta.unpublished_at`
- `meta.category`
- `meta.category_slug`
- `meta.category_name`

```shell
curl -X GET "https://my_account.modyo.com/api/content/spaces/my_space/types/my_type/entries?sort_by=meta.published_at&order=desc"
```

También puedes ordenar por un campo propio del tipo de contenido usando el prefijo `fields.`, siempre que el campo sea de tipo Booleano, Checkbox, Decimal, Dropdown, Entero, Fecha, Radio o Texto de una línea. El resto de los [tipos de campo](/es/platform/content/types.html), como Texto enriquecido, Opciones múltiples, Ubicación, Archivo o Grupo, no son ordenables.

Por ejemplo, para ordenar por un campo llamado `priority` de tipo Entero:

```shell
curl -X GET "https://my_account.modyo.com/api/content/spaces/my_space/types/my_type/entries?sort_by=fields.priority&order=asc"
```

:::warning Atención
`meta.tags` no es ordenable, sólo sirve como filtro.
:::

### Vista previa

Por defecto, la API de contenido entrega sólo las versiones publicadas de las entradas. Cuando abres una página del sitio en [modo vista previa](/es/platform/core/#modos-de-vista-previa) con el selector **SDK de contenido** de la barra de vista previa en **Editable**, la plataforma agrega a esa página un token de vista previa. Las llamadas que la página hace a la API de contenido con `fetch` o `XMLHttpRequest`, ya sea a su mismo dominio o al dominio de la cuenta, viajan con ese token, y la API entrega las versiones editables de las entradas en lugar de las publicadas. En esas respuestas, `meta.version_type` llega con el valor `editable`.

Esto aplica tanto al listado de entradas como a una entrada puntual:

```bash
https://www.example.com/api/content/spaces/:space_uid/types/:type_uid/entries

https://www.example.com/api/content/spaces/:space_uid/types/:type_uid/entries/:entry_uuid
```

Sólo los endpoints de entradas cambian de versión. El esquema del tipo de contenido, las categorías y las ubicaciones no se ven afectados por el selector.

Cuando la petición trae un token de vista previa válido, la respuesta deja de ser cacheable: la cabecera `cache-control` pasa de `public, no-cache` a `no-store, must-revalidate, private, max-age=0`, para que ni el navegador ni la CDN guarden una versión editable. Con el selector en **Publicada**, la página no recibe el token y las respuestas mantienen `public, no-cache`.

La plataforma agrega el token a la URL de cada llamada con los parámetros `preview_token` y `preview_nonce`, que la API no considera como filtros.

La API vuelve a entregar contenido publicado cuando se cumple cualquiera de estas condiciones:

- La petición no lleva el token de vista previa, por ejemplo porque se hace directamente a la API desde otra pestaña, desde un servidor, con `curl` o desde un front-end local, aunque sea en el mismo navegador. Tampoco lo llevan las peticiones que no usan el `fetch` o el `XMLHttpRequest` de la propia página, como las de un web worker.
- El token venció. Dura 60 minutos desde que se cargó la página: si la mantienes abierta más tiempo, recárgala.
- La sesión de administrador está impersonando a un usuario.
- La sesión perdió su autorización, por ejemplo porque se cerró sesión o un administrador revocó el acceso.
- La cuenta valida la huella del navegador y la petición no coincide con el navegador que abrió la sesión.

:::warning Atención
La vista previa de la API depende del token que la plataforma agrega a la página abierta en vista previa, así que un usuario final anónimo o un consumo desde servidor siempre recibe contenido publicado. Para revisar lo que verá tu aplicación en producción, basta con llamar a la API directamente, fuera de esa página, por ejemplo desde otra pestaña.
:::

### Contenido privado

Siempre que uses la API de contenido, puedes acceder al contenido publicado que esté disponible para todos los usuarios (no privado), sin embargo, si quieres acceder al contenido privado, debes añadir un header o bien, un parámetro GET a la URL de request de la API de contenido.

:::tip Tip
Si usas Liquid para acceder al contenido, los usuarios que inicien sesión y cumplan con los segmentos automáticamente verán el contenido cuando corresponda y no se require ninguna acción extra por parte del desarrollador Front End.
:::

La API de contenido puede recibir el parámetro delivery token de dos formas:

- Como header: `Delivery-Token`
- Como parámetro GET: `delivery_token`

El token de acceso al contenido es un token público en formato [JWT](https://tools.ietf.org/html/rfc7519) que comparten todos los usuarios que pertenecen al mismo grupo de segmentos. Se puede obtener haciendo un request GET a la URL `test.modyo.com/api/customers/realms/{realm_uid}/delivery_token`.

El token de acceso a contenido (content delivery token) contiene los siguientes atributos:

- **iss**: URL con la que Modyo identifica al emisor del token. Es informativa y trae un segmento `/profile/` que no corresponde a ninguna ruta real, así que no la uses como la dirección a la que llamar.
- **aud**: URL base de la API de contenido.
- **sub**: UUID de la cuenta, no el nombre del space. La API de contenido compara este valor con el UUID de la cuenta que atiende la petición y sólo habilita el contenido privado cuando coinciden.
- **exp**: Momento de expiración del token, calculado con el tiempo de vida configurado en la cuenta. Revisa [Token de Entrega de Contenido (JWT - JSON Web Token)](/es/platform/core/security.html#token-de-entrega-de-contenido-jwt-json-web-token) para cambiarlo.
- **access_type**: Siempre `delivery`.
- **segments**: Arreglo con los UUID de los segmentos a los que pertenece el usuario.

Por ejemplo:

```javascript
{
  "iss": "https://my_account.modyo.com/api/customers/realms/my_realm/profile/delivery_token",
  "aud": "https://my_account.modyo.com/api/content",
  "sub": "0f3d1b6c-5a2e-4c81-9b7f-2d84a6e05c19",
  "exp": 1516242622,
  "access_type": "delivery",
  "segments": ["7a41c9d2-3e58-4b60-8f13-95c2d7ae61b0", "c86b0f45-19da-4e27-b3a8-6f04d5217e9c"]
}
```

:::warning Atención
Para pedir el token necesitas la credencial de un usuario con sesión iniciada en el reino. Sin ella el endpoint responde `401` con <code v-pre>{"error":{"user_session":"user not found"}}</code>, no `404`. El `404` es otra cosa: aparece cuando el `realm_uid` de la URL no corresponde a ningún reino activo de la cuenta. Si el usuario tiene pendiente restablecer su contraseña, el endpoint responde `403` hasta que inicie sesión con su nombre de usuario y contraseña para completar el proceso. Las credenciales que acepta la API de Customers están en [Autenticación](/es/platform/customers/api.html#autenticacion).
:::

:::warning Atención
Es necesario que la obtención del token de acceso al contenido se haga de forma dinámica, ya que ese token cambiará de acuerdo a los segmentos a los que pertenezca el usuario, y dado que los segmentos pueden llegar a ser altamente volátiles, no es recomendable almacenar este valor.
:::

La respuesta de la consulta a la API de contenido con el delivery token, es igual a la respuesta que recibirías sin el delivery token, pero esta contendrá como parte de la respuesta, tanto el contenido privado (sin segmentos) como el contenido segmentado que esté restringido a los segmentos a los que pertenece el usuario que solicitó su delivery token.