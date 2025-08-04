---
search: true
---

# Web Components

Un Web Component es una tecnología web que permite crear elementos personalizados y reutilizables en aplicaciones web, basándose en estándares como HTML, CSS y JavaScript. Su propósito es encapsular y extender el comportamiento de elementos HTML existentes.

Se componen de tres tecnologías principales:

- **Custom Elements**: Permiten crear elementos HTML personalizados con funcionalidad y comportamiento definidos en JavaScript.
- **Shadow DOM**: Proporciona un ámbito de encapsulación para los estilos y la estructura de un componente, evitando que los estilos y elementos internos afecten o sean afectados por el resto de la página.
- **HTML Templates**: Definen fragmentos de código HTML clonables y reutilizables, utilizados para la estructura inicial de un componente.

Combinando estas tecnologías, los Web Components permiten la creación de componentes personalizados con su propio comportamiento y apariencia. Estos componentes pueden ser utilizados en diversas partes de una aplicación web o en diferentes proyectos.

Además, fomentan la reutilización de código y facilitan el mantenimiento y la modularidad en el desarrollo web, al permitir la creación de componentes independientes y autónomos que pueden usarse en múltiples contextos sin conflictos.

### Implementación de Web Components

La implementación de Web Components está respaldada por estándares web y es compatible con la mayoría de los navegadores modernos. Sin embargo, para navegadores más antiguos, pueden requerirse polyfills o herramientas específicas para garantizar la compatibilidad.

Existen diferentes herramientas para desarrollar Web Components, como Polymer y Stencil. A continuación, se presentan algunas diferencias clave:

- **Enfoque y madurez**: Polymer (Google) simplifica la creación de Web Components con amplias características. Stencil es un compilador de componentes web enfocado en eficiencia y rendimiento.
- **Tamaño y dependencias**: La librería de Polymer es más grande; Stencil es más ligero y genera código optimizado sin dependencias adicionales.
- **Soporte de navegadores**: Ambos son compatibles con la mayoría de los navegadores modernos. Polymer utiliza polyfills para compatibilidad con navegadores antiguos.
- **Lenguaje de programación**: Polymer usa JavaScript moderno y programación basada en clases. Stencil usa TypeScript, un superconjunto de JavaScript con tipado estático y otras funcionalidades.
- **Rendimiento**: Stencil está optimizado para el rendimiento, mientras que Polymer ofrece un buen rendimiento sin optimización específica.

Ambas herramientas son potentes y se adaptan a diferentes casos de uso. Si se requiere una biblioteca completa y consolidada con numerosas características, Polymer es una excelente elección. Si se prioriza el rendimiento y la creación de Web Components altamente optimizados y nativos, Stencil puede ser la opción más adecuada.

### Implementación de Web Components con Modyo
:::warning Importante
Los Web Components aún no cuentan con soporte consistente en todos los navegadores.
:::

En Modyo, los Web Components pueden implementarse en el desarrollo de [micro frontends](/es/architecture/patterns/micro-frontend). Dado que los micro frontends utilizan herramientas JavaScript tradicionales, se facilita la incorporación de librerías como [StencilJS](https://stenciljs.com) o [Lit](https://lit.dev). Estas librerías proporcionan definiciones de componentes que pueden empaquetarse con el micro frontend para su despliegue en la plataforma.

Para sitios o aplicaciones web más sencillas, administradas íntegramente en Modyo, el uso de Web Components puede ser más restringido. Esto se debe a que los Web Components actúan sobre definiciones estáticas de HTML [desde el lado del servidor (SSR)](/es/architecture/patterns/ssr), requiriendo la inyección de librerías en el código HTML, lo cual puede ser complejo y generar sitios difíciles de mantener.

Una alternativa para sitios o aplicaciones web más sencillas es utilizar las capacidades SSR de la plataforma para crear elementos reutilizables mediante Snippets de Liquid y variables. Esto permite resolver problemas comunes de forma eficiente y mantenible.

