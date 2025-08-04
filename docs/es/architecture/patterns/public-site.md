---
search: true
---

# Sitio Público
Un sitio público es accesible para cualquier persona en Internet. Su propósito es compartir información, ofrecer servicios e interactuar con el público en general, proporcionando una experiencia uniforme para todos los visitantes.

Los sitios públicos pueden tener diversos propósitos, tales como:
- Corporativos o informativos
- Captura de prospectos
- Generación de clientes
- Marketing y promociones
- Noticias y blogs

<!-- Hack to avoid this title to be displayed in the TOC element -->
<h3><a href="#¿como-implementar-sitios-publicos-con-modyo" class="header-anchor">#</a> ¿Cómo implementar sitios públicos con Modyo?</h3>

Modyo proporciona las herramientas esenciales para crear y mantener sitios públicos de forma ágil, segura y eficiente. La combinación de sus aplicaciones de contenido y canales ofrece acceso a todas las funcionalidades necesarias en cada etapa del ciclo de vida del sitio.

Arquitectónicamente, la implementación de un sitio público en Modyo es un proceso común y relativamente simple. Sin embargo, su éxito depende de considerar múltiples detalles, entre ellos:

[[toc]]

Dependiendo del resultado que buscas, estos requerimientos pueden impactar de diversas maneras en las decisiones de implementación. En esta guía te explicamos los conceptos más relevantes de cada uno de ellos.

### Estructura y modularidad
Las decisiones iniciales al implementar un sitio en Modyo deben centrarse en la estructura y modularidad, ya que de ellas dependen los demás requisitos. Un sitio bien estructurado es más fácil de mantener y desarrollar. A continuación, se exploran los criterios clave.

#### Múltiples Sitios y Organizaciones
Modyo utiliza una arquitectura multisitio y multiorganización que permite separar la administración en diferentes equipos, estén o no relacionados.

Generalmente, la separación se realiza por organizaciones filiales o subsidiarias independientes, creando silos de implementación que no comparten administración, pero sí la infraestructura física de la plataforma.

:::warning Organizaciones y licenciamiento
Al usar organizaciones, considera los límites de tu licencia. El límite máximo de organizaciones puede ampliarse previa validación comercial.
:::

