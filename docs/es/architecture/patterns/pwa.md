---
search: true
---

# Progressive Web Applications

Las Progressive Web Applications (PWA) son aplicaciones web que combinan características de las aplicaciones móviles y de las páginas web tradicionales. Son desarrolladas utilizando tecnologías web estándar, como HTML, CSS y JavaScript, pero se caracterizan por su capacidad para funcionar de manera confiable y brindar una experiencia de usuario enriquecida, incluso en condiciones de conectividad limitada o ausente.

Las PWAs ofrecen diversas ventajas. Por un lado, pueden ser instaladas en el dispositivo del usuario, de modo que se pueden acceder a ellas desde el escritorio o la pantalla de inicio del dispositivo móvil, sin necesidad de una tienda de aplicaciones. Además, pueden funcionar en modo desconectado o con conexiones intermitentes, gracias a la capacidad de almacenamiento en caché de los navegadores modernos. Esto permite que los usuarios accedan y naveguen por la aplicación incluso sin conexión a Internet.

Otras características clave de las PWAs incluyen notificaciones push, acceso al hardware del dispositivo (como la cámara o el GPS), capacidad de respuesta y adaptabilidad a diferentes tamaños de pantalla, y actualizaciones automáticas para garantizar que los usuarios siempre tengan la versión más reciente de la aplicación.

### Uso de AppShell

Los AppShells permiten empaquetar una PWA para ser distribuída en los mercados de aplicaciones de los diferentes proveedores. En escencia, el AppShell implementa internamente un WebView que se encarga de presentar la experiencia al usuario.

Otro uso común de los AppShell es cuando se desea extender la funcionalidad de la aplicación Web con elementos nativos dependientes de cada plataforma.

:::warning WebView vs Navegador Nativo
La tecnología de WebView difiere de forma significativa a los navegadores nativos dentro del dispositivo, por lo que muchas de las funcionalidades nativas presentes en el estándar del PWA no se encontrarán disponibles en el WebView.
:::