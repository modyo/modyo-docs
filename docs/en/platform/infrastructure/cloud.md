---
search: true
---

# Cloud and Enterprise Cloud


## Architecture
Modyo performs its critical systems in the Amazon AWS cloud. With more than 10 years of experience in this platform, and as an advanced technology partner level with them, Modyo has the necessary experience and certified personnel to ensure the continuity, performance and security of its deployments.


<img src="/assets/img/cloud/partner_badge.png" style="margin-top: 40px;" />

In 2019 Modyo was recognized by Amazon as the Technology Partner of the Year for Chile and Peru.

Modyo Cloud and Enterprise Cloud versions operate in a highly available configuration, using at least two Availability Zones in the North Virginia region (us-east-1). Modyo also has a contingency region located in California (us-west-1). Platform deployment is done in a container configuration (Docker compliant) that run over the Amazon EC2 Container Service (ECS) system.

The following diagram shows the main components and their deployment in high availability mode:


<img src="/assets/img/cloud/cloud_deployment.png" style="margin-top: 40px;" />




### Elastic Scalability
Modyo Cloud and Enterprise Cloud deployments have self-scalable groups to increase the number of resources as traffic and demand increases. Depending on the duration and nature of the resource usage increases, the Elastic Scalability Service may be subject to an additional fee for customers.

### High Availability
Multi-zone deployment on Amazon AWS ensures an excellent level of redundancy and availability to address the most common failures that usually affect only one zone at a time. In the unlikely event that there is a regional failure where Amazon AWS does not deliver an acceptable resolution time, the alternate region, located on the west coast of the United States (us-west-1), will be activated.

All critical data contained in AWS RDS Aurora and AWS S3 object repository is frequently supported to the alternate region, every 24 hours for AWS Aurora, and real-time for AWS S3.

Modyo has copies of the settings and resources required to restore the operation from the backup files in the alternate region.

### Security
AWS Cloud Deployment ensures that each customer has its own VPC for each configured environment (production, certification, etc...). Within the VPC, public (NAT) and private sub networks are deployed, where resources and databases that are not directly accessible from the Internet are deployed. Additionally, AWS IAM security groups and roles are used to perimeter access to resources.


## Amazon AWS Services
The services Modyo uses in the Amazon cloud support both the PCI and SOC standard.

#### AWS S3
Amazon AWS object storage. It stores all static platform files which, depending on the permissions configured, are available directly on the Web or Content Delivery Networks (CDNs).

#### AWS SES (Simple Email Service)
Service used to send transactional and massive mail from the platform reliably and scalable. In some cases this service is offered by Modyo via Sendgrid instead of SES.

#### AWS ALB (Application Load Balancer)
Amazon AWS Load Balancing Service. ALB allows you to connect to containers in a clean and transparent way, monitoring each container and discarding those that have some degradation in their performance. Depending on the use that ELBs are given to them, they can be public or internal. Public balancers also have SSL certificates and basic WAF policies deployed.

#### AWS EC2 Container Service (ECS)
Servicio de contenedores de Amazon AWS. Amazon AWS Container Service ECS operates as the scheduler of defined containers, ensuring that the minimum and maximum defined for each item are respected and configuring the load balancers connected to it. ECS also offers an API for deploying new versions of your containers with minimal impact on systems in production.

#### AWS Elasticache
Amazon AWS Cache Service, offered in two large variations: Memcache and Redis. Memcache y Redis. In the case of Modyo only the Redis version is used, mainly for its capabilities to be configured in high-availability cluster mode.

#### AWS Elasticsearch
Amazon AWS Content Indexing Service, deployed using Elasticsearch and with the ability to be configured as a highly available cluster.

#### AWS RDS Aurora
Amazon AWS Database Service, available in multiple versions (Postgres, Oracle, SQL Server, MySQL).  RDS Aurora supports MySQL 5.6, and unlike a traditional MySQL deployment, Aurora implements a high-availability cluster in which data stored in it is persisted in 3 Availability Zones.

#### AWS WAF
Servicio de firewall aplicativo de Amazon AWS. Amazon AWS Application Firewall Service Amazon WAF can be deployed to the Amazon CDN (CloudFront) or directly onto ELBs of the type "ELB" or ALB. Amazon WAF has filters for the most common web attacks (OWASP Top 10), such as SQL injections or scripts, and offers the ability to define your own rules.

#### AWS SQS
High-performance, long-lasting messaging queue service that allows applications to communicate asynchronously.

