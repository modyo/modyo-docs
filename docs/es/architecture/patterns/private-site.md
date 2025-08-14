---
search: true
---

# Sitio Privado
Un sitio privado requiere autenticación de usuario. A diferencia de los [sitios públicos](/es/architecture/patterns/public-site), los sitios privados funcionan como aplicaciones web, ofreciendo funcionalidades relevantes y registrando las acciones del usuario. Esto asegura que el uso de credenciales o la instalación como Progressive Web Application [PWA](/es/architecture/patterns/pwa) tenga un propósito claro para el usuario.

Algunos ejemplos de sitios privados son:
- Aplicación de banca digital
- Plataformas financieras
- Billeteras digitales
- Onboarding digital
- Plataformas de comercio electrónico
- Plataformas de salud en línea
- Sistemas de reserva y programación de citas
- Intranets corporativas

:::tip Sitios híbridos
Tradicionalmente, los sitios privados y públicos se mantienen separados. Sin embargo, en ciertos casos, es más apropiado combinar ambos enfoques, dando lugar a [sitios híbridos](/es/architecture/patterns/hybrid-site).
:::

<!-- Hack to avoid this title to be displayed in the TOC element -->
<h3><a href="#implementacion-de-sitios-privados-en-modyo">#</a> Implementación de sitios privados en Modyo</h3>

La implementación de sitios privados en Modyo es uno de los casos de uso más completos de la plataforma. Incluye herramientas para tareas comunes como autenticación de usuarios (credenciales internas o sistemas de identidad externos), consumo de información de usuarios desde APIs externas, uso de componentes avanzados de Javascript, [micro frontends](/es/architecture/patterns/micro-frontend), [microservicios](/es/architecture/patterns/microservice), mensajería, notificaciones, y segmentación de contenido y páginas basada en perfiles.

Las diferentes características de Modyo que son importantes de comprender al implementar proyectos de sitios privados, son:

[[toc]]

:::tip Similitudes con los Sitios Públicos
Aunque los sitios privados tienen sus particularidades, comparten también similitudes con los [sitios públicos](/es/architecture/patterns/public-site). Esta guía no tiene la intención de repetirlas todas, sino de complementarlas, en los casos en que la implementación sea diferente.
:::


### Gestión de Usuarios
En un sitio privado, la gestión de usuarios es esencial. Modyo ofrece la funcionalidad de [reinos de usuarios](/es/platform/customers/overview), que son completamente independientes y pueden tener configuraciones propias, como el método de autenticación.

#### Eventos de usuario
Los reinos de usuarios almacenan eventos y permiten definir segmentos basados en el perfil o comportamiento del usuario dentro del sistema.

#### Formularios
Dentro de un reino, se pueden definir formularios para que los usuarios los completen. Modyo procesa estas respuestas, complementando la información disponible para generar segmentos de usuarios basados en su perfil.

#### Mensajería y notificaciones
En un reino, también se pueden definir canales de comunicación con el usuario a través de correo electrónico.

:::tip Canales de mensajería
(Nota: En futuras versiones de Modyo se ofrecerán más canales de mensajería para notificaciones.)
:::

#### Uso de segmentación de páginas y contenido
Los espacios de contenido y sitios en Modyo pueden especificar un reino de usuario. Esto permite segmentar contenido e información dinámicamente, y ofrecer características privadas solo disponibles para usuarios autenticados.


### Estructura y Modularidad

#### Micro frontends y Microservicios
Los [micro frontends](/es/architecture/patterns/micro-frontend) y [microservicios](/es/architecture/patterns/microservice) son estrategias arquitectónicas que dividen una aplicación en componentes pequeños e independientes. Los micro frontends se enfocan en dividir la interfaz de usuario en partes autónomas para mayor flexibilidad y colaboración en el desarrollo de la UI. Los microservicios, por su parte, subdividen la lógica de negocio y funcionalidades en servicios independientes, permitiendo su desarrollo, implementación y escalado autónomo. Ambos enfoques mejoran la modularidad, mantenibilidad y escalabilidad de la aplicación.

La cantidad de funcionalidades a implementar y la estrategia de estructuración varían según el negocio y los recursos. Para sitios privados, es especialmente relevante aplicar técnicas como el [Domain-Driven Design (DDD)](/es/architecture/patterns/ddd). DDD permite identificar y definir con precisión dominios y subdominios de alto nivel, determinando la forma más efectiva de agrupar funcionalidades y establecer el acoplamiento adecuado.

En el contexto de los micro frontends, Modyo ofrece herramientas para gestionar su ciclo de vida, incluyendo soporte para Modyo CLI, que permite integrar el desarrollo en flujos personalizados desde los repositorios del cliente. Los micro frontends varían en complejidad; en casos de módulos complejos con funcionalidad que no conviene desacoplar, el tamaño final podría afectar la experiencia del usuario.

:::tip Code splitting
(Nota: En futuras versiones de Modyo, la funcionalidad de "code splitting" permitirá descomponer micro frontends complejos en módulos de descarga dinámica, mejorando los tiempos de carga y evitando la descarga de código no utilizado. Esta técnica será útil para micro frontends grandes cuya funcionalidad no sea conveniente separar.)
:::

