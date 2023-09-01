---
search: true
---

# Sitio Privado
Por sitio privado nos referimos a los sitios que requieren autenticación por parte del usuario. A diferencia de los [sitios públicos](/es/architecture/patterns/public-site), los sitios privados actúan como aplicaciones Web genuinas. Un sitio privado debe proporcionar funcionalidades relevantes para el usuario y mantener un registro de sus acciones en el sitio. Esto garantiza que el uso de credenciales de acceso o incluso una eventual instalación como Progressive Web Application [PWA](/es/architecture/patterns/pwa) tenga un propósito claro para el usuario.

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
Los sitios privados, tradicionalmente, se mantienen separados de los públicos, en sistemas diferentes que, en muchas ocasiones, carecen de puntos en común. Sin embargo, hay casos en que es más apropiado combinar ambos enfoques, dando lugar a [sitios híbridos](/es/architecture/patterns/hybrid-site).
:::

<!-- Hack to avoid this title to be displayed in the TOC element -->
<h3><a href="#implementacion-de-sitios-privados-en-modyo">#</a> Implementación de sitios privados en Modyo</h3>

La implementación de sitios privados en Modyo es uno de los casos de uso más completos que se pueden trabajar en la plataforma. Esta implementación incluye herramientas para resolver tareas comunes, como autenticación de usuarios mediante credenciales internas o a través de sistemas de identidad externos, consumir información de usuarios desde APIs en sistemas externos, emplear componentes avanzados de Javascript, [micro frontends](/es/architecture/patterns/micro-frontend), [microservicios](/es/architecture/patterns/microservice), mensajería, notificaciones, segmentación de contenido y páginas basada en perfiles, entre otras funciones.

Las diferentes características de Modyo que son importantes de comprender al implementar proyectos de sitios privados, son:

[[toc]]

:::tip Similitudes con los Sitios Públicos
Aunque los sitios privados tienen sus particularidades, comparten también similitudes con los [sitios públicos](/es/architecture/patterns/public-site). Esta guía no tiene la intención de repetirlas todas, sino de complementarlas, en los casos en que la implementación sea diferente.
:::


### Gestión de Usuarios
En un sitio privado, la gestión de usuarios es esencial y es la principal diferencia con respecto a un sitio privado. Para gestionar usuarios, Modyo tiene una funcionalidad llamada [reinos de usuarios](/es/platform/customers/realms). Los reinos de usuarios son completamente independientes entre sí y pueden tener configuraciones propias, como por ejemplo, el método de autenticación de usuarios en cada uno.

#### Eventos de usuario
Los reinos de usuarios almacenan los eventos de los usuarios y permiten la definición de segmentos basados en la información del perfil de los usuarios o en su comportamiento dentro del sistema.

#### Formularios
Dentro de un reino, puedes definir formularios que los usuarios pueden completar. Modyo procesa las respuestas a estos formularios, complementando la información disponible, para generar segmentos de usuarios basados en su perfil.

#### Mensajería y notificaciones
En un reino también puedes definir canales de comunicación con el usuario a través de correo electrónico.

:::tip Canales de mensajería
En la próxima versión de Modyo se ofrecerán más canales de mensajería para enviar notificaciones a los usuarios.
:::

#### Uso de segmentación de páginas y contenido
Los espacios de contenido y sitios dentro Modyo pueden especificar un reino de usuario que los regirá. Esto te permite segmentar contenido e información de forma dinámica, además de ofrecer características privadas que solo estarán disponibles para usuarios en sesión.


### Estructura y Modularidad

#### Micro frontends y Microservicios
Los [micro frontends](/es/architecture/patterns/micro-frontend) y los [microservicios](/es/architecture/patterns/microservice) son estrategias de arquitectura que dividen una aplicación en componentes más pequeños e independientes. Los micro frontends se centran en dividir la interfaz de usuario en partes autónomas y separadas, permitiendo una mayor flexibilidad y colaboración en el desarrollo de la UI. Por su parte, los microservicios subdividen la lógica de negocios y funcionalidades en servicios independientes, permitiendo el desarrollo, implementación y escalado independiente de cada función. Ambos enfoques mejoran la modularidad, mantenibilidad y escalabilidad de una aplicación.

