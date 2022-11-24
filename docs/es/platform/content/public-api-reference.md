---
search: true
sidebarDepth: 3
---

# API

Modyo Content cuenta con una API para poder acceder a los espacios que contienen las entradas de contenido de forma rápida y eficiente. Para poder acceder a ella existen dos tipos de Software Development Kits (SDKs), uno de uso interno que conecta a [Modyo Content](/es/platform/content/) con [Modyo Channels](/es/platform/channels/) desde el lado del servidor por medio de Liquid y otro externo que hace uso del API pública en REST para su consumo desde Javascript.

:::tip SDKs para otros lenguajes
Por el momento sólo existe, de forma oficial, un SDK para Javascript. A futuro se planean incorporar versiones para facilitar el trabajo con otros lenguajes.
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

### Desplegar Entradas

Para acceder al listado de entradas de un tipo de uid `type_uid` de un espacio de uid `space_uid` usa:

<CodeSwitcher>
<template v-slot:curl>

```shell
curl -X GET "https://test.modyo.com/api/content/spaces/{my_space}/types/{type}/entries"
```

</template>
</CodeSwitcher>

### Desplegar cantidad total de Entradas

Para acceder a la cantidad total de entradas que retorna un filtro de contenido, puedes usar el filtro de liquid `total_entries`, por ejemplo:

<CodeSwitcher isolated:true>
<template v-slot:curl>
    
```shell
curl -X GET "https://test.modyo.com/api/admin/content/spaces/{my_space}/entries?category_id=25"
```

La respuesta contiene el objeto `meta` que incluye un campo que te ayudará a navegarlo. La forma del objeto retornado será algo como esto:

```json
"meta": {
    "total_entries": 4,
    "per_page": 10,
    "current_page": 1,
    "total_pages": 1
  },
```

</template>
</CodeSwitcher>

### Filtrar

<CodeSwitcher isolated:true>
<template v-slot:curl>

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
    - <span v-pre>`.../?fields.{{field_name}}[search]=chile`</span>. Con el campo llamado `location` quedaría: `.../?fields.location[search]=chile` Ésta búsqueda no toma en cuenta mayúsculas ni minúsculas, pero si toma en cuenta los espacio, tíldes y carácteres especiales.
    - <span v-pre>`.../?fields.{{field_name}}[geohash]=66j`</span>. Con el campo llamado `location` quedaría: `.../?fields.location[geohash]=66j`
  - `.../entries?fields.color=black`

###### Filtro de idiomas

La API de Modyo entrega entries en el idioma por defecto del Espacio, a menos que se pida explícitamente otro idioma a través del parámetro de query string locale o el Accept-Language header.

Por ejemplo, para obtener entries en el idioma Español-Chile (es-cl):

```plain
Query string: GET .../posts/entries?locale=es-cl
Header: Setear Accept-Language es-cl
```

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

##### Campos Retornados

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

</template>
</CodeSwitcher>

### Ordenar

De la misma forma en que se puede filtrar por categoría `by_category`, tags `by_tags` y por uuid `by_uuid`, se puede crear un filtro para ordenar los resultados por los atributos "meta" `name`, `slug`, `created_at`, `updated_at`, `published_at` de las entradas usando los filtros `sort_by`, de la siguiente forma:

<CodeSwitcher isolated:true>
<template v-slot:curl>

El orden de los resultados se debe especificar con los parámetros `sort_by` y `order`:

- `sort_by`: indicando el nombre del atributo (ej: meta.tags, o fields.name)
- `order`: ['asc','desc'] (opcional, asc por default)

```shell
curl -X GET "https://test.modyo.com/api/content/spaces/{my_space}/types/{type}/entries?sort_by=id&order=desc"
```

</template>
</CodeSwitcher>


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