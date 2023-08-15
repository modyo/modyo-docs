---
search: true
---

# Arquitectura

En la era digital actual, el desarrollo web ha tomado un papel central en la creación de soluciones de software. Sin embargo, con la creciente complejidad y escala de las aplicaciones web modernas, se hace cada vez más necesario adoptar patrones de arquitectura de software efectivos y eficientes para garantizar la escalabilidad, la mantenibilidad y la eficacia de nuestras soluciones.

La presente guía se propone explorar los diversos patrones de arquitectura de software que están modelando la forma en que desarrollamos y entendemos las aplicaciones web. Desde la arquitectura modular orientado a componentes, hasta los enfoques más contemporáneos como la arquitectura basada en micro frontends, microservicios y el Domain-Driven Design, abordaremos cada uno de estos patrones en detalle, desglosando sus principios, ventajas, desventajas y escenarios de uso ideales, además de abordar su implementación con Modyo.

El objetivo es proporcionar una guía sólida y un recurso de referencia para los desarrolladores web, los arquitectos de software y todas las partes interesadas que buscan hacer frente a los retos del desarrollo web moderno, y aprovechar al máximo los patrones de arquitectura de software para construir aplicaciones robustas, escalables y orientadas al futuro.

:::tip Enfoque de Alto Nivel
Esta guía contiene patrones de alto nivel y está pensada para arquitectos de software y líderes técnicos. Para una revisión de patrones de programación más específicos de programación recomendamos el libro [“Design Patterns: Elements of Reusable Object-Oriented Software”](https://en.wikipedia.org/wiki/Design_Patterns) de Erich Gamma, Ralph Johnson, Richard Helm y John Vlissides. 
:::

## Arquitectura de Referencia

Los micro frontends son componentes de experiencia de usuario de alto nivel, orquestados por la plataforma Modyo y ejecutados directamente desde el navegador del usuario final desde dónde interactúan por medio de APIs con los microservicios. Cada micro frontend y microservicio está diseñado para representar una parte específica de la funcionalidad del negocio y se desarrollan, prueban y despliegan de manera independiente.

La siguiente figura muestra la arquitectura de referencia de Modyo, en dónde los micro frontends se despliegan dentro de la Plataforma Modyo, mientras que los microservicios lo hacen de forma desacoplada dentro una infraestructura de contenedores independiente.

<img src="/assets/img/infrastructure/reference_architecture.png" alt="Reference architecture" />

Esta arquitectura representa varias ventajas en comparación con una monolítica, ya que permite actualizar y escalar de manera independiente cada componente, sin afectar al resto del sistema. Esto da como resultado una mayor modularidad, flexibilidad, mantenibilidad y escalabilidad en el diseño de la arquitectura.

Además, la arquitectura desacoplada basada en micro frontends y microservicios también permite una mayor independencia entre los equipos de desarrollo, ya que cada equipo puede centrarse en su servicio o componente específico sin tener que preocuparse por el resto del sistema. Esto facilita la colaboración y acelera el proceso de desarrollo.

Para modelar micro frontends y microservicios desde una perspectiva de negocio, Modyo recomienda el uso de la técnica de [Domain Driven Design (DDD)](/es/architecture/patterns/ddd).


### Modyo Connect
La arquitectura de referencia de Modyo desacopla completamente el frontend del backend, definiendo un contexto delimitado para la comunicación, mediante APIs. Mientras que el frontend es administrado completamente por la plataforma, el backend requiere de una [implementación por separado](/es/architecture/patterns/bff) la cual puede ser sobre APIs ya existentes, o sobre el servicio de [Modyo Connect](/es/connect).

Modyo Connect es un servicio manejado de infraestructura en modalidad plataforma como servicio (PaaS), administrado por Modyo y desplegado dentro de un ambiente seguro en la nube empresarial de Modyo.

:::tip Más información
Para más información sobre Modyo Connect y sus componentes manejados de infraestructura, favor referirse a su [documentación oficial]("/es/connect").
:::


## Patrones de Arquitectura

Los patrones de arquitectura son soluciones probadas y recomendadas para problemas comunes en el diseño y desarrollo de software. Estos patrones establecen una estructura y un conjunto de reglas para organizar y relacionar los componentes de un sistema, lo que facilita el desarrollo, la mantenibilidad y la escalabilidad del software. Al utilizar patrones de arquitectura, los desarrolladores pueden aprovechar las mejores prácticas establecidas y obtener un enfoque estructurado para construir aplicaciones de alta calidad. Estos patrones abordan preocupaciones como la separación de responsabilidades, la modularidad, la reutilización de código y la gestión de datos, entre otros aspectos fundamentales en el desarrollo de software. Al seguir estos patrones, los equipos de desarrollo pueden crear sistemas robustos, flexibles y fáciles de mantener.