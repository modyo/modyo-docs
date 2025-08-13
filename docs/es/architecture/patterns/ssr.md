---
search: true
---

# Server-Side Rendering (SSR)

Server-Side Rendering (SSR) es una técnica de desarrollo web que genera y envía al cliente una versión pre-renderizada de una página web desde el servidor, en lugar de que el cliente la renderice en el navegador a partir de código JavaScript.

En SSR, el servidor procesa la solicitud del cliente y genera una respuesta completa (HTML, CSS y, en algunos casos, JavaScript). Esto implica que el servidor ejecuta el código de la aplicación y produce el HTML final que se envía al navegador.

Ventajas del SSR:

- **Optimización para motores de búsqueda**: El contenido pre-renderizado es más accesible para los motores de búsqueda, facilitando su indexación y posicionamiento.
- **Mejor rendimiento inicial**: El usuario visualiza el contenido rápidamente, sin esperar la carga y ejecución del JavaScript en el navegador.
- **Compatibilidad con dispositivos de recursos limitados**: Reduce la carga de procesamiento en el cliente, beneficioso para dispositivos móviles o navegadores antiguos.
- **Mejor SEO y compartición en redes sociales**: Más amigable con redes sociales y rastreadores de búsqueda, al proporcionar contenido completo y enriquecido para compartir y rastrear.

Desventajas del SSR:

- **Mayor carga en el servidor**: El servidor debe generar y enviar el contenido HTML completo en cada solicitud, lo que puede aumentar su carga, especialmente en aplicaciones con alta demanda.
- **Menor interactividad**: Las interacciones y actualizaciones posteriores pueden requerir solicitudes adicionales al servidor, resultando en menor interactividad comparado con Single-Page Applications (SPA).
- **Mayor complejidad de implementación**: La implementación de SSR puede requerir una configuración y manejo más complejos en el servidor.

SSR es una técnica útil en escenarios donde el SEO y el rendimiento inicial son críticos. Sin embargo, su implementación requiere cuidado en la arquitectura y la ejecución debido a su impacto en la carga del servidor y la interactividad de la aplicación.

### Implementación de SSR en Modyo

En Modyo, el SSR se logra utilizando Liquid como lenguaje de plantillas. Liquid, creado por Shopify, es un lenguaje de plantillas ampliamente utilizado para generar contenido dinámico en aplicaciones web y tiendas en línea. En Modyo, Liquid es la base para el procesamiento de código en la plataforma.

:::tip Rendimiento de Liquid
Las plantillas procesadas con Liquid en Modyo se almacenan en varias capas de caché, lo que garantiza tiempos de respuesta reducidos y una experiencia de usuario excepcional, manteniendo la naturaleza dinámica de estas plantillas.
:::