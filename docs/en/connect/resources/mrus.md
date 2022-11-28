---
search: true
---

# Modyo Resource Units (MRUs)

The Modyo Resource Unit (MRU) is an abstraction for sizing resource and license consumption in Modyo Connect components. MRUs consider all configured environments and are billed monthly. Modyo establishes a number of MRUs for each resource based on an analysis that includes elements such as cloud costs, taxes, operation, associated licenses, among others.

:::warning Service costs
Each component request must consider a possible variation in the total number of MRUs billed. Therefore, some requests will require a formal approval from the customer.
:::

## Cost estimation
Modyo supports the cost estimation of a service infrastructure running on Modyo Connect. To do this, we work directly with a solution architect from our professional services area, who will include criteria such as:
- Number of microservices required
- Size of microservices instances, according to estimated traffic volume
- Authentication requirements, SSO
- Data persistence
- Pre-production environments required
- VPN links and access required

:::tip Estimating Support
To request cost estimating support for Modyo Connect service, please contact your assigned Modyo account executive.
:::