#### AWS Cloudwatch
Servicio de monitoreo de nube de Amazon AWS. Amazon AWS Cloud Monitoring Service Cloudwatch delivers high-value metrics for each of the services delivered by Amazon, including logs and the ability to define alerts.

#### AWS VPC
Amazon AWS Virtual Private Networks Service. Modyo configures one VPC per client/environment, ensuring that all items configured for its customers are separate from each other.

#### AWS Certificate Manager
Service used for the secure generation and maintenance of SSL certificates on Amazon resources. Certificates generated by this route will require a validation of the domain by the customer and once issued Modyo will not have access to these keys, nor can they be used in services offered by Amazon.

#### AWS GuardDuty
Service used for real-time inspection and detection of security threats on the Amazon AWS internal network.

### Services from Other Providers
#### Sendgrid
Service used to send transactional and massive mail from the platform reliably and scalable. In some cases this service is offered by Modyo via Sendgrid and others through SES.

#### NewRelic
Cloud monitoring service responsible for application metrics, SLAs and technological stack. NewRelic has an internal system of alerts and notification channels that allow you to define general and particular metrics according to the needs of each client.  Modyo's NewRelic is integrated into PagerDuty.

#### Pingdom
Cloud monitoring service that reviews and controls the uptime of sites managed by Modyo. Pingdom reviews site health and response times from multiple geographic locations and is integrated into PagerDuty.

#### PagerDuty
Alert service that manages Modyo's on-call shifts. PagerDuty is the service responsible for ensuring that shift rotation and escalation are met, as well as handling special cases such as absences or outages of operations engineers.



## Operation and Monitoring in the Cloud

### DevOps
The Modyo Platform is under a very active development cycle so it continuously receives improvements and new features. All versions include a deployment system that allows you to perform updates relatively easily, without requiring downtimes in most cases.

Third-party operating systems and software components are continuously updated to ensure timely correction of any detected issues. Only stable and tested versions of each component are chosen as far as possible.

In the case of the Modyo Enterprise On Premise version, any of its components is updated in coordination with each customer.

### Elastic Resource Provisioning
Cloud versions of the Modyo Platform have a dynamic resource provisioning mechanism, which allows new instances of the affected server to start automatically in the face of certain circumstances, such as an unexpected increase in load or failure on a server.

For the Modyo Enterprise On Premise version, a similar configuration can be achieved with the use of open container tools such as Docker Swarm, Kubernetes or with commercial support such as RedHat OpenShift or local IBM Bluemix.



### Geographic Redundancy
Cloud versions of the platform are configured redundantly between at least two Amazon AWS Zones. Each Zone has separate connectivity and power services, but are close to each other to minimize latency between them.

### Backups and Recovery
The Modyo Cloud and Modyo Enterprise Cloud versions are configured with an automatic daily backup policy at the database level and object repositories, which are stored in an Amazon S3 private repository.

For databases configured with Amazon RDS, the internal snapshot backup mechanism is used which are generated daily during low traffic hours and stored with a 10-day retention.

Amazon RDS also provides _point in time recovery_ functionality to recover the database at a specific time within the backup.

## Monitoring
### Alerts 24x7
In Cloud versions of the platform, all monitoring systems are configured to send telephone and SMS alerts to the engineers in charge of the operation. There is a monthly planning so that there is always a first, second and third contact to perform emergency tasks.

### Server Health and Application
In Cloud versions of the platform, common parameters such as RAM usage variations, CPU load, and I/O operations on disks and network are monitored. In addition, the entire application is monitored with a profiler that delivers real-time data about unusual behaviors or errors.

### Charging Time
Cloud versions of the platform monitor load time generated pages as a satisfaction metric for users using them. Measurement is performed using the Apdex method. If the values of the calculated Apdex are not satisfactory, an alert is generated automatically.

### Uptime
In the Cloud versions of the platform, the availability of this platform is monitored from various locations around the world by performing permanent and periodic pings. A failure in an uptime check for some monitored domain generates high priority alerts.

## Bracket
Modyo has a dedicated operations team composed engineers in the role of Site Reliability Engineers (SRes) who have knowledge and experience in multiple technology platforms of networking, security, clouds, operating systems, automation and system monitoring. SRs work on a 24x7 on-call shift system. In each shift there is always a primary and secondary backup engineer, both with the ability to scale internally to experts on specific topics if required.

Modyo's operations team provides cross-cutting support to all areas of the company in projects and initiatives involving the preparation, deployment, monitoring, security, auditing, and performance improvements of their projects and initiatives both in the cloud and on premise deployments of contract customers additional support services included as part of Modyo's software license.
