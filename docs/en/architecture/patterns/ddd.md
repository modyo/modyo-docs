---
search: false
---

# Domain-Driven Design (DDD)

Domain-Driven Design (DDD) is a software development methodology that emphasizes understanding the business domain and modeling the software directly from it. The concepts and structures of the business domain are reflected in the software design.

Advantages of DDD:

- **Improved communication**: Encourages a ubiquitous language among developers, stakeholders, and users, improving project communication and understanding.
- **Focus on the business domain**: Ensures that the software aligns with the needs and processes of the business.
- **High-quality software design**: Promotes SOLID principles, resulting in more maintainable and adaptable software.

Disadvantages of DDD:

- **Complexity**: Its implementation can be complex and demand considerable time and effort, making it less suitable for simple applications or teams with little experience in software design.
- **Domain knowledge**: Requires developers to acquire a deep understanding of the business domain, which can be a challenge.
- **Limited applicability**: It is most useful in complex business applications. For simple business logic, the overhead of DDD might not justify its benefits.

DDD is a valuable tool for developing high-quality software aligned with business needs. However, it is crucial to evaluate whether it is the right approach for each specific situation.

### DDD applied to micro frontends and microservices

DDD can be applied to both micro frontends and microservices to maintain focus on the business domain and ensure the alignment of systems with business needs and processes.

#### Micro frontends
In micro frontends, DDD is applied by designing each micro frontend to reflect a specific business subdomain. For example, in an e-commerce site, you could have a micro frontend for the shopping cart, another for the product list, and one more for the payment process. Each micro frontend would be in charge of a specific aspect of the domain and would be developed according to its needs and rules.

#### Microservices
In microservices, the application of DDD is similar. Each microservice must represent a _bounded context_, a boundary where a particular domain model is consistent. Within this context, the models and language must be coherent. Each microservice must have its own domain model and interact with other microservices through well-defined interfaces.

In both cases, applying DDD involves dividing the system into smaller components (micro frontends or microservices). Each component focuses on a particular aspect of the business domain and is designed considering its specific needs and rules, contributing to more coherent, scalable, and easy-to-maintain systems.


### DDD implementation with Modyo
The implementation of DDD with Modyo begins with understanding the business and identifying its domains and subdomains. This allows for significant decisions to be made, such as:
- Separation into independent Modyo organizations.
- Separation of sites or web applications, with different users and administration roles.
- Separation of content spaces, with different users and administration roles.
- Definition of the scope of the widgets to be developed as [micro frontends](/en/architecture/patterns/micro-frontend), seeking unification.

The objective is to group elements with mutual dependencies and separate those without them, creating delimited contexts where the user resolves complete business operations with a minimum exchange of contexts.

DDD is a valuable architectural technique for defining the structure of complex initiatives, being especially useful when working with Modyo's reference architecture.
