---
search: true
---

# Modyo Cloud y Enterprise Cloud


## Arquitectura
Modyo realiza la operación de sus sistemas críticos en la nube de Amazon AWS. Con más de 10 años de experiencia en esta plataforma, y en calidad de Technology Partner nivel advanced con ellos, Modyo cuenta con la experiencia necesaria y personal certificado para garantizar la continuidad, performance y seguridad de sus despliegues.


<img src="/assets/img/cloud/partner_badge.png" alt="Partner Badge" style="margin-top: 40px;" />

El año 2019 Modyo fue reconocido por Amazon como el Technology Partner of the Year para Chile y Perú.

Las versiones de Modyo Cloud y Enterprise Cloud operan en una configuración de alta disponibilidad, haciendo uso de al menos dos zonas de disponibilidad en la región de Virginia del Norte (us-east-1). Modyo cuenta además con una región de contingencia ubicada en California (us-west-1). El despliegue de la plataforma se realiza en una configuración de contenedores (compatibles con Docker) que corren sobre el sistema de Amazon EC2 Container Service (ECS).

En el siguiente diagrama se pueden apreciar los componentes principales y su despliegue en modalidad de alta disponibilidad:


<img src="/assets/img/cloud/cloud_deployment.png" alt="Cloud Deployment" style="margin-top: 40px;" />




### Escalabilidad Elástica
Los despliegues de Modyo Cloud y Enterprise Cloud cuentan con grupos de auto escalabilidad para incrementar el número de recursos en la medida que el tráfico y la demanda se incremente. Dependiendo de la duración y naturaleza de los incrementos del uso de recursos el servicio de escalabilidad elástica podría estar sujeto a una tarifa adicional para los clientes.

### Alta Disponibilidad
El despliegue multi zona en Amazon AWS garantiza un excelente nivel de redundancia y disponibilidad para hacer frente a las fallas más comunes que usualmente afectan solo a una zona a la vez. En el caso poco probable que exista un fallo a nivel regional del cual Amazon AWS no entregue un tiempo de resolución aceptable se procederá a activar la región alternativa, ubicada en la costa oeste de Estados Unidos  (us-west-1).

Todos los datos críticos contenidos en AWS RDS Aurora y repositorio de objetos AWS S3 son respaldados frecuentemente a la región alternativa, cada 24 horas para el caso de AWS Aurora y en tiempo real para el caso de AWS S3. 

Modyo posee en la región alternativa copias de las configuraciones y recursos necesarios para restablecer la operación a partir de los archivos de respaldos.

### Seguridad
El despliegue de nube de AWS asegura que cada cliente cuenta con su propia VPC por cada ambiente configurado (producción, certificación, etc...). Dentro de la VPC se despliega sub redes públicas (NAT) y privadas, en donde se despliega los recursos y bases de datos que no son directamente accesibles desde Internet. Adicionalmente, se hace uso de grupos de seguridad y roles AWS IAM para controlar perimetralmente el acceso a los recursos.


## Servicios de Amazon AWS
Los servicios que Modyo utiliza en la nube de Amazon son compatibles con el estándar PCI y SOC.

#### AWS S3
Repositorio de objetos (object storage) de Amazon AWS. En él se almacenan todos los archivos estáticos de la plataforma los cuales, según los permisos configurados, quedan disponibles directamente en la Web o las Content Delivery Networks (CDNs).

#### AWS SES (Simple Email Service)
Servicio utilizado para el envío de correos transaccionales y masivos de la plataforma de forma confiable y escalable. En algunos casos este servicio es ofrecido por Modyo mediante Sendgrid en lugar de SES.

#### AWS ALB (Application Load Balancer)
Servicio de balanceo de carga de Amazon AWS. ALB permite conectarse a los contenedores de una forma limpia y transparente, monitoreando cada uno de ellos y descartando los que posean alguna degradación en su performance. Dependiendo del uso que se les dé los ELB pueden ser públicos o internos. Los balanceadores públicos poseen desplegados además  los certificados SSL y políticas de WAF básicas.

