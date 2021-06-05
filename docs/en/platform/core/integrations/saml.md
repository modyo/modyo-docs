---
search: true
---

### SAML

In order to integrate a login with SAML in Modyo, you will need the following information from your identity provider:

- Service name
- Issuer
- URL of the identity provider service
- Parameters of the identity service provider URL
- Identity provider certificate
- Signing the identity provider's certificate
- Format of the name identification
- Service callback URL: By default this URL is `account_url/admin/auth/saml/callback`
- Logo: As in LDAP, this image will be displayed as the service logo next to the service name in the login form.