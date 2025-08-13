---
search: true
---

# Sitio Híbrido

En Modyo, los sitios híbridos combinan características de sitios públicos y privados, permitiendo interacciones anónimas y reservando funcionalidades para usuarios registrados.

Son útiles en comercio electrónico, incorporación digital y personalización de experiencias post-inicio de sesión.

### Implementación de Sitios Híbridos en Modyo

Para implementar un sitio híbrido en Modyo, se combina un sitio público con la activación de un reino de usuarios en áreas específicas (zona privada). Tras el inicio de sesión, se pueden habilitar nuevas opciones de menú que dirijan a páginas _privadas_ con información relevante para el usuario autenticado o que realicen llamadas a APIs de integración externa.

Dado que los sitios híbridos incluyen un reino de usuarios, no permiten el mismo nivel de caché que los sitios públicos. Por ello, su uso debe justificarse por la necesidad de ofrecer funcionalidades distintivas a usuarios autenticados.


### Segmentación de Contenidos

La segmentación de contenidos personaliza y adapta el contenido mostrado a los usuarios según criterios o _segmentos_. Esta estrategia se basa en la comprensión de las audiencias para proporcionar una experiencia más pertinente y personalizada.

Los segmentos pueden definirse por diversos criterios, incluyendo:

- **Comportamiento del usuario**: Páginas visitadas, compras realizadas o interacciones previas con el sitio o la aplicación.
- **Información demográfica**: Edad, género, ubicación, educación y otros datos demográficos del usuario.
- **Intereses del usuario**: Intereses conocidos o inferidos, basados en comportamientos pasados o información proporcionada.
- **Etapa en el viaje del cliente**: Punto en el recorrido del cliente o embudo de ventas (ej. descubrimiento, consideración, decisión o fidelización).

En Modyo, los segmentos se definen individualmente para cada dominio de usuarios, permitiendo crear múltiples segmentos en paralelo. Estos segmentos pueden aplicarse tanto a contenidos como a aplicaciones web.

:::tip Segmentos
Para más información sobre la creación de segmentos en Modyo, revisa la sección [segmentos](/es/platform/customers/segments).
:::

### Uso de PWA

La implementación de una Progressive Web App (PWA) en sitios híbridos puede ser un reto, ya que requiere diferenciar las secciones de acceso público de las restringidas a usuarios registrados.

Una PWA es una aplicación instalable que debe mostrar contenido adaptado y relevante para la sesión del usuario. En lugar de replicar la apariencia de un sitio público convencional, debe ofrecer una experiencia personalizada que se ajuste a las preferencias y necesidades del usuario. De lo contrario, se asemejaría a convertir un sitio público en una aplicación, lo que podría resultar en una experiencia de usuario insatisfactoria.
