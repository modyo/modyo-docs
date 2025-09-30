---
search: true
---

# API Gateway

The API Gateway is the entry point for all APIs deployed in Modyo Connect. It is responsible for managing and authorizing incoming requests, channeling them to the correct microservice. It can perform monitoring, quota management, and caching functions to improve API performance. Modyo Connect uses [AWS API Gateway](https://aws.amazon.com/api-gateway), an abstract service offered by AWS.

The incorporation of endpoints in the API Gateway is done through special annotations in the microservice source code (Java Spring Boot). At the time of deployment, these annotations allow obtaining a [Swagger](https://swagger.io) definition of the API, which is dynamically incorporated into the service, as shown in the following example:

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

The generation of the definitions for the API Gateway is done within an automated [continuous integration](../development/continuous-integration.html) pipeline, which must be previously defined.

## Connectivity with Containers

The API Gateway, being an abstract AWS service, operates outside the [Virtual Private Cloud (VPC)](https://aws.amazon.com/vpc) of the client. For integration with containers, a private network interface coupled to a [Network Load Balancer (NLB)](https://aws.amazon.com/elasticloadbalancing/network-load-balancer) located within the VPC is used. The different [containers](containers.html) are automatically registered from the [AWS Elastic Container Service (ECS)](https://aws.amazon.com/ecs) container management platform. The NLB is responsible for balancing and health checking the registered containers.

## Activation Steps

To request the creation of an API Gateway in AWS, a requirement ticket must be created in the [Modyo Support Center](https://support.modyo.com).

As a general rule, each environment has a single shared API Gateway for all deployed microservices. If authentication is required in API calls using JWT tokens, the API Gateway must be deployed in conjunction with the [Single Sign-On (SSO)](single-sign-on.html) component.

:::tip Authorization of invocations
To authorize invocations to private APIs, the AWS API Gateway establishes communication with the SSO through an [AWS Lambda](https://aws.amazon.com/lambda) routine called [Lambda Authorizer](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html), which is deployed internally and transparently as part of the service.
:::