---
search: true
---


# Monitoreo

El monitoreo es crucial para asegurar la eficiencia y continuidad de las aplicaciones en la nube. Acceder a información fidedigna sobre el desempeño de los sistemas permite tomar mejores decisiones sobre los puntos críticos que requieren atención.

Modyo Connect incluye capacidades de monitoreo en tiempo real del estado de su infraestructura y aplicaciones, generando métricas agregadas en dashboards para determinar la salud general del servicio.

Modyo Connect es un servicio gestionado; la mayoría de las métricas son manejadas internamente por nuestros equipos de operaciones. Como parte del servicio, solo se escalan al cliente las alertas relacionadas con sus aplicaciones particulares (ej. problemas con servicios externos o errores internos de la aplicación).

## Métricas Aplicativas

El monitoreo de métricas aplicativas es un tipo de monitoreo "caja blanca" que instrumenta agentes para reportar el comportamiento de los elementos internos de cada aplicación. Detecta tiempos de respuesta de servicios (ej. APIs, bases de datos, sistemas de caché), proporcionando una vista de 360° del estado de la aplicación.

Modyo Connect implementa su servicio de monitoreo de métricas aplicativas con [NewRelic APM](https://www.newrelic.com). El APM de NewRelic captura métricas de rendimiento en tiempo real y las centraliza en dashboards accesibles desde la web, destacando:

- Tiempos de respuesta promedio y percentiles

- Tasa de error

- [Apdex](https://en.wikipedia.org/wiki/Apdex)

- Estado de servicios o APIs externos

- Trazas lentas dentro de la aplicación


### Pasos para activar

Para activar el monitoreo aplicativo con NewRelic en un microservicio, se debe asegurar que el agente Java esté instalado y correctamente inicializado como parte del servicio, como se muestra en el siguiente ejemplo:


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


La variable $STAGE_NAME se usa para notificar a NewRelic la configuración de ambiente a utilizar (production, certification, staging, etc.).



:::tip Token de NewRelic
El token de API de NewRelic, utilizado para importar las métricas al servicio, se inyecta automáticamente como parte de las variables de entorno del microservicio.
:::


:::warning Usuarios básicos y full en NewRelic
Los accesos otorgados por Modyo Connect son de tipo "basic" y restringidos exclusivamente a los dashboards definidos para cada servicio. Modyo no proporciona accesos de tipo "full" a ningún usuario del servicio.
:::


## Métricas de Infraestructura

El monitoreo de métricas de infraestructura comprende todos los detalles sobre las dependencias de nube configuradas para el servicio.


Modyo Connect implementa el monitoreo de infraestructura mediante [AWS CloudWatch](https://aws.amazon.com/cloudwatch).


### Pasos para activar

El monitoreo de AWS CloudWatch está activo por defecto en toda la infraestructura gestionada por Modyo Connect. Se accede a él mediante las cuentas del servicio.


:::tip Monitoreo con NewRelic
Las métricas más relevantes del monitoreo de infraestructura se envían a NewRelic mediante [AWS CloudWatch Metric Streams](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metric-Streams.html), para su centralización y cruce con las métricas aplicativas.
:::


## Registro de Logs

El registro de logs se refiere a la grabación secuencial en un archivo o base de datos de todos los eventos o acciones que afectan a un proceso particular, constituyendo una evidencia del comportamiento del sistema.


Modyo Connect implementa su registro de logs mediante [AWS CloudWatch Logs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html), lo que permite la centralización de registros y una vista unificada de todos los logs generados por los componentes de la infraestructura.


### Pasos para activar

Los registros de AWS CloudWatch Logs están activos por defecto en toda la infraestructura gestionada por Modyo Connect. Se accede a ellos mediante las cuentas del servicio.


:::warning Ofuscación de registros
Es responsabilidad del usuario que genera los logs ofuscar los parámetros y la información sensible incluida en los registros.
:::

