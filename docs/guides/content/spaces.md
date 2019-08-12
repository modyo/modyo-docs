---
search: true
---

# Espacios

Un Espacio es un lugar acotado donde los miembros del equipo pueden definir distintas estructuras (tipos) de contenido y crear y publicar entradas para usar tanto dentro o fuera de Modyo a través de la API pública.

Desde Modyo se puede configurar el envío de información desde distintos formatos para que el servicio que reciba la API, pueda interpretarla fácilmente.

Espacios tambiém nos permite organizar el contenido en las áreas en las que se está trabajando, para tener una mejor distribución y orden.

## Crear un Espacio

Para crear un espacio, se debe hacer clic en el botón verde en la parte superior de la pantalla, y asignar el nombre y la UID que usaremos.

Además, deberemos asignar el idioma sobre el cual se escribirá el contenido que publicaremos, para una mejor configuración de los caracteres.

### Configuración

En este caso, la Configuración de Espacios nos sirve para cambiar las características generales de la manera en qué se está enviando información a través de la API.

#### General

Para cambiar el nombre del Espacio o su UID, es posible hacerlo desde acá.

#### Localización

Modyo permite el cambio de idiomas y léxicos según el país en que se necesite. El cambio es útil en el caso de que se necesite trabajar con contenido personalizado y usuarios con distintos lenguajes.

##### Buscando entries en otros idiomas

La API de Modyo entrega entries en el idioma por defecto del Espacio, a menos que se pida explícitamente otro idioma a través del parámetro de query string locale o el Accept-Language header.

Por ejemplo, para obtener entries en el idioma Español-Chile (es_CL):

```plain
Query string: GET .../posts/entries?locale=es_CL
Header: Setear Accept-Language es_CL
```

#### Caché

Si se quiere habilitar el caché y dejar tiempo a algunas acciones, es posible hacerlo desde esta sección. Además, regular el tiempo de vida del mismo, medido en segundos.

Si se está trabajando en modo Desarrollo, se recomienda deshabilitar esta opción, con tal de que los cambios en la API sean visibles automáticamente y no esperar la renovación.

#### Seguridad

Modyo, como forma de transmisión segura de datos, permite habilitar CORS para que la API pueda ser interpretada mejor por cualquier microservicio.

Para ello, también es necesario especificar el dominio desde dónde será importada la información, para dar un mejor acceso.

##### CORS

Al habilitarse CORS, se producen los siguientes cambios dentro de la API:

- La configuración de URLs permitidas para acceder al contenido a nivel de Espacios, permitiendo automáticamente custom domains de sites.
- Cuando se realiza un request al API, se agrega el header ```Access-Control-Allow-Origin``` con valor request.origin a la respuesta y    ```Access-Control-Allow-Credentials' = true```, sólo si el origen pertenece a las urls/domains previamente mencionadas. En caso caso contrario no quedan configurados.
- URLS permitidas son cacheadas a nivel de aplicación.
- En caso de usar caché intermedio se debe considerar el origen en la clave de caché para que se maneje el caché por separado en cada origen:

```javascript
Varnish: sub vcl_hash {  if (req.http.Origin) { hash_data(req.http.Origin);  } }
Nginx: set $cache_key "$http_x_forwarded_proto://$host$request_uri-$http_accept-$http_x_requested_with";
```

##### CORS y SSL

Al decidir si usar SSL dentro de la plataforma, también se debe considerar lo siguiente:

- SSL: Wildcards no son permitidos.
- NO SSL: Wildcards son permitidos, pero Modyo ahora debe ser secure by default

#### Revisión en Equipo (Team Review)



La calidad del contenido que se publica en cada una de las plataformas debe ser certificada y como forma de mantener la calidad y seguridad, Modyo usa la Revisión en Equipo para confirmar y corregir los contenidos que se envían a través de la API.

En este caso, se pueden determinar cuántos miembros del equipo deben aprobar un contenido antes de ser puestos a disposición del Administrador, quien deberá publicarlos. Predeterminadamente, deben ser al menos 3 revisores, pero la cantidad puede cambiar.

El equipo puede ser predeterminado por el administrador o elegido por quien envía a revisión. Así solo ellos pueden corregir y aprobar.

Además, se puede forzar la revisión por un usuario en específico, para que este sea aprobado y seleccionar a quienes se les asignará la tarea.

Por último, es posible diferenciar quiénes deben revisar cada contenido, según el espacio en que se esté trabajando. Para ello, se puede asignar un filtro desde este lugar y determinar los miembros del equipo que chequearán la información, harán comentarios y darán su aprobación.

[Ir a Team Review](https://docs.modyo.com/guides/advance-topics/team-review.html)

#### Miembros del Equipo

Para ordenar el trabajo, Modyo permite filtrar los miembros del equipo que trabajarán en cada espacio y así tendrán acceso a la escritura, revisión o publicación.

Para ello, el SuperAdministrador puede asignar manualmente a los usuarios los roles predeterminados que habilitan cada una de las funciones.
