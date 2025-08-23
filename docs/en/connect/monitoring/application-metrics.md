---
search: true
---

# Application Metrics

Application metrics monitoring is a type of "white box" monitoring that instruments agents to report the behavior of internal elements of each application. It detects response times of services (e.g., APIs, databases, caching systems), providing a 360° view of the application status.

Modyo Connect implements its application metrics monitoring service with [NewRelic APM](https://www.newrelic.com). NewRelic APM captures real-time performance metrics and centralizes them in web-accessible dashboards, highlighting:

- Average response times and percentiles

- Error rate

- [Apdex](https://en.wikipedia.org/wiki/Apdex)

- Status of external services or APIs

- Slow traces within the application


## Steps to Activate

To activate application monitoring with NewRelic in a microservice, ensure that the Java agent is installed and properly initialized as part of the service, as shown in the following example:


``` Dockerfile

FROM adoptopenjdk/openjdk11-openj9:jdk-11.0.10_9_openj9-0.24.0

WORKDIR /usr/app

COPY build/libs/<microservice-name>.jar .

CMD java -XX:MaxRAMPercentage=75.0 -XX:MinRAMPercentage=75.0 -XX:InitialRAMPercentage=75.0 -jar -Dhttps.protocols=TLSv1.2 -javaagent:./newrelic/newrelic.jar -Dnewrelic.environment=$STAGE_NAME <microservice-name>.jar

```

In the example above, the following parameters activate monitoring:


``` Java

-javaagent:./newrelic/newrelic.jar -Dnewrelic.environment=$STAGE_NAME 

```


The $STAGE_NAME variable is used to notify NewRelic the environment configuration to use (production, certification, staging, etc.).



:::tip NewRelic Token
The NewRelic API token, used to import metrics into the service, is automatically injected as part of the microservice environment variables.
:::


:::warning Basic and full users in NewRelic
Accesses granted by Modyo Connect are of the "basic" type and restricted exclusively to the dashboards defined for each service. Modyo does not provide "full" access to any user of the service.
:::