#### AWS EC2 Container Service (ECS)
Servicio de contenedores de Amazon AWS. ECS opera como el scheduler de los contenedores definidos, asegurándose que se respeten los mínimos y máximos definidos para cada elemento y configurando los balanceadores de carga conectados a él. ECS además ofrece un API para realizar despliegues de nuevas versiones de sus contenedores con el mínimo impacto en los sistemas en producción.

#### AWS Elasticache
Servicio de caché de Amazon AWS, ofrecido en dos grandes variaciones: Memcache y Redis. En el caso de Modyo sólo la versión de Redis es utilizada, principalmente por sus capacidades de configurarse en modalidad de cluster de alta disponibilidad.

#### AWS Elasticsearch
Servicio de indexación de contenido de Amazon AWS, implementado mediante Elasticsearch y con la capacidad de configurarse como cluster de alta disponibilidad. 

#### AWS RDS Aurora
Servicio de bases de datos de Amazon AWS, disponible en varias versiones (Postgres, Oracle, SQL Server, MySQL).  RDS Aurora es compatible con MySQL 5.6, y a diferencia de un despliegue tradicional de MySQL, Aurora implementa un cluster de alta disponibilidad en el que los datos almacenados en él son persistidos en 3 zonas de disponibilidad. 

#### AWS WAF
Servicio de firewall aplicativo de Amazon AWS. El Amazon WAF puede ser desplegado en la CDN de Amazon (CloudFront) o directamente sobre los ELB del tipo "application ELB" o ALB. El Amazon WAF posee filtros para los ataques Web más comunes (OWASP Top 10), como inyecciones de SQL o scripts, además de ofrecer la capacidad de definir reglas propias. 

#### AWS SQS
Servicio de colas de mensajería de alto performance y duración que permite a las aplicaciones comunicarse de forma asincrónica.

#### AWS Cloudwatch
Servicio de monitoreo de nube de Amazon AWS. Cloudwatch entrega métricas de alto valor de cada uno de los servicios entregados por Amazon, incluyendo logs y la capacidad de definir alertas. 

#### AWS VPC 
Servicio de redes privadas virtuales de Amazon AWS. Modyo configura una VPC por cliente / ambiente, garantizando que todos los elementos configurados para sus clientes se encuentran separados unos de otros.

#### AWS Certificate Manager
Servicio utilizado para la generación y mantención segura de certificados SSL en los recursos de Amazon. Los certificados generados por esta vía requerirán de una validación del dominio por parte del cliente y una vez emitidos Modyo no poseerá acceso a las llaves de éstos, ni podrán ser utilizados en servicios que sean ofrecidos por Amazon.

#### AWS GuardDuty
Servicio utilizado para la inspección y detección en tiempo real de amenazas de seguridad en la red interna de Amazon AWS.

### Servicios de Otros Proveedores
#### Sendgrid
Servicio utilizado para el envío de correos transaccionales y masivos de la plataforma de forma confiable y escalable. En algunos casos este servicio es ofrecido por Modyo mediante Sendgrid y otros mediante SES.

#### NewRelic
Servicio de monitoreo en la nube encargado de las métricas aplicativas, SLAs y stack tecnológico. NewRelic posee un sistema interno de alertas y canales de notificación que permiten definir métricas generales y particulares según la necesidad de cada cliente.  NewRelic de Modyo está integrado a PagerDuty.

#### Pingdom
Servicio de monitoreo en la nube que revisa y controla el uptime de los sitios gestionados por Modyo. Pingdom revisa la salud y tiempos de respuesta de los sitios desde múltiples ubicaciones geográficas y está integrado a PagerDuty.

#### PagerDuty
Servicio de alertas que gestiona los turnos on call de Modyo. PagerDuty es el servicio encargado de asegurar que la rotación de turnos y escalamiento se cumpla, además de gestionar casos especiales como ausencias o indisponibilidades de los ingenieros de operaciones.



## Operación y Monitoreo en la Nube

### DevOps
La Plataforma Modyo se encuentra bajo un ciclo de desarrollo muy activo por lo que recibe continuamente mejoras y nuevas funcionalidades. Todas las versiones incluyen un sistema de despliegue que permite realizar actualizaciones de forma relativamente sencilla, sin requerir de downtimes en la mayoría de los casos.

