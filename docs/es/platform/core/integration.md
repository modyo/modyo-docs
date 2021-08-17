---
search: true
---

# Integraciones
Los sistemas de DXP juegan un rol fundamental en cualquier estrategia de transformación digital. Sus capacidades de tomar control de los canales principales de comunicación con clientes y colaboradores hacen necesaria una sólida estrategia de integraciones hacia el resto del ecosistema de aplicaciones de negocio que forman parte en cada estrategia.

La Plataforma Modyo, mediante un esquema de integración descentralizado basado en APIs y microservicios, permite adaptarse a diferentes desafíos. A diferencia de las plataformas monolíticas que buscaban tener una respuesta interna para cada problema, los [DXP de siguiente generación](https://www.modyo.com/platform) privilegian la integración con plataformas especializadas en lugar de ofrecer todas las funcionalidades. Esto se traduce en plataformas más livianas y adaptables a cada necesidad, permitiendo a las organizaciones elegir dentro del ecosistema las mejores soluciones que se adapten a sus realidades específicas, bajando con ello los costos totales de operación e infraestructura, al escalar sólo los recursos que lo requieren.

## Integraciones de la Plataforma
Las integraciones de plataforma, corresponde a todas aquellas integraciones que se establecen por Modyo de forma directa y sin necesidad de requerir grandes desarrollos. Estas integraciones responden a diferentes propósitos según el contexto en el que se usen, pero en su gran mayoría se relacionan al perfil de los usuarios y la comunicación con éstos.

A continuación se revisan las integraciones de plataforma más relevantes.

### Integración con CRMs y CDPs
Los sistemas de Customer Relationship Management (CRM) y de Customer Data Platform (CDP) gestionan datos de clientes interconectados a diferentes aplicaciones de negocio, con el fin de brindar una visión unificada del comportamiento de éstos. 

Modyo Customers es la aplicación dentro de Modyo en donde convergen las acciones y eventos de negocios de los usuarios autenticados, realizadas sobre los diferentes canales digitales gestionados por la plataforma. Modyo Customers permite segmentar las audiencias, utilizando tanto información del comportamiento de los usuarios como de los datos en sus perfiles. Es precisamente esto último lo que puede ser enriquecido mediante la integración de sistemas como CRMs y CDPs. Para realizar este tipo de integración, se hace uso del API administrativa de Modyo Customers, la que permite obtener la información de los usuarios en Modyo así como también actualizar los atributos de éstos en caso de ser requerido. Además, esta API permite la ejecución de tareas administrativas como la creación de nuevos usuarios o la desactivación de ellos en la plataforma.

El API administrativa de Modyo requiere de un token de autenticación válidamente emitido a nombre de un usuario administrador, quien debe poseer los permisos suficientes para realizar las tareas que se desean automatizar.

La API de Modyo Customers también se puede usar para mantener los registros actualizados con otras soluciones empresariales, como Flows de SalesForce o Power de Microsoft Dynamic, gatillando flujos en ambas direcciones.


### Integración con SSO
Los sistemas de Single Sign On (SSO) son una pieza clave en la estrategia de integración del DXP de Modyo hacia los sistemas de negocio.

Actualmente la plataforma soporta la integración a sistemas de SSO de dos formas:
- Integración de cuentas de usuario administradores
- Integración de cuentas de usuarios finales

En el caso de la integración con cuentas de administración, Modyo cuenta con soporte nativo para LDAP, SAML, OAuth 2.0, OIDC y Google Workspace.

En el caso de la integración con cuentas de usuario, Modyo cuenta con soporte nativo para OAuth 2.0, OIDC y Google Workspace.


### Integración con mensajería
La integración con sistemas de mensajería permite el envío de mensajes de notificación y campañas de marketing a usuarios finales que se encuentren habilitados dentro de un Realm en Modyo Customers.

Actualmente soportamos los canales de mensajería de Email, SMS, Whatsapp for Business, Web Push, Push y notificaciones en la aplicación Web.

Los microservicios de integración también pueden enviar notificaciones a los usuarios y dar seguimiento a estas usando el API de mensajería de Modyo Customers.


### Integración mediante WebHooks
La integración mediante WebHooks posibilita que, en reacción a determinados eventos, la plataforma envíe un mensaje hacia un endpoint definido por el usuario en un formato JSON utilizando el protocolo HTTP y un POST simple que contiene la información relevante al evento que acaba de ocurrir.

Este tipo de integración se encuentra sólo disponible para eventos ocurridos dentro de la consola de administración de Modyo. Los eventos de negocio quedan excluidos.


### Integración con medios de pago
La integración con medios de pago se activa en Modyo como un mecanismo que permite cobrar montos de dinero a usuarios integrado a un flujo previamente definido, mediante el API de Modyo Commerce. Modyo posee características nativas de integración hacia diferentes medios de pagos utilizados comúnmente en América Latina, entre los cuales podemos mencionar:
- WebPay
- Bancard
- Khipu
- PayU
- PayMe
- TigoMoney

Para todos estos medios de pago, Modyo provee de una interfaz en la cual se puede revisar el estado de las transacciones asociado al perfil de un usuario autenticado a la plataforma. Además, la información de pagos y compras realizadas persiste en la plataforma para ser usada como criterio de segmentación.

Modyo se encuentra en un proceso contínuo de inclusión de nuevos medios de pago para incorporar a la plataforma.


## Sitios y Aplicaciones Web

Los sitios y aplicaciones Web construidos sobre Modyo podrán integrarse de forma nativa a un gran número de sistemas utilizando principalmente los estándares de HTML y Javascript, mediante el uso del editor de plantillas de Modyo Channels, el cual ofrece un completo acceso y control del código fuente de los sitios gestionados sobre él.

Las siguientes integraciones corresponden a las más comúnmente solicitadas.

### Herramientas de Analítica
Herramientas de analítica Web integradas en cada una de las páginas de un sitio mediante la inclusión de scripts dentro de los decoradores o layouts. En esta categoría podemos mencionar herramientas cómo:
- Google Analytics
- Google Tag Manager
- SalesForce Evergage
- Heap
- Segment
- Snowplow

Mediante el uso de tags específicos de Liquid, Modyo Channels es capaz de interpolar información de contexto a los eventos de tracking, cómo por ejemplo el nombre del usuario, el correo electrónico, el identificadores únicos, los segmentos a los que pertenece el usuario, entre muchos otros.

### Herramientas de Marketing
Herramientas de marketing digital que permiten alterar la experiencia de los usuarios según reglas previamente establecidas, tipo A/B testing o similares. En esta categoría podemos mencionar herramientas cómo:
- Google Optimice
- SalesForce Marketing Cloud

Mediante el acceso al código fuente de las páginas y Widgets que componen el sitio o aplicación Web, Modyo Channels permite la inclusión de marcas especiales en cada componente HTML que hacen más eficiente el uso de este tipo de herramientas de marketing digital.

### Herramientas de Chat
Las herramientas de chat son comúnmente usadas en acciones de soporte o marketing conversacional. La integración de estos componentes se realiza mediante un código de Javascript el cual instala el agente de comunicación en el sitio Web, típicamente en una zona de la pantalla que no interrumpa la visualización del contenido. En esta categoría podemos mencionar herramientas cómo:
- Intercom
- Drift
- Zendesk Chat 
- SalesForce Service Cloud

### Herramientas de Product Management
Las herramientas de product management se implementan mediante códigos Javascript que se instalan en diferentes ubicaciones de la página dependiendo del propósito. De esta manera pueden integrarse funcionalidades como tours de producto, captura de NPS, feedback, y captura de métricas orientadas al comportamiento de usuarios autenticados. En esta categoría podemos mencionar herramientas cómo:
- Pendo
- Qualtrics
- Hotjar

### Herramientas de Seguridad y Rendimiento
Las herramientas de seguridad y rendimiento se implementan de manera muy similar a las de analítica y product management, pero a diferencia de éstas el foco está orientado a la captura de la experiencia en cuanto a rendimiento, detección de errores de Javascript en el navegador y cumplimiento de niveles de servicio. En esta categoría podemos mencionar herramientas cómo:
- NewRelic Browser
- Dynatrace RUM
- Elastic Observability

### Integración con APIs públicas
Las integraciones con APIs públicas externas se realizan directamente desde el frontend de Modyo Channels, mediante el uso de Widgets desarrollados en Javascript que poseen la funcionalidad de invocar contenido y ejecutar acciones mediante el uso del protocolo HTTP.

La integración por medio de APIs desde Widgets requiere de endpoints que estén públicamente expuestos hacia Internet (o en Intranet en caso de despliegues privados). Dependiendo de las políticas de seguridad configuradas en el endpoint, una validación de dominio por CORS podría ser requerida.

### Integración con APIs privadas
Las APIs privadas se comportan de forma similar a las públicas, con la diferencia de que requieren de una autenticación. Esta autenticación puede ser iniciada de forma directa por el frontend desde un Widget de Modyo Channels o puede basarse en un token de seguridad previamente negociado por Modyo Customers y alguna integración de SSO.

Modyo no recomienda la integración directa desde el frontend ya que dificulta el proceso de gestionar los tokens de autenticación de forma segura. En lugar de ello, el flujo iniciado por Modyo Customers asegura una apropiada gestión de las credenciales y establece mecanismos de consulta para que el Widget que lo requiera pueda obtener un token válido cada vez que lo requiera.

