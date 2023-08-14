# Integraciones

La integración hacia los sistemas core del cliente, se puede realizar de dos formas. La primera de ellas mediante [Modyo Connect](/es/connect) y la segunda de forma directa a APIs controladas directamente por el cliente.

#### APIs desplegadas en Modyo Connect

[Modyo Connect](/es/connect) es un servicio manejado de infraestructura provisto por Modyo sobre el cual se pueden desplegar de forma directa las diferentes plantillas de integración disponibles dentro de Dynamic Framework, como se muestra en la siguiente figura:

<img src="/assets/img/dynamic/dynamic_architecture.png" alt="Dynamic structure" style="margin-top: 40px; max-width: 700px;" />

#### APIs proporcionadas por el Cliente

Los Micro Frontends disponibles en Dynamic Framework pueden ser integrados directamente a las APIs de cada cliente, incrementando la flexibilidad de cómo pueden ser utilizados.

<img src="/assets/img/dynamic/dynamic_architecture2.png" alt="Dynamic structure" style="margin-top: 40px; max-width: 700px;" />

Para ello, existen dos opciones:

- Alterar el código del componente intermediario de comunicación, ajustando las llamadas a APIs y los resultados a la estructura de Dynamic Framework, siguiendo el [patrón de arquitectura de repositorio](https://martinfowler.com/eaaCatalog/repository.html), pero alterando el origen de los datos.
- Realizar llamadas a las APIs de forma directa desde los Micro Frontends, eliminando con ello el componente intermediario provisto por Modyo.

:::warning APIs de Integración
Las plantillas de microservicios de integración ofrecidas como parte de la iniciativa, podrán ser desplegadas también dentro de la infraestructura del cliente. Para ello, ciertos ajustes en su código base podrían ser necesarios.
:::


Las APIs de Dynamic buscan implementar un modelo de referencia para integrar los Widgets de Dynamic con el ecosistema de sistemas que hacen parte de las soluciones financieras que buscamos adoptar.

Las APIs de Dynamic se desarrollarán basadas en Modyo Connect, utilizando el estándar de Java Spring Boot como lenguaje base, lo que disminuye los esfuerzos de adaptación y operación futuros gracias a la enorme comunidad que poseen estas tecnologías.

Las APIs de Dynamic seguirán el estándar REST y deberán exponer a los desarrolladores un portal de documentación basado en Swagger o similar, en el cual se podrán explorar los diferentes endpoints y su forma de invocación con ejemplos.
