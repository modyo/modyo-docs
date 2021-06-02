---
search: true
---

### OAuth2

In order to integrate a login with OAuth2 into Modyo, you'll need the following information from your identity provider:

- Name of the service
- Description of the service
- URL de autenticación: Authentication URL: OAuth2 Authentication Service URL
- Customer ID
- Key (secret)
- Scope: If your OAuth2 authentication service uses multiple spaces or environments to separate users and you want to use a specific one in this integration, you'll need to define it in this field.
- Campo para inicio de sesión: Login field: You can choose between using Modyo users' email, or their username. This option is useful if your OAuth2 authentication provider uses, for example, a numeric field and not an email as an identifier.
- Placeholder para el inicio de sesión: Placeholder for login: Text to be displayed in the id field as placeholder if the user has not filled in the field
- Usar SSL: Use SSL: Enable this option if your OAuth2 authentication service uses a secure socket layer (SSL: _Secure Sockets Layer_)
