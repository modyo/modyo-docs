---
search: false
---

# Domain Driven Design

El Domain-Driven Design (DDD) es una metodología de desarrollo de software que enfatiza la comprensión del dominio del negocio y modela el software según ese dominio. En DDD, los conceptos y estructuras del dominio empresarial se reflejan directamente en el diseño del software.

Ventajas del DDD:

- **Comunicación mejorada:** Fomenta el uso de un lenguaje común llamado "lenguaje ubicuo" entre desarrolladores, stakeholders y usuarios; lo que mejora la comunicación y la comprensión en el proyecto.
- **Enfoque en el dominio del negocio:** Garantiza que el software se adapte a las necesidades y procesos del negocio.
- **Diseño de software de alta calidad:** Promueve principios sólidos de diseño de software, lo que conduce a un software más mantenible y adaptable.

Desventajas del DDD:

- **Complejidad:** Puede ser complejo y requerir tiempo y esfuerzo considerables para implementar correctamente. Puede no ser adecuado para aplicaciones más simples o equipos con menos experiencia en diseño de software.
- **Requiere conocimiento del dominio:** Para usar DDD efectivamente, los desarrolladores deben tener o adquirir un buen entendimiento del dominio del negocio, lo cual puede ser un desafío en algunos contextos.
- **No es adecuado para todas las aplicaciones:** Es más útil en aplicaciones empresariales complejas. En aplicaciones con lógica de negocio simple, la sobrecarga de DDD puede no justificar los beneficios.

El DDD puede ser una herramienta valiosa para desarrollar software de alta calidad que se alinee estrechamente con las necesidades de un negocio. Sin embargo, es importante considerar cuidadosamente si es el enfoque adecuado para tu situación específica.

### DDD aplicado a los micro frontend y microservicios

Se puede aplicar DDD tanto a micro frontends como a microservicios para mantener el enfoque en el dominio del negocio y garantizar que los sistemas desarrollados se alineen con las necesidades y procesos del negocio.

#### Micro frontends
En el contexto de los micro frontends, puedes aplicar DDD al diseñar cada micro frontend para reflejar un subdominio específico del dominio del negocio. Por ejemplo, si estás construyendo un sitio web de comercio electrónico, popuedes tener un micro frontend para el carrito de compras, otro para la lista de productos y otro para el proceso de pago. Cada uno de estos micro frontends se encargaría de un aspecto específico del dominio del negocio y se desarrollaría de acuerdo con las necesidades y reglas de ese subdominio.

#### Microservicios
En el contexto de los microservicios, la aplicación de DDD es similar a la de los micro frontends. Cada microservicio debe representar un _bounded context_ o contexto acotado, que se refiere a un límite dentro del cual un modelo de dominio particular es consistente. Dentro de este contexto acotado, los modelos y el lenguaje deben ser coherentes. Cada microservicio debe tener su propio modelo de dominio y debe interactuar con otros microservicios a través de interfaces bien definidas.

En ambos casos, aplicar DDD significa dividir el sistema en componentes más pequeños, ya sea micro frontends o microservicios. Cada uno de estos componentes se enfoca en un aspecto particular del dominio empresarial y se diseña considerando las necesidades y reglas específicas de ese dominio. Esta práctica contribuye a desarrollar sistemas más coherentes, escalables y fáciles de mantener.


### Implementación de DDD con Modyo
Existen diversas formas de implementar DDD con Modyo, la más común comienza con el entendimiento del negocio en el que deseas implementar la solución. Una vez identificadas las diferentes áreas de negocio (dominio) y cómo estas se dividen (sub-dominios), puedes tomar decisiones significativas, como:
- Separación en diferentes organizaciones de Modyo independientes entre sí.
- Separación de múltiples sitios o aplicaciones Web, con usuarios y roles de administración diferenciados.
- Separación de espacios de contenidos, con usuarios y roles de administración diferenciados.
- Alcance de los widgets que serán desarrollados como [micro frontends](/es/architecture/patterns/micro-frontend), buscando siempre unificar.

El objetivo de lo anterior es agrupar los elementos que necesitan modificarse conjuntamente y separar aquellos que no tienen dependencia entre sí; creando contextos delimitados dentro de la implementación, dónde un usuario resuelve operaciones de negocio completas con un intercambio mínimo de contextos.

El DDD es una valiosa técnica de arquitectura para ayudar a definir la estructura de iniciativas complejas y resulta especialmente útil cuando se trabaja sobre la arquitectura de referencia de Modyo.