---
search: true
---

# Architecture

In today's digital age, web development has taken a central role in creating software solutions. However, with the increasing complexity and scale of modern web applications, it is increasingly necessary to adopt effective and efficient software architecture patterns to ensure the scalability, maintainability, and effectiveness of our solutions.

This guide seeks to explore the various software architecture patterns that are shaping the way we develop and understand web applications. From modular, component-oriented architecture, to more contemporary approaches such as architecture based on micro frontends, microservices and Domain-Driven Design, we will address each of these patterns in detail, breaking down their principles, advantages, disadvantages and ideal use scenarios, in addition to addressing their implementation with Modyo.

The goal is to provide solid guidance and a reference resource for web developers, software architects, and all interested parties seeking to address the challenges of modern web development, and to take full advantage of software architecture patterns to build robust, scalable, and future-oriented applications.

:::tip High Level Approach
This guide contains high-level patterns and is intended for software architects and technical leaders. For a review of more specific programming patterns, we recommend the book [“Design Patterns: Elements of Reusable Object-Oriented Software”](https://en.wikipedia.org/wiki/Design_Patterns) by Erich Gamma, Ralph Johnson, Richard Helm and John Vlissides. 
:::

## Reference Architecture

Micro frontends are high-level user experience components, orchestrated by the Modyo platform and executed directly from the end user's browser from where they interact through APIs with microservices. Each micro frontend and microservice is designed to represent a specific part of the business's functionality and are developed, tested, and deployed independently.

The following figure shows the Modyo reference architecture, where micro frontends are deployed within the Modyo Platform, while microservices do so in a decoupled way within an independent container infrastructure.

<img src="/assets/img/infrastructure/reference_architecture.png" alt="Reference architecture" />

This architecture represents several advantages compared to a monolithic one, since it allows each component to be updated and scaled independently, without affecting the rest of the system. This results in greater modularity, flexibility, maintainability and scalability in the architecture design.

In addition, the decoupled architecture based on micro frontends and microservices also allows for greater independence between development teams, as each team can focus on its specific service or component without having to worry about the rest of the system. This makes collaboration easier and accelerates the development process.

To model micro frontends and microservices from a business perspective, Modyo recommends using the [Domain Driven Design (DDD)](/en/architecture/patterns/ddd) technique.


### Modyo Connect
The Modyo reference architecture completely decouples the frontend from the backend, defining a delimited context for communication, using APIs. While the frontend is completely managed by the platform, the backend requires a [separate implementation](/en/architecture/patterns/bff) which can be on top of existing APIs, or on the [Modyo Connect](/en/connect) service.

Modyo Connect is a managed infrastructure service in platform as a service (PaaS) mode, managed by Modyo and deployed within a secure environment in the Modyo business cloud.

:::tip More info
For more information about Modyo Connect and its managed infrastructure components, please refer to their [official documentation](“/en/connect”).
:::


## Architectural Patterns

Architecture patterns are tested and recommended solutions to common problems in software design and development. These patterns establish a structure and set of rules for organizing and relating the components of a system, which facilitates software development, maintainability, and scalability. By using architectural patterns, developers can take advantage of established best practices and obtain a structured approach to building high-quality applications. These patterns address concerns such as separation of responsibilities, modularity, code reuse, and data management, among other fundamental aspects in software development. By following these patterns, development teams can create systems that are robust, flexible, and easy to maintain.