---
search: true
---

# APIs de Customers

Modyo Customers contiene una variedad de APIs con las que podrás obtener la información de Reinos, las notificaciones y sus usuarios.


## Autenticación

Todos los endpoints bajo `ACCOUNT_URL/api/customers/realms/{realm_uid}/` responden en nombre de un usuario final del reino, así que cada llamada necesita una credencial de ese usuario. La única excepción es [Verificación de código OTP](#verificacion-de-codigo-otp).

El reino acepta dos credenciales:

- **Access token de OAuth2**, en la cabecera `Authorization: Bearer`. Tiene precedencia: cuando la petición trae un access token reconocido, la cookie de sesión no se evalúa.
- **Cookie de sesión** del usuario en el reino. Se usa cuando la petición no trae un access token reconocido. Es la opción natural cuando tu aplicación corre dentro de un sitio de Modyo, porque el navegador la envía sola.

Las dos resuelven al mismo usuario y dan acceso a los mismos endpoints. Elige el access token cuando tu aplicación vive fuera de los dominios de la cuenta, por ejemplo una aplicación móvil o un front en otro dominio.

### Obtener un access token

Cada reino expone su propio servidor OAuth2:

| Endpoint | Para qué sirve |
|----------|----------------|
| `ACCOUNT_URL/realms/{realm_uid}/oauth/authorize` | Autoriza al usuario y entrega el código. |
| `ACCOUNT_URL/realms/{realm_uid}/oauth/token` | Canjea el código por el access token. |
| `ACCOUNT_URL/realms/{realm_uid}/oauth/revoke` | Invalida un token ya emitido. |

El único flujo soportado es `authorization_code`. El reino no emite tokens con `client_credentials`, `password` ni `implicit`, y tampoco entrega refresh tokens.

Para empezar necesitas un cliente OAuth del reino, creado como se describe en [Cliente OAuth](/es/platform/customers/settings.html#cliente-oauth). Al hacer click en el nombre del cliente, el panel muestra su **UID** y su **Secreto**, que son el `client_id` y el `client_secret` del flujo, junto con la URL de autorización ya armada en **Cliente web** y los endpoints del reino listos para copiar en **Cliente móvil**.

1. Lleva al usuario a `ACCOUNT_URL/realms/{realm_uid}/oauth/authorize` con los parámetros `response_type=code`, `client_id`, `redirect_uri` y, si los necesitas, `scope` y `state`.
2. Si el usuario todavía no tiene sesión en el reino, Modyo lo manda al inicio de sesión y retoma la autorización cuando termina. No hay pantalla de consentimiento: apenas hay sesión, Modyo redirige a tu **URI de redirección** con el parámetro `code`.
3. Canjea el código en el endpoint de token. El código vive diez minutos y sirve una sola vez.
4. Usa el `access_token` de la respuesta en la cabecera `Authorization` de tus llamadas.

El canje del código se ve así:

```shell
curl -X POST "ACCOUNT_URL/realms/{realm_uid}/oauth/token" \
  -d "grant_type=authorization_code" \
  -d "code=EL_CODIGO" \
  -d "client_id=EL_UID_DEL_CLIENTE" \
  -d "client_secret=EL_SECRETO_DEL_CLIENTE" \
  -d "redirect_uri=TU_URI_DE_REDIRECCION"
```

Y una llamada ya autenticada, así:

```shell
curl -X GET "ACCOUNT_URL/api/customers/realms/{realm_uid}/me" \
  -H "Authorization: Bearer EL_ACCESS_TOKEN"
```

El reino reconoce `public` como scope por defecto y `admin` como único scope opcional. El `scope` que pidas tiene que estar entre esos valores y, si el cliente OAuth define **Scopes**, también dentro de los suyos; si no, la autorización falla antes de entregar el código.

Los clientes públicos, como una aplicación móvil o un front sin backend, pueden usar PKCE: si envías `code_challenge` y `code_challenge_method` en el paso de autorización, tienes que enviar el `code_verifier` correspondiente al canjear el código.

:::warning Atención
El cliente OAuth pertenece al reino donde lo creaste y sólo puede autorizar usuarios de ese mismo reino. Si tu cuenta tiene varios reinos, necesitas un cliente por cada uno.
:::

:::warning Atención
El access token no lleva vencimiento propio, pero eso no lo hace eterno: queda amarrado a la sesión del usuario que autorizó el flujo. Cuando esa sesión caduca por la política de expiración de sesiones del reino, cuando el usuario cierra sesión o cuando sus sesiones se revocan desde el panel, el token deja de servir. Mientras se sigue usando, la sesión se renueva sola antes de vencer, así que un token en uso continuo no se cae por sí solo.
:::

### Errores de autenticación

Todos los endpoints de la API de Customers comparten estos cuerpos de error:

| Código | Cuerpo | Cuándo ocurre |
|--------|--------|---------------|
| `401` | <code v-pre>{"error":{"user_session":"user not found"}}</code> | La petición no trae credenciales utilizables, el access token no corresponde a un usuario del reino o el usuario está inactivo. |
| `401` | <code v-pre>{"error":{"grant_expired":"session expired"}}</code> | La credencial identifica a un usuario, pero la sesión que la respalda venció o fue revocada. |
| `404` | <code v-pre>{}</code> | El `realm_uid` de la URL no corresponde a ningún reino activo de la cuenta. |

:::tip Tip
Separar los dos `401` te ahorra tiempo de depuración. `user_session` significa que nunca llegó una credencial utilizable, así que revisa la cabecera `Authorization` o la cookie. `grant_expired` significa que la credencial era correcta y lo que se acabó fue la sesión, así que corresponde volver a autenticar al usuario en vez de reintentar.
:::

## API de Customers

Accede a la API de Customers para gestionar reinos y usuarios a través de la URL `ACCOUNT_URL/api/customers/docs`. Ejemplos de endpoints:

- **Notificaciones**: `ACCOUNT_URL/api/customers/realms/{realm_uid}/notifications`
- **Información de usuarios**: `ACCOUNT_URL/api/customers/realms/{realm_uid}/me`
- **Eventos**: `ACCOUNT_URL/api/customers/realms/{realm_uid}/events`


### Tokens delegados

Al habilitar la opción de [**Mostrar información de delegación**](/es/platform/core/integrations/identity-providers) en tus proveedores de identidad, al hacer uso de la API `account_url/api/customers/realms/{realm_uid}/me`, obtendrás un JSON adicionado con información de tokens delegados parecido a este:

Si habilitas la opción de [**Mostrar información de delegación**](/es/platform/core/integrations/identity-providers) en los proveedores de identidad, el endpoint `account_url/api/customers/realms/{realm_uid}/me` incluirá un JSON con información de tokens delegados:


``curl -X GET test.modyo.com/api/customers/realms/miRealm/me``

```json
{
  "avatar": {
    "id": 100,
    "file_name": "user_avatar.png",
    "url_original": "/user_avatar_original.png",
    "url_small": "/user_avatar_small.png",
    "url_medium": "/user_avatar_medium.png"
  },
  "id": 2332,
  "external_id": "11111111-1",
  "name": "Clifton Feil",
  "first_name": "Clifton",
  "last_name": "Feil",
  "second_last_name": "Smith",
  "email": "test.user@modyo.com",
  "username": "test.user",
  ...
  ...
   "delegated_token":{
      "uuid":"af57d947-69dc-4ed7-b5af-418c957d827f",
      "access_token":"TOKEN",
      "access_token_expires_in":300,
      "access_token_expires_in_datetime":"2021-04-15T21:42:55.995+00:00"
   }
```

:::tip Tip
En caso de no tener habilitada la opción **Mostrar información de delegación**, se mostrará null (vacío).
:::

### Actualizar la información del usuario

Con `PUT ACCOUNT_URL/api/customers/realms/{realm_uid}/me` el usuario de la sesión actualiza sus propios datos. Además de los atributos del perfil, el cuerpo acepta `custom_fields` como un arreglo de pares `key` y `value`.

:::warning Atención
Los custom fields que no tengan marcadas **Visible para usuarios de los sitios** y **Editable por usuarios de los sitios** en la [configuración del reino](/es/platform/customers/settings.html#custom-fields) se descartan en silencio: la respuesta es `200`, el resto de los atributos se guarda y esos campos conservan su valor anterior, sin ningún error que lo indique.
:::

## Eventos del usuario

`GET ACCOUNT_URL/api/customers/realms/{realm_uid}/events`

Devuelve los [eventos de negocio](/es/platform/customers/events.html) del usuario de la sesión, del más reciente al más antiguo. Es el mismo registro que un administrador ve en **Customers > Reinos > Eventos**, acotado a ese usuario. No aparece en la referencia interactiva de `ACCOUNT_URL/api/customers/docs`.

Acepta estos parámetros, todos opcionales:

| Parámetro | Descripción |
|-----------|-------------|
| `sort_by` | Campo por el que ordenar: `created_at`, que es el valor por defecto, o `type` para ordenar por el tipo del evento. |
| `order` | `asc` o `desc`. Por defecto `desc`. Cualquier otro valor se trata como `desc`. |
| `page` | Página a devolver. Por defecto `1`. |
| `per_page` | Elementos por página. Por defecto `10` y como máximo `100`. |
| `not_impersonated` | Con cualquier valor presente, deja fuera los eventos generados mientras un administrador estaba [impersonando al usuario](/es/platform/customers/users.html#impersonado). |

Los eventos llegan bajo la raíz `events` y la paginación en `meta`:

```json
{
  "events": [
    {
      "title": "Inicio de sesión",
      "description": "Reino: Banca Personal",
      "created_at": "2026-05-12T14:03:21.000+00:00"
    }
  ],
  "meta": {
    "total_entries": 128,
    "per_page": 10,
    "current_page": 1,
    "total_pages": 13
  }
}
```

`title` es el nombre del tipo de evento y `description` el reino donde ocurrió. Los dos llegan como textos ya traducidos, listos para mostrar. El catálogo completo de tipos está en [Tipos de evento](/es/platform/customers/events.html#tipos-de-evento).

:::warning Atención
La respuesta no incluye un identificador del evento ni su tipo técnico: sólo `title`, `description` y `created_at`. Como `title` es un texto traducido, no sirve para distinguir eventos en tu código, y los eventos de tipos propios lo traen vacío porque no tienen etiqueta. Usa este endpoint para mostrar un historial, no para tomar decisiones sobre el tipo de evento.
:::

## Respuestas de originación

### Consultar una respuesta

`GET ACCOUNT_URL/api/customers/realms/{realm_uid}/submissions/{uuid}`

Devuelve la [respuesta de originación](/es/platform/customers/origination.html#gestion-de-respuestas) identificada por `uuid`, siempre que pertenezca al usuario de la sesión. Si el identificador no existe o la respuesta es de otro usuario, el endpoint devuelve `404`.

El cuerpo trae los siguientes atributos:

| Atributo | Descripción |
|----------|-------------|
| `id`, `uuid` | Identificadores de la respuesta. |
| `status` | `not_started`, `pending`, `completed` o `canceled`. |
| `progress` | Porcentaje de tareas completadas, como texto. Por ejemplo, `25%`. |
| `due` | Texto ya armado con la fecha límite y su estado, listo para mostrar. |
| `due_deadline_at` | Fecha y hora límite sin formatear. Es `null` cuando la originación no tiene plazo configurado o cuando la respuesta no ha comenzado, está completada o está cancelada. |
| `due_label` | Etiqueta que reemplaza a la fecha cuando no hay fecha límite, como `No iniciado` o `--`. Es `null` cuando `due_deadline_at` trae un valor. |
| `due_status_label` | Etiqueta del estado del plazo entre paréntesis, como `(A tiempo)`, `(Vence pronto)` o `(Vencido)`. Es `null` cuando la respuesta no está pendiente. |
| `due_extension_days` | Días de extensión otorgados al plazo, o `null` si la originación no tiene plazo configurado. |
| `created_at`, `updated_at`, `started_at` | Fechas de creación, de última actualización y de inicio de la respuesta. |
| `origination_name`, `origination_uuid` | Nombre e identificador de la originación. |
| `cancellation_reason` | Razón de cancelación ingresada al cancelar la respuesta, o `null`. |
| `user` | Usuario dueño de la respuesta, con `id`, `uuid`, `name`, `first_name` y `last_name`. |
| `assignee` | Administrador o grupo asignado, o `null` si la respuesta no está asignada. |
| `tasks` | Arreglo con las respuestas a las tareas de la originación. |

:::tip Tip
`due`, `due_label` y `due_status_label` son textos pensados para mostrarse tal cual. Para tomar decisiones en tu código usa `status` y `due_deadline_at`.
:::

#### El objeto assignee

Hasta la versión 10.1, `assignee` era un objeto plano con los datos del administrador asignado: `id`, `uuid`, `name`, `first_name` y `last_name`. Desde 10.2 una respuesta puede quedar asignada a un grupo completo o a un administrador elegido dentro de un grupo, como se describe en [Asignar respuesta](/es/platform/customers/origination.html#asignar-respuesta), así que `assignee` incorpora el atributo `type` y el resto de su contenido cambia según ese valor:

| `type` | Atributos |
|--------|-----------|
| `group` | `id` y `name` del grupo asignado, y `label` con el nombre del grupo. No trae `uuid`, `first_name` ni `last_name`. |
| `user_in_group` | `id`, `uuid`, `name`, `first_name` y `last_name` del administrador, `group_id` y `group_name` del grupo desde el que fue elegido, y `label` con el formato `Nombre del administrador (Nombre del grupo)`. |
| `user` | `id`, `uuid`, `name`, `first_name` y `last_name` del administrador, y `label` con su nombre. |

```json
{
  "assignee": {
    "type": "group",
    "id": 14,
    "name": "Ejecutivos",
    "label": "Ejecutivos"
  }
}
```

:::warning Atención
Si tu aplicación lee `assignee.uuid` sin revisar `type`, deja de funcionar cuando la respuesta está asignada a un grupo: esa variante no incluye `uuid` y su `id` corresponde al grupo, no a un administrador. Revisa siempre `assignee.type` antes de leer el resto de los atributos y usa `assignee.label` cuando solo necesites mostrar el asignado.
:::

#### Las respuestas a las tareas

Cada elemento de `tasks` trae `task`, con el `uid`, `name`, `type` y `step_name` de la tarea; `status`, con `not_started`, `pending` o `completed`; `user_id`, y los datos del asignado de esa tarea en `assignee_id`, `assignee_group_id`, `assignee_context_group_id` y `assignee_label`. Las tareas de input agregan `fields` con las respuestas del usuario y las de revisión pendiente agregan `content`. Las respuestas a tareas cuya tarea ya no existe en la originación no se incluyen en el arreglo.

:::warning Atención
Las tareas de revisión pendiente dejaron de entregar la clave booleana `completed` en 10.2. Para saber si la revisión terminó, compara `status` con `completed`.
:::

## Verificación de código OTP

`POST ACCOUNT_URL/api/customers/realms/{realm_uid}/verify_otp_code`

Verifica el código de un solo uso del [Soft login](/es/platform/customers/settings.html#soft-login). Es el único endpoint de la API de Customers que no requiere una sesión iniciada. El cuerpo lleva `identifier`, con el nombre de usuario, y `code`, con el código recibido.

| Código | Significado |
|--------|-------------|
| `200` | El código es válido. El cuerpo llega como un objeto vacío. |
| `409` | El código no es válido o ya expiró. |
| `429` | Se superó el máximo de cinco intentos fallidos. Nuevo en 10.2. |

Tanto el `409` como el `429` traen el arreglo `errors` con un texto listo para mostrar:

```json
{
  "errors": ["Has excedido el número máximo de intentos."]
}
```

:::warning Atención
Después de cinco intentos fallidos, el endpoint responde `429` incluso cuando el código enviado es el correcto, porque la validación corta en el conteo de intentos antes de comparar el código. Trata el `429` como un caso distinto del `409`: el usuario no puede seguir reintentando y la única salida es pedir un código nuevo, que reinicia el contador.
:::

El código deja de ser válido cuando pasa el tiempo definido en **Validez de duración de OTP (en minutos)** del reino, cinco minutos por defecto. Revisa [Soft login](/es/platform/customers/settings.html#soft-login) para el detalle de esa configuración.

## Adjuntos de las respuestas

Las preguntas de tipo archivo de una originación reciben sus adjuntos por estos dos endpoints. Ambos requieren una sesión iniciada, trabajan siempre sobre los archivos del usuario de la sesión y no aparecen en la referencia interactiva de `ACCOUNT_URL/api/customers/docs`.

### Subir un archivo

`POST ACCOUNT_URL/api/customers/realms/{realm_uid}/private_upload/answer`

Envía una petición `multipart/form-data` con estos parámetros:

- `file`: el archivo a subir. Es obligatorio.
- `question_id`: identificador de la pregunta de tipo archivo a la que corresponde el adjunto. Es opcional.

Con `200`, el cuerpo describe el archivo guardado:

```json
{
  "id": 431,
  "uuid": "586e591c-1f07-4f6d-b886-a66fea953afe",
  "name": "comprobante.pdf",
  "size": 60548,
  "url": "/uploads/586e591c-1f07-4f6d-b886-a66fea953afe/original/comprobante.pdf"
}
```

El archivo queda guardado como privado y asociado al usuario de la sesión. Usa el `id` numérico como valor de la respuesta a la pregunta de tipo archivo y el `uuid` para eliminar el adjunto.

| Código | Significado |
|--------|-------------|
| `401` | No hay una sesión iniciada. |
| `404` | El `question_id` enviado no corresponde a ninguna pregunta de tipo archivo. |
| `422` | El archivo no pasó las validaciones. |

El cuerpo del `422` trae el arreglo `errors` con un texto por cada motivo de rechazo, prefijado con el nombre del archivo. Un archivo se rechaza cuando falta, cuando su extensión no está permitida en la plataforma, cuando su contenido no corresponde a la extensión declarada o cuando supera el tamaño máximo permitido en tu cuenta.

### Eliminar un archivo

`DELETE ACCOUNT_URL/api/customers/realms/{realm_uid}/private_upload/answer/{uuid}`

Elimina el adjunto identificado por `uuid`. Con `200` el cuerpo llega vacío.

| Código | Significado |
|--------|-------------|
| `401` | No hay una sesión iniciada. |
| `404` | No existe un adjunto con ese `uuid` entre los archivos del usuario de la sesión. |

:::warning Atención
La eliminación es inmediata y no se puede deshacer. Si el adjunto ya estaba asociado a la respuesta de una pregunta, esa respuesta queda sin archivo.
:::

## API de Zendesk

Con estos endpoints podrás obtener los tokens necesarios para una integración con Modyo y Zendesk.

El único requisito es tener una integración con Zendesk lista antes de usar estas APIs.

### Zendesk Token

`test.modyo.com/api/customers/realms/<realm_uid>/integrations/zendesk_token`

### Zendesk SSO URL

`test.modyo.com/api/customers/realms/<realm_uid>/integrations/zendesk_sso_url`

Asegurate de reemplazar el URL por el de tu sitio y `<realm_uid>` por el Identificador de tu Reino, ubicado en el listado de Reinos.

