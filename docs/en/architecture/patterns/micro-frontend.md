---
search: true
---

# Micro Frontend

Developing modern user experiences can be a challenge. The heterogeneity of tools and techniques must coexist with the constant natural evolution of the web. In this scenario, micro frontends emerge as a technique to increase the effectiveness and efficiency of development teams by breaking down complex applications into smaller, more manageable parts.

### Definition of micro frontend

According to the [official definition](https://micro-frontends.org), a micro frontend is the extension of the concept of [microservices](microservice) to the frontend. Its objective is to create a modular architecture in scenarios that would otherwise become frontend monoliths, such as single-page applications (SPAs).

Micro frontends allow teams to work with greater autonomy, since they operate with a responsibility limited to their context, this forces them to define operating contracts between them, without the need for them to be implemented with the same technology.

#### Features

- **They are technologically agnostic: ** Each team can work with different technologies or versions, since micro frontends don't depend on each other. For example, in the same web application, one micro frontend can be developed in React and another in Angular.
- **They isolate the computer's code: ** They are separate applications that do not share resources with each other. Codes are independent for each team and are versioned separately.
- **They use native APIs: ** Micro frontends favor native browser functions rather than developing custom APIs. For example, they use native geolocation controls instead of custom developments.
- **They build a resilient site: ** In the event that a micro frontend fails, its state doesn't contaminate the others, as they load asynchronously and independently.

#### Benefits

- **Incremental updates: ** As they are independent components, changes and deployments to production are also independent components. For many organizations, this is the primary reason for adopting micro frontends.
- **Decoupled and simpler code: ** The code of each micro frontend is smaller than that of the entire application, making it easier for developers to work.
- **Independent deployments: ** As with microservices, independent deployments are a key component in the micro frontends architecture. Each micro frontend has its own building, testing, and deployment process. By reducing the scope of each deployment, the associated risk decreases.
- **Independent teams**: Independent teams have a greater sense of ownership and control over the products they maintain, encouraging faster and more efficient work.


### Implementing micro frontends with Modyo

Working with micro frontends is done using open tools and frameworks to facilitate development. Once you have created the component, it is deployed directly to the Modyo Platform using the Modyo Command Line Interface or CLI.

:::tip Modyo Platform
Modyo Connect is not required for the development and deployment of micro frontends within the Modyo Platform, but it does help with the [code repositories] (/en/connect/components/development.md #code-repository) and [continuous integration] automations (/en/connect/components/development.md #continuous-integration) required for an efficient workflow.
:::

#### General considerations

Some considerations that must be taken into account when developing micro frontends on the Modyo Platform are:

- Define an appropriate scope according to the business subdomain. A micro frontend shouldn't be too small, nor too
  big.
- Define the framework to work on (React, VueJS, Angular, etc.).
- Avoid packaging unnecessary dependencies.
- Ensure that the micro frontend does not generate conflicts with the page's resources.
- Consider omnichannel design.
- In case of consuming external APIs, handle errors properly.
- Measure accessibility and loading performance with browser tools
- Evaluate if synchronous or asynchronous loading of the micro frontend is required.

#### Using the Modyo CLI

Some considerations with the use of the Modyo CLI:

- Run the Modyo CLI process in an automation pipeline and not from a local environment.
- Store access tokens to Modyo's administrative APIs securely, such as on GitHub Secrets.