La cantidad de funcionalidades a implementar en una aplicación y la estrategia óptima para estructurarlas varían según el negocio y los recursos disponibles. Esto hace especialmente relevante para los sitios privados aplicar técnicas como el [Domain Driven Design (DDD)](/es/architecture/patterns/ddd). Utilizando DDD, es posible identificar y definir de manera precisa los dominios y subdominios de alto nivel, determinando así la forma más efectiva de agrupar las funcionalidades y establecer el nivel apropiado de acoplamiento entre ellas.

En el contexto específico de los micro frontends, Modyo ofrece todas las herramientas necesarias para gestionar su ciclo de vida, incluido el soporte para Modyo CLI, que permite integrar el desarrollo en flujos personalizados desde los repositorios del cliente. Los micro frontends pueden variar según la cantidad de funcionalidad que se pretenda implementar, abarcando desde lo simple hasta lo complejo. En el caso de micro frontends complejos que engloben funcionalidad que no convenga desacoplar, el tamaño final del módulo podría afectar la experiencia del usuario.

:::tip Code splitting
En la próxima versión de Modyo, hemos incorporado una funcionalidad llamada "code splitting", que te permitirá descomponer micro frontends de alta complejidad en módulos que se descargarán de forma dinámica. Esto mejorará los tiempos de carga y evitará que el usuario descargue código que no será utilizado. Esta técnica será especialmente útil para micro frontends de gran tamaño cuya funcionalidad no sea conveniente mantener por separado.
:::

El soporte para el desarrollo de microservicios se ofrece desde [Modyo Connect](/es/connect). Modyo Connect es un servicio administrado de infraestructura en la nube, que te brinda todos los recursos necesarios para establecer una estructura de integración con los sistemas de negocios, mediante microservicios livianos de integración.

La integración entre micro frontends y microservicios se realiza mediante APIs claramente definidas que se exponen de forma directa en Internet. Estas APIs incorporan capas de autenticación y autorización mediante el uso de [Single Sign On (SSO)](/es/architecture/patterns/sso), utilizando un patrón de arquitectura denominado [Backend for Frontend (BFF)](/es/architecture/patterns/bff).


#### Uso de Frameworks de Javascript
A diferencia de los sitios públicos, en los sitios privados el uso de frameworks de Javascript puede ser muy recomendado en los casos en que se requiere de funcionalidad avanzada. Por ejemplo, el consumo de APIs externas, componentes con flujos de interacción complejos, reutilización de código o la utilización de Componentes Web. En estas instancias, la vía recomendada es mediante el uso de [micro frontends](/es/architecture/patterns/miro-frontend).

#### Uso de Web Components
Al hacer uso de micro frontends, los sitios privados pueden beneficiarse del uso de [Web Components](/es/architecture/patterns/web-components) de una forma más efectiva y directa que en el caso de los sitios públicos, siempre y cuando su alcance se limite a los micro frontends y no a todo el sitio.


### Gobernabilidad de contenido y códigos fuente
En un sitio privado, el concepto de gobernabilidad difiere de los sitios públicos debido, en gran parte, a la complejidad de los desarrollos, el uso de micro frontends y a la dependencia con sistemas externos.

Igualmente, en un sitio privado, es razonable esperar que la administración de contenidos sea más sencilla que en un sitio público, a excepción de casos específicos como contenido segmentado o campañas promocionales. Por lo tanto, las recomendaciones relacionadas con el trabajo en entornos previos pueden variar.

#### Uso de ambientes previos
Puedes abordar el trabajo con ambientes previos de diferentes formas al trabajar en un sitio privado, especialmente si el sitio privado hace un uso intensivo de micro frontends. Esto se debe a que los micro frontends se almacenan y versionan independientemente de la plataforma, lo que facilita que sean desplegados en diferentes infraestructuras sin necesidad de interacción entre estas.

