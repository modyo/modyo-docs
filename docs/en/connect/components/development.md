---
search: true
---

# Development

The development components include all the tools and accesses necessary for a team of developers to collaborate and work securely on [micro frontends](/en/architecture/patterns/micro-frontend) and [microservices](/en/architecture/patterns/microservice) initiatives.

## Developer Access
Developer Access is the starting point to begin using Modyo Connect services. Once enabled, the developer can interact with the [created repositories](#code-repository) in the version control system and the [Modyo Support Center](https://support.modyo.com) to activate the rest of the services. In addition, developer access grants permissions to access cloud systems, metrics, monitoring, and logs.

When activating developer access, you must consider:
- The GitHub account must have two-factor authentication enabled; otherwise, it will not comply with Modyo's security policy and you will not have access to the repositories.
- GitHub users are added to the repository as "external". Modyo cannot guarantee the security of these accounts, so each client is responsible for ensuring their developers activate additional security measures (e.g., secure passwords, token control).

### Steps to activate
Create a requirement ticket in the [Modyo Support Center](https://support.modyo.com) stating:
- The developer's GitHub user (create one if you don't have one).
- Name and email of the developer.
- Whether or not the developer is authorized to request changes to the components of the service.

:::warning Important
The client is responsible for informing Modyo if they need to remove access to a developer, by creating a requirement ticket in the [Modyo Support Center](https://support.modyo.com).
:::


## Code Repository
Source code repositories allow you to manage all aspects of the code lifecycle, including versions, inspections, automations, and collaboration flows between members of the development team.

Source code repositories are implemented on top of Modyo's GitHub Enterprise service. In addition, GitHub Security solutions are used for dependency inspection and SonarCloud for Java and Javascript.


### Steps to activate
Create a requirement ticket in the [Modyo Support Center](https://support.modyo.com) stating:
- Type of repository: micro frontend, microservice, or intermediary artifact.
- Repository name: Modyo will apply an internal naming standard with prefixes and/or suffixes depending on the type of repository.


## Continuous Integration
Continuous integration automates common processes in the software development cycle, such as code inspection, dependency review, artifact packaging, and deployments. For this, Modyo uses the continuous integration systems of GitHub Enterprise and Amazon.
All activities related to the development cycle (inspections, reviews, generation of intermediary artifacts) and [micro frontend](/en/architecture/patterns/micro-frontend) automations (e.g., deployment to the Modyo platform using the Modyo CLI) are performed in GitHub Actions.

Activities related to the generation of container-based artifacts and their deployments to AWS ECS are performed using AWS CodePipeline.


:::warning Important
(Note: AWS CodePipeline-based integrations will be migrated to GitHub Actions during the first half of 2023.)
:::

### Steps to activate
Create a ticket in the [Modyo Support Center](https://support.modyo.com) to activate Continuous Integration on a [repository](#code-repository), stating:
- Code repository on which to run the automation.
- Type of automation to implement.
- Specific instructions for the implementation of the automation (e.g., compilation script, special parameters).


## Artifact Repository
Artifact repositories are a secure and accessible way to store software packages. They allow packages to be versioned and backed up, and to act as a single source for their distribution.

In the case of intermediary libraries, used in the modularization of Java and Javascript code, dependencies are consumed directly from the artifact repository.

Modyo implements artifact repositories in its GitHub Enterprise and in the client's Amazon AWS account. For intermediary repositories (e.g., Java or Javascript libraries), GitHub Registry is used. For container repositories deployed in the Amazon cloud, AWS Elastic Container Registry is used.


### Steps to activate
Create a requirement ticket in the [Modyo Support Center](https://support.modyo.com) stating:
- Name of the artifact repository.
- Type of artifact repository: NPM or Maven library.
- Purpose of the artifact repository.
