---
search: true
---

# Backend for Frontend (BFF)

El patrón Backend for Frontend (BFF) es un enfoque arquitectónico que optimiza y adapta el backend de una aplicación a las necesidades específicas de sus interfaces de usuario (UI).

En una arquitectura tradicional, un único backend suele manejar múltiples tipos de clientes (móviles, web, APIs), lo que puede complicar la gestión debido a sus diferentes requisitos y flujos de trabajo.

El patrón BFF resuelve esto añadiendo una capa de backend específica para cada tipo de cliente o interfaz de usuario. Cada BFF actúa como intermediario entre el frontend y el backend principal, gestionando solicitudes y respuestas específicas para cada cliente, lo que personaliza la experiencia del usuario y mejora la eficiencia.

Ventajas del patrón BFF:

- **Adaptabilidad**: Se adapta a las necesidades específicas de cada cliente y optimiza la experiencia del usuario.
- **Independencia del frontend**: Permite a los equipos de frontend y backend trabajar de forma independiente, realizando cambios sin afectar a otros componentes.
- **Mejora del rendimiento**: Optimiza las consultas y respuestas de datos para cada cliente, mejorando el rendimiento de la aplicación.
- **Facilidad de evolución**: Simplifica la evolución y el mantenimiento de la aplicación al separar responsabilidades, permitiendo cambios en una interfaz de usuario sin afectar a otras partes del sistema.


### Implementación de BFF con Modyo

Puedes implementar el patrón BFF en Modyo de dos formas:
1. **APIs en Modyo Connect**: Define microservicios ligeros de integración con sistemas centrales, generando una interfaz de APIs diseñada para las necesidades del frontend. Las APIs en Modyo Connect utilizan la tecnología de API Gateway de Amazon AWS [Amazon AWS](https://aws.amazon.com) y se integran con sistemas de [Single Sign On (SSO)](/es/architecture/patterns/sso) para la autenticación de usuarios.
2. **APIs externas**: Utiliza APIs proporcionadas por el cliente o terceros. Los [micro frontends](/es/architecture/patterns/micro-frontend) en la plataforma acceden a estas APIs directamente, con o sin autenticación, según se requiera.


:::tip Desacoplamiento de APIs
La arquitectura de Modyo enfatiza el desacoplamiento entre las capas de frontend y backend. De esta forma, las APIs son independientes y pueden desplegarse en diferentes infraestructuras, conectándose mediante HTTP.
:::


