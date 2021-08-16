---
search: true
---

# Arquitectura
Los sistemas de DXP juegan un rol fundamental en cualquier estrategia de transformación digital. Sus capacidades de tomar control de los canales principales de comunicación con clientes y colaboradores hacen necesaria una sólida estrategia de integraciones hacia el resto del ecosistema de aplicaciones de negocio que forman parte en cada estrategia.

La Plataforma Modyo, mediante un esquema de integración descentralizado basado en APIs y microservicios, permite adaptarse a diferentes desafíos. A diferencia de las plataformas monolíticas que buscaban tener una respuesta interna para cada problema, los DXP de siguiente generación privilegian la integración con plataformas especializadas en lugar de ofrecer todas las funcionalidades. Esto se traduce en plataformas más livianas y adaptables a cada necesidad, permitiendo a las organizaciones elegir dentro del ecosistema las mejores soluciones que se adapten a sus realidades específicas, bajando con ello los costos totales de operación e infraestructura, al escalar sólo los recursos que lo requieren.
 

## Arquitectura de Referencia
La arquitectura de referencia sobre la cual se implementa la Plataforma Modyo varía entre escenarios simples, en los que no se requiere mayor integración como sitios públicos o intranets, a escenarios más complejos, en los cuales se requiere implementar funcionalidad adicional. En este segundo escenario, las integraciones a los sistemas de negocio se realizan mediante una capa de APIs las cuales se implementan de forma independiente a la plataforma, como se aprecia en el siguiente diagrama.

<img src="/assets/img/infrastructure/reference_architecture.png" style="margin-top: 40px;" />


La parte izquierda del diagrama corresponde a la Plataforma Modyo, cuya responsabilidad principal corresponde a la gestión de los canales digitales Web, Web Mobile y Progressive Web Application (PWA). La plataforma otorga las herramientas necesarias para la gestión del ciclo de vida de todos los desarrollos de frontend, incluyendo tanto sitios Web como Widgets, los cuales pueden iniciar conexiones a la capa de integración.

En la parte derecha del diagrama, se aprecia la capa de integración en donde el sistema de  Single Sign On (SSO) actúa como pivote central de autenticación, y que, en conjunto con el API Gateway representan el corazón de cualquier iniciativa de transformación digital otorgando:
Un acceso unificado para todos los canales digitales
Un puente multicanal de acceso a los sistemas de negocio
APIs que pueden ser consumidas de forma segura desde Internet
Un ambiente sobre el cual orquestar y consolidar las llamadas a los sistemas de negocio, otorgando un acceso único a los diferentes canales digitales
Un mecanismo para interoperar a nivel de APIs con múltiples socios de negocio

Modyo cuenta con servicios manejados para ambas partes del diagrama. En el caso de la Plataforma se ofrece una solución Software as a Service (SaaS) en versiones Cloud y Enterprise Cloud. En el caso de la capa de integración, Modyo ofrece un servicios manejado tipo Platform as a Service (PaaS) llamado Modyo Connect, el cual se hace cargo de la gestión del SSO, el API Gateway y todo lo requerido para manejar el ciclo de vida de desarrollo de microservicios y componentes de integración. La integración por Modyo Connect sólo está disponible para clientes en Enterprise Cloud.

## Versiones

La Plataforma Modyo es distribuida actualmente en dos versiones: Modyo Cloud y Modyo Enterprise. Modyo Cloud se despliega en una nube _multi-tenant_ en Amazon Web Services (AWS), en la cual los recursos son compartidos entre distintos clientes. Modyo Enterprise se puede desplegar en modalidad _Cloud_ u _On Premise_. Un cliente de Modyo Enterprise Cloud también puede escoger una versión menos estable, recibiendo a cambio como beneficio las mejoras más recientes.

En el caso de las versiones Cloud y Enterprise Cloud, el valor de suscripción incluye los servicios de soporte 24x7 a la infraestructura.

### Modyo Cloud

La versión Cloud de Modyo representa la alternativa más económica y simple de suscripción a la plataforma. Desplegada en un ambiente _multi-tenant_, la infraestructura es compartida entre múltiples clientes de forma que los datos e información particular de cada uno se encuentran separados de forma lógica, pero desplegados en un repositorio común.

La versión Cloud de Modyo recibe actualizaciones de forma periódica y la plataforma siempre se encuentra desplegada en su última versión. Los clientes no poseen la opción de elegir en qué versión de Modyo desean estar.


### Modyo Enterprise Cloud

El despliegue Enterprise Cloud de Modyo ha sido diseñado pensando en el cumplimiento y conformidad de las más exigentes normativas de distintas industrias, con características únicas que la diferencian de la alternativa Cloud, entre las que podemos mencionar:
- Accesos controlados por parte de los clientes a la infraestructura desplegada en la nube.
- Acceso a auditar las configuraciones de AWS.
- Plantilla de infraestructura como código (IoC) dedicada para cada cliente.
- Personalización de las características del despliegue en AWS.
- Posibilidad de despliegue en una cuenta de AWS totalmente aislada.
- Acceso a los logs aplicativos y de seguridad.
- Integración con firewalls aplicativos del cliente (Incapsula, Akamai, Cloudflare, entre otros).
- Encriptación avanzada.
- Panel de monitoreo personalizado de métricas del entorno en el Centro de Soporte de Modyo.


### Modyo Enterprise On Premise

El despliegue Enterprise On Premise de Modyo permite desplegar la plataforma en un ambiente totalmente controlado por el cliente, ya sea en la nube o en un centro de datos tradicional. Modyo provee para este caso de un completo servicio de soporte de infraestructura que permite brindar un acompañamiento en todos los procesos de configuración y operación de la plataforma, el cual abarca tanto al software de Modyo, como a todos los componentes de su _stack_ tecnológico.

