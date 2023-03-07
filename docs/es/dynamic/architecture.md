---
search: false
---

# Arquitectura

Modyo Dynamic se implementa sobre tecnologías reconocidas en la industria, que permiten minimizar el vendor lock-in y asegurar la mantenibilidad futura del código, como es el caso de React para experiencias de frontend y Spring Boot para las integraciones de backend.


### Integración con Modyo Connect
[Modyo Connect](/es/connect) es un servicio manejado de infraestructura provisto por Modyo sobre el cual se pueden desplegar de forma directa las diferentes plantillas de integración disponibles dentro de Modyo Dynamic, como se muestra en la siguiente figura:

<img src="/assets/img/dynamic/dynamic_architecture.png" alt="Dynamic structure" style="margin-top: 40px; max-width: 700px;" />




### Integración directa a las APIs del cliente
Los Micro Frontends disponibles en Modyo Dynamic pueden ser integrados directamente a las APIs de cada cliente, incrementando la flexibilidad de cómo pueden ser utilizados.

<img src="/assets/img/dynamic/dynamic_architecture2.png" alt="Dynamic structure" style="margin-top: 40px; max-width: 700px;" />

Para ello, existen dos opciones:
- Alterar el código del componente intermediario de comunicación, ajustando las llamadas a APIs y los resultados a la estructura de Modyo Dynamic, siguiendo el [patrón de arquitectura de repositorio](https://martinfowler.com/eaaCatalog/repository.html), pero alterando el origen de los datos.
- Realizar llamadas a las APIs de forma directa desde los Micro Frontends, eliminando con ello el componente intemediario provisto por Modyo.


:::warning APIs de Integración
Los microservicios de integración ofrecidos como parte de la iniciativa, podrán ser desplegados también dentro de la infraestructura del cliente. Para ello ciertos ajustes en su código base podrían ser necesarios.
:::


## Micro Frontends

:::tip Modyo Platform
Para más información sobre Modyo Platform y sus funcionalidades, favor referirse a su [documentación oficial](/es/platform).
:::


### Web Components

- StencilJS


### React




## Microservicios


### SpringBoot


### Modyo Connect

:::tip Modyo Connect
Para más información sobre Modyo Connect y sus componentes, favor referirse a su [documentación oficial]("/es/connect").
:::