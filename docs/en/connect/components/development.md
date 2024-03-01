---
search: true
---

# Development

The development components include all the tools and accesses necessary for a team of developers to collaborate and work securely on [micro frontends](/en/architecture/patterns/micro-frontend) and [microservices](/en/architecture/patterns/microservice) initiatives.

## Developer Access
Developer Access is the starting point to begin using Modyo Connect services. Once enabled, the developer can interact with the [created repositories](#code-repository) in the version control system and the [Modyo Support Center](https://support.modyo.com) to activate the rest of the services. In addition, developer access grants permissions to access cloud systems, metrics, monitoring and logs.

When activating developer access you must consider:
- The GitHub account must have two-factor authentication enabled, otherwise it will not comply with Modyo's security policy and you will not have access to the repositories.
- GitHub users are added to the repository as “external”. Modyo cannot guarantee the security of this account, so each customer is responsible for having their developers activate additional security measures, such as the use of secure passwords and the control of existing tokens in each account.

### Steps to activate
Create a request ticket at the [Modyo Support Center](https://support.modyo.com) stating:
- The developer's GitHub user (if you don't have one, you'll need to create one first).
- Name and email of the developer.
- Whether or not the developer is authorized to request changes to the components of the service.

:::warning Important
The customer is responsible for informing Modyo in case they need to remove access to a developer. To do this, you must create a request ticket in the [Modyo Support Center](https://support.modyo.com).
:::


## Code Repository
Source code repositories allow you to manage all aspects of the code lifecycle, including versions, inspections, automations, and collaboration flows between members of the development team with access to them.

The source code repositories are implemented on top of Modyo's GitHub Enterprise service. We also use Github Security solutions for dependency inspection and SonarCloud for Java and Javascript.


### Steps to activate
Create a request ticket at the [Modyo Support Center](https://support.modyo.com) stating:
- Type of repository: micro frontend, microservice, or intermediary artifact.
- Repository name: Modyo will apply an internal naming standard with prefixes and/or suffixes depending on the type of repository.


## Continuous Integration
Continuous integration automates common processes in the software development cycle, such as code inspection, dependency review, artifact packaging, and deployment. To do this, Modyo uses the continuous integration systems of GitHub Enterprise and Amazon.
All activities related to the development cycle, such as inspections, reviews and generation of intermediate artifacts, as well as automations related to
[micro frontends](/en/architecture/patterns/micro-frontend), such as deploying to the Modyo platform using the Modyo CLI, are done in GitHub Actions.

Activities related to the generation of container-based artifacts and their deployments to AWS ECS are performed using AWS CodePipeline.


:::warning Important
AWS CodePipeline-based integrations will be migrated to GitHub Actions during the first half of 2023.
:::

### Steps to activate
Create a ticket at the [Modyo Support Center](https://support.modyo.com) to activate Continuous Integration on a [repository](#code-repository), stating:
- Code repository on which to run the automation.
- Type of automation to implement.
- Specific instructions to consider when implementing automation; for example, specific compilation script, special parameters, and so on.


## Artifact Repository
Artifact repositories are a secure and accessible way to store software packages. They allow packages to be versioned and backed up, and to act as a single source for their distribution.

In the case of intermediate libraries, used to modularize Java and Javascript code, dependencies are consumed directly from the artifact repository.

Modyo implements artifact repositories within its GitHub Enterprise and in the customer's Amazon AWS account. For intermediate repositories, such as Java or Javascript libraries, GitHub Registry is used. For container repositories that will be deployed in the Amazon cloud, AWS Elastic Container Registry is used.


### Steps to activate
Create a request ticket at the [Modyo Support Center](https://support.modyo.com) stating:
- Name of the artifact repository.
- Artifact repository type: NPM or Maven library.
- Purpose for which the artifact repository will be used.