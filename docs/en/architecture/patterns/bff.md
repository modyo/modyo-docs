---
search: true
---

# Backend for Frontend

The Backend for Frontend (BFF) architecture pattern is an approach that optimizes and adapts the backend of an application to specific user interface (UI) needs.

In a traditional architecture, the backend of an application usually manages multiple types of clients or interfaces, such as mobile applications, web and API services, which can complicate management, due to different requirements and workflows.

The BFF pattern solves this by adding a specific backend layer for each type of client or user interface. Each BFF acts as an intermediary between the frontend and the main backend, managing specific requests and responses for each customer. This personalizes the user experience and improves efficiency.

Advantages of the BFF model:

- **Adaptability:** It adapts to the needs of each customer and to visualization requirements, optimizing user experience.
- **Frontend independence:** Frontend and backend teams can work independently and make changes without affecting the other components.
- **Performance improvement:** Optimizes data queries and responses for each customer, thus improving application performance.
- **Ease of evolution:** Simplifies the evolution and maintenance of the application by separating responsibilities. Changes can be made to a user interface without affecting other parts of the system.


### Implementing BFF with Modyo

You can implement BFF in Modyo in two ways:
1. With APIs in [Modyo Connect] (/en/connect) to define lightweight microservices for integration with each customer's central systems, generating an API interface designed especially for the needs of the frontend. The APIs in Modyo Connect use the Amazon AWS [Amazon AWS] API Gateway technology (https://aws.amazon.com) and are integrated with [Single Sign On (SSO)] systems (/en/architecture/patterns/sso) for user authentication.
2. Using APIs provided by the customer or by third parties. The [micro frontends] (/en/architecture/patterns/micro-frontend) on the platform access these APIs directly, with or without authentication, as required.


:: :tip API decoupling
The Modyo architecture emphasizes that the frontend and backend layers are decoupled. In this way, the APIs are independent and can be deployed in different infrastructures, connecting via HTTP.
:::


