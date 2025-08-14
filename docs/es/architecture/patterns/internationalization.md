---
search: true
---

# Internacionalización

La internacionalización (i18n) en aplicaciones web es el proceso de diseñar y desarrollar software para que se adapte y funcione correctamente en diferentes idiomas, culturas y regiones. Su objetivo principal es facilitar la localización, permitiendo que la aplicación se ajuste a los requisitos lingüísticos y culturales de los usuarios.

Para lograr esto, se deben considerar aspectos como:

- **Localización de texto**: Separar el contenido textual del código para facilitar su traducción y adaptación a diferentes idiomas, utilizando archivos de recursos o bases de datos.
- **Formato de fecha y hora**: Presentar fechas y horas en formatos comprensibles y aceptables para diversas regiones, incluyendo diferentes formatos, marcas de tiempo y zonas horarias.
- **Formato numérico y monetario**: Adaptar la visualización de números y valores monetarios según las preferencias culturales de los usuarios.
- **Soporte de caracteres y codificación**: Manejar y mostrar correctamente caracteres especiales y letras acentuadas de diferentes idiomas.
- **Diseño de interfaz**: Diseñar interfaces flexibles que se adapten a diferentes longitudes de texto y estructuras gramaticales (ej. idiomas de derecha a izquierda).

La implementación de prácticas de internacionalización facilita la traducción, localización y adaptación de la aplicación a diferentes idiomas y culturas, ampliando su alcance y mejorando la experiencia del usuario al ofrecer contenido relevante y adaptado a su contexto local.

### Implementación de internacionalización con Modyo

En Modyo, la internacionalización se puede implementar de dos maneras. La primera, y más sencilla, utiliza las herramientas de lenguaje integradas en la plataforma, que permiten la publicación y gestión de contenido en varios idiomas dentro de un mismo espacio.

Para sitios web y aplicaciones, el idioma se define por canal, lo que permite obtener contenido y variables del lenguaje seleccionado para los usuarios finales. Cada sitio incluye una variable de contexto Liquid que identifica el idioma, facilitando la creación de lógica personalizada o la entrega de su valor a terceros (ej. micro frontends o librerías externas como sistemas de chatbot).

Una segunda forma de implementar la internacionalización en Modyo es mediante micro frontends. Estos componentes, desarrollados externamente, deben diseñarse para ser incorporados en sitios web o aplicaciones con diversas configuraciones de idioma.

En este caso, se recomienda desarrollar los micro frontends incluyendo una librería de i18n que permita cambiar el idioma y la ubicación mediante una variable inyectada dinámicamente al cargar el componente. Así, un mismo micro frontend puede reutilizarse en diferentes sitios o aplicaciones web, adaptándose al idioma configurado en cada uno.


:::tip Mantenimiento de archivos de lenguaje
En proyectos complejos con múltiples microservicios y varios idiomas, la administración de las claves de lenguaje en diferentes repositorios puede ser un desafío. Para simplificar este proceso, Modyo recomienda incorporar un sistema de automatización de lenguaje. Estos sistemas controlan los archivos en cada repositorio y proporcionan una interfaz de gestión para su actualización.

Ejemplos de sistemas de automatización de lenguaje que se integran directamente con repositorios incluyen Transifex, Lokalise, Crowdin y WebTranslate.
:::
