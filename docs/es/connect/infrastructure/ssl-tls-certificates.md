---
search: true
---

# Certificados SSL/TLS

Los certificados SSL/TLS aseguran una encriptación segura para todas las operaciones en tránsito desde los endpoints HTTPS del servicio. Se pueden activar a nivel del balanceador de carga, la red de distribución de contenido (CDN) y el API Gateway.

Para generar y mantener actualizados los certificados SSL/TLS, Modyo Connect utiliza AWS Certificate Manager (ACM) y Cloudflare. Los certificados generados podrían requerir una verificación de dominio, la que debe realizar el cliente incorporando registros DNS de tipo CNAME o TXT indicados en el proceso de generación, según corresponda.

:::warning Seguridad de llaves privadas
Modyo no posee acceso a las claves privadas de los certificados emitidos por AWS ACM y Cloudflare, ni podrán ser utilizados fuera de los servicios soportados en la cuenta configurada para el cliente.
:::

## Pasos de Activación

Para solicitar la emisión de un certificado TLS, se deben indicar los dominios o subdominios a incluir. El solicitante debe asegurarse previamente de tener acceso al panel de gestión de DNS para el dominio o de contar con la disponibilidad de la persona que posee el acceso. Adicionalmente, el cliente podrá seleccionar una [política de seguridad](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies) para el certificado.

Al momento de la solicitud, Modyo emitirá un certificado "pendiente de validación" que requiere validación mediante registros DNS.

:::warning Validación de dominios por DNS
Los registros DNS utilizados para la validación del certificado no deben eliminarse, ya que AWS ACM y Cloudflare los utilizarán para su renovación periódica. Es responsabilidad del cliente asegurar la existencia de estos registros en su sistema DNS.
:::

Consideraciones adicionales:

- Modyo no recomienda el uso de certificados wildcard (*.dominio.com) dentro de los servicios.
- Modyo utiliza la política de cifrado recomendada por AWS, que garantiza seguridad y mantiene cierta compatibilidad con dispositivos antiguos. Si el cliente desea activar [políticas de cifrado](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies) más seguras (con riesgo de disminuir la compatibilidad), debe especificarlo en el ticket.