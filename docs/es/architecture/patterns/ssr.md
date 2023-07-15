---
search: true
---

# Server Side Rendering

El Server-Side Rendering (SSR), también conocido como renderizado en el lado del servidor, es una técnica utilizada en
el desarrollo web para generar y enviar al cliente una versión pre-renderizada de una página web desde el servidor, en
lugar de enviar solo el código JavaScript y dejar que el cliente lo renderice en el navegador.

En el SSR, el servidor es responsable de procesar la solicitud del cliente y generar una respuesta completa, incluyendo
el contenido HTML, CSS y, en algunos casos, JavaScript. Esto implica que el servidor ejecuta el código de la aplicación
y genera el HTML final que se envía al navegador.

Ventajas del SSR:

- **Optimización para motores de búsqueda:** Al generar y enviar una versión pre-renderizada de la página al cliente, el
  contenido es más accesible para los motores de búsqueda, lo que facilita la indexación y el posicionamiento en los
  resultados de búsqueda.
- **Mejor rendimiento inicial:** Al recibir una versión pre-renderizada de la página desde el servidor, el usuario ve
  rápidamente el contenido visual sin esperar a que se cargue y ejecute el código JavaScript en el navegador.
- **Compatibilidad con dispositivos con recursos limitados:** El SSR puede ser beneficioso para dispositivos con
  recursos limitados, como dispositivos móviles o navegadores más antiguos, ya que reducen la carga de procesamiento en
  el cliente.
- **Mejor SEO y compartición en redes sociales:** Al tener contenido pre-renderizado en el servidor, las páginas SSR se
  comportan de manera más amigable con las redes sociales y los rastreadores de búsqueda al proporcionar contenido
  completo y enriquecido para compartir y rastrear.

Desventajas del SSR:

- **Mayor carga en el servidor:** El SSR implica que el servidor debe generar y enviar el contenido HTML completo en
  cada solicitud, lo que puede aumentar la carga en el servidor, especialmente en aplicaciones con alta carga de
  solicitudes.
- **Menor interactividad:** Debido a que el contenido se pre-renderiza en el servidor, las interacciones y
  actualizaciones posteriores en la página pueden requerir solicitudes adicionales al servidor, lo que puede resultar en
  una menor interactividad en comparación con las aplicaciones de una sola página (SPA).
- **Mayor complejidad de implementación:** Implementar el SSR puede requerir una configuración y un manejo más
  complejos en el servidor para generar y mantener las vistas pre-renderizadas de las páginas.

El Server-Side Rendering es una técnica que puede ser especialmente útil en escenarios donde el SEO y el rendimiento
inicial son consideraciones críticas. Sin embargo, también requiere un enfoque cuidadoso en cuanto a la arquitectura y
la implementación, ya que implica una mayor carga en el servidor y puede afectar la interactividad de la aplicación.

### ¿Cómo se implementa SSR en Modyo?

En Modyo, el SSR se implementa utilizando Liquid como lenguaje de plantillas. Liquid es un lenguaje de plantillas
creado por Shopify que se utiliza comúnmente para generar contenido dinámico en aplicaciones web y tiendas en línea.
Dentro de Modyo, Liquid se utiliza como lenguaje de plantillas base para todo el procesamiento del código dentro de
la plataforma.

:::tip Rendimiento de Liquid
Las plantillas procesadas con Liquid dentro de Modyo se almacenan en diferentes capas de caché,
permitiendo entregar siempre tiempos de respuesta reducidos, manteniendo una excelente experiencia de usuario y
conservando el carácter dinámico del uso de este tipo de plantillas.
:::