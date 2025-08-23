---
search: true
---

# Secrets Management

Modyo Connect allows for the secure management of secrets for sensitive information in [microservices](/en/architecture/patterns/microservice.html) using [AWS Secrets Manager](https://aws.amazon.com/secrets-manager). This service generates a centralized and secure store of parameters, preventing them from being stored in the code or as environment variables (e.g., database credentials, API access tokens, external service credentials).

Additionally, there is secret management in Modyo's [GitHub Enterprise](https://github.com/enterprise) repository itself, used internally to share access token details with [GitHub Actions](https://github.com/features/actions) continuous integration scripts. If a secret needs to be incorporated into the GitHub Action process, it can be requested via an activation ticket.

## Activation Steps

To request the configuration of a new secret, a requirement ticket must be created in the [Modyo Support Center](https://support.modyo.com) stating:

- Name of the secret.
- Store where it should be created (GitHub or AWS).
- Secure method for delivering the secret's value.

:::danger Confidentiality of secrets
Modyo does not recommend attaching the values of the secrets in the activation ticket. A secure communication channel with the client must be established to ensure the confidentiality of the values to be configured (e.g., encrypted email).
:::