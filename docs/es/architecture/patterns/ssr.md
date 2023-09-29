---
search: true
---

# Server Side Rendering

El Server-Side Rendering (SSR) o renderizado en el lado del servidor, es una técnica de desarrollo web para generar y enviar al cliente una versión pre-renderizada de una página web desde el servidor, en lugar de enviar solo el código JavaScript y dejar que el cliente lo renderice en el navegador.

En el SSR, el servidor es responsable de procesar la solicitud del cliente y generar una respuesta completa, incluyendo el contenido HTML, CSS y, en algunos casos, JavaScript. Esto implica que el servidor ejecuta el código de la aplicación y genera el HTML final que se envía al navegador.

Ventajas del SSR:

- **Optimización para motores de búsqueda:** El contenido pre-renderizado es más accesible para los motores de búsqueda, lo que facilita su indexación y el posicionamiento en los resultados de búsqueda.
- **Mejor rendimiento inicial:** El usuario ve rápidamente el contenido visual sin esperar a que se cargue y ejecute el código JavaScript en el navegador.
- **Compatibilidad con dispositivos con recursos limitados:** Reduce la carga de procesamiento en el cliente, lo que es beneficioso en dispositivos móviles o navegadores más antiguos.
- **Mejor SEO y compartición en redes sociales:** Es más amigable con las redes sociales y los rastreadores de búsqueda, al proporcionar contenido completo y enriquecido para compartir y rastrear.

Desventajas del SSR:

- **Mayor carga en el servidor:** El SSR implica que el servidor debe generar y enviar el contenido HTML completo en cada solicitud, lo que puede aumentar la carga en el servidor, especialmente en aplicaciones con alta carga de solicitudes.
- **Menor interactividad:** Las interacciones y actualizaciones posteriores en la página pueden requerir solicitudes adicionales al servidor, lo que puede resultar en una menor interactividad en comparación con aplicaciones de una sola página (SPA).
- **Mayor complejidad de implementación:** Implementar el SSR puede requerir configuración y manejo más complejo en el servidor.

El Server Side Rendering es una técnica útil en escenarios donde el SEO y el rendimiento inicial son críticos. Sin embargo, su implementación requierede cuidado en la arquitectura y la ejecución debido a su impacto en la carga del servidor y la interactividad de la aplicación.

### Implementación de SSR en Modyo

En Modyo, el SSR se logra utilizando Liquid como lenguaje de plantillas. Liquid, creado por Shopify, es un lenguaje de plantillas ampliamente utilizado para generar contenido dinámico en aplicaciones web y tiendas en línea. Dentro de Modyo, Liquid es la base para el procesamiento de código en la plataforma.

:::tip Rendimiento de Liquid
Las plantillas procesadas con Liquid en Modyo se almacenan en varias capas de caché, lo que garantiza tiempos de respuesta reducidos y una experiencia de usuario excepcional, a la vez que se mantiene la naturaleza dinámica de estas plantillas.
:::