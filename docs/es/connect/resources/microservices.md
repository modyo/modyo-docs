---
search: true
---

# Desarrollo de Microservicios

:::warning Página en implementación
Esta página se encuentra actualmente en implementación. Algunas secciones podrían estar vacías o incompletas y el contenido podría cambiar.
:::

## Desarrollo
Modyo Connect puede ser utilizado para el desarrollo de Microservicios, los cuales se despliegan dentro los Microservicios, además de requerir de repositorios y automatizaciones, requerirán de un ambiente de ejecución con contenedores y un API Gateway, el que actuará como barrera de seguridad y puerta de entrada para la funcionalidad presente en ellos.

::: tip Repositorio de Código
El código y estructura inicial del proyecto en el ambiente local del desarrollador debe ser respaldado en un [repositorio de código](../components/development.md#repositorio-de-codigo) provisto por el servicio.
:::




## Problemas Conocidos
- Recomendaciones sobre estructura de proyecto (Yeoman, plantilla)
- Uso de Modyo Commons
- Swagger para publicación en API Gateway
- Recomendaciones para log y monitoreo
- Recomendación para persistencia de datos
    - Locks
    - Performance
    - Índices
    - Migraciones
- Recomendaciones para la invocación de servicios externos
- Recomendación para el uso de colas
- Recomendación para el uso de tareas programadas (Quartz)
- Recomendaciones para workflow y máquinas de estado
- Uso del API administrativa de Modyo


## Buenas Prácticas
- Recomendaciones de buenas prácticas de estructura de proyecto
- Recomendaciones de code style

## Rendimiento
- Uso de bases de datos: pool de conexiones, índices, locks
- Bloqueo de requests, timeouts

## Observabilidad

