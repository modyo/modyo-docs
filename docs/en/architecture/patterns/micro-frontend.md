---
search: true
---

# Micro Frontend

Developing modern user experiences can be challenging. The heterogeneity of tools and techniques must coexist with the constant natural evolution of the Web. In this scenario, micro frontends emerge as a technique to increase the effectiveness and efficiency of development teams by breaking down complex applications into smaller, more manageable parts.

### What is a micro frontend?

According to the [official definition](https://micro-frontends.org), a micro frontend is the extension of the concept of [microservices](microservice.md) to the frontend. Micro frontends seek to generate a modular architecture in scenarios that would otherwise become frontend monoliths, such as Single-Page Applications (SPAs).

Micro frontends give teams the ability to work with more autonomy, since they operate with a responsibility limited to their context, which forces them to define operating contracts among themselves, without requiring that they be implemented with the same technology.

#### Features

- **Being technology agnostic:** Each team can work with different technologies or versions, since micro frontends don't depend on anything on each other. For example, in the same Web application, a micro frontends can be developed in React and another in Angular.
- **Isolate computer code: ** Standalone, standalone applications that don't share things with each other. The codes are independent on each computer and are versioned separately.
- **Native APIs: ** Micro frontends seek to favor native browser functions over custom APIs. For example, using native geolocation controls instead of custom development.
- **Build a resilient site: ** In the event that a micro frontend fails, its state doesn't contaminate the others, as they load asynchronously and independently.

#### Benefits

- **Incremental updates:** As they are independent components, their changes and deployments to production are also independent components. For many organizations, this is the main reason for the adoption of micro frontends.
- **Decoupled, simpler code:** The code of each micro frontend will be smaller than the full code of the application. Small code repositories are easier for developers to work with.
- **Independent deployments:** As with microservices, independent deployments are a key component in the microfrontend architecture. This reduces the scope of each deployment, thereby reducing the associated risk. Each micro frontend must have its own line of construction, testing, and deployment to production.
- **Independent teams:** Independent teams gain a greater sense of ownership and control over the products they maintain, allowing them to work faster and more efficiently.


### How do you implement micro frontends with Modyo?

The work with micro frontends is done using open tools and frameworks to facilitate the development process. Once the component has been created, it is deployed directly to the Modyo Platform using the Modyo Command Line Interface or CLI.

:::tip Modyo Platform
Modyo Connect is not required for the development and deployment of micro frontends within the Modyo Platform, but it does help with the [code repository](/en/connect/components/development.md#code-repository) and [continuous integration](/en/connect/components/development.md#continuous-integration) automations required for an efficient workflow.
:::

#### General considerations

The following are some considerations that should be taken into account when developing micro frontends on the Modyo Platform:

- Define an appropriate scope according to the business subdomain. A micro frontend shouldn't be too small, not too small
  big.
- Define the framework to work on (React, VueJS, Angular, etc.).
- Avoid packaging dependencies in the micro frontend that are not absolutely necessary.
- Ensure that the micro frontend does not generate any conflict with the resources displayed on the page.
- Ensure omni-channel is considered as part of the micro frontend design.
- If external APIs are consumed, ensure proper error handling.
- Use browser tools to measure accessibility and loading performance.
- Evaluate whether synchronous vs. asynchronous loading of the micro frontend is required.

#### Using the Modyo CLI

Some considerations with the use of the Modyo CLI:

- Ensure that the Modyo CLI process runs in an automation pipeline and not from a local environment.
- Ensure that access tokens to Modyo's administrative APIs are stored within a secrets repository, such as GitHub Secrets.

