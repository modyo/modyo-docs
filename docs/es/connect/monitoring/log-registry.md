---
search: true
---

# Registro de Logs

El registro de logs se refiere a la grabación secuencial en un archivo o base de datos de todos los eventos o acciones que afectan a un proceso particular, constituyendo una evidencia del comportamiento del sistema.


Modyo Connect implementa su registro de logs mediante [AWS CloudWatch Logs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html), lo que permite la centralización de registros y una vista unificada de todos los logs generados por los componentes de la infraestructura.


## Pasos de Activación

Los registros de AWS CloudWatch Logs están activos por defecto en toda la infraestructura gestionada por Modyo Connect. Se accede a ellos mediante las cuentas del servicio.


:::warning Ofuscación de registros
Es responsabilidad del usuario que genera los logs ofuscar los parámetros y la información sensible incluida en los registros.
:::