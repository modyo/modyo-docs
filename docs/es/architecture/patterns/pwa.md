---
search: true
---

# Progressive Web Applications

Las Progressive Web Applications (PWA) son aplicaciones web que combinan características de las aplicaciones móviles y de las páginas web tradicionales. Son desarrolladas utilizando tecnologías web estándar, como HTML, CSS y JavaScript, pero se caracterizan por su capacidad para funcionar de manera confiable y brindar una experiencia de usuario enriquecida, incluso en condiciones de conectividad limitada o ausente.

Las PWAs ofrecen diversas ventajas. Por un lado, pueden ser instaladas en el dispositivo del usuario, de modo que se pueden acceder a ellas desde el escritorio o la pantalla de inicio del dispositivo móvil, sin necesidad de una tienda de aplicaciones. Además, pueden funcionar en modo desconectado o con conexiones intermitentes, gracias a la capacidad de almacenamiento en caché de los navegadores modernos. Esto permite que los usuarios accedan y naveguen por la aplicación incluso sin conexión a Internet.

Otras características clave de las PWAs incluyen notificaciones push, acceso al hardware del dispositivo (como la cámara o el GPS), capacidad de respuesta y adaptabilidad a diferentes tamaños de pantalla, y actualizaciones automáticas para garantizar que los usuarios siempre tengan la versión más reciente de la aplicación.

### AppShell Nativo

Los AppShells permiten empaquetar una PWA para ser distribuída en los mercados de aplicaciones de los diferentes proveedores. En escencia, el AppShell implementa internamente un WebView que se encarga de presentar la experiencia al usuario.

Otro uso común de los AppShell es cuando se desea extender la funcionalidad de la aplicación Web con elementos nativos dependientes de cada plataforma.

:::warning WebView vs Navegador Nativo
La tecnología de WebView difiere de forma significativa a los navegadores nativos dentro del dispositivo, por lo que muchas de las funcionalidades nativas presentes en el estándar del PWA no se encontrarán disponibles en el WebView.
:::

### Limitaciones de las PWA en iOS

Las principales razones por las que las PWA pueden tener limitaciones en iOS son:

- **Limitaciones del navegador:** En iOS, los navegadores disponibles, como Safari, tienen ciertas limitaciones en cuanto al soporte de funciones y tecnologías web. Esto puede afectar el rendimiento y la funcionalidad de las PWA en comparación con otros navegadores más modernos y compatibles con estándares web.
- **Limitaciones del servicio de notificaciones:** Las notificaciones push son una característica importante en las PWA para enviar actualizaciones y notificaciones a los usuarios. Sin embargo, en iOS, solo los navegadores Safari y Firefox permiten actualmente el uso de notificaciones push, mientras que otros navegadores pueden no admitir esta funcionalidad.
- **Problemas de almacenamiento en caché:** En iOS, el almacenamiento en caché de los recursos de una PWA puede ser más restrictivo en comparación con otras plataformas. Esto puede llevar a que algunas funcionalidades no funcionen correctamente o a problemas con la actualización de contenido en la PWA.
- **Limitaciones de ejecución en segundo plano:** iOS tiene restricciones estrictas en la ejecución de código en segundo plano para ahorrar batería y mejorar el rendimiento. Esto puede afectar la capacidad de una PWA para funcionar correctamente en situaciones en las que se requiere un procesamiento continuo en segundo plano.

Es importante destacar que Apple ha estado mejorando gradualmente el soporte de PWA en iOS y ha introducido nuevas funcionalidades en versiones más recientes del sistema operativo. Sin embargo, aún existen algunas limitaciones en comparación con otras plataformas.

A pesar de estas limitaciones, muchas PWA siguen siendo funcionales y útiles en iOS, aunque algunas características pueden no estar disponibles o pueden tener un rendimiento ligeramente inferior en comparación con otras plataformas. Siempre es recomendable realizar pruebas y evaluar la compatibilidad específica de la PWA en los dispositivos y navegadores de destino para garantizar una experiencia óptima.

### Trusted Web Activities

Trusted Web Activities (TWA) es una tecnología desarrollada por Google que permite empaquetar una Progressive Web App ( PWA) dentro de una aplicación nativa en Android. Con TWA, puedes utilizar la interfaz de usuario nativa de Android, como la barra de navegación y la barra de estado, para mostrar y ejecutar una PWA, brindando una experiencia similar a la de una aplicación nativa.

La principal ventaja de utilizar TWA es que puedes aprovechar las ventajas de las PWAs, como la capacidad de actualización instantánea y la compatibilidad multiplataforma, mientras brindas una apariencia y una experiencia de usuario nativas en Android. Al utilizar TWA, los usuarios pueden instalar la PWA desde la tienda de aplicaciones de Android y acceder a ella desde el lanzador de aplicaciones como si fuera una aplicación nativa.

TWA funciona utilizando Chrome Custom Tabs, que es una variante de Chrome integrada en la aplicación nativa. Esto permite mostrar el contenido de la PWA utilizando el motor de renderizado de Chrome y aprovechar las características de seguridad y rendimiento del navegador Chrome.

### TWA en iOS

Actualmente, Apple no tiene una funcionalidad directamente equivalente a Trusted Web Activities (TWA) que permita empaquetar Progressive Web Apps (PWA) dentro de una aplicación nativa en iOS.

Sin embargo, Apple ha introducido características y mejoras en iOS para mejorar la experiencia de las aplicaciones web en dispositivos iOS. Algunas de estas características son:

