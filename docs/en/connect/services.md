---
search: true
---

# Modyo Cloud and Enterprise Cloud


## Architecture
Modyo operates its critical systems in the Amazon AWS cloud. With more than 10 years of experience in this platform, and as an advanced Technology Partner with them, Modyo has the necessary experience and certified staff to ensure the continuity, performance and security of its deployments.


<img src="/assets/img/cloud/partner_badge.png" alt="Partner Badge" style="margin-top: 40px;" />

In 2019 Modyo was recognized by Amazon as the Technology Partner of the Year for Chile and Peru.

The Modyo Cloud and Enterprise Cloud versions operate in a high availability configuration, making use of at least two Availability Zones in the North Virginia region (us-east-1). Modyo also has a contingency region located in California (us-west-1). The platform is deployed in a container configuration (Docker compatible) running on the Amazon EC2 Container Service (ECS) system.

The following diagram shows the main components and their deployment in high availability mode:


<img src="/assets/img/cloud/cloud_deployment.png" alt="Cloud Deployment" style="margin-top: 40px;" />




### Elastic Scalability
Modyo Cloud and Enterprise Cloud deployments feature self-scalability groups to increase the number of resources as traffic and demand increase. Depending on the duration and nature of the resource usage increases, the elastic scalability service may be subject to an additional fee for customers.

### High Availability
Multi-zone deployment on Amazon AWS ensures an excellent level of redundancy and availability to address the most common failures that usually affect only one zone at a time. In the unlikely event that there is a regional failure in which Amazon AWS does not deliver an acceptable resolution time, the alternate region, located on the west coast of the United States (us-west-1), will be activated.

All critical data contained in AWS RDS Aurora and AWS S3 object repository is frequently backed up to the alternate region, every 24 hours for AWS Aurora and in real time for AWS S3. 

Modyo has copies of the settings and resources needed to restore operation from backup files in the alternate region.

### Safety
The AWS cloud deployment ensures that each customer has their own VPC for each configured environment (production, certification, etc...). Within the VPC, public and private sub-networks (NAT) are deployed, where resources and databases that are not directly accessible from the Internet are deployed. Additionally, AWS IAM security groups and roles are used to perimeter control access to resources.


## Amazon AWS Services
The services Modyo uses in the Amazon cloud support the PCI and SOC standard.

#### AWS S3
Amazon AWS object storage. It stores all static files on the platform which, depending on the configured permissions, are available directly on the Web or Content Delivery Networks (CDNs).

#### AWS SES (Simple Email Service)
Service used to send transactional and mass mail from the platform in a reliable and scalable manner. In some cases this service is offered by Modyo via Sendgrid instead of SES.

#### AWS ALB (Application Load Balancer)
Amazon AWS Load Balancing Service. ALB allows you to connect to containers in a clean and transparent way, monitoring each container and discarding those with some degradation in their performance. Depending on how they are used, ELBs can be public or internal. Public balancers also have SSL certificates and basic WAF policies deployed.

#### AWS EC2 Container Service (ECS)
Amazon AWS Container Service. ECS operates as the scheduler for defined containers, ensuring that the minimum and maximum defined for each item are respected and configuring the load balancers connected to it. ECS also offers an API for deploying new versions of its containers with minimal impact on systems in production.

#### AWS Elasticache
Amazon AWS Cache Service, offered in two major variations: Memcache and Redis. In the case of Modyo only the version of Redis is used, mainly because of its capabilities to be configured in a highly available cluster mode.

#### AWS Elasticsearch
Amazon AWS Content Indexing Service, deployed using Elasticsearch and with the ability to be configured as a highly available cluster. 

#### AWS RDS Aurora
Amazon AWS Database Service, available in multiple versions (Postgres, Oracle, SQL Server, MySQL). RDS Aurora is compatible with MySQL 5.6, and unlike a traditional MySQL deployment, Aurora implements a high availability cluster in which the data stored in it is persisted in 3 availability zones. 

#### AWS WAF
Amazon AWS application firewall service. Amazon WAF can be deployed on the Amazon CDN (CloudFront) or directly on ELBs of the “application ELB” or ALB type. Amazon WAF has filters for the most common web attacks (OWASP Top 10), such as SQL injections or scripts, as well as offering the ability to define your own rules. 

#### AWS SQS
High-performance, long-lasting messaging queue service that allows applications to communicate asynchronously.

#### AWS Cloudwatch
Amazon AWS cloud monitoring service. Cloudwatch delivers high-value metrics for each of the services delivered by Amazon, including logs and the ability to define alerts. 

