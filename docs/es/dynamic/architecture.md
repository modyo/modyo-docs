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
Una arquitectura basada en micro frontends es una técnica para construir aplicaciones web que consiste en dividir la interfaz de usuario en pequeñas partes modulares e independientes, conocidas como micro frontends. Cada micro frontend es una aplicación web independiente que se enfoca en una parte específica de la interfaz de usuario y se comunica con otros micro frontends a través de API's.

En una arquitectura basada en micro frontends, la interfaz de usuario se compone de múltiples micro frontends que pueden ser desarrollados, probados y desplegados de manera independiente. Cada micro frontend es responsable de su propia lógica de negocio y se comunica con otros micro frontends a través de una API bien definida y documentada.

La principal ventaja de una arquitectura basada en micro frontends es la capacidad de dividir la aplicación en partes más pequeñas y manejables, lo que facilita la escalabilidad y el mantenimiento. Además, los equipos de desarrollo pueden trabajar en diferentes micro frontends simultáneamente sin afectar a otros componentes, lo que acelera el proceso de desarrollo y mejora la eficiencia del equipo.

Otra ventaja es la capacidad de reutilizar los micro frontends en diferentes proyectos y aplicaciones web, lo que reduce el tiempo y el costo de desarrollo.

En resumen, una arquitectura basada en micro frontends es una técnica para construir aplicaciones web que divide la interfaz de usuario en pequeñas partes modulares e independientes llamadas micro frontends. Esta arquitectura tiene ventajas como la escalabilidad, el mantenimiento, la eficiencia del equipo y la reutilización de componentes.

:::tip Modyo Platform
Para más información sobre Modyo Platform y sus funcionalidades, favor referirse a su [documentación oficial](/es/platform).
:::


### Web Components

- StencilJS

### React
ReactJS es una biblioteca de JavaScript de código abierto desarrollada por Facebook que se utiliza para construir interfaces de usuario interactivas y escalables para aplicaciones web y móviles. ReactJS es una de las herramientas más populares para la creación de aplicaciones web modernas.

ReactJS se basa en el concepto de "componentes", que son bloques de construcción reutilizables para la construcción de la interfaz de usuario de una aplicación. Los componentes de React se pueden componer para formar aplicaciones complejas, lo que permite la creación de interfaces de usuario modulares, fáciles de mantener y escalables.

React utiliza un modelo de programación declarativo en el que el desarrollador se enfoca en definir la estructura de la interfaz de usuario en lugar de preocuparse por los detalles de cómo se actualiza la interfaz de usuario en respuesta a las acciones del usuario. React actualiza automáticamente la interfaz de usuario cuando se produce un cambio en los datos, lo que hace que el desarrollo de aplicaciones sea más eficiente y menos propenso a errores.

React es uan excelente opción para la construcción de micro frontends debido a las siguientes razones:

- React es una biblioteca de JavaScript que permite la creación de componentes reutilizables, lo que se alinea perfectamente con la filosofía de la arquitectura de micro frontends, que busca dividir la interfaz de usuario en pequeñas partes modulares e independientes.
- React es muy flexible y se integra bien con otras tecnologías y bibliotecas. Esto significa que es fácil integrar componentes de React con otras tecnologías y bibliotecas, lo que hace que sea fácil incorporar React en una arquitectura de micro frontends.
- React tiene un rendimiento muy bueno, lo que lo hace adecuado para aplicaciones web de alta demanda y de gran escala, como las aplicaciones que utilizan una arquitectura de micro frontends.
- React tiene una gran comunidad de desarrolladores y una amplia gama de herramientas y bibliotecas complementarias, lo que facilita el desarrollo y la implementación de aplicaciones web de micro frontends.
- React es compatible con el enfoque de "Renderizado del Lado del Cliente" (Client-Side Rendering), lo que permite la creación de aplicaciones web rápidas y altamente interactivas, lo que es muy importante en aplicaciones de micro frontends.

Modyo Dynamic utiliza React ya que es una excelente opción para la construcción de micro frontends debido a su capacidad para crear componentes reutilizables, su flexibilidad, rendimiento, comunidad de desarrolladores y compatibilidad con el renderizado del lado del cliente.


### Internacionalización

Localización y manejo de Lenguajes

### Accesibilidad


