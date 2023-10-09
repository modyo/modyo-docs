---
search: true
---

# Internacionalización

La internacionalización en aplicaciones web es el proceso de diseñar y desarrollar aplicaciones que se adapten y funcionen correctamente en diferentes idiomas, culturas y regiones en todo el mundo. El objetivo principal es hacer que una aplicación web sea fácilmente localizable, es decir, capaz de ajustarse a los requisitos lingüísticos y culturales de los usuarios.

Para lograr esto, se deben considerar aspectos como:

- **Localización de texto:** Implica separar el contenido textual de la aplicación de su código subyacente, permitiendo su traducción y adaptación a diferentes idiomas. Esto se logra mediante el uso de archivos de recursos o bases de datos.
- **Formato de fecha y hora:** Las aplicaciones deben presentar fechas y horas en formatos comprensibles y aceptables en diversas regiones, incluyendo diferentes formatos de fecha, marcas de tiempo y opciones de zona horaria.
- **Formato numérico y monetario:** Los sistemas de numeración y los símbolos monetarios varían según el país. Las aplicaciones web deben ser capaces de adaptar la forma en que muestran los números y los valores monetarios según las preferencias culturales de los usuarios.
- **Soporte de caracteres y codificación:** Diferentes idiomas utilizan diferentes juegos de caracteres y codificaciones. Las aplicaciones web deben manejar y mostrar correctamente caracteres especiales y letras acentuadas correspondientes a diferentes idiomas.
- **Diseño de interfaz:** La interfaz debe ser flexible para adaptarse a diferentes longitudes de texto y estructuras gramaticales. Por ejemplo, los idiomas escritos de derecha a izquierda requieren un diseño de interfaz inverso en comparación con los idiomas escritos de izquierda a derecha.

La implementación de prácticas de internacionalización facilita la traducción, localización y adaptación de la aplicación a diferentes idiomas y culturas. Esto amplía su alcance, llega a audiencias más amplias y mejora la experiencia del usuario al ofrecer contenido relevante y adaptado a su contexto local.

### Implementación de internacionalización con Modyo

En Modyo, la internacionalización se puede llevar a cabo de dos maneras. La primera y más sencilla implica el uso de las herramientas de lenguaje integradas en la plataforma. Estas configuraciones permiten la publicación y gestión del contenido en varios idiomas en un mismo espacio.

Para sitios web y aplicaciones, el idioma se define en cada canal, permitiendo tomar contenido y variables desde el lenguaje seleccionado para desplegar hacia los usuarios finales. Cada sitio incluye una variable de contexto Liquid que identifica el idioma, lo que permite crear lógica personalizada según el idioma o entregar su valor a un tercero, como un micro frontend desplegado sobre Modyo o una librería de un tercero, como un sistema de chatbot.

De esto se desprende una segunda forma de implementar la internacionalización dentro de Modyo, mediante los micro frontends. Estos componentes, desarrollados externamente, deben estar diseñados para ser incorporados en sitios web o aplicaciones que pueden tener configuraciones de idioma diversas.

En este caso, se recomienda desarrollar los micro frontends teniendo en cuenta la inclusión de una librería de i18n que permita cambiar el idioma y la ubicación mediante una variable inyectada dinámicamente al cargar el componente. De esta manera, un mismo microfrontend puede reutilizarse en diferentes sitios o aplicaciones web, adaptándose al idioma configurado en cada sitio


:::tip Mantenimiento de archivos de lenguaje
En proyectos complejos, con múltiples microservicios en varios idiomas, la administración de las claves de lenguaje en los diferentes repositorios puede ser un desafío. Para simplificar este proceso, Modyo recomienda incorporar un sistema de automatización de lenguaje. Estos sistemas se encargan de controlar los archivos en cada repositorio y proporcionan una interfaz de gestión para las personas responsables de mantenerlos actualizados.

Algunos sistemas de automatización de lenguaje son Transifex, Lokalise, Crowdin y WebTranslate. Todos estos tienen la capacidad de integrarse directamente con los repositorios.
:::
