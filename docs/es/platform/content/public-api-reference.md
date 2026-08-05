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
        "slug": "lorem-ipsum-dolor"
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
        "slug": "lorem-ipsum"
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
      "slug": "lorem-ipsum-dolor"
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
curl -X GET "https://test.modyo.com/api/content/spaces/blog/types/post/entries?meta.category=noticias&per_page=1"
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

En la búsqueda de contentTypes con filtros, se hará una distinción a nivel de app dependiendo de los filtros solicitados:

Metadata (ej: Tags, Category, Fechas): Búsquedas por SQL, serán consultables mediante parámetros `meta.param_name`. Esto mientras sólo sea la Metadata lo que se esté consultando.

- Tags: consultables de dos maneras
  - `meta.tags=tag_name`
  - `meta.tags[in][]=tag1_name&meta.tags[in][]=tag2_name`
- Categories, consultable de una sola manera: `meta.category=category_full_path` considerará categorías hijas de la consultada
- Fechas de creación/actualización/publicación/despublicación: consultables usando especificación ISO-8601 y con posibilidad de búsqueda por rangos (lt, gt):
  - `.../entries?meta.created_at=1987-11-19T13:13:13`
  - `.../entries?meta.updated_at[lt]=1987-11-19`
  - `.../entries?meta.published_at[gt]=1987-11-19`
- Fields: Búsquedas por medio de ElasticSearch, por ejemplo:
  - Ubicación: la búsqueda será por queryString (y se buscará en los campos street_name, country, admin_area_levels) o por geohash. En ambos casos debes cambiar <span v-pre>`{{field_name}}`</span> por el nombre del campo de ubicación del tipo de contenido
    - <span v-pre>`.../?fields.{{field_name}}[search]=chile`</span>. Con el campo llamado `location` quedaría: `.../?fields.location[search]=chile` Esta búsqueda no toma en cuenta mayúsculas ni minúsculas, pero sí toma en cuenta los espacios, tildes y caracteres especiales.
    - <span v-pre>`.../?fields.{{field_name}}[geohash]=66j`</span>. Con el campo llamado `location` quedaría: `.../?fields.location[geohash]=66j`
  - `.../entries?fields.color=black`

##### Filtro de idiomas

La API de contenido entrega las entradas en el idioma por defecto del Espacio. Para pedir otro idioma usa el parámetro de query string `locale`, que es la única vía disponible: la API de contenido no lee la cabecera `Accept-Language`.

Por ejemplo, para obtener entradas en el idioma Español-Chile (es-cl):

```shell
curl -X GET "https://test.modyo.com/api/content/spaces/blog/types/post/entries?locale=es-cl"
```

:::warning Atención
El idioma que pidas tiene que estar habilitado en el Espacio. Si no lo está, la petición no cae al idioma por defecto: responde `400` con <code v-pre>{"error":"Locale not available for this space"}</code>.
:::

##### Operadores

Las principales operaciones sobre campos son:

- [gt],[lt] = greater/less than, aplicable en enteros y fechas
- [in] = permite incluir varios valores que entran en una consulta tipo OR
- [has] = permite incluir varios valores, que entran en una consulta tipo AND, sólo funciona en campos múltiples y de texto.
- [nin] = permite incluir varios valores, que entran en una consulta NOT IN
- [search] = permite búsquedas de texto dentro de todos los atributos de las ubicaciones de una entrada.
- [geohash] = permite búsquedas usando un lat-long geohash en base 32, par más información consultar https://www.movable-type.co.uk/scripts/geohash.html .

Ejemplo:

- `../entries?meta.created_at[in][]=1987-11-19T13:13:13&meta.created_at[in][]=1987-11-19T14:14:14` buscará entries creadas el 11 de noviembre, tanto a las 13:13 como 14:14

##### Campos retornados

Mediante el parámetro fields se puede escoger qué parámetros se devuelven en el documento:

Los campos de metadata se referencian como: meta.attr_name (ej meta.tags)
Los campos de las entries como: field.attr_name
Se usa una expresiónJsonPath por ejemplo:

`.../entries?fields=$.entries[*].meta.uuid` para obtener sólo los uuid de la meta-data de los entries.
`.../entries?fields=$..description` para obtener todos los campos _description_ en los entries.

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

```shell
curl -X GET "https://test.modyo.com/api/content/spaces/blog/types/post/entries?sort_by=meta.published_at&order=desc"
```

