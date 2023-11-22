---
search: true
---

# Get Started

Welcome to the official [Dynamic Framework](https://dynamicframework.dev) documentation.

In this guide, you'll find information about the various features of this framework, as well as key definitions and details on how to start working with it.

## Dynamic Framework

Dynamic Framework is a set of user experiences, based on web components and integrations, designed to accelerate the development of solutions in the field of digital banking and the financial industry in general. This platform provides a fast and efficient way to create robust solutions.

Aimed at developers, Dynamic Framework offers a unified framework based on modern, open source standards. This framework is easily adapted to the unique needs of each customer.

Dynamic Framework addresses common digital needs in various financial institutions. It focuses both on product and digital channel managers and on development teams. It seeks to streamline implementation through a modular, flexible, reusable and easily maintainable approach.

###  Key Features
Some of the main features of Dynamic Framework are:
- [Component Catalog](/en/dynamic/ui/components) implemented in React and available in Storybook.
- [Design kit](/en/dynamic/ui) for rapid prototyping in Figma.
- Financial [Experience Templates] (/en/dynamic/experiences/retail/dashboard) ready to download and modify, with sample data in mocks APIs.
- [Integration templates](/en/dynamic/integrations) with common systems, available as Java and Spring Boot projects.


### Structure
The Dynamic Framework structure is mainly composed of the following elements:

<img src="/assets/img/dynamic/dynamic_components.png" style="max-width: 700px;"/>

All components of the framework have been designed to work together, offering the best possible experience to the developers responsible for the implementation.


### Prerequisites
To take full advantage of Dynamic Framework's capabilities, we recommend having a minimum knowledge base of Javascript, React, HTML and CSS, as well as basic notions of [micro frontends](/en/architecture/patterns/micro-frontend) Web architecture.

In the case of integration templates, knowledge of backend programming is required, mainly in Java language and Spring Boot framework, in addition to basic notions of [microservices](/en/architecture/patterns/microservice) architecture.

:::tip Modyo Platform
The experience templates included in the framework were designed to be compatible with Modyo. For more information about Modyo platform visit the [official documentation](/en/platform).
:::


## Installation
To start using Dynamic Framework [create a test environment](https://www.modyo.com/get-started) (sandbox) in Modyo and familiarize yourself with the basic concepts of the platform.

Start a new Dynamic Framework project using the NPX command. This command automatically configures the entire environment:

```bash
npx @modyo /cli @latest get dynamic-react-base-template <project-name>
```
If you don't have the Modyo CLI installed, the system will ask to install it, as it is a required package. You can find the CLI installation instructions in the [official documentation](/en/platform/channels/cli.html #modyo -cli)

This process downloads the dynamic-react-base-template, once you have the template, go to the project folder to install the dependencies and build the project:

```bash
CD <project-name>
NPM I
npm run start
```
Use a code editor to explore the code and examine how the different [components](/en/dynamic/ui/components) of the design system are used.

### Manual installation
To manually create a new project with Dynamic Framework or add it as a dependency to an existing React project, install the required packages:
```bash
npm i @modyo /cli @latest @dynamic -framework/ui-react @latest
```

Now you can choose:
1. Continue [exploring other templates](/en/dynamic/experiences/retail/dashboard.html)
2. [Deploy your template](/en/platform/channels/cli.html#modyo-cli-push-name) within your sandbox environment using the modyo-cli with a valid API token.


### Contributions

If you want to contribute to Dynamic Framework as a user, there are several ways you can help:
- It uses the framework in our test environments and provides feedback on issues and possible improvements.
- Contribute directly to code repositories.
- Suggest improvements in the drafting of documentation.
- Get involved in the community, join our webinars and regular digital events.

You can contact the development team, report a problem, or suggest a feature through our [Modyo Support Center](https://support.modyo.com).


### Support

If you have questions or problems with the experience and integration templates provided by Dynamic Framework, you can request help directly from the platform using the help function, accessible from the web administration panel. If you need more comprehensive assistance, create a support case.

You can create a support case from the [Modyo Support Center](https://support.modyo.com). If you don't receive a timely response, each customer has the option to follow the established escalation protocol.

:::warning Scope of Support
Inquiries and support requests apply exclusively to templates and how they integrate with Modyo platform. Modifications and custom code developed on top of them are excluded. For these cases, Modyo offers you [professional services](https://modyo.com/services) for expert guidance and customer support.
:::