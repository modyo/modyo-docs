---
search: true
---

# Progressive Web Applications

Las Progressive Web Applications (PWA) son aplicaciones web que combinan características de las aplicaciones móviles y de las páginas web tradicionales. Se desarrollan utilizando tecnologías web estándar, como HTML, CSS y JavaScript y destacan por su capacidad de funcionar de manera confiable y brindar una experiencia de usuario completa, incluso en condiciones de conectividad limitada o ausente.

Ventajas de las PWA:

- **Instalación en el dispositivo:** Pueden instalarse en el dispositivo del usuario y accederse desde el escritorio o la pantalla de inicio, sin necesidad de una tienda de aplicaciones.
- **Funcionamiento offline:** Gracias al almacenamiento en caché de navegadores modernos, las PWA pueden funcionar con conexiones intermitentes o sin conexión a Internet.
- **Notificaciones push:** Pueden notificar a los usuarios, según se configuren.
- **Acceso a hardware del dispositivo:** Pueden acceder a la cámara, GPS y más del dispositivo del usuario.
- **Adaptabilidad a diferentes tamaños de pantalla:** Permitiendo unificar experiencias en diferentes dispositivos.
- **Actualizaciones automáticas:** Garantizan que los usuarios siempre tengan la versión más reciente de la aplicación.


### AppShell Nativo

Los AppShells empaquetan las PWA para su distribución en mercados de aplicaciones. Internamente, implementan un WebView que proporciona la experiencia al usuario. También se utilizan para extender la funcionalidad de la aplicación web con elementos nativos específicos de cada plataforma.

:::warning WebView vs Navegador Nativo
WebView difiere significativamente de los navegadores nativos del dispositivo, lo que puede limitar algunas funciones nativas de las PWA.
:::

### Limitaciones de las PWA en iOS

Las PWA pueden tener limitaciones en iOS debido a:

- **Limitaciones del navegador:** En iOS, los navegadores disponibles, como Safari, tienen ciertas limitaciones en cuanto al soporte de funciones y tecnologías web. Esto puede afectar el rendimiento y la funcionalidad de las PWA en comparación con otros navegadores más modernos y compatibles con estándares web.
- **Limitaciones del servicio de notificaciones:** Las notificaciones push son una característica importante de las PWA, pero solo los navegadores Safari y Firefox las admiten actualmente en iOS.
- **Problemas de almacenamiento en caché:** El almacenamiento en caché de los recursos de una PWA puede ser más restrictivo en iOS que en otras plataformas. Esto puede llevar a que algunas funcionalidades no funcionen correctamente o a problemas con la actualización de contenido.
- **Limitaciones de ejecución en segundo plano:** iOS tiene restricciones estrictas en la ejecución de código en segundo plano para ahorrar batería y mejorar el rendimiento. Esto puede afectar la capacidad de una PWA para funcionar correctamente en situaciones en las que se requiere un procesamiento continuo en segundo plano.

Apple está trabajando en mejorar el soporte de PWA en iOS y ha introducido nuevas funcionalidades en versiones más recientes del sistema operativo. Sin embargo, aún existen limitaciones respecto a otras plataformas.

Aunque algunas características pueden no estar disponibles o pueden tener un rendimiento ligeramente inferior en comparación con otras plataformas, numerosas PWA son funcionales y útiles en iOS.

:::tip Tip
Recomendamos realizar pruebas y evaluar la compatibilidad específica de la PWA en los dispositivos y navegadores de destino para garantizar una experiencia óptima.
:::


### Trusted Web Activities

Trusted Web Activities (TWA) de Google permite empaquetar una PWA en una aplicación nativa en Android, brindando una experiencia nativa y ventajas de las PWA. Puedes utilizar la interfaz de usuario de Android, como la barra de navegación y la barra de estado, para mostrar y ejecutar una PWA, brindando una experiencia similar a la de una aplicación nativa.

El mayor beneficio al usar TWA es aprovechar las ventajas de las PWAs, como la capacidad de actualización instantánea y la compatibilidad multiplataforma, mientras brindas una apariencia y una experiencia de usuario nativas en Android. Los usuarios pueden instalar la PWA desde la tienda de aplicaciones de Android y acceder a ella desde el lanzador de aplicaciones como si fuera una aplicación nativa.

TWA funciona utilizando Chrome Custom Tabs, una variante de Chrome integrada en la aplicación nativa. Esto permite mostrar el contenido de la PWA utilizando el motor de renderizado de Chrome y aprovechar las características de seguridad y rendimiento del navegador Chrome.


### TWA en iOS

Apple no tiene una funcionalidad equivalente a TWA en iOS. Sin embargo, ha introducido algunas características para mejorar la experiencia de las PWAs en dispositivos iOS, como por ejemplo:

