---
search: true
---

# Modyo Resource Units (MRUs)

The Modyo Resource Unit (MRU) is an abstraction for sizing resource and license consumption in Modyo Connect components. MRUs consider all configured environments and are billed monthly. Modyo establishes the number of MRUs for each resource based on an analysis that includes cloud costs, taxes, operation, and associated licenses, among others.

:::warning Service costs
Each component request could imply a variation in the total number of MRUs billed. Therefore, some requests will require formal client approval.
:::

## Cost estimation

Modyo supports the cost estimation of a service infrastructure running on Modyo Connect. To do this, a solution architect from our professional services area will perform an analysis that will include criteria such as:

- Number of microservices required.
- Size of microservice instances, according to estimated traffic volume.
- Authentication requirements (SSO).
- Data persistence.
- Required pre-production environments.
- Required VPN links and accesses.

:::tip Estimation support
To request support in estimating the costs of the Modyo Connect service, contact your assigned Modyo account executive.
:::
