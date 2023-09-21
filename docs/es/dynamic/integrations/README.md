# Integraciones

La integración con los sistemas centrales del cliente se puede llevar a cabo de dos maneras:

1. A través de Modyo Connect
2. Mediante la conexión directa a las APIs controladas por el cliente.


#### APIs desplegadas en Modyo Connect

[Modyo Connect](/es/connect) es un servicio manejado de infraestructura, provisto por Modyo, sobre el cual puedes desplegar directamente las plantillas de integración disponibles en Dynamic Framework, como se muestra en la siguiente figura:

<img src="/assets/img/dynamic/dynamic_architecture.png" alt="Dynamic structure" style="margin-top: 40px; max-width: 700px;" />

#### APIs proporcionadas por el Cliente

Puedes integrar los Micro Frontends disponibles en Dynamic Framework directamente a las APIs de cada cliente, lo que aumenta la flexibilidad en su uso. Hay dos opciones para lograrlo:

<img src="/assets/img/dynamic/dynamic_architecture2.png" alt="Dynamic structure" style="margin-top: 40px; max-width: 700px;" />

1. Modificar el código del componente intermediario de comunicación, ajustando las llamadas a APIs y los resultados a la estructura de Dynamic Framework. Esto sigue el [patrón de arquitectura de repositorio](https://martinfowler.com/eaaCatalog/repository.html), pero altera el origen de los datos.
2. Realizar llamadas directas a las APIs desde los Micro Frontends, eliminando así el componente intermediario proporcionado por Modyo.

:::warning APIs de Integración
Las plantillas de microservicios de integración ofrecidas como parte de la iniciativa, pueden también ser desplegadas dentro de la infraestructura del cliente. Esto puede requerir ajustes en el código base.
:::

Las APIs de Dynamic están diseñadas para implementar un modelo de referencia que integre los Widgets de Dynamic con el ecosistema de sistemas que forman parte de las soluciones financieras que buscamos adoptar.

Estas APIs de Dynamic se desarrollan utilizando Modyo Connect y se basan en el estándar Java Spring Boot como lenguaje principal. Esto facilita la adaptación y operación futura debido a la amplia comunidad que respalda estas tecnologías.

Las APIs de Dynamic siguen el estándar REST y proporcionan a los desarrolladores un portal de documentación basado en Swagger u otro formato similar. Esto permite explorar los diferentes endpoints y su forma de invocación a través de ejemplos.