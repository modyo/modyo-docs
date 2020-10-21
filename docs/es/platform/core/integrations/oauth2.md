---
search: true
---

### OAuth2

Para poder integrar un inicio de sesión con OAuth2 en Modyo, necesitarás los siguientes datos de tu proveedor de identidad:

- Nombre del servicio
- Descripción del servicio
- URL de autenticación: URL del servicio de autenticación OAuth2
- ID de cliente
- Clave (secret)
- Scope: Si tu servicio de autenticación OAuth2 usa múltiples espacios o ambientes para separar a los usuarios y quieres usar uno en específico en esta integración, deberás definirlo en este campo.
- Campo para inicio de sesión: Podrás elegir entre usar el correo de los usuarios de Modyo, o su nombre de usuario. Esta opción es útil si tu proveedor de autenticación OAuth2 utiliza, por ejemplo, un campo numérico y no un email como identificador.
- Placeholder para el inicio de sesión: Texto que se mostrará en el campo de identificación como placeholder si el usuario no ha rellenado el campo
- Usar SSL: Habilitar esta opción si tu servicio de autenticación OAuth2 usa una capa de sockets segura (SSL: _Secure Sockets Layer_)
