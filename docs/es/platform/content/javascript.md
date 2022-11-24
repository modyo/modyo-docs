---
search: true
---

# SDK de Javascript

El **SDK de Modyo** es una librería que facilita la interacción de aplicaciones basadas en JavaScript con la API pública de Modyo.

Mediante el SDK se puede obtener, filtrar, y ordenar tu contenido creado para poder aprovechar por completo las capacidades de la API Headless.

Asimismo, el SDK de Modyo permite obtener información del usuario final que ya haya iniciado sesión en la plataforma para personalizar aún más la interacción de este con tu sitio.

### Uso

Para poder utilizarlo en tu proyecto primero se tiene que crear un cliente. Para eso creamos una instancia de un nuevo cliente con la dirección web de la cuenta de Modyo como argumento junto con el idioma a solicitar.

```js
import { Client } from "@modyo/sdk";
// Para obtener la cuenta correcta, debemos usar la url de la cuenta
const modyoAccount = new Client("https://my-account.modyo.com","es");
```

:::tip Tip
Al tener la instancia de un cliente, el segundo parámetro _locale_ es opcional, de tal forma que se soliciten entradas solo en el idioma solicitado, de lo contrario, se usará el idioma por defecto del Espacio.
:::

## Ejemplos

## Desplegar Entradas

Para acceder al listado de entradas de un tipo de uid `type_uid` de un espacio de uid `space_uid` usa:

```js
import { Client } from "@modyo/sdk";
// Para obtener la cuenta correcta, debemos usar la url de la cuenta
const modyoAccount = new Client("https://my-account.modyo.com","es");

const typePost = modyoAccount.getContentType("space_uid", "type_uid");
// `typePost` retornará un objeto con diversa información del tipo, entre ellas, el esquema de ese tipo

// Si queremos ver ese esquema en detalle, podemos ocupar el método `getSchema()`
typePost.getSchema().then(sch => console.log("Content Type JSON Schema:", sch));
/*
Eso imprimirá algo como esto:
> Content Type JSON Schema: {$schema: "http://json-schema.org/draft-07/schema#", definitions: {…}, type: "object", required: Array(2), properties: {…}}
*/
```

## Desplegar cantidad total de Entradas

Para acceder a la cantidad total de entradas que retorna un filtro de contenido, puedes usar el filtro de liquid `total_entries`, por ejemplo:

```js
import { Client } from "@modyo/sdk";
const modyoAccount = new Client("https://my-account.modyo.com","es");
const typePost = modyoAccount.getContentType("space_uid", "type_uid");

typePost.getSchema().then(sch => console.log("Content Type JSON Schema:", sch));

// Para obtener las entradas de ese tipo
const entries = typePost.getEntries();

```

El objeto retornado por getEntries() incluye un campo meta que te ayudará a navegarlo. La forma del objeto retornado será algo como esto:

```json
"meta": {
    "total_entries": 4,
    "per_page": 10,
    "current_page": 1,
    "total_pages": 1
  },
```

## Filtrar por

El método `getEntries()` que ocupamos más arriba también puede recibir un objecto de filtros para consultar las entradas.
Los filtros soportados: `Before`, `After`, `LessThan`, `GreaterThan`, `In`, `NotIn`, `Has`, `Geohash`, pudiendo consultar los campos `meta` de cada entrada (como la fecha de creación o tags asignados)

**Filtros soportados**:

- **Before, After, LessThan, GreaterThan**: reciben como parámetro el nombre del campo a comparar y el valor con el que se comparará.

- **In, NotIn, Has**: reciben como parámetro el nombre del campo a comparar y un array de valores con los que se comparará. In es equivalente a un `OR` en SQL, Has es equivalente a un `AND`.

- **SortBy**: recibe como parámetros el campo a ordenar y orden (`asc` o `desc`).

- **JSONPath**: recibe el JSONPath [ref](https://goessner.net/articles/JsonPath/) que modela una estructura de respuesta.

- **Pagination**: recibe como parámetros el número de página y el total de entradas por página.

- **Geohash**: recibe como parámetros un campo de ubicación y un geohash [ref](https://www.movable-type.co.uk/scripts/geohash.html) para seleccionar el contenido dentro de una ubicación.

:::warning Atención
Si se pretende filtrar por fecha, es importante que el valor del filtro utilice el estándar ISO-8601.
:::

```js
// Si queremos obtener un listado de los atributos por los que podemos consultar
typePost
  .getSchema()
  .then(() => console.log("List of attributes:", typePost.getAttrs()));
```

Para crear un filtro, usamos el método `Filter()`

```js
const filters = typePost
  .Filter()
  .Before("meta.created_at", "2020-05-01")
  .In("meta.tags", ["tag1", "tag2"])
  .Pagination(15,1);
// Ahora lo ocupamos para obtener entradas con estos criterios
const filteredEntries = typePost.getEntries(filters);
// ahora resolvemos la promesa
filteredEntries.then(res => console.log("Filtered entries response: ", res));
```

## Ordenar por

De la misma forma en que se puede filtrar por categoría `by_category`, tags `by_tags` y por uuid `by_uuid`, se puede crear un filtro para ordenar los resultados por los atributos "meta" `name`, `slug`, `created_at`, `updated_at`, `published_at` de las entradas usando los filtros `sort_by`, de la siguiente forma:

Los resultados de nuestra búsqueda también pueden ordenarse con el método `SortBy()`

```js
// JSONPath and Sorting are also supported as filters
const filters = ctype
  .Filter()
  .SortBy("meta.created_at", "desc")
  .JSONPath("$..uuid");
```

**Nota**: Como se puede ver en el ejemplo, es posible usar en nuestras consultas expresiones `JSONPath` [JSONPath - XPath for JSON](https://goessner.net/articles/JsonPath/)

## Obtener Contenido privado

Para obtener contenido privado, basta con que el usuario esté con sesión, pasando al método `getContentType()` un tercer argumento en `false` (que indica que no es público)

```js
// To acces private content (user must be logged in on account)
const privateTypePost = modyoAccount.getContentType("blog", "post", false);
```

:::warning Atención
Es importante que se trate esta información potencialmente sensible con cuidado. Para obtener contenido privado se requiere de cookies y de un usuario final que haya iniciado sesión en Modyo.
:::

### Información de Usuario Final

:::warning Atención
Es importante que trates esta información sensible con cuidado. Al igual que con Contenido privado, esta información sólo es obtenible si se trabaja desde un navegador que soporte cookies, y el usuario final haya iniciado sesión en la plataforma.

Para obtener información del usuario final, es necesario llamar a la función: `client.getUserInfo()` dicha función retornará un objeto con la información básica
de dicho usuario.
:::

