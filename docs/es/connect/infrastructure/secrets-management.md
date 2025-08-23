---
search: true
---

# Gestión de Secretos

Modyo Connect permite la gestión segura de secretos para información sensible en los [microservicios](/es/architecture/patterns/microservice.html) mediante [AWS Secrets Manager](https://aws.amazon.com/secrets-manager). Este servicio genera un almacén centralizado y seguro de parámetros, evitando que se almacenen en el código o como variables de entorno (ej. credenciales de bases de datos, tokens de acceso a APIs, credenciales de servicios externos).

Adicionalmente, existe una gestión de secretos en el repositorio de [GitHub Enterprise](https://github.com/enterprise) de Modyo, utilizada internamente para compartir tokens de acceso con los scripts de integración continua de [GitHub Actions](https://github.com/features/actions). Si se requiere incorporar un secreto en el proceso de GitHub Action, puede solicitarse mediante un ticket de activación.

## Pasos de Activación

Para solicitar la configuración de un nuevo secreto, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com) indicando:

- Nombre del secreto.
- Almacén donde desea ser creado (GitHub o AWS).
- Método seguro para la entrega del valor del secreto. 

:::danger Confidencialidad de secretos
Modyo no recomienda adjuntar los valores de los secretos en el ticket de activación. Se debe establecer un canal seguro de comunicación con el cliente para asegurar la confidencialidad de los valores a configurar (ej. correo electrónico encriptado).
:::