---
search: true
---

# Arquitectura

Modyo opera sus sistemas críticos en la nube de [Amazon AWS](https://aws.amazon.com). Con más de 12 años de experiencia en esta plataforma, y en calidad de Advanced Technology Partner, Modyo cuenta con la experiencia necesaria y personal certificado para asegurar la continuidad, performance, y seguridad de sus despliegues.

<img src="/assets/img/cloud/partner_badge.png" alt="Partner Badge" style="margin-top: 40px;" />

En los años 2019 y 2021, Modyo fue reconocido por Amazon AWS como el Technology Partner of the Year para Chile y Perú. Además, Modyo fue la primera empresa en América Latina en convertirse en Independent Software Vendor (ISV) de AWS.

Modyo Connect se ofrece de forma exclusiva en la nube de Amazon AWS y, al igual que Modyo Cloud y Enterprise Cloud, opera en una configuración de alta disponibilidad sobre múltiples zonas de disponibilidad y regiones de AWS. Utilizando recursos abstractos y contenedores en la nube, se evita la necesidad de configurar y mantener máquinas virtuales de cualquier tipo. Para el despliegue de [microservicios](resources/microservices.md), se utiliza la plataforma de contenedores Amazon Elastic Container Services (ECS) en conjunto con herramientas de automatización y control de configuración, siguiendo una arquitectura de referencia como la que se aprecia en el siguiente diagrama:

<img src="/assets/img/infrastructure/architecture.png" alt="Modyo Connect Architecture" style="margin-top: 40px;" />

Los [microservicios](resources/microservices.md) se conectan de forma automática a un balanceador de carga interno, en el cual se registran dinámicamente las instancias de contenedor desplegadas en [AWS Elastic Container Services (ECS)](https://aws.amazon.com/ecs/). Los [microservicios](resources/microservices.md) poseen reglas de egreso de tráfico hacia Internet utilizando [AWS NAT Gateway](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html) el cual entrega direcciones IPs fijas dedicadas para cada cliente. Los servicios de negocio se acceden mediante enlaces VPN IPSec configurados hacia la infraestructura del cliente.

Las imágenes de los contenedores se almacenan de forma segura en el repositorio de AWS Elastic Container Repository (ECR), sobre el cual se ejecutan inspecciones de seguridad para detectar cualquier vulnerabilidad presente en las imágenes almacenadas en él.

Modyo Connect además cuenta con grupos de auto escalabilidad para aumentar el número de instancias de contenedores en la medida que el tráfico y la demanda se incrementa. Para ello, una capacidad mínima de base y un rango de acción de elasticidad se definen con cada cliente de acuerdo a sus necesidades particulares.

El despliegue multi zona en Amazon AWS garantiza un excelente nivel de redundancia y disponibilidad para hacer frente a las fallas más comunes que usualmente pueden afectar al ambiente. En el caso poco probable que exista un fallo a nivel regional del cual Amazon AWS no entregue un tiempo de resolución aceptable, se cuenta con una región de procesamiento alternativa, en la cual se mantienen respaldos contínuos de todos los datos.

## Operación

Al igual que Modyo Enterprise Cloud, Modyo Connect es un servicio totalmente manejado por Modyo, quien es el responsable de toda la gestión de configuración y control de la infraestructura de la nube. Los niveles de disponibilidad del servicio quedan determinados por medio de un acuerdo de servicio con cada cliente.

Para la entrega del servicio, Modyo cuenta con un equipo dedicado de [Site Reliability Engineers (SREs)](https://sre.google) certificados en AWS, quienes son los responsables de asegurar la correcta operación de los sistemas en la nube para todos sus clientes. Las principales responsabilidades del equipo de SREs son:

- Monitoreo de métricas de rendimiento, disponibilidad y seguridad
- Respuesta a incidentes 24x7
- Planificación de capacidad
- Provisión y baja de servicios
- Gestión de cambios de infraestructura y seguridad
- Gestión de repositorios de códigos fuentes
- Configuraciones de seguridad y reglas de firewall
- Control de acceso a los ambientes de nube

## Seguridad

Modyo implementa múltiples controles de seguridad que abarcan tanto al personal como a la infraestructura. Los controles de seguridad de Modyo se encuentran alineados con los estándares más exigentes de la industria, tales como [ISO 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001) y [CSA Star](https://cloudsecurityalliance.org/star/). 

Modyo Connect se despliega sobre las mismas cuentas de AWS aisladas (Single Tenant) de Modyo Enterprise Cloud, las cuales aseguran que ningún componente de infraestructura se comparte entre clientes. Dentro de cada cuenta, se utilizan redes privadas virtuales aisladas para cada ambiente dentro de las cuales se configuran con subredes para las diferentes capas de infraestructura, restringiendo la comunicación entre ellas mediante grupos de seguridad. 

### Modelo de Responsabilidad Compartida

Modyo define una matriz de responsabilidad compartida en conjunto con sus clientes en la que la responsabilidad por los controles complejos de infraestructura quedan del lado de Modyo y el cliente es responsable por los desarrollos y configuraciones de la plataforma que se despliegan sobre el servicio, como se detalla en el siguiente diagrama.

<img src="/assets/img/infrastructure/shared_responsability_model.png" alt="Modyo Shared Responsibility Model" style="margin-top: 40px;" />

Desde el punto de vista de los usuarios del servicio, los arquitectos, líderes técnicos, y desarrolladores serán responsables desde el diseño de la solución, hasta el despliegue y ejecución de esta, por lo que ellos son los primeros responsables de asegurar la resiliencia, escalabilidad, y seguridad de lo entregado.

Desde el punto de vista del equipo de SRE que opera el servicio, ellos serán los responsables por la implementación de la infraestructura del servicio ofrecido, la definición de los estándares y configuraciones de seguridad y la alta disponibilidad del mismo servicio. Con esto se asegura que se cumplan los principios de [AWS Well Architected Framework](https://aws.amazon.com/architecture/well-architected/).