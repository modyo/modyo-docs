---
search: true
---

# Architecture

Modyo operates its critical systems in the [Amazon AWS] cloud (https://aws.amazon.com). With over 12 years of experience on this platform, and as an Advanced Technology Partner, Modyo has the necessary experience and certified personnel to ensure the continuity, performance, and security of your deployments.

<img src="/assets/img/cloud/partner_badge.png" alt="Partner Badge" style="margin-top: 40px;" />

In 2019 and 2021, Modyo was recognized by Amazon AWS as Technology Partner of the Year for Chile and Peru. Additionally, Modyo was the first company in Latin America to become an AWS Independent Software Vendor (ISV).

Modyo Connect is offered exclusively on the Amazon AWS cloud and, like Modyo Cloud and Enterprise Cloud, operates in a highly available configuration over multiple AWS availability zones and regions. Using abstract resources and containers in the cloud, it avoids the need to configure and maintain virtual machines of any kind. For the deployment of [microservices](/en/architecture/patterns/microservice), the Amazon Elastic Container Services (ECS) container platform is used in conjunction with automation and configuration control tools, following a reference architecture as shown in the following diagram:

<img src="/assets/img/infrastructure/architecture.png" alt="Modyo Connect Architecture" style="margin-top: 40px;" />

The [microservices](/en/architecture/patterns/microservice) automatically connect to an internal load balancer, where the container instances deployed in [AWS Elastic Container Services (ECS)] are dynamically registered (https://aws.amazon.com/ecs/). The [microservices](/en/architecture/patterns/microservice) have traffic egress rules to the Internet using [AWS NAT Gateway](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html) which provides dedicated fixed IP addresses for each customer. Business services are accessed through configured IPsec VPN links to the customer's infrastructure.

Container images are securely stored in the AWS Elastic Container Repository (ECR) repository, on which security inspections are performed to detect any vulnerabilities present in the images stored in it.

Modyo Connect also has auto-scalability groups to increase the number of container instances as traffic and demand increases. To this end, a minimum base capacity and elasticity action range is defined with each customer according to their particular needs.

The multi-zone deployment in Amazon AWS guarantees an excellent level of redundancy and availability to cope with the most common failures that can usually affect the environment. In the unlikely event that there is a region-wide failure for which Amazon AWS does not deliver an acceptable resolution time, an alternate processing region is available, in which continuous backups of all data are maintained.

## Operation

Like Modyo Enterprise Cloud, Modyo Connect is a service fully managed by Modyo, who is responsible for all configuration management and control of the cloud infrastructure. Service availability levels are determined by a service agreement with each customer.

For the delivery of the service, Modyo has a dedicated team of [Site Reliability Engineers (SREs)](https://sre.google) certified in AWS, who are responsible for ensuring the proper operation of cloud systems for all its customers. The main responsibilities of the SREs team are:

- Monitoring performance, availability and security metrics
- 24x7 Incident Response
- Capacity planning
- Provision and withdrawal of services
- Infrastructure and Security Change Management
- Managing source code repositories
- Security settings and firewall rules
- Access control to cloud environments

## Security

Modyo implements multiple security controls covering both personnel and infrastructure. Modyo's security controls are aligned with the most stringent industry standards, such as [ISO 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001) and [CSA Star](https://cloudsecurityalliance.org/star/). 

Modyo Connect is deployed on the same isolated AWS accounts (Single Tenant) as Modyo Enterprise Cloud, which ensure that no infrastructure component is shared between customers. Within each account, isolated virtual private networks are used for each environment within which they are configured with subnets for the different layers of infrastructure, restricting communication between them through security groups. 

### Shared Responsibility Model

Modyo defines a shared responsibility matrix in conjunction with its customers in which responsibility for complex infrastructure controls is left to Modyo and the customer is responsible for the platform developments and configurations that are deployed on the service, as detailed in the following diagram.

<img src="/assets/img/infrastructure/shared_responsability_model.png" alt="Modyo Shared Responsibility Model" style="margin-top: 40px;" />

From the point of view of the service users, the architects, technical leaders, and developers will be responsible from the design of the solution, to the deployment and execution of the solution, so they are primarily responsible for ensuring the resiliency, scalability, and security of what is delivered.

From the point of view of the SRE team that operates the service, they will be responsible for the implementation of the infrastructure of the offered service, the definition of security standards and configurations and the high availability of the service itself. This ensures that the principles of the [AWS Well Architected Framework](https://aws.amazon.com/architecture/well-architected/) are met.