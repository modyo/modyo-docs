---
search: true
---

# Microservice

The microservices architecture is a software development approach that divides an application into small, independent services, managed by autonomous teams and interacting through well-defined APIs.

This approach allows for more scalable applications and faster development, promoting innovation and reducing the time to market for new functionalities.

:::tip Microservices on AWS
We adapted the definitions of this guide from the [Amazon AWS](https://aws.amazon.com) website.

For more information on how AWS can support the implementation of a microservices initiative, we recommend visiting its [official documentation](https://aws.amazon.com/microservices).
:::

### Monoliths vs. microservices

In software architecture, monoliths and microservices are two main approaches, each with distinctive characteristics and benefits.

#### Monoliths
In monolithic architectures, all processes are closely associated and run as a single service. This implies that an increase in demand for a process requires scaling the entire architecture. As the codebase grows, adding or improving functionalities becomes more complex, which limits experimentation and makes it difficult to implement new ideas.

Monolithic architectures also increase the risk of application availability and the impact of errors, as the dependency between processes means that a failure in a single component can cause an application-wide error.

#### Microservices:
In a microservices architecture, an application is built with independent components, each running a process as a separate service. It is not necessary to share code or implementations between services; communication is done through lightweight and well-defined APIs.

Each service is designed to handle specific business capabilities, focusing on a single function or problem. Its independence allows each service to be updated, deployed, and scaled autonomously to meet the demand for specific functions. If a service becomes too complex, it can be divided into smaller services.

#### Benefits of microservices

- **Agility**: They foster small, independent teams that work faster and more efficiently in well-defined contexts, reducing development times and increasing organizational performance.
- **Flexible scalability**: Each service can be scaled independently to meet the demand for its specific functionality. This allows teams to adapt to infrastructure needs, accurately measure costs, and maintain availability during demand peaks.
- **Simple implementation**: They facilitate continuous integration and delivery, allowing new ideas to be tested and quickly reversed. The low cost of errors encourages experimentation, streamlines code updates, and accelerates the time to market for new functionalities.
- **Technological freedom**: Teams have the freedom to choose the best tool for each task or situation, without a "one-size-fits-all" approach.
- **Reusable code**: Dividing the software into small, well-defined modules allows for the reuse of functions for different purposes. A service developed for a specific function can be a basic component for another, facilitating the creation of new capabilities without writing code from scratch.
- **Resilience**: The independence of the service increases resistance to failures. An error in a service allows for the degradation of the application's functionality without affecting its entirety.

### Implementation of microservices with Modyo

[Modyo Connect](/en/connect) allows the development and deployment of microservices in the cloud on its [containers](/en/connect/components/infrastructure.md#containers) platform. To do this, a [code repository](/en/connect/components/development.md#code-repository) and active [continuous integration](/en/connect/components/development.md#continuous-integration) processes are required.

Microservices developed in Modyo Connect scale horizontally, allowing for the automatic increase of instances according to demand and the replacement of those with problems. In addition, they can be deployed in multiple regions and availability zones to ensure their resilience to infrastructure failures.

#### General considerations

Some important considerations when developing microservices in Modyo Connect:

- **Spring Boot**: Recommended framework for development.
- **Modyo Commons Library**: Support library for common tasks (error management, logs, authentication, etc.).
- **OpenAPI**: Standard for the definition and publication of APIs in the API Gateway.
- **Code structure and style**: It is recommended to use the [Spring Boot](https://start.spring.io) initializer or [Yeoman](https://yeoman.io/generators) to standardize the source code, and to follow the code style recommended by [Google](https://google.github.io/styleguide/javaguide.html).

#### Use of databases

Microservices with relational data persistence should consider the following guidelines:

- **Locks**: Avoid queries that generate [locks](https://www.baeldung.com/jpa-pessimistic-locking) on the database tables during high demand.
- **Efficiency**: Retrieve only the necessary information from the database. Consider using [lazy loading](https://www.baeldung.com/hibernate-lazy-eager-loading) to avoid unnecessary queries in loops.
- **Indexes**: Ensure the effectiveness of the indexes applied to the schema. Use the ["explain"](https://dev.mysql.com/doc/refman/8.0/en/using-explain.html) command locally to verify their use.
- **Migrations and versioning**: Ensure the [versioning and automation](https://flywaydb.org) of tasks on the data schema.
- **Connection pool**: Correctly configure the [connection pool](https://www.baeldung.com/java-connection-pooling) and properly size the database engine according to the expected concurrency and scalability.

#### Connection with external services

Microservices developed in Modyo Connect can be integrated with external systems (APIs and Web Services). Key considerations:

- **Connectivity**: Ensure that the connectivity from the AWS networks to the service endpoints is defined and stable.
- **Security**: Establish the link to external services through a secure channel (VPNs or [mTLS](https://www.cloudflare.com/learning/access-management/what-is-mutual-tls/)).
- **Error handling**: Properly manage errors originating from external services at the microservice level to ensure a satisfactory user experience.
- **Timeouts and locks**: Define reasonable timeouts in each call, aligned with those of the API Gateway, to avoid locks or excessive use of resources by external services with performance problems. It is suggested to use asynchronous invocations when response times are not predictable.

#### Hexagonal Architecture
The hexagonal architecture, also known as Ports and Adapters Architecture, is a software architecture pattern that focuses on the separation of responsibilities and the independence of hardware and software in an application.

It organizes the application with the business logic at the center, and the user interface and infrastructure layers at the periphery.

It is composed of three main layers:

- **Domain layer**: Contains the central business logic of the application, independent of the user interface and infrastructure.
- **Infrastructure adapters layer**: Contains adapters that connect the domain layer with the infrastructure, transforming data between domain formats and specific infrastructure formats (e.g., databases, web services).
- **Infrastructure layer**: Contains specific infrastructure components (databases, web services, file systems).

Benefits of the hexagonal architecture:

- Separation of responsibilities and independence of hardware and software.
- Simplifies the integration of new infrastructure components.
- Facilitates the testing and debugging of the business logic.
- Improves the modularity and reusability of the code.

The microservices of Dynamic Framework are developed following the principles of the hexagonal architecture.


#### Other considerations

- **Heavy tasks**: For slow services or those sensitive to traffic fluctuations, background processing through [messaging queues](/en/connect/components/infrastructure.html#messaging-queues) is recommended.
- **Task scheduling**: For microservices that require scheduling of programmed tasks, it is recommended to use [ShedLock](https://www.baeldung.com/shedlock-spring).
- **Workflows and state machine**: The use of [state machines](https://www.baeldung.com/spring-state-machine) is recommended for the orchestration of complex processes, and to integrate workflow technologies with Spring Boot.
- **Hexagonal architecture**: This software design pattern separates the business logic of an application from its external services, facilitating more flexible and domain-focused development, testing, and maintenance.
- **Modyo API**: It is recommended to use the administrative API of the Modyo platform for common tasks, such as sending messages to users or integrating with managed content.