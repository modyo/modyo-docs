---
search: true
---

# Frequently Asked Questions

### Can I contract Modyo Connect in my own infrastructure?

As a managed service, Modyo Connect is offered exclusively from Modyo's Amazon AWS cloud. However, clients with Modyo Enterprise On-Premise licenses and an Infrastructure Support contract on their own AWS cloud can utilize the included support hours for configurations similar to those provided as part of the service. In such cases, development and monitoring components might incur associated costs, evaluated on a case-by-case basis.

### How long does it take to enable the Modyo Connect service?

The enablement of the Modyo Connect service typically ranges from a few days to a couple of weeks, depending on the clarity of the initial resource definitions.

The initial service enablement involves complex tasks such as configuring the VPC network in AWS, setting up productive and pre-productive environments, configuring site-to-site VPNs, and issuing TLS certificates, among others.

Once the initial enablement is complete, the incorporation of new components is generally more expeditious, depending on the specific component to be activated.

In some cases, clients may request the activation of only the pre-productive environment initially, to proceed with the production environment once development is more advanced. In such scenarios, it is recommended to factor in the time required for production environment enablement when making the request.


### What are the alternatives to Modyo Connect?

Modyo Connect is an optional service, recommended primarily for clients who prefer to outsource the operation of their APIs and the ability to securely develop and expose their own Single Sign-On systems or integration APIs.

As an alternative, clients can consider their own implementation, utilizing their current resources or those of another provider (e.g., Microsoft Azure or Google GCP).

### How compatible is Modyo with integration solutions other than Modyo Connect?
API implementation can be performed on any system that allows exposing HTTP(s) endpoints publicly. Endpoints containing private user information must have an authentication system based on JWT tokens, integrable via OIDC within the Modyo platform.

### How does Modyo Connect integrate with different business systems (CRMs, ERPs, core systems, etc.)?

Modyo Connect is a managed cloud platform service. It does not provide direct integration with external systems but supports the deployment of containers (microservices) responsible for such integration. For common integration microservices, Modyo provides its Enterprise clients with Java/Spring Boot code templates that can serve as a working base for development teams.

### Can my team work with Modyo Connect, or is it exclusively for Modyo professionals?

Modyo Connect is a managed service, entirely independent of the development services provided by Modyo Professional Services. All clients with a Modyo Connect service contract can directly access the development environments and submit requests for the incorporation or removal of elements.

### Where does the source code for widgets and microservices developed for Modyo Connect reside?

Modyo Connect offers end-to-end managed DevOps services. Secure and private custody of Widget and microservice source code is included as part of the service through a Git repository accessible to enabled developers.

Due to the distributed nature of Git, clients can use their own version control systems (e.g., GitHub, GitLab, Bitbucket) as long as they configure the Modyo Connect Git repository as an additional upstream to synchronize changes between environments.

### Can I incorporate my own DevOps tools into Modyo Connect?

Modyo Connect, being a managed service, does not support modifications to the flows predefined by the Modyo SRE team; therefore, it is not possible to incorporate your own tools.

### Can I audit the operation of my services under Modyo Connect?

Modyo Enterprise Cloud and Modyo Connect allow auditing their operation directly from Amazon AWS. Read-only permission is granted to an AWS IAM user to access configurations and logs related to the service.

### Are the services offered only from Amazon AWS?

Modyo Cloud, Modyo Enterprise Cloud, and Modyo Connect are managed services offered with guaranteed levels of availability, service, and support. Modyo has chosen to offer its services exclusively from the Amazon Web Services cloud due to its excellent levels of performance and security.
