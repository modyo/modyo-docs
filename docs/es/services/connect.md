---
search: false
---

# Modyo Connect

Modyo Connect es nuestro servicio manejado de plataforma de nube como servicio (PaaS) 100% administrado sobre Amazon AWS.


### ¿Qué es un SRE?

SRE es la adbreviación de Site Reliability Engineer.

Dentro de las responsabilidades primarias de in ingeniero SRE destacamos:
- Monitoreo de métricas de los servicios
- Respuesta a incidentes
- Planeación de la capacidad
- Comisión y decomisión de servicios y ambientes
- Gestión de cambios
- Rendimiento


Modyo Connect - Operativo

Modyo Connect es un servicio complementario ofrecido a clientes Enterprise Cloud que les permite contar con un completo ambiente de desarrollo, despliegue y operación de todos los componentes requeridos para desarrollar una arquitectura de integración, entre los cuales podemos mencionar: API Gateway, Single Sign On, Microservicios, Pipelines de automatizaciones, etc. 

Generales
Activación de Modyo Connect
La activación de Modyo Connect se realiza por medio de un ejecutivo comercial de Modyo. 
Modyo Connect sólo está disponible para clientes en modalidad Enterprise Cloud.

Gestión de Solicitudes
La gestión de solicitudes es lo primero que debemos entender después de la activación del servicio.
La gestión de solicitudes se realiza por medio del centro de soporte de Modyo.

Los clientes deberán informar a Modyo quienes serán las contrapartes autorizadas para realizar solicitudes.

Ambiente de Nube
Activación de perfiles externos por IAM

Creación de Ambientes

Tipo de solicitud: Requerimiento simple.
Tiempo aproximado de ejecución: 16 horas desde que se acepta el requerimiento.

El ticket debe indicar:
Tipo de ambiente solicitado: production, certification, staging.

Al configurar ambientes, más información podría ser requerida por parte del SRE, por lo que debemos estar atentos al sistema de seguimiento en caso de que se solicite información adicional.

Gestión de Dominios y Certificados

Gestión de Repositorios
Creación / Modificación de Repositorios de Código
Repositorios pueden ser de cualquier tipo: microservicio, intermediario,m widget o infraestructura
Reglas o permisos de acceso
Privacidad del repositorio
Protecciones o automatizaciones para ciertas ramas
Activación de funcionalidades de GitHub

Gestión de Usuarios en Repositorios

Gestión de Pipelines
Creación / Modificación de pipeline de Infraestructura

Gestión del SSO
Creación / Modificación de Sistema de SSO
Se implementa con KeyCloak
Modificaciones incluyen parametría general, seguridad, reglas, Realm “master”
Gestión de integraciones para autenticaciones delegadas en sistemas de tercero
Creación / Modificación de usuarios en el Realm Master
Creación / Modificación de Realms
Creación 
¿Creación y gestión de usuarios dentro del Realm debería estar incluída?
La responsabilidad de la gestión de los realms de usuarios finales debería recaer siempre por el lado del cliente.



Balanceo de Carga

API Gateway


Gestión de Bases de Datos


Gestión de Contenedores
Gestión de Secretos


Monitoreo y Alertas en Tiempo Real
Accesos a NewRelic



Seguridad Avanzada
WAF externos
Inspección de logs
Pruebas de penetración
Las pruebas o test de penetración que son realizados por nuestros clientes. Antes de iniciar la prueba se debe notificar mediante un requerimiento simple el día y hora en la que se realizarán las pruebas, así como también información de contacto en caso de que el ingeniero SRE requiera alertar de alguna situación particular.


Auditoría de Seguridad y Configuraciones

