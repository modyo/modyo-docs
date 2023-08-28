---
search: true
---

# Temas
En el mundo del desarrollo de experiencias de usuarios, la apariencia y el estilo de una aplicación juegan un papel crucial. Sin embargo, diseñar y mantener un conjunto coherente de estilos puede ser una tarea compleja y laboriosa. Es eso que resulta crítico tener formas eficientes de personalizar la estética de una aplicación de manera consistente y eficiente.
Dynamic Framework ofrece dos niveles de personalización:
1. Temas: Dynamic Framework proporciona una lista de variables que le dan estilo a los componentes y que constituyen lo que entendemos como un Tema.
2. A nivel de componente: Además del sistema de variables, los componentes de Dynamic Framework pueden ser personalizados a través de parámetros o propiedades o marcado personalizado.

En esta sección profundizaremos en el primer nivel, explicaremos el concepto de tema y las variables que lo hacen posible.

### ¿Qué es un tema?
En el contexto de Dynamic Framework, un tema se refiere a la práctica de personalizar la apariencia visual y el estilo de sus componentes a través de la modificación de elementos como colores, tipografía, espaciado y componentes. Dynamic Framework hace que este proceso sea más accesible al proporcionar una estructura base sólida y predefinida que puede ser modificada para adaptarse a las necesidades y la identidad visual de una organización.

En el contexto de Dynamic Framework, un tema se basa en su sistema de variables CSS, que permite modificar fácilmente los estilos predefinidos para crear un tema personalizado.

Con un tema podremos obtener:
- **Consistencia Visual**: Asegurar que todos los elementos de la aplicación sigan un estilo coherente, lo que mejora la experiencia del usuario.
- **Personalización Eficaz**: Dynamic Framework ofrece dos niveles de personalización, el primero es a través de ajustar variables y propiedades específicas que permiten una adaptación fácil y rápida del estilo de la aplicación para que se alinee con la identidad de marca y los requisitos de diseño.
- **Eficiencia en el Desarrollo**: Dynamic Framework proporciona una base sólida que ahorra tiempo y esfuerzo en la creación de estilos desde cero. Además, con una arquitectura adecuada, es posible realizar cambios globales con rapidez.
- **Escalabilidad**: La capacidad de personalizar temas permite un desarrollo escalable, ya que puedes adaptarla a diferentes proyectos y requisitos.

### Estructura de un Tema

1. **Variables Globales**: Además de las variables que entrega Bootstrap, librería que se ocupa como base, Dynamic Framework agrega un conjunto adicional de variables CSS globales en el archivo `_variables.css`. Estas variables controlan distintos aspectos como colores, tipografía, espaciado, tamaños de fuente y más, que modificaran todos los componentes.
2. **Sobrescritura de Variables**: Para personalizar el framework, puedes sobrescribir las variables globales. Al modificar las variables, estarás afectando los estilos en toda la librería que se basan en estas variables.

:::tip Orden de Precedencia
Algo que hay que tener en cuenta es que por diseño, las definiciones CSS tienen orden de precedencia, de tal forma que si un Micro Frontend cambia el valor de una variable global esta nueva definición tendrá prioridad por sobre la definida en el tema.
:::

La idea es identificar las variables disponibles y las que deseas modificar. Las variables se agrupan en categorías como colores, tipografía, espaciado, bordes, etc., y luego, sobrescribir las que deseas modificar. Por ejemplo, si deseas cambiar los colores principales, cambia la variable `$primary` con el nuevo valor de color.

### Variables CSS

Bootstrap ofrece una extensa lista de variables CSS que se aplican al elemento `:root` de un documento. Estas variables están debidamente (documentadas en su sitio web)[https://getbootstrap.com/docs/5.3/customize/css-variables/].

Por su parte, Dynamic Framework introduce clases específicas para cada componente, siguiendo la misma convención de nomenclatura que Bootstrap, que utiliza el prefijo `bs-`. Este enfoque evita posibles conflictos con librerías de terceros. Puedes consultar las variables disponibles para cada componente (documentadas en el Storybook de Dynamic Framework)[https://react.dynamicframework.dev/].

Mediante este enfoque, es posible agregar nuevas variables al elemento `:root` para controlar aspectos más específicos. Esto resulta especialmente útil cuando se requiere incorporar dichas variables dentro del contexto del tema.
