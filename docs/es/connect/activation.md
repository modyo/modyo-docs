---
search: true
---

# Activación

El servicio manejado de Modyo Connect se activa como un contrato o anexo separado e independiente del licenciamiento por suscripción de Modyo Enterprise Cloud. Para iniciar el servicio de Modyo Connect se deben tener en cuenta las siguientes consideraciones:

- Número de desarrolladores que deberán tener acceso a los repositorios de código.
- Número de [micro frontends](/es/architecture/patterns/micro-frontend) que serán desarrollados utilizando el Command Line Interface (CLI) de Modyo.
- Cantidad de ambientes pre-productivos que se usarán como parte del desarrollo.
- Número de [microservicios](/es/architecture/patterns/microservice) que serán desarrollados. 
- Número de repositorios intermediarios que podrían ser requeridos en caso de construir artefactos compartidos (por ejemplo: paquetes NPM o librerías de Java para Maven o Gradle).
- Enlaces VPN que deban ser activados para acceder a los servicios de negocio.
- Requerimientos de autenticación por Single Sign-On.

La capacidad de los contenedores utilizados para el despliegue de los servicios se calculará dependiendo del tráfico estimado hacia el sistema en producción. Esta estimación servirá para establecer el tamaño inicial, pero puede cambiar en el tiempo dependiendo del consumo real de los servicios. Se deberán considerar criterios de alta disponibilidad y eventual redundancia multi-región para el caso del despliegue en producción.

### Ticket de requerimiento

La gestión de solicitudes se realiza por medio del [Centro de Soporte de Modyo](https://support.modyo.com), mediante la creación de tickets de requerimientos y completando las instrucciones que se indicarán en él. Una vez creado el ticket, se le asigna una prioridad, identificador único, y una URL que se podrá visitar posteriormente para revisar el estado de la solicitud o responder las consultas que el equipo SRE de Modyo pueda tener.

Los tickets de requerimientos, una vez que se ingresan, son revisados antes de ser aceptados y asignados a un SRE. La duración de este proceso dependerá de la demanda y disponibilidad del equipo. Si el ticket debe tratarse de forma urgente, se deben explicar claramente las razones de forma que el equipo pueda replanificar los demás. Dependiendo del contrato de soporte asociado al servicio, cada cliente podría poseer solo un número limitado y no acumulable de requerimientos que pueden ser tratados de forma urgente durante el mes.

Para mejorar la gestión de tickets y la forma cómo los clientes acceden al estado de estos, el Centro de Soporte de Modyo pedirá la creación de un usuario y una contraseña para realizar las solicitudes. Es importante que la creación de esta cuenta se realice utilizando el correo electrónico corporativo al cual esté asociado el contrato de servicios de Modyo Enterprise Cloud, de otro modo el equipo SRE no podrá identificar la validez de la solicitud. Además, es conveniente incluir en el ticket a todas las partes involucradas que deberían tener acceso a él, mediante el campo CC del formulario de solicitud.

:::tip Planificación 
Modyo recomienda planificar de forma anticipada los tickets de requerimientos. Existen períodos en el mes en dónde se observa más demanda por el servicio que en otros, por lo que la recomendación es tratar de hacer las solicitudes con la mayor antelación posible.
:::

### Costos

Modyo ha definido una unidad de equivalencia llamada Modyo Resource Unit (MRU). El MRU es una abstracción para asignar recursos computacionales y consumos de licencias a los elementos configurados como parte del servicio. Los MRU se suman considerando el total de los ambientes y se cobran de forma mensual al cliente. Modyo establece el número de MRUs asignados a cada recurso según un análisis de costo que incluye los costos de AWS, impuestos, costos de hora hombre de gestión, entre otros. **El valor (en dólares norteamericanos) de un MRU podría variar dependiendo de los costos en la nube**. Para más detalle acerca de los valores actualizados de las unidades MRU, favor contactarse con el ejecutivo de cuentas asignado.
