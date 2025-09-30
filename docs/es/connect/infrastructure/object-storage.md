---
search: true
---

# Repositorio de Objetos

El repositorio de objetos proporciona un almacenamiento de archivos seguro y escalable en la nube, accesible mediante protocolos web. Modyo Connect implementa el repositorio de objetos utilizando [AWS S3](https://aws.amazon.com/s3).

Los permisos de acceso, asociados a cada archivo o generales para el repositorio, se especifican mediante la API del servicio AWS S3. El cliente es responsable de la asignación de estos permisos.

:::tip Acceso al API de AWS S3
El acceso al repositorio se realiza mediante la API del servicio AWS S3. Existen múltiples librerías cliente y aplicaciones de transferencia de archivos compatibles con el protocolo. Si el repositorio se utiliza dentro de los microservicios desplegados en Modyo Connect, las claves de API de AWS S3 se gestionarán como secretos de uso interno.
:::

## Pasos de Activación

Para solicitar la creación de un repositorio de objetos en Modyo Connect, se debe crear un ticket en el [Centro de Soporte de Modyo](https://support.modyo.com) especificando la siguiente información:
- Nombre del repositorio.
- Tipo de almacenamiento (simple o versionado).
- Política de acceso (privado o público).
- Políticas de ciclo de vida (borrado automático después de un período de tiempo, permanente, etc.).

:::tip Aceleración en los accesos
El acceso a los archivos almacenados en el repositorio de objetos de AWS S3 puede acelerarse regionalmente mediante la [red de distribución de contenidos](content-delivery-network.html) de Modyo Connect.
:::