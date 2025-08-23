---
search: true
---

# Certificados SSL/TLS

Los certificados SSL/TLS aseguran una encriptación segura para todas las operaciones en tránsito desde los endpoints HTTPS del servicio. Se pueden activar a nivel del balanceador de carga, la red de distribución de contenido (CDN) y el API Gateway.

Para generar y mantener actualizados los certificados SSL/TLS, Modyo Connect utiliza AWS Certificate Manager (ACM). Los certificados generados por ACM requieren una verificación en el dominio, que debe ser realizada por el cliente incorporando los registros DNS de tipo CNAME indicados en el proceso de generación. Una vez emitido el certificado, el cliente tiene tres días para configurar su DNS; de lo contrario, el certificado deberá emitirse nuevamente.

:::warning Seguridad de llaves privadas
Modyo no posee acceso a las claves privadas de los certificados emitidos por AWS ACM, ni podrán ser utilizados fuera de los servicios soportados en la cuenta AWS configurada para el cliente.
:::

## Pasos de Activación

Para solicitar la emisión de un certificado TLS, se deben indicar los dominios o subdominios a incluir. El solicitante debe asegurarse previamente de tener acceso al panel de gestión de DNS para el dominio o de contar con la disponibilidad de la persona que posee el acceso. Adicionalmente, el cliente podrá seleccionar una [política de seguridad](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies) para el certificado.

Al momento de la solicitud, Modyo emitirá un certificado "pendiente de validación" que requiere validación mediante registros DNS.

:::warning Validación de dominios por DNS
Los registros DNS utilizados para la validación del certificado no deben eliminarse, ya que AWS ACM los utilizará para su renovación periódica. Es responsabilidad del cliente asegurar la existencia de estos registros en su sistema DNS.
:::

Consideraciones adicionales:

- Modyo no recomienda el uso de certificados wildcard (*.dominio.com) dentro de los servicios.
- Modyo utiliza la política de cifrado recomendada por AWS, que garantiza seguridad y mantiene cierta compatibilidad con dispositivos antiguos. Si el cliente desea activar [políticas de cifrado](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies) más seguras (con riesgo de disminuir la compatibilidad), debe especificarlo en el ticket.