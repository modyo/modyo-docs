---
search: true
---

# Sitio Híbrido

En la plataforma Modyo, los sitios híbridos se caracterizan por su combinación de características propias de sitios públicos y privados. Permiten la interacción anónima, a la vez que reservan ciertas funcionalidades para usuarios con una cuenta registrada.

Los sitios híbridos suelen ser especialmente útiles en contextos de comercio electrónico o incorporación digital. Sin embargo, también aportan valor en situaciones en las que se busca personalizar la experiencia de navegación y el contenido visualizado por el usuario tras iniciar sesión.

### Segmentación de Contenidos

La segmentación de contenidos es una estrategia enfocada en personalizar y adaptar el contenido que se muestra a los usuarios, basándose en determinados criterios o "segmentos". Esta estrategia se fundamenta en la comprensión de las distintas audiencias o grupos de usuarios y en proporcionarles una experiencia más pertinente y personalizada.

Los segmentos pueden estar definidos por diversos criterios, incluyendo:

- **Comportamiento del usuario**: lo que el usuario ha hecho en el sitio o aplicación, como las páginas que ha visitado, las compras que ha realizado o sus interacciones anteriores con el sitio o la aplicación.
- **Información demográfica**: detalles como la edad, el género, la ubicación, la educación, y otros datos demográficos del usuario.
- **Intereses del usuario**: lo que se conoce o se infiere que le interesa al usuario, basándose en sus comportamientos pasados o en la información que ha proporcionado.
- **Etapa en el viaje del cliente**: punto en el que se encuentra el usuario en el recorrido del cliente o en el embudo de ventas. Por ejemplo, un usuario podría estar en la etapa de descubrimiento, consideración, decisión o fidelización.

En Modyo, los segmentos se establecen de manera individual para cada dominio de usuarios, permitiendo la creación de múltiples segmentos en paralelo. Posteriormente, estos segmentos pueden ser aplicados tanto en los contenidos como en las aplicaciones web.

:::tip Segmentos
Para más información sobre la creación de segmentos dentro de Modyo, visita su [documentación oficial](/es/platform/customers/segments).
:::

### Uso de PWA

La implementación de una Progressive Web App (PWA) en sitios híbridos puede resultar un desafío, ya que requiere diferenciar las partes del sitio que son de acceso público de aquellas que están destinadas únicamente a los usuarios registrados.

Una PWA, siendo una aplicación instalable en el dispositivo, debe presentar contenido adaptado y relevante para la sesión del usuario. En lugar de replicar la apariencia de un sitio público convencional, debería ofrecer una experiencia personalizada que se ajuste a las preferencias y necesidades del usuario. De lo contrario, sería similar a convertir un sitio público en una aplicación, lo cual podría desembocar en una experiencia de usuario insatisfactoria.


### ¿Cómo se implementan sitios híbridos con Modyo?

La implementación de sitios híbridos dentro de Modyo se realiza utilizando una técnica combinada de sitio público con la adición de un reino de usuarios, el cual será activado en secciones específicas del sitio (zona privada). Una vez que el usuario inicie sesión, se le podrán activar nuevas opciones en el menú, que lo pueden conducir a páginas marcadas como “privadas” sobre las cuales se puede desplegar información relevante al usuario en sesión, o hacer llamadas mediante un API de integración externa.

Los sitios híbridos, al tener la presencia de un reino de usuario, no permiten el mismo nivel de caché que los sitios 100% públicos. Es por ello que su uso debe estar justificado y que permitan ofrecer una funcionalidad diferenciadora real a los usuarios que se autentican.
