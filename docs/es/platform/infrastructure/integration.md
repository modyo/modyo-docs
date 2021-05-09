---
search: true
---

# Integración


## Integraciones de la Plataforma
Las integraciones de plataforma, corresponde a todas aquellas integraciones que se establecen por Modyo de forma directa y sin necesidad de requerir grandes desarrollos. Estas integraciones responden a diferentes propósitos según el contexto en el que se usen, pero en su gran mayoría se relacionan al perfil de los usuarios y la comunicación con éstos.

A continuación se revisan las integraciones de plataforma más relevantes.

### Integración con CRMs y CDPs
Los sistemas de Customer Relationship Management (CRM) y de Customer Data Platform (CDP) gestionan datos de clientes interconectados a diferentes aplicaciones de negocio, con el fin de brindar una visión unificada del comportamiento de éstos. 

Modyo Customers es la aplicación dentro de Modyo en donde convergen las acciones y eventos de negocios de los usuarios autenticados, realizadas sobre los diferentes canales digitales gestionados por la plataforma. Modyo Customers permite segmentar las audiencias utilizando tanto información del comportamiento de los usuarios como de los datos en sus perfiles. Es precisamente esto último lo que puede ser enriquecido mediante la integración de sistemas como CRMs y CDPs.

Para realizar este tipo de integración, se hace uso del API administrativa de Modyo Customers la cual permite obtener la información presente en Modyo de los usuarios así como también actualizar los atributos de éstos en caso de ser requerido. Esta API también permite la ejecución de tareas administrativas como la creación de nuevos usuarios o la desactivación de ellos en la plataforma.

Para hacer uso del API administrativa de Modyo Customers se requiere de un token de autenticación válidamente emitido a nombre de un usuario administrador, el cual debe poseer los permisos suficientes para realizar las tareas que se desean automatizar.

Además, existen soluciones comúnmente usadas por medianas y grandes empresas que poseen herramientas propias de integración hacia este tipo de APIs, como es el caso de Flows de SalesForce o Power de Microsoft Dynamic. En ambos casos el API de Modyo Customers será suficiente para poder mantener actualizado los registros en ambas direcciones, gatillando los flujos desde estos sistemas.

### Integración con SSO
Los sistemas de Single Sign On (SSO) son una pieza clave en la estrategia de integración del DXP de Modyo hacia los sistemas de negocio.

Actualmente la plataforma soporta la integración a sistemas de SSO de dos formas:
Integración de cuentas de usuario administradores
Integración de cuentas de usuarios finales

En el caso de la integración con cuentas de administración, Modyo cuenta con soporte nativo para LDAP, SAML, OAuth 2.0, OIDC y Google Workspace.

En el caso de la integración con cuentas de usuario, Modyo cuenta con soporte nativo para OAuth 2.0, OIDC y Google Workspace.


### Integración con mensajería
La integración con sistemas de mensajería permite el envío de mensajes de notificación y campañas de marketing a usuarios finales que se encuentren habilitados dentro de un Realm en Modyo Customers.

Actualmente soportamos los canales de mensajería de Email, SMS, Whatsapp for Business, Web Push, Push y notificaciones en la aplicación Web.

El envío de mensajes también se encuentra disponible desde el API de Modyo Customers, para permitir a los microservicios de integración enviar notificaciones a los usuarios y darle seguimiento a éstas.

### Integración mediante WebHooks
La integración mediante....

Integración con medios de pago
La integración con medios de pago se activa en Modyo como un mecanismo que permite cobrar montos de dinero a usuarios integrado a un flujo previamente definido, mediante el API de Modyo Commerce. Modyo posee características nativas de integración hacia diferentes medios de pagos, entre los cuales podemos mencionar:
- Transbank WebPay
- Transbank OnePay
- Khipu
- PayU


¿Qué integraciones planeamos a futuro?
Las siguientes integraciones son parte hoy de nuestro roadmap en el producto y permitirán mejorar la postura del producto frente a la integración con las plataformas más populares en uso por nuestros clientes.

Plataformas de Chat empresarial
La integración con chat para notificaciones (Slack y Microsoft Teams) de la plataforma será implementada en el transcurso del año 2021 como parte de las mejoras referidas a la experiencia de la administración mediante la consola Web. La integración se realizará mediante un bot de Modyo que estará disponible para ambas plataformas y que permitirá notificar, en canales específicos, los diferentes eventos que ocurren dentro de Modyo y requieren de la atención de algún usuario en particular (comentarios, requerimientos de revisión, publicación de contenido, etc).

SalesForce AppExchange
Si bien el API administrativa de Modyo Customers permite hoy realizar integraciones con diferentes CRMs y CDPs, creemos que para el caso de SalesForce debemos hacer algo más. Es por ello que tenemos planes para poder realizar una integración más profunda y que permita de una forma más simple mantener los registros de Modyo y Salesforce sincronizados.

Indexadores de Contenido
Actualmente tenemos en mente generar una integración directa con Algolia, el cual se presenta como una solución de búsqueda de contenido empresarial que permite a los responsables del marketing efectuar boosting de resultados o A/B testing en las búsquedas.
Algolia posee soluciones de indexación no sólo al contenido presente en páginas regulares, sino también en contenido que proviene desde un API.

Auto Provisioning de Usuarios Administradores
Mediante el soporte del protocolo SCIM buscamos adoptar un protocolo estándar que permita realizar las actividades de provisión automática de usuarios administradores en conjunto con SAML. De esta manera, al dar de alta o baja un colaborador en los registros centrales de nuestros clientes, este será incorporado o removido de forma automática en Modyo.

Integraciones desde Sitios Web
Las integraciones que se realizan desde sitios Web se realizan mediante scripts que se instalan mediante el acceso de los desarrolladores de frontend al código fuente de cada sitio creado sobre Modyo. Los siguientes grupos de integraciones son los más comunes.

Herramientas de Analítica
Google Analytics
Google Tag Manager




Herramientas de Marketing
Con acceso al HTML, entre las cuales se encuentran:
Google Optimice
SalesForce Marketing Cloud

Herramientas de Tracking de Usuarios

Herramientas de 


Herramientas de Seguridad y Rendimiento

NewRelic Browser



Integraciones con APIs Externas
APIs púbicas
Las integraciones con APIs externos se realizan directamente desde el frontend de Modyo, mediante Widgets desarrollados en Javascript que poseen la funcionalidad de invocar fuentes de contenido .
La integración por medio de APIs desde Widgets requiere de endpoints que estén públicamente expuestos en Internet (o en Intranet en caso de despliegues cerrados) y utilizan el protocolo HTTP. Dependiendo de las políticas de seguridad configuradas en el endpoint, una validación de dominio por CORS podría ser requerida.

APIs privadas
Las APIs privadas son aquellas que requieren de un mecanismo de autenticación



Integraciones con Modyo Connect
Modyo Connect es un servicio manejado de API Management y Microservicios que toma parte del ciclo de vida completo de desarrollo de componentes de integración.

Los componentes son desarrollados en el framework de Spring Boot el cual posee una gran variedad de mecanismos y librerías de integración, entre las cuales podemos mencionar:

Además, Spring cuenta con un framework avanzado de integración llamado Spring Integration, el cual posee mecanismos directos para más conexiones con múltiples orígenes de información (bases de datos, SAP, Web Services, FTP, etc).

Spring también es compatible con frameworks externos, como es el caso de Apache Camel.


Todos los proyectos.



Integración a Sistemas de Negocio


Integración a Sistemas de Validación


Integración a Firma Electrónica

Integración de Mensajería Avanzada


Intgeración eCommerce

