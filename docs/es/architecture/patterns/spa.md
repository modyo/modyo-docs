---
search: true
---

# Single Page Application (SPA)

Las Single-Page Applications (SPA) son aplicaciones web que se cargan una sola vez en el navegador y se actualizan dinámicamente sin necesidad de recargar páginas.

En lugar de cargar páginas completas, las SPA utilizan manipulación del DOM y comunicación asíncrona para actualizar el contenido en la misma página, proporcionando una experiencia de usuario fluida y rápida.

Ventajas de las SPA:

- **Experiencia de usuario fluida**: Ofrecen una experiencia más rápida y fluida, ya que las actualizaciones de contenido se realizan dinámicamente y sin interrupciones.
- **Interactividad y navegación rápida**: Permiten una navegación ágil al actualizar solo los componentes necesarios, sin cargar páginas adicionales.
- **Mejora del rendimiento**: Reducen los tiempos de carga al disminuir la cantidad de datos y recursos a transmitir y procesar en cada interacción.
- **Desarrollo más eficiente**: Facilitan un desarrollo más eficiente mediante el uso de frameworks y bibliotecas modernas (ej. React, Angular, Vue.js) que ofrecen un enfoque basado en componentes y promueven la reutilización de código.

Desventajas de las SPA:

- **Mayor complejidad inicial**: Pueden tener una curva de aprendizaje más pronunciada debido a la necesidad de comprender y trabajar con frameworks y herramientas adicionales.
- **Mayor consumo de memoria**: Pueden requerir más memoria en el navegador al mantener todo el estado de la aplicación en memoria durante la navegación.
- **SEO y compartición social**: Los rastreadores de búsqueda y las vistas previas de enlaces pueden no interpretar correctamente el contenido dinámico, lo que presenta desafíos para el SEO y la compartición en redes sociales.
- **Dependencia de JavaScript**: Requieren que JavaScript esté habilitado en el navegador para funcionar correctamente.

:::tip Tip
Es crucial evaluar cuidadosamente las necesidades y requisitos del proyecto antes de optar por una SPA. Aunque ofrecen muchas ventajas, también presentan desafíos adicionales que deben considerarse.
:::


### Implementación de una SPA con Modyo

Para implementar una SPA con Modyo, se deben usar las capacidades de [Modyo Connect](/en/connect), que permiten configurar repositorios de objetos y redes de distribución de contenidos (CDNs) para el despliegue y mantenimiento de la SPA.

Los cambios se gestionan directamente desde el repositorio de código del servicio. Mediante automatizaciones, se pueden realizar despliegues e invalidaciones de caché al incorporar o mezclar los cambios.

:::tip Modyo 10
(Nota: En Modyo 10, la futura versión de la plataforma, habrá soporte directo desde la consola de administración web para el despliegue de módulos estáticos en la CDN. Esto proporcionará un sistema de hospedaje estático para trabajar con SPA y otras librerías, dejando a la plataforma en control de los despliegues y las invalidaciones de caché.)
:::