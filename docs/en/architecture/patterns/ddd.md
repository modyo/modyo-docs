---
search: false
---

# Domain Driven Design

Domain-Driven Design (DDD) is an approach to software development that places a strong emphasis on understanding the business domain and modeling the software according to that domain. At DDD, the concepts and structures of the business domain are directly reflected in software design.

Advantages of the DDD:

- **Improved Communication:** DDD promotes the use of a common language among developers, stakeholders and users, called “ubiquitous language”. This can improve communication and understanding between everyone involved in a project.
- **Business Domain Focus:** By focusing on the business domain, DDD helps ensure that software is closely aligned with business needs and processes.
- **High Quality Software Design:** DDD promotes strong software design principles, which can lead to more maintainable and adaptable software.

Disadvantages of the DDD:

- **Complexity:** DDD can be complex and can require considerable time and effort to implement correctly. It may not be suitable for simpler applications or for teams with less experience in software design.
- **Requires Domain Knowledge:** To effectively use DDD, developers need to have or acquire a good understanding of the business domain, which can be a challenge in some contexts.
- **Not Suitable for All Applications: ** DDD is more useful in complex business applications. In applications with simple business logic, DDD overhead may not justify the benefits.

Overall, DDD can be a valuable tool for developing high-quality software that aligns closely with a business's needs, but it's important to consider carefully whether it's the right approach for your particular situation.

### DDD applied to Micro Frontend and Microservices

Domain-Driven Design (DDD) can be applied to both micro frontends and microservices to maintain focus on the business domain and ensure that the systems developed are aligned with business needs and processes.

#### Micro Frontends
In the context of micro frontends, you can apply DDD when designing each micro frontend to reflect a specific subdomain of the business domain. For example, if you're building an e-commerce website, you could have a micro frontend for the shopping cart, another for the product list, and another for the checkout process. Each of these micro frontends would be responsible for a specific aspect of the business domain and would be developed according to the needs and rules of that subdomain.

#### Microservices
With microservices, DDD is applied in a similar way. Each microservice should represent a “bounded context”, which is a DDD term that refers to a boundary within which a particular domain model is consistent. Within this limited context, models and language must be coherent. Each microservice must have its own domain model and must interact with other microservices through well-defined interfaces.


Applying DDD in both contexts involves dividing the system into smaller components (whether micro frontends or microservices) that focus on a specific aspect of the business domain, and designing each component according to the needs and rules of that domain. This can help create more consistent, scalable, and maintainable systems.

### How do you implement the DDD with Modyo?
There are several ways to implement DDD with Modyo, but the most common one stems from the understanding of the business on which you want to implement the solution. Once the different business areas (domain) are identified and how they are divided (sub-domains), relevant decisions can be made, such as:
- Separation into different independent Modyo organizations
- Separation of multiple Web sites or applications, with different users and administration roles
- Separation of content spaces, with different users and administrative roles
- Scope of the Widgets that will be developed as [micro frontends] (/es/architecture/patterns/micro-frontend), always seeking to unify 

Applying the above criteria, what is sought is that things that are modified together, are structured together, while things that do not depend on each other, are implemented separately. In this way, delimited contexts are created within the implementation, where a user solves complete business operations with as little context exchange as possible.

The DDD is a great architectural technique to help define the structure of complex initiatives, and it is especially useful when working on the Modyo reference architecture.
