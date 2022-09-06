---
search: true
---
# ¿Qué es Modyo Connect?
Modyo Connect es un servicio manejado de infraestructura y devops sobre la nube de Amazon AWS exclusivo para clientes de Modyo Enterprise Cloud. Modyo Connect está diseñado para organizaciones que requieran implementar una capa segura y escalable de APIs de integración, que permitan alimentar datos hacia los Micro Frontends desplegados sobre Modyo.

Modyo Connect permite la implementación de servicios como: Single Sign On, API Gateway, infraestructura de contenedores para microservicios, bases de datos, colas de mensajería, repositorios de objetos, entre otros componentes pensados para dar cobertura a todos los requerimientos comunes presentes en una iniciativa compleja de integración.

Modyo Connect nace frente a la necesidad de algunos clientes de contar con una capa manejada de servicios de gestión de APIs que se integrara de forma segura a sus sistemas de negocio. El servicio es completamente opcional y, en muchos casos, no es requerido ya que el mismo cliente puede contar con su propia arquitectura de APIs y Single Sign On a la cual los Micro Frontends desarrollados sobre Modyo puedan integrarse.

El siguiente diagrama corresponde a la arquitectura de referencia de implementación de Modyo. Los servicios manejados de Modyo Connect están a la derecha en el diagrama y se encuentran completamente desacoplados de la plataforma, por lo que pueden ser reemplazados por APIs que ya posea el cliente o que sean desarrolladas por un tercero.

<img src="/assets/img/infrastructure/reference_architecture.png" alt="Partner Badge" style="margin-top: 40px;" />

Las APIs desarrolladas en Modyo Connect son consumidas directamente por el usuario final desde su navegador Web. La plataforma Modyo no toma parte en la comunicación con el API, evitando con ello que la información sensible transite por ella. Con esta arquitectura se logra desacoplar completamente la presentación de la lógica de negocio, estableciendo responsabilidades delimitadas en sistemas separados, incrementando con ello la modularidad y eficiencia de los desarrollos.

### Funcionalidades
El servicio manejado de Modyo Connect contempla las siguientes funcionalidades:
- Repositorios seguros de códigos fuente
- Pipelines de automatización para Micro Frontends (Widgets) y Microservicios
- Plataforma de despliegue de contenedores
- Ambientes productivos y pre-productivos
- Gestión de centralizada de bitácoras de logs
- Gestión de APIs mediante un API Gateway
- Gestión de Firewall Aplicativo (WAF)
- Certificados TLS para todos los endpoints definidos
- Single Sign On (SSO) con OpenID Connect
- Despliegues "blue green" que minimizan la posibilidad de disrupción
- Monitoreo contínuo y soporte de infraestructura
- Alertas en tiempo real

