---
search: true
---

# Web Components

Un web component es una tecnología web que permite la creación de elementos personalizados y reutilizables en aplicaciones web. Está basado en estándares web como HTML, CSS y JavaScript, y se utiliza para encapsular y extender el comportamiento de elementos HTML existentes.

Los web components constan de tres principales tecnologías:

- **Custom Elements:** Permite la creación de elementos HTML personalizados. Estos elementos pueden tener su propia funcionalidad y comportamiento definidos en JavaScript.
- **Shadow DOM:** Proporciona un ámbito de encapsulación para los estilos y la estructura de un componente. El Shadow DOM permite que los estilos y elementos internos de un componente no afecten ni sean afectados por el resto de la página.
- **HTML Templates:** Permiten definir fragmentos de código HTML que pueden ser clonados y utilizados múltiples veces. Los templates se utilizan para definir la estructura inicial de un componente.

Al combinar estas tecnologías, los web components ofrecen la capacidad de crear componentes personalizados con su propio comportamiento y apariencia, que pueden ser utilizados en diferentes partes de una aplicación web o incluso en diferentes proyectos.

Los web components fomentan la reutilización de código, el mantenimiento más sencillo y la modularidad en el desarrollo web, ya que permiten la creación de componentes independientes y autónomos que se pueden usar en múltiples contextos sin conflictos.

### ¿Cómo se implementan los Web Components?

Las tecnologías detrás de los Web Components están respaldadas por los estándares web y son compatibles con la mayoría de los navegadores modernos. Sin embargo, debes tener en cuenta que algunos navegadores más antiguos pueden no admitir todas las funcionalidades de los Web Components de manera nativa. En esos casos, se pueden utilizar polyfills o herramientas especializadas para garantizar la compatibilidad con versiones más antiguas de los navegadores.

Polymer y Stencil son dos herramientas populares para desarrollar Web Components, pero tienen enfoques y características diferentes. Aquí están algunas de las diferencias clave entre Polymer y Stencil:

- **Enfoque y madurez:** Polymer es una biblioteca desarrollada por Google que ha estado disponible durante más tiempo y ha sido utilizada en producción en numerosos proyectos. Está diseñada para simplificar la creación de Web Components y ofrece una amplia gama de características y funcionalidades. Stencil, por otro lado, es un compilador de componentes web que se centra en la eficiencia y el rendimiento. Está diseñado para generar componentes web nativos y optimizados para el rendimiento.
- **Tamaño y dependencias:** Polymer incluye una biblioteca completa que proporciona una amplia gama de características y abstracciones para el desarrollo de Web Components. Esto significa que el tamaño de la biblioteca puede ser más grande, especialmente si se incluyen todas las características y módulos opcionales. Stencil, por otro lado, es más liviano y se enfoca en la generación de código optimizado y sin dependencias adicionales.
- **Soporte de navegadores:** Polymer está diseñado para funcionar en una amplia gama de navegadores modernos y utiliza polyfills para garantizar la compatibilidad en navegadores más antiguos. Stencil se centra en generar componentes web nativos y aprovecha las características de los navegadores modernos, lo que puede limitar la compatibilidad con versiones más antiguas de los navegadores.
- **Lenguaje de programación:** Polymer utiliza JavaScript moderno y el patrón de programación basado en clases para definir los componentes. Stencil, por otro lado, utiliza TypeScript, un superconjunto de JavaScript que agrega características de tipado estático y otras funcionalidades adicionales.
- **Rendimiento:** Stencil se destaca por su enfoque en el rendimiento. Utiliza técnicas de compilación y optimización para generar componentes web altamente eficientes y aprovechar las características nativas de los navegadores para lograr un mejor rendimiento. Polymer también tiene un buen rendimiento, pero Stencil se ha optimizado específicamente para ofrecer un rendimiento excepcional.

Ambas herramientas son poderosas y adecuadas para diferentes casos de uso. Si buscas una biblioteca completa y madura con muchas características, Polymer puede ser una buena opción. Si te preocupa el rendimiento y quieres generar componentes web optimizados y nativos, Stencil puede ser la elección adecuada.

### ¿Cómo se implementan Web Components con Modyo?
Los Web Components son una tecnología que aún carece de soporte consistente dentro de los diferentes navegadores utilizados por los usuarios, es por ello que su adopción debe ser consciente de ello.

Dentro de Modyo, la forma más natural de adoptar Web Components se da en el desarrollo de [micro frontends](/es/architecture/patterns/micro-frontend), ya que al poseer un entorno de construcción nativo a las herramientas tradicionales de Javascript, se podrán incorporar librerías como [StencilJS](https://stenciljs.com) o [Lit](https://lit.dev). Este tipo de librerías otorgará definiciones de componentes que podrán ser empaquetadas en conjunto con el micro frontend para su despliegue dentro de la plataforma.

Con respecto a los sitios o aplicaciones Web más sencillas que se administran íntegramente dentro de Modyo, el uso de los Web Components podría estar más restringido, ya que al actuar sobre definiciones estáticas de HTML procesadas [desde el lado del servidor (SSR)](/es/architecture/patterns/ssr), la inyección de las librerías mencionadas anteriormente no será tan efectiva y se requerirá de algunos trucos para hacerlas operar, con el riesgo de gener sitios difíciles de mantener o con una arquitectura más compleja que el problema que buscan resolver. Sin embargo,  utilizando las capacidades SSR de la plataforma, se podrán crear elementos reutilizables con el uso de Snippets de Liquid y variables, lo que permite resolver problemas comunes, de una forma más eficiente y limpia de mantener.

:::tip Dynamic Framework
Modyo utiliza Web Components en su framework de desarrollo [Dynamic](/es/dynamic), utilizando Stencil para la definición de componentes y React para su implementación, en conjunto con otras librerías que aceleran y facilitan su adopción.
:::

