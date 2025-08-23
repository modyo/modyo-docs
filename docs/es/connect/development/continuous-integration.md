---
search: true
---

# Integración Continua

La integración continua automatiza procesos comunes en el ciclo de desarrollo de software, como inspección de código, revisión de dependencias, empaquetado de artefactos y despliegues. Para ello, Modyo utiliza los sistemas de integración continua de GitHub Enterprise y Amazon.
Todas las actividades relacionadas con el ciclo de desarrollo (inspecciones, revisiones, generación de artefactos intermediarios) y las automatizaciones de [micro frontends](/es/architecture/patterns/micro-frontend.html) (ej. despliegue a la plataforma Modyo mediante el Modyo CLI) se realizan en GitHub Actions.

Las actividades relacionadas con la generación de artefactos basados en contenedores y sus despliegues en AWS ECS se realizan usando AWS CodePipeline.


:::warning Importante
Las integraciones basadas en AWS CodePipeline serán migradas a GitHub Actions durante la primera mitad del 2026.
:::

## Pasos de Activación
Crear un ticket en el [Centro de Soporte de Modyo](https://support.modyo.com) para activar la Integración Continua sobre un [repositorio](code-repository.html), indicando:
- Repositorio de código sobre el cual ejecutar la automatización.
- Tipo de automatización a implementar.
- Instrucciones específicas para la implementación de la automatización (ej. script de compilación, parámetros especiales).