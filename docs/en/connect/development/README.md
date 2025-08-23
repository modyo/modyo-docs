---
search: true
---

# Development

Development components include the tools and access necessary for a team of developers to collaborate securely on [micro frontends](/en/architecture/patterns/micro-frontend.html) and [microservices](/en/architecture/patterns/microservice.html) initiatives.

This section documents the essential components of the Modyo Connect development environment, which facilitate collaboration, automation, and secure source code management for enterprise projects.

## Available Components

#### [Developer Access](developer-access.html)
Entry point for using Modyo Connect services. Provides permissions to access repositories, cloud systems, metrics, monitoring, and logs.

#### [Code Repository](code-repository.html)
Complete source code lifecycle management implemented on GitHub Enterprise. Includes security inspections and quality analysis with SonarCloud.

#### [Continuous Integration](continuous-integration.html)
Automation of development cycle processes using GitHub Actions and AWS CodePipeline. Covers everything from code inspection to automated deployment.

#### [Artifact Repository](artifact-repository.html)
Secure and versioned storage of software packages. Supports NPM libraries, Maven, and Docker containers through GitHub Registry and AWS ECR.

## Quick Start

1. Request [developer access](developer-access.html) through a ticket in the Support Center
2. Configure your [code repository](code-repository.html) according to the project type
3. Set up [continuous integration](continuous-integration.html) pipelines
4. Configure the necessary [artifact repositories](artifact-repository.html)

## Additional Resources

- [Modyo Support Center](https://support.modyo.com)
- [Micro frontends guide](/en/architecture/patterns/micro-frontend.html)
- [Microservices guide](/en/architecture/patterns/microservice.html)