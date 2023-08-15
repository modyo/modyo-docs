---
search: true
---

# Repositorio

El patrón de repositorio es un patrón de diseño de software que proporciona una manera de encapsular el almacenamiento, la recuperación y las operaciones de búsqueda en un repositorio persistente de objetos, permitiendo una separación clara entre la lógica de la capa de datos y la capa de negocio. Un repositorio puede verse como un almacén de objetos en memoria que se cargan desde la base de datos.

El patrón de repositorio tiene tres propósitos principales:

- **Separar la lógica de la aplicación de la lógica de la base de datos:** Esto permite que el código de la aplicación se escriba y mantenga de manera más eficiente, ya que no necesita contener mucha lógica para la manipulación de la base de datos.
- **Permitir pruebas más fáciles:** Al usar el patrón de repositorio, puedes intercambiar el repositorio real con una implementación ficticia para realizar pruebas sin afectar a la base de datos real.
- **Proporcionar una interfaz coherente para el acceso a datos:** Independientemente de dónde se almacenen los datos o cómo estén implementadas las operaciones de la base de datos, la aplicación siempre interactúa con un repositorio a través de una interfaz coherente.

Una desventaja potencial del patrón de repositorio es que puede agregar una capa adicional de complejidad a tu código. Sin embargo, en muchos casos, los beneficios de la separación de preocupaciones, la mejora en las pruebas y la coherencia en el acceso a los datos pueden superar este costo.

Es importante tener en cuenta que, aunque el patrón de repositorio puede ser muy útil, no es necesariamente la mejor elección para todas las situaciones. Como con todos los patrones de diseño, es importante considerar cuidadosamente tus necesidades y las características de tu aplicación antes de decidir utilizarlo.

### ¿Cómo se implementa el patrón de repositorio con Modyo?

El patrón de repositorio en Modyo puede aplicarse tanto a micro frontends como a microservicios. Esto se lleva a cabo mediante la implementación de repositorios intermedios a través de [Modyo Connect](/es/connect). Desde estos repositorios, se pueden generar componentes versionados que quedan disponibles en un sistema de registro de artefactos. Desde allí, pueden ser invocados según se necesiten en distintos contextos.

Para ello, Modyo Connect utiliza la tecnología de [GitHub Enterprise](https://github.com), sobre la cual se tienen acceso a tres componentes fundamentales para activar este patrón:
- Repositorio dónde se almacena y versiona la librería, con [GitHub Repositories](https://github.com/features)
- Sistema de automatización de flujos de trabajo, con [GitHub Actions](https://github.com/features/actions)
- Sistema de publicación de artefactos para su distribución, con [GitHub Registry](https://github.com/features/packages)

El último de ellos es particularmente importante, ya que desde él los demás proyectos tendrán acceso a la librerías que conforman el patrón, pudiendo obtener código reusable bajo un esquema de versionamiento que permita obtener mejoras de la forma más controlada posible.

:::tip Versionado Semántico
La administración de librerías intermedias de forma central, requerirá la aplicación de algún criterio para etiquetar las versiones que se irán generando. Modyo recomienda el uso del [versionado semántico](https://semver.org/lang/es/).
::: 
