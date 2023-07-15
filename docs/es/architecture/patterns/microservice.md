---
search: true
---

# Microservicio

Los microservicios son un enfoque arquitectónico y organizativo para el desarrollo de software donde el software está
compuesto por pequeños servicios independientes que se comunican a través de API bien definidas. Los propietarios de
estos servicios son equipos pequeños independientes.

Las arquitecturas de microservicios hacen que las aplicaciones sean más fáciles de escalar y más rápidas de desarrollar.
Esto permite la innovación y acelera el tiempo de comercialización de las nuevas características.

:::tip Microservicios en AWS
Las definiciones de esta guía se adaptaron desde la Web de [Amazon AWS](https://aws.amazon.com). Para más información
sobre como AWS puede apoyar en la implementación de una iniciativa de microservicios, recomendamos visitar
su [documentación oficial](https://aws.amazon.com/microservices).
:::

### Monolitos vs Microservicios

Con las arquitecturas monolíticas, todos los procesos están estrechamente asociados y se ejecutan como un solo servicio.
Esto significa que, si un proceso de una aplicación experimenta un incremento de demanda, se debe escalar toda la
arquitectura. Agregar o mejorar las características de una aplicación monolítica se vuelve más complejo a medida que
crece la base de código. Esta complejidad limita la experimentación y dificulta la implementación de nuevas ideas. Las
arquitecturas monolíticas aumentan el riesgo de la disponibilidad de la aplicación porque muchos procesos dependientes y
estrechamente vinculados aumentan el impacto del error de un proceso.

Con una arquitectura de microservicios, una aplicación se crea con componentes independientes que ejecutan cada proceso
de la aplicación como un servicio. Estos servicios se comunican a través de una interfaz bien definida mediante API
ligeras. Los servicios se crean para las capacidades empresariales y cada servicio desempeña una sola función. Debido a
que se ejecutan de forma independiente, cada servicio se puede actualizar, implementar, y escalar para satisfacer la
demanda de funciones específicas de una aplicación.

## Características

### Autónomos

Cada servicio componente en una arquitectura de microservicios se puede desarrollar, implementar, operar, y escalar sin
afectar el funcionamiento de otros servicios. Los servicios no necesitan compartir ninguno de sus códigos o
implementaciones con otros servicios. Cualquier comunicación entre componentes individuales ocurre a través de API bien
definidas.

### Especializados

Cada servicio está diseñado para un conjunto de capacidades y se enfoca en resolver un problema específico. Si los
desarrolladores aportan más código a un servicio a lo largo del tiempo y el servicio se vuelve más complejo, se puede
dividir en servicios más pequeños.

## Beneficios

### Agilidad

Los microservicios fomentan una organización de equipos pequeños e independientes que se apropian de los servicios. Los
equipos actúan en un contexto pequeño, bien comprendido, y están facultados para trabajar de forma más independiente y
más rápida. Esto acorta los tiempos del ciclo de desarrollo. Usted se beneficia significativamente del aumento de
rendimiento de la organización.

### Escalado flexible

Los microservicios permiten que cada servicio se escale de forma independiente para satisfacer la demanda de la
característica de la aplicación que respalda. Esto permite a los equipos adecuarse a las necesidades de la
infraestructura, medir con precisión el costo de una característica, y mantener la disponibilidad si un servicio
experimenta un aumento en la demanda.

### Implementación sencilla

Los microservicios permiten la integración y entrega continua, lo que facilita probar nuevas ideas y revertirlas si algo
no funciona. El bajo costo de los errores permite experimentar, facilita la actualización del código, y acelera el
tiempo de comercialización de las nuevas características.

### Libertad tecnológica

Las arquitecturas de microservicios no siguen un enfoque de "diseño único". Los equipos tienen la libertad de elegir la
mejor herramienta para resolver sus problemas específicos. Como consecuencia, los equipos que crean microservicios
pueden elegir la mejor herramienta para cada trabajo.

### Código reutilizable

La división del software en módulos pequeños y bien definidos les permite a los equipos usar funciones para diferentes
propósitos. Un servicio escrito para una determinada función se puede usar como un componente básico para otra
característica. Esto permite que una aplicación arranque por sí sola, ya que los desarrolladores pueden crear nuevas
capacidades sin tener que escribir código desde cero.

### Resistencia

La independencia del servicio aumenta la resistencia de una aplicación a los errores. En una arquitectura monolítica, un
error en un solo componente, puede provocar un error en toda la aplicación. Con los microservicios, si hay un error en
todo el servicio, las aplicaciones lo manejan degradando la funcionalidad sin bloquear toda la aplicación.

## Desarrollo

Modyo Connect permite el desarrollo y despliegue de microservicios en la nube sobre su plataforma
de [contenedores](../components/infrastructure.md#contenedores). Para ello, se debe contar con
un [repositorio de código](../components/development.md#repositorio-de-codigo) y sus procesos
de [integración continua](../components/development.md#integracion-continua) activos.

Los microservicios desarrollados en Modyo Connect tienen la capacidad de escalar horizontalmente incrementando
automáticamente el número de instancias cuando es requerido y reemplazando aquellas que presenten algún tipo de
problema. Además, los microservicios se pueden desplegar sobre múltiples regiones y zonas de disponibilidad para
garantizar su resiliencia ante fallas de infraestructura.

### Consideraciones generales

A continuación presentamos algunas consideraciones que deben tenerse en cuenta a la hora de desarrollar microservicios
sobre Modyo Connect.

- **Spring Boot:** Framework utilizado para el desarrollo
- **Modyo Commons Library:** Librería de apoyo para tareas comunes como la gestión de errores, registros de logs,
  autenticación, etc.
- **Swagger:** Estándar para la definición y publicación de APIs en el API Gateway
- **Estructura y estilo de código:** Se recomienda el uso del inicializador de [Spring Boot](https://start.spring.io)
  o [Yeoman](https://yeoman.io/generators) para dar una estándar al código fuente. Se recomienda además, seguir el
  estilo de código recomendado por [Google](https://google.github.io/styleguide/javaguide.html).

### Uso de bases de datos

Los microservicios que requieran de persistencia relacional de datos deberán tener las siguientes consideraciones:

- **Bloqueos:** Evitar consultas que en situaciones de alta concurrencia
  generen [bloqueos](https://www.baeldung.com/jpa-pessimistic-locking) en las tablas.
- **Eficiencia:** Poner atención especial en traer sólo la información requerida de la base de datos. En otros casos,
  será mejor efectuar [lazy loading](https://www.baeldung.com/hibernate-lazy-eager-loading) para evitar volver a
  consultar la base de datos por cada iteración dentro de un bucle.
- **Índices:** Asegurar que los índices aplicados al esquema sean efectivos. Usar el
  comando [“explain”](https://dev.mysql.com/doc/refman/8.0/en/using-explain.html) de forma local para verificar su uso.
- **Migraciones y versionamiento:** Asegurar el [versionamiento y la automatización](https://flywaydb.org) de tareas que
  operan sobre el esquema de datos.
- **Pool de conexiones:** Asegurar una configuración correcta
  del [pool de conexiones](https://www.baeldung.com/java-connection-pooling). Asegurar también el correcto
  dimensionamiento del motor de base de datos, según la concurrencia, y escalabilidad esperada.

### Conexión con servicios externos

Los microservicios desarrollados en Modyo Connect pueden integrarse a otros sistemas, como APIs y Web Services externos.
En estos casos se deberán tener presentes las siguientes consideraciones:

- **Conectividad:** Asegurar que la conectividad desde las redes de AWS hacia los endpoints del servicio estén definidos
  y sean estables.
- **Seguridad:** Asegurar que el enlace a los servicios externos se establezca mediante un canal seguro, mediante VPNs
  o [mTLS](https://www.cloudflare.com/learning/access-management/what-is-mutual-tls/).
- **Manejo de errores:** Los errores originados en servicios externos deben ser correctamente manejados a nivel del
  microservicio para asegurar una buena experiencia de los usuarios.
- **Timeouts y bloqueos:** Servicios externos con problemas de rendimiento o conectividad pueden ocasionar bloqueos en
  la experiencia de usuario o un consumo excesivo de recursos dentro del microservicio. Se recomienda siempre definir
  timeouts razonables en cada llamada.

### Otras consideraciones

- **Tareas pesadas:** Se recomienda también usar procesamiento en segundo plano,
  vía [colas de mensajería](../components/infrastructure.md#colas-de-mensajeria), para servicios que sean lentos o muy
  sensibles a las fluctuaciones de tráfico.
- **Programación de tareas:** Se recomienda el uso de [Quartz](https://www.baeldung.com/spring-quartz-schedule) en los
  microservicios que requieran agendamiento de tareas programadas.
- **Workflows y máquina de estado:** Se recomienda el uso
  de [máquinas de estados](https://www.baeldung.com/spring-state-machine) para la orquestación de procesos complejos.
  Tecnologías de workflows también pueden ser integradas a Spring Boot para este propósito.
- **API de Modyo:** Recomendamos usar el API administrativa de la plataforma Modyo para tareas comunes, como el envío de
  mensajes a usuarios o la integración al contenido administrado.



