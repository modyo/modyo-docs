---
search: true
---

# Infrastructura
Los componentes de infraestructura permiten disponibilizar un ambiente de ejecución seguro y escalable para las APIs y [microservicios](../resources/microservices.md) desarrollados sobre Modyo Connect, en la nube de [Amazon AWS](https://aws.amazon.com). 

Los componentes de infraestructura son completamente gestionados por el servicio de Modyo Connect y los usuarios solo se preocupan por el código que se despliega en ellos. Un equipo de expertos de nube de Modyo se encarga de parametrizar, automatizar, monitorear y asegurar la continuidad del servicio según los niveles acordados.

En la presente guía se detallan los componentes de infraestructura más relevantes dentro del servicio de Modyo Connect.

## Balanceo de Carga
El balanceo de carga es la manera en que las peticiones de Internet son distribuidas sobre un grupo de servidores. 

Modyo Connect implementa el balanceo de carga mediante [AWS Application Load Balancer(ALB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html). El AWS ALB se integra de forma nativa con los demás servicios de la nube de AWS, además de ofrecer características únicas de seguridad, como la redirección de rutas y protocolos, [certificados SSL/TLS](#certificados-ssl-tls) y la incorporación de [firewalls aplicativos](#firewall-aplicativo-waf).

### Pasos para activar
Para solicitar la creación de un balanceador ALB en la nube de AWS, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com). En el ticket se debe incluir:
- Dominio que será apuntado al ALB
- Descripción del caso de uso, declarando a qué servicio se aplicará
- Contacto técnico del administrador de DNS para la validación de certificados SSL/TLS y redirecciones

Una vez creado, el balanceador podrá ser utilizado por un servicio dentro de un cluster de [contenedores](#containers).

:::warning Aplicaciones externas
El balanceador de carga de AWS ALB no puede dirigir tráfico hacia recursos de AWS desplegados fuera de la red privada virtual (VPC) en donde se despliega, por lo que solo debe ser considerado para usos con recursos internos. 
:::


## API Gateway
El API Gateway corresponde al punto de entrada para todas las APIs desplegadas dentro de Modyo Connect y se encarga principalmente de gestionar y autorizar las peticiones entrantes, para canalizarlas al microservicio correcto. El API Gateway es capaz de realizar funciones de monitoreo, gestión de cuotas y caché para mejorar el rendimiento de las APIs que se definen en él. Modyo Connect utiliza el [AWS API Gateway](https://aws.amazon.com/api-gateway), el cual es un servicio abstracto ofrecido por AWS.

La incorporación de endpoints en el API Gateway se realiza utilizando anotaciones especiales dentro del código fuente del microservicio (Java Spring Boot), las cuales al momento del despliegue permiten obtener una definición [Swagger](https://swagger.io) del API la cual se incorporan de forma dinámica al servicio, tal como se muestra en el siguiente ejemplo:

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

La generación de las definiciones para el API Gateway se realiza dentro de un pipeline automatizado de [integración continua](#development.md#integracion-continua), el cual debe estar previamente definido.

### Conectividad con los contenedores
El API Gateway, al ser un servicio abstracto de AWS, opera fuera de la [Virtual Private Network (VPC)](https://aws.amazon.com/vpc) del cliente. Para la integración con los contenedores de se utiliza una interfaz de red privada acoplada a un [Network Load Balancer (NLB)](https://aws.amazon.com/elasticloadbalancing/network-load-balancer) ubicado dentro de la VPC, en el cual los diferentes [contenedores](#contenedores) se registran de forma automática desde la plataforma de gestión de contenedores de [AWS Elastic Container Service (ECS)](https://aws.amazon.com/ecs). El NLB se encarga del balanceo y el chequeo de salud de los contenedores registrados en él.

### Pasos de activación
Para solicitar la creación de un API Gateway en la nube de AWS, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com).

Como regla general cada ambiente cuenta con solo un API Gateway compartido para todos los microservicios desplegados sobre él. En caso de requerir autenticación en las llamadas a las APIs mediante tokens JWT, el API Gateway debe desplegarse en conjunto con el componente de [Single Sign On (SSO)](#single-sign-on-sso). 

::: tip Autorización de invocaciones
Para efectuar la autorización de las invocaciones hacia APIs privadas, el API Gateway de AWS establece una comunicación con el SSO mediante una rutina [AWS Lambda](https://aws.amazon.com/lambda) denominada [Lambda Authorizer](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html), la cual se despliega internamente, de forma transparente como parte del servicio.
:::

## Contenedores
Los contenedores corresponden al ambiente de ejecución sobre el cual se ejecutan los microservicios. A diferencia de las máquinas virtuales, se recomienda que los contenedores solo ejecuten un proceso a la vez, el cual se lanza desde una imagen generada por medio de un archivo [Dockerfile](https://docs.docker.com/engine/reference/builder).

Modyo Connect utiliza el servicio de contenedores [serverless](https://aws.amazon.com/serverless) de [AWS ECS Fargate](https://aws.amazon.com/fargate) para ejecutar los contenedores en la nube. Con ECS Fargate no es necesario efectuar ningún tipo de configuración sobre servidores de la plataforma, ya que son gestionados por AWS.

### Lenguaje y framework de programación
En Modyo Connect los microservicios son desarrollados usando [Spring Boot](https://spring.io/projects/spring-boot) con Java. Esto es debido a la simplicidad de este framework a la hora de realizar proyectos de integración orientado a despliegues en microservicios. Spring Boot no requiere de servidores de aplicaciones tradicionales, ya que define su propio runtime de ejecución. Además, las aplicaciones desarrolladas sobre Spring Boot tienen la capacidad de escalar horizontalmente, posibilitando incrementar de forma dinámica el número de contenedores según sea requerido.

Dentro del contenedor, se trabaja con el runtime de [OpenJDK 11 (J9)](https://www.eclipse.org/openj9), el cual ofrece características únicas de eficiencia y compatibilidad.

### Imagen de contenedor
Las imágenes de los contenedores se generan en un proceso de integración continua, siguiendo las definiciones provistas por el usuario. Una vez generadas, estas se almacenan de forma segura en el [AWS Elastic Container Registry (ECR)](https://aws.amazon.com/ecr), el cual se integra de forma directa con el servicio de AWS ECS.

A continuación se muestra un ejemplo de definición de contenedor que asigna el 75% de la memoria RAM disponible a la JVM de Java utilizada por el microservicio.

``` Dockerfile
FROM adoptopenjdk/openjdk11-openj9:jdk-11.0.10_9_openj9-0.24.0
WORKDIR /usr/app
COPY build/libs/<microservice-name>.jar .
CMD java -XX:MaxRAMPercentage=75.0 -XX:MinRAMPercentage=75.0 -XX:InitialRAMPercentage=75.0 -jar -Dhttps.protocols=TLSv1.2 <microservice-name>.jar
```

### Tamaño de las instancias
AWS ECS Fargate ofrece una [amplia variedad de configuraciones](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html), que van desde las fracciones de vCPUs hasta las 16 vCPUs dedicadas para un solo contenedor. Según el número de vCPUs escogido, se activan rangos de memoria RAM dedicados que van desde 1 GB hasta 32 GB. Dependiendo del tamaño escogido de nodo, se consumirá más o menos [MRUs](../resources/mrus.md) en el servicio.

| CPU        |   Memory      |
| ------------- |:-----:|
|1 vCPU|2 GB ~ 8 GB (1 GB increments)|
|2 vCPU|4 GB ~ 16 GB (1 GB increments)|
|4 vCPU|8 GB ~ 30 GB (1 GB increments)|
|8 vCPU|16 GB ~ 60 GB (4 GB increments)|
|16 vCPU|32 GB ~ 120 GB (8 GB increments)|

Es importante considerar que en producción, las MRU utilizadas por el componente se multiplican por el factor de redundancia requerido por el cliente, siendo el mínimo de 2 (multizona). Los ambientes de preproducción se configuran sin redundancia y pueden poseer menos recursos asociados.

::: warning Fracciones de vCPUs
AWS permite la definición de contenedores con fracciones de vCPUs asignadas (ejemplo: 0.25 vCPU o 0.75 vCPU). En el caso de aplicaciones que se ejecuten con una Java Virtual Machine (JVM), al ser un ambiente de ejecución multihilo, no se beneficia de un despliegue que utilice fracciones de vCPU. Esto es debido a que genera bloqueos de I/O en los procesos afectando considerablemente su rendimiento. Es por ello que el mínimo aceptado para Modyo Connect será de 1 vCPU y el máximo de 16 vCPU.
:::

### Pool de conexiones
Existen muchos casos en los cuales se requiere de una [base de datos](#bases-de-datos) conectada a los microservicios. En estos casos se debe asegurar que el tamaño de la base de datos escogida es suficiente para el número de instancias de contenedor consideradas (incluyendo el rango de auto escalabilidad). Las conexiones concurrentes a la base de datos estará determinada por el tamaño de [pool de conexiones](https://www.baeldung.com/java-connection-pooling) definido en cada microservicio.

### Pasos de activación
Para solicitar la creación de un contenedor en la nube de AWS, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com). En el ticket se deberá indicar:
- Nombre y ubicación del repositorio de código
- Rama desde la cual se debe realizar el despliegue automático de cada ambiente
- Variables de entorno que deban inyectarse por cada ambiente

Cada contenedor debe estar asociado a un [repositorio único de código](development.md#repositorio-de-codigo). Una misma rama no puede apuntar a más de un ambiente (productivo o pre productivo).

:::tip Aprender más
Para más información, favor referirse a la guía de [desarrollo de microservicios](../resources/microservices.md).
:::

## Gestión de Secretos
Modyo Connect permite la gestión segura de secretos para el manejo de información sensible en los [microservicios](../resources/microservices.md) mediante el uso de [AWS Secret Manager](https://aws.amazon.com/secrets-manager). AWS Secret Manager genera un almacén centralizado y seguro de parámetros, de forma de que estos no se almacenen en el código ni como variables de entorno en el ambiente, por ejemplo: credenciales de bases de datos, tokens de acceso a APIs, credenciales de servicios externos, etc.

Adicionalmente, existe una gestión de secretos en el mismo repositorio de [GitHub Empresarial](https://github.com/enterprise) de Modyo, la que se utiliza de forma interna para compartir detalles de tokens de accesos con los scripts de integración continua de [GitHub Actions](https://github.com/features/actions). Si se requiere incorporar un secreto dentro del proceso de GitHub Action, este puede ser solicitado mediante un ticket de activación.

### Pasos de activación
Para solicitar la configuración de un nuevo secreto, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com). En el ticket se deberá indicar:
- Nombre del secreto
- Almacén dónde desea ser creado (GitHub o AWS)
- Método seguro escogido para la entrega del valor del secreto 

::: danger Confidencialidad de secretos
Modyo no recomienda adjuntar en el ticket de activación los valores de los secretos. Se debe establecer un canal seguro de comunicación con el cliente, que asegure la confidencialidad de los valores a configurar (Ejemplo: correo electrónico encriptado).
:::

## Encriptación
Modyo utiliza la encriptación manejada de [AWS Key Management System (KMS)](https://aws.amazon.com/kms) para el cifrado seguro de toda la información en descanso almacenada en repositorios de objetos y volúmenes de datos administrados para el cliente.

Las llaves gestionadas por AWS KMS se generan mediante el estándar de AES 256 y poseen un ciclo de regeneración anual automático, es decir, no se requiere de ningún tipo de acción manual para renovar y actualizar los recursos con las nuevas llaves generadas.

Modyo configura llaves AWS KMS independientes para cada recurso. Por defecto, se delega a AWS la generación y gestión completa de las llaves de cifrado. Si un cliente lo desea, se pueden incorporar al servicio llaves gestionadas de forma externa, mediante el módulo de [AWS CloudHSM](https://aws.amazon.com/cloudhsm).

### Pasos de activación
La encriptación en descanso provista por las llaves manejadas de AWS KMS se encuentra activa por defecto en todos los repositorios de objetos de AWS S3 y volúmenes de datos de AWS RDS y OpenSearch, por lo que no requiere de ningún tipo de activación. 

En el caso de requerir la incorporación de una llave gestionada de forma externa, se debe utilizar el servicio de AWS CloudHSM, se debe notificar con un ticket de requerimiento en el Centro de Soporte de Modyo, indicando el motivo y cómo planea gestionar la llave externa (implementación, renovaciones, etc.).

:::warning Rotación de llaves
Las llaves gestionadas por el cliente no poseen la capacidad de rotar automáticamente una vez por año como las hacen las generadas por AWS KMS, por lo que será responsabilidad del cliente planificar y solicitar la rotación de llaves cuando sea requerido.
:::

## Certificados SSL/TLS
Los certificados SSL/TLS aseguran una encriptación segura para todas las operaciones en tránsito desde los endpoints HTTPS del servicio. Los certificados SSL/TLS se pueden activar a nivel del balanceador de carga, la red de distribución de contenido CDN y el API Gateway.

Para generar y mantener actualizados los certificados SSL/TLS, Modyo Connect utiliza AWS Certificate Manager (ACM). Los certificados generados por AWS ACM requerirán de una verificación en el dominio, la cual debe ser realizada por el cliente, incorporando los registros de DNS del tipo CNAME que se indiquen como parte del proceso de generación. Una vez emitido el certificado, el cliente tiene tres días para efectuar la configuración en su DNS, de otro modo el certificado deberá emitirse nuevamente.

::: Seguridad de llaves privadas
Modyo no posee acceso a las llaves privadas de los certificados emitidos por AWS ACM, ni podrán ser utilizados fuera de los servicios soportados en la cuenta AWS configurada para el cliente.
:::

### Pasos de activación
Para solicitar la emisión de un certificado TLS se debe indicar el o los dominios o subdominios a incluir. El solicitante se debe asegurar previamente de contar con acceso al panel de gestión de DNS para el dominio o de contar con el tiempo de la persona que posee el acceso. Adicionalmente, el cliente podrá seleccionar una [política de seguridad](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies) para el certificado.

Al momento de solicitar, Modyo emitirá un certificado "pendiente de validación" el cual requiere de una validación por medio de registros de DNS.

::: warning Validación de dominios por DNS
Los registros de DNS utilizados para la validación del certificado no deben ser eliminados, ya que serán utilizados por AWS ACM para su renovación periódica. Será responsabilidad del cliente asegurar la existencia de estos registros en su sistema de DNS.
:::

Consideraciones adicionales:
- Modyo no recomienda el uso de certificados tipo wildcard (*.dominio.com) dentro de los servicios.
- Modyo utiliza la política de cifrado recomendada por AWS, la cual garantiza seguridad, manteniendo cierto grado de compatibilidad con dispositivos antiguos. Si el cliente desea activar [políticas de cifrado](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies) más seguras (arriesgando disminuir la compatibilidad), debe especificarlo en el ticket.


## Single Sign On (SSO)
El servicio de Single Sign On (SSO) permite incorporar la autenticación de usuarios a las iniciativas de desarrollo con Modyo Connect. Los usuarios autenticados podrán compartir su sesión entre la plataforma Modyo y las llamadas al API Gateway, de forma que sea posible acceder a recursos protegidos no disponibles de forma pública hacia Internet.

El servicio de SSO de Modyo Connect se implementa utilizando [KeyCloak](https://www.keycloak.org), aplicación de código abierto patrocinada por [Red Hat](https://www.redhat.com), quienes ofrecen un soporte pagado adicional sobre ella. La aplicación KeyCloak se despliega sobre contenedores en modo cluster de alta disponibilidad con la posibilidad de escalar en caso de que sea requerido. Además, Modyo Connect otorga acceso al repositorio que origina la imagen de contenedor configurada para KeyCloak, lo que permite tener control sobre las personalizaciones tanto de experiencia de usuario, como de flujos no estándares de autenticación.

### Pasos de activación
Las solicitudes de despliegue de SSO sobre Modyo Connect se realizan mediante un ticket en el [Centro de Soporte de Modyo](https://support.modyo.com). Dentro del ticket, se puede especificar si será requerido el acceso a la administración total de la aplicación, o la creación de reinos de usuarios con configuraciones específicas.

La activación de SSO sobre Modyo Connect requiere de la existencia previa de una [base de datos](#bases-de-datos) debidamente configurada para el servicio.

:::warning Personalizaciones de KeyCloak
Las personalizaciones de experiencia de usuario y flujos de autenticación dentro de KeyCloak son responsabilidad del cliente y no están incluidas como parte del servicio. En caso de requerir apoyo de servicios profesionales en la implementación de una iniciativa de SSO se debe contactar al ejecutivo de cuentas asignado.
:::

:::warning Modelo de Responsabilidad Compartida
Modyo no se hace responsable por las personalizaciones o vulnerabilidades en el código personalizado que provenga del cliente. Algunas personalizaciones podrían requerir de modificaciones al momento de actualizar el software base de KeyCloak. Será responsabilidad del cliente efectuar las adecuaciones de forma oportuna con el fin de disminuir los riesgos asociados a los procesos de actualización.
:::

## Repositorio de Objetos
El repositorio de objetos permite contar con un almacenamiento de archivos seguro y escalable en la nube accesible mediante protocolos Web. Modyo Connect implementa el repositorio de objetos utilizando [AWS S3](https://aws.amazon.com/s3).

Los permisos de acceso, asociados a cada archivo o generales para el repositorio, se especifican mediante el uso del API del servicio de AWS S3. El cliente es responsable por la asignación de estos permisos.

::: tip Acceso al API de AWS S3
El acceso al repositorio se realiza mediante el API del servicio AWS S3. Existen múltiples librerías que pueden ser implementadas desde el lado del cliente para acceder al API, así como también aplicaciones de transferencia de archivos compatibles con el protocolo. En caso de que el repositorio sea utilizado dentro de los microservicios desplegados dentro de Modyo Connect, las llaves de API de AWS S3 serán gestionadas como secretos de uso interno.
:::

### Pasos de activación
Para solicitar la creación de un repositorio de objetos en Modyo Connect se debe realizar un ticket en el [Centro de Soporte de Modyo](https://support.modyo.com) especificando la siguiente información:
- Nombre del repositorio
- Tipo de almacenamiento (simple o versionado)
- Política de acceso (privado o público)
- Políticas de ciclo de vida (borrado automático después de un periodo de tiempo, permanente, etc.)

::: tip Aceleración en los accesos
El acceso a los archivos almacenados en el repositorio de objetos de AWS S3 puede ser acelerado regionalmente mediante el uso de la [red de distribución de contenidos](#red-de-distribución-de-contenidos) de Modyo Connect.
:::

## Red de Distribución de Contenidos
La red de distribución de contenidos permite contar con puntos de acercamiento al contenido globalmente distribuidos en centros de datos estratégicamente ubicados alrededor del mundo, disminuyendo con ello las latencias y velocidad de descargas y mejorando con ello la experiencia general de usuario.

Modyo utiliza el servicio de [AWS CloudFront](https://aws.amazon.com/cloudfront) como red global de distribución de contenidos. Las configuraciones de AWS CloudFront permiten definir reglas de caché a nivel de objetos, así como también el procesamiento de funciones para sobrescribir cabeceras en las llamadas y respuestas del servicio.

### Pasos de activación
Para solicitar la creación de una distribución global de contenidos en Modyo Connect se debe realizar un ticket en el [Centro de Soporte de Modyo](https://support.modyo.com) especificando la siguiente información:
- Tamaño promedio de objetos en el repositorio
- TB mensuales proyectados a consumir
- Ubicaciones principales desde dónde se espera recibir la mayor parte del tráfico
- Reglas o criterios para realizar caché de los objetos
- Indicar si se requieren funciones de pre o post procesamiento de invocaciones


## Bases de Datos
Las bases de datos relacionales permiten contar con un sistema de almacenamiento relacional de información (RDBMS) seguro y escalable para los microservicios desplegados en Modyo Connect.

Modyo Connect utiliza el servicio de [AWS RDS Aurora](https://aws.amazon.com/rds/aurora) para implementar las bases de datos. AWS RDS Aurora es compatible con MySQL y a diferencia de un despliegue tradicional de este motor, Aurora se configura como cluster de alta disponibilidad en el cual los datos almacenados se replican simultáneamente en múltiples ubicaciones. 

::: tip Múltiples esquemas
Dentro de una misma base de datos configurada dentro de Modyo Connect, se pueden definir múltiples esquemas independientes lógicamente entre sí y con diferentes permisos de accesos. Esta configuración permite reutilizar la misma instancia para diferentes propósitos en diferentes microservicios y/o SSO. Es importante considerar que en este tipo de configuración, el cliente será responsable de seleccionar un tamaño apropiado del motor para controlar la concurrencia de acceso de forma efectiva (pools combinados de conexiones).
:::

### Tipos de instancias
Existen diferentes [tipos de instancias](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Performance.html) para desplegar una base de datos de RDS Aurora. Dependiendo del tipo escogido, se podrá lograr una mejor concurrencia en el número de conexiones simultáneas, como se indica en la siguiente tabla:

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
Para los ambientes pre productivos se recomienda el uso de instancias tipo “t3”. 
:::

### Tamaño en disco y IOPS
El tamaño de disco y los IOPS, en el caso de RDS Aurora, se aprovisionan dinámicamente según cómo se acceda a la información. El tamaño de disco parte en 10 GB y se incrementa en bloques similares cuando es requerido de forma transparente para el usuario.

### Backups y encriptación
Los backups en el servicio se gestionan de forma [automática](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html) mediante snapshots del sistema de almacenamiento, los cuales se generan diariamente y se replican hacia la región de contingencia.

:::tip Global database
Dependiendo del nivel de subscripción, algunos clientes podrían tener habilitada una réplica activa de la base de datos en la región AWS de contingencia, con el fin de disminuir el RTO y RPO en caso de un desastre.
:::

### Acceso a los datos
En el caso de clientes que requieran poseer acceso directo a la base de datos, la conexión se debe realizar de forma exclusiva mediante el uso de un enlace seguro del tipo [VPN](#virtual-private-network-vpc). Modyo no expondrá en ningún caso bases de datos directamente hacia Internet.

### Pasos de activación
Para solicitar la creación de una base de datos RDS Aurora en Modyo Connect, se debe realizar un ticket en el [Centro de Soporte de Modyo](https://support.modyo.com) especificando la siguiente información:
- Tipo de instancia (db.r6.large recomendado para producción)
- Nombre del esquema


## Cache y NoSQL
Las bases de datos NoSQL proporcionan beneficios adicionales a la hora de implementar sistemas de caché o indexación, para acceder y consultar de forma eficiente grandes volúmenes de información. A diferencia de las bases de datos relacionales, las tecnologías NoSQL proveen soluciones específicas según cada caso de uso.

Modyo Connect ofrece dos soluciones de NoSQL. La primera de ellas es [AWS ElastiCache](https://aws.amazon.com/elasticache) en su versión de Redis, pensada primordialmente para el almacenamiento y acceso rápido a datos o resultados de operaciones complejas (cache). La segunda de ellas es [AWS OpenSearch Service](https://aws.amazon.com/opensearch-service), la cual está diseñada para el almacenamiento de altos volúmenes de datos, otorgando índices de búsqueda sobre datos estructurados y semiestructurados como logs o registros de actividad de usuarios.

Ambos servicios se implementan siguiendo un esquema de alta disponibilidad sobre múltiples zonas dentro de una región de AWS. En ambos casos se asume que la información almacenada es volátil, por lo que será responsabilidad del cliente asegurar que los registros existen además dentro de un almacenamiento persistente (repositorio de objetos o base de datos relacional).

### Pasos de activación
Para solicitar la creación de uno de estos componentes en la nube de AWS, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com). En el ticket se deberá indicar:
- Tipo de solución requerida (cache, indexación)
- Breve descripción del caso de uso a implementar
- Tamaño de instancia de [AWS ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html) o [AWS OpenSearch](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/supported-instance-types.html)

## Colas de Mensajería
Las colas de mensajes son una forma de comunicación asíncrona de servicio a servicio que se usa en arquitecturas de microservicios. Los mensajes se almacenan en la cola hasta que se procesan y eliminan. Cada mensaje se procesa solo una vez, por un solo consumidor. Las colas de mensajes permiten desacoplar procesos llevando las operaciones complejas a un segundo plano.

Modyo Connect implementa colas de mensajería utilizando [AWS Simple Queue Service (SQS)](https://aws.amazon.com/sqs), el cual es una cola de mensajería completamente manejada que permite microservicios y aplicaciones distribuídas. AWS SQS permite trabajar con dos tipos de colas de mensajes: las tradicionales y las FIFO (First in First out).

### Pasos de activación
Para solicitar la creación de un contenedor en la nube de AWS, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com). En el ticket se deberá indicar:
- Nombre de la cola
- Tipo: tradicional o FIFO

## Envío de Correos/SMS
Modyo Connect ofrece la posibilidad de utilizar el servicio de correo electrónico o mensajería SMS saliente. Los microservicios que requieran hacer uso de esta funcionalidad pueden utilizar el API que la plataforma Modyo dispone dentro de la aplicación de Modyo Customers.

Los correos salientes enviados por el API de la plataforma Modyo son encriptados y validados siguiendo estándares modernos de seguridad. Los dominios de envío requieren una validación previa que se realiza a nivel de DNS.

En los casos dónde no se pueda utilizar el API de Modyo Customers, Modyo puede autorizar la entrega de credenciales directas de SMTP o APIs de envío de SMSs, previa revisión y aprobación en cada caso.

### Pasos de activación
Para utilizar el API de envío de mensajes de Modyo Customers, se debe solicitar un token válido de acceso al API de la plataforma Modyo al administrador interno de la cuenta.

Para solicitar acceso directo a los servicios de envío de correo directos, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com). En el ticket se deberá indicar:
- Breve descripción del caso de uso 
- Contactos técnicos y comerciales con los que se definirá la aprobación final

## Firewall Aplicativo (WAF)
Un Web Application Firewall (WAF) protege de múltiples ataques al servidor de aplicaciones Web en el backend. La función del WAF es garantizar la seguridad del servidor web mediante el análisis de paquetes de petición HTTP / HTTPS y modelos de tráfico.

Modyo Connect permite la configuración del servicio [AWS WAF](https://aws.amazon.com/waf), el cual posee filtros para los ataques Web más comunes (OWASP Top 10), como inyecciones de SQL o scripts, además de ofrecer la capacidad de definir reglas personalizadas para autorizar o denegar el acceso a rutas por IP y rate limits. 

### Registros de logs
Los registros de logs del AWS WAF se gestionan por medio de AWS CloudWatch Logs y pueden ser exportados a sistemas externos mediante el uso de repositorios de AWS S3.

### Pasos de activación
El firewall aplicativo de AWS se encuentra activado por defecto. El cliente puede solicitar inclusión de reglas específicas, como el bloqueo de rutas a ciertos rangos de IPs o ajustes en el rate limit de las conexiones entrantes, realizando un ticket en el [Centro de Soporte de Modyo](https://support.modyo.com).

## Virtual Private Network (VPC)
Una VPN (site-to-site o de sitio a sitio) se utiliza principalmente en organizaciones que requieren conectar infraestructura en diferentes ubicaciones geográficas mediante un enlace seguro por el cual se puede transmitir toda clase de información.

Modyo Connect permite la configuración de enlaces VPN site-to-site mediante el uso de [AWS VPN connections](https://docs.aws.amazon.com/es_es/vpc/latest/userguide/vpn-connections.html) dentro de la red [AWS VPC](https://aws.amazon.com/vpc/) configurada para el cliente. Una vez establecido el enlace, los microservicios podrán establecer conexiones directas con infraestructura y servicios desplegados desde el lado del cliente.

### Pasos para la activación
Para solicitar un enlace VPC desde la nube de AWS hacia una infraestructura externa, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com). En el ticket se deberá indicar:
- Dirección IP a la cual se debe crear el enlace 
- Contacto técnico del responsable de establecer el enlace

:::warning Redundancia del enlace
Clientes con redundancia multi región podrían requerir de la configuración de varios enlaces simultáneos. Será responsabilidad del cliente asegurar la disponibilidad de todos estos enlaces en el escenario de que un failover sea requerido.
:::

:::tip Soporte para fabricantes
Amazon AWS provee soporte y ejemplos de configuración para muchos fabricantes de dispositivos de red. En caso de tener problemas estableciendo el enlace Modyo apoyará levantando un ticket de soporte hacia AWS.
:::

:::tip AWS VPC Peering
En el caso de enlaces hacia infraestructuras del cliente desplegadas dentro de AWS, se puede utilizar el VPC Peering, el cual proporciona un enlace seguro y conveniente entre dos VPC diferentes, sin requerir de la configuración de enlaces VPN.
:::

## Domain Name Service (DNS)
El sistema de nombres de dominio (DNS) es el directorio telefónico de Internet. Las personas acceden a la información en línea a través de nombres de dominio como google.com o twitter.com. Los navegadores Web interactúan mediante direcciones de Protocolo de Internet (IP). El DNS traduce los nombres de dominio a direcciones IP para que los navegadores puedan cargar los recursos de Internet.

Modyo Connect permite el uso de su servicio de DNS en la nube para clientes que requieran administración de dominios primarios o secundarios. Los registros de DNS se configuran dentro de [AWS Route53](https://aws.amazon.com/route53).

### Pasos de activación
Para solicitar la gestión de una zona de DNS para un dominio desde la nube de AWS, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com). En el ticket se deberá indicar:
- Dominio raíz que se desea gestionar
- Registros a incorporar (puede ser un TXT exportado de otro DNS)

:::warning Tiempos de propagación
Una vez configurados la zona de DNS y los registros, se deben configurar las direcciones de AWS Route53 en el registrador del dominio. Una vez realizada esta configuración, comienza la propagación, la que podría demorar varias horas o incluso días antes de que el dominio esté disponible para Internet.
:::

## Registro de Dominios
El registro de dominios es el proceso por el cual una persona u organización adquiere un nombre de dominio ante un registrador que lo controla. Si es concedido, el solicitante contará con el control de dicho nombre y será responsable de su buen uso en Internet. Estos registros tienen un periodo de validez que puede ser renovado indefinidamente por el registrador. Si no es renovado, dicho registro queda liberado para que cualquier registrador inicie el proceso de registro.

Modyo Connect permite al cliente solicitar el registro de dominios TLD disponibles en el servicio de [AWS Route53](https://aws.amazon.com/route53). Modyo no puede garantizar la disponibilidad del dominio seleccionado por el cliente y no podrá importar dominios con extensiones TLD no compatibles con los de AWS.

### Pasos de activación
Para solicitar el registro de un dominio, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com). En el ticket se deberá indicar:
- Nombre del dominio que se desee registrar
- Nombres alternativos en el caso de que el nombre principal no esté disponible
- Direcciones de DNS primarias y secundarias a las cuales deba apuntar el dominio (en el caso de que este no sea [administrado por Modyo](#domain-name-service-dns)).

:::tip Transferencia de dominios
Los dominios registrados por Modyo podrán ser transferidos a otro registrador en caso de que el cliente lo solicite (siempre y cuando el registrador sea compatible con los TLD gestionados por AWS).
:::
