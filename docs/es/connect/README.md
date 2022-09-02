---
search: true
---
# ¿Qué es Modyo Connect?
Modyo Connect es un servicio manejado de infraestructura y devops sobre la nube de Amazon AWS exclusivo para clientes de Modyo Enterprise Cloud.
Modyo Connect está diseñado para organizaciones que requieran implementar una capa segura y escalable de integraciones, que se expongan como APIs hacia los Widgets o Micro Forntends desplegados sobre Modyo.

Modyo Connect permite la configuración de sistemas de Single Sign On, API Gateways, infraestructura de contenedores para microservicios, bases de datos, entre otros servicios pensados para dar cobertura a todo lo requerido en una iniciativa compleja de integración.

El servicio manejado de Modyo Connect se origina frente a la necesidad de contar con una solución . El servicio es completamente opcional y en muchos casos no es requerido ya que el propio cliente cuenta con una arquitectura de APIs y Single Sign On a la cual los desarrollos en Modyo pueden integrarse.



> Explicar aquí el tipo de APIs que se requiere para los Widgets.

### Site Reliability Engineers (SRE)
Los servicios manejados de infraestructura se ofrecen desde el Área de Seguridad e Infraestructura de Modyo la cual se compone de ingenieros en el rol de Site Reliability Engineers (SREs), quienes están a cargo de la operación de la infraestructura crítica administrada en la nube. Los SRE son profesionales certificados con experiencia tanto en desarrollo de software, como en operación avanzada de sistemas en ambientes de nube, on premise o híbridos y sus principales responsabilidades principales son:
- Monitoreo y métricas de rendimiento, disponibilidad y seguridad
- Respuesta a incidentes
- Planificación de capacidad
- Provisión y bajada de servicios
- Gestión de cambios de infraestructura y seguridad
- Gestión de repositorios de códigos fuentes
- Configuraciones de seguridad y reglas de firewall
- Control de acceso a los ambientes de nube


## Funcionalidades
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

## Componentes
Modyo Connect cuenta con diferentes componentes, los cuales se agrupan en tres categorías: 
- [Desarrollo](development.md)
- [Infraestructura](infrastructure.md)
- [Monitoreo](monitoring.md)


