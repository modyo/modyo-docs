---
search: true
---

# APIs de Customers

Modyo Customers contiene una variedad de APIs con la que podrás obtener la información de Reinos, las notificaciones, y sus usuarios.


## API de customers

Accede a la API de Customers para gestionar reinos y usuarios a través de la URL `ACCOUNT_URL/api/customers/docs`. Ejemplos de endpoints:

- **Notificaciones**: `ACCOUNT_URL/api/customers/realms/{realm_uid}/notifications`
- **Información de usuarios**: `ACCOUNT_URL/api/customers/realms/{realm_uid}/me`
- **Eventos**: `ACCOUNT_URL/api/customers/realms/{realm_uid}/events`


### Tokens delegados

Al habilitar la opción de [**Mostrar información de delegación**](/es/platform/core/integrations/identity-providers.html) en tus proveedores de identidad, al hacer uso de la API `account_url/api/customers/realms/{realm_uid}/me`, obtendrás un JSON adicionado con información de tokens delegados parecido a este:

Si habilitas la opción de [**Mostrar información de delegación**](/es/platform/core/integrations/identity-providers.html) en los proveedores de identidad, el endpoint `account_url/api/customers/realms/{realm_uid}/me` incluirá un JSON con información de tokens delegados:


``curl -X GET test.miModyo.com/api/customers/realms/miRealm/me``

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

## API de Zendesk

Con estos endpoints podrás obtener los tokens necesarios para una integración con Modyo y Zendesk.

El único requisito es tener una integración con Zendesk lista antes de usar estas APIs.

### Zendesk Token

`test.modyo.com/api/customers/realms/<realm_uid>/integrations/zendesk_token`

### Zendesk SSO URL

`test.modyo.com/api/customers/realms/<realm_uid>/integrations/zendesk_sso_url`

Asegurate de reemplazar el URL por el de tu sitio y `<realm_uid>` por el Identificador de tu Reino, ubicado en el listado de Reinos.

