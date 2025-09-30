---
search: true
---

# Firewall Aplicativo (WAF)

Un Web Application Firewall (WAF) protege el servidor de aplicaciones web de múltiples ataques. Su función es garantizar la seguridad del servidor mediante el análisis de paquetes de petición HTTP/HTTPS y modelos de tráfico.

Modyo Connect permite la configuración del servicio [AWS WAF](https://aws.amazon.com/waf), que posee filtros para los ataques web más comunes (OWASP Top 10), como inyecciones SQL o scripts. Además, ofrece la capacidad de definir reglas personalizadas para autorizar o denegar el acceso a rutas por IP y límites de tasa (rate limits). 

## Registros de Logs
Los registros de logs de AWS WAF se gestionan mediante AWS CloudWatch Logs y pueden exportarse a sistemas externos utilizando repositorios de AWS S3.

## Pasos de Activación
El firewall de aplicaciones de AWS está activado por defecto. El cliente puede solicitar la inclusión de reglas específicas (ej. bloqueo de rutas a ciertos rangos de IPs o ajustes en el límite de tasa de conexiones entrantes) mediante un ticket en el [Centro de Soporte de Modyo](https://support.modyo.com).