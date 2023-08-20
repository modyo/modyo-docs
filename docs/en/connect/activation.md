---
search: true
---

# Activation

The Modyo Connect managed service is activated as a separate contract or annex independent of the Modyo Enterprise Cloud subscription licensing. To start the Modyo Connect service, the following considerations must be taken into account:

- Number of developers who should have access to the code repositories.
- Number of [micro frontends](/en/architecture/patterns/micro-frontend) that will be developed using Modyo's Command Line Interface (CLI).
- Number of pre-production environments to be used as part of the development.
- Number of [microservices](/en/architecture/patterns/microservice) that will be developed. 
- Number of intermediate repositories that might be required in case of building shared artifacts (e.g. NPM packages or Java libraries for Maven or Gradle).
- VPN links that must be activated to access business services.
- Single Sign-On authentication requirements.

The capacity of the containers used for the deployment of the services will be calculated depending on the estimated traffic to the system in production. This estimate will serve to establish the initial size, but may change over time depending on the actual consumption of the services. High availability criteria and eventual multi-region redundancy should be considered in the case of production deployment.

### Requirement ticket

Request management is done through the [Modyo Support Center](https://support.modyo.com), by creating a requirements ticket and completing the instructions provided in the ticket. Once the ticket is created, it is assigned a priority, unique identifier, and a URL that can be visited later to review the status of the request or answer any questions the Modyo SRE team may have.

Requirement tickets, once entered, are reviewed before being accepted and assigned to an SRE. The duration of this process will depend on the demand and availability of the team. If the ticket needs to be handled on an urgent basis, the reasons should be clearly explained so that the team can reschedule others. Depending on the support contract associated with the service, each customer may have only a limited and non-cumulative number of requests that can be handled on an urgent basis during the month.

To improve ticket management and the way customers access ticket status, Modyo Support Center will require the creation of a username and password for ticket requests. It is important that this account is created using the corporate email address associated with the Modyo Enterprise Cloud service contract, otherwise the SRE team will not be able to identify the validity of the request. In addition, it is convenient to include in the ticket all the parties involved that should have access to it, through the CC field of the request form.

:::tip Planning 
Modyo recommends planning in advance for the tickets of requirements. There are periods in the month when there is more demand for the service than others, so the recommendation is to try to make requests as far in advance as possible.
:::

### Costs

Modyo has defined a unit of equivalence called the Modyo Resource Unit (MRU). The MRU is an abstraction for allocating computational resources and license consumption to the elements configured as part of the service. MRUs are aggregated over the total number of environments and charged on a monthly basis to the customer. Modyo establishes the number of MRUs assigned to each resource based on a cost analysis that includes AWS costs, taxes, management man-hour costs, among others. **The value (in US dollars) of an MRU may vary depending on cloud costs**. For more details on updated MRU values, please contact your assigned account executive.
