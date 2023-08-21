---
search: true
---

# Architecture

In the current context of the digital era, web development has assumed a central role in the creation of software solutions. As modern web applications become more complex and scalable, it is imperative to adopt effective and efficient software architecture patterns. These patterns ensure the scalability, maintainability and efficiency of our solutions.

This guide aims to explore various software architecture patterns that shape the way we develop and understand web applications. From modular, component-oriented architecture, to more contemporary approaches, such as architecture based on micro frontends, microservices and Domain-Driven Design, we will address each of these patterns in detail. We'll look at their principles, advantages, disadvantages, and ideal usage scenarios. In addition, we will examine its implementation with Modyo.

Our goal is to provide a solid guide and reference resource for web developers, software architects, and all stakeholders looking to address the challenges of modern web development. We aim to make the most of software architecture patterns to build robust, scalable, and future-oriented applications.

:: :tip High Level Approach
This guide contains high-level patterns and is designed for software architects and technical leaders.

For a review of more specific programming patterns, we recommend the book [“Design Patterns: Elements of Reusable Object-Oriented Software”] (https://en.wikipedia.org/wiki/Design_Patterns) by Erich Gamma, Ralph Johnson, Richard Helm and John Vlissides.
:::

## Reference Architecture

Micro frontends are high-level user experience components, orchestrated by the Modyo platform. Micro frontends run directly from the end user's browser and interact through APIs with microservices. Each micro frontend and microservice is designed to represent a specific part of the business's functionality and are developed, tested, and deployed independently.

The following figure shows the Modyo reference architecture, where micro frontends are deployed within the Modyo Platform, while microservices are deployed decoupled within a separate container infrastructure.

<img src="/assets/img/infrastructure/reference_architecture.png" alt="Reference architecture" />

This architecture offers advantages compared to a monolithic approach. It allows each component to be updated and scaled independently, without affecting the rest of the system, leading to greater modularity, flexibility, maintainability and scalability in the architecture design.

In addition, the decoupled architecture based on micro frontends and microservices also allows for greater independence among development teams. Each team can focus on their specific service or component without worrying about the rest of the system. This makes collaboration easier and streamlines the development process.

To model micro frontends and microservices from a business perspective, Modyo recommends using the [Domain Driven Design (DDD)](/en/architecture/patterns/ddd) technique.


### Modyo Connect
Modyo reference architecture completely decouples the frontend from the backend, by establishing a delimited context for communication using APIs. While the frontend is completely managed by the platform, the backend requires a [separate implementation] (/en/architecture/patterns/bff). This implementation can be on existing APIs or on the [Modyo Connect] service (/en/connect).

Modyo Connect is an infrastructure service managed in a platform as a service (PaaS) mode. This service is managed by Modyo and is deployed in a secure environment in the Modyo business cloud.

:: :tip More info
For more information about Modyo Connect and its managed infrastructure components, see the [official documentation] (/en/connect).
:::


## Architectural Patterns

Architectural patterns are tried and tested solutions to common problems in software design and development. These patterns establish a structure and set of rules for organizing and relating the components of a system, making software development, maintainability, and scalability easier.

By using architectural patterns, developers can take advantage of established best practices and take a structured approach to building high-quality applications. These patterns address concerns such as the distribution of responsibilities, modularity, code reuse and data management, among other essential aspects of software development. By following these patterns, development teams can create robust, flexible, and easy to maintain systems.