También puedes ordenar por un campo propio del tipo de contenido usando el prefijo `fields.`, siempre que el campo sea de tipo Booleano, Checkbox, Decimal, Dropdown, Entero, Fecha, Radio o Texto de una línea. El resto de los [tipos de campo](/es/platform/content/types.html), como Texto enriquecido, Opciones múltiples, Ubicación, Archivo o Grupo, no son ordenables.

Por ejemplo, para ordenar por un campo llamado `priority` de tipo Entero:

```shell
curl -X GET "https://test.modyo.com/api/content/spaces/blog/types/post/entries?sort_by=fields.priority&order=asc"
```

:::warning Atención
`meta.tags` no es ordenable, sólo sirve como filtro. Tampoco uses `meta.category`, `meta.category_slug` ni `meta.category_name` como criterio de orden: la API los acepta como parámetro, pero no puede resolver el orden y la petición falla.
:::

### Vista previa

Por defecto, la API de contenido entrega sólo las versiones publicadas de las entradas. Si el navegador que hace la petición tiene una sesión de administrador con el [modo vista previa](/es/platform/core/#modos-de-vista-previa) abierto, y el selector **SDK de contenido** de la barra de vista previa está en **Editable**, la API entrega las versiones editables de las entradas en lugar de las publicadas. En esas respuestas, `meta.version_type` llega con el valor `editable`.

Esto aplica tanto al listado de entradas como a una entrada puntual:

```bash
https://www.example.com/api/content/spaces/:space_uid/types/:type_uid/entries

https://www.example.com/api/content/spaces/:space_uid/types/:type_uid/entries/:entry_uuid
```

Sólo los endpoints de entradas cambian de versión. El esquema del tipo de contenido, las categorías y las ubicaciones no se ven afectados por el selector.

Mientras la sesión de vista previa está abierta, la respuesta deja de ser cacheable: la cabecera `cache-control` pasa de `public, no-cache` a `no-store, must-revalidate, private, max-age=0`, para que ni el navegador ni la CDN guarden una versión editable. Esto ocurre incluso cuando el selector está en **Publicada**.

La API vuelve a entregar contenido publicado cuando se cumple cualquiera de estas condiciones:

- La petición no viaja con la cookie de sesión del panel de administración, o no hay una sesión de vista previa abierta.
- La sesión de administrador está impersonando a un usuario.
- La sesión perdió su autorización, por ejemplo porque se cerró sesión o un administrador revocó el acceso.
- La cuenta valida la huella del navegador y la petición no coincide con el navegador que abrió la sesión.

:::warning Atención
La vista previa de la API depende de la sesión del navegador que hace la petición, así que nunca expone versiones editables a un usuario final anónimo ni a un consumo desde servidor. El riesgo es el opuesto: si desarrollas tu capa de consumo en el mismo navegador donde tienes el modo vista previa abierto, vas a ver versiones editables donde tu aplicación en producción verá contenido publicado. Verifica las respuestas en una ventana sin la sesión de administrador antes de darlas por buenas.
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

- **iss**: URL base de la API de customers
- **aud**: URL base de la API de contenido
- **sub**: Nombre del space
- **exp**: Tiempo de expiración del token
- **access_type**: delivery,
- **segmentos**: Array de segmentos

Por ejemplo:

```javascript
{
  "iss": "http://my-account.modyo.me/api/customers",
  "aud": "http://my-account.modyo.me/api/content",
  "sub": "account_uuid",
  "exp": 1516242622,
  "access_type": "delivery",
  "segments": ["segment1", "segment2"]
}
```

:::warning Atención
Para poder acceder a la URL de obtención del token, debes asegurarte de tener una sesión iniciada con un usuario en la cuenta o al menos en un sitio de la misma, de lo contrario recibirás un error `404 - Not found`.
:::

:::warning Atención
Es necesario que la obtención del token de acceso al contenido se haga de forma dinámica, ya que ese token cambiará de acuerdo a los segmentos a los que pertenezca el usuario, y dado que los segmentos pueden llegar a ser altamente volátiles, no es recomendable almacenar este valor.
:::

La respuesta de la consulta a la API de contenido con el delivery token, es igual a la respuesta que recibirías sin el delivery token, pero esta contendrá como parte de la respuesta, tanto el contenido privado (sin segmentos) como el contenido segmentado que esté restringido a los segmentos a los que pertenece el usuario que solicitó su delivery token.