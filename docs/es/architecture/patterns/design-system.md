---
search: true
---

# Sistema de Diseño

Un sistema de diseño es una metodología y conjunto de recursos que permite crear y mantener de manera coherente y eficiente la apariencia visual y la experiencia de usuario de una marca, producto o servicio. El sistema de diseño proporciona una serie de elementos reutilizables, como componentes, patrones, guías y principios de diseño, que se utilizan para construir interfaces y mantener una identidad visual consistente en todas las aplicaciones y plataformas.

El objetivo principal de un sistema de diseño es mejorar la eficiencia y la consistencia en el proceso de diseño y desarrollo, al tiempo que garantiza una experiencia de usuario unificada y de alta calidad. Al utilizar componentes y patrones predefinidos, los diseñadores y desarrolladores pueden acelerar el proceso de creación de interfaces, evitando la necesidad de diseñar y desarrollar desde cero en cada ocasión.

Además, un sistema de diseño promueve la colaboración y la alineación entre los equipos de diseño, desarrollo y producto, al proporcionar una base común de elementos y directrices que todos pueden seguir. Esto ayuda a mantener una coherencia visual y de interacción en todas las aplicaciones y contribuye a construir una identidad de marca sólida y reconocible.

### Ventajas y Desventajas del uso de Sistemas de Diseño

Un sistema de diseño puede ofrecer múltiples beneficios, pero también tiene sus propios desafíos. Aquí están algunas de las ventajas y desventajas:

Ventajas:

- **Consistencia**: Un sistema de diseño ayuda a mantener la consistencia en múltiples productos y plataformas al proporcionar un conjunto estándar de componentes y estilos.
- **Eficiencia**: Los equipos pueden trabajar más rápido al reutilizar los componentes existentes, en lugar de diseñar y codificar elementos desde cero para cada nuevo proyecto.
- **Colaboración**: Fomenta una mejor colaboración entre los diseñadores y desarrolladores, al proporcionar un lenguaje visual común y directrices claras para la implementación.
- **Usabilidad y Experiencia de Usuario**: La consistencia proporcionada por un sistema de diseño puede conducir a una mejor experiencia de usuario, ya que los usuarios no tienen que aprender nuevas interfaces para cada producto.
- **Mantenibilidad**: Las actualizaciones y las correcciones de errores son más fáciles de implementar a través de la base de código cuando se utilizan componentes estandarizados.

Desventajas:

- **Tiempo y Recursos**: Crear y mantener un sistema de diseño puede requerir una inversión significativa de tiempo y recursos, especialmente en las primeras etapas.
- **Flexibilidad Limitada**: Los sistemas de diseño pueden ser restrictivos y limitar la creatividad al requerir el uso de componentes estándar.
- **Adopción y Resistencia al Cambio**: Puede ser un desafío lograr que todos los miembros del equipo adopten y sigan consistentemente el sistema de diseño.
- **Mantenimiento**: A medida que los productos y las necesidades de los usuarios evolucionan, el sistema de diseño también debe evolucionar. Esto requiere un compromiso continuo con el mantenimiento y la actualización del sistema.
- **Sobre-estandarización**: Si no se maneja adecuadamente, podría haber una sobre-estandarización, lo que podría llevar a productos que se ven y se sienten demasiado similares, y carecen de individualidad.

Un sistema de diseño bien implementado y mantenido puede ofrecer más ventajas que desventajas. Sin embargo, requiere una inversión continua y el compromiso del equipo para garantizar su éxito a largo plazo.

### Tipos de Sistema de Diseño

Los sistema de diseño puede incluir hojas de estilo, tipografías, iconos, librerías javascript o, incluso, componentes web. Dependiendo de los artefactos que informan este sistema de diseño, podemos distinguir dos implementaciones posibles:

#### Sistema de diseño tipo librería

En el caso de un sitio público, este es el tipo de sistema de diseño más recomendado, como recomendamos en la sección “Uso de widgets en sitios públicos” de este documento. Para implementar este tipo de sistema de diseño, lo ideal es cargar las dependencias en Modyo, usando los templates para guardar las hojas de estilo, librerías de javascript y los binarios cómo assets. En el caso de las librerías javascript y hojas de estilo, para ponerlas a disposición en el sitio, hay que agregarlas a una vista para que puedan ser consumidas, idealmente el layout del sitio. Es importante recordar que hay que actualizar las referencias de imágenes o tipografías que se hagan en esos archivos. La mejor forma de hacerlo es usando un helper de Liquid que permitirá mantener actualizada la URL si se edita o cambia la imagen o tipografía.

#### Sistema de diseño que incluye componentes

Si el sistema de diseño incluye componentes, la mejor opción es externalizar el desarrollo y usar el CLI de Modyo para empujar los widgets a la plataforma. El externalizar el desarrollo, nos permite consumir el sistema de diseño como paquete desde un registro público o privado.

