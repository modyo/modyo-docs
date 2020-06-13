---
search: true
---

# Seguridad

:::tip Reporte de Incidencias de Seguridad
Modyo posee un canal seguro y confidencial de reporte de incidencias de seguridad por medio del correo electrónico <a href="mailto:security@modyo.com">security@modyo.com</a>.
:::


El siguiente documento describe la arquitectura de seguridad, políticas y procedimientos que Modyo emplea en el desarrollo de su plataforma, ejecución de servicios profesionales y de la operación en la nube de las versiones Cloud y Enterprise Cloud de la Plataforma Modyo.

Para cumplir con estos objetivos, Modyo debe asegurar a sus clientes que sus datos están seguros y que protegerlos es una de sus responsabilidades más importantes. Modyo está comprometido con la transparencia acerca de sus prácticas de seguridad y también con ayudar a sus clientes a comprenderlas.



### Seguridad Organizacional
Modyo posee un excelente programa de seguridad dedicado a asegurar que cada cliente pueda tener el máximo nivel de confianza en la custodia de sus datos. El programa de seguridad de Modyo está alineado con los prácticas más relevantes del estándar ISO 27000 y es regularmente auditado por sus propios clientes.

### Seguridad del Personal
Las Políticas de Seguridad de la empresa son conocidas y aplicadas por todos los empleados (colaboradores) que posean acceso a la información de clientes. Todos los colaboradores deben aceptar y cumplir nuestras normas de seguridad. Todos los colaboradores tienen firmado en sus contratos laborales estrictas cláusulas de confidencialidad y seguridad de la información.

Antes de tener acceso a los sistemas, todos los colaboradores deben aceptar los términos de confidencialidad y ser sometidos a un chequeo de sus antecedentes, además de acudir a un entrenamiento de seguridad. Este entrenamiento cubre temas de privacidad y seguridad, además del uso aceptable del equipamiento tecnológico de la empresa, prevención de malware, seguridad física, privacidad de los datos, gestión de cuentas, reporte de incidentes entre otros.

Al terminar su relación laboral con Modyo, todos los accesos y permisos son revocados inmediatamente.

#### Entrenamientos en Seguridad y Privacidad
Durante la vigencia de su contrato, todos los colaboradores de Modyo deberán asistir a los entrenamientos de privacidad y seguridad al menos una vez por año. También será requerido de que lean y firmen las Políticas de Seguridad y Privacidad de Modyo. Todos los colaboradores que posean privilegios especiales (con mayor acceso a la información de clientes) recibirán además un entrenamiento especializado según su rol y función.

Todos los colaboradores tienen el deber de reportar incidentes de seguridad a los equipos internos apropiados. Los colaboradores serán oportunamente informados si en algún momento violan alguno de los términos que puedan incurrir en consecuencias, incluyendo su desvinculación con la empresa.

#### Profesionales Dedicados de Seguridad
Por medio del Área de Seguridad e Infraestructura, Modyo dispone de un equipo dedicado el cual es responsable de la implementación y el cumplimiento de las Políticas de Seguridad. El Área de Seguridad e Infraestructura es liderada por el Chief Technology Officer (CTO) de Modyo con quién se definen y aprueban las políticas, procedimientos y planes de mejora a ser implementados.

Se definen los siguientes aspectos críticos de seguridad:

## Seguridad del Producto
Establecer estándares y prácticas seguras de desarrollo de software
Asegurar que existan procesos de detección y documentación de riesgos a nivel de proyecto
Proveer de revisiones de diseño y código fuente para la detección oportuna de posibles fallas de seguridad
Entrenar a los desarrolladores en las mejores prácticas de codificación segura

## Seguridad Operacional
Construye y opera toda la infraestructura crítica de seguridad, incluyendo los servicios de autenticación y monitoreo de eventos
Mantiene un archivo de los logs relevantes para las inspecciones de seguridad
Aseguramiento de las configuraciones seguras en los entornos de producción
Responder a alertas en caso de eventos de seguridad
Manejar incidentes de seguridad

## Riesgo y Cumplimiento
Coordinar los test de penetración
Manejar los escaneos de vulnerabilidades y sus remediaciones
Coordinar las evaluaciones de riesgos regulares y darle seguimiento a los riesgos identificados
Coordinar la auditoría y mantención de las certificaciones de seguridad
Revisar y calificar la seguridad de los proveedores

Todos los miembros del Área de Seguridad e Infraestructura de Modyo se encuentran en un proceso continuo de aprendizaje y capacitación para asegurar su expertise en estos y otros temas. 

