---
search: true
---

# Static Site Generation

El Static Site Generation (SSG), también conocido como generación de sitios estáticos, es un enfoque de construcción de sitios web en el que las páginas se generan de antemano durante el proceso de compilación y se almacenan como archivos HTML estáticos en el servidor. A diferencia de las aplicaciones web dinámicas tradicionales, en las que el contenido se genera en tiempo real en el servidor en respuesta a cada solicitud, los sitios estáticos generados de antemano se sirven directamente desde el servidor sin requerir ningún procesamiento adicional.

El proceso de Static Site Generation implica los siguientes pasos:

- **Compilación:** Durante la fase de compilación, se generan las páginas HTML estáticas en base a los datos y las plantillas definidas en el proyecto. Esto se puede hacer utilizando herramientas y generadores estáticos como Gatsby, Hugo, Jekyll, Next.js, entre otros.
- **Generación de contenido:** Durante la compilación, las herramientas de generación estática toman los datos y las plantillas definidas y generan las páginas HTML estáticas correspondientes para cada ruta o sección del sitio web. Esto puede incluir la generación de contenido dinámico como blogs, listados de productos o páginas de categorías.
- **Despliegue:** Una vez que las páginas HTML estáticas han sido generadas, se pueden cargar en un servidor web para su distribución. El servidor web puede ser tan simple como un servidor de archivos estáticos o utilizar servicios de alojamiento como Netlify, Amplify, Vercel o GitHub Pages.

Ventajas del SSG:

- **Rendimiento rápido:** Al servir páginas HTML estáticas pregeneradas, los sitios estáticos generados de antemano tienen un rendimiento rápido y un tiempo de carga reducido, ya que no requieren procesamiento en tiempo real en el servidor.
- **Seguridad mejorada:** Al eliminar la necesidad de un servidor de aplicaciones en tiempo de ejecución, los sitios estáticos reducen la superficie de ataque y mejoran la seguridad al no permitir la ejecución de código del lado del servidor.
- **Escalabilidad y resistencia:** Los sitios estáticos se pueden servir fácilmente desde una CDN (red de distribución de contenido), lo que permite una escalabilidad y una distribución global eficiente. Además, al no depender de recursos dinámicos, los sitios estáticos pueden manejar grandes volúmenes de tráfico sin degradar su rendimiento.
- **Facilidad de mantenimiento:** Al generar el contenido de antemano, el proceso de desarrollo y mantenimiento se simplifica, ya que los cambios en el contenido o la estructura del sitio pueden realizarse sin requerir operaciones de servidor o bases de datos.

Sin embargo, es importante tener en cuenta que los sitios estáticos generados de antemano pueden no ser adecuados para todos los casos de uso. Si se requiere contenido altamente dinámico o interacciones en tiempo real, puede ser más apropiado utilizar enfoques como el Server-Side Rendering (SSR) o las aplicaciones de una sola página (SPA) para lograr la interactividad necesaria.

Desventajas del SSG:

- **Limitaciones en la interactividad dinámica:** Debido a que las páginas se generan de antemano durante la compilación, el SSG tiene limitaciones en cuanto a la interactividad dinámica en comparación con las aplicaciones web dinámicas. La funcionalidad que requiere actualizaciones en tiempo real o interacciones complejas puede ser más difícil de lograr con un enfoque de SSG.
- **Mayor complejidad en proyectos a gran escala:** En proyectos grandes y complejos, mantener y actualizar múltiples páginas estáticas puede volverse más difícil en comparación con un sistema dinámico. Si hay muchos enlaces internos o cambios frecuentes en la estructura del sitio, puede requerir una planificación y gestión cuidadosas para mantener la coherencia y la eficiencia en el desarrollo.
- **Requiere una compilación previa:** Con el SSG, las páginas deben compilarse previamente antes de ser servidas. Esto significa que cualquier cambio en el contenido o en la estructura del sitio requiere una nueva compilación y un nuevo despliegue para que los cambios sean visibles. Si los cambios deben ser reflejados inmediatamente sin una compilación previa, puede ser necesario considerar otros enfoques, como el Server-Side Rendering (SSR) o las aplicaciones de una sola página (SPA).
- **Dificultad con contenido dinámico y personalizado:** Si el sitio requiere mostrar contenido dinámico o personalizado en función de las interacciones del usuario o de datos externos en tiempo real, el SSG puede tener limitaciones en comparación con enfoques más dinámicos. La generación previa de páginas puede dificultar la inclusión de contenido que cambia con frecuencia o se personaliza en función de condiciones específicas.
- **Mayor tiempo de compilación en proyectos grandes:** A medida que el proyecto crece en tamaño y complejidad, el tiempo necesario para compilar las páginas puede aumentar considerablemente. Esto puede ralentizar el flujo de trabajo de desarrollo y requerir una planificación adecuada para gestionar los tiempos de compilación en proyectos más grandes.

### ¿Cómo se implementa SSG en Modyo?

Dentro de Modyo se pueden implementar sitios que se ven estáticos a ojos del visitante, pero que mantienen sus características dinámicas a la hora de modificar el contenido. Esto se logra mediante el uso de capas de caché y sistemas de distribución de contenidos que hacen posible igualar las ventajas del SSG, sin perder la capacidad de publicar cambios de forma fácil y rápida, invalidando las copias cacheadas de la información en tiempo real.
