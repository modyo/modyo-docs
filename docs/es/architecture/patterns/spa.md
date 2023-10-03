---
search: true
---

# Single Page Application

Las Single-Page Applications (SPAs) son aplicaciones web que se cargan una sola vez en el navegador y luego se actualizan y modifican dinámicamente sin necesidad de cargar páginas adicionales.

En lugar de cargar páginas completamente nuevas, las SPAs utilizan técnicas de manipulación del DOM y comunicación asíncrona para actualizar el contenido en la misma página, proporcionando una experiencia fluida y rápida al usuario.

Ventajas de las SPAs:

- **Experiencia de usuario fluida:** Ofrecen una experiencia más rápida y fluida para los usuarios, ya que las actualizaciones de contenido se realizan de forma dinámica y sin interrupciones.
- **Interactividad y navegación rápida:** Permiten una navegación más rápida y fluida en la aplicación, al solo actualizar los componentes necesarios y no cargar páginas adicionales.
- **Mejora del rendimiento:** Mejoran el rendimiento general de la aplicación y reducen los tiempos de carga al disminuir la cantidad de datos y recursos que se deben transmitir y procesar en cada interacción.
- **Desarrollo más eficiente:** Permiten un desarrollo más eficiente al utilizar frameworks y bibliotecas modernas, como React, Angular o Vue.js, que ofrecen un enfoque basado en componentes y facilitan la reutilización de código.

Desventajas de las SPAs:

- **Mayor complejidad inicial:** Pueden tener una curva de aprendizaje más pronunciada debido a la necesidad de comprender y trabajar con frameworks y herramientas adicionales.
- **Mayor consumo de memoria:** Pueden requerir más memoria en el navegador debido a la necesidad de mantener todo el estado de la aplicación en memoria al navegar.
- **SEO y compartición social:** Los rastreadores de búsqueda y las vistas previas de enlaces pueden no interpretar correctamente el contenido dinámico de las SPAs, lo que puede presentar desafíos relacionados con el SEO y con compartir en redes sociales.
- **Dependencia de JavaScript:** Requieren que los usuarios tengan Javascript habilitado en su navegador para funcionar correctamente.

:::tip Tip
Es importante evaluar cuidadosamente las necesidades del proyecto y los requisitos específicos antes de optar por desarrollar una SPA. Aunque las SPAs ofrecen muchas ventajas, también presentan desafíos adicionales que deben considerarse.
:::


### Implementación de una SPA con Modyo

Para implementar una SPA con Modyo debes usar las capacidades de [Modyo Connect](/en/connect), dentro del cual puedes configurar repositorios de objetos y redes de distribución de contenidos (CDNs) que permitirán el despliegue y posterior mantención de la SPA.

Los cambios son gestionados directamente por el repositorio de código del servicio y mediante el uso de automatizaciones puedes realizar despliegues e invalidaciones de caché al momento de incorporar o mezclar los cambios.

:::tip Modyo 10
En Modyo 10, la futura versión de la plataforma, habrá soporte directo desde la consola de administración web para el despliegue de módulos estáticos en la CDN. Esto proporcionará un sistema de hospedaje estático para trabajar con SPAs y otro tipo de librerías, dejando a la plataforma en control de los despliegues y las invalidaciones de caché.
:::