## Políticas y Estándares
Modyo posee Políticas de Seguridad bien definidas que son aceptadas por la totalidad de sus empleados las cuales proveen las reglas básicas para la operación del negocio. Con ellas Modyo asegura que sus clientes puedan confiar en sus empleados en cuanto a su ética y comportamiento al operar los diferentes servicios ofrecidos. 

Las Políticas de Seguridad de Modyo incluyen temas como:
Estándares éticos y legales en la conducción del negocio
Uso aceptable de los sistemas de información
Clasificación, etiquetado y manipulación de los activos de información
Prácticas para la identificación, autenticación y autorización de acceso a los sistemas de información
Seguridad en el desarrollo, configuración y mantenimiento de sistemas
Uso de encriptación
Planificación para la continuidad del negocio y recuperación de desastres
Control de cambios


Estas políticas se encuentran en constante mejora, publicadas en un canal interno y son regularmente revisadas y actualizadas, según corresponda.

### Auditorías
Modyo es auditado regularmente de forma interna y por sus mismos clientes, quienes se encargan de realizar inspecciones de seguridad a los procesos y políticas internas, así como también a la infraestructura de producción. Los resultados de las auditorías son entregados a los gerentes de Modyo, quienes se encargan de dar resolución a todos los hallazgos encontrados.

### Tests de Penetración
Modyo habitualmente realiza pruebas de penetración a nivel de infraestructura, plataforma y aplicaciones. El equipo de seguridad de Modyo revisa y cataloga los resultados para su oportuna resolución.

Los clientes que quieran realizar sus propias pruebas de penetración de seguridad podrán hacerlo. Modyo recomienda la coordinación de estos eventos dando aviso por medio del ejecutivo de atención designado.


## Diseño de Seguridad
### Ciclo de Desarrollo
Modyo revisa proactivamente la seguridad de sus productos en cada ciclo de desarrollo, asegurando que cada versión sigue un exhaustivo proceso de inspecciones manuales y automáticas. El cumplimiento de estas inspecciones será requerido para que el equipo pueda proceder con los releases de nuevas versiones del producto.

Todo las fuentes de Modyo y aplicaciones de integración desarrolladas por la empresa se encuentran en un sistema de control empresarial de código fuente, el cual se encarga de que el trabajo producido por los ingenieros sea revisado y aprobado por al menos dos miembros del equipo (antes de que sea integrado al proyecto), además de la ejecución previa de los test de seguridad y de calidad del código.

### Reporte de Incidencias
Modyo posee de un canal especial para el reporte de incidencias de seguridad, el cual está a cargo del Área de Seguridad e Infraestructura de Modyo. Los clientes de Modyo también podrán reportar incidencias por medio de su ejecutivo de cuenta o partner, quienes tendrán la responsabilidad de notificar a equipo interno y dar seguimiento a la resolución de éstas.


### Protección de Datos de Clientes
El objetivo del programa de seguridad de Modyo es el de prevenir el acceso no autorizado a los datos de clientes. Para ello el equipo de operaciones, en conjunto con las demás áreas, toman exhaustivos pasos para identificar y mitigar riesgos de seguridad, así como de implementar las mejores prácticas y evaluar constantemente nuevas formas para mejorar.

### Encriptación de Datos en Tránsito y en Descanso
Modyo posee mecanismos robustos de encriptación para todos los datos que se encuentran en tránsito por la red y en descanso en los repositorios de datos. Modyo emplea para ello los diversos mecanismos que ofrece Amazon AWS para el manejo de llaves de encriptación y certificados SSL, revisando continuamente que las nuevas y mejoras prácticas sean incorporadas a los procesos.

Modyo opera toda su infraestructura de producción y preproducción en Amazon AWS, quienes son líderes en la industria del cloud computing y ofrecen los mayores estándares y certificaciones de seguridad perimetral en sus data centers.

### Seguridad de Redes
Modyo divide a cada cliente en su propia red VPC (Virtual Private Cloud). Cada cliente puede poseer hasta 3 entornos VPC diferentes configurados (producción, integración y certificación), cada uno completamente aislado del otro y a su vez de los demás clientes.

El acceso a los sistemas es realizado públicamente por los usuarios desde Internet por medio de un Web Application Firewall que posee reglas contra ataques comunes como inyecciones de SQL y XSS o filtros de IP. Sólo una pequeña parte de la infraestructura de producción y preproducción puede ser accedida directamente desde direcciones IPs autorizadas por personal calificado de Modyo para tareas de operación y mantenimiento.

Modyo posee sistemas de detección de intrusos (IDS/IPS) a nivel de redes y hosts que permiten alertar de accesos no controlados de cualquier intruso a algún servidor.

