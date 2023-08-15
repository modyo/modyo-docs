---
search: true
---

# Internacionalización

La internacionalización en las aplicaciones web es el proceso de diseñar y desarrollar aplicaciones que puedan adaptarse y funcionar correctamente en diferentes idiomas, culturas y regiones de todo el mundo. El objetivo principal de la internacionalización es hacer que una aplicación web sea fácilmente localizable, es decir, capaz de adaptarse a los requisitos lingüísticos y culturales de diferentes usuarios.

La internacionalización implica considerar aspectos como:

- **Localización de texto:** Esto implica separar el contenido textual de la aplicación de su código subyacente, de modo que pueda ser traducido y adaptado a diferentes idiomas. Se utilizan mecanismos como archivos de recursos o bases de datos para almacenar el contenido localizable.
- **Formato de fecha y hora:** Las aplicaciones deben ser capaces de presentar fechas y horas en formatos que sean comprensibles y aceptables en diferentes regiones. Esto incluye el uso de diferentes formatos de fecha, marcas de tiempo y opciones de zona horaria.
- **Formato numérico y monetario:** Los sistemas de numeración y los símbolos monetarios varían de un país a otro. Las aplicaciones web deben ser capaces de adaptar la forma en que se muestran los números y los valores monetarios según las preferencias culturales de los usuarios.
- **Soporte de caracteres y codificación:** Diferentes idiomas utilizan diferentes juegos de caracteres y codificaciones. Las aplicaciones web deben ser capaces de manejar y mostrar correctamente los caracteres especiales y las letras acentuadas correspondientes a los diferentes idiomas.
- **Diseño de interfaz:** El diseño de la interfaz debe ser flexible para adaptarse a diferentes longitudes de texto y estructuras gramaticales. Por ejemplo, los idiomas escritos de derecha a izquierda requieren un diseño de interfaz inverso en comparación con los idiomas escritos de izquierda a derecha.

Al aplicar prácticas de internacionalización en el desarrollo de aplicaciones web, se facilita la traducción, localización y adaptación de la aplicación a diferentes idiomas y culturas. Esto amplía el alcance de la aplicación, permite llegar a audiencias más amplias y mejora la experiencia del usuario al ofrecer contenido relevante y adaptado a su contexto local.

### ¿Cómo se implementa la internacionalización con Modyo?

Dentro de Modyo, la internacionalización se puede implementar de diferentes maneras. La primera de ellas, y la más simple, es utilizando las herramientas de lenguaje disponibles dentro de la misma plataforma, las cuales consisten en configuraciones que permitirán publicar y mantener el contenido en diferentes lenguajes dentro del mismo espacio. En el caso de los sitios y aplicaciones Web, el lenguaje se define dentro de cada canal, permitiendo con ello tomar contenido y variables desde el lenguaje seleccionado para su despliegue hacia los usuarios finales. Dentro de cada sitio, existirá una variable de contexto Liquid que permitirá identificar el lenguaje, lo que permite crear lógica personalizada según el idioma o entregar el su valor hacia un tercero, como podría ser el caso de un [micro frontend](/es/architecture/patterns/micro-frontend) desplegado sobre Modyo o una librería de un tercero, como un sistema de Chat Bot.

De esto último, se desprende una segunda forma de implementar internacionalización dentro de Modyo, mediante los micro frontends. Los micro frontends al ser desarrollados de forma externa, deben estar preparados para ser inyectados en sitios o aplicaciones Web que pueden tener diferentes lenguajes configurados. Es por ello que en este caso se recomienda desarrollar los micro frontends considerando la inclusión de alguna librería de i18n que permita modificar el lenguaje y la localización mediante alguna variable que se inyecte de forma dinámica al momento de cargar el componente. De esta forma un mismo micro frontend podrá ser reutilizado en diferentes sitios o aplicaciones Web, cambiando su lenguaje según la configuración del sitio.

:::tip Mantención de archivos de lenguaje
En iniciativas complejas, con presencia de múltiples microservicios en varios lenguajes, la administración de las claves de lenguaje dentro de los diferentes repositorios puede ser compleja. Para resolver este problema, Modyo recomienda la inclusión en los proyectos de algún sistema de automatización de lenguaje, que tome control de los archivos en cada repositorio y los presente en una interfaz de gestión a las personas que estarán a cargo de mantenerlos actualizados. Dentro de este tipo de sistemas, podemos mencionar Transifex, Lokalise, Crowdin, WebTranslate, entre otros. Todos ellos poseen capacidades de integración directa a los repositorios.
:::
