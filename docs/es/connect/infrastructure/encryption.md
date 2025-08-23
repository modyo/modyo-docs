---
search: true
---

# Encriptación

Modyo utiliza la encriptación gestionada de [AWS Key Management Service (KMS)](https://aws.amazon.com/kms) para el cifrado seguro de toda la información en repositorios de objetos y volúmenes de datos administrados para el cliente.

Las claves gestionadas por AWS KMS se generan mediante el estándar AES 256 y poseen un ciclo de regeneración anual automático, lo que elimina la necesidad de acciones manuales para renovar y actualizar los recursos con las nuevas claves.

Modyo configura claves AWS KMS independientes para cada recurso. Por defecto, se delega a AWS la generación y gestión completa de las claves de cifrado. Si un cliente lo desea, se pueden incorporar al servicio claves gestionadas externamente mediante el módulo de [AWS CloudHSM](https://aws.amazon.com/cloudhsm).

## Pasos de Activación

La encriptación proporcionada por las claves gestionadas de AWS KMS está activa por defecto en todos los repositorios de objetos de AWS S3 y volúmenes de datos de AWS RDS y OpenSearch, por lo que no requiere activación. 

En el caso de requerir la incorporación de una clave gestionada externamente mediante AWS CloudHSM, se debe notificar mediante un ticket de requerimiento en el Centro de Soporte de Modyo, indicando el motivo y el plan de gestión de la clave (implementación, renovaciones, etc.).

:::warning Rotación de llaves
Las claves gestionadas por el cliente no rotan automáticamente una vez al año como las generadas por AWS KMS. Por lo tanto, es responsabilidad del cliente planificar y solicitar la rotación de claves cuando sea requerido.
:::