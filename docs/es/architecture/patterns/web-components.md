---
search: true
---

# Web Components

Un web component es una tecnología web que permite crear elementos personalizados y reutilizables en aplicaciones web, basándose en estándares web como HTML, CSS y JavaScript. Sirve para encapsular y extender el comportamiento de elementos HTML existentes.

Están compuestos por tres principales tecnologías:

- **Custom Elements:** Permiten la creación de elementos HTML personalizados con funcionalidad y comportamiento definidos en JavaScript.
- **Shadow DOM:** Proporciona un ámbito de encapsulación para los estilos y la estructura de un componente. El Shadow DOM permite que los estilos y elementos internos de un componente no afecten ni sean afectados por el resto de la página.
- **HTML Templates:** Definen fragmentos de código HTML que pueden clonarse y utilizarse múltiples veces. Se utilizan para definir la estructura inicial de un componente.

Al combinar estas tecnologías, los Web Components permiten crear componentes personalizados con comportamiento y apariencia propio, que pueden ser utilizados en diferentes partes de una aplicación web o en diferentes proyectos.

Además, fomentan la reutilización de código y facilitan el mantenimiento y la modularidad en el desarrollo web, ya que permiten crear componentes independientes y autónomos que se pueden usar en múltiples contextos sin conflictos.

### Implementación de Web Components

La implementación de Web Components está respaldada por estándares web y es compatible con la mayoría de los navegadores modernos. Sin embargo, para navegadores más antiguos, es posible que requieras polyfills o herramientas específicas para garantizar la compatibilidad.

Existen diferentes herramientas para desarrollar Web Components, como Polymer y Stencil, estas son algunas de las diferencias clave entre ellas:

- **Enfoque y madurez:** Polymer, desarrollado por Google, simplifica la creación de Web Components y ofrece una amplia gama de características. Stencil es un compilador de componentes web que se centra en la eficiencia y el rendimiento.
- **Tamaño y dependencias:** La bilbioteca de Polymer es más grande, mientras que Stencil es más liviano y se enfoca en la generación de código optimizado y sin dependencias adicionales.
- **Soporte de navegadores:** Ambos frameworks son compatibles con la mayoría de los navegadores modernos. Sin embargo, Polymer utiliza polyfills para garantizar la compatibilidad con navegadores más antiguos.
- **Lenguaje de programación:** Polymer utiliza JavaScript moderno y el patrón de programación basado en clases para definir los componentes, Stencil usa TypeScript, un superconjunto de JavaScript que agrega características de tipado estático y otras funcionalidades.
- **Rendimiento:** Stencil está optimizado para el rendimiento, mientras que Polymer ofrece un buen rendimiento sin estar optimizado específicamente para ello.

Ambas herramientas son poderosas y se adaptan a diferentes casos de uso. Si requieres una biblioteca completa y consolidada con numerosas características, Polymer es una excelente elección. En cambio, si priorizas el rendimiento y deseas crear Web Components altamente optimizados y nativos, Stencil puede ser la opción más adecuada.

### Implementación de Web Components con Modyo
:::warning Importante
Los Web Components aún no cuentan con un soporte consistente en todos los navegadores.
:::

En Modyo puedes implementar Web Components en el desarrollo de [micro frontends](/es/architecture/patterns/micro-frontend), debido a que los micro frontends utilizan herramientas tradicionales de JavaScript, lo que facilita la incorporación de librerías como [StencilJS](https://stenciljs.com) o [Lit](https://lit.dev). Este tipo de librerías otorga definiciones de componentes que pueden ser empaquetadas en conjunto con el micro frontend para ser desplegadas dentro de la plataforma.

Para sitios o aplicaciones web más sencillas, que se administran íntegramente dentro de Modyo, el uso de Web Components puede estar más restringido. Esto se debe a que los Web Components actúan sobre definiciones estáticas de HTML [desde el lado del servidor (SSR)](/es/architecture/patterns/ssr). En este caso, es necesario inyectar las librerías en el código HTML. Sin embargo, esto puede ser complejo y generar sitios difíciles de mantener.

Una alternativa para sitios o aplicaciones web más sencillas es utilizar las capacidades SSR de la plataforma para crear elementos reutilizables con el uso de Snippets de Liquid y variables. Esto permite resolver problemas comunes de una forma eficiente y limpia de mantener.

:::tip Dynamic Framework
Modyo utiliza Web Components en su framework de desarrollo Dynamic: Stencil para la definición de componentes y React para su implementación. Además, utiliza otras librerías que aceleran y facilitan su adopción.
:::

