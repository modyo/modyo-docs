---
search: true
title: API
meta:
  - name: description
    content: Modyo Customers contiene una variedad de APIs con la que podrás obtener la información de Reinos, las notificaciones, y sus usuarios.
version: 9.2
---

# {{ $frontmatter.title }}

{{ $frontmatter.meta[0].content }}

## APIs de Zendesk

Con estos endpoints podrás obtener los tokens necesarios para una integración con Modyo y Zendesk.

El único requisito es tener una [Integración con Zendesk](/es/platform/core/integrations/identity-providers.html) lista antes de usar estas APIs.

### Zendesk Token

`test.modyo.com/api/customers/realms/<realm_uid>/integrations/zendesk_token`

### Zendesk SSO URL

`test.modyo.com/api/customers/realms/<realm_uid>/integrations/zendesk_sso_url`

Asegurate de reemplazar el URL por el de tu sitio y `<realm_uid>` por el Identificador de tu Reino, ubicado en el listado de Reinos. 
