---
search: true
---

# Architecture

The development of complex and scalable web applications demands the use of effective software architecture patterns. These patterns are fundamental to ensure the scalability, maintainability, and efficiency of any modern software solution.

In this guide, we explore various architecture patterns, from modular component-oriented approaches to contemporary architectures based on micro frontends, microservices, and Domain-Driven Design (DDD). We will analyze the principles, advantages, disadvantages, ideal use scenarios, and the implementation of each pattern on the Modyo platform.

The objective is to offer a solid reference guide for architects and developers looking to build robust, scalable, and future-proof applications, making the most of these architectural patterns.

:::tip High-Level Approach
This guide contains high-level patterns and is designed for software architects and technical leaders.

For a more specific review of programming patterns, we recommend the book [“Design Patterns: Elements of Reusable Object-Oriented Software”](https://en.wikipedia.org/wiki/Design_Patterns) by Erich Gamma, Ralph Johnson, Richard Helm, and John Vlissides.
:::

## Reference Architecture

Micro frontends are high-level user experience components, orchestrated by the Modyo platform. Micro frontends run directly in the end user's browser and interact with microservices through APIs. Each micro frontend and microservice is designed to represent a specific part of the business functionality and are developed, tested, and deployed independently.

The following figure shows the Modyo reference architecture, in which micro frontends are deployed within the Modyo Platform, while microservices are deployed in a separate infrastructure, exposing their functionality through APIs.

<img src="/assets/img/infrastructure/reference_architecture.png" alt="Reference architecture" />

This architecture offers key advantages over a monolithic approach, as it allows each component to be updated and scaled independently without affecting the rest of the system. This provides greater modularity, flexibility, maintainability, and scalability.

In addition, this decoupled architecture fosters greater independence among development teams. Each team can focus on their specific service or component without worrying about the rest of the system. This facilitates collaboration and streamlines the development process.

To model micro frontends and microservices from a business perspective, Modyo recommends using the [Domain-Driven Design (DDD)](/en/architecture/patterns/ddd) methodology.


### Modyo Connect
Modyo's reference architecture completely decouples the frontend from the backend by establishing a delimited context for communication through APIs. While the frontend is fully managed by the platform, the backend requires a [separate implementation](/en/architecture/patterns/bff). This implementation can be on existing APIs or on the [Modyo Connect](/en/connect) service.

Modyo Connect is an infrastructure service managed in a platform as a service (PaaS) modality. This service is managed by Modyo and is deployed in a secure environment in the Modyo business cloud.

:::tip More information
For more information about Modyo Connect and its managed infrastructure components, see the [official documentation](/en/connect).
:::


## Architectural Patterns

Architectural patterns are proven and recommended solutions to common problems in software design and development. These patterns establish a structure and a set of rules to organize and relate the components of a system, which facilitates the development, maintainability, and scalability of the software.

By using architectural patterns, developers can take advantage of established best practices and adopt a structured approach to building high-quality applications. These patterns address concerns such as the distribution of responsibilities, modularity, code reuse, and data management, among other essential aspects of software development. By following these patterns, development teams can create robust, flexible, and easy-to-maintain systems.
