---
search: true
---

# Development

Development components encompass all the tools and access necessary for a team of developers to collaborate and work securely on [micro frontend](/en/architecture/patterns/micro-frontend) and [microservice](/en/architecture/patterns/microservice) initiatives.

## Developer Access
Developer Access is the entry point for utilizing Modyo Connect services. Once enabled, developers can interact with [created repositories](#code-repository) in the version control system and the [Modyo Support Center](https://support.modyo.com) to activate additional services. Furthermore, developer access grants permissions to access cloud systems, metrics, monitoring, and logs.

When activating developer access, consider the following:
- The GitHub account must have two-factor authentication enabled; otherwise, it will not comply with Modyo's security policy, and access to repositories will be denied.
- GitHub users are added to the repository as "external." Modyo cannot guarantee the security of these accounts, so each client is responsible for ensuring their developers activate additional security measures (e.g., secure passwords, token control).

### Steps to activate
Create a requirement ticket in the [Modyo Support Center](https://support.modyo.com) stating:
- The developer's GitHub user (create one if you don't have one).
- Name and email of the developer.
- Whether the developer is authorized to request changes to the service components.

:::warning Important
The client is responsible for informing Modyo if they need to remove a developer's access by creating a requirement ticket in the [Modyo Support Center](https://support.modyo.com).
:::


## Code Repository
Source code repositories enable the management of all aspects of the code lifecycle, including versions, inspections, automations, and collaboration flows among development team members.

Source code repositories are implemented on top of Modyo's GitHub Enterprise service. Additionally, GitHub Security solutions are utilized for dependency inspection, and SonarCloud for Java and JavaScript.


### Steps to activate
Create a requirement ticket in the [Modyo Support Center](https://support.modyo.com) stating:
- Type of repository: micro frontend, microservice, or intermediary artifact.
- Repository name: Modyo will apply an internal naming standard with prefixes and/or suffixes depending on the repository type.


## Continuous Integration
Continuous integration automates common processes in the software development cycle, such as code inspection, dependency review, artifact packaging, and deployments. For this, Modyo leverages the continuous integration systems of GitHub Enterprise and Amazon.
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
Artifact repositories provide a secure and accessible way to store software packages. They enable packages to be versioned and backed up, and serve as a single source for their distribution.

For intermediary libraries, used in the modularization of Java and JavaScript code, dependencies are consumed directly from the artifact repository.

Modyo implements artifact repositories within its GitHub Enterprise and in the client's Amazon AWS account. For intermediary repositories (e.g., Java or JavaScript libraries), GitHub Registry is used. For container repositories deployed in the Amazon cloud, AWS Elastic Container Registry is used.


### Steps to activate
Create a requirement ticket in the [Modyo Support Center](https://support.modyo.com) stating:
- Name of the artifact repository.
- Type of artifact repository: NPM or Maven library.
- Purpose of the artifact repository.