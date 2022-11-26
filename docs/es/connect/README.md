---
search: true
---
# ¿Qué es Modyo Connect?
Modyo Connect es un servicio manejado de infraestructura y devops sobre la nube de Amazon AWS exclusivo para clientes de Modyo Enterprise Cloud. Modyo Connect está diseñado para organizaciones que requieran implementar una capa segura y escalable de APIs de integración, que permitan alimentar datos hacia los [micro frontends](resources/microfrontends.md) desplegados como Widgets sobre Modyo.

Modyo Connect permite la implementación de servicios como: Single Sign On, API Gateway, infraestructura de contenedores para [microservicios](resources/microservices.md), bases de datos, colas de mensajería, repositorios de objetos, entre otros componentes pensados para dar cobertura a todos los requerimientos comunes presentes en una iniciativa compleja de integración.

Modyo Connect nace frente a la necesidad de algunos clientes de contar con una capa manejada de servicios de gestión de APIs que se integrara de forma segura a sus sistemas de negocio. El servicio es completamente opcional y, en muchos casos, no es requerido, ya que el mismo cliente puede contar con su propia arquitectura de APIs y Single Sign On a la cual los [micro frontends](resources/microfrontends.md) desarrollados sobre Modyo puedan integrarse.

El siguiente diagrama corresponde a la arquitectura de referencia de implementación de Modyo. Los servicios manejados de Modyo Connect están a la derecha en el diagrama y se encuentran completamente desacoplados de la plataforma, por lo que pueden ser reemplazados por APIs que ya posea el cliente o que sean desarrolladas por un tercero.

<img src="/assets/img/infrastructure/reference_architecture.png" alt="Partner Badge" style="margin-top: 40px;" />

Las APIs desarrolladas en Modyo Connect son consumidas directamente por el usuario final desde su navegador Web. La plataforma Modyo no toma parte en la comunicación con las API, evitando con ello que la información sensible transite por ella. Con esta arquitectura se logra desacoplar completamente la presentación de la lógica de negocio, estableciendo responsabilidades delimitadas en sistemas separados, incrementando con ello la modularidad y eficiencia de los desarrollos.


## Capacidades
El servicio manejado de Modyo Connect contempla las siguientes capacidades:
- Repositorios seguros de códigos fuente
- Pipelines de automatización para [micro frontends](resources/microfrontends.md) y [microservicios](resources/microservices.md)
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

## Componentes
Modyo Connect cuenta con diferentes servicios o componentes, los cuales se agrupan en tres categorías: 
- [Desarrollo](components/development.md)
- [Infraestructura](components/infrastructure.md)
- [Monitoreo](components/monitoring.md)

Para activar un componente, se requerirá de un ticket de requerimiento, por lo que recomendamos que antes iniciar el uso del servicio se cuente con un acceso activo en el [Centro de Soporte de Modyo](https://support.modyo.com). Para dudas sobre cómo activar cuentas en el Centro de Soporte, favor contactar al ejecutivo de cuentas asignado.

::: tip Costos de activación
La activación de los componentes podría tener costos recurrentes asociados. Cada solicitud debe contar con la aprobación de los usuarios autorizados por el cliente.
:::

## Ambientes
Modyo Connect considera ambientes productivos y pre-productivos, los cuales son desplegados en redes privadas virtuales totalmente separadas entre sí. Los clientes pueden solicitar hasta dos ambientes pre-productivos por despliegue, pero se deben tener en cuenta que cada ambiente genera costos recurrentes adicionales, medidos en los [Modyo Resource Units o MRUs](resources/mrus.md) utilizados.