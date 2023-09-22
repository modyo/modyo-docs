# Integrations

Integration with the customer's central systems can be carried out in two ways:

1. Through Modyo Connect
2. By connecting directly to the APIs controlled by the customer.


#### APIs deployed in Modyo Connect

[Modyo Connect] (/es/connect) is a managed infrastructure service, provided by Modyo, on which you can directly deploy the integration templates available in the Dynamic Framework, as shown in the following figure:

<img src="/assets/img/dynamic/dynamic_architecture.png" alt="Dynamic structure" style="margin-top: 40px; max-width: 700px;" />

#### APIs provided by the Customer

You can integrate the available Micro Frontends in Dynamic Framework directly into each customer's APIs, increasing flexibility in their use. There are two options to achieve this:

<img src="/assets/img/dynamic/dynamic_architecture2.png" alt="Dynamic structure" style="margin-top: 40px; max-width: 700px;" />

1. Modify the code of the communication intermediary component, adjusting the API calls and the results to the Dynamic Framework structure. This follows the [repository architecture pattern] (https://martinfowler.com/eaaCatalog/repository.html), but alters the source of the data.
2. Make direct calls to the APIs from the Micro Frontends, thus eliminating the intermediate component provided by Modyo.

:::warning Integration APIs
The integration microservices templates offered as part of the initiative can also be deployed within the customer's infrastructure. This may require adjustments to the codebase.
:::

The Dynamic APIs are designed to implement a reference model that integrates Dynamic Widgets with the ecosystem of systems that are part of the financial solutions we seek to adopt.

These Dynamic APIs are developed using Modyo Connect and are based on the Java Spring Boot standard as the main language. This makes it easier to adapt and operate in the future because of the large community that supports these technologies.

Dynamic's APIs follow the REST standard and provide developers with a documentation portal based on Swagger or another similar format. This allows you to explore the different endpoints and their way of invoking them through examples.