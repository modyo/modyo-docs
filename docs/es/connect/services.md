---
search: true
---

# Componentes
A continuación se detallan los diferentes componentes de Modyo Connect.


## Acceso de Desarrollador
El desarrollador es el centro del servicio. Una vez habilitado el acceso de desarrollador, cada miembro del equipo tendrá acceso a los componentes principales del servicio y podrá realizar las solicitudes correspondientes.

### Pasos para solicitar
El acceso a desarrollador se debe realizar mediante un ticket de requerimiento en el Centro de Soporte de Modyo. Se debe indicar:
- Usuario GitHub del desarrolador (si no posee uno, deberá crearlo)
- El nombre y correo electrónico del desarrollador
- Incidar si el desarrollador está autorizado o no para solicitar cambios en el servicio

 
::: warning Requerimientos especiales
La cuenta de GitHub debe contar con la protección de segundo factor de autenticación activa, de otro modo no cumplirá con la política de Modyo y no podrá tener acceso a los repositorios.

Modyo no puede garantizar la seguridad de esta cuenta, por lo que cada cliente será responsable de que sus desarrolladores activen otras medidas de seguridad, como el uso de contraseñas seguras y el control de los tokens existentes en sus cuentas.
:::



## Repositorio de Código

SonarCloud, Github Security, LinterJS

### Pasos para solicitar
Para solicitar repositorios de código, se debe indicar:
- req 1
- req 2


## Integración Contínua
AWS Codepipeline
GHA

### Pasos para solicitar
Se debe crear un requerimiento dentro del portal de Soporte Empresarial de Modyo


## Repositorio de Artefactos
GHR
ECR

### Pasos para solicitar
Se debe crear un requerimiento dentro del portal de Soporte Empresarial de Modyo




## Widgets y Microservicios
La plataforma Modyo se puede extender en funcionalidad por medio del desarrollo de Widgets y Microservicios. Los Widgets se pueden desarrollar usando las herramientas internas de Modyo, como el Widget Builder, o de forma externa mediante el Modyo CLI. 
Los Widgets desarrollados con el CLI requerirán de un repositorio de código y pipelines de automatización, los cuales generan código que se despliega directamente en la Plataforma Modyo. 

Por su parte, los Microservicios, además de requerir de repositorios y automatizaciones, requerirán de un ambiente de ejecución con contenedores y un API Gateway, el que actuará como barrera de seguridad y puerta de entrada para la funcionalidad presente en ellos.

El servicio de Modyo Connect contempla todas las herramientas y procesos necesarios para gestionar el ciclo de desarrollo tanto de Widgets como Microservicios.




## Gestión de Secretos
AWS Secret Manager

## Encriptación
Descanso. AWS KMS

### Cetificados TLS
AWS Certificate Manager. Servicio utilizado para la generación y mantención segura de certificados SSL en los recursos de Amazon. Los certificados generados por esta vía requerirán de una validación del dominio por parte del cliente y una vez emitidos Modyo no poseerá acceso a las llaves de éstos, ni podrán ser utilizados en servicios que sean ofrecidos por Amazon.


## Single Sign On (SSO)
El servicio de Single Sign On (SSO)


## Repositorio de Objetos
AWS S3. Repositorio de objetos (object storage) de Amazon AWS. En él se almacenan todos los archivos estáticos de la plataforma los cuales, según los permisos configurados, quedan disponibles directamente en la Web o las Content Delivery Networks (CDNs).

## Balanceo de Carga
AWS ALB (Application Load Balancer). Servicio de balanceo de carga de Amazon AWS. ALB permite conectarse a los contenedores de una forma limpia y transparente, monitoreando cada uno de ellos y descartando los que posean alguna degradación en su performance. Dependiendo del uso que se les dé los ELB pueden ser públicos o internos. Los balanceadores públicos poseen desplegados además  los certificados SSL y políticas de WAF básicas.

## Contenedores
AWS EC2 Container Service (ECS). Servicio de contenedores de Amazon AWS. ECS opera como el scheduler de los contenedores definidos, asegurándose que se respeten los mínimos y máximos definidos para cada elemento y configurando los balanceadores de carga conectados a él. ECS además ofrece un API para realizar despliegues de nuevas versiones de sus contenedores con el mínimo impacto en los sistemas en producción.

## Cache y NoSQL
AWS Elasticache. Servicio de caché de Amazon AWS, ofrecido en dos grandes variaciones: Memcache y Redis. En el caso de Modyo sólo la versión de Redis es utilizada, principalmente por sus capacidades de configurarse en modalidad de cluster de alta disponibilidad.

AWS Elasticsearch. Servicio de indexación de contenido de Amazon AWS, implementado mediante Elasticsearch y con la capacidad de configurarse como cluster de alta disponibilidad. 

## Base de Datos
AWS RDS Aurora. Servicio de bases de datos de Amazon AWS, disponible en varias versiones (Postgres, Oracle, SQL Server, MySQL).  RDS Aurora es compatible con MySQL 5.6, y a diferencia de un despliegue tradicional de MySQL, Aurora implementa un cluster de alta disponibilidad en el que los datos almacenados en él son persistidos en 3 zonas de disponibilidad. 

## Firewall Aplicativo
AWS WAF. Servicio de firewall aplicativo de Amazon AWS. El Amazon WAF puede ser desplegado en la CDN de Amazon (CloudFront) o directamente sobre los ELB del tipo "application ELB" o ALB. El Amazon WAF posee filtros para los ataques Web más comunes (OWASP Top 10), como inyecciones de SQL o scripts, además de ofrecer la capacidad de definir reglas propias. 

## Cola de Mensajería
AWS SQS. Servicio de colas de mensajería de alto performance y duración que permite a las aplicaciones comunicarse de forma asincrónica.


## Red Privada / VPN
AWS VPC. Servicio de redes privadas virtuales de Amazon AWS. Modyo configura una VPC por cliente / ambiente, garantizando que todos los elementos configurados para sus clientes se encuentran separados unos de otros.




## Envío de Correos
Servicio utilizado para el envío de correos transaccionales y masivos de la plataforma de forma confiable y escalable. En algunos casos este servicio es ofrecido por Modyo mediante Sendgrid y otros mediante SES.

## Métricas Aplicativas y Logs
AWS Cloudwatch. Servicio de monitoreo de nube de Amazon AWS. Cloudwatch entrega métricas de alto valor de cada uno de los servicios entregados por Amazon, incluyendo logs y la capacidad de definir alertas. 
NewRelic
