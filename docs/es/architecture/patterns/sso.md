---
search: true
---

# Single Sign On

Single Sign-On (SSO), que se traduce como "inicio de sesión único", es un método de autenticación y acceso que permite a los usuarios iniciar sesión en múltiples sistemas y aplicaciones utilizando una única credencial de autenticación. En lugar de tener que recordar y proporcionar credenciales separadas para cada aplicación, el SSO permite a los usuarios autenticarse una vez y luego acceder a múltiples recursos sin necesidad de volver a ingresar sus credenciales.

El SSO se basa en un sistema de confianza entre los proveedores de servicios y un proveedor de identidad centralizado. Cuando un usuario inicia sesión en el proveedor de identidad con sus credenciales, se genera un token de sesión que se utiliza para autenticar al usuario en los diferentes servicios y aplicaciones que forman parte del entorno de SSO. De esta manera, el usuario puede navegar entre los servicios sin necesidad de autenticarse nuevamente.

Ventajas de usar un SSO:
- **Mejora la experiencia del usuario:** Al tener que recordar solo un nombre de usuario y una contraseña, se simplifica y agiliza el proceso de inicio de sesión. Esto es especialmente útil en entornos corporativos, donde los usuarios pueden necesitar acceder a muchas aplicaciones diferentes.
- **Reduce el soporte técnico:** Al tener menos contraseñas para recordar, es menos probable que los usuarios olviden sus credenciales, lo que puede reducir la cantidad de solicitudes de restablecimiento de contraseña y otros problemas relacionados que el equipo de soporte técnico necesita manejar.
- **Mejora la seguridad:** Aunque pueda parecer contradictorio, el SSO puede mejorar la seguridad. Los usuarios solo necesitan recordar una contraseña, por lo que pueden concentrarse en hacerla muy segura. Además, las soluciones de SSO suelen tener características de seguridad robustas, como autenticación de dos factores. Al centralizar la autenticación, también es más fácil monitorear y gestionar el acceso a varias aplicaciones.
- **Ahorra tiempo y aumenta la productividad:** Los usuarios pueden acceder rápidamente a todas las aplicaciones que necesitan sin tener que iniciar sesión en cada una de ellas individualmente.
- **Administración simplificada:** Para los administradores de TI, la implementación de SSO significa que solo necesitan administrar un conjunto de credenciales por usuario, en lugar de tener que gestionar el acceso a cada aplicación individualmente.

El SSO simplifica el proceso de inicio de sesión para los usuarios, mejora la usabilidad y reduce la carga de recordar múltiples conjuntos de credenciales. También ayuda a mejorar la seguridad, ya que los proveedores de servicios pueden confiar en la autenticación realizada por el proveedor de identidad centralizado, que suele tener controles de seguridad más robustos.

:::warning Seguridad
Es importante tener en cuenta que mientras SSO tiene muchos beneficios, también puede presentar riesgos si no se implementa correctamente. Por ejemplo, si las credenciales de SSO de un usuario se ven comprometidas, el atacante potencialmente tendría acceso a todas las aplicaciones a las que el usuario tiene acceso. Por lo tanto, es fundamental implementar medidas de seguridad robustas, como la autenticación de dos factores y políticas de contraseñas fuertes.
:::

### ¿Cómo se implementa el SSO con Modyo?

El SSO en Modyo se puede implementar de dos formas: mediante el uso del [componente de SSO](/es/connect/components/infrastructure.html#single-sign-on-sso) de [Modyo Connect](/es/connect), o mediante la integración a un sistema de SSO del cliente. Ambas formas se benefician de las capacidades nativas de integración que posee la plataforma , las cuales entregan compatibilidad con OpenID Connect (OIDC), SAML, Azure AD, Google, OAuth2, entre otros.


