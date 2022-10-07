---
search: true
---

# Infrastructura
Los componentes de infraestructura permiten disponibilizar en la nube de AWS todos los elementos básicos que permiten contar con un ambiente seguro y escalable de ejecución para los [microservicios](../resources/microservices.md) desarrollados en Modyo Connect. 

Los componentes de infraestructura son completamente manejados por el servicio y los clientes sólo se deben preocupar por el código fuente que se despliega sobre ellos. Modyo se encarga de parametrizar, monitorear y asegurar la continuidad de los componentes en los ambientes de nube.

## API Gateway
El API Gateway es el punto de entrada para todas las APIs desplegadas dentro de Modyo Connect y se encarga principalmente de autorizar las peticiones entrantes y canalizarlas al microservicio correcto. Además, el API Gateway es capaz de realizar funciones de monitoreo, rate limit y caché, para mejorar el rendimiento de las APIs que operan bajo él. Modyo Connect utiliza el [AWS API Gateway](https://aws.amazon.com/api-gateway), el cual es un servicio abstracto operado por Amazon.

La incorporación de endpoints en el API Gateway se realiza utilizando anotaciones especiales de Java dentro del código fuente del microservicio, las cuales al momento del despliegue permiten obtener una definición [Swagger](https://swagger.io) del API que se incorporan de forma dinámica al servicio, tal como se ejemplifica en el siguiente ejemplo:


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

En el ejemplo anterior se aprecian las diferentes anotaciones que debe contener el servicio. La extracción del Swagger generado para el API Gateway se realiza dentro del pipeline de despliegue, el cual se configura y se ejecuta mediante la activación de [integración continua](#development.md#integracion-continua).

El API Gateway es un servicio abstracto de la nube de AWS que opera regionalmente fuera de la Virtual Private Network (VPC). Para la integración con los microservicios se utiliza una interfaz de red privada acoplada a un [AWS Network Load Balancer (NLB)](https://aws.amazon.com/elasticloadbalancing/network-load-balancer), en el cual los diferentes [contenedores](#contenedores.html) son registrados de forma automática por la plataforma de AWS Elastic Container Service (ECS).

### Pasos para activar
Para solicitar la creación de un API Gateway en la nube de AWS, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com).

En general cada ambiente cuenta con sólo un API Gateway, el cual se comparte para todos los microservicios desplegados sobre él. En caso de requerir de validaciones especiales de autenticación de tokens, el API Gateway debe desplegarse en conjunto con el [componente de SSO](#single-sign-on-sso). 

::: tip Autorización de invocaciones
Para efectuar la autorización de las invocaciones hacia APIs privadas, el API Gateway de AWS establece una comunicación con el SSO mediante una rutina [AWS Lambda](https://aws.amazon.com/lambda) denominada [Lambda Authorizer](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html), la cual se despliega internamente como parte del servicio.
:::


## Contenedores
Los contenedores corresponden al ambiente de ejecución sobre el cual se despliegan los microservicios. A diferencia de las máquinas virtuales, los contenedores sólo ejecutan un proceso a la vez, desde una imagen generada por medio de un archivo de definición en formato [Dockerfile](https://docs.docker.com/engine/reference/builder).

Modyo Connect utiliza el servicio de contenedores de [AWS Elastic Container Service (ECS) Fargate](https://aws.amazon.com/fargate) para ejecutar los contenedores en la nube. Con AWS ECS Fargate no es necesario efectuar ningún tipo de configuración sobre los servidores orquestadores de la plataforma, ya que corren en un ambiente administrado por AWS.

### Lenguaje y framework de programación
En Modyo Connect los microservicios son desarrollados exclusivamente usando [Spring Boot](https://spring.io/projects/spring-boot) con Java. Esto es debido a la simplicidad de este framework a la hora de realizar proyectos de integración orientado a despliegues en microservicios. Spring Boot no requiere de servidores de aplicaciones tradicionales ya que define su propio runtime de ejecución. Además, las aplicaciones desarrolladas sobre Spring Boot tienen la capacidad de escalar horizontalmente incrementando de forma dinámica el número de contenedores.

Dentro del contenedor, se trabaja con el runtime de [OpenJDK 11 (J9)](https://www.eclipse.org/openj9), el cual ofrece características únicas de eficiencia y compatibilidad.

### Imágen de contenedor
Las imágenes de los contenedores se generan con un proceso de integración contínua, siguiendo las definiciones provistas por el desarrollador. Una vez generadas, estas se almacenan de forma segura en el [AWS Elastic Container Registry (ECR)](https://aws.amazon.com/ecr), el cual se integra de forma directa con el servicio de AWS ECS.

A continuación se muestra un ejemplo de definición de contenedor que asigna el 75% de la memoria RAM disponible a la JVM de Java utilizada por el microservicio.

``` Dockerfile
FROM adoptopenjdk/openjdk11-openj9:jdk-11.0.10_9_openj9-0.24.0
WORKDIR /usr/app
COPY build/libs/<microservice-name>.jar .
CMD java -XX:MaxRAMPercentage=75.0 -XX:MinRAMPercentage=75.0 -XX:InitialRAMPercentage=75.0 -jar -Dhttps.protocols=TLSv1.2 <microservice-name>.jar
```

### Tamaño de las instancias
AWS ECS Fargate ofrece una amplia variedad de configuraciones, que van desde las fracciones de vCPUs hasta las 16 vCPUs dedicadas para un solo contenedor. Según el número de vCPUs escogido, se activan rangos de memoria RAM dedicados que van desde 1 GB hasta 32 GB. Dependiendo del tamaño escogido de nodo, se consumirá más o menos [MRUs](../resources/mrus.md) en el servicio.

Es importante considerar que en producción, las MRU utilizadas por el componente se multiplican por el factor de redundancia requerido por el cliente, siendo el mínimo de 2 (multizona). Los ambientes de pre producción se configuran sin redundancia.

::: warning Fracciones de vCPUs
AWS permite la definición de contenedores con fracciones de vCPUs asignadas (ejemplo: 0.25 vCPU o 0.75 vCPU). Al ser la JVM de Java un ambiente de ejecución multihilo, Modyo no recomienda el despliegue productivo o pre-productivo utilizando fracciones de vCPU, debido a que esto genera bloqueos de I/O y problemas de rendimiento conocidos. Es por ello que el mínimo será de 1 vCPU y el máximo de 16 vCPU (limitación de AWS ECS Fargate).
:::

### Pool de conexiones
Existen muchos casos en los cuales se requiere de la configuración de una [base de datos](#bases-de-datos.html) para los microservicios. En estos casos  se debe asegurar que el tamaño de la base de datos escogida es suficiente para el número de instancias de contenedor consideradas (incluyendo el rango de auto escalabilidad). Las conexiones concurrentes a la base de datos estará determinada por el tamaño de pool de conexiones definido dentro de cada microservicio.

### Pasos para activar
Para solicitar la creación de un contenedor en la nube de AWS, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com). En el ticket se deberá indicar:
- Nombre del repositorio de código fuente
- Rama desde la cual se debe realizar el despliegue automático de cada ambiente
- Variables de entorno que deban inyectarse por cada ambiente

Cada contenedor debe estar asociado a un [repositorio único de código fuente](development.md#repositorio-de-codigo). Una misma rama no puede apuntar a más de un ambiente (productivo o pre productivo).


## Gestión de Secretos
Modyo Connect permite la gestión segura de parámetros secretos para la configuración de los [microservicios](../resources/microservices.md) mediante el uso de [AWS Secret Manager](https://aws.amazon.com/secrets-manager). AWS Secret Manager genera un almacén centralizado y seguro de parámetros que no deben almacenarse en el código fuente ni existir como variables de entorno desprotegidas, por ejemplo: credenciales de bases de datos, tokens de acceso a APIs, credenciales de servicios externos, etc.

Adicionalmente existe una gestión adicional de secretos en el repositorio de [GitHub Empresarial](https://github.com/enterprise) de Modyo, la que se utiliza de forma interna para compartir detalles de accesos a tokens con los scripts de integración contínua de [GitHub Actions](https://github.com/features/actions). Si se necesita incorporar algún proceso dentro de GitHub Actions que requiera de un parámetro secreto, éste puede ser solicitado mediante un ticket de activación.

### Pasos para activar
Para solicitar la configuración de un nuevo secreto, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com).En el ticket se deberá indicar:
- Nombre del secreto
- Almacén dónde desea ser creado (GitHub o AWS)
- Método seguro escogido para entrega del valor del secreto

::: danger Confidencialidad de secretos
Modyo no recomienda adjuntar en el ticket los valores secretos de estos parámetros. Se debe establecer un canal seguro de comunicación con el cliente, que asegure la confidencialidad de los valores a configurar.
:::

## Encriptación
Modyo utiliza la encriptación manejada de AWS KMS para el cifrado seguro de toda la información en descanso almacenada en repositorios de objetos y volúmenes de datos administrados para el cliente.

Las llaves gestionadas por AWS KMS se generan mediante el estándar de AES 256 y poseen un ciclo de regeneración anual automático, es decir, no se requiere de ningún tipo de acción manual para renovar y actualizar los recursos con las nuevas llaves generadas.

Modyo configura llaves AWS KMS independientes para cada recurso. Por defecto, se delega a AWS la generación y gestión completa de las llaves de cifrado. Si un cliente lo desea, se pueden incorporar al servicio llaves gestionadas de forma externa, mediante el módulo de AWS CloudHSM.

### Pasos para activar
La encriptación en descanso provista por las llaves manejadas de AWS KMS se encuentra activa por defecto en todos los repositorios de objetos de AWS S3 y volúmenes de datos de AWS RDS y OpenSearch, por lo que no requiere de ningún tipo de activación. 

En el caso de requerir la incorporación de una llave gestionada de forma externa, se debe utilizar el servicio de AWS CloudHSM, se debe notificar con un ticket de requerimiento en el Centro de Soporte de Modyo, indicando el motivo y cómo planea gestionar la llave externa (implementación, renovaciones, etc).


## Certificados TLS
Los certificados TLS aseguran una encriptación segura para todas las operaciones en tránsito HTTPS desde los endpoints del servicio. Los certificados TLS se activan a nivel del balanceador de carga, la red de distribución de contenido y los API gateways.

Para generar y mantener actualizados los certificados TLS, Modyo Connect utiliza AWS Certificate Manager (ACM). Los certificados generados por AWS ACM requerirán de una verificación en el dominio, la cual debe ser realizada por el cliente incorporando los registros del tipo CNAME que se indiquen como parte del proceso de generación. Una vez emitido el certificado, el cliente tiene tres días para efectuar la validación, de otro modo el certificado deberá emitirse nuevamente.

::: Seguridad de llaves privadas
Modyo no posee acceso a las llaves privadas de los certificados emitidos por AWS ACM, ni podrán ser utilizados en servicios que sean ofrecidos por Amazon dentro de la cuenta configurada para el cliente.
:::

### Pasos para activar
Para solicitar la emisión de un certificado TLS se debe indicar el o los subdominios a incluir. El solicitante se debe asegurar previamente de contar con acceso al panel de gestión de DNS para el dominio o de contar con el tiempo de la persona que posee el acceso.

Al momento de solicitar, Modyo emitirá un certificado "pendiente de validación" el cual requiere de una validación por medio de registros de DNS.

::: warning Validación de dominios por DNS
Los registros de DNS utilizados para la validación del certificado no deben ser eliminados, ya que serán utilizados por AWS ACM para su renovación. Será responsabilidad del cliente asegurar la existencia de estos registros en su sistema de DNS.
:::

Consideraciones adicionales:
- Modyo no recomienda el uso de certificados tipo wildcard (*.dominio.com) dentro de los servicios.
- Modyo utiliza la política de cifrado recomendada por AWS, la cual garantiza seguridad, manteniendo cierto grado de compatibilidad con dispositivos antiguos. Si el cliente desea activar cifrados más seguros (disminuyendo la compatibilidad) debe solicitarlo mediante ticket de requerimiento en el Centro de Soporte de Modyo. Esto se puede realizar tanto en la creación del certificado como sobre los certificados existentes.


## Single Sign On (SSO)
El servicio de Single Sign On (SSO) permite integrar usuarios autenticados del cliente con la sesión de plataforma Modyo y las llamadas al API Gateway, de tal forma que sea posible acceder a recursos protegidos que no pueden exponerse de forma directa hacia Internet.

Modyo Connect implementa el servicio de SSO utilizando la aplicación [KeyCloak](https://www.keycloak.org), la cual es un software de código abierto patrocinado por [Red Hat](https://www.redhat.com). La aplicación KeyCloak se despliega sobre contenedores en modo cluster de alta disponibilidad con la posibilidad de escalar en caso de que la demanda lo necesite. Además, Modyo Connect otorga acceso al repositorio que origina la imagen de KeyCloak, lo que permite tener control sobre las customizaciones tanto de experiencia de usuario, como de flujos de autenticación.

### Pasos para activar
Las solicitudes de despliegue de SSO sobre Modyo Connect se realizan mediante un ticket en el [Centro de Soporte de Modyo](https://support.modyo.com). Dentro del ticket, se puede especificar si será requerido el acceso a la administración total de la aplicación, o la creación de reinos de usuarios con configuraciones específicas.

:::warning Personalizaciones de KeyCloak
Las personalizaciones de experiencia de usuario y flujos de autenticación dentro de KeyCloak son responsabilidad del cliente y no están incluídas como parte del servicio. En caso de requerir apoyo de servicios profesionales en la implementación de una iniciativa de SSO se debe contactar al ejecutivo de cuentas asignado.
:::

:::warning Modelo de Responsabilidad Compartida
Modyo no se hace responsable por las personalizaciones o vulnerabilidades introducidas que provengan de código generado por el cliente. Algunas personalizaciones podrían requerir de modificaciones al momento de actualizar el software base de KeyCloak. Será responsabilidad del cliente efectuar las adecuaciones de forma oportuna con el fin de disminuir los riesgos asociados a los procesos de actualización.
:::

## Repositorio de Objetos
El repositorio de objetos permite contar con almacenamiento de archivos seguro y escalable en la nube gestionados mediante protocolos Web. Modyo Connect implementa el repositorio de objetos utilizando [AWS S3](https://aws.amazon.com/s3).

Los permisos de acceso, asociados a cada archivo que se sube al repositorio, se especifican mediante el uso del API del servicio de S3. 

::: tip Acceso al API de S3
El acceso al repositorio se realiza mediante el API del servicio S3. Existen múltiples librerías que pueden ser implementadas desde el lado del cliente para acceder al API, así como también aplicaciones de transferencia de archivos compatibles con el protocolo. En caso de que el repositorio sea utilizado dentro de los microservicios desplegados dentro de Modyo Connect, las llaves de API de S3 serán gestionadas como secretos de uso interno.
:::

### Pasos de activación
Para solicitar la creación de un repositorio de objetos en Modyo Connect se debe realizar un ticket en el [Centro de Soporte de Modyo](https://support.modyo.com) especificando la siguiente información:
- Nombre del repositorio
- Tipo de almacenamiento (simple o versionado)
- Política de acceso (privado o público)

::: tip Aceleración de accesos
El acceso a los archivos almacenados en el repositorio de objetos de S3 puede ser acelerado regionalmente mediante el uso de la [red de distribución de contenidos](#red-de-distribucion-de-contenidos.html) de Modyo Connect.
:::

## Red de Distribución de Contenidos
La red de distribución de contenidos permite contar con puntos de acercamiento al contenido globalmente distribuídos en centros de datos estratégicamente ubicados alrededor del mundo, disminuyendo con ello las latencias y velocidad de descargas y mejorando con ello la experiencia general de usuario.

Modyo utiliza el servicio de [AWS CloudFront](https://aws.amazon.com/cloudfront) como red global de distribución de contenidos. Las configuraciones de CloudFront permiten definir reglas de caché a nivel de objetos, así como también el procesamiento de funciones para sobrescribir cabeceras en las llamadas y respuestas del servicio.

### Pasos de activación
Para solicitar la creación de una distribución global de contenidos en Modyo Connect se debe realizar un ticket en el [Centro de Soporte de Modyo](https://support.modyo.com) especificando la siguiente información:
- Tamaño promedio de objetos en el repositorio
- TB mensuales proyectados a consumir
- Ubicaciones principales desde dónde se espera recibir la mayor parte del tráfico
- Reglas o criterios para realizar caché de los objetos
- Indicar si se requieren funciones de pre o post procesamiento de invocaciones


## Bases de Datos
AWS RDS Aurora. Servicio de bases de datos de Amazon AWS, disponible en varias versiones (Postgres, Oracle, SQL Server, MySQL).  RDS Aurora es compatible con MySQL 5.6, y a diferencia de un despliegue tradicional de MySQL, Aurora implementa un cluster de alta disponibilidad en el que los datos almacenados en él son persistidos en 3 zonas de disponibilidad. 

AWS Aurora posee características únicas

### Tipos de instancias
Existen diferentes [tipos de instancias](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Performance.html) para desplegar una base de datos. Dependiendo del tipo, se podrá activar una mejor concurrencia en el número de conexiones, como se indica en la siguiente tabla:

| Tipo        |   Max Connection      |
| ------------- |:-----:|
|db.t3.small|45|
|db.t3.medium|90|
|db.r6(g).large|1000|
|db.r6.xlarge|2000|
|db.r6.2xlarge|3000|
|db.r6.4xlarge|4000|
|db.r6.8xlarge|5000|
|db.r6.12xlarge|6000|
|db.r6.16xlarge|6000|

### Tamaño en disco y IOPS


### Backups y encriptación


### Pasos de activación
Para solicitar la creación de una distribución global de contenidos en Modyo Connect se debe realizar un ticket en el [Centro de Soporte de Modyo](https://support.modyo.com) especificando la siguiente información:
- Tipo de instancia (db.r6.large recomendado)

::: tip Múltiples esquemas
Dentro de una misma base de datos configurada dentro de Modyo Connect, se pueden definir múltiples esquemas cada uno con diferentes permisos de accesos. Esta configuración permite reutilizar la misma instancia para diferentes propósitos en diferentes microservicios. Es importante considerar que en este tipo de configuración, el cliente será responsable de seleccionar un tamaño apropiado del motor para controlar la concurrencia de acceso de forma efectiva (pools combinados de conexiones).
:::


## Cache y NoSQL
AWS Elasticache. Servicio de caché de Amazon AWS, ofrecido en dos grandes variaciones: Memcache y Redis. En el caso de Modyo sólo la versión de Redis es utilizada, principalmente por sus capacidades de configurarse en modalidad de cluster de alta disponibilidad.

AWS Elasticsearch. Servicio de indexación de contenido de Amazon AWS, implementado mediante Elasticsearch y con la capacidad de configurarse como cluster de alta disponibilidad. 


## Cola de Mensajería
AWS SQS. Servicio de colas de mensajería de alto rendimiento y duración que permite a las aplicaciones comunicarse de forma asincrónica.

## Envío de Correos
Modyo Connect ofrece la posibilidad de utilizar el servicio de correo electrónico saliente. Los microservicios que requieran hacer uso de esta funcionalidad deben utilizar el API que la plataforma Modyo dispone dentro de la aplicación de Customers.

Los correos salientes enviados por el API de la plataforma Modyo son encriptados y validados siguiendo estándares modernos de seguridad. Los dominios de envío requieren una validación previa que se realiza a nivel de DNS.

En los casos dónde no se pueda utilizar el API de Modyo Customers, Modyo puede autorizar la entrega de credenciales directas de SMTP, previa revisión del caso.


## Firewall Aplicativo
AWS WAF. Servicio de firewall aplicativo de Amazon AWS. El Amazon WAF puede ser desplegado en la CDN de Amazon (CloudFront) o directamente sobre los ELB del tipo "application ELB" o ALB. El Amazon WAF posee filtros para los ataques Web más comunes (OWASP Top 10), como inyecciones de SQL o scripts, además de ofrecer la capacidad de definir reglas propias. 


## Virtual Private Network

AWS VPC. Servicio de redes privadas virtuales de Amazon AWS. Modyo configura una VPC por cliente / ambiente, garantizando que todos los elementos configurados para sus clientes se encuentran separados unos de otros.


## Domain Name Service
Modyo Connect puede actuar como servicio de DNS para clientes lo requieran. Los registros de DNS se configuran dentro del servicio de AWS Route53.


## Registro de Dominios
Modyo Connect permite al cliente solicitar el registro de dominios Top Level Domain (TLD) siempre que estos se encuentres disponibles y puedan ser gestionados por el registro de dominios de AWS. La propiedad de los dominios generados de esta forma podrán ser transferidos al cliente.


