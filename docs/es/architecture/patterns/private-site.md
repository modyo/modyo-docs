---
search: true
---

# Sitio Privado
Por sitio privado nos referimos a los sitios que requieren autenticación del usuario y que, a diferencia de los [sitios públicos](/es/architecture/patterns/public-site), actúan como una verdadera aplicación Web. Un sitio privado debe ofrecer funcionalidad relevante al usuario y mantener registro de lo que éste hace en él, de forma que el ingreso mediante credenciales o una eventual instalación en el dispositivo con [PWA](/es/architecture/patterns/pwa) tenga sentido para él.

Algunos ejemplos comunes de sitios privados podrían ser:
- Aplicación de banca digital
- Plataformas financieras
- Billetera digital
- Onboarding digital
- Comercio electrónico
- Plataformas de salud en línea
- Sistemas de reservas y citas
- Intranets corporativas

:::tip Sitios híbridos
Los sitios privados tradicionalmente se encuentran separados de los públicos, en sistemas diferentes que incluso muchas veces no comparten nada en común. Sin embargo existen casos en que es más adecuado implementar una combinación de los dos, con los llamados [sitios híbridos](/es/architecture/patterns/hybrid-site).
:::

<!-- Hack to avoid this title to be displayed in the TOC element -->
<h3><a href="#¿como-implementar-sitios-privados-con-modyo" class="header-anchor">#</a> ¿Cómo implementar sitios privados con Modyo?</h3>

La implementación de sitios privados sobre Modyo, es uno de los casos de uso más completos que se pueden trabajar sobre la plataforma, la que incluye de la caja herramientas para resolver tareas comunes cómo la autenticación de usuarios mediante credenciales internas o delegadas a sistemas de identidad externos, consumo de APIs con información del usuario desde sistemas externos, componentes avanzados de Javascript, [micro frontends](/es/architecture/patterns/micro-frontend),  [microservicios](/es/architecture/patterns/microservice), mensajería, notificaciones, segmentación de páginas y contenidos según el perfil, entre muchos otros.

A continuación se presentan las diferentes características de Modyo que son importantes de entender a la hora de implementar iniciativas de sitios privados.

[[toc]]

:::tip Similitudes con los Sitios Públicos
En el trabajo con sitios privados, podemos encontrar similitudes que se comparten con los [sitios públicos](/es/architecture/patterns/public-site). El objetivo de esta guía no es repetirlos todos, sino más bien complementarlos en los casos en que la implementación sea diferente.
:::


### Gestión de Usuarios
La gestión de usuarios es esencial dentro de un sitio privado y es el principal diferenciador con respecto a un sitio privado. Para gestionar usuarios, Modyo dispone de una funcionalidad llamada [reinos de usuarios](/es/platform/customers/realms). Los reinos de usuarios son completamente independientes entre sí, y pueden poseer configuraciones propias como por ejemplo cómo los usuarios son autenticados dentro de él.

#### Eventos de usuario
Los reinos de usuarios almacenan los eventos de éstos y permiten la definición de segmentos a partir de información del perfil de los usuarios, o el comportamiento que estos tienen dentro del sistema.

#### Formularios
Dentro de un reino de usuario, se podrán definir formularios que podrán ser completados por los usuarios dentro de él. Las respuestas a los formularios 

#### Mensajería y notificaciones
Dentro de un reino también es posible definir canales de comunicación con el usuario, los cuales podrán ser a través de mensajería por correo electrónico.

:::tip Canales de mensajería
En la próxima versión de Modyo se ofrecerán más canales de mensajería disponibles para enviar notificaciones a los usuarios.
:::

#### Uso de segmentación de páginas y contenido
Los espacios de contenido y sitios dentro Modyo, pueden especificar un reino de usuario que los regirá, permitiendo segmentar contenido e información de forma dinámica, además de ofrecer características privadas que sólo estarán disponibles para usuarios en sesión.


### Estructura y Modularidad

