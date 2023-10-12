---
search: true
---

# Microservice

Microservices architecture is an approach to software development that involves dividing an application into small, independent services that interact through defined APIs. These services are managed by small, independent teams.

This architectural approach allows applications to be more scalable and their development to be faster, promoting innovation and reducing the time needed to launch new features to the market.

:::tip Microservices on AWS
We adapted the definitions of this guide from the [Amazon AWS](https://aws.amazon.com) web.

For more information on how AWS can support the implementation of a microservices initiative, we recommend visiting its [official documentation](https://aws.amazon.com/microservices).
:::

### Monoliths vs. microservices

In software architecture, two main approaches face off: monoliths and microservices. Each has its own characteristics and benefits.

#### Monoliths
In monolithic architectures, all processes are closely associated and run as a single service. This means that if an application process experiences an increase in demand, the entire architecture must scale. In addition, as the code base grows, adding or improving the features of a monolithic application becomes more complex. This complexity limits experimentation and makes it difficult to implement new ideas.

Monolithic architectures also increase the risk of application availability and increase the impact of a process failure due to the dependency between processes. Because an error in a single component can cause an application-wide error.

#### Microservices:
In a microservices architecture, an application is built using separate components, each of which runs an application process as a separate service. There is no need to share code or implementations between services, and communication occurs through lightweight, well-defined APIs.

Each service is built to handle specific business capabilities and focuses on a single function or on solving a specific problem. Because of its independence, each service can be independently updated, deployed, and scaled to meet the demand for specific application functions. If developers contribute more code to a service and the service becomes more complex, it can be divided into smaller services.

#### Benefits of microservices

- **Agility:** They foster small, independent teams that can work faster and more efficiently in well-understood contexts. This reduces development times and increases the performance of the organization.
- **Flexible scalability:** They allow each service to scale independently to meet the demand for the feature of the application it supports. This allows teams to adapt to infrastructure needs, accurately measure the cost of a feature, and maintain availability if a service experiences an increase in demand.
- **Easy deployment: ** Microservices allow for continuous integration and delivery, making it easy to test new ideas and reverse them if something doesn't work. The low cost of errors allows for experimentation, makes it easier to update the code, and accelerates the time to market for new features.
- **Technological freedom: ** They don't follow a “one-size-fits-all” approach. Teams have the freedom to choose the best tool to solve each task or situation.
- **Reusable code: ** Dividing software into small, well-defined modules allows teams to use functions for different purposes. A service developed for a specific function can be used as a building block for another feature. This makes it easier to start an application, as developers can create new capabilities without having to write code from scratch.
- **Resiliency: ** Service independence increases resistance to errors. If there is an error in a service, applications can degrade functionality without affecting the entire application.

### Implementing microservices with Modyo

[Modyo Connect] (/en/connect) allows the development and deployment of microservices in the cloud on its [container] platform (/en/connect/components/infrastructure.md #contenedores). To do this, you must have a [code repository] (/en/connect/components/development.md #repositorio-de-codigo) and the [continuous integration] processes (/en/connect/components/development.md #integracion -continuous) active.

The microservices developed in Modyo Connect have the ability to scale horizontally, which means that you can automatically increase the number of instances when required and replace those that have some type of problem. In addition, you can deploy microservices in multiple regions and availability zones to ensure their resilience to infrastructure failures.

#### General considerations

Some important considerations when developing microservices on Modyo Connect are:

- **Spring Boot:** Framework used for development
- **Modyo Commons Library:** Support library for common tasks such as error management, log records,
  authentication, etc.
- **OpenAPI: ** Standard for defining and publishing APIs on the API Gateway
- **Code structure and style: ** We recommend using the [Spring Boot] initializer (https://start.spring.io)
  or [Yeoman] (https://yeoman.io/generators) to give a standard to the source code. We also recommend following the
  code style recommended by [Google](https://google.github.io/styleguide/javaguide.html).

#### Use of databases

Microservices that require relational data persistence should consider the following guidelines:

- **Blocks: ** Avoid queries that could generate [blocks] (https://www.baeldung.com/jpa-pessimistic-locking) in database tables during times of high demand.
- **Efficiency: ** Bring only the required information from the database. Sometimes it can be beneficial to use [lazy loading] (https://www.baeldung.com/hibernate-lazy-eager-loading) to avoid unnecessary database queries at each iteration within a loop.
- **Indexes:** Ensure that the indexes applied to the schema are effective. Use the ["explain"](https://dev.mysql.com/doc/refman/8.0/en/using-explain.html) command locally to verify their use.
- **Migrations and versioning:** Ensure the [versioning and automation](https://flywaydb.org) of tasks that operate on the data schema.
- **Connection pool: ** Ensure a correct configuration of the [connection pool] (https://www.baeldung.com/java-connection-pooling)y properly size the database engine, according to the expected concurrency and scalability.

#### Connection with external services

Microservices developed in Modyo Connect can be integrated with other systems, such as APIs and external Web Services. To do this, you must keep the following considerations in mind:

- **Connectivity:** Ensure that connectivity from AWS networks to service endpoints are defined and stable.
- **Security:** Ensure that the link to external services is established through a secure channel, by means of VPNs or [mTLS](https://www.cloudflare.com/learning/access-management/what-is-mutual-tls/).
- **Error Handling: ** Errors originating from external services must be managed appropriately at the microservice level to ensure a satisfactory user experience.
- **Timeouts and crashes: ** External services with performance or connectivity issues can cause blockages in the user experience or excessive use of resources within the microservice. We recommend defining reasonable timeouts for each call, aligned with those defined in the API Gateway. In addition, we suggest using asynchronous invocations when response times are not predictable.

#### Hexagonal Architecture
The hexagonal architecture, also known as Ports and Adapters Architecture, is a software architecture pattern that focuses on the separation of concerns (System on a Chip or SoC) and the independence of hardware and software in an application.

This architecture organizes the application so that the core of the business logic is in the center and the user interface and infrastructure layers are at the edge.

The hexagonal architecture is made up of three main layers:

- **Domain layer: ** It contains the business logic of the application and represents the core of the architecture. This layer is independent of the user interface and the infrastructure layer.
- **Infrastructure adapter layer: ** Contains the adapters that connect the domain layer to the infrastructure layers. Adapters are responsible for transforming data between domain layer formats and specific infrastructure formats, such as databases and web services.
- **Infrastructure layer: ** Contains the specific infrastructure components used in the application, such as databases, web services, and file systems.

Hexagonal architecture has several benefits, including:

- Allows the separation of concerns and the independence of hardware and software in an application.
- Simplifies the integration of new infrastructure components.
- Simplifies testing and debugging the application's business logic.
- Improves the modularity and reusability of the code.

Dynamic Framework microservices are developed following the principles of hexagonal architecture.


#### Other considerations

- **Heavy tasks: ** We recommend using background processing, using [messaging queues] (.. /components/infrastructure.md #colas -de-messaging), for services that are slow or sensitive to traffic fluctuations.
- **Task Scheduling: ** For services that require task scheduling, we recommend using [ShedLock] (https://www.baeldung.com/shedlock-spring) in microservices that require scheduling programmed tasks.
- **Workflows and state machine: ** The use of [state machines] (https://www.baeldung.com/spring-state-machine) is recommended for the orchestration of complex processes. As well as integrating workflow technologies with Spring Boot.
- **Hexagon Architecture: ** For more flexible, application domain-focused development, testing, and maintenance, this software design pattern separates an application's business logic from its external services.
- **Modyo API: ** We recommend using Modyo platform's administrative API for common tasks, such as sending messages to users or integrating with managed content.
