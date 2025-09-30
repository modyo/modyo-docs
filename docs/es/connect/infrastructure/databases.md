---
search: true
---

# Bases de Datos

Las bases de datos relacionales proporcionan un sistema de almacenamiento (RDBMS) seguro y escalable para los microservicios desplegados en Modyo Connect.

Modyo Connect utiliza [AWS RDS Aurora](https://aws.amazon.com/rds/aurora) para implementar las bases de datos. Compatible con MySQL, Aurora se configura como un clúster de alta disponibilidad donde los datos se replican simultáneamente en múltiples ubicaciones, a diferencia de un despliegue tradicional. 

:::tip Múltiples esquemas
Dentro de una misma base de datos configurada en Modyo Connect, se pueden definir múltiples esquemas lógicamente independientes y con diferentes permisos de acceso. Esta configuración permite reutilizar la misma instancia para diferentes propósitos en microservicios y/o SSO. Es importante considerar que, en este tipo de configuración, el cliente será responsable de seleccionar un tamaño apropiado del motor para controlar la concurrencia de acceso de forma efectiva (pools combinados de conexiones).
:::

## Tipos de Instancias

Existen diferentes [tipos de instancias](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Performance.html) para desplegar una base de datos RDS Aurora. Dependiendo del tipo elegido, se podrá lograr una mejor concurrencia en el número de conexiones simultáneas, como se indica en la siguiente tabla:

| Tipo        |   Conexiones Máximas      |
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

:::warning Pre producción
Para los ambientes pre-productivos se recomienda el uso de instancias tipo "t3".
:::

## Tamaño en Disco y IOPS

El tamaño de disco y los IOPS en RDS Aurora se aprovisionan dinámicamente según el acceso a la información. El tamaño de disco inicial es de 10 GB y se incrementa en bloques similares de forma transparente para el usuario cuando es requerido.

## Backups y Encriptación

Los backups en el servicio se gestionan de forma [automática](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html) mediante snapshots del sistema de almacenamiento, generados diariamente y replicados hacia la región de contingencia.

:::tip Global database
Dependiendo del nivel de suscripción, algunos clientes podrían tener habilitada una réplica activa de la base de datos en la región AWS de contingencia, con el fin de disminuir el RTO y RPO en caso de desastre.
:::

## Acceso a los Datos
Si los clientes requieren acceso directo a la base de datos, la conexión debe realizarse exclusivamente mediante un enlace seguro tipo [VPN](virtual-private-network.html). Modyo no expondrá bases de datos directamente a Internet.

## Pasos de Activación
Para solicitar la creación de una base de datos RDS Aurora en Modyo Connect, se debe crear un ticket en el [Centro de Soporte de Modyo](https://support.modyo.com) especificando la siguiente información:
- Tipo de instancia (db.r6.large recomendado para producción).
- Nombre del esquema.