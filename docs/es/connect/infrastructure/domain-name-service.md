---
search: true
---

# Domain Name Service (DNS)

El sistema de nombres de dominio (DNS) es el "directorio telefónico" de Internet. Permite a las personas acceder a información en línea a través de nombres de dominio (ej. google.com, twitter.com). Los navegadores web interactúan mediante direcciones IP; el DNS traduce los nombres de dominio a IPs para que los navegadores puedan cargar los recursos de Internet.

Modyo Connect permite el uso de su servicio DNS en la nube para clientes que requieran administración de dominios primarios o secundarios. Los registros DNS se configuran en [AWS Route53](https://aws.amazon.com/route53).

## Pasos de Activación
Para solicitar la gestión de una zona DNS para un dominio desde AWS, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com) indicando:
- Dominio raíz a gestionar.
- Registros a incorporar (puede ser un TXT exportado de otro DNS).

:::warning Tiempos de propagación
Una vez configurados la zona DNS y los registros, se deben configurar las direcciones de AWS Route53 en el registrador del dominio. Tras esta configuración, comienza la propagación, que podría demorar varias horas o incluso días antes de que el dominio esté disponible en Internet.
:::