---
search: true
---

# Virtual Private Network (VPC)

Una VPN (site-to-site) se utiliza principalmente en organizaciones que requieren conectar infraestructura en diferentes ubicaciones geográficas mediante un enlace seguro para transmitir información.

Modyo Connect permite la configuración de enlaces VPN site-to-site mediante el uso de [AWS VPN connections](https://docs.aws.amazon.com/es_es/vpc/latest/userguide/vpn-connections.html) dentro de la red [AWS VPC](https://aws.amazon.com/vpc/) configurada para el cliente. Una vez establecido el enlace, los microservicios podrán establecer conexiones directas con infraestructura y servicios desplegados desde el lado del cliente.

## Pasos de Activación
Para solicitar un enlace VPC desde AWS hacia una infraestructura externa, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com) indicando:
- Dirección IP a la cual se debe crear el enlace.
- Contacto técnico del responsable de establecer el enlace.

:::warning Redundancia del enlace
Clientes con redundancia multiregión podrían requerir la configuración de varios enlaces simultáneos. Es responsabilidad del cliente asegurar la disponibilidad de todos estos enlaces en caso de que se requiera un failover.
:::

:::tip Soporte para fabricantes
Amazon AWS provee soporte y ejemplos de configuración para muchos fabricantes de dispositivos de red. En caso de problemas al establecer el enlace, Modyo apoyará levantando un ticket de soporte hacia AWS.
:::

:::tip AWS VPC Peering
Para enlaces hacia infraestructuras del cliente desplegadas dentro de AWS, se puede utilizar VPC Peering, que proporciona un enlace seguro y conveniente entre dos VPC diferentes, sin requerir la configuración de enlaces VPN.
:::