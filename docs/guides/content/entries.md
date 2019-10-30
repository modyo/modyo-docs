---
search: true
---

# Entradas

## Sobre la interfaz

A primera vista, podrás ver una lista que contendrá todos los contenidos que están dentro de la plataforma, generados por todos los usuarios.

La lista está ordenada por fecha de actualización del contenido. En este caso, hace referencia a cada vez que guardas el contenido dentro de la plataforma.

Las columnas por las cuales se pueden ordenar los posts son:

- **Etapa**: Refiere a la etapa en el proceso de Revisión en Equipo del contenido, si es que este se encuentra activo. En este caso, las etapas son cuatro: Borrador, Publicado, Cambios Pendientes y Rechazado. (Ver [Team Review](/guides/platform/team-review.html))
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

Para crear una entrada, se debe hacer click en el botón de la parte superior derecha de la pantalla. Así, antes de crearla, Modyo pedirá el tipo de entrada que deberá crear, para organizar el formato a presentar, el cuál se puede crear en la sección [Tipos](/guides/content/types.html).

Al hacer click en ella, podremos ver el formulario que podremos rellenar con el contenido que queremos enviar, que estará personalizado según lo que armamos a través de Tipos.

Arriba, podrás ver el Tipo que estás creando. Además, si tu espacio está configurado para escribirse en más de un idioma, aparecerá la lista en los lenguajes que se está escribiendo, empezando por el que está por defecto.


::: tip
Para traducir una entrada ya escrita a un idioma distinto, solo deberás hacer click en el idioma actual y seleccionar el idioma en el que quieres escribirlo. Así, llegarás a un nuevo post en blanco, donde solo tendrás que pulsar el botón "Copiar desde idioma" para traer la información a tu entrada y poder traducirla de manera más fácil.
:::

### Publicar una Entrada

Para publicar una entrada, Modyo te asegura un proceso de chequeo paulatino con tal de certificar que el contenido que vayas a ofrecer se encuentre correcto.

Al terminar el desarrollo de tu entrada, en la parte superior de la pantalla encontrarás el botón Guardar, que grabará todo tu contenido. 

Si haces click en este, el botón experimentará dos cambios. Si es que tienes permisos de Administrador del Espacio, podrás publicar automáticamente. Si es que no tienes esos permisos, no puedes publicar el recurso, sino que otro usuario con un rol superior a ti, puede hacerlo.

Sin embargo, si se encuentra la opción de Revisión en Equipo, pasará al proceso de chequeo por parte de otros usuarios, donde podrás asignar a revisores en específico quienes podrán publicar. 

Ver [Revisión en Equipo](/guides/platform/team-review.html)


### Despublicar una entrada

Para despublicar una entrada, debes entrar al recurso y hacer click en el boton Despublicar que se encuentra en la parte superior de la pantalla. Con esto, el recurso volverá a la categoría de Borrador y no se encontrará en la categoría de Publicados.

Si quieres republicar la entrada, esta volverá a pasar por el proceso de Revisión en Equipo, por lo que si haces un cambio, se volverá a guardar y el usuario con un rol superior deberá aprobarla para ser publicada correctamente.

## Metainformación/Propiedades

La metainformación es fundamental para la optimización de la indexación en buscadores, por lo que rellenar cuidadosamente de ella nos puede asegurar un buen desempeño en cuanto al flujo de visitantes externos, si así lo deseamos.

Por lo mismo, la mayoría de la metainformación se puede manejar a través de la sección de Propiedades de cada entrada.

Las propiedades que se pueden customizar a través de la interfaz de Entrada son:

- Categorías
- Slug
- Tags
- Contenido privado

### Categorías

Las Categorías son una de las formas más útiles de Modyo para ordenar tus Entradas. En este caso, cada vez que se use una Categoría, se genera una ruta en la web que nos permite acceder al recurso sin tener que pasar por otras webs, en el caso de que este se encuentre de manera pública.

Es importante que las Categorías siempre tengan una característica uniforme que permita agrupar a los elementos de manera directa, en forma de verse como vista de árbol o directorios.

Para ver las Categorías, es necesario que hagamos click en la sección Categorías, que se encuentra a un costado izquierdo de la interfaz de entrada. Ahí, podremos ver todas las categorías que se encuentran ya hechas. 

#### Crear una Categoría

Si queremos crear una, solo debemos hacer click en el botón verde que se encuentra en la parte superior de la pantalla. Después, podremos ver una ventana que nos pedirá ingresar el nombre de la Categoría, la Ruta y si esta pertenece a una Categoría Padre)

::: tip
Cuando se ingrese el nombre de la categoría, la ruta se establecerá predeterminadamente como un slug. Si queremos cambiarla, solo basta con hacer click en ella.

Si cambiamos la ruta, recuerda cambiar todos los vínculos a ella, si es que se encuentran en un sitio web.
:::

::: warning
Si se quiere eliminar una categoría, simplemente basta con hacer click en el ícono que se encuentra al final del nombre de esta. Sin embargo, si hay Entradas asignadas a esa categoría, no se borrarán sino que no estarán a asignadas a ninguna otra. Para volver a asignarlas, es necesario entrar nuevamente a las Propiedades de la entrada.
:::

::: danger
Si se borra la Categoría Padre, se borrarán también todas las subcategorías asignadas a esta. Sin embargo, todas las Entradas que estén ligadas a esta Categoría, no tendrán ninguna asignación, por lo que es importante volver a asignarlas una por una.
:::


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

