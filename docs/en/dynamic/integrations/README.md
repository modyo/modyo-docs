# Integrations

The integration into the customer's core systems can be done in two ways. The first one through [Modyo Connect](/en/connect) and the second one directly to APIs controlled directly by the customer.

#### APIs deployed in Modyo Connect

[Modyo Connect](/en/connect) is a managed infrastructure service provided by Modyo on which the different integration templates available within the Dynamic Framework can be directly deployed, as shown in the following figure:

<img src="/assets/img/dynamic/dynamic_architecture.png" alt="Dynamic structure" style="margin-top: 40px; max-width: 700px;" />

#### APIs provided by the Customer

The Micro Frontends available in Dynamic Framework can be directly integrated into the APIs of each client, increasing the flexibility of how they can be used.

<img src="/assets/img/dynamic/dynamic_architecture2.png" alt="Dynamic structure" style="margin-top: 40px; max-width: 700px;" />

To do this, there are two options:

- Altering the code of the communication intermediary component, adjusting the API calls and the results to the Dynamic Framework structure, following the [repository architecture pattern] (https://martinfowler.com/eaaCatalog/repository.html), but altering the source of the data.
- Make calls to the APIs directly from the Micro Frontends, thus eliminating the intermediary component provided by Modyo.

:::warning Integration APIs
The integration microservice templates offered as part of the initiative can also be deployed within the customer's infrastructure. To do this, certain settings in your code base may be necessary.
:::


The Dynamic APIs seek to implement a reference model to integrate Dynamic Widgets with the ecosystem of systems that are part of the financial solutions we seek to adopt.

The Dynamic APIs will be developed based on Modyo Connect, using the Java Spring Boot standard as the base language, which reduces future adaptation and operation efforts thanks to the enormous community that these technologies have.

The Dynamic APIs follow the REST standard and contain a documentation portal based on Swagger or similar for developers, in which the different endpoints and their usage can be explored with examples.
