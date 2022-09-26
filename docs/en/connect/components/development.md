---
search: true
---

# Development
Development components include all the access and tools required by a team of developers to collaborate and work securely on [micro frontends](.. /resources/microfrontends.md) initiatives and [microservices](.. /resources/microservices.md).

## Developer Access
Developer Access is the starting point for starting to use Modyo Connect services. Once enabled, the developer will be able to interact with the [created repositories](#repositorio -de-code) in the version control system and the [Modyo Support Center](https://support.modyo.com) to activate the rest of the services. In addition, developer access grants permissions to access cloud systems, metrics, monitoring and logs.

When activating developer access, consider the following:
- The GitHub account must have active second-factor authentication protection, otherwise it will not comply with Modyo's security policy and will not be able to access the repositories
- GitHub users are added to the repository as “external”. Modyo cannot guarantee the security of this account, so each customer will be responsible for its developers to activate other security measures, such as the use of secure passwords and the control of the existing tokens in each account

### Activation
Developer Access is activated by means of a request ticket in the [Modyo Support Center](https://support.modyo.com) where you must indicate:
- Developer GitHub user (if you don't have one, it must be created beforehand)
- The developer's name and email
- Indicate whether or not the developer is authorized to request changes to the components of the service

:: warning Important
Once access to a developer has been created, it will be the customer's responsibility to inform when it should be removed from authorized repositories. This is done through a requirement ticket in the [Modyo Support Center](https://support.modyo.com).
:::


## Code Repository
Source code repositories allow the management of all aspects of the code lifecycle, including versions, inspections, automations and collaboration flows between members of the development team with access to them.

The source code repositories are implemented on top of Modyo's GitHub Enterprise service. Github Security solutions are also used for dependency inspection, SonarCloud for Java and Javascript.

### Activation
The activation of a Code Repository is done by means of a request ticket in the [Modyo Support Center](https://support.modyo.com) where you must indicate:
- Repository type: micro frontend, microservice, or intermediary artifact
- Name of the repository (Modyo will apply an internal naming standard to the name indicated, in which prefixes and/or suffixes are incorporated depending on the type of repository)


## Continuing Integration
The continuous integration configuration is used to automate common processes within the software development cycle. Among these processes, we mainly find code inspection, dependency review, artifact packaging, deployment, among others.

Modyo uses the continuous integration systems of GitHub Enterprise and Amazon. All activities related to the development cycle such as inspections, revisions or generation of intermediary artifacts are performed on GitHub Actions. All automations referring to [micro frontends](.. /resources/microfrontends.md) are also performed on GitHub Actions, how to deploy to the Modyo platform using the Modyo CLI. Activities related to the generation of container-based artifacts and their deployments on AWS ECS are performed using AWS CodePipeline.

:: warning Important
Integrations based on AWS CodePipeline will be migrated to GitHub Actions during the first half of 2023.
:::

### Activation
The activation of Continuous Integration on a [repository](#repositorio -de-code) is done by means of a request ticket in the [Modyo Support Center](https://support.modyo.com) where you must indicate:
- Code repository on which automation should be run
- Type of automation you want to implement
- Specific instructions to consider when implementing automation (Example: specific build script, special parameters, etc.).


## Artifact Repository
Artifact repositories allow you to store software packages in a secure and accessible way. Its main functionalities include versioning and supporting packages, in addition to acting as a single source for their distribution. In the case of intermediary libraries, used in the modularization of Java and Javascript code, the dependencies are consumed directly from the artifact repository.

Modyo implements artifact repositories within its GitHub Enterprise and the Amazon AWS account configured for the customer. For intermediary repositories, GitHub Registry is used as Java or Javascript libraries. For container repositories that will be deployed in the Amazon cloud, AWS Elastic Container Registry is used.

### Activation
The activation of an artifact repository is done by means of a requirement ticket in the [Modyo Support Center](https://support.modyo.com) where you must indicate:
- Artifact repository name
- Artifact repository type (NPM or Maven library)
- Purpose for which the artifact repository will be used


## Costs and Activation Times
| Component        | Cost in MRUs        | Enablement times (approx)  |
| ------------- |:-------------:|:-----:|
|Developer Access|1 MRU|1 day|p
|Code Repository|1 MRU|1 day|
|Continuing Integration|1 MRU|1-2 days|
|Artifact Repository|1 MRU|1 day|