#### Micro frontends y Microservicios
Los [micro frontends](/es/architecture/patterns/micro-frontend) y los [microservicios](/es/architecture/patterns/microservice) son estrategias de arquitectura que dividen una aplicación en componentes más pequeños e independientes. Los microfrontends se enfocan en fragmentar la interfaz de usuario en partes separadas y autónomas, permitiendo una mayor flexibilidad y colaboración en el desarrollo de la UI. Los microservicios, por su parte, dividen la lógica de negocios y funcionalidades en servicios independientes, permitiendo el desarrollo, implementación y escalado independiente de cada función. Ambos enfoques mejoran la modularidad, mantenibilidad y escalabilidad de una aplicación.

La cantidad de funcionalidades a implementar dentro de una aplicación, así como la estrategia óptima para estructurarlas, varía según el negocio y los recursos que lo sostienen. Esto hace que sea especialmente relevante en el caso de los sitios privados aplicar técnicas como el [Domain Driven Design (DDD)](/es/architecture/patterns/ddd). Utilizando DDD, es posible identificar y definir de manera precisa los dominios y subdominios de alto nivel, determinando así la forma más efectiva de agrupar las funcionalidades y establecer el nivel adecuado de acoplamiento entre ellas.

Para el caso específico de los micro frontends, Modyo dispone de todas las herramientas relevantes que serán requeridas para darle gestión a su ciclo de vida, incluyendo el soporte para el Modyo CLI que permitirá integrar el desarrollo a flujos personalizados desde los repositorios del cliente. En este contexto, los micro frontends variarán según la cantidad de funcionalidad que se considere implementar, pudiendo ser muy simples o muy complejos. En el caso de los micro frontends complejos, que abarquen funcionalidad que no conviene tener desacoplada, el tamaño final del módulo podría afectar la experiencia de usuario.

:::tip Code splitting
En la próxima versión de Modyo, se ha incorporado una funcionalidad denominada “code splitting” la cual permitirá descomponer micro frontends de alta complejidad en módulos que se descargan de forma dinámica, mejorando los tiempos de carga y evitando que el usuario descargue código que no será utilizado. Esta técnica será especialmente útil para micro frontends de gran tamaño cuya funcionalidad no convenga mantenerla por separado.
:::

Por otro lado, el soporte para el desarrollo de los microservicios se ofrece desde [Modyo Connect](/es/connect). Modyo Connect es un servicio manejado de infraestructura sobre la nube, que permite disponer de todos los recursos necesarios para montar una estructura de integración hacia los sistemas de negocio, desde microservicios livianos de integración.

La integración entre micro frontends y microservicios se realiza mediante APIs bien definidas las cuales se exponen de forma directa hacia Internet, agregando capas de autenticación y autorización mediante el uso de [Single Sign On (SSO)](/es/architecture/patterns/sso) y utilizando un patrón de arquitectura denominado [Backend for Frontend (BFF)](/es/architecture/patterns/bff).


#### Uso de Frameworks de Javascript
A diferencia de los sitios públicos, en los sitios privados el uso de frameworks de Javascript puede ser muy recomendado en los casos en que se requiere de funcionalidad avanzada, cómo por ejemplo, consumir APIs externas, componentes con flujos de interacción complejos, reuso de código o uso de  Web Components. En estos casos la forma recomendada de hacerlo será mediante el uso de [micro frontends](/es/architecture/patterns/miro-frontend).

#### Uso de Web Components
Al hacer uso de micro frontends, los sitios privados podrán beneficiarse del uso de [Web Components](/es/architecture/patterns/web-components) de una forma más limpia y directa que en el caso de los sitios públicos, siempre y cuando el alcance de éstos sea sólo a los micro frontends en sí y no al resto del sitio.



### Gobernabilidad de contenido y códigos fuente
Dentro de un sitio privado, el concepto de gobernabilidad es algo diferente que en los sitios públicos, debido principalmente a la complejidad de los desarrollos, el uso de micro frontends y a la dependencia con sistemas externos.

De la misma forma, dentro de un sitio privado, es de esperar que la gestión de contenidos sea más simple que un sitio público, salvo casos específicos como contenido segmentado o campañas promocionales. Es por ello que las recomendaciones con respecto al trabajo con ambientes previos podría variar.

