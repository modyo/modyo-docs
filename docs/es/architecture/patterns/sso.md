---
search: true
---

# Single Sign On

Single Sign-On (SSO) o inicio de sesión único, es un método de autenticación y acceso que permite a los usuarios iniciar sesión en múltiples sistemas y aplicaciones con una única credencial de autenticación, eliminando la necesidad de recordar y proporcionar credenciales separadas para cada aplicación.

El SSO se fundamenta en un sistema de confianza entre los proveedores de servicios y un proveedor de identidad centralizado. Al iniciar sesión en el proveedor de identidad, este genera un token de sesión que autentica al usuario en las aplicaciones y servicios que integran el entorno de SSO, lo que permite al usuario moverse entre los servicios sin realizar autenticaciones adicionales.

Ventajas de utilizar SSO:
- **Mejora la experiencia del usuario:** Simplifica el proceso de inicio de sesión, lo que agiliza el acceso a las aplicaciones, especialmente en entornos corporativos con numerosas aplicaciones.
- **Reduce el soporte técnico:** Disminuye  la cantidad de contraseñas que los usuarios deben recordar, reduciendo la necesidad de solicitudes de restablecimiento de contraseñas y problemas relacionados, que el equipo de soporte técnico debe atender.
- **Mejora la seguridad:** Centraliza la autenticación, lo que facilita monitorear y gestionar el acceso a varias aplicaciones. Los usuarios pueden centrarse en crear una contraseña sólida y además, las soluciones de SSO suelen incluir características de seguridad robustas, como la autenticación de dos factores.
- **Ahorra tiempo y aumenta la productividad:** Los usuarios pueden acceder rápidamente a todas las aplicaciones que necesitan sin iniciar sesión en cada una por separado.
- **Simplifica la administración:** Para los administradores de TI, la implementación de SSO permite gestionar un conjunto de credenciales por usuario en lugar de administrar el acceso a cada aplicación individualmente.

:::danger Seguridad
Es importante tener en cuenta que, si no se implementa correctamente, el SSO puede presentar riesgos de seguridad. Por ejemplo, si las credenciales de SSO de un usuario se ven comprometidas, un atacante podría obtener acceso a todas las aplicaciones a las que el usuario tiene acceso. Por lo tanto, es crucial implementar medidas de seguridad sólidas, como la autenticación de dos factores y políticas de contraseñas fuertes.
:::

### Implementación de SSO en Modyo

El SSO en Modyo delega la autenticación a un sistema central, lo que facilita la gestión de usuarios y la aplicación de políticas de seguridad centralizadas. Se puede implementar de dos formas:

1. Mediante el uso del [componente de SSO](/es/connect/components/infrastructure.html#single-sign-on-sso) de [Modyo Connect](/es/connect).
2. A través de la integración a un sistema de SSO del cliente.

Ambas opciones se benefician de la capacidad de integración de la plataforma con estándares como OpenID Connect (OIDC), SAML, Azure AD, Google, OAuth2, entre otros.

Al activar SSO dentro de Modyo, delegando la autenticación de los usuarios al sistema que hayas seleccionado. Esto significa que Modyo confía en el sistema de SSO para verificar la identidad de los usuarios y permitirles acceder a las aplicaciones y servicios. Una de las ventajas clave de esta delegación es que puedes aplicar políticas de seguridad específicas de manera centralizada en el sistema de SSO, lo que proporciona un nivel adicional de control y seguridad sobre el acceso a tus recursos.

La plataforma Modyo soporta la delegación a sistemas de SSO de dos formas principales:

1. Hacia los usuarios administradores con acceso a la consola Web.
2. Hacia usuarios finales mediante las configuraciones presentes en los [reinos de usuarios](/es/platform/customers/realms).

Ambas formas de integración son independientes entre sí, por lo que puedes definir topologías específicas para cada cliente, por ejemplo: Azure AD (SAML) para los administradores, KeyCloak (OIDC) para el reino de los usuarios con acceso a la aplicación transaccional, Azure AD (OIDC) para el reino de los agentes con acceso a la aplicación interna de ventas.

:::warning Tiempos de sesión
Cuando un usuario es dado de baja en el SSO o en el sistema de origen, los cambios en Modyo pueden no reflejarse de inmediato en el siguiente intento de autenticación. Esto puede llevar un tiempo adicional durante el cual el usuario eliminado todavía tienen acceso al sistema. Para evitar esto, recomendamos utilizar tiempos de expiración de sesión acordes a los requerimientos de seguridad de la empresa o implementar flujos de términos de sesión avanzados, como Single Logout.
:::



