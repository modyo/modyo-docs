---
search: true
---

# API Gateway

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

La generación de las definiciones para el API Gateway se realiza dentro de un pipeline automatizado de [integración continua](../development/continuous-integration.html), el cual debe estar previamente definido.

## Conectividad con los Contenedores

El API Gateway, al ser un servicio abstracto de AWS, opera fuera de la [Virtual Private Cloud (VPC)](https://aws.amazon.com/vpc) del cliente. Para la integración con los contenedores, se utiliza una interfaz de red privada acoplada a un [Network Load Balancer (NLB)](https://aws.amazon.com/elasticloadbalancing/network-load-balancer) ubicado dentro de la VPC. Los diferentes [contenedores](containers.html) se registran automáticamente desde la plataforma de gestión de contenedores de [AWS Elastic Container Service (ECS)](https://aws.amazon.com/ecs). El NLB se encarga del balanceo y el chequeo de salud de los contenedores registrados.

## Pasos de Activación

Para solicitar la creación de un API Gateway en AWS, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com).

Como regla general, cada ambiente cuenta con un único API Gateway compartido para todos los microservicios desplegados. Si se requiere autenticación en las llamadas a las APIs mediante tokens JWT, el API Gateway debe desplegarse en conjunto con el componente de [Single Sign-On (SSO)](single-sign-on.html). 

:::tip Autorización de invocaciones
Para autorizar invocaciones a APIs privadas, el AWS API Gateway establece comunicación con el SSO mediante una rutina [AWS Lambda](https://aws.amazon.com/lambda) denominada [Lambda Authorizer](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html), que se despliega internamente y de forma transparente como parte del servicio.
:::