---
search: true
---
# ¿Qué es Modyo Connect?

Modyo Connect es un servicio de gestión de infraestructura y DevOps sobre la nube de Amazon AWS exclusivo para clientes de Modyo Enterprise Cloud. Modyo Connect está diseñado para organizaciones que necesitan implementar una capa segura y escalable de APIs de integración para alimentar datos a los  [micro frontends](/es/architecture/patterns/micro-frontend) desplegados como widgets en Modyo.

Modyo Connect permite la implementación de servicios para cubrir los requisitos comunes de una iniciativa compleja de integración. Entre ellos:

 - Single Sign-On (SSO)
 - API Gateway
- Infraestructura de contenedores para [microservicios](/es/architecture/patterns/microservice)
- Bases de datos
- Colas de mensajería
- Repositorios de objetos


Modyo Connect surge para satisfacer la necesidad de algunos clientes de contar con una capa gestionada de servicios de gestión de APIs que se integre de manera segura con sus sistemas de negocio. Este servicio es completamente opcional y, en muchos casos, no es necesario, ya que el cliente puede contar con su propia arquitectura de APIs y Single Sign-On, a la cual los [micro frontends](/es/architecture/patterns/micro-frontend) desarrollados en Modyo pueden integrarse.

Este diagrama muestra la arquitectura de referencia de implementación de Modyo. Los servicios gestionados de Modyo Connect están a la derecha en el diagrama y están completamente desacoplados de la plataforma, por lo que pueden ser reemplazados por APIs que ya posee el cliente o desarrolladas por terceros.

<img src="/assets/img/infrastructure/reference_architecture.png" alt="Partner Badge" />

Las APIs desarrolladas en Modyo Connect son consumidas directamente por el usuario final desde su navegador web. La plataforma Modyo no participa en la comunicación con las APIs, lo que evita que la información sensible pase por ella. Esta arquitectura logra una completa separación entre la presentación y la lógica de negocio, estableciendo responsabilidades delimitadas en sistemas separados e incrementando la modularidad y eficiencia de los desarrollos.


## Capacidades

El servicio gestionado de Modyo Connect contempla las siguientes capacidades:

- Repositorios seguros de códigos fuente
- Pipelines de automatización para [micro frontends](/es/architecture/patterns/micro-frontend) y [microservicios](/es/architecture/patterns/microservice)
- Plataforma de despliegue de contenedores
- Ambientes productivos y pre-productivos
- Gestión de centralizada de bitácoras de logs
- Gestión de APIs mediante un API Gateway
- Gestión de Firewall Aplicativo (WAF)
- Certificados TLS para todos los endpoints definidos
- Single Sign On (SSO) con OpenID Connect
- Despliegues "blue green" para minimizar disrupciones
- Monitoreo contínuo y soporte de infraestructura
- Alertas en tiempo real

Modyo Connect se implementa en modalidad de alta disponibilidad y es operado por un equipo de Site Reliability Engineers (SREs) de Modyo sobre la nube de [Amazon AWS](architecture.md). El servicio cumple con los mismos estándares de calidad, seguridad y operación que se ofrecen en Modyo Enterprise Cloud.

## Componentes

Modyo Connect cuenta con una variedad de servicios o componentes que se agrupan en tres categorías:

- [Desarrollo](components/development.md)
- [Infraestructura](components/infrastructure.md)
- [Monitoreo](components/monitoring.md)

Para activar un componente, se requerirá de un ticket de requerimiento. Recomendamos tener una cuenta activa en el [Centro de Soporte de Modyo](https://support.modyo.com) antes de utilizar el servicio. Para dudas sobre cómo activar cuentas en el Centro de Soporte, favor de contactar al ejecutivo de cuentas asignado.

:::tip Costos de activación
La activación de los componentes podría tener costos recurrentes asociados.  Cada solicitud debe ser aprobada por los usuarios autorizados por el cliente.
:::

## Ambientes

Modyo Connect considera ambientes productivos y pre-productivos, desplegados en redes privadas virtuales totalmente separadas entre sí. Los clientes pueden solicitar hasta dos ambientes pre-productivos por despliegue. Es importante tener en cuenta que cada ambiente genera costos recurrentes adicionales, medidos en [Modyo Resource Units (MRUs)](resources/mrus.md) utilizados.