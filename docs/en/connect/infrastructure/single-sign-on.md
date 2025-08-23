---
search: true
---

# Single Sign On (SSO)

The Single Sign-On (SSO) service allows user authentication to be incorporated into development initiatives with Modyo Connect. Authenticated users can share their session between the Modyo platform and API Gateway calls, allowing access to protected resources not publicly available on the Internet.

The Modyo Connect SSO service is implemented using [KeyCloak](https://www.keycloak.org), an open-source application sponsored by [Red Hat](https://www.redhat.com) that offers additional paid support. KeyCloak is deployed on containers in high-availability cluster mode, with the ability to scale. Modyo Connect provides access to the repository of the container image configured for KeyCloak, allowing control over user experience customizations and non-standard authentication flows.

## Activation Steps

Requests for SSO deployment on Modyo Connect are made through a ticket in the [Modyo Support Center](https://support.modyo.com). In the ticket, you can specify whether full application administration access or the creation of user realms with specific configurations will be required.

The activation of SSO on Modyo Connect requires the prior existence of a [database](databases.html) duly configured for the service.

:::warning KeyCloak customizations
User experience and authentication flow customizations in KeyCloak are the client's responsibility and are not included as part of the service. If professional services support is required in the implementation of an SSO initiative, the assigned account executive should be contacted.
:::

:::warning Shared Responsibility Model
Modyo is not responsible for customizations or vulnerabilities in the client's custom code. Some customizations may require modifications when updating the base KeyCloak software. It is the client's responsibility to make the adjustments in a timely manner to reduce the risks associated with the update process.
:::