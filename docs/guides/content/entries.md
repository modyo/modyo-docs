---
search: true
---

# Entradas

## Sobre la interfaz

A primera vista, podrás ver una lista que contendrá todos los contenidos que están dentro de la plataforma, generados por todos los usuarios.

La lista está ordenada por fecha de actualización del contenido. En este caso, hace referencia a cada vez que guardas el contenido dentro de la plataforma.

Las columnas por las cuales se pueden ordenar los posts son:

- **Etapa**: Refiere a la etapa en el proceso de Revisión en Equipo del contenido, si es que este se encuentra activo. En este caso, los estados son cuatro: Borrador, Publicado, Cambios Pendientes y Rechazado. (Ver [Team Review](/guides/platform/team-review.html))
- **Nombre**: Nombre del contenido.
- **Tipo**: Tipo del Contenido (Ver [Tipos](/guides/content/types.html)).
- **Actualizado**: Fecha de la última actualización guardada del contenido.
- **Autor**: Nombre del autor del contenido.

En el administrador también podrás filtrar la vista según varios contextos predeterminados que podrás ir ajustando según tu necesidad, independiente de cómo ordenes la lista de tus contenidos.

En este caso, los filtros son cinco:

- **Tipo**: Tipo del Contenido que se ha creado (Ver [Tipos](/guides/content/types.html))
- **Estado**: Estado en que se encuentra en el proceso de publicación del contenido. En este caso, los estados son cuatro: Borrador, Publicado, Programado y Archivado.
- **Categoría**: Categoría a la que se encuentra asignada el contenido.
- **Idioma**: Idioma en que se encuentra escrito el contenido.
- **Traducción**: Si estás trabajando en una plataforma que necesite producir iguales contenidos en distintos idiomas, puedes revisar si estos se encuentran  traducidos. En este caso, los usuarios podrán asignar si el contenido ya se encuentra trauducido o no.
- **Tags**: Tags a los que se encuentra asignado el contenido. En este caso, puedes encontrar en orden alfabético las etiquetas asignadas o puedes ocupar la barra de búsqueda interior para encontrarlas.
- **Barra de búsqueda**: Si es necesario, puedes buscar el contenido según lo que esté dentro del este, como una palabra o código que tengan.

::: warning
La barra de búsqueda exterior no incluye los resultados que se encuentren en los tags. Si buscas una palabra que esté dentro de un tag, debes usar la barra interior que se encuentra bajo el botón. 
:::

## Crear una Entrada

Para crear una entrada, se debe hacer click en el botón de la parte superior derecha de la pantalla. Así, antes de crearla, Modyo pedirá el tipo de entrada que deberá crear, para organizar el formato a presentar, el cuál se puede crear en la sección Tipos.

Al hacer click en ella, podremos ver el formulario que podremos rellenar con el contenido que queremos enviar, que estará personalizado según lo que armamos.

De ahí, podremos ver en nuestro botón de Vista Previa el código que se enviará a través de la API, el cual el microservicio deberá interpretar.

::: danger
Missing description
Publicar una entry (ahora/publicar en)
Despublicar una entry (ahora/despublicar en)
Enviar a revisión - Link a team review
:::

## Metainformación/Propiedades

::: danger
Missing description
Catregorías
Tags
Privacidad/Targets
:::

### Categorías

### Targets

## Contenido Privado

Para cualquier usuario de Modyo, es importante el contenido privado targetizado a cualquier cliente. Sin embargo, es muy facil de buscar a través de la API para cualquier usuario que tenga los permisos habilitados.

Quien quiera buscarlo, debe contar con un Content Delivery Token. El Content Delivery Token se obtiene a través de la API de Profile.

El Content Delivery Token es un JWT con los siguientes _claims_:

- iss: URL base de la API de profile
- aud: URL base de la API de contenido
- sub: Nombre del Espacio
- exp: Tiempo de expiración del token
- access_type: delivery,
- targets: Array de targets

Si lo llevamos a código, se verá de la siguiente manera:

```javascript
{
  "iss": "[dominio de la plataforma]/api/profile",
  "aud": "[dominio de la plataforma]/api/content",
  "sub": "account_uuid",
  "exp": ["tiempo de expiración en segundos"],
  "access_type": "delivery",
  "targets": ["target1", "target2"]
}

```

Para establecer un token, es necesario hacerlo a través del parámetro de query string ```delivery_token``` o el header ```delivery_token```.

----

Una API es una herramienta que pone a disposición información a programas en un formato más conveniente. Por ejemplo, puedes ir a un sitio en un navegador y ver la información en un formato ordenado y atractivo.

Esa misma API, presenta su información de una manera que es conveniente para programas. Entrega la información directamente.

Más abajo hay tres ejemplos de como puedes utilizar APIs para traer información para un custom widget y así utilizarlo como quieras.

Todos los ejemplos deben ser incluidos en la pestaña de JavaScript de tu custom widget.
