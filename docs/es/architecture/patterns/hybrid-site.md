---
search: true
---

# Sitio Híbrido

En Modyo, los sitios híbridos combinan características de sitios públicos y privados. Permiten interacciones anónimas, a la vez que reservan funciones para usuarios registrados.

Los sitios híbridos son útiles en comercio electrónico, incorporación digital y personalización de experiencias tras el inicio de sesión.

### Implementación de Sitios Híbridos en Modyo

Para implementar un sitio híbrido en Modyo, debes utilizar una técnica que combina un sitio público con la adición de un reino de usuarios activado en áreas específicas del sitio (zona privada).  Una vez que el usuario inicie sesión, le puedes activar nuevas opciones en el menú, que lo conducen a páginas marcadas como _privadas_ con información relevante al usuario en sesión o hacer llamadas mediante un API de integración externa.

Los sitios híbridos, al tener la presencia de un reino de usuario, no permiten el mismo nivel de caché que los sitios públicos, por lo cual su uso debe estar justificado y debe brindar funcionalidades distintivas a usuarios autenticados.


### Segmentación de Contenidos

La segmentación de contenidos personaliza y adapta el contenido que se muestra a los usuarios, según criterios o _segmentos_. Esta estrategia se fundamenta en la comprensión de las distintas audiencias o grupos de usuarios y busca proporcionarles una experiencia más pertinente y personalizada.

Los segmentos pueden estar definidos por diversos criterios, incluyendo:

- **Comportamiento del usuario**: páginas visitadas, compras realizadas o interacciones anteriores con el sitio o la aplicación.
- **Información demográfica**: detalles como edad, género, ubicación, educación y otros datos demográficos del usuario.
- **Intereses del usuario**: lo que se conoce o infiere que le interesa al usuario, basado en sus comportamientos pasados o en la información proporcionada.
- **Etapa en el viaje del cliente**: punto en el que se encuentra el usuario en el recorrido del cliente o en el embudo de ventas. Por ejemplo, un usuario podría estar en la etapa de descubrimiento, consideración, decisión o fidelización.

En Modyo, los segmentos se definen de manera individual para cada dominio de usuarios, lo que permite crear varios segmentos en paralelo. Posteriormente, estos segmentos se pueden aplicar tanto a los contenidos como a las aplicaciones web.

:::tip Segmentos
Para más información sobre la creación de segmentos en Modyo, revisa la sección [segmentos](/es/platform/customers/segments).
:::

### Uso de PWA

La implementación de una Progressive Web App (PWA) en sitios híbridos puede ser un reto, ya que es necesario diferenciar las partes del sitio que son de acceso público de aquellas que son solamente para usuarios registrados.

Una PWA es una app instalable en dispositivos y debe mostrar contenido adaptado y relevante para la sesión del usuario. En lugar de replicar la apariencia de un sitio público convencional, debe brindar una experiencia personalizada que se ajuste a las preferencias y necesidades del usuario. De lo contrario, sería similar a convertir un sitio público en una aplicación, lo cual puede conllevar a una experiencia de usuario insatisfactoria.
