---
search: true
---

# Preguntas Frecuentes

### ¿Puedo contratar Modyo Connect en mi propia infraestructura?
Al ser un servicio manejado, Modyo Connect se ofrece solo desde la nube de Amazon AWS de Modyo. Sin embargo, los clientes que poseen licencias de Modyo Enterprise OnPremise y un contrato de Soporte de Infraestructura sobre su propia nube de AWS podrán utilizar las horas de soporte incluidas para realizar configuraciones similares a las incluidas como parte del servicio. En este caso, los componentes de desarrollo y monitoreo podrían costos asociados, los que se evalúan según el caso.

### ¿Cuánto tarda la habilitación del servicio Modyo Connect?
La habilitación del servicio de Modyo Connect habitualmente debería fluctuar entre pocos días o un par de semanas, dependiendo de que tan claro se tengan las definiciones de recursos que se aplicarán inicialmente en el servicio.

La habilitación inicial del servicio supone las tareas más complejas de ejecutar cómo la configuración de la red VPC en AWS, los ambientes productivos y pre-productivos, la configuración de VPN site-to-site, la emisión de certificados TLS, entre otros.

Una vez realizada la habilitación inicial, la incorporación de componentes nuevos debería ser más expedita, dependiendo del componente que se desee activar.

Existen casos en los que el cliente podrá solicitar la activación solo del ambiente pre-productivo, para proceder con el de producción cuando el desarrollo esté más avanzado. En estos casos se recomienda que el tiempo de habilitación del ambiente de producción se tenga en cuenta al momento de solicitarlo.


### ¿Qué alternativas existen a Modyo Connect?
Modyo Connect es un servicio optativo que solo se recomienda a clientes que actualmente prefieren externalizar la operación de sus APIs en conjunto con la capacidad de desarrollar y exponer de forma segura sus propios sistemas de Single Sign On o APIs de integración.

Como alternativa al servicio, podemos mencionar la implementación propia de cada cliente, sobre sus actuales recursos o los recursos de algún otro proveedor, cómo podría ser el caso de las nubes de Microsoft Azure o Google GCP. 

### ¿Qué tan compatible es Modyo con soluciones de integración diferentes a Modyo Connect?
La implementación de las APIs puede realizarse sobre cualquier sistema que permita exponer endpoints en el protocolo HTTP(s) de forma pública hacia Internet. Los endpoints que contengan información privada de un usuario, deberán poseer de algún sistema de autenticación basado en tokens JWT que puedan ser integrados mediante OIDC en la plataforma Modyo.

### ¿Cómo se integra Modyo Connect a los diferentes sistemas de negocio (CRMs, ERPs, Core Systems, etc)?
Modyo Connect es un servicio manejado de plataforma de nube. En sí, no provee de integración contra ningún sistema externo, pero sí admite el despliegue de contenedores (microservicios)  los cuales serán los responsables de efectuar la integración. Para la creación de ciertos microservicios comunes de integración, Modyo pone a disposición de sus clientes Empresariales de plantillas de código Java/Spring Boot las cuales pueden ser usadas como base de trabajo para los equipos de desarrollo.

### ¿Puede mi equipo trabajar con Modyo Connect o es solo reservado para profesionales de Modyo?
Modyo Connect es un servicio manejado totalmente independiente de los servicios de desarrollo proporcionados por el área de Servicios Profesionales de Modyo. Todos los clientes que posean el servicio de Modyo Connect contratado podrán acceder de forma directa a los ambientes de desarrollo y podrán elevar solicitudes para incorporar o remover elementos en él.

### ¿Dónde reside el código fuente de los Widgets y microservicios desarrollados para Modyo Connect?
Modyo Connect ofrece servicios de manejados de DevOps de punta a punta, por lo que la custodia segura y privada del código fuente de Widgets y microservicios está incluida como parte del servicio mediante un repositorio Git al cual tendrán acceso los desarrolladores habilitados para usar el servicio. 

Debido a la naturaleza distribuida de Git, los clientes podrán usar su propio control de versiones (basado en Git) como GitHub, GitLab, Bitbucket o similar, siempre y cuando coloquen el repositorio Git de Modyo Connect como upstream adicional al cual se sincronicen los cambios que se desean pasar a los diferentes ambientes.

### ¿Puedo incorporar mis propias herramientas de DevOps en Modyo Connect?
Modyo Connect al ser un servicio manejado no admite la incorporación de modificaciones en los flujos predefinidos por el equipo SRE de Modyo por lo que no es posible la incorporación de herramientas propias.

### ¿Puedo auditar la operación de mis servicios bajo Modyo Connect?
Modyo Enterprise Cloud y Modyo Connect admiten la auditoría en su operación de forma directa desde Amazon AWS. Mediante la otorgación de un usuario AWS IAM con capacidad de solo lectura, se podrán acceder a las configuraciones y bitácoras de todo lo relacionado con el servicio.

### ¿Los servicios se ofrecen solo desde Amazon AWS?
Modyo Cloud, Modyo Enterprise Cloud y Modyo Connect son servicios manejados que se ofrecen con niveles de disponibilidad, servicio y soporte garantizados. Modyo ha elegido entregar sus servicios de forma exclusiva desde la nube de Amazon Web Services por sus excelentes niveles de desempeño y seguridad. 
