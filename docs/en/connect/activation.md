---
search: true
---

# Activation

The Modyo Connect managed service is activated through a contract or annex independent of the Modyo Enterprise Cloud subscription. To start the service, the following points must be considered:

- Number of developers with access to code repositories.
- Number of [micro frontends](/en/architecture/patterns/micro-frontend) to be developed with the Modyo Command Line Interface (CLI).
- Number of pre-productive environments for development.
- Number of [microservices](/en/architecture/patterns/microservice) to be developed.
- Number of intermediary repositories for shared artifacts (e.g., NPM packages, Java libraries for Maven or Gradle).
- VPN links to be activated to access business services.
- Single Sign-On authentication requirements.

The capacity of the containers is calculated according to the estimated traffic in production, subject to adjustments for actual consumption and high availability criteria.

### Requirement ticket

Request management is done through the [Modyo Support Center](https://support.modyo.com), creating requirement tickets and following the instructions indicated.

Once the ticket is created, it is assigned a priority, a unique identifier, and a URL to check its status or answer queries from the Modyo SRE team.
Requirement tickets are reviewed before being accepted and assigned to an SRE. The duration of this process depends on the demand and availability of the team.

Urgent tickets require justification and may be subject to limitations depending on the support contract.
For efficient access, the creation of an account using the corporate email associated with the Modyo Enterprise Cloud contract is requested. It is recommended to include all parties involved in the ticket through the CC field of the request form, to facilitate communication.


:::tip Planning
It is recommended to plan requirement tickets in advance, considering periods of high demand. Anticipation helps ensure adequate response times.
:::

### Costs

Modyo uses the Modyo Resource Unit (MRU) equivalence unit to allocate resources and licenses. The MRUs are added up, considering the total of the environments, and are billed monthly. Modyo establishes the number of MRUs assigned to each resource according to a cost analysis that includes AWS costs, taxes, and man-hour management costs. The value of the MRU varies according to the costs in the cloud. For more details on the updated values, contact the assigned account executive.