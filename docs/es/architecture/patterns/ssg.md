---
search: true
---

# Static Site Generation

El Static Site Generation (SSG) o generación de sitios estáticos, es un enfoque en el desarrollo web en el cual las páginas se crean de antemano durante el proceso de compilación y se almacenan como archivos HTML estáticos en el servidor. A diferencia de las aplicaciones web tradicionales, en las que el contenido se genera en tiempo real en respuesta a cada solicitud, los sitios estáticos generados previamente se sirven directamente desde el servidor sin necesidad de procesamiento adicional.

El proceso de SSG implica los siguientes pasos:

- **Compilación:** Se generan las páginas HTML estáticas en función de los datos y las plantillas definidas en el proyecto. Esto se puede lograr utilizando herramientas y generadores estáticos como Gatsby, Hugo, Jekyll, Next.js, entre otros.
- **Generación de contenido:** Durante la compilación, las herramientas de generación estática toman los datos y las plantillas definidas y generan las páginas HTML estáticas correspondientes para cada ruta o sección del sitio web. Esto puede incluir la generación de contenido dinámico como blogs, listados de productos o páginas de categorías.
- **Despliegue:** Una vez generadas las páginas HTML estáticas, se cargan en un servidor web para su distribución. El servidor web puede ser tan simple como un servidor de archivos estáticos o utilizar servicios de alojamiento como Netlify, Amplify, Vercel o GitHub Pages.

Ventajas del SSG:

- **Rendimiento rápido:** Su rendimiento es rápido y el tiempo de carga reducido, ya que no requiere procesamiento en tiempo real en el servidor.
- **Seguridad mejorada:** Reduce la superficie de ataque y mejora la seguridad al no permitir la ejecución de código del lado del servidor.
- **Escalabilidad y resistencia:** Se puede servir fácilmente desde una red de distribución de contenido (CDN), lo que permite escalabilidad y distribución global eficiente. Además, al no depender de recursos dinámicos, los sitios estáticos pueden manejar grandes volúmenes de tráfico sin degradar su rendimiento.
- **Facilidad de mantenimiento:** El proceso de desarrollo y mantenimiento se simplifica, ya que los cambios en el contenido o la estructura del sitio pueden realizarse sin requerir operaciones de servidor o bases de datos.

Sin embargo, es importante tener en cuenta que los SSG pueden no ser adecuados para todos los casos de uso. Si se requiere contenido altamente dinámico o interacciones en tiempo real, puede ser más apropiado utilizar enfoques como el Server-Side Rendering (SSR) o las aplicaciones de una sola página (SPA) para lograr la interactividad necesaria.

Desventajas del SSG:

- **Limitaciones en la interactividad dinámica:** Pueden ser más difícil lograr funcionalidades que requieren actualizaciones en tiempo real o interacciones complejas.
- **Mayor complejidad en proyectos a gran escala:** En proyectos grandes y complejos, mantener y actualizar múltiples páginas estáticas puede ser más difícil en comparación con un sistema dinámico. En casos donde existen numerosos enlaces internos o cambios frecuentes en la estructura del sitio, se requiere de planificación y gestión cuidadosas para mantener la coherencia y la eficiencia en el desarrollo.
- **Necesidad de compilación previa:** Las páginas deben compilarse previamente antes de ser servidas, lo que significa que cualquier cambio en el contenido o en la estructura del sitio requiere una nueva compilación y un nuevo despliegue para que los cambios sean visibles. Si los cambios deben ser reflejados inmediatamente sin una compilación previa, puede ser necesario considerar otros enfoques, como Server Side Rendering (SSR) o aplicaciones de una sola página (SPA).
- **Dificultad con contenido dinámico y personalizado:** Puede dificultar la inclusión de contenido dinámico o personalizado en función de interacciones del usuario o de datos externos en tiempo real.
- **Mayor tiempo de compilación en proyectos grandes:** A medida que el proyecto crece en tamaño y complejidad, el tiempo necesario para compilar las páginas puede aumentar considerablemente, alentando el flujo de trabajo de desarrollo.  Por lo que recomendamos una planificación adecuada para gestionar tiempos de compilación en proyectos más grandes.


### Implementación del SSG en Modyo

Dentro de Modyo se pueden implementar sitios que se ven estáticos a ojos del visitante, pero que mantienen sus características dinámicas a la hora de modificar el contenido. Esto se logra mediante el uso de capas de caché y sistemas de distribución de contenidos que aprovechan las ventajas del SSG, sin perder la capacidad de publicar cambios de forma fácil y rápida, invalidando las copias cacheadas de la información en tiempo real.