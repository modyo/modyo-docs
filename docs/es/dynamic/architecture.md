---
search: true
---

# Arquitectura
Modyo Dynamic se basa en una arquitectura desacoplada de micro frontends y microservicios construidos de forma modular y que pueden ser desplegados de forma independiente.

En este tipo de arquitectura, los micro frontends son componentes de experiencia de usuario que se ejecutan de manera independiente en el navegador del usuario. Cada micro frontend está diseñado para representar una parte específica de la interfaz de usuario y, al igual que un microservicio, puede ser desarrollado, probado y desplegado de manera independiente.

Por otro lado, los microservicios son pequeñas aplicaciones independientes que realizan una única tarea o función específica. Cada microservicio se ejecuta de manera autónoma y puede comunicarse con otros servicios a través de interfaces de programación de aplicaciones (API) para proporcionar una funcionalidad más compleja.

La combinación de micro frontends y microservicios permite que cada servicio y componente de experiencia se desarrollen y desplieguen de manera independiente, lo que significa que se pueden actualizar y escalar de manera independiente sin afectar el resto del sistema. Esto da como resultado una mayor modularidad, flexibilidad y escalabilidad en el diseño de la arquitectura.

Además, la arquitectura desacoplada basada en micro frontends y microservicios también permite una mayor independencia entre los equipos de desarrollo, ya que cada equipo puede centrarse en su servicio o componente de UI específico sin tener que preocuparse por el resto del sistema. Esto facilita la colaboración y acelera el proceso de desarrollo.

<img src="/assets/img/infrastructure/reference_architecture.png" alt="Partner Badge" style="margin-top: 40px;" />


### Integración a Sistemas Core
La integración hacia los sistemas core del cliente, se puede realizar de dos formas. La primera de ellas mediante [Modyo Connect](/es/connect) y la segunda de forma directa a APIs controladas directamente por el cliente.

#### APIs en Modyo Connect
[Modyo Connect](/es/connect) es un servicio manejado de infraestructura provisto por Modyo sobre el cual se pueden desplegar de forma directa las diferentes plantillas de integración disponibles dentro de Modyo Dynamic, como se muestra en la siguiente figura:

<img src="/assets/img/dynamic/dynamic_architecture.png" alt="Dynamic structure" style="margin-top: 40px; max-width: 700px;" />

#### APIs Proporcionadas por el Cliente
Los Micro Frontends disponibles en Modyo Dynamic pueden ser integrados directamente a las APIs de cada cliente, incrementando la flexibilidad de cómo pueden ser utilizados.

<img src="/assets/img/dynamic/dynamic_architecture2.png" alt="Dynamic structure" style="margin-top: 40px; max-width: 700px;" />

