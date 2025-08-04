---
search: true
---

# Micro Frontend

The development of modern user experiences presents challenges due to the heterogeneity of tools and the constant evolution of the web. Micro frontends emerge as a technique to increase the effectiveness and efficiency of development teams by breaking down complex applications into smaller, more manageable parts.

### Definition of micro frontend

According to the [official definition](https://micro-frontends.org), a micro frontend is the extension of the concept of [microservices](microservice.md) to the frontend. Its objective is to create a modular architecture in scenarios that would otherwise become frontend monoliths, such as Single-Page Applications (SPAs).

Micro frontends allow teams to work with greater autonomy, as their responsibility is limited to their context. This forces them to define operating contracts between them, without requiring them to be implemented with the same technology.

#### Characteristics

- **Technologically agnostic**: Each team can work with different technologies or versions, as the micro frontends are independent of each other. For example, in the same web application, one micro frontend can be developed in React and another in Angular.
- **Code isolated by team**: They are independent applications that do not share resources. The code of each team is independent and is versioned separately.
- **Use of native APIs**: They favor the native functions of the browser instead of developing custom APIs (e.g., native geolocation controls).
- **Resilient site**: If a micro frontend fails, its state does not contaminate the others, as they are loaded asynchronously and independently.

#### Benefits

- **Incremental updates**: As they are independent components, changes and deployments to production are incremental. For many organizations, this is the main reason for adopting micro frontends.
- **Decoupled and simpler code**: The code of each micro frontend is smaller than that of the entire application, which facilitates development.
- **Independent deployments**: As with microservices, independent deployments are key. Each micro frontend has its own construction, testing, and deployment process. Reducing the scope of each deployment decreases the associated risk.
- **Independent teams**: Independent teams have a greater sense of ownership and control over the products they maintain, which encourages faster and more efficient work.


### Implementation of micro frontends with Modyo

The development of micro frontends is done using open tools and frameworks. Once the component is created, it is deployed directly to the Modyo Platform using the Modyo Command Line Interface (CLI).

:::tip Modyo Platform
Modyo Connect is not a requirement for the development and deployment of micro frontends on the Modyo Platform, but it does facilitate the management of [code repositories](/en/connect/components/development.md#code-repository) and [continuous integration](/en/connect/components/development.md#continuous-integration) automations for an efficient workflow.
:::

#### General considerations

Some considerations when developing micro frontends on the Modyo Platform are:

- Define an appropriate scope for the business subdomain (the micro frontend should be neither too small nor too large).
- Define the framework to be used (React, VueJS, Angular, etc.).
- Avoid packaging unnecessary dependencies.
- Ensure that the micro frontend does not generate conflicts with the page's resources.
- Consider omnichannel in the design.
- Properly handle errors when consuming external APIs.
- Measure accessibility and loading performance with browser tools.
- Evaluate whether synchronous or asynchronous loading of the micro frontend is required.

#### Use of Modyo CLI

Considerations for the use of the Modyo CLI:

- Run the Modyo CLI in an automation pipeline, not from a local environment.
- Store access tokens to Modyo's administrative APIs securely (e.g., in GitHub Secrets).