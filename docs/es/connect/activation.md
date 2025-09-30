---
search: true
---

# Activación

El servicio gestionado de Modyo Connect se activa mediante un contrato o anexo independiente de la suscripción a Modyo Enterprise Cloud. Para iniciar el servicio, se deben considerar los siguientes puntos:

- Número de desarrolladores con acceso a repositorios de código.
- Cantidad de [micro frontends](/es/architecture/patterns/micro-frontend) a desarrollar con el Command Line Interface (CLI) de Modyo.
- Número de ambientes pre-productivos para el desarrollo.
- Cantidad de [microservicios](/es/architecture/patterns/microservice) a desarrollar.
- Número de repositorios intermediarios para artefactos compartidos (ej. paquetes NPM, librerías Java para Maven o Gradle).
- Enlaces VPN a activar para acceder a servicios de negocio.
- Requisitos de autenticación por Single Sign-On.

La capacidad de los contenedores se calcula según el tráfico estimado en producción, sujeta a ajustes por consumo real y criterios de alta disponibilidad.

### Ticket de Requerimiento

La gestión de solicitudes se realiza a través del [Centro de Soporte de Modyo](https://support.modyo.com), creando tickets de requerimientos y siguiendo las instrucciones indicadas.

Una vez creado el ticket, se le asigna una prioridad, un identificador único y una URL para revisar su estado o responder a consultas del equipo SRE de Modyo.
Los tickets de requerimientos son revisados antes de ser aceptados y asignados a un SRE. La duración de este proceso depende de la demanda y disponibilidad del equipo.

Los tickets urgentes requieren justificación y pueden estar sujetos a limitaciones según el contrato de soporte.
Para un acceso eficiente, se solicita la creación de una cuenta utilizando el correo corporativo asociado al contrato de Modyo Enterprise Cloud. Se recomienda incluir a todas las partes involucradas en el ticket mediante el campo CC del formulario de solicitud, para facilitar la comunicación.


:::tip Planificación
Se recomienda planificar anticipadamente los tickets de requerimientos, considerando períodos de alta demanda. La anticipación ayuda a garantizar tiempos de respuesta adecuados.
:::

### Costos

Modyo utiliza la unidad de equivalencia Modyo Resource Unit (MRU) para asignar recursos y licencias. Los MRU se suman, considerando el total de los ambientes, y se facturan mensualmente. Modyo establece el número de MRUs asignados a cada recurso según un análisis de costo que incluye costos de AWS, impuestos y costos de gestión de hora-hombre. El valor del MRU varía según los costos en la nube. Para más detalles sobre los valores actualizados, contacta al ejecutivo de cuentas asignado.