Para ello, existen dos opciones:
- Alterar el código del componente intermediario de comunicación, ajustando las llamadas a APIs y los resultados a la estructura de Modyo Dynamic, siguiendo el [patrón de arquitectura de repositorio](https://martinfowler.com/eaaCatalog/repository.html), pero alterando el origen de los datos.
- Realizar llamadas a las APIs de forma directa desde los Micro Frontends, eliminando con ello el componente intermediario provisto por Modyo.

:::warning APIs de Integración
Las plantillas de microservicios de integración ofrecidas como parte de la iniciativa, podrán ser desplegadas también dentro de la infraestructura del cliente. Para ello, ciertos ajustes en su código base podrían ser necesarios.
:::

## Micro Frontends
Una arquitectura basada en micro frontends es una técnica para construir aplicaciones web que consiste en dividir la interfaz de usuario en pequeñas partes modulares e independientes, conocidas como micro frontends. Cada micro frontend es una aplicación web independiente que se enfoca en una parte específica de la experiencia de usuario y se comunica con otros micro frontends a través de API's.

En una arquitectura basada en micro frontends, la interfaz de usuario se compone de múltiples micro frontends que pueden ser desarrollados, probados y desplegados de manera independiente. Cada micro frontend es responsable de su propia lógica y se comunica con otros micro frontends a través de una API bien definida y documentada.

La principal ventaja de una arquitectura basada en micro frontends es la capacidad de dividir la aplicación en partes más pequeñas y manejables, lo que facilita la escalabilidad y el mantenimiento. Además, los equipos de desarrollo pueden trabajar en diferentes micro frontends simultáneamente sin afectar a otros componentes, lo que acelera el proceso de desarrollo y mejora la eficiencia del equipo.

Otra ventaja es la capacidad de reutilizar los micro frontends en diferentes proyectos y aplicaciones web, lo que reduce el tiempo y el costo de desarrollo.

Modyo Dynamic utiliza una arquitectura probada y madura basada en micro frontends para construir aplicaciones web que dividen la interfaz de usuarios en pequeñas partes modulares e independientes. Los micro frontends se disponibilizan en forma de plantillas de código que pueden ser descargadas de forma independiente. Cada plantilla depende de librerías comunes, como por ejemplo el sistema de diseño y los frameworks de Javascript utilizados.

Los micro frontends de Modyo Dynamic están diseñados para ser desplegados en la Plataforma Modyo y no se garantiza que puedan ser utilizados fuera de ella.

:::tip Plataforma Modyo
Para más información sobre la Plataforma Modyo y sus funcionalidades, favor referirse a su [documentación oficial](/es/platform).
:::


### Web Components
Los Web Components son una tecnología web que permite la creación de componentes personalizados reutilizables en aplicaciones web. Estos componentes encapsulan HTML, CSS y JavaScript y se pueden utilizar en diferentes proyectos y aplicaciones web.

En los micro frontend de Modyo Dynamic, los web components permiten crear componentes reutilizables y fáciles de mantener. Al utilizar web components en un micro frontend, se pueden separar las funcionalidades y las responsabilidades de cada componente, lo que facilita el desarrollo y el mantenimiento de la aplicación.

Modyo Dynamic utiliza la librería de Web Components de [Stencil JS](https://stenciljs.com).

### React
ReactJS es una biblioteca de JavaScript de código abierto desarrollada por Facebook que se utiliza para construir interfaces de usuario interactivas y escalables para aplicaciones web y móviles. ReactJS es una de las herramientas más populares para la creación de aplicaciones web modernas.

ReactJS se basa en el concepto de "componentes", que son bloques de construcción reutilizables para la construcción de la interfaz de usuario de una aplicación. Los componentes de React se pueden componer para formar aplicaciones complejas, lo que permite la creación de interfaces de usuario modulares, fáciles de mantener y escalables.

React utiliza un modelo de programación declarativo en el que el desarrollador se enfoca en definir la estructura de la interfaz de usuario en lugar de preocuparse por los detalles de cómo se actualiza la interfaz de usuario en respuesta a las acciones del usuario. React actualiza automáticamente la interfaz de usuario cuando se produce un cambio en los datos, lo que hace que el desarrollo de aplicaciones sea más eficiente y menos propenso a errores.

React es una excelente opción para la construcción de micro frontends debido a las siguientes razones:
- React es una biblioteca de JavaScript que permite la creación de componentes reutilizables, lo que se alinea perfectamente con la filosofía de la arquitectura de micro frontends, que busca dividir la interfaz de usuario en pequeñas partes modulares e independientes.
- React es muy flexible y se integra bien con otras tecnologías y bibliotecas. Esto significa que es fácil integrar componentes de React con otras tecnologías y bibliotecas, lo que hace que sea fácil incorporar React en una arquitectura de micro frontends.
- React tiene un rendimiento muy bueno, lo que lo hace adecuado para aplicaciones web de alta demanda y de gran escala, como las aplicaciones que utilizan una arquitectura de micro frontends.
- React tiene una gran comunidad de desarrolladores y una amplia gama de herramientas y bibliotecas complementarias, lo que facilita el desarrollo y la implementación de aplicaciones web de micro frontends.
- React es compatible con el enfoque de "Renderizado del Lado del Cliente" (Client-Side Rendering), lo que permite la creación de aplicaciones web rápidas y altamente interactivas, lo que es muy importante en aplicaciones de micro frontends.

Modyo Dynamic utiliza React ya que es una excelente opción para la construcción de micro frontends debido a su capacidad para crear componentes reutilizables, su flexibilidad, rendimiento, comunidad de desarrolladores y compatibilidad con el renderizado del lado del cliente.


### Internacionalización
La internacionalización (i18n) en un micro frontend se refiere a la adaptación de la interfaz de usuario de la aplicación a diferentes idiomas y culturas. En otras palabras, la aplicación debe ser capaz de mostrar los textos e imágenes en diferentes idiomas.

Dentro de Modyo Dynamic, la internacionalización se implementa con las siguientes prácticas:
- Se utiliza una biblioteca de internacionalización que permita la gestión de diferentes idiomas. Algunas opciones populares son react-i18next, ngx-translate y i18next.
- Se utilizan identificadores de cadenas de texto para identificar los textos de la interfaz de usuario en el código fuente, en lugar de utilizar los textos directamente en el código. Esto permitirá la traducción de los textos a diferentes idiomas sin necesidad de modificar el código fuente.
- Se crean archivos de traducción para cada idioma que se desee utilizar en la aplicación. Estos archivos deben contener las traducciones de los identificadores de cadenas de texto utilizados en el código fuente.
- Se implementa la funcionalidad en la aplicación para cambiar el idioma de la interfaz de usuario. Esto puede hacerse utilizando un selector de idioma o una funcionalidad similar.
- Se realizan pruebas de internacionalización para asegurarse de que la aplicación se muestra correctamente en diferentes idiomas y culturas.

Al implementar estas prácticas, Modyo Dynamic garantiza que la aplicación sea fácilmente adaptable a diferentes idiomas y culturas, lo que mejorará la experiencia de usuario para personas de diferentes países y regiones.


### Accesibilidad
La accesibilidad dentro de los micro frontend de Modyo Dynamic es un aspecto importante a considerar para garantizar que todas las personas, incluyendo aquellas con discapacidades, puedan utilizar y navegar por la interfaz de usuario de manera efectiva.

Para implementar la accesibilidad, se siguen las siguientes prácticas:
- Se utiliza una estructura semántica adecuada en el código HTML para garantizar que las tecnologías de asistencia, como los lectores de pantalla, puedan interpretar correctamente la información.
- Se proporcionan alternativas textuales para imágenes, videos y otros elementos multimedia para que las personas con discapacidad visual puedan acceder a la información.
- Se utilizan colores contrastantes y fuentes legibles para garantizar que la información sea fácilmente visible y legible.
- Se prueba la accesibilidad con herramientas especializadas como Lighthouse, para identificar y corregir problemas de accesibilidad.

Modyo implementa estas prácticas con el fin de mejorar significativamente la accesibilidad en sus micro frontend y hacer que la interfaz de usuario sea más inclusiva para todas las personas.


### Patrón de Repositorio
El patrón de Repositorio es un patrón de diseño de software que se utiliza para separar la lógica de negocio de la capa de acceso a datos en una aplicación. El patrón de Repositorio se utiliza comúnmente en aplicaciones que utilizan una arquitectura basada en capas, donde la lógica de negocio, la presentación y el acceso a datos se separan en capas distintas.

En este patrón, el repositorio actúa como una capa de abstracción entre la lógica de negocio y el acceso a datos. El Repositorio proporciona una interfaz para acceder a los datos, y oculta la complejidad de la capa de acceso a datos subyacente. De esta manera, la lógica de negocio puede interactuar con los datos de forma independiente de la capa de acceso a datos.

El Repositorio también es responsable de implementar la lógica necesaria para realizar operaciones de acceso a datos, como la creación, lectura, actualización y eliminación de datos. La capa de acceso a datos subyacente, que puede ser una base de datos, un servicio web o cualquier otro tipo de almacenamiento de datos, se implementa dentro del repositorio.

El patrón de Repositorio tiene varios beneficios, entre ellos:
- Facilita la separación de preocupaciones entre la lógica de negocio y el acceso a datos.
- Mejora la modularidad y la capacidad de reutilización del código.
- Simplifica el mantenimiento del código, ya que los cambios en la capa de acceso a datos se pueden realizar sin afectar la lógica de negocio.
- Facilita la prueba unitaria del código, ya que el Repositorio se puede simular para probar la lógica de negocio sin acceder realmente a los datos.

Los micro frontends de Modyo Dynamic utilizan el patrón de repositorio para facilitar las tareas de comunicación hacia las APIs de integración, sean estas implementadas con o sin Modyo Connect.

## Microservicios
Los microservicios de integración son una arquitectura de software que se centra en la creación de servicios pequeños, autónomos e independientes que pueden comunicarse entre sí para proporcionar una funcionalidad de integración de sistemas. Estos microservicios se implementan en contenedores y se ejecutan de manera independiente, lo que los hace altamente escalables y flexibles.

Los microservicios de integración permiten a las organizaciones conectar aplicaciones y sistemas heterogéneos de manera más efectiva. En lugar de depender de un sistema monolítico para manejar todas las funciones de integración, los microservicios permiten una mayor modularidad y flexibilidad en el diseño de la arquitectura.

Los microservicios de integración también pueden utilizarse para implementar patrones de integración comunes, como ESB (Enterprise Service Bus), API Gateway, orquestación de servicios, entre otros. Al utilizar microservicios de integración, las organizaciones pueden crear soluciones de integración más escalables, ágiles y adaptables a medida que cambian las necesidades del negocio y las tecnologías evolucionan.

Los microservicios de integración de Modyo Dynamic han sido desarrollados utilizando los principios de arquitectura héxagonal, sobre el framework de desarrollo de Spring Boot y están pensados para ser desplegados primariamente sobre Modyo Connect.

### Arquitectura Héxagonal
La arquitectura hexagonal, también conocida como Arquitectura Puertos y Adaptadores, es un patrón de arquitectura de software que se enfoca en la separación de las preocupaciones (SoC, por sus siglas en inglés) y en la independencia del hardware y del software en una aplicación. Esta arquitectura se enfoca en la idea de que las aplicaciones deben estar estructuradas de manera que el núcleo de la lógica de negocio se encuentre en el centro de la arquitectura, con la interfaz de usuario y las capas de infraestructura ubicadas en la periferia.

La arquitectura hexagonal se compone de tres capas principales:

- **Capa de Dominio:** Contiene la lógica de negocio de la aplicación y representa el núcleo de la arquitectura. Esta capa es independiente de la interfaz de usuario y de la capa de infraestructura.
- **Capa de Adaptadores de Infraestructura:** Contiene los adaptadores que conectan la capa de dominio con las capas de infraestructura. Los adaptadores se encargan de transformar los datos entre los formatos de la capa de dominio y los formatos específicos de la infraestructura (por ejemplo, bases de datos, servicios web, etc.).
- **Capa de Infraestructura:** Contiene los componentes específicos de la infraestructura que se utilizan en la aplicación, como bases de datos, servicios web, sistemas de archivos, etc.

La arquitectura hexagonal tiene varios beneficios, entre ellos:

- Permite la separación de las preocupaciones y la independencia del hardware y del software en una aplicación.
- Simplifica la integración de nuevos componentes de infraestructura.
- Facilita la prueba y la depuración de la lógica de negocio de la aplicación.
- Mejora la modularidad y la capacidad de reutilización del código.

Los microservicios de Modyo Dynamic se encuentran desarrollados utilizando los principios de la arquitectura héxagonal.

### SpringBoot
Spring Boot es un framework de desarrollo de aplicaciones Java que se basa en el popular framework Spring. Spring Boot se enfoca en simplificar el proceso de desarrollo y configuración de aplicaciones Spring al proporcionar una configuración predeterminada fuera de la caja.

Con Spring Boot, los desarrolladores pueden construir aplicaciones web, microservicios y otros tipos de aplicaciones empresariales de manera rápida y sencilla. Spring Boot hace que el proceso de configuración sea más fácil mediante la autoconfiguración y la eliminación de la necesidad de escribir una gran cantidad de código de configuración repetitivo.

Además, Spring Boot se integra bien con otras tecnologías de la plataforma Java, lo que permite a los desarrolladores crear aplicaciones altamente escalables y eficientes. En resumen, Spring Boot es una herramienta poderosa y popular para el desarrollo de aplicaciones Java modernas.

### Modyo Connect
Los microservicios de Modyo Dynamic han sido diseñados para su despliegue sobre el servicio manejado de infraestructura de [Modyo Connect](/es/connect), sin embargo, pueden ser adaptados para cualquier tipo de infraestructura de nube o física.

:::tip Modyo Connect
Para más información sobre Modyo Connect y sus componentes, favor referirse a su [documentación oficial]("/es/connect").
:::

