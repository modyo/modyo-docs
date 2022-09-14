---
search: true
---

# Infrastructura
Los componentes de infraestructura habilitan un ambiente seguro y escalable de ejecución para los [microservicios](../resources/microservices.md) desarrollados sobre Modyo Connect. 

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


## Contenedores
El contenedor corresponde al ambiente de ejecución sobre el cual se despliega el microservicio.

Modyo Connect utiliza el servicio de contenedores de AWS Elastic Container Service (ECS) el cual se 


### Imágen de contenedor

AWS ECS se integra de forma transparente con el repositorio de imágenes de AWS ECR.

Ejemplo de _Dockerfile_ que asigna el 75% de la memoria RAM disponible a la JVM de Java utilizada por el microservicio.

``` Dockerfile
FROM adoptopenjdk/openjdk11-openj9:jdk-11.0.10_9_openj9-0.24.0
WORKDIR /usr/app
COPY build/libs/<microservice-name>.jar .
CMD java -XX:MaxRAMPercentage=75.0 -XX:MinRAMPercentage=75.0 -XX:InitialRAMPercentage=75.0 -jar -Dhttps.protocols=TLSv1.2 <microservice-name>.jar
```

### Tamaño de las instancias
Dependiendo del tamaño escogido, se consumirá más MRUs en el servicio.

Es importante considerar que en producción, las MRU utilizadas por el componente se multiplican por el factor de redundancia requerido por el cliente, siendo el mínimo de 2 (multi zona).

::: warning Fracciones de vCPUs
AWS permite la definición de contenedores con fracciones de vCPUs asignadas (ejemplo: 0.25 vCPU o 0.75vCPU. Al ser la JVM de Java un ambiente de ejecución multihilo, Modyo no recomienda el despliegue productivo o pre-productivo utilizando fracciones de vCPU, debido a que esto genera bloqueos de I/O y problemas de rendimiento conocidos. Es por ello que el mínimo será de 1 vCPU y el máximo de 4 vCPU (limitación de AWS ECS Fargate).
:::



## Gestión de Secretos
Modyo Connect permite la gestión segura de parámetros secretos para la configuración de los [microservicios](../resources/microservices.md) mediante el uso de AWS Secret Manager. AWS Secret Manager genera un almacén central y seguro de parámetros que no deben almacenarse en el código fuente, ni ser de público conocimiento para los desarrolladores de Connect, por ejemplo: credenciales de bases de datos, tokens de acceso a APIs, credenciales de servicios externos, etc.

Adicionalmente existe una gestión adicional de secretos en el repositorio de GitHub Empresarial, la que se utiliza de forma interna para compartir detalles de accesos a tokens con los scripts de integración contínua de GitHub Actions. Si se necesita incorporar algún proceso dentro de GitHub Actions que requiera de un parámetro secreto, éste puede ser solicitado.

### Pasos para solicitar
Para solicitar la configuración de un nuevo secreto, se debe crear un ticket de requerimiento en el Centro de Soporte de Modyo.

::: danger Confidencialidad de secretos
Modyo no recomienda adjuntar en el ticket los valores secretos de estos parámetros.

Para ello, se debe establecer un canal seguro de comunicación con el cliente, que asegure la confidencialidad de los valores a configurar.
:::


## Encriptación
Modyo utiliza la encriptación manejada de AWS KMS para el cifrado seguro de toda la información en descanso almacenada en repositorios de objetos y volúmenes de datos administrados para el cliente.

Las llaves gestionadas por AWS KMS se generan mediante el estándar de AES 256 y poseen un ciclo de regeneración anual automático, es decir, no se requiere de ningún tipo de acción manual para renovar y actualizar los recursos con las nuevas llaves generadas.

Modyo configura llaves AWS KMS independientes para cada recurso. Por defecto, se delega a AWS la generación y gestión completa de las llaves de cifrado. Si un cliente lo desea, se pueden incorporar al servicio llaves gestionadas de forma externa, mediante el módulo de AWS CloudHSM.

### Pasos para solicitar
La encriptación en descanso provista por AWS KMS se encuentra activa por defecto en todos los repositorios de objetos de AWS S3 y volúmenes de datos de AWS RDS y OpenSearch. 

En el caso de requerir la incorporación de una llave gestionada de forma externa con AWS CloudHSM, se debe notificar con un ticket de requerimiento en el Centro de Soporte de Modyo, indicando el motivo y cómo planea gestionar la llave externa (implementación, renovaciones, etc).


## Cetificados TLS
AWS Certificate Manager. Servicio utilizado para la generación y mantención segura de certificados SSL en los recursos de Amazon. Los certificados generados por esta vía requerirán de una validación del dominio por parte del cliente y una vez emitidos Modyo no poseerá acceso a las llaves de éstos, ni podrán ser utilizados en servicios que sean ofrecidos por Amazon.

### Pasos para solicitar
Para solicitar la emisión de un certificado TLS se debe indicar el o los subdominios a incluir. El solicitante se debe asegurar previamente de contar con acceso al panel de gestión de DNS para el dominio o de contar con el tiempo de la persona que posee el acceso.

Al momento de solicitar, Modyo emitirá un certificado "pendiente de validación" el cual requiere de una validación por medio de registros de DNS.

::: warning Validación de dominios por DNS
Es importante que los registros creados para la validación de los dominios 
:::

Modyo no recomienda el uso de certificados tipo wildcard (*.dominio.com) dentro de los servicios.

Modyo utiliza la política de cifrado recomendada por AWS, la cual garantiza seguridad, manteniendo cierto grado de compatibilidad con dispositivos antiguos. Si el cliente desea activar cifrados más seguros (disminuyendo la compatibilidad) debe solicitarlo mediante ticket de requerimiento en el Centro de Soporte de Modyo.


## Single Sign On (SSO)
El servicio de Single Sign On (SSO)

Modyo implementa el servicio de SSO utilizando el software [KeyCloak](https://www.keycloak.org) el cual es un proyecto de código abierto auspiciado por RedHat.


## Repositorio de Objetos
AWS S3. Repositorio de objetos (object storage) de Amazon AWS. En él se almacenan todos los archivos estáticos de la plataforma los cuales, según los permisos configurados, quedan disponibles directamente en la Web o las Content Delivery Networks (CDNs).

## Red de Distribución de Contenidos
La red de distribución de contenidos permite tener un servicio global 

Modyo utiliza el servicio de [AWS CloudFront](https://aws.amazon.com/cloudfront) como red de distribución de contenidos.

## Base de Datos
AWS RDS Aurora. Servicio de bases de datos de Amazon AWS, disponible en varias versiones (Postgres, Oracle, SQL Server, MySQL).  RDS Aurora es compatible con MySQL 5.6, y a diferencia de un despliegue tradicional de MySQL, Aurora implementa un cluster de alta disponibilidad en el que los datos almacenados en él son persistidos en 3 zonas de disponibilidad. 

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




## Costos y tiempos de activación
| Componente        | Costo en MRUs        | Tiempos de habilitación (aprox)  |
| ------------- |:-------------:|:-----:|
|Acceso de Desarrollador|1 MRU|1 día|p
|Repositorio de Código|1 MRU|1 día|
|Integración Contínua|1 MRU|1-2 días|
|Repositorio de Artefactos|1 MRU|1 día|


