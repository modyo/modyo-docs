---
search: true
---

# Frequently Asked Questions

### Can I contract Modyo Connect in my own infrastructure?

As a managed service, Modyo Connect is offered exclusively from Modyo's Amazon AWS cloud. However, clients with Modyo Enterprise OnPremise licenses and an Infrastructure Support contract on their own AWS cloud can use the included support hours for configurations similar to those of the service. In this case, development and monitoring components could generate associated costs, evaluated on a case-by-case basis.

### How long does it take to enable the Modyo Connect service?

The enablement of the Modyo Connect service usually takes between a few days and a couple of weeks, depending on the clarity of the initial resource definitions.

The initial service enablement involves complex tasks such as the configuration of the VPC network in AWS, productive and pre-productive environments, site-to-site VPN configuration, and the issuance of TLS certificates, among others.

Once the initial enablement is done, the incorporation of new components is more expeditious, depending on the component to be activated.

There are cases in which the client may request the activation of only the pre-productive environment, to proceed with the production environment when development is more advanced. In these cases, it is recommended to consider the time to enable the production environment when requesting it.


### What are the alternatives to Modyo Connect?

Modyo Connect is an optional service, recommended only for clients who prefer to outsource the operation of their APIs and the ability to securely develop and expose their own Single Sign-On systems or integration APIs.

As an alternative, the client's own implementation can be considered, on their current resources or those of another provider (e.g., Microsoft Azure or Google GCP).

### How compatible is Modyo with integration solutions other than Modyo Connect?
The implementation of APIs can be done on any system that allows exposing HTTP(s) endpoints publicly. Endpoints with private user information must have an authentication system based on JWT tokens, integrable via OIDC in the Modyo platform.

### How does Modyo Connect integrate with different business systems (CRMs, ERPs, Core Systems, etc.)?

Modyo Connect is a managed cloud platform service. It does not provide direct integration with external systems, but it does support the deployment of containers (microservices) responsible for the integration. For common integration microservices, Modyo provides its Enterprise clients with Java/Spring Boot code templates that can be used as a working base for development teams.

### Can my team work with Modyo Connect or is it only reserved for Modyo professionals?

Modyo Connect is a managed service, completely independent of the development services provided by Modyo Professional Services. All clients with the Modyo Connect service contracted can directly access the development environments and request the incorporation or removal of elements.

### Where does the source code for the Widgets and microservices developed for Modyo Connect reside?

Modyo Connect offers end-to-end managed DevOps services. The secure and private custody of Widget and microservice source code is included as part of the service through a Git repository that enabled developers will have access to.

Due to the distributed nature of Git, clients can use their own version control (e.g., GitHub, GitLab, Bitbucket) as long as they configure the Modyo Connect Git repository as an additional upstream to synchronize changes between environments.

### Can I incorporate my own DevOps tools into Modyo Connect?

Modyo Connect, being a managed service, does not support modifications to the flows predefined by the Modyo SRE team, so it is not possible to incorporate your own tools.

### Can I audit the operation of my services under Modyo Connect?

Modyo Enterprise Cloud and Modyo Connect allow auditing their operation directly from Amazon AWS. Read-only permission is granted to an AWS IAM user to access configurations and logs related to the service.

### Are the services offered only from Amazon AWS?

Modyo Cloud, Modyo Enterprise Cloud, and Modyo Connect are managed services offered with guaranteed levels of availability, service, and support. Modyo has chosen to offer its services exclusively from the Amazon Web Services cloud due to its excellent levels of performance and security.