---
search: true
---

# Repositorio

El patrón de repositorio es un diseño de software que encapsula el almacenamiento, recuperación y búsqueda en un repositorio persistente de objetos. Esto permite separar claramente la lógica de la capa de datos de la capa de negocio.

Un repositorio se puede entender como un almacén de objetos en memoria que se cargan desde la base de datos.

El patrón de repositorio tiene tres propósitos principales:

- **Separar la lógica de la aplicación de la lógica de la base de datos:** Esto facilita la escritura y el mantenimiento del código de la aplicación al reducir la necesidad de lógica para la manipulación de la base de datos.
- **Facilitar las pruebas:** Al permitir el intercambio del repositorio real con una implementación ficticia para pruebas sin afectar la base de datos real.
- **Proporcionar una interfaz coherente para el acceso a datos:** Independientemente de la ubicación de los datos o la implementación de las operaciones de la base de datos, la aplicación siempre interactúa con un repositorio a través de una interfaz coherente.

Una desventaja del patrón de repositorio es que puede añadir complejidad adicional al código, sin embargo, frecuentemente, los beneficios de la separación de preocupaciones, la mejora en las pruebas y la coherencia en el acceso a los datos superan esta desventaja.

Es importante tener en cuenta que, aunque el patrón de repositorio puede ser muy útil, no es la mejor elección para todas las situaciones. Como con todos los patrones de diseño, es esencial considerar cuidadosamente las necesidades y características de tu aplicación antes de decidir utilizarlo.

### Implementación del patrón de repositorio con Modyo

El patrón de repositorio se puede aplicar en Modyo tanto a micro frontends como a microservicios mediante la implementación de repositorios intermedios a través de [Modyo Connect](/es/connect). Estos repositorios generan componentes versionados disponibles en un sistema de registro de artefactos y pueden ser invocados según se requieran en distintos contextos.

Para ello, Modyo Connect utiliza la tecnología de [GitHub Enterprise](https://github.com), que proporciona acceso a tres componentes clave para activar este patrón:
- Repositorio dónde se almacena y versiona la librería, con [GitHub Repositories](https://github.com/features)
- Sistema de automatización de flujos de trabajo, con [GitHub Actions](https://github.com/features/actions)
- Sistema de publicación de artefactos para su distribución, con [GitHub Registry](https://github.com/features/packages)

El último componente es especialmente importante, ya que permite que otros proyectos accedan a las librerías que componen el patrón, obteniendo código reutilizable bajo un esquema de versionamiento controlado.

:::tip Versionado Semántico
Para administrar librerías intermedias de forma central, es necesario establecer un criterio para etiquetar las versiones que se generarán. Para ello, Modyo recomienda el uso del [versionado semántico](https://semver.org/lang/es/).
:::