#### AWS VPC 
Amazon AWS Virtual Private Networking Service. Modyo sets up one VPC per customer/environment, ensuring that all items configured for his customers are separate from each other.

#### AWS Certificate Manager
Service used for secure generation and maintenance of SSL certificates on Amazon resources. Certificates generated by this way will require a validation of the domain by the customer and once issued Modyo will not have access to the keys of them, nor may they be used in services offered by Amazon.

#### AWS GuardDuty
Service used for real-time inspection and detection of security threats on the Amazon AWS internal network.

### Other Provider Services
#### Sendgrid
Service used to send transactional and mass mail from the platform in a reliable and scalable manner. In some cases this service is offered by Modyo via Sendgrid and others via SES.

#### NewRelic
Cloud monitoring service responsible for application metrics, SLAs and technology stack. NewRelic has an internal system of alerts and notification channels that allow you to define general and particular metrics according to the needs of each customer. Modyo's NewRelic is integrated with PagerDuty.

#### Pingdom
A cloud monitoring service that reviews and controls the uptime of Modyo managed sites. Pingdom reviews site health and response times from multiple geographic locations and is integrated with PagerDuty.

#### PagerDuty
Alert service that manages Modyo's on-call shifts. PagerDuty is the service responsible for ensuring that shift rotation and escalation are met, in addition to handling special cases such as absences or outages of operations engineers.



## Operation and Monitoring in the Cloud

### DevOps
The Modyo Platform is under a very active development cycle so it continuously receives improvements and new features. All versions include a deployment system that allows for relatively simple upgrades, without requiring downtimes in most cases.

Third-party operating systems and software components are continuously updated to ensure timely correction of any detected issues. Only stable and tested versions of each component are chosen as far as possible.

In the case of the Modyo Enterprise On Premise version, the update of any of its components is carried out in coordination with each customer.

### Elastic Resource Provisioning
Cloud versions of the Modyo Platform have a dynamic resource provisioning mechanism, which allows new instances of the affected server to start automatically in certain circumstances, such as an unexpected increase in load or failure on a server.

For the Modyo Enterprise On Premise version, a similar configuration can be achieved with the use of open container tools such as Docker Swarm, Kubernetes or with commercial support such as RedHat OpenShift or IBM Bluemix local.



### Geographic Redundancy
Cloud versions of the platform are redundantly configured between at least two Amazon AWS Zones. Each Zone has independent connectivity and power services, but they are close to each other to minimize latency between them.

### Backup and Recovery
The Modyo Cloud and Modyo Enterprise Cloud versions are configured with a database-level automatic daily backup policy and object repositories, which are stored in a private Amazon S3 repository. 

For databases configured with Amazon RDS, the internal backup mechanism is used using snapshots which are generated daily during low traffic hours and stored with a 10-day hold. 

Amazon RDS also offers the functionality of _point in time recovery_ to recover the database within a specific time within the backup.

## Monitoring
### 24x7 Alerts
In Cloud versions of the platform, all monitoring systems are configured to send telephone and SMS alerts to the engineers responsible for the operation. There is monthly planning so that there is always a first, second and third contact for emergency tasks. 

### Server and Application Health
In Cloud versions of the platform, common parameters such as variations in RAM usage, CPU load, and I/O operations on disks and network are monitored. In addition, the entire application is monitored with a profiler that delivers real-time data about unusual behaviors or errors. 

### Charging Time
Cloud versions of the platform monitor the load time generated pages as a metric for user satisfaction using them. The measurement is performed using the Apdex method. If the calculated Apdex values are not satisfactory, an alert is automatically generated. 

### Uptime
Cloud versions of the platform monitor the availability of the platform by performing permanent and periodic pings from various locations around the world. A failure in an uptime check for a monitored domain generates top priority alerts.

## Bracket
Modyo has a dedicated operations team composed of engineers in the role of Site Reliability Engineers (SREs) who have knowledge and experience in multiple technology platforms of networking, security, clouds, operating systems, automation and system monitoring. The SRs work on a 24x7 on-call shift system. In each shift there is always a primary and secondary backup engineer, both with the possibility of internally scaling to specific subject matter experts if required.

Modyo's operations team provides cross-sectional support to all areas of the enterprise in projects and initiatives involving the preparation, deployment, monitoring, security, auditing and performance improvements of their projects and initiatives both in the cloud and on premise deployments of customers with a contract of additional support services to the included as part of the Modyo software license.
