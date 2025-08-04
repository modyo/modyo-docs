---
search: false
---

# Domain-Driven Design (DDD)

Domain-Driven Design (DDD) es una metodología de desarrollo de software que enfatiza la comprensión del dominio del negocio y modela el software directamente a partir de él. Los conceptos y estructuras del dominio empresarial se reflejan en el diseño del software.

Ventajas del DDD:

- **Comunicación mejorada**: Fomenta un lenguaje ubicuo entre desarrolladores, stakeholders y usuarios, mejorando la comunicación y comprensión del proyecto.
- **Enfoque en el dominio del negocio**: Asegura que el software se alinee con las necesidades y procesos del negocio.
- **Diseño de software de alta calidad**: Promueve los principios SOLID, resultando en un software más mantenible y adaptable.

Desventajas del DDD:

- **Complejidad**: Su implementación puede ser compleja y demandar tiempo y esfuerzo considerables, lo que lo hace menos adecuado para aplicaciones simples o equipos con poca experiencia en diseño de software.
- **Conocimiento del dominio**: Requiere que los desarrolladores adquieran un profundo conocimiento del dominio del negocio, lo cual puede ser un desafío.
- **Aplicabilidad limitada**: Es más útil en aplicaciones empresariales complejas. Para lógicas de negocio simples, la sobrecarga de DDD podría no justificar sus beneficios.

DDD es una herramienta valiosa para desarrollar software de alta calidad alineado con las necesidades del negocio. Sin embargo, es crucial evaluar si es el enfoque adecuado para cada situación específica.

### DDD aplicado a los micro frontend y microservicios

DDD puede aplicarse tanto a micro frontends como a microservicios para mantener el enfoque en el dominio del negocio y asegurar la alineación de los sistemas con las necesidades y procesos empresariales.

#### Micro frontends
En micro frontends, DDD se aplica diseñando cada micro frontend para reflejar un subdominio específico del negocio. Por ejemplo, en un sitio de comercio electrónico, se podría tener un micro frontend para el carrito de compras, otro para la lista de productos y uno más para el proceso de pago. Cada micro frontend se encargaría de un aspecto específico del dominio y se desarrollaría según sus necesidades y reglas.

#### Microservicios
En microservicios, la aplicación de DDD es similar. Cada microservicio debe representar un _bounded context_ (contexto acotado), un límite donde un modelo de dominio particular es consistente. Dentro de este contexto, los modelos y el lenguaje deben ser coherentes. Cada microservicio debe tener su propio modelo de dominio e interactuar con otros microservicios a través de interfaces bien definidas.

En ambos casos, aplicar DDD implica dividir el sistema en componentes más pequeños (micro frontends o microservicios). Cada componente se enfoca en un aspecto particular del dominio empresarial y se diseña considerando sus necesidades y reglas específicas, contribuyendo a sistemas más coherentes, escalables y fáciles de mantener.


### Implementación de DDD con Modyo
La implementación de DDD con Modyo comienza con la comprensión del negocio y la identificación de sus dominios y subdominios. Esto permite tomar decisiones significativas, como:
- Separación en organizaciones Modyo independientes.
- Separación de sitios o aplicaciones web, con usuarios y roles de administración diferenciados.
- Separación de espacios de contenido, con usuarios y roles de administración diferenciados.
- Definición del alcance de los widgets a desarrollar como [micro frontends](/es/architecture/patterns/micro-frontend), buscando la unificación.

El objetivo es agrupar elementos con dependencias mutuas y separar aquellos sin ellas, creando contextos delimitados donde el usuario resuelve operaciones de negocio completas con un intercambio mínimo de contextos.

DDD es una valiosa técnica arquitectónica para definir la estructura de iniciativas complejas, siendo especialmente útil al trabajar con la arquitectura de referencia de Modyo.