- **Add to Home Screen (Añadir a la pantalla de inicio):** iOS permite a los usuarios agregar un acceso directo a una PWA en la pantalla de inicio de su dispositivo, lo que brinda una experiencia similar a la de una aplicación nativa. Al abrir el acceso directo desde la pantalla de inicio, la PWA se ejecutará en el navegador Safari en pantalla completa.
- **Web App Manifest (Manifiesto de aplicaciones web):** El Web App Manifest es un archivo JSON que describe la PWA y sus características, como el nombre, los iconos, los colores temáticos y la orientación. Al definir correctamente el manifiesto, se puede mejorar la apariencia y la experiencia de la PWA en iOS.
- **Service Workers (Trabajadores de servicio):** Los Service Workers son una tecnología que permite el almacenamiento en caché de recursos, la funcionalidad sin conexión y la mejora del rendimiento de una PWA. Aunque Apple ha introducido limitaciones en la ejecución de Service Workers en segundo plano en iOS, aún se pueden aprovechar para mejorar la experiencia de la PWA mientras está activa en el navegador Safari.

Si bien estas características no son una solución idéntica a TWA, ofrecen opciones para mejorar la experiencia de las PWAs en dispositivos iOS. Es importante tener en cuenta que las tecnologías y las capacidades pueden evolucionar con el tiempo, y Apple podría introducir cambios o nuevas funcionalidades en futuras actualizaciones de iOS. Es recomendable seguir las actualizaciones y las directrices de desarrollo de Apple para aprovechar al máximo las capacidades de las PWAs en iOS.


### Ejemplos de PWAs
A continuación, algunos ejemplos destacados de Progressive Web Applications (PWA) que demuestran la versatilidad y eficacia de esta tecnología:

- **Twitter Lite**: Esta versión ligera de Twitter fue diseñada para ser rápida y eficiente en el consumo de datos. Ofrece una experiencia similar a la aplicación nativa, con características como notificaciones push y acceso offline.
- **Pinterest**: La PWA de Pinterest logró aumentar significativamente la tasa de participación de los usuarios y el tiempo que pasan en la plataforma. Proporciona una experiencia de usuario fluida con tiempos de carga rápidos.
- **Spotify Web Player**: Spotify ofrece una PWA que permite a los usuarios escuchar música y acceder a sus playlists sin necesidad de descargar una aplicación separada. Funciona en diferentes plataformas y navegadores.
- **Starbucks**: La PWA de Starbucks permite a los clientes ver el menú, personalizar sus pedidos y agregarlos a la cesta, incluso cuando están offline. Una vez que se restaura la conexión, pueden completar la compra.
- **Uber**: La versión web de Uber es una PWA que ofrece una experiencia de usuario similar a la aplicación nativa pero con un tiempo de carga más rápido y un consumo de datos menor. Es útil en áreas con conexiones a Internet limitadas o lentas.
- **Forbes**: La revista Forbes implementó una PWA para ofrecer una experiencia de lectura más rápida y atractiva. La aplicación carga rápidamente los contenidos y permite a los lectores continuar leyendo offline.
- **Alibaba**: El gigante del comercio electrónico chino desarrolló una PWA para mejorar la experiencia móvil de sus usuarios. Lograron aumentar las conversiones y la participación de los usuarios en dispositivos móviles.
- **OLX**: OLX es un mercado global en línea que utiliza una PWA para ofrecer una experiencia de navegación más rápida y eficiente. Esto resultó en un aumento en la participación y la retención de usuarios.
- **Flipkart**: Flipkart, uno de los mayores minoristas en línea de la India, creó una PWA llamada "Flipkart Lite". Ofrece una experiencia de compra eficiente con acceso offline y notificaciones push.
- **The Washington Post**: El periódico The Washington Post ofrece una PWA que proporciona una experiencia de lectura rápida y fluida. Los lectores pueden acceder a los artículos y continuar leyendo incluso cuando están offline.

Estos ejemplos muestran cómo diferentes industrias y empresas están utilizando las PWA para mejorar la experiencia de usuario, aumentar la participación y lograr otros objetivos comerciales clave. Las PWA pueden ser una solución eficaz para diversas necesidades y contextos.


### ¿Cómo se implementa una PWA con Modyo?

La plataforma Modyo posee soporte nativo para el trabajo con PWA, permitiendo a cualquier aplicación Web desarrollada en ella, tomar control de los habilitadores tecnológicos requeridos cómo son el Service Worker y el archivo de manifiesto PWA. Modyo otorga un ambiente de edición para dichos habilitadores y se encarga de la actualización de las modificaciones en los diferentes dispositivos.

Más allá del control de estos habilitadores, el resto de la PWA será una aplicación Web común, por lo que la experiencia de usuario y la adaptación de éstas en diferentes dispositivos y tamaños de pantalla, dependen directamente de quién las implementa.

:::tip App Shells Nativas
Las aplicaciones Web creadas en Modyo, podrán ser implementadas como aplicaciones nativas dentro de una cáscara o App Shell desarrollada para cada plataforma. El uso de App Shells nativas permitirá también la inclusión de las aplicaciones en las tiendas oficiales, cómo es el caso del Google Play Store o el Apple App Store. Las App Shells se implementan como proyectos de código a medida y podrán hacer uso de SDKs nativos del dispositivo, incrementando con ello sus capacidades con respecto a las PWA tradicionales.

Si deseas recibir más información acerca de esta técnica de empaquetamiento y cómo un experto nuestro podría asesorar o colaborar con tu desarrollo, no dudes en contactar a un ejecutivo comercial o de clientes de Modyo.
:::
