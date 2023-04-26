---
search: true
---

# Architecture
Modyo Dynamic is based on a decoupled architecture of micro frontends and microservices built in a modular way and that can be deployed independently.

In this type of architecture, micro frontends are user experience components that run independently in the user's browser. Each micro frontend is designed to represent a specific part of the user interface and, like a microservice, can be developed, tested and deployed independently.

On the other hand, microservices are small independent applications that perform a single specific task or function. Each microservice runs autonomously and can communicate with other services through application programming interfaces (APIs) to provide more complex functionality.

The following figure shows the Modyo reference architecture, where the micro frontends are deployed within the Modyo Platform, while the microservices do so in a decoupled way within Modyo Connect (optional).

<img src="/assets/img/infrastructure/reference_architecture.png" alt="Partner Badge" style="margin-top: 40px;" />


The combination of micro frontends and microservices allows each service and component of experience to be developed and deployed independently, meaning that they can be upgraded and scaled independently without affecting the rest of the system. This results in greater modularity, flexibility and scalability in the design of the architecture.

In addition, the decoupled architecture based on micro frontends and microservices also allows greater independence between development teams, since each team can focus on their specific service or UI component without having to worry about the rest of the system. This makes collaboration easier and accelerates the development process.

Modyo Dynamic is implemented on industry-recognized technologies that minimize vendor lock-in and ensure the future maintainability of the code, such as React for frontend experiences and Spring Boot for backend integrations.

### Integration to Core Systems
The integration into the customer's core systems can be done in two ways. The first one through [Modyo Connect](/en/connect) and the second one directly to APIs controlled directly by the customer.

#### APIs in Modyo Connect
[Modyo Connect](/en/connect) is a managed infrastructure service provided by Modyo on which the different integration templates available within Modyo Dynamic can be directly deployed, as shown in the following figure:

<img src="/assets/img/dynamic/dynamic_architecture.png" alt="Dynamic structure" style="margin-top: 40px; max-width: 700px;" />

#### Customer Provided APIs
The Micro Frontends available in Modyo Dynamic can be integrated directly into each client's APIs, increasing the flexibility of how they can be used.

<img src="/assets/img/dynamic/dynamic_architecture2.png" alt="Dynamic structure" style="margin-top: 40px; max-width: 700px;" />

To do this, there are two options:

