---
search: true
---

# Single Sign On (SSO)

El servicio de Single Sign-On (SSO) permite incorporar la autenticación de usuarios a las iniciativas de desarrollo con Modyo Connect. Los usuarios autenticados podrán compartir su sesión entre la plataforma Modyo y las llamadas al API Gateway, permitiendo el acceso a recursos protegidos no disponibles públicamente en Internet.

El servicio de SSO de Modyo Connect se implementa utilizando [KeyCloak](https://www.keycloak.org), una aplicación de código abierto patrocinada por [Red Hat](https://www.redhat.com) que ofrece soporte pagado adicional. KeyCloak se despliega sobre contenedores en modo clúster de alta disponibilidad, con capacidad de escalar. Modyo Connect otorga acceso al repositorio de la imagen de contenedor configurada para KeyCloak, permitiendo controlar personalizaciones de experiencia de usuario y flujos de autenticación no estándar.

## Pasos de Activación

Las solicitudes de despliegue de SSO sobre Modyo Connect se realizan mediante un ticket en el [Centro de Soporte de Modyo](https://support.modyo.com). En el ticket, se puede especificar si se requiere acceso a la administración total de la aplicación o la creación de reinos de usuarios con configuraciones específicas.

La activación de SSO sobre Modyo Connect requiere la existencia previa de una [base de datos](databases.html) debidamente configurada para el servicio.

:::warning Personalizaciones de KeyCloak
Las personalizaciones de experiencia de usuario y flujos de autenticación en KeyCloak son responsabilidad del cliente y no están incluidas como parte del servicio. Si se requiere apoyo de servicios profesionales en la implementación de una iniciativa de SSO, se debe contactar al ejecutivo de cuentas asignado.
:::

:::warning Modelo de Responsabilidad Compartida
Modyo no se hace responsable por las personalizaciones o vulnerabilidades en el código personalizado del cliente. Algunas personalizaciones podrían requerir modificaciones al actualizar el software base de KeyCloak. Es responsabilidad del cliente efectuar las adecuaciones de forma oportuna para disminuir los riesgos asociados a los procesos de actualización.
:::