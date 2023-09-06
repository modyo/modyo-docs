---
search: true
---

# Microservicio

La arquitectura de microservicios es un enfoque para el desarrollo de software que implica dividir una aplicación en pequeños servicios independientes que interactúan a través de APIs definidas. Estos servicios son gestionados por equipos pequeños e independientes.

Este enfoque arquitectónico permite que las aplicaciones sean más escalables y que su desarrollo sea más rápido, promoviendo la innovación y reduciendo el tiempo necesario para lanzar nuevas funcionalidades al mercado.

:::tip Microservicios en AWS
Adaptamos las definiciones de esta guía de la Web de [Amazon AWS](https://aws.amazon.com).

Para más información sobre como AWS puede apoyar en la implementación de una iniciativa de microservicios, te recomendamos visitar su [documentación oficial](https://aws.amazon.com/microservices).
:::

### Monolitos vs. microservicios

En la arquitectura de software, se enfrentan dos enfoques principales: los monolitos y los microservicios. Cada uno tiene sus propias características y beneficios.

#### Monolitos
En las arquitecturas monolíticas, todos los procesos están estrechamente asociados y se ejecutan como un solo servicio. Esto significa que si un proceso de la aplicación experimenta un aumento en la demanda, se debe escalar toda la arquitectura. Además, a medida que crece la base de código, agregar o mejorar las características de una aplicación monolítica se vuelve más complejo. Esta complejidad limita la experimentación y dificulta la implementación de nuevas ideas.

Las arquitecturas monolíticas también aumentan el riesgo de disponibilidad de la aplicación y  aumentan el impacto del error de un proceso debido a la dependencia entre procesos. Debido a que un error en un solo componente, puede provocar un error en toda la aplicación.

#### Microservicios:
En una arquitectura de microservicios, una aplicación se construye utilizando componentes independientes, cada uno de los cuales ejecuta un proceso de la aplicación como un servicio separado. No es necesario compartir código ni implementaciones entre los servicios, y la comunicación ocurre a través de API ligeras, bien definidas.

Cada servicio se crea para manejar capacidades empresariales específicas y se centra en una única función o en resolver un problema específico.  Debido a su independencia, cada servicio se puede actualizar, implementar y escalar de manera independiente para satisfacer la demanda de funciones específicas de la aplicación. Si los desarrolladores aportan más código a un servicio y el servicio se vuelve más complejo, se puede dividir en servicios más pequeños.

#### Beneficios de los microservicios

- **Agilidad:** Fomentan equipos pequeños e independientes que pueden trabajar de manera más rápida y eficiente en contextos bien comprendidos. Esto reduce los tiempos de desarrollo y aumenta el rendimiento de la organización.
- **Escalabilidad flexible:** Permiten que cada servicio se escale de forma independiente para satisfacer la demanda de la característica de la aplicación que respalda. Esto permite a los equipos adaptarse a las necesidades de la infraestructura, medir con precisión el costo de una característica y mantener disponibilidad si un servicio experimenta un aumento en la demanda.
- **Implementación sencilla:** Los microservicios permiten la integración y entrega continua, lo que facilita probar nuevas ideas y revertirlas si algo no funciona. El bajo costo de los errores permite experimentar, facilita la actualización del código y acelera el tiempo de comercialización de las nuevas características.
- **Libertad tecnológica:** No siguen un enfoque de "diseño único". Los equipos tienen la libertad de elegir la mejor herramienta para resolver cada tarea o situación.
- **Código reutilizable:** La división del software en módulos pequeños y bien definidos permite a los equipos usar funciones para diferentes propósitos. Un servicio desarrollado para una función específica puede ser utilizado como componente básico para otra característica. Esto facilita el inicio de una aplicación, ya que los desarrolladores pueden crear nuevas capacidades sin tener que escribir código desde cero.
- **Resiliencia:** La independencia del servicio aumenta la resistencia a los errores. En caso de existir un error en un servicio, las aplicaciones pueden degradar la funcionalidad sin afectar toda la aplicación.

### Implementación de microservicios con Modyo

[Modyo Connect](/es/connect) permite el desarrollo y despliegue de microservicios en la nube sobre su plataforma de [contenedores](/es/connect/components/infrastructure.md#contenedores). Para ello, debes tener un [repositorio de código](/es/connect/components/development.md#repositorio-de-codigo) y los procesos de [integración continua](/es/connect/components/development.md#integracion-continua) activos.

Los microservicios desarrollados en Modyo Connect tienen la capacidad de escalar horizontalmente, lo que significa que automáticamente puedes incrementar el número de instancias cuando se requiera y reemplazar aquellas que presenten algún tipo de problema. Además, puedes desplegar los microservicios en múltiples regiones y zonas de disponibilidad para garantizar su resiliencia ante fallas de infraestructura.

#### Consideraciones generales

Algunas consideraciones importantes al desarrollar microservicios en Modyo Connect son:

- **Spring Boot:** Framework utilizado para el desarrollo
- **Modyo Commons Library:** Librería de apoyo para tareas comunes como la gestión de errores, registros de logs,
  autenticación, etc.
- **OpenAPI:** Estándar para la definición y publicación de APIs en el API Gateway
- **Estructura y estilo de código:** Recomendamos utilizar el inicializador de [Spring Boot](https://start.spring.io)
  o [Yeoman](https://yeoman.io/generators) para dar una estándar al código fuente. Recomendamos además, seguir el
  estilo de código recomendado por [Google](https://google.github.io/styleguide/javaguide.html).

#### Uso de bases de datos

Los microservicios que requieren de persistencia relacional de datos deben considerar las siguientes pautas:

- **Bloqueos:** Evitar consultas que puedan generar [bloqueos](https://www.baeldung.com/jpa-pessimistic-locking) en las tablas de la base de datos durante momentos de alta demanda.
- **Eficiencia:** Traer únicamente la información requerida de la base de datos. En ocasiones puede ser beneficiosos utilizar [lazy loading](https://www.baeldung.com/hibernate-lazy-eager-loading) para evitar consultas innecesarias a la base de datos en cada iteración dentro de un bucle.
- **Índices:** Asegurar que los índices aplicados al esquema sean efectivos. Usar el comando [“explain”](https://dev.mysql.com/doc/refman/8.0/en/using-explain.html) de forma local para verificar su uso.
- **Migraciones y versionamiento:** Asegurar el [versionamiento y la automatización](https://flywaydb.org) de tareas que operan sobre el esquema de datos.
- **Pool de conexiones:** Asegurar una configuración correcta del [pool de conexiones](https://www.baeldung.com/java-connection-pooling)y dimensionar adecuadamente el motor de base de datos, según la concurrencia y escalabilidad esperada.

#### Conexión con servicios externos

Los microservicios desarrollados en Modyo Connect pueden integrarse a otros sistemas, como APIs y Web Services externos. Para ello debes tener presente las siguientes consideraciones:

- **Conectividad:** Asegurar que la conectividad desde las redes de AWS hacia los endpoints del servicio estén definidos y sean estables.
- **Seguridad:** Asegurar que el enlace a los servicios externos se establezca mediante un canal seguro, mediante VPNs o [mTLS](https://www.cloudflare.com/learning/access-management/what-is-mutual-tls/).
- **Manejo de errores:** Los errores originados en servicios externos deben ser gestionados de manera apropiada a nivel del microservicio para asegurar una experiencia de usuario satisfactoria.
- **Timeouts y bloqueos:** Los servicios externos con problemas de rendimiento o conectividad pueden causar bloqueos en la experiencia del usuario o un uso excesivo de recursos dentro del microservicio. Recomendamos definir timeouts razonables en cada llamada, alineados con los definidos en el API Gateway. Además, te sugerimos utilizar invocaciones asíncronas cuando los tiempos de respuesta no sean predecibles.

#### Arquitectura Héxagonal
La arquitectura hexagonal, también conocida como Arquitectura Puertos y Adaptadores, es un patrón de arquitectura de software que se enfoca en la separación de las preocupaciones (System on a Chip o SoC) y en la independencia del hardware y del software en una aplicación.

Esta arquitectura organiza la aplicación de manera que el núcleo de la lógica de negocio se encuentra en el centro y la interfaz de usuario y capas de infraestructura en la periferia.

La arquitectura hexagonal se compone de tres capas principales:

- **Capa de dominio:** Contiene la lógica de negocio de la aplicación y representa el núcleo de la arquitectura. Esta capa es independiente de la interfaz de usuario y de la capa de infraestructura.
- **Capa de adaptadores de infraestructura:** Contiene los adaptadores que conectan la capa de dominio con las capas de infraestructura. Los adaptadores se encargan de transformar los datos entre los formatos de la capa de dominio y los formatos específicos de la infraestructura; por ejemplo, bases de datos y servicios web.
- **Capa de infraestructura:** Contiene los componentes específicos de la infraestructura que se utilizan en la aplicación, como bases de datos, servicios web y sistemas de archivos.

La arquitectura hexagonal tiene varios beneficios, entre ellos:

- Permite la separación de las preocupaciones y la independencia del hardware y del software en una aplicación.
- Simplifica la integración de nuevos componentes de infraestructura.
- Facilita la prueba y la depuración de la lógica de negocio de la aplicación.
- Mejora la modularidad y la capacidad de reutilización del código.

Los microservicios de Dynamic Framework se desarrollan siguiendo los principios de la arquitectura hexagonal.


#### Otras consideraciones

- **Tareas pesadas:** Recomendamos usar procesamiento en segundo plano, mediante [colas de mensajería](../components/infrastructure.md#colas-de-mensajeria), para servicios lentos o sensibles a las fluctuaciones de tráfico.
- **Programación de tareas:** Para servicios que requieren programación de tareas, recomendamos usar [ShedLock](https://www.baeldung.com/shedlock-spring) en los microservicios que requieran agendamiento de tareas programadas.
- **Workflows y máquina de estado:** Se recomienda el uso de [máquinas de estados](https://www.baeldung.com/spring-state-machine) para la orquestación de procesos complejos. Así como integrar tecnologías de workflows con Spring Boot.
- **Arquitectura hexagonal:** Para desarrollo, pruebas y mantenimiento más flexibles y centrados en el dominio de la aplicación, este patrón de diseño de software separa la lógica de negocio de una aplicación de sus servicios externos.
- **API de Modyo:** Recomendamos usar el API administrativa de la plataforma Modyo para tareas comunes, como el envío de mensajes a usuarios o la integración con el contenido administrado.
