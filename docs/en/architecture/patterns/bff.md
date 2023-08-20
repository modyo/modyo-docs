---
search: true
---

# Backend for Frontend

The “Backend for Frontend” (BFF) architecture pattern is an architectural approach used to optimize and adapt the backend of an application to the specific needs of its customers or front-end user interfaces (UI).

In a traditional architecture, the backend of an application is usually responsible for handling multiple types of clients or user interfaces, such as mobile applications, web applications, API services, and others. This can lead to complications, as different customers may have different requirements, data needs, capabilities, and workflows.

The BFF pattern addresses this problem by introducing an additional backend layer specific to each type of client or user interface. Instead of having a single backend for all customers, different BFFs are created that act as intermediaries between the frontend and the backend's core services. Each BFF is responsible for orchestrating and managing the specific requests and responses of the corresponding customer. This allows the backend to be adapted to the particular needs of each user interface, providing an optimal and efficient experience.

Benefits of the Backend for Frontend pattern:

- **Adaptability:** It allows you to adapt the logic and capabilities of the backend to each client or user interface, thus optimizing the user experience.
- **Frontend independence:** It allows frontend and backend teams to work more independently, as they can evolve and make changes to their logic without affecting the other components.
- **Performance improvement:** By having a specific backend for each user interface, data queries and responses can be optimized to meet the particular needs of each customer, thus improving the overall performance of the application.
- **Facilitates evolution:** By separating responsibilities between the backend and the BFFs, the evolution and maintenance of the application is simplified, since changes to a specific user interface can be made without affecting other parts of the system.

The BFF pattern is widely used in the development of web and mobile applications, as it allows a clear separation between the frontend and backend layers. It aims to abstract the backend layer into a specialized interface for each specific type of frontend. Following the principle of single responsibility, the generated backend is responsible for handling requests and providing specific answers for each frontend, allowing greater specialization and adaptation to visualization needs.


### How do you implement BFF with Modyo?

Within Modyo, the BFF pattern can be implemented in two ways. The first of these is through the use of APIs deployed within [Modyo Connect](/en/connect) in which lightweight microservices can be defined to integrate with each customer's core systems or services, generating an API interface designed especially for the needs of the frontend. The APIs deployed in Modyo Connect use the [Amazon AWS](https://aws.amazon.com) API Gateway technology and are integrated with [Single Sign On (SSO)](/en/architecture/patterns/sso) systems in order to ensure user authentication in cases where private data is transferred over them.

The second way to implement BFF on Modyo is to use APIs provided by the customer, or by third parties. In this way, the [micro frontends](/en/architecture/patterns/micro-frontend) deployed on the platform, will directly access the APIs hosted in the client's (or third party) infrastructure, using or not using an authentication system, as required in each case.

:::tip API decoupling
The Modyo reference architecture places special emphasis on decoupling the frontend and backend layers. In this way, the APIs are independent of defining the way in which they will be deployed, and may be in clouds or infrastructures that are totally different from that of the platform. The protocol that unites communication between Modyo, the APIs and the end user is HTTP.
:::


