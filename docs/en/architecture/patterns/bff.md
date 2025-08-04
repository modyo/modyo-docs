---
search: true
---

# Backend for Frontend (BFF)

The Backend for Frontend (BFF) pattern is an architectural approach that optimizes and adapts an application's backend to the specific needs of its user interfaces (UI).

In a traditional architecture, a single backend usually handles multiple types of clients (mobile, web, APIs), which can complicate management due to their different requirements and workflows.

The BFF pattern solves this by adding a specific backend layer for each type of client or user interface. Each BFF acts as an intermediary between the frontend and the main backend, managing specific requests and responses for each client, which personalizes the user experience and improves efficiency.

Advantages of the BFF pattern:

- **Adaptability**: It adapts to the specific needs of each client and optimizes the user experience.
- **Frontend independence**: Allows frontend and backend teams to work independently, making changes without affecting other components.
- **Performance improvement**: Optimizes data queries and responses for each client, improving application performance.
- **Ease of evolution**: Simplifies the evolution and maintenance of the application by separating responsibilities, allowing changes in a user interface without affecting other parts of the system.


### BFF Implementation with Modyo

You can implement the BFF pattern in Modyo in two ways:
1. **APIs in Modyo Connect**: Defines lightweight integration microservices with central systems, generating an API interface designed for the needs of the frontend. The APIs in Modyo Connect use the Amazon AWS [Amazon AWS](https://aws.amazon.com) API Gateway technology and are integrated with [Single Sign On (SSO)](/en/architecture/patterns/sso) systems for user authentication.
2. **External APIs**: Uses APIs provided by the client or third parties. The [micro frontends](/en/architecture/patterns/micro-frontend) on the platform access these APIs directly, with or without authentication, as required.


:::tip API Decoupling
Modyo's architecture emphasizes the decoupling between the frontend and backend layers. In this way, the APIs are independent and can be deployed in different infrastructures, connecting via HTTP.
:::


