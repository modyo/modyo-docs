---
search: true
---

# Backend for Frontend

El patrón de arquitectura Backend for Frontend (BFF) es un enfoque que optimiza y adapta el backend de una aplicación a las necesidades específicas de las interfaces de usuario (UI).

En una arquitectura tradicional, el backend de una aplicación suele manejar múltiples tipos de clientes o interfaces, como aplicaciones móviles, web y servicios API, lo que puede complicar la gestión, debido a diferentes requerimientos y flujos de trabajo.

El patrón BFF resuelve esto añadiendo una capa de backend específica para cada tipo de cliente o interfaz de usuario. Cada BFF actúa como intermediario entre el frontend y el backend principal, gestionando solicitudes y respuestas específicas para cada cliente. Esto personaliza la experiencia del usuario y mejora la eficiencia.

Ventajas del patrón BFF:

- **Adaptabilidad:** Se adapta a las necesidades de cada cliente y a las necesidades de visualización, optimizando la experiencia del usuario.
- **Independencia del frontend:** Los equipos de frontend y backend pueden trabajar de manera independiente y realizar cambios sin afectar a los otros componentes.
- **Mejora de rendimiento:** Optimiza consultas y respuestas de datos para cada cliente, mejorando así el rendimiento de la aplicación.
- **Facilidad de evolución:** Simplifica la evolución y mantenimiento de la aplicación al separar responsabilidades. Se pueden realizar cambios en una interfaz de usuario sin afectar a otras partes del sistema.


### Implementación de BFF con Modyo

Puedes implementar BFF en Modyo de dos formas:
1. Con APIs en [Modyo Connect](/es/connect) para definir microservicios livianos de integración con sistemas centrales de cada cliente, generando una interfaz de APIs diseñada especialmente para las necesidades del frontend. Las APIs en Modyo Connect usan la tecnología de API Gateway de Amazon AWS [Amazon AWS](https://aws.amazon.com) y se integran a sistemas de [Single Sign On (SSO)](/es/architecture/patterns/sso) para autenticación de usuarios.
2. Usando APIs proporcionadas por el cliente o terceros. Los [micro frontends](/es/architecture/patterns/micro-frontend) en la plataforma acceden a estas APIs directamente, con o sin autenticación, según se requiera.


:::tip Desacoplamiento de APIs
La arquitectura de Modyo enfatiza que las capas de frontend y backend esten desacopladas. De esta forma, las APIs son independientes y pueden desplegarse en diferentes infraestructuras, conectándose mediante HTTP.
:::