- **Añadir a la pantalla de inicio:** Permite a los usuarios agregar un acceso directo a una PWA en la pantalla de inicio. La PWA se ejecutará en el navegador Safari en pantalla completa.
- **Manifiesto de aplicaciones web:** Permite personalizar la apariencia y el comportamiento de una PWA en iOS usando un archivo JSON que describe la PWA y sus características, como el nombre, los iconos, los colores temáticos y la orientación.
- **Service Workers:** Una tecnología que permite almacenar en caché de recursos, funcionar sin conexión y mejorar el rendimiento de una PWA. Aunque Apple ha introducido limitaciones en la ejecución de Service Workers en segundo plano en iOS, aún se pueden aprovechar para mejorar la experiencia de la PWA mientras está activa en el navegador Safari.

Estas características no ofrecen una experiencia idéntica a TWA, pero pueden mejorar la experiencia de las PWAs en iOS.

:::warning Actualizaciones
Apple puede introducir cambios o nuevas funcionalidades en futuras actualizaciones. Es recomendable seguir las actualizaciones y directrices de desarrollo de Apple para aprovechar al máximo las capacidades de las PWAs en iOS.
:::


### Casos de uso de PWAs

Algunos ejemplos destacados de Progressive Web Applications (PWA) que muestran la versatilidad y eficacia de esta tecnología, son:

- **Twitter Lite:** Una versión ligera de la aplicación de X (antes conocida como Twitter) que está diseñada para ser rápida y eficiente en el consumo de datos. Ofrece una experiencia similar a la aplicación nativa, con características como notificaciones push y acceso offline.
- **Pinterest:** La PWA de Pinterest logró aumentar significativamente la tasa de participación de los usuarios y el tiempo que pasan en la plataforma. Proporciona una experiencia de usuario fluida con tiempos de carga rápidos.
- **Spotify Web Player:** Permite a los usuarios escuchar música y acceder a sus playlists sin necesidad de descargar una aplicación separada. Funciona en diferentes plataformas y navegadores.
- **Starbucks:** La PWA de Starbucks permite a los clientes ver el menú, personalizar sus pedidos y agregarlos a la cesta, incluso cuando están offline. Una vez que se restaura la conexión, pueden completar la compra.
- **Uber:** La versión web de Uber es una PWA que ofrece una experiencia de usuario similar a la aplicación nativa pero con un tiempo de carga más rápido y un consumo de datos menor.
- **Forbes:** La PWA de esta revista ofrece una experiencia de lectura más rápida y atractiva. La aplicación carga rápidamente los contenidos y permite a los lectores continuar leyendo offline.
- **Alibaba:** El gigante del comercio electrónico chino desarrolló una PWA para mejorar la experiencia móvil de sus usuarios. Lograron aumentar las conversiones y la participación de los usuarios en dispositivos móviles.
- **OLX:** Mercado global en línea que utiliza una PWA para ofrecer una experiencia de navegación más rápida y eficiente, lo que resultó en un aumento en la participación y la retención de usuarios.
- **Flipkart Lite:** Flipkart, uno de los mayores minoristas en línea de la India, creó su PWA para ofrecer una experiencia de compra eficiente con acceso offline y notificaciones push.
- **The Washington Post:** Su PWA proporciona una experiencia de lectura rápida y fluida. Los lectores pueden acceder a los artículos y continuar leyendo offline.

A través de estos ejemplos podemos ver cómo diversas industrias y empresas utilizan las PWA en diferentes contextos para mejorar la experiencia de usuario, aumentar la participación y lograr sus objetivos comerciales clave.


### Implementación de PWA con Modyo

Modyo ofrece soporte nativo para el trabajo con PWAs, lo que permite a cualquier aplicación web desarrollada en ella, tomar control de los habilitadores tecnológicos requeridos, como el Service Worker y el archivo de manifiesto PWA. Modyo proporciona un entorno de edición para estos y se encarga de la actualización de las modificaciones en los diferentes dispositivos.

Más allá del control de estos habilitadores, el resto de la PWA es una aplicación Web común, por lo que la experiencia de usuario y la adaptación de ella en diferentes dispositivos y tamaños de pantalla, dependen directamente de quién las implementa.

:::tip App Shells Nativas
Las aplicaciones Web creadas en Modyo, pueden implementarse como aplicaciones nativas mediante App Shells desarrolladas para cada plataforma.

El uso de App Shells nativas permite la inclusión de las aplicaciones en las tiendas oficiales, cómo Google Play Store o el Apple App Store. Las App Shells se implementan como proyectos de código a medida y pueden hacer uso de SDKs nativos del dispositivo, incrementando con ello sus capacidades con respecto a las PWA tradicionales.

Si deseas recibir más información acerca de esta técnica de empaquetamiento y cómo nuestro [equipos de expertos](https://modyo.com/services) puede asesorar o colaborar con tu desarrollo, no dudes en contactar a un ejecutivo comercial o de clientes de Modyo.
:::