Los sistemas operativos y componentes de software de terceros son actualizados continuamente para garantizar la oportuna corrección de cualquier problema detectado. Se elige, dentro de lo posible, solo versiones estables y probadas de cada componente.

En el caso de la versión Modyo Enterprise On Premise la actualización de cualquiera de sus componentes se realiza en coordinación con cada cliente.

### Aprovisionamiento Elástico de Recursos
Las versiones Cloud de la Plataforma Modyo cuentan con un mecanismo de aprovisionamiento dinámico de recursos, el cual permite que frente a determinadas circunstancias, como un aumento inesperado en la carga o la falla en un servidor, se inicien automáticamente nuevas instancias del servidor afectado.

En el caso de la versión Modyo Enterprise On Premise, una configuración similar puede lograrse con el uso de herramientas de contenedores abiertas como Docker Swarm, Kubernetes o con soporte comercial como RedHat OpenShift o IBM Bluemix local.



### Redundancia Geográfica
Las versiones Cloud de la plataforma se configuran de forma redundante entre, al menos, dos Zonas de Amazon AWS. Cada Zona posee servicios independientes de conectividad y poder, pero se encuentran cercanas entre sí para minimizar la latencia entre ellas.

### Respaldos y Recuperación
Las versiones Modyo Cloud y Modyo Enterprise Cloud son configuradas con una política de respaldos diarios automáticos a nivel de base de datos y repositorios de objetos, los cuales son almacenados en un repositorio privado de Amazon S3. 

Para el caso de las bases de datos configuradas con Amazon RDS, se utiliza el mecanismo interno de respaldo mediante snapshots los cuales son generados de forma diaria en horario de bajo tráfico y almacenados con una retención de 10 días. 

Amazon RDS además ofrece la funcionalidad de _point in time recovery_ para recuperar la base de datos en una hora en específico dentro del backup.

## Monitoreo
### Alertas 24x7
En las versiones Cloud de la plataforma, todos los sistemas de monitoreo están configurados para enviar alertas telefónicas y SMS a los ingenieros encargados de la operación. Existe una planificación mensual para que siempre exista un primer, segundo y tercer contacto para realizar tareas de emergencia. 

### Salud de Servidores y Aplicación
En las versiones Cloud de la plataforma, se monitorean parámetros comunes como las variaciones de uso memoria RAM, carga en CPU y operaciones I/O en discos y red. Además se monitorea la aplicación completa con un profiler que entrega datos en tiempo real acerca de comportamientos inusuales o errores. 

### Tiempo de Carga
En las versiones Cloud de la plataforma se monitorea el tiempo de carga las páginas generadas como una métrica de satisfacción de los usuarios que las utilizan. La medición se realiza utilizando el método Apdex. Si los valores del Apdex calculado no son satisfactorios, una alerta es generada automáticamente. 

### Uptime
En las versiones Cloud de la plataforma se monitorea desde diversas ubicaciones alrededor del mundo la disponibilidad de esta realizando pings permanentes y periódicos. Un fallo en un chequeo de uptime para algún dominio monitoreado genera alertas de máxima prioridad.

## Soporte
Modyo cuenta con un equipo dedicado de operaciones compuesto ingenieros en el rol de Site Reliability Engineers (SREs) los cuáles poseen conocimiento y experiencia en múltiples plataformas tecnológicas de redes, seguridad, nubes, sistemas operativos, automatización y monitoreo de sistemas. Los SREs trabajan en un sistema de turnos on call 24x7. En cada turno siempre existe un ingeniero primario y secundario de respaldo, ambos con la posibilidad de escalar internamente a expertos en temas específicos en caso de ser requerido.

El equipo de operaciones de Modyo brinda apoyo de forma transversal a todas las áreas de la empresa en los proyectos e iniciativas que impliquen la preparación, despliegue, monitoreo, seguridad, auditoría y mejoras de rendimiento de sus proyectos e iniciativas tanto en la nube como en los despliegues On Premise de los clientes que posean un contrato de servicios de soporte adicional al incluido como parte de la licencia de software de Modyo.
