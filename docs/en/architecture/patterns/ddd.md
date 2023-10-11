---
search: false
---

# Domain Driven Design

Domain-Driven Design (DDD) is a software development methodology that emphasizes understanding the business domain and models the software according to that domain. In DDD, the concepts and structures of the business domain are directly reflected in the design of the software.

Advantages of DDD:

- **Improved communication: ** Encourages the use of a common language called “ubiquitous language” among developers, stakeholders and users; which improves communication and understanding in the project.
- **Business domain focus: ** Ensures that the software adapts to business needs and processes.
- **High-quality software design: ** Promotes SOLID principles of software design, leading to more maintainable and adaptable software.

Disadvantages of DDD:

- **Complexity: ** It can be complex and require considerable time and effort to implement correctly. It may not be suitable for simpler applications or teams with less experience in software design.
- **Requires domain knowledge: ** To effectively use DDD, developers must have or acquire a good understanding of the business domain, which can be a challenge in some contexts.
- **Not suitable for all applications: ** It is most useful in complex business applications. In applications with simple business logic, DDD overhead may not justify the benefits.

The DDD can be a valuable tool for developing high-quality software that closely aligns with the needs of a business. However, it's important to carefully consider if it's the right approach for your specific situation.

### DDD applied to micro frontends and microservices

DDD can be applied to both micro frontends and microservices to maintain focus on the business domain and ensure that the systems developed align with business needs and processes.

#### Micro frontends
In the context of micro frontends, you can apply DDD when designing each micro frontend to reflect a specific subdomain of the business domain. For example, if you're building an e-commerce website, you can have a micro frontend for the shopping cart, another for the product list, and another for the checkout process. Each of these micro frontends would be responsible for a specific aspect of the business domain and would be developed according to the needs and rules of that subdomain.

#### Microservices
In the context of microservices, the application of DDD is similar to that of micro frontends. Each microservice must represent a _bounded context_, which refers to a boundary within which a particular domain model is consistent. Within this limited context, models and language must be coherent. Each microservice must have its own domain model and must interact with other microservices through well-defined interfaces.

In both cases, applying DDD means dividing the system into smaller components, either micro frontends or microservices. Each of these components focuses on a particular aspect of the business domain and is designed considering the specific needs and rules of that domain. This practice helps to develop systems that are more consistent, scalable and easy to maintain.


### DDD implementation with Modyo
There are several ways to implement DDD with Modyo, the most common starting with understanding the business in which you want to implement the solution. Once you have identified the different business areas (domain) and how they are divided (sub-domains), you can make significant decisions, such as:
- Separation into different Modyo organizations that are independent of each other.
- Separation of multiple Web sites or applications, with different users and administration roles.
- Separation of content spaces, with different users and administration roles.
- Scope of the widgets that will be developed as [micro frontends] (/es/architecture/patterns/micro-frontend), always seeking to unify.

The objective of the above is to group the elements that need to be modified together and to separate those that have no dependence on each other; creating delimited contexts within the implementation, where a user solves complete business operations with a minimum exchange of contexts.

The DDD is a valuable architectural technique to help define the structure of complex initiatives and is especially useful when working on the Modyo reference architecture.