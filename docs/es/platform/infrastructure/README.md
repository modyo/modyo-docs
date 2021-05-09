---
search: true
---

# Arquitectura
Los sistemas de DXP juegan un rol fundamental en cualquier estrategia de transformación digital. Sus capacidades de tomar control de los canales principales de comunicación con clientes y colaboradores hacen necesaria una sólida estrategia de integraciones hacia el resto del ecosistema de aplicaciones de negocio que forman parte en cada estrategia.

La Plataforma Modyo, mediante un esquema de integración descentralizado basado en APIs y microservicios, permite adaptarse a diferentes desafíos. A diferencia de las plataformas monolíticas que buscaban tener una respuesta interna para cada problema, los DXP de siguiente generación privilegian la integración con plataformas especializadas en lugar de ofrecer todas las funcionalidades. Esto se traduce en plataformas más livianas y adaptables a cada necesidad, permitiendo a las organizaciones elegir dentro del ecosistema las mejores soluciones que se adapten a sus realidades específicas, bajando con ello los costos totales de operación e infraestructura, al escalar sólo los recursos que lo requieren.
 

## Arquitectura de Referencia
La arquitectura de referencia sobre la cual se implementa la Plataforma Modyo varía entre escenarios simples, en los que no se requiere mayor integración como sitios públicos o intranets, a escenarios más complejos, en los cuales se requiere implementar funcionalidad adicional. En este segundo escenario, las integraciones a los sistemas de negocio se realizan mediante una capa de APIs las cuales se implementan de forma independiente a la plataforma, como se aprecia en el siguiente diagrama.

<img src="/assets/img/infrastructure/reference_architecture.png" style="margin-top: 40px;" />


La parte izquierda del diagrama corresponde a la Plataforma Modyo, cuya responsabilidad principal corresponde a la gestión de los canales digitales Web, Web Mobile y Progresive Web Application (PWA). La plataforma otorga las herramientas necesarias para la gestión del ciclo de vida de todos los desarrollos de frontend, incluyendo tanto sitios Web como Widgets, los cuales pueden iniciar conexiones a la capa de integración.

En la parte derecha del diagrama, se aprecia la capa de integración en donde el sistema de  Single Sign On (SSO) actúa como pivote central de autenticación, y que, en conjunto con el API Gateway representan el corazón de cualquier iniciativa de transformación digital otorgando:
Un acceso unificado para todos los canales digitales
Un puente multicanal de acceso a los sistemas de negocio
APIs que pueden ser consumidas de forma segura desde Internet
Un ambiente sobre el cual orquestar y consolidar las llamadas a los sistemas de negocio, otorgando un acceso único a los diferentes canales digitales
Un mecanismo para interoperar a nivel de APIs con múltiples socios de negocio

Modyo cuenta con servicios manejados para ambas partes del diagrama. En el caso de la Plataforma se ofrece una solución Software as a Service (SaaS) en versiones Cloud y Enterprise Cloud. En el caso de la capa de integración, Modyo ofrece un servicios manejado tipo Platform as a Service (PaaS) llamado Modyo Connect, el cual se hace cargo de la gestión del SSO, el API Gateway y todo lo requerido para manejar el ciclo de vida de desarrollo de microservicios y componentes de integración. La integración por Modyo Connect sólo está disponible para clientes en Enterprise Cloud.