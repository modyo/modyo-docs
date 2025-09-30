---
search: true
---

# Single Sign-On (SSO)

Single Sign-On (SSO) es un método de autenticación que permite a los usuarios acceder a múltiples sistemas y aplicaciones con una única credencial, eliminando la necesidad de recordar y proporcionar credenciales separadas para cada una.

El SSO se basa en un sistema de confianza entre proveedores de servicios y un proveedor de identidad centralizado. Al iniciar sesión en el proveedor de identidad, se genera un token de sesión que autentica al usuario en las aplicaciones y servicios del entorno SSO, permitiendo la navegación entre ellos sin autenticaciones adicionales.

Ventajas del SSO:
- **Mejora la experiencia del usuario**: Simplifica el proceso de inicio de sesión, agilizando el acceso a las aplicaciones, especialmente en entornos corporativos.
- **Reduce el soporte técnico**: Disminuye la cantidad de contraseñas a recordar, reduciendo las solicitudes de restablecimiento y problemas relacionados para el equipo de soporte.
- **Mejora la seguridad**: Centraliza la autenticación, facilitando el monitoreo y la gestión del acceso a múltiples aplicaciones. Permite a los usuarios enfocarse en contraseñas robustas y las soluciones SSO suelen incluir características de seguridad avanzadas (ej. autenticación de dos factores).
- **Ahorra tiempo y aumenta la productividad**: Los usuarios acceden rápidamente a todas las aplicaciones sin iniciar sesión por separado en cada una.
- **Simplifica la administración**: Para los administradores de TI, permite gestionar un conjunto de credenciales por usuario en lugar de administrar el acceso a cada aplicación individualmente.

:::danger Seguridad
Es importante tener en cuenta que, si no se implementa correctamente, el SSO puede presentar riesgos de seguridad. Por ejemplo, si las credenciales de SSO de un usuario se ven comprometidas, un atacante podría obtener acceso a todas las aplicaciones a las que el usuario tiene acceso. Por lo tanto, es crucial implementar medidas de seguridad sólidas (ej. autenticación de dos factores, políticas de contraseñas fuertes).
:::

### Implementación de SSO en Modyo

El SSO en Modyo delega la autenticación a un sistema central, facilitando la gestión de usuarios y la aplicación de políticas de seguridad centralizadas. Se puede implementar de dos formas:

1. Mediante el [componente de SSO](/es/connect/components/infrastructure#single-sign-on-sso) de [Modyo Connect](/es/connect).
2. A través de la integración con un sistema de SSO del cliente.

Ambas opciones se benefician de la capacidad de integración de la plataforma con estándares como OpenID Connect (OIDC), SAML, Entra ID, Google, OAuth2, entre otros.

Al activar SSO en Modyo, se delega la autenticación de usuarios al sistema seleccionado. Esto significa que Modyo confía en el sistema SSO para verificar la identidad de los usuarios y permitirles acceder a las aplicaciones y servicios. Una ventaja clave de esta delegación es la posibilidad de aplicar políticas de seguridad específicas de forma centralizada en el sistema SSO, lo que proporciona un nivel adicional de control y seguridad sobre el acceso a los recursos.

La plataforma Modyo soporta la delegación a sistemas de SSO de dos formas principales:

1. Para usuarios administradores con acceso a la consola web.
2. Para usuarios finales mediante las configuraciones en los [reinos de usuarios](/es/platform/customers/overview).

Ambas formas de integración son independientes, permitiendo definir topologías específicas para cada cliente (ej. Entra ID (SAML) para administradores, KeyCloak (OIDC) para usuarios con acceso a la aplicación transaccional, Entra ID (OIDC) para agentes con acceso a la aplicación interna de ventas).

:::warning Tiempos de sesión
Cuando un usuario es dado de baja en el SSO o en el sistema de origen, los cambios en Modyo pueden no reflejarse de inmediato en el siguiente intento de autenticación. Esto puede resultar en un tiempo adicional durante el cual el usuario eliminado aún tiene acceso al sistema. Para evitarlo, se recomienda utilizar tiempos de expiración de sesión acordes a los requisitos de seguridad de la empresa o implementar flujos de terminación de sesión avanzados, como Single Logout.
:::



