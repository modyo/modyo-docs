---
search: true
---

# Balanceo de Carga

El balanceo de carga distribuye las peticiones de Internet entre un grupo de servidores. 

Modyo Connect implementa el balanceo de carga mediante [AWS Application Load Balancer (ALB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html). El ALB se integra de forma nativa con otros servicios de AWS, ofreciendo características de seguridad únicas como redirección de rutas y protocolos, [certificados SSL/TLS](ssl-tls-certificates.html) y la incorporación de [firewalls de aplicaciones web (WAF)](web-application-firewall.html).

## Pasos de Activación

Para solicitar la creación de un balanceador ALB en AWS, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com) que incluya:

- Dominio a apuntar al ALB.
- Descripción del caso de uso y servicio al que se aplicará.
- Contacto técnico del administrador de DNS para validación de certificados SSL/TLS y redirecciones.

Una vez creado, el balanceador podrá ser utilizado por un servicio dentro de un clúster de [contenedores](containers.html).

:::warning Aplicaciones externas
El balanceador de carga AWS ALB no puede dirigir tráfico hacia recursos de AWS desplegados fuera de la red privada virtual (VPC) donde se despliega, por lo que solo debe considerarse para usos con recursos internos.
:::