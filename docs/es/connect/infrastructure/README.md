---
search: true
---

# Infraestructura

Los componentes de infraestructura proporcionan un ambiente de ejecución seguro y escalable para las APIs y [microservicios](/es/architecture/patterns/microservice.html) desarrollados sobre Modyo Connect en la nube de [Amazon AWS](https://aws.amazon.com). 

Los componentes de infraestructura son completamente gestionados por el servicio de Modyo Connect; los usuarios solo se preocupan por el código desplegado. Un equipo de expertos en la nube de Modyo se encarga de parametrizar, automatizar, monitorear y asegurar la continuidad del servicio según los niveles acordados.

## Componentes de Red y Balanceo

#### [Balanceo de Carga](load-balancing.html)
Distribución de peticiones mediante AWS Application Load Balancer (ALB) con características de seguridad avanzadas.

#### [API Gateway](api-gateway.html)
Punto de entrada para todas las APIs con gestión de autorizaciones, monitoreo y caché integrado.

#### [Red de Distribución de Contenidos](content-delivery-network.html)
Distribución global de contenido mediante AWS CloudFront para reducir latencias.

## Componentes de Computación y Almacenamiento

#### [Contenedores](containers.html)
Ambiente de ejecución serverless con AWS ECS Fargate para microservicios Java Spring Boot.

#### [Bases de Datos](databases.html)
Almacenamiento relacional de alta disponibilidad con AWS RDS Aurora compatible con MySQL.

#### [Cache y NoSQL](cache-nosql.html)
Soluciones de caché con Redis y búsqueda con OpenSearch para acceso rápido a datos.

#### [Repositorio de Objetos](object-storage.html)
Almacenamiento seguro y escalable de archivos en AWS S3.

## Componentes de Seguridad

#### [Gestión de Secretos](secrets-management.html)
Administración centralizada de credenciales y tokens con AWS Secrets Manager.

#### [Encriptación](encryption.html)
Cifrado AES 256 gestionado con AWS KMS para todos los datos almacenados.

#### [Certificados SSL/TLS](ssl-tls-certificates.html)
Gestión automatizada de certificados con AWS Certificate Manager y Cloudflare.

#### [Single Sign-On (SSO)](single-sign-on.html)
Autenticación unificada implementada con KeyCloak en alta disponibilidad.

#### [Firewall Aplicativo (WAF)](web-application-firewall.html)
Protección contra ataques web comunes con AWS WAF.

## Componentes de Mensajería y Comunicación

#### [Colas de Mensajes](message-queues.html)
Comunicación asíncrona entre servicios con AWS SQS.

#### [Envío de Correos/SMS](email-sms.html)
Servicios de mensajería saliente integrados con la API de Modyo Customers.

## Componentes de Red y DNS

#### [Virtual Private Network (VPC)](virtual-private-network.html)
Enlaces seguros site-to-site para conectar con infraestructura externa.

#### [Domain Name Service (DNS)](domain-name-service.html)
Gestión de zonas DNS en AWS Route53.

#### [Registro de Dominios](domain-registration.html)
Registro y administración de dominios TLD.

## Inicio Rápido

Para activar componentes de infraestructura:

- Identifica los componentes necesarios para su arquitectura
- Crea un ticket en el [Centro de Soporte de Modyo](https://support.modyo.com)
- Proporciona la información requerida según cada componente
- Coordina con el equipo de Modyo la implementación

## Consideraciones Importantes

- Todos los componentes incluyen encriptación por defecto
- La redundancia multizona está disponible para ambientes productivos
- El monitoreo y logs están activos automáticamente
- Los componentes son completamente gestionados por Modyo