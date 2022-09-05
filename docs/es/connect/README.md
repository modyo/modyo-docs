---
search: true
---
# ¿Qué es Modyo Connect?
Modyo Connect es un servicio manejado de infraestructura y devops sobre la nube de Amazon AWS exclusivo para clientes de Modyo Enterprise Cloud.
Modyo Connect está diseñado para organizaciones que requieran implementar una capa segura y escalable de integraciones, que se expongan como APIs hacia los Widgets o Micro Frontends desplegados sobre Modyo.

Modyo Connect permite la configuración de sistemas de Single Sign On, API Gateways, infraestructura de contenedores para microservicios, bases de datos, entre otros servicios pensados para dar cobertura a todo lo requerido en una iniciativa compleja de integración.

El servicio manejado de Modyo Connect se origina frente a la necesidad de contar con una solución . El servicio es completamente opcional y en muchos casos no es requerido ya que el propio cliente cuenta con una arquitectura de APIs y Single Sign On a la cual los desarrollos en Modyo pueden integrarse.

<img src="/assets/img/infrastructure/reference_architecture.png" alt="Partner Badge" style="margin-top: 40px;" />

Modyo Connect permite desarrollar y publicar APIs como la que se muestra en la figura, en las que las consultas se realizan directamente por el usuario final desde su navegador Web y no desde la plataforma, evitando con ello que la información sensible transite por ella. Esta arquitectura permite a su vez desacoplar totalmente la presentación de la lógica de negocio, estableciendo responsabilidades muy definidas en sistemas separados.

### Funcionalidades
El servicio de Modyo Connect entrega toda la infraestructura para el desarrollo y operación productiva de los Widgets y Microservicios desarrollados como complemento a una implementación de Modyo, tales como:
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

El servicio de Modyo Connect se implementa en producción con modalidad de alta disponibilidad y es operado por Site Reliability Engineers (SREs) del Área de Seguridad e Infraestructura de Modyo, con el fin de entregar un servicio con los mismos estándares de calidad, seguridad y niveles de atención con los que cuenta Modyo Cloud y Enterprise Cloud.

### Componentes
Modyo Connect cuenta con diferentes componentes, los cuales se agrupan en tres categorías: 
- [Desarrollo](development.md)
- [Infraestructura](infrastructure.md)
- [Monitoreo](monitoring.md)