### Patrón de Repositorio
El patrón de Repositorio es un patrón de diseño de software que se utiliza para separar la lógica de negocio de la capa de acceso a datos en una aplicación. El patrón de Repositorio se utiliza comúnmente en aplicaciones que utilizan una arquitectura basada en capas, donde la lógica de negocio, la presentación y el acceso a datos se separan en capas distintas.

En este patrón, el Repositorio actúa como una capa de abstracción entre la lógica de negocio y el acceso a datos. El Repositorio proporciona una interfaz para acceder a los datos, y oculta la complejidad de la capa de acceso a datos subyacente. De esta manera, la lógica de negocio puede interactuar con los datos de forma independiente de la capa de acceso a datos.

El Repositorio también es responsable de implementar la lógica necesaria para realizar operaciones de acceso a datos, como la creación, lectura, actualización y eliminación de datos. La capa de acceso a datos subyacente, que puede ser una base de datos, un servicio web o cualquier otro tipo de almacenamiento de datos, se implementa dentro del Repositorio.

El patrón de Repositorio tiene varios beneficios, entre ellos:

- Facilita la separación de preocupaciones entre la lógica de negocio y el acceso a datos.
- Mejora la modularidad y la capacidad de reutilización del código.
- Simplifica el mantenimiento del código, ya que los cambios en la capa de acceso a datos se pueden realizar sin afectar la lógica de negocio.
- Facilita la prueba unitaria del código, ya que el Repositorio se puede simular para probar la lógica de negocio sin acceder realmente a los datos.

En resumen, el patrón de Repositorio es un patrón de diseño de software que se utiliza para separar la lógica de negocio de la capa de acceso a datos en una aplicación, proporcionando una capa de abstracción que simplifica la interacción entre la lógica de negocio y los datos.

## Microservicios
Los Microservicios de integración de Modyo Dynamic corresponden a plantillas que pueden ser desplegadas directamente tanto en un ambiente de contenedores o servidor de aplicaciones, como dentro de [Modyo Connect](/es/connect). Las plantillas de Microservicios han sido desarrolladas con las siguientes consideraciones técnicas:

### Arquitectura Héxagonal
La arquitectura hexagonal, también conocida como Arquitectura Puertos y Adaptadores, es un patrón de arquitectura de software que se enfoca en la separación de las preocupaciones (SoC, por sus siglas en inglés) y en la independencia del hardware y del software en una aplicación. Esta arquitectura se enfoca en la idea de que las aplicaciones deben estar estructuradas de manera que el núcleo de la lógica de negocio se encuentre en el centro de la arquitectura, con la interfaz de usuario y las capas de infraestructura ubicadas en la periferia.

La arquitectura hexagonal se compone de tres capas principales:

- **Capa de Dominio:** contiene la lógica de negocio de la aplicación y representa el núcleo de la arquitectura. Esta capa es independiente de la interfaz de usuario y de la capa de infraestructura.
- **Capa de Adaptadores de Infraestructura:** contiene los adaptadores que conectan la capa de dominio con las capas de infraestructura. Los adaptadores se encargan de transformar los datos entre los formatos de la capa de dominio y los formatos específicos de la infraestructura (por ejemplo, bases de datos, servicios web, etc.).
- **Capa de Infraestructura:** contiene los componentes específicos de la infraestructura que se utilizan en la aplicación, como bases de datos, servicios web, sistemas de archivos, etc.

La arquitectura hexagonal tiene varios beneficios, entre ellos:

- Permite la separación de las preocupaciones y la independencia del hardware y del software en una aplicación.
- Simplifica la integración de nuevos componentes de infraestructura.
- Facilita la prueba y la depuración de la lógica de negocio de la aplicación.
- Mejora la modularidad y la capacidad de reutilización del código.

En resumen, la arquitectura hexagonal es un patrón de arquitectura de software que se enfoca en la separación de las preocupaciones y la independencia del hardware y del software en una aplicación, estructurando la aplicación en tres capas principales: la capa de dominio, la capa de adaptadores de infraestructura y la capa de infraestructura.


### SpringBoot


### Modyo Connect
Modyo Connect es un servicio de infraestructura manejada...

:::tip Modyo Connect
Para más información sobre Modyo Connect y sus componentes, favor referirse a su [documentación oficial]("/es/connect").
:::