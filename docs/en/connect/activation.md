---
search: true
---

# Activation

The Modyo Connect managed service is activated through a contract or annex independent of the Modyo Enterprise Cloud subscription. To initiate the service, the following considerations are essential:

- Number of developers requiring access to code repositories.
- Number of [micro frontends](/en/architecture/patterns/micro-frontend) to be developed with the Modyo Command Line Interface (CLI).
- Number of pre-production environments needed for development.
- Number of [microservices](/en/architecture/patterns/microservice) to be developed.
- Number of intermediary repositories that might be required for building shared artifacts (e.g., NPM packages, Java libraries for Maven or Gradle).
- VPN links to be activated for accessing business services.
- Single Sign-On authentication requirements.

The container capacity is calculated based on the estimated production traffic, subject to adjustments for actual consumption and high availability criteria.

### Requirement Ticket

Request management is conducted through the [Modyo Support Center](https://support.modyo.com), by creating requirement tickets and following the provided instructions.

Once a ticket is created, it is assigned a priority, a unique identifier, and a URL to check its status or respond to queries from the Modyo SRE team.
Requirement tickets are reviewed before being accepted and assigned to an SRE. The duration of this process depends on team demand and availability.

Urgent tickets require justification and may be subject to limitations based on the support contract.
For efficient access, account creation using the corporate email associated with the Modyo Enterprise Cloud contract is requested. It is recommended to include all involved parties in the ticket via the CC field of the request form to facilitate communication.


:::tip Planning
It is recommended to plan requirement tickets in advance, considering periods of high demand. Anticipation helps ensure adequate response times.
:::

### Costs

Modyo utilizes the Modyo Resource Unit (MRU) as an equivalence unit to allocate resources and licenses. MRUs are aggregated, considering the total number of environments, and are billed monthly. Modyo determines the number of MRUs assigned to each resource based on a cost analysis that includes AWS costs, taxes, and human-hour management costs. The value of the MRU varies according to cloud costs. For more details on updated values, contact the assigned account executive.