Para activar un componente, se requerirá de un ticket de requerimiento, por lo que recomendamos que antes iniciar el uso del servicio se asegure de contar con una cuenta en [Centro de Soporte de Modyo](https://support.modyo.com). Para dudas sobre cómo activar cuentas en el Centro de Soporte, favor contactar al ejecutivo de cuentas asignado.

::: tip Costos de activación
La activación de algunos componentes podría tener costos recurrentes asociados. Es por ello, que cada solicitud que afecte los costos debe contar con la aprobación de los usuarios autorizados por el cliente.
:::

### Ambientes
Modyo Connect se despliega considerando un ambiente productivo y un de desarrollo o pre-productivo. Se pueden solicitar ambientes adicionales, pero se debe tener presente que cada ambiente adiciona costos de los MRUs requeridos. Para más detalle sobre los ambientes de desarrollo, favor referirse a la sección de [infraestructura](infrastructure.md).


## Arquitectura
Modyo realiza la operación de sus sistemas críticos en la nube de Amazon AWS. Con más de 10 años de experiencia en esta plataforma, y en calidad de Technology Partner de nivel avanzado con ellos, Modyo cuenta con la experiencia necesaria y personal certificado para garantizar la continuidad, performance y seguridad de sus despliegues.

<img src="/assets/img/cloud/partner_badge.png" alt="Partner Badge" style="margin-top: 40px;" />

En los años 2019 y 2021 Modyo fue reconocido por Amazon AWS como el Technology Partner of the Year para Chile y Perú. Además, Modyo fue la primera empresa en América Latina en participar del programa ISV de AWS.

Al igual que Modyo Cloud y Enterprise Cloud, Modyo Connect opera en una configuración de alta disponibilidad sobre múltiples zonas de disponibilidad y regiones de AWS, utilizando sólo recursos abstractos y contenerizados de la nube evitando con ello la configuración y mantención de máquinas virtuales de cualquier tipo.  

El servicio de Modyo Connect se despliega de forma exclusiva en la nube de Amazon AWS, utilizando principalmente la plataforma de contenedores Amazon Elastic Container Services (ECS) en conjunto con herramientas de automatización y control de configuración, siguiendo una arquitectura de referencia como la que se aprecia en el siguiente diagrama:

<img src="/assets/img/infrastructure/architecture.png" alt="Modyo Connect Architecture" style="margin-top: 40px;" />

Los Microservicios se conectan de forma automática a un balanceador de carga interno, en el cual se registran dinámicamente las instancias de éstos desplegados en ECS. Los Microservicios poseen reglas de egreso de tráfico que pueden ser hacia Internet por medio de un NAT Gateway que entrega IPs fijas, o, a través de un enlace VPN IPSec configurado hacia la infraestructura del Cliente para acceder a los servicios de negocio.

Las imágenes de los contenedores son almacenadas de forma segura en el repositorio Amazon Elastic Container Repository (ECR), el cual ejecuta inspecciones de seguridad a los contenedores para detectar vulnerabilidades presentes en las imágenes generadas.


Modyo Connect cuenta con grupos de auto escalabilidad para aumentar el número de recursos en la medida que el tráfico y la demanda se incremente. Para ello, una capacidad mínima de base y un rango máximo de acción de elasticidad se define con cada cliente, de acuerdo a sus necesidades particulares.

El despliegue multi zona en Amazon AWS garantiza un excelente nivel de redundancia y disponibilidad para hacer frente a las fallas más comunes que usualmente afectan solo a una zona a la vez. En el caso poco probable que exista un fallo a nivel regional del cual Amazon AWS no entregue un tiempo de resolución aceptable se procederá a activar la región alternativa, ubicada en la costa oeste de Estados Unidos  (us-west-1).

Todos los datos críticos contenidos en AWS RDS Aurora y repositorio de objetos AWS S3 son respaldados frecuentemente a la región alternativa, cada 24 horas para el caso de AWS Aurora y en tiempo real para el caso de AWS S3. 

Modyo posee en la región alternativa copias de las configuraciones y recursos necesarios para restablecer la operación a partir de los archivos de respaldo.


## Operación
Modyo Connect, al igual que Modyo Enterprise Cloud, es un servicio totalmente operado por Modyo, en el cuál las funciones de gestión de configuración y control de la infraestructura son responsabilidad de Modyo por medio de un acuerdo de servicio con cada cliente.

Para ello Modyo cuenta con un equipo dedicado de expertos compuesto por Site Reliability Engineers (SREs), quienes son los responsables de mantener los sistemas en la nube para todos nuestros clientes. Los SRE de Modyo son profesionales certificados en AWS con experiencia tanto en desarrollo de software, como en operación de sistemas críticos en la nube y sus principales responsabilidades principales son:
- Monitoreo y métricas de rendimiento, disponibilidad y seguridad
- Respuesta a incidentes
- Planificación de capacidad
- Provisión y bajada de servicios
- Gestión de cambios de infraestructura y seguridad
- Gestión de repositorios de códigos fuentes
- Configuraciones de seguridad y reglas de firewall
- Control de acceso a los ambientes de nube

## Seguridad
Modyo implementa diversos controles de seguridad, los cuales abarcan tanto al personal como a la infraestructura. El despliegue de Modyo Enterprise Cloud y Modyo Connect aseguran que cada cliente cuenta con su propia cuenta en modo "single tenant" para desplegar cada uno de sus ambientes productivos y pre-productivos, los cuales se configuran en redes privadas, aisladas entre sí. Cada red privada se configuran con subredes para los diferentes roles de infraestructura, restringiendo la comunicación entre ellas mediante el uso de grupos de acceso. 

Cuando un cliente adopta AWS como nube, inmediatamente es. Al ofrecer Modyo Connect como un servicio manejado, esta matriz de responsabilidad compartida de AWS se transforma, dejando los controles complejos de infraestructura del lado de Modyo y haciendo responsable al cliente sólo por los desarrollos y configuraciones mínimas que se despliegan sobre el servicio. A continuación se describe el modelo de responsabilidad compartida de Modyo.

### Modelo de Responsabilidad Compartida
En el servicio Modyo Connect, se pueden identificar distintos actores que interactúan con este servicio, desde arquitectos de soluciones, hasta ingenieros SRE que operan el servicio.

<img src="/assets/img/infrastructure/shared_responsability_model.png" alt="Modyo Shared Responsibility Model" style="margin-top: 40px;" />


Desde el punto de vista de los usuarios del servicio, es decir, arquitectos, líderes técnicos y desarrolladores, la responsabilidad contempla desde el diseño de la solución, hasta la ejecución de esta, para que la solución entregada sea resiliente, escalable y segura.

Desde el punto de vista de los ingenieros SRE que operan el servicio, serán los responsables por la implementación de la infraestructura del servicio ofrecido, la definición de los estándares de seguridad, por la alta disponibilidad del mismo servicio, etc. Todo este servicio se entrega siguiendo el AWS Well Architected Framework.


## Activación
El servicio de Modyo Connect se activa como un contrato o anexo separado e independiente del licenciamiento por suscripción de la Plataforma Modyo Cloud o Enterprise Cloud. Para iniciar el servicio de Modyo Connect se deben tener en cuenta las siguientes consideraciones:
- Número de desarrolladores que deberán tener acceso a los repositorios de código.
- Número de Widgets que serán desarrollados utilizando el Command Line Interface (CLI) de Modyo y que requerirán usar repositorios de código.
- Cantidad de ambientes pre productivos que se usarán como parte del flujo (usualmente uno, para certificación).
- Número de Microservicios que serán desarrollados y que requerirán repositorios independientes.
- Número de repositorios intermediarios que podrían ser requeridos en caso de construir artefactos compartidos (por ejemplo: paquetes NPM o librerías de Java para Maven o Gradle).
- Enlaces VPN que deban ser generados para acceder a los servicios de negocio del Cliente.

La capacidad de los contenedores utilizados para el despliegue de los servicios se calculará dependiendo del tráfico estimado hacia el sistema en producción, estimación que servirá para establecer el tamaño inicial pero que podrá cambiar en el tiempo dependiendo del consumo real de los servicios. Se deberán considerar criterios de alta disponibilidad multizona para el caso del despliegue en producción.

### Ticket de requerimiento
La gestión de solicitudes se realiza por medio del centro de soporte de Modyo (https://support.modyo.com), mediante la creación de tickets de requerimientos y completando las instrucciones que indica el formulario. Una vez creado a cada ticket se le asigna un identificador único y una URL la cual podemos visitar posteriormente para revisar el estado de éste o responder las consultas que el equipo SRE de Modyo pueda tener.La gestión de solicitudes se realiza por medio del centro de soporte de Modyo (https://support.modyo.com/hc-es), mediante la creación de tickets de requerimientos y completando en las instrucciones que indica el formulario. Una vez creado a cada ticket se le asigna un identificador único y una URL la cual podemos visitar posteriormente para revisar el estado de éste o responder las consultas que el equipo SRE de Modyo pueda tener.

Los tickets de requerimientos una vez que se ingresan, son revisados antes de ser aceptados y asignados a un SRE. La duración de este proceso dependerá de la demanda y disponibilidad. Se debe indicar en el requerimiento si éste debe tratarse de forma urgente. Dependiendo del contrato de soporte asociado al servicio, cada cliente posee sólo un número limitado y no acumulable de requerimientos que pueden ser tratados de forma urgente en un periodo determinado.

Para mejorar la gestión de tickets y la forma cómo los clientes acceden al estado de éstos, el centro de soporte de Modyo pedirá la creación de un usuario y una contraseña para realizar las solicitudes. Es importante que la creación de esta cuenta se realice utilizando el correo electrónico corporativo al cual esté asociado el contrato de servicios de Modyo Enterprise Cloud, de otro modo el equipo SRE no podrá identificar la validez de la solicitud. Además, es conveniente incluir en el ticket a todas las partes involucradas que podrán tener acceso a él, mediante el campo CC del formulario de solicitud.

Los tickets de requerimientos una vez que se ingresan, son revisados antes de ser aceptados y asignados a un SRE. La duración de este proceso dependerá de la demanda y disponibilidad. Se debe indicar en el requerimiento si éste debe tratarse de forma urgente. Dependiendo del contrato de soporte asociado al servicio, cada cliente posee sólo un número limitado y no acumulable de requerimientos que pueden ser tratados de forma urgente en un periodo determinado.

Para mejorar la gestión de tickets y la forma cómo los clientes acceden al estado de éstos, el centro de soporte de Modyo pedirá la creación de un usuario y una contraseña para realizar las solicitudes. Es importante que la creación de esta cuenta se realice utilizando el correo electrónico corporativo al cual esté asociado el contrato de servicios de Modyo Enterprise Cloud, de otro modo el equipo SRE no podrá identificar la validez de la solicitud. Además, es conveniente incluir en el ticket a todas las partes involucradas que podrán tener acceso a él, mediante el campo CC del formulario de solicitud.


### Costos
Modyo ha definido una unidad de equivalencia llamada Modyo resource Unit (MRU). El MRU es una abstracción para asignar recursos computacionales y consumos de licencias a los elementos configurados como parte del servicio. Los MRU se suman considerando el total de los ambientes y se cobran de forma mensual al cliente. Modyo establece el número de MRUs asignados a cada recurso según un análisis de costo que incluye los costos de AWS, impuestos, costos de hora hombre de gestión, entre otros.

El valor en dólares norteamericanos de un MRU podría variar dependiendo de los costos de nube.

Los Micro Frontends (Widgets) que se desarrollan de forma externa y que se mantengan en repositorios que no provengan de Modyo Connect, no consumirá MRUs.



## Soporte
Modyo cuenta con un equipo dedicado de operaciones compuesto ingenieros en el rol de Site Reliability Engineers (SREs) los cuáles poseen conocimiento y experiencia en múltiples plataformas tecnológicas de redes, seguridad, nubes, sistemas operativos, automatización y monitoreo de sistemas. Los SREs trabajan en un sistema de turnos on call 24x7. En cada turno siempre existe un ingeniero primario y secundario de respaldo, ambos con la posibilidad de escalar internamente a expertos en temas específicos en caso de ser requerido.

El equipo de operaciones de Modyo brinda apoyo de forma transversal a todas las áreas de la empresa en los proyectos e iniciativas que impliquen la preparación, despliegue, monitoreo, seguridad, auditoría y mejoras de rendimiento de sus proyectos e iniciativas tanto en la nube como en los despliegues On Premise de los clientes que posean un contrato de servicios de soporte adicional al incluido como parte de la licencia de software de Modyo.


