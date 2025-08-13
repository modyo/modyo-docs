---
search: true
---

# Micro Frontend

El desarrollo de experiencias de usuario modernas presenta desafíos debido a la heterogeneidad de herramientas y la constante evolución web. Los micro frontends surgen como una técnica para aumentar la eficacia y eficiencia de los equipos de desarrollo, al descomponer aplicaciones complejas en partes más pequeñas y manejables.

### Definición de micro frontend

Según la [definición oficial](https://micro-frontends.org), un micro frontend es la extensión del concepto de [microservicios](microservice.md) al frontend. Su objetivo es crear una arquitectura modular en escenarios que, de otro modo, se convertirían en monolitos de frontend, como las Single-Page Applications (SPAs).

Los micro frontends permiten a los equipos trabajar con mayor autonomía, ya que su responsabilidad se limita a su contexto. Esto los obliga a definir contratos de operación entre ellos, sin requerir que se implementen con la misma tecnología.

#### Características

- **Tecnológicamente agnósticos**: Cada equipo puede trabajar con diferentes tecnologías o versiones, ya que los micro frontends son independientes entre sí. Por ejemplo, en una misma aplicación web, un micro frontend puede desarrollarse en React y otro en Angular.
- **Código aislado por equipo**: Son aplicaciones independientes que no comparten recursos. El código de cada equipo es independiente y se versiona por separado.
- **Uso de APIs nativas**: Favorecen las funciones nativas del navegador en lugar de desarrollar APIs personalizadas (ej. controles nativos de geolocalización).
- **Sitio resiliente**: Si un micro frontend falla, su estado no contamina a los demás, ya que se cargan de forma asíncrona e independiente.

#### Beneficios

- **Actualizaciones incrementales**: Al ser componentes independientes, los cambios y despliegues a producción son incrementales. Para muchas organizaciones, este es el principal motivo para adoptar micro frontends.
- **Código desacoplado y más simple**: El código de cada micro frontend es más pequeño que el de la aplicación completa, lo que facilita el desarrollo.
- **Despliegues independientes**: Al igual que en los microservicios, los despliegues independientes son clave. Cada micro frontend tiene su propio proceso de construcción, prueba y despliegue. Reducir el alcance de cada despliegue disminuye el riesgo asociado.
- **Equipos independientes**: Los equipos independientes tienen mayor sentido de propiedad y control sobre los productos que mantienen, lo que fomenta un trabajo más rápido y eficiente.


### Implementación de micro frontends con Modyo

El desarrollo de micro frontends se realiza utilizando herramientas y frameworks abiertos. Una vez creado el componente, se despliega directamente en la Plataforma Modyo mediante el Modyo Command Line Interface (CLI).

:::tip Plataforma Modyo
Modyo Connect no es un requisito para el desarrollo y despliegue de micro frontends en la Plataforma Modyo, pero facilita la gestión de [repositorios de código](/es/connect/components/development.md#repositorio-de-codigo) y automatizaciones de [integración continua](/es/connect/components/development.md#integracion-continua) para un flujo de trabajo eficiente.
:::

#### Consideraciones generales

Algunas consideraciones al desarrollar micro frontends en la Plataforma Modyo son:

- Definir un alcance adecuado para el subdominio de negocio (el micro frontend no debe ser ni muy pequeño ni muy grande).
- Definir el framework a utilizar (React, VueJS, Angular, etc.).
- Evitar empaquetar dependencias innecesarias.
- Asegurar que el micro frontend no genere conflictos con los recursos de la página.
- Considerar la omnicanalidad en el diseño.
- Manejar adecuadamente los errores al consumir APIs externas.
- Medir la accesibilidad y el rendimiento de carga con herramientas del navegador.
- Evaluar si se requiere carga síncrona o asíncrona del micro frontend.

#### Uso de Modyo CLI

Consideraciones para el uso del Modyo CLI:

- Ejecutar el Modyo CLI en un pipeline de automatización, no desde un entorno local.
- Almacenar los tokens de acceso a las APIs administrativas de Modyo de forma segura (ej. en GitHub Secrets).


