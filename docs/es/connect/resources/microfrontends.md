---
search: true
---

# Micro Frontends
El desarrollo de experiencias de usuario, usando las tecnologías modernas de Frontend es todo un desafío. La heterogeneidad de herramientas y técnicas existentes, que muchas veces avanzan más rápido que la capacidad de adoptarlas, debe coexistir con la constante evolución de los navegadores y estándares. Además, el desarrollador de Frontend moderno tiene que lidiar con conceptos como el de la omnicanalidad, referente a los diferentes dispositivos que los clientes usan para acceder a la Web.  En buenas cuentas, desarrollar Frontend es difícil, y más aún lo es, escalar los equipos de trabajo para que puedan crecer en número y  complejidad, trabajando de forma simultánea sobre bases de códigos comunes. 

Ante este escenario, los micro frontends emergen como una técnica que permite descomponer el acoplamiento en el Frontend en varias partes más pequeñas y manejables, para poder incrementar la efectividad y eficiencia de los equipos de trabajo. 

Los micro frontends permiten desagregar la experiencia completa del usuario en una serie de componentes independientes más pequeños, con responsabilidades más limitadas que obligan a generar arquitecturas basadas en una clara delimitación de contextos, definiendo contratos de interoperabilidad y otorgando la capacidad a los equipos de trabajar de forma más independiente los unos de los otros promoviendo código a los ambientes productivos con más autonomía.

### ¿Qué es un micro frontend?
Según la [definición oficial](https://micro-frontends.org), un micro frontend es la extensión del concepto de los Microservicios al Frontend. Frente a la tendencia actual de crear aplicaciones potentes y ricas en características en un modelo de Single Page Application (SPA), los micro frontend buscan resolver el monolito en el Frontend descomponiendo la aplicación en módulos independientes.

## Características
### Ser agnósticos a la tecnología
Eventualmente cada equipo podría trabajar en tecnologías diferentes.

### Aislar el código del equipo
Aplicaciones independientes y autónomas que no compartan nada entre sí.

### Establecer prefijos de equipo
Acordar los espacios de nombre que usará cada equipo para no generar conflictos con los recursos del navegador (cookies, hojas de estilo, eventos, etc).

### Favorecer las funciones nativas del navegador sobre APIs personalizadas
Por ejemplo, emplear controles nativos de geolocalización en lugar de un desarrollo a medida.

### Construir un sitio resiliente
De tal manera que los componentes no crean dependencias entre sí y son cargados de forma asincrónica y eficiente.

## Beneficios
Las arquitecturas basadas en micro frontends pueden ser implementadas de diversas formas. Los siguientes beneficios podrían variar según el camino elegido de implementación escogido en su implementación.

### Actualizaciones incrementales
Para muchas organizaciones, este es el motivo principal en la adopción de los micro frontends. El monolito de Frontend SPA que existe en la actualidad está comenzando a dar problemas y una reescritura completa podría resultar muy costosa. En este escenario es preferible romper la vieja aplicación en partes independientes, mientras se siguen entregando funcionalidades nuevas utilizando un camino más ágil y eficiente.

Mientras que algunos equipos serán expertos en el viejo mundo, habrá otros más nuevos que no lo son y que requerirán de nuevas tecnologías y herramientas. La técnica de micro frontends permite que el código viejo siga con mantención activa, pero que los equipos nuevos tengan más alternativas de implementación.

El objetivo acá será ofrecer más libertad y opciones, eligiendo las mejores herramientas según la realidad caso a caso, de forma que las decisiones se tomen en las partes individuales del producto, permitiendo contar con una arquitectura que permitan las actualizaciones incrementales de cada experiencia de usuario. Además, siguiendo esta arquitectura, cuando hay un gran cambio de versión de nuestro framework principal, cada micro frontend puede ser actualizado en el momento más oportuno, en lugar de tener que hacer un cambio masivo y riesgoso todo de una vez. 

### Código desacoplado, más simple
El código de cada micro frontend independiente será, por definición, más pequeño que el código completo de la aplicación total. Estos repositorios de código más pequeños son generalmente más fáciles de trabajar para los desarrolladores. Se debe evitar acoplamientos innecesarios de componentes que no deberían saber de la existencia del otro, aplicando contextos delimitados dentro de la aplicación.

Siguiendo estos principios, una arquitectura basada en micro frontends hará más difíciles las malas y más fáciles las buenas. Por ejemplo, evitar compartir modelos de dominio en todos los componentes, lo requieran o no, o realizar invocaciones o traspasos de eventos innecesarios entre componentes.

### Despliegues indpendientes
Al igual que en los microservicios, los despliegues independientes son un componente clave en la arquitectura de micro frontends. Esto reduce inmediatamente el alcance de cada despliegue, disminuyendo con ello el riesgo asociado a cada despliegue. Cada micro frontend deberá tener su propia línea de construcción, testeo y despliegue hacia producción.

### Equipos independientes
Uno de los beneficios de desacoplar códigos y procesos de despliegue es el de obtener equipos más independientes. Los equipos independientes ganan más sentido de propiedad y control de los productos que mantienen, lo que permite que trabajen más rápido y de forma más eficiente. Para que esto funcione, los equipos deberán configurarse de forma vertical en cuanto a las funcionalidades de negocio, trabajando en conjunto con los equipos de Backend, en lugar de hacerlo sólo según sus capacidades técnicas.



## Desarrollo
La plataforma Modyo se puede extender en funcionalidad por medio del desarrollo de Widgets y Microservicios. Los Widgets se pueden desarrollar usando las herramientas internas de Modyo, como el Widget Builder, o de forma externa mediante el Modyo CLI. 
Los Widgets desarrollados con el CLI requerirán de un repositorio de código y pipelines de automatización, los cuales generan código que se despliega directamente en la Plataforma Modyo. 

::: tip Repositorio de Código
El código y estructura inicial del proyecto en el ambiente local del desarrollador debe ser respaldado en un [repositorio de código](../components/development.md#repositorio-de-codigo) provisto por el servicio.
:::

- Recomendación sobre alcance
- Recomendaciones sobre frameworks
- Recomendaciones sobre librerías que podrían ser problemáticas
- Recomendaciones sobre cómo aislar el Widget dentro de la página (namespace o shadow root)
- Recomendaciones para desarrollo responsivo
- Recomendaciones para reuso de componentes, sistema de diseño
- Recomendaciones para llamadas a APIs
- Recomendaciones para PWA
- Recomendaciones de Performance y accesibilidad


### Buenas Prácticas
- Recomendaciones de buenas prácticas de estructura de proyecto
- Recomendaciones de code style

### Rendimiento
- Lighthouse
- JS no bloqueante
- Widget async vs sync

### Despliegue con Modyo CLI
- Recomendaciones para el uso de Modyo CLI
- Recomendacioens de seguridad para tokens de Modyo (ejemplo: GH Secrets)



