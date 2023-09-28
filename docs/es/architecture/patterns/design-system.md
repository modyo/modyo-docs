---
search: true
---

# Sistema de Diseño

Un sistema de diseño es un conjunto de recursos y metodologías que tiene como principal objetivo facilitar la creación y mantenimiento coherente de la apariencia visual y la experiencia del usuario en una marca, producto o servicio.

Un sistema de diseño ofrece elementos reutilizables, como componentes, patrones y guías, que aseguran una identidad visual uniforme en todas las aplicaciones y plataformas.

Su finalidad principal es mejorar la eficiencia y la consistencia en el proceso de diseño y desarrollo. Para lograrlo, promueve la colaboración entre equipos y evita la necesidad de crear todo desde cero en cada proyecto. Asimismo, fortalece la alineación entre los equipos de diseño, desarrollo y producto.

### Ventajas y Desventajas del uso de Sistemas de Diseño

Ventajas:

- **Consistencia:** Un sistema de diseño mantiene la consistencia en múltiples productos y plataformas al proporcionar un conjunto estándar de componentes y estilos.
- **Eficiencia:** Los equipos pueden trabajar más rápido al reutilizar componentes existentes, en lugar de diseñar y codificar elementos desde cero para cada nuevo proyecto.
- **Colaboración:** Fomenta una mejor colaboración entre los diseñadores y desarrolladores, al proporcionar un lenguaje visual común y directrices claras para la implementación.
- **Usabilidad y experiencia de usuario:** La consistencia proporcionada por un sistema de diseño mejora la experiencia de usuario, evitando la necesidad de aprender nuevas interfaces para cada producto.
- **Mantenibilidad:** Las actualizaciones y las correcciones de errores son más fáciles de implementar al utilizar componentes estandarizados.

Desventajas:

- **Tiempo y recursos:** Crear y mantener un sistema de diseño requiere una inversión significativa de tiempo y recursos, especialmente en las primeras etapas.
- **Flexibilidad limitada:** Los sistemas de diseño pueden ser restrictivos y limitar la creatividad al requerir el uso de componentes estándar.
- **Adopción y resistencia al cambio:** Puede ser un desafío lograr que todos los miembros del equipo adopten y sigan consistentemente el sistema de diseño.
- **Mantenibilidad:** El sistema de diseño debe evolucionar con los cambios en productos y necesidades de los usuarios, lo que requiere un compromiso continuo con su mantenimiento y actualización.
- **Sobre-estandarización:** Llevado al extremo, puede llevar a productos que se ven y se sienten demasiado similares, sin individualidad.

Un sistema de diseño bien implementado y mantenido puede ofrecer más ventajas que desventajas. Sin embargo, requiere una inversión continua y el compromiso del equipo para garantizar su éxito a largo plazo.

### Tipos de Sistema de Diseño

Los sistema de diseño puede incluir hojas de estilo, tipografías, iconos, librerías javascript y componentes web. Dependiendo de los artefactos que informan el sistema de diseño, existen dos implementaciones posibles:

#### Sistema de diseño tipo librería

Este enfoque de sistema de diseño tipo librería es recomendado para sitios públicos, ya que centraliza las dependencias y facilita su gestión.

Para implementar este tipo de sistema de diseño, lo ideal es cargar las dependencias en Modyo, usando las plantillas para guardar las hojas de estilo, librerías de JavaScript y los archivos binarios como activos.

  Para las librerías de JavaScript y hojas de estilo, es necesario agregarlas a una vista,  idealmente en el diseño del sitio, para ponerlas a disposición en el sitio y que puedan ser consumidas. Es importante mantener actualizadas las referencias de imágenes o tipografías que hagas en esos archivos. La manera más efectiva de lograrlo es mediante el uso de un helper de Liquid, que asegurará que la URL se mantenga al día en caso de ediciones o cambios en las imágenes o tipografías.

#### Sistema de diseño que incluye componentes

Si el sistema de diseño incluye componentes, la mejor opción es externalizar el desarrollo y usar el CLI de Modyo para subir los widgets a la plataforma; lo cual permite consumir el sistema de diseño como un paquete desde un registro público o privado.

