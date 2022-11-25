---
search: true
---

# Monitoreo
Modyo Connect incluye una solución de monitoreo y obserbabilidad para todos los componentes des plegados sobre el servicio. El monitoreo se accede por medio de dashboards especialemnte configuados dentro 

## Métricas Aplicativas
AWS Cloudwatch. Servicio de monitoreo de nube de Amazon AWS. Cloudwatch entrega métricas de alto valor de cada uno de los servicios entregados por Amazon, incluyendo logs y la capacidad de definir alertas. 
NewRelic

## Métricas de Infraestructura
Las métricas de infraestructura permiten obtener los detalles.

Modyo Connect implementa un monitoreo de métricas de infraestructura mediante el servicio

## Centralización de Registros
La centralización de registros permite obtener una vista unificada de todos los registros de logs generados por los componentes de la infraestructura.

Modyo Connect implementa la centralización de registros mediante el uso de AWS CloudWatch Logs y NewRelic Logs. Los registros gestionados con AWS CloudWatch Logs son de uso intenro para los equipos de operación de infraestructura de Modyo. Los registros replicados hacia NewRelic Logs quedan accesibles a los usuarios del serivico.
