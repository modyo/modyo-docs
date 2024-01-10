---
search: true
---

# Activation

The Modyo Connect managed service is activated through a contract or addendum separate from the Modyo Enterprise Cloud subscription. To initiate the Modyo Connect service, you must consider:

- Number of developers with access to code repositories.
- Number of [micro frontends](/en/architecture/patterns/micro-frontend) that will be developed with the Modyo Command Line Interface (CLI).
- Number of pre-productive environments that will be used in development.
- Number of [microservices](/en/architecture/patterns/microservice) to be developed.
- Number of intermediate repositories that might be required in case of building shared artifacts, such as NPM packages or Java libraries for Maven or Gradle.
- VPN links that must be activated to access business services.
- Single Sign-On authentication requirements.

Container capacity is calculated based on estimated traffic to the system in production, subject to adjustments based on actual consumption and high availability criteria.

### Requirement ticket

Request management is done through the [Modyo Support Center](https://support.modyo.com), by creating requirement tickets and completing the instructions indicated therein.

Once the ticket is created, it is assigned a priority, unique identifier and a URL to review the status of the request or answer questions that the Modyo SRE team may have.
Requirement tickets, once entered, are reviewed before being accepted and assigned to an SRE. The length of this process depends on the demand and availability of the equipment.

Urgent tickets require justification and may be limited depending on the support contract.
For efficient access, we request the creation of an account using the corporate email associated with the Modyo Enterprise Cloud contract. It is recommended to include all parties involved in the ticket, using the CC field of the request form, to facilitate communication.


:: :tip Planning
We recommend planning requirement tickets in advance, considering periods of high demand. Anticipation helps ensure adequate response times.
:::

### Costs

Modyo uses an equivalence unit called Modyo Resource Unit (MRU) to allocate resources and licenses. The MRU are added up, considering the total number of environments, and are billed monthly. Modyo establishes the number of MRUs assigned to each resource based on a cost analysis that includes AWS costs, taxes, and man-hour management costs. The value of the MRU varies depending on cloud costs. For more details about the updated values, contact the assigned account executive.
