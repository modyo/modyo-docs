---
search: true
---

# Preguntas Frecuentes

### ¿Puedo contratar Modyo Connect en mi propia infraestructura?

Al ser un servicio gestionado, Modyo Connect se ofrece exclusivamente desde la nube de Amazon AWS de Modyo. Sin embargo, los clientes con licencias de Modyo Enterprise OnPremise y un contrato de Soporte de Infraestructura sobre su propia nube de AWS pueden utilizar las horas de soporte incluidas para configuraciones similares a las del servicio. En este caso, los componentes de desarrollo y monitoreo podrían generar costos asociados, evaluados según el caso.

### ¿Cuánto tarda la habilitación del servicio Modyo Connect?

La habilitación del servicio Modyo Connect suele tardar entre pocos días y un par de semanas, dependiendo de la claridad en las definiciones de recursos iniciales.

La habilitación inicial del servicio implica tareas complejas como la configuración de la red VPC en AWS, los ambientes productivos y pre-productivos, la configuración de VPN site-to-site y la emisión de certificados TLS, entre otros.

Una vez realizada la habilitación inicial, la incorporación de nuevos componentes es más expedita, dependiendo del componente a activar.

Existen casos en los que el cliente puede solicitar la activación solo del ambiente pre-productivo, para proceder con el de producción cuando el desarrollo esté más avanzado. En estos casos, se recomienda considerar el tiempo de habilitación del ambiente de producción al momento de solicitarlo.


### ¿Qué alternativas existen a Modyo Connect?

Modyo Connect es un servicio opcional, recomendado solo para clientes que prefieren externalizar la operación de sus APIs y la capacidad de desarrollar y exponer de forma segura sus propios sistemas de Single Sign-On o APIs de integración.

Como alternativa, se puede considerar la implementación propia del cliente, sobre sus recursos actuales o los de otro proveedor (ej. Microsoft Azure o Google GCP). 

### ¿Qué tan compatible es Modyo con soluciones de integración diferentes a Modyo Connect?
La implementación de APIs puede realizarse sobre cualquier sistema que permita exponer endpoints HTTP(s) públicamente. Los endpoints con información privada de usuario deben poseer un sistema de autenticación basado en tokens JWT, integrables mediante OIDC en la plataforma Modyo.

### ¿Cómo se integra Modyo Connect a los diferentes sistemas de negocio (CRMs, ERPs, Core Systems, etc)?

Modyo Connect es un servicio gestionado de plataforma en la nube. No provee integración directa con sistemas externos, pero admite el despliegue de contenedores (microservicios) responsables de la integración. Para microservicios de integración comunes, Modyo pone a disposición de sus clientes Enterprise plantillas de código Java/Spring Boot como base de trabajo para los equipos de desarrollo.

### ¿Puede mi equipo trabajar con Modyo Connect o es solo reservado para profesionales de Modyo?

Modyo Connect es un servicio gestionado, totalmente independiente de los servicios de desarrollo proporcionados por el área de Servicios Profesionales de Modyo. Todos los clientes con el servicio Modyo Connect contratado pueden acceder directamente a los ambientes de desarrollo y solicitar la incorporación o remoción de elementos.

### ¿Dónde reside el código fuente de los Widgets y microservicios desarrollados para Modyo Connect?

Modyo Connect ofrece servicios gestionados de DevOps de punta a punta. La custodia segura y privada del código fuente de Widgets y microservicios está incluida como parte del servicio mediante un repositorio Git al que tendrán acceso los desarrolladores habilitados. 

Debido a la naturaleza distribuida de Git, los clientes pueden usar su propio control de versiones (ej. GitHub, GitLab, Bitbucket) siempre que configuren el repositorio Git de Modyo Connect como un upstream adicional para sincronizar los cambios entre ambientes.

### ¿Puedo incorporar mis propias herramientas de DevOps en Modyo Connect?

Modyo Connect, al ser un servicio gestionado, no admite modificaciones en los flujos predefinidos por el equipo SRE de Modyo, por lo que no es posible incorporar herramientas propias.

### ¿Puedo auditar la operación de mis servicios bajo Modyo Connect?

Modyo Enterprise Cloud y Modyo Connect permiten la auditoría de su operación directamente desde Amazon AWS. Se otorga permiso de solo lectura a un usuario AWS IAM para acceder a las configuraciones y bitácoras relacionadas con el servicio.

### ¿Los servicios se ofrecen solo desde Amazon AWS?

Modyo Cloud, Modyo Enterprise Cloud y Modyo Connect son servicios gestionados que se ofrecen con niveles de disponibilidad, servicio y soporte garantizados. Modyo ha elegido ofrecer sus servicios exclusivamente desde la nube de Amazon Web Services por sus excelentes niveles de desempeño y seguridad. 
