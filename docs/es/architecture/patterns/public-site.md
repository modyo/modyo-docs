---
search: true
---

# Sitio Público
Por sitio público nos referimos a todos ellos que están disponibles en Internet para cualquier persona. Son sitios diseñados y creados con la intención de compartir información, proporcionar servicios o interactuar con el público en general, ofreciendo una experiencia relativamente similar para todos sus visitantes.

Los sitios públicos pueden tener diversos propósitos. Algunos ejemplos comunes podrían ser:
- Sitios corporativos o informativos
- Sitios de captura de prospectos
- Sitios de originación de clientes
- Sitios de marketing y promociones
- Sitios de noticias y blogs

<!-- Hack to avoid this title to be displayed in the TOC element -->
<h3><a href="#¿como-implementar-sitios-publicos-con-modyo" class="header-anchor">#</a> ¿Cómo implementar sitios públicos con Modyo?</h3>

Modyo ofrece todas las herramientas necesarias para crear y mantener sitios públicos de manera ágil, segura y eficiente. A través de la combinación de sus aplicaciones de contenidos y canales, podrás acceder a todas las funcionalidades requeridas en cada etapa del ciclo de vida del sitio.

A nivel de patrón de arquitectura, el sitio público es uno de los más comunes y sencillos de implementar sobre Modyo, pero no por ello exento de múltiples detalles que debemos considerar para asegurar el éxito de él, dentro de los cuales podemos mencionar:

[[toc]]

Dependiendo del resultado que se desee lograr, estos requerimientos podrán impactar de diferentes formas en las decisiones de implementación. En la presente guía explicaremos los conceptos más relevantes de cada uno de ellos.

### Estructura y modularidad
Las primeras decisiones a la hora de implementar un sitio sobre Modyo, deberían estar referidas a la estructura y modularidad, ya que de ellas dependen el resto de los requerimientos. Un sitio con una buena estructura será siempre más sencillo de mantener y de evolucionar. A continuación, se exploran los criterios de estructura y modularidad más importantes.

#### Múltiples Sitios y Organizaciones
Modyo posee una arquitectura multi-sitio y multi-organización, la cual puede ser utilizada para segregar la administración en diferentes equipos de administradores de sitios que estén o no relacionados entre sí.

Por lo general, se separan por organizaciones filiales o subsidiarias independientes que no comparten ninguna clase de administración entre sus sitios, creando silos de implementación que no se relacionan de ninguna forma lógica, pero que sí comparten la infraestructura física de la plataforma.

:::warning Organizaciones y licenciamiento
Al momento de considerar el uso de organizaciones, se deben tener en cuenta los límites admitidos por la licencia suscrita. El límite máximo de organizaciones siempre puede ser ampliado, previa validación comercial.
:::


