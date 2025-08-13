---
search: true
---

# Architecture

Modyo operates its critical systems within the [Amazon AWS](https://aws.amazon.com) cloud, leveraging over 12 years of experience as an Advanced Technology Partner. This extensive experience, supported by certified personnel, ensures the continuity, performance, and security of all deployments.

In both 2019 and 2021, Amazon AWS recognized Modyo as the Technology Partner of the Year for Chile and Peru. Modyo was also the first company in Latin America to achieve AWS Independent Software Vendor (ISV) status.

Modyo Connect is offered exclusively within the Amazon AWS cloud. Like Modyo Cloud and Enterprise Cloud, it operates in a high-availability configuration across multiple AWS zones and regions. The implementation utilizes abstract resources and containers, eliminating the need to configure and maintain virtual machines. The deployment of [microservices](/en/architecture/patterns/microservice) is managed using Amazon Elastic Container Services (ECS), with the architecture detailed in the following diagram:

<img src="/assets/img/infrastructure/architecture.png" alt="Modyo Connect Architecture" style="margin-top: 40px;" />

The [microservices](/en/architecture/patterns/microservice) are automatically connected to an internal load balancer, where container instances deployed in [AWS Elastic Container Services (ECS)](https://aws.amazon.com/ecs/) are dynamically registered. They utilize [AWS NAT Gateway](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html) for Internet egress rules, assigning dedicated fixed IP addresses per client. Business services are accessed through configured IPSec VPN links to the client's infrastructure.

Container images are securely stored in AWS Elastic Container Registry (ECR), where security inspections are performed to detect vulnerabilities.

Modyo Connect also features auto-scaling groups to increase the number of container instances based on traffic and demand. The base capacity and elasticity range are defined with each client according to their specific needs.

The multi-zone deployment on Amazon AWS ensures excellent redundancy and availability, with continuous backups in the event of unlikely regional failures.


## Operation

Similar to Modyo Enterprise Cloud, Modyo Connect is a service fully managed by Modyo. A dedicated team of [Site Reliability Engineers (SREs)](https://sre.google), certified in AWS, is responsible for the operation, monitoring, and maintenance of the cloud infrastructure for all clients.

The main responsibilities of the SRE team include:

- Monitoring performance, availability, and security metrics.
- 24/7 incident response.
- Capacity planning.
- Provisioning and de-provisioning of services.
- Infrastructure and security change management.
- Management of source code repositories.
- Security configurations and firewall rules.
- Access control to cloud environments.

:::tip Tip
Service availability levels are determined by a service agreement with each client.
:::



## Security


Modyo implements multiple security controls for its personnel and infrastructure, aligned with the most demanding industry standards, such as [ISO 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001) and [CSA Star](https://cloudsecurityalliance.org/star/).

Modyo Connect is deployed on isolated AWS accounts (Single Tenant) within Modyo Enterprise Cloud, ensuring that no infrastructure component is shared between clients. Within each account, isolated virtual private networks are used per environment, configured with subnets for different infrastructure layers, restricting communication between them through security groups.

### Shared Responsibility Model


Modyo and its clients share responsibility for security and operation. Modyo is responsible for complex infrastructure controls, while the client is responsible for the development and configuration of the platform deployed on the service. The shared responsibility model is detailed in the following diagram:

<img src="/assets/img/infrastructure/shared_responsability_model.png" alt="Modyo Shared Responsibility Model" style="margin-top: 40px;" />

Service users (architects, technical leaders, and developers) are responsible from design to deployment and execution of the solution, being primarily accountable for ensuring the resilience, scalability, and security of what is delivered.

The SRE team, responsible for operating the service, ensures the implementation of the infrastructure, defines security standards, and ensures high availability, following the principles of the [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/).