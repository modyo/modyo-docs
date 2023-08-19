---
search: true
---

# First Steps

Welcome to the official [Dynamic Framework](https://dynamicframework.dev) documentation. This guide presents the different features of the framework, as well as key definitions and useful information about how to start working with it.

<img src="/assets/img/dynamic/dynamic-logo.png"/>

## What is Dynamic Framework?

Dynamic Framework is a set of user experiences based on web components and integrations designed to promote the agile development of solutions in the field of digital banking and the financial industry in general. This platform offers a fast and efficient way to create robust solutions.

Aimed at developers, Dynamic Framework provides a unified framework based on modern, open source standards. This framework can be easily adapted to meet the unique needs of each customer.

Dynamic Framework addresses common digital needs in various financial institutions. It focuses both on product and digital channel managers and on development teams. This approach seeks to streamline implementation through a modular, flexible, reusable and easily maintainable approach.

###  Key Features
Some of the main features of Dynamic Framework are:
- [Component Catalog](/en/dynamic/ui/components) implemented in React and available in Storybook.
- [Design kit](/en/dynamic/ui) for rapid prototyping available for Figma.
- [Experience templates](/en/dynamic/experiences) financial ready to download and modify, with sample data in mock APIs.
- [Integration templates] (/en/dynamic/integrations) to common systems, available as Java and Spring Boot projects.


### Structure
The Dynamic Framework structure is mainly composed of the following elements:

 <img src="/assets/img/dynamic/dynamic_components.png" style="max-width: 700px;"/> 

All components of the framework have been designed to work together, offering the best possible experience to the developers in charge of the implementation.



### Prerequisites
In order to take full advantage of the capabilities of the Dynamic Framework, it is recommended to have a minimum knowledge base of Javascript, React, HTML and CSS, as well as basic notions of [micro frontends] (/es/architecture/patterns/micro-frontend) Web architecture.

In the case of integration templates, knowledge of backend programming is required, mainly in the Java language and the Spring Boot framework, in addition to basic notions of [microservices] architecture (/es/architecture/patterns/microservice).

:: :tip Modyo Platform
The experience templates present in the framework have been designed to be compatible with Modyo. For more information about the Modyo platform, please visit its [official documentation] (/en/platform).
:::


## Installation
First things first. To start using Dynamic Framework, we recommend [creating a test environment] (https://www.modyo.com/get-started) (sandbox) in Modyo. Once you familiarize yourself with the basic concepts of the platform, you're ready to go.

The next step is to install the Modyo CLI. To do this, you must execute the following command:

```shell
npm -i modyo-cli
```

Once you've downloaded the CLI, you're ready to start downloading the first experience templates. We recommend starting with the following, corresponding to the [People Bank] (/en/dynamic/experiences/retail/dashboard):

```shell
modyo-cli get dynamic-retail-dashboard-template
```

The above command will download a fully functional template, which you can run and modify in your local environment. Use your favorite code editor to explore the code, play with it and see for yourself how the different [components] (/en/dynamic/ui/components) of the design system are used.

From now on, you'll have two options: Continue exploring other templates or venturing to deploy your template within your sandbox environment using modyo-cli with a valid API token.


### Contributions

If you're interested in contributing to the Dynamic Framework as a user, there are several ways you can help:
- Using the framework within our test environments and providing feedback on problems and possible improvements you think we can make.
- Contributing directly to code repositories
- Suggesting improvements to the drafting of the documentation
- Participating in the community, joining our webinars and digital events that we hold on a regular basis.

To contact the team, report a problem, or suggest a feature, you can do so through our [Modyo Support Center] (https://support.modyo.com).


### Support

If you have questions or problems with the experience and integration templates provided by Dynamic Framework, you can ask for help directly from the platform using the help action, which can be accessed from the web administration panel. In the event that more comprehensive assistance is required, a support case must be created.

The creation of support cases is done from the [Modyo Support Center](https://support.modyo.com). In the event that a timely response is not obtained, each customer can make use of the established escalation protocol.

:::warning Scope of Support
Queries and support requirements only cover templates and the ways in which they are integrated with the Modyo platform. Modifications to the code are not included. For these cases, Modyo offers customer support services provided by experts.
:::