El soporte para el desarrollo de microservicios se ofrece a través de [Modyo Connect](/es/connect), un servicio administrado de infraestructura en la nube que proporciona los recursos necesarios para establecer una estructura de integración con sistemas de negocio mediante microservicios ligeros.

La integración entre micro frontends y microservicios se realiza mediante APIs bien definidas, expuestas directamente en Internet. Estas APIs incorporan capas de autenticación y autorización a través de [Single Sign On (SSO)](/es/architecture/patterns/sso), utilizando el patrón [Backend for Frontend (BFF)](/es/architecture/patterns/bff).


#### Uso de Frameworks de Javascript
A diferencia de los sitios públicos, en los sitios privados el uso de frameworks de Javascript es altamente recomendado para funcionalidades avanzadas, como el consumo de APIs externas, componentes con flujos de interacción complejos, reutilización de código o el uso de Web Components. En estos casos, la vía recomendada es mediante [micro frontends](/es/architecture/patterns/micro-frontend).

#### Uso de Web Components
Al utilizar micro frontends, los sitios privados pueden beneficiarse del uso de [Web Components](/es/architecture/patterns/web-components) de forma más efectiva y directa que los sitios públicos, siempre que su alcance se limite a los micro frontends y no a todo el sitio.


### Gobernabilidad de contenido y códigos fuente
En un sitio privado, el concepto de gobernabilidad difiere del de los sitios públicos debido a la complejidad de los desarrollos, el uso de micro frontends y la dependencia de sistemas externos.

Igualmente, en un sitio privado, la administración de contenidos suele ser más sencilla que en un sitio público, salvo en casos específicos como contenido segmentado o campañas promocionales. Por lo tanto, las recomendaciones para entornos previos pueden variar.

#### Uso de ambientes previos
El trabajo con ambientes previos en un sitio privado puede abordarse de diversas formas, especialmente si el sitio utiliza intensivamente micro frontends. Dado que los micro frontends se almacenan y versionan independientemente de la plataforma, pueden desplegarse en diferentes infraestructuras sin necesidad de interacción.

En sitios privados que, por políticas internas, requieran desarrollo en ambientes físicos previos separados, el desacoplamiento de los micro frontends ofrece beneficios. Permite incorporar despliegues diferenciados en los flujos de integración continua para cada ambiente. En este caso, se debe minimizar la cantidad de dependencias de la plataforma a sincronizar entre ambientes, ya que no habrá mecanismos automatizados para ello.

Para mantener sincronizadas las dependencias base de la plataforma entre los micro frontends, se recomienda trabajar con ambientes previos virtualizados mediante el uso de stages, como se explica en la siguiente sección.

#### Uso de Stages
Se recomienda el uso de [stages](/es/platform/channels/sites.md#stages) en Modyo cuando los micro frontends o [widgets](/es/platform/channels/widgets) requieren compartir dependencias resueltas desde la base de la plataforma (Javascript o [snippets](/es/platform/channels/templates.md#snippets)). En estos casos, se puede implementar un ambiente de preproducción virtualizado que sincroniza cambios y permite flujos de trabajo de publicación más directos.

#### Uso de Sistemas de Diseño
El uso de [sistemas de diseño](/es/architecture/patterns/design-system) en la arquitectura de una aplicación mejora su gobernabilidad al proporcionar una estructura y pautas coherentes para el desarrollo. Esto resulta en mayor consistencia de la interfaz de usuario, mejor colaboración entre equipos, desarrollo más rápido, mantenimiento y escalabilidad más eficientes, y asegura la accesibilidad y usabilidad. En conjunto, estos factores contribuyen a un control y gestión más eficientes de la aplicación, reflejándose en una mayor eficacia en su diseño y operación.

En el desarrollo de sitios privados en Modyo, los sistemas de diseño pueden implementarse programáticamente dentro del micro frontend, utilizando una librería versionada para la publicación de componentes. Una vez desplegado en Modyo, el micro frontend puede recibir parámetros CSS o Liquid para alterar sus definiciones de diseño o comportamiento, si es necesario.


### Progressive Web Application (PWA)
Las [Progressive Web Applications (PWA)](/es/architecture/patterns/pwa) son aplicaciones web que ofrecen una experiencia similar a las aplicaciones nativas en dispositivos móviles y de escritorio.

Utilizan tecnologías web modernas para ofrecer funcionalidades como trabajo sin conexión, notificaciones push y acceso rápido, incluso en redes lentas.

El valor de las PWA radica en su capacidad para ofrecer una experiencia de usuario más atractiva y fluida sin necesidad de instalación desde una tienda de aplicaciones, lo que las hace accesibles y eficientes para desarrolladores y usuarios. Además, facilitan la actualización y el mantenimiento, permitiendo mayor coherencia y disponibilidad en diferentes plataformas y dispositivos.

Modyo permite activar sitios como PWAs, brindando acceso a configuraciones clave que habilitan esta tecnología. Estas configuraciones permiten interactuar con componentes nativos del dispositivo, incorporar accesos directos desde el menú de aplicaciones y acceder a funcionalidades avanzadas como la cámara o la biometría. Un ejemplo relevante es la activación de un caché básico en el dispositivo para gestionar la experiencia en conexiones inestables (modo sin conexión).

:::tip Usos de PWA
Para más información sobre las capacidades de las PWAs y cómo activarlas en la plataforma Modyo, consulta nuestros [learning paths](https://help.modyo.com).
:::


