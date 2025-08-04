---
search: true
---

# Infraestructura

Los componentes de infraestructura proporcionan un ambiente de ejecución seguro y escalable para las APIs y [microservicios](/es/architecture/patterns/microservice) desarrollados sobre Modyo Connect en la nube de [Amazon AWS](https://aws.amazon.com). 

Los componentes de infraestructura son completamente gestionados por el servicio de Modyo Connect; los usuarios solo se preocupan por el código desplegado. Un equipo de expertos en la nube de Modyo se encarga de parametrizar, automatizar, monitorear y asegurar la continuidad del servicio según los niveles acordados.

En la presente guía se detallan los componentes de infraestructura más relevantes dentro del servicio de Modyo Connect.

## Balanceo de Carga

El balanceo de carga distribuye las peticiones de Internet entre un grupo de servidores. 

Modyo Connect implementa el balanceo de carga mediante [AWS Application Load Balancer (ALB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html). El ALB se integra de forma nativa con otros servicios de AWS, ofreciendo características de seguridad únicas como redirección de rutas y protocolos, [certificados SSL/TLS](#certificados-ssl-tls) y la incorporación de [firewalls de aplicaciones web (WAF)](#firewall-aplicativo-waf).

### Pasos para activar

Para solicitar la creación de un balanceador ALB en AWS, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com) que incluya:

- Dominio a apuntar al ALB.
- Descripción del caso de uso y servicio al que se aplicará.
- Contacto técnico del administrador de DNS para validación de certificados SSL/TLS y redirecciones.

Una vez creado, el balanceador podrá ser utilizado por un servicio dentro de un clúster de [contenedores](#contenedores).

:::warning Aplicaciones externas
El balanceador de carga AWS ALB no puede dirigir tráfico hacia recursos de AWS desplegados fuera de la red privada virtual (VPC) donde se despliega, por lo que solo debe considerarse para usos con recursos internos.
:::


## API Gateway

El API Gateway es el punto de entrada para todas las APIs desplegadas en Modyo Connect. Se encarga de gestionar y autorizar las peticiones entrantes, canalizándolas al microservicio correcto. Es capaz de realizar funciones de monitoreo, gestión de cuotas y caché para mejorar el rendimiento de las APIs. Modyo Connect utiliza [AWS API Gateway](https://aws.amazon.com/api-gateway), un servicio abstracto ofrecido por AWS.

La incorporación de endpoints en el API Gateway se realiza mediante anotaciones especiales en el código fuente del microservicio (Java Spring Boot). Al momento del despliegue, estas anotaciones permiten obtener una definición [Swagger](https://swagger.io) de la API, la cual se incorpora dinámicamente al servicio, como se muestra en el siguiente ejemplo:

``` Java
package com.example.adapters.web;

import com.example.dto.UsersDto;
import com.example.service.UsersService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Authorization;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = {"Users"})
@RestController
@RequiredArgsConstructor
public class GetUsersController {
  @ApiOperation(
      value = "Get Users",
      nickname = "getUsers",
      tags = {
          "Users"
      },
      authorizations = {@Authorization(value = "ApiGWLambdaAuthorizer")},
      response = UsersDto.class)
  @GetMapping(value = "/users",
      produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<UsersDto> getUsers(
      @RequestHeader("Authorization") String accessToken
  ) {
    return ResponseEntity.ok(service.getUsers());
  }
}
```

La generación de las definiciones para el API Gateway se realiza dentro de un pipeline automatizado de [integración continua](development.md#integracion-continua), el cual debe estar previamente definido.

### Conectividad con los contenedores

El API Gateway, al ser un servicio abstracto de AWS, opera fuera de la [Virtual Private Cloud (VPC)](https://aws.amazon.com/vpc) del cliente. Para la integración con los contenedores, se utiliza una interfaz de red privada acoplada a un [Network Load Balancer (NLB)](https://aws.amazon.com/elasticloadbalancing/network-load-balancer) ubicado dentro de la VPC. Los diferentes [contenedores](#contenedores) se registran automáticamente desde la plataforma de gestión de contenedores de [AWS Elastic Container Service (ECS)](https://aws.amazon.com/ecs). El NLB se encarga del balanceo y el chequeo de salud de los contenedores registrados.

### Pasos de activación

Para solicitar la creación de un API Gateway en AWS, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com).

Como regla general, cada ambiente cuenta con un único API Gateway compartido para todos los microservicios desplegados. Si se requiere autenticación en las llamadas a las APIs mediante tokens JWT, el API Gateway debe desplegarse en conjunto con el componente de [Single Sign-On (SSO)](#single-sign-on-sso). 

:::tip Autorización de invocaciones
Para autorizar invocaciones a APIs privadas, el AWS API Gateway establece comunicación con el SSO mediante una rutina [AWS Lambda](https://aws.amazon.com/lambda) denominada [Lambda Authorizer](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html), que se despliega internamente y de forma transparente como parte del servicio.
:::

## Contenedores

Los contenedores son el ambiente de ejecución para los microservicios. A diferencia de las máquinas virtuales, se recomienda que los contenedores ejecuten un solo proceso a la vez, lanzado desde una imagen generada mediante un archivo [Dockerfile](https://docs.docker.com/engine/reference/builder).

Modyo Connect utiliza el servicio de contenedores [serverless](https://aws.amazon.com) de [AWS ECS Fargate](https://aws.amazon.com/fargate) para ejecutar contenedores en la nube. Con ECS Fargate, no es necesario configurar servidores de la plataforma, ya que son gestionados por AWS.

### Lenguaje y framework de programación

En Modyo Connect, los microservicios se desarrollan usando [Spring Boot](https://spring.io/projects/spring-boot) con Java, debido a la simplicidad de este framework para proyectos de integración orientados a despliegues en microservicios. Spring Boot no requiere servidores de aplicaciones tradicionales, ya que define su propio runtime de ejecución. Además, las aplicaciones desarrolladas con Spring Boot escalan horizontalmente, permitiendo incrementar dinámicamente el número de contenedores según sea requerido.

Dentro del contenedor, se trabaja con el runtime de [OpenJDK 11 (J9)](https://www.eclipse.org/openj9), que ofrece características únicas de eficiencia y compatibilidad.

### Imagen de contenedor

Las imágenes de los contenedores se generan en un proceso de integración continua, siguiendo las definiciones provistas por el usuario. Una vez generadas, se almacenan de forma segura en el [AWS Elastic Container Registry (ECR)](https://aws.amazon.com/ecr), que se integra directamente con el servicio de AWS ECS.

A continuación se muestra un ejemplo de definición de contenedor que asigna el 75% de la memoria RAM disponible a la JVM de Java utilizada por el microservicio.

``` Dockerfile
FROM adoptopenjdk/openjdk11-openj9:jdk-11.0.10_9_openj9-0.24.0
WORKDIR /usr/app
COPY build/libs/<microservice-name>.jar .
CMD java -XX:MaxRAMPercentage=75.0 -XX:MinRAMPercentage=75.0 -XX:InitialRAMPercentage=75.0 -jar -Dhttps.protocols=TLSv1.2 <microservice-name>.jar
```

### Tamaño de las instancias

AWS ECS Fargate ofrece una [amplia variedad de configuraciones](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html), desde fracciones de vCPUs hasta 16 vCPUs dedicadas por contenedor. Según el número de vCPUs elegido, se activan rangos de memoria RAM dedicados (1 GB a 32 GB). El consumo de [MRUs](../resources/mrus.md) varía según el tamaño del nodo.

| CPU        |   Memory      |
| ------------- |:-----:|
|1 vCPU|2 GB ~ 8 GB (1 GB increments)|
|2 vCPU|4 GB ~ 16 GB (1 GB increments)|
|4 vCPU|8 GB ~ 30 GB (1 GB increments)|
|8 vCPU|16 GB ~ 60 GB (4 GB increments)|
|16 vCPU|32 GB ~ 120 GB (8 GB increments)|

Es importante considerar que en producción, las MRU utilizadas por el componente se multiplican por el factor de redundancia requerido por el cliente (mínimo 2 para multizona). Los ambientes de preproducción se configuran sin redundancia y pueden tener menos recursos asociados.

:::warning Fracciones de vCPUs
AWS permite definir contenedores con fracciones de vCPUs (ej. 0.25 vCPU o 0.75 vCPU). Sin embargo, las aplicaciones que se ejecutan con una Java Virtual Machine (JVM), al ser un ambiente de ejecución multihilo, no se benefician de despliegues con fracciones de vCPU, ya que esto genera bloqueos de I/O que afectan considerablemente su rendimiento. Por ello, el mínimo aceptado para Modyo Connect es 1 vCPU y el máximo es 16 vCPU.
:::

### Pool de conexiones

En muchos casos, se requiere una [base de datos](#bases-de-datos) conectada a los microservicios. Se debe asegurar que el tamaño de la base de datos sea suficiente para el número de instancias de contenedor consideradas (incluyendo el rango de autoescalabilidad). Las conexiones concurrentes a la base de datos estarán determinadas por el tamaño del [pool de conexiones](https://www.baeldung.com/java-connection-pooling) definido en cada microservicio.

### Pasos de activación

Para solicitar la creación de un contenedor en AWS, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com) indicando:
- Nombre y ubicación del repositorio de código.
- Rama desde la cual se debe realizar el despliegue automático de cada ambiente.
- Variables de entorno a inyectar por cada ambiente.

Cada contenedor debe estar asociado a un [repositorio único de código](development.md#repositorio-de-codigo). Una misma rama no puede apuntar a más de un ambiente (productivo o pre-productivo).

:::tip Aprender más
Para más información, favor referirse a la guía de desarrollo de [microservicios](/es/architecture/patterns/microservice).
:::

## Gestión de Secretos

Modyo Connect permite la gestión segura de secretos para información sensible en los [microservicios](/es/architecture/patterns/microservice) mediante [AWS Secrets Manager](https://aws.amazon.com/secrets-manager). Este servicio genera un almacén centralizado y seguro de parámetros, evitando que se almacenen en el código o como variables de entorno (ej. credenciales de bases de datos, tokens de acceso a APIs, credenciales de servicios externos).

Adicionalmente, existe una gestión de secretos en el repositorio de [GitHub Enterprise](https://github.com/enterprise) de Modyo, utilizada internamente para compartir tokens de acceso con los scripts de integración continua de [GitHub Actions](https://github.com/features/actions). Si se requiere incorporar un secreto en el proceso de GitHub Action, puede solicitarse mediante un ticket de activación.

### Pasos de activación

Para solicitar la configuración de un nuevo secreto, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com) indicando:

- Nombre del secreto.
- Almacén donde desea ser creado (GitHub o AWS).
- Método seguro para la entrega del valor del secreto. 

:::danger Confidencialidad de secretos
Modyo no recomienda adjuntar los valores de los secretos en el ticket de activación. Se debe establecer un canal seguro de comunicación con el cliente para asegurar la confidencialidad de los valores a configurar (ej. correo electrónico encriptado).
:::

## Encriptación

Modyo utiliza la encriptación gestionada de [AWS Key Management Service (KMS)](https://aws.amazon.com/kms) para el cifrado seguro de toda la información en repositorios de objetos y volúmenes de datos administrados para el cliente.

Las claves gestionadas por AWS KMS se generan mediante el estándar AES 256 y poseen un ciclo de regeneración anual automático, lo que elimina la necesidad de acciones manuales para renovar y actualizar los recursos con las nuevas claves.

Modyo configura claves AWS KMS independientes para cada recurso. Por defecto, se delega a AWS la generación y gestión completa de las claves de cifrado. Si un cliente lo desea, se pueden incorporar al servicio claves gestionadas externamente mediante el módulo de [AWS CloudHSM](https://aws.amazon.com/cloudhsm).

### Pasos de activación

La encriptación proporcionada por las claves gestionadas de AWS KMS está activa por defecto en todos los repositorios de objetos de AWS S3 y volúmenes de datos de AWS RDS y OpenSearch, por lo que no requiere activación. 

En el caso de requerir la incorporación de una clave gestionada externamente mediante AWS CloudHSM, se debe notificar mediante un ticket de requerimiento en el Centro de Soporte de Modyo, indicando el motivo y el plan de gestión de la clave (implementación, renovaciones, etc.).

:::warning Rotación de llaves
Las claves gestionadas por el cliente no rotan automáticamente una vez al año como las generadas por AWS KMS. Por lo tanto, es responsabilidad del cliente planificar y solicitar la rotación de claves cuando sea requerido.
:::

## Certificados SSL/TLS

Los certificados SSL/TLS aseguran una encriptación segura para todas las operaciones en tránsito desde los endpoints HTTPS del servicio. Se pueden activar a nivel del balanceador de carga, la red de distribución de contenido (CDN) y el API Gateway.

Para generar y mantener actualizados los certificados SSL/TLS, Modyo Connect utiliza AWS Certificate Manager (ACM). Los certificados generados por ACM requieren una verificación en el dominio, que debe ser realizada por el cliente incorporando los registros DNS de tipo CNAME indicados en el proceso de generación. Una vez emitido el certificado, el cliente tiene tres días para configurar su DNS; de lo contrario, el certificado deberá emitirse nuevamente.

:::warning Seguridad de llaves privadas
Modyo no posee acceso a las claves privadas de los certificados emitidos por AWS ACM, ni podrán ser utilizados fuera de los servicios soportados en la cuenta AWS configurada para el cliente.
:::

### Pasos de activación

Para solicitar la emisión de un certificado TLS, se deben indicar los dominios o subdominios a incluir. El solicitante debe asegurarse previamente de tener acceso al panel de gestión de DNS para el dominio o de contar con la disponibilidad de la persona que posee el acceso. Adicionalmente, el cliente podrá seleccionar una [política de seguridad](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies) para el certificado.

Al momento de la solicitud, Modyo emitirá un certificado "pendiente de validación" que requiere validación mediante registros DNS.

:::warning Validación de dominios por DNS
Los registros DNS utilizados para la validación del certificado no deben eliminarse, ya que AWS ACM los utilizará para su renovación periódica. Es responsabilidad del cliente asegurar la existencia de estos registros en su sistema DNS.
:::

Consideraciones adicionales:

- Modyo no recomienda el uso de certificados wildcard (*.dominio.com) dentro de los servicios.
- Modyo utiliza la política de cifrado recomendada por AWS, que garantiza seguridad y mantiene cierta compatibilidad con dispositivos antiguos. Si el cliente desea activar [políticas de cifrado](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies) más seguras (con riesgo de disminuir la compatibilidad), debe especificarlo en el ticket.


## Single Sign On (SSO)

El servicio de Single Sign-On (SSO) permite incorporar la autenticación de usuarios a las iniciativas de desarrollo con Modyo Connect. Los usuarios autenticados podrán compartir su sesión entre la plataforma Modyo y las llamadas al API Gateway, permitiendo el acceso a recursos protegidos no disponibles públicamente en Internet.

El servicio de SSO de Modyo Connect se implementa utilizando [KeyCloak](https://www.keycloak.org), una aplicación de código abierto patrocinada por [Red Hat](https://www.redhat.com) que ofrece soporte pagado adicional. KeyCloak se despliega sobre contenedores en modo clúster de alta disponibilidad, con capacidad de escalar. Modyo Connect otorga acceso al repositorio de la imagen de contenedor configurada para KeyCloak, permitiendo controlar personalizaciones de experiencia de usuario y flujos de autenticación no estándar.

### Pasos de activación

Las solicitudes de despliegue de SSO sobre Modyo Connect se realizan mediante un ticket en el [Centro de Soporte de Modyo](https://support.modyo.com). En el ticket, se puede especificar si se requiere acceso a la administración total de la aplicación o la creación de reinos de usuarios con configuraciones específicas.

La activación de SSO sobre Modyo Connect requiere la existencia previa de una [base de datos](#bases-de-datos) debidamente configurada para el servicio.

:::warning Personalizaciones de KeyCloak
Las personalizaciones de experiencia de usuario y flujos de autenticación en KeyCloak son responsabilidad del cliente y no están incluidas como parte del servicio. Si se requiere apoyo de servicios profesionales en la implementación de una iniciativa de SSO, se debe contactar al ejecutivo de cuentas asignado.
:::

:::warning Modelo de Responsabilidad Compartida
Modyo no se hace responsable por las personalizaciones o vulnerabilidades en el código personalizado del cliente. Algunas personalizaciones podrían requerir modificaciones al actualizar el software base de KeyCloak. Es responsabilidad del cliente efectuar las adecuaciones de forma oportuna para disminuir los riesgos asociados a los procesos de actualización.
:::

## Repositorio de Objetos

El repositorio de objetos proporciona un almacenamiento de archivos seguro y escalable en la nube, accesible mediante protocolos web. Modyo Connect implementa el repositorio de objetos utilizando [AWS S3](https://aws.amazon.com/s3).

Los permisos de acceso, asociados a cada archivo o generales para el repositorio, se especifican mediante la API del servicio AWS S3. El cliente es responsable de la asignación de estos permisos.

:::tip Acceso al API de AWS S3
El acceso al repositorio se realiza mediante la API del servicio AWS S3. Existen múltiples librerías cliente y aplicaciones de transferencia de archivos compatibles con el protocolo. Si el repositorio se utiliza dentro de los microservicios desplegados en Modyo Connect, las claves de API de AWS S3 se gestionarán como secretos de uso interno.
:::

### Pasos de activación

Para solicitar la creación de un repositorio de objetos en Modyo Connect, se debe crear un ticket en el [Centro de Soporte de Modyo](https://support.modyo.com) especificando la siguiente información:
- Nombre del repositorio.
- Tipo de almacenamiento (simple o versionado).
- Política de acceso (privado o público).
- Políticas de ciclo de vida (borrado automático después de un período de tiempo, permanente, etc.).

:::tip Aceleración en los accesos
El acceso a los archivos almacenados en el repositorio de objetos de AWS S3 puede acelerarse regionalmente mediante la [red de distribución de contenidos](#red-de-distribucion-de-contenidos) de Modyo Connect.
:::

## Red de Distribución de Contenidos

La red de distribución de contenidos (CDN) proporciona puntos de acceso al contenido distribuidos globalmente en centros de datos estratégicamente ubicados. Esto disminuye las latencias y la velocidad de descarga, mejorando la experiencia general del usuario.

Modyo utiliza [AWS CloudFront](https://aws.amazon.com/cloudfront) como red global de distribución de contenidos. Las configuraciones de CloudFront permiten definir reglas de caché a nivel de objetos y procesar funciones para sobrescribir cabeceras en las llamadas y respuestas del servicio.

### Pasos de activación

Para solicitar la creación de una distribución global de contenidos en Modyo Connect, se debe crear un ticket en el [Centro de Soporte de Modyo](https://support.modyo.com) especificando la siguiente información:
- Tamaño promedio de objetos en el repositorio.
- TB mensuales proyectados a consumir.
- Ubicaciones principales desde donde se espera recibir la mayor parte del tráfico.
- Reglas o criterios para el caché de objetos.
- Indicar si se requieren funciones de pre o post-procesamiento de invocaciones.


## Bases de Datos

Las bases de datos relacionales proporcionan un sistema de almacenamiento (RDBMS) seguro y escalable para los microservicios desplegados en Modyo Connect.

Modyo Connect utiliza [AWS RDS Aurora](https://aws.amazon.com/rds/aurora) para implementar las bases de datos. Compatible con MySQL, Aurora se configura como un clúster de alta disponibilidad donde los datos se replican simultáneamente en múltiples ubicaciones, a diferencia de un despliegue tradicional. 

:::tip Múltiples esquemas
Dentro de una misma base de datos configurada en Modyo Connect, se pueden definir múltiples esquemas lógicamente independientes y con diferentes permisos de acceso. Esta configuración permite reutilizar la misma instancia para diferentes propósitos en microservicios y/o SSO. Es importante considerar que, en este tipo de configuración, el cliente será responsable de seleccionar un tamaño apropiado del motor para controlar la concurrencia de acceso de forma efectiva (pools combinados de conexiones).
:::

### Tipos de instancias

Existen diferentes [tipos de instancias](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Performance.html) para desplegar una base de datos RDS Aurora. Dependiendo del tipo elegido, se podrá lograr una mejor concurrencia en el número de conexiones simultáneas, como se indica en la siguiente tabla:

| Tipo        |   Conexiones Máximas      |
| ------------- |:-----:|
|db.t3.small|45|
|db.t3.medium|90|
|db.r6.large|1000|
|db.r6.xlarge|2000|
|db.r6.2xlarge|3000|
|db.r6.4xlarge|4000|
|db.r6.8xlarge|5000|
|db.r6.12xlarge|6000|
|db.r6.16xlarge|6000|

:::warning Pre producción
Para los ambientes pre-productivos se recomienda el uso de instancias tipo “t3”.
:::

### Tamaño en disco y IOPS

El tamaño de disco y los IOPS en RDS Aurora se aprovisionan dinámicamente según el acceso a la información. El tamaño de disco inicial es de 10 GB y se incrementa en bloques similares de forma transparente para el usuario cuando es requerido.

### Backups y encriptación

Los backups en el servicio se gestionan de forma [automática](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html) mediante snapshots del sistema de almacenamiento, generados diariamente y replicados hacia la región de contingencia.

:::tip Global database
Dependiendo del nivel de suscripción, algunos clientes podrían tener habilitada una réplica activa de la base de datos en la región AWS de contingencia, con el fin de disminuir el RTO y RPO en caso de desastre.
:::

### Acceso a los datos
Si los clientes requieren acceso directo a la base de datos, la conexión debe realizarse exclusivamente mediante un enlace seguro tipo [VPN](#virtual-private-network-vpc). Modyo no expondrá bases de datos directamente a Internet.

### Pasos de activación
Para solicitar la creación de una base de datos RDS Aurora en Modyo Connect, se debe crear un ticket en el [Centro de Soporte de Modyo](https://support.modyo.com) especificando la siguiente información:
- Tipo de instancia (db.r6.large recomendado para producción).
- Nombre del esquema.


## Cache y NoSQL
Las bases de datos NoSQL proporcionan beneficios adicionales para implementar sistemas de caché o indexación, permitiendo acceder y consultar eficientemente grandes volúmenes de información. A diferencia de las bases de datos relacionales, las tecnologías NoSQL ofrecen soluciones específicas para cada caso de uso.

Modyo Connect ofrece dos soluciones NoSQL: [AWS ElastiCache](https://aws.amazon.com/elasticache) en su versión Redis, diseñada para almacenamiento y acceso rápido a datos o resultados de operaciones complejas (caché); y [AWS OpenSearch Service](https://aws.amazon.com/opensearch-service), diseñada para el almacenamiento de altos volúmenes de datos, proporcionando índices de búsqueda sobre datos estructurados y semiestructurados (ej. logs, registros de actividad de usuarios).

Ambos servicios se implementan siguiendo un esquema de alta disponibilidad sobre múltiples zonas dentro de una región de AWS. En ambos casos, se asume que la información almacenada es volátil, por lo que es responsabilidad del cliente asegurar que los registros existan también en un almacenamiento persistente (repositorio de objetos o base de datos relacional).

### Pasos de activación
Para solicitar la creación de uno de estos componentes en AWS, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com) indicando:
- Tipo de solución requerida (caché, indexación).
- Breve descripción del caso de uso a implementar.
- Tamaño de instancia de [AWS ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html) o [AWS OpenSearch](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/supported-instance-types.html).

## Colas de Mensajería
Las colas de mensajes son una forma de comunicación asíncrona servicio-a-servicio utilizada en arquitecturas de microservicios. Los mensajes se almacenan en la cola hasta que son procesados y eliminados. Cada mensaje se procesa una sola vez por un único consumidor. Las colas de mensajes permiten desacoplar procesos, llevando las operaciones complejas a un segundo plano.

Modyo Connect implementa colas de mensajería utilizando [AWS Simple Queue Service (SQS)](https://aws.amazon.com/sqs), una cola de mensajería completamente gestionada que soporta microservicios y aplicaciones distribuidas. AWS SQS permite trabajar con dos tipos de colas: tradicionales y FIFO (First In, First Out).

### Pasos de activación
Para solicitar la creación de una cola de mensajería en AWS, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com) indicando:
- Nombre de la cola.
- Tipo: tradicional o FIFO.

## Envío de Correos/SMS
Modyo Connect ofrece el servicio de correo electrónico o mensajería SMS saliente. Los microservicios que requieran esta funcionalidad pueden utilizar la API de Modyo Customers.

Los correos salientes enviados por la API de la plataforma Modyo son encriptados y validados siguiendo estándares modernos de seguridad. Los dominios de envío requieren una validación previa a nivel de DNS.

En casos donde no se pueda utilizar la API de Modyo Customers, Modyo puede autorizar la entrega de credenciales directas de SMTP o APIs de envío de SMS, previa revisión y aprobación.

### Pasos de activación
Para utilizar la API de envío de mensajes de Modyo Customers, se debe solicitar un token de acceso válido al administrador interno de la cuenta.

Para solicitar acceso directo a los servicios de envío de correo, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com) indicando:
- Breve descripción del caso de uso.
- Contactos técnicos y comerciales con los que se definirá la aprobación final.

## Firewall Aplicativo (WAF)
Un Web Application Firewall (WAF) protege el servidor de aplicaciones web de múltiples ataques. Su función es garantizar la seguridad del servidor mediante el análisis de paquetes de petición HTTP/HTTPS y modelos de tráfico.

Modyo Connect permite la configuración del servicio [AWS WAF](https://aws.amazon.com/waf), que posee filtros para los ataques web más comunes (OWASP Top 10), como inyecciones SQL o scripts. Además, ofrece la capacidad de definir reglas personalizadas para autorizar o denegar el acceso a rutas por IP y límites de tasa (rate limits). 

### Registros de logs
Los registros de logs de AWS WAF se gestionan mediante AWS CloudWatch Logs y pueden exportarse a sistemas externos utilizando repositorios de AWS S3.

### Pasos de activación
El firewall de aplicaciones de AWS está activado por defecto. El cliente puede solicitar la inclusión de reglas específicas (ej. bloqueo de rutas a ciertos rangos de IPs o ajustes en el límite de tasa de conexiones entrantes) mediante un ticket en el [Centro de Soporte de Modyo](https://support.modyo.com).

## Virtual Private Network (VPC)
Una VPN (site-to-site) se utiliza principalmente en organizaciones que requieren conectar infraestructura en diferentes ubicaciones geográficas mediante un enlace seguro para transmitir información.

Modyo Connect permite la configuración de enlaces VPN site-to-site mediante el uso de [AWS VPN connections](https://docs.aws.amazon.com/es_es/vpc/latest/userguide/vpn-connections.html) dentro de la red [AWS VPC](https://aws.amazon.com/vpc/) configurada para el cliente. Una vez establecido el enlace, los microservicios podrán establecer conexiones directas con infraestructura y servicios desplegados desde el lado del cliente.

### Pasos para la activación
Para solicitar un enlace VPC desde AWS hacia una infraestructura externa, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com) indicando:
- Dirección IP a la cual se debe crear el enlace.
- Contacto técnico del responsable de establecer el enlace.

:::warning Redundancia del enlace
Clientes con redundancia multiregión podrían requerir la configuración de varios enlaces simultáneos. Es responsabilidad del cliente asegurar la disponibilidad de todos estos enlaces en caso de que se requiera un failover.
:::

:::tip Soporte para fabricantes
Amazon AWS provee soporte y ejemplos de configuración para muchos fabricantes de dispositivos de red. En caso de problemas al establecer el enlace, Modyo apoyará levantando un ticket de soporte hacia AWS.
:::

:::tip AWS VPC Peering
Para enlaces hacia infraestructuras del cliente desplegadas dentro de AWS, se puede utilizar VPC Peering, que proporciona un enlace seguro y conveniente entre dos VPC diferentes, sin requerir la configuración de enlaces VPN.
:::

## Domain Name Service (DNS)
El sistema de nombres de dominio (DNS) es el "directorio telefónico" de Internet. Permite a las personas acceder a información en línea a través de nombres de dominio (ej. google.com, twitter.com). Los navegadores web interactúan mediante direcciones IP; el DNS traduce los nombres de dominio a IPs para que los navegadores puedan cargar los recursos de Internet.

Modyo Connect permite el uso de su servicio DNS en la nube para clientes que requieran administración de dominios primarios o secundarios. Los registros DNS se configuran en [AWS Route53](https://aws.amazon.com/route53).

### Pasos de activación
Para solicitar la gestión de una zona DNS para un dominio desde AWS, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com) indicando:
- Dominio raíz a gestionar.
- Registros a incorporar (puede ser un TXT exportado de otro DNS).

:::warning Tiempos de propagación
Una vez configurados la zona DNS y los registros, se deben configurar las direcciones de AWS Route53 en el registrador del dominio. Tras esta configuración, comienza la propagación, que podría demorar varias horas o incluso días antes de que el dominio esté disponible en Internet.
:::

## Registro de Dominios
El registro de dominios es el proceso por el cual una persona u organización adquiere un nombre de dominio ante un registrador. Si es concedido, el solicitante obtiene el control de dicho nombre y es responsable de su buen uso en Internet. Estos registros tienen un período de validez renovable indefinidamente por el registrador. Si no se renueva, el registro queda liberado para que cualquier registrador inicie el proceso de registro.

Modyo Connect permite al cliente solicitar el registro de dominios TLD disponibles en el servicio de [AWS Route53](https://aws.amazon.com/route53). Modyo no puede garantizar la disponibilidad del dominio seleccionado por el cliente y no podrá importar dominios con extensiones TLD no compatibles con AWS.

### Pasos de activación
Para solicitar el registro de un dominio, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com) indicando:
- Nombre del dominio que se desee registrar.
- Nombres alternativos en caso de que el nombre principal no esté disponible.
- Direcciones DNS primarias y secundarias a las cuales deba apuntar el dominio (si no es [administrado por Modyo](#domain-name-service-dns)).

:::tip Transferencia de dominios
Los dominios registrados por Modyo podrán transferirse a otro registrador si el cliente lo solicita (siempre que el registrador sea compatible con los TLD gestionados por AWS).
:::
