---
search: true
---

# Arquitectura

En el contexto actual de la era digital, el desarrollo web ha asumido un papel central en la creación de soluciones de software. A medida que las aplicaciones web modernas se vuelven más complejas y escalables, se vuelve imperativo adoptar patrones de arquitectura de software eficaces y eficientes. Estos patrones garantizan la escalabilidad, mantenibilidad y eficacia de nuestras soluciones.

Esta guía tiene como objetivo explorar diversos patrones de arquitectura de software que modelan la forma en que desarrollamos y entendemos las aplicaciones web. Desde la arquitectura modular orientada a componentes, hasta enfoques más contemporáneos, como la arquitectura basada en micro frontends, microservicios y el Diseño Dirigido por el Dominio (Domain-Driven Design), abordaremos cada uno de estos patrones en detalle. Analizaremos sus principios, ventajas, desventajas y los escenarios de uso ideales. Además, examinaremos su implementación con Modyo.

Nuestro objetivo es proporcionar una guía sólida y un recurso de referencia para los desarrolladores web, los arquitectos de software y todas las partes interesadas que buscan hacer frente a los desafíos del desarrollo web moderno. Aspiramos a aprovechar al máximo los patrones de arquitectura de software para construir aplicaciones sólidas, escalables y orientadas al futuro.

:::tip Enfoque de Alto Nivel
Esta guía contiene patrones de alto nivel y está diseñada para arquitectos de software y líderes técnicos.

Para una revisión de patrones de programación más específicos de programación recomendamos el libro [“Design Patterns: Elements of Reusable Object-Oriented Software”](https://en.wikipedia.org/wiki/Design_Patterns) de Erich Gamma, Ralph Johnson, Richard Helm y John Vlissides.
:::

## Arquitectura de Referencia

Los micro frontends son componentes de experiencia de usuario de alto nivel, orquestados por la plataforma Modyo. Los micro frontends se se ejecutan directamente desde el navegador del usuario final e interactúan por medio de APIs con los microservicios. Cada micro frontend y microservicio está diseñado para representar una parte específica de la funcionalidad del negocio y se desarrollan, prueban y despliegan de manera independiente.

La siguiente figura muestra la arquitectura de referencia de Modyo, en dónde los micro frontends se despliegan dentro de la Plataforma Modyo, mientras que los microservicios se despliegan de forma desacoplada dentro una infraestructura de contenedores independiente.

<img src="/assets/img/infrastructure/reference_architecture.png" alt="Reference architecture" />

Esta arquitectura ofrece ventajas en comparación con un enfoque monolítico. Permite actualizar y escalar cada componente de manera independiente, sin afectar al resto del sistema, lo que conlleva una mayor modularidad, flexibilidad, mantenibilidad y escalabilidad en el diseño de la arquitectura.

Además, la arquitectura desacoplada basada en micro frontends y microservicios también permite una mayor independencia entre los equipos de desarrollo. Cada equipo puede centrarse en su servicio o componente específico sin preocuparse por el resto del sistema. Esto facilita la colaboración y agiliza el proceso de desarrollo.

Para modelar micro frontends y microservicios desde una perspectiva de negocio, Modyo recomienda el uso de la técnica de [Domain Driven Design (DDD)](/es/architecture/patterns/ddd).


### Modyo Connect
La arquitectura de referencia de Modyo desacopla completamente el frontend del backend, al establecer un contexto delimitado para la comunicación mediante APIs. Mientras que el frontend es administrado completamente por la plataforma, el backend requiere de una [implementación independiente](/es/architecture/patterns/bff). Esta implementación puede ser sobre APIs ya existentes o sobre el servicio de [Modyo Connect](/es/connect).

Modyo Connect es un servicio de infraestructura administrado en modalidad de plataforma como servicio (PaaS). Este servicio es gestionado por Modyo y se despliega en un entorno seguro en la nube empresarial de Modyo.

:::tip Más información
Para obtener más información sobre Modyo Connect y sus componentes de infraestructura administrados, consulta la [documentación oficial](/es/connect).
:::


## Patrones de Arquitectura

Los patrones de arquitectura son soluciones probadas y recomendadas para problemas comunes en el diseño y desarrollo de software. Estos patrones establecen una estructura y un conjunto de reglas para organizar y relacionar los componentes de un sistema, lo que facilita el desarrollo, la mantenibilidad y la escalabilidad del software.

Al utilizar patrones de arquitectura, los desarrolladores pueden aprovechar las mejores prácticas establecidas y adoptar un enfoque estructurado para construir aplicaciones de alta calidad. Estos patrones abordan inquietudes como la distribución de responsabilidades, la modularidad, la reutilización de código y la gestión de datos, entre otros aspectos esenciales en el desarrollo de software. Al seguir estos patrones, los equipos de desarrollo pueden crear sistemas sólidos, flexibles y de fácil mantenimiento.