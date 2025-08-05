---
search: true
---

# Backend for Frontend (BFF)

The Backend for Frontend (BFF) pattern is an architectural approach that optimizes and tailors an application's backend to the specific needs of its user interfaces (UIs).

In traditional architectures, a single backend typically serves multiple client types (mobile, web, APIs), which can complicate management due to their diverse requirements and workflows.

The BFF pattern addresses this by introducing a dedicated backend layer for each client type or UI. Each BFF acts as an intermediary between the frontend and the main backend, handling specific requests and responses for its client, thereby personalizing the user experience and enhancing efficiency.

Advantages of the BFF pattern:

- **Adaptability**: Tailors the backend to the unique needs of each client, optimizing the user experience.
- **Frontend independence**: Enables frontend and backend teams to work autonomously, making changes without impacting other components.
- **Performance improvement**: Optimizes data queries and responses for each client, leading to improved application performance.
- **Ease of evolution**: Simplifies application evolution and maintenance by separating responsibilities, allowing UI changes without affecting other system parts.


### BFF Implementation with Modyo

The BFF pattern can be implemented in Modyo through two primary methods:
1. **Modyo Connect APIs**: Utilize lightweight integration microservices within Modyo Connect to define an API interface specifically designed for frontend requirements. Modyo Connect APIs leverage Amazon AWS API Gateway technology and integrate with [Single Sign-On (SSO)](/en/architecture/patterns/sso) systems for user authentication.
2. **External APIs**: Directly access APIs provided by the client or third parties. [Micro frontends](/en/architecture/patterns/micro-frontend) on the Modyo platform can consume these APIs directly, with or without authentication, as needed.


:::tip API Decoupling
Modyo's architecture emphasizes a strong decoupling between the frontend and backend layers. This ensures that APIs are independent and can be deployed across different infrastructures, communicating via HTTP.
:::