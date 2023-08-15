---
search: false
---

# Domain Driven Design

El Domain-Driven Design (DDD) es un enfoque para el desarrollo de software que pone un énfasis fuerte en la comprensión del dominio del negocio y en modelar el software según ese dominio. En DDD, los conceptos y estructuras del dominio del negocio se reflejan directamente en el diseño del software.

Ventajas del DDD:

- **Comunicación Mejorada:** DDD promueve el uso de un lenguaje común entre desarrolladores, stakeholders y usuarios, llamado "lenguaje ubiquito". Esto puede mejorar la comunicación y la comprensión entre todos los involucrados en un proyecto.
- **Enfoque en el Dominio del Negocio:** Al centrarse en el dominio del negocio, DDD ayuda a asegurar que el software se alinee estrechamente con las necesidades y los procesos del negocio.
- **Diseño de Software de Alta Calidad:** DDD promueve principios de diseño de software sólidos, lo que puede conducir a software más mantenible y adaptable.

Desventajas del DDD:

- **Complejidad:** DDD puede ser complejo y puede requerir un tiempo y un esfuerzo considerables para implementar correctamente. Puede no ser adecuado para aplicaciones más simples o para equipos con menos experiencia en diseño de software.
- **Requiere Conocimiento del Dominio:** Para usar DDD efectivamente, los desarrolladores necesitan tener o adquirir un buen entendimiento del dominio del negocio, lo cual puede ser un desafío en algunos contextos.
- **No es Adecuado para Todas las Aplicaciones:** DDD es más útil en aplicaciones de negocio complejas. En aplicaciones con lógica de negocio simple, la sobrecarga de DDD puede no justificar los beneficios.

En general, DDD puede ser una herramienta valiosa para desarrollar software de alta calidad que se alinea estrechamente con las necesidades de un negocio, pero es importante considerar cuidadosamente si es el enfoque adecuado para tu situación particular.

### DDD aplicado a los Micro Frontend y Microservicios

Domain-Driven Design (DDD) se puede aplicar tanto a los micro frontends como a los microservicios para mantener el enfoque en el dominio del negocio y asegurar que los sistemas desarrollados estén alineados con las necesidades y los procesos del negocio.

#### Micro Frontends
En el contexto de los micro frontends, puedes aplicar DDD al diseñar cada micro frontend para reflejar un subdominio específico del dominio del negocio. Por ejemplo, si estás construyendo un sitio web de comercio electrónico, podrías tener un micro frontend para el carrito de compras, otro para la lista de productos, y otro para el proceso de pago. Cada uno de estos micro frontends se encargaría de un aspecto específico del dominio del negocio y se desarrollaría de acuerdo con las necesidades y reglas de ese subdominio.

#### Microservicios
Con los microservicios, DDD se aplica de manera similar. Cada microservicio debería representar un "bounded context" ( contexto acotado), que es un término de DDD que se refiere a un límite dentro del cual un modelo de dominio particular es consistente. Dentro de este contexto acotado, los modelos y el lenguaje deben ser coherentes. Cada microservicio debe tener su propio modelo de dominio y debe interactuar con otros microservicios a través de interfaces bien definidas.


La aplicación de DDD en ambos contextos implica dividir el sistema en componentes más pequeños (ya sean micro frontends o microservicios) que se centran en un aspecto específico del dominio del negocio, y diseñar cada componente de acuerdo con las necesidades y reglas de ese dominio. Esto puede ayudar a crear sistemas más coherentes, escalables y mantenibles.

### ¿Cómo se implementa el DDD con Modyo?
Existen diversas formas de implementar DDD con Modyo, pero la más común nace del entendimiento del negocio sobre el cuál se desea implementar la solución. Una vez que se identifican las diferentes áreas de negocio (dominio) y cómo éstas se dividen (sub-dominios) se podrán tomar decisiones relevantes cómo por ejemplo:
- Separación en diferentes organizaciones de Modyo independientes entre sí
- Separación de múltiples sitios o aplicaciones Web, con usuarios y roles de administración diferenciados
- Separación de espacios de contenidos, con usuarios y roles de administracións diferenciados
- Alcance de los Widgets que serán desarrollados como [micro frontends](/es/architecture/patterns/micro-frontend), buscando siempre unificar 

Aplicando los criterios anteriores, lo que se busca es que las cosas que se modifiquen juntas, se estructuren juntas, mientras que las cosas que no dependen una de otra, se implementen por separado. De esta forma se crean contextos delimitados dentro de la implementación, dónde un usuario resuelve operaciones de negocio completas con el mínimo intercambio de contextos posible.

El DDD es una gran técnica de arquitectura para ayudar a la definición de la estructura de iniciativas complejas, y resulta especialmente útil cuando se trabaja sobre la arquitectura de referencia de Modyo.
