---
search: true
---

# Microservice

Microservice architecture is both an organizational and technical approach to software development, in which software is composed of small independent services that interact through well-defined application programming interfaces (APIs). These services are provided by small, independent teams.

This architectural approach allows applications to be more scalable and to develop faster, encouraging innovation and shortening the time needed to launch new features to the market.

:::tip Microservices in AWS
The definitions in this guide were adapted from the [Amazon AWS](https://aws.amazon.com) website. For more information on how AWS can support the implementation of a microservices initiative, we recommend visiting their [official documentation](https://aws.amazon.com/microservices).
:::

### Monoliths vs Microservices

With monolithic architectures, all processes are tightly coupled and run as a single service. This means that if one process in an application experiences an increase in demand, the entire architecture must scale. Adding or enhancing features to a monolithic application becomes more complex as the code base grows. This complexity limits experimentation and makes it difficult to implement new ideas. Monolithic architectures increase the risk to application availability because many dependent and tightly coupled processes increase the impact of a process failure.

With a microservices architecture, an application is built with independent components that run each application process as a service. These services communicate through a well-defined interface using lightweight APIs. Services are built for business capabilities and each service performs a single function. Since they run independently, each service can be updated, deployed, and scaled to meet the demand for specific functions of an application.

#### Features

- **Autonomous:** Each component service in a microservices architecture can be developed, implemented, operated, and scaled without affecting the operation of other services. Services don't need to share any of their code or implementations with other services. Any communication between individual components occurs through well-defined APIs.
- **Specialized:** Each service is designed for a set of capabilities and focuses on solving a specific problem. If developers contribute more code to a service over time and the service becomes more complex, it can be broken down into smaller services.

#### Benefits

- **Agility:** Microservices encourage an organization of small, independent teams that take ownership of services. Teams operate in a small, well-understood context, and are empowered to work more independently and faster. This shortens development cycle times. You benefit significantly from the increase in organizational performance.
- **Flexible scaling:** Microservices allow each service to scale independently to meet the demand for the feature of the application it supports. This allows teams to adapt to infrastructure needs, accurately measure the cost of a feature, and maintain availability if a service experiences an increase in demand.
- **Easy deployment:** Microservices allow for continuous integration and delivery, making it easy to test new ideas and reverse them if something doesn't work. The low cost of errors allows for experimentation, makes it easier to update the code, and accelerates the time to market for new features.
- **Technological freedom:** Microservice architectures don't follow a “one-size-fits-all” approach. Teams have the freedom to choose the best tool to solve their specific problems. As a result, teams creating microservices can choose the best tool for each job.
- **Reusable code:** Dividing software into small, well-defined modules allows teams to use functions for different purposes. A service written for a certain function can be used as a building block for another feature. This allows an application to start up on its own, as developers can create new capabilities without having to write code from scratch.
- **Resiliency:** Service independence increases an application's resilience to errors. In a monolithic architecture, an error in a single component can cause an application-wide failure. With microservices, if there is a service-wide error, applications handle it by degrading functionality without blocking the entire application.

### How do you implement microservices with Modyo?

[Modyo Connect](/en/connect) allows the development and deployment of microservices in the cloud on its [container](/en/connect/components/infrastructure.md#conteiners) platform. To do this, you must have a [code repository](/en/connect/components/development.md#code-repository) and its [continuous integration](/en/connect/components/development.md#continuous-) processes active.

Microservices developed in Modyo Connect have the ability to scale horizontally by automatically increasing the number of instances when required and replacing those that present a problem. In addition, microservices can be deployed over multiple regions and availability zones to ensure resiliency to infrastructure failures.

#### General considerations

Here are some considerations to keep in mind when developing microservices on Modyo Connect.

- **Spring Boot:** Framework used for development
- **Modyo Commons Library:** Support library for common tasks such as error management, log records,
  authentication, etc.
- **Swagger:** Standard for the definition and publication of APIs in API Gateway
- **Code structure and style:** The use of the [Spring Boot] initializer (https://start.spring.io) is recommended
  or [Yeoman](https://yeoman.io/generators) to give a standard to the source code. It is also recommended to follow the
  code style recommended by [Google](https://google.github.io/styleguide/javaguide.html).

#### Use of databases

Microservices that require relational data persistence should have the following considerations:

- **Locks:** Avoid queries that in situations of high concurrency generate [locks](https://www.baeldung.com/jpa-pessimistic-locking) in the tables.
- **Efficiency:** Pay special attention to fetch only the required information from the database. In other cases, it will be better to perform [lazy loading](https://www.baeldung.com/hibernate-lazy-eager-loading) to avoid querying the database for each iteration within a loop.
- **Indexes:** Ensure that the indexes applied to the schema are effective. Use the ["explain"](https://dev.mysql.com/doc/refman/8.0/en/using-explain.html) command locally to verify their use.
- **Migrations and versioning:** Ensure the [versioning and automation](https://flywaydb.org) of tasks that operate on the data schema.
- **Connection pool:** Ensure a correct configuration of the [connection pool](https://www.baeldung.com/java-connection-pooling) and the correct dimensioning of the database engine, according to the expected concurrency and scalability.

#### Connection with external services

Microservices developed in Modyo Connect can be integrated with other systems, such as external APIs and Web Services. In these cases, the following considerations should be taken into account:

- **Connectivity:** Ensure that connectivity from AWS networks to service endpoints are defined and stable.
- **Security:** Ensure that the link to external services is established through a secure channel, by means of VPNs or [mTLS](https://www.cloudflare.com/learning/access-management/what-is-mutual-tls/).
- **Error handling:** Errors originating from external services must be properly handled at the microservice level to ensure a good user experience.
- **Timeouts and crashes:** External services with performance or connectivity issues can cause crashes in the user experience or excessive consumption of resources within the microservice. It is always recommended to define reasonable timeouts for each call.

#### Hexagonal Architecture
The hexagonal architecture, also known as the Ports and Adapters Architecture, is a software architecture pattern that focuses on separation of concerns (SoC) and on the independence of hardware and software in an application. This architecture focuses on the idea that applications should be structured in such a way that the core of business logic is at the center of the architecture, with the user interface and infrastructure layers located at the edge.

The hexagonal architecture is made up of three main layers:

- **Domain Layer:** Contains the business logic of the application and represents the core of the architecture. This layer is independent of the user interface and the infrastructure layer.
- **Infrastructure Adapter Layer:** Contains the adapters that connect the domain layer to the infrastructure layers. Adapters are responsible for transforming data between domain layer formats and infrastructure-specific formats (for example, databases, web services, etc.).
- **Infrastructure Layer: ** Contains the specific components of the infrastructure that are used in the application, such as databases, web services, file systems, etc.

The hexagonal architecture has several benefits, including:

- It allows the separation of concerns and the independence of hardware and software in an application.
- Simplifies the integration of new infrastructure components.
- It makes it easy to test and debug the application's business logic.
- It improves the modularity and reusability of the code.

Dynamic Framework microservices are developed using the principles of hexagonal architecture.


#### Other considerations

- **Heavy tasks:** It is also recommended to use background processing, via [messaging queues](../components/infrastructure.md#messaging-queues), for services that are slow or very sensitive to traffic fluctuations.
- **Task scheduling:** The use of [Quartz](https://www.baeldung.com/spring-quartz-schedule) is recommended for microservices that require scheduling of scheduled tasks.
- **Workflows and state machines:** The use of [state machines](https://www.baeldung.com/spring-state-machine) is recommended for the orchestration of complex processes. Workflow technologies can also be integrated into Spring Boot for this purpose.
- **Hexagon architecture:** A software design pattern that separates the business logic of an application from its external services, allowing for more flexible development, testing and maintenance focused on the application domain.
- **Modyo API**: We recommend using the Modyo platform's administrative API for common tasks, such as sending messages to users or integrating with managed content.



