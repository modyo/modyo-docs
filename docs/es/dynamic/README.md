---
search: true
---

# Primeros Pasos

Bienvenido a la documentación oficial de [Dynamic Framework](https://dynamicframework.dev). En esta guía se presentan las diferentes características del framework, además de las definiciones claves e información útil acerca de cómo comenzar a trabajar con él.

<img src="/assets/img/dynamic/dynamic-logo.png"/>

## ¿Qué es Dynamic Framework?

Dynamic Framework es un conjunto de experiencias de usuario basado en componentes web e integraciones diseñado para impulsar el desarrollo ágil de soluciones en el ámbito de la banca digital y la industria financiera en general. Esta plataforma ofrece una forma rápida y eficiente de crear soluciones robustas.

Dirigido a desarrolladores, Dynamic Framework proporciona un marco de trabajo unificado basado en estándares modernos y de código abierto. Este marco puede ser fácilmente adaptado para satisfacer las necesidades únicas de cada cliente.

Dynamic Framework aborda las necesidades digitales comunes en diversas entidades financieras. Se enfoca tanto en gerentes de productos y canales digitales como en equipos de desarrollo. Este enfoque busca agilizar la implementación a través de un enfoque modular, flexible, reutilizable y fácilmente mantenible.

###  Características principales
Algunas de las características principales de Dynamic Framework son:
- [Catálogo de componentes](/es/dynamic/ui/components) implementados en React y disponibles en Storybook.
- [Kit de diseño](/es/dynamic/ui) para prototipado rápido disponibles para Figma.
- [Plantillas de experiencias](/es/dynamic/experiences) financieras listas para descargar y modificar, con datos de ejemplo en APIs mocks.
- [Plantillas de integración](/es/dynamic/integrations) a sistemas comunes, disponibles como proyectos en Java y Spring Boot.


### Estructura
La estructura de Dynamic Framework se compone principalmente de los siguientes elementos:

<img src="/assets/img/dynamic/dynamic_components.png" style="max-width: 700px;"/>

Todos los componentes del framework han sido diseñados para trabajar entre sí, ofreciendo la mejor experiencia posible a los desarrolladores a cargo de la implementación.



### Pre-requisitos
Para poder aprovechar al máximo las capacidades de Dynamic Framework, es recomendable tener una base de conocimientos mínima de Javascript, React, HTML y CSS, además de nociones básicas de arquitectura de [micro frontends](/es/architecture/patterns/micro-frontend) Web.

En el caso de las plantillas de integración, se requiere de conocimientos de programación de backend, principalmente en el lenguaje Java y el framework Spring Boot, además de nociones básicas de arquitectura de [microservicios](/es/architecture/patterns/microservice).

:::tip Modyo Platform
Las plantillas de experiencia presentes en el frameowrk han sido diseñadas para ser compatibles con Modyo. Para más información de la plataforma Modyo favor visitar su [documentación oficial](/es/platform).
:::


## Instalación
Primero lo primero. Para comenzar a utilizar Dynamic Framework te recomendamos [crear un ambiente de pruebas](https://www.modyo.com/get-started) (sandbox) en Modyo. Una vez que te familiarices con los conceptos básicos de la plataforma, estarás listo para partir.

Recomendamos iniciar un nuevo proyecto con Dynamic Framework utilizando el comando NPX, que configura todo automáticamente::

``` shell
npx @modyo/cli@latest get dynamic-react-base-template <nombre-de-tu-proyecto>
```
Si aún no tienes instalado el CLI de Modyo, se te preguntará si quieres instalarlo:
```shell
Need to install the following packages:
  @modyo/cli@3.3.0
```
Una vez instalado, se descarga la plantilla dynamic-react-base-template, así que solo necesitarás instalar las dependencias y levantar el proyecto:
```shell
cd <nombre-de-tu-proyecto>
npm i
npm run start
```

Usa tu editor de código favorito para explorar el código , jugar con ella y ver por tí mismo cómo los diferentes [componentes](/es/dynamic/ui/components) del sistema de diseño son utilizados.

### Instalación manual
Para crear manualmente un nuevo proyecto con Dynamic Framework o agregarlo a un proyecto React, puedes instalar los paquetes requeridos:
```shell
npm i @modyo/cli@latest @dynamic-framework/ui-react@latest
```

A partir de este momento tendrás dos opciones: Seguir [explorando otras plantillas](/es/dynamic/experiences/retail/dashboard.html) o aventurarte a [desplegar tu plantilla](/es/platform/channels/cli.html#modyo-cli-push-name) dentro de tu ambiente sandbox utilizando el modyo-cli con un API token válido.
 

### Contribuciones

Si te interesa contribuir a Dynamic Framework como usuario, hay varias maneras en las que puedes ayudar:
- Utilizando el framework dentro de nuestros ambientes de prueba y proporciona retroalimentación acerca de problemas y posibles mejoras que crees que podemos realizar.
- Contribuyendo directamente a los repositorios de código
- Sugiriendo mejoras a la redacción de la documentación
- Participando en la comunidad, sumándote a nuestros webinars y eventos digitales que realizamos de forma periódica.

Para comunicarte con el equipo, reportar un problema o sugerir una funcionalidad puedes realizarlo mediante nuestro [Centro de Soporte de Modyo](https://support.modyo.com).


### Soporte

En el caso de presentar dudas o problemas con las plantillas de experiencia e integración provistas por Dynamic Framework, se puede pedir ayuda directamente desde la plataforma mediante el uso la acción de ayuda la cual se accede desde el panel de administración Web. En el caso de que se requiera de una asistencia más completa, se deberá crear un caso de soporte.

La creación de casos de soporte se realiza desde el [Centro de Soporte de Modyo](https://support.modyo.com). En caso de que no se obtenga una respuesta oportuna, cada cliente puede hacer uso del protocolo de escalamiento establecido.

:::warning Alcance del Soporte
Las consultas y requerimiento de soporte solo contemplan las plantillas y las formas cómo estas se integran con la plataforma Modyo. Las modificaciones y el código a medida que se desarrollen sobre ellas quedan excluidas. Para estos casos, Modyo ofrece servicios profesionales de acompañamiento experto y apoyo a clientes.
:::