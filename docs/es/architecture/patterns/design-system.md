---
search: true
---

# Sistema de Diseño

Un sistema de diseño es una metodología y conjunto de recursos que permite crear y mantener de manera coherente y
eficiente la apariencia visual y la experiencia de usuario de una marca, producto o servicio. El sistema de diseño
proporciona una serie de elementos reutilizables, como componentes, patrones, guías y principios de diseño, que se
utilizan para construir interfaces y mantener una identidad visual consistente en todas las aplicaciones y plataformas.

El objetivo principal de un sistema de diseño es mejorar la eficiencia y la consistencia en el proceso de diseño y
desarrollo, al tiempo que garantiza una experiencia de usuario unificada y de alta calidad. Al utilizar componentes y
patrones predefinidos, los diseñadores y desarrolladores pueden acelerar el proceso de creación de interfaces, evitando
la necesidad de diseñar y desarrollar desde cero en cada ocasión.

Además, un sistema de diseño promueve la colaboración y la alineación entre los equipos de diseño, desarrollo y
producto, al proporcionar una base común de elementos y directrices que todos pueden seguir. Esto ayuda a mantener una
coherencia visual y de interacción en todas las aplicaciones y contribuye a construir una identidad de marca sólida y
reconocible.

Los sistema de diseño puede incluir hojas de estilo, tipografías, iconos, librerías javascript o, incluso, componentes
web. Dependiendo de los artefactos que informan este sistema de diseño, podemos distinguir dos implementaciones
posibles:

#### Sistema de diseño tipo librería
En el caso de un sitio público, este es el tipo de sistema de diseño más recomendado, como recomendamos en la sección
“Uso de widgets en sitios públicos” de este documento.
Para implementar este tipo de sistema de diseño, lo ideal es cargar las dependencias en Modyo, usando los templates
para guardar las hojas de estilo, librerías de javascript y los binarios cómo assets.
En el caso de las librerías javascript y hojas de estilo, para ponerlas a disposición en el sitio, hay que agregarlas
a una vista para que puedan ser consumidas, idealmente el layout del sitio.
Es importante recordar que hay que actualizar las referencias de imágenes o tipografías que se hagan en esos
archivos. La mejor forma de hacerlo es usando un helper de Liquid que permitirá mantener actualizada la URL si se
edita o cambia la imagen o tipografía.

#### Sistema de diseño que incluye componentes
Si el sistema de diseño incluye componentes, la mejor opción es externalizar el desarrollo y usar el CLI de Modyo
para empujar los widgets a la plataforma.
El externalizar el desarrollo, nos permite consumir el sistema de diseño como paquete desde un registro público o
privado.

Snippets, con CSS, HTML, parametrizables. Widgets con liquid y HTML

### ¿Cómo se implementa un sistema de diseño con Modyo?

En Modyo existen diferentes formas de implementar sistemas de diseño, dependiendo del caso de uso.


