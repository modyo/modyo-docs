---
search: true
---

# Desarrollo

Los componentes de desarrollo incluyen las herramientas y accesos necesarios para que un equipo de desarrolladores colabore de forma segura en iniciativas de [micro frontends](/es/architecture/patterns/micro-frontend) y [microservicios](/es/architecture/patterns/microservice).

## Acceso de Desarrollador
El Acceso de Desarrollador es el punto de partida para usar los servicios de Modyo Connect. Una vez habilitado, el desarrollador puede interactuar con los [repositorios creados](#repositorio-de-codigo) en el sistema de control de versiones y el [Centro de Soporte de Modyo](https://support.modyo.com) para activar otros servicios. Además, otorga permisos para acceder a sistemas en la nube, métricas, monitoreo y bitácoras.

Al activar el acceso de desarrollador, se debe tener en cuenta:
- La cuenta de GitHub debe tener activada la autenticación de dos factores; de lo contrario, no cumplirá con la política de seguridad de Modyo y no tendrá acceso a los repositorios.
- Los usuarios de GitHub se agregan al repositorio como "externos". Modyo no puede garantizar la seguridad de estas cuentas, por lo que cada cliente es responsable de que sus desarrolladores activen medidas de seguridad adicionales (ej. contraseñas seguras, control de tokens).

### Pasos para activar
Crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com) indicando:
- Usuario GitHub del desarrollador (crear uno si no se tiene).
- Nombre y correo electrónico del desarrollador.
- Si el desarrollador está autorizado o no para solicitar cambios en los componentes del servicio.

:::warning Importante
El cliente es responsable de informar a Modyo si requiere eliminar el acceso a un desarrollador, creando un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com).
:::


## Repositorio de Código
Los repositorios de código fuente permiten gestionar todos los aspectos del ciclo de vida del código, incluyendo versiones, inspecciones, automatizaciones y flujos de colaboración entre los miembros del equipo de desarrollo.

Los repositorios de código fuente se implementan sobre el servicio de GitHub Enterprise de Modyo. Además, se utilizan soluciones de GitHub Security para inspección de dependencias y SonarCloud para Java y Javascript.


### Pasos para activar
Crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com) indicando:
- Tipo de repositorio: micro frontend, microservicio o artefacto intermediario.
- Nombre del repositorio: Modyo aplicará un estándar interno de nombre con prefijos y/o sufijos según el tipo de repositorio.


## Integración Continua
La integración continua automatiza procesos comunes en el ciclo de desarrollo de software, como inspección de código, revisión de dependencias, empaquetado de artefactos y despliegues. Para ello, Modyo utiliza los sistemas de integración continua de GitHub Enterprise y Amazon.
Todas las actividades relacionadas con el ciclo de desarrollo (inspecciones, revisiones, generación de artefactos intermediarios) y las automatizaciones de [micro frontends](/es/architecture/patterns/micro-frontend) (ej. despliegue a la plataforma Modyo mediante el Modyo CLI) se realizan en GitHub Actions.

Las actividades relacionadas con la generación de artefactos basados en contenedores y sus despliegues en AWS ECS se realizan usando AWS CodePipeline.


:::warning Importante
(Nota: Las integraciones basadas en AWS CodePipeline serán migradas a GitHub Actions durante la primera mitad del 2023.)
:::

### Pasos para activar
Crear un ticket en el [Centro de Soporte de Modyo](https://support.modyo.com) para activar la Integración Continua sobre un [repositorio](#repositorio-de-codigo), indicando:
- Repositorio de código sobre el cual ejecutar la automatización.
- Tipo de automatización a implementar.
- Instrucciones específicas para la implementación de la automatización (ej. script de compilación, parámetros especiales).


## Repositorio de Artefactos
Los repositorios de artefactos son una forma segura y accesible de almacenar paquetes de software. Permiten versionar y respaldar los paquetes, y actuar como fuente única para su distribución.

En el caso de librerías intermediarias, utilizadas en la modularización de código Java y Javascript, las dependencias se consumen directamente desde el repositorio de artefactos.

Modyo implementa repositorios de artefactos en su GitHub Enterprise y en la cuenta de Amazon AWS del cliente. Para repositorios intermediarios (ej. librerías Java o Javascript) se usa GitHub Registry. Para repositorios de contenedores desplegados en la nube de Amazon, se usa AWS Elastic Container Registry.


### Pasos para activar
Crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com) indicando:
- Nombre del repositorio de artefactos.
- Tipo de repositorio de artefacto: librería NPM o Maven.
- Propósito del repositorio de artefacto.