Para activar un componente, se requerirá de un ticket de requerimiento, por lo que recomendamos que antes iniciar el uso del servicio se asegure de contar con una cuenta en [Centor de Soporte de Modyo](https://support.modyo.com). Para dudas sobre cómo activar cuentas en el Centro de Soporte, favor contactar al ejecutivo de cuentas asignado.

::: tip Costos de activación
La activación de algunos componentes podría tener costos recurrentes asociados. Es por ello, que **cada solicitud que afecte los costos debe contar con la aprobación de los usuarios autorizados por el cliente**.
:::

## Arquitectura
Modyo realiza la operación de sus sistemas críticos en la nube de Amazon AWS. Con más de 10 años de experiencia en esta plataforma, y en calidad de Technology Partner nivel advanced con ellos, Modyo cuenta con la experiencia necesaria y personal certificado para garantizar la continuidad, performance y seguridad de sus despliegues.


<img src="/assets/img/cloud/partner_badge.png" alt="Partner Badge" style="margin-top: 40px;" />

En los años 2019 y 2021 Modyo fue reconocido por Amazon AWS como el Technology Partner of the Year para Chile y Perú. Además, Modyo fue la primera empresa en Amércia Latina en participar del programa ISV de AWS.

Al igual que Modyo Cloud y Enterprise Cloud, Modyo Connect opera en una configuración de alta disponibilidad sobre múltiples zonas de disponibilidad y regiones de AWS, utilizando sólo recursos abstractos y contenerizados de la nube evitando con ello la configuración y mantención de máquinas virtuales de cualquier tipo.  

El servicio de Modyo Connect se despliega de forma exclusiva en la nube de Amazon AWS, utilizando principalmente la plataforma de contenedores Amazon Elastic Container Services (ECS) en conjunto con herramientas de automatización y control de configuración, siguiendo una arquitectura de referencia como la que se aprecia en el siguiente diagrama:

> Diagrama Connect

Los Microservicios se conectan de forma automática a un balanceador de carga interno, en el cual se registran dinámicamente las instancias de éstos desplegados en ECS. Los Microservicios poseen reglas de egreso de tráfico que pueden ser hacia Internet por medio de un NAT Gateway que entrega IPs fijas, o, a través de un enlace VPN IPSec configurado hacia la infraestructura del Cliente para acceder a los servicios de negocio.

Las imágenes de los contenedores son almacenadas de forma segura en el repositorio Amazon Elastic Container Repository (ECR), el cual ejecuta inspecciones de seguridad a los contenedores para detectar vulnerabilidades presentes en las imágenes generadas.




Modyo Connect cuenta con grupos de auto escalabilidad para aumentar el número de recursos en la medida que el tráfico y la demanda se incremente. Con cada cliente se definene una capacidad mínima de base y un rango sobre el cual se acciona la elasticidad de los despliegues.

El despliegue multi zona en Amazon AWS garantiza un excelente nivel de redundancia y disponibilidad para hacer frente a las fallas más comunes que usualmente afectan solo a una zona a la vez. En el caso poco probable que exista un fallo a nivel regional del cual Amazon AWS no entregue un tiempo de resolución aceptable se procederá a activar la región alternativa, ubicada en la costa oeste de Estados Unidos  (us-west-1).

Todos los datos críticos contenidos en AWS RDS Aurora y repositorio de objetos AWS S3 son respaldados frecuentemente a la región alternativa, cada 24 horas para el caso de AWS Aurora y en tiempo real para el caso de AWS S3. 

Modyo posee en la región alternativa copias de las configuraciones y recursos necesarios para restablecer la operación a partir de los archivos de respaldos.

## Seguridad
El despliegue de nube de AWS asegura que cada cliente cuenta con su propia VPC por cada ambiente configurado (producción, certificación, etc...). Dentro de la VPC se despliega sub redes públicas (NAT) y privadas, en donde se despliega los recursos y bases de datos que no son directamente accesibles desde Internet. Adicionalmente, se hace uso de grupos de seguridad y roles AWS IAM para controlar perimetralmente el acceso a los recursos.


### Modelo de Responsabilidad Compartida
En el servicio Modyo Connect, se pueden identificar distintos actores que interactúan con este servicio, desde arquitectos de soluciones, hasta ingenieros SRE que operan el servicio.

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

## Costos
El Modyo Resource Unit (MRU) es una abstracción para asignar recursos computacionales y consumos de licencias a los elementos configurados como parte del servicio. Los MRU se suman considerando el total de los ambientes y se cobran de forma mensual al cliente. Modyo establece el número de MRUs asignados a cada recurso según un análisis de costo que incluye los costos de AWS, impuestos, costos de hora hombre de gestión, entre otros.

Todos los contenedores incluyen un repositorio, automatización, almacenamiento de imágenes en AWS ECR, monitoreo y consolidación de logs. Además, se incluye monitoreo, centralización de logs, API Gateway, Firewall, dominios personalizados, emisión de certificados TLS.

Los Widgets que se desarrollan en Modyo por medio del Widget Builder (sin CLI) no consumen MRUs.

Los servicios de SSO con RedHat KeyCloak se despliegan sobre contenedores como cualquier otro Microservicio. Al costo de MRU señalado se deberán sumar los de los contenedores usados. El tamaño del contenedor de despliegue de este componente dependerá de las necesidades del cliente.

Los servicios complementarios que procesan datos, como Redis y Aurora, deberán estar configurados para producción y pre producción. En el caso de producción, éstos se configuran en alta disponibilidad.


## Soporte
Modyo cuenta con un equipo dedicado de operaciones compuesto ingenieros en el rol de Site Reliability Engineers (SREs) los cuáles poseen conocimiento y experiencia en múltiples plataformas tecnológicas de redes, seguridad, nubes, sistemas operativos, automatización y monitoreo de sistemas. Los SREs trabajan en un sistema de turnos on call 24x7. En cada turno siempre existe un ingeniero primario y secundario de respaldo, ambos con la posibilidad de escalar internamente a expertos en temas específicos en caso de ser requerido.

El equipo de operaciones de Modyo brinda apoyo de forma transversal a todas las áreas de la empresa en los proyectos e iniciativas que impliquen la preparación, despliegue, monitoreo, seguridad, auditoría y mejoras de rendimiento de sus proyectos e iniciativas tanto en la nube como en los despliegues On Premise de los clientes que posean un contrato de servicios de soporte adicional al incluido como parte de la licencia de software de Modyo.
