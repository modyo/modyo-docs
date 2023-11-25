---
search: true
---

# Activación

El servicio manejado de Modyo Connect se activa mediante un contrato o anexo independiente de la suscripción a Modyo Enterprise Cloud. Para iniciar el servicio de Modyo Connect debes considerar:

- Número de desarrolladores con acceso a repositorios de código.
- Número de [micro frontends](/es/architecture/patterns/micro-frontend) que serán desarrollados con el Command Line Interface (CLI) de Modyo.
- Cantidad de ambientes pre-productivos que se usarán en el desarrollo.
- Número de [microservicios](/es/architecture/patterns/microservice) a desarrollar.
- Número de repositorios intermediarios que podrían ser requeridos en caso de construir artefactos compartidos, como paquetes NPM o librerías de Java para Maven o Gradle.
- Enlaces VPN que deban ser activados para acceder a los servicios de negocio.
- Requerimientos de autenticación por Single Sign-On.

La capacidad de los contenedores se calcula según el tráfico estimado hacia el sistema en producción, sujeto a ajustes según el consumo real y criterios de alta disponibilidad.

### Ticket de requerimiento

La gestión de solicitudes se realiza a través del [Centro de Soporte de Modyo](https://support.modyo.com), mediante la creación de tickets de requerimientos y completando las instrucciones que se indican en él.

Una vez creado el ticket, se le asigna una prioridad, identificador único y una URL para revisar el estado de la solicitud o responder las consultas que el equipo SRE de Modyo puede tener.
Los tickets de requerimientos, una vez que se ingresan, son revisados antes de ser aceptados y asignados a un SRE. La duración de este proceso depende de la demanda y disponibilidad del equipo.

Los tickets urgentes requieren justificación y pueden estar limitados según el contrato de soporte.
Para un acceso eficiente, solicitamos la creación de una cuenta utilizando el correo corporativo asociado al contrato de Modyo Enterprise Cloud. Se recomienda incluir todas las partes involucradas en el ticket, mediante el campo CC del formulario de solicitud, para facilitar la comunicación.


:::tip Planificación
Recomendamos planificar de forma anticipada los tickets de requerimientos, considerando períodos de alta demanda. La anticipación ayuda a garantizar tiempos de respuesta adecuados.
:::

### Costos

Modyo utiliza una unidad de equivalencia llamada Modyo Resource Unit (MRU) para asignar recursos y licencias. Los MRU se suman, considerando el total de los ambientes, y se facturan mensualmente. Modyo establece el número de MRUs asignados a cada recurso según un análisis de costo que incluye los costos de AWS, impuestos y costos de hora hombre de gestión. El valor del MRU varía según los costos en la nube. Para más detalle acerca de los valores actualizados, contacta al ejecutivo de cuentas asignado.