Esto incluye snippets con CSS, HTML y parámetros configurables, así como widgets con Liquid y HTML.

### Implementación de un Sistema de Diseño

Implementar un sistema de diseño en la web involucra crear y mantener un conjunto coherente de estándares de diseño y componentes de interfaz de usuario (UI) reutilizables. Para ello, sigue estos pasos:

- **Definir los Estándares de Diseño:** Incluye colores, tipografías, espaciado, iconografía y otros elementos visuales comunes en toda tu web o aplicación. Documenta estos estándares en una guía de estilo o manual de marca.
- **Crear Componentes de UI Reutilizables:** Desarrolla una biblioteca de componentes de UI que puedas reutilizar en toda la web o aplicación, como botones, formularios, tarjetas y barras de navegación. Estos componentes deben crearse de manera que sean fácilmente reutilizables y modificables.
- **Documentar el Uso de Componentes:** Acompaña la creación de componentes con guías de implementación, mejores prácticas y ejemplos de uso.
- **Mantener el Sistema de Diseño:** Mantén y actualiza el sistema de diseño conforme cambian las necesidades de tu web o aplicación. Revisa y actualiza regularmente los componentes y estándares del sistema.
- **Herramientas de Implementación:** Utiliza herramientas como Storybook, Figma, Sketch y Adobe XD para crear, mantener y compartir sistemas de diseño.
- **Colaboración y Adopción:** Asegúrate que el equipo de desarrollo esta alineado con el sistema de diseño y lo incorpora en su flujo de trabajo. Considera asignar un propietario o equipo dedicado para supervisar y mantener el sistema de diseño.

:::tip Tip
Un sistema de diseño es más que una colección de componentes UI y guías de estilo; es una parte integral del proceso de diseño y desarrollo que fomenta la coherencia y mejora la colaboración entre diseñadores y desarrolladores.

:::

### Implementación de un sistema de diseño con Modyo

Existen diferentes formas de implementar sistemas de diseño en Modyo, dependiendo del caso de uso. A continuación, se describen dos enfoques:

1. **Sitios públicos**

Para los [sitios públicos](/es/architecture/patterns/public-site) puedes integrar el sistema de diseño en la plataforma aprovechando las librerías de [Bootstrap](https://getbootstrap.com/) que se incluyen en cada nuevo proyecto. Además, puedes utilizar las variables que están presentes en estas bibliotecas, que se aplican automáticamente a todos los componentes CSS. Esto te permite tener un control efectivo sobre aspectos clave del sitio y garantizar una alta consistencia entre los componentes.

Una variante de este primer escenario implica la externalización del sistema de diseño a una librería externa, no gestionada directamente en el sitio. A este enfoque se le conoce como _inyección dinámica_ o _en tiempo de ejecución_ de estilos. Para lograrla, debes incorporar el sistema de diseño en los sitios como una librería externa, alojada en un servidor al cual los desarrolladores del sistema de diseño tienen acceso y pueden publicar cambios.

En este caso es necesario tener un buen control de versiones mediante URLs bien definidas, ya que el caché del navegador o los sistemas de CDN pueden ocasionar problemas al invalidar y propagar los cambios.

2. **Sitios privados**

En el caso de [sitios privados](/es/architecture/patterns/private-site) más sofisticados puedes usar [micro frontends](/es/architecture/patterns/micro-frontend). En este escenario puedes implementar el sistema de diseño directamente dentro del componente, inyectando las definiciones de forma estática o durante el proceso de construcción o _build time_ mediante librerías versionadas dentro de un repositorio intermediario. Estas librerías se importan como dependencias y se empaquetan junto con el micro frontend, permitiendo adaptar los cambios de forma progresiva.

:::tip Técnica híbrida
Un enfoque híbrido considerar la combinación de librerías de inyección dinámica y estática, reutilizando código en un nivel superior y generando artefactos ubicuos según la necesidad de los equipos de desarrollo.
:::