- Alter the code of the communication intermediary component, adjusting the API calls and the results to the Modyo Dynamic structure, following the [repository architecture pattern] (https://martinfowler.com/eaaCatalog/repository.html), but altering the source of the data.
- Make calls to the APIs directly from the Micro Frontends, thus eliminating the intermediary component provided by Modyo.

:::warning Integration APIs
The integration microservice templates offered as part of the initiative can also be deployed within the customer's infrastructure. To do this, certain settings in your code base may be necessary.
:::

## Micro Frontends
An architecture based on micro frontends is a technique for building web applications that consists of dividing the user interface into small modular and independent parts, known as micro frontends. Each micro frontend is an independent web application that focuses on a specific part of the user experience and communicates with other micro frontends through APIs.

In an architecture based on micro frontends, the user interface is composed of multiple micro frontends that can be developed, tested and deployed independently. Each micro frontend is responsible for its own logic and communicates with other micro frontends through a well-defined and documented API.

The main advantage of an architecture based on micro frontends is the ability to divide the application into smaller and more manageable parts, which facilitates scalability and maintenance. In addition, development teams can work on different micro frontends simultaneously without affecting other components, which accelerates the development process and improves the team's efficiency.

Another advantage is the ability to reuse micro frontends in different projects and web applications, which reduces development time and cost.

Modyo Dynamic uses a proven and mature architecture based on micro frontends to build web applications that divide the user interface into small modular and independent parts. The micro frontends are available in the form of code templates that can be downloaded independently. Each template depends on common libraries, such as the design system and the Javascript frameworks used.

The Modyo Dynamic micro frontends are designed to be deployed on the Modyo Platform and it is not guaranteed that they can be used outside of it.

:::type Modyo Platform
For more information about the Modyo Platform and its functionalities, please refer to its [official documentation](/en/platform).
:::

### Web Components
Web Components are a web technology that allows the creation of reusable custom components in web applications. These components encapsulate HTML, CSS and JavaScript and can be used in different projects and web applications.

In the micro frontends of Modyo Dynamic, the web components allow you to create reusable and easy to maintain components. By using web components in a micro frontend, the functionalities and responsibilities of each component can be separated, making it easier to develop and maintain the application.

One of the pillars of the Modyo Design System are the Web Components, or more specifically, Custom Elements, attached to standards, which work as low-level abstractions that can be used in a specific framework.
These are compiled with Stencil JS that allows us to use the definitions of a design system in different implementations such as React, Angular or Vue.

### React
ReactJS is an open source JavaScript library developed by Facebook that is used to build interactive and scalable user interfaces for web and mobile applications. ReactJS is one of the most popular tools for building modern web applications.

ReactJS is based on the concept of “components”, which are reusable building blocks for building the user interface of an application. React components can be composed to form complex applications, allowing for the creation of modular, maintainable and scalable user interfaces.

React uses a declarative programming model in which the developer focuses on defining the structure of the user interface rather than worrying about the details of how the user interface is updated in response to user actions. React automatically updates the user interface when there is a change in data, making application development more efficient and less error-prone.

React is an excellent choice for building micro frontends due to the following reasons:
- React is a JavaScript library that allows the creation of reusable components, which is perfectly aligned with the philosophy of the micro frontend architecture, which seeks to divide the user interface into small modular and independent parts.
- React is very flexible and integrates well with other technologies and libraries. This means that it's easy to integrate React components with other technologies and libraries, which makes it easy to incorporate React into a micro frontend architecture.
- React has very good performance, which makes it suitable for high-demand and large scale web applications, such as applications that use a micro frontend architecture.
- React has a large developer community and a wide range of complementary tools and libraries, making it easy to develop and implement micro frontend web applications.
- React is compatible with the “Client-Side Rendering” approach, which allows the creation of fast and highly interactive web applications, which is very important in micro frontend applications.

Modyo Dynamic uses React as it is an excellent option for building micro frontends due to its ability to create reusable components, its flexibility, performance, developer community and compatibility with client-side rendering.


### Internationalization
Internationalization (i18n) in a micro frontend refers to the adaptation of the application's user interface to different languages and cultures. In other words, the application must be able to display texts and images in different languages.

Within Modyo Dynamic, internationalization is implemented with the following practices:
- An internationalization library is used that allows the management of different languages. Some popular options are react-i18next, ngx-translate, and i18next.
- Text string identifiers are used to identify user interface texts in the source code, rather than using the texts directly in the code. This will allow texts to be translated into different languages without the need to modify the source code.
- Translation files are created for each language that you want to use in the application. These files must contain the translations of the text string identifiers used in the source code.
- The functionality is implemented in the application to change the language of the user interface. This can be done using a language selector or similar functionality.
- Internationalization tests are performed to ensure that the application is displayed correctly in different languages and cultures.

By implementing these practices, Modyo Dynamic ensures that the application is easily adaptable to different languages and cultures, which will improve the user experience for people from different countries and regions.


### Accessibility
Accessibility within the Modyo Dynamic micro frontends is an important aspect to consider to ensure that all people, including those with disabilities, can use and navigate the user interface effectively.

To implement accessibility, the following practices are followed:
- An appropriate semantic structure is used in the HTML code to ensure that assistive technologies, such as screen readers, can correctly interpret information.
- Textual alternatives for images, videos and other multimedia elements are provided so that people with visual disabilities can access information.
- Contrasting colors and legible fonts are used to ensure that information is easily visible and readable.
- Accessibility is tested with specialized tools such as Lighthouse, to identify and correct accessibility problems.

Modyo implements these practices in order to significantly improve accessibility in its micro frontends and make the user interface more inclusive for all people.


### Repository Pattern
The Repository pattern is a software design pattern used to separate business logic from the data access layer in an application. The Repository pattern is commonly used in applications that use a layer-based architecture, where business logic, presentation, and data access are separated into different layers.

In this pattern, the repository acts as a layer of abstraction between business logic and access to data. The Repository provides an interface for accessing data, and hides the complexity of the underlying data access layer. In this way, business logic can interact with data independently of the data access layer.

The Repository is also responsible for implementing the logic necessary to perform data access operations, such as creating, reading, updating and deleting data. The underlying data access layer, which can be a database, a web service, or any other type of data storage, is implemented within the repository.

The Repository pattern has several benefits, including:
- It makes it easier to separate concerns between business logic and access to data.
- It improves the modularity and reusability of the code.
- It simplifies code maintenance, since changes to the data access layer can be made without affecting business logic.
- It makes it easy to unit test the code, since the Repository can be simulated to test business logic without actually accessing the data.

Modyo Dynamic's micro frontends use the repository pattern to facilitate communication tasks towards integration APIs, whether implemented with or without Modyo Connect.

## Microservices
Integration microservices are a software architecture that focuses on creating small, autonomous and independent services that can communicate with each other to provide system integration functionality. These microservices are implemented in containers and run independently, making them highly scalable and flexible.

Integration microservices allow organizations to connect heterogeneous applications and systems more effectively. Rather than relying on a monolithic system to handle all integration functions, microservices allow for greater modularity and flexibility in the design of the architecture.

Integration microservices can also be used to implement common integration patterns, such as ESB (Enterprise Service Bus), API Gateway, service orchestration, among others. By using integration microservices, organizations can create more scalable, agile and adaptable integration solutions as business needs change and technologies evolve.

The Modyo Dynamic integration microservices have been developed using the principles of hexagonal architecture, based on the Spring Boot development framework and are intended to be deployed primarily on Modyo Connect.

### Hexagonal Architecture
The hexagonal architecture, also known as the Ports and Adapters Architecture, is a software architecture pattern that focuses on separation of concerns (SoC) and on the independence of hardware and software in an application. This architecture focuses on the idea that applications should be structured in such a way that the core of business logic is at the center of the architecture, with the user interface and infrastructure layers located at the edge.

The hexagonal architecture is made up of three main layers:

- **Domain Layer: ** Contains the business logic of the application and represents the core of the architecture. This layer is independent of the user interface and the infrastructure layer.
- **Infrastructure Adapter Layer: ** Contains the adapters that connect the domain layer to the infrastructure layers. Adapters are responsible for transforming data between domain layer formats and infrastructure-specific formats (for example, databases, web services, etc.).
- **Infrastructure Layer: ** Contains the specific components of the infrastructure that are used in the application, such as databases, web services, file systems, etc.

The hexagonal architecture has several benefits, including:

- It allows the separation of concerns and the independence of hardware and software in an application.
- Simplifies the integration of new infrastructure components.
- It makes it easy to test and debug the application's business logic.
- It improves the modularity and reusability of the code.

Modyo Dynamic's microservices are developed using the principles of hexagonal architecture.

### SpringBoot
Spring Boot is a Java application development framework that is based on the popular Spring framework. Spring Boot focuses on simplifying the process of developing and configuring Spring applications by providing a default configuration out of the box.

With Spring Boot, developers can quickly and easily build web applications, microservices, and other types of business applications. Spring Boot makes the configuration process easier by self-configuring and eliminating the need to write a large amount of repetitive configuration code.

In addition, Spring Boot integrates well with other technologies on the Java platform, allowing developers to create highly scalable and efficient applications. In short, Spring Boot is a powerful and popular tool for developing modern Java applications.

### Modyo Connect
The Modyo Dynamic microservices have been designed to be deployed on the managed infrastructure service of [Modyo Connect] (/es/connect), however, they can be adapted for any type of cloud or physical infrastructure.

:: :type Modyo Connect
For more information on Modyo Connect and its components, please refer to its [official documentation] (“/es/connect”).
:::

