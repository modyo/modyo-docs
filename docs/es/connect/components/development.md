---
search: true
---

# Desarrollo
Los componentes de desarrollo comprenden todos los accesos y herramientas requeridas por un equipo de desarrolladores para colaborar y trabajar de forma segura en iniciativas de [micro frontends](../resources/microfrontends.md) y [microservicios](../resources/microservices.md).

## Acceso de Desarrollador
El Acceso de Desarrollador es el punto de inicio para comenzar a utilizar los servicios de Modyo Connect. Una vez habilitado, el desarrollador podrá interactuar con los [repositorios creados](#repositorio-de-codigo) en el sistema de control de versiones y el [Centro de Soporte de Modyo](https://support.modyo.com) para efectuar las activaciones del resto de los servicios. Además, el acceso de desarrollador otorga los permisos para ingresar a los sistemas de nube, métricas, monitoreo y bitácoras.

Al activar el acceso de desarrollador, se debe tener en cuenta lo siguiente:
- La cuenta de GitHub debe contar con la protección de segundo factor de autenticación activa, de otro modo no cumplirá con la política de seguridad de Modyo y no podrá tener acceso a los repositorios
- Los usuarios de GitHub se agregan al repositorio como "externos". Modyo no puede garantizar la seguridad de esta cuenta, por lo que cada cliente será responsable de que sus desarrolladores activen otras medidas de seguridad, como el uso de contraseñas seguras y el control de los tokens existentes en cada cuenta

### Pasos para activar
La activación del Acceso de Desarrollador se realiza mediante un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com) en el que se debe indicar:
- Usuario GitHub del desarrollador (si no posee uno, deberá ser creado previamente)
- El nombre y correo electrónico del desarrollador
- Indicar si el desarrollador está autorizado o no para solicitar cambios en los componentes del servicio

::: warning Importante
Una vez creado el acceso a un desarrollador, será responsabilidad del cliente informar cuando se deba remover de los repositorios autorizados. Esto se realiza mediante un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com).
:::


## Repositorio de Código
Los repositorios de código fuente permiten la gestión de todos los aspectos del ciclo de vida del código, incluyendo versiones, inspecciones, automatizaciones y flujos de colaboración entre los miembros del equipo de desarrollo con acceso a ellos.

Los repositorios de código fuente se implementan sobre el servicio de GitHub Enterprise de Modyo. Se utilizan además las soluciones de Github Security para la inspección de dependencias, SonarCloud para Java y Javascript.

### Pasos para activar
La activación de un Repositorio de Código se realiza mediante un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com) en el que se debe indicar:
- Tipo de repositorio: micro frontend, microservicio o artefacto intermediario
- Nombre del repositorio (al nombre indicado, Modyo le aplicará un estándar interno de nombre en el cual se incorporan prefijos y/o sufijos dependiendo del tipo de repositorio)


## Integración Continua
La configuración de integración continua se utiliza para automatizar procesos comunes dentro del ciclo de desarrollo de software. Dentro de estos procesos encontramos principalmente inspección de código, revisión de dependencias, empaquetado de artefactos, despliegues, entre otros.

Modyo utiliza los sistemas de integración continua de GitHub Enterprise y Amazon. Todas las actividades relacionadas con el ciclo de desarrollo, cómo inspecciones, revisiones o generación de artefactos intermediarios se realizan sobre GitHub Actions. También se realizan sobre GitHub Actions todas las automatizaciones referidas a [micro frontends](../resources/microfrontends.md), cómo el despliegue a la plataforma Modyo mediante el uso del Modyo CLI. Las actividades relacionadas con la generación de artefactos basados en contenedores y sus despliegues sobre AWS ECS se realizan utilizando AWS CodePipeline.

::: warning Importante
Las integraciones basadas en AWS CodePipeline serán migradas a GitHub Actions durante la primera mitad del 2023.
:::

### Pasos para activar
La activación de la Integración Continua sobre un [repositorio](#repositorio-de-codigo) se realiza mediante un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com) en el que se debe indicar:
- Repositorio de código sobre el cual se debe ejecutar la automatización
- Tipo de automatización que se desea implementar
- Instrucciones específicas que se deban tener en cuenta al momento de implementar la automatización (Ejemplo: script de builds específico, parámetros especiales, etc.).


## Repositorio de Artefactos
Los repositorios de artefactos permiten almacenar paquetes de software de forma segura y accesible. Entre sus principales funcionalidades están las de versionar y respaldar los paquetes, además de actuar como fuente única para su distribución. En el caso de las librerías intermediarias, utilizadas en la modularización del código de Java y Javascript, las dependencias son consumidas directamente desde el repositorio de artefactos.

Modyo implementa repositorios de artefactos dentro de su GitHub Enterprise y la cuenta de Amazon AWS configurada para el cliente. Para el caso de los repositorios intermediarios, cómo librerías de Java o Javascript se utiliza GitHub Registry. Para el caso de los repositorios de contenedores que serán desplegados en la nube de Amazon, se utiliza AWS Elastic Container Registry.

### Pasos para activar
La activación de un repositorio de artefactos se realiza mediante un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com) en el que se debe indicar:
- Nombre del repositorio de artefacto
- Tipo de repositorio de artefacto (librería NPM o Maven)
- Propósito para el cual el repositorio de artefacto será utilizado