Snippets, con CSS, HTML, parametrizables. Widgets con liquid y HTML

### Implementación de un Sistema de Diseño

Implementar un sistema de diseño en la web involucra crear y mantener un conjunto coherente de estándares de diseño y componentes de interfaz de usuario (UI) reutilizables. Aquí hay algunos pasos generales que podrías seguir:

- **Definir los Estándares de Diseño**: Esto puede incluir colores, tipografías, espaciado, iconografía y cualquier otro elemento visual que será común en todo tu sitio web o aplicación. Estos estándares deben documentarse en una guía de estilo o en un manual de marca.
- **Crear Componentes de UI Reutilizables**: Los sistemas de diseño a menudo incluyen una biblioteca de componentes de UI que se pueden reutilizar en todo el sitio web o aplicación. Esto puede incluir botones, formularios, tarjetas, barras de navegación y otros elementos comunes. Estos componentes deben crearse de manera que sean fácilmente reutilizables y modificables.
- **Documentar el Uso de Componentes**: Junto con la creación de componentes, debes documentar cómo se deben usar estos componentes. Esto puede incluir guías de implementación, mejores prácticas, y ejemplos de uso.
- **Mantener el Sistema de Diseño**: Un sistema de diseño no es un proyecto de una sola vez. Debería ser mantenido y actualizado a medida que las necesidades de tu sitio web o aplicación cambien. Esto puede requerir revisiones regulares y actualizaciones de los componentes y estándares del sistema.
- **Herramientas de Implementación**: Existen herramientas como Storybook, Figma, Sketch, y Adobe XD que facilitan la creación, el mantenimiento y el uso compartido de los sistemas de diseño.
- **Colaboración y Adopción**: Debes asegurarte de que el equipo de desarrollo esté alineado con el sistema de diseño y lo adopte en su flujo de trabajo. Además, puede ser útil tener un propietario o equipo dedicado que supervise y mantenga el sistema de diseño.

Recuerda, un sistema de diseño es más que solo un conjunto de componentes UI y guías de estilo. Es una parte integral del proceso de diseño y desarrollo que ayuda a mantener la coherencia, mejora la eficiencia y fomenta una mejor colaboración entre los diseñadores y desarrolladores.

### ¿Cómo se implementa un sistema de diseño con Modyo?

En Modyo existen diferentes formas de implementar sistemas de diseño, dependiendo del caso de uso con el que se requiera trabajar. Si bien, un buen sistema de diseño comienza su existencia alejado del desarrollo, en plataformas como Figma o Sketch, en esta guía nos referiremos sólo a las implementaciones técnicas de éstos.

La primera de ellas, y la más simple, es en el escenario de [sitios públicos](/es/architecture/patterns/public-site). En este escenario, el sistema de diseño puede ser implementado dentro de la plataforma mediante el uso de las librerías de [Bootstrap](https://getbootstrap.com/) con las que se inicializa cada nuevo proyecto, más el soporte de variables que se encuentra presente en el. De esta forma, el sistema de diseño se podrá implementar con una serie de variables que tomen control de los aspectos más importantes del sitio, las cuales se propagan de forma inmediata a todos los componentes CSS, logrando un gran nivel de consistencia entre los componentes.

Una variante de este primer escenario, podría ser la externalización del sistema de diseño a una librería externa, que no esté gobernada directamente en el sitio. A esto se le conoce como inyección dinámica o en el “runtime” de estilos y para lograrla, el sistema de diseño se debe incorporar en los sitios como una librería externa, alojada en algún servidor al cual los desarrolladores del sistema de diseño tengan acceso y puedan publicar sus cambios. Debido a la naturaleza de cómo opera la Web, en este caso será necesario tener un buen control de versiones mediante URL bien definidas, ya que el propio caché del navegador o los sistemas de CDN podría generar problemas a la hora de invalidar y propagar los cambios.

Un segundo caso de uso de sistema de diseño se aplica cuando se trabaja con [sitios privados](/es/architecture/patterns/private-site). Si bien, la técnica explicada anteriormente aplica de igual forma acá, en el caso de los sitios privados más sofisticados dentro de Modyo posiblemente se hará uso de [micro frontends](/es/architecture/patterns/micro-frontend). En el caso de los micro frontends, la implementación del sistema de diseño puede implementarse directamente dentro del componente, inyectando las definiciones de forma estática o en el “build time”, por medio de librerías versionadas del sistema de diseño que deben vivir dentro de algún repositorio intermediario. Estas librerías se importan como dependencia dentro del micro frontend y se empaquetan junto con él, lo que permite que cada micro frontend cuente con versiones diferentes de la librería, adaptando los cambios en ella de forma progresiva.

:::tip Técnica híbrida
Un buen sistema de diseño, se podría empaquetar de diferentes maneras, considerando una librería de inyección dinámica y otra estática, reutilizando código en un nivel superior y generando artefactos ubicuos según la necesidad de los equipos de desarrollo.
:::
