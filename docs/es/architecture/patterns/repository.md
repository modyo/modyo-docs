---
search: true
---

# Patrón Repositorio

El patrón Repositorio es un diseño de software que encapsula el almacenamiento, recuperación y búsqueda de objetos en un repositorio persistente. Esto permite una clara separación entre la lógica de la capa de datos y la capa de negocio.

Un repositorio puede entenderse como un almacén de objetos en memoria que se cargan desde la base de datos.

El patrón Repositorio tiene tres propósitos principales:

- **Separar la lógica de la aplicación de la lógica de la base de datos**: Facilita la escritura y el mantenimiento del código al reducir la necesidad de lógica para la manipulación de la base de datos.
- **Facilitar las pruebas**: Permite intercambiar el repositorio real por una implementación ficticia para pruebas, sin afectar la base de datos.
- **Proporcionar una interfaz coherente para el acceso a datos**: La aplicación interactúa con el repositorio a través de una interfaz coherente, independientemente de la ubicación de los datos o la implementación de las operaciones de la base de datos.

Una desventaja del patrón Repositorio es que puede añadir complejidad al código. Sin embargo, los beneficios de la separación de preocupaciones, la mejora en las pruebas y la coherencia en el acceso a los datos suelen superar esta desventaja.

Es importante tener en cuenta que, aunque el patrón Repositorio es muy útil, no es la mejor elección para todas las situaciones. Como con todos los patrones de diseño, es esencial considerar cuidadosamente las necesidades y características de la aplicación antes de decidir utilizarlo.

### Implementación del patrón de repositorio con Modyo

El patrón Repositorio puede aplicarse en Modyo tanto a micro frontends como a microservicios mediante la implementación de repositorios intermedios a través de [Modyo Connect](/es/connect). Estos repositorios generan componentes versionados disponibles en un sistema de registro de artefactos, invocables según se requieran en distintos contextos.

Para ello, Modyo Connect utiliza la tecnología de [GitHub Enterprise](https://github.com), que proporciona acceso a tres componentes clave para este patrón:
- Repositorio para almacenar y versionar la librería, con [GitHub Repositories](https://github.com/features).
- Sistema de automatización de flujos de trabajo, con [GitHub Actions](https://github.com/features/actions).
- Sistema de publicación de artefactos para su distribución, con [GitHub Registry](https://github.com/features/packages).

El último componente es especialmente importante, ya que permite que otros proyectos accedan a las librerías que componen el patrón, obteniendo código reutilizable bajo un esquema de versionamiento controlado.

:::tip Versionado Semántico
Para administrar librerías intermedias de forma centralizada, es necesario establecer un criterio para etiquetar las versiones. Para ello, Modyo recomienda el uso del [versionado semántico](https://semver.org/lang/es/).
:::
