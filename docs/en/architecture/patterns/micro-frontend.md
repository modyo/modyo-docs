---
search: true
---

# Micro Frontend

Developing modern user experiences presents challenges due to the heterogeneity of tools and the web's constant evolution. Micro frontends emerge as a technique to enhance the effectiveness and efficiency of development teams by breaking down complex applications into smaller, more manageable parts.

### Definition of micro frontend

According to the [official definition](https://micro-frontends.org), a micro frontend extends the concept of [microservices](microservice.md) to the frontend. Its objective is to create a modular architecture in scenarios that would otherwise become frontend monoliths, such as Single-Page Applications (SPAs).

Micro frontends enable teams to work with greater autonomy, as their responsibility is limited to their specific context. This necessitates defining clear operating contracts between them, without requiring them to be implemented with the same technology.

#### Characteristics

- **Technologically agnostic**: Each team can work with different technologies or versions, as micro frontends are independent. For example, within the same web application, one micro frontend can be developed in React and another in Angular.
- **Team-isolated code**: They are independent applications that do not share resources. Each team's code is independent and versioned separately.
- **Use of native APIs**: They favor native browser functions over custom API development (e.g., native geolocation controls).
- **Resilient site**: If one micro frontend fails, its state does not affect others, as they load asynchronously and independently.

#### Benefits

- **Incremental updates**: As independent components, changes and deployments to production are also incremental. For many organizations, this is the primary reason for adopting micro frontends.
- **Decoupled and simpler code**: The code for each micro frontend is smaller than that of the entire application, simplifying development for engineers.
- **Independent deployments**: Similar to microservices, independent deployments are a key aspect of the micro frontend architecture. Each micro frontend has its own build, test, and deployment process. By reducing the scope of each deployment, the associated risk decreases.
- **Independent teams**: Independent teams foster a greater sense of ownership and control over the products they maintain, encouraging faster and more efficient work.


### Implementation of micro frontends with Modyo

Micro frontends are developed using open tools and frameworks. Once a component is created, it is deployed directly to the Modyo Platform using the Modyo Command Line Interface (CLI).

:::tip Modyo Platform
Modyo Connect is not a prerequisite for the development and deployment of micro frontends on the Modyo Platform, but it does facilitate the management of [code repositories](/en/connect/components/development.md#code-repository) and [continuous integration](/en/connect/components/development.md#continuous-integration) automations for an efficient workflow.
:::

#### General considerations

Some considerations when developing micro frontends on the Modyo Platform include:

- Define an appropriate scope for the business subdomain (the micro frontend should be neither too small nor too large).
- Define the framework to be used (React, VueJS, Angular, etc.).
- Avoid packaging unnecessary dependencies.
- Ensure that the micro frontend does not generate conflicts with the page's resources.
- Consider omnichannel design.
- Properly handle errors when consuming external APIs.
- Measure accessibility and loading performance with browser tools.
- Evaluate whether synchronous or asynchronous loading of the micro frontend is required.

#### Use of Modyo CLI

Considerations for using the Modyo CLI:

- Run the Modyo CLI in an automation pipeline, not from a local environment.
- Store access tokens to Modyo's administrative APIs securely (e.g., in GitHub Secrets).
