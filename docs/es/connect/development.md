---
search: true
---

# Desarrollo

## Acceso de Desarrollador
El desarrollador es el centro de Modyo Connect ya que es él el responsable de implementar el código que hará uso del resto de los componentes del servicio. Una vez habilitado el acceso, el desarrollador podrá interactuar con el Centro de Soporte de Modyo para efectuar las solicitudes deseadas. Además, con el acceso de desarrollador se otorgan los permisos para ingresar a los sistemas de monitoreo y bitácoras.

### Pasos para solicitar
El acceso a desarrollador se debe realizar mediante un ticket de requerimiento en el Centro de Soporte de Modyo. Se debe indicar:
- Usuario GitHub del desarrollador (si no posee uno, deberá ser creado previamente)
- El nombre y correo electrónico del desarrollador
- Indicar si el desarrollador está autorizado o no para solicitar cambios en los componentes del servicio

### Costos y tiempos de activación
| Componente        | Costo en MRUs        | Tiempos de habilitación (aprox)  |
| ------------- |:-------------:|:-----:|
| Acceso de Desarrollador      | 1 MRU | 1-2 días |


### Consideraciones
- La cuenta de GitHub debe contar con la protección de segundo factor de autenticación activa, de otro modo no cumplirá con la política de seguridad de Modyo y no podrá tener acceso a los repositorios.
- Los usuarios de GitHub se agregan al repositorio como "externos". Modyo no puede garantizar la seguridad de esta cuenta, por lo que cada cliente será responsable de que sus desarrolladores activen otras medidas de seguridad, como el uso de contraseñas seguras y el control de los tokens existentes en cada cuenta.

::: warning Atención
Una vez creado el acceso a un desarrollador, será responsabilidad del cliente informar cuando este deba ser removido o modificado, mediante un ticket de requerimiento en el Centro de Soporte de Modyo.
:::

## Micro Frontends (Widgets)
La plataforma Modyo se puede extender en funcionalidad por medio del desarrollo de Widgets y Microservicios. Los Widgets se pueden desarrollar usando las herramientas internas de Modyo, como el Widget Builder, o de forma externa mediante el Modyo CLI. 
Los Widgets desarrollados con el CLI requerirán de un repositorio de código y pipelines de automatización, los cuales generan código que se despliega directamente en la Plataforma Modyo. 

> Pendiente: Para más detalle de Widgets ir a la sección de recursos (buenas prácticas, uso de artefactos intermediarios, code style, despliegue con Modyo CLI, etc)
> Pendiente: Para más detalle de Microservicios ir a la sección de recursos (buenas prácticas, uso de logs, artefactos intermediarios, code style, build, swagger, etc)

## Microservicios
Modyo Connect puede ser utilizado para el desarrollo de Microservicios, los cuales se despliegan dentro 
os Microservicios, además de requerir de repositorios y automatizaciones, requerirán de un ambiente de ejecución con contenedores y un API Gateway, el que actuará como barrera de seguridad y puerta de entrada para la funcionalidad presente en ellos.


## Repositorio de Código
Los repositorios de código fuente permiten la gestión de todos los aspectos del ciclo de vida del código, incluyendo versiones, inspecciones, automatizaciones y flujos de colaboración entre los miembros del equipo de desarrollo con acceso a ellos.

Los repositorios de código fuente se implementan sobre el servicio de GitHub Enterprise de Modyo. Se utilizan además las soluciones de Github Security para la inspección de dependencias, SonarCloud para Java y Javascript.

### Pasos para solicitar
Para solicitar repositorios de código, se debe indicar:
- Tipo de repositorio: Micro Frontend, Microservicio o artefacto intermediario
- Nombre del repositorio (al nombre elegido por el cliente, Modyo le aplicará un estándar interno de nombrado en el cual se incluyen prefijos y/o sufijos que dependen del tipo de repositorio solicitado)

::: warning Accesos a repositorios
Tal como se crean solicitudes para agregar miembros del equipo de desarrollo a repositorios específicos, será responsabilidad del cliente informar cuando los accesos de un determinado desarrollador hayan cambiado y requieren de alguna actualización en GitHub.
:::


## Integración Contínua
La integración contínua permite la activación de script de automatización directamente sobre el repositorio.
AWS Codepipeline
GHA

### Pasos para solicitar
Se debe crear un requerimiento dentro del portal de Soporte Empresarial de Modyo


## Repositorio de Artefactos
GHR
ECR

### Pasos para solicitar
Se debe crear un requerimiento dentro del portal de Soporte Empresarial de Modyo