#### Uso de Páginas y Layouts
Los [layouts](/es/platform/channels/templates.md#layouts) son una excelente forma para diferenciar contextos dentro de un sitio. Un layouts puede ser compartido por múltiples [páginas](/es/platform/channels/pages) y cada página puede tener un solo layouts. Dentro del layouts, se podrán definir elementos reutilizables entre las diferentes páginas, como Headers, Footers, Meta Tags, etc. 

Los layouts definen la experiencia general del sitio y garantizan que las diferentes páginas se visualizan con consistencia, pero existen casos en los que se requerirá tener un Layout diferente para una página o un grupo de páginas, por ejemplo una página landing de una promoción especial en la que no queremos distraer al visitante con la navegación del sitio.

Las páginas por otro lado, se podrán agrupar en jerarquías, que permitirán asegurar una estructura organizada para los diferentes elementos del sitio.


#### Uso de Templates y Snippets
Los [templates](/es/platform/channels/templates) o plantillas corresponden a documentos Liquid que se renderizan de forma dinámica dentro de la plataforma. Estos templates pueden corresponder a páginas HTML, layouts, hojas de estilo CSS o archivos de Javascript.
Por otro lado, los snippets son una forma muy conveniente de organizar códigos fuente es el uso de [snippets](/es/platform/channels/templates.md#snippets), los cuales pueden ser referenciados desde diferentes plantillas Liquid de un mismo sitio. 

Los snippets permiten modularizar y reutilizar funciones, permitiendo descomponer funcionalidades complejas, en otras más simples. Los snippets se renderizan de forma dinámica al momento de renderizar la página.

:::warning Recursividad y rendimiento
Un error común al utilizar snippets es el de invocar recursivamente referencias circulares, es decir, que se llamen a sí mismas. En este caso, la plataforma cortará la ejecución del renderizado del fragmento para evitar saturar los recursos del sistema. Otro problema común, podría ser el exceso de snippet dentro de un sitio, ya que uso involucra un poco de procesamiento adicional que al sumar podría relentizar la carga de la página.
:::

#### Uso de Widgets
Los [widgets](/es/platform/channels/widgets) son una de las formas más organizadas dentro de Modyo para modularizar funcionalidad de negocio. Los widgets permiten empaquetar código HTML, CSS y Javascript los cuales se modifican y despliegan juntos, sin afectar al resto del sitio.

El widget builder es una herramienta dentro de la consola de administración de Modyo que, al igual que el editor de plantillas, permite tomar control del ciclo completo de desarrollo del widget, incluyendo su previsualización, versionamiento y despliegue.

Los widgets, en conjunto con el uso de snippet y su builder, son una excelente forma de trabajar con funcionalidad de baja o mediana complejidad, en la que el uso de Javascript no es intensivo. Para el caso de los sitios públicos son la forma más recomendada de trabajar. En escenarios de más complejidad, se recomienda el uso de [micro frontends](/es/architecture/patterns/micro-frontend).

#### Uso de Micro Frontends
Los [micro frontend](/es/architecture/patterns/micro-frontend) son un tipo especial de widget que soporta un flujo de trabajo más sofisticado, en el cual el código es desarrollado desde fuera de la plataforma y “empujado” hacia ella por medio de un agente de línea de comando llamado Modyo CLI. Los micro frontend se construyen de forma estática previo a su subida a Modo, lo que permite hacer uso de librería y frameworks avanzados, además de permitir incorporar flujos de revisión estática de código para la calidad y seguridad del mismo.

:::warning Sobre-ingeniería
El uso de micro frontends dentro de un sitio público podría implicar complejidad adicional sumando la mantención de pipelines de integración continua y procesos de devops. En general esto requiere de apoyo de las áreas de IT dentro de la organización, por lo que debe considerarse esta complejidad adicional esté justificada.
:::

#### Uso de Frameworks de Javascript
En general, el uso de frameworks de Javascript para la implementación de sitios públicos no es algo recomendado. Esto es debido a la complejidad inherente en el código fuente de cada dependencia, lo cual puede afectar las siguientes características que se espera que todo sitio Web tenga:
- Velocidad de carga
- Velocidad de renderizado de primera respuesta
- Facilidad para encontrar contenido “escrito” en el HTML por parte de los diferentes buscadores
- Facilidad para hacer caché de contenido y de estructura en las redes de distribución de contenidos
- Acceso de las herramientas de accesibilidad a comprender lo que está dentro de la página
- Facilidad para evolucionar el código de forma simple (sin requerir la constante presencia de desarrolladores con conocimientos avanzados)

La implementación de sitios públicos utilizando frameworks avanzados de Javascript, generará costos adicionales a la hora de cumplir con estos criterios.

Por otro lado, cuando se trata de componentes complejos específicos dentro de un sitio público, como es el caso de un simulador, un buscador de sucursales cercanas, o un resumen de indicadores financieros, el uso de un framework podría ser muy apropiado. En este caso la mejor estrategia de implementación será utilizando un micro frontend.

En general, para sitios públicos recomendamos evitar el uso intensivo de JavaScript y evitar usar frameworks como ReactJS o Vue, y optar por HTML estático, apalancando, si es necesario, el uso de Liquid.

Algunas razones de por qué evitamos el uso de frameworks de javascript en sitios públicos son:
- **Rendimiento:** cada vez que un visitante carga una página, el navegador debe descargar y ejecutar el código JavaScript para poder mostrar y manipular los elementos de la página. El uso excesivo de JavaScript puede ralentizar la carga de la página, especialmente en dispositivos con conexiones lentas o con recursos limitados.
- **Accesibilidad:** Algunas personas pueden tener dificultades para acceder y utilizar contenido interactivo basado en JavaScript. Esto puede incluir personas con discapacidades visuales que utilizan lectores de pantalla, usuarios con conexiones lentas o dispositivos más antiguos, o personas que tienen desactivado el JavaScript por razones de seguridad o preferencia personal.
- **Mantenimiento y compatibilidad:** Al reducir las dependencias de JavaScript se simplifica el mantenimiento del sitio. Además, estas soluciones suelen ser más compatibles con diferentes navegadores y dispositivos.
- **Seguridad:** Al limitar el uso de JavaScript, se reduce la superficie de ataque potencial y se mejora la seguridad del sitio.

La idea es lograr una combinación equilibrada de elementos estáticos y dinámicos para brindar una experiencia óptima para los usuarios. 

:::warning Sobre-ingeniería
Al igual que en el caso de los micro frontends, el uso de frameworks de Javascript dentro de un sitio público podría implicar complejidad adicional, por lo que no recomendamos su uso en escenarios dónde los beneficios no se encuentren plenamente justificados.
:::


#### Web Components
Los [web components](/es/architecture/patterns/web-components) son una técnica de modularización basada en estándares de HTML, CSS y JS. Actualmente los Web Components carecen de soporte transversal en los navegadores, pero esto es algo que va mejorando año a año. Para poder hacer una implementación segura de Web Components, se requerirá hacer uso de alguna librería de Javascript que tome control de estas incompatibilidades. Es por ello que en el caso de los sitios públicos, el uso de Web Components podría no aportar mayores beneficios que los problemas que potencialmente generaría, aludiendo también a los argumentos de las secciones anteriores.

Como alternativa al uso de los Web Components, los sitios públicos se podrán beneficiar de alternativas más livianas y estándares, cómo es el caso del framework de CSS Bootstrap, el cuál viene incorporado nativamente dentro de la plataforma Modyo.
