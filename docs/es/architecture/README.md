---
search: true
---

# Arquitectura

El desarrollo de aplicaciones web complejas y escalables exige el uso de patrones de arquitectura de software eficaces. Estos patrones son fundamentales para garantizar la escalabilidad, mantenibilidad y eficiencia de cualquier solución de software moderna.

En esta guía exploramos diversos patrones de arquitectura, desde enfoques modulares orientados a componentes hasta arquitecturas contemporáneas basadas en micro frontends, microservicios y Domain-Driven Design (DDD). Analizaremos los principios, ventajas, desventajas, escenarios de uso ideales y la implementación de cada patrón en la plataforma Modyo.

El objetivo es ofrecer una guía de referencia sólida para arquitectos y desarrolladores que buscan construir aplicaciones robustas, escalables y preparadas para el futuro, aprovechando al máximo estos patrones de arquitectura.

:::tip Enfoque de Alto Nivel
Esta guía contiene patrones de alto nivel y está diseñada para arquitectos de software y líderes técnicos.

Para una revisión de patrones de programación más específicos de programación recomendamos el libro [“Design Patterns: Elements of Reusable Object-Oriented Software”](https://en.wikipedia.org/wiki/Design_Patterns) de Erich Gamma, Ralph Johnson, Richard Helm y John Vlissides.
:::

## Arquitectura de Referencia

Los micro frontends son componentes de experiencia de usuario de alto nivel, orquestados por la plataforma Modyo. Los micro frontends se ejecutan directamente en el navegador del usuario final e interactúan mediante APIs con los microservicios. Cada micro frontend y microservicio está diseñado para representar una parte específica de la funcionalidad del negocio y se desarrollan, prueban y despliegan de manera independiente.

La siguiente figura muestra la arquitectura de referencia de Modyo, en la cual, los micro frontends se despliegan dentro de la Plataforma Modyo, mientras que los microservicios se despliegan en una infraestructura separada, exponiendo su funcionalidad mediante APIs.

<img src="/assets/img/infrastructure/reference_architecture.png" alt="Reference architecture" />

Esta arquitectura ofrece ventajas clave sobre un enfoque monolítico, ya que permite actualizar y escalar cada componente de forma independiente sin afectar al resto del sistema. Esto proporciona mayor modularidad, flexibilidad, mantenibilidad y escalabilidad.

Además, esta arquitectura desacoplada fomenta una mayor independencia entre los equipos de desarrollo. Cada equipo puede centrarse en su servicio o componente específico sin preocuparse por el resto del sistema. Esto facilita la colaboración y agiliza el proceso de desarrollo.

Para modelar micro frontends y microservicios desde la perspectiva del negocio, Modyo recomienda usar la metodología [Domain-Driven Design (DDD)](/es/architecture/patterns/ddd).


### Modyo Connect
La arquitectura de referencia de Modyo desacopla completamente el frontend del backend, al establecer un contexto delimitado para la comunicación mediante APIs. Mientras que el frontend es administrado completamente por la plataforma, el backend requiere de una [implementación independiente](/es/architecture/patterns/bff). Esta implementación puede ser sobre APIs ya existentes o sobre el servicio de [Modyo Connect](/es/connect).

Modyo Connect es un servicio de infraestructura administrado en modalidad de plataforma como servicio (PaaS). Este servicio es gestionado por Modyo y se despliega en un entorno seguro en la nube empresarial de Modyo.

:::tip Más información
Para obtener más información sobre Modyo Connect y sus componentes de infraestructura administrados, consulta la [documentación oficial](/es/connect).
:::


## Patrones de Arquitectura

Los patrones de arquitectura son soluciones probadas y recomendadas para problemas comunes en el diseño y desarrollo de software. Estos patrones establecen una estructura y un conjunto de reglas para organizar y relacionar los componentes de un sistema, lo que facilita el desarrollo, la mantenibilidad y la escalabilidad del software.

Al utilizar patrones de arquitectura, los desarrolladores pueden aprovechar las mejores prácticas establecidas y adoptar un enfoque estructurado para construir aplicaciones de alta calidad. Estos patrones abordan inquietudes como la distribución de responsabilidades, la modularidad, la reutilización de código y la gestión de datos, entre otros aspectos esenciales en el desarrollo de software. Al seguir estos patrones, los equipos de desarrollo pueden crear sistemas sólidos, flexibles y de fácil mantenimiento.