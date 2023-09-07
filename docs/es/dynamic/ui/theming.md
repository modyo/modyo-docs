---
search: true
---

# Temas
En el desarrollo de experiencias de usuarios, la apariencia y el estilo de una aplicación desempeñan un papel crucial. Sin embargo, diseñar y mantener un conjunto coherente de estilos puede ser una tarea compleja y laboriosa. Es por eso que resulta crítico contar con formas eficientes de personalizar la estética de una aplicación de manera consistente y eficiente.

Dynamic Framework ofrece dos niveles de personalización:
- **Temas:** Una lista de variables que definen el estilo de los componentes y que constituyen lo que entendemos como un _tema_.
- **Componentes:** Personalización de los componentes de Dynamic Framework a través de parámetros, propiedades o marcado personalizado.

En esta sección profundizaremos en el primer nivel. Explicaremos el concepto de tema y las variables que lo hacen posible.

### ¿Qué es un tema?
En el contexto de Dynamic Framework, un tema se refiere a la personalización de la apariencia visual y el estilo de los elementos, al modificar colores, tipografía, espaciado y componentes.

Dynamic Framework facilita este proceso al proporcionar una base sólida y predefinida que puede adaptarse a las necesidades y la identidad visual de una organización.

En el contexto de Dynamic Framework, un tema se basa en su sistema de variables CSS, que permite modificar fácilmente los estilos predefinidos para crear un tema personalizado.

Con un tema podremos obtener:
- **Consistencia visual:** Al asegurar que todos los elementos de la aplicación sigan un estilo coherente, mejorando así la experiencia del usuario.
- **Personalización eficaz:** Ajustando variables y propiedades específicas que permiten una adaptación fácil y rápida del estilo de la aplicación, alineándola con la identidad de marca y los requisitos de diseño.
- **Eficiencia en el desarrollo:** A través de una base sólida que ahorra tiempo y esfuerzo en la creación de estilos desde cero. Además, con una arquitectura adecuada, es posible implementar cambios globales con rapidez.
- **Escalabilidad:** La personalización de temas facilita un desarrollo escalable y adaptable a diferentes proyectos y requisitos.

### Estructura de un Tema

- **Variables globales:** Además de las variables que entrega la librería Bootstrap, que se utiliza como base, Dynamic Framework agrega un conjunto adicional de variables CSS globales en el archivo `_variables.css`. Estas variables controlan distintos aspectos como colores, tipografía, espaciado, tamaños de fuente y más, que modificaran todos los componentes.
- **Sobrescritura de variables:** Para personalizar el framework, puedes sobrescribir las variables globales. Al modificar estas variables, cambias los estilos en toda la librería que se basan en ellas.

Las variables se organizan en categorías como colores, tipografía, espaciado y bordes, lo que te permite identificar cuáles variables están disponibles y modificarlas según tus necesidades. Por ejemplo, para cambiar los colores principales, modifica la variable `$primary` con el nuevo valor de color.

:::tip Orden de precedencia
Es importante tener en cuenta que, por diseño, las definiciones CSS tienen un orden de precedencia. Por lo que si un Micro frontend cambia el valor de una variable global, esta nueva definición tendrá prioridad sobre la definida en el tema.
:::

### Variables CSS

Bootstrap ofrece una extensa lista de variables CSS que se aplican al elemento `:root` de un documento. Estas variables están (documentadas en su sitio web)[https://getbootstrap.com/docs/5.3/customize/css-variables/].

Dynamic Framework introduce clases específicas para cada componente, siguiendo la misma convención de nomenclatura que Bootstrap, que utiliza el prefijo `bs-`. Este enfoque evita posibles conflictos con librerías de terceros. Puedes consultar las variables disponibles para cada componente (documentadas en el Storybook de Dynamic Framework)[https://react.dynamicframework.dev/].

Este enfoque permite agregar nuevas variables al elemento `:root` para controlar aspectos más específicos. Lo que resulta especialmente útil cuando se requiere incorporar estas variables en del contexto del tema.
