---
search: true
---

### OAuth2

In order to integrate a login with OAuth2 in Modyo, you will need the following information from your identity provider:

- Service name
- Service description
- Authentication URL: OAuth2 authentication service URL
- Customer ID
- Key (secret)
- Scope: If your OAuth2 authentication service uses multiple spaces or environments to separate users and you want to use a specific one in this integration, you must define it in this field.
- Field for login: You can choose between using the user's email or username. This option is useful if your OAuth2 authentication provider uses, for example, a numeric field and not an email as an identifier.
- Placeholder for login: Text that will be displayed in the identification field as a placeholder if the user has not filled in the field
- Use SSL: Enable this option if your OAuth2 authentication service uses a secure sockets layer (SSL: _Secure Sockets Layer_)
