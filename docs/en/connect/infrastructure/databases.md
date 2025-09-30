---
search: true
---

# Databases

Relational databases provide a secure and scalable relational database storage system (RDBMS) for microservices deployed in Modyo Connect.

Modyo Connect uses [AWS RDS Aurora](https://aws.amazon.com/rds/aurora) to implement databases. Compatible with MySQL, Aurora is configured as a high-availability cluster where data is replicated simultaneously in multiple locations, unlike a traditional deployment.

:::tip Multiple schemas
Within a single database configured in Modyo Connect, multiple logically independent schemas with different access permissions can be defined. This configuration allows reusing the same instance for different purposes in microservices and/or SSO. It is important to consider that, in this type of configuration, the client will be responsible for selecting an appropriate engine size to effectively control access concurrency (combined connection pools).
:::

## Instance Types

There are different [instance types](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Performance.html) to deploy an Aurora RDS database. Depending on the type chosen, better concurrency in the number of simultaneous connections can be achieved, as shown in the following table:

| Type        |   Maximum Connections      |
| ------------- |:-----:|
|db.t3.small|45|
|db.t3.medium|90|
|db.r6.large|1000|
|db.r6.xlarge|2000|
|db.r6.2xlarge|3000|
|db.r6.4xlarge|4000|
|db.r6.8xlarge|5000|
|db.r6.12xlarge|6000|
|db.r6.16xlarge|6000|

:::warning Pre-production
For pre-production environments, the use of "t3" type instances is recommended.
:::

## Disk Size and IOPS

Disk size and IOPS in RDS Aurora are dynamically provisioned according to how data is accessed. The initial disk size is 10 GB and is increased in similar blocks transparently to the user when required.

## Backups and Encryption

Backups in the service are managed [automatically](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html) through snapshots of the storage system, generated daily and replicated to the contingency region.

:::tip Global database
Depending on the subscription level, some clients may have an active database replica enabled in the contingency AWS region, in order to reduce RTO and RPO in case of disaster.
:::

## Data Access
If clients require direct access to the database, the connection must be made exclusively through a secure [VPN](virtual-private-network.html) link. Modyo will not expose databases directly to the Internet.

## Activation Steps
To request the creation of an Aurora RDS database in Modyo Connect, a ticket must be created in the [Modyo Support Center](https://support.modyo.com) specifying the following information:
- Instance type (db.r6.large recommended for production).
- Schema name.