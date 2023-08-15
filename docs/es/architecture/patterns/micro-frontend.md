---
search: true
---

# Micro Frontend

El desarrollo de experiencias de usuario modernas puede ser todo un desafío. La heterogeneidad de herramientas y técnicas debe coexistir con la constante evolución natural de la Web. En este escenario, los micro frontends emergen como una técnica que permite incrementar la efectividad y eficiencia de los equipos de desarrollo, al descomponer aplicaciones complejas en partes más pequeñas y manejables.

### ¿Qué es un micro frontend?

Según la [definición oficial](https://micro-frontends.org), un micro frontend es la extensión del concepto de los [microservicios](microservice.md) al frontend. Los micro frontends buscan generar una arquitectura modular en los escenarios que, de otra forma, se convertirían en monolitos de frontend, como es el caso de las Single-Page Applications (SPAs).

Los micro frontends otorgan a los equipos la capacidad de trabajar con más autonomía, ya que operan con una responsabilidad limitada a su contexto, lo que les obliga a definir contratos de operación entre ellos, sin requerir que estén implementados con la misma tecnología.

### Características

- **Ser agnósticos a la tecnología:** Cada equipo puede trabajar con tecnologías o versiones diferentes, ya que los micro frontend no dependen de nada entre sí. Por ejemplo, en una misma aplicación Web un micro frontends puede estar desarrollado en React y otro en Angular.
- **Aislar el código del equipo:** Aplicaciones independientes y autónomas que no compartan cosas entre sí. Los códigos son independientes en cada equipo y se versionan por separado.
- **APIs nativas:** Los micro frontends buscan favorecer las funciones nativas del navegador sobre APIs personalizadas. Por ejemplo, emplear controles nativos de geolocalización en lugar de un desarrollo a medida.
- **Construir un sitio resiliente:** En caso de que un micro frontend falle, su estado no contamina a los demás, ya que se cargan de forma asincrónica e independiente.

### Beneficios

- **Actualizaciones incrementales:** Al ser componentes independientes, sus cambios y despliegues a producción también lo son. Para muchas organizaciones, este es el motivo principal en la adopción de los micro frontends.
- **Código desacoplado, más simple:** El código de cada micro frontend será más pequeño que el código completo de la aplicación. Los repositorios de código pequeños son más fáciles de trabajar para los desarrolladores.
- **Despliegues indpendientes:** Al igual que en los microservicios, los despliegues independientes son un componente clave en la arquitectura de micro frontends. Esto reduce el alcance de cada despliegue, disminuyendo con ello el riesgo asociado. Cada micro frontend deberá tener su propia línea de construcción, testeo, y despliegue hacia producción.
- **Equipos independientes**: Los equipos independientes ganan más sentido de propiedad y control de los productos que mantienen, lo que permite que trabajen más rápido y de forma más eficiente.

### Desarrollo

El trabajo con micro frontends se realiza utilizando herramientas y frameworks abiertos para facilitar su proceso de desarrollo. Una vez que el componente ha sido creado, su despliegue se realiza directamente hacia la Plataforma Modyo mediante el uso del Modyo Command Line Interface o CLI.

:::tip Plataforma Modyo
Modyo Connect no es requerido para el desarrollo y despliegue de micro frontends dentro de la Plataforma Modyo, pero sí ayuda con los [repositorio de código](/es/connect/components/development.md#repositorio-de-codigo) y automatizaciones de [integración continua](/es/connect/components/development.md#integracion-continua) requeridas para un flujo de trabajo eficiente.
:::

### Consideraciones generales

A continuación presentamos algunas consideraciones que deben tenerse en cuenta a la hora de desarrollar micro frontends sobre la Plataforma Modyo:

- Definir un alcance adecuado acorde al subdominio de negocio. Un micro frontend no debería ser ni muy pequeño, ni muy
  grande.
- Definir el framework sobre el cual se va a trabajar (React, VueJS, Angular, etc.).
- Evitar empaquetar en el micro frontend dependencias que no son absolutamente necesarias.
- Asegurar que el micro frontend no genere algún conflicto con los recursos desplegados en la página.
- Asegurar que se considere la omnicanalidad como parte del diseño del micro frontend.
- Si se consumen APIs externas, asegurar un manejo apropiado de errores.
- Utilizar las herramientas del navegador para medir la accesibilidad y el rendimiento en la carga.
- Evaluar si se requiere una carga síncrona vs una carga asíncrona del micro frontend.

### Uso de Modyo CLI

Algunas consideraciones con el uso del Modyo CLI:

- Asegurar que el proceso de Modyo CLI se ejecuta en un pipeline de automatización y no desde un ambiente local.
- Asegurar que los tokens de acceso a las APIs administrativas de Modyo se almacenan dentro de un repositorio de secretos, como es el caso de GitHub Secrets.