#### Uso de ambientes previos
El trabajo con ambientes previos se puede abordar de diferentes formas cuando se trabaja en un sitio privado, especialmente si éste hace un uso intensivo de micro frontends. Esto es debido a que los micro frontends se almacenan y se versionan de forma desacoplada de la plataforma, lo que permite que sean desplegados en diferentes infraestructuras sin la necesidad de que éstas conversen entre sí.

Los sitios privados en los que se requiere, por alguna política, ser desarrollados en ambientes físicos previos separados, se podrán beneficiar de este desacoplamiento, ya que se pueden incorporar despliegues diferenciados en los flujos de integración continua para cada ambientes requerido. En este caso, la cantidad de dependencias de la plataforma a mantener sincronizada entre los ambientes debe ser mínima, ya que no se contará con mecanismos automatizados para su sincronización.

Por otro lado, si lo que se requiere es mantener continuamente sincronizadas las dependencias bases de la plataforma entre los diferentes micro frontends, será más recomendado el trabajo sobre ambientes previos virtualizados mediante el uso de stages, como se explica en la siguiente sección.

#### Uso de Stages
El uso de [stages](/es/platform/channels/sites.md#stages) dentro de Modyo se recomienda cuando los micro frontends o [widgets](/es/platform/channels/widgets) requieren compartir dependencias que se resuelven desde la base de la plataforma (Javascript o [snippets](/es/platform/channels/templates.md#snippets) administrados desde ella). En estos casos se puede contar con un ambiente completo virtualizado de pre-productivo, el cuál sincroniza cambios entre sí y permite definir flujos de trabajo más directos de publicación. 




#### Uso de Sistemas de Diseño
El uso de [sistemas de diseño](/es/architecture/patterns/design-system) en la arquitectura de una aplicación mejora su gobierno al proporcionar una estructura y pautas coherentes para el desarrollo. Esto se traduce en una mayor consistencia en la interfaz de usuario, colaboración mejorada entre los equipos, desarrollo más rápido, mantenimiento y escalabilidad más eficientes, accesibilidad y usabilidad garantizadas, y fortalecimiento en las pruebas y la calidad. En conjunto, estos factores contribuyen a un control y gestión más eficientes de la aplicación, lo que se refleja en una mayor eficacia en su diseño y operación.

En el desarrollo de sitios privados sobre Modyo, los sistemas de diseño se pueden implementar de forma programática dentro del micro frontend, mediante el uso de una librería versionada desde la cual se publiquen los artefactos. Una vez desplegado en Modyo, el micro frontend podría recibir parámetros de CSS o Liquid que le permitan alterar alguna de sus definiciones de diseño o comportamiento en caso de ser requerido.


### Progressive Web Application (PWA)
Las [Progressive Web Applications (PWA)](/es/architecture/patterns/pwa) son aplicaciones web que ofrecen una experiencia similar a una aplicación nativa en dispositivos móviles y de escritorio. Utilizan tecnologías web modernas para ofrecer funcionalidades como trabajo sin conexión, notificaciones push y acceso rápido, incluso en redes lentas. El valor de las PWA radica en su capacidad para brindar una experiencia de usuario más atractiva y fluida sin la necesidad de instalar una aplicación desde una tienda, lo que las hace accesibles y eficientes tanto para desarrolladores como para usuarios. Además, facilitan la actualización y el mantenimiento, permitiendo una mayor coherencia y disponibilidad en diferentes plataformas y dispositivos.

Modyo ofrece la capacidad de activar sitios cómo PWAs, ofreciendo acceso a la configuraciones principales que habilitan esta tecnología. Estos habilitadores permiten interactuar con componentes nativos del dispositivos, incorporar accesos directos desde el menú de aplicaciones, y acceder a funcionalidades avanzadas cómo la cámara o biometría del equipo. Un ejemplo simple, pero relevante de estos habilitadores, es la activación de caché básico en el dispositivo para controlar la experiencia en conexiones inestables (modo offline)

:::tip Usos de PWA
Para aprender más acerca de las capacidades del PWA y tutoriales de cómo estos habilitadores se activan dentro de la plataforma Modyo, visita nuestros [learning paths](https://help.modyo.com).
:::


