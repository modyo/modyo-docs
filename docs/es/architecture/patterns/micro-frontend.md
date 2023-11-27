---
search: true
---

# Micro Frontend

Desarrollar experiencias de usuario modernas puede ser un desafío. La heterogeneidad de herramientas y técnicas debe coexistir con la constante evolución natural de la web. En este escenario, los micro frontends surgen como una técnica para aumentar la eficacia y la eficiencia de los equipos de desarrollo al descomponer aplicaciones complejas en partes más pequeñas y manejables.

### Definición de micro frontend

Según la [definición oficial](https://micro-frontends.org), un micro frontend es la extensión del concepto de [microservicios](microservice.md) al frontend. Su objetivo es crear una arquitectura modular en los escenarios que, de otra forma, se convertirían en monolitos de frontend, como es el caso de las aplicaciones de una sola página o Single-Page Applications(SPAs).

Los micro frontends permiten a los equipos trabajar con mayor autonomía, ya que operan con una responsabilidad limitada a su contexto, esto los obliga a definir contratos de operación entre ellos, sin necesidad de que se implementen con la misma tecnología.

#### Características

- **Son tecnológicamente agnósticos:** Cada equipo puede trabajar con diferentes tecnologías o versiones, ya que los micro frontends no dependen unos de otros. Por ejemplo, en una misma aplicación web, un micro frontend puede estar desarrollado en React y otro en Angular.
- **Aislan el código del equipo:** Son aplicaciones independientes que no comparten recursos entre sí. Los códigos son independientes en cada equipo y se versionan por separado.
- **Usan APIs nativas:** Los micro frontends favorecen las funciones nativas del navegador en lugar de desarrollar APIs personalizadas. Por ejemplo, utilizan controles nativos de geolocalización en lugar de desarrollos personalizados.
- **Construyen un sitio resiliente:** En caso de que un micro frontend falle, su estado no contamina a los demás, ya que se cargan de forma asincrónica e independiente.

#### Beneficios

- **Actualizaciones incrementales:** Al ser componentes independientes, los cambios y despliegues a producción también lo son. Para muchas organizaciones, este es el motivo principal para adoptar micro frontends.
- **Código desacoplado y más simple:** El código de cada micro frontend es más pequeño que el de la aplicación completa, lo que facilita el trabajo de los desarrolladores.
- **Despliegues independientes:** Al igual que en los microservicios, los despliegues independientes son un componente clave en la arquitectura de micro frontends. Cada micro frontend tiene su propio proceso de construcción, prueba y despliegue. Al reducir el alcance de cada despliegue, disminuye el riesgo asociado.
- **Equipos independientes**: Los equipos independientes tienen mayor sentido de propiedad y control de los productos que mantienen, lo que fomenta un trabajo más rápido y eficiente.


### Implementación de micro frontends con Modyo

El trabajo con micro frontends se realiza utilizando herramientas y frameworks abiertos para facilitar el desarrollo. Una vez que hayas creado el componente ha sido creado, se despliegue directamente en la Plataforma Modyo mediante el Modyo Command Line Interface o CLI.

:::tip Plataforma Modyo
Modyo Connect no es requerido para el desarrollo y despliegue de micro frontends dentro de la Plataforma Modyo, pero sí ayuda con los [repositorios de código](/es/connect/components/development.md#repositorio-de-codigo) y automatizaciones de [integración continua](/es/connect/components/development.md#integracion-continua) requeridas para un flujo de trabajo eficiente.
:::

#### Consideraciones generales

Algunas consideraciones que debes tenerse en cuenta a la hora de desarrollar micro frontends sobre la Plataforma Modyo, son:

- Definir un alcance adecuado acorde al subdominio de negocio. Un micro frontend no debería ser ni muy pequeño, ni muy
  grande.
- Definir el framework sobre el cual se va a trabajar (React, VueJS, Angular, etc.).
- Evitar empaquetar dependencias innecesarias.
- Asegurar que el micro frontend no genere conflictos con los recursos de la página.
- Considerar la omnicanalidad en el diseño.
- En caso de consumir APIs externas, manejar adecuadamente los errores.
- Medir la accesibilidad y el rendimiento de carga con herramientas del navegador.
- Evaluar si se requiere una carga síncrona o asíncrona del micro frontend.

#### Uso de Modyo CLI

Algunas consideraciones con el uso del Modyo CLI:

- Ejecutar el proceso de Modyo CLI en un pipeline de automatización y no desde un ambiente local.
- Almacenar los tokens de acceso a las APIs administrativas de Modyo de forma segura, como en GitHub Secrets.


