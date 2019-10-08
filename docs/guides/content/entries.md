---
search: true
---

# Entradas

## Sobre la intefaz

::: danger
Missing description
Filtros: tipo, estado, categoría, idioma, traducción, tags, autor, búsqueda
Columnas de la tabla
:::

## Crear una Entrada

Para crear una entrada, se debe hacer clic en el botón de la parte superior derecha de la pantalla. Así, antes de crearla, Modyo pedirá el tipo de entrada que deberá crear, para organizar el formato a presentar, el cuál se puede crear en la sección Tipos.

Al hacer clic en ella, podremos ver el formulario que podremos rellenar con el contenido que queremos enviar, que estará personalizado según lo que armamos.

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
