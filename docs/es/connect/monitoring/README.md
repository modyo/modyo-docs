---
search: true
---

# Monitoreo

El monitoreo es crucial para asegurar la eficiencia y continuidad de las aplicaciones en la nube. Acceder a información fidedigna sobre el desempeño de los sistemas permite tomar mejores decisiones sobre los puntos críticos que requieren atención.

Modyo Connect incluye capacidades de monitoreo en tiempo real del estado de su infraestructura y aplicaciones, generando métricas agregadas en dashboards para determinar la salud general del servicio.

Modyo Connect es un servicio gestionado; la mayoría de las métricas son manejadas internamente por nuestros equipos de operaciones. Como parte del servicio, solo se escalan al cliente las alertas relacionadas con sus aplicaciones particulares (ej. problemas con servicios externos o errores internos de la aplicación).

## Componentes de Monitoreo

#### [Métricas Aplicativas](application-metrics.html)
Monitoreo "caja blanca" que instrumenta agentes para reportar el comportamiento interno de las aplicaciones. Proporciona información detallada sobre tiempos de respuesta, tasas de error y trazas de rendimiento mediante NewRelic APM.

#### [Métricas de Infraestructura](infrastructure-metrics.html)
Monitoreo completo de las dependencias de nube configuradas para el servicio mediante AWS CloudWatch. Las métricas más relevantes se centralizan en NewRelic para correlación con métricas aplicativas.

#### [Registro de Logs](log-registry.html)
Grabación secuencial de eventos y acciones del sistema mediante AWS CloudWatch Logs. Proporciona evidencia del comportamiento del sistema con vista unificada de todos los componentes.

## Características Principales

- **Monitoreo en tiempo real**: Métricas actualizadas constantemente
- **Dashboards centralizados**: Vista 360° del estado de aplicaciones
- **Alertas inteligentes**: Notificaciones solo para eventos críticos de aplicación
- **Trazabilidad completa**: Desde la petición hasta la respuesta

## Métricas Clave Monitoreadas

- Tiempos de respuesta promedio y percentiles
- Tasa de error de aplicaciones
- [Apdex](https://en.wikipedia.org/wiki/Apdex) (Application Performance Index)
- Estado de servicios y APIs externos
- Trazas lentas y cuellos de botella
- Utilización de recursos de infraestructura

## Acceso y Gestión

Los accesos al monitoreo se gestionan según el tipo de componente:
- **NewRelic**: Accesos tipo "basic" restringidos a dashboards específicos
- **AWS CloudWatch**: Acceso mediante cuentas del servicio
- **Logs**: Centralización y exportación disponible según necesidad

## Consideraciones Importantes

:::warning Responsabilidad del Cliente
- Ofuscar información sensible en los logs
- Configurar correctamente los agentes de monitoreo en microservicios
- Revisar regularmente las métricas y alertas generadas
:::

## Inicio Rápido

1. Activa el [monitoreo aplicativo](application-metrics.html) en sus microservicios
2. Verifica el acceso a [métricas de infraestructura](infrastructure-metrics.html)
3. Configura la retención de [logs](log-registry.html) según sus necesidades
4. Solicita acceso a dashboards mediante el [Centro de Soporte](https://support.modyo.com)