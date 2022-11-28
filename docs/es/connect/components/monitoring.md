---

search: true

---


# Monitoreo

El monitoreo es una de las actividades más importantes que se debe realizar para asegurar la eficiencia y continuidad de nuestras aplicaciones en la nube. Tener acceso a información fidedigna del desempeño de los sistemas permite tomar mejores decisiones acerca de los puntos críticos que requieren atención.


Modyo Connect incluye capacidades de monitoreo en tiempo real del estado de su infraestructura y aplicaciones, el cual genera métricas agregadas en dashboards que se utilizan para determinar la salud general del servicio.


Modyo Connect es un servicio manejado, por lo que la gran mayoría de estas métricas son gestionadas internamente por nuestros equipos de operaciones. Como parte del servicio, se escala hacia el cliente solo las alertas referidas a sus aplicaciones particulares, como por ejemplo problemas con servicios externos o errores dentro de la aplicación.


## Monitoreo Aplicativo

El monitoreo aplicativo es un tipo de monitoreo “caja blanca” en el cual se instrumentan agentes que reportan el comportamiento de los elementos internos de cada aplicación. El monitoreo aplicativo detecta tiempos de respuesta de servicios como APIs, bases de datos, sistemas de caché, entre otros, otorgando una vista de 360° del estado de la aplicación.


Modyo Connect implementa su servicio de monitoreo de métricas aplicativas con [NewRelic APM](https://www.newrelic.com). El APM de NewRelic captura métricas de rendimiento en tiempo real y las centraliza en dashboards que pueden ser accedidos desde la Web, dentro de las cuales podemos destacar:

- Tiempos de respuesta promedio y percentiles

- Tasa de error

- [Apdex](https://en.wikipedia.org/wiki/Apdex)

- Estado de servicios o APIs externos

- Trazas lentas dentro de la aplicación


### Pasos para activar

Para activar el monitoreo aplicativo con NewRelic dentro de un microservicio, se debe asegurar que el agente Java se encuentra instalado y apropiadamente inicializado como parte del servicio, como se muestra en el siguiente ejemplo:


``` Dockerfile

FROM adoptopenjdk/openjdk11-openj9:jdk-11.0.10_9_openj9-0.24.0

WORKDIR /usr/app

COPY build/libs/<microservice-name>.jar .

CMD java -XX:MaxRAMPercentage=75.0 -XX:MinRAMPercentage=75.0 -XX:InitialRAMPercentage=75.0 -jar -Dhttps.protocols=TLSv1.2 -javaagent:./newrelic/newrelic.jar -Dnewrelic.environment=$STAGE_NAME <microservice-name>.jar

```

En el ejemplo anterior, los siguientes parámetros son los que activan el monitoreo:


``` Java

-javaagent:./newrelic/newrelic.jar -Dnewrelic.environment=$STAGE_NAME 

```


La variable $STAGE_NAME se usa para notificar a NewRelic la configuración de ambiente que debe utilizar (production, certification, staging, etc.).



:::tip Token de NewRelic

El token de API de NewRelic, usado para importar las métricas al servicio, se inyecta automáticamente como parte de las variables de entorno de los microservicios. 

:::


:::warning Usuarios básicos y full en NewRelic

Los accesos otorgados por Modyo Connect son del tipo “basic” y restringidos exclusivamente a los dashboards definidos para cada servicio. Modyo no entrega accesos del tipo “full” a ningún usuario del servicio.

:::


## Monitoreo de Infraestructura

El monitoreo de infraestructura comprende todos los detalles acerca de las dependencias de nube configuradas para el servicio.


Modyo Connect implementa el monitoreo de infraestructura mediante el uso de [AWS CloudWatch](https://aws.amazon.com/cloudwatch). 


### Pasos para activar

El monitoreo de AWS CloudWatch se encuentra activo por defecto en toda la infraestructura gestionada por Modyo Connect. Se accede a él mediante las cuentas del servicio.


:::tip Observabilidad con NewRelic

Las métricas más relevantes del monitoreo de infraestructura se envían hacia NewRelic mediante el uso de [AWS CloudWatch Metric Streams](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metric-Streams.html), para su centralización y cruce con las métricas aplicativas.

:::


## Registro de logs

El registro o historial de logs se refiere a la grabación secuencial en un archivo o en una base de datos de todos los eventos o acciones que afectan a un proceso particular. De esta forma constituye una evidencia del comportamiento del sistema.


Modyo Connect implementa su registro de logs mediante el uso de [AWS CloudWatch Logs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html), el cual permite la centralización de registros y con ello obtener una vista unificada de todos los registros de logs generados por los componentes de la infraestructura.


### Pasos para activar

Los registros de AWS CloudWatch Logs se encuentran activos por defecto en toda la infraestructura gestionada por Modyo Connect. Se acceden a ellos mediante las cuentas del servicio.


:::warning Ofuscación de registros

Será responsabilidad del usuario que genera los logs ofuscar los parámetros y la información sensible que se incluye en los registros.

:::

