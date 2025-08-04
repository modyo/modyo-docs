---
search: true
---

# Static Site Generation (SSG)

Static Site Generation (SSG) es un enfoque de desarrollo web donde las páginas se crean durante la compilación y se almacenan como archivos HTML estáticos en el servidor. A diferencia de las aplicaciones web tradicionales que generan contenido en tiempo real, los sitios SSG se sirven directamente sin procesamiento adicional.

El proceso de SSG implica los siguientes pasos:

- **Compilación**: Generación de páginas HTML estáticas a partir de datos y plantillas (ej. con Gatsby, Hugo, Jekyll, Next.js).
- **Generación de contenido**: Las herramientas de generación estática crean las páginas HTML estáticas para cada ruta o sección del sitio, incluyendo contenido dinámico como blogs o listados de productos.
- **Despliegue**: Las páginas HTML estáticas se cargan en un servidor web para su distribución (ej. servidor de archivos estáticos, Netlify, Amplify, Vercel, GitHub Pages).

Ventajas del SSG:

- **Rendimiento rápido**: Tiempo de carga reducido al no requerir procesamiento en tiempo real en el servidor.
- **Seguridad mejorada**: Reduce la superficie de ataque al no permitir la ejecución de código del lado del servidor.
- **Escalabilidad y resistencia**: Fácilmente servible desde una CDN, permitiendo escalabilidad y distribución global eficiente. Al no depender de recursos dinámicos, manejan grandes volúmenes de tráfico sin degradar el rendimiento.
- **Facilidad de mantenimiento**: Simplifica el desarrollo y mantenimiento, ya que los cambios en contenido o estructura no requieren operaciones de servidor o bases de datos.

Sin embargo, los SSG pueden no ser adecuados para todos los casos de uso. Si se requiere contenido altamente dinámico o interacciones en tiempo real, enfoques como Server-Side Rendering (SSR) o Single-Page Applications (SPA) pueden ser más apropiados para lograr la interactividad necesaria.

Desventajas del SSG:

- **Limitaciones en la interactividad dinámica**: Dificultad para lograr funcionalidades que requieren actualizaciones en tiempo real o interacciones complejas.
- **Mayor complejidad en proyectos a gran escala**: En proyectos grandes y complejos, mantener y actualizar múltiples páginas estáticas puede ser más difícil que con un sistema dinámico. Requiere planificación y gestión cuidadosas para mantener la coherencia y eficiencia ante numerosos enlaces internos o cambios frecuentes en la estructura del sitio.
- **Necesidad de compilación previa**: Cualquier cambio en el contenido o estructura del sitio requiere una nueva compilación y despliegue para ser visible. Si los cambios deben reflejarse inmediatamente, se deben considerar otros enfoques como Server-Side Rendering (SSR) o Single-Page Applications (SPA).
- **Dificultad con contenido dinámico y personalizado**: Puede dificultar la inclusión de contenido dinámico o personalizado basado en interacciones del usuario o datos externos en tiempo real.
- **Mayor tiempo de compilación en proyectos grandes**: A medida que el proyecto crece, el tiempo de compilación puede aumentar considerablemente, ralentizando el flujo de trabajo de desarrollo. Se recomienda una planificación adecuada para gestionar estos tiempos.


### Implementación del SSG en Modyo

En Modyo, se pueden implementar sitios que, aunque estáticos para el visitante, mantienen características dinámicas al modificar el contenido. Esto se logra mediante capas de caché y sistemas de distribución de contenido que aprovechan las ventajas del SSG, sin perder la capacidad de publicar cambios de forma rápida y sencilla, invalidando las copias cacheadas en tiempo real.