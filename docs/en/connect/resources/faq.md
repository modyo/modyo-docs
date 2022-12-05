---
search: true
---

# Frequently Asked Questions

### Can I contract Modyo Connect in my own infrastructure?

As a managed service, Modyo Connect is offered only from Modyo's Amazon AWS cloud. However, customers who have Modyo Enterprise OnPremise licenses and an Infrastructure Support contract on their own AWS cloud will be able to use the included support hours to perform configurations similar to those included as part of the service. In this case, the development and monitoring components may have associated costs, which are assessed on a case-by-case basis.

### How long does it take to enable the Modyo Connect service?

Enabling the Modyo Connect service should typically take anywhere from a few days to a couple of weeks, depending on how clear you are about the resource definitions that will initially be applied to the service.

The initial service enablement involves the most complex tasks to be executed, such as the configuration of the VPC network in AWS, the productive and pre-productive environments, the site-to-site VPN configuration, the issuance of TLS certificates, among others.

Once the initial enabling is done, the incorporation of new components should be more expeditious, depending on the component to be enabled.

There are cases in which the client may request the activation of the pre-production environment only, in order to proceed with the production environment when the development is more advanced. In these cases, it is recommended that the time to enable the production environment be taken into account at the time of the request.


### What are the alternatives to Modyo Connect?

Modyo Connect is an optional service that is only recommended for customers who currently prefer to outsource the operation of their APIs in conjunction with the ability to develop and securely expose their own Single Sign-On systems or integration APIs.

As an alternative to the service, we can mention each client's own implementation, on its current resources or on the resources of another provider, as could be the case of Microsoft Azure or Google GCP clouds. 

### How compatible is Modyo with integration solutions other than Modyo Connect?
The implementation of the APIs can be done on any system that allows exposing endpoints in the HTTP(s) protocol publicly to the Internet. The endpoints that contain private information of a user must have an authentication system based on JWT tokens that can be integrated through OIDC in the Modyo platform.

### How does Modyo Connect integrate with different business systems (CRMs, ERPs, Core Systems, etc)?

Modyo Connect is a cloud platform managed service. It does not itself provide integration against any external systems, but it does support the deployment of containers (microservices) which will be responsible for performing the integration. For the creation of certain common integration microservices, Modyo makes available to its Enterprise customers Java/Spring Boot code templates which can be used as a working base for development teams.

### Can my equipment work with Modyo Connect or is it only reserved for Modyo professionals?

Modyo Connect is a service managed completely independently of the development services provided by Modyo Professional Services. All customers who have the Modyo Connect service contracted can directly access the development environments and can submit requests to add or remove elements in it.

### Where does the source code for the Widgets and microservices developed for Modyo Connect reside?

Modyo Connect offers end-to-end DevOps managed services, so secure and private custody of Widgets and microservices source code is included as part of the service through a Git repository that developers enabled to use the service will have access to. 

Due to the distributed nature of Git, customers may use their own (Git-based) version control such as GitHub, GitLab, Bitbucket or similar, as long as they place the Modyo Connect Git repository as an additional upstream to which they sync the changes they wish to pass to the different environments.

### Can I incorporate my own DevOps tools into Modyo Connect?

As Modyo Connect is a managed service, it does not support the incorporation of modifications to the flows predefined by the Modyo SRE team, so it is not possible to incorporate your own tools.

### Can I audit the operation of my services under Modyo Connect?

Modyo Enterprise Cloud and Modyo Connect support auditing your operation directly from Amazon AWS. Read-only permission is granted to an AWS IAM user, configurations and logs of everything related to the service can be accessed.

### Are the services offered only from Amazon AWS?

Modyo Cloud, Modyo Enterprise Cloud, and Modyo Connect are managed services offered with guaranteed levels of availability, service, and support. Modyo has chosen to deliver its services exclusively from the Amazon Web Services cloud because of its excellent levels of performance and security. 
