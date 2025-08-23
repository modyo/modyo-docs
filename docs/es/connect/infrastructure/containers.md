---
search: true
---

# Contenedores

Los contenedores son el ambiente de ejecución para los microservicios. A diferencia de las máquinas virtuales, se recomienda que los contenedores ejecuten un solo proceso a la vez, lanzado desde una imagen generada mediante un archivo [Dockerfile](https://docs.docker.com/engine/reference/builder).

Modyo Connect utiliza el servicio de contenedores [serverless](https://aws.amazon.com) de [AWS ECS Fargate](https://aws.amazon.com/fargate) para ejecutar contenedores en la nube. Con ECS Fargate, no es necesario configurar servidores de la plataforma, ya que son gestionados por AWS.

## Lenguaje y Framework de Programación

En Modyo Connect, los microservicios se desarrollan usando [Spring Boot](https://spring.io/projects/spring-boot) con Java, debido a la simplicidad de este framework para proyectos de integración orientados a despliegues en microservicios. Spring Boot no requiere servidores de aplicaciones tradicionales, ya que define su propio runtime de ejecución. Además, las aplicaciones desarrolladas con Spring Boot escalan horizontalmente, permitiendo incrementar dinámicamente el número de contenedores según sea requerido.

Dentro del contenedor, se trabaja con el runtime de [OpenJDK 11 (J9)](https://www.eclipse.org/openj9), que ofrece características únicas de eficiencia y compatibilidad.

## Imagen de Contenedor

Las imágenes de los contenedores se generan en un proceso de integración continua, siguiendo las definiciones provistas por el usuario. Una vez generadas, se almacenan de forma segura en el [AWS Elastic Container Registry (ECR)](https://aws.amazon.com/ecr), que se integra directamente con el servicio de AWS ECS.

A continuación se muestra un ejemplo de definición de contenedor que asigna el 75% de la memoria RAM disponible a la JVM de Java utilizada por el microservicio.

``` Dockerfile
FROM adoptopenjdk/openjdk11-openj9:jdk-11.0.10_9_openj9-0.24.0
WORKDIR /usr/app
COPY build/libs/<microservice-name>.jar .
CMD java -XX:MaxRAMPercentage=75.0 -XX:MinRAMPercentage=75.0 -XX:InitialRAMPercentage=75.0 -jar -Dhttps.protocols=TLSv1.2 <microservice-name>.jar
```

## Tamaño de las Instancias

AWS ECS Fargate ofrece una [amplia variedad de configuraciones](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html), desde fracciones de vCPUs hasta 16 vCPUs dedicadas por contenedor. Según el número de vCPUs elegido, se activan rangos de memoria RAM dedicados (1 GB a 32 GB). El consumo de [MRUs](../resources/mrus.html) varía según el tamaño del nodo.

| CPU        |   Memory      |
| ------------- |:-----:|
|1 vCPU|2 GB ~ 8 GB (1 GB increments)|
|2 vCPU|4 GB ~ 16 GB (1 GB increments)|
|4 vCPU|8 GB ~ 30 GB (1 GB increments)|
|8 vCPU|16 GB ~ 60 GB (4 GB increments)|
|16 vCPU|32 GB ~ 120 GB (8 GB increments)|

Es importante considerar que en producción, las MRU utilizadas por el componente se multiplican por el factor de redundancia requerido por el cliente (mínimo 2 para multizona). Los ambientes de preproducción se configuran sin redundancia y pueden tener menos recursos asociados.

:::warning Fracciones de vCPUs
AWS permite definir contenedores con fracciones de vCPUs (ej. 0.25 vCPU o 0.75 vCPU). Sin embargo, las aplicaciones que se ejecutan con una Java Virtual Machine (JVM), al ser un ambiente de ejecución multihilo, no se benefician de despliegues con fracciones de vCPU, ya que esto genera bloqueos de I/O que afectan considerablemente su rendimiento. Por ello, el mínimo aceptado para Modyo Connect es 1 vCPU y el máximo es 16 vCPU.
:::

## Pool de Conexiones

En muchos casos, se requiere una [base de datos](databases.html) conectada a los microservicios. Se debe asegurar que el tamaño de la base de datos sea suficiente para el número de instancias de contenedor consideradas (incluyendo el rango de autoescalabilidad). Las conexiones concurrentes a la base de datos estarán determinadas por el tamaño del [pool de conexiones](https://www.baeldung.com/java-connection-pooling) definido en cada microservicio.

## Pasos de Activación

Para solicitar la creación de un contenedor en AWS, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com) indicando:
- Nombre y ubicación del repositorio de código.
- Rama desde la cual se debe realizar el despliegue automático de cada ambiente.
- Variables de entorno a inyectar por cada ambiente.

Cada contenedor debe estar asociado a un [repositorio único de código](../development/code-repository.html). Una misma rama no puede apuntar a más de un ambiente (productivo o pre-productivo).

:::tip Aprender más
Para más información, favor referirse a la guía de desarrollo de [microservicios](/es/architecture/patterns/microservice.html).
:::