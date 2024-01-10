---
search: true
---

# Architecture

Modyo operates its critical systems in [Amazon AWS](https://aws.amazon.com) cloud, where it has more than 12 years of experience as an Advanced Technology Partner. This experience, backed by certified personnel, ensures the continuity, performance, and security of deployments.

In 2019 and 2021, Amazon AWS recognized Modyo as Technology Partner of the Year for Chile and Peru. Modyo was the first company in Latin America to become an AWS Independent Software Vendor (ISV).

Modyo Connect is offered exclusively in Amazon AWS cloud and, like Modyo Cloud and Enterprise Cloud, operates in a highly available configuration across multiple AWS zones and regions. The implementation uses abstract resources and containers in the cloud, eliminating the need to configure and maintain virtual machines. The deployment of [microservices](/en/architecture/patterns/microservice) is done using Amazon Elastic Container Services (ECS) with an architecture detailed in the following diagram:

<img src="/assets/img/infrastructure/architecture.png" alt="Modyo Connect Architecture" style="margin-top: 40px;" />

The [microservices](/en/architecture/patterns/microservice) are automatically connected to an internal load balancer, where the container instances deployed in [AWS Elastic Container Services (ECS)](https://aws.amazon.com/ecs/) are dynamically registered. [Microservices](/en/architecture/patterns/microservice) use [AWS NAT Gateway](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html) for traffic egress rules to the Internet, assigning dedicated fixed IP addresses for each customer. Business services are accessed through configured IPSec VPN links to the customer's infrastructure.

Container images are securely stored in the AWS Elastic Container Repository (ECR), where security inspections are performed to detect vulnerabilities.

Modyo Connect also has self-scaling groups to increase the number of container instances based on traffic and demand. The base capacity and the range of elasticity are defined with each customer according to their needs.

The multi-zone deployment on Amazon AWS ensures excellent redundancy and availability, with ongoing backup in the event of unlikely regional failures.


## Operation

Like Modyo Enterprise Cloud, Modyo Connect is a service fully managed by Modyo. A dedicated team of [Site Reliability Engineers (SREs)](https://sre.google), certified on AWS, is responsible for the operation, monitoring, and maintenance of cloud infrastructure for all customers.

The main responsibilities of the SREs team are:

- Monitoring performance, availability and security metrics
- Incident response 24 hours a day, 7 days a week.
- Capacity planning
- Provision and withdrawal of services
- Infrastructure and Security Change Management
- Managing source code repositories
- Security settings and firewall rules
- Access control to cloud environments

:::tip Tip
Service availability levels are determined by a service agreement with each customer.
:::



## Security

Modyo implements multiple security controls, both for our staff and for our infrastructure, aligned with the most demanding industry standards, such as [ISO 27001] (https://en.wikipedia.org/wiki/ISO/IEC_27001) and [CSA Star] (https://cloudsecurityalliance.org/star/).

Modyo Connect is deployed on Modyo Enterprise Cloud's isolated AWS (Single Tenant) accounts, ensuring that no infrastructure component is shared between customers. Within each account, isolated virtual private networks are used for each environment, configured with subnets for different infrastructure layers, restricting communication between them through security groups.

### Shared Responsibility Model

Modyo and its customers share responsibility for safety and operation, clearly defining the complex infrastructure controls carried out by Modyo. The customer is responsible for the development and configuration of the platform deployed on the service. The shared responsibility model is detailed in the following diagram:

<img src="/assets/img/infrastructure/shared_responsability_model.png" alt="Modyo Shared Responsibility Model" style="margin-top: 40px;" />

Service users, architects, technical leaders and developers are responsible from design to deployment and execution of the solution, so they are primarily responsible for ensuring the resilience, scalability and security of what is delivered.

The SRE team, responsible for operating the service, ensures the implementation of the infrastructure, defines security standards and ensures high availability, following the principles of [AWS Well Architected Framework] (https://aws.amazon.com/architecture/well-architected/).