#### Uso de Páginas y Layouts
Los [layouts](/es/platform/channels/templates.md#layouts) son una excelente forma de diferenciar contextos dentro de un sitio. Un layout puede ser compartido por múltiples [páginas](/es/platform/channels/pages), y cada página puede tener un solo layout. Dentro del layout, se pueden definir elementos reutilizables entre las páginas, como encabezados, pies de página y meta etiquetas.

Los layouts aseguran coherencia visual entre las páginas, aunque casos específicos (ej. una página de promoción) pueden requerir layouts diferentes.

Además, las páginas pueden agruparse en jerarquías, asegurando una estructura organizada para los elementos del sitio.

#### Uso de Templates y Snippets
Los [templates](/es/platform/channels/templates) o plantillas son documentos Liquid que se renderizan dinámicamente en la plataforma. Pueden representar páginas HTML, layouts, hojas de estilo CSS o archivos JavaScript.

Los [snippets](/es/platform/channels/templates.md#snippets) o fragmentos son útiles para organizar código fuente y pueden referenciarse desde diferentes plantillas Liquid del mismo sitio. Permiten modularizar y reutilizar funciones, facilitando la descomposición de funcionalidades complejas en partes más simples. Los snippets se renderizan dinámicamente al cargar la página.

:::warning Recursividad y rendimiento
Un error común al usar snippets es la llamada recursiva de referencias circulares. En tal caso, la plataforma detiene la ejecución para evitar la saturación de recursos.

El exceso de snippets en un sitio también puede ralentizar la carga de la página debido al procesamiento adicional.
:::

#### Uso de Widgets
En Modyo, los [widgets](/es/platform/channels/widgets) permiten organizar y modularizar la funcionalidad de negocio.

Los widgets contienen código HTML, CSS y Javascript que se modifica y despliega en conjunto, sin afectar al sitio. Se diferencian de las plantillas y snippets por su ámbito de ejecución independiente, encapsulando código autocontenido que se ejecuta de forma autónoma, sin impactar el entorno del sitio web.

El widget builder en la consola de administración de Modyo, al igual que el editor de plantillas, ofrece control completo del ciclo de desarrollo del widget, incluyendo previsualización, versionamiento y despliegue.

Los widgets, junto con los snippets y su builder, son una excelente opción para funcionalidades de baja o mediana complejidad con uso limitado de Javascript. En escenarios más complejos, se recomienda el uso de [micro frontends](/es/architecture/patterns/micro-frontend).

#### Uso de Micro Frontends
Los [micro frontends](/es/architecture/patterns/micro-frontend) son un tipo especial de widgets que permiten un flujo de trabajo más sofisticado. El código se desarrolla fuera de la plataforma y se introduce mediante la línea de comandos de Modyo.

Los micro frontends se compilan de forma estática antes de cargarse en Modyo. Esto permite el uso de librerías y frameworks avanzados, e incorporar flujos de revisión estática de código para garantizar su calidad y seguridad.

:::warning Sobre-ingeniería
La implementación de micro frontends en un sitio público puede añadir complejidad (ej. gestión de flujos de integración continua y procesos DevOps). Esta complejidad adicional suele requerir apoyo de las áreas de IT, por lo que debe evaluarse si está justificada.
:::

#### Uso de Frameworks de Javascript
En sitios públicos, se recomienda minimizar la dependencia de JavaScript y evitar el uso de frameworks como ReactJS o Vue.

Esta recomendación se basa tanto en la complejidad inherente del código de cada dependencia, que puede afectar las características esenciales de un sitio web, como en la tendencia a incurrir en costos adicionales al implementar sitios públicos con frameworks avanzados de Javascript.

Otras razones para evitar el uso de frameworks de JavaScript en sitios públicos incluyen:

- **Rendimiento**: El uso excesivo de JavaScript puede ralentizar la carga de la página, especialmente en dispositivos con conexiones lentas o recursos limitados, ya que el navegador debe descargar y ejecutar el código para mostrar y manipular los elementos.
- **Accesibilidad**: Usuarios con discapacidades visuales (lectores de pantalla), conexiones lentas, dispositivos antiguos o aquellos que deshabilitan JavaScript pueden tener dificultades para acceder y usar contenido interactivo.
- **Mantenimiento y compatibilidad**: Reducir las dependencias de JavaScript simplifica el mantenimiento del sitio y mejora la compatibilidad con diversos navegadores y dispositivos.
- **Seguridad**: Limitar el uso de JavaScript disminuye la superficie de ataque potencial y mejora la seguridad del sitio.

En lugar de frameworks de Javascript, se sugiere optar por HTML estático y, si es necesario, aprovechar el lenguaje Liquid.

No obstante, para componentes complejos específicos de un sitio público (ej. simuladores, buscadores de sucursales, resúmenes financieros), el uso de un framework puede ser indicado, y la estrategia de implementación recomendada es utilizar micro frontends.

El objetivo es lograr un equilibrio adecuado entre elementos estáticos y dinámicos para ofrecer una experiencia de usuario óptima.

:::warning Sobre-ingeniería
Al igual que con los micro frontends, el uso de frameworks de Javascript en un sitio público puede implicar complejidad adicional. Por ello, no se recomienda emplearlos a menos que los beneficios estén claramente identificados.
:::


#### Web Components
Los [web components](/es/architecture/patterns/web-components) son una técnica de modularización basada en estándares de HTML, CSS y JS. Actualmente, su soporte uniforme en navegadores es limitado, aunque mejora gradualmente. Para una implementación segura, se requiere una librería JavaScript que aborde estas incompatibilidades. Por ello, en sitios públicos, el uso de Web Components puede generar más problemas que beneficios, como se menciona en secciones anteriores.

Como alternativa a los Web Components, los sitios públicos pueden beneficiarse de opciones más ligeras y estándar, como el framework CSS [Bootstrap](https://getbootstrap.com), integrado nativamente en la plataforma Modyo. Además, la funcionalidad de snippets facilita la reutilización de código de forma análoga a los Web Components.

### Gobernabilidad de contenido y códigos fuente
En cada proyecto de sitio público, la gobernabilidad del contenido y el código fuente es un elemento central. La implementación debe alinearse con las expectativas del negocio sobre la gestión de futuras actualizaciones, respetando los flujos de aprobación de cambios y el nivel adecuado de separación entre el contenido y su lógica de implementación.

Las principales funcionalidades de la plataforma, que permiten una correcta gobernabilidad de los sitios públicos, son:

#### Grupos y permisos
Modyo permite la creación de múltiples espacios de contenido y sitios con roles y grupos de permisos específicos para cada usuario. Esto posibilita asignar a un mismo usuario permisos elevados en un sitio y más limitados en otro.

En Modyo, los roles y grupos se definen a nivel de organización y se asignan individualmente a cada espacio y sitio. Se recomienda asegurar que los usuarios tengan los permisos mínimos necesarios para sus funciones, evitando modificaciones no deseadas (accidentales o intencionadas).


#### Múltiples espacio de contenido
La plataforma ofrece un entorno de gestión de contenido híbrido. Se puede acceder al contenido gestionado de forma descentralizada mediante la API, aprovechando el máximo nivel de desacoplamiento, o a través de _content pages_, un tipo especial de página que se integra automáticamente con el espacio configurado y está disponible en cada sitio.

:::tip Experiencia de CMS tradicional
:::tip Experiencia de CMS tradicional
La combinación de espacios de contenido y páginas de contenido ofrece una experiencia de uso similar a la de un CMS convencional, donde cada contenido está vinculado a una representación.

En Modyo, un mismo contenido puede desplegarse en múltiples páginas de diversas maneras, permitiendo a los editores previsualizarlo en la página que elijan.
:::

:::

#### Uso de Team Review
El [team review](/es/platform/core/key-concepts.md#revision-en-equipo) o revisión de equipos es una funcionalidad de Modyo que permite configurar de forma simple y flexible a los usuarios responsables de revisar elementos antes de su publicación. Los revisores pueden previsualizar el cambio o contenido y hacer comentarios para corregir aspectos necesarios. El menú de team review es accesible desde la configuración de los espacios de contenido y los sitios.

El uso de team review es altamente recomendable en sitios públicos donde se busca máxima agilidad en la publicación y, al mismo tiempo, minimizar los controles de aprobación para revisiones simples.

#### Ambientes de desarrollo
Generalmente, en un sitio público, los cambios más comunes son pequeños y se refieren a ajustes en contenido (ej. noticias, promociones, tarifas, ubicaciones de sucursales o anuncios en páginas principales).

Los cambios más complejos, que afectan al diseño, se realizan con menor frecuencia y en situaciones específicas. Por lo tanto, para la mayoría de las modificaciones, un flujo de aprobación de cambios bien configurado es suficiente para el control del sitio. Las técnicas avanzadas se reservan para cambios estructurales.

Para trabajar en ambientes de desarrollo separados antes de implementar cambios en producción, Modyo ofrece diversas alternativas. La opción más directa y adecuada para pruebas de cambios arriesgados o experimentales es el uso de ambientes físicos pre-productivos, incluidos por defecto en las versiones empresariales de la plataforma. Sin embargo, no se recomienda este tipo de ambiente para operaciones diarias en sitios públicos, debido a las dificultades de sincronización de contenido entre infraestructuras.

Otra forma de gestionar ambientes previos, mediante virtualización dentro de la misma plataforma, es a través del uso de stages, como se explica a continuación.

:::tip Pruebas de nuevas versiones
Modyo recomienda el uso de ambientes físicos para pruebas de nuevas versiones de la plataforma, dado que el riesgo de incompatibilidad tiene un impacto menor en este contexto.
:::

#### Uso de Stages
En sitios públicos, Modyo recomienda gestionar ambientes previos utilizando la funcionalidad de [stages](/es/platform/channels/sites.md#stages), que permite crear entornos pre-productivos virtualizados dentro del mismo despliegue de producción. Esta técnica evita la necesidad de mover cambios y archivos entre ambientes, reduciendo la posibilidad de errores en la publicación.

El uso de stages posibilita la creación de entornos separados y aislados para construir, probar y verificar el funcionamiento del sitio antes de su despliegue en producción. Esto ayuda a prevenir fallos que podrían afectar a los usuarios finales. Para sitios públicos, se pueden definir, por ejemplo, los siguientes stages:

- **Develop**: para llevar a cabo el desarrollo e integración de cambios.
- **Certification**: destinado a pruebas previas al despliegue en producción.
- **Main**: versión productiva del sitio.

Los stages pueden tener configuraciones independientes (ej. variables del sitio), lo que permite ajustar comportamientos entre diferentes ambientes (ej. cambiar la URL de una API que proporciona información al sitio).

Si al utilizar stages, en conjunto con espacios de contenido, existe cierto grado de acoplamiento entre ambos, recomendamos clonar el espacio y realizar modificaciones en la copia. Luego, al promover el sitio a producción, los mismos cambios se aplicarán al espacio de contenido original.

#### Uso de Sistemas de Diseño
Modyo ofrece diferentes formas de implementar [sistemas de diseño](/es/architecture/patterns/design-system), cuya complejidad varía según el escenario en el que se desean aplicar.

Para sitios públicos, es posible implementar sistemas de diseño de manera sencilla utilizando librerías o frameworks de CSS que establezcan reglas consistentes para todos los elementos. Los sitios creados en Modyo utilizan [Bootstrap](https://getbootstrap.com) como framework CSS predeterminado, que puedes personalizar a través de las variables habilitadas para ello.

### Accesiblidad
Dentro de un sitio público, la [accesibilidad](/es/architecture/patterns/accessibility) es fundamental para proporcionar la mejor experiencia posible a personas que requieren asistencia especial.

Para implementar un sitio público accesible con Modyo, el primer paso es aprovechar las [capacidades de accesibilidad nativas](https://getbootstrap.com/docs/5.2/getting-started/accessibility) del kit de herramientas [Bootstrap](https://getbootstrap.com), que define controles y estándares para muchos elementos básicos. Un segundo paso implica determinar el nivel de accesibilidad deseado y, en función de eso, implementar ayudas como cambios en el contraste de colores, ajustes en tamaños y versiones simplificadas del contenido, entre otras posibilidades.

Otro aspecto importante es la utilización de etiquetas Liquid para insertar elementos desde la Media Library de Modyo. Esto garantiza que cada imagen incorporada en el sitio cuente con textos alternativos y descripciones adecuadas, además de centralizar su mantenimiento.

### Internacionalización
La [internacionalización](/es/architecture/patterns/internationalization) en un sitio público es un requisito para el cual la plataforma actualmente no ofrece una solución específica. Al configurar un sitio, los contenidos pueden definirse con un idioma específico, sin embargo, el sitio solo admite un lenguaje. Por lo tanto, para implementar un segundo o tercer idioma, la única opción actualmente es clonar el sitio y ajustarlo al idioma deseado.

Es importante destacar que al implementar idiomas mediante la clonación de sitios, los contenidos de los espacios no se duplican, ya que estos sí admiten varios idiomas. A la vez, es relevante mencionar que cualquier técnica basada en JavaScript o dinámica para cambiar el idioma de un sitio sin seguir nuestras recomendaciones puede afectar diversos atributos mencionados en esta guía, como la accesibilidad o la indexación.

### Búsqueda
En un sitio público, la búsqueda de contenido es un elemento fundamental. Para ello, la plataforma dispone de un buscador interno que indexa el contenido del sitio y proporciona una interfaz sencilla para mostrar los resultados. Este buscador utiliza criterios internos para evaluar la relevancia de los resultados, basándose en prácticas comunes de indexación como priorizar títulos sobre descripciones, frecuencia de palabras clave, entre otros.

Si requieres funcionalidades más avanzadas de búsqueda, puedes también implementar soluciones externas de indexación.

#### Implementación de búsqueda externa
Existen diversas alternativas, en el mercado, para incorporar capacidades de búsqueda en un sitio. Una de las más populares es [Algolia](https://www.algolia.com), una solución completa de indexación y búsqueda que permite activar funciones avanzadas como criterios de relevancia, pruebas A/B, inteligencia artificial, búsqueda en tiempo real, entre otras.

Puedes realizar la integración entre Algolia y Modyo de diversas formas. Para sitios públicos, un rastreador de indexación similar al que utiliza Google para indexar información de los sitios visitados suele ser suficiente.

Otra opción a considerar es [ElasticSerch](https://www.elastic.co/web-crawler), que ofrece un producto específico para la indexación y búsqueda en sitios públicos.

:::tip Uso de indexadores externos
Modyo recomienda el uso de indexadores externos sólo en casos en dónde se pueda justificar su incorporación, ya que estas herramientas generan costos adicionales que pueden ser elevados según el volumen de búsquedas que se realicen en ellas.
:::


#### Optimización para Motores de Búsqueda (SEO)
Otro tema importante respecto a la búsqueda e indexación de contenidos, son los motores de búsqueda públicos, como [Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide). Estos motores son esenciales para los sitios públicos, ya que generan tráfico orgánico proveniente de las consultas realizadas por usuarios. Al aplicar técnicas estructuradas, es posible aparecer en las primeras páginas de resultados, siempre y cuando el motor considere relevante la información proporcionada por el sitio para esa consulta específica.

Modyo tiene diversas funcionalidades que te permiten incorporar elementos estructurados para facilitar la indexación por parte de estos motores. Algunas de las más utilizadas incluyen:

- Uso de meta tags dinámicos en páginas de contenido
- Uso de meta tags generales para el sitio, con la opción de modificarlos en casos específicos
- Implementación de renderización en el lado del servidor [SSR](/es/architecture/patterns/ssr) para asegurar que los buscadores encuentren la información rápidamente y directo en el HTML, sin depender de APIs externas ni JavaScript para construir el contenido
- Rendimiento de los sitios públicos

:::tip Expertos de Modyo
La optimización para motores de búsqueda puede ser fundamental para lograr los objetivos empresariales, pero también puede resultar complejo abordarlo. Modyo pone ofrece servicios profesionales con expertos en SEO que pueden colaborar en la definición e implementación de estrategias para maximizar los resultados. Si deseas obtener más información, no dudes en ponerte en contacto con un ejecutivo comercial o de atención al cliente de Modyo.
:::


### Analítica
La analítica Web, desde la perspectiva de los equipos de marketing, es posiblemente el punto más importante a considerar dentro de la implementación de un sitio público. Esto se debe a que es la única manera de medir el funcionamiento de los demás atributos del sitio y lograr los objetivos comerciales.

:::tip Integración
Para efectos de analítica en sitio público, Modyo no ofrece dentro de su plataforma ningún tipo de herramienta propia para tomar métricas de tráfico público. Esto debido a que en la industria ya existen actores consolidados, que además, ofrecen excelentes formas de integración, como es el caso de [Google Analytics](https://marketingplatform.google.com).
:::

#### Marcaje
Para Google Analytics, marcaje se refiere a la implementación de código en un sitio web o aplicación para recopilar datos y métricas de seguimiento que luego se analizan en la plataforma de Google Analytics. Este proceso implica incrustar el código de seguimiento proporcionado por Google en las páginas web o en el flujo de la aplicación. Una vez que el código está en su lugar, Google Analytics comienza a recopilar información sobre el tráfico del sitio, el comportamiento de los usuarios y otros datos relevantes.

El marcaje para Google Analytics es esencial para el seguimiento y la evaluación del rendimiento del sitio o la aplicación. Permite a los propietarios y administradores del sitio entender cómo los usuarios interactúan con su contenido, qué páginas son más populares, cuánto tiempo pasan en el sitio, las fuentes de tráfico, las conversiones y otros detalles importantes. Estos datos son valiosos para tomar decisiones informadas sobre estrategias de marketing, diseño de sitio y optimización de la experiencia del usuario.

Para implementar el marcaje con Modyo, se deberán primero definir los objetivos de negocio que se desean medir y luego implementar el código y etiquetas dentro de las plantillas de los sitios. Además, puedes utilizar Google Tag Manager, desde dónde podrás administrar definiciones de marcaje de forma externa al sitio. El marcaje te permite capturar los eventos que suceden en el sitio, correlacionarlos con otros datos y obtener información valiosa sobre la interacción de los usuarios con el sitio.



### Rendimiento
El [rendimiento](/es/architecture/resources/web-performance) es uno de los requerimientos más importantes al implementar un sitio público, no solo para garantizar una experiencia positiva para el usuario, sino también para mejorar el posicionamiento en los motores de búsqueda y las tasas de conversión en el sitio.

El rendimiento de un sitio Web es afectado por múltiples factores, algunos de ellos fuera del control del implementador, como problemas de conectividad o en el dispositivo del visitante. Otros factores si son responsabilidad del implementador, como la complejidad de renderización de la página, influenciada principalmente por el JavaScript que se ejecuta en el lado del cliente, el uso de imágenes no optimizadas en términos de peso y dimensiones, la distancia entre los servidores web y los usuarios, entre otros.

Modyo Cloud y Enterprise Cloud poseen características únicas que te permiten implementar las mejores prácticas de desarrollo y ofrecer una experiencia de usuario excepcional. Algunas de estas características clave son:
- Utilización de redes de distribución global de contenido
- Optimización dinámica de imágenes
- Aplicación de estándares modernos de compresión de imágenes
- Uso de HTTP3 en conjunto con TLS 1.3
- Utilización de rutas de internet optimizadas entre los usuarios finales y el servidor de origen
- Renderización en el lado del servidor [(SSR)](/es/architecture/patterns/ssr) con Liquid

:::tip Modyo Enterprise On Premise
En el caso de Modyo Enterprise On Premise, puedes implementar características similares, mediante la configuración de proveedores comparables a los utilizados en Cloud.
:::

### Privacidad
Por último, entre los requisitos más importantes que un sitio público debe considerar, son aquellos relacionados con la privacidad de los datos de los usuarios. La atención a la privacidad es importante no solo desde un punto de vista legal y regulatorio, sino también como una manifestación del compromiso de la organización de hacer las cosas de manera correcta y transparente.

En un sitio público, se maneja una cantidad limitada de información de usuario, pero esto no exime el cumplimiento de requisitos como:
- **Cookie Banners**: Corresponde a los banners que brindan a los usuarios la opción de deshabilitar el seguimiento de ciertas cookies en el sitio, de manera completa o individual. El banner debe explicar la razón de cada cookie que se pretende instalar en el navegador del usuario.
- **Cookie Policy**: Corresponde a la política que mantiene el sitio sobre el tipo de cookies utilizadas y su propósito, además de lo que eventualmente podría suceder con la experiencia del usuario en caso de no aceptarlas. La cookie policy generalmente se aceptan en el cookie banner.
- **Privacy Policy**: Engloba la política de la organización con respecto a la privacidad de los datos del usuario en el contexto del sitio. Si el sitio público es un punto de entrada a un sistema privado o transaccional, esta política puede extenderse para cubrir todo el sistema.
- **Gestión de consentimiento**: Consiste en registrar de manera precisa los consentimientos derivados de cualquier aceptación de condiciones por parte del usuario. Los registros de consentimiento deben guardarse durante un período determinado, conforme a las regulaciones vigentes en cada país.

### Otros requerimientos
Finalmente, reservamos algunos requerimientos en específico que conviene tener en cuenta a la hora de implementar un sitio público.

#### Uso de PWA
En el caso de los sitios públicos, no recomendamos utilizar las técnicas de Progressive Web App (PWA) como sí se hace en los sitios privados. Los sitios públicos generalmente no están asociados al concepto de _aplicación_ y, por lo general, no brindan un valor o experiencia personalizada al usuario mediante su instalación. Algunas excepciones a esto son el uso del modo offline y la optimización del SEO a través de metadatos aplicativos. Estas medidas mejoran la experiencia del usuario y aumentan la visibilidad en motores de búsqueda, respectivamente.