Modyo Connect se implementa en modalidad de alta disponibilidad y es operado por un equipo de Site Reliability Engineers (SREs) de Modyo sobre la nube de [Amazon AWS](#arquitectura). El servicio cuenta con los mismos estándares de calidad, seguridad y operación que los ofrecidos en Modyo Enterprise Cloud.

### Componentes
Modyo Connect cuenta con diferentes servicios o componentes, los cuales se agrupan en tres categorías: 
- [Desarrollo](development.md)
- [Infraestructura](infrastructure.md)
- [Monitoreo](monitoring.md)

Para activar un componente, se requerirá de un ticket de requerimiento, por lo que recomendamos que antes iniciar el uso del servicio se cuente con un acceso activo en el [Centro de Soporte de Modyo](https://support.modyo.com). Para dudas sobre cómo activar cuentas en el Centro de Soporte, favor contactar al ejecutivo de cuentas asignado.

::: tip Costos de activación
La activación de los componentes podría tener costos recurrentes asociados. Cada solicitud debe contar con la aprobación de los usuarios autorizados por el cliente.
:::

### Ambientes
Modyo Connect considera ambientes productivos y pre-productivos los cuales son desplegados en redes privadas virtuales totalmente separadas entre sí. Los clientes pueden solicitar hasta dos ambientes pre-productivos por despliegue, pero se deben tener en cuenta que cada ambiente genera costos recurrentes adicionales, medidos en los [Modyo Resource Units o MRUs](#costos) utilizados.

## Arquitectura
Modyo opera sus sistemas críticos en la nube de [Amazon AWS](https://aws.amazon.com). Con más de 12 años de experiencia en esta plataforma, y en calidad de Advanced Technology Partner, Modyo cuenta con la experiencia necesaria y personal certificado para asegurar la continuidad, performance y seguridad de sus despliegues.

<img src="/assets/img/cloud/partner_badge.png" alt="Partner Badge" style="margin-top: 40px;" />

En los años 2019 y 2021 Modyo fue reconocido por Amazon AWS como el Technology Partner of the Year para Chile y Perú. Además, Modyo fue la primera empresa en América Latina en convertirse en Independent Software Vendor (ISV) de AWS.

Modyo Connect se ofrece de forma exclusiva en la nube de Amazon AWS y, al igual que Modyo Cloud y Enterprise Cloud, opera en una configuración de alta disponibilidad sobre múltiples zonas de disponibilidad y regiones de AWS, utilizando recursos abstractos y contenerizados de la nube, evitando con ello la necesidad de configurar y mantener máquinas virtuales de cualquier tipo. Para el despliegue de microservicios se utiliza la plataforma de contenedores Amazon Elastic Container Services (ECS) en conjunto con herramientas de automatización y control de configuración, siguiendo una arquitectura de referencia como la que se aprecia en el siguiente diagrama:

<img src="/assets/img/infrastructure/architecture.png" alt="Modyo Connect Architecture" style="margin-top: 40px;" />

Los microservicios se conectan de forma automática a un balanceador de carga interno, en el cual se registran dinámicamente las instancias de contenedor desplegadas en [AWS Elastic Container Services (ECS)](https://aws.amazon.com/ecs/). Los microservicios poseen reglas de egreso de tráfico hacia Internet utilizando [AWS NAT Gateway](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html) el cual entrega direcciones IPs fijas dedicadas para cada cliente. Los servicios de negocio se acceden mediante enlaces VPN IPSec configurados hacia la infraestructura del cliente.

Las imágenes de los contenedores se almacenan de forma segura en el repositorio de AWS Elastic Container Repository (ECR), sobre el cual se ejecutan inspecciones de seguridad para detectar cualquier vulnerabilidad presente en las imágenes almacenadas en él.

Modyo Connect cuenta además con grupos de auto escalabilidad para aumentar el número de instancias de contenedores en la medida que el tráfico y la demanda se incrementa. Para ello, una capacidad mínima de base y un rango de acción de elasticidad se definen con cada cliente de acuerdo a sus necesidades particulares.

El despliegue multi zona en Amazon AWS garantiza un excelente nivel de redundancia y disponibilidad para hacer frente a las fallas más comunes que usualmente pueden afectar al ambiente. En el caso poco probable que exista un fallo a nivel regional del cual Amazon AWS no entregue un tiempo de resolución aceptable se cuenta con una región de procesamiento alternativa, en la cual se mantienen respaldos contínuos de todos los datos.

## Operación
Al igual que Modyo Enterprise Cloud, Modyo Connect es un servicio totalmente manejado por Modyo, quien es el responsable de toda la gestión de configuración y control de la infraestructura de la nube. Los niveles de disponibilidad del servicio quedan determinados  por medio de un acuerdo de servicio con cada cliente.

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
Modyo implementa múltiples controles de seguridad que abarcan tanto al personal como a la infraestructura. Los controles de seguridad de Modyo se encuentran alineados con los estándares más exigentes de la industria, tales cómo son el [ISO 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001) y el [CSA Star](https://cloudsecurityalliance.org/star/). 

Modyo Connect se despliega sobre las mismas cuentas de AWS aisladas (Single Tenant) de Modyo Enterprise Cloud, las cuales aseguran que ningún componente de infraestructura se comparte entre clientes. Dentro de cada cuenta, se utilizan redes privadas virtuales aisladas para cada ambiente dentro de las cuales se configuran con subredes para las diferentes capas de infraestructura, restringiendo la comunicación entre ellas mediante grupos de seguridad. 

### Modelo de Responsabilidad Compartida
Modyo define una matriz de responsabilidad compartida en conjunto con sus clientes en la que la responsabilidad por los controles complejos de infraestructura quedan del lado de Modyo y el cliente es responsable por los desarrollos y configuraciones de la plataforma que se despliegan sobre el servicio, como se detalla en el siguiente diagrama.

<img src="/assets/img/infrastructure/shared_responsability_model.png" alt="Modyo Shared Responsibility Model" style="margin-top: 40px;" />

Desde el punto de vista de los usuarios del servicio, los arquitectos, líderes técnicos y desarrolladores serán responsables desde el diseño de la solución, hasta el despliegue y ejecución de esta, por lo que ellos son los primeros responsables de asegurar la resiliencia, escalabilidad y seguridad de lo entregado.

Desde el punto de vista del equipo de SRE que opera el servicio, ellos serán los responsables por la implementación de la infraestructura del servicio ofrecido, la definición de los estándares y configuraciones de seguridad y la alta disponibilidad del mismo servicio, asegurando que se cumplan los principios del [AWS Well Architected Framework](https://aws.amazon.com/architecture/well-architected/).

## Activación
El servicio manejado de Modyo Connect se activa como un contrato o anexo separado e independiente del licenciamiento por suscripción de Modyo Enterprise Cloud. Para iniciar el servicio de Modyo Connect se deben tener en cuenta las siguientes consideraciones:
- Número de desarrolladores que deberán tener acceso a los repositorios de código
- Número de micro frontends que serán desarrollados utilizando el Command Line Interface (CLI) de Modyo
- Cantidad de ambientes pre productivos que se usarán como parte del desarrollo
- Número de microservicios que serán desarrollados 
- Número de repositorios intermediarios que podrían ser requeridos en caso de construir artefactos compartidos (por ejemplo: paquetes NPM o librerías de Java para Maven o Gradle)
- Enlaces VPN que deban ser activados para acceder a los servicios de negocio
- Requerimientos de autenticación por Single Sign On

La capacidad de los contenedores utilizados para el despliegue de los servicios se calculará dependiendo del tráfico estimado hacia el sistema en producción, estimación que servirá para establecer el tamaño inicial pero que podrá cambiar en el tiempo dependiendo del consumo real de los servicios. Se deberán considerar criterios de alta disponibilidad y eventual redundancia multi-región para el caso del despliegue en producción.

### Ticket de requerimiento
La gestión de solicitudes se realiza por medio del [Centro de Soporte de Modyo](https://support.modyo.com), mediante la creación de tickets de requerimientos y completando las instrucciones que se indicarán en él. Una vez creado el ticket, se le asigna una prioridad, identificador único y una URL que se podrá visitar posteriormente para revisar el estado de la solicitud o responder las consultas que el equipo SRE de Modyo pueda tener.

Los tickets de requerimientos una vez que se ingresan, son revisados antes de ser aceptados y asignados a un SRE. La duración de este proceso dependerá de la demanda y disponibilidad del equipo. Si el ticket debe tratarse de forma urgente, se deben explicar claramente las razones de forma que el equipo pueda replanificar los demás. Dependiendo del contrato de soporte asociado al servicio, cada cliente podría poseer sólo un número limitado y no acumulable de requerimientos que pueden ser tratados de forma urgente durante el mes.

::: tip Consejo
Modyo recomienda planificar de forma anticipada los tickets de requerimientos para evitar crearlos de forma urgente por esperar al último día. Existen períodos en el mes en dónde se observa más demanda por el servicio que en otros, por lo que la recomendación es tratar de hacer las solicitudes con la mayor antelación posible.
:::

Para mejorar la gestión de tickets y la forma cómo los clientes acceden al estado de éstos, el centro de soporte de Modyo pedirá la creación de un usuario y una contraseña para realizar las solicitudes. Es importante que la creación de esta cuenta se realice utilizando el correo electrónico corporativo al cual esté asociado el contrato de servicios de Modyo Enterprise Cloud, de otro modo el equipo SRE no podrá identificar la validez de la solicitud. Además, es conveniente incluir en el ticket a todas las partes involucradas que deberían tener acceso a él, mediante el campo CC del formulario de solicitud.

### Costos
Modyo ha definido una unidad de equivalencia llamada Modyo resource Unit (MRU). El MRU es una abstracción para asignar recursos computacionales y consumos de licencias a los elementos configurados como parte del servicio. Los MRU se suman considerando el total de los ambientes y se cobran de forma mensual al cliente. Modyo establece el número de MRUs asignados a cada recurso según un análisis de costo que incluye los costos de AWS, impuestos, costos de hora hombre de gestión, entre otros. **El valor (en dólares norteamericanos) de un MRU podría variar dependiendo de los costos de nube**.

## Soporte
El equipo de SREs de Modyo trabaja en un sistema de turnos “on call” 24x7. En cada turno siempre existe un ingenieros primarios y secundarios de respaldo, ambos con la posibilidad de escalar internamente a expertos en temas específicos en caso de ser requerido.

La activación del soporte se realiza en el [Centro de Soporte de Modyo](https://support.modyo.com) mediante un ticket de incidente. En caso de que el ticket no obtenga una respuesta oportuna, se define con cada cliente un protocolo de escalamiento apropiado.


