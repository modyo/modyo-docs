---
search: true
---

# Primeros Pasos

Te damos la bienvenida a la documentación oficial de [Dynamic Framework](https://dynamicframework.dev).

En esta guía encontrarás información sobre las diversas características de este framework, así como definiciones clave y detalles sobre cómo empezar a trabajar con él.

<img src="/assets/img/dynamic/dynamic-logo.png"/>

## Dynamic Framework

Dynamic Framework es un conjunto de experiencias de usuario, basadas en componentes web e integraciones, diseñado para agilizar el desarrollo de soluciones en el ámbito de la banca digital y la industria financiera en general. Esta plataforma proporciona una forma rápida y eficiente de crear soluciones robustas.

Dirigido a desarrolladores, Dynamic Framework ofrece un marco de trabajo unificado basado en estándares modernos y de código abierto. Este marco se adapta fácilmente a las necesidades únicas de cada cliente.

Dynamic Framework aborda las necesidades digitales comunes en diversas entidades financieras. Se enfoca tanto en gerentes de productos y canales digitales como en equipos de desarrollo. Busca agilizar la implementación a través de un enfoque modular, flexible, reutilizable y fácilmente mantenible.

###  Características principales
Algunas de las características principales de Dynamic Framework son:
- [Catálogo de componentes](/es/dynamic/ui/components) implementados en React y disponibles en Storybook.
- [Kit de diseño](/es/dynamic/ui) para prototipado rápido en Figma.
- [Plantillas de experiencias](/es/dynamic/experiences) financieras listas para descargar y modificar, con datos de ejemplo en APIs mocks.
- [Plantillas de integración](/es/dynamic/integrations) con sistemas comunes, disponibles como proyectos en Java y Spring Boot.


### Estructura
La estructura de Dynamic Framework se compone principalmente de los siguientes elementos:

<img src="/assets/img/dynamic/dynamic_components.png" style="max-width: 700px;"/>

Todos los componentes del framework han sido diseñados para trabajar entre sí, ofreciendo la mejor experiencia posible a los desarrolladores responsables de la implementación.


### Pre-requisitos
Para aprovechar al máximo las capacidades de Dynamic Framework, recomendamos tener una base de conocimientos mínima de Javascript, React, HTML y CSS, además de nociones básicas de arquitectura de [micro frontends](/es/architecture/patterns/micro-frontend) Web.

En el caso de las plantillas de integración, se requiere de conocimientos de programación de backend, principalmente en el lenguaje Java y el framework Spring Boot, además de nociones básicas de arquitectura de [microservicios](/es/architecture/patterns/microservice).

:::tip Modyo Platform
Las plantillas de experiencia incluidas en el framework fueron diseñadas para ser compatibles con Modyo. Para más información de la plataforma Modyo visita la [documentación oficial](/es/platform).
:::


## Instalación
Para comenzar a utilizar Dynamic Framework [crea un ambiente de pruebas](https://www.modyo.com/get-started) (sandbox) en Modyo y familiarízate con los conceptos básicos de la plataforma.

Inicia un nuevo proyecto con Dynamic Framework utilizando el comando NPX. Este comando configura automáticamente todo el entorno:

``` shell
npx @modyo/cli@latest get dynamic-react-base-template <nombre-de-tu-proyecto>
```
Si no tienes instalado el CLI de Modyo, el sistema solicitará instalarlo debido a que es un paquete requerido. Puedes encontrar las instrucciones de instalación del CLI en la [documentación oficial](/es/platform/channels/cli.html#modyo-cli)

Este proceso descarga la plantilla dynamic-react-base-template, una vez que tengas la plantilla, ingresa a la carpeta del proyecto para instalar las dependencias y levantar el proyecto:

```shell
cd <nombre-de-tu-proyecto>
npm i
npm run start
```
Usa un editor de código para explorar el código y examinar cómo se utilizan los diferentes [componentes](/es/dynamic/ui/components) del sistema de diseño.

### Instalación manual
Para crear manualmente un nuevo proyecto con Dynamic Framework o agregarlo como dependencia a un proyecto React existente, instala los paquetes requeridos:
```shell
npm i @modyo/cli@latest @dynamic-framework/ui-react@latest
```

Ahora puedes elegir:
1. Seguir [explorando otras plantillas](/es/dynamic/experiences/retail/dashboard.html)
2. [Desplegar tu plantilla](/es/platform/channels/cli.html#modyo-cli-push-name) dentro de tu ambiente sandbox utilizando el modyo-cli con un API token válido.


### Contribuciones

Si quieres contribuir a Dynamic Framework como usuario, hay varias formas en las que puedes ayudar:
- Utiliza el framework en nuestros entornos de prueba y proporciona comentarios sobre problemas y posibles mejoras.
- Contribuye directamente a los repositorios de código.
- Sugiere mejoras en la redacción de la documentación.
- Participa en la comunidad, únete a nuestros webinars y eventos digitales periódicos.

Puedes comunicarte con el equipo de desarrollo, reportar un problema o sugerir una funcionalidad a través de nuestro [Centro de Soporte de Modyo](https://support.modyo.com).


### Soporte

Si tienes dudas o problemas con las plantillas de experiencia e integración proporcionadas por Dynamic Framework, puedes solicitar ayuda directamente desde la plataforma mediante la función de ayuda, accesible desde el panel de administración web. Si necesitas asistencia más completa, crea un caso de soporte.

La creación de casos de soporte se realiza desde el [Centro de Soporte de Modyo](https://support.modyo.com). Si no recibes una respuesta oportuna, cada cliente tiene la opción de seguir el protocolo de escalamiento establecido.

:::warning Alcance del Soporte
Las consultas y solicitudes de soporte se aplican exclusivamente a las plantillas y cómo se integran con la plataforma Modyo. Las modificaciones y el código personalizado desarrollado sobre ellas está excluido. Para estos casos, Modyo te ofrece [servicios profesionales](https://modyo.com/services) de acompañamiento experto y apoyo a los clientes.
:::