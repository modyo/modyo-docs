---
search: true
---

# Métricas de Infraestructura

El monitoreo de métricas de infraestructura comprende todos los detalles sobre las dependencias de nube configuradas para el servicio.


Modyo Connect implementa el monitoreo de infraestructura mediante [AWS CloudWatch](https://aws.amazon.com/cloudwatch).


## Pasos de Activación

El monitoreo de AWS CloudWatch está activo por defecto en toda la infraestructura gestionada por Modyo Connect. Se accede a él mediante las cuentas del servicio.


:::tip Monitoreo con NewRelic
Las métricas más relevantes del monitoreo de infraestructura se envían a NewRelic mediante [AWS CloudWatch Metric Streams](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metric-Streams.html), para su centralización y cruce con las métricas aplicativas.
:::