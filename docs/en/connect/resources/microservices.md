---
search: true
---

# Microservices

Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate through well-defined APIs. The owners of these services are small independent teams.

Microservice architectures make applications easier to scale and faster to develop. This enables innovation and speeds time to market for new features.


:::tip Microservices in AWS
The definitions in this guide were adapted from the [Amazon AWS](https://aws.amazon.com) website. For more information on how AWS can support the implementation of a microservices initiative, we recommend visiting their [official documentation](https://aws.amazon.com/microservices).
:::

### Monoliths vs Microservices
With monolithic architectures, all processes are tightly coupled and run as a single service. This means that if one process in an application experiences an increase in demand, the entire architecture must scale. Adding or enhancing features to a monolithic application becomes more complex as the code base grows. This complexity limits experimentation and makes it difficult to implement new ideas. Monolithic architectures increase the risk to application availability because many dependent and tightly coupled processes increase the impact of a process failure.

With a microservices architecture, an application is built with independent components that run each application process as a service. These services communicate through a well-defined interface using lightweight APIs. Services are built for business capabilities and each service performs a single function. Because they run independently, each service can be updated, deployed and scaled to meet an application's demand for specific functions.

## Features

### Self-employed
Each component service in a microservices architecture can be developed, deployed, operated and scaled without affecting the operation of other services. Services do not need to share any of their code or implementations with other services. Any communication between individual components occurs through well-defined APIs.

### Specialized
Each service is designed for a set of capabilities and focuses on solving a specific problem. If developers contribute more code to a service over time and the service becomes more complex, it can be broken down into smaller services.

## Benefits

### Agility
Microservices foster an organization of small, independent teams that take ownership of services. Teams operate in a small, well-understood context and are empowered to work more independently and faster. This shortens development cycle times. You benefit significantly from the increased performance of the organization.

### Flexible scaling
Microservices allow each service to scale independently to meet the demand of the application feature it supports. This allows teams to match infrastructure needs, accurately measure the cost of a feature, and maintain availability if a service experiences an increase in demand.

### Simple implementation
Microservices enable continuous integration and delivery, making it easy to test new ideas and revert if something doesn't work. The low cost of bugs allows for experimentation, makes it easier to update code, and speeds time to market for new features.

### Technological freedom
Microservices architectures do not follow a "one design fits all" approach. Teams have the freedom to choose the best tool to solve their specific problems. As a result, teams building microservices can choose the best tool for each job.

### Reusable code
The division of software into small, well-defined modules allows teams to use functions for different purposes. A service written for a certain function can be used as a building block for another feature. This allows an application to stand on its own, as developers can create new capabilities without having to write code from scratch.

### Resistance
Service independence increases an application's resistance to errors. In a monolithic architecture, an error in a single component can cause an error in the entire application. With microservices, if there is an error in the entire service, applications handle it by degrading functionality without blocking the entire application.


## Development
Modyo Connect enables the development and deployment of microservices in the cloud on its [containers](../components/infrastructure.md#containers) platform. To do this, you must have a [code repository](../components/development.md#code-repository) and its [continuous integration](../components/development.md#continuous-integration) processes active.

Microservices developed in Modyo Connect have the ability to scale horizontally by automatically increasing the number of instances when required and replacing those that present a problem. In addition, microservices can be deployed over multiple regions and availability zones to ensure resiliency to infrastructure failures.

### General considerations
Here are some considerations to keep in mind when developing microservices on Modyo Connect.

- **Spring Boot:** Framework used for development
- **Commons Library:** Support library for common tasks such as error handling, log records, authentication, etc.
- **Swagger:** Standard for the definition and publication of APIs in API Gateway
- **Code structure and style:** It is recommended to use the [Spring Boot](https://start.spring.io) or [Yeoman](https://yeoman.io/generators) initializer to give a standard to the source code. It is also recommended to follow the code style recommended by [Google](https://google.github.io/styleguide/javaguide.html).

### Use of databases
Microservices that require relational persistence of data should have the following considerations: 
- **Locks:** Avoid queries that in situations of high concurrency generate [locks](https://www.baeldung.com/jpa-pessimistic-locking) in the tables.
- **Efficiency:** Pay special attention to fetch from the database only the required information. In other cases, it will be better to perform [lazy loading](https://www.baeldung.com/hibernate-lazy-eager-loading) to avoid re-query the database for each iteration within a loop.
- **Indexes:** Ensure that the indexes applied to the schema are effective. Use the ["explain"](https://dev.mysql.com/doc/refman/8.0/en/using-explain.html) command locally to verify their use.
- **Migrations and versioning:** Ensure the [versioning and automation](https://flywaydb.org) of tasks that operate on the data schema.
- **Connection pool:** Ensure a correct configuration of the [connection pool](https://www.baeldung.com/java-connection-pooling). Ensure also the correct dimensioning of the database engine, according to the expected concurrency and scalability.

### Connection with external services
Microservices developed in Modyo Connect can be integrated with other systems, such as external APIs and Web Services. In these cases, the following considerations should be taken into account:
- **Connectivity:** Ensure that connectivity from AWS networks to service endpoints are defined and stable.
- **Security:** Ensure that the link to external services is established through a secure channel, by means of VPNs or [mTLS](https://www.cloudflare.com/learning/access-management/what-is-mutual-tls/).
- **Error handling:** Errors originating from external services must be properly handled at the microservice level to ensure a good user experience.
- **Timeouts and blocking:** External services with performance or connectivity problems may cause blocking in the user experience or excessive consumption of resources within the microservice. It is always recommended to define reasonable timeouts in each call. 

### Other considerations
- **Heavy tasks:** It is also recommended to use background processing, via [messaging queues](../components/infrastructure.md#messaging-queues), for services that are slow or very sensitive to traffic fluctuations.
- **Task scheduling:** The use of [Quartz](https://www.baeldung.com/spring-quartz-schedule) is recommended for microservices that require scheduling of scheduled tasks.
- **Workflows and state machines:** The use of [state machines](https://www.baeldung.com/spring-state-machine) is recommended for the orchestration of complex processes. Workflow technologies can also be integrated into Spring Boot for this purpose.
- **Modyo API**: We recommend using the Modyo platform's administrative API for common tasks, such as sending messages to users or integrating with managed content.








