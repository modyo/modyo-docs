---
search: true
title: API
meta:
  - name: description
    content: Modyo Customers contains a variety of APIs with which you can obtain information about Realms, notifications, and users.
version: 9.2
---

# {{ $frontmatter.title }}

{{ $frontmatter.meta[0].content }}

## Zendesk APIs

With these endpoints you will be able to obtain the tokens needed for an integration with Modyo and Zendesk.

The only requirement is to have a [Zendesk Integration](/en/platform/core/integrations/identity-providers.html) ready before using these APIs.

### Zendesk Token

`test.modyo.com/api/customers/realms/<realm_uid>/integrations/zendesk_token`.

### Zendesk SSO URL

`test.modyo.com/api/customers/realms/<realm_uid>/integrations/zendesk_sso_url`

Be sure to replace the URL with the URL of your site and `<realm_uid>` with the Identifier of your Realm, located in the Realms list. 
