---
search: true
---

# Espacios

Un Espacio es un lugar acotado donde los miembros del equipo pueden definir distintas estructuras (tipos) de contenido, crear y publicar entradas para usar tanto dentro o fuera de Modyo a través de la API pública.

Desde Modyo se puede configurar el acceso desde distintos origenes para que el servicio que reciba la API, pueda interpretarla fácilmente.

Espacios también nos permite organizar el contenido en las áreas en las que se está trabajando, para tener una mejor distribución y orden.

## Crear un Espacio

Para crear un Espacio, se debe hacer click en el botón verde en la parte superior derecha de la vista índice de Espacios, y asignar el nombre y el UID que usaremos.

Además, deberemos seleccionar el idioma por defecto sobre el cual se escribirá el contenido que publicaremos, para una mejor configuración de los caracteres.

:::tip
Más adelante, en la configuración podrás definir otros idiomas secundarios para las entradas del Espacio.
:::

## Configurar un Espacio

En este caso, la configuración de Espacios nos sirve para cambiar las características generales, idioma, seguridad, miembros del equipo de trabajo y las reglas de revisión y publicación.

<img src="/assets/img/content/space-settings.jpg" style="margin-top: 40px" width="300">

### General

Para cambiar el nombre del Espacio o su UID, es posible hacerlo desde acá.

El UID del Espacio es muy importante ya que es el atributo con el cual accedes desde la [API pública](/guides/content/public-api-reference.html#referencia-del-api) de contenido, el [SDK de Javascript](/guides/content/public-api-reference.html#sdk-de-javascript) y el [SDK de Liquid](/guides/content/public-api-reference.html#sdk-de-liquid). Ten en consideración que este atributo, aparte de ser único, no puede contener tildes, puntos ni caracteres especiales, dado que será usado en las URL para acceder al contenido.

### Localización

Modyo permite el cambio de idiomas y léxicos según el país en que se necesite. El cambio es útil en el caso de que se necesite trabajar con contenido personalizado y usuarios con distintos lenguajes.

El idioma por defecto de un Espacio se define al momento de crear el Espacio, pero en esta sección puedes añadir cuantos idiomas secundarios como quieras. Sólo debes seleccionar uno de la lista, añadirlo y guardar los cambios. Luego de añadir un idioma secundario, cuando modifiques una entrada, notarás que aparecerá un selector de idioma junto al título de la página.

:::tip
Puedes aprender como seleccionar uno de los idiomas disponibles de una entrada en sus secciones correspondientes: [API pública](/guides/content/public-api-reference.html#filtros), [SDK de Javascript](/guides/content/public-api-reference.html#sdk-de-javascript) y  en [SDK de Liquid](/guides/content/public-api-reference.html#filtrar-entradas)
:::

### Caché

El caché es una herramienta que nos permite reducir la cantidad de requests que llegan a los servidores de aplicación, mejorando el performance y disminuyendo los tiempos de respuesta. En esta sección, puedes habilitar el caché para la API pública de contenido del Espacio, permitiendo que el contenido quede cacheado hasta 5 minutos (300 segundos). 

:::warning
Debes tener en consideración que al habilitar esta opción, los cambios en tu contenido serán visibles en intervalos del tiempo que elijas en esta opción, por ejemplo, si usas 5 minutos, al publicar el contenido con título "A", y luego publicas el mismo contenido con título "A+1", por 5 minutos verás el contenido con el título "A" hasta que el caché inicial quede invalidado.
:::

:::tip
Para trabajar en modo desarrollo, es altamente recomendable tener esta opción deshabilitada, y solo habilitarla cuando hay que enfrentar algún escenario de alta demanda o concurrencia.
:::

### Seguridad

Modyo, como forma de transmisión segura de datos, permite habilitar CORS para que la API pueda ser accedida por cualquier microservicio en un dominio externo.

Para ello, también es necesario especificar el dominio desde dónde será importada la información, para dar un mejor acceso.

#### CORS

Al habilitarse CORS, se producen los siguientes cambios dentro de la API:

- La configuración de URLs permitidas para acceder al contenido a nivel de Espacios, permitiendo automáticamente custom domains de sites.
- Cuando se realiza un request al API, se agrega el header ```Access-Control-Allow-Origin``` con valor request.origin a la respuesta y    ```Access-Control-Allow-Credentials' = true```, sólo si el origen pertenece a las urls/domains previamente mencionadas. En caso caso contrario no quedan configurados.
- URLs permitidas son cacheadas a nivel de aplicación.
- En caso de usar caché intermedio se debe considerar el origen en la clave de caché para que se maneje el caché por separado en cada origen:

```javascript
Varnish: sub vcl_hash {  if (req.http.Origin) { hash_data(req.http.Origin);  } }
Nginx: set $cache_key "$http_x_forwarded_proto://$host$request_uri-$http_accept-$http_x_requested_with";
```

#### CORS y SSL

Al decidir si usar SSL dentro de la plataforma, también se debe considerar lo siguiente:

- SSL: Wildcards no son permitidos.
- NO SSL: Wildcards son permitidos, pero Modyo ahora debe ser secure by default.

### Revisión en Equipo (Team Review)

La calidad del contenido que se publica en cada una de las plataformas debe ser certificada y como forma de mantener la calidad y seguridad, Modyo usa la Revisión en Equipo para confirmar y corregir los contenidos que se envían a través de la API.

En este caso, se pueden determinar cuántos miembros del equipo deben aprobar un contenido antes de ser puestos a disposición del Administrador, quien deberá publicarlos. Predeterminadamente, deben ser al menos 3 revisores, pero la cantidad puede cambiar.

El equipo puede ser predeterminado por el Administrador o elegido por quien envía a revisión. Así solo ellos pueden corregir y aprobar.

Además, se puede forzar la revisión por un usuario en específico, para que este sea aprobado y seleccionar a quienes se les asignará la tarea.

Por último, es posible diferenciar quiénes deben revisar cada contenido, según el Espacio en que se esté trabajando. Para ello, se puede asignar un filtro desde este lugar y determinar los miembros del equipo que chequearán la información, harán comentarios y darán su aprobación.

[Ir a Team Review](/guides/platform/team-review.html)

### Miembros del Equipo

Para ordenar el trabajo, Modyo permite seleccionar los miembros del equipo que trabajarán en cada Espacio y así tendrán acceso a la escritura, revisión y/o publicación.

Para ello, el Administrador que creó el Espacio puede asignar manualmente a los usuarios y los roles predeterminados que habilitan cada una de las funciones.

#### Agregar usuario ####
Para añadir un usuario al Espacio, selecciona el botón primario "+ Nuevo" en la parte superior derecha de la vista, en el modal selecciona a un Administrador y asignale un rol, luego presiona "Añadir" para que ese Administrador sea parte del equipo de trabajo del Espacio.

#### Modificar Rol ####
Puedes modificar el rol de alguno de los Administradores asociados haciendo click en su nombre. Se levantará un modal, donde podrás seleccionar el nuevo rol. Presiona "Guardar" para confirmar el cambio.

#### Eliminar Administradores ####
Para eliminar Administradores de un Espacio, puedes seleccionarlos usando los checks a la izquierda de su nombre, y luego haciendo click en el botón al final de la lista "Borrar".
