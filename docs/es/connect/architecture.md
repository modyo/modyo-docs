---
search: true
---

# Arquitectura

Modyo opera sus sistemas críticos en la nube de [Amazon AWS](https://aws.amazon.com), con más de 12 años de experiencia como Advanced Technology Partner. Esta trayectoria, respaldada por personal certificado, garantiza la continuidad, rendimiento y seguridad de los despliegues.

En 2019 y 2021, Amazon AWS reconoció a Modyo como el Technology Partner of the Year para Chile y Perú. Modyo fue la primera empresa en América Latina en convertirse en Independent Software Vendor (ISV) de AWS.

Modyo Connect se ofrece exclusivamente en la nube de Amazon AWS y, al igual que Modyo Cloud y Enterprise Cloud, opera en alta disponibilidad sobre múltiples zonas y regiones de AWS. La implementación utiliza recursos abstractos y contenedores, eliminando la necesidad de configurar y mantener máquinas virtuales. El despliegue de [microservicios](/es/architecture/patterns/microservice) se realiza utilizando Amazon Elastic Container Services (ECS), con una arquitectura detallada en el siguiente diagrama:

<img src="/assets/img/infrastructure/architecture.png" alt="Modyo Connect Architecture" style="margin-top: 40px;" />

Los [microservicios](/es/architecture/patterns/microservice) se conectan automáticamente a un balanceador de carga interno, donde se registran dinámicamente las instancias de contenedor desplegadas en [AWS Elastic Container Services (ECS)](https://aws.amazon.com/ecs/). Utilizan [AWS NAT Gateway](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html) para reglas de egreso de tráfico a Internet, asignando IPs fijas dedicadas por cliente. Los servicios de negocio se acceden mediante enlaces VPN IPSec configurados hacia la infraestructura del cliente.

Las imágenes de los contenedores se almacenan de forma segura en AWS Elastic Container Registry (ECR), donde se realizan inspecciones de seguridad para detectar vulnerabilidades.

Modyo Connect cuenta con grupos de autoescalabilidad para aumentar el número de instancias de contenedores según el tráfico y la demanda. La capacidad base y el rango de elasticidad se definen con cada cliente según sus necesidades.

El despliegue multizona en Amazon AWS garantiza una redundancia y disponibilidad excelentes, con respaldos continuos en caso de fallos regionales poco probables.


## Operación

Al igual que Modyo Enterprise Cloud, Modyo Connect es un servicio totalmente gestionado por Modyo. Un equipo dedicado de [Site Reliability Engineers (SREs)](https://sre.google) certificados en AWS se encarga de la operación, monitoreo y mantenimiento de la infraestructura en la nube para todos los clientes.

Las principales responsabilidades del equipo de SREs son:

- Monitoreo de métricas de rendimiento, disponibilidad y seguridad.
- Respuesta a incidentes 24/7.
- Planificación de capacidad.
- Provisión y baja de servicios.
- Gestión de cambios de infraestructura y seguridad.
- Gestión de repositorios de código fuente.
- Configuraciones de seguridad y reglas de firewall.
- Control de acceso a los ambientes de nube.

:::tip Tip
Los niveles de disponibilidad del servicio se determinan mediante un acuerdo de servicio con cada cliente.
:::



## Seguridad

Modyo implementa múltiples controles de seguridad para su personal e infraestructura, alineados con los estándares más exigentes de la industria, como [ISO 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001) y [CSA Star](https://cloudsecurityalliance.org/star/).

Modyo Connect se despliega sobre cuentas aisladas de AWS (Single Tenant) de Modyo Enterprise Cloud, asegurando que ningún componente de infraestructura se comparta entre clientes. Dentro de cada cuenta, se utilizan redes privadas virtuales aisladas por ambiente, configuradas con subredes para diferentes capas de infraestructura, restringiendo la comunicación entre ellas mediante grupos de seguridad.

### Modelo de Responsabilidad Compartida

Modyo y sus clientes comparten la responsabilidad de la seguridad y operación. Modyo se encarga de los controles complejos de infraestructura, mientras que el cliente es responsable del desarrollo y configuración de la plataforma desplegada sobre el servicio. El modelo de responsabilidad compartida se detalla en el siguiente diagrama:

<img src="/assets/img/infrastructure/shared_responsability_model.png" alt="Modyo Shared Responsibility Model" style="margin-top: 40px;" />

Los usuarios del servicio (arquitectos, líderes técnicos y desarrolladores) son responsables desde el diseño hasta el despliegue y ejecución de la solución, siendo los principales responsables de asegurar la resiliencia, escalabilidad y seguridad de lo entregado.

El equipo de SRE, encargado de operar el servicio, garantiza la implementación de la infraestructura, define estándares de seguridad y asegura la alta disponibilidad, siguiendo los principios del [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/).