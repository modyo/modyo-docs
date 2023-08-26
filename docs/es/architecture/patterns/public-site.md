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
Los [layouts](/es/platform/channels/templates.md#layouts) son una excelente forma para diferenciar contextos dentro de un sitio. Un layout puede ser compartido por múltiples [páginas](/es/platform/channels/pages) y cada página puede tener un solo layout. Dentro del layout, se podrán definir elementos reutilizables entre las diferentes páginas, como Headers, Footers, Meta Tags, etc. 

Los layouts definen la experiencia general del sitio y garantizan que las diferentes páginas se visualizan con consistencia, pero existen casos en los que se requerirá tener un Layout diferente para una página o un grupo de páginas, por ejemplo una página landing de una promoción especial en la que no queremos distraer al visitante con la navegación del sitio.

Las páginas por otro lado, se podrán agrupar en jerarquías, que permitirán asegurar una estructura organizada para los diferentes elementos del sitio.


#### Uso de Templates y Snippets
Los [templates](/es/platform/channels/templates) o plantillas corresponden a documentos Liquid que se renderizan de forma dinámica dentro de la plataforma. Estos templates pueden corresponder a páginas HTML, layouts, hojas de estilo CSS o archivos de Javascript.
Por otro lado, los [snippets](/es/platform/channels/templates.md#snippets) son una forma muy conveniente de organizar códigos fuente, ya que pueden ser referenciados desde diferentes plantillas, dentro de un mismo sitio. 

Los snippets permiten modularizar y reutilizar funciones, permitiendo descomponer funcionalidades complejas, en otras más simples. Los snippets se renderizan de forma dinámica al momento de renderizar la página.

:::warning Recursividad y rendimiento
Un error común al utilizar snippets es el de invocar recursivamente referencias circulares, es decir, que se llamen a sí mismas. En este caso, la plataforma cortará la ejecución del renderizado del fragmento para evitar saturar los recursos del sistema. Otro problema común, podría ser el exceso de snippet dentro de un sitio, ya que uso involucra un poco de procesamiento adicional que al sumar podría relentizar la carga de la página.
:::

#### Uso de Widgets
Los [widgets](/es/platform/channels/widgets) son una de las formas más organizadas dentro de Modyo para modularizar funcionalidad de negocio. Los widgets permiten empaquetar código HTML, CSS y Javascript los cuales se modifican y despliegan juntos, sin afectar al resto del sitio.

El widget builder es una herramienta dentro de la consola de administración de Modyo que, al igual que el editor de plantillas, permite tomar control del ciclo completo de desarrollo del widget, incluyendo su previsualización, versionamiento y despliegue.

Los widgets, en conjunto con el uso de snippet y su builder, son una excelente forma de trabajar con funcionalidad de baja o mediana complejidad, en la que el uso de Javascript no es intensivo. Para el caso de los sitios públicos son la forma más recomendada de trabajar. En escenarios de más complejidad, se recomienda el uso de [micro frontends](/es/architecture/patterns/micro-frontend).

#### Uso de Micro Frontends
Los [micro frontend](/es/architecture/patterns/micro-frontend) son un tipo especial de widget que soporta un flujo de trabajo más sofisticado, en el cual el código es desarrollado desde fuera de la plataforma y “empujado” hacia ella por medio de un agente de línea de comando llamado Modyo CLI. Los micro frontend se construyen de forma estática previo a su subida a Modo, lo que permite hacer uso de librerías y frameworks avanzados, además de permitir incorporar flujos de revisión estática de código para la calidad y seguridad del mismo.

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

Como alternativa al uso de los Web Components, los sitios públicos se podrán beneficiar de alternativas más livianas y estándares, cómo es el caso del framework de CSS [Bootstrap](https://getbootstrap.com), el cuál viene incorporado nativamente dentro de la plataforma Modyo.

### Gobernabilidad de contenido y códigos fuente
En cada proyecto de sitio público el gobierno del contenido y código fuente deben ser un elemento central a considerar. La implementación debe estar acorde a las expectativas del negocio en cuanto a cómo se harán las mantenciones futuras del sitio, respetando los flujos de aprobación de cambios y el correcto nivel de desacoplamiento entre el contenido y su lógica de implementación. A continuación, revisaremos las principales funcionalidades de la plataforma que permiten una correcta gobernabilidad de los sitios públicos.

#### Grupos y permisos
Modyo permite la creación de múltiples espacios de contenidos y sitios con roles y grupos de permisos definidos específicos para cada usuario. Esto permite asignar a un mismo usuario permisos elevados en un primer sitio, con otros más reducidos en un segundo.

Los roles y grupos se definen a nivel de la organización, y luego pueden ser asignados de forma particular a cada espacio y a cada sitio. En Modyo recomendamos asegurar siempre que los usuarios tengan el mínimo de permisos requeridos para realizar sus funciones, evitando así que los sitios sufran modificaciones no deseadas de forma accidental o intencional.

#### Múltiples espacio de contenido
La plataforma ofrece un ambiente de gestión de contenidos del tipo híbrido, en el cual los contenidos dentro de un espacio, podrán ser accedidos de forma descabezada mediante un API, o mediante el uso de content pages, las cuales se integran de forma automática dentro del sitio con el espacio configurado y que está disponible dentro de cada sitio.

:::tip Experiencia de CMS tradicional 
Al usar los espacios de contenido en conjunto con las páginas de contenidos, se logra una experiencia de uso muy similar a la de un CMS tradicional, en la que cada contenido está ligado a una representación. Adicionalmente a esto, en Modyo un mismo contenido puede ser desplegado en más de una página, de formas diferentes, permitiendo su previsualización en la página que escoja el usuario editor.
:::

#### Uso de Team Review
El [team review](/es/platform/core/key-concepts.md#revision-en-equipo) o revisión de equipos es una funcionalidad de la plataforma Modyo que permite configurar de forma simple y flexible quiénes serán los usuarios que deberán revisar algo previo a su publicación. Los usuarios del team review podrán en todo momento previsualizar el cambio o contenido y hacer comentarios para corregir cosas que no les parezcan. Desde la configuración de los espacios de contenido y los sitios, se podrá acceder al menú de team review.

El uso de team review es muy recomendable en escenarios de sitios públicos en los que se desee mantener la máxima agilidad posible en la publicación, pero con controles mínimos de aprobación para hacer revisiones simples.

#### Ambientes de desarrollo
Normalmente, dentro de un sitio público los cambios más comunes serán cambios en contenido como noticias, promociones, información de tarifas, ubicación de sucursales, o anuncios situados en las páginas principales. Estos cambios, por su naturaleza, serán frecuentes y reducidos en tamaño, reservando los cambios de mayor complejidad cuando sea necesario hacer ajustes de diseño, los cuales serán menos frecuentes. Es por ello que para la mayoría de los cambios, un flujo de aprobación de cambios bien configurado será más que suficiente para controlar el sitio, reservando el uso de técnicas más complejas para los que sean más estructurales. 

Para trabajar con ambientes previos separados del flujo normal de cambios a producción, Modyo ofrece diversas alternativas. La más directa, y muy adecuada cuando se trata de probar cambios más riesgosos o experimentales se basa en el uso de ambientes físicos del tipo pre-productivo, los cuales se incluyen por defecto en las versiones empresariales de la plataforma. Este tipo de ambiente no es recomendado para el trabajo del día a día con sitios públicos, debido a las dificultades de mantener el contenido sincronizado entre las diferentes infraestructuras. 

Otra forma de trabajar con ambientes previos, pero virtualizados dentro de la misma plataforma corresponde al uso de stages, cómo se verá en la siguiente sección.

:::tip Pruebas de nuevas versiones
Modyo recomienda el uso de ambientes físicos para pruebas de las nuevas versiones de la plataforma, en dónde el riesgo de generar una compatibilidad tendrá un impacto menor. 
:::

#### Uso de Stages
En el caso de los sitios públicos, Modyo recomienda manejar los ambientes previos mediante la funcionalidad de [stages](/es/platform/channels/sites.md#stages), la cual permite virtualizar un ambiente pre-productivo, dentro del mismo despliegue de producción. Con esta técnica, se evita tener que mover cambios y archivos entre ambientes, lo cual resulta en una tarea compleja que puede generar errores al momento de publicar.

El uso de stages permite obtener entornos separados y aislados para construir, probar y verificar el funcionamiento del sitio antes de ser desplegado en un entorno de producción, evitando errores o fallos que afecten directamente a los usuarios finales. Para el caso de sitios públicos, se podrán definir por ejemplo los siguientes stages:
- **Develop:** donde ocurre el desarrollo y la integración de los cambios
- **Certification:** donde se hacen las pruebas, previo al paso a producción
- **Main:** donde reside el sitio productivo

Los stages podrán definir ciertas configuraciones de forma independiente, como por ejemplo, las variables del sitio, lo que permitirá alterar algunos comportamientos entre un ambiente y otro, por ejemplo la URL de un API que despliegue información en el sitio. Cuando los stages se usan en conjunto con los espacios de contenido, y existe algún grado de acoplamiento entre ambos, la recomendación será clonar el espacio y realizar las modificaciones sobre la copia. Luego, cuando el sitio sea promovido a producción, aplicar los mismos cambios al espacio de contenido original.

#### Uso de Sistemas de Diseño
Modyo posee diferentes formas de implementar [sistemas de diseño](/es/architecture/patterns/design-system), las cuales varían en complejidad según el escenario en el que se desean aplicar.

Para el caso de un sitio público, el sistema de diseño se puede implementar sin ningún problema usando sus formas más simples, como librerías o frameworks de CSS que incorporen reglas consistentes para todos los elementos que lo componen. Los sitios creados dentro de Modyo utilizan [Bootstrap](https://getbootstrap.com) como framework CSS por defecto, sobre el cual se pueden realizar personalizaciones sobre todas las variables habilitadas para ello.


### Accesiblidad
Dentro de un sitio público, la [accesibilidad](/es/architecture/patterns/accessibility) se considera un atributo importante a tener presente con el propósito de ofrecer la mejor experiencia posible a personas que requieran de alguna ayuda especial.

Para implementar un sitio público accesible con Modyo, el primer paso es aprovechar las [capacidades de accesibilidad nativas](https://getbootstrap.com/docs/5.2/getting-started/accessibility) del toolkit [Bootstrap](https://getbootstrap.com), en el cual se definen controles y estándares para muchos de elementos base que deben tenerse presente. Un segundo paso podría ser identificar el objetivo de accesibilidad, hasta qué punto se desea incluir facilidades de acceso, y en base a eso seguir implementando ayudas que podrían ser cambio de colores a mayor contraste, tamaños, versiones simplificadas del contenido, entre otras.

Otro elemento a considerar, es el uso de tags de Liquid para la incrustación de elementos desde el Media Library de Modyo. Con esto aseguramos que cada imagen incrustada en el sitio posee correctamente definidos sus textos alternativos y descripciones, además de asegurarse que éstas podrán ser mantenidas de una forma centralizada.


### Internacionalización
La [internacionalización](/es/architecture/patterns/internationalization) dentro de un sitio público es un requerimiento para el cual la plataforma hoy en día no ofrece una solución en particular. Si bien los contenidos pueden definirse indicando un idioma en específico, al momento de configurar un sitio, éstos soportan sólo un lenguaje. Es por ello que para implementar un segundo o tercer lenguaje, la única opción soportada hoy es clonar el sitio y modificarlo para que se adapte al lenguaje deseado. 

Es importante mencionar que al implementar lenguajes con clonación de sitios, no se están duplicando los contenidos de los espacios, ya que éstos sí tienen soporte para múltiples idiomas. Por otro lado, también es importante mencionar que cualquier técnica Javascript o dinámica para alterar el lenguaje de un sitio sin seguir nuestra recomendación podría impactar en muchos de los atributos mencionados dentro de esta guía, como accesibilidad o indexación.

:::tip Modyo 10
La próxima versión de Modyo contendrá un soporte mejorado de internacionalización el cual permitirá trabajar con múltiples lenguajes sobre un mismo sitio, dejando la opción de que este pueda cambiar de forma dinámica sin necesidad de duplicar el trabajo.
:::


### Búsqueda
Dentro de un sitio público, la búsqueda de contenido es un elemento importante a considerar. Para ello la plataforma cuenta con un buscador interno, que indexa el contenido presente en el sitio y otorga una interfaz simple para entregar los resultados. El buscador de la plataforma utiliza criterios internos para determinar la relevancia de un resultado, basados principalmente en prácticas comunes de indexación (títulos por sobre descripciones, frecuencia, palabras claves, etc).

En el caso de que se requieran funcionalidades más avanzadas de búsqueda, se pueden implementar soluciones externas de indexación.

#### Implementación de búsqueda externa
Dentro del mercado, existen varias alternativas para implementar búsqueda dentro de un sitio. Una de las más populares es [Algolia](https://www.algolia.com). Algolia es una solución completa de indexación y de búsqueda, que permite activar funcionalidades avanzadas como criterios de relevancia, A/B testing, funcionalidades de AI, búsqueda en tiempo real, entre muchas otras.

La integración entre Algolia y Modyo se puede realizar de diferentes formas, pero en el caso de los sitios públicos, basta con un crawler de indexación, similar a cómo Google indexa información de los sitios que visita.

Otra alternativa a considerar, podría ser [ElasticSerch](https://www.elastic.co/web-crawler), el cual posee un producto específico de indexación y búsqueda en sitios públicos.

:::tip Uso de indexadores externos
Modyo recomienda el uso de indexadores externos sólo en casos en dónde se pueda justificar su incorporación, ya que estas herramientas generan costos adicionales que pueden ser elevados según el volumen de búsquedas que se realicen en ellas.
:::


#### Optimización para Motores de Búsqueda (SEO)
Otro tema importante a la hora de considerar la búsqueda e indexación de contenidos, son los motores de búsqueda públicos, como es el caso de [Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide). Estos motores son claves en la implementación de un sitio público ya que permiten obtener tráfico orgánico derivado de las búsquedas que los usuarios hacen en ellos. Aplicando técnicas estructuradas es posible acceder a las primeras páginas de resultados, siempre y cuando el motor considere que la información presente en el sitio para ese término de búsqueda sea relevante.

Modyo posee diferentes habilitadores que permiten incorporar elementos de estructura que facilita la indexación por parte de estos motores. Dentro de las más utilizadas podemos mencionar:
- Uso de meta tags dinámicos en páginas de contenido
- Uso de meta tags generales para el sitio, con la opción de modificarlos en casos específicos
- Uso de [SSR](/es/architecture/patterns/ssr) para asegurar que los buscadores encuentren lo que necesitan de forma rápida, directamente en el HTML (sin la necesidad de construir el contenido en base a APIs externas y Javascript)
- Rendimiento de los sitios públicos

:::tip Expertos de Modyo
La optimización para motores de búsqueda puede ser un tema muy relevante para cumplir con los objetivos de negocio, y a su vez bastante complejo de abordar. Modyo ofrece servicios profesionales con expertos en SEO que pueden ayudar a definir e implementar estrategias para maximizar los resultados. Si deseas recibir más información, contáctate con un ejecutivo comercial o de clientes de Modyo.
:::


### Analítica
La analítica Web, del punto de vista de los equipos de marketing, es posiblemente el punto más importante a considerar dentro de la implementación de un sitio público, por la sencilla razón que es la única forma  de poder medir que el resto de los atributos del sitio funcionen y se puedan cumplir con los objetivos del negocio.

:::tip Integración
Para efectos de analítica en sitio público, Modyo no ofrece dentro de su plataforma ningún tipo de herramienta propia para tomar métricas de tráfico público. Esto debido a que en la industria ya existen actores consolidados, que además, ofrecen excelentes formas de integración, como es el caso de [Google Analytics](https://marketingplatform.google.com).
:::

#### Marcaje
El marcaje para Google Analytics se refiere a la implementación de código en un sitio web o aplicación para recopilar datos y métricas de seguimiento que luego se analizan en la plataforma de Google Analytics. Este proceso implica incrustar el código de seguimiento proporcionado por Google en las páginas web o en el flujo de la aplicación. Una vez que el código está en su lugar, Google Analytics comienza a recopilar información sobre el tráfico del sitio, el comportamiento de los usuarios y otros datos relevantes.

El marcaje para Google Analytics es esencial para el seguimiento y la evaluación del rendimiento del sitio o la aplicación. Permite a los propietarios y administradores del sitio entender cómo los usuarios interactúan con su contenido, qué páginas son más populares, cuánto tiempo pasan en el sitio, las fuentes de tráfico, las conversiones y otros detalles importantes. Estos datos son valiosos para tomar decisiones informadas sobre estrategias de marketing, diseño de sitio y optimización de la experiencia del usuario.

Para implementar el marcaje con Modyo, se deberán primero definir los objetivos de negocio que se desean medir y luego implementar el código y etiquetas dentro de las plantillas de los sitios. El marcaje permitirá capturar los eventos que suceden en el sitio, correlacionarlos con otros datos y obtener valiosa información acerca de cómo los usuarios interactúan con él. 



### Rendimiento
El [rendimiento](/es/architecture/resources/web-performance) es uno de los requerimientos más importantes a considerar a la hora de implementar un sitio público, no solo para una buena experiencia del usuario, sino que también para mejorar el posicionamiento en buscadores y las tasas de conversión dentro del sitio.

El rendimiento de un sitio Web se ve afectado por múltiples factores, algunos de ellos fuera del control de quién implementa como podría ser el caso de problemas de conectividad o en el dispositivo del visitante. Otros factores si serán responsabilidad del implementador, entre ellos podemos mencionar los referidos a la complejidad de renderización de la página, la cual se afecta principalmente por el Javascript que se ejecuta desde el lado del cliente, uso de imágenes no optimizadas en peso y dimensiones, servidores Web lejanos al usuario, entre muchos otros.

Modyo Cloud y Enterprise Cloud poseen características únicas que permiten implementar las mejores prácticas de desarrollo y favorecer una excelente experiencia de usuario. Entre ellas podemos mencionar las más relevantes:
- Uso de redes de distribución globales de contenido
- Optimización de imágenes dinámica
- Uso de estándares modernos de compresión de imágenes
- Uso de HTTP3 en conjunto con TLS 1.3
- Uso de rutas optimizadas de Internet entre los usuarios finales y el servidor de origen
- [Server side rendering (SSR)](/es/architecture/patterns/ssr) con Liquid

:::tip Modyo Enterprise On Premise
En el caso de Modyo Enterprise On Premise, se pueden implementar características similares con la configuración de proveedores similares a los utilizados en Cloud.
:::

### Privacidad
Finalmente, dentro de los requerimientos más importantes que todo sitio público debe considerar, se encuentran los de privacidad sobre los datos de los usuarios. El cuidado de la privacidad no sólo es importante desde un punto de vista legal y regulatorio, si no que demuestra el cuidado que tiene la organización en hacer las cosas de forma correcta y transparente.

Dentro de un sitio público, se maneja una cantidad reducida de información de usuario, pero eso no quita que se deban cumplir con requerimientos tales como:
- **Cookie Banners:** Corresponden a los banners que presentan al usuario la opción de desactivar el tracking de ciertas cookies dentro del sitio, de forma completa o individual. El banner debe ser capaz de detallar la razón de cada cookie que se desea instalar en el navegador del usuario.
- **Cookie Policy:** Corresponde a la política que mantiene el sitio sobre el tipo de cookies utilizadas y su propósito, además de lo que eventualmente podría suceder con la experiencia del usuario en caso de no aceptarlas. La cookie policy generalmente se aceptan en el cookie banner.
- **Privacy Policy:** Corresponde a la política de la organización con respecto a la privacidad de los datos del usuario dentro del contexto del sitio. En el caso que el sitio público sea la antesala de un sistema privado o transaccional, esta política puede tener un alcance que le dé cobertura al sistema por completo.
- **Gestión de consentimiento:** Se trata de almacenar diligentemente los consentimientos derivados de cualquier aceptación de condiciones por parte del usuario. Los registros de consentimiento deben almacenarse durante un tiempo, dependiendo de la regulación vigente en cada país.

### Otros requerimientos
Finalmente, reservamos algunos requerimientos en específico que conviene tener en cuenta a la hora de implementar un sitio público.

#### Uso de PWA
En el caso de los sitios públicos, el uso de las técnicas de PWA no se recomienda como sí se hace en los sitios privados, ya que los sitios públicos generalmente no se asocian al concepto de “aplicación” y en general no prestarán un valor o una experiencia personalizada al usuario por instalarlo.
