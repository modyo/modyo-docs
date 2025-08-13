---
search: true
---

# Sistema de Diseño

Un sistema de diseño es un conjunto de recursos y metodologías cuyo objetivo principal es facilitar la creación y el mantenimiento coherente de la apariencia visual y la experiencia de usuario en una marca, producto o servicio.

Un sistema de diseño ofrece elementos reutilizables, como componentes, patrones y guías, que aseguran una identidad visual uniforme en todas las aplicaciones y plataformas.

Su finalidad es mejorar la eficiencia y la consistencia en el proceso de diseño y desarrollo. Promueve la colaboración entre equipos, evita la creación desde cero en cada proyecto y fortalece la alineación entre los equipos de diseño, desarrollo y producto.

### Ventajas y Desventajas del uso de Sistemas de Diseño

Ventajas:

- **Consistencia**: Mantiene la consistencia en múltiples productos y plataformas mediante un conjunto estándar de componentes y estilos.
- **Eficiencia**: Acelera el trabajo de los equipos al reutilizar componentes existentes, evitando diseñar y codificar desde cero.
- **Colaboración**: Fomenta la colaboración entre diseñadores y desarrolladores al proporcionar un lenguaje visual común y directrices claras.
- **Usabilidad y experiencia de usuario**: Mejora la experiencia de usuario al evitar la necesidad de aprender nuevas interfaces para cada producto.
- **Mantenibilidad**: Facilita las actualizaciones y correcciones de errores al utilizar componentes estandarizados.

Desventajas:

- **Tiempo y recursos**: Requiere una inversión significativa de tiempo y recursos para su creación y mantenimiento, especialmente en las etapas iniciales.
- **Flexibilidad limitada**: Puede ser restrictivo y limitar la creatividad al requerir el uso de componentes estándar.
- **Adopción y resistencia al cambio**: La adopción consistente por parte de todos los miembros del equipo puede ser un desafío.
- **Mantenibilidad**: Exige un compromiso continuo para su mantenimiento y actualización, ya que debe evolucionar con los productos y las necesidades de los usuarios.
- **Sobre-estandarización**: Un uso extremo puede resultar en productos visualmente demasiado similares, carentes de individualidad.

Un sistema de diseño bien implementado y mantenido puede ofrecer más ventajas que desventajas. Sin embargo, requiere una inversión continua y el compromiso del equipo para garantizar su éxito a largo plazo.

### Tipos de Sistema de Diseño

Los sistemas de diseño pueden incluir hojas de estilo, tipografías, iconos, librerías javascript y componentes web. Dependiendo de los artefactos que informan el sistema de diseño, existen dos implementaciones posibles:

#### Sistema de diseño tipo librería

Este enfoque de sistema de diseño tipo librería es recomendado para sitios públicos, ya que centraliza las dependencias y facilita su gestión.

Para implementar este tipo de sistema de diseño, lo ideal es cargar las dependencias en Modyo, usando las plantillas para guardar las hojas de estilo, librerías de JavaScript y los archivos binarios como activos.

Las librerías JavaScript y hojas de estilo deben agregarse a una vista (idealmente en el diseño del sitio) para su consumo. Para mantener actualizadas las referencias a imágenes o tipografías, se recomienda usar un helper de Liquid, que asegurará la URL correcta ante ediciones o cambios.

#### Sistema de diseño que incluye componentes

Si el sistema de diseño incluye componentes, la mejor opción es externalizar el desarrollo y usar el CLI de Modyo para subir los widgets a la plataforma; lo cual permite consumir el sistema de diseño como un paquete desde un registro público o privado.

Esto incluye snippets con CSS, HTML y parámetros configurables, así como widgets con Liquid y HTML.

### Implementación de un Sistema de Diseño

Implementar un sistema de diseño en la web involucra crear y mantener un conjunto coherente de estándares de diseño y componentes de interfaz de usuario (UI) reutilizables. Para ello, sigue estos pasos:

- **Definir Estándares de Diseño**: Establece y documenta los elementos visuales comunes (colores, tipografías, espaciado, iconografía) en una guía de estilo o manual de marca.
- **Crear Componentes de UI Reutilizables**: Desarrolla una biblioteca de componentes de UI (botones, formularios, tarjetas, barras de navegación) que sean fácilmente reutilizables y modificables.
- **Documentar el Uso de Componentes**: Acompaña los componentes con guías de implementación, mejores prácticas y ejemplos de uso.
- **Mantener el Sistema de Diseño**: Actualiza el sistema de diseño regularmente para adaptarse a las necesidades cambiantes de la web o aplicación.
- **Herramientas de Implementación**: Utiliza herramientas como Storybook, Figma, Sketch y Adobe XD para crear, mantener y compartir el sistema de diseño.
- **Fomentar Colaboración y Adopción**: Asegura la alineación del equipo de desarrollo con el sistema de diseño y su incorporación en el flujo de trabajo. Considera asignar un propietario o equipo dedicado.

:::tip Tip
Un sistema de diseño es más que una colección de componentes UI y guías de estilo; es una parte integral del proceso de diseño y desarrollo que fomenta la coherencia y mejora la colaboración entre diseñadores y desarrolladores.

:::

### Implementación de un sistema de diseño con Modyo

Existen diferentes formas de implementar sistemas de diseño en Modyo, dependiendo del caso de uso. A continuación, se describen dos enfoques:

1. **Sitios públicos**

Para [sitios públicos](/es/architecture/patterns/public-site), puedes integrar el sistema de diseño aprovechando las librerías de [Bootstrap](https://getbootstrap.com/) incluidas en cada nuevo proyecto. Las variables de estas librerías se aplican automáticamente a los componentes CSS, permitiendo un control efectivo sobre aspectos clave del sitio y garantizando alta consistencia.

Una variante de este primer escenario implica la externalización del sistema de diseño a una librería externa, no gestionada directamente en el sitio. A este enfoque se le conoce como _inyección dinámica_ o _en tiempo de ejecución_ de estilos. Para lograrla, debes incorporar el sistema de diseño en los sitios como una librería externa, alojada en un servidor al cual los desarrolladores del sistema de diseño tienen acceso y pueden publicar cambios.

En este caso es necesario tener un buen control de versiones mediante URLs bien definidas, ya que el caché del navegador o los sistemas de CDN pueden ocasionar problemas al invalidar y propagar los cambios.

2. **Sitios privados**

Para [sitios privados](/es/architecture/patterns/private-site) más sofisticados, se pueden usar [micro frontends](/es/architecture/patterns/micro-frontend). En este escenario, el sistema de diseño se implementa directamente dentro del componente, inyectando las definiciones de forma estática o durante el _build time_ mediante librerías versionadas en un repositorio intermediario. Estas librerías se importan como dependencias y se empaquetan con el micro frontend, permitiendo adaptar los cambios progresivamente.

:::tip Técnica híbrida
Un enfoque híbrido considera la combinación de librerías de inyección dinámica y estática, reutilizando código a un nivel superior y generando artefactos ubicuos según la necesidad de los equipos de desarrollo.
:::
