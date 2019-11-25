---
search: true
---

# Seguridad

## Registros de actividad

<img src="/assets/img/platform/activity-logs.jpg" style="margin-top: 40px; border: 1px solid #EEE;" />

La plataforma te permite ver todos los movimientos que se han hecho durante todo el tiempo que la tengas activa.

En esta sección, podrás filtrar por fecha, tipo de movimiento o usuario que te permitirán hacer un seguimiento correcto.

Además, tendrás la posibilidad de ver el detalle de lo que se hizo y desde qué sección se hizo.

Esto te puede servir en el caso de tener muchos usuarios internos de la plataforma o para detectar errores y cambios en la cadena de producción y desarrollo.



## Seguridad

<img src="/assets/img/platform/cors.jpg" width="500" style="margin-top: 40px; border: 1px solid #EEE;" />

En esta sección podremos activar el Cross Origin Resource Sharing (CORS), para poder acceder a la data de Modyo desde otras web que no necesariamente sean seguras.

Al habilitarlo, deberás especificar los dominios que quieres que se habiliten para que estén compartiendo recursos con tu sitio.

Tras esto, la plataforma te dará un token de tiempo limitado vía JSON, para que puedas enlazar los sitios.

::: danger Peligro
Recuerda siempre que esto también puede significar una falla de seguridad, por lo que debes asegurarte que los datos que se compartan, estén libres de malware u otros archivos peligrosos para nuestra plataforma y clientes.
:::
