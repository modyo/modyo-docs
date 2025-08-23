---
search: true
---

# Microservicio

La arquitectura de microservicios es un enfoque de desarrollo de software que divide una aplicación en pequeños servicios independientes, gestionados por equipos autónomos e interactuando a través de APIs bien definidas.

Este enfoque permite aplicaciones más escalables y un desarrollo más rápido, promoviendo la innovación y reduciendo el tiempo de lanzamiento al mercado de nuevas funcionalidades.

:::tip Microservicios en AWS
Adaptamos las definiciones de esta guía de la Web de [Amazon AWS](https://aws.amazon.com).

Para más información sobre como AWS puede apoyar en la implementación de una iniciativa de microservicios, te recomendamos visitar su [documentación oficial](https://aws.amazon.com/microservices).
:::

### Monolitos vs. microservicios

En la arquitectura de software, los monolitos y los microservicios son dos enfoques principales, cada uno con características y beneficios distintivos.

#### Monolitos
En las arquitecturas monolíticas, todos los procesos están estrechamente asociados y se ejecutan como un único servicio. Esto implica que un aumento en la demanda de un proceso requiere escalar toda la arquitectura. A medida que la base de código crece, agregar o mejorar funcionalidades se vuelve más complejo, lo que limita la experimentación y dificulta la implementación de nuevas ideas.

Las arquitecturas monolíticas también aumentan el riesgo de disponibilidad de la aplicación y el impacto de errores, ya que la dependencia entre procesos significa que un fallo en un solo componente puede provocar un error en toda la aplicación.

#### Microservicios:
En una arquitectura de microservicios, una aplicación se construye con componentes independientes, cada uno ejecutando un proceso como un servicio separado. No es necesario compartir código ni implementaciones entre servicios; la comunicación se realiza a través de APIs ligeras y bien definidas.

Cada servicio se diseña para manejar capacidades empresariales específicas, centrándose en una única función o problema. Su independencia permite que cada servicio se actualice, implemente y escale de forma autónoma para satisfacer la demanda de funciones específicas. Si un servicio se vuelve demasiado complejo, puede dividirse en servicios más pequeños.

#### Beneficios de los microservicios

- **Agilidad**: Fomentan equipos pequeños e independientes que trabajan de forma más rápida y eficiente en contextos bien definidos, reduciendo los tiempos de desarrollo y aumentando el rendimiento organizacional.
- **Escalabilidad flexible**: Cada servicio puede escalarse de forma independiente para satisfacer la demanda de su funcionalidad específica. Esto permite a los equipos adaptarse a las necesidades de infraestructura, medir con precisión los costos y mantener la disponibilidad ante picos de demanda.
- **Implementación sencilla**: Facilitan la integración y entrega continua, permitiendo probar nuevas ideas y revertirlas rápidamente. El bajo costo de los errores fomenta la experimentación, agiliza la actualización del código y acelera el tiempo de comercialización de nuevas funcionalidades.
- **Libertad tecnológica**: Los equipos tienen la libertad de elegir la mejor herramienta para cada tarea o situación, sin un enfoque de "diseño único".
- **Código reutilizable**: La división del software en módulos pequeños y bien definidos permite reutilizar funciones para diferentes propósitos. Un servicio desarrollado para una función específica puede ser un componente básico para otra, facilitando la creación de nuevas capacidades sin escribir código desde cero.
- **Resiliencia**: La independencia del servicio aumenta la resistencia a fallos. Un error en un servicio permite degradar la funcionalidad de la aplicación sin afectar su totalidad.

### Implementación de microservicios con Modyo

[Modyo Connect](/es/connect) permite el desarrollo y despliegue de microservicios en la nube sobre su plataforma de [contenedores](/es/connect/components/infrastructure.md#contenedores). Para ello, se requiere un [repositorio de código](/es/connect/components/development.md#repositorio-de-codigo) y procesos de [integración continua](/es/connect/components/development.md#integracion-continua) activos.

Los microservicios desarrollados en Modyo Connect escalan horizontalmente, permitiendo el incremento automático de instancias según la demanda y el reemplazo de aquellas con problemas. Además, pueden desplegarse en múltiples regiones y zonas de disponibilidad para garantizar su resiliencia ante fallos de infraestructura.

#### Consideraciones generales

Algunas consideraciones importantes al desarrollar microservicios en Modyo Connect:

- **Spring Boot**: Framework recomendado para el desarrollo.
- **Modyo Commons Library**: Librería de apoyo para tareas comunes (gestión de errores, logs, autenticación, etc.).
- **OpenAPI**: Estándar para la definición y publicación de APIs en el API Gateway.
- **Estructura y estilo de código**: Se recomienda utilizar el inicializador de [Spring Boot](https://start.spring.io) o [Yeoman](https://yeoman.io/generators) para estandarizar el código fuente, y seguir el estilo de código recomendado por [Google](https://google.github.io/styleguide/javaguide.html).

#### Uso de bases de datos

Los microservicios con persistencia relacional de datos deben considerar las siguientes pautas:

- **Bloqueos**: Evitar consultas que generen [bloqueos](https://www.baeldung.com/jpa-pessimistic-locking) en las tablas de la base de datos durante alta demanda.
- **Eficiencia**: Recuperar solo la información necesaria de la base de datos. Considerar el uso de [lazy loading](https://www.baeldung.com/hibernate-lazy-eager-loading) para evitar consultas innecesarias en bucles.
- **Índices**: Asegurar la efectividad de los índices aplicados al esquema. Utilizar el comando ["explain"](https://dev.mysql.com/doc/refman/8.0/en/using-explain) localmente para verificar su uso.
- **Migraciones y versionamiento**: Garantizar el [versionamiento y la automatización](https://flywaydb.org) de tareas sobre el esquema de datos.
- **Pool de conexiones**: Configurar correctamente el [pool de conexiones](https://www.baeldung.com/java-connection-pooling) y dimensionar adecuadamente el motor de base de datos según la concurrencia y escalabilidad esperada.

#### Conexión con servicios externos

Los microservicios desarrollados en Modyo Connect pueden integrarse con sistemas externos (APIs y Web Services). Consideraciones clave:

- **Conectividad**: Asegurar que la conectividad desde las redes de AWS hacia los endpoints del servicio esté definida y sea estable.
- **Seguridad**: Establecer el enlace a servicios externos mediante un canal seguro (VPNs o [mTLS](https://www.cloudflare.com/learning/access-management/what-is-mutual-tls/)).
- **Manejo de errores**: Gestionar apropiadamente los errores originados en servicios externos a nivel del microservicio para asegurar una experiencia de usuario satisfactoria.
- **Timeouts y bloqueos**: Definir timeouts razonables en cada llamada, alineados con los del API Gateway, para evitar bloqueos o uso excesivo de recursos por servicios externos con problemas de rendimiento. Se sugiere utilizar invocaciones asíncronas cuando los tiempos de respuesta no sean predecibles.

#### Arquitectura Héxagonal
La arquitectura hexagonal, también conocida como Arquitectura Puertos y Adaptadores, es un patrón de arquitectura de software que se enfoca en la separación de responsabilidades y la independencia del hardware y software en una aplicación.

Organiza la aplicación con la lógica de negocio en el centro, y la interfaz de usuario y capas de infraestructura en la periferia.

Se compone de tres capas principales:

- **Capa de dominio**: Contiene la lógica de negocio central de la aplicación, independiente de la interfaz de usuario y la infraestructura.
- **Capa de adaptadores de infraestructura**: Contiene adaptadores que conectan la capa de dominio con la infraestructura, transformando datos entre formatos de dominio y formatos específicos de infraestructura (ej. bases de datos, servicios web).
- **Capa de infraestructura**: Contiene componentes específicos de infraestructura (bases de datos, servicios web, sistemas de archivos).

Beneficios de la arquitectura hexagonal:

- Separación de responsabilidades e independencia de hardware y software.
- Simplifica la integración de nuevos componentes de infraestructura.
- Facilita la prueba y depuración de la lógica de negocio.
- Mejora la modularidad y la reutilización del código.

Los microservicios de Dynamic Framework se desarrollan siguiendo los principios de la arquitectura hexagonal.


#### Otras consideraciones

- **Tareas pesadas**: Para servicios lentos o sensibles a fluctuaciones de tráfico, se recomienda el procesamiento en segundo plano mediante [colas de mensajes](/es/connect/components/infrastructure#colas-de-mensajeria).
- **Programación de tareas**: Para microservicios que requieran agendamiento de tareas programadas, se recomienda usar [ShedLock](https://www.baeldung.com/shedlock-spring).
- **Workflows y máquina de estado**: Se recomienda el uso de [máquinas de estados](https://www.baeldung.com/spring-state-machine) para la orquestación de procesos complejos, e integrar tecnologías de workflows con Spring Boot.
- **Arquitectura hexagonal**: Este patrón de diseño de software separa la lógica de negocio de una aplicación de sus servicios externos, facilitando un desarrollo, pruebas y mantenimiento más flexibles y centrados en el dominio.
- **API de Modyo**: Se recomienda usar la API administrativa de la plataforma Modyo para tareas comunes, como el envío de mensajes a usuarios o la integración con el contenido administrado.
