---
search: true
---

# Métricas Aplicativas

El monitoreo de métricas aplicativas es un tipo de monitoreo "caja blanca" que instrumenta agentes para reportar el comportamiento de los elementos internos de cada aplicación. Detecta tiempos de respuesta de servicios (ej. APIs, bases de datos, sistemas de caché), proporcionando una vista de 360° del estado de la aplicación.

Modyo Connect implementa su servicio de monitoreo de métricas aplicativas con [NewRelic APM](https://www.newrelic.com). El APM de NewRelic captura métricas de rendimiento en tiempo real y las centraliza en dashboards accesibles desde la web, destacando:

- Tiempos de respuesta promedio y percentiles
- Tasa de error
- [Apdex](https://en.wikipedia.org/wiki/Apdex)
- Estado de servicios o APIs externos
- Trazas lentas dentro de la aplicación


## Pasos de Activación

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