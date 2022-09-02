---
search: true
---

# Infrastructure

## API Gateway

## Contenedor

## Gestión de Secretos
Modyo Connect permite la gestión segura de parámetros secretos para la configuración de los microservicios mediante el uso de AWS Secret Manager. AWS Secret Manager genera un almacén central y seguro de parámetros que no deben almacenarse en el código fuente, ni ser de público conocimiento para los desarrolladores de Connect, por ejemplo: credenciales de bases de datos, tokens de acceso a APIs, credenciales de servicios externos, etc.

Adicionalmente existe una gestión adicional de secretos en el repositorio de GitHub Empresarial, la que se utiliza de forma interna para compartir detalles de accesos a tokens con los scripts de integración contínua de GitHub Actions. Si se necesita incorporar algún proceso dentro de GitHub Actions que requiera de un parámetro secreto, éste se puede ser solicitado.

### Pasos para solicitar
Para solicitar la configuración de un nuevo secreto, se debe crear un ticket de requerimiento en el Centro de Soporte de Modyo.

::: danger Confidencialidad de secretos
Modyo no recomienda adjuntar en el ticket de los valores secretos de estos parámetros.

Para ello, se debe establecer un canal seguro de comunicación con el cliente, que asegure la confidencialidad de los valores a configurar.
:::


## Encriptación
Modyo utiliza la encriptación manejada de AWS KMS para el cifrado seguro de toda la información en descanso almacenada en repositorios de objetos y volúmenes de datos administrados para el cliente.

Las llaves gestionadas por AWS KMS se generan mediante el estándar de AES 256 y poseen un ciclo de regeneración anual automático, es decir, no se requiere de ningún tipo de acción manual para renovar y actualizar los recursos con las nuevas llaves generadas.

Modyo configura llaves AWS KMS independientes para cada recurso. Por defecto, se delega a AWS la generación y gestión completa de las llaves de cifrado. Si un cliente lo desea, se pueden incorporar al servicio llaves gestionadas de forma externa, mediante el módulo de AWS CloudHSM.

### Pasos para solicitar
La encriptación en descanso provista por AWS KMS se encuentra activa por defecto en todos los repositorios de objectos de AWS S3 y volúmenes de datos de AWS RDS y OpenSearch. 

En el caso de requerir la incorporación de una llave gestionada de forma externa con AWS CloudHSM, se debe notificar con un ticket de requerimiento en el Centro de Soporte de Modyo, indicando el motivo y cómo planea gestionar la llave externa (implementación, renovaciones, etc).


## Cetificados TLS
AWS Certificate Manager. Servicio utilizado para la generación y mantención segura de certificados SSL en los recursos de Amazon. Los certificados generados por esta vía requerirán de una validación del dominio por parte del cliente y una vez emitidos Modyo no poseerá acceso a las llaves de éstos, ni podrán ser utilizados en servicios que sean ofrecidos por Amazon.

### Pasos para solicitar
Para solicitar la emisión de un certificado TLS se debe indicar el o los subdominios a incluir. El solicitante se debe asegurar previamente de contar con acceso al panel de gstión de DNS para el dominio o de contar con el tiempo de la persona que posee el acceso.

Al momento de solicitar, Modyo emitirá un certificado "pendiente de validación" el cual requerá de una validación por medio de registros de DNS.

::: warning Validación de dominios por DNS
Es importante que los registros creados para la validación de los dominios 
:::

Modyo no recomienda el uso de cetrificados tipo wildcard (*.dominio.com) dentro de los servicios.

Modyo utiliza la política de cifrado recomendada por AWS, la cual garantiza seguridad, manteniendo cierto grado de compatibilidad con dispositivos antiguos. Si el cliente desea activar cifrados más seguros (disminuyendo la compatibilidad) debe solicitarlo mediante ticket de requerimiento en el Centro de Soporte de Modyo.


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
