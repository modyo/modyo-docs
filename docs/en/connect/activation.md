---
search: true
---

# Activation
The Modyo Connect managed service is activated as a separate contract or annex independent of the Modyo Enterprise Cloud subscription licensing. To start the Modyo Connect service, the following considerations must be taken into account:
- Number of developers who should have access to code repositories
- Number of [micro frontends](resources/microfrontends.md) that will be developed using Modyo's Command Line Interface (CLI)
- Number of pre-production environments to be used as part of development
- Number of [microservices](resources/microservices.md) that will be developed 
- Number of intermediate repositories that might be required if building shared artifacts (for example: NPM packages or Java libraries for Maven or Gradle)
- VPN links that must be activated to access business services
- Single Sign On Authentication Requirements

The capacity of the containers used for the deployment of services will be calculated depending on the estimated traffic to the system in production, an estimate that will serve to establish the initial size but which may change over time depending on the actual consumption of the services. High availability criteria and possible multi-region redundancy should be considered in the case of production deployment.

### Requirement ticket
Requests are done through the [Modyo Support Center](https://support.modyo.com), by creating requirement tickets and completing the instructions within. Once the ticket is created, it is assigned a priority, unique identifier, and a URL that can be visited later to review the status of the request or answer any queries that the Modyo SRE team may have.

Once entered, requirement tickets are reviewed before being accepted and assigned to an SRE. The duration of this process will depend on the demand and availability of the equipment. If the ticket needs to be dealt with urgently, the reasons must be clearly explained so that the team can replan the others. Depending on the support contract associated with the service, each customer may have only a limited and non-cumulative number of requirements that can be addressed urgently during the month.

To improve ticket management and the way customers access ticket status, the Modyo support center will ask for the creation of a username and password to make requests. It is important that the creation of this account be done using the corporate email to which the Modyo Enterprise Cloud service contract is associated, otherwise the SRE team will not be able to identify the validity of the request. In addition, it is advised to include in the ticket all the parties involved who should have access to it, using the CC field of the request form.

::: tip Planning 
Modyo recommends planning requirement tickets in advance to avoid creating them urgently by waiting until the last day. There are periods in the month when there is more demand for the service, we recommend to make the request as far in advance as possible.
:::

### Costs
Modyo has defined an equivalence unit called Modyo Resource Unit (MRU). The MRU is an abstraction for assigning computational resources and license consumption to elements configured as part of the service. The MRU are added considering the total number of environments and are charged monthly to the customer. Modyo establishes the number of MRUs assigned to each resource based on a cost analysis that includes AWS costs, taxes, management man-hour costs, and more. **The value (in US dollars) of an MRU may vary depending on cloud costs**. For more details about the updated values of the MRU units, please contact the assigned account executive.
