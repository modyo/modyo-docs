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
- Signature of the identity provider certificate
- Name identification format
- URL de callback del servicio: Service callback URL: By default this URL is `account_url/admin/auth/saml/callback`
- Logo: As in LDAP, this image will be displayed as a service logo next to the service name in the login form.