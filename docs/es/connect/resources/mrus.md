---
search: true
---

# Modyo Resource Units (MRUs)

El Modyo Resource Unit (MRU) es una abstracción para asignar recursos computacionales y consumos de licencias a los elementos configurados como parte del servicio. Los MRU se suman considerando el total de los ambientes y se cobran de forma mensual al cliente. Modyo establece el número de MRUs asignados a cada recurso según un análisis de costo que incluye los costos de AWS, impuestos, costos de hora hombre de gestión, entre otros.

Todos los contenedores incluyen un repositorio, automatización, almacenamiento de imágenes en AWS ECR, monitoreo y consolidación de logs. Además, se incluye monitoreo, centralización de logs, API Gateway, Firewall, dominios personalizados, emisión de certificados TLS.

Los Widgets que se desarrollan en Modyo por medio del Widget Builder (sin CLI) no consumen MRUs.

Los servicios de SSO con RedHat KeyCloak se despliegan sobre contenedores como cualquier otro Microservicio. Al costo de MRU señalado se deberán sumar los de los contenedores usados. El tamaño del contenedor de despliegue de este componente dependerá de las necesidades del cliente.

Los servicios complementarios que procesan datos, como Redis y Aurora, deberán estar configurados para producción y preproducción. En el caso de producción, estos se configuran en alta disponibilidad.


## Estimación de Costos
- Recomendaciones sobre cómo calcular el tamaño de una implementación de Modyo Connect
- Consideraciones a tener en cuenta, por tamaño de iniciativa o volumetría en tráfico
- Consideración de ambientes
- Adjuntar formato de planilla de estimación descargable

:::tip Costos del servicio
Para estimar los costos actualizados del uso del servicio y los diferentes componentes, favor contactar un ejecutivo comercial de Modyo.
:::