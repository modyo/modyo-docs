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
Trusted Web Activities (TWA) es una tecnología desarrollada por Google que permite empaquetar una Progressive Web App (PWA) dentro de una aplicación nativa en Android. Con TWA, puedes utilizar la interfaz de usuario nativa de Android, como la barra de navegación y la barra de estado, para mostrar y ejecutar una PWA, brindando una experiencia similar a la de una aplicación nativa.

La principal ventaja de utilizar TWA es que puedes aprovechar las ventajas de las PWAs, como la capacidad de actualización instantánea y la compatibilidad multiplataforma, mientras brindas una apariencia y una experiencia de usuario nativas en Android. Al utilizar TWA, los usuarios pueden instalar la PWA desde la tienda de aplicaciones de Android y acceder a ella desde el lanzador de aplicaciones como si fuera una aplicación nativa.

TWA funciona utilizando Chrome Custom Tabs, que es una variante de Chrome integrada en la aplicación nativa. Esto permite mostrar el contenido de la PWA utilizando el motor de renderizado de Chrome y aprovechar las características de seguridad y rendimiento del navegador Chrome.


### TWA en iOS
Actualmente, Apple no tiene una funcionalidad directamente equivalente a Trusted Web Activities (TWA) que permita empaquetar Progressive Web Apps (PWA) dentro de una aplicación nativa en iOS.

Sin embargo, Apple ha introducido características y mejoras en iOS para mejorar la experiencia de las aplicaciones web en dispositivos iOS. Algunas de estas características son:

- **Add to Home Screen (Añadir a la pantalla de inicio):** iOS permite a los usuarios agregar un acceso directo a una PWA en la pantalla de inicio de su dispositivo, lo que brinda una experiencia similar a la de una aplicación nativa. Al abrir el acceso directo desde la pantalla de inicio, la PWA se ejecutará en el navegador Safari en pantalla completa.
- **Web App Manifest (Manifiesto de aplicaciones web):** El Web App Manifest es un archivo JSON que describe la PWA y sus características, como el nombre, los iconos, los colores temáticos y la orientación. Al definir correctamente el manifiesto, se puede mejorar la apariencia y la experiencia de la PWA en iOS.
- **Service Workers (Trabajadores de servicio):** Los Service Workers son una tecnología que permite el almacenamiento en caché de recursos, la funcionalidad sin conexión y la mejora del rendimiento de una PWA. Aunque Apple ha introducido limitaciones en la ejecución de Service Workers en segundo plano en iOS, aún se pueden aprovechar para mejorar la experiencia de la PWA mientras está activa en el navegador Safari.

Si bien estas características no son una solución idéntica a TWA, ofrecen opciones para mejorar la experiencia de las PWAs en dispositivos iOS. Es importante tener en cuenta que las tecnologías y las capacidades pueden evolucionar con el tiempo, y Apple podría introducir cambios o nuevas funcionalidades en futuras actualizaciones de iOS. Es recomendable seguir las actualizaciones y las directrices de desarrollo de Apple para aprovechar al máximo las capacidades de las PWAs en iOS.