### Acceso Autorizados
Modyo no entrega acceso a los datos de clientes a ningún colaborador que no requiera de él para efectuar sus responsabilidades contractuales. Para asegurarnos de ello, las credenciales y accesos de los colaboradores son auditados internamente cada tres meses. 

Cuando un colaborador ingresa a trabajar a Modyo sólo posee acceso a los sistemas básicos de correo y planificación de tareas. Cualquier acceso mayor debe ser explícitamente solicitado mediante un ticket de control al Área de Seguridad e Infraestructura quien realizará el seguimiento de estas credenciales extendidas.

### Autenticación
Para reducir aún más los riesgos de acceso no autorizado a los datos, los empleados de Modyo con acceso a la información de clientes requieren contar con un dispositivo de “second factor” que será solicitado al momento de ingresar a los sistemas (panel de control de Amazon, DNS, sistemas de control de código fuente, etc).

Todas las contraseñas utilizadas para acceder a recursos y datos sensibles de clientes deberán ser de al menos 12 caracteres. El uso obligatorio de un gestor contraseñas previene el reúso y predictibilidad de éstas. 


### Monitoreo de Sistemas, Logs y Alertas
Modyo almacena de forma centralizada todos los logs de producción, tanto de los servidores como de los servicios de Amazon configurados para cada cliente. La información de los logs es utilizada para configurar alertas y realizar investigaciones internas, con una retención de 1 año.

Para todos los sistemas configurados en la nube de Amazon AWS existe una política permanente de monitoreo mediante las herramientas de AWS Cloudtrail para el control de eventos, AWS Guard Duty para redes y AWS Inspector para instancias.

### Respuesta a Incidentes
Modyo posee políticas y protocolos para dar respuesta a potenciales incidentes de seguridad. Todos los incidentes serán gestionados por el Área de Seguridad e Infraestructura. Modyo define y clasifica los tipos de eventos que deberán ser manejados por el proceso de respuesta según su severidad. Los protocolos de respuesta a incidentes son revisados y actualizados, según corresponda, de forma anual.

### Destrucción de Datos 
Modyo destruye toda la información de producción de los clientes que no posean contratos de licencia activos. Todos los respaldos de información en bases de datos no podrán ser almacenados por más de 30 días una vez que la relación con el cliente haya terminado.

### Almacenamiento de Secretos
Modyo posee mecanismos de encriptación para compartir información secreta de clientes y accesos de forma segura entre los miembros del equipo que posean los privilegios requeridos.


### Seguridad de Equipos de Trabajo
Modyo posee de Políticas de Seguridad que explican acerca del uso aceptable y seguro de los equipos de trabajo. Todos los equipos de trabajo deben estar encriptados y protegidos por una contraseña segura, la cual además deberá ser requerida cada vez que el equipo se encuentre en inactividad por un periodo corto de tiempo.

### Control de Sistemas Operacionales
Todos los cambios al código y configuraciones de los sistemas de Modyo son supervisados por procesos de aprobación de cambios y de revisión de código estático para prevenir la introducción de código malicioso a los repositorios. 

Todos los servidores y sistemas utilizados en la operación de la plataforma y sus proceso de operación poseen los servicios que no son requeridos deshabilitados, removiendo las credenciales y cuentas por defecto.



## Recuperación ante Desastres y Continuidad Operacional
Modyo opera siguiendo las mejores prácticas de Amazon AWS. Todos los sistemas operan de forma redundante en al menos dos zonas de disponibilidad y los respaldos de información en al menos dos regiones geográficas distantes entre sí.

Los servicios que por motivos de costos y eficiencia no sean requeridos de operar en modalidad de alta disponibilidad deberán al menos contar con un respaldo verificado para poder ser recreados en caso de pérdida.

Para más detalle acerca de la operación de alta disponibilidad y misión crítica en la nube favor referirse al documento Modyo: Cloud Operations.

Para más detalle acerca de los planes y estrategias de continuidad operacional favor referirse al documento Modyo: Business Continuity Plan.

## Modelo de Responsabilidad Compartida
En los casos con los cuales se mantengan integraciones a sistemas transaccionales vía API, REST, Servicios Web u otros (con o sin uso de VPNs), Modyo garantiza la seguridad perimetral de su infraestructura de nube, custodia de propiedad intelectual de códigos fuentes y datos sensibles de usuarios, siguiendo las mejores prácticas de seguridad de la industria. 

No obstante lo anterior, será responsabilidad de cada cliente realizar validaciones de seguridad e integridad en las transacciones y monitorear los posibles usos fraudulentos de sus servicios expuestos. Modyo no será responsable por el uso indebido de los servicios expuestos en los puntos de integración otorgados por los clientes ni por perjuicios ocasionados por vulnerabilidades en sistemas que escapan de su control.