En sitios privados donde se requiera, por políticas internas, desarrollar en ambientes físicos previos separados, el desacoplamiento de los micro frontends ofrece beneficios, ya que se pueden incorporar despliegues diferenciados en los flujos de integración continua para cada ambiente requerido. En este caso, debes mantener al mínimo la cantidad de dependencias de la plataforma a sincronizar entre los ambientes, ya que no se dispondrá de mecanismos automatizados para su sincronización.

Por otro lado, si buscas mantener continuamente sincronizadas las dependencias bases de la plataforma entre los diferentes micro frontends, recomendamos trabajar sobre ambientes previos virtualizados mediante el uso de stages, como se explica en la siguiente sección.

#### Uso de Stages
Recomendamos el uso de [stages](/es/platform/channels/sites.md#stages) en Modyo cuando los micro frontends o [widgets](/es/platform/channels/widgets) requieren compartir dependencias que se resuelven desde la base de la plataforma (Javascript o [snippets](/es/platform/channels/templates.md#snippets) administrados desde ella). En estos casos puedes implementar un ambiente de preproducción completo virtualizado, que sincroniza cambios entre sí y permite definir flujos de trabajo de publicación más directos.

#### Uso de Sistemas de Diseño
El uso de [sistemas de diseño](/es/architecture/patterns/design-system) en la arquitectura de una aplicación mejora su gobernabilidad al proporcionar una estructura y pautas coherentes para el desarrollo. Esto lleva a mayor consistencia en la interfaz de usuario, colaboración mejorada entre los equipos, desarrollo más rápido, mantenimiento y escalabilidad más eficientes, además de asegurar la accesibilidad y la usabilidad. También fortalece las pruebas y la calidad. En conjunto, estos factores contribuyen a un control y gestión más eficientes de la aplicación, lo que se refleja en una mayor eficacia en su diseño y operación.

En el desarrollo de sitios privados en Modyo, puedes implementar sistemas de diseño de manera programática dentro del micro frontend, utilizando una librería versionada desde la cual se publiquen los componentes. Una vez desplegado en Modyo, el micro frontend puede recibir parámetros de CSS o Liquid que le permiten alterar alguna de sus definiciones de diseño o comportamiento, en caso de ser requerido.


### Progressive Web Application (PWA)
Las [Progressive Web Applications (PWA)](/es/architecture/patterns/pwa) son aplicaciones web que ofrecen una experiencia similar a una aplicación nativa en dispositivos móviles y de escritorio.

Utilizan tecnologías web modernas para ofrecer funcionalidades como trabajo sin conexión, notificaciones push y acceso rápido, incluso en redes lentas.

El valor de las PWA radica en su capacidad para brindar una experiencia de usuario más atractiva y fluida sin la necesidad de instalar una aplicación desde una tienda de applicaciones, lo que las hace accesibles y eficientes tanto para desarrolladores como para usuarios. Además, facilitan la actualización y el mantenimiento, permitiendo una mayor coherencia y disponibilidad en diferentes plataformas y dispositivos.

Modyo ofrece la capacidad de activar sitios cómo PWAs, brindando acceso a configuraciones principales que habilitan esta tecnología. Estos habilitadores permiten interactuar con componentes nativos del dispositivo, incorporar accesos directos desde el menú de aplicaciones y acceder a funcionalidades avanzadas cómo la cámara o la biometría del dispositivo. Un ejemplo simple, pero relevante de estos habilitadores, es la activación de un caché básico en el dispositivo para gestionar la experiencia en conexiones inestables (modo sin conexión).

:::tip Usos de PWA
Para aprender más acerca de las capacidades de las PWAs y cómo activar estos habilitadores dentro de la plataforma Modyo, consulta nuestros [learning paths](https://help.modyo.com).
:::


